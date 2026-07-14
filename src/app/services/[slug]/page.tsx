import type { Metadata } from "next";
import type { Service, Project } from "@/types";
import Link from "next/link";
import { notFound } from "next/navigation";
import { Check, ChevronDown } from "lucide-react";
import { getService, services } from "@/data/services";
import { getProjects } from "@/data/projects";
import { ButtonLink } from "@/components/ui/Button";
import { PhotoFrame } from "@/components/ui/PhotoFrame";
import { ProjectCard } from "@/components/ui/ProjectCard";
import { Reveal } from "@/components/ui/Reveal";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Process } from "@/components/sections/home/Process";
import { QuoteCta } from "@/components/sections/QuoteCta";
import { ServiceReview } from "@/components/reviews/ServiceReview";
import { cn } from "@/lib/utils";
import { conceptServiceHeroMedia } from "@/data/concept-media";

/** Services that benefit from a service-scoped review module. */
const REVIEW_ENABLED_SERVICES = new Set([
  "custom-signs",
  "screen-printing-apparel",
  "vehicle-graphics",
  "embroidery",
  "banners-decals-stickers",
]);

interface ServicePageProps {
  params: Promise<{ slug: string }>;
}

export function generateStaticParams() {
  return services.map((service) => ({ slug: service.slug }));
}

export async function generateMetadata({ params }: ServicePageProps): Promise<Metadata> {
  const { slug } = await params;
  const service = getService(slug);
  if (!service) return {};
  return {
    title: `${service.name} in San Antonio`,
    description: `${service.tagline} Serving San Antonio businesses with personal service from concept through completion.`,
  };
}

export default async function ServicePage({ params }: ServicePageProps) {
  const { slug } = await params;
  const service = getService(slug);
  if (!service) notFound();

  const relatedProjects = getProjects(service.relatedProjects);
  const heroMedia = conceptServiceHeroMedia[service.slug];

  return (
    <>
      {/* Service hero */}
      <section className="border-b border-line bg-paper">
        <div className="container-site grid items-center gap-10 py-14 lg:grid-cols-12 lg:gap-14 lg:py-16">
          <Reveal className="lg:col-span-7">
            <nav aria-label="Breadcrumb" className="mb-5">
              <ol className="flex flex-wrap items-center gap-2 font-mono text-xs tracking-[0.12em] text-muted uppercase">
                <li>
                  <Link href="/services" className="transition-colors hover:text-accent-deep">
                    Services
                  </Link>
                </li>
                <li aria-hidden="true">/</li>
                <li aria-current="page" className="text-ink">
                  {service.name}
                </li>
              </ol>
            </nav>
            <h1 className="heading-display text-5xl text-ink sm:text-6xl">{service.name}</h1>
            <p className="mt-5 max-w-xl text-lg leading-relaxed text-muted">{service.tagline}</p>
            <div className="mt-8 flex flex-wrap gap-4">
              <ButtonLink href="/quote" variant="primary">
                Request a Quote
              </ButtonLink>
              <ButtonLink href="/work" variant="outline-dark">
                View Our Work
              </ButtonLink>
            </div>
          </Reveal>
          <Reveal className="lg:col-span-5" delay={0.1}>
            <PhotoFrame
              src={heroMedia?.src ?? service.heroImage}
              alt={heroMedia?.alt ?? service.heroImageAlt}
              aspect="aspect-[16/10]"
              sizes="(min-width: 1024px) 40vw, 100vw"
              preload
              loading="eager"
              marks
              imageClassName={heroMedia?.imageClassName}
            />
          </Reveal>
        </div>
      </section>

      {/* Sections rendering based on slug for variety */}
      {slug === "graphic-design-content" || slug === "custom-signs" ? (
        <>
          <OptionsSection service={service} />
          <OverviewSection service={service} />
          {relatedProjects.length > 0 && <RelatedWorkSection projects={relatedProjects} />}
        </>
      ) : slug === "promotional-products" || slug === "screen-printing-apparel" ? (
        <>
          {relatedProjects.length > 0 && <RelatedWorkSection projects={relatedProjects} />}
          <OverviewSection service={service} />
          <OptionsSection service={service} />
        </>
      ) : (
        <>
          <OverviewSection service={service} />
          <OptionsSection service={service} />
          {relatedProjects.length > 0 && <RelatedWorkSection projects={relatedProjects} />}
        </>
      )}

      <Process heading="How your project will run" />

      {REVIEW_ENABLED_SERVICES.has(slug) && <ServiceReview service={service.slug} />}

      {/* FAQ */}
      <section className="border-t border-line bg-paper py-16 lg:py-20">
        <div className="container-site grid gap-10 lg:grid-cols-12">
          <Reveal className="lg:col-span-4">
            <SectionHeading
              title="Common questions"
              lead="Not covered here? Call or email and we will give you a straight answer."
            />
          </Reveal>
          <div className="lg:col-span-8">
            <Reveal delay={0.08}>
              <div className="divide-y divide-line border-y border-line">
                {service.faqs.map((faq) => (
                  <details key={faq.question} className="group">
                    <summary className="flex cursor-pointer list-none items-center justify-between gap-4 py-5 font-display text-xl font-semibold uppercase tracking-wide text-ink [&::-webkit-details-marker]:hidden">
                      {faq.question}
                      <ChevronDown
                        className="h-5 w-5 shrink-0 text-muted transition-transform duration-200 group-open:rotate-180"
                        aria-hidden="true"
                      />
                    </summary>
                    <p className="max-w-2xl pb-6 leading-relaxed text-muted">{faq.answer}</p>
                  </details>
                ))}
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      <QuoteCta heading={`Ready to start your ${service.projectNoun} project?`} />
    </>
  );
}

function OverviewSection({ service }: { service: Service }) {
  return (
    <section className="bg-paper py-16 lg:py-20">
      <div className="container-site grid gap-12 lg:grid-cols-12">
        <Reveal className="lg:col-span-6">
          <h2 className="heading-display text-4xl text-ink">Overview</h2>
          {service.overview.map((paragraph: string) => (
            <p key={paragraph.slice(0, 32)} className="mt-5 leading-relaxed text-muted">
              {paragraph}
            </p>
          ))}
        </Reveal>
        <Reveal className="lg:col-span-6" delay={0.08}>
          <h2 className="heading-display text-4xl text-ink">Good fit for</h2>
          <ul className="mt-5 grid gap-x-6 gap-y-3 sm:grid-cols-2">
            {service.useCases.map((useCase: string) => (
              <li key={useCase} className="flex items-start gap-2.5">
                <Check className="mt-1 h-4 w-4 shrink-0 text-accent-deep" aria-hidden="true" />
                <span className="leading-snug text-ink">{useCase}</span>
              </li>
            ))}
          </ul>
        </Reveal>
      </div>
    </section>
  );
}

function OptionsSection({ service }: { service: Service }) {
  return (
    <section className="bg-paper-2 py-16 lg:py-20">
      <div className="container-site">
        <Reveal>
          <SectionHeading title="What we offer" />
        </Reveal>
        <Reveal className="mt-8" delay={0.08}>
          <ul
            className={cn(
              "grid gap-px border border-line bg-line sm:grid-cols-2",
              service.options.length === 4 ? "lg:grid-cols-2" : "lg:grid-cols-3",
            )}
          >
            {service.options.map((option, index: number) => {
              const isLast = index === service.options.length - 1;
              const count = service.options.length;
              return (
                <li
                  key={option.name}
                  className={cn(
                    "bg-paper p-6",
                    isLast && count % 2 === 1 && "sm:col-span-2",
                    isLast && count % 3 === 2 && count !== 4 && "lg:col-span-2",
                    isLast && count % 3 === 1 && count !== 4 && "lg:col-span-3",
                  )}
                >
                  <h3 className="font-display text-xl font-semibold uppercase tracking-wide text-ink">
                    {option.name}
                  </h3>
                  <p className="mt-2 leading-relaxed text-muted">{option.description}</p>
                </li>
              );
            })}
          </ul>
        </Reveal>
      </div>
    </section>
  );
}

function RelatedWorkSection({ projects }: { projects: Project[] }) {
  return (
    <section className="bg-paper py-16 lg:py-20">
      <div className="container-site">
        <Reveal>
          <SectionHeading title="Related work" />
        </Reveal>
        <div className="mt-8 grid gap-8 sm:grid-cols-2">
          {projects.map((project, index: number) => (
            <Reveal key={project.slug} delay={index * 0.08}>
              <ProjectCard
                project={project}
                sizes="(min-width: 640px) 50vw, 100vw"
              />
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
