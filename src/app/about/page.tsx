import type { Metadata } from "next";
import { PagePlaceholder } from "@/components/sections/PagePlaceholder";
import { AboutPreview } from "@/components/sections/home/AboutPreview";
import { QuoteCta } from "@/components/sections/QuoteCta";

export const metadata: Metadata = {
  title: "About",
  description:
    "The story of HisWay Press or Print: a trade learned hands-on, grown from signs into printing, apparel, promotional products, and content.",
};

export default function AboutPage() {
  return (
    <>
      <PagePlaceholder
        title="About HisWay"
        lead="The full story page is being built for this concept. The short version is below, and the complete page will cover the journey properly."
        planned={[
          "The founder's story, from driving in 2018 to running the shop",
          "Milestones as the shop grew from signs into a one-stop partner",
          "What HisWay does today",
          "The values behind the work",
          "Team introductions",
          "Photos from inside the workshop",
        ]}
      />
      <AboutPreview />
      <QuoteCta />
    </>
  );
}
