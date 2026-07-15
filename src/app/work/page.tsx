import type { Metadata } from "next";
import Image from "next/image";
import { conceptWorkCards } from "@/data/concept-media";
import { cn } from "@/lib/utils";
import { PageHeader } from "@/components/ui/PageHeader";
import { Reveal } from "@/components/ui/Reveal";
import { QuoteCta } from "@/components/sections/QuoteCta";

export const metadata: Metadata = {
  title: "Selected Work & Process",
  description:
    "Screen printing, apparel production, and embroidery produced in-house at HisWay Press or Print in San Antonio.",
};

/**
 * Capability-led work page.
 *
 * No customer-work photography is approved for use, so this page shows
 * approved in-house process photography under honest capability labels rather
 * than invented customer case studies. Cards do not link out because there is
 * no per-project detail to support. Restore a project grid and the
 * /work/[slug] detail route once real work is photographed and carries
 * documented customer permission.
 */
export default function WorkPage() {
  return (
    <>
      <PageHeader
        title="Selected Work & Process"
        lead="Screen printing, apparel production, and embroidery — produced in-house in San Antonio."
      />

      <section className="bg-paper py-12 lg:py-20">
        <div className="container-site">
          <ul className="grid grid-cols-2 gap-x-6 gap-y-10 lg:grid-cols-4 lg:gap-x-8">
            {conceptWorkCards.map((card, index) => (
              <li key={card.mediaId}>
                <Reveal delay={Math.min(index * 0.07, 0.2)}>
                  <div className="relative aspect-square overflow-hidden bg-paper-2">
                    <Image
                      src={card.src}
                      alt={card.alt}
                      fill
                      sizes="(min-width: 1024px) 25vw, 50vw"
                      className={cn("object-cover", card.imageClassName)}
                    />
                  </div>
                  <h2 className="heading-display mt-4 text-xl text-ink sm:text-2xl">
                    {card.label}
                  </h2>
                  <p className="mt-2 leading-relaxed text-muted">{card.description}</p>
                </Reveal>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <QuoteCta heading="Ready to start your project?" />
    </>
  );
}
