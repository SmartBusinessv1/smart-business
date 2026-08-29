# SMART BUSINESS MISSION CONTROL

# SB-P-1.11-GC-38R — AWS LAMBDA PARSER IMPLEMENTATION REACTIVATION AUTHORIZATION

**Instruction ID:** `instruction1.144`  
**Parent Mission:** `SB-P-1.11 — Product Catalog & Pricing`  
**Reactivated Mission:** `SB-P-1.11-GC-38 — AWS Lambda Parser Implementation`  
**Executing Room:** Claude Code / Engineering  
**Authorized By:** Founder / Smart Business Mission Control  
**Mode:** CONTROLLED NON-PRODUCTION IMPLEMENTATION + VERIFICATION  
**Implementation Authority:** GRANTED ONLY AFTER HUMAN MERGE OF THIS INSTRUCTION  
**Production Authority:** NONE  
**Lovable Mutation Authority:** NONE  
**Public Deployment / Publication Authority:** NONE

---

## 1. Mission Control Decision

Mission Control explicitly reactivates:

`SB-P-1.11-GC-38 — AWS Lambda Parser Implementation`

only after this instruction is human-reviewed and merged to `main`.

The previous GC-38 STOP was an execution-access/environment blocker, not a rejection of the locked Lambda Parser architecture.

That blocker has now been cleared through the completed and independently verified execution-access chain ending in:

`communication/live/report1.153.md`

with disposition:

`AWS EXECUTION-ACCESS RUNTIME-BOUNDARY SECURITY RE-VERIFICATION — PASS — GC-38 REACTIVATION DECISION ELIGIBLE`

This instruction is the separate explicit Mission Control reactivation decision required by that PASS.

---

## 2. Historical State Preserved

The original authorization remains canonical context:

`communication/live/instruction1.132.md`

The original execution attempt stopped in:

`communication/live/report1.142.md`

because no provisioned AWS execution identity/tooling path existed at that time.

Do not overwrite or reinterpret that historical report.

This reactivation changes only the execution readiness state. It does not redesign Product Truth, the Lambda Parser EIS, the nineteen Catalog commands, Catalog/Inventory separation, Founder Workflow, parser limits, support-state contract, or the accepted runtime identity architecture.

Required new completion report:

`communication/live/report1.154.md`

---

## 3. Canonical Entry State

Before implementation, Claude Code / Engineering must synchronize to the latest merged `main` containing this instruction and verify at minimum:

1. `instruction1.144.md` is present on canonical `main`;
2. `report1.153.md` is present with the GC-43D PASS disposition;
3. the corrected `TeamLIPS-SB-NonProd-Parser-RuntimeBoundary` Version 2 evidence remains canonical;
4. the approved AWS non-production execution-access boundary remains unchanged;
5. the Lambda Parser EIS remains locked by the existing SB-P-1.11 canonical records, including `report1.126.md`;
6. the Version 1.2 implementation package remains Mission Control accepted;
7. exactly nineteen public Catalog commands remain the locked Catalog boundary;
8. no later Mission Control instruction supersedes this reactivation;
9. production Supabase migrations remain unauthorized unless a later explicit Mission Control instruction says otherwise;
10. no unexpected implementation work has already been introduced outside the authorized mission scope.

If any item materially differs, STOP and report before implementing.

---

## 4. Approved AWS Execution Boundary

GC-38 must use the already-provisioned non-production execution-access architecture.

Approved AWS account:

`658980433673`

Approved region:

`ap-south-1`

Approved deployment identity:

`GitHub Actions OIDC → TeamLIPS-SB-NonProd-Parser-DeployRole`

Approved protected GitHub Environment:

`aws-nonprod-parser`

Approved runtime maximum-permission boundary:

`TeamLIPS-SB-NonProd-Parser-RuntimeBoundary`

The corrected runtime boundary requires the future workload path to remain Function-URL-only, including:

- `lambda:InvokeFunctionUrl` only with `lambda:FunctionUrlAuthType = AWS_IAM`;
- `lambda:InvokeFunction` only with `lambda:InvokedViaFunctionUrl = true`.

### Forbidden execution paths

GC-38 must not use:

- AWS root for implementation or deployment;
- root access keys;
- IAM-user long-lived access keys;
- static AWS credentials in GitHub, repository files, `.env`, Claude, ChatGPT, Lovable, or browser code;
- a broadened OIDC trust policy;
- a broadened deploy role;
- a weakened runtime permission boundary.

If the approved GitHub OIDC execution path cannot perform an authorized operation, STOP and return to Mission Control rather than widening permissions.

---

## 5. Locked Implementation Scope Reactivated

The implementation scope from `instruction1.132.md` is reactivated, subject to all later accepted security corrections.

### 5.1 AWS Lambda parser runtime

Implement the locked narrow external parser service, including:

- AWS Lambda parser runtime only;
- Node.js 24 runtime;
- region `ap-south-1`;
- 2,048 MB starting memory unless the locked EIS contains an explicitly authorized adjustment path;
- 15-second Lambda timeout;
- 10-second application parser budget;
- finite reserved concurrency;
- Papa Parse for CSV;
- ExcelJS for XLSX;
- decompression/hostile-input containment;
- maximum input size `5,242,880` bytes;
- XLSX produced-byte ceiling `25 * 1024 * 1024` bytes;
- maximum 2,000 rows;
- maximum 40 columns;
- maximum 2,000 characters per cell;
- exact serialized-response ceiling `4,194,304` bytes;
- deterministic pre-stream `RESPONSE_TOO_LARGE` behavior;
- no Product Truth writes from Lambda.

### 5.2 Private transient S3 parser ingress

Implement only the locked transient private parser-ingress model, including:

- private storage only;
- exact object-key binding;
- byte-length binding;
- SHA-256 binding;
- checksum-aware reads where required by the EIS;
- immediate terminal cleanup where required;
- lifecycle cleanup backstop;
- browser GET/LIST/DELETE denial;
- no raw upload retained as merchant history or Product Truth.

### 5.3 Runtime workload identity

Implement only the locked runtime workload path:

`IAM Roles Anywhere → workload role → AWS_IAM Lambda Function URL`

Preserve:

- separate deployment and runtime identities;
- least privilege;
- the corrected Version 2 RuntimeBoundary;
- no browser AWS credential exposure;
- no long-lived AWS access key;
- no direct ordinary Lambda invocation path for the workload identity.

### 5.4 Supabase parser support state — test/non-production only

Implement the already-locked parser support-state contract where still absent, including the accepted lease/guard lifecycle, one-winner claim/dispatch behavior, ambiguous-dispatch safeguards, bounded failure-code contract, browser-role exclusion, service-role restriction, and helper-only lifecycle mutation.

Any parser-support migration may be applied only to the dedicated Smart Business test/non-production Supabase environment under this mission.

No production Supabase migration is authorized.

### 5.5 Smart Business server-side integration

Implement only the minimum server-side integration required by the locked EIS to:

- authorize the Owner server-side;
- derive business identity server-side;
- create/bind parser guard and lease;
- authorize transient upload;
- claim before dispatch;
- invoke the `AWS_IAM` Function URL through the approved workload identity path;
- validate bounded parser response integrity;
- preserve parse-before-write;
- return validated parsed rows to the existing governed import orchestration;
- keep Catalog Product Truth writes behind the existing nineteen Catalog commands;
- keep Inventory Product Truth behind Inventory-domain operations.

No merchant-facing Lovable redesign is authorized.

---

## 6. Product and Security Boundaries That Remain Locked

The implementation must preserve all existing accepted constraints, including:

- exactly nineteen public Catalog commands;
- no twentieth Catalog command;
- Catalog and Inventory remain separate truth models;
- Inventory remains sole stock authority;
- Opening Stock remains an Inventory movement;
- Owner-only Phase 1 import authority;
- no Manager/Employee authority expansion;
- caller-JWT remains Product Truth command authority;
- parser output remains preview/validation data, not authority;
- no automatic duplicate overwrite;
- no automatic Catalog/Inventory truth merge;
- no AI decision substitution;
- deployment identity remains separate from runtime workload identity;
- Function URL auth remains `AWS_IAM`;
- ordinary direct Lambda invocation by the workload role remains structurally unavailable.

---

## 7. Repository and Deployment Sequence

To preserve the approved OIDC trust and supply-chain boundary, GC-38 must follow this sequence.

### Phase A — Implementation package

Create a fresh implementation branch from the exact merged `main` containing this instruction:

`implementation/SB-P-1.11-GC-38R-Lambda-Parser`

Implement only authorized code, infrastructure-as-code/configuration, test support, non-production Supabase migration files, and verification tooling required by the locked EIS.

Open a human-reviewed PR against `main`.

Do not self-merge.

The PR must not itself claim runtime verification merely from code inspection.

### Phase B — Canonical main activation for non-production deployment

Only after the authorized implementation PR is human-reviewed and merged may the protected GitHub OIDC deployment path execute against the reviewed canonical `main` state.

Any credential-bearing AWS deployment workflow must:

- run from canonical `main`;
- use environment `aws-nonprod-parser`;
- use GitHub OIDC short-lived credentials;
- assume only `TeamLIPS-SB-NonProd-Parser-DeployRole`;
- preflight exact account `658980433673`;
- preflight region `ap-south-1`;
- remain non-production;
- execute only reviewed parser-scope infrastructure/application deployment actions;
- contain no static AWS credential;
- not execute unreviewed PR/fork code after credentials are obtained.

If a new mission-scoped deployment workflow is required to implement the locked EIS, it may be included in the reviewed implementation PR provided it obeys the already-approved GC-41/GC-43 supply-chain boundary.

### Phase C — Direct runtime verification

After successful non-production deployment, perform the locked verification obligations and distinguish direct runtime evidence from static/code evidence.

### Phase D — Completion report

After implementation and verification, create:

`communication/live/report1.154.md`

through a dedicated human-reviewed report PR.

No self-merge.

---

## 8. Required Verification

Execute the relevant locked Lambda Parser verification checklist and EIS obligations.

At minimum obtain evidence for:

- exact AWS account/region/resource identity;
- GitHub OIDC deploy-role assumption through the protected environment;
- effective IAM policy and runtime-boundary inspection;
- IAM Roles Anywhere / AWS4-X509 session path in non-production;
- `AWS_IAM` Function URL behavior;
- ordinary direct workload Lambda invocation unavailable;
- no secrets/private key/session credential in repository, browser bundle, source maps, logs, telemetry, PR diff, or merchant-facing configuration;
- S3 private access, exact-key/length/SHA-256 binding and cleanup;
- checksum and byte-length verification;
- parser timing and 10-second budget containment;
- CSV/XLSX hostile fixtures and all locked size/row/column/cell/decompression limits;
- exact response-size ceiling and deterministic `RESPONSE_TOO_LARGE` path;
- parser lease/guard ACLs and lifecycle enforcement;
- one-winner claim/concurrency behavior;
- ambiguous dispatch/no same-lease redispatch behavior;
- parse-before-write behavior;
- exactly nineteen Catalog commands after implementation;
- no parser Product Truth mutation;
- relevant Catalog/Inventory/import regression tests;
- TypeScript/build/lint/quality gates for changed files;
- staged secret scan and repository-hygiene checks.

A test that cannot be executed must be identified explicitly; do not upgrade code inspection into direct runtime PASS.

---

## 9. Existing Production Migration Boundary

The known production Catalog-import migrations remain outside this authorization:

- `20260810120000_sb_p_1_11_gc_1_catalog_import_support_schema.sql`
- `20260811090000_sb_p_1_11_gc_1_security_correction.sql`

Do not apply them to production under GC-38R.

Do not apply any new parser-support migration to production.

Compatibility may be tested in non-production only.

Production migration authorization remains a separate later Mission Control decision.

---

## 10. Explicitly Not Authorized

This reactivation does not authorize:

- production Supabase migration;
- production AWS deployment or production AWS identity creation;
- production data mutation;
- Lovable mutation, Build Mode, Plan Mode, or UI redesign;
- public deployment/publication;
- domain cutover;
- production enablement of bulk upload;
- Founder runtime acceptance;
- Stage 21 Evidence Package;
- Stage 22 Formal Completion Report;
- Stage 23 acceptance;
- Stage 24 closure;
- SB-P-1.11 completion declaration;
- widening AWS OIDC trust;
- widening the deploy role;
- weakening the RuntimeBoundary;
- root use for GC-38 execution;
- long-lived AWS credentials.

---

## 11. Stop Conditions

STOP and return to Mission Control if:

- exact AWS account, region, environment, or deploy identity does not match the approved boundary;
- the protected OIDC deployment path cannot perform an authorized operation without permission broadening;
- root or long-lived credentials appear necessary;
- the corrected RuntimeBoundary would need weakening;
- a direct Lambda invocation path for the workload identity appears necessary;
- Product Truth would need redesign;
- a twentieth Catalog command appears necessary;
- a production mutation is required;
- the test Supabase project identity is ambiguous;
- a material security defect or unexpected provider drift is discovered;
- implementation requires functionality outside the locked Lambda Parser EIS/package;
- unrelated work is present in the implementation branch or deployment package.

Do not repair beyond authority after a STOP condition.

---

## 12. Required Completion Report — `report1.154.md`

The report must include at minimum:

1. mission identity and reference to this reactivation instruction;
2. exact merged `main` SHA used to create the implementation branch;
3. implementation branch and implementation PR;
4. exact implementation files changed;
5. exact human-merged implementation commit used for non-production deployment;
6. exact AWS account/region/environment and non-secret resource inventory;
7. OIDC deploy-role assumption evidence;
8. Lambda runtime/configuration and parser-limit evidence;
9. S3 configuration/checksum/cleanup evidence;
10. IAM Roles Anywhere/workload-role/Function URL evidence;
11. confirmation RuntimeBoundary Version 2 remains effective and direct workload Lambda invocation remains unavailable;
12. Supabase test-environment support-state migration and ACL/RLS/helper evidence;
13. concurrency/claim/ambiguous-dispatch evidence;
14. server integration boundary and no parser Product Truth writes;
15. exact Catalog command count;
16. verification checklist disposition with DIRECT / INDIRECT / FOLLOW-UP classification;
17. automated tests/build/type/lint/quality-gate results;
18. secret scan and client-bundle/source-map/log exposure result;
19. confirmation no production migration, production deployment, Lovable mutation, publication, Founder acceptance, or Stage 21+ progression occurred;
20. unresolved blockers/follow-ups;
21. report PR number/URL;
22. final disposition exactly one of:

`AWS LAMBDA PARSER IMPLEMENTATION — READY FOR MISSION CONTROL REVIEW`

or

`AWS LAMBDA PARSER IMPLEMENTATION — CHANGES REQUIRED`

or

`AWS LAMBDA PARSER IMPLEMENTATION — STOPPED — AUTHORITY OR ENVIRONMENT BLOCKER`

---

## 13. Final Reactivation Decision

`SB-P-1.11-GC-38 — AWS LAMBDA PARSER IMPLEMENTATION IS REACTIVATED ONLY AFTER HUMAN MERGE OF instruction1.144.md.`

This reactivation authorizes the controlled non-production implementation and verification described above and nothing beyond it.
