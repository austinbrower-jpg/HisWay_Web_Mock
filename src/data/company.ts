/**
 * Company details for HisWay Press or Print.
 *
 * Fields marked PLACEHOLDER are intentionally unset: do not invent them.
 * Fill them in with the owner before this concept goes live.
 *
 * ## Concept vs production mode
 *
 * `isConceptSite` protects this speculative redesign from competing with the
 * live HisWay website in Google search.
 *
 * While `isConceptSite` is `true`:
 * - Root metadata robots are set to `noindex, nofollow`
 * - `robots.ts` disallows all crawlers
 * - `sitemap.ts` returns an empty sitemap (not exposed as a production index)
 * - The footer shows the "Concept preview site" label
 *
 * To switch into production mode after HisWay approves this site:
 * 1. Set `isConceptSite` to `false` in this file
 * 2. Confirm `siteUrl` matches the final live domain
 * 3. Fill in verified `address`, `hours`, and Google review fields in `reviews.ts`
 * 4. Replace placeholder photography with approved business-owned assets
 * 5. Redeploy
 *
 * No environment variables are required for this switch.
 */
export const company = {
  name: "HisWay Press or Print",
  shortName: "HisWay",
  phone: "210-334-0118",
  phoneHref: "tel:+12103340118",
  email: "sales@hiswayss.com",
  emailHref: "mailto:sales@hiswayss.com",
  /** Derived from the 210 area code and current branding. Confirm exact wording with the owner. */
  serviceArea: "San Antonio, Texas",
  /** PLACEHOLDER: confirm street address with the owner before launch. */
  address: null as string | null,
  /** PLACEHOLDER: confirm business hours with the owner before launch. */
  hours: null as string | null,
  catalogUrl: "https://www.promoplace.com/hiswaypressorprint",
  currentSiteUrl: "https://www.hiswaysignshop.com/",
  instagram: "https://www.instagram.com/hiswaypressorprint/",
  instagramHandle: "@hiswaypressorprint",
  facebook: "https://www.facebook.com/Hiswaysignshop",
  /** Update after the concept is deployed to its final Vercel URL or domain. */
  siteUrl: "https://hisway-press-or-print.vercel.app",
  /**
   * Concept/production switch. Keep `true` until HisWay formally adopts this
   * site as the live website. See the file header for the production checklist.
   */
  isConceptSite: true,
} as const;
