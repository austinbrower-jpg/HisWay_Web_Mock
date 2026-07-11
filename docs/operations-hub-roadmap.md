# HisWay Operations Hub Roadmap

Phased roadmap for a future internal sales and operations system.  
**Do not build this backend in the current website phase.** No Supabase, Postgres, auth, CRM, inventory app, or Stripe work belongs here yet.

The website remains a presentation and lead-capture front door. The Operations Hub would sit behind the shop for staff.

---

## Product domains

### Customers

- Companies
- Contacts
- Communication history
- Brand files
- Order history
- Notes
- Follow-ups

### Leads and quotes

- Lead source (door-to-door, referral, website, Google, social)
- Requested service
- Quantity
- Budget
- Deadline
- Artwork attachments
- Assigned salesperson
- Status
- Follow-up reminders
- Lost reason

### Jobs and orders

- Accepted quote reference
- Deposit status
- Supplier
- Product
- SKU
- Sizes
- Colors
- Decoration method
- Artwork approval
- Production status
- Installation
- Pickup
- Invoice
- Margin

### Artwork

- Original logo
- Clean vector
- Proof
- Print file
- Embroidery file
- Brand colors
- Placement notes
- Reorder assets

### Inventory (keep these separate)

1. **HisWay-owned physical stock** — blanks, substrates, vinyl, ink, thread the shop purchased
2. **Customer-owned materials** — customer-supplied garments or substrates stored for a job
3. **Supplier availability / product feeds** — remote catalog quantity, not local inventory

Do not treat a supplier catalog as local inventory.

### Reporting

- Revenue by service
- Revenue by customer
- Profit by job
- Lead source performance
- Quote conversion
- Repeat customers
- Follow-ups due
- Reordered products
- Jobs waiting for approval

---

## Recommended implementation phases

### Phase A — Discovery and process mapping

Learn before writing software:

- Current tools and costs (see `docs/hisway-discovery-questionnaire.md`)
- Real quote → job → invoice path
- Who needs access daily
- PromoPlace / SAGE / November contract constraints
- Artwork file reality (where files live; naming chaos)

Exit criteria: written process map + must-have vs nice-to-have list.

### Phase B — Lightweight lead and quote tracking

Smallest useful system:

- Leads and quote statuses
- Follow-up reminders
- Basic customer/company records
- Website quote form handoff (still no heavy CRM)

Exit criteria: shop stops losing follow-ups.

### Phase C — Job board and artwork vault

- Convert accepted quotes to jobs
- Production status board
- Artwork versions with approval checkpoints
- Reorder-friendly asset retrieval

Exit criteria: any staff member can find the latest approved file for a reorder.

### Phase D — Catalog and supplier decisions

Only after PromoPlace discovery (`docs/promoplace-and-catalog-discovery.md`):

- Decide keep / subdomain / API frontend / migrate
- Define what product data HisWay controls
- Separate supplier feeds from on-hand stock

Exit criteria: vendor choice documented with cost and export rights.

### Phase E — Inventory and margin reporting

- HisWay stock counts
- Customer-owned material tracking
- Job costing and margin
- Service and lead-source reporting

Exit criteria: owner can see profitable work without spreadsheets alone.

---

## What must be learned before development begins

1. Who will use the system daily, and on what devices
2. Exact November contract and data-ownership constraints
3. Whether quotes must sync with accounting or stay separate at first
4. How strictly artwork approvals must be gated before production
5. Whether customer portals are needed early (likely no)
6. Budget and appetite for custom software vs configuring existing tools
7. Security / access expectations for customer brand files

## Relationship to the marketing website

| Website (this repo) | Operations Hub (future) |
| --- | --- |
| Public trust, SEO, portfolio, quote UX | Private leads, jobs, files, margin |
| Static content + forms (mock → later wiring) | Authenticated staff workflows |
| Google review display | Review request tracking (optional later) |
| PromoPlace link-out | Catalog/order systems after discovery |

Keep these systems conceptually separate so the marketing site stays fast and simple.
