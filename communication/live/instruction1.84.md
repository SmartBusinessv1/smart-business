# SMART BUSINESS MISSION CONTROL

# SB-P-1.11-GC-1 — Parser Runtime Compatibility Correction

**Instruction ID:** `instruction1.84`  
**Mission:** `SB-P-1.11-GC-1 — Parser Runtime Compatibility Correction`  
**Reporting Room:** `02_Claude_Engineering` — Claude Code in VS Code  
**Mission Status:** ACTIVE AFTER HUMAN MERGE  
**Authorized By:** Mission Control  
**Implementation Authority:** BOUNDED PARSER-RUNTIME CORRECTION ONLY  
**Production Migration Authority:** NONE  
**Production Data Mutation Authority:** NONE  
**Lovable Publish / Deploy Authority:** NONE  
**Domain-Cutover Authority:** NONE

---

## 1. Mission Objective

Correct only the production-runtime incompatibility proven by merged:

`communication/live/report1.90.md`

The deployed Lovable runtime directly established that:

- `node:worker_threads` is available;
- Worker creation is available;
- `worker.terminate()` works;
- `node:zlib` produced-byte containment works;
- the current canonical `process.cwd()` + `src/lib/catalog-import/parse-worker.ts` + direct TypeScript worker dependency-chain execution model does **not** complete in the Lovable production runtime and returns `PARSE_TIMEOUT`.

This mission authorizes diagnosis and correction of that incompatible worker-module/path/module-execution mechanism only.

Do not redesign the broader Catalog import architecture.

---

## 2. Canonical Baseline

Begin from latest merged `main`.

At authorization time the canonical baseline is:

`1d9b12359948bcde4256f64da4a15e3c71ae155f`

Before implementation, verify current `main` and stop if newer merged work materially changes the parser or this mission boundary.

Read at minimum:

- `communication/live/instruction1.79.md`
- `communication/live/report1.86.md`
- `communication/live/instruction1.80.md`
- `communication/live/report1.87.md`
- `communication/live/instruction1.81.md`
- `communication/live/report1.88.md`
- `communication/live/instruction1.82.md`
- `communication/live/report1.89.md`
- `communication/live/instruction1.83.md`
- `communication/live/report1.90.md`
- `docs/phase-1-mission-blueprint/active/SB-P-1.11-Build-Now-Gap-Closure-EIS.md`
- actual current parser/import implementation and tests on latest `main`.

Repository-first rules apply.

---

## 3. Locked Security Properties

The correction must preserve all of the following:

1. **Real parser isolation** from the request-handling event loop.
2. **Enforceable wall-clock cancellation** of parser execution.
3. **Actual produced-byte containment** for hostile XLSX/ZIP expansion.
4. **Sanitized failure boundaries** — no raw parser/database/runtime internals in client responses.
5. **Server-only secret isolation** — no service-role material in worker messages, browser bundles, responses, or logs.
6. **Caller-JWT Catalog authority** and existing RLS/tenant isolation.
7. **No direct authenticated DML** on import support tables beyond standing approved boundaries.
8. **Exactly nineteen public Catalog commands.** No twentieth command.

A correction that makes production packaging work by weakening any of these properties is rejected.

---

## 4. Authorized Correction Scope

Claude Code may:

- diagnose the exact production-incompatible worker entry/path/module-loading assumption;
- replace the CWD-relative source-path worker launch mechanism with a production-compatible packaging/runtime mechanism;
- change `parse-isolated.ts`, `parse-worker.ts`, and directly necessary parser-support files;
- add or adjust narrowly necessary build/runtime configuration required to package and execute the worker correctly;
- add or adjust narrowly necessary tests and test fixtures;
- remove now-obsolete worker-loading code created by the replaced mechanism;
- make the minimum dependency adjustment only if technically necessary for the corrected worker packaging/runtime mechanism.

Prefer the smallest correction that preserves the existing `worker_threads` isolation model already proven available in the Lovable production runtime.

Do not replace the worker model merely because another architecture is possible.

---

## 5. Explicitly Rejected / Out of Scope

This mission does **not** authorize:

- production Supabase migration or schema mutation;
- production business-data mutation;
- public Lovable publish/deploy;
- `smartbusiness.teamlips.com` cutover;
- Product Truth changes;
- Catalog command additions/removals/semantic redesign;
- permission expansion;
- Manager/Employee import enablement;
- new scheduling/background-job architecture;
- new queue service;
- new database table solely to solve parser execution;
- migration to an unrelated parser framework without demonstrated necessity;
- weakening the 10-second parser execution budget;
- removing produced-byte containment;
- moving privileged parsing or service-role logic into the browser;
- broad refactors unrelated to the proven runtime incompatibility.

If the correction genuinely requires one of these excluded changes, STOP and report the requirement rather than implementing it.

---

## 6. Required Technical Outcome

The corrected implementation must provide a worker entry strategy that is compatible with production bundling/deployment and does not depend on the runtime presence of:

`process.cwd()/src/lib/catalog-import/parse-worker.ts`

as an executable TypeScript source file.

The worker entry must be resolvable from the deployed artifact in a deterministic way.

The corrected mechanism must continue to:

- create a real Worker;
- transfer parser input without secret material;
- execute CSV/XLSX parsing off the request thread;
- return structured allowlisted outcomes;
- terminate on the existing wall-clock budget;
- preserve the existing decompression/output limits.

Do not claim Lovable production compatibility from local build success alone.

---

## 7. Required Verification Before Completion

Run and record, at minimum:

### CORR-1 — Worker packaging/build evidence

Prove the production build emits/includes a deterministic executable worker entry or equivalent packaged worker artifact expected by the corrected mechanism.

### CORR-2 — Local production-build execution

Run the corrected parser through the closest available production-build/server execution path locally, not only `vite dev` or unit-import execution.

A normal small CSV must complete without `PARSE_TIMEOUT`.

### CORR-3 — Worker termination

Retain a direct CPU-bound worker test proving the execution budget remains preemptively enforceable.

### CORR-4 — XLSX containment

Retain direct hostile produced-byte/decompression-limit verification.

### CORR-5 — Sanitization

Verify worker-load, parser, timeout, malformed-file, and unexpected-runtime failures remain sanitized.

### CORR-6 — Secret isolation

Verify no service-role or privileged environment material enters worker payloads, responses, browser bundles, or test-visible output.

### CORR-7 — Existing import integrity

Run the standing import test matrix, including claim ordering, replay/concurrency, follow-up state, duplicate handling, hard-delete protection, RLS/tenant isolation, and real authenticated HTTP coverage.

### CORR-8 — Public command count

Verify exactly nineteen public Catalog commands remain.

### CORR-9 — Build/lint/test regression

Run the repository's applicable lint, type/build, and complete relevant automated test suite.

---

## 8. Production-Runtime Evidence Boundary

This mission does **not** authorize another public Lovable runtime probe.

Claude Code must clearly distinguish:

- what is proven by code inspection;
- what is proven by automated/local production-build tests;
- what still requires direct Lovable production-runtime verification.

A successful implementation report means **ready for Mission Control review and corrected-runtime verification**, not production-ready.

Mission Control will separately decide the narrow runtime verification path after reviewing the merged correction.

---

## 9. Security Re-Verification Gate

Even if the correction and later Lovable runtime verification both pass:

**production migration remains blocked until Security & Permissions Architecture performs a new canonical re-verification and returns an explicit positive verdict.**

Security must re-check at minimum:

- SEC-IMP-2 containment remains intact;
- SEC-IMP-3 real enforceable parser isolation/cancellation is closed on the actual production runtime;
- SEC-IMP-7 sanitized logging/error boundaries remain intact;
- SEC-IMP-8 negative/runtime test sufficiency remains adequate;
- no secret, authorization, RLS, tenant, or command-surface regression was introduced.

No production-migration gate may be opened before that Security report is human-reviewed and merged.

---

## 10. Required Completion Report

Create:

`communication/live/report1.91.md`

The report must include:

- exact starting `main` SHA;
- exact files changed;
- root cause identified, if determinable;
- old worker-loading mechanism;
- corrected worker-loading/packaging mechanism;
- why the correction is production-bundle compatible by design;
- security properties preserved;
- CORR-1 through CORR-9 evidence matrix;
- all tests/build/lint results;
- dependency changes, if any;
- explicit confirmation of no production/Lovable/domain action;
- remaining runtime evidence gap, if any;
- exact public Catalog command count;
- final verdict.

Allowed final verdicts:

`PARSER RUNTIME CORRECTION READY FOR CONTROLLED RUNTIME VERIFICATION`

`PARSER RUNTIME CORRECTION CHANGES REQUIRED`

`PARSER RUNTIME CORRECTION STOPPED — AUTHORITY OR EVIDENCE GAP`

---

## 11. Completion Protocol

1. Work on a dedicated branch from latest `main`.
2. Implement only the bounded correction.
3. Run required verification.
4. Create `communication/live/report1.91.md` on the same branch.
5. Open one completion PR.
6. Do not self-merge.
7. Stop after opening the PR and return the PR number, head SHA, changed-file summary, verification summary, and final verdict.

Human review and merge are mandatory.

---

## 12. Stop Rules

STOP rather than widening scope if:

- production compatibility requires abandoning the approved security properties;
- a new public Catalog command appears necessary;
- a new database table/service/queue architecture appears necessary;
- the correction requires production mutation or public Lovable deployment;
- the correction requires permission expansion;
- current `main` materially invalidates this instruction;
- reliable verification cannot be completed within the bounded authority.

---

## 13. Mission Control Disposition

`BUILD NOW — BOUNDED CORRECTION`

The production incompatibility is directly proven. Correction is therefore authorized now.

Parser redesign is limited to the incompatible execution/packaging mechanism. Broader import architecture redesign remains rejected unless a new Mission Control instruction explicitly authorizes it.

**Next logical step:** Claude Code implements this bounded parser-runtime correction and returns `communication/live/report1.91.md`; Mission Control then reviews the merged correction, authorizes only the minimum corrected-runtime verification needed, and requires Security re-verification before any production-migration gate.