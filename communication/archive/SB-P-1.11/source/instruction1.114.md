# SMART BUSINESS MISSION CONTROL

# SB-P-1.11-GC-18 — FINAL SERVICE_ROLE PRIVILEGE-NEUTRALIZATION BACKEND CONFIRMATION

**Instruction ID:** instruction1.114  
**Parent Mission:** SB-P-1.11 — Product Catalog & Pricing  
**Confirmation Gate:** GC-18 — Final Narrow service_role Privilege-Neutralization Confirmation  
**Executing Room:** Supabase Backend Architecture  
**Authorized By:** Mission Control  
**Mode:** SPECIALIST CONFIRMATION ONLY — NO IMPLEMENTATION  
**Implementation Authority:** NONE  
**Database Migration Authority:** NONE  
**Production Mutation Authority:** NONE  
**Stage C Authority:** NONE

---

## 1. Mission Objective

Perform one final narrow Supabase Backend Architecture confirmation limited only to the `service_role` privilege-neutralization correction in:

`communication/live/report1.122.md`

The prior backend confirmation is:

`communication/live/report1.121.md`

Required output:

`communication/live/report1.123.md`

This confirmation must not reopen any already-PASS B1 finding or `SUPA-EIS-B2`, `SUPA-EIS-B3`, or `SUPA-EIS-B4`.

---

## 2. Canonical Inputs

Use current merged `main` as repository truth.

Read in full:

- `communication/live/instruction1.114.md`
- `communication/live/instruction1.113.md`
- `communication/live/report1.122.md`
- `communication/live/report1.121.md`
- `communication/live/report1.120.md`
- `communication/live/report1.119.md`
- `communication/live/report1.118.md`
- `communication/live/report1.117.md`
- `communication/live/report1.116.md`
- `communication/live/report1.110.md`
- `communication/live/report1.108.md`
- `communication/live/report1.115.md`

Use repository evidence only where required to validate compatibility with the existing Supabase default-grant posture, including:

- `supabase/migrations/20260727000000_reconcile_default_grants.sql`
- `supabase/migrations/20260810120000_sb_p_1_11_gc_1_catalog_import_support_schema.sql`
- `src/integrations/supabase/client.server.ts`

Do not re-review unrelated architecture.

---

## 3. Scope — One Item Only

Confirm only whether `report1.122.md` fully closes the sole remaining B1 blocker identified in `report1.121.md`:

`SUPA-EIS-B1 — Step 4 did not explicitly revoke the inherited/default service_role ALL table privilege before granting back SELECT on parser_upload_leases.`

Confirm the corrected specification now makes the following effective-privilege sequence binding for `public.parser_upload_leases` only:

1. explicitly neutralize/revoke the broader effective `service_role` table privilege inherited from the repository default-grant posture;
2. confirm no direct `INSERT`, `UPDATE`, `DELETE`, or other unintended table privilege remains;
3. only then grant back exactly the accepted direct `SELECT` privilege;
4. only after the effective direct privilege state is exactly `{ SELECT }`, grant `service_role` `EXECUTE` only on the already-approved narrow helper surface;
5. then perform the already-approved pre-cutover verification gate;
6. only after that verification passes may application/server paths use the lease lifecycle.

`GRANT SELECT` alone must not be treated as narrowing.

---

## 4. Required Confirmation Checks

### 4.1 Effective privilege neutralization

Confirm that the corrected contract explicitly accounts for the repository default-grant posture that may give `service_role` `ALL` on a newly created public table.

Confirm that the architecture requires the broader effective privilege to be removed before any narrow privilege is restored.

### 4.2 SELECT-only direct table surface

Confirm the intended final direct table privilege state for `service_role` on `public.parser_upload_leases` is exactly:

`{ SELECT }`

Confirm no direct `INSERT`, `UPDATE`, `DELETE`, or other unintended table-level privilege remains.

### 4.3 Helper-grant ordering

Confirm that only after the SELECT-only table state exists may `service_role` receive `EXECUTE` on the already-approved helper surface.

Confirm helper grants do not recreate arbitrary direct table mutation authority and no broader/general-purpose mutation helper is introduced.

### 4.4 Effective-state verification

Confirm the specification requires later implementation/package evidence based on the resulting effective database ACL/privilege state, not merely migration source text.

At minimum, later evidence must prove:

- effective `service_role` privileges on `public.parser_upload_leases` are inspected directly;
- direct `SELECT` succeeds;
- direct `INSERT` is denied;
- direct `UPDATE` is denied;
- direct `DELETE` is denied;
- no broader table privilege survives;
- intended helper `EXECUTE` grants exist and no broader function grants remain;
- one direct privileged mutation bypassing helpers fails closed;
- one legal lifecycle transition through the approved helper surface succeeds;
- application cutover remains blocked until all required checks pass.

### 4.5 Scope isolation

Confirm this correction is table-specific to `public.parser_upload_leases`.

Confirm the already-accepted `public.parser_preview_guards` privilege contract is untouched.

Confirm no repository-wide default-grant policy redesign is introduced.

### 4.6 Fail-closed ordering

Confirm:

- if inherited `service_role` broad table privilege cannot be neutralized, helper-grant and cutover steps do not proceed;
- granting `SELECT` before broader privilege neutralization does not satisfy the contract;
- any surviving direct `INSERT`/`UPDATE`/`DELETE` blocks cutover;
- rollback/retry cannot leave an under-enforced but usable lifecycle.

---

## 5. Closed Findings — Do Not Reopen

Keep closed and unchanged:

- B1 mutation-surface design — PASS;
- B1 transition-helper contract — PASS;
- B1 six-state database invariants — PASS;
- B1 authority-field immutability — PASS;
- B1 illegal-transition prevention — PASS;
- B1 bounded failure-code contract — PASS;
- B1 safety-case matrix — PASS;
- enforcement-before-use ordering — PASS;
- pre-cutover verification gate structure — PASS;
- atomicity / partial-failure / rollback — PASS;
- `SUPA-EIS-B2 — PASS`;
- `SUPA-EIS-B3 — PASS`;
- `SUPA-EIS-B4 — PASS`;
- cross-blocker dispatch/idempotency/failure integrity PASS;
- Stage B data-minimization PASS;
- all Infrastructure PASS findings.

Do not redesign any of these.

---

## 6. Frozen Product and Architecture Decisions

Preserve without modification:

- Owner-only Phase 1 import authority;
- exactly nineteen public Catalog commands;
- Catalog / Inventory truth separation;
- D-047 and D-068;
- BKR-1 through BKR-5;
- EC-2 and EC-3;
- accepted six-state lease lifecycle;
- accepted B1 Option A physical-enforcement architecture;
- accepted B1 helper surface and bounded failure-code contract;
- AWS Lambda narrow parser runtime;
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
- all locked parser limits;
- 4,194,304-byte serialized-response ceiling;
- deterministic pre-stream `RESPONSE_TOO_LARGE`;
- Product Truth remains behind the existing Founder Workflow and exactly nineteen public Catalog commands.

---

## 7. Required Output

Create only:

`communication/live/report1.123.md`

The report must state:

1. mission and authority;
2. exact merged `main` SHA reviewed;
3. confirmation scope was `service_role` privilege neutralization only;
4. effective privilege-neutralization result;
5. SELECT-only direct table surface result;
6. helper-grant ordering result;
7. effective-state verification result;
8. `parser_preview_guards` scope-isolation result;
9. fail-closed ordering result;
10. confirmation all prior B1 PASS findings remained closed;
11. confirmation B2/B3/B4 remained closed PASS;
12. confirmation frozen Product Truth and architecture decisions remained unchanged;
13. confirmation no implementation/database/environment mutation occurred;
14. final verdict;
15. any remaining blocker.

Allowed final verdicts only:

- `LAMBDA PARSER EIS SUPABASE BACKEND REVIEW — PASS`
- `LAMBDA PARSER EIS SUPABASE BACKEND REVIEW — CHANGES REQUIRED`
- `LAMBDA PARSER EIS SUPABASE BACKEND REVIEW — STOPPED — AUTHORITY OR EVIDENCE GAP`

If PASS, state explicitly that no Supabase Backend Architecture blocker remains in Stage B.

A PASS does not itself authorize EIS lock, Build Lock, Build Mode, SQL/migration execution, Supabase mutation, implementation, AWS resource creation, deployment, publication, production use, or Stage C work.

---

## 8. Prohibited Scope

Do not:

- modify prior reports;
- create or execute SQL/migrations;
- mutate Supabase;
- create/modify live tables, functions, RPCs, triggers, constraints, RLS, grants, or default privileges;
- redesign repository-wide default grants;
- modify `parser_preview_guards` privilege behavior;
- implement application/parser code;
- modify AWS/S3/IAM architecture or resources;
- add/update dependencies;
- change Lovable;
- change Product Truth;
- change employee/manager permissions;
- add a twentieth Catalog command;
- weaken parser/input/runtime limits;
- reopen accepted B1 findings;
- reopen B2/B3/B4;
- reopen Infrastructure PASS findings;
- enter EIS lock, Build Lock, or Build Mode;
- deploy;
- publish;
- touch production;
- begin Stage C.

---

## 9. Repository Discipline

The executing room shall:

- verify current merged `main` before review;
- create only `communication/live/report1.123.md`;
- use a protected mission branch and pull request;
- preserve unrelated local changes untouched;
- use exact-file staging only;
- not use `git add .`;
- run the applicable Markdown Quality Gate;
- inspect staged content for secret-like material;
- report exact reviewed `main` SHA, branch, commit SHA, and PR;
- not merge its own PR.

---

## 10. Gate After Confirmation

Only if `report1.123.md` is human-reviewed, merged, and returns exactly:

`LAMBDA PARSER EIS SUPABASE BACKEND REVIEW — PASS`

is Stage B cleared.

Mission Control may then evaluate the next sequential gate under `communication/live/instruction1.102.md`.

This instruction does not begin or authorize Stage C.

---

## 11. Mission Control Decision

`SB-P-1.11-GC-18 — FINAL SERVICE_ROLE PRIVILEGE-NEUTRALIZATION BACKEND CONFIRMATION AUTHORIZED`

Current authorized next action after human merge of this instruction:

**Supabase Backend Architecture → communication/live/report1.123.md**
