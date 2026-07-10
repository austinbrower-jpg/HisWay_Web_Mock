import Image from "next/image";
import { cn } from "@/lib/utils";

interface PhotoFrameProps {
  src: string;
  alt: string;
  /** Tailwind aspect class, e.g. "aspect-[4/3]". */
  aspect?: string;
  sizes?: string;
  priority?: boolean;
  /** Print-proof crop marks on the corners. Use sparingly (hero, about). */
  marks?: boolean;
  className?: string;
}

/**
 * Standard image frame. Placeholder art is local SVG (rendered unoptimized);
 * swapping in real photography at the same path re-enables optimization.
 */
export function PhotoFrame({
  src,
  alt,
  aspect = "aspect-[4/3]",
  sizes = "(min-width: 1024px) 50vw, 100vw",
  priority = false,
  marks = false,
  className,
}: PhotoFrameProps) {
  const isSvg = src.endsWith(".svg");
  return (
    <div className={cn("relative", className)}>
      <div className={cn("relative overflow-hidden bg-paper-2", aspect)}>
        <Image
          src={src}
          alt={alt}
          fill
          sizes={sizes}
          priority={priority}
          unoptimized={isSvg}
          className="object-cover"
        />
      </div>
      {marks && (
        <div aria-hidden="true">
          <span className="absolute -top-2 -left-2 h-4 w-4 border-t-2 border-l-2 border-accent" />
          <span className="absolute -top-2 -right-2 h-4 w-4 border-t-2 border-r-2 border-accent" />
          <span className="absolute -bottom-2 -left-2 h-4 w-4 border-b-2 border-l-2 border-accent" />
          <span className="absolute -right-2 -bottom-2 h-4 w-4 border-r-2 border-b-2 border-accent" />
        </div>
      )}
    </div>
  );
}
