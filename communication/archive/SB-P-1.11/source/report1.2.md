# SMART BUSINESS MISSION CONTROL

# Report 1.2

**Mission ID:** SB-P-1.11

**Mission Name:** Product Catalog & Pricing — Claude Code Builder Review

**From:** Claude Code — Builder Review

**To:** Mission Control

**Status:** BUILDER REVIEW COMPLETE — MISSION CONTROL REVIEW REQUIRED

**Date:** 2026-08-04

---

# Executive Summary

Claude Code performed the Source 18 Stage 6 Builder Review of the Mission Control-approved SB-P-1.11 Product Blueprint Sections 1–19, as authorized by `communication/live/instruction1.2.md`. The review inspected the approved Blueprint, the Founder Product Decision Record (D-001–D-067), the accepted SB-P-1.10 Inventory Foundation, the canonical governance sources named in the instruction, and the current repository implementation state.

The Blueprint is internally consistent, correctly preserves the accepted SB-P-1.10 inventory ledger as the sole stock authority, and introduces no duplicate catalog, inventory, or category entities against current repository state. Twenty-one findings were recorded. Most are `PASS` or `ENGINEERING REVIEW INPUT` describing genuine build-feasibility facts for the next lifecycle stage. Two findings are `REFINEMENT REQUIRED`, and one finding is `FOUNDER DECISION REQUIRED` because it concerns a merchant-facing price/unit consequence that this review is not authorized to resolve by assumption.

No protected artifact was edited and no application, database, Supabase, Lovable, infrastructure, deployment, production, or governance source was changed. The only changed file is this report.

---

# Sources and Repository Areas Inspected

**Governance sources (per `communication/live/instruction1.2.md` "Execute According To"):**

- `merge/active/00_Lighthouse_Constitution.md`
- `merge/active/01_Smart_Business_Master_System_Manifesto.md`
- `merge/active/11_Smart_Business_Product_Truth_Map.md`
- `merge/active/12_Product_Execution_and_Release_Framework.md`
- `merge/active/17_AI_Operations_Manual.md`
- `merge/active/18_SB-P_Mission_Lifecycle_and_Delivery_Framework.md`
- `merge/active/P00_Operational_Profiles.md`
- `docs/phase-1-mission-blueprint/active/SB-P-1.11.md`
- `docs/phase-1-mission-blueprint/active/SB-P-1.11-Founder-Product-Decision-Record.md`
- `docs/phase-1-mission-blueprint/completed/SB-P-1.10.md`
- `communication/live/instruction.md`, `report.md`, `instruction1.1.md`, `report1.1.md`, `instruction1.2.md`

**Repository areas inspected (read-only):**

- `supabase/migrations/**` — all 12 migrations, searched for existing product, catalog, category, price, SKU, and barcode structures, and for the accepted inventory schema (`inventory_items`, `inventory_movements`, `inventory_movement_idempotency_keys`, related RPCs).
- `src/routes/**` — TanStack Router file-based routes, including `src/routes/_authenticated/` (dashboard, transactions, inventory) and the route guard in `src/routes/_authenticated/route.tsx`.
- `src/components/authed-header.tsx` — shared authenticated navigation shell.
- `src/hooks/use-auth.tsx` and `src/integrations/supabase/*` — authentication and data-access patterns.
- `supabase/migrations/20260708210504_*.sql` — `businesses` table (owner-only `owner_id`, and an unrelated `category` column describing business type, not a product or transaction category system).
- `supabase/migrations/20260720142204_*.sql` — `transaction_correction_events`, the closest existing analog to a generic audit-history mechanism.
- `package.json` — checked for CSV/Excel parsing dependencies.

---

# Builder Review Findings

## Product Experience

**F1 — `PASS`.** The catalog/inventory truth separation (Blueprint §1, §8 "Catalog Product") is well-articulated and consistent with SB-P-1.10 §16 ("Product Catalog" future-evolution note), which anticipated exactly this relationship.

**F2 — `PASS`.** Blueprint §9 (UI/UX Expectations) mirrors the accepted SB-P-1.10 §9 pattern — identity/detail/history separation, permission-aware hiding, explicit empty and incomplete states — supporting a consistent merchant experience across Inventory and the new Catalog.

**F3 — `REFINEMENT REQUIRED`.** Multilingual entry and search behaviour for product name, description, and category is unspecified. Source 11 ("Human Language Layer") and Source 12 §14 establish English/Malayalam/Manglish as a system-wide requirement, but Blueprint §8 ("Product Name and Description", "Search and Filtering") does not state how mixed-language entry, display, or search matching should behave for catalog fields.
*Sections affected: §8 (Product Name and Description; Search and Filtering), §9.*
*Decision IDs affected: none directly; this refines D-026/D-027 without reopening them.*

**F4 — `REFINEMENT REQUIRED`.** "Business-unique" matching rules for product name, SKU, and barcode (case sensitivity, leading/trailing whitespace, mixed-language variants) are unspecified — e.g., whether "Amul Milk" and "amul milk" are the same product for uniqueness purposes. This is a direct merchant-facing ambiguity, not only an engineering detail.
*Sections affected: §8 (Product Name and Description; SKU; Barcode), §10 (Rules 8–9).*
*Decision IDs affected: none directly; this refines D-023/D-024/D-026 without reopening them.*

## Workflow Clarity

**F5 — `FOUNDER DECISION REQUIRED`.** Blueprint §8 ("Selling Unit") states a stock-tracked product "inherits the linked inventory item's immutable base unit and cannot configure an alternate selling unit," and §8 ("Product–Inventory Link") permits linking a non-stock product to inventory at any point before sales or linked stock-event history exists. Read together: a non-stock product created with unit "piece" and a selling price (e.g., ₹50) can later be linked to an inventory item whose base unit is different (e.g., "kg"). At that moment the product's selling unit silently changes from piece to kg while the numeric selling price is not addressed by the Blueprint. Neither §8 nor the linking warning in §9 ("Inventory-Link Experience") states whether the existing price is treated as now meaning "per kg," is cleared pending merchant re-entry, or triggers a mandatory re-confirmation step. This is a genuine, unresolved merchant-facing pricing-accuracy question that this review is not authorized to answer by assumption.
*Exact question for the Founder: When a non-stock product's default selling unit is superseded by a newly linked inventory item's base unit, does the existing selling price remain numerically unchanged under the new unit, or must the merchant explicitly re-confirm or re-enter price at the moment of linking?*
*Sections affected: §8 (Product–Inventory Link; Selling Unit), §9 (Inventory-Link Experience).*
*Decision IDs affected: D-001, D-005, D-047, D-051 (adjacent); no existing decision currently answers this question.*

**F6 — `PASS`.** Sale-readiness rules (§8 "Sale Readiness") are unambiguous and directly testable at the product-experience level.

## Permissions and User Roles

**F7 — `ENGINEERING REVIEW INPUT`.** The current repository implements only an Owner role. `businesses.owner_id` is the sole authority column, and every existing RLS policy inspected (`inventory_items`, `inventory_movements`, `inventory_movement_idempotency_keys`, `transactions`) gates access through an `owner_id = auth.uid()` subquery only. SB-P-1.10's own accepted implementation is documented in its migration as Owner-only "per Mission Control clarification SB-P-1.10-CLAR-1.0 (A1)." Blueprint §8 ("Permissions") and Decisions D-016, D-033, D-034, D-035, D-048 assume a granular, action-specific Manager/Employee permission model (independently controlled for catalog viewing, product creation, lifecycle, price, tax, cost, and inventory-linking) that does not yet exist anywhere in the codebase. This does not reopen Product Truth — Source 11 already establishes the Owner/Manager/Employee model — but Engineering Review must determine whether SB-P-1.11 depends on a prior or parallel permission-engine mission, or is expected to deliver the first real Manager/Employee implementation itself. Source 12 §13 ("Single Implementation Rule" — one Permission Engine) favors building this capability once rather than per-feature.
*Sections affected: §8 (Permissions), §10 (Rules 24–25).*
*Decision IDs affected: D-016, D-033, D-034, D-035, D-048 (feasibility context only; not reopened).*

**F8 — `FOLLOW-UP — NON-BLOCKING`.** D-035's "sale-authorized employee" concept presupposes a sale-authorization mechanism that depends on the not-yet-built Sales Workflow (SB-P-1.13/1.14). This is an appropriately scoped forward reference and does not block Sections 1–19, but Engineering Review should record the cross-mission dependency.

## Catalog–Inventory Boundary

**F9 — `PASS`.** One-to-one link cardinality, independent archival, unit inheritance, and lock-after-history rules (§8; D-001–D-005, D-047) are internally consistent and consistent with SB-P-1.10 §8, §10, and §16.

**F10 — `PASS`.** Blueprint §10 (Rules 2–7) creates no second stock-mutation path and does not conflict with SB-P-1.10 §10 Rule 17 ("future governed capabilities must use the same inventory entities and ledger movements... without creating a separate source of inventory truth").

## Pricing, Tax, Reference-Cost, Lifecycle, Import, and Conversational Behaviour

**F11 — `PASS`.** The price/tax/cost history model (one current price, at most one pending scheduled price, immutable transaction-time evidence) is clearly bounded and merchant-understandable.

**F12 — `ENGINEERING REVIEW INPUT`.** Scheduled-price activation (§8 "Scheduled Selling Price"; D-043) requires exact business-timezone activation. SB-P-1.10's own Engineering Review (§20 "Timezone consistency") flagged UTC storage with presentation-layer conversion as the required approach for ledger timestamps. The same treatment should carry to SB-P-1.11's scheduled-price activation so Inventory and Catalog do not diverge in timezone handling.

**F13 — `ENGINEERING REVIEW INPUT`.** CSV/Excel bulk import (§8 "CSV and Excel Bulk Import"; D-055–D-058) has no existing pattern in the repository: no CSV/XLSX parsing dependency, import route, or correction-queue component exists today (`package.json` contains none). This is legitimate net-new Build Now scope already confirmed by the Founder Product Decision Record and is not being reopened here; Engineering Review should size it as a substantial, independent capability bundle (parsing, validation, quarantine, correction queue, dual-channel error reporting) rather than an incremental add to product CRUD.

**F14 — `ENGINEERING REVIEW INPUT`.** Guided WhatsApp/voice/photo conversational catalog workflows (§8 "WhatsApp, Voice, Text, and Photo Assistance"; D-053, D-054) have no existing implementation to build on. The dashboard (`src/routes/_authenticated/dashboard.tsx`) currently shows only a disabled "Coming soon" WhatsApp assistant card; no webhook, voice, or AI-conversation infrastructure exists in the repository. This does not redefine Product Truth — Source 11 "Conversation First" already establishes this as core identity — but Engineering Review must determine sequencing: whether SB-P-1.11 depends on a prior or parallel conversational-infrastructure mission, or is expected to build the first instance of it.

**F15 — `PASS`.** Lifecycle and deletion rules (Active/Archived states, conditional permanent deletion; D-029–D-032, D-065) mirror the accepted SB-P-1.10 archival pattern (no hard delete once history exists) — good internal consistency and reuse of an established governance pattern.

## Reuse and Duplication Risk

**F16 — `PASS`.** The business-isolation pattern used by `inventory_items` and `inventory_movements` (`business_id` column plus an RLS `owner_id` subquery, with composite `UNIQUE (id, business_id)` for cross-table FK integrity) can be directly reused for new catalog tables; no new isolation pattern is required.

**F17 — `PASS`.** No existing "products," "categories," or "pricing" schema or route exists in the repository, so SB-P-1.11 introduces no duplicate entities. The existing `businesses.category` column represents the business's own type (e.g., "grocery shop") and is unrelated to the proposed product-category feature — confirmed no naming or entity collision.

**F18 — `ENGINEERING REVIEW INPUT`.** SB-P-1.11's audit-history requirement (§8 "Audit History"; D-064) spans roughly ten field categories (identity, description, image, category, SKU, barcode, unit, inventory link, status, price, cost, tax) and is broader than any existing pattern. The closest analog, `transaction_correction_events` (a jsonb old/new value snapshot), is transaction-specific; Inventory's audit trail is implicit in its append-only ledger rather than a general-purpose table. Per Source 12 §10 ("Single Implementation Rule") and §B8 ("Reuse and Duplication Control"), Engineering Review should evaluate a shared audit mechanism reusable by Catalog, Inventory, and future Purchase/Sales missions rather than a catalog-specific table.

**F19 — `PASS`.** A shared authenticated-shell navigation component (`src/components/authed-header.tsx`) already centralizes workspace navigation across Dashboard, Transactions, and Inventory (its own header comment states it is "reused across the dashboard, transactions, and inventory routes" specifically "so nav-link additions do not drift"). Adding a Products/Catalog entry point follows an established, low-risk reuse pattern rather than requiring new navigation architecture.

## Feasibility Risks That Belong to Later Engineering Review

**F20 — `ENGINEERING REVIEW INPUT`.** Following SB-P-1.10's own precedent (§20 "Ledger Integrity Review," "Concurrency," "Duplicate movement creation"), SB-P-1.11's price/tax/cost history writes and scheduled-price activation should receive the same rigor at the EIS stage: a single write path per history type, database-level immutability of posted history rows, and idempotent submission handling.

**F21 — `ENGINEERING REVIEW INPUT`.** Blueprint §8 groups three capability bundles with materially different current readiness under one Stage 1 mission: (a) core catalog/pricing CRUD, which is buildable today on existing patterns (F16, F17, F19); (b) owner/manager/employee permission enforcement, which is blocked on the permission-engine gap (F7); and (c) guided conversational workflows and bulk import, both confirmed greenfield (F13, F14). This is not a recommendation to change Founder-approved Build Now scope — D-053, D-054, and D-055 already confirm it — but Engineering Review and implementation planning should account for these differing readiness levels, and may find phased implementation sequencing appropriate within the same locked Blueprint.

---

# Finding Classification Summary

| Finding | Classification |
|---|---|
| F1 | PASS |
| F2 | PASS |
| F3 | REFINEMENT REQUIRED |
| F4 | REFINEMENT REQUIRED |
| F5 | FOUNDER DECISION REQUIRED |
| F6 | PASS |
| F7 | ENGINEERING REVIEW INPUT |
| F8 | FOLLOW-UP — NON-BLOCKING |
| F9 | PASS |
| F10 | PASS |
| F11 | PASS |
| F12 | ENGINEERING REVIEW INPUT |
| F13 | ENGINEERING REVIEW INPUT |
| F14 | ENGINEERING REVIEW INPUT |
| F15 | PASS |
| F16 | PASS |
| F17 | PASS |
| F18 | ENGINEERING REVIEW INPUT |
| F19 | PASS |
| F20 | ENGINEERING REVIEW INPUT |
| F21 | ENGINEERING REVIEW INPUT |

No finding identifies duplication of an existing entity, contradiction of accepted SB-P-1.10 inventory truth, or unnecessary feature bloat beyond the sequencing observation in F21. No finding treats a build-feasibility observation as permission to redesign Product Truth.

---

# Disposition

`FOUNDER DECISION REQUIRED`

F5 identifies a genuine, unresolved merchant-facing product question (price meaning across a silent unit change at inventory-link time) that is not answered by Sections 1–19 or by any recorded Founder decision, and that this review is not authorized to resolve by assumption. F3 and F4 are refinements Codex can incorporate in the same pass. F7, F12, F13, F14, F18, and F20–F21 are Engineering Review inputs that do not block Founder resolution of F5 and should be carried forward once Sections 1–19 are refined and Builder Review is re-approved.

---

# Protected Artifact and Technical System Confirmation

- `docs/phase-1-mission-blueprint/active/SB-P-1.11.md` — **not modified**.
- `docs/phase-1-mission-blueprint/active/SB-P-1.11-Founder-Product-Decision-Record.md` — **not modified**.
- No Founder decision was added, removed, reinterpreted, or reopened.
- No Product Blueprint Sections 20–21 were created.
- No Engineering Review was performed.
- No EIS, engineering contract, Lovable build prompt, or verification checklist was created.
- No application code, test, database schema, SQL, migration, RLS policy, Supabase configuration, Lovable configuration, infrastructure, deployment, or production state was changed.
- No canonical governance source (`merge/active/**`) was changed.
- This review does not authorize itself or any later lifecycle stage.

---

# Git, Branch, and Pull-Request Evidence

- Repository: `SmartBusinessv1/smart-business`.
- Authorized base: `origin/main`, fast-forward synchronized before this review began (`9919c14` → `93984d6`, "Authorize SB-P-1.11 Builder Review (#30)").
- Mission branch: `mission/SB-P-1.11-builder-review`, created from `origin/main` at `93984d6`.
- Exact changed file: `communication/live/report1.2.md` (new file).
- No other file was staged or modified.

Commit, push, and pull-request creation follow immediately after this report is written, per the same validation sequence recorded below.

---

# Validation Performed

- Exact changed-file scope: confirmed as `communication/live/report1.2.md` only via `git status` prior to commit.
- Markdown Quality Gate: heading hierarchy is sequential (H1 → H2 → H3), no skipped levels; tables are well-formed; no trailing punctuation issues in headings.
- Whitespace check: no trailing whitespace introduced; file ends with a single trailing newline.
- Internal-link check: this report references file paths and section numbers as plain text, consistent with the instruction's "do not duplicate the Blueprint" rule; no relative Markdown links were introduced that require validation.
- Staged secret and credential inspection: this report contains no API keys, tokens, credentials, or connection strings.
- Branch verification: confirmed current branch is `mission/SB-P-1.11-builder-review`, tracking `origin/main`, before commit.

---

# Risks and Limitations

- This report cannot record its own creating commit's SHA, since the SHA is only known after the commit is made. The commit is identifiable by its exact approved commit message on the pull request named below.
- The `FOUNDER DECISION REQUIRED` disposition means Sections 1–19 are not yet ready for Engineering Review. Mission Control should route F5 back to Codex-facilitated Founder discovery before re-authorizing Builder Review.
- The Engineering Review Input findings (F7, F12, F13, F14, F18, F20, F21) are feasibility observations for the next lifecycle stage, not defects in the current Blueprint; they should not be read as blocking Founder resolution of F5.

---

# Mission Control Action Required

Mission Control should review this Builder Review, decide whether to route Finding F5 to Codex-facilitated Founder discovery (recommended, consistent with Source 18 §4.3 Codex ownership of Founder-led discovery), and decide whether F3 and F4 should be resolved in the same Codex refinement pass. Claude Code does not authorize the next actor or stage.

---

# Recommended Next Step

Return Findings F3, F4, and F5 to Codex for Founder-facilitated refinement of Product Blueprint Sections 1–19 and the Founder Product Decision Record. Re-submit the refined Sections 1–19 for a follow-up Builder Review before Engineering Review begins. Do not begin Engineering Review, Sections 20–21, EIS, or implementation work on the current Sections 1–19 until F5 is resolved.

---

# Completion Status

```text
SB-P-1.11 BUILDER REVIEW: FOUNDER DECISION REQUIRED
```

Implementation authority remains none.
