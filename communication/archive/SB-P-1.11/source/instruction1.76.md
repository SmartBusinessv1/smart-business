# SMART BUSINESS MISSION CONTROL

# SB-P-1.11-GC-1 — SUPABASE BACKEND ARCHITECTURE RE-CONFIRMATION

**Instruction ID:** instruction1.76  
**Parent Mission:** SB-P-1.11 — Product Catalog & Pricing  
**Workstream:** SB-P-1.11-GC-1 — Build Now Gap Closure  
**Executing Room:** Supabase Backend Architecture  
**Authorized By:** Mission Control  
**Mission Type:** Architecture re-confirmation only  
**Implementation Authority:** NONE  
**Build Authority:** NONE

---

## 1. Mission Objective

Perform a narrow Supabase Backend Architecture re-confirmation of Revision 4.0 of:

`docs/phase-1-mission-blueprint/active/SB-P-1.11-Build-Now-Gap-Closure-EIS.md`

The purpose is to verify that the corrections made under `communication/live/instruction1.75.md` and reported in `communication/live/report1.82.md` fully close the backend architecture findings recorded in `communication/live/report1.81.md`.

This is the final Supabase architecture design gate before Mission Control may consider GC-1 Build Lock.

Do not implement.

---

## 2. Canonical Inputs

Review the latest merged `main` and use, at minimum:

1. `docs/phase-1-mission-blueprint/active/SB-P-1.11-Build-Now-Gap-Closure-EIS.md` — Revision 4.0;
2. `communication/live/report1.81.md` — prior Supabase Backend Architecture confirmation;
3. `communication/live/instruction1.75.md` — correction reconciliation instruction;
4. `communication/live/report1.82.md` — Claude Code correction reconciliation report;
5. `communication/live/report1.80.md` — standing Security verdict;
6. `merge/active/02_Supabase_Architecture_Framework.md`;
7. current relevant committed Supabase migrations and runtime integration code, read-only, where needed to validate compatibility.

Do not rely on memory where the repository can provide direct evidence.

---

## 3. Re-Confirmation Scope

Confirm every material correction from `report1.81.md`, including:

### 3.1 Table contract

Verify the final physical contract for:

- `catalog_import_batches`;
- `catalog_import_rows`.

Confirm:

- required `NOT NULL` declarations;
- closed value checks;
- `row_count >= 0`;
- batch committed-state / `committed_at` coherence;
- `row_number >= 1`;
- stable row uniqueness;
- idempotency-key uniqueness;
- status-coupled resolution metadata;
- bounded correction-reason vocabulary;
- required indexes;
- no destructive cascade inconsistent with retained audit evidence.

### 3.2 Tenant-binding integrity

Confirm that the database contract makes cross-business bookkeeping mismatches structurally invalid, including:

- business-bound batch/row relationship;
- business-bound matched Product relationship;
- business-bound resolved Product relationship;
- support for the required composite foreign keys under the actual referenced table constraints.

### 3.3 Grants and default ACL neutralization

Confirm the migration contract correctly accounts for the repository's current default privileges.

Specifically verify that:

- inherited `anon` / `authenticated` table grants are neutralized explicitly;
- `anon` receives no support-table access;
- `authenticated` receives SELECT only;
- authenticated INSERT/UPDATE/DELETE remain denied;
- `service_role` remains available only for the narrowly defined server-side bookkeeping boundary.

Do not assume the post-migration ACL state; confirm the specification includes authoritative grant verification.

### 3.4 RLS executability

Confirm that the final Owner-only authenticated SELECT policy:

- is actually executable under current repository grants;
- does not require broadening `catalog_internal` exposure;
- preserves business isolation;
- exposes no Manager/Employee access in this mission;
- makes foreign and nonexistent resources indistinguishable where required.

### 3.5 Privileged bookkeeping boundary

Confirm Revision 4.0 still preserves the accepted server-only boundary:

- caller JWT is validated first;
- Owner/business authority is independently re-derived;
- privileged client never decides merchant authorization;
- privileged writes are limited to the two import-support tables;
- no dynamic arbitrary table/column selection from client input;
- no Catalog Product Truth mutation through service role;
- no service-role invocation of the nineteen Catalog commands;
- no browser exposure of privileged credentials;
- database constraints fail closed against tenant-binding mistakes where practical.

### 3.6 Atomic claim / retry / state machine

Confirm that:

- the atomic compare-and-set batch claim is executable through the selected architecture;
- at most one claimant reaches `committing`;
- losing claims perform no Catalog mutation;
- persisted row idempotency keys are reused on retries;
- batch `failed` versus `committed` semantics are now unambiguous;
- a batch reaches `committed` only when no retryable `FAILED` row remains;
- once committed, the batch is never reopened.

### 3.7 Audit integrity

Confirm that Revision 4.0 protects import lifecycle evidence from both:

1. ordinary authenticated REST forgery; and
2. avoidable internal incoherence under the privileged bookkeeping path.

Verify the relevant database constraints and non-destructive retention posture.

### 3.8 Migration ordering and verification

Confirm the EIS gives a deterministic Build Mode order covering:

- table creation with final constraints and indexes;
- inherited-grant neutralization;
- RLS enablement;
- executable Owner-only SELECT policy creation;
- narrow authenticated grant application;
- ACL verification;
- behavioral negative testing;
- type regeneration only after test schema is final;
- server orchestration exposure only after persistence verification;
- full dedicated-test-project verification;
- production migration only under separate explicit authority.

Confirm rollback language remains safe once real import evidence exists.

---

## 4. Locked Boundaries That Must Remain Unchanged

The re-confirmation must verify that Revision 4.0 does not alter these locked boundaries:

- exactly nineteen public Catalog commands;
- no twentieth public Catalog/import command;
- no Product Truth redesign;
- no `reactivate_catalog_category` command;
- no automatic duplicate overwrite;
- no automatic Inventory-row creation;
- no global mutable Category taxonomy;
- no unit conversion;
- Owner import allowed;
- Manager remains fail-closed until approved permission infrastructure exists;
- Employee import denied;
- Reference Cost remains independently authorized and protected;
- raw upload remains transient/unretained;
- caller-JWT client remains the Catalog authority path;
- service role remains bookkeeping-only;
- Security's `SECURITY READY FOR BUILD LOCK` conclusions remain unregressed.

---

## 5. Evidence Expectations

This is a design re-confirmation, not a Build Mode execution.

Use read-only repository inspection and, where already available and appropriate, read-only architecture evidence to verify that the proposed contract is executable against the current repository baseline.

Do not create or apply migrations.

Do not mutate test or production Supabase.

Do not install dependencies.

Do not use privileged credentials for writes.

---

## 6. Required Resolution Matrix

For every prior backend architecture finding from `report1.81.md`, return one status:

- `VERIFIED RESOLVED`
- `CHANGE REQUIRED`
- `EVIDENCE GAP`

The report must directly map each finding to the exact Revision 4.0 EIS section that resolves it.

If any finding is not `VERIFIED RESOLVED`, Build Lock remains blocked.

---

## 7. Required Output

Create:

`communication/live/report1.83.md`

The report must contain:

1. latest `main` SHA reviewed;
2. exact EIS revision reviewed;
3. direct resolution matrix for every material `report1.81.md` finding;
4. table/schema confirmation;
5. tenant-binding integrity confirmation;
6. grants/default-ACL confirmation;
7. RLS executability confirmation;
8. privileged bookkeeping boundary confirmation;
9. atomic claim/retry/state-machine confirmation;
10. audit-integrity confirmation;
11. migration-order/rollback confirmation;
12. regression check against the locked nineteen-command and Security boundaries;
13. residual blockers or evidence gaps, if any;
14. explicit confirmation that no implementation occurred;
15. final verdict;
16. Next Logical Step.

---

## 8. Allowed Final Verdicts

Return exactly one:

`SUPABASE ARCHITECTURE READY FOR BUILD LOCK`

or

`SUPABASE ARCHITECTURE CHANGES REQUIRED BEFORE BUILD LOCK`

or

`SUPABASE ARCHITECTURE STOPPED — EVIDENCE GAP`

Do not return Build Mode authorization.

---

## 9. Authority Boundary

This instruction authorizes architecture re-confirmation only.

It does **not** authorize:

- implementation;
- dependency installation;
- migration creation or application;
- schema/RLS/grant mutation;
- Supabase data writes;
- privileged credential use for mutation;
- Catalog command changes;
- Product Truth changes;
- Lovable changes;
- publish/deploy/domain cutover;
- Build Mode;
- self-merge.

Exactly nineteen public Catalog commands remain locked.

---

## 10. Communication Protocol

This instruction must be human-reviewed and merged into `main` before it is delivered to the Supabase Backend Architecture room.

The resulting `communication/live/report1.83.md` must be committed through a human-reviewed PR and merged before Mission Control relies on it for the final combined GC-1 gate decision.

No self-approval. No self-merge.

---

## 11. Gate Rule

Mission Control must not issue GC-1 Build Lock unless:

1. the standing Security verdict remains `SECURITY READY FOR BUILD LOCK`; and
2. this re-confirmation returns `SUPABASE ARCHITECTURE READY FOR BUILD LOCK`.

Only after both conditions are satisfied may Mission Control perform the final combined gate check and issue a separate canonical Build Lock / implementation authorization.

---

## 12. Next Logical Step

Human-review and merge the PR containing this instruction. After merge, deliver the canonical instruction to the Supabase Backend Architecture room. That room must create `communication/live/report1.83.md`, open one completion PR, and stop. Mission Control will evaluate the merged result before any Build Lock is issued.
