"use client";

import { useId, useState } from "react";

/**
 * Frontend-only contact mock.
 * Submission is simulated locally — no fetch, no credentials, no backend endpoint.
 */
export function ContactForm() {
  const formId = useId();
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    // MOCK ONLY: never POST. Simulate success for the presentation site.
    setIsSubmitting(true);
    window.setTimeout(() => {
      setIsSubmitting(false);
      setIsSubmitted(true);
    }, 600);
  };

  if (isSubmitted) {
    return (
      <div className="border border-line bg-paper-2 p-8 lg:p-12" aria-live="polite">
        <h2 className="heading-display text-3xl text-ink">Message received</h2>
        <p className="mt-4 text-muted">
          Thanks for reaching out. We&apos;ll get back to you soon.
        </p>
        <p className="mt-2 text-sm text-muted">(Demo only — nothing was sent to a server.)</p>
        <button
          type="button"
          onClick={() => setIsSubmitted(false)}
          className="mt-8 inline-flex h-12 items-center justify-center bg-ink px-6 font-display text-base font-semibold uppercase tracking-wide text-paper transition-colors hover:bg-accent hover:text-ink"
        >
          Send another message
        </button>
      </div>
    );
  }

  return (
    <div className="border border-line bg-paper-2 p-8 lg:p-12">
      <h2 className="heading-display text-3xl text-ink">Send a Message</h2>
      <form
        className="mt-8 space-y-6"
        onSubmit={handleSubmit}
        aria-describedby={`${formId}-mock-note`}
      >
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
              className="mt-2 block w-full rounded-none border border-line bg-paper px-4 py-3 text-ink focus:border-accent-deep focus:outline-none focus:ring-1 focus:ring-accent-deep"
            />
          </div>
          <div>
            <label htmlFor={`${formId}-email`} className="block text-sm font-medium text-ink">
              Email *
            </label>
            <input
              required
              name="email"
              type="email"
              id={`${formId}-email`}
              autoComplete="email"
              className="mt-2 block w-full rounded-none border border-line bg-paper px-4 py-3 text-ink focus:border-accent-deep focus:outline-none focus:ring-1 focus:ring-accent-deep"
            />
          </div>
        </div>
        <div>
          <label htmlFor={`${formId}-message`} className="block text-sm font-medium text-ink">
            Message *
          </label>
          <textarea
            required
            name="message"
            id={`${formId}-message`}
            rows={5}
            className="mt-2 block w-full rounded-none border border-line bg-paper px-4 py-3 text-ink focus:border-accent-deep focus:outline-none focus:ring-1 focus:ring-accent-deep"
          />
        </div>
        <div>
          <button
            type="submit"
            disabled={isSubmitting}
            className="inline-flex h-12 items-center justify-center bg-ink px-8 font-display text-base font-semibold uppercase tracking-wide text-paper transition-colors hover:bg-accent hover:text-ink focus:outline-none focus:ring-2 focus:ring-accent-deep focus:ring-offset-2 disabled:opacity-70"
          >
            {isSubmitting ? "Sending..." : "Send Message"}
          </button>
          <p id={`${formId}-mock-note`} className="mt-4 text-xs text-muted">
            Note: This is a frontend mock and does not submit data to a server.
          </p>
        </div>
      </form>
    </div>
  );
}
