'use client'

import { useEffect } from 'react'
import styled from 'styled-components'
import Lenis from 'lenis'
import 'lenis/dist/lenis.css'
import { gsap, ScrollTrigger, MOTION_OK } from './motion'
import Nav from './Nav'
import Footer from './Footer'

const LandingShell = ({ className, children }) => {
  // Inertial scrolling, driven by GSAP's ticker so ScrollTrigger stays in sync.
  useEffect(() => {
    if (!window.matchMedia(MOTION_OK).matches) return
    // anchors: in-page #links glide instead of jumping (respects scroll-margin-top).
    const lenis = new Lenis({ duration: 1.15, anchors: true })
    const tick = (time) => lenis.raf(time * 1000)
    lenis.on('scroll', ScrollTrigger.update)
    gsap.ticker.add(tick)
    gsap.ticker.lagSmoothing(0)
    return () => {
      gsap.ticker.remove(tick)
      lenis.destroy()
    }
  }, [])

  return (
    <Root className={className}>
      <noscript>
        <style>{'[data-preload]{opacity:1!important;visibility:visible!important}'}</style>
      </noscript>
      <Nav />
      <main>{children}</main>
      <Footer />
    </Root>
  )
}

export const Container = styled.div`
  width: 100%;
  max-width: 1440px;
  margin: 0 auto;
  padding-inline: var(--pad);
`

const Root = styled.div`
  --bg: #e4e5df;
  --ink: #191917;
  --ink-2: #242522;
  --text: #55564f;
  --muted: #85867e;
  --olive: #d6d7b7;
  --olive-strong: #dcddbf;
  --cream: #ece9d6;
  --line: rgba(25, 25, 23, 0.16);
  --line-dark: rgba(236, 233, 214, 0.14);
  --error: #9e3420;
  --pad: 64px;
  --section: 160px;
  --grade: saturate(0.82) contrast(0.97) sepia(0.06);

  position: relative;
  overflow-x: clip;
  background: var(--bg);
  color: var(--ink);
  font-family: var(--font-sans), 'Helvetica Neue', Arial, sans-serif;
  font-size: 15px;
  line-height: 1.5;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;

  @media (max-width: 1199px) {
    --pad: 28px;
    --section: 112px;
  }
  @media (max-width: 767px) {
    --pad: 16px;
    --section: 80px;
  }

  h1,
  h2,
  h3,
  .serif {
    font-family: var(--font-serif), Georgia, serif;
    font-weight: 400;
    letter-spacing: -0.005em;
  }
  a {
    color: inherit;
    text-decoration: none;
  }
  img {
    max-width: none;
  }
  /* SplitText line masks: keep descenders from being clipped. */
  [data-line-mask],
  .line-mask {
    padding-bottom: 0.08em;
    margin-bottom: -0.08em;
  }

  @media ${'(prefers-reduced-motion: no-preference)'} {
    [data-preload] {
      opacity: 0;
    }
  }
`

export default LandingShell
