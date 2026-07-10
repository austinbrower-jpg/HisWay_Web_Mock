/**
 * Company details for HisWay Press or Print.
 *
 * Fields marked PLACEHOLDER are intentionally unset: do not invent them.
 * Fill them in with the owner before this concept goes live.
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
} as const;
