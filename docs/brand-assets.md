# Brand Assets

HisWay now has three owner-derived official logo assets in `public/images/brand/`.
Keep the original uploaded WebP files intact, and use the clean production filenames below in the website and supporting metadata.

Third-party/agency artwork lives separately under `public/images/brand/partners/` and is documented in [Partner / agency assets](#partner--agency-assets).

## Files

| Production path | Original upload | Intended use | Background / contrast rules |
| --- | --- | --- | --- |
| `public/images/brand/hisway-horizontal-logo.webp` | `public/images/brand/Hisway_New+Logo.webp` | Wide brand lockups, any light-background place where the full wordmark stays readable | Black artwork on a transparent background. Use only directly on a light or paper-toned background. Do not use dark overlays or filters that change the artwork — use the white variant below instead. |
| `public/images/brand/hisway-horizontal-logo-white.webp` | Derived from `hisway-horizontal-logo.webp` (same alpha/silhouette, recolored to white — not an inversion) | Desktop header and any other dark-background wide brand lockup | White artwork on a transparent background, for direct placement on dark surfaces (e.g. `bg-ink`) with no light panel needed. |
| `public/images/brand/hisway-badge-logo.webp` | `public/images/brand/LOGO (1).webp` | Mobile header/nav, footer branding, icon sources, and social / Open Graph compositions | The badge already has a black field and white artwork. Keep it in a simple light panel when used on dark sections. Preserve the square aspect ratio and avoid aggressive rounding or clipping. |

## Partner / agency assets

Artwork owned by a third party, not by HisWay. Keep it in `public/images/brand/partners/` so it is never mistaken for HisWay brand identity.

| Production path | Source | Intended use | Destination URL |
| --- | --- | --- | --- |
| `public/images/brand/partners/battle-bound-branding-white.png` | `bbb-logo-horizontal-white-transparent-3000x1000.png`, from the Battle Bound Branding `BBBLLC_Web_Logo` logo pack (kept outside this repo) | **Footer only** — the "Built by Battle Bound Branding LLC" credit in `src/components/layout/Footer.tsx`. Do not use it anywhere else, and do not promote it into a header, favicon, or Open Graph image. | <https://battleboundbranding.com> (opened via `target="_blank"` + `rel="noopener noreferrer"`) |

Notes:

- Only this single file was copied out of the logo pack. The rest of the pack, and the archive itself, stay outside the repo on purpose.
- The bytes are unmodified from the source pack — only the filename changed. Verified identical by SHA-256.
- The artwork is white-on-transparent, so it is only legible on a dark surface such as the footer's `bg-ink`. No panel, filter, or inversion.
- Unlike the HisWay logos above, this one renders through `next/image` rather than a plain `<img>`. The pixel-fidelity rule that keeps HisWay's artwork out of the optimizer does not buy anything here: the credit renders at 54×18 from a 3000×1000 source, so it is downscaled ~55× regardless. Measured on the footer, the optimizer serves 452 bytes against 111,461 for the raw file — a ~246× saving on every page — for artwork whose detail is invisible at this size.
- The canvas carries a lot of built-in transparent clear space — the artwork's ink only occupies x 846–2284 and y 114–899 of the 3000×1000 canvas. At the footer's render size that reads as roughly 15px of clear space to the left of the mark and 13px to the right, which is why the credit link sets no horizontal gap of its own. Anything that re-crops or re-pads this asset needs to revisit that spacing.
- The credit is deliberately secondary to HisWay's branding: small type, muted at 60–70% until hover, and no accent/orange treatment.

## Current placements

- Desktop header uses the white horizontal logo directly on the dark header, with no background/border/panel — the previous white panel treatment existed only because the black logo needed contrast, and no longer applies now that a proper white variant exists.
- Mobile header and mobile navigation use the badge logo in a light panel (unchanged).
- Footer branding uses the badge logo in a light panel.
- App icons use the badge logo as the source artwork.
- Open Graph branding uses the badge logo in a framed composition.
- The footer bottom bar also carries the Battle Bound Branding agency credit — see [Partner / agency assets](#partner--agency-assets). That credit is independent of `company.isConceptSite`, so it survives the switch to production mode; the "Concept preview site" label above it does not.

## Notes for future edits

- The logo artwork is owner-provided and should be treated as official brand identity, not general photography.
- Do not recompress the source WebP files unless a downstream format requires it.
- On a light background, use the black horizontal logo. On a dark background, use the white horizontal logo directly — do not wrap it in a light panel or apply CSS filters/inversions.
- If a new dark-background placement needs the white variant and it's out of sync with the black source, regenerate it by recoloring RGB to white while keeping the original alpha channel byte-for-byte identical (a true recolor, not a color inversion).
- The older staged square PNG copy in `public/images/brand/hisway-press-or-print-logo-square.png` can remain as reference, but it is no longer the preferred compact logo asset.
