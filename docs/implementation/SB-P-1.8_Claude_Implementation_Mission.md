# SMART BUSINESS MISSION CONTROL

# SB-P-1.8 — Claude Implementation Mission

**Mission ID:** SB-P-1.8

**Mission Name:** Business Operations Foundation

**Artifact Type:** Claude Implementation Mission

**Executing Agent:** Claude (VS Code)

**Authority:** Mission Control

**Status:** IMPLEMENTATION AUTHORIZED

---

# Mission

Implementation of SB-P-1.8 is now authorized.

This is an implementation mission.

Read the approved repository artifacts.

Understand the existing repository.

Implement only the authorized scope.

Do not redesign the architecture.

Do not expand scope.

---

# Required Reading

Before writing any code, read:

- SB-P-1.8_Business_Operations_Foundation_Mission_Contract.md
- SB-P-1.8_Claude_Engineering_Build_Prompt.md
- SB-P-1.8_Implementation_Assessment.md
- SB-P-1.8_Implementation_Authorization.md

These documents collectively define the implementation authority.

---

# Mission Scope

Implement only:

- Transaction database foundation
- Transaction migration
- Transaction RLS
- Regenerated Supabase types
- Transaction service
- Manual sales entry
- Manual purchase entry
- Unified transaction timeline
- Dashboard operational summaries

Everything else remains outside mission scope.

---

# Approved Architecture

The following decisions are locked.

## Business Boundary

Transactions belong to:

business_id → businesses.id

Business remains the tenancy boundary.

---

## Authentication

Reuse existing authentication.

Reuse protected routes.

Reuse Business Identity.

Do not redesign authentication.

---

## Service Layer

Create:

src/integrations/supabase/transactions.ts

Do not introduce a generic services architecture.

---

## Dashboard

Modify only the authorized operational placeholder.

Preserve:

- Business Identity
- Workspace layout
- Navigation
- Authentication
- Protected routes

---

# Database Requirements

Create only the objects required for transactions.

Implement:

- transaction table
- indexes
- constraints
- updated_at trigger
- RLS policies

Do not modify the Business Identity table.

---

# Supabase Types

Regenerate:

src/integrations/supabase/types.ts

Do not manually edit generated types.

---

# User Experience

Merchant workflow must remain:

- simple
- fast
- familiar
- mobile friendly

Never make the application feel like accounting software.

Never allow AI to appear to make business decisions.

---

# Explicitly Prohibited

Do not implement:

- Inventory
- Customers
- Suppliers
- Accounting
- Reports
- Analytics
- Ask CFO
- WhatsApp
- Voice
- OCR
- POS
- Employee permissions
- Multi-business
- Future roadmap features

Do not partially implement deferred modules.

---

# Repository Discipline

Do not:

- rename unrelated files
- reorganize folders
- modernize architecture
- introduce unrelated dependencies
- perform unrelated refactoring

Modify only files required for SB-P-1.8.

---

# Security

Preserve:

- authentication
- authorization
- business isolation
- RLS
- session persistence

No business shall access another business's transactions.

---

# Verification Before Completion

Verify:

- Mission Contract satisfied
- Engineering Build Prompt satisfied
- Implementation Assessment satisfied
- Implementation Authorization satisfied
- Existing authentication preserved
- Business Identity preserved
- Protected routes preserved
- Dashboard preserved
- Repository consistency preserved
- No unauthorized features introduced

---

# Required Deliverables

Produce:

## 1. Engineering Completion Report

Include:

- Executive Summary
- Files Created
- Files Modified
- Database Changes
- Migration Summary
- Supabase Type Regeneration
- Security Review
- Regression Review
- Risks
- Known Limitations
- Repository Impact

---

## 2. Lovable Implementation Prompt

Generate a clean Lovable implementation prompt.

The prompt shall contain:

- implementation instructions only

Do not include:

- Mission Control commentary
- governance
- reasoning
- implementation analysis

---

# Stop Conditions

Stop immediately if:

- governance conflicts with implementation
- architecture requires redesign
- authentication requires redesign
- Business Identity requires redesign

Report the issue.

Wait for Mission Control.

---

# Completion Report

Return:

1. Implementation summary
2. Files created
3. Files modified
4. Database migration
5. Supabase types regenerated
6. Verification results
7. Git status
8. Recommendation for Mission Control

Do not commit.

Do not push.

Mission Control retains final acceptance authority.
