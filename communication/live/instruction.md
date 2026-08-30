# SMART BUSINESS MISSION CONTROL

# Instruction

**Mission ID:** `SB-REL-1.10-1.11`

**Mission Name:** `Gate 2A-C3A — F23-01 Production-Safe Test Identity & Business Prerequisite Establishment`

**From:** Mission Control

**To:** `Claude Code — Repository-Capable Engineering Operator`

**Status:** `ACTIVE — BOUNDED PRODUCTION TEST-PREREQUISITE ESTABLISHMENT`

**Date:** `2026-08-30`

---

## Context

Gate 2A established that `F23-01` could not be executed safely because production contained no clearly designated, pre-existing test owner/business pairs that Security & Permissions Architecture could use without repurposing real merchant identities.

Gate 2A-C2 has now closed the separate Inventory anonymous-privilege hardening condition with:

`PASS — PRODUCTION HARDENING APPLIED AND VERIFIED`

Canonical `main` after PR #437 is:

`b8a6472ff3494e0af45505e51f3b285d150e6086`

`F23-01` remains open and release-gating.

This instruction authorizes only the prerequisite establishment required to make a later, separately authorized read-only `F23-01` cross-tenant runtime probe safe and reproducible.

This instruction does **not** authorize executing `F23-01` itself.

## Canonical Production Identity

Authorized production Supabase project:

`gysgzasfcjvtrgaigfyn`

Isolated test project — reference only:

`drravyyauixltoihzmwo`

Before any production mutation, independently verify the target is exactly `gysgzasfcjvtrgaigfyn` and STOP if production/test identity is ambiguous.

## Authorized Objective

Establish exactly two clearly designated production-safe Smart Business verification owner identities and exactly two corresponding businesses, one owned by each identity, with the minimum release-relevant Inventory and Catalog/Pricing data required for a later read-only `F23-01` isolation probe.

The resulting actors/businesses must be unambiguously recognizable as controlled verification fixtures and must never be confused with real merchants.

No real merchant identity, business, or existing business data may be repurposed.

## Required Designation Standard

Create exactly two verification actors:

- `F23-01 Verification Owner A`
- `F23-01 Verification Owner B`

Create exactly two businesses:

- `SB F23-01 Verification Business A — DO NOT USE`
- `SB F23-01 Verification Business B — DO NOT USE`

Use dedicated non-merchant verification email identities under a Team LIPS-controlled domain if the existing supported Auth creation path requires email addresses. Do not expose passwords, tokens, service-role keys, refresh tokens, session tokens, or other credentials in Git, PR text, logs, screenshots, or `communication/live/report.md`.

Where supported by the existing production Auth/user metadata model, add a clear machine-readable marker such as:

- purpose: `F23-01`
- environment: `production-verification`
- non_merchant_test_identity: `true`

Do not invent a new schema column or migration merely to carry these markers.

## Authorized Production Mutations

This gate is the bounded exception that authorizes the minimum production writes needed to establish the prerequisite.

You may create only:

1. exactly two dedicated verification Auth users/owner identities;
2. exactly two corresponding businesses, one per verification owner;
3. the minimum Inventory fixture data needed to prove same-tenant visibility and cross-tenant denial later — preferably one clearly named Inventory item per business;
4. the minimum Catalog/Pricing fixture data needed to prove same-tenant visibility and cross-tenant denial later — preferably one clearly named product/catalog record per business and only the supporting category/price/reference records strictly required by the accepted schema/workflow;
5. only the ownership/link rows strictly required by the accepted production model to make those fixtures valid.

All created fixture names/descriptions must include an obvious `F23-01 VERIFICATION` marker.

Do not create transactions, purchases, customers, suppliers, employees, attendance, parser jobs, imports, or unrelated data.

## Creation Path Requirements

Before writing, inspect the canonical accepted schema and supported creation paths and use the narrowest existing valid path.

Preferred order:

1. existing supported application/RPC/business onboarding path if it can establish the two fixtures safely and deterministically;
2. existing documented administrative/auth provisioning path if application-level creation is not suitable;
3. narrowly scoped direct database inserts only if the accepted schema requires them and the exact integrity/ownership requirements are fully understood.

Do not bypass required constraints merely for convenience.

Do not create or modify a migration.

Do not alter RLS, grants, policies, roles, functions, schemas, triggers, defaults, Auth configuration, OAuth configuration, or application code.

If creating the prerequisite safely would require any of those changes, STOP and report.

## Required Pre-Mutation Evidence

Before creating anything, capture and report:

1. exact canonical `main` commit;
2. exact verified production project identity;
3. direct current backup/recovery evidence suitable for this bounded production-data mutation;
4. confirmation that no pre-existing canonical `F23-01` verification pair already exists;
5. exact existing supported Auth/business creation path selected and why;
6. exact tables/RPCs/admin APIs expected to be touched at a semantic level;
7. the minimum Inventory and Catalog/Pricing fixture shape to be created;
8. confirmation that no real merchant identity/business/data will be reused.

If an existing canonical verification pair is found, STOP before creating duplicates and report it to Mission Control.

## Credential Handling Boundary

Any credentials required for the two verification actors must be generated securely and handled outside repository evidence.

The report may record only:

- non-secret verification identity labels;
- redacted email form if needed;
- Auth user UUIDs only if existing evidence practice permits and they are necessary for reproducibility;
- business UUIDs/fixture UUIDs only as non-secret technical evidence.

Never record passwords or session credentials.

After prerequisite establishment, do not perform login-based cross-tenant testing in this gate.

## Required Post-Creation Verification

After creation, verify directly that:

1. exactly two new verification owner identities exist and are clearly designated;
2. exactly two new verification businesses exist and each is owned only by its intended verification owner;
3. each verification owner can be mapped unambiguously to its own business through the accepted ownership model;
4. each business contains the minimum Inventory fixture required for `F23-01`;
5. each business contains the minimum Catalog/Pricing fixture required for `F23-01`;
6. fixture identifiers/names are unambiguously distinguishable between Business A and Business B;
7. no real merchant row was modified;
8. no unrelated production data was created or modified;
9. no RLS/grant/policy/schema/function/configuration state changed;
10. database health remains normal.

Do not execute cross-business visibility attempts yet. That belongs to Gate 2A-C3B.

## Cleanup and Lifecycle

These are controlled release-verification fixtures, not demo merchants and not production customers.

Do **not** delete them in this gate. They must remain available for the immediately following `F23-01` read-only verification gate.

The completion report must recommend a later explicit cleanup/archive decision after `F23-01` and any immediate post-release regression use is complete. No automatic cleanup is authorized here.

## Required Repository Output

After execution, update only:

`communication/live/report.md`

No migration, application code, configuration file, or test file should be changed.

Submit through a controlled branch and PR. Do not self-merge.

## Required Report Content

The report must include:

1. exact intake `main` commit;
2. verified production identity;
3. direct backup/recovery evidence;
4. duplicate/pre-existing prerequisite check;
5. exact creation path used;
6. non-secret designation of Owner A / Owner B;
7. non-secret designation and IDs of Business A / Business B where appropriate;
8. exact minimal Inventory fixture established for each business;
9. exact minimal Catalog/Pricing fixture established for each business;
10. ownership/mapping verification;
11. confirmation that no real merchant identity/data was reused or modified;
12. confirmation that no unrelated production mutation occurred;
13. confirmation that RLS/grants/policies/schema/functions/configuration were unchanged;
14. database-health observation;
15. exact prerequisite status;
16. exact recommended next gate: `Gate 2A-C3B — F23-01 Live Cross-Tenant Read-Isolation Verification`;
17. final result exactly one of:
   - `PASS — F23-01 PRODUCTION-SAFE TEST PREREQUISITE ESTABLISHED`
   - `BLOCKED — SAFE PREREQUISITE COULD NOT BE ESTABLISHED`
   - `STOP — PREREQUISITE ESTABLISHMENT INCIDENT`

## Explicitly Not Authorized

This gate does not authorize:

- executing `F23-01` cross-tenant read probes;
- using or impersonating real merchant identities;
- creating more than two verification Auth users;
- creating more than two verification businesses;
- transactions or unrelated business data;
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

- production identity cannot be proven;
- current recoverable backup/restore evidence cannot be positively verified;
- a canonical F23-01 verification pair already exists;
- the supported creation path is ambiguous or requires schema/security/configuration changes;
- exact ownership isolation cannot be established safely;
- creation would require using a real merchant identity/business;
- more than the minimum two-user/two-business fixture set is required;
- a Critical/High security or data-integrity concern is found.

STOP after mutation if:

- more than the authorized fixture rows/users are created;
- ownership mapping is incorrect or ambiguous;
- real merchant data is affected;
- RLS/grants/policies/schema/functions/configuration drift;
- database health degrades;
- partial creation leaves the prerequisite in an uncertain state.

A STOP authorizes no improvised repair, deletion, retry, compensation, or scope expansion. Report the exact state to Mission Control.

## Continuation Boundary

A PASS closes only the `F23-01` **prerequisite**.

It does not close `F23-01` itself.

After Mission Control independently reviews and accepts the prerequisite evidence, Mission Control will separately authorize:

`Gate 2A-C3B — F23-01 Live Cross-Tenant Read-Isolation Verification`

That later gate will be read-only and will use the two controlled verification identities/businesses established here.

---

**Mission Control boundary:** Gate 2A-C3A authorizes only the minimum production verification-fixture creation required to make `F23-01` safe. No cross-tenant probe or release authority is created.