# SMART BUSINESS — REPOSITORY COMMUNICATION

# SB-P-1.11-GC-38R — POST-C5 REPOSITORY CLEANUP EXECUTION INSTRUCTION

**Instruction ID:** `instruction1.186`  
**Mission:** `SB-P-1.11 — Product Catalog & Pricing`  
**Workstream:** `GC-38R — Lambda Parser Non-Production Deployment`  
**Sender:** Mission Control  
**Recipient:** Claude Engineering  
**Date:** 2026-08-28  
**Status:** AUTHORIZATION PENDING HUMAN MERGE

---

## 1. Purpose

Execute the repository-cleanup portion of merged `communication/live/instruction1.185.md` after GC-38R Phase C C5 PASS.

This instruction is limited to repository cleanup only.

No runtime, Cloudflare, Supabase, AWS, production, migration, or release-progression action is authorized in this step.

---

## 2. Preconditions

Execution is authorized only after this instruction is human-reviewed and merged to `main`.

Before implementation, verify:

1. `communication/live/instruction1.185.md` is present on `main` and authorizes bounded post-C5 cleanup.
2. `communication/live/report1.179.md` is present on `main` and records `GC-38R PHASE C C5 — PASS`.
3. No later C5 retry has been executed.
4. The target remains non-production only.

If any precondition is false or ambiguous, STOP and report.

---

## 3. Required Repository Cleanup

Claude Engineering shall perform only the following repository cleanup.

### 3.1 Remove temporary diagnostic surfaces

Delete:

- `src/routes/_authenticated/gc38r-c5-diagnostic.tsx`
- `src/server-functions/gc38r-c5-diagnostic.ts`

### 3.2 Regenerate route tree normally

Use the repository's normal TanStack route-generation process so that `src/routeTree.gen.ts` no longer contains any diagnostic-route import, type, path, ID, or child entry for:

`/gc38r-c5-diagnostic`

Do not hand-edit generated route output if the normal repository route-generation process is available.

### 3.3 Remove temporary C5-only diagnostic instrumentation

Remove temporary C5-only diagnostic comments, categorization, and logging introduced for GC-38R diagnosis from repository code where removal is demonstrably safe and does not change validated parser behavior.

Inspect at minimum:

- `src/server-functions/parser-lease.ts`
- `src/lib/parser-ingress/roles-anywhere.ts`
- `tests/parser-lease/roles-anywhere-diagnostics.test.ts`

The dedicated diagnostic-only test may be removed where its only purpose was temporary C5 instrumentation verification.

### 3.4 Preserve parser security behavior

Be conservative in `src/lib/parser-ingress/roles-anywhere.ts`.

Do not weaken error sanitization or begin surfacing raw provider, crypto-library, certificate, key, request-signing, canonical-request, string-to-sign, or credential content merely to remove temporary diagnostic instrumentation.

Preserve the validated AWS4-X509 signing behavior and all security boundaries that passed C5.

Remove only material that is demonstrably C5-only and whose removal does not alter parser business logic, Roles Anywhere signing behavior, S3 presigned POST behavior, Lambda invocation behavior, lease semantics, or security guarantees.

---

## 4. Repository Search Requirement

Before finalizing the implementation PR, search executable and configuration code for:

- `gc38r-c5-diagnostic`
- `GC38R_C5_DIAGNOSTIC_ENABLED`
- `categorizeAwsCredentialError`
- C5-only diagnostic references introduced under prior GC-38R diagnostic authorizations

Historical governance records under `communication/` must remain unchanged.

Do not remove historical reports or instructions merely because they mention C5 or the diagnostic route.

---

## 5. Explicitly Not Authorized

This instruction does not authorize:

- runtime deployment;
- Cloudflare Worker change;
- Cloudflare binding removal;
- Supabase user or business cleanup;
- AWS mutation;
- S3 mutation;
- IAM or Roles Anywhere change;
- certificate or CA change;
- Lambda change or deployment;
- parser architecture change;
- parser business-logic change;
- production change;
- migration execution;
- later-stage progression;
- unrelated refactoring.

---

## 6. Verification Requirements

Run the repository's relevant verification steps, including as applicable:

- route generation;
- typecheck;
- targeted tests;
- build;
- lint or other required repository checks.

Completion evidence must confirm:

1. diagnostic route source is absent;
2. diagnostic server-function source is absent;
3. generated route tree no longer exposes `/gc38r-c5-diagnostic`;
4. executable/configuration code contains no obsolete `GC38R_C5_DIAGNOSTIC_ENABLED` reference;
5. temporary C5-only instrumentation is removed where authorized;
6. parser behavior and security boundaries remain unchanged;
7. relevant existing tests remain passing;
8. no runtime, Cloudflare, Supabase, AWS, production, migration, or release-progression action occurred.

---

## 7. Delivery Requirements

Create a normal implementation PR.

Do not self-merge.

Return in the implementation report:

- branch name;
- PR number and link;
- files deleted;
- files modified;
- verification commands and results;
- any diagnostic-era code deliberately retained and the exact security or behavior reason for retaining it.

No unrelated refactoring.

---

## 8. Mission Control Disposition

Upon human merge of this instruction:

**CLAUDE ENGINEERING IS AUTHORIZED TO EXECUTE THE REPOSITORY-CLEANUP PORTION OF POST-C5 GC-38R CLEANUP ONLY — REMOVE TEMPORARY DIAGNOSTIC SURFACES — PRESERVE VALIDATED PARSER SECURITY AND BEHAVIOR — NO RUNTIME OR EXTERNAL-SYSTEM MUTATION.**
