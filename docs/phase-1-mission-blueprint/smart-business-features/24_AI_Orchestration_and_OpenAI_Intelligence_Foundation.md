# Smart Business Feature Definition — AI Orchestration & OpenAI Intelligence Foundation

**Status:** MATURE RECONCILED CONTRACT — FULL HYDRATION PASS  
**Build commitment:** **BUILD NOW — CORE SHARED INTELLIGENCE FOUNDATION**  
**Commercial availability:** Shared across Ledger, Manager and approved add-ons  
**Authority boundary:** OpenAI provides reasoning, language understanding, extraction and controlled AI assistance. Smart Business permissions, Business Memory, domain services and human authority remain authoritative.

---

## 1. Feature Identity

This contract defines the central AI intelligence/orchestration layer that allows Smart Business features to behave like one coherent assistant rather than a collection of disconnected AI functions.

OpenAI is the current approved intelligence provider/foundation for capabilities such as:

- natural-language understanding;
- intent classification;
- structured extraction;
- summarisation;
- explanation;
- recommendation;
- controlled function/tool calling;
- document interpretation;
- conversation assistance;
- Ask CFO reasoning;
- multimodal understanding where approved;
- voice/transcription-related AI processing where current architecture uses OpenAI services.

The product concept may be described informally as the **Smart Business AI brain**, but this contract deliberately separates intelligence from authority.

The AI brain may understand and reason. It does not own merchant data, permissions or final business decisions.

---

## 2. Founder Problem Statement

Smart Business includes many intelligent experiences:

- Ledger entry;
- Ask CFO;
- reminders;
- Daily Intelligence;
- voice;
- OCR/document intelligence;
- stock/supplier/reorder assistance;
- POS/counter review;
- credit awareness;
- payment reconciliation assistance;
- support;
- HR assistance;
- order/delivery conversation;
- onboarding guidance.

If each feature creates its own model prompts, memory, language understanding and action logic independently, the product will drift into inconsistent mini-assistants.

The central AI foundation exists so one governed intelligence layer can:

1. understand the user and context;
2. identify intent;
3. decide which authorized domain capability is relevant;
4. retrieve only permitted context;
5. reason or extract as appropriate;
6. request clarification when needed;
7. prepare structured outputs/actions;
8. hand execution to deterministic governed services;
9. explain the result naturally.

---

## 3. Lighthouse Principles

- AI Assistant, Not AI Judge.
- One coherent Smart Business assistant across features and channels.
- Human decision ownership remains final.
- AI intelligence does not create permission.
- Use AI where it adds value; use deterministic systems where they are safer/cheaper/clearer.
- Business Memory belongs to the merchant and to approved Smart Business storage, not to model conversation history.
- Avoid fear, accusation and hidden authority.
- Explain uncertainty honestly.

---

## 4. OpenAI Role in the Architecture

OpenAI is the shared intelligence provider supporting the Smart Business orchestration layer.

It may contribute to:

- language interpretation;
- intent classification;
- entity/value extraction;
- document/receipt interpretation;
- multimodal reasoning;
- transcription/voice processing where approved;
- Ask CFO analysis;
- response generation;
- summarisation;
- structured tool/function-call preparation.

OpenAI must not become:

- the permanent database;
- the source of truth for transactions/balances;
- the Permission Engine;
- the subscription/entitlement authority;
- the final executor of destructive business actions;
- the sole holder of conversation/business memory;
- the product-governance authority.

---

## 5. Central Orchestration Flow

The target shared flow is conceptually:

**Channel/Input → Identity → Permission/Entitlement Context → Modality Processing → Intent Classification → Context Retrieval → Reasoning/Extraction → Clarification/Confirmation → Governed Tool/Domain Service → Business Memory → Response/Notification**

This flow applies across:

- WhatsApp;
- native Conversation Workspace;
- approved background/scheduled intelligence;
- document/voice entry points;
- future approved channels.

Channels may adapt transport/UI, but they must not create separate brains.

---

## 6. Intent-First Intelligence

Smart Business must not assume that every user message is a transaction.

The orchestration layer should distinguish intents such as:

- transaction / Ledger event;
- correction request;
- Ask CFO query;
- reminder;
- inventory/stock update;
- supplier/reorder action;
- order/delivery action;
- attendance/HR request;
- payment/credit query;
- compliance/support request;
- document import;
- general product help;
- out-of-scope request;
- blocked/safety-sensitive request.

Exact internal intent taxonomy may evolve, but intent-first routing is durable product behavior.

Low-confidence consequential intent must trigger clarification instead of guessing.

---

## 7. Multimodal Intelligence

The AI foundation should unify approved modalities rather than creating divergent business semantics.

### Text

Text enters language/intent understanding directly.

### Voice

Audio is transcribed/understood, then enters the same shared intent/action path as equivalent text.

### Images / Receipts

Vision/OCR/document interpretation produces structured evidence/drafts that enter Universal Document Intelligence and the relevant domain workflow.

### PDFs / Excel / CSV

File parsing/structured extraction may use deterministic parsers and AI interpretation as appropriate, but final business updates follow the same preview/clarify/confirm/validate rules.

The durable rule is:

> Different modalities may require different preprocessing, but they converge on one permission-aware intent/action architecture.

---

## 8. Human Language Integration

The AI foundation must reuse the Human Language Layer for:

- English;
- Malayalam;
- Manglish;
- mixed-language business speech/text;
- Kerala business vocabulary;
- party/product/name variation;
- natural clarification.

Language understanding should preserve meaning, not merely translate words.

A model/provider change must not silently reduce Malayalam/Manglish product commitment.

---

## 9. Business Context and Memory

AI may receive only the minimum authorized context needed for the task.

Possible context sources include:

- Business Memory / Ledger;
- customer/credit records;
- suppliers;
- inventory/catalog;
- documents;
- reminders;
- order/delivery state;
- staff/attendance context;
- POS/counter information;
- payment verification;
- compliance records;
- relevant conversation context.

Business Memory remains in approved Smart Business storage.

Model conversation history is not the authoritative long-term record.

---

## 10. Permission-Aware AI

Permission evaluation happens outside and around model reasoning, not merely through prompt wording.

Before protected data is provided to AI or an AI-prepared action is executed, Smart Business must enforce:

- user identity;
- business isolation;
- role permissions;
- feature entitlement;
- object/data scope;
- current authorization state.

Examples:

- Employee prompt injection must not reveal Owner profit.
- Manager role must not imply unrestricted Owner intelligence.
- Supplier/customer conversation must not expose internal merchant data.
- A revoked permission must block execution even if the AI prepared an action earlier.

---

## 11. Controlled Tool / Function Calling

The AI foundation may use structured tool/function calling to connect reasoning to governed Smart Business capabilities.

Tools/functions must:

- have explicit schemas;
- validate inputs;
- use least privilege;
- enforce business/role scope server-side;
- distinguish read from write capability;
- require confirmation/delegation where consequential;
- be idempotent where retries are plausible;
- preserve audit/provenance;
- return structured success/failure information.

A model choosing a function is not itself authorization to execute it.

---

## 12. Ask CFO Integration

Ask CFO is one specialized reasoning experience using the shared AI foundation.

The orchestration layer may:

- interpret the business question;
- determine authorized data needs;
- retrieve/calculate through approved read paths;
- reason over verified facts;
- distinguish fact, pattern, estimate, risk, opportunity and recommendation;
- generate a clear explanation.

Ask CFO remains read-only intelligence.

Any operational continuation must move to the relevant governed domain action/service.

---

## 13. Reminder Integration

AI may understand natural-language reminder requests and produce a structured reminder draft.

The shared Reminder Engine owns:

- reminder state;
- recurrence;
- scheduling;
- completion/snooze history;
- delegated automation rules.

The AI brain interprets and assists; it does not become a hidden scheduler.

---

## 14. Universal Document Intelligence / OCR Integration

OCR/vision output is evidence, not automatically business truth.

The AI foundation may:

- identify document type;
- extract relevant fields;
- normalize language/units;
- identify uncertainty/conflicts;
- prepare a human-readable preview;
- route to the relevant domain adapter.

The UDI workflow then applies:

**interpret → preview → clarify where needed → confirm → validated update**.

The model must not bypass this safety pattern for consequential uncertain input.

---

## 15. Voice Integration

Voice is an input/output modality over the same AI and domain foundations.

The AI orchestration layer should coordinate:

- transcription/understanding;
- language/context;
- intent routing;
- confirmation;
- response generation;
- optional voice output where permitted.

Voice-specific provider/format choices belong to engineering, but voice must not create a separate assistant identity or separate business logic.

---

## 16. Daily Intelligence Integration

Daily Intelligence can use deterministic aggregation plus AI explanation/prioritization.

The AI foundation may help:

- summarize significant changes;
- prioritize what merits Owner attention;
- phrase facts clearly;
- explain patterns;
- suggest next checks.

Scheduled AI does not create new authority to execute business decisions.

---

## 17. Support Integration

Support should use the cheapest reliable path consistent with customer value:

1. deterministic/FAQ answer where suitable;
2. AI reasoning when FAQ is insufficient;
3. human/support escalation when needed.

The AI foundation should not consume expensive reasoning for simple FAQ matches unless needed.

Support AI remains bounded by privacy and support-access rules.

---

## 18. Cross-Feature Orchestration Examples

### Receipt → Ledger → Ask CFO → Daily Intelligence

1. receipt enters WhatsApp/Workspace;
2. UDI/AI interprets receipt;
3. user confirms validated Ledger event;
4. Ledger becomes Business Memory;
5. Ask CFO can reason over the event;
6. Daily Intelligence may include the resulting business impact.

### Voice → Reminder → Domain Action

1. merchant speaks a reminder;
2. voice is transcribed;
3. AI identifies reminder intent;
4. Reminder Engine stores it;
5. later reminder may offer a governed action;
6. action executes only after valid confirmation/delegation through its domain service.

### Stock → Reorder → Supplier → Reminder

1. stock signal is detected;
2. AI/logic prepares reorder recommendation;
3. Owner approves or standing delegation is validated;
4. supplier communication is sent;
5. supplier response updates workflow state;
6. follow-up uses the shared Reminder Engine.

### Roster Document → HR → Attendance/Payroll Support

1. roster photo/file enters UDI;
2. AI extracts draft roster;
3. human confirms;
4. HR domain stores approved schedule;
5. attendance compares against approved schedule and context;
6. payroll support uses validated attendance, never AI accusation.

---

## 19. Model Routing and Selection

Different AI tasks may use different current OpenAI models/services.

Model selection should consider:

- task complexity;
- accuracy/reliability;
- latency;
- cost;
- language quality;
- modality;
- security/privacy;
- context requirements.

Use the least complex model that reliably performs the task.

Do not hard-code Product Truth to a historical model name such as a specific GPT or Whisper version.

OpenAI is the current approved provider/foundation; exact model routing belongs to current architecture/EIS and may evolve under governance.

---

## 20. Structured Outputs and Validation

Where AI output drives business workflows, prefer validated structured output over free-form parsing.

The system should validate:

- required fields;
- types/formats;
- enumerated domain states where appropriate;
- business identity/ownership;
- referenced object existence;
- numerical/date plausibility;
- permission/entitlement;
- duplicate/idempotency conditions.

Invalid structured AI output must fail safely and be retried/clarified rather than blindly written.

---

## 21. Confirmation and Human Authority

AI may prepare or recommend consequential actions, but default authority remains human.

Examples requiring confirmation or valid stored delegation include:

- recording uncertain financial facts;
- supplier orders;
- credit overrides;
- payment match resolution;
- roster/attendance corrections;
- consequential imports;
- other owner commitments.

Confirmation must bind to the exact reviewed action and current state.

The system must revalidate authority at execution.

---

## 22. AI Safety / Business Boundary

The central brain must remain a Smart Business assistant, not a generic unrestricted chatbot.

It should:

- redirect unrelated use where appropriate;
- refuse unsafe/illegal assistance;
- protect merchant/user/platform interests;
- avoid unsupported certainty;
- avoid accusations;
- avoid hidden manipulation/fear-heavy upsell;
- respect product scope and role boundaries.

---

## 23. AI Failure and Recovery

The product must handle:

- OpenAI API outage;
- timeout/rate limit;
- malformed/invalid model output;
- low confidence/ambiguity;
- transcription failure;
- vision/OCR failure;
- unavailable model/service;
- tool/function failure;
- stale context;
- insufficient permission;
- excessive context/cost condition.

Failure rules:

- do not pretend success;
- preserve user input/evidence where safe;
- retry only where safe;
- use deterministic fallback where available;
- request clarification where useful;
- keep unrelated non-AI product functions available;
- avoid duplicate actions after retry.

---

## 24. Auditability and Provenance

For consequential AI-assisted workflows, preserve enough provenance to answer:

- who initiated the request;
- which business/role context applied;
- source channel/modality;
- what evidence/context was used;
- what interpretation/draft AI produced;
- what clarification/confirmation occurred;
- which tool/domain service executed;
- what authoritative record resulted;
- whether the action failed/retried/corrected.

Exact prompt text/model metadata retention must follow privacy/security/cost policy rather than be stored indiscriminately.

---

## 25. Privacy and Data Minimization

The AI layer should receive only data required for the authorized task.

Requirements include:

- no cross-business context leakage;
- no unnecessary Owner financial data in staff interactions;
- no permanent reliance on model-side memory;
- careful handling of sensitive HR/customer/payment data;
- governed logging/redaction;
- approved data-retention boundaries;
- provider credentials kept server-side.

Merchant data remains merchant data.

---

## 26. Cost and Sustainability

AI usage must be economically sustainable without degrading genuine merchant value.

Use:

- FAQ/deterministic paths before AI where appropriate;
- model routing by task complexity;
- bounded context;
- structured prompts;
- safe caching for non-sensitive/repeatable outputs where appropriate;
- duplicate suppression;
- batching/background processing when user experience permits;
- observability for usage/cost/quality.

Cost controls must not silently remove committed product capability.

---

## 27. Frontend / Channel Experience

The AI brain must feel consistent across:

- WhatsApp;
- native Conversation Workspace;
- dashboard intelligence surfaces;
- voice;
- document upload flows.

The UI/channel may present different controls, but the same core assistant should preserve:

- product personality;
- permissions;
- Business Memory;
- clarification behavior;
- authority boundaries;
- feature semantics.

---

## 28. Backend / Data Obligations

Future Blueprint/EIS work must define the implementation of:

- server-side OpenAI integration/gateway;
- prompt/instruction governance;
- model routing;
- structured output validation;
- tool/function registry;
- permission-aware context retrieval;
- conversation context handling;
- domain-service dispatch;
- retries/timeouts/idempotency;
- provider usage/cost telemetry;
- safety/moderation where appropriate;
- audit/provenance linkage.

Exact services/functions/tables are engineering decisions unless separately locked by current architecture.

---

## 29. OpenAI Provider Abstraction and Anti-Lock Principle

OpenAI is the current approved AI provider and a core integration of Smart Business.

However:

- Product Truth should describe required intelligence behavior rather than depend on one historical model identifier;
- domain business logic must remain in Smart Business services;
- merchant data truth remains in Smart Business storage;
- permissions remain independent of provider responses;
- provider/model changes must not alter human-authority rules.

A future provider change would require governed architecture/product review, not silent substitution.

---

## 30. Explicit Non-goals

This contract does not authorize:

- model conversation as permanent Business Memory;
- unrestricted production database access by AI;
- free-form destructive SQL execution;
- permission decisions based only on prompt instructions;
- separate AI brains per channel/feature without architectural reason;
- AI-created business authority;
- unsupported financial/legal/statutory certainty;
- hard-coding current product behavior to one historical model version.

---

## 31. Acceptance Expectations

Future Product Blueprint/EIS/runtime verification should prove at least:

1. WhatsApp and Conversation Workspace share one AI orchestration/domain-action path;
2. same intent produces equivalent domain semantics across text/voice where input meaning is equivalent;
3. role/permission data is enforced before protected context/tool execution;
4. Employee cannot prompt the model into Owner intelligence;
5. ambiguous consequential input triggers clarification;
6. AI structured outputs are schema-validated;
7. tool/function call does not bypass confirmation/authorization;
8. receipt/image interpretation goes through UDI confirmation rules;
9. Ask CFO remains read-only;
10. reminder creation routes to the shared Reminder Engine;
11. OpenAI outage does not corrupt or duplicate business state;
12. deterministic fallback remains available where designed;
13. retry is idempotent for consequential actions;
14. model/provider metadata and merchant data are handled under privacy policy;
15. Business Memory persists independently of model conversation history;
16. model routing can evolve without rewriting domain business rules.

---

## 32. Dependencies

This contract must integrate with:

- `03_Ledger_and_Business_Memory.md`;
- `05_Universal_Document_and_Receipt_Intelligence.md`;
- `09_Human_Language_Layer.md`;
- `10_Conversation_Workspace_and_Channel_Independence.md`;
- `11_Smart_Reminder_and_Delegated_Automation.md`;
- `12_Voice_and_Voice_Plus.md`;
- `21_Permissions_Business_Isolation_and_Role_Authority.md`;
- `22_Shared_Product_Foundations.md`;
- `23_WhatsApp_Intelligence_and_Channel_Adapter.md`;
- every feature that consumes AI reasoning or extraction.

---

## 33. Provenance

This contract is grounded in:

- Source 04 — API / WhatsApp / OpenAI Communication Framework;
- Source 05 — AI Behaviour, Reasoning, Voice & Model Training Framework;
- P00 Operational Profiles — OpenAI Operational Profile;
- Source 10 Environment Activation Manual — WhatsApp API + OpenAI activation scope;
- Founder-origin Question 87–100 cross-feature/anti-duplication evidence;
- current Founder direction and Source 11 Product Truth;
- current permission/security and execution governance.

Historical model/provider constants remain provenance unless current architecture separately adopts them.

---

## 34. Completion Gate

The AI Orchestration & OpenAI Intelligence Foundation is complete only when Smart Business has one governed, permission-aware, multimodal intelligence layer that reliably connects channels and feature domains while keeping authority, Business Memory and deterministic execution outside the model.