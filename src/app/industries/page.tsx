import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { industries } from "@/data/industries";
import { PageHeader } from "@/components/ui/PageHeader";
import { Icon } from "@/components/ui/Icon";
import { Reveal } from "@/components/ui/Reveal";
import { QuoteCta } from "@/components/sections/QuoteCta";

export const metadata: Metadata = {
  title: "Industries",
  description:
    "Signage, apparel, and promotional products for San Antonio restaurants, construction, schools, churches, offices, retail, and events.",
};

export default function IndustriesPage() {
  return (
    <>
      <PageHeader
        title="Industries we serve"
        lead="Every trade has its own version of being seen. Here is how HisWay shows up for each one."
      />

      <section className="bg-paper py-16 lg:py-20">
        <div className="container-site">
          <ul className="grid gap-px border border-line bg-line md:grid-cols-2">
            {industries.map((industry, index) => (
              <li key={industry.slug} id={industry.slug} className="scroll-mt-24 bg-paper">
                <Reveal delay={Math.min((index % 2) * 0.06, 0.12)} className="h-full">
                  <div className="flex h-full flex-col p-7 sm:p-9">
                    <Icon name={industry.icon} className="h-7 w-7 text-accent-deep" />
                    <h2 className="heading-display mt-4 text-3xl text-ink">{industry.name}</h2>
                    <p className="mt-3 leading-relaxed text-muted">{industry.description}</p>
                    <ul className="mt-5 flex flex-wrap gap-2">
                      {industry.commonNeeds.map((need) => (
                        <li
                          key={need}
                          className="border border-ink/15 px-3 py-1.5 text-sm text-ink"
                        >
                          {need}
                        </li>
                      ))}
                    </ul>
                    <Link
                      href="/quote"
                      className="group mt-auto inline-flex items-center gap-2 pt-6 font-display text-base font-semibold uppercase tracking-wide text-accent-deep transition-colors hover:text-ink"
                    >
                      Request a Quote
                      <ArrowRight
                        className="h-4 w-4 transition-transform duration-200 group-hover:translate-x-1"
                        aria-hidden="true"
                      />
                    </Link>
                  </div>
                </Reveal>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <QuoteCta heading="Don't see your industry?" body="We work with plenty of businesses that don't fit a neat category. Tell us what you do and what you need." />
    </>
  );
}
