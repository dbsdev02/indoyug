import { Link, useParams } from 'react-router-dom';
import { ArrowRight, Check, Download, FileQuestion, Layers, Phone, ShieldCheck } from 'lucide-react';
import { SEO } from '../components/common/SEO';
import { Breadcrumbs, breadcrumbJsonLd } from '../components/common/Breadcrumbs';
import { ProductGallery } from '../components/products/ProductGallery';
import { ProductSpecifications } from '../components/products/ProductSpecifications';
import { RelatedProducts } from '../components/products/RelatedProducts';
import { EnquiryForm } from '../components/forms/EnquiryForm';
import { StockImage } from '../components/common/StockImage';
import { getProduct } from '../data/products';
import { getCategory } from '../data/categories';
import { getIndustry } from '../data/industries';
import { company } from '../data/company';
import NotFound from './NotFound';

export default function ProductDetail() {
  const { slug = '' } = useParams();
  const product = getProduct(slug);
  if (!product) return <NotFound />;

  const cat = getCategory(product.category)!;
  const crumbs = [{ label: 'Products', href: '/products' }, { label: cat.name, href: `/products?category=${cat.id}` }, { label: product.name }];
  const gallery = product.gallery.length ? product.gallery : product.image ? [product.image] : [];
  const industries = product.industries.map(getIndustry).filter(Boolean);
  const path = `/products/${product.slug}`;

  // Product schema only with real data: name, description, image, brand. No price/rating.
  const productLd = product.image && !product.image.src.includes('/stock/')
    ? {
        '@context': 'https://schema.org',
        '@type': 'Product',
        name: product.name,
        description: product.shortDescription,
        image: `${company.siteUrl}${product.image.src}`,
        category: cat.name,
        brand: { '@type': 'Brand', name: 'Indoyug' },
        manufacturer: { '@id': `${company.siteUrl}/#organization` },
        url: `${company.siteUrl}${path}`,
        ...(product.specifications.length ? { additionalProperty: product.specifications.map((s) => ({ '@type': 'PropertyValue', name: s.label, value: s.value })) } : {}),
      }
    : null;

  const sectionNav = [
    { id: 'overview', label: 'Overview' },
    { id: 'features', label: 'Features' },
    ...(product.variants?.length ? [{ id: 'variants', label: 'Variants' }] : []),
    { id: 'specifications', label: 'Specifications' },
    { id: 'applications', label: 'Applications' },
    { id: 'enquiry', label: 'Enquire' },
  ];

  return (
    <>
      <SEO
        title={`${product.name} Manufacturer | ${cat.shortName}`}
        description={`${product.shortDescription} ${product.specifications.length ? 'Technical specifications, options and applications.' : 'Configured per project — request specifications.'} Indoyug Clean Tech LLP, Gujarat.`.slice(0, 300)}
        path={path}
        image={product.image?.src}
        type="product"
        jsonLd={[breadcrumbJsonLd(company.siteUrl, crumbs), ...(productLd ? [productLd] : [])]}
      />

      {/* Header */}
      <section className="border-b border-surface-line bg-white">
        <div className="container py-8 md:py-12">
          <Breadcrumbs items={crumbs} />
          <div className="grid gap-10 lg:grid-cols-12">
            <div className="lg:col-span-7"><ProductGallery images={gallery} name={product.name} /></div>
            <div className="lg:col-span-5">
              <Link to={`/products?category=${cat.id}`} className="eyebrow hover:underline">{cat.name}</Link>
              <h1 className="mt-3 text-[2.1rem] font-extrabold leading-tight md:text-[2.75rem]">{product.name}</h1>
              <p className="mt-4 text-lg leading-relaxed text-ink-soft">{product.shortDescription}</p>

              {product.features.length > 0 && (
                <ul className="mt-6 space-y-2.5">
                  {product.features.slice(0, 5).map((f) => (
                    <li key={f.title} className="flex gap-3 text-[15.5px]"><Check className="mt-0.5 h-5 w-5 shrink-0 text-brand-500" aria-hidden /><span className="font-medium">{f.title}</span></li>
                  ))}
                </ul>
              )}

              <div className="mt-8 flex flex-col gap-3 sm:flex-row">
                <Link to={`/request-a-quote?product=${product.slug}`} className="btn-primary">Request a Quote <ArrowRight className="h-4 w-4" aria-hidden /></Link>
                <a href={`tel:${company.phones[0].tel}`} className="btn-outline"><Phone className="h-4 w-4" aria-hidden /> Call sales</a>
              </div>

              <div className="mt-8 grid grid-cols-2 gap-px overflow-hidden rounded border border-surface-line bg-surface-line text-sm">
                <div className="bg-surface p-4"><p className="font-mono text-[10.5px] uppercase tracking-wider text-steel">Sizes</p><p className="mt-1 font-semibold">Standard & custom</p></div>
                <div className="bg-surface p-4"><p className="font-mono text-[10.5px] uppercase tracking-wider text-steel">Pricing</p><p className="mt-1 font-semibold">On quotation</p></div>
              </div>

              {product.datasheetUrl ? (
                <a href={product.datasheetUrl} target="_blank" rel="noopener" className="mt-4 flex items-center gap-3 rounded border border-surface-line p-4 hover:border-brand-500">
                  <Download className="h-5 w-5 text-brand-500" aria-hidden />
                  <span className="flex-1"><span className="block font-semibold">Download product sheet</span><span className="text-sm text-steel">PDF · from the Indoyug brochure</span></span>
                </a>
              ) : (
                <Link to={`/request-a-quote?product=${product.slug}`} className="mt-4 flex items-center gap-3 rounded border border-dashed border-surface-line p-4 hover:border-brand-500">
                  <FileQuestion className="h-5 w-5 text-brand-500" aria-hidden />
                  <span className="flex-1"><span className="block font-semibold">Request documentation</span><span className="text-sm text-steel">No published datasheet yet — we’ll send details for your configuration</span></span>
                </Link>
              )}
            </div>
          </div>
        </div>
      </section>

      {/* In-page navigation */}
      <nav aria-label="On this page" className="sticky top-16 z-30 border-b border-surface-line bg-white/95 backdrop-blur">
        <div className="container scrollbar-thin flex gap-1 overflow-x-auto">
          {sectionNav.map((s) => <a key={s.id} href={`#${s.id}`} className="shrink-0 border-b-2 border-transparent px-3 py-3.5 text-sm font-semibold text-ink-soft hover:border-brand-500 hover:text-brand-700">{s.label}</a>)}
        </div>
      </nav>

      <div className="container grid gap-14 py-14 lg:grid-cols-12">
        <div className="space-y-16 lg:col-span-8">
          <section id="overview" aria-labelledby="h-overview">
            <h2 id="h-overview" className="mb-5 text-2xl font-bold md:text-3xl">Overview</h2>
            <div className="prose-body max-w-prose">{product.description.map((p, i) => <p key={i}>{p}</p>)}</div>
          </section>

          <section id="features" aria-labelledby="h-features">
            <h2 id="h-features" className="mb-6 text-2xl font-bold md:text-3xl">Key features &amp; benefits</h2>
            <ul className="grid gap-px overflow-hidden rounded border border-surface-line bg-surface-line sm:grid-cols-2">
              {product.features.map((f, i) => (
                <li key={f.title} className="bg-white p-5">
                  <span className="font-mono text-xs text-brand-500">{String(i + 1).padStart(2, '0')}</span>
                  <h3 className="mt-1.5 text-[17px] font-bold">{f.title}</h3>
                  {f.text && <p className="mt-1 text-[15px] leading-relaxed text-ink-soft">{f.text}</p>}
                </li>
              ))}
            </ul>
          </section>

          {product.variants?.length ? (
            <section id="variants" aria-labelledby="h-variants">
              <h2 id="h-variants" className="mb-6 text-2xl font-bold md:text-3xl">Available variants</h2>
              <ul className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
                {product.variants.map((v) => (
                  <li key={v.name} className="card overflow-hidden">
                    {product.variants!.some((x) => x.image) && (
                      <div className="aspect-[4/3] bg-surface">{v.image ? <img src={v.image} alt={v.name} loading="lazy" className="h-full w-full object-cover" /> : <StockImage label={v.name} />}</div>
                    )}
                    <div className="p-4"><h3 className="font-bold">{v.name}</h3>{v.description && <p className="mt-1 text-sm text-ink-soft">{v.description}</p>}</div>
                  </li>
                ))}
              </ul>
            </section>
          ) : null}

          <section id="specifications" aria-labelledby="h-specs">
            <h2 id="h-specs" className="mb-6 text-2xl font-bold md:text-3xl">Technical specifications</h2>
            <ProductSpecifications product={product} />
            {product.options?.length ? (
              <div className="mt-8">
                <h3 className="mb-3 text-xl font-bold">Options &amp; customisation</h3>
                <ul className="flex flex-wrap gap-2">{product.options.map((o) => <li key={o} className="rounded-full border border-brand-100 bg-brand-50 px-3.5 py-1.5 text-sm font-medium text-brand-900">{o}</li>)}</ul>
              </div>
            ) : null}
            {(product.materials || product.filtration) && (
              <dl className="mt-8 grid gap-4 sm:grid-cols-2">
                {product.materials && <div className="card p-5"><dt className="flex items-center gap-2 font-mono text-[11px] uppercase tracking-wider text-steel"><Layers className="h-4 w-4 text-brand-500" aria-hidden />Construction materials</dt><dd className="mt-2 font-medium">{product.materials}</dd></div>}
                {product.filtration && <div className="card p-5"><dt className="flex items-center gap-2 font-mono text-[11px] uppercase tracking-wider text-steel"><ShieldCheck className="h-4 w-4 text-brand-500" aria-hidden />Filtration</dt><dd className="mt-2 font-medium">{product.filtration}</dd></div>}
              </dl>
            )}
          </section>

          <section id="applications" aria-labelledby="h-apps">
            <h2 id="h-apps" className="mb-6 text-2xl font-bold md:text-3xl">Applications</h2>
            <ul className="grid gap-3 sm:grid-cols-2">{product.applications.map((a) => <li key={a} className="flex items-center gap-3 rounded border border-surface-line px-4 py-3 font-medium"><span className="h-1.5 w-1.5 rounded-full bg-brand-500" aria-hidden />{a}</li>)}</ul>
            {industries.length > 0 && (
              <div className="mt-6">
                <p className="mb-2 font-mono text-[11px] uppercase tracking-wider text-steel">Industries</p>
                <ul className="flex flex-wrap gap-2">{industries.map((i) => <li key={i!.slug}><Link to={`/industries/${i!.slug}`} className="inline-block rounded-full border border-surface-line px-3.5 py-1.5 text-sm font-semibold hover:border-brand-500 hover:text-brand-700">{i!.name}</Link></li>)}</ul>
              </div>
            )}
          </section>

          <section aria-labelledby="h-install">
            <h2 id="h-install" className="mb-4 text-2xl font-bold md:text-3xl">Installation &amp; maintenance</h2>
            <p className="max-w-prose text-[16px] leading-relaxed text-ink-soft">Installation, validation and after-sales support are offered as part of Indoyug project scope. Product-specific installation and maintenance guidance is supplied with the equipment — <Link to={`/request-a-quote?product=${product.slug}`} className="link">request it for your model</Link>.</p>
          </section>
        </div>

        <aside className="lg:col-span-4" aria-labelledby="enquiry-heading">
          <div id="enquiry" className="card ticks p-6 lg:sticky lg:top-32">
            <h2 id="enquiry-heading" className="text-xl font-bold">Enquire about this product</h2>
            <p className="mb-5 mt-1 text-sm text-ink-soft">Get pricing and specifications for your configuration.</p>
            <EnquiryForm variant="product" productSlug={product.slug} kind="product" context={`Product page: ${product.name}`} />
          </div>
        </aside>
      </div>

      <div className="border-t border-surface-line bg-surface py-16"><div className="container"><RelatedProducts slugs={product.relatedProducts} /></div></div>
    </>
  );
}
