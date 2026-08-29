# SMART BUSINESS MISSION CONTROL

# SB-P-1.11-GC-1 — PARSER ISOLATION ARCHITECTURE RECONCILIATION

**Instruction ID:** instruction1.85  
**Mission ID:** SB-P-1.11-GC-1  
**Mission Name:** Parser Isolation Architecture Reconciliation  
**Reporting Room:** 02_Claude_Engineering — Claude Code in VS Code  
**Mission Mode:** PLAN MODE / ARCHITECTURE ONLY  
**Mission Status:** ACTIVE AFTER HUMAN MERGE  
**Authorized By:** Mission Control  
**Implementation Authority:** NONE  
**Production Migration Authority:** NONE  
**Lovable Publish / Deploy Authority:** NONE  
**Domain-Cutover Authority:** NONE

---

## 1. Mission Objective

Determine the smallest production-compatible parser-isolation architecture that can replace the current non-viable `node:worker_threads` implementation while preserving the security outcomes already required for Smart Business bulk catalog import.

This mission exists because merged `communication/live/report1.91.md` established two facts:

1. the current runtime-computed `process.cwd()/src/lib/catalog-import/parse-worker.ts` worker entry is not included in the production build artifact; and
2. more importantly, the actual Cloudflare/workerd deployment model does not provide a functioning `node:worker_threads.Worker` implementation suitable for the current design.

Therefore `node:worker_threads` is no longer a locked implementation primitive.

The security outcomes remain locked.

This mission must reconcile the architecture before any new implementation work begins.

---

## 2. Canonical Baseline

Start from latest merged `main`.

At authorization time:

`34c1d43d9e635a24442caadf6a7254d090bd677b`

Before beginning, fetch latest `main` and report the exact SHA actually reviewed.

GitHub `main` remains canonical.

Do not rely on Lovable workspace state as source of truth.

---

## 3. Required Reading

Read the actual repository implementation and at minimum:

- `communication/live/instruction1.84.md`
- `communication/live/report1.86.md`
- `communication/live/report1.87.md`
- `communication/live/report1.90.md`
- `communication/live/report1.91.md`
- current Catalog import implementation and tests
- current Vite/Nitro/Cloudflare deployment configuration
- current server-function/authentication/Supabase client boundaries

Also inspect repository history deeply enough to avoid re-proposing a previously rejected architecture without acknowledging why it was rejected.

---

## 4. Locked Security Outcomes

The replacement architecture must preserve all of the following outcomes.

### ISO-SEC-1 — Untrusted Parser Containment

Merchant-supplied CSV/XLSX content must not be able to monopolize or destabilize the ordinary authenticated request-handling path.

The architecture must provide a meaningful execution boundary appropriate to the actual production platform.

### ISO-SEC-2 — Enforceable Bounded Execution

The parser must have an enforceable wall-clock and/or platform-enforced compute boundary.

A timeout that merely stops awaiting a still-running parser is insufficient.

### ISO-SEC-3 — Produced-Byte Containment

The existing hostile XLSX/ZIP decompression protection must remain effective against actual produced bytes, not merely declared archive sizes.

### ISO-SEC-4 — Sanitized Failure Boundary

Parser and infrastructure failures exposed to callers must remain allowlisted and sanitized.

No raw stack traces, runtime internals, secrets, paths, SQL details, or privileged error objects may reach browser responses or merchant-visible logs.

### ISO-SEC-5 — Secret Isolation

No service-role credential or other privileged environment value may enter parser payloads, browser bundles, client-visible output, or public logs.

### ISO-SEC-6 — Authority Separation

Catalog authority remains unchanged:

- caller JWT / RLS governs Catalog reads and public Catalog commands;
- narrow server-only privileged bookkeeping remains limited to approved import support tables;
- parser execution itself must not become an authority source.

### ISO-SEC-7 — Tenant and Data Safety

Business isolation, RLS, claim ordering, idempotency, duplicate handling, follow-up state, hard-delete protection, and all existing import integrity rules remain unchanged unless Mission Control separately authorizes a change.

### ISO-SEC-8 — Product Truth Boundary

Exactly nineteen public Catalog commands remain.

No twentieth command.

No change to Product Truth.

---

## 5. Architecture Reconciliation Questions

Answer all of the following before selecting an architecture.

### ARC-1 — Actual Runtime Contract

State the actual production execution model the replacement must run on.

Distinguish verified platform capability from assumption.

Do not treat `nodejs_compat` import resolution as proof that a Node primitive is functional.

### ARC-2 — Candidate Architectures

Evaluate at least three technically distinct candidate approaches where credible.

Candidates may include current-platform primitives, browser/server split designs, isolated platform services, or another bounded execution model.

Do not include a candidate merely to satisfy the count if it is clearly impossible.

For every candidate, state:

- execution boundary;
- cancellation/budget mechanism;
- hostile XLSX containment approach;
- trust boundary;
- secret exposure surface;
- data movement;
- deployment/runtime dependency;
- operational complexity;
- cost implications;
- failure/retry behavior;
- auditability;
- effect on current import workflow;
- evidence needed to prove production compatibility.

### ARC-3 — Security Equivalence

Map every candidate explicitly against ISO-SEC-1 through ISO-SEC-8.

A candidate that weakens a locked security outcome must be marked unsuitable unless the mission stops for Mission Control decision.

### ARC-4 — Product and UX Impact

Confirm whether each candidate changes merchant-visible behavior.

The target remains the approved Phase 1 bulk-import experience:

- CSV/XLSX;
- valid rows save;
- invalid rows quarantined;
- no silent overwrite;
- deterministic duplicate/correction handling;
- Owner authority and current fail-closed staff boundary.

Avoid turning a runtime correction into a new merchant workflow.

### ARC-5 — Infrastructure Expansion

Identify whether a candidate requires any new platform service, queue, worker service, durable object, storage layer, scheduled job, external runtime, or paid infrastructure dependency.

If yes, classify it explicitly as:

- Build Now;
- Build Later;
- Add-on;
- Separate Product; or
- Reject.

Prefer the smallest architecture that satisfies the locked security outcomes and actual runtime constraints.

### ARC-6 — Data Residency and Privacy

State where uploaded file bytes and parsed row data exist at every stage.

Raw spreadsheet data must remain transient unless a separately approved architecture explicitly requires storage.

No silent new retention surface.

### ARC-7 — Cancellation Semantics

Prove conceptually how the chosen architecture actually stops or contains runaway parser work.

Do not use `Promise.race`, request abortion, or response timeout alone as proof of parser termination.

### ARC-8 — Production Verification Path

Define the exact bounded evidence Mission Control will need after implementation to prove the chosen architecture works on the real Lovable production deployment model.

Avoid another chain of speculative runtime assumptions.

### ARC-9 — Rollback and Failure Safety

Define how the architecture fails closed if parser execution is unavailable, exceeds limits, or returns malformed output.

No partial authority escalation and no hidden data mutation.

### ARC-10 — Repository Impact

List the expected files/modules/dependencies/infrastructure configuration that implementation would need to add, modify, or remove.

This is planning only; do not change them during this mission.

---

## 6. Selection Standard

Select exactly one recommended architecture only when all of the following are true:

1. it is compatible with the verified production runtime contract;
2. it preserves ISO-SEC-1 through ISO-SEC-8;
3. its cancellation/containment semantics are real, not cosmetic;
4. its deployment path can be directly verified after implementation;
5. it does not create unnecessary infrastructure or technical debt;
6. it preserves the approved merchant bulk-import workflow;
7. it has a bounded implementation footprint appropriate to Phase 1.

If no candidate satisfies all seven conditions, do not force a recommendation.

Return the STOP verdict defined below and state the exact unresolved decision or platform capability gap.

---

## 7. Required Implementation Contract

If a viable architecture is selected, produce an implementation-ready contract inside `report1.92.md` containing:

- selected architecture name;
- runtime topology;
- trust boundaries;
- request/data flow step-by-step;
- parser execution boundary;
- cancellation/compute-budget mechanism;
- CSV handling;
- XLSX/decompression handling;
- allowed parser inputs;
- allowed parser outputs;
- failure categories;
- sanitization boundary;
- secret boundary;
- auth/RLS boundary;
- idempotency/claim interaction;
- file-size/row/column/cell/runtime limits;
- dependency changes;
- infrastructure changes;
- exact implementation file impact;
- test matrix;
- production-runtime verification matrix;
- rollback/fail-closed behavior;
- explicit non-goals.

The contract must be standalone enough for a later Claude Code Build Mode instruction to implement without inventing architecture.

Do not write implementation code in this mission.

---

## 8. Mandatory Classification

Classify the selected architecture and major rejected alternatives using the Smart Business execution categories:

- **Build Now**
- **Build Later**
- **Add-on**
- **Separate Product**
- **Reject**

The selected Phase 1 path should be **Build Now** only if it is the smallest safe production-compatible route.

---

## 9. Required Evidence Discipline

Architecture claims must distinguish:

- verified repository fact;
- verified build/runtime evidence;
- official platform contract/documentation;
- engineering inference;
- unresolved assumption.

Do not convert inference into fact.

If external platform documentation is used, record the exact source/title and what claim it supports.

Do not rely only on local `vite dev` behavior.

---

## 10. No-Implementation Boundary

This mission authorizes analysis, repository inspection, local read-only/build investigation, and architecture documentation only.

It does **not** authorize:

- application-code changes;
- parser-code changes;
- dependency changes;
- migration creation/application;
- Supabase mutation;
- Lovable mutation;
- Lovable publish/deploy;
- temporary public probe;
- production-data mutation;
- domain cutover;
- Product Truth changes;
- permission expansion;
- twentieth Catalog command;
- unrelated refactoring.

If architecture proof requires any of those actions, stop and report the evidence/authority gap.

---

## 11. Required Output

Create exactly:

`communication/live/report1.92.md`

The report must include:

1. exact `main` SHA reviewed;
2. actual production runtime contract;
3. candidate architecture comparison;
4. ISO-SEC-1 through ISO-SEC-8 mapping;
5. selected architecture or explicit no-selection decision;
6. Build Now / Build Later / Add-on / Separate Product / Reject classification;
7. standalone implementation contract if a candidate is selected;
8. exact expected repository/infrastructure impact;
9. exact controlled runtime verification plan;
10. exact Security re-verification scope after runtime proof;
11. explicit confirmation that no implementation or production mutation occurred.

Return exactly one final verdict:

`PARSER ISOLATION ARCHITECTURE READY FOR BUILD-GATE REVIEW`

or

`PARSER ISOLATION ARCHITECTURE CHANGES REQUIRED`

or

`PARSER ISOLATION ARCHITECTURE STOPPED — AUTHORITY OR EVIDENCE GAP`

Open one completion PR and stop.

Do not self-merge.

---

## 12. Post-Mission Gate Sequence

A positive report does **not** authorize Build Mode automatically.

The required sequence after human review/merge is:

1. Mission Control reviews `report1.92.md`.
2. Mission Control checks that the implementation contract is standalone and production-runtime assumptions are evidenced.
3. Because parser isolation is a security boundary, Mission Control must obtain a bounded Security & Permissions Architecture review of the selected architecture before Build Mode.
4. Only after a positive architecture/security gate may Mission Control issue a separate Claude Code Build Mode instruction.
5. Claude Code implements only the locked architecture.
6. Mission Control authorizes the minimum controlled runtime verification required for the corrected architecture.
7. After positive runtime proof, Security & Permissions Architecture performs final implementation re-verification.
8. Only an explicit positive merged Security verdict may allow Mission Control to consider a production-migration gate.

Production migration remains blocked throughout this sequence.

---

## 13. Stop Rules

STOP and report instead of widening scope if:

- no production-compatible architecture can preserve the locked security outcomes;
- the only viable path requires a new infrastructure class that needs Founder/Mission Control product or cost approval;
- required platform capability cannot be established without deployment/mutation authority;
- the selected approach would materially change Product Truth or the approved merchant workflow;
- a twentieth Catalog command becomes necessary;
- implementation would require weakening tenant/RLS/secret boundaries;
- architecture depends on an unresolved platform assumption that cannot be verified in this mission.

Do not hide an architecture decision inside an implementation workaround.

---

## 14. Mission Control Boundary

This is a reconciliation mission, not a redesign of Smart Business philosophy or Product Truth.

The purpose is to replace one technically invalid implementation primitive while preserving the approved user experience, financial/data integrity, security outcomes, simplicity, and human decision ownership.

No other scope is reopened.
