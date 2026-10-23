import { Link, useParams } from 'react-router-dom';
import { SEO } from '../components/common/SEO';
import { PageHero } from '../components/common/PageHero';
import { Notice } from '../components/common/Notice';
import { RelatedProducts } from '../components/products/RelatedProducts';
import { CTASection } from '../components/common/CTASection';
import { breadcrumbJsonLd } from '../components/common/Breadcrumbs';
import { getProject } from '../data/projects';
import { company } from '../data/company';
import NotFound from './NotFound';

export default function ProjectDetail() {
  const { slug = '' } = useParams();
  const project = getProject(slug);
  if (!project) return <NotFound />;
  const crumbs = [{ label: 'Projects', href: '/projects' }, { label: project.title }];
  const isRef = project.status === 'reference-imagery';
  const facts: [string, string | undefined][] = [['Client', project.client], ['Location', project.location], ['Year', project.year], ['Category', project.category]];

  return (
    <>
      <SEO title={project.title} description={project.summary} path={`/projects/${project.slug}`} image={project.image?.src} noindex={isRef} jsonLd={breadcrumbJsonLd(company.siteUrl, crumbs)} />
      <PageHero compact crumbs={crumbs} eyebrow={project.category} title={project.title} intro={project.summary} />
      <section className="py-14 md:py-16">
        <div className="container grid gap-10 lg:grid-cols-12">
          <div className="lg:col-span-8">
            {project.image && <figure className="ticks overflow-hidden border border-surface-line"><img src={project.image.src} alt={project.image.alt} className="w-full object-cover" /></figure>}
          </div>
          <aside className="space-y-6 lg:col-span-4">
            {isRef && <Notice tone="pending" title="Reference imagery — not a documented case study">This image comes from the Indoyug brochure. Client, location, scope and outcome are not published for this item.</Notice>}
            <dl className="divide-y divide-surface-line rounded border border-surface-line">
              {facts.map(([k, v]) => (
                <div key={k} className="flex justify-between gap-4 px-4 py-3 text-sm"><dt className="font-mono text-[11px] uppercase tracking-wider text-steel">{k}</dt><dd className="text-right font-medium">{v ?? <span className="text-steel">Not published</span>}</dd></div>
              ))}
            </dl>
            {project.scope?.length ? <div><h2 className="mb-2 font-bold">Scope</h2><ul className="list-disc pl-5 text-ink-soft">{project.scope.map((s) => <li key={s}>{s}</li>)}</ul></div> : null}
            <Link to="/request-a-quote" className="btn-primary w-full">Discuss a similar project</Link>
          </aside>
        </div>
      </section>
      <section className="border-t border-surface-line bg-surface py-14"><div className="container"><RelatedProducts slugs={project.products} title="Products shown" /></div></section>
      <CTASection />
    </>
  );
}
