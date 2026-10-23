import { Link } from 'react-router-dom';
import { ArrowRight, BadgeCheck, ClipboardCheck, Factory, Layers, Mail, MapPin, Phone, Ruler, Wind, Wrench } from 'lucide-react';
import { SEO, organizationJsonLd } from '../components/common/SEO';
import { Reveal } from '../components/common/Reveal';
import { SectionHeading } from '../components/common/SectionHeading';
import { ProductCard } from '../components/common/ProductCard';
import { IndustryCard } from '../components/common/IndustryCard';
import { ProjectCard } from '../components/common/ProjectCard';
import { CTASection } from '../components/common/CTASection';
import { categories } from '../data/categories';
import { featuredProducts, productsByCategory } from '../data/products';
import { industries } from '../data/industries';
import { projects } from '../data/projects';
import { company, brochurePillars } from '../data/company';

const credentials = [
  { value: company.yearsExperience, label: 'Years of industry experience', icon: BadgeCheck },
  { value: '100%', label: 'Factory tested, with FAT documentation & calibration records', icon: ClipboardCheck },
  { value: '3-in-1', label: 'HVAC, cleanroom & laboratory turnkey projects under one roof', icon: Layers },
  { value: 'Custom', label: 'Standard and custom sizes across the range', icon: Ruler },
];

const process = [
  { n: '01', title: 'Consultation & design', text: 'Planning and designing around your process, room data and layout.' },
  { n: '02', title: 'Engineering & manufacturing', text: 'Equipment and furniture built to standard or custom dimensions.' },
  { n: '03', title: 'Factory testing', text: 'Units are factory tested and ship with FAT documentation.' },
  { n: '04', title: 'Installation & validation', text: 'On-site installation and validation, scoped per project.' },
  { n: '05', title: 'After-sales support', text: 'Continued support once your facility is running.' },
];

const capabilities = [
  { icon: Factory, title: 'Stainless steel fabrication', text: 'Crevice-free, fully welded SS 304 / 316L furniture with mirror or matte electropolished finishes.' },
  { icon: Wind, title: 'Cleanroom equipment assembly', text: 'Air showers, mist showers, pass boxes, LAF units and biosafety cabinets.' },
  { icon: Wrench, title: 'Modular laboratory furniture', text: 'Benches, sink units, fume hoods, storage and anti-vibration tables.' },
  { icon: ClipboardCheck, title: 'Testing & documentation', text: 'Factory testing with FAT documentation and calibration records.' },
];

export default function Home() {
  return (
    <>
      <SEO
        title="Indoyug Clean Tech LLP | Cleanroom Equipment & Laboratory Furniture Manufacturer in India"
        description="Manufacturer of cleanroom equipment, laboratory furniture and stainless steel modular furniture — air showers, pass boxes, LAF units, biosafety cabinets, fume hoods — plus cleanroom, HVAC and lab turnkey projects. Umbergaon, Gujarat."
        path="/"
        jsonLd={[organizationJsonLd(), { '@context': 'https://schema.org', '@type': 'WebSite', name: company.name, url: company.siteUrl, potentialAction: { '@type': 'SearchAction', target: `${company.siteUrl}/search?q={search_term_string}`, 'query-input': 'required name=search_term_string' } }]}
      />

      {/* 1–5 HERO */}
      <section className="relative overflow-hidden bg-brand-950 text-white">
        <img src="/assets/projects/microbiology-cleanroom-lab.webp" alt="" aria-hidden className="absolute inset-0 h-full w-full object-cover object-[70%_center]" />
        <div className="absolute inset-0 bg-gradient-to-r from-brand-950/95 via-brand-950/80 to-brand-950/55 lg:via-brand-950/70 lg:to-transparent" aria-hidden />
        <div className="bg-blueprint-dark absolute inset-0 opacity-60 [mask-image:linear-gradient(to_right,black_30%,transparent_70%)]" aria-hidden />
        <div className="container relative grid min-h-[600px] items-center py-20 lg:min-h-[640px]">
          <div className="max-w-2xl">
            <p className="eyebrow mb-5 flex items-center gap-3 text-teal-400"><span className="h-px w-8 bg-teal-400" aria-hidden />Cleanroom · Laboratory · HVAC</p>
            <h1 className="text-[2.6rem] font-extrabold leading-[1.02] text-white sm:text-6xl lg:text-[4.25rem]">
              Engineered Cleanroom &amp; Laboratory Solutions
            </h1>
            <p className="mt-6 max-w-xl text-lg leading-relaxed text-white/80 md:text-xl">
              Purpose-built cleanroom equipment, laboratory furniture and stainless steel systems for demanding controlled environments — manufactured in Umbergaon, Gujarat and delivered as complete turnkey projects.
            </p>
            <div className="mt-9 flex flex-col gap-3 sm:flex-row">
              <Link to="/request-a-quote" className="btn-accent px-6 py-3.5 text-base">Request a Quote <ArrowRight className="h-4 w-4" aria-hidden /></Link>
              <Link to="/products" className="btn-ghost-light px-6 py-3.5 text-base">Explore Our Products</Link>
            </div>
          </div>
        </div>
      </section>

      {/* 6 CREDIBILITY STRIP */}
      <section aria-label="Company credentials" className="border-b border-surface-line bg-white">
        <div className="container grid divide-y divide-surface-line sm:grid-cols-2 sm:divide-y-0 lg:grid-cols-4 lg:divide-x">
          {credentials.map(({ value, label, icon: Icon }, i) => (
            <Reveal key={label} delay={i * 70} className="flex items-start gap-4 py-7 sm:px-6 lg:first:pl-0">
              <Icon className="mt-1 h-6 w-6 shrink-0 text-brand-500" aria-hidden />
              <div>
                <p className="font-display text-3xl font-extrabold text-brand-800">{value}</p>
                <p className="mt-1 text-sm leading-snug text-ink-soft">{label}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </section>

      {/* 7 PRODUCT CATEGORIES */}
      <section className="bg-surface py-20 md:py-24">
        <div className="container">
          <SectionHeading eyebrow="Product range" title="Six product families. One manufacturing partner." intro="From personnel entry systems to fume hoods and electropolished SS furniture — specify, configure and source the complete controlled-environment package from Indoyug."
            action={<Link to="/products" className="btn-outline">View all products <ArrowRight className="h-4 w-4" aria-hidden /></Link>} />
          <div className="grid gap-px overflow-hidden rounded border border-surface-line bg-surface-line sm:grid-cols-2 lg:grid-cols-3">
            {categories.map((c, i) => (
              <Reveal key={c.id} delay={(i % 3) * 80} className="bg-white">
                <Link to={`/products?category=${c.id}`} className="group flex h-full flex-col">
                  <div className="relative aspect-[16/10] overflow-hidden bg-gradient-to-b from-surface to-white">
                    {c.image && <img src={c.image} alt="" loading="lazy" className="h-full w-full object-contain p-6 transition-transform duration-500 group-hover:scale-[1.04]" />}
                    <span className="absolute left-5 top-4 font-mono text-xs text-brand-500">{String(i + 1).padStart(2, '0')}</span>
                  </div>
                  <div className="flex flex-1 flex-col border-t border-surface-line p-6">
                    <h3 className="flex items-center justify-between text-xl font-bold group-hover:text-brand-700">{c.name}<ArrowRight className="h-5 w-5 text-brand-500 transition-transform group-hover:translate-x-1" aria-hidden /></h3>
                    <p className="mt-2 flex-1 text-[15px] leading-relaxed text-ink-soft">{c.description}</p>
                    <p className="mt-4 font-mono text-[11px] uppercase tracking-wider text-steel">{productsByCategory(c.id).length} products</p>
                  </div>
                </Link>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* 8 FEATURED PRODUCTS */}
      <section className="py-20 md:py-24">
        <div className="container">
          <SectionHeading eyebrow="Featured equipment" title="Built for critical environments" intro="Specifications on each product page are taken directly from the Indoyug brochure." />
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {featuredProducts.filter((p) => p.image?.src.includes('/products/')).slice(0, 8).map((p, i) => (
              <Reveal key={p.slug} delay={(i % 4) * 70}><ProductCard product={p} /></Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* 9 MANUFACTURING */}
      <section className="relative overflow-hidden bg-brand-900 py-20 text-white md:py-24">
        <div className="bg-blueprint-dark absolute inset-0" aria-hidden />
        <div className="container relative grid items-center gap-12 lg:grid-cols-2">
          <div>
            <SectionHeading light eyebrow="Manufacturing" title="Engineered and built in-house" intro="Indoyug combines cleanroom equipment, laboratory furniture and stainless steel furniture manufacturing capability — so project teams deal with one accountable supplier." className="mb-8" />
            <ul className="grid gap-6 sm:grid-cols-2">
              {capabilities.map(({ icon: Icon, title, text }) => (
                <li key={title} className="border-t border-white/15 pt-5">
                  <Icon className="h-6 w-6 text-teal-400" aria-hidden />
                  <h3 className="mt-3 text-lg font-bold text-white">{title}</h3>
                  <p className="mt-1.5 text-[15px] leading-relaxed text-white/70">{text}</p>
                </li>
              ))}
            </ul>
            <Link to="/manufacturing" className="btn-white mt-10">Manufacturing capabilities <ArrowRight className="h-4 w-4" aria-hidden /></Link>
          </div>
          <Reveal className="relative">
            <img src="/assets/manufacturing/stainless-steel-lab-benches.webp" alt="Stainless steel laboratory workstations with integrated sinks" loading="lazy" className="aspect-[4/5] w-full rounded object-cover lg:aspect-[5/6]" />
            <p className="absolute bottom-0 left-0 right-0 bg-brand-950/80 px-4 py-2.5 font-mono text-[11px] uppercase tracking-wider text-white/75">Brochure imagery · factory photographs to be added</p>
          </Reveal>
        </div>
      </section>

      {/* 10 WHY CHOOSE */}
      <section className="py-20 md:py-24">
        <div className="container grid gap-12 lg:grid-cols-12">
          <div className="lg:col-span-5">
            <SectionHeading eyebrow="Why Indoyug" title="Extraordinary service in HVAC, cleanrooms and laboratory projects — under one roof" className="mb-6" />
            <p className="text-lg leading-relaxed text-ink-soft">With {company.yearsExperience} years of industry experience, Indoyug takes ownership from initial consultation and design through installation, validation and after-sales support.</p>
          </div>
          <ul className="grid gap-px self-start overflow-hidden rounded border border-surface-line bg-surface-line sm:grid-cols-2 lg:col-span-7">
            {brochurePillars.map((p, i) => (
              <li key={p} className="flex items-center gap-4 bg-white px-5 py-5">
                <span className="font-mono text-xs text-brand-500">{String(i + 1).padStart(2, '0')}</span>
                <span className="font-display text-[17px] font-semibold">{p}</span>
              </li>
            ))}
            <li className="flex items-center bg-brand-700 px-5 py-5">
              <Link to="/about-us" className="flex w-full items-center justify-between font-display text-[17px] font-semibold text-white">About Indoyug <ArrowRight className="h-5 w-5" aria-hidden /></Link>
            </li>
          </ul>
        </div>
      </section>

      {/* 11 INDUSTRIES */}
      <section className="bg-surface py-20 md:py-24">
        <div className="container">
          <SectionHeading eyebrow="Industries" title="Serving contamination-sensitive industries" intro="Customised cleanroom and laboratory solutions backed by our SS furniture manufacturing capability."
            action={<Link to="/industries" className="btn-outline">All industries <ArrowRight className="h-4 w-4" aria-hidden /></Link>} />
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {industries.slice(0, 4).map((ind, i) => <Reveal key={ind.slug} delay={i * 70}><IndustryCard industry={ind} index={i} /></Reveal>)}
          </div>
          <div className="mt-6 flex flex-wrap gap-3">
            {industries.slice(4).map((ind) => (
              <Link key={ind.slug} to={`/industries/${ind.slug}`} className="rounded-full border border-surface-line bg-white px-4 py-2 text-sm font-semibold text-ink hover:border-brand-500 hover:text-brand-700">{ind.name}</Link>
            ))}
          </div>
        </div>
      </section>

      {/* 12 TURNKEY */}
      <section className="py-20 md:py-24">
        <div className="container">
          <SectionHeading eyebrow="Custom engineering & turnkey projects" title="From first drawing to final handover" intro="End-to-end project ownership for demanding critical environments. Scope is agreed per project."
            action={<Link to="/turnkey-projects" className="btn-outline">Turnkey projects <ArrowRight className="h-4 w-4" aria-hidden /></Link>} />
          <ol className="grid gap-px overflow-hidden rounded border border-surface-line bg-surface-line md:grid-cols-5">
            {process.map((s, i) => (
              <Reveal as="li" key={s.n} delay={i * 70} className="relative bg-white p-6">
                <span className="font-mono text-sm font-medium text-brand-500">{s.n}</span>
                <h3 className="mt-3 text-lg font-bold">{s.title}</h3>
                <p className="mt-2 text-[15px] leading-relaxed text-ink-soft">{s.text}</p>
                <span className="absolute bottom-0 left-0 h-1 bg-brand-500" style={{ width: `${(i + 1) * 20}%` }} aria-hidden />
              </Reveal>
            ))}
          </ol>
        </div>
      </section>

      {/* 13 PROJECT SHOWCASE */}
      <section className="bg-surface py-20 md:py-24">
        <div className="container">
          <SectionHeading eyebrow="Projects & gallery" title="Cleanroom and laboratory environments" intro="Imagery from the Indoyug brochure. Documented case studies will be published here once approved."
            action={<Link to="/projects" className="btn-outline">View gallery <ArrowRight className="h-4 w-4" aria-hidden /></Link>} />
          <div className="grid gap-6 md:grid-cols-3">{projects.slice(0, 3).map((p, i) => <Reveal key={p.slug} delay={i * 80}><ProjectCard project={p} /></Reveal>)}</div>
        </div>
      </section>

      {/* 14 QUALITY */}
      <section className="py-20 md:py-24">
        <div className="container grid items-center gap-12 lg:grid-cols-2">
          <Reveal className="ticks border border-surface-line bg-surface p-8 md:p-10">
            <p className="eyebrow">Quality assurance</p>
            <p className="mt-4 font-display text-6xl font-extrabold text-brand-800 md:text-7xl">100%</p>
            <p className="mt-2 font-display text-2xl font-bold">Factory tested</p>
            <p className="mt-4 text-[16px] leading-relaxed text-ink-soft">According to the Indoyug brochure, every unit ships with full FAT (factory acceptance test) documentation and calibration records.</p>
          </Reveal>
          <div>
            <SectionHeading eyebrow="Quality" title="Tested before it leaves the factory" className="mb-6" />
            <ul className="space-y-4">
              {['Factory acceptance testing (FAT) with documentation', 'Calibration records supplied with units', 'Specifications published from verified brochure data — never estimated', 'Standard and custom configurations documented per order'].map((t) => (
                <li key={t} className="flex gap-3 text-[16px]"><BadgeCheck className="mt-0.5 h-5 w-5 shrink-0 text-brand-500" aria-hidden />{t}</li>
              ))}
            </ul>
            <Link to="/quality" className="btn-outline mt-8">Our quality approach <ArrowRight className="h-4 w-4" aria-hidden /></Link>
          </div>
        </div>
      </section>

      {/* 15 CTA */}
      <CTASection />

      {/* 17 CONTACT + MAP */}
      <section className="py-20 md:py-24" aria-labelledby="home-contact">
        <div className="container grid gap-10 lg:grid-cols-12">
          <div className="lg:col-span-5">
            <p className="eyebrow mb-3">Contact</p>
            <h2 id="home-contact" className="text-3xl font-bold md:text-4xl">Visit or call our Umbergaon facility</h2>
            <address className="mt-8 space-y-5 not-italic">
              <p className="flex gap-4"><MapPin className="mt-1 h-5 w-5 shrink-0 text-brand-500" aria-hidden /><span className="text-[16px] leading-relaxed">{company.addressOneLine}</span></p>
              <p className="flex gap-4"><Phone className="mt-1 h-5 w-5 shrink-0 text-brand-500" aria-hidden /><span className="flex flex-col">{company.phones.map((p) => <a key={p.tel} href={`tel:${p.tel}`} className="text-[16px] font-semibold text-brand-800 hover:underline">{p.display}</a>)}</span></p>
              <p className="flex gap-4"><Mail className="mt-1 h-5 w-5 shrink-0 text-brand-500" aria-hidden /><a href={`mailto:${company.email}`} className="text-[16px] font-semibold text-brand-800 hover:underline">{company.email}</a></p>
            </address>
            <div className="mt-8 flex flex-wrap gap-3">
              <Link to="/contact-us" className="btn-primary">Contact us</Link>
              <a href={company.mapsUrl} target="_blank" rel="noopener noreferrer" className="btn-outline">Get directions</a>
            </div>
          </div>
          <div className="overflow-hidden rounded border border-surface-line lg:col-span-7">
            <iframe title="Map showing Indoyug Clean Tech LLP, GIDC Umbergaon" src={company.mapsEmbedUrl} loading="lazy" referrerPolicy="no-referrer-when-downgrade" className="h-[360px] w-full border-0 lg:h-full lg:min-h-[400px]" />
          </div>
        </div>
      </section>
    </>
  );
}
