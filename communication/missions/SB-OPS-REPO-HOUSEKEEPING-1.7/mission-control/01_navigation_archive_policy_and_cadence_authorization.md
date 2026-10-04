# SMART BUSINESS MISSION CONTROL

# SB-OPS-REPO-HOUSEKEEPING-1.7 — Navigation, Archive Policy & Housekeeping Cadence Authorization

**Date:** 2026-10-04  
**Owner:** Mission Control  
**Parent mission:** SB-OPS-REPO-HOUSEKEEPING-1.0  
**Depends on:** accepted PRs #736, #740, #748  
**Execution actor:** Claude Code  
**Status:** DRAFT — EFFECTIVE ONLY AFTER HUMAN MERGE TO CANONICAL `main`  
**Mode:** LOW-RISK DOCUMENTATION RECONCILIATION

## 1. Purpose

Continue repository housekeeping before the Founder / Mission Control “clean enough to preserve” disposition.

This package addresses only:

- **HK-037** — `communication/missions/` navigation/index gap;
- **HK-046** — `docs/implementation/` navigation/index gap and forward naming guidance;
- **HK-071** — archive-policy gap across the repository's existing archival mechanisms;
- **HK-075** — lightweight recurring repository-health / housekeeping checklist.

No historical material is to be renamed, moved, rewritten or deleted.

## 2. HK-037 — communication/missions index

Create a navigable index for `communication/missions/`.

Requirements:

- enumerate the current mission directories accurately from the live tree;
- provide current status only where repository evidence supports it;
- otherwise use a neutral status such as “see mission records” rather than inferring;
- include a note for legacy/historical mission material that lives only under `communication/archive/`, including SB-GOV-HOUSEKEEPING-1.8;
- do not move or duplicate mission content;
- do not rewrite mission histories.

Preferred path:

`communication/missions/README.md`

If that path already exists by execution time, reconcile it rather than creating a competing index.

## 3. HK-046 — docs/implementation index

Create a navigable index for `docs/implementation/`.

Requirements:

- index the actual current top-level documents/folders;
- organize by mission/product sequence where practical;
- preserve historical filenames exactly;
- explicitly state that historical naming inconsistencies (`SB-P1.x` vs `SB-P-1.x`, flat vs folder layouts) are not being renamed retroactively;
- adopt a forward convention for new implementation records only:
  - prefer current mission IDs such as `SB-P-1.x`;
  - prefer mission-scoped folders when a mission generates multiple durable artifacts;
- do not rename or move any existing implementation file.

Preferred path:

`docs/implementation/README.md`

If already present, reconcile it rather than creating a second index.

## 4. HK-071 — archive policy

Create one short repository archive-routing policy that explains the existing archival boundaries without moving content.

The policy must distinguish at least:

- `communication/archive/`
- `docs/engineering/eos/archive/`
- `Project Source File Archive/`
- `docs/phase-1-mission-blueprint/completed/`
- `merge/merged/`
- root `reports/`

For each, state:

- what kind of material belongs there based on current repository evidence;
- whether the location is active, legacy or historical;
- whether existing contents must remain in place for provenance;
- the recommended forward destination for new material of that type.

Do not invent a single “universal archive” if the repository evidence does not support one.

Preferred path:

`docs/governance/Repository_Archive_Routing_Policy.md`

This policy is operational documentation, not constitutional authority.

## 5. HK-075 — housekeeping cadence

Create a lightweight repository-health checklist for periodic use.

It should be small and practical, covering checks such as:

- broken internal links;
- stale mission indexes;
- divergent/non-unique branches evidence;
- ignored/untracked local artifacts;
- repository secret scan status;
- stale provider/workflow documentation;
- orphaned tools/workflows;
- stale lockfiles;
- archive-routing consistency;
- current continuity target/path references;
- open housekeeping decisions.

Do not prescribe an automatic schedule or create an automation.

Preferred path:

`docs/governance/Repository_Health_Checklist.md`

## 6. Explicitly out of scope

Do NOT execute or modify:

- HK-020 governance tools;
- HK-022 markdown watcher / cleanup tool;
- HK-024 workflow trigger/pinning;
- HK-025 GC-42 workflows;
- HK-026 `bun.lock`;
- HK-029 `.lovable/plan.md`;
- HK-073 link-check tooling;
- HK-033 implementation-assessment link repair unless the file must be touched for index construction (prefer not);
- EOS HK-002 through HK-011;
- branch/tag deletion;
- GitHub/GitLab settings;
- GitLab seed;
- application code/tests/SQL/migrations;
- canonical source files.

## 7. Writable paths only

Claude Code may create/modify only:

1. `communication/missions/README.md`
2. `docs/implementation/README.md`
3. `docs/governance/Repository_Archive_Routing_Policy.md`
4. `docs/governance/Repository_Health_Checklist.md`
5. `communication/missions/SB-OPS-REPO-HOUSEKEEPING-1.7/claude-code/01_navigation_policy_and_cadence_report.md`

No other tracked path may change.

## 8. Validation

Before completion:

- verify canonical `main`;
- derive indexes from the actual live tree, not stale counts from the audit;
- verify every path/link introduced by the new docs resolves;
- run Markdown quality in non-modifying mode;
- run `git diff --check`;
- confirm diff contains only the five authorized paths;
- confirm no historical file was renamed/moved/deleted.

## 9. Completion report

The report must include:

- canonical baseline SHA;
- current mission-directory count and index method;
- current implementation-file/folder count and index method;
- archive locations documented;
- forward naming guidance adopted;
- housekeeping checklist summary;
- link validation result;
- Markdown quality result;
- `git diff --check` result;
- exact changed paths;
- whether HK-037, HK-046, HK-071 and HK-075 are resolved;
- residual housekeeping items not executed.

Open one PR with only the five authorized paths.

Return:

- canonical baseline SHA;
- mission branch;
- final head SHA;
- blob SHA for all changed files;
- PR number/URL;
- exact changed paths;
- validation results;
- closure status for HK-037/HK-046/HK-071/HK-075.

End the report exactly:

**NAVIGATION / ARCHIVE POLICY / CADENCE PACKAGE SUBMITTED — NO HISTORICAL MOVE / PROVIDER / SEED MUTATION PERFORMED — STOP FOR MISSION CONTROL DISPOSITION**
