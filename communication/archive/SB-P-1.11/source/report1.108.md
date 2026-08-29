# SMART BUSINESS — LAMBDA + TRANSIENT S3 PARSER ENGINEERING IMPLEMENTATION SPECIFICATION

## SB-P-1.11-GC-5 — Engineering Implementation Specification

**Report ID:** report1.108
**Mission:** SB-P-1.11-GC-5 — Lambda + Transient S3 Parser Engineering Implementation Specification
**Authorized By:** `communication/live/instruction1.101.md`
**Executing Room:** Claude Code / Engineering Architecture
**Mode:** SPECIFICATION ONLY — NO IMPLEMENTATION
**Implementation Authority:** NONE
**Production Migration Authority:** NONE
**Deployment Authority:** NONE

---

## 1. Final Verdict

`LAMBDA PARSER ENGINEERING IMPLEMENTATION SPECIFICATION — READY FOR SPECIALIST REVIEW`

This report is a standalone, implementation-ready Engineering Implementation Specification (EIS) for the approved Phase 1 external parser path:

**Smart Business server → transient private S3 parser-ingress → standard AWS Lambda parser → allowlisted parsed result → Smart Business import workflow.**

Every load-bearing engineering decision required by `instruction1.101.md` §6 is resolved to exactly one Phase 1 mechanism, justified against merged repository evidence, current AWS/Cloudflare provider documentation, and the actual reference codebase (`src/lib/catalog-import/*`, `src/server-functions/catalog-import.ts`). No decision in this report reopens, weakens, or silently reinterprets the architecture already locked by `report1.103.md`, `report1.104.md`, `report1.106.md`, and `report1.107.md`. Where evidence does not support an exact final operational value (reserved concurrency, rate-window thresholds), this report gives a justified Phase 1 default and explicitly classifies it as tunable before Build Lock, per `instruction1.101.md` §6's own escape valve — it does not invent false certainty.

A READY verdict does not authorize implementation, Build Lock, Build Mode, AWS/S3/IAM resource creation, dependency installation, SQL, migrations, Supabase mutation, Lovable changes, deployment, or production use.

---

## 2. Exact Canonical Baseline and Evidence Chain Reviewed

Latest merged GitHub `main` reviewed at mission start:

`9ca6bbd8b2a4cc41234b4c3e039271e666582f6f`

Commit:

`Authorize standalone Lambda parser engineering implementation specification (#236)`

### 2.1 Primary architecture inputs (read in full)

- `communication/live/report1.103.md` — AWS Lambda selected over Vercel Node Function; standalone 25-item Lambda architecture contract; the 5 MB/base64 payload-ceiling problem first flagged as unresolved.
- `communication/live/report1.104.md` — Infrastructure Operations Stage A `PASS`; the transient private S3 transport bridge selected to resolve the payload-ceiling problem; exact `ap-south-1`/`nodejs24.x`/2,048 MB/15s/response-streaming decisions; S3 raised as a new dependency requiring separate authorization.
- `communication/live/report1.106.md` — Claude Code / Engineering Architecture's SEC-L-B1/B2/B3 correction; selected AWS IAM Roles Anywhere; the checksum-bound upload-integrity contract; the Parser Upload Lease structure and its separation from the EC-2 guard.
- `communication/live/report1.107.md` — Security & Permissions Architecture's short confirmation review; `AWS LAMBDA SECURITY ARCHITECTURE CONFIRMATION — PASS`; confirms Roles Anywhere is implementable via Cloudflare Workers' `fetch`/`crypto.subtle` without `aws_signing_helper`, subprocesses, or native binaries, and lists the exact implementation-verification items a later Build Mode must still prove.

### 2.2 Supporting parser/security evidence (read in full, binding where not superseded)

- `communication/live/report1.90.md` — original production `PARSE_TIMEOUT` diagnosis; confirms `node:zlib` produced-byte containment already functioned in the deployed runtime; Papa Parse/ExcelJS already canonical.
- `communication/live/report1.91.md` — root-cause diagnosis: `node:worker_threads` construction does not function on Cloudflare Workers (`Worker method is not implemented` / requests hang indefinitely); names all nineteen public Catalog commands.
- `communication/live/report1.92.md` — "In-Process Bounded Parsing" architecture (later superseded by external Lambda isolation for Phase 1); confirms the 5 MB/25 MB/2,000/40/2,000 limits as already locked in `limits.ts` prior to this mission chain; documents the Cloudflare CPU-ceiling facts that motivated external isolation.
- `communication/live/report1.93.md` and `communication/live/report1.94.md` — EC-2/EC-3 contract origin (per-business durable guard; parse-before-write ordering; opaque failure sanitization).
- `communication/live/report1.95.md` — confirms the Cloudflare CPU-ceiling evidence gap that made in-process parsing unusable as a Phase 1 answer, reinforcing why external Lambda isolation was selected.
- `communication/live/report1.105.md` — original Security & Permissions Stage B findings (SEC-L-B1/B2/B3), corrected by `report1.106.md` and confirmed closed by `report1.107.md`.

### 2.3 Founder Workflow baseline (inherited context, not reopened)

- `communication/live/report1.96.md`, `report1.98.md`, `report1.100.md`, `report1.101.md`, `report1.102.md` — the completed Founder Workflow Reconciliation / BKR-1 through BKR-5 backend-architecture-correction chain, `SECURITY & PERMISSIONS ARCHITECTURE REVIEW — PASS`.

### 2.4 Reference codebase read directly for ground truth

`src/lib/catalog-import/limits.ts`, `content-type.ts`, `parse.ts`, `parse-isolated.ts`, `parse-worker.ts`, `types.ts`, `fields.ts`, `validate.ts`, and `src/server-functions/catalog-import.ts` were read in full so this EIS specifies the Lambda boundary as a precise extension of what already exists, not an invented parallel design. Exact findings from this reading are cited throughout §12 and §20.

For load-bearing AWS and Cloudflare platform facts not already settled by `report1.104.md`/`report1.107.md`, current authoritative provider documentation was consulted directly (cited at point of use in §7 and §10).

---

## 3. Scope and Authority (§5.1)

### 3.1 What this EIS governs

The exact engineering contract for the narrow parser boundary only:

- the Parser Upload Lease's physical and lifecycle contract;
- the EC-2 durable/shared per-business guard's physical and atomic contract;
- the AWS IAM Roles Anywhere credential path and its exact signing implementation;
- least-privilege IAM authority for the two conceptual roles;
- the Lambda Function URL contract;
- the transient S3 bucket/object/presigned-POST contract;
- upload checksum/replay protection;
- hostile CSV/XLSX input validation as it applies to the externally-hosted parser;
- the Lambda build/package/runtime contract;
- the allowlisted response contract;
- EC-3 failure ordering as it applies to this specific transport;
- logging/data-minimization for this boundary;
- environment separation, rollback, and the later verification matrix for this boundary only.

### 3.2 What this EIS does not govern

- the Founder Workflow bulk-onboarding orchestration, BKR-1 through BKR-5, or any Catalog/Inventory command (`report1.96.md`–`report1.102.md` remain the sole authority for that surface, unmodified);
- Product Truth, RLS, grants, or the nineteen public Catalog commands (unchanged, unmodified, no twentieth command);
- Manager/Employee permissions (Owner-only Phase 1 import authority is preserved exactly as documented in `report1.96.md` §9 and `report1.102.md` §4/§15.1 — Manager holds zero RLS-granted access to the relevant tables and remains fail-closed; Employee remains denied);
- any decision already locked by `report1.103.md`, `report1.104.md`, `report1.106.md`, or `report1.107.md` — this EIS makes those decisions concrete and buildable, it does not re-decide them;
- whether/when Mission Control authorizes Build Mode.

### 3.3 Inherited and frozen architecture decisions

The following are treated as closed inputs, not reopened by this EIS:

| Decision | Source | Value |
|---|---|---|
| Parser runtime | `report1.103.md` | AWS Lambda, standard default compute |
| Region | `report1.104.md` IO-5 | `ap-south-1` |
| Runtime | `report1.104.md` IO-2 / `instruction1.101.md` §4 | `nodejs24.x` |
| Transport | `report1.104.md` IO-3 | Transient private S3 presigned-POST handoff |
| Credential mechanism | `report1.106.md` §4, confirmed `report1.107.md` CONF-B1 | AWS IAM Roles Anywhere |
| Upload integrity | `report1.106.md` §9, confirmed `report1.107.md` CONF-B2 | SHA-256 exact-match S3 POST condition + independent Lambda re-verification |
| Tenancy binding | `report1.106.md` §11–§12, confirmed `report1.107.md` CONF-B3 | Parser Upload Lease, separate from EC-2 guard |
| Limits | `instruction1.101.md` §4 / `limits.ts` | 5,242,880 B compressed; 25×1024×1024 B decompressed; 2,000 rows; 40 columns; 2,000 chars/cell; 10 s app budget; 15 s Lambda timeout; 2,048 MB memory |
| Parser libraries | `report1.103.md` §5.2 / `package.json` | Papa Parse `^5.5.4`, ExcelJS `^4.4.0`, `node:zlib` |

### 3.4 Implementation still requires separate authorization

A `READY` verdict on this EIS authorizes only specialist routing (Infrastructure Operations, Supabase Backend Architecture where the Parser Upload Lease/EC-2 tables are concerned, and a Security & Permissions Architecture confirmation) toward a possible future Build Lock decision by Mission Control. It does not itself authorize writing code, creating AWS resources, creating migrations, or touching Supabase, Lovable, or production in any way.

---

## 4. End-to-End Sequence (§5.2)

The following is the authoritative sequence from merchant file selection through parser result return, folding the SEC-L-B1/B2/B3 corrections into the exact instruction1.101.md §5.2 seventeen-step skeleton:

1. Merchant selects a `.csv`/`.xlsx` file in the existing bulk-import UI; the browser computes SHA-256 over the exact selected file bytes locally using `crypto.subtle.digest("SHA-256", bytes)`, base64-encoded (§11.1) — this happens before any network call.
2. Browser calls the authenticated Smart Business server endpoint (a new server function alongside `catalogImportPreview`, e.g. `parserLeasePreview`) with the declared SHA-256, exact byte length, and file kind.
3. Smart Business validates the caller JWT via the existing `requireSupabaseAuth` middleware — unchanged.
4. Smart Business re-derives Owner and authoritative business using the existing `loadOwnedBusinessId` pattern (`src/server-functions/catalog-import.ts`) — unchanged; a non-Owner caller is denied by construction, exactly as today.
5. Smart Business calls `acquire_parser_preview_guard(business_id)` (§6) — the EC-2 durable/shared per-business guard — before any upload capability is created. A busy or rate-limited business fails closed here with a sanitized `IMPORT_BUSY`/`RATE_LIMITED` outcome; nothing else in this sequence executes.
6. On successful guard acquisition, Smart Business creates the Parser Upload Lease (§5) row: server-generated `leaseId`, server-generated high-entropy object key, the declared `expectedSha256`/`expectedByteLength` from step 2, the authoritative `businessId` from step 4, `issuedAt`, and `expiresAt = issuedAt + 300s`.
7. Using a temporary AWS session credential obtained through IAM Roles Anywhere (§7), Smart Business mints a short-lived SigV4 presigned S3 POST for exactly that object key, with `content-length-range` pinned to the exact declared byte length and an exact-match `x-amz-checksum-sha256` condition equal to the declared checksum (§10, §11).
8. Browser uploads directly to the private S3 bucket using that capability. S3 enforces the exact key, exact length, and exact checksum before accepting the object; no AWS credential ever reaches the browser.
9. Browser calls Smart Business's confirmation endpoint with only the `leaseId`. Smart Business resolves the object key and `businessId` **only** from its own lease record (never from anything the browser asserts), re-verifies the lease's stored `businessId` against the currently re-derived authoritative business, and transitions the lease `ISSUED → UPLOADED`.
10. Smart Business atomically claims the lease for dispatch (`UPLOADED → CONSUMED`-pending via a single conditional update that only one concurrent caller can win — §5.4). A losing concurrent/duplicate claim attempt fails closed immediately without contacting Lambda.
11. Having won the claim, Smart Business obtains a fresh short-lived AWS session credential via Roles Anywhere `CreateSession` (§7) and invokes the parser Lambda Function URL with `AuthType = AWS_IAM`/SigV4, passing only the object key, `leaseId`, `expectedByteLength`, and `expectedSha256` as control metadata — never raw bytes.
12. Lambda performs `HeadObject` and verifies the object's exact size and checksum against the values in the authenticated control request, before any read of the object body.
13. Lambda reads at most 5,242,880 bytes into memory and, immediately after the verified read succeeds, issues `DeleteObject` — before decompression checking or parsing begins (§12.1).
14. Lambda performs the 25 MiB actual-produced XLSX decompression check, structural verification, and CSV/XLSX parsing with the locked 2,000-row/40-column/2,000-character-per-cell enforcement, reusing `parse.ts`/`content-type.ts`/`limits.ts`/`fields.ts` verbatim (§13).
15. Lambda returns only the allowlisted `ParseOutcome` envelope (§14) via response streaming.
16. Smart Business validates the response envelope/schema; malformed, truncated, or unexpected output is treated as failure. On success, the lease is finalized `→ CONSUMED`; on any failure at steps 12–16, the lease is finalized `→ FAILED` and the EC-2 guard is released.
17. Only after the lease reaches `CONSUMED` and Smart Business's own field validation/classification (`validateRow`/`classifyRows`, unchanged) completes may the existing privileged import-support bookkeeping writes (`catalog_import_batches`/`catalog_import_rows` or the equivalent inventory-import tables) begin, exactly as `catalogImportPreview` does today. Preview performs zero Catalog/Inventory Product Truth mutation. Commit remains governed entirely by the existing nineteen Catalog commands under caller-JWT authority, unchanged.

The EC-2 guard is released when the lease reaches any terminal state (`CONSUMED`, `FAILED`, or `EXPIRED`), consistent with `report1.106.md` §12.1.

---

## 5. Parser Upload Lease Contract (§5.3)

### 5.1 Selected physical persistence mechanism

**Selected: a dedicated Supabase Postgres table, `parser_upload_leases`, service-role-only, structurally parallel to the existing `inventory_item_idempotency_keys`/`catalog_import_batches` support-table pattern (`report1.98.md`, `report1.102.md` §4 SEC-4).**

Justification: this repository already has two working precedents for exactly this shape of problem — a durable, business-scoped, atomically-claimed, service-role-only support table (`inventory_item_idempotency_keys` for BKR-1 idempotency; `catalog_import_batches`'s `previewed → committing → committed/failed` atomic claim in `catalogImportCommit`, `src/server-functions/catalog-import.ts` lines 499–522). Reusing that exact pattern, rather than inventing a new persistence primitive (Redis, a Durable Object, or an in-memory Worker-local store that cannot survive isolate recycling), keeps the Parser Upload Lease durable/shared across every Smart Business server instance — a hard requirement stated in `instruction1.101.md` §5.4 for EC-2 and equally necessary here, since Cloudflare Workers isolates are not guaranteed session-affine and must not hold authoritative state locally.

### 5.2 Required fields (illustrative shape, documentation only — no SQL is executed by this mission)

```text
parser_upload_leases
  id                    uuid primary key default gen_random_uuid()   -- the request/operation identifier (leaseId)
  business_id           uuid not null references businesses(id)      -- authoritative, server-derived only
  object_key            text not null unique                          -- server-generated, high-entropy, opaque
  expected_byte_length  integer not null
                          check (expected_byte_length > 0
                                 and expected_byte_length <= 5242880)
  expected_sha256_b64   text not null                                 -- base64, matches S3's x-amz-checksum-sha256 encoding (§11.1)
  guard_business_id     uuid not null                                 -- audit-only reference to the EC-2 guard it was issued under
  state                 text not null default 'ISSUED'
                          check (state in ('ISSUED','UPLOADED','CONSUMED','FAILED','EXPIRED'))
  failure_reason        text                                          -- internal-only closed code, never raw provider detail
  issued_at             timestamptz not null default now()
  expires_at            timestamptz not null                          -- issued_at + 300s (§5.3)
  confirmed_at          timestamptz                                   -- set on ISSUED -> UPLOADED
  terminal_at           timestamptz                                   -- set on any terminal transition
  created_by            uuid not null                                 -- auth.uid() of the issuing request
```

Indexes: unique on `object_key`; index on `(business_id, state)`; index on `expires_at` for the cleanup/backstop sweep (§13).

### 5.3 Authoritative business/actor/request binding

- `business_id` is written once, at row creation, from the server's own Owner/business re-derivation (§4 step 4) — never from browser input.
- `created_by` records the authenticated `auth.uid()` of the issuing request for audit purposes only; it is not used as an authorization source on its own (business ownership, not raw user identity, is the authorization boundary, consistent with the existing Owner-only model).
- At confirmation time (§4 step 9), Smart Business re-derives the authoritative business fresh from the currently authenticated caller and compares it against the lease's stored `business_id`. A mismatch fails closed regardless of any other lease validity, directly defeating the SEC-L-B3 threat (Merchant A learning Merchant B's `leaseId`/object key).

### 5.4 One-use atomic claim / consumption semantics

The `UPLOADED → CONSUMED`-pending transition (§4 step 10) is a single atomic conditional update, exactly mirroring the pattern already proven in `catalogImportCommit`:

```text
UPDATE parser_upload_leases
   SET state = 'CONSUMED', terminal_at = now()
 WHERE id = :leaseId AND business_id = :businessId AND state = 'UPLOADED'
RETURNING id;
```

Exactly one concurrent caller receives a non-empty `RETURNING` result; every other concurrent or later attempt against the same `leaseId` observes zero affected rows and fails closed before Lambda is ever invoked a second time. (In practice the transition is staged — Smart Business claims by moving out of `UPLOADED` immediately before dispatch, then finalizes to `CONSUMED` only after Lambda's allowlisted result is validated, or to `FAILED` otherwise — but the claim step itself, which prevents a second dispatch, is this single atomic conditional update.)

### 5.5 Permitted terminal states

`CONSUMED`, `FAILED`, `EXPIRED` — exactly the three named in `report1.106.md` §12.3. No other terminal state exists. No terminal lease is ever reopened or reused.

### 5.6 Concurrency behavior

Two confirmation calls racing for the same `leaseId` both attempt the same conditional update; Postgres row-level locking guarantees exactly one succeeds. No advisory lock is required for this specific transition because the `WHERE state = 'UPLOADED'` predicate combined with `UPDATE`'s row lock is itself sufficient for exactly-once semantics on a single row.

### 5.7 Replay behavior

A request referencing a lease already in a terminal state (`CONSUMED`, `FAILED`, `EXPIRED`) is rejected immediately by the same query returning zero rows — Smart Business never re-contacts S3 or Lambda for a terminal lease, and never reparses bytes. The merchant-visible result is a fixed, sanitized "already processed — start a new import" message (§9).

### 5.8 Network-loss behavior

If Lambda completes (including its own `DeleteObject`) but Smart Business never receives/processes the response (network partition, Worker termination), the lease remains stuck at its pre-`CONSUMED` claimed state. A client retry against that `leaseId` re-enters the flow at step 11 of §4; because the S3 object no longer exists, Lambda's own `HeadObject` verification fails with a sanitized not-found outcome, and Smart Business finalizes the lease to `FAILED`. This is a safe, deterministic terminal outcome — never a silent re-parse of different bytes at the same key (§11).

### 5.9 Cleanup / expiry behavior

- `ISSUED` past `expires_at`: treated as terminal (`EXPIRED`) at next read/touch; the presigned POST itself has already expired by the same clock (§10.1), so no upload can succeed against it after this point.
- `UPLOADED` (browser confirmed, but Smart Business never dispatched, or dispatch never resolved) past `expires_at`: no further transition to `CONSUMED` is permitted even though the row is technically still `UPLOADED` — `expires_at` is an absolute ceiling on the whole lease lifecycle, not only the `ISSUED` phase (`report1.106.md` §12.3).
- An orphaned S3 object surviving any of the above is removed only by the S3 Lifecycle backstop (§13), never by an application-level retroactive parse.

### 5.10 Failure reason codes

`failure_reason` stores one fixed internal closed code (`INTEGRITY_MISMATCH`, `OBJECT_NOT_FOUND`, `LAMBDA_TIMEOUT`, `LAMBDA_RUNTIME_ERROR`, `MALFORMED_RESPONSE`, `LIMIT_EXCEEDED:<ImportLimitErrorCode>`, or `TRANSPORT_LOST`) — internal-diagnosis only, never returned verbatim to the merchant (the merchant sees only the existing sanitized closed categories from `report1.105.md` §10, e.g. "upload integrity failure").

### 5.11 RLS / grant / server-authority model

`anon`: no access. `authenticated`: no access (neither SELECT nor DML) — unlike `catalog_import_batches`/`inventory_import_rows`, the merchant's own UI never polls lease state directly; lease/guard internals are a lower-level transport primitive entirely internal to the preview server function's own orchestration, and the merchant-visible preview/status surface continues to be the existing `catalog_import_batches`-style bookkeeping tables, unchanged. Only the server-only admin client (`supabaseAdmin`, the same dynamic-imported service-role client already used for `catalog_import_batches`/`catalog_import_rows` in `src/server-functions/catalog-import.ts`) reads or writes this table. Default/broad privileges must be explicitly revoked before any narrow grant is added, consistent with `report1.102.md` §4 SEC-4's mandatory posture for new support tables.

### 5.12 Why this is transport/security state, not Product Truth and not an import batch/row

`parser_upload_leases` never contains a product name, category, price, tax, or any merchant business-decision field — only opaque identifiers, a checksum, a byte length, and lifecycle timestamps. It has no relationship to `catalog_products`, `catalog_import_rows`, or any Catalog command, and it grants no authority to call one. It exists purely to answer "is this exact object, for this exact business, still eligible to be read and parsed" — the same category of question `catalog_import_batches.status` answers for "is this batch still eligible to commit," never Product Truth itself (`report1.107.md` CONF-B3 §6.4).

---

## 6. EC-2 Durable Shared Per-Business Guard (§5.4)

### 6.1 Selected physical persistence/atomic guard mechanism

**Selected: a dedicated Supabase Postgres table, `parser_preview_guards`, keyed by `business_id`, service-role-only, acquired/released through a single `SECURITY DEFINER` support function (not a public Catalog command) — `acquire_parser_preview_guard(p_business_id uuid)` / `release_parser_preview_guard(p_business_id uuid, p_lease_id uuid)`.**

Justification: this repository already uses `pg_advisory_xact_lock` for BKR-1's concurrency serialization and an atomic `UPDATE ... WHERE status IN (...) RETURNING id` pattern for `catalog_import_batches`'s exclusive claim. A single-row-per-business mutex-with-expiry, implemented as a conditional `INSERT ... ON CONFLICT (business_id) DO UPDATE ... WHERE <existing row expired> RETURNING id`, is the standard Postgres idiom for exactly this shape of durable/shared guard, requires no new infrastructure (no Redis, no external rate-limiter service), and is directly auditable via ordinary SQL — consistent with "smallest reliable architecture."

### 6.2 Illustrative shape (documentation only)

```text
parser_preview_guards
  business_id               uuid primary key references businesses(id)
  lease_id                  uuid                              -- audit-only, the currently associated parser_upload_leases.id
  acquired_at                timestamptz not null
  expires_at                 timestamptz not null             -- acquired_at + 360s (§6.4)
  attempt_window_started_at  timestamptz not null
  attempt_count_in_window    integer not null default 0
```

### 6.3 Per-business concurrency rule

At most one acquired (non-expired) guard row may exist per `business_id` at any time — enforced structurally by the primary key plus the conditional upsert predicate below, not by application-level "check then write" logic (which would be racy).

### 6.4 Request/rate window rule

**Phase 1 default: at most 5 preview-attempt acquisitions per business per rolling 10-minute window; guard hold duration (`expires_at - acquired_at`) fixed at 360 seconds.**

The 360-second guard duration is derived, not arbitrary: it equals the 300-second (5-minute) maximum Parser Upload Lease/presigned-POST expiry (§5.3, §10.1) plus the 15-second Lambda timeout (`instruction1.101.md` §4) plus a 45-second margin for network/orchestration overhead — long enough to cover one full legitimate upload-and-parse cycle, short enough to bound abandoned-guard exposure to a few minutes.

The 5-per-10-minute attempt threshold has no pilot-traffic evidence behind it yet (consistent with `report1.104.md` §23's own acknowledgment that pilot-derived parameters remain open). Per `instruction1.101.md` §6's explicit allowance, this is classified as **an operational parameter requiring specialist confirmation before Build Lock**, with 5-per-10-minutes stated as the safe conservative Phase 1 default, tunable upward only with measured legitimate-usage evidence.

### 6.5 Atomic acquisition/release behavior

Acquisition, inside one statement/transaction:

```text
INSERT INTO parser_preview_guards
    (business_id, acquired_at, expires_at,
     attempt_window_started_at, attempt_count_in_window)
VALUES (:businessId, now(), now() + interval '360 seconds',
        now(), 1)
ON CONFLICT (business_id) DO UPDATE
   SET acquired_at = now(),
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
 WHERE parser_preview_guards.expires_at < now()                       -- guard not currently held
   AND (parser_preview_guards.attempt_window_started_at
          < now() - interval '10 minutes'
        OR parser_preview_guards.attempt_count_in_window < 5)         -- rate not exceeded
RETURNING business_id;
```

Zero returned rows means either the guard is currently held (`IMPORT_BUSY`) or the rate window is exhausted (`RATE_LIMITED`); the caller distinguishes these only for internal telemetry, never in the merchant-visible message, which is a single generic "please wait and try again" sanitized outcome in both cases (§9).

Release (called when the associated lease reaches a terminal state, §4 step 16):

```text
UPDATE parser_preview_guards
   SET expires_at = now()
 WHERE business_id = :businessId AND lease_id = :leaseId;
```

Setting `expires_at` to now (rather than deleting the row) preserves the `attempt_window_started_at`/`attempt_count_in_window` rate-limit accounting across the release, so a business cannot reset its own rate window merely by completing/abandoning previews quickly.

### 6.6 Expiry/recovery from abandoned work

Because acquisition itself is a conditional upsert keyed on `expires_at < now()`, an abandoned guard (Smart Business crashed before calling release) self-heals on the next acquisition attempt after `expires_at` passes — no separate sweep/cron job is required for guard recovery (only the S3 object backstop, §13, needs one). This satisfies "expiry/recovery from abandoned work" without introducing new scheduler infrastructure, consistent with `report1.104.md` §17's "Infrastructure Operations does not introduce another scheduler/queue under this mission."

### 6.7 Fail-closed behavior

Any error evaluating or writing `parser_preview_guards` (transient DB error, timeout) is treated as guard-acquisition failure — the request fails closed with the same sanitized busy/retry message; a database error is never treated as an implicit "guard granted."

### 6.8 Interaction with the Parser Upload Lease

The guard is acquired strictly before the lease is created (§4 steps 5–6) and released strictly after the lease reaches a terminal state (§4 step 16/§5.9). The lease's `guard_business_id` column is an audit-only reference to confirm this ordering was followed; the lease's own authorization decisions (§5.3) never depend on re-reading guard state, keeping the two primitives independently reasoned-about as designed in `report1.106.md` §12.1.

### 6.9 Why Lambda reserved concurrency is defense-in-depth only, never a substitute for EC-2

Lambda reserved concurrency (§13.5) is an AWS account/function-level scale ceiling shared across every business using the parser at once; it has no concept of `businessId` and cannot distinguish one merchant's legitimate concurrent preview from another's. EC-2 is the only control that ties "at most one expensive preview in flight" to a specific authoritative tenant. Removing EC-2 and relying on reserved concurrency alone would let a single business exhaust the shared concurrency ceiling and deny service to every other business — exactly the cross-tenant risk EC-2 exists to prevent (`report1.105.md` §11, `report1.107.md` §7).

---

## 7. AWS IAM Roles Anywhere Contract (§5.5)

### 7.1 Locked model (from `report1.106.md`/`report1.107.md`, made concrete here)

- **Dedicated external caller IAM role:** exactly one role, assumable only via Roles Anywhere `CreateSession`, never via a standing IAM user access key (§8.1).
- **Trust Anchor / Profile / end-entity certificate model:** one Smart Business-controlled Certificate Authority (self-managed/external CA — AWS documents external-CA trust anchors as supported, per `report1.106.md` §6) registered as the Roles Anywhere Trust Anchor; one Roles Anywhere Profile mapping to the caller role; one dedicated non-human end-entity X.509 certificate ("Smart Business Parser Ingress Caller") issued from that CA.
- **No long-lived IAM user access key** is part of this design at any point.
- **Cloudflare/Lovable server-side private-key and certificate placement:** the end-entity private key (PKCS8) and certificate (plus intermediate chain, if any) are stored only as encrypted Cloudflare Worker secret bindings (the same server-secret storage boundary already documented for other server-only credentials in this codebase), never in `VITE_*`, never in any client-bundled artifact.
- **Web Crypto / outbound HTTPS, not `aws_signing_helper` or subprocesses:** confirmed compatible by `report1.107.md` §4.2 — Cloudflare Workers provides `fetch`, `crypto.subtle.sign()`, `crypto.subtle.importKey()` with PKCS8 support, and both RSASSA-PKCS1-v1_5 and ECDSA signing.
- **Temporary session credential handling:** `CreateSession` returns an access key, secret key, and session token, held only in server memory for the single operation/request that needed them, never persisted, never returned to the browser.
- **Session lifetime configuration principle:** AWS permits 900–43,200 seconds (`report1.106.md` §6); Phase 1 configures the Roles Anywhere Profile's `durationSeconds` to **900 seconds (the documented minimum)** — since each Worker invocation needs a credential only for the length of one presign-issuance or one Lambda-invocation call (single-digit seconds), not a long-running session, the minimum AWS permits is also the correct Phase 1 choice: it bounds any single credential's live exposure window as tightly as the protocol allows.
- **Non-extractable imported private key where practical:** the end-entity private key must be imported via `crypto.subtle.importKey(..., extractable = false, ["sign"])` wherever the selected runtime/library path permits a non-extractable `CryptoKey`, so the raw key material cannot be re-exported from the running Worker even if application code were compromised (`report1.107.md` §4.3).
- **Certificate rotation and revocation requirements / compromise procedure:** the two-tier model from `report1.106.md` §8 — automatic short session-credential expiry (900 s) plus overlapping certificate reissuance/replacement/retirement for the longer-lived end-entity certificate, with immediate revoke-at-Trust-Anchor on suspected compromise. Exact calendar cadence remains an Infrastructure/Operations governance decision, not fixed here (matching `report1.106.md` §8's own deferral, confirmed sufficient by `report1.107.md` §4.4).
- **Browser/client exclusion rules:** identical to `report1.106.md` §4 item 6 — private key, certificate private-key material, and any issued AWS session credential must never appear in browser JavaScript, `VITE_*` variables, HTML, serialized server-function payloads, source maps, cookies, browser storage, logs, telemetry, or error responses.
- **Exact least-privilege resource boundaries:** §8.1 below.

### 7.2 AWS4-X509 signing implementation — required engineering decision

`instruction1.101.md` §5.5 requires this EIS to state explicitly whether AWS4-X509 (Roles Anywhere `CreateSession`) signing is implemented manually or via a compatible pure-JS library, and to STOP rather than guess if this cannot be resolved confidently.

**Finding:** AWS's own documentation (`authentication-sign-process.html`, confirmed by direct fetch) states the AWS4-X509 signing process is "identical to SigV4, with the exception of the keys used, the signature algorithm, and the addition of headers" — specifically the `X-Amz-X509`/`X-Amz-X509-Chain` headers (base64 DER-encoded certificate/chain) and inclusion of the signing certificate's serial number in the `Authorization` header's Credential scope, with the signature computed using `AWS4-X509-RSA-SHA256` or `AWS4-X509-ECDSA-SHA256` depending on key type. A direct search for an existing, maintained, pure-JS npm package implementing this specific X.509-bound variant found none — the well-known Workers-compatible SigV4 libraries identified (`aws4fetch`, `@smithy/signature-v4` and its wrappers) implement only the standard access-key-based SigV4 algorithm, which is a different (simpler) credential model than the certificate-bound `CreateSession` request itself requires.

**Decision, resolved with confidence rather than STOPped, because AWS's own specification is precise and bounded and every required cryptographic primitive is independently confirmed available in the runtime:**

- **`CreateSession` request signing (AWS4-X509): implemented manually**, as a small, self-contained module inside the Smart Business server codebase, built directly on the same standard SigV4 canonical-request/string-to-sign/signing-key derivation algorithm already well-documented by AWS (`reference_sigv.html`), with exactly the X.509-specific additions above layered on top, executed via `crypto.subtle.importKey`/`crypto.subtle.sign` against the imported end-entity private key. This is a bounded, fully-specified algorithm — not an invented or ambiguous one — and requires no dependency AWS itself does not document.
- **Standard SigV4 signing for the resulting S3 presigned-POST policy and the Lambda Function URL invocation (once temporary access-key/secret/session-token credentials are held): use the `aws4fetch` library** (`AwsClient`/`AwsV4Signer`), selected because it is a small (~2.5 KB gzipped), dependency-free library built specifically for `fetch`+`SubtleCrypto` environments, is documented by Cloudflare itself as a Workers-compatible pattern (`developers.cloudflare.com/r2/examples/aws/aws4fetch/`), requires no native binary, no subprocess, no Node-only API, and never touches the browser (it runs only inside the Worker's server-side request handler). It is not used for the `CreateSession` request itself (which needs the X.509-bound variant it does not implement), only for the ordinary access-key-based SigV4 calls that follow.

This satisfies `instruction1.101.md` §5.5's requirement precisely: one part manual (with justification for why no safe library exists), one part a named, justified library — not a menu, not a guess.

---

## 8. IAM Authority Map (§5.6)

### 8.1 Smart Business external caller principal (assumed via Roles Anywhere)

Permitted, exactly:

| Action | Resource scope |
|---|---|
| `s3:PutObject` | the exact parser-ingress bucket, narrow object-key prefix only (needed to mint a valid presigned POST — the signing principal's own permissions are checked against the resulting request at upload time) |
| `lambda:InvokeFunctionUrl` | the exact parser Function URL/function ARN/alias |
| `lambda:InvokeFunction`, conditioned on `lambda:InvokedViaFunctionUrl = true` | the exact parser function ARN/alias |

Explicitly prohibited: `s3:GetObject`, `s3:ListBucket`, `s3:DeleteObject`, `s3:PutObjectAcl`; any Lambda administrative action (`UpdateFunctionCode`, `UpdateFunctionConfiguration`, `CreateFunctionUrlConfig`, `UpdateFunctionUrlConfig`, concurrency mutation); IAM administration of any kind, including self-rotation of its own trust/permissions; Supabase/database/Product Truth authority.

### 8.2 Lambda execution role

Permitted, exactly:

| Action | Resource scope |
|---|---|
| `s3:GetObject` / `s3:HeadObject` | the exact parser-ingress object path/prefix |
| `s3:DeleteObject` | the same exact path/prefix, used only on the object it just read |
| `logs:CreateLogStream`, `logs:PutLogEvents` | the function's own CloudWatch log group only |

Explicitly prohibited: `s3:PutObject`; `s3:ListBucket` (not proven necessary — Lambda always receives the exact object key from the authenticated control request, §4 step 11, and never needs to enumerate the bucket); IAM administration; Lambda administration; any Supabase/database/Product Truth credential.

These two authority classes remain fully disjoint: the caller principal can create an upload capability and invoke the function, but cannot read or delete the resulting object; the Lambda role can read and delete the object it was told about, but cannot create a new one and cannot invoke itself outside the path Smart Business controls.

---

## 9. Lambda Function URL Contract (§5.7)

- `AuthType = AWS_IAM` — the only accepted mode; `AuthType = NONE` is prohibited.
- Exact function/alias resource scope: the caller principal's policy names the exact function ARN and the production alias only, never a wildcard.
- `lambda:InvokeFunctionUrl` **and** `lambda:InvokeFunction` are both required (AWS documents both as necessary for Function URL authorization); `lambda:InvokeFunction` carries the `lambda:InvokedViaFunctionUrl = true` condition, which AWS documents specifically to prevent the same principal from invoking the function through the ordinary (non-URL) `InvokeFunction` API — closing the "same credential, alternate invocation path" bypass at the AWS policy layer rather than relying on URL secrecy.
- No wildcard public principal in the function's resource-based policy.
- No alternate direct-invoke path exists for the external caller — the Function URL is the only entry point the caller principal's policy permits.
- **Immutable version + production alias deployment/rollback model:** every deployment publishes a new immutable Lambda version; a named alias (e.g. `prod`) points at the currently active version; the Function URL is configured against the alias, not a version number directly. Rollback is a control-plane alias repoint to the previous known-good version, never a source rewrite (`report1.104.md` §18).
- **Response mode:** `InvokeMode = RESPONSE_STREAM`, using the Node.js Lambda runtime's `awslambda.streamifyResponse()` handler wrapper (AWS's documented mechanism for response-streaming Function URLs), per §14.

---

## 10. Transient Private S3 Contract (§5.8)

All properties below are carried forward unweakened from `report1.104.md` §9/IO-7, `report1.105.md` §8/§13, and `report1.106.md` §13, made concrete for Build Mode:

- Dedicated, private-only bucket (or equivalently dedicated prefix/security boundary) in `ap-south-1`, co-located with the Lambda function.
- S3 Block Public Access: all four settings enabled.
- Bucket policy denies any request not using TLS (`aws:SecureTransport = false` → Deny).
- Default server-side encryption at rest enabled (SSE-S3 baseline; SSE-KMS remains a Security-review upgrade decision, not required for Phase 1).
- Versioning **disabled**; Object Lock **disabled**; cross-region replication **disabled**; no Glacier/archive transition rule.
- No public ACL or bucket-policy path of any kind; no browser `GET`/`LIST`/`DELETE` capability — the browser receives only the presigned POST fields.

### 10.1 Exact bucket/key binding and presigned POST contract

- Object key: server-generated (Build Mode should use a cryptographically random identifier of at least 128 bits of entropy, e.g. a UUIDv4 or equivalent, under a fixed prefix such as `parser-ingress/`), containing no merchant/business/customer/file-derived data.
- Presigned POST conditions, exact:
  - `bucket`: exact-match, the one dedicated bucket;
  - `key`: exact-match, the one server-generated key (never a wildcard/prefix condition);
  - `content-length-range`: `[expectedByteLength, expectedByteLength]` — pinned to the exact declared length from the lease (§5.2), which is itself always ≤ 5,242,880 bytes (Smart Business rejects any declared length above this ceiling before a lease is even created);
  - `x-amz-checksum-sha256`: exact-match, equal to the lease's `expected_sha256_b64` (§11.1);
  - no `acl` field permitted from the caller;
  - no `success_action_redirect` to an arbitrary/caller-controlled origin.
- Policy expiry: **300 seconds (5 minutes)**, matching the lease's own `expires_at` (§5.2) exactly, so the two never drift apart.
- No arbitrary browser-controlled ACL or success redirect, per above.

### 10.2 Immediate delete and lifecycle backstop

- Immediate `DeleteObject` occurs after the verified read (§4 step 13/§12.1), before decompression checking or parsing.
- **S3 Lifecycle backstop duration: 1 day.** AWS S3 Lifecycle expiration rules operate only on whole-day granularity (`Days`, a non-zero positive integer, or an absolute `Date`) — there is no sub-day expiration option in the S3 Lifecycle API. One day is therefore the shortest backstop AWS's own Lifecycle mechanism can express; it is an exceptional-abandonment backstop only and must never be described as immediate deletion (consistent with `report1.104.md` §19 and `report1.106.md` §13.2).

---

## 11. Upload Integrity / Replay Contract (§5.9)

### 11.1 SHA-256 format and transport representation

**Selected representation: base64, end-to-end, matching S3's own `x-amz-checksum-sha256` header encoding.** The browser computes the digest via `crypto.subtle.digest("SHA-256", fileBytes)` and base64-encodes the raw digest bytes (not hex) before sending it to Smart Business. Smart Business stores this same base64 string as `parser_upload_leases.expected_sha256_b64` and forwards it unchanged to both the S3 POST-policy condition (§10.1) and the Lambda control request (§11.4). Using one canonical representation throughout — rather than hex in the lease and base64 only at the S3 boundary — removes an entire class of encoding-mismatch implementation bugs; this is called out explicitly because AWS's S3 checksum headers require base64, and a naive hex-digest implementation (a common default in many crypto examples) would silently fail every upload.

### 11.2 Browser checksum responsibility versus server trust

The browser's declared checksum is an integrity commitment for the bytes the merchant has chosen to upload — it is not treated as evidence the file's *content* is safe (`report1.107.md` §5.1). Normal hostile-input validation (§12) still runs in full, unconditionally, inside Lambda after the checksum/size binding has been satisfied.

### 11.3 S3-layer enforcement

The presigned POST's exact-match `content-length-range` and `x-amz-checksum-sha256` conditions (§10.1), combined with S3's own independent server-side verification that the actually-uploaded bytes' SHA-256 matches the declared/policy-pinned value, mean a byte-substitution attempt against the same still-valid capability is rejected by S3 itself: an attacker either violates the exact-match policy condition by declaring a different checksum, or (if they dishonestly declare the original checksum while uploading different bytes) fails S3's own server-side checksum verification against the actual bytes. Either way, the upload does not complete.

### 11.4 Lambda-layer independent verification

Lambda receives `objectKey`, `expectedByteLength`, and `expectedSha256B64` only from the SigV4-authenticated Smart Business control request (§4 step 11) — never from the browser and never invented by Lambda. Before reading the object body, Lambda calls `HeadObject` and compares the object's actual `ContentLength` and checksum metadata against these expected values.

### 11.5 Behavior on mismatch

Any mismatch (size or checksum) fails closed: Lambda does not read the object body or attempt to parse; it issues `DeleteObject` where the object exists and it is safe to do so; it returns only a sanitized `integrity_mismatch` outcome (§14); Smart Business maps this to the closed "upload integrity failure" category (§9) and finalizes the lease to `FAILED` with `failure_reason = 'INTEGRITY_MISMATCH'`.

### 11.6 Prevention of parser execution on mismatch

Structural — the mismatch check in §11.4/§11.5 is the first action of the Lambda handler after `HeadObject` returns, strictly before any object-body read, decompression check, or parse call; there is no code path that reaches Papa Parse/ExcelJS without first passing this check.

### 11.7 Exact lease one-use dispatch semantics

Covered fully in §5.4 — the atomic `UPLOADED → CONSUMED`-pending conditional update is the single dispatch gate.

### 11.8 Behavior if a still-valid POST is replayed

A still-valid presigned POST can, at most, be used to attempt another upload to the same exact key with the same exact pinned checksum/length — it cannot be used to substitute different bytes (§11.3) and, even if a second identical-content upload succeeded, it would not by itself cause a second parse, because parse dispatch is gated by the lease's one-use atomic claim (§5.4), not by S3 upload events.

### 11.9 Behavior if Lambda consumed/deleted the object but Smart Business lost the response

Covered fully in §5.8 — the retry finds no object (already deleted), fails closed via `HeadObject` not-found, and the lease finalizes to `FAILED`. No silent reparse of substitute bytes at the same key is possible, because a fresh upload to a `FAILED`/terminal lease's key is never attempted (each lease uses a unique, single-use object key — the key itself is never reissued after a lease reaches a terminal state).

### 11.10 Fail-closed handling for unknown/expired/consumed leases

Any confirmation or dispatch request naming a `leaseId` that does not exist, or that exists but is `EXPIRED`/`CONSUMED`/`FAILED`, is rejected immediately with the same fixed sanitized "already processed / start a new import" or "session expired / start a new import" message, without contacting S3 or Lambda.

---

## 12. Parser Input Validation Contract (§5.10)

This section makes each `instruction1.101.md` §5.10 requirement executable, citing the exact existing implementation in `src/lib/catalog-import/`, which the Lambda handler reuses verbatim (only the execution host changes, per `report1.103.md` §7 items 11–13).

| Requirement | Status | Mechanism |
|---|---|---|
| CSV/XLSX only | Implemented, reused unchanged | `fileKind` determined by extension at upload time; content independently verified below regardless of extension |
| Extension not trusted as content proof | Implemented, reused unchanged | `verifyCsvStructure` rejects ZIP-magic-byte content even when named `.csv`; `verifyXlsxStructure` requires a valid ZIP container **and** an exact `[Content_Types].xml` match |
| Format/content verification before parser use | Implemented, reused unchanged | `verifyCsvStructure`/`verifyXlsxStructure` run before `Papa.parse`/`ExcelJS.Workbook.xlsx.load()` |
| Encrypted/password-protected workbooks rejected | Implemented, reused unchanged | An encrypted/password-protected `.xlsx` is an OLE-compound container, not a plain ZIP; it fails `readCentralDirectory`'s end-of-central-directory search and throws `MALFORMED_FILE` before any further check runs |
| Macro-enabled workbooks rejected | Implemented, reused unchanged | Exact-match rejection of `MACRO_WORKBOOK_CONTENT_TYPE` in `[Content_Types].xml`, throwing `ENCRYPTED_OR_MACRO_FILE`, regardless of file extension |
| Archive-disguised input rejected where applicable | Implemented, reused unchanged | CSV: ZIP-magic-byte prefix check. XLSX: a non-ZIP or non-OOXML-spreadsheet ZIP fails the central-directory or content-type check |
| No macro execution | True by construction | Macro-enabled workbooks are rejected outright before ExcelJS ever loads them; ExcelJS itself never executes VBA |
| No formula evaluation | Implemented, reused unchanged | `cellToString`'s formula branch reads only ExcelJS's cached `.result` value; the formula expression itself is never evaluated |
| No external links/resources | **True by construction, not a distinct explicit check** — `workbook.xlsx.load()` parses only the OOXML package's cell-value data and performs no network fetch; `cellToString` never reads `xl/externalLinks/` parts. Build Mode must add an acceptance fixture proving no outbound network call occurs when a workbook containing an external-link reference is parsed, since this is presently an emergent property of the code path, not an asserted rule |
| No embedded script/object interpretation | **True by construction, not a distinct explicit check** — `cellToString` converts only scalar, cached-formula-result, rich-text, and date cell values to strings; embedded OLE objects/images are never read or surfaced. Build Mode must add a fixture confirming an embedded-object workbook parses using only its literal cell text, with no object payload appearing anywhere in the response |
| Formula cells use only safe cached scalar values or are rejected | Implemented, reused unchanged | Same as "no formula evaluation" above — the only formula-cell path reads `.result` |
| Hidden worksheets do not become authoritative input silently | Implemented, reused unchanged, with one precise caveat | Only `worksheet[0]` (first sheet in file order) is ever read; additional worksheets are never merged in and are surfaced via the explicit `additionalWorksheetsIgnored` flag. **Caveat:** the hidden/visible state of `worksheet[0]` itself is not separately inspected — the first sheet in file order is read regardless of its own hidden attribute. This is the precise current behavior, not a stronger claim of hidden-state detection |
| CSV formula-injection values remain inert text | Implemented, reused unchanged | CSV parsing never evaluates any cell; `isFormulaInjectionCandidate`/`neutralizeForSpreadsheetExport` (`fields.ts`) additionally neutralize formula-trigger-prefixed values (`=`, `+`, `-`, `@`) specifically when re-emitted into any downloadable/viewable export, so reopening an export in a spreadsheet application cannot trigger evaluation either |
| 25 MiB actual-produced decompression containment before ExcelJS materialization | Implemented, reused unchanged | `enforceRealDecompressedSize` runs immediately after central-directory parsing, using `inflateRawSync(..., { maxOutputLength })` — a real, incremental zlib-enforced cap, not a check against declared metadata — strictly before `[Content_Types].xml` is read or `workbook.xlsx.load()` is called |
| 2,000 row / 40 column / 2,000 character-per-cell hard limits | Implemented, reused unchanged | Enforced in both `parseCsv` and `parseXlsx`, against `IMPORT_LIMITS` (`limits.ts`) |
| 10-second application parser budget | Implemented, reused unchanged, role clarified | The existing `Date.now()`-based elapsed check remains as an internal early-exit/telemetry signal only; per `report1.104.md` IO-6, the enforced non-cooperative backstop is now Lambda's own 15-second provider `Timeout`, which the application budget must never be raised to accommodate |
| Sanitized failures and zero Product Truth mutation on parser failure | Implemented, reused unchanged | Every `ImportLimitError` maps to a closed code; no Catalog/Inventory write occurs anywhere in the parse path |

**12.1 Exact deletion/validation ordering inside the Lambda handler** (restated precisely from `report1.106.md` §13.1): `HeadObject` size/checksum verification (§11.4) → object body read (≤ 5,242,880 bytes) → `DeleteObject` → **only then** `verifyCsvStructure`/`verifyXlsxStructure` (including the 25 MiB decompression cap) → `Papa.parse`/`ExcelJS.Workbook.xlsx.load()` → row/column/cell enforcement → allowlisted result construction.

---

## 13. Lambda Packaging and Runtime Contract (§5.11)

### 13.1 Selected bundling approach

**Selected: esbuild**, bundling the Lambda handler and its exact dependency closure (`parse.ts`, `content-type.ts`, `limits.ts`, `fields.ts`, `types.ts`, plus `papaparse` and `exceljs`) into a single minified CommonJS (or ESM, per `nodejs24.x` support) output file targeting Node 24, packaged as a standard ZIP deployment artifact (well within the 50 MB direct-upload ceiling per `report1.104.md` IO-2).

Justification: esbuild is already an implicit part of this repository's toolchain (Vite's production build uses esbuild/rollup); it performs static import-graph bundling rather than runtime path resolution, which directly and structurally eliminates the exact packaging defect `report1.91.md` §3.1 diagnosed for the old in-process worker (`path.resolve(process.cwd(), "src/lib/catalog-import/parse-worker.ts")` — a dynamic, CWD-relative path a bundler cannot statically discover). A statically-bundled single-file Lambda artifact has no equivalent failure mode: every import is resolved and inlined at build time, not at runtime relative to an assumed working directory.

### 13.2 No CWD-relative worker source files; no `worker_threads` requirement

**Important architectural clarification:** the Lambda handler calls `parseCsv`/`parseXlsx` (`parse.ts`) **directly**, synchronously, within its own single-invocation execution — it does **not** spawn a `node:worker_threads` Worker internally. The in-process worker-thread wrapper (`parse-isolated.ts`, `parse-worker.ts`) exists to compensate for the *absence* of per-request isolation on Cloudflare Workers; standard Lambda default compute's own one-invocation-per-MicroVM isolation (`report1.104.md` IO-1) already supplies that isolation property at the platform level, making an additional in-process worker thread redundant for this specific deployment. `parse-isolated.ts` and `parse-worker.ts` are therefore **not part of the Lambda bundle's dependency closure** (§20) — they remain in the repository, still used for their existing purpose if any, but the Lambda handler imports only `parse.ts`/`content-type.ts`/`limits.ts`/`fields.ts`/`types.ts`.

### 13.3 No Managed Instances; in-memory processing; no `/tmp` dependency

Confirmed unchanged from `report1.104.md` IO-1/IO-2: standard Lambda default compute only; the raw object is read into a Node `Buffer` in memory and never written to `/tmp`; `/tmp` is not used for any purpose in this design.

### 13.4 Memory, timeout, and versioning

- **2,048 MB** starting memory (`instruction1.101.md` §4) — Build/acceptance testing must compare against 1,769 MB (~1 vCPU) using maximum-bound fixtures before any increase, per `report1.104.md` §14.
- **15-second** infrastructure timeout (`instruction1.101.md` §4) — the enforced non-cooperative backstop (§12).
- Immutable published versions + a `prod` alias (§9); rollback is an alias repoint.

### 13.5 Concurrency

**Phase 1 starting reserved concurrency: 5.** No pilot-traffic evidence exists yet to justify a different number (`report1.104.md` §23 item 6 remains open). Per `instruction1.101.md` §6's escape valve, this is stated as a justified conservative Phase 1 default — sufficient for solo-founder/early-pilot-stage concurrent-preview volume while still bounding denial-of-wallet exposure to a small, fixed number of simultaneous executions — and is explicitly classified as an operational parameter to be tuned upward only with measured concurrent-usage evidence before broader rollout, not a final production value. On-demand/default concurrency behavior applies otherwise; provisioned concurrency is not used by default (`report1.104.md` §15).

### 13.6 Benchmark evidence required before production acceptance

Consistent with `report1.104.md` §23: exact bundled artifact size, measured peak memory at maximum-bound CSV/XLSX fixtures, measured cold/warm duration in `ap-south-1`, and measured maximum serialized response size (§14) must all be captured as Build Mode acceptance evidence before production use — none is invented here.

---

## 14. Response Contract (§5.12)

### 14.1 Selected response streaming approach

**Selected: the Node.js Lambda runtime's `awslambda.streamifyResponse()` handler wrapper**, invoked through the Function URL configured with `InvokeMode = RESPONSE_STREAM` (§9) — AWS's own documented mechanism for streaming Function URL responses, avoiding the rejected 6 MB buffered-response ceiling (`report1.104.md` IO-4) while requiring no additional dependency (it is a Lambda-runtime-provided global, not an npm package).

### 14.2 Exact allowlisted response envelope

Reuses the existing `ParseOutcome`/`RawImportRow`/`RecognizedFieldKey` shape (`types.ts`) verbatim, wrapped in the same discriminated envelope pattern already used internally by `parse-isolated.ts`'s `ParseWorkerResponse`:

```text
success:
  { ok: true,
    outcome: {
      rows: RawImportRow[],                 // { rowNumber, fields, hasReferenceCostColumn, referenceCostRaw }
      unrecognizedColumnNames: string[],
      additionalWorksheetsIgnored: boolean   // xlsx only
    } }

failure:
  { ok: false,
    code: ImportLimitErrorCode | "INTEGRITY_MISMATCH" | "PARSER_RUNTIME_ERROR",
    message: string }                        // one of the fixed sanitized strings from report1.105.md §10
```

`RecognizedFieldKey` remains exactly the nine-value union already locked in `types.ts` (`name`, `selling_unit`, `category`, `sku`, `barcode`, `description`, `selling_price`, `tax_treatment`, `tax_rate_percent`); unrecognized column *values* are never included, only their names at batch level (`unrecognizedColumnNames`), exactly as today.

### 14.3 Explicit prohibitions (all satisfied by construction)

The envelope above contains no AWS credential, no certificate/private-key material, no internal AWS resource identifier (ARN, bucket name, request ID), no stack trace, no raw provider error body, no arbitrary S3 metadata, no raw file bytes, no Supabase value of any kind, and no Product Truth mutation instruction — it is a pure data-transfer shape matching what `catalogImportPreview` already consumes from `parseInIsolatedWorker` today, just now delivered over the network instead of via `worker.postMessage`.

### 14.4 Response-size handling

Per `report1.104.md` IO-4: serialize only the canonical allowlisted shape above; never echo unrecognized raw cell values; apply a hard internal serialized-byte ceiling (Build Mode must set this comfortably below AWS's 200 MB streamed-response quota — the conservative architecture bound already computed in `report1.104.md` §11 is ~20,000 bounded string slots at maximum shape, materially smaller than 200 MB even pessimistically); if that internal ceiling is ever exceeded, fail closed with the fixed `PARSER_RUNTIME_ERROR` sanitized result rather than streaming a partial/oversized body. A maximum-shape acceptance fixture measuring the exact serialized size under Node 24 is required Build Mode evidence (§13.6) before production.

---

## 15. Failure Sanitization and EC-3 Ordering (§5.13)

- **Opaque to merchant/client:** every failure surfaced to the browser is one of the fixed closed categories already locked in `report1.105.md` §10 (upload too large, upload expired/retry required, upload integrity failure, unsupported/malformed file, decompression limit exceeded, parse/data-shape limit exceeded, parser timeout/runtime failure, temporary parser service unavailable, import busy/rate-limited, generic retryable failure) — never a raw AWS/S3/Lambda body, ARN, account ID, stack trace, or internal path.
- **No provider internals leak:** enforced at two layers — Lambda's own response envelope (§14) never carries them, and Smart Business's existing sanitized-error mapper (`sanitizedError()`/`logSanitized()`, `src/server-functions/catalog-import.ts`) is reused unchanged as the outer boundary for any transport-level (network/auth/timeout) failure calling Lambda.
- **Parse/validate/classify completes before privileged writes:** unchanged — §4 step 17; `validateRow`/`classifyRows` continue to run entirely inside Smart Business, after a `CONSUMED` lease, exactly as `catalogImportPreview` orchestrates today.
- **Partial Lambda/S3 failure never creates Catalog/Inventory truth:** structurally guaranteed — no code path between lease creation and lease `CONSUMED` ever calls a Catalog command or writes an import-support row; every failure branch (§16, the abuse/failure-state matrix) terminates the lease at `FAILED` and touches no Product Truth table.
- **Object cleanup and lease state transitions defined per failure class:** §16 below.
- **Retry rules are explicit and idempotent:** a merchant retry after any failure always begins a **new** preview request (new lease, new object key, new EC-2 guard acquisition) — this design defines no scenario where retrying re-uses a terminal lease's object key or state; the existing `create_catalog_product`/follow-up-command idempotency keys (BKR-1/BKR-2/SEC-IMP-5) already make the downstream commit path safe to retry once a batch/row exists, unchanged by this EIS.

---

## 16. Logging, Monitoring, and Data Minimization (§5.14)

### 16.1 Selected structured logging/metrics strategy

**Selected: Lambda's native JSON structured logging** (`AWS_LAMBDA_LOG_FORMAT=JSON`, Lambda Advanced Logging Controls) to CloudWatch Logs, plus **CloudWatch embedded metric format (EMF)** for custom bounded metrics emitted from the same log stream. Justification: both are Lambda/CloudWatch-native capabilities requiring no additional dependency, directly mirroring the existing `logSanitized()` discipline already proven in `src/server-functions/catalog-import.ts` (allowlisted event name + allowlisted identifiers + closed reason code, never a raw error object).

### 16.2 Forbidden in logs (Smart Business and Lambda, both sides)

Raw file bytes; spreadsheet rows/cells; original filename beyond a minimal sanitized display-only form (mirroring the existing `sanitizeFilename()` control-character/path-separator stripping already in `catalog-import.ts`); private keys/certificates; temporary AWS credentials; full checksums (log only a short prefix or a one-way-hashed correlation token if object-level cleanup diagnosis requires correlation, per `report1.107.md` §6.6); browser upload form secrets (the presigned POST fields themselves); raw provider error bodies; stack traces to any client-visible telemetry.

### 16.3 Minimum metrics

| Metric | Purpose |
|---|---|
| `Invocations`, `Errors`, `Duration`, `Throttles`, `ConcurrentExecutions` | Standard AWS Lambda metrics (`report1.104.md` §17) |
| memory-pressure indicator (Lambda's own `Max Memory Used` report line) | Right-sizing evidence for §13.4 |
| object-cleanup success/failure count | Detects `DeleteObject` failures requiring the backstop (§10.2) |
| lease-expiry / lease-replay-rejection count | Detects abnormal client retry/replay volume |
| EC-2 rejection count (`IMPORT_BUSY` vs `RATE_LIMITED`, internal only) | Abuse/capacity signal, never merchant-visible detail |
| cost/denial-of-wallet indicator | Invocation count × average duration × memory, tracked against the AWS Budget alert (§17) |

Normal successful previews emit no row-level log lines, only one bounded event per stage transition.

---

## 17. Deployment, Rollback, and Environment Separation (§5.15)

This section specifies the later Build/verification sequence only; it creates nothing.

1. **Non-production AWS environment first:** a separate, fully isolated non-production AWS account or a clearly namespaced non-production Lambda/S3/Roles-Anywhere trust chain, entirely distinct from any future production AWS resources.
2. **Production-equivalent Cloudflare/Lovable runtime verification:** the Roles Anywhere signing path (§7.2) and the full end-to-end sequence (§4) must be proven from an actual deployed Cloudflare Worker (not local `vite dev` emulation only), consistent with `report1.107.md` §4.6's explicit implementation-verification requirement.
3. **Test S3 bucket / test Lambda / test IAM Roles Anywhere trust chain:** entirely separate from any later production bucket/function/trust anchor; test credentials scoped identically narrowly to production credentials (§8), never broader "for convenience."
4. **No production merchant data in parser-runtime verification:** only synthetic/fixture CSV/XLSX files, including the hostile fixtures named in §18.
5. **Immutable Lambda versions; production alias promotion only after acceptance** (§9, §13.4).
6. **Rollback by alias/version** (§9) — never a source-code emergency rewrite.
7. **Revocation of test credentials/resources after evidence collection:** test end-entity certificates and any test IAM principal must be revoked/deleted once acceptance evidence is captured, not left live indefinitely.
8. **No domain cutover required for this isolated parser path** — the parser is invoked server-to-server from the existing Smart Business/Lovable/Cloudflare application; no merchant-facing DNS or domain change is implied by this architecture at any point.

---

## 18. Acceptance and Verification Matrix (§5.16)

| # | Verification item | Class |
|---|---|---|
| 1 | Roles Anywhere `CreateSession` succeeds from production-equivalent Cloudflare runtime | Infrastructure / production-equivalent runtime |
| 2 | Exact AWS4-X509 signature accepted by `CreateSession` (manual implementation, §7.2) | Security / production-equivalent runtime |
| 3 | No `aws_signing_helper` dependency present anywhere in the deployed bundle | Security |
| 4 | No credential material (private key, certificate, session credential) present in any client-visible artifact | Security |
| 5 | S3 POST exact key/size/checksum conditions enforced (wrong key, wrong length, wrong checksum each rejected) | Integration |
| 6 | Upload at exactly 5,242,880 bytes succeeds; upload at 5,242,881 bytes fails closed | Integration |
| 7 | Checksum mismatch (correct length, wrong bytes) rejected at S3 and, if reached, at Lambda | Integration / Security |
| 8 | Cross-business lease/object attack rejected (Merchant A's authenticated confirm call against Merchant B's `leaseId`) | Security |
| 9 | Expired lease rejected; consumed (terminal) lease rejected; replayed confirm on a terminal lease rejected | Security / Integration |
| 10 | Concurrent lease claim race — exactly one of two simultaneous confirm calls for the same `leaseId` proceeds to Lambda | Integration |
| 11 | Network-loss-after-object-consumption case (§5.8) resolves to `FAILED`, never a silent reparse | Integration |
| 12 | Immediate object deletion verified to occur before decompression/parse work begins | Infrastructure / Security |
| 13 | Lifecycle cleanup backstop (1-day) verified to remove an orphaned test object | Infrastructure |
| 14 | Standard Lambda one-invocation-per-execution-environment behavior verified observable through provider configuration/contract (no Managed Instances configured) | Infrastructure |
| 15 | Node 24 bundle cold-start and warm-start execution both measured | Infrastructure / production-equivalent runtime |
| 16 | Papa Parse CSV maximum-shape fixture (2,000×40, 2,000-char cells) succeeds within budget | Unit / Integration |
| 17 | ExcelJS XLSX maximum-shape fixture succeeds within budget | Unit / Integration |
| 18 | 25 MiB produced-byte decompression-bomb fixture rejected (`DECOMPRESSED_TOO_LARGE`) | Unit / Security |
| 19 | 2,001-row fixture rejected (`TOO_MANY_ROWS`) | Unit |
| 20 | 41-column fixture rejected (`TOO_MANY_COLUMNS`) | Unit |
| 21 | >2,000-character cell fixture rejected (`CELL_TOO_LONG`) | Unit |
| 22 | Parser timeout (Lambda's 15 s provider `Timeout`) terminates cleanly with sanitized failure and zero import-support/Product Truth writes | Integration / Security |
| 23 | Finite reserved concurrency (starting value 5, §13.5) throttles above the configured ceiling as expected | Infrastructure |
| 24 | EC-2 per-business concurrency/rate guard verified (one business cannot exceed one in-flight preview; rate window enforced) | Integration / Security |
| 25 | All sanitized failure categories verified against the closed list in `report1.105.md` §10 — no raw provider body ever reaches a fixture assertion of merchant-visible output | Security |
| 26 | Zero Supabase/Product Truth mutation verified before a successful `CONSUMED` lease, across every failure-class fixture in this matrix | Security / Integration |
| 27 | Exactly nineteen public Catalog commands remain unchanged after implementation (re-run the existing `pg_proc`/`pg_namespace`/`pg_roles` verification from `report1.91.md` §13) | Founder / manual evidence |
| 28 | No R2 dependency introduced anywhere in the implementation | Manual evidence |
| 29 | No full hosting migration occurred; Lovable remains the main application environment | Manual evidence |

---

## 19. Cost and Operational Guardrails (§5.17)

- **Finite Lambda reserved concurrency:** 5 (§13.5), a Phase 1 default, tunable with evidence.
- **EC-2 per-business pre-parse protection:** mandatory, unchanged (§6).
- **Short upload/lease expiry:** 300 seconds (§5.3, §10.1).
- **No provisioned concurrency by default** (§13.5).
- **S3 transient-only lifecycle:** immediate delete primary, 1-day backstop only (§10.2).
- **CloudWatch/log retention minimized to operational need:** Build Mode must set an explicit, short CloudWatch Logs retention period (for example 14–30 days) rather than the indefinite default, consistent with data-minimization (§16) — exact value is an Infrastructure Operations decision, not fixed here.
- **Alerts/metrics for unusual invocation or cost growth:** an AWS Budget/cost alert must be configured before production acceptance (`report1.104.md` §15), alongside alarms on `Throttles`, `ConcurrentExecutions`, `Errors`, and abnormal `Duration` (§16.3).

No commercial cost promise is made. Per `report1.104.md` §16/§23, monthly cost depends on pilot upload count, average file size, average duration, and response size — all unmeasured — and must be calculated from real Build Mode/pilot evidence before any cost claim is made to Mission Control or the Founder.

---

## 20. Implementation File/Resource Map (§5.18)

Planning information only. Nothing below is created or modified by this mission.

### 20.1 Repository files/modules (proposed, later Build Mode)

| Path (proposed) | Purpose |
|---|---|
| `src/server-functions/parser-lease.ts` (new) | `parserLeasePreview`/confirm/dispatch server functions — the Smart Business-side orchestration of §4 |
| `src/lib/parser-ingress/roles-anywhere.ts` (new) | Manual AWS4-X509 `CreateSession` signing (§7.2) |
| `src/lib/parser-ingress/aws-client.ts` (new) | `aws4fetch`-based S3 POST signing + Lambda Function URL invocation (§7.2) |
| `lambda/parser/handler.ts` (new, separate deployable unit, not part of the Vite/TanStack app bundle) | Lambda entry point: `HeadObject` verify → read → delete → `parse.ts`/`content-type.ts` → allowlisted response |
| `src/lib/catalog-import/parse.ts`, `content-type.ts`, `limits.ts`, `fields.ts`, `types.ts` | Reused verbatim inside the Lambda bundle (§13.1–13.2); no change required |
| `src/lib/catalog-import/parse-isolated.ts`, `parse-worker.ts` | Unchanged; not part of the Lambda dependency closure (§13.2) |

### 20.2 Supabase schema objects genuinely needed

| Object | Purpose |
|---|---|
| `parser_upload_leases` table (§5.2) | Parser Upload Lease persistence |
| `parser_preview_guards` table (§6.2) | EC-2 guard persistence |
| `acquire_parser_preview_guard`, `release_parser_preview_guard` functions (§6.5) | Atomic guard acquire/release, `SECURITY DEFINER`, not public Catalog commands |

No change to any existing Catalog/Inventory table, RLS policy, or grant.

### 20.3 AWS resources required (later, separately authorized)

Roles Anywhere Trust Anchor, Profile, and IAM role (§7); the parser-ingress S3 bucket/prefix (§10); the parser Lambda function, version, alias, and Function URL (§9); the two IAM policies in §8; CloudWatch alarms/budget (§16, §19).

### 20.4 Cloudflare/Lovable server-secret/configuration requirements

End-entity private key (PKCS8) and certificate/chain as encrypted Worker secrets (§7.1); no other new configuration surface.

### 20.5 Tests/fixtures required

Maximum-shape CSV/XLSX fixtures; decompression-bomb fixture; oversize/undersize upload fixtures; checksum-mismatch fixture; macro-enabled/encrypted/archive-disguised fixtures; hidden-worksheet fixture; external-link-reference fixture; embedded-object fixture; CSV formula-injection fixture — all listed in §18.

### 20.6 Generated types/configuration artifacts affected

Supabase generated TypeScript types (`src/integrations/supabase/types.ts`) would gain the two new table shapes once the schema objects in §20.2 are actually migrated — not affected by this specification mission itself.

---

## 21. Open Questions / STOP Conditions (§5.19)

No item in this EIS required a STOP verdict. Each item `instruction1.101.md` §5.19 names as a potential STOP condition was resolved with cited evidence:

| Potential STOP condition | Resolution |
|---|---|
| Roles Anywhere AWS4-X509 implementation path | Resolved — manual implementation, §7.2 |
| Exact lease atomicity model | Resolved — single conditional `UPDATE ... WHERE state = 'UPLOADED' RETURNING id`, §5.4 |
| EC-2 durable/shared guard mechanism | Resolved — conditional upsert on `parser_preview_guards`, §6.5 |
| Checksum enforcement compatibility with the selected S3 POST flow | Resolved and verified against current AWS documentation — exact-match `x-amz-checksum-sha256` POST-policy condition plus S3 server-side verification, §11 |
| Lambda response capacity/streaming contract | Resolved — `awslambda.streamifyResponse()` via `InvokeMode = RESPONSE_STREAM`, §14 |
| A hidden requirement adding a twentieth Catalog command, changing Product Truth, weakening Owner authority, requiring R2, requiring full hosting migration, or retaining raw merchant files beyond the transient boundary | None found. This EIS adds zero Catalog commands, makes zero Product Truth changes, preserves Owner-only Phase 1 import authority exactly as documented in `report1.96.md`/`report1.102.md`, introduces no R2 usage, proposes no hosting migration, and the raw object is deleted before parsing begins in every success path (§12.1) with only the AWS-minimum 1-day Lifecycle backstop for abandonment (§10.2) |

The two items flagged as genuinely evidence-limited (EC-2 rate-window threshold, §6.4; Lambda reserved-concurrency starting value, §13.5) are not architecture blockers — they are explicitly classified, with justified safe defaults, as operational parameters requiring specialist confirmation before Build Lock, exactly as `instruction1.101.md` §6 permits.

---

## 22. Required Engineering Decisions — Summary

| Decision | Selected mechanism | Section |
|---|---|---|
| Parser Upload Lease physical persistence | Dedicated Supabase Postgres table, service-role-only | §5.1 |
| EC-2 physical persistence/atomic guard mechanism | Dedicated Supabase Postgres table + conditional upsert | §6.1, §6.5 |
| Roles Anywhere signing implementation approach | Manual AWS4-X509 for `CreateSession`; `aws4fetch` for downstream SigV4 | §7.2 |
| Lambda packaging/bundling approach | esbuild, single-file Node 24 ZIP bundle | §13.1 |
| Lambda response streaming approach | `awslambda.streamifyResponse()` via `InvokeMode = RESPONSE_STREAM` | §14.1 |
| Structured logging/metrics strategy | Native Lambda JSON logging + CloudWatch EMF | §16.1 |
| S3 lifecycle backstop duration | 1 day (AWS's minimum expressible granularity) | §10.2 |
| Finite Lambda reserved concurrency starting value | 5 (justified Phase 1 default, tunable) | §13.5 |
| Lease and presigned-upload expiry | 300 seconds (5 minutes, the already-locked ceiling) | §5.3, §10.1 |

No menu of equally possible implementations was left for any load-bearing security or concurrency behavior.

---

## 23. Explicit Boundary Confirmation

This mission performed only:

- read-only repository review (instructions, reports, and the actual `src/lib/catalog-import/*`/`src/server-functions/catalog-import.ts` source);
- read-only authoritative AWS and Cloudflare provider documentation review;
- engineering specification work in Plan Mode;
- creation of `communication/live/report1.108.md` on a protected mission branch.

It did **not**:

- write application code, Lambda code, or any other source file;
- add npm dependencies;
- create migrations or SQL;
- mutate Supabase;
- change RLS or grants;
- create any AWS account, IAM role, trust anchor, profile, policy, certificate, S3 bucket, Lambda function, alias, Function URL, CloudWatch resource, or budget;
- modify Lovable or Cloudflare configuration;
- add server secrets;
- publish or deploy anything;
- use production merchant data;
- change Product Truth;
- change the completed Founder Workflow baseline;
- expand Manager/Employee permissions;
- add a twentieth Catalog command;
- replace AWS Lambda with another provider;
- introduce R2 as parser transport;
- migrate Smart Business hosting away from Lovable;
- redesign Papa Parse/ExcelJS for preference;
- weaken any locked parser limit;
- authorize Build Lock, Build Mode, production migration, or production use;
- declare SB-P-1.11 complete.

---

## 24. Final Verdict

`LAMBDA PARSER ENGINEERING IMPLEMENTATION SPECIFICATION — READY FOR SPECIALIST REVIEW`

Every required section of `instruction1.101.md` §5 is specified with an exact, evidence-based, standalone Phase 1 mechanism. Every required engineering decision in §6 is resolved to one choice, not a menu, with the two evidence-limited operational parameters explicitly classified and given justified safe defaults rather than invented certainty. Every locked boundary in `instruction1.101.md` — Owner-only Phase 1 import authority, exactly nineteen public Catalog commands, D-047/D-068, BKR-1 through BKR-5, EC-2, EC-3, AWS IAM Roles Anywhere, the Parser Upload Lease, transient-S3-only transport, standard Lambda default compute, `ap-south-1`, `nodejs24.x`, Papa Parse, ExcelJS, `node:zlib`, and every locked hard limit — is preserved unweakened. This verdict does not authorize implementation, Build Lock, Build Mode, deployment, or production authority.
