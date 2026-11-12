# AI Workflow Rules

## Approach

This is an existing, deployed-style marketing website that is being
maintained and improved incrementally. The context files describe what
exists, how it is built, and what is pending. Always implement against these
specs and match the existing code style (styled-components sections,
`'use client'` pages, `AppLayout` wrapper). Do not infer or invent product
behaviour or company content from scratch.

## Scoping Rules

- Work on one feature unit at a time (e.g. one page section, one
  component, or one bug)
- Prefer small, verifiable increments over large speculative changes
- Do not combine unrelated system boundaries in a single implementation
  step

## When to Split Work

Split an implementation step if it combines:

- Visual/layout changes and new backend behaviour (e.g. restyling the
  contact page and wiring the form to an email API)
- Changes across multiple unrelated pages or sections
- Site-wide refactors (e.g. introducing CSS variables, converting
  `<img>` to `next/image`, adding `<Link>`) mixed with feature work
- Behaviour not clearly defined in the context files

If a change cannot be verified end to end quickly,
the scope is too broad — split it.

## Handling Missing Requirements

- Do not invent product behaviour not defined in the context files
- Do not invent company copy, statistics, testimonials, contact details,
  or project photos. Ask, or leave a clearly marked placeholder
- If a requirement is ambiguous, resolve it in the relevant context file
  before implementing
- If a requirement is missing, add it as an open question in
  `progress-tracker.md` before continuing

## Protected Files

Do not modify the following unless explicitly instructed:

- `app/registry.js`: styled-components SSR registry
- `next.config.js`: `compiler.styledComponents` must stay enabled
- `package-lock.json`: change only via npm commands
- `node_modules/` and `.next/`: generated
- Client-supplied images in `public/images/`: do not delete or rename
  without checking every reference

## Keeping Docs in Sync

Update the relevant context file whenever implementation
changes:

- System architecture or boundaries (`architecture.md`)
- Storage model decisions, e.g. adding an API route, email service, or CMS
- Code conventions or standards (`code-standards.md`)
- Colours, fonts, breakpoints, or layout patterns (`ui-context.md`)
- Feature scope, pages, or company facts (`project-overview.md`)

## Before Moving to the Next Unit

1. The current unit works end to end within its defined scope
2. It has been checked at mobile (<600px), tablet (<1200px) and desktop
   widths
3. No invariant defined in `architecture.md` was violated
4. `progress-tracker.md` reflects the completed work
5. `npm run build` passes
