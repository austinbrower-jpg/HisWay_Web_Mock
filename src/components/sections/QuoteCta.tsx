import { Phone } from "lucide-react";
import { company } from "@/data/company";
import { ButtonLink } from "@/components/ui/Button";
import { Reveal } from "@/components/ui/Reveal";

interface QuoteCtaProps {
  heading?: string;
  body?: string;
}

/** Full-width ink band closing most pages. */
export function QuoteCta({
  heading = "Ready to get your business seen?",
  body = "Tell us what you need and we will come back with a straightforward quote and a plan to get it done.",
}: QuoteCtaProps) {
  return (
    <section className="bg-ink py-20 text-paper lg:py-24">
      <div className="container-site">
        <Reveal className="max-w-3xl">
          <h2 className="heading-display text-5xl sm:text-6xl">{heading}</h2>
          <p className="mt-5 max-w-xl text-lg leading-relaxed text-muted-dark">{body}</p>
          <div className="mt-9 flex flex-wrap items-center gap-x-6 gap-y-4">
            <ButtonLink href="/quote" variant="primary" size="lg">
              Request a Quote
            </ButtonLink>
            <a
              href={company.phoneHref}
              className="inline-flex items-center gap-2 font-mono text-base text-paper/80 underline decoration-accent decoration-2 underline-offset-4 transition-colors hover:text-paper"
            >
              <Phone className="h-4 w-4" aria-hidden="true" />
              or call {company.phone}
            </a>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
