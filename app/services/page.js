import LandingShell from '@/components/landing/LandingShell'
import PageHero from '@/components/landing/PageHero'
import Closing from '../subcomponents/Closing'
import Overview from './subcomponents/Overview'
import ServicePanels from './subcomponents/ServicePanels'
import { SERVICES } from './subcomponents/services'
import JsonLd from '@/components/landing/JsonLd'
import { ORG_ID, absolute, breadcrumbJsonLd, pageMetadata, webPageJsonLd } from '@/components/landing/seo'

const DESCRIPTION =
  'Real estate development, project management, property management and construction services in Lagos, Nigeria from TPL Trinitypact Limited.'

export const metadata = pageMetadata({ title: 'Real Estate Services', description: DESCRIPTION, path: '/services' })

const servicesJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'ItemList',
  name: 'Real estate services',
  itemListElement: SERVICES.map((s, i) => ({
    '@type': 'ListItem',
    position: i + 1,
    item: {
      '@type': 'Service',
      name: s.title,
      description: s.text,
      url: absolute(`/services#${s.id}`),
      serviceType: s.title,
      provider: { '@id': ORG_ID },
      areaServed: { '@type': 'City', name: 'Lagos' },
    },
  })),
}

const Services = () => {
  return (
    <LandingShell>
      <JsonLd
        data={[
          webPageJsonLd('WebPage', 'Real Estate Services', '/services', DESCRIPTION),
          servicesJsonLd,
          breadcrumbJsonLd('Services', '/services'),
        ]}
      />
      <PageHero
        eyebrow='Our Services'
        title={
          <>
            Exceptional Real
            <br />
            Estate Services
          </>
        }
        lede='Tailored to your unique needs and aspirations — from the first plan to the final touches, and the years of care that follow.'
        src='/images/services/hero-site.jpg'
        alt='Aerial view of a construction team standing on a concrete slab among rows of reinforcement'
        objectPosition='50% 65%'
      />
      <Overview />
      <ServicePanels />
      <Closing />
    </LandingShell>
  )
}

export default Services
