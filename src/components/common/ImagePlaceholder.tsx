import { ImageOff } from 'lucide-react';
import { cn } from '../../lib/utils';

/**
 * Clearly labelled stand-in for a photograph the company has not yet supplied.
 * Never replace this with stock imagery of another manufacturer's product.
 */
export function ImagePlaceholder({ label, className, compact = false }: { label: string; className?: string; compact?: boolean }) {
  return (
    <div role="img" aria-label={`Photograph pending: ${label}`} className={cn('bg-blueprint flex h-full w-full flex-col items-center justify-center gap-2 bg-surface p-4 text-center', className)}>
      <ImageOff className="h-6 w-6 text-brand-500/60" aria-hidden />
      <span className="font-display text-sm font-semibold text-brand-800">{label}</span>
      {!compact && <span className="font-mono text-[10px] uppercase tracking-widest text-steel">Photograph to be supplied</span>}
    </div>
  );
}
