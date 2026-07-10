# HisWay Press or Print — Concept Website

A speculative redesign concept for [HisWay Press or Print](https://www.hiswaysignshop.com/), a San Antonio sign, print, apparel, and promotional-products shop. Built to be presented to the owner as a replacement for the current Squarespace site.

**This is a mockup.** There is intentionally no database, no payments, no authentication, no CMS, and no production integrations. All content lives in static data files, and all photography is a clearly labeled local placeholder.

## Stack

- [Next.js 16](https://nextjs.org) (App Router, TypeScript, `src/` directory, `@/*` alias)
- [Tailwind CSS v4](https://tailwindcss.com) (design tokens in `src/app/globals.css`)
- [Framer Motion](https://motion.dev) (restrained scroll reveals, reduced-motion aware)
- [Lucide React](https://lucide.dev) icons
- Static generation for every route (no runtime server dependencies)

## Local setup

```bash
npm install
npm run dev      # http://localhost:3000
```

Quality checks:

```bash
npm run lint     # ESLint
npx tsc --noEmit # TypeScript
npm run build    # production build (all routes prerendered)
```

## Deploying to Vercel

1. Push this folder to a Git repository (GitHub/GitLab/Bitbucket).
2. In Vercel: **Add New Project → Import** the repository. The Next.js defaults are correct; no environment variables are required.
3. After the first deploy, update `siteUrl` in [`src/data/company.ts`](src/data/company.ts) to the assigned URL (used by metadata, sitemap, and robots), then redeploy.

Or from the CLI: `npx vercel` from the project root.

> Note: while this remains a concept, consider keeping it un-indexed so it never competes with the real site in search. Vercel preview URLs are `noindex` automatically; if you promote it to production before the owner adopts it, flip `robots.ts` to disallow.

## Content model

All copy and structure live in `src/data/`:

| File | Contents |
| --- | --- |
| `company.ts` | Name, phone, email, social + catalog URLs. Address/hours are intentionally `null` placeholders — do not invent them. |
| `services.ts` | The 7 services with overview copy, use cases, options, and FAQs. Drives `/services` and `/services/[slug]`. |
| `projects.ts` | 6 anonymous placeholder portfolio projects. Drives `/work` and `/work/[slug]`. |
| `industries.ts` | 8 industries served, structured to grow into per-industry SEO pages later. |
| `navigation.ts` | Header and footer link groups. |

## Swapping in real photography

Every image on the site is a labeled SVG placeholder under `public/images/` (generated print-proof style, crop marks and all). To use real photos, replace the file at the same path (any raster format; update the extension in the data file or component reference). The `PhotoFrame` component automatically runs raster images through `next/image` optimization.

## Route map

- `/` — homepage (hero, services, featured work, differentiators, promo intro, process, industries, about preview, gallery, quote CTA)
- `/services` + `/services/[slug]` — 7 data-driven service detail pages
- `/work` + `/work/[slug]` — portfolio grid + 6 project case pages
- `/promotional-products` — curated entry point into the external [PromoPlace catalog](https://www.promoplace.com/hiswaypressorprint)
- `/industries` — 8 industries served
- `/about`, `/quote`, `/contact` — interim pages (full versions are the next build phase)
- `sitemap.xml`, `robots.txt`, OG image, favicon

## Build phases

**Phase 1 (this build):** foundation, design system, header/footer/mobile nav, homepage, services system, portfolio system, industries, interim pages, SEO base.

**Phase 2 (planned):** full quote form (mock submission with validation + success state), full contact page, complete About story page, promotional-products landing with Help Me Choose flow, portfolio category filters.

## Known placeholders

- All photography (labeled placeholder slots)
- Street address and business hours (confirm with owner; deliberately unset in `company.ts`)
- "San Antonio, Texas" service area wording (derived from the 210 area code and current branding; confirm exact wording with owner)
- Customer proof/testimonials are omitted entirely until real ones are provided
