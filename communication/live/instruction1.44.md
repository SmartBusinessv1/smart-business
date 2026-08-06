# SMART BUSINESS MISSION CONTROL

## SB-P-1.11-PROD-PREP-1 — PRODUCTION MIGRATION RUNBOOK AND PREFLIGHT

**Mission ID:** SB-P-1.11-PROD-PREP-1  
**Mission Name:** Initial Phase 1 Catalog Production Migration Preparation  
**Reporting Room:** Claude Code / Supabase Backend Architecture  
**Mission Status:** ACTIVE AFTER MERGE  
**Authorized By:** Mission Control under `communication/live/instruction1.43.md`  
**Production Migration Execution:** NOT AUTHORIZED

---

## 1. Mission Objective

Prepare a complete, repository-backed production migration runbook and preflight package for the accepted SB-P-1.11 Initial Phase 1 catalog backend.

This mission protects the highest-risk path before any production mutation.

It authorizes preparation, inspection, simulation, evidence collection, and documentation only.

It does not authorize applying either catalog migration to production.

---

## 2. Binding Implementation Baseline

Use the merged repository state containing:

- commit `e0b0c57e972111bec746ed83ac9461b6ba98a3e3` and later accepted review records;
- `supabase/migrations/20260806120000_sb_p_1_11_impl_1_stage1_schema.sql`;
- `supabase/migrations/20260806130000_sb_p_1_11_impl_1_stage2_functions.sql`;
- `communication/live/report1.41.md`;
- `communication/live/report1.44.md`;
- `communication/live/report1.45.md`;
- `communication/live/report1.46.md`;
- `communication/live/instruction1.43.md`.

The accepted contract remains:

- exactly eleven Initial Phase 1 catalog tables;
- exactly nineteen public catalog command functions;
- exactly seven narrow NOLOGIN executor roles;
- Owner/dashboard-only authority;
- command-only writes;
- no direct client service-role use;
- no twentieth public function;
- no twelfth Phase 1 table.

---

## 3. Production Target

Production project reference:

`gysgzasfcjvtrgaigfyn`

Expected region:

`ap-south-1`

The executor must verify project name, organization, region, status, and explicit distinction from the dedicated test project before any production-facing action.

Test project reference:

`drravyyauixltoihzmwo`

No command may default implicitly to production.

---

## 4. Authorized Work

### 4.1 Repository and migration inspection

- confirm `main` head and clean working tree;
- verify migration checksums or content hashes;
- verify migration order and dependencies;
- verify no later migration conflicts with the two catalog migrations;
- inspect all touched pre-existing objects and grants;
- verify production PostgreSQL/Supabase compatibility assumptions.

### 4.2 Read-only production preflight

Read-only checks may include:

- project identity and health;
- applied migration inventory;
- schema/table/function/role baseline;
- extension availability, especially `pgcrypto`/`extensions.digest`;
- existing default privileges;
- current RLS state and policies on `businesses`, `inventory_items`, and `inventory_movements`;
- existing object-name collisions;
- role-name collisions;
- migration drift;
- security and performance advisor baseline;
- database size, connection health, and long-running transaction risks;
- backup/PITR availability and restore readiness.

### 4.3 Dry-run and simulation

- perform a full clean application against the dedicated test project or an approved isolated disposable environment;
- rerun structural and behavioral verification;
- verify the command 9 `catalog_pricing_executor` UPDATE/RLS correction;
- verify migration execution time and lock profile;
- identify statements likely to take locks on pre-existing production tables;
- estimate user-visible risk during migration.

### 4.4 Runbook preparation

Create an exact operator runbook covering:

1. named human operator and observer roles;
2. maintenance or low-traffic window recommendation;
3. production identity confirmation;
4. backup and restore-point confirmation;
5. preflight commands and expected output;
6. exact migration command sequence;
7. stop conditions before and during execution;
8. post-migration structural verification;
9. post-migration security verification;
10. post-migration behavioral smoke tests using controlled production-safe test data or a clearly approved alternative;
11. advisor comparison;
12. rollback/forward-fix decision tree;
13. merchant-impact and communication decision points;
14. evidence capture requirements;
15. final human sign-off gates.

---

## 5. Required Production Stop Conditions

The runbook must require an immediate stop if any of the following occurs:

- production identity does not match exactly;
- migration history differs from expected repository state;
- any catalog object already exists unexpectedly;
- any executor role already exists with incompatible attributes or membership;
- any required extension or pre-existing table is missing;
- schema drift affects `businesses`, `inventory_items`, or `inventory_movements`;
- a migration attempts to create more than eleven Phase 1 tables, nineteen public functions, or seven executor roles;
- advisor baseline shows an unexplained new high-severity security issue before execution;
- backup/PITR or restoration readiness cannot be confirmed;
- a command targets the wrong project or cannot prove the target;
- the human operator cannot independently verify the production project reference;
- any runtime output differs materially from the expected runbook evidence.

---

## 6. Rollback and Recovery Design

Because the accepted migrations introduce immutable history and role/policy architecture, the runbook must not assume a simplistic destructive rollback.

Document separately:

- pre-migration restore strategy;
- abort-before-first-migration procedure;
- failure-during-Stage-1 procedure;
- failure-between-Stage-1-and-Stage-2 procedure;
- failure-during-Stage-2 procedure;
- forward-fix criteria;
- point-in-time restore criteria;
- evidence preservation requirements;
- conditions requiring Founder/Mission Control decision.

Do not create or execute a destructive rollback migration under this preparation mission.

---

## 7. Required Deliverables

Create:

- `communication/live/report1.47.md` — production preflight findings;
- `docs/operations/SB-P-1.11-production-migration-runbook.md` — exact human operator runbook;
- `docs/operations/SB-P-1.11-production-verification-checklist.md` — post-migration acceptance checklist;
- `docs/operations/SB-P-1.11-production-rollback-and-recovery.md` — rollback/recovery decision framework.

The report must state one of:

- `READY FOR CONTROLLED PRODUCTION EXECUTION AUTHORIZATION`;
- `NOT READY — CORRECTION REQUIRED`;
- `BLOCKED — HUMAN OR PLATFORM ACTION REQUIRED`.

---

## 8. Explicit Prohibitions

Do not:

- apply either catalog migration to production;
- repair or alter production migration history;
- create, change, or drop production tables, roles, policies, functions, types, triggers, grants, or data;
- run production write smoke tests;
- expose or copy secrets;
- modify frontend code;
- authorize or execute Lovable publishing;
- self-approve or self-merge;
- broaden Product Truth or implementation scope.

---

## 9. Completion Report Requirements

The completion report must include:

- repository head and commit evidence;
- production identity evidence;
- migration hash/inventory evidence;
- pre-existing schema compatibility findings;
- extension and role findings;
- advisor baseline;
- lock and execution-time assessment;
- dry-run results;
- all detected risks;
- exact stop conditions;
- rollback/recovery readiness;
- unresolved human decisions;
- final readiness verdict.

---

## 10. Next Logical Step

After the runbook and preflight package is reviewed and merged, Mission Control may decide whether to issue a separate, one-time production migration execution instruction. No production mutation is authorized by this file.