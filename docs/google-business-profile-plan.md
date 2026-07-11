# Google Business Profile Plan

Plan for strengthening HisWay’s Google Business Profile (GBP) and review growth.  
Do not generate a working QR code until the verified direct Google review URL is provided and stored in `src/data/reviews.ts`.

## Profile audit checklist

Confirm and document each item with the owner:

- [ ] Business name (exact match to storefront / legal preference)
- [ ] Primary category
- [ ] Secondary categories (signs, screen printing, embroidery, etc.)
- [ ] Address (or service-area settings if applicable)
- [ ] Service area
- [ ] Phone
- [ ] Website (live HisWay site; concept preview should not replace it until cutover)
- [ ] Business hours
- [ ] Services list
- [ ] Products (if used)
- [ ] Business description
- [ ] Photos (exterior, interior, team, project work)
- [ ] Videos
- [ ] Review link (direct “Write a review” URL)
- [ ] Questions and answers
- [ ] Ownership and manager access (who can post, reply, and edit)

After audit, paste the verified profile URL and review-request URL into:

- `googleReviews.googleBusinessProfileUrl`
- `googleReviews.googleReviewRequestUrl`

in `src/data/reviews.ts`. Rating and review count stay `null` until copied exactly from Google.

## Ongoing cadence

Recommended organic workflow:

| Cadence | Action |
| --- | --- |
| Weekly | Add project photos from completed jobs |
| Weekly | Publish one GBP update (project completion, seasonal offer framing without false urgency, or shop process) |
| Ongoing | Respond to every review—positive and critical |
| Per project | Request a review after successful pickup/install |
| Ongoing | Reuse website portfolio content (photo + short factual caption) |
| Monthly | Track calls, website clicks, direction requests, and quote submissions |

Reuse the publishing loop in `docs/project-publishing-workflow.md` so website, GBP, and social stay aligned.

## Review request workflow

1. **In-person request** at pickup or installation completion—short, respectful, no pressure.
2. **Text or email** with the direct Google review link once verified.
3. **QR code** on invoices, receipts, and front-counter materials—only after the review URL is confirmed.
4. **One respectful follow-up** if no response; then stop.
5. **Respond to every review** with a human, specific reply.
6. **No payment or reward** for positive reviews.
7. **No review gating** (do not filter unhappy customers to private channels while sending happy customers to Google).

## Website connection

- Homepage and quote flows include review/trust modules that stay empty of fabricated data until verification.
- `ReviewRequestCta` links out only when `googleReviewRequestUrl` is set.
- Service pages can surface matched reviews via `relatedService` once real reviews are entered.

## Out of scope

- Scraping Google review HTML
- Inventing star ratings or review counts
- Automating review posting
- Generating QR codes before the URL is verified
