import { Clock, ExternalLink, Mail, MapPin, Phone } from 'lucide-react';
import { SEO, organizationJsonLd } from '../components/common/SEO';
import { PageHero } from '../components/common/PageHero';
import { EnquiryForm } from '../components/forms/EnquiryForm';
import { EditorNote } from '../components/common/Notice';
import { breadcrumbJsonLd } from '../components/common/Breadcrumbs';
import { company } from '../data/company';

export default function ContactUs() {
  const crumbs = [{ label: 'Contact Us' }];
  const localBusiness = { ...organizationJsonLd(), '@type': 'LocalBusiness', '@id': `${company.siteUrl}/#localbusiness`, image: `${company.siteUrl}/assets/projects/microbiology-cleanroom-lab.webp` };
  return (
    <>
      <SEO title="Contact Us — GIDC Umbergaon, Gujarat" description={`Contact Indoyug Clean Tech LLP: ${company.addressOneLine}. Phone +91 7567224020, +91 8758460885. Email ${company.email}.`} path="/contact-us" jsonLd={[breadcrumbJsonLd(company.siteUrl, crumbs), localBusiness]} />
      <PageHero compact crumbs={crumbs} eyebrow="Contact" title="Talk to Indoyug" intro="Call, email or send an enquiry. For detailed requirements with drawings, use the quote form." />
      <section className="py-14 md:py-16">
        <div className="container grid gap-12 lg:grid-cols-12">
          <div className="space-y-6 lg:col-span-5">
            <address className="card divide-y divide-surface-line not-italic">
              <div className="flex gap-4 p-6"><MapPin className="mt-1 h-5 w-5 shrink-0 text-brand-500" aria-hidden /><div><p className="font-mono text-[10.5px] uppercase tracking-wider text-steel">Address</p><p className="mt-1 font-semibold">{company.name}</p><p className="text-ink-soft">{company.address.line1}<br />{company.address.line2}<br />{company.address.city} – {company.address.postalCode},<br />{company.address.region}, {company.address.country}</p><a href={company.mapsUrl} target="_blank" rel="noopener noreferrer" className="link mt-2 inline-flex items-center gap-1 text-sm">Get directions <ExternalLink className="h-3.5 w-3.5" aria-hidden /></a></div></div>
              <div className="flex gap-4 p-6"><Phone className="mt-1 h-5 w-5 shrink-0 text-brand-500" aria-hidden /><div><p className="font-mono text-[10.5px] uppercase tracking-wider text-steel">Phone</p>{company.phones.map((p) => <a key={p.tel} href={`tel:${p.tel}`} className="block text-lg font-semibold text-brand-800 hover:underline">{p.display}</a>)}</div></div>
              <div className="flex gap-4 p-6"><Mail className="mt-1 h-5 w-5 shrink-0 text-brand-500" aria-hidden /><div><p className="font-mono text-[10.5px] uppercase tracking-wider text-steel">Email</p><a href={`mailto:${company.email}`} className="text-lg font-semibold text-brand-800 hover:underline">{company.email}</a></div></div>
              <div className="flex gap-4 p-6"><Clock className="mt-1 h-5 w-5 shrink-0 text-brand-500" aria-hidden /><div><p className="font-mono text-[10.5px] uppercase tracking-wider text-steel">Business hours</p><p className="text-ink-soft">Please call ahead before visiting.</p></div></div>
            </address>
            <EditorNote>Confirm business hours and the exact Google Maps pin before publishing. The map below searches the brochure address; the directions link uses the Maps listing from the current website.</EditorNote>
            <figure className="overflow-hidden rounded border border-surface-line"><img src="/assets/projects/cleanroom-corridor-doors.webp" alt="Cleanroom corridor with doors" loading="lazy" className="aspect-[16/9] w-full object-cover" /><figcaption className="px-4 py-2 font-mono text-[10.5px] uppercase tracking-wider text-steel">Brochure imagery · facility photograph to be supplied</figcaption></figure>
          </div>
          <div className="lg:col-span-7">
            <div className="card p-6 md:p-8">
              <h2 className="text-2xl font-bold">Send us a message</h2>
              <p className="mb-6 mt-1 text-ink-soft">We’ll get back to you by email or phone.</p>
              <EnquiryForm variant="contact" kind="contact" context="Contact page" />
            </div>
          </div>
        </div>
      </section>
      <section aria-label="Map" className="border-t border-surface-line">
        <iframe title="Map: Indoyug Clean Tech LLP, GIDC Umbergaon, Gujarat" src={company.mapsEmbedUrl} loading="lazy" referrerPolicy="no-referrer-when-downgrade" className="h-[420px] w-full border-0" />
      </section>
    </>
  );
}
