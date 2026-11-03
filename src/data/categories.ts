import type { ProductCategory } from '../types';

export const categories: ProductCategory[] = [
  {
    id: 'cleanroom-equipment',
    name: 'Cleanroom Equipment',
    shortName: 'Cleanroom Equipment',
    description: 'Air and mist showers, pass boxes, laminar airflow units, biosafety cabinets, dispensing and sampling booths for controlled environments.',
    image: '/assets/products/air-shower.webp',
  },
  {
    id: 'laboratory-furniture',
    name: 'Laboratory Furniture',
    shortName: 'Laboratory Furniture',
    description: 'Modular wall and island benches, sink units, fume hoods including ductless, storage, mobile trolleys and anti-vibration tables.',
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
    id: 'cleanroom-solutions',
    name: 'Cleanroom Solutions',
    shortName: 'Cleanroom Solutions',
    description: 'Cleanroom systems, airflow solutions, doors & accessories and turnkey cleanroom and laboratory projects under one roof.',
    image: '/assets/projects/cleanroom-process-facility.webp',
  },
];

export const getCategory = (id: string) => categories.find((c) => c.id === id);
