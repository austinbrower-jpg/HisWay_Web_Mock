"use client";

import { useState } from "react";
import { ProjectCard } from "@/components/ui/ProjectCard";
import { Reveal } from "@/components/ui/Reveal";
import type { Project, ProjectCategory } from "@/types";

interface WorkPortfolioProps {
  projects: Project[];
  categories: ProjectCategory[];
}

export function WorkPortfolio({ projects, categories }: WorkPortfolioProps) {
  const [activeCategory, setActiveCategory] = useState<ProjectCategory | "All">("All");

  const filteredProjects =
    activeCategory === "All"
      ? projects
      : projects.filter((p) => p.category === activeCategory);

  return (
    <section className="bg-paper py-12 lg:py-20">
      <div className="container-site">
        <Reveal>
          <div className="mb-10 flex flex-wrap items-center gap-2" role="group" aria-label="Project categories">
            <button
              onClick={() => setActiveCategory("All")}
              className={`border px-4 py-2 font-display text-sm font-semibold uppercase tracking-wide transition-colors ${
                activeCategory === "All"
                  ? "bg-ink text-paper border-ink"
                  : "border-ink/20 text-ink hover:border-ink hover:bg-ink hover:text-paper"
              }`}
              aria-pressed={activeCategory === "All"}
            >
              All
            </button>
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setActiveCategory(category)}
                className={`border px-4 py-2 font-display text-sm font-semibold uppercase tracking-wide transition-colors ${
                  activeCategory === category
                    ? "bg-ink text-paper border-ink"
                    : "border-ink/20 text-ink hover:border-ink hover:bg-ink hover:text-paper"
                }`}
                aria-pressed={activeCategory === category}
              >
                {category}
              </button>
            ))}
          </div>
        </Reveal>

        <ul className="grid gap-x-8 gap-y-12 sm:grid-cols-2 lg:grid-cols-3">
          {filteredProjects.map((project, index) => (
            <li key={project.slug}>
              <Reveal delay={Math.min((index % 3) * 0.07, 0.2)}>
                <ProjectCard project={project} />
              </Reveal>
            </li>
          ))}
        </ul>

        {filteredProjects.length === 0 && (
          <p className="py-10 text-center text-muted">
            No projects found in this category.
          </p>
        )}
      </div>
    </section>
  );
}
