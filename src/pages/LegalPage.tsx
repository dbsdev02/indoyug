import type { ReactNode } from 'react';
import { SEO } from '../components/common/SEO';
import { PageHero } from '../components/common/PageHero';
import { Notice } from '../components/common/Notice';
import { breadcrumbJsonLd } from '../components/common/Breadcrumbs';
import { company } from '../data/company';

export interface LegalSection { id: string; title: string; body: ReactNode; review?: boolean }

/** Shared layout for legal pages. Sections flagged `review` need legal sign-off. */
export function LegalPage({ title, path, description, sections, updated }: { title: string; path: string; description: string; sections: LegalSection[]; updated: string }) {
  const crumbs = [{ label: title }];
  return (
    <>
      <SEO title={title} description={description} path={path} jsonLd={breadcrumbJsonLd(company.siteUrl, crumbs)} />
      <PageHero compact crumbs={crumbs} title={title} intro={`Last updated: ${updated}`} />
      <section className="py-12 md:py-16">
        <div className="container grid gap-12 lg:grid-cols-12">
          <nav aria-label="Sections" className="lg:col-span-3"><ol className="space-y-1 text-[15px] lg:sticky lg:top-28">{sections.map((s, i) => <li key={s.id}><a href={`#${s.id}`} className="block rounded px-3 py-1.5 text-ink-soft hover:bg-surface hover:text-brand-700">{i + 1}. {s.title}</a></li>)}</ol></nav>
          <div className="lg:col-span-9">
            <Notice tone="pending" className="mb-10" title="Draft — subject to legal review">This document is a working draft prepared for {company.name}. Sections marked “Legal review required” must be reviewed and approved by the company’s legal adviser before this website goes live.</Notice>
            <div className="prose-body max-w-prose">
              {sections.map((s, i) => (
                <section key={s.id} id={s.id}>
                  <h2>{i + 1}. {s.title}{s.review && <span className="ml-3 align-middle font-mono text-[10px] font-medium uppercase tracking-wider text-amber-700">Legal review required</span>}</h2>
                  {s.body}
                </section>
              ))}
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
