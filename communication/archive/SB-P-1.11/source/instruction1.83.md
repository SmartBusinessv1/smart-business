# SMART BUSINESS MISSION CONTROL

## SB-P-1.11-GC-1 — Founder-Controlled Temporary Public Runtime Probe

**Instruction ID:** instruction1.83  
**Mission:** SB-P-1.11-GC-1 — Founder-Controlled Temporary Public Runtime Probe  
**Authorized By:** Mission Control  
**Executing Room:** 09_Infrastructure_Operations  
**Mission Type:** Narrow evidence-gathering runtime probe  
**Implementation Authority:** Synchronization/probe-only within this instruction  
**Production Migration Authority:** NONE  
**Production Data Mutation Authority:** NONE  
**Domain-Cutover Authority:** NONE  
**Parser Redesign Authority:** NONE  
**Status:** ACTIVE ONLY AFTER HUMAN MERGE

---

## 1. Decision

Mission Control authorizes a tightly controlled temporary public Lovable runtime probe because the non-public production-equivalent evidence path has been exhausted.

This authorization exists only to answer one unresolved question:

> Can the exact current Smart Business worker-based Catalog import parser run safely on the actual Lovable production runtime?

The mission must not be treated as a product launch, release, production migration, domain cutover, public-preview program, or permission to expand scope.

---

## 2. Canonical Inputs

Execute from the latest merged `main` and review at minimum:

- `communication/live/instruction1.82.md`
- `communication/live/report1.87.md`
- `communication/live/report1.88.md`
- `communication/live/report1.89.md`
- current `src/lib/catalog-import/parse-isolated.ts`
- current `src/lib/catalog-import/parse-worker.ts`
- current `src/lib/catalog-import/content-type.ts`
- current `src/server-functions/catalog-import.ts`
- current `src/integrations/supabase/client.server.ts`
- current `package.json`
- current `vite.config.ts`

GitHub `main` remains the canonical implementation source.

Authorized Lovable project:

`f3e992ec-06df-4d49-b157-b92ec064c078`

The older published Lovable project must not be used.

---

## 3. Founder-Controlled Public Exposure Rule

A public Lovable deployment is permitted only as the final runtime-probe mechanism after all pre-publish checks pass.

The executing room must stop immediately before the publish/deploy action and present the Founder with:

1. the exact Lovable project ID;
2. the exact GitHub `main` SHA being synchronized;
3. confirmation that no domain cutover will occur;
4. confirmation that no production Supabase migration or production-data mutation will occur;
5. the exact probe actions that will execute after publish;
6. the cleanup/unpublish procedure;
7. confirmation that the temporary `lovable.app` URL may be publicly reachable during the probe window.

The Founder must explicitly approve that final public-publish step before it occurs.

Mission Control authorization alone does not waive this Founder checkpoint.

---

## 4. Pre-Publish Gate

Before any public deployment, verify and record:

- latest `main` SHA;
- `instruction1.83.md` is merged;
- authorized Lovable project ID matches exactly;
- project is still bound to canonical Supabase project `gysgzasfcjvtrgaigfyn`;
- no custom-domain cutover is active or introduced;
- exact current parser implementation has been synchronized without redesign;
- synchronization does not introduce unrelated changes;
- no production migration is required merely to test parser runtime compatibility;
- no probe path can create, alter, or delete merchant/business data;
- no service-role secret can be returned to the browser, response payload, client bundle, or logs;
- a concrete unpublish/cleanup path is available to the Founder immediately after the probe.

If any item cannot be verified, STOP.

---

## 5. Authorized Synchronization

The exact current GitHub implementation may be synchronized into the authorized Lovable project only to enable this runtime probe.

Synchronization must preserve:

- Product Truth;
- exactly nineteen public Catalog commands;
- current Security boundaries;
- current Supabase binding;
- current parser design;
- current permissions;
- current routes except any narrowly necessary temporary internal probe surface permitted below.

No unrelated Lovable-generated refactor, redesign, dependency change, feature addition, visual redesign, or schema change is authorized.

If Lovable proposes unrelated changes, reject them.

---

## 6. Temporary Probe Surface

A temporary internal probe surface may be created only when necessary to directly exercise the production server runtime.

It must:

- be non-discoverable from normal product navigation;
- require a high-entropy probe token or equivalent narrowly scoped access check;
- perform no production-business-data write;
- perform no production schema mutation;
- return only allowlisted runtime capability results;
- never return environment values, credentials, Supabase service-role material, raw stack traces, or merchant data;
- be removed immediately after probe completion.

The temporary probe may test only the runtime capabilities required to close SEC-IMP-3.

---

## 7. Required Runtime Tests

After Founder approval and temporary public deployment, directly verify:

### RT-PUBLIC-1 — Runtime Engine

Prove whether `node:worker_threads` can be imported and used from the deployed Smart Business server-function context.

### RT-PUBLIC-2 — Worker Creation

Prove `new Worker(...)` succeeds using the current implementation pattern or establish the exact incompatibility.

### RT-PUBLIC-3 — Worker Packaging / Path Resolution

Prove the deployed worker module can be resolved from the production artifact. Specifically verify the current CWD/path assumption rather than inferring success from build output.

### RT-PUBLIC-4 — TypeScript / Module Execution

Prove the deployed worker module and its dependency chain execute correctly in the production artifact.

### RT-PUBLIC-5 — Termination Guarantee

Run a bounded synthetic CPU task and prove `worker.terminate()` actually stops execution within the approved wall-clock budget.

The synthetic task must not touch production business data.

### RT-PUBLIC-6 — `node:zlib` Produced-Byte Boundary

Prove the deployed runtime can execute the current `node:zlib.inflateRawSync(..., { maxOutputLength })` containment mechanism.

Use synthetic in-memory data only.

### RT-PUBLIC-7 — Secret Isolation

Verify that:

- service-role material remains server-only;
- no secret is serialized into client JavaScript;
- no secret appears in probe responses;
- no secret appears in accessible logs generated by the probe;
- worker messages contain no privileged credential material.

Do not print or copy the secret itself for verification.

### RT-PUBLIC-8 — Zero Production Data Mutation

Before and after the probe, verify no production business/catalog/customer/transaction data or schema was mutated.

Do not create production test transactions, products, categories, import batches, import rows, businesses, users, or other merchant records.

---

## 8. Public Exposure Minimization

The public deployment exists only for the runtime probe.

During the probe:

- do not connect `smartbusiness.teamlips.com`;
- do not announce or share the temporary URL;
- do not use it for Founder acceptance, merchant testing, or product preview;
- do not intentionally send real merchant/business data through it;
- do not leave the deployment public longer than required to obtain evidence and perform verification.

Official Lovable documentation confirms a published project can be unpublished while the editor project remains intact. The executing room must prepare the Founder for manual unpublish immediately after evidence capture because the currently connected Lovable tool surface does not expose an unpublish action.

---

## 9. Cleanup Gate

Immediately after the required evidence is captured — regardless of PASS, FAIL, or STOP outcome — the Founder must be instructed to unpublish the temporary Lovable deployment through the Lovable UI.

The executing room must then verify, read-only where possible:

- the temporary live URL is no longer accessible;
- the Lovable project remains available in the editor;
- no custom domain was connected;
- no production Supabase migration occurred;
- no production business data changed;
- any temporary probe route/surface has been removed from the canonical implementation or isolated from any future release path as appropriate;
- GitHub `main` remains canonical.

If unpublish cannot be confirmed, report it explicitly as an unresolved operational risk.

---

## 10. Stop Rules

STOP immediately and do not improvise if:

- the authorized Lovable project identity cannot be proven;
- synchronization requires parser redesign;
- synchronization requires a twentieth Catalog command;
- synchronization requires Product Truth changes;
- synchronization requires production Supabase migration;
- runtime testing requires real merchant/business-data mutation;
- runtime testing would expose service-role credentials or other secrets;
- the only viable probe requires domain cutover;
- the Founder has not explicitly approved the public-publish checkpoint;
- the deployment cannot be unpublished/cleaned up through an established path;
- Lovable requires unrelated feature or architecture changes.

---

## 11. No Parser Redesign Yet

Do not redesign the parser during this mission.

If the current worker model is directly proven incompatible on the deployed runtime, record the incompatibility precisely and stop.

Parser redesign requires a separate Mission Control instruction after review of the evidence.

---

## 12. Required Report

Create:

`communication/live/report1.90.md`

The report must include:

- latest `main` SHA used;
- exact Lovable project ID and pre-publish state;
- exact synchronization method and evidence that current GitHub implementation was used;
- Founder public-publish approval checkpoint evidence;
- temporary Lovable live URL only if necessary for audit evidence, without promoting or broadly sharing it;
- RT-PUBLIC-1 through RT-PUBLIC-8 evidence matrix;
- exact runtime errors if incompatibility occurs, sanitized of secrets;
- before/after production-data/schema no-mutation evidence;
- public exposure start/end timestamps;
- unpublish/cleanup evidence;
- confirmation that no domain cutover occurred;
- confirmation that no production migration occurred;
- confirmation that no parser redesign occurred;
- confirmation that exactly nineteen public Catalog commands remain;
- any residual evidence gap.

Return exactly one final verdict:

`PRODUCTION RUNTIME COMPATIBLE — SECURITY RE-VERIFICATION MAY RESUME`

or

`PRODUCTION RUNTIME INCOMPATIBLE — PARSER REDESIGN REQUIRED`

or

`TEMPORARY PUBLIC RUNTIME PROBE STOPPED — EVIDENCE GAP`

Open one completion PR containing the report and any strictly necessary cleanup evidence/documentation changes, then stop.

Do not self-merge.

---

## 13. Gate Consequence

Even a positive runtime result does not authorize:

- production migration;
- public product release;
- domain cutover;
- SB-P-1.11 closure.

A positive merged `report1.90.md` only permits Mission Control to resume the dedicated Security re-verification needed to close SEC-IMP-3.

---

## Mission Control Decision

**Decision:** AUTHORIZE WITH FOUNDER CHECKPOINT.

The non-public Lovable evidence path is exhausted. A temporary public Lovable deployment is proportionate only because it is narrowly bounded, carries no production-data/schema authority, has no domain cutover authority, requires explicit Founder approval immediately before publish, and requires immediate unpublish/cleanup after evidence capture.
