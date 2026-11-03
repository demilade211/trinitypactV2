import LandingShell from '@/components/landing/LandingShell'
import PageHero from '@/components/landing/PageHero'
import Closing from '../subcomponents/Closing'
import Gallery from './subcomponents/Gallery'
import StatsBand from './subcomponents/StatsBand'

export const metadata = {
  title: 'Projects',
  description:
    'Residential developments, completed residences and design concepts by TPL Trinitypact Limited in Lagos, Nigeria.',
}

const Projects = () => {
  return (
    <LandingShell>
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
        src='/images/pages/home/img1.png'
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
