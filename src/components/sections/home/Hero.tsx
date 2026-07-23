import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { ButtonLink } from "@/components/ui/Button";
import { PhotoFrame } from "@/components/ui/PhotoFrame";
import { Reveal } from "@/components/ui/Reveal";
import { conceptHomepageHero } from "@/data/concept-media";

export function Hero() {
  return (
    <section className="overflow-x-clip bg-ink text-paper">
      <div className="container-site grid items-center gap-8 py-14 pb-20 sm:gap-10 lg:grid-cols-12 lg:gap-14 lg:py-20 lg:pb-24">
        {/*
         * `contents` on mobile dissolves this wrapper so the copy and the CTAs
         * become sibling grid items either side of the photo, letting the photo
         * sit between them without a second <img>. At lg it becomes a real
         * block-level grid item again, restoring the original two-column hero
         * (order-* is inert under block layout, so desktop order is unchanged).
         */}
        <div className="contents lg:col-span-7 lg:block">
          <Reveal className="order-1">
            <h1 className="heading-display text-[2rem] sm:text-6xl lg:text-7xl">
              Custom signs, apparel, and promotional products that get your business{" "}
              <span className="hw-hero-accent-ignite text-accent">seen.</span>
            </h1>
            <p className="mt-5 max-w-xl text-base leading-relaxed text-muted-dark sm:mt-6 sm:text-lg">
              From storefront signage and vehicle graphics to branded apparel and promo
              products, HisWay takes your project from concept through completion.
            </p>
          </Reveal>

          <Reveal className="order-3 lg:mt-8">
            <div className="flex flex-col items-stretch gap-4 sm:flex-row sm:items-center">
              <ButtonLink href="/quote" variant="primary" className="w-full sm:w-auto">
                Request a Quote
              </ButtonLink>
              <ButtonLink href="/work" variant="outline" className="w-full sm:w-auto">
                View Our Work
              </ButtonLink>
            </div>
            <div className="mt-6">
              <Link
                href="/promotional-products"
                className="group inline-flex items-center gap-2 font-display text-base font-semibold uppercase tracking-wide text-paper/80 transition-colors hover:text-accent"
              >
                Browse Promotional Products
                <ArrowRight
                  className="h-4 w-4 transition-transform duration-200 group-hover:translate-x-1"
                  aria-hidden="true"
                />
              </Link>
            </div>
          </Reveal>
        </div>

        <Reveal className="relative order-2 lg:col-span-5" delay={0.12}>
          <div className="absolute -inset-3 -z-10 bg-ink-2 sm:-inset-4 md:-inset-6" aria-hidden="true" />
          <PhotoFrame
            src={conceptHomepageHero.src}
            alt={conceptHomepageHero.alt}
            aspect="aspect-[4/3] lg:aspect-[4/5]"
            sizes="(min-width: 1024px) 40vw, 100vw"
            preload
            loading="eager"
            marks
            imageClassName={conceptHomepageHero.imageClassName}
          />
          <div
            aria-hidden="true"
            className="hw-hero-photo-ignite pointer-events-none absolute inset-0 opacity-0 mix-blend-screen"
            style={{
              background:
                "radial-gradient(120% 80% at 56% 40%, rgba(255,196,120,.55) 0%, rgba(224,89,16,.28) 38%, rgba(224,89,16,0) 70%)",
            }}
          />
          <div className="absolute -bottom-6 right-0 border-4 border-ink bg-accent px-5 py-3 text-ink shadow-lg sm:px-6 sm:py-4 md:-right-4 lg:-right-6">
            <p className="font-display text-sm font-bold uppercase tracking-wider md:text-base">
              San Antonio Made
            </p>
            <p className="mt-0.5 font-sans text-xs font-medium">Built Hands-On</p>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
