Document: Canonical Target Protection Checklist

Version: 1.0

Status: DRAFT — submitted for Mission Control review

Created By: Claude Code

Reviewed By: Mission Control (pending)

Mission: SB-MIG-1.2A

# SB-MIG-1.2A — Canonical Target Protection Checklist (Task 7)

Confirms the Approved Mission Control Decision on Canonical Backend: **Team LIPS Supabase is authoritative for schema, migrations, functions, triggers, policies, indexes, constraints, and the corrected inventory idempotency implementation. The Lovable-managed backend is authoritative only for approved production data.** This checklist exists to make sure a future data-import step cannot accidentally overwrite the target's already-correct structure with the source's older or drifted structure.

## 1. Current Verified State (baseline, as of this mission)

Every item below was independently re-confirmed live against Team LIPS Supabase during this mission, not assumed from SB-MIG-1.2's prior results:

| Check | Status |
| --- | --- |
| `create_inventory_movement()` carries the SB-P-1.10-FIX-IDEMPOTENCY-RLS-1.0 fix | **Confirmed active** — this is the function the target already runs; the Lovable-managed backend's older, pre-fix version must never overwrite it |
| Schema (6 tables, 8 functions, 7 triggers, 16 policies, 22 indexes) matches the repository's approved migration history | **Confirmed, zero drift** (SB-MIG-1.2, `02-target-environment-verification-report.md`) |
| RLS enabled on all 6 tables | **Confirmed** |
| Test data cleared | **Confirmed** (SB-MIG-1.2, `03-test-data-cleanup-report.md`) — target is currently structure-complete and data-empty |

## 2. Checklist — Execute Immediately BEFORE Production Data Import

- [ ] Re-run the full object-level comparison from SB-MIG-1.2's `02-target-environment-verification-report.md` (table/function/trigger/index/constraint/policy counts and names) against Team LIPS Supabase, and confirm the result is byte-for-byte identical to this mission's baseline (§1) — catches any drift introduced between mission end and actual cutover start.
- [ ] Explicitly diff `create_inventory_movement()`'s function body (via `pg_get_functiondef`) against the known-correct, fixed version to confirm no regression occurred.
- [ ] Confirm the import script/process to be used contains **only** `INSERT` statements against existing tables/columns — **zero** `CREATE TABLE`, `CREATE FUNCTION`, `CREATE POLICY`, `CREATE TRIGGER`, `CREATE INDEX`, `ALTER TABLE`, `DROP`, or any other DDL statement anywhere in it. A data-import script that contains DDL is, by definition, out of scope for "data-only" import and must be rejected/corrected before use.
- [ ] Confirm the import script does not touch `supabase_migrations.schema_migrations` — the target's own migration history (already verified complete and correct) must not be altered by a data-only operation.
- [ ] Confirm RLS remains enabled on all 6 tables immediately before import begins (a one-line re-check, cheap enough to run redundantly).
- [ ] Confirm the import process runs with credentials that have `INSERT` privilege only for the intended tables — reusing the migration-tooling service-role access from `05-service-role-hosting-design.md` is acceptable (data import legitimately needs to bypass RLS to write rows on behalf of not-yet-authenticated recreated users), but the operator running it should be the same authorized party as the one running the authentication-recreation script, not a broader audience.

## 3. Checklist — Execute Immediately AFTER Production Data Import

- [ ] Re-run the full object-level comparison one more time (same as pre-import) and confirm it is **still** identical — proves the import genuinely was data-only and introduced no structural side effect.
- [ ] Re-confirm `create_inventory_movement()`'s function body is unchanged from the known-correct, fixed version.
- [ ] Re-confirm RLS is still enabled on all 6 tables.
- [ ] Run the row-count validation queries from `08-production-data-mapping-plan.md` against every imported table and confirm they match the source counts from `01-production-user-inventory.md` exactly (5 transactions, 4 correction events, 1 inventory item, 2 businesses, 0 inventory movements, 0 idempotency keys).
- [ ] Confirm no extra, unexplained row exists in any table beyond what was intentionally imported (a `count(*)` check is sufficient given the small, fully-enumerated source dataset — any deviation from the expected exact number is itself the anomaly signal).
- [ ] Confirm the two recreated `auth.users` rows (per `02-authentication-recreation-plan.md`) exist, and that `businesses.owner_id` for both migrated businesses correctly points to the new (not the old, production-only) user IDs.

## 4. Explicit Exclusion From This Mission and From SB-MIG-1.3 (Unless Separately Authorized)

Per this mission's own boundaries and the Approved Mission Control Decision, the following remain **excluded from any data-import or cutover activity** unless Mission Control issues a separate, explicit authorization:

- Any change to the target's schema, functions, triggers, policies, indexes, or constraints.
- Importing or replaying any structural element from the Lovable-managed backend into Team LIPS Supabase — including, specifically, **the pre-fix version of `create_inventory_movement()`**, which must never be reintroduced.
- Any RLS policy weakening, addition, or removal.
- Any migration file execution beyond what SB-MIG-1.2 already applied and verified.

## 5. Rationale

This checklist exists because a naive "export everything from source, import into target" script — if built carelessly — could easily include `CREATE TABLE IF NOT EXISTS` guards or ORM-style schema-sync behavior that silently reintroduces the Lovable-managed backend's older, defective function or its incomplete-relative-to-target state. The Approved Mission Control Decision is unambiguous that this must not happen; this checklist is the concrete, executable mechanism for enforcing it at the two moments (immediately before and immediately after import) where it matters most.
