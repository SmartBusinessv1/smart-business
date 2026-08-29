# SMART BUSINESS — REPOSITORY COMMUNICATION

# SB-P-1.11-GC-38R — READ-ONLY S3 UPLOAD BLOCKER INVESTIGATION AUTHORIZATION

**Instruction ID:** `instruction1.182`  
**Mission:** `SB-P-1.11 — Product Catalog & Pricing`  
**Workstream:** `GC-38R — Lambda Parser Non-Production Deployment`  
**Sender:** Mission Control  
**Recipient:** Claude Engineering  
**Date:** 2026-08-27  
**Status:** AUTHORIZATION PENDING HUMAN MERGE

---

## 1. Purpose

Authorize a narrowly scoped read-only investigation of the first active C5 blocker recorded in `communication/live/report1.176.md`:

`S3 upload — Failed`

The purpose is to identify the evidenced cause of the non-production S3 upload failure before any corrective mutation is considered.

This instruction does not authorize a C5 retry or any implementation change.

---

## 2. Preconditions

Execution is authorized only after this instruction is human-reviewed and merged to `main`.

Before investigation, verify:

1. `report1.176.md` is present on `main` and records `GC-38R PHASE C C5 — BLOCKED`.
2. The first blocker remains `S3 upload — Failed`.
3. The prior IAM Roles Anywhere CreateSession HTTP 403 blocker is no longer the active first failure point and the diagnostic reached `OK issued`.
4. The target remains non-production only.
5. No additional C5 retry has been executed after the attempt recorded in `report1.176.md`.

If any precondition is false, STOP and report the discrepancy.

---

## 3. Authorized Investigation Scope

Claude Engineering is authorized to perform read-only inspection of the existing non-production S3 ingress boundary sufficient to determine the most likely first failure cause.

The investigation may inspect:

- repository code responsible for obtaining the parser upload lease and performing the S3 upload;
- repository infrastructure definitions governing the non-production ingress bucket and workload-role S3 permissions;
- existing IAM role and attached-policy configuration through read-only AWS queries;
- existing S3 bucket configuration through read-only AWS queries;
- bucket region and endpoint alignment;
- object-key constraints and permitted resource ARN shape;
- request method, headers, content type, body handling, signing/presign construction, and expiry behavior in existing code;
- whether temporary credentials are being used consistently for the S3 request path;
- existing sanitized logs or diagnostic markers already available without adding new instrumentation.

The investigation should compare the implemented runtime path against the intended GC-38R architecture and identify one evidenced root cause or the narrowest unresolved hypothesis set.

---

## 4. Read-Only AWS Boundary

Read-only AWS inspection is authorized only for the existing GC-38R non-production resources relevant to the S3 upload boundary.

Permitted examples include read-only equivalents of:

- IAM role/policy retrieval;
- S3 bucket location/configuration retrieval;
- relevant bucket policy/configuration reads;
- resource metadata inspection.

No AWS write, update, attach, detach, put, delete, create, rotate, redeploy, or policy mutation is authorized.

If a required fact cannot be determined without mutation, STOP and report that limitation.

---

## 5. Repository Inspection Boundary

Repository inspection is read-only.

Do not modify:

- application code;
- Worker code;
- AWS deployment workflow;
- IAM policy files;
- Supabase configuration;
- Cloudflare configuration;
- diagnostic route or instrumentation;
- tests or fixtures.

No corrective PR is authorized by this instruction.

---

## 6. Security and Evidence Rules

Evidence must remain sanitized.

Do not expose, copy, log, or report:

- AWS access key ID, secret access key, or session token;
- workload certificate PEM;
- workload private key;
- CA private key;
- Authorization headers;
- `x-amz-x509` values;
- canonical request or string-to-sign;
- signatures;
- presigned S3 URL query material or signed fields;
- Supabase secret/service-role values;
- Cloudflare secrets;
- raw provider response bodies containing sensitive material.

Permitted evidence includes:

- non-secret resource names already approved for governance evidence;
- policy action/resource shapes;
- bucket region;
- request method and non-secret header names;
- sanitized HTTP status or existing bounded error category where available;
- code-path references and line-level findings;
- comparison of intended versus implemented permission/resource/request shape.

---

## 7. Required Investigation Order

Use the smallest-read-first sequence:

1. inspect the repository upload path and identify the exact S3 operation being attempted;
2. inspect the expected bucket/key/resource ARN and region used by that path;
3. inspect the workload-role S3 permissions and any relevant RuntimeBoundary constraint;
4. inspect the existing ingress bucket policy/configuration only as needed;
5. compare request construction against the permission and bucket constraints;
6. determine whether the failure is attributable to authorization, resource/key mismatch, region/endpoint mismatch, request-shape/signing behavior, expiry/timing, or another bounded ingress condition.

Do not broaden the investigation beyond the first active S3 boundary unless evidence requires it.

---

## 8. Stop Conditions

STOP and report without mutation if:

- root cause is identified;
- a single narrowly evidenced corrective change is apparent;
- investigation would require exposing secret material;
- investigation would require a write operation;
- production resources become implicated;
- evidence becomes ambiguous enough that a runtime retry or new instrumentation would be required.

No runtime retry is authorized under this instruction.

---

## 9. Required Completion Report

Create a report-only PR containing:

- files/configuration inspected;
- bounded AWS read-only facts inspected, if any;
- exact observed mismatch or failure cause, if evidenced;
- the narrowest unresolved hypothesis set if root cause is not yet proven;
- confirmation that no mutation, deployment, retry, cleanup, or production action occurred;
- recommended next step classified as one of:
  - `CORRECTIVE AUTHORIZATION RECOMMENDED`;
  - `ADDITIONAL READ-ONLY EVIDENCE REQUIRED`;
  - `BOUNDED DIAGNOSTIC INSTRUMENTATION AUTHORIZATION REQUIRED`.

Do not self-merge the report PR.

---

## 10. Explicitly Not Authorized

This instruction does not authorize:

- C5 retry;
- code modification;
- IAM modification;
- S3 bucket or bucket-policy modification;
- RuntimeBoundary modification;
- Roles Anywhere modification;
- certificate or CA changes;
- Cloudflare modification or deployment;
- Supabase modification;
- Lambda modification or deployment;
- GitHub OIDC deployment workflow execution;
- production changes;
- cleanup;
- migration execution;
- progression to later release stages.

---

## 11. Mission Control Disposition

Upon human merge of this instruction:

**READ-ONLY S3 BLOCKER INVESTIGATION IS AUTHORIZED — NON-PRODUCTION ONLY — NO RETRY OR MUTATION — STOP WHEN THE FIRST CAUSE IS EVIDENCED.**
