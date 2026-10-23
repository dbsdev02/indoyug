import { useId, useState, type ReactNode } from 'react';
import { AnimatePresence, motion, useReducedMotion } from 'framer-motion';
import { Plus } from 'lucide-react';
import { cn } from '../../lib/utils';

export function AccordionItem({ question, children, defaultOpen = false }: { question: ReactNode; children: ReactNode; defaultOpen?: boolean }) {
  const [open, setOpen] = useState(defaultOpen);
  const id = useId();
  const reduce = useReducedMotion();
  return (
    <div className="border-b border-surface-line">
      <h3 className="text-base">
        <button type="button" aria-expanded={open} aria-controls={`${id}-panel`} id={`${id}-btn`} onClick={() => setOpen((o) => !o)}
          className="flex w-full items-start justify-between gap-6 py-5 text-left font-display text-[17px] font-semibold text-ink hover:text-brand-700">
          <span>{question}</span>
          <Plus className={cn('mt-1 h-5 w-5 shrink-0 text-brand-500 transition-transform duration-200', open && 'rotate-45')} aria-hidden />
        </button>
      </h3>
      <AnimatePresence initial={false}>
        {open && (
          <motion.div id={`${id}-panel`} role="region" aria-labelledby={`${id}-btn`}
            initial={reduce ? false : { height: 0, opacity: 0 }} animate={{ height: 'auto', opacity: 1 }} exit={reduce ? undefined : { height: 0, opacity: 0 }}
            transition={{ duration: 0.22, ease: 'easeOut' }} className="overflow-hidden">
            <div className="pb-5 pr-10 text-[15.5px] leading-relaxed text-ink-soft">{children}</div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
