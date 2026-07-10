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
