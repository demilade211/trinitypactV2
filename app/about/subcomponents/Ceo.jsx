'use client'

import { useRef } from 'react'
import Image from 'next/image'
import styled from 'styled-components'
import { Container } from '@/components/landing/LandingShell'
import Eyebrow from '@/components/landing/Eyebrow'
import { GeoMark } from '@/components/landing/Shapes'
import { gsap, useGSAP, MOTION_OK, inView, riseLines, fadeUp } from '@/components/landing/motion'

// Set to the portrait's path (e.g. '/images/pages/about/ceo.jpg') once the
// photo is supplied; until then a monogram placeholder is shown.
const PORTRAIT = '/images/pages/about/ceo.jpeg'

const CEO = {
  name: 'Prince Adedayo Ogunkoya',
  role: 'Founder & Chief Executive Officer',
  initials: 'AO',
}

const Ceo = () => {
  const ref = useRef(null)

  useGSAP(
    () => {
      gsap.matchMedia().add(MOTION_OK, () => {
        gsap.fromTo(
          '.portrait',
          { clipPath: 'inset(100% 0% 0% 0%)' },
          { clipPath: 'inset(0% 0% 0% 0%)', duration: 1.6, ease: 'power4.inOut', scrollTrigger: inView('.portrait', 'top 80%') }
        )
        gsap.from('.portrait .fill', { scale: 1.2, duration: 2.2, ease: 'power3.out', scrollTrigger: inView('.portrait', 'top 80%') })
        fadeUp('.caption', { delay: 0.6, scrollTrigger: inView('.portrait', 'top 80%') })

        fadeUp('[data-eyebrow], .role', { stagger: 0.1, scrollTrigger: inView('.bio', 'top 78%') })
        riseLines('.name', { scrollTrigger: inView('.bio', 'top 78%') })
        gsap.utils.toArray('.bio .para', ref.current).forEach((p) => fadeUp(p, { scrollTrigger: inView(p, 'top 88%') }))
        riseLines('.belief p', { stagger: 0.06, scrollTrigger: inView('.belief', 'top 82%') })
        fadeUp('.belief .tag', { scrollTrigger: inView('.belief', 'top 82%') })
        fadeUp('.sign > *', { stagger: 0.1, scrollTrigger: inView('.sign', 'top 90%') })
      })
    },
    { scope: ref }
  )

  return (
    <Section ref={ref} aria-labelledby='ceo-name'>
      <Container className='grid'>
        <div className='aside'>
          <figure className='portrait'>
            {PORTRAIT ? (
              <Image className='fill' src={PORTRAIT} alt={`Portrait of ${CEO.name}`} fill sizes='(max-width: 899px) 90vw, 36vw' />
            ) : (
              <div className='fill placeholder' role='img' aria-label={`${CEO.name} — portrait coming soon`}>
                <GeoMark variant='quarter' className='shape s1' />
                <GeoMark variant='arch' className='shape s2' />
                <span className='monogram serif'>{CEO.initials}</span>
              </div>
            )}
          </figure>
          <figcaption className='caption'>
            <span className='serif'>{CEO.name}</span>
            <span>{CEO.role}</span>
          </figcaption>
        </div>

        <div className='bio'>
          <Eyebrow>About the CEO</Eyebrow>
          <h2 id='ceo-name' className='name'>
            {CEO.name}
          </h2>
          <p className='role'>{CEO.role}, TPL TrinityPact Limited</p>

          <div className='body'>
            <p className='para lead'>
              Prince Adedayo Ogunkoya is the Founder and Chief Executive Officer of TPL TrinityPact Limited, a real estate
              development and investment company committed to creating sustainable residential and commercial property
              solutions in Lagos, Nigeria.
            </p>
            <p className='para'>
              With a strong passion for property development, project management, and wealth creation through real
              estate, Prince Adedayo has led the successful execution of multiple development projects, including
              completed residential investments that continue to generate steady returns for investors. Under his
              leadership, TPL TrinityPact Limited has built a reputation for integrity, transparency, quality
              construction, and long-term value creation.
            </p>
            <p className='para'>
              His vision is to make real estate investment accessible and profitable for both local and international
              investors through innovative lease investment models and strategically located developments.
            </p>
          </div>

          <aside className='belief'>
            <span className='tag'>What he believes</span>
            <p className='serif'>
              Real estate remains one of the most reliable ways to preserve wealth, stay ahead of inflation, and build
              generational assets.
            </p>
          </aside>

          <div className='body'>
            <p className='para'>
              Prince Adedayo is dedicated to sustainable development, community empowerment, and professional
              excellence. Through TPL TrinityPact Limited, he continues to champion projects that combine affordability,
              functionality, and strong investment performance, while fostering trusted partnerships with clients,
              investors, and stakeholders.
            </p>
            <p className='para'>
              As CEO, he remains focused on expanding the company’s portfolio across key growth locations and positioning
              TPL TrinityPact Limited as a trusted name in Nigeria’s real estate and property investment sector.
            </p>
          </div>

          <footer className='sign'>
            <span className='serif sign-name'>{CEO.name}</span>
            <span>{CEO.role}</span>
            <span>TPL TrinityPact Limited</span>
            <em className='serif motto'>Building the future, sustainably.</em>
          </footer>
        </div>
      </Container>
    </Section>
  )
}

const Section = styled.section`
  padding-block: var(--section);

  .grid {
    display: grid;
    grid-template-columns: 0.85fr 1fr;
    align-items: start;
    gap: clamp(40px, 6vw, 112px);
  }

  /* Portrait stays in view while the biography scrolls past it. */
  .aside {
    position: sticky;
    top: 48px;
  }
  .portrait {
    position: relative;
    aspect-ratio: 4 / 5;
    overflow: hidden;
    border-radius: 999px 999px 0 0;
    background: var(--olive);
  }
  .fill {
    position: absolute;
    inset: 0;
    object-fit: cover;
    filter: var(--grade);
  }
  .placeholder {
    display: grid;
    place-items: center;
    filter: none;
    background: var(--olive);
    color: var(--ink);
  }
  .shape {
    position: absolute;
    height: auto;
  }
  .s1 {
    top: 22%;
    right: 12%;
    width: 22%;
  }
  .s2 {
    bottom: 0;
    left: 10%;
    width: 30%;
  }
  .monogram {
    position: relative;
    font-size: clamp(96px, 12vw, 180px);
    line-height: 1;
    letter-spacing: -0.03em;
  }
  .caption {
    display: flex;
    justify-content: space-between;
    gap: 16px;
    padding-top: 16px;
    border-top: 1px solid var(--line);
    margin-top: 18px;
    color: var(--text);
    font-size: 13px;
    .serif {
      color: var(--ink);
      font-size: 17px;
    }
  }

  .name {
    font-size: clamp(36px, 4.4vw, 66px);
    line-height: 1.02;
  }
  .role {
    margin-top: 14px;
    color: var(--text);
    font-size: 14px;
  }
  .body {
    display: grid;
    gap: 18px;
    max-width: 600px;
    margin-top: clamp(32px, 3.5vw, 48px);
    color: var(--text);
    font-size: 15px;
    line-height: 1.6;
  }
  .lead {
    color: var(--ink);
    font-size: 17px;
    line-height: 1.55;
  }

  .belief {
    margin-top: clamp(40px, 4.5vw, 64px);
    padding: clamp(28px, 3vw, 44px);
    border-radius: 14px;
    background: var(--ink);
    color: var(--cream);
    .tag {
      display: block;
      margin-bottom: 20px;
      color: var(--olive);
      font-size: 13px;
    }
    p {
      font-size: clamp(24px, 2.3vw, 34px);
      line-height: 1.18;
    }
  }

  .sign {
    display: grid;
    gap: 4px;
    margin-top: clamp(40px, 4.5vw, 64px);
    padding-top: 24px;
    border-top: 1px solid var(--line);
    color: var(--text);
    font-size: 14px;
  }
  .sign-name {
    color: var(--ink);
    font-size: 28px;
    line-height: 1.1;
  }
  .motto {
    margin-top: 12px;
    color: var(--ink);
    font-size: 22px;
  }

  @media (max-width: 899px) {
    .grid {
      grid-template-columns: 1fr;
    }
    .aside {
      position: static;
      width: min(100%, 440px);
    }
  }
`

export default Ceo
