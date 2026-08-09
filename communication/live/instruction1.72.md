# SMART BUSINESS MISSION CONTROL

# SB-P-1.11-GC-1 — RSB SECURITY RECONCILIATION

**Instruction ID:** instruction1.72  
**Parent Mission:** SB-P-1.11 — Product Catalog & Pricing  
**Workstream:** SB-P-1.11-GC-1 — Build Now Gap Closure  
**Executing Environment:** Claude Code in VS Code  
**Authorized By:** Mission Control  
**Implementation Authority:** NONE  
**Build Authority:** NONE  
**Mission Type:** Documentation-only Engineering/Security reconciliation  
**Status:** ACTIVE AFTER MERGE

---

## 1. Mission Objective

Revise the current standalone Gap Closure Engineering Implementation Specification only as required to close the three residual security blockers identified in:

`communication/live/report1.78.md`

The required blockers are:

- `RSB-1 — Import-support writes must be server-only`;
- `RSB-2 — Batch commit concurrency primitive must be executable from the chosen architecture`;
- `RSB-3 — Batch audit evidence must be non-forgeable by the ordinary authenticated REST role`.

This is a narrow correction mission.

Do not broaden scope.

Do not implement.

---

## 2. Canonical Inputs

Read directly from the latest merged `main` branch before editing:

1. `docs/phase-1-mission-blueprint/active/SB-P-1.11-Build-Now-Gap-Closure-EIS.md`
2. `communication/live/instruction1.70.md`
3. `communication/live/report1.75.md`
4. `communication/live/report1.76.md`
5. `communication/live/report1.77.md`
6. `communication/live/instruction1.71.md`
7. `communication/live/report1.78.md`
8. the Founder Product Decision Record governing D-001 through D-068;
9. the merged Kerala Market Catalog Glossary;
10. the current canonical repository and current production schema where read-only verification is needed.

Do not rely on chat summaries when repository sources are available.

---

## 3. Mission Control Locked Decisions

The following decisions are controlling for this reconciliation.

### 3.1 Preserve the nineteen-command Catalog boundary

Exactly nineteen public Catalog commands remain locked.

Do not add a twentieth public Catalog command.

Do not add `reactivate_catalog_category`.

Do not create a new public import RPC merely to hide bookkeeping writes.

### 3.2 Keep the two import-support tables

Retain the Revision 2.0 support-table design concept:

- `catalog_import_batches`;
- `catalog_import_rows`.

These remain import orchestration/bookkeeping records, not Catalog Product Truth.

### 3.3 Ordinary authenticated users must not write import-support state directly

Revise the EIS so the intended grant model is:

```sql
GRANT SELECT ON catalog_import_batches, catalog_import_rows TO authenticated;
REVOKE INSERT, UPDATE, DELETE ON catalog_import_batches, catalog_import_rows FROM authenticated;
```

Owner/business-scoped RLS must continue to protect authenticated `SELECT`.

Employees and unauthorized users must receive no import-support rows.

Do not authorize browser-side or ordinary PostgREST writes to either support table.

### 3.4 Caller JWT remains the authorization authority

The TanStack server-function boundary must first authenticate and authorize using the caller's JWT-scoped Supabase client.

It must re-derive:

- actor;
- current business;
- Owner authority;
- Reference Cost authority where applicable;
- any other command-specific authority.

Client-supplied business ID, actor ID, role, permission flags, status, resolved Product ID, timestamps, or lifecycle state must never establish authority.

### 3.5 Narrow server-only bookkeeping client is authorized for design

After successful caller-JWT authentication and authorization, the EIS may specify a **server-only privileged Supabase client solely for the two import-support tables**.

This is authorized only as a bookkeeping persistence mechanism.

It must not become the authorization model.

It must not be used to:

- create/update/delete Catalog Product Truth directly;
- bypass Catalog RPCs;
- call `create_catalog_product` or other Catalog commands on behalf of the actor with elevated authority;
- query arbitrary tables based on client-provided names;
- expose privileged credentials to browser code, client environment variables, logs, responses, downloads, or telemetry.

All Catalog reads and mutations continue through the caller-JWT-scoped client and the existing governed command surface.

### 3.6 Replace the server-layer advisory-lock design

Do not require the TanStack server function itself to execute and hold `pg_advisory_xact_lock(...)` across multiple Supabase/PostgREST/RPC requests.

Replace that Revision 2.0 design with an executable atomic compare-and-set batch-state acquisition model.

At minimum, specify:

1. commit request re-authenticates and re-derives Owner/business;
2. server-only bookkeeping write conditionally transitions the authoritative batch from an allowed pre-commit state such as `previewed` or an explicitly retryable state to `committing`;
3. the conditional update predicates on authoritative `business_id`, `batch_id`, and expected current lifecycle state;
4. exactly one concurrent request can successfully claim the batch;
5. zero-row update causes a re-read and a truthful result such as `IN_PROGRESS`, `ALREADY_COMMITTED`, or another explicitly defined terminal/retry result;
6. each row reuses its already-persisted `row_idempotency_key` when calling existing governed Catalog commands through the caller-JWT client;
7. successful row outcomes are written to support tables only by the server-owned bookkeeping path;
8. retries do not mint replacement row idempotency keys;
9. completed rows are not recreated;
10. terminal batch state is written server-side only.

Define the lifecycle states and legal transitions precisely enough to implement and test.

### 3.7 Preserve audit trust

Revise the EIS so these values are system-produced and not directly mutable through ordinary authenticated REST writes:

- `initiated_by`;
- `resolved_by`;
- `resolved_product_id`;
- row lifecycle status;
- batch lifecycle status;
- `created_at`;
- `resolved_at`;
- `committed_at`;
- correction-resolution outcomes;
- other fields presented as authoritative import audit/retry evidence.

The actual Product ID stored in bookkeeping must come from the governed Catalog command result.

Do not dump whole spreadsheets, unauthorized Reference Cost, or raw database exceptions into general audit evidence.

---

## 4. Required Revision Scope

Update only the documentation necessary to close RSB-1, RSB-2, and RSB-3.

The standalone EIS should become the next explicit revision after Revision 2.0 and must remain implementation-ready.

Correct all superseded wording so the document has one coherent security model. Do not leave contradictory Revision 2.0 statements elsewhere in the EIS.

Specifically reconcile sections dealing with:

- support-table grants;
- RLS expectations;
- server-only bookkeeping writes;
- privileged credential boundary;
- batch state machine;
- commit-once/concurrency handling;
- row idempotency and retry;
- audit-trail trust;
- negative security tests;
- migration order;
- server-function test architecture.

If another EIS section becomes inaccurate because of the correction, update it narrowly for consistency.

---

## 5. Mandatory Security/Engineering Verification Design

The revised EIS must require tests proving at minimum:

- authenticated browser/REST role cannot INSERT, UPDATE, or DELETE import-support rows;
- Owner may SELECT only their own business's authorized import-support rows;
- foreign/nonexistent batch handling does not leak cross-business information;
- Employee and unauthorized users cannot access import-support data;
- privileged bookkeeping credentials never reach browser code;
- caller-JWT authorization occurs before any privileged bookkeeping action;
- privileged bookkeeping path cannot perform arbitrary Catalog mutation;
- two concurrent commit requests result in one authoritative batch claim;
- the losing request returns the correct non-mutating result;
- replay after success does not create a second Product;
- partial retry reuses the same persisted row idempotency key;
- an already successful row is not recreated;
- `resolved_product_id` can only be written from a real governed Catalog command outcome;
- actors and timestamps cannot be forged through ordinary authenticated REST writes;
- audit/retry state remains consistent after partial failure;
- business isolation remains intact.

Do not execute these tests in this documentation-only mission; specify them precisely for Build Mode.

---

## 6. Boundaries That Must Remain Unchanged

Do not change:

- D-001 through D-068 Product Truth;
- D-055 through D-058 bulk-import scope;
- Owner-first Phase 1 authorization;
- Manager fail-closed behavior until approved permission infrastructure exists;
- Employee denial;
- independent Reference Cost authority;
- no automatic duplicate overwrite;
- no automatic Inventory-row creation;
- no unit conversion;
- no compulsory global category taxonomy;
- no auto-categorization;
- no category reactivation under this mission;
- preset isolation as version-controlled application suggestions;
- transient raw-file processing policy;
- parser choices and hostile-file controls unless a direct contradiction with RSB-1 through RSB-3 is proven;
- exactly nineteen public Catalog commands.

---

## 7. Explicitly Not Authorized

This mission does not authorize:

- application-code implementation;
- dependency installation;
- migration creation or application;
- schema creation;
- RLS/grant changes in Supabase;
- production or test database mutation;
- creation/rotation/use of actual privileged credentials;
- Lovable changes;
- Cloud changes;
- publish;
- deploy;
- domain cutover;
- Build Mode;
- self-merge.

Read-only repository/schema inspection is allowed where required to verify the revised design.

---

## 8. Required Output

Claude Code must produce exactly the following mission artifacts:

1. revised:

`docs/phase-1-mission-blueprint/active/SB-P-1.11-Build-Now-Gap-Closure-EIS.md`

2. new completion report:

`communication/live/report1.79.md`

The report must contain a direct resolution map:

| Security Blocker | Required status |
|---|---|
| RSB-1 | `RESOLVED`, `BLOCKED`, or `EVIDENCE GAP` |
| RSB-2 | `RESOLVED`, `BLOCKED`, or `EVIDENCE GAP` |
| RSB-3 | `RESOLVED`, `BLOCKED`, or `EVIDENCE GAP` |

For every `RESOLVED` item, cite the exact revised EIS section and describe the executable implementation boundary.

Also confirm explicitly:

- nineteen-command count preserved;
- no Product Truth change;
- no implementation occurred;
- no dependency installed;
- no migration/schema/RLS change occurred;
- no Lovable/publish/deploy/domain-cutover action occurred.

---

## 9. Required Final Verdict

Return exactly one:

`READY FOR NARROW SECURITY CONFIRMATION`

or

`CHANGES STILL REQUIRED`

or

`STOPPED — EVIDENCE GAP`

Do not return `READY FOR BUILD LOCK` from this mission. Security confirmation remains a separate gate.

---

## 10. Completion Protocol

After completing the documentation-only reconciliation:

1. run appropriate documentation consistency/quality checks;
2. inspect the diff for accidental scope expansion;
3. create one branch/commit set for this mission;
4. open one completion PR;
5. report the PR number and head commit;
6. stop;
7. do not self-merge.

Mission Control will review the merged completion report before creating any subsequent instruction.

---

## Next Logical Step

After the revised EIS and `report1.79.md` are human-reviewed and merged, Mission Control should issue a canonical narrow Security & Permissions Architecture confirmation instruction limited to RSB-1 through RSB-3. Only a positive Security verdict after that confirmation may advance the mission toward Build Lock.
