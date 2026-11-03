'use client'

import { useRef } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import styled from 'styled-components'
import { Container } from '@/components/landing/LandingShell'
import Eyebrow from '@/components/landing/Eyebrow'
import PillButton from '@/components/landing/PillButton'
import { gsap, useGSAP, MOTION_OK, inView, riseLines, fadeUp } from '@/components/landing/motion'

const CATEGORIES = [
  {
    label: 'Residential',
    src: '/images/home/category-house.jpg',
    alt: 'Modern house with a terracotta-clad upper volume and landscaped front garden',
  },
  {
    label: 'Apartments',
    src: '/images/home/category-apartment.jpg',
    alt: 'Bright open-plan apartment living room with a timber feature wall',
  },
  {
    label: 'Commercial',
    src: '/images/home/category-office.jpg',
    alt: 'Glass-walled office space with a long meeting table',
  },
]

const Categories = () => {
  const ref = useRef(null)

  useGSAP(
    () => {
      gsap.matchMedia().add(MOTION_OK, () => {
        fadeUp('[data-eyebrow], .count', { scrollTrigger: inView('.head') })
        riseLines('.title', { scrollTrigger: inView('.head') })
        fadeUp('.head .all, .blurb', { delay: 0.3, scrollTrigger: inView('.head') })

        gsap.fromTo(
          '.tile',
          { clipPath: 'inset(0% 100% 0% 0%)' },
          {
            clipPath: 'inset(0% 0% 0% 0%)',
            duration: 1.4,
            ease: 'power4.inOut',
            stagger: 0.15,
            scrollTrigger: inView('.tiles', 'top 80%'),
          }
        )
        gsap.from('.tile img', { scale: 1.25, duration: 2, ease: 'power3.out', stagger: 0.15, scrollTrigger: inView('.tiles', 'top 80%') })
        gsap.from('.tile .label span', {
          yPercent: 120,
          autoAlpha: 0,
          duration: 1,
          ease: 'power3.out',
          stagger: 0.15,
          delay: 0.7,
          scrollTrigger: inView('.tiles', 'top 80%'),
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
            <Eyebrow>Browse by Categories</Eyebrow>
            <h2>
              <span className='title'>
                Browse Our
                <br />
                Property Categories
              </span>
              <span className='count'>({CATEGORIES.length})</span>
            </h2>
          </div>
          <div className='all'>
            <PillButton href='/projects'>View All</PillButton>
          </div>
        </div>

        <div className='body'>
          <p className='blurb'>
            From crafting distinctive residential spaces to shaping commercial landscapes, we are your trusted partner in
            the world of real estate.
          </p>
          <ul className='tiles'>
            {CATEGORIES.map((c) => (
              <li key={c.label}>
                <Link href='/projects' className='tile'>
                  <span className='zoom'>
                    <Image src={c.src} alt={c.alt} fill sizes='(max-width: 767px) 100vw, 25vw' />
                  </span>
                  <span className='label serif'>
                    <span>{c.label}</span>
                  </span>
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </Container>
    </Section>
  )
}

const Section = styled.section`
  padding-block: 0 var(--section);

  .head {
    display: flex;
    align-items: flex-end;
    justify-content: space-between;
    gap: 24px;
    margin-bottom: clamp(40px, 4.5vw, 64px);
  }
  h2 {
    display: flex;
    align-items: flex-end;
    gap: 14px;
  }
  .title {
    display: block;
    font-size: clamp(32px, 3.2vw, 46px);
    line-height: 1.1;
  }
  .count {
    padding-bottom: 8px;
    color: var(--text);
    font-size: 15px;
  }
  .all {
    padding-bottom: 6px;
  }

  .body {
    display: grid;
    grid-template-columns: 0.78fr 3fr;
    gap: 18px;
  }
  .blurb {
    align-self: end;
    max-width: 250px;
    color: var(--text);
    font-size: 15px;
  }
  .tiles {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: 18px;
    list-style: none;
  }
  .tile {
    position: relative;
    display: block;
    aspect-ratio: 350 / 424;
    overflow: hidden;
    color: var(--cream);
    .zoom {
      position: absolute;
      inset: 0;
      transition: transform 1.1s cubic-bezier(0.2, 0.7, 0.2, 1);
    }
    img {
      object-fit: cover;
      filter: var(--grade);
    }
    &::after {
      content: '';
      position: absolute;
      inset: 55% 0 0 0;
      background: linear-gradient(0deg, rgba(14, 14, 12, 0.5), rgba(14, 14, 12, 0));
    }
  }
  .label {
    position: absolute;
    left: 18px;
    bottom: 16px;
    z-index: 1;
    font-size: clamp(24px, 2vw, 30px);
    line-height: 1;
    transition: transform 0.6s cubic-bezier(0.2, 0.7, 0.2, 1);
    span {
      display: block;
    }
  }
  .tile:hover .zoom {
    transform: scale(1.04);
  }
  .tile:hover .label {
    transform: translateX(6px);
  }

  @media (max-width: 1199px) {
    .body {
      grid-template-columns: 1fr;
    }
    .blurb {
      order: 2;
      max-width: 420px;
    }
  }
  @media (max-width: 767px) {
    .head {
      flex-direction: column;
      align-items: flex-start;
    }
    .all {
      margin-left: 0;
    }
    .tiles {
      grid-template-columns: 1fr;
    }
    .tile {
      aspect-ratio: 4 / 3;
    }
  }
`

export default Categories
