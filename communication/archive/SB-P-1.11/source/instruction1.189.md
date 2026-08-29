# SMART BUSINESS — REPOSITORY COMMUNICATION

# SB-P-1.11-GC-40A — PRODUCTION MIGRATION-HISTORY RECONCILIATION

**Instruction ID:** `instruction1.189`  
**Parent Mission:** `SB-P-1.11-GC-40 — Production Migration Execution`  
**Workstream:** `GC-40A — Minimum-Safe Migration-History Reconciliation`  
**Sender:** Mission Control  
**Recipient:** Claude Engineering  
**Date:** 2026-08-29  
**Status:** AUTHORIZATION PENDING HUMAN MERGE

---

## 1. Purpose

Resolve the production migration-history discrepancy encountered immediately after GC-40 Migration 1.

Migration 1 schema effects were successfully applied to the approved production Supabase project, but Supabase recorded the migration under a generated version rather than the canonical repository version.

Observed production record:

`20260829085110 — sb_p_1_11_gc_1_catalog_import_support_schema`

Canonical repository migration identity:

`20260810120000 — sb_p_1_11_gc_1_catalog_import_support_schema`

The production schema currently contains the Migration 1 objects, but canonical migration-history identity is not aligned with the repository.

GC-40 is therefore STOPPED before Migration 2 until this discrepancy is reconciled and independently verified.

---

## 2. Authority Boundary

This is a narrowly bounded corrective mission.

It authorizes Claude Engineering to:

1. inspect current production migration-history and schema state using read-only methods;
2. inspect repository migration tooling and determine the minimum-safe supported reconciliation method;
3. reconcile only the Migration 1 history identity described in this instruction;
4. verify after reconciliation that production schema state is unchanged and migration history matches the canonical Migration 1 identity;
5. create a report-only completion record and PR.

This instruction does not authorize continuing GC-40 Migration 2, Migration 3, or Migration 4.

---

## 3. Locked Facts at Entry

The following facts were established before this instruction:

- approved production project: `smart-business`;
- project ref: `gysgzasfcjvtrgaigfyn`;
- region: `ap-south-1`;
- GC-40 authorization is merged;
- pre-execution checkpoint passed;
- production recoverability was confirmed through a current scheduled physical backup;
- Migration 1 SQL was applied successfully;
- `public.catalog_import_batches` exists;
- `public.catalog_import_rows` exists;
- RLS is enabled on both tables;
- exactly nineteen locked Catalog commands remained present immediately before Migration 1;
- no Migration 2/3/4 execution has occurred;
- no arbitrary repair SQL has been authorized or executed.

Claude Engineering must re-verify the relevant facts before any corrective mutation.

---

## 4. Required Investigation Before Mutation

Before changing production migration history, Claude Engineering must determine and record:

1. why the execution path generated version `20260829085110` rather than preserving `20260810120000`;
2. whether the repository's normal Supabase CLI/migration tooling provides a supported history-repair mechanism;
3. whether direct modification of `supabase_migrations.schema_migrations` is necessary or whether a safer supported command exists;
4. the exact current row(s) for migration name `sb_p_1_11_gc_1_catalog_import_support_schema`;
5. confirmation that canonical version `20260810120000` is not already recorded;
6. confirmation that the Migration 1 schema objects exist once and only once and require no reapplication;
7. confirmation that no other migration-history row will be changed by the proposed correction.

If the supported reconciliation method or resulting state is ambiguous, STOP and return to Mission Control.

---

## 5. Authorized Corrective Outcome

The only acceptable final migration-history state for Migration 1 is:

- canonical version `20260810120000` recorded for `sb_p_1_11_gc_1_catalog_import_support_schema`;
- generated version `20260829085110` no longer represents that same migration as an additional applied migration;
- Migration 1 schema objects remain present exactly once;
- no Migration 1 SQL body is reapplied;
- no application data is changed;
- no Catalog Product Truth or Inventory Product Truth is changed;
- no other migration-history row is changed.

Use the minimum mutation necessary to reach this state.

Prefer a supported Supabase migration-history repair mechanism over direct system-table editing when available and semantically correct.

---

## 6. Mandatory Verification After Reconciliation

After the correction, verify all of the following before reporting completion:

1. `20260810120000` is present exactly once with the expected Migration 1 name;
2. `20260829085110` is absent for the Migration 1 name;
3. `catalog_import_batches` exists;
4. `catalog_import_rows` exists;
5. RLS remains enabled on both tables;
6. the Owner-only authenticated SELECT policy remains present on both tables;
7. browser-role grants remain no broader than the Migration 1 contract;
8. exactly nineteen locked public Catalog commands remain present;
9. Migration 2, Migration 3, and Migration 4 remain unapplied;
10. no production application deployment, bulk-import enablement, AWS, Cloudflare, Lovable, or unrelated Supabase change occurred.

Any failed verification is a STOP condition.

---

## 7. Explicitly Not Authorized

This instruction does not authorize:

- reapplying Migration 1 SQL;
- modifying the Migration 1 repository file;
- applying Migration 2, 3, or 4;
- any fifth migration;
- arbitrary production SQL repair beyond the exact history reconciliation;
- production data mutation;
- schema redesign;
- Catalog or Inventory Product Truth mutation;
- bulk-import production enablement;
- application deployment or publication;
- AWS/IAM/Roles Anywhere/Lambda/S3 changes;
- Cloudflare changes;
- Lovable changes;
- Stage 21 or later lifecycle progression.

---

## 8. GC-40 Resume Rule

Successful GC-40A completion does not itself authorize Migration 2.

After GC-40A completion is reported and human-merged, Mission Control must review the evidence and explicitly state whether GC-40 may resume from Migration 2.

Until then, GC-40 remains STOPPED after Migration 1.

---

## 9. Required Completion Report

Create:

`communication/live/report1.183.md`

The report must include:

- exact repository/main SHA used;
- exact production project identity;
- exact pre-correction migration-history rows;
- root cause of generated migration version;
- exact supported reconciliation method used;
- exact mutation performed, without secrets;
- exact post-correction migration-history rows;
- schema/RLS/grant/19-command verification;
- confirmation Migration 2/3/4 remain unapplied;
- confirmation no unrelated production mutation occurred;
- final disposition exactly one of:
  - `GC-40A MIGRATION-HISTORY RECONCILIATION — PASS — READY FOR MISSION CONTROL RESUME REVIEW`
  - `GC-40A MIGRATION-HISTORY RECONCILIATION — CHANGES REQUIRED`
  - `GC-40A MIGRATION-HISTORY RECONCILIATION — BLOCKED`

Create the report through a normal report-only PR. Do not self-merge.

---

## 10. Mission Control Decision

Upon human merge of this instruction:

**GC-40A MINIMUM-SAFE PRODUCTION MIGRATION-HISTORY RECONCILIATION IS AUTHORIZED — EXACT MIGRATION 1 HISTORY ONLY — NO MIGRATION 2/3/4 EXECUTION — NO GC-40 RESUME WITHOUT SEPARATE MISSION CONTROL REVIEW.**
