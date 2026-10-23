import { Link } from 'react-router-dom';
import { SEO } from '../components/common/SEO';
import { PageHero } from '../components/common/PageHero';
import { AccordionItem } from '../components/common/Accordion';
import { breadcrumbJsonLd } from '../components/common/Breadcrumbs';
import { CTASection } from '../components/common/CTASection';
import { faqGroups } from '../data/faqs';
import { company } from '../data/company';

export default function FAQ() {
  const crumbs = [{ label: 'FAQ' }];
  // FAQ rich results are restricted by Google to authoritative government/health sites;
  // FAQPage markup is still valid schema and harmless, so it is included for verified answers only.
  const faqLd = { '@context': 'https://schema.org', '@type': 'FAQPage', mainEntity: faqGroups.flatMap((g) => g.items.filter((i) => i.verified)).map((i) => ({ '@type': 'Question', name: i.q, acceptedAnswer: { '@type': 'Answer', text: i.a } })) };
  return (
    <>
      <SEO title="Frequently Asked Questions" description="Answers about Indoyug cleanroom equipment, laboratory furniture, materials, customisation, specifications, quotations, installation and support." path="/faq" jsonLd={[breadcrumbJsonLd(company.siteUrl, crumbs), faqLd]} />
      <PageHero crumbs={crumbs} eyebrow="FAQ" title="Frequently asked questions" intro="Can’t find your answer? Call +91 75672 24020 or email info@indoyug.in." />
      <section className="py-14 md:py-16">
        <div className="container grid gap-12 lg:grid-cols-12">
          <nav aria-label="FAQ topics" className="lg:col-span-3">
            <ul className="space-y-1 lg:sticky lg:top-28">
              {faqGroups.map((g) => <li key={g.id}><a href={`#${g.id}`} className="block rounded px-3 py-2 text-[15px] font-medium text-ink-soft hover:bg-surface hover:text-brand-700">{g.title}</a></li>)}
            </ul>
          </nav>
          <div className="space-y-12 lg:col-span-9">
            {faqGroups.map((g) => (
              <section key={g.id} id={g.id} aria-labelledby={`${g.id}-h`}>
                <h2 id={`${g.id}-h`} className="mb-2 text-2xl font-bold">{g.title}</h2>
                <div className="border-t border-surface-line">{g.items.map((i) => <AccordionItem key={i.q} question={i.q}>{i.a}</AccordionItem>)}</div>
              </section>
            ))}
            <p className="text-ink-soft">Still have a question? <Link to="/contact-us" className="link">Contact our team</Link>.</p>
          </div>
        </div>
      </section>
      <CTASection />
    </>
  );
}
