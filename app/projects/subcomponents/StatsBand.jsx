'use client'

import { useRef } from 'react'
import styled from 'styled-components'
import { Container } from '@/components/landing/LandingShell'
import Eyebrow from '@/components/landing/Eyebrow'
import { STATS } from '@/components/landing/site'
import { gsap, useGSAP, MOTION_OK, inView, fadeUp, countUp } from '@/components/landing/motion'

const StatsBand = () => {
  const ref = useRef(null)

  useGSAP(
    () => {
      gsap.matchMedia().add(MOTION_OK, () => {
        fadeUp('[data-eyebrow]', { scrollTrigger: inView(ref.current, 'top 80%') })
        gsap.utils.toArray('.stat', ref.current).forEach((stat, i) => {
          gsap.from(stat, { '--rule': 0, duration: 1.2, ease: 'power3.inOut', delay: i * 0.1, scrollTrigger: inView(ref.current, 'top 80%') })
        })
        fadeUp('.stat > *', { stagger: 0.06, delay: 0.2, scrollTrigger: inView(ref.current, 'top 80%') })
        return countUp(ref.current.querySelectorAll('[data-count]'), ref.current)
      })
    },
    { scope: ref }
  )

  return (
    <Section ref={ref}>
      <Container>
        <Eyebrow>In Numbers</Eyebrow>
        <dl className='stats'>
          {STATS.map((s) => (
            <div key={s.label} className='stat'>
              <dd className='serif'>
                <span data-count={s.value} data-decimals={s.decimals}>
                  {s.value.toFixed(s.decimals || 0)}
                </span>
                {s.suffix}
              </dd>
              <dt>{s.label}</dt>
            </div>
          ))}
        </dl>
      </Container>
    </Section>
  )
}

const Section = styled.section`
  padding-block: calc(var(--section) * 0.75);
  background: var(--ink);
  color: var(--cream);

  .stats {
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    gap: 18px;
    margin-top: clamp(24px, 3vw, 40px);
  }
  .stat {
    --rule: 1;
    position: relative;
    display: flex;
    flex-direction: column;
    gap: 18px;
    padding-top: 28px;
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
  dd {
    font-size: clamp(48px, 5.4vw, 84px);
    line-height: 1;
    font-variant-numeric: lining-nums tabular-nums;
  }
  dt {
    max-width: 220px;
    color: rgba(236, 233, 214, 0.72);
    font-size: 14px;
  }

  @media (max-width: 899px) {
    .stats {
      grid-template-columns: 1fr 1fr;
      row-gap: 40px;
    }
  }
`

export default StatsBand
