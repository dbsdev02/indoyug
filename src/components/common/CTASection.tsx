import { Link } from 'react-router-dom';
import { ArrowRight, Phone } from 'lucide-react';
import { company } from '../../data/company';

export function CTASection({ title = 'Planning a cleanroom or laboratory project?', text = 'Share your requirements, drawings or user requirement specification. Our team will respond with a configured proposal.', primaryLabel = 'Request a Quote', primaryHref = '/request-a-quote' }: {
  title?: string; text?: string; primaryLabel?: string; primaryHref?: string;
}) {
  return (
    <section className="relative overflow-hidden bg-brand-700 text-white">
      <div className="bg-blueprint-dark absolute inset-0" aria-hidden />
      <div className="absolute -right-24 top-0 h-full w-1/2 skew-x-[-18deg] bg-brand-500/30" aria-hidden />
      <div className="container relative flex flex-col gap-8 py-14 md:flex-row md:items-center md:justify-between md:py-16">
        <div className="max-w-2xl">
          <h2 className="text-3xl font-bold text-white md:text-4xl">{title}</h2>
          <p className="mt-3 text-lg text-white/80">{text}</p>
        </div>
        <div className="flex flex-col gap-3 sm:flex-row">
          <Link to={primaryHref} className="btn-white">{primaryLabel} <ArrowRight className="h-4 w-4" aria-hidden /></Link>
          <a href={`tel:${company.phones[0].tel}`} className="btn-ghost-light"><Phone className="h-4 w-4" aria-hidden /> {company.phones[0].display}</a>
        </div>
      </div>
    </section>
  );
}
