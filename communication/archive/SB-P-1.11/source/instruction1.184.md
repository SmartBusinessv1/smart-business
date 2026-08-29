# SMART BUSINESS — REPOSITORY COMMUNICATION

# SB-P-1.11-GC-38R — C5 RETRY AUTHORIZATION AFTER S3 CORS CORRECTION

**Instruction ID:** `instruction1.184`  
**Mission:** `SB-P-1.11 — Product Catalog & Pricing`  
**Workstream:** `GC-38R — Lambda Parser Non-Production Deployment`  
**Sender:** Mission Control  
**Recipient:** Founder / Authorized Operator  
**Date:** 2026-08-27  
**Status:** AUTHORIZATION PENDING HUMAN MERGE

---

## 1. Purpose

Authorize exactly one controlled C5 retry after the bounded non-production S3 CORS correction recorded in `communication/live/report1.178.md`.

The purpose is to verify whether the existing authenticated diagnostic path now advances beyond the prior `S3 upload — Failed` boundary.

This instruction authorizes no implementation change.

---

## 2. Preconditions

Execution is authorized only after this instruction is human-reviewed and merged to `main`.

Before retrying C5, verify all of the following remain true:

1. `communication/live/report1.178.md` is present on `main` and records `GC-38R NON-PRODUCTION S3 CORS CORRECTION — PASS`.
2. The exact non-production bucket CORS rule remains present with:
   - exact Worker origin `https://smart-business-parser-nonprod.team-lips-smart-business.workers.dev`;
   - `POST` only;
   - `AllowedHeaders = *`;
   - no additional origin, method, or rule.
3. The existing diagnostic route remains available.
4. The target remains the existing non-production Worker and `smart-business-test` Supabase environment only.
5. No C5 retry has been executed after the correction recorded in `report1.178.md`.

If any precondition is false or ambiguous, STOP and report before running the diagnostic.

---

## 3. Authorized Retry

Authorize exactly one authenticated invocation of the existing GC-38R C5 diagnostic path using the same fixed synthetic CSV fixture and existing throwaway test user/business.

Observe progress in order:

1. authenticated diagnostic request;
2. preview / guard path;
3. upload lease / Roles Anywhere CreateSession path;
4. S3 upload;
5. confirm + dispatch to Lambda Function URL through AWS_IAM;
6. Lambda invocation;
7. synthetic CSV parse;
8. XLSX verification only if the current C5 procedure already includes it and only after CSV passes.

Do not skip ahead. Stop at the first blocker.

---

## 4. Stop-on-First-Blocker Rule

If any step fails:

1. STOP immediately;
2. do not click `Run diagnostic` again;
3. do not modify code, AWS IAM, S3, RuntimeBoundary, Roles Anywhere, Lambda, Cloudflare, Supabase, certificates, CA, or GitHub workflows;
4. do not redeploy;
5. do not perform cleanup;
6. create a report-only PR containing sanitized evidence and the exact first failure point.

No opportunistic correction is authorized.

---

## 5. If C5 Passes

If the complete authorized path passes:

1. create a report-only PR recording the successful result;
2. do not perform cleanup under this instruction;
3. do not remove or disable the diagnostic route, temporary instrumentation, test bindings, or throwaway test user/business;
4. do not proceed to production, production migrations, or later lifecycle stages;
5. await separate Mission Control cleanup/closure authorization.

A C5 PASS is runtime evidence only. It is not production authorization or mission closure.

---

## 6. Sanitized Evidence Rules

The report may record only bounded non-secret evidence such as:

- pass/fail state for each C5 step;
- sanitized HTTP status category where already exposed by the diagnostic;
- whether S3 upload passed;
- whether Lambda invocation and parser stages were reached and passed;
- row count or other existing non-secret bounded parser markers.

Do not expose or record:

- AWS access keys, secret keys, or session tokens;
- presigned S3 URL query material or signed fields;
- workload certificate PEM;
- workload private key;
- CA private key;
- Authorization headers;
- signatures;
- canonical requests or strings-to-sign;
- provider response bodies containing sensitive material;
- Supabase secret/service-role values;
- temporary test-user password.

---

## 7. Explicitly Not Authorized

This instruction does not authorize:

- any C5 retry beyond the single attempt authorized here;
- application or Worker code changes;
- AWS IAM, S3, Lambda, RuntimeBoundary, Roles Anywhere, certificate, or CA changes;
- Cloudflare changes or deployment;
- Supabase changes;
- GitHub workflow execution or modification;
- production changes;
- cleanup;
- production database migration;
- progression to later release stages.

---

## 8. Required Completion Report

After the single authorized retry, create a report-only PR recording:

- canonical environment used;
- confirmation that `report1.178.md` and the exact CORS correction were present;
- step-by-step C5 result;
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
