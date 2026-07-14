import type { GoogleReview } from "@/data/reviews";
import { reviewCategoryLabels } from "@/data/reviews";
import { cn } from "@/lib/utils";
import { ReviewStars } from "@/components/reviews/ReviewStars";

type ReviewCardVariant = "featured" | "compact" | "detailed";

interface ReviewCardProps {
  review: GoogleReview;
  variant?: ReviewCardVariant;
  showTags?: boolean;
  preferShortText?: boolean;
}

function getDisplayText(review: GoogleReview, preferShortText: boolean): string {
  if (preferShortText && review.shortDisplayText) {
    return review.shortDisplayText;
  }

  return review.reviewText;
}

function renderReviewBody(review: GoogleReview, text: string) {
  if (review.displayStyle === "summary") {
    return <p>{text}</p>;
  }

  return <p>&ldquo;{text}&rdquo;</p>;
}

export function ReviewCard({
  review,
  variant = "featured",
  showTags = false,
  preferShortText = false,
}: ReviewCardProps) {
  const text = getDisplayText(review, preferShortText);

  return (
    <article
      className={cn(
        "flex h-full flex-col border border-line bg-paper",
        variant === "featured" && "p-6 sm:p-7",
        variant === "compact" && "p-5 sm:p-6",
        variant === "detailed" && "p-6 sm:p-7 lg:p-8",
      )}
    >
      <div className="flex items-start justify-between gap-4">
        <ReviewStars
          rating={review.starRating}
          className={variant === "compact" ? "gap-0.5" : "gap-1"}
          starClassName={variant === "compact" ? "h-3.5 w-3.5" : "h-4 w-4"}
        />
        <span className="font-mono text-[10px] tracking-[0.18em] text-muted uppercase">
          {review.sourceLabel}
        </span>
      </div>

      <div
        className={cn(
          "mt-4 flex-1 leading-relaxed text-ink",
          variant === "featured" && "text-base sm:text-lg",
          variant === "compact" && "text-[15px]",
          variant === "detailed" && "text-base sm:text-lg",
        )}
      >
        {renderReviewBody(review, text)}
      </div>

      {showTags && review.reviewCategories.length > 0 && (
        <ul className="mt-5 flex flex-wrap gap-2">
          {review.reviewCategories.slice(0, 2).map((category) => (
            <li
              key={`${review.id}-${category}`}
              className="border border-line bg-paper-2 px-2.5 py-1 font-mono text-[10px] tracking-[0.16em] text-muted uppercase"
            >
              {reviewCategoryLabels[category]}
            </li>
          ))}
        </ul>
      )}

      <footer className="mt-6 border-t border-line pt-4">
        <p className="font-display text-sm font-semibold uppercase tracking-wide text-ink sm:text-base">
          {review.reviewerName}
        </p>
        {review.relativeReviewDate && (
          <p className="mt-1 font-mono text-[10px] tracking-[0.18em] text-muted uppercase">
            {review.relativeReviewDate}
          </p>
        )}
      </footer>
    </article>
  );
}
