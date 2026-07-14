import type { NavLink } from "@/types";
import { company } from "@/data/company";

export const mainNav: NavLink[] = [
  { label: "Home", href: "/" },
  { label: "Services", href: "/services" },
  { label: "Our Work", href: "/work" },
  { label: "Promotional Products", shortLabel: "Promo Products", href: "/promotional-products" },
  { label: "Industries", href: "/industries" },
  { label: "About", href: "/about" },
  { label: "Contact", href: "/contact" },
];

export const quoteCta: NavLink = { label: "Request a Quote", href: "/quote" };

export const footerCompanyLinks: NavLink[] = [
  { label: "Our Work", href: "/work" },
  { label: "Reviews", href: "/reviews" },
  { label: "Promotional Products", href: "/promotional-products" },
  { label: "Industries", href: "/industries" },
  { label: "About", href: "/about" },
  { label: "Contact", href: "/contact" },
  { label: "Request a Quote", href: "/quote" },
];

export const footerExternalLinks: NavLink[] = [
  { label: "PromoPlace Catalog", href: company.catalogUrl, external: true },
  { label: "Instagram", href: company.instagram, external: true },
  { label: "Facebook", href: company.facebook, external: true },
];
