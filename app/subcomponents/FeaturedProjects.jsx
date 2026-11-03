'use client'

import { useRef } from 'react'
import Image from 'next/image'
import styled from 'styled-components'
import { Container } from '@/components/landing/LandingShell'
import Eyebrow from '@/components/landing/Eyebrow'
import PillButton from '@/components/landing/PillButton'
import { gsap, useGSAP, ScrollTrigger, MOTION_OK, inView, riseLines, fadeUp } from '@/components/landing/motion'
import { PROJECTS } from '@/components/landing/projects'

const FeaturedProjects = () => {
  const ref = useRef(null)

  useGSAP(
    () => {
      gsap.matchMedia().add(MOTION_OK, () => {
        fadeUp('[data-eyebrow]', { scrollTrigger: inView('.head') })
        riseLines('.title', { scrollTrigger: inView('.head') })

        gsap.set('.card .frame', { clipPath: 'inset(100% 0% 0% 0%)' })
        gsap.set('.card .frame img', { scale: 1.25 })
        gsap.set('.card .meta', { autoAlpha: 0, y: 18 })
        ScrollTrigger.batch('.card', {
          start: 'top 85%',
          once: true,
          onEnter: (cards) => {
            const tl = gsap.timeline()
            tl.to(cards.map((c) => c.querySelector('.frame')), {
              clipPath: 'inset(0% 0% 0% 0%)',
              duration: 1.3,
              ease: 'power4.inOut',
              stagger: 0.12,
            })
              .to(cards.map((c) => c.querySelector('.frame img')), { scale: 1, duration: 1.8, ease: 'power3.out', stagger: 0.12 }, 0)
              .to(cards.map((c) => c.querySelector('.meta')), { autoAlpha: 1, y: 0, duration: 0.9, ease: 'power3.out', stagger: 0.12 }, 0.55)
          },
        })

        fadeUp('.more', { scrollTrigger: inView('.more', 'top 92%') })
      })
    },
    { scope: ref }
  )

  return (
    <Section ref={ref}>
      <Container>
        <div className='head'>
          <Eyebrow>Our Projects</Eyebrow>
          <h2 className='title'>
            Crafting Distinctive
            <br />
            Residential Spaces
          </h2>
        </div>

        <ul className='grid'>
          {PROJECTS.map((p) => (
            <li key={p.src} className='card'>
              <div className='frame'>
                <div className='zoom'>
                  <Image src={p.src} alt={p.alt} fill sizes='(max-width: 599px) 100vw, (max-width: 1199px) 50vw, 33vw' />
                </div>
                <span className='tag serif'>{p.tag}</span>
              </div>
              <div className='meta'>
                <h3>{p.title}</h3>
                <p>{p.detail}</p>
              </div>
            </li>
          ))}
        </ul>

        <div className='more'>
          <PillButton href='/projects'>View All Projects</PillButton>
        </div>
      </Container>
    </Section>
  )
}

const Section = styled.section`
  padding-block: 40px var(--section);

  .head {
    display: flex;
    flex-direction: column;
    align-items: center;
    margin-bottom: clamp(40px, 5vw, 72px);
    text-align: center;
  }
  .title {
    font-size: clamp(32px, 3.7vw, 54px);
    line-height: 1.12;
  }
  .grid {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: 28px 18px;
    list-style: none;
  }
  .frame {
    position: relative;
    aspect-ratio: 1;
    overflow: hidden;
    background: #d9dad3;
    .zoom {
      position: absolute;
      inset: 0;
      transition: transform 1.1s cubic-bezier(0.2, 0.7, 0.2, 1);
    }
    img {
      object-fit: cover;
      filter: var(--grade);
    }
  }
  .card:hover .zoom {
    transform: scale(1.03);
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
  .meta {
    padding-top: 16px;
    h3 {
      font-size: 17px;
      line-height: 1.2;
    }
    p {
      margin-top: 4px;
      color: var(--text);
      font-size: 13px;
    }
  }
  .more {
    display: flex;
    justify-content: center;
    margin-top: clamp(40px, 5vw, 64px);
  }

  @media (max-width: 1199px) {
    .grid {
      grid-template-columns: repeat(2, 1fr);
    }
  }
  @media (max-width: 599px) {
    .grid {
      grid-template-columns: 1fr;
    }
  }
`

export default FeaturedProjects
