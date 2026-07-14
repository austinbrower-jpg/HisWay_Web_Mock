import { cn } from "@/lib/utils";

type BrandLogoVariant = "horizontal" | "horizontal-white" | "badge";

const logos = {
  horizontal: {
    src: "/images/brand/hisway-horizontal-logo.webp",
    width: 1500,
    height: 947,
    alt: "HisWay Press or Print",
  },
  "horizontal-white": {
    src: "/images/brand/hisway-horizontal-logo-white.webp",
    width: 1500,
    height: 947,
    alt: "HisWay Press or Print",
  },
  badge: {
    src: "/images/brand/hisway-badge-logo.webp",
    width: 500,
    height: 500,
    alt: "HisWay Press or Print badge logo",
  },
} as const;

interface BrandLogoProps {
  variant: BrandLogoVariant;
  className?: string;
  preload?: boolean;
}

/**
 * Shared brand logo renderer.
 *
 * Logos are served from public/ without Next image optimization so the
 * owner-provided artwork stays pixel-for-pixel faithful in the UI.
 */
/* eslint-disable @next/next/no-img-element */
export function BrandLogo({ variant, className, preload = false }: BrandLogoProps) {
  const logo = logos[variant];

  return (
    <img
      src={logo.src}
      alt={logo.alt}
      width={logo.width}
      height={logo.height}
      loading={preload ? "eager" : "lazy"}
      fetchPriority={preload ? "high" : "auto"}
      decoding="async"
      draggable="false"
      className={cn("block object-contain", className)}
    />
  );
}
