import { useMemo, useState } from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Download, FileText, Mail, Search } from 'lucide-react';
import { SEO } from '../components/common/SEO';
import { PageHero } from '../components/common/PageHero';
import { breadcrumbJsonLd } from '../components/common/Breadcrumbs';
import { resources, resourceTypes } from '../data/resources';
import { getProduct } from '../data/products';
import { company } from '../data/company';
import { cn } from '../lib/utils';

export default function Resources() {
  const [type, setType] = useState('');
  const [q, setQ] = useState('');
  const list = useMemo(() => resources.filter((r) => (!type || r.type === type) && (!q || `${r.title} ${r.description}`.toLowerCase().includes(q.toLowerCase()))), [type, q]);
  const crumbs = [{ label: 'Resources' }];
  return (
    <>
      <SEO title="Resources & Downloads — Brochure, Product Sheets, FAQs" description="Download the Indoyug company brochure and product sheets for mist showers, air showers, pass boxes, cleanroom doors, LAF units, biosafety cabinets, fume hoods and SS furniture." path="/resources" jsonLd={breadcrumbJsonLd(company.siteUrl, crumbs)} />
      <PageHero crumbs={crumbs} eyebrow="Resource centre" title="Brochures, product sheets & documentation" intro="Every download here is an approved Indoyug document. Anything not yet published can be requested directly." />
      <section className="py-14 md:py-16">
        <div className="container">
          <div className="mb-8 flex flex-col gap-4 lg:flex-row lg:items-center">
            <div className="relative lg:w-80">
              <label htmlFor="res-search" className="sr-only">Search resources</label>
              <Search className="pointer-events-none absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-steel" aria-hidden />
              <input id="res-search" type="search" value={q} onChange={(e) => setQ(e.target.value)} placeholder="Search resources" className="field pl-9" />
            </div>
            <div role="group" aria-label="Filter by type" className="scrollbar-thin flex gap-2 overflow-x-auto pb-1">
              {['', ...resourceTypes].map((t) => (
                <button key={t || 'all'} type="button" aria-pressed={type === t} onClick={() => setType(t)} className={cn('shrink-0 rounded-full border px-4 py-2 text-sm font-semibold', type === t ? 'border-brand-700 bg-brand-700 text-white' : 'border-surface-line hover:border-brand-500')}>{t || 'All'}</button>
              ))}
            </div>
          </div>
          <p className="sr-only" aria-live="polite">{list.length} resources</p>
          {list.length ? (
            <ul className="divide-y divide-surface-line rounded border border-surface-line">
              {list.map((r) => (
                <li key={r.id} className="flex flex-col gap-4 p-5 md:flex-row md:items-center">
                  <FileText className="hidden h-8 w-8 shrink-0 text-brand-500 md:block" aria-hidden />
                  <div className="flex-1">
                    <p className="font-mono text-[10.5px] uppercase tracking-wider text-brand-500">{r.type}{r.fileSize && ` · PDF · ${r.fileSize}`}</p>
                    <h2 className="mt-1 text-lg font-bold">{r.title}</h2>
                    <p className="mt-0.5 text-[15px] text-ink-soft">{r.description}</p>
                    {r.products.length > 0 && <p className="mt-1.5 text-sm">{r.products.map((s) => { const p = getProduct(s); return p ? <Link key={s} to={`/products/${s}`} className="link mr-3 text-sm">{p.name}</Link> : null; })}</p>}
                  </div>
                  {r.fileUrl ? (
                    <a href={r.fileUrl} download className="btn-primary shrink-0 text-sm" aria-label={`Download ${r.title} (PDF${r.fileSize ? `, ${r.fileSize}` : ''})`}><Download className="h-4 w-4" aria-hidden /> Download</a>
                  ) : r.href ? (
                    <Link to={r.href} className="btn-outline shrink-0 text-sm">Open <ArrowRight className="h-4 w-4" aria-hidden /></Link>
                  ) : (
                    <a href={`mailto:${company.email}?subject=${encodeURIComponent(`Document request: ${r.title}`)}`} className="btn-outline shrink-0 text-sm"><Mail className="h-4 w-4" aria-hidden /> Request document</a>
                  )}
                </li>
              ))}
            </ul>
          ) : (
            <p className="rounded border border-dashed border-surface-line bg-surface p-10 text-center text-ink-soft">No resources match. <button type="button" className="link" onClick={() => { setQ(''); setType(''); }}>Clear filters</button></p>
          )}
        </div>
      </section>
    </>
  );
}
