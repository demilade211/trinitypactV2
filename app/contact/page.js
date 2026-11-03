import LandingShell from '@/components/landing/LandingShell'
import PageHero from '@/components/landing/PageHero'
import ContactSection from './subcomponents/ContactSection'
import MapBand from './subcomponents/MapBand'

export const metadata = {
  title: 'Contact Us',
  description:
    'Contact TPL Trinitypact Limited — 7, Bailey Street, Off Oguntolu Street, Shomolu, Lagos. Call +234 806 078 7963 or email trinitypactlimited@gmail.com.',
}

const Contact = () => {
  return (
    <LandingShell>
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
