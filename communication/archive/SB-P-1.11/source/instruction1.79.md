# SMART BUSINESS MISSION CONTROL

# SB-P-1.11-GC-1 — SECURITY IMPLEMENTATION CORRECTION

**Instruction ID:** instruction1.79  
**Parent Mission:** SB-P-1.11 — Product Catalog & Pricing  
**Workstream:** SB-P-1.11-GC-1 — Build Now Gap Closure  
**Executing Room:** Claude Code in VS Code  
**Authorized By:** Mission Control  
**Mission Type:** Bounded implementation correction  
**Status:** ACTIVE AFTER HUMAN MERGE  
**Production Migration Authority:** NONE  
**Publish / Deploy / Domain-Cutover Authority:** NONE

---

## 1. Mission Objective

Correct only the implementation defects identified by Security & Permissions Architecture in:

`communication/live/report1.85.md`

The implementation currently remains blocked from the production-migration gate.

This mission authorizes bounded corrective engineering and verification only. It does not reopen Product Truth, the approved GC-1 product scope, or the locked nineteen-command Catalog architecture.

---

## 2. Canonical Inputs

Execute from latest merged `main` and read, at minimum:

1. `communication/live/instruction1.79.md` — this instruction;
2. `communication/live/report1.85.md` — authoritative defect list for this correction mission;
3. `communication/live/report1.84.md` — implementation evidence and disclosed limitations;
4. `communication/live/instruction1.77.md` — Build Lock / controlled implementation authority;
5. `communication/live/report1.83.md` — Supabase Backend Architecture re-confirmation;
6. `communication/live/report1.80.md` — standing design-level Security verdict;
7. `docs/phase-1-mission-blueprint/active/SB-P-1.11-Build-Now-Gap-Closure-EIS.md` — Revision 4.0;
8. the actual merged implementation and tests on `main`.

If this instruction conflicts with `report1.85.md` on the required correction boundary, preserve the stricter security requirement and report the conflict rather than silently weakening it.

---

## 3. Scope Lock

This mission is limited strictly to closing the implementation findings identified in `report1.85.md`:

- SEC-IMP-1 — authenticated real-HTTP server-function verification;
- SEC-IMP-2 — XLSX decompression-bomb containment;
- SEC-IMP-3 — enforceable parser execution-time containment;
- SEC-IMP-4 — privileged bookkeeping / skip-before-claim defect;
- SEC-IMP-5 — multi-command row sequencing, durable follow-up outcome and retry integrity;
- SEC-IMP-6 — imported-product hard-delete governed rejection behavior;
- SEC-IMP-7 — parser/output/log/error sanitization;
- SEC-IMP-8 — negative-test sufficiency for the corrected implementation.

Do not add unrelated feature work.

---

## 4. Hard Architecture Boundaries

The correction must preserve all of the following:

1. Exactly nineteen public Catalog commands. No twentieth command.
2. No `reactivate_catalog_category` command.
3. No Product Truth redesign.
4. No automatic duplicate overwrite.
5. No automatic Inventory-row creation.
6. No global mutable Category taxonomy.
7. No unit conversion.
8. Owner import allowed in Phase 1.
9. Manager remains fail-closed until approved permission infrastructure exists.
10. Employee import remains denied.
11. Reference Cost remains independently authorized and protected.
12. Raw upload remains transient and unretained.
13. Caller-JWT-scoped Catalog commands remain the only Product Truth mutation authority.
14. Service-role access remains server-only and bookkeeping-only for the two import-support tables.
15. No browser service-role exposure.
16. Business isolation and non-disclosure remain mandatory.
17. Existing Catalog command signatures, authority model, and command count must remain stable. Internal implementation of an existing command may be corrected only where required by `report1.85.md`, without widening authority or changing its public semantic contract.

---

## 5. Required Correction — SEC-IMP-1 Real Authenticated HTTP Boundary

Establish a bounded real-HTTP verification harness that exercises the actual compiled TanStack Start server-function boundary rather than importing handlers directly.

The harness must prove, using the dedicated test environment only:

- valid authenticated Owner preview with real `FormData`;
- invalid, missing, and expired/unauthorized token rejection before privileged bookkeeping writes;
- non-owner denial;
- cross-business `getBatch` and commit non-disclosure;
- client-supplied business/actor/authority spoof attempts cannot redirect authority;
- preview → review → commit through the real HTTP/server-function path;
- caller-JWT Catalog mutation and service-role bookkeeping separation;
- concurrent commit requests through the real endpoint, with the loser making zero row-state or Product Truth mutations;
- committed-batch replay cannot alter terminal row evidence;
- Reference Cost remains non-disclosed where unauthorized.

Use public/stable framework surfaces. Do not depend on undocumented internal APIs merely to satisfy the test.

If a local live-dev-server harness is the correct mechanism, implement it narrowly and document how it is started, authenticated, executed, and torn down.

---

## 6. Required Correction — SEC-IMP-2 XLSX Decompression Containment

Do not rely only on attacker-controlled ZIP central-directory declared uncompressed sizes.

Before production-migration readiness can be claimed, the implementation must enforce the approved decompressed-byte ceiling against actual produced bytes, or use an equivalently strong isolated parsing/resource boundary that makes understated ZIP metadata unable to exceed the approved resource budget.

Requirements:

- preserve CSV/XLSX-only input;
- preserve the 5 MB compressed-file cap unless a stricter bound is chosen;
- preserve the 25 MB decompressed-content ceiling or stronger equivalent containment;
- reject malicious understated-size XLSX input safely;
- no macro/script/external-resource execution;
- no raw workbook persistence;
- sanitized merchant-facing failure.

Add a malicious fixture whose declared ZIP metadata understates actual expansion and prove the containment behavior.

If the current `exceljs` API cannot provide the required containment directly, introduce the smallest maintainable isolation/streaming mechanism necessary. Any new dependency must be justified in `report1.86.md`, pinned, server-only, and reviewed for client-bundle exclusion.

---

## 7. Required Correction — SEC-IMP-3 Parser Execution Budget

The 10-second parser limit must become an actual execution budget, not merely a post-hoc elapsed-time check.

Use a cancellable or isolated execution boundary capable of terminating or containing parser work after the approved limit.

The solution must:

- prevent pathological parsing from indefinitely occupying the main server execution context;
- terminate/contain work when the approved budget is exceeded;
- clean up the worker/process/resource boundary;
- return a sanitized failure;
- preserve the file-size/decompression limits;
- include a test proving actual termination/containment rather than only rejection after work completes.

Do not silently increase the approved execution budget.

---

## 8. Required Correction — SEC-IMP-4 Claim Before Privileged Row Mutation

Correct `catalogImportCommit` so no skip choice or other privileged row-state mutation occurs before the authoritative batch claim succeeds.

Required behavior:

1. validate caller JWT;
2. re-derive actor/business/Owner authority;
3. acquire the batch through the atomic conditional claim;
4. only the winning claimant may persist `skipRowNumbers` or any other commit-time support-row state change;
5. a losing concurrent request must perform zero support-row mutation and zero Product Truth mutation;
6. an already `committed` batch must remain immutable through the commit endpoint;
7. zero-row claim outcomes must remain truthful and non-disclosing.

Add real-HTTP and database evidence for the corrected ordering.

---

## 9. Required Correction — SEC-IMP-5 Durable Follow-Up Operation State

The current sequence can mark a row `CREATED` and the batch `committed` while required selling-price, tax, or Reference-Cost follow-up operations failed or were rejected.

Correct this without creating a new public Catalog command and without bypassing the existing commands.

The corrected implementation must:

- inspect both transport errors and the governed command result/outcome/rejection state;
- preserve the stable deterministic idempotency identity for each follow-up operation;
- persist enough bounded server-owned state to know which required follow-up operations are complete, pending, failed/retryable, or terminally rejected;
- retry unresolved operations without recreating the already-created product;
- use existing `get_catalog_command_outcome` where needed to resolve ambiguous command outcomes;
- never silently convert an unresolved required follow-up into a transient warning only;
- not mark the batch `committed` while any required follow-up operation remains unresolved/retryable;
- keep merchant-facing outcomes truthful and sanitized;
- keep Reference Cost values and authorization independently protected.

### Persistence rule

If closing this defect requires adding columns or constraints to the two already-approved import-support tables, that is authorized only when the change is the minimum necessary to represent durable follow-up state and remains business-bound, server-written, RLS-safe, and compatible with existing retention/audit rules.

Do not add a third support table unless the existing two-table model is demonstrably insufficient. If it is insufficient, STOP and report the architecture blocker instead of inventing a new persistence architecture under this instruction.

Any support-schema correction must be applied and verified only on the dedicated test Supabase project.

---

## 10. Required Correction — SEC-IMP-6 Governed Hard-Delete Rejection

Correct the imported-product hard-delete interaction so references from `catalog_import_rows` do not result in raw FK/constraint errors escaping the governed `delete_catalog_product` command path.

Preferred outcome:

- preserve import audit evidence;
- preserve the existing command's authority/signature/idempotency model;
- extend its dependent-history detection or equivalent internal handling so an imported/matched product returns the normal sanitized governed rejection semantics, preferably `DEPENDENT_HISTORY_CONFLICT` where consistent with the existing contract;
- do not weaken or remove the import-support foreign keys merely to make deletion succeed;
- do not allow service-role bypass of the command.

Add direct test-project verification for imported/matched-product hard delete and confirm ordinary unaffected delete behavior remains unchanged.

---

## 11. Required Correction — SEC-IMP-7 Logging and Error Sanitization

Remove unsafe raw error-object logging from import row processing and any other corrected path identified by `report1.85.md`.

Requirements:

- do not log raw database error objects, raw imported cell values, spreadsheet contents, Reference Cost values, tokens, JWT claims, service-role credentials, or hidden system metadata;
- log only allowlisted operational identifiers and sanitized reason codes;
- merchant-facing errors must not expose constraint names, SQL/detail text, stack traces, filesystem paths, internal URLs, imported raw cells, or privileged metadata;
- real-HTTP tests must verify sanitization at the actual response boundary;
- formula-like text and imported strings remain data, never executable output.

---

## 12. Required Correction — SEC-IMP-8 Negative-Test Matrix

After corrections, add and run the missing negative tests from `report1.85.md` relevant to the changed implementation.

At minimum, evidence must cover:

- real-HTTP auth-before-privilege behavior;
- invalid/missing auth causes zero privileged writes;
- non-owner and cross-business non-disclosure;
- spoofed business/actor fields have no authority;
- winner/loser real-HTTP concurrency behavior;
- committed-batch replay with skip choices cannot mutate evidence;
- partial retry after product creation without duplicate product creation;
- follow-up selling-price/tax/Reference-Cost failure, rejection, ambiguous outcome, and retry with stable operation identity;
- Reference Cost non-disclosure through actual HTTP preview/batch-read flow;
- understated ZIP expansion containment;
- actual parser-time termination/containment;
- sanitized HTTP errors and sanitized logs;
- imported-product hard-delete returns governed sanitized rejection;
- exactly nineteen public Catalog commands remain;
- no service-role Product Truth mutation;
- existing inventory/catalog tests remain green.

Use the dedicated test Supabase project only for database-mutating verification.

---

## 13. Implementation Discipline

Before editing:

1. pull latest `main`;
2. confirm the canonical head SHA;
3. create a dedicated correction branch;
4. inspect `report1.85.md` and map every SEC-IMP finding to an exact implementation/test change;
5. verify no newer canonical instruction supersedes this one.

During implementation:

- keep changes tightly scoped;
- prefer existing repository/framework patterns;
- do not silently change Product Truth;
- do not weaken security constraints to make tests pass;
- do not perform production writes;
- document any necessary bounded engineering decision.

If a required correction cannot be achieved without Product Truth change, a twentieth public Catalog command, a third import-support table, a material authority expansion, or production execution, STOP and report the blocker.

---

## 14. Required Verification

Run all relevant quality gates after correction, including:

- TypeScript typecheck;
- lint on changed files;
- full automated test suite;
- new real-HTTP test harness;
- dedicated test-project RLS/ACL/constraint/integration verification where affected;
- real concurrency tests;
- production bundle/client-bundle credential and parser-dependency scan;
- command-count verification against the dedicated test project;
- migration-list/drift verification if the test schema changes.

Evidence must distinguish DIRECT runtime evidence from code-inspection or inferred evidence.

---

## 15. Production / Release Boundary

This mission does **not** authorize:

- applying any new migration to production;
- production data mutation or test data;
- production credential mutation;
- Lovable mutation;
- Lovable publish;
- application deploy;
- domain cutover;
- public release;
- SB-P-1.11 closure.

Production migration remains blocked until this correction is merged and a separate post-correction Security re-verification returns a positive verdict.

---

## 16. Required Completion Report

Create:

`communication/live/report1.86.md`

The report must include:

1. latest `main` SHA used;
2. branch and final implementation commit SHA;
3. exact files changed;
4. SEC-IMP-1 through SEC-IMP-8 resolution matrix;
5. exact correction for claim-before-skip sequencing;
6. exact durable follow-up operation-state model and retry behavior;
7. exact decompression containment mechanism;
8. exact parser execution-budget mechanism;
9. real authenticated HTTP harness design and evidence;
10. logging/error-sanitization evidence;
11. hard-delete governed-rejection evidence;
12. dependency changes, if any, with bundle-isolation evidence;
13. test-project schema/migration changes, if any;
14. full test results and direct negative-test evidence;
15. exact public Catalog command count;
16. confirmation of no production/Lovable/deploy/domain action;
17. residual limitations or blockers, if any;
18. one final verdict from §17.

---

## 17. Allowed Final Verdicts

Return exactly one:

`IMPLEMENTATION CORRECTIONS READY FOR SECURITY RE-VERIFICATION`

or

`IMPLEMENTATION CORRECTIONS STILL REQUIRED`

or

`IMPLEMENTATION CORRECTION STOPPED — BLOCKER`

Do not claim production-migration readiness yourself. That decision belongs to the subsequent Security re-verification and Mission Control gate.

---

## 18. Completion Protocol

After implementation and verification:

1. create `communication/live/report1.86.md`;
2. commit all authorized correction code/tests/report in one completion branch;
3. open one completion PR against `main`;
4. do not self-merge;
5. stop and wait for human review and Mission Control.

---

## 19. Next Logical Step

After this instruction is human-reviewed and merged, the Founder may deliver the canonical handoff to Claude Code in VS Code. Claude Code then performs only this bounded correction mission and returns `report1.86.md` through a completion PR.
