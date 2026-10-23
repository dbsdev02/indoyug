import { useMemo, useRef, useState, type ReactNode } from 'react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { z } from 'zod';
import { useNavigate } from 'react-router-dom';
import { AlertCircle, Loader2, Paperclip, Send } from 'lucide-react';
import { categories } from '../../data/categories';
import { products } from '../../data/products';
import { submitEnquiry, type EnquiryKind } from '../../lib/enquiry';
import { cn } from '../../lib/utils';

type Variant = 'quote' | 'contact' | 'product' | 'short';

const MAX_FILE_MB = 10;
const ACCEPT = '.pdf,.dwg,.dxf,.jpg,.jpeg,.png,.doc,.docx,.xls,.xlsx,.zip';
const phoneRe = /^[+()\-\s\d]{7,20}$/;

const base = {
  fullName: z.string().trim().min(2, 'Please enter your full name').max(100),
  company: z.string().trim().min(2, 'Please enter your company name').max(150),
  email: z.string().trim().email('Please enter a valid business email'),
  phone: z.string().trim().regex(phoneRe, 'Please enter a valid phone number, e.g. +91 98765 43210'),
  consent: z.literal(true, { errorMap: () => ({ message: 'Please agree so we can respond to your enquiry' }) }),
  website: z.string().max(0).optional(), // honeypot — must stay empty
};

const schemas = {
  quote: z.object({
    ...base,
    location: z.string().trim().min(2, 'Please enter your city and country').max(120),
    category: z.string().min(1, 'Please choose a product category'),
    product: z.string().optional(),
    quantity: z.string().trim().max(50).optional(),
    projectType: z.string().min(1, 'Please choose a project type'),
    specifications: z.string().trim().max(2000).optional(),
    timeline: z.string().min(1, 'Please choose an expected timeline'),
    message: z.string().trim().max(3000).optional(),
  }),
  product: z.object({
    ...base,
    location: z.string().trim().min(2, 'Please enter your city and country').max(120),
    quantity: z.string().trim().max(50).optional(),
    message: z.string().trim().min(5, 'Please tell us briefly what you need').max(3000),
  }),
  contact: z.object({ ...base, message: z.string().trim().min(10, 'Please enter a message (at least 10 characters)').max(3000) }),
  short: z.object({ ...base, message: z.string().trim().min(10, 'Please describe your requirement (at least 10 characters)').max(3000) }),
};

type FormValues = Record<string, string | boolean | undefined>;

export function EnquiryForm({ variant = 'contact', kind, productSlug, defaultCategory, context, submitLabel }: {
  variant?: Variant;
  kind?: EnquiryKind;
  productSlug?: string;
  defaultCategory?: string;
  /** Short description of where the form sits, sent with the submission (e.g. "Manufacturing page"). */
  context?: string;
  submitLabel?: string;
}) {
  const navigate = useNavigate();
  const startedAt = useRef(Date.now());
  const [file, setFile] = useState<File | null>(null);
  const [fileError, setFileError] = useState<string | null>(null);
  const [serverError, setServerError] = useState<string | null>(null);

  const preProduct = productSlug ? products.find((p) => p.slug === productSlug) : undefined;
  const form = useForm<FormValues>({
    resolver: zodResolver(schemas[variant] as unknown as z.ZodType<FormValues>),
    mode: 'onTouched',
    defaultValues: {
      category: preProduct?.category ?? defaultCategory ?? '',
      product: preProduct?.slug ?? '',
      projectType: '',
      timeline: '',
      consent: false,
      website: '',
    },
  });
  const { register, handleSubmit, watch, formState: { errors, isSubmitting } } = form;
  const category = watch('category') as string;
  const productOptions = useMemo(() => products.filter((p) => !category || p.category === category), [category]);

  const err = (name: string) => (errors[name]?.message as string | undefined);

  const onFile = (f: File | undefined) => {
    setFileError(null);
    if (!f) return setFile(null);
    if (f.size > MAX_FILE_MB * 1024 * 1024) { setFile(null); return setFileError(`File is larger than ${MAX_FILE_MB} MB. Please email large drawings to info@indoyug.in.`); }
    const ext = f.name.split('.').pop()?.toLowerCase() ?? '';
    if (!ACCEPT.split(',').includes(`.${ext}`)) { setFile(null); return setFileError('Unsupported file type. Use PDF, DWG, DXF, JPG, PNG, DOC(X), XLS(X) or ZIP.'); }
    setFile(f);
  };

  const onSubmit = async (values: FormValues) => {
    setServerError(null);
    // Basic bot checks (repeated on the server): honeypot + minimum fill time.
    if (values.website) return;
    if (Date.now() - startedAt.current < 3000) {
      setServerError('That was very quick — please review your details and submit again.');
      startedAt.current = Date.now() - 3000;
      return;
    }
    const payload = {
      ...values,
      product: (values.product as string) || preProduct?.slug || '',
      productName: products.find((p) => p.slug === ((values.product as string) || preProduct?.slug))?.name ?? '',
      context: context ?? '',
      elapsedMs: String(Date.now() - startedAt.current),
    };
    const res = await submitEnquiry(kind ?? (variant === 'quote' ? 'quote' : variant === 'product' ? 'product' : 'contact'), payload, file);
    if (res.ok) {
      navigate('/thank-you', { state: { submitted: true, reference: res.reference ?? null, product: payload.productName } });
    } else {
      setServerError(res.error ?? 'Something went wrong. Please try again.');
    }
  };

  const a = (name: string, hint?: boolean) => ({
    id: `f-${name}`,
    'aria-invalid': err(name) ? true : undefined,
    'aria-describedby': err(name) ? `f-${name}-error` : hint ? `f-${name}-hint` : undefined,
    className: cn('field', err(name) && 'border-red-600 focus:border-red-600 focus:ring-red-600/20'),
  });

  return (
    <form onSubmit={handleSubmit(onSubmit)} noValidate className="space-y-5" aria-describedby="form-required-note">
      <p id="form-required-note" className="text-sm text-steel">Fields marked <span className="text-red-700">*</span> are required.</p>

      {preProduct && variant !== 'quote' && (
        <div className="rounded border border-brand-100 bg-brand-50 px-4 py-3 text-sm">
          <span className="font-mono text-[10.5px] uppercase tracking-wider text-brand-500">Enquiry for</span>
          <p className="font-semibold text-brand-900">{preProduct.name}</p>
        </div>
      )}

      {/* Honeypot: hidden from people and assistive tech */}
      <div aria-hidden className="absolute -left-[9999px] h-0 w-0 overflow-hidden">
        <label htmlFor="f-website">Website</label>
        <input id="f-website" tabIndex={-1} autoComplete="off" {...register('website')} />
      </div>

      <div className="grid gap-5 sm:grid-cols-2">
        <FieldWrap error={err('fullName')} name="fullName" label="Full name" required><input type="text" autoComplete="name" {...a('fullName')} {...register('fullName')} /></FieldWrap>
        <FieldWrap error={err('company')} name="company" label="Company name" required><input type="text" autoComplete="organization" {...a('company')} {...register('company')} /></FieldWrap>
        <FieldWrap error={err('email')} name="email" label="Business email" required><input type="email" autoComplete="email" inputMode="email" {...a('email')} {...register('email')} /></FieldWrap>
        <FieldWrap error={err('phone')} name="phone" label="Phone number" required><input type="tel" autoComplete="tel" inputMode="tel" placeholder="+91" {...a('phone')} {...register('phone')} /></FieldWrap>
        {(variant === 'quote' || variant === 'product') && (
          <FieldWrap error={err('location')} name="location" label="City and country" required className={variant === 'product' ? '' : 'sm:col-span-2'}>
            <input type="text" autoComplete="address-level2" placeholder="e.g. Vapi, India" {...a('location')} {...register('location')} />
          </FieldWrap>
        )}
        {variant === 'product' && (
          <FieldWrap error={err('quantity')} name="quantity" label="Required quantity"><input type="text" placeholder="e.g. 2 units" {...a('quantity')} {...register('quantity')} /></FieldWrap>
        )}
      </div>

      {variant === 'quote' && (
        <>
          <div className="grid gap-5 sm:grid-cols-2">
            <FieldWrap error={err('category')} name="category" label="Product category" required>
              <select {...a('category')} {...register('category', { onChange: () => form.setValue('product', '') })}>
                <option value="">Select a category</option>
                {categories.map((c) => <option key={c.id} value={c.id}>{c.name}</option>)}
                <option value="multiple">Multiple / complete project</option>
              </select>
            </FieldWrap>
            <FieldWrap error={err('product')} name="product" label="Specific product">
              <select {...a('product')} {...register('product')} disabled={category === 'multiple'}>
                <option value="">{category === 'multiple' ? 'Not applicable' : 'Select a product (optional)'}</option>
                {category !== 'multiple' && productOptions.map((p) => <option key={p.slug} value={p.slug}>{p.name}</option>)}
              </select>
            </FieldWrap>
            <FieldWrap error={err('quantity')} name="quantity" label="Required quantity"><input type="text" placeholder="e.g. 4 units" {...a('quantity')} {...register('quantity')} /></FieldWrap>
            <FieldWrap error={err('projectType')} name="projectType" label="Project type" required>
              <select {...a('projectType')} {...register('projectType')}>
                <option value="">Select project type</option>
                <option>New facility</option>
                <option>Expansion / upgrade of existing facility</option>
                <option>Equipment replacement</option>
                <option>Turnkey cleanroom / laboratory project</option>
                <option>Budgetary estimate only</option>
                <option>Other</option>
              </select>
            </FieldWrap>
            <FieldWrap error={err('timeline')} name="timeline" label="Expected project timeline" required className="sm:col-span-2">
              <select {...a('timeline')} {...register('timeline')}>
                <option value="">Select timeline</option>
                <option>Immediate (within 1 month)</option>
                <option>1–3 months</option>
                <option>3–6 months</option>
                <option>6+ months</option>
                <option>Planning stage / not yet fixed</option>
              </select>
            </FieldWrap>
          </div>
          <FieldWrap error={err('specifications')} name="specifications" label="Required specifications" hint="Sizes, material (e.g. SS 304 / 316), cleanroom class, options, utilities.">
            <textarea rows={4} {...a('specifications', true)} {...register('specifications')} />
          </FieldWrap>
        </>
      )}

      <FieldWrap error={err('message')} name="message" label={variant === 'quote' ? 'Additional message' : 'Your requirement'} required={variant !== 'quote'}>
        <textarea rows={variant === 'quote' ? 4 : 5} {...a('message')} {...register('message')} />
      </FieldWrap>

      {variant === 'quote' && (
        <div>
          <label htmlFor="f-attachment" className="field-label">Technical drawings or specifications <span className="font-normal text-steel">(optional)</span></label>
          <label htmlFor="f-attachment" className="flex cursor-pointer items-center gap-3 rounded border border-dashed border-brand-200 bg-surface px-4 py-4 text-sm hover:border-brand-500">
            <Paperclip className="h-5 w-5 text-brand-500" aria-hidden />
            <span className="flex-1 truncate">{file ? <span className="font-medium text-ink">{file.name}</span> : <span className="text-steel">Choose a file — PDF, DWG, DXF, images, Office or ZIP, up to {MAX_FILE_MB} MB</span>}</span>
            {file && <button type="button" onClick={(e) => { e.preventDefault(); setFile(null); }} className="text-xs font-semibold text-brand-700 hover:underline">Remove</button>}
          </label>
          <input id="f-attachment" type="file" accept={ACCEPT} className="sr-only" aria-describedby={fileError ? 'f-attachment-error' : undefined} onChange={(e) => onFile(e.target.files?.[0])} />
          {fileError && <p id="f-attachment-error" role="alert" className="field-error">{fileError}</p>}
        </div>
      )}

      <div>
        <label className="flex items-start gap-3 text-sm text-ink-soft">
          <input type="checkbox" className="mt-1 h-4 w-4 rounded border-surface-line text-brand-700 focus:ring-brand-500" aria-invalid={err('consent') ? true : undefined} aria-describedby={err('consent') ? 'f-consent-error' : undefined} {...register('consent')} />
          <span>I agree that Indoyug Clean Tech LLP may use these details to respond to my enquiry, as described in the <a href="/privacy-policy" className="link font-medium" target="_blank" rel="noopener">privacy policy</a>. <span className="text-red-700" aria-hidden>*</span></span>
        </label>
        {err('consent') && <p id="f-consent-error" role="alert" className="field-error">{err('consent')}</p>}
      </div>

      {serverError && (
        <div role="alert" className="flex gap-3 rounded border border-red-200 bg-red-50 p-4 text-sm text-red-900">
          <AlertCircle className="mt-0.5 h-4 w-4 shrink-0" aria-hidden />
          <p>{serverError}</p>
        </div>
      )}

      <button type="submit" className="btn-primary w-full sm:w-auto" disabled={isSubmitting}>
        {isSubmitting ? <><Loader2 className="h-4 w-4 animate-spin" aria-hidden /> Sending…</> : <><Send className="h-4 w-4" aria-hidden /> {submitLabel ?? (variant === 'quote' ? 'Submit quote request' : 'Send enquiry')}</>}
      </button>
      <p className="sr-only" aria-live="polite">{isSubmitting ? 'Sending your enquiry' : ''}</p>
    </form>
  );
}

interface FieldProps { name: string; label: string; required?: boolean; children: ReactNode; hint?: string; className?: string }

/** Defined at module level so inputs keep focus across re-renders. */
function FieldWrap({ name, label, required, children, hint, className, error }: FieldProps & { error?: string }) {
  return (
    <div className={className}>
      <label htmlFor={`f-${name}`} className="field-label">{label}{required && <span className="text-red-700" aria-hidden> *</span>}</label>
      {children}
      {hint && !error && <p id={`f-${name}-hint`} className="mt-1 text-xs text-steel">{hint}</p>}
      {error && <p id={`f-${name}-error`} role="alert" className="field-error">{error}</p>}
    </div>
  );
}
