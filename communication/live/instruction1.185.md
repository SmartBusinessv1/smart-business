# SMART BUSINESS — REPOSITORY COMMUNICATION

# SB-P-1.11-GC-38R — POST-C5 NON-PRODUCTION CLEANUP AUTHORIZATION

**Instruction ID:** `instruction1.185`  
**Mission:** `SB-P-1.11 — Product Catalog & Pricing`  
**Workstream:** `GC-38R — Lambda Parser Non-Production Deployment`  
**Sender:** Mission Control  
**Recipient:** Claude Engineering / Founder / Authorized Operators  
**Date:** 2026-08-27  
**Status:** AUTHORIZATION PENDING HUMAN MERGE

---

## 1. Purpose

Authorize bounded cleanup of temporary GC-38R C5 diagnostic material after `communication/live/report1.179.md` records `GC-38R PHASE C C5 — PASS`.

This cleanup removes only temporary diagnostic surfaces and test-only artifacts that were introduced for C5 verification.

This instruction does not authorize production changes, migrations, release progression, or changes to the now-valid non-production parser infrastructure.

---

## 2. Preconditions

Execution is authorized only after this instruction is human-reviewed and merged to `main`.

Before cleanup, verify all of the following:

1. `report1.179.md` is present on `main` and records C5 PASS.
2. The latest C5 evidence shows:
   - Roles Anywhere CreateSession — `OK issued`;
   - S3 upload — `OK 2xx`;
   - confirm + dispatch / Lambda AWS_IAM invocation — `OK parsed — 1 row(s)`.
3. No later C5 retry has been executed.
4. The target remains non-production only.

If any precondition is false or ambiguous, STOP and report.

---

## 3. Authorized Repository Cleanup

Claude Engineering is authorized to remove only temporary C5 diagnostic code and temporary C5-only diagnostic instrumentation.

Authorized repository cleanup includes:

- remove `src/routes/_authenticated/gc38r-c5-diagnostic.tsx`;
- remove `src/server-functions/gc38r-c5-diagnostic.ts`;
- remove the generated route-tree entry resulting solely from that diagnostic route through the repository's normal route generation process;
- remove temporary C5-only diagnostic comments, categorization, or logging introduced specifically under prior GC-38R diagnostic authorizations, provided the underlying production/non-production parser behavior is unchanged;
- remove references to `GC38R_C5_DIAGNOSTIC_ENABLED` from application/runtime configuration code where they exist solely for the temporary diagnostic route.

Do not alter the parser business logic, lease semantics, Roles Anywhere signing implementation, S3 presigned POST behavior, Lambda invocation behavior, catalog-import behavior, or security boundaries that passed C5.

Repository changes must proceed through a normal PR. No direct push to `main` and no self-merge.

---

## 4. Authorized Cloudflare Cleanup

After the repository cleanup is merged and deployed through the approved non-production path, the authorized operator may remove or hard-disable the temporary non-production binding:

`GC38R_C5_DIAGNOSTIC_ENABLED`

from the existing `smart-business-parser-nonprod` Worker.

No other Worker variable, secret, route, deployment setting, certificate material, or Cloudflare account configuration may be changed under this instruction.

If route removal already makes the diagnostic unreachable before binding removal, that is acceptable; both code surface and temporary binding should ultimately be absent.

---

## 5. Authorized Test Identity and Business Cleanup

The existing throwaway C5 diagnostic identity and associated test-only business in `smart-business-test` may be removed only after repository/runtime diagnostic removal is verified.

The authorized identity is the existing C5 diagnostic user only:

`gc38r-c5-diagnostic+b681c8bd-9634-4cc4-bb48-b9451eea567a@example.com`

No other Supabase user may be modified or deleted.

Only business/data rows proven to belong exclusively to that throwaway C5 diagnostic identity/business may be removed. If referential ownership is ambiguous, STOP and report rather than broadening deletion.

No project-wide auth, provider, RLS, schema, migration, or non-test business-data change is authorized.

---

## 6. S3 and AWS Cleanup Boundary

Do not remove or weaken the bounded S3 CORS rule that was required for the approved browser-to-S3 presigned POST architecture and whose correction enabled C5 PASS.

Do not delete or alter the non-production ingress bucket, workload role, RuntimeBoundary, Trust Anchor, Roles Anywhere profile, Lambda, Function URL, OIDC role, deployment policy, or other validated GC-38R infrastructure under this cleanup authorization.

Transient objects created by the fixed C5 fixture may be removed only if they are clearly identifiable as C5-test-only artifacts and removal is supported by the existing approved cleanup path. If identification is ambiguous, leave them in place and report the limitation.

---

## 7. Explicitly Not Authorized

This instruction does not authorize:

- any further C5 retry;
- production changes;
- production deployment;
- Supabase production migration execution;
- IAM changes;
- Roles Anywhere changes;
- certificate or CA rotation;
- Lambda changes;
- S3 CORS removal or broadening;
- bucket-policy changes;
- parser architecture changes;
- catalog behavior changes;
- progression to a later release stage;
- unrelated refactoring.

---

## 8. Verification Requirements

Completion evidence must verify, without exposing secrets:

1. diagnostic route source removed;
2. diagnostic server-function source removed;
3. generated route tree no longer exposes the C5 diagnostic route;
4. temporary C5-only diagnostic instrumentation removed where authorized;
5. non-production runtime no longer serves the diagnostic route;
6. `GC38R_C5_DIAGNOSTIC_ENABLED` is absent or hard-disabled;
7. exact throwaway test identity/business cleanup disposition is recorded;
8. validated parser infrastructure, including the bounded S3 CORS rule, remains intact;
9. no production or unrelated mutation occurred.

---

## 9. Required Completion Report

After cleanup, create a report-only PR recording:

- repository files removed/changed;
- non-production deployment/runtime verification result;
- temporary binding removal/hard-disable result;
- exact test identity/business cleanup result;
- any deliberately retained artifact and why;
- confirmation that S3 CORS and validated parser infrastructure remain intact;
- confirmation that no production, migration, IAM, certificate, Lambda, parser-logic, or later-stage action occurred;
- final disposition:
  - `GC-38R POST-C5 CLEANUP — PASS`, or
  - `GC-38R POST-C5 CLEANUP — BLOCKED`.

Do not self-merge the report PR.

---

## 10. Mission Control Disposition

Upon human merge of this instruction:

**BOUNDED GC-38R POST-C5 NON-PRODUCTION CLEANUP IS AUTHORIZED — REMOVE TEMPORARY DIAGNOSTIC SURFACES ONLY — PRESERVE VALIDATED PARSER INFRASTRUCTURE — NO PRODUCTION OR RELEASE PROGRESSION.**
