# SMART BUSINESS MISSION CONTROL

# SB-P-1.11-GC-12 — NARROW SUPABASE BACKEND CONFIRMATION

**Instruction ID:** instruction1.108  
**Parent Mission:** SB-P-1.11 — Product Catalog & Pricing  
**Confirmation Gate:** GC-12 — Narrow Stage B Supabase Backend Confirmation  
**Executing Room:** Supabase Backend Architecture  
**Authorized By:** Mission Control  
**Mode:** SPECIALIST CONFIRMATION ONLY — NO IMPLEMENTATION  
**Implementation Authority:** NONE  
**Database Migration Authority:** NONE  
**Production Mutation Authority:** NONE  
**Stage C Authority:** NONE

---

## 1. Mission Objective

Perform a narrow Supabase Backend Architecture confirmation of only the four blockers previously identified in:

`communication/live/report1.110.md`

and corrected by:

`communication/live/report1.116.md`

The review scope is limited strictly to:

- `SUPA-EIS-B1` — Parser Upload Lease lifecycle / atomic claim contract;
- `SUPA-EIS-B2` — no same-lease Lambda re-dispatch after unknown post-dispatch outcome;
- `SUPA-EIS-B3` — EC-2 guard↔lease binding and rate-window semantics;
- `SUPA-EIS-B4` — privilege neutralization for support-state tables and `SECURITY DEFINER` helpers.

Required output:

`communication/live/report1.117.md`

Do not reopen any other Supabase, infrastructure, Product Truth, Founder Workflow, parser-runtime, AWS, or security architecture decision unless `report1.116.md` directly introduces a new load-bearing incompatibility within B1–B4. If such an incompatibility is proven, identify only that incompatibility and issue `CHANGES REQUIRED` or `STOPPED` as appropriate.

---

## 2. Canonical Inputs

Use current merged `main` as repository truth.

Read in full:

- `communication/live/instruction1.108.md`
- `communication/live/instruction1.107.md`
- `communication/live/report1.116.md`
- `communication/live/report1.110.md`
- `communication/live/report1.108.md`
- `communication/live/report1.115.md`

Use these supporting repository files where needed to confirm B4 and physical-contract compatibility:

- `supabase/migrations/20260727000000_reconcile_default_grants.sql`
- `supabase/migrations/20260810120000_sb_p_1_11_gc_1_catalog_import_support_schema.sql`
- `src/integrations/supabase/client.server.ts`

Read older reports only where necessary to verify that the correction did not weaken a frozen decision.

---

## 3. Confirmation Scope — SUPA-EIS-B1

Confirm whether `report1.116.md` fully resolves the Parser Upload Lease lifecycle defect.

Verify only the following:

1. The lease has a coherent non-terminal dispatch state/marker and is not marked terminal `CONSUMED` merely to claim dispatch.
2. The corrected lifecycle is internally consistent, including:
   - `ISSUED → UPLOADED`;
   - `UPLOADED → CLAIMED` or equivalent non-terminal dispatch state;
   - claimed state → `CONSUMED` after successful Lambda result plus required Smart Business validation;
   - claimed state → `FAILED` after resolved failure;
   - eligible non-terminal state → `EXPIRED` only where permitted.
3. Terminal states are one-way and unreopenable.
4. Upload confirmation and dispatch claim use atomic database predicates that include:
   - authoritative lease identity;
   - server-derived business identity;
   - expected current state;
   - non-expiry where required.
5. Exactly one successful dispatch claim can exist for a lease.
6. `confirmed_at`, claim/dispatch timestamps, `terminal_at`, and failure-code/nullability rules are coherent.
7. Authority-bearing fields remain immutable after issuance except any narrowly specified server-only pre-capability correction.
8. The physical contract is coherent even when service-role bookkeeping bypasses RLS.
9. The support-state table remains transport/security metadata only and is not Product Truth.

If all items are complete and coherent at EIS level, B1 is PASS.

---

## 4. Confirmation Scope — SUPA-EIS-B2

Confirm whether the correction makes same-lease Lambda re-dispatch impossible after dispatch authority has been consumed.

Verify only the following:

1. The `UPLOADED → CLAIMED` or equivalent transition is the sole dispatch-authorization gate.
2. That gate can succeed at most once per lease.
3. Client retry after claim/dispatch cannot invoke Lambda again from the same lease.
4. Server retry after timeout/network loss/unknown outcome cannot invoke Lambda again from the same lease.
5. Duplicate dispatch attempts lose atomically.
6. Stale, expired, terminal, or already-claimed/dispatched leases cannot authorize Lambda.
7. Lost, timed-out, ambiguous, or unknown post-dispatch outcomes fail closed for that lease.
8. Any bounded resolution timeout or equivalent mechanism does not recreate dispatch authority.
9. Recovery is a separately authorized fresh merchant attempt under a new lease/guard, never reuse of the old lease as parse authority.

If the same lease can never create a second Lambda dispatch authority, B2 is PASS.

---

## 5. Confirmation Scope — SUPA-EIS-B3

Confirm whether the corrected EC-2 guard↔lease contract is race-safe and internally complete.

Verify only the following:

1. EC-2 remains durable/shared Postgres-backed per-business pre-parse abuse control.
2. Guard acquisition occurs before lease/upload capability issuance.
3. The corrected model introduces a durable guard identity/token or equivalent binding primitive.
4. Lease creation and guard↔lease binding complete atomically or through an equivalent race-safe transaction before upload capability is issued.
5. A failed bind fails closed and releases/expires the guard safely.
6. Normal release/terminalization matches authoritative business plus bound guard/lease identity and cannot silently affect zero rows because the association was never established.
7. Abandoned work has expiry/recovery semantics that prevent permanent merchant lockout.
8. EC-2 remains logically separate from Parser Upload Lease state despite the binding.
9. The rate-control terminology matches the actual selected algorithm.
10. If the physical contract is fixed-window, it is described as fixed-window with coherent reset semantics; it is not mislabeled rolling-window.
11. Threshold/capacity policy was not silently changed.

If all items are complete and coherent at EIS level, B3 is PASS.

---

## 6. Confirmation Scope — SUPA-EIS-B4

Confirm whether the future migration privilege contract now safely neutralizes inherited/default privileges before support-state endpoints/functions become usable.

Verify only the following:

1. New support tables explicitly revoke privileges from `PUBLIC`, `anon`, and `authenticated` before use.
2. Sequence privileges are revoked where sequences exist.
3. Every new sensitive/state-mutating helper explicitly revokes `EXECUTE` from `PUBLIC`, `anon`, and `authenticated`.
4. Only narrow intended server/service-role authority is granted.
5. Browser/client has no direct lease/guard mutation authority.
6. Manager/Employee receive no new parser support-state authority.
7. No broad `USING (true)` or `WITH CHECK (true)` policy is introduced.
8. `SECURITY DEFINER` helpers pin a safe `search_path` and do not trust merchant-controlled tenant authority.
9. Server-derived business identity remains authoritative at the application boundary.
10. The corrected contract is compatible with the repository's current default-grant posture and does not depend on default privileges being safer than they actually are.

If all items are complete and coherent at EIS level, B4 is PASS.

---

## 7. Cross-Blocker Integrity Check

Confirm that the corrected B1–B4 contracts remain safe under:

- duplicate request;
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

Confirm that none of these support-state outcomes can by themselves create Catalog or Inventory Product Truth.

Product Truth must remain governed only by the existing Founder Workflow, EC-3 parse-before-write ordering, and exactly nineteen public Catalog commands.

---

## 8. Frozen Decisions — Do Not Re-review

The following remain closed and outside this confirmation unless `report1.116.md` directly contradicts one of them inside B1–B4:

- Owner-only Phase 1 import authority;
- exactly nineteen public Catalog commands;
- Catalog / Inventory truth separation;
- D-047 and D-068;
- BKR-1 through BKR-5;
- EC-2 as the already-selected business-level durable/shared pre-parse guard;
- EC-3 parse-before-write ordering;
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
- `ChecksumMode = ENABLED`;
- Papa Parse, ExcelJS, and `node:zlib`;
- all locked parser input/shape limits;
- 4,194,304-byte serialized-response ceiling;
- deterministic pre-stream `RESPONSE_TOO_LARGE`;
- corrected Infrastructure B1 acceptance matrix;
- all Infrastructure PASS findings in `report1.115.md`;
- Stage B data-minimization PASS except for verifying that B1–B4 corrections did not violate it.

Do not begin Stage C as part of this mission.

---

## 9. Required Output

Create only:

`communication/live/report1.117.md`

The report must contain:

1. Mission and authority.
2. Exact merged `main` SHA reviewed.
3. Confirmation that scope was limited to `SUPA-EIS-B1` through `SUPA-EIS-B4`.
4. B1 confirmation finding.
5. B2 confirmation finding.
6. B3 confirmation finding.
7. B4 confirmation finding.
8. Cross-blocker idempotency/failure-integrity finding.
9. Confirmation that all frozen decisions remained closed.
10. Confirmation that no implementation/database/environment mutation occurred.
11. Final verdict.
12. Any remaining blocker.

Allowed final verdicts only:

- `LAMBDA PARSER EIS SUPABASE BACKEND REVIEW — PASS`
- `LAMBDA PARSER EIS SUPABASE BACKEND REVIEW — CHANGES REQUIRED`
- `LAMBDA PARSER EIS SUPABASE BACKEND REVIEW — STOPPED — AUTHORITY OR EVIDENCE GAP`

Only a human-reviewed and merged `PASS` may unlock Stage C under `communication/live/instruction1.102.md`.

A PASS does not authorize EIS lock, Build Lock, Build Mode, SQL, migration execution, Supabase mutation, implementation, AWS resource creation, deployment, publication, or production use.

---

## 10. Prohibited Scope

Do not:

- modify prior reports;
- create or execute SQL/migrations;
- mutate Supabase;
- create/modify tables, functions, RPCs, RLS, grants, or default privileges;
- implement application/parser code;
- modify AWS/S3/IAM architecture or resources;
- execute project AWS commands;
- add/update dependencies;
- change Lovable;
- change Product Truth;
- change employee/manager permissions;
- add a twentieth Catalog command;
- weaken parser/input/runtime limits;
- reopen Infrastructure PASS decisions;
- enter Build Lock or Build Mode;
- deploy;
- publish;
- touch production;
- begin Stage C.

---

## 11. Repository Discipline

The executing room shall:

- verify current merged `main` before review;
- create only `communication/live/report1.117.md`;
- use a protected mission branch and pull request;
- preserve unrelated local changes untouched;
- use exact-file staging only;
- not use `git add .`;
- run the applicable Markdown Quality Gate;
- inspect staged content for secret-like material;
- report exact reviewed `main` SHA, commit SHA, branch, and PR;
- not merge its own PR.

---

## 12. Mission Control Decision

`SB-P-1.11-GC-12 — NARROW SUPABASE BACKEND CONFIRMATION AUTHORIZED`

Current authorized next action after human merge of this instruction:

**Supabase Backend Architecture → `communication/live/report1.117.md`**

Stage C remains locked until `report1.117.md` is human-reviewed, merged, and returns:

`LAMBDA PARSER EIS SUPABASE BACKEND REVIEW — PASS`
