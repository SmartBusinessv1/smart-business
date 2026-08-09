# SMART BUSINESS MISSION CONTROL

# SB-P-1.11-GC-1 — SUPABASE BACKEND ARCHITECTURE CONFIRMATION

**Instruction ID:** instruction1.74  
**Parent Mission:** SB-P-1.11 — Product Catalog & Pricing  
**Workstream:** SB-P-1.11-GC-1 — Build Now Gap Closure  
**Executing Room:** Supabase Backend Architecture  
**Authorized By:** Mission Control  
**Implementation Authority:** NONE  
**Build Authority:** NONE  
**Status:** ACTIVE AFTER MERGE

---

## 1. Purpose

Mission Control has completed the Engineering and Security design-reconciliation sequence for the SB-P-1.11-GC-1 Build Now Gap Closure.

The latest Security & Permissions Architecture confirmation in:

`communication/live/report1.80.md`

returned:

`SECURITY READY FOR BUILD LOCK`

However, the revised standalone EIS introduces two new persistent Supabase support tables and a narrowly bounded server-only privileged bookkeeping write path.

Before Mission Control may issue Build Lock, Supabase Backend Architecture must independently confirm that the exact database design is coherent, executable, least-privilege, migration-safe, and compatible with the current canonical Supabase architecture.

This is the final backend-architecture design gate. It is a review/confirmation mission only.

Do not implement.

---

## 2. Canonical Inputs

Review the latest merged `main` and read these canonical sources directly:

1. `docs/phase-1-mission-blueprint/active/SB-P-1.11-Build-Now-Gap-Closure-EIS.md` — Revision 3.0;
2. `communication/live/report1.77.md`;
3. `communication/live/report1.78.md`;
4. `communication/live/report1.79.md`;
5. `communication/live/report1.80.md`;
6. `02_Supabase_Architecture_Framework.md` or its canonical repository equivalent if present;
7. current Supabase migrations/schema/RLS/grants relevant to businesses, transactions, Catalog, and server-only service-role usage;
8. `src/integrations/supabase/client.server.ts` and `src/integrations/supabase/auth-middleware.ts` where needed to validate the proposed runtime boundary.

Use repository and schema evidence, not assumption.

---

## 3. Scope — Confirm Only The New Backend Persistence Boundary

Review only the backend/database architecture required by Revision 3.0 for:

- `catalog_import_batches`;
- `catalog_import_rows`;
- their keys, constraints, status/lifecycle fields, timestamps, foreign keys, indexes, and retention implications;
- authenticated SELECT grants and RLS behavior;
- revocation of authenticated INSERT/UPDATE/DELETE;
- server-only privileged INSERT/UPDATE behavior;
- atomic compare-and-set batch acquisition;
- retry/idempotency persistence;
- audit-evidence integrity;
- business isolation;
- migration ordering and rollback safety;
- compatibility with the existing nineteen-command Catalog architecture.

Do not reopen already-accepted Product, UX, parser, preset, Inventory-link, tax-settings, or general Security decisions unless a concrete backend contradiction is discovered.

---

## 4. Required Architecture Confirmations

### 4.1 Exact table design

Confirm that the proposed schemas for `catalog_import_batches` and `catalog_import_rows` are complete enough for implementation.

Verify:

- primary keys;
- business foreign key;
- actor references where applicable;
- batch-to-row relationship;
- lifecycle/status constraints;
- row numbering/stable row identity;
- persisted row idempotency key uniqueness;
- resolved Product reference rules;
- timestamp defaults and nullability;
- correction/quarantine metadata minimization;
- indexes required for business-scoped reads, batch lookup, conditional claim, row retry, and duplicate-safe operation;
- delete/archive/retention behavior, including whether cascade behavior would weaken auditability.

If any column, constraint, index, FK, status check, or lifecycle invariant is underspecified, identify it precisely.

### 4.2 Grants and RLS

Confirm the final access model:

- `authenticated` receives SELECT only;
- authenticated INSERT/UPDATE/DELETE are revoked;
- authenticated SELECT is business/Owner scoped under RLS;
- Manager remains fail-closed until approved permission infrastructure exists;
- Employee import/support-table access remains denied;
- cross-business rows remain undiscoverable;
- service-role bypass of RLS is acknowledged and bounded to the server-only bookkeeping path.

Confirm the exact policies/grants needed or state the precise correction required.

### 4.3 Server-only privileged bookkeeping boundary

Confirm that use of the existing server-only service-role client for fixed writes to exactly these two support tables is architecturally acceptable provided:

- caller JWT authentication/Owner/business authority is established first;
- privileged client never determines actor authorization;
- privileged client never mutates Catalog Product Truth;
- privileged client never invokes or substitutes for any of the nineteen Catalog commands;
- browser/client input cannot select arbitrary table, column, actor, business, lifecycle state, resolved Product ID, or timestamps;
- business ID and actor ID used in bookkeeping writes are server-derived;
- service-role credential never reaches client bundles, responses, logs, downloads, or telemetry.

Return `CONFIRMED` or a concrete change request.

### 4.4 Atomic batch acquisition

Verify that the proposed compare-and-set claim is executable and concurrency-safe:

```text
UPDATE catalog_import_batches
SET status = 'committing', ...
WHERE id = <batch_id>
  AND business_id = <server-derived business_id>
  AND status IN ('previewed', 'failed')
RETURNING ...
```

Confirm:

- exactly one concurrent claimant can acquire the transition;
- zero-row update can be distinguished safely by a re-read;
- no losing claimant reaches Catalog mutation;
- retryable `failed` semantics are internally consistent;
- successful row idempotency keys remain stable across retry;
- terminal states cannot be silently reopened;
- batch state cannot claim success before row outcomes justify it.

### 4.5 Migration sequence

Define or confirm the safe implementation order for Build Mode, including at minimum:

1. create support tables and constraints;
2. enable RLS;
3. create SELECT policies;
4. apply grants/revokes;
5. verify authenticated direct writes fail;
6. only then expose server orchestration that depends on the tables;
7. run test-project verification before any production migration;
8. production migration only after test evidence and explicit mission authority.

If a different sequence is safer, specify it.

### 4.6 No public command expansion

Confirm that this design introduces:

- no twentieth public Catalog command;
- no new public import RPC merely to conceal bookkeeping writes;
- no change to the nineteen existing Catalog command contracts;
- no new direct browser Catalog-table mutation path.

---

## 5. Mandatory Negative-Test Design Check

Confirm Revision 3.0 plus the backend design can support these tests during Build Mode:

1. authenticated browser INSERT to `catalog_import_batches` denied;
2. authenticated browser UPDATE to `catalog_import_batches` denied;
3. authenticated browser DELETE to `catalog_import_batches` denied;
4. authenticated browser INSERT to `catalog_import_rows` denied;
5. authenticated browser UPDATE to `catalog_import_rows` denied;
6. authenticated browser DELETE to `catalog_import_rows` denied;
7. cross-business SELECT denied/indistinguishable;
8. Employee support-table access/import denied;
9. Manager import denied until real permission infrastructure exists;
10. privileged bookkeeping write with browser-supplied foreign business ID cannot redirect scope;
11. privileged bookkeeping write with browser-supplied actor ID cannot forge actor evidence;
12. privileged bookkeeping write cannot target arbitrary table/column;
13. concurrent batch claims yield at most one winner;
14. losing claimant performs zero Catalog mutation;
15. retry reuses original row idempotency key;
16. terminal batch/audit state cannot be forged through authenticated REST;
17. `resolved_product_id` is written only from a real governed Catalog-command result;
18. service-role credential is absent from browser bundle, client env, logs, responses, downloads, and telemetry.

Do not execute write tests under this review mission. Confirm design adequacy and identify any missing test prerequisite.

---

## 6. Required Output

Create:

`communication/live/report1.81.md`

The report must include:

- repository HEAD reviewed;
- exact EIS revision reviewed;
- table/schema confirmation;
- grants/RLS confirmation;
- server-only privileged boundary confirmation;
- atomic-claim confirmation;
- migration-order confirmation;
- negative-test design assessment;
- any residual backend blocker or evidence gap;
- a concise Build Lock recommendation.

Final verdict must be exactly one of:

`SUPABASE ARCHITECTURE READY FOR BUILD LOCK`

or

`SUPABASE ARCHITECTURE CHANGES REQUIRED BEFORE BUILD LOCK`

or

`SUPABASE ARCHITECTURE STOPPED — EVIDENCE GAP`

Open one completion PR and stop.

Do not self-merge.

---

## 7. Locked Boundaries

This mission does not authorize:

- implementation;
- dependency installation;
- migration creation or application;
- schema/RLS/grant changes;
- Supabase writes;
- privileged credential creation, rotation, or use;
- Catalog command changes;
- a twentieth public Catalog command;
- Product Truth changes;
- Lovable changes;
- publish/deploy/domain cutover;
- Build Mode.

Human review and merge remain required.

---

## 8. Mission Control Gate Rule

Mission Control must not issue SB-P-1.11-GC-1 Build Lock until both are true:

1. `communication/live/report1.80.md` remains `SECURITY READY FOR BUILD LOCK`; and
2. this Supabase Backend Architecture confirmation returns `SUPABASE ARCHITECTURE READY FOR BUILD LOCK`.

If the backend review returns changes required or an evidence gap, Mission Control must reconcile that first.

---

## Next Logical Step

After this instruction is human-reviewed and merged, Founder should deliver the canonical handoff to the Supabase Backend Architecture room. Its completion report must be merged before Mission Control performs the final GC-1 Build Lock evaluation.