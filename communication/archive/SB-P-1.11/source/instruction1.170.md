# SMART BUSINESS — REPOSITORY COMMUNICATION

# SB-P-1.11-GC-38R — PHASE C C5 ENTRY-POINT CORRECTION AUTHORIZATION

**Instruction ID:** `instruction1.170`
**Mission:** `SB-P-1.11 — Product Catalog & Pricing`
**Workstream:** `GC-38R — Lambda Parser Non-Production Deployment`
**Sender:** Mission Control
**Recipient:** Claude Engineering
**Authority:** Mission Control, under Founder-approved GC-38R Phase C scope
**Status:** AUTHORIZED FOR BOUNDED CORRECTION AFTER HUMAN MERGE
**Date:** 2026-08-26

---

## 1. Purpose

This instruction resolves the specific blocker recorded in canonical `communication/live/report1.168.md`.

C4 is complete. C5 could not begin because `src/server-functions/parser-lease.ts` is not reachable from the deployed TanStack Start route tree and is therefore excluded from the Cloudflare Worker build.

This instruction authorizes the minimum reversible non-production correction necessary to make the existing `parserLeasePreview` path reachable for Phase C C5 verification.

This is **not** authorization for a new product feature, permanent frontend integration, production deployment, authentication bypass, parser redesign, or broader implementation work.

---

## 2. Exact Authorized Outcome

Claude Engineering may add one narrowly scoped **non-production-only authenticated diagnostic invocation entry point** whose sole purpose is to call the existing `parserLeasePreview` path with a bounded synthetic fixture so the already-authorized C5 runtime verification can execute end to end.

The implementation must:

1. use the existing Smart Business merchant authentication path;
2. require an authenticated non-real test merchant/business context;
3. use only the isolated `smart-business-test` Supabase project, ref `drravyyauixltoihzmwo`, for this verification;
4. invoke existing parser-lease logic rather than duplicating or bypassing it;
5. be clearly non-production-only and impossible to activate accidentally in production;
6. accept only the minimum synthetic diagnostic input required by C5;
7. add no new parser, accounting, catalog, pricing, import, or business behavior;
8. be removed or disabled under this same correction scope after successful C5 verification, before GC-38R Phase C closure.

---

## 3. Required C5 Verification

After human review and merge of the correction implementation, Claude Engineering may rebuild and redeploy only to:

`smart-business-parser-nonprod`

The redeploy must preserve all existing Cloudflare bindings and secret bindings.

C5 shall then verify, with sanitized evidence:

1. the non-production Worker starts with the required parser configuration;
2. no parser credential material is client-visible or returned in responses;
3. AWS Roles Anywhere `CreateSession` succeeds through the existing implementation;
4. temporary AWS credentials are short-lived and are not printed or logged;
5. downstream request signing succeeds;
6. the Lambda Function URL accepts the existing `AWS_IAM` invocation path;
7. Lambda returns a valid bounded response for a synthetic CSV fixture;
8. XLSX may be exercised only if the existing path supports it without new implementation work;
9. failure responses and logs remain sanitized;
10. no production environment, merchant data, or unrelated service is touched.

---

## 4. Security and Data Boundaries

The following are mandatory:

- **No authentication bypass.**
- **No service-role substitution for merchant authentication.**
- **No weakening of AWS_IAM Function URL authentication.**
- **No IAM, RuntimeBoundary, OIDC, Roles Anywhere Trust Anchor/Profile, workload-role, or deploy-policy broadening.**
- **No CA private key or CA passphrase use, transfer, disclosure, or request.**
- **No workload private key in repository files, chat, logs, screenshots, build output, GitHub artifacts, or client-visible variables.**
- **No production Supabase project, production migration, production Cloudflare Worker, production AWS resource, Lovable publication, DNS, R2, or custom-domain change.**
- **No real merchant data.** Only bounded synthetic diagnostic data is permitted.

The currently configured workload certificate/private-key Cloudflare secret bindings must remain secret and must not be read back, reproduced, or re-entered unless a genuine provider failure makes that unavoidable and Mission Control separately authorizes it.

---

## 5. Test Supabase Boundary

For this diagnostic only, use:

- Project: `smart-business-test`
- Project ref: `drravyyauixltoihzmwo`

Use an existing non-real test merchant/business identity if available. If one does not exist, the minimum throwaway user + business may be created through the normal authenticated application flow in the test project and removed after verification.

Do not point this C5 diagnostic at the Team LIPS production Supabase project.

---

## 6. Implementation Discipline

The correction must be implemented on a dedicated branch and submitted through a human-reviewed pull request.

Claude Engineering must not self-merge.

Before live redeployment, verify locally that:

- the diagnostic entry point is included in the Worker build;
- it is gated to non-production;
- it requires the normal authenticated merchant path;
- it cannot expose the parser certificate/private key or temporary AWS credentials;
- existing build/tests remain clean.

Use the minimum code necessary. Do not convert this diagnostic route into a permanent merchant-facing feature.

---

## 7. Removal / Disablement Requirement

Successful C5 verification does not make the diagnostic entry point a product feature.

After evidence is captured, Claude Engineering must remove or hard-disable the temporary diagnostic entry point under this same correction authorization and submit that cleanup through human review before Phase C is considered closed.

The final deployed non-production state must not retain an unnecessary diagnostic surface.

---

## 8. Stop Conditions

Stop and report `BLOCKED` if any of the following becomes necessary:

- authentication bypass;
- production Supabase access;
- production Cloudflare or AWS deployment;
- IAM/security-boundary broadening;
- AWS_IAM weakening;
- CA private key access;
- exposure or reproduction of workload private-key material;
- a new parser/business behavior rather than invocation of the existing path;
- a change outside this bounded diagnostic correction;
- an irreversible provider or architecture change.

Do not create a new governance loop for ordinary reversible implementation details within the scope above.

---

## 9. Required Report

After execution, return a repository communication report to Mission Control containing:

- canonical commit reviewed;
- implementation PR/commit identity;
- exact diagnostic entry-point design and non-production guard;
- authentication path used;
- test Supabase project confirmation;
- Cloudflare deployment identity/version;
- confirmation that all existing bindings were preserved;
- sanitized Roles Anywhere result;
- temporary credential lifetime confirmation without credential values;
- sanitized Lambda AWS_IAM invocation result;
- synthetic CSV result;
- XLSX result only if exercised without new work;
- credential/client/log exposure checks;
- cleanup/removal status of the diagnostic entry point;
- exact final disposition.

Allowed dispositions:

- `GC-38R PHASE C C5 — PASS`
- `GC-38R PHASE C C5 — BLOCKED`
- `GC-38R PHASE C C5 — FAIL`

---

## 10. Mission Control Decision

**AUTHORIZED:** minimum non-production authenticated diagnostic entry point + C5 reattempt + diagnostic cleanup.

**NOT AUTHORIZED:** production changes, auth bypass, security-boundary changes, new product behavior, permanent frontend integration, Stage 21+, or broader GC-38R expansion.

This authorization becomes executable only after this instruction is human-reviewed and merged into canonical `main`.