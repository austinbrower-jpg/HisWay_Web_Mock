import { Reveal } from "@/components/ui/Reveal";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { ButtonLink } from "@/components/ui/Button";
import {
  getFeaturedReviews,
  getVerifiedReviews,
  hasVerifiedReviewMetrics,
  googleReviews,
} from "@/data/reviews";
import { ReviewCard } from "@/components/reviews/ReviewCard";
import { ReviewStars } from "@/components/reviews/ReviewStars";
import { cn } from "@/lib/utils";

interface FeaturedReviewsProps {
  className?: string;
  heading?: string;
  lead?: string;
  limit?: number;
  ctaHref?: string;
  ctaLabel?: string;
}

export function FeaturedReviews({
  className,
  heading = "What customers say most often",
  lead = "Customer feedback pointing to the same themes again and again: patience, quality, communication, and reliable turnaround.",
  limit = 4,
  ctaHref,
  ctaLabel = "Read more reviews",
}: FeaturedReviewsProps) {
  const featured = getFeaturedReviews().slice(0, limit);
  const fallback = getVerifiedReviews().slice(0, limit);
  const reviews = featured.length > 0 ? featured : fallback;

  return (
    <section className={cn("bg-paper py-16 lg:py-20", className)}>
      <div className="container-site">
        <Reveal>
          <div className="grid gap-6 lg:grid-cols-[minmax(0,1fr)_320px] lg:items-end">
            <SectionHeading title={heading} lead={lead} />
            {hasVerifiedReviewMetrics() && (
              <div className="border border-line bg-paper-2 p-5 sm:p-6">
                <p className="font-mono text-[10px] tracking-[0.22em] text-muted uppercase">
                  Google reviews
                </p>
                <ReviewStars rating={5} className="mt-3" />
                <p className="mt-3 font-display text-3xl font-semibold uppercase tracking-wide text-ink">
                  {googleReviews.exactGoogleRating.toFixed(1)} from {googleReviews.exactGoogleReviewCount} Google reviews
                </p>
                <p className="mt-2 text-sm leading-relaxed text-muted">
                  Verified review copy supplied for this concept preview. No customer review photos are shown.
                </p>
              </div>
            )}
          </div>
        </Reveal>

        <ul className="mt-10 grid gap-6 md:grid-cols-2 xl:grid-cols-3">
          {reviews.map((review, index) => (
            <li key={review.id}>
              <Reveal delay={index * 0.08} className="h-full">
                <ReviewCard review={review} preferShortText showTags variant="featured" />
              </Reveal>
            </li>
          ))}
        </ul>

        {ctaHref && (
          <Reveal delay={0.12}>
            <div className="mt-10 flex justify-start">
              <ButtonLink href={ctaHref} variant="outline-dark">
                {ctaLabel}
              </ButtonLink>
            </div>
          </Reveal>
        )}
      </div>
    </section>
  );
}
