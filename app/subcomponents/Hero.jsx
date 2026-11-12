'use client'

import { useRef } from 'react'
import Image from 'next/image'
import styled from 'styled-components'
import PillButton from '@/components/landing/PillButton'
import { gsap, useGSAP, MOTION_OK, riseLines } from '@/components/landing/motion'

const Hero = () => {
  const ref = useRef(null)

  useGSAP(
    () => {
      gsap.matchMedia().add(MOTION_OK, () => {
        gsap.from('.media', { scale: 1.16, duration: 2.2, ease: 'power3.out' })
        gsap.set('[data-preload]', { autoAlpha: 1 })
        riseLines('.title', { delay: 0.1, duration: 1.2 })
        gsap.from('.lede', { autoAlpha: 0, y: 24, duration: 1.1, delay: 0.45, ease: 'power3.out' })
        gsap.from('.cta', { autoAlpha: 0, y: 16, duration: 1, delay: 0.65, ease: 'power3.out' })
      })
    },
    { scope: ref }
  )

  return (
    <Section ref={ref}>
      <div className='media'>
        <Image
          src='/images/home/hero-house.jpg'
          alt='Contemporary two-storey home with timber cladding and floor-to-ceiling glass beneath a mature tree'
          fill
          loading='eager'
          fetchPriority='high'
          sizes='100vw'
        />
      </div>
      <div className='shade' />
      <div className='content'>
        <h1 className='title' data-preload>
          Building the Future,
          <br />
          Sustainably
        </h1>
        <p className='lede' data-preload>
          Providing exceptional real estate services that cater to your unique needs and aspirations. We strive to
          guide you through every step of your real estate journey.
        </p>
        <div className='cta' data-preload>
          <PillButton href='/about' tone='light'>
            Learn More
          </PillButton>
        </div>
      </div>
    </Section>
  )
}

const Section = styled.section`
  position: relative;
  height: clamp(620px, 64vw, 940px);
  overflow: hidden;
  color: var(--cream);
  background: var(--ink);

  .media {
    position: absolute;
    inset: 0;
    img {
      object-fit: cover;
      object-position: 50% 60%;
      filter: var(--grade);
    }
  }
  .shade {
    position: absolute;
    inset: 0;
    background: linear-gradient(180deg, rgba(14, 14, 12, 0.45) 0%, rgba(14, 14, 12, 0) 24%),
      linear-gradient(0deg, rgba(14, 14, 12, 0.62) 0%, rgba(14, 14, 12, 0.18) 38%, rgba(14, 14, 12, 0) 60%);
  }
  .content {
    position: absolute;
    inset: auto 0 0 0;
    display: grid;
    grid-template-columns: 1.08fr 1fr auto;
    align-items: end;
    gap: 32px;
    max-width: 1440px;
    margin: 0 auto;
    padding: 0 var(--pad) 64px;
  }
  .title {
    font-size: clamp(48px, 6.2vw, 92px);
    line-height: 0.98;
    letter-spacing: -0.035em;
  }
  .lede {
    max-width: 400px;
    margin-bottom: 6px;
    color: rgba(236, 233, 214, 0.86);
    font-size: 15px;
  }
  .cta {
    margin-bottom: 6px;
  }

  @media (max-width: 1199px) {
    .content {
      grid-template-columns: 1fr auto;
    }
    .title {
      grid-column: 1 / -1;
    }
  }
  @media (max-width: 767px) {
    height: max(620px, 100svh);
    .content {
      grid-template-columns: 1fr;
      gap: 20px;
      padding-bottom: 40px;
    }
    .title {
      font-size: clamp(40px, 11vw, 56px);
    }
    .cta {
      margin-left: 9px;
    }
  }
`

export default Hero
