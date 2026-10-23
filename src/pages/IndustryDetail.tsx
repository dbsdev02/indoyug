import { Link, useParams } from 'react-router-dom';
import { ArrowRight, CheckCircle2, TriangleAlert } from 'lucide-react';
import { SEO } from '../components/common/SEO';
import { PageHero } from '../components/common/PageHero';
import { ProductCard } from '../components/common/ProductCard';
import { CTASection } from '../components/common/CTASection';
import { breadcrumbJsonLd } from '../components/common/Breadcrumbs';
import { EnquiryForm } from '../components/forms/EnquiryForm';
import { getIndustry, industries } from '../data/industries';
import { getProduct } from '../data/products';
import { company } from '../data/company';
import type { Product } from '../types';
import NotFound from './NotFound';

export default function IndustryDetail() {
  const { slug = '' } = useParams();
  const ind = getIndustry(slug);
  if (!ind || !ind.hasDetailPage) return <NotFound />;
  const crumbs = [{ label: 'Industries', href: '/industries' }, { label: ind.name }];
  const prods = ind.products.map(getProduct).filter((p): p is Product => Boolean(p));
  const others = industries.filter((i) => i.slug !== ind.slug);

  return (
    <>
      <SEO title={`Cleanroom & Lab Solutions for ${ind.name}`} description={`${ind.summary} Indoyug Clean Tech LLP — cleanroom equipment and laboratory furniture manufacturer, Gujarat.`} path={`/industries/${ind.slug}`} image={ind.image?.src} jsonLd={breadcrumbJsonLd(company.siteUrl, crumbs)} />
      <PageHero crumbs={crumbs} eyebrow="Industry solutions" title={ind.name} intro={ind.intro[0]} image={ind.image} />

      <section className="py-16 md:py-20">
        <div className="container grid gap-12 lg:grid-cols-12">
          <div className="lg:col-span-7">
            <div className="prose-body">{ind.intro.slice(1).map((p, i) => <p key={i}>{p}</p>)}</div>
            <h2 className="mb-6 mt-10 text-2xl font-bold md:text-3xl">Industry challenges</h2>
            <ul className="space-y-4">
              {ind.challenges.map((c) => (
                <li key={c.title} className="flex gap-4 border-l-2 border-amber-400 pl-4">
                  <TriangleAlert className="mt-0.5 h-5 w-5 shrink-0 text-amber-600" aria-hidden />
                  <div><h3 className="text-[17px] font-bold">{c.title}</h3><p className="mt-0.5 text-[15px] text-ink-soft">{c.text}</p></div>
                </li>
              ))}
            </ul>
          </div>
          <div className="lg:col-span-5">
            <div className="ticks border border-surface-line bg-surface p-6 md:p-8">
              <h2 className="text-2xl font-bold">How Indoyug helps</h2>
              <ul className="mt-6 space-y-5">
                {ind.solutions.map((s) => (
                  <li key={s.title} className="flex gap-3"><CheckCircle2 className="mt-0.5 h-5 w-5 shrink-0 text-brand-500" aria-hidden /><div><h3 className="font-bold">{s.title}</h3><p className="text-[15px] text-ink-soft">{s.text}</p></div></li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-surface py-16 md:py-20">
        <div className="container">
          <h2 className="mb-8 text-3xl font-bold">Products for {ind.shortName}</h2>
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">{prods.map((p) => <ProductCard key={p.slug} product={p} />)}</div>
        </div>
      </section>

      <section className="py-16 md:py-20">
        <div className="container grid gap-12 lg:grid-cols-12">
          <div className="lg:col-span-5">
            <p className="eyebrow mb-3">Enquiry</p>
            <h2 className="text-3xl font-bold">Discuss your {ind.shortName.toLowerCase()} project</h2>
            <p className="mt-4 text-lg text-ink-soft">Tell us about your facility and process. We’ll recommend equipment and furniture and prepare a quotation.</p>
            <h3 className="mb-3 mt-10 font-mono text-[11px] uppercase tracking-wider text-steel">Other industries</h3>
            <ul className="space-y-2">{others.map((o) => <li key={o.slug}><Link to={`/industries/${o.slug}`} className="inline-flex items-center gap-2 font-semibold text-brand-700 hover:underline">{o.name}<ArrowRight className="h-4 w-4" aria-hidden /></Link></li>)}</ul>
          </div>
          <div className="card p-6 md:p-8 lg:col-span-7"><EnquiryForm variant="short" kind="contact" context={`Industry page: ${ind.name}`} submitLabel="Send project enquiry" /></div>
        </div>
      </section>
      <CTASection />
    </>
  );
}
