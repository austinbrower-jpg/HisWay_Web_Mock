import type { Metadata } from "next";
import { projects, projectCategories } from "@/data/projects";
import { PageHeader } from "@/components/ui/PageHeader";
import { WorkPortfolio } from "@/components/sections/work/WorkPortfolio";
import { QuoteCta } from "@/components/sections/QuoteCta";

export const metadata: Metadata = {
  title: "Our Work",
  description:
    "Sample sign, apparel, vehicle graphic, and promotional product projects showing what the HisWay shop produces.",
};

export default function WorkPage() {
  return (
    <>
      <PageHeader
        title="Our Work"
        lead="A sample of recent projects. The photos here are placeholders, ready to be swapped for real HisWay project photography."
      />
      <WorkPortfolio projects={projects} categories={projectCategories} />

      <QuoteCta heading="Want your project up here next?" />
    </>
  );
}
