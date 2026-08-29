# SMART BUSINESS — REPOSITORY COMMUNICATION

# SB-P-1.11-GC-38R — NON-PRODUCTION S3 CORS CORRECTION AUTHORIZATION

**Instruction ID:** `instruction1.183`  
**Mission:** `SB-P-1.11 — Product Catalog & Pricing`  
**Workstream:** `GC-38R — Lambda Parser Non-Production Deployment`  
**Sender:** Mission Control  
**Recipient:** Founder / Authorized AWS Operator  
**Date:** 2026-08-27  
**Status:** AUTHORIZATION PENDING HUMAN MERGE

---

## 1. Purpose

Authorize one narrowly scoped correction to the existing GC-38R non-production S3 ingress bucket after the read-only investigation recorded in `communication/live/report1.177.md` evidenced that the approved browser-to-S3 presigned POST path has no bucket CORS configuration.

This instruction authorizes only the minimum S3 CORS mutation required to allow the existing non-production diagnostic browser origin to perform the already-approved presigned multipart POST.

This instruction does not authorize a C5 retry.

---

## 2. Preconditions

Execution is authorized only after this instruction is human-reviewed and merged to `main`.

Before any AWS change, verify all of the following remain true:

1. `communication/live/report1.177.md` is present on `main` and records the missing S3 CORS configuration as the evidenced first active blocker.
2. The target bucket is exactly `teamlips-sb-np-parser-658980433673-ap-south-1`.
3. The target remains non-production only.
4. The current bucket CORS section still shows no configuration.
5. No additional C5 retry has been executed after the attempt recorded in `report1.176.md`.

If any precondition is false or ambiguous, STOP and report before changing anything.

---

## 3. Authorized AWS Mutation

Authorize exactly one CORS configuration on the existing non-production ingress bucket.

The allowed browser origin must be exactly:

`https://smart-business-parser-nonprod.team-lips-smart-business.workers.dev`

The allowed method must be exactly:

`POST`

The rule may allow request headers using `*` because the multipart presigned POST path may require browser-managed request headers and all upload authority remains independently constrained by the existing expiring SigV4 POST policy, exact object key, checksum, and byte-length conditions.

No wildcard origin is authorized.

No additional HTTP method is authorized.

No public-read access, ACL change, bucket policy change, object ownership change, lifecycle change, encryption change, versioning change, access-point change, or other bucket setting change is authorized.

An acceptable bounded CORS rule is:

```json
[
  {
    "AllowedHeaders": ["*"],
    "AllowedMethods": ["POST"],
    "AllowedOrigins": [
      "https://smart-business-parser-nonprod.team-lips-smart-business.workers.dev"
    ],
    "MaxAgeSeconds": 300
  }
]
```

Do not add `GET`, `PUT`, `DELETE`, or additional origins.

---

## 4. Execution Method

Use the AWS Console S3 bucket CORS editor for the exact non-production bucket unless a separately approved administrative path is already available.

The operator must:

1. open the exact non-production bucket;
2. open `Permissions` → `Cross-origin resource sharing (CORS)`;
3. edit only the CORS configuration;
4. apply the exact bounded rule authorized above;
5. save once;
6. perform a read-back inspection of the CORS section after save.

Do not modify any other S3 control while executing this instruction.

---

## 5. Verification

After the save, verify read-only that the bucket CORS configuration contains exactly one rule with:

- origin = `https://smart-business-parser-nonprod.team-lips-smart-business.workers.dev`;
- method = `POST` only;
- allowed headers = `*`;
- no wildcard origin;
- no additional method;
- no additional rule.

Capture only non-secret evidence of the resulting CORS rule.

A successful CORS configuration read-back is evidence that the corrective mutation was applied. It is not evidence that C5 passes.

---

## 6. Security Boundary

This authorization does not change the existing upload security model.

The presigned POST remains independently constrained by the existing implementation to:

- one generated `parser-ingress/<UUID>` object key;
- exact expected byte length;
- exact SHA-256 checksum;
- temporary AWS credentials;
- short-lived SigV4 POST policy;
- non-production ingress bucket only.

CORS is a browser access-control response policy, not an authorization grant to bypass AWS IAM or SigV4.

---

## 7. Explicitly Not Authorized

This instruction does not authorize:

- any C5 retry;
- application or Worker code modification;
- GitHub workflow modification or execution;
- IAM role or policy modification;
- RuntimeBoundary modification;
- Roles Anywhere modification;
- certificate or CA changes;
- Lambda modification or deployment;
- Cloudflare modification or deployment;
- Supabase modification;
- S3 bucket-policy modification;
- S3 ACL/public-access modification;
- production AWS or product changes;
- cleanup;
- database migration;
- progression to later release stages.

---

## 8. Stop Conditions

STOP and report without further mutation if:

- the target bucket is not the exact non-production ingress bucket;
- an existing CORS configuration unexpectedly appears before the change;
- the AWS Console requires a broader bucket change;
- save fails;
- read-back differs from the exact authorized rule;
- production resources become implicated.

Do not improvise a broader CORS policy.

---

## 9. Required Completion Report

After the one authorized CORS correction and read-back verification, create a report-only PR recording:

- exact non-production bucket name;
- that the prior state had no CORS configuration;
- that one exact-origin, POST-only CORS rule was applied;
- that read-back verified the bounded rule;
- confirmation that no other AWS, code, Cloudflare, Supabase, certificate, IAM, Lambda, production, cleanup, or retry action occurred;
- final disposition:
  - `GC-38R NON-PRODUCTION S3 CORS CORRECTION — PASS`, or
  - `GC-38R NON-PRODUCTION S3 CORS CORRECTION — BLOCKED`.

Do not self-merge the report PR.

A separate Mission Control authorization is required before any C5 retry.

---

## 10. Mission Control Disposition

Upon human merge of this instruction:

**ONE BOUNDED NON-PRODUCTION S3 CORS CORRECTION IS AUTHORIZED — EXACT ORIGIN — POST ONLY — READ-BACK REQUIRED — NO C5 RETRY UNDER THIS AUTHORIZATION.**
