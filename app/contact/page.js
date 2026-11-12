import LandingShell from '@/components/landing/LandingShell'
import PageHero from '@/components/landing/PageHero'
import ContactSection from './subcomponents/ContactSection'
import MapBand from './subcomponents/MapBand'
import JsonLd from '@/components/landing/JsonLd'
import { SITE } from '@/components/landing/site'
import { breadcrumbJsonLd, pageMetadata, webPageJsonLd } from '@/components/landing/seo'

const DESCRIPTION = `Contact ${SITE.name} at ${SITE.address.join(' ')} Call ${SITE.phones[0]} or email ${SITE.email}.`

export const metadata = pageMetadata({ title: 'Contact Us', description: DESCRIPTION, path: '/contact' })

const Contact = () => {
  return (
    <LandingShell>
      <JsonLd
        data={[webPageJsonLd('ContactPage', 'Contact Us', '/contact', DESCRIPTION), breadcrumbJsonLd('Contact Us', '/contact')]}
      />
      <PageHero
        eyebrow='Contact Us'
        title={
          <>
            Get in Touch
            <br />
            With Us.
          </>
        }
        lede='Whether you are buying, investing or planning a development, our team is ready to guide you every step of the way.'
        src='/images/home/category-office.jpg'
        alt='Glass-walled meeting room with a long table'
        objectPosition='50% 55%'
      />
      <ContactSection />
      <MapBand />
    </LandingShell>
  )
}

export default Contact
