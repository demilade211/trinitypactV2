# TPL Trinitypact Limited — Company Website (trinitypactV2)

## Overview

A marketing/brochure website for **TPL Trinitypact Limited**, a real estate
development company based in Lagos, Nigeria, registered with the Corporate
Affairs Commission (CAC). The site presents the company (history, vision,
mission, tenets), its services (real estate development, project management,
property management, construction), a gallery of past projects, client
testimonials, and contact details. It is aimed at prospective investors and
home buyers looking for low-cost housing in high-brow areas and investment
properties that return over a ~15-year span. The problem it solves is giving
the company a credible online presence and a clear route for prospects to get
in touch.

Company facts used across the site (keep consistent everywhere):

- Name: TPL Trinitypact Limited (branded "TPL TrinityPact")
- Address: 7, Bailey Street, Off Oguntolu Street, Shomolu, Lagos
- Phones: +234 806 078 7963 (local), +234 802 143 1957 (mobile)
- Email: trinitypactlimited@gmail.com
- Working hours: Monday – Friday, 8:00am – 6:00pm
- Facebook: https://www.facebook.com/profile.php?id=100071851962525
- Instagram: https://www.instagram.com/trinitypact1
- Headline stats (home page): 10+ projects, 200+ clients, 5-star rating,
  "over four years" in business

## Goals

1. Present TPL Trinitypact as a credible, established real estate developer.
2. Explain the four core services clearly on both the home and services pages.
3. Showcase completed/ongoing projects with photos.
4. Convert visitors into leads via the "Contact Us" CTA and contact page.
5. Work well on mobile (most layouts collapse at 1200px / 600px breakpoints).

## Core User Flow

1. Visitor lands on the home page (`/`) — hero "Best - Value / Deals Now in
   Your City" with a "Learn More" button.
2. Visitor scrolls through About Us summary + stats, Our Services, the
   services cards, Our Projects gallery, and client testimonials.
3. Visitor follows "Read More" / "Learn More" to `/about`, or uses the navbar
   to visit `/services` or `/projects`.
4. Visitor clicks "Contact Us today to get started" (Discover banner) or the
   navbar "Contact Us" to reach `/contact`.
5. Visitor reads the address/phone/email or fills in the contact form
   (Name, Email, Phone, Subject, Message → "SEND NOW").
   **Note:** the form currently does not submit anywhere (see
   `progress-tracker.md`).

## Features

### Pages

- **Home (`/`)** — HeroSection, AboutUs (intro + stats + Read More),
  Services intro, CardsSection ("Our Services Include" 4 cards), Listings
  (3 project images; desktop grid, mobile carousel with arrows + dots),
  Testimony (3 client testimonials), Discover (contact CTA banner).
- **About (`/about`)** — Title banner, Mission (company image, intro
  paragraph, Vision & Mission panel), Tenets (6 tenets: Innovation,
  Integrity, Community Focus, Client Centric, Sustainability, Employee
  Empowerment), Why Choose TPL (7 reasons), Discover CTA.
- **Services (`/services`)** — Title banner + 4 service cards with
  descriptions (Real Estate Development, Project Management, Property
  Management, Constructions).
- **Projects (`/projects`)** — Title banner + responsive grid of project
  images (3 columns → 2 at 900px → 1 at 500px).
- **Contact (`/contact`)** — Title banner, contact details (Find us / Call us
  today / Email us now) and a contact form.

### Shared Chrome

- **Navbar** — logo (links home), desktop links with active-route highlight,
  hamburger menu + slide-down mobile nav below 1200px.
- **Footer** — company blurb, Facebook/Instagram links, contact details,
  working hours, dynamic copyright year.

## Scope

### In Scope

- Static, content-driven marketing pages listed above
- Responsive layouts for desktop, tablet, and mobile
- Contact details and a contact form UI
- Brand styling (orange `#F58634` accent, Nunito font)

### Out of Scope (currently)

- User accounts, authentication, or admin/CMS
- Database or dynamic property listings (projects are hard-coded images)
- Property search, filtering, payments, or booking
- Blog/news section
- Internationalisation

## Success Criteria

1. All five routes (`/`, `/about`, `/services`, `/projects`, `/contact`)
   render correctly and are reachable from both desktop and mobile nav.
2. Contact information is identical in the footer and on the contact page.
3. Layouts are usable at 375px, 768px, 1200px, and 1440px widths without
   horizontal scrolling.
4. `npm run build` passes.
5. (Pending) Submitting the contact form delivers the message to the company
   and shows the visitor a success/error state.
