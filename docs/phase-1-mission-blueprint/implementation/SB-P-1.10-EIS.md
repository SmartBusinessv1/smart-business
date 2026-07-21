# SB-P-1.10 — Engineering Implementation Specification (EIS)

## 1. Document Metadata

| Field                    | Value                                                                          |
| ------------------------ | ------------------------------------------------------------------------------- |
| Mission ID                | SB-P-1.10                                                                      |
| Mission Name              | Inventory Foundation                                                           |
| Related Product Blueprint | `docs/phase-1-mission-blueprint/active/SB-P-1.10.md` (LOCKED)                 |
| Blueprint Version          | 1.3                                                                            |
| Document Type              | Engineering Implementation Specification (EIS)                                |
| Document Version           | 1.0                                                                            |
| Status                     | Draft — ready for engineering review                                          |
| Owner                      | Team LIPS Engineering                                                         |
| Dependencies                | SB-P-1.4 — Bootstrap Governance Preparation, SB-P-1.9 — Merchant Workflow Refinement |
| Governance Basis            | SB-P-1.10 Product Blueprint Version 1.3 (Builder Review Approved, Engineering Review Approved, Founder Approval Approved) |

## 2. Purpose

This document translates the approved and locked SB-P-1.10 Product Blueprint into an implementation-ready engineering specification.

The Product Blueprint remains the single source of product truth. Every engineering decision recorded in this document exists to implement a requirement already established in Sections 1–19 of the Product Blueprint. Where any statement in this document could be read as introducing new product behaviour, the Product Blueprint prevails and this document is in error.

This EIS does not redefine what the product is. It describes how the approved Inventory Foundation is implemented: the technical domain model, data design, ledger mechanics, permission and RLS strategy, service contracts, validation, concurrency, performance, migration, testing, observability, build sequence, risks, and completion criteria required to build it.

No database schema, SQL migration, API implementation, Supabase function, or frontend component is created by this document.

## 3. Implementation Principles

These principles govern every engineering decision in this specification and in the resulting implementation.

- **Ledger authority.** The stock ledger is the only authoritative source of inventory quantity. No component, table, or code path may treat any other value as authoritative current stock.
- **No direct stock mutation.** No table, function, or code path may write a current-quantity value directly. Every quantity change is the side effect of inserting a movement.
- **Append-only movement history.** Movement records are immutable once posted. Corrections are new, linked records — never updates or deletes of existing movement rows.
- **Human-first architecture.** Every stock-affecting action originates from a deliberate, attributable human decision or an approved linked business event — never from an automated or AI-initiated write.
- **Permission-first design.** No read or write path is designed first and restricted afterward. Every inventory operation is designed against its permission requirement from the outset.
- **Business isolation.** Every table, query, and service boundary carries business scope as a first-class constraint, not an afterthought filter.
- **Auditability.** Every movement is traceable to a responsible user or an originating business event, with timing and reason, by construction — not by convention.
- **Single mutation path.** All stock-affecting writes — regardless of originating feature — pass through one shared movement-creation path, so that no current or future mission can create a second source of inventory truth.

## 4. Technical Domain Model

This is a technical model describing the shape of the domain, not a redefinition of product behaviour. Product meaning is defined in Product Blueprint Section 8.

### Inventory Entity

Represents one stock-counted item owned by one business. Carries a stable identity, a business reference, and exactly one base stock-counting unit. Does not carry a stored current-quantity field. Carries an active/archived status.

### Stock Movement

Represents one posted, immutable change to an inventory entity's stock position. Carries: the inventory entity it affects, movement type, direction (increase/decrease), quantity, timestamp, reason, responsible user reference and/or originating business-event reference, and an optional reference to the movement it corrects (for correction/reversal movements only).

### Movement Types

A closed, extensible enumeration corresponding to Product Blueprint Section 8 "Stock Movement Types": opening stock, stock increase, stock decrease, adjustment increase, adjustment decrease, and correction/reversal (compensating) movements. The enumeration is designed to accept additional values from future governed missions without altering the meaning of existing values.

### Movement Reasons

A required, human-readable field on every movement. Not a separate normalized entity in this foundation; free-text reason capture is sufficient to satisfy Product Blueprint Section 8 "Stock Movement Reasons." Structured/categorized reasons are not in scope and are not precluded for future governed missions.

### Current Stock

Not a stored field. A value derived at read time (or maintained as a consistency-checked projection — see Section 6) from the complete movement history of an inventory entity.

### Archived Inventory

An inventory entity status, not a separate table or a data-removing operation. Archived entities retain their full movement history and remain queryable by authorized users under Section 7 permission rules.

### Transaction Links

An optional reference on a movement record to an originating business event from another domain (e.g., a future purchase or sale). The reference is a loosely coupled pointer (business-scoped identifier and event-type tag), not a hard schema dependency on any future mission's tables, since those tables do not exist yet.

### Responsible User

A reference to the authenticated user who performed or authorized the action that produced a movement. Required on every movement unless the movement instead carries an originating business-event reference (Product Blueprint Section 8 "Stock Ledger"; Business Rule 16). At least one of the two must be present.

### Business Ownership

A required business reference on every inventory entity and every movement, used as the isolation boundary for every query and permission check described in Sections 7 and 8.

## 5. Database Design

This section specifies the required tables, relationships, keys, constraints, and indexes at a design level. No migration script is authored here.

### Tables

**`inventory_items`**
- Primary key: surrogate identifier.
- Foreign key: business identifier (required, references the existing business/tenant table).
- Fields: item identity/name, base stock-counting unit, status (active/archived), created/updated timestamps, created-by user reference.
- Constraint: base stock-counting unit is required and immutable after creation (unit changes are out of scope per Product Blueprint Section 8 "Units of Measure").

**`inventory_movements`**
- Primary key: surrogate identifier.
- Foreign key: inventory item identifier (required, references `inventory_items`).
- Foreign key: business identifier (required — duplicated from the parent item for direct RLS and query scoping, must always match the parent item's business).
- Fields: movement type, direction, quantity (positive, direction-qualified), reason (required text), occurred-at timestamp, responsible user reference (nullable), originating business-event type and reference (nullable), correcting-of movement reference (nullable, self-referencing foreign key to `inventory_movements`), created-at timestamp.
- Constraint: at least one of responsible user reference or originating business-event reference must be present (audit completeness — Business Rule 16).
- Constraint: quantity must be strictly positive; direction is a separate field, not encoded as a signed quantity, so history remains human-readable.
- Constraint: no update or delete operation is permitted on posted rows at the data-access layer (see Section 6, "Ledger invariants").
- Constraint: `correcting-of` reference, when present, must point to a movement belonging to the same inventory item and business.

### Relationships

- One business has many `inventory_items` (business isolation boundary).
- One `inventory_items` row has many `inventory_movements` rows (one-to-many).
- One `inventory_movements` row may reference at most one other `inventory_movements` row as the movement it corrects (self-referencing, optional, one-directional).
- One `inventory_movements` row may reference at most one originating business event from another domain (loosely coupled, optional).

### Required Indexes

- `inventory_items`: index on business identifier (list and isolation queries); unique-per-business constraint on item identity if the Product Blueprint's identification requirement (Section 8 "Inventory Identification") is interpreted to require per-business uniqueness — this is confirmed against Product Blueprint intent during implementation design, not decided here.
- `inventory_movements`: index on inventory item identifier plus occurred-at timestamp (history and current-stock derivation); index on business identifier (isolation and business-level summaries); index on `correcting-of` reference (correction-link lookups).

## 6. Ledger Design

### Movement Creation Flow

Every stock-affecting action (opening stock, adjustment, future linked events) calls one shared movement-creation operation. That operation: validates business ownership and permission for the specific action, validates required fields (including the responsible-user-or-event constraint), evaluates the projected resulting current stock, applies the negative-stock authorization gate if the projection would go negative, and inserts the movement as a single atomic operation.

### Current Stock Derivation

Current stock for an inventory entity is the sum of signed movement quantities (increases positive, decreases negative) across its complete movement history. This specification does not mandate whether the derivation is computed on read (aggregation query) or maintained as a continuously-updated projection; either satisfies "ledger-derived, never directly mutated" provided the projection, if used, is written only as a side effect of movement insertion within the same atomic operation and is never independently writable.

### Ledger Invariants

- No code path may update or delete a row in `inventory_movements` after creation.
- No code path may write to a current-quantity value outside the movement-creation operation.
- Every movement row satisfies the responsible-user-or-event constraint at write time.

### Correction Model

A correction is a new movement with its `correcting-of` reference set to the movement it corrects, and its own direction/quantity/reason describing the compensating change. The original movement is never altered. Both movements remain independently visible in history queries.

### Reversal Behaviour

A reversal is the specific case of a correction that fully offsets the original movement's quantity in the opposite direction. It follows the same creation path and the same `correcting-of` linkage as any other correction; no separate mechanism is required.

### Audit Preservation

Every insert into `inventory_movements` is, by the constraints in Section 5, permanently attributable to a responsible user or an originating event, with a timestamp and reason. No design path allows an anonymous or unattributed movement.

## 7. Permission Architecture

Implementation strategy for each permission surface identified in Product Blueprint Sections 8 and 10:

- **Business isolation.** Every query against `inventory_items` and `inventory_movements` is scoped to the businesses the requesting user holds a role in. This is enforced at the data-access layer (see Section 8) and is not left to application-layer discretion alone.
- **Owner permissions.** The business owner role is authorized for all inventory actions (view, create, opening stock, adjustment, correction, archive) by default.
- **Employee permissions.** Non-owner roles (manager, authorized employee) are authorized per-action according to permissions granted by the business owner, consistent with the existing permission model established in prior missions (e.g., SB-P-1.9). This specification does not define new permission types beyond what Product Blueprint Section 8 "Permissions" already requires: view, opening stock, adjustment. Correction authority is owner-controlled per Section 8 "Inventory Movement Corrections" and is modeled as a distinct, more restrictive permission than general adjustment.
- **Negative-stock authorization.** A distinct permission gate, checked in the movement-creation operation before a movement that would result in negative stock is committed, independent of general adjustment permission.
- **Historical access.** Read access to movement history follows the same per-business, per-role permission model as current inventory view access; no separate historical-access permission tier is introduced.
- **Archived inventory.** Archived items remain subject to the same permission model as active items; archiving changes item status, not access rules.

## 8. Row-Level Security Strategy

RLS is the enforcement layer for the business-isolation and permission boundaries described in Section 7, consistent with the Supabase Architecture Framework. No SQL policy is authored here.

- Both `inventory_items` and `inventory_movements` require RLS enabled, since both carry a business scope that must never be bypassed by a missing or incorrect application-layer check.
- Row-level policies are expected to gate on: (a) the requesting user's membership and role within the row's business, and (b) the specific action being performed (select vs. insert), matching the per-action permission model in Section 7 rather than a single blanket read/write policy.
- Because `inventory_movements` must never be updated or deleted once posted (Section 6), no update or delete policy is granted on that table for any application role — immutability is enforced at the RLS layer, not only in application code.
- The negative-stock authorization gate (Section 7) is treated as an application-layer check ahead of insert, not an RLS policy condition, because it depends on a computed projection rather than a static row attribute.
- Correction inserts are validated (at minimum, that the referenced `correcting-of` movement belongs to the same business) before the insert reaches RLS, since RLS alone cannot express cross-row consistency of this kind efficiently.

## 9. API / Service Architecture

This section defines engineering contracts at the operation level, not implementation code.

- **Inventory creation.** Accepts business scope, item identity, and base unit; returns the created item. Permission: create.
- **Opening stock.** Accepts inventory item reference, quantity, and unit confirmation; creates an opening-stock movement through the shared movement-creation operation. Permission: opening stock.
- **Adjustment.** Accepts inventory item reference, direction, quantity, and reason; creates an adjustment movement through the shared movement-creation operation, including the negative-stock check. Permission: adjustment.
- **Correction.** Accepts a reference to the movement being corrected, direction, quantity, and reason; creates a linked correction movement through the shared movement-creation operation. Permission: correction (owner-controlled).
- **History retrieval.** Accepts inventory item reference and pagination parameters; returns movements in chronological order with type, direction, quantity, reason, timing, responsible user or linked event. Permission: view.
- **Inventory retrieval.** Accepts inventory item reference; returns identity, base unit, derived current stock, and status. Permission: view.
- **Search.** Accepts business scope and a search term; returns matching inventory items by identifying information, without mutating any data. Permission: view.
- **Filtering.** Accepts business scope and filter parameters (e.g., stock status, archived status); returns a narrowed inventory list, without mutating any data. Permission: view.

Every write operation above funnels into the single movement-creation operation described in Section 6; no operation writes to `inventory_movements` independently.

## 10. Frontend–Backend Contracts

Describes the shape of data exchanged, not concrete interface definitions.

- **Inventory list response:** item identity, base unit, derived current stock, status (active/archived), per-item available actions (permission-aware).
- **Inventory detail response:** item identity, base unit, derived current stock, status, and a reference/handle for retrieving history.
- **History response:** ordered list of movements, each carrying type, direction, quantity, reason, timestamp, responsible user or linked-event descriptor, and (for corrections) a reference to the original movement.
- **Opening stock request/response:** request carries item reference, quantity, unit confirmation; response carries the created movement and updated derived current stock.
- **Adjustment request/response:** request carries item reference, direction, quantity, reason; response carries the created movement, updated derived current stock, and — when applicable — a negative-stock warning flag requiring explicit confirmation before commit.
- **Correction request/response:** request carries the original movement reference, direction, quantity, reason; response carries both the original and the new correcting movement.
- **Negative-stock warning:** a pre-commit response shape carrying the projected resulting quantity, so the frontend can present the warning described in Product Blueprint Section 9 before the user confirms.
- **Permission-aware action state:** every response that lists available actions reflects the requesting user's actual permission, so the frontend never renders an action it cannot execute (Product Blueprint Section 9 "Permission Behaviour").
- **Error/success states:** every write response distinguishes between validation failure, permission failure, and success, so the frontend can never present a blocked action as if it succeeded.

## 11. Validation Rules

- **Server-side validation.** All validation described below is enforced server-side regardless of any client-side validation; client checks are a UX convenience only.
- **Business validation.** Item identity is required; base unit is required and immutable after creation; movement quantity must be strictly positive; movement reason is required.
- **Permission validation.** Every operation in Section 9 independently validates the requesting user's permission for that specific action and business scope before performing any read or write.
- **Negative-stock validation.** Before committing a movement that would result in negative stock, the operation validates that the requesting user holds negative-stock authorization; absent that authorization, the operation is rejected, not silently clamped to zero.
- **Audit validation.** Every movement insert validates that at least one of responsible-user reference or originating-event reference is present before the write is allowed to proceed.
- **Correction validation.** A correction insert validates that the referenced original movement exists, belongs to the same inventory item and business, and that the requesting user holds correction permission.

## 12. Concurrency Strategy

- **Transactions.** Movement creation (including the projected-quantity evaluation for negative-stock detection) executes within a single database transaction, so the projection used for the negative-stock decision reflects the same state that the insert commits against.
- **Atomic operations.** The insert of a movement row and any maintained current-stock projection (if that design is chosen per Section 6) occur atomically, so no reader can observe a movement without its corresponding stock effect or vice versa.
- **Race-condition prevention.** Two concurrent movement-creation requests against the same inventory item are serialized at the transaction/row-lock level so that both projected-quantity evaluations are correct relative to each other, preventing two concurrent adjustments from both passing a negative-stock check that only one of them should have passed.
- **Idempotency.** The movement-creation operation accepts an idempotency key from the caller so that a retried request (client resubmission or a future integration's retried event delivery) does not create a duplicate movement.
- **Retry behaviour.** Callers are expected to retry failed requests using the same idempotency key; the movement-creation operation returns the original result for a repeated key rather than creating a second movement.

## 13. Performance Strategy

- **Indexing.** As specified in Section 5: business-scoped indexes on both tables, plus item-plus-time indexing on movements to support history and current-stock derivation queries.
- **Pagination.** History retrieval and inventory list operations are paginated by design; no operation is expected to return an unbounded result set.
- **Aggregation.** Current-stock derivation, if computed by aggregation rather than a maintained projection, is scoped to a single inventory item per request — never aggregated across a business's full movement history in a single query.
- **Query optimization.** List and summary views query against item-level and derived-stock-level attributes; they do not scan movement history directly except when history itself is the requested view.
- **Future scalability.** The design anticipates higher movement volume from future governed missions (POS, purchasing, sales) without requiring a redesign of the movement-creation path; if aggregation-based current-stock derivation proves insufficient at scale, migrating to a maintained projection is a query-strategy change, not a ledger-authority change.

## 14. Migration Strategy

Describes the rollout sequence at an engineering-planning level; no migration script is authored here.

1. Introduce `inventory_items` and `inventory_movements` as net-new tables — no existing data requires transformation, since no prior inventory schema exists in the repository.
2. Enable RLS on both tables before any application code path is granted access, so no unscoped access window exists between table creation and policy activation.
3. Introduce the shared movement-creation operation before any UI surface is built against it, so no feature can bypass it from day one.
4. Sequence remaining schema/table introductions to keep the movement-creation path as the single point of write access throughout rollout.

## 15. Testing Strategy

- **Ledger correctness.** Derived current stock equals the sum of signed movement quantities for an item at any point in its history, verified across opening stock, increases, decreases, adjustments, and corrections.
- **Permissions.** Each of view, opening-stock, adjustment, and correction is independently tested against authorized and unauthorized roles.
- **RLS.** Cross-business access attempts are tested to confirm no row from another business is ever returned or writable, including negative tests that a lack of permission does not disclose that a row exists.
- **Corrections.** Tests confirm the original movement is never altered, the correction is linked and independently visible, and correction permission is enforced separately from adjustment permission.
- **Audit integrity.** Tests confirm no movement can be created without a responsible user or originating-event reference.
- **Business isolation.** Tests confirm list, detail, history, and summary views never mix data across businesses.
- **Negative stock.** Tests confirm unauthorized users are blocked, authorized users are warned and must confirm, and the resulting movement is fully auditable and identifiable.
- **Performance.** Tests confirm history and list queries remain within acceptable bounds as movement volume grows, using representative data volumes.
- **Concurrency.** Tests confirm two concurrent movement-creation requests against the same item do not both pass a negative-stock check that only one should pass, and that idempotency keys prevent duplicate movement creation on retry.

## 16. Observability

- **Logging.** Movement-creation attempts (success and failure) are logged with business and item scope, movement type, and outcome, without logging sensitive user-identifying details beyond what is already part of the audit record.
- **Error reporting.** Validation failures, permission failures, and negative-stock rejections are surfaced as distinct, identifiable error categories so operational issues can be distinguished from expected user-facing rejections.
- **Audit events.** Every movement creation is itself an audit event by design (Section 6); no separate audit-log table duplicates this data, since the ledger is already the audit trail.
- **Metrics.** Movement-creation volume, rejection rate (by category: validation, permission, negative-stock), and history/list query latency are tracked to detect both misuse patterns and performance degradation.
- **Monitoring.** Sustained increases in negative-stock rejections or permission-denied rates are monitored as potential indicators of merchant confusion or misconfigured permissions, not treated as pure error noise.

## 17. Implementation Sequence

1. Database design finalization: confirm table/column/constraint decisions from Section 5 during detailed schema design (including the per-business item-identity uniqueness question flagged in Section 5).
2. Data layer: implement `inventory_items` and `inventory_movements` with RLS enabled from creation.
3. Ledger core: implement the shared movement-creation operation, including validation (Section 11), concurrency handling (Section 12), and idempotency.
4. Current-stock derivation: implement the read path for derived current stock.
5. Permission enforcement: implement per-action permission checks (Section 7) ahead of or alongside RLS policy implementation (Section 8).
6. Service operations: implement inventory creation, opening stock, adjustment, correction, history retrieval, inventory retrieval, search, and filtering (Section 9) against the ledger core.
7. Frontend integration: implement UI surfaces against the contracts in Section 10, reusing existing application shell, navigation, and confirmation-dialog patterns per the approved Builder Review.
8. Test coverage: implement the test suite described in Section 15 alongside, not after, each preceding step.
9. Observability: implement logging, metrics, and monitoring (Section 16) before the feature is considered rollout-ready.

## 18. Risks

| Risk | Engineering Mitigation |
| --- | --- |
| A future feature bypasses the shared movement-creation operation and writes stock changes directly. | Enforce immutability and no-direct-write constraints at the RLS/data-access layer, not only through code review discipline. |
| Concurrent requests against the same inventory item produce an incorrect negative-stock decision. | Serialize movement creation per inventory item within a database transaction, as specified in Section 12. |
| Retried requests (client or future integration) create duplicate movements. | Require idempotency keys on the movement-creation operation from the first implementation, as specified in Section 12. |
| RLS policies are incomplete or misconfigured, exposing cross-business data. | Treat the RLS test suite (Section 15) as a release-blocking requirement, not an optional pass. |
| Current-stock derivation degrades in performance as ledger size grows. | Monitor query latency (Section 16) and revisit aggregation-versus-projection strategy (Section 6, Section 13) if thresholds are exceeded, without weakening ledger authority. |
| Correction links are created against a movement from a different business or item. | Validate `correcting-of` references against the same business and item scope at write time, as specified in Section 11. |
| Audit completeness is silently violated by a future code change that omits responsible-user-or-event. | Enforce the constraint at the data layer (Section 5), not only in application-level validation. |

## 19. Definition of Done

Engineering implementation of SB-P-1.10 is complete when:

- `inventory_items` and `inventory_movements` exist with RLS enabled and the constraints specified in Section 5.
- The shared movement-creation operation is the only write path to `inventory_movements`, verified by code review and by the absence of any alternate write path.
- Current stock is always derivable from movement history and matches ledger totals in all test scenarios.
- Opening stock, adjustments, and corrections are all created through the shared movement-creation operation, with corrections linked to and non-destructive of their originals.
- Negative stock is blocked for unauthorized users and requires explicit warning and confirmation for authorized users, with no code path producing negative stock silently.
- Business isolation and per-action permission enforcement (view, opening stock, adjustment, correction) pass the full test suite in Section 15, including cross-business negative tests.
- Archived inventory preserves history, remains queryable by authorized users, and does not affect current-stock calculation for other items.
- All service operations in Section 9 are implemented against the shared ledger core and return the response shapes described in Section 10.
- The test suite in Section 15 passes, including ledger correctness, permissions, RLS, corrections, audit integrity, business isolation, negative stock, and concurrency.
- Logging, error categorization, and metrics described in Section 16 are in place.
- No implementation detail in this document or in the resulting code contradicts Sections 1–19 of the locked Product Blueprint.
