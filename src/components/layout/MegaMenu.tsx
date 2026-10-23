import { Link } from 'react-router-dom';
import { ArrowRight, Download } from 'lucide-react';
import { categories } from '../../data/categories';
import { productsByCategory } from '../../data/products';
import { industries } from '../../data/industries';
import { company } from '../../data/company';

export function ProductsMegaMenu({ id, onNavigate }: { id: string; onNavigate: () => void }) {
  return (
    <div id={id} className="border-t border-surface-line bg-white shadow-lift">
      <div className="container grid grid-cols-12 gap-8 py-8">
        <div className="col-span-9 grid grid-cols-3 gap-x-8 gap-y-7">
          {categories.map((c, i) => (
            <div key={c.id}>
              <Link to={`/products?category=${c.id}`} onClick={onNavigate} className="group mb-2.5 flex items-baseline gap-2 font-display text-[15px] font-bold text-ink hover:text-brand-700">
                <span className="font-mono text-[10px] font-medium text-brand-500">{String(i + 1).padStart(2, '0')}</span>
                {c.name}
              </Link>
              <ul className="space-y-1.5 border-l border-surface-line pl-4">
                {productsByCategory(c.id).slice(0, 6).map((p) => (
                  <li key={p.slug}>
                    <Link to={`/products/${p.slug}`} onClick={onNavigate} className="text-[14px] text-ink-soft hover:text-brand-700">{p.name}</Link>
                  </li>
                ))}
                {productsByCategory(c.id).length > 6 && (
                  <li><Link to={`/products?category=${c.id}`} onClick={onNavigate} className="text-[13px] font-semibold text-brand-700 hover:underline">+ {productsByCategory(c.id).length - 6} more</Link></li>
                )}
              </ul>
            </div>
          ))}
        </div>
        <div className="col-span-3 flex flex-col justify-between rounded bg-brand-900 p-6 text-white">
          <div>
            <p className="eyebrow text-teal-400">Full catalogue</p>
            <p className="mt-2 font-display text-lg font-bold">Every product, with specifications from our brochure.</p>
          </div>
          <div className="mt-6 space-y-3">
            <Link to="/products" onClick={onNavigate} className="btn-white w-full justify-between">View all products <ArrowRight className="h-4 w-4" aria-hidden /></Link>
            <a href={company.brochureUrl} target="_blank" rel="noopener" className="flex items-center gap-2 text-sm text-white/80 hover:text-white"><Download className="h-4 w-4" aria-hidden /> Company brochure (PDF, 1.9 MB)</a>
          </div>
        </div>
      </div>
    </div>
  );
}

export function IndustriesMenu({ id, onNavigate }: { id: string; onNavigate: () => void }) {
  return (
    <div id={id} className="border-t border-surface-line bg-white shadow-lift">
      <div className="container grid grid-cols-4 gap-4 py-7">
        {industries.map((ind) => (
          <Link key={ind.slug} to={`/industries/${ind.slug}`} onClick={onNavigate} className="group flex items-center gap-3 rounded p-2 hover:bg-surface">
            {ind.image && <img src={ind.image.src} alt="" className="h-12 w-12 shrink-0 rounded-sm object-cover" loading="lazy" />}
            <span className="text-[14.5px] font-semibold text-ink group-hover:text-brand-700">{ind.name}</span>
          </Link>
        ))}
        <Link to="/industries" onClick={onNavigate} className="flex items-center gap-2 p-2 text-sm font-semibold text-brand-700 hover:underline">All industries <ArrowRight className="h-4 w-4" aria-hidden /></Link>
      </div>
    </div>
  );
}
