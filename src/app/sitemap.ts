import type { MetadataRoute } from "next";
import { company } from "@/data/company";
import { services } from "@/data/services";
import { projects } from "@/data/projects";

/**
 * Concept mode returns an empty sitemap so the preview is not exposed as an
 * indexable production sitemap. Production mode builds the full route map.
 */
export default function sitemap(): MetadataRoute.Sitemap {
  if (company.isConceptSite) {
    return [];
  }

  const staticRoutes = [
    "",
    "/services",
    "/work",
    "/reviews",
    "/promotional-products",
    "/industries",
    "/about",
    "/quote",
    "/contact",
  ].map((path) => ({
    url: `${company.siteUrl}${path}`,
    changeFrequency: "monthly" as const,
    priority: path === "" ? 1 : 0.8,
  }));

  const serviceRoutes = services.map((service) => ({
    url: `${company.siteUrl}/services/${service.slug}`,
    changeFrequency: "monthly" as const,
    priority: 0.7,
  }));

  const projectRoutes = projects.map((project) => ({
    url: `${company.siteUrl}/work/${project.slug}`,
    changeFrequency: "monthly" as const,
    priority: 0.6,
  }));

  return [...staticRoutes, ...serviceRoutes, ...projectRoutes];
}
