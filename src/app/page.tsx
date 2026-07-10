import { Hero } from "@/components/sections/home/Hero";
import { ServicesOverview } from "@/components/sections/home/ServicesOverview";
import { FeaturedWork } from "@/components/sections/home/FeaturedWork";
import { WhyHisWay } from "@/components/sections/home/WhyHisWay";
import { PromoIntro } from "@/components/sections/home/PromoIntro";
import { Process } from "@/components/sections/home/Process";
import { IndustriesStrip } from "@/components/sections/home/IndustriesStrip";
import { AboutPreview } from "@/components/sections/home/AboutPreview";
import { RecentGallery } from "@/components/sections/home/RecentGallery";
import { QuoteCta } from "@/components/sections/QuoteCta";

export default function HomePage() {
  return (
    <>
      <Hero />
      <ServicesOverview />
      <FeaturedWork />
      <WhyHisWay />
      <PromoIntro />
      <Process />
      <IndustriesStrip />
      <AboutPreview />
      <RecentGallery />
      <QuoteCta />
    </>
  );
}
