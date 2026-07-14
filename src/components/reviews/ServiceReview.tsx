import { ReviewPlaceholderState } from "@/components/reviews/ReviewPlaceholderState";
import { Reveal } from "@/components/ui/Reveal";
import {
  getReviewsForService,
} from "@/data/reviews";
import type { ServiceSlug } from "@/types";
import { cn } from "@/lib/utils";
import { ReviewCard } from "@/components/reviews/ReviewCard";

interface ServiceReviewProps {
  service: ServiceSlug;
  className?: string;
  /** When true, hide the block entirely if no verified service reviews exist. */
  hideWhenEmpty?: boolean;
}
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
            Reviews tied to this kind of work
          </h2>
          <p className="mt-3 max-w-2xl text-base leading-relaxed text-muted">
            A few Google reviews that directly mention this service or the kind of outcome people were hiring HisWay for.
          </p>
        </Reveal>

        {reviews.length > 0 ? (
          <ul className="mt-8 grid gap-5 md:grid-cols-2">
            {reviews.map((review, index) => (
              <li key={review.id}>
                <Reveal delay={index * 0.08}>
                  <ReviewCard review={review} variant="compact" preferShortText />
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
