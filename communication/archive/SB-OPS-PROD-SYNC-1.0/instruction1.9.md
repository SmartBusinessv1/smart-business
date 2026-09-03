# SMART BUSINESS — REPOSITORY COMMUNICATION

# instruction1.9 — Test Environment Migration-History Reconciliation

**Mission ID:** `SB-OPS-PROD-SYNC-1.0`

**Mission Name:** `Production Runtime Synchronization & Lovable Recovery`

**Sequence:** `1.9`

**From:** `Mission Control`

**To:** `Claude Code / Repository Engineering Operator`

**Status:** `ACTIVE`

---

## 1. Objective

Restore a clean, repeatable migration workflow for the isolated Supabase test project after the completed production-specific instruction1.7 repair migration.

The problem to resolve is narrow:

- `20260902140000_sb_ops_prod_sync_1_0_instr1_7_mango_milma_milk_repair.sql` is an intentionally production-specific historical repair with hard preconditions tied to the known production data state;
- production has already executed and recorded it successfully;
- the isolated test project must not execute that production repair against unrelated fixture data;
- future ordinary test migration runs must not need engineers to temporarily remove or hide the migration file.

This is a **test-environment migration-history reconciliation mission only**.

---

## 2. Authorized Environment

Authorized target:

- Supabase test project `smart-business-test`
- project ref `drravyyauixltoihzmwo`

Production project `gysgzasfcjvtrgaigfyn` is **read-only for comparison if genuinely necessary and otherwise must not be touched**.

No production migration execution, repair, schema mutation, data mutation, Auth mutation, RLS mutation, grant mutation, Lovable publication, or domain work is authorized.

---

## 3. Required Precheck

Before making any change, inspect and report:

1. current test migration history;
2. whether `20260902140000` is absent from the test remote migration ledger;
3. whether later migration `20260902150000` is already recorded/applied in test;
4. whether the instruction1.7 production repair effects are absent from test fixture data, as expected;
5. whether test schema currently includes the Phase B uniqueness constraint from instruction1.8.

If the observed state materially differs from this expected shape, **STOP** and report the exact divergence. Do not improvise a repair.

---

## 4. Approved Reconciliation Principle

The production-specific instruction1.7 migration must remain unchanged in repository history.

Do **not**:

- edit the already-applied instruction1.7 migration;
- weaken its production precondition checks;
- add environment-detection logic to the historical migration;
- delete or rename it;
- execute its data repair against test fixture data;
- temporarily move migration files out of `supabase/migrations/**` as the permanent workflow.

Instead, reconcile the **test project's migration ledger** so the production-only historical migration is explicitly treated as intentionally skipped/already accounted for in that environment without executing its data statements.

Use the repository-approved Supabase wrapper and the least invasive supported migration-history repair mechanism. Inspect existing repository migration policy and CLI wrapper before acting; do not use a bare Supabase CLI command if the repository wrapper supports the needed operation.

---

## 5. Required Safety Evidence Before Reconciliation

Before changing the test migration ledger, establish evidence that:

- production migration `20260902140000` is already completed and recorded in production;
- test does not contain the production business/product/item identities targeted by that migration;
- marking the migration accounted-for in test cannot create merchant data or simulate the repair effects;
- the action affects migration metadata only.

No data-row mutation is authorized under this instruction.

---

## 6. Required Post-Reconciliation Verification

After reconciliation, prove all of the following:

1. test migration history is sequentially aligned through the current latest migration;
2. `20260902140000` is represented in the test migration ledger without its production repair having executed against test data;
3. a normal repository-approved test migration dry-run / status check no longer identifies the instruction1.7 migration as pending;
4. if safe within the wrapper semantics, a normal test `db push` path reports clean/up-to-date without temporarily removing any migration file;
5. Phase B unique constraint still exists in test with exact columns `(business_id, inventory_item_id)`;
6. test duplicate Product ↔ Inventory groups remain zero;
7. fixture row counts and relevant fixture identities are unchanged from the precheck;
8. production is unchanged.

Do not create synthetic production identities in test merely to satisfy the historical migration.

---

## 7. Documentation

Update `docs/migration/README.md` only if needed to record the environment-specific historical-migration reconciliation pattern clearly enough that a future operator will not repeat the temporary-file workaround.

Keep the rule narrow: this is not permission to routinely mark arbitrary migrations applied without execution. It applies only to migrations whose authorized effect was intentionally production-data-specific and whose non-applicability to the isolated test environment is independently established.

Do not create governance bloat.

---

## 8. Required Reply

Return only through:

`communication/live/report1.9.md`

The report must state:

- exact precheck state;
- exact reconciliation mechanism used;
- why it changes migration metadata only;
- exact post-check migration state;
- proof that normal future test migration workflow no longer requires hiding the production repair file;
- proof that test data/schema integrity remains unchanged except for migration-history metadata;
- whether any documentation change was necessary;
- final status: `PASS`, `BLOCKED`, or `FAIL`.

No self-merge.
