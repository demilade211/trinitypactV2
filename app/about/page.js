import LandingShell from '@/components/landing/LandingShell'
import PageHero from '@/components/landing/PageHero'
import Closing from '../subcomponents/Closing'
import Story from './subcomponents/Story'
import VisionMission from './subcomponents/VisionMission'
import Ceo from './subcomponents/Ceo'
import Tenets from './subcomponents/Tenets'
import WhyChoose from './subcomponents/WhyChoose'

export const metadata = {
  title: 'About Us',
  description:
    'TPL Trinitypact Limited is a real estate development and investment company creating sustainable residential and commercial property in Lagos, Nigeria.',
}

const About = () => {
  return (
    <LandingShell>
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
        src='/images/pages/home/cimg1.png'
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
