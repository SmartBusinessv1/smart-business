# Smart Business Feature Definition — WhatsApp Intelligence & Channel Adapter

**Status:** MATURE RECONCILED CONTRACT — FULL HYDRATION PASS  
**Build commitment:** **BUILD NOW — CORE CHANNEL ADAPTER**  
**Commercial availability:** Shared across Ledger, Manager and approved add-ons  
**Authority boundary:** WhatsApp delivers the conversation channel. Smart Business owns Business Memory, permissions, intelligence, workflows and final business truth.

---

## 1. Feature Identity

WhatsApp Intelligence is the approved WhatsApp-facing communication and interaction layer of Smart Business.

It exists so Kerala merchants can use the business assistant through a familiar channel without creating a separate WhatsApp-only product architecture.

WhatsApp must function as an adapter over the same Smart Business foundations used by the native Conversation Workspace.

It must not own separate:

- Ledger logic;
- Ask CFO logic;
- reminder logic;
- permissions;
- document intelligence;
- customer/supplier identity;
- Business Memory;
- automation authority.

---

## 2. Founder Problem Statement

Many target merchants already operate naturally through WhatsApp. Requiring them to abandon that habit would add friction and undermine the Lighthouse principle of technology adapting to humans.

At the same time, placing business truth inside WhatsApp-specific handlers would create fragility, duplication and dependency on one external platform.

The product therefore needs:

- WhatsApp-first convenience;
- channel-independent Smart Business logic;
- safe business continuity when WhatsApp is unavailable;
- consistent permissions and memory across channels.

---

## 3. Lighthouse Principles

- Respect existing merchant habits.
- WhatsApp is a channel, not the owner of business truth.
- AI assists; humans retain authority.
- Permission rules apply before expensive/intelligent processing.
- Business continuity must survive channel degradation.
- No channel may weaken privacy, confirmation or auditability.
- Failed delivery must not be confused with failed business action.

---

## 4. Supported Participants

### Owner

May use WhatsApp for all capabilities allowed by product entitlement and business authority, including approved Ledger, Ask CFO, reminder, voice, document and operational workflows.

### Manager

May use only Owner-delegated capabilities. WhatsApp does not automatically grant Owner-level financial intelligence.

### Employee

May use only permission-scoped operational flows such as approved transaction entry, receipt/document upload, attendance and allowed self-service. Employee WhatsApp access must not expose Ask CFO, profit or full Owner analytics by default.

### Supplier

May participate only in bounded supplier communication such as approved purchase-request/reorder responses. Supplier participation does not grant merchant intelligence access.

### Customer / Delivery Staff

May participate only in approved purpose-limited workflows such as order, delivery, proof or status communication. They do not gain merchant dashboard or Owner intelligence access.

### Unknown Sender

An unknown sender must not automatically receive access to business intelligence or trigger expensive processing. The system should route to the approved onboarding/unknown-user path where appropriate.

---

## 5. Inbound WhatsApp Intake

The WhatsApp adapter should support approved inbound message classes including:

- text;
- voice notes/audio;
- images/photos;
- documents where supported;
- interactive replies/buttons;
- location where an approved workflow requires it;
- delivery/status events from Meta where applicable.

Every inbound event must be treated as an external event requiring validation before it affects Smart Business state.

---

## 6. Webhook Boundary

The approved inbound webhook route remains hidden/internal:

`/api/whatsapp-webhook`

Webhook responsibilities include:

- Meta verification handshake;
- request/signature verification where supported/required;
- payload validation;
- event classification;
- sender identity resolution;
- business/role resolution;
- entitlement and permission pre-checks;
- media metadata handling;
- safe dispatch to shared Smart Business services;
- response/delivery coordination;
- retry and idempotency handling;
- failure logging/observability.

The webhook must not become a large repository of feature-specific business rules.

---

## 7. Identity Routing

Every inbound sender must resolve to the correct Smart Business identity and business scope before protected operations.

Possible identities include:

- Owner;
- Manager;
- Employee;
- supplier;
- customer;
- delivery staff;
- unknown user.

Identity ambiguity must be clarified or safely rejected before a consequential action.

A phone number is an authentication/routing signal, not permission by itself.

---

## 8. Permission and Entitlement Gate

Before protected business processing, Smart Business must establish:

1. business identity;
2. participant identity/role;
3. account/subscription entitlement where relevant;
4. feature permission;
5. business-object scope where required.

Unauthorized users must not be allowed to reach hidden Owner data merely by sending natural-language prompts.

Where a request is blocked, the response should be useful and respectful without revealing sensitive data.

---

## 9. Shared AI / Intent Pipeline

WhatsApp input should enter the same central AI/orchestration foundation used by the native Conversation Workspace.

The high-level flow is:

**WhatsApp event → identity/permission context → modality processing → intent understanding → domain routing → clarification/confirmation where required → governed domain service → Business Memory → response/notification adapter**

WhatsApp must not maintain a separate parser or business-intelligence brain.

The dedicated AI orchestration contract is:

`24_AI_Orchestration_and_OpenAI_Intelligence_Foundation.md`

---

## 10. Text Experience

Text should support natural English, Malayalam and Manglish business interaction.

Examples include:

- recording business events;
- asking Ask CFO questions;
- creating reminders;
- updating stock where permitted;
- initiating reorder/order workflows;
- asking for reports or documents;
- support questions.

Not every message is a transaction. Intent must be determined before domain execution.

Consequential ambiguity must trigger the smallest useful clarification.

---

## 11. Voice Experience

WhatsApp voice notes should reuse the Basic Voice / Voice Plus and Human Language foundations.

High-level pattern:

**voice media → secure media retrieval → transcription → shared intent/orchestration → governed feature action or response**

Voice does not create additional authority.

Uncertain transcription must not silently create financial or operational records.

The system should provide concise confirmation and readable text where precise figures matter.

---

## 12. Image / Receipt / Document Experience

WhatsApp images/documents must reuse Universal Document & Receipt Intelligence.

High-level pattern:

**media → security/business-relevance checks → secure storage/temporary processing → interpretation/OCR/vision → preview → clarification where needed → confirmation → validated domain update**

Examples include:

- receipts/invoices;
- stock documents;
- rosters;
- order lists;
- compliance documents;
- other approved business files.

Direct uncertain OCR-to-production-write is rejected.

---

## 13. Ask CFO Through WhatsApp

Ask CFO must be available to authorized Owners through WhatsApp using the same read-only intelligence service used elsewhere.

WhatsApp-specific rules:

- channel does not broaden Ask CFO permissions;
- answers must use authorized Business Memory;
- missing/stale/conflicting data must be disclosed;
- Ask CFO may suggest but does not directly mutate business records;
- any chosen action continues through the relevant governed workflow.

---

## 14. Smart Reminder Through WhatsApp

WhatsApp may create and surface reminders, but reminder state belongs to the shared Reminder Engine.

Supported interaction may include:

- natural reminder creation;
- Done / Already Done;
- Snooze;
- reschedule;
- approved contextual actions.

A WhatsApp reply must update the same reminder truth visible in the Conversation Workspace.

---

## 15. Interactive Messages and Confirmations

Buttons/interactive replies may improve speed, but they must not become an authority shortcut.

Consequential confirmation must bind to:

- exact actor;
- exact business;
- exact action;
- exact target/object;
- reviewed state/version;
- permitted execution window where relevant.

A generic or stale `Yes` must not authorize an unrelated action.

Execution must revalidate permission and state.

---

## 16. Outbound WhatsApp Communication

WhatsApp may deliver approved outbound communication including:

- business confirmations;
- reminders;
- Daily Intelligence;
- order/delivery updates;
- supplier requests;
- support messages;
- compliance alerts;
- payment/credit awareness;
- other authorized notifications.

Outbound content must respect:

- role/recipient;
- business scope;
- language preference;
- channel/session/template requirements;
- privacy;
- duplicate suppression;
- feature entitlement.

---

## 17. Template and Session Messaging

Meta template/session rules are provider constraints, not Smart Business product truth.

The adapter must:

- use templates where Meta requires them;
- avoid unnecessary template use;
- keep template/provider identifiers outside domain business logic;
- fail gracefully when a template is unavailable/rejected;
- preserve the underlying business event even if delivery fails.

---

## 18. Media Storage and Retrieval

WhatsApp media handling must separate provider transport from Smart Business data ownership.

Requirements include:

- secure media retrieval;
- controlled temporary/provider URL handling;
- approved storage profile for retained business files;
- business/actor/source linkage;
- permission-scoped retrieval;
- content/business-relevance checks where applicable;
- retention rules from the relevant document/account lifecycle contracts.

Meta media URLs must not become the permanent Business Memory record by accident.

---

## 19. Delivery Status and Business State

Message delivery status is communication metadata.

It must not be confused with business completion.

Examples:

- successful WhatsApp delivery does not prove a supplier accepted an order;
- failed WhatsApp delivery does not necessarily mean a Ledger write failed;
- a customer not replying does not automatically invalidate otherwise sufficient delivery proof;
- a reminder message delivered does not mark the reminder complete.

Business state must be updated only by the corresponding governed workflow.

---

## 20. Retry and Idempotency

Webhook retries and provider duplicates are normal integration behavior.

The adapter must prevent duplicate:

- Ledger writes;
- reminders;
- orders;
- media imports;
- notifications;
- supplier requests;
- payment/credit updates;
- other consequential actions.

Provider event/message identifiers should be used where appropriate, but exact implementation belongs to EIS.

---

## 21. WhatsApp Outage / Degradation

If WhatsApp is unavailable or degraded:

- the native Conversation Workspace remains the approved merchant conversational alternative;
- Business Memory remains available through healthy Smart Business services;
- background jobs continue where dependencies are healthy;
- POS/API/payment reconciliation continue independently;
- failed outbound messages are recorded/retried according to policy;
- underlying successful business actions must not be duplicated during recovery.

Smart Business must not make merchant continuity depend exclusively on Meta availability.

---

## 22. Cross-Channel Continuity

A merchant should be able to use WhatsApp and later open the native Conversation Workspace without finding a second Smart Business.

Both channels must share:

- business identity;
- authorized user identity;
- Business Memory;
- conversation context where retention/privacy permits;
- AI orchestration;
- permissions;
- confirmations;
- reminders;
- document intelligence;
- Ask CFO;
- business actions;
- audit history.

A channel switch must not duplicate transactions or lose authoritative business state.

---

## 23. Security and Privacy

The WhatsApp adapter must protect:

- Meta access tokens;
- webhook secrets/signatures;
- business isolation;
- user/customer/supplier privacy;
- media/document access;
- Owner financial intelligence;
- internal service credentials.

Credentials must never be hard-coded into client-facing code or logs.

Inbound message content should be passed downstream only with the minimum context required for the authorized task.

---

## 24. Failure and Recovery Behaviour

The adapter must handle at minimum:

- invalid signature/payload;
- unknown sender;
- revoked/expired credential;
- Meta outage/rate limit;
- duplicate webhook;
- media download failure;
- unsupported/corrupt media;
- transcription/OCR/AI failure;
- permission denial;
- stale confirmation;
- outbound template failure;
- message delivery failure;
- downstream domain-service failure.

Required recovery principle:

> Stop only the unsafe/failed path, preserve evidence where appropriate, explain what failed, and keep unrelated Smart Business operations available.

---

## 25. Observability and Auditability

Operational evidence should preserve, as appropriate:

- provider event/message ID;
- sender/recipient identity reference;
- business scope;
- received/sent timestamp;
- message/media type;
- routing outcome;
- permission result;
- interpretation/intent reference;
- confirmation reference;
- resulting domain action reference;
- delivery/retry/failure state.

Sensitive payloads should not be over-logged merely for convenience.

---

## 26. Performance and Cost Discipline

The channel should feel responsive, but cost optimization must not weaken correctness.

Use sensible protections such as:

- identity/permission checks before expensive processing;
- FAQ-first support where appropriate;
- efficient model selection through the AI orchestration foundation;
- media processing only when business-relevant;
- duplicate suppression;
- safe batching/background work where appropriate.

---

## 27. Frontend / User Experience Relationship

WhatsApp itself is not controlled by the Smart Business frontend, but the product must provide coherent complementary app surfaces for:

- viewing records created through WhatsApp;
- correcting/reviewing consequential records;
- viewing reminder state;
- retrieving documents;
- continuing conversations in the native Workspace;
- reviewing failed/pending workflows where applicable.

The app should never make a merchant re-enter data only because it originated in WhatsApp.

---

## 28. Backend / Data Obligations

Later Blueprint/EIS work must account for backend capabilities such as:

- webhook ingress and validation;
- identity/business resolution;
- provider event idempotency;
- permission/entitlement checks;
- media retrieval and storage linkage;
- channel-independent conversation/action dispatch;
- outbound messaging adapter;
- delivery/retry status;
- audit/observability;
- links to shared Business Memory/domain records.

Exact tables/functions/providers remain engineering decisions unless current architecture separately locks them.

---

## 29. Explicit Non-goals

This contract does not authorize:

- a second WhatsApp-only Ledger;
- duplicate WhatsApp-only Ask CFO;
- duplicate reminder engine;
- duplicate OCR/document engine;
- embedding core business rules directly in provider webhook handlers;
- treating a phone number as unrestricted authority;
- skipping permission checks because a user previously interacted;
- treating message delivery as business completion;
- making WhatsApp the only channel where core workflows can operate.

---

## 30. Acceptance Expectations

Future Product Blueprint/EIS/runtime verification should prove at least:

1. signed/validated webhook intake;
2. correct Owner/Manager/Employee/external-party identity routing;
3. unknown-user protection;
4. text transaction/reminder/Ask CFO intent routing through shared services;
5. voice note → transcription → shared intent flow;
6. receipt/photo → UDI preview/confirm flow;
7. permission denial without data leakage;
8. exact confirmation binding/revalidation;
9. duplicate webhook does not duplicate business action;
10. outbound delivery failure does not corrupt business state;
11. Meta outage leaves native Workspace/business services usable;
12. WhatsApp and Workspace show the same Business Memory/reminder/action truth;
13. cross-business isolation;
14. credentials/secrets protected;
15. audit links channel event to resulting governed action.

---

## 31. Dependencies

This contract depends on and must reuse:

- `09_Human_Language_Layer.md`;
- `10_Conversation_Workspace_and_Channel_Independence.md`;
- `11_Smart_Reminder_and_Delegated_Automation.md`;
- `12_Voice_and_Voice_Plus.md`;
- `21_Permissions_Business_Isolation_and_Role_Authority.md`;
- `22_Shared_Product_Foundations.md`;
- `24_AI_Orchestration_and_OpenAI_Intelligence_Foundation.md`;
- `05_Universal_Document_and_Receipt_Intelligence.md`;
- relevant domain feature contracts.

---

## 32. Historical Corrections / Provenance

Current contract preserves the useful intent from:

- Source 04 — API / WhatsApp / OpenAI Communication Framework;
- Founder-origin multimodal intake and anti-duplication history;
- Question 90 channel-independence Founder direction;
- Question 87–100 shared-foundation reconciliation;
- current Source 11 conversation-first/channel-independence truth;
- current security and permission governance.

Historical fixed provider versions, exact old parser schemas and channel-specific implementation mechanisms remain engineering provenance, not permanent Product Truth.

---

## 33. Completion Gate

WhatsApp Intelligence is complete only when WhatsApp acts as a secure, reliable, permission-aware channel adapter over shared Smart Business intelligence and domain services, with no duplicate channel-specific business truth and with tested continuity through the native Conversation Workspace.