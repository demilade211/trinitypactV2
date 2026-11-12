'use client'

import styled from 'styled-components'
import Eyebrow from './Eyebrow'
import PillButton from './PillButton'
import { GeoMark } from './Shapes'

const NotFound = () => (
  <Section>
    <div className='inner'>
      <Eyebrow>Error 404</Eyebrow>
      <h1>
        This page has
        <br />
        moved or never existed.
      </h1>
      <p>The link may be out of date. Try one of these instead.</p>
      <div className='actions'>
        <PillButton href='/' tone='light'>
          Back to Home
        </PillButton>
        <PillButton href='/projects' tone='olive'>
          View Projects
        </PillButton>
        <PillButton href='/contact' tone='light'>
          Contact Us
        </PillButton>
      </div>
    </div>
    <GeoMark variant='arch' className='mark' />
  </Section>
)

const Section = styled.section`
  position: relative;
  display: flex;
  align-items: center;
  min-height: max(640px, 100svh);
  padding: 140px var(--pad) 96px;
  overflow: hidden;
  background: var(--ink);
  color: var(--cream);

  .inner {
    position: relative;
    z-index: 1;
    width: 100%;
    max-width: 1440px;
    margin: 0 auto;
  }
  h1 {
    font-size: clamp(44px, 6vw, 92px);
    line-height: 0.98;
  }
  p {
    margin-top: 28px;
    color: rgba(236, 233, 214, 0.72);
    font-size: 15px;
  }
  .actions {
    display: flex;
    flex-wrap: wrap;
    gap: 16px 8px;
    margin-top: 36px;
    margin-left: -9px;
  }
  .mark {
    position: absolute;
    right: -4vw;
    bottom: -2px;
    width: min(42vw, 560px);
    height: auto;
    color: var(--ink-2);
  }
`

export default NotFound
