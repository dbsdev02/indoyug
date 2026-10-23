import { Link, useParams } from 'react-router-dom';
import { SEO } from '../components/common/SEO';
import { Breadcrumbs, breadcrumbJsonLd } from '../components/common/Breadcrumbs';
import { Notice } from '../components/common/Notice';
import { RelatedProducts } from '../components/products/RelatedProducts';
import { CTASection } from '../components/common/CTASection';
import { articles, getArticle } from '../data/articles';
import { company } from '../data/company';
import { ReviewBadge } from './Blog';
import NotFound from './NotFound';

export default function BlogDetail() {
  const { slug = '' } = useParams();
  const a = getArticle(slug);
  if (!a) return <NotFound />;
  const crumbs = [{ label: 'Insights', href: '/blog' }, { label: a.title }];
  const approved = a.reviewStatus === 'approved';
  const related = articles.filter((x) => x.slug !== a.slug).slice(0, 3);
  const articleLd = approved ? { '@context': 'https://schema.org', '@type': 'Article', headline: a.title, description: a.excerpt, datePublished: a.date, author: { '@type': 'Organization', name: company.name }, publisher: { '@id': `${company.siteUrl}/#organization` }, image: a.image ? `${company.siteUrl}${a.image.src}` : undefined, mainEntityOfPage: `${company.siteUrl}/blog/${a.slug}` } : null;

  return (
    <>
      <SEO title={a.title} description={a.excerpt} path={`/blog/${a.slug}`} image={a.image?.src} type="article" noindex={!approved} jsonLd={[breadcrumbJsonLd(company.siteUrl, crumbs), ...(articleLd ? [articleLd] : [])]} />
      <article>
        <header className="border-b border-surface-line bg-surface">
          <div className="container max-w-4xl py-12 md:py-16">
            <Breadcrumbs items={crumbs} />
            <p className="eyebrow">{a.category}</p>
            <h1 className="mt-3 text-3xl font-extrabold md:text-5xl">{a.title}</h1>
            <p className="mt-4 text-lg text-ink-soft">{a.excerpt}</p>
            <div className="mt-6 flex flex-wrap items-center gap-3 text-sm text-steel">
              <span>{a.author}</span><span>·</span><time dateTime={a.date}>{new Date(a.date + 'T00:00:00').toLocaleDateString('en-IN', { day: 'numeric', month: 'long', year: 'numeric' })}</time><span>·</span><span>{a.readingMinutes} min read</span><ReviewBadge a={a} />
            </div>
          </div>
        </header>
        <div className="container max-w-4xl py-12">
          {a.image && <img src={a.image.src} alt={a.image.alt} className="mb-10 max-h-[420px] w-full rounded border border-surface-line bg-surface object-contain p-6" />}
          <Notice className="mb-10">This article is general editorial content{approved ? '' : ', pending technical review by Indoyug engineers'}. It is not certified technical guidance — confirm equipment selection with your quality, safety and engineering teams.</Notice>
          <div className="prose-body max-w-prose">
            {a.sections.map((s) => (
              <section key={s.heading}>
                <h2>{s.heading}</h2>
                {s.paragraphs.map((p, i) => <p key={i}>{p}</p>)}
                {s.bullets && <ul>{s.bullets.map((b) => <li key={b}>{b}</li>)}</ul>}
              </section>
            ))}
          </div>
          <div className="mt-12 rounded border border-surface-line p-6"><p className="font-semibold">Have a question about your application?</p><p className="mt-1 text-ink-soft">Our team can help you choose. <Link to="/contact-us" className="link">Contact us</Link> or <Link to="/request-a-quote" className="link">request a quote</Link>.</p></div>
        </div>
      </article>
      <section className="border-t border-surface-line bg-surface py-14"><div className="container"><RelatedProducts slugs={a.relatedProducts} title="Products mentioned" /></div></section>
      {related.length > 0 && (
        <section className="py-14"><div className="container"><h2 className="mb-6 text-2xl font-bold">Related articles</h2><ul className="grid gap-4 md:grid-cols-3">{related.map((r) => <li key={r.slug}><Link to={`/blog/${r.slug}`} className="card block h-full p-5 hover:shadow-lift"><p className="font-mono text-[10.5px] uppercase tracking-wider text-brand-500">{r.category}</p><p className="mt-2 font-bold">{r.title}</p></Link></li>)}</ul></div></section>
      )}
      <CTASection />
    </>
  );
}
