import LandingShell from '@/components/landing/LandingShell'
import JsonLd from '@/components/landing/JsonLd'
import { ORG_ID, absolute, breadcrumbJsonLd, pageMetadata, webPageJsonLd } from '@/components/landing/seo'
import PageHero from '@/components/landing/PageHero'
import Closing from '../subcomponents/Closing'
import Story from './subcomponents/Story'
import VisionMission from './subcomponents/VisionMission'
import Ceo from './subcomponents/Ceo'
import Tenets from './subcomponents/Tenets'
import WhyChoose from './subcomponents/WhyChoose'

const DESCRIPTION =
  'Meet TPL Trinitypact Limited and founder Prince Adedayo Ogunkoya — a Lagos real estate development and investment company building sustainable residential and commercial property.'

export const metadata = pageMetadata({ title: 'About Us', description: DESCRIPTION, path: '/about' })

const ceoJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'Person',
  name: 'Prince Adedayo Ogunkoya',
  jobTitle: 'Founder & Chief Executive Officer',
  image: absolute('/images/pages/about/ceo.jpeg'),
  worksFor: { '@id': ORG_ID },
  url: absolute('/about'),
}

const About = () => {
  return (
    <LandingShell>
      <JsonLd
        data={[webPageJsonLd('AboutPage', 'About Us', '/about', DESCRIPTION), ceoJsonLd, breadcrumbJsonLd('About Us', '/about')]}
      />
      <PageHero
        eyebrow='About Us'
        title={
          <>
            Building the Future,
            <br />
            Sustainably.
          </>
        }
        lede='A real estate development and investment company committed to creating sustainable residential and commercial property solutions in Lagos, Nigeria.'
        src='/images/pages/home/cimg1.jpg'
        alt='Open-plan dining room opening onto a planted garden'
        objectPosition='50% 60%'
      />
      <Story />
      <VisionMission />
      <Ceo />
      <Tenets />
      <WhyChoose />
      <Closing />
    </LandingShell>
  )
}

export default About
