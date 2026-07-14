import { Hero } from "@/components/sections/home/Hero";
import { ServicesOverview } from "@/components/sections/home/ServicesOverview";
import { FeaturedWork } from "@/components/sections/home/FeaturedWork";
import { WhyHisWay } from "@/components/sections/home/WhyHisWay";
import { PromoIntro } from "@/components/sections/home/PromoIntro";
import { Process } from "@/components/sections/home/Process";
import { IndustriesStrip } from "@/components/sections/home/IndustriesStrip";
import { AboutPreview } from "@/components/sections/home/AboutPreview";
import { RecentGallery } from "@/components/sections/home/RecentGallery";
import { LocalPresence } from "@/components/sections/home/LocalPresence";
import { QuoteCta } from "@/components/sections/QuoteCta";
import { ReviewTrustBar } from "@/components/reviews/ReviewTrustBar";
import { FeaturedReviews } from "@/components/reviews/FeaturedReviews";

export default function HomePage() {
  return (
    <>
      <Hero />
      <ReviewTrustBar />
      <ServicesOverview />
      <FeaturedWork />
      <WhyHisWay />
      <FeaturedReviews
        heading="Reputation built project by project"
        lead="Verified Google reviews will land here before launch. Until then, the work and the process speak for the shop."
      />
      <PromoIntro />
      <Process />
      <IndustriesStrip />
      <AboutPreview />
      <RecentGallery />
      <LocalPresence />
      <QuoteCta showReviewRequest />
    </>
  );
}
