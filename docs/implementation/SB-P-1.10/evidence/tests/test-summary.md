# SB-P-1.10-TESTS-1.0 / SB-P-1.10-FIX-IDEMPOTENCY-RLS-1.0 — Test Execution Summary

**Updated 24 July 2026 under SB-P-1.10-FIX-IDEMPOTENCY-RLS-1.0.** The "Result" section below now reflects the post-corrective-mission run (62/62 passing). The original SB-P-1.10-TESTS-1.0 result (57/62, 5 failures against the idempotency defect) is preserved in "Original SB-P-1.10-TESTS-1.0 result (superseded)" below it, and the "Test-authoring issues found and fixed" section is unchanged and still applicable — those were separate, unrelated fixes made while first building the suite.

## Execution command

```bash
npm run test
```

(equivalent to `vitest run`, configured in `vitest.config.ts`; `package.json` gained one new script, `"test": "vitest run"`.)

## Runtime environment

| Field | Value |
| --- | --- |
| Node.js | v24.18.0 |
| Vitest | 4.1.10 (win32-x64) |
| Test framework | Vitest (newly added — no test framework previously existed in this repository) |
| Target database | Supabase project `gysgzasfcjvtrgaigfyn` ("smart-business" in the Founder's Supabase organization), a **dedicated, isolated test-only project** — explicitly not the production Lovable-managed backend (`wwgqnshcgbukqczqblsm`). Confirmed with the Founder before use. |
| Migrations applied to the test project | Four, applied via the Supabase MCP `apply_migration` tool, in order: (1) `20260708210504_..._businesses.sql` (prerequisite `businesses` table — inventory FKs to it), (2) `20260721205714_..._c3b38f2f...sql` (the SB-P-1.10 inventory schema itself, unmodified), (3) `20260724085729_..._search_path_fix.sql` (the FIX-DIGEST corrective `ALTER FUNCTION`, without which `create_inventory_movement` fails on every call), (4) `20260724170000_..._6a0f8a74...sql` (this mission's SB-P-1.10-FIX-IDEMPOTENCY-RLS-1.0 correction — see "Corrective mission" below). Not applied: the two `transactions`-domain migrations (no FK dependency from inventory), a one-off prod data-cleanup `DELETE`, and a `GRANT/REVOKE ... sandbox_exec` pair referencing a Lovable-runtime-specific role that does not exist on this project. |
| Auth strategy | Real Supabase Auth users, created per test via the service-role admin client (`auth.admin.createUser`, pre-confirmed) and signed in for real (`auth.signInWithPassword`) — RLS is exercised exactly as production traffic exercises it (PostgREST + `auth.uid()`), not simulated via hand-crafted JWT claims |
| Credentials | `SUPABASE_TEST_URL` / `SUPABASE_TEST_ANON_KEY` in tracked `.env.test` (same sensitivity tier as the anon key already tracked in the repo's `.env`); `SUPABASE_TEST_SERVICE_ROLE_KEY` in untracked `.env.test.local` (matches the repo's existing `*.local` gitignore rule — never committed) |

## Result

**62 passed, 0 failed, 0 skipped — 62 tests across 17 files.**

Confirmed stable across 6 consecutive runs post-fix: 3 full-suite runs (62/62 each) plus 3 additional isolated runs of just `concurrency.test.ts`, `idempotency.test.ts`, and `trusted-event-link.test.ts` (10/10 each) specifically to stress-test the race-condition-sensitive paths the defect affected. Zero failures, zero flakiness, across all 6.

Raw run output: `test-run-output.txt` (captured from the final post-fix run).

### Corrective mission (SB-P-1.10-FIX-IDEMPOTENCY-RLS-1.0)

Root cause, refined beyond the original discovery record: `EXPLAIN (VERBOSE, COSTS OFF)` on the failing query showed `LockRows -> Result -> One-Time Filter: false` — PostgreSQL's planner determined, at plan time, that the `SELECT ... FOR UPDATE` could never return a row, because of how row-locking interacts with the target table's RLS policy (`business_id IN (SELECT id FROM businesses WHERE owner_id = auth.uid())`, planned as a "hashed SubPlan"). This is a genuine PostgreSQL planner limitation, not an RLS misconfiguration or an `auth.uid()` resolution problem (both confirmed correct independently).

Fix, scoped entirely to `create_inventory_movement()` (no RLS, grant, table, or signature change) — full detail in `DEFECT-idempotency-select-for-update-rls.md`, "Resolution" section:

1. The idempotency lookup is now a plain `SELECT` (no `FOR UPDATE`).
2. The existing per-item advisory lock is acquired earlier (before the idempotency lookup, not just before the stock projection), so a same-item retry is fully serialized and its lookup is guaranteed to see the committed original.
3. The final insert pair is wrapped with a targeted `unique_violation` handler (checked via `GET STACKED DIAGNOSTICS ... CONSTRAINT_NAME` against `inventory_movement_idem_scope_uniq` specifically) as a safety net for the one residual race the per-item lock doesn't cover: the same idempotency key reused across two different items.

Migration: `supabase/migrations/20260724170000_6a0f8a74-e7aa-4200-b54b-3fd57a7c9c62.sql`, applied to the same dedicated test project via the Supabase MCP `apply_migration` tool. Re-verification included replaying the *exact* original raw-SQL reproduction case (same idempotency key, same item) — it now returns the original movement's id instead of raising an error.

**Not touched:** the RLS policy on `inventory_movement_idempotency_keys` was left exactly as-is. The corrective mission's authorization was scoped to `create_inventory_movement()` only; the fix achieves correctness entirely within the function, without needing to modify the policy that exposed the planner limitation in the first place.

### Original SB-P-1.10-TESTS-1.0 result (superseded)

**57 passed, 5 failed, 0 skipped — 62 tests across 17 files** (24 July 2026, before the corrective mission). The 5 failures were five independent reproductions of the defect above. No implementation, schema, RLS, or grant change was made at that time — that mission's authorization was test-only, and its instructions required stopping and reporting a discovered defect rather than patching it. This result is preserved here for the historical record; see "Result" above for the current, superseding result.

## Coverage summary

17 test files, one per Engineering Contract §16 testing obligation (plus one for the mission brief's separately-named "shared write-path enforcement" item), covering:

- Ledger correctness, independent permission checks, RLS/cross-business isolation, correction behaviour, audit integrity, business-isolation views, negative-stock handling, performance bounds, concurrency (negative-stock race + idempotency), movement type/direction invariants, opening-stock invariant, correction-link integrity, cross-business consistency (RLS-independent, via `service_role`), archived-item protection, idempotency conflict handling, the trusted event-link contract, and shared-write-path enforcement (static repository check + a live database-level probe).

No code-coverage percentage tool (e.g. `@vitest/coverage-v8`) was added — these are black-box integration tests against a real database exercising the SQL functions, triggers, and RLS policies directly; a JS line-coverage metric would only measure the thin test-helper/RPC-wrapper code in `tests/setup/`, not the database logic actually under test, so it would not be a meaningful signal here and was not pursued.

## Test-authoring issues found and fixed during this mission (for transparency)

While building the suite, several of my own test-authoring mistakes surfaced as false failures on the first run. All were fixed before treating any result as final; none involved touching implementation code:

1. `expectSucceeded()`'s assertion helper incorrectly treated `0` as a failure (JS falsy-value bug) — broke `remainingCompensable()` assertions where 0 is the correct, successful result for a fully-compensated movement. Fixed to only check for `null`/`undefined`.
2. The valid movement-type/direction pairing test posted a "decrease" as the very first movement against a fresh (0-stock) item, tripping the unrelated negative-stock guard before ever reaching the type/direction check under test. Fixed by passing `allow_negative_stock: true` for that specific test (it isn't testing negative-stock behavior).
3. The original append-only UPDATE test assumed the `BEFORE UPDATE` trigger would fire and raise an exception for any caller. Investigation (see Contract §16 item 6 in `traceability-matrix.md`) found `inventory_movements` has no RLS UPDATE policy at all, so an ordinary owner's UPDATE silently matches zero rows under RLS's default-deny — the trigger never gets a row to act on. Rewrote the test into two: one confirming the RLS-layer silent no-op (row genuinely unchanged), one confirming the trigger itself does reject mutation when tested via `service_role` (which bypasses RLS) — this is a more accurate and more thorough test than the original assumption.
4. The shared-write-path database probe's diagnostic `.insert()` call was missing `.select()`, so supabase-js returned `null` data even on a successful insert (its documented default behavior), producing a false assertion failure unrelated to the actual probe.
5. `createTestOwner()` intermittently hit a transient Supabase Auth service error ("invalid JWT: unrecognized JWT kid") during `admin.createUser`/`signInWithPassword` on the dedicated test project — infrastructure flake unrelated to anything under test. Added a small, explicit retry (up to 4 attempts, short backoff) scoped only to that specific error message, not a general-purpose retry-until-green mechanism.
