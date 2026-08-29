# SMART BUSINESS MISSION CONTROL

# SB-P-1.11-GC-1 — SUPABASE ARCHITECTURE CORRECTION RECONCILIATION

**Instruction ID:** instruction1.75  
**Parent Mission:** SB-P-1.11 — Product Catalog & Pricing  
**Workstream:** SB-P-1.11-GC-1 — Build Now Gap Closure  
**Executing Environment:** Claude Code in VS Code  
**Authorized By:** Mission Control  
**Mission Type:** Documentation-only architecture reconciliation  
**Implementation Authority:** NONE  
**Build Authority:** NONE  
**Status:** ACTIVE AFTER MERGE

---

## 1. Mission Objective

Reconcile the standalone SB-P-1.11-GC-1 Build Now Gap Closure EIS with the completed Supabase Backend Architecture confirmation recorded in:

`communication/live/report1.81.md`

The current Supabase verdict is:

`SUPABASE ARCHITECTURE CHANGES REQUIRED BEFORE BUILD LOCK`

This mission is limited to closing those Supabase architecture-contract defects in the EIS. It must not implement application code, migrations, schema changes, grants, RLS, dependencies, or Supabase writes.

Do not repeat `instruction1.74.md` or create a duplicate `report1.81.md`.

---

## 2. Canonical Inputs

Read from latest merged `main` before editing:

1. `docs/phase-1-mission-blueprint/active/SB-P-1.11-Build-Now-Gap-Closure-EIS.md` — current Revision 3.0;
2. `communication/live/report1.81.md` — controlling Supabase Architecture findings;
3. `communication/live/report1.80.md` — Security ready-for-Build-Lock confirmation;
4. `communication/live/report1.79.md`;
5. `communication/live/report1.78.md`;
6. `communication/live/instruction1.74.md`;
7. `merge/active/02_Supabase_Architecture_Framework.md`;
8. current Catalog migrations, grants/default-grant posture, RLS patterns, Supabase client boundaries, and generated types where needed for read-only verification.

If repository reality conflicts with older EIS wording, correct the EIS to repository reality without changing Product Truth.

---

## 3. Locked Mission Control Decisions

The following remain immutable during this reconciliation:

1. Exactly nineteen public Catalog commands remain locked.
2. No twentieth public Catalog/import command is authorized.
3. No signature change to any existing Catalog command is authorized.
4. `catalog_import_batches` and `catalog_import_rows` remain support/bookkeeping tables, not Product Truth tables.
5. Authenticated users may read only through Owner/business-scoped RLS and must have no direct INSERT/UPDATE/DELETE authority on the support tables.
6. Manager import remains fail-closed until approved permission infrastructure exists.
7. Employee import remains denied.
8. Caller JWT remains the merchant authorization source.
9. The server-only privileged Supabase client may be used only for fixed bookkeeping writes to the two support tables after caller authorization and business re-derivation.
10. The privileged client must never mutate Catalog Product Truth and must never invoke the nineteen Catalog commands on behalf of the actor.
11. Catalog Product Truth mutations remain existing governed Catalog RPCs using the caller-JWT-scoped client.
12. Reference Cost remains independently protected.
13. Raw spreadsheet source remains transient and unretained in Phase 1.
14. No automatic duplicate overwrite, automatic Inventory-row creation, unit conversion, global mutable taxonomy, Product auto-categorization, or category reactivation is authorized.
15. Security verdict `SECURITY READY FOR BUILD LOCK` remains valid unless this reconciliation introduces a regression. Do not redesign the security model.

---

## 4. Required Supabase Corrections

Address every material finding in `report1.81.md` and map each one explicitly in the completion report.

### 4.1 `catalog_import_batches` physical contract

Lock the exact table contract, including:

- deliberate nullability for every column;
- `original_filename` nullability explicitly decided and documented;
- `file_kind NOT NULL` with the closed `csv` / `xlsx` check;
- `status NOT NULL` with an explicit initial-state contract;
- `row_count >= 0` check;
- committed-state / `committed_at` coherence in both directions;
- a business-scoped parent key suitable for tenant-binding child FKs, such as `UNIQUE (business_id, id)`;
- no destructive batch-to-row cascade under Phase 1 indefinite audit-evidence retention;
- the required Owner-history/list index `(business_id, created_at DESC, id)`;
- no unnecessary status-only index for the single-row atomic claim.

### 4.2 `catalog_import_rows` database integrity

Lock the exact row-table contract so privileged bookkeeping bugs fail closed where practical:

- composite tenant-binding FK `(business_id, batch_id)` → `catalog_import_batches(business_id, id)`;
- `row_number >= 1`;
- `UNIQUE (batch_id, row_number)`;
- choose and lock the persisted row-idempotency uniqueness contract, at minimum `UNIQUE (business_id, row_idempotency_key)` unless the EIS deliberately specifies global uniqueness;
- business-bound optional Product references for `matched_product_id` and `resolved_product_id` using composite same-business FKs to `catalog_products(business_id, id)` or an equivalently fail-closed database contract;
- status-coupled resolution checks, including CREATED requiring `resolved_product_id`, `resolved_by`, and `resolved_at`, and non-CREATED rows not carrying forged created-product evidence;
- terminal-resolution metadata rules for pre-resolution states;
- `correction_reason` constrained to a closed or explicitly versioned bounded reason-code vocabulary;
- `status` and `has_reference_cost_authority` explicitly `NOT NULL`;
- `parsed_snapshot jsonb NOT NULL` retained only with the existing application allowlist and Reference Cost omission requirements;
- required batch-row delivery / retry indexes;
- no broad `parsed_snapshot` index.

### 4.3 Delete and retention behavior

Make the EIS internally consistent with indefinite Phase 1 import lifecycle/audit retention:

- no user/browser delete grant;
- no normal server-orchestration delete path;
- no `ON DELETE CASCADE` from batches to rows;
- parent deletion fails closed through `RESTRICT` / `NO ACTION` unless a future retention mission explicitly authorizes evidence destruction.

### 4.4 Repository default-grant reality

Revision 3.0 must account for the repository's actual default privilege baseline.

Lock an explicit migration rule that immediately neutralizes inherited default grants after table creation, including the equivalent of:

```sql
REVOKE ALL ON catalog_import_batches, catalog_import_rows FROM anon, authenticated;
GRANT SELECT ON catalog_import_batches, catalog_import_rows TO authenticated;
```

Do not assume `anon` starts with no privilege.

The Build Mode migration contract must require post-migration ACL/grant verification from authoritative catalog evidence.

### 4.5 Executable authenticated RLS predicate

Do not expose or broaden `catalog_internal.resolve_owner_business(uuid)` merely to make the support-table SELECT policy work.

The EIS must specify an Owner/business-scoped SELECT policy that is actually executable by `authenticated` under the current repository grant model, using already-authorized ownership evidence such as the public `businesses` relationship or a separately reviewed safe helper intentionally exposed for RLS.

The selected policy must:

- allow Owner reads for the current business only;
- deny Employee and Manager under the current fail-closed Phase 1 posture;
- make foreign and nonexistent batch IDs indistinguishable;
- have no authenticated INSERT/UPDATE/DELETE policies;
- acknowledge service-role bypass as a privileged application boundary, not tenant enforcement.

Do not leave multiple unresolved alternatives. Choose one concrete Build Mode contract supported by current repository architecture.

### 4.6 Batch state-machine completion invariant

Resolve the inconsistency between retryable row `FAILED` state and batch `committed` finality.

Lock one executable rule. Mission Control accepts the Supabase Architecture recommendation unless repository evidence proves it invalid:

- batch becomes `committed` only when no row requiring another save attempt remains;
- if any commit-time row remains retryable `FAILED`, batch ends `failed` so it can be reacquired;
- validation/correction outcomes such as `NEEDS_CORRECTION`, `POSSIBLE_MATCH`, and `SKIPPED` may be terminal non-save outcomes and need not force retry;
- once a batch is `committed`, it is never reopened.

Define the exact terminal/retryable state sets in the EIS.

### 4.7 Audit-integrity database invariants

Reconcile the audit wording so trustworthy support-table evidence depends on both server-only writes and database integrity constraints.

Explicitly bind:

- same-business batch/row relationship;
- same-business matched/resolved Product relationship;
- stable one-row-per-source-row identity;
- idempotency-key uniqueness;
- committed status/timestamp coherence;
- CREATED/resolution metadata coherence;
- non-destructive retention posture.

Existing Catalog audit remains authoritative for actual Product Truth mutations.

### 4.8 Migration order, verification, and rollback

Lock a deterministic Build Mode migration sequence consistent with `report1.81.md`, including:

1. create tables with final constraints/indexes;
2. immediately neutralize inherited `anon` / `authenticated` default grants;
3. enable RLS;
4. create executable Owner-only authenticated SELECT policies;
5. grant authenticated SELECT only;
6. verify ACLs/grants from authoritative database evidence;
7. behaviorally verify direct authenticated writes fail and cross-business/Employee/Manager reads fail closed;
8. regenerate/update Supabase TypeScript types only after test schema is final;
9. expose server orchestration only after backend persistence contract is verified;
10. run the complete Revision 3.0/updated negative-test matrix on the dedicated test project;
11. production migration only under separate explicit production authority after test evidence.

Rollback language must state that destructive rollback is only safe before real import evidence exists; after evidence exists, dropping/deleting support data requires a separate retention/migration decision.

---

## 5. Required Regression Check

Before finalizing the revised EIS, verify that the corrections do not regress:

- the nineteen-command Catalog surface;
- Security's `SECURITY READY FOR BUILD LOCK` conclusions;
- caller-JWT authorization;
- Owner/business isolation;
- Manager fail-closed / Employee denied posture;
- Reference Cost confidentiality;
- transient raw-file policy;
- duplicate handling;
- preset isolation;
- Inventory/Catalog architecture;
- tax UX decisions;
- no service-role Product Truth mutation;
- no browser privileged credential exposure.

If any correction would require changing one of these locked boundaries, stop and report `CHANGES STILL REQUIRED` rather than silently expanding scope.

---

## 6. Required Output

Revise:

`docs/phase-1-mission-blueprint/active/SB-P-1.11-Build-Now-Gap-Closure-EIS.md`

Advance its revision number appropriately and keep it standalone and implementation-ready.

Create:

`communication/live/report1.82.md`

The report must include:

1. latest `main` SHA used;
2. exact files changed;
3. a direct resolution map for every Supabase finding from `report1.81.md`;
4. the final chosen RLS predicate and why it is executable by `authenticated` under current grants;
5. the final batch/row schema constraint summary;
6. the exact default-grant neutralization rule;
7. the final batch terminal/retryable state contract;
8. migration-order confirmation;
9. regression-check result;
10. explicit confirmation that no implementation occurred.

Final verdict must be exactly one of:

`READY FOR SUPABASE ARCHITECTURE RE-CONFIRMATION`

or

`CHANGES STILL REQUIRED`

---

## 7. Authority Boundary

This instruction does **not** authorize:

- application-code implementation;
- dependency installation;
- migration creation or application;
- schema/RLS/grant changes;
- Supabase writes;
- privileged credential use;
- test-project or production mutation;
- Catalog-command changes;
- Product Truth changes;
- Lovable mutation;
- publish/deploy/domain cutover;
- Build Mode;
- self-merge.

This is documentation-only reconciliation.

---

## 8. Completion Protocol

Claude Code must:

1. work from latest merged `main`;
2. make only the documentation changes authorized above;
3. run documentation/consistency/diff-quality checks;
4. create `communication/live/report1.82.md`;
5. open one completion PR;
6. stop;
7. not self-merge.

After the completion PR is human-reviewed and merged, Mission Control must issue a separate canonical Supabase Backend Architecture re-confirmation instruction before Build Lock can be reconsidered.

---

## Next Logical Step

After this instruction is human-reviewed and merged, deliver the short canonical handoff to Claude Code in VS Code. Claude Code must reconcile the EIS against `report1.81.md`, create `report1.82.md`, open one completion PR, and stop.