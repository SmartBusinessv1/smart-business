# SMART BUSINESS — REPOSITORY COMMUNICATION

# SB-P-1.11-GC-38R — C5 TEST-ONLY PARSER GUARD SQL CORRECTION AUTHORIZATION

**Instruction ID:** `instruction1.171`
**Mission:** `SB-P-1.11 — Product Catalog & Pricing`
**Workstream:** `GC-38R — Lambda Parser Non-Production Deployment`
**Sender:** Mission Control
**Recipient:** Claude Engineering
**Status:** AUTHORIZATION — BOUNDED CORRECTION
**Date:** 2026-08-26

---

## 1. Purpose

Resolve the concrete database blocker recorded in canonical `communication/live/report1.169.md` so GC-38R Phase C C5 can continue.

The verified blocker is PostgreSQL error `42702` in `public.acquire_parser_preview_guard`: the function's `RETURNS TABLE (business_id uuid, guard_token uuid)` output parameter conflicts with the `business_id` column referenced by `ON CONFLICT (business_id)` in the already-applied GC-38R parser-support schema.

This authorization is a correction mission only. It does not authorize new product behavior, new parser behavior, broader schema redesign, or production migration.

---

## 2. Authorized Work

Claude Engineering is authorized to:

1. Inspect the nine GC-38R parser-support `SECURITY DEFINER` functions in `supabase/migrations/20260819120000_sb_p_1_11_gc_38r_parser_support_schema.sql` specifically for the same PL/pgSQL output-parameter / column-name ambiguity class or another immediately adjacent defect that would deterministically block the already-authorized parser lease/guard path.
2. Correct `acquire_parser_preview_guard` so its existing contract and semantics remain unchanged while eliminating the ambiguity.
3. Correct sibling GC-38R parser-support functions only where inspection demonstrates the same concrete ambiguity/blocking class; do not perform opportunistic refactoring.
4. Implement the correction as a new forward corrective migration. Do not rewrite or delete the historical migration already applied to the test project.
5. Preserve the existing tables, function signatures expected by application code, grants, `SECURITY DEFINER` posture, `SET search_path = ''`, business isolation, lease/guard semantics, rate limits, expiry windows, lifecycle invariants, and service-role-only execution surface.
6. Add focused regression verification proving the corrected RPC behavior, including at minimum:
   - first guard acquisition succeeds for an eligible business;
   - a currently-held guard does not allow an unauthorized duplicate acquisition;
   - release / expiry behavior remains consistent with the locked contract;
   - the fixed function no longer emits PostgreSQL `42702`;
   - no Product Truth, catalog, inventory, price, tax, or merchant-decision data is introduced into parser support state.
7. Use a dedicated implementation branch and human-reviewed PR. Claude must not self-merge.

---

## 3. Test-Project Application Authorization

After the corrective migration PR is human-reviewed and merged into canonical `main`, Claude Engineering is authorized to apply only that corrective migration to the isolated Smart Business test Supabase project:

- Project: `smart-business-test`
- Project ref: `drravyyauixltoihzmwo`

No production Supabase migration or production database change is authorized.

Before applying the migration, verify the target project ref exactly. Stop on ambiguity.

---

## 4. C5 Retry Authorization

After the corrective migration is successfully applied and verified in `smart-business-test`, continue the already-authorized GC-38R Phase C C5 verification using the existing non-production diagnostic path on:

`smart-business-parser-nonprod`

The retry may proceed through the existing sequence:

merchant auth → parser guard → upload lease → Roles Anywhere `CreateSession` → short-lived credentials → signed S3/Lambda requests → `AWS_IAM` Lambda Function URL → bounded synthetic CSV result.

XLSX may be verified only if supported by the existing path without new implementation work.

The current non-production diagnostic route and test-scoped Cloudflare bindings may remain in place only while this C5 retry is active.

---

## 5. Mandatory Cleanup After Successful C5

If C5 completes successfully under this instruction:

1. remove or hard-disable the temporary GC-38R C5 diagnostic entry point according to `instruction1.170.md`;
2. remove the diagnostic enablement binding from `smart-business-parser-nonprod`;
3. remove test-only Supabase runtime bindings/secrets from the Worker unless a separately approved non-production runtime requirement explicitly needs them;
4. delete the throwaway test user/business created for this verification when no longer required;
5. verify the original parser AWS bindings/secrets remain intact;
6. record sanitized evidence without secret values or temporary credentials.

Cleanup changes requiring repository edits must also use a dedicated branch and human-reviewed PR; no self-merge.

---

## 6. Explicitly Not Authorized

This instruction does **not** authorize:

- production Supabase migration or production database changes;
- editing/replacing historical applied migrations in place;
- schema redesign beyond the demonstrated parser-support correction;
- changes to Catalog/Inventory Product Truth;
- authentication bypass;
- IAM, RuntimeBoundary, OIDC, Roles Anywhere Trust Anchor/Profile, workload-role, or deploy-policy widening;
- weakening Lambda Function URL `AWS_IAM` authentication;
- CA private-key or CA-passphrase use;
- production Cloudflare deployment;
- DNS, R2, KV, D1, Queues, Durable Objects, or unrelated Cloudflare changes;
- Lovable publication;
- production migrations already known to remain unauthorized;
- Stage 21 or later lifecycle work;
- permanent frontend integration of the parser.

---

## 7. Stop Conditions

Stop and report `BLOCKED` if any of the following is required:

- production access or production mutation;
- security-boundary weakening;
- modification of Product Truth or accounting rules;
- a parser contract/signature change not already approved by the locked EIS;
- a broader database redesign;
- secret or temporary credential disclosure;
- target-project ambiguity;
- a new defect outside this bounded parser-support correction that requires separate authority.

For a new blocker, contain the risk and identify the minimum compliant workaround before escalating. Do not create unnecessary serial governance gates.

---

## 8. Required Reports

### Implementation PR

Before any test-project migration application, provide a human-reviewed implementation PR containing:

- the new corrective migration;
- focused verification/tests or evidence;
- exact list of parser-support functions inspected;
- exact list of functions changed and why;
- confirmation that the historical migration was not rewritten;
- confirmation that no production action occurred.

### Final Execution Report

After human merge, test-project application, C5 retry, and cleanup status are known, provide a repository report containing:

- canonical commit used;
- corrective migration identity;
- exact test project ref verified;
- sanitized migration application result;
- sanitized guard/lease regression results;
- sanitized Roles Anywhere result;
- temporary credential lifetime confirmation without credential values;
- sanitized Lambda `AWS_IAM` invocation result;
- synthetic CSV result and XLSX result if applicable;
- diagnostic/test-binding cleanup status;
- throwaway test-data cleanup status;
- confirmation that production was untouched;
- final disposition.

Allowed final dispositions:

`GC-38R PHASE C C5 — PASS`

or

`GC-38R PHASE C C5 — BLOCKED`

or

`GC-38R PHASE C C5 — FAIL`

---

## 9. Mission Control Decision

The SQL ambiguity is a verified execution blocker inside the already-approved GC-38R non-production parser path. A narrow forward migration correction in the isolated test project is therefore authorized as the fastest reversible compliant path.

Security boundaries remain strict. Process boundaries remain flexible. Evidence must be sufficient, not ceremonial.
