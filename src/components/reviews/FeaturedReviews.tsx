import { ReviewPlaceholderState } from "@/components/reviews/ReviewPlaceholderState";
import { Reveal } from "@/components/ui/Reveal";
import { SectionHeading } from "@/components/ui/SectionHeading";
import {
  getFeaturedReviews,
  getVerifiedReviews,
  hasVerifiedReviewMetrics,
  googleReviews,
  type GoogleReview,
} from "@/data/reviews";
import { cn } from "@/lib/utils";

interface FeaturedReviewsProps {
  className?: string;
  heading?: string;
  lead?: string;
  /** Maximum number of featured reviews to show when verified data exists. */
  limit?: number;
}

function StarRow({ rating }: { rating: number }) {
  return (
    <div className="flex gap-0.5" aria-label={`${rating} out of 5 stars`}>
      {Array.from({ length: 5 }, (_, i) => (
        <span
          key={i}
          className={cn(
            "font-display text-lg leading-none",
            i < rating ? "text-accent" : "text-line",
          )}
          aria-hidden="true"
        >
          ★
        </span>
      ))}
    </div>
  );
}

function ReviewCard({ review }: { review: GoogleReview }) {
  return (
    <article className="flex h-full flex-col border border-line bg-paper p-6 sm:p-7">
      <StarRow rating={review.starRating} />
      <blockquote className="mt-4 flex-1 text-base leading-relaxed text-ink sm:text-lg">
        “{review.reviewText}”
      </blockquote>
      <footer className="mt-6 border-t border-line pt-4">
        <p className="font-display text-base font-semibold uppercase tracking-wide text-ink">
          {review.reviewerName}
        </p>
        <p className="mt-0.5 font-mono text-xs tracking-wide text-muted uppercase">
          Google review
          {review.reviewDate ? ` · ${review.reviewDate}` : ""}
        </p>
      </footer>
    </article>
  );
}

/**
 * Featured Google reviews. Renders a polished placeholder when no verified
 * review data has been supplied yet — never fabricated quotes or stars.
 */
export function FeaturedReviews({
  className,
  heading = "What customers say",
  lead = "Verified Google feedback will appear here once HisWay confirms the exact reviews for public use.",
  limit = 3,
}: FeaturedReviewsProps) {
  const featured = getFeaturedReviews().slice(0, limit);
  const fallback = getVerifiedReviews().slice(0, limit);
  const reviews = featured.length > 0 ? featured : fallback;
  const hasReviews = reviews.length > 0;

  return (
    <section className={cn("bg-paper py-16 lg:py-20", className)}>
      <div className="container-site">
        <Reveal>
          <div className="flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
            <SectionHeading title={heading} lead={hasReviews ? undefined : lead} />
            {hasReviews && hasVerifiedReviewMetrics() && (
              <p className="font-mono text-sm text-muted">
                <span className="font-semibold text-ink">{googleReviews.exactGoogleRating}</span>
                {" / 5 · "}
                {googleReviews.exactGoogleReviewCount} Google reviews
              </p>
            )}
          </div>
        </Reveal>

        {hasReviews ? (
          <ul className="mt-10 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {reviews.map((review, index) => (
              <li key={review.id}>
                <Reveal delay={index * 0.08} className="h-full">
                  <ReviewCard review={review} />
                </Reveal>
              </li>
            ))}
          </ul>
        ) : (
          <div className="mt-10">
            <ReviewPlaceholderState />
          </div>
        )}
      </div>
    </section>
  );
}
