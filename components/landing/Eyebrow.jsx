'use client'

import styled from 'styled-components'
import { BowtieMark } from './Shapes'

const Eyebrow = ({ children, className }) => (
  <Root className={className} data-eyebrow>
    <BowtieMark />
    <span>{children}</span>
  </Root>
)

const Root = styled.p`
  display: inline-flex;
  align-items: center;
  gap: 8px;
  margin-bottom: 18px;
  color: currentColor;
  font-size: 13px;
  line-height: 1;
  letter-spacing: 0.01em;
  span {
    opacity: 0.8;
  }
`

export default Eyebrow
