# SMART BUSINESS MISSION CONTROL

# SB-OPS-REPO-HOUSEKEEPING-1.2 — Repository Record Reconciliation Authorization

**Date:** 2026-10-04  
**Owner:** Mission Control  
**Parent mission:** SB-OPS-REPO-HOUSEKEEPING-1.0  
**Depends on:** accepted audit PR #736 and accepted pre-seed controls PR #738  
**Execution actor:** Claude Code  
**Status:** DRAFT — EFFECTIVE ONLY AFTER HUMAN MERGE TO CANONICAL `main`  
**Mode:** LOW-RISK DOCUMENTATION / RECORD RECONCILIATION ONLY

## 1. Purpose

Continue the repository-housekeeping mission before the first GitLab continuity seed.

This package repairs stale or misleading repository-facing records that the accepted housekeeping audit identified as high-confidence documentation drift.

The goal is to make the canonical GitHub repository easier to understand and safer to preserve, without performing branch cleanup, EOS restructuring, provider mutation or application changes.

## 2. Authorized housekeeping candidates

This package covers exactly:

- **HK-027** — reconcile `communication/governance/branch-protection-verification.md` with MC-160 and current advisory Markdown-gate state;
- **HK-036** — refresh `mission-control/mission_memory.md` so current operational state is no longer stale;
- **HK-032** — repair six broken links in `communication/missions/SB-P-1.12/README.md`;
- **HK-031 / HK-070** — correct the root `README.md` high-level repository map, removing stale `app/` references and reflecting the actual top-level source structure;
- **HK-030** — reconcile `merge/README.md` with the current canonical role of `merge/active/`; do not delete `merge/merged/.gitkeep` in this package;
- **HK-021** — update `tools/README.md` so it reflects the currently tracked tooling layout;
- **HK-010** — refresh `docs/engineering/eos/Engineering_Tooling_Register.md` only as a factual tooling inventory record.

## 3. Critical authority boundaries

This package must NOT resolve the EOS authority-order conflict.

In particular:

- do not alter `AGENTS.md`;
- do not alter Source 17 or Source 18;
- do not change EOS precedence;
- do not change the status of dormant EOS documents;
- do not redesign the Tooling Register into a new authority source.

For HK-010, update only factual tooling/inventory information needed to remove stale descriptions. If the file's governance status itself is ambiguous, preserve the status and report the ambiguity for the later EOS governance mission.

The current Markdown Quality Gate advisory status is already established by MC-160. Do not reopen that policy question.

## 4. Required edits

### 4.1 HK-027 — branch-protection verification record

Update the record so it clearly distinguishes:

- what was historically verified;
- what the current live provider state is;
- MC-160's decision that the Markdown Quality Gate is advisory;
- the fact that GitHub Actions dispatch/check evidence remains affected by the recorded provider-side incident.

Do not claim a provider control exists if live evidence says it does not.

Do not change GitHub settings.

### 4.2 HK-036 — mission memory

Refresh only enough to make the current operational state accurate.

At minimum reflect:

- SB-P-1.12 continuity work remains active;
- GitHub remains canonical;
- GitLab remains intended private downstream/non-canonical continuity;
- repository housekeeping audit and pre-seed controls are accepted/canonical;
- first GitLab seed remains held until housekeeping reaches Mission Control/Founder “clean enough to preserve” disposition;
- Track A physical/offline baseline remains separately governed;
- no cleanup authority should be inferred from audit classifications.

Do not rewrite historical mission-memory sections unnecessarily.

### 4.3 HK-032 — SB-P-1.12 mission README

Repair the six broken blueprint/navigation links identified by the accepted audit.

Use the actual current canonical paths.

Do not alter mission substance.

### 4.4 HK-031 / HK-070 — root README repository map

Correct the high-level structure so it reflects the real repository.

At minimum:

- replace stale/nonexistent `app/` with the actual application source location;
- include the major top-level directories necessary for a new operator to navigate the repository;
- keep the map compact and useful;
- do not turn the root README into a comprehensive architecture document.

### 4.5 HK-030 — merge README

Reconcile the README with the current use of:

- `merge/active/` as the canonical flat source set;
- historical/consolidation material where applicable.

Do not move/delete files.

Do not invent a new merge governance model.

### 4.6 HK-021 — tools README

Update the tools directory map so it accurately lists the tracked tooling families and currently present scripts.

This is documentation-only.

Do not modify scripts.

### 4.7 HK-010 — Engineering Tooling Register

Refresh stale factual entries only.

Cross-check against actual repository tooling and current operating records.

Do not resolve EOS authority or reclassify the file's governance status in this mission.

If a current factual item cannot be verified, mark it clearly rather than guessing.

## 5. Validation

Claude Code must:

- verify every edited path exists on current canonical main;
- validate internal relative Markdown links touched by this package;
- run the repository Markdown quality tooling in non-modifying mode;
- run `git diff --check`;
- verify no unexpected file changed.

## 6. Writable paths only

Claude Code may modify exactly these seven files:

1. `communication/governance/branch-protection-verification.md`
2. `mission-control/mission_memory.md`
3. `communication/missions/SB-P-1.12/README.md`
4. `README.md`
5. `merge/README.md`
6. `tools/README.md`
7. `docs/engineering/eos/Engineering_Tooling_Register.md`

Claude Code may additionally create exactly one report:

8. `communication/missions/SB-OPS-REPO-HOUSEKEEPING-1.2/claude-code/01_record_reconciliation_report.md`

No other path may change.

## 7. Prohibited actions

Do NOT:

- delete/rename/move files;
- delete branches or tags;
- close PRs;
- change GitHub/GitLab settings;
- start the GitLab seed;
- create/modify GitLab resources;
- alter application code;
- alter tests;
- alter SQL/migrations;
- alter scanner configs;
- alter `.gitignore` or `.gitattributes`;
- resolve EOS authority order;
- modify `AGENTS.md`, Source 17 or Source 18;
- rewrite history;
- self-merge.

## 8. Completion report requirements

The report must contain:

1. canonical baseline SHA;
2. exact changed paths;
3. per-HK summary of what was reconciled;
4. any ambiguity deliberately deferred;
5. internal-link validation result;
6. Markdown quality result;
7. `git diff --check` result;
8. confirmation no provider/ref/code/schema mutation occurred;
9. residual housekeeping items that remain outside this package.

Open one PR containing only the eight authorized paths.

Return:

- canonical baseline SHA;
- branch;
- final head SHA;
- all changed-file blob SHAs;
- PR number/URL;
- exact changed-file list;
- validation results;
- concise residual housekeeping list.

End the report exactly:

**RECORD RECONCILIATION SUBMITTED — NO BRANCH / PROVIDER / APPLICATION MUTATION PERFORMED — STOP FOR MISSION CONTROL DISPOSITION**
