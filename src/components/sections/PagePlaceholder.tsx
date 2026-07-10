import { Check, Mail, Phone } from "lucide-react";
import { company } from "@/data/company";
import { PageHeader } from "@/components/ui/PageHeader";
import { Reveal } from "@/components/ui/Reveal";

interface PagePlaceholderProps {
  title: string;
  lead: string;
  planned: string[];
  crumbs?: { label: string; href: string }[];
}

/**
 * Interim page used while later build phases are completed.
 * Presents the page plan honestly instead of shipping empty routes.
 */
export function PagePlaceholder({ title, lead, planned, crumbs }: PagePlaceholderProps) {
  return (
    <>
      <PageHeader title={title} lead={lead} crumbs={crumbs} />

      <section className="bg-paper py-16 lg:py-20">
        <div className="container-site grid gap-10 lg:grid-cols-12">
          <Reveal className="lg:col-span-7">
            <div className="border border-line bg-paper-2 p-7 sm:p-9">
              <h2 className="font-display text-2xl font-semibold uppercase tracking-wide text-ink">
                Coming to this page
              </h2>
              <p className="mt-2 text-muted">
                This section of the concept site is next in line. Here is what it will include:
              </p>
              <ul className="mt-6 grid gap-3 sm:grid-cols-2">
                {planned.map((item) => (
                  <li key={item} className="flex items-start gap-2.5">
                    <Check className="mt-1 h-4 w-4 shrink-0 text-accent-deep" aria-hidden="true" />
                    <span className="leading-snug text-ink">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </Reveal>

          <Reveal className="lg:col-span-5" delay={0.08}>
            <div className="border border-line p-7 sm:p-9">
              <h2 className="font-display text-2xl font-semibold uppercase tracking-wide text-ink">
                In the meantime
              </h2>
              <p className="mt-2 text-muted">
                The shop is one call or email away for anything you need now.
              </p>
              <ul className="mt-6 space-y-4">
                <li>
                  <a
                    href={company.phoneHref}
                    className="inline-flex items-center gap-3 font-mono text-lg text-ink transition-colors hover:text-accent-deep"
                  >
                    <Phone className="h-5 w-5 text-accent-deep" aria-hidden="true" />
                    {company.phone}
                  </a>
                </li>
                <li>
                  <a
                    href={company.emailHref}
                    className="inline-flex items-center gap-3 font-mono text-lg break-all text-ink transition-colors hover:text-accent-deep"
                  >
                    <Mail className="h-5 w-5 text-accent-deep" aria-hidden="true" />
                    {company.email}
                  </a>
                </li>
              </ul>
            </div>
          </Reveal>
        </div>
      </section>
    </>
  );
}
