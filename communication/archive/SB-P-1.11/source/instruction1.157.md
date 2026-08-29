# SMART BUSINESS — REPOSITORY COMMUNICATION

# SB-P-1.11-GC-38R — BASE64 PUBLIC CA DIAGNOSTIC PHASE B RUN AUTHORIZATION

**Instruction ID:** `instruction1.157`
**Mission:** `SB-P-1.11 — Product Catalog & Pricing`
**Workstream:** `GC-38R — Lambda Parser Non-Production Deployment`
**Sender:** Mission Control
**Executing Human:** Founder
**Mode:** ONE-TIME NON-PRODUCTION DIAGNOSTIC PHASE B RUN
**Status:** AUTHORIZED ONLY AFTER FOUNDER HUMAN MERGE OF THIS INSTRUCTION

---

## 1. Purpose

Authorize exactly one fresh Founder-triggered GC-38R Phase B non-production workflow run after PR #353 corrected the public CA input transport from raw multi-line PEM to single-line Base64.

This run is evidence-first. Its immediate purpose is to verify that the exact Founder-controlled public CA certificate bytes survive GitHub Actions transport and reconstruction on the runner, then allow the already-canonical workflow to continue only if all existing fail-closed diagnostics pass.

---

## 2. Canonical Baseline

Execute only from canonical `main` containing merged PR #353.

Baseline main SHA at authorization preparation:

`de33b1c19ab5df9687cc98fe8992b230343d9ce9`

Workflow:

`.github/workflows/aws-gc38r-parser-deploy.yml`

Protected GitHub Environment:

`aws-nonprod-parser`

AWS account:

`658980433673`

AWS region:

`ap-south-1`

---

## 3. Authorized Inputs

Use only:

- `trust_anchor_ca_certificate_base64` = a single-line Base64 encoding of the exact bytes of the Founder-controlled public CA certificate file.
- `generate_workload_csr = true`.

The CA private key and its passphrase remain strictly outside GitHub, AWS workflow execution, repository, chat, and cloud custody.

---

## 4. Founder-Safe PowerShell Command

Generate the Base64 value from the exact public CA certificate file and copy it to the clipboard with:

```powershell
[Convert]::ToBase64String(
  [System.IO.File]::ReadAllBytes("C:\TeamLIPS-Offline-PKI\teamlips-sb-np-parser-ca.cert.pem")
) | Set-Clipboard
```

Paste that single-line value only into `trust_anchor_ca_certificate_base64`.

Do not paste raw PEM into the workflow field.

---

## 5. Required Evidence Sequence

The existing runner-side diagnostic chain must remain authoritative and fail closed before Trust Anchor creation.

Capture and assess the `GC38R_CERT_DIAGNOSTIC...` output, including:

- BEGIN/END marker count;
- OpenSSL parse result;
- SHA-256 fingerprint;
- fingerprint match against the locked Founder-known value;
- Basic Constraints;
- Key Usage including `Certificate Sign`;
- signature algorithm metadata;
- final `GC38R_CERT_DIAGNOSTIC_PASS` or explicit failure reason.

Locked expected SHA-256 fingerprint:

`51:3A:3A:71:CD:B6:67:92:AA:E6:00:CB:2E:2A:D5:52:28:71:DB:61:BB:AE:6F:76:BF:B4:85:FA:C8:CD:B1:7E`

If any diagnostic fails, the workflow must stop. No rerun is authorized by this instruction.

If the diagnostic passes, the already-canonical workflow may continue under its existing non-production authority.

---

## 6. Scope Boundaries

This instruction authorizes exactly one workflow run only.

It does not authorize:

- any new IAM permission;
- any RuntimeBoundary change;
- any OIDC trust change;
- any GitHub Environment protection change;
- root or static AWS credentials;
- manual AWS repair;
- CA regeneration or replacement;
- CA private-key access, transfer, upload, or disclosure;
- production AWS action;
- production Supabase migration;
- Lovable/public deployment;
- Phase C execution;
- Stage 21 or later lifecycle progression;
- repeated reruns after a failure.

Existing partial non-production resources may be reused exactly as the canonical workflow already provides.

---

## 7. Founder Execution Sequence

1. Open GitHub Actions.
2. Select `SB-P-1.11-GC-38R Parser Non-Production Deploy`.
3. Run from `main` only.
4. Generate the Base64 value using the exact PowerShell command in §4.
5. Paste only that single-line Base64 value into `trust_anchor_ca_certificate_base64`.
6. Set `generate_workload_csr = true`.
7. Approve only the protected environment `aws-nonprod-parser` when prompted.
8. Allow the single run to complete or fail closed.
9. Preserve the workflow evidence. Do not expose any private workload key if an artifact is generated.
10. Return the diagnostic output and final run disposition to Mission Control.

---

## 8. Stop Conditions

Stop and return to Mission Control immediately if:

- Base64 decoding fails;
- runner-side fingerprint does not match the locked fingerprint;
- Basic Constraints or Key Usage fail;
- OpenSSL cannot parse the reconstructed certificate;
- `CreateTrustAnchor` still returns a provider error;
- any additional permission or security-boundary change appears necessary;
- any unexpected production or cross-environment action would be required.

Do not rerun automatically.

---

## 9. Post-Run Boundary

A successful Phase B run does not itself authorize Phase C, production migration, Lovable deployment, Stage 21 progression, or mission acceptance.

Mission Control will review the evidence and separately determine the next authorized action.
