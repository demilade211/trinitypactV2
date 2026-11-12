import './globals.css'
import StyledComponentsRegistry from './registry'
import { serif, sans } from './fonts'
import JsonLd from '@/components/landing/JsonLd'
import { SITE } from '@/components/landing/site'
import { SITE_URL, organizationJsonLd, websiteJsonLd } from '@/components/landing/seo'

const DESCRIPTION =
  'TPL Trinitypact Limited is a real estate development and investment company in Lagos, Nigeria — residential and commercial property, project management, property management and construction.'

export const metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: `${SITE.name} | Real Estate Development in Lagos, Nigeria`,
    template: `%s | ${SITE.name}`,
  },
  description: DESCRIPTION,
  applicationName: SITE.name,
  authors: [{ name: SITE.name, url: SITE_URL }],
  creator: SITE.name,
  publisher: SITE.name,
  category: 'Real Estate',
  alternates: { canonical: '/' },
  openGraph: {
    title: `${SITE.name} | Real Estate Development in Lagos, Nigeria`,
    description: DESCRIPTION,
    url: '/',
    siteName: SITE.name,
    locale: 'en_NG',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: `${SITE.name} | Real Estate Development in Lagos, Nigeria`,
    description: DESCRIPTION,
  },
  robots: {
    index: true,
    follow: true,
    googleBot: { index: true, follow: true, 'max-image-preview': 'large', 'max-snippet': -1, 'max-video-preview': -1 },
  },
  // Set these in the hosting environment once the site is verified in each console.
  verification: {
    google: process.env.NEXT_PUBLIC_GOOGLE_SITE_VERIFICATION,
    other: process.env.NEXT_PUBLIC_BING_SITE_VERIFICATION
      ? { 'msvalidate.01': process.env.NEXT_PUBLIC_BING_SITE_VERIFICATION }
      : undefined,
  },
}

export const viewport = {
  themeColor: '#191917',
  colorScheme: 'light',
}

export default function RootLayout({ children }) {
  return (
    // data-scroll-behavior: Next 16 only resets smooth scrolling on route changes when asked to.
    <html lang='en' className={`${serif.variable} ${sans.variable}`} data-scroll-behavior='smooth'>
      <body>
        <JsonLd data={[organizationJsonLd, websiteJsonLd]} />
        <StyledComponentsRegistry>{children}</StyledComponentsRegistry>
      </body>
    </html>
  )
}
