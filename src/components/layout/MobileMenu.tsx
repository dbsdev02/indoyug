import { useEffect, useRef, useState } from 'react';
import { Link, NavLink } from 'react-router-dom';
import { AnimatePresence, motion, useReducedMotion } from 'framer-motion';
import { ChevronDown, Mail, Phone, X } from 'lucide-react';
import { mainNav } from './nav';
import { categories } from '../../data/categories';
import { productsByCategory } from '../../data/products';
import { industries } from '../../data/industries';
import { company } from '../../data/company';
import { cn } from '../../lib/utils';

export function MobileMenu({ open, onClose }: { open: boolean; onClose: () => void }) {
  const closeRef = useRef<HTMLButtonElement>(null);
  const panelRef = useRef<HTMLDivElement>(null);
  const [expanded, setExpanded] = useState<string | null>(null);
  const reduce = useReducedMotion();

  useEffect(() => {
    if (!open) return;
    const prev = document.body.style.overflow;
    document.body.style.overflow = 'hidden';
    const t = window.setTimeout(() => closeRef.current?.focus(), 30);
    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
      if (e.key === 'Tab' && panelRef.current) {
        const f = panelRef.current.querySelectorAll<HTMLElement>('a[href], button:not([disabled])');
        if (!f.length) return;
        const first = f[0], last = f[f.length - 1];
        if (e.shiftKey && document.activeElement === first) { e.preventDefault(); last.focus(); }
        else if (!e.shiftKey && document.activeElement === last) { e.preventDefault(); first.focus(); }
      }
    };
    document.addEventListener('keydown', onKey);
    return () => { document.body.style.overflow = prev; document.removeEventListener('keydown', onKey); window.clearTimeout(t); };
  }, [open, onClose]);

  const linkCls = ({ isActive }: { isActive: boolean }) => cn('block py-3 font-display text-lg font-semibold', isActive ? 'text-brand-700' : 'text-ink');

  return (
    <AnimatePresence>
      {open && (
        <div className="fixed inset-0 z-[60] xl:hidden" id="mobile-menu">
          <motion.div className="absolute inset-0 bg-brand-950/50" onClick={onClose} initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} aria-hidden />
          <motion.div ref={panelRef} role="dialog" aria-modal="true" aria-label="Site menu"
            initial={reduce ? false : { x: '100%' }} animate={{ x: 0 }} exit={reduce ? undefined : { x: '100%' }} transition={{ type: 'tween', duration: 0.22 }}
            className="absolute inset-y-0 right-0 flex w-full max-w-sm flex-col bg-white shadow-lift">
            <div className="flex h-16 items-center justify-between border-b border-surface-line px-5">
              <img src={company.logo} alt="Indoyug Clean Tech LLP" className="h-9 w-auto" />
              <button ref={closeRef} type="button" onClick={onClose} className="rounded p-2 hover:bg-surface" aria-label="Close menu"><X className="h-6 w-6" aria-hidden /></button>
            </div>
            <nav aria-label="Mobile" className="scrollbar-thin flex-1 overflow-y-auto px-5 py-2">
              <ul className="divide-y divide-surface-line">
                {mainNav.map((item) => (
                  <li key={item.href}>
                    {item.menu ? (
                      <>
                        <div className="flex items-center justify-between">
                          <NavLink to={item.href} className={linkCls}>{item.label}</NavLink>
                          <button type="button" className="rounded p-2" aria-expanded={expanded === item.menu} aria-label={`Show ${item.label.toLowerCase()}`} onClick={() => setExpanded((e) => (e === item.menu ? null : item.menu!))}>
                            <ChevronDown className={cn('h-5 w-5 text-steel transition-transform', expanded === item.menu && 'rotate-180')} aria-hidden />
                          </button>
                        </div>
                        {expanded === item.menu && (
                          <ul className="mb-3 space-y-3 border-l-2 border-brand-100 pl-4">
                            {item.menu === 'products'
                              ? categories.map((c) => (
                                  <li key={c.id}>
                                    <Link to={`/products?category=${c.id}`} className="text-[15px] font-semibold text-ink">{c.name}</Link>
                                    <span className="ml-2 font-mono text-[11px] text-steel">{productsByCategory(c.id).length}</span>
                                  </li>
                                ))
                              : industries.map((i) => (
                                  <li key={i.slug}><Link to={`/industries/${i.slug}`} className="text-[15px] font-medium text-ink">{i.name}</Link></li>
                                ))}
                          </ul>
                        )}
                      </>
                    ) : (
                      <NavLink to={item.href} end={item.href === '/'} className={linkCls}>{item.label}</NavLink>
                    )}
                  </li>
                ))}
                <li><NavLink to="/turnkey-projects" className={linkCls}>Turnkey Projects</NavLink></li>
                <li><NavLink to="/quality" className={linkCls}>Quality</NavLink></li>
              </ul>
            </nav>
            <div className="space-y-3 border-t border-surface-line bg-surface p-5">
              <Link to="/request-a-quote" className="btn-primary w-full">Request a Quote</Link>
              {company.phones.map((p) => (
                <a key={p.tel} href={`tel:${p.tel}`} className="flex items-center gap-2 text-[15px] font-semibold text-brand-800"><Phone className="h-4 w-4" aria-hidden />{p.display}</a>
              ))}
              <a href={`mailto:${company.email}`} className="flex items-center gap-2 text-[15px] text-ink-soft"><Mail className="h-4 w-4" aria-hidden />{company.email}</a>
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
}
