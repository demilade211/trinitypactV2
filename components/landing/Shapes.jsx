// Geometric marks built from half-discs, shared across the landing page.

// Two half-discs meeting point to point — the small mark before every eyebrow.
export const BowtieMark = ({ size = 14 }) => (
  <svg width={size} height={(size * 12) / 14} viewBox='0 0 14 12' aria-hidden='true'>
    <path d='M0 0a6 6 0 0 1 0 12zM14 0a6 6 0 0 0 0 12z' fill='currentColor' />
  </svg>
)

const MARKS = {
  // Half-discs bulging towards each other.
  meet: 'M0 0a34 34 0 0 1 0 68zM68 0a34 34 0 0 0 0 68z',
  // Two half-discs stepping right.
  step: 'M0 0a40 46 0 0 1 0 92zM44 14a24 32 0 0 1 0 64z',
  // Hourglass: top half-disc pointing down, bottom pointing up.
  hourglass: 'M0 0h68a34 34 0 0 1-68 0zM0 68h68a34 34 0 0 0-68 0z',
  // Two half-discs stepping left.
  echo: 'M68 0a40 46 0 0 0 0 92zM24 14a24 32 0 0 0 0 64z',
  // Half-disc arch standing on a flat base.
  arch: 'M0 68a34 34 0 0 1 68 0z',
  // Quarter-disc, rounded towards the bottom-left.
  quarter: 'M0 0h68v68A68 68 0 0 1 0 0z',
}

export const GeoMark = ({ variant, className }) => (
  <svg className={className} viewBox='0 0 68 92' width='68' height='92' aria-hidden='true'>
    <path d={MARKS[variant]} fill='currentColor' />
  </svg>
)

// The black-and-cream quarter-circle artwork that closes the services grid.
export const Artwork = ({ className }) => (
  <svg className={className} viewBox='0 0 444 424' preserveAspectRatio='xMidYMid slice' aria-hidden='true'>
    <rect width='444' height='424' fill='var(--bg)' />
    <g fill='var(--ink)'>
      <path data-shape d='M40 0h118v66C88 66 40 40 40 0z' />
      <path data-shape d='M0 66h128v134C58 200 0 140 0 66z' />
      <path data-shape d='M158 0h200v200C248 200 158 110 158 0z' />
      <path data-shape d='M358 0h86v164C394 140 358 70 358 0z' />
      <path data-shape d='M0 230c50 0 92 86 92 194H0z' />
      <path data-shape d='M92 224c110 0 200 90 200 200H92z' />
      <path data-shape d='M292 224c84 0 152 90 152 200H292z' />
    </g>
    <path d='M444 330a26 50 0 0 0 0 94z' fill='var(--bg)' />
  </svg>
)

// Faint field of circles and half-discs behind the footer wordmark.
const PATTERN = ['full', 'down', 'left', 'right', 'full', 'up', 'down', 'left', 'full', 'right', 'up', 'down', 'full', 'left', 'right', 'up']

const cellPath = (kind, x, y, r) => {
  switch (kind) {
    case 'down':
      return `M${x} ${y}h${2 * r}a${r} ${r} 0 0 1-${2 * r} 0z`
    case 'up':
      return `M${x} ${y + 2 * r}h${2 * r}a${r} ${r} 0 0 0-${2 * r} 0z`
    case 'left':
      return `M${x + 2 * r} ${y}v${2 * r}a${r} ${r} 0 0 1 0-${2 * r}z`
    case 'right':
      return `M${x} ${y}v${2 * r}a${r} ${r} 0 0 0 0-${2 * r}z`
    default:
      return `M${x} ${y + r}a${r} ${r} 0 1 0 ${2 * r} 0a${r} ${r} 0 1 0-${2 * r} 0z`
  }
}

export const FooterPattern = ({ className }) => {
  const r = 46
  const cols = 16
  const rows = 3
  const d = Array.from({ length: cols * rows }, (_, i) => {
    const col = i % cols
    const row = Math.floor(i / cols)
    return cellPath(PATTERN[(i * 7 + row * 3) % PATTERN.length], col * 2 * r, row * 2 * r, r)
  }).join('')
  return (
    <svg className={className} viewBox={`0 0 ${cols * 2 * r} ${rows * 2 * r}`} preserveAspectRatio='xMidYMax slice' aria-hidden='true'>
      <path d={d} fill='currentColor' />
    </svg>
  )
}
