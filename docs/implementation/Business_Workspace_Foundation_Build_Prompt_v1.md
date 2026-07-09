# SMART BUSINESS MISSION CONTROL

# SB-P1.7C — Business Workspace Foundation Build Prompt v1.0

**Artifact Type:** AI Execution Artifact
**Version:** 1.0
**Status:** Approved
**Execution:** Build Mode Only
**Mission:** SB-P1.7C

**Repository Location:**

```text
docs/implementation/
Business_Workspace_Foundation_Build_Prompt_v1.md
```

---

# Purpose

This document is the AI Execution Artifact for the Smart Business Business Workspace Foundation.

It translates the approved **Business Workspace Foundation Build Contract v1.0** into implementation instructions suitable for Lovable Build Mode.

This document does not establish governance.

It executes implementation within the already approved governance framework.

---

# Governing Authority

Execute according to:

- Approved Business Workspace Foundation Build Contract v1.0
- Lighthouse Constitution
- Smart Business Constitution
- SB-ARC-1.0 Engineering Architecture Checkpoint
- SB-P1.6F Business Identity Foundation Implementation Completion Report
- Workspace Knowledge
- Project Knowledge
- README.md
- AGENTS.md
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

Locate the existing Business Workspace Foundation implementation delivered during SB-P1.6 — Business Identity Foundation within the connected repository before writing any new code. Extend and refine the existing implementation rather than creating a parallel implementation. Do not assume its structure without inspecting it directly in the connected environment.

Request clarification only when the approved AI context is genuinely insufficient to complete the authorized implementation.

---

# Objective

Refine the existing Business Workspace Foundation, established in SB-P1.6, into an organized, orientation-ready workspace home.

```text
Business Identity (SB-P1.6)
        │
        ▼
Business Workspace Foundation (minimal, SB-P1.6)
        │
        ▼
Business Workspace Foundation (refined, SB-P1.7)
```

This is a refinement mission.

It is not a rebuild, and it is not a business functionality mission.

---

# Build Only the Approved Foundation

## Locate Before Building

Before implementing, locate the existing authenticated `/dashboard` route and its current Business Workspace Foundation components, delivered during SB-P1.6 — Business Identity Foundation. Extend these components in place. Do not create a parallel or duplicate workspace implementation. Do not introduce a new route.

---

## Business Workspace Home

Business Workspace Home shall present the existing Business Identity together with orientation, workspace organization, and informational placeholders for future governed capabilities.

Implement only the following capabilities:

### Business Identity Presentation

- Display the existing Business Identity record read-only: Business Name, Business Category, Business Locality/Address.
- Query the existing Business Identity table established in SB-P1.6 using existing Row Level Security and ownership isolation. Read-only access only.
- Present Business Category and Business Locality exactly as stored (free-text). Do not invent categorization, tags, or icons implying structured data that does not exist.
- Do not add editing capability. Do not add new fields.

### Orientation Capability

- Present static welcome/orientation messaging confirming that application access and business identity have been successfully established.
- Messaging must reassure the business owner. It must not resemble an error state, a loading state, or an unfinished implementation.

### Workspace Organization

- Organize the workspace home into clear, readable sections (e.g., identity summary, orientation, what's coming next) using existing layout and component patterns from SB-P1.5/SB-P1.6.
- Preserve existing authenticated header, authenticated navigation, and protected layout.
- Maintain mobile-first, single-screen readability consistent with a merchant briefly checking on a phone.

### Forward-Visibility of Future Governed Capabilities

- Present informational, non-functional placeholders describing future capabilities (for example: records, reports, Ask CFO) in plain language.
- Placeholders must be visually and structurally distinct from functional elements (e.g., a consistent "coming soon" treatment).
- Placeholders must not display any numeric values, sample data, illustrative metrics, or simulated content of any kind — including zero-values (e.g., no "₹0" or "0 transactions").
- Ask CFO placeholders must describe capability intent only (e.g., "Ask questions about your business — coming soon"). Do not show sample AI-generated answers or mock conversational output of any kind.
- If a placeholder is tappable, it must lead only to a clearly labeled "not yet available" informational state. It must never lead to a blank screen, an error, or partially built functionality.
- Placeholders must not perform any backend call of any kind.

### Guidance Capability

- Offer brief, non-functional guidance text describing what will become available through future governed phases.
- Guidance must remain informational. It must not instruct the user to perform a workflow that does not yet exist.

---

## Navigation

- Preserve the public/authenticated navigation separation established in SB-P1.5.
- Any new in-workspace navigation element must lead only to informational, non-functional states.

---

## Business Identity Preservation

- The Business Identity Foundation from SB-P1.6 must remain fully intact and unmodified.
- Single-business-per-owner behavior must be preserved. Do not introduce any business switching, business selection, or business listing UI, even as a disabled or placeholder element.

---

# Implementation Principles

Preserve:

- Smart Business identity and Midnight Prosperity branding
- Mobile-first experience
- Accessibility
- Responsive behaviour
- Repository consistency
- Reusable components
- Maintainable project organization
- Respectful Upgrade Principle — the workspace should feel like a natural next step, not a demand for new merchant behavior

Follow the approved implementation direction already established through the Smart Business AI context.

---

# Do Not Implement

Do not implement:

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
- Ask CFO functionality (informational placeholder only, per above)
- AI reasoning, recommendations, or automation of any kind
- WhatsApp integration
- Voice AI
- Notifications
- File uploads
- Editable business profile
- New Business Identity fields
- Multi-business support
- Additional routes
- Real or simulated dashboard metrics
- Any backend write operation
- Any new database table, column, or migration

Everything not explicitly authorized remains out of scope.

---

# Repository Discipline

Treat the connected GitHub repository as the single canonical implementation environment.

Locate and reuse the existing Business Workspace Foundation components delivered during SB-P1.6 — Business Identity Foundation before creating anything new.

Preserve the approved repository organization and implementation direction.

Do not diverge from the approved repository structure.

---

# Completion Criteria

Stop immediately after establishing:

- Business identity presentation (read-only)
- Orientation and welcome capability
- Workspace organization
- Forward-visibility placeholders (informational, non-functional)
- Navigation consistency

Do not continue implementing beyond this milestone.

Prepare a concise **Build Summary** including:

- implementation completed,
- files created or modified,
- confirmation that existing SB-P1.6 workspace components were extended rather than duplicated,
- routes affected (expected: none beyond existing `/dashboard`),
- repository synchronization status,
- confirmation that no unauthorized functionality was introduced beyond the approved SB-P1.7 scope,
- any implementation observations requiring Mission Control review.

Return control for Mission Control validation.

---

# Expected Output

At completion the project shall contain only:

- Public experience (unchanged)
- Authentication layer (unchanged)
- Protected routing (unchanged)
- Business Identity Foundation (unchanged)
- Refined Business Workspace Foundation (identity presentation, orientation, workspace organization, forward-visibility placeholders)

No business capability is authorized.

Return the implementation for Business Workspace Foundation Acceptance Checklist validation.

---

# Governance Classification

This document is the canonical **AI Execution Artifact** for **SB-P1.7 — Business Workspace Foundation**.

It executes the implementation authorized by the approved **Business Workspace Foundation Build Contract v1.0** and forms part of the Team LIPS AI Implementation Governance Framework v1.0.

It shall be used only for the governed Build Mode execution of SB-P1.7.
