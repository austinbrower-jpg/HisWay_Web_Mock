import { Reveal } from "@/components/ui/Reveal";
import { SectionHeading } from "@/components/ui/SectionHeading";

export const processSteps = [
  {
    title: "Talk it through",
    description:
      "Share your idea, budget, and deadline by phone, email, or the quote form. We come back with options and a straightforward quote.",
  },
  {
    title: "Design and proof",
    description:
      "We prepare the artwork, or clean up yours, and you approve a proof before anything goes into production.",
  },
  {
    title: "Production",
    description:
      "Your order is printed, pressed, stitched, or fabricated and checked against the approved proof.",
  },
  {
    title: "Delivery or install",
    description:
      "Pick up your order, have it delivered, or schedule installation for signage and vehicle graphics.",
  },
];

export function Process({ heading = "How a project moves through the shop" }: { heading?: string }) {
  return (
    <section className="border-t border-line bg-paper py-20 lg:py-24">
      <div className="container-site">
        <Reveal>
          <SectionHeading title={heading} />
        </Reveal>

        <ol className="mt-12 grid gap-x-8 gap-y-10 sm:grid-cols-2 lg:grid-cols-4">
          {processSteps.map((step, index) => (
            <li key={step.title}>
              <Reveal delay={index * 0.07}>
                <div className="border-t-2 border-ink pt-5">
                  <span className="font-mono text-sm font-medium text-accent-deep tabular-nums">
                    {String(index + 1).padStart(2, "0")}
                  </span>
                  <h3 className="mt-2 font-display text-2xl font-semibold uppercase tracking-wide text-ink">
                    {step.title}
                  </h3>
                  <p className="mt-2 leading-relaxed text-muted">{step.description}</p>
                </div>
              </Reveal>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}
