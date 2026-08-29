# SMART BUSINESS — REPOSITORY COMMUNICATION

# SB-P-1.11-GC-40 — PRODUCTION MIGRATION 3 SCOPED EXECUTION REPORT

**Report ID:** `report1.186`
**Mission:** `SB-P-1.11 — Product Catalog & Pricing`
**Workstream:** `GC-40 — Production Migration Controlled Execution`
**Sender:** Claude Engineering
**Recipient:** Mission Control
**In Reply To:** `communication/live/instruction1.193.md`
**Date:** 2026-08-29

---

## 1. Exact Repository/Main SHA Used

`83bce795a0d5c0348a50de2f4ce077013236103b` (`HEAD` == `origin/main`, includes the merged `instruction1.193.md` and `report1.185.md`).

The working tree carried one pre-existing, unrelated local modification (`src/routeTree.gen.ts`, already modified before this task began) which was left untouched throughout.

## 2. Production Project Identity (Non-Secret)

- Project name: `smart-business`
- Project ref: `gysgzasfcjvtrgaigfyn`
- Region: `ap-south-1`
- Access path: the repository's guarded CLI wrapper (`scripts/supabase-cli.mjs production ...`), which prints the resolved target before any command and requires explicit `CONFIRM_PRODUCTION=yes` — used for every command below.

## 3. Fresh Preflight Evidence (instruction1.193.md §3)

1. Project ref exactly `gysgzasfcjvtrgaigfyn` — confirmed on every wrapper invocation header. **PASS**.
2. Migration 1 recorded exactly as `20260810120000 — sb_p_1_11_gc_1_catalog_import_support_schema` — confirmed. **PASS**.
3. Migration 2 recorded exactly as `20260811090000 — sb_p_1_11_gc_1_security_correction` — confirmed. **PASS**.
4. Generated version `20260829085110` absent — confirmed (history query returned exactly two rows, neither being the generated version). **PASS**.
5. Migration 3 (`20260819120000`) still unapplied — absent from history. **PASS**.
6. Migration 4 (`20260826120000`) still unapplied — absent from history. **PASS**.
7. `parser_preview_guards` and `parser_upload_leases` did not already exist — `pg_class` existence query returned zero rows. **PASS**.
8. The nine Migration-3 parser helper functions did not already exist — `pg_proc` existence query returned zero rows. **PASS**.
9. Locked Catalog command count exactly `19` — confirmed. **PASS**.
10. Production recoverability — Mission Control has attested to this across the GC-40 workstream (`instruction1.189.md`, `instruction1.192.md`); no condition change was reported for this step. Claude Engineering has no tool access to independently query Supabase backup/PITR status; recorded as unchanged from the established Mission-Control-attested baseline.

## 4. Migration 4 Byte-Identity Evidence (Before Relocation)

```
15c091e32ced5a33ac98aa9f446bec013bdd76922f9b298f2b9c3afeb5906be0  20260826120000_sb_p_1_11_gc_38r_parser_guard_ambiguity_fix.sql
```

Migration 4 was then moved out of `supabase/migrations/` to a local, non-repository scratch location (never committed, never pushed) — `git status` showed it as an ordinary unstaged working-tree deletion.

## 5. Scoped Dry-Run Evidence

```
CONFIRM_PRODUCTION=yes node scripts/supabase-cli.mjs production db push --dry-run --linked --project-ref gysgzasfcjvtrgaigfyn
```

Result — exactly one migration listed:

```
Would push these migrations:
 • 20260819120000_sb_p_1_11_gc_38r_parser_support_schema.sql
```

This matched instruction1.193.md §5's required gate exactly, authorizing the real push.

## 6. Exact Guarded Production Execution

```
CONFIRM_PRODUCTION=yes node scripts/supabase-cli.mjs production db push --linked --project-ref gysgzasfcjvtrgaigfyn
```

```
Applying migration 20260819120000_sb_p_1_11_gc_38r_parser_support_schema.sql...
{"upToDate":false,"dryRun":false,"migrations":["20260819120000_sb_p_1_11_gc_38r_parser_support_schema.sql"],"seeds":[],"roles":[],"message":"Finished supabase db push."}
```

Only Migration 3 was applied, through the Supabase CLI's own migration runner, capturing the canonical version `20260819120000` automatically. `migration repair` was not used for this migration, per instruction1.193.md §2's explicit constraint.

## 7. Restoration and Zero-Residual Verification

Migration 4 was moved back to its exact original path immediately after the push completed:

```
15c091e32ced5a33ac98aa9f446bec013bdd76922f9b298f2b9c3afeb5906be0  20260826120000_sb_p_1_11_gc_38r_parser_guard_ambiguity_fix.sql
```

Identical, byte-for-byte, to §4. `git status --porcelain` showed only the pre-existing unrelated `src/routeTree.gen.ts` modification; `git diff --stat -- supabase/migrations/` was empty. The temporary relocation was never committed or pushed.

## 8. Exact Recorded Migration Version/Name After Execution

```json
[
  { "version": "20260810120000", "name": "sb_p_1_11_gc_1_catalog_import_support_schema" },
  { "version": "20260811090000", "name": "sb_p_1_11_gc_1_security_correction" },
  { "version": "20260819120000", "name": "sb_p_1_11_gc_38r_parser_support_schema" }
]
```

No row for `20260829085110` or `20260826120000`.

## 9. Postflight Verification (instruction1.193.md §6)

| # | Checkpoint item | Result |
|---|---|---|
| 1 | Migration history records exactly `20260819120000 — sb_p_1_11_gc_38r_parser_support_schema` | **PASS** — §8 |
| 2 | Migration 1 and Migration 2 remain correctly recorded | **PASS** — §8 |
| 3 | No generated duplicate migration version exists | **PASS** — §8, exactly three rows |
| 4 | Migration 4 remains unapplied | **PASS** — §8, absent |
| 5 | `parser_preview_guards` exists with authored columns/constraints/RLS | **PASS** — all 7 columns match exactly (types, nullability, defaults); PK on `business_id` + FK to `businesses`; `relrowsecurity=true`, 0 policies (default-deny, as authored) |
| 6 | `parser_upload_leases` exists with authored lifecycle constraints, indexes, RLS | **PASS** — all 16 columns match exactly; all constraints present verbatim (`terminal_at_pair`, `failure_reason_pair`, `state_invariants` CASE-CHECK plus PK/FK/UNIQUE/inline CHECKs); indexes `business_state_idx` and `expires_at_idx` present alongside PK/unique indexes; `relrowsecurity=true`, 0 policies |
| 7 | All nine parser helper functions exist with authored signatures | **PASS** — all nine present with exact identity-argument lists matching the migration |
| 8 | All nine functions are `SECURITY DEFINER` with `search_path=''` | **PASS** — `prosecdef=true` and `proconfig` shows `search_path=""` for all nine |
| 9 | PUBLIC, `anon`, `authenticated` have no unauthorized table access or helper execution path | **PASS** — grant queries for both tables and all nine functions returned zero rows for any of these three grantees |
| 10 | `service_role` direct table privilege on `parser_upload_leases` narrowed exactly as authored; helper EXECUTE grants match contract | **PASS** — `service_role` holds exactly one privilege (`SELECT`) on `parser_upload_leases`; `service_role` holds `EXECUTE` on all nine functions, nothing else |
| 11 | No browser role gained direct write access to parser support tables | **PASS** — same grant evidence as items 9–10; `anon`/`authenticated` have zero rows on either table |
| 12 | No function/table ownership or grant drift beyond the authored contract | **PASS** — all nine functions owned by `postgres` (the migration-running role, exactly as the migration's own design specifies — no ownership transfer, unlike the Catalog executor pattern); `service_role` retains its full baseline grant on `parser_preview_guards` (`GRANT ALL`, deliberate per the migration's own comment) and narrowed `SELECT`-only on `parser_upload_leases` |
| 13 | Locked Catalog command count remains exactly `19` | **PASS** — re-queried post-migration, unchanged |
| 14 | No Inventory authority, Catalog Product Truth authority, merchant financial authority, or application release state changed | **PASS** — the migration's own objects are confined to the two new parser tables and nine new functions; no Catalog/Inventory object was referenced by the migration or by any command run in this task; no deployment or activation occurred |
| 15 | Migration 4 restored byte-identical, zero residual `supabase/migrations/` diff | **PASS** — §7 |

## 10. Confirmation — No Unrelated Action Occurred

- No AWS, Cloudflare, or Lovable action of any kind occurred.
- No application deployment or publication occurred.
- No parser feature or bulk-import functionality was activated — this migration installs support-state schema and narrow SECURITY DEFINER helpers only; nothing in this task invoked, exercised, or exposed them to any caller.
- No Stage 21 or later lifecycle action occurred.
- No production business/application data was read beyond the exact non-secret metadata/existence queries in this report.
- No migration file content, filename, or repository-tracked state was changed — the Migration 4 relocation was local-only, never committed, never pushed, and fully reversed with verified byte-identity.
- Migration 4 was not applied.

## 11. Final Disposition

`GC-40 MIGRATION 3 SCOPED EXECUTION — PASS`

Migration 3 (`20260819120000_sb_p_1_11_gc_38r_parser_support_schema.sql`) was applied to production through the Supabase CLI's own guarded migration runner, scoped to exactly that one migration via the same temporary, fully-reversible relocation technique proven for Migration 2. The canonical version `20260819120000` is correctly recorded in migration history with no generated duplicate. All fifteen post-migration checkpoint items pass. Migration 4 remains unapplied, no parser/bulk-import functionality was activated, and no unrelated production, application, or infrastructure state changed. GC-40 remains stopped after Migration 3 pending Mission Control's separate review and explicit authorization before Migration 4 may begin.
