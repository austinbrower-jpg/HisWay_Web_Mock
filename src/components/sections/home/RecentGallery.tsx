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

      {/* Four approved photos sit in a full-width grid rather than a scroller:
          with the placeholder tiles gone there is nothing left to scroll to. */}
      <Reveal className="mt-10" delay={0.12}>
        <ul className="container-site grid grid-cols-2 gap-3 lg:grid-cols-4">
          {conceptGalleryTiles.map((tile) => (
            <li key={tile.mediaId} className="relative aspect-square overflow-hidden bg-paper-2">
              <Image
                src={tile.src}
                alt={tile.alt}
                fill
                sizes="(min-width: 1024px) 25vw, 50vw"
                className={cn("object-cover", tile.imageClassName)}
              />
            </li>
          ))}
        </ul>
      </Reveal>
    </section>
  );
}
