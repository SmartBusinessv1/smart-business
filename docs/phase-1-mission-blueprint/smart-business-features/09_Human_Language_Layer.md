# Smart Business Feature Definition — Human Language Layer

**Status:** MATURE RECONCILED CONTRACT  
**Build commitment:** **BUILD NOW**  
**Commercial availability:** Core cross-feature capability  
**Authority boundary:** Language understanding may interpret user intent and prepare actions; it must not invent facts, bypass permissions or silently convert ambiguity into consequential writes.

---

## 1. Feature Identity

The Human Language Layer allows Smart Business users to interact naturally in:

- English;
- Malayalam;
- Manglish.

These are first-class supported interaction modes, not a translation add-on.

The layer exists across conversation, voice, support, reminders, Ledger, Ask CFO and relevant operational workflows.

---

## 2. Founder Problem Statement

Kerala merchants and staff often communicate using mixed language, shorthand, local business terms, abbreviated units and natural speech rather than formal accounting/software vocabulary.

Smart Business should understand the person, not require the person to learn software language.

---

## 3. Core Language Principle

Smart Business must prioritize meaning over literal translation.

It should understand context such as:

- Malayalam written in English letters;
- mixed Malayalam-English sentences;
- local business vocabulary;
- common shorthand;
- informal quantity/unit expressions;
- names with spelling variations;
- conversational corrections and follow-ups.

The system should answer in language that sounds natural for the user and the business context.

---

## 4. Language Preference

Where appropriate, Smart Business should maintain a user language preference that is:

- business/user scoped;
- changeable;
- respected across supported channels;
- overridden naturally when the user clearly switches language for the current conversation.

Language preference must not become a substitute for understanding mixed-language input.

---

## 5. English

English support should be simple and merchant-friendly.

Avoid unnecessary accounting, legal or technical jargon. Where specialist terms are necessary, explain them in plain language.

---

## 6. Malayalam

Malayalam support should be natural and practical, including ordinary Kerala merchant phrasing rather than rigid textbook translation.

The system should preserve meaning and tone, especially for business numbers, dates, quantities, credit, reminders and operational instructions.

---

## 7. Manglish

Manglish is a first-class interaction mode.

Smart Business should handle Malayalam meaning written in Latin characters, including ordinary spelling variation.

The system must not rely on one fixed slang dictionary as the sole interpretation mechanism.

---

## 8. Voice Relationship

Voice understanding must use the same language/intent layer as text where possible.

Basic Voice and Voice Plus should support natural English/Malayalam/Manglish merchant speech and preserve the same clarification, permission and confirmation rules as typed input.

Voice transcription uncertainty must not become silent business-record uncertainty.

---

## 9. Clarification Rules

When language ambiguity could materially change a business record or action, Smart Business must ask the smallest useful clarification.

Examples:

- uncertain person/business name;
- ambiguous amount or unit;
- unclear whether money is paid or owed;
- unclear reminder time/date;
- uncertain stock item;
- multiple plausible meanings of a mixed-language phrase.

The system should not over-question harmless phrasing differences when context is sufficiently clear.

---

## 10. Names, Parties and Identity

Language normalization may help match spelling variants, but identity resolution remains a separate controlled step.

A likely spelling match must not silently merge two different customers, suppliers or employees.

Where multiple candidates remain plausible, ask clarification.

---

## 11. Numbers, Dates and Units

The language layer should interpret common expressions for:

- rupee amounts;
- dates/times;
- quantities;
- weights/units;
- recurring time phrases;
- colloquial business shorthand.

Consequential normalization must remain visible through preview/confirmation where uncertainty exists.

---

## 12. Cross-Feature Behavior

The Human Language Layer must be reused by:

- Ledger / Business Memory;
- Ask CFO;
- Daily Intelligence;
- Conversation Workspace;
- WhatsApp;
- Reminder/Delegated Automation;
- Staff/HR;
- Stock/Supplier/Reorder;
- Smart Order & Delivery;
- Support Automation;
- Smart Credit Awareness;
- Compliance and other conversational features.

Features must not create incompatible language logic per channel or per module.

---

## 13. AI Behaviour

AI may:

- interpret intent;
- normalize language for internal structured processing;
- explain terminology;
- adapt response language/tone;
- identify likely corrections;
- ask clarification.

AI must not:

- fabricate missing business facts;
- silently choose among materially different interpretations;
- create permission from language inference;
- expose unauthorized information because the user phrased a request naturally;
- make unsupported claims of perfect language understanding.

---

## 14. Tone

Responses should be:

- respectful;
- calm;
- concise by default;
- practical;
- culturally natural;
- non-patronizing;
- non-accusatory.

The language layer should preserve Lighthouse dignity principles in every language.

---

## 15. Confidence and Uncertainty

Historical fixed thresholds such as a universal `0.85` confidence value are implementation details, not Product Truth.

Engineering may use calibrated confidence/routing mechanisms, but product behavior is:

- proceed when interpretation is sufficiently clear and safe;
- clarify when ambiguity is material;
- reject/hand off when understanding is insufficient.

No fixed 99%+ accuracy promise is authorized.

---

## 16. Support and Error Recovery

If language understanding fails:

- preserve the user's original input;
- ask a short clarification or offer a simpler phrasing path;
- allow switching text/voice/channel where useful;
- avoid creating a consequential record until meaning is safe;
- allow Support escalation when persistent language failure blocks product use.

---

## 17. Acceptance Scenarios

Future verification should prove at least:

- equivalent Ledger intent in English, Malayalam and Manglish;
- mixed-language sentence handling;
- spelling variation without unsafe identity merge;
- voice input with language uncertainty requiring clarification;
- reminder date/time clarification;
- Ask CFO response in user's preferred language;
- multilingual Support FAQ answer;
- natural language switch mid-conversation;
- role permissions unchanged by language/channel;
- no consequential write from materially ambiguous language.

---

## 18. Non-goals / Rejected Historical Behaviour

This contract rejects:

- English-only product behavior;
- literal machine translation as the complete Malayalam strategy;
- fixed slang dictionary as sole language engine;
- universal hard-coded confidence constant as Product Truth;
- unsupported absolute accuracy claims;
- silent guessing for consequential ambiguity;
- separate incompatible language semantics for WhatsApp vs web app.

---

## 19. Dependencies

The Human Language Layer is a shared product foundation. It must integrate with Permissions, Conversation, Voice and destination feature validation rather than become an independent authority layer.

---

## 20. Completion Gate

The Human Language Layer is complete only when English/Malayalam/Manglish behavior, mixed-language understanding, clarification, identity safety, channel consistency and permission preservation are verified across representative Smart Business workflows.
