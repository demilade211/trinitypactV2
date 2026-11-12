'use client'

import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { SplitText } from 'gsap/SplitText'
import { useGSAP } from '@gsap/react'

gsap.registerPlugin(ScrollTrigger, SplitText, useGSAP)

export { gsap, ScrollTrigger, useGSAP }

// Every animation is registered inside gsap.matchMedia() with this query,
// so visitors who prefer reduced motion get the static page.
export const MOTION_OK = '(prefers-reduced-motion: no-preference)'

export const EASE = 'power3.out'

export const inView = (trigger, start = 'top 78%') => ({ trigger, start, once: true })

// Masked line-by-line rise used for the serif headings. autoSplit re-splits
// on resize / font load and hands the running tween over to the new lines.
// aria: 'none' — splitting into whole lines keeps words intact for screen
// readers, and SplitText's default aria-label is invalid on span/p elements.
export const riseLines = (target, vars = {}) =>
  SplitText.create(target, {
    type: 'lines',
    mask: 'lines',
    aria: 'none',
    autoSplit: true,
    onSplit: (self) =>
      gsap.from(self.lines, {
        yPercent: 115,
        duration: 1.15,
        ease: 'power4.out',
        stagger: 0.09,
        ...vars,
      }),
  })

// Counts each [data-count] element up from zero when `trigger` enters view.
// Returns a restore function for the matchMedia cleanup.
export const countUp = (elements, trigger) => {
  const restores = gsap.utils.toArray(elements).map((el) => {
    const end = Number(el.dataset.count)
    const decimals = Number(el.dataset.decimals || 0)
    const counter = { v: 0 }
    el.textContent = counter.v.toFixed(decimals)
    gsap.to(counter, {
      v: end,
      duration: 1.8,
      ease: 'power2.out',
      scrollTrigger: inView(trigger, 'top 85%'),
      onUpdate: () => (el.textContent = counter.v.toFixed(decimals)),
    })
    return () => (el.textContent = end.toFixed(decimals))
  })
  return () => restores.forEach((restore) => restore())
}

export const fadeUp =(targets, vars = {}) =>
  gsap.from(targets, { autoAlpha: 0, y: 28, duration: 1, ease: EASE, ...vars })
