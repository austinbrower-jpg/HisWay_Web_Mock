export type MediaCategory =
  | "brand"
  | "hero"
  | "shop"
  | "team"
  | "custom-signs"
  | "screen-printing-apparel"
  | "embroidery"
  | "vehicle-graphics"
  | "banners-decals-stickers"
  | "promotional-products"
  | "graphic-design-content"
  | "social-only"
  | "low-quality"
  | "duplicate"
  | "unknown"
  | "archive";

export type MediaOrientation = "landscape" | "portrait" | "square" | "panoramic";

export type MediaQuality =
  | "strong"
  | "usable-with-crop"
  | "usable-small-only"
  | "low-quality";

export type MediaApprovalStatus =
  | "needs-owner-confirmation"
  | "needs-customer-permission"
  | "social-only-not-approved"
  | "archive-only";

export interface MediaManifestItem {
  id: string;
  originalFilename: string;
  originalPath: string;
  extension: ".jpg" | ".png";
  proposedFilename: string;
  proposedDestination: string;
  category: MediaCategory;
  subject: string[];
  orientation: MediaOrientation;
  width: number;
  height: number;
  aspectRatio: number;
  fileSize: number;
  quality: MediaQuality;
  likelyUses: string[];
  duplicateGroup: string | null;
  containsPeople: boolean;
  containsLicensePlate: boolean;
  containsPhoneNumber: boolean;
  containsAddress: boolean;
  containsCustomerLogo: boolean;
  conceptUseApproved: boolean;
  conceptUseNotes: string[];
  publicUseApproved: boolean;
  publicUseNotes: string[];
  approvalStatus: MediaApprovalStatus;
  liveConceptPlacements: string[];
  conceptCropNotes: string[];
  conceptAltText: string | null;
  notes: string[];
}

const mediaManifestBase = [
  {
    id: "media-001",
    originalFilename: "239770896_375182784115114_3637560870964266350_n.png",
    originalPath:
      "Branding/images/intake/originals/239770896_375182784115114_3637560870964266350_n.png",
    extension: ".png",
    proposedFilename: "hisway-press-or-print-logo-square.png",
    proposedDestination: "public/images/brand/hisway-press-or-print-logo-square.png",
    category: "brand",
    subject: ["logo", "brand mark"],
    orientation: "square",
    width: 882,
    height: 882,
    aspectRatio: 1,
    fileSize: 58023,
    quality: "strong",
    likelyUses: ["brand library", "press kit", "social avatar fallback"],
    duplicateGroup: null,
    containsPeople: false,
    containsLicensePlate: false,
    containsPhoneNumber: false,
    containsAddress: false,
    containsCustomerLogo: false,
    publicUseApproved: false,
    approvalStatus: "needs-owner-confirmation",
    notes: [
      "Primary square logo lockup on white.",
      "Staged as a low-risk brand asset copy for future review.",
      "No explicit approval documentation was found in the repository.",
    ],
  },
  {
    id: "media-002",
    originalFilename: "465951913_18058193854850432_8798094120774455540_n.jpg",
    originalPath:
      "Branding/images/intake/originals/465951913_18058193854850432_8798094120774455540_n.jpg",
    extension: ".jpg",
    proposedFilename: "messiah-tee-detail.jpg",
    proposedDestination: "public/images/projects/screen-printing-apparel/messiah-tee-detail.jpg",
    category: "screen-printing-apparel",
    subject: ["shirt", "apparel detail"],
    orientation: "square",
    width: 414,
    height: 414,
    aspectRatio: 1,
    fileSize: 28437,
    quality: "usable-small-only",
    likelyUses: ["project detail", "apparel gallery tile", "social recap"],
    duplicateGroup: "apparel-detail-sequence",
    containsPeople: false,
    containsLicensePlate: false,
    containsPhoneNumber: false,
    containsAddress: false,
    containsCustomerLogo: true,
    publicUseApproved: false,
    approvalStatus: "needs-customer-permission",
    notes: [
      "Artwork ownership is unclear.",
      "Small social-export resolution limits this to detail placement only.",
    ],
  },
  {
    id: "media-003",
    originalFilename: "467842949_18059811370850432_159304252917080397_n.jpg",
    originalPath:
      "Branding/images/intake/originals/467842949_18059811370850432_159304252917080397_n.jpg",
    extension: ".jpg",
    proposedFilename: "support-local-boxer-tee-flatlay.jpg",
    proposedDestination: "public/images/archive/support-local-boxer-tee-flatlay.jpg",
    category: "archive",
    subject: ["shirt", "brand merch", "illustrated flatlay"],
    orientation: "square",
    width: 414,
    height: 414,
    aspectRatio: 1,
    fileSize: 35598,
    quality: "usable-small-only",
    likelyUses: ["brand archive", "social history"],
    duplicateGroup: null,
    containsPeople: false,
    containsLicensePlate: false,
    containsPhoneNumber: true,
    containsAddress: false,
    containsCustomerLogo: false,
    publicUseApproved: false,
    approvalStatus: "needs-owner-confirmation",
    notes: [
      "Visible phone number is baked into the shirt art.",
      "Better kept as archive material than live-site imagery.",
    ],
  },
  {
    id: "media-004",
    originalFilename: "469543024_1128302292136489_734418222008985039_n.jpg",
    originalPath:
      "Branding/images/intake/originals/469543024_1128302292136489_734418222008985039_n.jpg",
    extension: ".jpg",
    proposedFilename: "hisway-brand-textile-closeup.webp",
    proposedDestination: "public/images/shop/hisway-brand-textile-closeup.webp",
    category: "hero",
    subject: ["brand textile", "embroidery detail"],
    orientation: "landscape",
    width: 2048,
    height: 1365,
    aspectRatio: 1.5004,
    fileSize: 294683,
    quality: "strong",
    likelyUses: ["about hero", "brand support image", "shop story feature"],
    duplicateGroup: null,
    containsPeople: false,
    containsLicensePlate: false,
    containsPhoneNumber: false,
    containsAddress: false,
    containsCustomerLogo: false,
    publicUseApproved: false,
    approvalStatus: "needs-owner-confirmation",
    notes: [
      "Only landscape source in the intake set.",
      "Best overall website-story candidate, but still undocumented for public use.",
      "A staged owner-review copy was created.",
    ],
  },
  {
    id: "media-005",
    originalFilename: "481197785_18069305080850432_3283863818351243536_n.jpg",
    originalPath:
      "Branding/images/intake/originals/481197785_18069305080850432_3283863818351243536_n.jpg",
    extension: ".jpg",
    proposedFilename: "endure-athletics-order-packout.jpg",
    proposedDestination:
      "public/images/projects/screen-printing-apparel/endure-athletics-order-packout.jpg",
    category: "screen-printing-apparel",
    subject: ["shirt", "customer pickup", "order packing"],
    orientation: "square",
    width: 414,
    height: 414,
    aspectRatio: 1,
    fileSize: 19651,
    quality: "usable-small-only",
    likelyUses: ["project detail", "fulfillment story tile", "social recap"],
    duplicateGroup: "boxed-order-sequence",
    containsPeople: false,
    containsLicensePlate: false,
    containsPhoneNumber: false,
    containsAddress: false,
    containsCustomerLogo: true,
    publicUseApproved: false,
    approvalStatus: "needs-customer-permission",
    notes: [
      "Visible customer branding on the garment.",
      "Hands are visible, but no identifiable face is present.",
    ],
  },
  {
    id: "media-006",
    originalFilename: "486395659_1205773488222680_7840060350057974117_n.jpg",
    originalPath:
      "Branding/images/intake/originals/486395659_1205773488222680_7840060350057974117_n.jpg",
    extension: ".jpg",
    proposedFilename: "screen-printing-squeegee-in-action.jpg",
    proposedDestination: "public/images/shop/screen-printing-squeegee-in-action.jpg",
    category: "shop",
    subject: ["production", "screen-printing press", "workshop"],
    orientation: "square",
    width: 414,
    height: 414,
    aspectRatio: 1,
    fileSize: 20876,
    quality: "usable-with-crop",
    likelyUses: ["about page support image", "recent gallery tile", "services process detail"],
    duplicateGroup: "shop-process-sequence",
    containsPeople: true,
    containsLicensePlate: false,
    containsPhoneNumber: false,
    containsAddress: false,
    containsCustomerLogo: false,
    publicUseApproved: false,
    approvalStatus: "needs-owner-confirmation",
    notes: [
      "Recognizable person in frame.",
      "Useful process shot once owner confirms publication is okay.",
    ],
  },
  {
    id: "media-007",
    originalFilename: "487208238_1207141951419167_733478172312361133_n.jpg",
    originalPath:
      "Branding/images/intake/originals/487208238_1207141951419167_733478172312361133_n.jpg",
    extension: ".jpg",
    proposedFilename: "screen-printing-ink-closeup.webp",
    proposedDestination: "public/images/shop/screen-printing-ink-closeup.webp",
    category: "shop",
    subject: ["production", "ink", "process detail"],
    orientation: "square",
    width: 414,
    height: 414,
    aspectRatio: 1,
    fileSize: 26370,
    quality: "strong",
    likelyUses: ["services process image", "shop gallery tile", "texture accent"],
    duplicateGroup: "shop-process-sequence",
    containsPeople: false,
    containsLicensePlate: false,
    containsPhoneNumber: false,
    containsAddress: false,
    containsCustomerLogo: false,
    publicUseApproved: false,
    approvalStatus: "needs-owner-confirmation",
    notes: [
      "Low-risk process image.",
      "A staged owner-review copy was created.",
    ],
  },
  {
    id: "media-008",
    originalFilename: "487436078_1206337194832976_6951604778239930877_n.jpg",
    originalPath:
      "Branding/images/intake/originals/487436078_1206337194832976_6951604778239930877_n.jpg",
    extension: ".jpg",
    proposedFilename: "content-capture-behind-the-scenes.jpg",
    proposedDestination: "public/images/social/content-capture-behind-the-scenes.jpg",
    category: "graphic-design-content",
    subject: ["team", "content capture", "production"],
    orientation: "square",
    width: 414,
    height: 414,
    aspectRatio: 1,
    fileSize: 24441,
    quality: "usable-with-crop",
    likelyUses: ["design-content page", "social case study", "process gallery"],
    duplicateGroup: "content-capture-sequence",
    containsPeople: true,
    containsLicensePlate: false,
    containsPhoneNumber: false,
    containsAddress: false,
    containsCustomerLogo: false,
    publicUseApproved: false,
    approvalStatus: "needs-owner-confirmation",
    notes: [
      "Recognizable person in frame.",
      "Best treated as supporting process content, not a primary website image.",
    ],
  },
  {
    id: "media-009",
    originalFilename: "487563999_1210502421083120_5456987941463085265_n.jpg",
    originalPath:
      "Branding/images/intake/originals/487563999_1210502421083120_5456987941463085265_n.jpg",
    extension: ".jpg",
    proposedFilename: "remember-threads-social-quote.jpg",
    proposedDestination: "public/images/social/remember-threads-social-quote.jpg",
    category: "social-only",
    subject: ["social post", "quote card"],
    orientation: "square",
    width: 414,
    height: 414,
    aspectRatio: 1,
    fileSize: 32481,
    quality: "usable-small-only",
    likelyUses: ["social archive"],
    duplicateGroup: "threads-social-series",
    containsPeople: false,
    containsLicensePlate: false,
    containsPhoneNumber: false,
    containsAddress: false,
    containsCustomerLogo: false,
    publicUseApproved: false,
    approvalStatus: "social-only-not-approved",
    notes: [
      "Embedded ChatGPT attribution makes this a poor fit for core website placement.",
      "Useful only as a record of prior social content.",
    ],
  },
  {
    id: "media-010",
    originalFilename: "488448379_1210502141083148_4604369069897572128_n.jpg",
    originalPath:
      "Branding/images/intake/originals/488448379_1210502141083148_4604369069897572128_n.jpg",
    extension: ".jpg",
    proposedFilename: "threads-screen-printing-brand-tip.jpg",
    proposedDestination: "public/images/social/threads-screen-printing-brand-tip.jpg",
    category: "social-only",
    subject: ["social post", "Threads tip"],
    orientation: "square",
    width: 414,
    height: 414,
    aspectRatio: 1,
    fileSize: 29304,
    quality: "usable-small-only",
    likelyUses: ["social archive"],
    duplicateGroup: "threads-social-series",
    containsPeople: false,
    containsLicensePlate: false,
    containsPhoneNumber: false,
    containsAddress: false,
    containsCustomerLogo: false,
    publicUseApproved: false,
    approvalStatus: "social-only-not-approved",
    notes: [
      "Informational social graphic rather than photographic website media.",
    ],
  },
  {
    id: "media-011",
    originalFilename: "488656198_1210795287720500_1267957444844284776_n.jpg",
    originalPath:
      "Branding/images/intake/originals/488656198_1210795287720500_1267957444844284776_n.jpg",
    extension: ".jpg",
    proposedFilename: "threads-highlight-products-tip.jpg",
    proposedDestination: "public/images/social/threads-highlight-products-tip.jpg",
    category: "social-only",
    subject: ["social post", "Threads tip"],
    orientation: "square",
    width: 414,
    height: 414,
    aspectRatio: 1,
    fileSize: 40361,
    quality: "usable-small-only",
    likelyUses: ["social archive"],
    duplicateGroup: "threads-social-series",
    containsPeople: false,
    containsLicensePlate: false,
    containsPhoneNumber: false,
    containsAddress: false,
    containsCustomerLogo: false,
    publicUseApproved: false,
    approvalStatus: "social-only-not-approved",
    notes: [
      "Useful as a social-history record, not as website photography.",
    ],
  },
  {
    id: "media-012",
    originalFilename: "492302932_1230937602372935_7867351836082741973_n.jpg",
    originalPath:
      "Branding/images/intake/originals/492302932_1230937602372935_7867351836082741973_n.jpg",
    extension: ".jpg",
    proposedFilename: "cowboy-skull-shirt-detail.jpg",
    proposedDestination:
      "public/images/projects/screen-printing-apparel/cowboy-skull-shirt-detail.jpg",
    category: "screen-printing-apparel",
    subject: ["shirt", "apparel detail"],
    orientation: "square",
    width: 414,
    height: 414,
    aspectRatio: 1,
    fileSize: 26599,
    quality: "usable-small-only",
    likelyUses: ["apparel project detail", "social recap", "small gallery tile"],
    duplicateGroup: "apparel-detail-sequence",
    containsPeople: false,
    containsLicensePlate: false,
    containsPhoneNumber: false,
    containsAddress: false,
    containsCustomerLogo: true,
    publicUseApproved: false,
    approvalStatus: "needs-customer-permission",
    notes: [
      "Clear garment artwork, but ownership is not documented.",
      "Resolution is too small for cover or hero use.",
    ],
  },
  {
    id: "media-013",
    originalFilename: "493750477_1235807298552632_8606438870494362077_n.jpg",
    originalPath:
      "Branding/images/intake/originals/493750477_1235807298552632_8606438870494362077_n.jpg",
    extension: ".jpg",
    proposedFilename: "cornerstone-warriors-cap-detail.jpg",
    proposedDestination: "public/images/projects/embroidery/cornerstone-warriors-cap-detail.jpg",
    category: "embroidery",
    subject: ["cap", "embroidery detail"],
    orientation: "square",
    width: 414,
    height: 414,
    aspectRatio: 1,
    fileSize: 18067,
    quality: "usable-small-only",
    likelyUses: ["embroidery project detail", "headwear gallery tile"],
    duplicateGroup: "embroidered-headwear-sequence",
    containsPeople: false,
    containsLicensePlate: false,
    containsPhoneNumber: false,
    containsAddress: false,
    containsCustomerLogo: true,
    publicUseApproved: false,
    approvalStatus: "needs-customer-permission",
    notes: [
      "Customer branding is clearly readable.",
      "Good detail shot, but only at social-export resolution.",
    ],
  },
  {
    id: "media-014",
    originalFilename: "493844687_1231240075676021_520584999099227054_n.jpg",
    originalPath:
      "Branding/images/intake/originals/493844687_1231240075676021_520584999099227054_n.jpg",
    extension: ".jpg",
    proposedFilename: "in-my-smile-era-shirt-platen.jpg",
    proposedDestination:
      "public/images/projects/screen-printing-apparel/in-my-smile-era-shirt-platen.jpg",
    category: "screen-printing-apparel",
    subject: ["shirt", "production", "platen"],
    orientation: "square",
    width: 414,
    height: 414,
    aspectRatio: 1,
    fileSize: 14837,
    quality: "usable-small-only",
    likelyUses: ["apparel project detail", "recent gallery tile"],
    duplicateGroup: "apparel-detail-sequence",
    containsPeople: false,
    containsLicensePlate: false,
    containsPhoneNumber: false,
    containsAddress: false,
    containsCustomerLogo: true,
    publicUseApproved: false,
    approvalStatus: "needs-customer-permission",
    notes: [
      "Artwork ownership is unclear in the repository.",
      "Small, low-byte source makes it best for tiny placements only.",
    ],
  },
  {
    id: "media-015",
    originalFilename: "514725584_18080942011850432_4410235230271741118_n.jpg",
    originalPath:
      "Branding/images/intake/originals/514725584_18080942011850432_4410235230271741118_n.jpg",
    extension: ".jpg",
    proposedFilename: "bonnet-brand-sticker-handheld.jpg",
    proposedDestination: "public/images/projects/banners-decals/bonnet-brand-sticker-handheld.jpg",
    category: "banners-decals-stickers",
    subject: ["sticker", "storefront", "customer pickup"],
    orientation: "square",
    width: 414,
    height: 414,
    aspectRatio: 1,
    fileSize: 25424,
    quality: "usable-small-only",
    likelyUses: ["decal project detail", "sticker gallery tile"],
    duplicateGroup: "sticker-product-sequence",
    containsPeople: true,
    containsLicensePlate: false,
    containsPhoneNumber: false,
    containsAddress: false,
    containsCustomerLogo: true,
    publicUseApproved: false,
    approvalStatus: "needs-customer-permission",
    notes: [
      "Visible customer branding on both sticker and background sign.",
      "Blurred person is also visible in frame.",
    ],
  },
  {
    id: "media-016",
    originalFilename: "524724025_18083355733850432_1208968467761440341_n.jpg",
    originalPath:
      "Branding/images/intake/originals/524724025_18083355733850432_1208968467761440341_n.jpg",
    extension: ".jpg",
    proposedFilename: "good-cup-embroidered-caps-group.jpg",
    proposedDestination: "public/images/projects/embroidery/good-cup-embroidered-caps-group.jpg",
    category: "embroidery",
    subject: ["cap", "embroidery detail", "group product shot"],
    orientation: "square",
    width: 414,
    height: 414,
    aspectRatio: 1,
    fileSize: 22142,
    quality: "usable-small-only",
    likelyUses: ["embroidery gallery tile", "promotional headwear project detail"],
    duplicateGroup: "embroidered-headwear-sequence",
    containsPeople: true,
    containsLicensePlate: false,
    containsPhoneNumber: false,
    containsAddress: false,
    containsCustomerLogo: true,
    publicUseApproved: false,
    approvalStatus: "needs-customer-permission",
    notes: [
      "Customer logo is clearly readable.",
      "A person is partially visible behind the hats.",
    ],
  },
  {
    id: "media-017",
    originalFilename: "587711789_18098039869850432_16595990819186331_n.jpg",
    originalPath:
      "Branding/images/intake/originals/587711789_18098039869850432_16595990819186331_n.jpg",
    extension: ".jpg",
    proposedFilename: "bring-jesus-glory-shirt-on-press.jpg",
    proposedDestination:
      "public/images/projects/screen-printing-apparel/bring-jesus-glory-shirt-on-press.jpg",
    category: "screen-printing-apparel",
    subject: ["shirt", "production", "screen-printing press"],
    orientation: "square",
    width: 414,
    height: 414,
    aspectRatio: 1,
    fileSize: 30214,
    quality: "usable-small-only",
    likelyUses: ["process detail", "apparel project tile", "small shop gallery image"],
    duplicateGroup: "apparel-on-press-sequence",
    containsPeople: false,
    containsLicensePlate: false,
    containsPhoneNumber: false,
    containsAddress: false,
    containsCustomerLogo: true,
    publicUseApproved: false,
    approvalStatus: "needs-customer-permission",
    notes: [
      "Artwork may be customer-controlled or owner-controlled; repository context does not settle it.",
      "Still too small for large-layout use.",
    ],
  },
  {
    id: "media-018",
    originalFilename: "604382287_18098581804850432_6385037112064078762_n.jpg",
    originalPath:
      "Branding/images/intake/originals/604382287_18098581804850432_6385037112064078762_n.jpg",
    extension: ".jpg",
    proposedFilename: "folded-apparel-order-boxes.webp",
    proposedDestination: "public/images/shop/folded-apparel-order-boxes.webp",
    category: "shop",
    subject: ["apparel stack", "production", "order packing"],
    orientation: "square",
    width: 414,
    height: 414,
    aspectRatio: 1,
    fileSize: 24090,
    quality: "usable-small-only",
    likelyUses: ["about page support image", "recent gallery tile", "order-fulfillment detail"],
    duplicateGroup: "shop-process-sequence",
    containsPeople: false,
    containsLicensePlate: false,
    containsPhoneNumber: false,
    containsAddress: false,
    containsCustomerLogo: false,
    publicUseApproved: false,
    approvalStatus: "needs-owner-confirmation",
    notes: [
      "Vendor box branding is visible, but no customer branding is readable.",
      "A staged owner-review copy was created.",
    ],
  },
  {
    id: "media-019",
    originalFilename: "648197257_18105225670850432_5912874579191392931_n.jpg",
    originalPath:
      "Branding/images/intake/originals/648197257_18105225670850432_5912874579191392931_n.jpg",
    extension: ".jpg",
    proposedFilename: "screen-printing-carousel-detail.webp",
    proposedDestination: "public/images/shop/screen-printing-carousel-detail.webp",
    category: "shop",
    subject: ["screen-printing press", "production", "workshop"],
    orientation: "square",
    width: 414,
    height: 414,
    aspectRatio: 1,
    fileSize: 29351,
    quality: "usable-small-only",
    likelyUses: ["service-process tile", "shop gallery", "screen-printing support image"],
    duplicateGroup: "shop-process-sequence",
    containsPeople: false,
    containsLicensePlate: false,
    containsPhoneNumber: false,
    containsAddress: false,
    containsCustomerLogo: false,
    publicUseApproved: false,
    approvalStatus: "needs-owner-confirmation",
    notes: [
      "Centered press shot with the best composition among the square process assets.",
      "A staged owner-review copy was created.",
    ],
  },
  {
    id: "media-020",
    originalFilename: "658963792_18109995742850432_3651576718302677868_n.jpg",
    originalPath:
      "Branding/images/intake/originals/658963792_18109995742850432_3651576718302677868_n.jpg",
    extension: ".jpg",
    proposedFilename: "better-dads-sticker-sheet.jpg",
    proposedDestination: "public/images/projects/banners-decals/better-dads-sticker-sheet.jpg",
    category: "banners-decals-stickers",
    subject: ["sticker", "decal", "product sheet"],
    orientation: "square",
    width: 414,
    height: 414,
    aspectRatio: 1,
    fileSize: 39136,
    quality: "usable-small-only",
    likelyUses: ["sticker project detail", "decal gallery tile"],
    duplicateGroup: "sticker-product-sequence",
    containsPeople: false,
    containsLicensePlate: false,
    containsPhoneNumber: false,
    containsAddress: false,
    containsCustomerLogo: true,
    publicUseApproved: false,
    approvalStatus: "needs-customer-permission",
    notes: [
      "Customer branding is fully readable.",
      "One of the better sticker-detail shots, but still permission-sensitive.",
    ],
  },
  {
    id: "media-021",
    originalFilename: "671817477_18109800268850432_5104832856624517656_n.jpg",
    originalPath:
      "Branding/images/intake/originals/671817477_18109800268850432_5104832856624517656_n.jpg",
    extension: ".jpg",
    proposedFilename: "platen-test-print-closeup.jpg",
    proposedDestination: "public/images/shop/platen-test-print-closeup.jpg",
    category: "shop",
    subject: ["production", "platen", "process detail"],
    orientation: "square",
    width: 414,
    height: 414,
    aspectRatio: 1,
    fileSize: 18290,
    quality: "usable-with-crop",
    likelyUses: ["background texture", "process-support tile", "small recent-gallery placement"],
    duplicateGroup: "shop-process-sequence",
    containsPeople: false,
    containsLicensePlate: false,
    containsPhoneNumber: false,
    containsAddress: false,
    containsCustomerLogo: true,
    publicUseApproved: false,
    approvalStatus: "needs-owner-confirmation",
    notes: [
      "Foreground obstruction weakens the image.",
      "Printed art ownership is not clear enough for automatic publication.",
    ],
  },
  {
    id: "media-022",
    originalFilename: "696950336_18112725988850432_4201697764266807428_n.jpg",
    originalPath:
      "Branding/images/intake/originals/696950336_18112725988850432_4201697764266807428_n.jpg",
    extension: ".jpg",
    proposedFilename: "boxed-tee-order-overhead.jpg",
    proposedDestination:
      "public/images/projects/screen-printing-apparel/boxed-tee-order-overhead.jpg",
    category: "screen-printing-apparel",
    subject: ["shirt", "order packing", "customer pickup"],
    orientation: "square",
    width: 414,
    height: 414,
    aspectRatio: 1,
    fileSize: 16115,
    quality: "usable-small-only",
    likelyUses: ["fulfillment detail", "apparel gallery tile", "social recap"],
    duplicateGroup: "boxed-order-sequence",
    containsPeople: false,
    containsLicensePlate: false,
    containsPhoneNumber: false,
    containsAddress: false,
    containsCustomerLogo: true,
    publicUseApproved: false,
    approvalStatus: "needs-customer-permission",
    notes: [
      "Visible customer artwork in the box.",
      "Lowest-byte apparel fulfillment image in the set.",
    ],
  },
] satisfies readonly Omit<
  MediaManifestItem,
  "conceptUseApproved" | "conceptUseNotes" | "publicUseNotes" | "liveConceptPlacements" | "conceptCropNotes" | "conceptAltText"
>[];

const conceptMediaOverrides: Record<
  string,
  Pick<
    MediaManifestItem,
    "conceptUseApproved" | "conceptUseNotes" | "liveConceptPlacements" | "conceptCropNotes" | "conceptAltText"
  >
> = {
  "media-004": {
    conceptUseApproved: true,
    conceptUseNotes: [
      "Allowed inside the private noindex concept preview only.",
      "Low-risk brand-owned-looking image with no visible people or customer marks.",
      "Not approved for public launch, paid ads, Google Business Profile, Facebook, or Instagram reposting.",
    ],
    liveConceptPlacements: [
      "homepage-hero",
      "services/embroidery-hero",
      "homepage-gallery-tile-4",
      "work-embroidery-detail-card",
    ],
    conceptCropNotes: [
      "Homepage hero uses a tighter portrait crop on the embroidered wordmark and textile texture.",
      "Embroidery service hero stays at a 16:10 crop centered on the stitched logo area.",
      "Homepage gallery reuse stays square to avoid stretching the source.",
      "Work page card stays square and is labelled as HisWay's own embroidered goods, not customer work.",
    ],
    conceptAltText: "Close-up of HisWay-branded embroidered fabric arranged on a worktable",
  },
  "media-007": {
    conceptUseApproved: true,
    conceptUseNotes: [
      "Allowed inside the private noindex concept preview only.",
      "Low-risk process close-up with no visible people, customer marks, or private information.",
      "Not approved for public launch, paid ads, Google Business Profile, Facebook, or Instagram reposting.",
    ],
    liveConceptPlacements: ["homepage-gallery-tile-2", "work-in-shop-craftsmanship-card"],
    conceptCropNotes: [
      "Used as a square gallery tile with the ink bucket centered to preserve the process detail.",
      "Work page card reuses the same square crop under an in-shop craftsmanship label.",
    ],
    conceptAltText: "Bright green screen-print ink lifted from an open bucket",
  },
  "media-018": {
    conceptUseApproved: true,
    conceptUseNotes: [
      "Allowed inside the private noindex concept preview only.",
      "Useful shop-output image without a visible customer name or person.",
      "Not approved for public launch, paid ads, Google Business Profile, Facebook, or Instagram reposting.",
    ],
    liveConceptPlacements: ["homepage-gallery-tile-3", "work-apparel-production-card"],
    conceptCropNotes: [
      "Kept as a square gallery tile so the folded garments remain the focal point without enlarging the small export.",
      "Work page card keeps the same square crop; the label describes shop output, not a named customer order.",
    ],
    conceptAltText: "Folded shirts stacked on shipping boxes in the shop",
  },
  "media-019": {
    conceptUseApproved: true,
    conceptUseNotes: [
      "Allowed inside the private noindex concept preview only.",
      "Safe equipment image with no visible people, customer marks, or private information.",
      "Not approved for public launch, paid ads, Google Business Profile, Facebook, or Instagram reposting.",
    ],
    liveConceptPlacements: [
      "homepage-gallery-tile-1",
      "homepage-about-preview",
      "about-page-workshop-image",
      "work-screen-printing-card",
    ],
    conceptCropNotes: [
      "Homepage gallery keeps the square carousel composition as-is.",
      "About placements keep the image in constrained 4:3 support frames and do not elevate it to a full-width hero.",
      "Work page card stays square and quarter-width so the 414px export is never enlarged past a support frame.",
    ],
    conceptAltText: "Screen-printing carousel press set up for a garment run",
  },
};

const defaultConceptFields: Pick<
  MediaManifestItem,
  "conceptUseApproved" | "conceptUseNotes" | "liveConceptPlacements" | "conceptCropNotes" | "conceptAltText"
> = {
  conceptUseApproved: false,
  conceptUseNotes: [
    "Not approved for use in the private concept preview at this time.",
    "Reassess after owner review if the asset is still needed for the mockup.",
  ],
  liveConceptPlacements: [],
  conceptCropNotes: [],
  conceptAltText: null,
};

export const mediaManifest = mediaManifestBase.map((item) => ({
  ...item,
  ...(conceptMediaOverrides[item.id] ?? defaultConceptFields),
  publicUseNotes: [
    "Public-launch approval is still undocumented in the repository.",
    "Do not treat concept-preview use as public-use approval.",
  ],
})) satisfies readonly MediaManifestItem[];

export function getMediaById(id: string): MediaManifestItem | undefined {
  return mediaManifest.find((item) => item.id === id);
}

export function getConceptApprovedMedia(): MediaManifestItem[] {
  return mediaManifest.filter((item) => item.conceptUseApproved);
}

export function toPublicImagePath(path: string): string {
  return path.startsWith("public/") ? path.slice("public".length) : path;
}
