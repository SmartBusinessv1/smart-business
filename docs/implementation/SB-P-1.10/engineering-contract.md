Document: Engineering Contract

Version: 1.2

Status: Draft — ready for final Mission Control approval

Created By: Claude

Reviewed By: Mission Control

Approval Date: Pending

Mission: SB-P-1.10

# SB-P-1.10 — Inventory Foundation — Engineering Contract

## 1. Mission Metadata

| Field | Value |
| --- | --- |
| Mission ID | SB-P-1.10 |
| Mission Name | Inventory Foundation |
| Package Mission ID | SB-P-1.10-IP-1.0 |
| Domain | Business Operations Domain |
| Reporting Room | 02_Claude_Engineering |
| Product Blueprint | `docs/phase-1-mission-blueprint/active/SB-P-1.10.md` — Version 1.3 (LOCKED) |
| Engineering Implementation Specification | `docs/phase-1-mission-blueprint/implementation/SB-P-1.10-EIS.md` — Version 1.2 (LOCKED — implementation authority) |
| Contract Owner | Team LIPS Engineering |
| Dependencies | SB-P-1.4 — Bootstrap Governance Preparation, SB-P-1.9 — Merchant Workflow Refinement |

## 2. Purpose

This Engineering Contract translates the locked SB-P-1.10 Product Blueprint (Version 1.3) and the locked SB-P-1.10 Engineering Implementation Specification (Version 1.2) into a single, implementation-ready contract for builders.

This contract does not redefine product behaviour, does not introduce new product scope, and does not alter any engineering decision already recorded in the EIS. Every requirement in this contract exists to make an already-approved Blueprint or EIS requirement actionable for implementation. Where any statement in this contract could be read as introducing new product or engineering behaviour, the Blueprint and EIS prevail and this contract is in error.

This contract is the primary builder-facing execution document for SB-P-1.10, so that implementation stays traceable to a single authorized instruction set. Builders shall execute primarily through this Engineering Contract while retaining the locked Product Blueprint and EIS as controlling reference authorities, and may consult the locked documents directly whenever clarification is required. Where ambiguity or conflict exists between this contract and either locked document, implementation must pause: the locked Product Blueprint and EIS prevail, and Mission Control clarification is required before proceeding whenever the conflict cannot be resolved by reference to the locked documents alone.

## 3. Authority

Execution of this mission and of the resulting implementation is governed, in order of precedence, by:

1. Lighthouse Constitution
2. Smart Business Master System Manifesto
3. Supabase Architecture Framework
4. SB-P-1.10 Product Blueprint Version 1.3 (LOCKED)
5. SB-P-1.10 Engineering Implementation Specification Version 1.2 (LOCKED — implementation authority)
6. This Engineering Contract

No requirement in this contract may override, expand, or narrow the Product Blueprint or the EIS. Where this contract and either locked document appear to diverge, the locked document governs and this contract must be corrected.

## 4. Locked Governance References

The following documents are locked and read-only for this mission and for the implementation that follows it:

- `docs/phase-1-mission-blueprint/active/SB-P-1.10.md` — SB-P-1.10 Product Blueprint, Version 1.3, LOCKED. Sole source of product truth: scope, UX, business rules, permissions.
- `docs/phase-1-mission-blueprint/implementation/SB-P-1.10-EIS.md` — SB-P-1.10 Engineering Implementation Specification, Version 1.2, LOCKED — implementation authority. Sole source of engineering design: domain model, database design, ledger mechanics, RLS strategy, concurrency, performance, migration, testing, and observability.
- Prior review basis: Supabase Architecture and Security Review SB-P-1.10-EIS-AR-1.0, and the subsequent Supabase Architecture Re-Review (Approved), both recorded in the EIS metadata.

Neither locked document is modified by this contract, by this mission, or by the implementation package this mission creates.

## 5. Authorized Implementation Scope

Approval of this Engineering Contract, approval of the subsequent Lovable build prompt, and approval of the verification checklist are each separate governance steps; none of them, individually or together, constitutes implementation authorization. Implementation begins only under a separate, explicit Mission Control authorization.

Implementation that is subsequently authorized under this contract is limited to what the Product Blueprint (Sections 7–10) and the EIS (Sections 4–19) already define:

- The inventory entity and its lifecycle (active/archived), per Blueprint Section 8 and EIS Section 4–5.
- The append-only stock movement ledger and all movement types defined in Blueprint Section 8 "Stock Movement Types" and EIS Section 6.
- Opening stock, stock increase, stock decrease, adjustment increase, adjustment decrease, and correction/reversal movements, per the invariants in EIS Section 6.
- Ledger-derived current stock using Phase 1 grouped aggregation, per EIS Section 6 "Current Stock Derivation — Phase 1 Strategy".
- Business-owner-controlled permissions and RLS enforcement for inventory viewing, opening stock, adjustment, and correction, per Blueprint Section 8 "Permissions" and EIS Sections 7–8.
- Inventory search, filtering, list, detail, and history surfaces, per Blueprint Sections 8–9 and EIS Sections 9–10.
- Negative stock authorization and warning behaviour, per Blueprint Section 8 "Negative Stock Policy" and EIS Sections 7, 11.
- Business isolation across every read and write path, per Blueprint Section 8 "Business Isolation" and EIS Sections 5, 7, 8.

No capability listed in the Blueprint's Section 11 "Out of Scope", and no engineering mechanism outside the locked Engineering Implementation Specification, is authorized by this contract.

## 6. Backend Deliverables

- The single shared movement-creation operation described in EIS Section 6 "Movement Creation Flow", implementing the two-phase preview/commit flow, all validation in EIS Section 11, and the durable idempotency contract in EIS Section 6.
- Service operations for inventory creation, opening stock, adjustment, correction, history retrieval, inventory retrieval, search, and filtering, per EIS Section 9, each funneling writes exclusively through the shared movement-creation operation.
- Ledger-derived current-stock read paths implementing Phase 1 grouped aggregation for single-item and list requests, per EIS Section 6 and Section 13.
- Permission checks implemented per action (view, opening stock, adjustment, correction) as described in EIS Section 7, independent of and in addition to RLS.
- Business-event link validation for any movement carrying an originating business-event reference, per EIS Section 4 "Trusted event-link contract" and Section 11.

## 7. Frontend Deliverables

- Inventory creation, list, detail, history, opening stock, adjustment, and correction surfaces implementing the data contracts in EIS Section 10, consistent with Blueprint Section 9 "UI / UX Expectations".
- Permission-aware rendering of available actions, so no action the requesting user cannot execute is presented as available, per Blueprint Section 9 "Permission Behaviour" and EIS Section 10.
- Negative-stock warning presentation using the preview response shape in EIS Section 10, with explicit user confirmation required before commit.
- Empty-state, search, and filter experiences consistent with Blueprint Section 9, without mutating inventory data.
- Reuse of the existing application shell, navigation, and confirmation-dialog patterns established by prior missions (SB-P-1.7–1.9), per EIS Section 17.

## 8. Database Deliverables

- The `inventory_items` table with the fields and constraints defined in EIS Section 5.
- The `inventory_movements` table with the fields and constraints defined in EIS Section 5, including the movement type/direction matrix constraint (EIS Section 6), the single-opening-stock-per-item constraint (EIS Section 6), and the `correcting-of` same-business/same-item constraint (EIS Section 5 "Cross-Business Consistency Enforcement").
- The durable idempotency-key structure described in EIS Section 5 (e.g., `inventory_movement_idempotency_keys`), scoped per business and operation contract.
- Indexes selected per the Index Strategy Decision Gate in EIS Section 5, finalized only after query-plan validation against realistic data volumes — not adopted speculatively from the candidate list.
- Database-enforced cross-business consistency between a movement and its parent inventory item, and between a correction and the movement it corrects, per EIS Section 5.

## 9. Migration Deliverables

- Net-new schema introduction for `inventory_items`, `inventory_movements`, and the idempotency-key structure, per EIS Section 14.
- All integrity constraints (RLS, cross-business consistency, movement type/direction, opening-stock, correction-link, audit-completeness) active before application write access is enabled, per EIS Section 14.
- RLS enabled on both inventory tables before any application code path is granted access, per EIS Section 14.
- Privileged grants and service-role access reviewed before release, per EIS Section 14 and Section 8 "Defence in Depth Beyond RLS".
- Migration sequencing that preserves append-only ledger integrity, with rollback achieved through forward-fix rather than deletion of posted movement history, per EIS Section 14 "Migration Safety and Rollback".
- No current-stock projection migration, consistent with the Phase 1 aggregation strategy in EIS Section 6.

## 10. Permission and RLS Obligations

- RLS enabled on `inventory_items` and `inventory_movements`, gating on business membership/role and the specific action performed, per EIS Section 8.
- No update or delete policy granted on `inventory_movements` for any application role, per EIS Section 8 and Section 6 "Ledger Invariants".
- Per-action permission checks (view, opening stock, adjustment, correction) implemented independently, not as a single coarse check, per EIS Section 7.
- Correction permission modeled as a distinct, owner-controlled permission, more restrictive than general adjustment permission, per Blueprint Section 8 "Inventory Movement Corrections" and EIS Section 7.
- Negative-stock authorization implemented as a distinct application-layer gate ahead of insert, per EIS Section 7 and Section 8.
- Archived-item write protection enforced so ordinary movements are rejected against archived items pending reactivation, while authorized corrections against archived items' history remain possible, per EIS Section 7 "Archived Inventory Write Protection".
- Defence in depth beyond RLS implemented at the database-privilege or function/trigger layer so movement immutability does not depend on RLS policy correctness alone, per EIS Section 8 "Defence in Depth Beyond RLS".

## 11. Shared Movement-Path Obligations

- Every stock-affecting write — opening stock, adjustment, correction, and any future business-event-linked movement — passes through the single shared movement-creation operation defined in EIS Section 6 and Section 9.
- No feature, table, or code path outside the shared movement-creation operation writes to `inventory_movements` or to any current-stock value, per EIS Section 3 "Single mutation path" and Section 6 "Ledger Invariants".
- No future domain integrated during this mission's scope may create movements through an alternate path, a domain-owned table, or a direct write, per EIS Section 4 "Trusted event-link contract".
- The shared movement-creation operation is implemented before any UI surface is built against it, per EIS Section 14 and Section 17.
- Ask CFO, AI, WhatsApp interpretation, and automation may prepare or suggest inventory actions, but cannot commit stock movements without an attributable authorized human decision or an approved immutable business event; every committed movement must remain attributable to one of these two sources, per Blueprint Section 5 "AI Assistant, Not AI Judge" and EIS Section 3 "Human-first architecture".

## 12. Validation Requirements

All validation in EIS Section 11 is implemented server-side, with client-side validation treated as UX convenience only, including:

- Business validation: required item identity, required and immutable base unit, strictly positive quantity, required reason.
- Permission validation: independent per-action checks before any read or write.
- Negative-stock validation: rejection, not silent clamping, when authorization is absent.
- Audit validation: at least one of responsible-user reference or originating-event reference present at write time.
- Correction validation: existence, same-item/same-business scope, correction permission, no self-reference, no cycles, and no over-compensation beyond the remaining compensable quantity.
- Business-event link validation: existence and same-business scope confirmed atomically with movement creation.
- Movement type/direction validation: rejection of any pairing outside the matrix in EIS Section 6.
- Opening-stock validation: rejection of a second opening-stock movement for the same item.
- Archived-item validation: rejection of ordinary movements against archived items.
- Idempotency validation: durable, business- and operation-scoped key handling, with conflict rejection for a repeated key against a different payload.

## 13. Concurrency Requirements

- Movement creation, including projected-quantity evaluation for negative-stock detection, executes within a single database transaction, per EIS Section 12.
- Movement creation is serialized per inventory item as the lock target; requests against different items are not blocked against each other, per EIS Section 12 "Lock target".
- Resources are acquired in a consistent, predetermined order on every code path to avoid deadlocks, per EIS Section 12 "Transaction ordering".
- Serialization or deadlock failures are safely retried, reusing the same idempotency key as the original attempt, per EIS Section 12 "Serialization and deadlock retry".
- The durable idempotency contract (EIS Section 6) guarantees that retries — caller-initiated or serialization/deadlock-triggered — never produce duplicate movements.
- Any earlier, out-of-transaction preview shown to a user carries no weight at commit time; the commit-time recalculation is always authoritative, per EIS Section 6 "Movement Creation Flow".

## 14. Performance Requirements

- Current-stock derivation uses Phase 1 grouped ledger aggregation for both single-item and list requests, per EIS Section 6 and Section 13.
- Inventory list retrieval uses one batch aggregation operation per requested page — never an N+1 per-item query pattern, per EIS Section 13 "Batch Retrieval for Lists".
- History retrieval and inventory list operations are paginated; no operation returns an unbounded result set, per EIS Section 13.
- Indexing follows the Index Strategy Decision Gate in EIS Section 5: candidate indexes are validated against realistic data volumes and query-plan analysis before being finalized.
- A maintained running-balance projection is not implemented in this mission; it remains Build Later, introduced only after measured performance evidence, per EIS Section 6.

## 15. Observability Requirements

- Movement-creation attempts (success and failure) are logged with business and item scope, movement type, and outcome, per EIS Section 16.
- Validation, permission, and negative-stock rejections are surfaced as distinct, identifiable error categories, per EIS Section 16.
- Logging respects the observability boundaries in EIS Section 16 "Observability Boundaries": logs remain diagnostic only, never become a parallel inventory ledger, avoid duplicating full movement payloads unnecessarily, use correlation identifiers where appropriate, preserve merchant privacy, and never override or contradict the ledger.
- Metrics track movement-creation volume, rejection rate by category, and history/list query latency, per EIS Section 16.
- Sustained increases in negative-stock rejections or permission-denied rates are monitored as potential merchant-confusion or misconfiguration indicators, per EIS Section 16.

## 16. Testing Obligations

Implementation must produce automated test coverage for every item in EIS Section 15, including:

- Ledger correctness across opening stock, increases, decreases, adjustments, and corrections.
- Independent permission testing for view, opening-stock, adjustment, and correction actions, against authorized and unauthorized roles.
- RLS cross-business access tests, including non-disclosure of another business's inventory.
- Correction tests confirming original-movement immutability, correction linkage, and independent correction-permission enforcement.
- Audit-integrity tests confirming no movement is created without a responsible-user or originating-event reference.
- Business-isolation tests across list, detail, history, and summary views.
- Negative-stock tests for unauthorized blocking, authorized warning/confirmation, and full auditability.
- Performance tests confirming acceptable bounds as movement volume grows, and confirming grouped aggregation rather than N+1 list queries.
- Concurrency tests confirming correct negative-stock decisions under contention and idempotency-key protection against duplicate creation, including serialization/deadlock retries.
- Movement type/direction invariant tests for every valid and invalid pairing.
- Opening-stock invariant tests rejecting a second opening-stock movement.
- Correction-link integrity tests for self-reference, cycles, duplicate full reversal, and over-compensation.
- Cross-business consistency tests confirming database-level rejection independent of application validation.
- Archived-inventory write-protection tests for rejection, reactivation, and authorized correction.
- Idempotency conflict-handling tests for matching-payload retries and mismatched-payload conflicts.
- Trusted event-link contract tests for non-existent/cross-business event references and idempotent retried event delivery.

## 17. Repository Expectations

- Implementation preserves the existing repository folder structure, approved file names, and approved architecture, per `AGENTS.md`.
- Implementation makes the smallest safe change required to satisfy this contract; no unrelated refactoring, redesign, or abstraction is introduced.
- Implementation follows existing project conventions established by prior missions (SB-P-1.4, SB-P-1.7, SB-P-1.8, SB-P-1.9).
- No implementation code, SQL, migration, API, Supabase function, or frontend component is authored as part of this Implementation Package Foundation mission; those are produced only under a subsequent, separately authorized implementation mission using this contract as its instruction.
- Any Markdown produced under this or a subsequent SB-P-1.10 implementation mission passes the repository's Markdown Quality Gate before being considered complete.

## 18. Prohibited Work

During SB-P-1.10-IP-1.0, and before a separate explicit Mission Control implementation authorization is issued, neither this mission nor this contract authorizes:

- Modifying the locked Product Blueprint.
- Modifying the locked Engineering Implementation Specification.
- Generating application code of any kind.
- Writing SQL or migrations.
- Implementing APIs, Supabase functions, or frontend components.
- Changing product scope, UX, merchant-facing behaviour, permissions, or business rules.
- Introducing a maintained current-stock projection ahead of measured Phase 1 performance evidence.
- Introducing any stock-mutation path outside the shared movement-creation operation.
- Permitting Ask CFO, AI, WhatsApp interpretation, or automation to independently commit a stock movement, or allowing any AI-generated recommendation to bypass permission, validation, confirmation, or audit requirements. Human approval and business ownership remain decisive.
- Beginning implementation without a separate explicit Mission Control implementation authorization.

## 19. Acceptance Criteria

This Engineering Contract is acceptable when:

- Every deliverable category in Sections 6–16 is traceable to a specific, cited Product Blueprint or EIS requirement.
- No requirement in this contract contradicts, narrows, or expands the locked Product Blueprint or the locked EIS.
- No implementation code, SQL, migration, API, or frontend artifact is present in this contract or elsewhere in this mission's output.
- The contract is specific enough that a builder can execute Sections 6–16 without needing to reinterpret the Blueprint or EIS from scratch.
- All prohibited work in Section 18 is explicitly excluded from authorized scope.

## 20. Required Implementation Evidence

A subsequent implementation mission executing against this contract must produce, at minimum:

- Automated test results demonstrating the testing obligations in Section 16 pass.
- RLS and business-isolation verification evidence, treated as release-blocking per EIS Section 15 and Section 18.
- Query-plan or performance evidence supporting the final index selection made under the Index Strategy Decision Gate (Section 8 of this contract; EIS Section 5).
- Evidence that the shared movement-creation operation is the only write path to `inventory_movements` (e.g., code-review confirmation and absence of alternate write paths), per EIS Section 19.
- Evidence stored under `docs/implementation/SB-P-1.10/evidence/`, consistent with this package's structure.

## 21. Required Completion Report

A subsequent implementation mission must produce `docs/implementation/SB-P-1.10/completion-report.md`, reporting at minimum:

- Implementation objective and scope executed against this contract.
- Files and components created or modified.
- Lovable implementation status.
- Lovable publish status.
- Supabase migration status.
- Supabase RLS verification result.
- Runtime verification result.
- Production-domain verification at `https://smartbusiness.teamlips.com`.
- Verification checklist outcome.
- Evidence references from `docs/implementation/SB-P-1.10/evidence/`.
- GitHub commit SHA.
- Push status.
- Local and remote repository synchronization status.
- Confirmation that the locked Product Blueprint and locked EIS remain unmodified.
- Deviations and their resolution.
- Unresolved defects, if any.
- Final implementation status.
- Recommended next action.

## 22. Mission Completion Requirements

This Implementation Package Foundation mission (SB-P-1.10-IP-1.0) is complete when:

- This Engineering Contract is fully authored and satisfies Section 19.
- `lovable-build-prompt.md`, `verification-checklist.md`, and `completion-report.md` exist as placeholder documents only, per their stated purpose.
- `docs/implementation/SB-P-1.10/evidence/` exists and contains no evidence artifacts.
- The locked Product Blueprint and locked EIS are unmodified.
- No implementation code, SQL, migration, API, Supabase function, or frontend artifact exists anywhere in this mission's output.
- Markdown validation passes for every Markdown document created in this mission.
- The working tree is clean after commit.

Mission Control may authorize a subsequent implementation mission only after this Engineering Contract is reviewed and approved.
