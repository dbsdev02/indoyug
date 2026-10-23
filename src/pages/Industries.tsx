import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import { SEO } from '../components/common/SEO';
import { PageHero } from '../components/common/PageHero';
import { Reveal } from '../components/common/Reveal';
import { CTASection } from '../components/common/CTASection';
import { breadcrumbJsonLd } from '../components/common/Breadcrumbs';
import { industries } from '../data/industries';
import { getProduct } from '../data/products';
import { company } from '../data/company';

export default function Industries() {
  const crumbs = [{ label: 'Industries' }];
  return (
    <>
      <SEO title="Industries We Serve — Pharma, Biotech, Chemical, Hospital Labs, Food" description="Cleanroom equipment and laboratory furniture for pharmaceutical & biotech, chemical & process, R&D, hospital laboratories, food & beverage, electronics and cleanroom facilities." path="/industries" jsonLd={breadcrumbJsonLd(company.siteUrl, crumbs)} />
      <PageHero crumbs={crumbs} eyebrow="Industries we cater" title="Solutions for contamination-sensitive industries" intro="We serve diverse industries with customised cleanroom and laboratory furniture solutions, backed by our stainless steel furniture manufacturing capability." image={{ src: '/assets/industries/pharmaceutical-chemical.webp', alt: '' }} />
      <section className="py-16 md:py-20">
        <div className="container space-y-6">
          {industries.map((ind, i) => (
            <Reveal key={ind.slug} className="card grid overflow-hidden md:grid-cols-12">
              <div className="aspect-[16/10] bg-surface md:col-span-4 md:aspect-auto">
                {ind.image && <img src={ind.image.src} alt={ind.image.alt} loading="lazy" className="h-full w-full object-cover" />}
              </div>
              <div className="p-6 md:col-span-8 md:p-8">
                <span className="font-mono text-xs text-brand-500">{String(i + 1).padStart(2, '0')}</span>
                <h2 className="mt-1 text-2xl font-bold"><Link to={`/industries/${ind.slug}`} className="hover:text-brand-700">{ind.name}</Link></h2>
                <p className="mt-2 max-w-2xl text-[16px] leading-relaxed text-ink-soft">{ind.summary}</p>
                <p className="mb-2 mt-5 font-mono text-[11px] uppercase tracking-wider text-steel">Relevant products</p>
                <ul className="flex flex-wrap gap-2">
                  {ind.products.slice(0, 5).map((s) => { const p = getProduct(s); return p ? <li key={s}><Link to={`/products/${s}`} className="inline-block rounded-full border border-surface-line px-3 py-1 text-sm font-medium hover:border-brand-500 hover:text-brand-700">{p.name}</Link></li> : null; })}
                </ul>
                <Link to={`/industries/${ind.slug}`} className="mt-6 inline-flex items-center gap-1.5 text-sm font-semibold text-brand-700 hover:underline">Solutions for {ind.shortName} <ArrowRight className="h-4 w-4" aria-hidden /></Link>
              </div>
            </Reveal>
          ))}
          <p className="pt-4 text-sm text-steel">Listing an industry describes where Indoyug products are applied; it does not imply any industry-specific certification.</p>
        </div>
      </section>
      <CTASection />
    </>
  );
}
