import { ExternalLink } from "lucide-react";
import { company } from "@/data/company";
import { ButtonLink } from "@/components/ui/Button";
import { Reveal } from "@/components/ui/Reveal";
import { SectionHeading } from "@/components/ui/SectionHeading";

const categories = [
  "Apparel",
  "Drinkware",
  "Bags",
  "Pens & office",
  "Employee gifts",
  "Event merch",
  "Outdoor",
  "Trade show",
];

export function PromoIntro() {
  return (
    <section className="bg-paper-2 py-20 lg:py-24">
      <div className="container-site">
        <Reveal>
          <SectionHeading
            title="Promotional products, minus the guesswork"
            lead="Our extended catalog holds thousands of items. Tell us your budget, audience, and deadline and we narrow it to what actually works."
          />
        </Reveal>

        <Reveal className="mt-8" delay={0.08}>
          <ul className="flex flex-wrap gap-2.5">
            {categories.map((category) => (
              <li
                key={category}
                className="border border-ink/15 px-4 py-2 font-display text-base font-medium uppercase tracking-wide text-ink"
              >
                {category}
              </li>
            ))}
          </ul>
        </Reveal>

        <Reveal className="mt-10" delay={0.14}>
          <div className="flex flex-wrap items-center gap-4">
            <ButtonLink href="/promotional-products" variant="primary">
              Browse Promotional Products
            </ButtonLink>
            <a
              href={company.catalogUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex h-12 items-center justify-center gap-2 border border-ink/30 px-6 font-display text-base font-semibold uppercase tracking-wide text-ink transition-colors hover:border-ink hover:bg-ink hover:text-paper active:translate-y-px"
            >
              Browse the Full Catalog
              <ExternalLink className="h-4 w-4" aria-hidden="true" />
              <span className="sr-only">(opens in a new tab)</span>
            </a>
          </div>
          <p className="mt-3 text-sm text-muted">
            The full catalog is hosted on PromoPlace, HisWay&apos;s extended product site, and
            opens in a new tab.
          </p>
        </Reveal>
      </div>
    </section>
  );
}
