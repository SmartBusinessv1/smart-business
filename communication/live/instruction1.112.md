# SMART BUSINESS MISSION CONTROL

# SB-P-1.11-GC-16 — FINAL MIGRATION-ACTIVATION-ORDER BACKEND CONFIRMATION

**Instruction ID:** instruction1.112  
**Parent Mission:** SB-P-1.11 — Product Catalog & Pricing  
**Confirmation Gate:** GC-16 — Final Narrow Migration-Activation-Order Confirmation  
**Executing Room:** Supabase Backend Architecture  
**Authorized By:** Mission Control  
**Mode:** SPECIALIST CONFIRMATION ONLY — NO IMPLEMENTATION  
**Implementation Authority:** NONE  
**Database Migration Authority:** NONE  
**Production Mutation Authority:** NONE  
**Stage C Authority:** NONE

---

## 1. Mission Objective

Perform one final narrow Supabase Backend Architecture confirmation limited only to the migration-activation-order correction in:

`communication/live/report1.120.md`

The prior final confirmation is:

`communication/live/report1.119.md`

Required output:

`communication/live/report1.121.md`

This confirmation must not reopen any already-PASS B1 finding or `SUPA-EIS-B2`, `SUPA-EIS-B3`, or `SUPA-EIS-B4`.

---

## 2. Canonical Inputs

Use current merged `main` as repository truth.

Read in full:

- `communication/live/instruction1.112.md`
- `communication/live/instruction1.111.md`
- `communication/live/report1.120.md`
- `communication/live/report1.119.md`
- `communication/live/report1.118.md`
- `communication/live/report1.117.md`
- `communication/live/report1.116.md`
- `communication/live/report1.110.md`
- `communication/live/report1.108.md`
- `communication/live/report1.115.md`

Use repository evidence only where required to validate compatibility with the existing Supabase migration/default-grant posture, including:

- `supabase/migrations/20260727000000_reconcile_default_grants.sql`
- `supabase/migrations/20260810120000_sb_p_1_11_gc_1_catalog_import_support_schema.sql`
- `src/integrations/supabase/client.server.ts`

Do not re-review unrelated architecture.

---

## 3. Scope — One Item Only

Confirm only whether `report1.120.md` fully closes the sole remaining B1 blocker identified in `report1.119.md`:

`SUPA-EIS-B1 — migration activation ordering was not explicitly locked.`

Confirm that the corrected specification now makes the following ordering mandatory:

1. create approved support objects while unusable by application paths;
2. install approved six-state invariants, bounded failure-code validation, and accepted helper functions;
3. neutralize inherited/default privileges for `PUBLIC`, `anon`, and `authenticated`;
4. remove direct `service_role` `INSERT`/`UPDATE`/`DELETE` on `parser_upload_leases`, retaining only the accepted narrow read authority;
5. grant `service_role` `EXECUTE` only on the accepted creation/binding/lifecycle helpers;
6. complete the required pre-cutover verification gate;
7. only then allow Smart Business server/application paths to use the lease lifecycle.

This ordering must be binding, not advisory.

---

## 4. Required Confirmation Checks

Confirm all of the following.

### 4.1 Enforcement-before-use

- no endpoint, route, parser dispatch path, import flow, background path, or server path may depend on the lifecycle before steps 1–6 complete successfully;
- verification failure blocks cutover;
- a partial installation cannot activate the lifecycle.

### 4.2 Privilege ordering

- privilege neutralization occurs before application activation;
- browser roles do not gain support-state authority during any intermediate state;
- direct `service_role` DML is removed before application cutover;
- narrow helper grants do not recreate arbitrary table mutation authority.

### 4.3 Helper activation ordering

- only the already-approved helper surface receives `service_role` `EXECUTE`;
- helper execution becomes usable only after invariants and privilege restrictions are installed;
- no broader/general-purpose mutation helper is introduced.

### 4.4 Pre-cutover verification gate

Confirm the specification requires later implementation evidence proving at minimum:

- approved schema/helper objects exist;
- six-state invariant checks are active;
- bounded failure-code validation is active;
- `PUBLIC`, `anon`, and `authenticated` privilege exclusion is effective;
- direct `service_role` lease-table `INSERT`/`UPDATE`/`DELETE` is denied;
- intended helper `EXECUTE` grants exist and no broader grants remain;
- one legal helper transition succeeds;
- one illegal transition fails closed;
- authority-field mutation fails closed;
- same-lease re-dispatch authority cannot be recreated;
- application cutover occurs only after all required checks pass.

### 4.5 Atomicity / partial-failure / rollback

Confirm the specification is fail-closed if installation is interrupted:

- pure-DDL installation steps are intended to be executed transactionally where supported;
- if any element cannot be installed atomically, the application path remains disabled/unreferenced;
- rollback or retry cannot leave an under-enforced but usable lifecycle;
- no new deployment or migration framework is introduced.

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
- accepted B1 helper surface and failure-code contract;
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

`communication/live/report1.121.md`

The report must state:

1. mission and authority;
2. exact merged `main` SHA reviewed;
3. confirmation scope was migration-activation-order only;
4. enforcement-before-use result;
5. privilege-ordering result;
6. helper-activation-order result;
7. pre-cutover-verification result;
8. atomicity/partial-failure/rollback result;
9. confirmation all prior B1 PASS findings remained closed;
10. confirmation B2/B3/B4 remained closed PASS;
11. confirmation frozen Product Truth and architecture decisions remained unchanged;
12. confirmation no implementation/database/environment mutation occurred;
13. final verdict;
14. any remaining blocker.

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
- create only `communication/live/report1.121.md`;
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

Only if `report1.121.md` is human-reviewed, merged, and returns exactly:

`LAMBDA PARSER EIS SUPABASE BACKEND REVIEW — PASS`

is Stage B cleared.

Mission Control may then evaluate the next sequential gate under `communication/live/instruction1.102.md`.

This instruction does not begin or authorize Stage C.

---

## 11. Mission Control Decision

`SB-P-1.11-GC-16 — FINAL MIGRATION-ACTIVATION-ORDER BACKEND CONFIRMATION AUTHORIZED`

Current authorized next action after human merge of this instruction:

**Supabase Backend Architecture → communication/live/report1.121.md**
