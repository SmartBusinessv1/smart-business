# SMART BUSINESS — SUPABASE B1 PHYSICAL-ENFORCEMENT CORRECTION ADDENDUM

## SB-P-1.11-GC-13 — Final Supabase B1 Physical-Enforcement Correction

**Report ID:** report1.118
**Mission:** SB-P-1.11-GC-13 — SUPA-EIS-B1 Physical-Enforcement Correction
**Authorized By:** `communication/live/instruction1.109.md`
**Executing Room:** Claude Code / Engineering Architecture
**Mode:** SPECIFICATION CORRECTION ONLY — NO IMPLEMENTATION
**Implementation Authority:** NONE
**Database Migration Authority:** NONE
**Production Mutation Authority:** NONE
**Deployment Authority:** NONE
**Stage C Authority:** NONE

---

## 1. Mission and Authority

This report is a self-contained **Supabase B1 Physical-Enforcement Correction Addendum**. It corrects exactly the single remaining blocker identified in `communication/live/report1.117.md` (Supabase Backend Architecture narrow confirmation, `LAMBDA PARSER EIS SUPABASE BACKEND REVIEW — CHANGES REQUIRED`): `SUPA-EIS-B1 — privileged database-level lifecycle/immutability enforcement is incomplete`, inside the six-state Parser Upload Lease physical contract already accepted by `communication/live/report1.116.md`.

It does not overwrite, rewrite, or reopen `report1.108.md`, `report1.110.md`, `report1.116.md`, or `report1.117.md`, all of which remain unmodified, immutable evidence. This addendum becomes binding **together with** `report1.108.md` and `report1.116.md` only after a later final B1-only Supabase Backend Architecture confirmation and Mission Control acceptance — it does not itself claim Stage B PASS. `SUPA-EIS-B2`, `SUPA-EIS-B3`, and `SUPA-EIS-B4` are not reopened, re-reviewed, or altered by anything below; every mechanism they already established (the guard-token binding sequence, the fixed-window rate contract, the `REVOKE`/`GRANT` table and function privilege baseline) is preserved and extended, not replaced.

No SQL, migration, Supabase mutation, table, function, trigger, constraint, RLS policy, or grant is created or executed by this mission — every SQL fragment below is illustrative specification only.

---

## 2. Exact Merged `main` SHA Reviewed

Latest merged GitHub `main` at mission start:

`c6a59a7a585d771e7a767cdeecd2ec090e759b2f`

Confirmed via `git rev-parse HEAD` immediately after fast-forward synchronization, matching Mission Control's cited authoritative HEAD exactly.

Files read in full for this correction: `communication/live/instruction1.109.md`, `communication/live/report1.117.md`, `communication/live/instruction1.108.md`, `communication/live/report1.116.md`, `communication/live/report1.110.md`, `communication/live/report1.108.md`, `communication/live/report1.115.md`; `supabase/migrations/20260727000000_reconcile_default_grants.sql`, `supabase/migrations/20260810120000_sb_p_1_11_gc_1_catalog_import_support_schema.sql`, and `src/integrations/supabase/client.server.ts` (all already fully read and cited in `report1.116.md`, re-confirmed unchanged this mission).

---

## 3. Exact B1 Physical-Enforcement Mechanism Selected

### 3.1 The defect, restated precisely

`report1.117.md` §3 confirmed the six-state lifecycle and one-use claim are correct at the *application-contract* level, but found that `report1.116.md`'s physical design still routes every transition through a **plain service-role conditional `UPDATE`**, while `service_role` (via `supabaseAdmin`, confirmed RLS-bypassing and holding full table grants in `report1.116.md` §6.2's `GRANT ALL ... TO service_role`) retains unrestricted DML authority over the table. Nothing in the schema itself prevents an accidental, buggy, or malicious privileged write from setting an illegal state, an incoherent timestamp, or a mutated authority field — the correctness of every write depended entirely on application code always constructing the "right" `UPDATE` statement, which `report1.117.md` correctly identifies as insufficient given the privileged, RLS-bypassing nature of the write path.

### 3.2 Selected architecture: Option A — narrow transition functions, direct table DML removed

**Selected: Option A**, narrowed further than `instruction1.109.md` §5's own description. Every lifecycle-mutating write is moved into a bounded set of narrow `SECURITY DEFINER` transition functions, and `service_role`'s direct grant on `parser_upload_leases` is reduced to `SELECT` only — **no `INSERT`, `UPDATE`, or `DELETE` grant remains for any caller, including `service_role`.**

This is possible, and not merely a policy convention, for a precise structural reason: a `SECURITY DEFINER` function executes with the privileges of its **owner**, not its caller. None of the transition functions below need `service_role` to hold any table-level write grant at all — `service_role` only needs `EXECUTE` on the functions themselves. This is a strictly stronger guarantee than a trigger-based design (Option B): an illegal write does not need to be *caught* by trigger logic that must be exhaustively correct, because there is no grant-level path for `service_role` (or any other caller) to attempt a direct table write in the first place. `ERROR: permission denied for table parser_upload_leases` is raised by Postgres itself, before any row, trigger, or constraint is ever reached.

**Why Option A over Option B here:** Option B (trigger + constraint enforcement, direct DML retained) requires one general-purpose trigger that must correctly re-implement, in `plpgsql`, an eight-field immutability check *and* a six-branch transition matrix *and* database-controlled timestamp assignment *and* a `dispatched_at` special case — meaningful branching logic with real surface area for a subtle bug to reintroduce exactly the gap this correction exists to close. Option A instead uses six functions, each of which performs exactly one hardcoded, single-purpose `UPDATE` with a fixed `SET` clause that never references — and therefore cannot possibly mutate — any authority-bearing field; correctness of each function is trivial to audit by inspection, and the absence of any alternate write path is a structural fact, not a logic outcome. This is the smaller design by the count of failure modes, not merely the count of database objects.

### 3.3 Complementary defense-in-depth: static per-state `CHECK` constraints

Table-level `CHECK` constraints (evaluated against the row being written, requiring no `OLD`/`NEW` row comparison) are retained as a second, independent enforcement layer, exactly reproducing the per-state invariant table `instruction1.109.md` §1 specifies (§4). These provide protection even against a hypothetical future bug inside one of the six transition functions themselves, at zero additional runtime-logic cost, since `CHECK` constraints require no trigger.

No additional immutability *trigger* is introduced for the authority-bearing fields (`business_id`, `guard_token`, `object_key`, `expected_byte_length`, `expected_sha256_b64`, `created_by`, `issued_at`, `expires_at`): it would be dead code. None of the six transition functions' `SET` clauses ever reference these columns (§6), and — because `service_role` holds no table-level write grant — there is no other code path capable of reaching a row to mutate them. A trigger can only fire on a write that is already permitted to occur; here, no such write can occur at all for these columns after the initiating `INSERT` inside `issue_parser_upload_lease` (`report1.116.md` §5.3, unchanged). This is stated explicitly, not silently omitted, so the absence of a trigger is legible as a deliberate, reasoned choice rather than a gap.

---

## 4. Exact Six-State Database Invariant Table

Enforced by `CHECK` constraints on `parser_upload_leases`, evaluated on every row regardless of which transition function wrote it:

| State | `confirmed_at` | `claimed_at` | `terminal_at` | `failure_reason` |
|---|---|---|---|---|
| `ISSUED` | `NULL` | `NULL` | `NULL` | `NULL` |
| `UPLOADED` | NOT NULL | `NULL` | `NULL` | `NULL` |
| `CLAIMED` | NOT NULL | NOT NULL | `NULL` | `NULL` |
| `CONSUMED` | NOT NULL | NOT NULL | NOT NULL | `NULL` |
| `FAILED` | NOT NULL | NOT NULL | NOT NULL | one of the 16 codes in §7.1 |
| `EXPIRED` | any | `NULL` | NOT NULL | `NULL` |

`EXPIRED`'s `confirmed_at` is the sole cell not pinned to a single value: an `EXPIRED` row may have expired directly from `ISSUED` (`confirmed_at IS NULL`) or from `UPLOADED` after confirmation but before claim (`confirmed_at IS NOT NULL`) — both are legitimate, per the already-accepted expiry rule that only pre-dispatch states may expire (`instruction1.109.md` §3). `claimed_at IS NULL` for `EXPIRED` is, however, an unconditional invariant: `CLAIMED` is never eligible for expiry (§5), so no `EXPIRED` row can ever have a non-`NULL` `claimed_at`.

Illustrative constraint expression (specification evidence only):

```sql
constraint parser_upload_leases_state_invariants check (
  case state
    when 'ISSUED'    then confirmed_at is null and claimed_at is null
                           and terminal_at is null and failure_reason is null
    when 'UPLOADED'  then confirmed_at is not null and claimed_at is null
                           and terminal_at is null and failure_reason is null
    when 'CLAIMED'   then confirmed_at is not null and claimed_at is not null
                           and terminal_at is null and failure_reason is null
    when 'CONSUMED'  then confirmed_at is not null and claimed_at is not null
                           and terminal_at is not null and failure_reason is null
    when 'FAILED'    then confirmed_at is not null and claimed_at is not null
                           and terminal_at is not null
                           and failure_reason in (/* §7.1 sixteen-code list */)
    when 'EXPIRED'   then claimed_at is null and terminal_at is not null
                           and failure_reason is null
  end
)
```

---

## 5. Exact Legal Transition Matrix

| # | Source state | Target state | Enforcing function | Additional predicate beyond identity/state |
|---|---|---|---|---|
| 1 | *(row does not yet exist)* | `ISSUED` | `issue_parser_upload_lease` (unchanged, `report1.116.md` §5.3) | guard token unbound and unexpired |
| 2 | `ISSUED` | `UPLOADED` | `confirm_parser_upload_lease` | `expires_at > now()` |
| 3 | `UPLOADED` | `CLAIMED` | `claim_parser_upload_lease` | `expires_at > now()` |
| 4 | `CLAIMED` | `CLAIMED` (`dispatched_at` only) | `mark_parser_upload_lease_dispatched` | `dispatched_at IS NULL` |
| 5 | `CLAIMED` | `CONSUMED` | `complete_parser_upload_lease` | — |
| 6 | `CLAIMED` | `FAILED` | `fail_parser_upload_lease` | `p_failure_reason` in the §7.1 list |
| 7 | `ISSUED` or `UPLOADED` | `EXPIRED` | `expire_parser_upload_lease` | `expires_at <= now()` |

No row entry exists for any other `(source, target)` pair, including every case named in `instruction1.109.md` §7 (`ISSUED → CLAIMED`, `ISSUED → CONSUMED`, `UPLOADED → CONSUMED`, `CLAIMED → UPLOADED`, any terminal-state source, any backward movement) — because no function's `WHERE` predicate names any state other than the single source state listed above, none of those pairs is reachable through any code path (§9).

---

## 6. Exact Timestamp/State Coherence Contract

Each function's `SET` clause is the *sole* source of every timestamp value it writes — never a caller-supplied argument, satisfying `instruction1.109.md` §6 item 5 exactly ("timestamp effects controlled by the database operation rather than arbitrary caller values"). Illustrative bodies (specification evidence only; exact syntax is a Build Mode task):

```sql
-- 2: ISSUED -> UPLOADED
create or replace function public.confirm_parser_upload_lease(
  p_lease_id uuid, p_business_id uuid
) returns boolean
language sql security definer set search_path = public as $$
  update public.parser_upload_leases
     set state = 'UPLOADED', confirmed_at = now()
   where id = p_lease_id and business_id = p_business_id
     and state = 'ISSUED' and expires_at > now()
  returning true;
$$;

-- 3: UPLOADED -> CLAIMED (the sole dispatch-authorization gate; unchanged in spirit from report1.116.md)
create or replace function public.claim_parser_upload_lease(
  p_lease_id uuid, p_business_id uuid
) returns boolean
language sql security definer set search_path = public as $$
  update public.parser_upload_leases
     set state = 'CLAIMED', claimed_at = now()
   where id = p_lease_id and business_id = p_business_id
     and state = 'UPLOADED' and expires_at > now()
  returning true;
$$;

-- 4: CLAIMED, diagnostic-only, never touches state
create or replace function public.mark_parser_upload_lease_dispatched(
  p_lease_id uuid, p_business_id uuid
) returns boolean
language sql security definer set search_path = public as $$
  update public.parser_upload_leases
     set dispatched_at = now()
   where id = p_lease_id and business_id = p_business_id
     and state = 'CLAIMED' and dispatched_at is null
  returning true;
$$;

-- 5: CLAIMED -> CONSUMED
create or replace function public.complete_parser_upload_lease(
  p_lease_id uuid, p_business_id uuid
) returns boolean
language sql security definer set search_path = public as $$
  update public.parser_upload_leases
     set state = 'CONSUMED', terminal_at = now()
   where id = p_lease_id and business_id = p_business_id
     and state = 'CLAIMED'
  returning true;
$$;

-- 6: CLAIMED -> FAILED
create or replace function public.fail_parser_upload_lease(
  p_lease_id uuid, p_business_id uuid, p_failure_reason text
) returns boolean
language sql security definer set search_path = public as $$
  update public.parser_upload_leases
     set state = 'FAILED', terminal_at = now(), failure_reason = p_failure_reason
   where id = p_lease_id and business_id = p_business_id
     and state = 'CLAIMED'
  returning true;
$$;

-- 7: ISSUED/UPLOADED -> EXPIRED
create or replace function public.expire_parser_upload_lease(
  p_lease_id uuid, p_business_id uuid
) returns boolean
language sql security definer set search_path = public as $$
  update public.parser_upload_leases
     set state = 'EXPIRED', terminal_at = now()
   where id = p_lease_id and business_id = p_business_id
     and state in ('ISSUED', 'UPLOADED') and expires_at <= now()
  returning true;
$$;
```

`confirmed_at`, `claimed_at`, and `terminal_at` are each written exactly once, by exactly one function, at the exact moment the corresponding transition succeeds — never by any other function, never as a caller-suppliable argument, and never re-writable afterward (no function's predicate accepts a state in which that timestamp is already set as its source state, except `EXPIRED`'s `confirmed_at`, which is written only by `confirm_parser_upload_lease`, itself gated to run at most once per lease per §9).

**`dispatched_at` rule (`instruction1.109.md` §1's explicit requirement):** it may be set only via `mark_parser_upload_lease_dispatched`, whose predicate requires `state = 'CLAIMED'` — it cannot exist before a successful claim. It never appears in any other function's `SET` clause and is never read by any predicate in §5 — it cannot grant, gate, or recreate dispatch authority, and there is no function through which a caller could use it to "bypass lifecycle state," because no lifecycle-state decision ever consults it.

---

## 7. Exact Authority-Field Immutability Contract

`business_id`, `guard_token`, `object_key`, `expected_byte_length`, `expected_sha256_b64`, `created_by`, `issued_at`, and `expires_at` are written exactly once, inside `issue_parser_upload_lease`'s `INSERT` (`report1.116.md` §5.3, unchanged by this correction). Immutability is a structural fact, not an active check: none of the six functions in §6 references any of these eight columns in a `SET` clause, and — per §3.2 — `service_role` holds no `UPDATE` grant on the table through which any *other* write could reach them. There is no code path, privileged or otherwise, capable of mutating any of these eight fields after row creation.

### 7.1 Bounded `failure_reason` code set

Sixteen closed, sanitized internal codes — the complete union of every code already established across `report1.108.md`, `report1.112.md`, and `report1.116.md`, consolidated here into one authoritative, `CHECK`-constraint-ready list (superseded generic names from `report1.108.md` §5.10, `INTEGRITY_MISMATCH` and `OBJECT_NOT_FOUND`, are excluded in favor of their already-corrected, more specific `report1.112.md` replacements):

`HEAD_OBJECT_NOT_FOUND`, `HEAD_CHECKSUM_METADATA_MISSING`, `HEAD_SIZE_MISMATCH`, `HEAD_CHECKSUM_MISMATCH`, `FILE_TOO_LARGE`, `DECOMPRESSED_TOO_LARGE`, `TOO_MANY_ROWS`, `TOO_MANY_COLUMNS`, `CELL_TOO_LONG`, `PARSE_TIMEOUT`, `UNSUPPORTED_FILE_TYPE`, `MALFORMED_FILE`, `ENCRYPTED_OR_MACRO_FILE`, `RESPONSE_TOO_LARGE`, `PARSER_RUNTIME_ERROR`, `DISPATCH_OUTCOME_UNKNOWN`.

Enforced twice, independently: the `parser_upload_leases_state_invariants` `CHECK` constraint (§4) rejects any `FAILED` row whose `failure_reason` is not one of these sixteen values, at the database boundary, regardless of write path; `fail_parser_upload_lease` should additionally validate its `p_failure_reason` argument before attempting the write, as a courtesy fail-fast (a clear function-level error rather than a raw constraint-violation error reaching application code), but the `CHECK` constraint — not the function's own diligence — is the actual enforcement backstop. No raw provider error, stack trace, free text, or merchant-controlled string can ever satisfy this constraint.

---

## 8. Exact Privilege/Mutation Surface After Correction

### 8.1 Table grants (amends `report1.116.md` §6.2)

```sql
revoke all on public.parser_upload_leases from public, anon, authenticated;
grant select on public.parser_upload_leases to service_role;   -- narrowed from GRANT ALL
alter table public.parser_upload_leases enable row level security;
-- no policy: service_role reads via BYPASSRLS; anon/authenticated have no
-- table privilege and no policy, and are excluded from BYPASSRLS.
```

`parser_preview_guards`' own grant contract is unchanged from `report1.116.md` §6.2 (`REVOKE ALL ... FROM PUBLIC, anon, authenticated; GRANT ALL ... TO service_role;`) — that table's own physical-enforcement adequacy was not challenged by `report1.117.md`, and this correction's authorized scope is `SUPA-EIS-B1` only, not a re-review of the already-`PASS` `SUPA-EIS-B3` guard contract.

### 8.2 Function grants (extends `report1.116.md` §6.3 with six new functions)

```sql
revoke execute on function public.confirm_parser_upload_lease(uuid, uuid)
  from public, anon, authenticated;
grant execute on function public.confirm_parser_upload_lease(uuid, uuid)
  to service_role;

revoke execute on function public.claim_parser_upload_lease(uuid, uuid)
  from public, anon, authenticated;
grant execute on function public.claim_parser_upload_lease(uuid, uuid)
  to service_role;

revoke execute on function public.mark_parser_upload_lease_dispatched(uuid, uuid)
  from public, anon, authenticated;
grant execute on function public.mark_parser_upload_lease_dispatched(uuid, uuid)
  to service_role;

revoke execute on function public.complete_parser_upload_lease(uuid, uuid)
  from public, anon, authenticated;
grant execute on function public.complete_parser_upload_lease(uuid, uuid)
  to service_role;

revoke execute on function public.fail_parser_upload_lease(uuid, uuid, text)
  from public, anon, authenticated;
grant execute on function public.fail_parser_upload_lease(uuid, uuid, text)
  to service_role;

revoke execute on function public.expire_parser_upload_lease(uuid, uuid)
  from public, anon, authenticated;
grant execute on function public.expire_parser_upload_lease(uuid, uuid)
  to service_role;
```

`issue_parser_upload_lease`, `acquire_parser_preview_guard`, and `release_parser_preview_guard` keep exactly the `REVOKE`/`GRANT` contract `report1.116.md` §6.3 already locked, unchanged.

Every one of the nine `SECURITY DEFINER` functions in the complete parser-support surface (the three from `report1.116.md` plus the six new ones above) declares `SECURITY DEFINER SET search_path = public` — the identical pinning convention already used throughout this repository's existing `SECURITY DEFINER` functions (`report1.116.md` §6.3), closing the standard Postgres search-path-injection class by construction.

### 8.3 Complete resulting mutation surface

After this correction, the *only* way any role can change a row in `parser_upload_leases` is by calling one of the seven functions in §8.2 plus `issue_parser_upload_lease` — and the *only* role permitted to call any of them is `service_role`. `service_role`'s own direct table grant is `SELECT` only. This satisfies `instruction1.109.md` §5's Option A requirement ("direct service-role UPDATE authority on lifecycle/authority fields is removed") precisely, and is consistent with — not a departure from — the already-`PASS` `SUPA-EIS-B4` boundary (`report1.117.md` §6): `PUBLIC`, `anon`, and `authenticated` remain excluded from both tables and every function exactly as `report1.116.md` already locked; this correction only narrows what `service_role` itself may do directly, which `SUPA-EIS-B4` never addressed (B4 was about excluding *browser-reachable* roles, not about narrowing the trusted server role's own surface — the two are compatible, not competing, corrections).

### 8.4 Why Manager, Employee, and the browser gain no authority

Unchanged from `report1.116.md` §6.4, restated: because neither table nor any of the now-nine functions grants anything to `authenticated` (the role every merchant session — Owner, Manager, or Employee — connects as) or to `anon`, Manager and Employee gain zero new parser support-state authority and the browser gains zero direct lease/guard mutation authority, as a direct structural consequence of §8.1–§8.2, not merely a stated intention.

---

## 9. Exact Illegal-Transition Prevention Contract

Illegal transition prevention is achieved by the **absence of an enforcing function**, not by a rejection rule that must actively fire: for any `(source state, target state)` pair not listed in §5's seven rows, no function in the entire nine-function surface has a `WHERE`/predicate combination that could produce it, and (§8) no other write path exists. This is why Option A needs no general transition-matrix trigger (§3.2) — the matrix is enforced by construction, one function at a time, rather than by one piece of logic that must correctly reject everything not on an allow-list.

Concretely, for the exact cases `instruction1.109.md` §4 item 3 names:

- **Skip required states** (e.g. `ISSUED → CLAIMED`, `ISSUED → CONSUMED`, `UPLOADED → CONSUMED`): no function accepts `ISSUED` or `UPLOADED` as a source state for anything other than `UPLOADED` or `CLAIMED`/`EXPIRED` respectively (§5 rows 2, 3, 7) — `claim_parser_upload_lease` and `complete_parser_upload_lease` require `state = 'UPLOADED'` and `state = 'CLAIMED'` respectively; calling either against a row not in that exact state affects zero rows.
- **Reopen terminal states**: no function's predicate accepts `CONSUMED`, `FAILED`, or `EXPIRED` as a source state anywhere in §5.
- **Move backward** (e.g. `CLAIMED → UPLOADED`): no function writes `state = 'UPLOADED'` except `confirm_parser_upload_lease`, whose predicate requires `state = 'ISSUED'` — a `CLAIMED` row can never satisfy it.
- **Create `CLAIMED` without the accepted atomic one-use claim predicate**: `claim_parser_upload_lease` *is* that predicate; it is the only function that ever writes `state = 'CLAIMED'`, and its `WHERE` clause is exactly the one-winner conditional update already established and B2-confirmed in `report1.116.md` §3.3/§4.2, unchanged by this correction.
- **Set terminal outcome fields without a legal source state**: `complete_parser_upload_lease`, `fail_parser_upload_lease`, and `expire_parser_upload_lease` are the only writers of `terminal_at`, each gated to its own single legal source state (§5 rows 5–7).
- **Bypass tenant/state/non-expiry predicates through unrestricted direct DML**: impossible per §8.3 — there is no direct DML grant to bypass with.

---

## 10. Safety-Case Matrix (`instruction1.109.md` §7)

| Safety case | Result | Mechanism |
|---|---|---|
| Direct mutation of `business_id` after issuance | **Rejected** | No table `UPDATE` grant exists for any role (§8.1); no function `SET`s this column (§7). |
| Direct mutation of `guard_token` after issuance | **Rejected** | Same as above. |
| Direct mutation of `object_key` / `expected_byte_length` / `expected_sha256_b64` / `created_by` / `issued_at` / `expires_at` | **Rejected** | Same as above. |
| `ISSUED → CLAIMED` | **Rejected** | `claim_parser_upload_lease` requires source `UPLOADED`; §9. |
| `ISSUED → CONSUMED` | **Rejected** | `complete_parser_upload_lease` requires source `CLAIMED`; §9. |
| `UPLOADED → CONSUMED` without `CLAIMED` | **Rejected** | Same as above. |
| Terminal → non-terminal | **Rejected** | No function accepts a terminal source state; §9. |
| Terminal → different terminal | **Rejected** | Same. |
| `CLAIMED → UPLOADED` (backward) | **Rejected** | `confirm_parser_upload_lease` requires source `ISSUED`; §9. |
| `CLAIMED` without coherent `claimed_at` | **Rejected** | `claim_parser_upload_lease` sets `claimed_at = now()` unconditionally in the same statement that sets `state = 'CLAIMED'`; the §4 `CHECK` constraint independently rejects any row violating this regardless of writer. |
| `ISSUED` with `confirmed_at` already populated | **Rejected** | `issue_parser_upload_lease` never sets `confirmed_at`; the §4 `CHECK` constraint independently enforces `state = 'ISSUED' ⇒ confirmed_at IS NULL`. |
| Terminal state without `terminal_at` | **Rejected** | §4 `CHECK` constraint; also every terminal-producing function sets it in the same statement that sets the terminal state. |
| Non-terminal state with `terminal_at` | **Rejected** | §4 `CHECK` constraint. |
| Invalid / free-text / raw-provider `failure_reason` | **Rejected** | §4/§7.1 `CHECK` constraint restricts to the sixteen-code closed set. |
| Arbitrary privileged direct update bypass attempt | **Rejected** | §8.3 — no grant exists to attempt it with; Postgres raises a permission error before any row is reached. |
| **B2 guarantee** — no same-lease second Lambda dispatch authority | **Confirmed intact** | `claim_parser_upload_lease` (§5 row 3, §6) is the unchanged, sole one-winner dispatch gate from `report1.116.md` §3.3/§4.2; this correction changes only *how* the write is issued (function vs. inline `UPDATE`), not the predicate or its one-winner guarantee. |

---

## 11. Confirmation `SUPA-EIS-B2`/`SUPA-EIS-B3`/`SUPA-EIS-B4` Remained Closed `PASS`

None of `report1.117.md` §4 (`SUPA-EIS-B2 — PASS`), §5 (`SUPA-EIS-B3 — PASS`), or §6 (`SUPA-EIS-B4 — PASS`) is reopened, re-reviewed, or altered:

- **B2** — the one-winner `UPLOADED → CLAIMED` dispatch gate, the recovery-via-new-lease rule, and the lazy dispatch-resolution timeout are unchanged in substance; §10's B2 row confirms the guarantee survives this correction's change of write mechanism.
- **B3** — the guard-token binding sequence, `issue_parser_upload_lease`'s single-transaction create-and-bind, the fixed-10-minute-window rate contract, and `release_parser_preview_guard`'s three-way predicate (§8.1) are all untouched; `parser_preview_guards`' own grant contract is explicitly confirmed unchanged (§8.1).
- **B4** — the table/function `REVOKE`/`GRANT` baseline this correction extends is additive, not replacing: every already-established `PUBLIC`/`anon`/`authenticated` exclusion remains exactly as `report1.116.md` locked it (§8.3–§8.4); this correction only narrows `service_role`'s own direct surface, a dimension B4 did not address.

---

## 12. Confirmation Product Truth and Frozen Decisions Remained Unchanged

Every decision listed in `instruction1.109.md` §9 is preserved without modification: Owner-only Phase 1 import authority; exactly nineteen public Catalog commands — no twentieth command; Catalog / Inventory truth separation; D-047 and D-068; BKR-1 through BKR-5; EC-2 and its accepted guard/token/fixed-window contract; EC-3 parse-before-write ordering; AWS Lambda narrow parser runtime; standard Lambda default compute; `nodejs24.x`; `ap-south-1`; 2,048 MB memory baseline; 15-second Lambda timeout; 10-second parser budget; finite reserved concurrency as defense-in-depth; transient private S3 parser-ingress; IAM Roles Anywhere; `ChecksumMode = ENABLED`; Papa Parse, ExcelJS, and `node:zlib`; all parser input/shape limits; the 4,194,304-byte serialized-response ceiling; deterministic pre-stream `RESPONSE_TOO_LARGE`; the corrected Infrastructure B1 acceptance matrix; every Infrastructure `PASS` finding in `report1.115.md`.

No AWS architecture is touched by this correction — every mechanism in §3–§10 is confined to the Supabase-side physical enforcement of an already-accepted lifecycle, not a new decision about Lambda, S3, or IAM Roles Anywhere. Product Truth remains governed exclusively by the existing Founder Workflow and the nineteen public Catalog commands: no function introduced or amended by this correction reads or writes any Catalog or Inventory table, and reaching `CONSUMED` still does not, by itself, create any import-support or Product Truth write — that gate (`report1.108.md` §4 step 17) is entirely unaffected by this correction.

**Data minimization:** unchanged from `report1.116.md` §8/`report1.117.md` §8 — this correction introduces zero new columns and zero new stored data classes; it changes only the *write mechanism* for timestamp/state/failure-reason fields already accepted as necessary metadata. No raw merchant file content, CSV/XLSX rows or cells, raw provider errors, AWS credentials, or private-key material is stored by any function in §6. The prior Stage B data-minimization `PASS` is not weakened.

---

## 13. No-Implementation / No-Mutation Confirmation

During this mission:

- prior reports modified: **NO**
- application or parser code implemented or modified: **NO**
- SQL or migrations created or executed: **NO**
- Supabase test or production mutated: **NO**
- tables, functions, RPCs, triggers, constraints, RLS, grants, or default privileges created or modified: **NO**
- AWS or S3 or IAM architecture or resources changed: **NO**
- project AWS commands executed: **NO**
- dependencies added or updated: **NO**
- Lovable changed: **NO**
- Product Truth changed: **NO**
- employee/manager permissions changed: **NO**
- a twentieth Catalog command added: **NO**
- parser/input/runtime limits weakened: **NO**
- `SUPA-EIS-B2`, `B3`, or `B4` reopened: **NO**
- EIS lock, Build Lock, or Build Mode entered: **NO**
- deployment or publication performed: **NO**
- production touched: **NO**
- Stage C begun: **NO**

The only repository change under this mission is this report: `communication/live/report1.118.md`.

---

## 14. Final Disposition

`LAMBDA PARSER EIS SUPABASE B1 PHYSICAL-ENFORCEMENT CORRECTION — READY FOR FINAL BACKEND CONFIRMATION`

The single remaining `SUPA-EIS-B1` gap identified in `report1.117.md` — database-level lifecycle/timestamp/authority-field coherence under the privileged, RLS-bypassing service-role bookkeeping boundary — is closed by removing direct table DML from `service_role` entirely and routing every lifecycle transition through six narrow, single-purpose `SECURITY DEFINER` functions (plus the three already-established from `report1.116.md`), backed by static per-state `CHECK` constraints as an independent second layer. The already-accepted six-state lifecycle, the one-winner dispatch gate, and every `B2`/`B3`/`B4` guarantee are preserved exactly, not redesigned.

---

## 15. Remaining Blocker

**None.** This correction resolves the sole authorized blocker (`SUPA-EIS-B1` physical enforcement) with a specification precise enough — exact function set, exact predicates, exact `CHECK` constraints, exact grant contract — for a final Supabase Backend Architecture reviewer to determine `PASS`/`FAIL` without inventing missing semantics, per `instruction1.109.md` §6.

This disposition is not a Stage B `PASS` — only Supabase Backend Architecture may issue that verdict, in the separate final `SUPA-EIS-B1`-only confirmation `instruction1.109.md` §14 authorizes next. This report grants no implementation, migration, EIS lock, Build Lock, Build Mode, deployment, Stage C, or production authority.
