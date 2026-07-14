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

## Concept vs production indexing

This concept must not compete with the live HisWay website in Google.

`company.isConceptSite` in [`src/data/company.ts`](src/data/company.ts) is the single switch (no environment variables):

| `isConceptSite` | Behavior |
| --- | --- |
| `true` (default) | Metadata `noindex, nofollow`; `robots.ts` disallows all crawlers; sitemap returns empty; footer shows “Concept preview site” |
| `false` | Allows indexing; exposes sitemap; hides concept footer label |

**After HisWay approves this site as the live website:**

1. Set `isConceptSite` to `false`
2. Confirm `siteUrl` matches the final live domain
3. Fill verified Google review fields in [`src/data/reviews.ts`](src/data/reviews.ts)
4. Replace placeholder photography with approved business-owned assets
5. Redeploy

## Deploying to Vercel

1. Import the GitHub repository in Vercel (**Add New Project → Import**).
2. Framework preset: **Next.js**. Build command `npm run build`, output detected automatically.
3. **No environment variables are required.** There is no backend, auth, or CMS.
4. After the first deploy, update `siteUrl` in [`src/data/company.ts`](src/data/company.ts) to the assigned production URL (used by metadata, sitemap, and robots), then redeploy.

Or from the CLI: `npx vercel` from the project root.

Keep `isConceptSite: true` for any preview that should stay out of search results.

## Content model

All copy and structure live in `src/data/`:

| File | Contents |
| --- | --- |
| `company.ts` | Name, phone, email, social + catalog URLs, `isConceptSite` switch. Address/hours are intentionally `null` placeholders — do not invent them. |
| `reviews.ts` | Typed Google review model + trust signals. Ratings, counts, and quotes stay empty until verified. |
| `services.ts` | The 7 services with overview copy, use cases, options, and FAQs. Drives `/services` and `/services/[slug]`. |
| `projects.ts` | 6 anonymous placeholder portfolio projects (extended fields ready for verified production work). |
| `industries.ts` | 8 industries served, structured to grow into per-industry SEO pages later. |
| `navigation.ts` | Header and footer link groups. |

## Planning documents

Operational and growth docs live in [`docs/`](docs/):

| Document | Purpose |
| --- | --- |
| `content-and-photo-intake.md` | How to collect owned photography with permission |
| `media-owner-review-guide.md` | Concise owner-session guide for deciding concept, public web, and portfolio use |
| `media-owner-decision-sheet.md` | Short printable decision sheet for the owner approval conversation |
| `media-owner-approval-checklist.md` | Detailed worksheet for the same media approval session |
| `brand-assets.md` | Official owner-provided logo usage, asset paths, and contrast rules |
| `placeholder-replacement-map.md` | Every placeholder asset and what should replace it |
| `project-publishing-workflow.md` | Website → GBP → social → review loop |
| `seo-keyword-map.md` | Seed keywords + page-to-intent map (validation required) |
| `google-business-profile-plan.md` | GBP audit, cadence, and review-request workflow |
| `promoplace-and-catalog-discovery.md` | Vendor discovery questions and comparison matrix |
| `hisway-discovery-questionnaire.md` | Owner/Sadrac discovery questions |
| `operations-hub-roadmap.md` | Future internal ops system (not built in this phase) |

## Swapping in real photography

Every image on the site is a labeled SVG placeholder under `public/images/`. To use real photos, follow the intake docs, then replace the file at the same path (any raster format; update the extension in the data file or component reference). The `PhotoFrame` component automatically runs raster images through `next/image` optimization.

## Route map

- `/` — homepage (hero, trust bar, services, featured work, differentiators, reviews, promo intro, process, industries, about preview, gallery, local presence, quote CTA)
- `/services` + `/services/[slug]` — 7 data-driven service detail pages (selected pages include service-scoped review modules)
- `/work` + `/work/[slug]` — portfolio grid with category filters + 6 project case pages
- `/promotional-products` — curated entry point into the external [PromoPlace catalog](https://www.promoplace.com/hiswaypressorprint)
- `/industries` — 8 industries served
- `/about` — shop story, values, and trust modules
- `/quote` — frontend-only quote request mock (validation + success state; no network submit)
- `/contact` — contact details + frontend-only message mock
- `sitemap.xml`, `robots.txt`, OG image, favicon, Apple touch icons

## Forms

Quote and Contact forms are **presentation mocks**:

- Native HTML validation for required fields
- Labels wired to inputs
- Success UI after a short simulated delay
- File picker on the quote form shows a local filename only — nothing is uploaded
- No `fetch`, no API routes, no credentials

## Known placeholders

- All photography (labeled placeholder slots)
- Street address and business hours (confirm with owner; deliberately unset in `company.ts`)
- "San Antonio, Texas" service area wording (derived from the 210 area code and current branding; confirm exact wording with owner)
- Google rating, review count, profile URL, and review quotes (unset in `reviews.ts` until verified)
- Official founding year (not stated publicly until the owner confirms)
- `siteUrl` should be updated after the first Vercel deploy if the assigned domain differs

## Auth / `/login` note

This repository contains **no** authentication, Supabase, or `/login` route. If a `/login` request with a Supabase-related error appears during local development, it is coming from the browser environment or an extension — not from this application.

## Development updates

### 2026-07-14

- Merged PR #4 into `main` to introduce provisional concept-only media on the homepage, about page, and embroidery service page.
- Kept all 22 manifest assets at `publicUseApproved: false`; only `media-004`, `media-007`, `media-018`, and `media-019` remain approved for private noindex concept use.
- Reconfirmed `company.isConceptSite: true`, `noindex, nofollow` behavior, successful Vercel deployment, and passing `lint`, `tsc`, `build`, and contact-sheet generation checks.
- Owner approval is still required before any public launch, portfolio publication, social reuse, Google Business Profile use, or broader customer-facing media rollout.

### 2026-07-14 (reviews pass)

- Added a verified local Google reviews dataset with a 5.0 rating, 26-review count, curated featured excerpts, and service/category mappings for concept-safe testimonial placement.
- Replaced review placeholders on the homepage and about page with real supplied customer feedback, plus a dedicated `/reviews` route and selective service-page testimonial modules.
- Kept the site in `noindex, nofollow` concept mode, preserved all provisional media as `publicUseApproved: false`, and left the immutable intake archive untouched.
- Continued using only supplied review text, trimmed select excerpts with visible ellipses for layout, and avoided customer review photos or unsupported project claims.

### 2026-07-14 (main merge follow-up)

- Confirmed PR #4 and PR #5 now coexist on `main`, so the concept-media implementation and verified reviews experience are both present in the latest branch tip.
- Revalidated `lint`, `tsc`, `build`, and contact-sheet generation before merging PR #5, then rechecked the merged `main` state for `noindex, nofollow`, four concept-only media approvals, and zero public media approvals.
- Verified responsive behavior across `/`, `/about`, `/reviews`, `/services/embroidery`, and `/services/banners-decals-stickers`, including the concept photography on the homepage/about/embroidery views and the `5.0 from 26 Google reviews` trust content.
- Left customer review photos, public media approvals, and unsupported customer project claims out of the concept site pending owner approval and future production planning.

### 2026-07-14 (media approval prep)

- Added the owner-facing `docs/media-owner-review-guide.md` and linked it from the planning-docs index for easier review-session use.
- Prepared the broader media shortlist, missing-photo checklist, and phased rollout plan without changing any approval flags or introducing review photos.
- Kept all intake assets at `publicUseApproved: false`, left concept mode in `noindex, nofollow`, avoided new customer portfolio entries, and left `Branding/images/intake/originals/` unchanged.
- Revalidated `npm run lint`, `npx tsc --noEmit`, `npm run build`, and `node scripts/generate-media-contact-sheets.mjs` successfully.

### 2026-07-14 (owner decision sheet)

- Added the concise `docs/media-owner-decision-sheet.md` for Austin to use directly with the owner during the approval conversation.
- Kept the decision sheet limited to decisions, customer-branded work choices, and photography scheduling prompts with no approvals made on the owner’s behalf.
- Preserved the existing safeguards: every media asset remains `publicUseApproved: false`, concept mode remains `noindex, nofollow`, and the originals archive was left untouched.

### 2026-07-14 (post-merge decision sheet)

- Merged PR #6 into `main`, confirmed the new owner review guide is present on `main`, and added the concise decision sheet for the owner conversation.
- Revalidated `npm run lint`, `npx tsc --noEmit`, `npm run build`, and `node scripts/generate-media-contact-sheets.mjs` on the updated `main` branch.
- Left all media approval flags unchanged, kept concept mode in `noindex, nofollow`, and did not add customer portfolio entries or review photos.

### 2026-07-14 (logo integration)

- Added the two owner-provided official logo files to `public/images/brand/` with clean production filenames, while preserving the original uploads alongside them.
- Replaced the text-only header and footer brand lockups with responsive image-based treatments: horizontal logo for the desktop header, badge logo for mobile header/nav and footer branding.
- Swapped the app icons to the owner-provided badge artwork, and replaced the generated Open Graph route with a static social card that includes the badge logo in a framed composition.
- Added `docs/brand-assets.md` plus a media-inventory note so future work knows which logo is intended for wide use, which is intended for compact use, and when a light panel is required.
- Revalidated `npm run lint`, `npx tsc --noEmit`, and `npm run build` after the logo changes.
