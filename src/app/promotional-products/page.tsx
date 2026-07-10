import type { Metadata } from "next";
import { ExternalLink } from "lucide-react";
import { company } from "@/data/company";
import { PageHeader } from "@/components/ui/PageHeader";
import { Reveal } from "@/components/ui/Reveal";
import { QuoteCta } from "@/components/sections/QuoteCta";

export const metadata: Metadata = {
  title: "Promotional Products",
  description:
    "Curated promotional products for events, employees, and customers, backed by HisWay's full PromoPlace catalog.",
};

const categories = [
  { name: "Apparel", desc: "Shirts, hats, and outerwear" },
  { name: "Drinkware", desc: "Mugs, tumblers, and bottles" },
  { name: "Bags", desc: "Totes, backpacks, and duffels" },
  { name: "Pens & office", desc: "Writing instruments and desk accessories" },
  { name: "Employee gifts", desc: "Recognition and onboarding items" },
  { name: "Event merch", desc: "Giveaways and trade show items" },
  { name: "Outdoor products", desc: "Coolers, chairs, and leisure items" },
  { name: "Trade-show products", desc: "Displays, lanyards, and badges" },
];

export default function PromotionalProductsPage() {
  return (
    <>
      <PageHeader
        title="Promotional Products"
        lead="Our extended catalog holds thousands of items. Rather than scrolling through wholesale listings alone, we can help you find exactly what you need based on your audience and budget."
      />

      <section className="bg-paper py-16 lg:py-24">
        <div className="container-site">
          <Reveal>
            <h2 className="heading-display text-3xl text-ink sm:text-4xl">Popular Categories</h2>
          </Reveal>
          <ul className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {categories.map((cat, i) => (
              <li key={cat.name}>
                <Reveal delay={Math.min(i * 0.05, 0.2)}>
                  <div className="border border-line bg-paper-2 p-6 h-full transition-colors hover:border-ink/20">
                    <h3 className="font-display text-xl font-semibold uppercase text-ink">{cat.name}</h3>
                    <p className="mt-2 text-sm text-muted">{cat.desc}</p>
                  </div>
                </Reveal>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section className="border-t border-line bg-paper-2 py-16 lg:py-24">
        <div className="container-site">
          <div className="grid gap-12 lg:grid-cols-2">
            <Reveal>
              <div className="border-l-4 border-accent pl-6">
                <h2 className="heading-display text-3xl text-ink">Path 1: Help Me Choose</h2>
                <p className="mt-4 text-lg text-muted">
                  Don&apos;t want to dig through thousands of products? Let us narrow it down. When you request a quote, just tell us:
                </p>
                <ul className="mt-6 space-y-3 font-medium text-ink">
                  <li><strong className="font-display uppercase tracking-wider text-accent-deep">Audience:</strong> Who is this for?</li>
                  <li><strong className="font-display uppercase tracking-wider text-accent-deep">Budget:</strong> What is your total or per-item target?</li>
                  <li><strong className="font-display uppercase tracking-wider text-accent-deep">Quantity:</strong> How many do you need?</li>
                  <li><strong className="font-display uppercase tracking-wider text-accent-deep">Deadline:</strong> When is your event?</li>
                  <li><strong className="font-display uppercase tracking-wider text-accent-deep">Decoration:</strong> Printed, embroidered, or engraved?</li>
                </ul>
              </div>
            </Reveal>

            <Reveal delay={0.1}>
              <div className="border-l-4 border-ink pl-6">
                <h2 className="heading-display text-3xl text-ink">Path 2: Browse the Full Catalog</h2>
                <p className="mt-4 text-lg text-muted">
                  If you prefer to see all the options yourself, you can visit PromoPlace, our extended product catalog. It contains our complete inventory of wholesale promotional items.
                </p>
                <a
                  href={company.catalogUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-8 inline-flex h-14 items-center justify-center gap-3 bg-ink px-8 font-display text-lg font-semibold uppercase tracking-wide text-paper transition-colors hover:bg-accent hover:text-ink active:translate-y-px"
                >
                  Open External Catalog
                  <ExternalLink className="h-5 w-5" aria-hidden="true" />
                  <span className="sr-only">(opens in a new tab)</span>
                </a>
                <p className="mt-4 text-sm text-muted">
                  Link opens in a new tab. If you find something you like, note the item number and send it to us for a quote!
                </p>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      <QuoteCta
        heading="Let's find the right products"
        body="Tell us what you're looking for and we'll put together a shortlist of options."
      />
    </>
  );
}
