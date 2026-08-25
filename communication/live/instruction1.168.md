# SMART BUSINESS — REPOSITORY COMMUNICATION

# SB-P-1.11-GC-38R — PHASE C NON-PRODUCTION SERVER RUNTIME VERIFICATION AUTHORIZATION

**Instruction ID:** `instruction1.168`
**Mission:** `SB-P-1.11 — Product Catalog & Pricing`
**Workstream:** `GC-38R — Lambda Parser Non-Production Deployment`
**Sender:** Mission Control
**Recipients:** Founder + Claude Engineering
**Date:** 2026-08-25
**Status:** AUTHORIZATION PENDING FOUNDER HUMAN MERGE

---

## 1. Preconditions Satisfied

Mission Control records the following prerequisites as satisfied before this authorization:

1. GC-38R Phase B non-production AWS infrastructure deployment completed successfully.
2. Run #9 produced the authoritative workload CSR/private-key handoff.
3. The Founder signed that CSR using the existing Founder-controlled Smart Business non-production parser CA under `instruction1.166.md`.
4. Local verification confirmed:
   - CSR/workload private key match;
   - CA certificate/CA private key match;
   - issued workload certificate/workload private key match;
   - certificate chain verification `OK`;
   - X.509v3;
   - exact Smart Business Parser Ingress Caller subject;
   - issuer is the Team LIPS Smart Business NonProd Parser CA;
   - `CA:FALSE`;
   - critical `Digital Signature` key usage only;
   - `sha384WithRSAEncryption`;
   - validity 22 Aug 2026 through 21 Sep 2026.
5. PR #368 merged the chain-optional configuration correction so a directly Trust-Anchor-signed workload certificate does not require an intermediate chain value.

Disposition entering this phase:

`GC-38R OFFLINE WORKLOAD CERTIFICATE SIGNING — PASS`

---

## 2. Objective

Complete the previously planned Phase C production-equivalent server-runtime verification of the non-production Lambda parser credential path.

The verification must prove that the approved server runtime can:

1. load the approved parser AWS configuration from server-only bindings;
2. use the run #9 workload end-entity certificate and matching private key without exposing either to client code;
3. create a short-lived IAM Roles Anywhere session using the existing Trust Anchor/Profile/workload role;
4. sign downstream AWS requests with the resulting temporary credentials;
5. invoke the non-production Lambda Function URL using `AWS_IAM`;
6. receive and validate a bounded synthetic parser response;
7. preserve existing merchant-facing sanitization and security boundaries.

---

## 3. Authorized Configuration Surface

Canonical code already defines these exact server-side configuration names:

- `PARSER_AWS_REGION`
- `PARSER_INGRESS_BUCKET`
- `PARSER_LAMBDA_FUNCTION_URL`
- `PARSER_ROLES_ANYWHERE_TRUST_ANCHOR_ARN`
- `PARSER_ROLES_ANYWHERE_PROFILE_ARN`
- `PARSER_ROLES_ANYWHERE_ROLE_ARN`
- `PARSER_WORKLOAD_CERTIFICATE_PEM`
- `PARSER_WORKLOAD_PRIVATE_KEY_PEM`

`PARSER_WORKLOAD_CERTIFICATE_CHAIN_PEM` may be absent or empty because the current workload certificate is issued directly by the registered Trust Anchor CA and no intermediate chain exists.

No alternate configuration names may be invented.

---

## 4. Secret-Custody Rules

The workload private key remains controlled material.

It must not be:

- committed to GitHub;
- pasted into chat;
- stored in repository `.env` files;
- placed in client-visible `VITE_*` variables;
- written to screenshots, logs, reports, fixtures, issue bodies, PR bodies, or workflow output;
- uploaded to GitHub Actions artifacts.

The workload certificate is public material but shall remain within the controlled Phase C workflow.

The CA private key and CA passphrase remain entirely outside Phase C and must not be used, uploaded, copied, or requested.

---

## 5. Phase C Execution Sequence

### C1 — Exact Runtime Target Identification

Before any provider write, identify the exact non-production production-equivalent server runtime that will execute the canonical TanStack Start server code.

Confirm all of the following as non-secret evidence:

- provider/account identity;
- runtime/project or Worker/service identity;
- environment name;
- deployment source/commit;
- that the target runs server-side code and is not a browser/client environment;
- that server-only bindings can be provisioned without exposing values to the browser bundle.

If the target cannot be uniquely established, STOP and report the ambiguity. Do not guess a Worker name, account, project, or environment.

### C2 — Non-Secret Configuration Verification

Resolve and verify the actual non-production values already created by GC-38R Phase B for:

- AWS region;
- S3 ingress bucket;
- Lambda Function URL;
- Roles Anywhere Trust Anchor ARN;
- Roles Anywhere Profile ARN;
- workload IAM role ARN.

Use authoritative AWS/GitHub deployment evidence. Do not invent identifiers from placeholders.

### C3 — Server-Only Binding Provisioning

Only after C1 and C2 pass, provision the approved server runtime with:

- the six verified non-secret AWS resource/configuration values above;
- `PARSER_WORKLOAD_CERTIFICATE_PEM` from the locally verified run #9 workload certificate;
- `PARSER_WORKLOAD_PRIVATE_KEY_PEM` from the matching locally held run #9 workload private key;
- no intermediate chain binding unless the runtime requires the key to exist, in which case its value must be empty and must never contain the root CA certificate as a substitute chain.

The Founder must enter or pipe private-key material directly from the local controlled file into the provider secret-binding mechanism. Claude/ChatGPT must not receive or reproduce the key content.

### C4 — Deployment / Runtime Activation

Deploy or activate only the non-production production-equivalent server runtime necessary to execute the canonical Phase C path.

No public production release is authorized.

### C5 — Direct Runtime Verification

Using synthetic fixture data only, prove the following in sequence:

1. server runtime starts with all required configuration present;
2. no parser credentials are visible in client-delivered JavaScript, HTML, network responses, browser storage, or public environment output;
3. IAM Roles Anywhere `CreateSession` succeeds from the production-equivalent server runtime using the workload certificate/private key;
4. returned temporary credentials are short-lived and not logged or surfaced;
5. downstream request signing succeeds;
6. the non-production Lambda Function URL accepts the `AWS_IAM` invocation;
7. the Lambda parser returns a valid bounded response for an approved synthetic CSV fixture;
8. one approved synthetic XLSX fixture is also verified if the existing Phase C harness/path supports it without new implementation;
9. error handling remains sanitized and does not expose raw AWS/provider bodies or credentials;
10. no production Supabase migration, production Lambda, production AWS role, production Cloudflare target, Lovable public deployment, or merchant data is touched.

### C6 — Evidence and Cleanup

Capture only non-secret evidence sufficient for independent verification:

- exact canonical commit SHA;
- provider/runtime target identity;
- names of configured bindings, never their secret values;
- Roles Anywhere success/failure status and HTTP/status category only;
- Lambda invocation success/failure status;
- fixture type and bounded parser result summary;
- confirmation that no credential material was client-visible or logged.

Do not delete the workload certificate/private key immediately after Phase C because independent verification and evidence review may still require the same controlled non-production identity. Retirement/revocation occurs under later explicit closure authorization.

---

## 6. Stop Conditions

STOP immediately and report only non-secret evidence if:

- the exact runtime target cannot be established;
- provisioning would require a public/client-visible environment variable;
- the provider requires committing a private key to the repository;
- any runtime/provider step requires the CA private key;
- Roles Anywhere rejects the certificate/identity and the fix would require widening IAM or Trust Anchor/Profile scope;
- Lambda invocation requires weakening `AWS_IAM`;
- a production resource would be touched;
- unexpected credential material appears in logs, browser output, or responses;
- a change outside the already approved GC-38R runtime/integration scope is required.

No security boundary may be weakened to make Phase C pass.

---

## 7. Explicit Non-Authorization

This instruction does not authorize:

- production AWS deployment or migration;
- production Supabase migrations;
- production Cloudflare or public application release;
- Lovable publication;
- changes to IAM trust boundaries, Roles Anywhere Trust Anchor/Profile/workload role scope, or Lambda Function URL auth mode;
- CA regeneration or CA private-key use;
- new product behavior;
- Stage 21 or later lifecycle advancement;
- mission acceptance.

---

## 8. Reporting

Claude Engineering shall produce the GC-38R Phase C execution/verification report as the next available `communication/live/report*.md` file, without including any credential or private-key material.

The report must clearly conclude exactly one of:

- `GC-38R PHASE C NON-PRODUCTION RUNTIME VERIFICATION — PASS`
- `GC-38R PHASE C NON-PRODUCTION RUNTIME VERIFICATION — FAIL`
- `GC-38R PHASE C NON-PRODUCTION RUNTIME VERIFICATION — BLOCKED`

Any repository report/update must be delivered by dedicated branch and human-reviewed PR. No self-merge.

Successful Phase C does not itself authorize Phase D completion reporting, Stage 21 evidence packaging, production migration, or mission acceptance.
