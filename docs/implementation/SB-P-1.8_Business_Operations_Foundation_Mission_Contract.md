# SMART BUSINESS MISSION CONTROL

# SB-P-1.8 — BUSINESS OPERATIONS FOUNDATION

**Mission ID:** SB-P-1.8
**Mission Name:** Business Operations Foundation
**Mission Type:** Product Implementation
**Authorized By:** Founder
**Executing Authority:** Mission Control
**Mission Status:** ACTIVE

---

# 1. Mission Objective

Transform the existing authenticated Smart Business Workspace into the first operational Smart Business experience by implementing a focused, reusable business transaction foundation.

This mission shall enable an authenticated business owner to:

- record a manual sale;
- record a manual purchase;
- view recent business transactions;
- see basic live transaction summaries on the dashboard.

This mission establishes a controlled operational foundation for later product capabilities.

It does not authorize implementation of the complete Smart Business product.

---

# 2. Governing Principles

The mission shall comply with the approved Smart Business governance foundation and the following core principles:

- Humans serving humans.
- AI Assistant, Not AI Judge.
- Technology is a tool; human improvement is the purpose.
- Build for clarity, dignity, usefulness, and peace of mind.
- Respect existing merchant habits.
- Enrich workflows instead of insulting old methods.
- Protect simplicity, trust, sustainability, and human decision ownership.
- Reuse before duplication.
- Evidence before acceptance.
- Permission-first architecture.
- Avoid feature bloat and unnecessary technical debt.

No implementation may override Product Truth, approved architecture, or Founder authority.

---

# 3. Current Approved Product Baseline

The following capabilities already form the approved workspace foundation and must remain functional:

- authentication;
- login and logout;
- protected dashboard route;
- authenticated session persistence;
- Business Workspace;
- Business Identity display;
- dashboard layout foundation;
- public and authenticated navigation;
- responsive workspace layout;
- placeholder module cards;
- existing Supabase authentication integration.

These foundations shall not be unnecessarily redesigned.

Changes are permitted only where required to support the authorized scope of this mission.

---

# 4. Mission Classification

## Build Now

The following capabilities are authorized in SB-P-1.8:

1. Transaction data foundation.
2. Manual sales entry.
3. Manual purchase entry.
4. Unified transaction timeline.
5. Basic dashboard transaction summaries.
6. Owner-scoped access control.
7. Runtime and regression verification.

## Build Later

The following capabilities remain future product work:

- inventory management;
- stock movement;
- customer management;
- supplier management;
- employee management;
- attendance;
- accounting;
- operational reports;
- analytics;
- Ask CFO;
- WhatsApp input;
- voice input;
- photo input;
- receipt extraction;
- employee transaction entry;
- advanced permissions;
- multi-business management.

## Add-on

The following may later be implemented through approved extension or integration layers:

- standard POS bridge;
- external accounting integrations;
- external payment integrations;
- specialized reporting integrations.

## Separate Product

No separate product is authorized by this mission.

## Reject

The following are explicitly rejected within this mission:

- custom POS modifications inside the Smart Business core platform;
- autonomous financial decision-making;
- AI acting as an authority or judge;
- hidden implementation of future modules;
- broad redesign of the approved workspace;
- unnecessary abstraction or speculative architecture;
- duplicate transaction systems;
- unauthorized changes to governance or Product Truth.

---

# 5. Authorized Scope

## Phase 1 — Repository and Architecture Inspection

Before implementation, the engineering agent shall inspect:

- the current repository structure;
- the existing application routes;
- the authenticated dashboard implementation;
- existing Supabase client configuration;
- existing authentication and business identity logic;
- current database migrations;
- current types and service patterns;
- relevant Product Truth and architecture sources;
- existing implementation conventions.

The engineering agent must reuse approved patterns where appropriate.

No code shall be changed until the current architecture has been understood.

---

## Phase 2 — Transaction Data Foundation

Implement a reusable transaction foundation capable of representing:

- sale transactions;
- purchase transactions.

The schema shall be designed for the current authorized scope without prematurely implementing future modules.

Each transaction must be associated with the correct authenticated business and owner context.

The transaction model should support, at minimum:

- unique transaction identifier;
- business identifier;
- transaction type;
- transaction date;
- party name as free text;
- description;
- amount;
- payment method;
- optional notes;
- creator identifier;
- creation timestamp;
- update timestamp where appropriate.

The implementation must preserve data integrity and business-level isolation.

### Transaction Type

Authorized values:

- `sale`
- `purchase`

### Payment Method

Use a small, practical set of values suitable for local merchants.

Recommended initial values:

- cash;
- UPI;
- card;
- bank transfer;
- credit;
- other.

Do not introduce payment processing.

Payment method is record-keeping information only.

---

## Phase 3 — Supabase Database Implementation

Create the required Supabase migration or migrations.

The database implementation must include:

- transaction table or approved equivalent;
- appropriate constraints;
- useful indexes;
- business ownership relationship;
- authenticated creator relationship where appropriate;
- timestamps;
- Row Level Security;
- owner-scoped access policies.

The policies must prevent one business from reading or modifying another business's transactions.

Do not weaken existing RLS policies.

Do not use privileged client credentials in the frontend.

Do not modify production data manually.

Any database change requiring Founder execution must be clearly identified.

---

## Phase 4 — Transaction Service Layer

Implement a reusable transaction service or repository layer consistent with the current codebase.

The frontend should not scatter raw database operations across multiple components.

The service layer should support the authorized operations required by this mission:

- create a transaction;
- list recent transactions;
- retrieve basic daily transaction totals.

Use clear types and validation.

Avoid speculative support for future modules unless required for a clean foundation.

---

## Phase 5 — Manual Sales Entry

Implement a simple manual sales-entry experience.

Minimum required fields:

- transaction date;
- customer name as free text;
- description;
- amount;
- payment method;
- optional notes.

### Sales Entry Requirements

The experience must:

- be clear on mobile;
- minimize unnecessary steps;
- use understandable merchant language;
- validate required fields;
- prevent invalid or negative amounts;
- provide clear saving feedback;
- show clear success confirmation;
- show respectful error messages;
- prevent accidental duplicate submission where practical;
- persist the sale in Supabase.

### Sales Entry Restrictions

Do not implement:

- customer master records;
- itemized invoice lines;
- inventory deductions;
- GST calculations;
- discounts;
- invoice generation;
- receipt generation;
- payment processing;
- AI suggestions;
- WhatsApp entry;
- voice entry;
- photo entry;
- POS integration.

The customer name remains free text for this mission.

---

## Phase 6 — Manual Purchase Entry

Implement a simple manual purchase-entry experience.

Minimum required fields:

- transaction date;
- supplier name as free text;
- description;
- amount;
- payment method;
- optional notes.

### Purchase Entry Requirements

The experience must:

- be clear on mobile;
- minimize unnecessary steps;
- use understandable merchant language;
- validate required fields;
- prevent invalid or negative amounts;
- provide clear saving feedback;
- show clear success confirmation;
- show respectful error messages;
- prevent accidental duplicate submission where practical;
- persist the purchase in Supabase.

### Purchase Entry Restrictions

Do not implement:

- supplier master records;
- purchase-order workflows;
- inventory additions;
- stock reconciliation;
- GST calculations;
- bill extraction;
- receipt OCR;
- payment processing;
- AI suggestions;
- WhatsApp entry;
- voice entry;
- photo entry;
- POS integration.

The supplier name remains free text for this mission.

---

## Phase 7 — Unified Transaction Timeline

Implement a clear chronological list of sales and purchases.

Each timeline entry should show, at minimum:

- transaction type;
- date or timestamp;
- party name;
- description;
- amount;
- payment method.

Sales and purchases must be visually distinguishable without creating a noisy interface.

The timeline shall:

- show the most recent transactions first;
- work well on mobile and desktop;
- include a helpful empty state;
- refresh appropriately after a transaction is created;
- show only transactions belonging to the authenticated business.

Basic filtering by transaction type may be added only when it remains simple and does not delay the core implementation.

Advanced search is not required.

Editing and deletion are not authorized unless Mission Control separately approves them.

---

## Phase 8 — Dashboard Integration

Connect the existing dashboard to live transaction data.

Replace only the relevant placeholder content needed for this mission.

The dashboard shall show:

- today's sales total;
- today's purchase total;
- recent transaction activity;
- helpful empty-state guidance when no transactions exist.

Dashboard calculations must use the authenticated business context.

Do not implement advanced analytics, forecasting, profit calculations, financial advice, or accounting interpretation.

The dashboard is providing factual operational clarity only.

---

# 6. User and Permission Scope

SB-P-1.8 authorizes owner-level transaction access only.

The authenticated business owner may:

- create sales;
- create purchases;
- view the business transaction timeline;
- view basic dashboard totals.

Employee transaction access is not authorized in this mission.

Employee permissions must not be simulated or broadly enabled.

The architecture must not expose owner financial intelligence to unauthorized users.

---

# 7. User Experience Requirements

The implementation shall prioritize:

- simplicity;
- speed;
- clear language;
- mobile usability;
- familiar merchant workflows;
- low cognitive burden;
- helpful empty states;
- respectful validation;
- visible confirmation after actions;
- recoverable errors.

The product must not shame, judge, or lecture the merchant.

The interface must not imply that AI or software has decision-making authority.

---

# 8. Technical Requirements

The implementation shall:

- use the existing application architecture;
- preserve TypeScript safety;
- reuse existing shared components where suitable;
- avoid unrelated refactoring;
- avoid duplicate data-fetching patterns;
- avoid hard-coded business identifiers;
- avoid insecure client-side authorization assumptions;
- preserve existing route protection;
- preserve session persistence;
- use repository-approved environment handling;
- maintain responsive behavior;
- keep database migrations reversible or safely forward-compatible where practical;
- pass existing repository quality checks.

No secrets may be committed.

No service-role Supabase key may be exposed to the frontend.

---

# 9. Explicitly Out of Scope

The following are not authorized in SB-P-1.8:

- inventory management;
- stock ledger;
- product or item catalogue;
- customer master;
- supplier master;
- employee management;
- attendance;
- payroll;
- accounting;
- ledgers;
- profit and loss statements;
- balance sheet;
- GST workflows;
- invoice generation;
- receipt generation;
- reports;
- advanced analytics;
- Ask CFO;
- AI insights;
- financial recommendations;
- WhatsApp integration;
- WhatsApp webhook changes;
- voice processing;
- photo processing;
- image uploads;
- file uploads;
- receipt OCR;
- POS integration;
- custom POS development;
- online payments;
- notifications;
- multi-business switching;
- employee access;
- advanced role management;
- transaction editing;
- transaction deletion;
- bulk imports;
- offline synchronization.

Any of these require separate authorization.

---

# 10. Required Implementation Deliverables

The engineering implementation must produce:

1. Database migration or migrations.
2. RLS policies.
3. Transaction types and validation.
4. Transaction service layer.
5. Sales-entry interface.
6. Purchase-entry interface.
7. Unified transaction timeline.
8. Dashboard transaction summaries.
9. Empty states.
10. Loading and error states.
11. Responsive behavior.
12. Runtime verification evidence.
13. Regression verification evidence.
14. Known-limitations register.
15. Mission completion report.

All implementation artifacts must be stored according to repository conventions.

---

# 11. Acceptance Criteria

SB-P-1.8 may be accepted only when all applicable criteria are verified with evidence.

## Sales

- An authenticated owner can open the sales-entry experience.
- Required fields are clearly presented.
- Invalid required fields are rejected.
- A valid sale can be saved.
- The saved sale persists in Supabase.
- The saved sale belongs to the correct business.
- Success feedback is visible.
- The sale appears in the transaction timeline.
- Today's sales total updates correctly.

## Purchases

- An authenticated owner can open the purchase-entry experience.
- Required fields are clearly presented.
- Invalid required fields are rejected.
- A valid purchase can be saved.
- The saved purchase persists in Supabase.
- The saved purchase belongs to the correct business.
- Success feedback is visible.
- The purchase appears in the transaction timeline.
- Today's purchase total updates correctly.

## Transaction Timeline

- Sales and purchases appear in chronological order.
- Transaction types are clearly distinguishable.
- Amounts display correctly.
- Empty state works when there are no transactions.
- Only the authenticated business's data is shown.

## Dashboard

- Today's sales displays live data.
- Today's purchases displays live data.
- Recent activity displays live data.
- Empty-state guidance works.
- No advanced financial interpretation is introduced.

## Security

- Row Level Security is enabled.
- Cross-business reads are prevented.
- Cross-business inserts are prevented.
- Cross-business updates are prevented where updates exist.
- Cross-business deletes are prevented where deletes exist.
- Unauthenticated access is prevented.
- No privileged key is exposed.

## Regression

- Login continues to work.
- Logout continues to work.
- Session persistence continues to work.
- Protected routes continue redirecting unauthenticated users.
- Existing Business Identity remains preserved.
- Existing workspace layout remains usable.
- Public routes remain functional.
- Responsive behavior remains functional.
- No unauthorized route is introduced.

## Scope Control

- No inventory capability is introduced.
- No customer master is introduced.
- No supplier master is introduced.
- No accounting capability is introduced.
- No analytics capability is introduced.
- No Ask CFO capability is introduced.
- No WhatsApp capability is introduced.
- No voice or photo capability is introduced.
- No employee financial access is introduced.
- No POS customization is introduced.

---

# 12. Required Evidence

The mission completion submission must include evidence rather than unsupported claims.

## Functional Evidence

Provide screenshots or equivalent runtime evidence showing:

- sales-entry screen;
- successful sale creation;
- purchase-entry screen;
- successful purchase creation;
- transaction timeline with both transaction types;
- dashboard live totals;
- dashboard recent activity;
- empty-state behavior.

## Database Evidence

Provide:

- migration file reference;
- table structure confirmation;
- RLS policy confirmation;
- sample persisted sale;
- sample persisted purchase;
- confirmation of correct business association.

Sensitive values must be redacted.

## Security Evidence

Provide verification that:

- unauthenticated access is blocked;
- another business cannot access the transaction data;
- frontend access uses the authenticated user's permitted context;
- no privileged credential was introduced.

## Regression Evidence

Provide verification of:

- login;
- logout;
- protected-route redirect;
- session restoration after refresh;
- Business Identity preservation;
- workspace preservation;
- responsive behavior.

## Repository Evidence

Provide:

- files added;
- files modified;
- migrations added;
- quality checks run;
- test results;
- build results;
- Git diff summary;
- confirmation that no unrelated files changed.

---

# 13. Completion Report Requirements

The completion report must clearly state:

- what was implemented;
- what was not implemented;
- exact files changed;
- exact database changes;
- tests and checks performed;
- runtime results;
- security verification;
- regression verification;
- screenshots or evidence references;
- known limitations;
- deferred items;
- unresolved risks;
- whether the mission is ready for Mission Control acceptance.

The report must not claim success without evidence.

---

# 14. Stop Conditions

Engineering must stop and report to Mission Control when:

- Product Truth conflicts with this contract;
- the repository contains an incompatible architecture;
- required business ownership relationships are unclear;
- an existing migration conflicts with the proposed schema;
- secure RLS cannot be implemented with the available structure;
- the work would require an unauthorized feature;
- the work would require redesigning the approved workspace;
- production credentials or destructive database actions are required;
- implementation would introduce significant technical debt;
- the contract is materially ambiguous.

The engineering agent must not silently choose a new product direction.

---

# 15. Founder-Controlled Actions

The Founder retains authority over:

- approval of this mission contract;
- execution of database changes where manual action is required;
- use of Lovable;
- publishing;
- production deployment;
- major Git merges;
- acceptance of mission completion;
- authorization of future modules.

AI tools may prepare, inspect, implement, review, and recommend.

They may not assume Founder authority.

---

# 16. Mission Success Statement

SB-P-1.8 is successful when an authenticated Smart Business owner can reliably record a sale, record a purchase, view those transactions, and see basic live daily summaries within the existing Business Workspace.

The implementation must preserve security, simplicity, mobile usability, existing product foundations, and human decision ownership.

The mission shall create a reusable business operations foundation without prematurely implementing inventory, accounting, AI, WhatsApp, employee access, or other future modules.
