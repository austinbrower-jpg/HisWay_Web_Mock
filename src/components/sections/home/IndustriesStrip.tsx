import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { industries } from "@/data/industries";
import { Icon } from "@/components/ui/Icon";
import { Reveal } from "@/components/ui/Reveal";
import { SectionHeading } from "@/components/ui/SectionHeading";

export function IndustriesStrip() {
  return (
    <section className="border-t border-line bg-paper py-20 lg:py-24">
      <div className="container-site">
        <Reveal>
          <SectionHeading
            title="Made for the way you work"
            lead="A restaurant, a construction crew, and a school need very different things from a print shop. We work across all of them."
          />
        </Reveal>

        <ul className="mt-10 grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
          {industries.map((industry, index) => (
            <li key={industry.slug}>
              <Reveal delay={Math.min(index * 0.04, 0.2)}>
                <Link
                  href={`/industries#${industry.slug}`}
                  className="group flex items-center justify-between gap-3 border border-line bg-paper px-5 py-4 transition-colors hover:border-accent-deep"
                >
                  <span className="flex items-center gap-3">
                    <Icon name={industry.icon} className="h-5 w-5 text-accent-deep" />
                    <span className="font-display text-lg font-semibold uppercase tracking-wide text-ink">
                      {industry.name}
                    </span>
                  </span>
                  <ArrowUpRight
                    className="h-4 w-4 text-muted transition-colors group-hover:text-accent-deep"
                    aria-hidden="true"
                  />
                </Link>
              </Reveal>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
