"use client";

import { useState } from "react";
import { Reveal } from "@/components/ui/Reveal";

export function QuoteForm() {
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [errorMsg, setErrorMsg] = useState("");

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);
    setErrorMsg("");

    // This is a frontend-only mock form per requirements.
    // Simulate network request.
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSubmitted(true);
    }, 800);
  };

  if (isSubmitted) {
    return (
      <section className="bg-paper py-20 lg:py-32">
        <div className="container-site text-center">
          <Reveal>
            <div className="mx-auto max-w-xl border border-line bg-paper-2 p-10 lg:p-14">
              <h2 className="heading-display text-4xl text-ink">Quote request received</h2>
              <p className="mt-4 text-lg text-muted">
                Thank you. We&apos;ve received your project details and will review them shortly.
                We aim to respond to all inquiries within one business day.
              </p>
              <button
                type="button"
                onClick={() => setIsSubmitted(false)}
                className="mt-8 inline-flex h-12 items-center justify-center bg-ink px-6 font-display text-base font-semibold uppercase tracking-wide text-paper transition-colors hover:bg-accent hover:text-ink"
              >
                Submit another project
              </button>
            </div>
          </Reveal>
        </div>
      </section>
    );
  }

  return (
    <section className="bg-paper py-16 lg:py-24">
      <div className="container-site max-w-4xl">
        <Reveal>
          <form onSubmit={handleSubmit} className="space-y-12">
            {/* Contact Details */}
            <div className="space-y-6">
              <h2 className="heading-display text-3xl text-ink">1. Your Details</h2>
              <div className="grid gap-6 sm:grid-cols-2">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-ink">Name *</label>
                  <input required type="text" id="name" className="mt-2 block w-full rounded-none border border-line bg-paper-2 px-4 py-3 text-ink focus:border-accent focus:outline-none focus:ring-1 focus:ring-accent" />
                </div>
                <div>
                  <label htmlFor="company" className="block text-sm font-medium text-ink">Company</label>
                  <input type="text" id="company" className="mt-2 block w-full rounded-none border border-line bg-paper-2 px-4 py-3 text-ink focus:border-accent focus:outline-none focus:ring-1 focus:ring-accent" />
                </div>
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-ink">Email Address *</label>
                  <input required type="email" id="email" className="mt-2 block w-full rounded-none border border-line bg-paper-2 px-4 py-3 text-ink focus:border-accent focus:outline-none focus:ring-1 focus:ring-accent" />
                </div>
                <div>
                  <label htmlFor="phone" className="block text-sm font-medium text-ink">Phone Number *</label>
                  <input required type="tel" id="phone" className="mt-2 block w-full rounded-none border border-line bg-paper-2 px-4 py-3 text-ink focus:border-accent focus:outline-none focus:ring-1 focus:ring-accent" />
                </div>
              </div>
            </div>

            {/* Project Details */}
            <div className="space-y-6 border-t border-line pt-10">
              <h2 className="heading-display text-3xl text-ink">2. Project Details</h2>
              <div className="grid gap-6 sm:grid-cols-2">
                <div className="sm:col-span-2">
                  <label htmlFor="service" className="block text-sm font-medium text-ink">Primary Service *</label>
                  <select required id="service" className="mt-2 block w-full rounded-none border border-line bg-paper-2 px-4 py-3 text-ink focus:border-accent focus:outline-none focus:ring-1 focus:ring-accent">
                    <option value="">Select a service...</option>
                    <option value="signs">Custom Signs</option>
                    <option value="apparel">Screen Printing & Apparel</option>
                    <option value="embroidery">Embroidery</option>
                    <option value="vehicles">Vehicle Graphics</option>
                    <option value="banners">Banners, Decals & Stickers</option>
                    <option value="promo">Promotional Products</option>
                    <option value="design">Graphic Design & Content</option>
                  </select>
                </div>
                <div>
                  <label htmlFor="quantity" className="block text-sm font-medium text-ink">Estimated Quantity</label>
                  <input type="text" id="quantity" className="mt-2 block w-full rounded-none border border-line bg-paper-2 px-4 py-3 text-ink focus:border-accent focus:outline-none focus:ring-1 focus:ring-accent" />
                </div>
                <div>
                  <label htmlFor="budget" className="block text-sm font-medium text-ink">Approximate Budget</label>
                  <select id="budget" className="mt-2 block w-full rounded-none border border-line bg-paper-2 px-4 py-3 text-ink focus:border-accent focus:outline-none focus:ring-1 focus:ring-accent">
                    <option value="">Select a range...</option>
                    <option value="under500">Under $500</option>
                    <option value="500to2500">$500 - $2,500</option>
                    <option value="2500to5000">$2,500 - $5,000</option>
                    <option value="over5000">$5,000+</option>
                    <option value="not_sure">Not sure yet</option>
                  </select>
                </div>
                <div className="sm:col-span-2">
                  <label htmlFor="deadline" className="block text-sm font-medium text-ink">Desired Completion Date</label>
                  <input type="date" id="deadline" className="mt-2 block w-full rounded-none border border-line bg-paper-2 px-4 py-3 text-ink focus:border-accent focus:outline-none focus:ring-1 focus:ring-accent" />
                </div>
                <div className="sm:col-span-2">
                  <label htmlFor="description" className="block text-sm font-medium text-ink">Project Description *</label>
                  <textarea required id="description" rows={5} className="mt-2 block w-full rounded-none border border-line bg-paper-2 px-4 py-3 text-ink focus:border-accent focus:outline-none focus:ring-1 focus:ring-accent" placeholder="Tell us about what you need..."></textarea>
                </div>
              </div>
            </div>

            {/* Assets */}
            <div className="space-y-6 border-t border-line pt-10">
              <h2 className="heading-display text-3xl text-ink">3. Artwork & Assets</h2>
              <div>
                <label htmlFor="artwork" className="block text-sm font-medium text-ink">Upload Artwork (optional)</label>
                <p className="mt-1 text-sm text-muted">Vector files (.ai, .eps, .pdf) or high-res images preferred.</p>
                <div className="mt-3 flex justify-center rounded-none border-2 border-dashed border-line px-6 py-10 hover:bg-paper-2 transition-colors">
                  <div className="text-center">
                    <div className="mt-4 flex text-sm leading-6 text-muted">
                      <label htmlFor="file-upload" className="relative cursor-pointer rounded-none font-semibold text-accent-deep focus-within:outline-none focus-within:ring-2 focus-within:ring-accent hover:text-accent">
                        <span>Upload a file</span>
                        <input id="file-upload" name="file-upload" type="file" className="sr-only" />
                      </label>
                      <p className="pl-1">or drag and drop</p>
                    </div>
                    <p className="text-xs leading-5 text-muted">PNG, JPG, PDF up to 10MB</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Preferences */}
            <div className="space-y-6 border-t border-line pt-10">
              <h2 className="heading-display text-3xl text-ink">4. Preferences</h2>
              <div>
                <p className="text-sm font-medium text-ink">Preferred Contact Method</p>
                <div className="mt-4 space-y-4 sm:flex sm:items-center sm:space-x-8 sm:space-y-0">
                  <div className="flex items-center">
                    <input id="contact-email" name="contact-method" type="radio" defaultChecked className="h-4 w-4 border-line text-accent focus:ring-accent" />
                    <label htmlFor="contact-email" className="ml-3 block text-sm font-medium text-ink">Email</label>
                  </div>
                  <div className="flex items-center">
                    <input id="contact-phone" name="contact-method" type="radio" className="h-4 w-4 border-line text-accent focus:ring-accent" />
                    <label htmlFor="contact-phone" className="ml-3 block text-sm font-medium text-ink">Phone call</label>
                  </div>
                  <div className="flex items-center">
                    <input id="contact-text" name="contact-method" type="radio" className="h-4 w-4 border-line text-accent focus:ring-accent" />
                    <label htmlFor="contact-text" className="ml-3 block text-sm font-medium text-ink">Text message</label>
                  </div>
                </div>
              </div>
            </div>

            <div className="border-t border-line pt-10">
              <button
                type="submit"
                disabled={isSubmitting}
                className="inline-flex h-12 w-full items-center justify-center bg-accent px-8 font-display text-base font-semibold uppercase tracking-wide text-ink transition-colors hover:bg-accent-deep hover:text-paper focus:outline-none focus:ring-2 focus:ring-accent focus:ring-offset-2 disabled:opacity-70 sm:w-auto"
              >
                {isSubmitting ? "Submitting..." : "Submit Quote Request"}
              </button>
              {errorMsg && <p className="mt-4 text-sm text-red-600">{errorMsg}</p>}
              <p className="mt-6 text-sm text-muted">
                Note: This form is a frontend-only mock for presentation purposes and does not submit data to a server.
              </p>
            </div>
          </form>
        </Reveal>
      </div>
    </section>
  );
}
