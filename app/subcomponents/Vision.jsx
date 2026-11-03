'use client'

import { useRef } from 'react'
import Image from 'next/image'
import styled from 'styled-components'
import { Container } from '@/components/landing/LandingShell'
import { gsap, useGSAP, MOTION_OK, inView, riseLines, fadeUp } from '@/components/landing/motion'

// One photograph seen through four ellipse slices that shrink to the right.
// Each slice is positioned as a fraction of the composition box; the image
// inside is counter-positioned so the slices read as a single picture.
const SLICES = [
  { l: 0, t: 0, w: 0.6154, h: 1, radius: '50%' },
  { l: 0.6154, t: 0, w: 0.2038, h: 1, radius: '0 100% 100% 0 / 0 50% 50% 0' },
  { l: 0.8308, t: 0.0942, w: 0.1115, h: 0.8261, radius: '0 100% 100% 0 / 0 50% 50% 0' },
  { l: 0.9577, t: 0.2464, w: 0.0423, h: 0.5145, radius: '0 100% 100% 0 / 0 50% 50% 0' },
]

const pct = (n) => `${(n * 100).toFixed(3)}%`

const Vision = () => {
  const ref = useRef(null)

  useGSAP(
    () => {
      gsap.matchMedia().add(MOTION_OK, () => {
        riseLines('.title', { scrollTrigger: inView('.title', 'top 82%') })
        gsap.fromTo(
          '.slice',
          { clipPath: 'inset(0% 100% 0% 0%)' },
          {
            clipPath: 'inset(0% 0% 0% 0%)',
            duration: 1.6,
            ease: 'power4.inOut',
            stagger: 0.16,
            scrollTrigger: inView('.composition', 'top 72%'),
          }
        )
        gsap.from('.slice .canvas', { scale: 1.12, duration: 2.4, ease: 'power3.out', stagger: 0.16, scrollTrigger: inView('.composition', 'top 72%') })
        fadeUp('.caption', { scrollTrigger: inView('.caption', 'top 92%') })
      })
    },
    { scope: ref }
  )

  return (
    <Section ref={ref}>
      <Container>
        <h2 className='title'>
          Transforming Landscapes,
          <br />
          Enriching Communities
        </h2>

        <div className='composition'>
          {SLICES.map((s, i) => (
            <div
              key={i}
              className='slice'
              style={{ left: pct(s.l), top: pct(s.t), width: pct(s.w), height: pct(s.h), borderRadius: s.radius }}
            >
              <div
                className='canvas'
                style={{ left: pct(-s.l / s.w), top: pct(-s.t / s.h), width: pct(1 / s.w), height: pct(1 / s.h) }}
              >
                <Image
                  src='/images/home/vision-garden.jpg'
                  alt={i === 0 ? 'Timber-clad family home around a large tree and lawn' : ''}
                  fill
                  sizes='(max-width: 1440px) 92vw, 1300px'
                />
              </div>
            </div>
          ))}
        </div>

        <p className='caption'>
          Our vision: to be a leading force in real estate, pioneering innovative and sustainable solutions.
        </p>
      </Container>
    </Section>
  )
}

const Section = styled.section`
  padding-block: var(--section) calc(var(--section) * 0.75);
  background: var(--ink);
  color: var(--cream);

  .title {
    margin-bottom: clamp(40px, 4.5vw, 64px);
    font-size: clamp(32px, 3.7vw, 54px);
    line-height: 1.12;
    text-align: center;
  }
  .composition {
    position: relative;
    width: min(100%, 1300px);
    margin: 0 auto;
    aspect-ratio: 1300 / 690;
  }
  .slice {
    position: absolute;
    overflow: hidden;
  }
  .canvas {
    position: absolute;
    transform-origin: 30% 50%;
    img {
      object-fit: cover;
      filter: var(--grade) brightness(0.92);
    }
  }
  .caption {
    max-width: 420px;
    margin: clamp(40px, 4vw, 56px) auto 0;
    color: rgba(236, 233, 214, 0.78);
    font-size: 14px;
    text-align: center;
  }
`

export default Vision
