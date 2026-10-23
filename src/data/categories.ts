import type { ProductCategory } from '../types';

export const categories: ProductCategory[] = [
  {
    id: 'cleanroom-equipment',
    name: 'Cleanroom Equipment',
    shortName: 'Cleanroom Equipment',
    description: 'Personnel and material decontamination, dispensing, sampling and garment storage equipment for controlled environments.',
    image: '/assets/products/air-shower.webp',
  },
  {
    id: 'doors-pass-boxes',
    name: 'Cleanroom Doors & Pass Boxes',
    shortName: 'Doors & Pass Boxes',
    description: 'Airtight cleanroom doors and static or dynamic pass boxes for controlled movement of people and materials between zones.',
    image: '/assets/products/static-pass-box.webp',
  },
  {
    id: 'laf-biosafety',
    name: 'Laminar Air Flow & Biosafety',
    shortName: 'LAF & Biosafety',
    description: 'HEPA-filtered horizontal and vertical laminar air flow units and Class II Type A2 biosafety cabinets.',
    image: '/assets/products/biosafety-cabinet-class-ii-a2.webp',
  },
  {
    id: 'laboratory-furniture',
    name: 'Laboratory Furniture',
    shortName: 'Laboratory Furniture',
    description: 'Modular wall and island benches, sink units, fume hoods, storage and anti-vibration tables for chemical and testing laboratories.',
    image: '/assets/products/laboratory-furniture-island-bench.webp',
  },
  {
    id: 'ss-modular-furniture',
    name: 'Stainless Steel Modular Furniture',
    shortName: 'SS Modular Furniture',
    description: 'Crevice-free, fully welded SS 304 / 316L trolleys, cabinets, racks, workstations and cleanroom furniture.',
    image: '/assets/products/stainless-steel-modular-furniture.webp',
  },
  {
    id: 'hvac-cleanroom',
    name: 'HVAC & Cleanroom Solutions',
    shortName: 'HVAC & Cleanroom',
    description: 'Cleanroom HVAC, airflow solutions, ducting and turnkey cleanroom and laboratory projects under one roof.',
    image: '/assets/projects/cleanroom-process-facility.webp',
  },
];

export const getCategory = (id: string) => categories.find((c) => c.id === id);
