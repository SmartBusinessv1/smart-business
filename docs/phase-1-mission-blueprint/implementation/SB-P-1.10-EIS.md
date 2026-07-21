# SB-P-1.10 — Engineering Implementation Specification (EIS)

## 1. Document Metadata

| Field                    | Value                                                                          |
| ------------------------ | ------------------------------------------------------------------------------- |
| Mission ID                | SB-P-1.10                                                                      |
| Mission Name              | Inventory Foundation                                                           |
| Related Product Blueprint | `docs/phase-1-mission-blueprint/active/SB-P-1.10.md` (LOCKED)                 |
| Blueprint Version          | 1.3                                                                            |
| Document Type              | Engineering Implementation Specification (EIS)                                |
| Document Version           | 1.2                                                                            |
| Status                     | LOCKED — implementation authority                                             |
| Owner                      | Team LIPS Engineering                                                         |
| Dependencies                | SB-P-1.4 — Bootstrap Governance Preparation, SB-P-1.9 — Merchant Workflow Refinement |
| Governance Basis            | SB-P-1.10 Product Blueprint Version 1.3 (Builder Review Approved, Engineering Review Approved, Founder Approval Approved) |
| Prior Review                | Supabase Architecture and Security Review SB-P-1.10-EIS-AR-1.0 — Minor Engineering Refinement Required |
| Architecture Re-Review      | Supabase Architecture Re-Review — Approved                                    |
| Final Recommendation        | Ready to Lock EIS                                                             |

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

Loose coupling describes the schema relationship, not the integrity guarantee. A movement carrying a business-event link is only ever created if, at the moment of movement creation, the referenced event is confirmed to exist and is confirmed to belong to the same business as the movement — this confirmation is performed by calling the owning domain's own validation (since this mission does not have a foreign key into a table it does not own), and its result determines whether the movement-creation request proceeds. If the referenced event cannot be confirmed to exist and to belong to the same business, the movement request is invalidated and no movement is created. Loose coupling therefore never weakens business isolation or audit integrity — it only avoids a hard schema dependency on tables owned by future missions; it does not relax the correctness requirement that a recorded link must be real and business-scoped.

**Trusted event-link contract.** The following guarantees apply to every movement carrying a business-event link, regardless of which future domain originates it:

- The referenced event must exist at the moment of movement creation; a link to a non-existent event is rejected.
- The referenced event must belong to the same business as the movement being created; a cross-business event reference is rejected.
- The event identifier used in the link is immutable or stable for the lifetime of the event, so a recorded link remains resolvable for the life of the movement.
- Event-existence validation and movement creation cannot diverge: the operation that confirms the event and the operation that inserts the movement are part of the same atomic decision, so a request cannot pass validation and then insert a movement against a since-invalidated event, and a request cannot insert a movement without having passed validation.
- Retried event processing (a future domain redelivering the same business event, e.g., after a timeout) is idempotent: it must reuse the idempotency contract in Section 6 rather than depend on the event link alone to prevent duplicate movements.
- Every future domain that originates stock-affecting activity must create its movements through the single shared movement-creation operation described in Section 6 and Section 9. No future domain may write inventory quantities or `inventory_movements` rows through an alternate path, a domain-owned table, or a direct write — the business-event link exists to make the shared movement traceable to its origin, not to authorize a second write path.

### Event Time and Record Time Semantics

Every movement carries two distinct timestamps with distinct meanings:

- **`occurred_at`** — the business-event time: when the underlying stock event actually happened (e.g., when stock was physically counted for opening stock, or when the linked business event occurred). This is the time used for chronological history, ledger ordering, and merchant-facing "when did this happen" explanations.
- **`created_at`** — the immutable system insertion time: when the movement row was actually written to the database. This never changes after insert and is never presented as the business event time.

Both timestamps are retained on every movement for auditability. Neither is optional and neither is ever backfilled or corrected in place — a wrong `occurred_at` is corrected the same way any other movement error is corrected: through a linked compensating movement (Section 6, "Correction Model"), never by editing the original row.

Backdating or future-dating `occurred_at` relative to `created_at` is permitted only through an authorized workflow (e.g., recording opening stock for a business event that happened before the business onboarded to Smart Business). Unauthorized or unreasonable future-dating — an `occurred_at` materially ahead of `created_at` with no authorized workflow behind it — is rejected at validation time (Section 11). This document does not define new user-facing workflows; it only states that the authorization gate must exist wherever backdating or future-dating is permitted.

Deterministic ordering of movement history uses `occurred_at` as the primary ordering key, with a stable secondary key (the movement's surrogate identifier or `created_at`, whichever the detailed schema design selects) applied when two movements share the same `occurred_at`, so that history ordering is always deterministic and reproducible. Insertion order — the order in which movements actually entered the ledger — remains independently auditable through `created_at` and the record identifier even when `occurred_at` ordering differs from insertion order (e.g., an authorized backdated entry).

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
- Fields: movement type, direction, quantity (positive, direction-qualified), reason (required text), occurred-at timestamp, created-at timestamp, responsible user reference (nullable), originating business-event type and reference (nullable), correcting-of movement reference (nullable, self-referencing foreign key to `inventory_movements`).
- Constraint: at least one of responsible user reference or originating business-event reference must be present (audit completeness — Business Rule 16).
- Constraint: quantity must be strictly positive; direction is a separate field, not encoded as a signed quantity, so history remains human-readable.
- Constraint: direction must match movement type according to the fixed type/direction matrix (see Section 6, "Movement Type and Direction Invariants"); a row proposing an invalid type/direction pairing is rejected before insertion.
- Constraint: no update or delete operation is permitted on posted rows at the data-access layer (see Section 6, "Ledger Invariants" and Section 8, "Defence in Depth Beyond RLS").
- Constraint: `correcting-of` reference, when present, must point to a movement belonging to the same inventory item and the same business as the correcting row (see "Cross-Business Consistency Enforcement" below).
- Constraint: at most one movement of type "opening stock" may exist per inventory item (see Section 6, "Opening-Stock Invariant").

**`inventory_movement_idempotency_keys`** (or an equivalent durable structure — the exact table/column shape is an implementation decision; the guarantees below are not)
- Purpose: durable persistence of idempotency keys so that retried movement-creation requests are safely detected and resolved without relying on in-memory or transient state.
- Fields (design-level, not schema): idempotency key value, business identifier, the operation or movement-creation contract the key is scoped to, a reference to the resulting movement once created, request-payload fingerprint (for conflict detection), created-at timestamp.
- Constraint: uniqueness is scoped to (business identifier, operation/contract, idempotency key) — the same literal key value used by two different businesses, or for two different operation contracts within the same business, is not a collision.
- Constraint: idempotency-key registration and the resulting movement insertion occur within the same atomic transaction, so a key is never recorded as "in use" without a corresponding committed movement, and a movement is never committed without its key being durably recorded.
- Retention: rows are not deleted or archived in a way that shortens the required replay-protection window; any retention or archival policy applied to this structure must preserve the ability to detect a duplicate or conflicting retry for the full required operational period before a row is eligible for removal.

### Cross-Business Consistency Enforcement

Database design, not application code alone, must prevent a movement from referencing an inventory item or a corrected movement belonging to a different business than the movement itself. Application-level validation is a UX and defense-in-depth layer, not the enforcement boundary.

- The business identifier stored on `inventory_movements` must be validated against the business identifier of the referenced `inventory_items` row at write time, using a database-enforced mechanism (e.g., a composite foreign key or an equivalent constraint/trigger selected during detailed schema design) — not solely an application-layer check performed before the insert.
- The business identifier and inventory-item identifier of a `correcting-of` reference must be validated against the business identifier and inventory-item identifier of the correcting movement itself, using the same class of database-enforced mechanism.
- A movement-creation or correction request that would violate either constraint is rejected by the database, not merely discouraged by application logic — so a defect in application validation cannot silently create a cross-business reference.
- The precise constraint mechanism (composite foreign key, check constraint plus trigger, or equivalent) is an implementation decision left to detailed schema design; the requirement that it exist at the database layer is not.

### Relationships

- One business has many `inventory_items` (business isolation boundary).
- One `inventory_items` row has many `inventory_movements` rows (one-to-many).
- One `inventory_movements` row may reference at most one other `inventory_movements` row as the movement it corrects (self-referencing, optional, one-directional), and never itself.
- One `inventory_movements` row may reference at most one originating business event from another domain (loosely coupled, optional).

### Index Strategy Decision Gate

This document intentionally does not lock a final index set. Detailed schema design must evaluate indexes for at least the following access patterns before implementation is considered complete:

- Business identifier plus occurred-at timestamp (business-level chronological retrieval).
- Business identifier plus inventory item identifier plus occurred-at timestamp (per-item history and current-stock derivation).
- Business identifier plus movement type plus occurred-at timestamp (type-scoped queries and reporting).
- Originating business-event type and reference (event-link lookups and future-domain retry/idempotency checks).
- Idempotency-key lookup, scoped per (business identifier, operation/contract) as described above.
- `correcting-of` reference (correction-link lookups).
- Per-business uniqueness of item identity, if the Product Blueprint's identification requirement (Section 8 "Inventory Identification") is interpreted to require it — confirmed against Product Blueprint intent during implementation design, not decided here.

Final index selection must be validated against realistic data volumes and query-plan analysis (e.g., `EXPLAIN ANALYZE` or equivalent) before being considered final, not adopted purely from this candidate list. Every selected index must support tenant (business) isolation and chronological retrieval, and must be weighed against write-path overhead — an index is added only where read-path evidence justifies its write-path cost.

## 6. Ledger Design

### Movement Creation Flow

Every stock-affecting action (opening stock, adjustment, future linked events) calls one shared movement-creation operation. That operation: validates business ownership and permission for the specific action, validates required fields (including the responsible-user-or-event constraint), evaluates the projected resulting current stock, applies the negative-stock authorization gate if the projection would go negative, and inserts the movement as a single atomic operation.

The movement-creation operation is a strict two-phase flow, and no optimistic assumption is made between the two phases:

1. **Preview (informational only).** Where a caller requests a projected-stock warning ahead of confirmation (e.g., the negative-stock warning in Section 10), the resulting projection is informational only. It reflects stock state at the moment of the preview request. It does not reserve, hold, or lock stock, and it does not influence what happens when the caller later confirms.
2. **Commit (authoritative).** When the caller confirms and the movement-creation operation actually runs, the server recalculates projected resulting stock immediately before insertion, inside the same database transaction as the insert. Final negative-stock authorization and all other validation rules (Section 11) are evaluated against this recalculated state, not against the earlier preview. The movement is committed only if the recalculated state still satisfies every validation rule. If stock changed between the preview and the confirmation — because another movement was posted in the meantime — the request is re-evaluated from scratch against current state; the earlier preview result is never reused as the basis for committing the movement.

This flow applies identically to every caller of the movement-creation operation, including opening stock, adjustments, and corrections — no caller is permitted to skip the commit-time recalculation on the assumption that its own preview is still valid.

### Durable Idempotency Contract

This is the engineering integrity contract for idempotency referenced throughout this document (Sections 5, 9, 11, 12). The exact table or column structure implementing it (see Section 5, `inventory_movement_idempotency_keys`) is an implementation decision; the following guarantees are not:

- Idempotency keys are persisted durably in the database, not held only in application memory, a cache, or a message queue's transient state.
- Idempotency-key uniqueness is business-scoped: the same key value used by two different businesses is not a collision.
- The key is further scoped to the relevant operation or movement-creation contract (e.g., an opening-stock request and an adjustment request using the same literal key value, for the same business, are not treated as the same request).
- Idempotency-key registration and movement creation occur atomically, within the same database transaction — a key is never durably recorded without its corresponding movement being committed, and a movement is never committed without its key being durably recorded.
- Simultaneous (concurrent) requests presenting the same valid key cannot both create a movement; the second concurrent request is resolved against the first request's outcome rather than racing it (see Section 12, "Race-Condition Prevention").
- Reuse of the same key with a different request payload is rejected as a conflict — it is not treated as a valid retry and does not return a prior result as if it matched.
- A retry using the same key and the same payload returns the original result (the previously created movement and its effect), rather than creating a second movement or erroring.
- Retention or archival behaviour applied to idempotency-key records must preserve replay protection for the required operational period; a key must not become eligible for reuse-without-detection before that period has elapsed.

### Current Stock Derivation — Phase 1 Strategy

This specification resolves the Phase 1 current-stock strategy (previously an open implementation decision):

- Current stock for an inventory entity is the sum of signed movement quantities (increases positive, decreases negative) across its complete movement history, and is derived from the movement ledger — never stored as an independently writable field.
- For Phase 1, current-stock derivation uses **grouped ledger aggregation**: a single-item read (e.g., inventory detail) aggregates that item's movements directly; a paginated inventory list aggregates movements for every item on the requested page in one grouped aggregation operation, not one query per item (see Section 13, "Batch Retrieval for Lists" — this is an N+1-prevention requirement, not an optional optimization).
- No independently writable current-stock field or column is introduced in Phase 1. There is no dual-write path where an application or trigger updates a stored quantity outside the movement-creation operation.
- A maintained running-balance projection is explicitly **Build Later**: it may be introduced only after measured performance evidence (e.g., query-plan analysis or production latency data per Section 13) demonstrates that grouped aggregation is insufficient at real data volumes — not adopted speculatively alongside Phase 1.
- If a maintained projection is introduced in a future phase, it must be updated atomically with the triggering movement insertion (same transaction), must always be rebuildable and reconcilable from the ledger from scratch, and must never become a second source of truth — the ledger remains authoritative at all times, in Phase 1 and in every future phase.
- This decision protects simplicity and avoids premature dual-state complexity; it does not preclude revisiting the derivation strategy later as a query-strategy change (Section 13), which is explicitly not a ledger-authority change.

### Ledger Invariants

- No code path may update or delete a row in `inventory_movements` after creation.
- No code path may write to a current-quantity value outside the movement-creation operation; no independently writable current-stock field exists in Phase 1 (see above).
- Every movement row satisfies the responsible-user-or-event constraint at write time.
- Every movement row satisfies the movement type/direction matrix below at write time; an invalid combination is rejected before insertion, not corrected after.

### Movement Type and Direction Invariants

Every movement type has exactly one valid direction. The movement-creation operation validates this pairing before insertion; a request proposing an invalid combination is rejected, not silently coerced.

| Movement Type        | Required Direction                                                   |
| --------------------- | --------------------------------------------------------------------- |
| Opening stock          | Increase                                                              |
| Stock increase         | Increase                                                              |
| Stock decrease         | Decrease                                                              |
| Adjustment increase    | Increase                                                              |
| Adjustment decrease    | Decrease                                                              |
| Correction / reversal  | Determined by the required compensating effect (increase when compensating a prior decrease's effect, decrease when compensating a prior increase's effect) |

This is an engineering semantic-integrity rule, not a change to the Product Blueprint's movement types (Section 8 "Stock Movement Types"). The matrix is closed for the movement types defined in this foundation and is designed to be extended, not replaced, when future governed missions introduce new movement types.

### Opening-Stock Invariant

- An inventory item may receive only one opening-stock movement over its lifetime. The movement-creation operation rejects a second opening-stock insertion for the same inventory item (enforced at the data layer via the constraint in Section 5, not only in application logic).
- A mistake in a posted opening-stock movement is corrected the same way any other movement error is corrected: through a linked compensating movement referencing the opening-stock movement via `correcting-of` — never by editing or replacing the original opening-stock row.
- Later stock additions after opening stock use an ordinary stock-increase movement or an authorized future business-event movement (e.g., a purchase). They are never recorded as, or mistaken for, a second opening-stock movement.
- This clarifies engineering enforcement of the Product Blueprint's existing opening-stock behaviour (Section 8 "Opening Stock"); it does not alter what opening stock means to the merchant.

### Correction Model

A correction is a new movement with its `correcting-of` reference set to the movement it corrects, and its own direction/quantity/reason describing the compensating change. The original movement is never altered. Both movements remain independently visible in history queries. Corrections remain append-only compensating entries — never updates or deletes of the movement they correct.

**Correction-link integrity**, enforced at write time:

- A movement cannot correct itself; a `correcting-of` reference equal to the movement's own identifier is rejected.
- Correction relationships cannot be circular (e.g., movement A corrects B, and B, directly or transitively, corrects A); the movement-creation operation validates that a proposed `correcting-of` link does not close a cycle before insertion.
- `correcting-of` links are restricted to the same business and the same inventory item as the correcting movement (see Section 5, "Cross-Business Consistency Enforcement").
- Correction state must remain mathematically traceable: at any point, the net remaining (uncompensated) effect of an original movement must be computable from the original movement's quantity and the sum of all corrections that reference it, directly or transitively.
- A duplicate full reversal of the same remaining effect is rejected: once an original movement's effect has been fully compensated, a further correction that would compensate the same already-compensated quantity is not permitted.
- Partial and multiple compensations against the same original movement are allowed, provided their cumulative effect remains determinable at all times and never exceeds the compensable (remaining, uncompensated) quantity of the movement being corrected. The movement-creation operation computes the remaining compensable quantity before accepting a new correction and rejects a correction that would exceed it.

### Reversal Behaviour

A reversal is the specific case of a correction that fully offsets the original movement's quantity in the opposite direction. It follows the same creation path and the same `correcting-of` linkage as any other correction; no separate mechanism is required. A reversal is subject to the same duplicate-full-reversal rejection described above.

### Audit Preservation

Every insert into `inventory_movements` is, by the constraints in Section 5, permanently attributable to a responsible user or an originating event, with a timestamp and reason. No design path allows an anonymous or unattributed movement.

## 7. Permission Architecture

Implementation strategy for each permission surface identified in Product Blueprint Sections 8 and 10:

- **Business isolation.** Every query against `inventory_items` and `inventory_movements` is scoped to the businesses the requesting user holds a role in. This is enforced at the data-access layer (see Section 8) and is not left to application-layer discretion alone.
- **Owner permissions.** The business owner role is authorized for all inventory actions (view, create, opening stock, adjustment, correction, archive) by default.
- **Employee permissions.** Non-owner roles (manager, authorized employee) are authorized per-action according to permissions granted by the business owner, consistent with the existing permission model established in prior missions (e.g., SB-P-1.9). This specification does not define new permission types beyond what Product Blueprint Section 8 "Permissions" already requires: view, opening stock, adjustment. Correction authority is owner-controlled per Section 8 "Inventory Movement Corrections" and is modeled as a distinct, more restrictive permission than general adjustment.
- **Negative-stock authorization.** A distinct permission gate, checked in the movement-creation operation before a movement that would result in negative stock is committed, independent of general adjustment permission.
- **Historical access.** Read access to movement history follows the same per-business, per-role permission model as current inventory view access; no separate historical-access permission tier is introduced.
- **Archived inventory.** Archived items remain subject to the same permission model as active items for reading; archiving changes item status, not read-access rules.

### Archived Inventory Write Protection

This is lifecycle enforcement, not a permission change:

- Archived inventory remains readable according to the same permission model as active inventory (see above); archiving never restricts authorized historical access.
- Ordinary new stock movements — opening stock, stock increase, stock decrease, adjustment increase, adjustment decrease — cannot be posted against an archived inventory item. The movement-creation operation rejects such a request regardless of the requesting user's general adjustment or opening-stock permission.
- To resume normal stock activity, the item must first be reactivated (returned to active status) by a user authorized to do so; reactivation is a status change, not a ledger-affecting operation.
- An explicitly authorized correction may still be permitted against an archived item's existing movements when required to preserve ledger integrity (e.g., correcting an error discovered after archiving) — this is the same owner-controlled correction permission described above, applied narrowly to compensating entries, not to new ordinary movements.

## 8. Row-Level Security Strategy

RLS is the enforcement layer for the business-isolation and permission boundaries described in Section 7, consistent with the Supabase Architecture Framework. No SQL policy is authored here.

- Both `inventory_items` and `inventory_movements` require RLS enabled, since both carry a business scope that must never be bypassed by a missing or incorrect application-layer check.
- Row-level policies are expected to gate on: (a) the requesting user's membership and role within the row's business, and (b) the specific action being performed (select vs. insert), matching the per-action permission model in Section 7 rather than a single blanket read/write policy.
- Because `inventory_movements` must never be updated or deleted once posted (Section 6), no update or delete policy is granted on that table for any application role — immutability is enforced at the RLS layer, not only in application code.
- The negative-stock authorization gate (Section 7) is treated as an application-layer check ahead of insert, not an RLS policy condition, because it depends on a computed projection rather than a static row attribute.
- Correction inserts are validated (at minimum, that the referenced `correcting-of` movement belongs to the same business) before the insert reaches RLS, since RLS alone cannot express cross-row consistency of this kind efficiently.

### Defence in Depth Beyond RLS

Movement immutability is protected by more than the ordinary RLS layer, since RLS is one layer of defense, not the only one:

- Ordinary application roles — the roles used by the merchant-facing application, regardless of the requesting user's permission level — cannot update or delete posted movements. This is enforced both by the absence of an update/delete RLS policy (above) and by not granting update/delete privileges to those roles at the database-privilege level, so a defect in policy logic alone cannot expose a mutation path.
- Privileged backend and service-role paths — including any server-side role that bypasses RLS for legitimate operational reasons — must not perform routine movement mutation. Service-role access is reserved for the movement-creation operation's own inserts and for genuinely exceptional, explicitly authorized procedures (below); it is never used as a convenient way to "fix" a posted movement in the ordinary course of operation.
- Ledger immutability is protected below the ordinary RLS layer as well: implementation may use PostgreSQL role privileges (revoking UPDATE/DELETE grants on `inventory_movements` from all routine roles), controlled database functions that only ever insert, triggers that reject UPDATE/DELETE attempts regardless of caller, or an equivalent mechanism. No specific mechanism is prescribed here; the requirement is that immutability does not depend solely on RLS policy correctness.
- Corrections must use compensating movements (Section 6, "Correction Model") — this remains the only sanctioned way to change the recorded effect of a prior movement, at every privilege level.
- Emergency repair or migration procedures that would need to alter or remove a posted movement row (e.g., correcting a defect introduced by a bug rather than a business event) must be explicitly authorized, tightly controlled, and fully audited outside the routine application paths — such a procedure is an exception-handling process, not a feature of the movement-creation operation, and its use must itself leave an auditable record.

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

Every write operation above (inventory creation, opening stock, adjustment, correction) accepts a caller-supplied idempotency key and funnels into the single movement-creation operation described in Section 6, "Durable Idempotency Contract"; no operation writes to `inventory_movements` independently, and no write operation is exempt from the idempotency, movement type/direction, opening-stock, correction-link, or archived-item validation described in Section 11.

## 10. Frontend–Backend Contracts

Describes the shape of data exchanged, not concrete interface definitions.

- **Inventory list response:** item identity, base unit, derived current stock, status (active/archived), per-item available actions (permission-aware).
- **Inventory detail response:** item identity, base unit, derived current stock, status, and a reference/handle for retrieving history.
- **History response:** ordered list of movements, each carrying type, direction, quantity, reason, timestamp, responsible user or linked-event descriptor, and (for corrections) a reference to the original movement.
- **Opening stock request/response:** request carries item reference, quantity, unit confirmation; response carries the created movement and updated derived current stock.
- **Adjustment request/response:** request carries item reference, direction, quantity, reason; response carries the created movement, updated derived current stock, and — when applicable — a negative-stock warning flag requiring explicit confirmation before commit.
- **Correction request/response:** request carries the original movement reference, direction, quantity, reason; response carries both the original and the new correcting movement.
- **Negative-stock warning:** a preview response shape carrying the projected resulting quantity, so the frontend can present the warning described in Product Blueprint Section 9 before the user confirms. This preview is informational only and does not reserve stock (Section 6); the authoritative check is repeated when the user's confirmation is actually submitted, and the outcome of that later check — not the preview — determines whether the movement is committed.
- **Permission-aware action state:** every response that lists available actions reflects the requesting user's actual permission, so the frontend never renders an action it cannot execute (Product Blueprint Section 9 "Permission Behaviour").
- **Error/success states:** every write response distinguishes between validation failure, permission failure, and success, so the frontend can never present a blocked action as if it succeeded.

## 11. Validation Rules

- **Server-side validation.** All validation described below is enforced server-side regardless of any client-side validation; client checks are a UX convenience only.
- **Business validation.** Item identity is required; base unit is required and immutable after creation; movement quantity must be strictly positive; movement reason is required.
- **Permission validation.** Every operation in Section 9 independently validates the requesting user's permission for that specific action and business scope before performing any read or write.
- **Negative-stock validation.** Before committing a movement that would result in negative stock, the operation validates that the requesting user holds negative-stock authorization; absent that authorization, the operation is rejected, not silently clamped to zero.
- **Audit validation.** Every movement insert validates that at least one of responsible-user reference or originating-event reference is present before the write is allowed to proceed.
- **Correction validation.** A correction insert validates that the referenced original movement exists, belongs to the same inventory item and business, that the requesting user holds correction permission, that the `correcting-of` link does not point to itself or create a cycle, and that the correction's quantity does not exceed the original movement's remaining compensable quantity (Section 6, "Correction Model").
- **Business-event link validation.** Before a movement carrying an originating business-event reference is created, the operation validates that the referenced event exists and belongs to the same business as the movement (Section 4, "Transaction Links"). This validation occurs before movement creation, not after; if it fails, the movement request is invalidated and no movement is created. Loose coupling of the schema relationship does not exempt the link from this validation. Event validation and movement creation occur as a single atomic decision (Section 4, "Trusted event-link contract").
- **Movement type/direction validation.** Every movement insert validates that its direction matches its movement type against the fixed matrix in Section 6, "Movement Type and Direction Invariants"; a mismatched pairing is rejected before insertion.
- **Opening-stock validation.** An opening-stock insert validates that no prior opening-stock movement exists for the same inventory item (Section 6, "Opening-Stock Invariant"); a second opening-stock request for the same item is rejected.
- **Archived-item validation.** An ordinary stock-movement insert (opening stock, increase, decrease, adjustment increase, adjustment decrease) validates that the target inventory item is active, not archived (Section 7, "Archived Inventory Write Protection"); a request against an archived item is rejected unless it is an explicitly authorized correction.
- **Idempotency validation.** Every movement-creation request validates its idempotency key (Section 6, "Durable Idempotency Contract") against durably persisted prior requests for the same business and operation contract: a first-seen key proceeds normally, a repeated key with an identical payload returns the original result, and a repeated key with a different payload is rejected as a conflict.

## 12. Concurrency Strategy

- **Transactions.** Movement creation (including the projected-quantity evaluation for negative-stock detection) executes within a single database transaction, so the projection used for the negative-stock decision reflects the same state that the insert commits against. Any earlier, out-of-transaction preview shown to the user (Section 6, "Preview") carries no weight at commit time — it is never substituted for the in-transaction recalculation.
- **Atomic operations.** The insert of a movement row and any maintained current-stock projection (if that design is chosen per Section 6) occur atomically, so no reader can observe a movement without its corresponding stock effect or vice versa.
- **Race-condition prevention.** Two concurrent movement-creation requests against the same inventory item are serialized at the transaction/row-lock level so that both projected-quantity evaluations are correct relative to each other, preventing two concurrent adjustments from both passing a negative-stock check that only one of them should have passed. If stock changes between a user's preview and their confirmation, the confirming request is re-evaluated against current state rather than committed on the assumption that the preview still holds.
- **Lock target.** The lock target used for serializing movement creation is the inventory item — concurrent movement-creation requests against the *same* inventory item are serialized against each other; requests against different inventory items are not blocked by this mechanism and may proceed independently, so serialization overhead scales with contention on a single item, not with overall system load.
- **Transaction ordering.** Where a single movement-creation request needs to acquire more than one lock or touch more than one row family (e.g., the inventory item plus an idempotency-key record), the operation acquires them in a consistent, predetermined order on every code path, so two concurrent requests cannot deadlock by acquiring the same two resources in opposite order.
- **Serialization and deadlock retry.** A movement-creation request that fails due to a serialization failure or a detected deadlock (rather than a validation or permission failure) is safe to retry automatically by the movement-creation operation itself or by the caller. Such a retry reuses the same idempotency key as the original attempt — it is a retry of the same logical request, not a new one — so the durable idempotency contract (above) guarantees the retry cannot produce a duplicate movement even if the original attempt's transaction partially executed before being rolled back.
- **Idempotency.** The movement-creation operation accepts an idempotency key from the caller so that a retried request (client resubmission, a serialization/deadlock retry, or a future integration's retried event delivery) does not create a duplicate movement. See "Durable Idempotency Contract" in Section 6 for the full guarantee.
- **Retry behaviour.** Callers are expected to retry failed requests using the same idempotency key; the movement-creation operation returns the original result for a repeated key rather than creating a second movement. This applies uniformly whether the retry is caller-initiated (e.g., a client resubmission after a timeout) or triggered by a serialization/deadlock failure — retries must never create duplicate movements under either cause.

## 13. Performance Strategy

- **Indexing.** As specified in Section 5's Index Strategy Decision Gate: business-scoped indexes on both tables, plus item-plus-time indexing on movements to support history and current-stock derivation queries, finalized only after query-plan validation.
- **Pagination.** History retrieval and inventory list operations are paginated by design; no operation is expected to return an unbounded result set.
- **Aggregation.** Current-stock derivation for a single-item request (e.g., inventory detail) uses grouped ledger aggregation scoped to that one inventory item, per the Phase 1 strategy in Section 6.
- **Batch retrieval for lists.** Inventory list retrieval must not derive current stock by issuing one query per item (an N+1 pattern). The derived stock values for every item on a requested page are retrieved in a single batch operation — one aggregation query grouped by item for the page's item set, per the Phase 1 strategy (Section 6, "Current Stock Derivation — Phase 1 Strategy") — so that list response time does not scale with the number of items on the page.
- **Query optimization.** List and summary views query against item-level and derived-stock-level attributes; they do not scan movement history directly except when history itself is the requested view. The grouped aggregation strategy must preserve ledger authority: the batch result must always be consistent with what a single-item derivation would return for the same item, and no optimization may introduce a value for current stock that is not itself derived from the movement ledger.
- **Future scalability.** The design anticipates higher movement volume from future governed missions (POS, purchasing, sales) without requiring a redesign of the movement-creation path. If grouped aggregation proves insufficient at scale, migrating to a maintained running-balance projection (Build Later, Section 6) is a query-strategy change, not a ledger-authority change, and is introduced only after measured performance evidence.

## 14. Migration Strategy

Describes the rollout sequence at an engineering-planning level; no migration script is authored here.

1. Introduce `inventory_items`, `inventory_movements`, and the idempotency-key structure (Section 5) as net-new tables — no existing data requires transformation, since no prior inventory schema exists in the repository.
2. All integrity constraints described in this document — RLS, the cross-business consistency enforcement (Section 5), the movement type/direction matrix (Section 6), the opening-stock and correction-link constraints (Section 6), and the audit-completeness constraint (Section 5) — must exist and be active before application write access is enabled. No rollout step grants write access ahead of the constraints that protect it.
3. Enable RLS on both tables before any application code path is granted access, so no unscoped access window exists between table creation and policy activation.
4. Privileged grants and service-role access (Section 8, "Defence in Depth Beyond RLS") are reviewed before release — no service-role or elevated-privilege path is shipped without an explicit review confirming it cannot be used for routine movement mutation.
5. Introduce the shared movement-creation operation before any UI surface is built against it, so no feature can bypass it from day one.
6. Sequence remaining schema/table introductions to keep the movement-creation path as the single point of write access throughout rollout.

### Migration Safety and Rollback

- Migrations must preserve append-only ledger integrity at every step; no migration step is permitted to update or delete a posted movement row as part of normal rollout.
- Rollback of a migration must not depend on deleting posted movement history. If a migration step needs to be reversed after movements have been posted against the new schema, rollback is achieved by a forward-fix migration (a subsequent migration that adjusts schema or constraints going forward) rather than by deleting or rewriting existing ledger data.
- Forward-fix is preferred over destructive rollback whenever ledger data already exists, consistent with the append-only principle governing this entire specification.
- No current-stock projection migration is required for the Phase 1 aggregation strategy (Section 6, "Current Stock Derivation — Phase 1 Strategy"), since Phase 1 introduces no maintained projection table or column to migrate.

## 15. Testing Strategy

- **Ledger correctness.** Derived current stock equals the sum of signed movement quantities for an item at any point in its history, verified across opening stock, increases, decreases, adjustments, and corrections.
- **Permissions.** Each of view, opening-stock, adjustment, and correction is independently tested against authorized and unauthorized roles.
- **RLS.** Cross-business access attempts are tested to confirm no row from another business is ever returned or writable, including negative tests that a lack of permission does not disclose that a row exists.
- **Corrections.** Tests confirm the original movement is never altered, the correction is linked and independently visible, and correction permission is enforced separately from adjustment permission.
- **Audit integrity.** Tests confirm no movement can be created without a responsible user or originating-event reference.
- **Business isolation.** Tests confirm list, detail, history, and summary views never mix data across businesses.
- **Negative stock.** Tests confirm unauthorized users are blocked, authorized users are warned and must confirm, and the resulting movement is fully auditable and identifiable.
- **Performance.** Tests confirm history and list queries remain within acceptable bounds as movement volume grows, using representative data volumes, and that list retrieval uses one grouped aggregation per page rather than one query per item (Section 13).
- **Concurrency.** Tests confirm two concurrent movement-creation requests against the same item do not both pass a negative-stock check that only one should pass, and that idempotency keys prevent duplicate movement creation on retry, including retries caused by serialization or deadlock failures (Section 12).
- **Movement type/direction invariants.** Tests confirm every valid type/direction pairing in Section 6 is accepted and every invalid pairing is rejected before insertion.
- **Opening-stock invariant.** Tests confirm a second opening-stock movement for the same inventory item is rejected, and that an opening-stock error is only correctable via a linked compensating movement.
- **Correction-link integrity.** Tests confirm a movement cannot correct itself, circular correction chains are rejected, a duplicate full reversal of an already-fully-compensated movement is rejected, and partial/multiple compensations are accepted only while cumulative compensation remains within the original movement's compensable quantity.
- **Cross-business consistency.** Tests confirm the database rejects a movement or correction referencing an inventory item or corrected movement belonging to a different business, independent of application-layer validation.
- **Archived inventory write protection.** Tests confirm ordinary movements are rejected against archived items, reactivation restores ordinary write access, and an explicitly authorized correction remains possible against an archived item's history.
- **Idempotency conflict handling.** Tests confirm a repeated idempotency key with an identical payload returns the original result, and a repeated key with a different payload is rejected as a conflict rather than treated as a valid retry.
- **Trusted event-link contract.** Tests confirm a movement cannot be created against a non-existent or cross-business event reference, and that retried event delivery from a future domain does not create a duplicate movement.

## 16. Observability

### Observability Boundaries

Operational logs exist to diagnose request processing and failures. They are bounded so they can never be mistaken for, or drift into, a second inventory record:

- Logs diagnose request processing and failures; they are an operational tool, not a business record.
- Logs do not become a parallel inventory ledger. No log stream is queried, replayed, or relied upon to determine current stock, movement history, or correction state — the ledger described in Sections 5 and 6 remains the sole authoritative stock record for every purpose, including any future reconciliation or incident investigation.
- Logs do not duplicate full merchant movement payloads unnecessarily; a log entry references a movement (e.g., by identifier and scope) rather than re-embedding the complete movement record, except where the specific fields logged are strictly required for diagnosing the failure at hand.
- Correlation identifiers are used where appropriate (e.g., tying a request's validation failure, permission check, and eventual commit or rejection together) so operational issues can be traced across the movement-creation flow without reconstructing business meaning from logs.
- Logs preserve merchant privacy: they avoid capturing sensitive user-identifying or business-sensitive detail beyond what is operationally necessary to diagnose the failure category.
- Logs follow controlled retention consistent with the repository's existing operational-data retention practices; log retention is an operational concern and is never used as a substitute for the ledger's own retention and replay-protection requirements (Section 6, "Durable Idempotency Contract").
- Logs never override or contradict the movement ledger. If a log entry and a ledger row ever appear inconsistent, the ledger is authoritative and the log is treated as an incomplete or delayed operational artifact, never as a correction to stock truth.

- **Logging.** Movement-creation attempts (success and failure) are logged with business and item scope, movement type, and outcome, without logging sensitive user-identifying details beyond what is already part of the audit record.
- **Error reporting.** Validation failures, permission failures, and negative-stock rejections are surfaced as distinct, identifiable error categories so operational issues can be distinguished from expected user-facing rejections.
- **Audit events.** Every movement creation is itself an audit event by design (Section 6); no separate audit-log table duplicates this data, since the ledger is already the audit trail.
- **Metrics.** Movement-creation volume, rejection rate (by category: validation, permission, negative-stock), and history/list query latency are tracked to detect both misuse patterns and performance degradation.
- **Monitoring.** Sustained increases in negative-stock rejections or permission-denied rates are monitored as potential indicators of merchant confusion or misconfigured permissions, not treated as pure error noise.

## 17. Implementation Sequence

1. Database design finalization: confirm table/column/constraint decisions from Section 5 during detailed schema design (including the per-business item-identity uniqueness question flagged in Section 5).
2. Data layer: implement `inventory_items`, `inventory_movements`, and the durable idempotency-key structure with RLS enabled from creation.
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
| Correction links are created against a movement from a different business or item. | Validate `correcting-of` references against the same business and item scope at write time, enforced at the database layer (Section 5, "Cross-Business Consistency Enforcement"), not only in application-level validation. |
| Audit completeness is silently violated by a future code change that omits responsible-user-or-event. | Enforce the constraint at the data layer (Section 5), not only in application-level validation. |
| A movement is inserted with a type/direction pairing that contradicts Section 6's matrix (e.g., an "opening stock" movement recorded as a decrease). | Enforce the matrix as a write-time constraint, not only an application-layer check (Section 6, "Movement Type and Direction Invariants"). |
| An inventory item receives a second opening-stock movement, or a correction chain becomes circular or double-compensates the same effect. | Enforce single-opening-stock and correction-link integrity (no self-reference, no cycles, no over-compensation) at write time, as specified in Section 6. |
| An ordinary movement is posted against an archived inventory item, silently reactivating stock activity without an explicit reactivation step. | Reject ordinary movements against archived items at the movement-creation operation, requiring explicit reactivation, as specified in Section 7. |
| An idempotency key collides across businesses or across unrelated operation contracts, causing an unrelated request to be treated as a duplicate. | Scope idempotency-key uniqueness to (business identifier, operation/contract, key value), as specified in Section 6, "Durable Idempotency Contract". |
| Operational logs are queried or relied upon as a stand-in for the ledger during an incident, creating a de facto second stock record. | Treat the ledger as the sole authoritative stock record in all tooling and runbooks; logs are diagnostic only, as specified in Section 16, "Observability Boundaries". |

## 19. Definition of Done

Engineering implementation of SB-P-1.10 is complete when:

- `inventory_items`, `inventory_movements`, and the durable idempotency-key structure exist with RLS enabled and the constraints specified in Section 5, including database-enforced cross-business consistency and the movement type/direction matrix.
- The shared movement-creation operation is the only write path to `inventory_movements`, verified by code review and by the absence of any alternate write path, including for future business-event-linked movements (Section 4, "Trusted event-link contract").
- Current stock is always derivable from movement history and matches ledger totals in all test scenarios, using Phase 1 grouped ledger aggregation with no independently writable current-stock field (Section 6).
- Opening stock, adjustments, and corrections are all created through the shared movement-creation operation, with corrections linked to and non-destructive of their originals, a single opening-stock movement enforced per item, and correction-link integrity (no self-reference, no cycles, no over-compensation) enforced at write time.
- Negative stock is blocked for unauthorized users and requires explicit warning and confirmation for authorized users, with no code path producing negative stock silently.
- Ordinary movements are rejected against archived inventory items pending reactivation, while authorized corrections against archived items' history remain possible (Section 7).
- The durable idempotency contract (Section 6) is enforced for every write operation: concurrent and retried requests with the same key and payload do not duplicate movements, and a repeated key with a different payload is rejected as a conflict.
- Business isolation and per-action permission enforcement (view, opening stock, adjustment, correction) pass the full test suite in Section 15, including cross-business negative tests.
- Archived inventory preserves history, remains queryable by authorized users, and does not affect current-stock calculation for other items.
- All service operations in Section 9 are implemented against the shared ledger core and return the response shapes described in Section 10.
- The test suite in Section 15 passes, including ledger correctness, permissions, RLS, corrections, audit integrity, business isolation, negative stock, concurrency, movement type/direction invariants, opening-stock invariant, correction-link integrity, cross-business consistency, archived-write protection, idempotency conflict handling, and the trusted event-link contract.
- Logging, error categorization, and metrics described in Section 16 are in place and respect the observability boundaries described there (logs remain diagnostic and never substitute for the ledger).
- Index selection follows the decision gate in Section 5: candidate indexes are validated against realistic data and query-plan analysis before being finalized, not adopted speculatively.
- Migration sequencing follows Section 14: all integrity constraints are active before write access is enabled, privileged/service-role grants are reviewed before release, and no migration step depends on deleting posted movement history.
- No implementation detail in this document or in the resulting code contradicts Sections 1–19 of the locked Product Blueprint.

## 20. Document Change Log

| Version | Description |
| --- | --- |
| 1.0 | Initial Engineering Implementation Specification, translating Product Blueprint Version 1.3 into implementation-ready engineering design. |
| 1.1 | Engineering review refinement pass. |
| 1.2 | Refinement in response to Supabase Architecture and Security Review SB-P-1.10-EIS-AR-1.0 ("Minor Engineering Refinement Required"). Resolved: durable, business- and operation-scoped idempotency contract with atomic key registration (Section 6, Section 5); defence-in-depth for append-only movement protection below RLS, including privileged-path and emergency-repair controls (Section 8); database-enforced cross-business consistency for movement-to-item and correction links, not application validation alone (Section 5); an explicit movement type/direction invariant matrix (Section 6); the single-opening-stock-per-item invariant and its compensating-movement correction path (Section 6); correction-link integrity against self-reference, cycles, and over-compensation, with cumulative-compensation traceability (Section 6); the trusted business-event link contract, including atomic validation-and-creation and idempotent retry (Section 4); the Phase 1 current-stock strategy, resolved to grouped ledger aggregation with no independently writable current-stock field and a Build Later projection gate (Section 6, Section 13); an index strategy decision gate deferring final index selection to query-plan-validated schema design (Section 5); event-time versus record-time semantics with controlled backdating and deterministic ordering (Section 4); archived-inventory write protection requiring reactivation for ordinary movements (Section 7); observability boundaries preventing logs from becoming a parallel ledger (Section 16); additional concurrency clarifications covering lock target, transaction ordering, and safe serialization/deadlock retry (Section 12); and migration clarifications requiring constraints before write access and forward-fix-preferred rollback (Section 14). No product scope, UX, permission, or business-rule change was made; the locked Product Blueprint (Version 1.3) is unaffected. |
