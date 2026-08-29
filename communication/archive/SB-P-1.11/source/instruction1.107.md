# SMART BUSINESS MISSION CONTROL

# SB-P-1.11-GC-11 — BOUNDED SUPABASE EIS CORRECTION

**Instruction ID:** instruction1.107  
**Parent Mission:** SB-P-1.11 — Product Catalog & Pricing  
**Correction Gate:** GC-11 — Supabase EIS Backend Correction  
**Executing Room:** Claude Code / Engineering Architecture  
**Authorized By:** Mission Control  
**Mode:** SPECIFICATION CORRECTION ONLY — NO IMPLEMENTATION  
**Implementation Authority:** NONE  
**Database Migration Authority:** NONE  
**Production Mutation Authority:** NONE  
**Deployment Authority:** NONE

---

## 1. Mission Objective

Correct exactly the four bounded Supabase Backend Architecture blockers identified in:

`communication/live/report1.110.md`

The authorized blockers are only:

- `SUPA-EIS-B1` — coherent Parser Upload Lease claim/lifecycle physical contract;
- `SUPA-EIS-B2` — no same-lease Lambda re-dispatch after unknown post-dispatch outcome;
- `SUPA-EIS-B3` — coherent EC-2 guard↔lease binding and rate-window semantics;
- `SUPA-EIS-B4` — explicit neutralization of inherited table/function privileges, especially EXECUTE on new `SECURITY DEFINER` helpers.

Required output:

`communication/live/report1.116.md`

Do not overwrite or modify prior reports. The output must be a self-contained Supabase EIS correction addendum that becomes binding with `report1.108.md`, `report1.112.md`, and `report1.114.md` only after later specialist confirmation and Mission Control acceptance.

---

## 2. Canonical Inputs

Use current merged `main` as repository truth.

Read in full:

- `communication/live/instruction1.102.md`
- `communication/live/report1.110.md`
- `communication/live/report1.108.md`
- `communication/live/report1.115.md`
- `communication/live/report1.112.md`
- `communication/live/report1.114.md`
- `communication/live/report1.107.md`
- `communication/live/report1.106.md`

Founder Workflow baseline remains closed and must be preserved:

- `communication/live/report1.96.md`
- `communication/live/report1.98.md`
- `communication/live/report1.100.md`
- `communication/live/report1.101.md`
- `communication/live/report1.102.md`

Repository backend evidence relevant to the blockers:

- `supabase/migrations/20260727000000_reconcile_default_grants.sql`
- `supabase/migrations/20260810120000_sb_p_1_11_gc_1_catalog_import_support_schema.sql`
- `src/integrations/supabase/client.server.ts`

Read other files only where needed to resolve one of B1–B4.

---

## 3. Authorized Correction — SUPA-EIS-B1

Lock one coherent Parser Upload Lease lifecycle.

The corrected contract must not mark the lease terminal `CONSUMED` merely to claim dispatch.

Use a coherent non-terminal dispatch representation, for example a dedicated `CLAIMED` / `DISPATCHED` state or an equivalent explicit atomic claim marker. The exact name may differ, but the semantics must be unambiguous.

At minimum define exact allowed transitions and atomic predicates for:

- `ISSUED → UPLOADED`;
- `UPLOADED → claimed/non-terminal dispatch state`;
- claimed state → `CONSUMED` after successful Lambda result plus Smart Business validation required by the EIS;
- claimed state → `FAILED` after resolved failure;
- eligible non-terminal state → `EXPIRED` where expiry rules permit;
- all terminal states remain one-way and unreopenable.

The contract must specify:

- authoritative `lease_id` + server-derived `business_id` predicates;
- state predicate;
- non-expiry predicate on upload confirmation and dispatch claim;
- exactly one successful dispatch claim;
- `confirmed_at` semantics;
- claim/dispatch timestamp semantics;
- `terminal_at` only for terminal states;
- `failure_reason` nullability/valid-state rules;
- immutable authority fields after issuance, including business, request/actor binding, object key, expected size, checksum, and expiry except where the EIS explicitly permits a server-only correction before capability issuance;
- database-level coherence suitable for service-role bookkeeping that bypasses RLS.

Do not turn the support-state table into Product Truth.

---

## 4. Authorized Correction — SUPA-EIS-B2

Lock fail-closed unknown-outcome semantics after Lambda dispatch.

Once a lease has successfully obtained dispatch authority and Lambda invocation has been attempted, that same lease must never authorize another Lambda invocation if the result is lost, timed out, ambiguous, or unknown.

Specify a durable one-use dispatch marker/state that survives application-process failure.

Required semantics:

- client retry against an already claimed/dispatched lease does not re-dispatch Lambda;
- server retry after unknown outcome does not re-dispatch Lambda;
- duplicate confirmation does not create new dispatch authority;
- duplicate dispatch attempt loses atomically;
- stale, expired, terminal, or already-dispatched leases do not invoke Lambda;
- unknown post-dispatch outcome fails closed for that lease;
- recovery may release/expire EC-2 capacity and permit a separately authorized fresh merchant attempt with a new lease, but never reuse the old lease as parse authority.

Do not add a new queue, orchestration service, or general backend.

---

## 5. Authorized Correction — SUPA-EIS-B3

Lock a race-safe EC-2 guard↔lease binding and coherent rate-window semantics.

Preserve EC-2 as durable/shared Postgres-backed per-business pre-parse abuse control, logically separate from Parser Upload Lease state.

Because guard acquisition occurs before lease issuance, specify a complete binding sequence that cannot leave normal terminal release dependent on an unset `lease_id`.

The corrected contract must define one race-safe mechanism such as:

1. acquire business guard atomically and return a guard identity/token;
2. create the lease under that acquired guard authority;
3. bind guard and lease atomically before issuing upload capability;
4. if binding fails, fail closed and release/expire the guard;
5. release/terminalize guard only when both authoritative business and bound lease/guard identity match.

Equivalent architecture is acceptable if it proves the same properties.

Also correct the rate-window terminology. If the physical mechanism is a fixed-window counter, call it fixed-window and specify its reset semantics. Do not call it rolling unless the implementation contract actually provides rolling-window behavior.

Do not change the already-selected threshold/capacity policy unless `report1.110.md` proves that is required; this mission does not authorize a new abuse-control algorithm.

Guard expiry/recovery must prevent permanent merchant lockout after abandoned work.

---

## 6. Authorized Correction — SUPA-EIS-B4

Lock explicit privilege neutralization for all new support-state tables and helper functions.

The repository default-grant posture means future `public` functions may otherwise inherit browser-role EXECUTE privileges.

The future migration contract must explicitly require, before endpoint use:

- revoke table privileges on new parser support tables from `PUBLIC`, `anon`, and `authenticated`;
- revoke sequence privileges where any sequence exists;
- revoke function EXECUTE from `PUBLIC`, `anon`, and `authenticated` for every new state-mutating or sensitive helper;
- explicitly grant only the intended narrow server/service-role authority;
- keep Manager/Employee without new parser support-state authority;
- keep browser/client without direct lease/guard mutation authority;
- avoid broad `USING (true)` or `WITH CHECK (true)` policies;
- ensure any `SECURITY DEFINER` function fixes `search_path` safely and does not accept merchant-controlled tenant authority as trusted input;
- preserve server-derived `business_id` and caller authorization at the application boundary.

If helper functions are callable only through service role, the specification must say so explicitly and require privileges that enforce it.

No actual grant/RLS/function changes are authorized in this mission.

---

## 7. Cross-Blocker Integrity Requirements

The corrected EIS must remain safe under:

- duplicate requests;
- duplicate upload confirmation;
- duplicate dispatch attempt;
- replay;
- timeout;
- network loss;
- server crash;
- unknown Lambda outcome;
- partial S3/Lambda failure;
- stale lease;
- expired lease;
- terminal lease replay;
- abandoned EC-2 guard.

Parser failure, parser success, or lease state alone must never create Catalog or Inventory Product Truth.

Product Truth remains governed only by the existing Founder Workflow and exactly nineteen public Catalog commands.

Preserve BKR-1 through BKR-5, D-047, D-068, EC-2, and EC-3.

---

## 8. Data Minimization Precision

Preserve the Stage B PASS on data minimization.

The correction may add only metadata strictly necessary to resolve B1–B4, such as a claim timestamp/state or guard binding identity.

Do not store in Supabase:

- raw merchant file content;
- CSV/XLSX rows or cells;
- raw AWS/provider errors;
- AWS credentials;
- X.509 private keys;
- IAM private-key material.

`failure_reason` or equivalent must remain bounded to sanitized internal codes.

State a bounded operational retention principle for terminal lease and stale guard metadata without changing Product Truth retention.

---

## 9. Frozen Decisions — Do Not Reopen

Preserve without modification:

- Owner-only Phase 1 import authority;
- exactly nineteen public Catalog commands — no twentieth command;
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
- finite reserved concurrency as defense-in-depth;
- transient private S3 parser-ingress;
- IAM Roles Anywhere;
- `ChecksumMode = ENABLED` HeadObject contract;
- Papa Parse, ExcelJS, and `node:zlib`;
- hard parser input/shape limits;
- 4,194,304-byte serialized-response ceiling;
- deterministic pre-stream `RESPONSE_TOO_LARGE`;
- the corrected B1 infrastructure acceptance matrix;
- all Infrastructure PASS findings in `report1.115.md`.

Do not redesign AWS architecture unless an unavoidable direct database-contract incompatibility is proven. If so, STOP and report it rather than silently replacing architecture.

---

## 10. Required Output Structure

Create only:

`communication/live/report1.116.md`

The report must contain at minimum:

1. Mission and authority.
2. Exact `main` SHA reviewed.
3. Correction for `SUPA-EIS-B1`.
4. Correction for `SUPA-EIS-B2`.
5. Correction for `SUPA-EIS-B3`.
6. Correction for `SUPA-EIS-B4`.
7. Exact corrected lease state/transition model.
8. Exact unknown-outcome no-re-dispatch rule.
9. Exact guard↔lease binding/release contract and rate-window terminology.
10. Exact future privilege-neutralization contract.
11. Cross-blocker idempotency/failure-integrity check.
12. Data-minimization/retention confirmation.
13. Frozen-decision preservation confirmation.
14. No-implementation/no-mutation confirmation.
15. Final disposition.

Allowed final dispositions only:

- `LAMBDA PARSER EIS SUPABASE CORRECTION — READY FOR BACKEND CONFIRMATION`
- `LAMBDA PARSER EIS SUPABASE CORRECTION — STOPPED — UNRESOLVED BACKEND BLOCKER`

Do not claim Stage B PASS. Only Supabase Backend Architecture may issue that verdict in the later confirmation review.

---

## 11. Prohibited Scope

Do not:

- modify prior reports;
- implement application/parser code;
- create or modify SQL/migrations;
- mutate Supabase;
- create tables/functions/RPCs;
- change RLS or grants;
- create or modify AWS/S3/IAM resources;
- execute project AWS commands;
- add/update dependencies;
- change Lovable;
- change Product Truth;
- change employee/manager permissions;
- add a twentieth Catalog command;
- weaken parser limits;
- enter Build Lock or Build Mode;
- deploy;
- publish;
- touch production;
- begin Stage C.

---

## 12. Repository Discipline

The executing room shall:

- verify current merged `main` before work;
- create only `communication/live/report1.116.md`;
- use a protected mission branch and pull request;
- preserve unrelated local changes untouched;
- use exact-file staging;
- not use `git add .`;
- run the applicable Markdown Quality Gate;
- inspect staged content for secret-like material;
- report exact commit SHA and PR;
- not merge its own PR.

---

## 13. Gate After Correction

If `report1.116.md` returns:

`LAMBDA PARSER EIS SUPABASE CORRECTION — READY FOR BACKEND CONFIRMATION`

and is human-reviewed and merged, Mission Control shall authorize a narrow Supabase Backend Architecture confirmation limited to `SUPA-EIS-B1` through `SUPA-EIS-B4`.

That confirmation must use a new report number and must not begin Stage C.

Only a merged:

`LAMBDA PARSER EIS SUPABASE BACKEND REVIEW — PASS`

will unlock Stage C under `communication/live/instruction1.102.md`.

---

## 14. Mission Control Decision

`SB-P-1.11-GC-11 — BOUNDED SUPABASE EIS CORRECTION AUTHORIZED`

Current authorized next action after human merge of this instruction:

**Claude Code / Engineering Architecture → `communication/live/report1.116.md`**
