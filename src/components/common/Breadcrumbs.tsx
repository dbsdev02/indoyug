import { Link } from 'react-router-dom';
import { ChevronRight } from 'lucide-react';
import { cn } from '../../lib/utils';

export interface Crumb { label: string; href?: string }

export function Breadcrumbs({ items, light = false }: { items: Crumb[]; light?: boolean }) {
  const all = [{ label: 'Home', href: '/' }, ...items];
  return (
    <nav aria-label="Breadcrumb" className="mb-5">
      <ol className={cn('flex flex-wrap items-center gap-1 text-sm', light ? 'text-white/70' : 'text-steel')}>
        {all.map((c, i) => (
          <li key={i} className="flex items-center gap-1">
            {i > 0 && <ChevronRight className="h-3.5 w-3.5 opacity-60" aria-hidden />}
            {c.href && i < all.length - 1 ? (
              <Link to={c.href} className={cn('hover:underline', light ? 'hover:text-white' : 'hover:text-brand-700')}>{c.label}</Link>
            ) : (
              <span aria-current="page" className={cn('font-medium', light ? 'text-white' : 'text-ink')}>{c.label}</span>
            )}
          </li>
        ))}
      </ol>
    </nav>
  );
}

export const breadcrumbJsonLd = (siteUrl: string, items: Crumb[]) => ({
  '@context': 'https://schema.org',
  '@type': 'BreadcrumbList',
  itemListElement: [{ label: 'Home', href: '/' }, ...items].map((c, i) => ({
    '@type': 'ListItem',
    position: i + 1,
    name: c.label,
    ...(c.href ? { item: `${siteUrl}${c.href === '/' ? '' : c.href}` } : {}),
  })),
});
