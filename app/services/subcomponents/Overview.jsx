'use client'

import { useRef } from 'react'
import styled from 'styled-components'
import { Container } from '@/components/landing/LandingShell'
import Eyebrow from '@/components/landing/Eyebrow'
import { gsap, useGSAP, MOTION_OK, inView, riseLines, fadeUp } from '@/components/landing/motion'
import { SERVICES } from './services'

const Overview = () => {
  const ref = useRef(null)

  useGSAP(
    () => {
      gsap.matchMedia().add(MOTION_OK, () => {
        fadeUp('[data-eyebrow]', { scrollTrigger: inView('.head') })
        riseLines('.title', { scrollTrigger: inView('.head') })
        fadeUp('.body p', { stagger: 0.12, delay: 0.25, scrollTrigger: inView('.head') })
        gsap.utils.toArray('.index li', ref.current).forEach((row, i) => {
          gsap.from(row, { '--rule': 0, duration: 1.2, ease: 'power3.inOut', delay: i * 0.08, scrollTrigger: inView('.index', 'top 85%') })
          fadeUp(row.querySelector('a'), { delay: 0.15 + i * 0.08, scrollTrigger: inView('.index', 'top 85%') })
        })
      })
    },
    { scope: ref }
  )

  return (
    <Section ref={ref}>
      <Container>
        <div className='head'>
          <div>
            <Eyebrow>What We Do</Eyebrow>
            <h2 className='title'>Guiding you through every step of your real estate journey.</h2>
          </div>
          <div className='body'>
            <p>
              At TPL Trinitypact Limited, we are dedicated to providing exceptional real estate services that cater to
              your unique needs and aspirations. With our extensive knowledge of the local market and a team of
              experienced professionals, we strive to guide you through every step of your real estate journey.
            </p>
            <p>
              Our expertise extends beyond construction, as we provide valuable real estate advisory services, ensuring
              a comprehensive approach to your property journey.
            </p>
          </div>
        </div>

        <ol className='index'>
          {SERVICES.map((s, i) => (
            <li key={s.id}>
              <a href={`#${s.id}`}>
                <span className='num serif'>{String(i + 1).padStart(2, '0')}</span>
                <span className='name serif'>{s.title}</span>
                <svg className='arrow' viewBox='0 0 16 16' width='16' height='16' aria-hidden='true'>
                  <path d='M8 2v11M3 8.5 8 13.5l5-5' fill='none' stroke='currentColor' strokeWidth='1.4' />
                </svg>
              </a>
            </li>
          ))}
        </ol>
      </Container>
    </Section>
  )
}

const Section = styled.section`
  padding-block: var(--section) calc(var(--section) * 0.6);

  .head {
    display: grid;
    grid-template-columns: 1.1fr 1fr;
    align-items: end;
    gap: clamp(32px, 5vw, 96px);
  }
  .title {
    max-width: 640px;
    font-size: clamp(32px, 3.7vw, 54px);
    line-height: 1.1;
  }
  .body {
    display: grid;
    gap: 18px;
    max-width: 520px;
    color: var(--text);
    font-size: 15px;
  }

  .index {
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    gap: 18px;
    margin-top: clamp(56px, 7vw, 112px);
    list-style: none;
  }
  li {
    --rule: 1;
    position: relative;
    &::before {
      content: '';
      position: absolute;
      inset: 0 0 auto 0;
      height: 1px;
      background: var(--ink);
      transform: scaleX(var(--rule));
      transform-origin: left;
    }
  }
  a {
    display: grid;
    grid-template-columns: auto 1fr auto;
    align-items: baseline;
    gap: 14px;
    padding: 20px 0 8px;
  }
  .num {
    color: var(--muted);
    font-size: 15px;
  }
  .name {
    font-size: clamp(20px, 1.7vw, 25px);
    line-height: 1.1;
  }
  .arrow {
    align-self: center;
    transition: transform 0.5s cubic-bezier(0.2, 0.7, 0.2, 1);
  }
  a:hover .arrow,
  a:focus-visible .arrow {
    transform: translateY(4px);
  }

  @media (max-width: 1199px) {
    .index {
      grid-template-columns: repeat(2, 1fr);
    }
  }
  @media (max-width: 767px) {
    .head {
      grid-template-columns: 1fr;
    }
    .index {
      grid-template-columns: 1fr;
      gap: 0;
    }
  }
`

export default Overview
