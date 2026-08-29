# SMART BUSINESS — REPOSITORY COMMUNICATION

# SB-P-1.11-GC-38R — PUBLIC CA INPUT TRANSPORT CORRECTION REVIEW

**Instruction ID:** `instruction1.156`
**Mission:** `SB-P-1.11 — Product Catalog & Pricing`
**Workstream:** `GC-38R — Lambda Parser Non-Production Deployment`
**Sender:** Mission Control
**Executing Room:** Claude Engineering
**Status:** AUTHORIZED AFTER FOUNDER HUMAN MERGE
**Mode:** BOUNDED WORKFLOW INPUT-TRANSPORT CORRECTION REVIEW + IMPLEMENTATION PROPOSAL ONLY

---

## 1. Confirmed Runtime Finding

The Founder-triggered diagnostic Phase B run #5 consumed the one-run authorization and failed before any AWS `CreateTrustAnchor` API call.

Runner-side diagnostic evidence is decisive:

```text
GC38R_CERT_DIAGNOSTIC byte_count=2211 line_count=0 begin_markers=0 end_markers=0
GC38R_CERT_DIAGNOSTIC_FAIL reason=marker_count_not_exactly_one
```

The runner environment displayed the public certificate as one flattened line:

```text
-----BEGIN CERTIFICATE----- MIIGNT... ZA8V48Qlp6oh -----END CERTIFICATE-----
```

This confirms the multi-line PEM was altered before the workflow wrote `/tmp/parser-pki/ca.pem`.

The Founder-local public certificate remains independently verified with the locked SHA-256 fingerprint:

`51:3A:3A:71:CD:B6:67:92:AA:E6:00:CB:2E:2A:D5:52:28:71:DB:61:BB:AE:6F:76:BF:B4:85:FA:C8:CD:B1:7E`

Therefore the remaining confirmed defect is the current multi-line public-CA input transport path through the GitHub Actions web UI. Do not regenerate or replace the CA.

---

## 2. Objective

Review and prepare the narrowest deterministic correction that allows the Founder to supply the same public CA certificate through GitHub Actions without relying on preservation of embedded newlines in a `workflow_dispatch` text field.

Preferred correction direction:

- transport the public certificate as a single-line Base64 value representing the exact PEM file bytes;
- decode that value on the runner into `/tmp/parser-pki/ca.pem`;
- retain the existing runner-side fingerprint, Basic Constraints, Key Usage, and signature diagnostics before any AWS call.

A materially different transport design requires explicit justification in the completion report.

---

## 3. Required Review

Claude Engineering shall inspect canonical `.github/workflows/aws-gc38r-parser-deploy.yml` and verify:

1. the current `workflow_dispatch` CA input definition and use;
2. the minimum workflow changes required for a single-line Base64 transport;
3. exact decode behavior on the GitHub runner;
4. fail-closed handling of empty, malformed, or non-Base64 input;
5. preservation of the decoded PEM bytes for the locked SHA-256 fingerprint check;
6. no certificate body, Base64 payload, or private material is printed to logs;
7. the existing `CreateTrustAnchor` `@=file://` request remains unchanged unless a separate defect is proven;
8. the existing diagnostic remains before any AWS `CreateTrustAnchor` call.

---

## 4. Founder Input Compatibility

The proposed implementation should support a simple Founder-side PowerShell command that converts only the public CA certificate file into one Base64 line for clipboard transport.

The report may provide the exact command, but it must never request or encode:

- the CA private key;
- the CA private-key passphrase;
- the workload private key.

---

## 5. Locked Boundaries

This instruction authorizes repository review and the minimum workflow correction only.

It does **not** authorize:

- any AWS API call or mutation;
- any workflow dispatch or Phase B rerun;
- any IAM permission change;
- RuntimeBoundary change;
- OIDC trust change;
- GitHub Environment protection change;
- manual AWS repair;
- CA regeneration, replacement, or private-key access;
- production action;
- Supabase or Lovable change;
- Phase C or later mission progression.

Account remains `658980433673`.
Region remains `ap-south-1`.
Protected environment remains `aws-nonprod-parser`.

---

## 6. Static Verification Required

Before handoff, verify at minimum:

- workflow YAML parses cleanly;
- shell syntax parses cleanly;
- Base64 round-trip reproduces exact source PEM bytes in synthetic/local testing;
- malformed Base64 fails closed;
- decoded certificate is still checked against the locked SHA-256 fingerprint;
- no certificate payload is logged;
- no private-key path or secret handling is introduced;
- Trust Anchor name, tags, enabled state, idempotency, account/region, IAM boundaries, and unrelated stages remain unchanged;
- no AWS call or workflow run occurred during this instruction.

---

## 7. Required Completion Report

Return:

`communication/live/report1.162.md`

The report must include:

- exact canonical `main` SHA reviewed;
- classification of the confirmed input-transport defect;
- exact before/after workflow input contract;
- exact decode path and failure behavior;
- Founder-safe PowerShell command for copying the Base64 **public certificate** value;
- static verification evidence;
- explicit confirmation that CA custody and all security boundaries remain unchanged;
- explicit confirmation that no workflow run or AWS mutation occurred.

If implementation is prepared, deliver the workflow correction and report through a dedicated human-reviewed PR. Do not self-merge.

Final disposition must be one of:

`GC-38R PUBLIC CA INPUT TRANSPORT CORRECTION — READY`

or

`GC-38R PUBLIC CA INPUT TRANSPORT CORRECTION — STOPPED`

---

## 8. Next Gate

A successful correction does not authorize another Phase B run.

After Founder human review and merge, Mission Control will separately decide whether to authorize exactly one further diagnostic/non-production run using the corrected single-line transport path.
