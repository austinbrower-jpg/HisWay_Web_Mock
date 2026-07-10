import { cn } from "@/lib/utils";

interface SectionHeadingProps {
  title: string;
  lead?: string;
  /** Set when the section sits on an ink (dark) background. */
  dark?: boolean;
  className?: string;
}

/** Standard section header: stacked headline + optional lead, left-aligned. */
export function SectionHeading({ title, lead, dark = false, className }: SectionHeadingProps) {
  return (
    <div className={cn("max-w-2xl", className)}>
      <h2
        className={cn(
          "heading-display text-4xl sm:text-5xl",
          dark ? "text-paper" : "text-ink",
        )}
      >
        {title}
      </h2>
      {lead && (
        <p className={cn("mt-4 text-lg leading-relaxed", dark ? "text-muted-dark" : "text-muted")}>
          {lead}
        </p>
      )}
    </div>
  );
}
