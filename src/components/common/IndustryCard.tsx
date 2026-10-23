import { Link } from 'react-router-dom';
import { ArrowUpRight } from 'lucide-react';
import type { Industry } from '../../types';
import { StockImage } from './StockImage';

export function IndustryCard({ industry, index }: { industry: Industry; index?: number }) {
  return (
    <Link to={`/industries/${industry.slug}`} className="group card relative flex h-full flex-col overflow-hidden transition-shadow hover:shadow-lift">
      <div className="aspect-[16/10] overflow-hidden bg-surface">
        {industry.image ? (
          <img src={industry.image.src} alt={industry.image.alt} loading="lazy" className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-[1.03]" />
        ) : (
          <StockImage label={industry.name} />
        )}
      </div>
      <div className="flex flex-1 flex-col p-5">
        {index !== undefined && <span className="font-mono text-xs text-brand-500">{String(index + 1).padStart(2, '0')}</span>}
        <h3 className="mt-1 flex items-start justify-between gap-3 text-lg font-bold">
          {industry.name}
          <ArrowUpRight className="h-5 w-5 shrink-0 text-brand-500 transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" aria-hidden />
        </h3>
        <p className="mt-2 text-[15px] leading-relaxed text-ink-soft">{industry.summary}</p>
      </div>
    </Link>
  );
}
