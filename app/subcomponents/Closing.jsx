'use client'

import { useRef } from 'react'
import Image from 'next/image'
import styled from 'styled-components'
import PillButton from '@/components/landing/PillButton'
import { gsap, useGSAP, MOTION_OK, inView, riseLines, fadeUp } from '@/components/landing/motion'

const Closing = () => {
  const ref = useRef(null)

  useGSAP(
    () => {
      gsap.matchMedia().add(MOTION_OK, () => {
        gsap.from('.arch', { yPercent: 30, autoAlpha: 0, duration: 1.6, ease: 'power3.out', stagger: 0.12, scrollTrigger: inView(ref.current, 'top 80%') })
        gsap.from('.media', { autoAlpha: 0, scale: 1.06, duration: 1.8, ease: 'power3.out', scrollTrigger: inView('.media', 'top 85%') })

        const tl = gsap.timeline({ scrollTrigger: inView('.panel', 'top 85%') })
        tl.fromTo(
          '.panel',
          { clipPath: 'inset(0% 100% 0% 0%)' },
          { clipPath: 'inset(0% 0% 0% 0%)', duration: 1.4, ease: 'power4.inOut' }
        )
        riseLines('.title', { delay: 0.75, scrollTrigger: inView('.panel', 'top 85%') })
        fadeUp('.panel p, .panel .cta', { stagger: 0.12, delay: 1.05, scrollTrigger: inView('.panel', 'top 85%') })
      })
    },
    { scope: ref }
  )

  return (
    <Section ref={ref}>
      <div className='frame'>
        <div className='arches' aria-hidden='true'>
          <span className='arch' />
          <span className='arch' />
          <span className='arch' />
          <span className='arch' />
        </div>
        <div className='media'>
          <Image
            src='/images/home/closing-building.jpg'
            alt='Contemporary white villa with timber and glass upper floors'
            fill
            sizes='100vw'
          />
        </div>
        <div className='panel'>
          <h2 className='title'>Discover the TPL Trinitypact difference on your real estate journey.</h2>
          <p>
            For any further information required, or any inquiry you wish to make, our team is ready to guide you every
            step of the way.
          </p>
          <div className='cta'>
            <PillButton href='/contact' tone='olive'>
              Contact Us Today
            </PillButton>
          </div>
        </div>
      </div>
    </Section>
  )
}

const Section = styled.section`
  /* The dark ground below continues straight into the footer. */
  background: linear-gradient(180deg, var(--bg) 0 calc(100% - 1px), var(--ink) 0);

  .frame {
    position: relative;
    max-width: 1440px;
    height: clamp(760px, 68vw, 980px);
    margin: 0 auto;
    overflow: hidden;
  }
  .arches {
    position: absolute;
    inset: 4% 0 auto 0;
    display: grid;
    grid-template-columns: 0.12fr 1fr 1fr 0.9fr;
    gap: 2%;
    height: 46%;
  }
  .arch {
    display: block;
    border-radius: 100% 0 0 0 / 100% 0 0 0;
    background: #dddfd8;
  }
  .arch:nth-child(1) {
    border-radius: 0;
  }
  .arch:nth-child(3) {
    border-radius: 50% 50% 0 0 / 100% 100% 0 0;
  }
  .media {
    position: absolute;
    inset: 22% 0 0 0;
    -webkit-mask-image: linear-gradient(180deg, transparent 0%, #000 26%);
    mask-image: linear-gradient(180deg, transparent 0%, #000 26%);
    img {
      object-fit: cover;
      object-position: 60% 40%;
      filter: var(--grade) saturate(0.7);
    }
  }
  .panel {
    position: absolute;
    left: 0;
    bottom: 0;
    width: 58%;
    height: 42%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    padding: 48px clamp(100px, 13vw, 200px) 48px var(--pad);
    background: var(--ink);
    color: var(--cream);
    /* One long convex sweep from the top-right corner down to the baseline. */
    border-bottom-right-radius: 150px 100%;
  }
  .title {
    max-width: 560px;
    font-size: clamp(30px, 3vw, 46px);
    line-height: 1.08;
  }
  .panel p {
    max-width: 520px;
    margin-top: 24px;
    color: rgba(236, 233, 214, 0.62);
    font-size: 14px;
  }
  .cta {
    margin-top: 34px;
  }

  @media (max-width: 1199px) {
    .panel {
      width: 74%;
      height: 48%;
    }
  }
  @media (max-width: 767px) {
    background: var(--ink);
    .frame {
      height: auto;
      background: var(--bg);
    }
    .arches {
      display: none;
    }
    .media {
      position: relative;
      inset: auto;
      aspect-ratio: 4 / 3;
      -webkit-mask-image: none;
      mask-image: none;
    }
    .panel {
      position: relative;
      width: 100%;
      height: auto;
      padding: 56px var(--pad) 64px;
      border-radius: 0;
      border-top-right-radius: 90% 48px;
      margin-top: -48px;
    }
  }
`

export default Closing
