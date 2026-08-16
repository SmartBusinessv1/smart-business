# SMART BUSINESS MISSION CONTROL

# SB-P-1.11-GC-38 — AWS LAMBDA PARSER CONTROLLED IMPLEMENTATION AUTHORIZATION

**Instruction ID:** `instruction1.132`  
**Parent Mission:** `SB-P-1.11 — Product Catalog & Pricing`  
**Workstream:** Build Now Gap Closure — External CSV/XLSX Parser Runtime  
**Executing Agent:** Claude Code / Engineering  
**Authorized By:** Founder / Smart Business Mission Control  
**Mode:** CONTROLLED IMPLEMENTATION + TEST-ENVIRONMENT VERIFICATION  
**Implementation Authority:** GRANTED ONLY AFTER HUMAN MERGE OF THIS INSTRUCTION  
**Lovable Mutation Authority:** NONE  
**Production Supabase Migration Authority:** NONE  
**Application Deployment / Publication Authority:** NONE  
**Public Release Authority:** NONE

---

## 1. Mission Objective

Implement the already-approved and locked Smart Business AWS Lambda parser architecture required for governed CSV/XLSX bulk onboarding.

This mission exists to replace the previously unverified Lovable-hosted `node:worker_threads` parser-runtime assumption with the locked external parser-runtime architecture.

Implement only the parser/runtime/support-state boundary already locked by the canonical Lambda Parser EIS and the Mission Control accepted SB-P-1.11 Version 1.2 implementation package.

This mission does **not** reopen Product Truth, Founder decisions, Catalog/Inventory architecture, accounting rules, permissions, command count, or the approved Founder Workflow.

Required completion report:

`communication/live/report1.142.md`

---

## 2. Entry Gate After Human Merge

Before implementation begins, Claude Code must synchronize to the latest merged `main` and verify all of the following:

1. this `instruction1.132.md` is present on `main`;
2. current `main` contains merged Stage 19 independent verification records and the corrected PASS disposition from PR #301;
3. the canonical Lambda Parser EIS remains locked by `communication/live/report1.126.md`;
4. the three SB-P-1.11 Version 1.2 implementation-package documents remain `LOCKED — MISSION CONTROL ACCEPTED`;
5. D-023/D-024 remain in their GC-27-amended generated-SKU state;
6. repository hygiene remains in the independently verified state required before Build authorization;
7. exactly nineteen public Catalog commands remain the locked Catalog Product Truth boundary;
8. the production Supabase project still has the two separately identified bulk-import migrations pending unless a later explicit Mission Control production-migration authorization exists;
9. no later merged instruction supersedes or narrows this authority;
10. the implementation branch named in Section 4 does not contain unexpected pre-existing work.

If any entry condition is absent, contradicted, or materially drifted, STOP and return to Mission Control rather than improvising.

---

## 3. Canonical Authority

Read and execute against current merged repository truth, including at minimum:

- Lighthouse Constitution and current Smart Business governance foundation;
- `communication/live/report1.126.md` — Lambda Parser EIS lock record;
- the canonical Lambda Parser EIS chain locked by that record, including `report1.108.md`, final Infrastructure PASS, Supabase Backend PASS, Security & Permissions PASS, and Mission Control lock-readiness review;
- `docs/implementation/SB-P-1.11/engineering-contract.md` Version 1.2;
- `docs/implementation/SB-P-1.11/verification-checklist.md` Version 1.2;
- `docs/implementation/SB-P-1.11/lovable-build-prompt.md` Version 1.2 for responsibility boundaries only;
- `docs/phase-1-mission-blueprint/active/SB-P-1.11-Founder-Workflow-Reconciliation-Record.md`;
- current Catalog/import implementation and relevant test-project Supabase migrations;
- `communication/missions/SB-P-1.11/claude-code/19-independent-verification-report.md` and `communication/live/report1.141.md` for the latest verified baseline and production migration-currency finding.

Later accepted corrections govern within their authorized scope.

---

## 4. Git Authority

Repository:

`SmartBusinessv1/smart-business`

Implementation branch:

`implementation/SB-P-1.11-GC-38-Lambda-Parser`

The branch must be created only after this instruction is human-merged, from the exact verified merged `main` SHA containing this instruction.

Approved implementation commit message:

`SB-P-1.11-GC-38: implement locked Lambda parser runtime`

A second report-only commit is permitted only if mechanically necessary, using:

`SB-P-1.11-GC-38: record Lambda parser implementation evidence`

Do not force-push. Do not push directly to `main`. Do not self-merge.

---

## 5. Authorized Implementation Scope

### A. AWS Lambda parser runtime

Implement the locked narrow parser service using the accepted contract, including:

- AWS Lambda as parser runtime only;
- `nodejs24.x`;
- region `ap-south-1`;
- 2,048 MB starting memory unless the locked EIS requires a verified adjustment path;
- 15-second Lambda timeout;
- 10-second application parser budget;
- finite reserved concurrency;
- Papa Parse for CSV;
- ExcelJS for XLSX;
- `node:zlib` hostile/decompression containment;
- hard input limit `5,242,880` bytes;
- XLSX produced-byte ceiling `25 * 1024 * 1024` bytes;
- maximum 2,000 rows;
- maximum 40 columns;
- maximum 2,000 characters per cell;
- exact `4,194,304`-byte serialized-response ceiling;
- deterministic pre-stream `RESPONSE_TOO_LARGE` handling;
- no Product Truth writes from Lambda;
- no Supabase/database credentials inside Lambda unless explicitly required by the locked EIS — the accepted design keeps Lambda isolated from Product Truth authority.

### B. Private transient S3 parser ingress

Implement only the transient private ingress pattern locked by the EIS, including:

- private object storage;
- exact object-key binding;
- byte-length binding;
- SHA-256 binding;
- checksum-aware reads with `ChecksumMode = ENABLED`;
- immediate deletion on successful/terminal processing where required;
- Lifecycle cleanup backstop;
- browser GET/LIST/DELETE denial;
- no raw upload retained as merchant history or Product Truth.

### C. IAM / workload identity

Implement the locked identity path, including:

- IAM Roles Anywhere;
- accepted certificate/trust-anchor/profile/role boundary;
- manual AWS4-X509 `CreateSession` path where the locked EIS requires it;
- `AWS_IAM`-protected Lambda Function URL;
- least-privilege policies;
- no browser AWS credential exposure;
- no long-lived AWS access key committed to source or client-visible configuration.

Before any AWS write, verify the exact approved Team LIPS AWS account/region/resource context. If the account or authority is ambiguous, STOP before creating resources.

### D. Supabase parser support state — test environment only

Implement the locked parser support-state contract required by the Lambda architecture, including where absent:

- Parser Upload Lease six-state lifecycle including `CLAIMED`;
- EC-2 durable/shared per-business pre-parse guard;
- one-winner claim/dispatch authority;
- no same-lease redispatch after ambiguous/unknown dispatch outcome;
- immutable authority fields and state/timestamp coherence;
- bounded failure-code contract;
- EC-2 guard/lease binding;
- enforcement-before-use migration ordering;
- browser-role exclusion from parser support state;
- explicit broad `service_role` privilege neutralization on `public.parser_upload_leases`;
- final direct `service_role` table privilege exactly `{ SELECT }`;
- lifecycle mutation only through the accepted narrow helper surface;
- unchanged accepted `parser_preview_guards` B3 contract.

Any new/changed migration or helper required by the locked EIS may be created in the repository and applied **only to the dedicated Smart Business test Supabase project** during this mission.

Do not apply parser-support migrations to production.

### E. Smart Business server-side integration

Implement the minimum canonical application/server integration necessary to:

- authorize the current Owner server-side;
- derive business identity server-side;
- create/bind the parser guard/lease;
- obtain the approved transient upload authorization;
- dispatch only after successful lease claim;
- invoke the AWS_IAM Lambda boundary using the locked workload identity path;
- validate parser response integrity and bounded error vocabulary;
- preserve EC-3 parse-before-write;
- return validated parsed rows to the existing governed import orchestration;
- keep all Catalog Product Truth writes behind the existing nineteen caller-JWT-governed Catalog commands;
- keep Inventory Product Truth behind its existing Inventory-domain operations.

This is server/infrastructure integration only. Do not redesign the merchant-facing Lovable UI under this instruction.

---

## 6. Locked Product and Security Boundaries

The implementation must preserve all of the following:

1. exactly nineteen public Catalog commands; no twentieth command;
2. Catalog and Inventory remain separate truth models;
3. Inventory remains sole stock authority;
4. Opening Stock is an Inventory movement, never a direct current-stock write;
5. FWR-001 through FWR-005 remain governing Founder Workflow requirements;
6. D-047 and D-068 remain fail-closed safeguards;
7. BKR-1 through BKR-5 remain mandatory;
8. Phase 1 import authority remains Owner-only;
9. Manager/Employee authority is not expanded;
10. caller-JWT remains the Product Truth command authority;
11. service-role access is restricted to the locked support-state/bookkeeping boundary and never substitutes for Product Truth commands;
12. parser output is data for preview/validation, not authority;
13. no automatic duplicate overwrite;
14. no automatic Catalog/Inventory truth merge;
15. no AI judgement or automatic merchant decision substitution.

---

## 7. Existing Production Migration Finding — Explicitly Preserved

The following existing SB-P-1.11 bulk-import migrations remain outside this implementation authority for production:

- `20260810120000_sb_p_1_11_gc_1_catalog_import_support_schema.sql`
- `20260811090000_sb_p_1_11_gc_1_security_correction.sql`

Do not apply either migration to production under this instruction.

They may be read, tested, and compatibility-checked against the final Lambda-backed architecture.

After this implementation and verification pass, Mission Control will separately decide whether those migrations and any new parser-support migrations are ready for production authorization.

---

## 8. Verification Required Before Completion

Execute the relevant unexecuted Lambda Parser verification obligations from the locked Version 1.2 Verification Checklist and canonical EIS.

At minimum gather direct evidence for:

- AWS account/region/resource identity;
- production-equivalent AWS4-X509 / IAM Roles Anywhere `CreateSession` signature acceptance in the authorized non-production/test context;
- effective IAM policy inspection and negative authorization tests;
- no private key/certificate/session credential in browser bundle, source maps, logs, telemetry, committed files, or PR diff;
- S3 exact-key / exact-length / SHA-256 enforcement;
- browser S3 GET/LIST/DELETE denial;
- Lambda checksum and byte-length verification;
- Lambda cold/warm execution timing;
- actual 10-second parser-budget containment;
- input/row/column/cell/decompressed-byte limits;
- hostile XLSX/CSV fixtures;
- serialized-response ceiling at and above boundary;
- immediate S3 deletion and Lifecycle backstop;
- parser lease/guard ACLs and effective grants;
- direct `service_role` DML denial where required by the locked contract;
- helper-only lease lifecycle mutation;
- one-winner claim/concurrency behavior;
- ambiguous/unknown dispatch behavior and no same-lease redispatch;
- EC-2 concurrency/rate/expiry behavior;
- EC-3 parse-before-write behavior;
- exactly nineteen Catalog commands after implementation;
- no parser Product Truth mutation;
- existing Catalog/Inventory/import regression tests;
- TypeScript/build/lint/quality gates applicable to changed files;
- staged secret scan and repository hygiene regression check.

Clearly distinguish DIRECT runtime evidence from code inspection or inferred evidence.

---

## 9. Explicitly Not Authorized

This instruction does **not** authorize:

- production Supabase migration/application;
- applying the two pending Catalog-import migrations to production;
- applying new parser-support migrations to production;
- production data mutation for testing;
- Lovable project/workspace mutation;
- Lovable Build Mode or Plan Mode;
- redesigning Catalog/Inventory upload UI;
- public deployment or publication;
- domain cutover;
- production enablement of bulk upload;
- Founder runtime acceptance;
- Stage 21 Evidence Package;
- Stage 22 Formal Completion Report;
- Stage 23 mission acceptance;
- Stage 24 closure;
- SB-P-1.11 completion declaration.

---

## 10. Stop Conditions

STOP and report to Mission Control if:

- AWS account/organization/region authority is unclear;
- required AWS access would require exposing or committing long-lived credentials;
- the locked Lambda EIS cannot be implemented without changing Product Truth;
- a twentieth Catalog command appears necessary;
- a third general Smart Business backend is being created rather than a narrow parser service;
- parser support-state privileges cannot satisfy the locked fail-closed ACL contract;
- production mutation is required to continue;
- an unexpected migration or environment drift is discovered;
- the current test Supabase project identity is ambiguous;
- a material security defect is discovered;
- a required change falls outside the locked EIS/package scope;
- the implementation branch contains unexpected unrelated work.

Do not repair beyond authority after a STOP condition.

---

## 11. Required Completion Report — `report1.142.md`

Create:

`communication/live/report1.142.md`

The report must include at minimum:

1. Mission and workstream identity;
2. reply reference to `communication/live/instruction1.132.md`;
3. exact merged `main` SHA used as implementation base;
4. implementation branch and final head SHA;
5. exact application/infrastructure/migration/test files changed;
6. exact AWS account/region identity in non-secret form and resources created/configured;
7. Lambda runtime/configuration and parser-limit evidence;
8. S3 configuration / lifecycle / checksum / deletion evidence;
9. IAM Roles Anywhere / role / policy / Function URL evidence with no secrets;
10. Supabase test-environment support-state migrations and effective ACL/RLS/helper evidence;
11. one-winner lease/claim and ambiguous-outcome evidence;
12. server integration boundary and confirmation of no parser Product Truth writes;
13. exact Catalog command count after implementation;
14. complete relevant Verification Checklist disposition with DIRECT / INDIRECT / FOLLOW-UP classification;
15. full automated test/build/type/lint/quality-gate summary;
16. secret-scan and client-bundle/source-map/log exposure result;
17. confirmation the two pending production Catalog-import migrations were not applied;
18. confirmation no production migration, Lovable mutation, deployment, publication, Founder acceptance, or later lifecycle stage occurred;
19. unresolved blockers/follow-ups;
20. PR number/URL and exact changed-file scope;
21. final disposition exactly one of:

`AWS LAMBDA PARSER IMPLEMENTATION — READY FOR MISSION CONTROL REVIEW`

or

`AWS LAMBDA PARSER IMPLEMENTATION — CHANGES REQUIRED`

or

`AWS LAMBDA PARSER IMPLEMENTATION — STOPPED — AUTHORITY OR ENVIRONMENT BLOCKER`

---

## 12. Completion / Handover Protocol

After implementation and verification:

1. write `communication/live/report1.142.md`;
2. stage only authorized implementation/infrastructure/test/migration/report paths actually required by the locked EIS;
3. run all applicable repository gates and staged secret scan;
4. commit only on `implementation/SB-P-1.11-GC-38-Lambda-Parser`;
5. push the branch;
6. open one protected completion PR against `main`;
7. do not self-merge;
8. stop for Mission Control review.

No further implementation, production migration, Lovable work, or release action is authorized after opening the completion PR until Mission Control reviews it.

---

## 13. Mission Control Decision

`SB-P-1.11-GC-38 — AWS LAMBDA PARSER CONTROLLED IMPLEMENTATION AUTHORIZED AFTER HUMAN MERGE OF THIS INSTRUCTION.`
