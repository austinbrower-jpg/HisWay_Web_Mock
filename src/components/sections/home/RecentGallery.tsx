import Image from "next/image";
import { ExternalLink } from "lucide-react";
import { company } from "@/data/company";
import { cn } from "@/lib/utils";
import { Reveal } from "@/components/ui/Reveal";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { conceptGalleryTiles } from "@/data/concept-media";

export function RecentGallery() {
  return (
    <section className="border-t border-line bg-paper py-20 lg:py-24">
      <div className="container-site flex flex-wrap items-end justify-between gap-6">
        <Reveal>
          <SectionHeading
            title="Around the shop"
            lead="Fresh installs, presses running, and orders heading out the door."
          />
        </Reveal>
        <Reveal delay={0.08}>
          <a
            href={company.instagram}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 font-display text-base font-semibold uppercase tracking-wide text-accent-deep transition-colors hover:text-ink"
          >
            Follow {company.instagramHandle}
            <ExternalLink className="h-4 w-4" aria-hidden="true" />
            <span className="sr-only">(opens in a new tab)</span>
          </a>
        </Reveal>
      </div>

      <Reveal className="mt-10" delay={0.12}>
        <div
          className="overflow-x-auto pb-4 [scrollbar-width:thin]"
          tabIndex={0}
          role="region"
          aria-label="Recent work photos, scrollable"
        >
          <ul className="container-site flex w-max gap-3">
            {conceptGalleryTiles.map((tile) => (
              <li
                key={tile.src}
                className="relative aspect-square w-52 shrink-0 overflow-hidden bg-paper-2 sm:w-60"
              >
                <Image
                  src={tile.src}
                  alt={tile.alt}
                  fill
                  sizes="240px"
                  unoptimized={tile.src.endsWith(".svg")}
                  className={cn("object-cover", tile.imageClassName)}
                />
              </li>
            ))}
          </ul>
        </div>
      </Reveal>
    </section>
  );
}
