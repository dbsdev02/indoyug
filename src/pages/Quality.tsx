import { Link } from 'react-router-dom';
import { ClipboardCheck, FileCheck2, FileSearch, Gauge, ScanSearch, ShieldQuestion } from 'lucide-react';
import { SEO } from '../components/common/SEO';
import { PageHero } from '../components/common/PageHero';
import { SectionHeading } from '../components/common/SectionHeading';
import { EditorNote } from '../components/common/Notice';
import { EnquiryForm } from '../components/forms/EnquiryForm';
import { breadcrumbJsonLd } from '../components/common/Breadcrumbs';
import { company } from '../data/company';

const items = [
  { icon: ScanSearch, title: 'Manufacturing inspection', text: 'Fabrication is checked for the crevice-free, fully welded construction specified for our SS furniture, and for correct finishes.', status: 'Approach — details to be confirmed' },
  { icon: ClipboardCheck, title: 'Product testing', text: 'Every unit is factory tested before dispatch. Fume hoods are tested for reliability and performance.', status: 'Stated in brochure' },
  { icon: FileCheck2, title: 'Factory acceptance testing (FAT)', text: 'Units ship with full FAT documentation.', status: 'Stated in brochure' },
  { icon: Gauge, title: 'Calibration records', text: 'Calibration records are supplied with units, where applicable.', status: 'Stated in brochure' },
  { icon: FileSearch, title: 'Material traceability', text: 'Material certificates and traceability can be discussed for your project.', status: 'To be confirmed per project' },
];

export default function Quality() {
  const crumbs = [{ label: 'Quality Assurance' }];
  return (
    <>
      <SEO title="Quality Assurance — Factory Testing, FAT & Calibration Records" description="Indoyug quality approach: 100% factory tested units with FAT documentation and calibration records. Specifications published from verified brochure data." path="/quality" jsonLd={breadcrumbJsonLd(company.siteUrl, crumbs)} />
      <PageHero crumbs={crumbs} eyebrow="Quality assurance" title="100% factory tested" intro="According to the Indoyug brochure, every unit ships with full FAT documentation and calibration records." />

      <section className="py-16 md:py-20">
        <div className="container grid gap-12 lg:grid-cols-12">
          <div className="lg:col-span-5">
            <SectionHeading eyebrow="Approach" title="Quality management approach" className="mb-6" />
            <div className="prose-body">
              <p>Quality at Indoyug starts with honest specifications. The values on this website come directly from our brochure; where a value is not published we say so, rather than estimate.</p>
              <p>Products are manufactured to the agreed configuration, factory tested and dispatched with test documentation.</p>
            </div>
          </div>
          <ul className="grid gap-4 sm:grid-cols-2 lg:col-span-7">
            {items.map(({ icon: Icon, title, text, status }) => (
              <li key={title} className="card p-5">
                <Icon className="h-6 w-6 text-brand-500" aria-hidden />
                <h3 className="mt-3 text-lg font-bold">{title}</h3>
                <p className="mt-1 text-[15px] text-ink-soft">{text}</p>
                <p className="mt-3 font-mono text-[10.5px] uppercase tracking-wider text-steel">{status}</p>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section className="bg-surface py-16 md:py-20">
        <div className="container">
          <SectionHeading eyebrow="Certificates & standards" title="Certifications" />
          <div className="card flex flex-col items-start gap-5 p-8 md:flex-row md:items-center">
            <ShieldQuestion className="h-10 w-10 shrink-0 text-brand-500" aria-hidden />
            <div className="flex-1">
              <p className="font-display text-xl font-bold">No certificates are published yet</p>
              <p className="mt-1 text-ink-soft">Company or product certificates will be shown here only once copies are provided and verified. Ask us for compliance documentation relevant to your project.</p>
            </div>
            <Link to="/contact-us" className="btn-outline shrink-0">Ask about documentation</Link>
          </div>
          <EditorNote className="mt-6">The brochure mentions “international standards”, “cGMP” and “ISO Class 5 / Grade A” in places. These are not stated as company certifications here until supporting documents are supplied.</EditorNote>
        </div>
      </section>

      <section className="py-16 md:py-20">
        <div className="container grid gap-12 lg:grid-cols-12">
          <div className="lg:col-span-5"><p className="eyebrow mb-3">Quality enquiry</p><h2 className="text-3xl font-bold md:text-4xl">Request test documentation</h2><p className="mt-4 text-lg text-ink-soft">Ask for sample FAT documentation, calibration records or material information for your project.</p></div>
          <div className="card p-6 md:p-8 lg:col-span-7"><EnquiryForm variant="short" kind="quality" context="Quality page" submitLabel="Send quality enquiry" /></div>
        </div>
      </section>
    </>
  );
}
