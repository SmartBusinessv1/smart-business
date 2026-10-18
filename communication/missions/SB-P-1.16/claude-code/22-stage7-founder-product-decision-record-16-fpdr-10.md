# SB-P-1.16 — Founder Product Decision Record: `16:FPDR-10` (Draft for Canonical Recording)

**FOUNDER-APPROVED AT DIALOGUE LEVEL (MC-206) — NOT CANONICAL — PENDING MISSION CONTROL REVIEW, FOUNDER HUMAN MERGE AND MISSION CONTROL POST-MERGE VERIFICATION**

**Mission:** SB-P-1.16 — Financial Integrity & Credit  
**Lifecycle stage:** Source 18 v1.2, Stage 7 — T3 Founder Decision (OQ-01)  
**Prepared by:** Claude Code (Definition Actor and Stage 7 coordinator) under MC-206  
**Source of decision text:** the proposed record `claude-code/21-stage7-oq01-founder-product-decision-record-draft.md` (blob `46c2e8be0cd612955f4a0fcf91ad8ab151180097`, canonical on `main` as a proposal by PR #970, merge `31d75b665d2dcea1a34cc7c05d5d187d5e85c58b`, merged 2026-10-18T07:25:38Z)  
**Specialist evidence:** `specialists/07-fin01-oq01-financial-integrity-review.md` (blob `1ccb95f37b77083ba18a00b81dde7b6ac1b2c6ca`, PR #970)  
**Canonical baseline:** `main@31d75b665d2dcea1a34cc7c05d5d187d5e85c58b`; repository PRIVATE  
**Approval:** the Founder explicitly approved D-1 to D-6, as recorded by Mission Control in MC-206, following MC-205. The verbatim Founder approval statement was not supplied, and no date beyond MC-206 is recorded. None is invented  
**Implementation Authorization:** WITHHELD — IMPLEMENTATION NOT AUTHORIZED.

## 0. Status and rules of this record

- **Format.** This record follows the canonical Founder Product Decision Record (`claude-code/09-stage3-founder-product-decision-record-draft.md`, blob `30b19a80`). It is a **separate record** for the tenth decision, so the canonical nine-decision record is not edited.
- **Not canonical yet.** It has no effect until Mission Control review, Founder human merge to `main` and Mission Control post-merge verification. The Founder's own direction ("do not change canonical files yet", MC-199) is respected: this record changes no canonical file.
- **Verbatim text.** Founder statements and the approved decision text are reproduced verbatim inside `text` blocks, so Markdown cannot alter them. Nothing inside a `text` block has been edited. Commentary outside the blocks is the Definition Actor's and is not Founder text.
- **No other change.** This record changes no source contract, Source 11 entry, Build Plan, approved Blueprint, FCTM row or EIS. The reconciliation those need is planned separately (`claude-code/23-stage7-fpdr10-canonical-registration-and-reconciliation-plan.md`).

## 1. Decision inventory

| ID | Question | Option approved | Resolves | Decision text source | Founder approval | Mission Control acknowledgement |
|---|---|---|---|---|---|---|
| `16:FPDR-10` | OQ-01 Excess repayment and customer advance | Combination of options A and B (Founder statement 1) | OQ-01; Stage 6 T3-W1; SB16-B6-05 (excess part); `14-§18-3` outcome | Founder statements (MC-202); D-1 to D-6 from the proposed record (PR #970) | Explicit approval of D-1 to D-6, recorded in MC-206 | MC-206 |

## 2. Decision entry

### 2.10 `16:FPDR-10` — OQ-01 Excess repayment and customer advance

**Founder statements (verbatim, as supplied by Mission Control in MC-202):**

```text
a combination of options A and B
```

```text
MC-199 Founder clarification for OQ-01: Retain Owner-confirmed excess as a separate customer advance until explicitly applied or refunded. Record the Founder direction with T3 and upstream Ledger-contract screening; do not change canonical files yet.
```

**Options referred to by statement 1** (OQ-01 packet, Stage 7 register §7.2): (A) clarify-and-stop only; (B) an Owner-confirmed customer advance recorded as a distinct Ledger fact.

**Approved decision text (D-1 to D-6, verbatim from the proposed record, approved by the Founder per MC-206):**

```text
D-1 Excess repayment stops automatic financial commitment and requests Owner clarification
D-2 The Owner may explicitly retain the excess as a separate customer advance
D-3 The advance persists until explicit Owner-authorized application or refund
D-4 No automatic income recognition, offset, refund or AI decision
D-5 No automatic advance resulting from historical corrections
D-6 Permission, audit, idempotency and amount-conservation requirements are preserved
```

**Founder approval statement:** not supplied verbatim. MC-206 records: "Founder explicitly approved D-1 through D-6 of the proposed 16:FPDR-10 decision record in Mission Control following MC-205."

**Mission Control acknowledgement:** MC-206: "FOUNDER DECISION: APPROVED — D-1 THROUGH D-6." "T3: TRIGGERED — FOUNDER DISPOSITION RECEIVED."

**Provenance note.** D-1 to D-6 were first written by Mission Control (MC-200, MC-201) as an interpretation of the Founder statements. With the MC-206 approval they become the approved decision text. The two Founder statements remain its authority.

**Approved product behaviour (commentary, not Founder text):**

- **Default.** An excess never commits automatically; the write stops and the Owner is asked.
- **Owner choice.** The Owner may keep the excess as a separate customer advance.
- **Persistence.** The advance stays until the Owner explicitly applies or refunds it.
- **No automation.** Nothing automatic recognizes income, offsets, refunds or decides, and AI does not decide. A correction never creates an advance automatically.
- **Standing rules.** Permission, audit, idempotency and amount conservation apply throughout.

**Not approved by this decision: engineering representation.** FIN-01's recommended representation is specialist advice only:

- a customer-scoped `credit` with direction `owed_by_business`, sourced from the exact excess payment, with semantic subtype "customer advance";
- a distinct advance-application relation;
- refund recorded as a `repayment` settling the advance.

FIN-01 itself states that "the financial representation is a recommendation, not approved implementation architecture". The representation is fixed only through the Stage 7 Engineering Review, the EIS and independent validation.

**Not decided (optional expansion).** None of these is authorized:

- Manager delegation of retain, apply or refund;
- automatic application;
- expiry or automatic refund;
- one action applying an advance across several debts;
- customer-facing display;
- wallet, stored-value, transfer, interest or rewards features.

Each would need its own decision. Automatic application, expiry and automatic refund are excluded by D-3 and D-4.

**Mandatory safety requirements arising from the decision (FIN-01 §7, §8, §11 to §15; fixed in Stage 7 and the EIS):**

- the advance is not sales or income;
- no negative receivable;
- conservation of the received amount;
- one canonical remaining-advance calculation;
- a confirmed customer identity;
- full provenance;
- exactly-once handling: no duplicate repayment, advance, application or refund;
- atomic, confirmation-bound application with commit-time revalidation;
- correction exceptions instead of automatic advances;
- governed handling of reversals;
- Owner-reserved actions;
- no Employee visibility or action.

**Trigger record:**

- **T3:** TRIGGERED. Founder disposition received (MC-206).
- **T7:** not triggered.
- **T8:** not triggered, subject to FIN-01 §20 conditions.

**Traceability (rows this decision is to be cited on; no row added, removed or reclassified):**

| Rows |
|---|
| `14-§18-3` (primary) |
| `14-§7-2` to `14-§7-6` |
| `14-§5-7`, `14-§5-8` |
| `3-§9-12` |
| `14-§21-6` |
| `15-§11-5` |
| `15-§14-1` to `15-§14-4` |
| `14-§22-2`, `BP-§10.5-E4`, `BP-§10.5-X` |

Truth Pack / Stage 6 references: SB16-B6-05, OQ-01 / T3-W1; Stage 7 draft §20.4.6.

**Conditions and boundaries in the decision:**

- Owner control throughout; nothing happens automatically.
- The advance is separate from outstanding credit.
- Corrections never create advances automatically.
- Permission, audit, idempotency and amount-conservation rules are preserved.
- No implementation, provider, retention (U-08) or Manager-capability authorization.
- `16:FPDR-1` to `16:FPDR-9` are unchanged.

## 3. Effect boundary

- **Not canonical** until Mission Control review, Founder human merge and Mission Control post-merge verification.
- **No Product Truth or contract change.** Source 11, Contracts 03, 14 and 15, the Build Plan and GPCV are unchanged. Their reconciliation is planned in `claude-code/23-…` and needs separate authorization.
- **No Blueprint, FCTM or EIS change.** Citing `16:FPDR-10` on the rows above, revising the Blueprint and correcting the Stage 7 draft are separate, later, authorized actions.
- **Interim rule.** Until this record is canonical, the Stage 7 interim rule (stop and clarify; store no advance; §20.4.6) stays in force.
- **No activation or grant.** No Manager or other capability is granted. No provider is selected.
- **Holds unchanged:** U-08 / DC-11, U-10, R15-11, F-7, the 41 `DPAY` rows, the 7 `DNTF` rows. All 349 `IN SCOPE` commitments and all 63 Stage 7 findings remain as they are.

**Stage 7 Final Approval: WITHHELD. Implementation Authorization: WITHHELD — IMPLEMENTATION NOT AUTHORIZED.**
