# SMART BUSINESS — REPOSITORY COMMUNICATION

# SB-P-1.11-GC-40 — RESUME AUTHORIZATION: PRODUCTION MIGRATION 3

**Instruction ID:** `instruction1.193`  
**Mission:** `SB-P-1.11 — Product Catalog & Pricing`  
**Workstream:** `GC-40 — Production Migration Controlled Execution`  
**Sender:** Mission Control  
**Recipient:** Claude Engineering / Infrastructure Operations  
**Date:** 2026-08-29  
**Status:** AUTHORIZATION — PENDING HUMAN MERGE

---

## 1. Purpose

Resume GC-40 after the successful human-reviewed closure of Migration 2, recorded in merged `communication/live/report1.185.md`.

This instruction authorizes **Migration 3 only**:

`20260819120000_sb_p_1_11_gc_38r_parser_support_schema.sql`

No later migration is authorized by this instruction.

---

## 2. Execution Method Selected

Use the same bounded, reversible scoped `db push` method already proven for Migration 2:

1. fresh preflight against production;
2. record the exact SHA-256 of Migration 4;
3. temporarily relocate Migration 4 locally out of `supabase/migrations/` without editing its contents and without committing or pushing the relocation;
4. run the guarded production `db push --dry-run`;
5. proceed only if the dry-run selects **exactly Migration 3 and no other migration**;
6. run the guarded production `db push`;
7. immediately restore Migration 4 to its exact original path;
8. verify byte identity and zero residual migration-file diff;
9. perform the full post-migration checkpoint below;
10. STOP. Migration 4 remains unauthorized.

Do not use direct SQL plus `migration repair` for Migration 3.

---

## 3. Fresh Preflight — Mandatory

Before any production mutation, verify all of the following:

1. production project ref is exactly `gysgzasfcjvtrgaigfyn`;
2. Migration 1 is recorded exactly as `20260810120000 — sb_p_1_11_gc_1_catalog_import_support_schema`;
3. Migration 2 is recorded exactly as `20260811090000 — sb_p_1_11_gc_1_security_correction`;
4. generated history version `20260829085110` is absent;
5. Migration 3 (`20260819120000`) is still unapplied;
6. Migration 4 (`20260826120000`) is still unapplied;
7. `parser_preview_guards` and `parser_upload_leases` do not already exist in production;
8. the nine Migration-3 parser helper functions do not already exist in production;
9. locked Catalog command count remains exactly `19`;
10. production recoverability remains available for the migration window.

If any item differs, **STOP** and report to Mission Control. Do not improvise a repair.

---

## 4. Authorized Production Mutation

Apply exactly the canonical repository migration:

`supabase/migrations/20260819120000_sb_p_1_11_gc_38r_parser_support_schema.sql`

The migration must be executed through the repository's guarded production Supabase CLI migration path so the canonical version `20260819120000` is recorded automatically.

The scope is the schema, invariants, RLS/privilege posture, and nine narrow SECURITY DEFINER parser-support helpers authored in that file. These parser tables/functions remain support-state infrastructure only; they do not gain Catalog or Inventory Product Truth authority.

---

## 5. Mandatory Scoped Dry-Run Gate

After locally relocating Migration 4, run the guarded production `db push --dry-run`.

The dry-run must show exactly:

`20260819120000_sb_p_1_11_gc_38r_parser_support_schema.sql`

and no other pending migration.

If Migration 4 or any unexpected migration is selected, **STOP**. Do not run the real push.

---

## 6. Immediate Post-Migration Checkpoint

After the real Migration 3 push completes and Migration 4 is restored, verify all of the following before any further action:

1. migration history records exactly `20260819120000 — sb_p_1_11_gc_38r_parser_support_schema`;
2. Migration 1 and Migration 2 remain correctly recorded;
3. no generated duplicate migration version exists;
4. Migration 4 remains unapplied;
5. `parser_preview_guards` exists with the authored columns/constraints and RLS state;
6. `parser_upload_leases` exists with the authored lifecycle constraints, indexes, and RLS state;
7. all nine parser helper functions exist with the authored signatures;
8. all nine parser helper functions are `SECURITY DEFINER` with `search_path = ''` as authored;
9. PUBLIC, `anon`, and `authenticated` have no unauthorized table access or helper execution path;
10. `service_role` effective direct table privilege on `parser_upload_leases` is narrowed exactly as authored, and helper EXECUTE grants match the Migration 3 contract;
11. no browser role gained direct write access to parser support tables;
12. no function/table ownership or grant drift exists beyond the authored migration contract;
13. locked Catalog command count remains exactly `19`;
14. no Inventory authority, Catalog Product Truth authority, merchant financial authority, or application release state changed;
15. Migration 4 file is restored byte-identical and `supabase/migrations/` has zero residual diff attributable to the scoped execution.

Any failed or ambiguous item is a **STOP** condition. Do not proceed to Migration 4.

---

## 7. Explicitly Not Authorized

This instruction does **not** authorize:

- Migration 4: `20260826120000_sb_p_1_11_gc_38r_parser_guard_ambiguity_fix.sql`;
- editing or reapplying Migration 1 or Migration 2;
- editing Migration 3 or Migration 4;
- committing or pushing the temporary Migration 4 relocation;
- direct SQL apply plus `migration repair` for Migration 3;
- arbitrary production repair SQL;
- production parser feature activation or bulk-import enablement;
- application deployment/publication;
- AWS, Cloudflare, or Lovable changes;
- Stage 21 or later lifecycle progression.

---

## 8. Completion Evidence

Claude Engineering must return a concise completion report through the repository communication channel documenting:

- exact production project identity;
- exact repository/main SHA used;
- fresh preflight evidence;
- Migration 4 SHA-256 before/after relocation;
- scoped dry-run output proving only Migration 3 was selected;
- exact guarded production execution path;
- exact recorded migration version/name after execution;
- full postflight evidence for tables, constraints, RLS, nine helper signatures/security posture, ACLs/grants, ownership, 19-command boundary, Migration 4 still unapplied, and zero residual file diff;
- confirmation that no unrelated action occurred;
- final PASS/FAIL disposition.

Submit the completion report as:

`communication/live/report1.186.md`

through a **report-only PR** for human review. Claude Engineering must not self-merge.

---

## 9. Control State

GC-40 is resumed **only for Migration 3** after this instruction is human-merged.

Successful Migration 3 execution does not authorize Migration 4.

Mission Control must review and accept `report1.186.md`, followed by a separate explicit authorization, before Migration 4 may begin.
