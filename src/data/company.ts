/**
 * Company facts. Everything here is taken from the Indoyug brochure (V5) and
 * the existing www.indoyug.in website. Do not add claims without a source.
 */
export const company = {
  name: 'Indoyug Clean Tech LLP',
  shortName: 'Indoyug',
  tagline: 'Precision in Purity',
  siteUrl: (import.meta.env.VITE_SITE_URL as string | undefined)?.replace(/\/$/, '') || 'https://www.indoyug.in',
  address: {
    line1: 'J-809, III Phase, GIDC',
    line2: 'Near Gujarat Weight Bridge',
    city: 'Umbergaon',
    postalCode: '396171',
    region: 'Gujarat',
    country: 'India',
    countryCode: 'IN',
  },
  /** Exactly as printed in the brochure. */
  addressOneLine: 'J-809, III Phase, GIDC, Near Gujarat Weight Bridge, Umbergaon – 396171, Gujarat, India',
  phones: [
    { display: '+91 75672 24020', tel: '+917567224020' },
    { display: '+91 87584 60885', tel: '+918758460885' },
  ],
  email: 'info@indoyug.in',
  /** Google Maps listing linked from the current website — confirm the pin before launch. */
  mapsUrl: 'https://maps.app.goo.gl/n4314jnKzUD4Z7tw8',
  mapsEmbedUrl:
    'https://www.google.com/maps?q=' +
    encodeURIComponent('J-809, III Phase, GIDC, Umbergaon, Gujarat 396171, India') +
    '&output=embed',
  /** Brochure, "Why Choose Us" page. */
  yearsExperience: '11+',
  brochureUrl: '/assets/resources/indoyug-company-brochure.pdf',
  logo: '/assets/brand/indoyug-logo.png',
  logoWhite: '/assets/brand/indoyug-logo-white.png',
} as const;

/** Brochure "Why choose Indoyug" pillars (page 3). */
export const brochurePillars = [
  'High-Quality Manufacturing',
  'Precision Engineering',
  'Superior Airflow Technology',
  'End-to-End Support',
  'Laminar Airflow Systems',
  'Planning & Designing',
  'Fully Customisable',
] as const;
