# SMART BUSINESS MISSION CONTROL

# Report 1.27 — SB-P-1.11 Phase 1 Pre-Implementation Readiness Resolution

**Mission ID:** SB-P-1.11

**Mission Name:** Product Catalog & Pricing

**Lifecycle Activity:** Phase 1 Pre-Implementation Readiness Resolution

**Executing Room:** Claude Code

**Authorizing Instruction:** `communication/live/instruction1.27.md`

**Report Type:** Read-only investigation and resolution report. No implementation, no live verification, no Lovable Build Mode use.

**Refinement Notice:** Matters 1, 3, and 4 below (and the consolidated matrix, proposed wording, and final recommendation) were corrected under `communication/live/instruction1.28.md`. See `communication/live/report1.28.md` for the refinement's own completion report and final conclusion. Matters 2 and 5 are unchanged and were not reopened.

---

## 1. Branch Name

`mission/SB-P-1.11-phase1-readiness-resolution`

---

## 2. Synchronized Base `main` SHA

`a604bb564865fdc4abc509897725414b04b4fd8f`

Confirmed via `git fetch --all --prune` followed by `git checkout main` and `git merge --ff-only origin/main` (fast-forward from `596b3d1bece909e66e1abff14d0a53c203b8c8ae`, bringing in the merged `instruction1.27.md` and the merged Verification Checklist v1.1 lock, PR #87).

---

## 3. Final Branch Commit SHA

`f163ead5eaf6cc75475cc771da9ab0a361a9a1fb`

---

## 4. Pull-Request Number and URL

PR #89 — `https://github.com/SmartBusinessv1/smart-business/pull/89`

---

## 5. Exact Files Changed

- Created: `communication/live/report1.27.md`

No other file was created, modified, renamed, moved, or deleted. No locked document, prior report, or prior instruction was touched.

---

## 6. Investigation Sources Consulted

Locked and governing sources (read-only inspection):

- `docs/phase-1-mission-blueprint/active/SB-P-1.11.md` — Product Blueprint, Sections 1–21, LOCKED (Engineering Review discovery text, "Security, Privacy, Observability, and Failure Recovery," "Multilingual Search and Normalization Feasibility," "Import Architecture and Safety Controls").
- `docs/phase-1-mission-blueprint/implementation/SB-P-1.11-EIS.md` — Version 2.2, LOCKED (Sections 1–5, 7, 10, 11, 12, 24).
- `docs/implementation/SB-P-1.11/engineering-contract.md` — Version 1.1, LOCKED — MISSION CONTROL ACCEPTED (Section 29 "Preserved EIS Parameter Dispositions").
- `docs/implementation/SB-P-1.11/lovable-build-prompt.md` — Version 1.1, LOCKED — MISSION CONTROL ACCEPTED (Sections 6, 9, 11, 13, 17, 18, 26, 27).
- `docs/implementation/SB-P-1.11/verification-checklist.md` — Version 1.1, LOCKED — MISSION CONTROL ACCEPTED (§29.1 restatement).
- `merge/active/02_Supabase_Architecture_Framework.md` — Source 02, §3.13 `public.system_errors`.
- `communication/live/instruction1.27.md` — this mission's original authorizing instruction.
- `communication/live/instruction1.28.md` — narrow refinement authorization for Matters 1, 3, and 4 (added in this refinement).

Repository evidence (direct inspection, not assumption):

- `supabase/migrations/*.sql` (all twelve migration files) — full `CREATE TABLE` inventory.
- Repository-wide text search for `system_errors`, `pg_trgm`/`trgm`/`similarity`, `index`, `UNIQUE`/constraint definitions.

No external web research was performed or required. No Lovable Plan Mode question was asked. No Lovable Build Mode credit was used.

---

## 7. Matter 1 Findings and Disposition — `system_errors` Ownership and Approved Implementation Path

**Question investigated:** Does `system_errors` exist anywhere outside the currently inspected `public` schema, which mission or layer owns it, and can Phase 1 proceed without it.

**Verified repository facts:**

- A repository-wide search for `system_errors` found it in exactly three source-of-truth locations: `merge/active/02_Supabase_Architecture_Framework.md` §3.13 (the defining source), `docs/phase-1-mission-blueprint/active/SB-P-1.11.md` (two references), and `docs/implementation/SB-P-1.11/lovable-build-prompt.md` (one reference). It does not appear in the locked EIS, the locked Engineering Contract, or the locked Verification Checklist.
- A full `CREATE TABLE` inventory across all twelve files in `supabase/migrations/` shows exactly six existing tables: `businesses`, `transactions` (two migrations), `transaction_correction_events`, `inventory_items`, `inventory_movements`, `inventory_movement_idempotency_keys`. `system_errors` does not exist in the current schema.
- The Blueprint's own Engineering Review discovery text (SB-P-1.11.md, "Approved but not-yet-implemented conceptual precedent") states directly: "the legacy Source 02 schema describes `public.employees`... `public.file_import_jobs`... `public.system_errors`... **None of these tables exist in the current migrations**," and characterizes them as "Founder-approved *conceptual* precedent for the shapes described below... not a schema to copy verbatim."
- Later in the same Blueprint document ("Security, Privacy, Observability, and Failure Recovery"), the wording shifts to: "import and write failures should be recorded through **the existing** `system_errors` table (Source 02 §3.13)." This is an internal wording imprecision within the locked Blueprint — one passage correctly reports current repository state (does not exist), the other uses "existing" loosely to mean "already Founder-approved as a concept." The two passages do not disagree on what to do (reuse one shared table, do not invent a catalog-specific error log); only the word "existing" is inaccurate.
- The locked Lovable Build Prompt §6 ("Existing-Component and Accepted-Pattern Reuse Requirements") repeats the same instruction: "reuse `system_errors` (Source 02 §3.13) for failure logging rather than inventing a catalog-specific error log."
- The locked Lovable Build Prompt §9 ("Shared Permission-Engine and Conversational-Engine Dependency Gates") is the document's own formal mechanism for naming phase-gating shared-system dependencies. It names exactly two: the permission engine and the conversational engine. `system_errors` is not named there or anywhere else as a shared-system dependency gate.
- The locked EIS's own outcome-of-record for every one of the 21 Phase 1 commands is `catalog_write_idempotency_keys.status` (EIS §5.0, §18): "the authoritative per-attempt outcome record, including rejected attempts, is `catalog_write_idempotency_keys.status`." No EIS section requires a write to `system_errors` for any Phase 1 command's correctness.

**Governing locked-source references:** Blueprint (SB-P-1.11.md) discovery text and "Security, Privacy, Observability, and Failure Recovery"; Source 02 §3.13; Lovable Build Prompt §6, §9; EIS §5.0, §18.

**Technical inference (labeled):** Because Phase 1's command-level outcome tracking is fully self-contained in the idempotency-key mechanism and standard Postgres exception propagation, `system_errors` is not required for any of the 19 initial Phase 1 commands (Section 10 below) to function correctly or completely. It is a small, generic, cross-mission reliability-monitoring table (API failures, webhook errors, external service failures, severity, resolution status, displayed in super-admin) that no mission has yet built. Since it is explicitly framed as shared, non-catalog-specific infrastructure, building it under SB-P-1.11 specifically would risk exactly the kind of catalog-scoped, single-mission ownership of a cross-mission capability that Source 12 §13's "Single Implementation Rule" and the Blueprint's own reuse-before-duplication principle caution against for the permission engine and conversational engine. This is an engineering inference, not a locked requirement: the locked sources do not state which mission must build it or when — only that it should not be duplicated catalog-specifically.

**Mission Control disposition (fixed per `instruction1.28.md` §3.1):**

```text
SYSTEM_ERRORS DISPOSITION:

DEFER FROM INITIAL PHASE 1.

Do not create system_errors under SB-P-1.11 initial Phase 1.
Do not invent a catalog-specific error table.
Do not reference a nonexistent system_errors table at runtime.

For initial Phase 1, use the locked catalog_write_idempotency_keys
outcome-of-record, standard transaction rollback, structured database
errors, and existing repository logging only.

The generic shared system_errors capability requires a separate
shared-infrastructure mission before cross-mission reuse.
```

**Recommended disposition:**

```text
RESOLVED — SEPARATE PREREQUISITE MISSION REQUIRED FOR SHARED SYSTEM_ERRORS,
BUT NOT REQUIRED BEFORE INITIAL PHASE 1
```

The table does not exist, is not catalog-specific, and is not named by any locked source as a Phase 1 shared-system dependency gate. Initial Phase 1 does not need it: `catalog_write_idempotency_keys.status` is already the EIS's own outcome-of-record, standard transaction rollback already handles unexpected-failure recovery (EIS §3, "only genuinely unexpected errors trigger an exception-driven full rollback"), and structured database errors plus existing repository logging cover the remaining observability surface without inventing anything new. Building the generic, cross-mission `system_errors` table is out of scope for SB-P-1.11 initial Phase 1 and belongs to a separate shared-infrastructure mission, consistent with how the permission engine and conversational engine were kept out of this mission's build scope.

**Blocks initial Phase 1?** No. Initial Phase 1 must not create `system_errors`, must not invent a catalog-specific substitute, and must not reference a nonexistent `system_errors` table at runtime — all three are satisfied by relying solely on the idempotency-key outcome-of-record, transaction rollback, structured database errors, and existing repository logging.

**Exact next authority required if unresolved:** None to authorize initial Phase 1. A separate, future Mission Control instruction is required to open a shared-infrastructure mission for the generic `system_errors` capability; this refinement does not create that mission.

---

## 8. Matter 2 Findings and Disposition — Phase 1 `pg_trgm` Similarity Threshold

**Question investigated:** Do locked sources already establish the similarity threshold Phase 1 catalog search needs, and if not, what is the smallest decision required.

**Verified repository facts:**

- EIS §24 "Engineering Questions — Revised," item 1: "Exact `pg_trgm` similarity threshold and algorithm sufficiency" — `SPECIALIST REVIEW REQUIRED`, "Unchanged from v2.0."
- EIS §24 "Blocking Issues": "**None.** Question 7 above is a narrow, environment-verification item... the open question is only which specific trigger mechanism... does not change the layered architecture itself." This statement's "None" covers the entire Engineering Questions table, items 1–7, including item 1.
- Engineering Contract §29.1 restates item 1 identically as `SPECIALIST REVIEW REQUIRED` and adds: "None of these items is a blocking design gap (EIS §24 'Blocking Issues': none)."
- A repository-wide search of the Founder Product Decision Record (D-001–D-068) for `trgm`, `similarity`, or `threshold` returns no matches — no Founder decision sets or references a numeric threshold.
- The Blueprint's "Multilingual Search and Normalization Feasibility" section distinguishes two tiers: **exact normalization** (whitespace, case) — "reliably enforceable as a database-level constraint," and **uncertain-match suggestion** — "a materially harder problem... the Blueprint's own language — 'where matching is reliable,' 'may suggest' — already anticipates and permits a bounded, best-effort approach... This is a non-blocking scope note for the EIS, not a blocker."
- `catalog_products_search` is one of the 21 locked Phase 1 commands (EIS role table, line 448: assigned to `catalog_read_executor`), but neither the EIS nor the Blueprint specifies that its deterministic exact-match behavior depends on `pg_trgm` being tuned first.

**Governing locked-source references:** EIS §24 (items 1 and "Blocking Issues"); Engineering Contract §29.1; Blueprint "Multilingual Search and Normalization Feasibility"; Founder Product Decision Record D-001–D-068 (searched, silent on this parameter).

**Technical inference (labeled):** Deterministic exact/normalized matching is mandatory and independent of any similarity threshold. Similarity-based "possible match" suggestion is explicitly bounded, best-effort, and non-authoritative per the Blueprint's own language, so `catalog_products_search` can be built and can pass Phase 1 correctness requirements using deterministic matching alone, with similarity-assisted suggestion either omitted from the initial build or shipped behind a clearly-provisional default subject to later tuning. This is an engineering inference from the Blueprint's own "may suggest" / "where matching is reliable" language, not an invented threshold value — no numeric value is proposed here.

**Recommended disposition:**

```text
RESOLVED — NOT REQUIRED FOR INITIAL PHASE 1 AUTHORIZATION
```

**Blocks initial Phase 1?** No — confirmed non-blocking by both EIS §24 and Engineering Contract §29.1 directly.

**Exact next authority required if unresolved:** A database/search specialist recommendation to finalize the exact numeric threshold and algorithm sufficiency, needed only before enabling similarity-assisted "possible match" suggestions in production — not needed to authorize or build initial Phase 1. This is a specialist recommendation, not a Founder decision, since it does not change merchant-facing product behavior (the Blueprint already authorizes best-effort, disclosed-as-uncertain suggestions at any threshold).

---

## 9. Matter 3 Findings and Disposition — Final Phase 1 Index Set

**Question investigated:** Can the minimum index set for Phase 1's Owner-only core catalogue be fixed from locked sources, and how do integrity-enforcing, query-supporting, later-phase, scheduler, and runtime-evidence-dependent indexes distinguish.

**Verified repository facts:**

- EIS §24 item 3: "Final index set for every new table, including `catalog_channel_confirmation_receipts`" — `SPECIALIST REVIEW REQUIRED`, covered by the same "Blocking Issues: None" statement referenced in Matter 2.
- The word "index" appears exactly once in the entire locked EIS (§24 item 3 itself). The EIS is explicitly a Version-2.2 delta document over an unpreserved "Version 2.0" ("Unless stated otherwise below, every subsection is unchanged from Version 2.0," §5): Sections 5.1–5.2 and 5.11–5.15 are marked "Unchanged from Version 2.0" without restating their field lists, and no standalone `SB-P-1.11-EIS` Version 2.0 document exists in the repository as an independently retrievable locked source — that content survives only inside prior mission reports (process evidence), not as a locked authority.
- Despite that, the currently locked EIS text directly specifies four integrity-enforcing `UNIQUE` constraints by name: `catalog_pending_price_schedules` — `UNIQUE (product_id)` (§5, "unchanged from Version 2.0... one of the findings `report1.12.md` §7 explicitly accepted as resolved"); `catalog_channel_pending_actions` — `UNIQUE (channel, originating_channel_event_id)` (§5); `catalog_channel_confirmation_receipts` — `UNIQUE (channel, confirming_channel_event_id)` (§5.10, new in this revision); `catalog_write_idempotency_keys` — `UNIQUE (business_id, operation, idempotency_key)` (§11, evidenced by its `ON CONFLICT (business_id, operation, idempotency_key)` claiming clause).
- The locked Lovable Build Prompt §13 independently mandates, as `[MANDATORY]`: "Apply the existing `business_id`-plus-`owner_id`-subquery RLS pattern and composite `UNIQUE (id, business_id)` FK-integrity pattern to every new table (Section 6)" — a repository-wide reuse rule, not a per-table specialist judgment call.
- The Blueprint's "Multilingual Search and Normalization Feasibility" section requires "a normalized/generated value used for the business-scoped uniqueness check" for product name, SKU, barcode, and category — an integrity constraint the Blueprint calls "reliably enforceable as a database-level constraint," distinct from the open similarity-threshold question in Matter 2.
- The scheduler's own run model (EIS §12) requires the candidate-list function to fetch "bounded, `effective_at ASC`, never re-queried mid-run" — implying a query-supporting index on the pending-schedule table's due-date column, but this index exists to serve the scheduler commands Matter 4 addresses, not the 21 Phase 1 commands.

**Governing locked-source references:** EIS §3, §5, §5.10, §7, §11, §12, §24; Engineering Contract §29.1; Lovable Build Prompt §6, §13; Blueprint §10 "Business Rules" (Rules 8, 9), "Proposed Architecture and Bounded Components," "Multilingual Search and Normalization Feasibility."

**Technical inference (labeled):** Five categories separate cleanly from locked sources: (1) **integrity-enforcing** — named `UNIQUE` constraints, the mandatory `business_id`-plus-`owner_id` RLS/uniqueness pattern, the composite `UNIQUE (id, business_id)` FK pattern, and business-scoped normalized-uniqueness on product name/SKU/barcode/category — required now, though several exact column/expression names are not restated in currently-locked text (see matrix below); (2) **query-supporting/performance** — indexes that make search and list reads performant at scale — explicitly the deferred EIS §24 item 3, non-blocking; (3) **later-phase** — Phase 2b import/correction-queue and Phase 3 conversational-intent indexes belong to those phases' own future authorizations; (4) **scheduler** — the `effective_at`-ordered candidate-fetch index and the pending-schedule/schedule-event tables' own constraints belong to the scheduler and merchant-facing scheduling scope Matter 4 now excludes from initial Phase 1; (5) **runtime-evidence-dependent** — indexes whose value depends on real per-business row-count and query-pattern data cannot be responsibly finalized before Phase 1 has real usage.

**Exact minimum Phase 1 index matrix.** Table scope is the 19 commands Matter 4 (as refined by `instruction1.28.md` §3.3) authorizes for initial Phase 1, derived from the EIS §7 "Least-Privilege Command Authority" table's exact table privileges per command group. `catalog_pending_price_schedules`, `catalog_price_schedule_events` (merchant-facing scheduling, now excluded), `catalog_channel_pending_actions`, `catalog_channel_confirmation_receipts` (Phase 3), and `catalog_import_jobs`, `catalog_import_rows` (Phase 2b) are out of scope and excluded below. Every `id` primary-key row is a labeled inference from the repository-wide `id uuid primary key` convention (evidenced directly for `catalog_channel_confirmation_receipts`, EIS §5.10) rather than an independent restatement for that specific table, since EIS §5.1–5.2 are marked "unchanged from Version 2.0" without reproducing their field lists.

| Table | Constraint or Index Name | Exact Columns or Expression | UNIQUE or Non-Unique | Purpose | Locked-Source Basis | Initial Phase 1 or Deferred |
|---|---|---|---|---|---|---|
| `catalog_products` | Primary key (unnamed) | `id` | UNIQUE | Row identity; target of every child table's FK | Inference — repository-wide `id uuid` PK convention (EIS §5.10 example) | Initial Phase 1 |
| `catalog_products` | Composite FK-integrity constraint (unnamed) | `(id, business_id)` | UNIQUE | Cross-table FK consistency for every child event/reference table | Lovable Build Prompt §13 ("every new table") | Initial Phase 1 |
| `catalog_products` | Business-scoped name uniqueness (unnamed) | `BLOCKED — LOCKED SOURCE DOES NOT DEFINE THE EXACT IMPLEMENTATION DETAIL` | UNIQUE | Enforce Rule 8 — business-unique product name, ignoring whitespace/case differences | Blueprint §10 Business Rules, Rule 8 | Initial Phase 1 |
| `catalog_products` | Business-scoped SKU uniqueness (unnamed) | `BLOCKED — LOCKED SOURCE DOES NOT DEFINE THE EXACT IMPLEMENTATION DETAIL` | UNIQUE | Enforce Rule 9 — business-unique SKU, optional/single-valued | Blueprint §10 Business Rules, Rule 9 | Initial Phase 1 |
| `catalog_products` | Business-scoped barcode uniqueness (unnamed) | `BLOCKED — LOCKED SOURCE DOES NOT DEFINE THE EXACT IMPLEMENTATION DETAIL` | UNIQUE | Enforce Rule 9 — business-unique barcode, optional/single-valued | Blueprint §10 Business Rules, Rule 9 | Initial Phase 1 |
| `catalog_categories` | Primary key (unnamed) | `id` | UNIQUE | Row identity | Inference — repository-wide `id uuid` PK convention | Initial Phase 1 |
| `catalog_categories` | Composite FK-integrity constraint (unnamed) | `(id, business_id)` | UNIQUE | Cross-table FK consistency (referenced by `catalog_products`) | Lovable Build Prompt §13 | Initial Phase 1 |
| `catalog_categories` | Business-scoped name uniqueness (unnamed) | `BLOCKED — LOCKED SOURCE DOES NOT DEFINE THE EXACT IMPLEMENTATION DETAIL` | UNIQUE | "Flat, business-owned, normalized-unique name" | Blueprint "Proposed Architecture and Bounded Components" | Initial Phase 1 |
| `catalog_write_idempotency_keys` | Claim-uniqueness constraint (unnamed) | `(business_id, operation, idempotency_key)` | UNIQUE | Idempotent claim/outcome-of-record for every command call | EIS §11 (`ON CONFLICT (business_id, operation, idempotency_key)`) | Initial Phase 1 |
| `catalog_write_idempotency_keys` | Primary key (unnamed) | `id` | UNIQUE | Row identity | Inference — repository-wide `id uuid` PK convention | Initial Phase 1 |
| `catalog_selling_price_events` | Primary key (unnamed) | `id` | UNIQUE | Row identity | Inference — repository-wide `id uuid` PK convention | Initial Phase 1 |
| `catalog_selling_price_events` | Composite FK-integrity constraint (unnamed) | `(id, business_id)` | UNIQUE | Cross-table FK consistency | Lovable Build Prompt §13 | Initial Phase 1 |
| `catalog_tax_events` | Primary key (unnamed) | `id` | UNIQUE | Row identity | Inference — repository-wide `id uuid` PK convention | Initial Phase 1 |
| `catalog_tax_events` | Composite FK-integrity constraint (unnamed) | `(id, business_id)` | UNIQUE | Cross-table FK consistency | Lovable Build Prompt §13 | Initial Phase 1 |
| `business_tax_settings` | Singleton/uniqueness shape (unnamed) | `BLOCKED — LOCKED SOURCE DOES NOT DEFINE THE EXACT IMPLEMENTATION DETAIL` | UNIQUE | Rule 17 implies one business-wide tax-mode setting; exact PK/unique mechanism not given | Blueprint §10 Business Rules, Rule 17; EIS §7 (`catalog_tax_executor` grant) | Initial Phase 1 |
| `catalog_reference_cost_events` | Primary key (unnamed) | `id` | UNIQUE | Row identity | Inference — repository-wide `id uuid` PK convention | Initial Phase 1 |
| `catalog_reference_cost_events` | Composite FK-integrity constraint (unnamed) | `(id, business_id)` | UNIQUE | Cross-table FK consistency | Lovable Build Prompt §13 | Initial Phase 1 |
| `catalog_link_preview_tokens` | Primary key (unnamed) | `id` | UNIQUE | Row identity | Inference — repository-wide `id uuid` PK convention | Initial Phase 1 |
| `catalog_link_preview_tokens` | Composite FK-integrity constraint (unnamed) | `(id, business_id)` | UNIQUE | Cross-table FK consistency | Lovable Build Prompt §13 | Initial Phase 1 |
| `catalog_link_preview_tokens` | Single-use token uniqueness (unnamed) | `BLOCKED — LOCKED SOURCE DOES NOT DEFINE THE EXACT IMPLEMENTATION DETAIL` | UNIQUE | D-068 single-use token binding the exact reviewed state | Engineering Contract §12; EIS §10 | Initial Phase 1 |
| `catalog_product_link_events` | Primary key (unnamed) | `id` | UNIQUE | Row identity | Inference — repository-wide `id uuid` PK convention | Initial Phase 1 |
| `catalog_product_link_events` | Composite FK-integrity constraint (unnamed) | `(id, business_id)` | UNIQUE | Cross-table FK consistency | Lovable Build Prompt §13 | Initial Phase 1 |
| `catalog_audit_events` | Primary key (unnamed) | `id` | UNIQUE | Row identity | Inference — repository-wide `id uuid` PK convention | Initial Phase 1 |
| `catalog_audit_events` | Composite FK-integrity constraint (unnamed) | `(id, business_id)` | UNIQUE | Cross-table FK consistency | Lovable Build Prompt §13 | Initial Phase 1 |
| `catalog_deletion_records` | Primary key (unnamed) | `id` | UNIQUE | Row identity | Inference — repository-wide `id uuid` PK convention | Initial Phase 1 |
| `catalog_deletion_records` | Composite FK-integrity constraint (unnamed) | `(id, business_id)` | UNIQUE | Cross-table FK consistency; minimal deletion audit record (Rule 22) | Lovable Build Prompt §13; Blueprint §10 Rule 22 | Initial Phase 1 |
| `catalog_file_references` | Primary key (unnamed) | `id` | UNIQUE | Row identity | Inference — repository-wide `id uuid` PK convention | Initial Phase 1 |
| `catalog_file_references` | Composite FK-integrity constraint (unnamed) | `(id, business_id)` | UNIQUE | Cross-table FK consistency | Lovable Build Prompt §13 | Initial Phase 1 |
| `catalog_pending_price_schedules` | Pending-schedule uniqueness (unnamed) | `(product_id)` | UNIQUE | At most one pending scheduled price per product | EIS §5 (unchanged from v2.0, `report1.12.md` §7 accepted) | Deferred — merchant-facing scheduling excluded (Matter 4) |
| `catalog_price_schedule_events` | Not enumerated | — | — | Scheduled-price event ledger | EIS §5.3 | Deferred — merchant-facing scheduling excluded (Matter 4) |
| `catalog_channel_pending_actions` | Initiating-message dedup (unnamed) | `(channel, originating_channel_event_id)` | UNIQUE | Deduplicate initiating inbound channel message | EIS §5 | Deferred — Phase 3 conversational-engine gate |
| `catalog_channel_confirmation_receipts` | Confirming-message dedup (unnamed) | `(channel, confirming_channel_event_id)` | UNIQUE | Deduplicate confirming inbound channel message | EIS §5.10 | Deferred — Phase 3 conversational-engine gate |
| `catalog_import_jobs`, `catalog_import_rows` | Not enumerated | — | — | Import job/row tracking | EIS §7 (`catalog_import_executor` grant) | Deferred — Phase 2b |

Not included above: query-supporting/performance indexes (e.g., a `business_id`-plus-lifecycle-status lookup index, any `pg_trgm`/GIN index) are deliberately not named, because naming a specific index definition not given by locked sources would itself be an invented object — these remain EIS §24 item 3's open, non-blocking, specialist-review item. Append-only immutability on every dedicated event table above is enforced by an `UPDATE`/`DELETE`-rejecting trigger (EIS §3; Blueprint, mirroring `inventory_movements`), which is a trigger, not a unique constraint or index, and is noted here for completeness rather than given a matrix row.

**Recommended disposition:**

```text
PARTIALLY RESOLVED — NAMED MATRIX DETAILS REQUIRE DATABASE SPECIALIST REVIEW
```

The matrix establishes every integrity-enforcing constraint's existence, table, purpose, and locked-source basis for all in-scope initial Phase 1 tables, and gives exact columns for the constraints locked sources state explicitly (`catalog_write_idempotency_keys`, the composite `UNIQUE (id, business_id)` pattern). It cannot state a fully "resolved" disposition because six specific cells — the exact normalization column/expression for product name, SKU, barcode, and category (four cells, one per field), the single-use token column on `catalog_link_preview_tokens` (one cell), and the exact singleton shape of `business_tax_settings` (one cell) — are not defined by any currently-locked, independently retrievable source text, and this report does not invent them. Query-supporting performance indexes remain separately, explicitly deferred and are not counted as unresolved matrix gaps, since EIS §24 item 3 already defers them non-blockingly.

**Blocks initial Phase 1?** No — every `BLOCKED` cell names a database-implementation detail (an exact expression or column name) within a constraint whose existence, table, and purpose are already fixed by locked sources; none represents a missing decision about whether the constraint exists. A specialist can supply the exact expression during initial Phase 1 implementation without requiring a new product or Mission Control decision.

**Exact next authority required if unresolved:** A database specialist to finalize the exact normalization expression (e.g., generated column vs. functional unique index) for product name/SKU/barcode/`catalog_categories`.name, the exact single-use token column on `catalog_link_preview_tokens`, and the exact singleton-enforcement mechanism for `business_tax_settings` — needed during initial Phase 1 implementation itself (these are integrity-enforcing, not deferred), but not before initial Phase 1 is authorized. Separately, query-supporting performance indexes require the same specialist review already tracked as non-blocking in Engineering Contract §29.1.

---

## 10. Matter 4 Findings and Disposition — Initial Phase 1 Scheduler and Merchant-Facing Scheduling Exclusion

**Question investigated:** Should the initial Phase 1 implementation authorization explicitly exclude the scheduler commands, worker, service identity, scheduled-runtime activation, and — per Mission Control's refinement (`instruction1.28.md` §3.3) — the merchant-facing scheduling controls themselves, and does doing so break the remaining Phase 1 scope or alter the 28-command surface.

**Verified repository facts:**

- The locked Lovable Build Prompt §11 already separates the command surface into five named groups, one of which is: "**Environment-gated scheduler commands:** `list_due_catalog_price_schedule_candidates`, `activate_catalog_price_schedule` — buildable only when the Section 18 environment-verification gate is satisfied *and* scheduler scope is explicitly included in the specific implementation authorization, **independent of which other Phase 1 commands are already authorized**." This is locked text, not a new decision — the scheduler is already architected as separately authorizable.
- Lovable Build Prompt §7's phase table itself marks Phase 1's scheduled-price activation as "(environment-gated separately from the rest of Phase 1 — Section 11, Section 18)."
- Lovable Build Prompt §18 confirms the scheduler is two ordinary `FUNCTION`s invoked by an external, genuinely `LOGIN`-capable service (`catalog_scheduler_service`), architecturally independent of the 21 Phase 1 dashboard-CRUD commands' execution identities (EIS §7 — separate command-group owner `catalog_scheduler_executor`, separate from the eight Phase 1 command-group owners).
- The 28-command surface itself (EIS §16; Lovable Build Prompt §11) is fixed regardless of which commands a given authorization actually builds: "The complete surface remains authoritative regardless of phase — only *execution* is phase-scoped." Excluding commands from an initial authorization changes nothing about the locked surface count or names.
- Of the 21 Phase 1 commands, two create/cancel scheduled prices without activating them: `schedule_catalog_selling_price` and `cancel_scheduled_catalog_selling_price`. This report's original analysis (prior to this refinement) treated these two as remaining authorized, on the reasoning that a merchant could schedule or cancel a future price even though it would not auto-activate. Mission Control's refinement corrects this: leaving schedule-creation and cancellation controls active in a build that cannot activate them would let a merchant create a future-price schedule that visually appears capable of automatic activation but silently is not, which is a merchant-facing correctness problem, not merely an inert-but-harmless gap. `instruction1.28.md` §3.3 therefore excludes the merchant-facing scheduling controls themselves from initial Phase 1, not only the scheduler worker.
- EIS §24 "Blocking Issues: None" explicitly covers items 4 (scheduler run interval/lag budget) and 7 (Edge Function/`pg_net` availability) as non-blocking design gaps.

**Governing locked-source references:** Lovable Build Prompt §7, §11, §18; EIS §7, §12, §24; Engineering Contract §29.1; `instruction1.28.md` §3.3.

**Technical inference (labeled):** The scheduler-architecture separation itself is directly settled by locked text, not inference. The merchant-facing-scheduling-disablement consequence is Mission Control's own explicit refinement instruction, not an inference this report originates. The only inference offered is the practical scope count: excluding `schedule_catalog_selling_price`, `cancel_scheduled_catalog_selling_price`, `list_due_catalog_price_schedule_candidates`, and `activate_catalog_price_schedule` leaves **19** of the 21 Phase 1 commands authorized for initial Phase 1 (the full 21 minus these two merchant-facing scheduling commands; the two scheduler-worker commands were never among the 21 Phase 1-group commands to begin with — they are their own "Environment-gated scheduler commands" group per Lovable Build Prompt §11).

**Recommended disposition:**

```text
RESOLVED — EXCLUDE SCHEDULER AND MERCHANT-FACING SCHEDULING FROM INITIAL PHASE 1
```

**Blocks initial Phase 1?** No — excluding the scheduler and merchant-facing scheduling controls does not break the remaining 19 Phase 1 commands and does not alter the locked 28-command surface, which is preserved in full as future authority; this exclusion is a Mission-Control-directed scope narrowing, not a locked-source conflict.

**Exact next authority required if unresolved:** None to resolve this matter itself. A future, separate Mission Control instruction remains required before the scheduler and merchant-facing scheduling scope may ever be built, gated on the EIS §24 item 7 environment-verification step (confirming Supabase Scheduled Edge Function or `pg_cron`+`pg_net` availability in the deployed environment).

---

## 11. Matter 5 Findings and Disposition — Stale Lovable Build Prompt §26 Lifecycle Wording Supersession

**Question investigated:** Does the later Verification Checklist lock record supersede only the stale lifecycle statement in Lovable Build Prompt §26, without touching any substantive Build Prompt obligation, and what exact supersession statement should appear in a future document.

**Verified repository facts:**

- Lovable Build Prompt §26 (Version 1.1, LOCKED, unchanged, not modified by this mission) states: "The Verification Checklist remains unauthorized. The Stage 12 Initial Implementation Package remains incomplete until the Verification Checklist also exists and is locked." This was accurate when Version 1.1 was locked under `instruction1.23.md`, before the Verification Checklist existed.
- The Verification Checklist (`docs/implementation/SB-P-1.11/verification-checklist.md`) was subsequently created (`instruction1.24.md`), refined (`instruction1.25.md`), and locked at Version 1.1 (`instruction1.26.md`, `communication/live/report1.26.md`, PR #87 — merged into `main` prior to this mission's sync).
- `instruction1.27.md` §2 itself, the authorizing instruction for this mission, independently confirms: "The Stage 12 three-document Initial Implementation Package is complete and locked."
- No other statement in Lovable Build Prompt §26 has become inaccurate: "Acceptance and lock do not authorize pasting it into Lovable and do not authorize implementation," "A separately authorized Founder Lovable Brief must exist," and "A separate, explicit Mission Control instruction must authorize implementation of a specific named phase" all remain true and unmet as of this report — confirmed by this mission's own Authority Status section (`instruction1.27.md` §10): `FOUNDER LOVABLE BRIEF: NOT AUTHORIZED`, `IMPLEMENTATION AUTHORITY: NONE`.

**Governing locked-source references:** Lovable Build Prompt §26 (unchanged); `communication/live/report1.26.md`; `communication/live/instruction1.27.md` §2, §10.

**Technical inference (labeled):** None required — this is a direct factual comparison between a locked document's lifecycle statement and a later, independently confirmed lock record, not an engineering judgment call.

**Recommended disposition:**

```text
RESOLVED — LATER LOCK RECORD SUPERSEDES LIFECYCLE WORDING ONLY
```

**Blocks initial Phase 1?** No. This matter does not block anything; resolving it removes a stale, blocker-sounding statement from future readiness reasoning. It does not grant any new authority — implementation, Founder Lovable Brief, and paste-into-Lovable authority all remain exactly as unauthorized as before.

**Exact next authority required if unresolved:** None — already resolved by the existing lock record. The only remaining step is including the exact supersession wording (Section 13 below) in the next Founder Lovable Brief or implementation authorization document; this does not require modifying the locked Lovable Build Prompt itself, which this mission has not touched.

---

## 12. Consolidated Phase 1 Readiness Matrix

| Matter | Verified State | Recommended Disposition | Blocks Initial Phase 1? | Further Authority Required |
|---|---|---|---|---|
| 1. `system_errors` ownership | Does not exist in current migrations; Founder-approved conceptual precedent (Source 02 §3.13), not catalog-specific, not named as a shared-system dependency gate, not required by any EIS command's outcome-of-record; initial Phase 1 uses `catalog_write_idempotency_keys`, transaction rollback, structured database errors, and existing repository logging only | `RESOLVED — SEPARATE PREREQUISITE MISSION REQUIRED FOR SHARED SYSTEM_ERRORS, BUT NOT REQUIRED BEFORE INITIAL PHASE 1` | No | Separate, future Mission Control instruction to open a shared-infrastructure mission for `system_errors`; not required to authorize initial Phase 1 |
| 2. `pg_trgm` similarity threshold | `SPECIALIST REVIEW REQUIRED` in locked EIS §24 and Engineering Contract §29.1, explicitly non-blocking; no Founder decision sets a value; deterministic exact/normalized matching only for initial Phase 1; similarity-assisted suggestions remain deferred | `RESOLVED — NOT REQUIRED FOR INITIAL PHASE 1 AUTHORIZATION` | No | Database/search specialist recommendation, needed only before enabling similarity-assisted suggestions |
| 3. Final Phase 1 index set | Exact minimum matrix established (Section 9) for every table in the 19-command initial Phase 1 scope; most constraints' existence, table, and purpose are fixed by locked sources; six specific exact-expression/column cells are `BLOCKED — LOCKED SOURCE DOES NOT DEFINE THE EXACT IMPLEMENTATION DETAIL`; query-supporting/performance indexes remain separately, non-blockingly deferred | `PARTIALLY RESOLVED — NAMED MATRIX DETAILS REQUIRE DATABASE SPECIALIST REVIEW` | No | Database specialist to finalize the six named exact-expression/column details during initial Phase 1 implementation; not required to authorize initial Phase 1 |
| 4. Scheduler and merchant-facing scheduling exclusion | Locked Lovable Build Prompt §11/§18 already architects the two scheduler-worker commands as independently, environment-gated authorizable; Mission Control's refinement additionally excludes `schedule_catalog_selling_price`/`cancel_scheduled_catalog_selling_price` (merchant-facing scheduling controls) from initial Phase 1 so a merchant cannot create a schedule that appears capable of automatic activation; 19 of 21 Phase 1 commands remain authorized; the fixed 28-command surface is unchanged | `RESOLVED — EXCLUDE SCHEDULER AND MERCHANT-FACING SCHEDULING FROM INITIAL PHASE 1` | No | Future, separate Mission Control instruction, gated on EIS §24 item 7 environment verification |
| 5. Stale Build Prompt §26 wording | Verification Checklist locked (PR #87, merged) after Build Prompt §26 was written; §26's implementation-gating statements remain accurate and unmet; only the "package remains incomplete" sentence is stale | `RESOLVED — LATER LOCK RECORD SUPERSEDES LIFECYCLE WORDING ONLY` | No | None — reflect the supersession wording (Section 13) in the next Founder Lovable Brief or implementation authorization |

---

## 13. Exact Proposed Wording for a Future Founder Lovable Brief or Implementation Authorization

The following text block is proposed language only. It is not committed to any document under this mission and does not itself authorize anything.

```text
STAGE 12 PACKAGE COMPLETION

The Stage 12 Initial Implementation Package (Product Blueprint, EIS
Version 2.2, Engineering Contract Version 1.1, Lovable Build Prompt
Version 1.1, Verification Checklist Version 1.1) is COMPLETE AND LOCKED
as of the Verification Checklist's lock under instruction1.26.md
(communication/live/report1.26.md, PR #87, merged).

LOVABLE BUILD PROMPT SECTION 26 — LIFECYCLE SUPERSESSION NOTICE

Lovable Build Prompt Version 1.1 Section 26 states that the Verification
Checklist remains unauthorized and that the Stage 12 package remains
incomplete. That statement is superseded, for lifecycle-status purposes
only, by the later Verification Checklist lock recorded above. No other
statement in Section 26 is superseded: acceptance and lock of the Build
Prompt still do not authorize pasting it into Lovable and still do not
authorize implementation; a separately authorized Founder Lovable Brief
must still exist; a separate, explicit Mission Control instruction must
still authorize implementation of a specific named phase before that
phase may be built.

SCHEDULER AND MERCHANT-FACING SCHEDULING EXCLUSION

This authorization excludes both the environment-gated scheduler and
merchant-facing scheduling controls from initial scope:
list_due_catalog_price_schedule_candidates, activate_catalog_
price_schedule, schedule_catalog_selling_price, cancel_scheduled_
catalog_selling_price, the scheduler worker, the catalog_scheduler_
service identity, pg_cron activation, pg_net activation, and scheduled
runtime deployment are NOT authorized by this document. Until the
scheduler is separately authorized and operational, the product must
not allow a merchant to create a future-price schedule that appears
capable of automatic activation. A separate, future Mission Control
instruction is required to authorize the scheduler and merchant-facing
scheduling scope, after the EIS Section 24 item 7 environment-
verification step is satisfied.

SYSTEM_ERRORS DISPOSITION

DEFER FROM INITIAL PHASE 1. Do not create system_errors under initial
Phase 1. Do not invent a catalog-specific error table. Do not reference
a nonexistent system_errors table at runtime. Initial Phase 1 uses the
locked catalog_write_idempotency_keys outcome-of-record, standard
transaction rollback, structured database errors, and existing
repository logging only. The generic shared system_errors capability
requires a separate shared-infrastructure mission before cross-mission
reuse; that mission is not created by this document.

READINESS CONDITIONS — RESOLVED, NOT BLOCKING

- pg_trgm similarity threshold: not required for this authorization;
  catalog_products_search relies on deterministic exact/normalized
  matching only; similarity-assisted suggestion remains deferred
  pending a later specialist recommendation and is never presented as
  authoritative.
- Final index set: the exact minimum Phase 1 index matrix
  (communication/live/report1.27.md Section 9) is authorized and
  required now for every named constraint whose exact detail is
  locked-source-confirmed. Query-supporting and pg_trgm-dependent
  performance indexes remain deferred to specialist review during or
  shortly after initial implementation.

READINESS CONDITIONS — PARTIALLY RESOLVED, NOT BLOCKING

- Final index set — named exact-detail gaps: the exact normalization
  column/expression for business-scoped product name, SKU, barcode, and
  catalog_categories.name uniqueness, the exact single-use token column
  on catalog_link_preview_tokens, and the exact singleton-enforcement
  mechanism for business_tax_settings are not defined by currently-
  locked source text (communication/live/report1.27.md Section 9). A
  database specialist must supply these exact details during initial
  Phase 1 implementation. This does not block issuing this
  authorization.

READINESS CONDITIONS — UNRESOLVED

[None identified by this investigation as of communication/live/
report1.27.md and communication/live/report1.28.md. Any condition
identified after this report must be named explicitly before this
document is issued.]
```

---

## 14. Remaining Blockers, If Any

None. All five matters reached a non-blocking disposition. Matter 3 (final Phase 1 index set) is `PARTIALLY RESOLVED` rather than fully resolved, because six specific exact-expression/column cells in the index matrix (Section 9) are not defined by currently-locked source text; these are named, non-blocking, database-specialist-review items to be closed during initial Phase 1 implementation, not before authorization. Matter 1 (`system_errors`) requires a separate future shared-infrastructure mission, but not before or as part of initial Phase 1.

---

## 15. Product Truth Change Status

```text
PRODUCT TRUTH CHANGED: NO
```

No statement in the locked Product Blueprint or the Founder Product Decision Record (D-001–D-068) was altered, reinterpreted, or newly created by this investigation. All five dispositions are derived from existing locked text or narrow, explicitly labeled engineering inference within the bounds that text already permits (e.g., the Blueprint's own "may suggest" / "where matching is reliable" language for Matter 2).

---

## 16. Founder Decision Requirement

```text
NEW FOUNDER DECISION REQUIRED: NO
```

None of the five matters requires a new Founder Product Decision. Matter 1's remaining choice (create vs. defer the shared `system_errors` table) is a Mission Control sequencing/schema-inclusion decision, not a change to merchant-facing product behavior.

---

## 17. Specialist Review Requirement

```text
SPECIALIST REVIEW STILL OUTSTANDING (non-blocking):
- pg_trgm similarity threshold and algorithm sufficiency (Matter 2) — needed before enabling similarity-assisted search suggestions, not before Phase 1 authorization or build.
- Query-supporting and pg_trgm-dependent performance indexes (Matter 3) — can proceed in parallel with or shortly after initial Phase 1 implementation.
- Six named exact-detail gaps in the Matter 3 index matrix (Section 9) — normalization column/expression for product name, SKU, barcode, and catalog_categories.name uniqueness (four gaps), the catalog_link_preview_tokens single-use token column (one gap), and the business_tax_settings singleton-enforcement mechanism (one gap) — needed during initial Phase 1 implementation, not before authorization.

The first two are already tracked as open items in Engineering Contract §29.1 and are not reopened, expanded, or newly created by this investigation. The third is newly identified by the Section 9 matrix required under `instruction1.28.md` §3.2 and does not reopen any prior finding.
```

---

## 18. Lovable Credit-Use Confirmation

```text
LOVABLE BUILD MODE USED: NO
LOVABLE PLAN MODE USED: NO
LOVABLE CREDITS CONSUMED: NONE
```

This investigation was completed entirely through repository and locked-document inspection, as required by Section 6 of `instruction1.27.md`. No question was sent to Lovable.

---

## 19. Locked-Source Integrity Confirmation

```text
PRODUCT BLUEPRINT: LOCKED — UNCHANGED
EIS VERSION 2.2: LOCKED — UNCHANGED
ENGINEERING CONTRACT VERSION 1.1: LOCKED — UNCHANGED
LOVABLE BUILD PROMPT VERSION 1.1: LOCKED — UNCHANGED
VERIFICATION CHECKLIST VERSION 1.1: LOCKED — UNCHANGED
FOUNDER DECISIONS D-001 THROUGH D-068: UNCHANGED
```

Confirmed by `git status --porcelain` showing no modification to any file under `docs/phase-1-mission-blueprint/` or `docs/implementation/SB-P-1.11/`, and by the exact-files-changed list in Section 5 above (this report only). No MC-VRF, MC-EC, MC-LBP, or MC-VC finding was reopened.

---

## 20. Implementation-Authority Status

```text
STAGE 12 PACKAGE: COMPLETE AND LOCKED
PHASE 1 READINESS INVESTIGATION: COMPLETE
FOUNDER LOVABLE BRIEF: NOT AUTHORIZED — NOT CREATED
PASTE-INTO-LOVABLE AUTHORITY: NONE
LOVABLE BUILD MODE: NOT AUTHORIZED
IMPLEMENTATION AUTHORITY: NONE
```

This report authorizes nothing beyond itself. No Founder Lovable Brief, implementation authorization, code, SQL, migration, schema, index, role, grant, RLS policy, or RPC was created.

---

## 21. Final Recommendation

```text
PHASE 1 READINESS PARTIALLY RESOLVED — NAMED BLOCKERS REMAIN
```

**As corrected by `instruction1.28.md`:** four of the five matters (`system_errors`, `pg_trgm` threshold, scheduler and merchant-facing scheduling exclusion, stale Build Prompt §26 wording) reached a fully evidence-backed, non-blocking disposition. Matter 3 (final Phase 1 index set) reached `PARTIALLY RESOLVED — NAMED MATRIX DETAILS REQUIRE DATABASE SPECIALIST REVIEW`: the exact minimum Phase 1 index matrix (Section 9) is established for every in-scope table, but six specific exact-expression/column cells are not defined by currently-locked source text and are explicitly named as `BLOCKED — LOCKED SOURCE DOES NOT DEFINE THE EXACT IMPLEMENTATION DETAIL` rather than invented. Per `instruction1.28.md` §5, this report does not claim full resolution of all five matters while that matrix incompleteness remains. None of the named items — Matter 1's future shared-infrastructure mission, Matter 2's threshold, or Matter 3's six exact-detail gaps and deferred performance indexes — blocks preparing or issuing an initial Phase 1 implementation authorization; each is a named, tracked follow-up to be closed by a specialist or a separate future mission, not a precondition to authorization. See `communication/live/report1.28.md` for this refinement's own final conclusion.
