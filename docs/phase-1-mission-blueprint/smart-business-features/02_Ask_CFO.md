# Ask CFO

## Feature Identity

**Feature Name:** Ask CFO  
**Identity:** AI business thinking partner / merchant clarity feature  
**Availability:** Smart Business Ledger + Smart Business Manager  
**Build Commitment:** **BUILD NOW**  
**Authority Boundary:** Ask CFO explains, analyses, and suggests. The Owner decides.

---

## 1. Founder Problem Statement

Many small-business owners have business data but still do not have clarity.

They may know:

- sales;
- expenses;
- credits;
- stock;
- suppliers;
- staff events;
- reminders;
- daily activity.

But they still ask practical questions such as:

- How is my business doing?
- Why did expenses increase?
- Who owes me money?
- Which product is moving faster?
- What should I check today?
- Is there a risk I am missing?
- What changed compared with last week?

Ask CFO exists to convert the merchant's own business memory into understandable business clarity.

It is not designed to sound like a corporate accounting report.

---

## 2. Lighthouse Principle

Ask CFO must embody:

- AI Assistant, Not AI Judge.
- Truth should create clarity, not fear.
- Human decision ownership remains final.
- Explain in language the merchant can understand.
- Do not fabricate certainty.
- Do not shame the Owner.
- Do not accuse employees, suppliers, or customers.
- When showing a problem, help the Owner understand a useful next step.

The goal is not:

> Look how intelligent the AI is.

The goal is:

> I understand my business better.

---

## 3. Users and Permission Boundaries

### Owner

Default Ask CFO user.

May:

- ask natural business questions;
- receive business analytics;
- compare time periods;
- ask about cash, expenses, credits, stock, supplier history, operations, and other authorized business data;
- continue a business discussion;
- receive suggestions;
- request or accept reminders linked to an Ask CFO conversation.

### Manager

Ask CFO access is **not automatic** merely because a person has a Manager role.

Any delegated intelligence access must follow explicit Owner permission and current Product Truth.

### Employee

Default:

- no Ask CFO access;
- no profit intelligence;
- no Owner analytics;
- no unrestricted business-level financial reasoning.

Employee operational access must not become a path to Ask CFO data.

### Supplier

No Ask CFO access.

### Customer

No Ask CFO access.

### Delivery Staff

No Ask CFO access.

---

## 4. Core Experience

Ask CFO should feel conversational.

The merchant asks a normal question instead of building a report or choosing an accounting filter.

Example:

> How is my business this week?

Ask CFO should:

1. identify what data is relevant;
2. use only authorized merchant data;
3. calculate or retrieve facts correctly;
4. distinguish facts from interpretation;
5. explain the answer simply;
6. identify useful observations;
7. suggest next checks or actions without taking control.

---

## 5. Question Classes

Historical planning identifies two useful classes.

### 5.1 Data Questions

Questions that can be answered directly from reliable business data.

Examples:

- What were my expenses this week?
- Who owes more than ₹5,000?
- Which expense category increased the most?
- Which products expire this week?
- How much did bakery sales change compared with last week?

Where possible, these should use deterministic/database-grounded calculations rather than unnecessary free-form AI guessing.

### 5.2 Advisory Questions

Questions requiring interpretation.

Examples:

- Why might profit be lower this month?
- What should I check first?
- Is there a business risk in this pattern?
- Can I safely consider a large stock purchase?
- How can I reduce outstanding credit?

Advisory responses may combine:

- authorized merchant data;
- approved business rules;
- AI reasoning;
- clearly stated assumptions and uncertainty.

AI advice is not a business command.

---

## 6. Missing Data Rule

Ask CFO must never invent business facts to make an answer sound complete.

If required data is unavailable, it should say so clearly.

Example behavior:

> I can compare your recorded sales and expenses, but I do not have enough walk-in/customer-count data to confirm whether footfall caused the change.

The system may then explain what information would improve the answer.

This is preferable to a confident but fabricated explanation.

---

## 7. Read-only Intelligence Boundary

Ask CFO is a read-only intelligence capability by default.

It may retrieve and analyse authorized data.

It must not gain destructive database authority through natural-language prompts.

Current canonical implementation rules prohibit destructive/write SQL classes for Ask CFO.

Ask CFO must not directly:

- delete business records;
- alter schemas;
- rewrite transactions;
- change payroll;
- manipulate attendance;
- modify stock merely because a question was asked;
- create financial commitments without an approved action workflow.

If the Owner wants an operational action, that action should move through the relevant authorized feature/confirmation workflow rather than silently occurring inside analysis.

---

## 8. AI Authority and Human Decision Ownership

Ask CFO may:

- explain;
- calculate;
- compare;
- summarize;
- identify patterns;
- identify risks;
- suggest options;
- recommend what to review;
- surface opportunities;
- offer reminder continuation.

Ask CFO must not:

- make final business decisions;
- tell the Owner that an employee is guilty of theft/fraud;
- automatically punish staff;
- block an Owner's business decision merely because AI predicts risk;
- claim certainty where evidence is incomplete;
- impersonate a chartered accountant, legal advisor, or statutory authority when not authorized.

---

## 9. Truth With Dignity

A major Founder philosophy from planning-origin discussions is that Ask CFO should tell the truth while protecting human dignity.

If a business trend is negative:

Wrong style:

> Your business is performing badly. You are losing control.

Preferred style:

> Expenses increased faster than sales this week. The biggest change is in supplier purchases. It may be worth checking whether this was planned stock buildup or a cost increase.

The response should:

- state the fact;
- explain why it matters;
- avoid fear;
- avoid blame;
- provide a useful next step.

---

## 10. Business Context Over Raw Data

Ask CFO should respect the Smart Business Human Context principle.

Raw data may be incomplete without Owner context.

Examples:

- an employee is late because the Owner sent them to market;
- low stock is intentional;
- a large expense is a planned festival purchase;
- an unusual discount was authorized for a customer relationship.

Ask CFO may identify the observable pattern, but should allow Owner context to change interpretation.

---

## 11. Cross-feature Intelligence

Ask CFO should be capable of reasoning over approved data from relevant Smart Business features, subject to plan availability and permission.

Possible domains include:

- Ledger transactions;
- customer credit;
- receipt/document memory;
- stock;
- suppliers;
- POS-connected activity;
- reminders;
- orders/deliveries;
- attendance/HR information where Owner is authorized;
- Daily Intelligence history;
- payment verification;
- other current approved business-memory sources.

Ask CFO must not create separate duplicate data truth.

It reads from the shared Business Memory and approved systems.

---

## 12. Ledger vs Manager Depth

Ask CFO exists in both subscriptions.

The answer depth naturally depends on what approved data/capabilities exist for the merchant.

### Ledger

Ask CFO can reason from Ledger-available business memory such as:

- income/expenses;
- customer credit;
- documents;
- reminders;
- payment evidence;
- other enabled Ledger add-ons.

### Manager

Manager may provide additional operational context such as:

- stock intelligence;
- supplier/reorder data;
- POS activity;
- operational dashboard data;
- deeper business analytics;
- counter activity observations.

The system should not fabricate Manager-only insight for a Ledger merchant who does not have the underlying data/capability.

---

## 13. WhatsApp Experience

Ask CFO is not limited to a dashboard widget.

WhatsApp is an approved conversation channel.

The Owner should be able to ask natural questions through:

- text;
- voice;
- approved image/document context where relevant.

The same permission and business-memory rules must apply regardless of channel.

WhatsApp must remain an adapter to the shared Ask CFO intelligence, not a separate CFO implementation.

---

## 14. Smart Business Conversation Workspace

The dashboard/app Conversation Workspace should expose the same Ask CFO intelligence.

It should share:

- identity;
- permissions;
- conversation context;
- Business Memory;
- AI rules;
- reminder continuation.

This supports business continuity if WhatsApp is temporarily unavailable.

Ask CFO should therefore be architected as channel-independent intelligence.

---

## 15. Basic Voice Assistant + Ask CFO

Basic voice assistance is included in both Ledger and Manager according to current Product Truth.

Founder planning clarification:

When an Owner asks a business question by voice, Smart Business may return:

- a short voice answer;
- a more detailed text analysis.

Historical planning target:

- basic voice response approximately 15 seconds maximum where practical;
- detailed explanation in text.

The exact timing is a UX target rather than a hard safety guarantee.

The product principle is that basic voice access should not be a luxury.

---

## 16. Smart Voice Assistant Plus + Ask CFO

Smart Voice Assistant Plus adds premium conversational depth.

Capabilities include:

- multi-turn back-and-forth business discussion;
- deeper voice explanation;
- several short voice blocks rather than one exhausting long message;
- professionally formatted text summary;
- headings/bullets/emojis where useful;
- recommendations;
- action items;
- reminder continuation.

Historical planning target:

- premium voice blocks around 30 seconds maximum each where practical;
- multiple short focused blocks are preferred to one very long response.

The reason is attention respect: busy merchants should not have to listen to long AI monologues.

---

## 17. Example Multi-turn Ask CFO Conversation

Founder planning example:

Owner asks:

> How is my business?

Ask CFO observes that bakery sales increased but fruit sales declined.

Owner says:

> I noticed fruit sales are down. Maybe walk-ins are lower.

Ask CFO checks available data and may respond:

> Walk-ins are actually higher than last week. Fruit sales still declined. One possible idea is to test a juice counter so some fruit can be converted into additional sales before spoilage.

Owner says:

> Good idea. Let's talk later. The counter is busy now.

Ask CFO should understand the deferral rather than continuing to talk.

Then it can send a short text summary containing:

- topic;
- observations;
- suggestion;
- potential benefit;
- optional reminder to resume later.

This demonstrates that Ask CFO is connected to Smart Reminder without becoming a duplicate reminder engine.

---

## 18. Reminder Continuation

Ask CFO should be able to offer:

> Would you like me to remind you to continue this discussion later?

If the Owner says yes, use the shared Smart Reminder Engine.

Do not create a separate CFO-only reminder system.

The reminder should preserve enough conversation context to resume usefully.

---

## 19. Daily Intelligence Relationship

Ask CFO and Daily Intelligence are related but not identical.

### Daily Intelligence

Proactively gives clarity at approved scheduled times.

### Ask CFO

Responds to Owner questions and conversations.

Both should share:

- Business Memory;
- permission rules;
- calculation logic where appropriate;
- language behavior;
- human-authority principles.

They should not become duplicate intelligence stacks.

---

## 20. Human Language Layer

Ask CFO must support the merchant's approved language preference:

- English;
- Malayalam;
- Manglish.

Malayalam/Manglish responses should preserve local business meaning.

Do not force formal or robotic Malayalam when normal Kerala business language naturally mixes terms such as:

- sales;
- stock;
- supplier;
- credit;
- counter;
- cash;
- FSSAI;
- Milma.

Understanding matters more than literal translation.

---

## 21. Response Structure

Ask CFO should adapt response structure to the question.

Possible response pattern:

### Direct answer

Answer the question first.

### Evidence / observations

Show the important data points.

### Interpretation

Explain what the pattern may mean.

### Uncertainty

State what cannot be concluded.

### Suggested next check

Give one or a few practical next steps.

Do not bury the answer in a long report.

---

## 22. Performance Expectations

Ask CFO is a high-value interaction and should feel responsive.

The system should:

- avoid unnecessary AI calls for simple deterministic calculations;
- use optimized authorized queries;
- keep permission checks efficient;
- avoid duplicated processing;
- use appropriate models based on complexity;
- return clear progress if deeper analysis takes longer.

Speed must not weaken:

- RLS/authorization;
- merchant isolation;
- data correctness;
- uncertainty handling;
- privacy.

---

## 23. Cost / Sustainability Principle

Ask CFO should create strong customer value while remaining economically sustainable.

Use architecture intelligently:

- FAQ support should not consume Ask CFO reasoning unnecessarily;
- simple calculations should not require expensive model reasoning;
- model choice should match task complexity;
- long context should be controlled;
- repeated identical calculations may use safe caching where architecturally appropriate;
- abuse/unrelated AI use may be restricted under Fair Usage.

Normal genuine business questions should not feel artificially constrained.

---

## 24. Error and Uncertainty Behavior

Ask CFO must handle:

- missing business data;
- stale data;
- conflicting records;
- unavailable integrations;
- insufficient permission;
- ambiguous time period;
- unclear customer/supplier/product names;
- unsupported prediction requests;
- provider/model failure.

Required principle:

**Ask, qualify, or admit uncertainty. Never invent.**

---

## 25. Acceptance Scenarios

Future Blueprint / acceptance work should verify at least:

### Access

- Owner can use Ask CFO;
- Employee blocked by default;
- Supplier blocked;
- Customer blocked;
- Manager behavior follows explicit permission.

### Data questions

- expense comparison;
- credit query;
- stock query when stock capability enabled;
- no stock fabrication when capability/data absent;
- time-period comparison.

### Advisory questions

- facts separated from suggestion;
- uncertainty disclosed;
- no fabricated business fact;
- no autonomous consequential action.

### Tone

- negative trend explained respectfully;
- no accusation;
- practical next action offered.

### Voice

- Basic Voice short summary + detailed text;
- Voice Plus multi-turn conversation;
- short voice blocks;
- formatted summary;
- reminder continuation.

### Channel continuity

- WhatsApp and Conversation Workspace use the same Business Memory and permission behavior.

### Security

- read-only intelligence boundary;
- RLS/merchant isolation;
- no destructive database tool path;
- no cross-business leakage.

### Performance

- simple questions use efficient path;
- deeper analysis provides usable latency/feedback;
- security not bypassed for speed.

---

## 26. Shared Foundations to Reuse

Ask CFO should reuse:

- Business Memory;
- Permission Engine;
- Identity;
- Conversation Engine;
- Human Language Layer;
- analytics/calculation services;
- Smart Reminder Engine;
- Document Intelligence where a document is part of the question;
- Daily Intelligence data services where appropriate;
- audit/logging foundations.

It must not become an isolated AI chatbot with its own duplicate memory and permissions.

---

## 27. Historical Corrections / Anti-drift Notes

Earlier planning discussions sometimes framed deeper CFO capability as future or tier-differentiated.

Current Product Truth includes Ask CFO in both Ledger and Manager.

Therefore:

- Ask CFO is **not Build Later**;
- Ask CFO is **not Manager-only**;
- Employee access remains disabled by default;
- richer analysis may naturally depend on Manager data or enabled add-ons;
- Smart Voice Assistant Plus is a premium interaction layer, not a requirement for basic Ask CFO use.

---

## 28. Provenance

Planning-origin evidence includes:

- Part 2: Ask My CFO / Conversational CFO evolution, dashboard + WhatsApp, data/advisory question classes, missing-data honesty;
- Part 7: truth with dignity / non-shaming Ask CFO personality;
- Part 18: Basic Voice + Smart Voice Assistant Plus clarification, cross-channel continuity;
- Part 19: Ask CFO retained in core/pilot capability set and Founder direction to preserve full features.

Current canonical echoes include:

- Source 01 — Ask CFO Philosophy;
- Source 03 — Ask CFO dashboard;
- Source 04 — Ask CFO Engine;
- Source 05 — Ask CFO rules;
- Source 11 — Ask CFO Product Truth;
- Source 12 — AI implementation/permission/acceptance requirements.

---

## 29. Unresolved Engineering Questions

Future Blueprint/EIS work should determine, without changing Product Truth:

- analytics/query abstraction architecture;
- deterministic query library vs model-driven orchestration;
- safe function/tool schemas;
- conversation context windowing;
- caching strategy;
- source-of-truth timestamping/staleness indicators;
- auditability of recommendations;
- model routing by complexity;
- performance budgets;
- voice generation provider and fallback;
- exact Manager delegated-intelligence permission model.

These are implementation questions, not reasons to narrow Ask CFO.

---

## Final Product Principle

Ask CFO should feel like a calm, informed business thinking partner beside the Owner.

It should remember the business, explain what the data says, admit what it does not know, suggest what may help, and leave the decision with the human.