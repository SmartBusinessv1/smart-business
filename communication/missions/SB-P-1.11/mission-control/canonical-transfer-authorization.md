# SB-P-1.11 — Canonical Repository Transfer Authorization

**Mission:** SB-P-1.11 — Product Catalog & Pricing  
**Transfer Gate:** Post-Lovable, post-Founder-runtime canonicalization  
**Authorization Date:** 2026-08-16  
**Authority:** Founder / Mission Control

## 1. Activation Condition

This transfer authorization becomes active only after the pull request containing this exact record, the Stage 17 Founder runtime record, and the Stage 18 Mission Control runtime review is human-reviewed and merged to `main`.

Until that merge, Canonical Repository Transfer Authority remains `NONE`.

## 2. Authorized Source

Derivative Lovable implementation source:

`SmartBusinessv1/starter-supab-shell`

Authorized Lovable project:

`Smart Business Implementation Workspace`

Lovable project ID:

`f3e992ec-06df-4d49-b157-b92ec064c078`

Authorized implementation evidence commit:

`fd7c29c11882a164799e00584701a9db46e06cca`

The derivative repository is a transfer source only. It does not become canonical.

## 3. Authorized Target

Canonical repository:

`SmartBusinessv1/smart-business`

Exact target branch:

`implementation/SB-P-1.11-Initial-Phase-1-Catalog-Foundation`

The branch must descend from the then-current `main` containing this merged transfer authorization.

## 4. Authorized Transfer Actor

**Transfer Actor:** Mission Control acting through exact GitHub repository operations.

This authority is limited to mechanical, file-for-file transfer and the minimum route-tree reconciliation strictly required by the transferred implementation.

Mission Control is not authorized to redesign, improve, modernize, reinterpret, or expand the Lovable implementation during transfer.

Claude Code remains the later independent verifier and therefore does not perform this transfer.

## 5. Authorized Transfer Scope

Transfer only the verified Initial Phase 1 Lovable implementation delta required by the Builder Completion Report, limited to these implementation/report paths:

- `src/integrations/supabase/catalog.ts`
- `src/routes/_authenticated/catalog.tsx`
- `src/routes/_authenticated/catalog.index.tsx`
- `src/routes/_authenticated/catalog.$productId.tsx`
- `src/components/authed-header.tsx`
- `src/routeTree.gen.ts`
- `docs/implementation/SB-P-1.11/lovable-build-completion-report.md`

Before writing each target file, compare derivative source content against current canonical content. Preserve canonical content outside the authorized delta. If a file-level conflict prevents exact mechanical transfer, STOP and return the conflict to Mission Control rather than improvising.

## 6. Transfer Rules

The transfer must:

1. create/use exactly `implementation/SB-P-1.11-Initial-Phase-1-Catalog-Foundation` from current authorized `main`;
2. reproduce the verified Lovable implementation delta without product redesign;
3. preserve exactly 19 public Catalog commands and no twentieth;
4. preserve the no-direct-Catalog-table-write boundary;
5. preserve existing authentication, business isolation, Product Truth, D-047, D-068, and owner-only Phase 1 posture;
6. include the Builder Completion Report with status `IMPLEMENTATION REPORTED — VERIFICATION PENDING`;
7. open a protected pull request back to `main`;
8. not self-merge;
9. not publish, deploy, mutate production, change domains, change Supabase binding, or alter repository authority.

## 7. Explicitly Prohibited

No dependency modernization.
No unrelated formatting sweep.
No schema or migration creation/application.
No Product Truth or governance edit.
No additional public Catalog command.
No later-phase feature.
No production deployment/publication.
No direct modification of the Legacy Lovable Workspace.
No repository rename/disconnect/reconnect.

## 8. Required Transfer Report

The transfer pull request must report:

- canonical branch;
- source Lovable commit;
- target head SHA;
- exact changed-file list;
- per-file source/target reconciliation result;
- confirmation of exactly 19 public Catalog commands and no twentieth;
- confirmation that no direct Catalog writes were introduced;
- tests/checks run after transfer;
- any conflict, limitation, or deviation;
- confirmation that nothing was deployed or published.

## 9. Post-Transfer Boundary

Human review and merge of the transfer pull request are required before the canonical implementation reaches `main`.

After canonicalization, Mission Control will determine the next lifecycle action. Claude Code independent verification remains a separate later gate and may not be replaced by transfer evidence.

## 10. Decision

`CANONICAL REPOSITORY TRANSFER — GRANTED UPON HUMAN MERGE OF THIS AUTHORIZATION RECORD`
