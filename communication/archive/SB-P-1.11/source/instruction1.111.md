# SMART BUSINESS MISSION CONTROL

# SB-P-1.11-GC-15 — MIGRATION ACTIVATION ORDER CORRECTION

**Instruction ID:** instruction1.111  
**Parent Mission:** SB-P-1.11 — Product Catalog & Pricing  
**Correction Gate:** GC-15 — Final B1 Migration Activation Order Correction  
**Executing Room:** Claude Code / Engineering Architecture  
**Authorized By:** Mission Control  
**Mode:** SPECIFICATION CORRECTION ONLY — NO IMPLEMENTATION  
**Implementation Authority:** NONE  
**Database Migration Authority:** NONE  
**Production Mutation Authority:** NONE  
**Stage C Authority:** NONE

---

## 1. Mission Objective

Correct exactly one remaining Supabase Backend Architecture blocker identified by:

`communication/live/report1.119.md`

The only authorized blocker is:

`SUPA-EIS-B1 — migration activation ordering is not yet explicitly locked, so the specification does not prove that lifecycle enforcement is installed and privileges narrowed before the support-state path becomes usable.`

Required output:

`communication/live/report1.120.md`

This is a single-item specification correction only. Do not modify prior reports.

---

## 2. Canonical Inputs

Use current merged `main` as repository truth.

Read in full:

- `communication/live/instruction1.111.md`
- `communication/live/report1.119.md`
- `communication/live/instruction1.110.md`
- `communication/live/report1.118.md`
- `communication/live/instruction1.109.md`
- `communication/live/report1.117.md`
- `communication/live/report1.116.md`
- `communication/live/report1.110.md`
- `communication/live/report1.108.md`
- `communication/live/report1.115.md`

Use repository evidence only where needed to keep the ordering compatible with existing Supabase migration/default-grant posture, including:

- `supabase/migrations/20260727000000_reconcile_default_grants.sql`
- `supabase/migrations/20260810120000_sb_p_1_11_gc_1_catalog_import_support_schema.sql`
- `src/integrations/supabase/client.server.ts`

---

## 3. Accepted Findings — Do Not Redesign

The following B1 findings are already accepted and must remain unchanged:

- mutation-surface design: PASS;
- narrow lifecycle transition helpers: PASS;
- six-state database invariants: PASS;
- authority-field immutability: PASS;
- illegal-transition prevention: PASS;
- bounded failure-code contract: PASS;
- B1 safety-case matrix: PASS.

Also keep closed:

- `SUPA-EIS-B2 — PASS`;
- `SUPA-EIS-B3 — PASS`;
- `SUPA-EIS-B4 — PASS`;
- cross-blocker dispatch/idempotency/failure integrity PASS;
- Stage B data-minimization PASS;
- all Infrastructure PASS findings.

Do not redesign the accepted six-state lifecycle, helper set, privilege model, or physical enforcement architecture.

---

## 4. Exact Correction Required

Add one binding migration-activation-order contract to the EIS/addendum.

The future implementation must not make the parser support-state lifecycle usable until all enforcement controls are installed and verified.

Lock this sequence:

1. **Create support schema objects**
   - create `parser_upload_leases` and any already-approved supporting objects required by the accepted EIS;
   - create only the accepted columns/types/keys needed for the existing design.

2. **Install physical invariants before use**
   - install the accepted six-state coherence constraints;
   - install the bounded `failure_reason` validation;
   - install every accepted database helper required for initial lease issuance/binding and lifecycle transitions;
   - ensure helper definitions use the already-approved safe `SECURITY DEFINER` posture and fixed `search_path` where applicable.

3. **Neutralize inherited/default privileges before use**
   - explicitly revoke applicable table/function privileges from `PUBLIC`, `anon`, and `authenticated`;
   - neutralize any inherited/default privilege posture that would otherwise expose support tables/functions;
   - preserve the already-PASS B4 browser/Manager/Employee exclusion.

4. **Remove direct privileged mutation before use**
   - remove direct `service_role` `INSERT`/`UPDATE`/`DELETE` authority on `parser_upload_leases` as selected by `report1.118.md`;
   - retain only the accepted narrow read authority and helper execution surface;
   - no arbitrary privileged table mutation path may remain active when the lifecycle becomes usable.

5. **Grant only the narrow helper surface**
   - grant `service_role` `EXECUTE` only on the accepted creation/binding/lifecycle helpers required by the EIS;
   - do not grant browser roles direct function or table mutation authority;
   - do not create any broader helper or general-purpose mutation function.

6. **Run activation verification before application cutover**
   The future implementation/acceptance package must prove, before application code is switched to use the lifecycle:
   - `PUBLIC`, `anon`, and `authenticated` cannot read/mutate protected support state except where explicitly allowed by the accepted design;
   - direct `service_role` `INSERT`/`UPDATE`/`DELETE` on `parser_upload_leases` is denied;
   - narrow `service_role` helper calls succeed only for legal predicates;
   - illegal lifecycle transitions fail closed;
   - authority-field mutation attempts fail closed;
   - B2 one-use dispatch guarantee remains intact.

7. **Only after steps 1–6 pass may the application path activate**
   - only then may Smart Business server code be switched to the new lease helper surface;
   - no endpoint, route, background path, parser dispatch path, or import flow may depend on the new lifecycle before enforcement and privilege verification are complete;
   - if verification fails, application activation must not proceed.

This ordering is mandatory. It is not merely a recommendation.

---

## 5. Atomicity / Rollback Principle

At specification level, lock a fail-closed rollout principle:

- prefer one migration transaction where PostgreSQL/Supabase semantics permit;
- if a control cannot be installed atomically with the rest, the application path must remain disabled/unreferenced until all required controls are present and verified;
- a partial migration must never expose a usable lease lifecycle with incomplete constraints or broader-than-approved privileges;
- rollback/retry must preserve the state that the application remains unable to use the lifecycle until the full enforcement set is restored.

Do not invent a new deployment system or migration framework.

---

## 6. Required Activation Acceptance Evidence

The correction report must lock the evidence that a later implementation/package review must provide before activation:

1. schema/helper objects exist with the approved definitions;
2. six-state invariant and failure-code checks are active;
3. privilege neutralization is effective for `PUBLIC`, `anon`, `authenticated`;
4. direct `service_role` lease-table DML is denied;
5. intended `service_role` helper `EXECUTE` grants exist and no broader grants remain;
6. a legal lifecycle transition succeeds through the helper surface;
7. an illegal transition fails closed;
8. an authority-field mutation attempt fails closed;
9. same-lease re-dispatch cannot be recreated;
10. only after these checks pass is application cutover/activation allowed.

This mission defines evidence requirements only. It does not run them.

---

## 7. Frozen Decisions

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
- Product Truth remains behind existing Founder Workflow and exactly nineteen public Catalog commands.

No AWS redesign or Product Truth change is authorized.

---

## 8. Required Output

Create only:

`communication/live/report1.120.md`

The report must contain:

1. Mission and authority.
2. Exact merged `main` SHA reviewed.
3. Confirmation the scope was migration activation ordering only.
4. Exact mandatory activation sequence.
5. Exact privilege-neutralization ordering.
6. Exact direct-service-role-DML restriction ordering.
7. Exact helper-grant ordering.
8. Exact pre-cutover verification gate.
9. Atomicity/partial-failure/rollback principle.
10. Required later acceptance evidence.
11. Confirmation all prior B1 PASS findings remain unchanged.
12. Confirmation B2/B3/B4 remain closed PASS findings.
13. Confirmation Product Truth/frozen decisions remain unchanged.
14. Confirmation no implementation/database/environment mutation occurred.
15. Final disposition.
16. Any remaining blocker.

Allowed final dispositions only:

- `LAMBDA PARSER EIS SUPABASE B1 MIGRATION-ACTIVATION-ORDER CORRECTION — READY FOR FINAL BACKEND CONFIRMATION`
- `LAMBDA PARSER EIS SUPABASE B1 MIGRATION-ACTIVATION-ORDER CORRECTION — STOPPED — UNRESOLVED BACKEND BLOCKER`

Do not claim Stage B PASS. Only Supabase Backend Architecture may issue that verdict in the later final confirmation.

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
- reopen accepted B1 findings;
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

- verify current merged `main` before work;
- create only `communication/live/report1.120.md`;
- use a protected mission branch and pull request;
- preserve unrelated local changes untouched;
- use exact-file staging only;
- not use `git add .`;
- run the applicable Markdown Quality Gate;
- inspect staged content for secret-like material;
- report exact reviewed `main` SHA, branch, commit SHA, and PR;
- not merge its own PR.

---

## 11. Gate After Correction

If `report1.120.md` is human-reviewed, merged, and returns:

`LAMBDA PARSER EIS SUPABASE B1 MIGRATION-ACTIVATION-ORDER CORRECTION — READY FOR FINAL BACKEND CONFIRMATION`

Mission Control shall authorize one separate, final narrow Supabase Backend Architecture confirmation limited only to this migration-activation-order correction.

That confirmation must not reopen already-PASS B1 findings or B2/B3/B4 and must not begin Stage C.

Only a later human-reviewed and merged:

`LAMBDA PARSER EIS SUPABASE BACKEND REVIEW — PASS`

will clear Stage B and allow Mission Control to consider Stage C under `communication/live/instruction1.102.md`.

---

## 12. Mission Control Decision

`SB-P-1.11-GC-15 — MIGRATION ACTIVATION ORDER CORRECTION AUTHORIZED`

Current authorized next action after human merge of this instruction:

**Claude Code / Engineering Architecture → communication/live/report1.120.md**
