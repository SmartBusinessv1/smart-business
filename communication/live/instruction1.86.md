# SMART BUSINESS MISSION CONTROL

# SB-P-1.11-GC-1 — Parser Isolation Security Architecture Review

**Instruction ID:** instruction1.86  
**Mission:** SB-P-1.11-GC-1 — Parser Isolation Security Architecture Review  
**Reporting Room:** Security & Permissions Architecture  
**Mission Status:** ACTIVE AFTER HUMAN MERGE  
**Authorized By:** Mission Control  
**Mode:** REVIEW ONLY / ARCHITECTURE GATE  
**Implementation Authority:** NONE  
**Production Migration Authority:** NONE  
**Lovable Mutation / Publish Authority:** NONE  
**Production Data Mutation Authority:** NONE  
**Domain Cutover Authority:** NONE

---

## 1. Mission Objective

Perform a bounded security architecture review of the parser-isolation replacement selected in:

`communication/live/report1.92.md`

The selected candidate is:

**In-Process Bounded Parsing**

This architecture removes the non-functional `node:worker_threads` layer and proposes relying on:

1. existing strict structural pre-validation limits; and
2. Cloudflare Workers' platform-enforced per-request CPU-time ceiling

as the production containment model.

Your task is to determine whether this selected architecture can preserve the approved Smart Business security outcomes sufficiently to proceed to a separate Build Mode instruction.

This mission does **not** authorize implementation.

---

## 2. Canonical Baseline

Review latest merged `main` beginning from:

`be0c8f53a9f01ed9264aa17d343cec3cec2d84ce`

Before review, verify current `main` and use the latest merged state if newer communication-only commits exist.

Required reading:

- `communication/live/instruction1.85.md`
- `communication/live/report1.92.md`
- `communication/live/report1.91.md`
- `communication/live/report1.90.md`
- `communication/live/report1.87.md`
- `communication/live/report1.86.md`
- current `src/lib/catalog-import/**`
- current `src/server-functions/catalog-import.ts`
- current Supabase auth/service-role boundaries
- current Catalog import tests and security tests
- current deployment/build configuration relevant to Cloudflare/Lovable runtime

Do not rely on stale worker-thread assumptions that have already been disproven by merged runtime evidence.

---

## 3. Architecture Under Review

The selected architecture in `report1.92.md` is **In-Process Bounded Parsing**.

Expected implementation shape, if later authorized:

- remove the `node:worker_threads` parser execution layer;
- invoke the existing governed CSV/XLSX parser functions directly inside the authenticated server request;
- preserve current file-size, decompressed-byte, row, column, and cell limits;
- preserve `node:zlib` real produced-byte containment;
- preserve sanitized failure boundaries;
- preserve server-only secret isolation;
- preserve caller-JWT Catalog authority;
- preserve current RLS/tenant boundaries;
- preserve current import idempotency/integrity rules;
- preserve exactly nineteen public Catalog commands;
- use Cloudflare's actual platform CPU-time ceiling as the involuntary compute backstop rather than application-level `Promise.race`, abort, or timer logic.

No separate queue, service, Durable Object, workflow system, background job framework, client-side parser migration, or new public API is part of the selected Build Now architecture.

---

## 4. Locked Security Outcomes

Review the selected architecture against these outcomes. The specific `worker_threads` primitive is no longer locked; the outcomes are.

### ISO-SEC-1 — Hostile-input containment

A malicious or pathological CSV/XLSX upload must not create unbounded shared-resource consumption.

Assess whether the combined structural limits + actual platform CPU boundary provide meaningful containment on the authorized deployment runtime.

### ISO-SEC-2 — Enforceable bounded execution

The parser execution budget must be genuinely enforced by a boundary the application cannot silently overrun.

Application-only timers, `Promise.race`, `AbortController`, or cooperative checks are not sufficient by themselves.

Determine whether the actual Cloudflare CPU-time boundary satisfies this requirement and what exact configuration/evidence is mandatory.

### ISO-SEC-3 — Produced-byte XLSX containment

The existing real decompressed-output cap must remain effective and must not regress.

### ISO-SEC-4 — Sanitized failure boundary

Malformed files, parser failures, platform CPU exhaustion, and unexpected runtime exceptions must not expose stack traces, internal paths, environment values, privileged details, or raw hostile content.

Pay particular attention to the proposed failure mode when the Cloudflare platform terminates a request for CPU overrun.

### ISO-SEC-5 — Secret isolation

No service-role secret or privileged server material may be exposed to browser bundles, parser inputs/outputs, logs, error responses, or merchant-controlled data.

### ISO-SEC-6 — Tenant and authority integrity

Caller-JWT Catalog authority, business isolation, RLS boundaries, Owner-only current Phase 1 behavior, and fail-closed Manager/Employee behavior must remain unchanged.

### ISO-SEC-7 — Import workflow integrity

Atomic claim ordering, replay/idempotency behavior, durable follow-up state, duplicate handling, hard-delete protection, support-table boundaries, and audit evidence must remain intact.

### ISO-SEC-8 — Public Product Truth boundary

Exactly nineteen public Catalog commands must remain. No twentieth command or hidden authority expansion may be introduced to compensate for the parser architecture change.

---

## 5. Mandatory Review Questions

Security must answer each explicitly.

### SEC-ARC-1 — Actual CPU ceiling

Is the actual effective Cloudflare Workers CPU-time ceiling for the authorized Lovable production runtime known and verified?

If not, state exactly what evidence must be obtained before Build Mode or before controlled runtime verification.

Do not infer the plan tier from expected SSR behavior.

### SEC-ARC-2 — Ceiling adequacy

Given the current locked maximum input limits and the benchmark evidence in `report1.92.md`, is the effective CPU ceiling sufficient to allow legitimate maximum-bound imports while still providing useful hostile-input containment?

Distinguish verified evidence from estimates.

### SEC-ARC-3 — Same-isolate risk

Does moving parsing into the request-handling isolate create an unacceptable denial-of-service, cross-request, or cross-tenant availability risk despite Cloudflare's platform CPU boundary and structural caps?

Do not claim hard per-tenant isolate separation unless directly proven.

### SEC-ARC-4 — CPU exhaustion failure behavior

If Cloudflare terminates a request for exceeding CPU limits, can Smart Business preserve an acceptable sanitized merchant-facing failure boundary without leaking internals or leaving inconsistent import-support state?

Specify any Build Mode requirement needed to make this safe.

### SEC-ARC-5 — Ordering of parsing and writes

Confirm that all untrusted parsing and structural validation must complete before privileged support-table mutation or governed Catalog mutation begins, unless existing architecture already provides an explicitly safe compensating boundary.

Identify the exact required ordering.

### SEC-ARC-6 — Memory and decompression containment

Confirm whether CPU-time containment alone is insufficient for memory/decompression attacks and whether the existing 5 MB compressed / 25 MB actual decompressed / row-column-cell limits remain mandatory.

### SEC-ARC-7 — Concurrency abuse

Assess repeated concurrent imports by one authenticated owner/business. Determine whether existing application/platform protections are sufficient for Phase 1 or whether a bounded per-business concurrency/rate guard is required before Build Mode.

Do not authorize a broad queue/service redesign merely as a precaution.

### SEC-ARC-8 — Architecture minimality

Determine whether In-Process Bounded Parsing is the smallest safe Phase 1 architecture or whether a different candidate from `report1.92.md` is security-required.

If rejecting the selected candidate, identify the minimum replacement and explain why the selected architecture cannot satisfy the locked security outcomes.

---

## 6. Build-Gate Conditions

A positive Security verdict must define a **standalone Build Mode security contract** for Claude Code.

At minimum, state:

- exact files/components permitted to change;
- which worker files/imports must be removed or retired;
- mandatory retained structural limits;
- exact required parse-before-write sequencing;
- exact sanitized handling expectations for normal parser failure and platform/runtime failure;
- required tests for hostile CSV/XLSX, decompression, maximum-bound legitimate files, auth, RLS/tenant isolation, replay/idempotency, and zero twentieth command;
- required evidence regarding effective Cloudflare CPU configuration;
- what must be proven in controlled runtime verification after Build Mode;
- what final Security implementation re-verification must retest.

Do not leave a positive verdict dependent on unstated architectural decisions.

---

## 7. Classification Boundary

For this review, use these classifications:

**Build Now** — only the minimum parser isolation replacement and safety controls required for Phase 1 Catalog import.

**Build Later** — optimizations or observability that are useful but not required for safe Phase 1 operation.

**Add-on** — optional merchant/admin controls that do not belong in core parser safety.

**Separate Product** — independent ingestion/ETL infrastructure not justified by current Smart Business scope.

**Reject** — unnecessary complexity, fake timeout mechanisms presented as security, a twentieth Catalog command, cross-tenant authority expansion, or architecture that weakens existing security outcomes.

---

## 8. Locked Exclusions

This mission must not:

- implement any code;
- change dependencies;
- edit database schema;
- apply any Supabase migration;
- mutate test or production Supabase;
- modify Lovable;
- publish/deploy Lovable;
- perform domain cutover;
- change Product Truth;
- change merchant-visible feature scope;
- expand Manager/Employee permissions;
- add a twentieth public Catalog command;
- authorize production migration;
- authorize public release.

If evidence requires an action outside this review boundary, record it as a required follow-up evidence gate rather than performing it.

---

## 9. Required Output

Create:

`communication/live/report1.93.md`

The report must include:

1. exact `main` SHA reviewed;
2. selected architecture reviewed;
3. SEC-ARC-1 through SEC-ARC-8 findings;
4. ISO-SEC-1 through ISO-SEC-8 disposition;
5. any unresolved assumptions/evidence gaps;
6. Build Now / Build Later / Add-on / Separate Product / Reject classification;
7. standalone Build Mode security contract if positive;
8. controlled runtime verification requirements;
9. final Security implementation re-verification scope;
10. exactly one final verdict.

Allowed final verdicts:

`PARSER ISOLATION SECURITY ARCHITECTURE READY FOR BUILD LOCK`

`PARSER ISOLATION SECURITY ARCHITECTURE CHANGES REQUIRED BEFORE BUILD LOCK`

`PARSER ISOLATION SECURITY ARCHITECTURE STOPPED — EVIDENCE GAP`

Open one completion PR and stop.

Do not self-merge.

---

## 10. Gate Rule

Even a positive Security architecture verdict does **not** authorize Build Mode by itself.

Mission Control must review the merged `report1.93.md` and then issue a separate canonical Claude Code Build Mode instruction.

After Build Mode:

1. human review and merge;
2. Mission Control review;
3. minimum controlled runtime verification on the actual authorized deployment runtime;
4. final Security implementation re-verification;
5. only after an explicit positive merged Security verdict may Mission Control consider a production-migration gate.

Production migration remains blocked throughout this mission.
