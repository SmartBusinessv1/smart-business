# SB-P-1.15 — S7-PAR Checkpoint 3: Independent Delegated Automation Review

**Status:** INDEPENDENT DOCUMENTARY §8.2 ANNEX ONLY; S7-PAR OVERALL IN PROGRESS — NOT FOR MERGE.  
**Reviewer:** Continuous Independent Engineering Review GPT-6 / OpenAI conversation.  
**Authority:** Canonical MC-41; MC-39; Source 18 Stage 7; MC-16/36/37/38/40.  
**Protected main baseline:** `8295c830b6e21bd126d0d451abeb9d05025d470e`.  
**Challenged Engineering Review:** PR #870, OPEN/DRAFT at `6e21b3de414cf33c25b848a7a93fcfc51c1d6e13`.  
**Existing review DRAFT PR:** #898, existing branch `mission/SB-P-1.15-s7-par-independent-review`, previous head `44c495ea10ed9000f7627951b66a2d69d0035524`.  
**Coverage:** 40 uniquely mapped canonical §8.2 `IN SCOPE` IDs; no other annex/master modification or Stage 7 acceptance.

## 1. Reviewer provenance and documentary evidence

This is the same continuing GPT-6/OpenAI Independent Engineering Review conversation that produced the candidate assessment, planning, 07c Scheduler and 07d Notification annexes. It did not author/materially contribute to SB-P-1.15 Stages 2–7, FCTM, Blueprint or PR #870; it did not act as S7-SP-1–6, including the distinct GPT-6/OpenAI S7-SP-6 room. Shared OpenAI/source assumptions remain correlated; conversation-level identity is not cryptographic/provider-side proof. If contrary overlap is proven, eligibility ceases.

**Evidence classes:** PT = canonical Product Truth/Founder decisions; DD = challenged §8.2/§19/§20.6 draft; SR = six canonical specialist documentary findings; EIS = locked upstream specifications (not applied code); RC = specifically inspected repository sources. The 40 determinations below rest on PT/DD and adversarial SR reconciliation. **No production permission/RLS, financial command, scheduler, provider, migration, AI tool or fault-injection test has been executed.** All live assurance is **UNVERIFIED — ACCESS REQUIRED**. Each negative test is **PROPOSED — NOT EXECUTED**.

## 2. Immutable evidence ledger

| Evidence / source | SHA / immutable identity |
| --- | --- |
| MC-41 `communication/missions/SB-P-1.15/mission-control/42-stage7-par-checkpoint2-notification-disposition.md` | `cc14a88dfd4dcdfac0a5edf9ade3e7f8863fa7e8` |
| Source 18 `merge/active/18_SB-P_Mission_Lifecycle_and_Delivery_Framework.md` | `0945bda60a93c99909c3b7a247d5427ebe256011` |
| FCTM `communication/missions/SB-P-1.15/claude-code/03-stage2-populated-fctm.md` | `65eeaf8d31b81595b971c22895615a096555f84f` |
| PR #870 Blueprint (design §8.2, row map §19, engineering §20.6) | `da1628804379cc58764a9adaa2819ce19884ab7a` |
| PR #870 Stage 7 Engineering Review | `5d3a23696b8a9c13e7a9d05e654463f56e204721` |
| Contract 11 Reminder and Delegated Automation (§§10–12, 16) | `e802745a93c3bacaebba5099aacfadbe52212bc8` |
| Contract 3 Ledger and Business Memory (§13) | `d8c26c073b669b561def887e36d16b19ff759205` |
| Contract 24 AI Orchestration (§18) | `0c1dcbb21a3d90e5ba2710200578ca4eb8f7b109` |
| Contract 21 Permission and Identity (§12) | `f4a05d5c3aa76f70f0bdea0a83acdb7d7e61b36d` |
| Contract 2 Ask CFO (read-only) | `53635557fb2907e0e9011613511c9f34b8548edf` |
| Founder-approved Build Plan (§6.2, §10.4) | `9dfdd924b81e0eefe8f3b25a0ec2f2b78621cb2a` |
| FPDR-01 / FPDR-02 / FPDR-03 | `0e0928fec1215ff91fa82386663d6a8f17f43bd2` / `373a31dfff67b11c9d342abe21554b777ccb89b8` / `2382846bc802df25f3e581d58648b6492f3316eb` |
| Stage 6 Builder Review | `ac92759f9d02b1344c25840b2e8b26b9f121a50b` |
| S7-SP-1 Security / S7-SP-2 Scheduler / S7-SP-3 Finance | `43b3b7a7a49b6acd3b8aaf3e75b2e0e081bcd6c2` / `bd5041b6296e2e9723bd6424f8cd4f4892728580` / `34148818d6b8293b59a830f43c392aecbc6f0451` |
| S7-SP-4 AI / S7-SP-5 Migration / S7-SP-6 Notifications | `e0c512c3a4292742ca4694b719cd69db3315a6bf` / `6561110273b07644181a67a4b8d0085cad1f0883` / `d1096aae3f0d92111e78005d12714565ed58d257` |
| Locked SB-P-1.12/1.13/1.14 EIS — DOCUMENTARY ONLY | `c444f7509477d0e8b997af538440d93bf2ca4d72` / `9a1e723d4874011b6870a680f2a2080154537c30` / `899a0fe1f98c62bbdfa621c97cdc5e8ee3ce65d3` |
| Previously published 07c / 07d annex blobs | `2f5eaa28abda1ad9c24be492001e8efe878996dc` / `8eb1f5a6f9f14208cc0825959208cae85334708c` |

## 3. Independent assessment method

**CORRECTION REQUIRED** means §8.2's current documentary engineering design lacks a material control needed to demonstrate the source-owned obligation. **DIRECTION ACCEPTED / EVIDENCE HOLD** accepts architectural direction only; actual capability/permission implementation remains unproven. Independent severity is tied to the stated failure consequence, not the original report's all-High keyword classification. An original dependency-BLOCKED designation stays in the draft and does **not** become Source 18 T8 impossibility. The original `IN SCOPE` disposition and mission ownership are never modified.

## 4. All 40 independently assessed canonical §8.2 requirements

### 11-§10-1 — Offer a bounded reminder continuation

- **Exact FCTM row:** `11-§10-1`; source `C11@e802745a`; pointer `§10 p1: A reminder may offer a bounded action such as`; kind `OBL`; commitment `BUILD NOW`; commercial `CORE-FDN`; owner `SB-P-1.15`; original disposition **`IN SCOPE`**; canonical dependencies `D12; D13; DTX`; Founder marker `—`.
- **Independently interpreted Product Truth and affected actor:** A due reminder may offer a relevant, bounded next action to an eligible merchant, but a displayed action suggestion is not itself authorization to act.
- **Blueprint map / original §20.6 Engineering Review:** §8.2 and §19 (`§8.2, §12`); original **`BLOCKED` / H**, holds **`H-D12`, `H-D13`, `H-DTX`, `H-SEC`, `H-BIRTH`, `H-PRIV`, `H-FIN`**, original specialist tags `SP-1, SP-3, SP-5`. Draft rationale: Feasible within delegated automation: 'A reminder may offer a bounded action such as'. Blocked until SB-P-1.12 kernel, SB-P-1.13 kernel, the governed write path exist. Risk: any write waits for the single governed transactions-family command; no second write path.
- **Independent feasibility/classification:** **DIRECTION ACCEPTED / EVIDENCE HOLD**. The draft §8.2 identifies the right continuation seam but does not contractually separate offer/preview from authorized domain execution. This row concerns presenting an option, not guaranteeing a payment or supplier workflow.
- **Consequence-based independent severity:** **MEDIUM**. A misleading one-click affordance could imply a supplier has been paid before any command executed.
- **Evidence quality and limits:** PT + DD + independently challenged SR; no executed authority, tenant, provider, domain-command, security/migration or runtime evidence. **UNVERIFIED — ACCESS REQUIRED**; EIS/specification or documented specialist acceptance does not mean applied production safety.
- **Required engineering correction / accepted direction / retained hold:** Accept optional typed action affordances only with business/target identity and explicit 'not yet executed' state. Actual effects pass through the permission, confirmation or valid standing-rule path.
- **Requirement-specific falsifiable negative test / acceptance evidence (PROPOSED — NOT EXECUTED):** Present a payable supplier reminder as Staff and as Owner; Staff lacking that capability sees no protected action or owner financial facts, Owner sees preview; dismissing it generates zero domain writes.
- **Specialist finding relevance:** SEC15-S7-03; FIN15-S7-01; SP2-04. Applicable as independent cross-domain challenge, not automatically adopted implementation proof.
- **Source 18 T1–T8 / Founder screening:** No new T1–T8; original D12/D13/DTX and native-UX proof held.

### 11-§10-2 — Paid and Log Expense

- **Exact FCTM row:** `11-§10-2`; source `C11@e802745a`; pointer `§10 b1: Paid & Log Expense`; kind `SCN`; commitment `BUILD NOW`; commercial `CORE-FDN`; owner `SB-P-1.15`; original disposition **`IN SCOPE`**; canonical dependencies `D12; D13; DTX`; Founder marker `—`.
- **Independently interpreted Product Truth and affected actor:** An authorized merchant may continue a bill/payment reminder to the 'Paid & Log Expense' scenario only after confirming the exact bill, amount, transaction state and current permission.
- **Blueprint map / original §20.6 Engineering Review:** §8.2 and §19 (`§8.2, §15, §12`); original **`BLOCKED` / H**, holds **`H-D12`, `H-D13`, `H-DTX`, `H-SEC`, `H-BIRTH`, `H-PRIV`, `H-FIN`**, original specialist tags `SP-1, SP-3, SP-5`. Draft rationale: Acceptance item 'Paid & Log Expense': needs a runnable negative-path permission test in a named test environment. Blocked until SB-P-1.12 kernel, SB-P-1.13 kernel, the governed write path exist. Risk: any write waits for the single governed transactions-family command; no second write path.
- **Independent feasibility/classification:** **CORRECTION REQUIRED**. §8.2 invokes the governed domain service but leaves the consequence of 'Paid' ambiguous: a reminder click cannot assert external payment or create an expense without reliable reviewed source/effect identity.
- **Consequence-based independent severity:** **HIGH**. An accidental double-expense or false paid label would corrupt Ledger and cash awareness.
- **Evidence quality and limits:** PT + DD + independently challenged SR; no executed authority, tenant, provider, domain-command, security/migration or runtime evidence. **UNVERIFIED — ACCESS REQUIRED**; EIS/specification or documented specialist acceptance does not mean applied production safety.
- **Required engineering correction / accepted direction / retained hold:** Require a typed expense command with confirmed source bill and payment evidence/status, actor binding and stable idempotency; deny if already paid, changed or unverified. DTX/PQ-2 remains sole financial writer.
- **Requirement-specific falsifiable negative test / acceptance evidence (PROPOSED — NOT EXECUTED):** Create an unpaid ₹800 supplier reminder, then change bill to ₹950 or mark paid before confirmation; original continuation must deny/re-preview and never post ₹800 or a duplicate expense. Audit the authorized path only.
- **Specialist finding relevance:** FIN15-S7-01/02/04; SEC15-S7-02/03; SP2-03. Applicable as independent cross-domain challenge, not automatically adopted implementation proof.
- **Source 18 T1–T8 / Founder screening:** No T8; DTX/D12/D13 hold, not a new payment product.

### 11-§10-3 — Customer payment received with credit maturity boundary

- **Exact FCTM row:** `11-§10-3`; source `C11@e802745a`; pointer `§10 b2: Mark customer payment received`; kind `SCN`; commitment `BUILD NOW`; commercial `CORE-FDN`; owner `SB-P-1.15`; original disposition **`IN SCOPE`**; canonical dependencies `D12; D13; DTX; D16`; Founder marker `—`.
- **Independently interpreted Product Truth and affected actor:** 'Mark customer payment received' is a controlled repayment/credit continuation, not proof that the customer has paid merely because a reminder matured.
- **Blueprint map / original §20.6 Engineering Review:** §8.2 and §19 (`§8.2, §15, §12`); original **`BLOCKED` / H**, holds **`H-D12`, `H-D13`, `H-DTX`, `H-LATER`, `H-SEC`, `H-BIRTH`, `H-PRIV`, `H-FIN`**, original specialist tags `SP-1, SP-3, SP-5`. Draft rationale: Acceptance item 'Mark customer payment received': needs a runnable negative-path permission test in a named test environment. Blocked until SB-P-1.12 kernel, SB-P-1.13 kernel, the governed write path exist. Risk: any write waits for the single governed transactions-family command; no second write path.
- **Independent feasibility/classification:** **CORRECTION REQUIRED**. The approved four-state Ledger permits governed repayment facts, but SB-P-1.16 owns authoritative per-customer owed balance. The draft does not pin the payment evidence, counterparty target and maturity limitation.
- **Consequence-based independent severity:** **HIGH**. A fabricated settlement could falsely reduce receivables or suggest an unreconciled balance is paid.
- **Evidence quality and limits:** PT + DD + independently challenged SR; no executed authority, tenant, provider, domain-command, security/migration or runtime evidence. **UNVERIFIED — ACCESS REQUIRED**; EIS/specification or documented specialist acceptance does not mean applied production safety.
- **Required engineering correction / accepted direction / retained hold:** Require authorized repayment transaction through DTX with exact source, value and evidence/confirmation, explicit uncertainty for customer balance, and no direct 'settled' customer ledger patch. Keep D16 hold where exact reconciliation is required.
- **Requirement-specific falsifiable negative test / acceptance evidence (PROPOSED — NOT EXECUTED):** Attempt reminder-based payment receipt without evidence, with an ambiguous customer and with a stale credit entry; deny false settlement and repeated command. A valid confirmed repayment records only its supported fact.
- **Specialist finding relevance:** FIN15-S7-01/02/05; MIG15-S7-05; SEC15-S7-03. Applicable as independent cross-domain challenge, not automatically adopted implementation proof.
- **Source 18 T1–T8 / Founder screening:** No T7 shift to SB-P-1.16; D16/DTX retained.

### 11-§10-4 — Approve reorder only through owning domain

- **Exact FCTM row:** `11-§10-4`; source `C11@e802745a`; pointer `§10 b3: Approve reorder`; kind `SCN`; commitment `BUILD NOW`; commercial `CORE-FDN`; owner `SB-P-1.15`; original disposition **`IN SCOPE`**; canonical dependencies `D12; D13; D17`; Founder marker `—`.
- **Independently interpreted Product Truth and affected actor:** A low-stock reminder can lead to an Owner-reviewed reorder, or an exactly scoped Owner standing delegation; the reorder work itself belongs to its approved inventory/supplier domain.
- **Blueprint map / original §20.6 Engineering Review:** §8.2 and §19 (`§8.2, §15, §12`); original **`BLOCKED` / H**, holds **`H-D12`, `H-D13`, `H-LATER`, `H-SEC`, `H-BIRTH`, `H-PRIV`**, original specialist tags `SP-1, SP-5`. Draft rationale: Acceptance item 'Approve reorder': needs a runnable negative-path permission test in a named test environment. Blocked until SB-P-1.12 kernel, SB-P-1.13 kernel exist. Risk: execution must use a current-authority principal, never plain service role.
- **Independent feasibility/classification:** **CORRECTION REQUIRED**. The draft lists a scenario but cannot yet prove that supplier, product, units, price and current stock are bound to a versioned review. Later D17 maturity cannot be silently pulled into this mission.
- **Consequence-based independent severity:** **HIGH**. Wrong-item or wrong-quantity automated orders can cause real merchant loss and unauthorized supplier commitments.
- **Evidence quality and limits:** PT + DD + independently challenged SR; no executed authority, tenant, provider, domain-command, security/migration or runtime evidence. **UNVERIFIED — ACCESS REQUIRED**; EIS/specification or documented specialist acceptance does not mean applied production safety.
- **Required engineering correction / accepted direction / retained hold:** Keep suggestion separate from fulfillment: authorize exact item/quantity/supplier and current target, dispatch to the owning domain only when available; no generalized purchase bot or new channel consent.
- **Requirement-specific falsifiable negative test / acceptance evidence (PROPOSED — NOT EXECUTED):** Change product-price identity, supplier and stock level after Owner views reorder preview, then press old approval: deny and re-review; Staff without delegate capability cannot approve, D17 absence cannot be passed as completed.
- **Specialist finding relevance:** SP2-04; SEC15-S7-02/03; FIN15-S7-03; NTF15-05. Applicable as independent cross-domain challenge, not automatically adopted implementation proof.
- **Source 18 T1–T8 / Founder screening:** D17 later-mission hold, not new T7 scope.

### 11-§10-5 — Open renewal document without accidental mutation

- **Exact FCTM row:** `11-§10-5`; source `C11@e802745a`; pointer `§10 b4: Open renewal document`; kind `SCN`; commitment `BUILD NOW`; commercial `CORE-FDN`; owner `SB-P-1.15`; original disposition **`IN SCOPE`**; canonical dependencies `D12; D13; D14; D18`; Founder marker `—`.
- **Independently interpreted Product Truth and affected actor:** A permitted renewal reminder can open the linked renewal document for an authorized business user; opening is a read/navigation operation, not approving or submitting a renewal.
- **Blueprint map / original §20.6 Engineering Review:** §8.2 and §19 (`§8.2, §15, §12`); original **`BLOCKED` / H**, holds **`H-D12`, `H-D13`, `H-D14`, `H-LATER`, `H-SEC`, `H-BIRTH`, `H-PRIV`**, original specialist tags `SP-1, SP-5`. Draft rationale: Acceptance item 'Open renewal document': needs a runnable negative-path permission test in a named test environment. Blocked until SB-P-1.12 kernel, SB-P-1.13 kernel, SB-P-1.14 Business Memory exist. Risk: execution must use a current-authority principal, never plain service role.
- **Independent feasibility/classification:** **DIRECTION ACCEPTED / EVIDENCE HOLD**. Routing a secure document deep link through the owning document service is feasible, but the draft does not specify object-level access checks, current membership or behavior when a document is missing or archived.
- **Consequence-based independent severity:** **MEDIUM**. An expired link could expose compliance or identity documents to a former employee.
- **Evidence quality and limits:** PT + DD + independently challenged SR; no executed authority, tenant, provider, domain-command, security/migration or runtime evidence. **UNVERIFIED — ACCESS REQUIRED**; EIS/specification or documented specialist acceptance does not mean applied production safety.
- **Required engineering correction / accepted direction / retained hold:** Accept an opaque stable document reference resolved through D14 document permissions on each access; preserve native history and return a calm unavailable state without leaking filename if access is lost.
- **Requirement-specific falsifiable negative test / acceptance evidence (PROPOSED — NOT EXECUTED):** Open renewal reminder as authorized Owner; revoke role and retry a cached deep link and foreign-business document ID. Both restricted paths deny without downloading bytes or modifying record.
- **Specialist finding relevance:** SEC15-S7-03/05; SP2-07; MIG15-S7-05. Applicable as independent cross-domain challenge, not automatically adopted implementation proof.
- **Source 18 T1–T8 / Founder screening:** D14/D18 ownership and access evidence held; no T8.

### 11-§10-6 — Exact actionable target resolution

- **Exact FCTM row:** `11-§10-6`; source `C11@e802745a`; pointer `§10 n1: identify the exact target/action`; kind `OBL`; commitment `BUILD NOW`; commercial `CORE-FDN`; owner `SB-P-1.15`; original disposition **`IN SCOPE`**; canonical dependencies `D12; D13; DTX`; Founder marker `—`.
- **Independently interpreted Product Truth and affected actor:** Before any continuation the system must know the exact business object, actor-requested action and target; ambiguous person/item/amount requires clarification instead of guessing.
- **Blueprint map / original §20.6 Engineering Review:** §8.2 and §19 (`§8.2, §12`); original **`BLOCKED` / H**, holds **`H-D12`, `H-D13`, `H-DTX`, `H-SEC`, `H-BIRTH`, `H-PRIV`, `H-FIN`**, original specialist tags `SP-1, SP-3, SP-5`. Draft rationale: Feasible within delegated automation: 'identify the exact target/action'. Blocked until SB-P-1.12 kernel, SB-P-1.13 kernel, the governed write path exist. Risk: any write waits for the single governed transactions-family command; no second write path.
- **Independent feasibility/classification:** **CORRECTION REQUIRED**. §8.2 mentions exact targets yet omits trusted target provenance and handling for duplicate supplier names or record substitution from AI/voice interpretation.
- **Consequence-based independent severity:** **HIGH**. A wrong target can charge the wrong customer or act on another merchant's record.
- **Evidence quality and limits:** PT + DD + independently challenged SR; no executed authority, tenant, provider, domain-command, security/migration or runtime evidence. **UNVERIFIED — ACCESS REQUIRED**; EIS/specification or documented specialist acceptance does not mean applied production safety.
- **Required engineering correction / accepted direction / retained hold:** Bind typed object ID, business, action and version to an explicit preview token. Deny ambiguous or foreign object candidates; the model may propose but not choose an unconfirmed consequential target.
- **Requirement-specific falsifiable negative test / acceptance evidence (PROPOSED — NOT EXECUTED):** Create two 'Shameer' accounts and a voice instruction 'mark this paid'; without an unambiguous confirmed record ID, assert zero commands and ask a targeted clarification. Forged foreign ID denies.
- **Specialist finding relevance:** AI15-S7-02/05; SEC15-S7-03; FIN15-S7-01. Applicable as independent cross-domain challenge, not automatically adopted implementation proof.
- **Source 18 T1–T8 / Founder screening:** D13/D12/DTX hold; no T3/T7.

### 11-§10-7 — Current domain state must be validated

- **Exact FCTM row:** `11-§10-7`; source `C11@e802745a`; pointer `§10 n2: verify current state`; kind `OBL`; commitment `BUILD NOW`; commercial `CORE-FDN`; owner `SB-P-1.15`; original disposition **`IN SCOPE`**; canonical dependencies `D12; D13; DTX`; Founder marker `—`.
- **Independently interpreted Product Truth and affected actor:** A reminder's target may change after it was created; the authoritative domain must verify its current amount, status, identity and completion before a continuation executes.
- **Blueprint map / original §20.6 Engineering Review:** §8.2 and §19 (`§8.2, §12`); original **`BLOCKED` / H**, holds **`H-D12`, `H-D13`, `H-DTX`, `H-SEC`, `H-BIRTH`, `H-PRIV`, `H-FIN`**, original specialist tags `SP-1, SP-3, SP-5`. Draft rationale: Feasible within delegated automation: 'verify current state'. Blocked until SB-P-1.12 kernel, SB-P-1.13 kernel, the governed write path exist. Risk: any write waits for the single governed transactions-family command; no second write path.
- **Independent feasibility/classification:** **CORRECTION REQUIRED**. The draft describes state verification but not a concurrency condition or response if a payment, reorder or document was already updated by another actor.
- **Consequence-based independent severity:** **HIGH**. Stale state permits duplicate expenses, obsolete reorders or approval of cancelled tasks.
- **Evidence quality and limits:** PT + DD + independently challenged SR; no executed authority, tenant, provider, domain-command, security/migration or runtime evidence. **UNVERIFIED — ACCESS REQUIRED**; EIS/specification or documented specialist acceptance does not mean applied production safety.
- **Required engineering correction / accepted direction / retained hold:** Require version/expected-state preconditions checked by the domain command atomically at commit; if changed, fail narrowly, preserve reminder history and present updated facts for a new decision.
- **Requirement-specific falsifiable negative test / acceptance evidence (PROPOSED — NOT EXECUTED):** Open an expense preview, then another authorized user posts it; a stale continuation must not post again and must show a distinct changed-state outcome.
- **Specialist finding relevance:** FIN15-S7-02/04; SP2-03; MIG15-S7-04. Applicable as independent cross-domain challenge, not automatically adopted implementation proof.
- **Source 18 T1–T8 / Founder screening:** No T8; DTX concurrency proof held.

### 11-§10-8 — Permission at the exact action boundary

- **Exact FCTM row:** `11-§10-8`; source `C11@e802745a`; pointer `§10 n3: verify actor permission`; kind `OBL`; commitment `BUILD NOW`; commercial `CORE-FDN`; owner `SB-P-1.15`; original disposition **`IN SCOPE`**; canonical dependencies `D12; D13; DTX`; Founder marker `—`.
- **Independently interpreted Product Truth and affected actor:** Only a currently authorized Owner or specifically permitted Manager/Employee may carry out the exact consequential continuation within its business and object scope.
- **Blueprint map / original §20.6 Engineering Review:** §8.2 and §19 (`§8.2, §12`); original **`BLOCKED` / H**, holds **`H-D12`, `H-D13`, `H-DTX`, `H-SEC`, `H-BIRTH`, `H-PRIV`, `H-FIN`**, original specialist tags `SP-1, SP-3, SP-5`. Draft rationale: Feasible within delegated automation: 'verify actor permission'. Blocked until SB-P-1.12 kernel, SB-P-1.13 kernel, the governed write path exist. Risk: any write waits for the single governed transactions-family command; no second write path.
- **Independent feasibility/classification:** **CORRECTION REQUIRED**. The draft's 'verify actor permission' wording lacks explicit denial of Employee access to Owner financial intelligence and exact capability revalidation at the privileged command, where service-role can bypass naive UI checks.
- **Consequence-based independent severity:** **HIGH**. Employee transaction-entry permission could wrongly turn into profit reports, Ask CFO access or spending authority.
- **Evidence quality and limits:** PT + DD + independently challenged SR; no executed authority, tenant, provider, domain-command, security/migration or runtime evidence. **UNVERIFIED — ACCESS REQUIRED**; EIS/specification or documented specialist acceptance does not mean applied production safety.
- **Required engineering correction / accepted direction / retained hold:** Use capability-and-target-specific permissions from D12 at preview and protected execution; data-layer command checks current membership and delegation, never role-name inference. Deny financial intelligence even if limited transaction entry is allowed.
- **Requirement-specific falsifiable negative test / acceptance evidence (PROPOSED — NOT EXECUTED):** Grant an Employee expense-entry and own-attendance only; attempt Owner-profit fetch, Ask CFO invocation and reminder-based payment approval via UI, service and worker. Only explicitly allowed entry/self-view may succeed.
- **Specialist finding relevance:** SEC15-S7-02/03/04; FIN15-S7-07/08; SP2-04. Applicable as independent cross-domain challenge, not automatically adopted implementation proof.
- **Source 18 T1–T8 / Founder screening:** DC-06 granular delegation hold; no new permission invented.

### 11-§10-9 — Consequential confirmation or valid standing exception

- **Exact FCTM row:** `11-§10-9`; source `C11@e802745a`; pointer `§10 n4: show/confirm consequential facts unless a valid standing rule already authorizes the action`; kind `OBL`; commitment `BUILD NOW`; commercial `CORE-FDN`; owner `SB-P-1.15`; original disposition **`IN SCOPE`**; canonical dependencies `D12; D13; DTX`; Founder marker `—`.
- **Independently interpreted Product Truth and affected actor:** Consequential facts must be shown to and confirmed by the right actor unless a current, explicit, bounded Owner standing rule independently covers that exact execution.
- **Blueprint map / original §20.6 Engineering Review:** §8.2 and §19 (`§8.2, §12`); original **`BLOCKED` / H**, holds **`H-D12`, `H-D13`, `H-DTX`, `H-SEC`, `H-BIRTH`, `H-PRIV`, `H-FIN`**, original specialist tags `SP-1, SP-3, SP-5`. Draft rationale: Feasible within delegated automation: 'show/confirm consequential facts unless a valid standing rule already authorize…'. Blocked until SB-P-1.12 kernel, SB-P-1.13 kernel, the governed write path exist. Risk: any write waits for the single governed transactions-family command; no second write path.
- **Independent feasibility/classification:** **CORRECTION REQUIRED**. The draft does not bind confirmation to an immutable reviewed payload or prove that a queued standing rule is still enabled and within limits. A confirmation tick on a reminder is not proof of transaction consent.
- **Consequence-based independent severity:** **HIGH**. Wrong amount or changed target may execute without fresh human authorization.
- **Evidence quality and limits:** PT + DD + independently challenged SR; no executed authority, tenant, provider, domain-command, security/migration or runtime evidence. **UNVERIFIED — ACCESS REQUIRED**; EIS/specification or documented specialist acceptance does not mean applied production safety.
- **Required engineering correction / accepted direction / retained hold:** Use action payload hash, business/target/version, principal, expiry and single-use confirmation; permit the no-dialog standing path only after real-time exact rule capability and limit checks.
- **Requirement-specific falsifiable negative test / acceptance evidence (PROPOSED — NOT EXECUTED):** Confirm ₹500 reimbursement, then mutate to ₹5,000 or revoke rule prior to commit: no action executes under stale consent; a valid in-scope stored rule is checked independently.
- **Specialist finding relevance:** SP2-04; FIN15-S7-03; SEC15-S7-02; MIG15-S7-04. Applicable as independent cross-domain challenge, not automatically adopted implementation proof.
- **Source 18 T1–T8 / Founder screening:** No T8; valid standing-rule exception preserved without new scope.

### 11-§10-10 — Single authoritative domain service for effects

- **Exact FCTM row:** `11-§10-10`; source `C11@e802745a`; pointer `§10 n5: execute through the authoritative feature service`; kind `OBL`; commitment `BUILD NOW`; commercial `CORE-FDN`; owner `SB-P-1.15`; original disposition **`IN SCOPE`**; canonical dependencies `D12; D13; DTX`; Founder marker `—`.
- **Independently interpreted Product Truth and affected actor:** After confirmation/delegation, continuation must invoke the owning feature's deterministic service; financial Ledger writes must use the one governed DTX/PQ-2 command path.
- **Blueprint map / original §20.6 Engineering Review:** §8.2 and §19 (`§8.2, §12`); original **`BLOCKED` / H**, holds **`H-D12`, `H-D13`, `H-DTX`, `H-SEC`, `H-BIRTH`, `H-PRIV`, `H-FIN`**, original specialist tags `SP-1, SP-3, SP-5`. Draft rationale: Feasible within delegated automation: 'execute through the authoritative feature service'. Blocked until SB-P-1.12 kernel, SB-P-1.13 kernel, the governed write path exist. Risk: any write waits for the single governed transactions-family command; no second write path.
- **Independent feasibility/classification:** **CORRECTION REQUIRED**. The §8.2 design correctly rejects direct AI effects but has no enforceable interface denying side-door SQL, scheduler or notification mutation of transaction tables.
- **Consequence-based independent severity:** **HIGH**. A second write path can bypass audit, validation and idempotency, duplicating income or expenses.
- **Evidence quality and limits:** PT + DD + independently challenged SR; no executed authority, tenant, provider, domain-command, security/migration or runtime evidence. **UNVERIFIED — ACCESS REQUIRED**; EIS/specification or documented specialist acceptance does not mean applied production safety.
- **Required engineering correction / accepted direction / retained hold:** Publish a typed dispatch map by action family; provide no financial write credentials to reminder/AI worker and force DTX authorization/evidence checks in the command itself.
- **Requirement-specific falsifiable negative test / acceptance evidence (PROPOSED — NOT EXECUTED):** Attempt the same expense continuation through native button, AI tool and scheduled rule, plus direct worker SQL. Only the shared governed command may commit once; direct calls and revoked context deny.
- **Specialist finding relevance:** FIN15-S7-01/02/03; SEC15-S7-01/02; AI15-S7-04. Applicable as independent cross-domain challenge, not automatically adopted implementation proof.
- **Source 18 T1–T8 / Founder screening:** DTX/PQ-2 architecture hold; no T7 reassignment.

### 11-§10-11 — Linked reminder and domain audit continuity

- **Exact FCTM row:** `11-§10-11`; source `C11@e802745a`; pointer `§10 n6: preserve linked reminder/business audit history`; kind `OBL`; commitment `BUILD NOW`; commercial `CORE-FDN`; owner `SB-P-1.15`; original disposition **`IN SCOPE`**; canonical dependencies `D12; D13; DTX`; Founder marker `—`.
- **Independently interpreted Product Truth and affected actor:** The reminder occurrence, actor confirmation/delegation, domain command and result must remain linked for understandable merchant and investigation history even when transport fails.
- **Blueprint map / original §20.6 Engineering Review:** §8.2 and §19 (`§8.2, §12`); original **`BLOCKED` / H**, holds **`H-D12`, `H-D13`, `H-DTX`, `H-SEC`, `H-BIRTH`, `H-PRIV`, `H-FIN`**, original specialist tags `SP-1, SP-3, SP-5`. Draft rationale: Feasible within delegated automation: 'preserve linked reminder/business audit history'. Blocked until SB-P-1.12 kernel, SB-P-1.13 kernel, the governed write path exist. Risk: any write waits for the single governed transactions-family command; no second write path.
- **Independent feasibility/classification:** **CORRECTION REQUIRED**. Draft says preserve audit history without defining a cross-domain reference, attribution after identity lifecycle changes or atomicity across a failed notification attempt.
- **Consequence-based independent severity:** **MEDIUM**. Missing lineage can conceal who authorized a real expense and why a reminder claims completion.
- **Evidence quality and limits:** PT + DD + independently challenged SR; no executed authority, tenant, provider, domain-command, security/migration or runtime evidence. **UNVERIFIED — ACCESS REQUIRED**; EIS/specification or documented specialist acceptance does not mean applied production safety.
- **Required engineering correction / accepted direction / retained hold:** Record immutable reminder/occurrence and domain-effect identifiers, actor authority snapshot plus current decision reference, timestamps and outcome; never overwrite the original reminder when effect fails.
- **Requirement-specific falsifiable negative test / acceptance evidence (PROPOSED — NOT EXECUTED):** Induce domain-command success then notification failure and restore from backup; linked command/audit survives once and user sees honest effect versus delivery states, without invented identity retention duration.
- **Specialist finding relevance:** FIN15-S7-04; MIG15-S7-04/05/06; NTF15-01. Applicable as independent cross-domain challenge, not automatically adopted implementation proof.
- **Source 18 T1–T8 / Founder screening:** Audit/retention U-5 and DTX evidence held; no T8.

### 11-§11-1 — Deliberate Owner creation of a bounded standing rule

- **Exact FCTM row:** `11-§11-1`; source `C11@e802745a`; pointer `§11 p1: An Owner may deliberately create a bounded standing rule`; kind `OBL`; commitment `BUILD NOW`; commercial `CORE-FDN`; owner `SB-P-1.15`; original disposition **`IN SCOPE`**; canonical dependencies `D12; DSCH`; Founder marker `—`.
- **Independently interpreted Product Truth and affected actor:** Only an actually authorized Owner may deliberately create a standing delegation, with a comprehensible exact action/target/limit preview; it must not be silently inferred from a reminder or AI recommendation.
- **Blueprint map / original §20.6 Engineering Review:** §8.2 and §19 (`§8.2, §12`); original **`BLOCKED` / H**, holds **`H-D12`, `H-SCHED`, `H-SEC`, `H-BIRTH`, `H-PRIV`, `H-MIG`**, original specialist tags `SP-1, SP-2, SP-5`. Draft rationale: Feasible within delegated automation: 'An Owner may deliberately create a bounded standing rule'. Blocked until SB-P-1.12 kernel exists. Risk: execution must use a current-authority principal, never plain service role.
- **Independent feasibility/classification:** **CORRECTION REQUIRED**. §8.2 acknowledges Owner delegation but does not specify the creation-time consent/provenance record or revocation-safe boundary between drafting and activation.
- **Consequence-based independent severity:** **HIGH**. Accidental broad standing approval would permit repeated payments or supplier commitments without human review.
- **Evidence quality and limits:** PT + DD + independently challenged SR; no executed authority, tenant, provider, domain-command, security/migration or runtime evidence. **UNVERIFIED — ACCESS REQUIRED**; EIS/specification or documented specialist acceptance does not mean applied production safety.
- **Required engineering correction / accepted direction / retained hold:** Require explicit Owner confirmation of typed rule contents, current Owner identity, business/role verification, activation version and subsequent revoke control; never auto-create from AI text.
- **Requirement-specific falsifiable negative test / acceptance evidence (PROPOSED — NOT EXECUTED):** Present 'remind me tomorrow' as Manager and AI-generated 'always pay'; assert no standing rule exists. Confirm an exact Owner-created rule, then transfer ownership and verify subsequent runs deny.
- **Specialist finding relevance:** SP2-04; SEC15-S7-02/05; FIN15-S7-03. Applicable as independent cross-domain challenge, not automatically adopted implementation proof.
- **Source 18 T1–T8 / Founder screening:** No new generalized automation grant; D12/DSCH hold.

### 11-§11-2 — Mature standing-rule schema completeness

- **Exact FCTM row:** `11-§11-2`; source `C11@e802745a`; pointer `§11 p2: A mature standing rule should preserve`; kind `RULE`; commitment `BUILD NOW`; commercial `CORE-FDN`; owner `SB-P-1.15`; original disposition **`IN SCOPE`**; canonical dependencies `D12; DSCH`; Founder marker `—`.
- **Independently interpreted Product Truth and affected actor:** A standing rule's approved meaning comprises business, action, trigger, target, limits, destination, creator, effective time, state and auditable modification/execution/failure histories.
- **Blueprint map / original §20.6 Engineering Review:** §8.2 and §19 (`§8.2, §10.2, §12`); original **`BLOCKED` / H**, holds **`H-D12`, `H-SCHED`, `H-SEC`, `H-BIRTH`, `H-PRIV`, `H-MIG`**, original specialist tags `SP-1, SP-2, SP-5`. Draft rationale: Rule 'A mature standing rule should preserve': realized as a design constraint of delegated automation. Blocked until SB-P-1.12 kernel exists. Risk: execution must use a current-authority principal, never plain service role.
- **Independent feasibility/classification:** **CORRECTION REQUIRED**. An undifferentiated automation rule record cannot enforce all source-defined boundaries or explain historic effects; a schema containing a JSON prompt alone would omit typed verifiable dimensions.
- **Consequence-based independent severity:** **HIGH**. Undocumented mutable rules may silently broaden authority after a version change and defeat replay controls.
- **Evidence quality and limits:** PT + DD + independently challenged SR; no executed authority, tenant, provider, domain-command, security/migration or runtime evidence. **UNVERIFIED — ACCESS REQUIRED**; EIS/specification or documented specialist acceptance does not mean applied production safety.
- **Required engineering correction / accepted direction / retained hold:** Define typed, versioned rule and occurrence records for the twelve source fields; use restrictive constraints, append-only changes and linked execution/attempt evidence rather than overwriting rule history.
- **Requirement-specific falsifiable negative test / acceptance evidence (PROPOSED — NOT EXECUTED):** Try activating a rule without an exact target, enabled state, creator or limit when applicable; deny. Modify a valid rule and verify previous executions reference immutable old version.
- **Specialist finding relevance:** SP2-02/04; MIG15-S7-03/04/05; SEC15-S7-01. Applicable as independent cross-domain challenge, not automatically adopted implementation proof.
- **Source 18 T1–T8 / Founder screening:** Technical schema correction, not new product commitment or T8.

### 11-§11-3 — Stored business scope cannot float

- **Exact FCTM row:** `11-§11-3`; source `C11@e802745a`; pointer `§11 b1: business scope`; kind `OBL`; commitment `BUILD NOW`; commercial `CORE-FDN`; owner `SB-P-1.15`; original disposition **`IN SCOPE`**; canonical dependencies `D12; DSCH`; Founder marker `—`.
- **Independently interpreted Product Truth and affected actor:** Every standing delegation belongs to one explicit business; it cannot be reused across the Owner's other shops, inherited by another merchant or retargeted by a worker payload.
- **Blueprint map / original §20.6 Engineering Review:** §8.2 and §19 (`§8.2, §12`); original **`BLOCKED` / H**, holds **`H-D12`, `H-SCHED`, `H-SEC`, `H-BIRTH`, `H-PRIV`, `H-MIG`**, original specialist tags `SP-1, SP-2, SP-5`. Draft rationale: Feasible within delegated automation: 'business scope'. Blocked until SB-P-1.12 kernel exists. Risk: execution must use a current-authority principal, never plain service role.
- **Independent feasibility/classification:** **CORRECTION REQUIRED**. Generic business-scoped claims in §8.2 do not specify immutable business binding through scheduler claim, authorization and domain write.
- **Consequence-based independent severity:** **HIGH**. One shop's payroll or supplier automation could write or reveal another tenant's records.
- **Evidence quality and limits:** PT + DD + independently challenged SR; no executed authority, tenant, provider, domain-command, security/migration or runtime evidence. **UNVERIFIED — ACCESS REQUIRED**; EIS/specification or documented specialist acceptance does not mean applied production safety.
- **Required engineering correction / accepted direction / retained hold:** Persist trusted business ID from rule creation and use it through each effect; require domain command to check object.business_id matches the stored rule, not caller-supplied override.
- **Requirement-specific falsifiable negative test / acceptance evidence (PROPOSED — NOT EXECUTED):** Create two businesses under one Owner; inject Business B expense ID into A's rule execution. Deny at claim and command and leave both Ledgers unchanged; audit business isolation.
- **Specialist finding relevance:** SEC15-S7-03; SP2-07; FIN15-S7-07. Applicable as independent cross-domain challenge, not automatically adopted implementation proof.
- **Source 18 T1–T8 / Founder screening:** D12/tenant proof required; no T8.

### 11-§11-4 — Exact allowed action type

- **Exact FCTM row:** `11-§11-4`; source `C11@e802745a`; pointer `§11 b2: exact action type`; kind `OBL`; commitment `BUILD NOW`; commercial `CORE-FDN`; owner `SB-P-1.15`; original disposition **`IN SCOPE`**; canonical dependencies `D12; DSCH`; Founder marker `—`.
- **Independently interpreted Product Truth and affected actor:** A standing rule authorizes one specific recognized domain action type, not arbitrary tool execution or a whole class of financial transactions.
- **Blueprint map / original §20.6 Engineering Review:** §8.2 and §19 (`§8.2, §12`); original **`BLOCKED` / H**, holds **`H-D12`, `H-SCHED`, `H-SEC`, `H-BIRTH`, `H-PRIV`, `H-MIG`**, original specialist tags `SP-1, SP-2, SP-5`. Draft rationale: Feasible within delegated automation: 'exact action type'. Blocked until SB-P-1.12 kernel exists. Risk: execution must use a current-authority principal, never plain service role.
- **Independent feasibility/classification:** **CORRECTION REQUIRED**. The draft does not define an allowlisted action taxonomy and a way to reject prompt-provided functions or type changes after approval.
- **Consequence-based independent severity:** **HIGH**. A 'remind supplier' rule could be escalated into credit adjustment or transfer by a compromised worker.
- **Evidence quality and limits:** PT + DD + independently challenged SR; no executed authority, tenant, provider, domain-command, security/migration or runtime evidence. **UNVERIFIED — ACCESS REQUIRED**; EIS/specification or documented specialist acceptance does not mean applied production safety.
- **Required engineering correction / accepted direction / retained hold:** Use a versioned allowlist of scoped domain command types, explicit effect class and exact stored authorization; unrecognized type fails closed before any privileged call.
- **Requirement-specific falsifiable negative test / acceptance evidence (PROPOSED — NOT EXECUTED):** Create a rule for 'acknowledge renewal'; modify payload to 'post repayment' or 'delete invoice' while retaining its ID. Neither is permitted; no arbitrary tool argument may execute.
- **Specialist finding relevance:** SP2-04; FIN15-S7-01; AI15-S7-02; SEC15-S7-02. Applicable as independent cross-domain challenge, not automatically adopted implementation proof.
- **Source 18 T1–T8 / Founder screening:** No new job/action product scope; genuine addition screened T7.

### 11-§11-5 — Trigger condition with evidence and version

- **Exact FCTM row:** `11-§11-5`; source `C11@e802745a`; pointer `§11 b3: trigger conditions`; kind `OBL`; commitment `BUILD NOW`; commercial `CORE-FDN`; owner `SB-P-1.15`; original disposition **`IN SCOPE`**; canonical dependencies `D12; DSCH`; Founder marker `—`.
- **Independently interpreted Product Truth and affected actor:** A standing rule executes only when its stored, bounded trigger actually occurs for the authorized target and remains valid at execution.
- **Blueprint map / original §20.6 Engineering Review:** §8.2 and §19 (`§8.2, §12`); original **`BLOCKED` / H**, holds **`H-D12`, `H-SCHED`, `H-SEC`, `H-BIRTH`, `H-PRIV`, `H-MIG`**, original specialist tags `SP-1, SP-2, SP-5`. Draft rationale: Feasible within delegated automation: 'trigger conditions'. Blocked until SB-P-1.12 kernel exists. Risk: execution must use a current-authority principal, never plain service role.
- **Independent feasibility/classification:** **CORRECTION REQUIRED**. §8.2 does not define event-source authenticity, trigger version, time/condition truth or cancellation when a signal changes between detection and effect.
- **Consequence-based independent severity:** **HIGH**. A spoofed low-stock signal could place a wrong reorder or repeated payment automatically.
- **Evidence quality and limits:** PT + DD + independently challenged SR; no executed authority, tenant, provider, domain-command, security/migration or runtime evidence. **UNVERIFIED — ACCESS REQUIRED**; EIS/specification or documented specialist acceptance does not mean applied production safety.
- **Required engineering correction / accepted direction / retained hold:** Bind triggers to trusted business event IDs and current evaluated source facts; distinguish reminder due occurrence from an authorized command, require a fresh condition check and stable effect key.
- **Requirement-specific falsifiable negative test / acceptance evidence (PROPOSED — NOT EXECUTED):** Replay a low-stock event after inventory is replenished and inject a forged trigger. Neither may order anything; a valid in-scope new occurrence may proceed once under active Owner rule.
- **Specialist finding relevance:** SP2-02/04; MIG15-S7-04; FIN15-S7-03. Applicable as independent cross-domain challenge, not automatically adopted implementation proof.
- **Source 18 T1–T8 / Founder screening:** D17 dependency retained where stock maturity needed, no T8.

### 11-§11-6 — Exact object, person or item target

- **Exact FCTM row:** `11-§11-6`; source `C11@e802745a`; pointer `§11 b4: target/item/person`; kind `OBL`; commitment `BUILD NOW`; commercial `CORE-FDN`; owner `SB-P-1.15`; original disposition **`IN SCOPE`**; canonical dependencies `D12; DSCH`; Founder marker `—`.
- **Independently interpreted Product Truth and affected actor:** Delegation must identify the specific supplier, customer, invoice, product or other target approved by Owner, without widening to namesakes or unrelated objects.
- **Blueprint map / original §20.6 Engineering Review:** §8.2 and §19 (`§8.2, §12`); original **`BLOCKED` / H**, holds **`H-D12`, `H-SCHED`, `H-SEC`, `H-BIRTH`, `H-PRIV`, `H-MIG`**, original specialist tags `SP-1, SP-2, SP-5`. Draft rationale: Feasible within delegated automation: 'target/item/person'. Blocked until SB-P-1.12 kernel exists. Risk: execution must use a current-authority principal, never plain service role.
- **Independent feasibility/classification:** **CORRECTION REQUIRED**. An ambiguous free-text target or loosely bound supplier name is not stable authority; the draft lacks typed object-set restriction and foreign-object denial.
- **Consequence-based independent severity:** **HIGH**. Paying a wrong supplier or exposing another customer's debt can directly harm the merchant.
- **Evidence quality and limits:** PT + DD + independently challenged SR; no executed authority, tenant, provider, domain-command, security/migration or runtime evidence. **UNVERIFIED — ACCESS REQUIRED**; EIS/specification or documented specialist acceptance does not mean applied production safety.
- **Required engineering correction / accepted direction / retained hold:** Store exact business-bound target IDs/object-set, plus policy for changes/deletions; authorization must compare requested target to versioned approved set before commit.
- **Requirement-specific falsifiable negative test / acceptance evidence (PROPOSED — NOT EXECUTED):** Authorize supplier ID A, then substitute same-name supplier B or cross-tenant target and retry. Both deny without leaking the foreign object's details.
- **Specialist finding relevance:** SP2-04/07; SEC15-S7-03; FIN15-S7-03. Applicable as independent cross-domain challenge, not automatically adopted implementation proof.
- **Source 18 T1–T8 / Founder screening:** No T7; D12 domain ownership hold.

### 11-§11-7 — Enforced quantity, value and spending limits

- **Exact FCTM row:** `11-§11-7`; source `C11@e802745a`; pointer `§11 b5: quantity/value/limit where relevant`; kind `OBL`; commitment `BUILD NOW`; commercial `CORE-FDN`; owner `SB-P-1.15`; original disposition **`IN SCOPE`**; canonical dependencies `D12; DSCH`; Founder marker `—`.
- **Independently interpreted Product Truth and affected actor:** Where relevant, Owner may bound quantity, monetary value and permitted cumulative or per-occurrence action, and no automation may increase those limits itself.
- **Blueprint map / original §20.6 Engineering Review:** §8.2 and §19 (`§8.2, §12`); original **`BLOCKED` / H**, holds **`H-D12`, `H-SCHED`, `H-SEC`, `H-BIRTH`, `H-PRIV`, `H-MIG`**, original specialist tags `SP-1, SP-2, SP-5`. Draft rationale: Feasible within delegated automation: 'quantity/value/limit where relevant'. Blocked until SB-P-1.12 kernel exists. Risk: execution must use a current-authority principal, never plain service role.
- **Independent feasibility/classification:** **CORRECTION REQUIRED**. Draft stores generic 'limits' without specifying units, currency, reset periods, aggregation or concurrency-safe enforcement. A value checked only when a job is queued does not prevent combined overspend.
- **Consequence-based independent severity:** **HIGH**. Two concurrent delegated reorders/payments may exceed an Owner's explicit spending cap.
- **Evidence quality and limits:** PT + DD + independently challenged SR; no executed authority, tenant, provider, domain-command, security/migration or runtime evidence. **UNVERIFIED — ACCESS REQUIRED**; EIS/specification or documented specialist acceptance does not mean applied production safety.
- **Required engineering correction / accepted direction / retained hold:** Define typed limits with unit/currency, scope and version, per-execution and aggregate ceiling if specified; atomically reserve/check against current rule budget at the governed effect boundary.
- **Requirement-specific falsifiable negative test / acceptance evidence (PROPOSED — NOT EXECUTED):** Grant 1,000-unit capped rule; run two concurrent 700-unit actions and a currency mismatch. Only authorized operations within the stored exact limit commit; no split/retry evades cap.
- **Specialist finding relevance:** FIN15-S7-03; SP2-03/04; SEC15-S7-02. Applicable as independent cross-domain challenge, not automatically adopted implementation proof.
- **Source 18 T1–T8 / Founder screening:** Do not invent a default cap; approved Owner limit only, no T7.

### 11-§11-8 — Permitted destination and outbound channel

- **Exact FCTM row:** `11-§11-8`; source `C11@e802745a`; pointer `§11 b6: permitted channel/destination where relevant`; kind `OBL`; commitment `BUILD NOW`; commercial `CORE-FDN`; owner `SB-P-1.15`; original disposition **`IN SCOPE`**; canonical dependencies `D12; DSCH`; Founder marker `—`.
- **Independently interpreted Product Truth and affected actor:** A delegated standing rule may identify a permitted communication destination/channel only where such channel is independently available and approved; permission for an action is not delivery authorization.
- **Blueprint map / original §20.6 Engineering Review:** §8.2 and §19 (`§8.2, §12`); original **`BLOCKED` / H**, holds **`H-D12`, `H-SCHED`, `H-NTF`, `H-SEC`, `H-BIRTH`, `H-PRIV`, `H-MIG`**, original specialist tags `SP-1, SP-2, SP-5, SP-6`. Draft rationale: Feasible within delegated automation: 'permitted channel/destination where relevant'. Blocked until SB-P-1.12 kernel exists. Risk: execution must use a current-authority principal, never plain service role.
- **Independent feasibility/classification:** **DIRECTION ACCEPTED / EVIDENCE HOLD**. The draft carries a channel field but no future provider policy, and Owner consent to reorder does not authorize WhatsApp outreach before SB-P-1.20.
- **Consequence-based independent severity:** **MEDIUM**. An automatically sent supplier message can expose business information to a changed phone or unwanted endpoint.
- **Evidence quality and limits:** PT + DD + independently challenged SR; no executed authority, tenant, provider, domain-command, security/migration or runtime evidence. **UNVERIFIED — ACCESS REQUIRED**; EIS/specification or documented specialist acceptance does not mean applied production safety.
- **Required engineering correction / accepted direction / retained hold:** Accept optional typed destination binding in rule schema while native-only FDB-2 applies. Require current recipient/partner identity and separately approved adapter readiness before any outbound send.
- **Requirement-specific falsifiable negative test / acceptance evidence (PROPOSED — NOT EXECUTED):** Store a standing rule with WhatsApp destination while native-only; execute an otherwise valid native workflow. Assert zero WhatsApp/SMS/email calls and no false delivery claim.
- **Specialist finding relevance:** NTF15-03/05/07; SEC15-S7-05; SP2-04. Applicable as independent cross-domain challenge, not automatically adopted implementation proof.
- **Source 18 T1–T8 / Founder screening:** DNTF/SB-P-1.20 channel boundary, no new T7.

### 11-§11-9 — Creator and authority provenance

- **Exact FCTM row:** `11-§11-9`; source `C11@e802745a`; pointer `§11 b7: creator/authority provenance`; kind `OBL`; commitment `BUILD NOW`; commercial `CORE-FDN`; owner `SB-P-1.15`; original disposition **`IN SCOPE`**; canonical dependencies `D12; DSCH`; Founder marker `—`.
- **Independently interpreted Product Truth and affected actor:** Standing rule must preserve the actual approving Owner, business, authority at creation and immutable rule/version provenance; later execution must independently revalidate current authority.
- **Blueprint map / original §20.6 Engineering Review:** §8.2 and §19 (`§8.2, §12`); original **`BLOCKED` / H**, holds **`H-D12`, `H-SCHED`, `H-SEC`, `H-BIRTH`, `H-PRIV`, `H-MIG`**, original specialist tags `SP-1, SP-2, SP-5`. Draft rationale: Feasible within delegated automation: 'creator/authority provenance'. Blocked until SB-P-1.12 kernel exists. Risk: execution must use a current-authority principal, never plain service role.
- **Independent feasibility/classification:** **CORRECTION REQUIRED**. A worker's service-role credential or a user ID in untrusted payload is not provable Owner approval. Original design lacks impersonation-safe authorization binding and protected audit attribution.
- **Consequence-based independent severity:** **HIGH**. A forged grant can commit merchant transactions or persist after transfer of ownership.
- **Evidence quality and limits:** PT + DD + independently challenged SR; no executed authority, tenant, provider, domain-command, security/migration or runtime evidence. **UNVERIFIED — ACCESS REQUIRED**; EIS/specification or documented specialist acceptance does not mean applied production safety.
- **Required engineering correction / accepted direction / retained hold:** Create rule via authenticated Owner confirmation with trusted actor identity and recorded consent evidence; store grantor/rule version and validate issuer current standing at effect time, without treating old privilege as perpetual.
- **Requirement-specific falsifiable negative test / acceptance evidence (PROPOSED — NOT EXECUTED):** Forge creator_id in a job payload and simulate revoked Owner after a valid rule was saved. Both actions deny, audit origin and revocation accurately, never claim scheduler role equals Owner.
- **Specialist finding relevance:** SP2-04; SEC15-S7-02/05; FIN15-S7-03; MIG15-S7-05. Applicable as independent cross-domain challenge, not automatically adopted implementation proof.
- **Source 18 T1–T8 / Founder screening:** D12/effective authority hold, no T8.

### 11-§11-10 — Effective times and business timezone

- **Exact FCTM row:** `11-§11-10`; source `C11@e802745a`; pointer `§11 b8: effective date/time`; kind `OBL`; commitment `BUILD NOW`; commercial `CORE-FDN`; owner `SB-P-1.15`; original disposition **`IN SCOPE`**; canonical dependencies `D12; DSCH`; Founder marker `—`.
- **Independently interpreted Product Truth and affected actor:** Rule must record when delegation becomes effective and ceases to apply; time-dependent triggers must respect a known authoritative business timezone and not rewrite earlier occurrences after timezone changes.
- **Blueprint map / original §20.6 Engineering Review:** §8.2 and §19 (`§8.2, §12`); original **`BLOCKED` / H**, holds **`H-D12`, `H-SCHED`, `H-SEC`, `H-BIRTH`, `H-PRIV`, `H-TZ`, `H-MIG`**, original specialist tags `SP-1, SP-2, SP-5`. Draft rationale: Feasible within delegated automation: 'effective date/time'. Blocked until SB-P-1.12 kernel exists. Risk: execution must use a current-authority principal, never plain service role.
- **Independent feasibility/classification:** **CORRECTION REQUIRED**. §8.2 lacks a boundary for future effective instants, recurrence versioning and timezone-change history, and DC-03 for existing merchants is unresolved.
- **Consequence-based independent severity:** **HIGH**. Time ambiguity could fire a supplier payment before authorized date or duplicate it after timezone adjustment.
- **Evidence quality and limits:** PT + DD + independently challenged SR; no executed authority, tenant, provider, domain-command, security/migration or runtime evidence. **UNVERIFIED — ACCESS REQUIRED**; EIS/specification or documented specialist acceptance does not mean applied production safety.
- **Required engineering correction / accepted direction / retained hold:** Persist timezone provenance and effective interval/version per rule; materialize named business-local occurrences using a deterministic rule only with explicit valid business timezone. Never silently backfill existing merchants to Asia/Kolkata.
- **Requirement-specific falsifiable negative test / acceptance evidence (PROPOSED — NOT EXECUTED):** Set a rule starting Monday 09:00 local, move the business timezone and replay a DST-like repeated wall-clock slot; nothing fires before effective boundary or twice for same occurrence, no historic Ledger date changes.
- **Specialist finding relevance:** SP2-02/05/06; MIG15-S7-02/04; SEC15-S7-02. Applicable as independent cross-domain challenge, not automatically adopted implementation proof.
- **Source 18 T1–T8 / Founder screening:** DC-03 open, no T6 reopening and no invented default.

### 11-§11-11 — Enabled, paused and revoked execution state

- **Exact FCTM row:** `11-§11-11`; source `C11@e802745a`; pointer `§11 b9: enabled/paused/revoked state`; kind `OBL`; commitment `BUILD NOW`; commercial `CORE-FDN`; owner `SB-P-1.15`; original disposition **`IN SCOPE`**; canonical dependencies `D12; DSCH`; Founder marker `—`.
- **Independently interpreted Product Truth and affected actor:** An Owner's explicit pause/revoke must prevent all not-yet-committed delegated effects, including already queued tasks after a grant change or ownership transfer.
- **Blueprint map / original §20.6 Engineering Review:** §8.2 and §19 (`§8.2, §12`); original **`BLOCKED` / H**, holds **`H-D12`, `H-SCHED`, `H-SEC`, `H-BIRTH`, `H-PRIV`, `H-MIG`**, original specialist tags `SP-1, SP-2, SP-5`. Draft rationale: Feasible within delegated automation: 'enabled/paused/revoked state'. Blocked until SB-P-1.12 kernel exists. Risk: execution must use a current-authority principal, never plain service role.
- **Independent feasibility/classification:** **CORRECTION REQUIRED**. An enabled flag read at dequeue is insufficient when revocation occurs before downstream commit. A stale worker must not revive a rule after a reclaim.
- **Consequence-based independent severity:** **HIGH**. Revoked automatic payment or reorder can still execute and expose merchant funds.
- **Evidence quality and limits:** PT + DD + independently challenged SR; no executed authority, tenant, provider, domain-command, security/migration or runtime evidence. **UNVERIFIED — ACCESS REQUIRED**; EIS/specification or documented specialist acceptance does not mean applied production safety.
- **Required engineering correction / accepted direction / retained hold:** Use versioned terminal/paused status and transactional execution-time reauthorization plus lease fencing, with a command-level decision immediately before financial commitment.
- **Requirement-specific falsifiable negative test / acceptance evidence (PROPOSED — NOT EXECUTED):** Claim valid rule, pause during AI processing, revoke before commit and resume stale worker after lease expiry. No business effect or recipient message is created; history retains denial.
- **Specialist finding relevance:** SP2-02/04/07; SEC15-S7-02/05; FIN15-S7-03. Applicable as independent cross-domain challenge, not automatically adopted implementation proof.
- **Source 18 T1–T8 / Founder screening:** No T8; D12/DSCH/DXT holds.

### 11-§11-12 — Modification history protects scope

- **Exact FCTM row:** `11-§11-12`; source `C11@e802745a`; pointer `§11 b10: modification history`; kind `OBL`; commitment `BUILD NOW`; commercial `CORE-FDN`; owner `SB-P-1.15`; original disposition **`IN SCOPE`**; canonical dependencies `D12; DSCH`; Founder marker `—`.
- **Independently interpreted Product Truth and affected actor:** Owner-visible changes to trigger, target, limit, destination and state must be auditable without overwriting the authority under which historical executions occurred.
- **Blueprint map / original §20.6 Engineering Review:** §8.2 and §19 (`§8.2, §12`); original **`BLOCKED` / H**, holds **`H-D12`, `H-SCHED`, `H-SEC`, `H-BIRTH`, `H-PRIV`, `H-MIG`**, original specialist tags `SP-1, SP-2, SP-5`. Draft rationale: Feasible within delegated automation: 'modification history'. Blocked until SB-P-1.12 kernel exists. Risk: execution must use a current-authority principal, never plain service role.
- **Independent feasibility/classification:** **CORRECTION REQUIRED**. Draft requests modification history but does not define version pointers or protect against reinterpreting an old job with current broadened rule fields.
- **Consequence-based independent severity:** **MEDIUM**. A merchant may lose the record of who widened supplier/payment scope, undermining dispute resolution.
- **Evidence quality and limits:** PT + DD + independently challenged SR; no executed authority, tenant, provider, domain-command, security/migration or runtime evidence. **UNVERIFIED — ACCESS REQUIRED**; EIS/specification or documented specialist acceptance does not mean applied production safety.
- **Required engineering correction / accepted direction / retained hold:** Use append-only versioned rule-change entries with actor, time, old/new approved values and reason, preserve immutable prior-version links from executions and enforce current authority for edits.
- **Requirement-specific falsifiable negative test / acceptance evidence (PROPOSED — NOT EXECUTED):** Create rule v1 for supplier A, change v2 to B, then restore an old v1 job; old effects remain attributable to v1 and cannot execute B under v1 authority.
- **Specialist finding relevance:** MIG15-S7-04/05; SP2-04; SEC15-S7-02. Applicable as independent cross-domain challenge, not automatically adopted implementation proof.
- **Source 18 T1–T8 / Founder screening:** Privacy/audit U-5 retained; no new Product Truth obligation.

### 11-§11-13 — Trigger and execution history are distinct

- **Exact FCTM row:** `11-§11-13`; source `C11@e802745a`; pointer `§11 b11: trigger/execution history`; kind `OBL`; commitment `BUILD NOW`; commercial `CORE-FDN`; owner `SB-P-1.15`; original disposition **`IN SCOPE`**; canonical dependencies `D12; DSCH`; Founder marker `—`.
- **Independently interpreted Product Truth and affected actor:** Merchant/auditor must be able to distinguish observed trigger, queued occurrence, execution attempt and authoritative domain result for each standing rule without implying a queued job succeeded.
- **Blueprint map / original §20.6 Engineering Review:** §8.2 and §19 (`§8.2, §12`); original **`BLOCKED` / H**, holds **`H-D12`, `H-SCHED`, `H-SEC`, `H-BIRTH`, `H-PRIV`, `H-MIG`**, original specialist tags `SP-1, SP-2, SP-5`. Draft rationale: Feasible within delegated automation: 'trigger/execution history'. Blocked until SB-P-1.12 kernel exists. Risk: execution must use a current-authority principal, never plain service role.
- **Independent feasibility/classification:** **CORRECTION REQUIRED**. Draft lists 'trigger/execution history' but fails to separate event identity, attempt and business effect; a failed notification does not undo a committed domain action.
- **Consequence-based independent severity:** **MEDIUM**. Absent lineage, an Owner cannot tell why a reorder occurred or if a payment actually posted.
- **Evidence quality and limits:** PT + DD + independently challenged SR; no executed authority, tenant, provider, domain-command, security/migration or runtime evidence. **UNVERIFIED — ACCESS REQUIRED**; EIS/specification or documented specialist acceptance does not mean applied production safety.
- **Required engineering correction / accepted direction / retained hold:** Persist source trigger/version, logical occurrence ID, attempts/leases and governed command/effect outcome; preserve business/actor references with minimized access rather than a single mutable success flag.
- **Requirement-specific falsifiable negative test / acceptance evidence (PROPOSED — NOT EXECUTED):** Cause two retries after the first command succeeds but its run acknowledgement is lost. Show one command effect, two attempts, original trigger and honest recovery state; a notification failure stays separate.
- **Specialist finding relevance:** SP2-02/03; FIN15-S7-04; NTF15-01; MIG15-S7-04. Applicable as independent cross-domain challenge, not automatically adopted implementation proof.
- **Source 18 T1–T8 / Founder screening:** No T8; DSCH/DTX and legal audit evidence held.

### 11-§11-14 — Failure and retry history with unknown outcomes

- **Exact FCTM row:** `11-§11-14`; source `C11@e802745a`; pointer `§11 b12: failure/retry history`; kind `OBL`; commitment `BUILD NOW`; commercial `CORE-FDN`; owner `SB-P-1.15`; original disposition **`IN SCOPE`**; canonical dependencies `D12; DSCH`; Founder marker `—`.
- **Independently interpreted Product Truth and affected actor:** Standing rules must retain failures, bounded retry attempts and safe recovery evidence, including when the downstream effect may already have committed.
- **Blueprint map / original §20.6 Engineering Review:** §8.2 and §19 (`§8.2, §12`); original **`BLOCKED` / H**, holds **`H-D12`, `H-SCHED`, `H-SEC`, `H-BIRTH`, `H-PRIV`, `H-IDEM`, `H-MIG`**, original specialist tags `SP-1, SP-2, SP-5`. Draft rationale: Feasible within delegated automation: 'failure/retry history'. Blocked until SB-P-1.12 kernel exists. Risk: execution must use a current-authority principal, never plain service role.
- **Independent feasibility/classification:** **CORRECTION REQUIRED**. Draft's audit/history phrase leaves unknown financial/provider outcomes unmodeled; retrying with a new command ID because an attempt failed can duplicate effects.
- **Consequence-based independent severity:** **HIGH**. Unknown settlement replay can post twice, while silent failure hides the merchant's uncompleted obligation.
- **Evidence quality and limits:** PT + DD + independently challenged SR; no executed authority, tenant, provider, domain-command, security/migration or runtime evidence. **UNVERIFIED — ACCESS REQUIRED**; EIS/specification or documented specialist acceptance does not mean applied production safety.
- **Required engineering correction / accepted direction / retained hold:** Distinguish transient, terminal permission denial and UNKNOWN/RECONCILE states, preserve failed attempt IDs and stable downstream effect key across retries, dead-letter unsafe cases.
- **Requirement-specific falsifiable negative test / acceptance evidence (PROPOSED — NOT EXECUTED):** Crash worker just after financial commit, revoke delegation before retry and restore ledger snapshot; no duplicate effect or unauthorized resend, attempts/history show reconcile/denial truth.
- **Specialist finding relevance:** SP2-02/03; FIN15-S7-02; NTF15-08; MIG15-S7-04/06. Applicable as independent cross-domain challenge, not automatically adopted implementation proof.
- **Source 18 T1–T8 / Founder screening:** H-IDEM and DTX hold; no T8.

### 11-§11-15 — Standing rule cannot self-expand

- **Exact FCTM row:** `11-§11-15`; source `C11@e802745a`; pointer `§11 p3: The rule must never expand itself beyond stored authority`; kind `NEG`; commitment `BUILD NOW`; commercial `CORE-FDN`; owner `SB-P-1.15`; original disposition **`IN SCOPE`**; canonical dependencies `D12; DSCH`; Founder marker `—`.
- **Independently interpreted Product Truth and affected actor:** A stored standing rule must never grant itself greater action type, business, target, quantity, duration or recipient rights; execution remains bounded by approved Owner authority and current law/policy.
- **Blueprint map / original §20.6 Engineering Review:** §8.2 and §19 (`§8.2, §10.3, §12`); original **`BLOCKED` / H**, holds **`H-D12`, `H-SCHED`, `H-SEC`, `H-PRIV`**, original specialist tags `SP-1, SP-2`. Draft rationale: Must-not 'The rule must never expand itself beyond stored authority': enforce below the user interface and prove with a negative test. Blocked until SB-P-1.12 kernel exists. Risk: execution must use a current-authority principal, never plain service role.
- **Independent feasibility/classification:** **CORRECTION REQUIRED**. Draft asserts the negative principle but gives no guard against model-generated edits, stale version injection, unrestricted service-role executor or automatic 'repair' broadening a rejected command.
- **Consequence-based independent severity:** **HIGH**. One compromised worker can transform a limited reorder into arbitrary payments or access.
- **Evidence quality and limits:** PT + DD + independently challenged SR; no executed authority, tenant, provider, domain-command, security/migration or runtime evidence. **UNVERIFIED — ACCESS REQUIRED**; EIS/specification or documented specialist acceptance does not mean applied production safety.
- **Required engineering correction / accepted direction / retained hold:** Make authority monotonic only through explicit new Owner-confirmed grant versions; enforce immutable schema constraints, current D12 capability and server-side target/limit checks on every execution.
- **Requirement-specific falsifiable negative test / acceptance evidence (PROPOSED — NOT EXECUTED):** Ask an AI agent to raise a 5-item reorder limit to 500 and switch tenant after worker timeout. No persisted grant mutation or effect occurs; only Owner re-confirmation could alter a rule.
- **Specialist finding relevance:** SP2-04/07; SEC15-S7-02/03; AI15-S7-02; FIN15-S7-03. Applicable as independent cross-domain challenge, not automatically adopted implementation proof.
- **Source 18 T1–T8 / Founder screening:** No generalized automation scope or T7 change.

### 11-§12-1 — Low-stock suggestion remains a human choice

- **Exact FCTM row:** `11-§12-1`; source `C11@e802745a`; pointer `§12 p2: Low stock detected → Smart Business suggests reorder → Owner reviews/approves/edits/defers/canc…`; kind `SCN`; commitment `BUILD NOW`; commercial `CORE-FDN`; owner `SB-P-1.15`; original disposition **`IN SCOPE`**; canonical dependencies `D12; DSCH; D17`; Founder marker `—`.
- **Independently interpreted Product Truth and affected actor:** Default reorder experience shows a factual low-stock signal and lets Owner approve, edit, defer or cancel; mere recommendation never issues a supplier commitment.
- **Blueprint map / original §20.6 Engineering Review:** §8.2 and §19 (`§8.2, §15, §12`); original **`BLOCKED` / H**, holds **`H-D12`, `H-SCHED`, `H-LATER`, `H-SEC`, `H-BIRTH`, `H-PRIV`, `H-AI`**, original specialist tags `SP-1, SP-2, SP-4, SP-5`. Draft rationale: Acceptance item 'Low stock detected → Smart Business suggests reorder → Owner reviews/approves/e…': needs a runnable negative-path permission test in a named test environment. Blocked until SB-P-1.12 kernel exists. Risk: execution must use a current-authority principal, never plain service role.
- **Independent feasibility/classification:** **DIRECTION ACCEPTED / EVIDENCE HOLD**. The §8.2 default human-in-the-loop direction accords with Contract 11, but a complete D17 stock/supplier data contract and neutral grounded suggestion proof are not available.
- **Consequence-based independent severity:** **MEDIUM**. Acting on noisy estimates can waste merchant money, while an overconfident AI could misdescribe a recommendation as a completed purchase.
- **Evidence quality and limits:** PT + DD + independently challenged SR; no executed authority, tenant, provider, domain-command, security/migration or runtime evidence. **UNVERIFIED — ACCESS REQUIRED**; EIS/specification or documented specialist acceptance does not mean applied production safety.
- **Required engineering correction / accepted direction / retained hold:** Accept advisory suggestion with source-as-of, quantity and uncertainty, preserved Owner alternatives, and no write/send until separately confirmed through owning domain.
- **Requirement-specific falsifiable negative test / acceptance evidence (PROPOSED — NOT EXECUTED):** Feed stale stock values and create an unsupported reorder suggestion; Owner defer/cancel produces zero order/supplier effects. Staff lacking rights cannot approve or view Owner-only financial detail.
- **Specialist finding relevance:** AI15-S7-05/06; FIN15-S7-03; NTF15-05; SP2-04. Applicable as independent cross-domain challenge, not automatically adopted implementation proof.
- **Source 18 T1–T8 / Founder screening:** D17 later domain capability held; no T7 reassignment.

### 11-§12-2 — Automatic reorder only under exact Owner rule

- **Exact FCTM row:** `11-§12-2`; source `C11@e802745a`; pointer `§12 p3: Only when the Owner has created a valid bounded standing rule may the approved reorder action e…`; kind `SCN`; commitment `BUILD NOW`; commercial `CORE-FDN`; owner `SB-P-1.15`; original disposition **`IN SCOPE`**; canonical dependencies `D12; DSCH; D17`; Founder marker `—`.
- **Independently interpreted Product Truth and affected actor:** Automatic reorder is permitted only if an Owner explicitly approved a valid bounded standing rule matching current product, supplier, quantity, value and trigger.
- **Blueprint map / original §20.6 Engineering Review:** §8.2 and §19 (`§8.2, §15, §12`); original **`BLOCKED` / H**, holds **`H-D12`, `H-SCHED`, `H-LATER`, `H-SEC`, `H-BIRTH`, `H-PRIV`**, original specialist tags `SP-1, SP-2, SP-5`. Draft rationale: Acceptance item 'Only when the Owner has created a valid bounded standing rule may the approved…': needs a runnable negative-path permission test in a named test environment. Blocked until SB-P-1.12 kernel exists. Risk: execution must use a current-authority principal, never plain service role.
- **Independent feasibility/classification:** **CORRECTION REQUIRED**. The draft lacks an atomic link from evaluated current stock to exact active delegation and a protected reorder command; D17 later maturity is not license to fabricate fulfillment.
- **Consequence-based independent severity:** **HIGH**. Historical low-stock triggers can order beyond an Owner's budget or through a revoked supplier.
- **Evidence quality and limits:** PT + DD + independently challenged SR; no executed authority, tenant, provider, domain-command, security/migration or runtime evidence. **UNVERIFIED — ACCESS REQUIRED**; EIS/specification or documented specialist acceptance does not mean applied production safety.
- **Required engineering correction / accepted direction / retained hold:** Require fresh domain-verified stock and product identity, exact Owner grant version, concurrency-safe limit enforcement and owning reorder service; no autonomous AI supplier sends.
- **Requirement-specific falsifiable negative test / acceptance evidence (PROPOSED — NOT EXECUTED):** Grant up to 4 units from supplier X, then move stock above threshold, narrow limit and swap supplier ID before delayed execution; deny order and outbound message.
- **Specialist finding relevance:** SP2-04/07; FIN15-S7-03; SEC15-S7-02; MIG15-S7-04. Applicable as independent cross-domain challenge, not automatically adopted implementation proof.
- **Source 18 T1–T8 / Founder screening:** D17/DSCH hold, no T8.

### 11-§12-3 — Historical trigger never creates present authority

- **Exact FCTM row:** `11-§12-3`; source `C11@e802745a`; pointer `§12 p4: A historical background trigger is not authority by itself`; kind `NEG`; commitment `BUILD NOW`; commercial `CORE-FDN`; owner `SB-P-1.15`; original disposition **`IN SCOPE`**; canonical dependencies `D12; DSCH; D17`; Founder marker `—`.
- **Independently interpreted Product Truth and affected actor:** Past due or low-stock trigger records are evidence only; they cannot authorize an action after Owner grant expires, is paused, is revoked, or target/stock state changes.
- **Blueprint map / original §20.6 Engineering Review:** §8.2 and §19 (`§8.2, §10.3, §12`); original **`BLOCKED` / H**, holds **`H-D12`, `H-SCHED`, `H-LATER`, `H-SEC`, `H-PRIV`**, original specialist tags `SP-1, SP-2`. Draft rationale: Must-not 'A historical background trigger is not authority by itself': enforce below the user interface and prove with a negative test. Blocked until SB-P-1.12 kernel exists. Risk: execution must use a current-authority principal, never plain service role.
- **Independent feasibility/classification:** **CORRECTION REQUIRED**. The draft warns of this but does not require a current-effective grant proof at commit or suppression of pre-activation historical replay.
- **Consequence-based independent severity:** **HIGH**. Replaying an old reorder trigger could send an unapproved supplier purchase or resurrect a dead rule.
- **Evidence quality and limits:** PT + DD + independently challenged SR; no executed authority, tenant, provider, domain-command, security/migration or runtime evidence. **UNVERIFIED — ACCESS REQUIRED**; EIS/specification or documented specialist acceptance does not mean applied production safety.
- **Required engineering correction / accepted direction / retained hold:** Bind work to current authorization and prospective trigger/effect identity, preserve historical event audit without treating it as permission or unapproved notification dispatch.
- **Requirement-specific falsifiable negative test / acceptance evidence (PROPOSED — NOT EXECUTED):** Replay a six-month-old stock signal after transfer of ownership and grant revocation; no reorder, notification or Ledger effect, while history stays preserved.
- **Specialist finding relevance:** SP2-04; MIG15-S7-04/05; SEC15-S7-05; NTF15-02. Applicable as independent cross-domain challenge, not automatically adopted implementation proof.
- **Source 18 T1–T8 / Founder screening:** FPDR-02 governs correction notifications only; no invented general replay/cutoff policy or T1 reopening.

### 11-§16-1 — Confirmation bound to reviewed action/state/actor

- **Exact FCTM row:** `11-§16-1`; source `C11@e802745a`; pointer `§16 b1: bind confirmation to the exact reviewed action/state/actor`; kind `OBL`; commitment `BUILD NOW`; commercial `CORE-FDN`; owner `SB-P-1.15`; original disposition **`IN SCOPE`**; canonical dependencies `D12; D13; DTX`; Founder marker `—`.
- **Independently interpreted Product Truth and affected actor:** Explicit human confirmation must be tied to precise business, actor, action payload, object and state as reviewed, not a generic yes or reusable approval.
- **Blueprint map / original §20.6 Engineering Review:** §8.2 and §19 (`§8.2, §12`); original **`BLOCKED` / H**, holds **`H-D12`, `H-D13`, `H-DTX`, `H-SEC`, `H-BIRTH`, `H-PRIV`, `H-FIN`**, original specialist tags `SP-1, SP-3, SP-5`. Draft rationale: Feasible within delegated automation: 'bind confirmation to the exact reviewed action/state/actor'. Blocked until SB-P-1.12 kernel, SB-P-1.13 kernel, the governed write path exist. Risk: any write waits for the single governed transactions-family command; no second write path.
- **Independent feasibility/classification:** **CORRECTION REQUIRED**. §8.2 references confirmation but lacks a tamper-proof version/expiry and single-use proof across UI, voice, AI and scheduler paths.
- **Consequence-based independent severity:** **HIGH**. An unrelated actor's 'yes' could approve changed supplier amount or wrong payment recipient.
- **Evidence quality and limits:** PT + DD + independently challenged SR; no executed authority, tenant, provider, domain-command, security/migration or runtime evidence. **UNVERIFIED — ACCESS REQUIRED**; EIS/specification or documented specialist acceptance does not mean applied production safety.
- **Required engineering correction / accepted direction / retained hold:** Use canonicalized payload hash/expected version, trusted actor, business, purpose and single-use confirmation token with replay rejection and action-specific consent history.
- **Requirement-specific falsifiable negative test / acceptance evidence (PROPOSED — NOT EXECUTED):** Generate preview for invoice A £50, change value/target and answer 'yes' in another conversation or by a different Staff user; all mismatches deny, no domain writes.
- **Specialist finding relevance:** AI15-S7-02/03; SEC15-S7-02; FIN15-S7-01; SP2-04. Applicable as independent cross-domain challenge, not automatically adopted implementation proof.
- **Source 18 T1–T8 / Founder screening:** D12/D13/DTX hold; no T8.

### 11-§16-2 — Immediate pre-execution authority revalidation

- **Exact FCTM row:** `11-§16-2`; source `C11@e802745a`; pointer `§16 b2: revalidate authorization immediately before execution`; kind `OBL`; commitment `BUILD NOW`; commercial `CORE-FDN`; owner `SB-P-1.15`; original disposition **`IN SCOPE`**; canonical dependencies `D12; D13; DTX`; Founder marker `—`.
- **Independently interpreted Product Truth and affected actor:** Permission, business membership, Owner approval, scope/limit and delegation state must be revalidated immediately before a consequential command takes effect.
- **Blueprint map / original §20.6 Engineering Review:** §8.2 and §19 (`§8.2, §12`); original **`BLOCKED` / H**, holds **`H-D12`, `H-D13`, `H-DTX`, `H-SEC`, `H-BIRTH`, `H-PRIV`, `H-FIN`**, original specialist tags `SP-1, SP-3, SP-5`. Draft rationale: Feasible within delegated automation: 'revalidate authorization immediately before execution'. Blocked until SB-P-1.12 kernel, SB-P-1.13 kernel, the governed write path exist. Risk: any write waits for the single governed transactions-family command; no second write path.
- **Independent feasibility/classification:** **CORRECTION REQUIRED**. The draft does not bind authorization to actual command commit; a one-time prequeue role check loses revocations, transfer and value changes.
- **Consequence-based independent severity:** **HIGH**. An ex-Owner or Manager could still spend or alter inventory after access revocation.
- **Evidence quality and limits:** PT + DD + independently challenged SR; no executed authority, tenant, provider, domain-command, security/migration or runtime evidence. **UNVERIFIED — ACCESS REQUIRED**; EIS/specification or documented specialist acceptance does not mean applied production safety.
- **Required engineering correction / accepted direction / retained hold:** Enforce current D12 decision at protected domain execution, including command-level optimistic state guards and privilege isolation; worker/service-role identity conveys no user grant.
- **Requirement-specific falsifiable negative test / acceptance evidence (PROPOSED — NOT EXECUTED):** Owner revokes Manager mid-preview and swaps business membership just before SQL commit; scheduled and interactive command routes both deny with zero effects.
- **Specialist finding relevance:** SEC15-S7-02/03/05; SP2-04/07; FIN15-S7-03/07. Applicable as independent cross-domain challenge, not automatically adopted implementation proof.
- **Source 18 T1–T8 / Founder screening:** DC-06 granular permissions and D12 hold.

### 11-§16-3 — Idempotent command effects across retries

- **Exact FCTM row:** `11-§16-3`; source `C11@e802745a`; pointer `§16 b3: use idempotency/duplicate protection`; kind `OBL`; commitment `BUILD NOW`; commercial `CORE-FDN`; owner `SB-P-1.15`; original disposition **`IN SCOPE`**; canonical dependencies `D12; D13; DTX`; Founder marker `—`.
- **Independently interpreted Product Truth and affected actor:** A second click, voice retry, concurrent worker or recovery after crash must not duplicate the same consequential operation.
- **Blueprint map / original §20.6 Engineering Review:** §8.2 and §19 (`§8.2, §12`); original **`BLOCKED` / H**, holds **`H-D12`, `H-D13`, `H-DTX`, `H-SEC`, `H-BIRTH`, `H-PRIV`, `H-IDEM`, `H-FIN`**, original specialist tags `SP-1, SP-2, SP-3, SP-5`. Draft rationale: Feasible within delegated automation: 'use idempotency/duplicate protection'. Blocked until SB-P-1.12 kernel, SB-P-1.13 kernel, the governed write path exist. Risk: any write waits for the single governed transactions-family command; no second write path.
- **Independent feasibility/classification:** **CORRECTION REQUIRED**. The original draft lists idempotency but omits effect-key derivation and authoritative unknown-outcome reconciliation across scheduler and domain service.
- **Consequence-based independent severity:** **HIGH**. Duplicate repayments or supplier orders can damage ledgers and customer trust.
- **Evidence quality and limits:** PT + DD + independently challenged SR; no executed authority, tenant, provider, domain-command, security/migration or runtime evidence. **UNVERIFIED — ACCESS REQUIRED**; EIS/specification or documented specialist acceptance does not mean applied production safety.
- **Required engineering correction / accepted direction / retained hold:** Create effect idempotency from canonical approved action + logical occurrence + business, preserve it across all attempts; enforce uniqueness in owning domain, with UNKNOWN/RECONCILE rather than guessing.
- **Requirement-specific falsifiable negative test / acceptance evidence (PROPOSED — NOT EXECUTED):** Commit a repayment, crash before acknowledgement, replay from another channel and scheduler attempt. One command effect exists, original audit remains and 'unknown' resolves without second write.
- **Specialist finding relevance:** FIN15-S7-02; SP2-02/03; MIG15-S7-04; NTF15-08. Applicable as independent cross-domain challenge, not automatically adopted implementation proof.
- **Source 18 T1–T8 / Founder screening:** DTX/PQ-2 and H-IDEM retained; not T8.

### 11-§16-4 — Actor and decision provenance in audit

- **Exact FCTM row:** `11-§16-4`; source `C11@e802745a`; pointer `§16 b4: record actor and authority provenance`; kind `OBL`; commitment `BUILD NOW`; commercial `CORE-FDN`; owner `SB-P-1.15`; original disposition **`IN SCOPE`**; canonical dependencies `D12; D13; DTX`; Founder marker `—`.
- **Independently interpreted Product Truth and affected actor:** Every consequential command must record who actually confirmed or granted authority, which rule version applied and why the action was permitted, separate from the worker identity.
- **Blueprint map / original §20.6 Engineering Review:** §8.2 and §19 (`§8.2, §12`); original **`BLOCKED` / H**, holds **`H-D12`, `H-D13`, `H-DTX`, `H-SEC`, `H-BIRTH`, `H-PRIV`, `H-FIN`**, original specialist tags `SP-1, SP-3, SP-5`. Draft rationale: Feasible within delegated automation: 'record actor and authority provenance'. Blocked until SB-P-1.12 kernel, SB-P-1.13 kernel, the governed write path exist. Risk: any write waits for the single governed transactions-family command; no second write path.
- **Independent feasibility/classification:** **CORRECTION REQUIRED**. Current blueprint says record provenance but does not explain how trusted creator/approver or revoked actor metadata survive audit while respecting identity retention limits.
- **Consequence-based independent severity:** **MEDIUM**. Without attribution, dispute investigation may blame the wrong employee or show a technical service principal as merchant approver.
- **Evidence quality and limits:** PT + DD + independently challenged SR; no executed authority, tenant, provider, domain-command, security/migration or runtime evidence. **UNVERIFIED — ACCESS REQUIRED**; EIS/specification or documented specialist acceptance does not mean applied production safety.
- **Required engineering correction / accepted direction / retained hold:** Persist minimal trusted decision/actor reference, business, exact command, rule version, effect and result; never treat scheduler/service-role identity as the approving human and leave legal retention durations unresolved.
- **Requirement-specific falsifiable negative test / acceptance evidence (PROPOSED — NOT EXECUTED):** Run an Owner-confirmed action through a service-role worker then revoke Owner access; audit must show real Owner decision, worker attempt and current denial separately without leaking another tenant.
- **Specialist finding relevance:** SEC15-S7-02; FIN15-S7-04; MIG15-S7-05; SP2-04. Applicable as independent cross-domain challenge, not automatically adopted implementation proof.
- **Source 18 T1–T8 / Founder screening:** U-5/legal-retention and D12 audit proof held; no invented period.

### 11-§16-5 — Narrow failure when underlying state changes

- **Exact FCTM row:** `11-§16-5`; source `C11@e802745a`; pointer `§16 b5: fail narrowly if underlying state changed`; kind `OBL`; commitment `BUILD NOW`; commercial `CORE-FDN`; owner `SB-P-1.15`; original disposition **`IN SCOPE`**; canonical dependencies `D12; D13; DTX`; Founder marker `—`.
- **Independently interpreted Product Truth and affected actor:** An authorized action must fail without side effects when its preconditions or target changed between review/trigger and execution.
- **Blueprint map / original §20.6 Engineering Review:** §8.2 and §19 (`§8.2, §12`); original **`BLOCKED` / H**, holds **`H-D12`, `H-D13`, `H-DTX`, `H-SEC`, `H-BIRTH`, `H-PRIV`, `H-FIN`**, original specialist tags `SP-1, SP-3, SP-5`. Draft rationale: Feasible within delegated automation: 'fail narrowly if underlying state changed'. Blocked until SB-P-1.12 kernel, SB-P-1.13 kernel, the governed write path exist. Risk: any write waits for the single governed transactions-family command; no second write path.
- **Independent feasibility/classification:** **CORRECTION REQUIRED**. The draft lacks exact compare-and-swap semantics and distinction between genuine no-op, partial domain commit and unknown outcome.
- **Consequence-based independent severity:** **HIGH**. A stale confirmation can overwrite correct business facts or retry a partially committed payment.
- **Evidence quality and limits:** PT + DD + independently challenged SR; no executed authority, tenant, provider, domain-command, security/migration or runtime evidence. **UNVERIFIED — ACCESS REQUIRED**; EIS/specification or documented specialist acceptance does not mean applied production safety.
- **Required engineering correction / accepted direction / retained hold:** Require atomic domain expected-state/version check, typed conflict result, no broad rollback of unrelated merchants and explicit reconcile state where downstream result is ambiguous.
- **Requirement-specific falsifiable negative test / acceptance evidence (PROPOSED — NOT EXECUTED):** User reviews reorder v3, another actor changes it to v4; old command returns conflict and records no order. Simulate provider failure after domain commit and preserve true result.
- **Specialist finding relevance:** FIN15-S7-02/04; SP2-03; MIG15-S7-04/06. Applicable as independent cross-domain challenge, not automatically adopted implementation proof.
- **Source 18 T1–T8 / Founder screening:** DTX/D12 hold; no T8.

### 11-§16-6 — Stale confirmation cannot execute changed action

- **Exact FCTM row:** `11-§16-6`; source `C11@e802745a`; pointer `§16 p2: A stale confirmation must not execute a changed action`; kind `NEG`; commitment `BUILD NOW`; commercial `CORE-FDN`; owner `SB-P-1.15`; original disposition **`IN SCOPE`**; canonical dependencies `D12; D13; DTX`; Founder marker `—`.
- **Independently interpreted Product Truth and affected actor:** A confirmation for an old action, state, amount or actor must not be usable to execute an edited, retargeted or expired consequential command.
- **Blueprint map / original §20.6 Engineering Review:** §8.2 and §19 (`§8.2, §10.3, §12`); original **`BLOCKED` / H**, holds **`H-D12`, `H-D13`, `H-DTX`, `H-SEC`, `H-PRIV`, `H-FIN`**, original specialist tags `SP-1, SP-3`. Draft rationale: Must-not 'A stale confirmation must not execute a changed action': enforce below the user interface and prove with a negative test. Blocked until SB-P-1.12 kernel, SB-P-1.13 kernel, the governed write path exist. Risk: any write waits for the single governed transactions-family command; no second write path.
- **Independent feasibility/classification:** **CORRECTION REQUIRED**. The NEG rule is correct but needs server-validated binding, not a disabled frontend button; the draft provides no replay/nonces or invalidation after delegated grant change.
- **Consequence-based independent severity:** **HIGH**. An attacker or delayed voice response could authorize a materially different payment.
- **Evidence quality and limits:** PT + DD + independently challenged SR; no executed authority, tenant, provider, domain-command, security/migration or runtime evidence. **UNVERIFIED — ACCESS REQUIRED**; EIS/specification or documented specialist acceptance does not mean applied production safety.
- **Required engineering correction / accepted direction / retained hold:** Bind confirmation to immutable action hash, actor/session/business scope, target/version and bounded validity, invalidate upon change and require new preview/approval.
- **Requirement-specific falsifiable negative test / acceptance evidence (PROPOSED — NOT EXECUTED):** Confirm ₹800 expense then substitute ₹8,000 and replay token after revoke; both reject at domain boundary even with service-role credentials.
- **Specialist finding relevance:** AI15-S7-02; SEC15-S7-02; FIN15-S7-01; SP2-04. Applicable as independent cross-domain challenge, not automatically adopted implementation proof.
- **Source 18 T1–T8 / Founder screening:** No Product Truth change; negative enforcement required.

### 24-§18-2 — Voice to reminder to domain action remains governed

- **Exact FCTM row:** `24-§18-2`; source `C24@0c1dcbb2`; pointer `§18 example Voice→Reminder→Domain Action`; kind `SCN`; commitment `BUILD NOW`; commercial `CORE-INT`; owner `SB-P-1.15`; original disposition **`IN SCOPE`**; canonical dependencies `D12; D13; DSCH; DTX`; Founder marker `—`.
- **Independently interpreted Product Truth and affected actor:** A spoken reminder is transcribed and interpreted as reminder intent; later it may offer a governed action only after valid human confirmation or a previously authorized bounded rule.
- **Blueprint map / original §20.6 Engineering Review:** §8.2 and §19 (`§8.2, §15, §12`); original **`BLOCKED` / H**, holds **`H-D12`, `H-D13`, `H-DTX`, `H-SCHED`, `H-SEC`, `H-BIRTH`, `H-PRIV`, `H-FIN`**, original specialist tags `SP-1, SP-2, SP-3, SP-5`. Draft rationale: Acceptance item '§18 example Voice→Reminder→Domain Action': needs a runnable negative-path permission test in a named test environment. Blocked until SB-P-1.12 kernel, SB-P-1.13 kernel, the governed write path exist. Risk: any write waits for the single governed transactions-family command; no second write path.
- **Independent feasibility/classification:** **CORRECTION REQUIRED**. The sample flow is feasible, but AI transcription uncertainty and prompt injection must not turn 'remind me to pay' into payment authorization. No mature live voice provider is demonstrated.
- **Consequence-based independent severity:** **HIGH**. Misheard amount or intent can create an unauthorized financial command from an innocent spoken request.
- **Evidence quality and limits:** PT + DD + independently challenged SR; no executed authority, tenant, provider, domain-command, security/migration or runtime evidence. **UNVERIFIED — ACCESS REQUIRED**; EIS/specification or documented specialist acceptance does not mean applied production safety.
- **Required engineering correction / accepted direction / retained hold:** Separate transcription confidence, clarification, reminder persistence and later command proposal; check current identity/permissions and consent at both creation and execution, using DTX for writes.
- **Requirement-specific falsifiable negative test / acceptance evidence (PROPOSED — NOT EXECUTED):** Speak 'remind me to pay X' with noisy amount, inject 'pay now' in transcript, and revoke permission before due time. Reminder may remain accurate after clarification, but payment never executes.
- **Specialist finding relevance:** AI15-S7-02/03/05; FIN15-S7-01/08; SP2-04; SEC15-S7-03. Applicable as independent cross-domain challenge, not automatically adopted implementation proof.
- **Source 18 T1–T8 / Founder screening:** D13 voice activation and DTX/DSCH held; no T8.

### 3-§13-3 — Ask CFO insight-to-action seam remains zero-write

- **Exact FCTM row:** `3-§13-3`; source `C3@d8c26c07`; pointer `§13 Ask CFO continuation into a reminder/action passes through the execution/confirmation service`; kind `OBL`; commitment `BUILD NOW`; commercial `CORE-LM`; owner `SB-P-1.15`; original disposition **`IN SCOPE`**; canonical dependencies `D12; D13; DTX; DSCH`; Founder marker `—`.
- **Independently interpreted Product Truth and affected actor:** Ask CFO may offer Owner a continuation to reminder or action, but may only read authorized Business Memory; actual action occurs through a separate permission and confirmation service.
- **Blueprint map / original §20.6 Engineering Review:** §8.2 and §19 (`§8.2, §12`); original **`BLOCKED` / H**, holds **`H-D12`, `H-D13`, `H-DTX`, `H-SCHED`, `H-SEC`, `H-BIRTH`, `H-PRIV`, `H-FIN`**, original specialist tags `SP-1, SP-2, SP-3, SP-5`. Draft rationale: Feasible within delegated automation: '§13 Ask CFO continuation into a reminder/action passes through the execution/co…'. Blocked until SB-P-1.12 kernel, SB-P-1.13 kernel, the governed write path exist. Risk: any write waits for the single governed transactions-family command; no second write path.
- **Independent feasibility/classification:** **CORRECTION REQUIRED**. The draft does not define hard tool-level zero-write isolation from model reasoning or how a Manager with limited insight can avoid gaining Owner-level execution rights.
- **Consequence-based independent severity:** **HIGH**. An AI-generated recommendation could mutate Ledger or reveal Owner profit through a delegated reminder path.
- **Evidence quality and limits:** PT + DD + independently challenged SR; no executed authority, tenant, provider, domain-command, security/migration or runtime evidence. **UNVERIFIED — ACCESS REQUIRED**; EIS/specification or documented specialist acceptance does not mean applied production safety.
- **Required engineering correction / accepted direction / retained hold:** Restrict Ask CFO tool identities to read-only data and no privileged command invoke; require new explicit governed action context or separately validated Owner standing rule for any continuation, not inherited AI authority.
- **Requirement-specific falsifiable negative test / acceptance evidence (PROPOSED — NOT EXECUTED):** Ask CFO suggests recording customer repayment to Employee/Manager, then inject a tool-write directive; assert zero Ledger writes and no Owner finance disclosure. Owner action needs separate exact confirmation.
- **Specialist finding relevance:** AI15-S7-03/04/07; SEC15-S7-04; FIN15-S7-08/07. Applicable as independent cross-domain challenge, not automatically adopted implementation proof.
- **Source 18 T1–T8 / Founder screening:** FPDR-01 qualified credit answer maintained; DC-06 and D13/DTX hold.

### BP-§10.4-W4 — Bounded delegated continuation work-area completeness

- **Exact FCTM row:** `BP-§10.4-W4`; source `BP@9dfdd924`; pointer `§10.4 work area 4: bounded delegated continuation`; kind `WORK`; commitment `BUILD NOW`; commercial `per contract`; owner `SB-P-1.15`; original disposition **`IN SCOPE`**; canonical dependencies `D12; DTX; DSCH`; Founder marker `—`.
- **Independently interpreted Product Truth and affected actor:** The approved mission work area requires a bounded continuation mechanism reusable from reminders, not a hidden generalized automation platform or separate financial mutation engine.
- **Blueprint map / original §20.6 Engineering Review:** §8.2 and §19 (`§8.2, §12`); original **`BLOCKED` / H**, holds **`H-D12`, `H-DTX`, `H-SCHED`, `H-SEC`, `H-BIRTH`, `H-PRIV`, `H-FIN`**, original specialist tags `SP-1, SP-2, SP-3, SP-5`. Draft rationale: Work area 'bounded delegated continuation': realized by delegated automation. Blocked until SB-P-1.12 kernel, the governed write path exist. Risk: any write waits for the single governed transactions-family command; no second write path.
- **Independent feasibility/classification:** **CORRECTION REQUIRED**. §8.2 describes a conceptual flow but no end-to-end denial matrix spanning Owner, Manager, Employee, ownership transfer and worker attempts.
- **Consequence-based independent severity:** **HIGH**. Apparently working positive path could hide revocation, tenant leakage and duplicate effects.
- **Evidence quality and limits:** PT + DD + independently challenged SR; no executed authority, tenant, provider, domain-command, security/migration or runtime evidence. **UNVERIFIED — ACCESS REQUIRED**; EIS/specification or documented specialist acceptance does not mean applied production safety.
- **Required engineering correction / accepted direction / retained hold:** Define acceptance coverage for explicit Owner grant, scoped subordinate permission, expiry/revoke, false target, retry/recovery, role denial and governed domain command evidence; do not auto-add capabilities.
- **Requirement-specific falsifiable negative test / acceptance evidence (PROPOSED — NOT EXECUTED):** Run matrix over Owner/Manager/Employee: delegated stock view does not grant Owner profit, Employee permitted transaction entry does not grant Ask CFO, and revoked rule does not execute even if queued.
- **Specialist finding relevance:** SEC15-S7-03/04; SP2-04/07; FIN15-S7-03; AI15-S7-07. Applicable as independent cross-domain challenge, not automatically adopted implementation proof.
- **Source 18 T1–T8 / Founder screening:** Mission scope retained, no T7 deferral despite upstream dependencies.

### BP-§10.4-W9 — Insight to action only by human choice or valid delegation

- **Exact FCTM row:** `BP-§10.4-W9`; source `BP@9dfdd924`; pointer `§10.4 work area 9: insight to action only through explicit continuation or valid bounded delegation`; kind `WORK`; commitment `BUILD NOW`; commercial `per contract`; owner `SB-P-1.15`; original disposition **`IN SCOPE`**; canonical dependencies `D12; D13; DTX`; Founder marker `—`.
- **Independently interpreted Product Truth and affected actor:** Daily Intelligence/Ask CFO recommendations may invite an Owner's next action, but can never act autonomously unless an exact, currently valid bounded standing rule already governs that effect.
- **Blueprint map / original §20.6 Engineering Review:** §8.2 and §19 (`§8.2, §12`); original **`BLOCKED` / H**, holds **`H-D12`, `H-D13`, `H-DTX`, `H-SEC`, `H-BIRTH`, `H-PRIV`, `H-FIN`, `H-AI`**, original specialist tags `SP-1, SP-3, SP-4, SP-5`. Draft rationale: Work area 'insight to action only through explicit continuation or valid bounded delegation': realized by delegated automation. Blocked until SB-P-1.12 kernel, SB-P-1.13 kernel, the governed write path exist. Risk: any write waits for the single governed transactions-family command; no second write path.
- **Independent feasibility/classification:** **CORRECTION REQUIRED**. Draft cannot prove advisory output is separated from action-capable tools and that a stale user consent cannot be recycled by AI or scheduler.
- **Consequence-based independent severity:** **HIGH**. Factual insight can wrongly become an automated payment or supplier order, contrary to human ownership.
- **Evidence quality and limits:** PT + DD + independently challenged SR; no executed authority, tenant, provider, domain-command, security/migration or runtime evidence. **UNVERIFIED — ACCESS REQUIRED**; EIS/specification or documented specialist acceptance does not mean applied production safety.
- **Required engineering correction / accepted direction / retained hold:** Keep AI analysis tools read-only; convert chosen recommendation to typed proposal, then confirm actor/target/state or validate current stored Owner delegation in authoritative service.
- **Requirement-specific falsifiable negative test / acceptance evidence (PROPOSED — NOT EXECUTED):** Feed Daily Intelligence a 'pay supplier' suggestion and model prompt injection. Without exact user confirmation/grant, no financial, supplier or outbound effect; log read-only recommendation only.
- **Specialist finding relevance:** AI15-S7-02/04/05; FIN15-S7-01/08; SEC15-S7-04; SP2-04. Applicable as independent cross-domain challenge, not automatically adopted implementation proof.
- **Source 18 T1–T8 / Founder screening:** No T7; FPDR-01 and human decision ownership protected.

### BP-§6.2 — One Business Command/Action Path for every consequential continuation

- **Exact FCTM row:** `BP-§6.2`; source `BP@9dfdd924`; pointer `§6.2 one Business Command / Action Path, reused from reminders/automation`; kind `RULE`; commitment `BUILD NOW`; commercial `per contract`; owner `SB-P-1.15`; original disposition **`IN SCOPE`**; canonical dependencies `D12; DTX`; Founder marker `—`.
- **Independently interpreted Product Truth and affected actor:** All consequential actions from structured UI, conversation, UDI, reminders or approved later channels must converge on interpretation, current permission, clarification/confirmation or bounded delegation, deterministic domain command, authoritative write and audit.
- **Blueprint map / original §20.6 Engineering Review:** §8.2 and §19 (`§8.2, §10.2, §12`); original **`BLOCKED` / H**, holds **`H-D12`, `H-DTX`, `H-SEC`, `H-BIRTH`, `H-PRIV`, `H-FIN`**, original specialist tags `SP-1, SP-3, SP-5`. Draft rationale: Rule '§6.2 one Business Command / Action Path, reused from reminders/automation': realized as a design constraint of delegated automation. Blocked until SB-P-1.12 kernel, the governed write path exist. Risk: any write waits for the single governed transactions-family command; no second write path.
- **Independent feasibility/classification:** **CORRECTION REQUIRED**. §8.2 reproduces the planned path without verifying common enforcement at every origin. A worker, AI tool or shortcut API must not create a parallel SQL/financial command route.
- **Consequence-based independent severity:** **HIGH**. Multiple paths permit inconsistent permission enforcement, duplicated Ledger events and missing audit attribution.
- **Evidence quality and limits:** PT + DD + independently challenged SR; no executed authority, tenant, provider, domain-command, security/migration or runtime evidence. **UNVERIFIED — ACCESS REQUIRED**; EIS/specification or documented specialist acceptance does not mean applied production safety.
- **Required engineering correction / accepted direction / retained hold:** Document a typed command contract with origin-independent authorization, idempotency, expected-state, actor audit and transactional financial DTX/PQ-2 enforcement; nonfinancial actions use their owning domain but not unauthorized shortcut mutations.
- **Requirement-specific falsifiable negative test / acceptance evidence (PROPOSED — NOT EXECUTED):** Submit identical approved effect via native, voice, reminder and simulated external adapter, then attempt service-role shortcut with revoked principal. One authorized domain effect and consistent audit only; shortcuts deny.
- **Specialist finding relevance:** FIN15-S7-01/02; SEC15-S7-01/02; AI15-S7-04; SP2-03. Applicable as independent cross-domain challenge, not automatically adopted implementation proof.
- **Source 18 T1–T8 / Founder screening:** No T7 alteration, DTX/PQ-2 and D12 remain essential.

## 5. Count reconciliation and canonical preservation

| Accounting item | Observed |
| --- | ---: |
| Canonical §8.2 IN SCOPE IDs | 40 |
| PR #870 original BLOCKED / FOLLOW-UP / PASS | 40 / 0 / 0 |
| PR #870 original High / Medium / Low | 40 / 0 / 0 |
| Independent CORRECTION REQUIRED | 36 |
| Independent DIRECTION ACCEPTED / EVIDENCE HOLD | 4 |
| Independent High / Medium / Low / Critical | 32 / 8 / 0 / 0 |
| Independently accepted runtime PASS | **0** |

The exactly 40 substantive assessment headings above equal the §8.2 ID set in both canonical FCTM and challenged §20.6, with **zero missing, zero unexpected and zero duplicated IDs**, and matching primary Blueprint §19 §8.2 homes. Contract 11 contributes 35; C24/C3 contribute one each; Build Plan contributes three. The previous 07c (12 IDs) and 07d (17 IDs) are outside this annex's substantive ID population and retain their independent ownership. These findings do not alter FCTM dispositions, Build Now vs Later, roles, pricing, mission ownership, Blueprint, or original draft risk/hold labels.

## 6. Cross-specialist reconciliation (SP1 through SP6)

1. **Authority creation, revocation and effect are distinct:** Contract 21 §12's stored Owner delegation is a necessary provenance record, never perpetual authorization. At claim and at protected command commit revalidate current membership, target scope, effective time and limits. SP2-04/07, SEC15-S7-02/03/05 and FIN15-S7-03 overlap, but §8.2 independently fails to specify the transactionally effective revocation race guard. A server/service-role credential cannot be mistaken for merchant permission.
2. **Permission-scoped staff data:** An Employee's authorized transaction input or self-attendance access is not Owner profit, complete reports, Ask CFO or general payment approval. DC-06 leaves delegated Manager intelligence granularity subject to D12 authorization; SP1 SEC15-S7-04, SP4 AI15-S7-07 and SP3 FIN15-S7-07/08 are relevant. Deny at real data/command/tool boundary, not only hide UI.
3. **Financial command identity vs scheduler retry:** The standing rule identity, logical occurrence, worker lease/fence, human confirmation, financial command effect and notification request/provider attempt are separate IDs. SP2-02/03, FIN15-S7-01/02, NTF15-04/08 and MIG15-S7-04/06 require safe UNKNOWN/RECONCILE rather than retrying a new business effect; only DTX/PQ-2 commands can write governed Ledger state.
4. **Later-domain examples remain examples, not early implementation claims:** 'Mark customer payment received' retains SB-P-1.16 authoritative credit maturity hold; 'Approve reorder' retains SB-P-1.17 owning stock/supplier domain; 'Open renewal document' relies on approved document access and later compliance maturity. This annex preserves the in-scope *continuation foundation* without advancing later-mission actual capabilities or product commitments.
5. **AI advice and confirmation:** Voice/AI intent, Ask CFO suggestions and Daily Intelligence are never authority. Explicit user review or a valid current Owner standing rule is necessary for actions. AI15-S7-02/03/04/05 and FIN15-S7-08 demand tool- and permission-level zero-write; a model-created tool payload is untrusted. The founder's qualified entry-level credit answer does not assert authoritative balances.
6. **Notifications and history:** FDB-2 native-only interim and NTF15-03/05 prevent a rule's channel field from enabling WhatsApp or other outbound delivery. User correction notifications are prospective-only under FPDR-02, without historical replay, synthetic status rewrite or owner reassignment. Migration SP5 warns that grant/actor/history/restore semantics need executed tests, not documentary acceptance.

## 7. Founder, Source 18 and unresolved holds

**FPDR-01:** Retain Owner correction-notification commitment, native-only interim before SB-P-1.20, and Ask CFO qualified *read-only* answer. **FPDR-02:** T1 RESOLVED as prospective-only, no historical correction replay or invented activation date; **FDB-1(d2)** integration ownership stays UNASSIGNED. **FPDR-03:** T6 RESOLVED as latest-valid *native* Daily Intelligence at 07:00/10:30/22:00 business-local with truthful scheduled, generated and source-as-of fields, without an invented lateness cutoff or outbound catch-up. **DC-03** existing-merchant timezone default remains OPEN; no silent `Asia/Kolkata` backfill or historical Ledger DATE change.

**U-3** allocation-held `20-§23-10` remains outside the 694 in-scope IDs and this annex; **U-5** legal/retention and **DC-06** Manager delegation granularity stay separately governed. **T2:** no conflict between canonical approved sources demonstrated by this draft review. **T3–T5:** no new triggered decision or approval condition; specific later-mission integration allocation retains its existing governance route. **T7:** restorative PR #870 source alignment is not itself a Product Truth scope change; any genuine omission/deferral/reassignment requires Founder route. **T8:** NONE demonstrated by draft dependency blocks or proposed engineering corrections.

**Residual holds:** D12 Authority/Identity kernel; D13 Conversation/AI intent and Basic Voice; D14 Business Memory/document provenance; DSCH time/worker execution; DTX/PQ-2 guarded financial command; D16/D17/D18 later domain maturity where named; DNTF and SB-P-1.20 channels; effective RLS and service-role grants, current membership/Owner transfer, controlled rule persistence, idempotency/fencing, provenance/retention/privacy/legal hold, provider/runtime verification, migration/PITR/restoration rehearsals and Markdown/CI execution evidence. All negative tests remain planned, not executed.

## 8. Checkpoint 3 publication boundary

This is a **complete 40-row documentary challenge only**. There is no actual delegated action execution, migration, permission mutation, financial transaction, notification dispatch, AI action or production validation. The preceding 07c and 07d annexes remain unchanged. The five remaining substantive design homes and eventual 694-row master are still separately gated. PR #898 remains **S7-PAR IN PROGRESS — INDEPENDENT ENGINEERING REVIEW INCOMPLETE — NOT FOR MERGE**.

**STOP FOR MISSION CONTROL CHECKPOINT 3 CONTENT AND PUBLICATION DISPOSITION.**
