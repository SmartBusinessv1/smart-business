# Smart Business Feature Definition — Conversation Workspace & Channel Independence

**Status:** MATURE RECONCILED CONTRACT — FULL HYDRATION PASS  
**Build commitment:** **BUILD NOW**  
**Commercial availability:** Core shared conversational channel for Ledger + Manager  
**Authority boundary:** The native Smart Business conversation surface is a first-class alternative to WhatsApp, not a separate business engine and not merely an outage-only fallback.

---

## 1. Feature Identity

The Smart Business Conversation Workspace is the chat-style interaction surface inside the Smart Business web application.

It allows an authorized user to communicate with the same Smart Business assistant through the app using text, voice, images and business files, while receiving useful replies and downloadable outputs.

It exists so merchants can continue working when:

- WhatsApp API is degraded or unavailable;
- the merchant does not want to use the phone on which WhatsApp is installed;
- the merchant prefers a laptop, desktop or tablet for a particular task;
- richer file/upload/download interaction is easier in the web app.

---

## 2. Founder Problem Statement

Smart Business is conversation-first, but conversation-first must not mean channel-dependent.

A third-party messaging outage must not stop the merchant's business system. Likewise, a merchant should not be forced to stay on a phone when a larger workspace is more convenient.

The native workspace must therefore provide continuity without creating two versions of Smart Business.

---

## 3. Lighthouse Principles

The feature must preserve:

- merchant freedom of channel choice;
- continuity without duplicate business logic;
- simplicity and familiar chat interaction;
- human decision ownership;
- privacy and role boundaries;
- one Business Memory;
- one permission model;
- one confirmation/clarification model;
- no security bypass for convenience.

---

## 4. Supported Inputs

Subject to role, feature availability and normal validation, the Conversation Workspace must support:

- text;
- voice;
- images/photos;
- Excel;
- CSV;
- PDF;
- other approved business documents.

An uploaded file is not automatically trusted business truth. File interpretation follows Universal Document Intelligence rules.

---

## 5. Supported Outputs

The workspace should support, where useful and authorized:

- text responses;
- short voice responses;
- structured visual summaries;
- useful images/media where a feature needs them;
- Ask CFO responses;
- confirmations and clarification prompts;
- reminders/actions presented for human choice;
- downloadable Excel/CSV/PDF outputs;
- business-document retrieval where permitted.

Dense numerical data should favor readable text/tables/files rather than forcing long audio.

---

## 6. One Product, Multiple Channels

WhatsApp and the Conversation Workspace must share the same underlying:

- business identity;
- user identity;
- Business Memory;
- conversation/context model where permitted;
- Permission Engine;
- Human Language Layer;
- Universal Document Intelligence;
- Ask CFO reasoning;
- reminder/automation services;
- notification/action services;
- confirmation/clarification rules;
- audit/idempotency foundations.

They must not create separate ledgers, separate permissions, separate reminders, separate document parsers or feature-specific business truth merely because the channel differs.

---

## 7. Channel Continuity

A user should be able to begin a valid workflow in one approved channel and continue in another without duplicating the underlying business record.

Where a workflow contains a pending consequential confirmation:

- the system should preserve the pending state safely;
- the exact reviewed action must remain bound to the confirmation;
- authority must be revalidated before execution;
- switching channels must not silently reinterpret or execute the action.

Conversation context may follow the user within current privacy/retention policy, but authoritative stored business state always controls over transient chat memory.

---

## 8. Users and Permission Boundaries

### Owner

May access capabilities available to the business and Owner role.

### Manager

May access only Owner-delegated capabilities. Manager status does not automatically grant Owner profit, Ask CFO or unrestricted intelligence.

### Employee

May access the workspace only for explicitly permitted operational actions and approved self-service information.

### Customer / Supplier / Delivery Staff

Do not receive the Owner's general Conversation Workspace. Their participation is through purpose-limited workflows/channels explicitly defined by the relevant feature.

---

## 9. Ask CFO in the Workspace

Ask CFO must be available through the Conversation Workspace under the same read-only intelligence boundary as WhatsApp.

Ask CFO may:

- retrieve authorized business facts;
- explain and compare;
- identify patterns;
- suggest actions;
- offer continuation into another feature.

Ask CFO does not gain record-write authority merely because it is displayed inside the app.

---

## 10. Document and File Experience

Image/Excel/CSV/PDF/business-document uploads reuse Universal Document Intelligence:

**upload → interpret → preview → clarify where needed → confirm → validated update**.

The workspace should let users:

- upload;
- review extracted/interpreted content;
- correct uncertainty;
- confirm the intended business action;
- receive success/failure state;
- retrieve permitted documents/exports later.

Unsupported or unsafe files must fail clearly without affecting unrelated product operation.

---

## 11. Voice Experience

Basic Voice is available according to current plan/permission rules.

Voice in the workspace should support:

- business input;
- questions;
- reminders;
- operational commands;
- clarification;
- short useful responses.

Voice Plus adds deeper multi-turn voice depth, but the workspace must not require Voice Plus for basic approved voice interaction.

---

## 12. Human Language

English, Malayalam and Manglish are first-class.

The user should not need to adopt formal software terminology to use the workspace. Mixed-language business expressions should be interpreted through the shared Human Language Layer.

Consequential ambiguity must trigger clarification rather than guesswork.

---

## 13. Business Actions

The workspace may prepare or initiate feature actions, but execution belongs to the underlying feature service.

Examples:

- create a Ledger transaction;
- confirm an interpreted receipt;
- create a reminder;
- create an order draft;
- approve a reorder;
- submit an attendance correction request.

Each action must inherit:

- current role permission;
- feature-specific confirmation rules;
- idempotency/audit behavior;
- current business state.

The chat UI itself is never the source of authority.

---

## 14. WhatsApp Failure / Degradation Behavior

If WhatsApp delivery or API availability fails while Smart Business remains healthy:

- the Conversation Workspace remains usable;
- background jobs continue where dependencies are healthy;
- POS/API ingestion continues where available;
- payment reconciliation continues;
- scheduled business intelligence may continue through other approved surfaces/channels;
- failed WhatsApp delivery is reported as a channel failure, not automatically as failure of the underlying business action;
- retry must not duplicate consequential actions.

---

## 15. Authentication and Session Boundaries

Authentication method and Smart Business business identity are separate concepts.

The workspace must:

- require a valid authorized session;
- resolve the correct business/role;
- prevent cross-business context leakage;
- handle session expiry/re-authentication safely;
- revalidate permission before consequential execution.

UI visibility does not substitute for server/data authorization.

---

## 16. Conversation History and Retention

Conversation history may improve continuity, but it is not unlimited authority or permanent memory by default.

Retention must follow current privacy/account-lifecycle policy.

The system must distinguish:

- conversational context;
- durable Business Memory;
- documents/files;
- audit/history;
- temporary preview/confirmation state.

These should not be collapsed into one uncontrolled transcript store.

---

## 17. Clarification and Confirmation

The workspace must ask the smallest useful question when consequential intent is unclear.

Examples:

- ambiguous customer/supplier;
- unclear amount/date;
- uncertain document extraction;
- multiple payment matches;
- unclear item/quantity;
- permission-sensitive action.

Confirmation must bind to the exact reviewed action and current actor/state. Execution-time permission revalidation is required.

---

## 18. Error and Exception Behavior

Handle at minimum:

- WhatsApp/channel outage;
- web session expiry;
- failed file upload;
- unsupported/unsafe file;
- low-confidence interpretation;
- permission change during conversation;
- duplicate submission;
- stale confirmation;
- provider/model failure;
- failed download/render;
- channel switch during pending confirmation;
- underlying feature service failure.

A narrow failure must not freeze unrelated Smart Business operation.

---

## 19. Privacy and Trust Boundaries

- No cross-business conversation context leakage.
- No Employee escalation into Owner intelligence through chat.
- No channel-based permission widening.
- Sensitive audio should not be played to unauthorized roles.
- File access follows business/role authorization.
- Continuity does not justify bypassing security.
- Merchant data remains merchant data; the chat surface is not a platform surveillance channel.

---

## 20. Performance and UX Expectations

Common conversation interactions should target the current Smart Business sub-3-second experience where technically reasonable.

Longer operations should:

- show progress;
- avoid duplicate submission;
- allow safe retry/recovery;
- never trade away permission, integrity or confirmation safeguards merely for speed.

The interface should feel calm, familiar and useful rather than like a complex ERP console.

---

## 21. Shared Foundations to Reuse

Reuse:

- Business Memory;
- Permission Engine / business isolation;
- Human Language Layer;
- Universal Document Intelligence;
- Ask CFO;
- Voice foundation;
- Reminder/Delegated Automation;
- shared identities;
- notification foundation;
- audit/idempotency;
- feature-specific action services.

---

## 22. Explicit Non-goals

- a separate web-only Ledger or intelligence engine;
- a generic unrestricted AI chatbot;
- replacing WhatsApp as a product decision;
- duplicating data/permissions by channel;
- offline-without-internet operation unless separately approved;
- public customer/supplier portal into Owner intelligence.

---

## 23. Acceptance Scenarios

A future Blueprint/EIS must verify at least:

1. Owner enters a text transaction in the workspace and receives accurate stored-state confirmation.
2. Owner sends voice and receives the same permission/clarification behavior as text.
3. User uploads an image/PDF/CSV and receives UDI preview before consequential update.
4. Owner uses Ask CFO without granting it record-write authority.
5. Employee cannot obtain Owner intelligence through conversation prompts.
6. Workflow can begin on WhatsApp and continue in the app without duplicate business records.
7. WhatsApp outage does not stop healthy app/background operations.
8. Permission revoked before execution blocks only the pending action.
9. Duplicate/retry does not duplicate consequential writes.
10. Cross-business context leakage is impossible under server-side authorization.

---

## 24. Historical Corrections / Superseded Behavior

Superseded:

- treating WhatsApp as the only usable Smart Business interface;
- treating the native app as a passive dashboard only;
- separate business logic per channel;
- allowing a WhatsApp outage to halt unrelated backend/web operations.

Historical carrier-SMS fallback ideas remain implementation history, not a required current channel.

---

## 25. Provenance and Hydration Coverage

Reconciled from:

- Founder direct Q90 update in Founder-origin Section 7;
- Section 7 cross-feature architecture/anti-duplication/failure evidence;
- planning/project-room conversation-first history;
- Final Feature Reconciliation Register §§5, 28–30;
- Source 01 and Source 11 Conversation First / Channel Independence truth.

**Hydration result:** all current Founder-origin behaviors assigned to Conversation Workspace/channel independence are explicitly represented here or delegated to named shared feature contracts.

---

## 26. Unresolved Founder Questions

None regarding existence, first-class status or Build Now commitment.

Exact visual navigation placement, component design and implementation technology remain downstream product/engineering design decisions.

---

## 27. Completion Gate

Completion requires a verified native conversational experience across text/voice/files, shared Business Memory, role enforcement, confirmation, document handling, channel continuity, error recovery and runtime acceptance. A chat-looking screen alone is not feature completion.
