# SMART BUSINESS MISSION CONTROL

# SB-P-1.11-GC-1 — PRODUCTION RUNTIME COMPATIBILITY VERIFICATION

**Instruction ID:** instruction1.81  
**Parent Mission:** SB-P-1.11 — Product Catalog & Pricing  
**Workstream:** SB-P-1.11-GC-1 — Build Now Gap Closure  
**Authorized By:** Mission Control  
**Mission Type:** Read-only runtime compatibility verification  
**Primary Executing Room:** Infrastructure Operations  
**Implementation Authority:** NONE  
**Production Migration Authority:** NONE  
**Publish / Deploy / Domain-Cutover Authority:** NONE

---

## 1. Mission Objective

Resolve the single remaining Security evidence gap recorded in:

`communication/live/report1.87.md`

Determine, with authoritative evidence, whether the actual authorized Smart Business production deployment runtime can safely execute the corrected parser-isolation model that depends on:

- `node:worker_threads`;
- `node:path` / `process.cwd()`;
- runtime loading/execution of the parser worker module used by `src/lib/catalog-import/parse-isolated.ts` and `src/lib/catalog-import/parse-worker.ts`;
- enforced worker termination at the approved parser wall-clock budget;
- real produced-byte XLSX decompression containment.

This mission is evidence-only.

Do not redesign the parser.

Do not replace `worker_threads`.

Do not alter application code merely to make the evidence easier to obtain.

Parser redesign becomes eligible for a separate mission only if this mission establishes incompatibility or an unavoidable production-runtime constraint.

---

## 2. Mandatory Canonical Inputs

Read from the latest merged `main` before beginning:

- `communication/live/instruction1.80.md`
- `communication/live/report1.87.md`
- `communication/live/instruction1.79.md`
- `communication/live/report1.86.md`
- `src/lib/catalog-import/parse-isolated.ts`
- `src/lib/catalog-import/parse-worker.ts`
- `src/lib/catalog-import/content-type.ts`
- `src/server-functions/catalog-import.ts`
- `vite.config.ts`
- relevant deployment/runtime configuration in the repository

Also inspect only the minimum external/project-specific runtime evidence required to identify the actual authorized production-equivalent execution target.

---

## 3. Deployment Identity Must Be Proven First

Before making any runtime compatibility claim, establish which project/deployment/runtime is actually authoritative for Smart Business going forward.

Do not assume that an older published Lovable project, legacy workspace, stale project ID, historical deployment, or unrelated Lovable-hosted snapshot represents the current authorized Smart Business production target.

Record the evidence used to identify the authoritative target.

If authoritative target identity cannot be established, stop with an evidence-gap verdict.

Do not mutate, republish, unpublish, reconnect, or reconfigure any Lovable project while resolving identity.

---

## 4. Evidence Hierarchy

Use evidence in this order of strength:

1. project-specific deployment/runtime metadata for the authoritative Smart Business target;
2. authoritative platform documentation explicitly covering that deployment mode/runtime;
3. a separately authorized non-destructive runtime probe on the exact production-equivalent target;
4. local build/dev behavior only as supporting context, never as proof of production compatibility.

Do not infer Node.js `worker_threads` support merely because the application uses TanStack Start, SSR, Nitro, Vite, or a managed hosting platform.

Do not infer compatibility from successful `vite dev`, Vitest, or local build output.

---

## 5. Required Compatibility Questions

Answer each explicitly:

### RT-1 — Execution Engine

Does the authoritative production server-function/SSR runtime execute in a Node.js environment that exposes `node:worker_threads`?

### RT-2 — Worker Creation

Can that runtime create a Worker from the server-function execution context used by Smart Business?

### RT-3 — Worker Module Packaging

Will the deployed production artifact contain the parser worker module in a form and path that the current implementation can actually load and execute?

Specifically verify the current `process.cwd()` / source-path assumption rather than assuming repository source layout survives deployment unchanged.

### RT-4 — TypeScript / Module Execution

Can the worker target produced by the deployment pipeline execute the module format emitted for `parse-worker.ts`, including its imports, without relying on development-only transpilation behavior?

### RT-5 — Termination Guarantee

Does the runtime permit `worker.terminate()` or an equivalent behavior of the current implementation so the parser execution budget is genuinely enforceable?

### RT-6 — Resource Boundary

Does the runtime permit the current `node:zlib` produced-byte containment mechanism used before XLSX parsing?

### RT-7 — Server-Only Secret Boundary

Would this worker execution model preserve the existing server-only credential boundary and avoid exposing service-role credentials or privileged environment variables to browser bundles or public responses?

### RT-8 — Production-Equivalent Proof

Is the evidence strong enough to conclude the exact current implementation will work on the authoritative production-equivalent target without changing Product Truth, database contracts, or the nineteen-command Catalog boundary?

---

## 6. If Documentation Is Sufficient

If authoritative project-specific/platform documentation conclusively proves RT-1 through RT-8, do not perform any runtime probe.

Record precise evidence and stop.

---

## 7. If a Runtime Probe Is Necessary

A probe is permitted only if all of the following are true:

- it is non-destructive;
- it does not apply or require production database migrations;
- it does not mutate production business data;
- it does not publish or cut over `smartbusiness.teamlips.com`;
- it does not alter Product Truth;
- it does not expose secrets;
- it does not modify the parser implementation;
- it can be executed on the exact production-equivalent runtime or an authoritative platform-provided equivalent.

The probe should do only what is necessary to prove:

1. Worker creation succeeds;
2. the deployed worker module resolves and runs;
3. a normal parser-worker request returns successfully;
4. a deliberately CPU-bound worker can be terminated within the approved execution budget;
5. no secret values are serialized to the client/log output;
6. no production data mutation occurs.

If performing such a probe itself requires a publish/deploy/project mutation not already authorized, STOP. Do not perform it under this instruction. Report exactly what additional authorization/evidence is needed.

---

## 8. Explicitly Forbidden

This mission does not authorize:

- parser redesign;
- replacing `worker_threads` with another model;
- dependency changes;
- application-code correction;
- migration creation or application;
- Supabase production mutation;
- Lovable project mutation;
- Lovable publish/unpublish;
- production deployment;
- domain cutover;
- test data in production;
- twentieth Catalog command;
- Product Truth change;
- permission expansion;
- SB-P-1.11 closure.

---

## 9. Required Output

Create:

`communication/live/report1.88.md`

The report must include:

- authoritative production-target identity and evidence;
- evidence sources inspected;
- RT-1 through RT-8 disposition matrix;
- whether a runtime probe was required;
- if a probe was performed, exact non-destructive method and results;
- whether `node:worker_threads`, `process.cwd()` worker resolution, deployed module format, `worker.terminate()`, and `node:zlib` are all supported by the authoritative target;
- whether any secret-boundary regression was found;
- whether any parser redesign is actually necessary;
- remaining evidence gaps, if any;
- explicit confirmation that no production migration, production data mutation, Lovable mutation/publish, deploy, or domain cutover occurred.

Return exactly one final verdict:

`PRODUCTION RUNTIME COMPATIBLE — SECURITY RE-VERIFICATION MAY RESUME`

or

`PRODUCTION RUNTIME INCOMPATIBLE — PARSER REDESIGN REQUIRED`

or

`PRODUCTION RUNTIME VERIFICATION STOPPED — EVIDENCE GAP`

---

## 10. Stop Rule

If compatibility cannot be authoritatively established without a new deployment/publish/runtime-probe authority, stop and report the evidence gap.

Do not redesign around uncertainty.

Do not weaken the parser security controls merely to achieve deployability.

---

## 11. Completion Protocol

After completing the review:

1. create only `communication/live/report1.88.md` unless supporting evidence already belongs in an existing approved repository evidence location;
2. open one completion PR;
3. do not self-merge;
4. stop.

Production migration remains blocked regardless of this mission's completion until Mission Control reviews the merged report and, if positive, Security closes SEC-IMP-3 through a subsequent canonical verdict.

---

## 12. Next Logical Step

Human-review and merge this instruction, then execute it in Infrastructure Operations. If the verdict establishes compatibility, Mission Control may return the evidence to Security & Permissions Architecture for the narrow final SEC-IMP-3 closure. If incompatibility is proven, Mission Control may authorize a separate parser-runtime redesign mission.