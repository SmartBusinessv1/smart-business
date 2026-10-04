# SB-OPS-REPO-HOUSEKEEPING-1.9 — Stale GitLab Path Reconciliation List

**Mission:** SB-OPS-REPO-HOUSEKEEPING-1.9
**Execution actor:** Claude Code
**Canonical baseline:** `main` at `7d719d3501d530df2c5e3464b8adf79da0fdcec8`
**Date:** 2026-10-04
**Evidence:** [`01_final_preseed_residual_review.md`](01_final_preseed_residual_review.md) §10

| | Path |
|---|---|
| **Verified live target** (accepted by Mission Control; PR #750 review) | `team-lips/smart-business/smart-business-continuity` |
| **Pre-subgroup path** searched | `team-lips/smart-business-continuity` |

**Method:** `git grep -F` over the full tracked tree at the baseline, for both strings. Every hit was then read in context. No file listed here was edited.

**Result:** 12 files contain the pre-subgroup path, and none is under `communication/archive/`. Only housekeeping documents contain the verified path. **No current canonical continuity record (mission memory or SB-P-1.12 records) states the verified target.**

## 1. Historical / Dated Records — Leave Untouched

These record what was planned or instructed when they were written. They are dated decision, guidance or exchange evidence and should not be rewritten.

| Path | Occurrences | Nature |
|---|---:|---|
| `communication/missions/SB-P-1.12/mission-control/57-founder-gitlab-structure-and-infrastructure-guidance-authorization.md` | 2 | MC-187, 2026-10-03: "preferred path" and Step 7 creation plan |
| `communication/missions/SB-P-1.12/mission-control/58-founder-gitlab-live-guided-setup-authorization.md` | 2 | MC-188, 2026-10-03: live-setup authorization |
| `communication/missions/SB-P-1.12/specialists/13-stage13-founder-gitlab-setup-guidance.md` | 5 | Infrastructure setup guidance used during the live setup |
| `communication/live/report1.48.md` | 5 | Completed Infrastructure guidance report (exchange evidence; archived byte-identically at mission closure) |
| `communication/missions/SB-OPS-REPO-HOUSEKEEPING-1.1/mission-control/01_preseed_controls_execution_authorization.md` | 1 | Dated Mission Control authorization (parallel-boundary text) |
| `communication/missions/SB-OPS-REPO-HOUSEKEEPING-1.5/claude-code/01_eos_governance_and_local_draft_decision_dossier.md` | 1 | Dated dossier note that raised the discrepancy (also contains the verified path) |

## 2. Current Operational Records — Later Reconciliation Candidates

| Path | Occurrences | Why current | Recommended reconciliation method |
|---|---:|---|---|
| `communication/live/instruction1.49.md` | 1 | Latest live instruction in the active SB-P-1.12 channel (MC-188); states the target "must remain Private, blank…" using the pre-subgroup path | **Supersede, do not rewrite:** the next SB-P-1.12 live instruction or Mission Control record (for example the seed authorization) states the verified target and notes that 1.48 and 1.49 used the pre-subgroup path. Live files are later archived byte-identically under Protocol §26 |
| `communication/live/instruction1.48.md` | 3 | Live instruction in the active channel (MC-187 Infrastructure guidance) | Same as above |
| **Gap:** `mission-control/mission_memory.md` | 0 | Current-state record naming no GitLab target | **Add** the verified target to the "Repository Continuity and Housekeeping State" section (a new line, not a rewrite) |
| **Gap:** SB-P-1.12 durable record (for example `communication/missions/SB-P-1.12/decision-log.md` or a new Mission Control record) | 0 | Continuity decisions live here, but the subgroup structure is not recorded | **Add** a dated entry recording the verified live target and that it supersedes the MC-187 / MC-188 pre-subgroup path |

Recommended timing: **before or with the seed authorization** (classified RECOMMENDED BEFORE FIRST SEED BUT NOT BLOCKING). The seed instruction itself must name `team-lips/smart-business/smart-business-continuity` exactly.

## 3. Already Correct

These mention the pre-subgroup path only as a stale or search term, alongside the verified target.

| Path | Note |
|---|---|
| `docs/governance/Repository_Health_Checklist.md` | Item 11 names the verified target and treats the old path as stale documentation (PR #750) |
| `communication/missions/SB-OPS-REPO-HOUSEKEEPING-1.7/claude-code/01_navigation_policy_and_cadence_report.md` | Records the verified target; old path listed as documentation reconciliation only |
| `communication/missions/SB-OPS-REPO-HOUSEKEEPING-1.9/mission-control/01_final_preseed_residual_review_authorization.md` | Uses the old path as the search term; names the verified target |
| `communication/missions/SB-OPS-REPO-HOUSEKEEPING-1.9/claude-code/00_final_preseed_residual_review_handoff.md` | Uses the old path as the search term |

## 4. Archive

`communication/archive/**`: **0 occurrences.** Nothing to leave or reconcile.
