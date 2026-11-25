/**
 * Picks a representative photograph for an application label (e.g. "API / HPAPI handling").
 * Photos: Unsplash (Unsplash License) and crops from the Indoyug datasheets — see /assets/applications/CREDITS.md.
 * Rules are checked in order; the first match wins.
 */
const A = '/assets/applications';

const RULES: [RegExp, string][] = [
  [/formulation/i, `${A}/app-formulation-and-rnd.webp`],
  [/raw material|sampling/i, `${A}/app-raw-material-sampling.webp`],
  [/weigh|dispens|powder|balance/i, `${A}/app-weighing-and-dispensing.webp`],
  [/\bapi\b|hpapi|potent/i, `${A}/app-api-handling.webp`],
  [/herbal|nutraceutical/i, `${A}/herbal.webp`],
  [/hospital|clinical|healthcare|diagnos/i, `${A}/hospital-lab.webp`],
  [/microbio/i, `${A}/microbiology.webp`],
  [/semiconductor/i, `${A}/semiconductor.webp`],
  [/electronic|optical/i, `${A}/electronics.webp`],
  [/food|beverage/i, `${A}/food-beverage.webp`],
  [/academic|educational|teaching|institute/i, `${A}/education.webp`],
  [/precision instrument/i, `${A}/microscope.webp`],
  [/\bqc\b|analytical|analysis|quality/i, `${A}/qc-analytical.webp`],
  [/pharma.*(cleanroom)|controlled manufacturing|product handling/i, `${A}/pharma-operator.webp`],
  [/pharma.*(laborator|r&d|labs)/i, `${A}/pharma-lab.webp`],
  [/pharma/i, `${A}/pharma-manufacturing.webp`],
  [/biotech/i, `${A}/biotechnology.webp`],
  [/chemical (industr|process)|process industr|chemical processing|specialty chemical|research & chemical/i, `${A}/chemical-industry.webp`],
  [/chemical/i, `${A}/chemical-lab.webp`],
  [/research|r&d/i, `${A}/rnd-lab.webp`],
  [/gowning|change room|personnel|employee/i, `${A}/gowning.webp`],
  [/packing/i, `${A}/tablets.webp`],
  [/inspection/i, `${A}/inspection.webp`],
  [/storage|stores/i, '/assets/stock/lab-shelving.webp'],
  [/logistics|staging/i, `${A}/logistics.webp`],
  [/cleanroom|critical zone|controlled area/i, `${A}/cleanroom.webp`],
  [/industrial|factor/i, `${A}/industrial.webp`],
  [/workstation|flexible layout/i, `${A}/analytical-bench.webp`],
];

const FALLBACK = `${A}/laboratory.webp`;

export const applicationImage = (label: string) => RULES.find(([re]) => re.test(label))?.[1] ?? FALLBACK;
