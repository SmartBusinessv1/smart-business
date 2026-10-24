# MC-507R — Founder A1/A2/B1 Bounded Contract Decisions

**Mission:** SB-P-1.17 — Stage 10 EIS Review  
**Record status:** FOUNDER DECISION RECORDED; repository authority pending independent verification, Mission Control acceptance and Founder human merge  
**Founder response:** Explicit `A1 — ACCEPT; A2 — ACCEPT; B1 — ACCEPT` in the current Mission Control conversation, accepting the exact MC-507R proposed bounded wording and safeguards, including B1's conditional interface-verification boundary.  
**Prepared by:** Mission Control; no self-merge or implementation authorized.

## 1. Authority and canonical sources

This records a Founder decision, not specialist-signoff fabrication, successful runtime verification, a source-contract amendment, or an EIS Lock. Under Source 18 v1.2 this file has no durable canonical normative effect until independently reviewed, accepted by Mission Control and human-merged to `main`.

- Baseline `main`: `0d97a494eda4c21de5d865ed50d9213dace29fad`
- SB-P-1.17 EIS: `58b0138b6bf5df35a47a3c281c39eeb26ea0fec0`
- SB-P-1.12 EIS: `c444f7509477d0e8b997af538440d93bf2ca4d72`
- SB-P-1.14 EIS: `899a0fe1f98c62bbdfa621c97cdc5e8ee3ce65d3`
- MC-502: `4f3288b701ddb88396759b0ffc7fc9e9393cc04e`
- Source 18 v1.2: `0945bda60a93c99909c3b7a247d5427ebe256011`
- MC-507Q request and specialist-evidence disposition: PR #1054 discussion comments `6385319219` and `6385217302`.

## 2. A1 — ACCEPT: GA-02 POS intake authority interpretation

The Founder accepts Owner-authorized, source-scoped POS intake delegation using the existing SB-P-1.12 `EIS-AUT-01` automation-run principal, **without adding a fifth principal or changing the kernel**.

An active Owner-issued delegation must bind the grantor membership, one business, registered POS source, permitted action/object scope and applicable limits. Verified provider authentication uniquely resolves an enabled, server-registered source and its business; payload-supplied actor, role, business or source identifiers are not authoritative. Provider credentials prove provenance, not merchant authority. The existing kernel authorizes using `integration` solely as channel; `service_role` may provide constrained execution capability, not merchant authority. Credential validity, source enabled state, delegation, current grantor authority and revocation are revalidated at consequential commit. Ambiguous/missing mapping, credential uncertainty, revoked/disabled source, cross-business substitution and conflicting/replayed payloads fail closed. Stable source-event identities, shared idempotency and audit provenance are required. Structured UDI authorized upload remains a distinct governed path.

**Effect:** Founder-level interpretation accepted for a bounded later `EIS17-POS-02` correction. `HOLD-15`, DPOS, provider and runtime-security assurance remain open; documentary acceptance is not verified implementation.

## 3. A2 — ACCEPT: GA-04 protected transaction coordinator boundary

The Founder accepts **one governed SB-P-1.17 PostgreSQL transaction coordinator** as the proposed cross-domain architecture, but only within the existing SB-P-1.12 verified-principal, kernel, confirmation, executor and serialization contracts. A single protected database invocation owns the transaction. Business/principal authority derives from trusted server records, not caller inputs. The command binds consequential confirmation, current authority epochs, deterministic compatible locking and one coherent idempotency/outcome identity, with least-privilege protected execution. Required Ledger, inventory, source-event state and authoritative linkage effects must commit together or roll back together; independent sequential API/RPC commits and direct protected caller table DML are rejected.

**Effect:** Authorizes bounded documentary specification, **conditional on B1 technical interface compatibility**. Does not certify executable privilege composition, settle nested confirmations, close `HOLD-17`, or authorize implementation.

## 4. B1 — ACCEPT: GA-04 Ledger sole-writer and conditional interface verification

The Founder accepts the principle that SB-P-1.17 coordination must preserve SB-P-1.14 `create_transaction_governed` as the **sole approved governed Ledger creation authority**. The Founder **does not claim or approve** that the existing public command can be nested unchanged.

- **Preferred compatibility route:** Demonstrate that the existing governed Ledger create command can run inside the outer PostgreSQL transaction without violating its confirmation, authorization, idempotency, executor or sole-writer semantics.
- **Conditional fallback:** If it cannot, return a separately governed, narrowly scoped upstream SB-P-1.14 amendment proposal for transaction-composable internals **behind one governed Ledger writer**, with explicit Source 18 human approval before any amendment.
- **Incompatibility:** If neither route preserves the locked clauses, identify the exact contradiction and return for Source 18 T8 disposition. No local EIS workaround or invented interface approval.

**Financial outcomes preserved:**
A. Financial and required stock effects both eligible: one authoritative Ledger posting, all required stock movements, source-event outcome and links commit atomically or none do.
B. Financial posting eligible but mapping-dependent stock genuinely ineligible: one governed Ledger posting commits coherently with a durable linked held-stock exception; no invented movement. Authorized later stock application cannot post Ledger revenue twice.
C. Financial eligibility/authority invalid: no authoritative posting.
Commit-time eligibility must not relabel a failed *required and eligible* stock operation as outcome B. Idempotency, conflict-fingerprint checks and committed-outcome lookup before retry prevent duplicates.

**Effect:** Accepts governance and financial integrity bounds, **not** a particular unverified command interface, new Ledger writer, SQL design or implementation.

## 5. Targeted post-merge verification and release sequence

1. **Independent documentary reviewer**, with contribution disclosure, compares this one-file decision record to the actual Founder response, MC-507R wording, MC-502, and locked EIS provisions. Reject any expansion beyond accepted A1/A2/B1; report exact branch/head/blob and diff.
2. **Mission Control** verifies reviewer finding, CI, changed-file scope and same reviewed head, then records readiness for Founder human merge.
3. **Founder human-merges** this governance-only PR. Mission Control checks `merged_at`, merge SHA and this file's blob on canonical `main`.
4. **GA-02:** after authoritative record, issue a bounded `EIS17-POS-02` EIS-only correction with SA-04 source-bound safeguards, independent targeted review and separate human merge. Keep `HOLD-15` and DPOS/provider/runtime proof open.
5. **GA-04:** obtain precise SB-P-1.14 interface-composability and SB-P-1.12 executor confirmation through the authorized technical contract-verification route; do not equate A2/B1 Founder acceptance with successful compatibility proof. Only then authorize narrowly bounded `EIS17-TXN-03` correction, preserving `HOLD-17`, `HOLD-16` and Source 18 T8 watch. Any upstream amendment requires its own governance.
6. GA-05 reversal, GA-06 closing and residual T8-03 remain separate.

**Explicit STOP:** No automatic domain-owner signature, no changed source contracts, no EIS edit, no SQL/RLS/migration, no provider activation, no hold closure, no Stage 11 EIS Lock, no implementation authorization and no self-merge.
