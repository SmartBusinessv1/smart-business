# SB-P-1.10 — Inventory Foundation

## Metadata

| Field                   | Value                      |
| ----------------------- | -------------------------- |
| Mission ID              | SB-P-1.10                  |
| Mission Name            | Inventory Foundation       |
| Domain                  | Business Operations Domain |
| Mission Status          | Approved                   |
| Blueprint Version       | 1.3                        |
| Product Blueprint Owner | Product Governance         |
| Builder Review          | Approved                   |
| Engineering Review      | Approved                   |
| Founder Approval        | Approved                   |
| Mission Control Status  | Approved                   |
| Last Updated            | 2026-07-21                 |

## Mission Snapshot

| Item                              | Details                                                                                                                                                                                                                                                                                                                   |
| --------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Business Domain                   | Business Operations                                                                                                                                                                                                                                                                                                       |
| Primary Users                     | Business Owner, Manager, Authorized Employees                                                                                                                                                                                                                                                                             |
| Business Priority                 | Critical Foundation                                                                                                                                                                                                                                                                                                       |
| Implementation Complexity         | High                                                                                                                                                                                                                                                                                                                      |
| Blueprint Status                  | Active                                                                                                                                                                                                                                                                                                                    |
| Depends On                        | SB-P-1.4 Bootstrap Governance Preparation, SB-P-1.9 Merchant Workflow Refinement                                                                                                                                                                                                                                          |
| Future Missions Depending On This | SB-P-1.11 — Product Catalog & Pricing, SB-P-1.13 — Purchase Workflow, SB-P-1.14 — Sales Workflow Enhancement, SB-P-1.16 — POS Integration Foundation, SB-P-1.17 — Financial Reports Foundation, SB-P-1.18 — Ask CFO Foundation, SB-P-1.21 — Smart Business Conversation Workspace, SB-P-1.22 — AI Conversation Foundation |

## 1. Mission Overview

### Purpose

Establish inventory as a first-class business asset within Smart Business by introducing a complete inventory truth model that accurately records stock ownership, stock movements, inventory history, and current stock visibility.

Inventory shall become a foundational capability upon which purchasing, sales, reporting, AI insights, POS synchronization, and future commerce features are built.

This mission creates the inventory engine—not a full inventory management system.

### Summary

SB-P-1.10 introduces the core inventory infrastructure required for Smart Business.

It establishes:

- Inventory records
- Stock ledger
- Inventory movement tracking
- Stock adjustments
- Opening stock
- Current stock calculation
- Inventory audit trail
- Real-time stock visibility

Every inventory change must be traceable to an approved business event or an authorized adjustment.

No inventory quantity shall change without an auditable reason.

### Mission Philosophy

Inventory is not simply a quantity.

Inventory represents business value.

Every stock movement reflects a real business event that should be understandable, traceable, and explainable to the merchant.

Smart Business shall always prioritize clarity over complexity.

## 2. Domain

### Business Operations Domain

This mission belongs to the Business Operations Domain, which establishes the operational backbone of Smart Business.

The Business Operations Domain governs the day-to-day activities that directly affect inventory, purchasing, selling, and business performance.

SB-P-1.10 serves as the foundational mission for all inventory-related capabilities within this domain.

### Relationship to Other Domains

This mission enables future capabilities across multiple domains.

#### People Domain

Inventory interacts with:

- Suppliers
- Customers
- Employees

#### Integration Domain

Future integrations:

- POS Bridge
- Barcode systems
- External inventory systems

#### AI & Intelligence Domain

Future AI capabilities will use the inventory truth model to answer business questions, detect anomalies, and provide recommendations without directly modifying inventory.

#### Commerce Domain

Future digital ordering and delivery workflows will consume inventory information to ensure stock-aware commerce experiences.

#### Platform Domain

The platform will expose inventory information consistently across dashboards, conversations, reports, and future interfaces.

## 3. Mission Objective

Create a reliable inventory foundation that enables Smart Business to accurately represent stock owned by a business through a transparent, auditable, and transaction-linked inventory model.

The mission shall:

- Introduce inventory as a core business entity.
- Record every stock movement through a permanent stock ledger.
- Calculate current stock from historical movements rather than manual quantity updates.
- Maintain complete inventory traceability.
- Provide merchants with confidence that inventory reflects real business activity.
- Serve as the authoritative inventory model for all future inventory-related capabilities.

This mission intentionally focuses on establishing the inventory truth model rather than advanced inventory management features.

## 4. Business Purpose

Small and medium merchants often struggle with inventory because stock records become disconnected from daily business operations.

Inventory is frequently updated manually, resulting in:

- Incorrect stock quantities
- Missing inventory history
- Unexplained adjustments
- Difficulty identifying stock losses
- Reduced confidence in inventory data

SB-P-1.10 addresses these challenges by ensuring that inventory is treated as a living record of business activity rather than a static list of quantities.

By linking stock changes to business events, merchants gain:

- Greater confidence in inventory accuracy
- Improved operational visibility
- Reduced manual reconciliation
- Better decision-making
- A trustworthy foundation for future automation and AI-assisted insights

The purpose of this mission is not to increase complexity but to make inventory understandable, dependable, and aligned with the way merchants already operate.

## 5. Product Truth Alignment

SB-P-1.10 reinforces the core Smart Business philosophy in the following ways:

### Humans Serving Humans

Inventory exists to help merchants understand their business more clearly, not to impose unnecessary operational complexity.

### AI Assistant, Not AI Judge

Artificial Intelligence may explain inventory, identify patterns, and recommend actions.

AI shall never modify inventory without explicit merchant approval.

Inventory ownership always remains with the merchant.

### Respect Existing Merchant Workflows

Smart Business enhances the merchant's existing inventory practices instead of forcing ERP-style processes.

Inventory terminology, workflows, and interactions should remain familiar to local businesses.

### WhatsApp-First, Not WhatsApp-Only

Although inventory may later be viewed or updated through conversational interfaces, the inventory model remains platform-independent and is not tied to any communication channel.

### Human Decision Ownership

Every inventory change must originate from a deliberate business action or an authorized adjustment.

The merchant always retains final authority over inventory records.

### Business Continuity First

Inventory architecture should prioritize uninterrupted merchant operations.

Future enhancements, integrations, or maintenance activities must preserve inventory integrity and minimize disruption to ongoing business operations.

## 6. User Value

Upon completion of SB-P-1.10, merchants will gain a trustworthy inventory foundation that accurately reflects the movement and availability of their stock.

Business owners will be able to:

- View current stock with confidence.
- Understand how inventory changed over time.
- Trace every stock movement to its originating business event.
- Identify discrepancies through a complete audit history.
- Record opening stock when onboarding to Smart Business.
- Perform authorized stock adjustments with documented reasons.
- Build future purchasing, sales, reporting, AI, and commerce workflows upon a reliable inventory foundation.

Managers and authorized employees will benefit from consistent inventory visibility based on permissions granted by the business owner.

Most importantly, merchants will no longer need to wonder "Why does the system say I have this quantity?" Every stock level will be explainable through the inventory ledger, creating trust in the system and confidence in day-to-day operations.

## 7. Core Deliverables

| Deliverable Name                  | Purpose                                                                                               | Business Value                                                                                           | Success Outcome                                                                                                                   |
| --------------------------------- | ----------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------------------- |
| Inventory Entity                  | Represent inventory owned by a business as a distinct business asset.                                 | Gives merchants a dependable inventory record that can support daily operations and future capabilities. | Each inventory record is clearly identified, belongs to one business, and can be understood independently of its stock movements. |
| Inventory Ledger                  | Maintain the permanent history of every change in inventory quantity.                                 | Gives merchants an explainable source of truth for stock.                                                | Every quantity change is represented by a traceable ledger entry and the ledger provides the complete basis for current stock.    |
| Stock Movement Recording          | Record stock increases and decreases as business events with meaningful context.                      | Connects inventory changes to the activity that caused them.                                             | No inventory quantity changes without a recorded movement and an auditable reason.                                                |
| Opening Stock                     | Allow a business to establish the stock available when inventory is first recorded in Smart Business. | Supports practical onboarding without losing the origin of the initial quantity.                         | Opening stock appears as a clearly identified inventory movement and forms part of the permanent history.                         |
| Stock Adjustments                 | Allow authorized users to correct inventory through documented adjustments.                           | Helps merchants reconcile discrepancies while preserving accountability.                                 | Every adjustment records its direction, quantity, reason, and responsible user without replacing prior history.                   |
| Current Stock Visibility          | Present the current stock quantity derived from inventory movements.                                  | Gives merchants confidence in the stock information used for daily decisions.                            | The displayed current quantity is consistent with the complete stock ledger.                                                      |
| Inventory History                 | Provide a chronological view of inventory activity.                                                   | Enables merchants to understand how and why stock changed over time.                                     | Users can trace each change to its movement details, reason, and related business event when one exists.                          |
| Inventory Search & Filtering      | Help users locate relevant inventory records and narrow the inventory view.                           | Reduces effort when working with many inventory records.                                                 | Users can find inventory using familiar identifying information and apply relevant filters without changing inventory data.       |
| Permission-Aware Inventory Access | Respect business ownership and the permissions granted to each user.                                  | Protects business information while supporting appropriate employee participation.                       | Users can view or adjust inventory only when authorized for that business and action.                                             |

## 8. Detailed Functional Scope

### Inventory Entity

An inventory entity represents stock owned and tracked by a business. It provides the stable business record to which opening stock, stock movements, adjustments, history, and current quantity belong.

Each inventory entity must remain understandable as a business asset and must not depend on a manually maintained current quantity.

### Inventory Lifecycle

Authorized users may create inventory entities.

Inventory entities with ledger history shall never be permanently deleted. When an inventory entity is no longer active, it may be archived or deactivated.

Archiving preserves the complete inventory history and must not alter stock history or current stock calculations. Archived inventory remains available to authorized users for historical reference.

### Inventory Identification

Each inventory entity must have a clear identity within its business so that merchants can distinguish it from other inventory records.

Identification must support familiar business information and must remain consistent wherever the inventory is viewed, searched, or referenced.

### Units of Measure

Every inventory entity must have one required base stock-counting unit that communicates how its quantity is counted.

The base stock-counting unit must be visible wherever quantity is presented. Stock movements and current stock for an inventory entity must use its base stock-counting unit consistently so that quantities remain understandable and comparable.

This mission does not introduce alternate units, unit conversions, packaging relationships, or selling-unit configuration. Those capabilities belong to future governed missions, beginning with SB-P-1.11 — Product Catalog & Pricing.

### Current Quantity

Current quantity represents the stock position produced by the complete history of inventory movements for an inventory entity.

Inventory quantities never change directly. A change to current quantity must always result from a recorded inventory movement.

### Opening Stock

Opening stock establishes the quantity available when an inventory entity begins being tracked in Smart Business.

Opening stock must be recorded as an identifiable inventory movement. It must remain visible in inventory history and must not bypass the stock ledger.

### Stock Ledger

The stock ledger is the permanent and authoritative record of inventory quantity changes.

Each ledger entry must communicate the inventory affected, whether stock increased or decreased, the quantity of the change, when the movement occurred, why it occurred, and who recorded or authorized it.

Ledger history must be preserved so that later activity does not erase or replace earlier movements.

### Stock Movement Types

Stock movements must distinguish the business nature of a quantity change. Supported movement types within this foundation include:

- Opening stock
- Stock increase
- Stock decrease
- Adjustment increase
- Adjustment decrease

Future governed workflows may originate stock movements through the same inventory truth model without changing the meaning or auditability of existing movement types.

### Stock Movement Reasons

Every stock movement must include a reason that explains why the quantity changed.

Reasons must be understandable to the merchant and appropriate to the movement type. Where a movement originates from another approved business event, that event provides the business context for the reason.

### Inventory History

Inventory history must present stock movements in chronological order and allow users to understand the progression from opening stock to the current quantity.

History must retain the movement type, direction, quantity, reason, timing, responsible user, and related business event when one exists.

### Inventory Adjustment

An inventory adjustment allows an authorized user to record a correction when physical stock and recorded stock differ or when another legitimate correction is required.

An adjustment must record whether stock increases or decreases and must include a documented reason. It creates a new inventory movement and must never rewrite, delete, or conceal previous movements.

### Inventory Movement Corrections

Posted inventory movements shall not be silently edited or silently deleted.

Corrections shall occur through a linked reversal or compensating inventory movement. Both the original movement and the correcting movement remain permanently visible.

Correction permissions remain under business-owner control, and inventory audit history always remains complete.

### Inventory Audit Trail

The inventory audit trail must make every quantity change explainable from its origin through its effect on current stock.

The audit trail must preserve who performed or authorized an action, when it occurred, what changed, why it changed, and any linked business event. Inventory always remains fully auditable.

### Current Stock Calculation

Current stock is derived from the stock ledger by applying all recorded increases and decreases for an inventory entity.

The ledger is authoritative. Current stock must not be maintained through direct manual quantity updates or through any separate source of inventory truth.

### Negative Stock Policy

Smart Business may allow negative stock only for an authorized user. A clear warning must be presented before the user confirms the movement.

Negative stock shall never occur silently. The resulting movement remains fully auditable, and inventory records with negative stock must be clearly identifiable.

### Inventory Search

Users must be able to search inventory using familiar identifying information associated with an inventory entity.

Search must help users reach the relevant inventory record without changing the underlying inventory information.

### Inventory Filters

Users must be able to narrow inventory views using relevant inventory characteristics and stock status.

Filters must be understandable, removable, and must not alter inventory records or quantities.

### Inventory Summary

The inventory experience must provide a clear summary of the inventory records visible to the user and their current stock position.

Summary information must be based on the same inventory entities and ledger-derived quantities shown in inventory detail and history views.

### Inventory Visibility

Inventory information must be presented consistently wherever an authorized user views it.

Current quantity, unit of measure, and relevant inventory identity must remain clear. Visibility must not create a second or conflicting representation of stock truth.

### Permissions

Inventory access must follow the permissions granted by the business owner.

Users may view inventory, record opening stock, or perform adjustments only when authorized for the relevant action. A lack of permission must prevent the action without exposing inventory belonging to another business.

### Business Ownership

Every inventory entity and inventory movement must belong to the business that owns the stock.

Business ownership must remain clear throughout inventory history and must be preserved when a movement is linked to another business event.

### Transaction Linking

When a stock movement originates from an approved business transaction or event, the inventory history must retain a clear link to that origin.

Transaction linking must make the resulting stock change explainable without allowing the originating event to bypass the inventory ledger.

### Business Isolation

Inventory records, movements, quantities, history, and summaries for one business must remain isolated from every other business.

Users must only access inventory information for businesses in which they hold the required permission.

### Data Integrity Rules

The Inventory Truth Model must preserve the following rules:

- Inventory quantities never change directly.
- Every quantity change must originate from an inventory movement.
- Current stock is derived from the complete stock ledger.
- Every movement belongs to one inventory entity and one business.
- Every movement records a direction, quantity, reason, timing, and responsible user or originating business event.
- Opening stock and adjustments remain part of permanent inventory history.
- Earlier movements are not replaced or concealed by later corrections.
- Inventory always remains fully auditable.
- Business isolation and permission requirements apply to every inventory action and view.

## 9. UI / UX Expectations

The inventory experience must remain human-first, simple, familiar, and aligned with the way merchants already understand stock. It should require a low learning curve and respect existing merchant workflows without introducing unnecessary operational steps.

### Inventory Creation Experience

Inventory creation should be simple, use familiar terminology, and require only the information needed to establish the inventory identity and select its base stock-counting unit.

The experience should provide clear opening stock guidance while keeping data entry minimal. Before saving, the user should be able to confirm the inventory identity, base unit, and opening stock information clearly.

### Inventory List

The inventory list should help merchants scan their inventory and understand current stock at a glance. Each entry should present enough familiar identifying information, current quantity, and unit of measure to distinguish it without opening the detail view.

The list should support efficient movement into inventory details while keeping common inventory information easy to compare.

### Inventory Detail View

The inventory detail view should present the identity of the inventory, its current quantity, unit of measure, and relevant history in a clear order.

Users should be able to understand the current stock position and reach its supporting history without having to interpret technical information.

### Stock History View

The stock history view should present movements in a clear chronological sequence. Each movement should communicate whether stock increased or decreased, the quantity, reason, timing, responsible user, and related business event when available.

The experience should help a merchant answer why a stock quantity changed without requiring specialist knowledge.

### Stock Adjustment Experience

The stock adjustment experience should make the intended direction and quantity of the correction clear before it is recorded.

Users should provide a meaningful reason and have an opportunity to review the adjustment. The experience should reinforce that an adjustment adds an auditable movement rather than directly replacing the current quantity.

### Opening Stock Experience

The opening stock experience should support merchants as they begin tracking existing inventory in Smart Business.

It should make the inventory identity, opening quantity, and unit of measure easy to confirm and should clearly communicate that opening stock becomes the first recorded movement in inventory history.

### Empty States

Empty states should clearly reflect whether no inventory exists, no movements have been recorded, or no records match the current search or filters.

Where the user has permission, an empty state should provide a clear path to the relevant next action without implying that inventory data already exists.

### Search Experience

Search should be easy to find and should respond to familiar inventory-identifying information. Results should make it clear why an inventory record matches and should allow the user to return to the full list easily.

### Filtering Experience

Filters should use familiar business language and should make active selections visible. Users should be able to apply, combine, and clear relevant filters without losing or modifying inventory information.

### Permission Behaviour

The interface should present only the inventory information and actions available to the user under their granted permissions.

Unavailable actions should not be represented as successful or leave the user uncertain about whether inventory changed. Permission boundaries should be communicated clearly and respectfully.

### Mobile Experience

The mobile experience should prioritize quick scanning, clear quantities, simple search and filtering, and focused inventory actions.

Information and controls should remain readable and usable on smaller screens without hiding the context required to understand or confirm an inventory movement.

### Desktop Experience

The desktop experience should support efficient scanning, comparison, search, filtering, and movement between inventory summaries, details, and history.

The additional space should improve visibility and workflow efficiency without introducing unnecessary complexity or a different inventory truth.

### Accessibility Expectations

Inventory information and actions should be understandable and operable for users with differing abilities and levels of digital familiarity.

The experience should use clear language, meaningful labels, readable content, visible focus, sufficient contrast, and interaction patterns that do not rely on color alone. Inventory actions and movement outcomes should be perceivable and understandable across supported input methods.

## 10. Business Rules

1. Every inventory entity, inventory movement, and stock quantity belongs to one business. Business ownership must remain preserved throughout the complete inventory history.
2. Each inventory entity must have a clear and stable identity within its business and one required base stock-counting unit.
3. Stock represented by an inventory entity is owned by the business to which that inventory entity belongs.
4. Only an authorized user may create an inventory entity or record an inventory movement. Authorization must reflect the permissions controlled by the business owner.
5. Opening stock must be recorded as an opening stock movement. It must not be applied as a direct change to an inventory quantity.
6. An adjustment must be recorded as a new adjustment movement with its direction, quantity, reason, timing, and responsible user preserved.
7. A posted movement must not be silently edited or deleted. A correction must use a linked reversal or compensating movement that remains visible with the original movement.
8. Inventory history must remain permanent and chronological. Later activity must not replace, conceal, or rewrite earlier movements.
9. The stock ledger is the authoritative source of inventory quantity truth.
10. Current stock must be calculated from all applicable ledger movements for the inventory entity. Inventory quantities never change directly.
11. Every quantity change must originate from a ledger movement that explains what changed and why.
12. Inventory information for one business must remain isolated from every other business in all actions, views, histories, and summaries.
13. Permission requirements must be enforced for inventory creation, viewing, opening stock, adjustments, corrections, and historical access.
14. Inventory entities with ledger history must not be permanently deleted. Archived or deactivated inventory must preserve its history, remain available for authorized historical reference, and continue to support an unchanged current stock calculation.
15. Negative stock may occur only through an action by an authorized user after a clear warning and confirmation. It must never occur silently, must remain fully auditable, and must be clearly identifiable.
16. Every inventory action must preserve a complete audit record of the responsible user or originating business event, timing, reason, and effect on stock.
17. Future governed capabilities must use the same inventory entities and ledger movements without creating a separate source of inventory truth or weakening existing history, ownership, permissions, or audit integrity.

## 11. Out of Scope

SB-P-1.10 intentionally does not implement:

- Product catalog management
- Pricing
- Barcode management
- Purchase workflow
- Sales workflow
- Supplier management
- Customer management
- POS synchronization
- Financial reporting
- AI recommendations
- Forecasting
- Inventory reservations
- Batch tracking
- Expiry management
- Manufacturing
- Multi-warehouse inventory
- Stock transfer
- Commerce inventory allocation

These capabilities belong to future governed missions. Their exclusion preserves SB-P-1.10 as the Inventory Foundation and does not authorize or define their future scope.

## 12. Dependencies

### Upstream Dependencies

SB-P-1.10 depends on the following approved prerequisite missions:

- SB-P-1.4 — Bootstrap Governance Preparation
- SB-P-1.9 — Merchant Workflow Refinement

These missions establish the governed product foundation and merchant workflow context upon which the Inventory Foundation proceeds.

### Downstream Dependencies

The following roadmap missions consume or build upon the Inventory Foundation:

- SB-P-1.11 — Product Catalog & Pricing
- SB-P-1.13 — Purchase Workflow
- SB-P-1.14 — Sales Workflow Enhancement
- SB-P-1.16 — POS Integration Foundation
- SB-P-1.17 — Financial Reports Foundation
- SB-P-1.18 — Ask CFO Foundation
- SB-P-1.21 — Smart Business Conversation Workspace
- SB-P-1.22 — AI Conversation Foundation

SB-P-1.10 provides these future capabilities with a consistent inventory identity, authoritative stock ledger, ledger-derived current stock, complete history, business ownership, permission boundaries, and auditability. Downstream missions must preserve this inventory truth rather than establish competing stock records.

## 13. Risks & Mitigations

| Risk                        | Description                                                                          | Business Impact                                                                                        | Product Mitigation                                                                                                                                      |
| --------------------------- | ------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Incorrect stock             | Inventory movements may not reflect the business event or physical stock accurately. | Merchants may make decisions using an unreliable stock position and lose confidence in Smart Business. | Derive current stock only from traceable ledger movements and provide authorized adjustments with documented reasons.                                   |
| Unauthorized adjustments    | A user may attempt to change stock without the required authority.                   | Stock truth and business-owner control may be compromised.                                             | Enforce business-owner-controlled permissions for adjustments and preserve the responsible user in the audit history.                                   |
| Poor merchant understanding | Inventory language or behaviour may be unclear to merchants.                         | Users may avoid the inventory experience, record incorrect activity, or misunderstand current stock.   | Use familiar terminology, clear movement reasons, guided opening stock and adjustment experiences, and explainable history.                             |
| Audit failure               | Inventory changes may lack a complete or understandable history.                     | Merchants may be unable to explain discrepancies or trust past records.                                | Preserve every posted movement, require corrections through linked movements, and retain reasons, timing, responsibility, and business-event links.     |
| Business isolation failure  | Inventory belonging to one business may be exposed to another business.              | Confidential business information and stock ownership may be compromised.                              | Apply business ownership and isolation to every inventory entity, movement, action, view, history, and summary.                                         |
| Data inconsistency          | Different views or future capabilities may present conflicting stock quantities.     | Merchants may encounter multiple versions of inventory truth.                                          | Keep the stock ledger authoritative and require every view and downstream capability to use the same ledger-derived current stock.                      |
| Negative stock misuse       | Negative stock may be created without sufficient awareness or authority.             | Inventory may become misleading and operational problems may be concealed.                             | Restrict negative stock to authorized users, warn before confirmation, identify negative records clearly, and retain the movement in the audit history. |

## 14. Success Criteria

SB-P-1.10 is successful when:

- Every inventory entity has a clear identity, business owner, and base stock-counting unit.
- Every inventory quantity change is represented by an explainable ledger movement.
- Current stock is always derived from the complete stock ledger and never changed directly.
- Opening stock, adjustments, corrections, and negative stock remain visible and auditable.
- Inventory history is preserved without silent editing, deletion, or replacement of posted movements.
- Business isolation and business-owner-controlled permissions govern every inventory action and view.
- Authorized merchants can find inventory, understand current stock, and explain how it changed using familiar business language.
- Archived inventory preserves its stock history and remains available for authorized historical reference.
- Inventory provides one consistent source of stock truth for approved downstream missions.
- The Inventory Foundation remains understandable without requiring merchants to learn complex inventory-management processes.

## 15. Acceptance Criteria

Product Governance may accept SB-P-1.10 when all of the following are demonstrated at the product level:

- [ ] An authorized user can create an inventory entity with a clear identity and required base stock-counting unit.
- [ ] Each inventory entity belongs to the correct business and remains isolated from other businesses.
- [ ] Opening stock is recorded as an identifiable ledger movement and appears in inventory history.
- [ ] Current stock matches the result of the complete ledger history and cannot be changed directly.
- [ ] An authorized user can record an increase or decrease with a clear quantity and reason.
- [ ] An authorized user can record an adjustment without replacing or concealing earlier movements.
- [ ] A posted movement can be corrected only through a linked reversal or compensating movement, with both movements remaining visible.
- [ ] Inventory history presents movement direction, quantity, reason, timing, responsible user, and related business event when one exists.
- [ ] Inventory search helps an authorized user find records using familiar identifying information.
- [ ] Inventory filters narrow the visible inventory without changing inventory data.
- [ ] Permission boundaries prevent unauthorized inventory viewing, creation, adjustment, correction, and historical access.
- [ ] Archived or deactivated inventory preserves its full history and remains available for authorized historical reference.
- [ ] Negative stock requires authorization, a clear warning, and confirmation, and the resulting inventory remains clearly identifiable.
- [ ] Inventory list, detail, history, creation, opening stock, and adjustment experiences use clear and familiar merchant language.
- [ ] Mobile and desktop experiences preserve the context needed to understand inventory quantities and movements.
- [ ] Inventory actions and outcomes meet the stated accessibility expectations.
- [ ] Every quantity change remains explainable through a complete audit trail.
- [ ] All inventory views and summaries present a consistent ledger-derived stock truth.

## 16. Future Evolution

The Inventory Foundation establishes continuity for future governed missions while preserving one authoritative stock truth.

### Product Catalog

Product Catalog & Pricing can connect product identity, pricing, selling information, and future unit capabilities to the stable inventory entity without replacing its ledger or current stock calculation.

### Purchasing

Purchase Workflow can create traceable stock increases linked to approved purchase events while preserving the inventory ledger as the authority for quantity changes.

### Sales

Sales Workflow Enhancement can create traceable stock decreases linked to approved sales events without directly changing inventory quantities.

### POS

POS Integration Foundation can synchronize approved external business events through the same inventory movement model while preserving ownership, isolation, permissions, and audit history.

### Reports

Financial Reports Foundation can consume ledger-derived inventory information and movement history as a consistent input to governed reporting capabilities.

### Ask CFO

Ask CFO Foundation can explain inventory information, identify patterns, and advise merchants using the inventory truth model without directly modifying inventory.

### AI Conversation

Smart Business Conversation Workspace and AI Conversation Foundation can help authorized users understand inventory, locate history, and prepare actions while preserving human confirmation and decision ownership.

### Commerce

Future commerce capabilities can consume governed inventory information for stock-aware experiences and allocation decisions without establishing a separate inventory truth.

All future evolution must preserve the Inventory Foundation's ledger authority, historical continuity, business ownership, permission boundaries, and explainability.

## 17. Product Philosophy Summary

The Inventory Foundation exists to help merchants understand and trust the stock they own. It follows Humans Serving Humans by making inventory clearer and more dependable without imposing unnecessary complexity.

Smart Business remains an AI Assistant, Not AI Judge. AI may help explain inventory, identify patterns, and support decisions, but it must not take inventory ownership away from the merchant or modify inventory without explicit approval.

Human Decision Ownership remains central. Inventory actions arise from deliberate business activity or authorized correction, and the merchant retains final authority over permissions and decisions.

Inventory must remain explainable. Every quantity is supported by a permanent movement history that answers what changed, why it changed, when it changed, and who or what business event caused it.

The experience respects familiar merchant workflows, uses simple business language, and maintains a low learning curve. Simplicity supports trust, and trust allows the Inventory Foundation to remain sustainable as future governed capabilities grow around it.

## 18. Blueprint Change Log

| Version  | Description                              |
| -------- | ---------------------------------------- |
| Draft 1A | Metadata, Mission Overview, Sections 1–6 |
| Draft 1B | Sections 7–9                             |
| Draft 1C | Sections 10–19                           |

## 19. Governance History

- Draft 1A approved by Product Governance.
- Draft 1B approved by Product Governance.
- Product Blueprint Version 1.0 approved by Product Governance.
- Version 1.1 Builder Review completed and approved.
- Version 1.2 Engineering Review completed and approved.
- Version 1.3 Founder Approval completed and approved.
- SB-P-1.10 Product Blueprint is LOCKED.

## 20. Engineering Review

This section records the Engineering Review of Product Blueprint SB-P-1.10, building on the Lovable Builder Review. It reflects an engineering feasibility assessment only. Sections 1–19 remain Product Governance approved and unchanged. No database schema, API contract, RLS policy, or implementation code is defined here.

### Overall Engineering Feasibility

The blueprint is engineering-feasible within the approved Smart Business architecture.

- The mission can be implemented without violating ledger authority (Section 8, Data Integrity Rules), business isolation (Sections 8, 10), permission scope (Sections 8, 9, 10), audit integrity (Sections 8, 10), or human decision ownership (Section 5).
- The domain shape — an entity with a derived quantity plus an append-only movement ledger — is a well-understood pattern and is consistent with the existing application architecture referenced by the Builder Review (authenticated shell, protected routing, established workflow and confirmation patterns from SB-P-1.7–1.9).
- No blueprint requirement implies a need for a new architectural pattern, external system, or deviation from the current Supabase-based stack.

**The blueprint is engineering-feasible.**

### Domain Model Readiness

Sections 7 and 8 provide sufficient clarity to model the domain at a boundary level, without prescribing schema:

- **Inventory entity** — identity, business ownership, base unit: clearly bounded (Sections 8 "Inventory Entity", "Inventory Identification", "Units of Measure").
- **Base stock-counting unit** — a single required unit per entity, no conversions in scope: clearly bounded (Section 8 "Units of Measure").
- **Inventory movement** — direction, quantity, reason, timing, responsible user, optional event link: clearly bounded (Section 8 "Stock Ledger", "Stock Movement Types", "Stock Movement Reasons").
- **Opening stock** — a distinct, identifiable movement type: clearly bounded (Section 8 "Opening Stock").
- **Adjustment** — a distinct movement type with direction and mandatory reason: clearly bounded (Section 8 "Inventory Adjustment").
- **Correction / reversal or compensating movement** — required to be linked to the original, both remaining visible: clearly bounded at the behavioural level (Section 8 "Inventory Movement Corrections"); the specific link representation is an implementation decision, not a domain-boundary gap.
- **Current stock** — explicitly derived, never stored as directly mutable truth: clearly bounded (Section 8 "Current Quantity", "Current Stock Calculation").
- **Archived inventory** — preserves history and current-stock calculation, remains available for authorized historical access: clearly bounded (Section 8 "Inventory Lifecycle").
- **Transaction-linked movements** — movements may carry an optional link to an originating business event: clearly bounded (Section 8 "Transaction Linking").
- **Responsible user / originating event** — every movement must record one or the other: clearly bounded (Section 8 "Stock Ledger", Section 10 Rule 16).

Domain boundaries are sufficiently clear to proceed to schema design. No product clarification is required for domain modelling.

### Ledger Integrity Review

The following ledger-integrity constraints are feasible to enforce and must be protected during implementation:

- **No direct quantity mutation** — feasible to enforce by never exposing a writable current-quantity field; current stock is always computed from movements (Section 8 "Current Stock Calculation", Section 10 Rule 10).
- **Every stock change through a movement** — feasible to enforce structurally, provided no code path is permitted to alter stock outside the movement-creation path.
- **Ledger-derived current stock** — feasible; the specific derivation strategy (real-time aggregation vs. maintained running balance) is an implementation decision that must preserve ledger authority regardless of approach chosen.
- **Permanent movement history** — feasible to enforce by disallowing update/delete on posted movement records at the data-access layer, not only in application logic.
- **Linked correction movements** — feasible; requires that reversal/compensating movements always reference the movement they correct, and that both remain independently retrievable.
- **Original movement preservation** — feasible, provided corrections are additive-only.
- **Complete auditability** — feasible; depends on consistently capturing responsible user, timing, reason, and event link on every movement (Section 10 Rule 16).

**Constraint to protect:** any future governed mission (Section 16) that writes stock movements must go through the same movement-creation path as this mission establishes — no downstream mission may introduce a parallel stock-mutation route.

### Business Isolation and Permissions

- **Business-scoped records** — every inventory entity and movement belongs to exactly one business (Section 8 "Business Ownership", Section 10 Rules 1, 12); this maps cleanly to a business-scoping model consistent with prior missions.
- **Permission-aware reads and writes** — viewing, opening-stock recording, and adjustments are each independently gated by owner-granted permission (Section 8 "Permissions", Section 10 Rule 13); this requires permission checks at each of those three action boundaries, not a single coarse check.
- **Owner-controlled adjustment and correction authority** — correction permissions remain business-owner controlled (Section 8 "Inventory Movement Corrections"); distinct from general adjustment permission and must be independently enforceable.
- **Employee restrictions** — implied by "authorized user" language throughout Section 8 and Rule 4; the blueprint does not enumerate specific employee permission tiers, which is expected at this stage and is not a gap requiring clarification.
- **Cross-business isolation** — a lack of permission must prevent an action without revealing another business's inventory exists (Section 8 "Permissions"); this is a testable non-disclosure requirement, not just an access-denial requirement.
- **Historical access to archived inventory** — remains permission-gated the same as active inventory (Section 8 "Inventory Lifecycle").

Supabase Row-Level Security is a natural fit for business-scoped and permission-scoped access at the data layer, consistent with the existing Supabase Architecture Framework. No RLS policies are defined here; the review confirms the model does not require any access pattern RLS cannot express (business-scoped rows plus permission-scoped actions).

### Transaction and Event Linking

- The blueprint supports an optional link from a movement to an approved originating business event (Section 8 "Transaction Linking", Section 12 Downstream Dependencies) without requiring the originating event's structure to be defined now.
- This is compatible with future Purchases, Sales, Returns, POS events, manual adjustments, and opening stock, provided each future mission creates movements through the same movement-creation path rather than writing stock changes directly.
- Section 10 Rule 17 explicitly requires future governed capabilities to use the same inventory entities and ledger movements without establishing a competing source of truth — this is the correct constraint to carry forward and should be treated as a hard boundary in the technical design of this mission (e.g., the movement-creation interface should not be mission-specific).
- **Confirmed:** linked events cannot bypass the inventory ledger under the blueprint as written, provided the movement-creation path is the single entry point for stock changes referenced above under Ledger Integrity Review.

### Correction and Reversal Model

- **Preventing silent edits/deletion** — feasible; requires posted movements to be immutable at the data-access layer (Section 8 "Inventory Movement Corrections", Section 10 Rule 7).
- **Reversal/compensating movements** — feasible; the blueprint specifies the behaviour (linked, both visible) without prescribing the mechanism, which is appropriately left to engineering design.
- **Linking original and correcting movements** — feasible; requires a movement to be able to reference another movement it corrects.
- **Full visibility of both** — feasible; both must appear in history views without either being hidden or superseded.
- **Owner-controlled permissions** — feasible; correction authority is a distinct permission from adjustment authority (see Business Isolation and Permissions above).

No ambiguity requiring Product clarification was identified in the correction and reversal model. The blueprint is intentionally silent on the exact reversal mechanism (e.g., a signed compensating movement vs. a dedicated correction-type movement); that is an engineering design decision within the stated behavioural constraints, not a blueprint gap.

### Negative Stock Engineering Considerations

- **Detecting a movement that would create negative stock** — feasible; requires evaluating the projected resulting quantity before a movement is committed.
- **Warning before confirmation** — a UI/UX concern already addressed by the Builder Review; engineering must ensure the projected-quantity check is available to support that warning before commit.
- **Restricting authorization** — feasible; negative stock is permitted only for an authorized user (Section 8 "Negative Stock Policy", Section 10 Rule 15), which is an additional, distinct permission from general adjustment authority.
- **Preserving the resulting movement** — feasible; a movement that results in negative stock is not treated differently from any other movement once posted (append-only, fully auditable).
- **Clearly identifying negative-stock inventory** — feasible at the data layer; current stock being negative is itself the identifying condition, requiring no separate flag.
- **Preventing silent negative stock** — feasible provided the pre-commit check and authorization gate above are both enforced server-side, not only in client UI (a client-only check would not satisfy Rule 15's "never occur silently" requirement against a direct API call).

### Archival and Historical Integrity

- **Preventing deletion of inventory with ledger history** — feasible; inventory entities with movements must not support hard delete (Section 8 "Inventory Lifecycle", Section 10 Rule 14).
- **Archiving or deactivating inventory** — feasible as a status flag on the entity rather than a data-removing operation.
- **Preserving history and current-stock calculation** — feasible provided archival never alters or removes movement rows.
- **Authorized historical access** — feasible; archived inventory remains permission-gated, not publicly exposed once archived.
- **Excluding archived inventory from active workflows where appropriate** — the blueprint leaves "where appropriate" to future workflow-specific missions (e.g., Purchase Workflow, Sales Workflow); this mission only needs to ensure archived status is queryable and does not affect ledger correctness.

### Performance and Scalability Considerations

The following must be considered during engineering design, without prescribing a solution now:

- **Ledger growth** — movement history is permanent and unbounded (Section 8 "Stock Ledger"); the Builder Review already flags Stock History UI scalability, and the same growth applies to the current-stock derivation query.
- **Current-stock calculation** — if computed by aggregating all movements per request, query cost grows with ledger size; a maintained running balance is a reasonable future optimization but is not required for this mission and must not be introduced prematurely at the expense of ledger authority.
- **Inventory lists and business summaries** — must remain performant as the number of inventory entities and movements per business grows; standard indexing and pagination concerns apply and should be addressed in engineering design, not in this blueprint.
- **Search and filters** — must not require scanning full ledger history per request; filtering should operate against entity-level and current-stock-level attributes where possible.
- **Long-running merchants and future POS event volume** — the blueprint anticipates high-frequency future movement creation (Section 16 "POS"); the movement-creation path should be designed with that volume in mind even though POS itself is out of scope here.
- **Future reporting and AI consumption** — Section 16 anticipates Financial Reports and Ask CFO consuming ledger-derived data; read-path design should not assume a single UI consumer.

### Frontend–Backend Contract Readiness

Section 9, combined with the Builder Review's Component Readiness, gives sufficient clarity to later define (not now) the data contracts for:

- Inventory list data (identity, current quantity, unit — Section 9 "Inventory List").
- Inventory detail data (identity, current quantity, unit, history entry point — Section 9 "Inventory Detail View").
- Stock history data (type, direction, quantity, reason, timing, responsible user, linked event — Section 8 "Inventory History").
- Adjustment inputs (direction, quantity, reason — Section 8 "Inventory Adjustment").
- Opening stock inputs (identity, quantity, unit — Section 8 "Opening Stock").
- Correction inputs (reference to original movement, direction/quantity, reason — Section 8 "Inventory Movement Corrections").
- Negative-stock warnings (projected resulting quantity, confirmation — Section 8 "Negative Stock Policy").
- Permission-aware actions (per-action authorization state — Section 8 "Permissions").
- Error and success states (Section 9 "Permission Behaviour": unavailable actions must not appear to succeed).

No API specification is created here. The blueprint provides enough behavioural clarity for these contracts to be defined during implementation design.

### Testability

The blueprint can be translated into engineering and QA test cases. Test-readiness is confirmed for:

- **Ledger correctness** — current stock equals the sum of all movements for an entity at any point in time.
- **Opening stock** — recorded as a movement, appears in history, contributes to current stock.
- **Adjustments** — direction, quantity, and reason are preserved; prior movements remain unchanged.
- **Corrections** — original and correcting movement both remain visible and linked; no update/delete path exists on posted movements.
- **Negative stock** — blocked for unauthorized users; requires confirmation and warning for authorized users; never occurs without an explicit movement.
- **Permissions** — view, opening-stock, adjustment, and correction actions are independently testable against permission state; unauthorized access does not disclose other-business data.
- **Business isolation** — no cross-business data leakage in any list, detail, history, or summary view.
- **Archiving** — archived inventory preserves history and current stock; remains accessible to authorized users; excluded from active-creation workflows.
- **Search and filters** — narrow results without mutating underlying data.
- **Audit history** — every movement records responsible user or originating event, timing, reason, and effect on stock.
- **Responsive UI behaviour and accessibility** — covered by the Builder Review; testable as UI-level acceptance criteria once implementation begins.

### Engineering Risks

| Risk | Impact | Engineering Mitigation Direction |
| --- | --- | --- |
| Derived-stock consistency | Current stock could drift from ledger truth if any code path bypasses the movement-creation route. | Enforce a single movement-creation path at the data-access layer; disallow direct quantity writes at the database level, not only in application code. |
| Concurrency | Two simultaneous movements against the same inventory entity (e.g., concurrent adjustment and correction) could race, producing an incorrect projected-quantity check for negative-stock detection. | Use database-level transactional guarantees when evaluating projected quantity and committing a movement, rather than relying on a client-side or read-then-write check. |
| Duplicate movement creation | A retried or double-submitted request (e.g., adjustment form resubmission) could create two movements for one intended action. | Design the movement-creation path to support idempotent submission from the outset, even though no external integration exists yet in this mission. |
| Idempotency for future integrations | Future POS or purchase/sales integrations (Section 16) may retry event delivery, risking duplicate movements if idempotency is not designed in now. | Establish an idempotency-key or equivalent pattern on the movement-creation path so downstream missions inherit safe-retry behaviour rather than each reinventing it. |
| RLS misconfiguration | Incorrect or incomplete RLS policies could expose one business's inventory to another, or allow an unauthorized action to succeed. | Cover business-isolation and permission-boundary test cases (see Testability) before RLS policies are considered implementation-complete; treat RLS as security-critical, not incidental. |
| Correction-link integrity | A correcting movement could be created without a valid, retrievable reference to the movement it corrects, weakening auditability. | Require the link to be enforced at the data layer (e.g., a required foreign-key-style reference), not only validated in application logic. |
| Ledger query performance | Current-stock and history queries may degrade as ledger size grows per business over time. | Plan for appropriate indexing on entity and business scope from the outset; revisit aggregation strategy if growth data shows it is warranted, without weakening ledger authority. |
| Archived-record handling | Archived inventory could be inadvertently excluded from history/audit queries, or inadvertently included in active-creation workflows. | Treat archived status as a filter condition on read paths, not as a change to the underlying data, and test both inclusion (historical access) and exclusion (active workflows) paths explicitly. |
| Timezone consistency | Movement timing recorded or displayed inconsistently across timezones could misrepresent the chronological order merchants rely on for explainability. | Store movement timestamps in a single canonical timezone (UTC) and handle display conversion at the presentation layer only. |
| Event-link integrity | A movement claiming a link to an originating business event could reference an event that does not exist or does not belong to the same business. | Validate event links at creation time against the same business scope as the movement itself. |
| Migration safety | Introducing the inventory schema is a net-new addition with no prior inventory data to migrate, but future schema evolution (e.g., new movement types) must not break existing ledger interpretation. | Design movement-type and reason representations to be extensible (e.g., without requiring destructive schema changes) for future governed missions anticipated in Section 16. |
| Audit metadata completeness | A movement recorded without a responsible user or originating event reference would break Rule 16's audit completeness requirement. | Make responsible-user-or-event a required field at the data layer, not an optional one left to application-level discipline. |

### Engineering Recommendation

**Ready for Founder Approval.**

The blueprint is engineering-feasible as written. Domain boundaries are sufficiently clear for schema design, ledger-integrity and business-isolation constraints are enforceable within the existing Supabase-based architecture, and the correction, negative-stock, and archival behaviours specified in Sections 1–19 can be implemented without weakening ledger authority, auditability, or business-owner permission control. No engineering concern identified in this review requires a change to Sections 1–19; all identified risks have a stated mitigation direction to be carried into implementation design.

## 21. Engineering Questions, Risks & Recommendations

This section captures engineering observations without altering Product Governance decisions in Sections 1–19.

### Engineering Questions

> No Product clarification required.

The Product Blueprint, together with the Builder Review, provides sufficient clarity for engineering to proceed to implementation design. Remaining decisions (e.g., the specific reversal-movement mechanism, current-stock derivation strategy, or idempotency-key format) are engineering design choices within the blueprint's stated behavioural constraints, not open product questions.

### Engineering Risks

The most significant engineering risks identified in Section 20, carried forward for implementation planning:

- Derived-stock consistency depends on a single, enforced movement-creation path with no bypass route.
- Concurrent movement creation against the same inventory entity requires transactional handling to keep negative-stock detection and current-stock calculation correct.
- Duplicate movement creation and future integration retries require idempotency to be designed in from the start, not added later.
- RLS correctness for business isolation and per-action permissions is security-critical and must be explicitly tested, not assumed from row ownership alone.
- Correction links and audit metadata (responsible user or originating event) must be enforced at the data layer to guarantee the auditability Sections 8 and 10 require.

### Engineering Recommendations

- **Repository sequencing.** Implement the movement-creation path and current-stock derivation before any UI surface that depends on them, so downstream missions (Section 12 Downstream Dependencies) inherit a stable inventory truth model from the start.
- **Domain boundary protection.** Expose a single internal interface for creating stock movements; do not allow any future mission (including this one's own opening-stock and adjustment flows) to write movements through separate code paths.
- **RLS review.** Treat RLS policy design and testing for business isolation and per-action permissions (view, opening-stock, adjustment, correction) as a dedicated review step before this mission is considered implementation-complete.
- **Ledger invariants.** Enforce immutability of posted movements and the required responsible-user-or-event field at the data layer, not only in application code, so the invariants in Section 10 cannot be silently violated by a future code change.
- **Audit requirements.** Confirm that timestamp storage is canonicalized (e.g., UTC) before the first movement is written, since retrofitting timezone consistency into existing ledger history would conflict with the "earlier movements are not replaced or concealed" rule.
- **Idempotency preparation.** Design the movement-creation path with retry-safety in mind now, even though no external integration exists yet, since Section 16 anticipates POS and purchase/sales integrations that will depend on it.
- **Query strategy review.** Defer current-stock aggregation-versus-running-balance decisions to implementation design, but capture expected data volume assumptions so the choice is revisited deliberately rather than accidentally as usage grows.
- **Testing strategy.** Prioritize automated test coverage for ledger correctness, correction-link integrity, negative-stock authorization, and business isolation, since these are the invariants most likely to be silently broken by a future unrelated change.
- **Migration safety.** Design movement-type and reason representations to be extensible for future governed missions (Section 16) without requiring destructive schema changes later.
- **Observability.** Consider logging or metrics on movement-creation failures and rejected negative-stock attempts, so operational issues in the ledger are visible before merchants report incorrect stock.
- **Rollout controls.** No rollout-specific product behaviour is defined in the blueprint; standard repository release practices are sufficient for this mission's initial implementation.

