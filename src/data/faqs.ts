import type { FaqGroup } from '../types';

/**
 * FAQ answers come from the brochure (verified: true) or deliberately avoid
 * commitments (verified: false — answer directs to the team). No delivery
 * timelines, warranties or payment terms are stated.
 */
export const faqGroups: FaqGroup[] = [
  {
    id: 'cleanroom-equipment',
    title: 'Cleanroom equipment',
    items: [
      { verified: true, q: 'What cleanroom equipment does Indoyug manufacture?', a: 'The range includes mist showers, air showers, static and dynamic pass boxes, cleanroom doors, dispensing booths, sampling booths, reverse laminar air flow units, garment storage cabinets (including UV garment cabinets), laminar air flow units and Class II Type A2 biosafety cabinets.' },
      { verified: true, q: 'What is the difference between a static and a dynamic pass box?', a: 'A static pass box is used for manual transfer of materials between two areas of different cleanliness levels. A dynamic pass box adds HEPA-filtered laminar airflow that continuously purges the chamber with clean air, for higher levels of contamination control during transfer.' },
      { verified: true, q: 'Which cleanroom door types are available?', a: 'Single leaf, double leaf, sliding, automatic, vision panel, fire rated and hermetic doors.' },
    ],
  },
  {
    id: 'laboratory-furniture',
    title: 'Laboratory furniture',
    items: [
      { verified: true, q: 'What laboratory furniture do you offer?', a: 'Wall benches, island benches, corner sink units, laboratory sink units, fume hoods, storage cabinets, mobile storage units, wall benches with overhead shelves, laboratory chairs and stools, laboratory accessories and anti-vibration tables.' },
      { verified: true, q: 'Which fume hood types are available?', a: 'Bench-top, walk-in and ductless fume hoods, plus customised designs for specialised applications.' },
      { verified: true, q: 'Do you deliver complete laboratories?', a: 'Yes. The brochure lists chemical testing laboratory turnkey projects, and HVAC, cleanroom and laboratory turnkey projects under one roof.' },
    ],
  },
  {
    id: 'materials',
    title: 'Materials & construction',
    items: [
      { verified: true, q: 'Which materials are used?', a: 'It depends on the product. Examples from the brochure: mist showers in SS 304 / 316; air showers in SS 304 / SS 316 or powder-coated GI; dynamic pass boxes in SS 304 / 316; modular furniture in SS 304 / 316L with electropolished finish; workstations in MS or SS; ducting in SS or GI; anti-vibration tables with granite or engineered stone tops on an MS frame.' },
      { verified: true, q: 'How is the stainless steel furniture finished?', a: 'Modular SS furniture is crevice-free and fully welded, with mirror or matte electropolished finishes and cleanroom-compatible casters and fittings.' },
    ],
  },
  {
    id: 'customisation',
    title: 'Product customisation',
    items: [
      { verified: true, q: 'Can products be made to custom sizes?', a: 'Yes. Most products are offered in standard and custom sizes and configurations — for example mist showers, air showers, pass boxes, cleanroom doors, anti-vibration tables and SS furniture.' },
      { verified: false, q: 'Can you build to our drawings?', a: 'Share your drawings or user requirement specification through the quote form (file upload is supported) and the team will confirm what can be built.' },
    ],
  },
  {
    id: 'specifications',
    title: 'Technical specifications',
    items: [
      { verified: true, q: 'Where can I find specifications?', a: 'Each product page lists the specifications printed in the Indoyug brochure, and product sheets can be downloaded from the Resources page. Where a specification is not published, the page says “Specifications available on request”.' },
      { verified: true, q: 'What filtration do the air shower and biosafety cabinet use?', a: 'Both list HEPA filtration at 99.99% efficiency at 0.3 micron. The air shower also has a washable G4 pre-filter.' },
    ],
  },
  {
    id: 'ordering',
    title: 'Ordering & quotations',
    items: [
      { verified: false, q: 'How do I get a price?', a: 'Indoyug works on quotation because most equipment is configured per project. Use the Request a Quote form, email info@indoyug.in or call +91 75672 24020.' },
      { verified: false, q: 'What information should I include in an enquiry?', a: 'Product, quantity, required size or specifications, the room or process it is for, your location and expected timeline. Drawings help.' },
    ],
  },
  {
    id: 'delivery',
    title: 'Delivery & installation',
    items: [
      { verified: true, q: 'Do you install equipment?', a: 'The brochure describes end-to-end project ownership, from initial consultation and design through installation, validation and after-sales support. Scope is confirmed per project.' },
      { verified: false, q: 'How long does delivery take?', a: 'Lead times depend on product, configuration and quantity. The team will confirm timelines in your quotation.' },
    ],
  },
  {
    id: 'support',
    title: 'Maintenance & support',
    items: [
      { verified: true, q: 'Are units tested before dispatch?', a: 'According to the brochure, every unit is factory tested and ships with full FAT (factory acceptance test) documentation and calibration records.' },
      { verified: false, q: 'Do you offer maintenance support?', a: 'The brochure mentions after-sales support. Contact the team for support on supplied equipment.' },
    ],
  },
];
