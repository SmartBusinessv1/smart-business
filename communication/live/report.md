# SMART BUSINESS — REPOSITORY COMMUNICATION

# Report

**Mission ID:** `SB-REL-1.10-1.11`

**Mission Name:** `Gate 2A-C2 — Inventory Anonymous-Privilege Hardening Production Execution`

**From:** `Claude Code — Repository-Capable Engineering Operator`

**To:** Mission Control

**In Reply To:** `communication/live/instruction.md`

**Status:** `PRODUCTION SECURITY CORRECTION EXECUTED AND VERIFIED`

**Date:** `2026-08-30`

---

## 1. Exact Intake `main` Commit

`7607bd0d3b130fc792200836a3289014b924ae7c` — confirmed `HEAD == origin/main` at intake. Exactly one commit separates this from the instruction's own cited Gate 2A-C1 merge baseline (`6a4b92f23eac7d330a02757c3d42ea948403ba91`): `7607bd0 Authorize Gate 2A-C2 production Inventory anon hardening (#436)` — the merge of this instruction itself. No other material drift. Working tree carried one pre-existing, unrelated local modification (`src/routeTree.gen.ts`), untouched throughout.

## 2. Verified Production Project Identity

```json
{"id":"gysgzasfcjvtrgaigfyn","ref":"gysgzasfcjvtrgaigfyn","organization_id":"zcqbcjmjpkpbkruacmrp","name":"smart-business","region":"ap-south-1","status":"ACTIVE_HEALTHY", ...}
```

Distinct organization (`zcqbcjmjpkpbkruacmrp`) and database host from the test project (`drravyyauixltoihzmwo`, org `himkzepyuyaejqjieugk`) confirmed in the same listing call — unambiguous.

## 3. Authorized Migration File and Identity Verification

`supabase/migrations/20260830120000_sb_rel_1_10_1_11_gate2a_c1_inventory_anon_privilege_hardening.sql`

Git history for this exact path on canonical `main` shows exactly two commits: the original authoring commit and its PR #435 merge commit — no edit commit exists between them, confirming the file is byte-for-byte unchanged since human review. SHA-256: `99643cd33c54baead03b01397041882ffc49eb51f9e547d7b902c928f687fcbd`.

## 4. Pre-Execution Migration-History State

Fresh `migration list` against production showed all 20 pre-existing local migrations at `local == remote`, and the new migration with `remote:""`:

```
{"local":"20260830120000","remote":"","time":"2026-08-30 12:00:00"}
```

Confirming: not yet applied, and it is the sole gap in an otherwise fully current production migration history.

## 5. Backup/Recovery Evidence — Direct, Not Inferred

Direct, positive evidence via `supabase backups list --project-ref gysgzasfcjvtrgaigfyn` (read-only):

```json
{"region":"ap-south-1","walg_enabled":true,"pitr_enabled":false,"backups":[
  {"id":1519961817,"is_physical_backup":true,"status":"COMPLETED","inserted_at":"2026-08-30T01:25:27.133Z"},
  {"id":1510188316,"is_physical_backup":true,"status":"COMPLETED","inserted_at":"2026-08-29T01:24:31.648Z"},
  ... 6 more consecutive daily COMPLETED physical backups back to 2026-08-23 ...
]}
```

`walg_enabled: true`; most recent physical backup `COMPLETED` from earlier the same day as this execution (`2026-08-30T01:25:27Z`); eight consecutive daily completed backups found. This is direct platform evidence of a current, recoverable backup — not an inference from Supabase's Pro-plan tier (`pitr_enabled` is in fact `false`, which this report states plainly rather than assuming point-in-time recovery was available).

## 6. Complete Pre-Execution ACL/Function/Default-Privilege/RLS Evidence

**Table grants (3 Inventory tables):** `anon` held full `SELECT/INSERT/UPDATE/DELETE/TRUNCATE/REFERENCES/TRIGGER`; `authenticated`/`service_role` held the same broad set; `catalog_link_executor` held `SELECT`-only on `inventory_items`/`inventory_movements` — identical in shape to the Gate 2A-C1 test-project pre-change baseline.

**Function grants (6 functions):** `anon` held `EXECUTE` on all six; `inventory_items_guard` and `inventory_movements_reject_mutation` additionally carried a `PUBLIC` `EXECUTE` grant; `authenticated`/`postgres`/`service_role` each held their own separate explicit grant on every one of the six.

**`postgres`-role default privileges:** functions (`f`) and tables (`r`) both included `anon` alongside `authenticated`/`service_role`, matching the validated baseline exactly.

**`supabase_admin`-role default privileges:** included `anon` on sequences, functions, and tables — the disclosed Gate 2A-C1 residual, confirmed still present, not touched.

**One new, incidental finding — disclosed, not corrected:** the `postgres`-role default ACL for **sequences** in production reads `{postgres=rwU/postgres,anon=w/postgres,authenticated=w/postgres,service_role=w/postgres}` — i.e., `anon` (and `authenticated`/`service_role`) hold `UPDATE` on any future `postgres`-created sequence. The equivalent test-project entry (recorded in the Gate 2A-C1 report) held **only** `postgres` — no `anon`/`authenticated`/`service_role` at all. This is a genuine production/test difference not previously known. It does not affect this gate's correctness or safety: the authorized migration contains no sequence-related statement, evidence item 7 of this instruction scopes explicitly to "tables/functions" (not sequences), and nothing in the migration's behavior depends on or touches this ACL. It is not corrected here — doing so would require a new migration and new authorization, both outside this gate's exact, single-file scope. Recorded as a new follow-up item, not silently omitted and not treated as a Stop condition, since it is orthogonal to the exact action being authorized.

**RLS/policy inventory:** all three tables `rls_enabled = true`, `rls_forced = false`; nine policies total, every one scoped only to `{authenticated}` or `{catalog_link_executor}` — identical to the validated Gate 2A-C1 baseline.

## 7. Dry-Run Result — Exactly the Authorized Migration

```
Would push these migrations:
 • 20260830120000_sb_rel_1_10_1_11_gate2a_c1_inventory_anon_privilege_hardening.sql
```

No other migration was listed as pending.

## 8. Exact Production Execution Command Path and Result

```
CONFIRM_PRODUCTION=yes node scripts/supabase-cli.mjs production db push --linked --project-ref gysgzasfcjvtrgaigfyn
```

Result:

```
Applying migration 20260830120000_sb_rel_1_10_1_11_gate2a_c1_inventory_anon_privilege_hardening.sql...
{"upToDate":false,"dryRun":false,"migrations":["20260830120000_sb_rel_1_10_1_11_gate2a_c1_inventory_anon_privilege_hardening.sql"],"seeds":[],"roles":[],"message":"Finished supabase db push."}
```

Applied via the repository's controlled production Supabase CLI path (the same guarded wrapper used throughout the GC-40/Gate 1/Gate 2A-C1 workstreams), executed exactly once, through the CLI's own migration runner — not `migration repair`, not manual SQL.

## 9. Post-Execution Migration-History Result

```
{"local":"20260830120000","remote":"20260830120000","time":"2026-08-30 12:00:00"}
```

Recorded exactly once, at the correct canonical version, immediately following the four GC-40 migrations in history order. All 21 local migrations now show `local == remote` — full parity, no pending migration anywhere in the project.

## 10. Post-Execution ACL/Function/Default-Privilege Evidence

**Table grants:** `anon` rows are completely absent from all three tables.

**Function grants:** `anon` rows are completely absent from all six functions; the `PUBLIC` rows on `inventory_items_guard`/`inventory_movements_reject_mutation` are also gone.

**`postgres`-role default privileges:** the function (`f`) and table (`r`) entries now read `{postgres=...,authenticated=...,service_role=...}` — `anon` removed from both. The sequence (`S`) entry is unchanged (§6's disclosed incidental finding — not touched, as intended). `supabase_admin`-role entries are byte-identical to pre-execution — untouched.

## 11. Preservation Proof — `authenticated`, `service_role`, `catalog_link_executor`

Direct before/after comparison (§6 vs. §10) shows every `authenticated`, `service_role`, and `catalog_link_executor` grant row, on all three tables and all six functions, is byte-identical in presence and privilege type. No statement in the executed migration references any of these three roles.

## 12. RLS/Policy Unchanged Evidence

`rls_enabled`, `rls_forced`, and the exact nine-policy inventory (name, command, role scope) for all three tables are byte-identical before and after execution.

## 13. Safe `anon` Read-Only Runtime-Denial Checks

Two independent, single-statement, non-mutating runtime probes against production, executed after the migration:

- `SET ROLE anon; SELECT count(*) FROM public.inventory_items;` → `ERROR: 42501: permission denied for table inventory_items` (HINT correctly names the now-revoked grant).
- `SET ROLE anon; SELECT public.inventory_items_guard();` (the `PUBLIC`-grant case specifically) → `ERROR: 42501: permission denied for function inventory_items_guard`.

Both are hard authorization failures at the grant layer, confirmed live against production. Neither attempt read, wrote, or otherwise touched any business data row (both were rejected before any row access occurred).

## 14. Database-Health Observation

Immediately after the runtime-denial probes, a normal read as the connecting role confirmed the database is healthy and responsive:

```json
{"db":"postgres","inventory_items_count":1,"server_time":"2026-08-30 15:46:39.88076+00"}
```

Successful connection, successful legitimate read, correct/expected row count, normal server clock — no degradation observed.

## 15. Confirmation — No Unrelated Production Mutation Occurred

Every command issued against production in this task was either read-only (`projects list`, `backups list`, `migration list`, `db push --dry-run`, the six `db query` evidence/probe/health calls) or the single authorized mutation (`db push`, applying exactly one migration, exactly once). No `migration repair` was used. No manual SQL outside the authorized migration and read-only verification was executed. No table, RLS policy, function body, schema, role membership, `businesses`/`transactions`/`transaction_correction_events` permission, `supabase_admin` default privilege, AWS/S3/IAM/Roles Anywhere/Lambda/Cloudflare/DNS/WAF/parser/secret/environment-variable setting, or application deployment state was touched. No production business data was created, modified, or deleted — the two runtime probes were rejected before any data access could occur, and the health check performed a read-only `SELECT`.

## 16. Exact Residual/Follow-Up Items Still Open

1. `supabase_admin`-created-object default-privilege baseline (still includes `anon`) — disclosed Gate 2A-C1 residual, confirmed still present, explicitly out of scope here (would require a role-membership change).
2. `businesses`, `transactions`, and `transaction_correction_events` share the identical root cause and remain unaddressed — explicitly out of scope here (different tables than the three named in this gate).
3. **New this gate:** the `postgres`-role default-privilege entry for **sequences** in production grants `anon`/`authenticated`/`service_role` `UPDATE` on future sequences — a production/test difference not previously known (§6), not corrected here (out of this migration's exact scope; would require a new migration and new authorization).
4. `F23-01` (live multi-business/cross-tenant RLS runtime probe) remains open and unaffected by this gate — not executed, not authorized here.
5. Gate 2 as a whole, Founder release approval, and production release/runtime activation all remain separate, unauthorized, un-closed by this PASS.

## 17. Final Result

`PASS — PRODUCTION HARDENING APPLIED AND VERIFIED`
