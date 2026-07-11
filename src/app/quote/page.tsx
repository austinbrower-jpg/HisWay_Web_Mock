import type { Metadata } from "next";
import { PageHeader } from "@/components/ui/PageHeader";
import { QuoteForm } from "@/components/sections/quote/QuoteForm";
import { ReviewTrustBar } from "@/components/reviews/ReviewTrustBar";
import { ReviewRequestCta } from "@/components/reviews/ReviewRequestCta";

export const metadata: Metadata = {
  title: "Request a Quote",
  description:
    "Tell HisWay about your sign, apparel, vehicle graphics, or promotional product project and get a straightforward quote from a San Antonio production partner.",
};

export default function QuotePage() {
  return (
    <>
      <PageHeader
        title="Request a Quote"
        lead="Tell us about your project. The more details you provide, the faster we can get you an accurate price."
      />
      <ReviewTrustBar />
      <QuoteForm />
      <ReviewRequestCta
        heading="Already finished a project with us?"
        body="If your order is complete, a short Google review helps other local businesses find HisWay with confidence."
      />
    </>
  );
}
