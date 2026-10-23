import { useEffect, useRef, type ElementType, type ReactNode } from 'react';
import { cn } from '../../lib/utils';

/** CSS-driven scroll reveal (see index.css). Visible without JS; respects reduced motion. */
export function Reveal({ as: Tag = 'div', className, delay = 0, children, ...rest }: { as?: ElementType; className?: string; delay?: number; children: ReactNode; id?: string }) {
  const ref = useRef<HTMLElement | null>(null);
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    if (!('IntersectionObserver' in window)) { el.classList.add('is-visible'); return; }
    const io = new IntersectionObserver(
      (entries) => entries.forEach((e) => { if (e.isIntersecting) { el.classList.add('is-visible'); io.disconnect(); } }),
      { rootMargin: '0px 0px -8% 0px', threshold: 0.05 },
    );
    io.observe(el);
    return () => io.disconnect();
  }, []);
  return (
    <Tag ref={ref} className={cn('reveal', className)} style={delay ? { transitionDelay: `${delay}ms` } : undefined} {...rest}>
      {children}
    </Tag>
  );
}
