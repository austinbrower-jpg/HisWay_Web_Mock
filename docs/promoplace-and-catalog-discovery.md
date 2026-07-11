# PromoPlace and Catalog Discovery

Discovery framework for HisWay’s promotional-products catalog stack.  
**Do not integrate PromoPlace (or any vendor API) in this phase.** No final vendor recommendation until discovery answers are complete.

HisWay currently links to: `https://www.promoplace.com/hiswaypressorprint`

## Questions for HisWay

### Commercial

- What does HisWay currently pay for Squarespace, SAGE, PromoPlace, and related tools (monthly/annual)?
- Which agreement ends in November?
- Is PromoPlace included in the SAGE agreement, or billed separately?
- What features disappear after cancellation of the current agreement?
- What data does HisWay retain after cancellation (products, customers, orders, artwork, domain)?
- Who owns the product data, customer data, order data, and any custom domain/subdomain?

### Product experience

- Can the existing PromoPlace navigation be simplified for HisWay customers?
- Can the catalog use a branded subdomain?
- Can category and product pages be deep-linked from the HisWay website?
- Is single sign-on available for staff or customer stores?
- Can customers, carts, quotes, and orders be exported?

## Questions for SAGE / PromoPlace

### API and data access

- Is there a public or private product API?
- Does it support REST, GraphQL, XML, CSV, and/or PromoStandards?
- Can the API return:
  - Product names
  - Descriptions
  - Images
  - Categories
  - Brands
  - Variants
  - Colors
  - Pricing
  - Supplier inventory
  - Decoration methods
- Can a custom frontend use their data legally and technically?
- Are there caching or image-display restrictions?
- What rate limits, authentication, and contract terms apply?

### Operations

- How are quotes, artwork approvals, and orders handled today?
- What staff training is required to keep using vs migrating?
- What is the migration path off PromoPlace if HisWay leaves?

## Comparison matrix (fill during discovery)

Do not score a winner until cells are populated with real answers.

| Criteria | Keep PromoPlace as-is | PromoPlace on branded subdomain | Custom frontend + PromoPlace API | Migrate to OrderMyGear or DistributorCentral | Apparel-focused (e.g. InkSoft) | Custom catalog later |
| --- | --- | --- | --- | --- | --- | --- |
| Annual cost | | | | | | |
| Setup cost | | | | | | |
| Supplier coverage | | | | | | |
| API access | | | | | | |
| Custom-brand control | | | | | | |
| Product-data quality | | | | | | |
| Customer stores | | | | | | |
| Quote tools | | | | | | |
| Ordering | | | | | | |
| Artwork approval | | | | | | |
| Inventory feeds | | | | | | |
| Export rights | | | | | | |
| Contract restrictions | | | | | | |
| Staff usability | | | | | | |
| Migration difficulty | | | | | | |

## Current website stance

The concept site keeps PromoPlace as an external catalog entry point (`company.catalogUrl` and `/promotional-products`). That remains appropriate until discovery concludes.

## Decision rule

Recommend a path only after:

1. November contract terms are documented
2. API/export rights are confirmed in writing
3. Staff usability is tested with a real quote workflow
4. Cost is compared on a 12–24 month horizon
5. HisWay confirms who will maintain the catalog day to day
