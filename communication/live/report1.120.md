# SMART BUSINESS — SUPABASE B1 MIGRATION-ACTIVATION-ORDER CORRECTION ADDENDUM

## SB-P-1.11-GC-15 — Migration Activation Order Correction

**Report ID:** report1.120
**Mission:** SB-P-1.11-GC-15 — Migration Activation Order Correction
**Authorized By:** `communication/live/instruction1.111.md`
**Executing Room:** Claude Code / Engineering Architecture
**Mode:** SPECIFICATION CORRECTION ONLY — NO IMPLEMENTATION
**Implementation Authority:** NONE
**Database Migration Authority:** NONE
**Production Mutation Authority:** NONE
**Stage C Authority:** NONE

---

## 1. Mission and Authority

This report is a self-contained **Supabase B1 Migration-Activation-Order Correction Addendum**. It corrects exactly the single remaining Supabase Backend Architecture blocker identified in `communication/live/report1.119.md` (final B1-only confirmation, `LAMBDA PARSER EIS SUPABASE BACKEND REVIEW — CHANGES REQUIRED`): `SUPA-EIS-B1 — migration activation ordering is not yet explicitly locked, so the specification does not prove that lifecycle enforcement is installed and privileges narrowed before the support-state path becomes usable.`

It does not overwrite, rewrite, or reopen `report1.108.md`, `report1.110.md`, `report1.116.md`, `report1.117.md`, `report1.118.md`, or `report1.119.md`, all of which remain unmodified, immutable evidence. This addendum becomes binding **together with** `report1.108.md`, `report1.116.md`, and `report1.118.md` only after a later final narrow Supabase Backend Architecture confirmation and Mission Control acceptance — it does not itself claim Stage B PASS. No SQL, migration, or Supabase mutation is created or executed by this mission — every reference below to a table, constraint, or function is a reference to the object already specified by `report1.118.md`/`report1.116.md`, not a new design.

---

## 2. Exact Merged `main` SHA Reviewed

Latest merged GitHub `main` at mission start:

`38726c0c38f031753bd3a2e7ff74c06e426d236d`

Confirmed via `git rev-parse HEAD` immediately after fast-forward synchronization, matching Mission Control's cited authoritative HEAD exactly.

Files read in full for this correction: `communication/live/instruction1.111.md`, `communication/live/report1.119.md`, `communication/live/instruction1.110.md`, `communication/live/report1.118.md`, `communication/live/instruction1.109.md`, `communication/live/report1.117.md`, `communication/live/report1.116.md`, `communication/live/report1.110.md`, `communication/live/report1.108.md`, `communication/live/report1.115.md`; `supabase/migrations/20260727000000_reconcile_default_grants.sql`, `supabase/migrations/20260810120000_sb_p_1_11_gc_1_catalog_import_support_schema.sql`, and `src/integrations/supabase/client.server.ts` (all already fully read and cited across this mission chain, re-confirmed unchanged this mission).

---

## 3. Confirmation — Scope Was Migration Activation Ordering Only

This correction adds exactly one new section to the accepted `report1.118.md` physical-enforcement design: a binding **enforcement-first migration/activation order**. It does not redesign, re-select, or re-specify any of the following, all of which `report1.119.md` §2–§9 already confirmed `PASS` and which this report treats as closed inputs, not subjects of review:

- the mutation-surface design (direct `service_role` DML removed from `parser_upload_leases`, narrow transition functions as the sole write path);
- the nine-function helper surface (`issue_parser_upload_lease`, `confirm_parser_upload_lease`, `claim_parser_upload_lease`, `mark_parser_upload_lease_dispatched`, `complete_parser_upload_lease`, `fail_parser_upload_lease`, `expire_parser_upload_lease`, `acquire_parser_preview_guard`, `release_parser_preview_guard`);
- the six-state database invariant `CHECK` constraint;
- authority-field immutability;
- illegal-transition prevention;
- the sixteen-code bounded `failure_reason` contract;
- the B1 safety-case matrix.

Also not reopened: `SUPA-EIS-B2` (PASS), `SUPA-EIS-B3` (PASS), `SUPA-EIS-B4` (PASS), cross-blocker dispatch/idempotency/failure-integrity (PASS), Stage B data-minimization (PASS), and every Infrastructure `PASS` finding in `report1.115.md`.

---

## 4. Exact Mandatory Activation Sequence

The future implementation must not make any parser support-state lifecycle usable — by any endpoint, route, background path, or import flow — until every step below has been completed, in this exact order, for this exact object set:

### Step 1 — Create support schema objects

Create, with no application path referencing them yet:

- `public.parser_upload_leases` — the accepted column set, `report1.118.md` §3.2 (`id`, `business_id`, `guard_token`, `object_key`, `expected_byte_length`, `expected_sha256_b64`, `created_by`, `state`, `issued_at`, `expires_at`, `confirmed_at`, `claimed_at`, `dispatched_at`, `terminal_at`, `failure_reason`);
- `public.parser_preview_guards` — the accepted column set, `report1.116.md` §5.2 (`business_id`, `guard_token`, `lease_id`, `acquired_at`, `expires_at`, `attempt_window_started_at`, `attempt_count_in_window`).

Only the already-accepted columns, types, and keys are created. No new column, table, or object beyond what `report1.108.md`/`report1.116.md`/`report1.118.md` already specify is authorized by this step.

### Step 2 — Install physical invariants and helpers before any use

Before any row can be created or read through an application path:

- install `parser_upload_leases_state_invariants` (`report1.118.md` §4), the static per-state `CHECK` constraint covering `confirmed_at`/`claimed_at`/`terminal_at` coherence for all six states and the bounded sixteen-code `failure_reason` validation (`report1.118.md` §7.1);
- install `issue_parser_upload_lease` (initial creation/binding, `report1.116.md` §5.3, unchanged by `report1.118.md`) and all six lifecycle transition helpers named in §4 above (`confirm_`, `claim_`, `mark_..._dispatched`, `complete_`, `fail_`, `expire_parser_upload_lease`);
- install `acquire_parser_preview_guard` and `release_parser_preview_guard` (`report1.116.md` §5.3, unchanged);
- every one of these nine functions declares `SECURITY DEFINER SET search_path = public`, exactly as `report1.118.md` §8.2 locks.

At the end of this step, the lifecycle is fully installed but **inactive**: no grant yet exists for any caller to reach it (Step 3–5), and no application code yet calls it (Step 7).

### Step 3 — Neutralize inherited/default privileges before any use

Before any support-state use, explicitly revoke — not merely decline to grant — the privileges `supabase/migrations/20260727000000_reconcile_default_grants.sql`'s `ALTER DEFAULT PRIVILEGES FOR ROLE postgres IN SCHEMA public GRANT ALL ON TABLES ...` / `GRANT EXECUTE ON FUNCTIONS ...` would otherwise silently confer on both new tables and all nine new functions the instant they are created in Step 1–2:

```sql
revoke all on public.parser_upload_leases from public, anon, authenticated;
revoke all on public.parser_preview_guards from public, anon, authenticated;
revoke execute on function public.issue_parser_upload_lease(uuid, uuid, text, integer, text, uuid)
  from public, anon, authenticated;
revoke execute on function public.confirm_parser_upload_lease(uuid, uuid) from public, anon, authenticated;
revoke execute on function public.claim_parser_upload_lease(uuid, uuid) from public, anon, authenticated;
revoke execute on function public.mark_parser_upload_lease_dispatched(uuid, uuid)
  from public, anon, authenticated;
revoke execute on function public.complete_parser_upload_lease(uuid, uuid) from public, anon, authenticated;
revoke execute on function public.fail_parser_upload_lease(uuid, uuid, text) from public, anon, authenticated;
revoke execute on function public.expire_parser_upload_lease(uuid, uuid) from public, anon, authenticated;
revoke execute on function public.acquire_parser_preview_guard(uuid) from public, anon, authenticated;
revoke execute on function public.release_parser_preview_guard(uuid, uuid, uuid)
  from public, anon, authenticated;
```

This neutralization must occur **before** Step 5's narrow `service_role` grants are issued, so that at no instant does either table or any function sit in the default-inherited (browser-reachable) grant state while simultaneously being reachable by anything other than the migration transaction itself. This preserves — does not merely reference — the already-`PASS` B4 browser/Manager/Employee exclusion (`report1.117.md` §6): no merchant session, of any role, is ever able to observe a window in which these objects carry their unneutralized default privileges.

### Step 4 — Remove direct `service_role` DML before application use

Applies specifically to `public.parser_upload_leases`, exactly as `report1.118.md` §3.2/§8.1 selected (Option A):

```sql
grant select on public.parser_upload_leases to service_role;
-- no insert, update, or delete grant is issued to service_role, or to any other role, on this table.
alter table public.parser_upload_leases enable row level security;
```

`service_role` retains only `SELECT` on `parser_upload_leases` directly. It has no `INSERT`, `UPDATE`, or `DELETE` grant on this table at any point after this step — including for the initial row-creation write, which is performed inside `issue_parser_upload_lease` under that function's own owner privileges, not under any grant held by the calling `service_role` session (`report1.118.md` §3.2's structural explanation of why `SECURITY DEFINER` functions need no caller-side table grant).

`public.parser_preview_guards` is explicitly **not** subject to this step: its grant contract (`GRANT ALL ... TO service_role`, unchanged from `report1.116.md` §6.2) was confirmed sufficient and not reopened by `report1.118.md` §8.1 or by `report1.119.md` §2–§9 — `SUPA-EIS-B3`'s guard contract remains its own, separately-accepted, plain-DML-via-supabaseAdmin model, and this correction does not alter it.

There is no point in this sequence, from the moment `parser_upload_leases` exists onward, at which `service_role` holds a broader grant on it than `SELECT`. Steps 1–2 create the table and its enforcement before any grant beyond `PUBLIC`'s implicit inherited default exists; Step 3 removes that inherited default before Step 5 issues anything narrower.

### Step 5 — Grant only the narrow helper surface

Only after Steps 1–4 are complete:

```sql
grant execute on function public.issue_parser_upload_lease(uuid, uuid, text, integer, text, uuid) to service_role;
grant execute on function public.confirm_parser_upload_lease(uuid, uuid) to service_role;
grant execute on function public.claim_parser_upload_lease(uuid, uuid) to service_role;
grant execute on function public.mark_parser_upload_lease_dispatched(uuid, uuid) to service_role;
grant execute on function public.complete_parser_upload_lease(uuid, uuid) to service_role;
grant execute on function public.fail_parser_upload_lease(uuid, uuid, text) to service_role;
grant execute on function public.expire_parser_upload_lease(uuid, uuid) to service_role;
grant execute on function public.acquire_parser_preview_guard(uuid) to service_role;
grant execute on function public.release_parser_preview_guard(uuid, uuid, uuid) to service_role;
```

No browser role (`anon`, `authenticated`) receives `EXECUTE` on any of these nine functions, and no broader, general-purpose, or additional mutation function is created beyond this exact nine-function set — this is the complete, closed list; nothing narrower or broader is authorized by this step.

### Step 6 — Run pre-cutover verification before application cutover

Before any Smart Business server code is switched to use the lifecycle, a later implementation/acceptance package must directly prove, against the actual migrated database (not merely re-assert from this specification):

1. `PUBLIC` cannot read or mutate `parser_upload_leases` or `parser_preview_guards`, and cannot execute any of the nine functions;
2. `anon` cannot read or mutate either table, and cannot execute any of the nine functions;
3. `authenticated` cannot read or mutate either table (no `SELECT` grant exists for either — unlike `catalog_import_batches`, per `report1.116.md` §5.11/§6.2, this correction chain grants `authenticated` nothing on either table), and cannot execute any of the nine functions;
4. a direct `service_role` `INSERT` attempt against `parser_upload_leases` is denied at the permission layer;
5. a direct `service_role` `UPDATE` attempt against `parser_upload_leases` is denied at the permission layer;
6. a direct `service_role` `DELETE` attempt against `parser_upload_leases` is denied at the permission layer;
7. a legal helper transition (for example `confirm_parser_upload_lease` against a genuine `ISSUED` row it authoritatively owns) succeeds and produces exactly the state/timestamp effect §4 of `report1.118.md` specifies;
8. an illegal helper transition (for example calling `complete_parser_upload_lease` against a row still in `ISSUED`) fails closed with zero rows affected and no state change;
9. an attempted authority-field mutation (any direct write attempt against `business_id`, `guard_token`, `object_key`, `expected_byte_length`, `expected_sha256_b64`, `created_by`, `issued_at`, or `expires_at`) fails closed;
10. the B2 one-use dispatch guarantee remains intact — a second call to `claim_parser_upload_lease` against an already-`CLAIMED` lease affects zero rows and does not permit a second Lambda invocation;
11. the exact `service_role` helper `EXECUTE` grant set matches Step 5 precisely — no function beyond the nine, and no role beyond `service_role`, holds `EXECUTE`;
12. no broader table or function privilege than specified above survived the migration's interaction with the repository's default-grant posture (`supabase/migrations/20260727000000_reconcile_default_grants.sql`).

A failure at any point in this list blocks Step 7 outright (§8). This mission defines the evidence requirement; it does not, and is not authorized to, execute it.

### Step 7 — Only then activate application use

Only after Step 6 passes in full may Smart Business server code be switched to the new lease/guard helper surface. Explicitly locked:

- no endpoint may depend on the new lifecycle before this point;
- no route may depend on it before this point;
- no parser dispatch path may depend on it before this point;
- no import flow may depend on it before this point;
- no background or internal path may depend on it before this point;
- a Step 6 verification failure blocks cutover outright — it is not a warning to be triaged after activation;
- a partial migration (any subset of Steps 1–5 incomplete) blocks cutover outright, regardless of how much of the sequence did complete.

---

## 5. Privilege-Neutralization Ordering

Explicit, restated for precision: Step 3 (neutralize `PUBLIC`/`anon`/`authenticated`) occurs strictly **after** Step 2 (objects and enforcement exist) and strictly **before** Step 5 (narrow `service_role` grants are issued). This ordering is deliberate, not incidental: neutralizing before the objects exist is impossible (there is nothing yet to revoke privileges from), and neutralizing after Step 5 would create a window — however brief within a single migration transaction — in which the objects are simultaneously enforcement-complete, narrowly granted to `service_role`, and *also* still carrying their unrevoked default privileges to `PUBLIC`/`anon`/`authenticated`. Ordering Step 3 before Step 5 makes that window structurally impossible to construct within this migration's own statement order, independent of whether the whole migration is atomic (§7).

---

## 6. `service_role` Direct-DML Restriction Ordering

Step 4 (remove direct `service_role` `INSERT`/`UPDATE`/`DELETE` on `parser_upload_leases`, retain only `SELECT`) occurs strictly **after** Step 2 (the nine functions — the only remaining write path — already exist) and strictly **before** Step 7 (application cutover). This ordering guarantees the alternate write path (the functions) is fully available before the direct path is closed, and that the direct path is definitively closed before any application code could ever be exposed to it — at no point does Smart Business server code exist, in an activated state, alongside an available direct-DML path on `parser_upload_leases`. `parser_preview_guards` is unaffected by Step 4, exactly as §4 Step 4 states; its own `GRANT ALL ... TO service_role` contract (`report1.116.md` §6.2) is installed as part of Step 1/Step 5 in its already-accepted form and is not narrowed by this correction.

---

## 7. Helper-Grant Ordering

Step 5 (`GRANT EXECUTE` on the nine functions to `service_role` only) occurs strictly **after** Steps 2–4 (functions exist, enforcement is installed, default privileges are neutralized, direct table DML is removed) and strictly **before** Step 7 (application cutover). Granting helper execution before enforcement/neutralization would create a window in which a caller could execute a function that either does not yet exist in its final enforced form or exists alongside a still-open direct-DML path capable of achieving the same effect without going through the function's predicate at all — ordering Step 5 last among the installation steps closes both possibilities. No helper `EXECUTE` grant is issued to any role other than `service_role`, and no function beyond the accepted nine is granted at all, at any point in this sequence.

---

## 8. Pre-Cutover Verification Gate

Restated as a gate, not merely a checklist: **Step 7 (application activation) is conditioned on Step 6 (verification) passing in full — not on Steps 1–5 having been merely *attempted*.** A later implementation/acceptance package that completes Steps 1–5 but has not yet produced the twelve items of evidence in §4 Step 6 has **not** satisfied this contract, and no application code may be switched to the lifecycle on the strength of installation alone. Verification failure at any single item blocks cutover for the entire lifecycle, not merely for the specific function/case that failed — this correction does not authorize a partially-activated lifecycle (for example, "confirm and claim are verified so those two may activate while complete/fail are still pending"). Activation is all-or-nothing across the full nine-function surface.

---

## 9. Atomicity / Partial-Failure / Rollback Principle

- **Prefer one explicit transaction.** Steps 1–5 are pure DDL/`GRANT`/`REVOKE` statements with no dependency on live external testing (Step 6, by contrast, necessarily requires out-of-transaction connections as different roles and therefore cannot be part of the same transaction as Steps 1–5). Steps 1–5 should be wrapped in one explicit `BEGIN` / `COMMIT` migration transaction within a single migration file, rather than relying on an unverified assumption about the specific migration-application tool's own implicit transaction behavior — explicit wrapping is correct and safe regardless of whether the underlying tool already transactions each file, and is not redundant with any documented guarantee this mission independently confirmed.
- **No new deployment/migration system.** This principle is expressed entirely in terms of ordinary PostgreSQL transaction semantics (`BEGIN`/`COMMIT`/automatic rollback on error) applied to a single migration file, consistent with every existing migration in this repository (including the two named in `instruction1.111.md` §2). No queue, orchestration tool, feature-flag service, or bespoke rollout mechanism is introduced.
- **Partial installation must never expose a usable lifecycle.** If any statement inside the Steps 1–5 transaction fails, PostgreSQL's own transactional DDL semantics roll back every change made by that transaction — there is no reachable intermediate state in which, for example, `parser_upload_leases` exists but its `CHECK` constraint does not, or the constraint exists but `PUBLIC`'s default privileges have not yet been revoked. The table and every function either all exist in their fully-enforced, fully-neutralized form, or none of them exist at all.
- **Rollback/retry leaves the lifecycle unusable until the full set is restored.** Because Step 7 (application activation) is gated on Step 6 (verification) succeeding, and Step 6 cannot meaningfully run against a rolled-back (non-existent) schema, a failed Steps 1–5 transaction leaves the lifecycle in exactly the same "does not yet exist, cannot be used" state it was in before the attempt — a retry simply re-runs Steps 1–5 from that same starting point. No intermediate retry state can leave the lifecycle partially enforced or partially privileged.

---

## 10. Required Later Acceptance Evidence

A later implementation/package review must provide, as a precondition for any activation decision (restated here as the binding evidence contract, consolidating §4 Step 6):

1. the schema/helper objects exist exactly as `report1.108.md`/`report1.116.md`/`report1.118.md` specify — no undocumented column, table, or function;
2. the six-state invariant `CHECK` constraint is active and independently verified to reject each of the twenty-plus cases in `report1.118.md` §10's safety-case matrix;
3. the bounded sixteen-code `failure_reason` validation is active and rejects any value outside that set;
4. `PUBLIC`/`anon`/`authenticated` privilege neutralization is effective for both tables and all nine functions;
5. direct `service_role` `INSERT`/`UPDATE`/`DELETE` against `parser_upload_leases` is denied;
6. the intended `service_role` helper `EXECUTE` grants exist for exactly the nine accepted functions;
7. no broader grant — on either table, on any function, or to any role beyond `service_role` — survived the interaction between this migration and the repository's existing default-grant posture;
8. a legal lifecycle transition succeeds end-to-end through the helper surface with the exact database-controlled timestamp effects `report1.118.md` §6 specifies;
9. an illegal lifecycle transition fails closed with zero rows affected, for at least one representative case from each category in `report1.118.md` §10;
10. an authority-field mutation attempt fails closed for at least one representative field;
11. same-lease second Lambda dispatch authority cannot be recreated — a second `claim_parser_upload_lease` call against an already-`CLAIMED` or terminal lease affects zero rows;
12. application cutover (§4 Step 7) occurs only after items 1–11 above have all passed — this item is itself part of the required evidence, not merely a consequence of it, so that "cutover happened only after verification" is itself an auditable claim, not an assumption.

This mission defines these requirements; it does not run them, and no evidence above is claimed as already collected.

---

## 11. Confirmation — All Prior B1 `PASS` Findings Remain Unchanged

`report1.119.md` §2–§7's seven `PASS` findings (mutation-surface design; transition-helper contract; six-state database invariants; authority-field immutability; illegal-transition prevention; failure-code contract; and the safety-case matrix in `report1.119.md` §9) are not altered, re-derived, or re-justified by this correction. This report references their exact object names, predicates, and constraints only to place them into a binding installation order — it changes none of their content.

---

## 12. Confirmation — `SUPA-EIS-B2`/`B3`/`B4` Remain Closed `PASS`

Not reopened, re-reviewed, or altered:

- **B2** — the one-winner `claim_parser_upload_lease` dispatch gate (§4 Step 6 item 10 references it only to require its verification, not to change it);
- **B3** — the guard-token binding sequence and `parser_preview_guards`' own grant contract (§4 Step 4 and §6 explicitly confirm this table is untouched by the direct-DML-removal step);
- **B4** — the `PUBLIC`/`anon`/`authenticated` exclusion this correction's Step 3 installs is the exact same exclusion B4 already established; this correction adds *when* it must be installed relative to the other steps, not *what* it excludes.

---

## 13. Confirmation — Product Truth and Frozen Decisions Remain Unchanged

Every decision listed in `instruction1.111.md` §7 is preserved without modification: Owner-only Phase 1 import authority; exactly nineteen public Catalog commands — no twentieth command; Catalog / Inventory truth separation; D-047 and D-068; BKR-1 through BKR-5; EC-2 and EC-3; the accepted six-state lease lifecycle; the accepted B1 Option A physical-enforcement architecture; the accepted B1 helper surface and bounded failure-code contract; AWS Lambda narrow parser runtime; standard Lambda default compute; `nodejs24.x`; `ap-south-1`; 2,048 MB starting memory; 15-second Lambda timeout; 10-second parser budget; finite reserved concurrency; transient private S3 parser-ingress; IAM Roles Anywhere; `ChecksumMode = ENABLED`; Papa Parse, ExcelJS, and `node:zlib`; all locked parser input/shape limits; the 4,194,304-byte serialized-response ceiling; deterministic pre-stream `RESPONSE_TOO_LARGE`.

Product Truth remains governed exclusively by the existing Founder Workflow and the nineteen public Catalog commands: nothing in the activation-order contract above reads or writes any Catalog or Inventory table, and reaching `CONSUMED` still does not, by itself, create any import-support or Product Truth write. No AWS architecture is touched — every step in §4–§9 is confined to Supabase-side migration sequencing.

---

## 14. No-Implementation / No-Mutation Confirmation

During this mission:

- prior reports modified: **NO**
- SQL or migrations created or executed: **NO**
- Supabase test or production mutated: **NO**
- live tables, functions, RPCs, triggers, constraints, RLS, grants, or default privileges created or modified: **NO**
- application or parser code implemented or modified: **NO**
- AWS or S3 or IAM architecture or resources changed: **NO**
- dependencies added or updated: **NO**
- Lovable changed: **NO**
- Product Truth changed: **NO**
- employee/manager permissions changed: **NO**
- a twentieth Catalog command added: **NO**
- parser/input/runtime limits weakened: **NO**
- accepted B1 findings, `B2`, `B3`, or `B4` reopened: **NO**
- Infrastructure `PASS` findings reopened: **NO**
- EIS lock, Build Lock, or Build Mode entered: **NO**
- deployment or publication performed: **NO**
- production touched: **NO**
- Stage C begun: **NO**

The only repository change under this mission is this report: `communication/live/report1.120.md`.

---

## 15. Final Disposition

`LAMBDA PARSER EIS SUPABASE B1 MIGRATION-ACTIVATION-ORDER CORRECTION — READY FOR FINAL BACKEND CONFIRMATION`

The sole remaining `SUPA-EIS-B1` gap identified in `report1.119.md` — an unlocked migration/activation ordering contract — is closed by the binding seven-step enforcement-first sequence in §4 (create objects → install invariants and helpers → neutralize default privileges → remove direct `service_role` DML → grant only the narrow helper surface → verify → activate), the explicit ordering rationale in §5–§8, the atomicity/rollback principle in §9, and the twelve-item required acceptance evidence in §10. No already-accepted B1 finding, and no `B2`/`B3`/`B4` finding, was redesigned or reopened.

This disposition is not a Stage B `PASS` — only Supabase Backend Architecture may issue that verdict, in the separate final narrow confirmation `instruction1.111.md` §11 authorizes next. This report grants no implementation, migration, EIS lock, Build Lock, Build Mode, deployment, Stage C, or production authority.

---

## 16. Remaining Blocker

**None.** This correction resolves the sole authorized blocker (migration activation ordering) with a specification precise enough — exact seven-step sequence, exact object references, exact ordering rationale, exact atomicity principle, exact twelve-item evidence contract — for a final Supabase Backend Architecture reviewer to determine `PASS`/`FAIL` without inventing missing semantics.
