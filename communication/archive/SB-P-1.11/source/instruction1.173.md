# SMART BUSINESS — REPOSITORY COMMUNICATION

# SB-P-1.11-GC-38R — C5 AWS4-X509 SIGNING REVIEW AUTHORIZATION

**Instruction ID:** `instruction1.173`
**Mission:** `SB-P-1.11 — Product Catalog & Pricing`
**Workstream:** `GC-38R — Lambda Parser Non-Production Deployment`
**Sender:** Mission Control
**Recipient:** Claude Engineering
**Date:** 2026-08-26
**Status:** ACTIVE AFTER HUMAN MERGE

---

## 1. Trigger

`report1.171.md` records that the real non-production Roles Anywhere `CreateSession` request reaches AWS and is rejected with sanitized category:

`create_session_http_failed:403`

That proves an AWS-side HTTP rejection but does not yet prove the exact structural cause.

No corrective change is authorized until the exact cause is demonstrated with evidence.

---

## 2. Objective

Determine whether the current repository implementation of AWS4-X509 request construction in `src/lib/parser-ingress/roles-anywhere.ts` is compliant with the current official AWS IAM Roles Anywhere signing requirements.

This is a code-level verification mission first.

Only if the signing implementation is verified compliant may the work proceed to bounded read-only AWS-side inspection of the existing non-production Trust Anchor / Profile / Role configuration.

---

## 3. Phase A — Official-Spec Signing Review

Claude Engineering shall compare the existing implementation against current official AWS documentation for IAM Roles Anywhere `CreateSession` / AWS4-X509 signing.

Verify at minimum:

- endpoint host and path;
- HTTP method;
- request body fields and serialization assumptions;
- `AWS4-X509-RSA-SHA256` algorithm usage;
- certificate serial-number extraction and encoding used in `Credential=`;
- credential scope format;
- canonical URI;
- canonical query string;
- canonical header normalization and ordering;
- `SignedHeaders` construction;
- inclusion and formatting of `host`, `content-type`, `x-amz-date`, `x-amz-x509`, and optional `x-amz-x509-chain`;
- payload hashing;
- canonical request hashing;
- string-to-sign construction;
- RSA signing algorithm and hash;
- signature encoding;
- Authorization header syntax;
- date / timestamp formatting;
- certificate-chain handling for a directly Trust-Anchor-signed workload certificate;
- any required Roles Anywhere-specific headers or request-shape details missing from the current implementation.

Use official AWS sources as the primary authority.

Do not rely on memory alone where the specification can be checked directly.

---

## 4. Evidence Requirement

The review must produce a clear item-by-item comparison:

`requirement → current implementation → PASS / DEFECT / UNCERTAIN → evidence`

Do not simply state that the implementation "looks correct".

If a local defect is found, identify the exact code location and the minimal correction needed.

If no local defect is found, state that explicitly and proceed to Phase B.

---

## 5. Phase A Correction Rule

If Phase A proves a local signing defect:

1. STOP before deployment.
2. Prepare the smallest correction required.
3. Add or update focused regression tests that prove the corrected signing construction.
4. Open a dedicated human-review PR.
5. Do not redeploy until Founder human review and merge.

No unrelated refactor is authorized.

No change may weaken sanitization added under `instruction1.172.md`.

---

## 6. Phase B — Read-Only AWS-Side Inspection

Phase B is authorized only if Phase A finds no local signing defect sufficient to explain the 403.

Read-only inspection may verify the existing GC-38R non-production AWS configuration, including:

- Trust Anchor identity, enabled state, region, and certificate association;
- Profile identity, enabled state, duration settings, and role association;
- Workload Role identity and trust relationship relevant to Roles Anywhere;
- exact ARN consistency between Worker bindings and AWS resources;
- certificate validity window and issuer/subject relationship against the registered Trust Anchor;
- whether the workload certificate chains directly to the registered CA as intended;
- relevant clock/timestamp facts available without changing infrastructure;
- any AWS-side status/metadata that can explain the 403 without exposing secrets.

Prefer existing authenticated read-only AWS access if available.

If AWS-side inspection cannot be performed from the current environment, report that specific access limitation rather than guessing.

---

## 7. AWS Change Boundary

This instruction authorizes **read-only AWS inspection only**.

It does **not** authorize changing:

- Trust Anchor configuration;
- Profile configuration;
- Workload Role trust or permissions;
- RuntimeBoundary;
- deploy role / OIDC trust;
- IAM policies;
- service-linked role;
- Lambda Function URL auth;
- S3 permissions;
- certificate registration/trust material;
- any production AWS resource.

If an AWS-side defect is proven, STOP and report the exact minimal change required. Mission Control will decide whether to authorize it separately.

---

## 8. Secret / Security Rules

Never expose, log, commit, paste, or include in evidence:

- CA private key;
- CA passphrase;
- workload private key;
- temporary AWS access key ID, secret key, or session token;
- raw Authorization header;
- raw signature;
- raw canonical request containing sensitive material;
- raw string-to-sign if it contains material that should remain server-side;
- raw provider response body;
- presigned S3 form fields;
- service-role secrets.

Public certificate metadata, public certificate fingerprint, ARNs, regions, resource names, HTTP status, and fixed sanitized diagnostic categories may be used where needed.

---

## 9. Non-Production Boundary

All runtime reasoning and any later retry under a separately merged correction remains limited to:

- Cloudflare Worker: `smart-business-parser-nonprod`;
- Supabase: `smart-business-test` (`drravyyauixltoihzmwo`);
- AWS account: `658980433673`;
- AWS region: `ap-south-1`;
- existing GC-38R non-production parser resources only.

Production remains completely out of scope.

---

## 10. Existing Temporary State

Until C5 succeeds and cleanup is explicitly reached, preserve the current retry state:

- non-production diagnostic route;
- `GC38R_C5_DIAGNOSTIC_ENABLED`;
- test Supabase Worker bindings;
- temporary sanitized AWS-layer diagnostic instrumentation;
- throwaway test user/business if still required for immediate retry.

Do not expand this temporary surface.

---

## 11. Stop Conditions

STOP and report if:

- the official AWS specification conflicts materially with current locked architecture in a way that requires broader redesign;
- a fix would require IAM/security-boundary widening;
- a Trust Anchor/Profile/Role change is required;
- certificate replacement or new signing by the offline CA is required;
- CA private-key access is requested or appears necessary;
- production access/change becomes necessary;
- the exact 403 cause still cannot be proven after the authorized review/inspection.

Do not guess through a security boundary.

---

## 12. Required Report

Return a repository report containing:

1. canonical commit reviewed;
2. official AWS sources consulted;
3. item-by-item AWS4-X509 compliance matrix;
4. exact Phase A verdict: `LOCAL DEFECT FOUND` or `SIGNING CONSTRUCTION VERIFIED` or `INCONCLUSIVE`;
5. if defect found: exact code defect and minimal correction proposal;
6. if Phase B reached: exact AWS resources inspected and sanitized findings;
7. exact 403 root-cause conclusion, if proven;
8. whether a code PR or separate AWS-change authorization is required;
9. confirmation that no prohibited secret/provider body was exposed;
10. confirmation that production was untouched;
11. final disposition.

---

## 13. Git Authority

Claude Engineering may create a dedicated mission branch, commit only artifacts/code/tests within this instruction's scope, and open a PR to `main`.

Claude Engineering may not merge its own PR.

Founder human review and merge remain mandatory before any code correction is deployed.

---

## 14. Final Rule

**Evidence first. Correct only what is proven wrong. Security boundaries remain strict; investigation remains fast and reversible.**
