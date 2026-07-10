import { Reveal } from "@/components/ui/Reveal";
import { SectionHeading } from "@/components/ui/SectionHeading";

const reasons = [
  {
    title: "One shop for the whole job",
    description:
      "Signs, apparel, vehicles, and promo items handled together, so your branding matches across all of them.",
  },
  {
    title: "You talk to the people doing the work",
    description:
      "No ticket queues or call centers. Questions go straight to the shop handling your order.",
  },
  {
    title: "Proofs before production",
    description:
      "You approve exactly what will print, stitch, or install before we run it. No surprises at pickup.",
  },
  {
    title: "Built on door-to-door relationships",
    description:
      "HisWay grew by showing up in person. That same directness carries through every project we take on.",
  },
];

export function WhyHisWay() {
  return (
    <section className="border-t border-line bg-paper py-20 lg:py-24">
      <div className="container-site grid gap-12 lg:grid-cols-12">
        <Reveal className="lg:col-span-5">
          <SectionHeading
            title="Why businesses work with us"
            lead="Plenty of places can print a shirt or cut a sign. The difference is how the project gets handled."
          />
        </Reveal>

        <div className="lg:col-span-7">
          <ol className="divide-y divide-line border-y border-line">
            {reasons.map((reason, index) => (
              <li key={reason.title}>
                <Reveal delay={index * 0.06} className="flex gap-6 py-6">
                  <span
                    className="font-mono text-sm font-medium text-accent-deep tabular-nums"
                    aria-hidden="true"
                  >
                    {String(index + 1).padStart(2, "0")}
                  </span>
                  <div>
                    <h3 className="font-display text-2xl font-semibold uppercase tracking-wide text-ink">
                      {reason.title}
                    </h3>
                    <p className="mt-1.5 max-w-lg leading-relaxed text-muted">
                      {reason.description}
                    </p>
                  </div>
                </Reveal>
              </li>
            ))}
          </ol>
        </div>
      </div>
    </section>
  );
}
