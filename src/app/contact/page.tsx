import type { Metadata } from "next";
import { company } from "@/data/company";
import { Reveal } from "@/components/ui/Reveal";
import { QuoteCta } from "@/components/sections/QuoteCta";
import { ContactForm } from "@/components/sections/contact/ContactForm";

export const metadata: Metadata = {
  title: "Contact",
  description:
    "Call or email HisWay Press or Print in San Antonio for custom signs, apparel, vehicle graphics, and promotional products.",
};

export default function ContactPage() {
  return (
    <>
      <section className="bg-paper py-16 lg:py-24">
        <div className="container-site">
          <div className="grid gap-12 lg:grid-cols-12">
            <Reveal className="lg:col-span-5">
              <h1 className="heading-display text-5xl text-ink sm:text-6xl">Get in touch</h1>
              <p className="mt-6 text-lg leading-relaxed text-muted">
                Whether you have a quick question or just want to connect, we&apos;re here to help.
                For project pricing, please use our detailed quote form.
              </p>

              <div className="mt-10 space-y-8">
                <div>
                  <h2 className="font-display text-xl font-semibold uppercase text-ink">
                    Contact Details
                  </h2>
                  <div className="mt-3 space-y-2 text-muted">
                    <p>
                      <strong className="text-ink">Phone:</strong>{" "}
                      <a
                        href={company.phoneHref}
                        className="transition-colors hover:text-accent"
                      >
                        {company.phone}
                      </a>
                    </p>
                    <p>
                      <strong className="text-ink">Email:</strong>{" "}
                      <a
                        href={company.emailHref}
                        className="break-all transition-colors hover:text-accent"
                      >
                        {company.email}
                      </a>
                    </p>
                  </div>
                </div>

                <div>
                  <h2 className="font-display text-xl font-semibold uppercase text-ink">
                    Visit the Shop
                  </h2>
                  <div className="mt-3 space-y-2 text-muted">
                    <p>{company.address ? company.address : "Location to be confirmed"}</p>
                    <p>{company.hours ? company.hours : "Hours to be confirmed"}</p>
                    {(!company.address || !company.hours) && (
                      <p className="mt-2 font-mono text-xs tracking-wider text-accent uppercase">
                        [Placeholder: Confirm address and hours with owner]
                      </p>
                    )}
                  </div>
                </div>

                <div>
                  <h2 className="font-display text-xl font-semibold uppercase text-ink">Social</h2>
                  <div className="mt-3 space-y-2 text-muted">
                    <p>
                      <a
                        href={company.instagram}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="transition-colors hover:text-accent"
                      >
                        Instagram {company.instagramHandle}
                        <span className="sr-only"> (opens in a new tab)</span>
                      </a>
                    </p>
                    <p>
                      <a
                        href={company.facebook}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="transition-colors hover:text-accent"
                      >
                        Facebook
                        <span className="sr-only"> (opens in a new tab)</span>
                      </a>
                    </p>
                  </div>
                </div>
              </div>
            </Reveal>

            <Reveal className="lg:col-span-7" delay={0.1}>
              <ContactForm />
            </Reveal>
          </div>
        </div>
      </section>
      <QuoteCta
        heading="Have project details ready?"
        body="Head to the quote page for the fastest ways to get your project priced, or call the shop directly."
      />
    </>
  );
}
