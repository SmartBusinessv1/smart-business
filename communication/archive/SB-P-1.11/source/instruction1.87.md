# SMART BUSINESS MISSION CONTROL

# SB-P-1.11-GC-1 — Parser Isolation Architecture Amendment / Evidence Closure

**Instruction ID:** instruction1.87  
**Mission:** SB-P-1.11-GC-1 — Parser Isolation Architecture Amendment / Evidence Closure  
**Authorized By:** Mission Control  
**Primary Executing Room:** Infrastructure Operations  
**Review Dependency:** Security & Permissions Architecture  
**Mode:** EVIDENCE CLOSURE + ARCHITECTURE AMENDMENT ONLY  
**Build Mode Authority:** NONE  
**Production Migration Authority:** NONE  
**Lovable Publish Authority:** NONE  
**Production Data Mutation Authority:** NONE

---

## 1. Mission Objective

Resolve only the three blockers identified by merged `communication/live/report1.93.md` before any Build Lock can be considered:

1. obtain authoritative project-specific evidence of the effective Cloudflare per-request CPU-time ceiling for the actual Smart Business Lovable production deployment;
2. lock the smallest Phase 1 authenticated per-business pre-parse abuse guard required for In-Process Bounded Parsing;
3. lock the platform-failure sanitization contract so Cloudflare CPU/resource termination cannot expose raw platform or internal details to merchants.

This mission amends the selected **In-Process Bounded Parsing** architecture. It does not implement it.

Do not widen the mission into queueing, background jobs, Durable Objects, a separate parser service, client-side parsing, Product Truth redesign, permission redesign, or release work.

---

## 2. Canonical Baseline

Start from latest merged `main`.

At authorization time:

`8b8cc38feb6001d7b04ce03682badae9085b7248`

Required reading:

- `communication/live/report1.93.md`
- `communication/live/instruction1.86.md`
- `communication/live/report1.92.md`
- `communication/live/report1.91.md`
- `communication/live/report1.90.md`
- current `src/lib/catalog-import/**`
- current `src/server-functions/catalog-import.ts`
- current authentication / caller-JWT / service-role boundaries
- current Lovable deployment/runtime evidence

If latest `main` contains a material change to these boundaries, STOP and report the mismatch.

---

## 3. Locked Architecture Direction

The selected Phase 1 direction remains:

**In-Process Bounded Parsing**

The following interpretation is now locked:

- `node:worker_threads` is not a production-compatible parser-isolation primitive for the current deployment target and must not remain a Build Lock requirement;
- the parser may execute in-process only if the actual deployed platform provides a verified involuntary CPU ceiling adequate for legitimate bounded imports;
- the existing 5 MB compressed upload cap remains a pre-parser input boundary;
- the existing 25 MB actual-produced XLSX decompressed-byte cap remains mandatory before ExcelJS workbook materialization;
- 2,000-row, 40-column, and 2,000-character cell limits remain mandatory data-shape/downstream-work limits, but must not be represented as complete pre-parser CPU containment;
- all parsing, validation, and classification must complete before import-support or Catalog mutation;
- exactly nineteen public Catalog commands remain locked.

---

## 4. EC-1 — Effective Production CPU Ceiling Evidence

Infrastructure Operations must establish the effective per-request CPU-time ceiling for the **actual authorized Smart Business production deployment target**, not a generic Cloudflare account, local Wrangler environment, stale Lovable project, or inferred plan.

Authorized Lovable project:

`f3e992ec-06df-4d49-b157-b92ec064c078`

Acceptable evidence must be authoritative and project-specific. Examples include:

- Lovable/platform deployment metadata explicitly identifying the effective CPU ceiling or underlying plan/runtime configuration;
- Cloudflare control-plane/configuration evidence for the exact deployed Worker;
- platform/support evidence identifying the effective ceiling for this exact Lovable production runtime;
- a platform-authoritative deployed artifact that proves an explicit effective `limits.cpu_ms` value.

Insufficient evidence includes:

- local `vite dev`;
- local `vite build`;
- local `wrangler dev` alone;
- inference from SSR working;
- inference from Lovable subscription tier;
- generic Cloudflare documentation without project-specific binding;
- guessing Free vs Paid.

If the effective ceiling cannot be authoritatively established without a new publish, deployment mutation, account-level change, or permission not granted here, STOP with an evidence gap. Do not mutate the project merely to discover it.

### Adequacy decision

The report must compare the verified ceiling against the existing legitimate maximum-bound benchmark evidence from `report1.92.md`:

- maximum-shape CSV local CPU estimate: approximately 30 ms;
- maximum-shape XLSX local CPU estimate: approximately 1,172 ms.

These remain engineering estimates, not production CPU measurements.

Do not declare adequacy solely from these local values. State whether the verified ceiling is clearly inadequate, plausibly adequate pending controlled runtime verification, or itself still unresolved.

---

## 5. EC-2 — Minimal Per-Business Pre-Parse Abuse Guard

The following security outcome is now part of the standalone Build Contract.

Before expensive CSV/XLSX parsing begins, the future implementation must enforce a **narrow authenticated per-business preview guard**.

### Required semantics

1. Authority key is the server-derived authoritative `businessId`, never a browser-supplied business identifier.
2. Guard evaluation occurs only after successful authentication and Owner/business re-derivation.
3. Guard executes before expensive CSV/XLSX parser invocation.
4. **Maximum one expensive import preview in flight per business** is the locked Phase 1 concurrency default.
5. Add a bounded short-window attempt limit sufficient to prevent rapid retry/burst abuse after malformed, rejected, or CPU-terminated attempts.
6. Same-business excess attempts fail closed with one fixed sanitized merchant-facing outcome such as `IMPORT_BUSY_TRY_AGAIN` / “An import is already being processed. Try again shortly.”
7. Different businesses must never share or influence one another's guard key/state.
8. Guard state must contain no raw file bytes, cells, parsed rows, Reference Cost, credentials, JWTs, service-role material, or parser output.
9. The guard grants no Product Truth authority and cannot execute Catalog commands.
10. The guard must not introduce a queue, Workflow, Durable Object job architecture, separate ingestion service, new merchant role/permission model, or twentieth public Catalog command.
11. Guard failure itself must not create an import batch/row record.
12. Guard release/expiry behavior must fail safely if a request is platform-terminated before application `finally` code executes.

### Implementation primitive

This mission does **not** select an implementation primitive unless existing verified infrastructure clearly provides one that satisfies all semantics above without widening architecture.

The future Build Mode implementation may choose the smallest technically valid primitive, but its design must be explicit and testable. If satisfying item 12 requires durable/shared guard state, that fact must be stated; do not pretend process-local memory is a cross-request security control on an edge runtime.

The completion report must therefore classify the guard primitive as:

- `IMPLEMENTATION-READY WITH EXISTING INFRASTRUCTURE`, with exact primitive and evidence; or
- `BUILD CONTRACT REQUIRES A NARROW NEW SUPPORT PRIMITIVE`, with the smallest required repository/infrastructure impact; or
- `STOPPED — GUARD CANNOT BE SPECIFIED WITHIN CURRENT AUTHORITY`.

No implementation is authorized here.

---

## 6. EC-3 — Platform Failure Sanitization Contract

The following behavior is now locked for Build Mode.

Cloudflare CPU/resource termination can occur outside application catch/finally execution. Therefore application-level try/catch must not be treated as the only sanitization boundary.

Future implementation must ensure:

1. parsing and row validation/classification finish before any import-support write or Product Truth mutation;
2. any non-success, malformed, truncated, unexpected, or platform-generated server response during preview is treated by the client/server-function transport as an **opaque runtime failure**;
3. merchant UI displays only a fixed Smart Business generic retry message/code;
4. raw Cloudflare response bodies, including Error 1102 text, must not be rendered directly to merchants;
5. no stack trace, filesystem/source path, environment value, JWT, Supabase credential, SQL detail, request metadata, or hostile merchant file content may be echoed to UI;
6. logs remain sanitized and must not log raw uploaded row/cell content merely because transport failed;
7. expected parser/validation failures continue using the existing closed merchant-facing taxonomy;
8. a platform CPU-kill during preview must leave zero import batch rows and zero Catalog mutation because of the locked parse-before-write order;
9. controlled runtime verification after implementation must exercise the opaque-failure path safely and prove merchant-visible sanitization.

---

## 7. Standalone Build Contract Amendment

For the next Build Mode instruction, the architecture is valid only as the following complete contract:

### In-Process Bounded Parsing — Amended Contract

- authenticate caller and derive Owner/business server-side;
- apply authoritative per-business pre-parse abuse guard;
- validate file presence/type and enforce 5 MB compressed cap;
- keep raw upload transient/in-memory only;
- perform CSV/XLSX structural validation;
- for XLSX, enforce 25 MB actual-produced decompressed-byte cap before ExcelJS workbook materialization;
- invoke parser in-process;
- enforce row/column/cell limits and convert to allowlisted row structures;
- validate business fields and Reference Cost authority;
- classify duplicates/categories through caller-JWT reads;
- only after all parsing/validation/classification succeeds may privileged bookkeeping support-table access be obtained;
- preview may write import-support evidence only after successful complete parsing/classification;
- preview performs no Product Truth mutation;
- commit remains caller-JWT governed and uses only the existing nineteen Catalog commands;
- unexpected/platform runtime failure is opaque to merchant UI and leaves no partial preview writes;
- production acceptance requires controlled runtime evidence against the actual deployment target;
- final Security implementation re-verification remains mandatory before production migration.

This section is intended to be standalone enough that a later Build Mode instruction may reference it as an immutable merged dependency only after Mission Control and Security approve this mission's evidence closure.

---

## 8. Scope Classification

### Build Now

- remove the unusable worker layer in the later Build Mode mission;
- in-process bounded parsing;
- verified/adequate platform CPU boundary;
- narrow per-business pre-parse concurrency/rate guard;
- opaque platform-failure sanitization;
- existing upload/decompression/data-shape limits;
- parse-before-write ordering;
- controlled runtime verification;
- Security implementation re-verification.

### Build Later

- cheaper pre-parser row/column rejection optimizations if later evidence shows value.

### Add-on

- none.

### Separate Product / Infrastructure

- dedicated ingestion/parsing service only if future scale evidence requires it.

### Reject for this mission

- queue-based import redesign;
- Cloudflare Workflows job architecture;
- Durable Object workflow architecture unless a narrowly scoped guard primitive later proves necessary and is separately reviewed;
- client-side parser migration;
- separate parsing microservice;
- weakening upload/decompression limits;
- Promise.race/AbortController as sole compute containment;
- new public Catalog command;
- permission expansion;
- Product Truth redesign.

---

## 9. Required Completion Report

Create:

`communication/live/report1.94.md`

The report must include:

- exact latest `main` SHA reviewed;
- EC-1 authoritative CPU-ceiling evidence, or exact evidence gap;
- CPU-ceiling adequacy classification;
- EC-2 guard primitive classification and smallest implementation impact;
- confirmation that guard identity is server-derived `businessId` and cross-business isolation remains intact;
- EC-3 sanitization contract confirmation;
- standalone amended Build Contract confirmation;
- all assumptions and unresolved facts;
- confirmation that no application implementation, dependency, migration, Supabase mutation, Lovable mutation/publish, production-data mutation, or domain cutover occurred.

Return exactly one verdict:

- `PARSER ISOLATION AMENDMENT READY FOR SECURITY RE-REVIEW`
- `PARSER ISOLATION AMENDMENT CHANGES REQUIRED`
- `PARSER ISOLATION AMENDMENT STOPPED — EVIDENCE GAP`

A positive verdict does **not** authorize Build Mode.

---

## 10. Stop Rules

STOP rather than improvising if:

- project-specific CPU-ceiling evidence cannot be established within read-only authority;
- the guard requires a material new architecture not authorized here;
- satisfying the guard would require Product Truth or permission changes;
- any required evidence depends on public publish/deployment mutation;
- latest `main` materially changes the reviewed architecture;
- evidence conflicts with the selected in-process architecture.

Record the exact blocker in `report1.94.md`.

---

## 11. Mandatory Next Gate

After `report1.94.md` is human-reviewed and merged, Mission Control must evaluate it.

If and only if the verdict is positive and the CPU evidence is sufficient, Mission Control must issue a **short bounded Security & Permissions Architecture re-review**.

Only a subsequent explicit Security verdict of:

`PARSER ISOLATION SECURITY ARCHITECTURE READY FOR BUILD LOCK`

may permit Mission Control to issue a separate Claude Code Build Mode instruction.

Production migration remains blocked throughout.

---

**Next logical step:** human-review and merge the authorization PR for this instruction, then Infrastructure Operations executes the evidence-closure mission and returns `communication/live/report1.94.md`.