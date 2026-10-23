/**
 * Shared content types. Every data file in /src/data conforms to these
 * interfaces so the content can later be moved to a CMS or API without
 * touching page components.
 */

export type CategoryId =
  | 'cleanroom-equipment'
  | 'doors-pass-boxes'
  | 'laf-biosafety'
  | 'laboratory-furniture'
  | 'ss-modular-furniture'
  | 'hvac-cleanroom';

export interface ProductCategory {
  id: CategoryId;
  name: string;
  shortName: string;
  description: string;
  image?: string;
}

export interface ImageAsset {
  src: string;
  alt: string;
  caption?: string;
}

export interface Feature {
  title: string;
  text?: string;
}

export interface Specification {
  label: string;
  value: string;
}

export interface Variant {
  name: string;
  description?: string;
  image?: string;
}

/**
 * `source` records where the content came from so editors can see what is
 * verified (brochure) and what still needs company input.
 *  - 'brochure-detailed': dedicated brochure page with features/specs
 *  - 'brochure-listed':   named in the brochure range, no technical detail yet
 */
export type ContentSource = 'brochure-detailed' | 'brochure-listed';

export interface Product {
  id: string;
  slug: string;
  name: string;
  category: CategoryId;
  shortDescription: string;
  description: string[];
  /** Primary image. Omitted when no approved photograph exists — a labelled placeholder is shown. */
  image?: ImageAsset;
  gallery: ImageAsset[];
  features: Feature[];
  applications: string[];
  specifications: Specification[];
  variants?: Variant[];
  options?: string[];
  materials?: string;
  filtration?: string;
  relatedProducts: string[];
  industries: string[];
  datasheetUrl?: string;
  source: ContentSource;
  /** Short editorial note shown to visitors when information is limited. */
  featured?: boolean;
  keywords?: string[];
}

export interface Industry {
  slug: string;
  name: string;
  shortName: string;
  summary: string;
  intro: string[];
  challenges: Feature[];
  solutions: Feature[];
  products: string[];
  image?: ImageAsset;
  /** Whether the brochure explicitly lists this sector. */
  brochureListed: boolean;
  hasDetailPage: boolean;
}

export type ProjectCategory =
  | 'Cleanroom installations'
  | 'Laboratory furniture'
  | 'Equipment'
  | 'Stainless-steel furniture'
  | 'Factory & assembly'
  | 'Turnkey projects';

export interface Project {
  slug: string;
  title: string;
  category: ProjectCategory;
  summary: string;
  image?: ImageAsset;
  /**
   * 'reference-imagery': image taken from the company brochure; it is not a
   * documented installation with confirmed client, location or scope.
   * 'case-study': a verified, approved case study.
   */
  status: 'reference-imagery' | 'case-study';
  client?: string;
  location?: string;
  year?: string;
  scope?: string[];
  products: string[];
}

export type ResourceType =
  | 'Company brochure'
  | 'Product sheet'
  | 'Datasheet'
  | 'Installation & maintenance'
  | 'Technical article'
  | 'FAQ';

export interface Resource {
  id: string;
  title: string;
  type: ResourceType;
  description: string;
  /** Present only for real, approved downloadable files. */
  fileUrl?: string;
  fileSize?: string;
  /** Internal link for non-download resources (articles, FAQ). */
  href?: string;
  products: string[];
}

export interface ArticleSection {
  heading: string;
  paragraphs: string[];
  bullets?: string[];
}

export interface Article {
  slug: string;
  title: string;
  excerpt: string;
  category: string;
  author: string;
  /** ISO date the draft was prepared. */
  date: string;
  readingMinutes: number;
  image?: ImageAsset;
  sections: ArticleSection[];
  relatedProducts: string[];
  /**
   * 'pending-review' articles are visible but marked as editorial drafts and
   * set to noindex until an Indoyug engineer approves them.
   */
  reviewStatus: 'pending-review' | 'approved';
  featured?: boolean;
}

export interface FaqItem {
  q: string;
  a: string;
  /** True when the answer comes straight from the brochure. */
  verified: boolean;
}

export interface FaqGroup {
  id: string;
  title: string;
  items: FaqItem[];
}
