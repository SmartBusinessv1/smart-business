# SMART BUSINESS — SUPABASE BACKEND ARCHITECTURE

# SB-P-1.11-GC-12 — NARROW SUPABASE BACKEND CONFIRMATION

**Report ID:** report1.117  
**Mission:** SB-P-1.11-GC-12 — Narrow Supabase Backend Confirmation  
**Authorized By:** `communication/live/instruction1.108.md`  
**Executing Room:** Supabase Backend Architecture  
**Mode:** SPECIALIST CONFIRMATION ONLY — NO IMPLEMENTATION  
**Implementation Authority:** NONE  
**Database Migration Authority:** NONE  
**Production Mutation Authority:** NONE  
**Stage C Authority:** NONE

---

## 1. Mission and Authority

This report performs the narrow Supabase Backend Architecture confirmation authorized by `communication/live/instruction1.108.md`.

The review is limited strictly to the four blockers previously identified in `communication/live/report1.110.md` and corrected by `communication/live/report1.116.md`:

- `SUPA-EIS-B1` — Parser Upload Lease lifecycle / atomic claim physical contract;
- `SUPA-EIS-B2` — no same-lease Lambda re-dispatch after unknown post-dispatch outcome;
- `SUPA-EIS-B3` — EC-2 guard-to-lease binding and fixed-window semantics;
- `SUPA-EIS-B4` — privilege neutralization for support tables and `SECURITY DEFINER` helpers.

No Infrastructure PASS finding, Product Truth decision, Founder Workflow decision, parser-runtime decision, AWS architecture decision, or permission model was reopened.

---

## 2. Exact Merged `main` SHA Reviewed

Latest merged `main` reviewed:

`06081c95fa6074855acd789b685b143b6e830ca7`

Commit:

`Authorize GC-12 narrow Supabase backend confirmation (#251)`

Primary reviewed inputs:

- `communication/live/instruction1.108.md`;
- `communication/live/instruction1.107.md`;
- `communication/live/report1.116.md`;
- `communication/live/report1.110.md`;
- `communication/live/report1.108.md`;
- `communication/live/report1.115.md`;
- `supabase/migrations/20260727000000_reconcile_default_grants.sql`;
- `supabase/migrations/20260810120000_sb_p_1_11_gc_1_catalog_import_support_schema.sql`;
- `src/integrations/supabase/client.server.ts`.

---

## 3. SUPA-EIS-B1 — Parser Upload Lease Lifecycle / Atomic Claim

**Result: CHANGES REQUIRED — one remaining physical-contract blocker.**

The correction materially resolves the original terminal-at-claim defect:

- `CONSUMED` is no longer used as the dispatch claim state;
- `CLAIMED` is now a distinct non-terminal state;
- the lifecycle is coherent at the application-contract level:
  - `ISSUED -> UPLOADED`;
  - `UPLOADED -> CLAIMED`;
  - `CLAIMED -> CONSUMED` after successful parser-result handling;
  - `CLAIMED -> FAILED` after resolved failure;
  - eligible pre-dispatch states may become `EXPIRED`;
- `ISSUED -> UPLOADED` and `UPLOADED -> CLAIMED` both include authoritative lease identity, server-derived business identity, expected current state, and non-expiry in the atomic database predicate;
- exactly one `UPLOADED -> CLAIMED` winner can exist;
- terminal states are excluded from every source-state predicate and therefore are not reopened by the specified transition flow;
- `terminal_at` and `failure_reason` gain useful database checks;
- the lease remains narrow transport/security support metadata and not Product Truth.

However, `report1.110.md` required the final physical contract to provide **database-level coherence for state, `confirmed_at`, `terminal_at`, `failure_reason`, expiry, and immutable lease authority fields because service-role bookkeeping bypasses RLS**.

`report1.116.md` does not fully close that requirement. The future table still grants full table authority to `service_role`, and the state transitions are described as plain service-role conditional updates. The table shape adds only:

- terminal-state / `terminal_at` pairing; and
- failed-state / `failure_reason` pairing.

It does not physically enforce, at the database boundary:

- `confirmed_at` being present only after successful `ISSUED -> UPLOADED` and absent while still `ISSUED`;
- `claimed_at` being present exactly when a lease has entered or passed through `CLAIMED`;
- coherence of `dispatched_at` with a previously successful claim;
- immutability of `business_id`, `guard_token`, `object_key`, `expected_byte_length`, `expected_sha256_b64`, `created_by`, `issued_at`, and `expires_at` after issuance;
- legal source/target transition ordering against a privileged accidental update.

Because `service_role` bypasses RLS and is specified to hold full table DML, application discipline alone does not satisfy the prior Stage B requirement that the **physical contract remain coherent even under privileged bookkeeping**.

### Exact remaining B1 correction required

Before Stage B can PASS, the EIS must lock one database-enforced mechanism that prevents the narrow server bookkeeping path from bypassing the lifecycle/immutability contract accidentally. It may use the smallest mechanism consistent with existing repository patterns, but it must establish the equivalent of:

1. database-level timestamp/state coherence for `confirmed_at`, `claimed_at`, `terminal_at`, and `failure_reason`;
2. database-level immutability of authority-bearing lease fields after issuance; and
3. database-level prevention of illegal state jumps/reopening by the privileged bookkeeping path, or an equivalent design in which direct privileged state mutation is unavailable and all transitions are forced through narrowly constrained transition operations.

This is a bounded physical-contract correction only. It does not require changing the six-state lifecycle, adding a Catalog command, changing Product Truth, or reopening AWS/Lambda architecture.

**SUPA-EIS-B1: CHANGES REQUIRED.**

---

## 4. SUPA-EIS-B2 — No Same-Lease Lambda Re-dispatch

**Result: PASS.**

The correction closes the prior unknown-outcome re-dispatch defect.

The authoritative dispatch gate is now only:

`UPLOADED -> CLAIMED`

and it is a one-winner conditional update. Once the row leaves `UPLOADED`, no specified path returns it to `UPLOADED` or re-enters the dispatch gate.

Confirmed:

- client retry cannot authorize another Lambda call from the same lease;
- server retry after timeout, network loss, or unknown outcome cannot authorize another Lambda call from the same lease;
- duplicate dispatch attempts lose atomically;
- stale, expired, terminal, or already-claimed leases do not satisfy the dispatch predicate;
- a stuck `CLAIMED` lease resolves fail-closed to `FAILED` after the bounded lazy resolution timeout when next touched;
- the resolution timeout does not recreate dispatch authority;
- recovery requires a new EC-2 acquisition, new lease, new object key, and new upload capability;
- the old lease is never reused as parse authority.

The 30-second lazy resolution value is an operational parameter and does not weaken the one-use guarantee.

**SUPA-EIS-B2: PASS.**

---

## 5. SUPA-EIS-B3 — EC-2 Guard-to-Lease Binding

**Result: PASS.**

The correction closes the original missing-association defect while preserving EC-2 as a logically separate durable/shared Postgres support primitive.

Confirmed:

- guard acquisition still occurs before lease/upload-capability issuance;
- every acquisition receives a fresh `guard_token`;
- the guard row starts with `lease_id = NULL`;
- `issue_parser_upload_lease(...)` re-verifies authoritative business + current guard token + unbound state + non-expiry under row lock;
- lease creation and `guard.lease_id` binding occur in one database transaction;
- no upload capability is issued before successful binding;
- failed or stale binding fails closed;
- normal release matches authoritative business + `guard_token` + bound `lease_id`;
- a stale caller cannot bind to or release a later guard-acquisition cycle because the token changes on every fresh acquisition;
- abandoned guards remain self-recovering through `expires_at`;
- EC-2 remains a separate table/lifecycle from Parser Upload Lease state;
- the rate algorithm is now correctly described as a fixed 10-minute window rather than a rolling/sliding window;
- the threshold remains 5 attempts per fixed 10-minute window;
- the 360-second guard hold remains unchanged.

One wording detail does not block PASS: if a bind lookup fails because the guard token is already stale/replaced, the attempted release using that stale token may naturally affect zero rows. That does not release another request's current guard and therefore fails closed safely. The required normal bound release path is now structurally complete.

**SUPA-EIS-B3: PASS.**

---

## 6. SUPA-EIS-B4 — RLS / Grants / Service-role Boundary

**Result: PASS.**

The correction is compatible with the repository's actual default-grant posture.

The canonical migration `20260727000000_reconcile_default_grants.sql` grants broad default privileges on future public tables and functions to `anon`, `authenticated`, and `service_role`. The correction no longer assumes safer defaults.

Confirmed future migration contract:

- `parser_upload_leases` explicitly revokes table privileges from `PUBLIC`, `anon`, and `authenticated`;
- `parser_preview_guards` explicitly revokes table privileges from `PUBLIC`, `anon`, and `authenticated`;
- both tables are RLS-enabled with no browser-facing policy;
- no authenticated SELECT or DML grant is added;
- no sequence revocation is required because UUID defaults use `gen_random_uuid()` and create no sequence object;
- all sensitive/state-mutating `SECURITY DEFINER` helpers explicitly revoke `EXECUTE` from `PUBLIC`, `anon`, and `authenticated`;
- only `service_role` receives the intended helper EXECUTE authority;
- each helper pins `search_path = public` according to the repository's established convention;
- browser/client has no direct lease/guard authority;
- Manager/Employee gain no direct parser support-state authority;
- no `USING (true)` or `WITH CHECK (true)` policy is introduced;
- the server authenticates the caller and re-derives authoritative business identity before invoking the service-role support path;
- the current `supabaseAdmin` implementation is server-only and explicitly documented as RLS-bypassing, matching the correction's intended narrow privileged boundary.

B4 does not authorize or perform any actual grant/RLS/function change.

**SUPA-EIS-B4: PASS.**

---

## 7. Cross-Blocker Idempotency / Failure Integrity

**Result: PASS for dispatch/idempotency safety; overall Stage B remains blocked only by B1 physical enforcement.**

The corrected model remains fail-closed under:

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

The B2 one-use dispatch contract prevents a second Lambda parse authority from the same lease. The B3 guard contract prevents a stale acquisition from binding/releasing another guard cycle. B4 prevents browser roles from directly exercising support-state functions or tables.

The remaining B1 defect is a privileged-physical-coherence issue: the EIS has not yet prevented an accidental privileged bookkeeping write from violating timestamp/state/immutability invariants. That defect does **not** create Product Truth by itself, but it is still a backend-architecture blocker because the support-state evidence and dispatch lifecycle must remain internally trustworthy under the selected RLS-bypassing bookkeeping model.

None of the support-state outcomes above can by themselves create Catalog or Inventory Product Truth. Parser success alone also remains insufficient. Product Truth remains behind the completed Founder Workflow, EC-3 parse-before-write ordering, and the existing governed Catalog/Inventory mutation paths with exactly nineteen public Catalog commands.

---

## 8. Frozen Decisions Remained Closed

Confirmed unchanged and not reopened:

- Owner-only Phase 1;
- exactly nineteen public Catalog commands;
- Catalog / Inventory truth separation;
- D-047;
- D-068;
- BKR-1 through BKR-5;
- EC-2 selection;
- EC-3 parse-before-write ordering;
- AWS Lambda narrow parser runtime;
- standard Lambda default compute;
- `nodejs24.x`;
- `ap-south-1`;
- 2,048 MB memory baseline;
- 15-second Lambda timeout;
- 10-second parser budget;
- finite reserved concurrency;
- transient private S3 parser-ingress;
- IAM Roles Anywhere;
- `ChecksumMode = ENABLED`;
- Papa Parse;
- ExcelJS;
- `node:zlib`;
- all parser input/shape limits;
- 4,194,304-byte response ceiling;
- deterministic pre-stream `RESPONSE_TOO_LARGE`;
- corrected Infrastructure B1 acceptance matrix;
- all Infrastructure PASS findings in `report1.115.md`.

The prior Stage B data-minimization PASS also remains intact. The B1–B4 correction adds only support timestamps and opaque guard identity metadata, not merchant file content, rows/cells, raw provider errors, AWS credentials, or private-key material.

---

## 9. No Implementation / No Mutation Confirmation

During this mission:

- prior reports modified: **NO**;
- application/parser code implemented or modified: **NO**;
- SQL or migrations created or executed: **NO**;
- Supabase test or production mutated: **NO**;
- tables/functions/RPCs created or modified: **NO**;
- RLS or grants changed: **NO**;
- AWS/S3/IAM architecture or resources changed: **NO**;
- project AWS commands executed: **NO**;
- dependencies added or updated: **NO**;
- Lovable changed: **NO**;
- Product Truth changed: **NO**;
- employee/manager permissions changed: **NO**;
- Catalog command count changed: **NO**;
- parser/runtime limits weakened: **NO**;
- Build Lock entered: **NO**;
- Build Mode entered: **NO**;
- deployment or publication performed: **NO**;
- production touched: **NO**;
- Stage C begun: **NO**.

The only repository file created by this mission is:

`communication/live/report1.117.md`

---

## 10. Remaining Blocker

Exactly one bounded blocker remains:

**`SUPA-EIS-B1 — privileged database-level lifecycle/immutability enforcement is incomplete.`**

The corrected six-state lifecycle and one-use claim are accepted. What remains is only the physical enforcement layer required by the prior Stage B finding because the chosen service-role bookkeeping path bypasses RLS and currently retains full table DML authority.

No B2, B3, or B4 blocker remains.

Stage C must not begin.

---

## 11. Final Verdict

`LAMBDA PARSER EIS SUPABASE BACKEND REVIEW — CHANGES REQUIRED`

There is one remaining Supabase Backend Architecture blocker within B1–B4: `SUPA-EIS-B1` database-level lifecycle/timestamp/authority-field coherence under the privileged service-role bookkeeping boundary.

This verdict does not authorize EIS lock, Build Lock, Build Mode, SQL, migrations, Supabase mutation, implementation, AWS resource creation, deployment, publication, production use, or Stage C.
