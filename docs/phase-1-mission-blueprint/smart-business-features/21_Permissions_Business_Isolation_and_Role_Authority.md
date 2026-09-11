# Smart Business Feature Definition — Permissions, Business Isolation & Role Authority

**Status:** MATURE RECONCILED CONTRACT — FULL HYDRATION PASS  
**Build commitment:** **BUILD NOW — CORE SHARED FOUNDATION**  
**Commercial availability:** Core platform/product foundation  
**Authority boundary:** Permission is granted by authenticated business authority and enforced server/data-side. UI visibility, AI confidence or tool capability never creates authority.

---

## 1. Feature Identity

This contract defines who may see or do what inside Smart Business and guarantees that one business/user role cannot access another business's protected data or Owner-only intelligence.

It is a shared foundation used by every feature, channel and integration.

---

## 2. Founder Problem Statement

Smart Business serves Owners, Managers, Employees, Suppliers, Customers and Delivery Staff in different ways.

Without a strong permission model:

- staff could see Owner profit/intelligence;
- one business could leak into another;
- support/admin access could become too broad;
- a chat interface could bypass UI restrictions;
- delegated automation could exceed Owner intent;
- feature integrations could silently widen access.

The product must remain useful without forcing every user into the same privilege level.

---

## 3. Lighthouse Principles

- Owner retains highest business authority.
- Manager authority is delegated, not assumed.
- Employees are operational/self-service users where permitted.
- Suppliers/customers/delivery staff are purpose-limited participants.
- AI Assistant, Not AI Judge.
- Tool access ≠ permission.
- UI hiding ≠ authorization.
- Business isolation is a product promise.
- Denial of a normal unauthorized request is not automatically a moral/security accusation.

---

## 4. Core Authority Model

### Owner

Highest business-level authority within product/governance limits.

Can delegate bounded capabilities to Managers/Employees.

### Manager

Receives only permissions explicitly delegated by Owner/current policy.

Manager does **not** automatically receive:

- Owner profit intelligence;
- unrestricted Ask CFO;
- all financial reports;
- all HR/customer data;
- all billing/platform controls.

### Employee

Operational access only as permitted.

May include, depending on role/configuration:

- add permitted transactions;
- upload permitted receipts/documents;
- operate stock/order tasks;
- view own attendance;
- request attendance correction/leave;
- perform assigned delivery/order work.

Employees do not receive Owner financial intelligence by default.

### Supplier

Purpose-limited communication participant in supplier/reorder workflows. No merchant business-intelligence access.

### Customer

Purpose-limited participant in customer-credit/order/delivery workflows. No merchant dashboard/Ask CFO access.

### Delivery Staff

Purpose-limited assigned-delivery user. No unrelated customers/orders or Owner intelligence.

---

## 5. Permission Dimensions

Permission decisions may need to consider:

- authenticated user;
- business membership;
- role;
- explicit delegated capability;
- object/record ownership/scope;
- action type (read/create/update/approve/export/admin);
- feature entitlement;
- channel/context;
- temporary/purpose-limited grant;
- current account/subscription/security state.

Avoid a simplistic role-only model where a capability needs finer delegation.

---

## 6. Business Isolation

Every protected business record must be scoped to the correct business.

Server/database authorization must prevent:

- cross-business reads;
- cross-business writes;
- cross-business conversation context;
- cross-business file/document access;
- cross-business exports;
- cross-business integration mapping.

Client-provided `business_id` or UI route state must never be trusted by itself as authorization.

---

## 7. Server-side Authorization

Authorization should be enforced at appropriate server/database layers, for example through:

- Row Level Security;
- vetted RPC/service boundaries;
- server functions;
- capability checks;
- object/action validation.

UI controls are secondary usability protections only.

---

## 8. Conversation / AI Permission Boundary

WhatsApp and the native Conversation Workspace must use the same permission model.

A natural-language prompt cannot widen access.

Examples:

- Employee asking `What is our profit?` → deny/redirect according to policy.
- Employee asking `Show my attendance` → allow if permitted.
- Manager asking Ask CFO without Owner-delegated intelligence access → deny/limit.
- Customer asking for another customer's order → deny.

AI must never infer that because it has data in context it is allowed to reveal it.

---

## 9. Ask CFO / Owner Intelligence

Ask CFO is Owner intelligence by default.

Manager access requires explicit delegation/current Product Truth.

Employees, suppliers, customers and delivery staff do not receive Owner-wide Ask CFO intelligence.

This boundary is server/data-enforced, not merely a hidden button.

---

## 10. Employee Self-service

Historical `write-only employee` concepts are superseded where too restrictive.

Employees may receive useful self-service when explicitly permitted, including:

- own attendance;
- own correction requests;
- own leave/request status;
- assigned tasks/orders/deliveries;
- other job-specific information.

Self-service must not expose unrelated staff or Owner intelligence.

---

## 11. Permission-scoped Transaction / Operational Contribution

An Employee may add transactions, receipts/documents, stock/order events or other operations only when the Owner/current role grants that capability.

Created records preserve actor identity.

Permission to create does not automatically grant permission to:

- read all history;
- edit/correct all records;
- export business data;
- view analytics.

---

## 12. Delegated Automation Authority

A standing automation rule is a stored delegation from an authorized Owner.

Execution must verify:

- rule still enabled;
- actor/business scope;
- exact target/action/limits;
- current entitlement/state;
- no revocation/permission change.

A scheduler, AI model or tool can trigger a check but cannot create permission.

---

## 13. Supplier / Customer / Delivery Participation

External participants receive only the minimum information necessary for their workflow.

Examples:

- Supplier sees order/request details relevant to that supplier.
- Customer sees their own order/delivery/credit communication.
- Delivery Staff sees the assigned customer's delivery details.

They must never become generic users of merchant Business Memory or analytics.

---

## 14. Temporary / Purpose-limited Support Access

Team LIPS support may require narrow merchant-specific troubleshooting access.

Such access must follow Support/Super Admin governance:

- legitimate support/security purpose;
- required consent/authorization process;
- minimum module/data;
- time/purpose bounded;
- privileged actor identity;
- audit;
- revocation when resolved.

A support ticket does not imply permanent broad access.

---

## 15. Authentication vs Authorization

Authentication answers **who is this user?**

Authorization answers **what may this user do here?**

A valid login/session alone does not grant:

- business membership;
- Owner role;
- cross-business access;
- feature entitlement;
- admin privileges.

---

## 16. Feature Entitlements

Plan/add-on state may gate whether a feature is available, but entitlement is not a replacement for role permission.

Both may be required:

`entitled business + authorized user + allowed action/object`.

Do not dynamically create/drop domain schema merely to represent entitlement state.

---

## 17. Permission Changes and Runtime Revalidation

Permissions can change while a user has:

- an open screen;
- pending confirmation;
- queued action;
- automation rule;
- long conversation.

Consequential execution must revalidate current authority immediately before action.

A stale UI/confirmation must not execute after permission is revoked.

---

## 18. Confirmation Binding

Where confirmation is required, it must bind:

- exact actor;
- exact business;
- exact action;
- exact target/object;
- exact reviewed state/value;
- expiry/version as appropriate.

A generic `Yes` or stale preview must not authorize a materially changed action.

---

## 19. Auditability

Material authorization/delegation events should preserve, as applicable:

- permission granted/revoked;
- grantor/actor;
- role/capability;
- scope;
- timestamp;
- resulting action/denial where security-sensitive;
- temporary elevated access;
- automation authority provenance.

Do not turn routine permission denials into accusatory incident logs by default.

---

## 20. Error and Denial Behavior

When access is denied:

- do not leak protected data while explaining;
- say what the user can do next where useful;
- preserve normal product operation;
- avoid accusation/shame;
- escalate only if behavior actually meets security/abuse criteria.

A permission failure in one feature should not globally sign out/block unrelated allowed work unless security requires it.

---

## 21. Privacy and Dignity

- No continuous employee surveillance through permissions tooling.
- No hidden staff scoring/accusation.
- No routine broad admin visibility into merchant data.
- No cross-business analytics leakage.
- Permission design should support useful work rather than punish non-Owner users.

---

## 22. Shared Foundation Reuse

Every feature must use this permission/business-isolation foundation rather than inventing independent role logic.

Feature contracts may add domain-specific permissions, but they must compose with the shared model.

---

## 23. Explicit Non-goals

- UI-only permission enforcement;
- Manager = automatic Owner-equivalent;
- Employee = permanent useless write-only account;
- support ticket = unrestricted access;
- AI/tool = authority;
- subscription state = permission to destroy schema;
- routine denial = security accusation.

---

## 24. Acceptance Scenarios

A future Blueprint/EIS must verify at least:

1. Owner can access Owner-authorized data in own business only.
2. Cross-business query/write is denied server-side.
3. Manager sees only delegated capabilities.
4. Employee can add an approved transaction but cannot read Owner analytics.
5. Employee can see own attendance if permitted.
6. Employee cannot gain Ask CFO via natural-language prompt.
7. Supplier/customer/delivery user sees only own bounded workflow data.
8. Permission revoked after preview blocks execution at runtime.
9. Feature entitlement plus role permission are both enforced.
10. Temporary support access is scoped/audited/revoked.
11. Standing automation cannot exceed Owner-delegated scope.
12. Normal denial is respectful and does not expose data.

---

## 25. Historical Corrections / Superseded Behavior

Superseded:

- broad Manager/Employee inheritance of Owner intelligence;
- UI hiding as the security model;
- employee permanently `write-only` with no useful approved self-service;
- routine denial logged as moral/security violation;
- service/master-key access as ordinary broad operational path.

Preserved: strong RLS/business isolation and explicit role/capability delegation.

---

## 26. Provenance and Hydration Coverage

Reconciled from Founder-origin Sections 2–7, especially Section 5/7 role and permission evidence; planning/project-room security lessons; Final Feature Reconciliation Register §19 and §§28–30; Source 02 Supabase architecture; Source 11 authority model; current Security & Permissions governance.

**Hydration result:** all cross-feature Owner/Manager/Employee/external-role authority and business-isolation corrections recovered through the Founder-origin mission are represented here.

---

## 27. Completion Gate

Complete only when the permission model is implemented and independently verified across database/server/UI/conversation/integrations, with business isolation, runtime revalidation, delegation, external-role scoping, privileged support access and acceptance evidence.
