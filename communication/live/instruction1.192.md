# SMART BUSINESS — REPOSITORY COMMUNICATION

# SB-P-1.11-GC-40 — MIGRATION 2 SCOPED EXECUTION METHOD AUTHORIZATION

**Instruction ID:** `instruction1.192`  
**Mission:** `SB-P-1.11 — Product Catalog & Pricing`  
**Workstream:** `GC-40 — Production Migration Controlled Execution`  
**Sender:** Mission Control  
**Recipient:** Claude Engineering / Infrastructure Operations  
**Date:** 2026-08-29  
**Status:** AUTHORIZATION — PENDING HUMAN MERGE

---

## 1. Purpose

Resolve the execution-path blocker documented in `communication/live/report1.184.md` and resume the already-authorized Migration 2 execution without expanding scope to Migration 3 or Migration 4.

This instruction selects **candidate method (a)** from `report1.184.md`: a scoped Supabase `db push` achieved by temporary, fully reversible local relocation of the two later migration files.

Migration 2 remains the only production migration authorized by this instruction:

`20260811090000_sb_p_1_11_gc_1_security_correction.sql`

---

## 2. Why This Method Is Selected

Mission Control selects the scoped `db push` method because it preserves the Supabase CLI migration runner as the actual DDL executor and therefore preserves the canonical migration identity automatically, while avoiding the split DDL-plus-history-repair sequence of candidate method (b).

The temporary file relocation is an execution-scoping technique only. It does not authorize changing migration content, repository history, or the canonical migration set.

---

## 3. Preconditions

Immediately before execution, re-confirm against production:

1. Project ref is exactly `gysgzasfcjvtrgaigfyn`.
2. Migration 1 remains recorded exactly as `20260810120000 — sb_p_1_11_gc_1_catalog_import_support_schema`.
3. Generated version `20260829085110` is absent.
4. Migration 2 is still unapplied.
5. Migration 3 `20260819120000` and Migration 4 `20260826120000` are still unapplied.
6. `catalog_import_batches` and `catalog_import_rows` exist with RLS enabled.
7. Locked Catalog command count remains exactly `19`.
8. Production recoverability remains available for the migration window; Mission Control has already verified the current scheduled physical backup with Restore capability, but execution must stop if that condition is known to have changed.

Any discrepancy is a STOP condition.

---

## 4. Authorized Scoped Execution Method

Claude Engineering is authorized to perform the following bounded local-only scoping sequence:

1. Record cryptographic hashes or equivalent byte-identity evidence for:
   - `supabase/migrations/20260819120000_sb_p_1_11_gc_38r_parser_support_schema.sql`
   - `supabase/migrations/20260826120000_sb_p_1_11_gc_38r_parser_guard_ambiguity_fix.sql`
2. Temporarily move those two files out of `supabase/migrations/` to a safe local temporary location, without editing their contents.
3. Run a guarded production `db push --dry-run` and verify that **only** Migration 2 is listed for application.
4. If and only if the dry-run lists exactly Migration 2, run the repository's guarded production `db push` to apply exactly:
   - `20260811090000_sb_p_1_11_gc_1_security_correction.sql`
5. Immediately restore Migration 3 and Migration 4 files to their exact original paths.
6. Verify their restored bytes match the pre-execution hashes and that `git diff` / `git status` show no residual change attributable to this temporary relocation.

The temporary relocation must remain local and must not be committed, pushed, or represented as a repository change.

If the dry-run lists anything other than exactly Migration 2, STOP without mutation and report.

---

## 5. Immediate Post-Migration Checkpoint

After Migration 2 completes and the two later migration files are restored, verify before any further action:

- migration history records exactly `20260811090000 — sb_p_1_11_gc_1_security_correction`;
- no generated duplicate migration version exists;
- Migration 1 remains correctly recorded;
- Migrations 3 and 4 remain unapplied;
- `catalog_import_rows.follow_up_state` exists with the authorized definition/default;
- `catalog_import_rows_resolution_pair` is the corrected constraint;
- `delete_catalog_product(uuid, uuid)` remains the same public signature and its authorized body replacement is present;
- `catalog_lifecycle_executor` has only the intended narrow SELECT path on `catalog_import_rows`;
- temporary membership of `postgres` in `catalog_lifecycle_executor` is not left behind beyond the pre-existing platform baseline described by the migration;
- function ownership and effective grants match the intended narrow posture;
- locked Catalog command count remains exactly `19`;
- no Inventory authority, Product Truth boundary, or unrelated production state changed;
- the two temporarily relocated migration files are restored byte-identical and no repository diff remains from the scoping technique.

Any failed or ambiguous checkpoint is a STOP condition. Do not proceed to Migration 3.

---

## 6. Explicitly Not Authorized

This instruction does **not** authorize:

- applying Migration 3 or Migration 4;
- editing the SQL body, filename, version, or committed repository state of Migration 2, 3, or 4;
- committing or pushing the temporary relocation of Migration 3 or 4;
- direct SQL execution of Migration 2 outside the Supabase CLI migration runner;
- `migration repair` for Migration 2 unless a new Mission Control instruction explicitly authorizes it after a new stop condition;
- arbitrary production repair SQL;
- unrelated production data mutation;
- production bulk-import enablement;
- application deployment/publication;
- AWS, Cloudflare, or Lovable changes;
- Stage 21 or later lifecycle progression.

---

## 7. Completion Evidence

Claude Engineering must return a report-only PR documenting:

- exact production project identity and repository/main SHA;
- fresh preflight evidence;
- hashes/byte-identity evidence for Migration 3 and Migration 4 before and after temporary relocation;
- the scoped `db push --dry-run` output proving only Migration 2 was selected;
- the exact guarded production execution command/path used;
- exact Migration 2 history version/name after execution;
- postflight evidence for schema, constraint, function signature/body, ownership/grants, temporary role-membership cleanup, 19-command boundary, and Migrations 3–4 remaining unapplied;
- proof of zero residual repository change from the relocation technique;
- confirmation that no unrelated action occurred;
- final PASS/FAIL disposition.

Use `communication/live/report1.185.md` for this completion report.

Claude Engineering must not self-merge.

---

## 8. Control State

GC-40 is resumed only for this scoped Migration 2 execution after this instruction is human-merged.

Successful Migration 2 execution does not authorize Migration 3.

Mission Control must review the resulting `report1.185.md` evidence and issue a separate authorization before Migration 3 may begin.
