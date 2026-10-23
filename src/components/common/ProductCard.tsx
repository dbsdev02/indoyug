import { Link } from 'react-router-dom';
import { ArrowRight, FileText } from 'lucide-react';
import type { Product } from '../../types';
import { getCategory } from '../../data/categories';
import { ProductImage } from './ProductImage';

export function ProductCard({ product, headingLevel: H = 'h3' }: { product: Product; headingLevel?: 'h2' | 'h3' }) {
  const cat = getCategory(product.category);
  return (
    <article className="group card relative flex h-full flex-col overflow-hidden transition-shadow duration-200 hover:shadow-lift">
      <Link to={`/products/${product.slug}`} tabIndex={-1} aria-hidden className="block">
        <ProductImage image={product.image} name={product.name} className="aspect-[4/3] border-b border-surface-line" fit={product.image?.src.includes('/products/') ? 'contain' : 'cover'} />
      </Link>
      <div className="flex flex-1 flex-col p-5">
        <div className="mb-2 flex items-center justify-between gap-2">
          <p className="font-mono text-[10.5px] uppercase tracking-[0.14em] text-brand-500">{cat?.shortName}</p>
          {product.datasheetUrl && (
            <span className="inline-flex items-center gap-1 font-mono text-[10px] uppercase tracking-wider text-steel" title="Product sheet available">
              <FileText className="h-3 w-3" aria-hidden /> Sheet
            </span>
          )}
        </div>
        <H className="text-lg font-bold">
          <Link to={`/products/${product.slug}`} className="after:absolute after:inset-0 hover:text-brand-700 focus:outline-none">
            <span className="relative">{product.name}</span>
          </Link>
        </H>
        <p className="mt-2 line-clamp-3 flex-1 text-[15px] leading-relaxed text-ink-soft">{product.shortDescription}</p>
        <div className="relative z-10 mt-5 flex items-center gap-4 border-t border-surface-line pt-4 text-sm font-semibold">
          <Link to={`/products/${product.slug}`} className="inline-flex items-center gap-1.5 text-brand-700 hover:text-brand-900">
            View details <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5" aria-hidden />
          </Link>
          <Link to={`/request-a-quote?product=${product.slug}`} className="ml-auto text-steel hover:text-brand-700" aria-label={`Request a quote for ${product.name}`}>
            Request a quote
          </Link>
        </div>
      </div>
    </article>
  );
}
