# SMART BUSINESS MISSION CONTROL

# SB-P-1.11-GC-38R — PHASE B NON-PRODUCTION DEPLOYMENT RERUN AUTHORIZATION #3

**Instruction ID:** `instruction1.151`  
**Parent Mission:** `SB-P-1.11 — Product Catalog & Pricing`  
**Workstream:** `GC-38R — Lambda Parser Non-Production Deployment`  
**Authorized By:** Founder / Mission Control  
**Execution Mode:** Founder-triggered protected GitHub Actions workflow only  
**Production Authority:** NONE  
**Later-Stage Authority:** NONE

---

## 1. Authorization Basis

GC-38R Phase B Run #2 failed because the deployment identity lacked `rolesanywhere:TagResource` for the already-approved tagged IAM Roles Anywhere creation path.

The exact bounded correction was:

1. reviewed by Security & Permissions Architecture under `communication/live/instruction1.147.md`;
2. recommended in `communication/live/report1.156.md`;
3. authorized in `communication/live/instruction1.148.md`;
4. executed through the one-time Founder administrative authorization in `communication/live/instruction1.149.md`;
5. evidenced and reported in `communication/live/report1.158.md`; and
6. independently verified by Security & Permissions Architecture in `communication/live/report1.159.md` with final disposition:

`GC-38R TAGRESOURCE CORRECTION INDEPENDENT SECURITY VERIFICATION — PASS — PHASE B RERUN DECISION ELIGIBLE`

Canonical `main` baseline at authorization preparation:

`739c98b93ba2f9f27022528b1bf09cc951b4eb34`

Commit:

`Record GC-38R TagResource independent security verification (#344)`

Mission Control now authorizes one fresh Phase B non-production workflow run from canonical `main` and nothing beyond that run.

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

No alternate deployment identity is authorized.

---

## 3. Required Inputs

### `trust_anchor_ca_certificate_pem`

Supply only the Founder-controlled **public CA certificate**.

Do not supply, expose, upload, transmit, or paste:

- the CA private key;
- the CA private-key passphrase;
- any workload private key.

### `generate_workload_csr`

Set to:

`true`

The workflow may create or reuse only the already-authorized non-production resources and may generate the short-lived workload CSR/private-key handoff artifact exactly as previously reviewed.

---

## 4. Existing Partial Non-Production State

Preserve and reuse the already-authorized resources created/configured during earlier Phase B attempts.

Do not manually delete, recreate, replace, retag, or repair them before this rerun.

The workflow is intentionally idempotent and must detect/reuse existing authorized resources where applicable.

The corrected deploy-role policy now contains the independently verified bounded `rolesanywhere:TagResource` authority. No additional permission change is authorized.

---

## 5. Founder Execution Sequence

After this instruction is human-reviewed and merged to canonical `main`:

1. Open GitHub Actions.
2. Open `SB-P-1.11-GC-38R Parser Non-Production Deploy`.
3. Select branch `main`.
4. Paste only the Founder-controlled public CA certificate into `trust_anchor_ca_certificate_pem`.
5. Set `generate_workload_csr = true`.
6. Trigger the workflow.
7. When prompted, review and approve only the protected environment `aws-nonprod-parser`.
8. Allow the workflow to complete without manual AWS mutation.
9. If the run fails, do not rerun again. Capture the exact failed step and error and return to Mission Control.
10. If the run succeeds, preserve the generated `gc38r-workload-csr-handoff` artifact for the controlled offline-signing next gate.

Do not expose the workload private key in chat, logs, PRs, commits, screenshots, or repository evidence.

---

## 6. Required Immediate Evidence

After the run, return to Mission Control with only non-secret evidence sufficient to establish:

- workflow run status;
- exact failed step and error if FAIL; or
- successful deployment summary if PASS;
- whether the Trust Anchor was created or reused;
- whether the Roles Anywhere Profile was created or reused;
- whether the Lambda deployment/configuration steps completed;
- whether `gc38r-workload-csr-handoff` was generated;
- artifact name and expiry/retention metadata if shown;
- no secret/private-key contents.

Mission Control may use GitHub Actions provider evidence directly where available.

---

## 7. Explicit Non-Authorization

This instruction does **not** authorize:

- any additional IAM permission;
- any change to `TeamLIPS-SB-NonProd-Parser-DeployPolicy`;
- any RuntimeBoundary change;
- any OIDC trust change;
- any GitHub Environment protection change;
- root/account-owner AWS execution;
- static or long-lived AWS credentials;
- IAM user creation;
- manual Trust Anchor/Profile creation;
- manual AWS repair or cleanup;
- CA private-key movement into GitHub, AWS, CI, repository storage, project storage, or chat;
- workload private-key disclosure;
- production AWS deployment;
- production Supabase migration;
- any pending production migration under SB-P-1.11;
- Supabase production mutation;
- Lovable mutation or publication;
- public deployment;
- Founder runtime acceptance;
- Phase C authorization by implication;
- Stage 21 or later lifecycle progression;
- SB-P-1.11 acceptance, completion, or closure.

---

## 8. Stop Conditions

STOP and return to Mission Control if:

- any permission remains insufficient;
- any new AWS authority is requested;
- any existing authorized resource appears to require deletion, recreation, replacement, or manual repair;
- RuntimeBoundary modification appears necessary;
- OIDC or GitHub Environment modification appears necessary;
- the public CA certificate is rejected or appears invalid;
- CA private-key access is requested;
- the workload private key would need to be exposed outside the approved artifact handoff;
- provider state materially contradicts the merged Security verification;
- production scope appears necessary;
- the run fails for any reason.

Do not improvise around a stop condition.

---

## 9. Next Gate After a Successful Run

A successful Phase B run does not itself authorize Phase C or any later lifecycle step.

If the run succeeds and `gc38r-workload-csr-handoff` is generated, Mission Control will review the provider evidence and then separately govern the controlled offline workload-certificate signing / workload-identity continuation required by the locked IAM Roles Anywhere path.

Before any signing instruction is issued, the exact end-entity certificate requirements must be grounded in the canonical workflow, locked engineering specification, and existing evidence. Do not improvise certificate extensions or EKU requirements.

---

## 10. Mission Control Decision

`SB-P-1.11-GC-38R — PHASE B NON-PRODUCTION DEPLOYMENT RERUN #3 AUTHORIZED AFTER HUMAN MERGE`

**AUTHORIZED:** exactly one fresh Founder-triggered GC-38R Phase B non-production workflow run from canonical `main`, using the public CA certificate and `generate_workload_csr = true`.

**NOT AUTHORIZED:** any broader AWS change, manual repair, permission change, production action, Phase C execution, or later-stage progression.
