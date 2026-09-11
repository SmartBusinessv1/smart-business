# Shared Smart Business Product Foundations

## Feature Identity

**Product Type:** Cross-product architecture/product contract  
**Build Commitment:** **BUILD NOW as reusable foundations**

## Purpose

Prevent Smart Business from becoming a collection of duplicated feature silos. Approved channels and feature families should reuse authoritative foundations wherever the underlying concern is the same.

## Foundation 1 — Business Memory

One merchant-scoped source of authoritative business history supports Ledger, documents, credit, payments, stock, suppliers, orders, attendance context and other approved domains.

Feature-specific records may exist where domain modeling requires them, but channels must not create parallel competing business truth.

## Foundation 2 — Permission Engine & Business Isolation

All channels/features reuse the same authoritative identity, business scope and permission truth. UI visibility or model instructions do not replace server/data authorization.

## Foundation 3 — Human Language Layer

English, Malayalam and Manglish understanding is a shared product layer reused across WhatsApp, Conversation Workspace, voice, support, reminders, HR, supplier/customer and delivery workflows.

## Foundation 4 — Universal Document Intelligence

One document interpretation pattern supports:

- receipts/invoices;
- stock/supplier documents;
- rosters;
- order lists;
- compliance documents;
- Excel/CSV/PDF imports;
- other approved business files.

Required pattern where consequential interpretation is involved:

**interpret → preview → clarify if needed → confirm → validated update**.

## Foundation 5 — Reminder / Delegated Automation Engine

Features reuse one reminder state model and bounded automation-authority pattern. A trigger does not create authority.

## Foundation 6 — Notification / Communication Layer

Approved outbound communication should reuse common:

- recipient identity;
- role/permission rules;
- language preference;
- template/content safeguards;
- opt-out rules where applicable;
- delivery/retry/idempotency behavior;
- channel adapters.

Channel adapter differences must not duplicate business rules.

## Foundation 7 — Conversation Context & Clarification

Approved conversational channels share intent/context principles. Ambiguity is classified as normal business uncertainty unless evidence indicates a security event.

The platform should remember enough permitted context for natural follow-up while respecting privacy/retention boundaries.

## Foundation 8 — Identity / Business Contacts

Owner, manager, employee, customer, supplier and delivery identities should be reused across features rather than recreated independently in each module. Domain-specific relationship tables may exist but must link to consistent merchant-scoped identities.

## Foundation 9 — Point-in-Time Location

Attendance and delivery may reuse a purpose-limited location-verification primitive. Location collection occurs only for an approved operational purpose and must not expand into continuous surveillance by default.

## Foundation 10 — Audit / Human Context

Consequential corrections preserve:

- original event/state;
- later correction/context;
- actor;
- authority provenance;
- timestamps;
- resulting current state.

This supports transactions, attendance, orders, credit, payment reconciliation and other consequential workflows.

## Foundation 11 — Error / Exception / Security Separation

Keep separate concepts for:

- ordinary user/business ambiguity;
- validation failure;
- technical/system error;
- operational business alert;
- genuine security/abuse/quarantine event.

Do not route every problem into security quarantine.

## Foundation 12 — Idempotency / Duplicate Protection

External events, imports, POS data, bank/payment evidence, reminders and other retried operations need appropriate idempotency/duplicate handling. Idempotency is a behavioral/concurrency contract, not merely an identifier column.

## Foundation 13 — Channel-Independent Intent / Action Layer

WhatsApp and Conversation Workspace should translate user intent into the same authorised product services. Future approved channels should plug into this layer without changing feature truth.

## Foundation 14 — Stable Entitlement Architecture

Subscription changes should normally change entitlement/permission, not dynamically create/drop core schema. Product modules may evolve, but the system should avoid live structural churn merely because a user upgrades/downgrades.

## Anti-Duplication Rule

Before creating a new table, service, permission model, reminder mechanism, document parser, notification engine, identity record or channel-specific workflow, builders must inspect and reuse existing foundations where they correctly fit.

This is not a rule that everything belongs in one table/service. Legitimate domain separation is allowed when it prevents coupling and preserves integrity. The rule is **one authoritative foundation per concern**, not `one component for everything`.

## Performance and Sustainability

Shared foundations should support fast, secure and reliable operation and reduce redundant compute/storage/API cost. Cost optimization must not degrade genuine merchant experience or privacy.

## Explicit Non-goals

- one duplicate business engine per channel;
- one OCR stack per feature;
- one scheduler per feature;
- duplicated employee/customer/supplier identities;
- permissions encoded independently in each UI;
- subscription-driven destructive schema mutation;
- centralization that creates an unsafe monolith merely to claim reuse.

## Historical Corrections

The historical `Unified Day 1 Table Initialization Law` survives as an architectural lesson—stable schema/entitlements over destructive subscription-driven schema mutation—not as a permanent count/list of historical tables.

Historical model names, exact table names, cloud providers and cron schedules remain implementation provenance.

## Provenance

Reconciled primarily from Founder-origin Section 7 Q87–100, all earlier sections' reuse patterns, Source 01 modular/database philosophy, Source 11 reuse/anti-duplication handoff rules and Phase 1 security/engineering lessons.
