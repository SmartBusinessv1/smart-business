# SMART BUSINESS — REPOSITORY COMMUNICATION

# instruction1.6 — Backend Product ↔ Inventory Identity Integrity

**Mission ID:** `SB-OPS-PROD-SYNC-1.0`
**Sequence:** `1.6`
**From:** `Mission Control`
**To:** `Claude Code / Repository Engineering Operator`
**Status:** `ACTIVE`
**Date:** `2026-09-02`

## Objective

Close the remaining backend integrity gap from `report1.5.md` so a standard active Catalog product cannot share one Inventory identity with another standard active Catalog product, even if the normal UI is bypassed.

Preserve the Founder-approved rule: ordinary stock-tracked products use a dedicated, system-managed Inventory identity. Catalog remains Product Truth; Inventory remains stock truth.

## Verified evidence

Mission Control independently confirmed that production currently contains a known duplicate association: active products `Milma Milk` and `Mango` both reference the Inventory item named `AVT Tea Powder`. `Milma Milk` was linked first, `Mango` later. The only observed movement on that shared item is the controlled runtime-test Opening Stock `+5` created during this mission. The existing Catalog inventory-reference index is non-unique.

Use this as planning evidence, but re-check repository assumptions before implementation.

## Phase A — server-side reuse protection

Implement the smallest governed backend change that rejects assignment of an Inventory identity already referenced by another relevant Catalog product in the same business.

Requirements:

- enforcement must exist server-side, not only in React/UI;
- the final confirmation/write path must re-check reuse so stale or concurrent previews cannot bypass the rule;
- preserve caller-JWT authorization, business isolation, idempotency, preview-token validation, D-047 dependent-history protection, auditability, and existing Catalog constraints;
- use the smallest clear rejection behavior and update only required client/types handling;
- do not weaken existing security or history guards.

## Phase B — schema one-to-one enforcement design

Inspect actual Catalog lifecycle semantics and implement or prepare the smallest database-level uniqueness guarantee that matches those semantics.

Do not assume the exact predicate from `report1.5.md` is correct. Determine how active/inactive/archived/reactivation/replacement behavior should interact with the invariant and document the choice.

The known duplicate means deployment ordering matters. The repository changes must be structured so the uniqueness guarantee is not represented as safely deployable until the duplicate state is resolved through an explicitly authorized repair step.

## Phase C — repair handoff only

Do not modify production test data under this instruction.

Design and document the smallest auditable repair sequence for `Mango`, `Milma Milk`, `AVT Tea Powder`, and the controlled `+5` movement. The handoff must:

- result in ordinary one-product/one-stock-identity relationships;
- preserve or audibly correct the `+5` test movement rather than silently erasing history;
- respect the existing dependent-history guard;
- identify whether a dedicated repair primitive, compensating movement, or another governed mechanism is required;
- state the exact separate Founder/operator authorization needed for production execution.

## Preserve merged 1.5 behavior

Do not reintroduce arbitrary Inventory-item selection. `Start tracking stock` and `Set up a new stock item` must continue to create dedicated stock identities. Opening Stock must remain Inventory movement truth only.

## Boundaries

Authorized: repository inspection, bounded migration source, smallest required governed RPC/function change, required client/type handling, tests, verification, and an implementation-ready repair handoff.

Not authorized: production data repair, arbitrary deletion, erasing audit history, unrelated schema redesign, RLS weakening, service-role shortcuts in merchant runtime, publication/domain cutover, or self-merge.

If broader authority is genuinely required, stop and report the smallest requirement.

## Verification

Prove at minimum:

1. normal system-managed create-then-link still succeeds;
2. reuse by another relevant product is rejected server-side;
3. final confirmation is protected against stale/concurrent preview state;
4. business isolation and D-047 behavior remain unchanged;
5. Opening Stock still resolves the authoritative product Inventory identity and writes only Inventory movements;
6. migration/deployment ordering explicitly accounts for the known duplicate;
7. standard build/type/lint/diff/secret/backend-ref checks pass.

Do not use destructive production testing.

## Required reply

Reply through `communication/live/report1.6.md` only.

Include exact source findings, migration/RPC changes, chosen lifecycle invariant and rationale, concurrency protection, repair handoff, deployment order, verification evidence, PR links/SHAs, and final status PASS/BLOCKED/PARTIAL.

No new parallel sequence. No self-merge.