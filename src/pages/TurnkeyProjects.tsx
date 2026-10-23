import { SEO } from '../components/common/SEO';
import { PageHero } from '../components/common/PageHero';
import { SectionHeading } from '../components/common/SectionHeading';
import { Reveal } from '../components/common/Reveal';
import { ProjectCard } from '../components/common/ProjectCard';
import { EnquiryForm } from '../components/forms/EnquiryForm';
import { breadcrumbJsonLd } from '../components/common/Breadcrumbs';
import { company } from '../data/company';
import { projects } from '../data/projects';
import { cn } from '../lib/utils';

type Who = 'Indoyug' | 'Scope-dependent';
const phases: { title: string; text: string; who: Who; note?: string }[] = [
  { title: 'Project planning', text: 'Understanding your process, room data, cleanliness requirements and timeline.', who: 'Indoyug' },
  { title: 'Layout & design coordination', text: 'Planning and designing the cleanroom or laboratory layout, coordinated with your architects and consultants.', who: 'Indoyug' },
  { title: 'Equipment & furniture selection', text: 'Selecting entry systems, pass boxes, doors, LAF units, biosafety cabinets, laboratory and SS furniture.', who: 'Indoyug' },
  { title: 'Manufacturing & customisation', text: 'Manufacturing equipment and furniture to standard or custom dimensions, with factory testing and FAT documentation.', who: 'Indoyug' },
  { title: 'HVAC systems', text: 'HVAC, airflow and ducting for the controlled areas.', who: 'Scope-dependent', note: 'Delivered under one roof; any specialist partners are named in the proposal.' },
  { title: 'Installation & commissioning', text: 'On-site installation of supplied systems.', who: 'Scope-dependent', note: 'Installation is offered; commissioning scope is confirmed per project.' },
  { title: 'Validation', text: 'Validation of supplied systems as part of project handover.', who: 'Scope-dependent', note: 'Validation is offered; protocols and any third-party testing are agreed per project.' },
  { title: 'After-sales support', text: 'Support once your facility is operational.', who: 'Indoyug' },
];

export default function TurnkeyProjects() {
  const crumbs = [{ label: 'Turnkey Projects' }];
  return (
    <>
      <SEO title="Cleanroom, HVAC & Laboratory Turnkey Projects" description="Indoyug delivers HVAC, cleanroom and laboratory turnkey projects under one roof — planning, design, equipment, furniture, installation, validation and after-sales support." path="/turnkey-projects" jsonLd={breadcrumbJsonLd(company.siteUrl, crumbs)} />
      <PageHero crumbs={crumbs} eyebrow="Turnkey projects" title="HVAC, cleanroom and laboratory projects — under one roof" intro="From initial consultation and design through installation, validation and after-sales support: end-to-end project ownership for demanding critical environments." image={{ src: '/assets/projects/cleanroom-process-facility.webp', alt: '' }} />

      <section className="py-16 md:py-20">
        <div className="container">
          <SectionHeading eyebrow="How we deliver" title="Project phases and responsibilities" intro="We are explicit about who does what. Phases marked ‘scope-dependent’ are offered, with the exact scope and any partners confirmed in your proposal." />
          <ol className="relative space-y-4 before:absolute before:bottom-4 before:left-[19px] before:top-4 before:w-px before:bg-surface-line md:before:left-[23px]">
            {phases.map((p, i) => (
              <Reveal as="li" key={p.title} className="relative flex gap-5 md:gap-6">
                <span className="relative z-10 flex h-10 w-10 shrink-0 items-center justify-center rounded-full border-2 border-brand-500 bg-white font-mono text-sm font-medium text-brand-700 md:h-12 md:w-12">{String(i + 1).padStart(2, '0')}</span>
                <div className="card flex-1 p-5 md:flex md:items-start md:justify-between md:gap-6">
                  <div>
                    <h3 className="text-lg font-bold">{p.title}</h3>
                    <p className="mt-1 text-[15px] text-ink-soft">{p.text}</p>
                    {p.note && <p className="mt-2 text-sm text-steel">{p.note}</p>}
                  </div>
                  <span className={cn('mt-3 inline-block shrink-0 rounded-sm px-2.5 py-1 font-mono text-[10.5px] uppercase tracking-wider md:mt-0', p.who === 'Indoyug' ? 'bg-brand-50 text-brand-800' : 'bg-amber-50 text-amber-800')}>
                    {p.who === 'Indoyug' ? 'Performed by Indoyug' : 'Scope-dependent'}
                  </span>
                </div>
              </Reveal>
            ))}
          </ol>
        </div>
      </section>

      <section className="bg-surface py-16 md:py-20">
        <div className="container">
          <SectionHeading eyebrow="Gallery" title="Cleanroom and laboratory environments" />
          <div className="grid gap-6 md:grid-cols-3">{projects.filter((p) => ['Turnkey projects', 'Cleanroom installations'].includes(p.category)).slice(0, 3).map((p) => <ProjectCard key={p.slug} project={p} />)}</div>
        </div>
      </section>

      <section className="py-16 md:py-20" id="enquiry">
        <div className="container grid gap-12 lg:grid-cols-12">
          <div className="lg:col-span-5">
            <p className="eyebrow mb-3">Project enquiry</p>
            <h2 className="text-3xl font-bold md:text-4xl">Tell us about your facility</h2>
            <p className="mt-4 text-lg text-ink-soft">Include the area, cleanliness requirements, processes and timeline. Attach layouts or URS documents in the detailed quote form.</p>
          </div>
          <div className="card p-6 md:p-8 lg:col-span-7"><EnquiryForm variant="quote" kind="project" defaultCategory="multiple" context="Turnkey projects page" submitLabel="Send project enquiry" /></div>
        </div>
      </section>
    </>
  );
}
