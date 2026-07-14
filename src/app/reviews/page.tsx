import type { Metadata } from "next";
import { QuoteCta } from "@/components/sections/QuoteCta";
import { Reveal } from "@/components/ui/Reveal";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { ButtonLink } from "@/components/ui/Button";
import { ReviewCard } from "@/components/reviews/ReviewCard";
import { ReviewStars } from "@/components/reviews/ReviewStars";
import { FeaturedReviews } from "@/components/reviews/FeaturedReviews";
import { company } from "@/data/company";
import {
  getReviewsByIds,
  googleReviews,
  reviewCollections,
  reviewCategoryLabels,
} from "@/data/reviews";

export const metadata: Metadata = {
  title: "Reviews",
  description:
    "Selected Google reviews for HisWay Press or Print, covering shirts, embroidery, stickers, banners, signs, and day-to-day customer service.",
};

export default function ReviewsPage() {
  return (
    <>
      <section className="bg-paper py-16 lg:py-20">
        <div className="container-site grid gap-8 lg:grid-cols-[minmax(0,1fr)_360px] lg:items-end">
          <Reveal>
            <p className="font-mono text-[10px] tracking-[0.22em] text-muted uppercase">
              Google review summary
            </p>
            <h1 className="mt-3 heading-display text-5xl text-ink sm:text-6xl">
              Feedback that reinforces the same story.
            </h1>
            <p className="mt-6 max-w-2xl text-lg leading-relaxed text-muted">
              These reviews were supplied for the private HisWay concept preview and show how customers describe the shop&apos;s communication, quality, patience, and turnaround across apparel, signs, banners, stickers, and related print work.
            </p>
            <div className="mt-8 flex flex-wrap gap-4">
              <ButtonLink href="/quote" variant="primary">
                Request a Quote
              </ButtonLink>
              <ButtonLink href="/contact" variant="outline-dark">
                Contact HisWay
              </ButtonLink>
            </div>
          </Reveal>

          <Reveal delay={0.08}>
            <aside className="border-t-4 border-accent bg-ink p-6 text-paper sm:p-7">
              <p className="font-mono text-[10px] tracking-[0.22em] text-muted-dark uppercase">
                Verified business details
              </p>
              <ReviewStars rating={5} className="mt-4" />
              <p className="mt-4 font-display text-4xl font-semibold uppercase tracking-wide">
                {googleReviews.exactGoogleRating.toFixed(1)}
              </p>
              <p className="mt-1 text-lg text-paper-2">
                from {googleReviews.exactGoogleReviewCount} Google reviews
              </p>
              <dl className="mt-6 space-y-4 border-t border-line-dark pt-5">
                <div>
                  <dt className="font-mono text-[10px] tracking-[0.18em] text-muted-dark uppercase">
                    Business
                  </dt>
                  <dd className="mt-1 text-base text-paper">{company.name}</dd>
                </div>
                {company.address && (
                  <div>
                    <dt className="font-mono text-[10px] tracking-[0.18em] text-muted-dark uppercase">
                      Address
                    </dt>
                    <dd className="mt-1 text-base text-paper">{company.address}</dd>
                  </div>
                )}
                <div>
                  <dt className="font-mono text-[10px] tracking-[0.18em] text-muted-dark uppercase">
                    Attribution
                  </dt>
                  <dd className="mt-1 text-sm leading-relaxed text-paper-2">
                    All cards below are labeled as Google reviews. No customer review photos are used in this concept.
                  </dd>
                </div>
              </dl>
            </aside>
          </Reveal>
        </div>
      </section>

      <FeaturedReviews
        className="border-y border-line bg-paper-2"
        heading="Featured customer voices"
        lead="A quick cross-section of apparel, hats, repeat business, and overall professionalism."
        limit={6}
      />

      <section className="bg-paper py-14 lg:py-16">
        <div className="container-site">
          <Reveal>
            <div className="max-w-3xl">
              <p className="font-mono text-[10px] tracking-[0.22em] text-muted uppercase">
                How the collection is organized
              </p>
              <p className="mt-3 text-base leading-relaxed text-muted">
                Reviews are grouped where the wording clearly supports it. Some homepage and service-page placements use shortened excerpts for layout, and those excerpts keep visible ellipses where text was trimmed.
              </p>
            </div>
          </Reveal>
          <ul className="mt-6 flex flex-wrap gap-2.5">
            {Object.values(reviewCategoryLabels).map((label) => (
              <li
                key={label}
                className="border border-line bg-paper-2 px-3 py-1.5 font-mono text-[10px] tracking-[0.16em] text-muted uppercase"
              >
                {label}
              </li>
            ))}
          </ul>
        </div>
      </section>

      {reviewCollections.map((collection, index) => {
        const reviews = getReviewsByIds(collection.reviewIds);

        return (
          <section
            key={collection.id}
            className={index % 2 === 0 ? "bg-paper py-16 lg:py-20" : "bg-paper-2 py-16 lg:py-20"}
          >
            <div className="container-site">
              <Reveal>
                <SectionHeading title={collection.title} lead={collection.lead} />
              </Reveal>
              <ul className="mt-8 grid gap-6 md:grid-cols-2 xl:grid-cols-3">
                {reviews.map((review, reviewIndex) => (
                  <li key={review.id}>
                    <Reveal delay={reviewIndex * 0.06} className="h-full">
                      <ReviewCard review={review} variant="detailed" showTags />
                    </Reveal>
                  </li>
                ))}
              </ul>
            </div>
          </section>
        );
      })}

      <QuoteCta
        heading="Ready to see what the process feels like for your project?"
        body="Tell HisWay what you need and use the reviews above as context for the kind of communication and follow-through customers keep talking about."
      />
    </>
  );
}
