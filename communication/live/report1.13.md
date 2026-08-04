# SMART BUSINESS MISSION CONTROL

# Report 1.13 — Narrow Second EIS Refinement

**Mission ID:** SB-P-1.11

**Mission Name:** Product Catalog & Pricing

**Lifecycle Activity:** Second EIS refinement (MC-VRF-001 through MC-VRF-010)

**From:** Claude Code — Engineering Review and Implementation Specification

**To:** Mission Control

**Status:** SECOND REFINEMENT COMPLETE — MISSION CONTROL VERIFICATION REQUIRED

**Date:** 2026-08-05

---

## 1. Synchronized Base Commit SHA

`origin/main` at `c647f33` ("Authorize narrowly scoped second SB-P-1.11 EIS refinement (#60)"), fast-forward synchronized before this mission began.

---

## 2. Branch Name

`mission/SB-P-1.11-eis-refinement-2`, created from `origin/main` at `c647f33`.

---

## 3. Final Commit SHA

Recorded in Section 15, after commit (a report cannot contain the SHA of the commit that first creates it).

---

## 4. Pull-Request Number

Recorded in Section 15, after creation.

---

## 5. Exact Changed Files

- `docs/phase-1-mission-blueprint/implementation/SB-P-1.11-EIS.md` (modified — Version 2.0 → 2.1)
- `communication/live/report1.13.md` (new file, this report)

---

## 6. Confirmation That Only the Two Authorized Paths Changed

`git status --porcelain` confirms no other path changed. `docs/phase-1-mission-blueprint/active/SB-P-1.11.md` and `docs/phase-1-mission-blueprint/active/SB-P-1.11-Founder-Product-Decision-Record.md` do not appear in the changed-file set and were never opened for writing. No application code, test, SQL, migration, RLS policy, RPC implementation, Supabase configuration, Lovable file, prompt, webhook, Edge Function, infrastructure, deployment, or production path changed.

---

## 7. Traceability Table — MC-VRF-001 Through MC-VRF-010

| Finding | Severity | EIS section(s) changed | Resolution summary |
|---|---|---|---|
| MC-VRF-001 — Executor identity contradiction | BLOCKING | §7 | Three explicit layers: genuinely `LOGIN`-capable external/service-account identities (Layer 1: `authenticated`, `catalog_channel_service`, `catalog_scheduler_service`) hold only `EXECUTE`; `NOLOGIN` function-owner roles (Layer 2) hold table privilege and never authenticate; the invocation boundary (Layer 3) is ordinary `SECURITY DEFINER` execution, not a bespoke `SET ROLE` step. No `NOLOGIN` role is described as holding or using credentials anywhere in the revised text. |
| MC-VRF-002 — Over-broad command executor authority | HIGH | §7, §16, §23 | The single `catalog_command_executor` is replaced with eight command-group-scoped owner roles (`catalog_identity_executor`, `catalog_lifecycle_executor`, `catalog_pricing_executor`, `catalog_tax_executor`, `catalog_cost_executor`, `catalog_link_executor`, `catalog_import_executor`, `catalog_read_executor`), each holding only the exact table privileges its own command group needs. `catalog_import_executor` deliberately holds no direct `catalog_products` privilege, reusing `catalog_identity_executor`'s functions internally instead. No role holds unrestricted DML across Section 5. |
| MC-VRF-003 — Scheduler transaction model contradiction | BLOCKING | §5.3, §12, §16, §20 | `activate_scheduled_catalog_prices` (renamed `activate_due_catalog_price_schedules`) is redefined as a PL/pgSQL `PROCEDURE`, not a `FUNCTION`, invoked via top-level `CALL` — the specific mechanism that makes genuine per-iteration `COMMIT` valid in PostgreSQL 11+. Claiming, lock ownership (no durable claim state needed — a crash simply rolls back one iteration), batching (500/run), transaction boundary (one `COMMIT`/`ROLLBACK` per schedule), retry behavior (naturally retried next run via row existence, no artificial key needed), partial failure (`EXCEPTION WHEN OTHERS` per iteration), stale schedules (none possible under this model), bounded lag, audit provenance, and unknown-outcome reconciliation are all defined against this corrected model. |
| MC-VRF-004 — Durable rejection evidence versus full rollback | BLOCKING | §5.8, §10, §11 | Expected rejections (`STALE_STATE`, `PRICE_CONFIRMATION_REQUIRED`, `IDEMPOTENCY_CONFLICT`, `PERMISSION_DENIED`, `ACTOR_MISMATCH`, etc.) are returned via a structured `RETURN`, not raised as exceptions — the transaction commits normally, durably persisting token consumption and the idempotency-key row, while protected business tables are simply never written to on that path. Only genuinely unexpected errors raise an exception and roll back fully, becoming `UNKNOWN_OUTCOME`. `catalog_write_idempotency_keys.status` is simplified to exactly two terminal values (`completed`, `rejected`) — no durable "in progress" state exists, since an aborted attempt leaves no row at all. |
| MC-VRF-005 — Webhook deduplication and command idempotency binding | HIGH | §5.10, §15 | New `catalog_channel_confirmation_receipts` table deduplicates the *confirming* webhook event, distinct from `originating_channel_event_id`'s existing dedup of the *initiating* event. A new `command_idempotency_key` field on `catalog_channel_pending_actions`, generated once at pending-action creation, is reused unchanged on every confirmation attempt regardless of redelivery. Duplicate initiating and duplicate confirming events are each independently caught before any new command attempt is made. |
| MC-VRF-006 — Alternate confirmer authority | HIGH | §15 | The undefined "or is otherwise separately authorized" clause is removed. `confirm_catalog_pending_action` requires the confirming actor to exactly match the pending action's original `actor_user_id` — no exceptions, no delegation path. Mismatch is an unconditional `ACTOR_MISMATCH` rejection. Delegated/alternate confirmation is stated as explicitly out of this mission's scope. |
| MC-VRF-007 — Pre-command failure classification | HIGH | §15, §16 | Four stable categories defined exactly as required: `PRE_COMMAND_PROCESSING_FAILED` (media/transcription/OCR/model failure before any command dispatch — no idempotency key exists, safe to state "no catalog change was submitted"), `COMMAND_REJECTED`, `UNKNOWN_OUTCOME` (reserved strictly for post-dispatch ambiguity), `CONFIRMED_SUCCESS`. |
| MC-VRF-008 — Audit provenance fields incomplete | HIGH | §5.0, §18 | Added `authority_basis` field (the exact permission flag that authorized the write) to the standardized provenance block. Corrected §18's "outcome" claim: dedicated event-table rows are only ever written on success (a rejection produces no row), so "outcome" as a per-attempt concept is now correctly attributed to `catalog_write_idempotency_keys.status`, not claimed as a field on tables that cannot meaningfully carry it. |
| MC-VRF-009 — Outcome lookup trusts caller-supplied business scope | HIGH | §11 | `get_catalog_command_outcome`'s signature no longer accepts `p_business_id`. Business scope is derived exactly as every other command derives it — from `auth.uid()` or the verified channel actor. A cross-business key guess returns the same `not_found` result as a genuinely nonexistent key. |
| MC-VRF-010 — Mandatory file scanning can be bypassed | HIGH | §5.11 (enforcement), §14 | Closed purpose/status matrix: both currently-defined purposes (`product_image`, `import_source`) require `safety_scan_status = 'clean'` with no `not_required` exception. `not_required` remains defined in the enum only for a hypothetical future purpose not yet added to the matrix. Enforcement is re-checked server-side at every point of use (product/identity commands, import job creation, staging), not only at upload. |

---

## 8. Before-and-After Contract Summary for Each Finding

**MC-VRF-001.** *Before:* three roles described as `NOLOGIN` while also "authenticating through credentials" — self-contradictory. *After:* credentials exist only on two new, explicitly `LOGIN`-capable service accounts (`catalog_channel_service`, `catalog_scheduler_service`) plus the pre-existing `authenticated`; the `NOLOGIN` roles are pure function owners, never described as connecting.

**MC-VRF-002.** *Before:* one `catalog_command_executor` held full DML across every Section 5 table. *After:* eight command-group owners, each scoped to its own tables only; the narrowest (`catalog_cost_executor`) can write only `catalog_reference_cost_events`.

**MC-VRF-003.** *Before:* one `FUNCTION` invocation claimed to independently commit up to 500 rows — not valid PostgreSQL semantics. *After:* a `PROCEDURE` invoked via top-level `CALL`, using genuine per-iteration `COMMIT`/`ROLLBACK`, which is the correct mechanism for this behavior.

**MC-VRF-004.** *Before:* "any exception → full rollback" contradicted "token consumption remains committed on rejecting paths." *After:* rejections are structured `RETURN` values within a transaction that commits normally; only truly unexpected errors raise exceptions and roll back.

**MC-VRF-005.** *Before:* one `originating_channel_event_id` was assumed to also deduplicate the later, different confirming webhook. *After:* a separate `catalog_channel_confirmation_receipts` table with its own uniqueness constraint, plus a `command_idempotency_key` fixed at pending-action creation and reused unchanged across every confirmation attempt.

**MC-VRF-006.** *Before:* "confirming actor matches (or is otherwise separately authorized)" — an undefined escape hatch. *After:* exact same-actor match required unconditionally; no alternate path exists in this EIS.

**MC-VRF-007.** *Before:* pre-command media/model failures were grouped with post-dispatch command ambiguity under one `UNKNOWN_OUTCOME` umbrella. *After:* four distinct categories, with pre-dispatch failures explicitly excluded from idempotency reconciliation since no command was ever dispatched.

**MC-VRF-008.** *Before:* §18 claimed every event carried "authority basis" and "outcome," but the Section 5.0 schema had neither field. *After:* `authority_basis` added to the schema; "outcome" reattributed to the idempotency-key record, where it is actually meaningful and actually stored.

**MC-VRF-009.** *Before:* `get_catalog_command_outcome(p_business_id, ...)` let the caller assert business scope. *After:* `get_catalog_command_outcome(p_operation, p_idempotency_key)` — business scope is always server-derived.

**MC-VRF-010.** *Before:* `safety_scan_status IN ('clean', 'not_required')` was accepted for linking, even though both defined purposes were described elsewhere as always scan-required. *After:* a closed matrix requiring `clean` for both `product_image` and `import_source`, with no exception, enforced at every point of use.

---

## 9. Confirmation That Previously Verified Findings Were Not Reopened

The following, explicitly listed in `instruction1.13.md` §17 as not to be reopened, remain unchanged in this revision (confirmed by direct comparison against Version 2.0's text, preserved via "Unchanged from Version 2.0" cross-references throughout the revised document rather than restated and risked drifting):

scheduled-price state and immutable history (Section 5.3's three-table model, stable `UNIQUE (product_id)` constraint, and write-command behavior are untouched — only two transient claiming fields were added, per instruction's own allowance for "the smallest consistency edits directly required by one of these ten findings," here required by MC-VRF-003's corrected scheduler model); one-pending-schedule enforcement; authenticated direct-DML denial (Section 6 unchanged); action-specific Manager permissions (Section 8's eight flags unchanged); Employee default denial of owner financial intelligence; D-068 server-authoritative preview and compare-and-commit (the preview command and its token contract, Sections 5.9 and 10's steps 1–7, are unchanged — only the *result-delivery mechanism* for steps 8–9 was corrected per MC-VRF-004, not the preview/compare-and-commit logic itself); stale-state re-preview and fresh confirmation; idempotency lookup before mutable-state checks (the ordering principle is unchanged; only the status vocabulary was simplified); same-key unknown-outcome reconciliation; D-047 tenure interpretation (Section 9, explicitly preserved verbatim per instruction §18, and removed from the open-questions list per that same instruction rather than left dangling); protected cost and margin reads; import formula-injection and resource limits; frontend duplicate submission and reconciliation; multilingual uncertainty; accessibility and stable selectors; route and navigation gating; tax pricing-mode command invariant; deletion eligibility (Section 23's logic unchanged; only its executing role identity was updated for consistency with Section 7); temporary Owner-only sequencing.

---

## 10. Confirmation That D-001–D-068 and Product Truth Remain Unchanged

No Founder decision was created, modified, reinterpreted, or reopened. D-001 through D-068 are cited, never restated or altered. No Build Now/Build Later/Add-on/Separate Product/Reject classification changed. No merchant-visible product behavior was redesigned — every correction in this revision is a PostgreSQL/database-mechanics-level fix (role authentication model, transaction/procedure semantics, privilege scoping, a data-model field, a function signature, an enforcement-matrix closure) or a precision correction to already-approved behavior (e.g., MC-VRF-006's same-actor default implements D-054's confirmation requirement more strictly; it does not change what confirmation means to a merchant).

---

## 11. Validation Performed

- **Markdown Quality Gate** (`tools/markdown/quality_gate.py`) against the refined EIS: PASS — 549 total lines, 62 headings with no invalid jumps, 15 tables validated, 6 fenced code blocks validated, zero lint issues.
- **Markdown Quality Gate** against this report: run before commit.
- **Pre-commit Markdown Quality Gate hook:** runs automatically on `git commit`.
- **`git diff --check`:** run before commit.
- **Exact changed-file scope:** confirmed via `git status --porcelain` — only the two authorized paths.
- **Blueprint and Founder Decision Record absence from `git status`:** confirmed.
- **No code/SQL/migration/RLS/Supabase/Lovable/infrastructure path changed:** confirmed via `git status --porcelain`.
- **Every MC-VRF finding has explicit EIS traceability:** confirmed (Section 7 above).
- **No new Product Truth or Founder decision introduced:** confirmed (Section 10 above).
- **Staged secret and credential inspection:** run against the staged diff before commit.

---

## 12. Unresolved Conflicts or Risks

One new, narrow, environment-verification item was surfaced by this revision's own corrections and is recorded transparently in EIS §24 rather than silently assumed: whether the deployed Supabase/PostgreSQL environment's `pg_cron` invocation model requires `catalog_scheduler_service` to itself hold `LOGIN`, or whether `pg_cron`'s internal worker connection mechanism permits a non-`LOGIN`-equivalent job role. This does not block review — Section 7's layered identity architecture is correct and complete under either answer — but it is flagged as a `SPECIALIST REVIEW REQUIRED` item for confirmation during detailed implementation design, consistent with not overclaiming a deployment-specific PostgreSQL detail this EIS cannot verify without environment access. No other conflict or risk was identified.

---

## 13. Wording-Consistency Edits Beyond the Ten Findings

Per instruction §17's allowance for "the smallest consistency edits directly required by one of these ten findings": the scheduler command's public name changed from `activate_scheduled_catalog_prices` to `activate_due_catalog_price_schedules` (Section 12, 16) solely to reflect its corrected `PROCEDURE` nature and avoid implying it is a simple query-style function; the Section 16 command table's "Executor identity" column was updated for every command whose owning role changed under MC-VRF-002; Section 18's audit-provenance description was aligned to the corrected Section 5.0 schema (MC-VRF-008). No other wording beyond what a specific MC-VRF finding required was touched.

---

## 14. Final Author Disposition

```text
SECOND EIS REFINEMENT: COMPLETE
MC-VRF-001 THROUGH MC-VRF-010: ADDRESSED IN DRAFT EIS
PRODUCT TRUTH CHANGE: NONE
D-001–D-068: UNCHANGED
D-047 INTERPRETATION: PRESERVED
FOCUSED VERIFICATION: REQUIRED
FOUNDER EIS REVIEW: NOT YET AUTHORIZED
EIS LOCK: NOT AUTHORIZED
IMPLEMENTATION PACKAGE: NOT AUTHORIZED
IMPLEMENTATION: NOT AUTHORIZED
```

```text
SECOND REFINEMENT COMPLETE — READY FOR FOCUSED VERIFICATION
```

Mission Control should perform focused verification of only the sections changed by this revision (Sections 5.0, 5.3 additions, 5.8, 5.10–5.11 additions, 6 (unchanged, for confirmation), 7, 9 (unchanged, for confirmation), 10–16, 18, 20–24) against MC-VRF-001 through MC-VRF-010, and decide whether the new environment-verification item (Section 12 above) warrants specialist input before EIS Lock. A full four-room re-review is not required per `report1.12.md` §9 unless this revision is found to have materially changed a previously verified domain, which it does not. Claude Code does not declare the EIS accepted, approved, or locked, and does not authorize the next lifecycle action.
