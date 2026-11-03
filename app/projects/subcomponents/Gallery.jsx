'use client'

import { useCallback, useRef, useState } from 'react'
import Image from 'next/image'
import styled from 'styled-components'
import { Container } from '@/components/landing/LandingShell'
import Eyebrow from '@/components/landing/Eyebrow'
import { PROJECTS } from '@/components/landing/projects'
import { gsap, useGSAP, MOTION_OK, inView, riseLines, fadeUp } from '@/components/landing/motion'
import Lightbox from './Lightbox'

// Asymmetric 12-column layout, one entry per project (cycled if more are added).
const LAYOUT = [
  { col: '1 / span 7', ratio: '4 / 3', shift: '0px' },
  { col: '9 / span 4', ratio: '4 / 5', shift: '18%' },
  { col: '2 / span 5', ratio: '4 / 5', shift: '0px' },
  { col: '8 / span 5', ratio: '4 / 3', shift: '28%' },
  { col: '1 / span 6', ratio: '3 / 2', shift: '0px' },
  { col: '7 / span 6', ratio: '3 / 2', shift: '12%' },
]

const Gallery = () => {
  const ref = useRef(null)
  const [active, setActive] = useState(null)

  const close = useCallback(() => setActive(null), [])
  const step = useCallback((dir) => setActive((i) => (i + dir + PROJECTS.length) % PROJECTS.length), [])

  useGSAP(
    () => {
      gsap.matchMedia().add(MOTION_OK, () => {
        fadeUp('[data-eyebrow], .count, .lede', { stagger: 0.1, scrollTrigger: inView('.head') })
        riseLines('.title', { scrollTrigger: inView('.head') })

        gsap.utils.toArray('.item', ref.current).forEach((item) => {
          const trigger = inView(item, 'top 85%')
          gsap.fromTo(
            item.querySelector('.frame'),
            { clipPath: 'inset(100% 0% 0% 0%)' },
            { clipPath: 'inset(0% 0% 0% 0%)', duration: 1.4, ease: 'power4.inOut', scrollTrigger: trigger }
          )
          fadeUp(item.querySelector('.meta'), { delay: 0.5, scrollTrigger: trigger })
          // Slow drift of the photo inside its frame while the item crosses the viewport.
          gsap.fromTo(
            item.querySelector('.drift'),
            { yPercent: -6 },
            { yPercent: 6, ease: 'none', scrollTrigger: { trigger: item, start: 'top bottom', end: 'bottom top', scrub: true } }
          )
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
            <Eyebrow>Portfolio</Eyebrow>
            <h2>
              <span className='title'>Selected Projects</span>
              <span className='count'>({String(PROJECTS.length).padStart(2, '0')})</span>
            </h2>
          </div>
          <p className='lede'>
            From crafting distinctive residential spaces to shaping commercial landscapes, TPL Trinitypact Limited is
            your trusted partner in the world of real estate.
          </p>
        </div>

        <ul className='grid'>
          {PROJECTS.map((p, i) => {
            const layout = LAYOUT[i % LAYOUT.length]
            return (
              <li
                key={p.src}
                className='item'
                style={{ '--col': layout.col, '--ratio': layout.ratio, '--shift': layout.shift }}
              >
                <button type='button' className='frame' onClick={() => setActive(i)} aria-label={`View ${p.title}`}>
                  <span className='zoom'>
                    <span className='drift'>
                      <Image src={p.src} alt={p.alt} fill sizes='(max-width: 767px) 100vw, 58vw' />
                    </span>
                  </span>
                  <span className='tag serif'>{p.tag}</span>
                  <span className='view serif' aria-hidden='true'>
                    View
                  </span>
                </button>
                <div className='meta'>
                  <span className='num serif'>{String(i + 1).padStart(2, '0')}</span>
                  <div>
                    <h3>{p.title}</h3>
                    <p>{p.detail}</p>
                  </div>
                </div>
              </li>
            )
          })}
        </ul>
      </Container>

      {active !== null && <Lightbox items={PROJECTS} index={active} onClose={close} onStep={step} />}
    </Section>
  )
}

const Section = styled.section`
  padding-block: var(--section);

  .head {
    display: flex;
    align-items: flex-end;
    justify-content: space-between;
    gap: 32px;
    margin-bottom: clamp(48px, 6vw, 96px);
  }
  h2 {
    display: flex;
    align-items: flex-end;
    gap: 14px;
  }
  .title {
    display: block;
    font-size: clamp(36px, 4.4vw, 66px);
    line-height: 1.02;
  }
  .count {
    padding-bottom: 10px;
    color: var(--text);
    font-size: 15px;
  }
  .lede {
    max-width: 360px;
    color: var(--text);
    font-size: 15px;
  }

  .grid {
    display: grid;
    grid-template-columns: repeat(12, 1fr);
    align-items: start;
    gap: clamp(48px, 6vw, 96px) 18px;
    list-style: none;
  }
  .item {
    grid-column: var(--col);
    margin-top: var(--shift);
  }
  .frame {
    position: relative;
    display: block;
    width: 100%;
    aspect-ratio: var(--ratio);
    padding: 0;
    border: 0;
    overflow: hidden;
    background: #d9dad3;
    cursor: zoom-in;
  }
  .zoom {
    position: absolute;
    inset: 0;
    transition: transform 1.1s cubic-bezier(0.2, 0.7, 0.2, 1);
  }
  /* Oversized so the scroll drift never shows an edge. */
  .drift {
    position: absolute;
    inset: -8% 0;
    img {
      object-fit: cover;
      filter: var(--grade);
    }
  }
  .tag {
    position: absolute;
    top: 18px;
    right: 18px;
    padding: 5px 9px 4px;
    border-radius: 3px;
    background: var(--ink);
    color: var(--cream);
    font-size: 13px;
    line-height: 1;
  }
  .view {
    position: absolute;
    top: 50%;
    left: 50%;
    display: grid;
    place-items: center;
    width: 96px;
    height: 96px;
    border-radius: 50%;
    background: var(--cream);
    color: var(--ink);
    font-size: 17px;
    transform: translate(-50%, -50%) scale(0);
    transition: transform 0.6s cubic-bezier(0.2, 0.7, 0.2, 1);
  }
  .frame:hover .zoom,
  .frame:focus-visible .zoom {
    transform: scale(1.04);
  }
  .frame:hover .view,
  .frame:focus-visible .view {
    transform: translate(-50%, -50%) scale(1);
  }
  .frame:focus-visible {
    outline: 1px solid var(--ink);
    outline-offset: 4px;
  }

  .meta {
    display: grid;
    grid-template-columns: 40px 1fr;
    gap: 12px;
    padding-top: 16px;
    border-top: 1px solid var(--line);
    margin-top: 16px;
    h3 {
      font-size: clamp(20px, 1.7vw, 24px);
      line-height: 1.15;
    }
    p {
      margin-top: 4px;
      color: var(--text);
      font-size: 13px;
    }
  }
  .num {
    color: var(--muted);
    font-size: 16px;
  }

  @media (max-width: 767px) {
    .head {
      flex-direction: column;
      align-items: flex-start;
    }
    .grid {
      grid-template-columns: 1fr;
      gap: 48px;
    }
    .item {
      grid-column: 1;
      margin-top: 0;
    }
    .frame {
      aspect-ratio: 4 / 3;
    }
  }
`

export default Gallery
