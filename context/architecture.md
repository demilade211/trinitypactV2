# Architecture Context

## Stack

| Layer      | Technology                                            | Role                                                                    |
| ---------- | ----------------------------------------------------- | ----------------------------------------------------------------------- |
| Framework  | Next.js 14.0.4 (App Router), JavaScript               | Routing (`app/` directory), rendering, static build                     |
| UI runtime | React 18                                              | Components                                                              |
| Styling    | styled-components 6                                   | All component styling; SSR via `app/registry.js`                        |
| Styling    | Tailwind CSS 3                                        | Only its base reset (`@tailwind base`) is still in effect. No utility classes are used; it's a candidate for removal |
| CSS build  | PostCSS + Autoprefixer                                | Processes `globals.css`                                                 |
| Fonts      | Instrument Serif (self-hosted, `next/font/local`) + Inter (`next/font/google`) | Defined in `app/fonts.js`, applied as CSS variables on `<html>` in `app/layout.js` |
| Animation  | GSAP 3.15 (ScrollTrigger, SplitText) + `@gsap/react`  | Entrance and scroll animations                                          |
| Scrolling  | Lenis 1.3 (`anchors: true`)                           | Inertial smooth scroll, driven by GSAP's ticker                         |
| Maps       | Google Maps embed (iframe, no API key)                | Office location on `/contact`                                           |
| Auth       | None                                                  | —                                                                       |
| Database   | None                                                  | —                                                                       |
| Hosting    | Not configured in repo (README suggests Vercel)       | —                                                                       |

No TypeScript, no test framework, no ESLint config file (the `lint` script
exists but `next lint` will prompt to set it up).

## System Boundaries

- `app/layout.js`: root HTML shell. It holds the metadata (title template
  `%s | TPL Trinitypact Limited`), applies the font variables on `<html>`,
  links the favicon, and wraps children in `StyledComponentsRegistry`.
- `app/registry.js`: styled-components SSR registry. Don't modify it
  without reason.
- `app/globals.css`: Tailwind base, the global reset, smooth scroll (off
  under Lenis), and the body background and font fallback.
- `app/fonts.js` + `app/fonts/`: Instrument Serif files and the Inter
  config.
- Routes: every `page.js` is a **server component** that exports its own
  `metadata` and composes client sections inside `LandingShell`:
  - `/` → `app/subcomponents/`: Hero, Intro, FeaturedProjects,
    Categories, Vision, Presence, ServicesGrid, Closing. `Closing` is
    reused by `/about`, `/services` and `/projects`.
  - `/about` → `app/about/subcomponents/`: Story, VisionMission, Ceo,
    Tenets, WhyChoose.
  - `/services` → `app/services/subcomponents/`: Overview, ServicePanels,
    and `services.js` (data).
  - `/projects` → `app/projects/subcomponents/`: Gallery, Lightbox,
    StatsBand.
  - `/contact` → `app/contact/subcomponents/`: ContactSection (details and
    form), MapBand.
  - `app/icon/icon.png`: app icon (referenced as `/icon/icon.png`).
- `components/landing/`: the shared design system and data.
  - `LandingShell`: theme tokens, Lenis, Nav + Footer, `Container`.
  - `Nav`, `Footer`, `PageHero` (inner-page hero), `PillButton`,
    `Eyebrow`.
  - `Shapes`: `GeoMark`, `Artwork`, `FooterPattern`.
  - `motion.js`: GSAP registration and the helpers `riseLines`, `fadeUp`,
    `countUp` and `inView`.
  - Data: `site.js` (contact details, nav links, stats) and `projects.js`
    (project gallery data).
- `public/images/`: `components/` (logo, legacy icons), `pages/<page>/`
  (original site imagery, including TPL project photos), `home/` and
  `services/` (Unsplash photography plus the generated `world-map.svg`).

## Storage Model

- **Database**: none.
- **Static files** (`public/images/`): all imagery, rendered with
  `next/image`.
- **Content**: copy is hard-coded in section components. Shared facts live
  in `site.js`, project entries in `projects.js`, and service copy in
  `app/services/subcomponents/services.js`. There is no CMS.

## Auth and Access Model

- No authentication. All pages are public and read-only.
- No server-side mutations. The contact form validates on the client, then
  opens the visitor's email app with a pre-filled `mailto:` link
  (`sendEnquiry` in `ContactSection.jsx`). This is interim until a delivery
  service is chosen.

## Rendering Model

- Pages are server components, which lets each export `metadata`.
  Sections are `'use client'` because they use styled-components and GSAP.
- Navigation uses `next/link`.

## Invariants

1. Every route renders inside `components/landing/LandingShell`, which
   provides the nav, footer, theme tokens and smooth scrolling.
2. `app/layout.js` must keep wrapping children in `StyledComponentsRegistry`,
   and `next.config.js` must keep `compiler.styledComponents: true`;
   otherwise styles break on SSR.
3. Contact details (address, phones, email, hours, socials) come only from
   `SITE` in `components/landing/site.js`. Never hard-code them elsewhere.
4. New routes must be added to `NAV_LINKS` in `components/landing/site.js`.
5. Every GSAP animation is registered inside
   `gsap.matchMedia().add(MOTION_OK, …)` within `useGSAP`, so it is
   cleaned up on unmount and skipped for reduced-motion users.
   - Elements animated by GSAP never also carry a CSS `transition` on the
     same property. Hover effects go on a wrapper or inner element.
   - Never target one element with two `from()` tweens: the second one
     captures the hidden state and stays invisible. Watch broad selectors
     like `.card p`, because `Eyebrow` renders a `<p>`.
6. Overlays that lock scrolling (the mobile menu, Lightbox) set
   `data-lenis-prevent` and `overflow: hidden` on `<html>`.
7. Class names inside a section's styled root can leak into child
   components (e.g. Lightbox inside Gallery). Prefix the classes of nested
   components.
8. Static assets are served from `public/` and referenced with absolute
   `/images/...` paths.
