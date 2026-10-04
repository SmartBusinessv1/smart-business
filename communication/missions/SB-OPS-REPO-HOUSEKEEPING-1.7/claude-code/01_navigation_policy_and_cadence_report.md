# SB-OPS-REPO-HOUSEKEEPING-1.7 — Navigation, Archive Policy and Cadence Report

**Mission:** SB-OPS-REPO-HOUSEKEEPING-1.7
**Parent:** SB-OPS-REPO-HOUSEKEEPING-1.0 (accepted PRs #736, #740, #748)
**Execution actor:** Claude Code
**Authority:** `communication/missions/SB-OPS-REPO-HOUSEKEEPING-1.7/mission-control/01_navigation_archive_policy_and_cadence_authorization.md`
**Handoff:** `communication/missions/SB-OPS-REPO-HOUSEKEEPING-1.7/claude-code/00_navigation_archive_policy_and_cadence_handoff.md`
**Scope:** HK-037, HK-046, HK-071, HK-075
**Date:** 2026-10-04

## 1. Baseline

| Check | Result |
|---|---|
| Canonical `main` | `d9e25abfc92f01d068e219535dcbd848f02702d3`, equal to the authorized baseline (merge of PR #749); unchanged at completion |
| Authorization and handoff | Present on `main`; read in full |
| Newer or conflicting authority | None; 0 open PRs |
| Pre-existing target files | None of the four documents existed; all created new (no competing index) |
| Mission branch | `mission/SB-OPS-REPO-HOUSEKEEPING-1.7-claude-code-navigation` (Mission Control's authorization branch is `…-1.7-navigation-policy`) |

## 2. Exact Changed Paths

| Path | Change |
|---|---|
| `communication/missions/README.md` | Added (HK-037) |
| `docs/implementation/README.md` | Added (HK-046) |
| `docs/governance/Repository_Archive_Routing_Policy.md` | Added (HK-071) |
| `docs/governance/Repository_Health_Checklist.md` | Added (HK-075) |
| `communication/missions/SB-OPS-REPO-HOUSEKEEPING-1.7/claude-code/01_navigation_policy_and_cadence_report.md` | Added (this report) |

No existing file was modified, renamed, moved or deleted.

## 3. HK-037 — Missions Index

**Counts (live tree at `d9e25ab`):** 30 mission directories under `communication/missions/` and 1 loose record (`SB-GOV-COMMS-SUPERSEDED-PROPOSALS.md`). This differs from the accepted audit's count of 23, because SB-OPS-REPO-HOUSEKEEPING-1.1 to 1.7 were added since.

**Method:**

1. Directories enumerated with `git ls-tree -d HEAD communication/missions/`.
2. For each directory, the file count, README presence and H1 title were read.
3. The README's own status line is quoted verbatim, without paraphrase.
4. Whether an archive package exists under `communication/archive/` was checked.
5. Independent evidence from `mission-control/mission_memory.md` was added in a separate column only where it exists.
6. Where status cannot be established, the entry says "see mission records".

**Notable handling:**

- **Stale recorded statuses are quoted, not corrected.** The SB-GOV-HOUSEKEEPING-1.0 to 1.7 READMEs still show interim statuses, but mission memory records the whole 1.0–1.8 cycle as closed and archived on 2026-08-03; that evidence appears in its own column.
- The SB-OPS-REPO-HOUSEKEEPING-1.0 to 1.7 directories have no README; they are listed with neutral wording.
- **8 archive-only missions** (no `missions/` directory) are listed separately with their archive status lines. They include **SB-GOV-HOUSEKEEPING-1.8**, whose durable record lives only in its archive package.

## 4. HK-046 — Implementation Index and Forward Naming

**Counts (live tree):** 124 tracked files, made up of **32 top-level files** and **5 folders** (`SB-P-1.9/` 43, `SB-P-1.10/` 35, `SB-P-1.11/` 9, `SB-P-1.12/` 3, `templates/` 2).

**Method:**

- Top-level entries were enumerated with `git ls-tree HEAD docs/implementation/`; folder counts came from `git ls-tree -r`.
- Unprefixed foundation files were attributed to missions by the mission identifier inside each file (`Bootstrap_…` → SB-P1.4A/B/C; `Application_Access_…` → SB-P1.5B/C/D; `Business_Identity_…` → SB-P1.6A/C; `Business_Workspace_…` → SB-P1.7B/C/D).
- Records are grouped SB-P-1.4 → 1.5 → 1.6 → 1.7 → cross-mission AC-04 → SB-P-1.8 → SB-P-1.9 to 1.12 → templates.
- Every filename is preserved exactly.

**Forward naming guidance adopted (new records only):**

- use the `SB-P-1.x` ID form;
- use a mission-scoped folder (with `evidence/`) when a mission produces more than one durable artifact;
- a flat file only for one-off or cross-mission records;
- never rename historical records;
- add an index row for each new record.

The index states explicitly that the `SB-P1.x`, `SB-P-1.x`, unprefixed, flat and folder variants remain untouched.

## 5. HK-071 — Archive Routing Policy

Six locations are documented from repository evidence, each with current contents, state, provenance rule and forward destination:

| Location | State | Forward destination |
|---|---|---|
| `communication/archive/` | Active (Protocol §26) | Live exchanges at mission closure |
| `docs/engineering/eos/archive/` | Active boundary, empty | Historical EOS artifacts under its README rules only |
| `Project Source File Archive/` | Closed legacy | None; Source Set change control and Git history |
| `docs/phase-1-mission-blueprint/completed/` | Active lifecycle stage | Completed Product Blueprints only |
| `merge/merged/` | Unused historical plan | None; canonical consolidation via Source Set change control |
| `reports/` | Legacy historical | None; mission reports go to `communication/missions/<ID>/`, repository audits to `docs/audits/` |

No universal archive was invented. Existing contents stay in place. The policy declares itself operational guidance, not authority.

## 6. HK-075 — Repository Health Checklist

A 14-item manual checklist, with no schedule and no automation:

1. broken internal links;
2. mission-index drift;
3. implementation-index drift;
4. branch evidence (deterministic partition);
5. ignored and untracked artifacts;
6. secret-scan status;
7. stale workflow and provider records;
8. orphaned tools and workflows;
9. stale lockfiles;
10. archive-routing consistency;
11. continuity target and path references;
12. unresolved housekeeping decisions;
13. line endings and attributes;
14. mission-memory currency.

Each item has a read-only method and a "healthy when" criterion. Findings are explicitly not cleanup authority.

## 7. Validation

| Check | Result |
|---|---|
| Canonical `main` | `d9e25abfc92f01d068e219535dcbd848f02702d3` (unchanged) |
| Indexes derived from live tree | Yes; counts above from `git ls-tree` at `d9e25ab` |
| Introduced links and paths | All relative links in the five files resolve (Section 7.1) |
| Markdown quality (`tools/markdown/quality_gate.py`, non-modifying) | PASS, 0 issues, all five files; re-run by the pre-commit hook |
| `git diff --check` | Clean |
| Changed paths | Exactly the five authorized paths (all additions) |
| Historical files | None renamed, moved or deleted (`git diff --diff-filter=DR` against the baseline is empty) |

### 7.1 Link validation

Every relative Markdown link target in the five new files was checked for existence against the working tree at the baseline, covering mission directories, READMEs, archive packages, implementation files and folders, and governance documents. Result: **0 unresolved**.

## 8. Closure Status

| Item | Status |
|---|---|
| **HK-037** missions index | **Resolved** |
| **HK-046** implementation index and forward naming | **Resolved** |
| **HK-071** archive routing policy | **Resolved** |
| **HK-075** housekeeping cadence checklist | **Resolved** (manual checklist; no automation by design) |

## 9. Residual Housekeeping (explicitly not executed)

- **Tooling:** HK-020 (`tools/governance/`), HK-022 (watcher and cleanup tool), HK-024 (Markdown workflow trigger and pinning), HK-025 (GC-42 workflows), HK-026 (`bun.lock`), HK-029 (`.lovable/plan.md`), HK-073 (link-check tooling).
- **Documentation:** HK-033 (SB-P-1.8 assessment links). It is indexed, not repaired.
- **EOS hygiene:** HK-002 to HK-011.
- **Branches and security:** HK-050 to HK-052 (later governed prune per D-3 / Option B), HK-057, HK-058, HK-072, HK-060, HK-061, HK-063, HK-074.
- **Mission README statuses:** the stale statuses noted in Section 3 (for example SB-GOV-HOUSEKEEPING-1.0 to 1.7, SB-GOV-PRODUCT-EXEC-1.0) are recorded, not corrected; any status correction belongs to Mission Control.
- **Continuity:** the GitLab target-path confirmation raised in SB-OPS-REPO-HOUSEKEEPING-1.5 remains with Mission Control. Checklist item 11 covers it.

NAVIGATION / ARCHIVE POLICY / CADENCE PACKAGE SUBMITTED — NO HISTORICAL MOVE / PROVIDER / SEED MUTATION PERFORMED — STOP FOR MISSION CONTROL DISPOSITION
