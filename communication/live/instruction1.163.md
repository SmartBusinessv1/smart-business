# SMART BUSINESS — MISSION CONTROL AUTHORIZATION

## SB-P-1.11-GC-38R — PHASE B NON-PRODUCTION RERUN #8

**Instruction ID:** `instruction1.163`  
**Parent Mission:** `SB-P-1.11 — Product Catalog & Pricing`  
**Workstream:** `GC-38R — Lambda Parser Non-Production Deployment`  
**Authorized By:** Mission Control  
**Execution Owner:** Founder-triggered GitHub Actions  
**Environment:** `aws-nonprod-parser`  
**Production Authority:** NONE

---

## 1. Purpose

Authorize exactly one fresh Founder-triggered execution of the canonical workflow:

`SB-P-1.11-GC-38R Parser Non-Production Deploy`

from canonical `main`, after merge of PR #361 implementing the narrow new-account Lambda reserved-concurrency compatibility fallback.

This rerun is intended to continue the already-authorized GC-38R non-production deployment path without waiting for the temporary new-account Lambda concurrency quota to increase.

---

## 2. Canonical Starting State

Canonical `main` at authorization time:

`c96fef3cf51720075d767b37f224633d574614d1`

This contains:

- existing canonical Trust Anchor `teamlips-sb-np-parser-trust-anchor`;
- automatic AWS service-linked role bootstrap already completed and Founder session signed out;
- existing Roles Anywhere Profile created/reused by the workflow path;
- workload CSR generation path;
- Lambda function created in non-production;
- merged concurrency compatibility correction from PR #361.

---

## 3. Exact Run Authorization

The Founder may trigger exactly one workflow execution with:

- branch: `main`;
- protected environment: `aws-nonprod-parser`;
- `generate_workload_csr = true`;
- no new IAM permission;
- no admin/root AWS session;
- no manual AWS repair before or during the run.

The workflow shall:

1. reuse the existing canonical Trust Anchor when found;
2. reuse or create only already-authorized non-production Roles Anywhere resources;
3. generate the workload CSR/private-key handoff artifact according to the existing workflow;
4. create/update the parser Lambda according to the locked runtime/memory/timeout settings;
5. always attempt reserved concurrency `5`;
6. continue without per-function reserved concurrency only if the exact merged new-account quota fallback condition is matched;
7. fail closed on every other unexpected provider or permission error;
8. continue through the remaining already-authorized Function URL / deployment summary / artifact stages if no unexpected error occurs.

---

## 4. Locked Boundaries

This authorization does NOT permit:

- additional workflow reruns beyond this one;
- IAM policy or role broadening;
- RuntimeBoundary changes;
- OIDC trust changes;
- GitHub Environment protection changes;
- static AWS credentials;
- CA regeneration, CA private-key access, upload, movement, or disclosure;
- manual Roles Anywhere Profile repair;
- production AWS changes;
- production Supabase migrations;
- Lovable/public deployment;
- Phase C runtime verification;
- Stage 21 or later progression.

If the run encounters a new blocker, stop and report the exact failed step and provider error. Mission Control will prefer a bounded workaround-first response rather than passive waiting, while preserving security boundaries.

---

## 5. Success Evidence

If the workflow completes successfully, retain only non-secret evidence sufficient to confirm:

- Trust Anchor reuse;
- Roles Anywhere Profile state;
- Lambda function state;
- reserved-concurrency result marker (applied or deferred-new-account-quota);
- Function URL state;
- non-secret deployment summary;
- generation of `gc38r-workload-csr-handoff` when applicable.

Do not expose or paste the workload private key into chat, issues, PRs, logs, or documentation.

---

## 6. End of Authority

This authorization is consumed immediately after the single workflow execution, regardless of PASS or FAIL.

A further rerun requires fresh Mission Control authorization.
