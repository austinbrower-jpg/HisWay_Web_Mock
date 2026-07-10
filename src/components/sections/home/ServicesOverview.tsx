import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { services } from "@/data/services";
import { Icon } from "@/components/ui/Icon";
import { Reveal } from "@/components/ui/Reveal";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { cn } from "@/lib/utils";

export function ServicesOverview() {
  const [featured, ...rest] = services;

  return (
    <section className="bg-paper py-20 lg:py-24">
      <div className="container-site">
        <Reveal>
          <SectionHeading
            title="What we make"
            lead="Design, production, and installation under one roof, so your signs, apparel, and promo products all match."
          />
        </Reveal>

        <Reveal className="mt-10" delay={0.1}>
          <ul className="grid gap-px border border-line bg-line md:grid-cols-2 lg:grid-cols-3">
            <li className="md:col-span-2">
              <Link
                href={`/services/${featured.slug}`}
                className="group flex h-full flex-col justify-between gap-8 bg-ink p-7 text-paper transition-colors hover:bg-ink-2"
              >
                <Icon name={featured.icon} className="h-8 w-8 text-accent" />
                <div>
                  <span className="heading-display block text-3xl">{featured.name}</span>
                  <p className="mt-2 max-w-md leading-relaxed text-muted-dark">
                    {featured.summary}
                  </p>
                  <span className="mt-4 inline-flex items-center gap-2 font-display text-base font-semibold uppercase tracking-wide text-accent">
                    Learn more
                    <ArrowRight
                      className="h-4 w-4 transition-transform duration-200 group-hover:translate-x-1"
                      aria-hidden="true"
                    />
                  </span>
                </div>
              </Link>
            </li>
            {rest.map((service, index) => (
              <li
                key={service.slug}
                // Last tile spans two columns so the 7 services fill the grid exactly.
                className={cn(index === rest.length - 1 && "lg:col-span-2")}
              >
                <Link
                  href={`/services/${service.slug}`}
                  className={cn(
                    "group flex h-full flex-col justify-between gap-8 bg-paper p-7",
                    "transition-colors hover:bg-paper-2",
                  )}
                >
                  <Icon name={service.icon} className="h-8 w-8 text-accent-deep" />
                  <div>
                    <span className="heading-display block text-2xl text-ink">
                      {service.name}
                    </span>
                    <p className="mt-2 leading-relaxed text-muted">{service.summary}</p>
                    <span className="mt-4 inline-flex items-center gap-2 font-display text-base font-semibold uppercase tracking-wide text-accent-deep">
                      Learn more
                      <ArrowRight
                        className="h-4 w-4 transition-transform duration-200 group-hover:translate-x-1"
                        aria-hidden="true"
                      />
                    </span>
                  </div>
                </Link>
              </li>
            ))}
          </ul>
        </Reveal>
      </div>
    </section>
  );
}
