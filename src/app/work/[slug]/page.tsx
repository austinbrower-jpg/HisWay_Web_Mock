import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { getProject, getProjects, projects } from "@/data/projects";
import { getServices } from "@/data/services";
import { PhotoFrame } from "@/components/ui/PhotoFrame";
import { ProjectCard } from "@/components/ui/ProjectCard";
import { Reveal } from "@/components/ui/Reveal";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { QuoteCta } from "@/components/sections/QuoteCta";

interface ProjectPageProps {
  params: Promise<{ slug: string }>;
}

export function generateStaticParams() {
  return projects.map((project) => ({ slug: project.slug }));
}

export async function generateMetadata({ params }: ProjectPageProps): Promise<Metadata> {
  const { slug } = await params;
  const project = getProject(slug);
  if (!project) return {};
  return {
    title: project.title,
    description: project.summary,
  };
}

export default async function ProjectPage({ params }: ProjectPageProps) {
  const { slug } = await params;
  const project = getProject(slug);
  if (!project) notFound();

  const servicesUsed = getServices(project.servicesUsed);
  const relatedProjects = getProjects(project.related);

  return (
    <>
      <section className="border-b border-line bg-paper">
        <div className="container-site py-14 lg:py-16">
          <Reveal>
            <nav aria-label="Breadcrumb" className="mb-5">
              <ol className="flex flex-wrap items-center gap-2 font-mono text-xs tracking-[0.12em] text-muted uppercase">
                <li>
                  <Link href="/work" className="transition-colors hover:text-accent-deep">
                    Our Work
                  </Link>
                </li>
                <li aria-hidden="true">/</li>
                <li aria-current="page" className="text-ink">
                  {project.category}
                </li>
              </ol>
            </nav>
            <h1 className="heading-display max-w-4xl text-5xl text-ink sm:text-6xl">
              {project.title}
            </h1>
            <p className="mt-5 max-w-2xl text-lg leading-relaxed text-muted">{project.summary}</p>
            <p className="mt-4 font-mono text-xs tracking-[0.12em] text-muted uppercase">
              Sample project. Real HisWay work and photos will replace this page.
            </p>
          </Reveal>
        </div>
      </section>

      <section className="bg-paper py-12 lg:py-16">
        <div className="container-site">
          <Reveal>
            <PhotoFrame
              src={project.cover.src}
              alt={project.cover.alt}
              aspect="aspect-[16/9]"
              sizes="(min-width: 1280px) 1216px, 100vw"
              priority
            />
          </Reveal>

          <div className="mt-14 grid gap-12 lg:grid-cols-12">
            <Reveal className="lg:col-span-4">
              <h2 className="heading-display text-3xl text-ink">The challenge</h2>
              <p className="mt-4 leading-relaxed text-muted">{project.challenge}</p>
            </Reveal>
            <Reveal className="lg:col-span-4" delay={0.06}>
              <h2 className="heading-display text-3xl text-ink">What we did</h2>
              <p className="mt-4 leading-relaxed text-muted">{project.solution}</p>
            </Reveal>
            <Reveal className="lg:col-span-4" delay={0.12}>
              <h2 className="heading-display text-3xl text-ink">Services used</h2>
              <ul className="mt-4 flex flex-wrap gap-2.5">
                {servicesUsed.map((service) => (
                  <li key={service.slug}>
                    <Link
                      href={`/services/${service.slug}`}
                      className="inline-block border border-ink/20 px-4 py-2 font-display text-base font-medium uppercase tracking-wide text-ink transition-colors hover:border-accent-deep hover:text-accent-deep"
                    >
                      {service.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </Reveal>
          </div>

          <div className="mt-14 grid gap-8 sm:grid-cols-2">
            {project.images.map((image, index) => (
              <Reveal key={image.src} delay={index * 0.08}>
                <PhotoFrame
                  src={image.src}
                  alt={image.alt}
                  aspect="aspect-[3/2]"
                  sizes="(min-width: 640px) 50vw, 100vw"
                />
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {relatedProjects.length > 0 && (
        <section className="border-t border-line bg-paper py-16 lg:py-20">
          <div className="container-site">
            <Reveal>
              <SectionHeading title="Related projects" />
            </Reveal>
            <div className="mt-8 grid gap-8 sm:grid-cols-2">
              {relatedProjects.map((related, index) => (
                <Reveal key={related.slug} delay={index * 0.08}>
                  <ProjectCard project={related} sizes="(min-width: 640px) 50vw, 100vw" />
                </Reveal>
              ))}
            </div>
          </div>
        </section>
      )}

      <QuoteCta heading="Have a similar project in mind?" />
    </>
  );
}
