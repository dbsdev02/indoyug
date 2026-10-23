import { Helmet } from 'react-helmet-async';
import { company } from '../../data/company';

interface SEOProps {
  title: string;
  description: string;
  path: string;
  image?: string;
  type?: 'website' | 'article' | 'product';
  noindex?: boolean;
  jsonLd?: object | object[];
}

/** Per-page metadata: title, description, canonical, Open Graph, Twitter and JSON-LD. */
export function SEO({ title, description, path, image = '/assets/projects/microbiology-cleanroom-lab.webp', type = 'website', noindex, jsonLd }: SEOProps) {
  const full = title.includes('Indoyug') ? title : `${title} | Indoyug Clean Tech LLP`;
  const url = `${company.siteUrl}${path === '/' ? '/' : path}`;
  const img = image.startsWith('http') ? image : `${company.siteUrl}${image}`;
  const ld = jsonLd ? (Array.isArray(jsonLd) ? jsonLd : [jsonLd]) : [];
  return (
    <Helmet>
      <title>{full}</title>
      <meta name="description" content={description} />
      <link rel="canonical" href={url} />
      {noindex && <meta name="robots" content="noindex, follow" />}
      <meta property="og:site_name" content={company.name} />
      <meta property="og:type" content={type === 'product' ? 'website' : type} />
      <meta property="og:title" content={full} />
      <meta property="og:description" content={description} />
      <meta property="og:url" content={url} />
      <meta property="og:image" content={img} />
      <meta property="og:locale" content="en_IN" />
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={full} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={img} />
      {ld.map((o, i) => (
        <script key={i} type="application/ld+json">{JSON.stringify(o)}</script>
      ))}
    </Helmet>
  );
}

export const organizationJsonLd = () => ({
  '@context': 'https://schema.org',
  '@type': 'Organization',
  '@id': `${company.siteUrl}/#organization`,
  name: company.name,
  url: company.siteUrl,
  logo: `${company.siteUrl}${company.logo}`,
  email: company.email,
  telephone: company.phones.map((p) => p.tel),
  address: {
    '@type': 'PostalAddress',
    streetAddress: `${company.address.line1}, ${company.address.line2}`,
    addressLocality: company.address.city,
    postalCode: company.address.postalCode,
    addressRegion: company.address.region,
    addressCountry: company.address.countryCode,
  },
  contactPoint: company.phones.map((p) => ({ '@type': 'ContactPoint', telephone: p.tel, contactType: 'sales', areaServed: 'IN', availableLanguage: ['en', 'hi', 'gu'] })),
});
