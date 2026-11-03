'use client'

import { useEffect, useRef, useState } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import styled from 'styled-components'
import PillButton from './PillButton'
import { NAV_LINKS, SITE, telHref } from './site'
import { gsap, useGSAP, MOTION_OK } from './motion'

const Nav = () => {
  const [open, setOpen] = useState(false)
  const ref = useRef(null)
  const pathname = usePathname()

  useGSAP(
    () => {
      gsap.matchMedia().add(MOTION_OK, () => {
        gsap.fromTo(ref.current, { autoAlpha: 0, y: -18 }, {
            autoAlpha: 1,
            y: 0,
            duration: 0.7,
            delay: 0.15,
            ease: 'power3.out',
            // A lingering transform would become the containing block of the fixed mobile menu.
            clearProps: 'transform',
          }
        )
      })
    },
    { scope: ref }
  )

  useEffect(() => {
    if (!open) return
    const onKey = (e) => e.key === 'Escape' && setOpen(false)
    document.documentElement.style.overflow = 'hidden'
    window.addEventListener('keydown', onKey)
    return () => {
      document.documentElement.style.overflow = ''
      window.removeEventListener('keydown', onKey)
    }
  }, [open])

  return (
    <Bar ref={ref} data-preload>
      <Link href='/' className='brand' aria-label={`${SITE.name}, home`}>
        <span className='logo'>
          <Image src='/images/components/logo.png' alt='' width={40} height={40} priority />
        </span>
        <span className='word serif'>
          TPL Trinitypact
          <br />
          Limited
        </span>
      </Link>

      <nav aria-label='Primary' className='links'>
        <ul>
          {NAV_LINKS.map((link) => (
            <li key={link.href}>
              <Link href={link.href} aria-current={pathname === link.href ? 'page' : undefined}>
                {link.label}
              </Link>
            </li>
          ))}
        </ul>
      </nav>

      <div className='cta'>
        <PillButton href='/contact' tone='light'>
          Contact Us
        </PillButton>
      </div>

      <button
        type='button'
        className={`burger ${open ? 'is-open' : ''}`}
        aria-expanded={open}
        aria-controls='mobile-menu'
        aria-label={open ? 'Close menu' : 'Open menu'}
        onClick={() => setOpen((o) => !o)}
      >
        <span />
        <span />
      </button>

      <Menu id='mobile-menu' className={open ? 'is-open' : ''} aria-hidden={!open} data-lenis-prevent>
        <ul>
          {[{ href: '/', label: 'Home' }, ...NAV_LINKS, { href: '/contact', label: 'Contact Us' }].map((link, i) => (
            <li key={link.href} style={{ '--i': i }}>
              <Link href={link.href} tabIndex={open ? 0 : -1} onClick={() => setOpen(false)}>
                {link.label}
              </Link>
            </li>
          ))}
        </ul>
        <div className='details'>
          <a href={`mailto:${SITE.email}`} tabIndex={open ? 0 : -1}>
            {SITE.email}
          </a>
          <a href={telHref(SITE.phones[0])} tabIndex={open ? 0 : -1}>
            {SITE.phones[0]}
          </a>
        </div>
      </Menu>
    </Bar>
  )
}

const Bar = styled.header`
  position: absolute;
  inset: 0 0 auto 0;
  z-index: 30;
  display: grid;
  grid-template-columns: 1fr auto 1fr;
  align-items: center;
  max-width: 1440px;
  height: 96px;
  margin: 0 auto;
  padding-inline: var(--pad);
  color: var(--cream);

  .brand {
    position: relative;
    z-index: 2;
    display: inline-flex;
    align-items: center;
    gap: 10px;
    justify-self: start;
  }
  .logo {
    display: grid;
    place-items: center;
    width: 44px;
    height: 44px;
    border-radius: 50%;
    background: #fff;
    overflow: hidden;
    img {
      width: 40px;
      height: 40px;
    }
  }
  .word {
    font-size: 17px;
    line-height: 1.02;
  }

  .links ul {
    display: flex;
    gap: 44px;
    list-style: none;
  }
  .links a {
    position: relative;
    font-size: 15px;
    &::after {
      content: '';
      position: absolute;
      left: 0;
      right: 0;
      bottom: -4px;
      height: 1px;
      background: currentColor;
      transform: scaleX(0);
      transform-origin: right;
      transition: transform 0.5s cubic-bezier(0.65, 0, 0.25, 1);
    }
    &:hover::after,
    &:focus-visible::after,
    &[aria-current='page']::after {
      transform: scaleX(1);
      transform-origin: left;
    }
  }
  .cta {
    justify-self: end;
  }

  .burger {
    display: none;
    position: relative;
    z-index: 2;
    justify-self: end;
    width: 44px;
    height: 44px;
    border: 0;
    border-radius: 50%;
    background: var(--cream);
    cursor: pointer;
    span {
      position: absolute;
      left: 14px;
      width: 16px;
      height: 1.5px;
      background: var(--ink);
      transition: transform 0.45s cubic-bezier(0.65, 0, 0.25, 1);
    }
    span:first-child {
      top: 18px;
    }
    span:last-child {
      top: 24px;
    }
    &.is-open span:first-child {
      transform: translateY(3px) rotate(45deg);
    }
    &.is-open span:last-child {
      transform: translateY(-3px) rotate(-45deg);
    }
  }

  @media (max-width: 899px) {
    grid-template-columns: 1fr auto;
    height: 80px;
    .links,
    .cta {
      display: none;
    }
    .burger {
      display: block;
    }
  }
`

const Menu = styled.div`
  position: fixed;
  inset: 0;
  z-index: 1;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  padding: 120px var(--pad) 40px;
  background: var(--ink);
  color: var(--cream);
  clip-path: inset(0 0 100% 0);
  visibility: hidden;
  transition: clip-path 0.8s cubic-bezier(0.76, 0, 0.24, 1), visibility 0s linear 0.8s;

  ul {
    list-style: none;
  }
  li {
    overflow: hidden;
    border-bottom: 1px solid var(--line-dark);
  }
  li a {
    display: block;
    padding: 10px 0 6px;
    font-family: var(--font-serif), Georgia, serif;
    font-size: clamp(40px, 11vw, 64px);
    line-height: 1.05;
    transform: translateY(105%);
    transition: transform 0.7s cubic-bezier(0.22, 1, 0.36, 1);
  }
  .details {
    display: flex;
    flex-direction: column;
    gap: 6px;
    color: var(--muted);
    font-size: 14px;
    opacity: 0;
    transition: opacity 0.5s ease;
  }

  &.is-open {
    clip-path: inset(0 0 0 0);
    visibility: visible;
    transition: clip-path 0.8s cubic-bezier(0.76, 0, 0.24, 1);
    li a {
      transform: translateY(0);
      transition-delay: calc(0.25s + var(--i) * 0.06s);
    }
    .details {
      opacity: 1;
      transition-delay: 0.6s;
    }
  }

  @media (min-width: 900px) {
    display: none;
  }
`

export default Nav
