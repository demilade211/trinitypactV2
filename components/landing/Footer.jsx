'use client'

import { useRef } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import styled from 'styled-components'
import { FooterPattern } from './Shapes'
import { NAV_LINKS, SITE, telHref } from './site'
import { gsap, useGSAP, MOTION_OK, inView, fadeUp } from './motion'

const Footer = () => {
  const ref = useRef(null)
  const year = new Date().getFullYear()

  useGSAP(
    () => {
      gsap.matchMedia().add(MOTION_OK, () => {
        fadeUp('.intro > *, .col', { stagger: 0.08, scrollTrigger: inView(ref.current, 'top 85%') })
        gsap.from('.pattern', { autoAlpha: 0, yPercent: 12, duration: 1.6, ease: 'power3.out', scrollTrigger: inView('.base', 'top 95%') })
        fadeUp('.base > *', { stagger: 0.1, delay: 0.2, scrollTrigger: inView('.base', 'top 95%') })
      })
    },
    { scope: ref }
  )

  return (
    <Root ref={ref}>
      <div className='top'>
        <div className='intro'>
          <h2>Low-Cost Housing in High-Brow Areas.</h2>
          <p>
            TPL Trinitypact Limited is a recognized real estate firm registered with the Corporate Affairs Commission in
            Nigeria.
          </p>
        </div>

        <div className='cols'>
          <div className='col'>
            <h3>Navigate</h3>
            <ul>
              {[{ href: '/', label: 'Home' }, ...NAV_LINKS, { href: '/contact', label: 'Contact' }].map((link) => (
                <li key={link.href}>
                  <Link href={link.href}>{link.label}</Link>
                </li>
              ))}
            </ul>
          </div>
          <div className='col'>
            <h3>Contact</h3>
            <ul>
              <li>
                <a href={`mailto:${SITE.email}`}>{SITE.email}</a>
              </li>
              {SITE.phones.map((phone) => (
                <li key={phone}>
                  <a href={telHref(phone)}>{phone}</a>
                </li>
              ))}
            </ul>
          </div>
          <div className='col'>
            <h3>Visit</h3>
            <ul>
              <li>
                {SITE.address[0]}
                <br />
                {SITE.address[1]}
              </li>
              <li className='muted'>{SITE.hours}</li>
            </ul>
          </div>
          <div className='col'>
            <h3>Follow</h3>
            <ul>
              {SITE.social.map((s) => (
                <li key={s.label}>
                  <a href={s.href} target='_blank' rel='noopener noreferrer'>
                    {s.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>

      <div className='base'>
        <FooterPattern className='pattern' />
        <Link href='/' className='mark' aria-label={`${SITE.name}, home`}>
          <span className='logo'>
            <Image src='/images/components/logo.png' alt='' width={103} height={103} />
          </span>
          <span className='word serif'>
            TPL Trinitypact
            <br />
            Limited
          </span>
        </Link>
        <div className='legal'>
          <span>© {year} {SITE.name}</span>
          <span>Registered with the CAC, Nigeria</span>
        </div>
      </div>
    </Root>
  )
}

const Root = styled.footer`
  position: relative;
  background: var(--ink);
  color: var(--cream);

  .top,
  .base {
    max-width: 1440px;
    margin: 0 auto;
  }
  .top {
    display: grid;
    grid-template-columns: 1fr 1.35fr;
    gap: 48px;
    padding: 96px var(--pad) 140px;
  }
  .intro h2 {
    max-width: 560px;
    margin-bottom: 36px;
    font-size: clamp(32px, 3vw, 44px);
    line-height: 1.08;
  }
  .intro p {
    max-width: 330px;
    color: var(--muted);
    font-size: 14px;
  }
  .cols {
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    gap: 32px;
  }
  .col h3 {
    margin-bottom: 22px;
    color: var(--muted);
    font-size: 16px;
  }
  .col ul {
    display: grid;
    gap: 12px;
    list-style: none;
    font-size: 14px;
  }
  .col a {
    background: linear-gradient(currentColor, currentColor) 0 100% / 0 1px no-repeat;
    transition: background-size 0.5s cubic-bezier(0.65, 0, 0.25, 1);
    &:hover,
    &:focus-visible {
      background-size: 100% 1px;
    }
  }
  .col .muted {
    color: var(--muted);
  }

  .base {
    position: relative;
    display: flex;
    align-items: flex-end;
    justify-content: space-between;
    gap: 24px;
    padding: 120px var(--pad) 36px;
    overflow: hidden;
  }
  .pattern {
    position: absolute;
    inset: 0;
    width: 100%;
    height: 100%;
    color: rgba(236, 233, 214, 0.035);
  }
  .mark {
    position: relative;
    display: flex;
    align-items: center;
    gap: 22px;
  }
  .logo {
    display: grid;
    place-items: center;
    width: clamp(72px, 8vw, 116px);
    aspect-ratio: 1;
    border-radius: 50%;
    background: var(--cream);
    overflow: hidden;
    img {
      width: 88%;
      height: auto;
      mix-blend-mode: multiply;
    }
  }
  .word {
    font-size: clamp(36px, 5vw, 72px);
    line-height: 0.98;
  }
  .legal {
    position: relative;
    display: flex;
    gap: 32px;
    color: var(--muted);
    font-size: 14px;
  }

  @media (max-width: 1199px) {
    .top {
      grid-template-columns: 1fr;
      padding-bottom: 96px;
    }
  }
  @media (max-width: 767px) {
    .top {
      padding-top: 72px;
    }
    .cols {
      grid-template-columns: 1fr 1fr;
      row-gap: 40px;
    }
    .base {
      flex-direction: column;
      align-items: flex-start;
      padding-top: 96px;
    }
    .legal {
      flex-direction: column;
      gap: 4px;
    }
  }
`

export default Footer
