# SMART BUSINESS — SECURITY ARCHITECTURE REVIEW REPORT

## SB-P-1.11-GC-1 — Parser Isolation Security Architecture Review

**Report ID:** report1.93  
**Mission:** SB-P-1.11-GC-1 — Parser Isolation Security Architecture Review  
**Authorized By:** `communication/live/instruction1.86.md`  
**Executing Room:** Security & Permissions Architecture  
**Mode:** REVIEW ONLY / ARCHITECTURE GATE  
**Implementation Authority:** NONE  
**Production Migration Authority:** NONE  
**Lovable Mutation / Publish Authority:** NONE

**Selected architecture reviewed:** `In-Process Bounded Parsing`

---

## 1. Exact `main` SHA Reviewed

`7431ef137483d11edbce70157413d924345ff7ca`

This is the latest merged `main` observed at review start. The review used the current merged communication chain and current implementation/security boundaries. No application, test, dependency, Supabase, Lovable, deployment, or production mutation was performed.

---

## 2. Canonical Inputs Reviewed

Required architecture evidence reviewed from merged `main`:

- `communication/live/instruction1.86.md`
- `communication/live/instruction1.85.md`
- `communication/live/report1.92.md`
- `communication/live/report1.91.md`
- `communication/live/report1.90.md`
- `communication/live/report1.87.md`
- `communication/live/report1.86.md`
- current `src/lib/catalog-import/**`
- current `src/server-functions/catalog-import.ts`
- current Supabase caller-JWT/service-role boundaries
- current Catalog import security/HTTP tests
- current deployment/runtime evidence for Lovable + Cloudflare Workers

External platform verification was limited to current authoritative Cloudflare documentation necessary to evaluate the actual CPU-containment claim. Cloudflare's current Workers limits documentation states:

- Workers Free: **10 ms CPU time per HTTP request**;
- Workers Paid: **30 seconds default CPU limit**, configurable up to **300,000 ms / 5 minutes**;
- CPU time excludes time waiting on network I/O;
- when CPU limits are consistently exceeded, execution is terminated;
- the client receives Cloudflare Error 1102 / `Worker exceeded resource limits`;
- explicit `limits.cpu_ms` applies on the Standard usage model and is enforced on Cloudflare's network, not local development.

Sources reviewed:

- `https://developers.cloudflare.com/workers/platform/limits/`
- `https://developers.cloudflare.com/workers/wrangler/configuration/`
- `https://developers.cloudflare.com/workers/platform/pricing/`

No authoritative evidence available to this review identifies the Lovable account's effective Workers plan tier or a deployed Smart Business `limits.cpu_ms` override.

---

## 3. Executive Security Decision

**In-Process Bounded Parsing remains a potentially viable and minimal Phase 1 architecture, but the architecture as currently specified is not yet safe enough to receive Build Lock.**

Two independent issues prevent a positive architecture verdict:

1. **The effective production CPU ceiling is not verified.** The architecture depends on Cloudflare's involuntary CPU termination as the only genuine parser-execution backstop once parsing begins. The difference between a 10 ms Free ceiling and a 30 s Paid default is material: `report1.92.md`'s local ceiling benchmark measured approximately 30 ms CPU for a maximum-shape CSV and approximately 1,172 ms CPU for a maximum-shape XLSX. Those measurements are not production measurements. A 10 ms effective ceiling would plainly be inadequate even for the reported local CSV benchmark; a 30 s ceiling appears ample by estimate, but cannot be treated as verified for this project.

2. **The existing row/column/cell limits do not all bound parser execution before parser materialization.** `parseCsv()` invokes `Papa.parse()` before checking `maxRows` / `maxColumns` / `maxCellLength`. `parseXlsx()` runs `verifyXlsxStructure()` and the 25 MB real decompressed-byte check before ExcelJS, but then calls `workbook.xlsx.load()` before checking row/column/cell limits. Therefore the architecture must not describe those limits as a complete pre-parser compute bound. The 5 MB compressed-input cap, the 25 MB actual decompressed-output cap for XLSX, and the Cloudflare CPU ceiling are the effective pre-/during-parser resource boundaries.

In addition, **a narrow authenticated per-business import-attempt guard is security-required for the in-process model before Build Lock**. Per-request CPU termination bounds one request; it does not by itself prevent one authenticated owner/business from launching repeated or concurrent maximum-cost parses. No hard per-tenant isolate separation is proven, and platform/account CPU consumption is a shared availability/cost surface. This does not justify a queue, Durable Object workflow, separate ingestion service, or broad redesign. It requires only a bounded, fail-closed import-preview concurrency/rate control before expensive parsing begins.

---

## 4. SEC-ARC-1 Through SEC-ARC-8 Findings

| Item | Finding | Disposition |
|---|---|---|
| **SEC-ARC-1 — Actual CPU ceiling** | Cloudflare's possible ceilings are verified at platform level, but the **effective Smart Business/Lovable deployed ceiling is not verified**. Current repository/build evidence does not identify Lovable's Workers plan tier or a deployed `limits.cpu_ms` value. | **EVIDENCE GAP — BLOCKING** |
| **SEC-ARC-2 — Ceiling adequacy** | Local evidence in `report1.92.md` (~30 ms max-shape CSV; ~1,172 ms max-shape XLSX) suggests a 30 s ceiling would be ample. These are Node/local CPU measurements, not production Cloudflare CPU measurements. A 10 ms ceiling would be inadequate. Adequacy therefore cannot be positively decided until the effective production ceiling is known and controlled runtime ceiling tests pass. | **NOT YET VERIFIED — BLOCKING** |
| **SEC-ARC-3 — Same-isolate risk** | Moving parsing into the request isolate removes the broken worker abstraction but puts parser CPU/memory pressure directly in request handling. Cloudflare's per-request CPU backstop provides real containment, but no hard per-business or per-tenant isolate separation is proven. Repeated/concurrent authenticated uploads remain an availability/denial-of-wallet surface. | **CHANGES REQUIRED** |
| **SEC-ARC-4 — CPU exhaustion failure behavior** | CPU termination occurs outside application control. Cloudflare documents Error 1102 (`Worker exceeded resource limits`). Parse-before-write ordering can preserve data consistency because no support-table/Catalog write should exist yet. Merchant-facing UI must convert unexpected server/network/runtime failure to the existing generic sanitized message and must never display raw platform bodies, stack data, paths, or hostile file content. | **CONDITIONALLY ACCEPTABLE WITH BUILD CONTRACT** |
| **SEC-ARC-5 — Ordering of parsing and writes** | Required order is: authenticate → derive Owner/business authority → validate upload presence/type/5 MB compressed size → structural verification including real XLSX decompressed-byte cap → complete all parsing → row/field validation/classification → only then dynamically obtain service-role bookkeeping client and mutate import-support tables. No support-table write or Catalog mutation may occur before parsing/validation/classification succeeds. Current preview architecture follows the critical write ordering: support-table insertion is after parsing/validation/classification. | **PASS AS LOCKED REQUIREMENT** |
| **SEC-ARC-6 — Memory/decompression containment** | CPU containment alone is insufficient. The 5 MB compressed upload limit and 25 MB **actual produced-byte** XLSX decompression cap remain mandatory. The 2,000-row / 40-column / 2,000-character cell limits remain mandatory data-shape controls but are not all pre-parser CPU guards in the current implementation. | **PASS WITH CORRECTED SECURITY INTERPRETATION** |
| **SEC-ARC-7 — Concurrency abuse** | Existing per-request platform CPU limits are not sufficient by themselves. One authenticated owner/business can otherwise issue repeated concurrent expensive previews. A narrow pre-parse per-business concurrency/rate guard is required for Phase 1. This guard must not expand authority or introduce a queue/service redesign. | **CHANGES REQUIRED — BLOCKING** |
| **SEC-ARC-8 — Architecture minimality** | No alternative candidate from `report1.92.md` is presently security-required. In-Process Bounded Parsing remains the smallest viable architecture **if** the CPU ceiling is verified/configured adequately and the narrow per-business abuse guard is included. Queue/Workflow/Durable Object/separate service/client-side parser migration are not justified for this Phase 1 correction. | **SELECTED ARCHITECTURE RETAINED, NOT YET BUILD-READY** |

---

## 5. SEC-ARC-1 — Effective Cloudflare CPU Ceiling

### 5.1 Verified platform facts

Current Cloudflare documentation establishes a real, involuntary CPU-time boundary:

- Free HTTP Worker request: 10 ms CPU time;
- Paid HTTP Worker request: 30 s default CPU time;
- Paid can be configured up to 300 s / 300,000 ms;
- CPU time is execution time, not wall time waiting on network I/O;
- repeated exceedance results in runtime termination;
- deployed `limits.cpu_ms` is the explicit configuration mechanism on Standard usage.

This satisfies the *kind* of execution boundary required by ISO-SEC-2. It is materially different from `Promise.race`, `AbortController`, or an application timer because the application cannot continue executing after the platform enforces termination.

### 5.2 Missing project-specific fact

This review did **not** obtain authoritative evidence of:

- the Lovable/Cloudflare Workers plan tier actually serving the authorized Smart Business production deployment;
- the effective `cpu_ms` setting for the deployed Worker;
- a platform control-plane/runtime trace proving the exact effective ceiling.

No `limits.cpu_ms` key identified in prior locally generated output can prove the account-default ceiling, because the plan/account context remains outside the repository.

### 5.3 Required evidence before Build Lock can proceed

Mission Control must obtain one authoritative project-specific evidence item before Build Mode authorization:

- Lovable/platform deployment metadata or support confirmation showing the effective CPU limit for the deployed Smart Business Worker; **or**
- Cloudflare control-plane configuration/trace for the actual deployed Worker showing plan/effective `cpu_ms`; **or**
- another platform-authoritative artifact that identifies the effective per-request CPU limit for this exact deployment.

A local `vite build`, `vite dev`, `wrangler dev`, inferred SSR viability, or plan guess is insufficient.

---

## 6. SEC-ARC-2 — Legitimate Maximum-Bound Adequacy

`report1.92.md` recorded one local CPU measurement against the current parser functions at the structural ceiling:

- CSV, 2,000 rows × 40 columns: approximately **30 ms CPU**;
- XLSX, 2,000 rows × 40 columns: approximately **1,172 ms CPU**.

Security classification of this evidence:

- **Direct evidence of local parser behavior:** YES.
- **Direct evidence of Cloudflare production CPU usage:** NO.
- **Useful engineering estimate:** YES.

Consequences:

- if the actual deployed ceiling is 10 ms, the selected architecture is not adequate for legitimate maximum-bound files;
- if the actual deployed ceiling is 30 s, the existing local measurements suggest very substantial headroom, but production verification is still required;
- if an explicit lower `limits.cpu_ms` is configured, the controlled-runtime maximum-bound benchmark must prove it remains sufficient.

No positive ceiling-adequacy decision is permitted from the current evidence alone.

---

## 7. SEC-ARC-3 / SEC-ARC-7 — Same-Isolate and Concurrent Abuse Risk

### 7.1 What Cloudflare CPU limits solve

They bound CPU consumption of each individual request by an external platform mechanism.

### 7.2 What they do not prove

They do not prove:

- hard per-business isolate allocation;
- hard per-tenant isolate allocation;
- one active parse per business;
- account-level denial-of-wallet protection from repeated maximum-cost requests;
- protection from one authenticated owner generating many simultaneous parse invocations.

Cloudflare's scheduling/isolate reuse must not be treated as a tenant security primitive.

### 7.3 Security-required Phase 1 guard

**Build Now requirement:** before expensive CSV/XLSX parsing begins, enforce a **narrow authenticated per-business import-preview abuse guard**.

Minimum security characteristics:

1. identity key is the server-derived authoritative `businessId`, never a browser-supplied business value;
2. the guard executes after authentication/Owner re-derivation and before expensive parser invocation;
3. bounded concurrency: one expensive Catalog import preview in flight per business is the preferred minimal default unless implementation constraints justify an equally restrictive equivalent;
4. bounded short-window request rate for preview attempts, sufficient to stop rapid retry/burst abuse after a CPU-killed or malformed request;
5. fail closed with a fixed sanitized merchant message/code such as "an import is already being processed" / "try again shortly";
6. no service-role Catalog Product Truth authority;
7. no queue, workflow, Durable Object job system, separate parser service, new public Catalog command, or new merchant permission model;
8. guard state must not carry raw file bytes, merchant cells, Reference Cost, credentials, or parser output;
9. guard behavior must not permit cross-business denial by accepting client-selected business identifiers;
10. tests must prove same-business concurrent abuse is bounded and different businesses cannot manipulate one another's guard identity.

The exact primitive is an implementation decision for the separately authorized Build Mode instruction, but the outcome is now part of the architecture security contract.

---

## 8. SEC-ARC-4 — Platform CPU Exhaustion and Sanitization

Cloudflare documents platform-generated Error 1102 / `Worker exceeded resource limits` when Worker CPU is exhausted. Because platform termination can occur before application catch/finally logic executes, the server must **not** rely on an application catch block to sanitize a CPU-kill event.

Security requirements:

- all parsing must finish before any support-table or Product Truth mutation, so a CPU-killed preview leaves no partial import batch/row state;
- client/server-function transport handling must treat non-success, malformed, or platform-generated responses as an opaque runtime failure and display the fixed Smart Business generic retry message;
- raw platform response bodies must not be rendered directly into merchant UI;
- no stack trace, source path, environment value, Supabase credential, SQL detail, internal request metadata, or hostile file content may be echoed into logs or UI;
- ordinary parser/validation failures that the application does catch should continue using the closed `ImportLimitError` / fixed merchant-facing taxonomy;
- controlled runtime verification must deliberately exercise a CPU-limit failure on a disposable/synthetic path or equivalent safe method and verify browser-visible behavior, without production-data mutation.

The platform's generic Error 1102 is not itself a secret leak, but it is not sufficient as the desired Smart Business merchant experience. The application must ensure it is not directly surfaced as raw response content.

---

## 9. SEC-ARC-5 — Exact Parse-Before-Write Contract

The architecture security order is locked as follows:

1. receive authenticated server request;
2. validate caller JWT;
3. derive current Owner/business from authoritative server-side relations;
4. deny non-owner/unknown business before privileged access;
5. validate `file` object and extension/type expectations;
6. enforce 5 MB compressed upload limit;
7. copy file into transient in-memory buffer only;
8. perform CSV/XLSX structural verification;
9. for XLSX, enforce the **25 MB actual produced decompressed-byte cap** before ExcelJS workbook materialization;
10. execute the selected in-process parser;
11. enforce row/column/cell data-shape limits and convert parser output into allowlisted row structures;
12. validate business fields and Reference Cost authority;
13. classify duplicate/category conditions through the caller-JWT read path;
14. only after steps 1–13 complete may the server dynamically obtain the privileged bookkeeping client;
15. insert `catalog_import_batches` and `catalog_import_rows` only for the fully parsed/classified preview result;
16. perform **no Catalog Product Truth mutation during preview**;
17. Catalog mutation remains exclusively in commit and exclusively through existing governed Catalog commands using caller-JWT authority.

A CPU/runtime failure during steps 5–13 must therefore leave no support-table record and no Catalog mutation.

---

## 10. SEC-ARC-6 — Memory / Decompression Containment

### Mandatory retained limits

- compressed upload: **5 MB**;
- actual produced XLSX decompressed bytes: **25 MB**;
- rows: **2,000**;
- columns: **40**;
- cell length: **2,000 characters**;
- plain `.xlsx` only; macro/encrypted/unsupported structures rejected;
- CSV must be valid UTF-8/non-ZIP input.

### Important correction to `report1.92.md` security wording

The architecture must not claim all row/column/cell limits are established before parser work begins:

- CSV: `Papa.parse()` runs before row/column/cell limits are checked;
- XLSX: ZIP structure and actual decompressed size are bounded first, but `ExcelJS.Workbook.xlsx.load()` runs before row/column/cell limits are checked.

Therefore:

- 5 MB compressed-size containment is the broad upload-memory/input cap;
- 25 MB actual decompressed-byte containment is the critical XLSX expansion guard;
- Cloudflare's effective CPU ceiling is the actual non-cooperative parser CPU backstop;
- row/column/cell limits remain mandatory product/data-shape controls and limit downstream validation/classification/mutation work.

A future optimization that cheaply rejects row/column excess before full parser materialization may be valuable, but it is not required to replace the selected architecture if CPU configuration, produced-byte containment, and concurrency guard are proven adequate.

---

## 11. ISO-SEC-1 Through ISO-SEC-8 Disposition

| Security outcome | Finding | Disposition |
|---|---|---|
| **ISO-SEC-1 — Hostile-input containment** | 5 MB upload + 25 MB actual XLSX output + platform CPU ceiling form a plausible hard containment model, but effective CPU ceiling is unknown and repeated authenticated concurrency is unbounded. | **NOT YET SATISFIED** |
| **ISO-SEC-2 — Enforceable bounded execution** | Cloudflare CPU termination is an acceptable non-cooperative enforcement primitive in principle. Project-specific effective ceiling is not verified. | **EVIDENCE GAP** |
| **ISO-SEC-3 — Produced-byte XLSX containment** | Existing `inflateRawSync(..., { maxOutputLength })` / shrinking remaining-budget design remains architecture-required and independent of worker threads. | **SATISFIED / MUST RETAIN** |
| **ISO-SEC-4 — Sanitized failure boundary** | Normal parser failures are sanitizable. Platform CPU kill bypasses application catch logic; parse-before-write plus opaque client fallback is required. | **CONDITIONALLY SATISFIABLE** |
| **ISO-SEC-5 — Secret isolation** | Removing worker message passing reduces surface. Service-role client remains server-only and is obtained after parsing. | **SATISFIED / MUST RETAIN** |
| **ISO-SEC-6 — Tenant and authority integrity** | Caller-JWT Catalog authority, Owner derivation, RLS, Manager fail-closed, Employee denied can remain unchanged. | **SATISFIED / MUST RETAIN** |
| **ISO-SEC-7 — Import workflow integrity** | Parser replacement need not affect atomic commit claim, durable follow-up state, replay/idempotency, duplicate handling, hard-delete protection, or support-table ACL/RLS. | **SATISFIED BY ARCHITECTURE / REGRESSION TEST REQUIRED** |
| **ISO-SEC-8 — Public Product Truth boundary** | No parser replacement needs any new Catalog command. Exactly nineteen remains mandatory. | **SATISFIED / MUST RETAIN** |

---

## 12. Mandatory Regression Boundaries

The architecture review found no reason to change these locked boundaries. Build Mode, when separately authorized, must preserve all of them:

- exactly nineteen public Catalog commands;
- no twentieth public Catalog/import command;
- no `reactivate_catalog_category` command;
- no Product Truth redesign;
- no service-role Product Truth mutation;
- caller JWT remains the Catalog authority path;
- Owner import only for current Phase 1;
- Manager remains fail-closed until approved permission infrastructure exists;
- Employee import remains denied;
- Reference Cost remains independently protected;
- raw upload remains transient/unretained;
- no global mutable Category taxonomy;
- no unit conversion;
- no automatic duplicate overwrite;
- no automatic Inventory-row creation;
- support-table authenticated write denial and business isolation remain intact;
- atomic commit claim remains before skip/row mutation;
- durable follow-up state and retry identity remain unchanged;
- imported-product hard delete remains governed by dependent-history protection;
- sanitized error/log policy remains unchanged.

---

## 13. Classification

### Build Now

Only after Mission Control resolves the blocking CPU evidence gate:

- remove/retire the non-functional `node:worker_threads` isolation layer;
- direct in-process call to the existing parser functions;
- preserve all structural/decompression limits;
- preserve strict parse-before-write sequencing;
- implement the narrow server-derived per-business preview concurrency/rate guard;
- ensure client/runtime failure mapping is opaque and merchant-safe;
- add/adjust tests required by §15.

### Build Later

- richer CPU usage telemetry/dashboarding;
- optimized pre-parser row/column scanning if proven worthwhile;
- adaptive per-plan import limits based on observed production distributions;
- richer admin diagnostics that remain privacy-safe.

### Add-on

- merchant/admin-configurable import throttling beyond the security baseline.

### Separate Product

- dedicated ETL/import service;
- large asynchronous bulk-ingestion platform.

### Reject

- application timers/`Promise.race`/`AbortController` presented as parser termination security;
- reintroducing `node:worker_threads` on this Cloudflare target;
- queue/Workflow/Durable Object redesign merely to replace the parser primitive at current Phase 1 scale;
- browser-supplied business identity for rate/concurrency enforcement;
- twentieth Catalog command;
- service-role Product Truth writes;
- weakening 5 MB / 25 MB / row / column / cell limits without a new approved security mission.

---

## 14. Standalone Build Mode Security Contract

Because this report is **not positive**, this section is a **required correction contract for the next architecture/build-lock decision**, not Build Mode authorization.

If Mission Control later receives authoritative CPU-limit evidence and issues a separate Build Mode instruction, the minimum security contract must be:

### 14.1 Permitted application scope

Permitted changes only in the parser/import preview path and narrowly required tests/configuration, principally:

- `src/server-functions/catalog-import.ts`;
- `src/lib/catalog-import/parse-isolated.ts` — retire/remove;
- `src/lib/catalog-import/parse-worker.ts` — retire/remove;
- `src/lib/catalog-import/parse.ts` — only minimal import/comment cleanup necessary after worker removal;
- `src/lib/catalog-import/content-type.ts` — no semantic weakening; only compatibility cleanup if required;
- `src/lib/catalog-import/limits.ts` — limits remain locked unless Mission Control explicitly authorizes a configuration-only CPU contract separately;
- narrowly scoped server-side rate/concurrency guard component if needed;
- Catalog import tests specifically required by this contract;
- deployment config only if Mission Control separately authorizes an explicit `limits.cpu_ms` setting after authoritative platform evidence.

No database schema change is presumed by this architecture review. If the chosen minimal abuse guard would require persistence/schema, that must be explicitly described and separately authorized rather than silently added.

### 14.2 Worker retirement

Remove all runtime dependencies on:

- `node:worker_threads`;
- `new Worker(...)` for Catalog parsing;
- `worker.terminate()`;
- CWD/source-path worker loading;
- `parse-worker.ts` message transport.

Do not replace them with cosmetic application-level timeout logic.

### 14.3 Mandatory retained structural controls

Retain exactly:

- 5 MB compressed upload ceiling;
- 25 MB real produced-byte XLSX decompression ceiling;
- 2,000 rows;
- 40 columns;
- 2,000 characters/cell;
- plain XLSX structure/macro/encryption rejection;
- UTF-8 CSV validation;
- transient raw file handling only.

### 14.4 Parse-before-write sequence

The exact sequence in §9 is mandatory. In particular, no `catalog_import_batches` or `catalog_import_rows` insert/update and no Catalog command may occur before parsing and classification complete.

### 14.5 Runtime/merchant error handling

- caught parser/validation failures → closed sanitized reason code/message;
- unexpected parser exception → generic fixed server error;
- CPU-killed/platform non-success response → browser/client treats response body as opaque and shows generic retry message;
- raw Cloudflare body, stack, source path, environment, SQL detail, Supabase detail, credential, hostile filename/cell text must not be rendered/logged unsafely.

### 14.6 Abuse guard

- derive key from authoritative business after JWT validation;
- enforce before expensive parsing;
- bound same-business concurrent previews;
- bound rapid repeated preview attempts;
- sanitized fail-closed response;
- no raw file/state retention in guard;
- cross-business isolation tests.

---

## 15. Required Build/Verification Tests

A future authorized Build Mode must provide direct evidence for:

1. authenticated real-HTTP happy-path CSV preview;
2. authenticated real-HTTP happy-path XLSX preview;
3. invalid/missing token denial before expensive privileged behavior;
4. non-owner denial;
5. cross-business read/commit isolation unchanged;
6. spoofed business/actor fields ignored;
7. 5 MB compressed-size rejection;
8. malicious understated-size XLSX still rejected by actual produced-byte ceiling;
9. maximum legitimate CSV at 2,000 × 40 completes in production-equivalent runtime;
10. maximum legitimate XLSX at 2,000 × 40 completes in production-equivalent runtime;
11. over-row/over-column/over-cell inputs are rejected with sanitized reasons;
12. malformed/macro/encrypted XLSX rejection;
13. platform CPU exhaustion produces no support-table/Product Truth mutation;
14. raw platform error body is not surfaced to merchant UI;
15. same-business concurrent preview requests are bounded by the new guard;
16. rapid same-business repeated attempts are bounded;
17. different businesses cannot collide/manipulate each other's guard identity;
18. parse failure leaves zero import-support rows/batches;
19. successful preview writes support rows only after parse/classification;
20. commit claim/replay/idempotency tests remain green;
21. durable follow-up retry tests remain green;
22. Reference Cost authorization/non-disclosure remains green;
23. governed imported-product hard-delete test remains green;
24. support-table authenticated write denial/RLS isolation remains green;
25. exactly nineteen public Catalog commands;
26. no `reactivate_catalog_category` command;
27. no service-role Catalog Product Truth mutation path introduced;
28. production bundle contains no `node:worker_threads` Catalog parser path.

---

## 16. Controlled Runtime Verification Requirements

After a future Build Mode implementation is human-reviewed and merged, but before final Security implementation re-verification, Infrastructure/authorized runtime verification must obtain evidence from the **actual authorized Lovable production-equivalent runtime**.

Minimum matrix:

### RT-ISO-1 — Effective CPU configuration

Record authoritative effective CPU ceiling for the exact deployed Worker. Evidence must identify the actual deployment/configuration, not a generic Cloudflare plan table.

### RT-ISO-2 — Maximum legitimate CSV

Execute a synthetic maximum-bound legitimate CSV (2,000 × 40) through the real authenticated preview path and record:

- outcome;
- CPU time if platform logs expose it;
- wall time;
- zero unexpected platform termination.

### RT-ISO-3 — Maximum legitimate XLSX

Same as RT-ISO-2 for maximum-bound legitimate XLSX.

### RT-ISO-4 — Hostile/decompression boundary

Verify actual produced-byte containment remains active in the deployed runtime using a safe malicious fixture with understated ZIP metadata.

### RT-ISO-5 — CPU-exhaustion failure boundary

Using a safe disposable/synthetic verification mechanism that does not mutate merchant/production data, cause a controlled CPU-bound failure and verify:

- platform termination is real;
- merchant-visible response is generic/opaque;
- no stack/path/env/secret/raw-hostile-content disclosure;
- no support-table/Product Truth mutation.

### RT-ISO-6 — Same-business guard

Verify multiple concurrent/repeated authenticated preview attempts from one synthetic business cannot all enter expensive parsing simultaneously.

### RT-ISO-7 — Cross-business independence

Verify one business's guard state cannot block or authorize another business by spoofing identifiers.

### RT-ISO-8 — No worker dependency

Verify deployed parse completes without `node:worker_threads` and without hidden worker/path fallback.

No custom-domain cutover or production migration is implied by these runtime checks.

---

## 17. Final Security Implementation Re-Verification Scope

The subsequent Security implementation re-verification must retest:

- ISO-SEC-1 through ISO-SEC-8;
- effective CPU ceiling and measured maximum-bound headroom;
- same-business concurrency/rate abuse guard;
- CPU-kill merchant sanitization and zero-write behavior;
- 5 MB/25 MB memory/decompression limits;
- strict parse-before-write ordering;
- auth/Owner/business derivation;
- Manager fail-closed / Employee denied;
- caller-JWT Product Truth authority;
- service-role confinement to support bookkeeping;
- Reference Cost independent authorization;
- support-table authenticated write denial/RLS;
- commit CAS/claim ordering;
- replay/idempotency and durable follow-up state;
- duplicate handling and hard-delete protection;
- exactly nineteen public Catalog commands;
- zero `reactivate_catalog_category` command;
- zero `node:worker_threads` parser dependency;
- no hidden raw-file retention or sensitive logging.

A positive implementation verdict must be based on merged implementation plus controlled-runtime evidence, not local tests alone.

---

## 18. Residual Blockers / Evidence Gaps

### Blocking Evidence Gap A — Effective CPU ceiling

The exact effective CPU-time ceiling for the authorized Lovable production Worker is not known. Generic Cloudflare limits are insufficient because possible effective values differ by orders of magnitude.

### Blocking Evidence Gap B — Production maximum-bound CPU behavior

The current ~30 ms CSV / ~1,172 ms XLSX numbers are local measurements, not actual Cloudflare CPU measurements.

### Blocking Architecture Change C — Same-business abuse control

A narrow pre-parse per-business concurrency/rate guard is required for the in-process same-isolate model. It is not part of the current implementation and was not specified as mandatory in the selected architecture report.

### Corrected Assumption D — Structural caps

Row/column/cell limits are not all pre-parser CPU containment. Security approval must use the correct boundary model described in this report.

---

## 19. No-Action Confirmation

Under this mission:

- application code changed: **NO**;
- tests changed: **NO**;
- dependencies changed: **NO**;
- database schema changed: **NO**;
- test Supabase mutated: **NO**;
- production Supabase mutated: **NO**;
- Lovable mutated: **NO**;
- publish/deploy performed: **NO**;
- domain cutover performed: **NO**;
- Build Mode authorized: **NO**;
- production migration authorized: **NO**;
- Product Truth changed: **NO**;
- Catalog command surface changed: **NO**.

The only repository change under this mission is this completion report on its dedicated review branch.

---

## 20. Final Verdict

**`PARSER ISOLATION SECURITY ARCHITECTURE CHANGES REQUIRED BEFORE BUILD LOCK`**

The selected **In-Process Bounded Parsing** architecture is not rejected as a Phase 1 direction. It remains the smallest viable candidate, but Build Lock must not be issued until Mission Control has authoritative evidence of the effective Cloudflare CPU ceiling, confirms legitimate maximum-bound adequacy against that ceiling, and incorporates the narrow per-business pre-parse concurrency/rate guard and platform-failure sanitization requirements defined above.

This verdict does not authorize implementation, Build Mode, production migration, Lovable mutation, publish/deploy, domain cutover, or public release.