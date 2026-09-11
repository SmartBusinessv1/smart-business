# Smart Business Feature Definition — Basic Voice & Smart Voice Assistant Plus

**Status:** MATURE RECONCILED CONTRACT — FULL HYDRATION PASS  
**Build commitment:** **BUILD NOW**  
**Commercial availability:** Basic Voice in Ledger + Manager core; Voice Plus as Ledger + Manager add-on  
**Authority boundary:** Voice is an interaction modality, not a permission layer. Every spoken input/output inherits the underlying feature's role, confirmation, privacy and audit rules.

---

## 1. Feature Identity

Smart Business voice allows busy merchants to speak naturally instead of stopping work to type.

There are two current product layers:

1. **Basic Voice Assistant** — included in Ledger and Manager.
2. **Smart Voice Assistant Plus** — deeper premium conversational voice capability.

Basic Voice is not a crippled teaser. It must provide practical voice usefulness for normal Smart Business work.

---

## 2. Founder Problem Statement

Kerala merchants often work while:

- serving customers;
- walking between counter/store/stockroom;
- handling receipts or goods;
- speaking with staff/suppliers;
- using a phone one-handed.

Typing every transaction, question or reminder creates friction. Voice should reduce that friction while respecting attention and privacy.

---

## 3. Lighthouse Principles

Voice must be:

- useful before impressive;
- concise by default;
- locally natural;
- calm and respectful;
- transparent about uncertainty;
- permission-scoped;
- confirmation-aware;
- privacy-aware;
- optional where text is clearer.

The system must never force a user to listen to a long AI monologue when readable text is better.

---

## 4. Basic Voice — Included Core Capability

Basic Voice supports approved interactions such as:

- Ledger transaction/credit/repayment input;
- Ask CFO questions;
- reminder creation;
- stock/supplier/order instructions where the user's product/role permits;
- document clarification;
- short confirmations;
- short business summaries/responses;
- other approved conversational actions.

Basic Voice uses the same intent/action foundation as text.

---

## 5. Smart Voice Assistant Plus

Voice Plus adds depth rather than basic access.

It may support:

- richer multi-turn business discussion;
- deeper Ask CFO voice explanation;
- longer contextual follow-up;
- multiple focused voice blocks;
- structured text summary after voice discussion;
- action-item extraction;
- continuation into reminders or other approved workflows;
- more conversational navigation of complex topics.

Voice Plus does not expand the user's business authority.

---

## 6. Input Journey

A voice input generally follows:

**record/capture → transcription/understanding → permission/context check → clarification where needed → preview/confirmation where consequential → underlying feature action → human-readable confirmation**.

The system must distinguish between:

- harmless question;
- informational request;
- draft/preparation request;
- consequential write/action.

Consequential actions receive the same safeguards as text.

---

## 7. Clarification Rules

Voice is inherently error-prone in real environments.

Clarify when there is material uncertainty about:

- amount;
- date/time;
- customer/supplier/product identity;
- quantity/unit;
- payment state;
- credit vs repayment;
- order/reorder instruction;
- permission-sensitive action;
- noisy or incomplete transcription.

Do not manufacture certainty because a speech model produced a plausible transcript.

---

## 8. Voice Output Design

### Routine response

Prefer short useful audio.

Examples:

- confirmation that a transaction was recorded;
- reminder created;
- short answer to a simple question;
- one key warning/request for clarification.

### Dense/precise response

For tables, detailed figures, lists or complex analysis:

- give a concise spoken summary;
- provide exact details in text/table/file where useful.

### Deep discussion

Voice Plus may produce multiple focused voice segments rather than one exhausting response.

Historical fixed duration targets are UX provenance, not immutable rules. The durable principle is **concise by default; deeper when useful/requested**.

---

## 9. English, Malayalam and Manglish

Voice must work with the shared Human Language Layer.

It should handle naturally mixed Kerala business speech, including English business terms inside Malayalam/Manglish.

Examples may include locally common words/phrases for:

- sales;
- stock;
- supplier;
- counter;
- cash;
- credit;
- units/product names.

Literal formal translation is less important than correct business meaning.

---

## 10. WhatsApp Voice Experience

Approved WhatsApp voice notes/messages should route into the same voice understanding and feature services.

WhatsApp must not have a separate transaction parser, Ask CFO engine or permission model for voice.

A WhatsApp provider failure must not invalidate already stored business actions.

---

## 11. Conversation Workspace Voice Experience

The native Smart Business Conversation Workspace must support voice input and permitted voice output.

The experience should preserve:

- same identity;
- same permissions;
- same Business Memory;
- same Ask CFO behavior;
- same confirmation/clarification;
- same audit trail.

This allows merchants to use voice from laptop/tablet/desktop contexts where supported.

---

## 12. Ask CFO Relationship

Basic Voice allows an Owner to ask Ask CFO questions and receive a concise voice answer plus text detail where useful.

Voice Plus can deepen that conversation through:

- follow-up;
- comparison;
- structured explanation;
- summarized next actions;
- reminder continuation.

Ask CFO remains read-only intelligence regardless of voice tier.

---

## 13. Reminder Relationship

A user may create reminders by voice.

If Ask CFO/Voice Plus discussion should resume later, Smart Business may offer to create a shared Reminder.

Voice must not create a separate reminder engine.

---

## 14. Roles and Permissions

### Owner

Can use voice for all entitled/authorized features.

### Manager

Voice can access only delegated capabilities/data.

### Employee

Voice may support specifically permitted operational actions/self-service. It must not provide Owner profit, full analytics or Ask CFO by default.

### Other roles

Customer/supplier/delivery voice interactions are bounded by the relevant workflow, not general Owner voice access.

---

## 15. Privacy and Sensitive Audio

Voice output can expose information to people physically nearby.

Smart Business should avoid speaking sensitive Owner data where:

- the user role is not authorized;
- the requested output is inappropriate for audio;
- the product has enough context to prefer a safer text presentation.

Audio/transcription retention follows current privacy/account policy.

Voice must never become a route around data-access controls.

---

## 16. Business Memory and Audit

Voice interactions that create/alter business state must preserve:

- actor;
- business scope;
- source channel/modal input;
- interpreted intent;
- confirmation where applicable;
- resulting authoritative record/action;
- correction/audit linkage where needed.

The raw voice file retention policy may differ from durable Business Memory; implementation must not assume that every recording is permanent.

---

## 17. Error and Exception Behavior

Handle:

- noisy/partial audio;
- unsupported audio format;
- transcription failure;
- language ambiguity;
- provider/model failure;
- interrupted upload;
- stale permission;
- duplicate/replayed voice message;
- response generation failure;
- output audio unavailable while text path remains healthy.

Required behavior:

- do not pretend success;
- preserve safe retry path;
- use text alternative when practical;
- do not create records from materially uncertain speech;
- fail only the affected path.

---

## 18. Performance and Attention

Voice should feel immediate enough for counter/work-floor use.

Use efficient paths for simple deterministic actions and stronger reasoning only when required.

Target current Smart Business responsiveness where technically reasonable, without weakening security, accuracy or confirmation.

---

## 19. Shared Foundations to Reuse

Reuse:

- Conversation/intent-action foundation;
- Human Language Layer;
- Permission Engine;
- Business Memory;
- Ask CFO;
- Reminder Engine;
- feature-specific action services;
- notification/output services;
- audit/idempotency.

---

## 20. Explicit Non-goals

- Basic Voice restricted to paid Voice Plus-only usefulness;
- fixed provider/model as Product Truth;
- fixed universal response-duration cap;
- voice-created authority;
- long audio where text is clearly better;
- employee access to Owner intelligence through spoken prompts.

---

## 21. Acceptance Scenarios

A future Blueprint/EIS must verify at least:

1. Natural sale/expense/credit/repayment voice input.
2. Ambiguous amount/name → clarification, not guess.
3. Basic Ask CFO voice question → short audio + accurate text detail.
4. Voice reminder creation.
5. Voice Plus multi-turn discussion with continuity.
6. Voice Plus summary/action items without autonomous execution.
7. English/Malayalam/Manglish mixed speech.
8. Employee voice prompt cannot access Owner intelligence.
9. Duplicate/replayed voice does not duplicate business write.
10. Provider failure offers safe text/retry path.
11. WhatsApp and Conversation Workspace use one voice/action truth.
12. Sensitive information is not spoken to an unauthorized role.

---

## 22. Historical Corrections / Superseded Behavior

Superseded:

- all useful outbound voice requiring paid Voice Plus;
- treating fixed TTS/STT provider names as permanent architecture;
- fixed universal 8/12/15/30-second rules as Product Truth;
- voice as permission bypass.

Current correction: Basic Voice is included in Ledger and Manager; Voice Plus is deeper premium interaction.

---

## 23. Provenance and Hydration Coverage

Reconciled from Founder-origin Section 4 and Section 7; planning-origin voice/Ask CFO evolution; current Founder packaging correction; Final Feature Reconciliation Register §13 and §§29–30; Source 05 and Source 11.

**Hydration result:** current recovered Voice/Voice Plus behavior, packaging, authority, channel, language, privacy and failure rules are represented here or delegated to named shared contracts.

---

## 24. Unresolved Founder Questions

Exact current Voice Plus price remains unresolved.

---

## 25. Completion Gate

Completion requires proven multilingual voice input/output, Basic/Plus packaging, permission inheritance, consequential clarification/confirmation, channel continuity, privacy, audit/idempotency, error recovery and runtime acceptance.
