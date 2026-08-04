# SMART BUSINESS MISSION CONTROL

# Report 1.9

**Mission ID:** SB-P-1.11

**Mission Name:** Product Catalog & Pricing — Engineering Implementation Specification Creation

**From:** Claude Code — Engineering Review and Implementation Specification

**To:** Mission Control

**Status:** EIS DRAFT COMPLETE — MISSION CONTROL REVIEW REQUIRED

**Date:** 2026-08-04

---

# 1. Mission and Actor Identity

Mission SB-P-1.11, Source 18 Stage 9 — EIS Creation, authorized by `communication/live/instruction1.9.md`. Executing actor: Claude Code — Engineering Review and Implementation Specification.

---

# 2. Exact Synchronized Base Commit

`origin/main` at `13c4f0d` ("Authorize SB-P-1.11 EIS Creation (#44)"), fast-forward synchronized before this mission began.

---

# 3. Exact Branch Name

`mission/SB-P-1.11-eis-creation`, created from `origin/main` at `13c4f0d`. No Mission Control authorization branch was reused, overwritten, or force-pushed.

---

# 4. Exact Commit SHA(s)

Recorded after commit, below in Section 15 ("Git and Pull-Request Evidence"), consistent with the standing constraint that a report cannot contain the SHA of the commit that first creates it.

---

# 5. Pull-Request Number and State

Recorded in Section 15, after creation.

---

# 6. Exact Changed-File List

- `docs/phase-1-mission-blueprint/implementation/SB-P-1.11-EIS.md` (new file)
- `communication/live/report1.9.md` (new file, this report)

No other path changed. `docs/phase-1-mission-blueprint/active/SB-P-1.11.md` and `docs/phase-1-mission-blueprint/active/SB-P-1.11-Founder-Product-Decision-Record.md` were read-only throughout and do not appear in `git status`.

---

# 7. EIS Path

`docs/phase-1-mission-blueprint/implementation/SB-P-1.11-EIS.md`

---

# 8. EIS Status

```text
STATUS: DRAFT — MISSION CONTROL REVIEW REQUIRED
EIS LOCK: NOT APPLIED
IMPLEMENTATION PACKAGE: NOT AUTHORIZED
IMPLEMENTATION: NOT AUTHORIZED
```

The EIS is not labeled approved, accepted, locked, implementation-ready by authority, or authorized for build, per `instruction1.9.md` §6.

---

# 9. Concise Architecture Summary

The EIS defines a catalog domain built directly on SB-P-1.10's own precedent: business-scoped tables reusing the existing `business_id`-plus-`owner_id`-subquery RLS pattern; append-only, immutable, trigger-protected history tables for selling price, tax, and reference cost (mirroring `inventory_movements`'s append-only design, with current values always *derived*, never stored, from the latest applicable history row — the same "no direct mutation" principle SB-P-1.10 established); a dedicated `catalog_product_link_events` table plus a single atomic, row-locked, idempotent command (`assign_or_replace_catalog_inventory_link`) implementing the D-068 safeguard for both first-time assignment and permitted replacement; a shared, reusable `catalog_audit_events` table for the remaining mutable fields (not a catalog-specific one-off); an extension of the approved-but-unimplemented `file_import_jobs` conceptual pattern (Source 02 §3.15A) for CSV/Excel import; and explicit, contract-level (not implementation-level) specifications for the two capabilities the Engineering Review identified as depending on shared platform foundations that do not yet exist anywhere in the repository — a Manager/Employee permission engine and a WhatsApp/voice/photo conversational pipeline.

A four-phase build sequence is specified: Phase 1 (no cross-mission dependency — the full core catalog/pricing capability), Phase 2a (permission-engine-dependent), Phase 2b (CSV/Excel import — sizeable but not cross-mission-blocked), and Phase 3 (conversational-engine-dependent), matching the Blueprint's own locked §20–21 sequencing exactly.

---

# 10. Treatment of All Required EIS Coverage Areas

Every area required by `instruction1.9.md` §8.1–§8.18 is addressed in a dedicated EIS section:

| Instruction area | EIS section |
|---|---|
| 8.1 Architecture and Scope Map | §4 |
| 8.2 Data Model | §5 (11 subsections covering every entity instruction §8.2 lists by name) |
| 8.3 Business Isolation and RLS Design | §6 |
| 8.4 Permission-Engine Dependency | §7 |
| 8.5 Catalog–Inventory Link Integrity | §8 |
| 8.6 D-068 Atomic Safeguard | §9 |
| 8.7 Price, Tax, and Cost Write Integrity | §10 |
| 8.8 Scheduled Pricing and Timezone Handling | §11 |
| 8.9 Multilingual Normalization and Search | §12 |
| 8.10 CSV and Excel Import Architecture | §13 |
| 8.11 WhatsApp, Voice, Text, and Photo Dependency | §14 |
| 8.12 API, RPC, and Command Contracts | §15 |
| 8.13 Frontend and Lovable Responsibilities | §16 |
| 8.14 Audit and Observability | §17 |
| 8.15 Security and Privacy | §18 |
| 8.16 Migration and Rollout Strategy | §19 |
| 8.17 Testing and Verification Matrix | §20 |
| 8.18 Traceability Matrix | §21 |
| §9 Engineering Questions and Risks | §22 |

No database schema, SQL, migration file, RPC implementation, webhook code, AI prompt, or Lovable build prompt was created in satisfying any of the above; every area is addressed at data-dictionary/contract/design-decision level, consistent with the discipline `docs/phase-1-mission-blueprint/implementation/SB-P-1.10-EIS.md` established as reusable engineering precedent.

---

# 11. Cross-Mission Dependencies

Two, both carried forward unchanged from the locked Blueprint §20–21 and Engineering Review:

1. **Shared permission engine** (Owner/Manager/Employee action-specific permissions) — required for Phase 2a. EIS §7 specifies the seven catalog-specific flags required, all mechanically derived from Blueprint §8 "Permissions" with no invention, plus the temporary Owner-only sequencing posture for Phase 1.
2. **Shared conversational engine** (WhatsApp webhook, identity router, multi-modal processing, intent classification per Sources 04/05) — required for Phase 3. EIS §14 specifies the catalog-specific intent contract that pipeline must eventually satisfy.

Neither dependency is specific to SB-P-1.11; both were already identified as non-catalog-specific in the accepted Engineering Review. This EIS does not decide how or when either shared foundation is built — that sequencing decision remains with Mission Control (EIS §22, Engineering Question 5, disposition `REFINEMENT REQUIRED`).

---

# 12. Blocking Issues and Specialist-Review Needs

**Blocking issues:** none. No Product Truth conflict was identified; every design decision traces to an existing Founder decision or Blueprint section (EIS §21 Traceability Matrix).

**Specialist-review items** (EIS §22, all `SPECIALIST REVIEW REQUIRED`, none blocking the EIS draft itself):

1. Exact multilingual possible-match similarity threshold and algorithm sufficiency.
2. Final CSV/Excel import size/row limits (EIS proposes 5,000 rows / 10 MB as a starting value).
3. Final index selection for every new table (deferred to query-plan-validated detailed design, mirroring SB-P-1.10 EIS's own index decision gate).
4. `activate_scheduled_catalog_prices` polling interval (EIS proposes 1 minute).

One additional item was examined and resolved rather than escalated: whether removing a product's inventory link (the third D-047 action) requires a D-068-style price-reconfirmation safeguard. EIS §8 concludes it does not — removal writes no new unit or price value, so no reinterpretation risk analogous to D-068 is introduced — and this reasoning is recorded explicitly in the EIS so Mission Control can confirm or override it rather than have it silently embedded.

---

# 13. Product Truth Integrity Confirmation

No Founder decision was created, modified, reinterpreted, or reopened. D-001 through D-068 are treated as immutable throughout the EIS and are cited, not restated or altered, wherever relevant (EIS §21 Traceability Matrix cites the specific decisions behind every material design choice). No Build Now/Build Later/Add-on/Separate Product/Reject classification was altered. The mission was not broadened beyond Product Catalog & Pricing — every entity, command, and dependency in the EIS exists to implement a requirement already stated in the locked Blueprint.

---

# 14. Confirmation That the Blueprint and Founder Decision Record Were Not Modified

`docs/phase-1-mission-blueprint/active/SB-P-1.11.md` and `docs/phase-1-mission-blueprint/active/SB-P-1.11-Founder-Product-Decision-Record.md` do not appear in `git status --porcelain` for this branch and were never opened for writing during this mission. Both files were consulted read-only per `instruction1.9.md` §4.

---

# 15. Git and Pull-Request Evidence

- Repository: `SmartBusinessv1/smart-business`.
- Synchronized base: `origin/main` at `13c4f0d`.
- Mission branch: `mission/SB-P-1.11-eis-creation`.
- Exact changed files: `docs/phase-1-mission-blueprint/implementation/SB-P-1.11-EIS.md`, `communication/live/report1.9.md`.

Commit, push, and pull-request creation follow immediately after this report is written, per the same validation sequence recorded below. This report will be updated with commit SHA and PR number in the pull-request description rather than in this file's own body, since a commit cannot contain its own SHA.

---

# 16. Validation and Quality-Gate Results

- **Markdown Quality Gate** (`tools/markdown/quality_gate.py`) against the EIS: PASS — 909 total lines, 139 headings with no invalid jumps, 22 tables validated, 3 fenced code blocks validated, zero lint issues.
- **Markdown Quality Gate** against this report: run before commit.
- **Pre-commit Markdown Quality Gate hook:** runs automatically on `git commit` for all staged Markdown files.
- **Whitespace check:** `git diff --cached --check` run before commit.
- **Exact changed-file scope:** confirmed via `git status --porcelain` — only the two authorized new files.
- **Staged secret and credential inspection:** run against the staged diff before commit.
- **Remote branch and pull-request verification:** confirmed after push, before this report's completion status is finalized.

---

# 17. Scope-Boundary Confirmation

- The Product Blueprint was not edited.
- The Founder Product Decision Record was not edited.
- No new Founder decision was created.
- EIS acceptance was not performed.
- EIS lock was not applied.
- No implementation package (`engineering-contract.md`, `lovable-build-prompt.md`, `verification-checklist.md`) was created.
- No application code, test, database file, SQL, migration, RLS policy, RPC/Edge Function implementation, webhook implementation, AI prompt/model configuration, or Lovable file was created or modified.
- No infrastructure, deployment, or production state was touched.
- No governance source under `merge/active/**` was modified.
- No prior instruction or report was modified.
- This mission does not authorize itself, Mission Control, the Founder, or any later lifecycle actor to proceed further.
- This pull request will not be approved or merged by Claude Code.

---

# 18. Final Disposition

```text
EIS DRAFT COMPLETE — READY FOR MISSION CONTROL REVIEW
```

Mission Control should review the EIS at its original path, decide whether the specialist-review items (Section 12) and the permission-engine/conversational-engine sequencing question (Section 11) require resolution before EIS review proceeds, and separately authorize EIS review, refinement, and lock as the next Source 18 lifecycle actions. Claude Code does not authorize the next stage.
