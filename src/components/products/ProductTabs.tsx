import { useEffect, useRef, useState, type KeyboardEvent, type ReactNode } from 'react';
import { Link } from 'react-router-dom';
import { Layers, ShieldCheck } from 'lucide-react';
import type { ImageAsset, Product } from '../../types';
import { ProductSpecifications } from './ProductSpecifications';
import { StockImage } from '../common/StockImage';
import { getIndustry } from '../../data/industries';
import { applicationImage } from '../../data/applicationImages';
import type { DatasheetMedia } from '../../data/datasheetMedia';
import { cn } from '../../lib/utils';

type TabId = 'overview' | 'features' | 'specifications' | 'dimensions' | 'airflow' | 'applications';

function Diagrams({ images }: { images: ImageAsset[] }) {
  return (
    <ul className={cn('grid gap-5', images.length > 1 && 'md:grid-cols-2')}>
      {images.map((d) => (
        <li key={d.src} className="card overflow-hidden">
          <a href={d.src} target="_blank" rel="noopener" className="block cursor-zoom-in bg-white p-4" aria-label={`Open full-size: ${d.alt}`}>
            <img src={d.src} alt={d.alt} loading="lazy" className="mx-auto max-h-[460px] w-full object-contain" />
          </a>
          {d.caption && <p className="border-t border-surface-line bg-surface px-4 py-2.5 font-mono text-[11px] uppercase tracking-wider text-steel">{d.caption}</p>}
        </li>
      ))}
    </ul>
  );
}

export function ProductTabs({ product, media, aside }: { product: Product; media?: DatasheetMedia; aside?: ReactNode }) {
  const industries = product.industries.map(getIndustry).filter(Boolean);

  const tabs: { id: TabId; label: string; content: ReactNode }[] = [
    {
      id: 'overview',
      label: 'Product Overview',
      content: (
        <div className="space-y-10">
          <div className="prose-body max-w-prose">{product.description.map((p, i) => <p key={i}>{p}</p>)}</div>
          {product.variants?.length ? (
            <div>
              <h3 className="mb-4 text-xl font-bold">Available variants</h3>
              <ul className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
                {product.variants.map((v) => (
                  <li key={v.name} className="card overflow-hidden">
                    {product.variants!.some((x) => x.image) && (
                      <div className="aspect-[4/3] bg-surface">{v.image ? <img src={v.image} alt={v.name} loading="lazy" className="h-full w-full object-contain p-2" /> : <StockImage label={v.name} />}</div>
                    )}
                    <div className="p-4"><h4 className="font-bold">{v.name}</h4>{v.description && <p className="mt-1 text-sm text-ink-soft">{v.description}</p>}</div>
                  </li>
                ))}
              </ul>
            </div>
          ) : null}
          {(product.materials || product.filtration) && (
            <dl className="grid gap-4 sm:grid-cols-2">
              {product.materials && <div className="card p-5"><dt className="flex items-center gap-2 font-mono text-[11px] uppercase tracking-wider text-steel"><Layers className="h-4 w-4 text-brand-500" aria-hidden />Construction materials</dt><dd className="mt-2 font-medium">{product.materials}</dd></div>}
              {product.filtration && <div className="card p-5"><dt className="flex items-center gap-2 font-mono text-[11px] uppercase tracking-wider text-steel"><ShieldCheck className="h-4 w-4 text-brand-500" aria-hidden />Filtration</dt><dd className="mt-2 font-medium">{product.filtration}</dd></div>}
            </dl>
          )}
          <div>
            <h3 className="mb-2 text-xl font-bold">Installation &amp; maintenance</h3>
            <p className="max-w-prose text-[16px] leading-relaxed text-ink-soft">Installation, validation and after-sales support are offered as part of Indoyug project scope. Product-specific installation and maintenance guidance is supplied with the equipment — <Link to={`/request-a-quote?product=${product.slug}`} className="link">request it for your model</Link>.</p>
          </div>
        </div>
      ),
    },
    {
      id: 'features',
      label: 'Key Features',
      content: (
        <ul className="grid gap-px overflow-hidden rounded border border-surface-line bg-surface-line sm:grid-cols-2">
          {product.features.map((f, i) => (
            <li key={f.title} className="bg-white p-5">
              <span className="font-mono text-xs text-brand-500">{String(i + 1).padStart(2, '0')}</span>
              <h3 className="mt-1.5 text-[17px] font-bold">{f.title}</h3>
              {f.text && <p className="mt-1 text-[15px] leading-relaxed text-ink-soft">{f.text}</p>}
            </li>
          ))}
        </ul>
      ),
    },
    {
      id: 'specifications',
      label: 'Technical Data Sheet',
      content: (
        <>
          <ProductSpecifications product={product} />
          {product.options?.length ? (
            <div className="mt-8">
              <h3 className="mb-3 text-xl font-bold">Options &amp; customisation</h3>
              <ul className="flex flex-wrap gap-2">{product.options.map((o) => <li key={o} className="rounded-full border border-brand-100 bg-brand-50 px-3.5 py-1.5 text-sm font-medium text-brand-900">{o}</li>)}</ul>
            </div>
          ) : null}
        </>
      ),
    },
    ...(media?.dimensions.length ? [{ id: 'dimensions' as const, label: 'Standard Dimensions', content: <Diagrams images={media.dimensions} /> }] : []),
    ...(media?.airflow.length ? [{ id: 'airflow' as const, label: 'Airflow Diagram', content: <Diagrams images={media.airflow} /> }] : []),
    {
      id: 'applications',
      label: 'Applications',
      content: (
        <>
          <ul className="grid grid-cols-2 gap-4 md:grid-cols-3 lg:grid-cols-4">
            {product.applications.map((a) => (
              <li key={a} className="card lift overflow-hidden">
                <div className="aspect-[4/3] overflow-hidden bg-surface"><img src={applicationImage(a)} alt="" loading="lazy" className="h-full w-full object-cover" /></div>
                <p className="flex items-center gap-2 px-3.5 py-3 text-[15px] font-semibold"><span className="h-1.5 w-1.5 shrink-0 rounded-full bg-brand-500" aria-hidden />{a}</p>
              </li>
            ))}
          </ul>
          {industries.length > 0 && (
            <div className="mt-8">
              <p className="mb-2 font-mono text-[11px] uppercase tracking-wider text-steel">Industries</p>
              <ul className="flex flex-wrap gap-2">{industries.map((i) => <li key={i!.slug}><Link to={`/industries/${i!.slug}`} className="inline-block rounded-full border border-surface-line px-3.5 py-1.5 text-sm font-semibold hover:border-brand-500 hover:text-brand-700">{i!.name}</Link></li>)}</ul>
            </div>
          )}
        </>
      ),
    },
  ];

  const [active, setActive] = useState<TabId>('overview');
  const barRef = useRef<HTMLDivElement>(null);
  const tabRefs = useRef<Record<string, HTMLButtonElement | null>>({});

  // Deep links: /products/x#specifications opens that tab.
  useEffect(() => {
    const read = () => {
      const id = window.location.hash.slice(1);
      if (!tabs.some((t) => t.id === id)) return;
      setActive(id as TabId);
      barRef.current?.scrollIntoView({ block: 'start' });
    };
    read();
    window.addEventListener('hashchange', read);
    return () => window.removeEventListener('hashchange', read);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [product.slug]);

  const select = (id: TabId, focus = false) => {
    setActive(id);
    history.replaceState(null, '', `#${id}`);
    if (focus) tabRefs.current[id]?.focus();
    const bar = barRef.current;
    if (bar && bar.getBoundingClientRect().top < 64) bar.scrollIntoView({ block: 'start' });
  };

  const onKey = (e: KeyboardEvent) => {
    const i = tabs.findIndex((t) => t.id === active);
    const next = e.key === 'ArrowRight' ? i + 1 : e.key === 'ArrowLeft' ? i - 1 : e.key === 'Home' ? 0 : e.key === 'End' ? tabs.length - 1 : null;
    if (next === null) return;
    e.preventDefault();
    select(tabs[(next + tabs.length) % tabs.length].id, true);
  };

  return (
    <>
      <div ref={barRef} className="sticky top-16 z-30 scroll-mt-16 border-b border-surface-line bg-white/95 backdrop-blur">
        <div role="tablist" aria-label={`${product.name} information`} onKeyDown={onKey} className="container scrollbar-thin flex gap-1 overflow-x-auto">
          {tabs.map((t) => (
            <button key={t.id} ref={(el) => { tabRefs.current[t.id] = el; }} type="button" role="tab" id={`tab-${t.id}`} aria-controls={`panel-${t.id}`} aria-selected={active === t.id} tabIndex={active === t.id ? 0 : -1}
              onClick={() => select(t.id)}
              className={cn('shrink-0 border-b-2 px-3.5 py-3.5 text-sm font-semibold transition-colors', active === t.id ? 'border-brand-500 text-brand-700' : 'border-transparent text-ink-soft hover:border-brand-200 hover:text-brand-700')}>
              {t.label}
            </button>
          ))}
        </div>
      </div>
      <div className="container grid gap-14 py-10 lg:grid-cols-12">
        <div className="min-w-0 lg:col-span-8">
          {/* All panels stay in the prerendered HTML; inactive ones are hidden. */}
          {tabs.map((t) => (
            <section key={t.id} role="tabpanel" id={`panel-${t.id}`} aria-labelledby={`tab-${t.id}`} hidden={active !== t.id} tabIndex={0} className="focus:outline-none">
              <h2 className="mb-6 text-2xl font-bold md:text-3xl">{t.label}</h2>
              {t.content}
            </section>
          ))}
        </div>
        {aside}
      </div>
    </>
  );
}
