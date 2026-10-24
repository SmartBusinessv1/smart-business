# MC-507BD — GA-04 / GA-05 bounded upstream contract amendment proposal

**Status: PROPOSAL ONLY — NOT AN APPROVED OR EFFECTIVE UPSTREAM AMENDMENT.**  
**Mission:** SB-P-1.17 Stage 10, GA-04 `TXN-03/HOLD-17` and GA-05 `TXN-06/07/HOLD-18`.  
**Founder authorization:** MC-507BC YES — prepare one bounded proposal, with separate Product Truth T3 screening; no direct edit of locked source contracts before independent review and later Founder human merge.  
**Baseline:** `main@e21e54eab55d19ced569d33f8c9adfdd909f9bb1`.  
**Author disclosure:** Mission Control AI prepared this proposal after receiving advisory work from SA-05 and an archived SB-P-1.14 Claude Code room; that archived room authored significant SB-P-1.14 EIS substance and its conclusions are not independent or binding. MC-507AD reserves final SB-P-1.14 and SB-P-1.12 contract authority to Founder.

## A. Immutable source boundaries

- SB-P-1.14 EIS `899a0fe1f98c62bbdfa621c97cdc5e8ee3ce65d3`: `EIS14-CMD-01` governed creation with confirmation, kernel and idempotency; `EIS14-CMD-02` append-only correction event **plus application of change to original row**; `EIS14-CMD-03` no alternative protected direct DML writer; `EIS14-LDG-01/02` approved types/positive amounts.
- SB-P-1.13 EIS `9a1e723d4874011b6870a680f2a2080154537c30`: `EIS13-CMD-02` sole `create_transaction_governed` and narrow SECURITY DEFINER executor; `EIS13-CNF-02` consume confirmation and revalidate authority inside transaction.
- SB-P-1.12 EIS `c444f7509477d0e8b997af538440d93bf2ca4d72`: `EIS-CNF-01/02`, `EIS-KER-02`, `EIS-AUT-01`, `EIS-ISO-04/10`: verified principal, single-use action-bound confirmation, revocation serialization and least-privilege protected execution.
- Founder A1/A2/B1 `07d00d1dbbf6aab9846f7031b6ebfd2dd9ea04fb`: one PostgreSQL coordinator, one governed Ledger creation writer, no claim public command nests unchanged; one narrowly governed upstream fallback.
- MC-507AD `48aa26c4b8212a5c6cec4acf144b5c496e36a712`: L1/L2/E2/E4/E7 deferred interface questions; L3/L4/L5/L6 and E1/E3/E5/E6 bounded design constraints.
- EIS17 current `c5c7b7e70441cea4328b89f802e31d3b0c04690f`. HOLD-16/17/18 stay OPEN. T8 WATCH, not established.

## B. Part 1 — GA-04 proposed technical composition contract (not yet accepted)

**Scope:** specify, not implement, SB-P-1.17 one-transaction coordinator compatibility with locked Ledger and kernel. Any changed SB-P-1.13/SB-P-1.12 or SB-P-1.14 clause requires its own governed, Founder-approved amendment before becoming normative.

**Proposed interface acceptance conditions:**

1. **L1 — sole Ledger creation authority:** one SB-P-1.17 protected coordinator begins and owns the one PostgreSQL business-outcome transaction. Financial creation goes through `create_transaction_governed` as the sole approved Ledger creation authority **only if** its existing invocation/confirmation contract is proven compatible. Otherwise define an SB-P-1.14-owned transaction-composable internal representation behind that sole governed creation boundary through upstream amendment; never a second public financial writer. Do not assume a working SQL signature.
2. **L2/E4 — one confirmation decision:** bind preview/fingerprint to the *complete* intended composite outcome (business, verified principal, Ledger effect, eligible stock effects and event links). One authoritative confirmation consume, serialized authority and epoch recheck in the outer transaction, without double consumption or bypass of `EIS14-CMD-01` and `EIS13-CMD-02`. **The exact child-consumption/delegation state machine is PROPOSED and requires normative acceptance/amendment**; an automation-run path must document when and under what stored EIS-AUT-01 authority a human confirmation is required or not. Do not infer exemption from automation channel.
3. **E2/E7 — protected execution:** single verified principal and business derived from trusted JWT/store or governed automation rule, not client payload or `service_role`; narrow `NOLOGIN NOINHERIT` coordinator definer role; `EXECUTE` only on accepted Ledger and inventory protected child commands and strictly necessary source/event link state; no direct `transactions` DML. The exact child command signatures, owners, grants, REVOKEs and definer-to-definer context transfer require a reviewed privilege graph before contract acceptance, and deployment evidence later.
4. **Idempotency and atomicity:** stable outer business identity and deterministic child Ledger/movement keys; same-key/same-payload replay returns committed outcome, conflicting payload rejects, unknown result looked up before retry; no separate API commits or compensating cleanup. Required eligible financial, stock, source-state and links commit together or none. Hold a genuinely ineligible stock application without a fabricated movement; no failure of eligible stock can masquerade as the GA-03 Ledger-only B outcome. Canonical lock-order specification remains required.

**Minimal proposed upstream clause scope (subject to approval):** one Ledger composition clause clarifying nested invocation or the approved internally owned composable path, one kernel/confirmation/executor clause clarifying the single confirmation consumer and effective grant model. Do not pre-authorize an altered public signature, runtime role or new write primitive.

**GA-04 no-go:** If a necessary change contradicts unamendable locked Source18/kernel invariants, raise the exact T8 conflict to Founder. No T8 established yet.

## C. Part 2 — GA-05 proposed reversal interface; CONDITIONAL on T3 screen

**Current gap:** `EIS14-CMD-02` is a governed correction applying changes to the original row while recording an append-only correction event. It does not, by itself, specify a full original-preserving reversal/void or refund; current six transaction types and positive amounts cannot be repurposed into fake offset income/expense. This proposal does **not** presume a seventh type, status, refund semantics, or an implemented reversal command.

**Proposed required semantics, subject to Founder Product Truth decision if necessary:**
- One Ledger-owned governed reversal representation: stable distinct reversal event identity; linked original financial/source identity; documented effect on authoritative balances and readers; original business event and attribution retained in immutable history; operation authority and audit rechecked; idempotent same-intent replay and outcome lookup.
- If the original event committed stock movements, linked compensating movements of *those actual committed movements only* must commit with the governed financial reversal in the same PostgreSQL transaction. Ledger-only original means no invented stock compensation. Refund does not automatically imply physical return/restock; return eligibility follows an independently approved policy. Negative stock follows existing `EIS17-STK-09`; if required compensation is blocked, the dual-domain reversal fails atomically and remains reviewable.
- Reversal arriving before original stays held with no financial or stock effect; correlate exactly once after original becomes valid. No direct Ledger DML, alternate public writer, overwrite of prior history, or fabricated positive income/expense offset.
- Exact operation name/signature, reversal vs correction applicability, monetary/accounting balance treatment, public merchant-visible status/wording, and permission/confirmation mapping are **NOT SELECTED** by this proposal.

### C1. Required Product Truth T3 screen — separate and prior to technical amendment acceptance

**Question for Founder:** “Should Smart Business Phase 1 recognize a merchant-visible **reversed/voided** financial-event state as a governed, original-linked effect, distinct from editing corrections and refunds, with no automatic physical restock? Or must GA-05 be restricted to an already approved correction representation pending a separate reversal feature decision?”

Until answered through Source18 governance, no new merchant-visible reversal state or broadened refund policy may enter a locked upstream EIS. A T3 *screen is required*; this proposal does not declare a trigger automatically satisfied or force a feature decision when a narrower contract-compatible representation is independently demonstrated.

### C2. Conditional upstream acceptance path

If the Founder confirms the proposed reversal behavior is already encompassed by approved Product Truth, the Ledger owner must propose the smallest approved upstream contract language and prove compatibility with `EIS14-CMD-01/02/03`, positive amount/types and authoritative readers. If the screen finds new product behavior, obtain separate explicit Founder Product Truth decision first; then narrowly amend affected SB-P-1.14/SB-P-1.13/SB-P-1.12 clauses as necessary and reconcile SB-P-1.17 EIS only after acceptance.

## D. Authority, review and stop conditions

1. This PR may merge **only as a non-governing proposal record**, if separately reviewed and Founder human merged; it must not be cited as approval of any locked EIS or Product Truth amendment. Locked upstream files, Blueprint, FCTM and EIS17 stay unchanged.
2. **Independent finding-scoped review:** existing SA-01 Security/Executor room reviews GA-04 kernel and confirmation/executor boundaries with contribution disclosure; existing SA-03 Finance room reviews GA-05 accounting/reversal and T3 framing with contribution disclosure; a distinct contribution-separated Source18 Governance reviewer screens amendment route and T1–T8. No broad restart.
3. Founder decides any new Product Truth, exact upstream contract amendments and protected Ledger/executor authority. Mission Control then directs separately authorized *minimal* source-contract PR(s), independent targeted review and human merge.
4. HOLD-16/17/18 and other EIS/source/provider/runtime holds OPEN. No actual SQL implementation, deployed-ACL proof, Stage11 EIS Lock, Stage12/13 completion or implementation authorization.

**STOP — proposal preparation only.**
