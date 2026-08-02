# Accusense Advisor

Marketing website for **Accusense Advisor** — accounting, bookkeeping, tax, advisory, and corporate services. Built with Next.js (App Router), React 19, and Tailwind CSS 4.

## Tech Stack

- **Framework:** Next.js 16 (App Router)
- **UI:** React 19, Tailwind CSS 4
- **Animation/Scroll:** `motion`, `lenis` (smooth scroll)
- **Icons:** `react-icons`
- **Forms:** Web3Forms (contact form submission)
- **Package manager:** pnpm

## Getting Started

Install dependencies:

```bash
pnpm install
```

Run the dev server:

```bash
pnpm dev
```

Open [http://localhost:3000](http://localhost:3000) to view the site.

Other scripts:

```bash
pnpm build   # production build
pnpm start   # run the production build
pnpm lint    # eslint
```

## Environment Variables

Create a `.env.local` file in the project root with:

```bash
NEXT_PUBLIC_WEB3FORMS_ACCESS_KEY=your-web3forms-access-key
```

Used by the contact form ([components/shared/ContactSection.jsx](components/shared/ContactSection.jsx)) to submit messages via [Web3Forms](https://web3forms.com).

## Project Structure

```
app/                    Route segments (App Router)
  about/                About page
  contact/              Contact page
  privacy/, terms/       Legal pages
  services/              Services index + one page per service
  who-we-help/           Target audience page
  layout.jsx             Root layout
  page.jsx               Home page
  robots.js, sitemap.js  SEO metadata routes
  opengraph-image.jsx    OG image generation

components/
  about/                 About page sections
  home/                  Home page sections (Hero, Process, Reviews)
  services/              Per-service info sections
  shared/                Reused across pages (Header, Footer, CTA, ContactSection, ...)
  who-we-help/           Who-we-help page sections

lib/
  seo.js                 Site-wide SEO constants and metadata helper

public/                  Static assets
```

Path alias `@/*` maps to the project root (see [jsconfig.json](jsconfig.json)).

## Notes

- SEO metadata (title, description, Open Graph, canonical URLs) is centralized in [lib/seo.js](lib/seo.js) via the `pageMetadata()` helper — use it when adding new pages.
- This repo pins a customized Next.js (see [AGENTS.md](AGENTS.md)) — check `node_modules/next/dist/docs/` for framework behavior that may differ from upstream Next.js docs before relying on training-data assumptions.
