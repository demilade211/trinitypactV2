'use client'

import { useRef } from 'react'
import Image from 'next/image'
import styled from 'styled-components'
import { Container } from '@/components/landing/LandingShell'
import PillButton from '@/components/landing/PillButton'
import { GeoMark } from '@/components/landing/Shapes'
import { gsap, useGSAP, MOTION_OK, inView, riseLines, fadeUp } from '@/components/landing/motion'
import { SERVICES } from './services'

// Full-width service panels that stick and stack: as each one arrives, the
// panel beneath it settles back (scales down and dims) under the new one.
const ServicePanels = () => {
  const ref = useRef(null)

  useGSAP(
    () => {
      const mm = gsap.matchMedia()

      mm.add(MOTION_OK, () => {
        gsap.utils.toArray('.panel', ref.current).forEach((panel) => {
          const trigger = inView(panel, 'top 75%')
          gsap.fromTo(
            panel.querySelector('.media'),
            { clipPath: 'inset(0% 0% 100% 0%)' },
            { clipPath: 'inset(0% 0% 0% 0%)', duration: 1.4, ease: 'power4.inOut', scrollTrigger: trigger }
          )
          gsap.from(panel.querySelector('.media img'), { scale: 1.25, duration: 2, ease: 'power3.out', scrollTrigger: trigger })
          fadeUp(panel.querySelectorAll('.meta, .copy p, .copy .cta'), { stagger: 0.1, delay: 0.25, scrollTrigger: trigger })
          riseLines(panel.querySelector('h2'), { delay: 0.2, scrollTrigger: trigger })
        })
      })

      // The stacking recede only applies where panels are sticky.
      mm.add(`${MOTION_OK} and (min-width: 900px)`, () => {
        const panels = gsap.utils.toArray('.panel', ref.current)
        panels.slice(0, -1).forEach((panel, i) => {
          gsap.to(panel.querySelector('.card'), {
            scale: 0.93,
            '--dim': 0.45,
            ease: 'none',
            scrollTrigger: { trigger: panels[i + 1], start: 'top bottom', end: 'top 20%', scrub: true },
          })
        })
      })
    },
    { scope: ref }
  )

  return (
    <Section ref={ref} aria-label='Our services'>
      <Container>
        <ol className='stack'>
          {SERVICES.map((s, i) => (
            <li key={s.id} id={s.id} className={`panel tone-${s.tone}`} style={{ '--i': i }}>
              <article className='card'>
                <div className='copy'>
                  <div className='meta'>
                    <span className='num serif'>
                      {String(i + 1).padStart(2, '0')} / {String(SERVICES.length).padStart(2, '0')}
                    </span>
                    <GeoMark variant={s.mark} className='mark' />
                  </div>
                  <div>
                    <h2>{s.title}</h2>
                    <p>{s.text}</p>
                    <div className='cta'>
                      <PillButton href='/contact' tone={s.tone === 'ink' ? 'olive' : 'dark'}>
                        Discuss Your Project
                      </PillButton>
                    </div>
                  </div>
                </div>
                <div className='media'>
                  <Image src={s.src} alt={s.alt} fill sizes='(max-width: 899px) 100vw, 50vw' />
                </div>
              </article>
            </li>
          ))}
        </ol>
      </Container>
    </Section>
  )
}

const Section = styled.section`
  padding-block: 0 var(--section);

  .stack {
    list-style: none;
  }
  .panel {
    position: sticky;
    top: calc(32px + var(--i) * 16px);
    scroll-margin-top: calc(32px + var(--i) * 16px);
  }
  .panel + .panel {
    margin-top: 14vh;
  }
  .card {
    --dim: 0;
    position: relative;
    display: grid;
    grid-template-columns: 1fr 1fr;
    height: min(82vh, 700px);
    min-height: 520px;
    overflow: hidden;
    border-radius: 14px;
    transform-origin: 50% 0%;
    /* Darkening veil driven by --dim while the next panel slides over. */
    &::after {
      content: '';
      position: absolute;
      inset: 0;
      background: #000;
      opacity: var(--dim);
      pointer-events: none;
    }
  }
  .tone-olive .card {
    background: var(--olive);
    color: var(--ink);
  }
  .tone-ink .card {
    background: var(--ink);
    color: var(--cream);
  }

  .copy {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    padding: clamp(28px, 3.4vw, 52px);
  }
  .meta {
    display: flex;
    align-items: flex-start;
    justify-content: space-between;
  }
  .num {
    font-size: 18px;
    opacity: 0.6;
  }
  .mark {
    width: 56px;
    height: auto;
  }
  .tone-ink .mark {
    color: var(--olive);
  }
  h2 {
    font-size: clamp(36px, 4.2vw, 64px);
    line-height: 1.02;
  }
  .copy p {
    max-width: 480px;
    margin-top: 22px;
    font-size: 15px;
    line-height: 1.6;
    opacity: 0.8;
  }
  .cta {
    margin-top: 32px;
  }
  .media {
    position: relative;
    margin: 12px 12px 12px 0;
    overflow: hidden;
    border-radius: 8px;
    img {
      object-fit: cover;
      filter: var(--grade);
    }
  }

  @media (max-width: 899px) {
    .panel {
      position: static;
    }
    .panel + .panel {
      margin-top: 18px;
    }
    .card {
      grid-template-columns: 1fr;
      height: auto;
      min-height: 0;
    }
    .media {
      order: -1;
      aspect-ratio: 4 / 3;
      margin: 10px 10px 0;
    }
    .copy {
      gap: 40px;
    }
  }
`

export default ServicePanels
