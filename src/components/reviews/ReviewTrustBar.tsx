import { MapPin, MessageSquare, ShieldCheck, Layers } from "lucide-react";
import {
  hasVerifiedReviewMetrics,
  googleReviews,
  trustSignals,
} from "@/data/reviews";
import { Reveal } from "@/components/ui/Reveal";
import { cn } from "@/lib/utils";

const trustIcons = [MapPin, MessageSquare, ShieldCheck, Layers] as const;

interface ReviewTrustBarProps {
  className?: string;
  /** Use the ink (dark) treatment for placement above dark sections. */
  variant?: "paper" | "ink";
}

/**
 * Restrained trust bar: verified Google metrics when available, otherwise
 * only safely stated operational promises (no invented ratings or counts).
 */
export function ReviewTrustBar({ className, variant = "paper" }: ReviewTrustBarProps) {
  const dark = variant === "ink";
  const showMetrics = hasVerifiedReviewMetrics();

  return (
    <section
      className={cn(
        "border-y",
        dark ? "border-line-dark bg-ink-2 text-paper" : "border-line bg-paper-2 text-ink",
        className,
      )}
      aria-label="Why customers trust HisWay"
    >
      <div className="container-site py-8 lg:py-10">
        <Reveal>
          <div className="flex flex-col gap-6 lg:flex-row lg:items-center lg:justify-between lg:gap-10">
            {showMetrics ? (
              <div className="shrink-0">
                <p className="font-mono text-[10px] tracking-[0.22em] text-muted uppercase">
                  Google reviews
                </p>
                <p className="mt-1 font-display text-3xl font-bold uppercase tracking-wide">
                  <span className="text-accent">{googleReviews.exactGoogleRating}</span>
                  <span className={cn("mx-2 text-lg font-semibold", dark ? "text-muted-dark" : "text-muted")}>
                    /
                  </span>
                  <span className="text-2xl">5</span>
                </p>
                <p className={cn("mt-1 text-sm", dark ? "text-muted-dark" : "text-muted")}>
                  {googleReviews.exactGoogleReviewCount} verified Google reviews
                </p>
              </div>
            ) : (
              <div className="shrink-0 max-w-xs">
                <p className="font-mono text-[10px] tracking-[0.22em] text-muted uppercase">
                  Local production partner
                </p>
                <p className="mt-1 font-display text-2xl font-semibold uppercase tracking-wide sm:text-3xl">
                  Built for businesses that need it done right
                </p>
              </div>
            )}

            <ul className="grid flex-1 gap-4 sm:grid-cols-2 lg:grid-cols-4 lg:gap-6">
              {trustSignals.map((signal, index) => {
                const Icon = trustIcons[index];
                return (
                  <li key={signal.label} className="flex items-start gap-3">
                    <Icon
                      className={cn(
                        "mt-0.5 h-4 w-4 shrink-0",
                        dark ? "text-accent" : "text-accent-deep",
                      )}
                      aria-hidden="true"
                    />
                    <div>
                      <p className="font-display text-sm font-semibold uppercase tracking-wide">
                        {signal.label}
                      </p>
                      <p className={cn("mt-0.5 text-sm leading-snug", dark ? "text-muted-dark" : "text-muted")}>
                        {signal.description}
                      </p>
                    </div>
                  </li>
                );
              })}
            </ul>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
