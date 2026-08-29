# SMART BUSINESS — REPOSITORY COMMUNICATION

# SB-P-1.11-GC-38R — PHASE C C5 AWS-LAYER DIAGNOSIS AUTHORIZATION

**Instruction ID:** `instruction1.172`
**Mission:** `SB-P-1.11 — Product Catalog & Pricing`
**Workstream:** `GC-38R — Lambda Parser Non-Production Deployment`
**Sender:** Mission Control
**Recipient:** Claude Engineering
**Date:** 2026-08-26
**Status:** AUTHORIZATION — BOUNDED NON-PRODUCTION DIAGNOSIS

---

## 1. Trigger and Current State

This instruction follows the canonical merge of `communication/live/report1.170.md` through PR #378.

The following facts are accepted as current Mission Control state:

- the forward SQL correction authorized by `instruction1.171.md` was applied only to `smart-business-test` (`drravyyauixltoihzmwo`);
- the parser guard/lease regression suite passes and the full suite is 167/167 PASS;
- the real authenticated diagnostic path now succeeds through merchant authentication, `acquire_parser_preview_guard`, and `issue_parser_upload_lease`;
- a real upload lease is issued;
- execution then fails inside the existing `parserLeasePreview` AWS credential / presign block and emits only the intentionally sanitized `presign_failed` event;
- the six non-secret `PARSER_*` configuration values are present and correctly formatted;
- Roles Anywhere `CreateSession` is the strongest current hypothesis, but this has not yet been proven;
- no successful temporary AWS credential issuance or Lambda invocation has yet been confirmed;
- the diagnostic route, test-only Cloudflare bindings, and throwaway `smart-business-test` user/business remain in place because C5 has not passed.

Mission Control therefore authorizes one tightly bounded diagnosis-and-retry cycle to identify the exact AWS-layer failure without weakening security or exposing secrets.

---

## 2. Objective

Determine the exact cause of the current `presign_failed` condition and, if the cause can be corrected without exceeding this authorization, reattempt GC-38R Phase C C5 through the existing authenticated diagnostic path.

The target outcome is evidence sufficient to distinguish among at least these classes:

1. local certificate parsing / key import / signature preparation failure;
2. AWS Roles Anywhere `CreateSession` HTTP rejection, including sanitized HTTP status classification;
3. malformed but successful Roles Anywhere response;
4. another bounded local failure inside the already-existing credential/presign path.

The investigation must preserve the existing rule that raw provider responses, certificate material, private keys, temporary credentials, presigned fields, signatures, and authorization headers are never logged or surfaced.

---

## 3. Authorized Sequence

### 3.1 First preference — existing read-only evidence

Before modifying code, inspect any already-available, read-only evidence that can identify the failure without permission changes or new infrastructure.

Examples include:

- existing Cloudflare runtime logs;
- existing AWS Roles Anywhere / CloudTrail event history or equivalent account-native audit evidence, only if already accessible under current authority;
- existing AWS resource state relevant to the exact non-production Trust Anchor, Profile, role, and parser target.

This step is read-only only.

Do not create a CloudTrail trail, log group, metric, alarm, new IAM policy, new role, new AWS logging resource, or any other observability infrastructure under this instruction.

If existing evidence conclusively identifies the cause, skip temporary code instrumentation and proceed only as allowed by §5.

### 3.2 If existing evidence is insufficient — temporary sanitized instrumentation

Claude Engineering is authorized to add the minimum removable diagnostic instrumentation necessary to categorize the failure inside the existing server-only Roles Anywhere credential path.

The instrumentation may modify only the minimum necessary locations in:

- `src/lib/parser-ingress/roles-anywhere.ts`;
- and, only if required to surface the sanitized category, the immediately adjacent server-side `parser-lease.ts` diagnostic/logging path.

The implementation must preserve all existing functional behavior except for additional sanitized diagnostic categorization.

Permitted diagnostic outputs are limited to non-secret categories such as:

- `certificate_parse_failed`;
- `private_key_import_failed`;
- `signature_failed`;
- `create_session_http_failed` plus HTTP status code or status class only;
- `create_session_malformed_response`;
- `presign_local_failed`;
- equivalent tightly bounded categorical markers required by the actual code path.

Do not log or expose:

- PEM certificate content;
- certificate chain content;
- workload private key;
- CA private key or CA passphrase;
- certificate serial number if not strictly necessary;
- canonical request;
- string-to-sign;
- raw signature;
- Authorization header;
- raw AWS response body;
- access key ID;
- secret access key;
- session token;
- temporary credential object;
- presigned S3 fields or policy;
- merchant identifiers beyond the repository's existing sanitized conventions;
- any Supabase service-role secret.

The diagnostic instrumentation must remain server-only and must not introduce any client-visible secret-bearing data.

---

## 4. Implementation Governance

If code instrumentation is required:

1. use a dedicated implementation branch;
2. keep the diff minimal and diagnosis-only;
3. add or update focused tests where practical to prove that secret-bearing/provider payloads are not emitted;
4. run `tsc`, lint, and the existing test suite;
5. open a dedicated PR to `main` for human review;
6. do not self-merge;
7. do not redeploy the instrumented code until the Founder has human-reviewed and merged that PR.

Human merge of the instrumentation PR authorizes redeployment only to `smart-business-parser-nonprod` for this diagnostic retry.

---

## 5. Correction Authority After Root Cause Is Proven

This instruction authorizes correction only when the proven cause can be fixed within the already-approved GC-38R non-production integration boundary and without widening security authority.

Examples that may be corrected under this instruction after proof:

- a local deterministic bug in the existing AWS4-X509 request construction;
- a local certificate parsing / key import incompatibility;
- a malformed request detail in the existing Roles Anywhere `CreateSession` implementation;
- another directly adjacent implementation defect in the existing server-only Roles Anywhere path.

Any such code correction must use a dedicated branch and human-reviewed PR before deployment.

This instruction does **not** authorize changing AWS IAM, RuntimeBoundary, OIDC trust, Trust Anchor policy, Roles Anywhere Profile permissions, workload-role permissions, Lambda Function URL authentication, S3 bucket policy, or any equivalent security boundary.

If the proven cause requires any such AWS permission/security change, STOP and report the exact requirement to Mission Control before making the change.

---

## 6. C5 Retry Authority

After either:

- conclusive read-only diagnosis with no code change required; or
- human merge and non-production deployment of the approved diagnostic/corrective PR,

reattempt the existing GC-38R C5 path using:

- Cloudflare Worker: `smart-business-parser-nonprod` only;
- Supabase: `smart-business-test` (`drravyyauixltoihzmwo`) only;
- the existing real merchant-authenticated diagnostic route;
- the existing bounded synthetic CSV fixture;
- the existing AWS non-production parser resources only.

Required evidence remains:

1. authenticated server path succeeds;
2. Roles Anywhere `CreateSession` result is sanitized and conclusively classified;
3. if successful, temporary credentials are short-lived and never logged;
4. S3 upload lease/presign/upload path succeeds;
5. Lambda Function URL remains `AWS_IAM` protected and accepts the signed invocation;
6. bounded synthetic CSV parse succeeds;
7. XLSX may be exercised only if already supported without new implementation work;
8. error handling remains sanitized;
9. no production system is touched.

---

## 7. Cleanup Requirement

If C5 completes successfully under this instruction, cleanup is mandatory before Phase C can close.

Cleanup must include, as applicable:

- remove the temporary diagnostic route and its server-side enablement helper, or otherwise remove the temporary diagnostic surface from canonical code through a human-reviewed PR;
- remove any temporary AWS-layer diagnostic instrumentation added under this instruction;
- remove `GC38R_C5_DIAGNOSTIC_ENABLED` from `smart-business-parser-nonprod`;
- remove the test-only Supabase runtime bindings from that Worker when they are no longer required for the diagnostic path:
  - `SUPABASE_URL`;
  - `SUPABASE_PUBLISHABLE_KEY`;
  - `SUPABASE_SERVICE_ROLE_KEY`;
- delete the throwaway test user/business created solely for this C5 verification when no longer required;
- preserve the original parser bindings and secrets required by GC-38R;
- verify the normal application still builds/tests clean after cleanup.

Do not remove or revoke the workload certificate/private key yet unless separately authorized by Mission Control; they remain required through mission closure.

If C5 remains blocked, do not destroy evidence or remove the diagnostic setup needed for the immediate next retry unless required for security.

---

## 8. Explicitly Not Authorized

This instruction does not authorize:

- any production Supabase migration or production database action;
- any production Cloudflare deployment;
- any production AWS action;
- IAM policy widening or new IAM authority;
- OIDC trust changes;
- RuntimeBoundary changes;
- Roles Anywhere Trust Anchor/Profile/workload-role permission changes;
- Lambda Function URL auth weakening;
- S3 bucket policy widening;
- new CloudTrail infrastructure or other persistent AWS observability infrastructure;
- CA private-key use, transfer, disclosure, upload, or regeneration;
- replacement/regeneration of the existing workload certificate without new authorization;
- permanent diagnostic endpoints;
- permanent merchant-facing parser integration;
- Product Truth changes;
- Catalog/Inventory behavior changes;
- production migrations;
- Lovable publication;
- DNS/R2/custom-domain changes;
- Stage 21 or later lifecycle work.

---

## 9. Stop Conditions

STOP and report to Mission Control if any of the following becomes necessary:

- AWS permission or security-boundary widening;
- CA private key or CA passphrase access;
- replacement of the Trust Anchor/Profile/workload role;
- weakening `AWS_IAM` Function URL authentication;
- production access;
- exposing raw provider bodies or credential material;
- a change outside the existing GC-38R parser ingress/runtime boundary;
- a new product feature or permanent frontend integration;
- uncertainty about whether a proposed correction changes security authority rather than only implementation correctness.

---

## 10. Required Final Report

Return a dedicated report to Mission Control documenting:

- exact canonical commit used;
- whether diagnosis was read-only, instrumented, or both;
- exact sanitized root cause;
- any implementation PR/commit and human-merge identity;
- exact non-production deployment identity/version if redeployed;
- Roles Anywhere result without credential disclosure;
- temporary credential lifetime confirmation if created;
- S3 presign/upload result;
- Lambda `AWS_IAM` invocation result;
- synthetic CSV result and XLSX result if applicable;
- full cleanup status;
- confirmation that production remained untouched;
- confirmation that no CA private key, workload private key, raw temporary credentials, or provider response bodies were exposed;
- final disposition: PASS, BLOCKED, or FAIL with precise reason.

---

## 11. Mission Control Decision

`GC-38R PHASE C C5 AWS-LAYER DIAGNOSIS — AUTHORIZED WITHIN NON-PRODUCTION BOUNDARY`

This is a bounded diagnosis-and-retry authorization, not a new product mission and not an authorization to widen AWS security authority.