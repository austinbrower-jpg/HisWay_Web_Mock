import type { Metadata } from "next";
import { PagePlaceholder } from "@/components/sections/PagePlaceholder";

export const metadata: Metadata = {
  title: "Request a Quote",
  description:
    "Tell HisWay about your sign, apparel, or promotional product project and get a straightforward quote.",
};

export default function QuotePage() {
  return (
    <PagePlaceholder
      title="Request a Quote"
      lead="The detailed quote form is next in the build. Until it lands here, the fastest quote is a direct call or email to the shop."
      planned={[
        "Project type and service selection",
        "Quantity and sizing details",
        "Desired completion date",
        "Budget range guidance",
        "Artwork upload",
        "Preferred contact method",
      ]}
    />
  );
}
