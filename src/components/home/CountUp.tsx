import { useEffect, useRef, useState } from 'react';

/** Counts the leading number of `value` (e.g. "11+", "100%") up from 0 when scrolled into view. Non-numeric values render as-is. */
export function CountUp({ value, duration = 1400 }: { value: string; duration?: number }) {
  const match = value.match(/^(\d+)(.*)$/);
  const target = match ? Number(match[1]) : 0;
  const suffix = match ? match[2] : '';
  const ref = useRef<HTMLSpanElement | null>(null);
  const [n, setN] = useState(target);

  useEffect(() => {
    const el = ref.current;
    if (!match || !el || !('IntersectionObserver' in window)) return;
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;
    setN(0);
    let raf = 0;
    const io = new IntersectionObserver(([e]) => {
      if (!e.isIntersecting) return;
      io.disconnect();
      const start = performance.now();
      const tick = (t: number) => {
        const p = Math.min(1, (t - start) / duration);
        setN(Math.round(target * (1 - Math.pow(1 - p, 3))));
        if (p < 1) raf = requestAnimationFrame(tick);
      };
      raf = requestAnimationFrame(tick);
    }, { threshold: 0.4 });
    io.observe(el);
    return () => { io.disconnect(); cancelAnimationFrame(raf); };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [target, duration]);

  if (!match) return <>{value}</>;
  return <span ref={ref} className="tabular-nums">{n}{suffix}</span>;
}
