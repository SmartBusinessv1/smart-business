# SMART BUSINESS MISSION CONTROL

# SB-OPS-REPO-HOUSEKEEPING-1.9 — Final Pre-Seed Residual Review Authorization

**Date:** 2026-10-04
**Owner:** Mission Control
**Parent mission:** SB-OPS-REPO-HOUSEKEEPING-1.0
**Execution actor:** Claude Code
**Status:** DRAFT — EFFECTIVE ONLY AFTER HUMAN MERGE TO CANONICAL `main`
**Mode:** FINAL EVIDENCE + DISPOSITION SUPPORT ONLY — NO PROVIDER / REF / SEED MUTATION

## 1. Purpose

Prepare the final residual decision package before Mission Control / Founder decide whether GitHub is “clean enough to preserve” for the first GitLab continuity seed.

Review only the remaining branch-lifecycle / security / provider-state questions:

- **HK-057** — `delete_branch_on_merge=false`
- **HK-058** — branch naming drift / forward convention
- **HK-060** — GitHub secret scanning / push protection / Dependabot security-update posture
- **HK-061** — archived Supabase anon-role JWT / publishable-key identifiers
- **HK-063** — AWS account-bearing ARNs / infrastructure identifiers
- **HK-072** — stale-branch lifecycle policy
- **HK-074** — dependency-update policy

Also reconcile the current state of:

- **HK-050 / HK-051 / HK-052** — stale ordinary branch prune timing
- **HK-062** — scanner-triggering test fixtures
- **HK-078** — history-wide secret scan
- stale current-document references to the old GitLab target `team-lips/smart-business-continuity`

No setting, ref, workflow, file cleanup, secret rotation, or GitLab seed may be executed in this mission.

## 2. Canonical decisions that must be preserved

### D-3 branch timing

The Founder / Mission Control decision is already canonical:

- retain non-unique stale ordinary branches through the **first GitLab seed**;
- prune later under a separate governed mission;
- re-derive the stale set at prune time;
- exclude divergent refs until separately dispositioned.

Therefore HK-050 / HK-051 / HK-052 are **not** open pre-seed prune decisions.

### Secret-scan baseline

The accepted SB-OPS-REPO-HOUSEKEEPING-1.1 evidence established:

- history-wide Gitleaks scan;
- no credible secret;
- known fixtures / public identifiers classified;
- no unresolved secret blocker.

HK-078 is therefore complete for first-seed purposes.

### Fixtures

HK-062 test fixtures are accepted as legitimate fixtures / synthetic material. Determine whether any GitLab-side scanner handling is actually required **before** first seed based on the current GitLab target configuration and seed mechanism. Do not assume provider blocking without evidence.

## 3. Required analysis per open item

For each of HK-057, HK-058, HK-060, HK-061, HK-063, HK-072 and HK-074 provide:

- current factual state;
- current risk;
- whether it affects preservation integrity;
- whether it affects first-seed executability;
- whether it is a provider-setting mutation, repository-doc change, or later operational hygiene;
- exact recommended disposition;
- whether Founder approval is needed;
- whether action is required **before first seed**, **before later branch prune**, or **can be deferred**.

## 4. Item-specific questions

### HK-057 — delete branch on merge

Determine whether enabling automatic branch deletion:
- is needed before first seed;
- should instead be enabled after first seed and before/with later stale-branch pruning;
- could interfere with Option B preservation intent if enabled too early.

Do not change the setting.

### HK-058 — branch naming

Determine whether the existing `AGENTS.md` convention is sufficient for forward work or whether an additional policy is needed.

Do not rename any existing branch.

### HK-060 — GitHub security settings

Read current provider state if available and determine separately for:
- secret scanning;
- push protection;
- Dependabot alerts/security updates.

Distinguish:
- useful security hardening;
- seed blocker;
- public-repository risk;
- provider mutation requiring explicit Founder authority.

Do not enable anything.

### HK-061 — Supabase anon/public identifiers

Reconfirm from repository evidence:
- whether the exposed values are anon/publishable identifiers rather than service-role secrets;
- whether rotation is required;
- whether they block first seed;
- whether the correct action is explicit risk acceptance, later redaction, or no action.

Do not rotate or redact.

### HK-063 — AWS identifiers

Reconfirm:
- whether the ARNs/account IDs/bucket/region values are credentials or identifiers;
- whether any current example file unnecessarily exposes infrastructure identifiers;
- whether first seed changes anything about exposure;
- whether later placeholdering is worthwhile.

Do not edit examples.

### HK-072 — stale-branch lifecycle policy

Propose a short future lifecycle rule consistent with Option B, including:
- ordinary mission branch deletion after human merge;
- exceptions for active/unmerged/divergent/investigation refs;
- periodic re-derivation rather than static deletion lists.

Do not implement the policy.

### HK-074 — dependency update policy

Determine the minimum later policy:
- alerts only;
- security updates;
- version updates;
- cadence / review ownership.

Separate npm from stale secondary Bun state.

Do not enable Dependabot or change config.

## 5. Stale GitLab target documentation

Search current, non-archived repository records for the old path:

`team-lips/smart-business-continuity`

Separate:
- historical/archive references that should remain untouched;
- current operational records that should later be reconciled to:
  `team-lips/smart-business/smart-business-continuity`

Produce an exact path list for current-document reconciliation.

Do not edit those files in this mission.

## 6. Final pre-seed matrix

Produce a matrix with one of these classifications:

- **MUST RESOLVE BEFORE FIRST SEED**
- **RECOMMENDED BEFORE FIRST SEED BUT NOT BLOCKING**
- **DEFER UNTIL AFTER FIRST SEED**
- **DEFER UNTIL BEFORE/AT BRANCH PRUNE**
- **ACCEPT AS-IS / NO ACTION**
- **FOUNDER DECISION REQUIRED**

For each row state the exact dependency.

## 7. Global question

Answer explicitly:

> Based on the accepted housekeeping evidence from SB-OPS-REPO-HOUSEKEEPING-1.0 through 1.8 and this residual review, is there any known unresolved repository-local housekeeping item that prevents GitHub from being declared “clean enough to preserve” for the first GitLab seed?

Do **not** make the Founder/MC declaration itself.

Also list any provider-side pre-seed check that must still happen immediately before seed (for example GitLab automated-code-review behavior).

## 8. Writable paths only

Claude Code may create only:

1. `communication/missions/SB-OPS-REPO-HOUSEKEEPING-1.9/claude-code/01_final_preseed_residual_review.md`
2. `communication/missions/SB-OPS-REPO-HOUSEKEEPING-1.9/claude-code/02_final_preseed_decision_matrix.md`
3. `communication/missions/SB-OPS-REPO-HOUSEKEEPING-1.9/claude-code/03_stale_gitlab_path_reconciliation_list.md`

No existing repository file may change.

## 9. Prohibited

Do NOT:
- change GitHub settings;
- change GitLab settings;
- enable/disable scanners;
- rotate/redact secrets or identifiers;
- delete/prune/rename branches;
- edit workflow files;
- edit current stale-path documents;
- start GitLab seed;
- modify application/tests/SQL/migrations;
- self-merge.

## 10. Validation

Before completion:
- verify canonical main;
- verify no existing tracked file changed;
- run Markdown quality in non-modifying mode on all three reports;
- run `git diff --check`;
- confirm diff contains only the three authorized reports.

## 11. Return

Open one PR with only the three reports.

Return:
- canonical baseline SHA;
- mission branch;
- final head SHA;
- all three blob SHAs;
- PR number/URL;
- exact changed paths;
- classification for every reviewed HK item;
- exact current-document stale GitLab-path list;
- any MUST RESOLVE BEFORE FIRST SEED items;
- any Founder decisions still required;
- provider-side checks still required immediately pre-seed;
- explicit answer to the global clean-enough dependency question;
- validation results.

End the main report exactly:

**FINAL PRE-SEED RESIDUAL REVIEW SUBMITTED — NO PROVIDER / REF / SEED MUTATION PERFORMED — STOP FOR MISSION CONTROL DISPOSITION**
