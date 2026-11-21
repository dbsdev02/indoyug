/**
 * Picks a representative photograph for an application label (e.g. "API / HPAPI handling").
 * Rules are checked in order; the first keyword match wins.
 */
const RULES: [RegExp, string][] = [
  [/raw material|sampling/i, '/assets/applications/app-raw-material-sampling.webp'],
  [/weigh|dispens|powder/i, '/assets/applications/app-weighing-and-dispensing.webp'],
  [/\bapi\b|hpapi|potent|hazardous/i, '/assets/applications/app-api-handling.webp'],
  [/formulation|herbal|nutraceutical/i, '/assets/applications/app-formulation-and-rnd.webp'],
  [/hospital|clinical|healthcare|diagnos/i, '/assets/industries/hospital-laboratories.webp'],
  [/biotech|microbio|r&d|research|precision|balance/i, '/assets/industries/biotech-research.webp'],
  [/\bqc\b|analytical|analysis|quality/i, '/assets/stock/lab-bench-pipettes.webp'],
  [/chemical|solvent/i, '/assets/stock/lab-bench-glassware.webp'],
  [/pharma/i, '/assets/industries/pharmaceutical-chemical.webp'],
  [/semiconductor|electronic|optical/i, '/assets/stock/cleanroom-assembly.webp'],
  [/cleanroom|gowning|aseptic|sterile/i, '/assets/industries/cleanroom-facilities.webp'],
  [/academic|educational|teaching|institute/i, '/assets/stock/lab-stools.webp'],
  [/industrial|factor|employee|personnel/i, '/assets/stock/fabrication-workshop.webp'],
  [/food|beverage/i, '/assets/products/stainless-steel-modular-furniture.webp'],
  [/storage|stores|warehouse/i, '/assets/stock/lab-shelving.webp'],
];

const FALLBACK = '/assets/stock/lab-bench-glassware.webp';

export const applicationImage = (label: string) => RULES.find(([re]) => re.test(label))?.[1] ?? FALLBACK;
