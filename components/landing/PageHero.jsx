'use client'

import { useRef } from 'react'
import Image from 'next/image'
import styled from 'styled-components'
import Eyebrow from './Eyebrow'
import { gsap, useGSAP, MOTION_OK, riseLines } from './motion'

// Shorter photographic hero for inner pages: title bottom-left, lede bottom-right.
const PageHero = ({ eyebrow, title, lede, src, alt, objectPosition = '50% 50%' }) => {
  const ref = useRef(null)

  useGSAP(
    () => {
      gsap.matchMedia().add(MOTION_OK, () => {
        gsap.from('.media', { scale: 1.14, duration: 2.2, ease: 'power3.out' })
        gsap.set('[data-preload]', { autoAlpha: 1 })
        gsap.from('[data-eyebrow]', { autoAlpha: 0, y: 14, duration: 0.9, delay: 0.05, ease: 'power3.out' })
        riseLines('.title', { delay: 0.1, duration: 1.2 })
        gsap.from('.lede', { autoAlpha: 0, y: 24, duration: 1.1, delay: 0.45, ease: 'power3.out' })
      })
    },
    { scope: ref }
  )

  return (
    <Section ref={ref}>
      <div className='media'>
        <Image src={src} alt={alt} fill loading='eager' fetchPriority='high' sizes='100vw' style={{ objectPosition }} />
      </div>
      <div className='shade' />
      <div className='content'>
        <div data-preload>
          <Eyebrow>{eyebrow}</Eyebrow>
          <h1 className='title'>{title}</h1>
        </div>
        {lede && (
          <p className='lede' data-preload>
            {lede}
          </p>
        )}
      </div>
    </Section>
  )
}

const Section = styled.section`
  position: relative;
  height: clamp(560px, 54vw, 760px);
  overflow: hidden;
  background: var(--ink);
  color: var(--cream);

  .media {
    position: absolute;
    inset: 0;
    img {
      object-fit: cover;
      filter: var(--grade);
    }
  }
  .shade {
    position: absolute;
    inset: 0;
    background: linear-gradient(180deg, rgba(14, 14, 12, 0.5) 0%, rgba(14, 14, 12, 0) 26%),
      linear-gradient(0deg, rgba(14, 14, 12, 0.7) 0%, rgba(14, 14, 12, 0.2) 45%, rgba(14, 14, 12, 0) 70%);
  }
  .content {
    position: absolute;
    inset: auto 0 0 0;
    display: grid;
    grid-template-columns: 1.2fr 1fr;
    align-items: end;
    gap: 32px;
    max-width: 1440px;
    margin: 0 auto;
    padding: 0 var(--pad) 64px;
  }
  .title {
    font-size: clamp(44px, 6vw, 92px);
    line-height: 0.98;
    letter-spacing: -0.015em;
  }
  .lede {
    justify-self: end;
    max-width: 420px;
    margin-bottom: 8px;
    color: rgba(236, 233, 214, 0.86);
    font-size: 15px;
  }

  @media (max-width: 899px) {
    .content {
      grid-template-columns: 1fr;
      gap: 20px;
      padding-bottom: 40px;
    }
    .lede {
      justify-self: start;
    }
  }
`

export default PageHero
