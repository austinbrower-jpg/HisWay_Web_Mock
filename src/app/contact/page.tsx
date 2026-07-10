import type { Metadata } from "next";
import { company } from "@/data/company";
import { Reveal } from "@/components/ui/Reveal";
import { QuoteCta } from "@/components/sections/QuoteCta";

export const metadata: Metadata = {
  title: "Contact",
  description:
    "Reach HisWay Press or Print by phone or email for signs, apparel, vehicle graphics, and promotional products.",
};

export default function ContactPage() {
  return (
    <>
      <section className="bg-paper py-16 lg:py-24">
        <div className="container-site">
          <div className="grid gap-12 lg:grid-cols-12">
            <Reveal className="lg:col-span-5">
              <h1 className="heading-display text-5xl sm:text-6xl text-ink">Get in touch</h1>
              <p className="mt-6 text-lg text-muted leading-relaxed">
                Whether you have a quick question or just want to connect, we&apos;re here to help. For project pricing, please use our detailed quote form.
              </p>

              <div className="mt-10 space-y-8">
                <div>
                  <h3 className="font-display text-xl font-semibold uppercase text-ink">Contact Details</h3>
                  <div className="mt-3 space-y-2 text-muted">
                    <p>
                      <strong className="text-ink">Phone:</strong> <a href={company.phoneHref} className="hover:text-accent transition-colors">{company.phone}</a>
                    </p>
                    <p>
                      <strong className="text-ink">Email:</strong> <a href={company.emailHref} className="hover:text-accent transition-colors">{company.email}</a>
                    </p>
                  </div>
                </div>

                <div>
                  <h3 className="font-display text-xl font-semibold uppercase text-ink">Visit the Shop</h3>
                  <div className="mt-3 space-y-2 text-muted">
                    <p>{company.address ? company.address : "Location to be confirmed"}</p>
                    <p>{company.hours ? company.hours : "Hours to be confirmed"}</p>
                    {(!company.address || !company.hours) && (
                      <p className="text-xs tracking-wider uppercase text-accent font-mono mt-2">
                        [Placeholder: Confirm address and hours with owner]
                      </p>
                    )}
                  </div>
                </div>

                <div>
                  <h3 className="font-display text-xl font-semibold uppercase text-ink">Social</h3>
                  <div className="mt-3 space-y-2 text-muted">
                    <p>
                      <a href={company.instagram} target="_blank" rel="noopener noreferrer" className="hover:text-accent transition-colors">Instagram {company.instagramHandle}</a>
                    </p>
                    <p>
                      <a href={company.facebook} target="_blank" rel="noopener noreferrer" className="hover:text-accent transition-colors">Facebook</a>
                    </p>
                  </div>
                </div>
              </div>
            </Reveal>

            <Reveal className="lg:col-span-7" delay={0.1}>
              <div className="bg-paper-2 p-8 lg:p-12 border border-line">
                <h2 className="heading-display text-3xl text-ink">Send a Message</h2>
                <form className="mt-8 space-y-6">
                  <div className="grid gap-6 sm:grid-cols-2">
                    <div>
                      <label htmlFor="name" className="block text-sm font-medium text-ink">Name</label>
                      <input type="text" id="name" className="mt-2 block w-full rounded-none border border-line bg-paper px-4 py-3 text-ink focus:border-accent focus:outline-none focus:ring-1 focus:ring-accent" />
                    </div>
                    <div>
                      <label htmlFor="email" className="block text-sm font-medium text-ink">Email</label>
                      <input type="email" id="email" className="mt-2 block w-full rounded-none border border-line bg-paper px-4 py-3 text-ink focus:border-accent focus:outline-none focus:ring-1 focus:ring-accent" />
                    </div>
                  </div>
                  <div>
                    <label htmlFor="message" className="block text-sm font-medium text-ink">Message</label>
                    <textarea id="message" rows={5} className="mt-2 block w-full rounded-none border border-line bg-paper px-4 py-3 text-ink focus:border-accent focus:outline-none focus:ring-1 focus:ring-accent"></textarea>
                  </div>
                  <div>
                    <button type="button" className="inline-flex h-12 items-center justify-center bg-ink px-8 font-display text-base font-semibold uppercase tracking-wide text-paper transition-colors hover:bg-accent hover:text-ink">
                      Send Message
                    </button>
                    <p className="mt-4 text-xs text-muted">Note: This is a frontend mock.</p>
                  </div>
                </form>
              </div>
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
