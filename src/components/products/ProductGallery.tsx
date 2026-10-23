import { useState } from 'react';
import type { ImageAsset } from '../../types';
import { StockImage } from '../common/StockImage';
import { cn } from '../../lib/utils';

export function ProductGallery({ images, name }: { images: ImageAsset[]; name: string }) {
  const [active, setActive] = useState(0);
  if (!images.length) {
    return (
      <div className="ticks aspect-[4/3] border border-surface-line">
        <StockImage label={name} />
      </div>
    );
  }
  const current = images[Math.min(active, images.length - 1)];
  return (
    <div>
      <figure className="ticks relative border border-surface-line bg-gradient-to-b from-surface to-white">
        <img src={current.src} alt={current.alt} className={cn('aspect-[4/3] w-full', current.src.includes('/stock/') ? 'object-cover' : 'object-contain p-4')} />
        {current.caption && <figcaption className="border-t border-surface-line bg-white px-4 py-2 font-mono text-[11px] uppercase tracking-wider text-steel">{current.caption}</figcaption>}
      </figure>
      {images.length > 1 && (
        <ul className="scrollbar-thin mt-3 flex gap-2 overflow-x-auto pb-1" aria-label="Product images">
          {images.map((img, i) => (
            <li key={img.src + i} className="shrink-0">
              <button type="button" onClick={() => setActive(i)} aria-label={`Show image ${i + 1}: ${img.caption ?? img.alt}`} aria-pressed={i === active}
                className={cn('block h-20 w-24 overflow-hidden rounded-sm border-2 bg-surface transition-colors', i === active ? 'border-brand-500' : 'border-transparent hover:border-brand-200')}>
                <img src={img.src} alt="" loading="lazy" className="h-full w-full object-cover" />
              </button>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}
