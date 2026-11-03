'use client'

import Link from 'next/link'
import styled, { css } from 'styled-components'

// Pill with the detached half-disc "ears" from the design. On hover the ears
// drift outward and the label rolls up to a duplicate of itself.
const PillButton = ({ href, children, tone = 'dark', className, ...rest }) => {
  const isExternal = /^(https?:|mailto:|tel:)/.test(href)
  return (
    <Pill as={isExternal ? 'a' : Link} href={href} $tone={tone} className={className} {...rest}>
      <span className='pill-label'>
        <span>{children}</span>
        <span aria-hidden='true'>{children}</span>
      </span>
    </Pill>
  )
}

const tones = {
  dark: css`
    --pill-bg: var(--ink);
    --pill-fg: var(--cream);
  `,
  light: css`
    --pill-bg: var(--cream);
    --pill-fg: var(--ink);
  `,
  olive: css`
    --pill-bg: var(--olive-strong);
    --pill-fg: var(--ink);
  `,
}

const Pill = styled.a`
  ${({ $tone }) => tones[$tone]}
  position: relative;
  display: inline-flex;
  align-items: center;
  height: 32px;
  margin: 0 9px;
  padding: 0 15px;
  border-radius: 999px;
  background: var(--pill-bg);
  /* Doubled class beats the shell's generic a { color: inherit }. */
  && {
    color: var(--pill-fg);
  }
  font-family: var(--font-serif), Georgia, serif;
  font-size: 15px;
  line-height: 1;
  white-space: nowrap;
  text-decoration: none;
  &::before,
  &::after {
    content: '';
    position: absolute;
    top: 50%;
    width: 6px;
    height: 14px;
    background: var(--pill-bg);
    transform: translateY(-50%);
    transition: transform 0.5s cubic-bezier(0.2, 0.7, 0.2, 1);
  }
  &::before {
    left: -8px;
    border-radius: 14px 0 0 14px;
  }
  &::after {
    right: -8px;
    border-radius: 0 14px 14px 0;
  }
  .pill-label {
    display: block;
    height: 1.2em;
    overflow: hidden;
    line-height: 1.2em;
  }
  .pill-label span {
    display: block;
    transition: transform 0.5s cubic-bezier(0.65, 0, 0.25, 1);
  }
  &:hover::before,
  &:focus-visible::before {
    transform: translate(-3px, -50%);
  }
  &:hover::after,
  &:focus-visible::after {
    transform: translate(3px, -50%);
  }
  &:hover .pill-label span,
  &:focus-visible .pill-label span {
    transform: translateY(-100%);
  }
  &:focus-visible {
    outline: 1px solid var(--pill-bg);
    outline-offset: 4px;
  }
`

export default PillButton
