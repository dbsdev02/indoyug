import type { ReactNode } from 'react';
import { Breadcrumbs, type Crumb } from './Breadcrumbs';
import { cn } from '../../lib/utils';

/** Inner-page header: navy band with blueprint grid, breadcrumb and optional image. */
export function PageHero({ crumbs, eyebrow, title, intro, image, children, compact = false }: {
  crumbs: Crumb[]; eyebrow?: string; title: ReactNode; intro?: ReactNode; image?: { src: string; alt: string }; children?: ReactNode; compact?: boolean;
}) {
  return (
    <section className="relative overflow-hidden bg-brand-900 text-white">
      <div className="bg-blueprint-dark absolute inset-0" aria-hidden />
      {image && (
        <div className="absolute inset-y-0 right-0 hidden w-[46%] lg:block" aria-hidden>
          <img src={image.src} alt="" className="h-full w-full object-cover opacity-90" />
          <div className="absolute inset-0 bg-gradient-to-r from-brand-900 via-brand-900/40 to-transparent" />
        </div>
      )}
      <div className={cn('container relative', compact ? 'py-12 md:py-14' : 'py-14 md:py-20')}>
        <div className={cn(image ? 'lg:max-w-[52%]' : 'max-w-3xl')}>
          <Breadcrumbs items={crumbs} light />
          {eyebrow && <p className="eyebrow mb-3 text-teal-400">{eyebrow}</p>}
          <h1 className="text-[2.1rem] font-extrabold leading-[1.08] text-white md:text-5xl">{title}</h1>
          {intro && <div className="mt-5 max-w-2xl text-lg leading-relaxed text-white/80">{intro}</div>}
          {children && <div className="mt-8">{children}</div>}
        </div>
      </div>
    </section>
  );
}
