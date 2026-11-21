import type { ImageAsset } from '../types';

/**
 * Drawings and component close-ups cropped from the Indoyug product datasheets
 * (generated from source-images/indoyug-images). Keyed by product slug.
 */
export interface DatasheetMedia {
  dimensions: ImageAsset[];
  airflow: ImageAsset[];
  components: ImageAsset[];
}

export const datasheetMedia: Record<string, DatasheetMedia> = {
  'dispensing-booth': {
    dimensions: [
      { src: "/assets/products/indoyug/parts/dispensing-booth-dimensions.webp", alt: "Dispensing booth — standard dimensions, front and side view drawing (mm)", caption: "Dispensing booth" },
      { src: "/assets/products/indoyug/parts/dispensing-booth-ss-dimensions.webp", alt: "Stainless steel dispensing booth — standard dimensions, front and side view drawing (mm)", caption: "Stainless steel dispensing booth" },
    ],
    airflow: [
      { src: "/assets/products/indoyug/parts/dispensing-booth-airflow.webp", alt: "Dispensing booth — airflow diagram", caption: "Dispensing booth" },
    ],
    components: [
      { src: "/assets/products/indoyug/parts/dispensing-booth-part-1.webp", alt: "Dispensing booth: Differential pressure gauge", caption: "Differential pressure gauge" },
      { src: "/assets/products/indoyug/parts/dispensing-booth-part-2.webp", alt: "Dispensing booth: LED light (≥ 300 Lux)", caption: "LED light (≥ 300 Lux)" },
      { src: "/assets/products/indoyug/parts/dispensing-booth-part-3.webp", alt: "Dispensing booth: HEPA filter (H14, ≥ 99.995% @ 0.3 µm)", caption: "HEPA filter (H14, ≥ 99.995% @ 0.3 µm)" },
      { src: "/assets/products/indoyug/parts/dispensing-booth-part-4.webp", alt: "Dispensing booth: Perforated back wall (uniform airflow)", caption: "Perforated back wall (uniform airflow)" },
      { src: "/assets/products/indoyug/parts/dispensing-booth-part-5.webp", alt: "Dispensing booth: Control panel (analog / digital)", caption: "Control panel (analog / digital)" },
      { src: "/assets/products/indoyug/parts/dispensing-booth-part-6.webp", alt: "Dispensing booth: Centrifugal / EC blower (low noise)", caption: "Centrifugal / EC blower (low noise)" },
      { src: "/assets/products/indoyug/parts/dispensing-booth-part-7.webp", alt: "Dispensing booth: PVC strip curtain (containment)", caption: "PVC strip curtain (containment)" },
      { src: "/assets/products/indoyug/parts/dispensing-booth-part-8.webp", alt: "Dispensing booth: SS 304 work surface (smooth / perforated)", caption: "SS 304 work surface (smooth / perforated)" },
      { src: "/assets/products/indoyug/parts/dispensing-booth-ss-part-4.webp", alt: "Stainless steel dispensing booth: Centrifugal blower (low noise)", caption: "Centrifugal blower (low noise)" },
      { src: "/assets/products/indoyug/parts/dispensing-booth-ss-part-6.webp", alt: "Stainless steel dispensing booth: Transparent PVC strip curtain", caption: "Transparent PVC strip curtain" },
      { src: "/assets/products/indoyug/parts/dispensing-booth-ss-part-7.webp", alt: "Stainless steel dispensing booth: Adjustable feet / castor", caption: "Adjustable feet / castor" },
    ],
  },
  'sampling-booth': {
    dimensions: [
      { src: "/assets/products/indoyug/parts/sampling-booth-dimensions.webp", alt: "Sampling booth (SB-12 / 15 / 18) — standard dimensions, front and side view drawing (mm)", caption: "Sampling booth (SB-12 / 15 / 18)" },
      { src: "/assets/products/indoyug/parts/sampling-booth-alt-dimensions.webp", alt: "Sampling booth (SB-12 / SB-15) — standard dimensions, front and side view drawing (mm)", caption: "Sampling booth (SB-12 / SB-15)" },
    ],
    airflow: [
      { src: "/assets/products/indoyug/parts/sampling-booth-airflow.webp", alt: "Sampling booth (SB-12 / 15 / 18) — airflow diagram", caption: "Sampling booth (SB-12 / 15 / 18)" },
    ],
    components: [
      { src: "/assets/products/indoyug/parts/sampling-booth-part-1.webp", alt: "Sampling booth (SB-12 / 15 / 18): Differential pressure gauge", caption: "Differential pressure gauge" },
      { src: "/assets/products/indoyug/parts/sampling-booth-part-2.webp", alt: "Sampling booth (SB-12 / 15 / 18): LED light (≥ 300 Lux)", caption: "LED light (≥ 300 Lux)" },
      { src: "/assets/products/indoyug/parts/sampling-booth-part-3.webp", alt: "Sampling booth (SB-12 / 15 / 18): HEPA filter (H14, ≥ 99.995% @ 0.3 µm)", caption: "HEPA filter (H14, ≥ 99.995% @ 0.3 µm)" },
      { src: "/assets/products/indoyug/parts/sampling-booth-part-4.webp", alt: "Sampling booth (SB-12 / 15 / 18): Perforated baffle wall (uniform airflow)", caption: "Perforated baffle wall (uniform airflow)" },
      { src: "/assets/products/indoyug/parts/sampling-booth-part-5.webp", alt: "Sampling booth (SB-12 / 15 / 18): Control panel (analog / digital)", caption: "Control panel (analog / digital)" },
      { src: "/assets/products/indoyug/parts/sampling-booth-part-6.webp", alt: "Sampling booth (SB-12 / 15 / 18): Centrifugal / EC blower (low noise)", caption: "Centrifugal / EC blower (low noise)" },
      { src: "/assets/products/indoyug/parts/sampling-booth-part-7.webp", alt: "Sampling booth (SB-12 / 15 / 18): Toughened glass side panel", caption: "Toughened glass side panel" },
      { src: "/assets/products/indoyug/parts/sampling-booth-part-8.webp", alt: "Sampling booth (SB-12 / 15 / 18): SS 304 work surface (smooth / perforated)", caption: "SS 304 work surface (smooth / perforated)" },
      { src: "/assets/products/indoyug/parts/sampling-booth-alt-part-3.webp", alt: "Sampling booth (SB-12 / SB-15): Perforated back panel", caption: "Perforated back panel" },
      { src: "/assets/products/indoyug/parts/sampling-booth-alt-part-6.webp", alt: "Sampling booth (SB-12 / SB-15): Centrifugal blower (low noise)", caption: "Centrifugal blower (low noise)" },
    ],
  },
  'reverse-laminar-air-flow-unit': {
    dimensions: [
      { src: "/assets/products/indoyug/parts/reverse-laminar-air-flow-unit-dimensions.webp", alt: "Reverse flow laminar workstation — standard dimensions, front and side view drawing (mm)", caption: "Reverse flow laminar workstation" },
      { src: "/assets/products/indoyug/parts/reverse-laminar-air-flow-unit-alt-dimensions.webp", alt: "Reverse flow laminar (RLF-12 / RLF-15) — standard dimensions, front and side view drawing (mm)", caption: "Reverse flow laminar (RLF-12 / RLF-15)" },
    ],
    airflow: [
      { src: "/assets/products/indoyug/parts/reverse-laminar-air-flow-unit-airflow.webp", alt: "Reverse flow laminar workstation — airflow diagram", caption: "Reverse flow laminar workstation" },
      { src: "/assets/products/indoyug/parts/reverse-laminar-air-flow-unit-alt-airflow.webp", alt: "Reverse flow laminar (RLF-12 / RLF-15) — airflow diagram", caption: "Reverse flow laminar (RLF-12 / RLF-15)" },
    ],
    components: [
      { src: "/assets/products/indoyug/parts/reverse-laminar-air-flow-unit-part-1.webp", alt: "Reverse flow laminar workstation: Differential pressure gauge (analog / digital)", caption: "Differential pressure gauge (analog / digital)" },
      { src: "/assets/products/indoyug/parts/reverse-laminar-air-flow-unit-part-2.webp", alt: "Reverse flow laminar workstation: LED light (≥ 300 Lux)", caption: "LED light (≥ 300 Lux)" },
      { src: "/assets/products/indoyug/parts/reverse-laminar-air-flow-unit-part-3.webp", alt: "Reverse flow laminar workstation: HEPA filter (H14, ≥ 99.995% @ 0.3 µm)", caption: "HEPA filter (H14, ≥ 99.995% @ 0.3 µm)" },
      { src: "/assets/products/indoyug/parts/reverse-laminar-air-flow-unit-part-4.webp", alt: "Reverse flow laminar workstation: SS 304 perforated work surface", caption: "SS 304 perforated work surface" },
      { src: "/assets/products/indoyug/parts/reverse-laminar-air-flow-unit-part-5.webp", alt: "Reverse flow laminar workstation: Control panel (analog / digital)", caption: "Control panel (analog / digital)" },
      { src: "/assets/products/indoyug/parts/reverse-laminar-air-flow-unit-part-6.webp", alt: "Reverse flow laminar workstation: Centrifugal / EC blower (low noise)", caption: "Centrifugal / EC blower (low noise)" },
      { src: "/assets/products/indoyug/parts/reverse-laminar-air-flow-unit-part-7.webp", alt: "Reverse flow laminar workstation: Toughened glass sash (manual / motorized)", caption: "Toughened glass sash (manual / motorized)" },
      { src: "/assets/products/indoyug/parts/reverse-laminar-air-flow-unit-part-8.webp", alt: "Reverse flow laminar workstation: Lockable caster wheel", caption: "Lockable caster wheel" },
      { src: "/assets/products/indoyug/parts/reverse-laminar-air-flow-unit-alt-part-4.webp", alt: "Reverse flow laminar (RLF-12 / RLF-15): SS 304 work surface (perforated)", caption: "SS 304 work surface (perforated)" },
      { src: "/assets/products/indoyug/parts/reverse-laminar-air-flow-unit-alt-part-6.webp", alt: "Reverse flow laminar (RLF-12 / RLF-15): Centrifugal blower (low noise)", caption: "Centrifugal blower (low noise)" },
      { src: "/assets/products/indoyug/parts/reverse-laminar-air-flow-unit-alt-part-7.webp", alt: "Reverse flow laminar (RLF-12 / RLF-15): Side glass panel", caption: "Side glass panel" },
      { src: "/assets/products/indoyug/parts/reverse-laminar-air-flow-unit-alt-part-8.webp", alt: "Reverse flow laminar (RLF-12 / RLF-15): Return air grille", caption: "Return air grille" },
    ],
  },
  'garment-storage-cabinets': {
    dimensions: [
      { src: "/assets/products/indoyug/parts/temperature-garment-cabinet-dimensions.webp", alt: "Temperature garment cabinet — standard dimensions, front and side view drawing (mm)", caption: "Temperature garment cabinet" },
      { src: "/assets/products/indoyug/parts/personnel-locker-18-door-dimensions.webp", alt: "Personnel locker — 18 door — standard dimensions, front and side view drawing (mm)", caption: "Personnel locker — 18 door" },
      { src: "/assets/products/indoyug/parts/mobile-locker-52-door-dimensions.webp", alt: "Mobile locker — 52 door — standard dimensions, front and side view drawing (mm)", caption: "Mobile locker — 52 door" },
    ],
    airflow: [],
    components: [
      { src: "/assets/products/indoyug/parts/temperature-garment-cabinet-part-1.webp", alt: "Temperature garment cabinet: Internal arrangement — adjustable perforated SS shelves", caption: "Internal arrangement — adjustable perforated SS shelves" },
      { src: "/assets/products/indoyug/parts/personnel-locker-18-door-part-1.webp", alt: "Personnel locker — 18 door: Cam lock with key (each door)", caption: "Cam lock with key (each door)" },
      { src: "/assets/products/indoyug/parts/personnel-locker-18-door-part-2.webp", alt: "Personnel locker — 18 door: Ventilation louvers", caption: "Ventilation louvers" },
      { src: "/assets/products/indoyug/parts/personnel-locker-18-door-part-3.webp", alt: "Personnel locker — 18 door: Label holder", caption: "Label holder" },
      { src: "/assets/products/indoyug/parts/personnel-locker-18-door-part-4.webp", alt: "Personnel locker — 18 door: Adjustable leveller", caption: "Adjustable leveller" },
      { src: "/assets/products/indoyug/parts/mobile-locker-52-door-part-1.webp", alt: "Mobile locker — 52 door: Individual mobile compartment with key lock", caption: "Individual mobile compartment with key lock" },
      { src: "/assets/products/indoyug/parts/mobile-locker-52-door-part-2.webp", alt: "Mobile locker — 52 door: Cam lock (with 2 keys)", caption: "Cam lock (with 2 keys)" },
    ],
  },
  'horizontal-laminar-airflow': {
    dimensions: [
      { src: "/assets/products/indoyug/parts/horizontal-laminar-airflow-dimensions.webp", alt: "HALF — floor-standing unit — standard dimensions, front and side view drawing (mm)", caption: "HALF — floor-standing unit" },
      { src: "/assets/products/indoyug/parts/horizontal-laminar-airflow-alt-dimensions.webp", alt: "HLAF — clean bench — standard dimensions, front and side view drawing (mm)", caption: "HLAF — clean bench" },
    ],
    airflow: [
      { src: "/assets/products/indoyug/parts/horizontal-laminar-airflow-airflow.webp", alt: "HALF — floor-standing unit — airflow diagram", caption: "HALF — floor-standing unit" },
      { src: "/assets/products/indoyug/parts/horizontal-laminar-airflow-alt-airflow.webp", alt: "HLAF — clean bench — airflow diagram", caption: "HLAF — clean bench" },
    ],
    components: [
      { src: "/assets/products/indoyug/parts/horizontal-laminar-airflow-part-1.webp", alt: "HALF — floor-standing unit: Differential pressure gauge", caption: "Differential pressure gauge" },
      { src: "/assets/products/indoyug/parts/horizontal-laminar-airflow-part-2.webp", alt: "HALF — floor-standing unit: LED light (≥ 300 Lux)", caption: "LED light (≥ 300 Lux)" },
      { src: "/assets/products/indoyug/parts/horizontal-laminar-airflow-part-3.webp", alt: "HALF — floor-standing unit: SS 304 perforated work surface", caption: "SS 304 perforated work surface" },
      { src: "/assets/products/indoyug/parts/horizontal-laminar-airflow-part-4.webp", alt: "HALF — floor-standing unit: HEPA filter (H14)", caption: "HEPA filter (H14)" },
      { src: "/assets/products/indoyug/parts/horizontal-laminar-airflow-part-5.webp", alt: "HALF — floor-standing unit: Centrifugal blower (low noise)", caption: "Centrifugal blower (low noise)" },
      { src: "/assets/products/indoyug/parts/horizontal-laminar-airflow-part-6.webp", alt: "HALF — floor-standing unit: Toughened glass side panel", caption: "Toughened glass side panel" },
      { src: "/assets/products/indoyug/parts/horizontal-laminar-airflow-part-7.webp", alt: "HALF — floor-standing unit: Control panel (analog / digital)", caption: "Control panel (analog / digital)" },
      { src: "/assets/products/indoyug/parts/horizontal-laminar-airflow-part-8.webp", alt: "HALF — floor-standing unit: Lockable caster wheel", caption: "Lockable caster wheel" },
      { src: "/assets/products/indoyug/parts/horizontal-laminar-airflow-alt-part-4.webp", alt: "HLAF — clean bench: SS 304 work surface", caption: "SS 304 work surface" },
      { src: "/assets/products/indoyug/parts/horizontal-laminar-airflow-alt-part-8.webp", alt: "HLAF — clean bench: Adjustable feet", caption: "Adjustable feet" },
    ],
  },
  'biosafety-cabinets': {
    dimensions: [
      { src: "/assets/products/indoyug/parts/biosafety-cabinet-alt-dimensions.webp", alt: "Biosafety cabinet Class II Type A2 — standard dimensions, front and side view drawing (mm)", caption: "Biosafety cabinet Class II Type A2" },
      { src: "/assets/products/indoyug/parts/biosafety-cabinet-class-ii-dimensions.webp", alt: "Biosafety cabinet Class II Type A2 (alternate build) — standard dimensions, front and side view drawing (mm)", caption: "Biosafety cabinet Class II Type A2 (alternate build)" },
    ],
    airflow: [
      { src: "/assets/products/indoyug/parts/biosafety-cabinet-alt-airflow.webp", alt: "Biosafety cabinet Class II Type A2 — airflow diagram", caption: "Biosafety cabinet Class II Type A2" },
      { src: "/assets/products/indoyug/parts/biosafety-cabinet-class-ii-airflow.webp", alt: "Biosafety cabinet Class II Type A2 (alternate build) — airflow diagram", caption: "Biosafety cabinet Class II Type A2 (alternate build)" },
    ],
    components: [
      { src: "/assets/products/indoyug/parts/biosafety-cabinet-alt-part-1.webp", alt: "Biosafety cabinet Class II Type A2: LCD touch control panel", caption: "LCD touch control panel" },
      { src: "/assets/products/indoyug/parts/biosafety-cabinet-alt-part-2.webp", alt: "Biosafety cabinet Class II Type A2: LED light", caption: "LED light" },
      { src: "/assets/products/indoyug/parts/biosafety-cabinet-alt-part-3.webp", alt: "Biosafety cabinet Class II Type A2: UV germicidal light (254 nm)", caption: "UV germicidal light (254 nm)" },
      { src: "/assets/products/indoyug/parts/biosafety-cabinet-alt-part-4.webp", alt: "Biosafety cabinet Class II Type A2: SS 304 work surface", caption: "SS 304 work surface" },
      { src: "/assets/products/indoyug/parts/biosafety-cabinet-alt-part-5.webp", alt: "Biosafety cabinet Class II Type A2: Toughened glass sash (manual / motorized)", caption: "Toughened glass sash (manual / motorized)" },
      { src: "/assets/products/indoyug/parts/biosafety-cabinet-alt-part-6.webp", alt: "Biosafety cabinet Class II Type A2: HEPA filter (H14)", caption: "HEPA filter (H14)" },
      { src: "/assets/products/indoyug/parts/biosafety-cabinet-alt-part-7.webp", alt: "Biosafety cabinet Class II Type A2: EC centrifugal blower (low noise)", caption: "EC centrifugal blower (low noise)" },
      { src: "/assets/products/indoyug/parts/biosafety-cabinet-alt-part-8.webp", alt: "Biosafety cabinet Class II Type A2: Optional service valve & 6M socket", caption: "Optional service valve & 6M socket" },
    ],
  },
  'laminar-air-flow-units': {
    dimensions: [
      { src: "/assets/products/indoyug/parts/vertical-laminar-airflow-dimensions.webp", alt: "VAF — vertical air flow laminar — standard dimensions, front and side view drawing (mm)", caption: "VAF — vertical air flow laminar" },
      { src: "/assets/products/indoyug/parts/vertical-laminar-cleanbench-dimensions.webp", alt: "VALF — vertical air flow laminar — standard dimensions, front and side view drawing (mm)", caption: "VALF — vertical air flow laminar" },
    ],
    airflow: [
      { src: "/assets/products/indoyug/parts/vertical-laminar-airflow-airflow.webp", alt: "VAF — vertical air flow laminar — airflow diagram", caption: "VAF — vertical air flow laminar" },
      { src: "/assets/products/indoyug/parts/vertical-laminar-cleanbench-airflow.webp", alt: "VALF — vertical air flow laminar — airflow diagram", caption: "VALF — vertical air flow laminar" },
    ],
    components: [
      { src: "/assets/products/indoyug/parts/vertical-laminar-airflow-part-1.webp", alt: "VAF — vertical air flow laminar: Differential pressure gauge", caption: "Differential pressure gauge" },
      { src: "/assets/products/indoyug/parts/vertical-laminar-airflow-part-2.webp", alt: "VAF — vertical air flow laminar: LED light", caption: "LED light" },
      { src: "/assets/products/indoyug/parts/vertical-laminar-airflow-part-3.webp", alt: "VAF — vertical air flow laminar: HEPA filter (H14)", caption: "HEPA filter (H14)" },
      { src: "/assets/products/indoyug/parts/vertical-laminar-airflow-part-4.webp", alt: "VAF — vertical air flow laminar: SS 304 perforated work surface", caption: "SS 304 perforated work surface" },
      { src: "/assets/products/indoyug/parts/vertical-laminar-airflow-part-5.webp", alt: "VAF — vertical air flow laminar: Control panel", caption: "Control panel" },
      { src: "/assets/products/indoyug/parts/vertical-laminar-airflow-part-6.webp", alt: "VAF — vertical air flow laminar: Centrifugal blower (low noise)", caption: "Centrifugal blower (low noise)" },
      { src: "/assets/products/indoyug/parts/vertical-laminar-airflow-part-7.webp", alt: "VAF — vertical air flow laminar: Toughened glass side panel", caption: "Toughened glass side panel" },
      { src: "/assets/products/indoyug/parts/vertical-laminar-airflow-part-8.webp", alt: "VAF — vertical air flow laminar: Adjustable feet / caster", caption: "Adjustable feet / caster" },
      { src: "/assets/products/indoyug/parts/vertical-laminar-cleanbench-part-4.webp", alt: "VALF — vertical air flow laminar: SS 304 work surface (smooth / perforated)", caption: "SS 304 work surface (smooth / perforated)" },
      { src: "/assets/products/indoyug/parts/vertical-laminar-cleanbench-part-8.webp", alt: "VALF — vertical air flow laminar: Lockable caster wheel", caption: "Lockable caster wheel" },
    ],
  },
  'wall-benches': {
    dimensions: [
      { src: "/assets/products/indoyug/parts/wall-bench-dimensions.webp", alt: "Wall bench unit — standard dimensions, front and side view drawing (mm)", caption: "Standard dimensions (mm)" },
    ],
    airflow: [],
    components: [
      { src: "/assets/products/indoyug/parts/wall-bench-part-1.webp", alt: "Wall bench unit: Worktop (HPL / granite / epoxy resin)", caption: "Worktop (HPL / granite / epoxy resin)" },
      { src: "/assets/products/indoyug/parts/wall-bench-part-2.webp", alt: "Wall bench unit: Drawer with telescopic slide", caption: "Drawer with telescopic slide" },
      { src: "/assets/products/indoyug/parts/wall-bench-part-3.webp", alt: "Wall bench unit: Hinge (Olive / Hettich / Godrej)", caption: "Hinge (Olive / Hettich / Godrej)" },
      { src: "/assets/products/indoyug/parts/wall-bench-part-4.webp", alt: "Wall bench unit: Service raceway with electricals (6M socket)", caption: "Service raceway with electricals (6M socket)" },
      { src: "/assets/products/indoyug/parts/wall-bench-part-5.webp", alt: "Wall bench unit: Adjustable levelling foot", caption: "Adjustable levelling foot" },
    ],
  },
  'island-benches': {
    dimensions: [
      { src: "/assets/products/indoyug/parts/island-bench-dimensions.webp", alt: "Island bench unit — standard dimensions, front and side view drawing (mm)", caption: "Standard dimensions (mm)" },
    ],
    airflow: [],
    components: [
      { src: "/assets/products/indoyug/parts/island-bench-part-1.webp", alt: "Island bench unit: Worktop (HPL / granite / epoxy resin)", caption: "Worktop (HPL / granite / epoxy resin)" },
      { src: "/assets/products/indoyug/parts/island-bench-part-2.webp", alt: "Island bench unit: Drawer with telescopic slide", caption: "Drawer with telescopic slide" },
      { src: "/assets/products/indoyug/parts/island-bench-part-3.webp", alt: "Island bench unit: Hinge (Olive / Hettich / Godrej)", caption: "Hinge (Olive / Hettich / Godrej)" },
      { src: "/assets/products/indoyug/parts/island-bench-part-4.webp", alt: "Island bench unit: Service raceway with electricals (6M socket)", caption: "Service raceway with electricals (6M socket)" },
      { src: "/assets/products/indoyug/parts/island-bench-part-5.webp", alt: "Island bench unit: Gas valve (optional)", caption: "Gas valve (optional)" },
      { src: "/assets/products/indoyug/parts/island-bench-part-6.webp", alt: "Island bench unit: 3-way tap (optional)", caption: "3-way tap (optional)" },
    ],
  },
  'corner-sink-units': {
    dimensions: [
      { src: "/assets/products/indoyug/parts/corner-sink-unit-dimensions.webp", alt: "Corner sink unit — standard dimensions, front and side view drawing (mm)", caption: "Standard dimensions (mm)" },
    ],
    airflow: [],
    components: [
      { src: "/assets/products/indoyug/parts/corner-sink-unit-part-1.webp", alt: "Corner sink unit: Worktop (HPL / granite / epoxy resin)", caption: "Worktop (HPL / granite / epoxy resin)" },
      { src: "/assets/products/indoyug/parts/corner-sink-unit-part-2.webp", alt: "Corner sink unit: PP sink (600 × 355 × 245 mm)", caption: "PP sink (600 × 355 × 245 mm)" },
      { src: "/assets/products/indoyug/parts/corner-sink-unit-part-3.webp", alt: "Corner sink unit: 3-way laboratory tap (hot / cold / DI water)", caption: "3-way laboratory tap (hot / cold / DI water)" },
      { src: "/assets/products/indoyug/parts/corner-sink-unit-part-4.webp", alt: "Corner sink unit: Hinge (Olive / Hettich / Godrej)", caption: "Hinge (Olive / Hettich / Godrej)" },
      { src: "/assets/products/indoyug/parts/corner-sink-unit-part-5.webp", alt: "Corner sink unit: Adjustable levelling foot", caption: "Adjustable levelling foot" },
      { src: "/assets/products/indoyug/parts/corner-sink-unit-part-6.webp", alt: "Corner sink unit: Handle (SS / aluminium)", caption: "Handle (SS / aluminium)" },
    ],
  },
  'laboratory-sink-units': {
    dimensions: [
      { src: "/assets/products/indoyug/parts/laboratory-sink-unit-dimensions.webp", alt: "Laboratory sink unit — standard dimensions, front and side view drawing (mm)", caption: "Standard dimensions (mm)" },
    ],
    airflow: [],
    components: [
      { src: "/assets/products/indoyug/parts/laboratory-sink-unit-part-1.webp", alt: "Laboratory sink unit: Worktop (HPL / granite / epoxy resin)", caption: "Worktop (HPL / granite / epoxy resin)" },
      { src: "/assets/products/indoyug/parts/laboratory-sink-unit-part-2.webp", alt: "Laboratory sink unit: PP sink (600 × 355 × 245 mm)", caption: "PP sink (600 × 355 × 245 mm)" },
      { src: "/assets/products/indoyug/parts/laboratory-sink-unit-part-3.webp", alt: "Laboratory sink unit: 3-way laboratory tap (hot / cold / DI water)", caption: "3-way laboratory tap (hot / cold / DI water)" },
      { src: "/assets/products/indoyug/parts/laboratory-sink-unit-part-4.webp", alt: "Laboratory sink unit: Hinge (Olive / Hettich / Godrej)", caption: "Hinge (Olive / Hettich / Godrej)" },
      { src: "/assets/products/indoyug/parts/laboratory-sink-unit-part-5.webp", alt: "Laboratory sink unit: Adjustable levelling foot", caption: "Adjustable levelling foot" },
      { src: "/assets/products/indoyug/parts/laboratory-sink-unit-part-6.webp", alt: "Laboratory sink unit: Handle (SS / aluminium)", caption: "Handle (SS / aluminium)" },
    ],
  },
  'fume-hoods': {
    dimensions: [
      { src: "/assets/products/indoyug/parts/fume-hood-dimensions.webp", alt: "Fume hood — standard dimensions, front and side view drawing (mm)", caption: "Standard dimensions (mm)" },
    ],
    airflow: [],
    components: [
      { src: "/assets/products/indoyug/parts/fume-hood-part-1.webp", alt: "Fume hood: Three point baffle", caption: "Three point baffle" },
      { src: "/assets/products/indoyug/parts/fume-hood-part-2.webp", alt: "Fume hood: Airfoil (aerofoil)", caption: "Airfoil (aerofoil)" },
      { src: "/assets/products/indoyug/parts/fume-hood-part-3.webp", alt: "Fume hood: Sliding sash (toughened glass)", caption: "Sliding sash (toughened glass)" },
      { src: "/assets/products/indoyug/parts/fume-hood-part-4.webp", alt: "Fume hood: Service valves (gas / water / air)", caption: "Service valves (gas / water / air)" },
      { src: "/assets/products/indoyug/parts/fume-hood-part-5.webp", alt: "Fume hood: Electrical sockets", caption: "Electrical sockets" },
      { src: "/assets/products/indoyug/parts/fume-hood-part-6.webp", alt: "Fume hood: Air flow monitor (optional)", caption: "Air flow monitor (optional)" },
    ],
  },
  'ductless-fume-hood': {
    dimensions: [
      { src: "/assets/products/indoyug/parts/ductless-fume-hood-dimensions.webp", alt: "Ductless fume hood — standard dimensions, front and side view drawing (mm)", caption: "Standard dimensions (mm)" },
    ],
    airflow: [],
    components: [
      { src: "/assets/products/indoyug/parts/ductless-fume-hood-part-1.webp", alt: "Ductless fume hood: Differential pressure / filter life gauge", caption: "Differential pressure / filter life gauge" },
      { src: "/assets/products/indoyug/parts/ductless-fume-hood-part-2.webp", alt: "Ductless fume hood: Control panel with indication", caption: "Control panel with indication" },
      { src: "/assets/products/indoyug/parts/ductless-fume-hood-part-3.webp", alt: "Ductless fume hood: Baffle system (uniform airflow)", caption: "Baffle system (uniform airflow)" },
      { src: "/assets/products/indoyug/parts/ductless-fume-hood-part-4.webp", alt: "Ductless fume hood: Chemical resistant worktop (epoxy / HPL / SS)", caption: "Chemical resistant worktop (epoxy / HPL / SS)" },
      { src: "/assets/products/indoyug/parts/ductless-fume-hood-part-5.webp", alt: "Ductless fume hood: Service fittings (water / gas / power)", caption: "Service fittings (water / gas / power)" },
      { src: "/assets/products/indoyug/parts/ductless-fume-hood-part-6.webp", alt: "Ductless fume hood: Carbon filter system (recirculating type)", caption: "Carbon filter system (recirculating type)" },
    ],
  },
  'laboratory-storage-cabinets': {
    dimensions: [
      { src: "/assets/products/indoyug/parts/glassware-storage-cabinet-dimensions.webp", alt: "Glassware storage cabinet — standard dimensions, front and side view drawing (mm)", caption: "Glassware storage cabinet" },
      { src: "/assets/products/indoyug/parts/chemical-storage-cabinet-dimensions.webp", alt: "Chemical storage cabinet — standard dimensions, front and side view drawing (mm)", caption: "Chemical storage cabinet" },
      { src: "/assets/products/indoyug/parts/file-storage-cabinet-dimensions.webp", alt: "File storage cabinet — standard dimensions, front and side view drawing (mm)", caption: "File storage cabinet" },
      { src: "/assets/products/indoyug/parts/overhead-cabinet-dimensions.webp", alt: "Overhead cabinet — standard dimensions, front and side view drawing (mm)", caption: "Overhead cabinet" },
      { src: "/assets/products/indoyug/parts/display-cabinet-dimensions.webp", alt: "Display cabinet — standard dimensions, front and side view drawing (mm)", caption: "Display cabinet" },
    ],
    airflow: [],
    components: [
      { src: "/assets/products/indoyug/parts/glassware-storage-cabinet-part-1.webp", alt: "Glassware storage cabinet: GI / MS sheet (0.8 / 1.0 / 1.2 mm)", caption: "GI / MS sheet (0.8 / 1.0 / 1.2 mm)" },
      { src: "/assets/products/indoyug/parts/glassware-storage-cabinet-part-2.webp", alt: "Glassware storage cabinet: Powder coating (50 – 70 µm)", caption: "Powder coating (50 – 70 µm)" },
      { src: "/assets/products/indoyug/parts/glassware-storage-cabinet-part-3.webp", alt: "Glassware storage cabinet: Hinge (Olive / Hettich / Godrej)", caption: "Hinge (Olive / Hettich / Godrej)" },
      { src: "/assets/products/indoyug/parts/glassware-storage-cabinet-part-4.webp", alt: "Glassware storage cabinet: Cam lock / key lock", caption: "Cam lock / key lock" },
      { src: "/assets/products/indoyug/parts/glassware-storage-cabinet-part-5.webp", alt: "Glassware storage cabinet: Toughened glass (4 – 5 mm)", caption: "Toughened glass (4 – 5 mm)" },
      { src: "/assets/products/indoyug/parts/glassware-storage-cabinet-part-6.webp", alt: "Glassware storage cabinet: Adjustable shelf (heavy duty)", caption: "Adjustable shelf (heavy duty)" },
      { src: "/assets/products/indoyug/parts/glassware-storage-cabinet-part-7.webp", alt: "Glassware storage cabinet: Adjustable levelling foot", caption: "Adjustable levelling foot" },
      { src: "/assets/products/indoyug/parts/chemical-storage-cabinet-part-1.webp", alt: "Chemical storage cabinet: Spill tray shelf (raised edge 25 – 50 mm)", caption: "Spill tray shelf (raised edge 25 – 50 mm)" },
      { src: "/assets/products/indoyug/parts/chemical-storage-cabinet-part-8.webp", alt: "Chemical storage cabinet: Ventilation louvre (bottom)", caption: "Ventilation louvre (bottom)" },
      { src: "/assets/products/indoyug/parts/file-storage-cabinet-part-5.webp", alt: "File storage cabinet: Lock with key (cam lock)", caption: "Lock with key (cam lock)" },
      { src: "/assets/products/indoyug/parts/overhead-cabinet-part-6.webp", alt: "Overhead cabinet: Handle (SS / aluminium)", caption: "Handle (SS / aluminium)" },
      { src: "/assets/products/indoyug/parts/display-cabinet-part-1.webp", alt: "Display cabinet: Adjustable glass shelf", caption: "Adjustable glass shelf" },
      { src: "/assets/products/indoyug/parts/display-cabinet-part-2.webp", alt: "Display cabinet: D-handle (SS)", caption: "D-handle (SS)" },
      { src: "/assets/products/indoyug/parts/display-cabinet-part-4.webp", alt: "Display cabinet: Ventilation louvers (optional)", caption: "Ventilation louvers (optional)" },
    ],
  },
  'laboratory-accessories': {
    dimensions: [
      { src: "/assets/products/indoyug/parts/peg-board-dimensions.webp", alt: "Laboratory peg board — standard dimensions, front and side view drawing (mm)", caption: "Standard dimensions (mm)" },
    ],
    airflow: [],
    components: [
      { src: "/assets/products/indoyug/parts/peg-board-part-1.webp", alt: "Laboratory peg board: Peg – PP (removable)", caption: "Peg – PP (removable)" },
      { src: "/assets/products/indoyug/parts/peg-board-part-2.webp", alt: "Laboratory peg board: Slot detail", caption: "Slot detail" },
      { src: "/assets/products/indoyug/parts/peg-board-part-3.webp", alt: "Laboratory peg board: Powder coated finish", caption: "Powder coated finish" },
      { src: "/assets/products/indoyug/parts/peg-board-part-4.webp", alt: "Laboratory peg board: Peg arrangement", caption: "Peg arrangement" },
    ],
  },
  'emergency-safety-shower-eye-wash': {
    dimensions: [
      { src: "/assets/products/indoyug/parts/emergency-safety-shower-dimensions.webp", alt: "Emergency safety shower & eye wash — standard dimensions, front and side view drawing (mm)", caption: "Standard dimensions (mm)" },
    ],
    airflow: [],
    components: [
      { src: "/assets/products/indoyug/parts/emergency-safety-shower-part-1.webp", alt: "Emergency safety shower & eye wash: Shower head (high flow, anti-corrosion)", caption: "Shower head (high flow, anti-corrosion)" },
      { src: "/assets/products/indoyug/parts/emergency-safety-shower-part-2.webp", alt: "Emergency safety shower & eye wash: Pull handle (shower activation)", caption: "Pull handle (shower activation)" },
      { src: "/assets/products/indoyug/parts/emergency-safety-shower-part-3.webp", alt: "Emergency safety shower & eye wash: Eye wash nozzles (soft flow, aerated)", caption: "Eye wash nozzles (soft flow, aerated)" },
      { src: "/assets/products/indoyug/parts/emergency-safety-shower-part-4.webp", alt: "Emergency safety shower & eye wash: Push plate (eye wash activation)", caption: "Push plate (eye wash activation)" },
      { src: "/assets/products/indoyug/parts/emergency-safety-shower-part-5.webp", alt: "Emergency safety shower & eye wash: Floor mount base (SS 304)", caption: "Floor mount base (SS 304)" },
    ],
  },
  'anti-vibration-tables': {
    dimensions: [
      { src: "/assets/products/indoyug/parts/anti-vibration-table-dimensions.webp", alt: "Anti-vibration table — standard dimensions, front and side view drawing (mm)", caption: "Standard dimensions (mm)" },
    ],
    airflow: [],
    components: [
      { src: "/assets/products/indoyug/parts/anti-vibration-table-part-1.webp", alt: "Anti-vibration table: Granite top (18 – 20 mm)", caption: "Granite top (18 – 20 mm)" },
      { src: "/assets/products/indoyug/parts/anti-vibration-table-part-2.webp", alt: "Anti-vibration table: Vibration isolation pad", caption: "Vibration isolation pad" },
      { src: "/assets/products/indoyug/parts/anti-vibration-table-part-3.webp", alt: "Anti-vibration table: Adjustable leveler", caption: "Adjustable leveler" },
      { src: "/assets/products/indoyug/parts/anti-vibration-table-part-4.webp", alt: "Anti-vibration table: Powder coated frame", caption: "Powder coated frame" },
    ],
  },
};

export const getDatasheetMedia = (slug: string): DatasheetMedia | undefined => datasheetMedia[slug];
