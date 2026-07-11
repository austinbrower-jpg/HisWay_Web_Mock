# Project Publishing Workflow

End-to-end content loop for turning a completed HisWay job into website, Google Business Profile, and social proof—without inventing details or publishing without permission.

## Workflow

### 1. Complete the customer project

Finish production, installation, or pickup. Capture final specs (sizes, colors, decoration method, materials) while they are fresh.

### 2. Capture original photos / video

Shoot originals on-site or in the shop. Prefer:

- One wide context image
- One detail image
- Optional short vertical video for social / GBP

Store originals; do not rely on compressed social downloads.

### 3. Confirm customer permission

Record permission status before naming the customer or showing identifiable branding when required:

- `not-requested` → ask
- `pending` → wait
- `granted` → safe to publish with agreed naming
- `declined` → publish anonymously or skip

Use the intake fields in `docs/content-and-photo-intake.md`.

### 4. Add the project to the website portfolio

Update `src/data/projects.ts` and replace images under `public/images/projects/`.

Fill only verified fields:

- title, summary, challenge, solution
- category, servicesUsed
- materials, decorationMethod, completionDate (when known)
- customerName / location only with permission
- customerPermission
- featured (selectively)
- seoTitle / seoDescription grounded in real facts

Leave review and social URL fields empty until those assets exist.

### 5. Add it to the relevant service page

Ensure `relatedProjects` on the matching service in `src/data/services.ts` includes the new slug so the service page “Related work” section stays current.

### 6. Publish a Google Business Profile update

Reuse the cover photo and a short factual caption. Link to the project page or the matching service page when helpful.

Record the post URL in `googleBusinessProfilePostUrl` once live.

### 7. Publish adapted Facebook and Instagram posts

Adapt the caption for each channel. Keep claims factual. Record `socialPostUrl` when available.

### 8. Send a review request

After a successful handoff, request a Google review using the verified direct review URL (see `docs/google-business-profile-plan.md`). Never incentivize positive reviews or gate review requests.

### 9. Connect the review when appropriate

If the customer leaves a Google review and grants republication:

1. Add it to `src/data/reviews.ts` with `verificationStatus: "verified"`
2. Set `relatedService` to the matching service slug
3. Optionally set `connectedReviewId` on the project
4. Feature it only when the quote is strong and permission is clear

## Publishing guardrails

- No fabricated results, ratings, or testimonials
- No scraped third-party images
- No customer names without permission
- No SEO keyword stuffing in project titles
- Concept site remains `noindex` until `company.isConceptSite` is flipped for production
