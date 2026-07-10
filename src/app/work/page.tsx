import type { Metadata } from "next";
import { projects } from "@/data/projects";
import { PageHeader } from "@/components/ui/PageHeader";
import { ProjectCard } from "@/components/ui/ProjectCard";
import { Reveal } from "@/components/ui/Reveal";
import { QuoteCta } from "@/components/sections/QuoteCta";

export const metadata: Metadata = {
  title: "Our Work",
  description:
    "Sample sign, apparel, vehicle graphic, and promotional product projects showing what the HisWay shop produces.",
};

// NOTE: Category filters (All / Signs / Apparel / Embroidery / Vehicles /
// Banners / Promotional Products) are planned for the next build phase.
export default function WorkPage() {
  return (
    <>
      <PageHeader
        title="Our Work"
        lead="A sample of recent projects. The photos here are placeholders, ready to be swapped for real HisWay project photography."
      />

      <section className="bg-paper py-16 lg:py-20">
        <div className="container-site">
          <ul className="grid gap-x-8 gap-y-12 sm:grid-cols-2 lg:grid-cols-3">
            {projects.map((project, index) => (
              <li key={project.slug}>
                <Reveal delay={Math.min((index % 3) * 0.07, 0.2)}>
                  <ProjectCard project={project} />
                </Reveal>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <QuoteCta heading="Want your project up here next?" />
    </>
  );
}
