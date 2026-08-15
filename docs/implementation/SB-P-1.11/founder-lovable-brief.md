# SB-P-1.11 — Founder Lovable Brief

Product Catalog & Pricing — Initial Phase 1 (Exactly 19 Public Catalog Commands)

```text
FOUNDER LOVABLE BRIEF STATUS:
LOCKED — MISSION CONTROL ACCEPTED

MISSION CONTROL ACCEPTANCE:
GRANTED

DOCUMENT LOCK:
ACTIVE

STAGE 14 FOUNDER HANDOFF AUTHORITY:
GRANTED

PASTE-INTO-LOVABLE AUTHORITY:
NONE

LOVABLE PLAN MODE AUTHORITY:
NONE

LOVABLE BUILD MODE AUTHORITY:
NONE

IMPLEMENTATION AUTHORITY:
NONE

PUBLISHING OR DEPLOYMENT AUTHORITY:
NONE
```

**This document is the reconciled, Mission-Control-accepted and locked Version 1.1 Founder Lovable Brief, prepared under `communication/live/instruction1.124.md` (SB-P-1.11-GC-28) to reconcile it against the current locked SB-P-1.11 Version 1.2 implementation package, the GC-27-amended Founder Product Decision Record, and current Git state, and accepted and locked as the current approved Stage 14 Founder-facing handoff document under `communication/live/instruction1.125.md` (SB-P-1.11-GC-29).** Stage 14 Founder Handoff Authority is `GRANTED`: the Founder may rely on and receive this document as the approved handoff for the current SB-P-1.11 initial Phase 1 scope. This lock still carries **no** paste-into-Lovable, Lovable Plan Mode, Lovable Build Mode, implementation, publishing, or deployment authority — implementation remains separately gated (Section 15.8, Section 18). The historical fact that Version 1.0 was previously accepted and locked against a since-superseded package, and the full Version 1.1 reconciliation and Stage 14 acceptance history, are preserved in the Change History (Section 19). The brief remains subordinate to the higher-authority locked sources listed in Section 5; any future discovered inconsistency must be resolved in favor of the higher-authority source through a separately authorized correction mission, not by this document.

---

## 1. Document Identity and Status

| Field | Value |
|---|---|
| Mission ID | SB-P-1.11 |
| Mission Name | Product Catalog & Pricing |
| Document Type | Founder Lovable Brief |
| Version | 1.1 |
| Status | LOCKED — MISSION CONTROL ACCEPTED |
| Mission Control Acceptance | GRANTED |
| Document Lock | ACTIVE |
| Stage 14 Founder Handoff Authority | GRANTED |
| Prepared Under | Version 1.0 prepared under `communication/live/instruction1.33.md`; refined per `communication/live/instruction1.34.md` (FLB-001–FLB-004); accepted and locked per `communication/live/instruction1.35.md`. Version 1.1 reconciliation prepared under `communication/live/instruction1.124.md` (SB-P-1.11-GC-28), correcting MC-GC28-001; Stage 14 review passed and Version 1.1 accepted and locked under `communication/live/instruction1.125.md` (SB-P-1.11-GC-29) — see Section 19 for the exact delta |
| Scope Covered | Initial Phase 1 only — exactly 19 public Catalog commands; no twentieth Catalog command. Scheduled-price, channel/pending-action, scheduler, and parser-support functions are separately classified and are not counted in, or added to, this total (Section 6, Section 14) |
| Governing Package | Stage 12 Implementation Package — `docs/phase-1-mission-blueprint/active/SB-P-1.11.md` (Product Blueprint, LOCKED), `docs/phase-1-mission-blueprint/implementation/SB-P-1.11-EIS.md` (EIS v2.2, LOCKED, except the CSV/XLSX parser-runtime/import-support-state architecture reassigned to the canonical Lambda Parser EIS), `communication/live/report1.126.md` (canonical Lambda Parser EIS, `LAMBDA PARSER EIS — APPROVED — LOCKED`), Engineering Contract Version 1.2 — `LOCKED — MISSION CONTROL ACCEPTED`, Lovable Build Prompt Version 1.2 — `LOCKED — MISSION CONTROL ACCEPTED`, Verification Checklist Version 1.2 — `LOCKED — MISSION CONTROL ACCEPTED` (`communication/live/instruction1.122.md`, SB-P-1.11-GC-26) |
| Founder Decision Basis | Founder Product Decision Record D-001 through D-068, including D-023 and D-024 as formally amended under SB-P-1.11-GC-27 (`communication/live/instruction1.123.md`; see Section 5); Founder Workflow Reconciliation Record FWR-001 through FWR-005 (`docs/phase-1-mission-blueprint/active/SB-P-1.11-Founder-Workflow-Reconciliation-Record.md`) |
| Readiness Basis | Version 1.0 basis: `communication/live/report1.27.md` through `communication/live/report1.32.md`. Package reconciliation/correction/lock/Stage-14-acceptance basis for this revision: `communication/live/report1.126.md` through `communication/live/report1.134.md` |

---

## 2. Founder-Facing Purpose

This brief exists to hand a Founder-readable, technically precise description of exactly what "initial Phase 1" means for SB-P-1.11 to whoever eventually receives implementation authorization — so that Lovable is told exactly what to build, exactly what not to build, and exactly how to prove it built the right thing, without needing to re-derive any of that from the underlying engineering documents.

It converts the locked Stage 12 package, the Founder Product Decision Record (including its GC-27 amendment), the Founder Workflow Reconciliation Record, and the accepted readiness/reconciliation report chain (Section 5) into one handoff document. This brief is intended to restate locked requirements and accepted Mission Control dispositions. It does not have authority to create new Product Truth or implementation requirements. Any inconsistency with a locked source must be resolved in favor of the locked source.

---

## 3. What This Initial Phase 1 Delivers for the Merchant

For the business owner, initial Phase 1 delivers a working, dashboard-based product catalogue:

- Create and archive categories. Create, edit, archive, reactivate, and — where eligible — permanently delete products. (Categories support create and archive only; there is no edit, reactivate, or permanent-delete command for a category.)
- Enter a SKU when creating or editing a product, or leave it blank — SKU input is always optional. When the merchant leaves it blank, Smart Business automatically assigns a business-scoped unique tracking SKU so the product still resolves to exactly one SKU; a merchant-supplied SKU is always validated and used as given, never overwritten (D-023 as amended, FWR-003; Section 6, Section 7).
- Set and change a product's selling price immediately, with full price history preserved.
- Set an optional reference cost (never shown to employees by default) and an optional tax treatment, both with full history.
- Link a catalog product to an existing inventory item, with a mandatory price/unit confirmation step so a price can never silently change its meaning.
- Search and browse the catalogue using exact and normalized (whitespace/case-insensitive) matching, in English, Malayalam, or Manglish, with the merchant's own wording always preserved on screen.
- Look up the outcome of any prior catalogue action if something seemed to go wrong (a stuck screen, a retried tap), instead of guessing.

All of this is available to the business owner only, from day one, through the dashboard.

---

## 4. What This Initial Phase 1 Deliberately Does Not Deliver

This is not an oversight list — every item below is either future approved Product Truth on a later build schedule, or infrastructure this mission is explicitly not authorized to design:

- **No scheduled/future pricing.** A merchant cannot yet schedule a price to change automatically at a future date, and no automatic price-schedule activation runs. This includes `schedule_catalog_selling_price`, `cancel_scheduled_catalog_selling_price`, `list_due_catalog_price_schedule_candidates`, `activate_catalog_price_schedule`, the scheduler worker, the scheduler's own service identity, and any `pg_cron`/`pg_net` activation. Scheduling is approved future Product Truth, not part of this scope, so that a merchant can never be shown a "scheduled price" control that looks like it will activate itself when nothing is actually watching for it.
- **No Manager or Employee catalogue access.** Only the owner can use any catalogue feature until a shared, cross-mission permission engine exists and is separately authorized (Phase 2a).
- **No bulk CSV/Excel Catalog import.** Import, its correction queue, and its supporting bookkeeping are a separate, later phase (Phase 2b), using the canonical Lambda Parser EIS runtime (Section 10, Section 14) — not part of this initial Phase 1 handoff.
- **No Inventory/Opening Stock CSV/XLSX bulk onboarding or downloadable import templates yet.** The accepted Founder Workflow rule for Inventory/Opening Stock bulk onboarding (FWR-001) and downloadable Catalog and Inventory/Opening Stock templates (FWR-002) is locked package content (Engineering Contract §9A, Lovable Build Prompt §14A) but is Phase 2b-adjacent, structurally parallel to Catalog CSV import — it is not part of this initial Phase 1 dashboard scope (Section 14).
- **No Inventory-first product creation flow yet.** The accepted Founder Workflow orchestration for creating a new inventory item that resolves or creates its Catalog identity, links it, and records Opening Stock (FWR-005) is locked package content (Engineering Contract §9A, Lovable Build Prompt §14A) but is not part of this initial Phase 1 dashboard scope; only Catalog-first product creation (`create_catalog_product`) is included here (Section 14).
- **No WhatsApp, voice, or photo-based catalogue actions.** Conversational catalogue intent handling depends on a shared conversational engine that does not yet exist (Phase 3).
- **No "did-you-mean" or similarity-based search suggestions.** Search is exact and normalized only — no `pg_trgm`, no similarity/GIN indexing, no fuzzy or phonetic matching, no transliteration, and no AI-based normalization of any kind.
- **No discretionary performance tuning.** Only the integrity-enforcing constraints already fixed by locked sources are included; query-performance indexes that depend on real usage data or specialist review are deferred.
- **No automated cleanup of expired preview tokens.** Token records become eligible for cleanup after a fixed retention window, but nothing is authorized to actually delete or minimize them yet — that requires its own future, separately authorized mission.
- **No shared `system_errors` table.** Observability for initial Phase 1 relies entirely on the mechanisms already described in Section 13; the generic, cross-mission `system_errors` capability belongs to a future shared-infrastructure mission, not this one.

---

## 5. Locked Sources and Authority Hierarchy

In order of authority, all currently on `main` and unchanged by this brief:

1. Lighthouse Constitution.
2. Smart Business Master System Manifesto.
3. Smart Business Product Truth Map.
4. Founder Product Decisions D-001 through D-068 (`docs/phase-1-mission-blueprint/active/SB-P-1.11-Founder-Product-Decision-Record.md`), including D-023 and D-024 as formally amended under SB-P-1.11-GC-27 (`communication/live/instruction1.123.md`; `communication/live/report1.132.md`). D-023's amended text governs the generated-SKU behavior in Section 3, Section 6, and Section 7 of this brief; D-023's original wording and the amendment's audit trail remain preserved, unedited, in the Founder Product Decision Record's own Amendment History section — this brief does not restate that history.
5. Founder Workflow Reconciliation Record FWR-001 through FWR-005 (`docs/phase-1-mission-blueprint/active/SB-P-1.11-Founder-Workflow-Reconciliation-Record.md`) — a mandatory preserved authority, not counted among the four locked Stage 12 authorities below, governing the generated-SKU rule and the Inventory-onboarding/Inventory-first obligations named in Section 4 and Section 14.
6. SB-P-1.11 Product Blueprint — LOCKED (`docs/phase-1-mission-blueprint/active/SB-P-1.11.md`).
7. SB-P-1.11 EIS Version 2.2 — LOCKED (`docs/phase-1-mission-blueprint/implementation/SB-P-1.11-EIS.md`) — except the CSV/XLSX parser-runtime and import-support-state architecture, reassigned to item 7A below.
7A. Canonical Lambda Parser EIS, `LAMBDA PARSER EIS — APPROVED — LOCKED` (`communication/live/report1.126.md` and its locked chain) — authoritative specifically for the external AWS Lambda parser runtime, transient S3 ingress, IAM Roles Anywhere credential path, and the Parser Upload Lease/EC-2 support-state architecture (Section 10, Section 14).
8. SB-P-1.11 Engineering Contract Version 1.2 — `LOCKED — MISSION CONTROL ACCEPTED` (`docs/implementation/SB-P-1.11/engineering-contract.md`; `communication/live/instruction1.122.md`, SB-P-1.11-GC-26).
9. SB-P-1.11 Lovable Build Prompt Version 1.2 — `LOCKED — MISSION CONTROL ACCEPTED` (`docs/implementation/SB-P-1.11/lovable-build-prompt.md`).
10. SB-P-1.11 Verification Checklist Version 1.2 — `LOCKED — MISSION CONTROL ACCEPTED` (`docs/implementation/SB-P-1.11/verification-checklist.md`).
11. Accepted readiness reports `communication/live/report1.27.md` through `communication/live/report1.32.md` (original Version 1.0 Phase 1 readiness resolution, database specialist resolution, and token-lifecycle parameter resolution, each as corrected by its own accepted Mission Control review), and the package reconciliation/correction/review/lock chain `communication/live/report1.126.md` through `communication/live/report1.132.md`.

Where a later accepted report or correction governs over earlier stale wording, this brief uses only the latest accepted disposition. This brief does not add, remove, or reinterpret anything in the list above.

---

## 6. Exact 19-Command Initial Phase 1 Scope Table

Every name below is copied verbatim from the locked Lovable Build Prompt §11 command surface. These nineteen names are the complete, closed Product Truth command boundary — **exactly 19 public Catalog commands; no twentieth Catalog command** — independently re-verified against `pg_proc`/`pg_namespace`/`pg_roles` (`communication/live/report1.91.md` §13) and originally scoped for initial Phase 1 by `communication/live/report1.27.md`/`report1.28.md` (Matter 4, as corrected).

All nineteen public Catalog commands are included in this initial Phase 1 scope. Two further public functions are Phase 1 scope in the locked package but are classified separately from the nineteen-command boundary, not counted within it, and excluded from this initial Phase 1 handoff by Mission Control disposition: the two merchant-facing scheduling functions, `schedule_catalog_selling_price` and `cancel_scheduled_catalog_selling_price` (a merchant must never see a scheduling control that cannot actually activate). A further, separately classified, environment-gated scheduler function group — `list_due_catalog_price_schedule_candidates`, `activate_catalog_price_schedule`, and their runtime — is independently gated and likewise excluded from this initial Phase 1 handoff; the locked Lovable Build Prompt §11 has always listed it as its own group, distinct from Catalog commands and from the two scheduling functions above. Both exclusions are detailed in Section 4 and Section 14. Generated-SKU behavior (D-023 as amended, FWR-003/FWR-004; Section 3, Section 7) applies to `create_catalog_product` and `update_catalog_product_identity` below exactly as it applies everywhere else the same rule governs — it is not a new command and does not change this table's command count.

| Command | Phase | Included in Initial Phase 1 | User or System Actor | Primary Purpose | Main Tables or Protected Resources | Verification Reference |
|---|---|---|---|---|---|---|
| `create_catalog_product` | Phase 1 | Yes | Owner (dashboard) | Create a new catalog product | `catalog_products`, `catalog_audit_events`, `catalog_file_references` (read), `catalog_write_idempotency_keys` | CHK-P1-001, CHK-BE-004, CHK-ISO-001 |
| `update_catalog_product_identity` | Phase 1 | Yes | Owner (dashboard) | Edit name, description, SKU, barcode, category, or image | `catalog_products`, `catalog_categories`, `catalog_audit_events`, `catalog_file_references`, `catalog_write_idempotency_keys` | CHK-P1-001, CHK-UX-002 |
| `update_catalog_product_unit` | Phase 1 | Yes | Owner (dashboard) | Change a non-stock product's selling unit before sale history exists | `catalog_products`, `catalog_audit_events`, `catalog_write_idempotency_keys` | CHK-SEP-002, CHK-P1-001 |
| `create_catalog_category` | Phase 1 | Yes | Owner (dashboard) | Create a business-owned category | `catalog_categories`, `catalog_write_idempotency_keys` | CHK-P1-001, CHK-UX-002 |
| `archive_catalog_category` | Phase 1 | Yes | Owner (dashboard) | Archive a category — uncategorizes affected products, preserves history | `catalog_categories`, `catalog_products`, `catalog_audit_events` | CHK-P1-001 |
| `archive_catalog_product` | Phase 1 | Yes | Owner (dashboard) | Archive a product that has business history | `catalog_products` (status), `catalog_audit_events` | CHK-P1-001 |
| `reactivate_catalog_product` | Phase 1 | Yes | Owner (dashboard) | Reactivate a previously archived product | `catalog_products` (status), `catalog_audit_events` | CHK-P1-001 |
| `delete_catalog_product` | Phase 1 | Yes | Owner (dashboard) | Permanently delete a product with no dependent history, retaining a minimal deletion record | `catalog_products`, `catalog_deletion_records`, `catalog_audit_events` | CHK-P1-001 |
| `record_catalog_selling_price_change` | Phase 1 | Yes | Owner (dashboard) | Change the current selling price immediately | `catalog_selling_price_events`, `catalog_products` (read) | CHK-PTC-001, CHK-PTC-002 |
| `record_catalog_tax_change` | Phase 1 | Yes | Owner (dashboard) | Change a product-level tax override | `catalog_tax_events`, `catalog_write_idempotency_keys` | CHK-PTC-001 |
| `update_business_tax_settings` | Phase 1 | Yes | Owner (dashboard) | Set the business-wide tax-inclusive/exclusive default | `business_tax_settings` | CHK-PTC-001; Section 9 (singleton) |
| `record_catalog_reference_cost_change` | Phase 1 | Yes | Owner (dashboard) | Change the optional reference cost | `catalog_reference_cost_events`, `catalog_products` (read) | CHK-PTC-001, CHK-EMP-001 |
| `preview_catalog_inventory_link_change` | Phase 1 | Yes | Owner (dashboard) | Preview a first-time assignment, replacement, or removal of an inventory link (unit and price where applicable) before saving — step 1 of the D-068 safeguard for every one of these three outcomes | `catalog_link_preview_tokens`, `catalog_products` (read), `inventory_items` (read) | CHK-D068-001 |
| `assign_or_replace_catalog_inventory_link` | Phase 1 | Yes | Owner (dashboard, same actor as the preview) | Confirm and atomically commit a previewed first-time assignment or replacement — step 2 of the D-068 safeguard, using the valid preview token | `catalog_link_preview_tokens`, `catalog_product_link_events`, `catalog_selling_price_events`, `catalog_products` | CHK-D068-001, CHK-D068-002, CHK-ACT-001 (extended) |
| `remove_catalog_inventory_link` | Phase 1 | Yes | Owner (dashboard, same actor as the preview) | Confirm and atomically commit a previewed inventory-link removal — step 2 of the D-068 safeguard, using the valid preview token | `catalog_link_preview_tokens`, `catalog_product_link_events`, `catalog_products` | CHK-SEP-001, CHK-D068-001, CHK-D068-002, CHK-ACT-001 (extended) |
| `get_catalog_command_outcome` | Phase 1 | Yes | Owner (dashboard) | Reconcile the outcome of a prior command call, by idempotency key | `catalog_write_idempotency_keys` | CHK-ISO-002, CHK-IDEM-001 |
| `catalog_products_search` | Phase 1 | Yes | Owner (dashboard) | Deterministic exact/normalized product search | `catalog_products` (read) | CHK-UX-002; Section 11 |
| `catalog_product_read` | Phase 1 | Yes | Owner (dashboard) | Read one product's permission-filtered detail | `catalog_products` (read) | CHK-EMP-001 |
| `catalog_products_list_batch` | Phase 1 | Yes | Owner (dashboard) | List/batch-read products for dashboard views | `catalog_products` (read) | CHK-EMP-001 |

**Total included: 19 commands.** No command name above is renamed, combined, split, or invented; each is copied verbatim from Lovable Build Prompt §11.

---

## 7. Merchant Experience and Human Workflow

- **Catalogue entry point.** A Products/Catalog navigation entry extends the existing dashboard header, following the same pattern already used for Inventory — no second navigation surface.
- **List and search.** The merchant sees their products, can search by name, SKU, or barcode using exact/normalized matching (typo-in-whitespace or letter-case does not create a false "not found"), and can filter by category or lifecycle status.
- **Create and edit.** Creating or editing a product is a plain form: name (required), optional description/SKU/barcode/category/image, and — once linked to inventory — an inherited unit; otherwise a selling unit the merchant chooses.
- **SKU is always optional, never blank.** The merchant may type a SKU or leave the field empty. A typed SKU is validated and used exactly as entered. An empty field is never treated as "no SKU" for the product's own identity — Smart Business automatically assigns a business-scoped unique tracking SKU instead, so every product still resolves to exactly one SKU (D-023 as amended, FWR-003/FWR-004). This is the same rule dashboard, bulk import, and every other governed creation channel will use — no channel invents its own SKU behavior.
- **Price, tax, and cost.** Selling price, tax treatment, and reference cost each have their own small, clearly labeled edit surface, each preserving full history. Reference cost is owner-only and never shown to any other role by default (Section 9), which matters even though Phase 1 has no other roles yet, because the same screens must not expose it once Phase 2a arrives.
- **Linking to inventory — the one screen requiring extra care.** When a merchant links a product to an inventory item, changes an existing link, or removes a link entirely, the system always shows a preview first — for a link that changes the selling unit, the preview shows current unit and price, the proposed new unit, and the price the merchant must explicitly confirm or replace; for a removal, the preview shows exactly what will stop being linked. Nothing saves until the merchant reviews and confirms that exact preview, and only the same person who opened the preview can confirm it. If the merchant closes the tab, gets interrupted, or waits too long (the preview is valid for 15 minutes only), nothing changes — the merchant simply requests a fresh preview. **Unlinking is not a one-tap action** — it goes through this same preview-and-confirm step before the product-inventory relationship actually changes, exactly like assigning or replacing a link does. This exists so a number the merchant typed under one unit can never silently become "the same number, but per a different unit," and so a link can never disappear from a single accidental tap — both real risks for a cash-strapped small business if either happened silently.
- **Archiving and deletion.** Archiving a product or category never deletes its history and never silently affects a linked record on the other side (product/inventory). Categories can be created and archived only — there is no command to edit, reactivate, or permanently delete a category once created. For products only, permanent deletion is offered when there is truly nothing to lose, and a product can be reactivated after archiving.
- **When something seems stuck.** If a save appears to hang or a screen is retried, the merchant is never left guessing — the system can always look up what actually happened using the same reference the original attempt used, rather than risking a duplicate action.

---

## 8. Data Model and Integrity Boundaries

Every table below is new to this mission; none is a Phase 1-only object — it is simply the subset relevant to the 19 included commands (Section 6). Later-phase tables (`catalog_pending_price_schedules`, `catalog_price_schedule_events`, `catalog_channel_pending_actions`, `catalog_channel_confirmation_receipts`, `catalog_import_batches`, `catalog_import_rows`, and the Inventory-side `inventory_import_batches`/`inventory_import_rows`) are locked future authority and are explicitly out of this scope (Section 14). All import-support bookkeeping is narrow, non-Product-Truth support state — never a Catalog command, never counted in the nineteen-command boundary (Section 6, Section 10).

**In-scope tables:** `catalog_products`, `catalog_categories`, `catalog_selling_price_events`, `catalog_tax_events`, `business_tax_settings`, `catalog_reference_cost_events`, `catalog_link_preview_tokens`, `catalog_product_link_events`, `catalog_audit_events`, `catalog_deletion_records`, `catalog_file_references`, `catalog_write_idempotency_keys`.

**Integrity-enforcing constraints (already fixed, not discretionary):**

- Every new table's primary key is `id`, plus the mandatory composite `UNIQUE (id, business_id)` FK-integrity pattern applied to every new table.
- `catalog_products.name_normalized`, `catalog_products.sku_normalized`, `catalog_products.barcode_normalized`, `catalog_categories.name_normalized` — stored normalized comparison columns, each backed by a named composite `UNIQUE (business_id, <column>)` constraint. This is the one accepted normalized-uniqueness mechanism; no expression-index alternative is used.
- Product-name and category-name normalization: trim leading/trailing whitespace, collapse repeated internal whitespace to one space, case-fold for deterministic comparison, preserve punctuation, preserve Malayalam and Manglish exactly.
- SKU and barcode normalization: trim leading/trailing whitespace, case-fold where letters exist, **preserve internal spacing exactly** (no whitespace collapse), preserve punctuation exactly, blank-after-trim becomes `NULL`, multiple `NULL` values are allowed, uniqueness applies only to non-`NULL` normalized values.
- **Archived identities remain reserved.** For product name, SKU, barcode, and category name, an archived row's identity continues to occupy its uniqueness slot. No active-row-only partial unique index is permitted, for any of the four.
- `catalog_write_idempotency_keys` — `UNIQUE (business_id, operation, idempotency_key)`, the outcome-of-record for every command call, including rejected ones.
- `business_tax_settings` — `business_id NOT NULL`, `UNIQUE (business_id)`, one row maximum per business. No upsert algorithm is prescribed here; the authorized command owns its own create-or-update behavior under its locked command contract.
- Deferred, not included here: query-supporting/performance indexes, `pg_trgm`/GIN indexes, and any index requiring real usage evidence — these remain a specialist-review item, non-blocking to this scope.

---

## 9. Authorization, RLS, and Business-Isolation Boundaries

- **Owner-only.** Every one of the 19 commands verifies `businesses.owner_id = auth.uid()` and nothing else. No permission flag, staff role, or delegated authority is queried, simulated, or locally recreated. Command signatures and data structures remain forward-compatible with the future Phase 2a permission engine, but Phase 2a enforcement itself is not activated.
- **RLS everywhere, but writes never come from RLS grants.** Every new table carries `business_id` and the standard owner-subquery RLS pattern. No protected catalog table's RLS policy grants `INSERT`/`UPDATE`/`DELETE` to `authenticated`. Reads that expose protected fields (reference cost, margin-adjacent data) go through a permission-aware read path, never a direct table `SELECT`.
- **Business isolation.** No search, read, validation, or error message discloses another business's existence, state, or record content. `get_catalog_command_outcome` derives its business scope server-side only — a cross-business idempotency-key guess must return the same result as a nonexistent key.
- **The single-use preview token follows the same discipline.** A `catalog_link_preview_tokens` row is `business_id`-bound at issuance; a caller whose server-derived business does not match the token's business gets the same rejection as an invalid token — never a distinguishable "wrong business" response (Section 12).

---

## 10. Command-Only Write Model and Idempotency

- No protected catalog table ever grants direct client `INSERT`/`UPDATE`/`DELETE`. Every mutation goes through one of the 19 named commands above, or — for future phases, once separately authorized — the separately classified scheduled-price, channel/pending-action, and scheduler functions named in Section 14, none of which is part of, or an addition to, the nineteen-command boundary.
- Idempotency resolves before any mutable-state check, on every command: actor and business are derived first, then the idempotency key and payload fingerprint are checked, before any precondition or stale-state evaluation runs. `catalog_write_idempotency_keys.status` has exactly two terminal values (`completed`, `rejected`) — never a durable "in progress" state.
- A rejected attempt is a committed outcome, not an aborted transaction: rejection bookkeeping (idempotency status, D-068 token consumption where applicable) durably persists even when the protected business tables themselves were never touched.
- If a UI need cannot be satisfied by one of the 19 named commands, that is a stop condition (Section 17) — never license to add a new write path.

---

## 11. Search and Normalization Rules

Initial Phase 1 search (`catalog_products_search`) and every uniqueness check use **deterministic exact and normalized matching only**:

- No `pg_trgm`.
- No GIN similarity indexing.
- No fuzzy matching.
- No phonetic matching.
- No transliteration.
- No AI-based normalization.
- No uncertain-match automation of any kind.

Different Malayalam spellings, Manglish transliterations, or translated names/SKUs are never treated as the same value; the exact/normalized comparison rules in Section 8 are the entire matching surface for this scope. A future, separately specialist-reviewed similarity-assistance feature is explicitly out of scope here, not silently included.

---

## 12. D-068 Preview, Confirmation, Token, and Audit Lifecycle

The inventory-link safeguard is a two-step flow for every one of the three outcomes it governs — first-time assignment, replacement, and removal — and none of it is discretionary:

```text
1. preview_catalog_inventory_link_change
2. assign_or_replace_catalog_inventory_link (assignment/replacement)
   OR remove_catalog_inventory_link (removal)
   — using the valid preview token from step 1
```

**Removal is not exempt from this flow.** `remove_catalog_inventory_link` never runs on its own; it always confirms a preview that `preview_catalog_inventory_link_change` already produced, exactly as `assign_or_replace_catalog_inventory_link` does for assignment/replacement. Everything below applies identically to all three outcomes unless stated otherwise:

- **Preview before confirmation.** A non-mutating preview is required before any inventory-link assignment, replacement, or removal; it returns a single-use token binding the exact reviewed state (proposed link, unit, and price for assignment/replacement; the link being removed for removal).
- **Token validity: exactly 15 minutes, fixed, server-controlled.** The client cannot supply, extend, renew, or override this. The clock starts at server-side issuance; the boundary is `now() < expires_at`, evaluated on the server only — there is no client-clock dependency and no clock-skew case to handle, because only one clock (the server's) is ever consulted.
- **No renewal.** There is no "extend" or "refresh" operation. After expiry, the merchant must request a fresh preview, which also re-shows current, accurate state.
- **Same-actor confirmation.** Only the actor who requested the preview may confirm it. Any mismatch is rejected unconditionally — there is no delegated or "confirm on behalf of" path.
- **Business binding and expected-state binding.** The token is bound to one business and to the exact previewed state; a mismatch on either is rejected identically to an invalid token (never disclosed as "wrong business" specifically).
- **Single-use, enforced by state, not by deletion.** The token row is retained, not deleted, on consumption or expiry; a `consumed_at` field (set exactly once, atomically with the confirming write) is what makes replay impossible — not the row's absence.
- **Replay rejection.** Any resubmission against an already-decided token — consumed, expired, wrong actor, wrong business, or stale preview state — is rejected, and the underlying protected write is never invoked a second time.
- **Retention (fixed, not indefinite):** full non-secret lifecycle metadata is retained for **90 days after `consumed_at`** for a consumed token, or **30 days after `expires_at`** for an expired-and-never-consumed token.
- **Raw-token minimization.** On consumption, the raw token value is redacted immediately, in the same transaction that records consumption. On expiry, logical unusability is immediate (guaranteed by the mandatory `expires_at` check alone) even though physical redaction of the stored value may lag until the first authorized interaction with that row or a future cleanup process, whichever happens first — an expired, never-retried row is unusable the entire time regardless.
- **Purge eligibility is fixed; purge execution is not authorized.** A row becomes purge-eligible at `consumed_at + 90 days` or `expires_at + 30 days`. Reaching that point does not itself delete or further minimize anything — no cleanup worker, cron job, Edge Function, RPC, or equivalent mechanism exists or is authorized by this brief. Reaching eligibility must never be described, in any implementation or documentation, as active automated purge.
- **Durable audit-only evidence**, if a row is ever minimized rather than deleted by a future authorized mechanism, excludes the raw bearer token, the complete previewed-state payload, and unnecessary personal data — retaining only business identity, a stable correlation identity, initiating/consuming actor, issue/expiry/consumption times, lifecycle outcome, rejection reason where applicable, and a minimal expected-state digest.

---

## 13. Error, Rollback, and Observability Boundaries

- **No `system_errors` in this scope.** Initial Phase 1 does not create, reference, or substitute a catalog-specific error table. Observability relies entirely on: `catalog_write_idempotency_keys` (the outcome-of-record for every command attempt, including rejections), standard database transaction rollback for genuinely unexpected failures, structured database errors, and the repository's existing logging. The shared, generic `system_errors` capability is real, Founder-approved future infrastructure — it belongs to a separate future shared-infrastructure mission, not to this one.
- **Expected rejections commit; only genuine failures roll back.** A validation, permission, stale-state, or conflict rejection is a normal, committed structured result (idempotency bookkeeping and, where applicable, D-068 token consumption, persist) — the protected business tables are simply never written on that path. Only a genuinely unexpected error triggers a full exception-driven rollback, and only that becomes a client-visible `UNKNOWN_OUTCOME`.
- **Merchant-safe messaging.** Every rejection category maps to a specific, plain-language message. No raw error code, stack trace, or database constraint name is ever exposed to the merchant.

---

## 14. Phase Gates and Excluded Future Scope

The nineteen-command Catalog Product Truth boundary is closed: **exactly 19 public Catalog commands; no twentieth Catalog command.** This brief documents only these nineteen for initial Phase 1 (Section 6). Every other group in the table below is separately classified, phase-gated future authority — none of it is part of, or an addition to, the nineteen-command boundary, and no combined numeric total across groups is asserted anywhere in this brief.

| Excluded group | Commands / capability | Classification | Gate |
|---|---|---|---|
| Merchant-facing scheduling | `schedule_catalog_selling_price`, `cancel_scheduled_catalog_selling_price` | Separately classified public functions, not part of the nineteen-command boundary | Excluded from initial Phase 1 by Mission Control disposition — a merchant must never see a scheduling control that cannot actually activate |
| Scheduler runtime | `list_due_catalog_price_schedule_candidates`, `activate_catalog_price_schedule`, scheduler worker, `catalog_scheduler_service` identity, `pg_cron`, `pg_net` | Separately classified, environment-gated public functions, not part of the nineteen-command boundary | Environment-verification gate + separate future implementation authorization |
| Phase 2a | Permission-flag enforcement on the existing nineteen Catalog commands (no new command names) | No new command surface | Requires the shared permission engine — not yet built for any mission |
| Phase 2b — Catalog CSV/XLSX import | Zero new Catalog commands. Product Truth for an imported product is written only through the existing nineteen public Catalog commands, principally `create_catalog_product` and the price/tax/reference-cost follow-up commands, under caller-JWT authority. Parsing is externalized to the canonical Lambda Parser EIS (Section 10). Import-support bookkeeping (`catalog_import_batches`, `catalog_import_rows`) is narrow, non-Product-Truth, `service_role`-only support state | No new command surface; narrow non-Product-Truth support state only | Separate future authorization |
| Phase 2b-adjacent — Inventory/Opening Stock bulk onboarding (FWR-001, FWR-002) | Inventory/Opening Stock CSV/XLSX bulk onboarding; downloadable Catalog and Inventory/Opening Stock templates. Structurally parallel to Catalog import; opening quantity is established only through a governed Opening Stock inventory movement, never a direct write | Locked package content (Engineering Contract §9A, Lovable Build Prompt §14A); no new Catalog command | Separate future authorization; Phase 1 Owner-only posture once authorized |
| Inventory-first orchestration (FWR-005) | Resolve/create Catalog identity → create Inventory entity → establish governed link → record Opening Stock as an Inventory movement only after the link exists. Preserves Catalog/Inventory truth separation, D-047, and D-068; no silent duplicate Catalog creation | Locked package content (Engineering Contract §9A, Lovable Build Prompt §14A); no new Catalog command | Separate future authorization |
| Phase 3 | `create_catalog_pending_action`, `confirm_catalog_pending_action`, channel pending actions, channel confirmation receipts | Separately classified public functions, not part of the nineteen-command boundary | Requires the shared conversational engine — not yet built for any mission |

Generated-SKU behavior (D-023 as amended, FWR-003/FWR-004) is **not** in this table — it is not excluded from initial Phase 1. It applies now, identically, to `create_catalog_product` and `update_catalog_product_identity` within this brief's own scope (Section 3, Section 6, Section 7), and will apply identically, without any channel-specific variation, once each later channel above is separately authorized.

No command outside the authorized initial Phase 1 scope may be implemented, scaffolded, exposed, granted, deployed, or partially activated by any future Lovable run this brief eventually feeds — that requires its own separate, explicit Mission Control authorization naming that specific phase or gate.

### 14A. Residual Governance Items Outside This Brief's Authority to Resolve

Two governance items remain open and are not resolved, remediated, or claimed complete by this brief:

- **Repository hygiene remains incomplete.** It is mandatory before any future implementation authorization/Build, independent of this brief's own reconciliation status. This brief does not perform hygiene remediation and does not claim it is complete.
- **The locked Product Blueprint remains under the `docs/phase-1-mission-blueprint/active/` lifecycle path.** This is non-blocking housekeeping only — it does not invalidate the locked Blueprint, this brief, or the locked Version 1.2 package, and it is not a Build blocker. This brief does not move or modify the Blueprint.

---

## 15. Stage 14 Founder Handoff — Lovable Execution Instructions for a Future Authorized Implementation Run

**This document is now Mission Control accepted and locked as the approved Stage 14 Founder-facing handoff (see the status block at the top of this document and Section 18) — the Founder may rely on it for exactly that purpose. That acceptance is not implementation authorization: every instruction in this section still describes a future, separately authorized implementation run only, and none of it is active now.** Pasting Section 15.1's instruction into Lovable, opening Lovable Plan Mode or Build Mode, or creating an implementation branch still each require a separate, explicit Mission Control implementation authorization that this document does not itself grant (Section 15.8). The subsections below are the exact Stage 14 handoff fields `communication/live/instruction1.124.md` §11 requires this brief to contain, so that once a separate implementation authorization is granted, the Founder can hand a builder run everything it needs without re-deriving anything.

### 15.1 The Exact Lovable Instruction

Once, and only once, Mission Control has separately authorized this specific implementation run naming this specific phase, the Founder pastes an instruction into Lovable equivalent to the following. This text is a template for that future authorized moment — pasting it now, before authorization, is exactly what Section 18's Paste-Into-Lovable Authority `NONE` prohibits.

```text
Mission: SB-P-1.11 — Product Catalog & Pricing
Phase authorized: Initial Phase 1 (exactly 19 public Catalog commands; no twentieth)
Authorizing Mission Control instruction: [cite the specific future authorization instruction file]

Read and follow docs/implementation/SB-P-1.11/lovable-build-prompt.md (Version 1.2,
LOCKED — MISSION CONTROL ACCEPTED) in full. It is the complete, binding builder
instruction. This Founder brief (docs/implementation/SB-P-1.11/founder-lovable-brief.md)
is a Founder-facing summary of it, not a replacement or an independent authority.

Build only the 19 named commands in Lovable Build Prompt Section 11's Phase 1 group.
Do not build, scaffold, or expose any command or capability outside that phase.
Do not invent an alternate command name, signature, or direct table write path.

Follow the branch/PR workflow in Section 15.3 of the Founder brief exactly.
Produce the Builder Completion Report at exactly:
docs/implementation/SB-P-1.11/lovable-build-completion-report.md
(Section 15.5 of the Founder brief) — not a communication/live/ mission report.
Stop and escalate to Mission Control per Section 17 of the Founder brief on any
ambiguity, conflict, or mismatch — do not guess, improvise, or narrow/expand scope.
```

### 15.2 Locked Lovable Build Prompt Path

`docs/implementation/SB-P-1.11/lovable-build-prompt.md` — Version 1.2, `LOCKED — MISSION CONTROL ACCEPTED`. This is the complete, binding builder instruction; this brief summarizes and restates it for Founder review, it does not replace it. Any future correction to the Lovable Build Prompt supersedes this brief's summary of it.

### 15.3 Required Implementation Branch / PR Workflow

1. Start from current merged `main`; fetch and fast-forward synchronize before any change.
2. Create a new, dedicated implementation branch — do not implement on `main` and do not reuse a document-reconciliation mission branch. Name it descriptively for the authorized phase, e.g. `implementation/SB-P-1.11-Initial-Phase-1-Catalog-Foundation`.
3. Implement only what the specific Mission Control authorization names for that phase.
4. Do not use `git add .`; stage only the files the authorized phase's scope covers.
5. Run the repository Markdown Quality Gate, and every test/verification obligation Section 16 and the locked Verification Checklist name for the authorized phase, before committing.
6. Commit with a message describing exactly what was implemented and under which authorization.
7. Open a pull request against `main` for Mission Control review. Do not approve or merge your own pull request under any circumstance.
8. Wait for explicit Mission Control review and merge before treating any part of the authorized phase as accepted.

### 15.4 Expected Builder Output and Changed-File Reporting

The implementation run must report, at minimum: the exact branch name and final commit SHA; the exact list of files created, modified, or deleted, with none outside the authorized phase's scope; confirmation that every command built matches Section 6's exact nineteen names, signatures, and table references with no renamed, combined, split, or invented command; confirmation that nothing listed in Section 4 or Section 14 was implemented, scaffolded, or exposed; and the evidence Section 16 of this brief requires for the authorized phase, produced as the implementation proceeds rather than reconstructed afterward from memory. This output is recorded in the exact Builder Completion Report artifact named in Section 15.5 (`docs/implementation/SB-P-1.11/lovable-build-completion-report.md`) — not in a `communication/live/` mission report.

### 15.5 Builder Completion Report Path

`docs/implementation/SB-P-1.11/lovable-build-completion-report.md` — the exact, lifecycle-defined Builder Completion Report artifact required by SB-P Mission Lifecycle and Delivery Framework Stages 15–16 (corrected per MC-GC28-001). A future authorized Lovable implementation run must produce this exact file at this exact path; it is created or updated on the same PR as the implementation. Its status immediately after implementation is:

```text
IMPLEMENTATION REPORTED — VERIFICATION PENDING
```

This artifact reports, at minimum, everything Section 15.4 requires, and must not claim any outcome beyond what the authorized phase's own scope covers. **Do not substitute a `communication/live/report*.md` mission report for this artifact.** A `communication/live/` mission report may exist alongside it only if a future, separate Mission Control instruction specifically authorizes one — that separate report, if it ever exists, is not the Builder Completion Report and does not replace the requirement above.

### 15.6 Necessary PowerShell Commands

Only the commands a Founder actually needs to prepare for and verify a future authorized run — none of these commands themselves authorize or begin implementation:

```powershell
# Synchronize to the latest merged main before anything else
git checkout main
git pull origin main
git rev-parse HEAD   # confirm this matches the SHA Mission Control's authorization cites

# Create the dedicated implementation branch (only after authorization is granted)
git checkout -b implementation/SB-P-1.11-Initial-Phase-1-Catalog-Foundation

# After implementation: verify exactly the intended files are staged, never git add .
git status --short

# Run the repository Markdown Quality Gate before committing any Markdown change
python tools/markdown/quality_gate.py <changed-markdown-files>

# Push the branch and open a PR for Mission Control review (never self-merge)
git push -u origin implementation/SB-P-1.11-Initial-Phase-1-Catalog-Foundation
gh pr create --title "<exact phase name>" --base main
```

### 15.7 Explicit Stop Conditions for This Handoff

In addition to Section 17's general stop conditions, a future authorized run must stop and escalate to Mission Control — never guess, improvise, or proceed — if: the branch it was told to use does not match what the authorization names; the Engineering Contract, Lovable Build Prompt, or Verification Checklist on `main` is not at the exact locked Version 1.2 state this brief cites in Section 5; the authorization's stated implementation authority does not match what this brief or the Lovable Build Prompt describes for the named phase; or the requested scope includes anything this brief's Section 4 or Section 14 lists as excluded.

### 15.8 Founder Handoff Acceptance Does Not Authorize Implementation

To restate plainly: this Version 1.1 document is Mission Control accepted and locked as the approved Stage 14 Founder handoff (Section 1, Section 18) — the Founder may use it as that reference now. That acceptance, on its own, still authorizes nothing in this Section 15 beyond reading and preparing. Section 15.1's instruction text must not be pasted into Lovable, Lovable Plan Mode or Build Mode must not be entered for this mission, and no branch in Section 15.3's pattern may be created for implementation purposes, until a separate, explicit Mission Control implementation authorization exists for the specific phase — recorded, per the SB-P Mission Lifecycle and Delivery Framework, at `communication/missions/SB-P-1.11/mission-control/implementation-authorization.md` — and repository hygiene has been completed and independently verified (Section 14A).

### 15.9 General Build Sequence (Reference)

1. Build exactly the 19 commands in Section 6, and no others, using the exact locked signatures, table names, and role/privilege model already specified in the EIS and Engineering Contract.
2. Implement every boundary in Sections 8–13 of this brief exactly as stated — none of it is optional or subject to "simplification."
3. Do not implement, scaffold, or expose anything listed in Section 4 or Section 14.
4. Do not design, build, or activate any cleanup/purge mechanism for `catalog_link_preview_tokens` — reaching purge eligibility (Section 12) is the limit of this scope.
5. Produce the evidence named in Section 16 as the implementation proceeds, not after the fact from memory.
6. Stop and escalate per Section 17 and Section 15.7 rather than guessing at any ambiguity.

---

## 16. Required Verification Evidence

Every included command and every major boundary maps to the locked Verification Checklist Version 1.2 or to a named accepted readiness disposition. No new verification standard is introduced here, and no live verification has occurred as of this brief.

| Scope Item | Required Evidence | Checklist or Report Reference | Pass Condition | Stop Condition |
|---|---|---|---|---|
| Repository sync, branch, and locked-source integrity | Fresh-sync branch; byte-identical locked documents | CHK-REPO-001–003, CHK-LOCK-001–005, CHK-FILES-001–002 | Every locked document byte-identical; changed-file list matches authorization exactly | Any locked document differs, or an unauthorized file changed |
| Build Now / exclusion boundary | Implemented scope is a strict subset of Build Now; no Build Later/Add-on/Reject item present | CHK-SCOPE-001–002 | No excluded capability (Section 4, Section 14) present anywhere in the diff | Any excluded capability found |
| Owner-only enforcement | Every command's auth check is exactly `businesses.owner_id = auth.uid()` | CHK-P1-001–005 | No permission flag, role, or substitute engine queried or simulated | Any Manager/Employee access path found |
| Exact nineteen-command Catalog boundary, phase-scoped | Only the 19 named commands implemented for this phase; no alternate name or substitute RPC; no combined numeric total asserted | CHK-BE-004, CHK-BE-004A, CHK-BE-005 | Command names/signatures match Section 6 exactly; scheduled-price/channel/scheduler/parser-support functions remain separately classified, never counted as part of the nineteen | Any renamed, combined, split, or invented command; any framing that treats a broader function group as part of the nineteen |
| Generated SKU, uniqueness, and one-canonical-rule-across-channels | SKU-generation-when-absent behavior; collision/uniqueness; merchant-supplied SKU preservation; identical rule regardless of channel | CHK-FWR-003, CHK-FWR-004, CHK-FWR-005, CHK-FWR-006 | Product creation without a supplied SKU results in a generated, business-scoped, unique SKU; a supplied SKU is preserved unchanged; no channel-specific SKU logic exists | Any generated SKU that collides, encodes sensitive information, or is produced by channel-specific logic; any merchant-supplied SKU silently overwritten |
| Three-layer identity model and privilege scoping | Role/grant inspection per EIS §7 | CHK-BE-001–003, CHK-BE-006 (full-package check deferred until every phase is authorized) | Each of the eight command-group owners holds only its own table privileges | Any role holds cross-group DML |
| Command-only writes | No direct client DML on any protected table | CHK-CMD-001–002 | Direct client `INSERT`/`UPDATE`/`DELETE` attempt fails | Any protected table grants client DML |
| Business isolation | RLS presence; cross-business idempotency-key probe | CHK-ISO-001–003 | Cross-business probe indistinguishable from nonexistent record | Any cross-business disclosure |
| Catalog/inventory separation | No catalog write path touches `inventory_items`/`inventory_movements`; stock status derived only from link presence | CHK-SEP-001–003 | No direct write found; no separate editable "type" field exists | Any violation found |
| Normalized uniqueness and archived-identity reservation | Schema inspection of the four `_normalized` columns and their composite constraints | CHK-UX-002; Section 8 of this brief | Archived rows continue to occupy their uniqueness slot; no partial active-row-only index exists | Any partial index or non-normalized constraint found |
| Price/tax/cost/D-047 integrity | Append-only event tables; D-047 tenure-bounded predicate | CHK-PTC-001–002, CHK-D047-001 | History immutable; tenure-bounded reading enforced exactly as locked | Any mutable history row or misapplied predicate |
| D-068 safeguard (assignment, replacement, AND removal) | Nine-step commit model; all four failure modes leave state unchanged; `remove_catalog_inventory_link` requires the same preceding preview and same-actor confirmation as `assign_or_replace_catalog_inventory_link` | CHK-D068-001–002, CHK-ACT-001 (extended to the preview-token flow) | Cancellation/incomplete confirmation/validation failure/save failure each leave product, link, unit, and price unchanged, for assignment, replacement, and removal alike; removal never commits without a valid, unexpired, same-actor preview token | Any partial-state leak on any failure path; any removal that commits without a valid preceding preview |
| Same-actor confirmation (extended to preview tokens) | Actor-mismatch rejection test | CHK-ACT-001 (extended per `report1.29.md`/`report1.30.md` Item 5) | Mismatched actor unconditionally rejected `ACTOR_MISMATCH` | Any delegated-confirmation path found |
| Idempotency, audit, stale-state, rejection durability | Direct-query verification after a rejected call | CHK-IDEM-001–002, CHK-AUD-001, CHK-STALE-001, CHK-REJ-001, CHK-UNK-001 | Two-terminal-state model; full provenance shape present; rejections durably persist | Any missing provenance field or lost rejection record |
| Token validity, retention, and minimization | Schema/behavior inspection against Section 12 | `communication/live/report1.31.md`, `report1.32.md` | 15-minute validity; 90-day/30-day retention; immediate consumption-time redaction; no automated purge claimed | Any deviation from the fixed parameters, or any claim of active automated purge |
| `system_errors` deferral | Absence of any catalog-specific error table; presence of idempotency-key-based observability only | `communication/live/report1.27.md` (Matter 1), `report1.28.md` | No `system_errors` table or substitute created | Any catalog-specific error table invented |
| Deterministic matching only | Absence of `pg_trgm`/GIN/similarity code paths | Section 11 of this brief; EIS §24 (open, non-blocking) | Only exact/normalized comparisons present | Any similarity, fuzzy, phonetic, or AI-normalization code path found |
| Multilingual preservation | Round-trip check of English/Malayalam/Manglish display values | CHK-UX-001–002 | Stored display wording unchanged by normalization | Any silent rename/translate/merge |
| Employee-restriction forward-compatibility | Read-path inspection for protected fields | CHK-EMP-001 | Reference cost/margin never exposed outside a permission-aware path | Any direct-table exposure of protected fields |
| Merchant-safe messaging | Rejection-message content review | CHK-MSG-001–002 | No raw error code, stack trace, or constraint name shown to the merchant | Any raw internal detail exposed |
| POS boundary | Diff inspection for POS code | CHK-POS-001 | No POS integration or custom POS modification present | Any POS-adjacent code found |
| Tests and quality gate | Automated coverage; Markdown Quality Gate | CHK-TEST-001–002 | Coverage matches EIS §21/Engineering Contract §26 scope; quality gate passes | Any missing coverage or failed gate |
| Supabase/migration/RLS hygiene | Migration naming; RLS-before-access; advisor scan | CHK-SUPA-001–003 | Clean migration apply; RLS enabled before any grant; no new critical advisory | Any RLS gap or unresolved critical finding |
| Production verification | Live check at `smartbusiness.teamlips.com` | CHK-PROD-001 | Authorized functionality live and correct | Any mismatch between reviewed and deployed implementation |

---

## 17. Stop Conditions and Escalation Rules

A future authorized implementation run must stop and escalate to Mission Control — never guess, improvise, or silently narrow/expand scope — if:

- a UI or workflow need cannot be satisfied by one of the 19 named commands;
- any locked source appears to conflict with another;
- the deployed environment's actual state contradicts a fact this brief assumes (e.g., a route, table, or dependency this brief describes as absent is found to already exist, or vice versa);
- completing a requirement would require inventing a command, table, index, or mechanism not already named in a locked source or this brief;
- a database-environment fact needed to proceed (for example, anything about the future scheduler's environment) is required but unavailable — this brief does not resolve any scheduler-environment fact, since the scheduler itself is out of scope;
- anything would require treating token-cleanup eligibility as if it were active automated purge;
- anything would require weakening Owner-only enforcement, command-only writes, business isolation, or the D-068 safeguard "just for this one case."

---

## 18. Authority Status

```text
FOUNDER LOVABLE BRIEF STATUS:
LOCKED — MISSION CONTROL ACCEPTED

MISSION CONTROL ACCEPTANCE:
GRANTED

DOCUMENT LOCK:
ACTIVE

STAGE 14 FOUNDER HANDOFF AUTHORITY:
GRANTED

PASTE-INTO-LOVABLE AUTHORITY:
NONE

LOVABLE PLAN MODE AUTHORITY:
NONE

LOVABLE BUILD MODE AUTHORITY:
NONE

IMPLEMENTATION AUTHORITY:
NONE

PUBLISHING OR DEPLOYMENT AUTHORITY:
NONE
```

This Version 1.1 document is **Mission Control accepted and locked** as the current approved Stage 14 Founder-facing handoff document for SB-P-1.11's 19-command initial Phase 1 scope, following Mission Control's Stage 14 review of this exact document (`communication/live/instruction1.125.md`, SB-P-1.11-GC-29). Stage 14 Founder Handoff Authority is `GRANTED`: the Founder may rely on and receive this document as the approved handoff, review the exact future Lovable instruction and required files, and use it to prepare for the next governance prerequisite and later implementation-authorization decision. This acceptance is deliberately narrow and does **not** authorize, and must not be treated as authorizing, pasting this brief or the Lovable Build Prompt into Lovable, Lovable Plan Mode, Lovable Build Mode, implementation of any kind, publishing, deployment, or consumption of any Lovable credit — each of those remains `NONE` above regardless of this document's own lock status. A separate, explicit Mission Control implementation authorization — recorded at `communication/missions/SB-P-1.11/mission-control/implementation-authorization.md` per the SB-P Mission Lifecycle and Delivery Framework — and independently verified completion of repository hygiene both remain required before any of that may happen. This brief is intended to restate locked requirements and accepted Mission Control dispositions. It does not have authority to create new Product Truth or implementation requirements. Any inconsistency with a locked source must be resolved in favor of the locked source.

---

## 19. Change History

**Version 1.0 — historical, accepted and locked (preserved, superseded by Version 1.1's current status above).**

Prepared under `communication/live/instruction1.33.md`; refined per `communication/live/instruction1.34.md`, resolving Mission Control findings FLB-001 through FLB-004; accepted and locked per `communication/live/instruction1.35.md`, recording `FOUNDER LOVABLE BRIEF STATUS: LOCKED — MISSION CONTROL ACCEPTED`, `MISSION CONTROL ACCEPTANCE: GRANTED`, `DOCUMENT LOCK: ACTIVE`. Version 1.0 restated the then-current locked package: Product Blueprint, EIS Version 2.2, Engineering Contract Version 1.1, Lovable Build Prompt Version 1.1, Verification Checklist Version 1.1 — all `LOCKED` at that time — and the accepted readiness reports `report1.27.md` through `report1.32.md`. Version 1.0's own command-surface framing described the initial Phase 1 scope as "19 of the 28 locked commands" / "19 of the 21 Phase 1 commands," language later found stale and superseded once the broader package reconciliation chain (GC-22 through GC-27) established the precise nineteen-public-Catalog-command boundary with scheduled-price, channel/pending-action, scheduler, and parser-support functions classified separately. Version 1.0's paste-into-Lovable, Lovable Plan Mode, Lovable Build Mode, implementation, and publishing/deployment authorities were, and remain in this historical record, all `NONE` — Version 1.0's lock never granted use authority, only document acceptance.

**Version 1.1 — this reconciliation, DRAFT, prepared under `communication/live/instruction1.124.md` (SB-P-1.11-GC-28).**

Reconciles the Founder Lovable Brief against the current locked SB-P-1.11 Version 1.2 implementation package (`communication/live/instruction1.122.md`, SB-P-1.11-GC-26), the GC-27-amended Founder Product Decision Record D-023/D-024 (`communication/live/instruction1.123.md`), the Founder Workflow Reconciliation Record's FWR-001 through FWR-005, and the canonical Lambda Parser EIS (`communication/live/report1.126.md`). Does **not** carry Version 1.0's lock authority forward — Version 1.1 is `DRAFT — MISSION CONTROL REVIEW REQUIRED`, `MISSION CONTROL ACCEPTANCE: PENDING`, `DOCUMENT LOCK: NOT ACTIVE`, with every use-authority field (`PASTE-INTO-LOVABLE`, `LOVABLE PLAN MODE`, `LOVABLE BUILD MODE`, `IMPLEMENTATION`, `PUBLISHING OR DEPLOYMENT`) explicitly `NONE`. Changes in this revision:

- Updated the authority hierarchy (Section 5) to reference D-023/D-024 as GC-27-amended, the Founder Workflow Reconciliation Record, the canonical Lambda Parser EIS, and Engineering Contract/Lovable Build Prompt/Verification Checklist Version 1.2 `LOCKED — MISSION CONTROL ACCEPTED`, replacing every Version 1.1-package or Version 2.2-parser-architecture reference Version 1.0 carried.
- Removed every stale combined-command framing ("19 of the 28 locked commands," "19 of the 21 Phase 1 commands," "the locked, complete 28-command surface," "remaining 9 commands of the locked 28," "Exact 28-command surface") and replaced it with the current locked rule: exactly 19 public Catalog commands, no twentieth Catalog command, with scheduled-price, channel/pending-action, scheduler, and parser-support functions classified separately and no combined numeric total asserted (Section 1, Section 6, Section 10, Section 14, Section 16).
- Corrected the stale placeholder Phase 2b import architecture (`create_catalog_import_job`/`stage_catalog_import_rows`/`apply_catalog_import_valid_rows`, `catalog_import_jobs`/`catalog_import_rows`) to the reconciled reality: zero new Catalog commands, parsing externalized to the canonical Lambda Parser EIS, import-support bookkeeping in `catalog_import_batches`/`catalog_import_rows` as narrow non-Product-Truth support state (Section 8, Section 14).
- Added generated-SKU behavior (D-023 as amended, FWR-003/FWR-004) to the initial Phase 1 scope it already governs — dashboard/manual product creation and edit — without adding a new command (Section 3, Section 6, Section 7).
- Added Inventory/Opening Stock bulk onboarding, downloadable import templates, and Inventory-first orchestration (FWR-001, FWR-002, FWR-005) to Section 4 and Section 14 as locked package content correctly gated outside this initial Phase 1 dashboard scope, without collapsing them into it and without inventing new implementation detail beyond the locked package.
- Substantially expanded Section 15 into the required Stage 14 Founder handoff fields: the exact future Lovable instruction (15.1), the locked Lovable Build Prompt path (15.2), the required implementation branch/PR workflow (15.3), expected builder output and changed-file reporting (15.4), the Builder Completion Report path (15.5), only the necessary PowerShell commands (15.6), explicit handoff-specific stop conditions (15.7), and an explicit not-authorized-for-use statement (15.8) — none of which Version 1.0 contained in this form.
- Added generated-SKU verification coverage (`CHK-FWR-003` through `CHK-FWR-006`) to Section 16 and corrected the nineteen-command verification row's citations to `CHK-BE-004`/`CHK-BE-004A`/`CHK-BE-005`.
- Added this Change History section, preserving Version 1.0's original wording and disposition above without erasing it.

No new Product Truth, Founder decision, or engineering architecture was invented by this reconciliation. Repository hygiene and the Blueprint lifecycle path remain as stated in Section 14A above; neither was remediated by this mission. Status remains `DRAFT — MISSION CONTROL REVIEW REQUIRED` throughout this revision; not approved, not locked, no paste-into-Lovable, Lovable Plan Mode, Lovable Build Mode, implementation, or publishing/deployment authority.

**Version 1.1 — Stage 14 accepted and locked, under `communication/live/instruction1.125.md` (SB-P-1.11-GC-29).**

GC-28 (`communication/live/instruction1.124.md`) produced Version 1.1 as a reconciled Stage 14 review draft, corrected per Mission Control review finding MC-GC28-001 (`communication/live/report1.133.md`, Section 11A: Builder Completion Report path and branch-evidence correction). Mission Control's Stage 14 review of that corrected draft passed, recording `MC-GC28-001 — RESOLVED`, `STAGE 14 FOUNDER LOVABLE BRIEF RECONCILIATION — PASS`, and `PR #284 — APPROVED FOR HUMAN MERGE`; PR #284 was then human-merged. This GC-29 instruction accepts and locks that exact reviewed Version 1.1 content as the current approved Stage 14 Founder handoff document. Status changed from `DRAFT — MISSION CONTROL REVIEW REQUIRED` to `LOCKED — MISSION CONTROL ACCEPTED`; Mission Control Acceptance changed from `PENDING` to `GRANTED`; Document Lock changed from `NOT ACTIVE` to `ACTIVE`; a new `STAGE 14 FOUNDER HANDOFF AUTHORITY: GRANTED` field was added. `PASTE-INTO-LOVABLE AUTHORITY`, `LOVABLE PLAN MODE AUTHORITY`, `LOVABLE BUILD MODE AUTHORITY`, `IMPLEMENTATION AUTHORITY`, and `PUBLISHING OR DEPLOYMENT AUTHORITY` all remain `NONE` — this acceptance grants Founder handoff/reference use only, never implementation or Lovable use. No substantive Product Truth, architecture, workflow, or command-surface content changed in GC-29: the exact nineteen-public-Catalog-command boundary, command names/signatures, phase sequencing, the GC-27-amended D-023/D-024 treatment, FWR-001 through FWR-005 placement, D-047/D-068 safeguards, the Owner-only posture, Catalog/Inventory truth separation, the Inventory-first sequence, the canonical Lambda Parser EIS architecture, and the exact Builder Completion Report path (`docs/implementation/SB-P-1.11/lovable-build-completion-report.md`) and post-implementation status (`IMPLEMENTATION REPORTED — VERIFICATION PENDING`) are all unchanged from the GC-28/MC-GC28-001 state. Only lifecycle/status/handoff-authority wording whose truth changed because Version 1.1 is now accepted and locked was updated (front matter, Section 1, Section 15 intro and Section 15.8, Section 18, and this entry). Repository hygiene remains incomplete and mandatory before any future implementation authorization/Build; it was not remediated by this mission. The Blueprint `active/` lifecycle path remains non-blocking housekeeping and was not moved or modified. No implementation branch was created and no Builder Completion Report was produced by this mission.
