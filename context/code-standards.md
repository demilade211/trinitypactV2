# Code Standards

These describe the conventions used in the codebase. Follow them for
consistency unless a context file is updated to say otherwise.

## General

- One section per component file. A page's `page.js` only composes
  sections and declares `metadata`.
- Shared facts have one source each: `SITE` and `STATS` in
  `components/landing/site.js`, and `PROJECTS` in
  `components/landing/projects.js`. Import them; never copy them.
- Fix root causes rather than layering overrides. Remove dead code when
  touching a file.
- Do not invent company facts (stats, testimonials, addresses, quotes). Use
  only copy supplied by the client, and flag any new marketing copy for
  review.

## JavaScript

- Plain JavaScript (`.js` for routes and data, `.jsx` for components). No
  TypeScript.
- Functional components with arrow functions, default-exported at the
  bottom of the file.
- Use the `@/` path alias for imports from the project root, e.g.
  `import PageHero from '@/components/landing/PageHero'`.
- Form state uses a single object updated by a generic change handler
  keyed by the input `name`.

## Next.js (App Router)

- Routes live in `app/<route>/page.js`, and route-specific sections in
  `app/<route>/subcomponents/` (lowercase).
- `page.js` files are server components: no `'use client'`. They export
  `metadata = pageMetadata({ title, description, path })` from
  `components/landing/seo.js`. The title is the bare page name, and the
  root template appends the company name. Structured data goes in as
  `<JsonLd data={…} />`, the first child of `LandingShell`.
- Section components that use styled-components, hooks or GSAP start with
  `'use client'`.
- Use `next/link` for internal navigation and `next/image` for every photo.
  Above-the-fold heroes use `loading='eager' fetchPriority='high'`: the
  `priority` prop is deprecated in Next 16.
- Wrap every page in `LandingShell`. Inner pages start with `PageHero`.

## Styling

- **styled-components** only. Declare styled components below the
  component in the same file. A section's root is a styled `section`, with
  nested selectors targeting `className`s inside it.
- Use the tokens from `ui-context.md` (`var(--ink)`, `var(--olive)`, …),
  not raw hex. The exception is one-off rgba tints of a token.
- Use the breakpoints `max-width` 1199 / 899 / 767 / 599. Set spacing with
  `var(--pad)` and `var(--section)`.
- Give every photo a meaningful `alt` and `filter: var(--grade)`.
- Prefix the classes of components that render inside another section's
  styled root (e.g. `lb-` in Lightbox) to avoid style leakage.

## Animation

- Follow invariant 5 in `architecture.md` (`useGSAP` + `gsap.matchMedia`,
  no CSS transitions on GSAP-animated properties, no double `from()`
  tweens).
- Reuse the helpers in `components/landing/motion.js` (`riseLines`,
  `fadeUp`, `countUp`, `inView`) rather than writing new tween patterns.

## API Routes

- None exist yet. When the contact form gets a real backend, place it at
  `app/api/<name>/route.js` and replace `sendEnquiry` in
  `ContactSection.jsx`. Validate input before any logic runs, keep secrets
  in `.env.local` (already git-ignored), and return
  `{ success: boolean, message: string }`.

## Data and Storage

- No database.
- New imagery goes in `public/images/<page>/` without spaces in
  filenames. Note the source and licence of stock photos in
  `progress-tracker.md`.

## Verification

- `npm run build` must pass. Since Next 16, it's safe to run alongside
  `next dev`.
- For SEO-affecting changes, check the rendered `<head>`, run Lighthouse
  (SEO should stay 100), and validate the JSON-LD in Google's Rich Results
  Test.

## File Organization

- `app/`: routes, root layout, fonts, global CSS, styled-components
  registry
- `app/subcomponents/`: home page sections (`Closing` is shared)
- `app/<route>/subcomponents/`: sections used only by that route
- `components/landing/`: design system components, motion helpers, shared
  data
- `public/images/`: static images
- `context/`: project context and spec files for AI-assisted development
