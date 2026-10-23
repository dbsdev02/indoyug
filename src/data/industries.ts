import type { Industry } from '../types';

/**
 * Industries. `brochureListed` = sector named on the brochure's
 * "Industry We Cater" page or in product application areas.
 * Copy describes typical needs of each sector and maps them to Indoyug
 * products; it makes no compliance or certification claims.
 */
export const industries: Industry[] = [
  {
    slug: 'pharmaceutical-biotech',
    name: 'Pharmaceutical & Biotechnology',
    shortName: 'Pharma & Biotech',
    brochureListed: true,
    hasDetailPage: true,
    summary: 'Cleanroom entry, material transfer, laminar airflow and biosafety equipment for production, QC and microbiology areas.',
    intro: [
      'Pharmaceutical and biotechnology facilities depend on controlled movement of people, materials and air. Every entry point, transfer hatch and work zone is an opportunity for contamination.',
      'Indoyug manufactures the equipment and furniture that sit at those control points — from air and mist showers at personnel entry, to static and dynamic pass boxes, laminar air flow units and Class II Type A2 biosafety cabinets — and delivers complete cleanroom and laboratory projects.',
    ],
    challenges: [
      { title: 'Personnel-borne contamination', text: 'Operators carry particles into clean areas on garments and skin.' },
      { title: 'Material transfer between grades', text: 'Moving materials between areas of different cleanliness classifications risks cross-contamination.' },
      { title: 'Protecting product and operator', text: 'Microbiology and sterility work needs a clean work zone — and, for biohazards, operator and environmental protection.' },
      { title: 'Hygienic, cleanable surfaces', text: 'Furniture must be crevice-free and withstand frequent cleaning.' },
    ],
    solutions: [
      { title: 'Entry decontamination', text: 'Air showers and mist showers with interlocked doors.' },
      { title: 'Controlled material transfer', text: 'Static pass boxes and HEPA-purged dynamic pass boxes.' },
      { title: 'Clean work zones', text: 'Horizontal and vertical LAF units and Class II Type A2 biosafety cabinets.' },
      { title: 'Cleanroom furniture', text: 'Electropolished SS 304 / 316L trolleys, cabinets and racks.' },
    ],
    products: ['air-shower', 'mist-shower', 'dynamic-pass-box', 'static-pass-box', 'laminar-air-flow-units', 'biosafety-cabinets', 'cleanroom-doors', 'stainless-steel-modular-furniture'],
    image: { src: '/assets/industries/pharmaceutical-chemical.webp', alt: 'Operator in cleanroom gown working at pharmaceutical process equipment' },
  },
  {
    slug: 'chemical-process',
    name: 'Chemical & Process Industries',
    shortName: 'Chemical & Process',
    brochureListed: true,
    hasDetailPage: true,
    summary: 'Fume hoods, chemical-resistant sink units, storage and complete chemical testing laboratories.',
    intro: [
      'Chemical and process plants run testing laboratories that handle hazardous vapours, corrosive reagents and a steady flow of samples.',
      'Indoyug’s laboratory furniture range includes fume hoods (bench-top, walk-in and ductless), chemical-resistant sink units and storage cabinets, and the company delivers chemical testing laboratory turnkey projects.',
    ],
    challenges: [
      { title: 'Hazardous fumes and vapours', text: 'Operators need effective containment during lab processes.' },
      { title: 'Corrosive reagents', text: 'Worktops, sinks and hood interiors are exposed to chemicals.' },
      { title: 'Safe, organised storage', text: 'Chemicals and consumables must be stored securely.' },
    ],
    solutions: [
      { title: 'Fume hoods', text: 'Bench-top, walk-in, ductless and customised types with corrosion-resistant internal surfaces.' },
      { title: 'Chemical-resistant sink units', text: 'Corner and laboratory sink units.' },
      { title: 'Storage', text: 'Laboratory and chemical storage cabinets.' },
      { title: 'Turnkey laboratories', text: 'Complete chemical testing laboratory projects.' },
    ],
    products: ['fume-hoods', 'corner-sink-units', 'laboratory-sink-units', 'laboratory-storage-cabinets', 'laboratory-furniture', 'mist-shower'],
    image: { src: '/assets/products/fume-hood.webp', alt: 'Laboratory fume hood with sash and base cabinets' },
  },
  {
    slug: 'research-laboratories',
    name: 'Research & Development Laboratories',
    shortName: 'R&D Laboratories',
    brochureListed: true,
    hasDetailPage: true,
    summary: 'Modular benches, biosafety cabinets, LAF units and anti-vibration tables for research and biotech labs.',
    intro: [
      'Research laboratories change as projects change. They need furniture that can be reconfigured, clean work zones for sensitive samples and stable platforms for precision instruments.',
      'Indoyug supplies modular laboratory furniture, laminar air flow units, biosafety cabinets and anti-vibration tables, and can plan complete laboratory fit-outs.',
    ],
    challenges: [
      { title: 'Changing layouts', text: 'Research groups reorganise space as work evolves.' },
      { title: 'Sample protection', text: 'Cell culture and microbiology work needs clean, controlled air.' },
      { title: 'Instrument stability', text: 'Balances and microscopes are sensitive to vibration.' },
    ],
    solutions: [
      { title: 'Modular furniture', text: 'Wall and island benches, mobile storage and overhead shelving.' },
      { title: 'Clean air', text: 'LAF units and Class II Type A2 biosafety cabinets.' },
      { title: 'Stable platforms', text: 'Anti-vibration tables with stone tops and isolation mounts.' },
    ],
    products: ['laboratory-furniture', 'island-benches', 'biosafety-cabinets', 'laminar-air-flow-units', 'anti-vibration-tables', 'mobile-storage-units'],
    image: { src: '/assets/industries/biotech-research.webp', alt: 'Researcher pipetting samples at a laboratory bench' },
  },
  {
    slug: 'hospital-laboratories',
    name: 'Hospital Laboratories',
    shortName: 'Hospital Labs',
    brochureListed: true,
    hasDetailPage: true,
    summary: 'Durable, easy-to-clean laboratory furniture and biosafety equipment for clinical and diagnostic labs.',
    intro: [
      'Hospital and diagnostic laboratories process high sample volumes in limited space, with strict hygiene expectations.',
      'Indoyug laboratory furniture combines durable construction with clean, easy-to-maintain surfaces, and the range includes biosafety cabinets and laminar air flow units for microbiology work.',
    ],
    challenges: [
      { title: 'High throughput in tight spaces', text: 'Benches, storage and sinks must fit efficient workflows.' },
      { title: 'Hygiene', text: 'Surfaces are cleaned frequently.' },
      { title: 'Biological samples', text: 'Some work requires operator and environmental protection.' },
    ],
    solutions: [
      { title: 'Laboratory furniture', text: 'Wall benches, island benches, sink units and storage.' },
      { title: 'Biosafety', text: 'Class II Type A2 biosafety cabinets.' },
      { title: 'Clean work zones', text: 'Laminar air flow units.' },
    ],
    products: ['wall-benches', 'island-benches', 'laboratory-sink-units', 'biosafety-cabinets', 'laminar-air-flow-units', 'laboratory-storage-cabinets'],
    image: { src: '/assets/industries/hospital-laboratories.webp', alt: 'Clinical laboratory with blue wall cabinets and analysers' },
  },
  {
    slug: 'food-beverage',
    name: 'Food & Beverage',
    shortName: 'Food & Beverage',
    brochureListed: true,
    hasDetailPage: true,
    summary: 'Hygienic stainless steel furniture, entry decontamination and QC laboratory furniture for food plants.',
    intro: [
      'Food and beverage plants need hygienic production areas and well-equipped quality control laboratories.',
      'Indoyug’s mist showers, air showers and cleanroom doors list food & beverage among their application areas, and the stainless steel modular furniture range is fully welded and crevice-free for easy cleaning.',
    ],
    challenges: [
      { title: 'Hygiene at entry', text: 'Personnel and materials must be clean before entering production areas.' },
      { title: 'Cleanable furniture', text: 'Furniture must not trap particles or residues.' },
      { title: 'QC testing', text: 'Laboratories need benches, fume hoods and storage.' },
    ],
    solutions: [
      { title: 'Entry decontamination', text: 'Mist showers and air showers.' },
      { title: 'SS furniture', text: 'Crevice-free trolleys, racks and workstations.' },
      { title: 'QC labs', text: 'Laboratory furniture and fume hoods.' },
    ],
    products: ['mist-shower', 'air-shower', 'cleanroom-doors', 'stainless-steel-modular-furniture', 'ss-workstations', 'fume-hoods'],
    image: { src: '/assets/products/stainless-steel-modular-furniture.webp', alt: 'Stainless steel trolleys, racks and cabinets' },
  },
  {
    slug: 'electronics-manufacturing',
    name: 'Electronics & Precision Manufacturing',
    shortName: 'Electronics',
    brochureListed: true,
    hasDetailPage: true,
    summary: 'Particle control at entry and in work zones for electronics and precision assembly.',
    intro: [
      'Electronics and precision assembly are sensitive to particulate contamination on people, parts and work surfaces.',
      'The Indoyug air shower lists electronics & precision manufacturing among its application areas. Laminar air flow units, anti-vibration tables and cleanroom airflow solutions support clean, stable work zones.',
    ],
    challenges: [
      { title: 'Particles carried in on garments', text: 'Operators bring particles into assembly areas.' },
      { title: 'Clean work zones', text: 'Open-bench assembly needs clean, unidirectional air.' },
      { title: 'Vibration-sensitive instruments', text: 'Precision measurement needs a stable platform.' },
    ],
    solutions: [
      { title: 'Air showers', text: 'HEPA-filtered high-velocity air jets at entry.' },
      { title: 'Horizontal LAF', text: 'Side-to-side airflow for open bench work.' },
      { title: 'Anti-vibration tables', text: 'Stone tops on isolation mounts.' },
    ],
    products: ['air-shower', 'laminar-air-flow-units', 'anti-vibration-tables', 'cleanroom-airflow-solutions', 'cleanroom-doors'],
    image: { src: '/assets/products/air-shower.webp', alt: 'Stainless steel air shower' },
  },
  {
    slug: 'cleanroom-facilities',
    name: 'Cleanroom Facilities',
    shortName: 'Cleanroom Facilities',
    brochureListed: true,
    hasDetailPage: true,
    summary: 'Doors, pass boxes, entry systems, furniture, HVAC and ducting for new and upgraded cleanrooms.',
    intro: [
      'A cleanroom performs only as well as its weakest interface — doors, pass-throughs, entry systems and air handling all have to work together.',
      'Indoyug brings cleanroom equipment, furniture and HVAC under one roof, and delivers turnkey cleanroom projects from planning and design through installation and support.',
    ],
    challenges: [
      { title: 'Pressure and airtightness', text: 'Doors and hatches must hold room pressure.' },
      { title: 'Coordinating many suppliers', text: 'Separate vendors for HVAC, doors and furniture slow projects down.' },
      { title: 'Cleanable interiors', text: 'Everything inside must be easy to clean.' },
    ],
    solutions: [
      { title: 'Cleanroom doors', text: 'Single, double, sliding, automatic, vision-panel, fire-rated and hermetic types.' },
      { title: 'Pass boxes and entry systems', text: 'Static/dynamic pass boxes, air and mist showers.' },
      { title: 'HVAC and ducting', text: 'Cleanroom HVAC and SS / GI ducting.' },
      { title: 'Turnkey delivery', text: 'One partner from design to support.' },
    ],
    products: ['cleanroom-doors', 'dynamic-pass-box', 'air-shower', 'cleanroom-hvac-systems', 'ducting-and-accessories', 'cleanroom-turnkey-projects'],
    image: { src: '/assets/industries/cleanroom-facilities.webp', alt: 'Empty cleanroom corridor with flush panels and doors' },
  },
];

export const getIndustry = (slug: string) => industries.find((i) => i.slug === slug);
