import { Link, useParams } from 'react-router-dom';
import { ArrowRight, Check, ClipboardList, Download, FileQuestion, Phone } from 'lucide-react';
import { SEO } from '../components/common/SEO';
import { Breadcrumbs, breadcrumbJsonLd } from '../components/common/Breadcrumbs';
import { ProductGallery } from '../components/products/ProductGallery';
import { ProductTabs } from '../components/products/ProductTabs';
import { RelatedProducts } from '../components/products/RelatedProducts';
import { EnquiryForm } from '../components/forms/EnquiryForm';
import { getProduct } from '../data/products';
import { getCategory } from '../data/categories';
import { getDatasheetMedia } from '../data/datasheetMedia';
import { company } from '../data/company';
import NotFound from './NotFound';

export default function ProductDetail() {
  const { slug = '' } = useParams();
  const product = getProduct(slug);
  if (!product) return <NotFound />;

  const cat = getCategory(product.category)!;
  const crumbs = [{ label: 'Products', href: '/products' }, { label: cat.name, href: `/products?category=${cat.id}` }, { label: product.name }];
  const media = getDatasheetMedia(product.slug);
  // Product photos and datasheets first, then the component close-ups from the datasheets.
  const gallery = [...(product.gallery.length ? product.gallery : product.image ? [product.image] : []), ...(media?.components ?? [])];
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
              ) : media ? (
                <a href="#specifications" className="mt-4 flex items-center gap-3 rounded border border-surface-line p-4 hover:border-brand-500">
                  <ClipboardList className="h-5 w-5 text-brand-500" aria-hidden />
                  <span className="flex-1"><span className="block font-semibold">Technical data sheet</span><span className="text-sm text-steel">Specifications, standard dimensions{media.airflow.length ? ', airflow diagram' : ''} and components below</span></span>
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

      <ProductTabs product={product} media={media} aside={
        <aside className="lg:col-span-4" aria-labelledby="enquiry-heading">
          <div id="enquiry" className="card ticks p-6 lg:sticky lg:top-32">
            <h2 id="enquiry-heading" className="text-xl font-bold">Enquire about this product</h2>
            <p className="mb-5 mt-1 text-sm text-ink-soft">Get pricing and specifications for your configuration.</p>
            <EnquiryForm variant="product" productSlug={product.slug} kind="product" context={`Product page: ${product.name}`} />
          </div>
        </aside>
      } />

      <div className="border-t border-surface-line bg-surface py-16"><div className="container"><RelatedProducts slugs={product.relatedProducts} /></div></div>
    </>
  );
}
