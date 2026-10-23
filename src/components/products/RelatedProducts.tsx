import { getProduct } from '../../data/products';
import { ProductCard } from '../common/ProductCard';
import type { Product } from '../../types';

export function RelatedProducts({ slugs, title = 'Related products' }: { slugs: string[]; title?: string }) {
  const items = slugs.map(getProduct).filter((p): p is Product => Boolean(p));
  if (!items.length) return null;
  return (
    <section aria-labelledby="related-heading">
      <h2 id="related-heading" className="mb-6 text-2xl font-bold md:text-3xl">{title}</h2>
      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">{items.slice(0, 3).map((p) => <ProductCard key={p.slug} product={p} />)}</div>
    </section>
  );
}
