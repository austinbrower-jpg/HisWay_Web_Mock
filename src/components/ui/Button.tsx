import Link from "next/link";
import { cn } from "@/lib/utils";

type Variant = "primary" | "outline" | "outline-dark" | "ghost";

const base =
  "inline-flex items-center justify-center gap-2 whitespace-nowrap font-display text-base font-semibold uppercase tracking-wide transition-colors duration-200 active:translate-y-px";

const variants: Record<Variant, string> = {
  /** Accent fill with ink label (safety-label contrast); works on paper and ink backgrounds. */
  primary: "bg-accent text-ink hover:bg-accent-deep hover:text-paper",
  /** For dark (ink) backgrounds. */
  outline:
    "border border-paper/40 text-paper hover:border-paper hover:bg-paper hover:text-ink",
  /** For light (paper) backgrounds. */
  "outline-dark":
    "border border-ink/30 text-ink hover:border-ink hover:bg-ink hover:text-paper",
  ghost: "text-ink hover:text-accent-deep",
};

const sizes = {
  md: "h-12 px-6",
  lg: "h-13 px-8 text-lg",
};

interface ButtonLinkProps extends React.ComponentPropsWithoutRef<typeof Link> {
  variant?: Variant;
  size?: keyof typeof sizes;
}

export function ButtonLink({
  variant = "primary",
  size = "md",
  className,
  children,
  ...props
}: ButtonLinkProps) {
  return (
    <Link className={cn(base, variants[variant], sizes[size], className)} {...props}>
      {children}
    </Link>
  );
}

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: Variant;
  size?: keyof typeof sizes;
}

export function Button({
  variant = "primary",
  size = "md",
  className,
  children,
  ...props
}: ButtonProps) {
  return (
    <button className={cn(base, variants[variant], sizes[size], className)} {...props}>
      {children}
    </button>
  );
}
