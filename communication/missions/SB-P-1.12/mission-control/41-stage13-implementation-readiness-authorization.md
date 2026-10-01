# SMART BUSINESS MISSION CONTROL — MC-169

# SB-P-1.12 — Post-Lock Implementation Readiness and Migration Planning Authorization

**Mission:** SB-P-1.12 — Authority, Identity & Product Surface Foundation  
**Date:** 2026-10-01  
**Owner:** Mission Control  
**Status:** DRAFT — EFFECTIVE ONLY AFTER HUMAN MERGE TO CANONICAL `main` AND MISSION CONTROL POST-MERGE VERIFICATION  
**Work package:** `SB-P-1.12-WP-IMPLEMENTATION-READINESS`  
**Recipient:** Claude Code  
**Live instruction:** `communication/live/instruction1.33.md`

## 1. Canonical baseline

Use only the post-Stage-13-lock canonical state:

- `main@5cf32e8534101bc74254535e5952fa902aeda69f`;
- locked Blueprint blob `77d52096c020668311b039721a4de9248ddd460e`;
- locked EIS blob `c444f7509477d0e8b997af538440d93bf2ca4d72`;
- locked Engineering Contract blob `20228e17c2fc6c36cfad9ccc1d5114873b15df1a`;
- locked Lovable Build Prompt blob `26060db019fdae3cfdb8f4c5547352bc165eedbc`;
- locked Verification Checklist blob `82646e8d0e7e1e667ebfefbd3d64ee2fc1d2ebe8`;
- implementation authorization record currently `WITHHELD`.

## 2. Purpose

Prepare the missing factual inputs Mission Control needs before it can issue the Source 18 Stage 13 Implementation Authorization and before any migration mission can be activated.

This work package is **planning and evidence only**.

It does not authorize:

- application implementation;
- schema/SQL creation;
- migration creation or execution;
- Lovable build execution;
- provider mutation;
- production mutation or deployment;
- identity-deletion runtime.

## 3. Required readiness outputs

Claude Code shall inspect canonical repository state and prepare a concise evidence-backed readiness report covering all of the following.

### 3.1 Builder/workstream recommendation

For each locked workstream:

- WS-0
- WS-A1
- WS-A2
- WS-A3
- WS-B
- WS-C
- WS-D
- WS-E
- WS-F
- WS-G
- WS-H
- Identity deletion
- Consumer gate / cross-cutting governance

recommend the most appropriate authorized builder model:

- Lovable;
- Claude Code;
- split ownership;
- governance/evidence only, no builder.

For each recommendation state:

- exact rationale;
- expected repository/path scope;
- whether schema/migration work is involved;
- whether the builder would later be disqualified from independent verification of that workstream.

This is a recommendation only. Mission Control decides builder allocation.

### 3.2 Migration preparation inventory

Using the locked EIS, Engineering Contract and current repository schema/migrations, identify the complete set of schema-changing obligations/workstreams.

Return a **proposed migration mission manifest**, not executable SQL:

- proposed migration mission ID;
- proposed migration package name;
- proposed SQL/migration file names or file groups;
- obligation IDs and FCTM rows each file/group would serve;
- dependency/order constraints;
- destructive-risk classification;
- rollback/reversal expectations;
- required test/rehearsal environment;
- required backup/precondition evidence;
- whether each migration is additive, cut-over, backfill, constraint/grant/RLS, or cleanup.

Do not create SQL or migration files.

### 3.3 Repository and branch topology

Freshly verify:

- which repository is authoritative for current implementation;
- whether implementation remains in `SmartBusinessv1/smart-business` or must cross to `SmartBusinessv1/starter-supab-shell`;
- actual current app/test/schema locations;
- proposed implementation branch;
- proposed migration branch;
- any canonical-transfer requirement.

Do not move code.

### 3.4 Test and environment facts

Identify what is already known versus still unknown for:

- test Supabase project identity;
- runtime-verification environment;
- production project identity;
- Fast Gate command set;
- Full Assurance trigger paths;
- required DB/security/concurrency suites;
- provider/effective-access evidence gates.

Unknown facts remain UNKNOWN / UNVERIFIED. Do not infer them.

### 3.5 Verification-plan preview proposal

Prepare the factual basis Mission Control needs for Source 18 §4.9:

- intended independent verifier recommendation;
- eligible alternates;
- prior-contribution/conflict screen;
- highest-risk Class A boundaries;
- workstreams the proposed verifier must not have implemented, corrected or transferred.

Do not appoint the verifier. Mission Control appoints.

### 3.6 Runtime-verification plan proposal

Map the locked Verification Checklist into:

- Founder-reserved merchant-experience scenarios;
- delegable mechanical checks;
- proposed human-verifier role for delegable checks;
- environment each class requires.

Do not name a human unless repository evidence already establishes an authorized person. Otherwise mark `HUMAN VERIFIER — TO BE NAMED BY MISSION CONTROL / FOUNDER`.

### 3.7 Stage 14 applicability

Determine whether Source 18 Stage 14 should be:

- `APPLICABLE` — builder acts through Founder/external tool and requires a Founder Lovable Brief; or
- `NOT APPLICABLE — JUSTIFIED` — builder has direct authorized repository capability.

This is a recommendation only until Mission Control decides builder allocation.

## 4. Mandatory specialist trigger

Because SB-P-1.12 includes migrations, RLS/grants, authority, concurrency and destructive-risk boundaries, the later Implementation Authorization shall not be issued until Mission Control has obtained a targeted Supabase/Security implementation-readiness review of the migration and builder plan.

Claude Code shall therefore identify the exact questions that should be sent to that specialist review. It shall not answer on behalf of the specialist.

## 5. Writable paths

Write only:

1. `communication/missions/SB-P-1.12/claude-code/37-stage13-implementation-readiness-report.md`
2. `communication/live/report1.33.md`

No locked artifact may be edited.

## 6. Git authorization

**Repository:** `SmartBusinessv1/smart-business`  
**Branch:** `mission/SB-P-1.12-stage13-implementation-readiness-report`  
**Authorized base:** canonical `main` after this MC-169 PR is human-merged and verified  
**Authorized paths:** exactly the two report paths in Section 5  
**Commit message:** mission-scoped descriptive message permitted  
**Attribution trailer:** standard required `Co-Authored-By` rule  
**Permitted operations:** fetch; create authorized branch; inspect; write exact two paths; stage exact paths; commit; push; open one PR to `main`; report exact head/blobs  
**Force push:** prohibited  
**Direct `main` push:** prohibited  
**Self-approval/self-merge:** prohibited

Authorization expires when the readiness PR is opened and reported to Mission Control, or at 2026-10-03T23:59:59+05:30, whichever occurs first.

## 7. Required handoff

Return:

- exact baseline verified;
- builder/workstream recommendation;
- migration preparation inventory;
- repository/branch topology;
- environment/test fact table;
- verification-plan preview proposal;
- runtime-verification plan proposal;
- Stage 14 applicability recommendation;
- specialist-review question set;
- exact changed paths/head/blobs;
- exact GitHub Actions state.

End:

**IMPLEMENTATION READINESS PACKAGE SUBMITTED — STOP FOR MISSION CONTROL REVIEW**

No implementation. No SQL. No migration execution.
