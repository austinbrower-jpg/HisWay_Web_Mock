import { ReviewPlaceholderState } from "@/components/reviews/ReviewPlaceholderState";
import { Reveal } from "@/components/ui/Reveal";
import {
  getReviewsForService,
  type GoogleReview,
} from "@/data/reviews";
import type { ServiceSlug } from "@/types";
import { cn } from "@/lib/utils";

interface ServiceReviewProps {
  service: ServiceSlug;
  className?: string;
  /** When true, hide the block entirely if no verified service reviews exist. */
  hideWhenEmpty?: boolean;
}

function CompactReview({ review }: { review: GoogleReview }) {
  return (
    <article className="border border-line bg-paper p-5 sm:p-6">
      <div className="flex gap-0.5" aria-label={`${review.starRating} out of 5 stars`}>
        {Array.from({ length: 5 }, (_, i) => (
          <span
            key={i}
            className={cn(
              "font-display text-base leading-none",
              i < review.starRating ? "text-accent" : "text-line",
            )}
            aria-hidden="true"
          >
            ★
          </span>
        ))}
      </div>
      <blockquote className="mt-3 text-[15px] leading-relaxed text-ink">
        “{review.reviewText}”
      </blockquote>
      <p className="mt-4 font-display text-sm font-semibold uppercase tracking-wide text-ink">
        {review.reviewerName}
      </p>
      <p className="mt-0.5 font-mono text-[10px] tracking-wide text-muted uppercase">
        Google review
      </p>
    </article>
  );
}

/**
 * Service-scoped review placement. Matches verified reviews to a service slug
 * once real Google feedback is entered in `src/data/reviews.ts`.
 */
export function ServiceReview({
  service,
  className,
  hideWhenEmpty = false,
}: ServiceReviewProps) {
  const reviews = getReviewsForService(service).slice(0, 2);

  if (reviews.length === 0 && hideWhenEmpty) {
    return null;
  }

  return (
    <section className={cn("border-t border-line bg-paper-2 py-14 lg:py-16", className)}>
      <div className="container-site">
        <Reveal>
          <p className="font-mono text-[10px] tracking-[0.22em] text-muted uppercase">
            Customer feedback
          </p>
          <h2 className="mt-2 heading-display text-3xl text-ink sm:text-4xl">
            Related Google reviews
          </h2>
        </Reveal>

        {reviews.length > 0 ? (
          <ul className="mt-8 grid gap-5 md:grid-cols-2">
            {reviews.map((review, index) => (
              <li key={review.id}>
                <Reveal delay={index * 0.08}>
                  <CompactReview review={review} />
                </Reveal>
              </li>
            ))}
          </ul>
        ) : (
          <div className="mt-8">
            <ReviewPlaceholderState
              compact
              message="Verified Google reviews for this service will appear here once HisWay confirms which feedback can be shown publicly."
            />
          </div>
        )}
      </div>
    </section>
  );
}
