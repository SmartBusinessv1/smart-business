# SMART BUSINESS MISSION CONTROL

## SB-P-1.11 — GC-38R Diagnostic Phase B Non-Production Run Authorization

**Instruction ID:** `instruction1.155`  
**Mission:** `SB-P-1.11`  
**Workstream:** `GC-38R — Lambda Parser Non-Production Deployment`  
**Status:** ACTIVE AFTER HUMAN MERGE  
**Authorized By:** Mission Control  
**Execution Mode:** Founder-triggered protected GitHub Actions workflow only  
**Run Purpose:** DIAGNOSTIC EVIDENCE COLLECTION FIRST; CONTINUE ONLY IF FAIL-CLOSED CERTIFICATE DIAGNOSTIC PASSES

---

## 1. Authorization Basis

PR `#350` human-merged the bounded runner-side certificate diagnostic proposed under `instruction1.154.md` and refined after Mission Control review.

Canonical `main` baseline at authorization preparation:

`e2cbc0d04a3cf946338e288da6792df4b44525bc`

The diagnostic now executes before `CreateTrustAnchor` and checks the public CA certificate actually present on the GitHub runner for:

- exactly one PEM BEGIN/END marker pair, with CRLF-tolerant marker inspection;
- successful OpenSSL parsing;
- SHA-256 fingerprint equal to the Founder-verified value;
- Basic Constraints containing `CA:TRUE`;
- Key Usage containing `Certificate Sign`;
- no PEM-body logging and no private-key access.

This instruction authorizes exactly one fresh non-production run to collect that evidence and, only if the diagnostic passes, allow the already-canonical workflow to proceed under its existing boundaries.

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

Approved account:

`658980433673`

Approved region:

`ap-south-1`

---

## 3. Required Inputs

`trust_anchor_ca_certificate_pem`

- Supply only the Founder-controlled **public CA certificate**.
- Do not supply or expose the CA private key or passphrase.

`generate_workload_csr`

- Set to `true`.

The Founder may use the existing GitHub Actions manual-run UI for this diagnostic run because the merged diagnostic is specifically designed to detect any input-transport corruption before the AWS Trust Anchor call.

Do not change the certificate file itself merely to satisfy the diagnostic.

---

## 4. Locked Expected Fingerprint

The runner-side certificate fingerprint must match exactly:

`51:3A:3A:71:CD:B6:67:92:AA:E6:00:CB:2E:2A:D5:52:28:71:DB:61:BB:AE:6F:76:BF:B4:85:FA:C8:CD:B1:7E`

A fingerprint mismatch is evidence that the certificate reaching the runner differs from the Founder-verified local certificate.

If the diagnostic returns any `GC38R_CERT_DIAGNOSTIC_FAIL` result, the workflow is expected to stop before `CreateTrustAnchor`. Treat that as successful diagnostic evidence collection, not as authority to improvise a fix or rerun.

---

## 5. Founder Execution Sequence

After this instruction is human-reviewed and merged:

1. Open GitHub Actions → `SB-P-1.11-GC-38R Parser Non-Production Deploy`.
2. Select branch `main`.
3. Paste only the public CA certificate into `trust_anchor_ca_certificate_pem`.
4. Set `generate_workload_csr = true`.
5. Trigger exactly one run.
6. Approve only the protected environment `aws-nonprod-parser` when prompted.
7. Inspect the `Create IAM Roles Anywhere trust anchor` step output for the `GC38R_CERT_DIAGNOSTIC...` lines.
8. If the diagnostic fails, STOP. Do not rerun.
9. If the diagnostic passes but AWS later fails, STOP and return the exact later failed step/error.
10. If the workflow succeeds, confirm whether `gc38r-workload-csr-handoff` was generated; do not expose the workload private key.

---

## 6. Required Evidence Returned to Mission Control

Return only non-secret evidence sufficient to classify the run:

- workflow run status;
- exact `GC38R_CERT_DIAGNOSTIC...` lines;
- whether the computed fingerprint matched the locked fingerprint;
- Basic Constraints result;
- Key Usage result;
- signature algorithm metadata shown by the diagnostic;
- exact failed step/error if failure occurs after diagnostic PASS;
- whether `gc38r-workload-csr-handoff` was generated if the run succeeds.

Do not paste:

- the PEM body;
- CA private-key material;
- workload private-key material;
- AWS temporary credentials, tokens, or session secrets.

---

## 7. Explicit Non-Authorization

This instruction does **not** authorize:

- more than one workflow run;
- any IAM permission change;
- RuntimeBoundary modification;
- OIDC or GitHub Environment change;
- root or static-credential execution;
- manual AWS resource repair;
- CA regeneration;
- CA private-key access or movement;
- production AWS action;
- production Supabase migration;
- Lovable mutation;
- Phase C execution;
- Stage 21 or later progression;
- SB-P-1.11 completion or closure.

If the diagnostic identifies input transport or certificate-generation incompatibility, Mission Control will separately authorize the next corrective step.

---

## 8. Mission Control Decision

**AUTHORIZED AFTER HUMAN MERGE:** exactly one Founder-triggered GC-38R diagnostic Phase B non-production workflow run from canonical `main`, using only the public CA certificate and `generate_workload_csr = true`.

**PRIMARY PURPOSE:** obtain definitive runner-side certificate integrity/provider-requirement evidence before any further correction decision.

**NOT AUTHORIZED:** repeated reruns, speculative repair, broader AWS/security changes, CA regeneration, production action, Phase C, or later-stage progression.
