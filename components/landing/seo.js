import { SITE } from './site'

// Canonical origin. Every canonical URL, sitemap entry and structured-data
// @id is built from this — keep it in sync with the production domain.
export const SITE_URL = 'https://www.tpltrinitypact.com'

export const ORG_ID = `${SITE_URL}/#organization`
export const absolute = (path = '/') => new URL(path, SITE_URL).toString()

// Per-page metadata. Next.js shallow-merges `openGraph` and `twitter`, so each
// page restates the shared fields rather than relying on the root layout's.
// Share images come from the opengraph-image files in each route segment.
export const pageMetadata = ({ title, description, path }) => ({
  title,
  description,
  alternates: { canonical: path },
  openGraph: {
    title: title ? `${title} | ${SITE.name}` : undefined,
    description,
    url: path,
    siteName: SITE.name,
    locale: 'en_NG',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: title ? `${title} | ${SITE.name}` : undefined,
    description,
  },
})

// The company as a local real-estate business. Facts only — no ratings or
// review markup: Google disallows self-serving review snippets.
export const organizationJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'RealEstateAgent',
  '@id': ORG_ID,
  name: SITE.name,
  alternateName: 'TPL TrinityPact',
  url: SITE_URL,
  logo: absolute('/images/components/logo.png'),
  image: absolute('/opengraph-image.jpg'),
  description:
    'Real estate development and investment company in Lagos, Nigeria, delivering residential and commercial property, project management, property management and construction.',
  email: SITE.email,
  telephone: SITE.phones[0],
  address: {
    '@type': 'PostalAddress',
    streetAddress: SITE.postal.street,
    addressLocality: SITE.postal.locality,
    addressRegion: SITE.postal.region,
    addressCountry: SITE.postal.country,
  },
  areaServed: { '@type': 'City', name: 'Lagos' },
  openingHoursSpecification: {
    '@type': 'OpeningHoursSpecification',
    dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'],
    opens: '08:00',
    closes: '18:00',
  },
  contactPoint: SITE.phones.map((telephone) => ({
    '@type': 'ContactPoint',
    telephone,
    email: SITE.email,
    contactType: 'customer service',
    areaServed: 'NG',
    availableLanguage: 'English',
  })),
  founder: { '@type': 'Person', name: 'Prince Adedayo Ogunkoya', jobTitle: 'Founder & Chief Executive Officer' },
  sameAs: SITE.social.map((s) => s.href),
}

export const websiteJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'WebSite',
  '@id': `${SITE_URL}/#website`,
  name: SITE.name,
  url: SITE_URL,
  inLanguage: 'en-NG',
  publisher: { '@id': ORG_ID },
}

export const breadcrumbJsonLd = (name, path) => ({
  '@context': 'https://schema.org',
  '@type': 'BreadcrumbList',
  itemListElement: [
    { '@type': 'ListItem', position: 1, name: 'Home', item: SITE_URL },
    { '@type': 'ListItem', position: 2, name, item: absolute(path) },
  ],
})

export const webPageJsonLd = (type, name, path, description) => ({
  '@context': 'https://schema.org',
  '@type': type,
  name,
  url: absolute(path),
  description,
  isPartOf: { '@id': `${SITE_URL}/#website` },
  about: { '@id': ORG_ID },
  inLanguage: 'en-NG',
})
