import Image from "next/image";
import Link from "next/link";
import { ExternalLink, Mail, Phone } from "lucide-react";
import { BrandLogo } from "@/components/layout/BrandLogo";
import { company } from "@/data/company";
import { footerCompanyLinks, footerExternalLinks } from "@/data/navigation";
import { services } from "@/data/services";
import { conceptPreviewMediaNote } from "@/data/concept-media";

/** Agency that built this site. Credited in the footer only. */
const partnerAgency = {
  name: "Battle Bound Branding LLC",
  href: "https://battleboundbranding.com",
} as const;

export function Footer() {
  return (
    <footer className="border-t-4 border-accent bg-ink text-paper">
      <div className="container-site grid gap-10 py-14 sm:grid-cols-2 lg:grid-cols-12 lg:gap-8">
        <div className="lg:col-span-4">
          <div className="flex items-start gap-4">
            <Link
              href="/"
              aria-label="HisWay Press or Print, home"
              className="inline-flex shrink-0 items-center justify-center border border-line-dark bg-paper p-2 transition-colors hover:border-accent hover:bg-paper-2"
            >
              <BrandLogo variant="badge" className="h-16 w-16 sm:h-[4.75rem] sm:w-[4.75rem]" />
            </Link>
            <p className="flex flex-col leading-none">
              <span className="font-display text-3xl font-bold tracking-tight uppercase">HisWay</span>
              <span className="mt-1 font-mono text-[10px] tracking-[0.28em] text-muted-dark uppercase">
                Press or Print
              </span>
            </p>
          </div>
          <p className="mt-5 max-w-xs leading-relaxed text-muted-dark">
            Custom signs, apparel, and promotional products for {company.serviceArea} businesses,
            with personal service from concept through completion.
          </p>
        </div>

        <nav aria-label="Services" className="lg:col-span-3">
          <h2 className="font-display text-lg font-semibold tracking-wide uppercase">Services</h2>
          <ul className="mt-4 space-y-2.5">
            {services.map((service) => (
              <li key={service.slug}>
                <Link
                  href={`/services/${service.slug}`}
                  className="text-[15px] text-muted-dark transition-colors hover:text-paper"
                >
                  {service.name}
                </Link>
              </li>
            ))}
          </ul>
        </nav>

        <nav aria-label="Company" className="lg:col-span-2">
          <h2 className="font-display text-lg font-semibold tracking-wide uppercase">Company</h2>
          <ul className="mt-4 space-y-2.5">
            {footerCompanyLinks.map((link) => (
              <li key={link.href}>
                <Link
                  href={link.href}
                  className="text-[15px] text-muted-dark transition-colors hover:text-paper"
                >
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>

        <div className="lg:col-span-3">
          <h2 className="font-display text-lg font-semibold tracking-wide uppercase">Get in touch</h2>
          <ul className="mt-4 space-y-2.5">
            <li>
              <a
                href={company.phoneHref}
                className="inline-flex items-center gap-2 font-mono text-[15px] text-muted-dark transition-colors hover:text-paper"
              >
                <Phone className="h-4 w-4" aria-hidden="true" />
                {company.phone}
              </a>
            </li>
            <li>
              <a
                href={company.emailHref}
                className="inline-flex items-center gap-2 font-mono text-[15px] text-muted-dark transition-colors hover:text-paper"
              >
                <Mail className="h-4 w-4" aria-hidden="true" />
                {company.email}
              </a>
            </li>
          </ul>
          <ul className="mt-6 space-y-2.5">
            {footerExternalLinks.map((link) => (
              <li key={link.href}>
                <a
                  href={link.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 text-[15px] text-muted-dark transition-colors hover:text-paper"
                >
                  {link.label}
                  <ExternalLink className="h-3.5 w-3.5" aria-hidden="true" />
                  <span className="sr-only">(opens in a new tab)</span>
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>

      <div className="border-t border-line-dark">
        <div className="container-site flex flex-col gap-4 py-5 text-sm text-muted-dark sm:flex-row sm:items-center sm:justify-between sm:gap-6">
          <p>
            © {new Date().getFullYear()} {company.name}. All rights reserved.
          </p>
          <div className="flex flex-col gap-3 sm:items-end">
            {company.isConceptSite && (
              <div className="text-left sm:text-right">
                <p className="font-mono text-xs tracking-wide uppercase">Concept preview site</p>
                <p className="mt-1 max-w-md text-xs leading-relaxed text-muted-dark/90">
                  {conceptPreviewMediaNote}
                </p>
              </div>
            )}
            {/* Opacity floors at /80 so the 12px credit clears WCAG AA (5.2:1 on ink)
                while staying visually secondary to the HisWay lockup above it. */}
            <p className="flex flex-wrap items-center gap-y-1 text-xs text-muted-dark/80 sm:justify-end">
              <span>Built by</span>
              <a
                href={partnerAgency.href}
                target="_blank"
                rel="noopener noreferrer"
                className="group inline-flex items-center text-muted-dark/80 transition-colors hover:text-paper focus-visible:text-paper"
              >
                {/* The artwork ships with ~15px of built-in clear space at this size,
                    so the link intentionally sets no horizontal gap of its own. */}
                <Image
                  src="/images/brand/partners/battle-bound-branding-white.png"
                  alt=""
                  width={54}
                  height={18}
                  className="h-[18px] w-[54px] shrink-0 opacity-80 transition-opacity group-hover:opacity-100 group-focus-visible:opacity-100"
                />
                {partnerAgency.name}
                <span className="sr-only"> (opens in a new tab)</span>
              </a>
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
