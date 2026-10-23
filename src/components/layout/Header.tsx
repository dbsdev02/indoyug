import { useEffect, useRef, useState } from 'react';
import { Link, NavLink, useLocation } from 'react-router-dom';
import { AnimatePresence, motion, useReducedMotion } from 'framer-motion';
import { ChevronDown, Mail, Menu, Phone, Search, FileDown } from 'lucide-react';
import { company } from '../../data/company';
import { mainNav } from './nav';
import { IndustriesMenu, ProductsMegaMenu } from './MegaMenu';
import { MobileMenu } from './MobileMenu';
import { cn } from '../../lib/utils';

type MenuKey = 'products' | 'industries' | null;

export function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState<MenuKey>(null);
  const [mobileOpen, setMobileOpen] = useState(false);
  const closeTimer = useRef<number>();
  const hoverOpenedAt = useRef(0);
  const headerRef = useRef<HTMLElement>(null);
  const { pathname, search } = useLocation();
  const reduce = useReducedMotion();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  // Close menus on navigation
  useEffect(() => { setOpen(null); setMobileOpen(false); }, [pathname, search]);

  // Escape and outside click close the desktop menu
  useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        const trigger = document.getElementById(`nav-trigger-${open}`);
        setOpen(null);
        trigger?.focus();
      }
    };
    const onClick = (e: MouseEvent) => { if (!headerRef.current?.contains(e.target as Node)) setOpen(null); };
    document.addEventListener('keydown', onKey);
    document.addEventListener('mousedown', onClick);
    return () => { document.removeEventListener('keydown', onKey); document.removeEventListener('mousedown', onClick); };
  }, [open]);

  const enter = (m: MenuKey) => {
    window.clearTimeout(closeTimer.current);
    setOpen((o) => { if (o !== m) hoverOpenedAt.current = Date.now(); return m; });
  };
  // A click right after hover-open (same gesture) keeps the menu open instead of toggling it shut.
  const toggle = (m: MenuKey) => setOpen((o) => (o === m && Date.now() - hoverOpenedAt.current > 400 ? null : m));
  const leave = () => { closeTimer.current = window.setTimeout(() => setOpen(null), 160); };

  const isActive = (href: string) => (href === '/' ? pathname === '/' : pathname === href || pathname.startsWith(`${href}/`));

  return (
    <>
      <a href="#main" className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-[100] focus:rounded focus:bg-white focus:px-4 focus:py-2 focus:font-semibold focus:text-brand-800 focus:shadow-lift">Skip to content</a>

      {/* Utility bar */}
      <div className="hidden bg-brand-950 text-[13px] text-white/75 md:block">
        <div className="container flex h-9 items-center justify-between">
          <p className="font-mono text-[11px] uppercase tracking-[0.16em] text-white/55">Cleanroom · Laboratory · HVAC — Umbergaon, Gujarat</p>
          <div className="flex items-center gap-5">
            {company.phones.map((p) => (
              <a key={p.tel} href={`tel:${p.tel}`} className="flex items-center gap-1.5 hover:text-white"><Phone className="h-3.5 w-3.5" aria-hidden />{p.display}</a>
            ))}
            <a href={`mailto:${company.email}`} className="flex items-center gap-1.5 hover:text-white"><Mail className="h-3.5 w-3.5" aria-hidden />{company.email}</a>
            <a href={company.brochureUrl} target="_blank" rel="noopener" className="flex items-center gap-1.5 hover:text-white"><FileDown className="h-3.5 w-3.5" aria-hidden />Brochure</a>
          </div>
        </div>
      </div>

      <header ref={headerRef} className={cn('sticky top-0 z-50 bg-white transition-shadow duration-200', scrolled || open ? 'shadow-[0_1px_0_#DCE4EC,0_8px_24px_-16px_rgba(8,42,82,.25)]' : 'border-b border-surface-line')}>
        <div className={cn('container flex items-center gap-6 transition-[height] duration-200', scrolled ? 'h-16' : 'h-[76px]')}>
          <Link to="/" className="shrink-0" aria-label="Indoyug Clean Tech LLP — home">
            <img src={company.logo} alt="Indoyug Clean Tech LLP" width={551} height={193} className={cn('w-auto transition-[height] duration-200', scrolled ? 'h-10' : 'h-12')} />
          </Link>

          <nav aria-label="Main" className="ml-auto hidden xl:block">
            <ul className="flex items-center">
              {mainNav.map((item) =>
                item.menu ? (
                  <li key={item.href} onMouseEnter={() => enter(item.menu!)} onMouseLeave={leave} className="relative">
                    <div className="flex items-center">
                      <NavLink to={item.href} className={cn('relative px-3 py-2 text-[14.5px] font-semibold hover:text-brand-700', isActive(item.href) ? 'text-brand-700' : 'text-ink')}>
                        {item.label}
                        {isActive(item.href) && <span className="absolute inset-x-3 -bottom-[13px] h-0.5 bg-brand-500" aria-hidden />}
                      </NavLink>
                      <button id={`nav-trigger-${item.menu}`} type="button" aria-expanded={open === item.menu} aria-controls={`menu-${item.menu}`} aria-label={`${item.label} menu`}
                        onClick={() => toggle(item.menu!)} className="-ml-2.5 rounded p-1 text-steel hover:text-brand-700">
                        <ChevronDown className={cn('h-4 w-4 transition-transform', open === item.menu && 'rotate-180')} aria-hidden />
                      </button>
                    </div>
                  </li>
                ) : (
                  <li key={item.href}>
                    <NavLink to={item.href} end={item.href === '/'} className={cn('relative block px-3 py-2 text-[14.5px] font-semibold hover:text-brand-700', isActive(item.href) ? 'text-brand-700' : 'text-ink')}>
                      {item.label}
                      {isActive(item.href) && <span className="absolute inset-x-3 -bottom-[13px] h-0.5 bg-brand-500" aria-hidden />}
                    </NavLink>
                  </li>
                ),
              )}
            </ul>
          </nav>

          <div className="ml-auto flex items-center gap-2 xl:ml-2">
            <Link to="/search" className="rounded p-2 text-ink hover:bg-surface hover:text-brand-700" aria-label="Search the website"><Search className="h-5 w-5" aria-hidden /></Link>
            <a href={`tel:${company.phones[0].tel}`} className="rounded p-2 text-ink hover:bg-surface md:hidden" aria-label={`Call ${company.phones[0].display}`}><Phone className="h-5 w-5" aria-hidden /></a>
            <Link to="/request-a-quote" className="btn-primary hidden px-4 py-2.5 text-sm sm:inline-flex">Request a Quote</Link>
            <button type="button" className="rounded p-2 text-ink hover:bg-surface xl:hidden" aria-label="Open menu" aria-expanded={mobileOpen} aria-controls="mobile-menu" onClick={() => setMobileOpen(true)}>
              <Menu className="h-6 w-6" aria-hidden />
            </button>
          </div>
        </div>

        <AnimatePresence>
          {open && (
            <motion.div key={open} onMouseEnter={() => enter(open)} onMouseLeave={leave}
              initial={reduce ? false : { opacity: 0, y: -6 }} animate={{ opacity: 1, y: 0 }} exit={reduce ? undefined : { opacity: 0, y: -6 }} transition={{ duration: 0.16 }}
              className="absolute inset-x-0 top-full hidden xl:block">
              {open === 'products' ? <ProductsMegaMenu id="menu-products" onNavigate={() => setOpen(null)} /> : <IndustriesMenu id="menu-industries" onNavigate={() => setOpen(null)} />}
            </motion.div>
          )}
        </AnimatePresence>
      </header>

      <MobileMenu open={mobileOpen} onClose={() => setMobileOpen(false)} />
    </>
  );
}
