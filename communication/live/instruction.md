# SMART BUSINESS MISSION CONTROL

# Instruction

**Mission ID:** `SB-REL-1.10-1.11`

**Gate:** `Gate 2A-C3B-D1 — F23-01 Verification-Path Read-Only Diagnosis`

**Parent Gate:** `Gate 2A-C3B — F23-01 Live Cross-Tenant Read-Isolation Verification`

**From:** Mission Control

**To:** `Claude Code — repository-capable read-only diagnostic/verifier`

**Status:** `ACTIVE AFTER HUMAN MERGE — READ-ONLY DIAGNOSTIC AUTHORIZATION`

**Date:** `2026-08-31`

---

## 1. Trigger

The first authorized human/operator Gate 2A-C3B probe completed without mutation but did not satisfy the PASS criteria.

Human/operator evidence established:

- production project identity matched `gysgzasfcjvtrgaigfyn / smart-business / ap-south-1`;
- Owner A authenticated UUID matched `2eaba621-7a06-497f-b878-2e68c0d0d8b7`;
- Owner B authenticated UUID matched `c520961e-f43f-4cba-9e22-b0e4f2256253`;
- Owner A own-scope Catalog A returned product `e3c3feb1-b307-4edc-80d8-bd0d51ff31c1`;
- Owner B own-scope Catalog B returned product `39e4b06e-de97-4121-97fd-da6d728750e0`;
- Business and Inventory exact-ID reads returned HTTP 404 for both own-scope and cross-tenant requests;
- both cross-tenant Catalog RPC calls returned a non-empty result shape that the human probe deliberately did not print, recorded only as `RPC RETURNED A RESULT — MANUAL REVIEW REQUIRED`;
- no protected cross-tenant row disclosure was proven;
- the human probe stopped without repair, mutation, privileged bypass, or additional testing.

Mission Control classification of that attempt:

`BLOCKED — F23-01 LIVE VERIFICATION INCONCLUSIVE`

This instruction does not overwrite the blocked attempt. It creates only the narrow read-only diagnosis needed to understand the verification path before any separately authorized retest.

## 2. Canonical Baseline

Before diagnosis, verify canonical repository `SmartBusinessv1/smart-business` and STOP if `main` has materially changed from the authorization baseline in a way that affects this gate.

Authorization baseline SHA:

`a6d5d37f61ad65e8b183270970e522fbb28b6225`

Authorized production Supabase project:

- project ID: `gysgzasfcjvtrgaigfyn`;
- name: `smart-business`;
- region: `ap-south-1`.

The test project `drravyyauixltoihzmwo` is not a substitute for the production evidence under diagnosis.

## 3. Objective

Diagnose, without replaying the owner-authenticated probe and without changing any state:

1. why the approved Business exact-ID PostgREST read path returned HTTP 404 even for the authenticated owner's own existing fixture;
2. why the approved Inventory exact-ID PostgREST read path returned HTTP 404 even for the authenticated owner's own existing fixture;
3. what response contract `catalog_product_read(p_product_id)` uses for a cross-tenant/non-readable product and whether the human script's `RPC RETURNED A RESULT — MANUAL REVIEW REQUIRED` can be explained as a safe denial/result envelope rather than returned protected product data;
4. whether the original human probe script/read-path assumptions were incorrect, incomplete, or incompatible with the current production API contract;
5. the smallest safe read-only retest method, if determinable, that would allow a later human/operator Gate 2A-C3B retest to distinguish own-scope success from cross-tenant non-disclosure without printing secrets or unrelated data.

This is diagnosis only. A retest requires a separate Mission Control authorization after this report is reviewed and merged.

## 4. Authorized Read-Only Evidence Sources

Claude Code may inspect only what is necessary, including:

- canonical repository source and migrations;
- generated Supabase types;
- current RLS policies and grants through read-only production catalog queries;
- function definitions, signatures, ownership/security mode, search path, and EXECUTE grants through read-only production catalog queries;
- table/schema exposure and PostgREST-relevant grants through read-only production metadata queries;
- current production project identity/health;
- non-secret API/server logs only if they can be inspected without exposing credentials or unrelated merchant payloads;
- prior canonical H1/Gate 2A evidence necessary to reconcile fixture existence and known policy state.

Read-only unrestricted SQL may be used for metadata/evidence reconciliation only. It must not be used to simulate Owner A or Owner B and must not substitute for the later authenticated human probe.

## 5. Required Diagnostic Questions

Answer each explicitly.

### D1 — Business 404

Determine the most evidence-supported cause of the Business own-scope HTTP 404.

Distinguish at minimum between:

- REST route/schema exposure issue;
- table/role grant issue;
- RLS result behavior;
- malformed request/path assumption;
- table name/API contract mismatch;
- another evidenced cause.

Do not infer from HTTP code alone.

### D2 — Inventory 404

Perform the same diagnosis for `inventory_items`.

Determine whether the cause is the same as Business or different.

### D3 — Own-Scope Fixture Existence

Read-only independently confirm that the exact Business A/B and Inventory A/B fixture rows still exist in production under the expected ownership/business relationships.

Do not mutate or recreate anything.

### D4 — Catalog Cross-Tenant Result Contract

Inspect `catalog_product_read(p_product_id)` and determine the exact safe response shape for:

- an authorized own-scope product;
- a non-readable/cross-tenant product;
- not-found or governed denial where applicable.

Determine whether a non-empty JSON envelope can represent a safe non-disclosure outcome.

Do not claim the actual human cross-tenant payload contents unless evidence exists. The human script intentionally did not record them.

### D5 — Protected-Data Risk

Determine whether any evidence currently proves protected cross-tenant data disclosure.

If none, say exactly that. Do not convert ambiguity into PASS.

If a material security defect is independently identified, classify it and STOP; no repair is authorized.

### D6 — Retest Eligibility

If the diagnosis is sufficient, provide the exact smallest change to the human read-only verification method needed for a later retest.

The recommendation may adjust request paths or safe response parsing only.

It must not require:

- service-role impersonation;
- database-owner simulation of owner sessions;
- new fixtures;
- schema/RLS/grant/function changes;
- application changes;
- privileged bypass.

## 6. Explicitly Not Authorized

This diagnosis does not authorize:

- replaying Owner A or Owner B authenticated sessions;
- requesting or receiving either owner's password, token, cookie, refresh token, recovery link, or authorization header;
- `INSERT`, `UPDATE`, `DELETE`, `UPSERT`, `PATCH`, DDL, mutation RPCs, fixture cleanup, or any other production mutation;
- creating/editing/deleting Auth users or fixtures;
- migration creation or execution;
- RLS, policy, grant, role, function, trigger, schema, default-privilege, Auth, OAuth, or secret changes;
- application-code changes;
- Lovable changes;
- AWS/Lambda/parser/bulk-import changes;
- Cloudflare/DNS/domain changes;
- deployment, publication, release, or merchant exposure;
- F23-01 retest;
- F23-02/F23-03/F23-04 progression;
- Product Truth changes;
- reopening SB-P-1.10 or SB-P-1.11;
- starting another Product Mission;
- self-merge.

## 7. Evidence Precision

Separate every material statement as one of:

- independently verified;
- human/operator-attested;
- inferred from documented/runtime semantics;
- unresolved.

Do not claim the human Catalog cross-tenant payload was safe merely because the script printed `RPC RETURNED A RESULT — MANUAL REVIEW REQUIRED`.

Do not claim Business/Inventory isolation from matching 404 outcomes because own-scope controls also returned 404.

## 8. Required Report

Update `communication/live/report.md` with:

1. exact canonical `main` SHA reviewed;
2. production identity verified;
3. evidence inspected;
4. answers D1–D6;
5. whether any material security defect is proven;
6. exact retest recommendation if eligible;
7. no-mutation/no-secret confirmation;
8. final disposition.

The report must end with exactly one of:

- `PASS — VERIFICATION PATH DIAGNOSED — F23-01 RETEST ELIGIBLE`
- `BLOCKED — VERIFICATION-PATH DIAGNOSIS INCONCLUSIVE`
- `FAIL — MATERIAL SECURITY DEFECT IDENTIFIED`
- `STOP — DIAGNOSTIC INCIDENT`

Submit the report through a protected branch and PR. Do not self-merge.

## 9. Continuation Boundary

A diagnostic PASS does not itself rerun or close F23-01.

It makes only a separately authorized human/operator F23-01 retest eligible for Mission Control consideration.

No downstream release-readiness authority is created.

---

**Mission Control boundary:** explain the failed verification path with read-only evidence; do not repair, replay owner sessions, retest F23-01, or advance release readiness.