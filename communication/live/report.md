# SMART BUSINESS — REPOSITORY COMMUNICATION

# Report

**Mission ID:** `SB-REL-1.10-1.11`

**Mission Name:** `Gate 2A-C1 — Inventory Anonymous-Privilege Hardening Preparation & Test Validation`

**From:** `Claude Code — Repository-Capable Engineering Operator`

**To:** Mission Control

**In Reply To:** `communication/live/instruction.md`

**Status:** `TEST-ONLY CORRECTION PREPARED AND VALIDATED`

**Date:** `2026-08-30`

---

## 1. Exact Intake `main` Commit

`e8b9fad3c593ba7eaeec82c40c900c866aadeed8` — confirmed `HEAD == origin/main` at intake, exactly the Gate 2A-C1 instruction/report-shell merge commit context. Working tree carried one pre-existing, unrelated local modification (`src/routeTree.gen.ts`, already modified before this task began), left untouched throughout.

## 2. Exact Test-Project Identity Used

Verified before any test execution, per this instruction's own Stop condition:

```json
{"id":"drravyyauixltoihzmwo","ref":"drravyyauixltoihzmwo","organization_id":"himkzepyuyaejqjieugk","organization_slug":"himkzepyuyaejqjieugk","name":"smart-business-test","region":"ap-south-1","status":"ACTIVE_HEALTHY", ...}
```

Distinct organization (`himkzepyuyaejqjieugk`) and distinct database host from production (`gysgzasfcjvtrgaigfyn`, org `zcqbcjmjpkpbkruacmrp`) in the same `projects list` response — unambiguous. Production project identity was never targeted by any mutating command in this task.

## 3. New Migration Filename and Purpose

`supabase/migrations/20260830120000_sb_rel_1_10_1_11_gate2a_c1_inventory_anon_privilege_hardening.sql`

Purpose: revoke `anon`'s unnecessary table privileges on the three Inventory tables and unnecessary `EXECUTE` on the six Inventory-domain functions, and correct the `postgres`-role public-schema default-privilege baseline so future `postgres`-created tables/functions no longer automatically re-grant `anon` broad authority — closing the Gate 2A `HARDENING REQUIRED BEFORE RELEASE APPROVAL` disposition's root cause (`20260727000000_reconcile_default_grants.sql`'s blanket `GRANT ALL ... TO anon, authenticated, service_role`).

## 4. Exact SQL Security Changes (Semantic Level)

1. `REVOKE ALL ON public.inventory_items, public.inventory_movements, public.inventory_movement_idempotency_keys FROM anon;` (three separate statements).
2. `REVOKE EXECUTE ON FUNCTION ... FROM anon` for `create_inventory_movement`, `inventory_current_stock_batch`, `inventory_movement_remaining_compensable`, `preview_inventory_movement` (exact signatures in the migration file).
3. `REVOKE EXECUTE ON FUNCTION public.inventory_items_guard() FROM PUBLIC, anon;` and `REVOKE EXECUTE ON FUNCTION public.inventory_movements_reject_mutation() FROM PUBLIC, anon;` — these two additionally carried a blanket `PUBLIC` grant (confirmed directly, not assumed); revoking only `anon`'s own edge would have left `anon` executing via the `PUBLIC` path, so `PUBLIC` is revoked for exactly these two.
4. `ALTER DEFAULT PRIVILEGES FOR ROLE postgres IN SCHEMA public REVOKE ALL ON TABLES FROM anon;` and the equivalent `REVOKE EXECUTE ON FUNCTIONS FROM anon;` — corrects future-object defaults for the `postgres` role only (the sole object-creator role this repository's own migration-driven process ever uses).

No RLS policy, function body, schema, business logic, or role membership statement appears anywhere in the migration.

**Disclosed, deliberately out-of-scope residual:** an equivalent default-privilege baseline also exists for objects created by `supabase_admin` (Supabase's own platform-internal role, used for dashboard/Management-API-created objects) and still includes `anon`. Correcting it would require `postgres` to act with `supabase_admin`'s privilege, achievable in Postgres only via a role-membership change — explicitly prohibited by this instruction's authorized scope ("Do not change ... role membership"). This migration does not touch it; it is disclosed here, not silently left out.

**Also explicitly out of scope, not touched:** `businesses`, `transactions`, and `transaction_correction_events` share the exact same root-cause migration and the same underlying issue, but are not among the three tables this instruction names — untouched by design.

## 5. Pre-Change Privilege/Default-Privilege Evidence (Test Project)

**Table grants** — `anon` held full `SELECT/INSERT/UPDATE/DELETE/TRUNCATE/REFERENCES/TRIGGER` on all three tables, identical to production's Gate 1/Gate 2A findings. `authenticated` and `service_role` held the same broad set; `catalog_link_executor` held `SELECT` only on `inventory_items`/`inventory_movements` (no grant on the idempotency table).

**Function grants** — `anon` held `EXECUTE` on all six Inventory functions. `inventory_items_guard` and `inventory_movements_reject_mutation` additionally carried a `PUBLIC` `EXECUTE` grant; `authenticated`, `postgres`, and `service_role` each held their own separate, explicit `EXECUTE` grant on every one of the six (confirmed directly, not assumed — this is what makes revoking the `PUBLIC` grant safe for those two roles).

**Function signatures** — confirmed identical to production's own Gate 1 findings (all six `SECURITY DEFINER = false`, i.e. invoker-rights).

**Default privileges** (`pg_default_acl`) — for objects created by `postgres`: sequences (`S`) never included `anon`; functions (`f`) and tables (`r`) both included `anon` alongside `authenticated`/`service_role`. For objects created by `supabase_admin`: sequences, functions, and tables all included `anon` (the disclosed residual, §4).

**RLS/policy inventory** — all three tables `rls_enabled = true`, `rls_forced = false`. Nine policies total, every one scoped only to `{authenticated}` or `{catalog_link_executor}` — zero applicable to `anon`/`PUBLIC` (confirmed directly).

## 6. Test Migration Execution Result

Dry-run (`db push --dry-run --linked --project-ref drravyyauixltoihzmwo`) confirmed exactly one migration selected: `20260830120000_sb_rel_1_10_1_11_gate2a_c1_inventory_anon_privilege_hardening.sql`. The real push then reported: `"Applying migration 20260830120000_..." ... "message":"Finished supabase db push."` — applied cleanly, no error.

## 7. Post-Change Privilege/Default-Privilege Evidence (Test Project)

**Table grants** — `anon` rows are completely absent from all three tables. `authenticated`, `service_role`, and `catalog_link_executor` rows are byte-identical to §5's pre-change listing.

**Function grants** — `anon` rows are completely absent from all six functions; the `PUBLIC` rows on `inventory_items_guard`/`inventory_movements_reject_mutation` are also gone. `authenticated`, `postgres`, and `service_role` rows are byte-identical to §5's pre-change listing for every one of the six.

**Default privileges** — the `postgres`-role `f` (function) and `r` (table) entries now read `{postgres=...,authenticated=...,service_role=...}` — `anon` removed, `authenticated`/`service_role` unchanged. The `postgres`-role sequence (`S`) entry is unchanged (never had `anon`). All three `supabase_admin`-role entries are byte-identical to §5 — untouched, exactly matching the disclosed residual in §4.

**Direct runtime proof** (four independent `SET ROLE anon` probes, each a single statement, no transaction left open, nothing written):

- `SELECT count(*) FROM public.inventory_items;` → `ERROR: 42501: permission denied for table inventory_items` (HINT correctly names the now-revoked grant).
- `INSERT INTO public.inventory_items (id) VALUES (gen_random_uuid());` → `ERROR: 42501: permission denied for table inventory_items`.
- `SELECT public.preview_inventory_movement(...);` → `ERROR: 42501: permission denied for function preview_inventory_movement`.
- `SELECT public.inventory_items_guard();` (the `PUBLIC`-grant case specifically) → `ERROR: 42501: permission denied for function inventory_items_guard`.

All four are hard authorization failures at the grant layer (SQL state `42501`), not merely empty RLS-filtered results — a stronger proof than Gate 2A's own "zero visible rows" finding, since it demonstrates the underlying unnecessary authority is now actually absent, not just currently unexercised.

## 8. Regression Verification — `authenticated`, `catalog_link_executor`, `service_role`

Confirmed via the byte-identical before/after grant comparisons in §5/§7: every explicit `authenticated`, `service_role`, and `catalog_link_executor` grant on all three tables and all six functions is unchanged in both presence and privilege type. No statement in the migration references any of these three roles. The full repository automated test suite (§11) additionally exercises `authenticated`-path Inventory behavior end-to-end and passed completely, providing independent runtime confirmation beyond static grant comparison.

## 9. RLS/Policy Unchanged Confirmation

`rls_enabled`, `rls_forced`, and the exact nine-policy inventory (name, command, role scope) for all three tables are byte-identical before and after (§5/§7). The migration contains no `CREATE POLICY`, `ALTER POLICY`, `DROP POLICY`, or `ALTER TABLE ... ROW LEVEL SECURITY` statement.

## 10. Repository Files Changed

- `supabase/migrations/20260830120000_sb_rel_1_10_1_11_gate2a_c1_inventory_anon_privilege_hardening.sql` — new.
- `communication/live/report.md` — this report.

No other repository file was created or modified by this task.

## 11. Test and Markdown Quality Gate Results

- **Automated test suite:** `npm run test` (`vitest run`) — **169 tests passed, 28 test files passed, 0 failed** — run against `drravyyauixltoihzmwo` (confirmed via `.env.test`'s `SUPABASE_TEST_URL`, the same project this migration was applied to; production was never a test-suite target).
- **Markdown Quality Gate:** run against this report — `QUALITY GATE PASSED` (see commit history for the exact run).

## 12. Deviations or Unresolved Risks

1. The `supabase_admin`-role default-privilege residual (§4) remains open by design — a role-membership change would be required to close it, which this instruction explicitly prohibits. Recommended as a candidate for a future, separately authorized corrective gate if Mission Control determines it is material (in practice, this repository's own schema changes are always `postgres`-run migrations, not dashboard/Management-API-created objects, so the realistic exposure is low).
2. `businesses`, `transactions`, and `transaction_correction_events` share the identical root cause and are not addressed by this narrow, single-table-surface-scoped correction (§4) — flagged for a possible follow-on Gate 2A-C2/C3-style action, not silently left unmentioned.
3. No other deviation from the instruction occurred.

## 13. Confirmation — Production `gysgzasfcjvtrgaigfyn` Not Mutated

Every mutating command in this task (`db push --dry-run`, `db push`) targeted `--project-ref drravyyauixltoihzmwo` exclusively, executed through `node scripts/supabase-cli.mjs test ...` (the "test" target, which does not require and was never given `CONFIRM_PRODUCTION=yes`). No command in this task referenced `gysgzasfcjvtrgaigfyn`, `CONFIRM_PRODUCTION=yes`, or the `production` CLI target at any point. Production migration history, grants, default privileges, RLS, and data are unaffected — confirmed by the simple fact that no command capable of mutating it was ever issued.

## 14. Recommended Exact Production Execution Gate

A separate, explicit Mission Control production-execution authorization — recommended name: **Gate 2A-C2 — Inventory Anonymous-Privilege Hardening Production Execution** — scoped to apply exactly this same migration file, unmodified, to `gysgzasfcjvtrgaigfyn`, with its own fresh pre-change production evidence capture (mirroring §5 against production), a scoped `db push` (this migration is very likely the sole pending migration by the time that gate runs, but the dry-run-first discipline established throughout this mission's own GC-40 workstream should still be followed), and its own independent post-change verification repeating §7–§9's exact checks against production. This test-validated PASS does not itself authorize that execution.

## 15. Final Result

`PASS — CORRECTION PREPARED AND TEST-VALIDATED — PRODUCTION EXECUTION PENDING`
