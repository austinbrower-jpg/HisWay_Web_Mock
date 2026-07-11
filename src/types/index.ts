export type ServiceSlug =
  | "custom-signs"
  | "screen-printing-apparel"
  | "embroidery"
  | "vehicle-graphics"
  | "banners-decals-stickers"
  | "promotional-products"
  | "graphic-design-content";

export type ProjectCategory =
  | "Signs"
  | "Apparel"
  | "Embroidery"
  | "Vehicles"
  | "Banners"
  | "Promotional Products";

export type IconKey =
  | "signpost"
  | "shirt"
  | "spool"
  | "truck"
  | "flag"
  | "gift"
  | "pen"
  | "utensils"
  | "hardhat"
  | "graduation"
  | "church"
  | "building"
  | "briefcase"
  | "store"
  | "calendar";

export interface ServiceOption {
  name: string;
  description: string;
}

export interface Faq {
  question: string;
  answer: string;
}

export interface Service {
  slug: ServiceSlug;
  name: string;
  /** Short label for tight spaces (nav, chips). */
  shortName: string;
  icon: IconKey;
  tagline: string;
  /** One-liner used on cards and the services overview. */
  summary: string;
  /** Overview paragraphs for the detail page. */
  overview: string[];
  heroImage: string;
  heroImageAlt: string;
  /** Noun used in quote CTA copy, e.g. "Ready to start your {projectNoun} project?" */
  projectNoun: string;
  useCases: string[];
  options: ServiceOption[];
  faqs: Faq[];
  relatedProjects: string[];
}

export interface ProjectImage {
  src: string;
  alt: string;
}

/**
 * Portfolio project model.
 *
 * VERIFICATION REQUIRED before publishing real customer work:
 * - customerName, location: confirm permission to name the customer/place
 * - customerPermission: must be "granted" before public launch of that project
 * - completionDate, materials, decorationMethod: confirm with production records
 * - socialPostUrl, googleBusinessProfilePostUrl: only after those posts exist
 * - connectedReviewId: only after a verified review is linked in reviews.ts
 * - seoTitle, seoDescription: write from real project facts, not invented claims
 *
 * Current placeholder projects intentionally leave these fields unset.
 * Do not invent customer names, results, dates, or permissions.
 */
export type CustomerPermissionStatus = "pending" | "granted" | "declined" | "not-requested";

export interface Project {
  slug: string;
  title: string;
  category: ProjectCategory;
  summary: string;
  challenge: string;
  solution: string;
  servicesUsed: ServiceSlug[];
  cover: ProjectImage;
  images: ProjectImage[];
  related: string[];
  featured?: boolean;
  /** Optional verified customer/company name. Leave unset until permission is granted. */
  customerName?: string | null;
  /** Customer industry label, when known. */
  customerIndustry?: string | null;
  /** ISO completion date (YYYY-MM-DD). Leave unset until verified. */
  completionDate?: string | null;
  /** Materials used on the job. */
  materials?: string[] | null;
  /** Decoration or production method (e.g. screen print, cut vinyl, embroidery). */
  decorationMethod?: string | null;
  /** Optional project location. */
  location?: string | null;
  /** Customer permission to publish photos and project details. */
  customerPermission?: CustomerPermissionStatus | null;
  /** URL of a related social post, once published. */
  socialPostUrl?: string | null;
  /** URL of a related Google Business Profile post, once published. */
  googleBusinessProfilePostUrl?: string | null;
  /** ID of a verified review in reviews.ts connected to this project. */
  connectedReviewId?: string | null;
  /** Optional SEO title override for the project detail page. */
  seoTitle?: string | null;
  /** Optional SEO description override for the project detail page. */
  seoDescription?: string | null;
}

export interface Industry {
  slug: string;
  name: string;
  icon: IconKey;
  description: string;
  commonNeeds: string[];
}

export interface NavLink {
  label: string;
  /** Compact label for the space-constrained desktop header bar. */
  shortLabel?: string;
  href: string;
  external?: boolean;
}
