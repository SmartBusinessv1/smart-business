# Smart Business Feature Definition — Smart Reminder & Delegated Automation

**Status:** MATURE RECONCILED CONTRACT — FULL HYDRATION PASS  
**Build commitment:** **BUILD NOW**  
**Commercial availability:** Ledger + Manager core/shared foundation  
**Authority boundary:** Reminders help humans remember. Automation may execute only within explicit stored authority; a trigger never creates permission.

---

## 1. Feature Identity

Smart Reminder is the shared Smart Business foundation for remembering commitments, follow-ups, deadlines and context. Delegated Automation extends that foundation only where an Owner has explicitly granted a bounded standing instruction.

Other features must reuse this system rather than create separate reminder schedulers.

---

## 2. Founder Problem Statement

Merchants carry too many obligations in memory:

- supplier follow-up;
- customer credit collection;
- licences and renewals;
- stock review;
- employee matters;
- delivery follow-up;
- business/personal commitments;
- Ask CFO discussions to revisit later.

Smart Business should reduce that mental load without turning reminders into hidden machine authority.

---

## 3. Lighthouse Principles

- AI Assistant, Not AI Judge.
- Human decision ownership.
- Reminder ≠ proof that an event happened.
- Trigger ≠ authority.
- Default consequential behavior is confirmation-first.
- Standing automation is explicit delegated authority, not autonomous AI sovereignty.
- Avoid duplicate/noisy reminders.
- Preserve history and auditability.

---

## 4. Core Reminder Model

A reminder should preserve, as applicable:

- business/user scope;
- creator;
- title/intent;
- due date/time;
- timezone;
- recurrence;
- related customer/supplier/employee/document/order/credit/compliance object;
- source conversation/context reference;
- status;
- snooze/reschedule history;
- completion actor/time;
- notification delivery state.

The model should be shared across features.

---

## 5. Natural-language Creation

Approved users may create reminders through text or voice in WhatsApp or the Conversation Workspace.

Examples:

- `Remind me tomorrow to call ABC Traders.`
- `Next Monday remind me to check the FSSAI renewal.`
- `Remind me at 6 PM to continue this Ask CFO discussion.`

If timing, target or intent is ambiguous, ask the smallest useful clarification.

---

## 6. Reminder Interaction

Context-appropriate actions may include:

- Done / Already Done;
- Snooze;
- Tomorrow;
- Next week;
- Custom reschedule;
- Open related record/action where permitted.

Exact buttons are a UX decision; the durable behavior is human acknowledgement/rescheduling with preserved history.

---

## 7. Recurring Reminders

Recurring reminders must preserve the recurrence rule separately from each occurrence.

Completing one occurrence must not silently destroy future recurrence.

The system must avoid duplicate occurrences caused by retries or channel duplication.

---

## 8. Cross-feature Reuse

This foundation is reused by, among others:

- Ask CFO continuation;
- Compliance Shield;
- supplier/reorder follow-up;
- Smart Credit Awareness;
- stock/expiry review;
- Staff/HR actions;
- Order & Delivery follow-up/exceptions;
- approved onboarding/support follow-up.

Feature-specific reminder tables/schedulers are rejected unless architecture demonstrates a genuinely separate domain requirement.

---

## 9. Reminder vs Business Event

A reminder becoming due does not prove:

- payment happened;
- supplier order was placed;
- employee action occurred;
- licence was renewed;
- customer paid;
- delivery completed.

The actual business event must be recorded through the appropriate governed feature service.

---

## 10. Reminder → Consequential Action

A reminder may offer a bounded action such as:

- `Paid & Log Expense`;
- `Mark customer payment received`;
- `Approve reorder`;
- `Open renewal document`.

Before action:

1. identify the exact target/action;
2. verify current state;
3. verify actor permission;
4. show/confirm consequential facts unless a valid standing rule already authorizes the action;
5. execute through the authoritative feature service;
6. preserve linked reminder/business audit history.

---

## 11. Delegated Standing Automation

An Owner may deliberately create a bounded standing rule.

A mature standing rule should preserve:

- business scope;
- exact action type;
- trigger conditions;
- target/item/person;
- quantity/value/limit where relevant;
- permitted channel/destination where relevant;
- creator/authority provenance;
- effective date/time;
- enabled/paused/revoked state;
- modification history;
- trigger/execution history;
- failure/retry history.

The rule must never expand itself beyond stored authority.

---

## 12. Reorder Example

Default:

> Low stock detected → Smart Business suggests reorder → Owner reviews/approves/edits/defers/cancels.

Only when the Owner has created a valid bounded standing rule may the approved reorder action execute automatically within that exact scope.

A historical background trigger is not authority by itself.

---

## 13. Users and Permissions

### Owner

May create/manage reminders and approved standing rules within product limits.

### Manager

May create reminders and automation only within Owner-delegated authority.

### Employee

May use permitted self/operational reminders. Employees cannot create Owner-level financial/procurement automation by default.

### Other roles

Only bounded workflow interactions explicitly provided by their feature.

---

## 14. Channel Behavior

Reminder truth is channel-independent.

A reminder shown in both WhatsApp and the Conversation Workspace remains one reminder, not two records.

Notification delivery failure is separate from reminder/business state.

---

## 15. Human Language and Voice

Reminder creation/interaction supports English, Malayalam and Manglish through the shared Human Language Layer, plus Basic Voice where permitted.

Ambiguous time phrases must be clarified when necessary rather than silently guessed.

---

## 16. Confirmation and Execution Security

Consequential execution must:

- bind confirmation to the exact reviewed action/state/actor;
- revalidate authorization immediately before execution;
- use idempotency/duplicate protection;
- record actor and authority provenance;
- fail narrowly if underlying state changed.

A stale confirmation must not execute a changed action.

---

## 17. Notification Behavior

Use the shared Notification foundation.

Notification should respect:

- user role;
- preferred language;
- channel availability;
- quiet/reasonable delivery behavior where appropriate;
- duplicate suppression;
- privacy.

Notification success does not equal business-action success.

---

## 18. Error and Exception Behavior

Handle:

- ambiguous date/time;
- missing target/context;
- stale related business state;
- duplicate trigger;
- notification provider failure;
- revoked permission;
- paused/revoked standing rule;
- failed action execution;
- recurrence conflict;
- timezone change;
- channel outage.

A broken reminder path must not freeze unrelated features.

---

## 19. Privacy and Trust

- Private/personal reminders must not leak to staff.
- Feature-linked reminders inherit permission sensitivity of the linked object.
- Reminder text should avoid exposing sensitive Owner information to unauthorized roles.
- Automation history must be auditable to the authority that created it.

---

## 20. Shared Foundations to Reuse

Reuse:

- Business Memory/linking;
- identities;
- Permission Engine;
- Human Language Layer;
- Conversation channels;
- Notification foundation;
- audit/idempotency;
- feature action services.

---

## 21. Explicit Non-goals

- duplicate reminder engines per feature;
- AI-created permission;
- silent financial/procurement commitments;
- due date treated as proof of event;
- blind supplier orders;
- global product lock because one reminder failed.

---

## 22. Acceptance Scenarios

A future Blueprint/EIS must verify at least:

1. Natural-language one-time reminder.
2. Ambiguous timing → clarification.
3. Recurring reminder preserves future occurrences/history.
4. Snooze/reschedule does not create duplicate reminder truth.
5. Same reminder visible across channels without duplication.
6. Reminder due does not create payment/event automatically.
7. Consequential action requires valid confirmation or standing authority.
8. Standing rule cannot exceed stored limit/scope.
9. Revoked permission blocks execution at runtime.
10. Notification failure does not falsely mark completion.
11. Duplicate trigger is idempotent.
12. Narrow failure leaves unrelated operations available.

---

## 23. Historical Corrections / Superseded Behavior

Preserve proactive assistance.

Superseded:

- blind autonomous-daemon framing;
- trigger interpreted as authority;
- feature-specific duplicate schedulers;
- historical fixed enums/button sets/cron times as immutable Product Truth.

---

## 24. Provenance and Hydration Coverage

Reconciled from Founder-origin Sections 3, 6 and 7; planning/project-room history; Final Feature Reconciliation Register §11 and §§28–30; current security lessons on exact confirmation binding and execution-time revalidation; Source 01/11.

**Hydration result:** all current reminder/delegated-automation behaviors recovered from Founder-origin evidence are represented here or delegated to named shared action/notification/permission foundations.

---

## 25. Completion Gate

Complete only when reminder creation, recurrence, interaction, cross-channel continuity, notifications, delegated rules, confirmation/revalidation, audit/idempotency, privacy, failure recovery and runtime acceptance are proven together.
