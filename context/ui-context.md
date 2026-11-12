# UI Context

All five pages use this design system. The original orange/Nunito design
was fully retired on 2026-11-03.

## Design System

Editorial, architectural, muted. Light warm-grey ground alternating with
near-black sections, a condensed high-contrast serif for headings, a quiet
sans for body text, and photography shown through half-ellipse and
circular masks. Layout follows a reference design ("Urbanova" landing
page) with TPL's own branding and copy.

Tokens are CSS custom properties on `LandingShell`'s root — use them, never
raw hex:

| Role                     | Variable         | Value                    |
| ------------------------ | ---------------- | ------------------------ |
| Page background          | `--bg`           | `#E4E5DF`                |
| Dark sections / ink      | `--ink`          | `#191917`                |
| Secondary dark           | `--ink-2`        | `#242522`                |
| Body text                | `--text`         | `#55564F`                |
| Muted text               | `--muted`        | `#85867E`                |
| Service cards            | `--olive`        | `#D6D7B7`                |
| Olive button             | `--olive-strong` | `#DCDDBF`                |
| Light text on dark       | `--cream`        | `#ECE9D6`                |
| Hairlines (light ground) | `--line`         | `rgba(25,25,23,.16)`     |
| Hairlines (dark ground)  | `--line-dark`    | `rgba(236,233,214,.14)`  |
| Form errors              | `--error`        | `#9E3420`                |
| Photo grade              | `--grade`        | `saturate(.82) contrast(.97) sepia(.06)`; apply to every photo |

Spacing: `--pad` (side gutter) 64 / 28 / 16px and `--section` (vertical)
160 / 112 / 80px at desktop / <1200 / <768. Content max-width is 1440px
(`Container`).

Typography: headings in **Instrument Serif 400** (`--font-serif`), body in
**Inter** (`--font-sans`). Section headings use
`clamp(32px, 3.7vw, 54px)` with line-height 1.1. The hero uses
`clamp(48px, 7.2vw, 108px)`. Body text is 14–15px. Headings reveal line by
line through `riseLines()`.

Components and patterns:

- `PillButton`: a pill with detached half-disc "ears". Tones are `dark`,
  `light` and `olive`. On hover the ears drift out and the label rolls.
  Use it for every CTA.
- `Eyebrow`: a bowtie mark plus a small label above section headings.
- `PageHero`: the photographic hero for inner pages (eyebrow, two-line
  title, lede).
- Forms (`/contact`): underline inputs on an olive card, with labels
  above, "(optional)" hints, and inline errors in `--error` linked through
  `aria-describedby`.
- `Shapes`: `GeoMark` (meet / step / hourglass / echo), `Artwork`,
  `FooterPattern`. All geometry is half-discs and quarter-circles.
- Radii: 14px for cards, 3px for the image tags, 999px for pills. Photos
  are otherwise square-cornered or masked by ellipses.
- Motion: masked line rises for headings, clip-path wipes for images
  (with the image scaling 1.25→1), fade-up for text, and 0.12–0.18s
  staggers. Hover zooms images by 1.03–1.04 (on a `.zoom` wrapper) and
  lifts cards 6px.

