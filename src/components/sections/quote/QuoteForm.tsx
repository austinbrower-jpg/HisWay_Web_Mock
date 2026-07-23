"use client";

import { useId, useState } from "react";
import { Reveal } from "@/components/ui/Reveal";

/**
 * Frontend-only quote mock.
 * Submission is simulated with a short timeout — no network request, no API,
 * and no file upload. Keep it that way until a real backend is intentionally added.
 */
export function QuoteForm() {
  const formId = useId();
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [fileName, setFileName] = useState<string | null>(null);

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    // MOCK ONLY: do not POST or fetch. Simulate a successful response for the demo.
    setIsSubmitting(true);
    window.setTimeout(() => {
      setIsSubmitting(false);
      setIsSubmitted(true);
    }, 800);
  };

  if (isSubmitted) {
    return (
      <section className="bg-paper py-20 lg:py-32" aria-live="polite">
        <div className="container-site text-center">
          <Reveal>
            <div className="mx-auto max-w-xl border border-line bg-paper-2 p-10 lg:p-14">
              <h2 className="heading-display text-4xl text-ink">Quote request received</h2>
              <p className="mt-4 text-lg text-muted">
                Thank you. We&apos;ve received your project details and will review them shortly.
                We aim to respond to all inquiries within one business day.
              </p>
              <p className="mt-3 text-sm text-muted">
                (Demo only — nothing was sent to a server.)
              </p>
              <button
                type="button"
                onClick={() => {
                  setIsSubmitted(false);
                  setFileName(null);
                }}
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
          <form
            onSubmit={handleSubmit}
            className="space-y-12"
            noValidate={false}
            aria-describedby={`${formId}-mock-note`}
          >
            {/* Contact Details */}
            <div className="space-y-6">
              <h2 className="heading-display text-3xl text-ink">1. Your Details</h2>
              <div className="grid gap-6 sm:grid-cols-2">
                <div>
                  <label htmlFor={`${formId}-name`} className="block text-sm font-medium text-ink">
                    Name *
                  </label>
                  <input
                    required
                    name="name"
                    type="text"
                    id={`${formId}-name`}
                    autoComplete="name"
                    className="mt-2 block w-full rounded-none border border-line bg-paper-2 px-4 py-3 text-ink focus:border-accent-deep focus:outline-none focus:ring-1 focus:ring-accent-deep"
                  />
                </div>
                <div>
                  <label htmlFor={`${formId}-company`} className="block text-sm font-medium text-ink">
                    Company
                  </label>
                  <input
                    name="company"
                    type="text"
                    id={`${formId}-company`}
                    autoComplete="organization"
                    className="mt-2 block w-full rounded-none border border-line bg-paper-2 px-4 py-3 text-ink focus:border-accent-deep focus:outline-none focus:ring-1 focus:ring-accent-deep"
                  />
                </div>
                <div>
                  <label htmlFor={`${formId}-email`} className="block text-sm font-medium text-ink">
                    Email Address *
                  </label>
                  <input
                    required
                    name="email"
                    type="email"
                    id={`${formId}-email`}
                    autoComplete="email"
                    className="mt-2 block w-full rounded-none border border-line bg-paper-2 px-4 py-3 text-ink focus:border-accent-deep focus:outline-none focus:ring-1 focus:ring-accent-deep"
                  />
                </div>
                <div>
                  <label htmlFor={`${formId}-phone`} className="block text-sm font-medium text-ink">
                    Phone Number *
                  </label>
                  <input
                    required
                    name="phone"
                    type="tel"
                    id={`${formId}-phone`}
                    autoComplete="tel"
                    className="mt-2 block w-full rounded-none border border-line bg-paper-2 px-4 py-3 text-ink focus:border-accent-deep focus:outline-none focus:ring-1 focus:ring-accent-deep"
                  />
                </div>
              </div>
            </div>

            {/* Project Details */}
            <div className="space-y-6 border-t border-line pt-10">
              <h2 className="heading-display text-3xl text-ink">2. Project Details</h2>
              <div className="grid gap-6 sm:grid-cols-2">
                <div className="sm:col-span-2">
                  <label htmlFor={`${formId}-service`} className="block text-sm font-medium text-ink">
                    Primary Service *
                  </label>
                  <select
                    required
                    name="service"
                    id={`${formId}-service`}
                    className="mt-2 block w-full rounded-none border border-line bg-paper-2 px-4 py-3 text-ink focus:border-accent-deep focus:outline-none focus:ring-1 focus:ring-accent-deep"
                    defaultValue=""
                  >
                    <option value="" disabled>
                      Select a service...
                    </option>
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
                  <label htmlFor={`${formId}-quantity`} className="block text-sm font-medium text-ink">
                    Estimated Quantity
                  </label>
                  <input
                    name="quantity"
                    type="text"
                    id={`${formId}-quantity`}
                    className="mt-2 block w-full rounded-none border border-line bg-paper-2 px-4 py-3 text-ink focus:border-accent-deep focus:outline-none focus:ring-1 focus:ring-accent-deep"
                  />
                </div>
                <div>
                  <label htmlFor={`${formId}-budget`} className="block text-sm font-medium text-ink">
                    Approximate Budget
                  </label>
                  <select
                    name="budget"
                    id={`${formId}-budget`}
                    className="mt-2 block w-full rounded-none border border-line bg-paper-2 px-4 py-3 text-ink focus:border-accent-deep focus:outline-none focus:ring-1 focus:ring-accent-deep"
                    defaultValue=""
                  >
                    <option value="">Select a range...</option>
                    <option value="under500">Under $500</option>
                    <option value="500to2500">$500 - $2,500</option>
                    <option value="2500to5000">$2,500 - $5,000</option>
                    <option value="over5000">$5,000+</option>
                    <option value="not_sure">Not sure yet</option>
                  </select>
                </div>
                <div className="sm:col-span-2">
                  <label htmlFor={`${formId}-deadline`} className="block text-sm font-medium text-ink">
                    Desired Completion Date
                  </label>
                  <input
                    name="deadline"
                    type="date"
                    id={`${formId}-deadline`}
                    className="mt-2 block w-full rounded-none border border-line bg-paper-2 px-4 py-3 text-ink focus:border-accent-deep focus:outline-none focus:ring-1 focus:ring-accent-deep"
                  />
                </div>
                <div className="sm:col-span-2">
                  <label htmlFor={`${formId}-description`} className="block text-sm font-medium text-ink">
                    Project Description *
                  </label>
                  <textarea
                    required
                    name="description"
                    id={`${formId}-description`}
                    rows={5}
                    className="mt-2 block w-full rounded-none border border-line bg-paper-2 px-4 py-3 text-ink focus:border-accent-deep focus:outline-none focus:ring-1 focus:ring-accent-deep"
                    placeholder="Tell us about what you need..."
                  />
                </div>
              </div>
            </div>

            {/* Assets — UI only; files are never uploaded */}
            <div className="space-y-6 border-t border-line pt-10">
              <h2 className="heading-display text-3xl text-ink">3. Artwork & Assets</h2>
              <div>
                <label htmlFor={`${formId}-file-upload`} className="block text-sm font-medium text-ink">
                  Upload Artwork (optional)
                </label>
                <p className="mt-1 text-sm text-muted">
                  Vector files (.ai, .eps, .pdf) or high-res images preferred.
                </p>
                <p className="mt-1 text-sm font-medium text-accent-deep">
                  Mock behavior: selecting a file shows the name locally only. Nothing is uploaded.
                </p>
                <div className="mt-3 flex justify-center rounded-none border-2 border-dashed border-line px-6 py-10 transition-colors hover:bg-paper-2">
                  <div className="text-center">
                    <div className="mt-4 flex flex-wrap justify-center text-sm leading-6 text-muted">
                      <label
                        htmlFor={`${formId}-file-upload`}
                        className="relative cursor-pointer rounded-none font-semibold text-accent-deep hover:text-ink focus-within:outline-none focus-within:ring-2 focus-within:ring-accent-deep"
                      >
                        <span>Choose a file</span>
                        <input
                          id={`${formId}-file-upload`}
                          name="artwork"
                          type="file"
                          accept=".ai,.eps,.pdf,.png,.jpg,.jpeg"
                          className="sr-only"
                          onChange={(e) => {
                            const file = e.target.files?.[0];
                            setFileName(file ? file.name : null);
                          }}
                        />
                      </label>
                      <p className="pl-1">to preview mock selection</p>
                    </div>
                    <p className="text-xs leading-5 text-muted">PNG, JPG, PDF up to 10MB (demo UI)</p>
                    {fileName && (
                      <p className="mt-3 text-sm text-ink" aria-live="polite">
                        Selected locally: {fileName}
                      </p>
                    )}
                  </div>
                </div>
              </div>
            </div>

            {/* Preferences */}
            <div className="space-y-6 border-t border-line pt-10">
              <h2 className="heading-display text-3xl text-ink">4. Preferences</h2>
              <fieldset>
                <legend className="text-sm font-medium text-ink">Preferred Contact Method</legend>
                <div className="mt-4 space-y-4 sm:flex sm:items-center sm:space-y-0 sm:space-x-8">
                  <div className="flex items-center">
                    <input
                      id={`${formId}-contact-email`}
                      name="contact-method"
                      type="radio"
                      value="email"
                      defaultChecked
                      className="h-4 w-4 border-line text-accent-deep focus:ring-accent-deep"
                    />
                    <label htmlFor={`${formId}-contact-email`} className="ml-3 block text-sm font-medium text-ink">
                      Email
                    </label>
                  </div>
                  <div className="flex items-center">
                    <input
                      id={`${formId}-contact-phone`}
                      name="contact-method"
                      type="radio"
                      value="phone"
                      className="h-4 w-4 border-line text-accent-deep focus:ring-accent-deep"
                    />
                    <label htmlFor={`${formId}-contact-phone`} className="ml-3 block text-sm font-medium text-ink">
                      Phone call
                    </label>
                  </div>
                  <div className="flex items-center">
                    <input
                      id={`${formId}-contact-text`}
                      name="contact-method"
                      type="radio"
                      value="text"
                      className="h-4 w-4 border-line text-accent-deep focus:ring-accent-deep"
                    />
                    <label htmlFor={`${formId}-contact-text`} className="ml-3 block text-sm font-medium text-ink">
                      Text message
                    </label>
                  </div>
                </div>
              </fieldset>
            </div>

            <div className="border-t border-line pt-10">
              <button
                type="submit"
                disabled={isSubmitting}
                className="inline-flex h-12 w-full items-center justify-center bg-accent px-8 font-display text-base font-semibold uppercase tracking-wide text-ink transition-colors hover:bg-accent-deep hover:text-paper focus:outline-none focus:ring-2 focus:ring-accent-deep focus:ring-offset-2 disabled:opacity-70 sm:w-auto"
              >
                {isSubmitting ? "Submitting..." : "Submit Quote Request"}
              </button>
              <p id={`${formId}-mock-note`} className="mt-6 text-sm text-muted">
                Note: This form is a frontend-only mock for presentation purposes and does not
                submit data to a server.
              </p>
            </div>
          </form>
        </Reveal>
      </div>
    </section>
  );
}
