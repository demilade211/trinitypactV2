'use client'

import { useRef } from 'react'
import styled from 'styled-components'
import { Container } from '@/components/landing/LandingShell'
import Eyebrow from '@/components/landing/Eyebrow'
import { gsap, useGSAP, MOTION_OK, inView, riseLines, fadeUp } from '@/components/landing/motion'

// From the original "Why Choose TPL?" section, lightly copy-edited.
const REASONS = [
  {
    title: 'Global Presence',
    text: 'TPL operates on a global scale, bringing diverse expertise, international market insights, and the ability to handle projects on a larger scale.',
  },
  {
    title: 'Innovative Solutions',
    text: 'TPL stands out for its commitment to innovation, continuously adopting cutting-edge approaches for clients seeking forward-thinking solutions.',
  },
  {
    title: 'Proven Track Record',
    text: 'A consistent record of success in our industry. Our history of delivering quality services showcases reliability and competence.',
  },
  {
    title: 'Customer-Centric Approach',
    text: 'We place a high value on customer satisfaction, ensuring your needs are understood and met effectively for a positive experience.',
  },
  {
    title: 'Reputation & Reviews',
    text: 'Positive reviews and a strong reputation within the industry speak to our credibility and the satisfaction of our clients.',
  },
  {
    title: 'Comprehensive Services',
    text: 'A full suite of services that cater to varied requirements — a one-stop solution for clients across their property journey.',
  },
  {
    title: 'Financial Stability',
    text: 'A financially sound company is better placed to weather economic fluctuations and fulfil its commitments over long-term partnerships.',
  },
]

const WhyChoose = () => {
  const ref = useRef(null)

  useGSAP(
    () => {
      gsap.matchMedia().add(MOTION_OK, () => {
        fadeUp('[data-eyebrow], .intro p', { stagger: 0.1, scrollTrigger: inView('.intro') })
        riseLines('.title', { scrollTrigger: inView('.intro') })
        gsap.utils.toArray('.row', ref.current).forEach((row) => {
          const trigger = inView(row, 'top 88%')
          gsap.from(row, { '--rule': 0, duration: 1.2, ease: 'power3.inOut', scrollTrigger: trigger })
          fadeUp(row.querySelectorAll('.num, h3, p'), { stagger: 0.08, delay: 0.15, scrollTrigger: trigger })
        })
      })
    },
    { scope: ref }
  )

  return (
    <Section ref={ref}>
      <Container className='grid'>
        <div className='intro'>
          <Eyebrow>Why Choose Us</Eyebrow>
          <h2 className='title'>
            Why Choose
            <br />
            TPL Trinitypact?
          </h2>
          <p>
            Seven reasons clients and investors trust us with their property journey — from first conversation to
            completed development.
          </p>
        </div>

        <ol className='list'>
          {REASONS.map((r, i) => (
            <li key={r.title} className='row'>
              <span className='num serif'>{String(i + 1).padStart(2, '0')}</span>
              <h3>{r.title}</h3>
              <p>{r.text}</p>
            </li>
          ))}
        </ol>
      </Container>
    </Section>
  )
}

const Section = styled.section`
  padding-block: var(--section);
  background: var(--ink);
  color: var(--cream);

  .grid {
    display: grid;
    grid-template-columns: 0.8fr 1.4fr;
    align-items: start;
    gap: clamp(40px, 6vw, 112px);
  }
  .intro {
    position: sticky;
    top: 48px;
    p {
      max-width: 320px;
      margin-top: 28px;
      color: rgba(236, 233, 214, 0.72);
      font-size: 14px;
    }
  }
  .title {
    font-size: clamp(32px, 3.7vw, 54px);
    line-height: 1.1;
  }
  .list {
    list-style: none;
  }
  .row {
    --rule: 1;
    position: relative;
    display: grid;
    grid-template-columns: 56px 1fr 1.3fr;
    align-items: baseline;
    gap: 24px;
    padding: 30px 0;
    &::before {
      content: '';
      position: absolute;
      inset: 0 0 auto 0;
      height: 1px;
      background: var(--line-dark);
      transform: scaleX(var(--rule));
      transform-origin: left;
    }
    &:last-child {
      border-bottom: 1px solid var(--line-dark);
    }
  }
  .num {
    color: var(--olive);
    font-size: 18px;
  }
  h3 {
    font-size: clamp(22px, 1.9vw, 28px);
    line-height: 1.1;
  }
  p {
    color: rgba(236, 233, 214, 0.72);
    font-size: 14px;
  }

  @media (max-width: 1199px) {
    .grid {
      grid-template-columns: 1fr;
    }
    .intro {
      position: static;
    }
  }
  @media (max-width: 767px) {
    .row {
      grid-template-columns: 40px 1fr;
      gap: 10px 16px;
      p {
        grid-column: 2;
      }
    }
  }
`

export default WhyChoose
