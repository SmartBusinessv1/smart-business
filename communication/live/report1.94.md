# SMART BUSINESS — INFRASTRUCTURE OPERATIONS EVIDENCE-CLOSURE REPORT

## SB-P-1.11-GC-1 — Parser Isolation Architecture Amendment / Evidence Closure

**Report ID:** report1.94  
**Authorized By:** `communication/live/instruction1.87.md`  
**Executing Room:** Infrastructure Operations  
**Mode:** EVIDENCE CLOSURE + ARCHITECTURE AMENDMENT ONLY  
**Build Mode Authority:** NONE  
**Production Migration Authority:** NONE  
**Lovable Publish Authority:** NONE  
**Production Data Mutation Authority:** NONE

---

## 1. Final Verdict

`PARSER ISOLATION AMENDMENT STOPPED — EVIDENCE GAP`

The EC-2 per-business pre-parse guard contract and EC-3 platform-failure sanitization / parse-before-write contract can be locked as architecture requirements. However, EC-1 remains unresolved: no authoritative project-specific evidence available under the current read-only authority identifies the effective Cloudflare per-request CPU-time ceiling for the actual authorized Smart Business Lovable deployment.

Because the selected In-Process Bounded Parsing architecture depends on that external involuntary CPU ceiling as its parser-execution backstop, Build Lock cannot proceed from this mission.

---

## 2. Exact `main` SHA Reviewed

Latest merged GitHub `main` reviewed:

`86a08f45af1c29010942aa16ef278c7ed17ad00f`

Commit:

`Authorize parser isolation architecture amendment and evidence closure (#206)`

No later merged `main` commit was present at mission start.

---

## 3. Canonical Inputs Reviewed

Reviewed from merged `main` and the authorized project/runtime evidence chain:

- `communication/live/instruction1.87.md`
- `communication/live/report1.93.md`
- `communication/live/instruction1.86.md`
- `communication/live/report1.92.md`
- `communication/live/report1.91.md`
- `communication/live/report1.90.md`
- current `src/server-functions/catalog-import.ts`
- current Catalog import parser boundary under `src/lib/catalog-import/**`
- current caller-JWT / Owner / business re-derivation boundary
- current service-role bookkeeping boundary
- authorized Lovable project metadata and project files
- current production Supabase table inventory, read-only

No material GitHub architecture change was found after `report1.93.md`; latest `main` adds only the canonical instruction authorizing this evidence-closure mission.

---

## 4. EC-1 — Effective Production CPU Ceiling Evidence

### 4.1 Authorized production target

Authorized Lovable project:

`f3e992ec-06df-4d49-b157-b92ec064c078`

The project remains the governed Smart Business Lovable target.

### 4.2 Project-specific evidence inspected

Read-only project inspection established:

- `.lovable/project.json` contains only the Lovable template/revision identity and no CPU/runtime limit;
- no `wrangler.toml`, `wrangler.json`, or `wrangler.jsonc` exists in the project source;
- no `limits.cpu_ms` value is present in `vite.config.ts` or `package.json`;
- the project `vite.config.ts` confirms Lovable's build-only Nitro configuration uses Cloudflare as the default target, but it does not expose an effective deployed CPU ceiling;
- available Lovable publish metadata exposes publication/visibility state but no Cloudflare Worker plan, account tier, deployed Worker control-plane configuration, or `cpu_ms` value;
- the connected Lovable tool surface exposes no read-only Cloudflare control-plane record for this project's deployed Worker;
- the project is currently unpublished, so there is no currently active production Worker artifact available through the connected project metadata from which an explicit project-specific `limits.cpu_ms` value can be read.

No Free-vs-Paid inference was made.

No local Vite, Wrangler, Miniflare, or generic Cloudflare documentation was treated as project-specific proof.

### 4.3 EC-1 disposition

**Disposition:** `EVIDENCE GAP — BLOCKING`

The exact effective per-request CPU-time ceiling for the actual authorized Smart Business production deployment cannot be authoritatively established within the current read-only authority.

Closing this fact requires one of the evidence forms permitted by `instruction1.87.md`, such as:

- Lovable/platform support evidence explicitly tied to project `f3e992ec-06df-4d49-b157-b92ec064c078`;
- Cloudflare control-plane/configuration evidence for the exact deployed Worker; or
- a platform-authoritative deployed artifact exposing an explicit effective `limits.cpu_ms` value.

Obtaining that evidence would require access/permission not presently available, or a future deployment state. This mission does not authorize a publish/deploy merely to discover the value.

### 4.4 CPU-ceiling adequacy classification

Existing engineering estimates from `report1.92.md` remain:

- maximum-shape CSV local CPU estimate: approximately **30 ms**;
- maximum-shape XLSX local CPU estimate: approximately **1,172 ms**.

These are not production Cloudflare measurements.

**Adequacy classification:** `UNRESOLVED`

No positive adequacy decision is permitted until the project-specific effective CPU ceiling is known. The local benchmark values may later be used only as comparative engineering estimates against the authoritative ceiling and then followed by controlled runtime verification.

---

## 5. EC-2 — Minimal Per-Business Pre-Parse Abuse Guard

### 5.1 Contract confirmation

The amended Build Contract is confirmed as follows:

1. authenticate the caller first;
2. re-derive Owner status and the authoritative `businessId` server-side;
3. evaluate the guard only after that derivation;
4. execute the guard before expensive CSV/XLSX parsing;
5. permit a maximum of **one expensive import preview in flight per business**;
6. apply a bounded short-window attempt limit so repeated malformed, rejected, or platform-terminated requests cannot create rapid retry/burst abuse;
7. fail same-business excess attempts closed with one fixed sanitized merchant-facing result such as `IMPORT_BUSY_TRY_AGAIN`;
8. key all guard state only by authoritative server-derived business identity;
9. preserve full cross-business isolation;
10. store no raw file bytes, parsed rows, cells, Reference Cost, credentials, JWTs, service-role material, or parser output in guard state;
11. grant no Product Truth authority and execute no Catalog command;
12. create no import batch/row merely because guard acquisition failed;
13. use expiry/lease semantics that remain safe if platform termination prevents application `finally` cleanup;
14. introduce no queue, Workflow job architecture, separate parser service, permission expansion, or twentieth Catalog command.

### 5.2 Existing implementation boundary evidence

Current `catalogImportPreview` already re-derives the caller's business through the caller-JWT Supabase client using the authoritative `businesses.owner_id` relation. The browser does not supply authoritative `businessId` for this decision.

Current production public-schema inventory does not contain an existing purpose-built import-preview concurrency/rate-guard state table or equivalent durable lease primitive.

Process-local memory is not acceptable because it is not a cross-request security control on an edge runtime and cannot satisfy safe expiry/release after involuntary platform termination.

### 5.3 Guard primitive classification

`BUILD CONTRACT REQUIRES A NARROW NEW SUPPORT PRIMITIVE`

Smallest required implementation impact for a future separately authorized Build Mode mission:

- a narrowly scoped durable/shared per-business preview-guard primitive;
- keyed only by server-derived `businessId`;
- atomic acquire/deny semantics;
- one active lease per business;
- bounded lease expiry independent of application `finally`;
- bounded short-window attempt accounting/expiry;
- no payload/business data beyond opaque guard timestamps/state required for concurrency/rate enforcement;
- no Product Truth authority;
- no Catalog command;
- no queue/job semantics.

A compact Supabase-backed lease/rate support structure with a narrowly scoped atomic RPC is the smallest presently identifiable fit because the existing deployment already has shared PostgreSQL infrastructure, while no existing table satisfies the full contract. This is an architecture classification only; no schema/function implementation is authorized or performed here.

---

## 6. EC-3 — Platform Failure Sanitization and Parse-Before-Write Contract

The amended platform-failure contract is confirmed and must be immutable for the later Build Mode mission:

1. parsing, validation, and classification must complete before any import-support write or Product Truth mutation;
2. unexpected/non-success, malformed, truncated, or platform-generated preview responses are treated as opaque runtime failures by client/server-function transport handling;
3. merchant UI receives only a fixed Smart Business generic retry message/code;
4. raw Cloudflare response bodies, including Error 1102 text, must never be rendered directly to merchants;
5. stack traces, filesystem/source paths, environment values, JWTs, Supabase credentials, SQL details, internal request metadata, and merchant file contents must not be echoed to UI;
6. logs remain sanitized and do not log raw uploaded rows/cells because transport or runtime execution failed;
7. expected parser/validation failures continue to use the closed merchant-facing taxonomy;
8. a platform CPU/resource kill during preview must leave zero import batch/row writes and zero Catalog mutation because parsing completes before privileged bookkeeping access;
9. controlled runtime verification after implementation must deliberately exercise the opaque-failure path and verify the merchant-visible sanitization boundary.

The current server orchestration already demonstrates the required authority ordering concept: caller-JWT authentication and business derivation occur first, parsing/validation/classification occur before the dynamic import of the privileged service-role bookkeeping client, and Product Truth mutation is not part of preview. The later implementation must preserve and strengthen that order while replacing the unusable worker layer.

**EC-3 disposition:** `CONFIRMED AS BUILD CONTRACT`.

---

## 7. Standalone Amended Build Contract Confirmation

The standalone **In-Process Bounded Parsing — Amended Contract** in `instruction1.87.md` is confirmed without redesign:

- caller authenticated and Owner/business re-derived server-side;
- authoritative per-business pre-parse abuse guard executes before expensive parsing;
- 5 MB compressed file cap retained;
- raw upload transient/in-memory only;
- CSV/XLSX structural validation retained;
- XLSX 25 MB actual-produced decompressed-byte cap retained before ExcelJS workbook materialization;
- parser moves to in-process execution only in the future Build Mode correction;
- 2,000-row / 40-column / 2,000-character cell limits remain mandatory downstream/data-shape limits, not falsely represented as complete pre-parser CPU containment;
- business validation and Reference Cost authority preserved;
- duplicate/category classification stays caller-JWT governed;
- privileged bookkeeping support-table access occurs only after successful complete parsing/validation/classification;
- preview performs no Product Truth mutation;
- commit remains caller-JWT governed through exactly nineteen public Catalog commands;
- unexpected/platform failure is opaque to merchant UI and leaves no partial preview write;
- production acceptance requires controlled runtime evidence on the actual deployment target;
- final Security implementation re-verification remains mandatory before production migration.

The contract is architecture-ready in EC-2/EC-3 terms but cannot receive a positive overall amendment verdict while EC-1 remains unresolved.

---

## 8. Assumptions and Unresolved Facts

### Confirmed

- authorized Lovable project identity is fixed at `f3e992ec-06df-4d49-b157-b92ec064c078`;
- Cloudflare is the Lovable build target indicated by the project template configuration;
- current source contains no explicit project `limits.cpu_ms` configuration;
- no accessible Lovable project metadata field provides the effective CPU ceiling;
- current production schema has no existing purpose-built guard primitive satisfying EC-2;
- current server orchestration already uses server-derived business identity and preserves caller-JWT vs. service-role separation.

### Unresolved

- exact Cloudflare plan/account context serving a future/current production deployment;
- exact effective per-request `cpu_ms` for the authorized Smart Business deployed Worker;
- whether Lovable applies an internal CPU override outside project-visible source;
- final implementation details of the narrow durable guard primitive, pending Build Mode authority;
- production-runtime adequacy of in-process parsing until EC-1 is closed and controlled runtime verification is later performed.

No Free-vs-Paid assumption is made.

---

## 9. Operational Boundary / Lovable Read-Only Inspection Note

No application implementation, dependency change, Supabase migration, Supabase write, production-data mutation, Lovable publish/deploy, domain cutover, Product Truth change, permission change, or twentieth Catalog command was performed.

During the attempt to obtain project-specific CPU evidence, a Lovable **plan-mode/read-only** evidence query was issued with explicit no-edit/no-publish instructions. The Lovable agent reported no intended mutation, but the platform advanced the project commit from `1453be2b0d44b117ba6760ce47f200daf3285468` to `71c78b2e5fcb97f08265c762708be91f8e4613f5` and a read-only diff inspection shows an automatically generated edit to `src/routeTree.gen.ts` adding TanStack Start module type declarations.

This was not requested, is unrelated to the mission, and is therefore recorded as an **unexpected Lovable-generated source mutation**. No attempt was made to hide it or to widen authority by reverting it. Per stop discipline, no further Lovable mutation was performed.

The project remains unpublished.

This operational incident does not provide CPU-ceiling evidence and must be reviewed separately before any future Lovable synchronization/publish activity.

---

## 10. Explicit No-Mutation / No-Authority Expansion Record

Performed:

- GitHub/read-only repository inspection;
- Lovable project/file/publish-metadata inspection;
- Supabase read-only table inventory;
- report creation on a GitHub completion branch.

Not performed:

- application implementation;
- parser redesign/implementation;
- dependency change;
- Supabase migration;
- Supabase DDL/DML mutation;
- production business-data mutation;
- Lovable publish/deploy;
- domain cutover;
- Product Truth change;
- permission change;
- Catalog command addition.

Exception requiring explicit disclosure: the unexpected Lovable-generated `src/routeTree.gen.ts` source diff described in §9 occurred despite plan-mode/read-only instructions.

---

## 11. Required Next Gate

Production migration remains blocked.

Build Mode must not be authorized from this report because EC-1 is still unresolved.

Mission Control must determine a permitted authoritative path to obtain the project-specific effective CPU ceiling without guessing plan tier or using local evidence as proof. After EC-1 is closed, the amended contract may return for the short bounded Security & Permissions Architecture re-review required by `instruction1.87.md`.

---

## 12. Final Verdict

`PARSER ISOLATION AMENDMENT STOPPED — EVIDENCE GAP`
