# SMART BUSINESS MISSION CONTROL

# Instruction

**Mission ID:** `SB-REL-1.10-1.11`

**Mission Name:** `Gate 2A-C3B — F23-01 Live Cross-Tenant Read-Isolation Verification`

**From:** Mission Control

**To:** `Founder / Authorized Human Production Operator`, with Claude Code as repository-capable read-only verifier/reporting operator

**Status:** `ACTIVE AFTER HUMAN MERGE — READ-ONLY LIVE CROSS-TENANT VERIFICATION AUTHORIZATION`

**Date:** `2026-08-31`

---

## Context

Gate 2A-C3A-H1 is canonically complete with:

`PASS — F23-01 PRODUCTION-SAFE TEST PREREQUISITE ESTABLISHED`

The accepted H1 report was merged through PR #442 at canonical `main` commit:

`86819258b0d7e8babb3acb304393c3ec5ec78853`

The verified production fixture set now exists specifically so Smart Business can perform the previously blocked `F23-01` cross-tenant read-isolation verification without using real merchant identities or data.

This gate authorizes only that read-isolation verification.

## Canonical Production Identity

Authorized production Supabase project:

`gysgzasfcjvtrgaigfyn`

Project name:

`smart-business`

Region:

`ap-south-1`

STOP if the production project identity is ambiguous or differs from the above.

## Authorized Verification Identities and Fixtures

Use only the existing synthetic verification identities and fixtures below.

### Owner A

- Auth UUID: `2eaba621-7a06-497f-b878-2e68c0d0d8b7`
- Email: `sb-f23-01-verification-owner-a@teamlips.com`
- Business A: `8c3e977f-b6b0-43a0-8b13-a04381d7bf4c`
- Inventory Item A: `64c2e6d3-8e44-4be1-ab83-a83f3f83a62e`
- Catalog Product A: `e3c3feb1-b307-4edc-80d8-bd0d51ff31c1`

### Owner B

- Auth UUID: `c520961e-f43f-4cba-9e22-b0e4f2256253`
- Email: `sb-f23-01-verification-owner-b@teamlips.com`
- Business B: `bed8bd00-dd1e-42f9-b155-c50d34427a2a`
- Inventory Item B: `123132f5-d88d-4511-8f7d-792fe3e5b18b`
- Catalog Product B: `39e4b06e-de97-4121-97fd-da6d728750e0`

Do not create replacement users, businesses, Inventory items, Catalog products, or any additional fixture data.

## Authorized Objective

Prove, using authenticated production requests from the two controlled verification owners, that each owner can read its own authorized fixture data but cannot read the other verification owner's corresponding business-scoped data.

This is a live RLS/permission verification.

It is not a data-mutation test.

It is not an application release test.

## Security Boundary

Passwords, access tokens, refresh tokens, session cookies, recovery links, service-role keys, and other credentials must remain private to the authorized human/operator environment.

Do not paste or commit any credential or session value into:

- Git;
- PR text;
- screenshots;
- chat;
- `communication/live/report.md`.

Claude Code must not request or receive these secrets.

The human/operator may authenticate each synthetic owner using the supported Supabase Auth client/API path and run only the read-only requests authorized below.

## Required Test Sequence

Run the tests in both directions.

### Phase A — Owner A Own-Scope Control

Authenticate as Owner A and confirm the returned authenticated user identity is exactly:

`2eaba621-7a06-497f-b878-2e68c0d0d8b7`

Then perform read-only own-scope controls for:

1. Business A by exact UUID;
2. Inventory Item A by exact UUID;
3. Catalog Product A through the supported `catalog_product_read` RPC.

The own-scope controls must succeed before any Owner A cross-tenant probe is interpreted.

### Phase B — Owner A Cross-Tenant Probe

While still authenticated as Owner A, attempt read-only access to exactly:

1. Business B by exact UUID;
2. Inventory Item B by exact UUID;
3. Catalog Product B through the supported `catalog_product_read` RPC.

PASS condition:

Owner A receives no Business B, Inventory Item B, or Catalog Product B data.

Acceptable isolation outcomes include an empty result, not-found result, or governed authorization denial, provided no protected row fields are disclosed.

Do not treat differing safe-denial status codes by themselves as a failure if no cross-tenant data is disclosed.

### Phase C — Owner B Own-Scope Control

Authenticate as Owner B and confirm the returned authenticated user identity is exactly:

`c520961e-f43f-4cba-9e22-b0e4f2256253`

Then perform read-only own-scope controls for:

1. Business B by exact UUID;
2. Inventory Item B by exact UUID;
3. Catalog Product B through the supported `catalog_product_read` RPC.

The own-scope controls must succeed before any Owner B cross-tenant probe is interpreted.

### Phase D — Owner B Cross-Tenant Probe

While still authenticated as Owner B, attempt read-only access to exactly:

1. Business A by exact UUID;
2. Inventory Item A by exact UUID;
3. Catalog Product A through the supported `catalog_product_read` RPC.

PASS condition:

Owner B receives no Business A, Inventory Item A, or Catalog Product A data.

Acceptable isolation outcomes include an empty result, not-found result, or governed authorization denial, provided no protected row fields are disclosed.

## Approved Read Paths

Use the narrowest supported authenticated read path already established during H1:

- Business: authenticated PostgREST read filtered by exact `id`;
- Inventory: authenticated PostgREST read filtered by exact `id`;
- Catalog: supported `catalog_product_read(p_product_id)` RPC.

Do not use service-role authority or unrestricted database-owner SQL to simulate the owner sessions for the F23-01 result.

Read-only unrestricted SQL may be used later by Claude Code only for evidence reconciliation that does not substitute for the actual owner-authenticated probe.

## Required Human/Operator Evidence

Return only non-secret evidence sufficient to establish:

- verified production project identity;
- Owner A authenticated identity UUID;
- Owner A own-scope Business A result;
- Owner A own-scope Inventory A result;
- Owner A own-scope Catalog A result;
- Owner A cross-tenant Business B outcome;
- Owner A cross-tenant Inventory B outcome;
- Owner A cross-tenant Catalog B outcome;
- Owner B authenticated identity UUID;
- Owner B own-scope Business B result;
- Owner B own-scope Inventory B result;
- Owner B own-scope Catalog B result;
- Owner B cross-tenant Business A outcome;
- Owner B cross-tenant Inventory A outcome;
- Owner B cross-tenant Catalog A outcome;
- confirmation that every operation was read-only;
- confirmation that no credential or session secret was recorded;
- final human/operator result.

Where useful, record HTTP status or error class, but do not record tokens, headers containing secrets, or verbose payloads that expose unrelated data.

## Claude Code Verification and Canonical Reporting

After the human/operator completes the authenticated probe and records the non-secret evidence in `communication/live/report.md` through the approved repository flow, Claude Code may:

1. perform full repository intake;
2. review the human/operator evidence against this instruction;
3. independently verify only read-only facts that its approved capabilities can prove without receiving owner credentials;
4. distinguish authenticated human/operator observations from independently re-provable database/repository facts;
5. update `communication/live/report.md` with the canonical Gate 2A-C3B result;
6. submit the report through a protected branch and PR;
7. not self-merge.

Claude Code must not replay the authenticated cross-tenant probes unless Mission Control separately authorizes a safe credential/session mechanism that preserves the security boundary above.

## PASS Criteria

Gate 2A-C3B may PASS only if all of the following are true:

1. Owner A own-scope controls succeed.
2. Owner B own-scope controls succeed.
3. Owner A cannot read Business B.
4. Owner A cannot read Inventory Item B.
5. Owner A cannot read Catalog Product B through the supported Catalog read contract.
6. Owner B cannot read Business A.
7. Owner B cannot read Inventory Item A.
8. Owner B cannot read Catalog Product A through the supported Catalog read contract.
9. No cross-tenant protected row data is disclosed during any denial.
10. No mutation occurs.
11. No real merchant identity or data is used for the probe.
12. No schema, RLS, grant, policy, function, trigger, Auth configuration, migration, application, deployment, parser, infrastructure, or release state is changed.

Any cross-tenant protected-data disclosure is a FAIL and a security blocker.

## Required Final Result

The canonical report must end with exactly one of:

- `PASS — F23-01 LIVE CROSS-TENANT READ ISOLATION VERIFIED`
- `FAIL — F23-01 CROSS-TENANT READ ISOLATION BREACH`
- `BLOCKED — F23-01 LIVE VERIFICATION INCONCLUSIVE`
- `STOP — F23-01 VERIFICATION INCIDENT`

## Explicitly Not Authorized

This gate does not authorize:

- any `INSERT`, `UPDATE`, `DELETE`, `UPSERT`, `PATCH`, mutation RPC, or destructive operation;
- creation, editing, or deletion of Auth users or business fixtures;
- fixture cleanup;
- use of real merchant identities or data for testing;
- service-role impersonation of owner sessions;
- direct SQL mutation;
- migration creation/execution/repair/reconciliation;
- RLS, policy, grant, role, function, trigger, schema, default-privilege, Auth-configuration, OAuth, or secret changes;
- application-code changes;
- Lovable changes;
- deployment or publication;
- parser or bulk-import activation;
- AWS, Lambda, S3, IAM, Roles Anywhere, Cloudflare, DNS, WAF, certificate, or environment-variable changes;
- product release execution;
- Founder release approval by inference;
- Product Truth changes;
- reopening SB-P-1.10 or SB-P-1.11 lifecycle stages;
- starting SB-P-1.12;
- self-approval or self-merge.

## Stop Conditions

STOP and report without improvisation if:

- production project identity is ambiguous;
- either verification owner cannot authenticate through the supported Auth path;
- authenticated identity UUID does not match the intended owner;
- own-scope controls fail before the corresponding cross-tenant probe;
- a requested read path would require a mutation or privileged bypass;
- any cross-tenant response exposes protected row data;
- the test unexpectedly affects real merchant data;
- production health degrades;
- credentials or session secrets are exposed;
- a Critical/High security concern appears.

A STOP or FAIL does not authorize repair, policy changes, cleanup, retesting through a different privileged path, or scope expansion.

## Continuation Boundary

A PASS closes only the F23-01 live cross-tenant read-isolation requirement within Gate 2A Security & Isolation.

It does not by itself close all Gate 2 release readiness work and does not authorize release, deployment, parser/bulk-import activation, merchant exposure, or Founder production acceptance.

Mission Control must review the canonical result before authorizing any next release-readiness gate.

---

**Mission Control boundary:** Gate 2A-C3B authorizes a read-only, two-direction authenticated production isolation probe using only the established synthetic verification identities and fixtures. No mutation, repair, release, or merchant exposure authority is created.
