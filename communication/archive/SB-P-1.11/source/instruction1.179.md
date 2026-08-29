# SMART BUSINESS — REPOSITORY COMMUNICATION

# SB-P-1.11-GC-38R — CORRECTED NON-PRODUCTION OIDC DEPLOYMENT AUTHORIZATION

**Instruction ID:** `instruction1.179`  
**Mission:** `SB-P-1.11 — Product Catalog & Pricing`  
**Workstream:** `GC-38R — Lambda Parser Non-Production Deployment`  
**Sender:** Mission Control  
**Recipient:** Infrastructure Operations / Founder  
**Status:** PENDING FOUNDER HUMAN REVIEW AND MERGE  
**Date:** 2026-08-27

---

## 1. Purpose

Authorize one controlled execution of the corrected GitHub OIDC non-production parser deployment workflow after completion of the DeployPolicy v3 administrative prerequisite recorded in `communication/live/report1.174.md`.

This execution is intended to reconcile the existing non-production workload-role trust policy to the exact approved IAM Roles Anywhere Trust Anchor ARN using the corrected workflow merged by PR #390.

## 2. Preconditions

Before execution, confirm all of the following:

1. PR #390 is merged and the corrected `.github/workflows/aws-gc38r-parser-deploy.yml` is present on `main`.
2. PR #391 is merged and `instruction1.178.md` is active.
3. The one-time administrative DeployPolicy v3 correction is complete.
4. AWS shows `TeamLIPS-SB-NonProd-Parser-DeployPolicy` Version 3 as Default.
5. `communication/live/report1.174.md` is merged and records completion of that correction.
6. No Founder root/admin AWS session remains open.

If any precondition is false, do not run the workflow.

## 3. Exact execution authorization

After this instruction is human-reviewed and merged, authorize exactly one manual run of:

```text
.github/workflows/aws-gc38r-parser-deploy.yml
```

from:

```text
refs/heads/main
```

through the protected GitHub Environment:

```text
aws-nonprod-parser
```

using the established GitHub OIDC → `TeamLIPS-SB-NonProd-Parser-DeployRole` path.

For this reconciliation run:

```text
generate_workload_csr = false
```

Do not supply a Trust Anchor CA certificate input. The existing Trust Anchor must be reused.

## 4. Authorized mutation boundary

The workflow may perform only mutations already encoded in the human-merged non-production workflow and existing bounded deploy-role permissions.

For the issue under correction, the intended mutation is specifically:

- update the existing `TeamLIPS-SB-NonProd-Parser-WorkloadRole` assume-role trust policy;
- preserve Principal `rolesanywhere.amazonaws.com`;
- preserve actions `sts:AssumeRole`, `sts:TagSession`, `sts:SetSourceIdentity`;
- use `ArnEquals` with exactly:

```text
arn:aws:rolesanywhere:ap-south-1:658980433673:trust-anchor/b0282d51-b071-4c03-97d3-546e2f405baa
```

The workflow's fail-closed rendered-policy validation and provider read-back verification must remain active.

## 5. Required execution evidence

Capture only sanitized, non-secret evidence showing:

1. workflow run identity and `main` commit SHA;
2. OIDC deploy-role caller verification PASS;
3. workload trust-policy render validation PASS;
4. existing workload role trust-policy reconciliation completed;
5. provider read-back verification PASS for the exact Trust Anchor ARN;
6. final workflow disposition SUCCESS or first blocker.

Do not expose or record:

- OIDC token values;
- AWS access key, secret key, or session token values;
- certificate PEM bodies;
- private keys;
- Authorization headers;
- AWS4-X509 signatures;
- canonical requests or strings-to-sign;
- provider response bodies containing sensitive data;
- presigned S3 fields.

## 6. Stop conditions

If the workflow fails at any point:

- stop at the first blocker;
- do not perform a direct AWS console correction;
- do not widen IAM authority;
- do not modify the Trust Anchor, Profile, RuntimeBoundary, OIDC provider/trust, certificate, CA, parser business logic, Supabase, or Lovable;
- do not opportunistically rerun unless Mission Control separately authorizes a retry;
- create a sanitized report-only completion/blocker report.

## 7. Explicitly not authorized

This instruction does not authorize:

- production AWS, Supabase, Cloudflare, or Lovable changes;
- production migrations;
- Trust Anchor/Profile replacement;
- certificate or CA replacement;
- workload CSR generation or key rotation;
- RuntimeBoundary modification;
- deploy-role self-management;
- IAM wildcard expansion;
- static AWS credentials;
- IAM user creation;
- C5 runtime diagnostic execution;
- cleanup of temporary C5 diagnostic infrastructure;
- Stage 21+ work.

C5 remains a separate subsequent step after successful workflow reconciliation and review of its evidence.

## 8. Completion requirement

After the workflow completes, create a sanitized repository completion report recording the exact run result and verification evidence before any C5 retry is authorized.

---

**Mission Control disposition:** corrected non-production GitHub OIDC deployment workflow authorized for one controlled reconciliation run only, subject to Founder human review and merge of this instruction.