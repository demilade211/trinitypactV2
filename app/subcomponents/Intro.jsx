'use client'

import { useRef } from 'react'
import Image from 'next/image'
import styled from 'styled-components'
import { Container } from '@/components/landing/LandingShell'
import Eyebrow from '@/components/landing/Eyebrow'
import { gsap, useGSAP, MOTION_OK, inView, riseLines, fadeUp, countUp } from '@/components/landing/motion'
import { STATS } from '@/components/landing/site'

// The second figure sits on the dark tile, as in the reference layout.
const DARK_STAT = 1

const Intro = () => {
  const ref = useRef(null)

  useGSAP(
    () => {
      gsap.matchMedia().add(MOTION_OK, () => {
        const arcs = gsap.utils.toArray('.arc', ref.current)
        gsap.fromTo(arcs, { clipPath: 'inset(0% 0% 0% 100%)' }, {
          clipPath: 'inset(0% 0% 0% 0%)',
          duration: 1.5,
          ease: 'power4.inOut',
          stagger: 0.18,
          scrollTrigger: inView('.arcs', 'top 75%'),
        })
        gsap.from('.arc img', {
          scale: 1.3,
          duration: 2,
          ease: 'power3.out',
          stagger: 0.18,
          scrollTrigger: inView('.arcs', 'top 75%'),
        })

        fadeUp('[data-eyebrow]', { scrollTrigger: inView('.copy') })
        riseLines('.title', { scrollTrigger: inView('.copy') })
        fadeUp('.stat', { stagger: 0.12, scrollTrigger: inView('.stats', 'top 85%') })

        return countUp(ref.current.querySelectorAll('[data-count]'), ref.current.querySelector('.stats'))
      })
    },
    { scope: ref }
  )

  return (
    <Section ref={ref}>
      <Container className='grid'>
        <div className='arcs'>
          <figure className='arc'>
            <Image
              src='/images/home/intro-facade.jpg'
              alt='Dark panelled facade with timber screens lit at dusk'
              fill
              sizes='(max-width: 899px) 50vw, 24vw'
            />
          </figure>
          <figure className='arc'>
            <Image
              src='/images/home/intro-courtyard.jpg'
              alt='White rendered house with a planted entrance courtyard'
              fill
              sizes='(max-width: 899px) 50vw, 24vw'
            />
          </figure>
        </div>

        <div className='copy'>
          <Eyebrow>About TPL Trinitypact</Eyebrow>
          <h2 className='title'>A dynamic real estate development company rooted in the vibrant city of Lagos.</h2>
          <dl className='stats'>
            {STATS.map((stat, i) => (
              <div key={stat.label} className={`stat ${i === DARK_STAT ? 'is-dark' : ''}`}>
                <dt>{stat.label}</dt>
                <dd className='serif'>
                  <span data-count={stat.value} data-decimals={stat.decimals}>
                    {stat.value.toFixed(stat.decimals || 0)}
                  </span>
                  {stat.suffix}
                </dd>
              </div>
            ))}
          </dl>
        </div>
      </Container>
    </Section>
  )
}

const Section = styled.section`
  padding-block: var(--section);

  .grid {
    display: grid;
    grid-template-columns: 0.92fr 1fr;
    align-items: center;
    gap: clamp(32px, 4.5vw, 72px);
  }
  .arcs {
    display: grid;
    grid-template-columns: 1fr 1fr;
  }
  .arc {
    position: relative;
    aspect-ratio: 337 / 672;
    overflow: hidden;
    /* Left half of an ellipse: round on the left, flat on the right. */
    border-radius: 100% 0 0 100% / 50% 0 0 50%;
    img {
      object-fit: cover;
      filter: var(--grade);
    }
  }
  .arc:last-child img {
    object-position: 35% 50%;
  }

  .title {
    max-width: 620px;
    font-size: clamp(32px, 3.7vw, 54px);
    line-height: 1.12;
  }
  .stats {
    display: grid;
    grid-template-columns: 1fr 1fr;
    margin-top: clamp(40px, 5vw, 76px);
    border-top: 1px solid var(--line);
  }
  .stat {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    gap: 40px;
    min-height: 198px;
    padding: 34px;
    &:nth-child(odd) {
      border-right: 1px solid var(--line);
    }
    &:nth-child(-n + 2) {
      border-bottom: 1px solid var(--line);
    }
    dt {
      max-width: 200px;
      color: var(--text);
      font-size: 14px;
      line-height: 1.45;
    }
    dd {
      font-size: clamp(40px, 4vw, 60px);
      line-height: 1;
      font-variant-numeric: lining-nums tabular-nums;
    }
    &.is-dark {
      background: var(--ink);
      border-color: var(--ink);
      dt {
        color: rgba(236, 233, 214, 0.78);
      }
      dd {
        color: var(--cream);
      }
    }
  }

  @media (max-width: 899px) {
    .grid {
      grid-template-columns: 1fr;
    }
    .arcs {
      width: min(100%, 520px);
    }
    .stat {
      min-height: 0;
      padding: 22px 18px;
      gap: 28px;
    }
  }
`

export default Intro
