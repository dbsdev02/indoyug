import { Link } from 'react-router-dom';
import { ArrowRight, CheckCircle2 } from 'lucide-react';
import { SEO } from '../components/common/SEO';
import { PageHero } from '../components/common/PageHero';
import { SectionHeading } from '../components/common/SectionHeading';
import { Reveal } from '../components/common/Reveal';
import { CTASection } from '../components/common/CTASection';
import { breadcrumbJsonLd } from '../components/common/Breadcrumbs';
import { company, brochurePillars } from '../data/company';
import { categories } from '../data/categories';
import { industries } from '../data/industries';

export default function AboutUs() {
  const crumbs = [{ label: 'About Us' }];
  return (
    <>
      <SEO title="About Indoyug Clean Tech LLP — Cleanroom & Laboratory Solutions" description={`Indoyug Clean Tech LLP, Umbergaon, Gujarat: ${company.yearsExperience} years of industry experience in cleanroom equipment, laboratory furniture, SS modular furniture, HVAC and turnkey projects.`} path="/about-us" jsonLd={breadcrumbJsonLd(company.siteUrl, crumbs)} />
      <PageHero crumbs={crumbs} eyebrow="About Indoyug" title="Precision in Purity" intro="Indoyug Clean Tech LLP provides HVAC systems, cleanrooms and laboratory turnkey projects — all under one roof — from its base in GIDC Umbergaon, Gujarat." image={{ src: '/assets/projects/cleanroom-laboratory-interior.webp', alt: '' }} />

      <section className="py-16 md:py-20">
        <div className="container grid gap-12 lg:grid-cols-12">
          <div className="lg:col-span-7">
            <SectionHeading eyebrow="Who we are" title="A cleanroom and laboratory specialist" className="mb-6" />
            <div className="prose-body">
              <p>Indoyug Clean Tech LLP designs and manufactures cleanroom equipment, laboratory furniture and stainless steel modular furniture, and delivers HVAC, cleanroom and laboratory turnkey projects.</p>
              <p>Our cleanroom and laboratory furniture is engineered for sterile environments — stainless steel workstations, seating, trolleys, UV-sterilised storage and units built to meet strict hygiene requirements. Our laboratory furniture creates safe, efficient and well-organised workspaces for pharmaceutical, biotechnology, chemical, research and industrial laboratories.</p>
              <p>With {company.yearsExperience} years of industry experience, we take projects from initial consultation and design through installation, validation and after-sales support.</p>
            </div>
          </div>
          <aside className="lg:col-span-5">
            <dl className="ticks grid grid-cols-2 gap-px overflow-hidden border border-surface-line bg-surface-line">
              {[
                ['Legal name', company.name],
                ['Location', 'GIDC Umbergaon, Gujarat'],
                ['Experience', `${company.yearsExperience} years`],
                ['Product families', String(categories.length)],
              ].map(([k, v]) => (
                <div key={k} className="bg-white p-5"><dt className="font-mono text-[10.5px] uppercase tracking-wider text-steel">{k}</dt><dd className="mt-1 font-display text-lg font-bold">{v}</dd></div>
              ))}
            </dl>
          </aside>
        </div>
      </section>

      <section className="bg-surface py-16 md:py-20">
        <div className="container">
          <SectionHeading eyebrow="Capabilities" title="Engineering, manufacturing and project delivery" />
          <div className="grid gap-6 md:grid-cols-3">
            {[
              { t: 'Manufacturing & engineering', d: 'High-quality manufacturing and precision engineering of cleanroom equipment, laboratory furniture and SS modular furniture.', href: '/manufacturing' },
              { t: 'Cleanroom & laboratory expertise', d: 'Superior airflow technology and laminar airflow systems, cleanroom doors, pass boxes and personnel entry systems.', href: '/products' },
              { t: 'Turnkey projects', d: 'Planning and designing, then HVAC, cleanroom and laboratory delivery under one roof with end-to-end support.', href: '/turnkey-projects' },
            ].map((c, i) => (
              <Reveal key={c.t} delay={i * 80} className="card flex flex-col p-6">
                <span className="font-mono text-xs text-brand-500">{String(i + 1).padStart(2, '0')}</span>
                <h3 className="mt-2 text-xl font-bold">{c.t}</h3>
                <p className="mt-2 flex-1 text-[15px] leading-relaxed text-ink-soft">{c.d}</p>
                <Link to={c.href} className="mt-5 inline-flex items-center gap-1.5 text-sm font-semibold text-brand-700 hover:underline">Learn more <ArrowRight className="h-4 w-4" aria-hidden /></Link>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 md:py-20">
        <div className="container grid gap-12 lg:grid-cols-2">
          <div>
            <SectionHeading eyebrow="Quality & customisation" title="Built to your requirement, tested before dispatch" className="mb-6" />
            <ul className="space-y-3">
              {['Every unit factory tested, shipping with FAT documentation and calibration records (per brochure)', 'Standard and custom sizes across the product range', 'Choice of materials: SS 304 / 316 / 316L, MS, powder-coated GI depending on product', 'Mirror or matte electropolished finishes on SS modular furniture'].map((t) => (
                <li key={t} className="flex gap-3"><CheckCircle2 className="mt-0.5 h-5 w-5 shrink-0 text-brand-500" aria-hidden /><span className="text-[16px]">{t}</span></li>
              ))}
            </ul>
          </div>
          <div>
            <SectionHeading eyebrow="What sets us apart" title="Why customers choose Indoyug" className="mb-6" />
            <ul className="grid grid-cols-1 gap-2 sm:grid-cols-2">{brochurePillars.map((p) => <li key={p} className="rounded border border-surface-line px-4 py-3 font-semibold">{p}</li>)}</ul>
          </div>
        </div>
      </section>

      <section className="bg-surface py-16 md:py-20">
        <div className="container">
          <SectionHeading eyebrow="Industries served" title="Where our products work" />
          <ul className="flex flex-wrap gap-3">{industries.map((i) => <li key={i.slug}><Link to={`/industries/${i.slug}`} className="inline-block rounded-full border border-surface-line bg-white px-4 py-2 font-semibold hover:border-brand-500 hover:text-brand-700">{i.name}</Link></li>)}</ul>
          <div className="mt-12 grid gap-4 md:grid-cols-3">
            <figure className="overflow-hidden rounded border border-surface-line bg-white"><img src="/assets/projects/microbiology-cleanroom-lab.webp" alt="Cleanroom laboratory with LAF unit and benches" loading="lazy" className="aspect-[4/3] w-full object-cover" /><figcaption className="px-4 py-2 font-mono text-[10.5px] uppercase tracking-wider text-steel">Brochure imagery</figcaption></figure>
            <figure className="overflow-hidden rounded border border-surface-line bg-white"><img src="/assets/manufacturing/stainless-steel-lab-benches.webp" alt="Stainless steel laboratory workstations" loading="lazy" className="aspect-[4/3] w-full object-cover" /><figcaption className="px-4 py-2 font-mono text-[10.5px] uppercase tracking-wider text-steel">Brochure imagery</figcaption></figure>
            <figure className="overflow-hidden rounded border border-surface-line bg-white"><img src="/assets/stock/ss-welding.webp" alt="Welder fabricating a perforated stainless steel sheet" loading="lazy" className="aspect-[4/3] w-full object-cover" /><figcaption className="px-4 py-2 font-mono text-[10.5px] uppercase tracking-wider text-steel">Fabrication &amp; welding</figcaption></figure>
          </div>
        </div>
      </section>
      <CTASection title="Let’s discuss your project" />
    </>
  );
}
