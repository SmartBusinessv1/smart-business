# SMART BUSINESS MISSION CONTROL

# SB-P-1.11-GC-13 — SUPA-EIS-B1 PHYSICAL-ENFORCEMENT CORRECTION

**Instruction ID:** instruction1.109  
**Parent Mission:** SB-P-1.11 — Product Catalog & Pricing  
**Correction Gate:** GC-13 — Final Supabase B1 Physical-Enforcement Correction  
**Executing Room:** Claude Code / Engineering Architecture  
**Authorized By:** Mission Control  
**Mode:** SPECIFICATION CORRECTION ONLY — NO IMPLEMENTATION  
**Implementation Authority:** NONE  
**Database Migration Authority:** NONE  
**Production Mutation Authority:** NONE  
**Deployment Authority:** NONE  
**Stage C Authority:** NONE

---

## 1. Mission Objective

Correct exactly one remaining Supabase Backend Architecture blocker identified by the merged narrow confirmation report:

`communication/live/report1.117.md`

The only authorized blocker is:

`SUPA-EIS-B1 — privileged database-level lifecycle/immutability enforcement is incomplete.`

The six-state Parser Upload Lease lifecycle itself is already accepted. `SUPA-EIS-B2`, `SUPA-EIS-B3`, and `SUPA-EIS-B4` are merged PASS findings and must not be reopened.

Required output:

`communication/live/report1.118.md`

This mission is specification correction only. Do not modify prior reports.

---

## 2. Canonical Inputs

Use current merged `main` as repository truth.

Read in full:

- `communication/live/instruction1.109.md`
- `communication/live/report1.117.md`
- `communication/live/instruction1.108.md`
- `communication/live/report1.116.md`
- `communication/live/report1.110.md`
- `communication/live/report1.108.md`
- `communication/live/report1.115.md`

Use relevant repository evidence to ensure the physical-enforcement design fits existing Supabase conventions, including where useful:

- `supabase/migrations/20260727000000_reconcile_default_grants.sql`
- `supabase/migrations/20260810120000_sb_p_1_11_gc_1_catalog_import_support_schema.sql`
- `src/integrations/supabase/client.server.ts`

Read other repository files only where needed to resolve this B1 physical-enforcement contract.

---

## 3. Accepted B1 Baseline — Do Not Redesign

The following parts of B1 are already accepted and shall remain unchanged:

- lifecycle states: `ISSUED`, `UPLOADED`, `CLAIMED`, `CONSUMED`, `FAILED`, `EXPIRED`;
- `ISSUED → UPLOADED`;
- `UPLOADED → CLAIMED` as the sole one-use dispatch-authorization transition;
- `CLAIMED → CONSUMED` after successful Lambda result plus required Smart Business validation;
- `CLAIMED → FAILED` after resolved failure;
- eligible pre-dispatch states may become `EXPIRED` only under the accepted expiry rules;
- terminal states are one-way and unreopenable;
- authoritative `lease_id` plus server-derived `business_id` binding;
- non-expiry predicate on upload confirmation and dispatch claim;
- exactly one successful dispatch claim;
- no same-lease Lambda re-dispatch after claim;
- support state remains transport/security metadata only, never Product Truth.

Do not change the six-state lifecycle to solve the remaining physical-enforcement defect.

---

## 4. Exact Remaining Defect

`report1.117.md` accepted the application-level lifecycle but found that the selected RLS-bypassing privileged bookkeeping path can still physically violate the contract through accidental direct database mutation.

The correction must close all three remaining enforcement obligations:

1. **Timestamp/state coherence at the database boundary**
   - `confirmed_at` must be absent in `ISSUED` and present once the lease has successfully entered or passed through `UPLOADED`;
   - `claimed_at` must be absent before `CLAIMED` and present once the lease has successfully entered or passed through `CLAIMED`;
   - any retained `dispatched_at` diagnostic timestamp must be coherent with a previously successful claim and must never itself create dispatch authority;
   - `terminal_at` must be present exactly for terminal states and absent for non-terminal states;
   - `failure_reason` must remain coherent with the accepted failure-state contract and bounded to sanitized internal codes.

2. **Authority-field immutability after issuance**
   Database enforcement must prevent later mutation of authority-bearing lease fields, including at minimum:
   - `business_id`;
   - `guard_token`;
   - `object_key`;
   - `expected_byte_length`;
   - `expected_sha256_b64`;
   - `created_by`;
   - `issued_at`;
   - `expires_at`.

3. **Illegal lifecycle mutation prevention**
   The privileged bookkeeping boundary must not be able to accidentally:
   - skip required states;
   - reopen terminal states;
   - move backward in the lifecycle;
   - create `CLAIMED` without the accepted atomic one-use claim predicate;
   - set terminal outcome fields without a legal source state;
   - bypass tenant/state/non-expiry predicates through unrestricted direct DML.

Application discipline alone is not sufficient.

---

## 5. Required Physical-Enforcement Architecture

Lock the smallest database-enforced mechanism that satisfies Section 4 and is compatible with the repository's Supabase posture.

Acceptable architecture families include, for example:

### Option A — Narrow transition operations with direct privileged mutation removed

A bounded set of narrowly constrained database transition helpers may become the only authorized lifecycle mutation surface if the contract also removes direct service-role table mutation authority for lifecycle/authority fields.

If this architecture is selected, specify:

- the exact transition helper set;
- exact source-state / target-state predicates;
- authoritative lease/business predicates;
- non-expiry predicates where required;
- timestamp effects controlled by the database operation rather than arbitrary caller values;
- bounded failure-code input rules;
- how direct table DML is revoked or otherwise made unavailable to the normal privileged bookkeeping path;
- how table/function grants remain compatible with the already-PASS B4 boundary;
- safe `SECURITY DEFINER` posture and fixed `search_path` where applicable;
- why no browser, Manager, Employee, or unrelated service path gains authority.

### Option B — Database constraint/trigger enforcement plus narrowly bounded privileged DML

A database-level invariant/transition enforcement mechanism may retain a narrow direct service-role mutation path only if the database itself rejects illegal lifecycle changes and authority-field mutation.

If this architecture is selected, specify:

- exact invariant checks;
- exact legal transition matrix;
- authority-field immutability enforcement;
- database-controlled or database-validated timestamp coherence;
- failure-code coherence;
- how the trigger/constraint path cannot be bypassed by the selected service-role bookkeeping client;
- how privilege posture remains consistent with B4 PASS.

Equivalent architecture is acceptable if it proves the same guarantees with less complexity.

Do not introduce a general workflow engine, queue, scheduler, event bus, second backend, or unrelated abstraction.

---

## 6. Required Database-Level Acceptance Contract

The correction report must make the future migration contract precise enough that the final Supabase reviewer can determine PASS/FAIL without inventing missing semantics.

At minimum lock:

1. The physical schema invariants for each of the six states.
2. The complete legal transition matrix.
3. The exact database mechanism that rejects every illegal transition.
4. The exact mechanism making authority-bearing fields immutable after row issuance.
5. The exact source of transition timestamps and whether callers can supply them.
6. The exact rule for `dispatched_at`, if retained.
7. The exact bounded `failure_reason`/failure-code contract.
8. The exact privilege model for lifecycle mutation after B1 correction.
9. How the selected mechanism coexists with B4's already-PASS browser/service-role boundary.
10. How direct privileged bookkeeping cannot bypass the accepted lifecycle contract accidentally.
11. How zero-row / rejected transitions are surfaced fail-closed without creating Product Truth.
12. How migration ordering ensures enforcement exists before the support-state path becomes usable.

Illustrative SQL is allowed only as specification evidence. No SQL or migration may be created or executed in this mission.

---

## 7. Safety Cases to Prove at Specification Level

The corrected physical contract must fail closed for:

- direct attempt to mutate `business_id` after issuance;
- direct attempt to mutate `guard_token` after issuance;
- direct attempt to mutate object key / expected size / checksum / creator / issued/expiry authority fields;
- `ISSUED → CLAIMED` state jump;
- `ISSUED → CONSUMED` state jump;
- `UPLOADED → CONSUMED` without `CLAIMED`;
- terminal state → non-terminal state;
- terminal state → different terminal state;
- backward transition such as `CLAIMED → UPLOADED`;
- `CLAIMED` without coherent `claimed_at`;
- `ISSUED` with `confirmed_at` already populated;
- terminal state without `terminal_at`;
- non-terminal state with `terminal_at`;
- invalid/free-text/raw-provider `failure_reason` where only bounded codes are allowed;
- arbitrary privileged update that attempts to bypass the intended transition surface.

Also confirm the accepted B2 guarantee remains intact: no selected B1 enforcement design may create a second same-lease dispatch authority.

---

## 8. Closed Findings — Do Not Reopen

The following merged findings remain closed:

- `SUPA-EIS-B2 — PASS`;
- `SUPA-EIS-B3 — PASS`;
- `SUPA-EIS-B4 — PASS`;
- cross-blocker dispatch/idempotency/failure integrity — PASS except only to confirm the B1 correction does not regress it;
- prior Stage B data-minimization PASS.

Do not re-review them as independent subjects.

---

## 9. Frozen Decisions — Preserve Without Modification

Preserve:

- Owner-only Phase 1 import authority;
- exactly nineteen public Catalog commands — no twentieth command;
- Catalog / Inventory truth separation;
- D-047 and D-068;
- BKR-1 through BKR-5;
- EC-2 and its accepted guard/token/fixed-window contract;
- EC-3 parse-before-write ordering;
- AWS Lambda narrow parser runtime;
- standard Lambda default compute;
- `nodejs24.x`;
- `ap-south-1`;
- 2,048 MB memory baseline;
- 15-second Lambda timeout;
- 10-second parser budget;
- finite reserved concurrency as defense-in-depth;
- transient private S3 parser-ingress;
- IAM Roles Anywhere;
- `ChecksumMode = ENABLED`;
- Papa Parse, ExcelJS, and `node:zlib`;
- all parser input/shape limits;
- 4,194,304-byte serialized-response ceiling;
- deterministic pre-stream `RESPONSE_TOO_LARGE`;
- corrected Infrastructure B1 acceptance matrix;
- all Infrastructure PASS findings in `report1.115.md`;
- Product Truth remains governed only by existing Founder Workflow and the nineteen-command Catalog boundary.

No AWS redesign is authorized.

---

## 10. Data Minimization

The B1 enforcement correction may introduce only database metadata/mechanisms strictly necessary to enforce the accepted lease contract.

It must not store:

- raw merchant file content;
- CSV/XLSX rows or cells;
- raw provider errors;
- AWS credentials;
- private key material;
- additional merchant business data unrelated to lease enforcement.

Do not weaken the merged data-minimization PASS.

---

## 11. Required Output Structure

Create only:

`communication/live/report1.118.md`

The report must contain at minimum:

1. Mission and authority.
2. Exact merged `main` SHA reviewed.
3. Exact B1 physical-enforcement mechanism selected.
4. Exact six-state database invariant table.
5. Exact legal transition matrix.
6. Exact timestamp/state coherence contract.
7. Exact authority-field immutability contract.
8. Exact privilege/mutation surface after correction.
9. Exact illegal-transition prevention contract.
10. Safety-case matrix covering Section 7.
11. Confirmation B2/B3/B4 remained closed PASS findings.
12. Confirmation Product Truth and frozen decisions remained unchanged.
13. Confirmation no implementation/database/environment mutation occurred.
14. Final disposition.
15. Any remaining blocker.

Allowed final dispositions only:

- `LAMBDA PARSER EIS SUPABASE B1 PHYSICAL-ENFORCEMENT CORRECTION — READY FOR FINAL BACKEND CONFIRMATION`
- `LAMBDA PARSER EIS SUPABASE B1 PHYSICAL-ENFORCEMENT CORRECTION — STOPPED — UNRESOLVED BACKEND BLOCKER`

Do not claim Stage B PASS. Only Supabase Backend Architecture may issue that verdict in the later final B1-only confirmation.

---

## 12. Prohibited Scope

Do not:

- modify prior reports;
- implement application/parser code;
- create or execute SQL/migrations;
- mutate Supabase;
- create/modify live tables, functions, RPCs, triggers, constraints, RLS, grants, or default privileges;
- modify AWS/S3/IAM architecture or resources;
- execute project AWS commands;
- add/update dependencies;
- change Lovable;
- change Product Truth;
- change employee/manager permissions;
- add a twentieth Catalog command;
- weaken parser/input/runtime limits;
- reopen B2/B3/B4;
- reopen Infrastructure PASS decisions;
- enter EIS lock, Build Lock, or Build Mode;
- deploy;
- publish;
- touch production;
- begin Stage C.

---

## 13. Repository Discipline

The executing room shall:

- verify current merged `main` before work;
- create only `communication/live/report1.118.md`;
- use a protected mission branch and pull request;
- preserve unrelated local changes untouched;
- use exact-file staging only;
- not use `git add .`;
- run the applicable Markdown Quality Gate;
- inspect staged content for secret-like material;
- report exact reviewed `main` SHA, commit SHA, branch, and PR;
- not merge its own PR.

---

## 14. Gate After Correction

If `report1.118.md` returns:

`LAMBDA PARSER EIS SUPABASE B1 PHYSICAL-ENFORCEMENT CORRECTION — READY FOR FINAL BACKEND CONFIRMATION`

and is human-reviewed and merged, Mission Control shall authorize a separate final B1-only Supabase Backend Architecture confirmation.

That confirmation must use a new instruction and report number, must not reopen B2/B3/B4, and must not begin Stage C during the confirmation mission.

Only a later human-reviewed and merged:

`LAMBDA PARSER EIS SUPABASE BACKEND REVIEW — PASS`

will unlock Stage C under `communication/live/instruction1.102.md`.

---

## 15. Mission Control Decision

`SB-P-1.11-GC-13 — SUPA-EIS-B1 PHYSICAL-ENFORCEMENT CORRECTION AUTHORIZED`

Current authorized next action after human merge of this instruction:

**Claude Code / Engineering Architecture → `communication/live/report1.118.md`**
