import type { Project } from '../types';

/**
 * PROJECTS & GALLERY
 * No verified case studies (client, location, scope, outcome) were provided.
 * Every entry below is therefore status 'reference-imagery': images from the
 * Indoyug brochure, clearly labelled on the site as NOT documented
 * installations. Replace with real case studies (status: 'case-study') and
 * fill client/location/year/scope once approved.
 */
export const projects: Project[] = [
  {
    slug: 'cleanroom-microbiology-laboratory',
    title: 'Cleanroom microbiology laboratory',
    category: 'Turnkey projects',
    status: 'reference-imagery',
    summary: 'Brochure imagery of a cleanroom laboratory combining a laminar air flow unit, pass box, cleanroom door and laboratory benches.',
    image: { src: '/assets/projects/microbiology-cleanroom-lab.webp', alt: 'Cleanroom laboratory with LAF unit, pass box and benches' },
    products: ['laminar-air-flow-units', 'static-pass-box', 'cleanroom-doors', 'laboratory-furniture'],
  },
  {
    slug: 'cleanroom-laboratory-interior',
    title: 'Cleanroom & laboratory interior',
    category: 'Cleanroom installations',
    status: 'reference-imagery',
    summary: 'Brochure imagery showing a biosafety cabinet, wall-mounted pass boxes, cleanroom door and island benches in one space.',
    image: { src: '/assets/projects/cleanroom-laboratory-interior.webp', alt: 'Cleanroom laboratory with biosafety cabinet and pass boxes' },
    products: ['biosafety-cabinets', 'static-pass-box', 'cleanroom-doors', 'island-benches'],
  },
  {
    slug: 'cleanroom-process-facility',
    title: 'Modular cleanroom process facility',
    category: 'Cleanroom installations',
    status: 'reference-imagery',
    summary: 'Brochure imagery of a modular cleanroom enclosure with overhead ducting and process equipment.',
    image: { src: '/assets/projects/cleanroom-process-facility.webp', alt: 'Modular cleanroom facility with ducting' },
    products: ['cleanroom-hvac-systems', 'ducting-and-accessories', 'cleanroom-doors'],
  },
  {
    slug: 'laboratory-island-benches',
    title: 'Laboratory island & wall benches',
    category: 'Laboratory furniture',
    status: 'reference-imagery',
    summary: 'Brochure imagery of island benches with reagent shelving, a corner sink and glazed wall storage.',
    image: { src: '/assets/products/laboratory-furniture-island-bench.webp', alt: 'Island benches and wall storage in a laboratory' },
    products: ['island-benches', 'wall-benches-with-overhead-shelves', 'laboratory-storage-cabinets'],
  },
  {
    slug: 'stainless-steel-laboratory-workstations',
    title: 'Stainless steel laboratory workstations',
    category: 'Stainless-steel furniture',
    status: 'reference-imagery',
    summary: 'Brochure imagery of long stainless steel benches with integrated sinks and overhead shelving.',
    image: { src: '/assets/manufacturing/stainless-steel-lab-benches.webp', alt: 'Stainless steel laboratory benches' },
    products: ['ss-workstations', 'stainless-steel-modular-furniture'],
  },
  {
    slug: 'ss-modular-furniture-range',
    title: 'SS trolleys, cabinets & racks',
    category: 'Stainless-steel furniture',
    status: 'reference-imagery',
    summary: 'Brochure imagery of the stainless steel modular furniture range.',
    image: { src: '/assets/products/stainless-steel-modular-furniture.webp', alt: 'Stainless steel trolleys, cabinets and racks' },
    products: ['ss-trolleys', 'ss-storage-cabinets', 'ss-modular-shelving-storage'],
  },
  {
    slug: 'cleanroom-entry-systems',
    title: 'Cleanroom entry systems',
    category: 'Equipment',
    status: 'reference-imagery',
    summary: 'Brochure imagery of Indoyug air shower and mist shower units.',
    image: { src: '/assets/products/air-shower.webp', alt: 'Indoyug air shower' },
    products: ['air-shower', 'mist-shower'],
  },
  {
    slug: 'cleanroom-corridor-doors',
    title: 'Cleanroom corridor & doors',
    category: 'Cleanroom installations',
    status: 'reference-imagery',
    summary: 'Brochure imagery of a cleanroom corridor with flush vision-panel doors.',
    image: { src: '/assets/projects/cleanroom-corridor-doors.webp', alt: 'Cleanroom corridor with doors' },
    products: ['cleanroom-doors'],
  },
];

export const projectCategories = [
  'Cleanroom installations',
  'Laboratory furniture',
  'Equipment',
  'Stainless-steel furniture',
  'Factory & assembly',
  'Turnkey projects',
] as const;

export const getProject = (slug: string) => projects.find((p) => p.slug === slug);
