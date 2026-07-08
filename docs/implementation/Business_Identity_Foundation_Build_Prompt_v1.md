# SMART BUSINESS MISSION CONTROL

# SB-P1.6C — Business Identity Foundation Build Prompt v1.0

**Artifact Type:** AI Execution Artifact

**Version:** 1.0

**Status:** Approved

**Execution:** Build Mode Only

**Mission:** SB-P1.6C

**Repository Location:**

```text
docs/implementation/
Business_Identity_Foundation_Build_Prompt_v1.md
```

---

# Purpose

This document is the AI Execution Artifact for the Smart Business Business Identity Foundation.

It translates the approved **Business Identity Foundation Build Contract v1.0** into implementation instructions suitable for Lovable Build Mode.

This document does not establish governance.

It executes implementation within the already approved governance framework.

---

# Governing Authority

Execute according to:

- Approved Business Identity Foundation Build Contract v1.0
- Lighthouse Constitution
- Smart Business Constitution
- Workspace Knowledge
- Project Knowledge
- README.md
- AGENTS.md
- Approved repository documentation
- Connected GitHub repository

The Build Contract remains the governing authority for this implementation.

---

# AI Context Utilization

Before requesting clarification, first use the approved AI context already available through:

- Workspace Knowledge
- Project Knowledge
- Repository documentation
- README.md
- AGENTS.md
- Connected GitHub repository

Request clarification only when the approved AI context is genuinely insufficient to complete the authorized implementation.

---

# Objective

Establish the approved **Business Identity Foundation**.

The objective is to create the business identity boundary between:

```text
Authenticated User
        │
        ▼
Business Identity Layer
        │
        ▼
Business Workspace Foundation
```

This is a business-identity infrastructure mission.

It is not a business operations mission.

---

# Build Only the Approved Foundation

## Application Access Foundation (Preserved)

Preserve the accepted Application Access Foundation (SB-P1.5) exactly as implemented.

Do not modify:

- Public routes or public experience
- Login / Logout
- Authentication state
- Session persistence and restoration
- Protected routing
- The `/dashboard` route boundary

Business identity shall be attached to the existing authenticated session. No new route shall be introduced to accommodate it.

---

## Business Identity Layer

Implement only:

- Business entity creation (single business per authenticated user)
- Business ownership association (user ↔ business), enforced at the data layer
- Business profile capture, limited strictly to:
  - Business name (required, free text)
  - Business category (required, **free text for this phase** — a fixed category taxonomy has not yet been Founder-approved; do not invent, hardcode, or infer a category list or dropdown)
  - Business locality/address (required, free text sufficient to identify the business location; do not build structured geographic fields such as city/state/pincode breakdowns)
- First-time setup experience, shown only when the authenticated user has no associated business
- Empty-state handling for the authenticated, businessless user

### Business Detection Logic

On entering the protected application boundary (`/dashboard`), check whether the authenticated user has an associated business record:

- If none exists → render the first-time setup experience.
- If one exists → render the Business Workspace Foundation directly.

This check replaces the prior Bootstrap-era placeholder behaviour at `/dashboard` and must not introduce a new route to perform it.

---

## Business Workspace Foundation

After successful business creation (or on subsequent login for an existing business), render the **Business Workspace Foundation** containing only:

- Business identity display (business name, category, locality/address)
- Authenticated header and navigation (inherited unchanged from the Application Workspace Foundation)
- Workspace layout reflecting an established business
- "No operational data yet" messaging
- Logout access (inherited unchanged)

### Workspace Messaging

The messaging shall communicate that:

- the business has been successfully established,
- operational features (transactions, inventory, reports, Ask CFO, etc.) will be introduced through future governed implementation phases.

Messaging shall reassure the user. It shall not resemble an error, loading, or unfinished state.

---

# Implementation Principles

Preserve:

- Smart Business identity
- Mobile-first experience
- Accessibility
- Responsive behaviour
- Repository consistency
- Reusable components
- Maintainable project organization
- The Respectful Upgrade Principle (no implication that the merchant's existing methods were inadequate)

Follow the approved implementation direction already established through the Smart Business AI context.

---

# Do Not Implement

Do not implement:

- Multi-business support or business switching
- Business deletion, archival, or editing flows beyond initial creation
- Any business profile field beyond name, category, and locality/address
- A fixed or hardcoded business category list or dropdown
- Structured geographic modelling (city/state/pincode/geo-coordinates)
- Sales, Purchases, Inventory, Customers, Suppliers
- Transactions, Accounting, Payments, Reports, Analytics
- Employees, Attendance
- Ask CFO, AI reasoning, AI recommendations, AI automation
- WhatsApp integration, Voice AI, Notifications
- File uploads
- Any route beyond what is required to present the first-time setup / Business Workspace states within the existing `/dashboard` boundary
- Operational workflows, business dashboard, business intelligence
- Speculative functionality

Everything not explicitly requested remains out of scope.

---

# Repository Discipline

Treat the connected GitHub repository as the single canonical implementation environment.

Preserve the approved repository organization and implementation direction.

Repository documentation remains the authoritative implementation reference.

Do not diverge from the approved repository structure.

---

# Completion Criteria

Stop immediately after establishing:

- Business entity creation
- Business ownership association
- Business profile capture (name, category, locality/address)
- First-time setup experience
- Empty-state handling
- Business Workspace Foundation
- Business detection logic at the `/dashboard` boundary

Do not continue implementing beyond this milestone.

Prepare a concise **Build Summary** including:

- implementation completed,
- files created or modified,
- schema introduced (business table/fields only),
- routes affected (should be none beyond the existing `/dashboard` boundary),
- repository synchronization status,
- any implementation observations requiring Mission Control review.

Return control for Mission Control validation.

---

# Expected Output

At completion the project shall contain only:

- Public experience (unchanged)
- Authentication layer (unchanged)
- Business Identity Layer
- Business Workspace Foundation
- Business detection logic
- Technical readiness for a future Business Data Foundation

No business operational capability is authorized.

Return the implementation for Business Identity Foundation Acceptance Checklist validation.

---

# Governance Classification

This document is the canonical **AI Execution Artifact** for **SB-P1.6 — Business Identity Foundation**.

It executes the implementation authorized by the approved **Business Identity Foundation Build Contract v1.0** and forms part of the Team LIPS AI Implementation Governance Framework v1.0.

It shall be used only for the governed Build Mode execution of SB-P1.6.
