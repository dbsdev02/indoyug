import { useSearchParams } from 'react-router-dom';
import { Clock, FileText, Mail, Phone, ShieldCheck } from 'lucide-react';
import { SEO } from '../components/common/SEO';
import { PageHero } from '../components/common/PageHero';
import { EnquiryForm } from '../components/forms/EnquiryForm';
import { EditorNote } from '../components/common/Notice';
import { breadcrumbJsonLd } from '../components/common/Breadcrumbs';
import { enquiryConfigured } from '../lib/enquiry';
import { company } from '../data/company';
import { getProduct } from '../data/products';

export default function RequestQuote() {
  const [params] = useSearchParams();
  const slug = params.get('product') ?? undefined;
  const product = slug ? getProduct(slug) : undefined;
  const category = params.get('category') ?? undefined;
  const crumbs = [{ label: 'Request a Quote' }];
  return (
    <>
      <SEO title="Request a Quote — Cleanroom Equipment & Laboratory Furniture" description="Send Indoyug your requirement for cleanroom equipment, laboratory furniture, SS furniture or a turnkey project. Attach drawings and specifications." path="/request-a-quote" jsonLd={breadcrumbJsonLd(company.siteUrl, crumbs)} />
      <PageHero compact crumbs={crumbs} eyebrow="Request a quote" title={product ? `Quote for ${product.name}` : 'Request a quotation'} intro="Tell us what you need. Every Indoyug quotation is configured to your requirement — the more detail you share, the more precise our proposal." />
      <section className="py-14 md:py-16">
        <div className="container grid gap-12 lg:grid-cols-12">
          <div className="lg:col-span-8">
            {!enquiryConfigured && <EditorNote className="mb-6">The form backend is not connected (VITE_ENQUIRY_ENDPOINT is empty). Submissions will show an error with phone and email details rather than a false confirmation. See server/README.md.</EditorNote>}
            <div className="card p-6 md:p-8">
              <EnquiryForm key={slug ?? category ?? 'none'} variant="quote" kind="quote" productSlug={slug} defaultCategory={category} context="Request a quote page" />
            </div>
          </div>
          <aside className="space-y-6 lg:col-span-4">
            <div className="ticks border border-surface-line bg-surface p-6">
              <h2 className="text-lg font-bold">What happens next</h2>
              <ol className="mt-4 space-y-4 text-[15px]">
                {[
                  [FileText, 'We review your requirement and drawings.'],
                  [Phone, 'An engineer may call to clarify specifications.'],
                  [Clock, 'You receive a configured quotation.'],
                ].map(([Icon, t], i) => { const I = Icon as typeof FileText; return <li key={i} className="flex gap-3"><I className="mt-0.5 h-5 w-5 shrink-0 text-brand-500" aria-hidden /><span>{t as string}</span></li>; })}
              </ol>
            </div>
            <div className="card p-6">
              <h2 className="text-lg font-bold">Prefer to talk?</h2>
              <ul className="mt-4 space-y-3">
                {company.phones.map((p) => <li key={p.tel}><a href={`tel:${p.tel}`} className="flex items-center gap-3 font-semibold text-brand-800 hover:underline"><Phone className="h-4 w-4" aria-hidden />{p.display}</a></li>)}
                <li><a href={`mailto:${company.email}`} className="flex items-center gap-3 font-semibold text-brand-800 hover:underline"><Mail className="h-4 w-4" aria-hidden />{company.email}</a></li>
              </ul>
            </div>
            <p className="flex gap-3 text-sm text-steel"><ShieldCheck className="h-5 w-5 shrink-0 text-brand-500" aria-hidden />Your details are used only to respond to your enquiry. See our privacy policy.</p>
          </aside>
        </div>
      </section>
    </>
  );
}
