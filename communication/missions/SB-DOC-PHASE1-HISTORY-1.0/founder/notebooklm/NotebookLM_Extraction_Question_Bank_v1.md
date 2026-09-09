# Smart Business NotebookLM Extraction Question Bank v1

**Mission:** `SB-DOC-PHASE1-HISTORY-1.0 — Phase 1 Historical Continuity Reconstruction`  
**Purpose:** Extract original Founder product intent from NotebookLM without requiring bulk chat export or copy/paste.  
**Method:** The Founder asks these questions inside NotebookLM, exports/copies the answers, and uploads the resulting Q&A file into Smart Business Project HQ for repository extraction and reconciliation.

---

## 1. Extraction rule for NotebookLM answers

When answering, NotebookLM should rely only on its loaded Smart Business source material.

For every answer, ask NotebookLM to:

- preserve original feature details, examples, terminology and reasoning;
- distinguish direct source-supported statements from inference;
- mention conflicting or evolving versions instead of choosing one silently;
- include concrete examples, workflows, edge cases and user roles where present;
- include original pricing/package/timing labels where present, even if later superseded;
- avoid shortening a feature into a high-level summary when detailed material exists;
- mention which underlying NotebookLM sources support the answer where possible.

Historical technical implementation assumptions are evidence, not automatic current architecture authority.

Founder-invented product capabilities remain build candidates unless later/current Founder Product Truth explicitly changed them.

---

# Part A — Product-wide foundation questions

1. **What was the original Founder vision for Smart Business before the current source files were created? Explain the complete product as originally imagined, not only the MVP.**

2. **List every Smart Business feature, module, add-on, assistant, automation, dashboard capability, admin capability, integration and user-facing workflow mentioned anywhere in the NotebookLM sources. Do not omit items because they were called future, later, MVP, add-on or post-pilot.**

3. **For every feature found, classify the historical wording separately as: core, Manager feature, Ledger feature, add-on, later/future, experimental, rejected, or unclear. Quote or closely preserve the original reasoning for each classification.**

4. **What problems of Kerala brick-and-mortar merchants was Smart Business originally designed to solve? Map each merchant problem to the feature or workflow invented to solve it.**

5. **What did the Founder mean by Smart Business being an AI Business Manager / business companion rather than traditional accounting or ERP software?**

6. **What was the intended relationship between WhatsApp, the dashboard/app, voice, photos/documents, and later conversation interfaces?**

7. **What was the intended first-day / first-week merchant experience from onboarding to first useful outcome?**

8. **What did the original material say Smart Business must never become? Include rejected product directions, UX patterns, authority models and business-model ideas.**

---

# Part B — Ledger / Business Memory

9. **Explain the complete Ledger / Business Memory feature as originally designed. Cover text, voice, photo/document entry, transaction types, corrections, search, reports, users, permissions, confirmations, failure handling and examples.**

10. **What exact natural-language transaction examples were used in the NotebookLM sources, and how should Smart Business interpret and confirm each one?**

11. **How should customer credit / Udhar / Kadam entries interact with Ledger transactions and Business Memory?**

12. **What should happen when the AI is uncertain whether a message is a transaction, reminder, stock update, order, support request or something else?**

13. **What reports, summaries, exports and searches were originally expected from Ledger?**

---

# Part C — Receipt Intelligence / Business Documents

14. **Explain Receipt Intelligence completely: supported inputs, extraction, confirmation, storage, transaction creation, searchable Receipt Cabinet, retrieval and failure cases.**

15. **Explain the Receipt Cabinet as a product feature. What can the owner search for, retrieve, filter, download or ask conversationally?**

16. **Explain Universal Document Intelligence in full. What document types and business tasks were intended beyond receipts?**

17. **For Excel, CSV, PDF, handwritten paper, roster photos, order papers and supplier documents, describe the intended preview → confirmation → update workflow.**

18. **How should partial failures, unreadable documents, duplicate imports and conflicting rows be handled?**

---

# Part D — Ask CFO

19. **Recover every detailed Ask CFO example, conversation, question type, answer style, reasoning pattern and limitation in the NotebookLM sources. Do not summarize.**

20. **What business data should Ask CFO be able to reason across—Ledger, credit, stock, suppliers, POS, staff, orders, reminders, documents, daily intelligence and anything else?**

21. **How should Ask CFO distinguish factual answers, estimates, patterns, risks, opportunities and recommendations?**

22. **What should Ask CFO do when data is incomplete, conflicting, stale or absent?**

23. **What did the Founder intend for Ask CFO voice interaction, follow-up discussion, summaries, action items and reminder continuation?**

24. **What decisions or actions must Ask CFO never make autonomously?**

---

# Part E — Smart Reminder Assistant / Automation

25. **Explain the Smart Reminder Assistant completely, including business reminders, personal reminders, supplier reminders, compliance reminders, postponement, recurring reminders and reminder completion.**

26. **What reminder interaction examples, snooze options, natural-language commands or WhatsApp buttons were originally envisioned?**

27. **How should reminders be created from other features such as Ask CFO, Compliance Shield, supplier workflows, credit follow-up, stock/reorder, HR and Order & Delivery?**

28. **What is the boundary between a reminder and an automation rule?**

29. **Explain owner-delegated automation. What may Smart Business execute automatically after explicit pre-approval, and what must still require confirmation?**

---

# Part F — Daily Intelligence

30. **Explain the complete Daily Intelligence Rhythm. For 7:00 AM, 10:30 AM and 10:00 PM, what exact information was intended in each message?**

31. **How should Daily Intelligence differ for Ledger vs Manager customers?**

32. **What should cause Daily Intelligence to highlight an issue, and how should it avoid unnecessary alarm or notification fatigue?**

33. **How should Daily Intelligence interact with reminders, Ask CFO, stock, credit, POS, orders and cash closing?**

34. **What should happen if the scheduled message cannot be generated, data is incomplete, or the merchant has been inactive?**

---

# Part G — Human Language Layer / Voice

35. **Explain the Human Language Layer in full across Owner, Manager, Employee, Delivery Staff, Supplier and Customer.**

36. **What examples or rules were given for natural Malayalam and Manglish rather than literal or robotic translation?**

37. **How and when can each user select or change language? Should language preference follow the user across WhatsApp and dashboard/app?**

38. **Explain Basic Voice Assistant vs Smart Voice Assistant Plus, including who can use voice input, who can receive voice replies, expected reply length, multi-turn conversation and text fallback.**

39. **Recover any original Malayalam/Manglish phrases, response examples or Kerala business vocabulary that should inform product behaviour.**

---

# Part H — Stock / Inventory / Reorder / Supplier

40. **Explain Stock Intelligence completely: stock movements, current stock, units, expiry, slow-moving stock, wastage, reorder points, supplier links and alerts.**

41. **Explain the historical difference between Manager Stock Intelligence and the Smart Stock Assistant add-on for Ledger.**

42. **What exact problems were Smart Stock Assistant intended to solve for bakeries, groceries, supermarkets, restaurants and other inventory-heavy merchants?**

43. **Explain Reorder Intelligence completely. How are reorder suggestions generated, confirmed and communicated to suppliers?**

44. **Explain Supplier Management completely: supplier profile, categories, purchase history, preferred methods, reminders, orders, confirmations and language behaviour.**

45. **What owner-delegated automatic reorder rules were envisioned, including quantity limits and safeguards?**

46. **How should inventory work when the merchant has no POS, and how should it work when a standard POS connection exists?**

---

# Part I — POS / Manager Risk Intelligence / Operational Dashboard

47. **Explain the POS Connection as originally envisioned. Which data should flow from existing POS systems into Smart Business and which systems remain authoritative?**

48. **Explain Manager Risk Intelligence completely: void bills, deleted bills, discounts, cash mismatch, unusual activity and any other signals.**

49. **What wording and workflows prevent Manager Risk Intelligence from accusing employees or treating AI signals as proof of wrongdoing?**

50. **Explain the Operational Dashboard in detail: major sections, cards, metrics, alerts, reports, Ask CFO integration and intended owner experience.**

51. **What was the intended relationship between dashboard intelligence and WhatsApp intelligence?**

---

# Part J — Staff / HR Assistant

52. **Explain Staff / HR Assistant completely: staff profiles, permissions, QR attendance, geofencing, shifts, duty rosters, leave, overtime, payroll and reports.**

53. **Explain the attendance Human Context Override with all examples and intended data history.**

54. **Explain attendance correction requests from employee submission through owner/manager approval/rejection and audit history.**

55. **Explain photo-based duty roster updates end to end, including preview, confirmation, conflict handling and affected employee notification.**

56. **Explain payroll support in as much detail as exists: calculation inputs, approvals, employee visibility, corrections and reports.**

57. **What information may employees see about themselves, and what owner/business intelligence must remain hidden?**

---

# Part K — Smart Order & Delivery

58. **Recover every Smart Order & Delivery workflow and example in the NotebookLM sources, including details not already present in current Product Truth.**

59. **Explain customer creation, customer onboarding, consent/unsubscribe, language selection, address/location collection and approved-contact restrictions.**

60. **Explain order capture from customer, owner, staff, voice, text and paper/document sources. What happens before an order becomes confirmed?**

61. **Explain unavailable-item negotiation, substitutions, quantity changes, pricing confirmation and cancellation.**

62. **Explain delivery assignment, delivery-staff permissions, start-delivery state, live tracking, location privacy and route/completion behaviour.**

63. **Explain proof of delivery, COD handling, COD mismatch, delivery issue reporting, failed delivery and customer non-response.**

64. **Explain how Order & Delivery should integrate with stock, POS, customer credit, Ledger, receipts/invoices, reminders and Ask CFO.**

---

# Part L — Smart Credit Awareness / Payment Verification

65. **Explain Smart Credit Awareness completely: customer balances, limits, overdue awareness, warnings, reminders, repayments and owner overrides.**

66. **Recover the history of any credit-blocking idea and how/why it evolved into owner-controlled credit warnings.**

67. **Explain Payment Verification Assistant / Payment Verification Intelligence completely. What payment evidence can it use and what mismatches should it surface?**

68. **How should bank email sync, UPI/SMS/payment evidence and Ledger transactions relate without creating duplicate financial records?**

---

# Part M — Compliance Shield

69. **Explain Compliance Shield completely: FSSAI, Panchayat/business licences, vehicle or other renewals, statutory deadlines, document storage, reminders and escalation.**

70. **How should Compliance Shield reuse the common Reminder Engine and Document Intelligence rather than create duplicate systems?**

71. **What did the original sources say about legal/compliance boundaries—reminding vs giving legal advice or claiming official compliance?**

---

# Part N — Support Automation

72. **Explain Support Automation and the 100+ FAQ system completely: categories, FAQ matching, multilingual answers, AI escalation, ticket creation and Founder review.**

73. **What common support questions were explicitly listed or drafted in NotebookLM? Return as many as possible, preserving approved answer wording where available.**

74. **What issues should support solve without interrupting normal bookkeeping or business operation?**

75. **Explain support privacy: when may Team LIPS inspect account-specific information and what user agreement is required?**

---

# Part O — Subscription, Payments and Lifecycle

76. **Recover all original Smart Business pricing, tier, add-on, trial, billing and subscription-lifecycle ideas from NotebookLM. Preserve historical versions separately.**

77. **Explain active → past_due → paused → archived → deletion/grace-period behaviour and the intended merchant communication at each stage.**

78. **What happens to merchant data, exports, access and reminders after failed payment, downgrade, cancellation or reactivation?**

79. **Which capabilities belong to Ledger, Manager and each add-on according to the strongest Founder-origin evidence? Identify contradictions instead of resolving them silently.**

---

# Part P — Super Admin / Founder Operating System / Platform Stewardship

80. **Explain every Super Admin / Founder Cockpit capability mentioned in NotebookLM: system health, errors, quarantine, backups, support, growth controls, users, subscriptions, AI quality and operational intelligence.**

81. **What should the Founder be able to observe or control without gaining inappropriate routine access to individual merchant business data?**

82. **Explain OPEN / WAITLIST / CLOSED onboarding control and why it exists.**

83. **What platform metrics, feature adoption, AI usage, customer experience or scalability signals were envisioned for responsible product improvement?**

---

# Part Q — Onboarding / First Experience

84. **Recover the complete original onboarding / business health check / survey / `/start` experience, including every screen, question, scoring idea, recommendation and trust message.**

85. **Which historical Typeform/Fillout/Make/Stripe ideas were merely implementation methods, and which underlying product behaviours remain important?**

86. **What should happen in the first 24 hours after activation to create the merchant's first meaningful win?**

---

# Part R — Cross-feature architecture and product behaviour

87. **Which shared foundations were repeatedly intended to be reused across features—Business Memory, Reminder Engine, Permission Engine, Notification Engine, Document Intelligence, Location, Customer/Supplier identities, Conversation history, etc.?**

88. **Identify every place where the NotebookLM sources warn against duplicate tables, duplicate workflows, duplicate reminder systems, duplicate permissions or separate channel-specific business logic.**

89. **Map the major cross-feature flows. Example: receipt → Ledger → Ask CFO → Daily Intelligence; stock → reorder → supplier → reminder; roster photo → HR → attendance/payroll. Include all supported chains.**

90. **What parts of Smart Business were designed to work even when WhatsApp is unavailable?**

---

# Part S — Failure, edge cases and trust

91. **List every failure state, exception, correction, ambiguity or edge case mentioned anywhere in the NotebookLM sources. Group them by feature.**

92. **List every confirmation gate the Founder expected before consequential data changes or external actions.**

93. **List every situation where the system should ask clarification instead of guessing.**

94. **List every privacy or dignity rule involving owners, employees, suppliers, customers and delivery staff.**

95. **List every explicit AI-authority boundary: what AI may observe/suggest/execute and what humans must decide.**

---

# Part T — Historical evolution and contradictions

96. **Identify features whose name, package, timing or behaviour changed over time. For each, show: original idea → later discussion → latest Founder-supported NotebookLM state.**

97. **Identify every feature that an assistant suggested postponing, shrinking, removing or moving after pilot. Did the Founder accept or reject that advice? Preserve the full reasoning.**

98. **Identify every product decision where the Founder corrected the AI/planning assistant. These are high-priority anti-drift evidence.**

99. **Identify all contradictions between different NotebookLM sources concerning pricing, voice, HR packaging, stock packaging, Daily Intelligence timing, order/delivery timing, permissions or other product behaviour. Do not resolve them—report them.**

100. **What important Smart Business feature or Founder idea has not been covered by any of the previous 99 questions? Provide a complete residual list so nothing is missed.**

---

## Recommended upload batches

Do not ask all 100 questions in one NotebookLM session if that causes shallow answers.

Preferred batches:

- Batch 1: Questions 1–8 — complete product inventory and vision.
- Batch 2: Questions 9–18 — Ledger, receipts and documents.
- Batch 3: Questions 19–34 — Ask CFO, reminders and Daily Intelligence.
- Batch 4: Questions 35–51 — language, voice, stock, suppliers, POS and dashboard.
- Batch 5: Questions 52–68 — HR, Order & Delivery, credit and payment verification.
- Batch 6: Questions 69–86 — compliance, support, payments, Super Admin and onboarding.
- Batch 7: Questions 87–100 — cross-feature architecture, edge cases, evolution and residual completeness.

For each batch, save the questions and NotebookLM answers together in one text or Markdown file and upload it to the Smart Business Project sources.

Suggested filenames:

- `notebooklm_qa_01_product_vision.md`
- `notebooklm_qa_02_ledger_documents.md`
- `notebooklm_qa_03_cfo_reminders_daily.md`
- `notebooklm_qa_04_language_stock_pos.md`
- `notebooklm_qa_05_hr_orders_credit.md`
- `notebooklm_qa_06_support_payments_admin.md`
- `notebooklm_qa_07_cross_feature_history.md`

---

## Completion test

NotebookLM extraction is complete only when we can answer, from durable evidence:

1. What are all confirmed Smart Business capabilities?
2. Why does each capability exist?
3. Who uses it?
4. What can each role do?
5. What is the full happy-path workflow?
6. What are the important exception and correction paths?
7. What must the AI never do?
8. What shared foundations should be reused?
9. What is Build Now, Add-on, Separate Product or genuinely rejected under current Founder direction?
10. What historical labels were superseded?
11. What product details remain unresolved and genuinely require Founder decision?
12. Can Claude Code receive one feature file and understand the complete frontend + backend + AI + permission + integration behaviour without reconstructing old chats?

If question 12 is not yet true, the feature extraction is not deep enough.