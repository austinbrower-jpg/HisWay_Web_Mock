import type { ServiceSlug } from "@/types";
import { getMediaById, toPublicImagePath } from "@/data/media-manifest";

export interface ConceptImageSlot {
  mediaId: string;
  src: string;
  alt: string;
  imageClassName?: string;
}

export interface ConceptGalleryTile {
  src: string;
  alt: string;
  mediaId?: string;
  imageClassName?: string;
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

export const conceptGalleryTiles: ConceptGalleryTile[] = [
  makeImageSlot("media-019", "object-center"),
  makeImageSlot("media-007", "object-center"),
  makeImageSlot("media-018", "object-center"),
  makeImageSlot("media-004", "object-[56%_40%]"),
  {
    src: "/images/placeholders/gallery-5.svg",
    alt: "Placeholder 5 for a recent work photo from the shop",
  },
  {
    src: "/images/placeholders/gallery-6.svg",
    alt: "Placeholder 6 for a recent work photo from the shop",
  },
];

export const conceptPreviewMediaNote =
  "Concept preview using provisional media. Final image permissions and project details require owner approval.";
