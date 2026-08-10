# SB-P-1.11 — Build Now Gap Closure Engineering Implementation Specification

## Metadata

| Field | Value |
|---|---|
| Mission | SB-P-1.11 — Product Catalog & Pricing |
| Gap-closure mission | SB-P-1.11-GC-1 |
| Document | Engineering Implementation Specification |
| Revision | 4.0 — Supabase Architecture Correction Reconciliation |
| Status | Mission Control draft for Supabase Backend Architecture re-confirmation |
| Prepared by | Mission Control (v1.0), reconciled by Claude Code (v2.0, v3.0, v4.0) |
| Reconciled per | `communication/live/instruction1.70.md`, `communication/live/report1.75.md`, `communication/live/report1.76.md`, `communication/live/report1.77.md`, `communication/live/instruction1.71.md`, `communication/live/report1.78.md`, `communication/live/instruction1.72.md`, `communication/live/report1.79.md`, `communication/live/report1.80.md`, `communication/live/instruction1.74.md`, `communication/live/report1.81.md`, `communication/live/instruction1.75.md` |
| Canonical baseline | `f637d39f75d36836c5fe50dc623eed5543daad35` |
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

This specification does not authorize implementation by itself. Mission Control must separately authorize Build Mode after this revision passes Security & Permissions Architecture re-review.

### 1.1 Revision 2.0 summary

Revision 1.0 was independently reviewed by Claude Code Engineering (`report1.75.md`, verdict `CHANGES REQUIRED BEFORE BUILD LOCK`) and by Security & Permissions Architecture (`report1.76.md`, verdict `SECURITY CHANGES REQUIRED`). This revision closes every material finding from both reviews. Every finding is mapped to its resolution in the companion reconciliation report, `communication/live/report1.77.md`. The single Product Truth-adjacent inconsistency found (Engineering finding ENG-2 / EIS §21) is resolved per Mission Control's own controlling decision (§3 below), not by an engineering judgment call. No other Product Truth decision changed. This revision remains a specification; it authorizes no implementation.

### 1.2 Revision 3.0 summary

Revision 2.0 was independently re-reviewed by Security & Permissions Architecture (`communication/live/report1.78.md`, verdict `SECURITY CHANGES REQUIRED BEFORE BUILD LOCK`). The focused re-review verified thirteen of sixteen original findings as resolved, and identified three residual blockers, all specific to the import-support bookkeeping design in Part K §45.5:

- **RSB-1** — Revision 2.0 granted `authenticated` direct `INSERT`/`UPDATE` on the import-support tables, which the re-review found insufficient once those same rows are relied on as batch/row audit and orchestration-state evidence, not merely display data.
- **RSB-2** — Revision 2.0 specified `pg_advisory_xact_lock(...)` as the batch-commit concurrency primitive, which the re-review found unexecutable as written: a stateless TanStack server function using a caller-JWT-scoped client has no mechanism to acquire and hold a single Postgres transaction-scoped advisory lock across the multi-step orchestration sequence the way an existing single-transaction `SECURITY DEFINER` command does internally.
- **RSB-3** — As a consequence of RSB-1, batch/row audit fields (`initiated_by`, `resolved_by`, `resolved_product_id`, lifecycle status, timestamps) were forgeable by the ordinary authenticated REST role, undermining their trustworthiness as audit evidence.

This revision closes all three by replacing the authenticated-writable bookkeeping design with a narrow, server-only bookkeeping write path (§45.1.1) and an atomic compare-and-set batch-state acquisition mechanism (§45.5.5), while preserving every other locked decision from Revision 2.0 unchanged. The full finding-by-finding resolution is in `communication/live/report1.79.md`. This revision remains a specification; it authorizes no implementation.

### 1.3 Revision 4.0 summary

Revision 3.0 was independently confirmed by Security & Permissions Architecture (`communication/live/report1.80.md`, verdict `SECURITY READY FOR BUILD LOCK` — the RSB-1/2/3 design-contract corrections were verified resolved with no regression) and then independently reviewed by Supabase Backend Architecture (`communication/live/report1.81.md`, verdict `SUPABASE ARCHITECTURE CHANGES REQUIRED BEFORE BUILD LOCK`). The Supabase review found the RSB-corrected design directionally sound but the exact database contract underspecified against this repository's actual privilege baseline and helper/grant model — seven backend-persistence defects (BA-1 through BA-7), none of them Product Truth or security-model changes:

- **BA-1** — the repository's forward-compatible default-privilege rule (`ALTER DEFAULT PRIVILEGES ... GRANT ALL ON TABLES TO anon, authenticated, service_role`) means any newly created table is automatically granted to `anon` too, unless explicitly revoked; Revision 3.0's grant statements never revoked it.
- **BA-2** — Revision 3.0's proposed RLS predicate called `catalog_internal.resolve_owner_business(auth.uid())`, a helper this repository's own Stage 1 Catalog migration deliberately revokes `EXECUTE` on from `authenticated` (granted only to the seven Catalog executor roles) — the proposed policy could never actually execute for the role it was written for.
- **BA-3 through BA-7** — the two support tables lacked tenant-binding composite foreign keys, row-identity/idempotency uniqueness constraints, status-coupled audit-coherence checks, a non-destructive delete/retention posture, and one unambiguous batch-committed/row-failed terminal-state rule.

This revision closes all seven with the exact table/grant/RLS/state-machine contract in the corrected §45.5, re-using two patterns this repository already has proven, working examples of elsewhere in the same schema: the `UNIQUE(business_id, id)` composite-key pattern already present on both `catalog_products` and `catalog_categories`, and the exact `authenticated`-executable RLS predicate (`business_id IN (SELECT id FROM businesses WHERE owner_id = auth.uid())`) already live today on `catalog_categories`' own `authenticated` SELECT policy. No Product Truth, security-model, or Selling-Unit/Category/Inventory-link/Tax-settings decision changed. The full finding-by-finding resolution is in `communication/live/report1.82.md`. This revision remains a specification; it authorizes no implementation.

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

### Design-lock reconciliation evidence (Revision 2.0 inputs)

- `communication/live/instruction1.69.md` — retrospective registration of the two specialist reviews below.
- `communication/live/report1.75.md` — Claude Code Engineering Review, verdict `CHANGES REQUIRED BEFORE BUILD LOCK`.
- `communication/live/report1.76.md` — Security & Permissions Architecture Review, verdict `SECURITY CHANGES REQUIRED`.
- `communication/live/instruction1.70.md` — the reconciliation mandate Revision 2.0 executed.
- `communication/live/report1.77.md` — Revision 2.0's finding-by-finding reconciliation map.

### RSB reconciliation evidence (Revision 3.0 inputs)

- `communication/live/instruction1.71.md` — authorization for the focused Security re-review of Revision 2.0.
- `communication/live/report1.78.md` — Security & Permissions Architecture focused re-review, verdict `SECURITY CHANGES REQUIRED BEFORE BUILD LOCK`, identifying RSB-1 through RSB-3.
- `communication/live/instruction1.72.md` — the reconciliation mandate Revision 3.0 executed.
- `communication/live/report1.79.md` — Revision 3.0's finding-by-finding RSB resolution map.

### Supabase architecture reconciliation evidence (Revision 4.0 inputs)

- `communication/live/instruction1.73.md` — authorization for the narrow Security confirmation of Revision 3.0.
- `communication/live/report1.80.md` — Security & Permissions Architecture narrow confirmation, verdict `SECURITY READY FOR BUILD LOCK`.
- `communication/live/instruction1.74.md` — authorization for the Supabase Backend Architecture review of Revision 3.0.
- `communication/live/report1.81.md` — Supabase Backend Architecture review, verdict `SUPABASE ARCHITECTURE CHANGES REQUIRED BEFORE BUILD LOCK`, identifying BA-1 through BA-7.
- `communication/live/instruction1.75.md` — the reconciliation mandate this revision executes.
- `merge/active/02_Supabase_Architecture_Framework.md` — governing Supabase architecture framework.

---

## 3. Existing Architecture That Must Not Be Broken

The current SB-P-1.11 implementation has exactly 19 public Catalog commands.

Confirmed by direct inspection of production (`gysgzasfcjvtrgaigfyn`) at reconciliation time: exactly 19 `SECURITY DEFINER` functions in the locked set (`create_catalog_product`, `update_catalog_product_identity`, `update_catalog_product_unit`, `create_catalog_category`, `archive_catalog_category`, `archive_catalog_product`, `reactivate_catalog_product`, `delete_catalog_product`, `record_catalog_selling_price_change`, `record_catalog_tax_change`, `update_business_tax_settings`, `record_catalog_reference_cost_change`, `preview_catalog_inventory_link_change`, `assign_or_replace_catalog_inventory_link`, `remove_catalog_inventory_link`, `get_catalog_command_outcome`, `catalog_products_search`, `catalog_product_read`, `catalog_products_list_batch`). This is the exact locked set. No addition, removal, or signature change is authorized by this specification.

This gap closure must not create a twentieth public Catalog command merely to add bulk import or selector UX.

The existing Catalog write model remains command-only for browser-facing product/category mutations.

Bulk import is therefore specified as a governed **server-side orchestration workflow**, not a new general-purpose public Catalog command. The workflow invokes existing Catalog commands/executors for authorized row-level mutations, exactly as designed in Revision 1.0. **Revision 2.0 additionally locked the exact mechanism** (Part K) by which the orchestration layer coordinates state without introducing a twentieth `SECURITY DEFINER` function: import-batch/row bookkeeping is business-isolated application data — never a Catalog command, never Product Truth, never itself authoritative over any Catalog mutation. **Revision 3.0 corrects that mechanism's write path** (§45.1.1, §45.5.4) per the focused Security re-review (`report1.78.md`, RSB-1 through RSB-3): bookkeeping writes are now server-only, not `authenticated`-writable, closing the audit-forgeability concern the original RLS-only design left open. See §45 (Part K) for the complete current design.

The implementation must preserve:

- same-business isolation;
- authenticated actor attribution;
- owner/permission authority;
- existing RLS posture;
- existing idempotency and audit rules for Catalog writes;
- existing 19-command public surface;
- no browser direct writes to protected Catalog tables (`catalog_products`, `catalog_categories`, and all Catalog history/event tables remain non-writable by `authenticated`, exactly as today);
- no service-role exposure to client code;
- no Lovable Cloud backend;
- canonical production Supabase `gysgzasfcjvtrgaigfyn`;
- canonical GitHub repository as source of truth.

This revision confirms bulk import can be implemented safely without altering the public command count or weakening authorization. No engineering exception to Mission Control is required. See Part K for the complete locked design.

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
- **category reactivation** (see §21 and Part K §45.2 — explicitly out of scope for this mission; no twentieth command is authorized to add it);
- automatic product classification;
- unit conversion;
- automated mapping from one unit to another;
- richer bulk-import correction assistant UI beyond the bounded Phase 1 flow;
- WhatsApp conversational correction workflow if the general conversational interface dependency is not yet available;
- raw-file retention, if a concrete operational need is later demonstrated (Phase 1 default is no retention — see Part K §45.9).

### Add-on / integration

- POS-originated bulk synchronization;
- third-party catalog feed ingestion;
- scheduled recurring import jobs.

### Reject

- a twentieth public Catalog command solely for bulk import or category reactivation;
- direct browser inserts into Catalog tables;
- automatic duplicate overwrite;
- auto-creating Inventory rows when a Catalog product is imported or created;
- duplicating Catalog products as Inventory products;
- automatic kg↔g, litre↔ml, pack↔piece or similar conversion;
- compulsory global category master data;
- silent AI category assignment;
- silent replacement of merchant custom wording with glossary canonical labels;
- silent recreation, reuse, or reactivation of an archived category under a preset or import match.

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

**Locked hard limits (see Part K §45.3 for the complete limit table and rationale):** maximum upload size 5 MB compressed; maximum 2,000 data rows; maximum 40 columns; maximum 2,000 characters per cell; maximum 10-second server parse time. These are server-enforced, not UI-only guidance. Exceeding any limit rejects the file before any row is parsed into a preview, with a specific, named error (§30).

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
- Reference Cost — optional and owner/cost-authority sensitive (see Part K §45.7)

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

Any column not on the recognized-field allowlist is ignored for storage purposes and, where surfaced to the merchant at all, is represented only as a validation finding (e.g. "1 unrecognized column: 'Supplier'"), never persisted verbatim (Part K §45.8, SEC-8).

The exact CSV/XLSX column names and aliases must be defined in Build Mode implementation documentation and tested; the recognized logical fields above are the locked contract.

---

## 8. Import Lifecycle

The import uses an explicit staged flow, implemented as the batch/row state machine locked in Part K §45.4–§45.5.

### Stage 1 — Upload

The user selects a CSV/XLSX file. No product mutation occurs yet. Transport is locked in Part K §45.6 (multipart `FormData` directly to the authenticated server function; no intermediate Storage staging in Phase 1).

### Stage 2 — Parse and preview

The server parses the file and returns a preview containing at minimum:

- total rows;
- rows ready to create;
- rows with validation errors;
- rows matching an existing product identity;
- rows with unrecognized category/unit values;
- rows excluded from processing;
- clear indication that nothing has been imported yet.

This stage persists the batch and per-row bookkeeping records (Part K §45.5) but performs zero Catalog Product Truth mutation.

### Stage 3 — Merchant review

The merchant can inspect row-level status before committing.

At minimum each row must be classified as:

- `READY`
- `NEEDS_CORRECTION`
- `POSSIBLE_MATCH`
- `SKIPPED`

### Stage 4 — Explicit import confirmation

Only after explicit confirmation may valid `READY` rows be created, via the commit algorithm locked in Part K §45.5.

### Stage 5 — Outcome

Show:

- successfully created count;
- correction-needed count;
- duplicate/match count;
- skipped count;
- failed-at-save count if any;
- a downloadable/viewable correction result where practical (subject to the formula-injection neutralization rule in Part K §45.11).

Do not collapse these into one generic "Import complete" message.

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

Build Now decision options are locked to:

- `Skip this row`
- `Review existing product`
- `Correct the import row and retry`

**`Update existing product` is removed from Build Now scope** (resolves ENG-5/SEC-10 — see Part K §45.10). Engineering evaluated routing an update through `update_catalog_product_identity`; the existing command cannot safely represent an arbitrary combination of import-row field changes (it replaces identity fields atomically and does not accept partial/selective field updates, nor does it address price/tax/cost/unit changes at all, which live in separate commands with separate authorization and confirmation rules such as D-068). Building a bespoke aggregation layer to combine several protected commands into one "apply this row's changes" action would itself become an ungoverned update API, which D-057 and SEC-10 both forbid. A matched row is therefore always left unresolved for interactive correction through the ordinary, already-governed Catalog UI. This may be reconsidered in a future, separately authorized mission if a safe representation is found.

Bulk import must not become an alternative ungoverned update API.

---

## 11. Import Persistence and Quarantine

D-056 requires invalid rows to be quarantined rather than created as live products.

**Locked (resolves ENG-4/ENG-6/SEC-7/SEC-8/SEC-16 — see Part K §45.5 and §45.8 for the complete schema, RLS, and allowlist):** two new support tables, `catalog_import_batches` and `catalog_import_rows`, hold batch metadata and row-level quarantine/state. These are explicitly **not** Catalog Product Truth — no RLS policy, executor role, or command treats their content as authoritative over any Catalog mutation.

The uploaded spreadsheet itself is **not stored** after the parse/preview lifecycle (Part K §45.9) — only the allowlisted, validated field values needed for correction and audit are persisted per row.

Quarantine records are business-isolated (RLS-scoped to the owning `business_id`, server-derived and immutable) and unavailable to ordinary employees (Part K §45.5.4).

---

## 12. Bulk Import Mutation Architecture

Locked architecture (resolves ENG-1 — see Part K §45.1 for the complete server-function boundary):

1. Browser submits `FormData` containing the file to an authenticated TanStack Start server function.
2. The server function's auth middleware (the existing, currently-unused `requireSupabaseAuth`) re-derives the authenticated actor and hands the function a Supabase client scoped to that actor's own JWT — never service-role. This caller-JWT client is used for every Catalog read/write in the flow (duplicate checks via `catalog_products_search`, and the eventual `create_catalog_product` call).
3. The server function derives the actor's business via the same `catalog_internal.resolve_owner_business`-equivalent read path every existing command already uses; it never trusts a client-supplied business identifier. Owner status is independently re-derived the same way.
4. The server parses rows under the hard limits in §6/Part K §45.3.
5. The server performs non-mutating validation/duplicate-classification (Part K §45.4) using the caller-JWT client, then persists the batch/row bookkeeping (Part K §45.5) using the **narrow server-only bookkeeping client** (§45.1.1) — never the caller-JWT client, never the browser. No Catalog Product Truth is touched at this stage.
6. After merchant confirmation, and only after re-deriving actor/business/Owner authority again from the caller's JWT, the server atomically claims the batch for commit (§45.5.5) via the server-only bookkeeping client, then orchestrates each `READY` row through the existing governed Catalog mutation path (`create_catalog_product`) using the caller's own JWT-scoped client — the same RLS and executor-privilege boundary a browser call would hit.
7. Each successful product creation obtains normal audit/idempotency behavior, because it is a normal call to an unmodified existing command.
8. Row outcomes are recorded against the import batch, again via the server-only bookkeeping client (Part K §45.5).

The implementation must not expose service-role credentials to the browser, and this design never does — see Part K §45.1.1 and §45.12 for the narrow, explicitly bounded use of the existing server-only credential for bookkeeping writes only, never for Catalog Product Truth or for calling Catalog commands with elevated authority.

The import orchestration endpoint is not a Catalog command and is not counted in the 19-command contract, because it issues no new `SECURITY DEFINER` Postgres function and mutates Catalog Product Truth only by calling the existing, unmodified commands.

---

## 13. Idempotency / Repeat Upload Safety

An accidental page refresh or repeat confirmation must not create duplicate products.

**Locked algorithm (resolves ENG-4/SEC-9 — full detail in Part K §45.5.5):**

- each batch receives a server-generated, cryptographically unguessable opaque batch identifier at preview time;
- each row receives its own row-operation idempotency key at preview time, persisted immediately — never regenerated on retry;
- a confirmed/committed batch cannot be committed twice, enforced via an atomic compare-and-set transition on the batch's `status` column, performed by the server-only bookkeeping client (§45.5.5) — not via a session-scoped Postgres advisory lock, which a stateless server function cannot hold across the multi-step orchestration sequence;
- concurrent commit attempts on the same batch race on that single conditional `UPDATE`; exactly one succeeds, and the other observes zero rows updated and returns a truthful non-mutating result (`IN_PROGRESS` or `ALREADY_COMMITTED`) without attempting any row mutation;
- row-level successful outcomes are durable (the row's persisted status becomes `CREATED` with its `resolved_product_id`), distinguishing already-created rows from retryable failures;
- re-uploading the same file as a brand-new batch is always permitted and creates a new, independent batch; normal duplicate Product rules (§10) apply to it exactly as to any other batch — file hash is never used for automatic deduplication or suppression.

---

## 14. Permissions

Current runtime behavior must not overstate permissions that do not yet exist.

**Locked Build Now authorization rule (resolves SEC-5, fail-closed):**

- Owner: permitted.
- Manager: **denied in Build Now.** Confirmed by direct inspection: no manager/employee permission infrastructure exists anywhere in the current schema (zero matches in any migration). Per D-058 and the Security review, Manager import must remain denied until the approved runtime permission system exists and explicitly grants the D-058-compatible permission — a display role string, JWT metadata, or client-supplied flag is never sufficient authority. No placeholder or partial Manager check is implemented.
- Employee: denied.

This is a hard authorization contract, not a temporary implementation gap: the server function re-derives Owner status independently on every preview and commit request from the authoritative business-ownership relation (`businesses.owner_id = auth.uid()`), exactly as every existing Catalog-adjacent write already does.

Reference Cost import additionally requires the same cost visibility/edit authority as interactive reference-cost management (D-016) — see Part K §45.7 for the exact mechanism. Because Manager import is denied entirely in Build Now and the Owner always holds full reference-cost authority (D-016), this authority check is currently always satisfied for any permitted importer; the mechanism is still implemented as an independent, explicit check (not hard-coded to "always true") so it remains correct once Manager import is later authorized under real permission infrastructure.

---

## 15. Bulk Import UI

Place `Import products` as a secondary Catalog management action, not the primary "New product" action.

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

Preset vocabulary storage location is locked in Part K §45.13.

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

**Required behavior (revised — resolves ENG-2, per Mission Control's controlling decision in §3.2–§3.4 of `instruction1.70.md`):**

1. Normalize the suggested display label under existing category-name rules.
2. Search the current business for an **active** category with the same normalized identity (via the existing `catalog_categories` direct-select path already granted to `authenticated`, RLS-scoped to the caller's own business).
3. If an active same-name business category exists, select it.
4. **If a same-normalized-name category exists only in Archived state, the selector must surface a truthful archived-name conflict** (e.g. "You previously archived a category named '[name]'. Choose a different name, or use a custom category name.") **and must not silently recreate, reuse, or reactivate it.** No command exists in the locked 19-function surface to reactivate an archived category (`reactivate_catalog_product` exists for products; no category equivalent exists), and none is authorized by this mission. The merchant selects a different preset, edits the label, or uses Create new category with a distinct name. A future Category-reactivation capability requires separate governance and, if it requires a new public function, a separate Mission Control authorization outside the locked 19-command contract of this mission.
5. If no same-name business category exists in any status, explicitly create the category through the existing governed category-creation path (`create_catalog_category`), then associate it with the product.

Preset selection must not bypass category audit/authorization rules.

Engineering must not create a hidden seed table of globally owned business categories.

**Underlying data note confirmed at reconciliation time:** `catalog_categories` carries a `UNIQUE(business_id, name_normalized)` constraint with no status qualifier — an archived category's name is unavailable to `create_catalog_category` for a new category in the same business today, independent of this mission. This is a pre-existing condition of the locked architecture, not something this mission introduces or is authorized to change; step 4 above is the correct, safe, truthful way to surface it to the merchant without inventing new mutation authority.

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

The merchant may naturally expect "link to Inventory" to make a Catalog product appear as a stock item automatically.

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

The current "create one in Inventory first" behavior is directionally correct but should explain why.

Example intent, not locked exact copy:

`Stock is tracked in Inventory. Create an inventory item first, then link it here so sales and stock refer to the same item.`

The final copy must remain concise and non-technical.

---

# PART E — BUSINESS TAX SETTINGS UX CLARITY

## 26. Problem to Solve

During Founder preview, the Default Tax Rate field remaining active while `Tax-exclusive` pricing was selected felt confusing.

The engineering response must not incorrectly disable the tax rate.

Tax-exclusive pricing does **not** mean the tax rate is irrelevant. It means the entered product price is interpreted before tax and tax may be added according to the configured rate.

Therefore this is a copy/relationship-clarity issue, not a tax-model change. This matches the Founder's own recorded feedback exactly (`report1.71.md` §5, finding #2): the Founder found the field confusing, not wrong.

---

## 27. Required Tax UX Refinement

When pricing mode is selected, show context-specific helper text.

### Tax-inclusive

Explain that entered/catalog prices include tax where tax applies.

### Tax-exclusive

Explain that entered/catalog prices exclude tax and applicable tax is added separately using the configured rate.

The Default Tax Rate field remains available in both modes where allowed by the existing tax model. **Locked: the field must not be disabled merely because pricing mode is Tax-exclusive** (`instruction1.70.md` §3.14).

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

Selling Unit and Category preset vocabulary lives in version-controlled application configuration/constants derived from the canonical glossary, not in business data tables (locked exact location in Part K §45.13).

Rationale:

- presets are UI suggestions;
- they are not global business-owned Product Truth;
- they should be easy to review and update without data migration;
- selecting a Category preset creates/selects a normal business-owned category only when the merchant explicitly chooses it.

Do not insert 20 preset categories into every business at signup or migration time.

Do not create rows for unused presets.

---

## 29. Bulk Import Schema Change Boundary

Bulk import requires the two support tables specified in Part K §45.5 (`catalog_import_batches`, `catalog_import_rows`). Their complete schema, grants, and RLS are locked in that section — this is the executable design that this section previously deferred to a future engineering review.

Confirmed answers to this section's original open questions:

- New tables are required: yes, exactly two (Part K §45.5).
- Quarantine is represented safely without new public commands: yes — both tables are plain application tables (`authenticated` SELECT-only under RLS; writes via the narrow server-only bookkeeping client, §45.1.1), never `SECURITY DEFINER` functions, never counted in the 19-command contract (Part K §45.1, §3 above).
- RLS: business-isolated, server-derived `business_id`, no cross-business access — exact policies in Part K §45.5.4.
- Retention: no raw file retention; row/batch bookkeeping retention policy in Part K §45.5.3, §45.9.
- Server orchestration uses existing Catalog RPCs without privileged bypass: confirmed — see Part K §45.1, §45.12.
- Commit idempotency: Part K §45.5.5.
- Partial failures: Part K §45.5.6.

No production migration may proceed until a separate Build Mode mission applies and behaviorally verifies this exact schema against the dedicated test project first, per this repository's established migration discipline (test-project-first, then production, matching the pattern already used throughout SB-P-1.11-RR-1 through RR-3).

---

# PART G — ERROR AND SAFETY CONTRACT

## 30. Required Error Classes

The UI must distinguish at least:

- unsupported file type;
- file too large / row limit exceeded;
- malformed CSV/XLSX;
- encrypted/password-protected file;
- macro-enabled or non-standard workbook content-type (rejected regardless of extension — Part K §45.2);
- missing Product Name;
- duplicate Product Name;
- duplicate SKU;
- duplicate Barcode;
- invalid Selling Unit value requiring explicit Custom selection/correction;
- invalid category/archive conflict (including the archived-category-name conflict from §21 step 4);
- invalid price/reference cost;
- invalid tax configuration;
- permission denied;
- stale, already-committed, or in-progress import batch;
- unrecognized/foreign batch identifier (indistinguishable from a nonexistent one — Part K §45.5.4);
- server save failure;
- partial completion.

Do not expose raw database errors to merchants.

Do not falsely claim all rows imported if some failed.

---

## 31. Auditability

Every successfully created/updated Catalog record must preserve the same actor/time/audit guarantees as interactive mutations, because it is created through the same unmodified command.

Import batch metadata additionally makes it possible to answer (exact model in Part K §45.14):

- who initiated the import;
- which file/batch was used;
- when the import occurred;
- which rows created products;
- which rows were rejected or skipped;
- which existing products were considered matches (business-scoped only — never a cross-business existence signal).

The import audit layer must not replace existing product audit history, must not dump the full spreadsheet, and must never place Reference Cost values into general audit JSON (Part K §45.7, §45.14).

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

## 32A. Mandatory Negative Security Tests (added — resolves report1.76.md §16)

18. Manager without the actual approved permission cannot import (and no Manager permission path exists to forge in Build Now).
19. Manager permission cannot be forged through browser state or request payload (not applicable until Manager infrastructure exists, but the fail-closed check must still be proven: a browser sending a fabricated "role":"manager" or similar claim is ignored).
20. Business A cannot access Business B's batch ID (row query returns `NOT_FOUND`, indistinguishable from a nonexistent batch).
21. Business A cannot access Business B's quarantine rows.
22. Business A's duplicate lookup cannot reveal Business B's products (structurally guaranteed by `catalog_products_search`'s existing RLS scoping — verify with a direct cross-business attempt).
23. Concurrent confirmation of the same batch does not duplicate products (verify via two simultaneous commit requests).
24. Partial retry does not recreate successful rows.
25. Compressed-expansion abuse is bounded (a small compressed file that expands far beyond the decompressed-size limit is rejected before full expansion).
26. Formula content is never evaluated (a cell containing `=1+1` imports as the literal text `=1+1`, or is rejected, never as `2`).
27. External workbook references are never followed.
28. Spreadsheet values cannot inject HTML/SQL/code in any surface that later renders them.
29. Reference Cost is invisible in preview/quarantine/audit to an actor without cost authority.
30. Raw `business_id`, actor IDs, Inventory IDs, or database IDs supplied in the spreadsheet cannot establish any authority or be persisted as Catalog Product Truth.
31. Browser code never receives a service-role credential at any point in the import flow.
32. Presets cannot create or mutate another business's categories.
33. Selecting an unused preset creates no database row.

## 32B. Mandatory Negative Security Tests — Import-Support Write Boundary (added — resolves RSB-1, RSB-2, RSB-3, `instruction1.72.md` §5)

34. The authenticated browser/REST role cannot `INSERT` a row into `catalog_import_batches` or `catalog_import_rows` (direct PostgREST attempt is rejected — no grant exists).
35. The authenticated browser/REST role cannot `UPDATE` any column on either table (direct PostgREST attempt is rejected — no grant exists).
36. The authenticated browser/REST role cannot `DELETE` from either table.
37. An Owner can `SELECT` only their own business's batch/row records; a second, independent Owner querying the same batch id sees an empty result (extends test 20/21 to explicitly re-confirm under the Revision 3.0 SELECT-only grant model).
38. An Employee identity (once real permission infrastructure exists to construct one) receives zero rows from either table, same as today's Owner-only reality confirms by construction (no non-Owner identity can exist yet).
39. The privileged bookkeeping credential is never present in any browser-observable surface (response body, response headers, client bundle, `window`/global scope, console, or network payload) at any point in the preview or commit flow.
40. Caller-JWT authorization (actor/business/Owner re-derivation) is proven to occur, and to fail closed on an invalid/expired/missing token, **before** any bookkeeping write is attempted — a request with a bad token never reaches the privileged client at all.
41. The privileged bookkeeping client cannot be induced (via crafted request input) to perform any operation against `catalog_products`, `catalog_categories`, or any table other than the two import-support tables.
42. Two concurrent commit requests for the same batch: exactly one succeeds in claiming it (the conditional `UPDATE` affects exactly one row across both attempts combined); the other receives `IN_PROGRESS` or `ALREADY_COMMITTED` and performs zero row mutations.
43. Replaying a commit request after a prior successful commit returns `ALREADY_COMMITTED` and creates no additional products.
44. A partial-retry commit (some rows already `CREATED` from a prior interrupted attempt) reuses each row's original, already-persisted `row_idempotency_key` — verified by direct inspection that no row's `row_idempotency_key` value changes between the first and retried commit attempt.
45. An already-`CREATED` row is not recreated or duplicated on retry, and its `resolved_product_id` is unchanged.
46. `resolved_product_id` written to any row can be traced to an actual, real `create_catalog_product` outcome for that exact row — no code path permits writing a `resolved_product_id` that did not come from a genuine command result.
47. `initiated_by`, `resolved_by`, `created_at`, `resolved_at`, and `committed_at` cannot be set to an arbitrary/forged value through any client-reachable path — confirmed both by the absent `authenticated` write grant (tests 34–36) and by the bookkeeping client never accepting these as client-supplied input.
48. After a simulated partial failure (some rows fail, batch left in `failed` state), a subsequent successful retry leaves batch/row state fully consistent: every row reaches a terminal state, and the batch reaches `committed` exactly once.
49. Business isolation holds across the entire commit sequence — a batch/row claimed and committed for Business A is never visible, claimable, or mutable via any code path reachable by Business B's actor.

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
- **archived same-name category surfaces the truthful conflict message and does not silently duplicate, reuse, or reactivate it** (revised per §21);
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
- Default Tax Rate remains available and **enabled** in both pricing modes;
- UI does not imply Tax-exclusive = non-taxable;
- existing write-only disclosure remains truthful;
- no fabricated current saved value appears.

---

## 37. Server-Function Test Architecture (added — resolves ENG-7)

Locked design, full detail in Part K §45.15:

- Parsing, row validation, and duplicate-classification logic are implemented as plain, framework-independent TypeScript functions with no dependency on the TanStack Start request/response lifecycle — unit-testable directly via the existing `vitest` suite exactly like today's pure-logic code, with no server context required.
- The thin `createServerFn` wrapper (auth extraction via `requireSupabaseAuth`, `FormData` parsing, invoking the pure functions above, calling the existing Catalog RPCs) is integration-tested by importing and invoking its exported handler directly in a test module, against the dedicated test Supabase project (`drravyyauixltoihzmwo`), using the same genuine-Auth-user pattern already established in `tests/setup/test-clients.ts` — no live HTTP server or browser is required.
- New tests live in `tests/catalog-import/`, mirroring the existing `tests/inventory/` structure and conventions. This is the first committed automated Catalog test coverage of any kind in this repository (Catalog verification to date has been ad-hoc, non-committed scratchpad scripts across RR-1 through RR-3, ID-1/ID-2, and CP-1) and establishes the durable pattern for all Catalog test coverage going forward, per Mission Control's requirement in `instruction1.70.md` §4 ENG-7.
- **Testing the narrow server-only bookkeeping client (§45.1.1, added in Revision 3.0):** this repository already has an established, safe pattern for test-context privileged Supabase access — `.env.test.local`'s `SUPABASE_TEST_SERVICE_ROLE_KEY`, used throughout the `RR-1`/`RR-2`/`RR-3` mission chain exclusively against the dedicated test project (`drravyyauixltoihzmwo`), never production. The §32B negative-test matrix (direct REST write rejection, concurrent-commit race, retry/idempotency, forged-field rejection) is executed against that same test project using that same existing credential-loading convention — no new secret-handling pattern is introduced for testing purposes.

---

# PART I — IMPLEMENTATION PHASING

## 38. Phase 1 — Engineering Design Lock

**Status: this revision (2.0) constitutes the completed Engineering Design Lock output.** All items previously deferred to this phase are now locked in Part K, pending Security & Permissions Architecture re-review of this revision.

Confirmed in this revision:

- current repo implementation and all 19 Catalog commands inspected directly against production;
- exact file/schema changes proposed (Part K §45.5);
- bulk-import server boundary defined (Part K §45.1);
- new support tables/RLS defined (Part K §45.5);
- CSV/XLSX parsing libraries and security controls chosen (Part K §45.2);
- no twentieth public command confirmed (§3, Part K §45.1);
- selector implementation confirmed to use glossary constants (§28, Part K §45.13);
- tax refinement confirmed copy/UX only (Part E);
- Security & Permissions Architecture review of the import path: **this revision is the input to that re-review**, per `instruction1.70.md`'s Next Logical Step.

Output of this phase: this implementation plan (no production changes), pending the re-review verdict.

---

## 39. Phase 2 — Test-Project Backend Work

If new backend support is required (it is — Part K §45.5 tables):

- implement migration/support code in canonical repo;
- apply to dedicated test Supabase first (`drravyyauixltoihzmwo`);
- run isolation, permission, idempotency and partial-failure tests (§32A);
- do not apply incomplete migration fragments to production.

---

## 40. Phase 3 — Frontend / Server Orchestration

Implement:

- import UI and server workflow;
- Selling Unit selector;
- Category selector;
- Inventory-link UX refinement;
- tax helper-text refinement.

Do not modify Lovable independently of canonical source synchronization rules.

---

## 41. Phase 4 — Regression and Security Verification

Run:

- existing Catalog test suite;
- import-specific tests (§32, §32A);
- RLS/business-isolation verification;
- RPC/public-function inventory confirming exactly 19 public Catalog commands;
- browser/client review confirming no privileged secret exposure;
- Markdown/repository quality gates.

---

## 42. Phase 5 — Controlled Founder Re-Acceptance

After implementation and technical verification, perform a bounded Founder preview focused on the five gap-closure areas.

Founder must specifically verify:

- import workflow feels understandable and safe;
- duplicate/error handling is clear;
- Selling Unit presets are practical;
- Category presets are practical and still merchant-controlled (including the archived-name-conflict message reading as truthful, not broken);
- Inventory/Catalog relationship is clearer;
- tax mode/rate relationship is understandable.

No public publish/deploy/domain cutover is implied by acceptance.

---

# PART J — DEFINITION OF DONE

## 43. SB-P-1.11 Gap Closure Is Complete Only When

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
12. Tax-exclusive/inclusive helper text removes the observed confusion without changing the tax model, and the Default Tax Rate field remains enabled in both modes.
13. Security/business isolation/regression tests pass, including the full negative-security matrix in §32A.
14. Founder completes bounded re-acceptance of the gap closure.
15. Completion evidence is merged through human review.
16. Every finding in `report1.75.md` and `report1.76.md` is resolved, accepted as a named limitation, or explicitly still blocked per `report1.77.md`.
17. Archived-category-name conflicts are surfaced truthfully with no silent reactivation, reuse, or duplication (§21).

Only after these conditions are met may Mission Control consider SB-P-1.11 fully closed and decide whether to authorize a final pre-publish/publish mission.

---

## 44. Explicitly Not Authorized by This Specification

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
- category reactivation (any form);
- auto-categorization;
- unit conversion;
- scheduled import;
- POS synchronization;
- installation of the CSV/XLSX parser dependencies locked in Part K §45.2 (locked as a decision; not installed under this revision).

---

# PART K — LOCKED TECHNICAL DESIGN (ENGINEERING + SECURITY RECONCILIATION)

This Part provides the concrete, executable design that Revision 1.0 deferred to "Engineering Design Lock." Every subsection resolves one or more named findings from `report1.75.md` (ENG-1–ENG-7) and `report1.76.md` (SEC-1–SEC-16). The full finding-by-finding map is in `communication/live/report1.77.md`.

## 45.1 Server-function execution surface (ENG-1, SEC-4, SEC-11, SEC-12)

A new module, e.g. `src/server-functions/catalog-import.ts`, hosts the following TanStack Start server functions, each built on `createServerFn` and wrapped with the existing, currently-unused `requireSupabaseAuth` middleware (`src/integrations/supabase/auth-middleware.ts`):

- `catalogImportPreview` — accepts `FormData` containing the file; returns the batch id and row-level preview classification. No Catalog mutation.
- `catalogImportCommit` — accepts a batch id and the merchant's row-level confirmation choices; orchestrates row creation through `create_catalog_product`; returns the outcome summary.
- `catalogImportGetBatch` — read-only batch/row status retrieval, for polling or page refresh recovery.

**This is the first real use of `createServerFn` and of `requireSupabaseAuth` in this codebase.** Both exist today only as generated scaffolding (`auth-attacher.ts`/`auth-middleware.ts`), never wired to an actual server function. This revision explicitly names that fact as a Build Mode risk factor: Phase 2/3 implementation must budget for discovering integration issues with this execution surface that no prior SB-P-1.11 mission has encountered, and Phase 4 regression must include a first-time end-to-end proof that the middleware behaves as documented under real production Auth tokens, not only under the test project.

Every server function re-derives, on every call, from the caller's own JWT (never from client-supplied fields):

- authenticated actor (`auth.getClaims(token).sub`);
- the actor's business (via the same business-resolution read path every existing Catalog command uses internally);
- Owner status (direct `businesses.owner_id = actor` check).

The database client used inside these server functions for **all Catalog reads/writes** (`catalog_products_search` duplicate checks, `create_catalog_product`, `record_catalog_reference_cost_change`) is created exactly as `requireSupabaseAuth` already does: the anon/publishable key plus the caller's own Bearer token, with `persistSession: false`. This client's privilege is exactly `authenticated`, RLS-enforced identically to a hypothetical direct browser call — it can never bypass Catalog RLS or the existing command boundary.

Import-support bookkeeping writes use a second, narrow, server-only client — see §45.1.1. That client is never used for Catalog reads or writes.

Test architecture for this surface is locked in §45.15.

### 45.1.1 Narrow server-only bookkeeping client (RSB-1, RSB-3 — resolves the residual concern in SEC-7/SEC-9/SEC-11)

Revision 2.0 made `catalog_import_batches`/`catalog_import_rows` directly writable by the `authenticated` role under RLS. The focused Security re-review (`report1.78.md`) found this insufficient: those same rows are relied on as the batch/row audit trail and the commit/retry state machine, so an ordinary authenticated actor being able to forge `status`, `resolved_product_id`, `resolved_by`, or timestamps through the plain REST API materially weakens their trustworthiness as evidence, even though it can never touch Catalog Product Truth.

**Locked correction:** all `INSERT`/`UPDATE` writes to `catalog_import_batches` and `catalog_import_rows` are performed exclusively by a second, narrow, server-only Supabase client, distinct from the caller-JWT client above. Concretely, this reuses the credential this codebase already has and has never used for Catalog: `src/integrations/supabase/client.server.ts`'s existing `supabaseAdmin` (the service-role client, already present, already reviewed as never exposed to client bundles — confirmed originally in `SB-P-1.11-RR-1` Workstream B and re-confirmed unchanged by this design). No new credential type, secret, or Supabase feature is introduced.

This client is bound by hard, explicit rules, verbatim from `instruction1.70.md` §3.5:

- it is **never** sent to browser code, client environment variables, logs, responses, downloads, or telemetry;
- it is used **only** for `INSERT`/`UPDATE` on the two import-support tables — no other table, and no `SELECT`/`DELETE` beyond what the commit algorithm in §45.5.5 requires internally;
- it is **never** used to establish or substitute for actor/business/Owner authority — that authority is always independently re-derived from the caller's own JWT via the caller-JWT client (§45.1) **before** any bookkeeping write is attempted, on every preview and every commit call;
- it is **never** used to create, update, or delete `catalog_products`, `catalog_categories`, or any other Catalog Product Truth table;
- it is **never** used to call `create_catalog_product` or any other Catalog command — all nineteen commands are invoked exclusively through the caller-JWT client, exactly as an interactive browser call would;
- it performs **no** dynamic, client-influenced table or column selection — every query it issues is a fixed, hard-coded operation against one of exactly two tables, never constructed from request input.

**Isolation model for this specific write path:** because the service-role credential bypasses Row-Level Security by Postgres/Supabase design (this is standard, expected `service_role` behavior, not a defect), tenant isolation for bookkeeping *writes* is enforced by application code, not by RLS: every `INSERT`/`UPDATE` this client issues is parameterized with the `business_id` independently re-derived from the caller's JWT within the same request handler, never accepted from client input, matching the discipline every existing Catalog command already applies at the SQL level. RLS remains fully enabled on both tables and continues to govern the separate, `authenticated`-role **read** path (§45.5.4) — the two are independent controls, not substitutes for each other.

This does **not** create a twentieth public Catalog command, per `instruction1.70.md` §3.1/§3.5: no new `SECURITY DEFINER` Postgres function is added, and the credential is never used to grant elevated authority over Catalog Product Truth.

**Import boundary/bundling note:** `client.server.ts`'s own existing comment already documents the exact safety rule Build Mode must follow: "Top-level import is safe only in other `.server.ts` modules — route files and `*.functions.ts` ship to the client bundle. Load inside server handlers: `const { supabaseAdmin } = await import("@/integrations/supabase/client.server")`." The bookkeeping module in `src/server-functions/catalog-import.ts` must load `supabaseAdmin` this same way — a dynamic import inside the server-function handler body, never a top-level import — so the bundler cannot pull the service-role-capable module into any client-shipped bundle. This is an existing, already-established convention, not a new rule invented by this design.

## 45.2 CSV/XLSX parser choice (ENG-5, SEC-1, SEC-2, SEC-3)

**Locked choice:**

- **CSV:** `papaparse`. Widely adopted, pure-JavaScript, streaming-capable (bounds memory without loading the full file before rejecting an oversized one), MIT-licensed, no known history of RCE-class vulnerabilities. CSV as a format has no formula/macro/external-link concept at all, which structurally eliminates the entire SEC-2 threat class for the CSV path — only SEC-3 (formula-injection *text*, e.g. a cell beginning with `=`) applies, and that is a display/re-export concern, not a parse-time execution risk, because CSV parsing never evaluates cell content.
- **XLSX:** `exceljs`. Actively maintained, reads formula cells as their last-cached scalar result by default (it does not implement a formula evaluation engine, so there is no execution path to disable — it structurally cannot recalculate a formula), and does not follow external workbook links or execute embedded objects/macros as part of normal cell-value reading. This directly satisfies SEC-2's "formula cells treated only as inert cached scalar values" requirement by the library's own default behavior, not by a configuration flag engineering must remember to set. Rejected alternative: SheetJS `xlsx` — has documented CVE history (prototype pollution, ReDoS) in versions available through the public npm registry, and its maintained/patched releases are distributed outside the npm registry via the project's own CDN, which is an unnecessary supply-chain complication for this use case given `exceljs` meets the requirement natively.

**Content-type verification (SEC-1 "extension alone is not trusted"):** before invoking either parser, the server independently verifies actual file structure, not just the filename extension:

- for a claimed `.csv`, the server confirms the payload is valid UTF-8 (or a declared, allowed encoding) text with no binary/ZIP magic bytes at the start;
- for a claimed `.xlsx`, the server confirms the payload is a valid ZIP container whose `[Content_Types].xml` declares exactly the plain OOXML spreadsheet content type (`application/vnd.openxmlformats-officedocument.spreadsheetml.sheet`) — a macro-enabled workbook declares a different content type (`...sheet.macroEnabled.12`) and is rejected outright, regardless of its file extension; an encrypted/password-protected `.xlsx` (OLE-compound-encrypted container, not a plain ZIP) fails this same structural check and is rejected with the same generic "unsupported file" error, never a raw parser exception.

**Neither dependency is installed under this revision or this mission** — this section locks the choice and its justification for the future Build Mode mission that will add it, per `instruction1.70.md` §4 ENG-5's explicit instruction not to add the dependency here.

## 45.3 Hard upload/parser limits (SEC-1)

| Limit | Value | Rationale |
|---|---|---|
| Compressed upload size | 5 MB | Generous for a multi-thousand-row merchant catalog spreadsheet; small enough to bound memory and transfer time on typical merchant connectivity. |
| Decompressed processing size (XLSX only) | 25 MB | Bounds ZIP-expansion abuse (SEC-2) independent of the compressed-size limit; checked incrementally during extraction, not only after full decompression. |
| Data rows | 2,000 | Matches realistic Build Now merchant catalog size; a business regularly exceeding this is a candidate for a future, separately authorized bulk-tooling improvement, not a Build Now blocker. |
| Columns | 40 | Comfortably exceeds the recognized-field allowlist (§7) with room for unrecognized columns to be reported, while bounding worst-case row-object size. |
| Cell length | 2,000 characters | Prevents a single pathological cell from dominating memory/processing; far exceeds any legitimate product field. |
| Worksheets (XLSX) | 1 (the first/active sheet only) | Import reads only the first worksheet; additional worksheets are ignored and reported as an informational note, never silently trusted as additional data or as an authority override for the first sheet. |
| Parser runtime | 10 seconds server-side wall clock | Bounds worst-case CPU abuse; exceeding it aborts parsing with a generic timeout error and creates no product rows. |

All limits are enforced server-side, before any row reaches the preview/duplicate-classification stage. File size is checked from `FormData`'s reported size before the body is fully read into memory, so an oversized upload is rejected as early as the transport layer allows.

## 45.4 Duplicate detection algorithm (ENG-3, SEC-10, SEC-12)

For each parsed row with at least one identity field present (Product Name is always present per §9; SKU and Barcode are optional), the server issues one `catalog_products_search` call per non-empty identity field, using that field's normalized value as `p_query`, with `p_include_archived = true` (so an archived product with a colliding identity is also surfaced, mirroring the archived-category handling in §21 — this prevents a bulk import from creating what looks like a duplicate of a product the merchant already archived) and `p_limit = 1`.

For each such call, the returned `match_rank` is interpreted as follows:

| `match_rank` | Meaning | Treated as identity conflict? |
|---|---|---|
| `1` | Exact Barcode match | Yes — `POSSIBLE_MATCH` |
| `2` | Exact SKU match | Yes — `POSSIBLE_MATCH` |
| `3` | Exact normalized Product Name match | Yes — `POSSIBLE_MATCH` |
| `4` | Product Name prefix match | No — never blocks or flags the row |
| `5` | Product Name substring match | No — never blocks or flags the row |
| no result | No match on this field | No conflict from this field |

A row is classified `POSSIBLE_MATCH` if **any** of its identity-field searches returns rank 1–3, regardless of which specific field triggered it; the matched product's id/name is surfaced to the merchant (from the same-business result set only — this call is already RLS-scoped to the caller's own business by `catalog_products_search`'s own internal `resolve_owner_business` logic, so cross-business identity leakage is structurally impossible here, satisfying SEC-10's "no cross-business existence oracle" requirement without any new access control — it is inherited from the existing, unmodified function). A row where every identity-field search returns only rank 4–5 or no result at all proceeds to `READY` (subject to the rest of §9's validation).

This adds read load (up to 3 search calls per row) but no new capability, no new grant, and no risk beyond what an equivalent number of interactive searches by the same merchant would already produce.

## 45.5 Support tables: schema, grants, RLS (ENG-2, ENG-4, ENG-6, SEC-7, SEC-8, SEC-9 — physical contract corrected in Revision 4.0 per BA-1 through BA-7)

Two new tables, business-isolated application data — **not** owned by a `SECURITY DEFINER` executor, **not** counted in the 19-command contract, and **never treated as authoritative for any Catalog mutation** (the actual mutation always re-validates independently inside the unmodified `create_catalog_product`).

`report1.81.md` (Supabase Backend Architecture review) found Revision 3.0's table/grant/RLS design directionally correct but underspecified against this repository's actual privilege baseline and helper/grant model. §45.5.1–§45.5.2 lock the exact table contracts; §45.5.3 locks delete/retention; §45.5.4 locks grants/RLS; §45.5.5 locks the commit algorithm; §45.5.6 covers partial-failure representation. Each subsection states inline exactly what changed from Revision 3.0 and why.

### 45.5.1 `catalog_import_batches`

| Column | Type | Notes |
|---|---|---|
| `id` | `uuid` PK, `default gen_random_uuid()` | Opaque batch identifier — cryptographically unguessable, satisfying SEC-9. |
| `business_id` | `uuid` NOT NULL, FK `businesses(id)` | Server-derived at creation; never client-supplied. |
| `initiated_by` | `uuid` NOT NULL, FK `auth.users(id)` | The actor who started the import. |
| `original_filename` | `text` **NOT NULL** | Every persisted batch represents an accepted, already-parsed source file — Stage 1 (§8) never creates a batch without one, so nullability is explicitly closed, not accidental (BA-5). Display metadata only — never used as a storage path, never executable, sanitized before storage (SEC-1, SEC-15). |
| `file_kind` | `text` **NOT NULL** `CHECK (file_kind IN ('csv','xlsx'))` | |
| `row_count` | `integer` **NOT NULL** `CHECK (row_count >= 0)` | Total data rows parsed; zero is a legitimate parse outcome (an empty file) and is explicitly allowed, not treated as an error (BA-5). |
| `status` | `text` **NOT NULL** `DEFAULT 'previewed'` `CHECK (status IN ('previewed','committing','committed','failed'))` | Explicit initial-state contract via `DEFAULT` — every row is inserted as `previewed` and nothing else (BA-5). State machine — see §45.5.5. |
| `created_at` | `timestamptz` NOT NULL default `now()` | |
| `committed_at` | `timestamptz` NULL, `CHECK ((status = 'committed') = (committed_at IS NOT NULL))` | Bidirectional coherence (BA-5): `committed_at` is set if and only if `status = 'committed'` — neither a committed batch missing its timestamp nor a non-committed batch carrying one is representable. |

**Constraints:** `UNIQUE (business_id, id)` in addition to the `id` primary key (BA-3) — the same pattern already proven on `catalog_products` and `catalog_categories` in this schema (`catalog_products_business_id_uniq`, `catalog_categories_business_id_uniq`), confirmed by direct inspection of production at reconciliation time. This composite key is what makes the tenant-binding child foreign key in §45.5.2 possible.

**Indexes:** `(business_id, created_at DESC, id)` for Owner-scoped batch history/list reads. No status-only index is added — the atomic claim in §45.5.5 addresses a single row by primary key, so a status-only index provides no benefit for that operation (per `report1.81.md` §2.1's own guidance, accepted as-is).

### 45.5.2 `catalog_import_rows`

| Column | Type | Notes |
|---|---|---|
| `id` | `uuid` PK, `default gen_random_uuid()` | |
| `batch_id` | `uuid` NOT NULL | Part of the composite tenant-binding FK below — no longer an independent FK to `catalog_import_batches(id)` alone (BA-3). |
| `business_id` | `uuid` NOT NULL | Denormalized copy of the batch's business, server-derived, enabling a direct RLS check on this table without a join. **Corrected in Revision 4.0:** `FOREIGN KEY (business_id, batch_id) REFERENCES catalog_import_batches (business_id, id)` — a single composite foreign key, replacing Revision 3.0's two independent FKs. This makes a row whose `business_id` disagrees with its own batch's `business_id` structurally impossible to insert, even under a service-role bug that bypasses RLS (BA-3) — the exact defense-in-depth `report1.81.md` §2.2 item 1 required. |
| `row_number` | `integer` **NOT NULL** `CHECK (row_number >= 1)` | 1-based position in the source file (BA-4). |
| `status` | `text` **NOT NULL** `CHECK (status IN ('READY','NEEDS_CORRECTION','POSSIBLE_MATCH','SKIPPED','CREATED','FAILED'))` | No column default — Stage 2 parsing always inserts each row with its classification already computed and explicit (BA-5); there is no valid "unclassified" insert. |
| `parsed_snapshot` | `jsonb` NOT NULL | **Allowlisted fields only** (§45.8): name, selling_unit, category_label, sku, barcode, description, selling_price, tax_treatment, tax_rate_percent. `reference_cost` is included only if `has_reference_cost_authority` (below) is true for the importing actor at parse time; otherwise the column is omitted from the snapshot entirely, not merely hidden in the UI (SEC-6). No database JSON schema is required beyond this application-level allowlist plus the Build Mode tests in §32 proving Reference Cost omission (`report1.81.md` §2.2 item 9, accepted as-is). |
| `has_reference_cost_authority` | `boolean` **NOT NULL** | Recorded once at parse time so downstream display/commit logic never has to re-derive it from a mutable source, and so a later authority change cannot retroactively expose a value that was correctly withheld at import time. |
| `correction_reason` | `text` NULL, `CHECK (correction_reason IS NULL OR correction_reason IN ('MISSING_NAME','DUPLICATE_NAME','DUPLICATE_SKU','DUPLICATE_BARCODE','INVALID_UNIT','INVALID_CATEGORY','INVALID_PRICE','INVALID_TAX'))` | **Corrected in Revision 4.0:** the reason-code set is now a database-enforced closed vocabulary, not just a comment describing intended application behavior (BA-5) — this exact eight-value list is version 1 of the vocabulary; extending it is a additive migration, never a silent free-text fallback. Never a raw database error message (SEC-8, §30). |
| `matched_product_id` | `uuid` NULL | **Corrected in Revision 4.0:** `FOREIGN KEY (business_id, matched_product_id) REFERENCES catalog_products (business_id, id)` — a same-business composite FK, replacing a plain `FK catalog_products(id)`. Postgres's default `MATCH SIMPLE` FK semantics mean the constraint is not evaluated at all when `matched_product_id IS NULL`, preserving the required null-safety for rows with no match (BA-3). Set only for `POSSIBLE_MATCH` rows; same-business only, per §45.4. |
| `row_idempotency_key` | `uuid` NOT NULL, `default gen_random_uuid()`, **`UNIQUE (business_id, row_idempotency_key)`** | Assigned once, at row-insert (preview) time. Never regenerated. Passed verbatim to `create_catalog_product` at commit time. **Corrected in Revision 4.0:** the uniqueness constraint is now explicit rather than merely a stated intent (BA-4) — business-scoped (not bare-column-global) uniqueness is chosen deliberately, consistent with every other idempotency-key scope in this schema (`catalog_write_idempotency_keys_scope_uniq` is likewise `(business_id, operation, idempotency_key)`, never a global key), so a coincidental UUID collision across two unrelated businesses cannot occur in principle but is not the mechanism relied on for isolation either way. |
| `resolved_product_id` | `uuid` NULL | **Corrected in Revision 4.0:** `FOREIGN KEY (business_id, resolved_product_id) REFERENCES catalog_products (business_id, id)`, same same-business composite pattern and null-safety as `matched_product_id` above (BA-3). Set only after a successful `create_catalog_product` call for this row. |
| `resolved_by` | `uuid` NULL, FK `auth.users(id)` | |
| `resolved_at` | `timestamptz` NULL | |
| `created_at` | `timestamptz` NOT NULL default `now()` | |

**Status-coupled resolution check (new in Revision 4.0, BA-5):**

```sql
CHECK (
  (status = 'CREATED' AND resolved_product_id IS NOT NULL AND resolved_by IS NOT NULL AND resolved_at IS NOT NULL)
  OR
  (status <> 'CREATED' AND resolved_product_id IS NULL AND resolved_by IS NULL AND resolved_at IS NULL)
)
```

This closes both directions `report1.81.md` §2.2 item 6 required: a `CREATED` row cannot exist without its full resolution evidence, and — just as importantly — a non-`CREATED` row (including a `FAILED` one) can never carry a `resolved_product_id`, ruling out a forged or stale created-product reference on a row that was never actually created.

**Constraints:** `UNIQUE (batch_id, row_number)` (BA-4) — one stable persisted identity per source row inside a batch.

**Indexes:** `(business_id, batch_id, row_number)` for business-scoped batch row delivery, and `(business_id, batch_id, status, row_number)` for commit/retry row selection (`status IN ('READY','FAILED')`, per §45.5.5 step 3). Build Mode must verify the actual query planner path chosen once the composite FK/unique constraints above exist, since they may already satisfy part of this coverage (`report1.81.md` §2.2, accepted as an explicit Build Mode verification item, not invented certainty here). No index on `parsed_snapshot`.

Explicitly **not** stored anywhere in this schema (SEC-8): unrecognized/unknown spreadsheet columns, workbook metadata, formulas, external links, the raw file binary, raw database primary keys supplied by the spreadsheet, or any system/permission metadata.

### 45.5.3 Delete and retention behavior (new in Revision 4.0 — resolves BA-6)

Revision 3.0 specified `catalog_import_rows.batch_id ... ON DELETE CASCADE`, which contradicts §45.9's own "retained indefinitely by default" audit-evidence posture: deleting one batch row would silently erase every row-level audit record beneath it with no separate authorization. **Corrected:** the `(business_id, batch_id)` composite FK in §45.5.2 uses `ON DELETE RESTRICT` (Postgres's default when unspecified is `NO ACTION`, which is equally acceptable here; either fails closed). Accepted Build Now posture:

- no user/browser delete grant (already true — §45.5.4 grants no `DELETE` to `authenticated`);
- no server-orchestration delete path exists anywhere in this design;
- no `ON DELETE CASCADE` between batch and rows;
- a batch row cannot be deleted while rows referencing it still exist, and no code path in this specification ever attempts to delete either;
- destructive evidence removal, if ever needed, requires a future, separately authorized retention/migration mission — not an implicit consequence of this schema.

### 45.5.4 RLS and grants (corrected in Revision 4.0 — resolves BA-1, BA-2; RSB-1/RSB-3 closure from Revision 3.0 preserved)

**Step 1 — neutralize inherited default privileges (BA-1).** This repository's own `supabase/migrations/20260727000000_reconcile_default_grants.sql` establishes, for forward-compatibility, `ALTER DEFAULT PRIVILEGES FOR ROLE postgres IN SCHEMA public GRANT ALL ON TABLES TO anon, authenticated, service_role;` — confirmed by direct inspection at reconciliation time. Any table created by a normal migration (which runs as `postgres`) is therefore **automatically** granted to `anon` and `authenticated` in full unless explicitly revoked. Revision 3.0's grant statements never revoked this inherited baseline. The corrected migration contract must, immediately after `CREATE TABLE` for each of the two support tables:

```sql
REVOKE ALL ON catalog_import_batches, catalog_import_rows FROM anon, authenticated;
GRANT SELECT ON catalog_import_batches, catalog_import_rows TO authenticated;
```

`anon` ends with zero privilege on either table. `authenticated` ends with `SELECT` only — `INSERT`/`UPDATE`/`DELETE` remain revoked, exactly as Revision 3.0's RSB-1 closure intended, but now starting from an explicitly neutralized baseline rather than an assumed-empty one. `service_role` retains its standard implicit full access (the same behavior it has on every table in this schema by default) — this is required, not incidental, because §45.1.1's server-only bookkeeping client depends on it.

**Step 2 — enable RLS and use an executable predicate (BA-2).** Revision 3.0 proposed a `USING` clause calling `catalog_internal.resolve_owner_business(auth.uid())`. Direct inspection of production at reconciliation time confirms this repository's Stage 1 Catalog migration grants `EXECUTE` on that function only to the seven Catalog executor roles (`catalog_cost_executor`, `catalog_identity_executor`, `catalog_lifecycle_executor`, `catalog_link_executor`, `catalog_pricing_executor`, `catalog_read_executor`, `catalog_tax_executor`) plus `postgres` — **not** `authenticated`. A policy written against it could never actually execute for the `authenticated` role it was intended to protect. Per `instruction1.75.md` §4.5, this must be corrected without broadening `catalog_internal` exposure merely to make the policy work.

**Corrected predicate:** this repository already has a proven, live, working example of exactly this need — `catalog_categories`' own `authenticated` `SELECT` policy (`authenticated_select_own_business_category_columns`, added under `SB-P-1.11-RR-2`/`RR-3`), which uses a direct public-table predicate instead of the internal helper:

```sql
ALTER TABLE catalog_import_batches ENABLE ROW LEVEL SECURITY;
ALTER TABLE catalog_import_rows ENABLE ROW LEVEL SECURITY;

CREATE POLICY owner_select_own_business ON catalog_import_batches
  FOR SELECT TO authenticated
  USING (business_id IN (SELECT id FROM businesses WHERE owner_id = auth.uid()));

CREATE POLICY owner_select_own_business ON catalog_import_rows
  FOR SELECT TO authenticated
  USING (business_id IN (SELECT id FROM businesses WHERE owner_id = auth.uid()));
```

This is the exact predicate text already live in production on `catalog_categories` — reused verbatim, not reinvented, and confirmed executable by `authenticated` because `businesses` is a plain public table `authenticated` already has ordinary read access to (via that table's own existing RLS), with no dependency on any `catalog_internal` helper.

**Guarantees, both tables:** RLS is enabled (mandatory, not optional); there is no policy for `anon` (and no grant for it to use one); the single `FOR SELECT TO authenticated` policy is Owner-scoped; there are no authenticated `INSERT`/`UPDATE`/`DELETE` policies (none are needed — no such grant exists to evaluate a policy against); a query for a batch id belonging to a different business, or to no business at all, returns an identical empty result in both cases, making foreign and nonexistent batch identifiers indistinguishable to `authenticated` callers (SEC-7, SEC-9); ordinary employees (who hold no `businesses.owner_id` relationship) and any Manager identity (no permission infrastructure exists to grant one — §14) receive zero rows from either table under the current fail-closed Phase 1 posture.

**Service-role bypass, restated precisely:** the server-only bookkeeping client (§45.1.1) is the `service_role` Postgres role, which bypasses RLS by standard Supabase design. This is explicitly **not** treated as tenant enforcement — RLS governs only the `authenticated` read path above; tenant isolation for `service_role` writes is enforced entirely by the application-code discipline specified in §45.1.1 (server-derived `business_id`, no dynamic table/column selection) plus, new in Revision 4.0, the database-level tenant-binding composite foreign keys in §45.5.2, which make a cross-business row structurally unrepresentable even if the application-code discipline were ever violated by a bug.

**Revision 2.0's previously "accepted, named limitation"** — that a technically sophisticated `authenticated` actor could forge their own business's bookkeeping rows via direct REST access — **remains fully closed**, exactly as Revision 3.0 established: `authenticated` has zero write grant on either table (now doubly confirmed by the explicit `REVOKE ALL ... FROM anon, authenticated` above, not merely an omitted grant), so no REST-level forgery of `status`, `resolved_product_id`, `resolved_by`, `resolved_at`, or `committed_at` is possible through any path other than the server-only bookkeeping client, which itself never accepts client-supplied values for those fields (§45.5.5).

### 45.5.5 Batch/row lifecycle and idempotency algorithm (ENG-4, SEC-9 — commit mechanism revised in Revision 3.0 to resolve RSB-2; terminal-state rule corrected in Revision 4.0 to resolve BA-7)

Batch states: `previewed → committing → committed`, or `previewed → committing → failed` (retryable back to `committing`).

**Corrected terminal/retryable rule (BA-7):** Revision 3.0 stated the batch becomes `committed` "if every row reached a terminal state," while separately stating `FAILED` rows are retryable — since a `committed` batch's claim predicate (`status IN ('previewed','failed')`) structurally excludes it from ever being reclaimed, these two statements were incompatible whenever a commit attempt ended with any row still `FAILED`. **Locked resolution, exactly as `report1.81.md` §5.3 recommended and `instruction1.75.md` §4.6 requires:**

- a batch transitions to `committed` **only when zero rows remain in `FAILED` state** after this commit attempt — i.e., every row that was `READY` or `FAILED` entering this attempt is now `CREATED`;
- if **any** row is still `FAILED` when the commit loop finishes, the batch ends this attempt as `failed` (not `committed`), which is exactly what makes it reclaimable by a future commit request against the same batch;
- `NEEDS_CORRECTION`, `POSSIBLE_MATCH`, and `SKIPPED` are terminal **non-save** row outcomes decided during Stage 2/3 preview, before the commit loop ever runs on them — they do not participate in the commit loop's `READY`/`FAILED` set and never force a retry by themselves;
- once a batch reaches `committed`, it is never reopened — the claim predicate in §45.5.5 step 2 guarantees this structurally, not just by convention.

This is a pure backend state-machine clarification with no merchant-facing behavior change: the Stage 5 outcome summary (§8) already reports row-level counts (created/failed/skipped/matched) independently of the batch's own internal `status` value, so a merchant sees the identical, accurate per-row breakdown either way.

1. **Preview (Stage 2):** server re-derives actor/business/Owner authority via the caller-JWT client, then — via the server-only bookkeeping client (§45.1.1) — creates one `catalog_import_batches` row (`status = 'previewed'` by column default, `initiated_by` = the server-derived actor) and one `catalog_import_rows` row per parsed data row, each with its own `row_idempotency_key` generated and persisted immediately, and each with its Stage 2/3 classification already explicit (no default status). No Catalog Product Truth is touched.
2. **Commit (Stage 4) — atomic claim, not an advisory lock:** the server re-derives actor/business/Owner authority again from the caller's JWT (never from the request body). Using the server-only bookkeeping client, it issues one conditional update:

   ```sql
   UPDATE catalog_import_batches
      SET status = 'committing'
    WHERE id = $batch_id
      AND business_id = $business_id   -- server-derived, never client-supplied
      AND status IN ('previewed', 'failed')
   RETURNING *;
   ```

   This single statement is the entire concurrency primitive — it replaces Revision 2.0's `pg_advisory_xact_lock(...)` step, which the focused Security re-review (`report1.78.md`) correctly found unexecutable from a stateless TanStack server function using a caller-JWT-scoped client, and which `report1.81.md` §5.1 independently re-confirmed is an executable compare-and-set mechanism: PostgreSQL rechecks the `WHERE` predicate after any row-lock wait, so at most one concurrent claimant can ever receive the row from `RETURNING`.
   - If the `UPDATE` claims exactly one row, this request — and only this request — proceeds to step 3.
   - If it claims zero rows, the server re-reads the batch (via the same server-only client, still scoped to `business_id = $business_id`). A missing row (no batch with this id for this business) returns `NOT_FOUND`. A row found with `status = 'committing'` returns `IN_PROGRESS`. A row found with `status = 'committed'` returns `ALREADY_COMMITTED`. In every zero-row-claimed case, **no row mutation of any kind is attempted.**
3. For each row with `status IN ('READY', 'FAILED')` (the `FAILED` inclusion is what makes partial retry safe), the server calls `create_catalog_product` — through the **caller-JWT client**, never the bookkeeping client — using that row's **persisted** `row_idempotency_key` — never a freshly generated one. Because `create_catalog_product`'s own internal idempotency table (`catalog_write_idempotency_keys`, keyed `(business_id, operation, idempotency_key)`) already recognizes a resubmission with the same key and payload fingerprint as already-completed and replays the original result rather than inserting again, a retried commit is safe even if the server crashed mid-loop on a prior attempt.
4. Each row's outcome is written back — via the server-only bookkeeping client only — updating its own `status` (`CREATED` with `resolved_product_id` taken verbatim from the `create_catalog_product` result, never from client input; or `FAILED` with a reason) independently. One row's failure does not block or roll back any other row (D-056). `resolved_product_id` can therefore only ever be a value that a real, governed Catalog command actually returned — there is no code path that accepts a client-supplied product id into this column, and the status-coupled `CHECK` constraint in §45.5.2 makes any other combination unrepresentable at the database level regardless.
5. After all rows are processed: if zero rows remain `FAILED`, the batch transitions to `committed` (`committed_at = now()`, both server-produced, and consistent with the `CHECK` constraint in §45.5.1); if one or more rows remain `FAILED`, the batch transitions to `failed` instead (per the corrected BA-7 rule above), and a retry of the commit call re-enters at step 2, safely — step 3's per-row idempotency makes the retried row loop itself safe, reusing each row's original, unchanged `row_idempotency_key`.
6. **Concurrency:** two simultaneous commit requests for the same batch race on the single conditional `UPDATE` in step 2; Postgres's own row-level locking during that statement guarantees exactly one request's `UPDATE` succeeds, and the other observes zero rows affected and returns the correct non-mutating result — never attempting a second, conflicting orchestration pass. This satisfies SEC-9's "concurrent confirmation does not duplicate products" and RSB-2's requirement for an "executable atomic compare-and-set batch-state acquisition model" precisely as specified in `instruction1.70.md` §3.6, independently re-confirmed executable by `report1.81.md` §5.1.

Re-uploading the same file as a new batch is always permitted and creates an entirely independent batch/row set with its own fresh idempotency keys; ordinary duplicate-product rules (§45.4) apply to it exactly as to any other batch. File content hash, if computed at all, is recorded as informational metadata only and never drives automatic deduplication or suppression (SEC-9).

### 45.5.6 Partial failure representation (ENG-1, §30)

A row that fails at commit time (e.g. a race where another interactive action created a conflicting product between preview and commit) is marked `FAILED` with a `correction_reason` drawn from the closed vocabulary in §45.5.2, is retryable on the next commit attempt against the same batch (which, per the corrected §45.5.5 rule, also means the batch itself ends that attempt as `failed` rather than `committed`), and never silently disappears from the outcome summary (§8 Stage 5) — the "failed-at-save count" is always reported truthfully, never folded into "successfully created."

## 45.6 File transport (ENG-6)

**Locked Phase 1 boundary:** multipart `FormData` submitted directly from the browser to `catalogImportPreview` (§45.1). The server function reads the file from `FormData`, checks its reported size against the compressed-size limit (§45.3) before reading the body, parses it in server memory under the runtime/size bounds above, and **does not persist the original file** anywhere — not to disk, not to Supabase Storage, not to any table. No Storage bucket is created or required by this design. This directly satisfies SEC-16's preferred policy ("transient processing; no retained raw spreadsheet") without needing the fallback persisted-storage design that section also specifies, because Phase 1 has no demonstrated operational need for raw-file retention.

## 45.7 Reference Cost handling (SEC-6)

Reference Cost authority (D-016: Owner always has it; a Manager only with explicit owner-granted cost-price permission, which does not exist as real infrastructure yet — see §14) is checked once, server-side, at parse time, and recorded as the boolean `has_reference_cost_authority` on each `catalog_import_rows` record (§45.5.2). If the actor lacks this authority and the file contains a Reference Cost column:

- the column's values are read only long enough to validate their presence/format for the row's `correction_reason` if needed, then discarded — never written into `parsed_snapshot`, never returned in the preview response, never included in any quarantine display, correction download, duplicate-match result, audit event, log line, or telemetry payload;
- the row proceeds through the rest of validation as if the Reference Cost column were absent, and the preview UI states plainly that Reference Cost from the file was not imported due to insufficient permission, without ever showing the value that was withheld.

At commit time, an authorized row's Reference Cost is set through the existing `record_catalog_reference_cost_change` command — the same authorization/audit boundary interactive Reference Cost entry already uses — never through a bespoke bulk-write path.

Because Manager import is denied entirely in Build Now (§14) and Owner always holds this authority, every currently-permitted importer already has it; the check is implemented as a genuine, independent, per-actor evaluation regardless, so it remains correct without a code change once Manager import is later authorized.

## 45.8 Quarantine field allowlist (SEC-8)

The exhaustive allowlist for `catalog_import_rows.parsed_snapshot` is exactly the "Recognized logical fields" list in §7 (Product identity + Commercial fields), with Reference Cost gated per §45.7. Any spreadsheet column not on this list is never written into the snapshot; if a column name doesn't match any recognized field or alias, it is reported once per batch as an informational "N unrecognized column(s) ignored: [names]" validation note (the column *names* are safe display metadata; their *values* are never read or stored).

## 45.9 Retention policy (SEC-16)

- **Raw uploaded file:** never persisted (§45.6) — no retention policy needed because nothing is retained.
- **Batch/row bookkeeping (`catalog_import_batches`/`catalog_import_rows`):** retained indefinitely by default in Build Now, on the same basis as every other Catalog audit-adjacent record in this schema (e.g. `catalog_audit_events`) — these are small, allowlisted, business-owned records, not the sensitive raw file. A future, separately authorized mission may define an explicit deletion/archival policy if merchant volume or a specific operational/compliance need later demonstrates one is required; none is demonstrated today, so none is invented now (consistent with "do not invent" boundaries throughout this specification).

## 45.10 Duplicate-resolution authority ceiling (SEC-10)

As locked in §10: `Update existing product` is removed from Build Now scope entirely. A `POSSIBLE_MATCH` row grants no mutation authority of any kind — it is purely informational (the matched product's id/name, same-business only per §45.4), and the merchant's only Build Now options are `Skip this row`, `Review existing product` (navigates to the ordinary Catalog product page — no import-specific privilege involved), or `Correct the import row and retry` (edits the source row's parsed values and re-runs validation/duplicate-detection on the corrected version — still produces a brand-new `create_catalog_product` call, never an update to the matched product).

## 45.11 CSV/formula-injection neutralization (SEC-3)

Any cell value beginning with `=`, `+`, `-`, or `@` (after leading whitespace is trimmed) is treated as untrusted text throughout — it is never evaluated during import (neither parser evaluates formulas at all, per §45.2) and, for the Stage 5 downloadable/viewable correction result (§8), any such value is re-emitted with a neutralizing prefix (e.g. a leading `'` / tab character, the standard CSV-formula-injection mitigation) so that reopening the correction file in a spreadsheet application cannot trigger formula evaluation, while the merchant-visible value (rendered in the app's own UI, not a spreadsheet) remains unmodified and fully readable.

## 45.12 Privileged/service-role boundary — explicit confirmation (SEC-11, revised in Revision 3.0 per RSB-1/RSB-3)

Revision 2.0 stated this design used no service-role credential anywhere. The focused Security re-review (`report1.78.md`) determined that claim's underlying design (bookkeeping writes as plain `authenticated`-role RLS operations) was itself the source of RSB-1/RSB-3, and required a narrow, server-only privileged write path instead (§45.1.1). This section is corrected accordingly, not merely re-asserted.

**Current design:** exactly one privileged credential is used, exactly one purpose: the existing `supabaseAdmin` service-role client (`src/integrations/supabase/client.server.ts`), used **only** for `INSERT`/`UPDATE` on `catalog_import_batches`/`catalog_import_rows` (§45.1.1, §45.5.4, §45.5.5). It is bound by the explicit rule list in §45.1.1, restated here as the direct answer to SEC-11/`instruction1.70.md` §3.5:

- caller-JWT authorization (actor, business, Owner status, and — where relevant — Reference Cost authority) is independently re-derived and checked **before** any privileged bookkeeping action, on every preview and every commit call — the privileged client is never itself the authorization mechanism, only a post-authorization persistence mechanism;
- it never creates/updates/deletes Catalog Product Truth, never calls `create_catalog_product` or any of the other eighteen commands, and never receives elevated authority over them on the actor's behalf;
- it performs no arbitrary client-selected table/column operation — every query is a fixed operation against exactly one of two named tables;
- it is never sent to browser code, client environment variables, logs, responses, downloads, or telemetry, and is loaded only via dynamic import inside the server-function handler body, never a top-level import (the same rule `client.server.ts` already documents for every other consumer of `supabaseAdmin`).

All Catalog reads and mutations continue through the caller-JWT-scoped client and the existing nineteen-command surface, exactly as Revision 2.0 specified and as `instruction1.70.md` §3.4/§3.5 require. No generic privileged "arbitrary Catalog mutation" helper exists anywhere in this design.

## 45.13 Preset configuration location (SEC-14)

Selling Unit and Category preset constants (the exact CORE/SECONDARY lists in §16 and §19, plus the alias maps in §17) live in a new version-controlled source file, e.g. `src/lib/catalog-presets.ts`, exported as plain readonly TypeScript arrays/objects. They are compiled into the application bundle like any other constant; there is no database table, no seed migration, no per-business row, and no application code path that allows a merchant to modify the shared preset list. Selecting a preset only ever creates or selects an ordinary, already-governed, business-owned `catalog_categories` row through `create_catalog_category` (§21) — the preset list itself is never merchant-mutable data.

## 45.14 Audit-event model (SEC-13, audit trust basis corrected in Revision 4.0 per BA-5/`instruction1.75.md` §4.7)

Two audit surfaces, kept deliberately separate:

- **Per-product audit** — unchanged. Every product created via import produces exactly the same `catalog_audit_events` row (`change_type = 'product_created'`) that interactive creation already produces, because it is the same unmodified `create_catalog_product` call. No new audit table or event type is needed for successful product creation.
- **Per-batch audit** — the `catalog_import_batches`/`catalog_import_rows` records themselves (§45.5) already carry `initiated_by`, `created_at`, `committed_at`, and per-row `resolved_by`/`resolved_at`, which together answer every question §31 requires (who imported what batch, when, which rows created which products, which were rejected/skipped/matched) without a separate audit table. Neither table stores the full spreadsheet, raw rejected cell content beyond the allowlisted snapshot, or Reference Cost values outside the gated field (§45.7, §45.8).

**Trustworthiness basis, stated precisely (BA-5):** this evidence is credible for two independent, compounding reasons, not one. First, `authenticated` has no write grant on either table (§45.5.4), so no ordinary REST request can forge it. Second — new in Revision 4.0, because the write path itself uses `service_role` and therefore bypasses RLS — the database schema now also enforces, at the constraint level, that the evidence cannot become *internally* incoherent even under an application bug in the privileged bookkeeping code: the composite tenant-binding foreign keys (§45.5.2) make a row impossible to insert against the wrong business or the wrong batch; the status-coupled `CHECK` constraint (§45.5.2) makes a `CREATED` row without full resolution evidence, or a non-`CREATED` row carrying forged resolution evidence, unrepresentable; the `committed_at`/`status` coherence `CHECK` (§45.5.1) makes the same true at the batch level; and the `UNIQUE (batch_id, row_number)` / `UNIQUE (business_id, row_idempotency_key)` constraints (§45.5.2) make duplicate or ambiguous row identity unrepresentable. Server-only writes prevent external forgery; these constraints prevent internal incoherence even from a trusted-but-fallible writer. Both are required for the audit evidence to be treated as trustworthy — server-only access alone, Revision 3.0's original position, was necessary but not sufficient, exactly as `report1.81.md` §6 found.

## 45.15 Server-function test architecture (ENG-7)

See Part H §37 for the locked summary. In brief: pure parsing/validation/classification functions are unit-tested with plain `vitest`; the `createServerFn` wrapper is integration-tested by direct handler invocation against the dedicated test project, following the existing `tests/setup/test-clients.ts` genuine-Auth-user pattern; new tests live in `tests/catalog-import/`.

---

## 46. Explicit Confirmation: Exactly 19 Public Catalog Commands Remain

This revision introduces zero new `SECURITY DEFINER` Postgres functions and zero new entries in the public Catalog command surface. The two new tables in §45.5 remain business-isolated, RLS-protected application data — `authenticated` now holds `SELECT` only (§45.5.4, corrected in Revision 4.0 to use an executable predicate), with writes confined to the narrow server-only bookkeeping client (§45.1.1) — architecturally still outside, and never counted as part of, the 19-command surface, the same way `businesses`/`transactions` already are. Every actual Catalog Product Truth mutation performed by the import workflow is a normal call to one of the existing 19 commands (specifically `create_catalog_product`, and — for Reference Cost — `record_catalog_reference_cost_change`, both unmodified), issued exclusively through the caller-JWT client, never the bookkeeping client. This satisfies `instruction1.70.md` §3.1 and `instruction1.72.md` §3.1/§8 directly.

---

## 47. Engineering Review Questions — Now Answered

The fifteen questions in Revision 1.0's §44 are answered throughout Part K; the mapping is:

1–2 (server boundary, command-count safety): §45.1, §46.
3 (batch/quarantine tables + RLS): §45.5.
4 (file/row limits): §45.3.
5 (XLSX parser + bounding): §45.2.
6–7 (batch/row idempotency, partial-failure retry): §45.5.5, §45.5.6.
8 (D-058 Manager representation): §14, §45.7.
9 (Reference Cost gating): §45.7.
10 (Category preset duplicate avoidance): §21, §45.4 (categories), noting §45.4 itself covers product duplicate detection specifically.
11 (preset constant source files): §45.13.
12 (Inventory-create return navigation): Part D §24 — unchanged from Revision 1.0, still a Build Mode UI decision within the locked Inventory-authority boundary, not implementation-critical to this design lock.
13 (tax helper copy): Part E §27 — exact locked copy remains a Build Mode content decision within the locked meaning ("include tax" / "exclude tax, added separately"); not a security- or architecture-critical unknown.
14 (19-command test proof): §32 item 15, §46.
15 (test evidence required before production/Lovable sync): Part I §39–§41, §32A.

No item above is marked `BLOCKED`. Any genuinely unresolved item discovered during Build Mode itself must be reported to Mission Control rather than silently decided, exactly as every prior SB-P-1.11 mission in this chain has done.

---

## 48. Revision History

| Revision | Trigger | Verdict at handoff |
|---|---|---|
| 1.0 | Mission Control draft | Reviewed by Engineering (`report1.75.md`) and Security (`report1.76.md`) |
| 2.0 | Engineering + Security design-lock reconciliation (`instruction1.70.md`) | `report1.77.md`: `READY FOR SECURITY RE-REVIEW` |
| 3.0 | Focused Security re-review found RSB-1/RSB-2/RSB-3 (`report1.78.md`); this reconciliation (`instruction1.72.md`) | `report1.79.md`: `READY FOR NARROW SECURITY CONFIRMATION` |
| — | Narrow Security confirmation of Revision 3.0 (`instruction1.73.md`) | `report1.80.md`: `SECURITY READY FOR BUILD LOCK` |
| — | Supabase Backend Architecture review of Revision 3.0 (`instruction1.74.md`) | `report1.81.md`: `SUPABASE ARCHITECTURE CHANGES REQUIRED BEFORE BUILD LOCK`, identifying BA-1 through BA-7 |
| 4.0 | Supabase architecture correction reconciliation (`instruction1.75.md`) | `report1.82.md`: see that report's final verdict |

## Next Logical Step

Submit this Revision 4.0 to Supabase Backend Architecture for a re-confirmation limited to BA-1 through BA-7, using `communication/live/report1.82.md` as the finding-by-finding resolution map. Per `instruction1.75.md` §6, this revision does not itself claim `READY FOR BUILD LOCK` — only a subsequent, separate positive Supabase Backend Architecture re-confirmation of this correction, consistent with Security's already-standing `SECURITY READY FOR BUILD LOCK` verdict (`report1.80.md`, unregressed by this revision per §5 of this document's own regression check in `report1.82.md`), followed by a separate Mission Control Build Mode authorization, can advance SB-P-1.11-GC-1 toward implementation.
