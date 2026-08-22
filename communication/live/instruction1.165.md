# SMART BUSINESS — REPOSITORY COMMUNICATION

# SB-P-1.11-GC-38R — PHASE B NON-PRODUCTION RERUN #9 AUTHORIZATION

**Instruction ID:** `instruction1.165`
**Mission:** `SB-P-1.11 — Product Catalog & Pricing`
**Workstream:** `GC-38R — Lambda Parser Non-Production Deployment`
**Sender:** Mission Control
**Recipient:** Founder / GitHub Actions
**Date:** 2026-08-22
**Status:** AUTHORIZED AFTER FOUNDER HUMAN MERGE

---

## 1. Basis

PR #364 merged the narrow workload handoff packaging correction from `report1.165.md`.

Canonical `main` now contains the correction that renames the workspace handoff directory from hidden `.parser-pki-handoff` to non-hidden `parser-pki-handoff`, while preserving:

- artifact name `gc38r-workload-csr-handoff`;
- filenames `workload-certificate-signing-request.csr` and `workload-private-key.pem`;
- `retention-days: 1`;
- `include-hidden-files: false` behavior;
- all AWS/IAM/Roles Anywhere/Lambda/CA boundaries.

Phase B run #8 already proved the non-production infrastructure path can complete successfully. The only remaining defect was artifact publication; the generated handoff files from run #8 were cleaned from the runner and are not recoverable.

A fresh run is therefore required to generate a new workload keypair/CSR and publish the handoff artifact correctly.

---

## 2. Authorization

Mission Control authorizes exactly **one** fresh Founder-triggered execution of:

`SB-P-1.11-GC-38R Parser Non-Production Deploy`

from canonical `main`.

Required settings:

- branch: `main`;
- protected environment: `aws-nonprod-parser`;
- `generate_workload_csr = true`;
- use the existing canonical AWS account/region/resources already established by GC-38R.

The run may perform only the workflow actions already authorized by GC-38R and merged into canonical `main`.

---

## 3. Expected Behavior

The workflow shall:

1. reuse the existing non-production S3/IAM/Roles Anywhere resources where present;
2. reuse the existing Trust Anchor and Profile where present;
3. update/reconcile the existing Lambda idempotently;
4. attempt reserved concurrency `5` and use the previously approved exact-match new-account quota compatibility fallback only if that exact condition recurs;
5. generate a **new** workload keypair and CSR;
6. stage the two handoff files under `parser-pki-handoff/`;
7. upload artifact `gc38r-workload-csr-handoff` with 1-day retention;
8. clean all local runner copies after upload.

The expected artifact must contain exactly:

- `workload-certificate-signing-request.csr`
- `workload-private-key.pem`

No artifact contents may be printed to logs.

---

## 4. Founder Verification Required

After the run, the Founder shall verify only non-secret evidence:

- workflow run result is `Success`;
- `Generate workload certificate signing request` is green;
- `Upload workload CSR/private key for out-of-band handoff` is green;
- the upload step does **not** report `No files were found`;
- artifact `gc38r-workload-csr-handoff` is visible and downloadable;
- retention is 1 day;
- no unexpected provider/security error occurred.

Do not paste, screenshot, log, commit, or share the contents of `workload-private-key.pem`.

---

## 5. Boundaries

This instruction does **not** authorize:

- any second rerun if this run fails;
- IAM/deploy-policy/RuntimeBoundary/OIDC/GitHub Environment changes;
- manual AWS repair;
- root/admin bootstrap;
- CA private-key upload or movement;
- workload certificate signing yet;
- Cloudflare/secret-store provisioning yet;
- Phase C runtime verification;
- production AWS/Supabase/Lovable action;
- production migration;
- Stage 21 or later mission progression.

If the run fails or the artifact is absent/incorrect, stop and return the exact non-secret failure evidence to Mission Control.

---

## 6. Success Gate

If the workflow succeeds and `gc38r-workload-csr-handoff` is visibly published with the two expected files, Mission Control may mark:

`GC-38R PHASE B NON-PRODUCTION DEPLOYMENT + WORKLOAD HANDOFF — PASS`

Only then may Mission Control issue the separate offline workload-certificate signing/provisioning instruction.
