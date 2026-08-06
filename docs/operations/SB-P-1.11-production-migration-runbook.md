# SB-P-1.11 Production Migration Runbook

**Mission:** SB-P-1.11-PROD-PREP-1 — Production Migration Runbook and Preflight
**Status:** `PREPARED — NOT EXECUTABLE — REQUIRES A NEW, SEPARATE, EXPLICIT MISSION CONTROL PRODUCTION-EXECUTION INSTRUCTION`
**Prepared by:** Claude Code, under `communication/live/instruction1.44.md`
**Evidence basis:** `communication/live/report1.47.md`

---

## 0. Governing Rule

Per `docs/migration/README.md`'s Default-Deny Execution Rule, **no artifact in this repository is self-executing**. This runbook's presence, its content, its acceptance, or a completed review does not create execution authority. Production migration execution requires a new, current, explicit Founder- or Mission Control-authorized mission that names the exact operator, window, and evidence requirements below. Until that mission exists, treat every command in this document as **prepared text only**.

This runbook covers applying the two already-accepted SB-P-1.11-IMPL-1 migrations to production for the first time:

- `supabase/migrations/20260806120000_sb_p_1_11_impl_1_stage1_schema.sql`
- `supabase/migrations/20260806130000_sb_p_1_11_impl_1_stage2_functions.sql`

---

## 1. Operator and Observer Roles

| Role | Responsibility | Name (fill in at execution mission authorization) |
|---|---|---|
| **Operator** | Runs every command in this runbook, in order, from a machine with the guarded CLI wrapper and no other person's uncommitted changes in the working tree | _to be named by the execution mission_ |
| **Observer** | Independently re-derives the production project identity (Section 3) before the Operator runs anything mutating, watches Supabase Dashboard logs/metrics live during execution, and has sole authority to invoke the abort procedure (`docs/operations/SB-P-1.11-production-rollback-and-recovery.md`) | _to be named by the execution mission_ |

The Operator must not also be the sole Observer. Both must independently confirm Section 3 before Section 6 begins. Neither may be an AI agent acting alone — this runbook explicitly requires human execution and human sign-off (Section 15).

---

## 2. Maintenance Window Recommendation

Production (`gysgzasfcjvtrgaigfyn`) currently holds **zero rows** in all six pre-existing tables (`businesses`, `transactions`, `transaction_correction_events`, `inventory_items`, `inventory_movements`, `inventory_movement_idempotency_keys`) — confirmed in `report1.47.md`. There is no live merchant traffic to protect today.

However, the two migrations contain `GRANT` and `CREATE POLICY` statements against `businesses`, `inventory_items`, and `inventory_movements` that empirically take `AccessExclusiveLock` (confirmed by direct probe against the test project — see `report1.47.md` Section 8) — the most restrictive PostgreSQL lock mode, blocking all concurrent reads and writes on the affected table for as long as the enclosing migration transaction remains open.

**Recommendation:**
- If executed before any merchant is onboarded (current state): no maintenance window is strictly required, but execute during low-activity hours as a precaution and to simplify Observer monitoring.
- If executed after any merchant/business row exists: schedule a maintenance window and warn active users, sized to the full observed migration duration (Section 5, ~30–90 seconds budgeted) plus verification time (Section 8–10, budget 15–20 minutes total).

---

## 3. Production Identity Confirmation (mandatory, before any other step)

Both Operator and Observer must independently run this and confirm the output **before proceeding**:

```powershell
node scripts/supabase-cli.mjs test projects list
```

(The wrapper's `test` target still lists both projects in one call — read-only, does not target production.) Confirm the row with `"ref":"gysgzasfcjvtrgaigfyn"` shows **all** of:

| Field | Required value |
|---|---|
| `name` | `smart-business` |
| `organization_id` | `zcqbcjmjpkpbkruacmrp` |
| `region` | `ap-south-1` |
| `status` | `ACTIVE_HEALTHY` |

And confirm the **separate** row `"ref":"drravyyauixltoihzmwo"` is present and distinct (this is the test project — production must never be confused with it).

**Stop condition:** if either field differs, or the production row is missing, or only one project is returned, STOP. Do not proceed to Section 4. Escalate to Mission Control per Section 5 of `instruction1.44.md`.

---

## 4. Backup and Restore-Point Confirmation

`report1.47.md` records that the production organization (`zcqbcjmjpkpbkruacmrp`, "Team LIPS") is on the Supabase **Pro** plan, which includes daily backups with 7-day retention by default. **Point-in-Time Recovery (PITR) is a separate paid add-on, not included by default even on Pro, and no tool available to this preparation mission can confirm whether it is enabled for this specific project.**

Before Section 6 may begin, the Operator or Observer must manually confirm, via the Supabase Dashboard (`Project Settings → Add-ons → Point in Time Recovery` and `Database → Backups`):

1. the most recent successful automatic backup timestamp;
2. whether PITR is enabled, and if so, its retention window;
3. that a manual on-demand backup/snapshot can be triggered immediately before execution (recommended regardless of PITR status, given the database is only 12 MB and a manual backup will complete in seconds).

**Stop condition:** if backup/PITR status cannot be confirmed, STOP. This is an explicit required stop condition (`instruction1.44.md` §5).

Record the confirmed backup timestamp and PITR status in the execution mission's evidence before Section 6.

---

## 5. Preflight Commands and Expected Output

Run every command below via the **read-only** `mcp__supabase__*` tools (production-scoped) or via `node scripts/supabase-cli.mjs test db query --linked` pointed at the **test** project for comparison — never via a mutating call against production. Full baseline evidence is in `report1.47.md`; the Operator/Observer must re-run at least the identity and migration-inventory checks fresh, immediately before Section 6, since time may have passed since this runbook was prepared.

| Check | Expected result |
|---|---|
| Migration inventory (`list_migrations`) | Exactly 12 rows, versions `20260708210504` through `20260727000000`; neither `20260806120000` nor `20260806130000` present yet |
| Table list (`list_tables`, schema `public`) | Exactly 6 tables (`businesses`, `transactions`, `transaction_correction_events`, `inventory_items`, `inventory_movements`, `inventory_movement_idempotency_keys`); no `catalog_*` or `business_tax_settings` table |
| Role collisions | `SELECT count(*) FROM pg_roles WHERE rolname LIKE 'catalog_%'` → `0` |
| Function collisions | `SELECT count(*) FROM pg_proc p JOIN pg_namespace n ON n.oid=p.pronamespace WHERE n.nspname='public' AND p.proname IN (<19 command names>)` → `0` |
| Type collisions | `SELECT count(*) FROM pg_type WHERE typname IN ('catalog_command_result','catalog_command_outcome','catalog_product_summary','catalog_link_preview_result','catalog_lifecycle_status','catalog_link_action','catalog_tax_treatment','catalog_pricing_mode')` → `0` |
| `catalog_internal` schema | `SELECT count(*) FROM pg_namespace WHERE nspname='catalog_internal'` → `0` |
| `pgcrypto` extension | Installed, schema `extensions`, version `1.3` (`extensions.digest` must resolve) |
| Security advisor baseline | Zero findings expected (matches `report1.47.md`); if non-zero and unexplained, STOP |
| RLS state on `businesses`/`inventory_items`/`inventory_movements` | `rls_enabled = true` on all three; policy list matches `report1.47.md` Section 6 exactly (4/3/2 policies respectively, all `TO authenticated`) |
| Long-running transactions / ungranted locks | `SELECT count(*) FROM pg_stat_activity WHERE state='active' AND now()-query_start > interval '30 seconds'` → `0`; `SELECT count(*) FROM pg_locks WHERE NOT granted` → `0` |

**Stop condition (`instruction1.44.md` §5):** any unexpected row, any deviation from the expected counts above, any catalog object already present, any executor role already present, any missing extension, any RLS/policy drift on the three pre-existing tables, or any advisor finding not already accounted for in `report1.47.md`.

---

## 6. Exact Migration Command Sequence

Run from the repository root, on the exact commit that carries the accepted, merged SB-P-1.11-IMPL-1 migrations (`e0b0c57e972111bec746ed83ac9461b6ba98a3e3` or a later commit that does not modify either migration file — verify via `git log -- supabase/migrations/20260806120000_sb_p_1_11_impl_1_stage1_schema.sql supabase/migrations/20260806130000_sb_p_1_11_impl_1_stage2_functions.sql` before proceeding).

**Step 6.1 — Confirm clean working tree and correct commit:**

```powershell
git status --short
git log --oneline -1
```

Working tree must be clean. Commit must match the one named in the execution mission's authorization.

**Step 6.2 — Dry run (does not mutate; confirms exactly which migrations would apply):**

```powershell
node scripts/supabase-cli.mjs production db push --dry-run
```

Expected output: `Would push these migrations:` listing exactly `20260806120000_sb_p_1_11_impl_1_stage1_schema.sql` and `20260806130000_sb_p_1_11_impl_1_stage2_functions.sql`, and nothing else. **This command will refuse to run without `CONFIRM_PRODUCTION=yes`** — this is intentional (see `scripts/supabase-cli.mjs`); set it only immediately before this step, and only in the Operator's own shell session, never committed or logged.

```powershell
$env:CONFIRM_PRODUCTION = "yes"
node scripts/supabase-cli.mjs production db push --dry-run
```

**Stop condition:** if the dry-run lists any migration other than exactly these two, or lists zero, STOP.

**Step 6.3 — Apply (the only mutating step in this entire runbook):**

```powershell
node scripts/supabase-cli.mjs production db push --yes
```

(`CONFIRM_PRODUCTION` must still be set from Step 6.2, in the same shell session.) The CLI will apply `20260806120000_...` then `20260806130000_...`, each as a single transaction. Observed test-project timing was **29.04 seconds wall-clock for both migrations together** via this exact CLI path; observed connection-establishment latency to Supabase's infrastructure varied from under 1 second to over 30 seconds across this preparation mission's testing, so budget up to **90 seconds** total before treating the command as hung. Do not interrupt a running command — if it appears hung past 90 seconds, wait for it to return before taking any action; interrupting mid-transaction risks leaving the connection in an ambiguous state (the transaction itself will still cleanly roll back server-side, but the CLI's own status report may be lost).

**Step 6.4 — Immediately unset the production confirmation flag:**

```powershell
Remove-Item Env:\CONFIRM_PRODUCTION
```

**Expected outcome:** the command exits 0 and prints `Finished supabase db push.` with both migration filenames listed under `"migrations"`. Any error output means STOP — proceed directly to `docs/operations/SB-P-1.11-production-rollback-and-recovery.md` and do not attempt a second `db push` without following that document's failure-classification procedure first.

---

## 7. Stop Conditions Before and During Execution

Restated from `instruction1.44.md` §5 for on-the-spot reference during Section 6:

- production identity does not match Section 3, exactly;
- migration history differs from the Section 5 baseline;
- any catalog object already exists unexpectedly;
- any executor role already exists with incompatible attributes or membership;
- any required extension or pre-existing table is missing;
- schema drift affects `businesses`, `inventory_items`, or `inventory_movements`;
- the dry-run in Step 6.2 lists more than the exact two expected migrations, or a twelfth table, twentieth function, or eighth role would result;
- the Section 5 advisor baseline shows an unexplained new high-severity security issue;
- backup/PITR readiness (Section 4) was not confirmed;
- any command's output cannot be independently verified to have targeted `gysgzasfcjvtrgaigfyn`;
- the Observer cannot independently verify the production project reference;
- any runtime output differs materially from what this runbook documents as expected.

On any stop condition **during** Step 6.3 (after the apply command has been issued): do not run any further commands. Capture the exact error text, the exact statement/step it occurred at if shown, and proceed immediately to the failure-classification procedure in `docs/operations/SB-P-1.11-production-rollback-and-recovery.md`.

---

## 8. Post-Migration Structural Verification

Immediately after Step 6.3 returns success, run the checks in `docs/operations/SB-P-1.11-production-verification-checklist.md` Section 1 in full before declaring the migration accepted. Summary of what must hold:

- exactly 11 new Phase 1 catalog tables, all owned by `postgres`;
- exactly 7 `NOLOGIN`, non-`BYPASSRLS` executor roles, none a member of `service_role`;
- exactly 19 public catalog command functions, each owned by its designated executor per `report1.37.md` §8;
- RLS enabled on all 11 new tables;
- the exact grant/policy set on `businesses`, `inventory_items`, `inventory_movements` (Section 5 baseline plus the new catalog-executor grants, nothing else changed);
- `catalog_internal` schema not present in the Data API exposed-schema list (Dashboard: `Settings → API → Exposed schemas`).

---

## 9. Post-Migration Security Verification

Run `docs/operations/SB-P-1.11-production-verification-checklist.md` Section 2 in full. Summary:

- `PUBLIC` and `anon` cannot `EXECUTE` any of the 19 RPCs;
- `authenticated` can `EXECUTE` exactly the 19 RPCs, no more, no fewer;
- direct `authenticated` table access remains limited to the 4 approved `catalog_categories` columns;
- `catalog_pricing_executor` holds `UPDATE` on `catalog_products.current_selling_price` only (column-restricted, not whole-table) with a matching RLS `UPDATE` policy — this is the narrow correction from the verification addendum (`report1.44.md`), and its presence must be explicitly reconfirmed post-migration, not assumed;
- no executor role belongs to `service_role`;
- no direct grant of any kind exists on `catalog_reference_cost_events` to `authenticated` or `anon`.

---

## 10. Post-Migration Behavioral Smoke Tests

Production must **never** receive a real write smoke test (`instruction1.44.md` §8 explicitly prohibits this). Behavioral correctness of the command set is already established by two independent non-production verification cycles (`report1.41.md`, `report1.44.md`) against a byte-identical schema on the test project, re-confirmed a third time during this preparation mission (`report1.47.md`).

The only production-safe "behavioral" checks after migration are **read-only, structural** proxies for behavior:

1. Confirm each of the 19 functions' `prosecdef = true` (SECURITY DEFINER) and `proconfig` includes `search_path=` (empty) — proves the function will execute with the intended isolation, without calling it.
2. Confirm `pg_get_functiondef` for each of the 19 functions textually matches the corresponding function body in the migration source (byte-for-byte, modulo whitespace) — proves no drift between what was authored and what was applied.
3. Do **not** call any of the 19 RPCs against production during this verification, with any payload, real or synthetic — there is no safe test tenant in production and no authorization to create one under this mission.

If a true end-to-end production behavioral check is ever required, it must be authorized as a **separate** mission with an explicit, isolated test-business fixture and an explicit data-cleanup plan — out of scope here.

---

## 11. Advisor Comparison

Immediately after Section 8–10 pass, re-run both advisor types against production and compare to the `report1.47.md` pre-migration baseline (19 pre-existing performance findings, 0 security findings):

- **Expected new findings:** up to 19 `authenticated_security_definer_function_executable` (one per new RPC) — this is the accepted, by-design architecture (see `report1.41.md` §16), not a defect;
- **Expected new findings:** up to 1 `auth_rls_initplan` performance note on the new `catalog_categories` direct-`authenticated` policy — matches the same pre-existing, unfixed pattern already present on the six pre-existing tables;
- **Any other new finding, especially any new SECURITY-category finding beyond the expected list above, is a stop condition.** Do not proceed to Section 12 acceptance; escalate to Mission Control.

---

## 12. Rollback / Forward-Fix Decision Tree

See `docs/operations/SB-P-1.11-production-rollback-and-recovery.md` in full. Do not improvise a rollback outside that document's decision tree.

---

## 13. Merchant-Impact and Communication Decision Points

Given production currently has zero merchant rows, no merchant communication is required for an execution performed before any business signs up. If any `businesses` row exists at execution time:

1. Before Section 6: notify affected merchants of the maintenance window per Section 2.
2. If Section 6 completes successfully within the budgeted window: no further communication required (the migration adds new, additive capability; it does not change any existing catalog behavior, since none existed before).
3. If Section 6 fails and rollback/forward-fix under `docs/operations/SB-P-1.11-production-rollback-and-recovery.md` extends materially beyond the budgeted window: escalate to Founder/Mission Control for a merchant-communication decision — this preparation mission does not pre-authorize merchant-facing messaging.

---

## 14. Evidence Capture Requirements

For every execution attempt (successful or not), the Operator must capture and attach to the execution mission's closure record:

- full terminal transcript of Sections 3–11 (identity confirmation through advisor comparison), unredacted except for any credential value;
- exact timestamps (UTC) for Step 6.2 dry-run start, Step 6.3 apply start, Step 6.3 apply finish;
- the confirmed backup timestamp and PITR status from Section 4;
- the full advisor comparison output from Section 11;
- the Observer's independent identity-confirmation output from Section 3;
- for any stop condition triggered: the exact condition, exact command output, and the disposition (aborted-before-first-migration / mid-migration failure / accepted with noted deviation).

---

## 15. Final Human Sign-Off Gates

Three separate, named sign-offs are required, each recorded with name, timestamp, and explicit statement (not a checkbox alone):

1. **Pre-execution sign-off** (before Step 6.3): Operator and Observer both confirm Sections 3–5 passed with no deviation.
2. **Post-execution structural/security sign-off** (after Section 9): Operator and Observer both confirm Sections 8–9 passed with no deviation.
3. **Final acceptance sign-off** (after Section 11): a Founder- or Mission-Control-designated approver confirms the advisor comparison in Section 11 shows only the expected findings and formally accepts the migration as production-complete.

No AI agent may provide any of these three sign-offs. This runbook does not authorize its own execution — see Section 0.
