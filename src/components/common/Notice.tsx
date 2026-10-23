import type { ReactNode } from 'react';
import { Info, AlertTriangle } from 'lucide-react';
import { cn } from '../../lib/utils';

/** Editorial notice. tone="pending" marks content awaiting company input. */
export function Notice({ tone = 'info', title, children, className }: { tone?: 'info' | 'pending'; title?: string; children: ReactNode; className?: string }) {
  const Icon = tone === 'pending' ? AlertTriangle : Info;
  return (
    <div role="note" className={cn('flex gap-3 rounded border-l-4 p-4 text-sm', tone === 'pending' ? 'border-amber-500 bg-amber-50 text-amber-950' : 'border-brand-500 bg-brand-50 text-brand-900', className)}>
      <Icon className={cn('mt-0.5 h-4 w-4 shrink-0', tone === 'pending' ? 'text-amber-600' : 'text-brand-500')} aria-hidden />
      <div>{title && <p className="mb-0.5 font-semibold">{title}</p>}<div className="leading-relaxed">{children}</div></div>
    </div>
  );
}

/**
 * Internal note for the Indoyug team about missing content. Visible while the
 * site is under review; hide at launch with VITE_SHOW_EDITOR_NOTES=false.
 */
export const showEditorNotes = (import.meta.env.VITE_SHOW_EDITOR_NOTES as string | undefined) !== 'false';

export function EditorNote({ children, className }: { children: ReactNode; className?: string }) {
  if (!showEditorNotes) return null;
  return (
    <Notice tone="pending" title="Content pending (editor note)" className={className}>
      {children}
    </Notice>
  );
}
