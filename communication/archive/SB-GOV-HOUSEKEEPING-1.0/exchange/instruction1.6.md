# SMART BUSINESS MISSION CONTROL

# Instruction 1.6

**Mission ID:** SB-GOV-HOUSEKEEPING-1.6

**Mission Name:** Migration-Package Authority and Draft-Family Containment

**From:** Mission Control

**To:** Codex

**Status:** ACTIVE

**Date:** 2026-08-02

---

# Mission Objective

Establish one clear, durable, default-deny authority model for every migration-related package and artifact in the Smart Business repository.

This mission shall:

1. inventory every tracked migration family and migration-related authority record;
2. identify the current authoritative migration state from repository evidence;
3. distinguish completed evidence from executable authority;
4. prevent draft, superseded, historical, proposed, deferred, or unselected migration families from being executed by Codex, Claude Code, specialist AIs, scripts, or humans without a new explicit mission;
5. create an authoritative migration navigation and status layer without rewriting historical evidence; and
6. reconcile the housekeeping queue and current Mission Control state.

This is a governance-classification and containment mission only.

It does **not** authorize a database migration, schema change, SQL execution, Supabase operation, production cutover, OAuth change, infrastructure change, application change, data cleanup, test execution against production, deployment, branch-protection configuration, or GitHub Actions implementation.

Codex shall respond only in:

```text
communication/live/report1.6.md
```

Do not overwrite, delete, rename, or reset any earlier live instruction or report.

---

# Mission Control Verification Recorded

Mission Control has verified and accepted the preceding mission:

```text
SB-GOV-HOUSEKEEPING-1.5: PASSED
PROJECT HQ CANONICAL SOURCE SYNCHRONIZATION: VERIFIED
PROJECT HQ PACKAGE: 20 OF 20 FILES
BYTE-FOR-BYTE IDENTITY: VERIFIED
GITHUB REMAINS OPERATIONAL SOURCE OF TRUTH
```

The accepted evidence is recorded in:

```text
communication/live/report1.5.md
communication/missions/SB-GOV-HOUSEKEEPING-1.5/
```

Append this acceptance to directly relevant current records without rewriting earlier chronological findings.

Communication closure remains unauthorized.

---

# Founder Direction

The Founder has authorized Mission Control to resolve migration-package ambiguity before any further migration-related work.

The required operating principle is:

```text
NO MIGRATION ARTIFACT IS EXECUTABLE BY DEFAULT.

A migration may be executed only when a new, explicit Founder- or Mission Control-authorized mission identifies:
- the exact migration package or SQL files;
- the target environment;
- the authorized actor;
- the authorized branch and paths;
- prerequisites and backups;
- verification and rollback controls;
- the approved execution window; and
- the approved commit or reporting workflow.
```

File presence, a runbook, a recommendation, an authorization draft, a completion report, a migration filename, an earlier mission, or a historical approval does not independently create present execution authority.

---

# Current Expected Interpretation

Codex shall verify this interpretation against repository evidence rather than merely repeating it:

1. Smart Business is currently production live.
2. `mission-control/mission_memory.md` records `SB-MIG-1.2F — Production Application Cutover` as complete and `SB-MIG-1.2F-A — Production OAuth Domain Alignment` as complete and accepted.
3. No migration mission is currently active.
4. The earlier `SB-MIG-1.1`, `SB-MIG-1.2`, and `SB-MIG-1.2A` through later `SB-MIG-1.2*` packages form a preparation, validation, hardening, preview, and cutover evidence chain; they do not remain reusable execution authority after completion.
5. Documents proposing or preparing `SB-MIG-1.3` are recommendations, readiness packages, or authorization candidates unless an explicit Founder/Mission Control activation record proves otherwise.
6. Draft metadata such as `DRAFT — submitted for Mission Control review` remains historical evidence and must not be interpreted as active authority.
7. SQL files under `supabase/migrations/**` are implementation/schema history and possible future mission inputs. Their presence is not authorization to run them against any environment.
8. Unless contrary evidence is proven and escalated, the current executable migration package is:

```text
NONE
```

The current authoritative migration state is a completed production cutover state, not an open migration execution package.

If repository evidence contradicts any item above, Codex shall stop before classification changes and report the exact conflict to Mission Control.

---

# Execute According To

Execute according to:

- `merge/active/README.md`;
- Source 00 — Lighthouse Constitution;
- Source 01 — Smart Business Master System Manifesto;
- Source 02 — Supabase Architecture Framework;
- Source 09 — Master Roadmap Command;
- Source 11 — Product Truth Map;
- Source 12 — Product Execution and Release Framework;
- Source 15 — Mission Control Activation Template;
- Source 17 — AI Operations Manual;
- Source 18 — SB-P Mission Lifecycle and Delivery Framework where applicable;
- `AGENTS.md`;
- `CHATGPT.md`;
- `CLAUDE.md`;
- `communication/AI_Communication_and_Handover_Protocol.md`;
- `communication/README.md`;
- `mission-control/mission_memory.md`;
- current repository history and exact-file evidence;
- the active temporary Phase 1 compensating control.

---

# Required Work

## 1. Preflight

Before modification, verify and record:

- repository is `SmartBusinessv1/smart-business`;
- branch is `main`;
- remote is correct;
- working tree is clean;
- local branch is fast-forward synchronized with `origin/main`;
- starting commit is the current remote `main` HEAD;
- `communication/live/instruction1.6.md` is the active instruction;
- no migration execution process is running;
- no unrelated local changes exist.

Stop if any preflight condition fails.

## 2. Complete Migration Inventory

Scan the full tracked repository, not only `docs/migration/`.

Inventory every migration-related item, including at minimum:

- all directories and files under `docs/migration/**`;
- every `SB-MIG-*` mission family and follow-up reference;
- preparation, audit, readiness, rehearsal, cutover, rollback, OAuth, infrastructure, verification, completion, and authorization documents;
- all references to `SB-MIG-1.3`;
- `supabase/migrations/**` SQL files;
- migration-related mission records, communication records, reports, and Mission Control state;
- migration-related commits required to establish completion or acceptance;
- current repository instructions that could cause an AI to interpret migration artifacts as executable.

At minimum, explicitly investigate the evidence associated with:

```text
SB-MIG-1.1
SB-MIG-1.2
SB-MIG-1.2A
SB-MIG-1.2B
SB-MIG-1.2C
SB-MIG-1.2D
SB-MIG-1.2D-A, if present or referenced
SB-MIG-1.2E
SB-MIG-1.2E-A, if present or referenced
SB-MIG-1.2F
SB-MIG-1.2F-A
SB-MIG-1.3 proposals, recommendations, or authorization packages
```

Do not assume this list is complete. Discover and record every additional migration-labeled family or artifact.

The inventory shall record:

- exact path;
- mission/family identifier;
- document type;
- declared status;
- evidence-backed current status;
- whether it was executed;
- whether it was accepted;
- whether it was superseded or completed;
- whether it remains relevant as evidence;
- whether it is executable now;
- authority evidence;
- conflicts or stale metadata;
- recommended containment treatment.

## 3. Status Taxonomy

Use only the following current classifications unless Mission Control approves another:

```text
CURRENT STATE — ACCEPTED, NOT EXECUTABLE
COMPLETED — HISTORICAL EVIDENCE, NOT EXECUTABLE
SUPERSEDED — HISTORICAL EVIDENCE, NOT EXECUTABLE
DRAFT OR PROPOSAL — NON-EXECUTABLE
DEFERRED OR PENDING — NON-EXECUTABLE
REJECTED OR CANCELLED — NON-EXECUTABLE
ACTIVE AND EXECUTABLE — REQUIRES CURRENT EXPLICIT MISSION AUTHORITY
```

`ACTIVE AND EXECUTABLE` may be assigned only when a current, unexpired Founder/Mission Control instruction explicitly authorizes execution and identifies the exact package, environment, actor, scope, and controls.

A past mission marked complete or accepted must be classified as evidence of completed work, not as permission to repeat the work.

## 4. Establish the Current Migration Authority

Determine and state explicitly:

- whether any migration mission is active;
- whether any migration package is presently executable;
- the last accepted migration/cutover mission;
- the current production state;
- the status of every `SB-MIG-1.3` recommendation or authorization package;
- the role of `supabase/migrations/**`;
- what exact future authorization would be required before any migration execution.

Expected result, unless contradictory evidence is proven:

```text
CURRENT ACTIVE MIGRATION MISSION: NONE
CURRENT EXECUTABLE MIGRATION PACKAGE: NONE
CURRENT AUTHORITATIVE MIGRATION STATE: PRODUCTION CUTOVER COMPLETE AND ACCEPTED
FUTURE MIGRATION EXECUTION: REQUIRES A NEW EXPLICIT MISSION
```

## 5. Create the Migration Authority Index

Create:

```text
docs/migration/README.md
```

This file shall become the canonical navigation and authority boundary for repository migration material.

It must include:

- purpose and scope;
- current production/migration state;
- explicit `CURRENT EXECUTABLE PACKAGE: NONE` statement, if evidence confirms it;
- default-deny execution rule;
- status taxonomy;
- complete migration-family status table;
- accepted/completed mission chain;
- classification of `SB-MIG-1.3` proposals;
- clear separation between documentation packages and `supabase/migrations/**` SQL history;
- current authority evidence and relevant commit references;
- rule that historical reports retain chronological wording;
- rule that stale `DRAFT` metadata is not active authority;
- rule that no AI or human may execute migration content from file presence alone;
- exact requirements for a future executable migration mission;
- escalation rule for conflicting evidence;
- links to the most relevant accepted completion/current-state records;
- statement that GitHub is the operational source of truth.

The README shall guide both humans and AI retrieval systems away from accidental execution.

## 6. Per-Family Containment

For every migration family directory under `docs/migration/`, create or update a concise family-level `README.md` when needed to make its current status unambiguous.

Each family README shall state:

- family/mission identifier;
- current classification from the approved taxonomy;
- whether execution occurred;
- whether Mission Control accepted it;
- whether it is executable now;
- current successor or completed-state relationship;
- pointer to `docs/migration/README.md`;
- prohibition on reuse or execution without a new explicit mission;
- preservation notice for historical documents.

Rules:

- do not rewrite historical report bodies merely to change old status wording;
- do not delete, move, rename, or consolidate migration evidence;
- do not change SQL;
- do not convert a recommendation into approval;
- do not claim acceptance without evidence;
- do not create duplicate authority layers;
- use wrapper/index metadata to contain ambiguity.

If a family already has an adequate README, update it minimally and preserve its history.

## 7. AI Intake and Execution Guard

Apply the smallest necessary navigation/guard updates to current operational instructions so Codex, Claude Code, and specialist AIs must consult `docs/migration/README.md` before any migration-related work.

At minimum review:

```text
AGENTS.md
CHATGPT.md
CLAUDE.md
README.md
```

Add only concise controls necessary to establish:

- migration artifacts are non-executable by default;
- `docs/migration/README.md` is the current migration authority index;
- SQL under `supabase/migrations/**` is not self-authorizing;
- a new explicit mission is required for any execution;
- ambiguity requires a stop report.

Do not duplicate the full migration index into these files.

## 8. Reconcile Current Mission Control Records

Update current operational records to reflect:

- Project HQ synchronization accepted through `SB-GOV-HOUSEKEEPING-1.5`;
- migration authority audit completed through `SB-GOV-HOUSEKEEPING-1.6`, when verified;
- no active executable migration package, if proven;
- production remains live;
- completed migration evidence remains preserved;
- future migration work requires a new mission.

Review and update only where directly relevant:

```text
mission-control/mission_memory.md
communication/missions/SB-GOV-HOUSEKEEPING-1.0/README.md
communication/missions/SB-GOV-HOUSEKEEPING-1.0/decision-log.md
communication/missions/SB-GOV-HOUSEKEEPING-1.0/handover-log.md
communication/missions/SB-GOV-HOUSEKEEPING-1.0/codex/mission-control-review-queue.md
communication/missions/SB-GOV-HOUSEKEEPING-1.5/README.md
communication/missions/SB-GOV-HOUSEKEEPING-1.5/decision-log.md
communication/missions/SB-GOV-HOUSEKEEPING-1.5/handover-log.md
```

Preserve chronology. Append verification and final disposition rather than rewriting historically accurate findings.

Do not process branch protection, GitHub Actions, implementation-contract approvals, product mission review, or unrelated housekeeping items.

## 9. Mission Package

Create:

```text
communication/missions/SB-GOV-HOUSEKEEPING-1.6/
```

Required files:

```text
communication/missions/SB-GOV-HOUSEKEEPING-1.6/README.md
communication/missions/SB-GOV-HOUSEKEEPING-1.6/decision-log.md
communication/missions/SB-GOV-HOUSEKEEPING-1.6/handover-log.md
communication/missions/SB-GOV-HOUSEKEEPING-1.6/codex/migration-inventory.md
communication/missions/SB-GOV-HOUSEKEEPING-1.6/codex/migration-authority-evidence.md
communication/missions/SB-GOV-HOUSEKEEPING-1.6/codex/draft-family-containment-report.md
communication/missions/SB-GOV-HOUSEKEEPING-1.6/codex/ai-execution-guard-report.md
communication/missions/SB-GOV-HOUSEKEEPING-1.6/codex/final-reconciliation-report.md
communication/missions/SB-GOV-HOUSEKEEPING-1.6/founder/founder-brief.md
```

The package shall record:

- starting commit;
- complete inventory and counts;
- every discovered family;
- evidence for current authority;
- accepted/completed chain;
- draft/proposal/deferred classifications;
- `SB-MIG-1.3` disposition;
- SQL-history boundary;
- stale metadata conflicts;
- files created or changed;
- validation evidence;
- unresolved issues;
- next authorized action.

## 10. Live Response

Create:

```text
communication/live/report1.6.md
```

It must include:

- total migration-related files and families reviewed;
- complete family classification summary;
- current active migration mission;
- current executable package;
- last accepted migration/cutover state;
- `SB-MIG-1.3` disposition;
- `supabase/migrations/**` authority boundary;
- `docs/migration/README.md` result;
- family README containment result;
- AI instruction guard result;
- stale metadata findings;
- contradictions or unresolved evidence;
- exact files created and modified;
- canonical/application/SQL/infrastructure changes: explicitly state none;
- Markdown quality-gate result;
- internal-link result;
- `git diff --check` result;
- secret-check result;
- exact staged-scope result;
- commit and push status;
- working-tree and remote-synchronization evidence;
- remaining housekeeping queue;
- communication closure status.

Successful completion status:

```text
MIGRATION AUTHORITY DEFINED — DRAFT FAMILIES CONTAINED — NO EXECUTABLE MIGRATION PACKAGE ACTIVE — MISSION CONTROL VERIFICATION REQUIRED
```

If evidence conflicts or current authority cannot be proven:

```text
MIGRATION AUTHORITY RECONCILIATION BLOCKED — MISSION CONTROL DECISION REQUIRED
```

---

# Authorized File Scope

Codex may create or modify only:

```text
docs/migration/README.md
docs/migration/*/README.md
README.md
AGENTS.md
CHATGPT.md
CLAUDE.md
mission-control/mission_memory.md
communication/live/report1.6.md
communication/missions/SB-GOV-HOUSEKEEPING-1.0/README.md
communication/missions/SB-GOV-HOUSEKEEPING-1.0/decision-log.md
communication/missions/SB-GOV-HOUSEKEEPING-1.0/handover-log.md
communication/missions/SB-GOV-HOUSEKEEPING-1.0/codex/mission-control-review-queue.md
communication/missions/SB-GOV-HOUSEKEEPING-1.5/README.md
communication/missions/SB-GOV-HOUSEKEEPING-1.5/decision-log.md
communication/missions/SB-GOV-HOUSEKEEPING-1.5/handover-log.md
communication/missions/SB-GOV-HOUSEKEEPING-1.6/**
```

If a discovered migration family is nested more deeply and requires a family-level containment README, Codex may create that README only after recording the exact path and reason in `draft-family-containment-report.md`.

No other file is authorized.

---

# Prohibited Actions

Codex shall not:

- execute SQL or database migrations;
- modify `supabase/migrations/**`;
- modify any `.sql` file;
- modify application code or tests;
- connect to or write to Supabase;
- run test suites against any remote or production environment;
- change environment variables, secrets, OAuth, authentication, storage, infrastructure, or deployment;
- republish Lovable;
- reinterpret a proposal as approval;
- reactivate a completed mission;
- alter canonical project-source documents;
- delete, move, rename, or rewrite historical migration evidence;
- expose credentials or sensitive environment details;
- configure GitHub Actions or branch protection;
- close or archive the current housekeeping communication.

Unexpected evidence, an active migration process, unclear authority, untracked changes, or required out-of-scope edits require a stop report.

---

# Validation

Before commit, verify:

- full migration inventory completed;
- every discovered family classified;
- current executable authority explicitly stated;
- no proposal or draft marked active without evidence;
- completed missions not presented as reusable execution authority;
- `docs/migration/README.md` links resolve;
- family containment READMEs point to the central authority index;
- current AI instructions contain the default-deny guard;
- historical report bodies unchanged;
- `supabase/migrations/**` unchanged;
- no `.sql`, application, environment, infrastructure, or canonical-source file changed;
- only authorized paths staged;
- Markdown quality gate passes;
- internal links pass;
- `git diff --cached --check` passes;
- staged content contains no credentials, tokens, keys, passwords, or secret values.

---

# Git Authority for This Mission

Founder/Mission Control authorizes Codex for `SB-GOV-HOUSEKEEPING-1.6` to operate on repository:

```text
SmartBusinessv1/smart-business
```

using branch:

```text
main
```

under the active temporary Phase 1 compensating control, limited strictly to the authorized documentation and mission-record scope above.

Approved commit message:

```text
Define migration authority and contain draft families
```

Codex may:

- fetch and pull fast-forward only;
- verify remote, branch, starting commit, and clean working tree;
- perform read-only repository and history inspection;
- create the migration authority index and family containment READMEs;
- update the minimal AI navigation guards and directly relevant current records;
- create the mission package and live report;
- stage exact authorized paths only;
- commit with the approved message;
- push this narrowly scoped governance/documentation update to `main`;
- record the final commit and synchronization evidence.

Codex shall stop if:

- remote, branch, or working-tree state is incorrect;
- an active migration mission or execution process is found;
- current authority cannot be proven;
- a migration family requires substantive rewriting;
- an unauthorized path would need modification;
- SQL or environment changes appear in the diff;
- validation fails;
- push is non-fast-forward or conflicts occur.

---

# Completion Principle

Migration documentation may preserve history, preparation, warnings, and lessons.

It must never silently become permission to act.

Smart Business migration execution belongs to a specific, current, human-authorized mission with clear safeguards—not to whichever draft, runbook, SQL file, or recommendation an AI happens to retrieve first.
