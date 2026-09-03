# SB-P-1.11 — Product Catalog & Pricing

## Metadata

| Field | Value |
|---|---|
| Mission ID | SB-P-1.11 |
| Mission Name | Product Catalog & Pricing |
| Mission Type | Product Feature Elaboration |
| Lifecycle Stage | Stage 1 — Product Definition — Blueprint Locked |
| Product Blueprint Scope | Metadata, Mission Snapshot, Sections 1–21 |
| Status | Blueprint Locked — ready for separate EIS authorization |
| Product Authority | Founder |
| Product Discovery and Drafting | Codex |
| Constitutional Authority | Source 01 and Source 11 jointly, subordinate to the Lighthouse Constitution |
| Lifecycle Authority | Source 18 |
| Upstream Product Dependency | SB-P-1.10 — Inventory Foundation (accepted) |
| Founder Decision Record | [`SB-P-1.11-Founder-Product-Decision-Record.md`](./SB-P-1.11-Founder-Product-Decision-Record.md) |
| Date | 2026-08-04 |
| Builder Review | Completed by Claude Code; Findings F3, F4, and F5 (including the replacement-link scope) independently verified as resolved (`report1.2.md`, `report1.4.md`, `report1.6.md`) |
| Engineering Review | Completed by Claude Code; Sections 20–21 added — see Section 21 Engineering Decision and Readiness |
| Founder Approval | Granted — Founder approved Sections 1–21 and engineering sequencing and authorized Mission Control Blueprint Lock; EIS and implementation remain unauthorized |
| Mission Control Review | Accepted — completed Product Blueprint, Founder Decisions D-001–D-068, Builder Review verifications, Engineering Review, and Founder lock authorization accepted |
| Blueprint Lock | Applied by Mission Control on 2026-08-04 — Sections 1–21, Founder Decisions D-001–D-068, and engineering sequencing are locked as authority for the next lifecycle stage |
| Next Lifecycle Gate | Separate EIS authorization required; EIS preparation and implementation remain unauthorized |

## Mission Snapshot

| Field | Summary |
|---|---|
| Product problem | Kerala merchants need one understandable place to define what they sell, how it is identified, its current selling price and limited tax treatment, and whether it is connected to stock. |
| Primary users | Business owner, explicitly authorized managers, and sale-authorized employees within defined visibility limits |
| Build Now | Business-owned catalog, stock/non-stock products, optional one-to-one inventory link, one selling unit, categories, one current and one pending selling price, reference cost, limited tax configuration, SKU, barcode, image, lifecycle, permissions, audit history, dashboard and guided conversational workflows, CSV/Excel import |
| Core boundary | Catalog defines sale identity and pricing; SB-P-1.10 Inventory remains the only stock truth. |
| Build Later | Unit conversion, packaging, variants, bundles/recipes, multiple barcodes, price levels, scheduled tax/cost, scanning/labels, multi-currency, margin intelligence, richer imports and exports |
| Separate governed products/missions | Purchase Workflow, Sales Workflow, POS Integration Foundation, Financial Reports, Ask CFO, commerce/public catalog |
| Rejected | Second stock truth, direct quantity mutation, automatic legal tax classification, historical price/tax rewriting, global cross-business identifiers, uncontrolled employee financial access, custom POS modification inside core |
| Stage result sought | A reviewable Founder-traceable Product Blueprint through Section 19; no engineering or implementation artifact |

## 1. Mission Overview

### Purpose

Define the first governed Smart Business product catalog and pricing model for small brick-and-mortar merchants. The mission gives a merchant a clear, permission-aware record of what the business sells while preserving the accepted Inventory Foundation as the sole authority for stock identity, movement history, and current quantity.

### Summary

Product Catalog & Pricing establishes business-owned catalog products that may be stock-tracked through one explicit inventory link or may operate as non-stock products. It defines required human-readable identity, optional categories and identifiers, one selling unit, one current selling price, one optional scheduled selling price, an optional reference cost, limited merchant-entered tax treatment, product lifecycle, permission boundaries, audit history, guided conversational operation, and safeguarded CSV/Excel import.

This mission does not implement sales, purchasing, accounting, compliance, POS, inventory conversion, or product-intelligence systems. It provides a stable product definition that those future governed workflows may reference without changing historical meaning or creating competing truth.

### Mission Philosophy

The catalog should feel like a familiar merchant list, not an enterprise product-information system. Required setup remains small; optional structure is available when useful. AI assists capture and organization but does not guess legal tax treatment, silently change records, or make merchant decisions. Product identity and price history remain explainable to the people who depend on them.

## 2. Domain

### Business Operations Domain

This mission belongs to the Business Operations Domain. It defines the business-owned catalog identity and current pricing information consumed by later sales, purchase, reporting, integration, and advisory workflows.

### Relationship to Other Domains

#### Inventory Domain

Catalog and inventory are separate. A product may have one optional business-scoped link to one inventory item, and one inventory item may be linked to at most one product in Build Now. The linked inventory item's immutable base unit becomes the product selling unit. Current stock always remains derived from the SB-P-1.10 ledger.

#### People and Permissions Domain

The business owner controls catalog permissions. Managers receive explicit, action-specific authority. Employees may use sale-ready products in permitted sales but cannot manage product master data or view protected financial information.

#### AI and Conversation Domain

Dashboard and guided WhatsApp text, voice, and photo-assisted flows may help capture, search, and update permitted catalog information. The assistant must show a structured preview and obtain explicit confirmation before saving consequential changes.

#### Commerce Domain

The catalog provides internal product identity and pricing foundations. Public storefronts, online ordering, marketplace publication, and customer commerce experiences are separate governed work.

#### Integration Domain

Standard POS bridges may be added only through the separately governed POS Integration Foundation. Custom POS modifications inside the Smart Business core remain rejected.

## 3. Mission Objective

Establish one trustworthy catalog per business that:

- gives every product a clear human-readable identity;
- supports stock and non-stock selling without duplicating inventory truth;
- defines one understandable selling unit and price;
- preserves price, cost, tax, lifecycle, identity, and relationship history;
- protects cost and other financial information through owner-controlled permissions;
- supports merchant-friendly dashboard, WhatsApp, voice, photo, text, CSV, and Excel entry;
- remains usable by sale-authorized employees without disclosing restricted intelligence; and
- provides stable product references for future Sales, Purchase, POS, Reporting, Ask CFO, and Commerce missions.

## 4. Business Purpose

Many small merchants identify products through memory, handwritten lists, packaging, supplier codes, or the language used at the counter. Prices may change without a reliable history, stock identity may be confused with selling identity, and employees may need to sell products without being allowed to see cost information.

Smart Business should reduce this friction by giving the merchant one simple catalog that can be created gradually, searched quickly, and maintained through familiar channels. The catalog must help the merchant answer: What do we sell? What is it called? How is it sold? What is its current price? Is it connected to stock? Who changed it? The answer must remain understandable without pretending that a reference cost is accounting truth or that merchant-entered tax data is legal advice.

## 5. Product Truth Alignment

### Humans Serving Humans

The feature reduces repetitive setup and ambiguity so owners and staff can serve customers more confidently. It does not replace merchant judgment.

### AI Assistant, Not AI Judge

AI may extract candidate fields from voice, text, photos, or import files, identify ambiguity, and prepare a preview. It must not invent missing prices, decide legal tax treatment, infer sensitive permissions, or save uncertain consequential changes without confirmation.

For multilingual catalog use, AI may suggest interpreted search matches across English, Malayalam, and Manglish where reliable. It must clarify uncertainty and must never silently rename, translate, merge, or overwrite merchant catalog wording.

### Respect Existing Merchant Workflows

The experience supports familiar names, business-defined categories, common and custom units, SKU, barcode, images, spreadsheets, and conversational input. Optional structure must not become unnecessary setup burden.

### WhatsApp-First, Not WhatsApp-Only

Core guided catalog actions are available through WhatsApp-style conversation while the dashboard provides complete structured management. No workflow depends exclusively on one channel.

### Human Decision Ownership

The owner controls permissions and consequential business choices. Authorized users review and confirm interpreted or imported changes before they become authoritative.

### Business Continuity First

Archival, immutable historical evidence, conditional deletion, safe import, and independent inventory lifecycle preserve continuity when products, prices, tax settings, or staff change.

## 6. User Value

| User | Value |
|---|---|
| Business owner | Maintains one trusted catalog, controls price/cost/tax visibility and permissions, understands change history, and connects products to stock without losing inventory truth. |
| Authorized manager | Performs only owner-granted catalog actions, including product maintenance, price or tax changes, linking, and import where permitted. |
| Sale-authorized employee | Finds and selects active sale-ready products with the price and tax information needed for permitted work, without exposure to cost, margin, management controls, or protected histories. |
| Future governed workflows | Reference stable product identity, transaction-time price/tax evidence, and the existing inventory ledger without recreating catalog or stock records. |

## 7. Core Deliverables

| Deliverable | Product outcome | Boundary |
|---|---|---|
| Business-owned Product Catalog | Clear searchable identity for what the business sells | No public marketplace or universal taxonomy |
| Product–Inventory Relationship | Optional one-to-one link to the accepted inventory entity | Never owns or directly changes stock quantity |
| Product Units | One selling unit per product | No alternate units, packaging conversion, or rounding model |
| Categories | Optional flat merchant-defined organization | No nested hierarchy |
| Selling Price | One current price and at most one scheduled future price | No price tiers, customer pricing, or discount engine |
| Reference Cost | Optional protected merchant reference | Not purchase, valuation, COGS, margin, or accounting truth |
| Product Tax Treatment | Business default, product rate, or explicit non-taxable choice | No legal classification or compliance guarantee |
| Identifiers and Image | Required name; optional SKU, barcode, description, and one image | No multiple barcodes, variant hierarchy, scanning, or labels |
| Lifecycle and Audit | Active/archive, guarded deletion/reactivation, complete meaningful change history | No silent deletion or historical rewriting |
| Permission-Aware Access | Independent owner-controlled actions and restricted employee use | No role assumption beyond explicit authority |
| Guided Multichannel Experience | Dashboard and confirmed WhatsApp/text/voice/photo workflows | AI never saves uncertain consequential changes silently |
| Bulk Import | Safeguarded CSV/Excel import and correction queue | No automatic overwrite or invalid live product creation |

## 8. Detailed Functional Scope

### Catalog Product

Every product belongs to exactly one business. It has one required business-unique human-readable name. Description, category, SKU, barcode, image, inventory link, selling price, and reference cost are optional during initial setup, subject to the separate sale-readiness rules below.

Catalog product identity is not inventory identity. The product describes what is sold. Inventory describes what stock exists and how its quantity changes.

### Stock-Tracked and Non-Stock Products

Stock status is derived from the inventory link. A product linked to an inventory item is labelled Stock tracked. An unlinked product is labelled Non-stock. No editable type field may contradict the relationship.

Non-stock products never originate stock movements. Stock-tracked products do not themselves alter quantity; a later authorized business workflow must create traceable movements through the accepted inventory movement path.

### Product–Inventory Link

The link is optional, business-scoped, and one-to-one in both directions in Build Now. Cross-business links are prohibited. Link, unlink, or replacement is permitted only before the product has sales or linked stock-event history. After such history exists, the relationship is locked and a new product is required for a different inventory identity.

Archiving either record never silently archives the other. An active product linked to archived inventory cannot be used in a new sale and must present a clear resolution warning.

When either first-time assignment of an inventory link or permitted replacement of an existing inventory link would change the product's selling unit to the proposed inventory item's immutable base unit, the existing numeric selling price must not be silently reinterpreted under the new unit. Before the assignment or replacement is saved, the merchant must explicitly confirm the selling price for the proposed new unit or enter a replacement price. Until confirmation and saving succeed, the existing product record, current inventory link state, selling unit, and selling price remain unchanged. Cancellation, incomplete confirmation, validation failure, or save failure preserves that existing state. The confirmed price and completed assignment or replacement enter their appropriate audit histories. This safeguard applies only while assignment or replacement remains permitted under the no-sale-history and no-linked-stock-event-history boundary above.

### Product Name and Description

Name is required and unique within the business. Different businesses may use the same name. Separately priced, identified, or stocked sizes, flavours, or forms must be distinguishable in their product names. Description is optional.

Product names and descriptions may be entered and displayed in English, Malayalam, or Manglish. The merchant is not required to translate catalog wording into another language, and Smart Business preserves the merchant's chosen display form.

Within one business, product-name uniqueness ignores leading and trailing whitespace, treats repeated internal whitespace consistently, and treats Latin-letter case differences as equivalent. These comparison rules do not alter the stored display wording. Different Malayalam spellings, Manglish transliterations, and translated names are not automatically treated as the same product. When they appear possibly related, Smart Business returns a possible match for merchant review rather than silently merging, renaming, translating, or overwriting either record.

### Product Image

One optional product image supports visual recognition and photo-assisted setup. A missing image never blocks creation or sale readiness. Image changes are auditable.

### SKU

A product may have one optional merchant-defined SKU. It is unique within the business and may be reused by another business. SKU is an internal identifier, not a stock quantity or legal product identifier.

SKU uniqueness ignores leading and trailing whitespace and treats Latin-letter case differences consistently for exact identifier matching within the business. The merchant-entered display value is preserved. Different transliterations or translations are not inferred to be the same SKU; an uncertain possible match requires merchant review and is never merged automatically.

### Barcode

A product may have one optional manually entered barcode. It is unique within the business and may be reused by another business. Multiple barcodes, camera or hardware scanning, label generation, and POS synchronization are not Build Now.

Barcode uniqueness uses a consistent exact-identifier comparison within the business after ignoring leading and trailing whitespace and normalizing Latin-letter case where letters are present. The merchant-entered display value is preserved. A possible but non-exact match is presented for merchant review and never merged automatically.

### Product Variants

Build Now has no parent/variant hierarchy. A separately priced, identified, or stocked size, flavour, or form is a separate product. Structured variants are future evolution.

### Categories

Categories are optional, flat, business-owned, and merchant-defined. A product has zero or one category. Category names are unique within the business. Uncategorized products remain visible and usable.

Category names may be entered and displayed in English, Malayalam, or Manglish without requiring translation. Business-scoped category-name matching ignores leading and trailing whitespace, treats repeated internal whitespace consistently, and treats Latin-letter case differences as equivalent while preserving the merchant's display wording. Different Malayalam spellings, Manglish transliterations, or translated category names are not automatically merged; possible matches require merchant review.

Archiving a category requires explicit confirmation, does not archive products, makes affected products uncategorized, prevents new use of the category, and preserves prior category history.

### Selling Unit

Every product has exactly one selling unit. A stock-tracked product inherits the linked inventory item's immutable base unit and cannot configure an alternate selling unit. A non-stock product defaults to piece and may use a familiar standard or merchant-defined custom unit. A non-stock selling unit may change only before sales history exists. Custom units create no conversion behavior.

If first-time inventory linking or permitted replacement linking changes the product's selling unit, the old price cannot silently acquire the meaning of a price per new unit. Either workflow must obtain explicit confirmation of the selling price for the new unit or a replacement price before changing any product or link state.

### Business Currency

Each business has one currency in Build Now, defaulting to INR. Selling price and reference cost use that currency. Multi-currency pricing and exchange-rate behavior are deferred.

### Selling Price

A product has at most one current selling price. It may be blank during setup but must be greater than zero for sale eligibility. Zero and negative selling prices are invalid for sale use. Prices support two decimal places and must display paise without hidden whole-rupee rounding.

The catalog price is the default authoritative selling price. Discounts and authorized sale-time overrides belong to the future Sales Workflow and must never rewrite catalog price history.

### Selling-Price History

Every effective selling-price change preserves old value, new value, effective time, record time, and responsible user. Completed sales retain transaction-time price evidence and are never recalculated from the current catalog.

### Scheduled Selling Price

An authorized user may create one pending future price for an exact future date and time in the business timezone. The pending value and activation time remain visible. The user may replace or cancel it with audit history. When it becomes effective, it enters permanent price history.

Archiving requires confirmation and cancels a pending scheduled price with an audit record. Reactivation uses the last effective price and normal sale-readiness validation.

### Reference Cost Price

Reference cost is optional, may be zero, and cannot be negative. It changes immediately and preserves history. It is merchant-entered reference information only—not purchase truth, inventory valuation, COGS, verified margin, or accounting truth. Build Now does not calculate or claim margin. Scheduled reference cost belongs to the future Purchase Workflow.

### Tax Treatment

Tax configuration is optional at the business level but must be resolved for a product before sale. A product may inherit the business default, use a merchant-entered product-specific tax rate, or be explicitly marked non-taxable. If no business default exists, inherit is incomplete and cannot make the product sale-ready.

Smart Business records the merchant's choice but does not determine legal classification, prepare filings or returns, guarantee invoice compliance, or provide legal advice.

### Tax-Inclusive or Tax-Exclusive Pricing

The business selects one pricing mode for all products: tax-inclusive or tax-exclusive. Products cannot override it in Build Now. The experience makes entered price, tax basis, and customer-facing amount understandable.

The mode may change only before completed sales exist. A later change requires a separate governed price migration that preserves historical sales and product/inventory identity.

### Tax History

Tax changes take effect immediately and preserve old value, new value, time, and responsible user. Completed sales retain transaction-time tax evidence. Scheduled tax changes are deferred.

### Product Lifecycle

Products are Active or Archived. Archive represents discontinuation, prevents new sales, removes the product from ordinary active selection, and preserves authorized history. Authorized reactivation is allowed but sale eligibility must be revalidated.

### Conditional Permanent Deletion

An unused product may be deleted only before it has price history, tax history, sales history, an inventory link, a linked stock event, or any other dependent business history. Otherwise it must be archived. Permitted deletion removes it from the live catalog but retains a minimal audit record of product identity, business, deletion time, and responsible user.

### Sale Readiness

An Active product is sale-ready only when it has:

- a valid current selling price greater than zero;
- one valid selling unit;
- resolved tax treatment;
- no invalid or conflicting identifier state; and
- if stock-tracked, an active linked inventory item in the same business.

Category, description, image, SKU, barcode, reference cost, and stock link for a non-stock product remain optional.

### Permissions

The owner has catalog authority by default. Manager authority is independently owner-controlled for catalog viewing, product creation and details, lifecycle, selling price, tax, reference cost, and inventory linking. Inventory linking also requires inventory-view permission. Cost remains separately protected. Ordinary employees cannot manage product master data.

Sale-authorized employees may view and select active sale-ready products and see the selling-price and tax information required for the sale. They cannot see reference cost, margin, protected histories, or management actions. Ledger-derived stock is visible beside a product only to a user with inventory-view permission.

### Audit History

Meaningful changes to name, description, image, category, SKU, barcode, unit, inventory link, status, price, cost, and tax preserve old/new meaning, time, and responsible user. Historical entries are not silently edited or removed. Access to history follows business ownership and action-specific permissions.

### Search and Filtering

Authorized users can search products by familiar identity, including name, SKU, and barcode where present. The catalog supports useful filtering by active/archive state, category, sale readiness, and stock-tracking status without exposing fields the user lacks permission to view.

Search supports ordinary mixed-language merchant usage across English, Malayalam, and Manglish where matching is reliable. It searches merchant-entered wording without requiring translated duplicate records. Exact normalized identifier matching remains distinct from interpreted language matching. When translation, transliteration, spelling, or mixed-language intent is uncertain, Smart Business may suggest possible results but must communicate uncertainty and must not present an interpretation as authoritative catalog data or use it to rename, merge, or overwrite records.

### Dashboard Experience

The dashboard provides complete permission-aware catalog creation, list, detail, editing, lifecycle, price/tax/cost history, import, correction-queue, and search experiences. Available actions reflect the user's authority.

### WhatsApp, Voice, Text, and Photo Assistance

Guided flows support creation, search, and permitted changes. The assistant may extract candidate product information but must identify uncertainty, present a structured preview, and obtain explicit confirmation before saving. Permission checks apply to the underlying action regardless of channel.

### CSV and Excel Bulk Import

An owner or a manager with product-creation permission may import. Employees may not. Valid rows are saved; invalid rows are quarantined without creating live products. Error reports and correction needs are communicated through WhatsApp and the planned in-app conversational interface.

Rows matching an existing business-unique name, SKU, or barcode are never overwritten automatically. They enter a correction queue where an authorized user explicitly chooses to update, skip, or correct them. Corrections must again pass product validation and permission checks.

### Business Ownership and Isolation

Every product, category, price event, tax event, cost event, identifier, image reference, import record, correction item, inventory link, and audit event belongs to exactly one business. Users must not discover or access another business's records through search, validation, duplicate checks, imports, or errors.

## 9. UI / UX Expectations

### Product Creation Experience

Creation should start with the required name and keep optional fields clearly optional. The user should understand whether the product is stock-tracked or non-stock, what unit and price mean, and what remains incomplete before sale.

### Multilingual Catalog Experience

Product names, descriptions, and category names display in the wording entered by the merchant, whether English, Malayalam, Manglish, or ordinary mixed-language usage. The experience does not force translation. Search suggestions distinguish reliable matches from uncertain interpreted matches and leave confirmation with the merchant.

### Catalog List

The list should make active products easy to scan by name, image where present, category, selling unit, current price, sale-readiness state, and stock-tracking label. Restricted cost or stock information must never appear without permission.

### Product Detail

The detail experience should separate product identity, selling information, tax, inventory relationship, lifecycle, and histories so merchants can understand current truth and available actions without technical terminology.

### Price Experience

Current and pending price must be visually distinct. Scheduled activation uses the business timezone. Price entry and display preserve two-decimal precision and clearly communicate whether the business uses tax-inclusive or tax-exclusive pricing.

### Tax Experience

The interface shows whether tax is inherited, product-specific, or explicitly non-taxable and shows the effective source. It uses neutral language and never implies that Smart Business verified legal treatment.

### Inventory-Link Experience

Users see a clear warning that linking does not transfer stock authority to the catalog. Link actions show the selected inventory identity and base unit and require confirmation. Locked links explain why they cannot change.

If first-time linking changes the selling unit, the preview must show the current unit and selling price, the proposed inventory link and base unit, and the selling price requiring confirmation for that new unit.

If replacement linking changes the selling unit, the preview must show the current inventory link, current unit and selling price, proposed replacement inventory link and base unit, and the selling price requiring confirmation for that proposed new unit.

For either action, the merchant must confirm the price or enter a replacement before saving. Cancellation, incomplete confirmation, validation failure, or save failure leaves the existing product record, current inventory link state, selling unit, and selling price unchanged.

### Lifecycle Experience

Archive, reactivation, category retirement, and deletion communicate consequences before confirmation. Archiving a product explains sale blocking and pending-price cancellation. Inventory and product lifecycle actions never masquerade as a single automatic action.

### Import and Correction Queue

Import shows recognized fields, valid rows, conflicts, invalid rows, and actions still required. Successful rows and quarantined rows are clearly distinguished. Error reports remain understandable through both dashboard and conversational channels.

### Empty and Incomplete States

Empty catalogs invite simple creation or import. Unpriced or tax-incomplete products show the exact missing requirement without representing failure as success. Uncategorized and non-stock products remain ordinary supported states.

### Permission Behaviour

Unavailable actions are hidden or clearly disabled without revealing other-business data. Denied actions never appear successful. Sensitive values do not leak through list totals, search results, import errors, messages, or audit views.

### Mobile and Conversational Experience

Critical creation, search, review, confirmation, and correction flows work on a merchant's phone. Voice and photo interpretation produce short, reviewable structured previews rather than long technical forms.

### Desktop Experience

Desktop supports efficient catalog review, import, correction, filtering, and history without creating different product truth from mobile or conversation.

### Accessibility Expectations

Labels, validation, focus, contrast, status, confirmations, and error messages must remain perceivable and understandable without relying on color alone. Images require meaningful accessible treatment where displayed.

## 10. Business Rules

1. Every catalog record and related event belongs to exactly one business.
2. A product and inventory item are separate records; inventory remains the sole stock truth.
3. A product has zero or one inventory link, and an inventory item links to zero or one product in Build Now.
4. Cross-business product, category, inventory, identifier, import, or history relationships are prohibited.
5. Stock status is derived only from the inventory link.
6. A non-stock product never creates an inventory movement.
7. A stock-tracked product uses its linked inventory base unit and never directly changes stock quantity.
8. Product name is required and business-unique after ignoring leading/trailing whitespace, normalizing repeated internal whitespace, and treating Latin-letter case differences as equivalent; the merchant's display wording is preserved.
9. SKU and barcode are optional, single-valued, and independently business-unique under consistent exact-identifier normalization that ignores leading/trailing whitespace and treats Latin-letter case consistently while preserving display values.
10. A product has zero or one flat merchant-defined category.
11. Every product has exactly one selling unit; Build Now has no conversion or packaging relation.
12. A product has at most one current and one pending scheduled selling price.
13. Sale readiness requires an Active product, price greater than zero, valid unit, resolved tax, and active linked inventory where applicable.
14. Prices and reference costs support two decimal places without hidden rounding.
15. Reference cost is optional, non-negative, protected, and never represented as purchase, valuation, COGS, margin, or accounting truth.
16. Tax treatment is merchant-controlled and never automatically legally classified by Smart Business.
17. Business pricing mode is uniform across products and cannot change after completed sales without separate governance.
18. Completed sales preserve transaction-time price and tax evidence.
19. Product, price, cost, tax, link, lifecycle, identifier, unit, category, description, and image changes preserve audit meaning.
20. Product and inventory archival remain independent; neither silently changes the other.
21. A product with business history is archived rather than deleted.
22. A permitted deletion retains a minimal deletion audit record.
23. Import never creates a live product from an invalid row and never overwrites an existing product automatically.
24. Every dashboard or conversational mutation enforces the same action-specific permission and confirmation rules.
25. Ordinary employees cannot manage products or access cost, margin, protected histories, or other-business data.
26. Future Sales, Purchase, POS, Reporting, Ask CFO, and Commerce work must reference this catalog without rewriting its historical meaning.
27. Product and category wording may use English, Malayalam, or Manglish without forced translation; uncertain translated, transliterated, or spelling-based matches require merchant review and never cause silent rename, merge, or overwrite.
28. When first-time inventory-link assignment or permitted replacement of an existing inventory link changes the selling unit, the assignment or replacement cannot be saved until the merchant confirms or replaces the selling price for the proposed new unit; until confirmation and saving succeed, cancellation, incomplete confirmation, validation failure, or save failure leaves the existing product, current link state, unit, and price unchanged.

## 11. Out of Scope

### Build Later

- alternate selling units, pack sizes, unit conversions, and conversion rounding;
- parent/variant hierarchy;
- multiple or alternate barcodes;
- barcode scanning, label generation, and scanner hardware workflows;
- nested categories and universal taxonomy mapping;
- price levels, wholesale tiers, customer-specific pricing, promotions, and discount rules;
- scheduled tax and reference-cost changes;
- multi-currency and exchange rates;
- calculated margin or profit intelligence;
- richer bulk editing, catalog export, and automated external-catalog synchronization;
- recipes, bills of materials, bundles, composite products, and shared-stock selling forms.

### Add-on or Approved Extension Layer

- standard POS bridges and POS operational alerts;
- advanced commerce or channel-specific catalog publication where approved;
- assisted large-scale catalog onboarding beyond the core self-service importer.

### Separate Product or Governed Mission

- Purchase Workflow and supplier cost truth;
- Sales Workflow, discounts, returns, and sale-time price override rules;
- POS Integration Foundation;
- Financial Reports and accounting truth;
- Ask CFO and financial advisory intelligence;
- public storefront, marketplace, online ordering, and customer commerce;
- advanced conversation workspace and AI foundations beyond the guided flows defined here.

### Reject

- any second stock ledger, cached quantity presented as independent truth, or direct catalog write to current stock;
- automatic legal tax classification, filing, return preparation, or compliance guarantee;
- rewriting completed-sale price or tax evidence after catalog changes;
- negative selling price or negative reference cost;
- global cross-business product, name, SKU, barcode, or category uniqueness;
- uncontrolled employee access to cost, margin, histories, or management actions;
- automatic archive propagation between product and inventory;
- automatic import overwrite or creation of invalid live products;
- custom POS modifications inside the Smart Business core platform;
- AI saving uncertain or consequential catalog changes without explicit human confirmation.

## 12. Dependencies

### Upstream Dependencies

- Lighthouse Constitution.
- Source 01 — Smart Business Master System Manifesto and Source 11 — Smart Business Product Truth Map as the joint Phase 1 Constitution.
- Source 18 — SB-P Mission Lifecycle and Delivery Framework.
- Accepted SB-P-1.10 Inventory Foundation: stable business-owned inventory identity, immutable base unit, append-only movement ledger, ledger-derived current stock, lifecycle, permissions, audit history, and trusted event-link boundary.
- Existing business membership, role, permission, authentication, and business-isolation foundations.
- Existing transaction-time and currency behavior must be reconciled during later engineering design without treating stale Source 02 schema examples as current inventory truth.

### Downstream Dependencies

- SB-P-1.13 — Purchase Workflow.
- SB-P-1.14 — Sales Workflow Enhancement.
- SB-P-1.16 — POS Integration Foundation.
- SB-P-1.17 — Financial Reports Foundation.
- SB-P-1.18 — Ask CFO Foundation.
- SB-P-1.21 — Smart Business Conversation Workspace.
- SB-P-1.22 — AI Conversation Foundation.
- Future catalog variants, packaging, unit conversion, commerce, and integration missions.

## 13. Risks & Mitigations

| Risk | Business impact | Product mitigation |
|---|---|---|
| Catalog becomes a second stock truth | Conflicting quantities and loss of trust | Keep product and inventory separate; display only ledger-derived stock; prohibit direct quantity mutation. |
| Incorrect product–inventory link | Future sales affect the wrong stock identity | Business-scoped one-to-one link, separate permission, clear preview, history lock, and explicit confirmation. |
| Mutable price or tax rewrites history | Completed sales become misleading | Permanent change history and transaction-time snapshots in consuming workflows. |
| Reference cost is mistaken for profit truth | Owner makes decisions from incomplete data | Label as reference only; no margin calculation; protect visibility. |
| Tax setting is mistaken for compliance advice | Legal and trust risk | Merchant-controlled choices, explicit unresolved state, neutral language, no automatic classification or guarantee. |
| Scheduled price activates unexpectedly | Counter staff charge an unintended amount | One visible pending price, exact business-local time, cancellation/replacement history, archive cancellation. |
| Product and inventory lifecycle silently cascade | Valid stock history or sale identity becomes unavailable | Independent lifecycle actions, warnings, and sale-readiness validation. |
| Duplicate identifiers or imports create ambiguity | Wrong product selected or updated | Per-business uniqueness and correction queue; never automatically overwrite. |
| Partial import hides failures | Merchant assumes missing products were created | Clear success/quarantine counts and WhatsApp/in-app error reporting. |
| Employee sees protected financial information | Confidential cost information is exposed | Separate permissions, field-level visibility boundaries, and non-disclosure through errors and histories. |
| Conversational interpretation saves wrong data | Incorrect product or price becomes authoritative | Structured preview, uncertainty disclosure, permission check, and explicit confirmation. |
| Multilingual matching is treated as authoritative translation | Distinct products or categories may be silently merged or renamed | Preserve merchant wording; separate normalized exact matching from interpreted suggestions; require merchant review for uncertain Malayalam, Manglish, translation, or transliteration matches. |
| First-time or replacement inventory linking silently changes price meaning | A price entered per the current unit may be charged per a different inventory base unit | For assignment, show current unit/price and proposed link/unit; for replacement, also show current and proposed inventory links. Require explicit price confirmation or replacement before atomically saving the price and assignment or replacement; any cancellation or failure preserves existing state. |
| One-to-one relationship later proves too narrow | Packaging or recipes need redesign | Deliberately defer variants, conversions, bundles, and shared-stock forms to governed evolution. |
| Pricing-mode change alters monetary meaning | Current and historical amounts become inconsistent | Lock mode after first completed sale; use a future governed migration if change is required. |
| Stale architecture source influences design | Engineering revives superseded mutable inventory | Treat accepted SB-P-1.10 as controlling inventory dependency and flag Source 02 reconciliation for later review. |

## 14. Success Criteria

- Merchants can create, find, understand, update, archive, reactivate, and conditionally delete products without unnecessary required fields.
- Stock-tracked products connect to the accepted inventory identity without changing inventory truth.
- Non-stock products work without generating stock movements.
- Sale readiness is explicit and prevents use of incomplete or invalid products.
- Current, pending, and historical prices remain understandable and completed sales retain their original meaning.
- Tax and reference cost remain within their approved non-compliance and non-accounting boundaries.
- Employees can perform permitted sales work without seeing protected data or controls.
- Dashboard and guided conversational experiences enforce identical permissions and confirmation behavior.
- CSV/Excel import provides fast progress while quarantining invalid or duplicate rows safely.
- Every meaningful change is attributable and historically explainable.
- Merchants can enter and find catalog wording in English, Malayalam, and Manglish without forced translation or silent AI rewriting.
- First-time inventory linking and permitted replacement linking cannot silently reinterpret an existing price under a changed selling unit.
- Build Now, Build Later, Add-on, Separate Product, and Reject boundaries are clear enough for later review without creating engineering design prematurely.

## 15. Acceptance Criteria

- [ ] Every product and category is business-owned and isolated.
- [ ] Product name is required and business-unique under the approved whitespace and Latin-case normalization while preserving merchant-entered display wording.
- [ ] Optional SKU and barcode are individually business-unique and single-valued under the approved exact-identifier normalization while preserving merchant-entered display values.
- [ ] A product has zero or one category and zero or one inventory link.
- [ ] An inventory item cannot link to more than one product in Build Now.
- [ ] Linked products use the immutable inventory base unit and display only ledger-derived stock to inventory-authorized users.
- [ ] Non-stock products have one selling unit and never create inventory movements.
- [ ] An Active product cannot become sale-ready without positive price, valid unit, resolved tax, and active linked inventory where applicable.
- [ ] Current price and at most one pending scheduled price are clearly distinguishable.
- [ ] Price, cost, and tax history preserves old/new values, time, and responsible user.
- [ ] Completed-sale price and tax evidence is not recalculated after catalog changes.
- [ ] Reference cost is optional, non-negative, protected, and never presented as margin or accounting truth.
- [ ] Tax choices are merchant-controlled and the interface makes no compliance claim.
- [ ] Business tax-inclusive/exclusive mode cannot change after completed sales within Build Now.
- [ ] Product and inventory archive actions remain independent.
- [ ] Archived products cannot enter new sales and may be reactivated only after validation.
- [ ] Products with dependent history cannot be permanently deleted.
- [ ] Permitted deletion retains the approved minimal audit record.
- [ ] Owner and manager permissions are action-specific; employee access follows the approved sale-use boundary.
- [ ] Conversational mutations require structured preview, explicit confirmation, and the same permission checks as dashboard actions.
- [ ] Product names, descriptions, and category names accept and preserve English, Malayalam, and Manglish wording without forced translation.
- [ ] Mixed-language search supports reliable matches, identifies uncertain interpreted matches, and never silently renames, translates, merges, or overwrites catalog records.
- [ ] If first-time inventory linking changes the selling unit, the preview shows current unit and price, proposed inventory link and new unit, and the price requiring confirmation.
- [ ] If permitted replacement linking changes the selling unit, the preview shows current inventory link, current unit and price, proposed replacement inventory link and new unit, and the price requiring confirmation.
- [ ] For either unit-changing assignment or replacement, no product, current link state, price, or unit change occurs until confirmation and saving succeed; cancellation, incomplete confirmation, validation failure, or save failure preserves existing state, and a successful confirmed price and link change enter the appropriate audit history.
- [ ] Import creates valid rows, quarantines invalid rows, reports errors, and never overwrites matches automatically.
- [ ] Search, duplicate checks, validation, imports, messages, and histories do not disclose another business's data.
- [ ] No workflow introduces unit conversion, variants, bundles, price tiers, margin calculation, custom POS modification, or a second stock truth.

## 16. Future Evolution

### Packaging and Units

Introduce alternate selling units, pack relationships, conversion precision, and rounding only through a governed model that preserves the immutable inventory base unit and transaction history.

### Variants and Composite Products

Evaluate parent/variant groups, bundles, recipes, bills of materials, and shared-stock selling forms after real merchant evidence establishes the required identity and inventory semantics.

### Pricing

Future work may add wholesale tiers, customer-specific pricing, promotions, discounts, scheduled tax/cost, and governed pricing-mode migrations without rewriting existing price or sale history.

### Identification

Future work may add multiple barcodes, scanning, label generation, and external identifier mapping while preserving business isolation and unambiguous lookup.

### Purchasing and Cost Truth

Purchase Workflow may establish supplier prices, landed cost, valuation, and COGS truth. It must distinguish those facts from the reference cost established here and define any governed reconciliation.

### Sales

Sales Workflow consumes sale-ready catalog products, records transaction-time price and tax evidence, and creates traceable inventory decreases through the existing trusted movement path for stock-tracked products.

### POS

The POS Integration Foundation may synchronize approved standard external events through extension boundaries. Custom POS modification inside Smart Business core remains rejected.

### Reports and Ask CFO

Reports and advisory features may use governed sales, purchase, cost, tax, and inventory facts. They must not treat optional catalog reference cost as verified margin truth.

### Conversation and Import

Future conversation foundations may deepen extraction, correction, multilingual support, bulk editing, export, and asynchronous assistance while preserving explicit confirmation and human ownership.

### Commerce

Public catalog publication, storefronts, ordering, and marketplaces remain separately governed product work built on stable catalog identity.

## 17. Product Philosophy Summary

Product Catalog & Pricing gives the merchant a simple answer to what the business sells and what its current selling terms are. It provides enough structure for reliable operations without turning setup into enterprise administration.

The product respects three distinct truths: catalog truth describes the sellable identity; inventory truth describes stock and movement; future transaction truth records what actually happened at purchase or sale time. These truths may connect, but none may silently replace another.

Smart Business assists through familiar dashboard, WhatsApp, voice, photo, text, and spreadsheet workflows. The owner remains in control, employees receive only the access required for their work, consequential changes require confirmation, and history remains explainable.

## 18. Blueprint Change Log

| Version | Date | Author | Change | Status |
|---|---|---|---|---|
| 0.1 | 2026-08-04 | Codex | Initial Stage 1 draft based on canonical Product Truth, accepted SB-P-1.10 dependency, repository inspection, and Founder decisions D-001 through D-066; Founder draft confirmation recorded as D-067. Metadata, Mission Snapshot, and Sections 1–19 only. | Founder-confirmed draft — awaiting Mission Control Product Review |
| 0.2 | 2026-08-04 | Codex | Refined only Builder Review Findings F3, F4, and F5: multilingual entry/search, business-scoped name/SKU/barcode normalization, and Founder-approved unit-change price confirmation recorded as D-068. | Refined draft — awaiting Mission Control review |
| 0.3 | 2026-08-04 | Codex | Refined only the remaining F5 replacement-link scope so D-068 and the no-silent-price-reinterpretation safeguard cover both first-time assignment and permitted replacement when either changes the selling unit. | Refined draft — awaiting Mission Control review |

## 19. Governance History

| Date | Actor | Governance event | Result |
|---|---|---|---|
| 2026-08-04 | Mission Control | Activated SB-P-1.11 Stage 1 Product Definition through `communication/live/instruction.md`. | Codex authorized for Product Truth extraction, Founder discovery, decision recording, and Sections 1–19 only. |
| 2026-08-04 | Founder and Codex | Conducted repository-first Founder discovery one question at a time. | Decisions D-001 through D-066 recorded in the linked Founder Product Decision Record. |
| 2026-08-04 | Codex | Prepared Product Blueprint Metadata, Mission Snapshot, and Sections 1–19. | Draft prepared for Mission Control Product Review; no Builder Review, Engineering Review, lock, EIS, implementation package, or implementation work performed. |
| 2026-08-04 | Founder | Confirmed the Stage 1 draft accurately represents the confirmed product decisions and may be prepared for Mission Control Product Review. | Founder draft confirmation recorded as D-067; no Blueprint lock or implementation authorization granted. |
| 2026-08-04 | Claude Code and Mission Control | Builder Review completed and Mission Control accepted Findings F3, F4, and F5 for Codex refinement through Instruction 1.3. | F3 and F4 authorized as narrow clarifications; Founder-approved F5 decision supplied as authoritative input. No new Builder Review or Engineering Review authorized. |
| 2026-08-04 | Founder and Codex | Founder-approved F5 unit-change price behavior recorded as D-068 and reflected in Sections 5, 8, 9, 10, 13, 14, and 15. | Existing decisions D-001 through D-067 preserved; Sections 20–21 remain absent; refinement returned for Mission Control review. |
| 2026-08-04 | Claude Code and Mission Control | Follow-up Builder Review accepted F3 and F4 as resolved and identified only the F5 replacement-link consistency gap. | Instruction 1.5 authorized a narrow consistency refinement without a new Founder decision. |
| 2026-08-04 | Codex | Refined D-068 and Sections 8, 9, 10, 13, 14, and 15 to apply the existing safeguard consistently to first-time assignment and permitted replacement linking. | No F3 or F4 wording reopened; D-001 through D-067 unchanged; Sections 20–21 remain absent. |
| 2026-08-04 | Claude Code | Final F5 replacement-link verification confirmed the safeguard applies consistently to first-time assignment and permitted replacement (`report1.6.md`). | Findings F3, F4, and F5 are all `RESOLVED`; D-001 through D-068 unchanged; no protected artifact modified. |
| 2026-08-04 | Claude Code | Completed the Source 18 Engineering Review authorized by Instruction 1.7 and added Sections 20–21. | Engineering Decision and Readiness: `READY FOR FOUNDER APPROVAL`; D-001 through D-068 unchanged; no new Founder decision created; Blueprint not locked. |
| 2026-08-04 | Founder | Approved the completed Product Blueprint, including Sections 1–21 and its engineering sequencing, and authorized Mission Control Blueprint Lock. | Founder approval granted for Blueprint Lock only; EIS preparation and implementation remain unauthorized until separately instructed. |
| 2026-08-04 | Mission Control | Accepted the completed Product Blueprint, Founder Decisions D-001 through D-068, Builder Review verifications, Engineering Review, and Founder authorization; applied the SB-P-1.11 Blueprint Lock through Instruction 1.8. | Sections 1–21, Founder Decisions D-001 through D-068, and engineering sequencing locked as approved authority for the next lifecycle stage; separate EIS authorization remains required and implementation remains unauthorized. |

## 20. Engineering Review

This section records the Engineering Review of Product Blueprint SB-P-1.11, building on the accepted Builder Review (`report1.2.md`, `report1.4.md`, `report1.6.md`) and the resolved Findings F3, F4, and F5. It reflects an engineering feasibility assessment only. Sections 1–19 remain Mission Control-accepted and unchanged. No database schema, API contract, RLS policy, executable SQL, or implementation code is defined here.

### Overall Engineering Feasibility

The Blueprint is engineering-feasible within the approved Smart Business architecture.

- The mission can be implemented without violating the SB-P-1.10 ledger authority, business isolation, permission scope, audit integrity, or human decision ownership carried forward as Accepted Product Authority by `instruction1.7.md`.
- The core catalog-and-pricing domain shape — a business-owned entity with an optional link to an existing ledger-backed entity, plus append-only value-history tables for price, tax, and cost — is a well-understood pattern and is directly consistent with the domain shape SB-P-1.10 already established and that its own Engineering Review (§20) found feasible.
- Two Build Now sub-scopes — Manager/Employee permission enforcement and guided WhatsApp/voice/photo catalog workflows — depend on shared platform foundations that do not yet exist in the repository. This is a sequencing fact, not a feasibility defect in Sections 1–19: Source 11 already establishes both the Owner/Manager/Employee permission model and WhatsApp-first conversation as Product Truth: the gap is that those shared capabilities have not yet been built anywhere in the repository, for any mission. Section 21 treats this as a dependency and sequencing matter rather than a blocking defect.

**The Blueprint is engineering-feasible, with two named cross-mission dependencies affecting only the sequencing of certain Build Now sub-scopes, not the core catalog-and-pricing capability.**

### Current Repository State and Reusable Patterns

Direct repository inspection (not assumption) establishes the following current state, carried forward from `report1.2.md` Findings F7, F16, F17, F19 and confirmed unchanged for this review:

- **Inventory precedent (SB-P-1.10, implemented):** `supabase/migrations/20260721205714_*.sql` creates `inventory_items` and an append-only `inventory_movements` ledger (`UPDATE`/`DELETE` rejected by trigger), `inventory_movement_idempotency_keys`, and RPCs `create_inventory_movement`, `preview_inventory_movement`, `inventory_current_stock_batch`, and `inventory_movement_remaining_compensable`. This is the single strongest reusable precedent for SB-P-1.11's own write-integrity design (see "Write-Path, Concurrency, Idempotency, and Atomicity" below).
- **Business isolation pattern:** every business-owned table carries a `business_id uuid references public.businesses(id)`, gated by an RLS policy subquery `business_id IN (SELECT id FROM public.businesses WHERE owner_id = auth.uid())`, applied identically across `inventory_items`, `inventory_movements`, `transactions`, and `transaction_correction_events`. Several tables add a composite `UNIQUE (id, business_id)` to support cross-table foreign-key consistency checks (e.g., `inventory_items_id_business_uniq`). This pattern is directly reusable for every new catalog table without modification.
- **Permission state (F7):** `businesses.owner_id` is the sole authority column in the current schema. Every existing RLS policy checks `owner_id = auth.uid()` only. SB-P-1.10's own accepted implementation is documented in its migration as Owner-only "per Mission Control clarification SB-P-1.10-CLAR-1.0 (A1)." No `employees`, `business_members`, or role/permission-flag table exists anywhere in the current migrations.
- **Audit analog:** `transaction_correction_events` (jsonb `original_values`/`updated_values`, `edited_by`, `edit_reason`, `notification_status`, written inside the `correct_transaction()` `SECURITY DEFINER` function) is the closest existing generic-audit precedent, though it is transaction-specific. Inventory's own audit trail is implicit in its append-only ledger, not a separate table.
- **Routing and navigation:** TanStack Router file-based routing under `src/routes/_authenticated/` (dashboard, transactions, inventory), guarded by `beforeLoad` session checks. No `products` or `catalog` route exists yet. `src/components/authed-header.tsx` already centralizes workspace navigation across the existing authenticated routes "so nav-link additions do not drift" (its own header comment) — a Products/Catalog entry point follows this established pattern directly.
- **Import, conversational, and role infrastructure:** no CSV/XLSX parsing dependency, import route, or correction-queue component exists in `src/` or `package.json` (F13). No WhatsApp webhook, voice, or AI-conversation code exists in `src/`; the dashboard shows only a disabled "Coming soon" WhatsApp assistant card (F14).
- **Approved but not-yet-implemented conceptual precedent (`02_Supabase_Architecture_Framework.md`):** the legacy Source 02 schema describes `public.employees` with per-action boolean permission flags (`can_add_transactions`, `can_view_cash_summary`, `can_view_reports`, `can_view_inventory`, `can_view_hr`, `can_edit_attendance`), `public.file_import_jobs` (import job tracking with `status`: `pending`/`processing`/`completed`/`partial_success`/`failed`, `rows_processed`, `rows_failed`, `error_report_url`), `public.system_errors`, and a `pg_cron`-based scheduled-automation architecture (Morning Pulse, Attendance Review, Closing Review). None of these tables exist in the current migrations, and their literal `user_id`-scoped shape predates and is superseded by the `business_id`-plus-RLS ownership model SB-P-1.10 established and the current schema already uses throughout — consistent with SB-P-1.11 §12's own caution against "treating stale Source 02 schema examples as current inventory truth." They remain useful, Founder-approved *conceptual* precedent for the shapes described below (permission flags, import-job tracking, scheduled activation), not a schema to copy verbatim.

### Proposed Architecture and Bounded Components

At a boundary level, without prescribing schema, SB-P-1.11 requires the following bounded components, each independently buildable on an existing or clearly analogous pattern:

- A **catalog product** entity: business-scoped identity, optional inventory link, one selling unit, current price, lifecycle state, and pointers to its own history.
- An **optional business-scoped category** entity: flat, business-owned, normalized-unique name.
- **Append-only value-history** tables for selling price, tax, and reference cost — each mirroring the `inventory_movements` append-only, trigger-enforced-immutability shape, but scoped to their own value type rather than a stock quantity.
- A **pending scheduled price** record (at most one per product), consumed by a scheduled-activation process (see "Timezone and Scheduled-Price Handling").
- A **shared audit-event capability** for the remaining mutable fields not covered by a value-history table (name, description, image, category, SKU, barcode, unit, inventory link, lifecycle status) — see "Audit-History Architecture."
- A **catalog import job and correction-queue** capability, extending the approved `file_import_jobs` conceptual pattern with a catalog `import_type` and a row-level correction-queue table — see "Import Architecture and Safety Controls."
- A **catalog intent handler** inside the not-yet-built shared conversational engine — see "WhatsApp, Voice, Text, and Photo Integration Dependencies."
- A **permission-check boundary** for every catalog action (view, create, edit lifecycle, edit price, edit tax, edit cost, link inventory) — see "Permission-Engine Dependency."

No component here implies a new architectural pattern, external system, or deviation from the current Supabase-based stack.

### Data Model and Relationship Assessment

Sections 7 and 8 provide sufficient clarity to model the domain at a boundary level:

- **Product identity, business-unique name, optional SKU/barcode/description/image/category** — clearly bounded (§8 "Catalog Product," "Product Name and Description," "SKU," "Barcode," "Product Image," "Categories").
- **Product–inventory link** — one-to-one in both directions, business-scoped, lockable after sale/stock-event history — clearly bounded (§8 "Product–Inventory Link"; D-001–D-005, D-047) and directly analogous to the existing `inventory_items_id_business_uniq`-style composite-uniqueness pattern already used for FK integrity elsewhere.
- **Selling unit inheritance** — a stock-tracked product's unit equals its linked inventory item's immutable base unit; a non-stock product's unit is independently settable before sales history — clearly bounded (§8 "Selling Unit"; D-005, D-051, D-052).
- **Selling price, reference cost, tax treatment**, each with its own current value plus a preserved change history — clearly bounded (§8 "Selling Price," "Reference Cost Price," "Tax Treatment"; D-009–D-019, D-036–D-043).
- **Scheduled selling price** — at most one pending future price per product, with a defined activation moment — clearly bounded (§8 "Scheduled Selling Price"; D-012, D-013, D-043).
- **D-068 assignment/replacement price-confirmation safeguard** — clearly bounded at the behavioural level: the safeguard's four preserved-state failure modes (cancellation, incomplete confirmation, validation failure, save failure) and its required preview content for both first-time assignment and replacement are fully specified in §8 "Product–Inventory Link," §8 "Selling Unit," §9 "Inventory-Link Experience," and Rule 28; the specific transactional mechanism is an implementation decision within those stated constraints (see "Write-Path, Concurrency, Idempotency, and Atomicity").
- **Lifecycle and conditional deletion** — Active/Archived states, deletion permitted only before dependent history exists — clearly bounded (§8 "Product Lifecycle," "Conditional Permanent Deletion"; D-029–D-032, D-065) and directly analogous to SB-P-1.10's own archival-not-deletion pattern.

Domain boundaries are sufficiently clear to proceed to schema design at the EIS stage. No product clarification is required for domain modelling.

### Row-Level Security and Business Isolation

The existing `business_id` column plus `owner_id`-subquery RLS pattern, and the composite `UNIQUE (id, business_id)` FK-integrity pattern, apply directly and without modification to every new catalog, category, and history table (§8 "Business Ownership and Isolation"; D-047, Rule 4). Supabase RLS is a natural fit for the business-scoped and (once available) permission-scoped access this Blueprint requires; no access pattern in Sections 1–19 requires anything RLS cannot express. Column-level restriction (hiding reference cost and margin from employees; D-014, D-016, D-035) is not natively an RLS row-level concept and is addressed under "Permission-Engine Dependency" and "Security, Privacy, Observability, and Failure Recovery" below.

### Permission-Engine Dependency

This is the most consequential Engineering Review finding carried forward from `report1.2.md` Finding F7.

- The Blueprint (§8 "Permissions"; D-016, D-033, D-034, D-035, D-048) requires a granular, action-specific Manager/Employee permission model — independently controlled for catalog viewing, product creation, lifecycle, price, tax, reference cost, and inventory linking, with inventory linking additionally requiring inventory-view permission.
- No such model exists in the current repository. `businesses.owner_id` is the only implemented authority, and SB-P-1.10's own accepted implementation is Owner-only.
- Source 02's legacy `public.employees` concept (per-action boolean permission flags such as `can_view_inventory`, `can_view_cash_summary`) is Founder-approved conceptual precedent showing that Product Truth already anticipates exactly this shape — a flat, per-action permission-flag model scoped per business member, not a generic role hierarchy. SB-P-1.11's catalog permissions (view/create/lifecycle/price/tax/cost/link) extend this same shape with catalog-specific flags rather than requiring an unrelated new authorization paradigm.
- Per Source 12 §13 ("Single Implementation Rule" — one Permission Engine) and Source 17 §B8 ("Reuse and Duplication Control"), this permission model should not be built as a catalog-specific feature. It is a shared platform capability that SB-P-1.10 (whose own Blueprint also assumes Manager/Employee tiers, though its accepted implementation deferred them), SB-P-1.11, and every future People/Permissions-domain mission require identically.
- **Engineering conclusion:** SB-P-1.11's Owner-scoped catalog data model, RLS, and dashboard CRUD are buildable today using the existing Owner-only pattern, exactly as SB-P-1.10 was. Full enforcement of §8 "Permissions" (Manager and sale-authorized-Employee catalog access) requires a shared permission-engine foundation that does not yet exist for any mission in this repository. This is a build-sequencing dependency, not a defect in Sections 1–19, and it does not weaken the locked rule that employees cannot see owner financial intelligence by default (D-014, D-016, D-035) — that rule constrains what the eventual permission engine and read paths must enforce, and remains fully intact in the Blueprint regardless of when the engine is built.

### API, RPC, Edge Function, and Scheduled-Processing Boundaries

Without specifying signatures:

- Each history-producing write (selling-price change, tax change, reference-cost change, D-068 assignment/replacement) should have exactly one authoritative write path, mirroring the single `create_inventory_movement` RPC pattern SB-P-1.10 established — not per-channel (dashboard vs. WhatsApp vs. import) duplicate write logic, consistent with Source 12 §4/§10's channel-independence and single-implementation principles.
- Scheduled price activation (D-043) is a deferred write, not an immediate one, and fits the existing `pg_cron`-plus-secure-backend-endpoint automation architecture already approved in Source 02 §7 and already used for the Daily Intelligence Engine (Morning Briefing, Business Pulse Check, Night Closing Intelligence per Source 11's "Daily Intelligence Rhythm"). No new scheduling mechanism is implied.
- Import processing (parse, validate, quarantine) is naturally an asynchronous job, consistent with the `file_import_jobs`-style status model (`pending`/`processing`/`completed`/`partial_success`/`failed`) already approved in Source 02 §3.15A.
- A future guided-conversation catalog intent handler is a consumer of the shared conversational pipeline described in Source 04 (webhook → identity router → multi-modal processing → intent classification → action execution → role-based response), not a separate catalog-specific webhook or endpoint.

### Write-Path, Concurrency, Idempotency, and Atomicity

Following SB-P-1.10's own Engineering Review precedent (§20 "Ledger Integrity Review," "Concurrency," "Duplicate movement creation," "Idempotency for future integrations"), the following requirements should carry into the EIS for SB-P-1.11's price, tax, cost, and link writes:

- **Single write path per value type**, enforced at the data-access layer, not only in application code.
- **Database-level immutability** of posted price/tax/cost history rows, mirroring the `UPDATE`/`DELETE`-rejecting trigger already implemented on `inventory_movements`.
- **Idempotency**, reusing the same idempotency-key pattern already implemented via `inventory_movement_idempotency_keys`, extended to price/tax/cost/link-change writes — particularly important once WhatsApp or import-driven writes can retry.
- **Atomicity for the D-068 safeguard.** The Blueprint requires that cancellation, incomplete confirmation, validation failure, or save failure each leave the existing product record, current inventory link state, selling unit, and selling price completely unchanged (§8 "Product–Inventory Link"; Rule 28). This guarantee is only reliably enforceable if the price-confirmation-and-link-save operation is implemented as a single database transaction (a single RPC call), not a client-orchestrated multi-step sequence — otherwise a failure between steps could leave a partially applied state (e.g., unit changed but price unconfirmed), which the Blueprint explicitly forbids. This mirrors the same "projected-state check before commit" discipline SB-P-1.10 used for its negative-stock warning (`preview_inventory_movement`), applied here to unit/price consistency instead of stock quantity.
- **Concurrency.** Two near-simultaneous write attempts against the same product's price, tax, cost, or link state (e.g., a dashboard edit and a WhatsApp-confirmed edit arriving together) require the same transactional-guarantee treatment SB-P-1.10 required for concurrent inventory movements, to avoid one silently overwriting the other's history entry.

### Audit-History Architecture

Carrying forward `report1.2.md` Finding F18: the Blueprint's audit requirement (§8 "Audit History"; D-064) spans roughly ten field categories and is broader than any existing single pattern. Two distinct needs should be architecturally separated rather than forced into one table:

1. **Value-history tables** for price, tax, and cost — each its own append-only, immutable table preserving old value, new value, effective time, record time, and responsible user, matching the transaction-time-evidence requirement in §8 "Selling-Price History" and "Tax History." These are naturally domain-specific because their value shapes and downstream consumers (future Sales Workflow transaction-time evidence) differ.
2. **A shared, generic audit-event capability** for the remaining mutable fields (name, description, image, category, SKU, barcode, unit, inventory link, lifecycle status) — a reusable (entity type, entity id, business id, changed field, old value, new value, actor, time) shape, similar in spirit to the existing `transaction_correction_events` jsonb old/new snapshot pattern but generalized beyond transactions. Per Source 12 §10 ("Single Implementation Rule") and §B8, this shared capability should be designed so Catalog is its first real consumer and Inventory, Purchase, and Sales missions can reuse it rather than each building a bespoke audit table.

### Multilingual Search and Normalization Feasibility

Building on the resolved Findings F3 and F4 (`report1.4.md`, `report1.6.md`):

- **Exact normalization** (leading/trailing whitespace, repeated internal whitespace, Latin-letter case) for product name, SKU, barcode, and category (§8; Rules 8, 9, 27) is reliably enforceable as a database-level constraint — e.g., a normalized/generated value used for the business-scoped uniqueness check — rather than relying on application-layer discipline alone, consistent with the "enforce invariants at the data layer, not only in application code" principle SB-P-1.10's own review committed to.
- **Uncertain-match suggestion** (different Malayalam spellings, Manglish transliterations, or translations) is a materially harder problem than exact normalization. The Blueprint's own language — "where matching is reliable," "may suggest" (§5, §8 "Search and Filtering") — already anticipates and permits a bounded, best-effort approach (for example, a similarity heuristic over normalized text) rather than a claim of true cross-script semantic equivalence detection. This is a non-blocking scope note for the EIS, not a blocker: the Blueprint requires that uncertain matches be surfaced for merchant review, not that the system achieve perfect multilingual understanding.

### Import Architecture and Safety Controls

Carrying forward Finding F13, now informed by the Source 02 §3.15A `file_import_jobs` precedent:

- Reusing and extending the approved `file_import_jobs` conceptual pattern (job-level `status` progression, `rows_processed`/`rows_failed`/`error_report_url`) with a catalog `import_type` avoids building a catalog-specific import-job table from scratch, directly satisfying the reuse-before-duplication principle.
- D-057's row-level correction-queue requirement (update/skip/correct per conflicting row) is more granular than the job-level status model alone provides and needs its own row-level table referencing the import job, the conflicting row's proposed values, and the matched existing product.
- Required safety controls: reject invalid rows without creating live products (D-056); never auto-overwrite a name/SKU/barcode match (D-057); restrict import to owner or product-creation-permitted manager (D-058 — itself dependent on the permission engine above); validate uploaded file type and size before processing; and report errors through both dashboard and the planned conversational channel (§8 "CSV and Excel Bulk Import") without leaking another business's data through error messages (§8 "Business Ownership and Isolation").
- Import is a substantial, independently sizeable capability bundle (parsing, validation, quarantine, correction queue, dual-channel reporting), not incidental CRUD, and should be scoped as such in the EIS and implementation planning (consistent with `report1.2.md` Finding F13).

### WhatsApp, Voice, Text, and Photo Integration Dependencies

Carrying forward Finding F14, now informed by the full approved conversational architecture in Source 04 and Source 05:

- Source 04 already defines a complete approved pipeline — webhook (`/api/whatsapp-webhook`) → identity router (Owner → Employee → Supplier → Unknown) → multi-modal processing (text/voice/photo → structured JSON) → the Webhook Intelligence Order in Source 05 §14 (verify → identify role → check permission → check subscription → safety check → business relevance → FAQ check → detect intent → execute action → respond by role) — and an approved intent taxonomy in Source 05 §3 that already includes `inventory_update` as an intent type.
- None of this pipeline is implemented in the current repository; the dashboard shows only a disabled "Coming soon" WhatsApp assistant card.
- **Engineering conclusion:** SB-P-1.11's guided WhatsApp/voice/photo catalog workflows (§8 "WhatsApp, Voice, Text, and Photo Assistance"; D-053, D-054) are not a catalog-specific system to build from scratch. They are a catalog-scoped intent handler (e.g., a `catalog_update`-style intent, or an extension of the existing `inventory_update` intent family) that plugs into the shared conversational engine described in Source 04/05. That shared engine does not yet exist for any mission in this repository. This mirrors the permission-engine dependency above: a cross-mission foundation gap, not a defect in Sections 1–19, and Source 12 §4's channel-independence principle ("Business logic shall never be duplicated for individual channels") argues against SB-P-1.11 building a parallel, catalog-only conversational path even if resourced separately.
- The dashboard-based guided experience (structured preview, explicit confirmation before saving; §8, D-053, D-054) does not depend on this gap and is buildable now using the same confirmation-before-save UI pattern already required elsewhere in the Blueprint.

### Timezone and Scheduled-Price Handling

Carrying forward Finding F12:

- SB-P-1.10's own Engineering Review (§20 "Timezone consistency") committed to canonical UTC storage with presentation-layer conversion for ledger timestamps. The same approach should carry to SB-P-1.11's price/tax/cost history timestamps and scheduled-price activation time, so Inventory and Catalog do not diverge in timezone handling.
- D-043 requires scheduled-price activation "in the business timezone" without specifying whether that timezone is a fixed value (Kerala/India, consistent with Source 01's initial target market) or a per-business configurable field. Sections 1–19 do not need to resolve this to remain product-coherent — either a fixed Asia/Kolkata default or a stored per-business timezone field satisfies the Blueprint's plain language — but the EIS must make and record one explicit choice before scheduled-price activation is implemented, since silently assuming one would risk the same kind of retrofit difficulty SB-P-1.10's review flagged for ledger timestamps.
- Scheduled activation itself is a natural fit for the existing `pg_cron`-plus-secure-endpoint automation pattern (see "API, RPC, Edge Function, and Scheduled-Processing Boundaries" above); activating a pending price must write a new immutable price-history entry at the actual activation instant, not a backdated one, consistent with D-012/D-043.

### Security, Privacy, Observability, and Failure Recovery

- **Security:** RLS on every new table follows the established `business_id`-plus-owner-subquery pattern, extendable to a permission-flag subquery once the permission engine exists; service-role access remains backend-only; no secret or credential is introduced by this review.
- **Privacy:** hiding reference cost and margin from employees (D-014, D-016, D-035) is a column-level, not row-level, restriction. Postgres RLS operates at row granularity, so the reliable mechanism is a permission-aware read path (a `SECURITY DEFINER` RPC or view that omits protected columns for unauthorized callers) rather than direct table `SELECT`, consistent with how `inventory_current_stock_batch` already abstracts inventory reads rather than exposing raw table access.
- **Observability:** import and write failures should be recorded through the existing `system_errors` table (Source 02 §3.13) rather than a catalog-specific error log, consistent with reuse-before-duplication.
- **Failure recovery:** import failure states are already modelled generically (`file_import_jobs`-style `failed`/`partial_success`) and should be reused rather than reinvented; D-068's atomic no-change guarantee is itself the failure-recovery model for unit-changing link operations (see "Write-Path, Concurrency, Idempotency, and Atomicity").

### Reuse and Duplication Controls

Summary of reuse decisions carried through this review, consolidating Findings F16, F17, F19 and the analysis above: the `business_id`-plus-RLS isolation pattern (reuse unmodified); the `file_import_jobs` conceptual pattern (reuse and extend with a catalog `import_type`); `system_errors` (reuse for failure logging); `pg_cron`-plus-secure-endpoint scheduling (reuse for scheduled-price activation); the append-only-plus-idempotency-key pattern from `inventory_movements` (reuse as the template for price/tax/cost history and the D-068 write path); `authed-header.tsx` navigation (reuse for a Products/Catalog entry point). Two capabilities are new but explicitly shared rather than catalog-specific: the generic audit-event mechanism and the permission-flag engine. One capability is new and explicitly deferred to a separate conversational-engine foundation: the WhatsApp/voice/photo intent pipeline. No finding in this review identifies an unnecessary new pattern where an existing one already fits.

### Engineering Risks

| Risk | Impact | Engineering Mitigation Direction |
|---|---|---|
| Permission-engine absence | Manager/Employee catalog actions cannot be enforced until a shared permission engine exists; building it catalog-specifically would duplicate a capability every People/Permissions-domain mission needs | Treat as a named cross-mission dependency (see Section 21); build Owner-scoped catalog capability now; sequence Manager/Employee enforcement behind the shared engine |
| Conversational-engine absence | Guided WhatsApp/voice/photo catalog workflows cannot be implemented until the shared conversational pipeline (Source 04/05) exists | Treat as a named cross-mission dependency; build dashboard-based guided creation/confirmation now; sequence conversational intent handling behind the shared engine |
| D-068 atomicity implemented as multi-step client flow | A failure between steps could leave unit changed but price unconfirmed, violating the Blueprint's explicit unchanged-state guarantee | Require a single transactional RPC for confirm-and-save; forbid client-orchestrated partial commits |
| Column-level cost/margin exposure via naive RLS | Employees could see protected financial fields if catalog reads use direct table `SELECT` instead of a permission-aware read path | Require a `SECURITY DEFINER` read path (RPC or view) that omits protected columns by caller authorization, mirroring `inventory_current_stock_batch` |
| Multilingual "possible match" over-promised as authoritative | A best-effort similarity suggestion could be mistaken for guaranteed cross-script equivalence detection, risking silent-merge-like trust failure even though the Blueprint requires merchant review | Scope the EIS matching algorithm modestly (normalized-exact plus a disclosed best-effort suggestion); never auto-apply a suggested match |
| Import treated as incidental CRUD | Underestimating import's scope (parsing, quarantine, correction queue, dual-channel reporting) risks a rushed, unsafe implementation | Size import as an independent capability bundle in the EIS and implementation plan, per Finding F13 |
| Timezone choice deferred silently | Retrofitting a timezone convention after price history exists would risk the same difficulty SB-P-1.10 flagged for ledger timestamps | Require the EIS to make and record one explicit timezone choice (fixed or per-business) before the first price-history row is written |
| Value-history and generic audit-event mechanisms built as one undifferentiated table | Forcing ten dissimilar field types into one schema risks a poor fit for both the transaction-time-evidence need (price/tax/cost) and the simple change-log need (identity/lifecycle fields) | Keep the two mechanisms architecturally separate, as described under "Audit-History Architecture" |

### Build Sequencing

Recommended phased sequencing within the accepted Build Now scope, without changing Product Truth:

- **Phase 1 — no cross-mission dependency:** core catalog and category data model, Owner-scoped dashboard CRUD and RLS, selling-unit inheritance and D-068 assignment/replacement safeguard (single-RPC atomic implementation), price/tax/cost value-history tables, multilingual normalization (exact-match enforcement), and scheduled-price activation via the existing `pg_cron` pattern.
- **Phase 2a — depends on a shared permission-engine foundation:** Manager and sale-authorized-Employee catalog permission enforcement (§8 "Permissions"; D-016, D-033–D-035, D-048).
- **Phase 2b — sizeable but not cross-mission-blocked:** CSV/Excel bulk import and correction queue, extending `file_import_jobs`.
- **Phase 3 — depends on a shared conversational-engine foundation:** guided WhatsApp/voice/photo catalog intent handling (§8 "WhatsApp, Voice, Text, and Photo Assistance"; D-053, D-054), beyond the dashboard-based guided creation already buildable in Phase 1.

Phases 2a and 3 each depend on a foundation this review did not find anywhere in the current repository for any mission, not only for SB-P-1.11. Mission Control should decide whether a prior or parallel foundation mission is warranted, or whether those specific Build Now sub-scopes are implemented later within SB-P-1.11's own implementation lifecycle once the dependency is satisfied. Phase 2b has no such cross-mission blocker and may proceed in parallel with Phase 1 if resourced separately.

### Verification Expectations for EIS and Implementation

The EIS and later verification stages must specifically test: RLS isolation for every new catalog, category, and history table; permission-flag enforcement per action once the permission engine exists; immutability of posted price/tax/cost history rows; the D-068 atomic transaction across all four failure modes (cancellation, incomplete confirmation, validation failure, save failure); database-level enforcement of normalized name/SKU/barcode uniqueness; import quarantine and correction-queue behaviour under invalid and conflicting rows; scheduled-price activation timing accuracy against the chosen timezone convention; and that multilingual "possible match" suggestions never silently rename, merge, translate, or overwrite a catalog record.

## 21. Engineering Questions, Risks & Recommendations

This section captures engineering observations without altering accepted Product Truth in Sections 1–19.

### Engineering Questions

> No Product clarification required.

Findings F3, F4, and F5 (including the replacement-link scope) were independently verified as resolved before this Engineering Review began (`report1.4.md`, `report1.6.md`). No new product ambiguity was identified during this review. The two named dependencies below (permission engine, conversational engine) are sequencing and architecture facts about what has and has not been built elsewhere in the repository — they do not require a new Founder product decision, because Source 11 already establishes both the Owner/Manager/Employee permission model and WhatsApp-first conversation as Product Truth. The one open item genuinely requiring a decision (the timezone-convention choice under "Timezone and Scheduled-Price Handling") is an EIS-stage engineering choice within already-approved Product Truth, not a Founder product decision, because the Blueprint's "business timezone" language is satisfied by either a fixed or a configurable implementation.

### Blocking Issues

None. No finding in this review contradicts, reopens, or requires reinterpreting Founder decisions D-001 through D-068, and no finding requires a new Founder decision before Sections 1–21 can be considered technically coherent.

### Non-Blocking Engineering Risks

Carried forward from the Engineering Risks table in Section 20: D-068 atomicity implementation discipline; column-level cost/margin exposure requiring a permission-aware read path rather than naive `SELECT`; multilingual "possible match" scope discipline; import sizing; deferred timezone-convention choice; and keeping the value-history and generic audit-event mechanisms architecturally separate. None of these block Founder approval; each is a concrete instruction to the EIS and implementation stages.

### Dependencies Requiring Prior or Parallel Missions

- **Permission-engine foundation** (Owner/Manager/Employee action-specific permissions): required for full enforcement of §8 "Permissions." Not required for Phase 1 Owner-scoped catalog capability.
- **Conversational-engine foundation** (WhatsApp webhook, identity router, multi-modal processing, intent classification per Source 04/05): required for guided WhatsApp/voice/photo catalog workflows beyond dashboard-based guided creation. Not required for Phase 1.

Neither dependency is specific to SB-P-1.11; both are shared platform capabilities that any current or future People/Permissions-domain or Conversation-domain mission would also require. Mission Control should decide whether either is sequenced as a separate governed mission, a parallel workstream, or a later phase within SB-P-1.11's own implementation lifecycle.

### Recommended Implementation Sequencing

See Section 20 "Build Sequencing." In summary: Phase 1 (no dependency) → Phase 2a (permission engine) and Phase 2b (import, no cross-mission blocker) in parallel → Phase 3 (conversational engine).

### Engineering Decision and Readiness

```text
READY FOR FOUNDER APPROVAL
```

Sections 1–21 are technically coherent: the core catalog-and-pricing domain is engineering-feasible today on existing, directly analogous architecture (SB-P-1.10's ledger, business-isolation, and idempotency patterns); no blocking issue was found; the two named cross-mission dependencies affect only the sequencing of specific Build Now sub-scopes (Manager/Employee enforcement, guided conversational workflows) and do not require reopening Sections 1–19 or creating a new Founder decision. This disposition recommends that Mission Control may consider the Blueprint ready for Founder review and, subject to Founder approval, Mission Control lock — Claude Code does not approve or lock its own Engineering Review.
