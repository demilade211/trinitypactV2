import LandingShell from '@/components/landing/LandingShell'
import PageHero from '@/components/landing/PageHero'
import Closing from '../subcomponents/Closing'
import Overview from './subcomponents/Overview'
import ServicePanels from './subcomponents/ServicePanels'

export const metadata = {
  title: 'Services',
  description:
    'Real estate development, project management, property management and construction services from TPL Trinitypact Limited in Lagos, Nigeria.',
}

const Services = () => {
  return (
    <LandingShell>
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
