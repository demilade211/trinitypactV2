'use client'

import { useRef } from 'react'
import Image from 'next/image'
import styled, { keyframes } from 'styled-components'
import { Container } from '@/components/landing/LandingShell'
import { gsap, useGSAP, MOTION_OK, inView, riseLines, fadeUp } from '@/components/landing/motion'

// Drawn from the About page's "Why Choose TPL" reasons.
const POINTS = [
  { title: 'Global Presence', text: 'Diverse expertise and international market insights.' },
  { title: 'Proven Track Record', text: 'A consistent history of delivering quality services.' },
  { title: 'Financial Stability', text: 'Built to weather market shifts and fulfil every commitment.' },
]

// Lagos in the coordinate space of public/images/home/world-map.svg
// (Mercator, 1000×560, generated from Natural Earth 110m via d3-geo).
const LAGOS = { x: 50.8, y: 68.07 }

const Presence = () => {
  const ref = useRef(null)

  useGSAP(
    () => {
      gsap.matchMedia().add(MOTION_OK, () => {
        riseLines('.title', { scrollTrigger: inView('.top') })
        fadeUp('.top p', { delay: 0.25, scrollTrigger: inView('.top') })
        gsap.from('.map img', { autoAlpha: 0, scale: 0.97, duration: 1.8, ease: 'power2.out', scrollTrigger: inView('.map', 'top 80%') })
        gsap.from('.pin', {
          scale: 0,
          autoAlpha: 0,
          duration: 0.9,
          ease: 'back.out(2)',
          delay: 0.8,
          scrollTrigger: inView('.map', 'top 80%'),
        })
        gsap.from('.pin-label', { autoAlpha: 0, x: -10, duration: 0.8, delay: 1.3, ease: 'power3.out', scrollTrigger: inView('.map', 'top 80%') })
        fadeUp('.point', { stagger: 0.15, scrollTrigger: inView('.points', 'top 85%') })
      })
    },
    { scope: ref }
  )

  return (
    <Section ref={ref}>
      <Container>
        <div className='top'>
          <h2 className='title'>
            Global Presence,
            <br />
            Local Market Knowledge.
          </h2>
          <p>
            With our extensive knowledge of the local market and a team of experienced professionals, we guide you
            through every step of your real estate journey.
          </p>
        </div>

        <div className='body'>
          <ul className='points'>
            {POINTS.map((p) => (
              <li key={p.title} className='point'>
                <h3>{p.title}</h3>
                <p>{p.text}</p>
              </li>
            ))}
          </ul>

          <div className='map'>
            <Image src='/images/home/world-map.svg' alt='' fill unoptimized />
            <div className='marker' style={{ left: `${LAGOS.x}%`, top: `${LAGOS.y}%` }}>
              <span className='pin' role='img' aria-label='TPL Trinitypact head office, Lagos, Nigeria'>
                <svg viewBox='0 0 16 16' width='16' height='16' aria-hidden='true'>
                  <path d='M8 1.5 1.5 7.2V15h4.6v-4.4h3.8V15h4.6V7.2z' fill='currentColor' />
                </svg>
              </span>
              <span className='pin-label'>Lagos · Head office</span>
            </div>
          </div>
        </div>
      </Container>
    </Section>
  )
}

const pulse = keyframes`
  from {
    transform: scale(1);
    opacity: 0.8;
  }
  to {
    transform: scale(2.2);
    opacity: 0;
  }
`

const Section = styled.section`
  padding-block: calc(var(--section) * 0.5) var(--section);
  background: var(--ink);
  color: var(--cream);

  .top {
    display: flex;
    align-items: flex-start;
    justify-content: space-between;
    gap: 32px;
  }
  .title {
    font-size: clamp(32px, 3.7vw, 54px);
    line-height: 1.1;
  }
  .top p {
    max-width: 290px;
    margin-top: 56px;
    color: rgba(236, 233, 214, 0.78);
    font-size: 14px;
  }

  .body {
    display: grid;
    grid-template-columns: minmax(220px, 0.3fr) 1fr;
    align-items: end;
    margin-top: -24px;
  }
  .points {
    position: relative;
    z-index: 1;
    display: grid;
    gap: 40px;
    list-style: none;
    h3 {
      margin-bottom: 14px;
      font-size: clamp(22px, 1.9vw, 28px);
      line-height: 1.1;
    }
    p {
      color: rgba(236, 233, 214, 0.78);
      font-size: 14px;
    }
  }
  .map {
    position: relative;
    aspect-ratio: 1000 / 560;
    margin-left: -4%;
  }
  .marker {
    position: absolute;
    display: flex;
    align-items: center;
    gap: 10px;
    transform: translate(-25px, -50%);
  }
  .pin {
    position: relative;
    display: grid;
    place-items: center;
    width: 50px;
    height: 50px;
    border-radius: 50%;
    background: var(--olive);
    color: var(--ink);
    &::before {
      content: '';
      position: absolute;
      inset: 0;
      border-radius: 50%;
      border: 1px solid var(--olive);
      animation: ${pulse} 2.6s cubic-bezier(0.2, 0.7, 0.2, 1) infinite;
    }
  }
  .pin-label {
    padding: 6px 10px;
    border-radius: 999px;
    background: rgba(236, 233, 214, 0.1);
    color: var(--cream);
    font-size: 12px;
    white-space: nowrap;
    backdrop-filter: blur(6px);
  }
  @media (prefers-reduced-motion: reduce) {
    .pin::before {
      animation: none;
    }
  }

  @media (max-width: 899px) {
    .top {
      flex-direction: column;
    }
    .top p {
      margin-top: 0;
    }
    .body {
      grid-template-columns: 1fr;
      margin-top: 32px;
    }
    .points {
      order: 2;
      margin-top: 32px;
      gap: 28px;
    }
    .map {
      margin-left: 0;
    }
    .pin {
      width: 36px;
      height: 36px;
    }
    .marker {
      transform: translate(-18px, -50%);
    }
  }
`

export default Presence
