# Smart Business — Global Product Completion View

## Purpose

This file prevents narrow implementation missions from becoming accidental product scope decisions.

It shows the **complete committed Smart Business capability set** recovered and reconciled through the Founder-origin historical mission, while keeping product commitment separate from implementation, verification and release state.

A feature listed as `BUILD NOW` is committed product scope. It is **not** automatically implemented, verified, pilot-ready or released.

---

# Status Vocabulary

## Product Commitment

- `BUILD NOW`
- `BUILD LATER`
- `ADD-ON + BUILD NOW`
- `SEPARATE PRODUCT`
- `REJECT`

## Product Definition State

- `MATURE CONTRACT` — durable current feature contract exists.
- `RECONCILED EXISTING CONTRACT` — existing mature/planning-depth contract remains, controlled by the Final Reconciliation Register where historical detail conflicts.

## Implementation State

This historical-reconciliation mission did **not** perform a full runtime implementation audit of every feature.

Therefore this view uses:

- `FOUNDATION / PRIOR IMPLEMENTATION EXISTS` only where prior accepted Phase 1 missions clearly established a relevant foundation;
- `IMPLEMENTATION STATUS REQUIRES CURRENT MISSION AUDIT` where this reconciliation does not prove complete current implementation.

No `COMPLETE` implementation claim is made solely because a feature file exists.

---

# Global Register

| # | Capability | Commercial position | Product commitment | Product definition state | Implementation state after this reconciliation | Next controlled checkpoint |
|---|---|---|---|---|---|---|
| 1 | Smart Order & Delivery Assistant | Ledger + Manager add-on | **ADD-ON + BUILD NOW — before first 10 pilot merchants** | `RECONCILED EXISTING CONTRACT` | `IMPLEMENTATION STATUS REQUIRES CURRENT MISSION AUDIT` | Product mission / implementation audit before pilot |
| 2 | Ask CFO | Ledger + Manager core | **BUILD NOW** | `RECONCILED EXISTING CONTRACT` | `IMPLEMENTATION STATUS REQUIRES CURRENT MISSION AUDIT` | Verify complete read-only intelligence contract + implementation |
| 3 | Ledger / Business Memory | Ledger + Manager core | **BUILD NOW** | `RECONCILED EXISTING CONTRACT` | `FOUNDATION / PRIOR IMPLEMENTATION EXISTS`; full reconciled behavior requires audit | Compare current transactions implementation against mature contract |
| 4 | Daily Intelligence Rhythm | Ledger + Manager core | **BUILD NOW** | `RECONCILED EXISTING CONTRACT` | `IMPLEMENTATION STATUS REQUIRES CURRENT MISSION AUDIT` | Verify 7:00 / 10:30 / 22:00 schedules and content |
| 5 | Universal Document & Receipt Intelligence / Receipt Cabinet | Core cross-feature | **BUILD NOW** | `RECONCILED EXISTING CONTRACT` | `IMPLEMENTATION STATUS REQUIRES CURRENT MISSION AUDIT` | Audit preview-confirm-update + retrieval/storage |
| 6 | Staff / HR Assistant | Ledger + Manager add-on | **ADD-ON + BUILD NOW** | `RECONCILED EXISTING CONTRACT` | `IMPLEMENTATION STATUS REQUIRES CURRENT MISSION AUDIT` | Product mission after shared permissions/location readiness |
| 7 | Stock / Supplier / Reorder Intelligence | Manager core; Smart Stock path for Ledger | **BUILD NOW** | `RECONCILED EXISTING CONTRACT` | `FOUNDATION / PRIOR INVENTORY/CATALOG IMPLEMENTATION EXISTS`; full intelligence/reorder requires audit | Reconcile current Inventory/Catalog against complete stock/supplier/reorder contract |
| 8 | Support Automation / 100+ FAQ | Core support foundation | **BUILD NOW** | `RECONCILED EXISTING CONTRACT` | `IMPLEMENTATION STATUS REQUIRES CURRENT MISSION AUDIT` | Verify FAQ coverage, multilingual routing, ticket escalation |
| 9 | Human Language Layer | Core cross-feature | **BUILD NOW** | `RECONCILED EXISTING CONTRACT` | `IMPLEMENTATION STATUS REQUIRES CURRENT MISSION AUDIT` | Cross-feature language/clarification mission or verification |
| 10 | Conversation Workspace & Channel Independence | Core shared channel | **BUILD NOW** | `MATURE CONTRACT` | `IMPLEMENTATION STATUS REQUIRES CURRENT MISSION AUDIT` | Dedicated product mission; must not be treated as optional fallback |
| 11 | Smart Reminder & Delegated Automation | Ledger + Manager core/shared foundation | **BUILD NOW** | `MATURE CONTRACT` | `IMPLEMENTATION STATUS REQUIRES CURRENT MISSION AUDIT` | Build/verify shared Reminder Engine before vertical duplicates appear |
| 12 | Basic Voice Assistant | Ledger + Manager core | **BUILD NOW** | `MATURE CONTRACT` | `IMPLEMENTATION STATUS REQUIRES CURRENT MISSION AUDIT` | Verify voice input/reply against permissions/language |
| 12A | Smart Voice Assistant Plus | Ledger + Manager add-on | **ADD-ON + BUILD NOW** | `MATURE CONTRACT` | `IMPLEMENTATION STATUS REQUIRES CURRENT MISSION AUDIT` | Separate premium-depth implementation within shared voice foundation |
| 13 | POS Connection, Counter Intelligence & Closing Cash | Manager core / integration layer | **BUILD NOW** | `MATURE CONTRACT` | `IMPLEMENTATION STATUS REQUIRES CURRENT MISSION AUDIT` | Standard POS bridge mission; no custom core POS modifications |
| 14 | Smart Credit Awareness | Ledger + Manager core | **BUILD NOW** | `MATURE CONTRACT` | `IMPLEMENTATION STATUS REQUIRES CURRENT MISSION AUDIT` | Verify warn-not-block, audit and repayment integration |
| 15 | Payment Verification & Bank Reconciliation | Ledger + Manager core | **BUILD NOW** | `MATURE CONTRACT` | `IMPLEMENTATION STATUS REQUIRES CURRENT MISSION AUDIT` | Financial-integrity product mission / implementation verification |
| 16 | Compliance Shield | Ledger + Manager add-on | **ADD-ON + BUILD NOW** | `MATURE CONTRACT` | `IMPLEMENTATION STATUS REQUIRES CURRENT MISSION AUDIT` | Build on shared Reminder + Document foundations |
| 17 | Operational Dashboard & Manager Workspace | Manager core + role-appropriate Ledger surfaces | **BUILD NOW** | `MATURE CONTRACT` | `FOUNDATION / PRIOR WORKSPACE IMPLEMENTATION EXISTS`; full reconciled views require audit | Compare current dashboard against reconciled contracts |
| 18 | Subscription, Payment & Account Lifecycle | Platform/core commercial capability | **BUILD NOW** | `MATURE CONTRACT` | `IMPLEMENTATION STATUS REQUIRES CURRENT MISSION AUDIT` | Resolve only the narrow Founder commercial decisions still open; implement safe lifecycle independently |
| 19 | Super Admin & Platform Stewardship | Internal platform operations | **BUILD NOW within approved scope** | `MATURE CONTRACT` | `IMPLEMENTATION STATUS REQUIRES CURRENT MISSION AUDIT` | Security/privacy-bounded platform operations mission |
| 20 | Onboarding & First Experience | Core activation/conversion | **BUILD NOW** | `MATURE CONTRACT` | `FOUNDATION / PRIOR public/start/business-identity work exists`; complete first-experience requires audit | Reconcile `/start` and activation journey against mature contract |
| 21 | Permissions, Business Isolation & Role Authority | Core shared foundation | **BUILD NOW** | `MATURE CONTRACT` | `FOUNDATION / PRIOR RLS/auth implementation exists`; complete cross-feature permission matrix requires audit | Security & Permissions architecture verification per feature |
| 22 | Shared Product Foundations | Cross-product architecture contract | **BUILD NOW** | `MATURE CONTRACT` | `PARTIAL FOUNDATIONS EXIST`; reuse/completeness must be verified continuously | Every future EIS must reuse/extend rather than duplicate |

---

# Current Explicitly Rejected / Separate Directions

These historical ideas are **not** missing features and must not be added to the completion backlog as current Build Now scope:

- autonomous hard customer-credit blocking — `REJECT` as default behavior;
- AI accusation/punishment of employees/customers — `REJECT`;
- continuous employee GPS surveillance — `REJECT`;
- autonomous wage docking/fines — `REJECT`;
- blind supplier procurement without Owner-delegated authority — `REJECT`;
- custom client-specific POS modifications inside core — `REJECT`; use extension/integration layer;
- dynamic CREATE/DROP core schema by subscription state — `REJECT`;
- routine broad Super Admin access to merchant private business data — `REJECT`;
- embedded lending/underwriting inside current Smart Business core — `REJECT for current core`; separate future decision required;
- public marketplace behavior for Smart Order & Delivery — `REJECT`; separate future product decision required.

---

# Current Unresolved Founder Decisions

These are not implementation excuses and do not block unrelated approved feature work:

1. Free-trial policy.
2. Exact current price for Voice Plus.
3. Exact current price for Staff/HR.
4. Exact current price for Smart Stock Assistant.
5. Exact current price for Smart Order & Delivery.
6. Exact long-term retention/deletion duration after cancellation/non-payment.
7. Whether sensitive employee KYC/national-ID storage is a committed requirement and under what legal/privacy basis.
8. Whether broader wholesaler/marketplace ecosystem expansion should ever become a separate product/capability.
9. Whether third-party financial/underwriting/lending products should ever be pursued separately.

Items 2–5 are one commercial-decision family; they are listed separately here because each add-on may resolve independently.

---

# Product Completion Governance Rule

For every future SB-P mission, Mission Control must ask:

1. Which committed feature(s) does this mission advance?
2. Which shared foundation(s) does it reuse?
3. What complete feature behavior remains outside this mission but still committed?
4. Is any blocker a product decision, or only an implementation/security dependency?
5. What evidence proves implementation, runtime behavior, security and acceptance?

A narrow mission may implement only one slice. It must never mark the rest of the feature or product as rejected merely because it is outside current scope.

---

# Next Program Gate

After this reconciliation PR is merged and verified, the next program-management action is **not historical extraction**.

Mission Control should perform a **current implementation-vs-product-contract audit** and sequence the remaining Build Now capabilities into Product Missions according to dependency, pilot necessity, security and shared-foundation reuse.

The first sequencing priority should protect shared foundations and pilot-critical capabilities, especially:

- Permissions / Business Isolation;
- Conversation Workspace / channel-independent conversation foundation;
- Reminder/Delegated Automation foundation;
- Universal Document Intelligence;
- Payment/financial integrity;
- pilot-required Smart Order & Delivery;
- the complete Ledger/Manager experiences built on those foundations.

---

## Final Principle

**The product backlog is defined by approved product commitment, not by what happens to be implemented today. Implementation status is evidence. Product commitment is authority.**
