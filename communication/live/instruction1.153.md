# SMART BUSINESS MISSION CONTROL

## SB-P-1.11 — GC-38R Phase B Non-Production Deployment Rerun #4 Authorization

**Instruction ID:** `instruction1.153`  
**Mission:** `SB-P-1.11`  
**Workstream:** `GC-38R — Lambda Parser Non-Production Deployment`  
**Status:** ACTIVE AFTER HUMAN MERGE  
**Authorized By:** Mission Control  
**Execution Mode:** Founder-triggered protected GitHub Actions workflow only  
**Production Authority:** NONE

---

## 1. Authorization Basis

The prior Phase B run reached IAM Roles Anywhere Trust Anchor creation but failed with:

`ValidationException: Error creating TrustAnchor. Bad certificate data`

Claude Engineering executed `communication/live/instruction1.152.md`, confirmed the root cause as CA certificate serialization through JSON-string encoding inside AWS CLI shorthand syntax, and returned `communication/live/report1.160.md` with disposition:

`GC-38R CA SERIALIZATION REVIEW — NARROW WORKFLOW CORRECTION READY`

Founder human-merged PR #347. Canonical `main` now contains the AWS-documented file-loading correction:

`x509CertificateData@=file:///tmp/parser-pki/ca.pem`

Canonical `main` SHA at authorization preparation:

`e68eb0dd983a29d09a4c4a2ab77a71a30d44d77c`

This instruction authorizes exactly one fresh Phase B non-production deployment run from corrected canonical `main` and nothing beyond it.

---

## 2. Authorized Workflow

Run only:

`.github/workflows/aws-gc38r-parser-deploy.yml`

Workflow name:

`SB-P-1.11-GC-38R Parser Non-Production Deploy`

Branch:

`main`

Protected environment:

`aws-nonprod-parser`

AWS execution path remains:

`GitHub Actions OIDC → TeamLIPS-SB-NonProd-Parser-DeployRole`

Approved AWS account:

`658980433673`

Approved region:

`ap-south-1`

---

## 3. Required Inputs

`trust_anchor_ca_certificate_pem`

- Supply only the Founder-controlled **public CA certificate**.
- Do not supply, expose, upload, or transmit the CA private key or passphrase.

`generate_workload_csr`

- Set to `true`.

---

## 4. Existing State

Preserve and reuse existing authorized non-production resources created during prior Phase B attempts.

Do not manually delete, replace, recreate, or repair existing resources merely because prior runs stopped later in the workflow.

The corrected workflow must remain the sole authorized deployment path for this run.

---

## 5. Explicit Non-Authorization

This instruction does not authorize:

- any additional IAM permission;
- any RuntimeBoundary change;
- any OIDC trust or GitHub Environment change;
- root or static credential execution;
- manual AWS repair or manual Trust Anchor/Profile creation;
- CA regeneration or CA private-key movement;
- production AWS or production Supabase action;
- Lovable/public deployment;
- Phase C runtime execution;
- Stage 21 or later progression;
- SB-P-1.11 completion or closure.

If any broader authority appears necessary, STOP and report to Mission Control.

---

## 6. Founder Execution Sequence

After this instruction is human-reviewed and merged to canonical `main`:

1. Open GitHub Actions → `SB-P-1.11-GC-38R Parser Non-Production Deploy`.
2. Select branch `main`.
3. Paste only the public CA certificate into `trust_anchor_ca_certificate_pem`.
4. Set `generate_workload_csr = true`.
5. Trigger the workflow.
6. Approve the protected `aws-nonprod-parser` environment when prompted.
7. If the run fails, do not rerun again; return the exact failed step and provider error to Mission Control.
8. If the run succeeds, confirm whether `gc38r-workload-csr-handoff` was generated. Do not expose the workload private key.

---

## 7. Required Immediate Evidence

Return to Mission Control with:

- workflow run status;
- exact failed step and error if FAIL; or
- successful deployment summary if PASS;
- confirmation whether `gc38r-workload-csr-handoff` was generated;
- no certificate private-key or workload private-key contents.

---

## Mission Control Decision

**AUTHORIZED AFTER HUMAN MERGE:** exactly one fresh GC-38R Phase B non-production workflow run from corrected canonical `main`, using the public CA certificate and `generate_workload_csr = true`.

**NOT AUTHORIZED:** any broader deployment, repair, authority change, production action, Phase C execution, or later-stage progression.
