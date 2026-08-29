# SMART BUSINESS MISSION CONTROL

# SB-P-1.11-GC-1 — SUPABASE BACKEND ARCHITECTURE CONFIRMATION

**Report ID:** report1.81  
**Parent Mission:** SB-P-1.11 — Product Catalog & Pricing  
**Workstream:** SB-P-1.11-GC-1 — Build Now Gap Closure  
**Executing Room:** Supabase Backend Architecture  
**Authorized By:** `communication/live/instruction1.74.md`  
**Implementation Authority:** NONE  
**Build Authority:** NONE

---

## 1. Executive Disposition

Supabase Backend Architecture reviewed the latest merged `main` at:

`4659a78edf6435f7f54fbce63813fca68d6bdb74`

Reviewed canonical design:

`docs/phase-1-mission-blueprint/active/SB-P-1.11-Build-Now-Gap-Closure-EIS.md` — **Revision 3.0 — RSB Security Reconciliation**.

Also reviewed:

- `communication/live/report1.77.md`;
- `communication/live/report1.78.md`;
- `communication/live/report1.79.md`;
- `communication/live/report1.80.md`;
- `merge/active/02_Supabase_Architecture_Framework.md`;
- current Catalog schema/function migration evidence, including `supabase/migrations/20260806120000_sb_p_1_11_impl_1_stage1_schema.sql`;
- current default-grant migration `supabase/migrations/20260727000000_reconcile_default_grants.sql`;
- `src/integrations/supabase/client.server.ts`;
- `src/integrations/supabase/auth-middleware.ts`.

Revision 3.0 successfully closes the previously identified security-design issues around authenticated support-table writes, service-role bookkeeping separation, and the unexecutable advisory-lock proposal. The server-only bookkeeping boundary and atomic compare-and-set concept are directionally correct.

However, the exact persistence contract is **not yet complete enough for Build Lock** against the repository's actual Supabase privilege baseline and current Catalog helper/grant model. The blockers are database-contract defects, not Product Truth changes.

**Build Lock recommendation:** do not issue Build Lock until the exact corrections in this report are incorporated into the EIS or otherwise canonically bound to the Build Mode migration contract.

---

## 2. Table / Schema Confirmation

### 2.1 `catalog_import_batches`

**Disposition: CHANGES REQUIRED BEFORE BUILD LOCK**

The proposed columns are directionally sufficient, but the physical contract is underspecified.

Required corrections:

1. `original_filename` must be explicitly `NOT NULL` if every persisted batch represents an accepted parsed source file. If the product flow permits a filename-less source, the EIS must say so explicitly instead of leaving nullability accidental.
2. `file_kind` must be `NOT NULL` in addition to the closed `CHECK ('csv','xlsx')`.
3. `status` must be `NOT NULL` with an explicit initial/default contract or explicit insert requirement.
4. `row_count` needs a non-negative check; the accepted upload design supports zero valid data rows as a parse outcome only if explicitly intended. At minimum require `row_count >= 0`.
5. `committed_at` needs a lifecycle invariant: it is non-null only for `status = 'committed'`, and `status = 'committed'` requires it to be non-null.
6. A business-scoped supporting key is required so child rows can enforce that their denormalized `business_id` matches the parent batch. Add `UNIQUE (business_id, id)` or use `(business_id, id)` as the parent key for the child FK.
7. Do not use destructive cascade semantics from the batch into audit-evidence rows unless deletion of import evidence is explicitly authorized. Initial Phase 1 retention is indefinite; therefore deletion should fail closed rather than silently erase row-level evidence.

Required indexes:

- `(business_id, created_at DESC, id)` for Owner-scoped batch history/list reads;
- `(business_id, id)` is covered if implemented as a unique constraint;
- a claim-oriented index is optional because the claim addresses a single PK row, but no additional status-only index is required for that operation.

### 2.2 `catalog_import_rows`

**Disposition: CHANGES REQUIRED BEFORE BUILD LOCK**

The proposed table lacks several integrity constraints required because the service-role write path bypasses RLS.

Required corrections:

1. Replace the independent FKs
   - `batch_id -> catalog_import_batches(id)` and
   - `business_id -> businesses(id)`
   with a tenant-binding composite relationship:
   - `FOREIGN KEY (business_id, batch_id) REFERENCES catalog_import_batches(business_id, id)`.
   This makes cross-business batch/row mismatch impossible at the database layer even for a privileged bookkeeping bug.
2. `row_number` must satisfy `row_number >= 1`.
3. Add `UNIQUE (batch_id, row_number)` so one source row has one stable persisted identity inside a batch.
4. Add a persisted idempotency uniqueness constraint. The minimum safe contract is `UNIQUE (business_id, row_idempotency_key)`; if row keys are intentionally globally unique, a simple unique constraint on `row_idempotency_key` is also implementable, but the contract must choose one explicitly.
5. `matched_product_id` and `resolved_product_id` must be business-bound. A plain FK to `catalog_products(id)` does not prove same-business ownership under a service-role bypass. Use composite FKs `(business_id, matched_product_id)` and `(business_id, resolved_product_id)` to `catalog_products(business_id, id)`, with null-safe semantics for the optional product IDs.
6. `resolved_by` / `resolved_at` / `resolved_product_id` need status-coupled checks. At minimum:
   - `CREATED` requires `resolved_product_id`, `resolved_by`, and `resolved_at`;
   - non-`CREATED` rows must not carry a forged created-product reference;
   - terminal resolution metadata must not exist on pre-resolution states unless an explicitly documented exception requires it.
7. `correction_reason` should be constrained to the closed application reason-code set or to an explicitly versioned bounded vocabulary. A comment saying it is fixed does not enforce the audit contract.
8. `status` and `has_reference_cost_authority` must be explicitly `NOT NULL` as already intended by the EIS; status should have no database default unless the insertion path deliberately defines one.
9. `parsed_snapshot` remains acceptable as `jsonb NOT NULL` only with application-level allowlisting plus Build Mode tests that prove Reference Cost omission. No database JSON schema is required under this mission.

Required indexes:

- `(business_id, batch_id, row_number)` for business-scoped batch row delivery; the proposed composite FK/unique keys may partially cover this but the final migration should verify the actual planner path;
- `(business_id, batch_id, status, row_number)` for commit/retry row selection;
- the chosen unique index for persisted `row_idempotency_key`;
- no broad index on `parsed_snapshot` is authorized.

### 2.3 Delete / retention behavior

**Disposition: CORRECTION REQUIRED**

Revision 3.0 states that batch/row bookkeeping is retained indefinitely by default and serves as import lifecycle/audit evidence. `catalog_import_rows.batch_id ... ON DELETE CASCADE` is inconsistent with that boundary because deleting one batch can erase every row-level audit record without an explicit archival/deletion mission.

Accepted Build Now posture:

- no user/browser delete grant;
- no server orchestration delete path;
- no `ON DELETE CASCADE` between batch and rows;
- parent deletion should be `RESTRICT`/`NO ACTION` unless a later retention mission explicitly authorizes evidence destruction.

---

## 3. Grants and RLS Confirmation

### 3.1 Intended model

The intended model remains correct:

- `authenticated`: SELECT only;
- authenticated INSERT/UPDATE/DELETE: denied;
- Owner/business-scoped read under RLS;
- Manager: fail closed until approved permission infrastructure exists;
- Employee: no import/support-table visibility;
- service-role: RLS-bypassing server bookkeeping only after caller-JWT authorization.

### 3.2 Blocker — repository default privileges also grant `anon`

The repository currently contains:

`ALTER DEFAULT PRIVILEGES FOR ROLE postgres IN SCHEMA public GRANT ALL ON TABLES TO anon, authenticated, service_role;`

Therefore, creating the two new `public` tables as `postgres` automatically grants table privileges to **anon**, **authenticated**, and **service_role** unless the migration explicitly revokes them.

Revision 3.0 currently specifies only:

- `GRANT SELECT ... TO authenticated`;
- `REVOKE INSERT, UPDATE, DELETE ... FROM authenticated`.

That is insufficient in this repository. Without an explicit revoke, `anon` inherits broad table privileges from the current default ACL baseline.

**Required correction:** immediately after each table is created, neutralize inherited defaults before applying the narrow grant model. The canonical migration contract must include the equivalent of:

```text
REVOKE ALL ON catalog_import_batches, catalog_import_rows FROM anon, authenticated;
GRANT SELECT ON catalog_import_batches, catalog_import_rows TO authenticated;
```

`service_role` may retain its existing platform/admin privilege because Revision 3.0 explicitly depends on the server-only service-role client.

The final migration must verify grants from `information_schema.role_table_grants` / `acl` evidence, not assume the default state.

### 3.3 Blocker — proposed RLS helper is not executable by `authenticated`

Revision 3.0 proposes authenticated SELECT policies that call:

`catalog_internal.resolve_owner_business(auth.uid())`.

The current Catalog Stage 1 migration explicitly:

- revokes access to `catalog_internal` from `authenticated`;
- revokes EXECUTE on `catalog_internal.resolve_owner_business(uuid)` from `authenticated`;
- grants that helper only to the seven Catalog executor roles.

Therefore the proposed policy does not match the current canonical helper/grant architecture for a direct `authenticated` table read.

**Required correction:** do not broaden `catalog_internal` exposure merely to make this policy work. Use an RLS expression that is executable by `authenticated` using already-authorized public ownership evidence, for example a direct Owner-business predicate through `businesses`, or introduce a separately reviewed safe helper whose exposure is intentionally designed for RLS use. The Build Mode migration must prove the actual policy by behavioral SELECT tests.

### 3.4 Exact accepted RLS posture

For both tables:

- `ENABLE ROW LEVEL SECURITY` is mandatory;
- no policy for `anon`;
- one `FOR SELECT TO authenticated` Owner-scoped policy;
- no authenticated INSERT/UPDATE/DELETE policies;
- no Manager or Employee policy in this mission;
- service-role bypass is acknowledged and is not treated as tenant enforcement.

The policy must make a foreign and nonexistent batch indistinguishable to authenticated callers.

---

## 4. Server-Only Privileged Bookkeeping Boundary

**Disposition: CONFIRMED WITH DATABASE-INTEGRITY CORRECTIONS ABOVE**

Reuse of `src/integrations/supabase/client.server.ts`'s server-only `supabaseAdmin` client is architecturally acceptable for fixed bookkeeping writes to exactly:

- `catalog_import_batches`;
- `catalog_import_rows`.

The boundary is accepted only if all of the following remain binding:

- caller JWT is validated first through the caller-scoped path;
- Owner/business authority is re-derived independently before any privileged write;
- service-role never decides authorization;
- business/actor IDs used in writes are server-derived;
- no browser input selects arbitrary table, column, lifecycle state, actor, business, product ID, or timestamp;
- `resolved_product_id` is accepted only from an actual governed Catalog-command result;
- service-role is never used for Catalog Product Truth mutation or any of the nineteen Catalog commands;
- server-only module import discipline prevents credential-capable code from entering the client bundle;
- the database itself carries tenant-binding FKs/constraints so service-role application bugs fail closed where possible.

**Confirmation:** `CONFIRMED`, subject to the exact schema/grant/RLS corrections in this report.

---

## 5. Atomic Batch Acquisition / Retry / Idempotency

### 5.1 Atomic claim

**Disposition: CONFIRMED**

The proposed single conditional update:

```text
UPDATE catalog_import_batches
SET status = 'committing', ...
WHERE id = <batch_id>
  AND business_id = <server-derived business_id>
  AND status IN ('previewed', 'failed')
RETURNING ...
```

is an executable compare-and-set mechanism.

Two concurrent claimants cannot both successfully transition the same row from an allowed predecessor state: PostgreSQL rechecks the predicate after row-lock wait, so at most one claimant receives the row from `RETURNING`.

A zero-row claimant may safely re-read using the same server-derived business scope and return `NOT_FOUND`, `IN_PROGRESS`, or `ALREADY_COMMITTED` without entering Catalog mutation.

### 5.2 Retry / row idempotency

**Disposition: CONFIRMED WITH CONSTRAINT CORRECTION**

Persisting one `row_idempotency_key` at preview time and reusing it on every commit retry is compatible with the locked Catalog command idempotency model.

Build Lock still requires the table-level uniqueness constraint named in §2.2 so an accidental duplicate row/key cannot silently weaken the retry contract.

### 5.3 Batch completion invariant

**Disposition: CORRECTION REQUIRED**

The EIS states that the batch becomes `committed` "if every row reached a terminal state." Because row `FAILED` is itself a terminal row outcome for D-056-style partial completion, the report/UI may legitimately show failed-at-save rows while the batch is committed. That is coherent only if the contract explicitly defines:

- which row states count as terminal;
- whether `FAILED` is retryable after a batch is marked `committed`;
- whether a batch with any `FAILED` rows must instead remain batch `failed` for retry.

Current text simultaneously says `FAILED` rows are retryable on the next commit and that a batch can become `committed` when every row is terminal. A committed batch cannot be reacquired because the claim predicate excludes `committed`.

**Required correction:** choose one executable rule. Recommended without changing product behavior:

- batch `committed` only when no row requiring another save attempt remains;
- if any commit-time row remains `FAILED` and retry is permitted, batch ends `failed` so it can be reacquired;
- validation-only `NEEDS_CORRECTION`, `POSSIBLE_MATCH`, and `SKIPPED` may be terminal non-save outcomes and do not force retry;
- once batch is `committed`, it is never reopened.

This is a backend state-machine clarification, not a Founder decision.

---

## 6. Audit Integrity Confirmation

**Disposition: CHANGES REQUIRED BEFORE BUILD LOCK**

Revision 3.0 correctly removes ordinary authenticated write authority over audit-evidence fields. That is necessary but not sufficient because the service-role path bypasses RLS.

The database must additionally enforce where practical:

- row belongs to the same business as its batch;
- matched/resolved Product belongs to the same business as the row;
- one persisted source row per `(batch_id, row_number)`;
- idempotency-key uniqueness;
- committed timestamp/status coherence;
- CREATED status / resolution metadata coherence;
- no destructive cascade from batch to audit rows.

With those corrections, the two support tables are acceptable as audit-adjacent lifecycle evidence while the existing Catalog audit remains authoritative for actual Product Truth mutation.

---

## 7. Migration Ordering and Rollback Safety

**Disposition: CONFIRMED WITH REQUIRED ORDER**

Safe Build Mode order:

1. create the two support tables with all final PKs, tenant-binding FKs, lifecycle checks, uniqueness constraints, and indexes;
2. immediately neutralize inherited `anon` / `authenticated` default table grants;
3. enable RLS on both tables;
4. create the authenticated Owner-only SELECT policies using an actually executable predicate under the current repository grant model;
5. grant authenticated SELECT only;
6. verify from catalog/ACL evidence that `anon` has no table privilege and `authenticated` has SELECT only;
7. behaviorally verify direct authenticated INSERT/UPDATE/DELETE fail and cross-business/Employee/Manager reads fail closed;
8. update/regenerate Supabase TypeScript types only after the test-project schema is final;
9. only then expose server orchestration that depends on the support tables;
10. run the full Revision 3.0 negative-test matrix on the dedicated test project;
11. production migration only after test evidence and explicit Build Mode / production migration authority.

Rollback safety:

- before application orchestration is exposed, the two newly created support tables may be rolled back as a unit in the test environment;
- after real import evidence exists, destructive rollback/drop is not automatically safe and requires an explicit data-retention/migration decision;
- no production rollback plan may rely on `ON DELETE CASCADE` to erase audit evidence.

---

## 8. Compatibility with the Locked Nineteen-Command Catalog Architecture

**Disposition: CONFIRMED**

The corrected support-table design requires:

- no twentieth public Catalog command;
- no new public import RPC solely to hide bookkeeping writes;
- no signature change to any of the nineteen commands;
- no browser direct mutation of Catalog Product Truth;
- no service-role invocation of Catalog commands;
- row-level Catalog creation/reference-cost mutation continues through existing governed commands using the caller-JWT client.

The new tables remain support/orchestration persistence, not Catalog Product Truth.

---

## 9. Negative-Test Design Assessment

Revision 3.0 is directionally capable of supporting the required negative tests, but Build Lock should wait until the persistence contract is corrected so the test prerequisites are real rather than assumed.

| # | Required test | Design status |
|---:|---|---|
| 1–6 | Authenticated INSERT/UPDATE/DELETE denied on both support tables | **SUPPORTED AFTER GRANT CORRECTION** — explicit anon/authenticated default-ACL neutralization required |
| 7 | Cross-business SELECT denied/indistinguishable | **SUPPORTED AFTER RLS CORRECTION** — current proposed helper is not executable by authenticated |
| 8 | Employee support-table access/import denied | **SUPPORTED AFTER RLS CORRECTION** |
| 9 | Manager import denied | **SUPPORTED** — no Manager permission infrastructure is introduced |
| 10 | Browser foreign business ID cannot redirect privileged write | **SUPPORTED** — server-derived business plus required tenant-binding FKs |
| 11 | Browser actor ID cannot forge actor evidence | **SUPPORTED** — server-derived actor only |
| 12 | Arbitrary table/column targeting impossible | **SUPPORTED** — fixed bookkeeping operations only |
| 13 | At most one concurrent batch claimant | **SUPPORTED** — conditional UPDATE compare-and-set |
| 14 | Losing claimant performs zero Catalog mutation | **SUPPORTED** |
| 15 | Retry reuses original row idempotency key | **SUPPORTED AFTER UNIQUE CONSTRAINT** |
| 16 | Authenticated REST cannot forge terminal state | **SUPPORTED AFTER GRANT CORRECTION** |
| 17 | `resolved_product_id` comes only from real Catalog result | **SUPPORTED WITH REQUIRED SAME-BUSINESS FK + code-path test** |
| 18 | Service-role secret absent from browser/logs/responses/etc. | **SUPPORTED BY SERVER-ONLY RUNTIME DESIGN; BUILD MODE EVIDENCE REQUIRED** |

No write test was executed under this review mission.

---

## 10. Residual Backend Blockers

The following are genuine Build Lock blockers:

### BA-1 — Default ACL neutralization incomplete

The repository automatically grants new `public` tables to `anon`, `authenticated`, and `service_role`. Revision 3.0 revokes authenticated writes but does not revoke inherited `anon` privileges.

### BA-2 — Proposed authenticated SELECT policy conflicts with current helper grants

`catalog_internal.resolve_owner_business(uuid)` is not executable by `authenticated`, and the internal schema is deliberately non-exposed. The proposed RLS policy must be replaced with an executable Owner predicate rather than broadening internal helper exposure accidentally.

### BA-3 — Tenant-binding integrity is not enforced for support rows

`catalog_import_rows.business_id` is only a denormalized independent FK and is not constrained to equal its parent batch business. Product references are also not business-bound. This is insufficient for a service-role write path that bypasses RLS.

### BA-4 — Row identity/idempotency constraints are incomplete

No explicit uniqueness is specified for `(batch_id, row_number)` or the persisted `row_idempotency_key`.

### BA-5 — Audit/lifecycle constraints are incomplete

Batch committed timestamp and row resolution metadata can become inconsistent with lifecycle status unless explicit checks or equivalent controlled invariants are added.

### BA-6 — Cascade deletion conflicts with indefinite audit-evidence retention

`ON DELETE CASCADE` on batch-to-row evidence should not be part of the initial Phase 1 contract.

### BA-7 — Batch `failed` / row `FAILED` retry semantics are internally inconsistent

A batch can currently be described as `committed` once rows are terminal while `FAILED` rows are also described as retryable. The state machine must define one non-contradictory terminal/retry rule.

These are backend persistence corrections only. No Founder decision or Product Truth change is required.

---

## 11. Exact Correction Package for Mission Control

Before Build Lock, canonically bind the following database contract:

1. `catalog_import_batches`: explicit nullability, `row_count >= 0`, committed/status timestamp check, and `UNIQUE (business_id, id)`.
2. `catalog_import_rows`: `row_number >= 1`, `UNIQUE (batch_id, row_number)`, explicit unique persisted row idempotency key, tenant-binding composite FK to batch, same-business composite FKs for matched/resolved Product IDs, and status/resolution consistency checks.
3. Remove `ON DELETE CASCADE`; initial Phase 1 import evidence is not deleted by ordinary orchestration.
4. Add the business/batch/status/row indexes identified in §2.
5. Immediately revoke inherited table privileges from `anon` and `authenticated`, then grant authenticated SELECT only. Preserve service-role only for the locked server bookkeeping boundary.
6. Enable RLS and replace the non-executable `catalog_internal.resolve_owner_business(auth.uid())` authenticated policy with an Owner-scoped predicate that is executable under the current repository grant model.
7. Keep Manager and Employee fail-closed; add no new permission infrastructure.
8. Keep the service-role client strictly server-only, post-authentication, fixed-table/fixed-column, and non-Catalog.
9. Keep the atomic conditional batch claim.
10. Define batch `failed` / row `FAILED` retry behavior so `committed` is terminal and never needs reopening.
11. Apply and behaviorally verify the migration against the dedicated test project before any production migration.
12. Preserve the exact nineteen-command Catalog surface without additions or signature changes.

---

## 12. No Implementation Confirmation

Under this mission:

- no application code was implemented;
- no dependency was installed;
- no migration was created or applied;
- no Supabase schema, RLS, grant, role, credential, or data was modified;
- no test or production database write was performed;
- no Lovable change occurred;
- no publish/deploy/domain cutover occurred;
- no Product Truth decision changed.

Only this design-confirmation report was created for human review.

---

## 13. Final Verdict

`SUPABASE ARCHITECTURE CHANGES REQUIRED BEFORE BUILD LOCK`
