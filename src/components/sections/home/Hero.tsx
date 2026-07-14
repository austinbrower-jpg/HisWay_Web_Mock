import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { ButtonLink } from "@/components/ui/Button";
import { PhotoFrame } from "@/components/ui/PhotoFrame";
import { Reveal } from "@/components/ui/Reveal";
import { conceptHomepageHero } from "@/data/concept-media";

export function Hero() {
  return (
    <section className="overflow-x-clip bg-ink text-paper">
      <div className="container-site grid items-center gap-10 py-14 pb-20 lg:grid-cols-12 lg:gap-14 lg:py-20 lg:pb-24">
        <Reveal className="lg:col-span-7">
          <h1 className="heading-display text-5xl sm:text-6xl lg:text-7xl">
            Custom signs, apparel, and promotional products that get your business{" "}
            <span className="text-accent">seen.</span>
          </h1>
          <p className="mt-6 max-w-xl text-lg leading-relaxed text-muted-dark">
            From storefront signage and vehicle graphics to branded apparel and promo
            products, HisWay takes your project from concept through completion.
          </p>
          <div className="mt-8 flex flex-col items-stretch gap-4 sm:flex-row sm:items-center">
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

        <Reveal className="relative lg:col-span-5" delay={0.12}>
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
