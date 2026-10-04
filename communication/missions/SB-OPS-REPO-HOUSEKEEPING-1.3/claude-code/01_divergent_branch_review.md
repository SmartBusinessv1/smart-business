# SB-OPS-REPO-HOUSEKEEPING-1.3 — Divergent Branch Review

**Mission:** SB-OPS-REPO-HOUSEKEEPING-1.3
**Parent:** SB-OPS-REPO-HOUSEKEEPING-1.0 (accepted PRs #736, #738, #740)
**Execution actor:** Claude Code
**Authority:** `communication/missions/SB-OPS-REPO-HOUSEKEEPING-1.3/mission-control/01_divergent_branch_review_authorization.md`
**Handoff:** `communication/missions/SB-OPS-REPO-HOUSEKEEPING-1.3/claude-code/00_divergent_branch_review_handoff.md`
**Date:** 2026-10-04
**Mode:** Read-only branch-content review
**Register:** [`02_divergent_branch_register.md`](02_divergent_branch_register.md)

## 1. Answer to the Key Question

> Does any divergent branch contain material that should be recovered into canonical `main` before the repository can reasonably be declared "clean enough to preserve"?

**NO — all divergent work is superseded, historical or abandoned.**

- 18 branches are **superseded**: their purpose was completed by later merged PRs or records, or their files are byte-identical in `main` or its immutable archives.
- 1 branch is **abandoned / erroneous**: a 4-byte `temp` placeholder.
- No branch requires recovery, and none requires a Founder or owner decision first.

This answers only the divergent-branch dependency. The global "clean enough to preserve" decision remains with Mission Control and the Founder.

## 2. Authority and Baseline

| Check | Result |
|---|---|
| Canonical `main` | `7055361d89fb000e543876672cc617c30a404d65`, equal to the authorized baseline (merge of PR #741); unchanged at completion |
| Authorization and handoff | Present on `main`; read in full |
| Prior inputs read | Audit `01`/`02` (1.0), branch-seed timing analysis `03` (1.1) |
| Newer or conflicting authority | None; 0 open PRs |
| Mission branch | `mission/SB-OPS-REPO-HOUSEKEEPING-1.3-claude-code-branch-review` (Mission Control's authorization branch uses `…-1.3-divergent-branch-review`) |

## 3. Method and Drift Check

**Divergent-set drift: none.** The deterministic partition from 1.1 (report 03, Section 2) was re-run against live refs (674 remote heads):

| Class | Count |
|---|---:|
| A (merged PR, tip = merged head) | 649 |
| B (ancestor of `main`) | 4 |
| C (all content identical in `main`) | 1 |
| Non-unique total | 654 |
| D (divergent) | **19** |

The D set equals the authorized 19 exactly. The non-unique set grew from 650 to 654 through new merged-PR head branches, as expected. All 19 tips were verified with `git rev-parse` and are recorded in the register. Each branch's commits ahead of `main` match the 1.1 snapshot.

**Per-branch evidence:**

- tip and merge base with `origin/main`;
- unique commits (`git log origin/main..<branch>`);
- changed files from the merge base, with rename detection;
- for each file, its blob compared with the same path on `main`;
- the share of the branch's distinctive added lines (30 characters or more) found anywhere in `main`'s tree, which detects content moved to another path;
- related PRs (737 PRs listed, all states) and whether the tip moved after a merged PR;
- targeted reads of the files, the superseding records and PR comments.

Archive files were compared by blob ID and never modified.

## 4. Findings by Group

### 4.1 Build Assurance — DB-06 (deep review)

`mission/SB-ENG-BUILD-ASSURANCE-1.0-foundation`: 12 commits on 2026-09-14, no PR, base `main@9b0b65b`.

**Unique material (all 12 files).** This is governance scaffolding for a non-Product mission titled "Build Assurance & Automation Foundation":

- `README.md` (charter, 7.5 KB): identity; purpose; authority boundary; Build Now (Stage 1 read-only inventory and design); Build Later; separate-mission candidates; reject list; governing sources; principles; stage sequence; Stage 1 acceptance conditions;
- `scope.md`, `decision-log.md` (3 entries), `handover-log.md`, `activation-checklist.md`, `founder/README.md`;
- `mission-control/01_activation.md`, `02_activation_pr_note.md`;
- two "Stage 1 pointer" stubs;
- live `instruction.md` / `report.md` pointer stubs.

**There is no Stage 1 report, workflow, script, test or code on the branch.** Its status line reads "ACTIVATION AUTHORIZED — AWAITING ACTIVATION PR MERGE"; no activation PR was ever opened.

**Overlap with `main`:**

- `SB-OPS-BUILD-ASSURANCE-1.0` was activated the same day (#574), with the identical mission name and the same Founder approval date (D-001, 2026-09-14). It carries 11 Mission Control records, a Founder authorization, a Stage 1 report and Codex reviews.
- It delivered `.github/workflows/build-assurance.yml` and `docs/engineering/assurance/Build_Assurance_Baseline.md`, and is `CLOSED — ACCEPTED`.
- Its Stage 1 report (`claude-code/01-stage1-report.md`, lines 24 and 99) explicitly records that `mission/SB-ENG-BUILD-ASSURANCE-1.0-foundation` "was not reused or merged".

**Would anything important be lost?** No.

- The branch's "Build Later" capabilities are implemented or recorded on `main`:
  - CI baseline: implemented;
  - evidence manifests: the "assurance evidence contract";
  - permission/denial harness: deferred list;
  - migration-ledger checking: deferred list;
  - repository drift detection: deferred list;
  - traceability: deferred list;
  - provider-state monitoring: deferred list.
- Four idea-level "separate mission / add-on candidates" appear only on the branch: third-party security scanning, production synthetic monitoring, deployment automation, production load testing. They were explicitly out of scope there. The Founder's recorded AC-02 intent (daily application audit covering security, bugs, scalability and performance, in `mission_memory.md`) covers them conceptually. They are noted here for any future assurance backlog, not as recovery material.

**Would recovery conflict?** Yes. It would introduce a second, unactivated mission ID for work already completed under `SB-OPS-BUILD-ASSURANCE-1.0`, and would overwrite the live pointer files.

**Classification:** SUPERSEDED — SAFE FOR LATER PRUNE (HIGH). It has no PR, so `refs/pull/*` does not preserve it; the GitLab seed under Option B will.

### 4.2 SB-P-1.11 GC / FWR branches — DB-10 to DB-15

| ID | Nature | Evidence |
|---|---|---|
| DB-10 | Superseded draft instruction | Closed #221; the canonical FWR-5 `instruction1.94.md` (same micro-correction) is in the archive |
| DB-11 | Durable evidence already preserved | `instruction1.82.md` and `report1.89.md` byte-identical in `communication/archive/SB-P-1.11/source/` |
| DB-12 | Superseded earlier report | Closed #193 (open 22 minutes); #194 merged a fuller `report1.88.md` with the same "not proven" verdict |
| DB-13 | Durable evidence already preserved | `instruction1.106.md` and `report1.115.md` byte-identical in the archive |
| DB-14 | Durable evidence already preserved | `report1.144.md` byte-identical in the archive; two "temporary branch marker" commits add and remove a marker |
| DB-15 | Erroneous | Single "temp" commit adding a 4-byte `tmp-placeholder.txt` |

No unique verification evidence remains outside the archive. The archive was not touched.

### 4.3 SB-P-1.12 branches — DB-03, DB-16 to DB-19

All five were superseded by later canonical Mission Control or Founder records:

- **DB-03:** a later, different successor handover was merged at the same path (#620).
- **DB-16:** MC-59 reissued and merged (#648); ESC-1 records 27–31 follow.
- **DB-17:** MC-25 canonical via #634 and executed (report 18).
- **DB-18:** Mission Control closed #732 as a "superseded duplicate" of the merged #733.
- **DB-19:** the MC-182 succession handover was overtaken the same day. #724 merged MC-182 as the Founder continuity decision disposition, resolving FD-C1 to FD-C7, and all factual content of the handover (GitHub Support ticket, community discussions, account flag) is present on `main`.

The active mission was not modified.

### 4.4 Phase 1 history and governance-communication branches — DB-01, DB-02, DB-04, DB-05, DB-07, DB-08, DB-09

- **DB-02, DB-05, DB-07, DB-08, DB-09:** superseded by merged PRs or completed missions (register rows). Every post-merge commit on DB-02 and DB-05 is represented on `main`.
- **DB-04:** an alternative extraction of Ground Zero Questions 59–68. The canonical extraction (#524, Section 5 Part B) was merged 12 minutes before #525 was closed.
- **DB-01:** the one MEDIUM-confidence item. Its final commit `c900f65` restructured `00_Global_Product_Completion_View.md` after #535 merged; it never landed, and #537 merged only the ledger. Main's view has since been amended under the SB-GOV-PRODUCT-EXEC-1.0 redline (#606), so recovering the restructure would conflict with current governance. The only residual is navigational: main's view does not link the `08_Current_Source_Reconciliation_Ledger.md` that exists on `main`. That is optional and not a recovery need.

## 5. Classification Summary

| Classification | Count |
|---|---:|
| RECOVER INTO MAIN — CANDIDATE | 0 |
| SUPERSEDED — SAFE FOR LATER PRUNE | 18 |
| HISTORICAL ONLY — KEEP / LATER PRUNE DECISION | 0 |
| ABANDONED / ERRONEOUS — SAFE FOR LATER PRUNE | 1 |
| OWNER DECISION REQUIRED | 0 |

- **RECOVER INTO MAIN candidates:** none.
- **OWNER DECISION REQUIRED:** none.

**Notes for the later governed prune (not authorized here):**

- Under D-3 / Option B all 19 refs remain through the first GitLab seed.
- DB-06, DB-14 and DB-15 have no PR, so after a GitHub prune their only copy is the GitLab seed.
- The later prune must re-derive the divergent set at execution time.
- These 19 refs can be considered alongside the non-unique set only after Mission Control dispositions this register. Until then they stay excluded from any bulk prune, per the existing rule.

## 6. Validation

| Check | Result |
|---|---|
| Canonical `main` at completion | `7055361d89fb000e543876672cc617c30a404d65` (unchanged) |
| Branch tips | All 19 verified (register) |
| Secret values | None copied. Reports contain paths, SHAs, PR numbers and public discussion/ticket identifiers already on `main` |
| Markdown quality | `tools/markdown/quality_gate.py` (non-modifying): PASS, 0 issues, both files; re-run by pre-commit hook |
| `git diff --check` | Clean |
| Changed paths | Only the two authorized report files |

## 7. Confirmation of No Mutation

- No merge, cherry-pick, rebase or force push.
- No branch or tag deleted; no ref pruned; no PR closed or reopened.
- No GitHub or GitLab setting changed; GitHub access was read-only (`gh pr list`/`view`, `gh api` GET). No GitLab seed.
- No application code, governance, documentation outside the two reports, SQL or migration changed; archives untouched.

DIVERGENT BRANCH REVIEW SUBMITTED — NO MERGE / DELETE / PROVIDER MUTATION PERFORMED — STOP FOR MISSION CONTROL DISPOSITION
