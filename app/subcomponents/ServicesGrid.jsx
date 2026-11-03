'use client'

import { useRef } from 'react'
import styled from 'styled-components'
import { Container } from '@/components/landing/LandingShell'
import Eyebrow from '@/components/landing/Eyebrow'
import { Artwork, GeoMark } from '@/components/landing/Shapes'
import { gsap, useGSAP, MOTION_OK, inView, riseLines, fadeUp } from '@/components/landing/motion'

const SERVICES = [
  {
    title: 'Real Estate Development',
    mark: 'meet',
    text: 'TPL Trinitypact specializes in visionary real estate development, bringing innovative concepts to life. Our team is dedicated to creating sustainable and thriving communities that redefine the standard of living.',
  },
  {
    title: 'Project Management',
    mark: 'step',
    text: 'We excel in project management, ensuring seamless execution from inception to completion. Our experienced professionals navigate complexities, optimize resources, and deliver projects on time and within budget.',
  },
  {
    title: 'Property Management',
    mark: 'hourglass',
    text: 'Trust us to handle your property with care and expertise — from tenant relations to maintenance — ensuring the optimal performance and value of your real estate assets.',
  },
  {
    title: 'Construction',
    mark: 'echo',
    text: 'We deliver high-quality projects with precision and efficiency. From groundbreaking to final touches, our skilled team manages every aspect, emphasizing safety, quality, and timely completion.',
  },
]

const ServicesGrid = () => {
  const ref = useRef(null)

  useGSAP(
    () => {
      gsap.matchMedia().add(MOTION_OK, () => {
        fadeUp('[data-eyebrow], .lede', { stagger: 0.1, scrollTrigger: inView('.title') })
        riseLines('.title', { scrollTrigger: inView('.title') })

        gsap.utils.toArray('.card', ref.current).forEach((card, i) => {
          const tl = gsap.timeline({ scrollTrigger: inView(card, 'top 88%'), delay: (i % 2) * 0.12 })
          tl.from(card, { autoAlpha: 0, y: 60, duration: 1.1, ease: 'power3.out' }).from(
            card.querySelector('.mark'),
            { scale: 0.4, rotate: -90, autoAlpha: 0, duration: 1, ease: 'power3.out' },
            0.25
          )
        })

        gsap.from('.art [data-shape]', {
          scale: 0,
          transformOrigin: '50% 0%',
          duration: 1.1,
          ease: 'power3.out',
          stagger: { each: 0.08, from: 'random' },
          scrollTrigger: inView('.art', 'top 85%'),
        })
      })
    },
    { scope: ref }
  )

  return (
    <Section ref={ref}>
      <Container>
        <div className='grid'>
          <div className='intro'>
            <Eyebrow>Our Services</Eyebrow>
          </div>
          <h2 className='title'>
            Exceptional Real Estate Services,
            <br />
            Tailored to Your Aspirations
          </h2>
          <p className='lede'>
            Our expertise extends beyond construction, as we provide valuable real estate advisory services, ensuring a
            comprehensive approach to your property journey.
          </p>

          {SERVICES.map((s) => (
            <article key={s.title} className='card'>
              <div className='surface'>
                <GeoMark variant={s.mark} className='mark' />
                <div>
                  <h3>{s.title}</h3>
                  <p>{s.text}</p>
                </div>
              </div>
            </article>
          ))}

          <div className='art'>
            <Artwork />
          </div>
        </div>
      </Container>
    </Section>
  )
}

const Section = styled.section`
  padding-block: var(--section);

  .grid {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    grid-template-areas:
      'intro title title'
      'lede  c1    c2'
      'c3    c4    art';
    gap: 18px;
  }
  .intro {
    grid-area: intro;
    padding-top: 14px;
  }
  .title {
    grid-area: title;
    margin-bottom: clamp(36px, 4vw, 56px);
    font-size: clamp(32px, 3.7vw, 54px);
    line-height: 1.1;
  }
  .lede {
    grid-area: lede;
    max-width: 390px;
    color: var(--text);
    font-size: 15px;
  }
  .card:nth-of-type(1) {
    grid-area: c1;
  }
  .card:nth-of-type(2) {
    grid-area: c2;
  }
  .card:nth-of-type(3) {
    grid-area: c3;
  }
  .card:nth-of-type(4) {
    grid-area: c4;
  }
  .card {
    display: flex;
  }
  /* GSAP animates .card on entry; hover lifts the inner surface so the two never fight. */
  .surface {
    display: flex;
    flex: 1;
    flex-direction: column;
    justify-content: space-between;
    gap: 72px;
    min-height: 424px;
    padding: 34px;
    border-radius: 14px;
    background: var(--olive);
    transition: transform 0.6s cubic-bezier(0.2, 0.7, 0.2, 1), box-shadow 0.6s cubic-bezier(0.2, 0.7, 0.2, 1);
    &:hover {
      transform: translateY(-6px);
      box-shadow: 0 24px 40px -24px rgba(0, 0, 0, 0.18);
    }
    h3 {
      margin-bottom: 26px;
      font-size: clamp(24px, 2.1vw, 31px);
      line-height: 1.1;
    }
    p {
      color: #45463f;
      font-size: 14px;
      line-height: 1.5;
    }
  }
  .mark {
    width: 68px;
    height: auto;
    color: var(--ink);
  }
  .art {
    grid-area: art;
    overflow: hidden;
    border-radius: 14px;
    svg {
      display: block;
      width: 100%;
      height: 100%;
    }
    [data-shape] {
      transform-box: fill-box;
    }
  }

  @media (max-width: 1199px) {
    .grid {
      grid-template-columns: repeat(2, 1fr);
      grid-template-areas:
        'intro intro'
        'title title'
        'lede  lede'
        'c1    c2'
        'c3    c4'
        'art   art';
    }
    .lede {
      margin-bottom: 24px;
    }
    .art {
      aspect-ratio: 2 / 1;
    }
  }
  @media (max-width: 767px) {
    .grid {
      grid-template-columns: 1fr;
      grid-template-areas: 'intro' 'title' 'lede' 'c1' 'c2' 'c3' 'c4' 'art';
    }
    .surface {
      min-height: 0;
      gap: 48px;
      padding: 26px;
    }
    .art {
      aspect-ratio: 444 / 424;
    }
  }
`

export default ServicesGrid
