import type { Metadata } from "next";
import { PagePlaceholder } from "@/components/sections/PagePlaceholder";
import { QuoteCta } from "@/components/sections/QuoteCta";

export const metadata: Metadata = {
  title: "Contact",
  description:
    "Reach HisWay Press or Print by phone or email for signs, apparel, vehicle graphics, and promotional products.",
};

export default function ContactPage() {
  return (
    <>
      <PagePlaceholder
        title="Contact"
        lead="The full contact page, with hours, location, and a message form, is on the way. The phone and inbox already work the old-fashioned way."
        planned={[
          "Business hours",
          "Shop address and map",
          "Simple message form",
          "Social links",
          "Directions and parking notes",
          "Link to the detailed quote form",
        ]}
      />
      <QuoteCta
        heading="Have project details ready?"
        body="Head to the quote page for the fastest ways to get your project priced, or call the shop directly."
      />
    </>
  );
}
