# Smart Reminder Assistant & Delegated Automation

## Feature Identity

**Feature Name:** Smart Reminder Assistant  
**Availability:** Ledger + Manager core  
**Build Commitment:** **BUILD NOW**  
**Shared Foundation Role:** Other approved Smart Business features must reuse this reminder/automation foundation rather than create duplicate schedulers.

## Founder Problem Statement

Merchants carry supplier promises, customer follow-ups, renewals, staff matters, meetings and personal/business commitments in memory. Smart Business should reduce that mental load while preserving human control.

## Core Reminder Behaviour

Users with permission can create reminders conversationally, including business and appropriate personal reminders. A reminder should preserve:

- what must be remembered;
- when;
- relevant person/business/feature context;
- recurrence where requested;
- creator/business scope;
- state/history.

If timing or meaning is unclear, ask the smallest useful clarification.

## Interaction Model

A reminder may offer context-appropriate actions such as:

- Done / Already Done;
- Snooze;
- Tomorrow;
- Next week;
- Custom reschedule.

The exact controls should fit the reminder rather than use one rigid historical button set.

Recurring reminders must preserve recurrence and occurrence history without creating duplicate noise.

## Cross-Feature Reuse

The shared Reminder Engine may be used by:

- Ask CFO follow-up;
- Compliance Shield;
- supplier/reorder follow-up;
- Smart Credit Awareness;
- stock/expiry review;
- Staff/HR actions;
- Smart Order & Delivery exceptions/follow-up;
- onboarding or support only where current Product Truth authorizes a user-facing reminder.

## Reminder vs Automation

A **reminder** asks a human to act, decide, acknowledge or reschedule.

An **automation rule** performs a bounded action only because valid authority already exists.

Core law:

> Automation is delegated authority, not machine sovereignty.

Default for consequential business action: **ask confirmation**.

## Owner-Delegated Standing Rules

An Owner may create a standing rule such as a bounded reorder instruction. A mature rule should preserve:

- exact business scope;
- action type;
- trigger conditions;
- target/item/person;
- limits/quantity/value where relevant;
- destination/channel where relevant;
- creator and authority provenance;
- enabled/paused/revoked state;
- creation/modification timestamps;
- trigger/execution history;
- failure/retry state.

The system must never invent permission or expand a rule beyond its stored scope.

## Consequential Action from a Reminder

A reminder may contain an explicit action such as `Paid & Log Expense` only when:

1. the user has authority;
2. the exact amount/party/action is known or reviewed;
3. the user explicitly confirms unless a valid standing rule already covers the action;
4. the normal governed Ledger/action service performs the write;
5. the reminder and financial audit history remain linked and intact.

A due date passing is never proof that payment or another business event occurred.

## Permissions

- Owner: full reminder/standing-rule authority within product limits.
- Manager: only delegated reminder/automation authority.
- Employee: only permitted self/operational reminders or workflow actions; cannot create Owner-level financial automation by default.
- Other roles: only bounded workflow interactions explicitly supported by their feature.

## Notification / Channel Behaviour

Reminder state is channel-independent. Delivery may use approved channels, but one reminder should not become duplicated business truth because it was surfaced in WhatsApp and the Conversation Workspace.

## Confirmation and Security

Consequential automation must:

- bind confirmation to the exact reviewed action/state/actor;
- revalidate current permission immediately before execution;
- use idempotency/duplicate protection;
- preserve actor and authority provenance;
- stop only the affected action on failure.

## Error and Exception Behaviour

Handle:

- ambiguous time;
- missing target/context;
- stale or changed underlying business state;
- duplicate trigger;
- notification failure;
- revoked permission;
- revoked/paused standing rule;
- action execution failure;
- recurring schedule conflict.

A reminder notification failure must not falsely mark the underlying task complete.

## Privacy

Private/personal reminders must not leak to staff or other roles. Cross-feature reminders inherit the permissions of the underlying business object.

## Explicit Non-goals

- duplicate reminder systems per feature;
- AI-created authority;
- silent financial commitments;
- treating notification delivery as proof of business completion;
- automatic supplier ordering without direct confirmation or valid stored delegation.

## Historical Corrections

Preserve the original goal of proactive assistance. Reject older blind autonomous-daemon framing where it created consequential business authority. Historical fixed category enums, cron times and button sets are implementation provenance.

## Provenance

Reconciled from Founder-origin Sections 3, 6 and 7; Source 05 delegated-authority rules; Source 06 supplier automation rules; Source 11 Smart Reminder Assistant; and project security lessons on exact confirmation binding and execution-time permission revalidation.
