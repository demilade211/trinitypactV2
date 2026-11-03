import LandingShell from '@/components/landing/LandingShell'
import Hero from './subcomponents/Hero'
import Intro from './subcomponents/Intro'
import FeaturedProjects from './subcomponents/FeaturedProjects'
import Categories from './subcomponents/Categories'
import Vision from './subcomponents/Vision'
import Presence from './subcomponents/Presence'
import ServicesGrid from './subcomponents/ServicesGrid'
import Closing from './subcomponents/Closing'

export default function Home() {
  return (
    <LandingShell>
      <Hero />
      <Intro />
      <FeaturedProjects />
      <Categories />
      <Vision />
      <Presence />
      <ServicesGrid />
      <Closing />
    </LandingShell>
  )
}
