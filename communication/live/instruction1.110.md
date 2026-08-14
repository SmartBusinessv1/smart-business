# SMART BUSINESS MISSION CONTROL

# SB-P-1.11-GC-14 — FINAL SUPABASE B1 BACKEND CONFIRMATION

**Instruction ID:** instruction1.110  
**Parent Mission:** SB-P-1.11 — Product Catalog & Pricing  
**Confirmation Gate:** GC-14 — Final B1-only Supabase Backend Confirmation  
**Executing Room:** Supabase Backend Architecture  
**Authorized By:** Mission Control  
**Mode:** SPECIALIST CONFIRMATION ONLY — NO IMPLEMENTATION  
**Implementation Authority:** NONE  
**Database Migration Authority:** NONE  
**Production Mutation Authority:** NONE  
**Stage C Authority:** NONE

---

## 1. Mission Objective

Perform the final Supabase Backend Architecture confirmation of only the single remaining Stage B blocker:

`SUPA-EIS-B1 — privileged database-level lifecycle/immutability enforcement`.

The correction to confirm is contained in:

`communication/live/report1.118.md`

The prior narrow confirmation is:

`communication/live/report1.117.md`

Required output:

`communication/live/report1.119.md`

This confirmation is limited strictly to B1 physical enforcement. `SUPA-EIS-B2`, `SUPA-EIS-B3`, and `SUPA-EIS-B4` are already merged PASS findings and must not be reopened.

---

## 2. Canonical Inputs

Use current merged `main` as repository truth.

Read in full:

- `communication/live/instruction1.110.md`
- `communication/live/instruction1.109.md`
- `communication/live/report1.118.md`
- `communication/live/report1.117.md`
- `communication/live/report1.116.md`
- `communication/live/report1.110.md`
- `communication/live/report1.108.md`
- `communication/live/report1.115.md`

Use repository evidence only where needed to validate compatibility with the current Supabase posture, including:

- `supabase/migrations/20260727000000_reconcile_default_grants.sql`
- `supabase/migrations/20260810120000_sb_p_1_11_gc_1_catalog_import_support_schema.sql`
- `src/integrations/supabase/client.server.ts`

Do not re-review unrelated architecture.

---

## 3. Accepted Baseline — Do Not Redesign

The following remain accepted and frozen:

- lease states: `ISSUED`, `UPLOADED`, `CLAIMED`, `CONSUMED`, `FAILED`, `EXPIRED`;
- `ISSUED → UPLOADED`;
- `UPLOADED → CLAIMED` as the sole one-use dispatch-authorization transition;
- `CLAIMED → CONSUMED`;
- `CLAIMED → FAILED`;
- eligible pre-dispatch expiry only under the accepted expiry rules;
- no same-lease re-dispatch after claim;
- authoritative `lease_id` + server-derived `business_id` binding;
- B2 PASS;
- B3 PASS;
- B4 PASS;
- support state is never Product Truth.

Do not modify these decisions during confirmation.

---

## 4. Final B1 Confirmation Scope

Confirm whether `report1.118.md` fully closes the physical-enforcement blocker from `report1.117.md`.

Review only the following.

### 4.1 Mutation surface

Confirm that the selected design makes normal privileged bookkeeping unable to bypass the lifecycle contract accidentally.

Verify:

- direct `service_role` write authority on `parser_upload_leases` is removed/narrowed as specified;
- the normal privileged path cannot directly `INSERT`, `UPDATE`, or `DELETE` lease rows except through the explicitly authorized creation/binding path and the narrow lifecycle operations defined by the EIS;
- lifecycle changes are forced through narrow database operations whose SQL shape is fixed by the database, not arbitrary caller-provided DML;
- no browser, Manager, Employee, or unrelated service path gains lease mutation authority;
- the design remains compatible with the already-PASS B4 privilege boundary.

### 4.2 Transition helper contract

Confirm the exact helper surface is sufficient and no broader mutation path is required.

At minimum verify the specified operations for:

- confirm upload;
- claim dispatch;
- mark actual dispatch attempt if `dispatched_at` is retained;
- complete successfully;
- fail with bounded internal code;
- expire an eligible pre-dispatch lease.

For each state-changing operation confirm:

- authoritative lease identity predicate;
- server-derived business identity predicate;
- exact source state;
- exact target state;
- non-expiry where required;
- database-owned timestamp effects;
- zero-row/rejected transition fails closed;
- no authority-bearing field can be modified by the operation.

### 4.3 Six-state database invariants

Confirm the database-level invariant contract is complete for all six states.

Verify coherence of:

- `confirmed_at`;
- `claimed_at`;
- `dispatched_at`, if retained;
- `terminal_at`;
- `failure_reason`.

The contract must reject incoherent combinations even under privileged execution.

### 4.4 Authority-field immutability

Confirm database privilege/mutation-surface design makes these fields immutable after issuance:

- `business_id`;
- `guard_token`;
- `object_key`;
- `expected_byte_length`;
- `expected_sha256_b64`;
- `created_by`;
- `issued_at`;
- `expires_at`.

Application discipline alone is not sufficient.

### 4.5 Illegal transition prevention

Confirm the physical contract rejects, by construction or database enforcement:

- `ISSUED → CLAIMED`;
- `ISSUED → CONSUMED`;
- `UPLOADED → CONSUMED`;
- `CLAIMED → UPLOADED`;
- terminal → non-terminal;
- terminal → different terminal;
- any backward transition;
- `CLAIMED` without the valid one-use claim operation;
- terminal outcome without a legal source state;
- arbitrary privileged direct state mutation.

### 4.6 Failure-code contract

Confirm `failure_reason` is constrained to a finite, sanitized internal set or an equivalent bounded database validation mechanism.

It must not permit:

- raw AWS/provider errors;
- stack traces;
- free text;
- merchant-controlled error strings.

### 4.7 Migration-order contract

Confirm the future migration ordering is complete enough that the support-state path cannot become usable before its enforcement exists.

At minimum:

1. schema/support objects exist;
2. invariant constraints/helpers exist;
3. grants/default privileges are neutralized as required;
4. direct mutation restrictions are active;
5. helper grants are applied narrowly;
6. only then may the application path use the lease lifecycle.

No migration is to be created or executed in this mission.

---

## 5. Required Safety Cases

Confirm the final B1 contract fails closed for all of the following:

- post-issuance `business_id` mutation;
- `guard_token` mutation;
- object-key mutation;
- expected-size mutation;
- checksum mutation;
- creator mutation;
- issued/expiry timestamp mutation;
- `ISSUED → CLAIMED`;
- `ISSUED → CONSUMED`;
- `UPLOADED → CONSUMED`;
- `CLAIMED → UPLOADED`;
- terminal reopening;
- terminal switching;
- `CLAIMED` without coherent `claimed_at`;
- `ISSUED` with `confirmed_at` populated;
- terminal state without `terminal_at`;
- non-terminal state with `terminal_at`;
- invalid/free-text `failure_reason`;
- arbitrary direct privileged update bypass attempt.

Also confirm the B2 guarantee remains intact: the B1 enforcement design must not create any second same-lease Lambda dispatch authority.

---

## 6. Closed Findings — Do Not Reopen

Keep closed:

- `SUPA-EIS-B2 — PASS`;
- `SUPA-EIS-B3 — PASS`;
- `SUPA-EIS-B4 — PASS`;
- cross-blocker dispatch/idempotency/failure integrity PASS, except only to confirm no B1 regression;
- Stage B data-minimization PASS;
- all Infrastructure PASS findings.

Do not re-review them independently.

---

## 7. Frozen Product and Architecture Decisions

Preserve without modification:

- Owner-only Phase 1 import authority;
- exactly nineteen public Catalog commands;
- Catalog / Inventory truth separation;
- D-047 and D-068;
- BKR-1 through BKR-5;
- EC-2 and EC-3;
- AWS Lambda narrow parser runtime;
- standard Lambda default compute;
- `nodejs24.x`;
- `ap-south-1`;
- 2,048 MB starting memory;
- 15-second Lambda timeout;
- 10-second parser budget;
- finite reserved concurrency;
- transient private S3 parser-ingress;
- IAM Roles Anywhere;
- `ChecksumMode = ENABLED`;
- Papa Parse, ExcelJS, and `node:zlib`;
- all locked parser input/shape limits;
- 4,194,304-byte serialized-response ceiling;
- deterministic pre-stream `RESPONSE_TOO_LARGE`;
- Product Truth remains behind the existing Founder Workflow and nineteen-command boundary.

No AWS redesign is authorized.

---

## 8. Required Output

Create only:

`communication/live/report1.119.md`

The report must contain:

1. Mission and authority.
2. Exact merged `main` SHA reviewed.
3. Confirmation that scope was B1 only.
4. Mutation-surface finding.
5. Transition-helper finding.
6. Six-state invariant finding.
7. Authority-field immutability finding.
8. Illegal-transition prevention finding.
9. Failure-code finding.
10. Migration-order finding.
11. Safety-case matrix result.
12. Confirmation B2/B3/B4 remained closed PASS.
13. Confirmation Product Truth/frozen decisions remained unchanged.
14. Confirmation no implementation/database/environment mutation occurred.
15. Final verdict.
16. Any remaining blocker.

Allowed final verdicts only:

- `LAMBDA PARSER EIS SUPABASE BACKEND REVIEW — PASS`
- `LAMBDA PARSER EIS SUPABASE BACKEND REVIEW — CHANGES REQUIRED`
- `LAMBDA PARSER EIS SUPABASE BACKEND REVIEW — STOPPED — AUTHORITY OR EVIDENCE GAP`

If PASS, state explicitly that no Supabase Backend Architecture blocker remains in Stage B.

A PASS does not authorize EIS lock, Build Lock, Build Mode, SQL/migration execution, Supabase mutation, implementation, AWS resource creation, deployment, publication, or production use.

---

## 9. Prohibited Scope

Do not:

- modify prior reports;
- create or execute SQL/migrations;
- mutate Supabase;
- create/modify live tables, functions, RPCs, triggers, constraints, RLS, grants, or default privileges;
- implement application/parser code;
- modify AWS/S3/IAM architecture or resources;
- add/update dependencies;
- change Lovable;
- change Product Truth;
- change employee/manager permissions;
- add a twentieth Catalog command;
- weaken parser/input/runtime limits;
- reopen B2/B3/B4;
- reopen Infrastructure PASS findings;
- enter EIS lock, Build Lock, or Build Mode;
- deploy;
- publish;
- touch production;
- begin Stage C.

---

## 10. Repository Discipline

The executing room shall:

- verify current merged `main` before review;
- create only `communication/live/report1.119.md`;
- use a protected mission branch and pull request;
- preserve unrelated local changes untouched;
- use exact-file staging only;
- not use `git add .`;
- run the applicable Markdown Quality Gate;
- inspect staged content for secret-like material;
- report exact reviewed `main` SHA, branch, commit SHA, and PR;
- not merge its own PR.

---

## 11. Gate After Confirmation

Only if `report1.119.md` is human-reviewed, merged, and returns exactly:

`LAMBDA PARSER EIS SUPABASE BACKEND REVIEW — PASS`

is Stage B considered cleared.

Mission Control may then authorize the next sequential gate under `communication/live/instruction1.102.md`.

This instruction itself does not begin or authorize Stage C.

---

## 12. Mission Control Decision

`SB-P-1.11-GC-14 — FINAL SUPABASE B1 BACKEND CONFIRMATION AUTHORIZED`

Current authorized next action after human merge of this instruction:

**Supabase Backend Architecture → `communication/live/report1.119.md`**
