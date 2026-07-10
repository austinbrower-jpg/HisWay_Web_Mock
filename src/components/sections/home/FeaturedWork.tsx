import { getFeaturedProjects } from "@/data/projects";
import { ButtonLink } from "@/components/ui/Button";
import { ProjectCard } from "@/components/ui/ProjectCard";
import { Reveal } from "@/components/ui/Reveal";
import { SectionHeading } from "@/components/ui/SectionHeading";

export function FeaturedWork() {
  const [first, second, third] = getFeaturedProjects();

  return (
    <section className="border-t border-line bg-paper py-20 lg:py-24">
      <div className="container-site">
        <Reveal className="flex flex-wrap items-end justify-between gap-6">
          <SectionHeading
            title="Our work"
            lead="The kinds of projects that come through the shop, from storefronts to fleets."
          />
          <ButtonLink href="/work" variant="outline-dark" className="hidden sm:inline-flex">
            View Our Work
          </ButtonLink>
        </Reveal>

        <div className="mt-10 grid gap-8 lg:grid-cols-12">
          <Reveal className="lg:col-span-7">
            <ProjectCard
              project={first}
              aspect="aspect-[4/3]"
              sizes="(min-width: 1024px) 55vw, 100vw"
            />
          </Reveal>
          <div className="grid gap-8 sm:grid-cols-2 lg:col-span-5 lg:grid-cols-1">
            <Reveal delay={0.08}>
              <ProjectCard
                project={second}
                aspect="aspect-[16/10]"
                sizes="(min-width: 1024px) 38vw, (min-width: 640px) 50vw, 100vw"
              />
            </Reveal>
            <Reveal delay={0.16}>
              <ProjectCard
                project={third}
                aspect="aspect-[16/10]"
                sizes="(min-width: 1024px) 38vw, (min-width: 640px) 50vw, 100vw"
              />
            </Reveal>
          </div>
        </div>

        <Reveal className="mt-10 sm:hidden">
          <ButtonLink href="/work" variant="outline-dark" className="w-full">
            View Our Work
          </ButtonLink>
        </Reveal>
      </div>
    </section>
  );
}
