import { ButtonLink } from "@/components/ui/Button";
import { PhotoFrame } from "@/components/ui/PhotoFrame";
import { Reveal } from "@/components/ui/Reveal";

export function AboutPreview() {
  return (
    <section className="bg-paper-2 py-20 lg:py-24">
      <div className="container-site grid items-center gap-10 lg:grid-cols-12 lg:gap-14">
        <Reveal className="lg:col-span-5">
          <PhotoFrame
            src="/images/placeholders/workshop.svg"
            alt="Placeholder for a photo inside the HisWay workshop"
            aspect="aspect-[4/3]"
            sizes="(min-width: 1024px) 40vw, 100vw"
            marks
          />
        </Reveal>

        <Reveal className="lg:col-span-7" delay={0.1}>
          <h2 className="heading-display text-4xl text-ink sm:text-5xl">
            Learned on the shop floor, built for the long haul
          </h2>
          <p className="mt-5 max-w-xl text-lg leading-relaxed text-muted">
            HisWay&apos;s owner came into this trade as a driver in 2018 and learned the
            sign business hands-on, one deadline at a time. The shop has since grown
            from signs into printing, apparel, promotional products, and content.
          </p>
          <p className="mt-4 max-w-xl text-lg leading-relaxed text-muted">
            The goal has never changed: one place for your whole brand, with personal
            service and clear communication.
          </p>
          <ButtonLink href="/about" variant="outline-dark" className="mt-8">
            Read Our Story
          </ButtonLink>
        </Reveal>
      </div>
    </section>
  );
}
