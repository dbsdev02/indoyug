import { cn } from '../../lib/utils';

export const STOCK_FALLBACK = '/assets/stock/cleanroom-facility.webp';

/** Representative stock photograph, used wherever no company photograph exists. */
export function StockImage({ label, src = STOCK_FALLBACK, className }: { label: string; src?: string; className?: string }) {
  return <img src={src} alt={label} loading="lazy" decoding="async" className={cn('h-full w-full object-cover', className)} />;
}
