# Media Inventory

Source archive: `Branding/images/intake/originals/`

## Summary

- Total source files reviewed: `22`
- File types: `21` JPG, `1` PNG
- Shape mix: `21` square exports, `1` landscape image
- Duplicate scan: no exact duplicates and no near-duplicate collisions found in a basic hash pass
- Risk notes: `1` file with a visible phone number, `0` visible license plates, `0` visible street addresses
- Approval baseline: no repository-documented public approvals were found, so every manifest entry keeps `publicUseApproved: false`; a smaller internal subset may still be marked `conceptUseApproved: true` for the private noindex mockup only

## Placement Decision

The intake set is useful, but it is not ready for wholesale live-site replacement yet. Most of the files are small square exports, many feature customer artwork or logos, and several are social-only graphics rather than website photography.

Because the repository does not currently document public-use approval for any of these files, this pass still stops short of treating any image as launch-ready production media. The placement plan is captured below through proposed filenames and destinations, and a small set of low-risk owner-facing copies is staged inside `public/images/`.

On `feat/concept-media-implementation`, a narrower concept-only subset is allowed inside the private noindex mockup. That concept approval does not authorize public launch, paid ads, Google Business Profile posts, Facebook reuse, or Instagram reposting.

## Concept-Approved Mockup Subset

These are the only intake assets currently approved for use inside the private concept preview:

- `media-004` → homepage hero, homepage gallery tile 4, embroidery service hero
- `media-007` → homepage gallery tile 2
- `media-018` → homepage gallery tile 3
- `media-019` → homepage gallery tile 1, homepage About preview, About page workshop image

Each of those entries still keeps `publicUseApproved: false` in the manifest.

## Staged Review Copies

These low-risk copies were prepared for owner review and placement planning. A concept-only subset is now referenced by the noindex mockup, but none of the files below are approved for public launch in the repository.

- `public/images/brand/hisway-press-or-print-logo-square.png`
- `public/images/shop/hisway-brand-textile-closeup.webp`
- `public/images/shop/screen-printing-ink-closeup.webp`
- `public/images/shop/folded-apparel-order-boxes.webp`
- `public/images/shop/screen-printing-carousel-detail.webp`

## Contact Sheets

Generated output:

- `docs/media-contact-sheets/media-contact-sheet-01.jpg`
- `docs/media-contact-sheets/media-contact-sheet-02.jpg`

Run command:

```bash
node scripts/generate-media-contact-sheets.mjs
```

The script reads only from `Branding/images/intake/originals/`, creates labeled thumbnails with original filenames below each image, splits the set across multiple sheets when needed, and writes the results to `docs/media-contact-sheets/`.

## Staged Copy Verification

Verification notes for the staged subset under `public/images/brand/` and `public/images/shop/`:

- Every staged copy maps back to a reviewed source file in `Branding/images/intake/originals/`.
- Filenames follow the descriptive lowercase kebab-case convention already established in the manifest.
- No file was upscaled. The 2048x1365 landscape image was reduced to `1600x1066`; all square staged copies remain at their original `414x414` or `882x882` dimensions.
- Optimization did not materially degrade the staged subset in review. The JPG-to-WEBP conversions remain visually consistent with the small square source exports.
- Transparency preservation was not a blocking issue in the staged subset. The brand mark stayed as a PNG, and the staged sources do not rely on alpha transparency for presentation.
- Concept-only placements now reference a subset of these staged copies inside the noindex mockup. Public-launch pages should still treat every intake asset as unapproved until owner confirmation is documented.
- No privacy-sensitive image was staged without an explicit warning in the manifest and review docs. The staged set is limited to low-risk brand and shop/process imagery.
- No staged file needs to be moved to archive or removed from the current production-review subset.

## Inventory

### media-001 · `239770896_375182784115114_3637560870964266350_n.png`

- Original filename: `239770896_375182784115114_3637560870964266350_n.png`
- Original path: `Branding/images/intake/originals/239770896_375182784115114_3637560870964266350_n.png`
- Extension: `.png`
- Dimensions: `882x882`
- Aspect ratio: `1.00`
- File size: `58,023 B`
- Orientation: `square`
- Description: square HisWay Press or Print logo lockup on a white background
- Likely service category: `brand`
- Likely website usage: brand library, press kit, social avatar fallback
- Quality: `strong`
- Public-use concerns: likely owner-controlled brand art, but there is still no explicit approval note in the repository
- Duplicate or near-duplicate group: none
- Proposed production filename: `hisway-press-or-print-logo-square.png`
- Proposed destination path: `public/images/brand/hisway-press-or-print-logo-square.png`
- Approval status: `needs-owner-confirmation` with `publicUseApproved: false`

### media-002 · `465951913_18058193854850432_8798094120774455540_n.jpg`

- Original filename: `465951913_18058193854850432_8798094120774455540_n.jpg`
- Original path: `Branding/images/intake/originals/465951913_18058193854850432_8798094120774455540_n.jpg`
- Extension: `.jpg`
- Dimensions: `414x414`
- Aspect ratio: `1.00`
- File size: `28,437 B`
- Orientation: `square`
- Description: close-up of a dark shirt printed with a large “Messiah” design
- Likely service category: `screen-printing-apparel`
- Likely website usage: project detail, apparel gallery tile, social recap
- Quality: `usable-small-only`
- Public-use concerns: custom artwork ownership is unclear and the source is too small for large placements
- Duplicate or near-duplicate group: `apparel-detail-sequence`
- Proposed production filename: `messiah-tee-detail.jpg`
- Proposed destination path: `public/images/projects/screen-printing-apparel/messiah-tee-detail.jpg`
- Approval status: `needs-customer-permission` with `publicUseApproved: false`

### media-003 · `467842949_18059811370850432_159304252917080397_n.jpg`

- Original filename: `467842949_18059811370850432_159304252917080397_n.jpg`
- Original path: `Branding/images/intake/originals/467842949_18059811370850432_159304252917080397_n.jpg`
- Extension: `.jpg`
- Dimensions: `414x414`
- Aspect ratio: `1.00`
- File size: `35,598 B`
- Orientation: `square`
- Description: white HisWay promo shirt flatlay with illustrated boxer artwork and a visible phone number in the print
- Likely service category: `archive`
- Likely website usage: brand archive, social history only
- Quality: `usable-small-only`
- Public-use concerns: visible phone number baked into the artwork and dense self-promotional copy make it a poor website fit without owner review
- Duplicate or near-duplicate group: none
- Proposed production filename: `support-local-boxer-tee-flatlay.jpg`
- Proposed destination path: `public/images/archive/support-local-boxer-tee-flatlay.jpg`
- Approval status: `needs-owner-confirmation` with `publicUseApproved: false`

### media-004 · `469543024_1128302292136489_734418222008985039_n.jpg`

- Original filename: `469543024_1128302292136489_734418222008985039_n.jpg`
- Original path: `Branding/images/intake/originals/469543024_1128302292136489_734418222008985039_n.jpg`
- Extension: `.jpg`
- Dimensions: `2048x1365`
- Aspect ratio: `1.50`
- File size: `294,683 B`
- Orientation: `landscape`
- Description: moody close-up of a HisWay-branded embroidered textile beside vintage-style objects
- Likely service category: `hero`
- Likely website usage: about hero, brand-support image, shop story feature
- Quality: `strong`
- Public-use concerns: low-risk owner-facing brand shot, but approval is still undocumented in the repository
- Duplicate or near-duplicate group: none
- Proposed production filename: `hisway-brand-textile-closeup.webp`
- Proposed destination path: `public/images/shop/hisway-brand-textile-closeup.webp`
- Approval status: `needs-owner-confirmation` with `publicUseApproved: false`

### media-005 · `481197785_18069305080850432_3283863818351243536_n.jpg`

- Original filename: `481197785_18069305080850432_3283863818351243536_n.jpg`
- Original path: `Branding/images/intake/originals/481197785_18069305080850432_3283863818351243536_n.jpg`
- Extension: `.jpg`
- Dimensions: `414x414`
- Aspect ratio: `1.00`
- File size: `19,651 B`
- Orientation: `square`
- Description: hands packing a black “Endure Athletics” shirt into a shipping box
- Likely service category: `screen-printing-apparel`
- Likely website usage: project detail, fulfillment story tile, social recap
- Quality: `usable-small-only`
- Public-use concerns: identifiable customer branding and only small-export resolution
- Duplicate or near-duplicate group: `boxed-order-sequence`
- Proposed production filename: `endure-athletics-order-packout.jpg`
- Proposed destination path: `public/images/projects/screen-printing-apparel/endure-athletics-order-packout.jpg`
- Approval status: `needs-customer-permission` with `publicUseApproved: false`

### media-006 · `486395659_1205773488222680_7840060350057974117_n.jpg`

- Original filename: `486395659_1205773488222680_7840060350057974117_n.jpg`
- Original path: `Branding/images/intake/originals/486395659_1205773488222680_7840060350057974117_n.jpg`
- Extension: `.jpg`
- Dimensions: `414x414`
- Aspect ratio: `1.00`
- File size: `20,876 B`
- Orientation: `square`
- Description: person pulling a squeegee across a screen-printing setup inside the shop
- Likely service category: `shop`
- Likely website usage: about page support image, recent gallery tile, services process detail
- Quality: `usable-with-crop`
- Public-use concerns: contains a recognizable person and still needs owner confirmation before publication
- Duplicate or near-duplicate group: `shop-process-sequence`
- Proposed production filename: `screen-printing-squeegee-in-action.jpg`
- Proposed destination path: `public/images/shop/screen-printing-squeegee-in-action.jpg`
- Approval status: `needs-owner-confirmation` with `publicUseApproved: false`

### media-007 · `487208238_1207141951419167_733478172312361133_n.jpg`

- Original filename: `487208238_1207141951419167_733478172312361133_n.jpg`
- Original path: `Branding/images/intake/originals/487208238_1207141951419167_733478172312361133_n.jpg`
- Extension: `.jpg`
- Dimensions: `414x414`
- Aspect ratio: `1.00`
- File size: `26,370 B`
- Orientation: `square`
- Description: bright green screen-print ink close-up inside an open bucket
- Likely service category: `shop`
- Likely website usage: services process image, shop gallery tile, texture accent
- Quality: `strong`
- Public-use concerns: low-risk process image, but approval still is not documented in-repo
- Duplicate or near-duplicate group: `shop-process-sequence`
- Proposed production filename: `screen-printing-ink-closeup.webp`
- Proposed destination path: `public/images/shop/screen-printing-ink-closeup.webp`
- Approval status: `needs-owner-confirmation` with `publicUseApproved: false`

### media-008 · `487436078_1206337194832976_6951604778239930877_n.jpg`

- Original filename: `487436078_1206337194832976_6951604778239930877_n.jpg`
- Original path: `Branding/images/intake/originals/487436078_1206337194832976_6951604778239930877_n.jpg`
- Extension: `.jpg`
- Dimensions: `414x414`
- Aspect ratio: `1.00`
- File size: `24,441 B`
- Orientation: `square`
- Description: behind-the-scenes content capture with a camera, lights, and a person shooting product media
- Likely service category: `graphic-design-content`
- Likely website usage: design-content page, social case study, process gallery
- Quality: `usable-with-crop`
- Public-use concerns: contains a recognizable person and appears better suited to supporting content than primary website visuals
- Duplicate or near-duplicate group: `content-capture-sequence`
- Proposed production filename: `content-capture-behind-the-scenes.jpg`
- Proposed destination path: `public/images/social/content-capture-behind-the-scenes.jpg`
- Approval status: `needs-owner-confirmation` with `publicUseApproved: false`

### media-009 · `487563999_1210502421083120_5456987941463085265_n.jpg`

- Original filename: `487563999_1210502421083120_5456987941463085265_n.jpg`
- Original path: `Branding/images/intake/originals/487563999_1210502421083120_5456987941463085265_n.jpg`
- Extension: `.jpg`
- Dimensions: `414x414`
- Aspect ratio: `1.00`
- File size: `32,481 B`
- Orientation: `square`
- Description: Threads-style quote card about visually appealing content with the HisWay social handle at the bottom
- Likely service category: `social-only`
- Likely website usage: social archive only
- Quality: `usable-small-only`
- Public-use concerns: social-post graphic rather than photography, plus the embedded ChatGPT attribution is not a good fit for core website placement
- Duplicate or near-duplicate group: `threads-social-series`
- Proposed production filename: `remember-threads-social-quote.jpg`
- Proposed destination path: `public/images/social/remember-threads-social-quote.jpg`
- Approval status: `social-only-not-approved` with `publicUseApproved: false`

### media-010 · `488448379_1210502141083148_4604369069897572128_n.jpg`

- Original filename: `488448379_1210502141083148_4604369069897572128_n.jpg`
- Original path: `Branding/images/intake/originals/488448379_1210502141083148_4604369069897572128_n.jpg`
- Extension: `.jpg`
- Dimensions: `414x414`
- Aspect ratio: `1.00`
- File size: `29,304 B`
- Orientation: `square`
- Description: Threads tip graphic reading “How to use threads for your screen printing brand”
- Likely service category: `social-only`
- Likely website usage: social archive only
- Quality: `usable-small-only`
- Public-use concerns: educational social-post graphic, not suitable as live website photography
- Duplicate or near-duplicate group: `threads-social-series`
- Proposed production filename: `threads-screen-printing-brand-tip.jpg`
- Proposed destination path: `public/images/social/threads-screen-printing-brand-tip.jpg`
- Approval status: `social-only-not-approved` with `publicUseApproved: false`

### media-011 · `488656198_1210795287720500_1267957444844284776_n.jpg`

- Original filename: `488656198_1210795287720500_1267957444844284776_n.jpg`
- Original path: `Branding/images/intake/originals/488656198_1210795287720500_1267957444844284776_n.jpg`
- Extension: `.jpg`
- Dimensions: `414x414`
- Aspect ratio: `1.00`
- File size: `40,361 B`
- Orientation: `square`
- Description: Threads tip graphic encouraging product-focused photos for screen-printing merch
- Likely service category: `social-only`
- Likely website usage: social archive only
- Quality: `usable-small-only`
- Public-use concerns: educational social graphic, not a direct website-photo replacement
- Duplicate or near-duplicate group: `threads-social-series`
- Proposed production filename: `threads-highlight-products-tip.jpg`
- Proposed destination path: `public/images/social/threads-highlight-products-tip.jpg`
- Approval status: `social-only-not-approved` with `publicUseApproved: false`

### media-012 · `492302932_1230937602372935_7867351836082741973_n.jpg`

- Original filename: `492302932_1230937602372935_7867351836082741973_n.jpg`
- Original path: `Branding/images/intake/originals/492302932_1230937602372935_7867351836082741973_n.jpg`
- Extension: `.jpg`
- Dimensions: `414x414`
- Aspect ratio: `1.00`
- File size: `26,599 B`
- Orientation: `square`
- Description: close-up of a cowboy-skull shirt illustration printed on white fabric
- Likely service category: `screen-printing-apparel`
- Likely website usage: apparel project detail, social recap, small gallery tile
- Quality: `usable-small-only`
- Public-use concerns: artwork ownership is unclear and the source export is too small for large placement
- Duplicate or near-duplicate group: `apparel-detail-sequence`
- Proposed production filename: `cowboy-skull-shirt-detail.jpg`
- Proposed destination path: `public/images/projects/screen-printing-apparel/cowboy-skull-shirt-detail.jpg`
- Approval status: `needs-customer-permission` with `publicUseApproved: false`

### media-013 · `493750477_1235807298552632_8606438870494362077_n.jpg`

- Original filename: `493750477_1235807298552632_8606438870494362077_n.jpg`
- Original path: `Branding/images/intake/originals/493750477_1235807298552632_8606438870494362077_n.jpg`
- Extension: `.jpg`
- Dimensions: `414x414`
- Aspect ratio: `1.00`
- File size: `18,067 B`
- Orientation: `square`
- Description: close-up of a red embroidered “Cornerstone Warriors” trucker cap
- Likely service category: `embroidery`
- Likely website usage: embroidery project detail, headwear gallery tile
- Quality: `usable-small-only`
- Public-use concerns: customer logo is clearly visible, so this needs customer permission before publication
- Duplicate or near-duplicate group: `embroidered-headwear-sequence`
- Proposed production filename: `cornerstone-warriors-cap-detail.jpg`
- Proposed destination path: `public/images/projects/embroidery/cornerstone-warriors-cap-detail.jpg`
- Approval status: `needs-customer-permission` with `publicUseApproved: false`

### media-014 · `493844687_1231240075676021_520584999099227054_n.jpg`

- Original filename: `493844687_1231240075676021_520584999099227054_n.jpg`
- Original path: `Branding/images/intake/originals/493844687_1231240075676021_520584999099227054_n.jpg`
- Extension: `.jpg`
- Dimensions: `414x414`
- Aspect ratio: `1.00`
- File size: `14,837 B`
- Orientation: `square`
- Description: purple shirt laid on a platen with bold “In My Smile Era” lettering
- Likely service category: `screen-printing-apparel`
- Likely website usage: apparel project detail, recent gallery tile
- Quality: `usable-small-only`
- Public-use concerns: small export and likely custom artwork requiring permission before web use
- Duplicate or near-duplicate group: `apparel-detail-sequence`
- Proposed production filename: `in-my-smile-era-shirt-platen.jpg`
- Proposed destination path: `public/images/projects/screen-printing-apparel/in-my-smile-era-shirt-platen.jpg`
- Approval status: `needs-customer-permission` with `publicUseApproved: false`

### media-015 · `514725584_18080942011850432_4410235230271741118_n.jpg`

- Original filename: `514725584_18080942011850432_4410235230271741118_n.jpg`
- Original path: `Branding/images/intake/originals/514725584_18080942011850432_4410235230271741118_n.jpg`
- Extension: `.jpg`
- Dimensions: `414x414`
- Aspect ratio: `1.00`
- File size: `25,424 B`
- Orientation: `square`
- Description: handheld die-cut sticker in front of a customer storefront sign, with a person blurred in the background
- Likely service category: `banners-decals-stickers`
- Likely website usage: decal project detail, sticker gallery tile
- Quality: `usable-small-only`
- Public-use concerns: visible customer branding and a person in frame make this permission-sensitive
- Duplicate or near-duplicate group: `sticker-product-sequence`
- Proposed production filename: `bonnet-brand-sticker-handheld.jpg`
- Proposed destination path: `public/images/projects/banners-decals/bonnet-brand-sticker-handheld.jpg`
- Approval status: `needs-customer-permission` with `publicUseApproved: false`

### media-016 · `524724025_18083355733850432_1208968467761440341_n.jpg`

- Original filename: `524724025_18083355733850432_1208968467761440341_n.jpg`
- Original path: `Branding/images/intake/originals/524724025_18083355733850432_1208968467761440341_n.jpg`
- Extension: `.jpg`
- Dimensions: `414x414`
- Aspect ratio: `1.00`
- File size: `22,142 B`
- Orientation: `square`
- Description: group photo of embroidered Good Cup Coffee Co. caps being held outdoors
- Likely service category: `embroidery`
- Likely website usage: embroidery gallery tile, promotional headwear project detail
- Quality: `usable-small-only`
- Public-use concerns: customer logo is clearly visible and a person is partially visible in frame
- Duplicate or near-duplicate group: `embroidered-headwear-sequence`
- Proposed production filename: `good-cup-embroidered-caps-group.jpg`
- Proposed destination path: `public/images/projects/embroidery/good-cup-embroidered-caps-group.jpg`
- Approval status: `needs-customer-permission` with `publicUseApproved: false`

### media-017 · `587711789_18098039869850432_16595990819186331_n.jpg`

- Original filename: `587711789_18098039869850432_16595990819186331_n.jpg`
- Original path: `Branding/images/intake/originals/587711789_18098039869850432_16595990819186331_n.jpg`
- Extension: `.jpg`
- Dimensions: `414x414`
- Aspect ratio: `1.00`
- File size: `30,214 B`
- Orientation: `square`
- Description: white shirt on a screen-printing platen with “I Just Wanna Bring Jesus Glory” artwork
- Likely service category: `screen-printing-apparel`
- Likely website usage: process detail, apparel project tile, small shop gallery image
- Quality: `usable-small-only`
- Public-use concerns: likely custom artwork and only a small square source export
- Duplicate or near-duplicate group: `apparel-on-press-sequence`
- Proposed production filename: `bring-jesus-glory-shirt-on-press.jpg`
- Proposed destination path: `public/images/projects/screen-printing-apparel/bring-jesus-glory-shirt-on-press.jpg`
- Approval status: `needs-customer-permission` with `publicUseApproved: false`

### media-018 · `604382287_18098581804850432_6385037112064078762_n.jpg`

- Original filename: `604382287_18098581804850432_6385037112064078762_n.jpg`
- Original path: `Branding/images/intake/originals/604382287_18098581804850432_6385037112064078762_n.jpg`
- Extension: `.jpg`
- Dimensions: `414x414`
- Aspect ratio: `1.00`
- File size: `24,090 B`
- Orientation: `square`
- Description: stacked folded shirts on branded shipping boxes with press equipment blurred in the background
- Likely service category: `shop`
- Likely website usage: about page support image, recent gallery tile, order-fulfillment detail
- Quality: `usable-small-only`
- Public-use concerns: low-risk shop shot, but resolution limits it to small placements and approval is still undocumented
- Duplicate or near-duplicate group: `shop-process-sequence`
- Proposed production filename: `folded-apparel-order-boxes.webp`
- Proposed destination path: `public/images/shop/folded-apparel-order-boxes.webp`
- Approval status: `needs-owner-confirmation` with `publicUseApproved: false`

### media-019 · `648197257_18105225670850432_5912874579191392931_n.jpg`

- Original filename: `648197257_18105225670850432_5912874579191392931_n.jpg`
- Original path: `Branding/images/intake/originals/648197257_18105225670850432_5912874579191392931_n.jpg`
- Extension: `.jpg`
- Dimensions: `414x414`
- Aspect ratio: `1.00`
- File size: `29,351 B`
- Orientation: `square`
- Description: centered view of a green screen-printing carousel with a dark garment on the platen
- Likely service category: `shop`
- Likely website usage: service-process tile, shop gallery, screen-printing support image
- Quality: `usable-small-only`
- Public-use concerns: low-risk process image, but still only a small square export and not repo-approved yet
- Duplicate or near-duplicate group: `shop-process-sequence`
- Proposed production filename: `screen-printing-carousel-detail.webp`
- Proposed destination path: `public/images/shop/screen-printing-carousel-detail.webp`
- Approval status: `needs-owner-confirmation` with `publicUseApproved: false`

### media-020 · `658963792_18109995742850432_3651576718302677868_n.jpg`

- Original filename: `658963792_18109995742850432_3651576718302677868_n.jpg`
- Original path: `Branding/images/intake/originals/658963792_18109995742850432_3651576718302677868_n.jpg`
- Extension: `.jpg`
- Dimensions: `414x414`
- Aspect ratio: `1.00`
- File size: `39,136 B`
- Orientation: `square`
- Description: printed sheet of “Better Dads Barbershop” stickers laid out on a work surface
- Likely service category: `banners-decals-stickers`
- Likely website usage: sticker project detail, decal gallery tile
- Quality: `usable-small-only`
- Public-use concerns: clear customer branding requires customer permission before any public website placement
- Duplicate or near-duplicate group: `sticker-product-sequence`
- Proposed production filename: `better-dads-sticker-sheet.jpg`
- Proposed destination path: `public/images/projects/banners-decals/better-dads-sticker-sheet.jpg`
- Approval status: `needs-customer-permission` with `publicUseApproved: false`

### media-021 · `671817477_18109800268850432_5104832856624517656_n.jpg`

- Original filename: `671817477_18109800268850432_5104832856624517656_n.jpg`
- Original path: `Branding/images/intake/originals/671817477_18109800268850432_5104832856624517656_n.jpg`
- Extension: `.jpg`
- Dimensions: `414x414`
- Aspect ratio: `1.00`
- File size: `18,290 B`
- Orientation: `square`
- Description: small print setup on a platen viewed through foreground equipment, with only part of the design visible
- Likely service category: `shop`
- Likely website usage: background texture, process-support tile, small recent-gallery placement
- Quality: `usable-with-crop`
- Public-use concerns: the design content is partially obscured and ownership of the printed art is unclear
- Duplicate or near-duplicate group: `shop-process-sequence`
- Proposed production filename: `platen-test-print-closeup.jpg`
- Proposed destination path: `public/images/shop/platen-test-print-closeup.jpg`
- Approval status: `needs-owner-confirmation` with `publicUseApproved: false`

### media-022 · `696950336_18112725988850432_4201697764266807428_n.jpg`

- Original filename: `696950336_18112725988850432_4201697764266807428_n.jpg`
- Original path: `Branding/images/intake/originals/696950336_18112725988850432_4201697764266807428_n.jpg`
- Extension: `.jpg`
- Dimensions: `414x414`
- Aspect ratio: `1.00`
- File size: `16,115 B`
- Orientation: `square`
- Description: overhead view into a box of printed white shirts with visible customer artwork
- Likely service category: `screen-printing-apparel`
- Likely website usage: fulfillment detail, apparel gallery tile, social recap
- Quality: `usable-small-only`
- Public-use concerns: visible customer artwork and limited source resolution
- Duplicate or near-duplicate group: `boxed-order-sequence`
- Proposed production filename: `boxed-tee-order-overhead.jpg`
- Proposed destination path: `public/images/projects/screen-printing-apparel/boxed-tee-order-overhead.jpg`
- Approval status: `needs-customer-permission` with `publicUseApproved: false`
