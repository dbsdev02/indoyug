import { useSearchParams } from 'react-router-dom';
import { SEO } from '../components/common/SEO';
import { PageHero } from '../components/common/PageHero';
import { ProjectCard } from '../components/common/ProjectCard';
import { Notice } from '../components/common/Notice';
import { CTASection } from '../components/common/CTASection';
import { breadcrumbJsonLd } from '../components/common/Breadcrumbs';
import { projects, projectCategories } from '../data/projects';
import { company } from '../data/company';
import { cn } from '../lib/utils';

export default function Projects() {
  const [params, setParams] = useSearchParams();
  const active = params.get('category') ?? '';
  const list = active ? projects.filter((p) => p.category === active) : projects;
  const crumbs = [{ label: 'Projects & Gallery' }];
  const hasCaseStudies = projects.some((p) => p.status === 'case-study');
  return (
    <>
      <SEO title="Projects & Gallery — Cleanroom & Laboratory Installations" description="Gallery of cleanroom, laboratory furniture, stainless steel furniture and equipment imagery from Indoyug Clean Tech LLP." path="/projects" jsonLd={breadcrumbJsonLd(company.siteUrl, crumbs)} />
      <PageHero crumbs={crumbs} eyebrow="Projects & gallery" title="Cleanroom, laboratory and equipment gallery" intro="Browse by category. Documented case studies with client, location and scope will be published here as they are approved." />
      <section className="py-14 md:py-16">
        <div className="container">
          {!hasCaseStudies && (
            <Notice tone="info" className="mb-8" title="About these images">The current gallery shows imagery from the Indoyug brochure. These are not documented installations — please contact us for references relevant to your project.</Notice>
          )}
          <div role="group" aria-label="Filter by category" className="scrollbar-thin mb-8 flex gap-2 overflow-x-auto pb-1">
            {['', ...projectCategories].map((c) => {
              const n = c ? projects.filter((p) => p.category === c).length : projects.length;
              return (
                <button key={c || 'all'} type="button" aria-pressed={active === c} disabled={n === 0}
                  onClick={() => { const q = new URLSearchParams(params); if (c) q.set('category', c); else q.delete('category'); setParams(q); }}
                  className={cn('shrink-0 rounded-full border px-4 py-2 text-sm font-semibold transition-colors disabled:opacity-40', active === c ? 'border-brand-700 bg-brand-700 text-white' : 'border-surface-line hover:border-brand-500')}>
                  {c || 'All'} <span className="ml-1 font-mono text-xs opacity-70">{n}</span>
                </button>
              );
            })}
          </div>
          {list.length ? (
            <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">{list.map((p) => <ProjectCard key={p.slug} project={p} />)}</div>
          ) : (
            <p className="rounded border border-dashed border-surface-line bg-surface p-10 text-center text-ink-soft">No items in this category yet.</p>
          )}
        </div>
      </section>
      <CTASection />
    </>
  );
}
