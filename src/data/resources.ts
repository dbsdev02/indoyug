import type { Resource } from '../types';

/**
 * Only real files are given a fileUrl. Product sheets are single pages
 * extracted, unchanged, from the Indoyug brochure V5.
 * Items without fileUrl/href render a "Request this document" action.
 */
const R = '/assets/resources';

export const resources: Resource[] = [
  { id: 'r-brochure', title: 'Indoyug Company Brochure (V5)', type: 'Company brochure', description: 'Full 16-page brochure: company overview, product range, technical specifications and industries served.', fileUrl: `${R}/indoyug-company-brochure.pdf`, fileSize: '1.9 MB', products: [] },
  { id: 'r-mist', title: 'Mist Shower — Product Sheet', type: 'Product sheet', description: 'Key features, technical specifications, options and gallery.', fileUrl: `${R}/indoyug-mist-shower-product-sheet.pdf`, fileSize: '227 KB', products: ['mist-shower'] },
  { id: 'r-air', title: 'Air Shower — Product Sheet', type: 'Product sheet', description: 'Technical specifications, options and application areas.', fileUrl: `${R}/indoyug-air-shower-product-sheet.pdf`, fileSize: '181 KB', products: ['air-shower'] },
  { id: 'r-passbox', title: 'Pass Box Solutions — Product Sheet', type: 'Product sheet', description: 'Static and dynamic pass box features, applications and optional features.', fileUrl: `${R}/indoyug-pass-boxes-product-sheet.pdf`, fileSize: '244 KB', products: ['static-pass-box', 'dynamic-pass-box'] },
  { id: 'r-doors', title: 'Cleanroom Doors — Product Sheet', type: 'Product sheet', description: 'Key features and the seven door types.', fileUrl: `${R}/indoyug-cleanroom-doors-product-sheet.pdf`, fileSize: '220 KB', products: ['cleanroom-doors'] },
  { id: 'r-laf', title: 'Laminar Air Flow Units — Product Sheet', type: 'Product sheet', description: 'Horizontal and vertical LAF overview.', fileUrl: `${R}/indoyug-laminar-air-flow-units-product-sheet.pdf`, fileSize: '67 KB', products: ['laminar-air-flow-units'] },
  { id: 'r-bsc', title: 'Biosafety Cabinets — Product Sheet', type: 'Product sheet', description: 'Class II Type A2 cabinet key specifications.', fileUrl: `${R}/indoyug-biosafety-cabinets-product-sheet.pdf`, fileSize: '69 KB', products: ['biosafety-cabinets'] },
  { id: 'r-labfurn', title: 'Laboratory Furniture — Product Sheet', type: 'Product sheet', description: 'Laboratory furniture range overview.', fileUrl: `${R}/indoyug-laboratory-furniture-product-sheet.pdf`, fileSize: '95 KB', products: ['laboratory-furniture'] },
  { id: 'r-fume', title: 'Fume Hoods — Product Sheet', type: 'Product sheet', description: 'Fume hood types and highlights.', fileUrl: `${R}/indoyug-fume-hoods-product-sheet.pdf`, fileSize: '66 KB', products: ['fume-hoods'] },
  { id: 'r-ss', title: 'Stainless Steel Modular Furniture — Product Sheet', type: 'Product sheet', description: 'Materials, finishes and construction of the SS range.', fileUrl: `${R}/indoyug-stainless-steel-modular-furniture-product-sheet.pdf`, fileSize: '67 KB', products: ['stainless-steel-modular-furniture'] },
  // Not yet available — shown with a request-documentation action, never a broken link.
  { id: 'r-ds-detailed', title: 'Detailed product datasheets (dimensions, drawings)', type: 'Datasheet', description: 'Model-wise datasheets with dimensions and GA drawings are shared on request for specific projects.', products: [] },
  { id: 'r-install', title: 'Installation & maintenance guides', type: 'Installation & maintenance', description: 'Product-specific installation and maintenance guidance is provided with supplied equipment. Request a copy for your model.', products: [] },
  { id: 'r-fat', title: 'Sample FAT documentation', type: 'Datasheet', description: 'Example factory acceptance test documentation. Available to prospective customers on request.', products: [] },
  { id: 'r-faq', title: 'Frequently asked questions', type: 'FAQ', description: 'Answers on materials, customisation, specifications and ordering.', href: '/faq', products: [] },
  { id: 'r-articles', title: 'Insights & technical articles', type: 'Technical article', description: 'Guides on pass boxes, laminar airflow, biosafety cabinets and lab planning.', href: '/blog', products: [] },
];

export const resourceTypes = ['Company brochure', 'Product sheet', 'Datasheet', 'Installation & maintenance', 'Technical article', 'FAQ'] as const;
