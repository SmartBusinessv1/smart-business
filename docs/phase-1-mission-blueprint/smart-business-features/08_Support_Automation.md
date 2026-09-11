# Smart Business Feature Definition — Support Automation

**Status:** MATURE RECONCILED CONTRACT  
**Build commitment:** **BUILD NOW**  
**Commercial availability:** Core support foundation  
**Authority boundary:** Support helps users resolve product questions and incidents. It does not become a hidden channel for unrestricted merchant-data access or Product Truth mutation.

---

## 1. Feature Identity

Support Automation is the Smart Business customer-support layer designed to resolve common merchant questions quickly, clearly and sustainably while escalating unresolved or account-specific issues to humans when needed.

The current Founder direction preserves a **100+ FAQ** knowledge direction, FAQ-first resolution, English/Malayalam/Manglish support, AI escalation only where useful, ticketing for unresolved issues, and privacy-respecting human review.

---

## 2. Founder Problem Statement

Smart Business serves merchants who may need help while actively running a shop. Support should reduce interruption and confusion, not force them into long technical conversations or wait for routine questions to reach a human agent.

At the same time, automation must never hide uncertainty or expose private business data unnecessarily.

---

## 3. Support Resolution Ladder

The mature support flow should follow a progressive ladder:

1. identify the user's support intent;
2. match a trusted FAQ/help answer where one exists;
3. provide concise language-appropriate guidance;
4. ask a small clarification where intent is ambiguous;
5. use AI-supported explanation when FAQ alone is insufficient;
6. create/escalate a support ticket when the issue remains unresolved or requires account/platform action;
7. enable human review with only the minimum necessary authorized context.

Automation should solve what it can without interrupting normal bookkeeping/business operation.

---

## 4. 100+ FAQ Direction

The support knowledge base should grow to at least 100 useful merchant-facing questions covering recurring needs such as:

- account/login/access;
- onboarding and setup;
- transactions and corrections;
- inventory/catalog/imports;
- WhatsApp and Conversation Workspace usage;
- Ask CFO behavior and boundaries;
- reminders;
- voice;
- staff/HR where enabled;
- order/delivery where enabled;
- payments/subscription/account lifecycle;
- privacy/security basics;
- document upload/import;
- common errors and recovery steps.

The exact FAQ count at a given release is an implementation/content milestone, but the 100+ direction is preserved as the mature support target.

---

## 5. Language Behavior

Support must treat:

- English;
- Malayalam;
- Manglish

as first-class supported interaction modes.

Responses should sound natural and practical for Kerala merchants rather than like literal translation of software documentation.

Where a user changes language mid-conversation, support should continue naturally where possible.

---

## 6. FAQ Matching

FAQ matching may use deterministic search, semantic retrieval, AI classification or a combination, but must preserve:

- trusted answer provenance;
- current Product Truth;
- version awareness where product behavior changes;
- no invention when the knowledge base does not contain a reliable answer.

If no trusted answer is available, the system should say so and move to clarification/escalation rather than hallucinate.

---

## 7. AI Escalation

AI may:

- interpret the user's question;
- find relevant approved support knowledge;
- explain steps in plain language;
- summarize an unresolved issue for human support;
- collect only the information needed for the support path;
- distinguish product behavior from account-specific problems.

AI must not:

- invent product policy;
- change Product Truth;
- grant permissions;
- expose unrelated merchant data;
- claim an account action succeeded when it did not;
- conceal uncertainty.

---

## 8. Ticket Creation

A ticket should be created when appropriate, such as:

- repeated support attempt did not solve the issue;
- account-specific investigation is required;
- platform error blocks the user;
- payment/subscription issue needs review;
- security/privacy concern requires human handling;
- user explicitly asks for human support.

A ticket should preserve relevant context so the merchant does not need to repeat the entire story.

---

## 9. Ticket Data

A mature implementation may preserve concepts such as:

- business/user identity;
- support category;
- issue summary;
- conversation/FAQ attempts;
- user language;
- severity/impact where appropriate;
- linked technical error identifier where available;
- consent/authorization for account-specific inspection where required;
- status and resolution history;
- assigned support actor;
- timestamps.

Exact schema belongs to EIS.

---

## 10. Privacy and Account-Specific Access

Team LIPS should not routinely inspect a merchant's private financial/business data merely because a support ticket exists.

Account-specific inspection should occur only when:

- it is necessary to resolve the issue;
- the support/security role is authorized;
- the user has provided the required agreement/consent where appropriate;
- access is purpose-limited and auditable.

Support should prefer metadata, error identifiers and user-provided context before deeper account-data inspection.

---

## 11. Support Without Blocking Business Operation

A support issue should not automatically freeze unrelated merchant work.

Examples:

- failed FAQ should not stop transaction entry;
- an import error should not block unrelated dashboard use;
- a payment-support ticket should not block safe read-only access unless lifecycle policy explicitly requires it;
- one broken channel should not make all support inaccessible.

Narrow blockers should stay narrow.

---

## 12. Channels

Support should be reachable through approved product channels, including:

- Conversation Workspace;
- WhatsApp where available;
- visual support/help surfaces;
- other approved contact paths.

Channel-specific presentation may differ, but the knowledge base, permissions and ticket truth should be shared.

---

## 13. Technical Error Relationship

Error capture/logging is an input to support, not Support Automation itself.

Where a user-visible failure has a safe error/reference identifier, support can use it to connect the merchant report with technical evidence without exposing raw stack traces or sensitive internals.

---

## 14. Founder Review / Quality Improvement

Support knowledge should improve from real recurring questions, unresolved tickets and product changes.

Founder/Team LIPS review may identify:

- missing FAQ topics;
- confusing product behavior;
- repeated onboarding friction;
- language-quality issues;
- high-impact failure patterns.

Learning from support must not become autonomous governance or silent Product Truth mutation.

---

## 15. Failure and Exception Handling

Handle at minimum:

- no FAQ match;
- multiple plausible FAQ matches;
- stale/retired answer;
- AI unavailable;
- ticket creation failure;
- user disconnected mid-support;
- language misunderstanding;
- account-specific access not authorized;
- duplicate tickets;
- platform outage affecting support channel.

A failed automated answer should degrade toward clarification/human escalation, not fabricate resolution.

---

## 16. Acceptance Scenarios

Future verification should prove:

- FAQ-first resolution of common question;
- English/Malayalam/Manglish support;
- ambiguous question triggers clarification;
- no-answer state does not hallucinate;
- AI explanation remains aligned with approved support knowledge;
- unresolved issue creates a ticket with useful context;
- duplicate ticket handling;
- account-specific inspection requires appropriate authorization;
- merchant can continue unrelated business operations during support issue;
- human resolution is recorded and can improve approved FAQ content later.

---

## 17. Non-goals / Rejected Behaviour

This contract does not authorize:

- unrestricted support-agent browsing of merchant data;
- AI-generated support policy with no approved source;
- support automation changing Product Truth;
- forcing every question into a ticket;
- replacing all human support;
- using technical error logging alone as proof that merchant support is implemented.

---

## 18. Shared Foundations

Reuse:

- Human Language Layer;
- Conversation/Notification foundation;
- identity/permission foundation;
- ticket/audit foundation;
- product knowledge/FAQ store;
- technical error/reference system where available.

---

## 19. Completion Gate

Support Automation is complete only when the trusted FAQ layer, multilingual interaction, clarification/AI fallback, ticket escalation, privacy controls and human-resolution loop are implemented and verified end-to-end.
