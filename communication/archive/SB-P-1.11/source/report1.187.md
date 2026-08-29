# SMART BUSINESS — REPOSITORY COMMUNICATION

# SB-P-1.11-GC-40 — PRODUCTION MIGRATION 4 EXECUTION REPORT

**Report ID:** `report1.187`
**Mission:** `SB-P-1.11 — Product Catalog & Pricing`
**Workstream:** `GC-40 — Production Migration Controlled Execution`
**Sender:** Claude Engineering
**Recipient:** Mission Control
**In Reply To:** `communication/live/instruction1.194.md`
**Date:** 2026-08-29

---

## 1. Exact Repository/Main SHA Used

`ad790029c336d4815a61b77bb2792eeb847fe3f7` (`HEAD` == `origin/main`, includes the merged `instruction1.194.md` and `report1.186.md`).

The working tree carried one pre-existing, unrelated local modification (`src/routeTree.gen.ts`, already modified before this task began) which was left untouched throughout.

## 2. Production Project Identity (Non-Secret)

- Project name: `smart-business`
- Project ref: `gysgzasfcjvtrgaigfyn`
- Region: `ap-south-1`
- Access path: the repository's guarded CLI wrapper (`scripts/supabase-cli.mjs production ...`), which prints the resolved target before any command and requires explicit `CONFIRM_PRODUCTION=yes` — used for every command below.

## 3. Fresh Preflight Evidence (instruction1.194.md §3)

1. Project ref exactly `gysgzasfcjvtrgaigfyn` — confirmed on every wrapper invocation header. **PASS**.
2. Migration 1 recorded exactly as `20260810120000 — sb_p_1_11_gc_1_catalog_import_support_schema` — confirmed. **PASS**.
3. Migration 2 recorded exactly as `20260811090000 — sb_p_1_11_gc_1_security_correction` — confirmed. **PASS**.
4. Migration 3 recorded exactly as `20260819120000 — sb_p_1_11_gc_38r_parser_support_schema` — confirmed. **PASS**.
5. Generated version `20260829085110` absent — confirmed (history query returned exactly three rows, none generated). **PASS**.
6. Migration 4 (`20260826120000`) still unapplied — absent from history. **PASS**.
7. `parser_preview_guards` and `parser_upload_leases` exist with RLS enabled — confirmed via `pg_class`. **PASS**.
8. All nine Migration-3 parser helper functions exist — confirmed, with a full OID/owner/security-posture baseline captured for later comparison: `acquire_parser_preview_guard`=27099, `release_parser_preview_guard`=27100, `issue_parser_upload_lease`=27101, `confirm_parser_upload_lease`=27102, `claim_parser_upload_lease`=27103, `mark_parser_upload_lease_dispatched`=27104, `complete_parser_upload_lease`=27105, `fail_parser_upload_lease`=27106, `expire_parser_upload_lease`=27107 — all owned by `postgres`, all `SECURITY DEFINER`, all `search_path=""`. **PASS**.
9. `acquire_parser_preview_guard` and `issue_parser_upload_lease` did not yet contain `#variable_conflict use_column` — confirmed via `pg_get_functiondef` text search on both: both `false`. **PASS**.
10. PUBLIC/`anon`/`authenticated` had no unauthorized parser access, and `service_role` posture matched the established Migration-3 contract — confirmed via full table- and function-grant queries, byte-identical to the state verified in `report1.186.md`. **PASS**.
11. Locked Catalog command count exactly `19` — confirmed. **PASS**.
12. Production recoverability — Mission Control has attested to this across the GC-40 workstream; no condition change was reported. Claude Engineering has no tool access to independently query Supabase backup/PITR status; recorded as unchanged from the established baseline.

## 4. Execution Method (instruction1.194.md §4)

Migration 4 was the sole remaining pending migration in the four-migration package, so no migration-file relocation was necessary or performed.

### 4.1 Scoped Dry-Run

```
CONFIRM_PRODUCTION=yes node scripts/supabase-cli.mjs production db push --dry-run --linked --project-ref gysgzasfcjvtrgaigfyn
```

Result — exactly one migration listed:

```
Would push these migrations:
 • 20260826120000_sb_p_1_11_gc_38r_parser_guard_ambiguity_fix.sql
```

### 4.2 Guarded Production Execution

```
CONFIRM_PRODUCTION=yes node scripts/supabase-cli.mjs production db push --linked --project-ref gysgzasfcjvtrgaigfyn
```

```
Applying migration 20260826120000_sb_p_1_11_gc_38r_parser_guard_ambiguity_fix.sql...
{"upToDate":false,"dryRun":false,"migrations":["20260826120000_sb_p_1_11_gc_38r_parser_guard_ambiguity_fix.sql"],"seeds":[],"roles":[],"message":"Finished supabase db push."}
```

Applied through the Supabase CLI's own migration runner. No direct SQL execution plus `migration repair` was used, per instruction1.194.md §4's explicit constraint.

## 5. Exact Recorded Migration Version/Name After Execution

```json
[
  { "version": "20260810120000", "name": "sb_p_1_11_gc_1_catalog_import_support_schema" },
  { "version": "20260811090000", "name": "sb_p_1_11_gc_1_security_correction" },
  { "version": "20260819120000", "name": "sb_p_1_11_gc_38r_parser_support_schema" },
  { "version": "20260826120000", "name": "sb_p_1_11_gc_38r_parser_guard_ambiguity_fix" }
]
```

No generated duplicate row. Cross-checked via `supabase migration list`: every local migration version in the repository now has an identical `remote` value — no pending migration remains anywhere in the project, not only within the GC-40 package.

## 6. Verification of the Two Corrected Function Definitions

Full `pg_get_functiondef` output was retrieved for both target functions and compared line-for-line against the pre-Migration-4 source (Migration 3's file, read in full before execution):

- `public.acquire_parser_preview_guard(uuid)` — signature `(p_business_id uuid)`, `RETURNS TABLE(business_id uuid, guard_token uuid)`, `LANGUAGE plpgsql`, `SECURITY DEFINER`, `SET search_path TO ''` all unchanged. The only textual difference from the prior definition is one new line, `#variable_conflict use_column`, immediately after `AS $function$`. Every other line — the `INSERT ... ON CONFLICT (business_id) DO UPDATE ...` body — is byte-for-byte identical to the Migration 3 source.
- `public.issue_parser_upload_lease(uuid, uuid, text, integer, text, text, uuid)` — signature, `RETURNS TABLE(lease_id uuid, expires_at timestamp with time zone)`, `LANGUAGE plpgsql`, `SECURITY DEFINER`, `SET search_path TO ''` all unchanged. Same single added line, `#variable_conflict use_column`, immediately after `AS $function$`; the rest of the body is byte-for-byte identical to the Migration 3 source.

Both now test positive for the directive (`pg_get_functiondef(...) like '%#variable_conflict use_column%'` → `true` for both, versus `false` for both in the §3.9 preflight check).

## 7. Postflight Verification (instruction1.194.md §5)

| # | Checkpoint item | Result |
|---|---|---|
| 1 | Migration history records exactly `20260826120000 — sb_p_1_11_gc_38r_parser_guard_ambiguity_fix` | **PASS** — §5 |
| 2 | Migrations 1–3 remain correctly recorded in canonical order | **PASS** — §5 |
| 3 | Generated version `20260829085110` absent, no new generated duplicate | **PASS** — §5, exactly four rows |
| 4 | No further pending GC-40 package migrations | **PASS** — §5, and confirmed project-wide via `migration list`: every local version now has a matching remote value |
| 5 | `acquire_parser_preview_guard(uuid)` retains signature/return shape/`LANGUAGE`/`SECURITY DEFINER`/`search_path` and now contains the directive | **PASS** — §6 |
| 6 | `issue_parser_upload_lease(...)` retains signature/return shape/`LANGUAGE`/`SECURITY DEFINER`/`search_path` and now contains the directive | **PASS** — §6 |
| 7 | The other seven parser helper functions are unchanged | **PASS** — Migration 4's SQL contains `CREATE OR REPLACE` statements only for the two target functions; the other seven were never referenced by any statement, and their OIDs (§3.8 baseline vs. post-check) are identical |
| 8 | Function ownership/OIDs/effective grants unchanged from the established Migration-3 posture | **PASS** — all nine OIDs identical before and after (27099–27107); owner still `postgres` for all nine; table- and function-grant queries returned byte-identical result sets before and after |
| 9 | `parser_preview_guards`/`parser_upload_leases` schema, constraints, indexes, RLS state, and policies unchanged | **PASS** — column lists, all ten named constraints across both tables, index counts (1 for `parser_preview_guards`, 4 for `parser_upload_leases`), `relrowsecurity=true` for both, and `policy_count=0` for both all match the state verified in `report1.186.md` exactly |
| 10 | PUBLIC/`anon`/`authenticated` still have no unauthorized parser access | **PASS** — grant queries show zero rows for these three grantees on either table or any of the nine functions, unchanged |
| 11 | `service_role` effective privileges remain exactly within the established contract | **PASS** — `service_role` still holds the full baseline set on `parser_preview_guards`, exactly `SELECT` on `parser_upload_leases`, and `EXECUTE` on all nine functions — identical to the pre-migration baseline |
| 12 | Locked Catalog command count remains exactly `19` | **PASS** — re-queried post-migration, unchanged |
| 13 | No Inventory authority, Catalog Product Truth authority, merchant financial authority, parser feature activation, bulk-import activation, or application release state changed | **PASS** — the migration's only effect is replacing the bodies of two already-existing parser helper functions with the OID-preserving `#variable_conflict use_column` correction; nothing in this task invoked, exercised, exposed, or activated either function, any parser feature, or any deployment/release path |
| 14 | Repository migration files unchanged, zero migration-directory diff | **PASS** — no relocation was needed for this migration; `git status --porcelain` shows only the pre-existing unrelated `src/routeTree.gen.ts` modification; `git diff --stat -- supabase/migrations/` is empty |

## 8. Confirmation — No Unrelated Action Occurred

- No AWS, Cloudflare, or Lovable action of any kind occurred.
- No application deployment or publication occurred.
- No parser feature or bulk-import functionality was activated.
- No Stage 21 or later lifecycle action occurred.
- No production business/application data was read beyond the exact non-secret metadata/existence queries in this report.
- No migration file content, filename, or repository-tracked state was changed.
- No fifth migration was applied or attempted.
- Migrations 1–3 were not edited or reapplied.

## 9. Final Disposition

`GC-40 MIGRATION 4 EXECUTION — PASS`

Migration 4 (`20260826120000_sb_p_1_11_gc_38r_parser_guard_ambiguity_fix.sql`) was applied to production through the Supabase CLI's own guarded migration runner, with a scoped dry-run confirming it was the sole selected migration before the real push ran. The canonical version `20260826120000` is correctly recorded in migration history with no generated duplicate, and every migration in the repository — not only the GC-40 package — is now reflected in production history with no pending migration remaining. All fourteen post-migration checkpoint items pass, including direct confirmation that the two corrected function definitions changed by exactly one line each (`#variable_conflict use_column`), that all nine parser helper function OIDs, ownership, and grants are unchanged, and that no unrelated production, application, or infrastructure state changed.

**This report documents successful execution of Migration 4 only. Per instruction1.194.md §1 and §6, this does not constitute, declare, or imply closure of GC-40.** GC-40 remains under Mission Control review until this report is human-merged and the overall four-migration package is separately reconciled against the original GC-40 authorization and final completion requirements. No parser/bulk-import activation, application deployment, or Stage 21+ progression is authorized by this report.
