# Discovered Defect — Idempotency Replay Fails Under RLS + `FOR UPDATE`

**Discovered under:** SB-P-1.10-TESTS-1.0 (test-authoring mission; no fix authorized or applied at that time).

**Corrected under:** SB-P-1.10-FIX-IDEMPOTENCY-RLS-1.0 (24 July 2026), a separate, explicitly Mission-Control-authorized corrective mission.

**Status: RESOLVED.** See "Resolution (SB-P-1.10-FIX-IDEMPOTENCY-RLS-1.0)" below. Everything from "Summary" through "Recommended next step" is preserved unedited as the original discovery record from SB-P-1.10-TESTS-1.0.

## Resolution (SB-P-1.10-FIX-IDEMPOTENCY-RLS-1.0)

### Refined root cause

The original discovery record below correctly isolated `FOR UPDATE` as the sole variable (confirmed again, more precisely, under the corrective mission: the identical 3-condition `WHERE` clause finds the row without `FOR UPDATE` and finds nothing with it — see the re-verification transcript in `test-summary.md`). The corrective mission went one step further and captured `EXPLAIN (VERBOSE, COSTS OFF)` for both forms:

- **Without `FOR UPDATE`:** a normal `Index Scan` plus a `hashed SubPlan` evaluating the RLS policy's `business_id IN (SELECT id FROM businesses WHERE owner_id = auth.uid())` condition — correct and expected.
- **With `FOR UPDATE`:** `LockRows -> Result -> One-Time Filter: false` — the planner determined, **at plan time**, that the query could never return any row, without even scanning the table.

This is a PostgreSQL planner limitation in how row-locking (`FOR UPDATE`/`FOR SHARE`) combines with an RLS policy whose `USING` clause contains a subquery against a different table (the `IN (SELECT ...)` pattern here, planned as a "hashed SubPlan"). The interaction between `LockRows`'s `EvalPlanQual` re-check machinery and a hashed SubPlan appears to cause the planner to conservatively — and incorrectly — fold the whole qual to a constant `false`, independent of whether a matching row actually exists. This is a genuine planner-level defect class, not a security feature; it does not have anything to do with `auth.uid()` resolving incorrectly (confirmed correct in both forms).

### Fix

Scoped entirely to `public.create_inventory_movement()` — no RLS policy, grant, table, or function signature was touched, per the corrective mission's explicit authorization:

1. The idempotency-key lookup is now a **plain `SELECT`** (no `FOR UPDATE`) — confirmed correct against this table's RLS policy.
2. The existing per-item `pg_advisory_xact_lock` (already the EIS §12 designated lock target) is now acquired **before** the idempotency lookup instead of after. A same-item retry that races the original request now blocks on the lock until the original commits, so its (now-unlocked) lookup is guaranteed to see the committed row — this closes the concurrency gap `FOR UPDATE` was originally meant to cover, without relying on row locking against the problematic policy shape.
3. The final `INSERT` pair (movement + idempotency key) is wrapped in an inner exception block that catches a `unique_violation` specifically on `inventory_movement_idem_scope_uniq` (checked via `GET STACKED DIAGNOSTICS ... CONSTRAINT_NAME`, so any other constraint violation still raises unchanged) and, on that specific conflict, re-fetches and gracefully returns the winning row — the same behavior the primary lookup provides, as a safety net for the one residual race the per-item lock doesn't cover: the same idempotency key reused across two *different* items in the same business+operation, which is unusual but not impossible.

Full corrected function body: `supabase/migrations/20260724170000_6a0f8a74-e7aa-4200-b54b-3fd57a7c9c62.sql`. The migration also re-applies the SB-P-1.10-FIX-DIGEST-1.0 `search_path = public, extensions` correction, since `CREATE OR REPLACE FUNCTION` with a new body does not carry forward a prior standalone `ALTER FUNCTION ... SET search_path`.

### Re-verification

- The exact raw-SQL reproduction from the original discovery (same idempotency key, same item, replayed after the fix) now returns the **original movement's id**, not an error. See `test-summary.md`.
- Full automated suite: **62/62 passing**, run 3 times consecutively, plus 3 additional isolated runs of just the concurrency/idempotency/trusted-event-link files (10/10 each run) to specifically stress-test the race-condition-sensitive paths. Zero failures, zero flakiness, across all 6 runs. Raw output: `test-run-output.txt`.
- `traceability-matrix.md` updated: all four previously-failing Contract §16 line items (7, 8, the idempotency half of 11, the idempotent-retry half of 17) now record **Pass**.

## Summary

`create_inventory_movement()`'s idempotency-replay check —

```sql
SELECT * INTO v_existing_key
  FROM public.inventory_movement_idempotency_keys
 WHERE business_id = v_business AND operation = p_operation AND idempotency_key = p_idempotency_key
 FOR UPDATE;
IF FOUND THEN
  ...
  RETURN v_existing_movement;
END IF;
```

never finds the existing row when run as an ordinary `authenticated` caller, even when the row demonstrably exists, belongs to the caller, and an equivalent `SELECT` **without** `FOR UPDATE` finds it correctly. As a result, **every retried request with a matching idempotency key and identical payload is treated as brand new**, contradicting Engineering Contract §13 ("The durable idempotency contract ... guarantees that retries ... never produce duplicate movements") and §16 item 15 ("a repeated idempotency key with an identical payload returns the original result").

The retried call does not silently duplicate data (a downstream guard usually catches it), but it never returns the original result either — it fails:

- For `opening_stock` retries: rejected with `"Opening stock has already been recorded for this item"` (the opening-stock-uniqueness check, which runs *after* the idempotency check in the function body, is what actually stops it).
- For every other movement type: the retry proceeds all the way to its own `INSERT INTO inventory_movement_idempotency_keys`, which fails with a raw, unhandled `duplicate key value violates unique constraint "inventory_movement_idem_scope_uniq"` — a Postgres constraint error surfacing directly to the caller instead of the graceful "same result" response the contract specifies.

## Root cause (isolated by direct SQL, bypassing the JS layer entirely)

Reproduced against the dedicated test project (`gysgzasfcjvtrgaigfyn`) via raw SQL, simulating the `authenticated` role with `SET LOCAL request.jwt.claims`:

```sql
-- Row demonstrably exists and belongs to this exact caller:
SELECT business_id, operation, idempotency_key,
       business_id IN (SELECT id FROM public.businesses WHERE owner_id = auth.uid()) AS rls_would_allow
FROM public.inventory_movement_idempotency_keys
WHERE idempotency_key = '11111111-1111-1111-1111-111111111111';
-- -> 1 row, rls_would_allow = true

-- The exact same filter, WITHOUT "FOR UPDATE": finds the row.
SELECT * FROM public.inventory_movement_idempotency_keys
 WHERE business_id = '...' AND operation = 'diag_op' AND idempotency_key = '...';
-- -> 1 row

-- The exact same filter, WITH "FOR UPDATE" (what the function actually runs): finds nothing.
SELECT * FROM public.inventory_movement_idempotency_keys
 WHERE business_id = '...' AND operation = 'diag_op' AND idempotency_key = '...'
 FOR UPDATE;
-- -> 0 rows
```

The only variable between the last two queries is `FOR UPDATE`. This isolates the defect to how row-level locking interacts with this table's RLS `SELECT` policy:

```sql
CREATE POLICY "Owners can view their idempotency keys"
  ON public.inventory_movement_idempotency_keys FOR SELECT
  TO authenticated
  USING (business_id IN (SELECT id FROM public.businesses WHERE owner_id = auth.uid()));
```

`auth.uid()` resolves correctly in both cases (verified directly), and the plain `SELECT` correctly evaluates the policy's `IN (subquery)` condition as `true` for this row. Something about combining `FOR UPDATE` with this subquery-based `USING` clause causes the row to be excluded instead of locked-and-returned. This was not root-caused further at the Postgres-internals level, since diagnosing (and any fix) is implementation work outside this mission's test-only authorization.

## Reproduction (automated, in this test suite)

- `tests/inventory/idempotency.test.ts` — "same key + identical payload returns the original movement, not a duplicate"
- `tests/inventory/idempotency.test.ts` — "same key + different payload is rejected as a conflict, not treated as a retry" (never reaches the fingerprint-mismatch branch because the row is never found)
- `tests/inventory/concurrency.test.ts` — "concurrent requests with the SAME idempotency key produce exactly one movement"
- `tests/inventory/concurrency.test.ts` — "a sequential retry with the same key and payload after the original committed returns the original movement" (purely sequential — not a race condition; fails every time)
- `tests/inventory/trusted-event-link.test.ts` — "retried event delivery with the same idempotency key does not create a duplicate movement"

All five are left asserting the **contracted** behavior (graceful dedup) and correctly **fail** against current behavior — they were not weakened to pass. See `test-run-output.txt` for the raw run and `traceability-matrix.md` for how these map to Contract §16.

## Relationship to prior evidence (D-20)

The existing completion-report evidence (`evidence/database/D-20_runtime_movements_after_fix.txt`) states idempotent replay was verified "via a self-rolled-back PL/pgSQL block executed against the live Lovable-managed backend **as the Milk business Owner**" and passed. That verification almost certainly ran in a context where `auth.uid()`/RLS was already resolved consistently with a real end-to-end signed-in HTTP session, or under different circumstances than this reproduction's direct `SET LOCAL request.jwt.claims` simulation — the two are not identical setups, and the discrepancy is itself worth Mission Control's attention rather than assumed away in either direction. This defect record does not contradict D-20 having been genuinely executed; it reports what this mission's automated, repeatable test suite finds today, reproducibly, via two independent methods (the JS/PostgREST integration tests and raw SQL against the same project).

## What this mission did NOT do

- Did not modify the RLS policy, the function, or any migration.
- Did not weaken the failing tests to make them pass.
- Did not mark Engineering Contract §16 item 15 (idempotency conflict handling) or item 9 (concurrency/idempotency) as satisfied — both are recorded as **Fail** in `traceability-matrix.md`, with this defect cited as the reason.

## Recommended next step

A separate, explicitly authorized corrective mission (in the pattern of `SB-P-1.10-FIX-DIGEST-1.0`) should investigate the `FOR UPDATE` + RLS interaction on `inventory_movement_idempotency_keys` (and confirm whether the same pattern affects any other `FOR UPDATE` read in this schema) and apply a minimal, targeted fix — for example, restructuring the lookup to not rely on `FOR UPDATE` interacting with a subquery-based policy, or moving the row lock to a differently-shaped query. This mission does not recommend a specific fix, since diagnosing and authoring one is implementation work outside SB-P-1.10-TESTS-1.0's scope.
