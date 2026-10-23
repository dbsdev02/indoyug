import { products } from '../data/products';
import { industries } from '../data/industries';
import { projects } from '../data/projects';
import { articles } from '../data/articles';
import { resources } from '../data/resources';
import { getCategory } from '../data/categories';

export interface SearchResult {
  type: 'Product' | 'Industry' | 'Project' | 'Article' | 'Resource' | 'Page';
  title: string;
  description: string;
  href: string;
  meta?: string;
  score: number;
}

interface Entry extends Omit<SearchResult, 'score'> {
  haystack: string;
  titleLc: string;
}

const pages: Omit<Entry, 'haystack' | 'titleLc'>[] = [
  { type: 'Page', title: 'About Indoyug', description: 'Company overview, capabilities and expertise.', href: '/about-us' },
  { type: 'Page', title: 'Manufacturing capabilities', description: 'Stainless-steel fabrication, assembly, inspection and FAT.', href: '/manufacturing' },
  { type: 'Page', title: 'Turnkey projects', description: 'HVAC, cleanroom and laboratory turnkey projects under one roof.', href: '/turnkey-projects' },
  { type: 'Page', title: 'Quality assurance', description: 'Factory testing, FAT documentation and calibration records.', href: '/quality' },
  { type: 'Page', title: 'Request a quote', description: 'Send a B2B enquiry with specifications and drawings.', href: '/request-a-quote' },
  { type: 'Page', title: 'Contact us', description: 'Address, phone numbers, email and map.', href: '/contact-us' },
  { type: 'Page', title: 'FAQ', description: 'Materials, customisation, specifications and ordering.', href: '/faq' },
];

let index: Entry[] | null = null;
const build = (): Entry[] => {
  const e: Omit<Entry, 'titleLc'>[] = [
    ...products.map((p) => ({
      type: 'Product' as const,
      title: p.name,
      description: p.shortDescription,
      href: `/products/${p.slug}`,
      meta: getCategory(p.category)?.name,
      haystack: [p.name, p.shortDescription, ...p.description, ...p.features.map((f) => `${f.title} ${f.text ?? ''}`), ...(p.keywords ?? []), ...(p.variants ?? []).map((v) => v.name), getCategory(p.category)?.name].join(' '),
    })),
    ...industries.map((i) => ({ type: 'Industry' as const, title: i.name, description: i.summary, href: `/industries/${i.slug}`, haystack: [i.name, i.summary, ...i.intro].join(' ') })),
    ...projects.map((p) => ({ type: 'Project' as const, title: p.title, description: p.summary, href: `/projects/${p.slug}`, meta: p.category, haystack: [p.title, p.summary, p.category].join(' ') })),
    ...articles.map((a) => ({ type: 'Article' as const, title: a.title, description: a.excerpt, href: `/blog/${a.slug}`, meta: a.category, haystack: [a.title, a.excerpt, ...a.sections.flatMap((s) => [s.heading, ...s.paragraphs])].join(' ') })),
    ...resources.map((r) => ({ type: 'Resource' as const, title: r.title, description: r.description, href: r.fileUrl ?? r.href ?? '/resources', meta: r.type, haystack: [r.title, r.description, r.type].join(' ') })),
    ...pages.map((p) => ({ ...p, haystack: `${p.title} ${p.description}` })),
  ];
  return e.map((x) => ({ ...x, haystack: x.haystack.toLowerCase(), titleLc: x.title.toLowerCase() }));
};

export function search(query: string): SearchResult[] {
  const q = query.trim().toLowerCase();
  if (q.length < 2) return [];
  index ??= build();
  const terms = q.split(/\s+/).filter(Boolean);
  const out: SearchResult[] = [];
  for (const e of index) {
    let score = 0;
    let all = true;
    for (const t of terms) {
      if (e.titleLc.includes(t)) score += 10;
      else if (e.haystack.includes(t)) score += 2;
      else all = false;
    }
    if (!all) continue;
    if (e.titleLc.startsWith(q)) score += 15;
    if (e.type === 'Product') score += 3;
    const { haystack: _h, titleLc: _t, ...rest } = e;
    out.push({ ...rest, score });
  }
  return out.sort((a, b) => b.score - a.score);
}
