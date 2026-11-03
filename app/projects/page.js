import LandingShell from '@/components/landing/LandingShell'
import PageHero from '@/components/landing/PageHero'
import Closing from '../subcomponents/Closing'
import Gallery from './subcomponents/Gallery'
import StatsBand from './subcomponents/StatsBand'
import JsonLd from '@/components/landing/JsonLd'
import { breadcrumbJsonLd, pageMetadata, webPageJsonLd } from '@/components/landing/seo'

const DESCRIPTION =
  'Residential developments, completed residences and design concepts by TPL Trinitypact Limited, a real estate developer in Lagos, Nigeria.'

export const metadata = pageMetadata({ title: 'Our Projects', description: DESCRIPTION, path: '/projects' })

// Project names are still placeholders, so they are deliberately left out of structured data.
const Projects = () => {
  return (
    <LandingShell>
      <JsonLd
        data={[webPageJsonLd('CollectionPage', 'Our Projects', '/projects', DESCRIPTION), breadcrumbJsonLd('Projects', '/projects')]}
      />
      <PageHero
        eyebrow='Our Projects'
        title={
          <>
            Distinctive Spaces,
            <br />
            Built with Purpose.
          </>
        }
        lede='Residential developments, completed residences and design concepts — a selection of the work behind TPL Trinitypact.'
        src='/images/pages/home/img1.jpg'
        alt='Contemporary house entrance with timber cladding and a wide driveway'
        objectPosition='50% 40%'
      />
      <Gallery />
      <StatsBand />
      <Closing />
    </LandingShell>
  )
}

export default Projects
