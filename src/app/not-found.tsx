import { ButtonLink } from "@/components/ui/Button";

export default function NotFound() {
  return (
    <section className="bg-ink py-24 text-paper lg:py-32">
      <div className="container-site max-w-2xl">
        <p className="font-mono text-sm tracking-[0.2em] text-accent uppercase">Error 404</p>
        <h1 className="heading-display mt-4 text-6xl sm:text-7xl">
          This page didn&apos;t make it to print.
        </h1>
        <p className="mt-5 text-lg leading-relaxed text-muted-dark">
          The address may have changed or never existed. Everything else is still on the press.
        </p>
        <div className="mt-9 flex flex-wrap gap-4">
          <ButtonLink href="/" variant="primary">
            Back to Home
          </ButtonLink>
          <ButtonLink href="/work" variant="outline">
            View Our Work
          </ButtonLink>
        </div>
      </div>
    </section>
  );
}
