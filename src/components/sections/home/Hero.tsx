import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { ButtonLink } from "@/components/ui/Button";
import { PhotoFrame } from "@/components/ui/PhotoFrame";
import { Reveal } from "@/components/ui/Reveal";

export function Hero() {
  return (
    <section className="bg-ink text-paper">
      <div className="container-site grid items-center gap-10 py-14 lg:grid-cols-12 lg:gap-14 lg:py-20">
        <Reveal className="lg:col-span-7">
          <h1 className="heading-display text-5xl sm:text-6xl lg:text-7xl">
            Custom signs, apparel, and promotional products that get your business{" "}
            <span className="text-accent">seen.</span>
          </h1>
          <p className="mt-6 max-w-xl text-lg leading-relaxed text-muted-dark">
            From storefront signage and vehicle graphics to branded apparel and promo
            products, HisWay takes your project from concept through completion.
          </p>
          <div className="mt-8 flex flex-col sm:flex-row items-center sm:items-stretch gap-4">
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

        <Reveal className="lg:col-span-5 relative" delay={0.12}>
          <div className="absolute -inset-4 md:-inset-6 bg-ink-2 -z-10" aria-hidden="true" />
          <PhotoFrame
            src="/images/placeholders/press-floor.svg"
            alt="Placeholder for a photo of the HisWay production floor"
            aspect="aspect-[4/3] lg:aspect-[4/5]"
            sizes="(min-width: 1024px) 40vw, 100vw"
            priority
            marks
          />
          <div className="absolute -bottom-6 -right-2 md:-right-6 bg-accent text-ink px-6 py-4 border-4 border-ink shadow-lg">
             <p className="font-display font-bold uppercase tracking-wider text-sm md:text-base">Est. 2018</p>
             <p className="font-sans font-medium text-xs mt-0.5">San Antonio, TX</p>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
