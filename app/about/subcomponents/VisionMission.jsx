'use client'

import { useRef } from 'react'
import styled from 'styled-components'
import { Container } from '@/components/landing/LandingShell'
import Eyebrow from '@/components/landing/Eyebrow'
import { GeoMark } from '@/components/landing/Shapes'
import { gsap, useGSAP, MOTION_OK, inView, riseLines, fadeUp } from '@/components/landing/motion'

const STATEMENTS = [
  {
    label: 'Our Vision',
    mark: 'arch',
    text: 'To be a leading force in the real estate industry, pioneering innovative and sustainable solutions that transform landscapes and enrich communities.',
  },
  {
    label: 'Our Mission',
    mark: 'meet',
    text: 'Empower individuals and businesses to achieve their dreams by providing exceptional real estate services — striving for excellence from property development to customer service, and fostering trust and long-term relationships.',
  },
]

const VisionMission = () => {
  const ref = useRef(null)

  useGSAP(
    () => {
      gsap.matchMedia().add(MOTION_OK, () => {
        fadeUp('[data-eyebrow]', { scrollTrigger: inView(ref.current, 'top 75%') })
        gsap.utils.toArray('.statement', ref.current).forEach((el, i) => {
          const trigger = inView(el, 'top 82%')
          gsap.from(el, { '--rule': 0, duration: 1.4, ease: 'power3.inOut', delay: i * 0.12, scrollTrigger: trigger })
          fadeUp(el.querySelectorAll('.label, .mark'), { delay: 0.2 + i * 0.12, scrollTrigger: trigger })
          riseLines(el.querySelector('p'), { delay: 0.3 + i * 0.12, stagger: 0.06, scrollTrigger: trigger })
        })
      })
    },
    { scope: ref }
  )

  return (
    <Section ref={ref}>
      <Container>
        <Eyebrow>Vision &amp; Mission</Eyebrow>
        <div className='grid'>
          {STATEMENTS.map((s) => (
            <article key={s.label} className='statement'>
              <div className='head'>
                <h2 className='label'>{s.label}</h2>
                <GeoMark variant={s.mark} className='mark' />
              </div>
              <p className='serif'>{s.text}</p>
            </article>
          ))}
        </div>
      </Container>
    </Section>
  )
}

const Section = styled.section`
  padding-block: var(--section);
  background: var(--ink);
  color: var(--cream);

  .grid {
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: clamp(32px, 5vw, 96px);
    margin-top: clamp(32px, 4vw, 56px);
  }
  .statement {
    --rule: 1;
    position: relative;
    padding-top: 28px;
    /* Hairline that draws itself in from the left. */
    &::before {
      content: '';
      position: absolute;
      inset: 0 0 auto 0;
      height: 1px;
      background: var(--line-dark);
      transform: scaleX(var(--rule));
      transform-origin: left;
    }
  }
  .head {
    display: flex;
    align-items: flex-start;
    justify-content: space-between;
    margin-bottom: clamp(40px, 5vw, 88px);
  }
  .label {
    color: var(--muted);
    font-size: 18px;
  }
  .mark {
    width: 44px;
    height: auto;
    color: var(--olive);
  }
  p {
    font-size: clamp(24px, 2.3vw, 34px);
    line-height: 1.22;
  }

  @media (max-width: 899px) {
    .grid {
      grid-template-columns: 1fr;
      gap: 56px;
    }
  }
`

export default VisionMission
