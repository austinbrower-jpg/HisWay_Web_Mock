import type { Project, ProjectCategory } from "@/types";

/**
 * PLACEHOLDER PORTFOLIO.
 * These six projects are realistic but intentionally anonymous: no customer
 * names, no fabricated results. Replace the copy and the placeholder images
 * in /public/images/projects with real HisWay projects and photography.
 */
export const projects: Project[] = [
  {
    slug: "storefront-signage-local-business",
    title: "Custom storefront signage for a local business",
    category: "Signs",
    summary:
      "A complete storefront signage package: primary building sign, window lettering, and door graphics designed to read clearly from the street.",
    challenge:
      "The business was moving into a new location with no exterior branding. The sign had to work within the property's signage rules while standing out from neighboring storefronts.",
    solution:
      "We designed a signage package around the existing logo, produced the primary sign and supporting window graphics, and coordinated the installation so the storefront was ready for opening day.",
    servicesUsed: ["custom-signs", "graphic-design-content"],
    cover: {
      src: "/images/projects/storefront-signage-cover.svg",
      alt: "Placeholder for a photo of a completed storefront sign installation",
    },
    images: [
      {
        src: "/images/projects/storefront-signage-detail-1.svg",
        alt: "Placeholder for a photo of the sign during fabrication",
      },
      {
        src: "/images/projects/storefront-signage-detail-2.svg",
        alt: "Placeholder for a photo of the installed sign at night",
      },
    ],
    related: ["vehicle-graphics-local-contractor", "event-banners-directional-signage"],
    featured: true,
  },
  {
    slug: "branded-work-shirts-service-company",
    title: "Branded work shirts for a service company",
    category: "Apparel",
    summary:
      "Screen-printed crew shirts in multiple sizes and styles, built to survive daily jobsite wear while keeping the brand consistent.",
    challenge:
      "The crew needed durable everyday shirts, and earlier orders from another vendor had come back with inconsistent print quality and colors that did not match the company's branding.",
    solution:
      "We standardized the artwork, matched inks to the brand colors, and printed on garments chosen for daily wear. The approved proof and print specs are kept on file so reorders match.",
    servicesUsed: ["screen-printing-apparel", "graphic-design-content"],
    cover: {
      src: "/images/projects/work-shirts-cover.svg",
      alt: "Placeholder for a photo of screen-printed work shirts",
    },
    images: [
      {
        src: "/images/projects/work-shirts-detail-1.svg",
        alt: "Placeholder for a close-up photo of the screen print",
      },
      {
        src: "/images/projects/work-shirts-detail-2.svg",
        alt: "Placeholder for a photo of the folded shirt order",
      },
    ],
    related: ["embroidered-polos-professional-team", "promotional-merch-community-event"],
    featured: true,
  },
  {
    slug: "vehicle-graphics-local-contractor",
    title: "Vehicle graphics for a local contractor",
    category: "Vehicles",
    summary:
      "Truck lettering and door logos that turned a plain work truck into a moving advertisement for the business.",
    challenge:
      "The contractor's truck was unmarked, which meant every jobsite visit and every mile driven was a missed chance to be recognized and contacted.",
    solution:
      "We designed a layout around the truck's body lines with the company name, services, and phone number sized for readability in traffic, then installed the graphics at our shop.",
    servicesUsed: ["vehicle-graphics", "graphic-design-content"],
    cover: {
      src: "/images/projects/vehicle-graphics-cover.svg",
      alt: "Placeholder for a photo of a lettered contractor truck",
    },
    images: [
      {
        src: "/images/projects/vehicle-graphics-detail-1.svg",
        alt: "Placeholder for a photo of door lettering detail",
      },
      {
        src: "/images/projects/vehicle-graphics-detail-2.svg",
        alt: "Placeholder for a photo of the finished vehicle lineup",
      },
    ],
    related: ["storefront-signage-local-business", "branded-work-shirts-service-company"],
    featured: true,
  },
  {
    slug: "event-banners-directional-signage",
    title: "Event banners and directional signage",
    category: "Banners",
    summary:
      "A coordinated set of banners and directional signs that guided attendees through a multi-area event.",
    challenge:
      "The event spread across several areas, and attendees needed to find parking, registration, and venues without staff repeating directions all day.",
    solution:
      "We produced a matched family of entrance banners and directional signs with consistent colors and arrows, sized so each decision point was readable at a distance.",
    servicesUsed: ["banners-decals-stickers", "graphic-design-content"],
    cover: {
      src: "/images/projects/event-banners-cover.svg",
      alt: "Placeholder for a photo of event banners on site",
    },
    images: [
      {
        src: "/images/projects/event-banners-detail-1.svg",
        alt: "Placeholder for a photo of directional signage",
      },
      {
        src: "/images/projects/event-banners-detail-2.svg",
        alt: "Placeholder for a close-up photo of banner finishing",
      },
    ],
    related: ["promotional-merch-community-event", "storefront-signage-local-business"],
  },
  {
    slug: "embroidered-polos-professional-team",
    title: "Embroidered polos for a professional team",
    category: "Embroidery",
    summary:
      "Left-chest embroidered polos that gave a client-facing team a consistent, professional look.",
    challenge:
      "The team met clients daily but dressed inconsistently, and the logo's fine detail needed adjustment to stitch cleanly at left-chest size.",
    solution:
      "We digitized the logo for embroidery, ran a sew-out for approval, and produced polos in the team's sizes with consistent placement across every garment.",
    servicesUsed: ["embroidery"],
    cover: {
      src: "/images/projects/embroidered-polos-cover.svg",
      alt: "Placeholder for a photo of embroidered polos",
    },
    images: [
      {
        src: "/images/projects/embroidered-polos-detail-1.svg",
        alt: "Placeholder for a close-up photo of the stitched logo",
      },
      {
        src: "/images/projects/embroidered-polos-detail-2.svg",
        alt: "Placeholder for a photo of the finished polo order",
      },
    ],
    related: ["branded-work-shirts-service-company", "vehicle-graphics-local-contractor"],
  },
  {
    slug: "promotional-merch-community-event",
    title: "Promotional merchandise for a community event",
    category: "Promotional Products",
    summary:
      "Event tees, drinkware, and giveaway items sourced and branded as one coordinated package.",
    challenge:
      "The organizers needed merchandise at several price points, from free handouts to items worth selling, all ready before the event date.",
    solution:
      "We built a tiered package from our catalog: budget giveaways for foot traffic, tees for volunteers, and drinkware for sale, all carrying the same event artwork.",
    servicesUsed: ["promotional-products", "screen-printing-apparel"],
    cover: {
      src: "/images/projects/community-merch-cover.svg",
      alt: "Placeholder for a photo of event merchandise",
    },
    images: [
      {
        src: "/images/projects/community-merch-detail-1.svg",
        alt: "Placeholder for a photo of the merchandise table",
      },
      {
        src: "/images/projects/community-merch-detail-2.svg",
        alt: "Placeholder for a close-up photo of branded drinkware",
      },
    ],
    related: ["event-banners-directional-signage", "branded-work-shirts-service-company"],
  },
];

export const projectCategories: ProjectCategory[] = [
  "Signs",
  "Apparel",
  "Embroidery",
  "Vehicles",
  "Banners",
  "Promotional Products",
];

export function getProject(slug: string): Project | undefined {
  return projects.find((p) => p.slug === slug);
}

export function getProjects(slugs: string[]): Project[] {
  return slugs
    .map((slug) => getProject(slug))
    .filter((p): p is Project => Boolean(p));
}

export function getFeaturedProjects(): Project[] {
  return projects.filter((p) => p.featured);
}
