'use client'

import { useRef } from 'react'
import styled from 'styled-components'
import { Container } from '@/components/landing/LandingShell'
import Eyebrow from '@/components/landing/Eyebrow'
import PillButton from '@/components/landing/PillButton'
import { SITE } from '@/components/landing/site'
import { gsap, useGSAP, MOTION_OK, inView, riseLines, fadeUp } from '@/components/landing/motion'

// Simplified form of SITE.postal: Google geocodes it more reliably without "Off Oguntolu Street".
const QUERY = encodeURIComponent('7 Bailey Street, Shomolu, Lagos, Nigeria')
const MAP_EMBED = `https://www.google.com/maps?q=${QUERY}&z=16&output=embed`
const MAP_LINK = `https://www.google.com/maps/search/?api=1&query=${QUERY}`
const DIRECTIONS = `https://www.google.com/maps/dir/?api=1&destination=${QUERY}`

const MapBand = () => {
  const ref = useRef(null)

  useGSAP(
    () => {
      gsap.matchMedia().add(MOTION_OK, () => {
        fadeUp('[data-eyebrow]', { scrollTrigger: inView(ref.current, 'top 75%') })
        riseLines('.title', { scrollTrigger: inView(ref.current, 'top 75%') })
        // Explicit classes: the Eyebrow is itself a <p>, so '.card p' would tween it twice.
        fadeUp('.addr, .hours, .actions', { stagger: 0.1, delay: 0.25, scrollTrigger: inView(ref.current, 'top 75%') })
        gsap.fromTo(
          '.map',
          { clipPath: 'inset(0% 0% 0% 100%)' },
          { clipPath: 'inset(0% 0% 0% 0%)', duration: 1.5, ease: 'power4.inOut', scrollTrigger: inView('.map', 'top 80%') }
        )
      })
    },
    { scope: ref }
  )

  return (
    <Section ref={ref}>
      <Container className='grid'>
        <div className='card'>
          <Eyebrow>Visit Our Office</Eyebrow>
          <h2 className='title'>
            Shomolu,
            <br />
            Lagos.
          </h2>
          <p className='addr'>
            {SITE.address[0]} {SITE.address[1]}
          </p>
          <p className='hours'>{SITE.hours}</p>
          <div className='actions'>
            <PillButton href={DIRECTIONS} tone='olive' target='_blank' rel='noopener noreferrer'>
              Get Directions
            </PillButton>
            <a className='link' href={MAP_LINK} target='_blank' rel='noopener noreferrer'>
              Open in Google Maps
            </a>
          </div>
        </div>
        <div className='map'>
          <iframe
            title={`Map showing ${SITE.address.join(' ')}`}
            src={MAP_EMBED}
            loading='lazy'
            referrerPolicy='no-referrer-when-downgrade'
            allowFullScreen
          />
        </div>
      </Container>
    </Section>
  )
}

const Section = styled.section`
  padding-block: calc(var(--section) * 0.75);
  background: var(--ink);
  color: var(--cream);

  .grid {
    display: grid;
    grid-template-columns: 0.75fr 1.5fr;
    align-items: stretch;
    gap: clamp(32px, 5vw, 80px);
  }
  .card {
    display: flex;
    flex-direction: column;
    justify-content: center;
  }
  .title {
    margin-bottom: 28px;
    font-size: clamp(40px, 4.6vw, 70px);
    line-height: 1;
  }
  .card p {
    max-width: 320px;
    color: rgba(236, 233, 214, 0.78);
    font-size: 15px;
  }
  .hours {
    margin-top: 8px;
    color: var(--muted) !important;
  }
  .actions {
    display: flex;
    flex-wrap: wrap;
    align-items: center;
    gap: 20px 24px;
    margin-top: 36px;
  }
  .link {
    font-size: 14px;
    background: linear-gradient(currentColor, currentColor) 0 100% / 100% 1px no-repeat;
    transition: background-size 0.5s cubic-bezier(0.65, 0, 0.25, 1);
    &:hover,
    &:focus-visible {
      background-size: 0 1px;
    }
  }
  .map {
    position: relative;
    min-height: 460px;
    overflow: hidden;
    border-radius: 14px;
    background: var(--ink-2);
    iframe {
      position: absolute;
      inset: 0;
      width: 100%;
      height: 100%;
      border: 0;
      /* Mute Google's colours to sit inside the dark palette. */
      filter: grayscale(1) invert(0.92) contrast(0.9) brightness(0.95);
    }
  }

  @media (max-width: 899px) {
    .grid {
      grid-template-columns: 1fr;
    }
    .map {
      min-height: 360px;
    }
  }
`

export default MapBand
