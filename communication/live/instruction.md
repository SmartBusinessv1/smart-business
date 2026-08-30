# SMART BUSINESS MISSION CONTROL

# Instruction

**Mission ID:** `SB-REL-1.10-1.11`

**Mission Name:** `Gate 2A-C3A-H1 — Human/Operator F23-01 Prerequisite Establishment`

**From:** Mission Control

**To:** `Founder / Authorized Human Production Operator`

**Status:** `ACTIVE — HUMAN/OPERATOR PRODUCTION FIXTURE AUTHORIZATION`

**Date:** `2026-08-30`

---

## Context

Gate 2A-C3A attempted to establish the production-safe verification prerequisite for `F23-01` but closed with:

`BLOCKED — SAFE PREREQUISITE COULD NOT BE ESTABLISHED`

The blocker was an execution-environment/tool-permission constraint. No production fixture row or verification Auth user was created.

The blocked attempt was merged through PR #439 at canonical `main` commit:

`b2a191f168be25e2fbbb1366be2ecdfc92c1370d`

The prior attempt also produced a complete, test-validated fixture design. Mission Control now authorizes a human/operator-controlled prerequisite establishment using the supported Supabase Auth administrative path for the two synthetic verification owners.

This instruction does **not** authorize `F23-01` cross-tenant probing itself.

## Canonical Production Identity

Authorized production Supabase project:

`gysgzasfcjvtrgaigfyn`

Project name:

`smart-business`

Region:

`ap-south-1`

Before any production mutation, the human/operator must independently verify this exact project identity in Supabase and STOP if there is any ambiguity.

## Authorized Objective

Establish exactly two controlled, non-merchant production verification owner identities and exactly two corresponding verification businesses, with only the minimum Inventory and Catalog/Pricing fixture data required for the later read-only `F23-01` cross-tenant isolation probe.

The fixture set must remain clearly separated from real merchant data and must be unmistakably labeled as verification-only.

## Required Verification Identities

Create exactly two synthetic production Auth users using the **supported Supabase Auth Admin path**. Do not insert directly into `auth.users`.

Required labels/emails:

- Owner A: `F23-01 Verification Owner A`
  - email: `sb-f23-01-verification-owner-a@teamlips.com`
- Owner B: `F23-01 Verification Owner B`
  - email: `sb-f23-01-verification-owner-b@teamlips.com`

Use Supabase Dashboard Authentication user administration or an equivalent supported `auth.admin.createUser()` administrative API path.

Where the supported Auth path allows metadata, set clear non-secret markers equivalent to:

- `purpose = F23-01`
- `environment = production-verification`
- `non_merchant_test_identity = true`

Do not expose passwords, service-role keys, access tokens, refresh tokens, session cookies, recovery links, or other secrets in Git, PR text, screenshots, chat, or `communication/live/report.md`.

If a supported administrative Auth path cannot create the users safely, STOP. Direct `auth.users` SQL insertion is not authorized by this instruction.

## Authorized Business Fixtures

After the two Auth users exist, establish exactly two businesses:

- `SB F23-01 Verification Business A — DO NOT USE`
- `SB F23-01 Verification Business B — DO NOT USE`

Business A must be owned only by Owner A.

Business B must be owned only by Owner B.

Preferred continuity IDs from the test-validated Gate 2A-C3A plan may be reused if the supported creation path permits explicit IDs without bypassing integrity controls:

- Business A planned UUID: `936c9ec9-57b0-47f8-ae39-b91aabdc0a48`
- Business B planned UUID: `6f74c746-3172-4bb7-8e0c-d31fdb6158d8`

If the supported path generates different business UUIDs, that is acceptable. Record the actual non-secret IDs in the completion evidence.

## Supported Creation Path for Business and Fixture Data

After Auth provisioning, use the narrowest existing supported authenticated application/API/RPC path available.

Preferred order:

1. authenticate as each synthetic verification owner and use the normal application/PostgREST business onboarding path for its own business;
2. create one Inventory item per business through the normal authenticated Inventory insert path;
3. create one Catalog product per business through the accepted `create_catalog_product(...)` RPC as that business owner.

A human operator may use a short local administrative script or Supabase client only if it uses supported Auth/API/RPC interfaces and preserves the same owner-authenticated semantics.

Do not use a service-role bypass for owner-scoped fixture creation unless the supported owner-authenticated path is genuinely unavailable and Mission Control separately authorizes that exception.

Do not create or edit migrations.

Do not alter RLS, grants, policies, roles, functions, triggers, schemas, default privileges, Auth configuration, OAuth configuration, or application code.

## Minimum Inventory Fixture

Create exactly one clearly labeled Inventory item in each verification business:

- Business A: `F23-01 VERIFICATION Item A`
- Business B: `F23-01 VERIFICATION Item B`

Use `base_unit = 'unit'` unless the accepted runtime path requires another existing valid value.

Preferred continuity IDs from the prior validated plan may be reused if supported:

- Item A planned UUID: `c8818d0a-7de5-4c00-9257-52e99226ad08`
- Item B planned UUID: `c12d5726-27c5-47d6-8390-d4d106e08677`

If the supported path generates different IDs, record the actual IDs instead.

Do not create Inventory movements or transactions in this gate.

## Minimum Catalog/Pricing Fixture

Create exactly one Catalog product per verification business through the accepted `create_catalog_product(...)` RPC:

- Business A: `F23-01 VERIFICATION Product A`
- Business B: `F23-01 VERIFICATION Product B`

Use only the minimum required fields. Do not create categories, barcodes, SKUs, price history, import jobs, or supporting records unless the accepted RPC/schema requires them.

If the RPC returns generated product IDs, record those non-secret IDs in the completion evidence.

## Required Pre-Mutation Controls

Before creating anything, the human/operator must verify:

1. canonical production project identity is exactly `gysgzasfcjvtrgaigfyn`;
2. a current recoverable production backup exists;
3. no existing canonical `F23-01` verification users/businesses already exist;
4. the supported Supabase Auth Admin creation path is available;
5. no real merchant identity/business/data will be reused;
6. the supported authenticated business/Inventory/Catalog creation paths are available without schema/security/configuration change.

STOP if any of these cannot be proven.

## Required Post-Creation Verification

After establishment, verify without running cross-tenant probes that:

1. exactly two synthetic verification Auth users exist;
2. exactly two verification businesses exist;
3. Business A maps only to Owner A;
4. Business B maps only to Owner B;
5. Business A contains exactly the intended minimum Inventory fixture for this gate;
6. Business B contains exactly the intended minimum Inventory fixture for this gate;
7. Business A contains exactly the intended minimum Catalog/Pricing fixture for this gate;
8. Business B contains exactly the intended minimum Catalog/Pricing fixture for this gate;
9. no real merchant identity/business/data was modified;
10. no unrelated production data was created;
11. no RLS/grant/policy/schema/function/configuration state changed;
12. production database health remains normal.

Do not execute cross-business read attempts in this gate.

## Human/Operator Evidence Handoff

The human/operator must return a concise completion record to Mission Control containing only non-secret evidence:

- verified production project identity;
- confirmation of current backup/recovery readiness;
- Owner A Auth user UUID;
- Owner B Auth user UUID;
- Business A UUID;
- Business B UUID;
- Inventory Item A UUID;
- Inventory Item B UUID;
- Catalog Product A UUID;
- Catalog Product B UUID;
- confirmation that the two Auth users were created through Supabase Auth Admin rather than direct `auth.users` SQL;
- confirmation that each business/fixture was created through the supported authenticated application/API/RPC path;
- confirmation that no real merchant data or unrelated production data changed;
- confirmation that no schema/security/configuration change occurred;
- final result.

Do not include credentials or secrets.

After the human/operator completes the production action, Claude Code or another repository-capable operator may perform **read-only verification only** and write the canonical result to:

`communication/live/report.md`

That repository report must be submitted through a controlled PR and must not be self-merged.

## Required Final Result

The canonical report must end with exactly one of:

- `PASS — F23-01 PRODUCTION-SAFE TEST PREREQUISITE ESTABLISHED`
- `BLOCKED — HUMAN/OPERATOR PREREQUISITE NOT ESTABLISHED`
- `STOP — PREREQUISITE ESTABLISHMENT INCIDENT`

## Explicitly Not Authorized

This instruction does not authorize:

- direct SQL insertion into `auth.users`;
- execution of `F23-01` cross-tenant read probes;
- use or impersonation of real merchant identities;
- creation of more than two verification Auth users;
- creation of more than two verification businesses;
- transactions, purchases, customers, suppliers, employees, attendance, parser jobs, imports, or unrelated business data;
- migration creation/execution/repair/reconciliation;
- RLS, policy, grant, role, function, trigger, schema, default-privilege, or Auth-configuration changes;
- application deployment/publication;
- AWS, S3, IAM, Roles Anywhere, Lambda, Cloudflare, DNS, WAF, parser, certificate, secret, or environment-variable changes;
- parser/bulk-import activation;
- merchant feature exposure;
- product release execution;
- Founder release approval by inference;
- Product Truth changes;
- reopening SB-P-1.10 or SB-P-1.11 lifecycle stages;
- starting SB-P-1.12;
- self-approval or self-merge.

## Stop Conditions

STOP before mutation if:

- production project identity is ambiguous;
- current recoverable backup capability cannot be positively verified;
- an existing canonical F23-01 verification pair is found;
- supported Supabase Auth Admin provisioning is unavailable;
- business/Inventory/Catalog establishment would require direct Auth-table manipulation, schema/security/configuration change, or reuse of real merchant data;
- more than the minimum two-user/two-business fixture set is required;
- a Critical/High security or data-integrity concern appears.

STOP after mutation if:

- more than the authorized verification identities/businesses/fixtures are created;
- ownership mapping is wrong or ambiguous;
- real merchant data is affected;
- unrelated production data changes;
- RLS/grants/policies/schema/functions/configuration drift;
- production health degrades;
- partial creation leaves fixture state uncertain.

A STOP does not authorize improvised cleanup, repair, retries, credential exposure, or scope expansion. Report the exact state to Mission Control.

## Continuation Boundary

A PASS closes only the `F23-01` prerequisite.

It does not close `F23-01` itself.

After Mission Control independently accepts the prerequisite evidence, Mission Control will separately authorize:

`Gate 2A-C3B — F23-01 Live Cross-Tenant Read-Isolation Verification`

That later gate will be read-only and must use only these controlled verification identities/businesses.

---

**Mission Control boundary:** Gate 2A-C3A-H1 authorizes a human/operator to establish exactly two supported Auth-admin-created verification owners and the minimum corresponding production fixtures required for `F23-01`. No cross-tenant probe or release authority is created.
