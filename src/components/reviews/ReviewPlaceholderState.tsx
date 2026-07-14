import { cn } from "@/lib/utils";
import { Reveal } from "@/components/ui/Reveal";

interface ReviewPlaceholderStateProps {
  className?: string;
  compact?: boolean;
  message?: string;
}

/**
 * Polished empty state used whenever verified Google review data is not yet
 * available. Keeps the layout intentional without fabricating stars or quotes.
 */
export function ReviewPlaceholderState({
  className,
  compact = false,
  message = "Verified Google feedback will be inserted here before launch, once HisWay confirms the exact reviews and rating for public use.",
}: ReviewPlaceholderStateProps) {
  return (
    <Reveal>
      <div
        className={cn(
          "border border-line bg-paper",
          compact ? "px-5 py-6 sm:px-6" : "px-6 py-10 sm:px-10 sm:py-12",
          className,
        )}
      >
        <div className={cn("flex flex-col gap-4", !compact && "lg:flex-row lg:items-center lg:justify-between lg:gap-10")}>
          <div className="max-w-2xl">
            <p className="font-mono text-[10px] tracking-[0.22em] text-muted uppercase">
              Google reviews
            </p>
            <p
              className={cn(
                "mt-2 font-display font-semibold uppercase tracking-wide text-ink",
                compact ? "text-xl" : "text-2xl sm:text-3xl",
              )}
            >
              Real customer feedback, ready for verified data
            </p>
            <p className={cn("mt-3 leading-relaxed text-muted", compact ? "text-sm" : "text-base")}>
              {message}
            </p>
          </div>
          <div
            className={cn(
              "shrink-0 border border-dashed border-line bg-paper-2",
              compact ? "px-4 py-3" : "px-5 py-4",
            )}
          >
            <p className="font-mono text-[10px] tracking-[0.18em] text-muted uppercase">
              Concept state
            </p>
            <p className="mt-1 font-display text-sm font-semibold uppercase tracking-wide text-ink">
              Rating &amp; quotes pending verification
            </p>
          </div>
        </div>
      </div>
    </Reveal>
  );
}
