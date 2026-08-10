# SMART BUSINESS MISSION CONTROL

# SB-P-1.11-GC-1 — POST-CORRECTION SECURITY RE-VERIFICATION

**Instruction ID:** instruction1.80  
**Parent Mission:** SB-P-1.11 — Product Catalog & Pricing  
**Workstream:** SB-P-1.11-GC-1 — Build Now Gap Closure  
**Executing Room:** Security & Permissions Architecture  
**Authorized By:** Mission Control  
**Mission Type:** Read-only post-correction security implementation re-verification  
**Implementation Authority:** NONE  
**Production Migration Authority:** NONE  
**Publish / Deploy / Domain-Cutover Authority:** NONE

---

## 1. Mission Objective

Re-verify the actual merged implementation after the bounded correction mission authorized by `communication/live/instruction1.79.md` and reported in `communication/live/report1.86.md`.

This mission is limited strictly to confirming whether **SEC-IMP-1 through SEC-IMP-8**, originally recorded in `communication/live/report1.85.md`, are genuinely closed in the merged implementation.

Do not redesign the product. Do not expand scope. Do not implement fixes.

Production migration remains blocked unless this mission returns a positive security verdict.

---

## 2. Canonical Baseline

Review from latest merged `main`.

Minimum canonical inputs:

1. `communication/live/instruction1.80.md`;
2. `communication/live/report1.86.md`;
3. `communication/live/instruction1.79.md`;
4. `communication/live/report1.85.md`;
5. `communication/live/report1.84.md`;
6. `docs/phase-1-mission-blueprint/active/SB-P-1.11-Build-Now-Gap-Closure-EIS.md` — Revision 4.0;
7. the actual merged implementation and tests changed by PR #189;
8. the dedicated test Supabase project evidence where direct verification is necessary.

Latest merged implementation baseline at authorization time:

`074923ed883cf38c05735b24ae3feee24fd2a4ec`

If `main` has advanced, review the latest merged `main` and report the exact SHA used.

---

## 3. Scope — SEC-IMP-1 Through SEC-IMP-8 Only

### SEC-IMP-1 — Authenticated real-HTTP server-function boundary

Confirm direct evidence exists for the actual compiled TanStack `createServerFn` path, including:

- valid authenticated preview;
- real `FormData` upload handling;
- invalid/missing/expired token denial before privileged writes;
- non-owner denial;
- cross-business non-disclosure for read/commit paths;
- browser-supplied business/actor spoofing cannot redirect authority;
- preview → batch read → commit over real HTTP;
- caller-JWT Catalog mutation remains distinct from service-role bookkeeping;
- replay and concurrent commit behavior over the endpoint boundary.

Do not accept module-load smoke tests as equivalent to this requirement.

### SEC-IMP-2 — XLSX decompression containment

Confirm the implementation limits **actual produced decompressed bytes**, not only attacker-controlled ZIP metadata.

Verify:

- the real decompressed-byte ceiling is enforced during expansion;
- understated ZIP uncompressed-size metadata cannot bypass the limit;
- the limit fails closed with sanitized errors;
- the protection does not create browser/service-role exposure;
- malicious fixture evidence directly demonstrates the corrected behavior.

### SEC-IMP-3 — Enforceable parser execution-time containment

Confirm parsing can actually be terminated/contained when the approved budget expires rather than merely rejected after completion.

Verify the worker/process isolation behavior directly.

Also determine whether the chosen `node:worker_threads` mechanism is compatible with the **actual authorized production runtime/deployment target**. This is part of SEC-IMP-3 closure, not a new scope item. If the production runtime is not yet authoritatively known, or cannot support the mechanism, return an evidence-gap or changes-required verdict rather than assuming compatibility.

### SEC-IMP-4 — Atomic claim before privileged row mutation

Confirm the batch claim is now the first privileged state mutation in commit processing and that:

- a losing concurrent request performs zero skip/row/Product Truth mutations;
- an already committed batch cannot mutate row state through `skipRowNumbers`;
- a request cannot reach privileged row mutation unless it owns the successful claim;
- business/Owner authority remains independently re-derived before privileged access.

### SEC-IMP-5 — Durable follow-up operation state and retry integrity

Confirm requested selling-price, tax, and Reference Cost follow-ups can no longer become transient warnings behind a falsely committed batch.

Verify:

- durable per-operation state exists and is server-authored;
- governed command `outcome` / rejection semantics are inspected, not only transport errors;
- ambiguous results use the existing governed command-outcome recovery mechanism;
- deterministic follow-up idempotency keys are reused on retry;
- already-complete follow-ups are not re-applied;
- failed/rejected/unresolved required follow-ups prevent truthful row/batch completion as appropriate;
- retry does not duplicate the product;
- Reference Cost authorization and non-disclosure remain independently protected;
- new follow-up state cannot be forged by ordinary authenticated REST writes.

### SEC-IMP-6 — Imported-product hard-delete behavior

Confirm products referenced by import evidence are rejected through the normal governed/sanitized delete path rather than leaking a raw foreign-key error.

Verify that the correction:

- preserves import audit evidence;
- does not weaken business isolation;
- does not create a twentieth Catalog command;
- does not broaden delete authority;
- returns the expected governed dependent-history outcome.

### SEC-IMP-7 — Logging and error sanitization

Confirm raw exception objects, SQL/constraint detail, imported merchant cell values, Category text, credentials, internal IDs not intended for the caller, and service-role details cannot leak through:

- server logs;
- HTTP error serialization;
- response payloads;
- test/debug-only helpers accidentally reachable in production code.

Confirm sanitization still leaves useful merchant-facing error categories without exposing internal implementation detail.

### SEC-IMP-8 — Negative-test sufficiency

Reconcile the missing-test matrix from `report1.85.md` against the post-correction tests.

At minimum verify direct evidence for:

- authenticated HTTP happy path;
- token rejection with zero privileged writes;
- non-owner denial;
- cross-business read/commit non-disclosure;
- spoofed authority fields ignored;
- concurrent endpoint commit with one winner and zero mutations by loser;
- committed-batch replay immutability;
- partial follow-up failure and same-identity retry;
- ambiguous command-outcome recovery;
- Reference Cost non-disclosure over real HTTP;
- malicious understated-size XLSX rejection using actual produced bytes;
- parser budget termination/containment;
- governed hard-delete rejection;
- sanitized error/log behavior;
- exactly nineteen public Catalog commands after correction;
- no regression in support-table ACL/RLS isolation.

Where a test is not technically deterministic, distinguish **direct evidence**, **indirect evidence**, and **remaining evidence gap**. Do not label an unexercised path as directly proven.

---

## 4. Mandatory Regression Checks

Confirm the correction did not regress these locked boundaries:

- exactly nineteen public Catalog commands;
- no twentieth public Catalog/import command;
- no `reactivate_catalog_category` command;
- no Product Truth redesign;
- no service-role Catalog Product Truth mutation;
- caller JWT remains the Catalog authority path;
- Owner import only for Phase 1;
- Manager remains fail-closed until approved permission infrastructure exists;
- Employee import remains denied;
- Reference Cost remains independently authorized/protected;
- raw upload remains transient/unretained;
- no global mutable Category taxonomy;
- no unit conversion;
- no automatic duplicate overwrite;
- no automatic Inventory-row creation;
- support-table business isolation and authenticated write denial remain intact.

---

## 5. Runtime Compatibility Decision

Because the correction now uses `node:worker_threads`, the re-verification must explicitly state one of:

- **`PRODUCTION RUNTIME COMPATIBLE — VERIFIED`** — supported by authoritative deployment/runtime evidence;
- **`PRODUCTION RUNTIME COMPATIBILITY NOT YET VERIFIED`** — production-migration gate cannot pass on assumption alone;
- **`PRODUCTION RUNTIME INCOMPATIBLE`** — correction required before production migration.

Do not infer the production runtime merely from a development or build-time default.

---

## 6. Authority Boundaries

This mission is review-only.

Do **not**:

- modify application code;
- modify tests;
- install/change dependencies;
- create or alter migrations;
- mutate test or production Supabase except narrowly necessary read-only inspection or already-approved non-destructive verification methods;
- apply any migration to production;
- change Product Truth;
- add/remove/change Catalog commands;
- mutate Lovable;
- publish;
- deploy;
- perform domain cutover;
- close SB-P-1.11;
- self-merge.

If a genuine implementation defect is found, record it precisely. Do not fix it under this mission.

---

## 7. Required Output

Create:

`communication/live/report1.87.md`

The report must include:

1. exact latest `main` SHA reviewed;
2. SEC-IMP-1 through SEC-IMP-8 disposition matrix;
3. direct vs indirect vs missing evidence classification where relevant;
4. explicit runtime-compatibility decision from §5;
5. mandatory regression-check results;
6. residual blockers/evidence gaps, if any;
7. confirmation that no implementation or production action occurred;
8. one final verdict exactly as defined below.

---

## 8. Allowed Final Verdicts

Return exactly one:

`SECURITY IMPLEMENTATION READY FOR PRODUCTION-MIGRATION GATE`

or

`SECURITY IMPLEMENTATION CHANGES REQUIRED BEFORE PRODUCTION-MIGRATION GATE`

or

`SECURITY IMPLEMENTATION STOPPED — EVIDENCE GAP`

A positive verdict is permitted only if SEC-IMP-1 through SEC-IMP-8 are genuinely closed and the production-runtime compatibility required for SEC-IMP-3 is verified rather than assumed.

---

## 9. Completion Protocol

After completing the review:

1. create `communication/live/report1.87.md`;
2. run relevant documentation quality checks;
3. open one completion PR;
4. stop;
5. do not self-merge.

Production migration remains blocked until the completion report is human-reviewed, merged, and Mission Control evaluates the result.

---

## 10. Next Logical Step

After `report1.87.md` is human-reviewed and merged, Mission Control will evaluate whether the implementation security gate is satisfied.

Only a merged `SECURITY IMPLEMENTATION READY FOR PRODUCTION-MIGRATION GATE` verdict may advance GC-1 toward a separate production-migration authorization decision.
