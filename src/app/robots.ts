import type { MetadataRoute } from "next";
import { company } from "@/data/company";

/**
 * While the concept site is active, disallow all crawlers so this preview
 * does not compete with the live HisWay website in search results.
 * Flip `company.isConceptSite` to false after approval to allow indexing.
 */
export default function robots(): MetadataRoute.Robots {
  if (company.isConceptSite) {
    return {
      rules: {
        userAgent: "*",
        disallow: "/",
      },
    };
  }

  return {
    rules: {
      userAgent: "*",
      allow: "/",
    },
    sitemap: `${company.siteUrl}/sitemap.xml`,
  };
}
