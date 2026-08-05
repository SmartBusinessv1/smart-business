Document: Engineering Contract

Version: 1.1

Status: LOCKED — MISSION CONTROL ACCEPTED

Created By: Claude Code

Reviewed By: Mission Control

Approval Status: ACCEPTED

Lock Status: LOCKED

Approval Date: 2026-08-05

Mission: SB-P-1.11

# SB-P-1.11 — Product Catalog & Pricing — Engineering Contract

```text
STATUS: LOCKED — MISSION CONTROL ACCEPTED
APPROVAL: GRANTED
LOCK: ACTIVE
IMPLEMENTATION AUTHORITY: NONE
```

This contract is accepted and locked by Mission Control at Version 1.1. It carries no implementation authority. It authorizes no application code, SQL, migration, RLS policy, RPC implementation, Edge Function, scheduler worker, AI prompt, Lovable project change, test, infrastructure, deployment, or production activity.

## 1. Document Metadata

| Field | Value |
|---|---|
| Mission ID | SB-P-1.11 |
| Mission Name | Product Catalog & Pricing |
| Stage | 12A — Engineering Contract Preparation, Refinement, and Lock |
| Domain | Business Operations Domain |
| Product Blueprint | `docs/phase-1-mission-blueprint/active/SB-P-1.11.md` — Sections 1–21, LOCKED |
| Founder Product Decision Record | `docs/phase-1-mission-blueprint/active/SB-P-1.11-Founder-Product-Decision-Record.md` — D-001 through D-068 |
| Engineering Implementation Specification | `docs/phase-1-mission-blueprint/implementation/SB-P-1.11-EIS.md` — Version 2.2, LOCKED |
| Contract Owner | Claude Code, under Mission Control governance |
| Prior Reviews | Version 1.0 prepared under `communication/live/instruction1.18.md` (`report1.18.md`) → Mission Control review recorded findings MC-EC-001 through MC-EC-006 → Version 1.1 refinement authorized by `communication/live/instruction1.19.md` (`report1.19.md`), resolving MC-EC-001 through MC-EC-006 → Mission Control re-review recorded `ENGINEERING CONTRACT REVIEW: PASSED`, `ACCEPTED FOR LOCK` |
| This Revision | Lock-only status and metadata update authorized by `communication/live/instruction1.20.md`, accepting and locking Version 1.1; no substantive content changed |
| Authorizing Instruction | `communication/live/instruction1.20.md` |
| Package Position | First document of the Stage 12 Initial Implementation Package (`engineering-contract.md`, `lovable-build-prompt.md`, `verification-checklist.md`); this mission locks the Engineering Contract only |
| Upstream Mission Dependency | SB-P-1.10 — Inventory Foundation (accepted, LOCKED) |

### Reading This Contract

Every obligation below is tagged with the category instruction1.18.md §"Mandatory Contract Content" requires this contract to distinguish:

- **[MANDATORY]** — a binding implementation obligation, already fully specified by the locked Blueprint or locked EIS.
- **[ENVIRONMENT VERIFICATION]** — a fact about the deployed Supabase/PostgreSQL/Edge Function environment that must be confirmed during implementation rather than assumed; the locked EIS leaves it open on this basis and this contract does not resolve it.
- **[SHARED-SYSTEM DEPENDENCY]** — an obligation that depends on a cross-mission platform foundation (permission engine, conversational engine) not yet built for any mission in this repository.
- **[OUT OF SCOPE]** — explicitly not authorized under SB-P-1.11 Build Now, per the locked Blueprint.
- **[APPROVAL GATE]** — a later, separate Mission Control approval step that this contract does not itself grant.

## 2. Document Authority and Precedence

Execution of this mission, and of any later implementation performed against this contract, is governed in the following order of precedence:

1. Lighthouse Constitution.
2. Source 01 — Smart Business Master System Manifesto and Source 11 — Smart Business Product Truth Map (joint Phase 1 Constitution).
3. Source 18 — SB-P Mission Lifecycle and Delivery Framework.
4. SB-P-1.11 Product Blueprint, Sections 1–21, LOCKED (`docs/phase-1-mission-blueprint/active/SB-P-1.11.md`).
5. SB-P-1.11 Founder Decisions D-001 through D-068 (`docs/phase-1-mission-blueprint/active/SB-P-1.11-Founder-Product-Decision-Record.md`).
6. SB-P-1.11 Engineering Implementation Specification, Version 2.2, LOCKED (`docs/phase-1-mission-blueprint/implementation/SB-P-1.11-EIS.md`).
7. This Engineering Contract.

**[MANDATORY]** Neither the locked Product Blueprint nor the locked EIS may be modified, reinterpreted, weakened, expanded, or contradicted by this contract, by any later document in the Stage 12 package, or by implementation performed against them. No requirement in this contract may override, narrow, or expand either locked source. Where this contract and either locked source appear to diverge, the locked source governs and this contract is in error; implementation must pause and Mission Control clarification is required before proceeding.

The Product Blueprint remains authoritative for Product Truth, Founder Decisions D-001–D-068, merchant behaviour, scope, exclusions, and approved sequencing (Blueprint §17 "Product Philosophy Summary"; EIS §2). The locked EIS v2.2 remains authoritative for engineering architecture, technical contracts, data integrity, permissions, security, scheduler design, interfaces, testing obligations, and implementation constraints (EIS §2).

## 3. Mission Objective

This contract translates the two locked authorities into an implementation-ready agreement without introducing new Product Truth, new Founder decisions, new scope, or new engineering behaviour, so that later preparation of the Lovable Build Prompt and Verification Checklist can proceed against a single, precise, builder-facing document (instruction1.18.md §"Engineering Contract Purpose").

The underlying mission objective, unchanged from Blueprint §3, is to establish one trustworthy catalog per business that gives every product a clear human-readable identity, supports stock and non-stock selling without duplicating inventory truth, defines one understandable selling unit and price, preserves price/cost/tax/lifecycle/identity/relationship history, protects cost and other financial information through owner-controlled permissions, supports merchant-friendly dashboard/WhatsApp/voice/photo/text/CSV/Excel entry, remains usable by sale-authorized employees without disclosing restricted intelligence, and provides stable product references for future Sales, Purchase, POS, Reporting, Ask CFO, and Commerce missions.

**[MANDATORY]** This mission does not authorize implementation. Approval of this Engineering Contract, and later approval of the Lovable Build Prompt and Verification Checklist, are each separate governance steps; none of them, individually or together, constitutes implementation authorization (mirroring the governance discipline already established for SB-P-1.10). Implementation begins only under a separate, explicit Mission Control authorization — **[APPROVAL GATE]**.

## 4. Authorized Build Now Scope

**[MANDATORY]** Implementation subsequently authorized against this contract is limited to what the Product Blueprint (§7 "Core Deliverables", §8 "Detailed Functional Scope") and the EIS (§4–§23) already define:

- Business-owned catalog products with one required business-unique human-readable name; optional description, category, SKU, barcode, image, inventory link, selling price, and reference cost, subject to sale-readiness rules (Blueprint §8 "Catalog Product"; EIS §5.1–5.2).
- Stock-tracked and non-stock product status, derived only from the inventory link, never an independently editable field (Blueprint §8 "Stock-Tracked and Non-Stock Products"; D-050).
- The optional, business-scoped, one-to-one product–inventory link, lockable after sale or linked stock-event history under the D-047 tenure-bounded predicate (Blueprint §8 "Product–Inventory Link"; D-001–D-005, D-047; EIS §9).
- One selling unit per product — inherited from the linked inventory item's immutable base unit for stock-tracked products, independently settable before sales history for non-stock products (Blueprint §8 "Selling Unit"; D-005, D-051, D-052).
- Optional flat, business-owned, business-unique categories, with archival that never archives products (Blueprint §8 "Categories"; D-006–D-008, D-045, D-046).
- One current selling price and at most one pending scheduled selling price, with permanent change history (Blueprint §8 "Selling Price", "Selling-Price History", "Scheduled Selling Price"; D-009–D-013, D-039, D-042–D-044; EIS §5.3, §12).
- Optional, non-negative, protected reference cost with change history, never presented as margin or accounting truth (Blueprint §8 "Reference Cost Price"; D-014–D-016, D-040, D-062, D-063).
- Merchant-controlled tax treatment (inherit business default, product-specific rate, or explicit non-taxable) and one business-wide tax-inclusive/exclusive pricing mode (Blueprint §8 "Tax Treatment", "Tax-Inclusive or Tax-Exclusive Pricing", "Tax History"; D-017–D-019, D-036–D-038, D-059–D-061).
- Product identifiers: required unique name, optional unique SKU, optional unique barcode, optional image, all under the approved whitespace/Latin-case normalization rules and multilingual preservation (Blueprint §8 "Product Name and Description", "SKU", "Barcode", "Product Image"; D-020–D-028; Rule 8, Rule 9, Rule 27).
- Product lifecycle (Active/Archived), conditional permanent deletion, and sale readiness (Blueprint §8 "Product Lifecycle", "Conditional Permanent Deletion", "Sale Readiness"; D-029–D-032, D-065).
- Owner-controlled, action-specific permissions and sale-authorized-employee restricted access (Blueprint §8 "Permissions"; D-033–D-035, D-048, D-049).
- Complete audit history for every meaningful field change (Blueprint §8 "Audit History"; D-064).
- Multilingual (English/Malayalam/Manglish) search, filtering, and dashboard experience (Blueprint §8 "Search and Filtering", "Dashboard Experience"; §9 "Multilingual Catalog Experience").
- Dashboard-based guided creation and confirmed WhatsApp/text/voice/photo assistance for permitted catalog actions, subject to the shared conversational-engine dependency in Section 24 of this contract (Blueprint §8 "WhatsApp, Voice, Text, and Photo Assistance"; D-053, D-054).
- Safeguarded CSV/Excel bulk import with a correction queue (Blueprint §8 "CSV and Excel Bulk Import"; D-055–D-058).
- Business ownership and isolation across every catalog, category, event, identifier, image, import, and correction record (Blueprint §8 "Business Ownership and Isolation"; Rule 1, Rule 4).

## 5. Product-Scope Exclusions (Build Later, Add-on, Separate Product, Reject)

**[OUT OF SCOPE]** The following are excluded from SB-P-1.11 Build Now and must not be introduced by any implementation performed against this contract (Blueprint §11 "Out of Scope"):

- **Build Later:** alternate selling units, pack sizes, unit conversions and rounding; parent/variant hierarchy; multiple or alternate barcodes; barcode scanning, label generation, and scanner hardware; nested categories and universal taxonomy; price levels, wholesale tiers, customer-specific pricing, promotions, and discounts; scheduled tax and reference-cost changes; multi-currency and exchange rates; calculated margin/profit intelligence; richer bulk editing, export, and automated external-catalog synchronization; recipes, bills of materials, bundles, composite products, and shared-stock selling forms.
- **Add-on or Approved Extension Layer:** standard POS bridges and POS operational alerts; advanced commerce or channel-specific catalog publication; assisted large-scale catalog onboarding beyond the core self-service importer.
- **Separate Product or Governed Mission:** Purchase Workflow and supplier cost truth; Sales Workflow, discounts, returns, and sale-time price override rules; POS Integration Foundation; Financial Reports and accounting truth; Ask CFO and financial advisory intelligence; public storefront, marketplace, online ordering, and customer commerce; advanced conversation workspace and AI foundations beyond the guided flows this mission defines.
- **Reject (permanently prohibited, not merely deferred):** any second stock ledger, cached quantity presented as independent truth, or direct catalog write to current stock; automatic legal tax classification, filing, return preparation, or compliance guarantee; rewriting completed-sale price or tax evidence after catalog changes; negative selling price or negative reference cost; global cross-business product/name/SKU/barcode/category uniqueness; uncontrolled employee access to cost, margin, histories, or management actions; automatic archive propagation between product and inventory; automatic import overwrite or creation of invalid live products; custom POS modifications inside the Smart Business core platform; AI saving uncertain or consequential catalog changes without explicit human confirmation.

## 6. Implementation Principles

**[MANDATORY]** Every implementation performed against this contract shall obey the following principles, unchanged from EIS §3:

1. **Catalog truth is not inventory truth.** No catalog table, function, or code path may write to `inventory_items` or `inventory_movements`, or treat a catalog-stored value as stock quantity (Blueprint §1, §8 "Catalog Product"; D-001).
2. **No silent price reinterpretation.** No code path may allow a previously entered numeric price to acquire a different per-unit meaning without explicit merchant confirmation (D-068).
3. **Append-only value history is truly append-only.** A table declared immutable is never the target of an `UPDATE`; a transition is modelled as a new immutable event plus a change to a separately designated, explicitly mutable current-state table.
4. **Commands are the only write boundary.** No table carrying protected catalog, schedule, event, audit, import, or idempotency data grants direct `INSERT`/`UPDATE`/`DELETE` to any client-reachable role.
5. **Command authority is narrow and function-group-scoped, not monolithic.** Privilege is partitioned by command group so a defect or compromise in one function's authority cannot reach tables outside that function's legitimate purpose (EIS §7).
6. **Authentication and function ownership are distinct concerns.** A `NOLOGIN` role may own and execute `SECURITY DEFINER` functions but never itself authenticates a connection; an external runtime or scheduled process connects only through a separately defined, genuinely login-capable service identity holding `EXECUTE` only (EIS §7).
7. **Expected rejections are committed outcomes, not aborted transactions.** Validation/permission/stale-state/conflict rejections return as a structured result within a committing transaction; only genuinely unexpected errors trigger an exception-driven full rollback (EIS §10–11).
8. **Preview and commit are separate, bound operations.** Any operation requiring merchant confirmation of consequential state (D-068 above all) is preceded by a non-mutating, server-authoritative preview producing a single-use token binding the exact reviewed state; the commit recomputes and rejects on drift.
9. **Idempotency resolves before mutable-state evaluation.** Actor and business are resolved first; the idempotency key and payload fingerprint are checked before any precondition or stale-state evaluation runs.
10. **Unknown outcomes are never reported as "nothing changed."** Only ambiguity arising after a protected command was actually dispatched may become `UNKNOWN_OUTCOME`; earlier failures are `PRE_COMMAND_PROCESSING_FAILED` (EIS §15).
11. **Only the reviewing actor may confirm what they reviewed.** No delegated or alternate-confirmer path exists in this mission (EIS §15).
12. **Permission-first design, action-specific.** Every catalog action checks the single, independently governed permission flag Blueprint §8 "Permissions" assigns to it.
13. **Business isolation extends to references, not only rows, and scope is never caller-chosen.** Every read of business-scoped state, including idempotency-outcome lookups, derives scope server-side from verified identity (EIS §11).
14. **Default-deny on unprovable state.** Where a governed dependency check cannot be conclusively evaluated, the command denies the action.
15. **Auditability with standardized, complete provenance.** Every meaningful catalog change is traceable to a responsible actor, actor type, channel, request, authority basis, and outcome, using the same provenance shape across every dedicated event table (EIS §5.0).
16. **Mandatory scanning cannot be opted out of by purpose mislabeling.** Linking, parsing, previewing, or applying a file is permitted only when its safety scan result is affirmatively `clean` (EIS §14).

## 7. Architecture Obligations

**[MANDATORY]** Implementation shall follow the architecture and scope map defined in EIS §4:

- The three-layer command execution identity model (Layer 1 genuinely `LOGIN`-capable connection identities; Layer 2 `NOLOGIN` `SECURITY DEFINER` function-owner roles; Layer 3 the `GRANT EXECUTE` invocation boundary) — EIS §7.
- Eight command-group-scoped least-privilege owner roles (`catalog_identity_executor`, `catalog_lifecycle_executor`, `catalog_pricing_executor`, `catalog_tax_executor`, `catalog_cost_executor`, `catalog_link_executor`, `catalog_import_executor`, `catalog_read_executor`) plus `catalog_channel_executor` and `catalog_scheduler_executor` — EIS §7.
- Two genuinely `LOGIN`-capable service-account identities (`catalog_channel_service`, `catalog_scheduler_service`), each holding `EXECUTE` only, never table DML — EIS §7.
- The Pattern A external-worker scheduler architecture (`list_due_catalog_price_schedule_candidates` and `activate_catalog_price_schedule`, two ordinary `FUNCTION`s, no `PROCEDURE`, no in-database multi-commit transaction control) — EIS §12, Section 18 of this contract.
- No component may introduce an external system or architectural pattern other than the service identities, external worker boundary, and integration mechanisms explicitly authorized by the locked EIS — namely `catalog_channel_service`, `catalog_scheduler_service`, and the Pattern A external-worker scheduler boundary (EIS §7, §12). No component may introduce any other external system or deviation from the current Supabase-based stack (Blueprint §20 "Proposed Architecture and Bounded Components"; MC-EC-006).

## 8. Data-Model Obligations

**[MANDATORY]** Implementation shall implement the data dictionary defined in EIS §5 as a data model — no migration or SQL is authorized by this contract:

- The standardized event provenance shape (`authorized_by_user_id`, `executed_by_actor_type`, `system_run_id`, `channel`, `request_id`, `authority_basis`, `recorded_at`) applied identically across every dedicated event table (EIS §5.0).
- The `catalog_pending_price_schedules` / `catalog_price_schedule_events` / `catalog_selling_price_events` three-table scheduled-price model, with its stable `UNIQUE (product_id)` constraint and no durable scheduler-claim field (EIS §5.3).
- `catalog_write_idempotency_keys` with exactly two terminal status values, `completed` and `rejected` (EIS §5.8, §11).
- `catalog_channel_pending_actions` carrying `command_idempotency_key`, and the new `catalog_channel_confirmation_receipts` table deduplicating confirming messages (EIS §5.10).
- `catalog_file_references` with its closed purpose/status scanning matrix (EIS §5.11, §14).
- Every other Section 5 subsection unchanged from the locked EIS baseline.

## 9. Catalog and Inventory Separation

**[MANDATORY]** Implementation shall preserve catalog and inventory as separate records at every layer:

- A product and an inventory item are separate business records joined only by an explicit governed link (Blueprint §2 "Inventory Domain"; D-001).
- No catalog table, function, or code path writes to `inventory_items` or `inventory_movements`, or treats a catalog-stored value as stock quantity (EIS §3, Implementation Principle 1).
- Stock status (`Stock tracked` / `Non-stock`) is derived only from the presence of the inventory link; no separate editable type field may contradict it (Blueprint §8 "Stock-Tracked and Non-Stock Products"; D-050).
- A non-stock product never originates a stock movement; a stock-tracked product never itself alters quantity — only the accepted SB-P-1.10 inventory movement path may do so (Blueprint §8 "Stock-Tracked and Non-Stock Products").
- Ledger-derived current stock is displayed only to a user holding inventory-view permission and is read through a permission-aware read path, never a raw table `SELECT` (Blueprint §8 "Permissions"; Blueprint §20 "Privacy").
- Archiving either record never silently archives the other; an active product linked to archived inventory cannot enter a new sale and must present a resolution warning (Blueprint §8 "Product–Inventory Link"; D-030).

## 10. Price, Tax, and Cost Integrity Obligations

**[MANDATORY]** Implementation shall enforce the write-integrity model defined in EIS §11 for every price, tax, and cost change:

- Single write path per value type; database-level immutability of posted history rows; idempotency-key protection reusing the `inventory_movements`-precedent pattern (Blueprint §20 "Write-Path, Concurrency, Idempotency, and Atomicity").
- Selling price optional during setup but required (greater than zero) for sale eligibility; two-decimal precision without hidden rounding (Blueprint §8 "Selling Price"; D-009, D-039, D-042).
- At most one current and one pending scheduled selling price per product, with full change history (Blueprint §8 "Selling-Price History", "Scheduled Selling Price"; D-011–D-013).
- Reference cost optional, non-negative, protected, never representing purchase, valuation, COGS, margin, or accounting truth (Blueprint §8 "Reference Cost Price"; D-014, D-040, D-062, D-063).
- Tax treatment merchant-controlled (inherit/override/non-taxable), with incomplete inheritance blocking sale readiness; business-wide tax-inclusive/exclusive mode locked after the first completed sale (Blueprint §8 "Tax Treatment", "Tax-Inclusive or Tax-Exclusive Pricing"; D-017–D-019, D-036, D-059–D-061).
- Completed sales retain transaction-time price and tax evidence, never recalculated from a later catalog state (Blueprint §8 "Selling-Price History", "Tax History"; Rule 18).
- Corrected command sequencing: resolve actor/business → permission check → idempotency resolution before mutable-state checks → precondition checks → writes → finalize idempotency row and commit (EIS §11).

## 11. D-047 Tenure-Bounded Inventory-History Enforcement

**[MANDATORY]** Implementation shall enforce the D-047 tenure-bounded predicate exactly as locked, without reinterpretation or escalation (EIS §9; `report1.12.md` §5; four independent specialist verification reports):

```text
Any authoritative inventory movement recorded during the current
product–inventory link tenure counts as linked stock-event history.

Inventory movements recorded before the current link tenure do not count.
```

- Link, unlink, or replacement is permitted only before the product has sales or linked stock-event history under this tenure-bounded reading (Blueprint §8 "Product–Inventory Link"; D-047).
- After such history exists, the relationship is locked and a new product is required for a different inventory identity (Blueprint §8 "Product–Inventory Link"; D-047).
- This interpretation is preserved verbatim; it is not reopened, escalated, or made stricter or looser than the quoted text (EIS §9).

## 12. D-068 Preview, Confirmation, and Atomic Commit Safeguard

**[MANDATORY]** Implementation shall implement the D-068 safeguard as a single atomic, transactional operation — never a client-orchestrated multi-step sequence (Blueprint §20 "Write-Path, Concurrency, Idempotency, and Atomicity"; Engineering Risk "D-068 atomicity implemented as multi-step client flow"):

- When first-time inventory-link assignment or permitted replacement would change the product's selling unit, the existing numeric selling price must not be silently reinterpreted under the new unit (Blueprint §8 "Product–Inventory Link", "Selling Unit"; D-068).
- The merchant must explicitly confirm the selling price for the new unit or enter a replacement price before the assignment or replacement is saved (Blueprint §8; Rule 28; D-068).
- The preview must show, for first-time assignment: current unit and price, proposed inventory link and new unit, and the price requiring confirmation. For replacement: current inventory link, current unit and price, proposed replacement inventory link and new unit, and the price requiring confirmation (Blueprint §9 "Inventory-Link Experience"; D-068).
- Cancellation, incomplete confirmation, validation failure, or save failure must each leave the existing product record, current inventory link state, selling unit, and selling price completely unchanged (Blueprint §8; Rule 28; D-068).
- The confirmed price and completed assignment or replacement enter the appropriate audit history (Blueprint §8; D-068).
- Implementation shall follow the EIS §10 corrected, non-exception commit model exactly:
  1. Auth and permission check — a permission failure is itself a committed `rejected` result, category `PERMISSION_DENIED`.
  2. Idempotency-first resolution (EIS §11).
  3. Token resolution — missing/expired/consumed/mismatched-owner token → `rejected`/`STALE_STATE`.
  4. Row locks in deterministic order (EIS §9).
  5. Recompute-and-compare — any fingerprint mismatch → `rejected`/`STALE_STATE`.
  6. Confirmation completeness — missing required confirmed price → `rejected`/`PRICE_CONFIRMATION_REQUIRED`.
  7. If every check passes: perform the atomic business writes — the only branch that writes to protected catalog tables.
  8. Finalize bookkeeping and `RETURN` on every branch — the transaction then commits normally.
  9. Only a genuinely unexpected error raises an exception and rolls back the entire attempt, becoming client-visible `UNKNOWN_OUTCOME`.
- All four no-change failure modes (cancellation, incomplete confirmation, validation failure, save failure) must map to the mechanism EIS §10's table defines, with no exception.

## 13. Command-Only Write Boundaries

**[MANDATORY]** Implementation shall ensure no protected catalog table grants direct `INSERT`/`UPDATE`/`DELETE` to any client-reachable role (EIS §3, §6):

- The RLS Policy Intent for every catalog, category, event, schedule, audit, import, correction, and idempotency table grants **None** for INSERT/UPDATE/DELETE to `authenticated`, including `catalog_channel_confirmation_receipts` (EIS §6).
- Every write occurs exclusively through a `SECURITY DEFINER` command function owned by one of the ten Layer 2 executor roles (EIS §7).
- No feature, table, or code path outside the authorized command functions writes to a protected catalog table (EIS §3, §16).
- `REVOKE EXECUTE ... FROM PUBLIC` on every function; explicit minimal `GRANT EXECUTE` only to the specific Layer 1 identity that legitimately calls it; fixed `SET search_path = public`; fully schema-qualified object references (EIS §7 "Function-Level Requirements").

## 14. Business Isolation and Server-Derived Scope

**[MANDATORY]** Implementation shall ensure every catalog record and every read of business-scoped state is isolated per business and never caller-chosen (Blueprint §8 "Business Ownership and Isolation"; Rule 1, Rule 4; EIS §3, §11):

- Every product, category, price/tax/cost event, identifier, image reference, import record, correction item, inventory link, and audit event belongs to exactly one business.
- Users must not discover or access another business's records through search, validation, duplicate checks, imports, or error messages.
- `get_catalog_command_outcome` derives `business_id` server-side from verified identity — never from a caller-supplied parameter; cross-business guessing returns the same result as a genuinely nonexistent key (EIS §11, MC-VRF-009).
- Existing `business_id`-plus-`owner_id`-subquery RLS pattern, and composite `UNIQUE (id, business_id)` FK-integrity pattern, apply to every new catalog, category, and history table (Blueprint §20 "Row-Level Security and Business Isolation").

## 15. Authentication, Execution Identities, and Least Privilege

**[MANDATORY]** Implementation shall implement the full three-layer identity model of EIS §7:

- **Layer 1 (genuinely `LOGIN`-capable):** `authenticated` (existing Supabase role, dashboard/import sessions); `catalog_channel_service` (trusted backend conversational-engine service, `EXECUTE` only on channel commands); `catalog_scheduler_service` (external scheduled worker — Supabase Scheduled Edge Function, or `pg_cron` + `pg_net` triggering one — `EXECUTE` only on the two scheduler functions).
- **Layer 2 (`NOLOGIN` function owners, never authenticate):** the eight command-group owner roles plus `catalog_channel_executor` and `catalog_scheduler_executor`, each holding only the table privileges its own command group requires, per the exact privilege table in EIS §7 "Least-Privilege Command Authority".
- **Layer 3 (invocation boundary):** `GRANT EXECUTE` from a Layer 2 owner's function to the specific Layer 1 identity allowed to call it — the entire controlled-invocation mechanism, requiring no `SET ROLE` step because ordinary `SECURITY DEFINER` semantics already provide it.
- No single role holds unrestricted DML across the Section 5 data model; the broadest role (`catalog_lifecycle_executor`) holds write access only to its own three tables.
- Every function independently re-derives caller identity and re-checks current permission — never a cached or caller-supplied claim (EIS §7).

## 16. Permission-Engine Obligations and Temporary Sequencing

**[SHARED-SYSTEM DEPENDENCY]** Full enforcement of Blueprint §8 "Permissions" (Manager and sale-authorized-Employee catalog access) requires a shared permission-engine foundation that does not yet exist for any mission in this repository (Blueprint §20 "Permission-Engine Dependency"; §21 "Dependencies Requiring Prior or Parallel Missions"). This is a build-sequencing fact, not a defect, and does not weaken D-014/D-016/D-035's rule that employees cannot see owner financial intelligence by default. The sequencing below is explicit and non-contradictory (MC-EC-002).

### Phase 1 — [MANDATORY]

- Runtime access remains Owner-only, using the existing Owner-only pattern already established by SB-P-1.10 (Blueprint §20 "Engineering conclusion").
- Command signatures, authorization boundaries, data structures, and UI gating shall be designed to remain compatible with the future shared permission engine: every command function shall independently re-check the exact permission flag EIS §8 assigns it — `catalog_view`, `catalog_product_manage`, `catalog_lifecycle_manage`, `catalog_price_manage`, `catalog_tax_manage`, `catalog_cost_manage`, `catalog_inventory_link_manage`, `sale_use`, with inventory linking additionally requiring `inventory_view` — even while only the Owner can currently satisfy that check, so no later signature change is required when the shared engine arrives (Blueprint §8 "Permissions"; D-016, D-033–D-035, D-048).
- No temporary, local, duplicated, or mission-specific substitute permission engine may be invented for SB-P-1.11. Where Manager or Employee enforcement cannot yet be activated, the correct Phase 1 behaviour is Owner-only access, not a bespoke stand-in authorization mechanism.
- Manager and Employee runtime enforcement must not be activated before the shared permission engine is separately authorized, implemented, verified, and available — **[APPROVAL GATE]** / **[SHARED-SYSTEM DEPENDENCY]**.

### Phase 2a — [SHARED-SYSTEM DEPENDENCY]

- Action-specific Manager and Employee enforcement may be activated only through the approved shared permission engine, once that engine is separately authorized, implemented, verified, and available (Blueprint §20 "Build Sequencing"; Section 24 of this contract).
- At that point, all eight EIS-defined permission flags and the additional `inventory_view` dependency for inventory linking shall be enforced exactly as locked (Blueprint §8 "Permissions"; D-016, D-033–D-035, D-048; EIS §8).

Neither phase weakens employee default denial of owner financial intelligence (D-014, D-016, D-035); Phase 1's Owner-only runtime access is a stricter, not looser, interim posture than the eventual Manager/Employee model.

## 17. Audit, Provenance, Idempotency, and Outcome-Reconciliation Obligations

**[MANDATORY]** Implementation shall implement the audit and idempotency model of EIS §5.0, §11, and §18:

- Every meaningful change to name, description, image, category, SKU, barcode, unit, inventory link, status, price, cost, and tax preserves old/new meaning, time, and responsible user (Blueprint §8 "Audit History"; D-064).
- Every dedicated event table and `catalog_audit_events` carry the full Section 5.0 provenance shape, including the `authority_basis` field.
- The authoritative per-attempt outcome record, including rejected attempts, is `catalog_write_idempotency_keys.status` — not a field on the dedicated event tables, which exist only when a change actually took effect (EIS §5.0, §18).
- `catalog_write_idempotency_keys.status` has exactly two terminal values, `completed` and `rejected`; there is no durable `in_progress`/`pending` status (EIS §11).
- `UNKNOWN_OUTCOME` reconciliation via same-key retry or `get_catalog_command_outcome` returns exactly one of `not_found`, `rejected` (with category), or `completed` (with `result_ref`) (EIS §11).
- Operational metrics track `IDEMPOTENCY_CONFLICT`/`STALE_STATE` rates, scheduler per-run processed/failed counts and lag correlated by `system_run_id`, import structural-rejection counts, and channel pending-action/duplicate-confirmation-receipt counts (EIS §18).
- Cost values never appear in any provenance field, log, or error/metric derived from them (EIS §5.0).

## 18. Scheduled-Price Worker and Transaction Obligations

**[MANDATORY]** Implementation shall implement the Pattern A external-worker scheduler exactly as defined in EIS §12 (MC-VRF-003):

- The scheduler runtime is `catalog_scheduler_service` (EIS §7, Layer 1) — a genuinely `LOGIN`-capable external worker, never an in-database job role.
- Two ordinary `FUNCTION`s, neither containing internal transaction control: `list_due_catalog_price_schedule_candidates(p_limit int) RETURNS SETOF uuid`, and `activate_catalog_price_schedule(p_schedule_id uuid) RETURNS catalog_scheduler_command_result`.
- **Run sequence:** the worker starts a run and generates one `system_run_id`; calls the candidate-list function exactly once per run, receiving a bounded, `effective_at ASC`-ordered, run-scoped list, never re-queried mid-run; calls the activation function exactly once per candidate in order, regardless of any earlier candidate's outcome; records every result; ends the run when the fixed list is exhausted.
- **Atomic activation contract**, one transaction per call: derive scheduler authority server-side; lock the candidate row with `FOR UPDATE SKIP LOCKED`, returning `already_processed` on zero rows; verify still-due, returning `not_due` otherwise; lock the product row in deterministic order (EIS §9); write the immutable schedule and selling-price events and delete the superseded pending row; attach `system_run_id` and standard provenance; return a stable outcome distinguishing at minimum `activated`, `already_processed`, `not_due`, `rejected` (with category).
- No durable scheduler-claim field exists; claiming is transaction-scoped only via the row lock, resolving the removed `claimed_at` field's contradictory durability (EIS §5.3).
- A repeatedly failing earliest-due schedule cannot starve later-due schedules in the same run, because the candidate list is fixed and fetched once (EIS §12).
- **[ENVIRONMENT VERIFICATION]** Confirm Supabase Scheduled Edge Function (or `pg_cron` + `pg_net`) availability in the deployed environment, and provision `catalog_scheduler_service` with a real, rotated connection credential, before relying on Pattern A (EIS §20 step 12; §24 Engineering Question 7).
- Unchanged from Version 2.0/2.1 and not reopened: storage timezone, business timezone, activation interpretation, DST safety, missed-run recovery, bounded lag (1-minute run interval / 5-minute budget), and provenance (EIS §12).

## 19. File Upload, Scanning, Import, and Storage Obligations

**[MANDATORY]** Implementation shall implement the closed file-scanning matrix and import architecture of EIS §14:

- `product_image` and `import_source` each require `safety_scan_status = 'clean'` — `not_required` is not a valid linking/parsing/previewing/applying state for either purpose, enforced server-side at every point of use, not only at upload.
- Server-side re-check points: `create_catalog_product`/`update_catalog_product_identity` at `image_ref` acceptance; `create_catalog_import_job` at `file_ref` acceptance; `stage_catalog_import_rows` immediately before parsing.
- Client-supplied purpose or scan status is never authoritative; every check reads `catalog_file_references`'s own server-recorded columns.
- File binding, structural/resource limits, formula-injection neutralization, quarantine/retention, job-level confirmation, apply-time revalidation, and resumability are unchanged from Version 2.0 (EIS §14).
- An owner or a manager with product-creation permission may import; employees may not (Blueprint §8 "CSV and Excel Bulk Import"; D-058 — itself dependent on the permission engine, Section 16 of this contract).
- Valid rows are saved; invalid rows are quarantined without creating live products; rows matching an existing business-unique name/SKU/barcode are never auto-overwritten and enter a correction queue (Blueprint §8 "CSV and Excel Bulk Import"; D-055–D-057).
- One optional product image supports visual recognition; a missing image never blocks creation or sale readiness (Blueprint §8 "Product Image"; D-028).

## 20. WhatsApp, Text, Voice, and Photo Channel Boundaries

**[MANDATORY]** Implementation shall implement the channel-authority contract of EIS §15 for every catalog action reachable through a conversational channel:

- Verify inbound event and sender; resolve canonical identity/business membership server-side; call `create_catalog_pending_action` (generating `command_idempotency_key`); present a durable text preview (EIS §15, steps 1–4).
- **Deduplication:** `confirm_catalog_pending_action` first inserts into `catalog_channel_confirmation_receipts`; a unique-constraint conflict returns the prior outcome without invoking the underlying protected command again.
- **Same-actor enforcement:** `confirm_catalog_pending_action` requires `p_confirming_actor_user_id = catalog_channel_pending_actions.actor_user_id` exactly; any mismatch is an unconditional `rejected`/`ACTOR_MISMATCH` result. There is no delegated or alternate-confirmer path in this mission.
- Permission checks apply to the underlying action regardless of channel (Blueprint §8 "WhatsApp, Voice, Text, and Photo Assistance").
- **[SHARED-SYSTEM DEPENDENCY]** The full guided WhatsApp/voice/photo intent pipeline depends on the shared conversational engine (webhook → identity router → multi-modal processing → intent classification → action execution → role-based response, Source 04/05) which does not yet exist for any mission in this repository (Blueprint §20 "WhatsApp, Voice, Text, and Photo Integration Dependencies"; §21). This is Phase 3, sequenced behind the shared engine (Section 24 of this contract).
- **[MANDATORY, not dependency-blocked]** The dashboard-based guided experience — structured preview, explicit confirmation before saving — does not depend on the conversational-engine gap and is buildable in Phase 1 (Blueprint §20).

## 21. AI Assistant, Not AI Judge Boundaries

**[MANDATORY]** Implementation shall enforce Blueprint §5 "AI Assistant, Not AI Judge" without exception:

- AI may extract candidate fields from voice, text, photos, or import files, identify ambiguity, and prepare a preview. It must not invent missing prices, decide legal tax treatment, infer sensitive permissions, or save uncertain consequential changes without confirmation.
- For multilingual catalog use, AI may suggest interpreted search matches across English, Malayalam, and Manglish where reliable, but must clarify uncertainty and must never silently rename, translate, merge, or overwrite merchant catalog wording (Blueprint §5; §8 "Search and Filtering").
- Exact normalization (leading/trailing whitespace, repeated internal whitespace, Latin-letter case) is enforced as a database-level constraint; uncertain-match suggestion (different spellings, transliterations, translations) is a bounded, best-effort heuristic, never a claim of true cross-script semantic equivalence, and never auto-applied (Blueprint §20 "Multilingual Search and Normalization Feasibility"; EIS §13).
- A pending action created for one verified actor may be confirmed only by that same actor; no delegated or alternate-confirmer path exists (EIS §3, §15).
- Any operation requiring merchant confirmation of consequential state is preceded by a non-mutating, server-authoritative preview producing a single-use token (EIS §3, §10).

## 22. Frontend and Lovable Responsibilities

**[MANDATORY]** Implementation shall satisfy EIS §17 and Blueprint §9 "UI / UX Expectations":

- Permission-aware rendering of available actions, so no action the requesting user cannot execute is presented as available (Blueprint §9 "Permission Behaviour").
- Result categories consumed by the frontend match EIS §10's `completed`/`rejected` model and EIS §15's four-category failure classification (`PRE_COMMAND_PROCESSING_FAILED`, `COMMAND_REJECTED`, `UNKNOWN_OUTCOME`, `CONFIRMED_SUCCESS`); every rejection category is a distinct, stable, merchant-understandable state, never a generic error.
- Current and pending price visually distinct; scheduled activation shown in the business timezone; two-decimal price precision; clear tax-inclusive/exclusive communication (Blueprint §9 "Price Experience").
- Inventory-link experience shows the D-068 preview content exactly as Section 12 of this contract specifies, with explicit confirmation required before saving (Blueprint §9 "Inventory-Link Experience").
- Import and correction-queue UI distinguishes valid, quarantined, and conflicting rows and reports errors understandably through both dashboard and conversational channels (Blueprint §9 "Import and Correction Queue").
- Mobile, conversational, desktop, and accessibility expectations follow Blueprint §9 in full; sensitive values never leak through list totals, search results, import errors, messages, or audit views (Blueprint §9 "Permission Behaviour").

## 23. Backend, Supabase, and Service Responsibilities

**[MANDATORY]** Implementation shall satisfy EIS §19 "Security and Privacy" and EIS §20 "Migration and Rollout Strategy":

- Least privilege per Section 15 of this contract; no cross-group DML; the two service accounts hold `EXECUTE`-only privilege.
- Command-only writes; cross-business scope never caller-chosen (Sections 13–14 of this contract).
- `catalog_cost_executor` remains the narrowest role in the system by construction, not only by response-shape omission.
- Mandatory scanning per Section 19 of this contract — no purpose this EIS defines may use `not_required`.
- RLS enabled at table creation, with no `INSERT`/`UPDATE`/`DELETE` grant to `authenticated`, before any application code path is granted access.
- Ten execution identities created and privilege-scoped, plus the two genuinely `LOGIN`-capable service accounts, provisioned with real, rotated credentials held only by their respective trusted external services, before any command referencing them is deployed.
- **[ENVIRONMENT VERIFICATION]** Scheduler deployment confirms Supabase Scheduled Edge Function (or `pg_cron` + `pg_net`) availability and `catalog_scheduler_service` credentialing before relying on Pattern A (EIS §20 step 12).
- Production verification gates follow Section 26 of this contract's testing and verification matrix (EIS §20 step 13, §21).

## 24. Dependency and Implementation Sequencing

**[MANDATORY]** Implementation shall follow the phased sequencing Blueprint §20 "Build Sequencing" recommends, without changing Product Truth:

- **Phase 1 — no cross-mission dependency:** core catalog and category data model, Owner-scoped dashboard CRUD and RLS, selling-unit inheritance and the D-068 single-RPC atomic safeguard, price/tax/cost value-history tables, multilingual exact-match normalization, and scheduled-price activation via Pattern A.
- **Phase 2a — [SHARED-SYSTEM DEPENDENCY]:** Manager and sale-authorized-Employee catalog permission enforcement (Blueprint §8 "Permissions"; D-016, D-033–D-035, D-048), depending on a shared permission-engine foundation not yet built for any mission.
- **Phase 2b — sizeable but not cross-mission-blocked:** CSV/Excel bulk import and correction queue, extending the `file_import_jobs` conceptual pattern; may proceed in parallel with Phase 1 if resourced separately.
- **Phase 3 — [SHARED-SYSTEM DEPENDENCY]:** guided WhatsApp/voice/photo catalog intent handling (Blueprint §8; D-053, D-054), depending on the shared conversational-engine foundation not yet built for any mission.

**[APPROVAL GATE]** Mission Control decides whether either dependency (permission engine, conversational engine) is sequenced as a separate governed mission, a parallel workstream, or a later phase within SB-P-1.11's own implementation lifecycle (Blueprint §21 "Dependencies Requiring Prior or Parallel Missions"). Neither dependency is specific to SB-P-1.11.

Upstream mission dependency: SB-P-1.10 — Inventory Foundation (accepted). Downstream mission dependencies that must reference this catalog without rewriting its historical meaning: SB-P-1.13 (Purchase Workflow), SB-P-1.14 (Sales Workflow Enhancement), SB-P-1.16 (POS Integration Foundation), SB-P-1.17 (Financial Reports Foundation), SB-P-1.18 (Ask CFO Foundation), SB-P-1.21 (Conversation Workspace), SB-P-1.22 (AI Conversation Foundation) (Blueprint §12).

## 25. Failure Handling and Merchant-Safe Outcomes

**[MANDATORY]** Implementation shall classify every failure using the models defined in EIS §10, §11, and §15:

- Expected rejections (validation, permission, stale state, conflict) commit a structured `rejected` result with a stable category; they are never implemented as an exception (EIS §10).
- Only genuinely unexpected errors (constraint violation, deadlock victim, connection failure) raise an exception, roll back the entire attempt, and become client-visible `UNKNOWN_OUTCOME` (EIS §10, §11).
- Four stable channel-failure categories: `PRE_COMMAND_PROCESSING_FAILED` (no protected command invoked yet — merchant-safe meaning: "No catalog change was submitted"), `COMMAND_REJECTED` (a definitive terminal rejection), `UNKNOWN_OUTCOME` (post-dispatch transport ambiguity, reconciled via same-key retry or `get_catalog_command_outcome`), `CONFIRMED_SUCCESS` (EIS §15).
- `UNKNOWN_OUTCOME` is never reported as "nothing changed"; reconciliation is required before a definitive non-commit result is established (EIS §3, Implementation Principle 10).
- A rejected D-068 token can never be reused; a merchant must obtain a fresh preview after any rejection category other than a system-level `UNKNOWN_OUTCOME` (EIS §10).
- Reply-delivery failure after a terminal result is purely a notification-layer retry; it never re-executes any command (EIS §15).

## 26. Testing and Verification Obligations

**[MANDATORY]** Implementation must produce test coverage for every item in EIS §21 "Testing and Verification Matrix", including the v2.1/v2.2 additions:

- Execution-identity scoping (MC-EC-004 — complete privilege verification scope): exact privilege inspection, not merely role existence, for all eight command-group-scoped Layer 2 `NOLOGIN` function-owner roles, `catalog_channel_executor`, and `catalog_scheduler_executor` — each confirmed to write only its own assigned tables; for `catalog_channel_service` and `catalog_scheduler_service` — each confirmed to hold zero direct protected-table DML privilege of any kind; every explicit `EXECUTE` grant confirmed against the specific Layer 1 identity authorized to hold it; every table-level privilege confirmed against the exact grant table in EIS §7 "Least-Privilege Command Authority"; `REVOKE EXECUTE ... FROM PUBLIC` confirmed applied to every command function.
- Scheduler run semantics: a fault on one candidate does not prevent a later candidate in the same fixed run list from being attempted and committing independently; a crash mid-run leaves already-`activated` candidates durably committed; a candidate that fails once is not reselected within the same run.
- Rejection-commit coherence: every named rejection category durably persists its idempotency-key row and (for D-068) its token consumption, verified by querying the database directly after a rejected call.
- Channel dedup layering: a redelivered initiating webhook returns the existing pending action without creating a second one; a redelivered confirming webhook returns the prior outcome without invoking the underlying command a second time.
- Same-actor enforcement: a confirmation attempt from any actor other than the pending action's original `actor_user_id` is rejected unconditionally.
- Failure-category correctness: a simulated pre-dispatch failure never produces a server-recorded idempotency-key row and is reported as `PRE_COMMAND_PROCESSING_FAILED`, distinctly from a simulated post-dispatch timeout (`UNKNOWN_OUTCOME`).
- Outcome-lookup scope: `get_catalog_command_outcome` called with another business's valid idempotency key returns the same result as a nonexistent key.
- Scan-status enforcement: a file with `safety_scan_status = 'not_required'` cannot be linked as `product_image` or `import_source` under any code path.
- RLS isolation for every new catalog, category, and history table; permission-flag enforcement per action once the permission engine exists; immutability of posted price/tax/cost history rows; database-level enforcement of normalized name/SKU/barcode uniqueness; import quarantine and correction-queue behaviour under invalid and conflicting rows; scheduled-price activation timing accuracy; multilingual "possible match" suggestions never silently rename, merge, translate, or overwrite a catalog record (Blueprint §20 "Verification Expectations for EIS and Implementation").

## 27. Acceptance Conditions

This Engineering Contract is acceptable when:

- Every obligation in Sections 4–26 is traceable to a specific, cited Product Blueprint section, Founder Decision, or EIS section.
- No requirement in this contract contradicts, narrows, or expands the locked Product Blueprint or the locked EIS.
- No implementation code, SQL, migration, API, RLS policy, RPC implementation, Edge Function, scheduler worker, AI prompt, or frontend artifact is present in this contract or elsewhere in this mission's output.
- The contract is precise enough that a builder can execute each separately authorized phase (Section 24) without reopening Product Truth or engineering design — this does **not** mean every obligation in Sections 4–26 is immediately executable as one undifferentiated batch (MC-EC-003).
- All prohibited work in Section 30 is explicitly excluded from authorized scope.

**Conditional-obligation discipline (MC-EC-003):** any obligation tagged **[ENVIRONMENT VERIFICATION]**, **[SHARED-SYSTEM DEPENDENCY]**, or **[APPROVAL GATE]** anywhere in Sections 4–29 must not be implemented until its stated condition has been resolved, verified where required, and separately authorized. Acceptance of this contract records that such a condition is correctly identified and gated; it does not itself resolve, verify, or authorize the condition.

A subsequent implementation mission executing against this contract is separately acceptable only when it satisfies, at minimum, the Blueprint §15 "Acceptance Criteria" checklist and the EIS §26 "Definition of Done" release gates in full, including:

- **Complete execution-identity privilege verification (MC-EC-004):** exact privilege inspection — not merely role existence — for all eight command-group-scoped Layer 2 `NOLOGIN` function-owner roles, `catalog_channel_executor`, and `catalog_scheduler_executor`, confirming each holds exactly its specified table privileges and no others; for `catalog_channel_service` and `catalog_scheduler_service`, confirming each holds only its specified `EXECUTE` grants and zero direct protected-table DML of any kind; confirmation of every explicit `EXECUTE` grant on every command function against the specific Layer 1 identity authorized to hold it (EIS §7); confirmation of every table-level privilege against the exact grant table in EIS §7 "Least-Privilege Command Authority"; and confirmation that `REVOKE EXECUTE ... FROM PUBLIC` has been applied to every command function.
- The Pattern A scheduler worker confirmed available and correctly credentialed, and `activate_catalog_price_schedule` confirmed to require no internal transaction-control statement, before reliance.
- Every rejection category confirmed to durably persist its idempotency-key and token-consumption bookkeeping under injected-fault testing.
- `get_catalog_command_outcome` confirmed to accept no caller-supplied business parameter in its deployed signature.

## 28. Traceability to Blueprint Sections, Founder Decisions, and EIS Sections

| Contract Section | Blueprint Reference | Founder Decisions | EIS Reference |
|---|---|---|---|
| 4. Authorized Build Now Scope | §7, §8 | D-001–D-065 | §4–§23 |
| 5. Product-Scope Exclusions | §11 | — | — |
| 6. Implementation Principles | §1, §5 | D-001, D-047, D-068 | §3 |
| 7. Architecture Obligations | §20 | — | §4, §7, §12 |
| 8. Data-Model Obligations | §8 | D-009–D-013, D-064 | §5 |
| 9. Catalog and Inventory Separation | §2, §8 | D-001–D-005, D-050 | §3, §9 |
| 10. Price, Tax, and Cost Integrity | §8 | D-009–D-019, D-036–D-043, D-059–D-063, D-066 | §11 |
| 11. D-047 Enforcement | §8 | D-047 | §9 |
| 12. D-068 Safeguard | §8, §9 | D-068, Rule 28 | §10 |
| 13. Command-Only Write Boundaries | §8 (Business Rules) | Rule 4, Rule 24 | §3, §6, §7 |
| 14. Business Isolation and Server-Derived Scope | §8 "Business Ownership and Isolation" | Rule 1, Rule 4 | §6, §11 |
| 15. Authentication, Execution Identities | §20 | — | §7 |
| 16. Permission-Engine Obligations | §8 "Permissions", §20, §21 | D-016, D-033–D-035, D-048 | §8 |
| 17. Audit, Provenance, Idempotency | §8 "Audit History" | D-064 | §5.0, §11, §18 |
| 18. Scheduled-Price Worker | §8 "Scheduled Selling Price" | D-012, D-013, D-043, D-044 | §12 |
| 19. File Upload, Scanning, Import | §8 "Product Image", "CSV and Excel Bulk Import" | D-028, D-055–D-058 | §14 |
| 20. WhatsApp/Text/Voice/Photo Channel Boundaries | §8 "WhatsApp, Voice, Text, and Photo Assistance", §20, §21 | D-053, D-054 | §15 |
| 21. AI Assistant, Not AI Judge | §5 | — | §3, §13 |
| 22. Frontend and Lovable | §9 | — | §17 |
| 23. Backend, Supabase, and Service | §20 | — | §19, §20 |
| 24. Dependency and Sequencing | §12, §20, §21 | — | — |
| 25. Failure Handling | §5 | — | §10, §11, §15 |
| 26. Testing and Verification | §20 "Verification Expectations" | — | §21 |
| 29. Preserved EIS Parameter Dispositions | §20, §21 | — | §24, §25 |

## 29. Preserved EIS Parameter Dispositions

This section separates genuinely open items from already-resolved items the locked EIS preserves, correcting Version 1.0's internal inconsistency of presenting both in a single undifferentiated "open" list (MC-EC-005).

### 29.1 Open — Requiring Specialist Review, Environment Verification, or Mission Control Sequencing

**[ENVIRONMENT VERIFICATION] / [SHARED-SYSTEM DEPENDENCY]** This contract does not resolve the following items; they remain open exactly as the locked EIS §24 leaves them, to be closed during implementation or by separate specialist/Mission Control review:

| # | Question | Disposition |
|---|---|---|
| 1 | Exact `pg_trgm` similarity threshold and algorithm sufficiency | `SPECIALIST REVIEW REQUIRED` |
| 2 | Final CSV/Excel structural limits | `SPECIALIST REVIEW REQUIRED` |
| 3 | Final index set for every new table, including `catalog_channel_confirmation_receipts` | `SPECIALIST REVIEW REQUIRED` |
| 4 | Scheduler worker run interval and lag budget (values unchanged: 1-minute run interval / 5-minute budget) | `SPECIALIST REVIEW REQUIRED` |
| 5 | Shared permission-engine and shared conversational-engine sequencing and ownership | `REFINEMENT REQUIRED` (Mission Control sequencing decision) |
| 7 | Availability of Supabase Scheduled Edge Functions (or `pg_cron` + `pg_net`) in the deployed environment for the Pattern A scheduler worker | `SPECIALIST REVIEW REQUIRED` |

None of these items is a blocking design gap (EIS §24 "Blocking Issues": none). Item numbering matches the locked EIS §24 question numbers exactly, including the intentional gap at item 6 — see Section 29.2.

### 29.2 Resolved — Preserved As Accepted

The following item is closed. It must not be described as open, and must not be reopened by this contract or by any implementation performed against it:

| # | Item | Disposition |
|---|---|---|
| 6 | Selling-unit/price treatment upon inventory-link removal | `RESOLVED — ACCEPTED AS WRITTEN` |

The seven Stage 10 mandatory open-parameter dispositions (EIS §25) are likewise unchanged, already resolved, and not reopened by this contract.

## 30. Explicit Implementation Prohibitions

### Permanent Governance Prohibitions

The following is prohibited throughout SB-P-1.11 implementation and is not authorized by this Engineering Contract at any stage:

- Modifying the locked Product Blueprint.
- Modifying the locked Founder Product Decision Record or creating a new Founder decision.
- Modifying the locked Engineering Implementation Specification.
- Changing product scope, UX, merchant-facing behaviour, permissions, or business rules.
- Introducing any write path to a protected catalog table outside the authorized command functions.
- Permitting AI, WhatsApp interpretation, or automation to save an uncertain or consequential catalog change without explicit human confirmation.
- Introducing a second stock truth, direct catalog write to current stock, or any capability listed in Section 5 of this contract as Reject.
- Custom POS modification inside the Smart Business core platform.

### Pre-Implementation Authorization Restrictions

Before a separate, explicit Mission Control implementation authorization is issued, the following must not begin:

- Creating `lovable-build-prompt.md` or `verification-checklist.md` (each requires its own separate Mission Control authorization, per instruction1.18.md).
- Creating a Founder Lovable Brief.
- Generating application code, SQL, migrations, schemas, RLS policies, or RPC implementations.
- Implementing Edge Functions or scheduler workers.
- Writing prompts for live AI or WhatsApp systems.
- Making Lovable project changes.
- Writing tests or test fixtures.
- Changing infrastructure, deployment configuration, or production data.
- Beginning implementation of any kind.

### This Mission's Own Git Discipline

- This mission's pull request shall not be approved or merged by its own author.
- This mission modifies only `docs/implementation/SB-P-1.11/engineering-contract.md` and creates only `communication/live/report1.18.md`.

## 31. Required Document Status and Lifecycle Boundary

```text
DOCUMENT STATUS: LOCKED — MISSION CONTROL ACCEPTED
APPROVED: YES
LOCKED: YES
IMPLEMENTATION AUTHORITY: NONE
```

After this mission:

- The Engineering Contract is accepted and locked at Version 1.1. Mission Control resolved MC-EC-001 through MC-EC-006 and recorded `ENGINEERING CONTRACT REVIEW: PASSED`, `ENGINEERING CONTRACT: ACCEPTED FOR LOCK` (`communication/live/instruction1.20.md`).
- The Lovable Build Prompt remains unauthorized — **[APPROVAL GATE]**.
- The Verification Checklist remains unauthorized — **[APPROVAL GATE]**.
- The Stage 12 Initial Implementation Package remains incomplete.
- Implementation remains unauthorized.

Locking the Engineering Contract does not itself authorize the next document or implementation. Mission Control must verify this lock-only diff; only after that verification may a separate instruction authorize preparation of the Lovable Build Prompt.

## 32. Document Change Log

| Version | Description |
|---|---|
| 1.0 | Initial draft Engineering Contract, translating the locked SB-P-1.11 Product Blueprint (Sections 1–21) and the locked SB-P-1.11 EIS (Version 2.2) into an implementation-ready contract, per `instruction1.18.md`. Covers all 29 mandatory content areas. No new Product Truth, Founder decision, or engineering behaviour introduced. Not approved, not locked, no implementation authority. |
| 1.1 | Narrow refinement authorized by `instruction1.19.md`, correcting Mission Control findings MC-EC-001 through MC-EC-006 identified in review of Version 1.0. Corrected `report1.18.md`'s placeholder execution evidence with the actual branch commit SHA, squash-merge commit SHA, and PR #71 reference, explicitly distinguished (MC-EC-001). Made Section 16's permission-engine sequencing explicit and non-contradictory with separate Phase 1 (Owner-only runtime, forward-compatible signatures, no substitute permission engine) and Phase 2a (shared-engine-gated Manager/Employee enforcement) subsections (MC-EC-002). Refined Section 27's acceptance wording so it does not imply every obligation is immediately executable, and added an explicit rule that `[ENVIRONMENT VERIFICATION]`/`[SHARED-SYSTEM DEPENDENCY]`/`[APPROVAL GATE]`-tagged obligations must not be implemented until their condition is resolved, verified, and separately authorized (MC-EC-003). Expanded the privilege-verification requirements in Sections 26 and 27 to cover the complete execution-identity model — all eight command-group owners, `catalog_channel_executor`, `catalog_scheduler_executor`, both service identities, every `EXECUTE` grant, every table-level privilege, and `PUBLIC` execute revocation — requiring exact privilege inspection rather than role-existence checks (MC-EC-004). Split the former "Open Implementation Parameters" section into Section 29.1 (genuinely open items) and Section 29.2 (the already-`RESOLVED — ACCEPTED AS WRITTEN` inventory-link-removal item), renaming the section "Preserved EIS Parameter Dispositions" (MC-EC-005). Corrected Section 7's architecture wording so it no longer appears to prohibit the EIS-authorized external-worker/service-identity boundary (MC-EC-006). No previously accepted content was reopened; no new Product Truth, Founder decision, scope, or engineering behaviour was introduced. Status remains DRAFT — MISSION CONTROL REVIEW REQUIRED; not approved, not locked, no implementation authority. |
| 1.1 (Lock) | Mission Control completed review and re-review of Version 1.1, resolving MC-EC-001 through MC-EC-006 as `RESOLVED` and recording `ENGINEERING CONTRACT REVIEW: PASSED`, `ENGINEERING CONTRACT: ACCEPTED FOR LOCK`. Per `instruction1.20.md`, this is a lock-only documentation change: Version 1.1's substantive obligations, scope boundaries, technical contracts, dependencies, open/resolved EIS parameter dispositions, prohibitions, traceability mappings, and acceptance conditions are unchanged. Only document status, approval metadata, and lock metadata were updated — status changed from `DRAFT — MISSION CONTROL REVIEW REQUIRED` to `LOCKED — MISSION CONTROL ACCEPTED`; approval changed from not granted to `GRANTED`; lock changed from not authorized to `ACTIVE`. The Engineering Contract is now the locked, authoritative Stage 12A implementation contract for SB-P-1.11. The Lovable Build Prompt, Verification Checklist, and implementation remain separately unauthorized, per `instruction1.20.md`'s Required Final State. |
