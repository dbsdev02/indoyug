import { useMemo, useState } from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Search } from 'lucide-react';
import { SEO } from '../components/common/SEO';
import { PageHero } from '../components/common/PageHero';
import { breadcrumbJsonLd } from '../components/common/Breadcrumbs';
import { articles } from '../data/articles';
import { company } from '../data/company';
import type { Article } from '../types';
import { cn } from '../lib/utils';

const fmt = (d: string) => new Date(d + 'T00:00:00').toLocaleDateString('en-IN', { day: 'numeric', month: 'short', year: 'numeric' });

export function ReviewBadge({ a }: { a: Article }) {
  return a.reviewStatus === 'pending-review' ? <span className="rounded-sm bg-amber-50 px-2 py-0.5 font-mono text-[10px] uppercase tracking-wider text-amber-800">Editorial draft · pending technical review</span> : null;
}

export default function Blog() {
  const [cat, setCat] = useState('');
  const [q, setQ] = useState('');
  const cats = [...new Set(articles.map((a) => a.category))];
  const list = useMemo(() => articles.filter((a) => (!cat || a.category === cat) && (!q || `${a.title} ${a.excerpt}`.toLowerCase().includes(q.toLowerCase()))), [cat, q]);
  const featured = !cat && !q ? articles.find((a) => a.featured) : undefined;
  const rest = list.filter((a) => a !== featured);
  const crumbs = [{ label: 'Insights' }];
  return (
    <>
      <SEO title="Insights — Cleanroom & Laboratory Knowledge Hub" description="Guides on pass boxes, laminar airflow, biosafety cabinets, air and mist showers and laboratory furniture planning from Indoyug Clean Tech LLP." path="/blog" jsonLd={breadcrumbJsonLd(company.siteUrl, crumbs)} />
      <PageHero crumbs={crumbs} eyebrow="Insights" title="Knowledge for controlled environments" intro="Practical guides on cleanroom equipment and laboratory furniture. Articles are editorial content, not certified technical guidance — always confirm decisions with your QA and engineering teams." />
      <section className="py-14 md:py-16">
        <div className="container">
          <div className="mb-10 flex flex-col gap-4 lg:flex-row lg:items-center">
            <div className="relative lg:w-80">
              <label htmlFor="blog-search" className="sr-only">Search articles</label>
              <Search className="pointer-events-none absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-steel" aria-hidden />
              <input id="blog-search" type="search" value={q} onChange={(e) => setQ(e.target.value)} placeholder="Search articles" className="field pl-9" />
            </div>
            <div role="group" aria-label="Filter by category" className="scrollbar-thin flex gap-2 overflow-x-auto pb-1">
              {['', ...cats].map((c) => <button key={c || 'all'} type="button" aria-pressed={cat === c} onClick={() => setCat(c)} className={cn('shrink-0 rounded-full border px-4 py-2 text-sm font-semibold', cat === c ? 'border-brand-700 bg-brand-700 text-white' : 'border-surface-line hover:border-brand-500')}>{c || 'All'}</button>)}
            </div>
          </div>

          {featured && (
            <Link to={`/blog/${featured.slug}`} className="group card mb-10 grid overflow-hidden md:grid-cols-2">
              <div className="aspect-[16/10] bg-surface md:aspect-auto">{featured.image && <img src={featured.image.src} alt={featured.image.alt} className="h-full w-full object-contain p-6" />}</div>
              <div className="flex flex-col justify-center p-6 md:p-10">
                <p className="eyebrow">Featured · {featured.category}</p>
                <h2 className="mt-3 text-2xl font-bold group-hover:text-brand-700 md:text-3xl">{featured.title}</h2>
                <p className="mt-3 text-ink-soft">{featured.excerpt}</p>
                <div className="mt-5 flex flex-wrap items-center gap-3 text-sm text-steel"><span>{featured.author}</span><span>·</span><span>{featured.readingMinutes} min read</span><ReviewBadge a={featured} /></div>
              </div>
            </Link>
          )}

          {rest.length ? (
            <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
              {rest.map((a) => (
                <article key={a.slug} className="group card relative flex flex-col overflow-hidden">
                  <div className="aspect-[16/10] bg-surface">{a.image && <img src={a.image.src} alt={a.image.alt} loading="lazy" className="h-full w-full object-contain p-4" />}</div>
                  <div className="flex flex-1 flex-col p-5">
                    <p className="font-mono text-[10.5px] uppercase tracking-wider text-brand-500">{a.category}</p>
                    <h2 className="mt-2 text-lg font-bold"><Link to={`/blog/${a.slug}`} className="after:absolute after:inset-0 group-hover:text-brand-700">{a.title}</Link></h2>
                    <p className="mt-2 flex-1 text-[15px] text-ink-soft">{a.excerpt}</p>
                    <div className="mt-4 flex flex-wrap items-center gap-2 text-sm text-steel"><time dateTime={a.date}>{fmt(a.date)}</time><span>·</span><span>{a.readingMinutes} min</span></div>
                    <div className="mt-2"><ReviewBadge a={a} /></div>
                    <span className="mt-4 inline-flex items-center gap-1 text-sm font-semibold text-brand-700">Read article <ArrowRight className="h-4 w-4" aria-hidden /></span>
                  </div>
                </article>
              ))}
            </div>
          ) : !featured && (
            <p className="rounded border border-dashed border-surface-line bg-surface p-10 text-center text-ink-soft">No articles match your search.</p>
          )}
        </div>
      </section>
    </>
  );
}
