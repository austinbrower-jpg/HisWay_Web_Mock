import type { Metadata } from "next";
import { PhotoFrame } from "@/components/ui/PhotoFrame";
import { Reveal } from "@/components/ui/Reveal";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { QuoteCta } from "@/components/sections/QuoteCta";
import { FeaturedReviews } from "@/components/reviews/FeaturedReviews";
import { ReviewTrustBar } from "@/components/reviews/ReviewTrustBar";
import { conceptAboutWorkshop } from "@/data/concept-media";

export const metadata: Metadata = {
  title: "About",
  description:
    "The story of HisWay Press or Print: a trade learned hands-on in San Antonio, grown from signs into printing, apparel, promotional products, and content.",
};

export default function AboutPage() {
  return (
    <>
      <section className="bg-ink text-paper">
        <div className="container-site grid gap-12 py-16 lg:grid-cols-12 lg:gap-14 lg:py-24 items-center">
          <Reveal className="lg:col-span-6">
            <h1 className="heading-display text-5xl sm:text-6xl lg:text-7xl">
              Built <span className="text-accent">hands-on</span>.
            </h1>
            <p className="mt-6 max-w-xl text-lg lg:text-xl leading-relaxed text-paper-2">
              We started in the sign shop. Today, we&apos;re a one-stop creative production partner. This is how we got here.
            </p>
          </Reveal>
          <Reveal className="lg:col-span-6" delay={0.12}>
            <PhotoFrame
              src={conceptAboutWorkshop.src}
              alt={conceptAboutWorkshop.alt}
              aspect="aspect-[4/3]"
              marks
              imageClassName={conceptAboutWorkshop.imageClassName}
            />
          </Reveal>
        </div>
      </section>

      <ReviewTrustBar />

      <section className="bg-paper py-16 lg:py-24">
        <div className="container-site">
          <div className="grid gap-12 lg:grid-cols-12">
            <Reveal className="lg:col-span-5">
              <h2 className="heading-display text-4xl text-ink">The beginning</h2>
            </Reveal>
            <Reveal className="lg:col-span-7" delay={0.1}>
              <div className="prose prose-lg text-muted">
                <p>
                  Our founder began as a driver. Not long after, an opportunity opened to manage a local sign shop. It wasn&apos;t an easy transition—it required long nights, tight deadlines, and learning the trade entirely hands-on.
                </p>
                <p>
                  Every mistake was a lesson, and every successful project built confidence. Family support played a crucial role during this early period of intense growth, providing the foundation needed to turn a job into a lifelong craft.
                </p>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      <section className="border-y border-line bg-paper-2 py-16 lg:py-24">
        <div className="container-site">
          <Reveal>
            <SectionHeading title="Growing the shop" lead="We mastered signs first, but our clients needed more." />
          </Reveal>
          <div className="mt-12 grid gap-8 md:grid-cols-3">
            <Reveal delay={0.1}>
              <h3 className="font-display text-2xl font-semibold uppercase text-ink">Mastering signs</h3>
              <p className="mt-3 text-muted">From storefronts to vehicle graphics, we learned what materials last, how to install properly, and how to design for visibility.</p>
            </Reveal>
            <Reveal delay={0.2}>
              <h3 className="font-display text-2xl font-semibold uppercase text-ink">Expanding services</h3>
              <p className="mt-3 text-muted">As clients asked for more, we added screen printing, embroidery, and promotional products to our capabilities.</p>
            </Reveal>
            <Reveal delay={0.3}>
              <h3 className="font-display text-2xl font-semibold uppercase text-ink">A single partner</h3>
              <p className="mt-3 text-muted">Today, we handle graphic design, content, and full production. Our goal is to be the only call our clients need to make.</p>
            </Reveal>
          </div>
        </div>
      </section>

      <section className="bg-paper py-16 lg:py-24">
        <div className="container-site">
          <div className="grid gap-12 lg:grid-cols-12 items-center">
            <Reveal className="lg:col-span-6 order-2 lg:order-1">
              <PhotoFrame
                src="/images/team/team-photo.svg"
                alt="Placeholder for team photo"
                aspect="aspect-square"
              />
            </Reveal>
            <Reveal className="lg:col-span-6 order-1 lg:order-2" delay={0.1}>
              <h2 className="heading-display text-4xl text-ink">Our Values</h2>
              <ul className="mt-8 space-y-6">
                <li>
                  <h3 className="font-display text-xl font-semibold uppercase text-ink">Personal Service</h3>
                  <p className="mt-2 text-muted">We don&apos;t hide behind portals. We communicate clearly, pick up the phone, and ensure you know where your project stands.</p>
                </li>
                <li>
                  <h3 className="font-display text-xl font-semibold uppercase text-ink">Hands-on Quality</h3>
                  <p className="mt-2 text-muted">Because we learned the trade by doing it, we know what quality looks like at every step of the process.</p>
                </li>
                <li>
                  <h3 className="font-display text-xl font-semibold uppercase text-ink">One-stop reliability</h3>
                  <p className="mt-2 text-muted">We value your time. We aim to handle your branding comprehensively so you can focus on running your business.</p>
                </li>
              </ul>
            </Reveal>
          </div>
        </div>
      </section>

      <FeaturedReviews
        heading="Trust earned in San Antonio"
        lead="Once verified Google reviews are confirmed, they will appear here alongside the shop story."
      />

      <QuoteCta heading="Ready to start a project?" showReviewRequest />
    </>
  );
}
