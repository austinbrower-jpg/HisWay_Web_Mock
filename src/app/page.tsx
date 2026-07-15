import { Hero } from "@/components/sections/home/Hero";
import { ServicesOverview } from "@/components/sections/home/ServicesOverview";
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
      <WhyHisWay />
      <FeaturedReviews
        heading="Reputation built project by project"
        lead="Six reviews that highlight patience, quality, communication, repeat trust, and dependable turnaround."
        limit={6}
        ctaHref="/reviews"
        ctaLabel="Browse all selected reviews"
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
