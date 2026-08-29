# SMART BUSINESS — REPOSITORY COMMUNICATION

# SB-P-1.11-GC-40 — PRODUCTION MIGRATION EXECUTION AUTHORIZATION

**Instruction ID:** `instruction1.188`  
**Mission:** `SB-P-1.11 — Product Catalog & Pricing`  
**Workstream:** `GC-40 — Production Migration Execution`  
**Sender:** Mission Control  
**Recipient:** Founder / Claude Engineering / Infrastructure Operations  
**Date:** 2026-08-28  
**Status:** AUTHORIZATION PENDING HUMAN MERGE  
**Execution Authority:** GRANTED ONLY AFTER HUMAN MERGE OF THIS INSTRUCTION

---

## 1. Purpose

Authorize one bounded production Supabase migration window for the exact four-migration package accepted by `communication/live/report1.181.md`.

This authorization exists only to bring the approved production Supabase project to the validated SB-P-1.11 bulk-import/parser-support schema state already proven in `smart-business-test`.

This instruction does **not** authorize production bulk-import enablement, application deployment, AWS/Cloudflare/Lovable mutation, Stage 21 progression, or any unrelated production change.

---

## 2. Canonical Execution Baseline

Repository:

`SmartBusinessv1/smart-business`

GC-39 readiness report:

`communication/live/report1.181.md`

GC-39 disposition:

`GC-39 PRODUCTION MIGRATION PACKAGE — READY FOR SEPARATE PRODUCTION AUTHORIZATION`

Production project:

- name: `smart-business`
- ref: `gysgzasfcjvtrgaigfyn`
- region: `ap-south-1`

Test reference project:

- name: `smart-business-test`
- ref: `drravyyauixltoihzmwo`
- region: `ap-south-1`

Before execution, synchronize to the exact merged `main` containing this instruction and verify no later migration-relevant change supersedes this authority.

---

## 3. Exact Authorized Migration Package

Apply **only** these four existing canonical repository migrations, unchanged, in this exact order:

1. `20260810120000_sb_p_1_11_gc_1_catalog_import_support_schema.sql`
2. `20260811090000_sb_p_1_11_gc_1_security_correction.sql`
3. `20260819120000_sb_p_1_11_gc_38r_parser_support_schema.sql`
4. `20260826120000_sb_p_1_11_gc_38r_parser_guard_ambiguity_fix.sql`

No migration may be edited, folded, squashed, renamed, skipped, reordered, or supplemented under this instruction.

If any additional production migration appears necessary, STOP and return to Mission Control.

---

## 4. Mandatory Human Checkpoint A — Preflight

Before applying the first migration, the operator must verify all of the following:

1. this instruction is present on merged `main`;
2. production identity is exactly `gysgzasfcjvtrgaigfyn`;
3. production still shows exactly the four authorized migration versions as absent;
4. the target import/parser objects listed in `report1.181.md` remain absent before execution;
5. the locked public Catalog command count is exactly `19`;
6. test remains migration-current through `20260826120000`;
7. no newer corrective migration exists on current `main` that changes this package;
8. a recoverable production backup/PITR position appropriate to the current Supabase plan is confirmed immediately before execution;
9. bulk-import production traffic is not enabled during the migration window;
10. the exact postflight queries from `report1.181.md` are ready before the first write.

If any checkpoint fails or is ambiguous, **STOP — DO NOT APPLY ANY MIGRATION**.

The read-only preflight SQL in `report1.181.md` is the required evidence basis and may be executed under this instruction.

---

## 5. Authorized Execution Method

Use the repository's approved production Supabase migration path only.

Requirements:

- explicitly target `gysgzasfcjvtrgaigfyn`;
- use the canonical migration files from current merged `main`;
- preserve migration order;
- do not manually paste altered migration bodies into production;
- do not run unrelated SQL;
- do not modify production data except changes inherently performed by the authorized migrations themselves;
- do not change Supabase project configuration, Auth settings, secrets, Edge Functions, storage, networking, or billing settings;
- do not expose service-role keys, database passwords, access tokens, or other secrets in chat, logs, reports, commits, or screenshots.

---

## 6. Mandatory Human Checkpoint B — After Migration 1

After applying:

`20260810120000_sb_p_1_11_gc_1_catalog_import_support_schema.sql`

verify before continuing:

- migration version is recorded;
- `catalog_import_batches` exists;
- `catalog_import_rows` exists;
- RLS is enabled on both;
- `anon` has no direct privilege;
- `authenticated` is SELECT-only on both;
- no unexpected Catalog command-count change occurred.

If any result is unexpected, STOP. Do not apply Migration 2.

---

## 7. Mandatory Human Checkpoint C — After Migration 2

After applying:

`20260811090000_sb_p_1_11_gc_1_security_correction.sql`

verify before continuing:

- migration version is recorded;
- `catalog_import_rows.follow_up_state` exists;
- the corrected resolution-evidence constraint is present;
- `delete_catalog_product` retains its approved signature and `SECURITY DEFINER` posture;
- lifecycle executor access is narrow and business-scoped;
- temporary `catalog_lifecycle_executor` membership granted to `postgres` by the migration has been revoked;
- locked Catalog command count remains exactly `19`.

If any result is unexpected, STOP. Do not apply Migration 3.

---

## 8. Mandatory Human Checkpoint D — After Migration 3

After applying:

`20260819120000_sb_p_1_11_gc_38r_parser_support_schema.sql`

verify before continuing:

- migration version is recorded;
- `parser_preview_guards` exists;
- `parser_upload_leases` exists;
- RLS is enabled on both;
- browser roles have no direct parser-support table mutation authority;
- `service_role` direct privilege on `parser_upload_leases` matches the locked narrowed contract and does not retain broad direct DML authority;
- the nine parser-support helper functions exist with the expected `SECURITY DEFINER` and narrow EXECUTE posture;
- no Catalog Product Truth command was added.

If any result is unexpected, STOP. Do not apply Migration 4.

---

## 9. Mandatory Human Checkpoint E — After Migration 4 / Final Postflight

After applying:

`20260826120000_sb_p_1_11_gc_38r_parser_guard_ambiguity_fix.sql`

run the full postflight verification package from `report1.181.md` and confirm at minimum:

1. all four authorized migration versions are recorded;
2. all four required support/bookkeeping tables exist;
3. RLS is enabled on all four;
4. browser-role privileges match the locked narrow contract;
5. parser-support helper grants match the locked contract;
6. `acquire_parser_preview_guard` and `issue_parser_upload_lease` contain `#variable_conflict use_column`;
7. the public Catalog command count remains exactly `19`;
8. parser support remains non-Product-Truth infrastructure;
9. Inventory remains sole stock authority;
10. no production bulk-import feature is enabled merely because migrations succeeded.

If final postflight is not fully PASS, report the exact discrepancy and stop. Do not continue into deployment, feature enablement, Stage 21, or any repair not separately authorized.

---

## 10. Recovery and Failure Posture

Package-level risk remains **HIGH but bounded** as classified by GC-39.

Execution rules:

- do not continue through a failed checkpoint merely to complete the sequence;
- do not manually improvise rollback SQL;
- use the recovery/forward-fix posture recorded in `report1.181.md` and the existing SB-P-1.11 production recovery documentation;
- if a migration fails before being recorded, capture the exact non-secret error and STOP;
- if a migration is recorded but postflight fails, treat production as partially advanced, preserve evidence, and STOP for a separately authorized forward-fix/recovery mission;
- never rewrite migration history to conceal partial execution;
- no destructive rollback is authorized unless separately issued by Mission Control.

---

## 11. Explicitly Not Authorized

This instruction does not authorize:

- any fifth migration;
- modification of the four migration files;
- arbitrary production SQL repair;
- production data cleanup or seeding;
- enabling production bulk import;
- production application deployment or publication;
- Lovable mutation;
- Cloudflare changes;
- AWS/IAM/Roles Anywhere/Lambda/S3 changes;
- changing Catalog or Inventory Product Truth;
- adding a twentieth Catalog command;
- Manager/Employee permission expansion;
- Stage 21 Evidence Package;
- Stage 22 Formal Completion Report;
- Stage 23 acceptance;
- Stage 24 closure.

---

## 12. Required Completion Report

After the authorized migration window, create a report-only repository record:

`communication/live/report1.182.md`

The report must include:

- exact merged `main` SHA used for execution;
- exact production project identity;
- confirmation of backup/PITR readiness before first migration;
- preflight results;
- each migration execution result in order;
- checkpoint result after each migration;
- final postflight results;
- exact final production migration state;
- confirmation public Catalog command count remains `19`;
- confirmation no unauthorized production/application/AWS/Cloudflare/Lovable/lifecycle action occurred;
- any discrepancy or recovery action required;
- final disposition exactly one of:
  - `GC-40 PRODUCTION MIGRATION EXECUTION — PASS`
  - `GC-40 PRODUCTION MIGRATION EXECUTION — PARTIAL — STOPPED`
  - `GC-40 PRODUCTION MIGRATION EXECUTION — BLOCKED BEFORE START`

Create the completion report through a normal PR. Do not self-merge.

---

## 13. Mission Control Decision

Upon human merge of this instruction:

**SB-P-1.11-GC-40 PRODUCTION MIGRATION EXECUTION IS AUTHORIZED FOR THE EXACT FOUR-MIGRATION PACKAGE AND HUMAN CHECKPOINTS ABOVE — NO OTHER PRODUCTION OR LIFECYCLE ACTION IS AUTHORIZED.**
