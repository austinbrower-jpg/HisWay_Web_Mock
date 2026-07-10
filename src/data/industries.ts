import type { Industry } from "@/types";

/**
 * Industries served. Structured so each entry can later grow into its own
 * SEO landing page (/industries/[slug]) without reshaping the data.
 */
export const industries: Industry[] = [
  {
    slug: "restaurants",
    name: "Restaurants",
    icon: "utensils",
    description:
      "Menus, storefront signage, staff shirts, and to-go stickers that keep your name on the table and out the door.",
    commonNeeds: ["Storefront and window signage", "Staff tees and aprons", "Menu boards and printed menus", "Packaging stickers"],
  },
  {
    slug: "construction-trades",
    name: "Construction & Trades",
    icon: "hardhat",
    description:
      "Truck lettering, jobsite signs, and crew shirts that make sure the neighborhood knows who is doing the work.",
    commonNeeds: ["Vehicle lettering and wraps", "Jobsite and yard signs", "Crew shirts and safety apparel", "Equipment decals"],
  },
  {
    slug: "schools-teams",
    name: "Schools & Teams",
    icon: "graduation",
    description:
      "Spirit wear, team uniforms, banners, and fundraiser merch for campuses, boosters, and leagues.",
    commonNeeds: ["Spirit wear and team tees", "Gym and field banners", "Fundraiser merchandise", "Award and event signage"],
  },
  {
    slug: "churches",
    name: "Churches",
    icon: "church",
    description:
      "Wayfinding, event banners, volunteer tees, and welcome materials for congregations and outreach events.",
    commonNeeds: ["Interior and exterior signage", "Event and sermon-series banners", "Volunteer and staff apparel", "Outreach giveaways"],
  },
  {
    slug: "apartment-communities",
    name: "Apartment Communities",
    icon: "building",
    description:
      "Leasing signage, wayfinding, and resident event materials that keep a property looking managed and welcoming.",
    commonNeeds: ["Leasing and monument signage", "Pool and amenity signs", "Resident event banners", "Staff polos"],
  },
  {
    slug: "corporate-offices",
    name: "Corporate Offices",
    icon: "briefcase",
    description:
      "Lobby signs, branded apparel, and employee gifts that make the brand as visible inside as it is to customers.",
    commonNeeds: ["Lobby and conference room signage", "Embroidered polos and outerwear", "Onboarding and employee gifts", "Trade show materials"],
  },
  {
    slug: "retail",
    name: "Retail",
    icon: "store",
    description:
      "Window graphics, promotional signage, and branded bags that pull people in and send your name home with them.",
    commonNeeds: ["Window and floor graphics", "Sale and promotional signage", "Branded bags and packaging", "Staff apparel"],
  },
  {
    slug: "events-nonprofits",
    name: "Events & Nonprofits",
    icon: "calendar",
    description:
      "Banners, volunteer shirts, and giveaway merch for fundraisers, festivals, and community campaigns.",
    commonNeeds: ["Event and sponsor banners", "Volunteer tees", "Directional signage", "Giveaway merchandise"],
  },
];

export function getIndustry(slug: string): Industry | undefined {
  return industries.find((i) => i.slug === slug);
}
