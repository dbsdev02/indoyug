import { useMemo, useState } from 'react';
import { Link, useSearchParams } from 'react-router-dom';
import { Search, SearchX, X } from 'lucide-react';
import { SEO } from '../components/common/SEO';
import { PageHero } from '../components/common/PageHero';
import { ProductCard } from '../components/common/ProductCard';
import { breadcrumbJsonLd } from '../components/common/Breadcrumbs';
import { CTASection } from '../components/common/CTASection';
import { categories, getCategory } from '../data/categories';
import { products } from '../data/products';
import { company } from '../data/company';
import { cn } from '../lib/utils';

const PAGE = 12;

export default function Products() {
  const [params, setParams] = useSearchParams();
  const activeCat = params.get('category') ?? '';
  const query = params.get('q') ?? '';
  const [visible, setVisible] = useState(PAGE);
  const cat = getCategory(activeCat);

  const update = (key: 'category' | 'q', value: string) => {
    const next = new URLSearchParams(params);
    if (value) next.set(key, value); else next.delete(key);
    setParams(next, { replace: key === 'q' });
    setVisible(PAGE);
  };

  const filtered = useMemo(() => {
    const terms = query.toLowerCase().split(/\s+/).filter(Boolean);
    return products.filter((p) => {
      if (activeCat && p.category !== activeCat) return false;
      if (!terms.length) return true;
      const hay = [p.name, p.shortDescription, ...(p.keywords ?? []), ...(p.variants ?? []).map((v) => v.name), getCategory(p.category)?.name].join(' ').toLowerCase();
      return terms.every((t) => hay.includes(t));
    });
  }, [activeCat, query]);

  const crumbs = cat ? [{ label: 'Products', href: '/products' }, { label: cat.name }] : [{ label: 'Products' }];
  const title = cat ? cat.name : 'Cleanroom Equipment & Laboratory Furniture Products';

  return (
    <>
      <SEO
        title={cat ? `${cat.name} | Products` : 'Products — Cleanroom Equipment, Lab Furniture & SS Furniture'}
        description={cat ? `${cat.description} Manufactured by Indoyug Clean Tech LLP, Umbergaon, Gujarat.` : 'Browse the Indoyug catalogue: air showers, mist showers, pass boxes, cleanroom doors, LAF units, biosafety cabinets, fume hoods, laboratory furniture and SS modular furniture.'}
        path={cat ? `/products?category=${cat.id}` : '/products'}
        noindex={Boolean(query)}
        jsonLd={breadcrumbJsonLd(company.siteUrl, crumbs)}
      />
      <PageHero crumbs={crumbs} eyebrow={`${products.length} products · 6 families`} title={title}
        intro={cat ? cat.description : 'Search and filter the complete Indoyug range. Request pricing for any product — every quote is configured to your requirement.'} />

      <section className="py-12 md:py-16">
        <div className="container">
          {/* Filters */}
          <div className="sticky top-16 z-30 -mx-4 mb-8 border-b border-surface-line bg-white/95 px-4 pb-4 pt-3 backdrop-blur sm:mx-0 sm:px-0">
            <div className="flex flex-col gap-4 lg:flex-row lg:items-center">
              <div className="relative lg:w-80">
                <label htmlFor="product-search" className="sr-only">Search products</label>
                <Search className="pointer-events-none absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-steel" aria-hidden />
                <input id="product-search" type="search" value={query} onChange={(e) => update('q', e.target.value)} placeholder="Search products, e.g. pass box" className="field pl-9" />
              </div>
              <div role="group" aria-label="Filter by category" className="scrollbar-thin -mx-1 flex gap-2 overflow-x-auto px-1 pb-1 lg:flex-wrap lg:overflow-visible">
                <button type="button" onClick={() => update('category', '')} aria-pressed={!activeCat}
                  className={cn('shrink-0 rounded-full border px-4 py-2 text-sm font-semibold transition-colors', !activeCat ? 'border-brand-700 bg-brand-700 text-white' : 'border-surface-line text-ink hover:border-brand-500')}>
                  All <span className="ml-1 font-mono text-xs opacity-70">{products.length}</span>
                </button>
                {categories.map((c) => {
                  const n = products.filter((p) => p.category === c.id).length;
                  const on = activeCat === c.id;
                  return (
                    <button key={c.id} type="button" onClick={() => update('category', on ? '' : c.id)} aria-pressed={on}
                      className={cn('shrink-0 rounded-full border px-4 py-2 text-sm font-semibold transition-colors', on ? 'border-brand-700 bg-brand-700 text-white' : 'border-surface-line text-ink hover:border-brand-500')}>
                      {c.shortName} <span className="ml-1 font-mono text-xs opacity-70">{n}</span>
                    </button>
                  );
                })}
              </div>
            </div>
          </div>

          <p className="mb-6 text-sm text-steel" aria-live="polite">
            Showing {Math.min(visible, filtered.length)} of {filtered.length} {filtered.length === 1 ? 'product' : 'products'}
            {query && <> for “<span className="font-semibold text-ink">{query}</span>”</>}
            {cat && <> in <span className="font-semibold text-ink">{cat.name}</span></>}
          </p>

          {filtered.length ? (
            <>
              <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
                {filtered.slice(0, visible).map((p) => <ProductCard key={p.slug} product={p} headingLevel="h2" />)}
              </div>
              {visible < filtered.length && (
                <div className="mt-10 text-center">
                  <button type="button" onClick={() => setVisible((v) => v + PAGE)} className="btn-outline">Load more products ({filtered.length - visible} remaining)</button>
                </div>
              )}
            </>
          ) : (
            <div className="rounded border border-dashed border-surface-line bg-surface px-6 py-16 text-center">
              <SearchX className="mx-auto h-10 w-10 text-brand-500" aria-hidden />
              <h2 className="mt-4 text-2xl font-bold">No products match your search</h2>
              <p className="mx-auto mt-2 max-w-md text-ink-soft">Try a different term, clear the filters, or tell us what you need — we build many products to custom specifications.</p>
              <div className="mt-6 flex flex-wrap justify-center gap-3">
                <button type="button" className="btn-outline" onClick={() => setParams(new URLSearchParams())}><X className="h-4 w-4" aria-hidden /> Clear filters</button>
                <Link to="/request-a-quote" className="btn-primary">Describe your requirement</Link>
              </div>
            </div>
          )}

          <p className="mt-12 text-sm text-steel">Prices are not listed online — Indoyug equipment is configured per project. <Link to="/request-a-quote" className="link">Request a quotation</Link>.</p>
        </div>
      </section>
      <CTASection title="Can’t find exactly what you need?" text="Most Indoyug products are available in custom sizes and configurations. Send us your drawings or specification." />
    </>
  );
}
