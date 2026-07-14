import type { ServiceSlug } from "@/types";

/**
 * Verified Google-review system for HisWay Press or Print.
 *
 * Do not invent ratings, review counts, reviewer names, quotes, or dates.
 * All profile-level fields below remain null/empty until the owner confirms
 * the exact Google Business Profile values. Individual reviews stay in an
 * empty array until verified copy and permission to republish are confirmed.
 */

export type ReviewVerificationStatus = "unverified" | "verified";

export interface GoogleReview {
  id: string;
  /** Display name as shown on Google (verify before publishing). */
  reviewerName: string;
  /** Full review body text (do not paraphrase without permission). */
  reviewText: string;
  /** Integer 1–5 from the Google review. */
  starRating: 1 | 2 | 3 | 4 | 5;
  /** ISO date string (YYYY-MM-DD) of the review. */
  reviewDate: string;
  /** Optional link to the related HisWay service page slug. */
  relatedService: ServiceSlug | null;
  /** Direct URL to this review on Google, if available. */
  googleReviewUrl: string | null;
  /** Whether this review should appear in featured placements. */
  featured: boolean;
  /** Only `verified` reviews may be rendered as real customer feedback. */
  verificationStatus: ReviewVerificationStatus;
}

export interface GoogleReviewsConfig {
  /**
   * Exact Google Business Profile rating (e.g. 4.9).
   * Keep null until verified from Google — never invent a rating.
   */
  exactGoogleRating: number | null;
  /**
   * Exact Google review count.
   * Keep null until verified from Google — never invent a count.
   */
  exactGoogleReviewCount: number | null;
  /** Public Google Business Profile URL. Empty until verified. */
  googleBusinessProfileUrl: string;
  /** Direct "Write a review" URL for post-project requests. Empty until verified. */
  googleReviewRequestUrl: string;
  /** Individual reviews. Empty until verified; do not add fabricated entries. */
  reviews: GoogleReview[];
}

export const googleReviews: GoogleReviewsConfig = {
  exactGoogleRating: null,
  exactGoogleReviewCount: null,
  googleBusinessProfileUrl: "",
  googleReviewRequestUrl: "",
  reviews: [],
};

/** Safe trust statements that do not require unverified metrics. */
export const trustSignals = [
  {
    label: "Local service",
    description: "San Antonio production partner",
  },
  {
    label: "Direct communication",
    description: "Talk to the people doing the work",
  },
  {
    label: "Proof before production",
    description: "Approve before anything runs",
  },
  {
    label: "Multiple services",
    description: "Signs, apparel, vehicles, and promo under one roof",
  },
] as const;

export function hasVerifiedReviewMetrics(): boolean {
  return (
    googleReviews.exactGoogleRating !== null &&
    googleReviews.exactGoogleReviewCount !== null &&
    googleReviews.exactGoogleReviewCount > 0
  );
}

export function hasGoogleBusinessProfileUrl(): boolean {
  return googleReviews.googleBusinessProfileUrl.trim().length > 0;
}

export function hasGoogleReviewRequestUrl(): boolean {
  return googleReviews.googleReviewRequestUrl.trim().length > 0;
}

export function getVerifiedReviews(): GoogleReview[] {
  return googleReviews.reviews.filter((review) => review.verificationStatus === "verified");
}

export function getFeaturedReviews(): GoogleReview[] {
  return getVerifiedReviews().filter((review) => review.featured);
}

export function getReviewsForService(service: ServiceSlug): GoogleReview[] {
  return getVerifiedReviews().filter((review) => review.relatedService === service);
}
