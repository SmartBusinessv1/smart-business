# SMART BUSINESS MISSION CONTROL

# Business Workspace Foundation Build Contract v1.0

**Artifact Type:** Human Governance Artifact
**Version:** 1.0
**Status:** Draft for Mission Control Review
**Execution:** Not Executable
**Mission:** SB-P1.7B

**Repository Location:**

```text
docs/implementation/
Business_Workspace_Foundation_Build_Contract_v1.md
```

---

# Purpose

This document authorizes implementation of the **Business Workspace Foundation** for Smart Business.

It is a permanent governance artifact.

It authorizes—but does not execute—the refinement of the authenticated Business Identity area into an organized, orientation-ready Business Workspace.

This document is intended for human governance and Mission Control review.

It is **not** an AI execution prompt.

---

# Mission Scope

The purpose of SB-P1.7 is to refine the workspace organization layer already established as part of SB-P1.6:

```text
Business Identity (SB-P1.6)
        │
        ▼
Business Workspace Foundation (minimal form, established SB-P1.6)
        │
        ▼
Business Workspace Foundation (refined, SB-P1.7)
        │
        ▼
Future Governed Operational Modules
```

SB-P1.6 established a minimal Business Workspace Foundation as part of Business Identity delivery, including identity display, no operational data, and no additional routes. SB-P1.7 refines that existing foundation into an organized, orientation-ready workspace home. This mission does not create the workspace boundary from nothing—it enhances what SB-P1.6 already delivered.

This mission establishes workspace organization and orientation capability only.

It does **not** establish operational business capability.

It does **not** introduce transactions, data entry, analytics, or AI reasoning.

---

# Authorized Foundation

Mission Control authorizes implementation of only the following foundation.

## Business Workspace Home

**Business Workspace Home shall present the existing Business Identity together with orientation, workspace organization, and informational placeholders for future governed capabilities.**

The existing `/dashboard` authenticated entry point (established in SB-P1.5, populated with a minimal Business Workspace Foundation in SB-P1.6) shall be refined to deliver the following authorized capabilities:

- **Business identity presentation** — the ability to view the existing Business Identity record (Business Name, Business Category, Business Locality/Address), presented read-only and exactly as currently persisted.
- **Orientation capability** — the ability to welcome and reassure the authenticated business owner that application access and business identity have been successfully established.
- **Workspace organization capability** — the ability to present the authenticated workspace in a structured, navigable form consistent with the existing application boundary.
- **Forward-visibility capability** — the ability to inform the business owner, in informational terms only, that future governed capabilities (such as transactions, records, and Ask CFO) will arrive through future governed implementation phases.
- **Guidance capability** — the ability to offer non-functional orientation guidance that helps the business owner understand what Smart Business will do for them next, without performing any operational workflow.

Detailed interface structure, component composition, and visual layout are implementation decisions reserved for the Business Workspace Foundation Build Prompt. This contract authorizes capability and boundary only.

No new Business Identity fields may be introduced. No editing capability may be added. Business Category and Business Locality remain free-text, consistent with the current implementation; introducing a structured taxonomy is explicitly out of scope for SB-P1.7 and is reserved for a separate future governed mission.

The workspace shall continue to support exactly one Business per authenticated owner. No multi-business capability—including business switching, business selection, or business listing—may be introduced.

---

## Navigation

- Navigation consistency established during SB-P1.5 (separation between public and authenticated experiences) shall be preserved.
- Any new in-workspace navigation capability shall lead only to informational, non-functional states. It shall never lead to unimplemented operational functionality presented as available.

---

## Business Identity Preservation

- The Business Identity Foundation established in SB-P1.6 shall remain intact and unmodified.
- The workspace may present identity data already captured. It shall not introduce identity creation, editing, or reconfiguration capability.

---

## Workspace Boundary

Smart Business shall now present three clearly separated layers:

### Public Environment

Accessible without authentication. Contains public information only. Unchanged from SB-P1.4 and SB-P1.5.

### Application Access Layer

Authentication, session handling, protected routing. Unchanged from SB-P1.5.

### Business Workspace Environment

Accessible only after authentication and existing Business Identity association. Delivers the refined Business Workspace Foundation described above. No operational business capability exists within this environment during SB-P1.7.

---

# Implementation Philosophy

Implementation shall follow the approved Smart Business principles:

- Humans serving humans.
- AI Assistant, Not AI Judge.
- Human decision ownership.
- Mobile-first experience.
- WhatsApp-first product direction.
- Repository-first governance.
- Incremental governed delivery.
- Respectful Upgrade Principle — the workspace should feel like an upgrade to the merchant's existing habits, not a replacement demanding new behavior.

Implementation shall prioritize clarity, orientation, and trust-building over feature completeness. The workspace shall communicate progress and readiness. It shall not simulate functionality that does not yet exist.

---

# Approved Technology Foundation

Implementation shall remain consistent with the approved Smart Business platform.

Approved implementation technologies include:

- React
- TypeScript
- TanStack Router
- Tailwind CSS
- Supabase — confirmed canonical backend platform per the Engineering Architecture Checkpoint. Access shall be limited to read-only queries against the existing Business Identity table established in SB-P1.6, reusing its existing Row Level Security and ownership isolation. No new tables, schema changes, migrations, or write operations beyond what SB-P1.6 already authorized are permitted.

These technologies are implementation decisions.

The mission itself remains capability-oriented rather than technology-oriented.

---

# Authorized Scope

Implementation is authorized only for the following capabilities:

- Business Workspace Home organization
- Business identity presentation (read-only)
- Orientation and welcome capability
- Workspace navigation consistency
- Forward-visibility of future governed capabilities (informational only, non-functional)
- Non-functional guidance capability
- Informational messaging describing future governed phases

Everything not explicitly authorized by this contract shall be considered out of scope.

---

# Explicit Exclusions

The following are explicitly prohibited.

**Business Operations**

- Transactions
- Inventory
- Customers
- Suppliers
- Employees
- Attendance
- Reports
- Analytics
- Accounting
- Payments

**AI**

- Ask CFO
- AI reasoning
- AI recommendations
- AI automation

**Communication**

- WhatsApp integration
- Voice AI
- Notifications

**Business Identity**

- Editable business profile
- New identity fields
- Multi-business support
- Business setup or reconfiguration workflows

**Other**

- File uploads
- Operational workflows
- Real or simulated dashboard metrics
- Additional routes not explicitly justified and authorized
- Speculative functionality

Everything not explicitly authorized remains outside the scope of SB-P1.7.

---

# Completion Criteria

Implementation shall be considered complete only when all of the following are true:

- Business Workspace Home delivers an organized, non-operational experience.
- Existing Business Identity data is presented correctly and read-only.
- Orientation and welcome capability is present and reassuring, not error-like or incomplete-appearing.
- Forward-visibility of future governed capabilities is informational only and non-interactive, or leads only to clearly labeled non-functional states.
- No operational business capability has been introduced.
- No new database writes or schema changes have been introduced.
- The Application Access Foundation (SB-P1.5) and the Business Identity Foundation (SB-P1.6) remain fully intact.

---

# Stop Conditions

Implementation shall stop immediately after establishing:

- Workspace organization capability
- Business identity presentation capability
- Orientation and welcome capability
- Forward-visibility of future governed capabilities
- Navigation consistency

No implementation beyond these boundaries is authorized.

Under no circumstances shall implementation continue into any operational module, including transactions, inventory, or Ask CFO, without a separately authorized Mission Control implementation mission.

---

# Human-in-the-Loop Governance

Implementation remains subject to Human-in-the-Loop governance.

The Founder retains product authority.

Mission Control retains implementation authorization authority.

AI serves as an implementation assistant.

AI shall not redefine Product Truth, governance, architecture, or implementation scope.

---

# Repository Authority

The connected GitHub repository remains the canonical implementation environment.

Repository documentation remains authoritative.

Implementation shall remain consistent with:

- Workspace Knowledge
- Project Knowledge
- README.md
- AGENTS.md
- SB-P1.5 and SB-P1.6 governance artifacts, including the Business Identity Foundation Implementation Completion Report (verified commit `7cf15ae`)
- SB-ARC-1.0 — Engineering Architecture Checkpoint, including its platform responsibility matrix, knowledge management model, and standard engineering workflow (Build Contract → Build Prompt → Claude Engineering Review → Lovable Governed Build → Founder Runtime Verification → Acceptance Checklist → Implementation Completion Report → Mission Control Observations Register)

Repository organization shall be preserved throughout implementation.

---

# Mission Handover

Upon Mission Control approval, this contract authorizes preparation of:

- Business Workspace Foundation Build Prompt
- Business Workspace Foundation Acceptance Checklist

Only after approval of those artifacts may Mission Control authorize the first governed Build Mode execution for SB-P1.7.

---

# Version Control

**Document Version**

```text
1.0
```

**Status**

```text
Draft for Mission Control Review
```

**Mission**

```text
SB-P1.7B
```

**Repository Location**

```text
docs/implementation/
Business_Workspace_Foundation_Build_Contract_v1.md
```

---

# Governance Classification

This document is part of the **Team LIPS AI Implementation Governance Framework v1.0**.

It serves as the Human Authorization Artifact for SB-P1.7 and defines the implementation boundaries for the Business Workspace Foundation.

It complements:

1. Business Workspace Foundation Build Prompt (AI Execution)
2. Business Workspace Foundation Acceptance Checklist (Human Validation)
3. Business Workspace Foundation Completion Report (Historical Record)

Together these artifacts provide complete authorization, execution, validation, and historical traceability for governed AI-assisted implementation.
