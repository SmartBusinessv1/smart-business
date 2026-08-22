# SMART BUSINESS — MISSION CONTROL AUTHORIZATION

## SB-P-1.11-GC-38R — Lambda New-Account Concurrency Compatibility Correction

**Instruction ID:** `instruction1.162`  
**Parent Mission:** `SB-P-1.11 — Product Catalog & Pricing`  
**Workstream:** `GC-38R — Lambda Parser Non-Production Deployment`  
**Executing Room:** Claude Engineering  
**Mode:** BOUNDED NON-PRODUCTION WORKFLOW CORRECTION  
**AWS Mutation Authority:** NONE during correction preparation  
**IAM Mutation Authority:** NONE  
**Phase B Rerun Authority:** NONE  
**Production Authority:** NONE

---

## 1. Triggering Provider Evidence

The latest authorized GC-38R Phase B non-production rerun progressed through existing IAM Roles Anywhere Trust Anchor reuse, workload CSR generation, and Lambda creation, then failed at the existing reserved-concurrency command with:

```text
InvalidParameterValueException when calling the PutFunctionConcurrency operation:
Specified ReservedConcurrentExecutions for function decreases account's
UnreservedConcurrentExecution below its minimum value of [10].
```

Canonical workflow currently attempts:

```bash
aws lambda put-function-concurrency \
  --function-name "${LAMBDA_FUNCTION_NAME}" \
  --reserved-concurrent-executions 5
```

AWS documents that new AWS accounts can have reduced Lambda concurrency quotas and can receive this class of deployment failure until account usage/quota posture increases.

Classification: **new-account Lambda quota compatibility blocker**, not a parser defect, IAM Roles Anywhere defect, certificate defect, or security-policy defect.

---

## 2. Mission Control Intent

Security boundaries remain strict. Process boundaries remain flexible. Provider quota blockers should trigger a reversible workaround instead of passive waiting when a safe path exists.

The steady-state target remains:

```text
ReservedConcurrentExecutions = 5
```

The temporary correction must let non-production deployment continue only when AWS rejects that setting because of the known new-account unreserved-concurrency minimum.

---

## 3. Authorized Correction

Claude Engineering is authorized to prepare the narrowest correction in:

`.github/workflows/aws-gc38r-parser-deploy.yml`

Required behavior:

1. Continue attempting reserved concurrency `5` on every authorized deployment.
2. If `PutFunctionConcurrency` succeeds, continue normally and emit an explicit success marker.
3. If and only if AWS returns the specific condition that the requested reservation would reduce `UnreservedConcurrentExecution` below its required minimum, emit:

```text
GC38R_LAMBDA_RESERVED_CONCURRENCY_DEFERRED_NEW_ACCOUNT_QUOTA
```

and continue the workflow without per-function reserved concurrency for that run.
4. Fail closed for every other `PutFunctionConcurrency` error.
5. Automatically reconcile on a future authorized run: as soon as AWS permits concurrency `5`, configure it normally without another code change.
6. Request no new IAM permission and make no deploy-policy change.

Generic error swallowing is prohibited.

---

## 4. Locked Boundaries

This temporary compatibility path must not:

- change Lambda memory (`2048 MB`);
- change Lambda timeout (`15 seconds`);
- change Node runtime;
- change Function URL authentication from `AWS_IAM`;
- add provisioned concurrency;
- increase reserved concurrency above `5`;
- add `lambda:GetAccountSettings`, Service Quotas permissions, or other account-wide IAM reads merely for this workaround;
- change RuntimeBoundary;
- change OIDC trust;
- change GitHub Environment protections;
- change Lambda execution-role or workload-role permissions;
- change IAM Roles Anywhere resources;
- touch Founder CA/private material or workload certificate material;
- touch Supabase, Lovable, production AWS, or production migrations.

The intended architecture remains reserved concurrency `5`; this is a non-production compatibility exception for the provider-imposed reduced new-account quota period only.

---

## 5. Verification Required

Claude Engineering must statically verify:

- normal success still applies reserved concurrency `5`;
- the exact known quota failure enters compatibility mode and continues;
- unrelated errors still terminate the workflow;
- no secret material is emitted;
- Lambda create/update/idempotency behavior is unchanged;
- Function URL, alias, and log stages are unchanged except for normal continuation after the quota-specific compatibility condition;
- YAML and shell syntax are valid;
- no IAM/security boundary changed.

Synthetic shell tests are allowed. No AWS workflow dispatch or provider mutation is authorized by this instruction.

---

## 6. Required Deliverable

Return:

`communication/live/report1.164.md`

The report must state:

- exact canonical `main` SHA reviewed;
- exact workflow lines changed;
- exact quota-specific matcher used;
- evidence for normal success, known quota fallback, and unrelated-error failure paths;
- confirmation that IAM/security/production boundaries remain unchanged;
- final disposition.

If code is changed, deliver the workflow correction and `report1.164.md` in one dedicated human-reviewed PR. Do not self-merge.

---

## 7. Authorized Final Dispositions

Use exactly one:

```text
GC-38R LAMBDA NEW-ACCOUNT CONCURRENCY COMPATIBILITY CORRECTION — READY
```

or

```text
GC-38R LAMBDA NEW-ACCOUNT CONCURRENCY COMPATIBILITY CORRECTION — STOPPED
```

Use `STOPPED` only if the exact quota-specific workaround requires broader IAM, security, or product changes.

---

## 8. Not Authorized

This instruction does not authorize:

- a Phase B rerun;
- manual Lambda edits in AWS console;
- making a quota increase a blocking prerequisite;
- production deployment;
- Phase C runtime verification;
- Stage 21 or later progression.

After Founder human merge of the correction PR, Mission Control may issue one fresh non-production rerun authorization.
