import type { ImageAsset } from '../../types';
import { ImagePlaceholder } from './ImagePlaceholder';
import { cn } from '../../lib/utils';

/** Product image on a light "studio" ground, or a labelled placeholder. */
export function ProductImage({ image, name, className, fit = 'contain', eager = false }: { image?: ImageAsset; name: string; className?: string; fit?: 'contain' | 'cover'; eager?: boolean }) {
  return (
    <div className={cn('relative overflow-hidden bg-gradient-to-b from-surface to-white', className)}>
      {image ? (
        <img src={image.src} alt={image.alt} loading={eager ? 'eager' : 'lazy'} decoding="async" className={cn('h-full w-full', fit === 'contain' ? 'object-contain p-3' : 'object-cover')} />
      ) : (
        <ImagePlaceholder label={name} compact />
      )}
    </div>
  );
}
