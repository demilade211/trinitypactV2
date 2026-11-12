# Progress Tracker

Update this file after every meaningful implementation
change.

## Current Phase

- Redesign complete. All five pages (`/`, `/about`, `/services`,
  `/projects`, `/contact`) use the new editorial design system. The
  original 2024 design (remote `github.com/demilade211/trinitypactV2`) is
  fully retired. None of the redesign is committed yet.

## Current Goal

- Client review. Collect the missing content (CEO portrait, project
  details, contact-form delivery decision), then commit and deploy.

## Completed

- Project bootstrapped with create-next-app (Next.js 14, App Router)
- styled-components SSR registry + Tailwind + Nunito font setup
- Shared Navbar (desktop + mobile slide-down) and Footer
- Home page: Hero, About Us + stats, Services intro, Services cards,
  Our Projects (desktop grid + mobile carousel), Testimonials, Discover CTA
- About page: title banner, Mission/Vision, Tenets, Why Choose TPL,
  Discover CTA
- Services page: title banner + 4 described service cards
- Projects page: title banner + responsive image grid
- Contact page: title banner, contact details, contact form UI
- Projects link added to mobile nav; responsive fixes on home page
- Testimonials corrected, project pictures updated
- Correct contact info (address, phones, email) in Footer and Contact page
- App icon added (`app/icon/icon.png`)
- **2026-11-03: Home page redesign.** The page was rebuilt to match an
  editorial reference design, using TPL's copy, stats, logo and contact
  details:
  - Sections: Hero, Intro (half-ellipse photos + 2×2 stats with
    count-up), Featured Projects (6 cards), Categories (3 tiles),
    Vision (sliced-ellipse photo on dark), Presence (world map with a
    Lagos marker), Services (4 olive cards + geometric artwork), and a
    Closing CTA (curved dark panel over a photo).
  - New Nav (transparent over the hero, full-screen mobile menu) and
    Footer. Both are home-only.
  - Animation: GSAP + ScrollTrigger + SplitText, plus Lenis smooth
    scroll. Everything is skipped under `prefers-reduced-motion`.
  - Verified: `npm run build` passes. Headless Chrome at 1440 and 390
    widths shows no console errors, no horizontal overflow, and no
    element left hidden after scrolling.
  - Removed old home sections: HeroSection, AboutUs, Services,
    CardsSection, Listings, Testimony. The testimonials are not on the
    new page (the reference has no such section, and their authenticity
    was already in question).
  - New assets: 8 Unsplash photos in `public/images/home/` (free Unsplash
    licence), `world-map.svg` (generated from Natural Earth 110m), and
    Instrument Serif in `app/fonts/` (OFL).

- **2026-11-03: About page migrated** to `LandingShell` and the new design.
  It is now a server component with its own `metadata`.
  - Sections: PageHero ("Building the Future, Sustainably."), Story,
    Vision & Mission (dark), **About the CEO** (new: Prince Adedayo
    Ogunkoya, with a sticky arched portrait, bio, a "What he believes"
    statement and a signature block), Tenets (6 olive cards), Why Choose
    TPL (7 numbered rows, dark), and the shared Closing CTA.
  - Added `components/landing/PageHero.jsx` for inner pages, `arch` and
    `quarter` GeoMark variants, and active-link state in the new Nav.
  - Removed `app/about/subComponents/*` and `app/subcomponents/Discover.jsx`.
  - "Why Choose TPL" and "Tenets" copy was lightly copy-edited for grammar
    (e.g. "TPL stand out" → "stands out", and the stray "Approach:" moved
    into the "Client-Centric Approach" title).
  - Verified the build in an isolated copy, at 1440 and 390 widths: no
    errors, no overflow, nothing left hidden.

- **2026-11-03: Services page migrated** to `LandingShell`, with its own
  `metadata`.
  - Sections: PageHero ("Exceptional Real Estate Services"), Overview
    (existing services intro and advisory copy, plus a numbered index that
    links to each service), ServicePanels, and the shared Closing CTA.
  - ServicePanels: four full-width sticky panels that stack, alternating
    olive and ink. Each earlier panel scales and dims as the next arrives
    (scrubbed, desktop only); on mobile they are plain cards.
  - Service copy lives in `app/services/subcomponents/services.js`.
  - 5 new Unsplash photos in `public/images/services/`. The drafting photo
    is cropped to exclude another company's shirt logo.
  - Lenis `anchors: true` gives in-page `#` links a smooth glide.
  - Removed the old `CardsSection.jsx` and `Title.jsx`.
  - Verified in the isolated build at 1440 and 390 widths: no errors, no
    overflow, nothing left hidden.

- **2026-11-03: Projects page migrated** to `LandingShell`, with its own
  `metadata`.
  - Sections: PageHero ("Distinctive Spaces, Built with Purpose."),
    Gallery, StatsBand (dark, with count-up figures), and the shared
    Closing CTA.
  - Gallery: an asymmetric 12-column layout with offset items. Photos
    wipe in, drift slightly on scroll, and show a "View" disc on hover.
    Clicking a photo opens a Lightbox (Esc / ← / →, focus trapped and
    returned to the thumbnail, page scroll locked via
    `data-lenis-prevent`).
  - Project data moved to `components/landing/projects.js` and stats to
    `STATS` in `site.js`, shared by home and projects. `countUp()` is now
    a helper in `motion.js`.
  - The mobile menu also got `data-lenis-prevent`, so the page no longer
    scrolls behind it.
  - Removed the old `Listings.jsx` and `Title.jsx`.
  - Verified in the isolated build: no errors, no overflow, nothing left
    hidden at 1440 and 390 widths. The lightbox keyboard and focus flow
    passed.
- **2026-11-03: Contact page migrated**, completing the redesign.
  - Sections: PageHero ("Get in Touch With Us."), ContactSection, and
    MapBand (dark, with a muted Google Maps embed, "Get Directions" and
    "Open in Google Maps").
  - ContactSection: a details list (address, Local/Mobile phones, email,
    hours, socials, all from `SITE`) beside the form.
  - Form: underline fields on an olive card, client-side validation with
    inline errors (`aria-invalid` / `aria-describedby`, focus moves to the
    first invalid field), and a thank-you state.
  - Form delivery is interim: `sendEnquiry` opens the visitor's email app
    with a pre-filled `mailto:` to the company inbox.
  - Site-wide cleanup now that every page uses `LandingShell`:
    - Fonts are applied once on `<html>` in `app/layout.js`. The Nunito
      link and font are removed.
    - The root metadata uses a title template, so pages set bare titles
      ("About Us" → "About Us | TPL Trinitypact Limited").
    - Deleted the legacy `layouts/AppLayout.jsx`, `components/Navbar.jsx`,
      `Footer.jsx`, `AuthInput.jsx`, `AuthTextArea.jsx`, and contact's
      `FormSection.jsx` and `Title.jsx`.
  - Fixed a MapBand bug where the eyebrow stayed invisible because two
    `from()` tweens targeted it.
  - Verified in the isolated build: no errors, no overflow, nothing left
    hidden at 1440 and 390 widths. Form validation and submit flow tested.
    All five page titles are correct.

- **2026-11-03: Next.js 16 upgrade + SEO** (branch `staging`).
  - Upgraded to Next 16.4.4, React / React DOM 19.3.1 and
    styled-components 6.6.0. Builds with Turbopack.
  - Next 16 follow-ups:
    - Replaced the deprecated `priority` image prop with
      `loading='eager'` + `fetchPriority='high'`.
    - Added `data-scroll-behavior='smooth'` on `<html>`.
    - Removed the `lint` script, since `next lint` no longer exists.
    - Added `engines.node >= 20.9`.
    - Moved the favicon to `app/icon.png` + `app/apple-icon.png`.
  - SEO for `https://www.tpltrinitypact.com` (see the SEO section in
    `architecture.md`):
    - `metadataBase`, per-page titles, descriptions and canonicals.
    - Open Graph and Twitter cards with branded per-page share images.
    - `robots.txt`, `sitemap.xml` (with images) and a web manifest.
    - JSON-LD: RealEstateAgent, WebSite, page types, CEO Person,
      Services ItemList and breadcrumbs.
    - A branded 404, the non-www → www 308 redirect, AVIF/WebP images,
      and env-based search-console verification.
  - Converted the 12.6 MB `img1.png` and 7.4 MB `cimg1.png` to about 1 MB
    JPEGs. SplitText now uses `aria: 'none'` (fixes invalid aria-labels).
    Hero entrance delays were shortened for a faster LCP.
  - Lighthouse (mobile, production build): SEO 100, Best Practices 100,
    and Accessibility 100 on four pages (Contact 96, from a contrast
    sample taken mid-fade-in). Performance 86–95, CLS 0 everywhere.
  - `npm audit`: 0 production vulnerabilities. 3 moderate ones remain in
    Tailwind's build-time `glob` chain.

## In Progress

- None.

## Next Up

- **CEO portrait**: set `PORTRAIT` in `app/about/subcomponents/Ceo.jsx`
  to the photo's path in `public/images/pages/about/`. A monogram
  placeholder shows until then. A 4:5 portrait suits the arched frame.
- **Project details**: replace the placeholder titles, locations and tags
  in `components/landing/projects.js` (shown on home and /projects). Add
  more projects as new entries.
- **Contact form delivery**: replace `sendEnquiry` in
  `app/contact/subcomponents/ContactSection.jsx` with a real service (see
  Open Questions). Then remove the "opens your email app" note and update
  the thank-you copy.
- **Replace the stock photography** (Unsplash images in
  `public/images/home/` and `public/images/services/`) with professional
  photos of TPL developments when available.
- **Remove Tailwind**: no utility classes remain. Swap `@tailwind base`
  for an equivalent minimal reset, then drop `tailwindcss` and
  `tailwind.config.js`. This also clears the remaining `npm audit` items.
- **Go-live SEO checklist** (needs account access):
  - Point `tpltrinitypact.com` and `www` DNS at the host, with HTTPS.
  - Verify the domain in Google Search Console and Bing Webmaster Tools.
    Set `NEXT_PUBLIC_GOOGLE_SITE_VERIFICATION` /
    `NEXT_PUBLIC_BING_SITE_VERIFICATION`, then submit
    `/sitemap.xml`.
  - Create or claim a Google Business Profile for the Shomolu office, with
    the address, phones and hours matching `SITE`.
  - Validate the JSON-LD with Google's Rich Results Test on the live URLs.
- **Project data for SEO**: once real project names and locations
  exist, add them to the structured data on `/projects`.
- **Commit** the redesign. It's currently all uncommitted.

## Open Questions

- How should contact form submissions be delivered? Options: an email
  service such as Resend or EmailJS, a Next.js API route + SMTP, Formspree,
  or WhatsApp.
- Should "Why Choose TPL → Global Presence" (also the home map section)
  remain? It claims global operations, while elsewhere the company is
  described as Lagos-based.
- Is it acceptable to use stock (Unsplash) photography of houses that
  TPL did not build in the heroes and decorative sections? Visitors may
  read it as TPL's work.
- Brand colours: the new design drops the orange `#F58634` brand accent
  for a muted palette, and shows the full-colour logo in a small disc.
  Does the client approve, or should orange return as an accent?
- Map: only the Lagos head office is marked. Are there other locations
  or projects to add?
- Should the removed testimonials return? They were left out of the
  redesign because their copy read like placeholder text.
- Review the new marketing copy written during the redesign (page hero
  titles and ledes, "Six Principles Behind Everything We Build", the Why
  Choose intro, "Talk to our team.", and others).
- Hosting/deployment target and domain (README mentions Vercel; nothing
  configured in the repo).

## Architecture Decisions

- **styled-components for all styling**, with SSR through
  `app/registry.js`. Tailwind is vestigial.
- **Pages are server components** that export `metadata` and compose
  `'use client'` sections inside `LandingShell`.
- **GSAP + Lenis**: GSAP gives scroll-triggered reveals, masked line
  splits (SplitText, free since GSAP 3.13) and reduced-motion handling
  through `gsap.matchMedia`. Lenis provides the inertial-scroll feel
  expected of award-standard sites.
- **Instrument Serif is self-hosted** because Next 14.0.4's
  `next/font/google` registry predates it.
- **No backend/database**: the content is static and hard-coded, which
  suits a small brochure site. The contact form uses `mailto:` until a
  delivery service is chosen.

## Session Notes

- 2026-11-03: Context files populated from a full read of the codebase,
  then the whole site was redesigned (see Completed). Not yet committed.
- Since Next 16, `next dev` uses `.next/dev`, so building alongside it is
  safe. On Next 14 it wasn't.
- Unused assets in `public/images/`: `components/` icons (`close.svg`,
  `fb.svg`, `ficon1.svg`, `ham.svg`, `insta.svg`, `mail.svg`, `phone.svg`,
  `www.svg`), `pages/contact/i1.svg`, `pages/home/` (`img1.png` and `cimg1.png` were already removed; `cimg.png`,
  `cimg.jpg`, `img 2.png`, `img3.png`, `img4.png`, `img5.png`,
  `icon1.svg`, `icon3.svg`, `wicon1.svg`, `ileft.svg`, `iright.svg`,
  `star.svg`, `pic.png`, `truck1.png`, `truck1.jpg`), plus
  `public/next.svg` and `public/vercel.svg`. Several are 7–15 MB. Verify
  with a grep, then delete.
- The favicon is linked as `/icon/icon.png` and lives at
  `app/icon/icon.png`. This is a non-standard location; `app/icon.png` or
  `public/` would be conventional. Confirm it is served in production.
