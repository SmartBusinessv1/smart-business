# SMART BUSINESS MISSION CONTROL

# Instruction 1.7

**Mission ID:** SB-GOV-HOUSEKEEPING-1.7

**Mission Name:** Migration Inventory Evidence Completion and Mission Memory Reconciliation

**From:** Mission Control

**To:** Codex

**Status:** ACTIVE

**Date:** 2026-08-02

---

# Mission Objective

Complete the two evidence and current-state corrections identified during Mission Control review of `SB-GOV-HOUSEKEEPING-1.6`:

1. expand the migration inventory into the required exact per-file register for all 68 pre-existing migration documents reviewed by Mission 1.6; and
2. reconcile stale canonical-package wording in `mission-control/mission_memory.md` to the approved 19-authoritative-documents-plus-one-index, 20-file state.

This is a narrowly scoped documentation and evidence-completion correction.

It does not reopen or redesign the migration authority model established by `SB-GOV-HOUSEKEEPING-1.6`.

It does not authorize migration execution, SQL changes, database operations, Supabase actions, application changes, infrastructure changes, deployment, test execution, canonical-source changes, GitHub Actions work, branch-protection work, or communication closure.

Codex shall respond only in:

```text
communication/live/report1.7.md
```

Do not overwrite, delete, rename, or reset any earlier live instruction or report.

---

# Mission Control Review Recorded

Mission Control reviewed commit:

```text
0117c3e6015a0cce668354648df66a96085a20fe
Define migration authority and contain draft families
```

Mission Control found:

```text
MIGRATION AUTHORITY MODEL: PASSED
CURRENT ACTIVE MIGRATION MISSION: NONE
CURRENT EXECUTABLE MIGRATION PACKAGE: NONE
SB-MIG-1.3 AUTHORITY: NOT ACTIVE
SQL EXECUTION AUTHORITY: NONE
FAMILY CONTAINMENT: PASSED
AI EXECUTION GUARDS: PASSED
UNAUTHORIZED TECHNICAL CHANGES: NONE
```

Final acceptance remains pending because:

1. `communication/missions/SB-GOV-HOUSEKEEPING-1.6/codex/migration-inventory.md` does not enumerate the 68 pre-existing migration documents individually with all required audit fields; and
2. `mission-control/mission_memory.md` still contains stale wording describing the active source set as `17 active governance files plus the active governance README`, while the approved current classification is 19 authoritative documents plus one canonical index, totaling 20 files.

Communication closure remains unauthorized.

---

# Execute According To

Execute according to:

- `merge/active/README.md`;
- `docs/governance/Smart_Business_Canonical_Project_Source_Set_v1.0.md`;
- `docs/migration/README.md`;
- `AGENTS.md`;
- `CHATGPT.md`;
- `communication/AI_Communication_and_Handover_Protocol.md`;
- `communication/README.md`;
- `communication/live/instruction1.6.md`;
- `communication/live/report1.6.md`;
- the complete `SB-GOV-HOUSEKEEPING-1.6` mission package;
- current repository history and exact-file evidence; and
- the active temporary Phase 1 compensating control.

---

# Required Work

## 1. Preflight

Before modification, verify and record:

- repository: `SmartBusinessv1/smart-business`;
- branch: `main`;
- remote identity is correct;
- working tree is clean;
- local `main` is fast-forward synchronized with `origin/main`;
- starting commit is the current remote `main` HEAD;
- expected starting commit is `0117c3e6015a0cce668354648df66a96085a20fe`, unless a later authorized commit exists;
- `communication/live/instruction1.7.md` is the active instruction;
- no migration, Supabase, SQL, `psql`, PostgreSQL, deployment, or test process is running; and
- no unrelated local changes exist.

Stop and report if any preflight condition fails or if a later commit changes any file within this mission's authorized scope.

## 2. Complete the Exact Per-File Migration Register

Update:

```text
communication/missions/SB-GOV-HOUSEKEEPING-1.6/codex/migration-inventory.md
```

Preserve the existing counts, family summary, SQL list, control-record list, and stale-metadata explanation.

Add an exact 68-row register covering every pre-existing migration document reviewed by Mission 1.6 under:

```text
docs/migration/SB-MIG-1.1/**
docs/migration/SB-MIG-1.2/**
docs/migration/SB-MIG-1.2A/**
docs/migration/SB-MIG-1.2B/**
docs/migration/SB-MIG-1.2C/**
docs/migration/SB-MIG-1.2D/**
docs/migration/SB-MIG-1.2E/**
```

The 68-row baseline excludes the central `docs/migration/README.md` and the seven family-level `README.md` wrapper files created by Mission 1.6.

Every row must include:

1. sequential row number;
2. exact repository path;
3. mission or family identifier;
4. document title or document type;
5. declared status or `NOT DECLARED`;
6. evidence-backed current classification using the approved Mission 1.6 taxonomy;
7. execution occurred: `YES`, `NO`, or `NOT PROVEN`;
8. Mission Control acceptance: `YES`, `NO`, or `NOT PROVEN`;
9. superseded, completed, current-state, or proposal relationship;
10. current relevance as evidence;
11. executable now: `NO` unless current explicit authority is proven;
12. authority evidence or exact successor/current-state reference;
13. stale metadata, conflict, or `NONE`;
14. containment treatment.

Use only these present-state classifications unless a contradiction is proven and escalated:

```text
CURRENT STATE — ACCEPTED, NOT EXECUTABLE
COMPLETED — HISTORICAL EVIDENCE, NOT EXECUTABLE
SUPERSEDED — HISTORICAL EVIDENCE, NOT EXECUTABLE
DRAFT OR PROPOSAL — NON-EXECUTABLE
DEFERRED OR PENDING — NON-EXECUTABLE
REJECTED OR CANCELLED — NON-EXECUTABLE
ACTIVE AND EXECUTABLE — REQUIRES CURRENT EXPLICIT MISSION AUTHORITY
```

Requirements:

- exactly 68 unique document paths must appear;
- every path must exist at the starting commit;
- no path may be duplicated;
- no family wrapper README created by Mission 1.6 may be counted among the 68;
- no historical document body may be modified;
- stale Draft metadata must remain preserved and be classified through the register, not rewritten;
- `SB-MIG-1.3` recommendations, readiness reports, or authorization candidates must remain non-executable proposals unless a current activation record is proven;
- all 68 rows must show `Executable now: NO` unless contradictory current authority is proven and reported;
- the register totals must reconcile with the existing Mission 1.6 total:

```text
68 pre-existing migration documents
+ 12 SQL-history files
+ 7 additional migration reference/control records
= 87 distinct migration-related tracked files reviewed
```

After the 68-row register, add a separate containment-artifact section listing the eight navigation files created by Mission 1.6:

```text
docs/migration/README.md
docs/migration/SB-MIG-1.1/README.md
docs/migration/SB-MIG-1.2/README.md
docs/migration/SB-MIG-1.2A/README.md
docs/migration/SB-MIG-1.2B/README.md
docs/migration/SB-MIG-1.2C/README.md
docs/migration/SB-MIG-1.2D/README.md
docs/migration/SB-MIG-1.2E/README.md
```

These are current authority-navigation and containment controls. They must not be retroactively counted among the 87 files reviewed at the Mission 1.6 starting baseline.

## 3. Validate the Register

Create a validation report proving:

- 68 expected migration-document paths found;
- 68 unique paths registered;
- missing paths: 0;
- duplicate paths: 0;
- unexpected paths in the 68-row register: 0;
- all required fields populated;
- all current executability values: `NO`;
- family totals reconcile to `6 + 8 + 13 + 8 + 10 + 11 + 12 = 68`;
- SQL count remains 12;
- additional reference/control count remains 7;
- distinct reviewed total remains 87;
- eight Mission 1.6 containment artifacts are separately identified and excluded from the original 87 baseline.

Create:

```text
communication/missions/SB-GOV-HOUSEKEEPING-1.7/codex/per-file-inventory-validation.md
```

If any count or path cannot be reconciled, stop final completion and report the exact discrepancy.

## 4. Reconcile Mission Control Memory

Update:

```text
mission-control/mission_memory.md
```

Because this is a living current-state record, remove or replace stale current-state wording rather than preserving an internal contradiction.

Replace the statement that the original 25 files were superseded by:

```text
17 active governance files plus the active governance README
```

with the approved current classification:

```text
19 authoritative project-source and binding governance documents plus one canonical index and authority map, totaling 20 files
```

Also reconcile any nearby wording that still says the Project HQ package is only synchronization-ready or was not externally uploaded, so the current-state record consistently reflects:

```text
Project HQ synchronization accepted through SB-GOV-HOUSEKEEPING-1.5
20 of 20 canonical files verified
byte-for-byte identity verified
GitHub remains the operational source of truth
```

Do not rewrite historical mission records outside `mission-control/mission_memory.md` merely because they accurately describe an earlier state.

Create:

```text
communication/missions/SB-GOV-HOUSEKEEPING-1.7/codex/mission-memory-reconciliation-report.md
```

The report must show the exact stale wording removed, the exact approved wording inserted, and confirmation that no other current project-state fact was changed.

## 5. Reconcile Mission 1.6 Records

Append a correction-completion note without rewriting original chronology to:

```text
communication/missions/SB-GOV-HOUSEKEEPING-1.6/README.md
communication/missions/SB-GOV-HOUSEKEEPING-1.6/decision-log.md
communication/missions/SB-GOV-HOUSEKEEPING-1.6/handover-log.md
communication/missions/SB-GOV-HOUSEKEEPING-1.6/codex/final-reconciliation-report.md
```

The note shall state:

- Mission Control found the migration authority model substantively correct;
- final acceptance was deferred pending complete per-file inventory evidence and mission-memory reconciliation;
- Mission 1.7 completed those corrections;
- final Mission Control verification remains required;
- communication closure remains unauthorized.

Update the central housekeeping review queue only to reflect the correction state:

```text
communication/missions/SB-GOV-HOUSEKEEPING-1.0/codex/mission-control-review-queue.md
```

Do not mark Mission 1.6 finally accepted. Mission Control will make that decision after reviewing `report1.7.md`.

## 6. Mission 1.7 Package

Create:

```text
communication/missions/SB-GOV-HOUSEKEEPING-1.7/
```

Required files:

```text
communication/missions/SB-GOV-HOUSEKEEPING-1.7/README.md
communication/missions/SB-GOV-HOUSEKEEPING-1.7/decision-log.md
communication/missions/SB-GOV-HOUSEKEEPING-1.7/handover-log.md
communication/missions/SB-GOV-HOUSEKEEPING-1.7/codex/per-file-inventory-validation.md
communication/missions/SB-GOV-HOUSEKEEPING-1.7/codex/mission-memory-reconciliation-report.md
communication/missions/SB-GOV-HOUSEKEEPING-1.7/codex/correction-completion-report.md
communication/missions/SB-GOV-HOUSEKEEPING-1.7/founder/founder-brief.md
```

The package must record:

- starting commit;
- correction scope;
- exact files created and modified;
- the 68-row register result;
- count reconciliation;
- mission-memory correction;
- protected-scope confirmation;
- validation evidence;
- unresolved issues;
- next action; and
- communication closure status.

## 7. Live Response

Create:

```text
communication/live/report1.7.md
```

It must state:

- starting commit;
- exact 68-row register result;
- missing, duplicate, and unexpected-path counts;
- required-field completeness result;
- family-count reconciliation;
- 87-file baseline reconciliation;
- eight containment artifacts separately identified;
- current active migration mission;
- current executable migration package;
- Mission 1.6 authority model changed: `NO`;
- mission-memory stale statement corrected;
- Project HQ current-state wording reconciled;
- exact files created and modified;
- canonical-source changes: `NONE`;
- migration-document body changes: `NONE`;
- SQL/application/test/environment/infrastructure/deployment changes: `NONE`;
- SQL, database, Supabase, deployment, or test operations executed: `NONE`;
- Markdown quality-gate result;
- internal-link result;
- `git diff --check` result;
- secret-check result;
- exact staged-scope result;
- commit and push status;
- working-tree and remote-synchronization evidence;
- final Mission Control verification requirement; and
- communication closure status.

Successful completion status:

```text
MIGRATION INVENTORY EVIDENCE COMPLETED — MISSION MEMORY RECONCILED — SB-GOV-HOUSEKEEPING-1.6 READY FOR FINAL MISSION CONTROL ACCEPTANCE
```

If the 68-row register or count reconciliation fails:

```text
MIGRATION INVENTORY EVIDENCE CORRECTION BLOCKED — MISSION CONTROL DECISION REQUIRED
```

---

# Authorized File Scope

Codex may create or modify only:

```text
communication/live/report1.7.md
communication/missions/SB-GOV-HOUSEKEEPING-1.0/codex/mission-control-review-queue.md
communication/missions/SB-GOV-HOUSEKEEPING-1.6/README.md
communication/missions/SB-GOV-HOUSEKEEPING-1.6/decision-log.md
communication/missions/SB-GOV-HOUSEKEEPING-1.6/handover-log.md
communication/missions/SB-GOV-HOUSEKEEPING-1.6/codex/migration-inventory.md
communication/missions/SB-GOV-HOUSEKEEPING-1.6/codex/final-reconciliation-report.md
communication/missions/SB-GOV-HOUSEKEEPING-1.7/README.md
communication/missions/SB-GOV-HOUSEKEEPING-1.7/decision-log.md
communication/missions/SB-GOV-HOUSEKEEPING-1.7/handover-log.md
communication/missions/SB-GOV-HOUSEKEEPING-1.7/codex/per-file-inventory-validation.md
communication/missions/SB-GOV-HOUSEKEEPING-1.7/codex/mission-memory-reconciliation-report.md
communication/missions/SB-GOV-HOUSEKEEPING-1.7/codex/correction-completion-report.md
communication/missions/SB-GOV-HOUSEKEEPING-1.7/founder/founder-brief.md
mission-control/mission_memory.md
```

No other file may be staged or committed.

---

# Git Authorization

Codex is authorized to perform the following Git operations only after all required checks pass:

- **Repository:** `SmartBusinessv1/smart-business`
- **Branch:** `main`
- **Authorized actor:** Codex
- **Authorized paths:** only the exact paths listed under Authorized File Scope
- **Approved commit message:**

```text
Complete migration inventory and reconcile mission memory
```

- **Push target:** `origin/main`
- **Authority basis:** temporary Founder-approved Phase 1 compensating control for a narrowly scoped governance/evidence correction

Before commit, verify:

```powershell
git status --short
git diff --name-status
git diff --check
git diff --cached --name-status
git diff --cached --check
```

Also run the repository Markdown quality gate, internal-link validation, exact-path count validation, and a secret/credential scan.

Codex shall not:

- stage unrelated files;
- modify historical migration document bodies;
- modify SQL;
- execute migration or database operations;
- change the migration authority model;
- change canonical sources;
- force push;
- rewrite history;
- self-merge;
- alter branch protection;
- expose credentials; or
- close or archive the current housekeeping communication.

If the branch, remote, starting commit, authorized path set, or repository state changes, authority expires and Codex must stop for renewed instruction.

---

# Completion Principle

Migration safety is already established.

This correction must make the evidence complete enough for independent verification and make Mission Control memory reflect one clear current truth.

No implementation or execution authority is created by this mission.
