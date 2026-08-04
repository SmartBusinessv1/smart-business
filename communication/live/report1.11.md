# SMART BUSINESS MISSION CONTROL

# Report 1.11

**Mission ID:** SB-P-1.11

**Mission Name:** Product Catalog & Pricing — EIS Refinement (Stage 10 Response)

**From:** Claude Code — Engineering Review and Implementation Specification

**To:** Mission Control

**Status:** REFINEMENT COMPLETE — MISSION CONTROL VERIFICATION REQUIRED

**Date:** 2026-08-04

---

# 1. Mission Identity

Mission SB-P-1.11, Source 18 Stage 10 refinement cycle before Stage 11 EIS Lock, authorized by `communication/live/instruction1.11.md`. Executing actor: Claude Code — Engineering Review and Implementation Specification.

---

# 2. Synchronized Base Commit

`origin/main` at `1018695` ("Authorize SB-P-1.11 EIS refinement (#52)"), fast-forward synchronized before this mission began.

---

# 3. Branch and Pull-Request Evidence

- Mission branch: `mission/SB-P-1.11-eis-refinement`, created from `origin/main` at `1018695`.
- Commit SHA and pull-request number: recorded in Section 15, after commit and PR creation (a report cannot contain the SHA of the commit that first creates it).

---

# 4. Exact Changed-File List

- `docs/phase-1-mission-blueprint/implementation/SB-P-1.11-EIS.md` (modified — Version 1.0 → 2.0)
- `communication/live/report1.11.md` (new file, this report)

`git status --porcelain` confirms no other path changed. `docs/phase-1-mission-blueprint/active/SB-P-1.11.md` and `docs/phase-1-mission-blueprint/active/SB-P-1.11-Founder-Product-Decision-Record.md` do not appear in the changed-file set and were never opened for writing.

---

# 5. Section-by-Section Refinement Summary

| EIS section (v2.0) | What changed | Why |
|---|---|---|
| §1 Metadata | Version 1.0 → 2.0; Prior Review row added | Records the Stage 10 review as governing input |
| §3 Implementation Principles | Six new principles added (append-only integrity, command-only writes, authority re-derivation, preview/commit separation, idempotency-first ordering, unknown-outcome handling) | Makes the corrected architecture explicit at the principle level before detail |
| §5.1 | `image_ref` changed from text to FK → `catalog_file_references` | MC-EIS-011, SEC-PERM-007 |
| §5.3 | Full redesign: `catalog_pending_price_schedules` (mutable) + `catalog_price_schedule_events` (immutable) + redefined `catalog_selling_price_events` (immutable, no `superseded_by`) | MC-EIS-001, SUPA-1, SUPA-2, SUPA-5, SEC-PERM-004 |
| §5.0, §5.4–§5.6 | Standardized provenance block (`authorized_by_user_id`, `executed_by_actor_type`, `system_run_id`, `channel`, `request_id`, `recorded_at`) applied to every dedicated event table | MC-EIS-015, SEC-PERM-011, SUPA-11 |
| §5.9 | New `catalog_link_preview_tokens` table | MC-EIS-003, SUPA-4, LF-01 |
| §5.10 | New `catalog_channel_pending_actions` table | MC-EIS-007, SEC-PERM-003, AIW-004 |
| §5.11 | New `catalog_file_references` table | MC-EIS-011, SEC-PERM-007 |
| §5.12 | `catalog_import_jobs.file_ref` → FK; `catalog_import_rows` gains claim fields | SEC-PERM-007, SUPA-10 |
| §5.13 | New `catalog_deletion_records` table | SUPA-9 |
| §6 | RLS reframed as read-only/defense-in-depth; explicit "no INSERT/UPDATE/DELETE grant to `authenticated`" stated for every table, with explicit divergence rationale from the SB-P-1.10 direct-grant precedent | MC-EIS-002, SEC-PERM-002 |
| §7 (new) | Three execution identities (`catalog_command_executor`, `catalog_channel_executor`, `catalog_scheduler_executor`) with function-level hardening requirements | MC-EIS-002, MC-EIS-007, SEC-PERM-002, SEC-PERM-003, SEC-PERM-010 |
| §8 | `catalog_manage` split into `catalog_product_manage` + `catalog_lifecycle_manage`; history-read permission mapping added | MC-EIS-006, SEC-PERM-001 |
| §9 | D-047 predicate redefined as two sub-predicates (sale-history stub, tenure-bounded linked-stock-event-history query) with explicit lock ordering against SB-P-1.10's own item lock; interpretive scope question flagged, not silently resolved | MC-EIS-005, SUPA-3, SEC-PERM-006 |
| §10 | New non-mutating `preview_catalog_inventory_link_change` command producing a single-use, fingerprinted token; commit command redesigned as compare-and-commit against that token | MC-EIS-003, SUPA-4, LF-01, LF-02, AIW-004, SEC-PERM-003 |
| §11 | Command step order corrected to resolve idempotency before mutable-state preconditions; new `UNKNOWN_OUTCOME` reconciliation contract (same-key retry or `get_catalog_command_outcome` lookup; no new key; no "nothing changed" before a terminal result) | MC-EIS-004, SEC-PERM-005, LF-04, AIW-008 — and the explicit direction confirmed in this conversation before continuing |
| §12 | Scheduler reassigned from "service-role" to dedicated `catalog_scheduler_executor`; bounded batching (500/run), `SKIP LOCKED` claiming, per-row failure isolation, race handling with cancel/archive, 5-minute lag budget and `activating` UI state | MC-EIS-009, SUPA-6, SUPA-11, SEC-PERM-009 |
| §13 | Security-critical vs. deferred index/threshold split added; tax-mode lock relocated here and corrected from a claimed table `CHECK` to a command invariant calling a named, versioned Sales-integration stub | MC-EIS-013, SUPA-7; instruction §4.16 |
| §14 | File binding via §5.11; mandatory multidimensional resource limits; formula-injection neutralization for every downloadable export; job-level confirmation, apply-time revalidation, per-row resumable claiming | MC-EIS-011, SEC-PERM-007, SEC-PERM-008, LF-06, SUPA-10 |
| §15 | Normative `catalog_update` intent taxonomy and "generalized" Vision pipeline claims removed; full channel-authority contract added (pending-action creation, fresh permission re-check at confirmation, dedup, expiry, durable text preview, voice-reply boundary, AI provenance requirements) | MC-EIS-007, MC-EIS-008, SEC-PERM-003, AIW-001 through AIW-009 |
| §16 | Command table updated for new/changed commands and executor-identity column | Consolidates §7–§15 changes |
| §17 | Cost/margin read hardening (two distinct response shapes, not one nullable field); D-068 preview rendering; stale-state flow; idempotency-key lifecycle and unknown-outcome UI; multilingual/import/scheduled-price presentation; route-exposure gating; accessibility/stable-ID requirements | MC-EIS-010, MC-EIS-012, SEC-PERM-010, LF-01 through LF-08 |
| §18 | Provenance vocabulary standardized across all tables; new reconciliation-health and scheduler-lag metrics | MC-EIS-015, SEC-PERM-011 |
| §21 | Test matrix expanded with command-bypass-denial, identity-scoping, tenure-boundary, compare-and-commit, and unknown-outcome-reconciliation test categories | All blocking/high findings |
| §22 | Traceability matrix extended with 13 new/revised rows covering every structural change | Instruction §8.18 completeness requirement |
| §23 (new, relocated from inline) | Closed hard-deletion contract: full dependency enumeration, default-deny, atomic snapshot-then-delete, `RESTRICT` FKs | MC-EIS-014, SUPA-8, SUPA-9 |
| §24 | Engineering Questions table expanded to 8 items, including the two new transparently-flagged items (D-047 scope interpretation; SB-P-1.10 precedent observation) | SEC-PERM-006's explicit escalation instruction |
| §25 (new) | All seven Stage 10 mandatory open-parameter dispositions recorded verbatim in substance | Instruction §5 |
| §27 | Version 2.0 change-log entry | — |

---

# 6. Traceability from Every Consolidated Finding to the Refined EIS Section

| Consolidated finding (`report1.10.md`) | Severity | Resolved in EIS section |
|---|---|---|
| MC-EIS-001 — Scheduled-price/immutable history contradiction | BLOCKING | §5.3 |
| MC-EIS-002 — Protected writes not proven command-only | BLOCKING | §6, §7 |
| MC-EIS-003 — D-068 needs server-authoritative preview/compare-and-commit | BLOCKING | §10 |
| MC-EIS-004 — Idempotency ordering and unknown outcomes | HIGH | §11, §17 |
| MC-EIS-005 — D-047 not an enforceable predicate | HIGH | §9 |
| MC-EIS-006 — Manager permissions not action-specific | BLOCKING | §8 |
| MC-EIS-007 — Non-interactive channel authority under-specified | BLOCKING | §15, §7 |
| MC-EIS-008 — Conversational-engine ownership boundaries | HIGH | §15 |
| MC-EIS-009 — Scheduled-job privilege and audit design | HIGH | §12 |
| MC-EIS-010 — Permission-aware read functions need hardening | HIGH | §17 |
| MC-EIS-011 — File references and import security incomplete | HIGH | §5.11, §14 |
| MC-EIS-012 — Frontend interaction contracts need determinism | HIGH | §17 |
| MC-EIS-013 — Tax pricing-mode lock is a command invariant | HIGH | §13 |
| MC-EIS-014 — Hard-delete and audit-reference integrity | HIGH | §23, §5.7, §5.13 |
| MC-EIS-015 — Audit provenance standardization | MEDIUM | §5.0, §18 |

Every specialist-numbered finding (SUPA-1 through SUPA-12, SEC-PERM-001 through SEC-PERM-011, AIW-001 through AIW-009, LF-01 through LF-08) cited by the consolidated findings above is individually addressed at its cited EIS location; Section 22's traceability matrix maps each consolidated finding to its resolving section with the specific Founder Decisions and Blueprint sections it implements.

---

# 7. Disposition of Every Mandatory Open Parameter

Recorded in EIS §25, reproduced here for direct report visibility:

1. Multilingual similarity algorithm and threshold — `REFINEMENT REQUIRED`, satisfied.
2. CSV/Excel limits — `REFINEMENT REQUIRED`, satisfied.
3. Index strategy — `REFINEMENT REQUIRED`, satisfied.
4. Scheduled-price polling — `REFINEMENT REQUIRED`, satisfied.
5. Shared permission-engine sequencing — `REFINEMENT REQUIRED`, satisfied (contract defined; sequencing decision remains with Mission Control).
6. Shared conversational-engine sequencing — `REFINEMENT REQUIRED`, satisfied (contract defined; sequencing decision remains with Mission Control).
7. Inventory-link removal without D-068 price reconfirmation — `ACCEPTED AS WRITTEN`, clarification present.

No item required a new Founder decision.

---

# 8. Unresolved Issues

Two items are transparently flagged rather than silently resolved, per instruction §7's requirement to report a genuine ambiguity rather than guess:

1. **D-047 "linked stock-event history" scope** (EIS §9, §24 item 7): does *every* inventory movement occurring during a product's link tenure count toward the D-047 lock, or only movements tied to a future sale/purchase business event? This EIS adopts the more conservative (broader-locking) reading as its working design, consistent with Security and Permissions Finding SEC-PERM-006's explicit instruction to escalate rather than guess when a predicate cannot be derived from the Blueprint text without risk of altering merchant-visible behavior. This does not block EIS review — the design is complete and correct under the adopted reading — but Mission Control/Founder confirmation before EIS Lock would remove the residual interpretive uncertainty.
2. **Cross-mission observation about SB-P-1.10's write pattern** (EIS §24 item 8): the same direct-grant-plus-RLS bypass risk the Security and Permissions review identified as evidence for SB-P-1.11's command-only requirement is also present in SB-P-1.10's own migration. This is noted transparently for Mission Control's awareness; no change to SB-P-1.10 or any file outside SB-P-1.11's authorized scope is proposed or was made.

Neither item is a blocking issue, a Product Truth conflict, or a Founder decision requirement.

---

# 9. Specialist Re-Review Recommendations

Given the depth of the corrections — particularly the scheduled-price data model redesign (§5.3), the three-identity command-only architecture (§6–§7), and the D-068 preview/token contract (§10) — a follow-up specialist pass covering at minimum the Supabase/backend and Security/Permissions domains is recommended before EIS Lock, consistent with Source 18's non-bypassable independent-verification principle. This report does not itself constitute that verification.

---

# 10. Product Truth Integrity Confirmation

No Founder decision was created, modified, reinterpreted, or reopened. D-001 through D-068 are cited, never restated or altered, throughout the refined EIS. No Build Now/Build Later/Add-on/Separate Product/Reject classification changed. No merchant-visible product behavior was redesigned — every correction in this revision is an engineering-implementability fix (a database design that would not have compiled or would have silently permitted a bypass) or a precision improvement to an already-approved behavior (e.g., the D-068 preview contract implements the existing no-silent-reinterpretation rule more rigorously; it does not change what that rule means to a merchant).

---

# 11. Confirmation That the Blueprint and Founder Decision Record Were Unchanged

`docs/phase-1-mission-blueprint/active/SB-P-1.11.md` and `docs/phase-1-mission-blueprint/active/SB-P-1.11-Founder-Product-Decision-Record.md` do not appear in `git status --porcelain` for this branch and were never opened for writing during this mission. Both were consulted read-only per `instruction1.11.md` §2.

---

# 12. Quality-Gate and Scope-Validation Results

- **Markdown Quality Gate** (`tools/markdown/quality_gate.py`) against the refined EIS: PASS — 846 total lines, 107 headings with no invalid jumps, 22 tables validated, 4 fenced code blocks validated, zero lint issues.
- **Markdown Quality Gate** against this report: run before commit.
- **Pre-commit Markdown Quality Gate hook:** runs automatically on `git commit` for all staged Markdown files.
- **`git diff --check`:** run before commit.
- **Exact changed-file scope:** confirmed via `git status --porcelain` — only the two authorized paths (`git diff --stat` shows 549 insertions, 612 deletions against the single EIS file; the report is a new file).
- **Staged secret and credential inspection:** run against the staged diff before commit.
- **Blueprint and Founder Decision Record unchanged:** confirmed (Section 11).
- **Branch-vs-main comparison:** confirmed the mission branch is based on the synchronized latest `origin/main` at `1018695` before any edit was made.

---

# 13. Scope-Boundary Confirmation

- Product Blueprint edited: **NO**
- Founder Product Decision Record edited: **NO**
- New or modified Founder decision: **NO**
- Scope classification (Build Now/Build Later/Add-on/Separate Product/Reject) changed: **NO**
- EIS accepted, approved, or locked: **NO**
- `engineering-contract.md`, `lovable-build-prompt.md`, `verification-checklist.md` created: **NO**
- Application code or tests modified: **NO**
- SQL, migrations, RLS policies, functions, RPC implementations, Edge Functions, webhooks, prompts, or Lovable implementation created or modified: **NO**
- Supabase, storage, infrastructure, deployment, production, or governance sources modified: **NO**
- Prior instructions or reports modified: **NO**
- Self-approval or self-merge: **NO**

---

# 14. Completion Boundary Status

```text
SB-P-1.11 EIS: DRAFT — REFINED, NOT LOCKED
EIS VERIFICATION: PENDING
EIS LOCK: NOT AUTHORIZED
IMPLEMENTATION PACKAGE: NOT AUTHORIZED
IMPLEMENTATION: NOT AUTHORIZED
```

---

# 15. Git and Pull-Request Evidence

- Repository: `SmartBusinessv1/smart-business`.
- Synchronized base: `origin/main` at `1018695`.
- Mission branch: `mission/SB-P-1.11-eis-refinement`.
- Exact changed files: `docs/phase-1-mission-blueprint/implementation/SB-P-1.11-EIS.md` (modified), `communication/live/report1.11.md` (new file).

Commit, push, and pull-request creation follow immediately after this report is written.

---

# 16. Risks and Limitations

- This report cannot record its own creating commit's SHA, since the SHA is only known after the commit is made. The commit is identifiable by its exact approved commit message on the pull request.
- This refinement resolves every accepted Stage 10 finding but does not itself constitute the independent specialist re-verification recommended in Section 9.
- The two transparently-flagged items in Section 8 remain open for Mission Control/Founder awareness; neither blocks Mission Control's review of this refinement.

---

# 17. Final Refinement Disposition

```text
REFINEMENT COMPLETE — READY FOR MISSION CONTROL VERIFICATION
```

Mission Control should independently verify this refinement against `report1.10.md`'s accepted findings, decide whether a specialist re-review pass is required before EIS Lock (Section 9), and decide whether the two transparently-flagged items in Section 8 warrant Founder input before lock. Claude Code does not declare the EIS accepted, approved, or locked, and does not authorize the next lifecycle action.
