import type { Metadata } from "next";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { services } from "@/data/services";
import { PageHeader } from "@/components/ui/PageHeader";
import { Reveal } from "@/components/ui/Reveal";
import { Process } from "@/components/sections/home/Process";
import { QuoteCta } from "@/components/sections/QuoteCta";

export const metadata: Metadata = {
  title: "Services",
  description:
    "Custom signs, screen printing, embroidery, vehicle graphics, banners, promotional products, and graphic design for San Antonio businesses.",
};

export default function ServicesPage() {
  return (
    <>
      <PageHeader
        title="Services"
        lead="Everything your brand needs to be seen, produced by one shop that keeps it all consistent."
      />

      <section className="bg-paper py-14 lg:py-16">
        <div className="container-site">
          <ul>
            {services.map((service, index) => (
              <li key={service.slug} className="border-b border-line first:border-t">
                <Reveal>
                  <Link
                    href={`/services/${service.slug}`}
                    className="group grid gap-x-8 gap-y-3 py-8 transition-colors lg:grid-cols-12 lg:items-center"
                  >
                    <span
                      className="font-mono text-sm text-muted tabular-nums lg:col-span-1"
                      aria-hidden="true"
                    >
                      {String(index + 1).padStart(2, "0")}
                    </span>
                    <span className="lg:col-span-5">
                      <span className="heading-display block text-3xl text-ink transition-colors group-hover:text-accent-deep sm:text-4xl">
                        {service.name}
                      </span>
                    </span>
                    <span className="leading-relaxed text-muted lg:col-span-5">
                      {service.summary}
                    </span>
                    <span className="hidden justify-end lg:col-span-1 lg:flex">
                      <ArrowUpRight
                        className="h-6 w-6 text-muted transition-colors group-hover:text-accent-deep"
                        aria-hidden="true"
                      />
                    </span>
                  </Link>
                </Reveal>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <Process heading="The same process, whatever we're making" />
      <QuoteCta />
    </>
  );
}
