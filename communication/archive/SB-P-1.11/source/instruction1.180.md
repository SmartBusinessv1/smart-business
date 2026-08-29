# SMART BUSINESS — REPOSITORY COMMUNICATION

# SB-P-1.11-GC-38R — C5 RETRY AUTHORIZATION AFTER WORKLOAD TRUST RECONCILIATION

**Instruction ID:** `instruction1.180`
**Mission:** `SB-P-1.11 — Product Catalog & Pricing`
**Workstream:** `GC-38R — Lambda Parser Non-Production Deployment`
**Sender:** Mission Control
**Recipient:** Claude Engineering
**Date:** 2026-08-27
**Status:** AUTHORIZATION PENDING HUMAN MERGE

---

## 1. Purpose

Authorize exactly one controlled retry of GC-38R Phase C C5 against the corrected non-production AWS trust configuration.

This instruction follows the successful GitHub OIDC workload-role trust reconciliation recorded in `communication/live/report1.175.md`.

No implementation change is authorized by this instruction.

---

## 2. Preconditions

Execution is authorized only after this instruction is human-reviewed and merged to `main`.

Before retrying C5, verify all of the following remain true:

1. `communication/live/report1.175.md` is present on `main` and records successful workflow run #10.
2. The non-production workload-role trust policy reconciliation completed with:
   - `exact_trust_anchor=true`;
   - `placeholders=false`;
   - `wildcard=false`;
   - successful AWS read-back verification.
3. The existing diagnostic route and temporary diagnostic instrumentation required for C5 remain available.
4. The target remains the existing non-production Cloudflare Worker and `smart-business-test` Supabase environment only.
5. No production environment or resource is involved.

If any precondition is false, STOP and report the discrepancy. Do not repair it under this instruction.

---

## 3. Authorized C5 Retry

Authorize one retry of the existing authenticated C5 diagnostic path using the same bounded synthetic test fixture and the existing throwaway non-production test user/business.

The retry must proceed through the existing C5 path only.

Observe and record progress in this order:

1. authenticated diagnostic request reaches parser preview flow;
2. parser preview guard succeeds;
3. parser upload lease is issued;
4. AWS IAM Roles Anywhere `CreateSession` is attempted;
5. temporary AWS credentials are issued and their bounded lifetime is validated;
6. S3 presign and upload succeed;
7. confirm/dispatch reaches the Lambda Function URL through the approved AWS_IAM path;
8. Lambda invocation succeeds;
9. synthetic CSV parse completes successfully;
10. if the current C5 procedure includes the existing XLSX verification path, execute it only after the CSV path has passed.

Do not skip ahead. Stop at the first blocker.

---

## 4. Sanitized Evidence Rules

The completion report may record only bounded, non-secret evidence such as:

- pass/fail state for each C5 step;
- sanitized error category;
- HTTP status when already permitted by existing instrumentation;
- whether temporary credentials were issued and whether lifetime validation passed, without exposing credential values;
- whether S3 upload, Lambda invocation, CSV parse, and XLSX parse were reached and passed;
- non-secret resource names/identifiers already approved for repository evidence where necessary.

The following must never be exposed, logged, copied into the repository, or displayed in the completion report:

- workload certificate PEM body;
- workload private key;
- CA private key;
- raw AWS access key ID, secret access key, or session token;
- Authorization headers;
- `x-amz-x509` values;
- AWS4-X509 canonical request;
- AWS4-X509 string-to-sign;
- raw signatures;
- provider response body;
- presigned S3 fields or signed query material;
- Supabase service-role secret;
- any other secret value.

Use the existing sanitized diagnostic categories only.

---

## 5. Stop-on-First-Blocker Rule

If any C5 step fails:

1. STOP at the first blocker;
2. do not change code;
3. do not change AWS IAM, Roles Anywhere, Lambda, S3, RuntimeBoundary, OIDC provider, certificate, CA, or Cloudflare configuration;
4. do not redeploy;
5. do not rerun C5 a second time under this authorization;
6. open a report-only PR containing sanitized evidence and the exact first failure point.

No opportunistic correction is authorized.

---

## 6. If C5 Passes

If the complete authorized C5 path passes:

1. record the successful result in a report-only PR;
2. do not perform cleanup under this instruction;
3. do not remove or disable the diagnostic route, temporary diagnostic instrumentation, test bindings, or throwaway test user/business yet;
4. do not proceed to production, migrations, or later lifecycle stages;
5. await separate Mission Control cleanup/closure authorization.

A C5 PASS is evidence of runtime success only. It is not production authorization or mission closure.

---

## 7. Explicitly Not Authorized

This instruction does not authorize:

- any code modification;
- any AWS IAM or Roles Anywhere mutation;
- any additional GitHub OIDC deployment workflow run;
- any Cloudflare deployment;
- any certificate or CA replacement;
- any fresh workload keypair or CSR generation;
- any RuntimeBoundary change;
- any OIDC provider change;
- any production Supabase, Cloudflare, AWS, or domain change;
- any production database migration;
- any C5 retry beyond the single attempt authorized here;
- any cleanup after a PASS;
- any progression to later release stages.

---

## 8. Required Completion Report

After the single authorized retry, create a report-only PR that records:

- canonical commit/environment used;
- confirmation that the corrected trust reconciliation prerequisite was present;
- C5 step-by-step result;
- first blocker if any;
- confirmation that no unauthorized mutation occurred;
- final disposition as either:
  - `GC-38R PHASE C C5 — PASS`, or
  - `GC-38R PHASE C C5 — BLOCKED`.

Do not self-merge the report PR.

---

## 9. Mission Control Disposition

Upon human merge of this instruction:

**ONE C5 RETRY IS AUTHORIZED — NON-PRODUCTION ONLY — STOP AT FIRST BLOCKER — NO CORRECTIVE CHANGE OR CLEANUP UNDER THIS AUTHORIZATION.**
