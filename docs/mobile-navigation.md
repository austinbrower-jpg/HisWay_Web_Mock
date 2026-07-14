# Mobile Navigation

Documents the structure and accessibility behavior of the mobile menu (`src/components/layout/MobileNav.tsx`), opened from the hamburger trigger in `src/components/layout/Header.tsx`.

## Why it changed

The original mobile menu used a single scrollable region for the entire panel (header, links, and CTA together). On short viewports the panel overflowed, and scrolling down to reach "Request a Quote" also scrolled the close button off-screen. On tall viewports the opposite happened: a large, unbalanced empty gap opened up between the last link and the CTA. All primary links also rendered at identical size and weight, adding to a text-dense feel.

## Structure

The panel is now three stacked regions inside one `fixed inset-0` dialog:

1. **Header (stable, `shrink-0`)** — badge logo + close button. Never scrolls, so the close button is always reachable.
2. **Nav list (`flex-1 overflow-y-auto`)** — the only region that scrolls. Content is vertically centered when it's shorter than the available space (tall phones/tablets) and scrolls from the top when it overflows (short phones/landscape), instead of leaving a large empty gap either way.
3. **CTA / contact zone (stable, `shrink-0`)** — "Request a Quote" and the phone number. Pinned at the bottom so it's always visible without scrolling, with `env(safe-area-inset-bottom)` padding for notched devices.

No pages, links, or copy were removed or reordered — this was a structural and spacing change only.

## Accessibility behavior (confirmed and unchanged unless noted)

- Trigger button (`Header.tsx`) exposes `aria-label="Open menu"`, `aria-expanded`, and now `aria-controls="mobile-nav-panel"` pointing at the dialog's `id` (new).
- Dialog uses `role="dialog"`, `aria-modal="true"`, `aria-label="Menu"`.
- Focus moves to the close button on open, is trapped within the dialog (manual Tab/Shift+Tab cycling, verified to wrap in both directions), and returns to the trigger button on close.
- Escape closes the menu.
- Body scroll is locked while open (`document.body.style.overflow = "hidden"`) and restored on close.
- Touch targets are ≥44×44px throughout, including service sub-links and the phone link.
- Visible keyboard focus rings are inherited from the site-wide `:focus-visible` outline in `globals.css`.

## Viewports tested

320×568, 375×667, 390×844, 430×932, one landscape/short-height phone (812×375), one tablet (768×1024), and one desktop viewport for regression. Desktop navigation, dropdown, and footer were not modified.

## Validation

`npm run lint`, `npx tsc --noEmit`, and `npm run build` all pass. No project test command exists.
