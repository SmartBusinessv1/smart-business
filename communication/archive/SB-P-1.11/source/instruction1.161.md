# SMART BUSINESS — MISSION CONTROL

## SB-P-1.11-GC-38R — PHASE B NON-PRODUCTION RERUN #7 AUTHORIZATION

**Instruction ID:** `instruction1.161`  
**Mission:** `SB-P-1.11 — Product Catalog & Pricing`  
**Workstream:** `GC-38R — Lambda Parser Non-Production Deployment`  
**Issued By:** Mission Control  
**Execution Mode:** ONE-TIME FOUNDER-TRIGGERED NON-PRODUCTION WORKFLOW RUN  
**Production Authority:** NONE

---

## 1. Current Verified Precondition

Founder runtime evidence confirms the one-time console bootstrap authorized by `communication/live/instruction1.160.md` completed successfully:

- canonical Trust Anchor created in AWS account `658980433673`, region `ap-south-1`;
- Trust Anchor name: `teamlips-sb-np-parser-trust-anchor`;
- AWS automatically created service-linked role `AWSServiceRoleForRolesAnywhere`;
- role path/service: `aws-service-role/rolesanywhere.amazonaws.com/`;
- attached AWS-managed policy: `AWSRolesAnywhereServicePolicy`;
- Founder signed out of the elevated AWS session;
- no deploy-role broadening or manual IAM policy construction was performed.

The canonical workflow is already idempotent for the Trust Anchor: if the exact named Trust Anchor exists, it reuses the existing ARN and does not attempt to recreate it.

---

## 2. Authorization

Mission Control authorizes exactly **one** fresh Founder-triggered execution of:

`SB-P-1.11-GC-38R Parser Non-Production Deploy`

from canonical `main`.

This is Phase B non-production rerun #7.

---

## 3. Required Execution Inputs

Run with:

- branch/ref: `main`;
- protected GitHub Environment: `aws-nonprod-parser`;
- `generate_workload_csr = true`;
- `trust_anchor_ca_certificate_base64`: may be left empty because the exact canonical Trust Anchor now exists and the workflow must reuse it. If the workflow UI requires a value, use only the single-line Base64 of the exact verified public CA certificate bytes; never provide CA private material.

---

## 4. Expected Idempotent Behavior

The workflow should:

1. authenticate through the existing GitHub Actions OIDC deploy role;
2. reuse existing authorized partial S3/IAM resources where already present;
3. detect `teamlips-sb-np-parser-trust-anchor` and emit the existing-Trust-Anchor path rather than creating a new Trust Anchor;
4. create or reuse the canonical Roles Anywhere Profile `teamlips-sb-np-parser-profile`;
5. generate the workload CSR/private-key handoff because `generate_workload_csr = true`;
6. create/update the non-production Lambda function and remaining already-authorized GC-38R resources;
7. emit the non-secret deployment summary;
8. upload the short-lived `gc38r-workload-csr-handoff` artifact if the workflow reaches that stage.

---

## 5. Locked Boundaries

This authorization does **not** authorize:

- any new IAM permission;
- any deploy-role or deploy-policy change;
- RuntimeBoundary change;
- OIDC trust change;
- GitHub Environment change;
- root/account-owner AWS session;
- static AWS credentials or access keys;
- manual Trust Anchor/Profile/Lambda/S3 repair;
- CA regeneration, CA private-key access, upload, movement, or exposure;
- production AWS activity;
- production or test Supabase mutation beyond what GC-38R already explicitly authorizes;
- Lovable/public deployment;
- Phase C execution;
- Stage 21 or later mission lifecycle progression;
- repeated rerun if this run fails.

---

## 6. Failure Rule

If the workflow fails:

- stop immediately;
- do not rerun;
- capture the exact failed step and exact provider error;
- preserve existing partial resources;
- Mission Control must evaluate the blocker and choose the narrowest safe workaround/correction path.

A new blocker should trigger active workaround evaluation rather than passive waiting, provided security and authority boundaries remain intact.

---

## 7. Success Rule

If the workflow succeeds, capture non-secret evidence for at least:

- existing Trust Anchor reuse;
- Roles Anywhere Profile create/reuse result;
- Lambda create/update result;
- non-secret deployment summary;
- existence of `gc38r-workload-csr-handoff` when generated.

Do not display, paste, commit, or upload to chat the workload private key contained in the handoff artifact.

A successful Phase B run does not itself authorize Phase C or later mission lifecycle stages.

---

## 8. Mission Control Disposition

`GC-38R PHASE B NON-PRODUCTION RERUN #7 — AUTHORIZED ONCE AFTER SUCCESSFUL FOUNDER TRUST-ANCHOR BOOTSTRAP`
