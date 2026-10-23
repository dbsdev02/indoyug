import type { ReactNode } from 'react';
import { cn } from '../../lib/utils';

export function SectionHeading({ eyebrow, title, intro, align = 'left', light = false, as: H = 'h2', className, action }: {
  eyebrow?: string; title: ReactNode; intro?: ReactNode; align?: 'left' | 'center'; light?: boolean; as?: 'h1' | 'h2' | 'h3'; className?: string; action?: ReactNode;
}) {
  return (
    <div className={cn('mb-10 flex flex-col gap-6 md:flex-row md:items-end md:justify-between', align === 'center' && 'items-center text-center md:flex-col md:items-center', className)}>
      <div className={cn('max-w-3xl', align === 'center' && 'mx-auto')}>
        {eyebrow && <p className={cn('eyebrow mb-3', light && 'text-teal-400')}>{eyebrow}</p>}
        <H className={cn('text-3xl font-bold md:text-[2.5rem]', light && 'text-white')}>{title}</H>
        {intro && <div className={cn('mt-4 text-lg leading-relaxed', light ? 'text-white/75' : 'text-ink-soft')}>{intro}</div>}
      </div>
      {action && <div className="shrink-0">{action}</div>}
    </div>
  );
}
