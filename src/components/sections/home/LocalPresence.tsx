import Link from "next/link";
import { MapPin } from "lucide-react";
import { company } from "@/data/company";
import { Reveal } from "@/components/ui/Reveal";

/**
 * Quiet local-presence message for organic discovery without SEO jargon.
 */
export function LocalPresence() {
  return (
    <section className="border-t border-line bg-paper py-12 lg:py-14">
      <div className="container-site">
        <Reveal>
          <div className="flex flex-col gap-5 border border-line bg-paper-2 px-6 py-7 sm:flex-row sm:items-center sm:justify-between sm:gap-8 sm:px-8">
            <div className="flex items-start gap-4">
              <MapPin className="mt-1 h-5 w-5 shrink-0 text-accent-deep" aria-hidden="true" />
              <div>
                <p className="font-mono text-[10px] tracking-[0.22em] text-muted uppercase">
                  Find us locally
                </p>
                <h2 className="mt-1 font-display text-2xl font-semibold uppercase tracking-wide text-ink sm:text-3xl">
                  A San Antonio shop you can call, visit, and trust with the job
                </h2>
                <p className="mt-2 max-w-2xl leading-relaxed text-muted">
                  HisWay is a hands-on production partner for {company.serviceArea}{" "}
                  businesses—visible through completed work, direct communication, and a
                  Google presence built from real projects, not empty claims.
                </p>
              </div>
            </div>
            <Link
              href="/about"
              className="shrink-0 font-display text-sm font-semibold uppercase tracking-wide text-accent-deep underline decoration-accent decoration-2 underline-offset-4 transition-colors hover:text-ink"
            >
              Meet the shop
            </Link>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
