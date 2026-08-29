# SMART BUSINESS — SUPABASE EIS CORRECTION ADDENDUM

## SB-P-1.11-GC-11 — Bounded Supabase EIS Correction

**Report ID:** report1.116
**Mission:** SB-P-1.11-GC-11 — Bounded Supabase EIS Correction
**Authorized By:** `communication/live/instruction1.107.md`
**Executing Room:** Claude Code / Engineering Architecture
**Mode:** SPECIFICATION CORRECTION ONLY — NO IMPLEMENTATION
**Implementation Authority:** NONE
**Database Migration Authority:** NONE
**Production Mutation Authority:** NONE
**Deployment Authority:** NONE

---

## 1. Mission and Authority

This report is a self-contained **Supabase EIS Correction Addendum**. It corrects exactly the four bounded Supabase Backend Architecture blockers identified in `communication/live/report1.110.md` (Stage B review, `LAMBDA PARSER EIS SUPABASE BACKEND REVIEW — CHANGES REQUIRED`) inside the physical contracts specified by `communication/live/report1.108.md` §5–§6.

It does not overwrite, rewrite, or reopen `report1.108.md`, `report1.110.md`, `report1.112.md`, `report1.114.md`, or `report1.115.md`, all of which remain unmodified, immutable evidence. This addendum becomes binding **together with** `report1.108.md`, `report1.112.md`, and `report1.114.md` only after later Supabase Backend Architecture confirmation and Mission Control acceptance — it does not itself claim Stage B PASS. Every part of `report1.108.md` not named in §3–§6 below remains exactly as merged.

This correction does not reopen the accepted parser architecture, Founder Workflow baseline, Product Truth, permissions, the Catalog command surface, the AWS provider selection, or any frozen decision listed in §13. No SQL, migration, Supabase mutation, table, function, RPC, RLS policy, or grant is created or executed by this mission — every SQL fragment below is illustrative specification only.

---

## 2. Exact `main` SHA Reviewed

Latest merged GitHub `main` at mission start:

`c2413a1cba6cc4997c6fcb92de4ee68486ff9a13`

Confirmed via `git rev-parse HEAD` immediately after fast-forward synchronization, matching Mission Control's cited authoritative HEAD exactly.

Files read in full for this correction: `communication/live/instruction1.107.md`, `communication/live/instruction1.102.md`, `communication/live/report1.110.md`, `communication/live/report1.108.md`, `communication/live/report1.115.md`, `communication/live/report1.112.md`, `communication/live/report1.114.md`, `communication/live/report1.107.md`, `communication/live/report1.106.md`; `supabase/migrations/20260727000000_reconcile_default_grants.sql`, `supabase/migrations/20260810120000_sb_p_1_11_gc_1_catalog_import_support_schema.sql`, and `src/integrations/supabase/client.server.ts` in full. The Founder Workflow baseline (`report1.96.md`, `report1.98.md`, `report1.100.md`, `report1.101.md`, `report1.102.md`) was already fully known from this mission chain and is used here only as inherited, unreopened context.

---

## 3. Correction — `SUPA-EIS-B1`

### 3.1 The defect

`report1.110.md` §3–§4 identified that `report1.108.md` §5.4's illustrative dispatch-claim SQL sets `state = 'CONSUMED'` (a terminal state, with `terminal_at` set) at the moment of *claiming* dispatch — before Lambda has even been invoked, let alone returned a result. `report1.108.md`'s own prose (§5.3, §14) requires `CONSUMED` to mean successful parse **and** Smart Business validation. A row cannot be simultaneously "already terminal" and "a pending dispatch that may later resolve to `FAILED`." `report1.108.md` §12's `ISSUED → UPLOADED` transition also relied on an application-side expiry precheck rather than an atomic database predicate.

### 3.2 Corrected lease table shape

Illustrative specification only — no table is created by this mission. This shape amends `report1.108.md` §5.2.

```text
parser_upload_leases
  id                    uuid primary key default gen_random_uuid()
  business_id           uuid not null references businesses(id)         -- immutable after issuance
  guard_token           uuid not null                                    -- immutable after issuance (§5)
  object_key            text not null unique                             -- immutable after issuance
  expected_byte_length  integer not null
                          check (expected_byte_length > 0
                                 and expected_byte_length <= 5242880)     -- immutable after issuance
  expected_sha256_b64   text not null                                    -- immutable after issuance
  created_by            uuid not null                                    -- immutable after issuance
  state                 text not null default 'ISSUED'
                          check (state in
                            ('ISSUED','UPLOADED','CLAIMED','CONSUMED','FAILED','EXPIRED'))
  issued_at             timestamptz not null default now()               -- immutable after issuance
  expires_at            timestamptz not null                             -- immutable after issuance
  confirmed_at          timestamptz                                      -- set once, ISSUED -> UPLOADED
  claimed_at            timestamptz                                      -- set once, UPLOADED -> CLAIMED
  dispatched_at         timestamptz                                      -- diagnostic only; see 3.4
  terminal_at           timestamptz                                      -- set once, entry into a terminal state
  failure_reason        text,                                            -- bounded internal code; see 3.5

  constraint parser_upload_leases_terminal_at_pair check (
    (state in ('CONSUMED','FAILED','EXPIRED')) = (terminal_at is not null)
  ),
  constraint parser_upload_leases_failure_reason_pair check (
    (state = 'FAILED') = (failure_reason is not null)
  )
);
```

`object_key`, `expected_byte_length`, and `expected_sha256_b64` retain exactly the same meaning, source, and format (base64 SHA-256, `report1.108.md` §11.1) already locked; only the state vocabulary and timestamp set are corrected. `guard_business_id` (the field name used in `report1.108.md` §5.2) is renamed `guard_token` and repurposed to hold the exact EC-2 guard-acquisition identity the lease was bound under (§5), which is a stronger audit/binding value than the business ID alone (already redundant with the lease's own `business_id` column).

### 3.3 Corrected atomic transitions

Every transition below is a single-row conditional statement whose `WHERE` clause is the sole authorization boundary; `:businessId` is always the value freshly re-derived from the currently authenticated caller by the Smart Business server (`report1.108.md` §4 steps 2–4), never trusted from client input or from a prior read of the lease row itself.

| # | Transition | Predicate (`WHERE`) | Effect (`SET`) |
|---|---|---|---|
| 1 | `ISSUED → UPLOADED` | `id = :leaseId AND business_id = :businessId AND state = 'ISSUED' AND expires_at > now()` | `state = 'UPLOADED', confirmed_at = now()` |
| 2 | `UPLOADED → CLAIMED` | `id = :leaseId AND business_id = :businessId AND state = 'UPLOADED' AND expires_at > now()` | `state = 'CLAIMED', claimed_at = now()` |
| 3 | `CLAIMED → CONSUMED` | `id = :leaseId AND business_id = :businessId AND state = 'CLAIMED'` | `state = 'CONSUMED', terminal_at = now()` |
| 4 | `CLAIMED → FAILED` | `id = :leaseId AND business_id = :businessId AND state = 'CLAIMED'` | `state = 'FAILED', terminal_at = now(), failure_reason = :code` |
| 5 | `ISSUED → EXPIRED` or `UPLOADED → EXPIRED` | `id = :leaseId AND business_id = :businessId AND state IN ('ISSUED','UPLOADED') AND expires_at <= now()` | `state = 'EXPIRED', terminal_at = now()` |

Transition 2 is the sole dispatch-authorization boundary (§4). Note that `expires_at > now()` is embedded directly in transitions 1 and 2's predicates — this is the corrected, atomically-enforced non-expiry check `report1.110.md` §3 required in place of an application-side precheck. Transition 5 is the mirror predicate (`expires_at <= now()`) and applies only to the two pre-dispatch states; `CLAIMED` is never eligible for expiry (§3.4), and `CONSUMED`/`FAILED`/`EXPIRED` are terminal and excluded from every predicate above by construction, since no predicate names them as a source state — this is the exact database-level mechanism making terminal states one-way and unreopenable.

Each transition is issued by the trusted service-role client (`supabaseAdmin`, `src/integrations/supabase/client.server.ts`) as a plain conditional `UPDATE ... RETURNING id`, exactly matching the already-proven `catalog_import_batches` claim pattern in `src/server-functions/catalog-import.ts` (`.update(...).eq(...).in("status", [...]).select("id")`) — no `SECURITY DEFINER` wrapper is needed for a single-table conditional update executed by a client that already holds full table grants and bypasses RLS (§6). A transition affecting zero rows is a normal, expected, safe outcome (§7), not an error condition requiring special handling beyond returning the appropriate sanitized result.

### 3.4 `CLAIMED` is never eligible for expiry

`report1.110.md` §3 explicitly required "non-expiry predicate on upload confirmation **and dispatch claim**." `CLAIMED` is deliberately absent from every expiry predicate (transition 5) and from transitions 1–2's source states — once a lease reaches `CLAIMED`, `expires_at` no longer has any bearing on it. This is intentional: `expires_at` governs only the pre-dispatch upload-capability window (`report1.108.md` §10.1); after a dispatch has been claimed, the lease's fate is governed exclusively by dispatch-outcome resolution (§4), never by the original upload-capability clock.

`dispatched_at` is a diagnostic-only timestamp, set (via a plain single-column update, not a state transition) at the moment Smart Business's outbound Lambda invocation call is actually sent, distinguishing "claimed but crashed before attempting invocation" (`dispatched_at IS NULL`) from "invocation attempted, outcome not yet resolved" (`dispatched_at IS NOT NULL`) for later operational diagnosis. No transition predicate depends on `dispatched_at`; it never gates a state change.

### 3.5 `failure_reason` nullability

Enforced by `parser_upload_leases_failure_reason_pair`: `failure_reason` is `NOT NULL` if and only if `state = 'FAILED'`. It is always `NULL` for `ISSUED`, `UPLOADED`, `CLAIMED`, `CONSUMED`, and `EXPIRED` — `EXPIRED` needs no distinguishing code, since expiry is self-explanatory, and `CONSUMED` never carries a failure code by definition. Values remain the closed, bounded internal codes already established across `report1.108.md`/`report1.112.md` (for example `INTEGRITY_MISMATCH`, `RESPONSE_TOO_LARGE`, `HEAD_OBJECT_NOT_FOUND`, `HEAD_CHECKSUM_METADATA_MISSING`, `HEAD_SIZE_MISMATCH`, `HEAD_CHECKSUM_MISMATCH`), extended by this correction with `DISPATCH_OUTCOME_UNKNOWN` (§4.2) and `GUARD_BINDING_FAILED` (§5.3) — never a raw provider error, stack trace, or free-text value.

### 3.6 Immutable authority fields

`business_id`, `guard_token`, `object_key`, `expected_byte_length`, `expected_sha256_b64`, and `created_by` are written exactly once, at row creation (§5.4), and are never updated by any transition in §3.3 or by the guard-binding step in §5. No predicate or application code path in this correction updates these columns after issuance — the EIS defines no server-only correction path for them either, so the "except where the EIS explicitly permits" clause in `instruction1.107.md` §3 does not apply; they are unconditionally immutable post-issuance.

### 3.7 Result

`SUPA-EIS-B1` is corrected. The lease lifecycle is now one coherent, six-state model with a non-terminal dispatch representation (`CLAIMED`), every transition atomically predicated on authoritative identity, state, and (where applicable) non-expiry, and every terminal state reachable only from a specific non-terminal source and unreachable from any other state. The lease's purpose (narrow transport/security support state, never Product Truth) is unchanged from `report1.108.md` §5.12, which `report1.110.md` §3 already confirmed `PASS`.

---

## 4. Correction — `SUPA-EIS-B2`

### 4.1 The defect

`report1.108.md` §5.8 described network-loss-after-Lambda-success recovery as "a retry attempt finds no object and is driven to `FAILED`" via a client retry that "re-enters the flow at step 11" of the end-to-end sequence — step 11 being the actual Lambda invocation call. Under the pre-correction single-terminal-state model this was the only available recovery path, but it means a retry after a lost, timed-out, or ambiguous outcome could genuinely re-invoke Lambda for the same lease while the first invocation might still be executing or might have already completed — exactly the defect `report1.110.md` §4 identifies.

### 4.2 Corrected no-re-dispatch rule

**Once a lease reaches `CLAIMED` (§3.3 transition 2), no code path in this specification can ever invoke Lambda again for that same lease, regardless of the outcome of the first invocation attempt.**

This is a structural guarantee, not a policy convention: transition 2 (`UPLOADED → CLAIMED`) is the *only* predicate in the entire lifecycle whose source state is `UPLOADED`, and it can succeed at most once per lease because the single-row conditional `UPDATE ... RETURNING id` used to perform it (§3.3) admits exactly one winner — every other concurrent, retried, or replayed attempt against the same `leaseId` observes `state ≠ 'UPLOADED'` (already `CLAIMED` or already terminal) and affects zero rows. There is no transition anywhere in §3.3 whose target is `CLAIMED` from any state other than `UPLOADED`, and no transition returns a lease from `CLAIMED` back to `UPLOADED`. Lambda invocation is therefore only ever attempted by the single caller that wins transition 2, exactly once, ever, for that lease.

Required semantics, each satisfied structurally:

- **Client retry against an already claimed/dispatched lease does not re-dispatch Lambda** — the retry's own attempt at transition 2 affects zero rows; the server returns the lease's current status (still `CLAIMED`, or a resolved terminal state) without contacting Lambda.
- **Server retry after unknown outcome does not re-dispatch Lambda** — same structural reason; there is no code path that re-attempts transition 2 for a lease already past `UPLOADED`.
- **Duplicate confirmation does not create new dispatch authority** — a duplicate `ISSUED → UPLOADED` attempt (transition 1) against an already-`UPLOADED`/`CLAIMED`/terminal lease affects zero rows and grants nothing; only the original, single successful transition 1 ever produces the `UPLOADED` state that transition 2 consumes.
- **Duplicate dispatch attempt loses atomically** — this is transition 2 itself; exactly one caller wins the `RETURNING` row.
- **Stale, expired, terminal, or already-dispatched leases do not invoke Lambda** — none of these states satisfy transition 2's `state = 'UPLOADED'` predicate.
- **Unknown post-dispatch outcome fails closed for that lease** — §4.3.

### 4.3 Resolving a stuck `CLAIMED` lease

A lease can legitimately remain `CLAIMED` if Smart Business's own outbound Lambda call is lost, times out, or its result is otherwise never received. This correction defines a bounded **dispatch-resolution timeout of 30 seconds** from `claimed_at` (Lambda's own 15-second provider timeout plus a generous margin for SigV4/Roles-Anywhere credential acquisition, connection setup, and network variance — a Phase 1 default justified against the already-frozen 15-second Lambda timeout, not an arbitrary figure, and tunable with later evidence exactly as the reserved-concurrency and rate-window defaults elsewhere in this EIS chain already are).

If a `CLAIMED` lease is next touched (for example, by a status poll or by any request naming that `leaseId`) after `claimed_at + 30s` has elapsed with no resolution, that touch performs transition 4 (`CLAIMED → FAILED`) with `failure_reason = 'DISPATCH_OUTCOME_UNKNOWN'` before doing anything else. This is **lazy** resolution — evaluated only when the lease is next referenced, not by a new background scheduler, cron job, or queue (`instruction1.107.md` §4 explicitly prohibits adding one). No proactive sweep is required for correctness: even a `CLAIMED` lease that is never touched again poses no re-dispatch risk (§4.2 already makes that structurally impossible) and causes no permanent guard lockout, because the bound EC-2 guard's own independent `expires_at` (§5.4) continues to self-heal regardless of whether the lease row is ever explicitly resolved.

### 4.4 Recovery path

Per `instruction1.107.md` §4: recovery from a `CLAIMED`-stuck or `FAILED` lease never reuses that lease as parse authority. A merchant retry is a **new** preview request: new EC-2 guard acquisition (§5), new lease (§3), new object key, new upload capability. The old lease remains permanently `FAILED` (or eventually reachable via §4.3), an inert audit record. No queue, orchestration service, or new backend is introduced to manage this — it is the same "start a new import" behavior already locked in `report1.108.md` §9 item 10 for any terminal-lease replay, now also the exclusive recovery path for an unresolved dispatch.

### 4.5 Result

`SUPA-EIS-B2` is corrected. `report1.108.md` §5.8's description of network-loss recovery via Lambda re-invocation is superseded by §4.2–§4.4 above: the corrected model never re-invokes Lambda for an already-claimed lease under any circumstance, resolves a genuinely stuck dispatch to `FAILED` via a bounded, lazily-evaluated timeout rather than indefinite ambiguity, and directs all recovery through a fresh lease under a fresh guard acquisition.

---

## 5. Correction — `SUPA-EIS-B3`

### 5.1 The defect

`report1.108.md` §6.2's guard release predicate (`WHERE business_id = :businessId AND lease_id = :leaseId`) requires `lease_id` to already be populated on the guard row, but §6.5's acquisition upsert never writes it — the lease does not exist yet at acquisition time, and no later binding step was specified. Every normal terminal release therefore matches zero rows, and the guard sits held until its own 360-second `expires_at` passes regardless of how quickly the lease actually resolves. `report1.108.md` §6.4 also called the attempt-rate mechanism a "rolling 10-minute window," while the specified mechanism (a single `attempt_window_started_at` reset when stale, plus a counter) is a fixed-window counter, not a sliding/rolling one.

### 5.2 Corrected guard table shape

Illustrative specification only. This shape amends `report1.108.md` §6.2, adding one column (`guard_token`) and correcting the semantics of `lease_id`.

```text
parser_preview_guards
  business_id                uuid primary key references businesses(id)
  guard_token                 uuid not null default gen_random_uuid()   -- regenerated on every fresh acquisition
  lease_id                    uuid                                       -- NULL until bound (§5.3); set at most once per guard_token
  acquired_at                 timestamptz not null
  expires_at                  timestamptz not null
  attempt_window_started_at   timestamptz not null                       -- fixed-window start (§5.5)
  attempt_count_in_window     integer not null default 0
```

`guard_token` is new: a fresh random value assigned on every successful (re)acquisition, distinguishing one guard-acquisition instance from the next reuse of the same `business_id` primary-key row after expiry, so that a stale caller from an earlier acquisition cycle can never act on a later one (§5.4).

### 5.3 Race-safe acquire → create-and-bind → release sequence

Guard acquisition (`acquire_parser_preview_guard(p_business_id uuid)`, `SECURITY DEFINER`) is corrected to reset the binding state on every fresh acquisition and to return the new `guard_token`:

```sql
INSERT INTO parser_preview_guards
    (business_id, guard_token, lease_id, acquired_at, expires_at,
     attempt_window_started_at, attempt_count_in_window)
VALUES (:businessId, gen_random_uuid(), NULL, now(), now() + interval '360 seconds',
        now(), 1)
ON CONFLICT (business_id) DO UPDATE
   SET guard_token = gen_random_uuid(),
       lease_id = NULL,
       acquired_at = now(),
       expires_at = now() + interval '360 seconds',
       attempt_window_started_at =
         CASE WHEN parser_preview_guards.attempt_window_started_at
                    < now() - interval '10 minutes'
              THEN now()
              ELSE parser_preview_guards.attempt_window_started_at END,
       attempt_count_in_window =
         CASE WHEN parser_preview_guards.attempt_window_started_at
                    < now() - interval '10 minutes'
              THEN 1
              ELSE parser_preview_guards.attempt_count_in_window + 1 END
 WHERE parser_preview_guards.expires_at < now()
   AND (parser_preview_guards.attempt_window_started_at
          < now() - interval '10 minutes'
        OR parser_preview_guards.attempt_count_in_window < 5)
RETURNING business_id, guard_token;
```

Resetting `lease_id = NULL` and regenerating `guard_token` on every fresh acquisition (both the `INSERT` branch and the `ON CONFLICT ... DO UPDATE` branch) ensures each new guard-acquisition cycle starts from a clean, unbound slate — a stale `lease_id` value left over from a prior, already-expired cycle can never be mistaken for the current one, and a caller holding a stale `guard_token` from an earlier cycle can never successfully bind or release against the current cycle (§5.4 predicates always match on `guard_token`, not on `business_id` alone).

Lease creation and guard binding are combined into **one** new `SECURITY DEFINER` function, `issue_parser_upload_lease(p_business_id uuid, p_guard_token uuid, p_object_key text, p_expected_byte_length integer, p_expected_sha256_b64 text, p_created_by uuid)`, executed as a single Postgres transaction (a function body is transactional by default), so there is no window between "lease exists" and "lease is bound to its guard" in which a crash could leave an orphaned, unbound lease:

1. re-verify, inside the transaction: `SELECT 1 FROM parser_preview_guards WHERE business_id = p_business_id AND guard_token = p_guard_token AND lease_id IS NULL AND expires_at > now() FOR UPDATE`;
2. if that row is not found, **fail closed**: release the guard immediately (`UPDATE parser_preview_guards SET expires_at = now() WHERE business_id = p_business_id AND guard_token = p_guard_token`, matched on `business_id` + `guard_token` only, since `lease_id` was never set in this branch) and return a failure indicator — no lease row is inserted, and this is the exact mechanism satisfying `instruction1.107.md` §5 item 4 ("if binding fails, fail closed and release/expire the guard");
3. if found, insert the new `parser_upload_leases` row (`state = 'ISSUED'`, `expires_at = now() + 300s`, the immutable authority fields from §3.6) and, in the same transaction, `UPDATE parser_preview_guards SET lease_id = <new lease id> WHERE business_id = p_business_id AND guard_token = p_guard_token` — both writes commit together or not at all;
4. return the new lease's `id`/`expires_at` on success.

This entire sequence — guard acquisition, then lease-issuance-with-binding — completes **before** any upload capability (presigned S3 POST) is issued, satisfying `instruction1.107.md` §5 item 3 exactly: no browser ever receives an upload capability for a lease that failed to bind to its guard.

Release (`release_parser_preview_guard(p_business_id uuid, p_guard_token uuid, p_lease_id uuid)`, `SECURITY DEFINER`), called when the lease reaches any terminal state (`CONSUMED`, `FAILED`, `EXPIRED` — unchanged trigger condition from `report1.108.md` §12.1):

```sql
UPDATE parser_preview_guards
   SET expires_at = now()
 WHERE business_id = :businessId
   AND guard_token = :guardToken
   AND lease_id = :leaseId
   AND expires_at > now();
```

This now succeeds under normal operation because `lease_id` was actually populated by the binding step in `issue_parser_upload_lease` — the exact defect `report1.110.md` §5 identified is closed. Requiring all three of `business_id`, `guard_token`, and `lease_id` to match is what `instruction1.107.md` §5 item 5 means by "release... only when both authoritative business and bound lease/guard identity match": a release attempt cannot act on any guard cycle other than the exact one its lease was bound to.

### 5.4 Race safety

Because guard acquisition (§5.3) requires `expires_at < now()` (guard not currently held), no second guard can be acquired for a business while an earlier guard is still held — including for the entire span from acquisition through lease binding through eventual lease-terminal release. This means the binding step in `issue_parser_upload_lease` needs to defend only against the single narrow race where the guard legitimately expires in the interval between the application receiving a successful `acquire_parser_preview_guard` result and calling `issue_parser_upload_lease` (for example, extreme scheduling delay) — exactly what the `expires_at > now()` clause in step 1 of §5.3 checks, with the fail-closed release in step 2 as the resolution. A guard reacquired by a *different* concurrent request after the first request's guard expired is a structurally distinct row state (a new `guard_token`, `lease_id` reset to `NULL`), so the first request's now-stale `guard_token` can never bind to or release the second request's guard cycle.

### 5.5 Corrected rate-window terminology

The mechanism specified in §5.3 — a single `attempt_window_started_at` timestamp that resets to `now()` (with the counter reset to `1`) only once it is more than 10 minutes stale, otherwise incrementing a counter within that same fixed window — is a **fixed-window counter**, not a rolling/sliding window. `report1.108.md` §6.4's "rolling 10-minute window" wording is corrected to: **"a fixed 10-minute window, reset to a fresh window (counter reset to 1) the first time it is accessed after the previous window's start is more than 10 minutes old."** This means attempt counts do not smoothly decay; a business that makes attempts near the end of one fixed window and again just after a new window starts could, in the worst case, make close to twice the nominal per-window ceiling within a shorter elapsed span than 10 minutes. This is disclosed explicitly as a known, accepted property of the fixed-window mechanism, not silently glossed over.

Per `instruction1.107.md` §5, the threshold/capacity policy itself is **not** changed by this correction: the ceiling remains 5 attempts per fixed 10-minute window, and the guard-hold duration remains 360 seconds, exactly as `report1.108.md` §6.4 already justified. `report1.110.md` does not prove a different algorithm or threshold is required — only that the label must match the mechanism, which this correction does.

### 5.6 No permanent lockout after abandoned work

Unchanged from `report1.108.md` §6.6: because acquisition is a conditional upsert keyed on `expires_at < now()`, an abandoned guard (no release ever called, for any reason) self-heals on the next acquisition attempt after its `expires_at` passes — no separate sweep is required for guard recovery. The corrected binding-failure path (§5.3 step 2) additionally *shortens* the exposure window for one specific abandonment case (a bind failure detected synchronously) by releasing the guard immediately rather than waiting out the full 360-second TTL.

### 5.7 Result

`SUPA-EIS-B3` is corrected. Guard acquisition, lease issuance, and guard-to-lease binding are now one race-safe, atomically-bound sequence with a working release predicate; EC-2 remains logically separate support state from the Parser Upload Lease (two tables, two independent lifecycles, joined only by the audit/binding value `guard_token`/`lease_id`); the rate-window terminology now matches the specified Postgres mechanism; and the threshold/capacity policy is unchanged.

---

## 6. Correction — `SUPA-EIS-B4`

### 6.1 The defect, confirmed against repository evidence

`supabase/migrations/20260727000000_reconcile_default_grants.sql` establishes, and this mission directly re-read:

```sql
ALTER DEFAULT PRIVILEGES FOR ROLE postgres IN SCHEMA public
  GRANT ALL ON TABLES TO anon, authenticated, service_role;

ALTER DEFAULT PRIVILEGES FOR ROLE postgres IN SCHEMA public
  GRANT EXECUTE ON FUNCTIONS TO anon, authenticated, service_role;
```

Because every migration in this repository runs as `postgres` (confirmed in that same migration's own comment and independently verifiable via `pg_tables`), **any** new table or function this EIS's future migration creates automatically receives full table privileges and function `EXECUTE` for `anon` and `authenticated` — including an unauthenticated browser session — unless explicitly revoked. This is not a theoretical concern: it is the repository's actual, currently-active default-privilege posture, and it is exactly what `report1.110.md` §6 flagged against the two `SECURITY DEFINER` helpers `report1.108.md` §6.1 proposes.

The repository already has a proven, working correction pattern for exactly this problem, applied to `catalog_import_batches`/`catalog_import_rows` in `supabase/migrations/20260810120000_sb_p_1_11_gc_1_catalog_import_support_schema.sql`:

```sql
REVOKE ALL ON public.catalog_import_batches FROM PUBLIC, anon, authenticated;
GRANT ALL ON public.catalog_import_batches TO service_role;
GRANT SELECT ON public.catalog_import_batches TO authenticated;

ALTER TABLE public.catalog_import_batches ENABLE ROW LEVEL SECURITY;
```

This correction applies the same proven pattern to the parser support schema, adapted for `SECURITY DEFINER` function `EXECUTE` privileges (not needed by the `catalog_import_batches` migration, which created no function) and narrowed further than the `catalog_import_batches` precedent, since `report1.108.md` §5.11 already specifies that `authenticated` gets **zero** access to lease/guard state (unlike `catalog_import_batches`, which grants `authenticated` a scoped `SELECT` for merchant-facing status polling) — the merchant's own UI never reads lease/guard internals directly.

### 6.2 Corrected table-privilege contract

Illustrative specification only, applying to both `parser_upload_leases` and `parser_preview_guards`:

```sql
REVOKE ALL ON public.parser_upload_leases FROM PUBLIC, anon, authenticated;
GRANT ALL ON public.parser_upload_leases TO service_role;
ALTER TABLE public.parser_upload_leases ENABLE ROW LEVEL SECURITY;

REVOKE ALL ON public.parser_preview_guards FROM PUBLIC, anon, authenticated;
GRANT ALL ON public.parser_preview_guards TO service_role;
ALTER TABLE public.parser_preview_guards ENABLE ROW LEVEL SECURITY;
```

No `GRANT SELECT ... TO authenticated` line is added for either table (a deliberate, narrower departure from the `catalog_import_batches` precedent), and consequently **no RLS policy is created** for either table: RLS is enabled with zero policies, which is a default-deny posture for every role without the `BYPASSRLS` attribute. `service_role` carries `BYPASSRLS` by Supabase's own standard convention, so it reads/writes both tables without needing a policy, while `authenticated` and `anon` — holding no table privilege at all after the `REVOKE`, and additionally blocked by RLS default-deny even in a hypothetical future misconfiguration that re-granted a privilege — have no path to these tables at either the grant layer or the row-security layer. This is intentionally belt-and-suspenders: two independent enforcement layers, not one.

No sequence privileges require separate handling: both tables use `gen_random_uuid()` defaults, not a Postgres `SERIAL`/identity sequence, so `instruction1.107.md` §6's "revoke sequence privileges where applicable" has no applicable object here — stated explicitly rather than silently omitted.

### 6.3 Corrected function-privilege contract

For all three `SECURITY DEFINER` helpers this correction specifies (`acquire_parser_preview_guard`, `issue_parser_upload_lease`, `release_parser_preview_guard`):

```sql
REVOKE EXECUTE ON FUNCTION public.acquire_parser_preview_guard(uuid)
  FROM PUBLIC, anon, authenticated;
GRANT EXECUTE ON FUNCTION public.acquire_parser_preview_guard(uuid)
  TO service_role;

REVOKE EXECUTE ON FUNCTION public.issue_parser_upload_lease(uuid, uuid, text, integer, text, uuid)
  FROM PUBLIC, anon, authenticated;
GRANT EXECUTE ON FUNCTION public.issue_parser_upload_lease(uuid, uuid, text, integer, text, uuid)
  TO service_role;

REVOKE EXECUTE ON FUNCTION public.release_parser_preview_guard(uuid, uuid, uuid)
  FROM PUBLIC, anon, authenticated;
GRANT EXECUTE ON FUNCTION public.release_parser_preview_guard(uuid, uuid, uuid)
  TO service_role;
```

Each function body must declare `SECURITY DEFINER SET search_path = public` — the exact pinning convention already used throughout this repository's existing `SECURITY DEFINER` functions (confirmed directly against multiple existing migrations during this mission) — closing the standard Postgres `SECURITY DEFINER` search-path-injection class by construction, not merely by intent.

Each of the three functions is therefore **callable only through the service-role client** (`supabaseAdmin`), and this correction states that explicitly rather than leaving it implied: after the `REVOKE`/`GRANT` pair above, no `anon` or `authenticated` session — including one holding a valid merchant JWT — can invoke any of them, regardless of what argument values it supplies. None of the three functions accepts a caller-asserted `business_id` as trusted tenant authority in any case; every call is made by the Smart Business server only after it has already authenticated the caller and re-derived the authoritative `business_id` server-side (`report1.108.md` §4 steps 2–4), and that server-derived value — never a client-supplied one — is what these functions receive as their `p_business_id` argument.

### 6.4 Manager/Employee and browser/client authority

Since none of the three functions and neither table grants anything to `authenticated` (which is the role every merchant session — Owner, Manager, or Employee — connects as), Manager and Employee gain **zero** new parser support-state authority as a direct, structural consequence of the `REVOKE`/`GRANT` contract above, not merely as a stated intention. The browser/client gets no direct lease/guard mutation authority for the identical reason. No `USING (true)` or `WITH CHECK (true)` policy is proposed anywhere in this correction — indeed, no RLS policy at all is proposed for either table, as explained in §6.2.

### 6.5 Result

`SUPA-EIS-B4` is corrected. The future migration contract now explicitly requires privilege neutralization for every new object — two tables and three `SECURITY DEFINER` functions — before any of them may be depended on by an endpoint, using the repository's own already-proven `REVOKE`/`GRANT`/RLS-enable pattern, extended with explicit function-`EXECUTE` neutralization and `search_path` pinning that the `catalog_import_batches` precedent did not need to demonstrate (having created no function). No actual grant, RLS policy, or function is created by this mission.

---

## 7. Cross-Blocker Idempotency / Failure-Integrity Check

Every scenario `instruction1.107.md` §7 requires is verified safe against the corrected model in §3–§6:

| Scenario | Resolution under the corrected model |
|---|---|
| Duplicate requests | Each concurrent request attempts its own guard acquisition (§5.3); EC-2's one-guard-per-business invariant (enforced by the `expires_at < now()` acquisition predicate) admits only one winner; every other request fails closed with a busy/rate-limited outcome before any lease or upload capability exists. |
| Duplicate upload confirmation | A second `ISSUED → UPLOADED` attempt (§3.3 transition 1) against an already-`UPLOADED`/`CLAIMED`/terminal lease affects zero rows; the confirmation endpoint treats this as a safe no-op status report, not an error, and never re-derives a new confirmation. |
| Duplicate dispatch attempt | Resolved structurally by §4.2 — exactly one caller ever wins transition 2; every other attempt affects zero rows and never contacts Lambda. |
| Replay | A replayed request against any non-source state for the transition it attempts affects zero rows by the same predicates; a replay can never reopen a terminal state or re-trigger dispatch. |
| Timeout | Lease remains `CLAIMED`; resolved by the 30-second dispatch-resolution timeout (§4.3) to `FAILED` with `DISPATCH_OUTCOME_UNKNOWN`, lazily, at next touch. |
| Network loss | If loss occurs after Lambda's own response is generated but never received by Smart Business, the lease remains `CLAIMED` (never re-dispatched, §4.2) and resolves via §4.3; recovery is a new lease under a new guard (§4.4), never re-verification against the same consumed/deleted S3 object. |
| Server crash | Pre-claim: the lease simply expires (§3.3 transition 5) and the guard self-heals (§5.6). Post-claim: the lease sits `CLAIMED`, resolved lazily by §4.3 whenever (if ever) next touched; no re-dispatch risk either way. |
| Unknown Lambda outcome | Identical treatment to timeout/network loss — fails closed via §4.3, never re-dispatched. |
| Partial S3/Lambda failure | Captured by transition 4 (`CLAIMED → FAILED`) with the specific bounded code already defined by `report1.108.md`/`report1.112.md` (`INTEGRITY_MISMATCH`, `HEAD_*` codes, `RESPONSE_TOO_LARGE`, etc.); no re-dispatch, since `CLAIMED` is one-way. |
| Stale lease | Any transition attempt against a lease past its useful lifetime either finds it already terminal (zero rows, structurally) or fails the `expires_at` predicate and is treated as `EXPIRED`. |
| Expired lease | Explicit terminal `EXPIRED` state (§3.3 transition 5), one-way, unreopenable. |
| Terminal lease replay | Every transition predicate excludes every terminal state as a source; zero rows affected; the application layer returns the fixed sanitized "already processed — start a new import" message (`report1.108.md` §9 item 10, unchanged). |
| Abandoned EC-2 guard | Self-heals via the guard's own `expires_at` and the conditional-upsert acquisition predicate (§5.6); the corrected binding-failure path additionally shortens exposure for the one case it can detect synchronously (§5.3 step 2). |

Preserved throughout, unchanged by this correction: parser failure alone creates zero Catalog or Inventory Product Truth; parser success alone (reaching `CONSUMED`) also creates zero Product Truth by itself — import-support bookkeeping writes begin only after `CONSUMED` **and** Smart Business's own field validation/classification, exactly as `report1.108.md` §4 step 17/§15 already locked. Product Truth remains governed exclusively by the existing Founder Workflow and the nineteen public Catalog commands. BKR-1 through BKR-5, D-047, D-068, EC-2, and EC-3 are all untouched by this correction.

---

## 8. Data Minimization / Retention Confirmation

The only new columns this correction introduces beyond `report1.108.md`'s original shapes are `claimed_at`, `dispatched_at` (both plain timestamps — claim/dispatch metadata, not merchant content) on the lease table, and `guard_token` (a random UUID — binding identity, not merchant content) on both tables, plus the rename of `guard_business_id` to `guard_token` with corrected semantics. This is exactly the class of addition `instruction1.107.md` §8 permits ("a claim timestamp/state or guard binding identity") and nothing more.

Confirmed, unchanged from `report1.108.md`/`report1.110.md` §9: no raw merchant file content, no CSV/XLSX rows or cells, no raw AWS/provider errors, no AWS credentials, no X.509 private keys, and no IAM private-key material are stored in either table by this correction. `failure_reason` remains a closed, bounded set of internal codes (§3.5), never free text or a raw provider error.

**Bounded retention principle (non-blocking precision from `report1.110.md` §9, now stated):** terminal `parser_upload_leases` rows (`CONSUMED`/`FAILED`/`EXPIRED`) and released `parser_preview_guards` rows retain their existing bounded metadata for **30 days** as a Phase 1 default — sufficient for abuse-pattern diagnosis, dispatch-outcome audit, and support investigation — after which routine housekeeping (an ordinary scheduled `DELETE`, not a new architecture or service) may purge them. This is an operational support-state retention parameter only, tunable with later evidence exactly as the reserved-concurrency and rate-window defaults elsewhere in this chain already are, and has no relationship to and does not alter Product Truth retention, which remains governed entirely by existing, separate Founder Workflow/Catalog data-retention practice.

---

## 9. Frozen-Decision Preservation Confirmation

Preserved without modification by this correction: Owner-only Phase 1 import authority; exactly nineteen public Catalog commands — no twentieth command; Catalog / Inventory truth separation; D-047 and D-068; BKR-1 through BKR-5; EC-2 and EC-3; AWS Lambda as the narrow external parser runtime; standard Lambda default compute; `nodejs24.x`; `ap-south-1`; 2,048 MB starting memory; 15-second Lambda timeout; 10-second application parser budget; finite reserved concurrency as defense-in-depth only; transient private S3 parser-ingress; IAM Roles Anywhere; `ChecksumMode = ENABLED` `HeadObject` contract; Papa Parse, ExcelJS, and `node:zlib`; every locked parser input/shape limit; the 4,194,304-byte serialized-response ceiling; deterministic pre-stream `RESPONSE_TOO_LARGE`; the corrected B1 infrastructure acceptance matrix (`report1.114.md`); and every Infrastructure `PASS` finding in `report1.115.md`.

No AWS architecture redesign was required or performed — every SUPA-EIS-B1–B4 correction is confined to the Supabase-side physical contract (table shape, atomic transitions, function privileges) and does not touch Lambda, S3, IAM Roles Anywhere, or any other AWS-side decision.

---

## 10. No-Implementation / No-Mutation Confirmation

During this mission:

- prior reports modified: **NO**
- application or parser code implemented or modified: **NO**
- SQL or migrations created or executed: **NO**
- Supabase test or production mutated: **NO**
- table, function, or RPC created or modified: **NO**
- RLS or grants changed: **NO**
- AWS or S3 or IAM resources created or modified: **NO**
- AWS commands executed against project infrastructure: **NO**
- dependencies added or updated: **NO**
- Lovable changed: **NO**
- Product Truth changed: **NO**
- employee/manager permissions changed: **NO**
- a twentieth Catalog command added: **NO**
- any parser limit weakened: **NO**
- Build Lock or Build Mode entered: **NO**
- deployment or publication performed: **NO**
- production touched: **NO**
- Stage C begun: **NO**

The only repository change under this mission is this report: `communication/live/report1.116.md`.

---

## 11. Final Disposition

`LAMBDA PARSER EIS SUPABASE CORRECTION — READY FOR BACKEND CONFIRMATION`

All four bounded blockers from `report1.110.md` — `SUPA-EIS-B1` (coherent lease lifecycle with a non-terminal dispatch claim state), `SUPA-EIS-B2` (structural no-re-dispatch guarantee with lazy, bounded unknown-outcome resolution), `SUPA-EIS-B3` (race-safe guard-to-lease binding and corrected fixed-window terminology), and `SUPA-EIS-B4` (explicit table and function privilege neutralization matching the repository's own proven pattern) — are resolved with exact, evidence-based, single Phase 1 mechanisms, verified against the actual current `pg_tables`-relevant migration evidence and existing code rather than assumed. No frozen decision was reopened; no AWS architecture was redesigned; no merchant/permission/Product Truth semantics were changed.

This disposition is not a Stage B `PASS` — only Supabase Backend Architecture may issue that verdict, in the narrow `SUPA-EIS-B1`-through-`SUPA-EIS-B4`-only confirmation review `instruction1.107.md` §13 authorizes next. This report grants no implementation, migration, Build Lock, Build Mode, deployment, Stage C, or production authority.
