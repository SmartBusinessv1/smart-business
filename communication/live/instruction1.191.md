# SMART BUSINESS — REPOSITORY COMMUNICATION

# SB-P-1.11-GC-40 — RESUME AUTHORIZATION: PRODUCTION MIGRATION 2

**Instruction ID:** `instruction1.191`  
**Mission:** `SB-P-1.11 — Product Catalog & Pricing`  
**Workstream:** `GC-40 — Production Migration Controlled Execution`  
**Sender:** Mission Control  
**Recipient:** Claude Engineering / Infrastructure Operations  
**Date:** 2026-08-29  
**Status:** AUTHORIZATION — PENDING HUMAN MERGE

---

## 1. Purpose

Resume GC-40 after the successful closure of `GC-40A MIGRATION-HISTORY RECONCILIATION — PASS` recorded in merged `communication/live/report1.183.md`.

This instruction authorizes **Migration 2 only**:

`20260811090000_sb_p_1_11_gc_1_security_correction.sql`

No later migration is authorized by this instruction.

---

## 2. Preconditions

Before execution, verify all of the following against production:

1. Production project ref is exactly `gysgzasfcjvtrgaigfyn`.
2. Canonical Migration 1 is recorded exactly as `20260810120000 — sb_p_1_11_gc_1_catalog_import_support_schema`.
3. Generated history version `20260829085110` is absent.
4. Migrations 2–4 remain unapplied.
5. `catalog_import_batches` and `catalog_import_rows` exist with RLS enabled.
6. Locked Catalog command count is exactly `19`.
7. Production recoverability remains available for the migration window.

If any precondition differs, **STOP** and report to Mission Control. Do not improvise a repair.

---

## 3. Authorized Execution

Apply exactly the canonical repository migration file:

`supabase/migrations/20260811090000_sb_p_1_11_gc_1_security_correction.sql`

Use the repository's guarded production Supabase migration path so the canonical migration version is preserved in migration history.

Do not execute the migration SQL through any path that substitutes a generated timestamp/version.

---

## 4. Immediate Post-Migration Checkpoint

After Migration 2 completes, verify before any further action:

- migration history records exactly `20260811090000 — sb_p_1_11_gc_1_security_correction`;
- no generated duplicate migration version exists;
- Migration 1 remains correctly recorded;
- Migrations 3 and 4 remain unapplied;
- `catalog_import_rows.follow_up_state` exists as expected;
- the corrected resolution constraint is present;
- `delete_catalog_product` remains the same public command signature and is successfully replaced by the authorized body;
- temporary executor membership used by the migration is not left behind;
- effective grants/ownership match the intended narrow security posture;
- locked Catalog command count remains exactly `19`;
- no Inventory authority or Product Truth boundary changed.

Any failed or ambiguous checkpoint is a **STOP** condition. Do not proceed to Migration 3.

---

## 5. Explicitly Not Authorized

This instruction does **not** authorize:

- Migration 3: `20260819120000_sb_p_1_11_gc_38r_parser_support_schema.sql`;
- Migration 4: `20260826120000_sb_p_1_11_gc_38r_parser_guard_ambiguity_fix.sql`;
- reapplying or editing Migration 1;
- editing Migration 2;
- arbitrary production repair SQL;
- unrelated production data mutation;
- production bulk-import enablement;
- application deployment/publication;
- AWS, Cloudflare, or Lovable changes;
- Stage 21 or later lifecycle progression.

---

## 6. Completion Evidence

Claude Engineering must return a concise completion report through the repository communication channel documenting:

- exact production project identity;
- exact repository/main SHA used;
- preflight evidence;
- exact Migration 2 execution path;
- exact recorded migration version/name after execution;
- postflight verification for schema, constraint, function signature/body replacement, ownership/grants, 19-command boundary, and Migrations 3–4 remaining unapplied;
- confirmation that no unrelated action occurred;
- final PASS/FAIL disposition.

The report must be submitted as a **report-only PR** for human review. Claude Engineering must not self-merge.

---

## 7. Control State

GC-40 is resumed **only for Migration 2** after this instruction is human-merged.

Successful Migration 2 execution does not authorize Migration 3.

Mission Control must review the Migration 2 completion evidence and issue a separate resume authorization before Migration 3 may begin.
