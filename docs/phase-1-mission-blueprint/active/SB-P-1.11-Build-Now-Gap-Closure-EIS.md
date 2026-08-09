# SB-P-1.11 — Build Now Gap Closure Engineering Implementation Specification

## Metadata

| Field | Value |
|---|---|
| Mission | SB-P-1.11 — Product Catalog & Pricing |
| Gap-closure mission | SB-P-1.11-GC-1 |
| Document | Engineering Implementation Specification |
| Status | Mission Control draft for engineering review |
| Prepared by | Mission Control |
| Canonical baseline | `70fc20ca7cf00ecd9c600a155e8bd9d56eeff964` |
| Canonical repository | `SmartBusinessv1/smart-business` |
| Product domain | `smartbusiness.teamlips.com` |
| Implementation authority | NONE until separately authorized |
| Public publish / deploy / domain cutover | NOT AUTHORIZED |

---

## 1. Purpose

This specification closes Build Now gaps discovered during the completed SB-P-1.11 controlled Founder preview without redesigning the accepted Catalog architecture.

It is intentionally standalone. Engineering must be able to determine the authorized implementation shape from this document together with the locked repository sources referenced below; it must not rely on informal conversation history.

The controlled preview completed with:

`FOUNDER ACCEPTED WITH NON-BLOCKING NOTES`

The preview exposed one previously approved Build Now capability that was never carried into implementation, plus four bounded UX refinements needed before SB-P-1.11 is treated as complete.

This specification covers exactly:

1. CSV/XLSX bulk Catalog import — mandatory Build Now scope reconciliation.
2. Selling Unit preset selector + Custom Unit.
3. Category preset selector + existing categories + Create New Category.
4. Inventory ↔ Catalog linking workflow clarity.
5. Business-tax-settings pricing-mode/tax-rate clarity.

This specification does not authorize implementation by itself. Mission Control must separately authorize Build Mode after engineering/security review.

---

## 2. Controlling Sources

Engineering must preserve the following canonical sources and decisions.

### Product decisions

`docs/phase-1-mission-blueprint/active/SB-P-1.11-Founder-Product-Decision-Record.md`

Relevant locked decisions include:

- D-001 / D-002: Catalog and Inventory remain separate records; Inventory is stock authority.
- D-005: a stock-tracked product's selling unit equals the linked Inventory item's immutable base unit.
- D-006: Category is optional.
- D-007: Categories remain flat in Build Now.
- D-008: Categories remain merchant-defined, business-owned and business-isolated.
- D-045: Category names are unique within a business.
- D-047: Inventory-link mutation is restricted after sale/linked-stock history.
- D-050: Stock status derives from the Inventory link.
- D-051: Every non-stock product has one selling unit, defaulting to Piece.
- D-052: familiar standard Selling Units plus merchant-defined custom unit are Build Now.
- D-055: CSV and Excel bulk Catalog import are Build Now.
- D-056: valid rows save; invalid rows are quarantined; correction needs are reported.
- D-057: import never overwrites automatically; identity matches enter a correction decision flow.
- D-058: an authorized manager with product-creation permission may import; employees cannot import.
- D-059 / D-060 / D-061: tax-default and pricing-mode rules remain unchanged.
- D-068: Inventory-link preview/confirmation prevents silent selling-price reinterpretation when unit changes.

### Research glossary

`docs/research/kerala-market-catalog-glossary.md`

Research verdict:

`PASS WITH RESEARCH CAUTIONS — GLOSSARY READY FOR IMPLEMENTATION SPECIFICATION`

The glossary is canonical evidence for preset vocabulary. Engineering must not replace it with guessed terminology.

### Controlled preview evidence

`communication/live/report1.71.md`

The Founder identified:

- missing bulk upload despite prior Build Now approval;
- tax-rate-field confusion;
- Inventory/Catalog linking mental-model friction;
- need for Selling Unit and Category preset selectors.

### Research completion evidence

`communication/live/report1.74.md`

The research report locks the implementation-planning baseline of:

- 10 CORE + 10 SECONDARY Selling Unit presets;
- 12 CORE + 8 SECONDARY Category presets;
- merchant-controlled custom entry/create-new paths;
- no unit conversion;
- no compulsory global taxonomy;
- no silent alias rewrite.

---

## 3. Existing Architecture That Must Not Be Broken

The current SB-P-1.11 implementation has exactly 19 public Catalog commands.

This gap closure must not create a twentieth public Catalog command merely to add bulk import or selector UX.

The existing Catalog write model remains command-only for browser-facing product mutations.

Bulk import is therefore specified as a governed **server-side orchestration workflow**, not a new general-purpose public Catalog command. The workflow may invoke existing Catalog commands/executors for authorized row-level mutations, subject to engineering confirmation of the safest boundary.

The implementation must preserve:

- same-business isolation;
- authenticated actor attribution;
- owner/permission authority;
- existing RLS posture;
- existing idempotency and audit rules for Catalog writes;
- existing 19-command public surface;
- no browser direct writes to protected Catalog tables;
- no service-role exposure to client code;
- no Lovable Cloud backend;
- canonical production Supabase `gysgzasfcjvtrgaigfyn`;
- canonical GitHub repository as source of truth.

If bulk import cannot be implemented safely without altering the public command count or weakening authorization, STOP and return an engineering exception to Mission Control rather than silently changing architecture.

---

## 4. Scope Classification

### Build Now — required before SB-P-1.11 closure

1. CSV/XLSX bulk Catalog import per D-055–D-058.
2. Selling Unit presets from the merged Kerala glossary, with Custom Unit.
3. Category presets from the merged Kerala glossary, with existing categories and Create New Category.
4. Inventory-link workflow clarity without changing Inventory authority.
5. Tax-setting UX clarity without changing tax semantics.

### Build Later

- field-survey-driven refinement of glossary ranking;
- multilingual full-interface localization;
- category hierarchy;
- automatic product classification;
- unit conversion;
- automated mapping from one unit to another;
- richer bulk-import correction assistant UI beyond the bounded Phase 1 flow;
- WhatsApp conversational correction workflow if the general conversational interface dependency is not yet available.

### Add-on / integration

- POS-originated bulk synchronization;
- third-party catalog feed ingestion;
- scheduled recurring import jobs.

### Reject

- a twentieth public Catalog command solely for bulk import;
- direct browser inserts into Catalog tables;
- automatic duplicate overwrite;
- auto-creating Inventory rows when a Catalog product is imported or created;
- duplicating Catalog products as Inventory products;
- automatic kg↔g, litre↔ml, pack↔piece or similar conversion;
- compulsory global category master data;
- silent AI category assignment;
- silent replacement of merchant custom wording with glossary canonical labels.

---

# PART A — BULK CSV/XLSX CATALOG IMPORT

## 5. User Goal

A merchant with an existing spreadsheet should be able to bring a product list into Smart Business without manually creating every product, while retaining control over duplicates and errors.

The experience must favor clarity over hidden automation.

The import must never create the impression that Smart Business has silently corrected, merged or overwritten merchant data.

---

## 6. Supported File Types

Build Now accepts:

- `.csv`
- `.xlsx`

Do not add `.xls`, Google Sheets direct connection, ZIP archives, PDFs or image/OCR import under this mission.

The maximum file size and maximum row count must be explicitly bounded in engineering implementation and shown to the user before upload. Engineering should choose conservative limits appropriate to server memory/runtime and production safety rather than pretending the import is unbounded.

If a file exceeds the limit, reject before row mutation with a clear user-facing message.

---

## 7. Import Template and Recognized Columns

The app must provide a downloadable/example template or visible column guide.

Recognized logical fields may include:

### Product identity

- Product Name — required
- Selling Unit — optional; defaults according to D-051 when absent and no Inventory link exists
- Category — optional
- SKU — optional
- Barcode — optional
- Description — optional

### Commercial fields

- Selling Price — optional
- Tax Treatment — optional
- Product Tax Rate — conditional
- Reference Cost — optional and owner/cost-authority sensitive

### Explicit non-fields

Do not accept/import:

- current stock quantity as Catalog truth;
- Inventory valuation;
- COGS;
- margin;
- supplier balance;
- purchase history;
- arbitrary business_id or owner_id;
- actor/user IDs;
- archived status unless explicitly reviewed and separately authorized;
- Inventory item IDs supplied by spreadsheet;
- raw database primary keys.

The exact CSV/XLSX column names and aliases must be defined in implementation documentation and tested.

---

## 8. Import Lifecycle

The import uses an explicit staged flow.

### Stage 1 — Upload

The user selects a CSV/XLSX file.

No product mutation occurs yet.

### Stage 2 — Parse and preview

The server parses the file and returns a preview containing at minimum:

- total rows;
- rows ready to create;
- rows with validation errors;
- rows matching an existing product identity;
- rows with unrecognized category/unit values;
- rows excluded from processing;
- clear indication that nothing has been imported yet.

### Stage 3 — Merchant review

The merchant can inspect row-level status before committing.

At minimum each row must be classified as:

- `READY`
- `NEEDS_CORRECTION`
- `POSSIBLE_MATCH`
- `SKIPPED`

### Stage 4 — Explicit import confirmation

Only after explicit confirmation may valid `READY` rows be created.

### Stage 5 — Outcome

Show:

- successfully created count;
- correction-needed count;
- duplicate/match count;
- skipped count;
- failed-at-save count if any;
- a downloadable/viewable correction result where practical.

Do not collapse these into one generic “Import complete” message.

---

## 9. Row Validation Rules

Each row must pass the same business rules as interactive Catalog creation.

At minimum validate:

- required Product Name;
- normalized business-scoped uniqueness of Product Name;
- SKU uniqueness when present;
- Barcode uniqueness when present;
- valid Selling Unit semantics;
- valid category resolution;
- selling price > 0 when provided;
- reference cost >= 0 when provided;
- tax treatment valid under D-036/D-059/D-060;
- no unauthorized actor-controlled fields;
- no attempt to create linked Inventory state from spreadsheet fields.

Validation errors must not create live products.

A bad row must not cause otherwise valid rows to be discarded solely because another row is bad, consistent with D-056.

---

## 10. Duplicate and Existing-Match Rules

D-057 is strict.

A match by normalized Product Name, SKU or Barcode must never overwrite automatically.

Matching rows must enter a correction decision state.

Build Now decision options should be bounded to:

- `Skip this row`
- `Review existing product`
- `Correct the import row and retry`

An `Update existing product` option may only be exposed if Engineering can route the requested field changes through already-authorized existing Catalog update commands while preserving audit, permission and expected-state rules. If that safe update path is not available in this bounded implementation, do not fake it; leave the row unresolved for interactive correction.

Bulk import must not become an alternative ungoverned update API.

---

## 11. Import Persistence and Quarantine

D-056 requires invalid rows to be quarantined rather than created as live products.

Engineering may add bounded import-support persistence if required, but it must be clearly separated from Catalog Product Truth.

Recommended conceptual records:

- import batch metadata;
- imported source filename/hash metadata;
- row number;
- parsed row snapshot;
- row status;
- validation/correction reason;
- resolved product ID after successful creation where applicable;
- created_by / resolved_by actor;
- timestamps.

Do not store the uploaded spreadsheet indefinitely by default unless retention is explicitly justified.

If persistent file storage is used, define retention and access control in the engineering review before Build Mode.

Quarantine records must be business-isolated and unavailable to ordinary employees.

---

## 12. Bulk Import Mutation Architecture

Preferred architecture:

1. Browser uploads file to an authenticated server endpoint/action.
2. Server validates actor and business scope.
3. Server parses rows.
4. Server performs non-mutating validation/preview.
5. After merchant confirmation, the server orchestrates each valid row through the existing governed Catalog mutation path.
6. Each successful product creation obtains normal audit/idempotency behavior.
7. Row outcomes are recorded against the import batch.

The implementation must not expose service-role credentials to the browser.

The import orchestration endpoint is not to be treated as a general new Catalog public command in the 19-command contract.

Security Architecture must specifically review whether any new server endpoint or helper can bypass existing command-level guarantees.

---

## 13. Idempotency / Repeat Upload Safety

An accidental page refresh or repeat confirmation must not create duplicate products.

Engineering must define an import-batch idempotency mechanism.

At minimum:

- each preview/commit batch receives an opaque batch identifier;
- a confirmed batch cannot be committed twice;
- row-level successful outcomes are durable enough to distinguish already-created rows from retryable failures;
- re-uploading the same file as a brand-new batch does not auto-suppress it merely by file hash, because merchants may intentionally retry corrected files; normal duplicate Product rules still apply.

---

## 14. Permissions

Current runtime behavior must not overstate permissions that do not yet exist.

Build Now authorization rule:

- Owner: permitted.
- Manager: permitted only when the existing permissions architecture actually grants product-creation/import authority consistent with D-058.
- Employee: denied.

If manager permission infrastructure is not yet operational in the current phase, implement Owner access now and preserve a clear authorization seam for D-058. Do not invent an insecure placeholder manager role check.

Reference Cost import must additionally require the same cost visibility/edit authority as interactive reference-cost management.

---

## 15. Bulk Import UI

Place `Import products` as a secondary Catalog management action, not the primary “New product” action.

Recommended flow:

1. `Import products`
2. Upload CSV/XLSX
3. Show template/column help
4. Parse
5. Preview summary
6. Review problems
7. Confirm valid rows
8. Show outcome

The UI must clearly state:

- existing products are never automatically overwritten;
- invalid rows will not be created;
- Inventory stock is not imported through this Catalog file;
- uploaded unit/category values may need explicit selection/correction;
- merchant remains responsible for reviewing the result.

On mobile, do not render a spreadsheet-sized grid requiring horizontal scrolling for all columns. Use a summary plus row cards/details or another bounded responsive pattern.

---

# PART B — SELLING UNIT PRESET SELECTOR

## 16. Required Presets

Use the merged glossary as canonical vocabulary.

### CORE — show first

1. Piece
2. Packet
3. Bottle
4. Box
5. Kilogram
6. Gram
7. Litre
8. Millilitre
9. Plate
10. Cup

### SECONDARY — searchable / lower priority

1. Pouch
2. Tin
3. Tray
4. Bowl
5. Pair
6. Set
7. Roll
8. Metre
9. Carton
10. Bundle

### Custom-only / do not add as standard preset in this mission

- Half
- Full
- Small
- Medium
- Large
- Serving
- Glass
- Scoop
- Slice
- Bunch
- Dozen
- Quintal
- Case

Custom Unit remains available, so merchants may still intentionally use these or other words.

---

## 17. Selling Unit Selector Behavior

Replace free-text-only entry with a searchable selector that supports:

- CORE presets prominently;
- SECONDARY presets via search/list;
- alias recognition for search only;
- `Custom unit` action;
- current value display/editing;
- no silent normalization of an existing custom value.

Examples of search aliases include:

- `pc`, `pcs`, `each` → Piece candidate
- `pkt`, `pack` → Packet candidate
- `kg`, `kilo` → Kilogram candidate
- `g`, `gm` → Gram candidate
- `ltr`, `liter` → Litre candidate
- `ml`, `mL` → Millilitre candidate
- `ctn` → Carton candidate

Selecting a result is an explicit merchant action.

Typing an alias must not silently mutate the value.

---

## 18. Linked-Inventory Unit Rule

When a product is linked to Inventory, D-005 remains controlling.

The selector must not imply the merchant can freely choose a different Selling Unit while linked.

For linked products:

- show the Inventory base unit as authoritative;
- disable direct unit change where the existing architecture already does so;
- explain why in plain language;
- any link replacement that changes unit must continue to use D-068 preview/confirmation.

No preset logic may bypass D-068.

---

# PART C — CATEGORY PRESET SELECTOR

## 19. Required Presets

Use the merged glossary as canonical vocabulary.

### CORE — show first

1. Grocery & Staples
2. Snacks & Packaged Foods
3. Beverages
4. Dairy & Chilled
5. Bakery & Sweets
6. Fruits & Vegetables
7. Meat, Fish & Eggs
8. Frozen Foods
9. Personal Care
10. Home Care & Cleaning
11. Prepared Food & Meals
12. Stationery & General Items

### SECONDARY — searchable / lower priority

1. Cooking Essentials
2. Tea & Coffee
3. Ready-to-Cook & Ready-to-Eat
4. Ice Cream & Desserts
5. Baby Care
6. Health & Wellness
7. Household & Kitchen
8. Pet Care

The preset set is not a global mandatory taxonomy.

---

## 20. Category Selector Behavior

The selector must combine three sources without confusing ownership:

1. Existing business-owned categories.
2. Suggested Kerala-market presets.
3. `Create new category`.

`Uncategorized` remains valid.

Recommended ordering:

- existing merchant categories first when relevant;
- CORE suggestions;
- SECONDARY suggestions;
- Create new category.

Search should match aliases/local-language hints from the glossary where practical.

Do not create a category record merely because the user opened or searched the selector.

---

## 21. Selecting a Preset Category

Because D-008 requires categories to remain business-owned, selecting a preset is a convenience action, not assignment to a global category object.

Required behavior:

1. Normalize the suggested display label under existing category-name rules.
2. Search the current business for an active or archived category with the same normalized identity.
3. If an active same-name business category exists, select it.
4. If an archived same-name category exists, do not silently create a duplicate. Surface a clear choice consistent with current category lifecycle rules — e.g. review/reactivate or choose another category.
5. If no same-name business category exists, explicitly create the category through the existing governed category-creation path, then associate it with the product.

Preset selection must not bypass category audit/authorization rules.

Engineering should avoid creating a hidden seed table of globally owned business categories unless a later architecture mission explicitly approves that model.

---

## 22. Create New Category

`Create new category` remains visible and first-class.

The merchant can enter any valid business-owned category name.

Do not force the user to choose the closest preset.

Do not silently rename custom categories to preset labels.

Existing uniqueness and archive behavior remains unchanged.

---

# PART D — INVENTORY ↔ CATALOG WORKFLOW CLARITY

## 23. Problem to Solve

Founder preview confirmed that the underlying architecture is accepted but the mental model is not immediately obvious.

The merchant may naturally expect “link to Inventory” to make a Catalog product appear as a stock item automatically.

That must not happen because D-001/D-002/D-050 keep Catalog and Inventory separate and Inventory as sole stock authority.

The implementation task is therefore UX clarification, not data-model redesign.

---

## 24. Required UX Refinement

On the Catalog Inventory Link card/dialog, communicate the model in plain merchant language.

Recommended meaning:

- Catalog = what you sell.
- Inventory = what you count/track as stock.
- Linking connects the sale item to the stock item.
- Creating a Catalog product does not automatically create stock.

The link flow should offer two clear paths:

### Path A — Choose existing Inventory item

Search/select an active, eligible Inventory item and continue through the existing D-068 preview/confirm flow.

### Path B — Need to create the stock item first

Provide a clear action such as:

`Create inventory item`

This action should take the merchant into the existing governed Inventory creation experience, not create an Inventory row behind the scenes from Catalog data.

Where technically practical, preserve return context so the merchant can come back to the product and resume linking.

Do not auto-copy Product Name, unit or price into Inventory without an explicit separately governed decision. A prefilled draft may only be considered if it remains visibly editable and no save occurs until the merchant confirms through the Inventory workflow; if this introduces cross-module complexity, defer prefill and use navigation only.

---

## 25. Empty-State Copy

The current “create one in Inventory first” behavior is directionally correct but should explain why.

Example intent, not locked exact copy:

`Stock is tracked in Inventory. Create an inventory item first, then link it here so sales and stock refer to the same item.`

The final copy must remain concise and non-technical.

---

# PART E — BUSINESS TAX SETTINGS UX CLARITY

## 26. Problem to Solve

During Founder preview, the Default Tax Rate field remaining active while `Tax-exclusive` pricing was selected felt confusing.

The engineering response must not incorrectly disable the tax rate.

Tax-exclusive pricing does **not** mean the tax rate is irrelevant. It means the entered product price is interpreted before tax and tax may be added according to the configured rate.

Therefore this is a copy/relationship-clarity issue, not a tax-model change.

---

## 27. Required Tax UX Refinement

When pricing mode is selected, show context-specific helper text.

### Tax-inclusive

Explain that entered/catalog prices include tax where tax applies.

### Tax-exclusive

Explain that entered/catalog prices exclude tax and applicable tax is added separately using the configured rate.

The Default Tax Rate field remains available in both modes where allowed by the existing tax model.

Do not:

- disable Default Tax Rate simply because mode is Tax-exclusive;
- infer legal tax applicability;
- claim GST compliance;
- calculate or recommend a legal rate;
- remove the accepted write-only disclosure limitation.

The existing mandatory disclosure that stored business-wide tax settings cannot yet be read back must remain truthful and prominent.

---

# PART F — DATA / DATABASE BOUNDARIES

## 28. Preset Data Storage

Selling Unit and Category preset vocabulary should preferably live in version-controlled application configuration/constants derived from the canonical glossary, not in business data tables.

Rationale:

- presets are UI suggestions;
- they are not global business-owned Product Truth;
- they should be easy to review and update without data migration;
- selecting a Category preset creates/selects a normal business-owned category only when the merchant explicitly chooses it.

Do not insert 20 preset categories into every business at signup or migration time.

Do not create rows for unused presets.

---

## 29. Bulk Import Schema Change Boundary

Bulk import may require support tables for batches/quarantine.

Any proposed schema addition must be minimal and reviewed by Supabase Backend Architecture + Security & Permissions Architecture before implementation.

The engineering review must explicitly answer:

- Are new tables required?
- Can quarantine be represented safely without new public commands?
- What RLS applies?
- What retention applies to raw row data and files?
- Can the server orchestration use existing Catalog RPCs without privileged bypass?
- How is commit idempotency enforced?
- How are partial failures represented?

Do not proceed with production migration until these answers are locked.

---

# PART G — ERROR AND SAFETY CONTRACT

## 30. Required Error Classes

The UI must distinguish at least:

- unsupported file type;
- file too large / row limit exceeded;
- malformed CSV/XLSX;
- missing Product Name;
- duplicate Product Name;
- duplicate SKU;
- duplicate Barcode;
- invalid Selling Unit value requiring explicit Custom selection/correction;
- invalid category/archive conflict;
- invalid price/reference cost;
- invalid tax configuration;
- permission denied;
- stale or already-committed import batch;
- server save failure;
- partial completion.

Do not expose raw database errors to merchants.

Do not falsely claim all rows imported if some failed.

---

## 31. Auditability

Every successfully created/updated Catalog record must preserve the same actor/time/audit guarantees as interactive mutations.

Import batch metadata should additionally make it possible to answer:

- who initiated the import;
- which file/batch was used;
- when the import occurred;
- which rows created products;
- which rows were rejected or skipped;
- which existing products were considered matches.

The import audit layer must not replace existing product audit history.

---

# PART H — TESTING AND ACCEPTANCE

## 32. Mandatory Engineering Tests — Bulk Import

At minimum verify:

1. CSV happy path.
2. XLSX happy path.
3. mixed valid/invalid rows: valid rows can save; invalid rows remain quarantined.
4. duplicate Product Name does not overwrite.
5. duplicate SKU does not overwrite.
6. duplicate Barcode does not overwrite.
7. same file confirmation cannot commit twice.
8. malformed file creates no product rows.
9. oversized file creates no product rows.
10. employee/unauthorized actor denied.
11. business A cannot import into business B.
12. reference-cost field respects cost authority.
13. row actor attribution is correct.
14. no Inventory rows/movements are created by Catalog import.
15. no twentieth public Catalog command appears.
16. existing interactive Catalog commands still pass regression.
17. partial server failure produces truthful outcome and retry-safe state.

---

## 33. Mandatory Engineering Tests — Selling Units

Verify:

- all 10 CORE units available;
- all 10 SECONDARY units searchable/available;
- aliases find expected candidates;
- alias typing does not silently mutate value;
- Custom Unit works;
- custom existing value remains preserved;
- no conversion occurs;
- linked product unit remains governed by Inventory base unit;
- D-068 behavior is unchanged.

---

## 34. Mandatory Engineering Tests — Categories

Verify:

- all 12 CORE suggestions available;
- all 8 SECONDARY suggestions searchable/available;
- existing merchant categories visible;
- Uncategorized remains valid;
- Create New Category works;
- choosing preset reuses same-name active business category;
- archived same-name category does not silently duplicate;
- unused presets do not create database rows;
- custom category is not silently renamed;
- business isolation remains intact.

---

## 35. Mandatory UX Tests — Inventory Linking

Verify:

- separation between Catalog and Inventory is understandable;
- existing Inventory selection works;
- no Inventory item empty state provides a clear next action;
- Create Inventory navigation uses the existing governed Inventory workflow;
- no stock record is silently auto-created;
- return/resume path works if implemented;
- D-068 preview/confirmation remains unchanged.

---

## 36. Mandatory UX Tests — Tax Settings

Verify:

- Tax-inclusive helper text explains inclusion correctly;
- Tax-exclusive helper text explains tax-added-separately behavior correctly;
- Default Tax Rate remains available where tax model allows;
- UI does not imply Tax-exclusive = non-taxable;
- existing write-only disclosure remains truthful;
- no fabricated current saved value appears.

---

# PART I — IMPLEMENTATION PHASING

## 37. Phase 1 — Engineering Design Lock

Before coding:

- inspect current repo implementation and all 19 Catalog commands;
- propose exact file/schema changes;
- define bulk-import server boundary;
- define any new support tables/RLS;
- define CSV/XLSX parsing libraries and security controls;
- confirm no twentieth public command;
- confirm selector implementation uses glossary constants;
- confirm tax refinement is copy/UX only;
- obtain Security & Permissions Architecture review for the import path.

Output: implementation plan + migration/security review, not production changes.

---

## 38. Phase 2 — Test-Project Backend Work

If new backend support is required:

- implement migration/support code in canonical repo;
- apply to dedicated test Supabase first;
- run isolation, permission, idempotency and partial-failure tests;
- do not apply incomplete migration fragments to production.

---

## 39. Phase 3 — Frontend / Server Orchestration

Implement:

- import UI and server workflow;
- Selling Unit selector;
- Category selector;
- Inventory-link UX refinement;
- tax helper-text refinement.

Do not modify Lovable independently of canonical source synchronization rules.

---

## 40. Phase 4 — Regression and Security Verification

Run:

- existing Catalog test suite;
- import-specific tests;
- RLS/business-isolation verification;
- RPC/public-function inventory confirming exactly 19 public Catalog commands;
- browser/client review confirming no privileged secret exposure;
- Markdown/repository quality gates.

---

## 41. Phase 5 — Controlled Founder Re-Acceptance

After implementation and technical verification, perform a bounded Founder preview focused on the five gap-closure areas.

Founder must specifically verify:

- import workflow feels understandable and safe;
- duplicate/error handling is clear;
- Selling Unit presets are practical;
- Category presets are practical and still merchant-controlled;
- Inventory/Catalog relationship is clearer;
- tax mode/rate relationship is understandable.

No public publish/deploy/domain cutover is implied by acceptance.

---

# PART J — DEFINITION OF DONE

## 42. SB-P-1.11 Gap Closure Is Complete Only When

All of the following are true:

1. CSV and XLSX import exist and satisfy D-055–D-058.
2. Valid rows can save independently of invalid rows.
3. Invalid rows are quarantined with understandable correction reasons.
4. Matches never overwrite automatically.
5. No twentieth public Catalog command is added.
6. Selling Unit selector implements the merged Kerala glossary baseline plus Custom Unit.
7. Category selector implements the merged Kerala glossary baseline plus existing categories/Create New/Uncategorized.
8. Presets remain suggestions, not global compulsory Product Truth.
9. No unit conversion is introduced.
10. Inventory remains sole stock authority.
11. Inventory-link UX is clearer without automatic stock-item creation.
12. Tax-exclusive/inclusive helper text removes the observed confusion without changing the tax model.
13. Security/business isolation/regression tests pass.
14. Founder completes bounded re-acceptance of the gap closure.
15. Completion evidence is merged through human review.

Only after these conditions are met may Mission Control consider SB-P-1.11 fully closed and decide whether to authorize a final pre-publish/publish mission.

---

## 43. Explicitly Not Authorized by This Specification

This specification itself does not authorize:

- Build Mode;
- schema changes in production;
- production migrations;
- new public Catalog commands;
- service-role browser usage;
- Lovable Cloud;
- GitHub↔Lovable connection changes;
- deployment;
- public publish;
- domain binding/cutover;
- automatic data migration from legacy backend;
- automatic inventory creation;
- category hierarchy;
- auto-categorization;
- unit conversion;
- scheduled import;
- POS synchronization.

---

## 44. Engineering Review Questions

Before Build Mode, Engineering must return explicit answers to these questions:

1. What exact server-side boundary will parse/commit bulk imports?
2. How will it reuse existing governed Catalog mutation paths without becoming a twentieth public Catalog command?
3. Are new import batch/quarantine tables required? If yes, provide exact schema and RLS.
4. What file-size and row-count limits are safe?
5. Which XLSX parser will be used and how will malicious/oversized workbook input be bounded?
6. How will batch and row idempotency work?
7. How will partial failures be retried without duplicate creation?
8. How will D-058 manager permission be represented given current runtime permissions?
9. How will Reference Cost import be permission-gated?
10. How will Category preset selection avoid duplicate active/archived categories?
11. Which source files will contain preset constants and alias maps?
12. How will Inventory-create navigation return to the Catalog link flow, if implemented?
13. What exact tax helper copy is proposed?
14. What tests prove the 19-command boundary remains unchanged?
15. What test evidence is required before production migration or Lovable synchronization?

Any unresolved answer that affects authorization, data integrity, RLS or command-boundary safety is a STOP condition for Build Mode.

---

## Next Logical Step

Submit this Engineering Implementation Specification for Claude Engineering + Security & Permissions Architecture review. Lock the exact bulk-import backend boundary, support schema/RLS if any, idempotency model, preset implementation files and test plan before Mission Control authorizes SB-P-1.11 gap-closure Build Mode.
