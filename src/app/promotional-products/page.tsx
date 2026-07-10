import type { Metadata } from "next";
import { ExternalLink } from "lucide-react";
import { company } from "@/data/company";
import { PagePlaceholder } from "@/components/sections/PagePlaceholder";
import { Reveal } from "@/components/ui/Reveal";
import { QuoteCta } from "@/components/sections/QuoteCta";

export const metadata: Metadata = {
  title: "Promotional Products",
  description:
    "Curated promotional products for events, employees, and customers, backed by HisWay's full PromoPlace catalog.",
};

export default function PromotionalProductsPage() {
  return (
    <>
      <PagePlaceholder
        title="Promotional Products"
        lead="A curated way into thousands of branded products, with guidance on budget, audience, and deadlines, so you never have to scroll a wholesale catalog alone."
        planned={[
          "Curated categories: apparel, drinkware, bags, pens, gifts, and more",
          "A Help Me Choose path based on budget and audience",
          "Budget and quantity guidance",
          "Deadline and production planning tips",
          "Request-a-recommendation form",
          "A clear hand-off into the full PromoPlace catalog",
        ]}
      />

      <section className="border-t border-line bg-paper-2 py-14">
        <div className="container-site">
          <Reveal>
            <h2 className="heading-display text-3xl text-ink sm:text-4xl">
              Want to browse right now?
            </h2>
            <p className="mt-3 max-w-xl leading-relaxed text-muted">
              Our full product catalog is already live on PromoPlace. It opens in a new
              tab, and anything you find there can be quoted by the shop.
            </p>
            <a
              href={company.catalogUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-6 inline-flex h-12 items-center justify-center gap-2 bg-accent px-6 font-display text-base font-semibold uppercase tracking-wide text-ink transition-colors hover:bg-accent-deep hover:text-paper active:translate-y-px"
            >
              Browse the Full Catalog
              <ExternalLink className="h-4 w-4" aria-hidden="true" />
              <span className="sr-only">(opens in a new tab)</span>
            </a>
            <p className="mt-3 text-sm text-muted">
              Opens HisWay&apos;s extended product catalog on PromoPlace.
            </p>
          </Reveal>
        </div>
      </section>

      <QuoteCta
        heading="Not sure where to start?"
        body="Tell us your budget, audience, and deadline and we will send back a shortlist of products that fit."
      />
    </>
  );
}
