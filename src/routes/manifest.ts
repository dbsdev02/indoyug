/** All concrete, indexable URLs — used by the sitemap and the prerenderer. */
import { products } from '../data/products';
import { industries } from '../data/industries';
import { projects } from '../data/projects';
import { articles } from '../data/articles';

export interface ManifestEntry { path: string; priority: number; changefreq: 'weekly' | 'monthly' | 'yearly'; index: boolean }

export function getManifest(): ManifestEntry[] {
  const s = (path: string, priority: number, changefreq: ManifestEntry['changefreq'] = 'monthly', index = true): ManifestEntry => ({ path, priority, changefreq, index });
  return [
    s('/', 1.0, 'weekly'),
    s('/products', 0.9, 'weekly'),
    ...products.map((p) => s(`/products/${p.slug}`, p.source === 'brochure-detailed' ? 0.8 : 0.6)),
    s('/industries', 0.8),
    ...industries.filter((i) => i.hasDetailPage).map((i) => s(`/industries/${i.slug}`, 0.7)),
    s('/about-us', 0.7),
    s('/manufacturing', 0.7),
    s('/turnkey-projects', 0.8),
    s('/projects', 0.6),
    // Reference-imagery entries are prerendered but kept out of the index.
    ...projects.map((p) => s(`/projects/${p.slug}`, 0.4, 'monthly', p.status === 'case-study')),
    s('/quality', 0.6),
    s('/resources', 0.6),
    s('/blog', 0.5, 'weekly'),
    ...articles.map((a) => s(`/blog/${a.slug}`, 0.5, 'monthly', a.reviewStatus === 'approved')),
    s('/faq', 0.5),
    s('/request-a-quote', 0.8),
    s('/contact-us', 0.8),
    s('/privacy-policy', 0.2, 'yearly'),
    s('/terms-and-conditions', 0.2, 'yearly'),
    // Utility routes: prerendered, never indexed.
    s('/search', 0, 'yearly', false),
    s('/thank-you', 0, 'yearly', false),
  ];
}
