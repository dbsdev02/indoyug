import { Link } from 'react-router-dom';
import { ClipboardList } from 'lucide-react';
import type { Product } from '../../types';

export function ProductSpecifications({ product }: { product: Product }) {
  if (!product.specifications.length) {
    return (
      <div className="flex flex-col items-start gap-4 rounded border border-dashed border-brand-200 bg-surface p-6 sm:flex-row sm:items-center">
        <ClipboardList className="h-8 w-8 shrink-0 text-brand-500" aria-hidden />
        <div className="flex-1">
          <p className="font-display text-lg font-bold">Specifications available on request</p>
          <p className="mt-1 text-[15px] text-ink-soft">Dimensions, materials and performance data for the {product.name.toLowerCase()} are configured per project. Tell us your requirement and we will share a detailed specification.</p>
        </div>
        <Link to={`/request-a-quote?product=${product.slug}`} className="btn-outline shrink-0 text-sm">Request specifications</Link>
      </div>
    );
  }
  return (
    <div className="overflow-hidden rounded border border-surface-line">
      <table className="w-full text-left text-[15px]">
        <caption className="sr-only">{product.name} technical specifications</caption>
        <tbody>
          {product.specifications.map((s, i) => (
            <tr key={s.label} className={i % 2 ? 'bg-white' : 'bg-surface/60'}>
              <th scope="row" className="block w-full px-4 pb-0 pt-3 align-top font-mono text-[12px] font-medium uppercase tracking-wider text-steel sm:table-cell sm:w-[38%] sm:py-3.5">{s.label}</th>
              <td className="block px-4 pb-3 pt-1 font-medium text-ink sm:table-cell sm:py-3.5">{s.value}</td>
            </tr>
          ))}
        </tbody>
      </table>
      <p className="border-t border-surface-line bg-white px-4 py-2.5 text-xs text-steel">Source: Indoyug product brochure. Standard values — custom configurations available on request.</p>
    </div>
  );
}
