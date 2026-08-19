# SMART BUSINESS MISSION CONTROL

## SB-P-1.11 — GC-38R Phase B Non-Production Deployment Rerun Authorization

**Instruction ID:** `instruction1.146`  
**Mission:** `SB-P-1.11`  
**Workstream:** `GC-38R — Lambda Parser Non-Production Deployment`  
**Status:** ACTIVE AFTER HUMAN MERGE  
**Authorized By:** Mission Control  
**Execution Mode:** Founder-triggered protected GitHub Actions workflow only

---

## 1. Authorization Basis

Phase B Run #1 failed only because the IAM Roles Anywhere CLI tag shorthand used `Key`/`Value` instead of the required lowercase `key`/`value` form.

That defect was corrected by Claude Engineering and human-merged through PR `#335`.

Corrected canonical `main` SHA at authorization preparation:

`85a0dd740a31da26539c44341379992aefafac47`

This instruction authorizes a fresh Phase B run from corrected canonical `main` and nothing beyond it.

---

## 2. Authorized Workflow

Run only:

`.github/workflows/aws-gc38r-parser-deploy.yml`

Workflow name:

`SB-P-1.11-GC-38R Parser Non-Production Deploy`

Branch must be:

`main`

Protected environment must remain:

`aws-nonprod-parser`

AWS execution path must remain:

`GitHub Actions OIDC → TeamLIPS-SB-NonProd-Parser-DeployRole`

Approved AWS account:

`658980433673`

Approved region:

`ap-south-1`

---

## 3. Required Inputs for This Rerun

`trust_anchor_ca_certificate_pem`

- Supply the Founder-controlled **public CA certificate** only.
- Do not supply, expose, upload, or transmit the CA private key or its passphrase.

`generate_workload_csr`

- Set to `true`.

The workflow may create or reuse the authorized non-production Trust Anchor/Profile and generate the short-lived workload CSR/private-key handoff artifact according to the already-reviewed workflow.

---

## 4. Existing Partial Phase B State

Do not manually delete, replace, or repair resources created during Phase B Run #1.

The workflow is designed to be idempotent and must detect/reuse already-created authorized resources where applicable.

If the rerun requires permission broadening, manual AWS repair, deletion/replacement of unexpected resources, RuntimeBoundary modification, OIDC trust modification, or CA private-key access, STOP and report to Mission Control.

---

## 5. Explicit Non-Authorization

This instruction does not authorize:

- production AWS deployment;
- production Supabase migration;
- any production migration already pending under SB-P-1.11;
- IAM permission broadening;
- deploy-role broadening;
- RuntimeBoundary weakening;
- OIDC trust broadening;
- root execution;
- static or long-lived AWS credentials;
- CA private-key movement into GitHub/AWS/CI/chat;
- Lovable mutation;
- public deployment/publication;
- Founder runtime acceptance;
- Stage 21 or later lifecycle progression;
- SB-P-1.11 completion or closure.

---

## 6. Founder Execution Sequence

After this instruction is human-reviewed and merged to canonical `main`:

1. Open GitHub Actions → `SB-P-1.11-GC-38R Parser Non-Production Deploy`.
2. Select branch `main`.
3. Paste only the public CA certificate into `trust_anchor_ca_certificate_pem`.
4. Set `generate_workload_csr = true`.
5. Trigger the workflow.
6. Approve the protected `aws-nonprod-parser` deployment when prompted.
7. If the run fails, do not rerun again until Mission Control reviews the exact failed step.
8. If the run succeeds, preserve the short-lived `gc38r-workload-csr-handoff` artifact for the controlled offline-signing next step and do not expose its workload private key in chat, logs, PRs, or commits.

---

## 7. Required Immediate Evidence

After the run, return to Mission Control with:

- workflow run status;
- exact failed step and error if FAIL; or
- successful deployment summary if PASS;
- confirmation whether `gc38r-workload-csr-handoff` was generated;
- no secret/private-key contents.

---

## Mission Control Decision

**AUTHORIZED AFTER HUMAN MERGE:** one fresh GC-38R Phase B non-production workflow run from corrected canonical `main`, using the public CA certificate and `generate_workload_csr = true`.

**NOT AUTHORIZED:** any broader deployment, repair, authority change, production action, or later-stage progression.