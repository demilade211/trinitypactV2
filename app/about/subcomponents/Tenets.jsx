'use client'

import { useRef } from 'react'
import styled from 'styled-components'
import { Container } from '@/components/landing/LandingShell'
import Eyebrow from '@/components/landing/Eyebrow'
import { GeoMark } from '@/components/landing/Shapes'
import { gsap, useGSAP, MOTION_OK, inView, riseLines, fadeUp } from '@/components/landing/motion'

const TENETS = [
  {
    title: 'Innovation',
    mark: 'meet',
    text: 'Embrace creativity and forward-thinking to constantly evolve and deliver cutting-edge real estate solutions that surpass expectations.',
  },
  {
    title: 'Integrity',
    mark: 'arch',
    text: 'Uphold the highest standards of honesty and transparency in all our dealings, ensuring trust and credibility with our clients and partners.',
  },
  {
    title: 'Community Focus',
    mark: 'hourglass',
    text: 'Act as a responsible corporate citizen, actively contributing to the betterment of the communities in which we operate.',
  },
  {
    title: 'Client-Centric Approach',
    mark: 'step',
    text: 'Prioritize the needs and satisfaction of our clients, going above and beyond to deliver personalized and exceptional services.',
  },
  {
    title: 'Sustainability',
    mark: 'quarter',
    text: 'Commit to environmentally conscious practices in our developments, promoting eco-friendly and sustainable solutions for a greener future.',
  },
  {
    title: 'Employee Empowerment',
    mark: 'echo',
    text: 'Cultivate a positive and inclusive work environment that encourages the professional growth and well-being of our team.',
  },
]

const Tenets = () => {
  const ref = useRef(null)

  useGSAP(
    () => {
      gsap.matchMedia().add(MOTION_OK, () => {
        fadeUp('[data-eyebrow], .lede', { stagger: 0.1, scrollTrigger: inView('.head') })
        riseLines('.title', { scrollTrigger: inView('.head') })
        gsap.utils.toArray('.card', ref.current).forEach((card, i) => {
          gsap
            .timeline({ scrollTrigger: inView(card, 'top 88%'), delay: (i % 3) * 0.12 })
            .from(card, { autoAlpha: 0, y: 60, duration: 1.1, ease: 'power3.out' })
            .from(card.querySelector('.mark'), { scale: 0.4, rotate: -90, autoAlpha: 0, duration: 1, ease: 'power3.out' }, 0.25)
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
            <Eyebrow>Our Tenets</Eyebrow>
            <h2 className='title'>
              Six Principles Behind
              <br />
              Everything We Build
            </h2>
          </div>
          <p className='lede'>
            Strive for excellence in every aspect of our operations, from property development to customer service,
            fostering trust and long-term relationships.
          </p>
        </div>

        <ol className='grid'>
          {TENETS.map((t, i) => (
            <li key={t.title} className='card'>
              <div className='surface'>
                <div className='top'>
                  <GeoMark variant={t.mark} className='mark' />
                  <span className='num serif'>{String(i + 1).padStart(2, '0')}</span>
                </div>
                <div>
                  <h3>{t.title}</h3>
                  <p>{t.text}</p>
                </div>
              </div>
            </li>
          ))}
        </ol>
      </Container>
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
    margin-bottom: clamp(40px, 4.5vw, 64px);
  }
  .title {
    font-size: clamp(32px, 3.7vw, 54px);
    line-height: 1.1;
  }
  .lede {
    max-width: 360px;
    color: var(--text);
    font-size: 15px;
  }
  .grid {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: 18px;
    list-style: none;
  }
  .card {
    display: flex;
  }
  /* GSAP animates .card on entry; hover lifts the inner surface. */
  .surface {
    display: flex;
    flex: 1;
    flex-direction: column;
    justify-content: space-between;
    gap: 64px;
    min-height: 340px;
    padding: 34px;
    border-radius: 14px;
    background: var(--olive);
    transition: transform 0.6s cubic-bezier(0.2, 0.7, 0.2, 1), box-shadow 0.6s cubic-bezier(0.2, 0.7, 0.2, 1);
    &:hover {
      transform: translateY(-6px);
      box-shadow: 0 24px 40px -24px rgba(0, 0, 0, 0.18);
    }
  }
  .top {
    display: flex;
    align-items: flex-start;
    justify-content: space-between;
  }
  .mark {
    width: 52px;
    height: auto;
    color: var(--ink);
  }
  .num {
    color: rgba(25, 25, 23, 0.45);
    font-size: 20px;
  }
  h3 {
    margin-bottom: 18px;
    font-size: clamp(24px, 2vw, 30px);
    line-height: 1.1;
  }
  p {
    color: #45463f;
    font-size: 14px;
  }

  @media (max-width: 1199px) {
    .grid {
      grid-template-columns: repeat(2, 1fr);
    }
  }
  @media (max-width: 767px) {
    .head {
      flex-direction: column;
      align-items: flex-start;
    }
    .grid {
      grid-template-columns: 1fr;
    }
    .surface {
      min-height: 0;
      gap: 40px;
      padding: 26px;
    }
  }
`

export default Tenets
