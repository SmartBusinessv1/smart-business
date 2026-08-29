# SMART BUSINESS — REPOSITORY COMMUNICATION

# SB-P-1.11-GC-40 — RESUME AUTHORIZATION: PRODUCTION MIGRATION 4

**Instruction ID:** `instruction1.194`  
**Mission:** `SB-P-1.11 — Product Catalog & Pricing`  
**Workstream:** `GC-40 — Production Migration Controlled Execution`  
**Sender:** Mission Control  
**Recipient:** Claude Engineering / Infrastructure Operations  
**Date:** 2026-08-29  
**Status:** AUTHORIZATION — PENDING HUMAN MERGE

---

## 1. Purpose

Resume GC-40 after the successful production execution of Migration 3 recorded in merged `communication/live/report1.186.md`.

This instruction authorizes **Migration 4 only**:

`20260826120000_sb_p_1_11_gc_38r_parser_guard_ambiguity_fix.sql`

This is the final migration in the already-approved GC-40 four-migration production package. Successful execution does **not** by itself authorize parser/bulk-import activation, application deployment, Stage 21+, or GC-40 closure.

---

## 2. Authorized Change

Apply exactly the canonical repository migration file:

`supabase/migrations/20260826120000_sb_p_1_11_gc_38r_parser_guard_ambiguity_fix.sql`

The migration is a forward corrective replacement of exactly two existing parser helper functions:

- `public.acquire_parser_preview_guard(uuid)`
- `public.issue_parser_upload_lease(uuid, uuid, text, integer, text, text, uuid)`

The authorized semantic correction is limited to adding PostgreSQL `#variable_conflict use_column` inside those two function bodies. No function signature, return type, `SECURITY DEFINER` posture, `search_path`, ownership, grant, table, constraint, index, RLS policy, or Product Truth authority is authorized to change beyond what the canonical migration itself performs.

Do not edit the migration body.

---

## 3. Mandatory Fresh Preflight

Immediately before execution, verify against production:

1. project ref is exactly `gysgzasfcjvtrgaigfyn`;
2. Migration 1 is recorded exactly as `20260810120000 — sb_p_1_11_gc_1_catalog_import_support_schema`;
3. Migration 2 is recorded exactly as `20260811090000 — sb_p_1_11_gc_1_security_correction`;
4. Migration 3 is recorded exactly as `20260819120000 — sb_p_1_11_gc_38r_parser_support_schema`;
5. generated history version `20260829085110` is absent;
6. Migration 4 (`20260826120000`) remains unapplied;
7. `parser_preview_guards` and `parser_upload_leases` exist with RLS enabled;
8. all nine Migration-3 parser helper functions exist;
9. `acquire_parser_preview_guard` and `issue_parser_upload_lease` are still the pre-Migration-4 definitions and do not yet contain `#variable_conflict use_column`;
10. PUBLIC, `anon`, and `authenticated` have no unauthorized parser table/helper access, and the established `service_role` posture remains unchanged;
11. locked Catalog command count remains exactly `19`;
12. production recoverability remains available for the migration window.

If any item differs or is ambiguous, **STOP** and report to Mission Control. Do not improvise repair SQL.

---

## 4. Execution Method

Use the repository's guarded production Supabase CLI migration path.

Because Migration 4 is now the only remaining pending migration in the authorized package, no migration-file relocation should be necessary.

First run a guarded production `db push --dry-run` and confirm that it lists **exactly one** migration:

`20260826120000_sb_p_1_11_gc_38r_parser_guard_ambiguity_fix.sql`

If the dry-run lists any other migration, **STOP**. Do not execute the real push.

If and only if the dry-run is exact, run the guarded production `db push` so Supabase's own migration runner applies and records canonical version `20260826120000`.

Do not use direct SQL execution plus `migration repair` for Migration 4.

---

## 5. Immediate Post-Migration Checkpoint

After the guarded push completes, verify all of the following before any further action:

1. migration history records exactly `20260826120000 — sb_p_1_11_gc_38r_parser_guard_ambiguity_fix`;
2. Migrations 1–3 remain correctly recorded in canonical order;
3. generated version `20260829085110` remains absent and no new generated duplicate exists;
4. there are no further pending GC-40 package migrations;
5. `public.acquire_parser_preview_guard(uuid)` retains the same signature, return shape, `LANGUAGE plpgsql`, `SECURITY DEFINER`, and `SET search_path = ''` posture and now contains `#variable_conflict use_column`;
6. `public.issue_parser_upload_lease(uuid, uuid, text, integer, text, text, uuid)` retains the same signature, return shape, `LANGUAGE plpgsql`, `SECURITY DEFINER`, and `SET search_path = ''` posture and now contains `#variable_conflict use_column`;
7. the other seven parser helper functions are unchanged;
8. function ownership/OIDs/effective grants remain unchanged from the established Migration-3 posture;
9. `parser_preview_guards` and `parser_upload_leases` schema, constraints, indexes, RLS state, and policies remain unchanged;
10. PUBLIC, `anon`, and `authenticated` still have no unauthorized parser support access;
11. `service_role` effective privileges remain exactly within the established parser support contract;
12. locked Catalog command count remains exactly `19`;
13. no Inventory authority, Catalog Product Truth authority, merchant financial authority, parser feature activation, bulk-import activation, or application release state changed;
14. repository migration files remain unchanged with zero migration-directory diff.

Any failed or ambiguous item is a **STOP** condition. Do not perform arbitrary corrective SQL.

---

## 6. Explicitly Not Authorized

This instruction does **not** authorize:

- editing or reapplying Migrations 1–3;
- editing Migration 4;
- applying any fifth migration;
- direct SQL plus migration-history repair for Migration 4;
- arbitrary production repair SQL;
- parser or bulk-import production activation;
- application deployment/publication;
- AWS, Cloudflare, or Lovable changes;
- Stage 21 or later lifecycle progression;
- declaring GC-40 closed merely because Migration 4 applied successfully.

Migration completion and lifecycle/release activation remain separate decisions.

---

## 7. Completion Evidence

Claude Engineering must return a concise completion report through the repository communication channel documenting:

- exact production project identity;
- exact repository/main SHA used;
- complete fresh preflight evidence;
- exact guarded dry-run evidence proving Migration 4 was the sole selected migration;
- exact guarded execution path;
- exact canonical migration version/name recorded after execution;
- verification of both corrected function definitions including `#variable_conflict use_column`;
- verification that signatures, return types, `SECURITY DEFINER`, `search_path`, ownership/OIDs/grants, the other seven helpers, parser tables/RLS, browser-role denial, `service_role` posture, and 19-command Catalog boundary remain unchanged;
- confirmation that no parser/bulk-import activation, deployment, unrelated production mutation, or Stage 21+ action occurred;
- final PASS/FAIL disposition.

Submit the evidence as:

`communication/live/report1.187.md`

through a **report-only PR**. Claude Engineering must not self-merge.

---

## 8. Control State

GC-40 is resumed **only for Migration 4** after this instruction is human-merged.

Even if Migration 4 passes, GC-40 remains under Mission Control review until the Migration-4 report is human-merged and the overall four-migration package is reconciled against the original GC-40 authorization and final completion requirements.
