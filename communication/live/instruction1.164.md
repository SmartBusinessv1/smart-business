# SMART BUSINESS — REPOSITORY COMMUNICATION

# SB-P-1.11-GC-38R — WORKLOAD CSR HANDOFF ARTIFACT CORRECTION

**Instruction ID:** `instruction1.164`
**Mission:** `SB-P-1.11 — Product Catalog & Pricing`
**Workstream:** `GC-38R — Lambda Parser Non-Production Deployment`
**Executing Room:** Claude Engineering
**Authorized By:** Mission Control
**Status:** ACTIVE AFTER FOUNDER HUMAN MERGE
**Date:** 2026-08-22

---

## 1. Triggering Evidence

Phase B non-production deploy run #8 completed successfully through the infrastructure path, including:

- Trust Anchor reuse;
- Roles Anywhere Profile path;
- workload CSR generation;
- Lambda create/update;
- non-secret deployment summary;
- artifact upload step execution;
- handoff notice;
- cleanup.

However, the upload step logged:

```text
Warning: No files were found with the provided path: .parser-pki-handoff/. No artifacts will be uploaded.
```

The workflow currently stages the generated CSR and workload private key under the hidden directory:

```text
.parser-pki-handoff/
```

while `actions/upload-artifact` runs with the default:

```text
include-hidden-files: false
```

Therefore the intended artifact `gc38r-workload-csr-handoff` was not created. The runner cleanup then removed the staged handoff files.

This is an artifact-packaging defect only. It is not an AWS infrastructure, IAM, Roles Anywhere, CA, Lambda, parser, Supabase, Lovable, or production defect.

---

## 2. Authorized Correction

Claude Engineering is authorized to make only the narrow workflow correction required to make the workload handoff directory non-hidden while preserving the current hidden-file exclusion behavior.

Preferred correction:

```text
.parser-pki-handoff
```

to:

```text
parser-pki-handoff
```

Update only the corresponding references required for this path, including as applicable:

1. directory creation/copy path in the workload CSR generation step;
2. `actions/upload-artifact` path;
3. cleanup path.

Keep the artifact name unchanged:

```text
gc38r-workload-csr-handoff
```

Keep retention unchanged at 1 day.

Keep `include-hidden-files: false` unchanged.

Do not solve this by enabling upload of hidden files globally unless the preferred non-hidden-directory correction is technically impossible and the mission is stopped for Mission Control review.

---

## 3. Required Verification

Before opening the implementation PR, verify statically that:

- only the intended handoff-path references changed;
- the CSR filename remains `workload-certificate-signing-request.csr`;
- the workload private-key filename remains `workload-private-key.pem`;
- the artifact name remains `gc38r-workload-csr-handoff`;
- retention remains 1 day;
- no private key, CSR, certificate payload, AWS credential, or secret is logged;
- cleanup still removes the local handoff directory and `/tmp/parser-pki`;
- CA private-key custody is untouched;
- workflow YAML and shell syntax remain valid;
- all unrelated deployment steps remain unchanged.

Where practical, perform a local synthetic path test confirming that `actions/upload-artifact` would target the non-hidden directory containing exactly the two intended handoff files.

---

## 4. Locked Boundaries

This instruction does **not** authorize:

- any AWS API call;
- any workflow dispatch or rerun;
- any IAM, deploy-policy, RuntimeBoundary, OIDC, or GitHub Environment change;
- any Roles Anywhere resource change;
- any Lambda/S3 infrastructure mutation;
- any CA private-key access, movement, regeneration, or exposure;
- any workload certificate signing;
- any production action;
- any Supabase or Lovable change;
- Phase C runtime verification;
- Stage 21 or later progression.

The successful run #8 infrastructure state must be preserved.

---

## 5. Required Deliverable

Return:

`communication/live/report1.165.md`

The report must state:

- exact canonical `main` SHA reviewed;
- exact workflow references changed;
- static/synthetic verification evidence;
- confirmation that artifact name, filenames, retention, cleanup, and secret-handling boundaries remain unchanged;
- confirmation that no AWS call or workflow run occurred;
- final disposition.

If the correction is implemented, submit the workflow change and report through one dedicated human-reviewed PR.

Do not self-merge.

---

## 6. Final Disposition Vocabulary

Use one of:

`GC-38R WORKLOAD CSR HANDOFF ARTIFACT CORRECTION — READY`

or

`GC-38R WORKLOAD CSR HANDOFF ARTIFACT CORRECTION — STOPPED`

If STOPPED, explain the exact blocker and do not broaden scope.

---

## 7. Execution Principle

This correction is intentionally narrow and workaround-first.

The infrastructure deployment has already passed. Do not reopen settled AWS/IAM work. Correct only the packaging defect that prevented the generated workload CSR/private-key pair from becoming the intended short-lived artifact.