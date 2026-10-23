import type { Article } from '../types';

/**
 * INSIGHTS
 * These articles are editorial drafts. They describe general, widely
 * accepted principles and quote Indoyug product data only from the brochure.
 * They are shown with a "pending technical review" label and rendered with
 * robots noindex until reviewStatus is changed to 'approved' by an Indoyug
 * engineer. They are NOT certified technical guidance.
 */
export const articles: Article[] = [
  {
    slug: 'static-vs-dynamic-pass-box',
    title: 'Static vs dynamic pass boxes: choosing the right transfer hatch',
    excerpt: 'Both move materials between areas of different cleanliness. The difference is whether the chamber is actively purged with HEPA-filtered air.',
    category: 'Cleanroom equipment',
    author: 'Indoyug editorial team',
    date: '2026-10-23',
    readingMinutes: 4,
    featured: true,
    reviewStatus: 'pending-review',
    image: { src: '/assets/products/dynamic-pass-box.webp', alt: 'Dynamic pass box with differential pressure gauge' },
    relatedProducts: ['static-pass-box', 'dynamic-pass-box', 'cleanroom-doors'],
    sections: [
      {
        heading: 'What a pass box does',
        paragraphs: [
          'A pass box is a hatch built into a cleanroom wall so that materials can move between two areas without people walking through. Fewer personnel movements mean fewer opportunities to carry contamination from a less-clean area into a cleaner one.',
          'Most pass boxes use doors that cannot be opened at the same time (an interlock), so the two rooms are never directly connected.',
        ],
      },
      {
        heading: 'Static pass box',
        paragraphs: [
          'A static pass box is a sealed stainless steel chamber with no fan or filter. It relies on the interlock and on cleaning of the chamber and the items being passed. Indoyug’s static pass box can be specified with optional UV light for surface decontamination and optional interlocking doors.',
        ],
        bullets: ['Simple, low-maintenance', 'Suited to transfers between areas with similar cleanliness, or of pre-cleaned, wrapped items'],
      },
      {
        heading: 'Dynamic pass box',
        paragraphs: [
          'A dynamic pass box adds a fan and HEPA filter. Filtered air continuously purges the chamber, which helps flush away particles introduced when the outer door opens. Indoyug’s dynamic pass box uses HEPA-filtered unidirectional airflow with a differential pressure gauge for filter monitoring, UV light and interlocking doors.',
        ],
        bullets: ['Higher level of contamination control during transfer', 'Typically chosen where the cleanliness difference between the two rooms is larger'],
      },
      {
        heading: 'How to decide',
        paragraphs: [
          'The right choice depends on the classifications of the two rooms, what is being transferred and your facility’s contamination control strategy. Your quality and engineering teams should make the final decision; Indoyug can configure either type in standard or custom sizes.',
        ],
      },
    ],
  },
  {
    slug: 'laminar-air-flow-vs-biosafety-cabinet',
    title: 'Laminar air flow unit or biosafety cabinet? Understanding who is protected',
    excerpt: 'A laminar air flow unit protects the work. A Class II biosafety cabinet protects the work, the operator and the environment. That difference matters.',
    category: 'Laminar airflow & biosafety',
    author: 'Indoyug editorial team',
    date: '2026-10-23',
    readingMinutes: 5,
    reviewStatus: 'pending-review',
    image: { src: '/assets/products/biosafety-cabinet-class-ii-a2.webp', alt: 'Class II Type A2 biosafety cabinet' },
    relatedProducts: ['laminar-air-flow-units', 'biosafety-cabinets'],
    sections: [
      {
        heading: 'Laminar air flow units protect the product',
        paragraphs: [
          'A laminar air flow (LAF) unit blows HEPA-filtered air across the work zone in a uniform, unidirectional stream. The air then leaves the cabinet towards the operator and the room. That makes LAF units excellent at keeping samples free of particles — but they offer no protection to the person working at them.',
          'Horizontal units blow air from the back of the work zone towards the operator (side-to-side airflow, suited to open bench work). Vertical units blow air down from above onto the work surface (top-down flow for product protection).',
        ],
      },
      {
        heading: 'Class II biosafety cabinets protect people too',
        paragraphs: [
          'A Class II biosafety cabinet combines a downflow of filtered air over the work with an inward airflow at the front opening, and filters the exhaust before it leaves the cabinet. This arrangement protects the personnel, the product and the environment.',
          'Indoyug’s Class II Type A2 cabinets use HEPA-filtered supply and exhaust air, with an inward airflow velocity of 0.5 m/s ± 20%, a UV germicidal lamp and an audible and visual alarm system.',
        ],
      },
      {
        heading: 'A simple rule of thumb',
        paragraphs: ['If the material could harm the operator or the environment, an LAF unit is not the right tool. Always base the final choice on your organisation’s biosafety risk assessment.'],
        bullets: ['Non-hazardous material, product protection only → LAF unit', 'Biological material that needs containment → Class II biosafety cabinet'],
      },
    ],
  },
  {
    slug: 'air-shower-vs-mist-shower',
    title: 'Air shower or mist shower at cleanroom entry?',
    excerpt: 'Both decontaminate personnel before they enter a cleanroom. One uses high-velocity HEPA-filtered air; the other uses a fine mist.',
    category: 'Cleanroom equipment',
    author: 'Indoyug editorial team',
    date: '2026-10-23',
    readingMinutes: 3,
    reviewStatus: 'pending-review',
    image: { src: '/assets/products/mist-shower-inside-view.webp', alt: 'Inside a mist shower showing fine mist nozzles' },
    relatedProducts: ['air-shower', 'mist-shower', 'cleanroom-doors'],
    sections: [
      {
        heading: 'Air showers',
        paragraphs: [
          'An air shower is a small interlocked chamber between a less-clean and a clean area. High-velocity jets of filtered air blow loose particles off garments before the person steps through. Indoyug’s air shower uses adjustable stainless steel nozzles at 22–25 m/s with a HEPA filter rated 99.99% at 0.3 micron and a washable G4 pre-filter.',
        ],
      },
      {
        heading: 'Mist showers',
        paragraphs: [
          'A mist shower uses high-pressure fine mist nozzles to cleanse the body and garments, removing surface contamination. Indoyug’s mist shower is built in SS 304 / 316 with SS 316 nozzles, an interlock between two doors and an emergency stop.',
        ],
      },
      {
        heading: 'Choosing between them',
        paragraphs: [
          'The choice depends on the contaminants you are dealing with and your facility’s gowning procedure. Both units are available in standard and customised sizes — talk to Indoyug with your entry layout and process.',
        ],
      },
    ],
  },
  {
    slug: 'planning-laboratory-furniture',
    title: 'Planning laboratory furniture: a practical checklist',
    excerpt: 'Wall benches, island benches, sinks, fume hoods and storage — a checklist of questions to answer before you request a layout.',
    category: 'Laboratory furniture',
    author: 'Indoyug editorial team',
    date: '2026-10-23',
    readingMinutes: 4,
    reviewStatus: 'pending-review',
    image: { src: '/assets/products/laboratory-furniture-island-bench.webp', alt: 'Laboratory with island benches' },
    relatedProducts: ['laboratory-furniture', 'fume-hoods', 'island-benches', 'anti-vibration-tables'],
    sections: [
      {
        heading: 'Start with the work, not the furniture',
        paragraphs: ['List the tests and processes the laboratory will run, the instruments involved and how many people will work at once. This determines bench length, services and the number of fume hoods.'],
      },
      {
        heading: 'Questions to answer',
        paragraphs: ['Having these answers ready makes layout discussions with any supplier faster:'],
        bullets: [
          'Room dimensions, door positions, windows and columns',
          'Which processes produce fumes or vapours (fume hood type: bench-top, walk-in or ductless)',
          'Which instruments are vibration-sensitive (anti-vibration tables)',
          'Water points and sink locations (corner or standard sink units)',
          'Chemical and consumable storage volumes',
          'Whether layouts will need to change (mobile storage, modular benches)',
        ],
      },
      {
        heading: 'Wall benches vs island benches',
        paragraphs: ['Wall benches keep the centre of the room free and suit instrument lines. Island benches can be used from both sides and often carry reagent shelving along a central spine. Most laboratories combine both.'],
      },
    ],
  },
];

export const getArticle = (slug: string) => articles.find((a) => a.slug === slug);
