# SMART BUSINESS MISSION CONTROL

# SB-P-1.11-GC-1 — PRODUCTION-EQUIVALENT RUNTIME PROBE AUTHORIZATION

**Instruction ID:** instruction1.82  
**Parent Mission:** SB-P-1.11 — Product Catalog & Pricing  
**Workstream:** SB-P-1.11-GC-1 — Build Now Gap Closure  
**Mission Name:** Production-Equivalent Runtime Probe  
**Authorized By:** Mission Control  
**Mission Status:** ACTIVE AFTER HUMAN MERGE  
**Executing Room:** Infrastructure Operations  
**Implementation Authority:** NARROW RUNTIME-PROBE AUTHORITY ONLY  
**Production Migration Authority:** NONE  
**Production Data Mutation Authority:** NONE  
**Public Publish Authority:** NONE  
**Domain-Cutover Authority:** NONE

---

## 1. Mission Objective

Close the single remaining production-runtime evidence gap recorded in:

- `communication/live/report1.87.md`; and
- `communication/live/report1.88.md`.

This mission authorizes a narrowly controlled production-equivalent runtime probe using the **exact current GitHub implementation** on the **authorized Lovable project** only for the purpose of determining whether the current worker-based parser-isolation model can execute safely in the real deployment runtime.

The authorized Lovable project is:

`f3e992ec-06df-4d49-b157-b92ec064c078`

The canonical implementation source remains GitHub `main`.

No parser redesign is authorized unless this probe produces direct incompatibility evidence.

---

## 2. Locked Context

Mission Control has already established:

1. Security implementation corrections are materially complete except for production-runtime proof of SEC-IMP-3.
2. The current parser model relies on:
   - `node:worker_threads`;
   - `worker.terminate()`;
   - `node:path` / `process.cwd()` worker-path resolution;
   - runtime execution of `src/lib/catalog-import/parse-worker.ts`;
   - `node:zlib` with produced-byte bounds.
3. The authorized Lovable project is currently unpublished and does not yet contain the exact current parser implementation.
4. The older published Lovable project is not authoritative for this mission.
5. `report1.88.md` concluded that compatibility is not proven and that a controlled runtime probe is the narrowest evidence path.

---

## 3. Authorized Actions

After this instruction is human-reviewed and merged, the executing room may perform only the following bounded actions:

### A. Controlled source synchronization

Synchronize the exact current approved GitHub `main` implementation required for this probe into the authorized Lovable project.

The synchronization must:

- preserve GitHub as canonical source;
- not introduce product changes;
- not redesign the parser;
- not change Product Truth;
- not add or remove Catalog commands;
- not change permissions or business-isolation rules;
- not connect the stale/legacy Lovable project;
- not change canonical Supabase binding.

### B. Controlled non-public production-equivalent deployment/runtime execution

Use the narrowest available Lovable-supported non-public or controlled deployment/runtime mechanism sufficient to execute the exact current server-function/parser implementation.

The execution target must be production-equivalent for the server runtime under evaluation.

The mission may create only the minimum temporary runtime probe surface necessary to prove compatibility, provided that surface:

- is not publicly discoverable as a product feature;
- cannot mutate production business data;
- cannot expose service-role or other secrets;
- cannot change authentication, authorization, RLS, Product Truth, or Catalog behavior;
- is removed or disabled before mission completion if it was created solely for probing.

### C. Read-only / synthetic runtime probing

The probe may execute synthetic, non-business test payloads to determine:

1. whether `node:worker_threads` can be imported;
2. whether a Worker can be created from the deployed server-function runtime;
3. whether the deployed worker module is packaged and resolvable;
4. whether the deployed TypeScript/module format executes correctly;
5. whether a normal parser request completes;
6. whether a CPU-bound worker can be forcibly terminated within the approved budget;
7. whether `node:zlib` produced-byte containment executes successfully;
8. whether worker errors remain sanitized;
9. whether server-only secrets remain unavailable to client responses, browser bundles, logs, worker payloads, and worker responses.

No production customer/merchant data may be used.

---

## 4. Explicitly Forbidden Actions

This mission does **not** authorize:

- production Supabase migration;
- production database writes or test data;
- public Lovable publish of Smart Business;
- `smartbusiness.teamlips.com` cutover;
- DNS or Cloudflare mutation;
- parser redesign;
- replacing `worker_threads` before incompatibility is proven;
- new parser dependencies except where a platform-required probe adapter is strictly necessary and does not alter product runtime behavior;
- Product Truth changes;
- twentieth Catalog command;
- Manager/Employee permission expansion;
- service-role Product Truth writes;
- changes to RLS or business isolation;
- changes to canonical production Supabase binding;
- migration of the old/stale Lovable project;
- any unrelated UX or feature work.

If the available Lovable tooling cannot provide a controlled production-equivalent runtime without public publishing or production-data mutation, STOP and report the blocker. Do not widen authority.

---

## 5. Exact Runtime Evidence Required

The completion report must classify each item below as **PASS**, **FAIL**, or **NOT PROVEN**, with direct evidence where available.

### RT-PROBE-1 — Execution engine

Identify the actual server runtime used by the controlled Lovable execution target and whether Node built-ins required by the current parser are available.

### RT-PROBE-2 — Worker creation

Prove whether `new Worker(...)` succeeds from the deployed server-function context.

### RT-PROBE-3 — Worker packaging/path

Prove whether the exact deployed worker module can be resolved and loaded. Record the effective deployed path/module mechanism. Do not infer success from local filesystem structure.

### RT-PROBE-4 — Module execution

Prove the deployed worker module can import and execute the current parser modules without relying on local-only TypeScript loader behavior.

### RT-PROBE-5 — Termination

Prove that `worker.terminate()` actually stops a CPU-bound worker within the approved execution budget on the production-equivalent runtime.

### RT-PROBE-6 — `node:zlib`

Prove that produced-byte containment using the current `node:zlib` path executes and rejects an understated-size decompression-bomb fixture without resource overrun.

### RT-PROBE-7 — Secret isolation

Verify no privileged environment value is emitted to:

- browser bundle;
- HTTP response;
- worker request;
- worker response;
- runtime logs.

### RT-PROBE-8 — Product/data isolation

Prove the probe executes without production business-data mutation, schema mutation, Catalog mutation, or customer-visible feature exposure.

---

## 6. Stop Rules

Immediately stop and report if any of the following occurs:

1. The probe requires public product publish rather than a controlled/non-public runtime.
2. The probe requires production database mutation.
3. The authorized Lovable target cannot be synchronized without overwriting unrelated current state.
4. The exact current parser requires architecture changes before it can even be tested.
5. Service-role or other secret material appears in client-visible output or logs.
6. The runtime demonstrably lacks `worker_threads`, cannot load the worker module, cannot terminate workers, or cannot execute the current zlib containment path.
7. Any requested action would exceed the authority in this instruction.

A FAIL on runtime compatibility is valid mission evidence. Do not redesign during this mission.

---

## 7. Required Verification Discipline

Before any Lovable mutation:

1. confirm latest GitHub `main` SHA;
2. confirm `instruction1.82.md` is merged;
3. confirm authorized Lovable project ID exactly matches `f3e992ec-06df-4d49-b157-b92ec064c078`;
4. capture its pre-probe state and current project commit;
5. verify canonical production Supabase binding remains `gysgzasfcjvtrgaigfyn`;
6. record whether any controlled deployment/runtime mechanism is available without public product publish.

After the probe:

1. verify no production database mutation occurred;
2. verify no public product publish or domain cutover occurred;
3. verify no secret exposure occurred;
4. verify any temporary probe surface is removed/disabled if applicable;
5. record the final Lovable project state and whether it differs from pre-probe state;
6. record exact direct evidence for RT-PROBE-1 through RT-PROBE-8.

---

## 8. Required Output

Create:

`communication/live/report1.89.md`

The report must include:

- latest GitHub `main` SHA used;
- authorized Lovable project ID and pre-probe state;
- exact source synchronization method;
- exact controlled deployment/runtime mechanism used;
- RT-PROBE-1 through RT-PROBE-8 matrix;
- direct runtime evidence;
- secret-boundary evidence;
- explicit production-data no-mutation evidence;
- any temporary probe surface created and its cleanup status;
- exact post-probe Lovable state;
- whether parser redesign is now required or still not justified.

Return exactly one final verdict:

`PRODUCTION RUNTIME COMPATIBLE — SECURITY RE-VERIFICATION MAY RESUME`

or

`PRODUCTION RUNTIME INCOMPATIBLE — PARSER REDESIGN REQUIRED`

or

`PRODUCTION RUNTIME PROBE STOPPED — EVIDENCE GAP`

Open one completion PR containing the report and any narrowly authorized probe-only artifacts that must remain auditable.

Do not self-merge.

---

## 9. Gate Consequence

Even a positive runtime verdict does **not** authorize production migration.

If the verdict is positive, Mission Control must issue a separate canonical Security re-verification instruction so Security & Permissions Architecture can close SEC-IMP-3 and return the final production-migration-gate verdict.

If the verdict is incompatible, parser redesign becomes authorized only through a separate Mission Control correction mission.

If the verdict remains an evidence gap, production migration stays blocked and Mission Control must determine whether another evidence path is justified.

---

**Next logical step:** human-review and merge this instruction, then execute the controlled production-equivalent runtime probe in Infrastructure Operations.