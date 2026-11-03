'use client'

import { useEffect, useRef } from 'react'
import Image from 'next/image'
import styled, { keyframes } from 'styled-components'

// Full-screen viewer for the project gallery. Esc closes, ←/→ step through,
// focus is trapped inside and handed back to the opening thumbnail on close.
const Lightbox = ({ items, index, onClose, onStep }) => {
  const ref = useRef(null)
  const closeRef = useRef(null)
  const item = items[index]

  useEffect(() => {
    const opener = document.activeElement
    const root = document.documentElement
    root.style.overflow = 'hidden'
    closeRef.current?.focus()

    const onKey = (e) => {
      if (e.key === 'Escape') onClose()
      else if (e.key === 'ArrowRight') onStep(1)
      else if (e.key === 'ArrowLeft') onStep(-1)
      else if (e.key === 'Tab') {
        const focusable = ref.current.querySelectorAll('button')
        const first = focusable[0]
        const last = focusable[focusable.length - 1]
        if (e.shiftKey && document.activeElement === first) {
          e.preventDefault()
          last.focus()
        } else if (!e.shiftKey && document.activeElement === last) {
          e.preventDefault()
          first.focus()
        }
      }
    }
    window.addEventListener('keydown', onKey)
    return () => {
      window.removeEventListener('keydown', onKey)
      root.style.overflow = ''
      opener?.focus?.()
    }
  }, [onClose, onStep])

  return (
    <Overlay
      ref={ref}
      role='dialog'
      aria-modal='true'
      aria-label={`${item.title}, image ${index + 1} of ${items.length}`}
      data-lenis-prevent
      onClick={(e) => e.target === e.currentTarget && onClose()}
    >
      <div className='lb-stage' onClick={(e) => e.target === e.currentTarget && onClose()}>
        <div className='lb-frame' key={item.src}>
          <Image src={item.src} alt={item.alt} fill sizes='100vw' />
        </div>
      </div>

      <div className='lb-bar'>
        <span className='lb-count serif'>
          {String(index + 1).padStart(2, '0')} / {String(items.length).padStart(2, '0')}
        </span>
        <div className='lb-caption'>
          <span className='serif'>{item.title}</span>
          <span>{item.detail}</span>
        </div>
        <div className='lb-controls'>
          <button type='button' onClick={() => onStep(-1)} aria-label='Previous project'>
            <svg viewBox='0 0 16 16' width='16' height='16' aria-hidden='true'>
              <path d='M14 8H3M7.5 3.5 3 8l4.5 4.5' fill='none' stroke='currentColor' strokeWidth='1.4' />
            </svg>
          </button>
          <button type='button' onClick={() => onStep(1)} aria-label='Next project'>
            <svg viewBox='0 0 16 16' width='16' height='16' aria-hidden='true'>
              <path d='M2 8h11M8.5 3.5 13 8l-4.5 4.5' fill='none' stroke='currentColor' strokeWidth='1.4' />
            </svg>
          </button>
          <button type='button' ref={closeRef} onClick={onClose} aria-label='Close viewer' className='lb-close'>
            <svg viewBox='0 0 16 16' width='16' height='16' aria-hidden='true'>
              <path d='M3 3l10 10M13 3 3 13' fill='none' stroke='currentColor' strokeWidth='1.4' />
            </svg>
          </button>
        </div>
      </div>
    </Overlay>
  )
}

const fadeIn = keyframes`
  from { opacity: 0; }
  to { opacity: 1; }
`

const settle = keyframes`
  from { opacity: 0; transform: scale(1.04); }
  to { opacity: 1; transform: scale(1); }
`

const Overlay = styled.div`
  position: fixed;
  inset: 0;
  z-index: 50;
  display: grid;
  grid-template-rows: 1fr auto;
  background: rgba(14, 14, 12, 0.96);
  color: var(--cream);
  animation: ${fadeIn} 0.4s ease both;

  .lb-stage {
    position: relative;
    padding: clamp(16px, 4vw, 56px) var(--pad) 0;
  }
  .lb-frame {
    position: relative;
    width: 100%;
    height: 100%;
    animation: ${settle} 0.7s cubic-bezier(0.2, 0.7, 0.2, 1) both;
    img {
      object-fit: contain;
    }
  }

  .lb-bar {
    display: grid;
    grid-template-columns: auto 1fr auto;
    align-items: center;
    gap: 24px;
    padding: 20px var(--pad) calc(20px + env(safe-area-inset-bottom, 0px));
  }
  .lb-count {
    font-size: 18px;
    opacity: 0.6;
  }
  .lb-caption {
    display: flex;
    flex-direction: column;
    gap: 2px;
    font-size: 13px;
    color: var(--muted);
    .serif {
      color: var(--cream);
      font-size: 20px;
    }
  }
  .lb-controls {
    display: flex;
    gap: 8px;
  }
  button {
    display: grid;
    place-items: center;
    width: 44px;
    height: 44px;
    border: 1px solid var(--line-dark);
    border-radius: 50%;
    background: transparent;
    color: var(--cream);
    cursor: pointer;
    transition: background 0.3s ease, color 0.3s ease;
    &:hover,
    &:focus-visible {
      background: var(--cream);
      color: var(--ink);
      outline: none;
    }
  }
  .lb-close {
    background: var(--cream);
    color: var(--ink);
  }

  @media (prefers-reduced-motion: reduce) {
    animation: none;
    .lb-frame {
      animation: none;
    }
  }
  @media (max-width: 599px) {
    .lb-bar {
      grid-template-columns: 1fr auto;
    }
    .lb-count {
      display: none;
    }
  }
`

export default Lightbox
