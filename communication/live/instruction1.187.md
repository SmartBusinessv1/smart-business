# SMART BUSINESS — REPOSITORY COMMUNICATION

# SB-P-1.11-GC-39 — PRODUCTION MIGRATION READINESS & EXECUTION PACKAGE REVIEW

**Instruction ID:** `instruction1.187`  
**Mission:** `SB-P-1.11 — Product Catalog & Pricing`  
**Workstream:** `GC-39 — Production Migration Readiness & Execution Package Review`  
**Sender:** Mission Control  
**Recipient:** Claude Engineering / Infrastructure Operations  
**Date:** 2026-08-28  
**Status:** AUTHORIZATION PENDING HUMAN MERGE

---

## 1. Purpose

Re-establish the exact production-migration position for SB-P-1.11 after Stage 19 independent verification PASS, GC-38/GC-38R non-production parser verification, and post-C5 cleanup.

This is a **review and execution-package preparation mission only**.

It does **not** authorize any production SQL execution, production migration application, production data mutation, production deployment, release progression, or Stage 21 Evidence Package creation.

The objective is to determine whether the complete SB-P-1.11 bulk-import/parser-support migration set is ready for a later, separately authorized production execution window.

---

## 2. Preconditions

Execution is authorized only after this instruction is human-reviewed and merged to `main`.

Before review begins, verify all of the following:

1. `communication/live/report1.180.md` is present on `main` and records `GC-38R POST-C5 CLEANUP — PASS`;
2. Stage 19 independent verification remains PASS;
3. Stage 20 remains unnecessary for the Stage 19 result unless a new material failure is discovered;
4. Stage 21 remains unauthorized;
5. GC-38/GC-38R non-production parser infrastructure remains the validated architecture;
6. no production migration authorization has been issued after this instruction was authored;
7. current `main` contains no material drift that invalidates the locked SB-P-1.11 migration or parser-support assumptions.

If any precondition is false or ambiguous, STOP and report the discrepancy before continuing.

---

## 3. Authorized Review Scope

The executing room may perform read-only repository inspection and read-only production/test Supabase inspection necessary to establish migration readiness.

At minimum, review the current production/test migration state against the canonical repository and determine the exact disposition of these candidate migrations:

- `20260810120000_sb_p_1_11_gc_1_catalog_import_support_schema.sql`
- `20260811090000_sb_p_1_11_gc_1_security_correction.sql`
- `20260819120000_sb_p_1_11_gc_38r_parser_support_schema.sql`
- `20260826120000_sb_p_1_11_gc_38r_parser_guard_ambiguity_fix.sql`

Do not assume all four must be applied as-is. Determine from evidence:

- which are actually absent from production;
- which are required for production-equivalent bulk import/parser support;
- required ordering and dependencies;
- whether any migration is test-only, superseded, redundant, or must be folded into a safer production package;
- whether later corrections depend on earlier migrations;
- whether all required functions, tables, grants, RLS policies, constraints, indexes, and helper contracts line up with the validated parser architecture;
- whether migration application can occur without changing Product Truth or expanding authority.

Read-only production queries are permitted only when necessary to establish current schema/migration/security state. No write statement, migration apply, repair, seed, data mutation, role mutation, or configuration mutation is authorized.

---

## 4. Required Readiness Analysis

Prepare an execution package that includes, at minimum:

1. exact production project identity and exact test project identity in non-secret form;
2. exact current production migration list relevant to SB-P-1.11;
3. exact current test migration list relevant to SB-P-1.11;
4. exact missing-production migration set;
5. dependency/order graph for the production package;
6. pre-migration checks and stop conditions;
7. backup/recovery prerequisites appropriate to the planned migration window;
8. forward-fix and rollback/recovery posture for each migration where practical;
9. exact read-only preflight SQL;
10. exact post-migration verification SQL;
11. expected schema/RLS/grant/function state after success;
12. parser-support compatibility checks against the validated GC-38R architecture;
13. confirmation that exactly nineteen public Catalog commands remain the locked Catalog Product Truth boundary;
14. confirmation that parser support state remains non-Product-Truth support infrastructure;
15. confirmation that Inventory remains sole stock authority;
16. risk classification for each migration and for the package as a whole;
17. estimated operational execution sequence and explicit human checkpoints;
18. exact conditions under which execution must STOP rather than continue.

The package must be implementation-ready for a later production authorization but must not execute it.

---

## 5. Security and Product Boundaries

Preserve all locked boundaries, including:

- no twentieth Catalog command;
- no direct parser Product Truth writes;
- no service-role substitution for Product Truth command authority;
- Catalog and Inventory remain separate truth models;
- Inventory remains sole stock authority;
- Opening Stock remains an Inventory movement;
- Phase 1 import authority remains Owner-only;
- Manager/Employee authority is not expanded;
- existing RLS, executor-role, idempotency, lease, guard, and parser fail-closed contracts remain intact;
- no production secret value, private key, certificate body, service-role key, AWS session credential, or authorization header may be exposed in the report.

---

## 6. Explicitly Not Authorized

This instruction does not authorize:

- applying any migration to production;
- running any production DDL/DML write;
- production data mutation;
- production Supabase configuration changes;
- AWS/IAM/Roles Anywhere/Lambda/S3 changes;
- Cloudflare changes;
- Lovable mutation;
- public deployment/publication;
- production enablement of bulk import;
- Stage 21 Evidence Package;
- Stage 22 Formal Completion Report;
- Stage 23 acceptance;
- Stage 24 closure;
- unrelated refactoring or schema redesign.

If production mutation appears necessary to determine readiness, STOP and return to Mission Control for separate authority.

---

## 7. Required Output

Create a report-only completion record:

`communication/live/report1.181.md`

The report must include:

- exact repository/base SHA reviewed;
- exact production/test project identities;
- exact migration-state evidence;
- exact migration package recommended for production, in order;
- migrations deliberately excluded and why;
- preflight and postflight verification queries;
- backup/recovery/forward-fix posture;
- risk and stop-condition matrix;
- confirmation that no production mutation occurred;
- confirmation that Stage 21 remains unauthorized;
- final disposition exactly one of:
  - `GC-39 PRODUCTION MIGRATION PACKAGE — READY FOR SEPARATE PRODUCTION AUTHORIZATION`
  - `GC-39 PRODUCTION MIGRATION PACKAGE — CHANGES REQUIRED`
  - `GC-39 PRODUCTION MIGRATION PACKAGE — BLOCKED`

Create the report through a normal PR. Do not self-merge.

---

## 8. Mission Control Disposition

Upon human merge of this instruction:

**GC-39 PRODUCTION MIGRATION READINESS REVIEW IS AUTHORIZED — READ-ONLY PRODUCTION/TEST INSPECTION AND EXECUTION-PACKAGE PREPARATION ONLY — NO PRODUCTION SQL EXECUTION — NO STAGE 21 PROGRESSION.**
