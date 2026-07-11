import { ExternalLink, Star } from "lucide-react";
import { company } from "@/data/company";
import {
  hasGoogleReviewRequestUrl,
  googleReviews,
} from "@/data/reviews";
import { ButtonLink } from "@/components/ui/Button";
import { Reveal } from "@/components/ui/Reveal";
import { cn } from "@/lib/utils";

interface ReviewRequestCtaProps {
  className?: string;
  heading?: string;
  body?: string;
}

/**
 * Encourages completed customers to leave a Google review.
 * Links out only when a verified review-request URL is configured.
 */
export function ReviewRequestCta({
  className,
  heading = "Share how the project went",
  body = "After pickup or installation, a short Google review helps other San Antonio businesses find a local partner they can trust.",
}: ReviewRequestCtaProps) {
  const hasLink = hasGoogleReviewRequestUrl();

  return (
    <section className={cn("border-t border-line bg-paper-2 py-14 lg:py-16", className)}>
      <div className="container-site">
        <Reveal>
          <div className="grid gap-8 lg:grid-cols-12 lg:items-center">
            <div className="lg:col-span-7">
              <div className="flex items-center gap-2 text-accent-deep">
                <Star className="h-4 w-4 fill-current" aria-hidden="true" />
                <p className="font-mono text-[10px] tracking-[0.22em] uppercase">
                  After your project
                </p>
              </div>
              <h2 className="mt-3 heading-display text-3xl text-ink sm:text-4xl">{heading}</h2>
              <p className="mt-3 max-w-xl leading-relaxed text-muted">{body}</p>
            </div>
            <div className="flex flex-wrap items-center gap-4 lg:col-span-5 lg:justify-end">
              {hasLink ? (
                <a
                  href={googleReviews.googleReviewRequestUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 bg-accent px-6 py-3.5 font-display text-base font-semibold tracking-wide text-ink uppercase transition-colors hover:bg-accent/90"
                >
                  Leave a Google review
                  <ExternalLink className="h-4 w-4" aria-hidden="true" />
                  <span className="sr-only">(opens in a new tab)</span>
                </a>
              ) : (
                <>
                  <ButtonLink href="/contact" variant="outline-dark">
                    Contact the shop
                  </ButtonLink>
                  <p className="max-w-[14rem] font-mono text-[11px] leading-relaxed tracking-wide text-muted uppercase">
                    Direct review link added after Google Business Profile confirmation
                  </p>
                </>
              )}
              <a
                href={company.phoneHref}
                className="font-mono text-sm text-muted underline decoration-line underline-offset-4 transition-colors hover:text-ink"
              >
                Or call {company.phone}
              </a>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
