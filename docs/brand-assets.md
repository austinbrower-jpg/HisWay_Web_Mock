# Brand Assets

HisWay now has three owner-derived official logo assets in `public/images/brand/`.
Keep the original uploaded WebP files intact, and use the clean production filenames below in the website and supporting metadata.

## Files

| Production path | Original upload | Intended use | Background / contrast rules |
| --- | --- | --- | --- |
| `public/images/brand/hisway-horizontal-logo.webp` | `public/images/brand/Hisway_New+Logo.webp` | Wide brand lockups, any light-background place where the full wordmark stays readable | Black artwork on a transparent background. Use only directly on a light or paper-toned background. Do not use dark overlays or filters that change the artwork — use the white variant below instead. |
| `public/images/brand/hisway-horizontal-logo-white.webp` | Derived from `hisway-horizontal-logo.webp` (same alpha/silhouette, recolored to white — not an inversion) | Desktop header and any other dark-background wide brand lockup | White artwork on a transparent background, for direct placement on dark surfaces (e.g. `bg-ink`) with no light panel needed. |
| `public/images/brand/hisway-badge-logo.webp` | `public/images/brand/LOGO (1).webp` | Mobile header/nav, footer branding, icon sources, and social / Open Graph compositions | The badge already has a black field and white artwork. Keep it in a simple light panel when used on dark sections. Preserve the square aspect ratio and avoid aggressive rounding or clipping. |

## Current placements

- Desktop header uses the white horizontal logo directly on the dark header, with no background/border/panel — the previous white panel treatment existed only because the black logo needed contrast, and no longer applies now that a proper white variant exists.
- Mobile header and mobile navigation use the badge logo in a light panel (unchanged).
- Footer branding uses the badge logo in a light panel.
- App icons use the badge logo as the source artwork.
- Open Graph branding uses the badge logo in a framed composition.

## Notes for future edits

- The logo artwork is owner-provided and should be treated as official brand identity, not general photography.
- Do not recompress the source WebP files unless a downstream format requires it.
- On a light background, use the black horizontal logo. On a dark background, use the white horizontal logo directly — do not wrap it in a light panel or apply CSS filters/inversions.
- If a new dark-background placement needs the white variant and it's out of sync with the black source, regenerate it by recoloring RGB to white while keeping the original alpha channel byte-for-byte identical (a true recolor, not a color inversion).
- The older staged square PNG copy in `public/images/brand/hisway-press-or-print-logo-square.png` can remain as reference, but it is no longer the preferred compact logo asset.
