# Smart Business Feature Definition — Operational Dashboard & Manager Workspace

**Status:** MATURE RECONCILED CONTRACT — FULL HYDRATION PASS  
**Build commitment:** **BUILD NOW**  
**Commercial availability:** Manager core plus role-appropriate Ledger surfaces  
**Authority boundary:** Dashboard/Workspace is a visual management surface over shared Smart Business truth. It must not become a separate data/permission system or leak Owner intelligence to unauthorized roles.

---

## 1. Feature Identity

The Operational Dashboard & Manager Workspace gives authorized users a calm visual view of business state and operational work while preserving Smart Business's conversation-first identity.

The dashboard complements WhatsApp and the Conversation Workspace. It does not replace them and must not create duplicate business truth.

---

## 2. Founder Problem Statement

Some business work is easier visually:

- reviewing today's sales/purchases;
- comparing trends;
- seeing stock/reorder status;
- checking staff/attendance;
- reviewing credit/payment issues;
- monitoring orders/delivery;
- seeing POS/counter/closing-cash signals;
- navigating documents, integrations and settings.

The Owner/Manager needs visual clarity without being forced into a complex ERP interface.

---

## 3. Lighthouse Principles

- Calm, simple, useful workspace.
- Conversation-first; visual surfaces complement rather than replace conversation.
- Role-appropriate visibility.
- Owner intelligence protected by default.
- Same Business Memory/permissions across every surface.
- Stable/testable UI where practical.
- No form clutter merely because backend fields exist.

---

## 4. Workspace Layers

The product may present different visual depth according to product/role:

### Ledger-oriented surfaces

May include:

- business identity;
- transaction/business-memory views;
- credit awareness;
- document/receipt memory;
- reminders;
- Ask CFO access;
- Daily Intelligence;
- enabled add-ons.

### Manager-oriented surfaces

May add:

- inventory/stock intelligence;
- suppliers/reorder;
- POS/counter intelligence;
- closing cash;
- operational trends;
- deeper role-appropriate analytics;
- staff/HR/order-delivery views when add-ons are enabled.

The exact navigation may evolve; capability truth remains governed by feature contracts.

---

## 5. Conversation Workspace Placement

The native Conversation Workspace is an explicit first-class component of the Smart Business app experience.

It must not disappear into a generic dashboard label or be treated merely as an outage fallback.

The visual workspace and conversation workspace share:

- user/business identity;
- Business Memory;
- Permission Engine;
- Human Language Layer;
- feature action services;
- document/reminder/intelligence foundations.

---

## 6. Financial / Business Summary

For authorized users, the workspace may present clear summaries such as:

- today/period sales/income;
- expenses/purchases;
- outstanding credit;
- recent activity;
- payment/reconciliation state;
- relevant comparisons/trends.

Exact metric availability depends on product plan, enabled add-ons and reliable data.

Do not display fabricated derived metrics when underlying data is insufficient.

---

## 7. Inventory / Supplier / Reorder Views

Manager surfaces should connect to the shared Stock/Supplier/Reorder contract for:

- inventory quantity/state;
- low stock;
- expiry/freshness where data exists;
- slow-moving/wastage information;
- supplier history/context;
- reorder recommendations/pending approvals;
- purchase/order follow-up.

Do not create dashboard-only stock logic separate from the operational services.

---

## 8. POS / Counter / Closing Cash Views

Authorized Manager/Owner surfaces may present:

- POS integration health;
- relevant sales/counter data;
- void/discount review signals;
- closing-cash inputs/results;
- factual variances.

Signal language must remain neutral and non-accusatory.

---

## 9. Staff / HR Views

When Staff/HR add-on is enabled, permitted workspace views may include:

- staff roster;
- attendance;
- leave requests;
- correction/context review;
- payroll support/export;
- role/permission administration where appropriate.

Employees may have self-service surfaces only for information/actions explicitly permitted to them.

---

## 10. Order & Delivery Views

When enabled, authorized users may see:

- orders by state;
- pending confirmation;
- preparation/assignment;
- delivery exceptions;
- COD/payment issues;
- delivery history/proof.

The dashboard does not create a marketplace and must preserve delivery/privacy boundaries.

---

## 11. Ask CFO and Daily Intelligence

The workspace should expose Ask CFO and Daily Intelligence without creating separate intelligence stacks.

Ask CFO uses shared read-only business reasoning.

Daily Intelligence shows the same current schedule/content truth delivered through approved channels.

---

## 12. Documents and Receipt Cabinet

Authorized users may browse/search permitted documents and receipts through the shared Universal Document/Receipt Intelligence foundation.

The workspace may provide richer visual filtering while preserving the same storage/permission truth used in conversation.

---

## 13. Users and Permissions

### Owner

Receives Owner-authorized financial/operational intelligence.

### Manager

Receives only Owner-delegated operational/analytical scope. Manager role alone does not grant all Owner intelligence.

### Employee

May receive job-specific tools and own attendance/self-service where explicitly permitted. No default Owner profit/Ask CFO/full analytics.

### Customer/Supplier/Delivery Staff

Do not receive general merchant dashboard access unless a separately defined purpose-limited workflow surface exists.

---

## 14. Permission Enforcement

Role-based cards/navigation are a usability layer, not the security boundary.

Every protected read/write must enforce:

- authenticated user;
- business isolation;
- current role/permission;
- feature entitlement where relevant;
- object/action scope.

Changing a UI component must never widen backend access.

---

## 15. Personalization and Navigation

The dashboard should prioritize useful work rather than display every possible module equally.

It may adapt to:

- Ledger vs Manager;
- enabled add-ons;
- role;
- unresolved tasks/exceptions;
- merchant business type;
- recently used features.

Avoid manipulative engagement design or fear-based upsell.

---

## 16. Stable UI/Testability

Where appropriate, important interaction elements should preserve stable IDs/data-testid or equivalent test hooks so runtime verification can be reliable.

This is a product-quality rule, not a requirement that the UI remain visually frozen.

---

## 17. Error and Exception Behavior

Handle:

- partial data-provider failure;
- stale query/state;
- permission change;
- feature/add-on unavailable;
- integration outage;
- empty/first-use state;
- conflicting data sources;
- failed export/download.

A broken card/module must not globally blank the workspace when unrelated safe data can still be shown.

---

## 18. Privacy and Trust

- No cross-business data.
- No staff access to Owner intelligence by default.
- No routine platform/admin merchant-data browsing through dashboard shortcuts.
- Sensitive information should be surfaced only to roles with legitimate need.
- Dashboard activity/analytics must not become hidden employee surveillance.

---

## 19. Performance Expectations

Common workspace navigation/summary loads should target responsive experience consistent with current Smart Business performance goals.

Use caching/query optimization where safe, but never bypass authorization or show stale consequential state as current without clear indication.

---

## 20. Shared Foundations to Reuse

Reuse:

- Business Memory;
- Permission Engine;
- Human Language Layer;
- Conversation Workspace;
- Ask CFO;
- Daily Intelligence;
- Document Intelligence;
- Reminder Engine;
- Inventory/Catalog;
- POS integration;
- shared identities;
- notification/audit foundations.

---

## 21. Explicit Non-goals

- fixed historic four-tab layout as immutable Product Truth;
- ERP-form-first experience;
- dashboard-only duplicate business logic;
- employee visibility into Owner-wide financial intelligence by convenience;
- hiding Conversation Workspace as optional fallback only.

---

## 22. Acceptance Scenarios

A future Blueprint/EIS must verify at least:

1. Owner sees accurate role-authorized summary from shared Business Memory.
2. Manager sees delegated operations but not non-delegated Owner intelligence.
3. Employee is limited to permitted operational/self-service surfaces.
4. Dashboard and conversation show consistent underlying state.
5. Stock/supplier/POS/order modules consume shared feature services.
6. One integration/module failure leaves unrelated workspace functions usable.
7. Ask CFO remains read-only.
8. Conversation Workspace is first-class in app navigation/experience.
9. Cross-business access is denied server-side.
10. Testable stable identifiers exist for critical governed flows where required.

---

## 23. Historical Corrections / Superseded Behavior

Historical UI tab layouts remain design provenance, not fixed Product Truth.

Superseded:

- dashboard as a separate truth system;
- hiding Owner intelligence only in UI while backend remains open;
- treating the native Conversation Workspace as non-core.

---

## 24. Provenance and Hydration Coverage

Reconciled from Founder-origin Section 4, Section 7 and related cross-feature evidence; planning/project-room dashboard evolution; Final Feature Reconciliation Register §17 and §§28–31; Source 01/11.

**Hydration result:** current recovered dashboard/Manager-workspace behaviors and permission/channel corrections are represented here or delegated to named feature contracts.

---

## 25. Completion Gate

Complete only when role-aware workspace/navigation, shared-state consistency, Manager operational depth, Ledger surfaces, Conversation Workspace integration, error isolation, security and runtime acceptance are proven end-to-end.
