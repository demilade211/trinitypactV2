'use client'

import { useRef } from 'react'
import Image from 'next/image'
import styled from 'styled-components'
import { Container } from '@/components/landing/LandingShell'
import Eyebrow from '@/components/landing/Eyebrow'
import { gsap, useGSAP, MOTION_OK, inView, riseLines, fadeUp } from '@/components/landing/motion'

const Story = () => {
  const ref = useRef(null)

  useGSAP(
    () => {
      gsap.matchMedia().add(MOTION_OK, () => {
        gsap.fromTo(
          '.arc',
          { clipPath: 'inset(0% 0% 0% 100%)' },
          { clipPath: 'inset(0% 0% 0% 0%)', duration: 1.5, ease: 'power4.inOut', stagger: 0.18, scrollTrigger: inView('.arcs', 'top 75%') }
        )
        gsap.from('.arc img', { scale: 1.3, duration: 2, ease: 'power3.out', stagger: 0.18, scrollTrigger: inView('.arcs', 'top 75%') })
        fadeUp('[data-eyebrow]', { scrollTrigger: inView('.copy') })
        riseLines('.title', { scrollTrigger: inView('.copy') })
        fadeUp('.body p', { stagger: 0.12, delay: 0.3, scrollTrigger: inView('.copy') })
      })
    },
    { scope: ref }
  )

  return (
    <Section ref={ref}>
      <Container className='grid'>
        <div className='copy'>
          <Eyebrow>Who We Are</Eyebrow>
          <h2 className='title'>TPL Trinitypact Limited: leaders in property development.</h2>
          <div className='body'>
            <p>
              Welcome to TPL Trinitypact Limited, a dynamic real estate development company rooted in the vibrant city
              of Lagos, Nigeria. With a rich history spanning over four years, we specialize in the art of property
              development and investment — from crafting distinctive residential spaces to shaping commercial
              landscapes.
            </p>
            <p>
              Our core identity revolves around the construction of superior properties capable of generating
              considerable returns over a 15-year span, while upholding principles of sustainability and environmental
              mindfulness. Our expertise extends beyond construction: we provide real estate advisory services, ensuring
              a comprehensive approach to your property journey.
            </p>
          </div>
        </div>

        <div className='arcs'>
          <figure className='arc'>
            <Image
              src='/images/pages/about/img1.png'
              alt='Render of a two-storey villa with a dark upper level'
              fill
              sizes='(max-width: 899px) 50vw, 24vw'
            />
          </figure>
          <figure className='arc'>
            <Image
              src='/images/pages/home/img1.jpg'
              alt='Contemporary house entrance with timber cladding'
              fill
              sizes='(max-width: 899px) 50vw, 24vw'
            />
          </figure>
        </div>
      </Container>
    </Section>
  )
}

const Section = styled.section`
  padding-block: var(--section);

  .grid {
    display: grid;
    grid-template-columns: 1fr 0.92fr;
    align-items: center;
    gap: clamp(32px, 4.5vw, 72px);
  }
  .title {
    max-width: 620px;
    font-size: clamp(32px, 3.7vw, 54px);
    line-height: 1.12;
  }
  .body {
    display: grid;
    gap: 18px;
    max-width: 560px;
    margin-top: clamp(28px, 3vw, 44px);
    color: var(--text);
    font-size: 15px;
  }
  .arcs {
    display: grid;
    grid-template-columns: 1fr 1fr;
  }
  .arc {
    position: relative;
    aspect-ratio: 337 / 672;
    overflow: hidden;
    /* Right halves of an ellipse — mirrored from the home page intro. */
    border-radius: 0 100% 100% 0 / 0 50% 50% 0;
    img {
      object-fit: cover;
      filter: var(--grade);
    }
  }

  @media (max-width: 899px) {
    .grid {
      grid-template-columns: 1fr;
    }
    .arcs {
      width: min(100%, 520px);
    }
  }
`

export default Story
