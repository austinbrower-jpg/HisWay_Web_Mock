import type { Metadata } from "next";
import { PageHeader } from "@/components/ui/PageHeader";
import { QuoteForm } from "@/components/sections/quote/QuoteForm";

export const metadata: Metadata = {
  title: "Request a Quote",
  description:
    "Tell HisWay about your sign, apparel, or promotional product project and get a straightforward quote.",
};

export default function QuotePage() {
  return (
    <>
      <PageHeader
        title="Request a Quote"
        lead="Tell us about your project. The more details you provide, the faster we can get you an accurate price."
      />
      <QuoteForm />
    </>
  );
}
