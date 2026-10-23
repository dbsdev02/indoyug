import { Link } from 'react-router-dom';
import { ClipboardCheck, Cog, Factory, Layers, PenTool, Ruler, Sparkles, Wind } from 'lucide-react';
import { SEO } from '../components/common/SEO';
import { PageHero } from '../components/common/PageHero';
import { SectionHeading } from '../components/common/SectionHeading';
import { Reveal } from '../components/common/Reveal';
import { EditorNote } from '../components/common/Notice';
import { ImagePlaceholder } from '../components/common/ImagePlaceholder';
import { EnquiryForm } from '../components/forms/EnquiryForm';
import { breadcrumbJsonLd } from '../components/common/Breadcrumbs';
import { company } from '../data/company';

const capabilities = [
  { icon: Factory, title: 'Stainless-steel fabrication', text: 'Modular SS furniture in SS 304 / 316L — crevice-free, fully welded with seamless welds that leave no particle traps. Trolleys, cabinets, racks, workstations and storage systems.' },
  { icon: Layers, title: 'Modular laboratory furniture', text: 'Wall and island benches, sink units, storage, mobile units and anti-vibration tables engineered for durable construction and easy-to-maintain surfaces.' },
  { icon: Wind, title: 'Cleanroom equipment assembly', text: 'Air showers, mist showers, static and dynamic pass boxes, laminar air flow units and Class II Type A2 biosafety cabinets.' },
  { icon: PenTool, title: 'Custom product engineering', text: 'Planning and designing to your layout. Products are fully customisable — standard and custom sizes, configurations and options.' },
  { icon: Sparkles, title: 'Finishing & fabrication quality', text: 'Mirror or matte electropolished finishes on SS furniture; powder-coated finishes available as an option on selected equipment.' },
  { icon: ClipboardCheck, title: 'Inspection & testing', text: 'Every unit is factory tested and ships with full FAT documentation and calibration records, as stated in the Indoyug brochure.' },
  { icon: Ruler, title: 'Project-specific manufacturing', text: 'Equipment and furniture manufactured to the dimensions and configuration your project requires, including custom dimensions on request.' },
  { icon: Cog, title: 'Quality control & documentation', text: 'FAT documentation and calibration records accompany supplied units. Details of documentation per product are shared at quotation stage.' },
];

export default function Manufacturing() {
  const crumbs = [{ label: 'Manufacturing' }];
  return (
    <>
      <SEO title="Manufacturing Capabilities — SS Fabrication, Cleanroom Equipment, Lab Furniture" description="Indoyug manufacturing: stainless steel fabrication (SS 304/316L, electropolished), cleanroom equipment assembly, modular laboratory furniture, custom engineering and factory testing with FAT documentation." path="/manufacturing" jsonLd={breadcrumbJsonLd(company.siteUrl, crumbs)} />
      <PageHero crumbs={crumbs} eyebrow="Manufacturing capabilities" title="Fabricated, assembled and tested in-house" intro="High-quality manufacturing and precision engineering for cleanroom equipment, laboratory furniture and stainless steel modular furniture." image={{ src: '/assets/manufacturing/stainless-steel-lab-benches.webp', alt: '' }} />

      <section className="py-16 md:py-20">
        <div className="container">
          <SectionHeading eyebrow="What we do" title="Capabilities" intro="Each capability below is described in the Indoyug brochure. Facility details — machinery, floor area and capacity — will be added once confirmed." />
          <div className="grid gap-px overflow-hidden rounded border border-surface-line bg-surface-line md:grid-cols-2 lg:grid-cols-4">
            {capabilities.map(({ icon: Icon, title, text }, i) => (
              <Reveal key={title} delay={(i % 4) * 60} className="bg-white p-6">
                <div className="flex items-center justify-between"><Icon className="h-7 w-7 text-brand-500" aria-hidden /><span className="font-mono text-xs text-steel">{String(i + 1).padStart(2, '0')}</span></div>
                <h2 className="mt-4 text-lg font-bold">{title}</h2>
                <p className="mt-2 text-[15px] leading-relaxed text-ink-soft">{text}</p>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-surface py-16 md:py-20">
        <div className="container">
          <SectionHeading eyebrow="Facility gallery" title="Inside the Umbergaon facility" />
          <EditorNote className="mb-8">Factory photographs (fabrication, welding, electropolishing, assembly and testing) are to be supplied by Indoyug. The placeholders below will be replaced with real images — we do not use stock factory photography.</EditorNote>
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            <figure className="overflow-hidden rounded border border-surface-line bg-white">
              <img src="/assets/products/stainless-steel-modular-furniture.webp" alt="Stainless steel trolleys, cabinets and racks" loading="lazy" className="aspect-[4/3] w-full object-cover" />
              <figcaption className="px-4 py-2 font-mono text-[10.5px] uppercase tracking-wider text-steel">SS modular furniture · brochure imagery</figcaption>
            </figure>
            {['Stainless steel fabrication & welding', 'Electropolishing & finishing', 'Cleanroom equipment assembly', 'Laboratory furniture production', 'Factory acceptance testing'].map((l) => (
              <figure key={l} className="overflow-hidden rounded border border-dashed border-brand-200 bg-white">
                <div className="aspect-[4/3]"><ImagePlaceholder label={l} /></div>
              </figure>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 md:py-20" id="enquiry">
        <div className="container grid gap-12 lg:grid-cols-12">
          <div className="lg:col-span-5">
            <p className="eyebrow mb-3">Custom manufacturing</p>
            <h2 className="text-3xl font-bold md:text-4xl">Need something built to your drawing?</h2>
            <p className="mt-4 text-lg text-ink-soft">Describe the equipment or furniture, dimensions, material and quantity. For drawings, use the full quote form with file upload.</p>
            <Link to="/request-a-quote" className="link mt-4 inline-block">Go to the quote form with file upload →</Link>
          </div>
          <div className="card p-6 md:p-8 lg:col-span-7"><EnquiryForm variant="short" kind="manufacturing" context="Manufacturing page — custom manufacturing" submitLabel="Send manufacturing enquiry" /></div>
        </div>
      </section>
    </>
  );
}
