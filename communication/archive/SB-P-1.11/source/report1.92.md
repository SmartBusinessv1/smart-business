# SMART BUSINESS — CLAUDE CODE COMPLETION REPORT

## SB-P-1.11-GC-1 — Parser Isolation Architecture Reconciliation

**Report ID:** report1.92
**Mission:** SB-P-1.11-GC-1 — Parser Isolation Architecture Reconciliation
**Authorized By:** `communication/live/instruction1.85.md`
**Repository:** `SmartBusinessv1/smart-business`
**Mission type:** Plan mode / architecture only — no implementation authority
**Production migration authority:** NONE
**Implementation authority:** NONE

**Mission Verdict: `PARSER ISOLATION ARCHITECTURE READY FOR BUILD-GATE REVIEW`**

This mission evaluated six technically distinct candidate replacements for the non-viable `node:worker_threads` mechanism, mapped each against ISO-SEC-1 through ISO-SEC-8, and selected **In-Process Bounded Parsing** — removing the (already-nonfunctional) worker layer entirely and relying on the existing, already-locked structural pre-validation limits together with Cloudflare Workers' own platform-enforced per-request CPU-time ceiling as the genuine containment mechanism — as the smallest architecture that satisfies the Selection Standard. No code was changed; no dependency was changed; no Supabase, Lovable, or production action occurred.

---

## 1. Exact `main` SHA Reviewed

`d729bd83c3a8d97ef37b21f5c78f6fe0e3548a5c` (`Authorize SB-P-1.11 GC-1 parser isolation architecture reconciliation (#202)`), confirmed via `git fetch origin main` immediately before beginning work to be identical to `origin/main`'s head at that time. This is newer than instruction1.85.md §2's stated authorization baseline (`34c1d43d9e635a24442caadf6a7254d090bd677b`); the only intervening commit is the merge of instruction1.85.md and report1.91.md itself, which does not change this mission's boundary.

Required reading completed in full: `instruction1.84.md`, `report1.86.md`, `report1.87.md`, `report1.90.md`, `report1.91.md`, the current `src/lib/catalog-import/**` implementation and `tests/catalog-import/**` suite, `src/server-functions/catalog-import.ts`, `src/integrations/supabase/auth-middleware.ts` / `client.server.ts`, `vite.config.ts`, `package.json`, and the current `.output/server` build/deployment artifact (regenerated locally via `npx vite build` for direct inspection; not deployed anywhere).

---

## 2. ARC-1 — Actual Production Runtime Contract

| Claim | Classification | Source |
|---|---|---|
| The deployed target is a Cloudflare Workers "cloudflare-module" build (`compatibility_flags: ["nodejs_compat"]`), forced by `@lovable.dev/vite-tanstack-config`'s Nitro integration inside a Lovable build | **Verified repository fact** | `.output/server/wrangler.json` (regenerated locally this mission from current `main`, byte-identical in shape to the version inspected in report1.91.md §3.1/§5); `node_modules/@lovable.dev/vite-tanstack-config/dist/index.d.ts`: *"Inside a Lovable build the preset and output layout are forced to Cloudflare"* |
| `node:worker_threads.Worker` construction does not function on this exact deployed model (file-based hangs; eval-based throws `"The Worker method is not implemented"`) | **Verified build/runtime evidence** | report1.91.md §3.2, reproduced directly this mission's predecessor via `wrangler dev` against the real `.output/server` artifact with the exact generated `wrangler.json` |
| `node:worker_threads` under `nodejs_compat` is Cloudflare's own documented non-functional **stub**, auto-enabled for `compatibility_date >= 2026-03-17` (this project's `compatibility_date` is `2026-08-11`, so the stub — not a working implementation — is what is present) | **Official platform documentation** | report1.91.md §3.2's cited web research; independently re-confirmed this mission (see §3 candidate evaluation below) |
| Cloudflare Workers V8 isolates each get a real, **platform-enforced per-request CPU-time ceiling**: 50 ms on the Workers Free plan; 30 s default on Workers Paid, configurable up to 300,000 ms (5 minutes) via `limits.cpu_ms`; this is *actual measured CPU/compute time*, explicitly **excluding** time spent waiting on network I/O | **Official platform documentation** | Cloudflare Developers changelog, *"Run Workers for up to 5 minutes of CPU-time"* (`developers.cloudflare.com/changelog/2025-03-25-higher-cpu-limits`); corroborating limits summary consistent across current Cloudflare Workers documentation |
| Cloudflare Workers isolates are lightweight V8 sandboxes (not VMs/containers); "in practice most isolates handle one request at a time," and only *running* instances count against the (very high, 50,000 on Workers Paid) concurrency ceiling — waiting/sleeping instances do not | **Official platform documentation, qualified** | Same research pass. Cloudflare's own phrasing ("in practice", "most") is not an absolute guarantee that two different tenants' concurrent requests can never share one isolate; this is a materially favorable mitigating property, not a proven hard isolation boundary, and is treated as such throughout this report |
| The actual Cloudflare Workers **plan tier** (Free vs. Paid) and any explicit `limits.cpu_ms` override currently configured for the authorized Smart Business Lovable project | **Unresolved assumption** | No `limits` key is present in the locally-regenerated `.output/server/wrangler.json`, meaning the deployed Worker runs under whichever ceiling the account's plan defaults to. This repository cannot determine Lovable's account plan tier. Given a full TanStack Start SSR render is very unlikely to complete inside a 50 ms budget, Workers Paid is the more plausible tier for this project generally — but this is **engineering inference, not verified fact**, and is called out explicitly in §9 (production verification path) as a mandatory pre-implementation confirmation, independent of which architecture is selected |
| Every non-worker security mechanism already in place (`node:zlib` produced-byte decompression containment, structural row/column/cell/file-size caps, sanitized logging/error boundary, server-only service-role client boundary, caller-JWT Catalog authority, RLS) is **orthogonal to the worker/isolation question** — none of it was implemented using, or depends on, `node:worker_threads` | **Verified repository fact** | Direct reading of `src/lib/catalog-import/content-type.ts`, `limits.ts`, `src/server-functions/catalog-import.ts`, `src/integrations/supabase/client.server.ts`. Only `parse-isolated.ts`/`parse-worker.ts` reference `node:worker_threads` at all |

**Conclusion for ARC-1:** the production runtime is a genuine Cloudflare Workers V8 isolate with `nodejs_compat`, on which `node:worker_threads` is present only as an inert, non-functional stub. The one platform capability that *is* real, documented, and enforced independent of any application code is the per-request CPU-time ceiling. Any replacement architecture must be judged against this actual contract, not against a traditional single-process Node.js mental model.

---

## 3. ARC-2 — Candidate Architectures

Six technically distinct candidates were evaluated. Each is scored against the required attribute list.

### Candidate A — In-Process Bounded Parsing (no separate execution context)

Remove the worker layer entirely. `catalogImportPreview`'s handler calls `parseCsv`/`parseXlsx` directly (exactly the functions `parse-worker.ts` already calls internally today — no parsing logic changes), inside the same request-handling isolate.

| Attribute | Value |
|---|---|
| Execution boundary | Same isolate, same request context. No separate thread/process/isolate spawned by application code. |
| Cancellation/budget mechanism | Two layers: (1) existing pre-parse structural caps (5 MB compressed / 25 MB real-produced-byte decompressed / 2,000 rows / 40 columns / 2,000 chars per cell — all already locked, `limits.ts`) bound the *maximum possible work* before parsing is even attempted; (2) Cloudflare's own platform-enforced per-request CPU-time ceiling is the genuine, involuntary, application-code-independent backstop — see ARC-7 (§8) for why this is real containment, not cosmetic. |
| Hostile XLSX containment | Unchanged — `content-type.ts`'s real produced-byte `inflateRawSync(..., { maxOutputLength })` enforcement is untouched and was never worker-dependent. |
| Trust boundary | Unchanged. Caller-JWT client for all Catalog reads/writes; dynamically-imported service-role client confined to the two import-support tables, exactly as today. |
| Secret exposure surface | Reduced relative to today's design (no worker message-passing channel exists at all to reason about). |
| Data movement | Unchanged: uploaded bytes live only in the request's in-memory `Buffer`/`ArrayBuffer`; never persisted, never leave the single request's memory. |
| Deployment/runtime dependency | None new. |
| Operational complexity | Lowest of all candidates — this is a deletion, not an addition. |
| Cost implications | None directly; may require confirming/raising the Workers plan's CPU-time ceiling (§9), which is a configuration concern, not a new paid infrastructure *class*. |
| Failure/retry behavior | Unchanged sanitized `ImportLimitError` taxonomy; a platform-enforced CPU-time kill surfaces to the client as an unhandled Worker exception, which Nitro's existing error boundary already converts to the same generic sanitized error page/response used for any other unexpected server error (SEC-IMP-7's sanitization boundary is unaffected because it operates on the *response*, not on how the isolate terminates). |
| Auditability | Unchanged — no new component to audit. |
| Effect on current import workflow | None. Preview remains synchronous; merchant-visible behavior is identical. |
| Evidence needed to prove production compatibility | (a) confirm the account's actual CPU-time ceiling and, if necessary, raise it via `limits.cpu_ms`; (b) a real `wrangler dev`/production-equivalent request completing a normal CSV/XLSX preview without error, exactly as CORR-2 required in the prior mission — but this time actually exercising the real parse to completion rather than hitting the worker defect. |

### Candidate B — Self-Loopback HTTP Subrequest with `AbortController` Timeout

The preview handler issues an internal `fetch()` subrequest to a second, dedicated server route that performs the parse, with the caller applying `AbortController`-based timeout.

| Attribute | Value |
|---|---|
| Execution boundary | A separate Worker invocation/request-response cycle, but not provably a separate isolate — Cloudflare's own isolate-reuse behavior for same-origin subrequests within one edge location during a burst is not something this repository can verify. |
| Cancellation/budget mechanism | **Not genuine** — `AbortController`/timeout only stops the *caller* from waiting; per instruction1.85.md §5 ARC-7, this is explicitly disallowed as sole proof of termination. The callee subrequest, if it keeps running, is still only bounded by the same platform CPU-time ceiling Candidate A already relies on directly — meaning this candidate needs the *exact same* backstop as Candidate A, plus an abort layer that adds no additional genuine containment. |
| Hostile XLSX containment | Same as Candidate A (unchanged `content-type.ts`), just reached through an extra HTTP hop. |
| Trust boundary | Requires the new internal route to reject any caller other than the app's own server-side fetch (shared-secret header, loopback-only binding, or equivalent) — a new, narrow but real attack surface that does not exist today. |
| Secret exposure surface | New internal-auth secret needed to prevent the route being invoked directly by an external caller; must never be merchant-visible. |
| Data movement | File bytes now cross an additional internal HTTP request/response boundary (still same isolate/edge location, still transient, still in-memory only). |
| Deployment/runtime dependency | None new, but adds a new route (`src/routes/api/...` or equivalent) that must be excluded from normal navigation and protected. |
| Operational complexity | Higher than Candidate A for no proven benefit — an extra network hop, an extra auth boundary, and identical underlying containment. |
| Cost implications | Negligible (Workers subrequests are billed but not materially so at this volume). |
| Failure/retry behavior | Adds a new failure mode class (subrequest network failure vs. parse failure) that must be disambiguated and sanitized identically to today's taxonomy. |
| Auditability | New route needs its own audit/log entries. |
| Effect on current import workflow | None merchant-visible, if implemented correctly. |
| Evidence needed | Same as Candidate A, plus proof the internal route cannot be reached by anything other than the app itself. |

### Candidate C — Client-Side (Browser) Parsing Before Upload

`papaparse`/an XLSX-capable parser move into the client bundle; the browser parses the file and sends structured, already-classified row data (not raw file bytes) to the server. The server never parses an untrusted file at all.

| Attribute | Value |
|---|---|
| Execution boundary | The merchant's own browser tab — one V8 isolate per tab, inherently isolated from the server and from every other tenant. |
| Cancellation/budget mechanism | Not a server concern at all for the parse step itself; a hostile file only degrades the *uploading merchant's own* browser session, never a shared server resource. This is a materially different, and for the shared-infrastructure DoS concern ISO-SEC-1 was written for, a *stronger* containment story than any server-side mechanism — but it does not remove the server's obligation to independently re-validate whatever structured data it receives (a malicious/modified client could send fabricated row data directly, bypassing client-side validation entirely). |
| Hostile XLSX containment | Server-side ZIP/decompression containment (SEC-IMP-2) becomes irrelevant (the server never receives a ZIP/XLSX file); an equivalent client-side guard is still worth keeping for UX, but is not a server security boundary. Macro/content-type rejection would need a client-side equivalent for UX parity; it stops being a *server* security control either way. |
| Trust boundary | **Materially changes**: the server must fully re-validate every field of every row (name, price, category, tax fields, reference cost) using the exact same rules `validateRow`/governed commands already apply, treating client-submitted "parsed" data with the same skepticism it treats any other user input — feasible, since server-side field validation and the governed Catalog commands' own rejection paths already exist independent of file parsing, but requires an explicit design/security review, not a drop-in change. |
| Secret exposure surface | Unchanged; still no service-role/secret material touches the client. |
| Data movement | Raw file bytes never leave the merchant's own device. Structured row JSON (already today's `parsed_snapshot` shape) is what reaches the server — smaller, more visible payload, arguably an auditability improvement. |
| Deployment/runtime dependency | `papaparse` and an XLSX-capable library move into the **client bundle** — a deliberate, disclosed change (unlike an accidental leak), but a real bundle-size cost: `exceljs` in particular is large even minified, so a lighter browser-oriented XLSX reader (e.g. `xlsx`/`sheetjs`-family or `exceljs` itself if size-acceptable) would need to be selected and justified. |
| Operational complexity | Meaningful: new client-side error/rejection UX mirroring today's `ImportLimitError` taxonomy; new server-side re-validation rigor; careful review that no validation the server used to get "for free" via controlled file parsing is silently dropped. |
| Cost implications | None (bundle size is a UX cost, not a monetary one). |
| Failure/retry behavior | Client-side failures are immediate and local (no round trip needed to reject a malformed file) — arguably better UX; server-side re-validation failures use the existing sanitized taxonomy unchanged. |
| Auditability | Improves in one sense (server logs structured data, never raw file content, so there is nothing sensitive to have logged in the first place); the file itself is never available server-side for any future audit need. |
| Effect on current import workflow | The CSV/XLSX upload UI is unchanged; the *implementation* behind it changes meaningfully. This satisfies ARC-4's literal requirement ("confirm whether each candidate changes merchant-visible behavior") but is a larger, riskier change than a runtime-primitive swap, and instruction1.85.md §14 frames this mission as reconciling one invalid primitive, not opening a design workstream. |
| Evidence needed | A full client-bundle security review (Security & Permissions Architecture, not this mission) confirming server-side re-validation is airtight before this could be considered production-ready. |

### Candidate D — Cloudflare Queues (Async Producer/Consumer)

The preview handler enqueues the raw file (or a short-lived reference to it); a Queue consumer Worker performs the parse asynchronously and writes results the merchant then polls or is notified for.

| Attribute | Value |
|---|---|
| Execution boundary | A genuinely separate Worker invocation type (Queue consumer), with its own resource limits. |
| Cancellation/budget mechanism | Consumer invocations are still bounded by the same class of platform CPU-time ceiling as any other Worker invocation — no fundamentally different containment mechanism than Candidate A, just relocated to an async context. |
| Hostile XLSX containment | Same underlying `content-type.ts` logic, unchanged. |
| Trust boundary | Unchanged in principle, but the consumer needs its own credentialed path to write import results, and a durable job-status record becomes necessary. |
| Secret exposure surface | New binding/credential surface for the Queue itself. |
| Data movement | File bytes (or a reference to them) must persist somewhere between producer and consumer — Queues messages have size limits unsuitable for a raw 5 MB file, so this would require an intermediate object-storage step (e.g. R2), introducing a **new retention surface** for raw file bytes that does not exist today, directly in tension with ARC-6's *"raw spreadsheet data must remain transient unless a separately approved architecture explicitly requires storage"* and *"no silent new retention surface."* |
| Deployment/runtime dependency | **New infrastructure class**: Cloudflare Queues is a distinct product/binding not currently provisioned for this project. |
| Operational complexity | Materially higher: message schema, consumer deployment, retry/dead-letter handling, job-status schema/table, polling or notification UX. |
| Cost implications | New line-item Cloudflare product; requires Founder/Mission Control cost approval per instruction1.85.md §13 Stop Rules. |
| Failure/retry behavior | Needs its own retry/backoff/dead-letter design distinct from today's `catalog_import_batches`/`catalog_import_rows` claim model. |
| Auditability | New surface to audit (queue depth, consumer failures, job-status transitions). |
| Effect on current import workflow | **Changes it**: upload → immediate synchronous preview becomes upload → wait/poll for asynchronous readiness. This is exactly the kind of change ARC-4 warns against turning a runtime correction into ("Avoid turning a runtime correction into a new merchant workflow"). |
| Evidence needed | Full infra provisioning, a new job-status schema, and Founder-level cost/product sign-off before any evidence could even be gathered. |

### Candidate E — Durable Objects for Isolated Parse Execution

A Durable Object instance is used purely to obtain a separate execution context per parse request.

| Attribute | Value |
|---|---|
| Execution boundary | A DO does run in its own execution context, but DOs are a *stateful, single-instance-per-ID coordination* primitive (built for things like real-time coordination, rate limiting, or WebSocket hubs), not a stateless one-shot compute primitive. |
| Cancellation/budget mechanism | Same underlying platform CPU-time ceiling as every other Workers primitive — no additional genuine containment over Candidate A. |
| Hostile XLSX containment | Unchanged. |
| Trust boundary | Unchanged, but a DO namespace/binding is a new component to reason about. |
| Secret exposure surface | New binding surface. |
| Data movement | Still transient, in-memory, but now routed through an additional RPC hop to the DO. |
| Deployment/runtime dependency | **New infrastructure class**: Durable Objects require their own binding/namespace, not currently provisioned. |
| Operational complexity | High relative to the benefit: DOs are architecturally mismatched to a one-shot, stateless parse job — there is no state to coordinate across calls. |
| Cost implications | New product surface; DOs bill differently (duration + requests) than plain Workers. |
| Failure/retry behavior | No inherent advantage over Candidate A; adds a new component that can itself fail. |
| Auditability | New surface to audit. |
| Effect on current import workflow | None merchant-visible if done correctly, but for no proven containment benefit. |
| Evidence needed | Would need to demonstrate a genuine isolation benefit over Candidate A to justify the added complexity; this mission found none. |

### Candidate F — External Dedicated Parsing Microservice

A small Node.js/Deno service outside Cloudflare Workers (a real OS process, real threads available) performs parsing; the Worker calls it over HTTPS.

| Attribute | Value |
|---|---|
| Execution boundary | A genuinely separate OS process/host — the only candidate offering *true* OS-level preemptive thread/process isolation, matching the original `worker_threads` design intent exactly. |
| Cancellation/budget mechanism | Real (a real process can be killed by its own host's own process-management primitives, unlike anything available inside a Workers isolate). |
| Hostile XLSX containment | Same logic, portable to any Node host. |
| Trust boundary | New network boundary: inter-service authentication, TLS, and the service itself becomes a new attack surface requiring its own hardening, patching, and monitoring. |
| Secret exposure surface | A new shared secret (or mTLS) for Worker-to-service authentication must be introduced and protected. |
| Data movement | File bytes cross the public internet (or a private network path) to a third-party-hosted service — a materially different data-residency posture than "never leaves the request." |
| Deployment/runtime dependency | **New infrastructure class entirely**: new hosting account, new deployment pipeline, new operational surface (uptime, scaling, patching), outside Cloudflare's platform altogether. |
| Operational complexity | Highest of all candidates. |
| Cost implications | New recurring hosting cost; Founder/Mission Control product and cost approval required. |
| Failure/retry behavior | New class of failure (service unreachable, network partition) requiring its own handling. |
| Auditability | New service, new logs, new on-call surface. |
| Effect on current import workflow | Could remain synchronous from the merchant's perspective if latency is acceptable, but is a disproportionate architecture for the problem. |
| Evidence needed | Full new-vendor/new-infrastructure evaluation — squarely outside this mission's bounded scope and instruction1.85.md §13's Stop Rules ("a new infrastructure class that needs Founder/Mission Control product or cost approval"). |

---

## 4. ARC-3 — ISO-SEC-1 Through ISO-SEC-8 Mapping

| ISO-SEC | A — In-Process | B — Subrequest | C — Client-Side | D — Queues | E — Durable Objects | F — External Service |
|---|---|---|---|---|---|---|
| **1** Untrusted parser containment, meaningful boundary | **Satisfied** — platform CPU-time ceiling + existing structural caps; isolate-per-request model limits blast radius to the offending request in the common case | Satisfied only via the same mechanism as A; the extra hop adds no boundary | **Satisfied, strongest form** — hostile work never reaches shared server infrastructure at all | Satisfied via same underlying ceiling as A, plus process isolation from the request path | Same as A, no added benefit | **Satisfied, strongest form** — true OS-level isolation |
| **2** Enforceable wall-clock/platform-enforced compute boundary | **Satisfied** — explicitly the platform-enforced form ISO-SEC-2's own text allows | Not satisfied by the subrequest/abort layer itself; falls back to A's mechanism | N/A server-side (parsing isn't server work); server-side re-validation is cheap/bounded by construction | Satisfied via platform ceiling, relocated to consumer context | Satisfied via platform ceiling, no added benefit | Satisfied via real process control |
| **3** Produced-byte containment | Unchanged, satisfied | Unchanged, satisfied | Requires a client-side equivalent for UX; not a server boundary any more | Unchanged, satisfied | Unchanged, satisfied | Unchanged, satisfied |
| **4** Sanitized failure boundary | Unchanged, satisfied — a platform CPU-time kill surfaces through Nitro's existing generic error boundary | Unchanged, satisfied, plus a new failure class to sanitize | Requires new client-side sanitized error taxonomy design | Unchanged server-side; new job-status failure states need sanitized surfacing | Unchanged, satisfied | New network-failure class to sanitize |
| **5** Secret isolation | Unchanged, satisfied — no new channel | Needs a new internal-auth secret, itself must stay isolated | Unchanged, satisfied | New Queue binding/credential surface | New DO binding surface | New inter-service secret/mTLS surface |
| **6** Authority separation | Unchanged, satisfied | Unchanged, satisfied | Unchanged, satisfied — parsing was never an authority source in any candidate | Unchanged, satisfied | Unchanged, satisfied | Unchanged, satisfied |
| **7** Tenant/data safety, existing import integrity | Unchanged, satisfied — zero schema/logic change to claim ordering, idempotency, follow-up state, hard-delete protection | Unchanged, satisfied | Requires re-verifying every existing integrity rule against the new client-submitted-row trust boundary — real work, not automatic | Requires new job-status schema — a change ISO-SEC-7 requires separate Mission Control authorization for | Unchanged, satisfied | Unchanged, satisfied |
| **8** Exactly 19 Catalog commands, no Product Truth change | Unchanged, satisfied | Unchanged, satisfied | Unchanged, satisfied | Unchanged, satisfied | Unchanged, satisfied | Unchanged, satisfied |

Only Candidates A, B, E, and F satisfy every ISO-SEC outcome **without requiring a new Mission Control authorization** for something beyond this mission's scope. Candidate D requires new schema authorization (ISO-SEC-7) and a new retention surface (ARC-6) that conflicts with today's transient-data guarantee. Candidate C is fully satisfiable but requires new, separately-scoped validation and bundle-security work before it could be marked satisfied, not because it is unsafe, but because "satisfied" cannot be claimed without that follow-on review.

---

## 5. ARC-4 — Product and UX Impact

Only Candidate D changes merchant-visible behavior (synchronous preview becomes asynchronous). Candidates A, B, C, E, and F all preserve the exact approved Phase 1 experience: CSV/XLSX upload, valid rows save, invalid rows quarantined, no silent overwrite, deterministic duplicate/correction handling, Owner-only fail-closed staff boundary — none of this mission's candidates touch `validate.ts`, `classify.ts`, `idempotency.ts`, or the commit claim/retry logic in any way.

---

## 6. ARC-5 — Infrastructure Expansion and Classification

| Candidate | New infrastructure class? | Classification |
|---|---|---|
| **A — In-Process Bounded Parsing** | No (may need a plan-tier/CPU-limit *configuration* confirmation, not a new product) | **Build Now** |
| **B — Self-Loopback Subrequest** | No new product, but a new internal route/auth surface for no proven benefit over A | **Reject** (for Phase 1 — added complexity without added genuine containment) |
| **C — Client-Side Parsing** | No new product; client bundle composition changes | **Build Later** — legitimate, worth real design/security investment if in-process parsing (A) ever proves insufficient at larger scale, but out of proportion to "smallest correction" today |
| **D — Cloudflare Queues** | Yes (Queues + likely R2 for interim file storage) | **Reject** for Phase 1 / **Build Later or Separate Product** if an intentionally-async bulk-import experience is ever separately proposed and product-approved |
| **E — Durable Objects** | Yes (DO namespace/binding) | **Reject** — infra cost disproportionate to a benefit this mission found no evidence for |
| **F — External Microservice** | Yes, entirely new hosting/operational surface | **Reject** for Phase 1 / **Separate Product** if in-process parsing is later proven insufficient at a scale no Workers-native option can satisfy |

**Selected for Build Now: Candidate A — In-Process Bounded Parsing.** It is the only candidate that is simultaneously infrastructure-neutral, fully ISO-SEC-satisfying without new authorization, and strictly smaller than the mechanism it replaces.

---

## 7. ARC-6 — Data Residency and Privacy

Uploaded file bytes exist only as an in-memory `ArrayBuffer`/`Buffer` for the lifetime of the single `catalogImportPreview` request, in every candidate except D (which requires an interim storage layer) and F (which sends bytes to a third-party-hosted process). Under Candidate A, this is **unchanged from today's design** — the file is never written to disk, Supabase Storage, or any other persistence layer; only the already-approved structured `parsed_snapshot` JSON (never raw file content) is persisted to `catalog_import_rows`, exactly as today. No new retention surface is introduced.

---

## 8. ARC-7 — Cancellation Semantics (Proof, Not Assertion)

Instruction1.85.md §5 ARC-7 explicitly forbids relying on `Promise.race`, request abortion, or response timeout alone as proof of termination. Candidate A's containment argument does not rest on any of those:

1. **There is no separate execution to "stop."** Because parsing runs synchronously in the same request-handling context that will produce the HTTP response, there is no detached background computation that could keep consuming resources after the caller "gives up" — the request handler simply does not return until parsing completes or the isolate itself is terminated. This is a structurally different (and simpler) situation than the worker model, which required trusting that `worker.terminate()` genuinely stopped a *separate* thread — a trust that report1.91.md proved was misplaced on this platform.
2. **The bound on how much work can be requested is enforced before parsing begins**, not after: `verifyCsvStructure`/`verifyXlsxStructure` and `enforceRealDecompressedSize` (unchanged, already-locked SEC-IMP-2 logic) reject oversized/hostile input using real produced-byte measurement, and row/column caps are checked against the parsed header before the row-processing loop can run unbounded. This is a genuine upper bound on the *shape* of work, established by measurement in this mission: parsing a synthetic CSV at the exact locked structural ceiling (2,000 rows × 40 columns) measured **~30 ms of CPU time**; the equivalent XLSX (same row/column ceiling) measured **~1,172 ms of CPU time** (both measured via `process.cpuUsage()` in Node against the actual, unmodified `parseCsv`/`parseXlsx` functions — see caveats below).
3. **The bound on what happens if that structural reasoning is ever wrong** (an adversarial input shape this mission did not anticipate, e.g. a pathological internal XLSX structure that is expensive to parse despite being small once decompressed) **is Cloudflare's own platform-enforced CPU-time ceiling** — a limit enforced by the Workers runtime itself, external to and independent of the application's own code, exactly the *"platform-enforced compute boundary"* ISO-SEC-2's own text names as an acceptable form of enforcement. If actual CPU consumption exceeds the configured ceiling, the Workers runtime terminates the isolate outright; this is not a `Promise.race`, not an abort, and not something the application requests — it is an involuntary platform action.

**Evidence caveats, stated per instruction1.85.md §9's discipline:** the ~30 ms / ~1,172 ms measurements are an **engineering inference from local measurement** (`process.cpuUsage()` on the author's development machine, single run, against the real unmodified parser code, not measured inside an actual Workers/workerd isolate). They are not a verified production fact. They are offered as strong evidence that legitimate worst-case-at-cap parsing is comfortably bounded (well under even a conservative CPU-time ceiling), not as proof of the exact number Cloudflare's runtime would measure. §9 below defines the exact follow-up evidence needed to convert this from inference to verified fact.

---

## 9. ARC-8 — Production Verification Path (for the Selected Architecture)

Bounded evidence Mission Control should require after implementation, before treating Candidate A as production-proven:

1. **Confirm the actual configured/effective CPU-time ceiling** for the authorized Smart Business Lovable project's Cloudflare Workers deployment (plan tier, and whether `limits.cpu_ms` is set in the generated Wrangler configuration). This is Infrastructure Operations' read-only territory, not Claude Code's.
2. **A real `wrangler dev` (or equivalent production-artifact) run** — as already established as the correct local proxy tool in report1.91.md — executing a normal small CSV *and* a structural-ceiling-sized CSV/XLSX through the corrected (worker-free) `catalogImportPreview` path end-to-end, confirming the response completes successfully, not merely that it fails fast or hangs.
3. **A bounded, non-public, non-production-mutating runtime check on the actual authorized Lovable deployment target** (not another public probe — instruction1.85.md §10 forbids that within *this* mission, and any future one would need its own narrow authorization exactly as instruction1.83.md granted for the prior probe), confirming the same normal and structural-ceiling requests succeed there specifically, since local `wrangler dev` cannot fully replicate Cloudflare's global edge scheduling/isolate-reuse behavior.
4. **No claim of production readiness before both (2) and (3) return positive evidence.**

---

## 10. ARC-9 — Rollback and Failure Safety

Candidate A fails exactly as safely as today's design, and in one respect more simply: if parsing fails for any reason (structural rejection, malformed file, or an involuntary platform CPU-time termination), no `catalog_import_batches`/`catalog_import_rows` write has occurred yet at that point in the existing handler (bookkeeping INSERTs happen only *after* `parseInIsolatedWorker`'s — under Candidate A, the direct `parseCsv`/`parseXlsx` call's — successful return, per the current, unchanged code in `catalogImportPreview`). A platform-enforced kill therefore leaves **zero partial state**: no batch row, no import row, no Catalog mutation of any kind, identical to how a synchronous `ImportLimitError` rejection behaves today. There is no authority escalation risk because Candidate A introduces no new privileged code path — it is strictly a deletion of the (non-functional) worker indirection around code that already exists and already runs in-process inside the worker today.

---

## 11. ARC-10 — Expected Repository Impact (Planning Only — Not Implemented This Mission)

For a future, separately-authorized Build Mode instruction implementing Candidate A:

**Files expected to change:**
- `src/server-functions/catalog-import.ts` — replace the `await parseInIsolatedWorker(buffer, fileKind, IMPORT_LIMITS.maxParseMs)` call (currently line 267) with a direct `await (fileKind === "csv" ? parseCsv(buffer) : parseXlsx(buffer))` call, preserving the exact same `try { ... } catch (err) { if (err instanceof ImportLimitError) ... }` structure already present.

**Files expected to be removed:**
- `src/lib/catalog-import/parse-isolated.ts`
- `src/lib/catalog-import/parse-worker.ts`

**Files expected to be unaffected (parsing logic itself, orthogonal to this change):**
- `src/lib/catalog-import/parse.ts`, `content-type.ts`, `limits.ts`, `fields.ts`, `validate.ts`, `classify.ts`, `idempotency.ts`

**Tests expected to change:**
- `tests/catalog-import/parse-isolated.test.ts` — removed (it specifically tests `worker.terminate()` semantics that no longer apply); its worker-termination-proof content has no direct replacement under Candidate A, since there is no longer a separate worker to terminate — the replacement evidence is the CPU-time-ceiling verification path in §9, not a unit test.
- `tests/catalog-import/real-http.test.ts` — unaffected in structure; its assertions about successful/rejected preview outcomes continue to apply against the direct-call code path.
- A new, small direct-call unit test replacing worker-specific coverage would assert that `parseCsv`/`parseXlsx` are reachable and return the same structured outcomes as today, without a worker in the call stack.

**Dependency changes:** none required by Candidate A itself (this mission changed no dependency, and Candidate A needs none).

**Infrastructure/config changes:** possible `limits.cpu_ms` addition to the generated Wrangler configuration, contingent entirely on §9 item 1's plan-tier confirmation — a configuration value, not a new infrastructure product.

**Nothing above was changed during this mission.** `git status` on this branch shows no content difference from `main` other than this report (a small number of files show as locally modified due to pre-existing CRLF/LF checkout-normalization noise in this Windows environment, with zero actual content diff — the same, already-documented artifact noted in report1.91.md §2 and prior missions).

---

## 12. Selection Standard Check (instruction1.85.md §6)

| Condition | Candidate A |
|---|---|
| 1. Compatible with the verified production runtime contract | **Yes** — uses only already-functioning platform primitives (plain synchronous execution + the platform's own CPU-time enforcement); nothing depends on the disproven `worker_threads` stub |
| 2. Preserves ISO-SEC-1 through ISO-SEC-8 | **Yes** — §4 |
| 3. Cancellation/containment semantics are real, not cosmetic | **Yes** — §8 |
| 4. Deployment path can be directly verified after implementation | **Yes** — §9 |
| 5. Does not create unnecessary infrastructure or technical debt | **Yes** — it is strictly a reduction (two files removed, one call site simplified) |
| 6. Preserves the approved merchant bulk-import workflow | **Yes** — §5 |
| 7. Bounded implementation footprint appropriate to Phase 1 | **Yes** — smaller than the mechanism it replaces |

All seven conditions are satisfied. A recommendation is made rather than a STOP verdict.

---

## 13. Mandatory Classification Summary

| Architecture | Classification |
|---|---|
| **A — In-Process Bounded Parsing** | **Build Now** (selected) |
| B — Self-Loopback Subrequest | Reject |
| C — Client-Side Parsing | Build Later |
| D — Cloudflare Queues | Reject (Phase 1) / Build Later or Separate Product (if a deliberately-async import experience is later proposed) |
| E — Durable Objects | Reject |
| F — External Microservice | Reject (Phase 1) / Separate Product (only if in-process parsing is later proven insufficient at a scale no Workers-native option can satisfy) |

---

## 14. Standalone Implementation Contract — Candidate A: In-Process Bounded Parsing

This section is written to be directly implementable by a later Claude Code Build Mode instruction without inventing architecture.

**Selected architecture name:** In-Process Bounded Parsing.

**Runtime topology:** Single Cloudflare Workers isolate per request (the existing `catalogImportPreview` TanStack Start server function), no additional execution context of any kind. Parsing happens synchronously within the same isolate that received the HTTP request and will produce the HTTP response.

**Trust boundaries:** Unchanged from today: caller-JWT `authenticated`-role Supabase client for every Catalog read/write and governed command call; dynamically-imported service-role client confined exclusively to `catalog_import_batches`/`catalog_import_rows` INSERT/UPDATE. Parsing itself remains, as today, outside the authority model entirely — it produces data, never authority.

**Request/data flow, step-by-step:**
1. `catalogImportPreview` receives the authenticated request exactly as today (`requireSupabaseAuth` middleware; `loadOwnedBusinessId` re-derivation; unchanged).
2. File extracted from `FormData`; size/kind checked against `IMPORT_LIMITS.maxCompressedBytes` and the `.csv`/`.xlsx` extension allowlist — unchanged, pre-parse.
3. **Changed step:** `parseCsv(buffer)` or `parseXlsx(buffer)` is called *directly*, in-process, replacing `parseInIsolatedWorker(buffer, fileKind, IMPORT_LIMITS.maxParseMs)`. Both functions' own internal logic (`verifyCsvStructure`/`verifyXlsxStructure`, `enforceRealDecompressedSize`, row/column/cell caps, header mapping) is unchanged.
4. On `ImportLimitError`, the existing `{ outcome: "rejected", reason: err.code, message: err.message }` sanitized response path is unchanged.
5. On any other unexpected error (including, conceptually, a platform CPU-time kill — which the application will never observe as a catchable exception, since the isolate terminates outright), the request simply never completes; Nitro's existing top-level error boundary produces the same generic sanitized error response already used for any other unhandled exception today (no code change needed here — this behavior already exists and already applies to any current unhandled server error).
6. On success, the existing `validateRow` → `classifyRows` → bookkeeping-INSERT flow is entirely unchanged.

**Parser execution boundary:** The request-handling isolate itself; no separate thread, process, or invocation.

**Cancellation/compute-budget mechanism:** Cloudflare Workers' own per-request CPU-time ceiling (platform-enforced, involuntary), backstopping the existing pre-parse structural limits that bound the maximum work achievable in the first place. See §8 for the full proof and §9 item 1 for the required pre-implementation confirmation of the actual configured ceiling.

**CSV handling:** Unchanged — `parseCsv` (papaparse, `header: false`, existing header-mapping/row-building logic).

**XLSX/decompression handling:** Unchanged — `parseXlsx` (exceljs) fed through the unchanged `verifyXlsxStructure`/`enforceRealDecompressedSize` real-produced-byte containment.

**Allowed parser inputs:** Unchanged — `.csv` and `.xlsx` only, ≤ 5 MB compressed, ≤ 25 MB real decompressed bytes.

**Allowed parser outputs:** Unchanged — the existing `ParseOutcome` shape (`rows`, `unrecognizedColumnNames`, and for XLSX `additionalWorksheetsIgnored`).

**Failure categories:** Unchanged `ImportLimitErrorCode` taxonomy (`FILE_TOO_LARGE`, `DECOMPRESSED_TOO_LARGE`, `TOO_MANY_ROWS`, `TOO_MANY_COLUMNS`, `CELL_TOO_LONG`, `PARSE_TIMEOUT`*, `UNSUPPORTED_FILE_TYPE`, `MALFORMED_FILE`, `ENCRYPTED_OR_MACRO_FILE`). (*`PARSE_TIMEOUT` as an application-thrown code becomes largely vestigial once there is no longer a worker to time out waiting for — Build Mode should decide whether to retain it as a defensive, cooperative elapsed-time check inside the row-processing loop for defense-in-depth, clearly documented as non-preemptive and secondary to the platform CPU-time ceiling, or remove it; either choice is a small, bounded decision left to Build Mode, not an architecture question.)

**Sanitization boundary:** Unchanged — `logSanitized`/`sanitizedError()` in `src/server-functions/catalog-import.ts`, untouched by this change.

**Secret boundary:** Unchanged — no new channel is introduced; if anything, the removal of the worker `postMessage` channel is a net reduction in surface.

**Auth/RLS boundary:** Unchanged.

**Idempotency/claim interaction:** Unchanged — this change is entirely upstream of and unrelated to `catalogImportCommit`'s claim-before-mutation sequencing, durable follow-up state, or product-creation idempotency.

**File-size/row/column/cell/runtime limits:** Unchanged values (`IMPORT_LIMITS`); Build Mode should treat `maxParseMs` as informational/defense-in-depth only (see Failure categories above), never as the primary containment claim.

**Dependency changes:** None.

**Infrastructure changes:** Possible `limits.cpu_ms` addition to the Cloudflare/Wrangler configuration Nitro generates, contingent on the §9 item 1 plan-tier confirmation.

**Exact implementation file impact:** See §11 above (one call-site change in `src/server-functions/catalog-import.ts`; two file removals; one test file removal/replacement).

**Test matrix Build Mode must run:**
- All currently-passing tests in `tests/catalog-import/**` and `tests/inventory/**` (regression).
- A new direct-call unit test asserting `parseCsv`/`parseXlsx` reachability and output shape without a worker.
- A structural-ceiling benchmark test (2,000 rows × 40 columns, both CSV and XLSX) asserting completion and recording measured CPU/wall time, as a regression guard on the §8 evidence.
- The existing hostile-fixture decompression-bomb test (`content-type.test.ts`) — unaffected, must remain green.
- The full `real-http.test.ts` suite — unaffected in structure, must remain green.
- `wrangler dev` production-artifact execution of a normal and a structural-ceiling request (§9 items 1–2).

**Production-runtime verification matrix:** Exactly §9 items 1 through 4 above.

**Rollback/fail-closed behavior:** §10 above — zero partial state on any failure path, no new authority, no new privileged code path; rollback of the *code* itself (if ever needed) is a plain revert of the single call-site change plus restoring the two removed files, with no data migration implication whatsoever since no schema changes are involved.

**Explicit non-goals:** This contract does not redesign Product Truth, does not add or remove a Catalog command, does not change Manager/Employee/Owner authority, does not change the merchant-visible import workflow, does not introduce a queue/Durable Object/external service, and does not change any existing structural limit value.

---

## 15. Security Re-Verification Scope (Post-Implementation, Per instruction1.85.md §12)

Once Build Mode implements this contract and the production-runtime verification in §9 returns positive evidence, Security & Permissions Architecture's re-verification should be scoped narrowly to:

1. Confirm the worker layer is genuinely removed (no residual `node:worker_threads` reference, no dead code).
2. Confirm ISO-SEC-1/ISO-SEC-2's containment argument (§8 of this report) holds against the *actual* implemented code, including the final disposition of `PARSE_TIMEOUT`/`maxParseMs` (see §14).
3. Confirm ISO-SEC-3 (produced-byte containment) is untouched and its existing tests still pass.
4. Confirm ISO-SEC-4/ISO-SEC-5 (sanitization, secret isolation) are untouched.
5. Confirm ISO-SEC-6/ISO-SEC-7/ISO-SEC-8 (authority, tenant/data safety, exactly 19 commands) show zero regression — expected to be a fast confirmation given this change touches no schema, no RLS, and no command.
6. Review the §9 production-runtime evidence itself (the confirmed CPU-time ceiling and the two successful request classes) as the primary new evidence this re-verification did not previously have.

This is expected to be a narrower re-verification than report1.87.md's, since the change is a net reduction in surface area rather than a new mechanism.

---

## 16. Explicit Confirmation of No Implementation or Production Mutation

During this mission:

- application code changed: **NO**
- parser code changed: **NO**
- dependency changed: **NO**
- migration created or applied: **NO**
- Supabase mutated: **NO** (only the dedicated test project's `pg_proc`/`pg_namespace` catalogs were read, read-only, in a prior mission's evidence — not repeated or needed here)
- Lovable mutated, published, or deployed: **NO**
- temporary public probe performed: **NO**
- production data mutated: **NO**
- domain cutover performed: **NO**
- Product Truth changed: **NO**
- permission expansion: **NO**
- twentieth Catalog command introduced: **NO**
- unrelated refactoring performed: **NO**

Local, read-only investigation performed this mission: `npx vite build` (regenerated the existing `.output/server` artifact for inspection only, gitignored, not deployed); a disposable, uncommitted Node benchmark script measuring the existing, unmodified `parseCsv`/`parseXlsx` functions' CPU time at the structural ceiling (deleted before completion); web research of official Cloudflare documentation (cited in §2).

---

## 17. Final Verdict

**`PARSER ISOLATION ARCHITECTURE READY FOR BUILD-GATE REVIEW`**

Candidate A — In-Process Bounded Parsing — satisfies all seven Selection Standard conditions, preserves ISO-SEC-1 through ISO-SEC-8 without requiring any new Mission Control authorization, requires no new infrastructure, and is strictly smaller than the mechanism it replaces. Per instruction1.85.md §12, this report does not itself authorize Build Mode: Mission Control must review this report, obtain a bounded Security & Permissions Architecture review of the selected architecture, and only then issue a separate Build Mode instruction. Production migration remains blocked throughout.
