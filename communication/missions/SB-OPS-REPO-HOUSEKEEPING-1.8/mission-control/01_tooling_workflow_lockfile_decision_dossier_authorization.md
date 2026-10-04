# SMART BUSINESS MISSION CONTROL

# SB-OPS-REPO-HOUSEKEEPING-1.8 — Tooling / Workflow / Lockfile Decision Dossier Authorization

**Date:** 2026-10-04
**Owner:** Mission Control
**Parent mission:** SB-OPS-REPO-HOUSEKEEPING-1.0
**Execution actor:** Claude Code
**Status:** DRAFT — EFFECTIVE ONLY AFTER HUMAN MERGE TO CANONICAL `main`
**Mode:** EVIDENCE + DISPOSITION SUPPORT ONLY — NO EXECUTABLE / PROVIDER MUTATION

## 1. Purpose

Continue repository housekeeping before the Founder / Mission Control “clean enough to preserve” disposition.

This package reviews the remaining executable/tooling-adjacent findings without changing them:

- **HK-020** — orphaned `tools/governance/*.py`
- **HK-022** — unwired Markdown watcher / cleanup tools
- **HK-024** — Markdown Quality Gate dead `develop` trigger + action pinning
- **HK-025** — one-off GC-42 verification workflows
- **HK-026** — stale secondary `bun.lock`
- **HK-029** — stale platform-managed `.lovable/plan.md`
- **HK-073** — missing internal relative-link checker

The goal is to determine:
1. current factual state;
2. risk;
3. exact cleanup option;
4. whether each item must be resolved before first GitLab continuity seed;
5. whether any item requires Founder or provider-side input first.

This mission does not execute those changes.

## 2. Required analysis per item

For each HK item provide:

- current files and exact role;
- inbound references / consumers;
- whether currently executable;
- whether used by CI, pre-commit, Lovable or runtime;
- stale assumptions;
- preservation/history value;
- risk of leaving as-is;
- risk of changing/removing;
- recommended disposition;
- whether first-seed blocker;
- required later authority if action is recommended.

## 3. Item-specific requirements

### HK-020 — governance tools

Inspect all `tools/governance/*.py`.

Determine:
- what each script reads/writes;
- whether any active instruction, workflow, hook or human runbook references it;
- whether it remains useful;
- whether safest disposition is DOCUMENT / KEEP, ARCHIVE, REMOVE, or OWNER DECISION.

Do not run any script in write mode.

### HK-022 — Markdown watcher / cleanup

Inspect:
- `tools/markdown/vscode_save_watcher.py`
- `tools/markdown/cleanup_markdown_artifacts.py`

Determine:
- whether anything invokes them;
- whether current docs still promise them;
- whether cleanup default paths are safe/current;
- whether they should be documented as optional local tools, repaired, or removed.

Do not run destructive cleanup.

### HK-024 — Markdown Quality Gate workflow

Inspect:
- `.github/workflows/markdown-quality-gate.yml`

Determine:
- whether `develop` exists;
- whether workflow triggers are stale;
- whether actions are tag-pinned versus SHA-pinned;
- whether the workflow is still advisory under MC-160;
- exact smallest safe repair.

Do not change workflow files.

### HK-025 — GC-42 workflows

Inspect:
- `.github/workflows/aws-gc42-oidc-claims.yml`
- `.github/workflows/aws-gc42-role-assumption-verification.yml`

Determine:
- whether they are one-off verification artifacts;
- whether any active mission still uses them;
- whether evidence is already preserved elsewhere;
- whether they should remain in `.github/workflows/`, be moved to archive, or be left historical.

Do not archive/remove them in this mission.

### HK-026 — bun.lock

Compare:
- `package.json`
- `package-lock.json`
- `bun.lock`

Determine:
- which package manager CI actually uses;
- whether Lovable currently depends on Bun;
- whether bun.lock is stale;
- whether safest disposition is refresh, remove, or keep;
- whether external Lovable/provider evidence is needed before decision.

Do not regenerate any lockfile.

### HK-029 — .lovable/plan.md

Inspect:
- `.lovable/plan.md`
- its inbound references;
- current project/tooling docs.

Determine:
- whether it is clearly stale;
- whether it is platform-managed;
- whether changing/removing it risks Lovable behavior;
- whether Mission Control can decide from repository evidence alone or whether Lovable-side confirmation is required.

Do not change it.

### HK-073 — relative-link checking

Inspect existing Markdown quality tooling.

Determine:
- whether internal relative links are checked anywhere;
- whether a small advisory checker can be added safely;
- best placement (existing quality gate vs separate helper);
- whether it would be deterministic, local and provider-independent;
- whether it should run pre-commit / CI or remain manual initially.

Do not implement it in this mission.

## 4. Classification

Assign one primary classification to each item:

- FIX BEFORE FIRST SEED
- SAFE TO DEFER UNTIL AFTER FIRST SEED
- OWNER / PROVIDER DECISION REQUIRED
- KEEP AS-IS
- REMOVE / ARCHIVE CANDIDATE

Classification does not authorize execution.

## 5. “Clean enough to preserve” question

Answer explicitly:

> Do any of HK-020, HK-022, HK-024, HK-025, HK-026, HK-029 or HK-073 need to be resolved before GitHub can reasonably be declared “clean enough to preserve” for the first GitLab continuity seed?

Separate:
- preservation risk;
- runtime/build risk;
- provider/workflow risk;
- navigation/maintenance debt.

Do not make the final global decision.

## 6. Writable paths only

Claude Code may create only:

1. `communication/missions/SB-OPS-REPO-HOUSEKEEPING-1.8/claude-code/01_tooling_workflow_lockfile_decision_dossier.md`
2. `communication/missions/SB-OPS-REPO-HOUSEKEEPING-1.8/claude-code/02_tooling_disposition_matrix.md`

No existing repository file may change.

## 7. Prohibited

Do NOT:
- execute write-capable governance tools;
- run destructive cleanup;
- change workflow files;
- regenerate package-lock or bun.lock;
- modify .lovable;
- change hooks;
- add link-check tooling;
- archive/remove files;
- change provider settings;
- start GitLab seed;
- delete/prune branches;
- modify application/tests/SQL/migrations;
- self-merge.

## 8. Validation

Before completion:
- verify canonical main;
- verify no existing tracked file changed;
- run Markdown quality in non-modifying mode on the two reports;
- run `git diff --check`;
- confirm diff contains only the two authorized reports.

## 9. Return

Open one PR with only the two reports.

Return:
- canonical baseline SHA;
- mission branch;
- final head SHA;
- both report blob SHAs;
- PR number/URL;
- exact changed paths;
- classification per HK item;
- any OWNER / PROVIDER DECISION REQUIRED items;
- any FIX BEFORE FIRST SEED items;
- explicit answer to the clean-enough dependency question;
- validation results.

End the main report exactly:

**TOOLING / WORKFLOW / LOCKFILE DOSSIER SUBMITTED — NO EXECUTABLE / PROVIDER / SEED MUTATION PERFORMED — STOP FOR MISSION CONTROL DISPOSITION**
