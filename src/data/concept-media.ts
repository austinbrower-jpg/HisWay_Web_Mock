import type { ServiceSlug } from "@/types";
import { getMediaById, toPublicImagePath } from "@/data/media-manifest";

export interface ConceptImageSlot {
  mediaId: string;
  src: string;
  alt: string;
  imageClassName?: string;
}

/**
 * A Selected Work & Process card on /work.
 *
 * These are capability/process cards, not customer case studies. Labels and
 * copy must describe what the photograph actually shows and must never imply
 * a named customer project, since no customer-work photography is approved.
 */
export interface ConceptWorkCard extends ConceptImageSlot {
  label: string;
  description: string;
}

function requireConceptMedia(id: string) {
  const media = getMediaById(id);
  if (!media) {
    throw new Error(`Unknown media manifest entry: ${id}`);
  }
  if (!media.conceptUseApproved) {
    throw new Error(`Media ${id} is not approved for concept-only use.`);
  }
  return media;
}

function makeImageSlot(id: string, imageClassName?: string): ConceptImageSlot {
  const media = requireConceptMedia(id);
  return {
    mediaId: id,
    src: toPublicImagePath(media.proposedDestination),
    alt: media.conceptAltText ?? media.notes[0] ?? media.originalFilename,
    imageClassName,
  };
}

export const conceptHomepageHero = makeImageSlot(
  "media-004",
  "object-[58%_42%] md:object-[54%_40%] lg:object-[56%_40%]",
);

export const conceptAboutWorkshop = makeImageSlot("media-019", "object-center");

export const conceptServiceHeroMedia: Partial<Record<ServiceSlug, ConceptImageSlot>> = {
  embroidery: makeImageSlot("media-004", "object-[56%_38%] md:object-[54%_40%]"),
};

export const conceptGalleryTiles: ConceptImageSlot[] = [
  makeImageSlot("media-019", "object-center"),
  makeImageSlot("media-007", "object-center"),
  makeImageSlot("media-018", "object-center"),
  makeImageSlot("media-004", "object-[56%_40%]"),
];

/**
 * /work cards. Square crops keep the three 414x414 sources at their native
 * aspect so nothing is enlarged past what the export can carry.
 */
export const conceptWorkCards: ConceptWorkCard[] = [
  {
    ...makeImageSlot("media-019", "object-center"),
    label: "Screen Printing",
    description: "Manual carousel press set up for a garment run.",
  },
  {
    ...makeImageSlot("media-007", "object-center"),
    label: "In-Shop Craftsmanship",
    description: "Ink mixed and matched by hand before the first pull.",
  },
  {
    ...makeImageSlot("media-018", "object-center"),
    label: "Apparel Production",
    description: "Finished orders folded, counted, and boxed for pickup.",
  },
  {
    ...makeImageSlot("media-004", "object-[56%_40%]"),
    label: "Embroidery Detail",
    description: "Stitched detail on HisWay's own embroidered goods.",
  },
];

export const conceptPreviewMediaNote =
  "Concept preview using provisional media. Final image permissions and project details require owner approval.";
