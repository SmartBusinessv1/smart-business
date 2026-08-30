# SMART BUSINESS MISSION CONTROL

# Instruction

**Mission ID:** `SB-REL-1.10-1.11`

**Mission Name:** `SB-P-1.10 + SB-P-1.11 Production Release & Runtime Activation — Gate 2A Security & Isolation Evidence Closure`

**From:** Mission Control

**To:** `Security & Permissions Architecture`

**Status:** `ACTIVE — TARGETED EVIDENCE CLOSURE — SECURITY / ISOLATION ONLY`

**Date:** `2026-08-30`

---

## Gate Context

Gate 1 — Release Readiness Assessment is accepted with the canonical result:

`READY WITH CONDITIONS`

Gate 1 was merged through PR #431 at canonical `main` commit:

`9326c07ac4a7a15acba879d1c983d076c256e03a`

Gate 2 is the targeted evidence-closure stage before any Founder release-approval review or production release execution.

To preserve one-controlled-action-at-a-time discipline, this instruction activates **Gate 2A only**.

Gate 2A closes the two security/isolation release conditions identified by Gate 1:

1. the independent Security & Permissions Architecture disposition on the production Inventory `anon` grant posture; and
2. `F23-01` — the first successful live multi-business/cross-tenant RLS runtime isolation probe required before Founder release approval and before production release execution.

Gate 2B and later evidence-closure work are not authorized by this instruction.

## Governing Sources

Execute according to:

- `merge/active/00_Lighthouse_Constitution.md`
- `merge/active/01_Smart_Business_Master_System_Manifesto.md`
- `merge/active/02_Supabase_Architecture_Framework.md`
- `merge/active/11_Smart_Business_Product_Truth_Map.md`
- `merge/active/12_Product_Execution_and_Release_Framework.md`
- `merge/active/17_AI_Operations_Manual.md`
- accepted SB-P-1.10 security/implementation evidence;
- accepted SB-P-1.11 security/implementation evidence;
- `communication/live/report.md` as the accepted Gate 1 evidence record after PR #431 merge.

Source 12 remains the primary release-governance authority for this workstream.

SB-P-1.10 and SB-P-1.11 Source 18 lifecycle stages remain closed and must not be reopened.

## Canonical Production Identity

For this gate, production database identity is the current accepted production Supabase project:

`gysgzasfcjvtrgaigfyn`

Historical SB-P-1.10 documentation that called this project a test project describes the pre-cutover environment state and must not be used as current production identity.

Current isolated test project:

`drravyyauixltoihzmwo`

Gate 2A must verify the actual target before any direct platform check and STOP if the target cannot be proven.

## Authorized Scope

### A. Independent `anon` Grant Security Disposition

Independently assess the Gate 1 finding that production currently grants `anon` broad table privileges on:

- `inventory_items`
- `inventory_movements`
- `inventory_movement_idempotency_keys`

Gate 1 traced this posture to:

`supabase/migrations/20260727000000_reconcile_default_grants.sql`

Gate 1 also reported that RLS is enabled and no applicable Inventory policies are granted to `anon` or `PUBLIC`.

Do not accept the engineering conclusion by inheritance. Independently verify and determine whether the current posture is acceptable for this release.

The review must cover at minimum:

- effective privileges for `anon`, `authenticated`, `service_role`, `PUBLIC`, and any relevant executor role;
- RLS enabled/forced state where relevant;
- all applicable policies on the three Inventory tables;
- whether any function, view, RPC, trigger, default privilege, ownership path, or role inheritance can allow `anon` to bypass the apparent default-deny outcome;
- whether broad table grants create a material defense-in-depth weakness even when RLS currently blocks row access;
- consistency with current Smart Business deny-by-default and merchant-isolation principles;
- comparison with the narrower Catalog `REVOKE`-first posture only as security architecture evidence, not as automatic proof that Inventory must match it.

Final security disposition must be exactly one of:

- `ACCEPTABLE AS-IS FOR THIS RELEASE`
- `HARDENING REQUIRED BEFORE RELEASE APPROVAL`
- `BLOCKED — INSUFFICIENT SECURITY EVIDENCE`

If hardening is required, identify the narrow corrective action, but **do not implement it in Gate 2A**.

### B. `F23-01` Live Cross-Tenant Runtime Isolation Probe

Execute the first successful live production multi-business/cross-tenant isolation probe required by Gate 1.

This authorization is deliberately narrow:

- use only pre-existing, clearly designated test users/businesses already present in production;
- do not create a new production user, business, inventory item, catalog item, transaction, or other business record;
- do not modify any production row;
- do not change authentication, RLS, grants, policies, roles, claims, secrets, configuration, or infrastructure;
- use read-only access attempts only;
- preserve exact evidence of actor identity, business identity, request/auth context, target entity, expected denial/zero-visibility result, and actual result.

At minimum, prove:

1. Business A owner can read Business A Inventory data as authorized.
2. Business A owner cannot read Business B Inventory data.
3. Business B owner can read Business B Inventory data as authorized.
4. Business B owner cannot read Business A Inventory data.
5. Repeat the same cross-business read-isolation proof for the release-relevant Catalog/Pricing data surface.
6. Confirm no cross-business leakage through any directly used release-relevant RPC/read helper involved in those surfaces.

If suitable pre-existing test identities/data do not exist, or completing the probe would require production data creation or mutation, STOP and report the exact bounded prerequisite. Do not improvise.

`F23-01` may be marked closed only if the live production probe passes with evidence.

## Required Security Analysis

The specialist must distinguish:

- table-level ACL;
- row-level policy enforcement;
- function/RPC execution rights;
- `SECURITY INVOKER` vs `SECURITY DEFINER` behavior;
- role inheritance and effective privileges;
- authenticated owner access;
- anonymous access;
- cross-business authenticated access;
- privileged/service-role access.

UI hiding is not security evidence.

Repository intent alone is not runtime evidence.

RLS being enabled alone is not sufficient evidence without effective-policy and runtime-isolation verification.

## Required Output

Write the complete Gate 2A result only to:

`communication/live/report.md`

The report must contain:

1. exact intake `main` commit;
2. exact verified production project identity;
3. evidence sources and direct-platform checks performed;
4. effective privilege matrix for the relevant Inventory surface;
5. independent `anon` grant analysis;
6. exact final `anon` grant security disposition;
7. `F23-01` test identities/businesses described without exposing secrets;
8. exact read-only probe steps and results for Inventory;
9. exact read-only probe steps and results for Catalog/Pricing;
10. RPC/read-helper isolation findings where applicable;
11. whether `F23-01` is `CLOSED — PASS`, `FAIL`, or `BLOCKED — PREREQUISITE REQUIRED`;
12. any critical/high security finding;
13. any required corrective action, without implementing it;
14. explicit confirmation that no production mutation occurred;
15. Gate 2A final result exactly as one of:
   - `PASS — SECURITY CONDITION CLOSED AND F23-01 CLOSED`
   - `CONDITION REMAINS — CORRECTIVE ACTION REQUIRED`
   - `BLOCKED — EVIDENCE INSUFFICIENT`

## Explicitly Not Authorized

Gate 2A does not authorize:

- `GRANT`, `REVOKE`, policy, RLS, role, function, trigger, or schema changes;
- production database writes of any kind;
- creation of production test data;
- migration creation or execution;
- application deployment/publication;
- Supabase configuration changes;
- AWS, S3, IAM, Roles Anywhere, Lambda, Cloudflare, DNS, WAF, certificate, or secret changes;
- parser/bulk-import activation;
- merchant feature exposure;
- release execution;
- Founder approval by inference;
- SB-P-1.10 or SB-P-1.11 lifecycle reopening;
- Product Truth changes;
- starting SB-P-1.12;
- self-approval or self-merge.

## Stop Conditions

STOP and report if:

- production identity cannot be proven before inspection;
- the required test users/businesses are not clearly designated for safe production verification;
- any required F23-01 step would need a production write or data creation;
- any security check would require changing a grant, policy, role, claim, config, secret, or infrastructure state;
- a critical/high security or merchant-isolation issue is found;
- evidence is insufficient to distinguish anonymous, authenticated-owner, cross-business, and privileged behavior;
- the current application/runtime path materially differs from the assumed security surface in a way that invalidates the probe.

A STOP authorizes no corrective mutation.

## Gate 2 Continuation Boundary

Passing Gate 2A does **not** complete Gate 2 and does **not** authorize Gate 3.

After Gate 2A is accepted, Mission Control will separately activate the next bounded Gate 2 evidence-closure action covering the remaining release blockers, including application publication identity, backup/PITR evidence, support/legal readiness, release/recovery ownership, and external parser infrastructure readiness.

---

**Mission Control boundary:** Gate 2A is independent security/isolation evidence closure only. It creates no production release or mutation authority.
