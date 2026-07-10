import Link from "next/link";
import { PhotoFrame } from "@/components/ui/PhotoFrame";
import type { Project } from "@/types";

interface ProjectCardProps {
  project: Project;
  sizes?: string;
  aspect?: string;
}

export function ProjectCard({
  project,
  sizes = "(min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw",
  aspect = "aspect-[4/3]",
}: ProjectCardProps) {
  return (
    <Link href={`/work/${project.slug}`} className="group block">
      <div className="overflow-hidden">
        <div className="transition-transform duration-300 motion-safe:group-hover:scale-[1.02]">
          <PhotoFrame
            src={project.cover.src}
            alt={project.cover.alt}
            aspect={aspect}
            sizes={sizes}
          />
        </div>
      </div>
      <p className="mt-3 font-mono text-xs tracking-[0.14em] text-muted uppercase">
        {project.category}
      </p>
      <h3 className="heading-display mt-1 text-2xl text-ink transition-colors group-hover:text-accent-deep">
        {project.title}
      </h3>
    </Link>
  );
}
