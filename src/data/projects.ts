import type { Project } from "@/types";

/**
 * PORTFOLIO PROJECTS — intentionally empty for the client preview.
 *
 * This file previously held six anonymous placeholder projects whose cover and
 * detail images were grey SVG placeholder art. Nothing in the media manifest is
 * approved for use as customer-work photography (every entry is
 * publicUseApproved: false, and the customer-supplied artwork shots also carry
 * needs-customer-permission), so there was no honest way to illustrate them.
 * Showing empty grey grids under "Our Work" read as unfinished, so the
 * placeholder projects were removed and /work now presents approved in-house
 * process photography under capability labels instead.
 *
 * Consumers degrade gracefully on an empty list:
 * - services/[slug] hides its "Related work" section (relatedProjects.length > 0)
 * - the /work/[slug] detail route was removed along with the placeholder data
 *
 * The removed placeholder copy is recoverable from git history (see the commit
 * that introduced fix/pre-client-visual-polish).
 *
 * To restore a real portfolio post-sale:
 * 1. Photograph completed work and log each asset in media-manifest.ts.
 * 2. Obtain and record customer permission; set publicUseApproved once granted.
 * 3. Add Project entries here and re-add a /work/[slug] detail route.
 *
 * Do not invent customer names, results, dates, or permissions.
 */
export const projects: Project[] = [];

export function getProject(slug: string): Project | undefined {
  return projects.find((p) => p.slug === slug);
}

export function getProjects(slugs: string[]): Project[] {
  return slugs
    .map((slug) => getProject(slug))
    .filter((p): p is Project => Boolean(p));
}
