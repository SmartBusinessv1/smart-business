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

1. **L1 — sole Ledger creation authority:** for a separately authorized cross-domain composite operation, one SB-P-1.17 protected coordinator owns one PostgreSQL business-outcome transaction. **Proposed bounded upstream amendment:** the SB-P-1.14 Ledger creation step executes through an SB-P-1.14-owned transaction-composable *internal* path behind the sole `create_transaction_governed` creation authority; it is not a second public Ledger writer, not directly executable by ordinary clients, and grants no direct `transactions` DML. The unchanged public command is **not** assumed nestable. Exact internal signature and implementation remain unapproved.
2. **L2/E4 — one confirmation owner (PROPOSED UPSTREAM AMENDMENT):** the *outer governed composite command* exclusively owns and atomically consumes the single SB-P-1.12 confirmation binding covering the entire reviewed business outcome (principal, business, Ledger effect, required stock effects and source/event links). The SB-P-1.14 internal Ledger child accepts only non-forgeable, server-derived transaction-local context bound to that already-consumed confirmation; it **does not consume a second binding** and must independently revalidate verified principal, business, Ledger action/object/target, relevant reviewed-state fingerprint and material Ledger subset, authority epochs and deterministic child idempotency before its Ledger effect. Kernel checks, serialization and rollback remain in the same transaction. No client, arbitrary `service_role` code or unrelated definer may manufacture or widen the context. This changes the current `EIS14-CMD-01` / `EIS13-CMD-02` confirmation-consumer wording and requires separately authorized amendments to applicable locked SB-P-1.12/1.13/1.14 contracts: exactly one consequential command consumes confirmation; governed children may only revalidate bound consumed-confirmation context inside that transaction. For EIS-AUT-01 automation runs, the binding requirement/exemption remains **UNRESOLVED** pending an explicit authority-contract selection; do not silently treat automation as exempt.
3. **E2/E7 — protected execution:** single verified principal and business derived from trusted JWT/store or governed automation rule, not client payload or `service_role`; narrow `NOLOGIN NOINHERIT` coordinator definer role; `EXECUTE` only on accepted Ledger and inventory protected child commands and strictly necessary source/event link state; no direct `transactions` DML. The exact child command signatures, owners, grants, REVOKEs and definer-to-definer context transfer require a reviewed privilege graph before contract acceptance, and deployment evidence later.
4. **Idempotency and atomicity:** stable outer business identity and deterministic child Ledger/movement keys; same-key/same-payload replay returns committed outcome, conflicting payload rejects, unknown result looked up before retry; no separate API commits or compensating cleanup. Required eligible financial, stock, source-state and links commit together or none. Hold a genuinely ineligible stock application without a fabricated movement; no failure of eligible stock can masquerade as the GA-03 Ledger-only B outcome. Canonical lock-order specification remains required.

**Minimal proposed upstream clause scope (subject to approval):** one Ledger composition clause clarifying nested invocation or the approved internally owned composable path, one kernel/confirmation/executor clause clarifying the single confirmation consumer and effective grant model. Do not pre-authorize an altered public signature, runtime role or new write primitive.

**GA-04 no-go:** If a necessary change contradicts unamendable locked Source18/kernel invariants, raise the exact T8 conflict to Founder. No T8 established yet.

## C. Part 2 — GA-05 proposed original-linked reversal interface (representation-neutral)

**Current gap:** `EIS14-CMD-02` governs corrections by appending an audit event and applying a change to the original row; it does not itself specify an original-linked reversal/void effect. The approved six transaction types and positive amounts cannot be repurposed into fabricated offset income/expense. No new type, merchant-facing status, refund semantics or implemented reversal command is presumed.

**Accepted source-aligned constraints (not an approved new interface):**
- **Ordinary correction:** governed correction of an erroneously recorded fact with append-only audit history; it does not itself prove that the underlying economic event ceased.
- **Reversal / void:** a distinct governed, original-linked financial effect neutralizing or invalidating the original event's authoritative active financial effect while preserving both original and reversal audit history. Void is a cancellation/invalidation reversal semantic, not an ordinary field edit. Authoritative readers must not continue counting the reversed original as active.
- **Refund:** distinct money-return evidence/business action; neither automatic Ledger reversal nor an invented transaction type, and subject to owning financial/settlement authority.
- **Physical return/restock:** distinct inventory fact requiring approved evidence of actual stock return; neither refund nor void automatically restocks.
- A Ledger-owned governed representation must carry stable original/reversal identity and cross-domain links, enforce current authority/audit and replay/idempotency/unknown-outcome lookup, with no second Ledger writer or direct protected DML. If the original committed inventory movements, compensate only those actually committed, atomically with required financial effects. A Ledger-only original produces no invented stock compensation. `EIS17-STK-09` governs negative-stock failures; no partial dual-domain reversal is permitted. Reversal before original remains held and correlates exactly once.
- **Unselected engineering-contract matters:** exact operation/signature, reversal-versus-correction applicability, storage representation of linked reversal effect, accounting computation in governed readers, and permission/confirmation mapping. The requirement to neutralize reversed active effect and preserve linked immutable history is a constraint, not evidence that the upstream primitive exists. No new merchant-facing Ledger status/label, refund behavior or restock policy is authorized here.

### C1. Product Truth boundary — no new merchant-facing state authorized by this proposal

The governed reversal contract may represent an original-linked financial reversal/void internally and in authoritative financial readers without creating a new Ledger `transaction_type`, fabricated offset income/expense, or a new merchant-facing lifecycle label. Existing approved `reversed/invalidated` evidence/review semantics remain available where applicable; exact enum names and presentation remain governed by their existing owning contracts.

This proposal does **not** introduce a merchant-visible `reversed` or `voided` Ledger status. Refund and physical return/restock remain distinct facts; neither implies the other.

**SA-03 advisory finding:** Source 18 T3 need not be triggered by this bounded, representation-neutral engineering proposal alone. **Mission Control/Founder governance still must screen** whether any eventual normative change actually alters approved Product Truth. If a later proposal introduces a first-class merchant-visible Ledger status/label or broadens refund/restock behavior, route that specific change through T3 before adoption.

### C2. Conditional upstream acceptance path

Prepare the smallest SB-P-1.14-owned upstream interface amendment establishing governed original-linked reversal and its authoritative reader effect, without changing the six transaction types, positive amount rule or Ledger sole-writer boundary. Confirm precise compatibility with `EIS14-CMD-01/02/03`, `EIS16-RVS-01/04`, SB-P-1.17 `TXN-06/07`, and existing approval/confirmation boundaries through a separately authorized, reviewed and human-merged locked-contract change. If that exact proposal requires new merchant-visible state or broadened payment/refund behavior, stop for Founder T3 disposition first. The upstream representation, including `14-Q6(a)`, remains subject to its separate governing decision.

## D. Authority, review and stop conditions

1. This PR may merge **only as a non-governing proposal record**, if separately reviewed and Founder human merged; it must not be cited as approval of any locked EIS or Product Truth amendment. Locked upstream files, Blueprint, FCTM and EIS17 stay unchanged.
2. **Independent finding-scoped review:** existing SA-01 Security/Executor room reviews GA-04 kernel and confirmation/executor boundaries with contribution disclosure; existing SA-03 Finance room reviews GA-05 accounting/reversal and T3 framing with contribution disclosure; a distinct contribution-separated Source18 Governance reviewer screens amendment route and T1–T8. No broad restart.
3. Founder decides any new Product Truth, exact upstream contract amendments and protected Ledger/executor authority. Mission Control then directs separately authorized *minimal* source-contract PR(s), independent targeted review and human merge.
4. HOLD-16/17/18 and other EIS/source/provider/runtime holds OPEN. No actual SQL implementation, deployed-ACL proof, Stage11 EIS Lock, Stage12/13 completion or implementation authorization.

**STOP — proposal preparation only.**
