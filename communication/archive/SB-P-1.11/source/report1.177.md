# SMART BUSINESS — REPOSITORY COMMUNICATION

# SB-P-1.11-GC-38R — READ-ONLY S3 BLOCKER INVESTIGATION RESULT: MISSING CORS

**Report ID:** `report1.177`  
**Mission:** `SB-P-1.11 — Product Catalog & Pricing`  
**Workstream:** `GC-38R — Lambda Parser Non-Production Deployment`  
**Sender:** Mission Control  
**Recipient:** Smart Business Engineering / Governance Record  
**In Reply To:** `communication/live/instruction1.182.md`  
**Date:** 2026-08-27

---

## 1. Objective

Record the result of the read-only investigation authorized by `instruction1.182.md` into the first active C5 blocker recorded in `report1.176.md`:

`S3 upload — Failed`

This report is evidence-only. It authorizes no corrective mutation, deployment, C5 retry, cleanup, production action, or later-stage progression.

---

## 2. Repository Path Inspected

The investigation first inspected the existing non-production upload path, without modification.

Relevant files:

- `src/server-functions/gc38r-c5-diagnostic.ts`
- `src/routes/_authenticated/gc38r-c5-diagnostic.tsx`
- `src/server-functions/parser-lease.ts`
- `src/lib/parser-ingress/aws-client.ts`

Repository findings:

1. The diagnostic gate file contains no S3 implementation logic.
2. The diagnostic route performs a browser-side direct multipart `POST` to the presigned S3 URL returned by `parserLeasePreview`.
3. The browser appends all server-generated presigned fields plus the synthetic CSV file.
4. The object key is generated server-side with shape `parser-ingress/<UUID>`.
5. The bucket is supplied from the server-only `PARSER_INGRESS_BUCKET` configuration.
6. The S3 endpoint is constructed as `https://<bucket>.s3.<region>.amazonaws.com/`.
7. The presigned POST policy binds the exact bucket, exact object key, exact byte length, SHA-256 checksum, SigV4 credential/date, temporary session token, and a 300-second expiry.
8. Temporary AWS credentials are obtained server-side through IAM Roles Anywhere and are used only to sign the scoped POST policy; the long-form AWS secret credential material is not exposed to the browser.

---

## 3. Failure-Handling Finding

The diagnostic route distinguishes two S3 failure classes:

- browser `fetch()` throws before an HTTP `Response` is available → `S3 upload — Failed` with no HTTP category;
- S3 returns a non-2xx HTTP response → `S3 upload — Failed` plus a bounded `4xx`, `5xx`, or other HTTP status category.

The captured C5 result in `report1.176.md` showed only:

```text
S3 upload
Failed
```

No `4xx` or `5xx` category was present.

Therefore the browser did not expose an S3 HTTP response to the diagnostic JavaScript. The failure was at the browser-to-S3 transport/access boundary rather than an evidenced visible IAM denial.

---

## 4. Read-Only S3 CORS Inspection

The Founder performed a read-only inspection in the AWS Console of the existing non-production bucket:

`teamlips-sb-np-parser-658980433673-ap-south-1`

AWS Console path:

`S3 → bucket → Permissions → Cross-origin resource sharing (CORS)`

Observed state:

`No configurations to display`

No edit action was performed.

No AWS write occurred.

---

## 5. Evidenced Root Cause

The existing application design requires a browser loaded from the non-production Smart Business Worker origin to perform a direct cross-origin `POST` to the S3 bucket endpoint.

The target S3 bucket has no CORS configuration.

That missing CORS configuration is sufficient to cause browser `fetch()` to fail at the cross-origin boundary without exposing the underlying S3 response to JavaScript, matching the exact diagnostic symptom captured in C5: `Failed` with no HTTP status category.

Accordingly, the first active C5 blocker is evidenced as:

`MISSING S3 CORS CONFIGURATION FOR THE APPROVED BROWSER-TO-S3 PRESIGNED POST PATH`

The investigation stops here as required by `instruction1.182.md` because a single narrowly evidenced corrective change is apparent.

This report does not claim that no additional downstream issue can exist after CORS is corrected; it establishes the current first failure cause.

---

## 6. Scope and Security Confirmation

During this investigation:

- no application code was modified;
- no Worker code was modified;
- no IAM policy was modified;
- no S3 bucket or bucket-policy configuration was modified;
- no CORS configuration was added or edited;
- no RuntimeBoundary, Roles Anywhere, certificate, CA, Lambda, Cloudflare, Supabase, or GitHub OIDC configuration was modified;
- no C5 retry occurred;
- no deployment occurred;
- no cleanup occurred;
- no production resource was involved;
- no secret, temporary credential, presigned field, certificate/private-key material, Authorization header, signature, or provider response body was recorded.

---

## 7. Final Disposition

`GC-38R S3 READ-ONLY INVESTIGATION — ROOT CAUSE EVIDENCED`

**Root cause:** missing S3 CORS configuration on the existing non-production ingress bucket required by the approved direct browser-to-S3 presigned POST path.

**Recommended next step:** `CORRECTIVE AUTHORIZATION RECOMMENDED`

Mission Control should issue a narrowly scoped authorization to add only the minimum required non-production CORS rule for the existing approved browser upload path, followed by a separately authorized single C5 verification retry.

No corrective mutation or retry is authorized by this report.
