# SMART BUSINESS MISSION CONTROL

# SB-P-1.11-GC-38R — TRUST ANCHOR RUNTIME-DIAGNOSTIC REVIEW

**Instruction ID:** `instruction1.154`  
**Parent Mission:** `SB-P-1.11 — Product Catalog & Pricing`  
**Workstream:** `GC-38R — Lambda Parser Non-Production Deployment`  
**Executing Room:** Claude Engineering  
**Authorized By:** Founder / Mission Control  
**Mode:** BOUNDED READ-ONLY DIAGNOSTIC REVIEW + SAFE DIAGNOSTIC PATCH PROPOSAL ONLY  
**AWS Mutation Authority:** NONE  
**Workflow Rerun Authority:** NONE  
**Production Authority:** NONE

---

## 1. Trigger

GC-38R Phase B rerun #4 again failed at:

`Create IAM Roles Anywhere trust anchor`

with:

`ValidationException ... Error creating TrustAnchor. Bad certificate data`

The prior CA serialization correction from PR #347 was therefore not sufficient to resolve the provider rejection.

Founder-local certificate verification now establishes:

- self-verification succeeds: `...ca.cert.pem: OK`;
- Basic Constraints include `CA:TRUE, pathlen:0`;
- subject and issuer are self-signed for the Team LIPS non-production parser CA;
- validity: Aug 19 2026 through Aug 16 2036;
- SHA-256 fingerprint exactly:
  `51:3A:3A:71:CD:B6:67:92:AA:E6:00:CB:2E:2A:D5:52:28:71:DB:61:BB:AE:6F:76:BF:B4:85:FA:C8:CD:B1:7E`;
- exactly one PEM certificate exists with correct BEGIN/END boundaries.

Do not regenerate the CA and do not infer that the local CA file is invalid without contrary provider-relevant evidence.

---

## 2. Objective

Determine, before any further rerun, whether the repeated `Bad certificate data` result is caused by:

1. GitHub workflow input transport / line-ending or content transformation;
2. runner-side file material differing from the Founder-verified public certificate;
3. AWS CLI request construction or shorthand/file-loading behavior;
4. an IAM Roles Anywhere certificate-profile requirement not yet verified;
5. another narrowly evidenced provider-compatibility issue.

The review must distinguish evidence from inference.

---

## 3. Required Review

Inspect canonical `main`, including at minimum:

- `.github/workflows/aws-gc38r-parser-deploy.yml`;
- `communication/live/report1.160.md`;
- the latest Phase B failure evidence supplied by Founder;
- prior TagResource/security evidence only where relevant;
- current official AWS IAM Roles Anywhere / AWS CLI documentation for certificate requirements and request syntax.

Verify specifically:

- whether `@=file:///tmp/parser-pki/ca.pem` is parsed exactly as intended in this nested shorthand position;
- whether CRLF/LF, trailing newline, input-field normalization, shell quoting, or workflow-dispatch multiline handling could alter the certificate;
- all provider requirements for a Roles Anywhere trust-anchor certificate, including Basic Constraints, key usage, signature algorithm, public-key type/size, validity, and any unsupported extensions if documented;
- whether a safer AWS CLI JSON input form or generated `--cli-input-json` file would remove shorthand ambiguity without changing architecture.

Do not assume another serialization defect unless demonstrated.

---

## 4. Safe Diagnostic Patch Proposal

If needed, Claude Engineering may prepare a narrow workflow diagnostic proposal that runs immediately before `CreateTrustAnchor` and may include only non-secret checks such as:

- parse `/tmp/parser-pki/ca.pem` with OpenSSL;
- fail if parsing fails;
- count BEGIN/END certificate markers;
- verify `CA:TRUE` and certificate-sign key usage where available;
- compute SHA-256 certificate fingerprint and compare it to the locked Founder-known fingerprint above;
- print only PASS/FAIL, fingerprint, public metadata, byte count, newline/line-count metadata, and safe certificate properties;
- never print the PEM body;
- never print or access any private key;
- optionally produce a non-secret diagnostic artifact/report if necessary.

A patch may also replace the `create-trust-anchor --source` argument with a more deterministic AWS-supported JSON request form if official documentation and local static reproduction establish that this is the narrowest correction.

Any such patch must be reviewable and must not itself be executed against AWS.

---

## 5. Locked Boundaries

Do not change or broaden:

- IAM permissions;
- deploy-role trust;
- RuntimeBoundary;
- GitHub OIDC;
- GitHub Environment protections;
- account `658980433673`;
- region `ap-south-1`;
- Trust Anchor name/tags/enabled state;
- CA private-key custody;
- workload-role or Lambda permissions;
- S3 configuration;
- Supabase;
- Lovable;
- production state.

No root/static credentials. No CA regeneration. No private-key access. No AWS API call. No workflow dispatch. No Phase B rerun.

---

## 6. Required Deliverable

Return `communication/live/report1.161.md` through a dedicated human-reviewed PR.

The report must include:

- exact canonical SHA reviewed;
- exact latest failure classified;
- exact Founder-local certificate facts treated as evidence;
- official AWS documentation relied upon;
- findings for input transport, runner-side file integrity, CLI request construction, and certificate/provider requirements;
- any proposed diagnostic or request-construction patch, with exact diff and rationale;
- confirmation that no AWS mutation or rerun occurred;
- final disposition exactly one of:

`GC-38R TRUST ANCHOR DIAGNOSTIC REVIEW — NARROW DIAGNOSTIC/CORRECTION READY`

or

`GC-38R TRUST ANCHOR DIAGNOSTIC REVIEW — NO SAFE CORRECTION YET — MORE EVIDENCE REQUIRED`

or

`GC-38R TRUST ANCHOR DIAGNOSTIC REVIEW — MATERIAL ARCHITECTURE ISSUE IDENTIFIED`

No self-merge.

---

## 7. Next Gate

This instruction does not authorize a Phase B rerun.

After the report and any narrow patch are human-reviewed and merged, Mission Control will decide whether another single non-production rerun is warranted.
