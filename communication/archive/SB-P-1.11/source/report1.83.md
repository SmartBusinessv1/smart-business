# SMART BUSINESS MISSION CONTROL

# SB-P-1.11-GC-1 — SUPABASE BACKEND ARCHITECTURE RE-CONFIRMATION

**Report ID:** report1.83  
**Parent Mission:** SB-P-1.11 — Product Catalog & Pricing  
**Workstream:** SB-P-1.11-GC-1 — Build Now Gap Closure  
**Executing Room:** Supabase Backend Architecture  
**Authorized By:** `communication/live/instruction1.76.md`  
**Mission Type:** Architecture re-confirmation only  
**Implementation Authority:** NONE  
**Build Authority:** NONE

---

## 1. Executive Disposition

Supabase Backend Architecture re-confirmed the backend persistence contract in:

`docs/phase-1-mission-blueprint/active/SB-P-1.11-Build-Now-Gap-Closure-EIS.md`

at:

**Revision 4.0 — Supabase Architecture Correction Reconciliation**

against latest merged `main`:

`655e4adf748e5a175cc1986360fd429cfc395621`

The re-confirmation scope was limited to the material findings previously recorded in `communication/live/report1.81.md`, the correction reconciliation in `communication/live/report1.82.md`, the standing Security verdict in `communication/live/report1.80.md`, the governing Supabase framework, and the committed repository privilege/helper baseline.

Revision 4.0 now closes every material Supabase Backend Architecture blocker previously identified in `report1.81.md` at the design-contract level. The corrected design is internally coherent, compatible with the repository's actual default-privilege and Catalog-helper model, preserves the server-only bookkeeping boundary, and does not expand or alter the locked nineteen-command Catalog architecture.

No implementation occurred under this mission.

---

## 2. Canonical Inputs Reviewed

Reviewed from latest merged `main`:

1. `communication/live/instruction1.76.md`;
2. `docs/phase-1-mission-blueprint/active/SB-P-1.11-Build-Now-Gap-Closure-EIS.md` — Revision 4.0;
3. `communication/live/report1.81.md`;
4. `communication/live/instruction1.75.md`;
5. `communication/live/report1.82.md`;
6. `communication/live/report1.80.md`;
7. `merge/active/02_Supabase_Architecture_Framework.md`;
8. `supabase/migrations/20260727000000_reconcile_default_grants.sql`;
9. `supabase/migrations/20260806120000_sb_p_1_11_impl_1_stage1_schema.sql`;
10. current repository integration patterns relevant to caller-JWT and server-only privileged access where needed to confirm compatibility.

---

## 3. Prior-Finding Resolution Matrix

| Prior finding from `report1.81.md` | Revision 4.0 location | Status | Re-confirmation |
|---|---|---|---|
| Batch schema nullability/checks incomplete | §45.5.1 | `VERIFIED RESOLVED` | `original_filename`, `file_kind`, `status`, and other required fields are explicitly `NOT NULL`; `row_count >= 0`; file/status vocabularies are closed; committed status and `committed_at` are bidirectionally coherent. |
| Missing business-scoped batch parent key | §45.5.1 | `VERIFIED RESOLVED` | `UNIQUE (business_id, id)` is now explicit, enabling the tenant-binding child FK. |
| Missing batch-history index | §45.5.1 | `VERIFIED RESOLVED` | `(business_id, created_at DESC, id)` is specified; no unnecessary status-only index is introduced. |
| Row/batch tenant mismatch structurally possible | §45.5.2 | `VERIFIED RESOLVED` | Composite `FOREIGN KEY (business_id, batch_id) REFERENCES catalog_import_batches (business_id, id)` makes cross-business parent mismatch unrepresentable. |
| Missing positive row-number invariant | §45.5.2 | `VERIFIED RESOLVED` | `row_number >= 1` is explicitly required. |
| Missing stable source-row uniqueness | §45.5.2 | `VERIFIED RESOLVED` | `UNIQUE (batch_id, row_number)` is explicitly required. |
| Missing persisted row-idempotency uniqueness | §45.5.2 | `VERIFIED RESOLVED` | `UNIQUE (business_id, row_idempotency_key)` is explicitly locked; the key is generated once at preview and reused on retry. |
| Product references not tenant-bound | §45.5.2 | `VERIFIED RESOLVED` | `matched_product_id` and `resolved_product_id` use same-business composite FKs to `catalog_products (business_id, id)` with nullable semantics preserved. |
| Resolution metadata not coupled to row status | §45.5.2 | `VERIFIED RESOLVED` | `CREATED` requires `resolved_product_id`, `resolved_by`, and `resolved_at`; all non-`CREATED` states require those fields to remain null. |
| Correction reason not database-bounded | §45.5.2 | `VERIFIED RESOLVED` | Closed eight-value `correction_reason` vocabulary is now enforced by `CHECK`; raw DB error text remains prohibited. |
| Required row delivery/retry indexes absent | §45.5.2 | `VERIFIED RESOLVED` | `(business_id, batch_id, row_number)` and `(business_id, batch_id, status, row_number)` are specified; `parsed_snapshot` remains unindexed. |
| Cascade deletion conflicts with retained evidence | §45.5.3 | `VERIFIED RESOLVED` | Batch→row relationship is non-destructive (`RESTRICT` / equivalent `NO ACTION`); no ordinary delete grant or orchestration delete path is authorized. |
| Default ACL silently grants `anon` / broad authenticated access | §45.5.4 | `VERIFIED RESOLVED` | Revision 4.0 explicitly neutralizes inherited grants with `REVOKE ALL ... FROM anon, authenticated` before re-granting authenticated SELECT only. This matches the actual repository default-privilege migration. |
| Proposed authenticated RLS helper not executable | §45.5.4 | `VERIFIED RESOLVED` | Policy no longer calls `catalog_internal.resolve_owner_business`; it uses an authenticated-executable Owner predicate through `businesses`, without broadening `catalog_internal`. |
| Exact accepted RLS posture unclear | §45.5.4 | `VERIFIED RESOLVED` | RLS enabled; no `anon` policy; one Owner-scoped authenticated SELECT policy; no authenticated write policy; Manager/Employee remain fail-closed under this mission. |
| Service-role write path needs database fail-closed backstops | §45.5.2, §45.5.4, §45.14 | `VERIFIED RESOLVED` | Composite tenant-binding FKs, uniqueness constraints, and lifecycle checks now supplement the server-only authorization discipline for privileged writes. |
| Atomic batch claim executability | §45.5.5 | `VERIFIED RESOLVED` | Single conditional UPDATE remains the concurrency primitive; at most one claimant reaches `committing`; zero-row claims exit before Catalog mutation. |
| Retry/idempotency contract incomplete | §45.5.5 | `VERIFIED RESOLVED` | Persisted row idempotency keys are reused; already-created command outcomes remain replay-safe through existing Catalog command idempotency. |
| Batch `committed` vs retryable row `FAILED` contradiction | §45.5.5–§45.5.6 | `VERIFIED RESOLVED` | Batch reaches `committed` only when zero rows remain `FAILED`; otherwise batch ends `failed` and is reclaimable. Once committed, it never reopens. |
| Audit evidence could become internally incoherent | §45.5.1, §45.5.2, §45.14 | `VERIFIED RESOLVED` | Authenticated REST forgery remains denied, while DB constraints now prevent avoidable cross-tenant, identity, and lifecycle inconsistencies under the privileged bookkeeping path. |
| Migration ordering needed deterministic contract | §45.5.3–§45.5.5 and verification sections | `VERIFIED RESOLVED` | Revision 4.0 provides an executable sequence: constrained tables/indexes → inherited-grant neutralization → RLS → executable Owner policy → authenticated SELECT-only grant → ACL/behavior verification → type regeneration after test schema finalization → server orchestration exposure only after persistence verification → full dedicated-test-project verification → separately authorized production migration. |
| Rollback unsafe after retained import evidence exists | §45.5.3 and rollback posture | `VERIFIED RESOLVED` | Destructive rollback is not treated as routine once real evidence exists; evidence removal requires separate explicit retention/migration authority. |

**Resolution result:** every material `report1.81.md` finding is `VERIFIED RESOLVED`.

---

## 4. Table / Schema Confirmation

### 4.1 `catalog_import_batches`

Revision 4.0 now defines a sufficiently precise physical contract:

- opaque UUID primary key;
- business and initiating actor required;
- filename and file-kind required;
- closed `.csv` / `.xlsx` file-kind vocabulary;
- non-negative `row_count`;
- explicit four-state batch lifecycle;
- explicit initial `previewed` state;
- created timestamp required;
- `committed_at` present if and only if batch status is `committed`;
- business-scoped composite uniqueness `(business_id, id)`;
- Owner history index `(business_id, created_at DESC, id)`.

**Disposition:** `VERIFIED RESOLVED`.

### 4.2 `catalog_import_rows`

Revision 4.0 now defines:

- required business-bound parent relationship;
- positive row-number invariant;
- stable `(batch_id, row_number)` uniqueness;
- explicit closed row-status vocabulary;
- required allowlisted parsed snapshot;
- required Reference Cost authority flag;
- bounded correction-reason vocabulary;
- same-business matched/resolved Product FKs;
- persisted business-scoped idempotency-key uniqueness;
- status-coupled resolution metadata;
- ordered batch delivery and retry indexes;
- no index on `parsed_snapshot`.

**Disposition:** `VERIFIED RESOLVED`.

---

## 5. Tenant-Binding Integrity Confirmation

The corrected schema makes the following invalid at the database layer even when a privileged writer bypasses RLS:

- a row for Business A referencing a batch for Business B;
- a row for Business A referencing a matched Product for Business B;
- a row for Business A referencing a resolved Product for Business B.

The required composite parent/product keys are compatible with the existing Catalog schema pattern. The current Catalog Stage 1 migration already uses business-scoped composite-key patterns and explicitly treats tenant-bound foreign keys as the canonical ordering model.

**Disposition:** `VERIFIED RESOLVED`.

---

## 6. Grants / Default ACL Confirmation

The repository's committed default-grant migration explicitly contains:

`ALTER DEFAULT PRIVILEGES FOR ROLE postgres IN SCHEMA public GRANT ALL ON TABLES TO anon, authenticated, service_role;`

Therefore Revision 4.0 is correct to treat explicit grant neutralization as mandatory rather than optional.

The final contract requires the equivalent of:

```sql
REVOKE ALL ON catalog_import_batches, catalog_import_rows FROM anon, authenticated;
GRANT SELECT ON catalog_import_batches, catalog_import_rows TO authenticated;
```

Resulting intended posture:

- `anon`: no access;
- `authenticated`: SELECT only;
- authenticated INSERT/UPDATE/DELETE: denied;
- `service_role`: retained only for the narrow server bookkeeping boundary.

Revision 4.0 also requires authoritative post-migration privilege verification during Build Mode instead of assuming grants from migration text alone.

**Disposition:** `VERIFIED RESOLVED`.

---

## 7. RLS Executability Confirmation

Revision 4.0 replaces the non-executable Revision 3.0 policy dependency on:

`catalog_internal.resolve_owner_business(auth.uid())`

with:

```sql
USING (
  business_id IN (
    SELECT id FROM businesses WHERE owner_id = auth.uid()
  )
)
```

for authenticated SELECT access to each support table.

This is compatible with the current repository grant architecture because it does not require exposing `catalog_internal` to `authenticated`. The committed Catalog Stage 1 migration explicitly revokes `catalog_internal` schema/helper access from `authenticated`, so avoiding that helper is the correct architecture.

The final policy remains Owner-only. No Manager or Employee access is introduced by this mission. Foreign-business rows remain invisible through RLS, preserving the required fail-closed resource behavior.

**Disposition:** `VERIFIED RESOLVED`.

---

## 8. Privileged Bookkeeping Boundary Confirmation

Revision 4.0 preserves the accepted Revision 3.0 server-only boundary:

- caller JWT is validated before privileged bookkeeping access;
- current actor/business/Owner authority is independently re-derived;
- service role does not decide merchant authorization;
- privileged mutations are limited to `catalog_import_batches` and `catalog_import_rows`;
- request input cannot select arbitrary table/column/actor/business/timestamp/lifecycle state;
- Catalog Product Truth mutation remains outside the privileged bookkeeping client;
- the service-role client does not call or substitute for any of the nineteen Catalog commands;
- Catalog command execution remains caller-JWT-scoped;
- privileged credentials remain server-only and prohibited from browser-observable surfaces;
- database constraints now provide fail-closed structural enforcement for tenant and lifecycle coherence where practical.

**Disposition:** `VERIFIED RESOLVED`.

---

## 9. Atomic Claim / Retry / State-Machine Confirmation

Revision 4.0 preserves the executable compare-and-set acquisition model:

```text
previewed → committing → committed
```

or:

```text
previewed → committing → failed → committing
```

The claim is one conditional UPDATE scoped by:

- opaque batch ID;
- server-derived business ID;
- predecessor status in `('previewed','failed')`.

At most one concurrent claimant can receive the row transition. A zero-row claimant re-reads scoped state and returns `NOT_FOUND`, `IN_PROGRESS`, or `ALREADY_COMMITTED` without entering the Catalog mutation loop.

Rows use their original persisted `row_idempotency_key` on every retry. Already-created rows remain safe under existing Catalog command idempotency.

The BA-7 contradiction is closed:

- if any row remains retryable `FAILED`, the batch ends `failed`;
- batch becomes `committed` only when no retryable `FAILED` row remains;
- `NEEDS_CORRECTION`, `POSSIBLE_MATCH`, and `SKIPPED` may remain terminal non-save outcomes;
- once `committed`, a batch is structurally excluded from reacquisition.

**Disposition:** `VERIFIED RESOLVED`.

---

## 10. Audit Integrity Confirmation

Revision 4.0 now protects import lifecycle evidence on two layers:

1. **External-forgery prevention** — `authenticated` has no write authority on the support tables.
2. **Internal-coherence protection** — privileged writes are constrained by business-bound FKs, stable row identity, idempotency uniqueness, status-coupled resolution metadata, and committed-state timestamp coherence.

The non-destructive retention posture also removes the earlier risk that deleting one batch could silently erase its row-level evidence through cascade semantics.

Catalog audit remains authoritative for actual Product Truth mutations because imported product creation still goes through the existing governed Catalog command path.

**Disposition:** `VERIFIED RESOLVED`.

---

## 11. Migration Ordering / Verification / Rollback Confirmation

Revision 4.0 is sufficiently deterministic for a later Build Mode migration to execute without inventing missing persistence behavior.

Required order is preserved:

1. create both support tables with final constraints, composite keys/FKs, checks, and indexes;
2. immediately neutralize inherited `anon` / `authenticated` table privileges;
3. enable RLS;
4. create the authenticated-executable Owner-only SELECT policy;
5. grant authenticated SELECT only;
6. verify actual ACL/grant state from authoritative database catalog evidence;
7. behaviorally verify Owner access, cross-business isolation, Manager fail-closed, Employee denied, `anon` denied, and authenticated DML denied;
8. regenerate generated types only after the dedicated test schema is final;
9. expose server orchestration only after persistence verification succeeds;
10. run the full dedicated-test-project negative and concurrency/idempotency verification set;
11. perform production migration only under separate explicit production authority.

Rollback remains non-destructive once real import evidence exists. Evidence-bearing tables/rows are not to be silently dropped or cascaded as routine rollback after use; future destructive retention requires separate authorization.

**Disposition:** `VERIFIED RESOLVED`.

---

## 12. Regression Check Against Locked Boundaries

| Locked boundary | Result |
|---|---|
| Exactly nineteen public Catalog commands | PASS |
| No twentieth public Catalog/import command | PASS |
| No `reactivate_catalog_category` command | PASS |
| No Product Truth redesign | PASS |
| No automatic duplicate overwrite | PASS |
| No automatic Inventory-row creation | PASS |
| No global mutable Category taxonomy | PASS |
| No unit conversion | PASS |
| Owner import allowed | PASS |
| Manager remains fail-closed pending approved permission infrastructure | PASS |
| Employee import denied | PASS |
| Reference Cost independently authorized/protected | PASS |
| Raw upload remains transient/unretained | PASS |
| Caller-JWT client remains Catalog authority path | PASS |
| Service role remains bookkeeping-only | PASS |
| Standing Security verdict remains unregressed | PASS |

`communication/live/report1.80.md` remains `SECURITY READY FOR BUILD LOCK`. Revision 4.0 adds database-integrity precision on top of that accepted security boundary and does not reopen RSB-1, RSB-2, or RSB-3.

---

## 13. Residual Blockers / Evidence Gaps

None within the authorized architecture re-confirmation scope.

This verdict is design-level only. Build Mode must still implement the specified migration exactly and produce dedicated test-project behavioral evidence before production migration authority can be considered.

No design blocker remains from `report1.81.md`.

---

## 14. No Implementation Confirmation

Under this mission:

- no application code was implemented;
- no dependency was installed;
- no migration was created or applied;
- no table, schema, RLS policy, grant, role, credential, or Supabase data was modified;
- no test or production database write was performed;
- no privileged credential was used for mutation;
- no Catalog command was added, removed, or changed;
- no Product Truth decision changed;
- no Lovable mutation occurred;
- no publish/deploy/domain cutover occurred;
- no Build Mode occurred.

Only this architecture re-confirmation report was created.

---

## 15. Final Verdict

`SUPABASE ARCHITECTURE READY FOR BUILD LOCK`

---

## 16. Next Logical Step

After this report is human-reviewed and merged, Mission Control may perform the final combined GC-1 design gate because both required conditions are then satisfied:

1. standing Security verdict: `SECURITY READY FOR BUILD LOCK`;
2. Supabase Backend Architecture verdict: `SUPABASE ARCHITECTURE READY FOR BUILD LOCK`.

Mission Control may then decide whether to issue a separate canonical GC-1 Build Lock / implementation authorization.

This report does not itself authorize Build Mode or implementation.
