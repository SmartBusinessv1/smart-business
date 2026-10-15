# SB-P-1.16 — Founder Product Decision Record (Draft)

**DRAFT — NOT CANONICAL — FOUNDER-APPROVED AT DIALOGUE LEVEL, PENDING CANONICAL PUBLICATION**

**Mission:** SB-P-1.16 — Financial Integrity & Credit  
**Lifecycle stage:** Source 18 v1.2, Stage 3 — Founder Decision Gate  
**Prepared by:** Claude Code, Definition Actor (MC-107 §13.1), under MC-139 as executed by MC-143; ninth decision added under MC-147 as executed by MC-150  
**Source of decision text:** entries 2.1–2.8 from the MC-140 verbatim Founder decision source packet, supplied in MC-143; entry 2.9 from the MC-146 wording supplied verbatim in MC-150 Part B (both conversation-source transcriptions, not canonical records)  
**Canonical baseline:** `main@8a27cd5be31a1c1b8a8a33c30c0b091a27f03127` (PR #961 merge)  
**Approval date:** 2026-10-15 for all nine items, as stated in MC-140 (items 1–8) and MC-150 (item 9). Individual message timestamps are not available and none is invented.  
**Implementation Authorization:** WITHHELD — IMPLEMENTATION NOT AUTHORIZED.

## 0. Status and rules of this record

- All nine items below are **Founder-approved at dialogue level**. They are **not canonical** until this record is human-merged to protected `main` and independently verified by Mission Control.
- The MC-125 to MC-139 and MC-145 to MC-150 references identify conversational records only. They are **not** repository files and no repository path or blob is claimed for them.
- Each decision's approved text is reproduced **verbatim** from MC-140 (entries 2.1–2.8) or MC-150 Part B (entry 2.9) inside a `text` block, so Markdown formatting cannot alter it. Nothing inside a `text` block has been edited, shortened or reworded. Commentary outside the blocks is the Definition Actor's and is not Founder text.
- This record changes no source contract, Product Truth, Build Plan or FCTM row. The canonical Stage 2 FCTM still shows U-01 as `ESCALATED` with 19 `ESC-U01` flags. Any FCTM update after canonical publication is a separate Mission Control action.
- Open governance findings arising from these decisions are in the companion report `10-stage3-reconciliation-and-impact-screen-report.md`. The Source 18 T7 candidate under Q4 (finding F-1) is disposed of by the ninth decision, `16:FPDR-9`; finding F-2 is disposed of by Mission Control's MC-145 determination (no additional T7). Entries 2.1–2.8 are unchanged from the eight-decision draft, so their commentary still refers to F-1 and F-2 as open; this section and the companion report record the later dispositions.

## 1. Decision inventory

The decision identifiers are **proposed** in the SB-P-1.16 namespace (`16:FPDR-n`), distinct from SB-P-1.12, SB-P-1.14 and SB-P-1.15 records.

| Proposed ID | Question | Option approved | Resolves (Stage 2 register) | Decision text source | Founder approval | Mission Control acknowledgement |
|---|---|---|---|---|---|---|
| `16:FPDR-1` | Q1(a) Shared customer identity ownership | Option A | U-01 source conflict (subject to canonical recording); Δ-09 | Founder-authored text (MC-125) | The decision text itself | MC-125 |
| `16:FPDR-2` | Q1(b) Historical credit-method sale attribution | Option A | DC-15 | MC-126 | Explicit statement (below) | MC-127 |
| `16:FPDR-3` | Q2 "Partially matched" meaning | Option C | U-02; DC-03 | MC-128 | Explicit statement | MC-129 |
| `16:FPDR-4` | Q3(a) Factual credit awareness | Option A | U-03; DC-01 | MC-130 | Explicit statement | MC-131 |
| `16:FPDR-5` | Q3(b) Overdue status without a due date | Option A | U-04; DC-02 | MC-132 | Explicit statement | MC-133 |
| `16:FPDR-6` | Q4 Phase 1 payment-evidence capabilities | Option A | U-06 (T7 candidate F-1 disposed of by `16:FPDR-9`); U-09 in part | MC-134 | Explicit statement | MC-135 |
| `16:FPDR-7` | Q5 Manager delegation | Option B | U-07; DC-09 (SB-P-1.16 boundary only) | MC-136 | Explicit statement | MC-137 |
| `16:FPDR-8` | Q6 Merchant-controlled customer credit communication | Option A | U-05 Founder dependency; DC-10 | MC-138 | Explicit statement | MC-139 |
| `16:FPDR-9` | F-1 Source 18 T7: bounded payment-evidence channel deferral | Option A | F-1 (T7 candidate under Q4); supplements `16:FPDR-6` | MC-146 (verbatim in MC-150) | Explicit statement | MC-147 |

Provenance note from MC-140, preserved: "All eight decision items are Founder-approved at dialogue level; pending canonical decision-record publication, Founder human merge and Mission Control post-merge verification. Source 18 T7, U-08, inherited mission boundaries, and any issues arising on reconciliation remain independently governed."

## 2. Decision entries

### 2.1 `16:FPDR-1` — Q1(a) Shared customer identity ownership

**Approval provenance.** The Founder directly submitted the following text as an explicit approval in the conversation (MC-140). The label "Proposed Option A" is part of the Founder's actual message; the operative text says "I approve", and MC-140 directs that the label must not be read as negating that approval. **Mission Control acknowledgement (MC-125):** "Mission Control acknowledges your explicit approval." MC-125 recorded Q1(a) as Founder-approved pending canonical recording.

**Approved text (verbatim, Founder-authored):**

```text
SB-P-1.16 — Founder Decision Q1(a): Proposed Option A
I approve using the shared merchant-scoped customer identity defined by SB-P-1.12 as the identity foundation for Smart Credit in SB-P-1.16.
SB-P-1.12 retains ownership of the shared identity foundation. SB-P-1.16 is responsible for the credit-specific customer identification, resolution and linking workflows required by Contract 14.
SB-P-1.17 and SB-P-1.18 retain their approved later directory, search and related capabilities. They must not introduce a competing customer identity for credit.
For Build Plan §10.3, I expressly clarify that the later-mission timing of richer directory capabilities does not defer the basic shared customer-identity operations necessary to satisfy SB-P-1.16's approved credit requirements.
Ambiguous customer identity must be resolved through merchant confirmation. Smart Business must not silently match names or create duplicate customer identities or financial transactions.
This decision resolves the identified source conflict for Q1(a), subject to canonical recording and verification. It does not decide Q1(b), authorize implementation, or approve any unrelated mission-scope change.
```

**Traceability.** Contract 14 §4 (`14-§4-1`–`14-§4-6`); Contract 22 §5 (`22-§5-5`, DELEGATED to SB-P-1.12); SB-P-1.12 `EIS-ID-03`; Build Plan §10.3 (`BP-§10.3-S2`, currently `ESCALATED`); FCTM-14 `3-§15-7`; Truth Pack Δ-09, U-01. All 19 `ESC-U01` rows: `14-§4-1`–`14-§4-6`, `14-§5-1`, `14-§13-1`, `14-§18-1`, `14-§20-2`, `14-§22-1`, `14-§22-3`, `15-§7-5`, `15-§14-3`, `15-§23-2`, `15-§25-6`, `3-§9-12`, `BP-§10.5-W1` (18 `IN SCOPE`) and `22-§5-5` (`DELEGATED`). **These flags are not altered by this draft.**

**Conditions and boundaries in the text:** SB-P-1.12 keeps identity ownership; SB-P-1.16 owns the credit-specific workflows; SB-P-1.17/1.18 keep later directory and search, with no competing credit identity; merchant confirmation for ambiguous identity; no silent name matching; no duplicate identities or transactions; does not decide Q1(b), authorize implementation or approve unrelated scope changes. Open point: see report Section 2 on `3-§15-7`.

### 2.2 `16:FPDR-2` — Q1(b) Historical credit-method sale attribution

**Founder approval statement (verbatim):** "As Founder, I explicitly approve SB-P-1.16 Q1(b), Option A, with the full decision wording and safeguards stated in MC-126. Record it as Founder-approved pending canonical publication."

**Mission Control acknowledgement (as stated in MC-140):** MC-127 accepted complete MC-126 decision wording and safeguards without modification; Founder-approved pending canonical publication.

**Approved text (verbatim from MC-126):**

```text
SB-P-1.16 — Founder Decision Q1(b)
Decision: Option A — Owner-Confirmed Historical Credit Attribution
I approve allowing historical credit-method sales to be linked to the shared merchant-scoped customer identity through an explicit, confirmed and audited Owner action.
Until attribution is confirmed, these historical sales must remain visibly unattributed and must not be silently included in an identified customer's authoritative balance.
Following valid attribution, the existing credit transaction may contribute to the correct customer's authoritative outstanding balance, accounting for all supported repayments, corrections and reversals.
The original Ledger transaction identity and audit history must be preserved. Attribution must not create any duplicate sale, income, repayment or financial entry.
Smart Business must not automatically assign customers based solely on matching names, phone numbers or other uncertain clues.
Any missing or uncertain financial facts must remain clearly disclosed rather than fabricated.
This decision establishes the intended product behaviour. It does not authorize implementation, alter unrelated permissions, or approve any other outstanding Founder question.
Canonical effect remains subject to the Founder Product Decision Record being human-merged into protected main and independently verified by Mission Control.
```

**Traceability.** `3-§9-12`; `14-§4-1`–`14-§4-6`; `14-§5-7`; `14-§7-*`; `14-§16-*`; `14-§22-1`, `14-§22-2`; SB-P-1.14 `14:FPDR-1` and `14:FPDR-4` (no reinterpretation; repayment may settle a credit-method sale); Truth Pack DC-15.

### 2.3 `16:FPDR-3` — Q2 "Partially matched" meaning

**Founder approval statement (verbatim):** "As Founder, I explicitly approve SB-P-1.16 Q2, Option C, with the complete decision wording and safeguards stated in MC-128. Record it as Founder-approved pending canonical publication."

**Mission Control acknowledgement (as stated in MC-140):** MC-129 accepted complete MC-128 wording without modification; Founder-approved pending canonical publication.

**Approved text (verbatim from MC-128):**

```text
SB-P-1.16 — Founder Decision Q2
Decision: Option C — Separate Merchant-Facing Labels for Verified Part-Payment and Payment-Evidence Mismatch
I approve distinguishing a verified part-payment from a payment-evidence mismatch in Smart Business.
A verified part-payment means that an actual repayment has been verified for a specific amount and correctly linked to the applicable financial record. Only that verified amount may reduce the corresponding outstanding balance, subject to the approved Ledger and reconciliation rules. Any remaining amount must continue to be shown as outstanding.
A payment-evidence mismatch means that received evidence differs materially from the expected or recorded transaction details and cannot be treated as a verified match without the applicable checks and authorized human review.
Smart Business must not use the same merchant-facing label to imply that both situations have the same verification status.
A legitimate part-payment must not be treated as a mismatch solely because it is less than the full amount owed.
Ambiguous evidence, unresolved discrepancies and unauthenticated submissions must never be silently promoted into verified payment status.
All payment verification, linking, repayment and correction actions must preserve the original financial records, idempotency, audit history and exactly-once financial meaning. No duplicate sale, income or repayment may result from verification.
The exact screen wording, technical state identifiers, matching algorithms and display implementation remain bounded engineering and experience-design matters, provided the merchant-facing distinction is clear.
This decision resolves the intended product meaning of “partially matched” for SB-P-1.16. It does not approve any specific payment provider or evidence-ingestion channel, authorize autonomous financial decisions, or decide other outstanding Founder questions.
Canonical effect remains subject to the Founder Product Decision Record being human-merged into protected main and independently verified by Mission Control.
```

**Traceability.** `15-§4-1`–`15-§4-8`; `15-§8-*`; `15-§10-*`; `15-§9-*`; `14-§7-*`; `BP-§10.5-E2`, `BP-§10.5-W10`; Truth Pack U-02, DC-03.

### 2.4 `16:FPDR-4` — Q3(a) Factual credit awareness

**Founder approval statement (verbatim):** "As Founder, I explicitly approve SB-P-1.16 Q3(a), Option A, with the complete decision wording and safeguards stated in MC-130. Record it as Founder-approved pending canonical publication."

**Mission Control acknowledgement (as stated in MC-140):** MC-131 accepted complete MC-130 wording without modification; Founder-approved pending canonical publication.

**Approved text (verbatim from MC-130):**

```text
SB-P-1.16 — Founder Decision Q3(a)
Decision: Option A — Factual Credit Awareness Only
I approve that Smart Business's credit-risk awareness and warnings must be based on supported, explainable financial facts rather than invented customer risk assessments.
Smart Business may present recorded outstanding balances, supported repayment history, age of unpaid credit, comparisons with Owner-configured awareness thresholds, and relevant missing or uncertain information.
The system must not invent predictive customer risk scores, assign moral or trustworthiness labels, or classify customers as good or bad based on incomplete financial information.
AI-generated explanations must remain grounded in the available business records. Where data is incomplete, ambiguous, unverified or otherwise insufficient, Smart Business must disclose the limitation rather than manufacture certainty.
Smart Business may provide factual awareness when an Owner-configured threshold is exceeded, but must not impose an autonomous hard credit block by default or independently approve or reject a customer's request for credit.
Credit approval, refusal, adjustment, grace and other consequential credit decisions remain with the Owner or another human only where explicitly authorized by approved Product Truth and valid, scoped delegation.
Credit-awareness information must respect existing business isolation and permission boundaries. Manager and Employee access must not expand through this decision.
This decision establishes the product meaning of factual credit-risk awareness for SB-P-1.16. It does not define an overdue policy without a due date, approve an underwriting or lending feature, establish a universal credit limit, or authorize implementation.
Canonical effect remains subject to the Founder Product Decision Record being human-merged into protected main and independently verified by Mission Control.
```

**Traceability.** `14-§3-7`; `14-§8-*`; `14-§9-*`; `14-§19-5`; `14-§21-1`, `14-§21-2`, `14-§21-5`; `BP-§10.5-A2`, `BP-§10.5-W4`; `BP-§16-6`; `GPCV-§9-1`, `GPCV-§9-10`; Truth Pack U-03, DC-01.

### 2.5 `16:FPDR-5` — Q3(b) Overdue status without a due date

**Founder approval statement (verbatim):** "As Founder, I explicitly approve SB-P-1.16 Q3(b), Option A, with the complete decision wording and safeguards stated in MC-132. Record it as Founder-approved pending canonical publication."

**Mission Control acknowledgement (as stated in MC-140):** MC-133 accepted complete MC-132 wording without modification; Founder-approved pending canonical publication.

**Approved text (verbatim from MC-132):**

```text
SB-P-1.16 — Founder Decision Q3(b)
Decision: Option A — Overdue Status Requires an Explicitly Recorded Due or Expected Payment Date
I approve that Smart Business may classify an outstanding customer credit balance as overdue only when an applicable due or expected payment date has been explicitly recorded and that date has passed while a corresponding unpaid balance remains.
Recording a due or expected payment date is optional. Smart Business must not require every merchant or every credit transaction to have one.
Where no applicable date has been recorded, Smart Business may show the recorded credit age, outstanding amount and supported repayment history, but must not label that credit as overdue solely because time has passed.
Smart Business must not invent payment deadlines, assume a universal repayment period, or automatically infer that a customer has broken a payment agreement.
An Owner-configured credit-awareness threshold must remain distinct from a payment due date. Exceeding such a threshold does not independently establish overdue status.
Overdue and ageing information must be based on supported Ledger facts and applicable recorded dates, accounting for confirmed repayments, corrections and reversals. Missing or uncertain information must be disclosed rather than presented as verified truth.
All warnings and explanations must use neutral, respectful language. Smart Business informs the merchant; it does not morally judge the customer or autonomously approve, reject or block additional credit by default.
This decision does not introduce an Owner-configured default repayment period, a fixed system-wide due period, or any new mandatory data-entry requirement.
Exact date calculations, ageing presentation and interface labels remain bounded engineering and experience-design matters, provided they preserve these approved product rules.
This decision resolves SB-P-1.16 Founder Question Q3(b). It does not alter unrelated credit permissions, settle payment-evidence scope, or authorize implementation.
Canonical effect remains subject to the Founder Product Decision Record being human-merged into protected main and independently verified by Mission Control.
```

**Traceability.** `14-§5-6`; `14-§8-*`; `BP-§10.5-A1`, `BP-§10.5-W3`; C03 §16 (row `3-§16`); Truth Pack U-04, DC-02.

### 2.6 `16:FPDR-6` — Q4 Phase 1 payment-evidence capabilities

**Founder approval statement (verbatim):** "As Founder, I explicitly approve SB-P-1.16 Q4, Option A, with the complete decision wording and safeguards stated in MC-134. Record it as Founder-approved pending canonical publication."

**Mission Control acknowledgement (as stated in MC-140):** MC-135 accepted complete MC-134 wording and nine sections of safeguards without modification; Founder-approved pending canonical publication.

**Approved text (verbatim from MC-134):**

```text
SB-P-1.16 — Founder Decision Q4
Decision: Option A — Gateway-First Phase 1 Payment-Evidence Capability
I approve a gateway-first payment-evidence capability for SB-P-1.16 Phase 1, subject to the following product and governance boundaries.
1. Authenticated gateway evidence
Smart Business shall support authenticated payment-gateway API or webhook evidence for payments actually processed through a merchant's authorized, connected gateway.
Gateway evidence must be authenticated and bound to the correct merchant and provider account. Provider payment status must remain distinguishable from the separate question of whether the event matches an existing Smart Business sale or repayment.
2. Gateway settlement evidence
Smart Business shall support applicable gateway settlement and reconciliation evidence, including settlement references, fees, refunds, disputes and adjustments to the extent supported by the approved provider integration.
A gateway settlement status must not automatically be represented as final receipt of funds in the merchant's bank account.
3. Merchant evidence fallback
Smart Business shall permit merchant-submitted receipts, screenshots and related documents to enter an explicit evidence-review workflow for payments not covered by the connected gateway.
Merchant-uploaded evidence must not independently establish provider-authenticated payment verification.
An authorized human may review and confirm the appropriate business action within approved financial-integrity rules. Human confirmation must not be misrepresented as independent provider verification.
4. Phase 1 coverage boundary
This decision does not approve generic direct-bank API ingestion, authenticated bank-email integration, or Account Aggregator access as part of the selected initial payment-evidence channel set.
Direct bank transfers and UPI payments that bypass the connected gateway are not automatically verified through gateway evidence.
Smart Business must communicate that coverage limitation truthfully and must not imply universal bank/UPI reconciliation.
This channel selection does not cancel or silently defer any independently approved contractual obligation. Any identified requirement requiring reassignment, deferral or reclassification must be escalated for explicit Founder disposition under Source 18.
5. Payment and Ledger integrity
Verification and reconciliation must preserve explicit evidence states, deterministic or explainable matching where applicable, idempotency, audit history and exactly-once financial meaning.
Ambiguous matches require authorized human review. No duplicated sale, income, repayment or settlement entry may result from repeated provider events, uploads or reconciliation actions.
Verified part-payments and payment-evidence mismatches must remain distinct in accordance with the Founder-approved Q2 decision.
6. Reversal and dispute handling
The selected gateway evidence capability must account for applicable provider refunds, reversals, disputes, chargebacks and settlement adjustments.
A later adverse event must preserve prior evidence and verification history and must not silently rewrite the Ledger.
The exact provider event mappings remain bounded integration-design responsibilities.
7. Provider independence and operational sustainability
No particular payment gateway, bank or commercial service is selected by this Founder decision.
Any later provider selection or external activation requires separate validation of merchant eligibility, technical feasibility, authorization, provider terms, integration costs, secure credential handling, operational support, outage recovery and rollback.
Provider-specific functionality must remain in the approved integration/extension layer.
8. Legal and privacy boundary
This decision does not determine payment-evidence retention periods, deletion eligibility, backup/restoration behaviour or other unresolved U-08 lifecycle matters.
These remain subject to applicable legal/governance review and subsequent approved decisions before any dependent Blueprint lock.
9. Implementation boundary
This decision establishes the intended Phase 1 product capabilities and their limits. It does not claim any gateway integration is deployed, approve credentials, authorize provider activation, grant staff financial permissions, or authorize implementation.
Canonical effect remains subject to the Founder Product Decision Record being human-merged into protected main and independently verified by Mission Control.
```

**Traceability.** `15-§1-2`; `15-§3-7`; `15-§5-1`–`15-§5-8`; `15-§6-*`; `15-§12-*`; `15-§13-*`; `15-§14-*`; `15-§21-10`; `15-§25-12`; `15-§28-1`; `22-§17-3`; `BP-§5.4-1`, `BP-§10.5-W5`; all 41 `IN SCOPE` rows carrying `DPAY` (FCTM Part D-2); Source 11 "Bank email sync" (Ledger) and "Feature: Bank Email Sync"; Truth Pack U-06, U-09. **Open T7 candidate:** see report Section 4.

### 2.7 `16:FPDR-7` — Q5 Manager delegation

**Founder approval statement (verbatim):** "As Founder, I explicitly approve SB-P-1.16 Q5, Option B, with the complete decision wording and safeguards stated in MC-136. Record it as Founder-approved pending canonical publication."

**Mission Control acknowledgement (as stated in MC-140):** MC-137 accepted complete MC-136 wording and seven safeguard sections without modification; Founder-approved pending canonical publication.

**Approved text (verbatim from MC-136):**

```text
SB-P-1.16 — Founder Decision Q5
Decision: Option B — Scoped Reconciliation Manager
I approve the Scoped Reconciliation Manager model for Smart Business SB-P-1.16.
A Manager shall not obtain customer-credit visibility, repayment authority, payment-evidence access or reconciliation privileges merely by holding the Manager role. Every such capability must be explicitly delegated by the business Owner and constrained to the approved business, action and assigned customer, transaction, evidence or reconciliation scope.
1. Operational credit capabilities
The Owner may separately delegate the ability to view assigned customer credit balances, propose repayments, record authorized repayments, review assigned payment evidence and view assigned reconciliation cases.
These capabilities must remain independently controlled. Permission to create or propose a transaction does not imply permission to read all balances, modify unrelated records, resolve payment matches or view Owner-wide financial intelligence.
2. Ambiguous payment-match resolution
The Owner may additionally delegate authority to resolve specifically assigned ambiguous payment matches.
Match resolution must require a separate explicit capability and an exact human confirmation bound to the authorized actor, business, evidence, candidate transaction or transactions, and the reviewed state.
A Manager may resolve only the evidence and candidate records within the Manager's valid delegated scope.
If the evidence, candidate set, transaction state or current permission changes before commitment, the prior confirmation must not be treated as sufficient authority.
AI suggestions must never independently resolve or authorize a consequential ambiguous payment match.
3. Owner-reserved financial decisions
Credit-threshold configuration, credit-policy overrides, decisions to grant or refuse additional customer credit, grace decisions and other consequential credit or financial-policy approvals remain with the Owner.
This decision does not authorize generic Manager financial-approval permissions or delegation of Owner-wide financial intelligence.
4. Current authorization and revocation
Every protected read and consequential action must enforce the current business scope, explicit capability grant, object assignment, action type and applicable state through the existing SB-P-1.12 authorization architecture.
Permission revocation must prevent previously prepared but unauthorized actions from being committed.
Consequential confirmations must be checked again at execution time. Grant, revoke, confirmation, denial and domain-action events must follow the approved audit requirements.
5. Financial and privacy integrity
Manager access must not expose unrelated customer balances, bank-account information, payment evidence, reconciliation records or Owner-only financial intelligence.
Repayments and reconciliation actions must preserve the approved Ledger, verification, idempotency, audit and exactly-once financial-integrity rules.
Employees and Customers acquire no additional credit, reconciliation or financial-intelligence authority through this decision.
6. Cross-mission governance
This decision establishes the SB-P-1.16 Manager delegation product boundary. It does not silently approve or close the outstanding SB-P-1.15 R15-11 permission decision.
Any cross-mission contract or permission-scope conflict must be identified and reconciled through the applicable Founder and Mission Control governance process.
7. Implementation boundary
The SB-P-1.12 authorization kernel is an approved specification, not a demonstrated deployed runtime.
Exact capability identifiers, assignment-scope implementation, server-side enforcement, confirmation workflows and grant interfaces remain subject to subsequent Blueprint, EIS, engineering and verification gates.
This Founder decision authorizes no permission changes, production configuration, implementation or rollout.
Canonical effect remains subject to the Founder Product Decision Record being human-merged into protected main and independently verified by Mission Control.
```

**Traceability.** `14-§14-1`–`14-§14-4`; `15-§17-1`–`15-§17-4`; `14-§9-*`; `14-§12-6`; `15-§9-*`; `15-§19-*`; `24-§21-4`, `24-§21-5`; C21 §§4, 5, 7, 17, 18; SB-P-1.15 DC-06 and R15-11 (pending); Truth Pack U-07, DC-09; dependency `D12`.

### 2.8 `16:FPDR-8` — Q6 Merchant-controlled customer credit communication

**Founder approval statement (verbatim):** "As Founder, I explicitly approve SB-P-1.16 Q6, Option A, with the complete decision wording and safeguards stated in MC-138. Record it as Founder-approved pending canonical publication."

**Mission Control acknowledgement (as stated in MC-140):** MC-139 accepted complete MC-138 wording and seven safeguard sections without modification; Founder-approved pending canonical publication.

**Approved text (verbatim from MC-138):**

```text
SB-P-1.16 — Founder Decision Q6
Decision: Option A — Merchant-Controlled Customer Credit Communication Preparation
I approve merchant-controlled preparation of respectful customer credit communications within SB-P-1.16, subject to the following requirements.
1. AI-assisted drafting
Smart Business may prepare customer-facing credit messages using supported business records and applicable approved financial facts.
AI-generated messages must be clear, respectful and factual. Smart Business must not invent balances, payment claims, due dates, overdue status, customer risk scores or accusations.
Where customer identity or financial information is uncertain, Smart Business must disclose the uncertainty rather than present an unsupported claim as established fact.
2. Merchant review and approval
Customer-facing credit messages must be reviewed and explicitly approved by the business Owner, or another human only where the applicable Product Truth and valid, scoped delegation expressly authorize that approval.
Preparing a draft does not constitute merchant approval.
The merchant must remain able to review the intended recipient, message content and supported financial details before authorizing a communication.
3. Delivery authorization
SB-P-1.16 shall not autonomously deliver customer-facing credit messages or send messages through an unapproved channel.
Any future system-mediated delivery requires an approved communication channel, appropriate recipient and customer authority, relevant consent or communication permissions where applicable, and a separately authorized delivery workflow.
A message's preparation or approval must never be represented as proof of sending or successful delivery.
4. Customer dignity and privacy
Customer communication must avoid threatening, shaming, accusatory or moral-judgement language.
Messages must not disclose another customer's information, unrelated merchant financial intelligence or details outside the intended recipient's permitted relationship.
Ambiguous customer identity must not be resolved by automatic name matching or assumed recipient selection.
5. Financial and audit integrity
Message content must respect the approved Ledger, credit, repayment, verification and overdue-definition requirements.
Relevant drafting, approval and delivery actions must preserve appropriate audit attribution and must not alter financial records merely because a communication was prepared or approved.
6. Existing contract obligations
The existing Contract 14 delivery-dependent FCTM rows remain IN SCOPE with their recorded DNTF dependency:
- 14-§10-2 through 14-§10-6
- 14-§14-4
- 14-§22-9
These obligations must not be marked complete merely because message preparation or approval has been defined.
No approved BUILD NOW requirement is deferred, moved to SB-P-1.20 or otherwise reclassified by this decision.
If a later architecture or mission-boundary analysis identifies a required reassignment, deferral or scope change, it must be escalated for explicit Founder disposition under Source 18 T7.
7. Cross-mission and implementation boundaries
The approved Build Plan's later WhatsApp delivery mission, SB-P-1.20, remains responsible for its already assigned channel capabilities.
This decision does not select or activate WhatsApp, SMS, email or another delivery provider.
It does not create new Manager, Employee or Customer permissions, approve outbound automation, establish a specific communication template, or authorize implementation.
Exact message-editing interfaces, technical states and bounded drafting mechanisms remain subsequent product-design and engineering matters.
Canonical effect remains subject to the Founder Product Decision Record being human-merged into protected main and independently verified by Mission Control.
```

**Traceability.** `14-§10-1`–`14-§10-6`; `14-§14-4`; `14-§19-*`; `14-§22-9`; `21-§4-5`, `21-§13-2`; Truth Pack U-05, DC-10; Mission Control Source 11 screen (MC-117); dependency `DNTF`.

### 2.9 `16:FPDR-9` — F-1 Source 18 T7: explicit bounded payment-evidence channel deferral

**Source of decision text:** MC-146, supplied verbatim in MC-150 Part B (conversation-source, not a repository file).

**Founder approval statement (verbatim, MC-150 Part C):** "As Founder, I explicitly approve SB-P-1.16 F-1 Source 18 T7, Option A, with the complete ten-section decision wording, FCTM treatment, Source 11 boundaries and safeguards stated in MC-146. Record it as Founder-approved pending canonical publication."

**Mission Control acknowledgement (verbatim, MC-147, as reproduced in MC-150 Part C):** "Mission Control acknowledges your explicit approval of **the complete ten-section MC-146 decision wording**, including its FCTM treatment, Source 11 boundaries, financial-integrity safeguards and implementation restrictions." "The wording is accepted without modification."

**Approval date:** 15 October 2026 (MC-150 Part C). No individual message timestamp is available and none is invented.

**Current status (recorded separately, per the MC-150 recording rule):** **Founder-approved at dialogue level, pending canonical publication.** The verbatim text below still carries its original line "Approval status: PROPOSED — AWAITING EXPLICIT FOUNDER APPROVAL"; that line is preserved unaltered as part of the quotation and does not describe the current status.

**Relationship to other decisions:** supplements `16:FPDR-6` (Q4 gateway-first), which it states it "does not replace". It disposes of finding F-1 in the companion report.

**Approved text (verbatim from MC-146):**

```text
# SB-P-1.16 — Founder Decision F-1
## Source 18 T7 — Explicit Bounded Payment-Evidence Channel Deferral

**Decision reference:** MC-146  
**Decision type:** Founder-authorized Source 18 T7 scope disposition  
**Proposed option:** A — Explicit Bounded Deferral  
**Approval status:** PROPOSED — AWAITING EXPLICIT FOUNDER APPROVAL

### 1. Founder decision

I approve an explicit, bounded deferral of standalone authenticated bank-email ingestion and generic direct-bank API ingestion from the selected initial Phase 1 payment-evidence channel set of SB-P-1.16.

This decision supplements, and does not replace, the previously approved Q4 gateway-first payment-evidence decision recorded in MC-134.

The selected initial SB-P-1.16 payment-evidence capability remains:

- Authenticated payment-gateway API/webhook evidence for payments processed through a merchant's authorized connected gateway.
- Applicable gateway settlement and reconciliation evidence.
- Merchant-uploaded evidence requiring appropriate human review, without independent provider-authenticated verification.
- The existing approved verification, matching, correction, reversal, permissions, audit and financial-integrity requirements.

This is an explicit Source 18 T7 deferral decision. It must not be interpreted as proof that the deferred capabilities have been delivered.

### 2. Direct-bank API evidence

Contract 15 §5 includes bank/payment provider API/webhook evidence, represented by FCTM row `15-§5-1`.

For initial SB-P-1.16 delivery, I approve payment-gateway API/webhook evidence as the selected authenticated provider channel.

Generic direct-bank API ingestion is explicitly deferred from the initial channel set.

The gateway API/webhook obligation remains in scope and must be demonstrated through the applicable completion and runtime-verification gates.

Because `15-§5-1` combines bank and payment-provider evidence in one source row, its traceability must preserve both the in-scope gateway branch and the deferred generic direct-bank branch. The entire row must not be marked fulfilled or deferred in a way that conceals either obligation.

Any later direct-bank integration requires separate approval of access, provider terms, eligibility, security, privacy, cost, operations and implementation.

### 3. Authenticated bank-email ingestion

Contract 15 §5 identifies authenticated bank-email ingestion, represented by FCTM row `15-§5-2`.

I explicitly defer standalone authenticated bank-email ingestion from the initial SB-P-1.16 delivery scope.

The requirement remains recognized and traceable for future planning.

It must not be marked implemented, satisfied, rejected, removed or assigned to another mission solely through this decision.

Future implementation requires separate scope allocation, architecture, privacy/security evaluation and authorization.

### 4. Contract 15 §1 and Source 11

Contract 15 §1 describes the historical Bank Email Sync direction as one possible secure evidence-ingestion path.

Source 11 separately recognizes Bank Email Sync as a Smart Business Ledger capability.

I approve retaining these references as Product Truth while explicitly recording that standalone Bank Email Sync is not part of the selected initial SB-P-1.16 payment-evidence delivery.

This decision does not remove Bank Email Sync from the approved product direction.

No source contract or Source 11 passage may be silently deleted, rewritten or interpreted as proof that Bank Email Sync has been implemented.

Any necessary documentary annotation or source amendment must follow the applicable governance and canonical publication process.

### 5. FCTM and requirement classification

The canonical FCTM must ultimately reflect this Founder-authorized T7 disposition accurately, using the classification and exception mechanisms permitted by Source 18 and the approved FCTM framework.

The affected requirements include:

- `15-§5-1`: gateway API/webhook remains in scope; generic direct-bank API branch explicitly deferred.
- `15-§5-2`: standalone authenticated bank-email ingestion explicitly deferred.
- `15-§1-2`: historical Bank Email Sync direction preserved, with the bounded deferral recorded.
- Related Source 11 Bank Email Sync capability references: retained, not marked implemented or removed.

No affected requirement may be marked complete merely because gateway evidence has been selected.

If the current FCTM schema cannot accurately express the mixed scope of `15-§5-1`, Mission Control must authorize an appropriate traceability treatment before changing the canonical matrix.

No FCTM schema modification is automatically approved by this decision.

Future mission allocation, implementation scheduling and provider selection remain separately governed.

### 6. Payment-verification completion gate

Contract 15 §28 remains fully binding for the selected gateway-first delivery.

Smart Business must still demonstrate authenticated evidence ingestion, deterministic and idempotent matching, ambiguity review, mismatches and unlinked evidence, correct financial linking, permissions, auditability, narrow failure containment and end-to-end runtime acceptance.

The deferral of bank-email and generic direct-bank ingestion does not relax those completion requirements.

It does not establish that any current provider, payment evidence, reconciliation system or runtime implementation has passed verification.

### 7. Merchant coverage and communication

Smart Business must disclose that its selected initial gateway evidence capability covers payments processed through the authorized connected gateway.

Payments made through ordinary bank transfers or direct UPI QR arrangements outside the connected gateway are not automatically verified by that gateway.

Merchant-uploaded receipts, screenshots or similar evidence may support review but must not independently establish provider-verified payment status.

No universal bank reconciliation, universal UPI verification, bank-account connectivity or bank-email coverage may be advertised or implied.

### 8. Financial-integrity safeguards

All previously approved requirements concerning original Ledger identity, no duplicate sale or repayment entries, exact financial attribution, verified part-payments, mismatches, reversals, disputes, chargebacks, human review, permission scopes and audit history remain in force.

A gateway provider's authenticated payment status must remain distinguishable from its correct matching to an existing business transaction.

No AI-generated suggestion or unauthenticated evidence may independently settle an ambiguous financial match or create authoritative financial certainty.

The applicable Q2 and Q5 Founder-approved safeguards remain fully binding.

### 9. Dependencies and non-effects

This decision does not:

- Cancel or silently defer other approved BUILD NOW requirements.
- Change the seven Contract 14 `DNTF` delivery-dependent obligations.
- Resolve the SB-P-1.15 R15-11 permission-grant dependency.
- Authorize Account Aggregator access or another unvalidated provider route.
- Decide U-08 legal retention, personal-data deletion, backups, restoration or legal holds.
- Select or activate a bank, gateway, messaging provider or external integration.
- Establish a future mission assignment or deadline for deferred capabilities.
- Authorize implementation, production access or rollout.

All other Source 18 dependencies and governance gates remain applicable.

### 10. Canonical recording and publication

This decision becomes canonically effective only after inclusion in the appropriate Founder Product Decision Record, Founder-controlled human merge into protected `main`, and independent Mission Control post-merge verification.

The Definition Actor must preserve the exact approved wording and the relevant source and FCTM evidence.

Mission Control must separately review and authorize any FCTM or source-contract updates needed to implement this documentary disposition.

This decision does not itself authorize a repository commit, push, PR, merge, Stage 4 Blueprint lock or technical implementation.

**Implementation Authorization: WITHHELD — IMPLEMENTATION NOT AUTHORIZED.**
```

**Traceability.** `15-§5-1` (mixed: gateway branch in scope; generic direct-bank branch deferred); `15-§5-2` (deferred); `15-§1-2` (preserved, deferral recorded); Source 11 "Bank email sync" (Smart Business Ledger list) and "Feature: Bank Email Sync" (retained); `15-§28-1` (fully binding); `15-§5-5` (merchant-upload fallback); `16:FPDR-6`; `16:FPDR-3` (Q2) and `16:FPDR-7` (Q5) safeguards; the seven `DNTF` rows; SB-P-1.15 R15-11; U-08; `DPAY`. **The canonical FCTM rows `15-§5-1`, `15-§5-2` and `15-§1-2` are not changed by this draft.** Their eventual treatment, including any traceability mechanism for the mixed row `15-§5-1`, needs a separate Mission Control authorization (MC-146 §5).

## 3. Effect boundary

- **Not canonical:** this record has no effect until human merge to protected `main` and Mission Control post-merge verification.
- **No Product Truth or contract change:** no source contract, Source 11, Build Plan or GPCV text is changed. Apart from the explicit, bounded Founder-authorized T7 deferral in `16:FPDR-9` (generic direct-bank API and standalone authenticated bank-email ingestion, from the initial channel set only), no BUILD NOW requirement is deferred, reassigned, removed or completed by this record.
- **FCTM unchanged:** U-01 stays `ESCALATED` on `BP-§10.3-S2` with all 19 `ESC-U01` flags until canonical publication and a separate Mission Control disposition.
- **No activation or grant:** no gateway, bank, messaging provider, credential or Manager capability is selected, activated or granted.
- **U-08 open:** retention, deletion and backup remain undecided under MC-112.
- **FCTM rows for F-1 unchanged:** `15-§5-1`, `15-§5-2` and `15-§1-2` keep their canonical classification until Mission Control authorizes their treatment, including a traceability mechanism for the mixed row `15-§5-1` (MC-146 §5).
- **Governance findings:** F-1 disposed of by `16:FPDR-9`; F-2 disposed of by Mission Control (MC-145), with `3-§15-7` keeping its later-mission assignment. Remaining open items are in the companion report Section 9.

**Stage 4: NOT AUTHORIZED. Implementation Authorization: WITHHELD — IMPLEMENTATION NOT AUTHORIZED.**
