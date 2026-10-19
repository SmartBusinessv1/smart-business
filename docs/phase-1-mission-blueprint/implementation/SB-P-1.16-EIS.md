# SB-P-1.16 — Engineering Implementation Specification

STATUS: DRAFT — STAGE 10 MISSION CONTROL REVIEW REQUIRED

**IMPLEMENTATION NOT AUTHORIZED.** This EIS specifies how the locked SB-P-1.16 Blueprint is to be built. It authorizes no code, SQL, migration, provider activation, test execution, deployment or production change.

## 1. Document Metadata

| Field | Value |
|---|---|
| Mission | SB-P-1.16 — Financial Integrity & Credit |
| Document | Engineering Implementation Specification (EIS) |
| Lifecycle stage | Source 18 v1.2 Stage 9 — EIS Creation |
| Status | `DRAFT — STAGE 10 MISSION CONTROL REVIEW REQUIRED` |
| Author | Claude Code (Stage 9 EIS drafter; also author of Stages 2–7 and the Stage 8 package; not independent review) |
| Authorization | MC-260 (Stage 9 EIS execution), MC-261 (continuation) |
| Related Product Blueprint | `docs/phase-1-mission-blueprint/completed/SB-P-1.16.md`, blob `305571a66af4a4683bd967466fc83645de5dfbd3` (`APPROVED — LOCKED`, Stage 8; Founder F-1 to F-7) |
| Stage 8 record | `communication/missions/SB-P-1.16/mission-control/10-stage8-founder-approval-and-lock-record.md`, blob `dea8d9f5711a468a254584fc1e4f91c38bc5ac87` |
| Canonical FCTM | `communication/missions/SB-P-1.16/claude-code/02-stage2-populated-fctm.md`, blob `94dd52202ad040f64394f07f95389d02ffcc5dd0`: 555 rows, 349 `IN SCOPE` |
| Founder decisions | `16:FPDR-1` to `16:FPDR-9` (`claude-code/09-…`, blob `30b19a80`); `16:FPDR-10` (`claude-code/22-…`, blob `bd5a5f0c`); Stage 8 F-1 to F-7 including OQ-04 Option C |
| Requirements | 135 (`EIS16-*`) |
| Baseline | `main@27baf1b34debbc03a4a0a1b8577f1cb6ec677716` |
| Next gate | Stage 10 — Mission Control EIS review; implementation remains NOT AUTHORIZED |

## 2. Purpose and Authority

This EIS realizes the locked Blueprint Sections 1–21, including the Stage 7 Engineering Review v0.2 (corrections C-01 to C-28) and the 63 accepted specialist findings, as testable engineering requirements. It changes no Product Truth, FCTM row, disposition, build commitment, commercial classification, mission assignment or Founder decision. It restarts no review.

**Basis codes.** Every requirement states its basis so that proposals are never read as built or approved:

| Code | Meaning |
|---|---|
| PR | Approved product requirement (locked Blueprint, FCTM, Founder decision or Mission Control ruling) |
| AF | Existing architectural fact or locked upstream specification (specified, not built) |
| TR | Proposed technical representation for Stage 10 review |
| UQ | Unresolved technical question (upstream or engineering) |
| PD | Provider-dependent; waits for separate provider authorization |
| FC | Founder-controlled product decision or boundary |

**FIN-01.** Every customer-advance representation and the settlement mechanism are **PROVISIONAL** engineering proposals (Stage 8 F-5). They are not an approved schema or Ledger representation and are finalized only after the SB-P-1.14 findings and Stage 10 review.

## 3. Canonical Inputs Read

Source 18 v1.2 (`merge/active/18_SB-P_Mission_Lifecycle_and_Delivery_Framework.md`, blob `0945bda6`); the locked Blueprint and Stage 8 record above; the FCTM; the Mission Truth Pack (`claude-code/04-…`, blob `4a7bfe4f`); the Founder decision records; the Stage 6 Builder Review (`claude-code/17-…`); the Stage 7 report, resolution register and v0.2 Sections 20–21 (incorporated in the Blueprint); the six specialist reviews and FIN-01 (`specialists/01` to `07`); the locked SB-P-1.12 (`c444f750`), SB-P-1.13, SB-P-1.14 (`899a0fe1`) and SB-P-1.15 EIS; Contracts 03, 14 and 15; Build Plan §5.4, §10.5 and §13.

## 4. Implementation Principles

- Consume locked upstream foundations; build nothing parallel.
- One governed write path; no client DML on protected objects.
- Balances come only from authorized Ledger facts; evidence status never moves a balance.
- Ambiguity, excess, mismatch and reversal fail closed to an Owner decision.
- Owner authority is final; delegation is explicit and object-scoped; Employees see no balances.
- AI assists and never decides.
- Nothing is claimed as built, run or verified without evidence.

## 5. Repository Baseline (at `main@27baf1b3`)

Application code, schema, tests, workflows and configuration are unchanged from the Stage 6 base `3c9a7743`: every later change is documentation. There is no credit, payment-evidence, reconciliation or advance object; `transactions` is `sale`/`purchase` with direct client insert; default grants reach `anon` (Truth Pack Δ-01 to Δ-03). SB-P-1.12 to SB-P-1.15 are specified and not implemented. CI has no recorded runs (UNVERIFIED).

## 6. Target Architecture, Interfaces and Trust Boundaries

SB-P-1.16 adds credit, payment-evidence and reconciliation components on the locked upstream foundations. Nothing here is deployed: the repository has none of these objects (Blueprint §20.3).

| Requirement | Basis | Specification | Findings | FCTM rows |
|---|---|---|---|---|
| `EIS16-ARC-01` | AF/PR | **Consume, never duplicate.** Components follow the Blueprint §20.3 map and consume the SB-P-1.12 kernel, participant identity, bindings and confirmation primitives; the SB-P-1.13 gateway, UDI and conversation layer; the SB-P-1.14 four-state Ledger, governed commands and governed storage; and the SB-P-1.15 timezone, scheduler, reminder, notification and reader foundations. No second ledger, identity table, permission model, scheduler, reminder or messaging model is created (`14-§21-6`, `3-§15-8`). | SB16-B6-01 | 33 |
| `EIS16-ARC-02` | PR/TR | **One governed write path.** Every SB-P-1.16 financial write (credit fact, repayment, allocation, link, advance action, correction, decision record) is a governed SQL command under the SB-P-1.12 narrow-executor contract that, in one transaction, revalidates authority (`EIS-KER-09`, `EIS-CNF-02`), consumes the confirmation binding (`EIS-CNF-01`), registers idempotency (`EIS-CNF-04`), writes the change and its append-only audit event. There is no client `INSERT`, `UPDATE` or `DELETE` on any protected table (DC-04). | SB16-B6-07 | 35 |
| `EIS16-ARC-03` | AF/TR | **Trust zones and data flow.** (1) Browser and native app: untrusted input. (2) TanStack Start server functions on the Cloudflare target: resolve the principal server-side (`EIS-KER-02`); never accept actor, business or role from a request body or provider payload. (3) Postgres: RLS and governed commands are the only data boundary. (4) Provider intake endpoint: untrusted until signature, freshness and binding verification succeed. (5) AI gateway (SB-P-1.13): output is untrusted proposal text. Data flows only inward through validation and outward through permission-scoped readers. | SR02-05 | 13 |

## 7. Customer Identity Reference

| Requirement | Basis | Specification | Findings | FCTM rows |
|---|---|---|---|---|
| `EIS16-ID-01` | PR/TR | **Composite participant reference.** Credit-bearing Ledger rows (a `sale` whose current `payment_method` is `credit`, a `credit` with direction `owed_to_business`, a `repayment`) carry a business-scoped composite reference `(business_id, participant_id)` to the SB-P-1.12 participant (`EIS-ID-03`). Proposed representation: nullable columns on the transactions family added after SB-P-1.14 M14-1, written only by the governed create, correct and attribute commands inside the Ledger transaction (`DTX`). A separate link table written by the same commands is the recorded alternative; Stage 10 may choose either (`14-§21-6` holds for both). | SB16-B6-02 | 9 |
| `EIS16-ID-02` | PR | **No automatic identity resolution.** An ambiguous name or phone returns a clarification listing candidates; no suggestion becomes an assignment; payer or payee hints are candidate signals only (`16:FPDR-1`). | SR06-02 | 24 |
| `EIS16-ID-03` | PR/TR | **Repayment participant is derived (CF-1).** A `repayment` has no independently settable participant: the command derives it from the settlement target and rejects any request that supplies a different one. | SR01-06 | 8 |
| `EIS16-ID-04` | PR | **Owner-only historical attribution (`16:FPDR-2`).** The `credit.attribute_historical` command previews the exact sale, the chosen participant and the resulting balance under a confirmation binding; it writes only the identity reference and an audit event, preserves row identity and creates no sale, income or repayment. A multi-row attribution lists and binds every row. There is no automatic or bulk assignment. | SB16-B6-06 | 11 |
| `EIS16-ID-05` | PR/TR | **Unattributed disclosure.** Historical credit-method sales without a participant reference are reported as a separate "unattributed credit" total, never inside any customer balance. The attribution preview states which rows are included and which facts are missing. | SR01-07 | 12 |

## 8. Credit Facts on the Shared Ledger

| Requirement | Basis | Specification | Findings | FCTM rows |
|---|---|---|---|---|
| `EIS16-LDG-01` | AF/PR | **Four-state model reused.** Credit facts use SB-P-1.14 `EIS14-LDG-01` to `-04`: a credit-method sale is one `sale` row; history is never rewritten, converted or duplicated; no backfill creates `credit` rows (`EIS14-LDG-04`). | SB16-B6-01 | 12 |
| `EIS16-LDG-02` | AF | **Credit direction.** Customer credit uses direction `owed_to_business`. Supplier-side `owed_by_business` credit belongs to SB-P-1.17; the direction itself is not supplier-only (`EIS14-LDG-02`). | — | 12 |
| `EIS16-LDG-03` | PR | **Capture through the governed create command.** Native capture and SB-P-1.13 conversation and voice capture call the single governed create command (`EIS14-CMD-01`), returning a structured preview and confirmation before commit. Capture never writes a free-text name in place of a participant reference when a participant is chosen. | SB16-B6-20 | 6 |

## 9. Authoritative Balances and Financial Invariants

| Requirement | Basis | Specification | Findings | FCTM rows |
|---|---|---|---|---|
| `EIS16-BAL-01` | PR/TR | **Single hardened definition.** One SQL-level definition (view or `SECURITY INVOKER` function, born hardened) on the `EIS14-TOT-01` pattern: target outstanding = target current amount − Σ active repayments; customer balance = Σ outstanding over attributed open targets. Targets are current values of credit-method `sale` rows and `owed_to_business` `credit` rows after governed corrections. | SB16-B6-04 | 3 |
| `EIS16-BAL-02` | PR | **Verification never moves a balance (MQ-01 reading A).** Balances are computed only from authorized Ledger facts. Evidence-verification status is a separate property shown beside the balance. An ordinary authorized repayment reduces the balance without verification; an evidence-backed repayment reduces it only by its verified amount; evidence alone never creates or changes a financial fact (`16:FPDR-3`). | SR01-02 | 24 |
| `EIS16-BAL-03` | PR/TR | **Distinct measures.** Outstanding, collected and held advance are three measures defined once; a held advance is neither outstanding nor collected; repayments count in no sales or income measure (`EIS14-TOT-01`). | SR01-08 | 20 |
| `EIS16-BAL-04` | PR | **Correction guard (C-01).** For every target, Σ active repayments ≤ current target amount, and every active repayment references a currently valid `EIS14-LDG-03` target. Every command that can change an operand (record repayment, allocation, correction of a repayment amount or target, correction of a target amount, payment method, type or direction, attribution, advance application or refund) checks this in the same transaction before commit. A violation stops and returns a clarification; a correction that would leave excess raises the `16:FPDR-10` D-5 exception (Section 12). Whether the guard needs an `EIS14-CMD-02` extension is upstream question 14-Q6. | SR01-01, SR03-02 | 17 |
| `EIS16-BAL-05` | PR | **Reader parity.** Ask CFO, Daily Intelligence, threshold warnings, the review queue and exports read only the Section 9 definition (DC-07). A parity test proves every reader returns the same figures for the same facts. | SB16-B6-21 | 20 |

## 10. Due Dates and Ageing

| Requirement | Basis | Specification | Findings | FCTM rows |
|---|---|---|---|---|
| `EIS16-DUE-01` | PR/TR | **Optional `due_on` (`16:FPDR-5`).** A nullable date on credit-bearing targets, set at capture or by an audited governed command. No default value, system period or mandatory entry. | SB16-B6-03 | 3 |
| `EIS16-DUE-02` | PR | **Overdue predicate.** Overdue holds only when `due_on` < business-local today and the target outstanding > 0. Business-local today comes from the Owner-confirmed timezone (`EIS15-TZ-*`); without one, overdue is not computed and credit age is shown instead (DC-02). | SB16-B6-03 | 2 |
| `EIS16-DUE-03` | PR | **Ageing.** Credit age is measured from `transaction_date` per open target. Threshold comparison is separate from due-date status. | — | 2 |
| `EIS16-DUE-04` | TR | **`due_on` lifecycle.** A governed correction of the target amount keeps `due_on`; a correction that makes the row no longer a credit target makes `due_on` inapplicable without deleting it; the migration adds the column with no backfill. | SR04-07 | 2 |

## 11. Repayment and Allocation

| Requirement | Basis | Specification | Findings | FCTM rows |
|---|---|---|---|---|
| `EIS16-REP-01` | AF/PR | **One settlement target.** Each `repayment` references exactly one settlement target in the same business through a composite reference, revalidated at commit (`EIS14-LDG-03`). A partial or multiple repayment is its own row. | — | 8 |
| `EIS16-REP-02` | PR/TR | **Allocation command.** A lump sum is recorded by one governed command taking `(target, amount)` pairs that creates one repayment per target atomically. Each allocation ≤ that target's outstanding amount; allocations sum to the payment amount; one idempotency key and one confirmation binding cover the command. Linked evidence carries one link per allocation (Section 18). | SR01-04 | 8 |
| `EIS16-REP-03` | PR | **Recording authority (MQ-07).** The Owner records repayments. A Manager records repayments only while holding `credit.record_repayment` within a valid, object-scoped delegation. `credit.propose_repayment` creates a proposal only and never confers recording authority. | SR02-07 | 12 |
| `EIS16-REP-04` | AF | **Retry deduplication.** Same-intent retries are deduplicated by command idempotency (`EIS14-IDM-01`, `EIS-CNF-04`); a replay returns the original outcome. | — | 8 |

## 12. Excess Payment and Customer Advance (`16:FPDR-10`)

Product behaviour D-1 to D-6 is Founder-approved. Every representation below marked TR is a **PROVISIONAL** FIN-01 engineering proposal (Stage 8 F-5), finalized only after the SB-P-1.14 findings 14-Q2 to 14-Q5. Requirement IDs `EIS16-CAD-*` are distinct from the Blueprint §15.6 acceptance cases ADV-01 to ADV-10.

| Requirement | Basis | Specification | Findings | FCTM rows |
|---|---|---|---|---|
| `EIS16-CAD-01` | PR | **Excess stops (D-1).** A repayment or allocation larger than the selected targets' outstanding amount stops before commit and returns an Owner clarification offering: correct the amount, allocate to other open targets, retain the excess as a customer advance (Owner only), or cancel. Nothing is committed until the Owner chooses. | — | 26 |
| `EIS16-CAD-02` | PR | **Excess is not a mismatch.** An excess (authorized repayment above outstanding) is a D-1 clarification; a verification mismatch (evidence conflicting with its record) is a Section 15 verification state resolved in review. Neither creates an advance, a repayment or a balance change automatically; evidence above outstanding goes to review and becomes part of an advance only through explicit Owner retention. | — | 26 |
| `EIS16-CAD-03` | PR/TR | **Retain (D-2, D-3, M-1).** An Owner-only command retains the excess as a separate customer advance that persists until explicit application or refund, with one remaining-advance calculation. PROVISIONAL representation: a customer-scoped `owed_by_business` `credit` row (14-Q2), reported as the held-advance measure. | — | 5 |
| `EIS16-CAD-04` | PR/TR | **Apply (M-2).** An Owner-only command applies an advance to a later open credit under the Section 21 locks and invariants. PROVISIONAL representation: a separate audited application relation that leaves the one-target repayment rule intact (14-Q3). | — | 4 |
| `EIS16-CAD-05` | PR/TR | **Refund (M-3).** An Owner-only command records that the business refunded an advance; the system executes no payout. PROVISIONAL representation: a `repayment` targeting the advance, excluded from sales, income and collected measures (14-Q4); no new `transaction_type` (14-Q5). | — | 3 |
| `EIS16-CAD-06` | PR | **No automation (D-4, D-5).** No automatic income recognition, offset, refund or AI decision; no advance arises automatically from a historical correction — such a correction raises the D-5 exception and waits for the Owner. | — | 26 |
| `EIS16-CAD-07` | PR/UQ | **Conservation and audit (D-6).** Per customer, Σ retained − Σ applied − Σ refunded = remaining advance ≥ 0, enforced under the target lock; every action is idempotent and audited. A reversal of a recorded refund is held as a governed exception (AC-3); its treatment is unresolved. | — | 26 |
| `EIS16-CAD-08` | PR | **Acceptance.** Blueprint §15.6 cases ADV-01 to ADV-10 are verification obligations of this section (Section 30), independent of the final representation. | — | 26 |

## 13. Thresholds and Warn-Not-Block

| Requirement | Basis | Specification | Findings | FCTM rows |
|---|---|---|---|---|
| `EIS16-THR-01` | PR | **Owner configuration.** Threshold configuration is Owner-only (`credit.configure_threshold`) and audited. This EIS sets no threshold value. | — | 17 |
| `EIS16-THR-02` | PR | **Warn, never block by default.** When a credit sale would cross the threshold, the flow shows factual context only — outstanding balance, oldest unpaid age, comparison with the Owner's threshold (DC-01) — with no risk score or label. The Owner proceeds, overrides or declines (`credit.decide_override`); the decision is recorded. No blocking path exists by default (`14-§3-3`). | SB16-B6-18 | 17 |
| `EIS16-THR-03` | PR | **Re-evaluation at confirmation (DC-08).** The warning is recomputed at commit under the Section 21 serialization; a changed result requires re-confirmation. | SR03-12 | 17 |
| `EIS16-THR-04` | PR | **Routing.** The warning goes to the Owner. An Employee recording the sale receives no balance or threshold value in the view or the command response (OQ-03). | SR02-08 | 19 |

## 14. Owner Follow-up and Communication Preparation

| Requirement | Basis | Specification | Findings | FCTM rows |
|---|---|---|---|---|
| `EIS16-FUP-01` | PR | **Factual follow-up.** Follow-up lists derive from Section 9 facts and recorded due dates, in dignified language with no shaming label (`14-§3-4`). | — | 7 |
| `EIS16-FUP-02` | PR | **Preparation only.** Customer messages are drafts with states `draft` and `approved` and the approving actor; approval is Owner-only (`credit.approve_communication`, current state under `16:FPDR-8` §2). No `sent` or `delivered` state exists, and nothing is transmitted, until an approved channel exists (`DNTF`; SB-P-1.20). | SB16-B6-19 | 9 |
| `EIS16-FUP-03` | AF | **Shared reminder engine.** Scheduled follow-up reminders use the SB-P-1.15 reminder and scheduler foundations (`DSCH`); no feature-specific scheduler. | SB16-B6-16 | 7 |

## 15. Payment-Evidence Record, Provenance and Verification States

| Requirement | Basis | Specification | Findings | FCTM rows |
|---|---|---|---|---|
| `EIS16-EVD-01` | PR/TR | **Normalized evidence record.** Fields: business; adapter or provider kind; provider-account binding reference; external event ID; external payment reference (UTR where available); amount in minor units; currency; direction; occurred-at; received-at; source authentication; provider status; verification state; review provenance; raw-evidence pointer into SB-P-1.14 governed storage; idempotency key; payer, payee and account hints (Section 25). | SB16-B6-13 | 12 |
| `EIS16-EVD-02` | PR | **Four independent concepts.** Source authentication (`provider_authenticated`, `merchant_submitted`, `unauthenticated`), provider status, verification state and review provenance are separate fields with separate setters (ingestion; provider event; matching and review; review command). | SB16-B6-12 | 15 |
| `EIS16-EVD-03` | PR/TR | **Verification state machine.** States follow Contract 15 §4: pending or unverified; evidence received; matched or verified; ambiguous or review required; mismatched; unlinked; reversed or invalidated. Transitions are only those in the Stage 10-reviewed transition table; every transition is audited. A verified part-payment (verified amount below outstanding with matching direction, currency and identity signals) and a mismatch never share a label (`16:FPDR-3`). | SR01-05 | 10 |
| `EIS16-EVD-04` | PR | **Upload ceiling (OQ-04 Option C).** Merchant-submitted evidence can reach "linked after human review" and is always labelled human-reviewed or merchant-submitted; it never receives a provider-authenticated or provider-verified label (`16:FPDR-6` §3; `16:FPDR-9` §7). | — | 22 |
| `EIS16-EVD-05` | PR | **Exact amounts.** A Ledger amount (`NUMERIC(12, 2)`, INR) is compared only after exact minor-unit conversion when the currency is INR. Other currencies are recorded as unsupported or mismatched and never rounded. | SB16-B6-13 | 12 |
| `EIS16-EVD-06` | PR/UQ | **Preservation (MQ-03).** Validly submitted payment evidence under review or awaiting matching is never discarded by the temporary-upload staging grace. Proposed mechanism: explicit submission is the `EIS14-RET-01` confirmation that promotes the object to durable storage, whatever the link outcome; unsubmitted drafts stay under the grace. Compatibility is held for this EIS's Stage 10 review (14-Q1; watch T2-W1). No retention period or deletion authority is set. | SR06-01, SR06-03 | 5 |

## 16. Evidence Sources, Provider-Account Binding and Intake

| Requirement | Basis | Specification | Findings | FCTM rows |
|---|---|---|---|---|
| `EIS16-SRC-01` | PR/TR | **Provider-agnostic adapter contract.** `verify` (signature and freshness), `normalize`, `fetch_settlement`, `map_status`. Provider-specific code stays in the integration layer (`16:FPDR-6` §7). A fake adapter passes the same contract tests (`15-§24-3`). No provider is selected. | SR05-08 | 17 |
| `EIS16-SRC-02` | PR/PD | **Binding.** A provider-account binding `(business_id, binding_id)` (`EIS-ID-05`) is created by the Owner (`recon.manage_provider_binding`), is unique per provider and external account, and activates only after the Owner proves control of the account. | SR05-01 | 13 |
| `EIS16-SRC-03` | TR/UQ/PD | **Accept-then-process intake.** (1) A server-only receipt step verifies signature, freshness and binding, resolves the business only from the verified binding and stores the raw event. (2) Processing runs as an `EIS-AUT-01` automation principal derived from an Owner-enabled integration rule bound to the binding, on channel `integration` (`EIS-KER-06`), with `EIS-CNF-06` narrow failure; it records and classifies evidence and never changes the Ledger. Open: 12-Q1 and 12-Q2 (watch T2-W2). | SR02-04, SR05-03 | 13 |
| `EIS16-SRC-04` | PR | **Failed verification is not evidence.** A request failing verification is at most a bounded security-log entry keyed by the claimed binding, with minimal fields and volume limits; it is never an evidence item, review item, matching input or measure. | SR02-06 | 13 |
| `EIS16-SRC-05` | PD/UQ | **Secrets.** Per-binding secrets are held server-side only, never in client code, the repository or migrations. The storage home is a Mission Control infrastructure choice and is open. | SR02-05, SR05-02 | 13 |
| `EIS16-SRC-06` | AF/PR | **Upload path.** Merchant uploads enter through SB-P-1.14 governed storage and UDI; the business-scoped content fingerprint flags duplicates only (`EIS14-IDM-02`); uploads always need human review (DC-12). | SR05-11 | 13 |
| `EIS16-SRC-07` | PR | **Deferred channels (`16:FPDR-9`).** No generic direct-bank API or standalone bank-email adapter is designed or built. The affected rows stay `IN SCOPE`, traced and unassigned; F-7 stays open. | SR05-10 | 4 |
| `EIS16-SRC-08` | PD | **Activation gate.** Provider activation needs separate authorization and evidence for every Build Plan §5.4 item: selection and terms, credentials and secret home, routing and proof of account control, a kill switch that stops intake while preserving received evidence, disconnect, rollback, outage recovery and support. `DPAY` stays NOT AUTHORIZED. | SR05-09 | 44 |

## 17. Deterministic Matching

| Requirement | Basis | Specification | Findings | FCTM rows |
|---|---|---|---|---|
| `EIS16-MAT-01` | PR/TR | **Deterministic candidates.** Candidate generation over open targets uses amount, reference, time window, direction, identity hint and method; it is deterministic for the same inputs and versioned; every candidate list carries an explanation. Windows are configuration, not fixed historical formulas (`15-§7-9`). | SB16-B6-11 | 12 |
| `EIS16-MAT-02` | PR | **Automatic link limits.** Only a strong unique match may link automatically, and only as link type (1) or (3), which changes verification status and never a financial fact. Everything else goes to review. | — | 12 |
| `EIS16-MAT-03` | PR | **No AI resolution.** AI may explain candidates; it never chooses a match. | — | 12 |

## 18. Linking and Review

| Requirement | Basis | Specification | Findings | FCTM rows |
|---|---|---|---|---|
| `EIS16-LNK-01` | PR | **Link types.** (1) Evidence verifies an existing repayment or credit target; (2) authorized create-and-link; (3) evidence verifies a sale paid at the time of sale. A link is a property of the existing record and never a second financial transaction (`15-§8-7`). Each link carries a linked amount. | SR01-02 | 11 |
| `EIS16-LNK-02` | PR | **Atomic create-and-link.** Type (2) is one governed command, explicitly invoked by an authorized actor, that creates exactly one repayment through `EIS14-CMD-01` and its link in one transaction, idempotent on the evidence identity, after presenting existing unverified repayments on that target as candidates. | SR03-06 | 11 |
| `EIS16-LNK-03` | PR | **Linked-amount invariants.** Σ active linked amounts per evidence item ≤ evidence amount; one link per allocation when evidence backs an allocation group. | SR01-04 | 11 |
| `EIS16-REV-01` | PR | **Review queue.** Ambiguous, mismatched and unlinked items are presented with candidates and explanations. Resolution is by the Owner, or a Manager holding `recon.resolve_assigned_match` for that evidence, under a single-use binding covering evidence, candidate set, candidate versions, actor and authority epochs (DC-06). | SB16-B6-14 | 32 |
| `EIS16-REV-02` | PR | **No auto-creation.** Ambiguous business meaning never creates income or expense (`15-§11-5`); unlinked evidence is preserved. | — | 19 |
| `EIS16-REV-03` | TR | **Concurrent resolution.** The loser of concurrent resolutions receives a defined "already resolved" outcome; supersession of a link is a governed, audited transition. | SR03-05 | 19 |

## 19. Idempotency and Exactly-Once Financial Meaning

| Requirement | Basis | Specification | Findings | FCTM rows |
|---|---|---|---|---|
| `EIS16-IDM-01` | TR | **Three layers.** (1) Receipt: (business, binding, external event ID) with stored payload fingerprint; same ID with a different payload is a recorded conflict, never applied; keys register only after verification. (2) Payment identity: one provider-authenticated item per (business, binding, external payment ID); later events append history. (3) Cross-source correlation on (business, normalized reference or UTR) and the content fingerprint; an active link on a correlated item stops the commit and routes to review; nothing merges automatically. | SR03-03, SR03-08 | 7 |
| `EIS16-IDM-02` | AF | **Command keys.** (business, actor, operation, key, payload fingerprint) per `EIS-CNF-04`; event-derived commands use keys derived from the receipt key; replay returns the original outcome (DC-05). | — | 37 |
| `EIS16-IDM-03` | TR | **Single key-scope scheme (CF-5).** One scheme across provider, binding and actor scopes, written with the corrected precedents; a collision is rejected, never merged. | SR05-06, SR03-07 | 7 |

## 20. Reversals, Refunds, Disputes and Settlement

| Requirement | Basis | Specification | Findings | FCTM rows |
|---|---|---|---|---|
| `EIS16-RVS-01` | PR | **Fail-closed reversal.** A refund, reversal, dispute or chargeback is new evidence linked to the original; the original moves to `reversed/invalidated` with history kept; the link and target are flagged for Owner review; the Ledger and balance change only through an Owner-run governed correction (`15-§13-*`; `16:FPDR-6` §6). | SB16-B6-15 | 5 |
| `EIS16-RVS-02` | TR | **Ordering (CF-3).** An older or out-of-order event never overrides a later state; conflicts go to review. | SR03-04, SR05-04 | 5 |
| `EIS16-RVS-03` | TR/FC | **Partial and dispute states (CF-4).** A state model for partial refunds and dispute lifecycles, routed to Owner review with no Ledger change, with no new merchant-facing label (MQ-04). | SR05-05 | 5 |
| `EIS16-RVS-04` | UQ | **Governed void.** A reversed repayment is expressed by a governed void that keeps history, pending 14-Q6(a) (watch T8-W2). Until then the reversal stays flagged with no Ledger change. | SR01-03 | 5 |
| `EIS16-STL-01` | PR/PD/FC | **Settlement.** Settlement evidence is a separate kind with lines that match payment evidence, not sales; fees, taxes and adjustments are explained variance (`15-§10-2`); never shown as funds in the bank; no automatic or pre-filled expense entry (OQ-02, open until provider authorization). Source authentication and line detail are provider-dependent and the mechanism is PROVISIONAL. | SR05-07 | 4 |

## 21. Concurrency

| Requirement | Basis | Specification | Findings | FCTM rows |
|---|---|---|---|---|
| `EIS16-CNC-01` | PR/TR | **Serialization points.** (a) Evidence-item row lock for linked-amount sums; (b) target row lock for repayment sums and target validity; (c) binding row lock for single-use consumption. Every writer of a guarded quantity takes the target lock and re-evaluates before writing. | SR03-01, SR03-02 | 19 |
| `EIS16-CNC-02` | TR | **Total lock order.** Authority rows (`FOR SHARE`, `EIS-CNF-02`) → key-scoped transaction lock (business, operation, idempotency key) → evidence items by ascending UUID → Ledger targets by ascending UUID → binding row. Isolation: READ COMMITTED with explicit row locks; every guarded aggregate is read after its lock is held. Stage 10 may substitute an equivalent order with a written deadlock argument. | SR03-01 | 32 |
| `EIS16-CNC-03` | PR | **Version-bound confirmation.** Binding fingerprints include each target's row version; a correction between preview and commit forces re-confirmation (DC-06). | — | 14 |
| `EIS16-CNC-04` | AF/UQ | **Commit revalidation.** Permission, object scope, state and binding fingerprints are revalidated at commit (`EIS-KER-09`, `EIS-CNF-02`); revocation before commit blocks only the pending action (`15-§25-8`). New object-scope facts join the `EIS-CNF-02` serialized set (12-Q3). | SR03-09 | 13 |

## 22. Authorization: Owner, Manager, Employee, Customer

| Requirement | Basis | Specification | Findings | FCTM rows |
|---|---|---|---|---|
| `EIS16-AUTHZ-01` | PR/TR | **Capability registry.** Owner-reserved and registered non-delegable (so `EIS-KER-04` cannot grant them): `credit.configure_threshold`, `credit.decide_override`, `credit.attribute_historical`, `recon.manage_provider_binding`, `credit.approve_communication`, and the customer-advance retain, apply and refund actions (identifiers proposed). Every designed action maps to an Owner-reserved capability, one of the six `16:FPDR-7` capabilities, or Owner-only pending a decision. | SR02-07 | 16 |
| `EIS16-AUTHZ-02` | PR | **Scoped Manager delegation (`16:FPDR-7`; MQ-07).** `credit.view_assigned_balances`, `credit.propose_repayment`, `credit.record_repayment`, `recon.review_assigned_evidence`, `recon.view_assigned_cases`, `recon.resolve_assigned_match` are separately grantable and object-scoped; none is implied by the Manager role (DC-09); proposal never confers recording; advance actions are never delegated. | SB16-B6-17 | 9 |
| `EIS16-AUTHZ-03` | PR | **Employee confidentiality (OQ-03).** An Employee may record a permitted credit sale through the existing create capability (`EIS14-LDG-06`); command responses exclude balance, outstanding, threshold and advance values; no evidence or reconciliation visibility; `16:FPDR-4` does not expand access. | SR02-08 | 22 |
| `EIS16-AUTHZ-04` | PR | **Customer.** No Ledger capability; a participant only in merchant-approved communication (`3-§11-6`). | — | 9 |
| `EIS16-AUTHZ-05` | AF | **Server-derived authority.** Every principal comes from `EIS-KER-02`; no actor, business or role from request bodies or provider payloads. | — | 18 |
| `EIS16-AUTHZ-06` | PR | **Revocation.** Grants, assignments and object scope are revalidated at commit; revocation blocks only the pending action (`16:FPDR-7` §4). | — | 22 |
| `EIS16-AUTHZ-07` | PR | **Platform and support (CF-2).** No support write path; any support read follows the SB-P-1.12 support-grant model (`15-§17-4`); the EIS security matrix carries the row. | SR02-10 | 12 |
| `EIS16-AUTHZ-08` | PR | **Raw evidence capability.** Access to raw evidence objects, which may hold third-party data, is separate from access to the evidence record. | SR06-05 | 2 |
| `EIS16-AUTHZ-09` | FC | **Grant experience (R15-11).** No merchant-facing grant screen is assumed; one SB-P-1.12 grant model serves SB-P-1.15 and SB-P-1.16. | — | 9 |

## 23. Security, Tenant Isolation and Birth-Safe Objects

| Requirement | Basis | Specification | Findings | FCTM rows |
|---|---|---|---|---|
| `EIS16-SEC-01` | AF | **Birth-safe objects.** Every new object is created and hardened in one migration transaction per `EIS15-SEC-01`, with effective-access proof per `EIS15-SEC-02`. | SB16-B6-08 | 110 |
| `EIS16-SEC-02` | PR | **Privilege closure (C-09).** `PUBLIC` and `anon` hold no privilege of any type on protected tables, views, sequences and functions; `authenticated` holds only approved `SELECT` (through kernel RLS) and `EXECUTE`; all other privilege types are revoked, including on existing `transactions`, `transaction_correction_events` and `businesses`. Direct mutation is closed (`EIS14-CMD-03`); no client can set `creator_id`, `created_at`, `id`, `notification_status` or `notification_sent_at`. Live state is evidence-held (P-2, P-3). | SR02-01, SR04-02, SR02-02 | 23 |
| `EIS16-SEC-03` | AF/PR | **RLS and composite keys.** Kernel-based deny-by-default RLS on every new table (`EIS-ISO-01`); every business-scoped reference is composite `(business_id, id)`, which presupposes that key on the Ledger table; cross-business access is denied on every surface including background and integration jobs. | SR02-03 | 20 |
| `EIS16-SEC-04` | AF | **Service role confinement.** Only inside `EIS-ISO-04` privileged operations bound to a decision record; never for ordinary reads or as a principal source; a source-complete handler inventory, negative tests and privilege narrowing are an Implementation Authorization precondition (P-4). | SR02-09 | 11 |
| `EIS16-SEC-05` | PR | **Cross-business matrix.** Tests cover Owner, Manager with and without each scope, two Managers with different scopes, Employee, removed member, anonymous caller and service role across every reader and command. | — | 11 |
| `EIS16-SEC-06` | PR/PD | **Webhook validation.** Signature with the binding's secret, freshness window and replay key; business from the verified binding only; raw payload kept as evidence only after verification. | SB16-B6-09 | 13 |

## 24. Corrections, Audit and Decision Records

| Requirement | Basis | Specification | Findings | FCTM rows |
|---|---|---|---|---|
| `EIS16-AUD-01` | AF/PR | **Governed correction.** All consequential changes — amounts, identity references, due dates, allocations, links — use `EIS14-CMD-02`, writing prior and new values in an append-only event (`14-§17-*`). | SB16-B6-07 | 39 |
| `EIS16-AUD-02` | PR | **Decision records.** Threshold overrides, advance actions, match resolutions and communication approvals record actor, binding, authority epochs and time. | — | 23 |
| `EIS16-AUD-03` | TR | **Legacy history.** Pre-closure correction history is labelled legacy and is not treated as reliable audit evidence. | SR04-06 | 7 |
| `EIS16-AUD-04` | PR | **AI provenance.** Any AI-assisted input or draft records its AI provenance and the confirming human. | — | 4 |

## 25. Privacy, Confidentiality and Evidence Lifecycle Boundary

| Requirement | Basis | Specification | Findings | FCTM rows |
|---|---|---|---|---|
| `EIS16-PRIV-01` | PR/TR | **Minimization.** Payer, payee and account hints are masked, truncated or a participant reference; readers return the least data needed; no unnecessary disclosure (`15-§22-5`). Permitted hint content awaits counsel. | SR06-02 | 25 |
| `EIS16-PRIV-02` | PR | **Dignity.** No credit score, risk label or shaming language; factual context only (`14-§3-4`, `14-§19-*`). | — | 19 |
| `EIS16-PRIV-03` | UQ | **Correction and de-identification path.** A path to correct or de-identify customer personal data in append-only records is a required design element pending U-08 and counsel; nothing is erased meanwhile. | SR06-04 | 4 |
| `EIS16-PRIV-04` | TR | **Draft record class.** Communication drafts holding customer financial data form their own record class for later lifecycle rules. | SR06-07 | 8 |
| `EIS16-PRIV-05` | FC | **U-08 exclusions (Stage 8 F-3, F-5).** This EIS specifies no retention duration, deletion eligibility or deleter, cancellation or non-payment treatment, backup, restoration or restored-copy deletion, export lifecycle, or upload grace beyond SB-P-1.14 `FPDR-2`. DC-11 (non-destructive preservation) is the interim boundary. Any of those elements needs a Founder or legal decision (T3) before it is specified or built. | SR06-08 | 11 |
| `EIS16-PRIV-06` | PR | **No resurrection.** Restoration and rollback never resurrect superseded verification state or reverse a recorded governed state. | SR06-09 | 3 |

## 26. AI and Communication Authority

| Requirement | Basis | Specification | Findings | FCTM rows |
|---|---|---|---|---|
| `EIS16-AI-01` | PR | **Assistant, not judge.** AI may parse capture, summarize, explain candidates and draft messages. It never authorizes or commits a repayment, refund, offset, customer advance, correction, match resolution, threshold decision or any consequential financial action; every AI output passes a preview and human confirmation (`14-§3-1`). | — | 18 |
| `EIS16-AI-02` | AF | **Scoped context.** AI context is drawn only through permission-scoped readers for the acting principal and business (SB-P-1.13 gateway); no cross-business or out-of-scope data. | — | 17 |

## 27. Errors, Retries and Recovery

| Requirement | Basis | Specification | Findings | FCTM rows |
|---|---|---|---|---|
| `EIS16-ERR-01` | AF/PR | **Narrow failure.** A failure stops only the uncertain write; no global freeze (`EIS-CNF-06`). | — | 27 |
| `EIS16-ERR-02` | AF | **Unknown outcome.** A client retry after an unknown outcome resolves through the idempotency key, never by re-executing a committed command. | — | 29 |
| `EIS16-ERR-03` | PD | **Provider outage.** Received evidence is preserved; intake resumes without loss; missed-event reconciliation depends on `DSCH`. | SR05-04 | 6 |
| `EIS16-ERR-04` | TR | **Observability.** Operational logs exclude evidence payloads, hints and balances; audit events carry identifiers only. | — | 28 |

## 28. Readers, Intelligence and Order Linkage

| Requirement | Basis | Specification | Findings | FCTM rows |
|---|---|---|---|---|
| `EIS16-READ-01` | PR | **Readers consume the balance.** Ask CFO and Daily Intelligence use Section 9 and replace `15:FDB-3` qualified answers only for data SB-P-1.16 demonstrates; missing or unattributed data is disclosed (DC-16). | SB16-B6-22 | 17 |
| `EIS16-ORD-01` | PR/TR | **Order and COD link.** An adapter-ready link from orders and COD to Ledger facts and evidence links; demonstration with SB-P-1.18 (`D18`); no duplicate financial truth. | SB16-B6-23 | 10 |
| `EIS16-LANG-01` | PR | **Native surfaces and channel parity.** The credit warning in sale entry, the customer balance view and the review queue are native; the same semantics apply on every channel; WhatsApp delivery waits for SB-P-1.20 (`D20`). | SB16-B6-20 | 12 |

## 29. Migration Design (Design Only; Not Executed)

| Requirement | Basis | Specification | Findings | FCTM rows |
|---|---|---|---|---|
| `EIS16-MIG-01` | TR | **Classes M16-0 to M16-5** as Blueprint §20.7.2, `DRAFT OR PROPOSAL — NON-EXECUTABLE` under `docs/migration/README.md`; sequenced after SB-P-1.14 M14-1 and the `DTX` cut-over. | — | 107 |
| `EIS16-MIG-02` | TR | **M16-1 characterization.** Live-table operations are characterized for locks and foreign keys; the existing cascade risk to unattributed history is recorded; pre-data rollback and post-data forward-fix are defined. | SR04-03, SR04-04 | 23 |
| `EIS16-MIG-03` | TR | **Rehearsal assertions.** Rehearsal in an authorized test environment asserts ACL, RLS, effective access, backup and PITR readiness, version order, the historical-totals invariant (`EIS14-TOT-01`) and `EIS14-MIG-05`/`-06`. A production-shaped rehearsal environment is required and not yet identified. | SR04-09, SR04-11 | 99 |
| `EIS16-MIG-04` | TR | **M16-4 oracle.** Acceptance and rollback use an independent historical-totals invariant with recorded expected values, not parity with the previous reader. | SR04-08 | 2 |
| `EIS16-MIG-05` | PR/FC | **No historical reinterpretation (OQ-05; MQ-02).** No backfill, conversion or bulk attribution. Any read-only historical profile needs its own authorization and privacy conditions (SR-04 §6A; SR06-06) before rehearsal; this EIS does not depend on one. | SR04-05, SR04-10, SR06-06 | 10 |
| `EIS16-MIG-06` | AF | **Baseline reconciliation (P-1).** The target ledger and creator-role ACL baseline are reconciled read-only before rehearsal (joins U-2). | SR04-01 | 4 |

## 30. Verification Contract

| Requirement | Basis | Specification | Findings | FCTM rows |
|---|---|---|---|---|
| `EIS16-VER-01` | TR | **Tiers.** Fast Gate (pure logic: balance algebra, overdue predicate, allocation, minor units, state table, settlement variance, matcher fixtures, linked-amount sums, excess-versus-mismatch, correction guard, key schemes); Full Assurance (governed-only writes, RLS, capability matrix, Employee negative visibility, replay, reversal flagging, reader parity); Security (every privilege type per role, forged requests, service-role confinement); Migration rehearsal; Runtime (Stage 17, Stage 19). | — | 174 |
| `EIS16-VER-02` | PR | **Negative paths.** Tests prove: no auto block; no auto match among plausible candidates; no auto repayment, offset, refund, advance, income or expense; no balance change from evidence alone; no Employee balance exposure; no cross-business access; no delivery without an approved channel; no provider-verified label on uploads. | — | 59 |
| `EIS16-VER-03` | TR | **Proven overlap.** Concurrency tests demonstrate that both transactions hold their snapshots concurrently: concurrent resolvers, double allocation, correction racing a repayment or link, advance application or refund racing a repayment, replay during confirmation, revocation between preview and commit. | SR03-10 | 34 |
| `EIS16-VER-04` | FC | **Founder Scenario A** (`BP-§10.5-A1` to `-A3`): Owner proceeds, overrides or declines; factual ageing; recorded decision; Manager without delegation denied; Employee sees no balance. | — | 4 |
| `EIS16-VER-05` | FC/PD | **Founder Scenario B (OQ-04 Option C).** Phase 1: merchant-uploaded evidence, human-reviewed, never provider-verified. Phase 2: after separate provider authorization, gateway-authenticated evidence tested independently. Passing one phase never proves the other. In both, the system never selects among plausible matches and repeating a confirmed link creates no duplicate financial entry. | — | 4 |
| `EIS16-VER-06` | PR | **Completion honesty.** Acceptance rows, scenarios and gates are reported only from runtime evidence at Stages 17 and 19; held rows are reported as held, never passed. | SB16-B6-26 | 46 |
| `EIS16-VER-07` | AF | **CI status.** No workflow evidence exists for this mission; CI is UNVERIFIED and no PASS is inferred from absence. | — | 7 |

## 31. Performance and Reliability

| Requirement | Basis | Specification | Findings | FCTM rows |
|---|---|---|---|---|
| `EIS16-OPS-01` | TR | **Indexed reads.** Balance and candidate queries are indexed by `(business_id, participant_id)` and target identity; numeric budgets are set at Stage 12 and never weaken authorization or invariants. | — | 15 |
| `EIS16-OPS-02` | TR | **Cache safety.** Any cached balance or intelligence output is partitioned by business, principal, effective scope, authority epoch and calculation version, and re-authorized before delivery. | — | 17 |

## 32. Must-Not Checks

| Requirement | Basis | Specification | Findings | FCTM rows |
|---|---|---|---|---|
| `EIS16-NEG-01` | PR | No automatic credit blocking by default; no credit score or underwriting; no lending; no automatic customer message; no automatic income, expense, offset, refund or advance; no AI decision; no second ledger, identity, permission or scheduler; no provider activation without authorization. | — | 76 |

## 33. Holds and Dependency Gates

| Requirement | Basis | Specification | Findings | FCTM rows |
|---|---|---|---|---|
| `EIS16-HOLD-01` | AF | **`D12` hold.** SB-P-1.12 kernel, memberships, participants, bindings, idempotency and confirmation primitives are specified, not built. | — | 99 |
| `EIS16-HOLD-02` | AF | **`D13` hold.** SB-P-1.13 gateway, UDI and conversation layer are specified, not built. | — | 41 |
| `EIS16-HOLD-03` | AF | **`D14` hold.** SB-P-1.14 four-state Ledger, governed commands and governed storage, and the `DTX`/PQ-2 cut-over, are specified, not built; no SB-P-1.16 write precedes the cut-over and `EIS14-CMD-03` closure. | — | 164 |
| `EIS16-HOLD-04` | AF | **`D15` hold.** SB-P-1.15 timezone, scheduler, reminder and reader foundations (`D15`, `DSCH`) are specified, not built. | — | 46 |
| `EIS16-HOLD-05` | AF | **`DPAY` hold.** Payment provider selection, credentials and activation are NOT AUTHORIZED; affected rows stay `IN SCOPE` and are reported as provider-held. | — | 41 |
| `EIS16-HOLD-06` | AF | **`DNTF` hold.** No approved customer channel; communication stays preparation-only. | — | 7 |
| `EIS16-HOLD-07` | AF | **`D18` hold.** Demonstrations owned by SB-P-1.18, SB-P-1.19 and SB-P-1.20 (`D18`, `D19`, `D20`). | — | 19 |
| `EIS16-HOLD-08` | AF | **`DAI` hold.** AI provider configuration evidence (`DAI`) is held. | — | 13 |
| `EIS16-HOLD-09` | UQ | **Upstream findings.** 14-Q1 to 14-Q6 (SB-P-1.14) and 12-Q1 to 12-Q3 (SB-P-1.12) are requested; silence is not approval; dependent wording stays PROVISIONAL or held. | — | 31 |
| `EIS16-GOV-01` | PR | **Mission accounting.** Delivery and completion are recorded through Stages 19 to 24; partial delivery is reported, never implied complete by merge alone. | — | 7 |
| `EIS16-GOV-02` | PR | **Artifact confidentiality (MQ-06).** Mission artifacts, test fixtures and evidence packs contain no production identifiers, merchant names, personal contact data or real financial figures; aggregates only, approved by Mission Control. | SR06-10 | 9 |

## 34. UNVERIFIED — ACCESS REQUIRED Register

| Item | State |
|---|---|
| Live grants, RLS, policies and creator-role defaults | UNVERIFIED (P-2, P-3) |
| Target migration ledger and ACL baseline | UNVERIFIED (P-1) |
| Test project and production-shaped rehearsal environment | UNVERIFIED |
| Historical credit-method data shape | UNVERIFIED (OQ-05; no profile authorized) |
| Provider capabilities, terms, payment IDs and UTR availability | UNVERIFIED (`DPAY`) |
| CI runs | UNVERIFIED (no runs) |
| Service-role handler inventory | UNVERIFIED (P-4) |

## 35. Traceability

### 35.1 Integrity checks

| Check | Result |
|---|---|
| `IN SCOPE` FCTM rows | 349 |
| Rows mapped to at least one EIS requirement | 349 / 349 |
| Missing rows / extra IDs / IDs absent from the FCTM | 0 / 0 / 0 |
| EIS requirements | 135 |
| Requirements with FCTM rows | 135 |
| Requirements without FCTM rows | 0 |
| Orphan requirements adding product behaviour | 0 |
| Row-to-requirement links | 2809 |
| Requirements per row (minimum / maximum) | 2 / 25 |
| Specialist findings covered | 63 / 63 |
| Stage 7 corrections covered | C-01 to C-28 (Section 35.5) |
| FCTM or Blueprint changes | 0 (FCTM blob `94dd5220`; Blueprint blob `305571a6`) |

Selection rules: each row takes the requirements of its Stage 7 component (Blueprint §20.8); each FCTM dependency code takes its `HOLD` requirement; each `16:FPDR-n` citation takes that decision's requirements; NEG rows take `NEG-01` and `VER-02`; EXP, SCN, GATE and FRV rows take `VER-06`; U-08-dependent rows take `PRIV-05`; `DPAY` rows take `SRC-08`; data-bearing components take `MIG-01`, `MIG-03` and `SEC-01`; H-risk rows take `VER-01`; explicitly anchored rows take their named requirement (for example the M-1 to M-3 anchors take `CAD-03` to `CAD-05`); source-pointer terms add the matching cross-cutting requirement (AI, migration, idempotency, concurrency, audit, privacy, failure, dignity, permission).

### 35.2 FCTM row to EIS requirement (349 rows)

| FCTM row | Blueprint | Kind | Stage 7 component | Stage 7 status | Risk | FCTM dependency | EIS requirements (`EIS16-`) |
|---|---|---|---|---|---|---|---|
| `14-§1-1` | §8.1, §15 | EXP | C-PRN | DESIGN ACCEPTED — EVIDENCE HOLD | L | none (design review) | ARC-01, AI-01, NEG-01, PRIV-02, VER-06 |
| `14-§1-2` | §8.1, §10.2 | PRIN | C-PRN | DESIGN ACCEPTED — EVIDENCE HOLD | L | none (design review) | ARC-01, AI-01, NEG-01, PRIV-02 |
| `14-§2-8` | §8.1, §10.2 | PRIN | C-PRN | DESIGN ACCEPTED — EVIDENCE HOLD | L | none (design review) | ARC-01, AI-01, NEG-01, PRIV-02 |
| `14-§3-1` | §8.1, §10.2 | PRIN | C-PRN | DESIGN ACCEPTED — EVIDENCE HOLD | L | none (design review) | ARC-01, AI-01, NEG-01, PRIV-02, CAD-01, CAD-02, CAD-06, CAD-07, CAD-08, HOLD-09, AUD-04 |
| `14-§3-2` | §8.1, §10.2 | PRIN | C-PRN | DESIGN ACCEPTED — EVIDENCE HOLD | L | none (design review) | ARC-01, AI-01, NEG-01, PRIV-02 |
| `14-§3-3` | §8.1, §10.2 | PRIN | C-PRN | DESIGN ACCEPTED — EVIDENCE HOLD | L | none (design review) | ARC-01, AI-01, NEG-01, PRIV-02 |
| `14-§3-4` | §8.1, §10.2 | PRIN | C-PRN | DESIGN ACCEPTED — EVIDENCE HOLD | L | none (design review) | ARC-01, AI-01, NEG-01, PRIV-02 |
| `14-§3-5` | §8.1, §10.2 | PRIN | C-PRN | DESIGN ACCEPTED — EVIDENCE HOLD | L | none (design review) | ARC-01, AI-01, NEG-01, PRIV-02, CAD-01, CAD-02, CAD-06, CAD-07, CAD-08, HOLD-09, AUD-04, CAD-04, AUD-01 |
| `14-§3-6` | §8.1, §10.2, §12 | PRIN | C-PRN | DEPENDENCY-HELD | L | `D14`, `DTX` | ARC-01, AI-01, NEG-01, PRIV-02, HOLD-03, CAD-01, CAD-02, CAD-06, CAD-07, CAD-08, HOLD-09, AUD-01 |
| `14-§3-7` | §8.1, §10.1, §10.3 | NEG | C-PRN | DESIGN ACCEPTED — EVIDENCE HOLD | L | none (design review) | ARC-01, AI-01, NEG-01, PRIV-02, AUTHZ-03, VER-02 |
| `14-§4-1` | §8.1, §10.1, §12 | OBL | C-ID | DEPENDENCY-HELD | H | `D12`, `D14` | ID-01, ID-02, ID-04, ID-05, AUTHZ-05, SEC-03, HOLD-01, HOLD-03, MIG-05, MIG-01, MIG-03, SEC-01, MIG-02, VER-01, AUD-01 |
| `14-§4-2` | §8.1, §10.1, §12 | OBL | C-ID | DEPENDENCY-HELD | H | `D12`, `D14` | ID-01, ID-02, ID-04, ID-05, AUTHZ-05, SEC-03, HOLD-01, HOLD-03, MIG-05, MIG-01, MIG-03, SEC-01, MIG-02, VER-01 |
| `14-§4-3` | §8.1, §10.1, §12 | OBL | C-ID | DEPENDENCY-HELD | H | `D12`, `D14` | ID-01, ID-02, ID-04, ID-05, AUTHZ-05, SEC-03, HOLD-01, HOLD-03, MIG-05, MIG-01, MIG-03, SEC-01, MIG-02, VER-01 |
| `14-§4-4` | §8.1, §10.1, §12 | OBL | C-ID | DEPENDENCY-HELD | H | `D12`, `D14` | ID-01, ID-02, ID-04, ID-05, AUTHZ-05, SEC-03, HOLD-01, HOLD-03, MIG-05, MIG-01, MIG-03, SEC-01, MIG-02, VER-01, IDM-02 |
| `14-§4-5` | §8.1, §10.1, §12 | OBL | C-ID | DEPENDENCY-HELD | H | `D12`, `D14` | ID-01, ID-02, ID-04, ID-05, AUTHZ-05, SEC-03, HOLD-01, HOLD-03, MIG-05, MIG-01, MIG-03, SEC-01, MIG-02, VER-01 |
| `14-§4-6` | §8.1, §10.1, §12 | OBL | C-ID | DEPENDENCY-HELD | H | `D13` | ID-01, ID-02, ID-04, ID-05, AUTHZ-05, SEC-03, HOLD-02, MIG-05, MIG-01, MIG-03, SEC-01, MIG-02, VER-01 |
| `14-§5-1` | §8.2, §10.1, §12 | OBL | C-LDG | DEPENDENCY-HELD | H | `D14` | LDG-01, LDG-02, ARC-02, AUD-01, SEC-02, HOLD-03, ID-02, MIG-01, MIG-03, SEC-01, MIG-02, VER-01, MIG-06 |
| `14-§5-2` | §8.2, §12 | OBL | C-LDG | DEPENDENCY-HELD | H | `D14` | LDG-01, LDG-02, ARC-02, AUD-01, SEC-02, HOLD-03, MIG-01, MIG-03, SEC-01, MIG-02, VER-01, MIG-06 |
| `14-§5-3` | §8.2, §12 | OBL | C-LDG | DEPENDENCY-HELD | H | `D14` | LDG-01, LDG-02, ARC-02, AUD-01, SEC-02, HOLD-03, MIG-01, MIG-03, SEC-01, MIG-02, VER-01 |
| `14-§5-4` | §8.2, §12 | OBL | C-LDG | DEPENDENCY-HELD | H | `D14` | LDG-01, LDG-02, ARC-02, AUD-01, SEC-02, HOLD-03, MIG-01, MIG-03, SEC-01, MIG-02, VER-01 |
| `14-§5-5` | §8.2, §12 | OBL | C-LDG | DEPENDENCY-HELD | H | `D14` | LDG-01, LDG-02, ARC-02, AUD-01, SEC-02, HOLD-03, MIG-01, MIG-03, SEC-01, MIG-02, VER-01 |
| `14-§5-6` | §8.2, §10.1, §12 | OBL | C-DUE | DEPENDENCY-HELD | H | `D14` | DUE-01, DUE-02, DUE-03, DUE-04, HOLD-03, MIG-01, MIG-03, SEC-01, MIG-02, VER-01 |
| `14-§5-7` | §8.2, §12 | OBL | C-BAL | DEPENDENCY-HELD | H | `D14` | BAL-01, BAL-02, BAL-03, BAL-04, BAL-05, ID-05, OPS-01, HOLD-03, CAD-01, CAD-02, CAD-06, CAD-07, CAD-08, HOLD-09, MIG-01, MIG-03, SEC-01, VER-01, CAD-03 |
| `14-§5-8` | §8.2, §12 | OBL | C-LDG | DEPENDENCY-HELD | H | `D14` | LDG-01, LDG-02, ARC-02, AUD-01, SEC-02, HOLD-03, CAD-01, CAD-02, CAD-06, CAD-07, CAD-08, HOLD-09, MIG-01, MIG-03, SEC-01, MIG-02, VER-01 |
| `14-§5-9` | §8.2, §12 | OBL | C-LDG | DEPENDENCY-HELD | H | `D14` | LDG-01, LDG-02, ARC-02, AUD-01, SEC-02, HOLD-03, MIG-01, MIG-03, SEC-01, MIG-02, VER-01 |
| `14-§5-10` | §8.2, §12 | OBL | C-LDG | DEPENDENCY-HELD | H | `D14` | LDG-01, LDG-02, ARC-02, AUD-01, SEC-02, HOLD-03, MIG-01, MIG-03, SEC-01, MIG-02, VER-01 |
| `14-§5-11` | §8.2, §12 | OBL | C-LDG | DEPENDENCY-HELD | H | `D14`, `D15` | LDG-01, LDG-02, ARC-02, AUD-01, SEC-02, HOLD-03, HOLD-04, MIG-01, MIG-03, SEC-01, MIG-02, VER-01 |
| `14-§5-12` | §8.2, §12 | OBL | C-LDG | PROVIDER-HELD | H | `D14`, `DPAY` | LDG-01, LDG-02, ARC-02, AUD-01, SEC-02, HOLD-03, HOLD-05, SRC-08, MIG-01, MIG-03, SEC-01, MIG-02, VER-01 |
| `14-§5-13` | §8.2, §12 | OBL | C-LDG | DEPENDENCY-HELD | H | `D12`, `D14` | LDG-01, LDG-02, ARC-02, AUD-01, SEC-02, HOLD-01, HOLD-03, MIG-01, MIG-03, SEC-01, MIG-02, VER-01, AUD-03 |
| `14-§6-1` | §8.2, §12 | OBL | C-CAP | DEPENDENCY-HELD | M | `D13`, `D14`, `DTX` | LDG-03, ID-02, AI-01, LANG-01, HOLD-02, HOLD-03 |
| `14-§6-2` | §8.2, §12 | OBL | C-CAP | DEPENDENCY-HELD | M | `D13`, `D14`, `DTX` | LDG-03, ID-02, AI-01, LANG-01, HOLD-02, HOLD-03 |
| `14-§6-3` | §8.2, §12 | OBL | C-CAP | DEPENDENCY-HELD | M | `D12`, `D14`, `DTX` | LDG-03, ID-02, AI-01, LANG-01, HOLD-01, HOLD-03 |
| `14-§6-4` | §8.2, §12 | OBL | C-CAP | DEPENDENCY-HELD | M | `D14`, `DTX` | LDG-03, ID-02, AI-01, LANG-01, HOLD-03 |
| `14-§6-5` | §8.2, §12 | OBL | C-CAP | LATER-MISSION-HELD | M | `D14`, `DTX`, `D18` | LDG-03, ID-02, AI-01, LANG-01, HOLD-03, HOLD-07 |
| `14-§6-6` | §8.2, §12 | OBL | C-CAP | DEPENDENCY-HELD | M | `D13`, `D14` | LDG-03, ID-02, AI-01, LANG-01, HOLD-02, HOLD-03 |
| `14-§7-1` | §8.2, §10.2, §12 | RULE | C-REP | DEPENDENCY-HELD | H | `D14` | REP-01, REP-02, REP-03, REP-04, ID-03, CNC-01, IDM-02, BAL-04, HOLD-03, MIG-01, MIG-03, SEC-01, VER-03, CNC-02, VER-01 |
| `14-§7-2` | §8.2, §12 | OBL | C-REP | DEPENDENCY-HELD | H | `D14`, `DTX` | REP-01, REP-02, REP-03, REP-04, ID-03, CNC-01, IDM-02, BAL-04, HOLD-03, CAD-01, CAD-02, CAD-06, CAD-07, CAD-08, HOLD-09, MIG-01, MIG-03, SEC-01, VER-03, CNC-02, VER-01, AUD-01 |
| `14-§7-3` | §8.2, §12 | OBL | C-REP | DEPENDENCY-HELD | H | `D14`, `DTX` | REP-01, REP-02, REP-03, REP-04, ID-03, CNC-01, IDM-02, BAL-04, HOLD-03, CAD-01, CAD-02, CAD-06, CAD-07, CAD-08, HOLD-09, MIG-01, MIG-03, SEC-01, VER-03, CNC-02, VER-01, CAD-03 |
| `14-§7-4` | §8.2, §12 | OBL | C-BAL | DEPENDENCY-HELD | H | `D14`, `DTX` | BAL-01, BAL-02, BAL-03, BAL-04, BAL-05, ID-05, OPS-01, HOLD-03, CAD-01, CAD-02, CAD-06, CAD-07, CAD-08, HOLD-09, MIG-01, MIG-03, SEC-01, VER-01, CAD-03, CAD-04 |
| `14-§7-5` | §8.2, §10.3, §12 | NEG | C-REP | DEPENDENCY-HELD | H | `D14`, `DTX` | REP-01, REP-02, REP-03, REP-04, ID-03, CNC-01, IDM-02, BAL-04, HOLD-03, CAD-01, CAD-02, CAD-06, CAD-07, CAD-08, HOLD-09, NEG-01, VER-02, MIG-01, MIG-03, SEC-01, VER-03, CNC-02, VER-01, CAD-05 |
| `14-§7-6` | §8.2, §12 | OBL | C-REP | DEPENDENCY-HELD | H | `D14`, `DTX` | REP-01, REP-02, REP-03, REP-04, ID-03, CNC-01, IDM-02, BAL-04, HOLD-03, CAD-01, CAD-02, CAD-06, CAD-07, CAD-08, HOLD-09, MIG-01, MIG-03, SEC-01, VER-03, CNC-02, VER-01, AUD-01 |
| `14-§7-7` | §8.2, §12 | OBL | C-REP | DEPENDENCY-HELD | H | `D13`, `D14`, `DTX` | REP-01, REP-02, REP-03, REP-04, ID-03, CNC-01, IDM-02, BAL-04, HOLD-02, HOLD-03, MIG-01, MIG-03, SEC-01, VER-03, CNC-02, VER-01 |
| `14-§8-1` | §8.3, §12 | OBL | C-THR | DEPENDENCY-HELD | M | `D12` | THR-01, THR-02, THR-03, THR-04, AUD-02, HOLD-01, MIG-01, MIG-03, SEC-01 |
| `14-§8-2` | §8.3, §10.2 | RULE | C-THR | DESIGN ACCEPTED — EVIDENCE HOLD | M | none (design review) | THR-01, THR-02, THR-03, THR-04, AUD-02, MIG-01, MIG-03, SEC-01 |
| `14-§8-3` | §8.3, §12 | OBL | C-THR | DEPENDENCY-HELD | M | `D12` | THR-01, THR-02, THR-03, THR-04, AUD-02, HOLD-01, MIG-01, MIG-03, SEC-01 |
| `14-§8-4` | §8.3, §12 | OBL | C-THR | DEPENDENCY-HELD | M | `D15` | THR-01, THR-02, THR-03, THR-04, AUD-02, HOLD-04, MIG-01, MIG-03, SEC-01 |
| `14-§8-5` | §8.3, §12 | OBL | C-THR | DEPENDENCY-HELD | M | `D15` | THR-01, THR-02, THR-03, THR-04, AUD-02, HOLD-04, MIG-01, MIG-03, SEC-01 |
| `14-§8-6` | §8.3, §12 | OBL | C-THR | DEPENDENCY-HELD | M | `D12` | THR-01, THR-02, THR-03, THR-04, AUD-02, HOLD-01, MIG-01, MIG-03, SEC-01 |
| `14-§8-7` | §8.3, §10.3 | NEG | C-THR | DESIGN ACCEPTED — EVIDENCE HOLD | M | none (design review) | THR-01, THR-02, THR-03, THR-04, AUD-02, NEG-01, VER-02, MIG-01, MIG-03, SEC-01 |
| `14-§9-1` | §8.3, §10.1, §10.3 | NEG | C-THR | DESIGN ACCEPTED — EVIDENCE HOLD | M | none (design review) | THR-01, THR-02, THR-03, THR-04, AUD-02, AUTHZ-03, NEG-01, VER-02, MIG-01, MIG-03, SEC-01 |
| `14-§9-2` | §8.3, §10.1, §12, §15 | SCN | C-THR | DEPENDENCY-HELD | M | `D12` | THR-01, THR-02, THR-03, THR-04, AUD-02, HOLD-01, AUTHZ-03, VER-06, MIG-01, MIG-03, SEC-01 |
| `14-§9-3` | §8.3, §10.1, §12 | OBL | C-THR | DEPENDENCY-HELD | M | `D12`, `DTX` | THR-01, THR-02, THR-03, THR-04, AUD-02, HOLD-01, HOLD-03, AUTHZ-03, MIG-01, MIG-03, SEC-01 |
| `14-§9-4` | §8.3, §10.1, §12 | OBL | C-THR | DEPENDENCY-HELD | M | `D12`, `DTX` | THR-01, THR-02, THR-03, THR-04, AUD-02, HOLD-01, HOLD-03, AUTHZ-03, MIG-01, MIG-03, SEC-01 |
| `14-§9-5` | §8.3, §10.1, §12 | OBL | C-THR | DEPENDENCY-HELD | M | `D12`, `DTX` | THR-01, THR-02, THR-03, THR-04, AUD-02, HOLD-01, HOLD-03, AUTHZ-03, MIG-01, MIG-03, SEC-01 |
| `14-§9-6` | §8.3, §10.1, §12 | OBL | C-THR | DEPENDENCY-HELD | M | `D12`, `DTX` | THR-01, THR-02, THR-03, THR-04, AUD-02, HOLD-01, HOLD-03, AUTHZ-03, MIG-01, MIG-03, SEC-01 |
| `14-§9-7` | §8.3, §10.1, §12 | OBL | C-THR | DEPENDENCY-HELD | M | `D12`, `DTX` | THR-01, THR-02, THR-03, THR-04, AUD-02, HOLD-01, HOLD-03, AUTHZ-03, MIG-01, MIG-03, SEC-01 |
| `14-§9-8` | §8.3, §10.1, §12 | OBL | C-THR | DEPENDENCY-HELD | M | `D12`, `D14` | THR-01, THR-02, THR-03, THR-04, AUD-02, HOLD-01, HOLD-03, AUTHZ-03, MIG-01, MIG-03, SEC-01 |
| `14-§9-9` | §8.3, §10.1, §12 | OBL | C-THR | DEPENDENCY-HELD | M | `D12` | THR-01, THR-02, THR-03, THR-04, AUD-02, HOLD-01, AUTHZ-03, MIG-01, MIG-03, SEC-01 |
| `14-§10-1` | §8.3, §10.1, §12 | OBL | C-FUP | DEPENDENCY-HELD | M | `D15`, `DSCH` | FUP-01, FUP-02, FUP-03, PRIV-02, PRIV-04, HOLD-04 |
| `14-§10-2` | §8.3, §10.1, §12 | OBL | C-FUP | CHANNEL-HELD | M | `D15`, `DNTF` | FUP-01, FUP-02, FUP-03, PRIV-02, PRIV-04, HOLD-04, HOLD-06 |
| `14-§10-3` | §8.3, §10.1, §10.3, §12 | NEG | C-FUP | CHANNEL-HELD | M | `D15`, `DNTF` | FUP-01, FUP-02, FUP-03, PRIV-02, PRIV-04, HOLD-04, HOLD-06, NEG-01, VER-02 |
| `14-§10-4` | §8.3, §10.1, §10.3, §12 | NEG | C-FUP | CHANNEL-HELD | M | `D15`, `DNTF` | FUP-01, FUP-02, FUP-03, PRIV-02, PRIV-04, HOLD-04, HOLD-06, NEG-01, VER-02 |
| `14-§10-5` | §8.3, §10.1, §10.3, §12 | NEG | C-FUP | CHANNEL-HELD | M | `D15`, `DNTF` | FUP-01, FUP-02, FUP-03, PRIV-02, PRIV-04, HOLD-04, HOLD-06, NEG-01, VER-02 |
| `14-§10-6` | §8.3, §10.1, §10.3, §12 | NEG | C-FUP | CHANNEL-HELD | M | `D15`, `DNTF` | FUP-01, FUP-02, FUP-03, PRIV-02, PRIV-04, HOLD-04, HOLD-06, NEG-01, VER-02, PRIV-01 |
| `14-§11-1` | §8.6, §12, §15 | SCN | C-READ | DEPENDENCY-HELD | M | `D15`, `DAI` | READ-01, BAL-03, BAL-05, OPS-02, AI-02, HOLD-04, HOLD-08, VER-06 |
| `14-§11-2` | §8.6, §12, §15 | SCN | C-READ | DEPENDENCY-HELD | M | `D15`, `DAI` | READ-01, BAL-03, BAL-05, OPS-02, AI-02, HOLD-04, HOLD-08, VER-06 |
| `14-§11-3` | §8.6, §12, §15 | SCN | C-READ | DEPENDENCY-HELD | M | `D15`, `DAI` | READ-01, BAL-03, BAL-05, OPS-02, AI-02, HOLD-04, HOLD-08, VER-06 |
| `14-§11-4` | §8.6, §12, §15 | SCN | C-READ | DEPENDENCY-HELD | M | `D15`, `DAI` | READ-01, BAL-03, BAL-05, OPS-02, AI-02, HOLD-04, HOLD-08, VER-06 |
| `14-§11-5` | §8.6, §10.3, §12 | NEG | C-READ | DEPENDENCY-HELD | M | `D15` | READ-01, BAL-03, BAL-05, OPS-02, AI-02, HOLD-04, NEG-01, VER-02 |
| `14-§12-1` | §8.6, §12 | OBL | C-READ | DEPENDENCY-HELD | M | `D15`, `DSCH` | READ-01, BAL-03, BAL-05, OPS-02, AI-02, HOLD-04 |
| `14-§12-2` | §8.6, §12 | OBL | C-READ | DEPENDENCY-HELD | M | `D15`, `DSCH` | READ-01, BAL-03, BAL-05, OPS-02, AI-02, HOLD-04 |
| `14-§12-3` | §8.6, §12 | OBL | C-READ | DEPENDENCY-HELD | M | `D15`, `DSCH` | READ-01, BAL-03, BAL-05, OPS-02, AI-02, HOLD-04 |
| `14-§12-4` | §8.6, §12 | OBL | C-READ | DEPENDENCY-HELD | M | `D15`, `DSCH` | READ-01, BAL-03, BAL-05, OPS-02, AI-02, HOLD-04 |
| `14-§12-5` | §8.6, §12 | OBL | C-READ | DEPENDENCY-HELD | M | `D15`, `DSCH` | READ-01, BAL-03, BAL-05, OPS-02, AI-02, HOLD-04 |
| `14-§12-6` | §8.6, §10.3, §12 | NEG | C-READ | DEPENDENCY-HELD | M | `D12` | READ-01, BAL-03, BAL-05, OPS-02, AI-02, HOLD-01, NEG-01, VER-02 |
| `14-§13-1` | §8.1, §10.1, §12 | OBL | C-ID | LATER-MISSION-HELD | H | `D18` | ID-01, ID-02, ID-04, ID-05, AUTHZ-05, SEC-03, HOLD-07, MIG-01, MIG-03, SEC-01, MIG-02, VER-01 |
| `14-§13-2` | §8.1, §10.3, §12 | NEG | C-ORD | LATER-MISSION-HELD | M | `D18`, `DTX` | ORD-01, HOLD-07, HOLD-03, NEG-01, VER-02, IDM-02 |
| `14-§13-3` | §8.1, §12 | OBL | C-ORD | LATER-MISSION-HELD | M | `D18` | ORD-01, HOLD-07 |
| `14-§14-1` | §8.7, §12 | OBL | C-AUTH | DEPENDENCY-HELD | H | `D12` | AUTHZ-01, AUTHZ-02, AUTHZ-03, AUTHZ-04, AUTHZ-05, AUTHZ-06, AUTHZ-09, HOLD-01, CAD-01, CAD-02, CAD-06, CAD-07, CAD-08, HOLD-09, VER-01, CAD-04, CAD-05, REP-03, MIG-01 |
| `14-§14-2` | §8.7, §10.1, §12 | OBL | C-AUTH | DEPENDENCY-HELD | H | `D12` | AUTHZ-01, AUTHZ-02, AUTHZ-03, AUTHZ-04, AUTHZ-05, AUTHZ-06, AUTHZ-09, HOLD-01, VER-01, REP-03 |
| `14-§14-3` | §8.7, §12 | OBL | C-AUTH | DEPENDENCY-HELD | H | `D12` | AUTHZ-01, AUTHZ-02, AUTHZ-03, AUTHZ-04, AUTHZ-05, AUTHZ-06, AUTHZ-09, HOLD-01, VER-01, THR-04 |
| `14-§14-4` | §8.7, §10.1, §12 | OBL | C-AUTH | CHANNEL-HELD | H | `D12`, `D15`, `DNTF` | AUTHZ-01, AUTHZ-02, AUTHZ-03, AUTHZ-04, AUTHZ-05, AUTHZ-06, AUTHZ-09, HOLD-01, HOLD-04, HOLD-06, FUP-02, VER-01 |
| `14-§15-1a` | §8.7, §12 | OBL | C-LANG | DEPENDENCY-HELD | M | `D13` | LANG-01, HOLD-02 |
| `14-§15-2` | §8.7, §12 | OBL | C-LANG | DEPENDENCY-HELD | M | `D13` | LANG-01, HOLD-02 |
| `14-§16-1` | §8.7, §12 | OBL | C-CNF | DEPENDENCY-HELD | H | `D13` | CNC-03, CNC-04, REV-01, AUTHZ-06, HOLD-02, VER-03, CNC-02, VER-01 |
| `14-§16-2` | §8.7, §12 | OBL | C-CNF | DEPENDENCY-HELD | H | `D13` | CNC-03, CNC-04, REV-01, AUTHZ-06, HOLD-02, VER-03, CNC-02, VER-01 |
| `14-§16-3` | §8.7, §12 | OBL | C-CNF | DEPENDENCY-HELD | H | `D13` | CNC-03, CNC-04, REV-01, AUTHZ-06, HOLD-02, VER-03, CNC-02, VER-01 |
| `14-§16-4` | §8.7, §12 | OBL | C-CNF | DEPENDENCY-HELD | H | `D13` | CNC-03, CNC-04, REV-01, AUTHZ-06, HOLD-02, VER-03, CNC-02, VER-01 |
| `14-§16-5` | §8.7, §12 | OBL | C-CNF | DEPENDENCY-HELD | H | `D13` | CNC-03, CNC-04, REV-01, AUTHZ-06, HOLD-02, VER-03, CNC-02, VER-01 |
| `14-§16-6` | §8.7, §10.3, §12 | NEG | C-CNF | DEPENDENCY-HELD | H | `D13` | CNC-03, CNC-04, REV-01, AUTHZ-06, HOLD-02, NEG-01, VER-02, VER-03, CNC-02, VER-01 |
| `14-§17-1` | §8.8, §12 | OBL | C-AUD | DEPENDENCY-HELD | H | `D14`, `DTX` | AUD-01, AUD-02, AUD-03, BAL-04, ERR-04, HOLD-03, CAD-01, CAD-02, CAD-06, CAD-07, CAD-08, HOLD-09, PRIV-05, VER-01, PRIV-03 |
| `14-§17-2` | §8.8, §10.3, §12 | NEG | C-AUD | DEPENDENCY-HELD | H | `D14`, `DTX` | AUD-01, AUD-02, AUD-03, BAL-04, ERR-04, HOLD-03, NEG-01, VER-02, VER-01 |
| `14-§17-3` | §8.8, §10.3, §12 | NEG | C-AUD | DEPENDENCY-HELD | H | `D14`, `DTX` | AUD-01, AUD-02, AUD-03, BAL-04, ERR-04, HOLD-03, CAD-01, CAD-02, CAD-06, CAD-07, CAD-08, HOLD-09, NEG-01, VER-02, VER-01 |
| `14-§17-4` | §8.8, §10.3, §12 | NEG | C-AUD | DEPENDENCY-HELD | H | `D14`, `DTX` | AUD-01, AUD-02, AUD-03, BAL-04, ERR-04, HOLD-03, NEG-01, VER-02, VER-01 |
| `14-§17-5` | §8.8, §10.3, §12 | NEG | C-AUD | DEPENDENCY-HELD | H | `D14`, `DTX` | AUD-01, AUD-02, AUD-03, BAL-04, ERR-04, HOLD-03, NEG-01, VER-02, VER-01, MIG-01 |
| `14-§18-1` | §8.8, §10.1, §12 | OBL | C-ID | DEPENDENCY-HELD | H | `D12` | ID-01, ID-02, ID-04, ID-05, AUTHZ-05, SEC-03, HOLD-01, MIG-01, MIG-03, SEC-01, MIG-02, VER-01, IDM-02 |
| `14-§18-2` | §8.8, §12 | OBL | C-EXC | DEPENDENCY-HELD | H | `D12`, `D14` | ERR-01, ERR-02, ERR-04, HOLD-01, HOLD-03, VER-01, IDM-02 |
| `14-§18-3` | §8.8, §12 | OBL | C-REP | DEPENDENCY-HELD | H | `D12`, `D14` | REP-01, REP-02, REP-03, REP-04, ID-03, CNC-01, IDM-02, BAL-04, HOLD-01, HOLD-03, CAD-01, CAD-02, CAD-06, CAD-07, CAD-08, HOLD-09, MIG-01, MIG-03, SEC-01, VER-03, CNC-02, VER-01 |
| `14-§18-4` | §8.8, §12 | OBL | C-EXC | DEPENDENCY-HELD | M | `D12`, `D14` | ERR-01, ERR-02, ERR-04, HOLD-01, HOLD-03 |
| `14-§18-5` | §8.8, §12 | OBL | C-EXC | DEPENDENCY-HELD | M | `D12`, `D14` | ERR-01, ERR-02, ERR-04, HOLD-01, HOLD-03 |
| `14-§18-6` | §8.8, §12 | OBL | C-EXC | DEPENDENCY-HELD | M | `D12`, `D14` | ERR-01, ERR-02, ERR-04, HOLD-01, HOLD-03, AUTHZ-01 |
| `14-§18-7` | §8.8, §12 | OBL | C-EXC | DEPENDENCY-HELD | M | `D15` | ERR-01, ERR-02, ERR-04, HOLD-04 |
| `14-§18-8` | §8.8, §12 | OBL | C-EXC | PROVIDER-HELD | M | `DPAY` | ERR-01, ERR-02, ERR-04, HOLD-05, SRC-08 |
| `14-§18-9` | §8.8, §12 | OBL | C-EXC | DEPENDENCY-HELD | M | `D12`, `D14` | ERR-01, ERR-02, ERR-04, HOLD-01, HOLD-03 |
| `14-§19-1` | §8.8, §12 | OBL | C-PRIV | DEPENDENCY-HELD | H | `D12` | SEC-01, SEC-02, SEC-03, SEC-04, SEC-05, PRIV-01, AUTHZ-07, HOLD-01, VER-01, GOV-02, PRIV-03 |
| `14-§19-2` | §8.8, §12 | OBL | C-PRIV | DEPENDENCY-HELD | H | `D12` | SEC-01, SEC-02, SEC-03, SEC-04, SEC-05, PRIV-01, AUTHZ-07, HOLD-01, VER-01, AUTHZ-01 |
| `14-§19-3` | §8.8, §10.3, §12 | NEG | C-PRIV | DEPENDENCY-HELD | H | `D12` | SEC-01, SEC-02, SEC-03, SEC-04, SEC-05, PRIV-01, AUTHZ-07, HOLD-01, NEG-01, VER-02, VER-01, PRIV-03 |
| `14-§19-4` | §8.8, §10.3 | NEG | C-PRIV | DESIGN ACCEPTED — EVIDENCE HOLD | H | none (design review) | SEC-01, SEC-02, SEC-03, SEC-04, SEC-05, PRIV-01, AUTHZ-07, NEG-01, VER-02, VER-01, PRIV-02 |
| `14-§19-5` | §8.8, §10.1, §10.3, §12 | NEG | C-PRIV | DEPENDENCY-HELD | H | `DAI` | SEC-01, SEC-02, SEC-03, SEC-04, SEC-05, PRIV-01, AUTHZ-07, HOLD-08, AUTHZ-03, NEG-01, VER-02, VER-01, AI-01, AUD-04 |
| `14-§20-1` | §8.9, §10.2, §12 | RULE | C-FND | DEPENDENCY-HELD | M | `D14` | ARC-01, ARC-02, HOLD-03 |
| `14-§20-2` | §8.9, §10.1, §10.2, §12 | RULE | C-FND | DEPENDENCY-HELD | M | `D12` | ARC-01, ARC-02, HOLD-01, ID-02 |
| `14-§20-3` | §8.9, §10.2, §12 | RULE | C-FND | DEPENDENCY-HELD | M | `D12` | ARC-01, ARC-02, HOLD-01, AUTHZ-01 |
| `14-§20-4` | §8.9, §10.2, §12 | RULE | C-FND | DEPENDENCY-HELD | M | `D13` | ARC-01, ARC-02, HOLD-02 |
| `14-§20-5` | §8.9, §10.2, §12 | RULE | C-FND | DEPENDENCY-HELD | M | `D15` | ARC-01, ARC-02, HOLD-04 |
| `14-§20-6` | §8.9, §10.2, §12 | RULE | C-FND | DEPENDENCY-HELD | M | `D15` | ARC-01, ARC-02, HOLD-04 |
| `14-§20-7` | §8.9, §10.2, §12 | RULE | C-FND | DEPENDENCY-HELD | M | `D15` | ARC-01, ARC-02, HOLD-04 |
| `14-§20-8` | §8.9, §10.2, §12 | RULE | C-FND | DEPENDENCY-HELD | M | `D15` | ARC-01, ARC-02, HOLD-04 |
| `14-§20-9` | §8.9, §10.2 | RULE | C-FND | DESIGN ACCEPTED — EVIDENCE HOLD | M | none (design review) | ARC-01, ARC-02 |
| `14-§20-10` | §8.9, §10.2, §12 | RULE | C-FND | DEPENDENCY-HELD | M | `D12` | ARC-01, ARC-02, HOLD-01, IDM-02, AUD-01 |
| `14-§21-1` | §8.9, §10.3 | NEG | C-NEG | DESIGN ACCEPTED — EVIDENCE HOLD | L | none (design review) | NEG-01, VER-02 |
| `14-§21-2` | §8.9, §10.3 | NEG | C-NEG | DESIGN ACCEPTED — EVIDENCE HOLD | L | none (design review) | NEG-01, VER-02 |
| `14-§21-3` | §8.9, §10.3 | NEG | C-NEG | DESIGN ACCEPTED — EVIDENCE HOLD | L | none (design review) | NEG-01, VER-02 |
| `14-§21-4` | §8.9, §10.3 | NEG | C-NEG | DESIGN ACCEPTED — EVIDENCE HOLD | L | none (design review) | NEG-01, VER-02 |
| `14-§21-5` | §8.9, §10.3 | NEG | C-NEG | DESIGN ACCEPTED — EVIDENCE HOLD | L | none (design review) | NEG-01, VER-02 |
| `14-§21-6` | §8.9, §10.3, §12 | NEG | C-NEG | DEPENDENCY-HELD | L | `D14` | NEG-01, VER-02, HOLD-03, CAD-01, CAD-02, CAD-06, CAD-07, CAD-08, HOLD-09, IDM-02 |
| `14-§22-1` | §8.10, §10.1, §12, §15 | SCN | C-ACC | DEPENDENCY-HELD | H | `D12`, `D14`, `DTX` | VER-06, HOLD-01, HOLD-03, ID-02, ID-04, MIG-05, VER-01, MIG-04, AUD-01 |
| `14-§22-2` | §8.10, §12, §15 | SCN | C-ACC | DEPENDENCY-HELD | H | `D12`, `D14`, `DTX` | VER-06, HOLD-01, HOLD-03, CAD-01, CAD-02, CAD-06, CAD-07, CAD-08, HOLD-09, VER-01, IDM-02, AUD-01 |
| `14-§22-3` | §8.10, §10.1, §12, §15 | SCN | C-ACC | DEPENDENCY-HELD | H | `D13` | VER-06, HOLD-02, ID-02, VER-01 |
| `14-§22-4` | §8.10, §12, §15 | SCN | C-ACC | DEPENDENCY-HELD | H | `D12`, `D14` | VER-06, HOLD-01, HOLD-03, VER-01 |
| `14-§22-5` | §8.10, §12, §15 | SCN | C-ACC | DEPENDENCY-HELD | H | `D12`, `D14` | VER-06, HOLD-01, HOLD-03, VER-01 |
| `14-§22-6` | §8.10, §12, §15 | SCN | C-ACC | DEPENDENCY-HELD | H | `D12`, `D14` | VER-06, HOLD-01, HOLD-03, VER-01, AUD-01 |
| `14-§22-7` | §8.10, §12, §15 | SCN | C-ACC | DEPENDENCY-HELD | H | `D12`, `D14` | VER-06, HOLD-01, HOLD-03, VER-01, THR-04 |
| `14-§22-8` | §8.10, §12, §15 | SCN | C-ACC | DEPENDENCY-HELD | H | `D15`, `DAI` | VER-06, HOLD-04, HOLD-08, VER-01 |
| `14-§22-9` | §8.10, §10.1, §12, §15 | SCN | C-ACC | CHANNEL-HELD | H | `D15`, `DNTF` | VER-06, HOLD-04, HOLD-06, FUP-02, VER-01, PRIV-04 |
| `14-§22-10` | §8.10, §12, §15 | SCN | C-ACC | DEPENDENCY-HELD | H | `D12`, `D14` | VER-06, HOLD-01, HOLD-03, VER-01 |
| `14-§22-11` | §8.10, §12, §15 | SCN | C-ACC | DEPENDENCY-HELD | H | `D12`, `D14` | VER-06, HOLD-01, HOLD-03, VER-01, MIG-01, AUD-01 |
| `14-§23-1` | §8.9, §10.3 | NEG | C-NEG | DESIGN ACCEPTED — EVIDENCE HOLD | L | none (design review) | NEG-01, VER-02 |
| `14-§23-2` | §8.9, §10.3 | NEG | C-NEG | DESIGN ACCEPTED — EVIDENCE HOLD | L | none (design review) | NEG-01, VER-02, MIG-01 |
| `14-§23-3` | §8.9, §10.3 | NEG | C-NEG | DESIGN ACCEPTED — EVIDENCE HOLD | L | none (design review) | NEG-01, VER-02 |
| `14-§23-4` | §8.9, §10.3 | NEG | C-NEG | DESIGN ACCEPTED — EVIDENCE HOLD | L | none (design review) | NEG-01, VER-02 |
| `14-§25-1` | §8.10, §12, §15 | GATE | C-ACC | LATER-MISSION-HELD | H | `D12`, `D13`, `D14`, `D15`, `D20` | VER-06, HOLD-01, HOLD-02, HOLD-03, HOLD-04, HOLD-07, VER-01 |
| `15-§1-1` | §8.4, §15 | EXP | E-PRN | DESIGN ACCEPTED — EVIDENCE HOLD | M | none (design review) | EVD-02, NEG-01, VER-06 |
| `15-§1-2` | §8.4, §10.1, §10.2, §11.6, §12 | RULE | E-SRC | PROVIDER-HELD | H | `DPAY` | SRC-01, SRC-02, SRC-03, SRC-04, SRC-05, SRC-06, SRC-08, SEC-06, ARC-03, HOLD-05, EVD-04, SRC-07, MIG-01, MIG-03, SEC-01, VER-01 |
| `15-§2-8` | §8.4, §10.2 | PRIN | E-PRN | DESIGN ACCEPTED — EVIDENCE HOLD | M | none (design review) | EVD-02, NEG-01 |
| `15-§3-1` | §8.4, §10.2 | PRIN | E-PRN | DESIGN ACCEPTED — EVIDENCE HOLD | M | none (design review) | EVD-02, NEG-01 |
| `15-§3-2` | §8.4, §10.2 | PRIN | E-PRN | DESIGN ACCEPTED — EVIDENCE HOLD | M | none (design review) | EVD-02, NEG-01 |
| `15-§3-3` | §8.4, §10.2 | PRIN | E-PRN | DESIGN ACCEPTED — EVIDENCE HOLD | M | none (design review) | EVD-02, NEG-01, IDM-02 |
| `15-§3-4` | §8.4, §10.2 | PRIN | E-PRN | DESIGN ACCEPTED — EVIDENCE HOLD | M | none (design review) | EVD-02, NEG-01 |
| `15-§3-5` | §8.4, §10.2 | PRIN | E-PRN | DESIGN ACCEPTED — EVIDENCE HOLD | M | none (design review) | EVD-02, NEG-01 |
| `15-§3-6` | §8.4, §10.2 | PRIN | E-PRN | DESIGN ACCEPTED — EVIDENCE HOLD | M | none (design review) | EVD-02, NEG-01, AUD-01 |
| `15-§3-7` | §8.4, §10.1, §10.2, §12 | PRIN | E-SRC | PROVIDER-HELD | H | `DPAY` | SRC-01, SRC-02, SRC-03, SRC-04, SRC-05, SRC-06, SRC-08, SEC-06, ARC-03, HOLD-05, EVD-04, MIG-01, MIG-03, SEC-01, VER-01 |
| `15-§4-1` | §8.4, §10.1, §12 | OBL | E-STATE | DEPENDENCY-HELD | H | `D14` | EVD-02, EVD-03, EVD-04, HOLD-03, BAL-02, VER-01 |
| `15-§4-2` | §8.4, §10.1, §12 | OBL | E-STATE | DEPENDENCY-HELD | H | `D14` | EVD-02, EVD-03, EVD-04, HOLD-03, BAL-02, VER-01 |
| `15-§4-3` | §8.4, §10.1, §12 | OBL | E-STATE | DEPENDENCY-HELD | H | `D14` | EVD-02, EVD-03, EVD-04, HOLD-03, BAL-02, VER-01 |
| `15-§4-4` | §8.4, §10.1, §12 | OBL | E-STATE | DEPENDENCY-HELD | H | `D14` | EVD-02, EVD-03, EVD-04, HOLD-03, BAL-02, VER-01 |
| `15-§4-5` | §8.4, §10.1, §12 | OBL | E-STATE | DEPENDENCY-HELD | H | `D14` | EVD-02, EVD-03, EVD-04, HOLD-03, BAL-02, VER-01 |
| `15-§4-6` | §8.4, §10.1, §12 | OBL | E-STATE | DEPENDENCY-HELD | H | `D14` | EVD-02, EVD-03, EVD-04, HOLD-03, BAL-02, VER-01 |
| `15-§4-7` | §8.4, §10.1, §12 | OBL | E-RVS | PROVIDER-HELD | H | `D14`, `DPAY` | RVS-01, RVS-02, RVS-03, RVS-04, HOLD-09, HOLD-03, HOLD-05, BAL-02, EVD-03, SRC-01, EVD-04, SRC-08, MIG-01, MIG-03, SEC-01, VER-01 |
| `15-§4-8` | §8.4, §10.1, §10.2, §12 | RULE | E-STATE | DEPENDENCY-HELD | H | `D14` | EVD-02, EVD-03, EVD-04, HOLD-03, BAL-02, VER-01 |
| `15-§5-1` | §8.4, §10.1, §11.6, §12 | OBL | E-SRC | PROVIDER-HELD | H | `DPAY` | SRC-01, SRC-02, SRC-03, SRC-04, SRC-05, SRC-06, SRC-08, SEC-06, ARC-03, HOLD-05, EVD-04, SRC-07, MIG-01, MIG-03, SEC-01, VER-01 |
| `15-§5-2` | §8.4, §10.1, §11.6, §12 | OBL | E-SRC | PROVIDER-HELD | H | `DPAY` | SRC-01, SRC-02, SRC-03, SRC-04, SRC-05, SRC-06, SRC-08, SEC-06, ARC-03, HOLD-05, EVD-04, SRC-07, MIG-01, MIG-03, SEC-01, VER-01 |
| `15-§5-3` | §8.4, §10.1, §12 | OBL | E-SRC | PROVIDER-HELD | H | `DPAY` | SRC-01, SRC-02, SRC-03, SRC-04, SRC-05, SRC-06, SRC-08, SEC-06, ARC-03, HOLD-05, EVD-04, MIG-01, MIG-03, SEC-01, VER-01 |
| `15-§5-4` | §8.4, §10.1, §12 | OBL | E-SRC | FOLLOW-UP | H | `DPAY` | SRC-01, SRC-02, SRC-03, SRC-04, SRC-05, SRC-06, SRC-08, SEC-06, ARC-03, HOLD-05, EVD-04, MIG-01, MIG-03, SEC-01, VER-01, STL-01 |
| `15-§5-5` | §8.4, §10.1, §12 | OBL | E-SRC | DEPENDENCY-HELD | H | `D14` | SRC-01, SRC-02, SRC-03, SRC-04, SRC-05, SRC-06, SRC-08, SEC-06, ARC-03, HOLD-03, EVD-04, PRIV-05, MIG-01, MIG-03, SEC-01, VER-01, EVD-06 |
| `15-§5-6` | §8.4, §10.1, §12 | OBL | E-SRC | LATER-MISSION-HELD | H | `D18` | SRC-01, SRC-02, SRC-03, SRC-04, SRC-05, SRC-06, SRC-08, SEC-06, ARC-03, HOLD-07, EVD-04, MIG-01, MIG-03, SEC-01, VER-01 |
| `15-§5-7` | §8.4, §10.1, §12 | OBL | E-SRC | PROVIDER-HELD | H | `DPAY` | SRC-01, SRC-02, SRC-03, SRC-04, SRC-05, SRC-06, SRC-08, SEC-06, ARC-03, HOLD-05, EVD-04, MIG-01, MIG-03, SEC-01, VER-01 |
| `15-§5-8` | §8.4, §10.3 | NEG | E-SRC | DESIGN ACCEPTED — EVIDENCE HOLD | H | none (design review) | SRC-01, SRC-02, SRC-03, SRC-04, SRC-05, SRC-06, SRC-08, SEC-06, ARC-03, NEG-01, VER-02, MIG-01, MIG-03, SEC-01, VER-01 |
| `15-§6-1` | §8.4, §12 | OBL | E-REC | DEPENDENCY-HELD | M | `D12` | EVD-01, EVD-05, PRIV-01, HOLD-01, MIG-01, MIG-03, SEC-01 |
| `15-§6-2` | §8.4, §12 | OBL | E-REC | PROVIDER-HELD | M | `D14`, `DPAY` | EVD-01, EVD-05, PRIV-01, HOLD-03, HOLD-05, SRC-08, MIG-01, MIG-03, SEC-01 |
| `15-§6-3` | §8.4, §12 | OBL | E-REC | PROVIDER-HELD | M | `D14`, `DPAY` | EVD-01, EVD-05, PRIV-01, HOLD-03, HOLD-05, SRC-08, MIG-01, MIG-03, SEC-01 |
| `15-§6-4` | §8.4, §12 | OBL | E-REC | PROVIDER-HELD | M | `D14`, `DPAY` | EVD-01, EVD-05, PRIV-01, HOLD-03, HOLD-05, SRC-08, MIG-01, MIG-03, SEC-01 |
| `15-§6-5` | §8.4, §12 | OBL | E-REC | PROVIDER-HELD | M | `D14`, `DPAY` | EVD-01, EVD-05, PRIV-01, HOLD-03, HOLD-05, SRC-08, MIG-01, MIG-03, SEC-01 |
| `15-§6-6` | §8.4, §12 | OBL | E-REC | PROVIDER-HELD | M | `D14`, `DPAY` | EVD-01, EVD-05, PRIV-01, HOLD-03, HOLD-05, SRC-08, MIG-01, MIG-03, SEC-01 |
| `15-§6-7` | §8.4, §12 | OBL | E-REC | PROVIDER-HELD | M | `D12`, `DPAY` | EVD-01, EVD-05, PRIV-01, HOLD-01, HOLD-05, SRC-08, MIG-01, MIG-03, SEC-01 |
| `15-§6-8` | §8.4, §12 | OBL | E-REC | PROVIDER-HELD | M | `D14`, `DPAY` | EVD-01, EVD-05, PRIV-01, HOLD-03, HOLD-05, PRIV-05, SRC-08, MIG-01, MIG-03, SEC-01, PRIV-06, EVD-06, AUTHZ-08, AUD-01 |
| `15-§6-9` | §8.4, §12 | OBL | E-REC | PROVIDER-HELD | M | `D14`, `DPAY` | EVD-01, EVD-05, PRIV-01, HOLD-03, HOLD-05, SRC-08, MIG-01, MIG-03, SEC-01 |
| `15-§6-10` | §8.4, §12 | OBL | E-REC | PROVIDER-HELD | M | `D14`, `DPAY` | EVD-01, EVD-05, PRIV-01, HOLD-03, HOLD-05, SRC-08, MIG-01, MIG-03, SEC-01 |
| `15-§6-11` | §8.4, §12 | OBL | E-REC | PROVIDER-HELD | M | `D12`, `DPAY` | EVD-01, EVD-05, PRIV-01, HOLD-01, HOLD-05, SRC-08, MIG-01, MIG-03, SEC-01, IDM-02 |
| `15-§6-12` | §8.4, §12 | OBL | E-REC | DEPENDENCY-HELD | M | `D14`, `DUF6` | EVD-01, EVD-05, PRIV-01, HOLD-03, PRIV-05, MIG-01, MIG-03, SEC-01, EVD-06 |
| `15-§7-1` | §8.5, §12 | OBL | E-MATCH | DEPENDENCY-HELD | M | `D14` | MAT-01, MAT-02, MAT-03, OPS-01, HOLD-03 |
| `15-§7-2` | §8.5, §12 | OBL | E-MATCH | PROVIDER-HELD | M | `DPAY` | MAT-01, MAT-02, MAT-03, OPS-01, HOLD-05, SRC-08 |
| `15-§7-3` | §8.5, §12 | OBL | E-MATCH | DEPENDENCY-HELD | M | `D14` | MAT-01, MAT-02, MAT-03, OPS-01, HOLD-03 |
| `15-§7-4` | §8.5, §12 | OBL | E-MATCH | DEPENDENCY-HELD | M | `D14` | MAT-01, MAT-02, MAT-03, OPS-01, HOLD-03 |
| `15-§7-5` | §8.5, §10.1, §12 | OBL | E-MATCH | DEPENDENCY-HELD | M | `D12` | MAT-01, MAT-02, MAT-03, OPS-01, HOLD-01, ID-02 |
| `15-§7-6` | §8.5, §12 | OBL | E-MATCH | DEPENDENCY-HELD | M | `D14` | MAT-01, MAT-02, MAT-03, OPS-01, HOLD-03 |
| `15-§7-7` | §8.5, §12 | OBL | E-MATCH | LATER-MISSION-HELD | M | `D14`, `D18` | MAT-01, MAT-02, MAT-03, OPS-01, HOLD-03, HOLD-07 |
| `15-§7-8` | §8.5, §12 | OBL | E-MATCH | PROVIDER-HELD | M | `DPAY` | MAT-01, MAT-02, MAT-03, OPS-01, HOLD-05, SRC-08, STL-01 |
| `15-§7-9` | §8.5, §10.3 | NEG | E-MATCH | DESIGN ACCEPTED — EVIDENCE HOLD | M | none (design review) | MAT-01, MAT-02, MAT-03, OPS-01, NEG-01, VER-02, MIG-01 |
| `15-§7-10` | §8.5, §12 | OBL | E-MATCH | DEPENDENCY-HELD | M | `D14` | MAT-01, MAT-02, MAT-03, OPS-01, HOLD-03, IDM-02 |
| `15-§8-1` | §8.5, §12 | OBL | E-LINK | DEPENDENCY-HELD | H | `D14`, `DTX` | LNK-01, LNK-02, LNK-03, CNC-01, CNC-02, BAL-02, HOLD-03, MIG-01, MIG-03, SEC-01, VER-03, VER-01 |
| `15-§8-2` | §8.5, §12 | OBL | E-LINK | DEPENDENCY-HELD | H | `D14`, `DTX` | LNK-01, LNK-02, LNK-03, CNC-01, CNC-02, BAL-02, HOLD-03, MIG-01, MIG-03, SEC-01, VER-03, VER-01 |
| `15-§8-3` | §8.5, §12 | OBL | E-LINK | DEPENDENCY-HELD | H | `D14`, `DTX` | LNK-01, LNK-02, LNK-03, CNC-01, CNC-02, BAL-02, HOLD-03, MIG-01, MIG-03, SEC-01, VER-03, VER-01 |
| `15-§8-4` | §8.5, §10.3, §12 | NEG | E-LINK | DEPENDENCY-HELD | H | `D14`, `DTX` | LNK-01, LNK-02, LNK-03, CNC-01, CNC-02, BAL-02, HOLD-03, CAD-01, CAD-02, CAD-06, CAD-07, CAD-08, HOLD-09, NEG-01, VER-02, MIG-01, MIG-03, SEC-01, VER-03, VER-01, CAD-05, IDM-02 |
| `15-§8-5` | §8.5, §12 | OBL | E-LINK | DEPENDENCY-HELD | H | `D14`, `DTX` | LNK-01, LNK-02, LNK-03, CNC-01, CNC-02, BAL-02, HOLD-03, MIG-01, MIG-03, SEC-01, VER-03, VER-01, AUD-01 |
| `15-§8-6` | §8.5, §12 | OBL | E-LINK | DEPENDENCY-HELD | H | `D15` | LNK-01, LNK-02, LNK-03, CNC-01, CNC-02, BAL-02, HOLD-04, MIG-01, MIG-03, SEC-01, VER-03, VER-01 |
| `15-§8-7` | §8.5, §10.2, §12 | RULE | E-LINK | DEPENDENCY-HELD | H | `D14` | LNK-01, LNK-02, LNK-03, CNC-01, CNC-02, BAL-02, HOLD-03, MIG-01, MIG-03, SEC-01, VER-03, VER-01 |
| `15-§9-1` | §8.5, §10.3, §12 | NEG | E-REV | DEPENDENCY-HELD | H | `D13` | REV-01, REV-02, REV-03, HOLD-02, NEG-01, VER-02, VER-01 |
| `15-§9-2` | §8.5, §12 | OBL | E-REV | DEPENDENCY-HELD | H | `D12`, `D13` | REV-01, REV-02, REV-03, HOLD-01, HOLD-02, VER-01 |
| `15-§9-3` | §8.5, §12 | OBL | E-REV | DEPENDENCY-HELD | H | `D12`, `D13` | REV-01, REV-02, REV-03, HOLD-01, HOLD-02, VER-01 |
| `15-§9-4` | §8.5, §12 | OBL | E-REV | DEPENDENCY-HELD | H | `D12`, `D13` | REV-01, REV-02, REV-03, HOLD-01, HOLD-02, VER-01 |
| `15-§9-5` | §8.5, §12 | OBL | E-REV | DEPENDENCY-HELD | H | `D12`, `D13` | REV-01, REV-02, REV-03, HOLD-01, HOLD-02, VER-01, CNC-03, AUTHZ-01 |
| `15-§9-6` | §8.5, §12 | OBL | E-REV | DEPENDENCY-HELD | H | `D14` | REV-01, REV-02, REV-03, HOLD-03, VER-01 |
| `15-§10-1` | §8.5, §12 | OBL | E-REV | DEPENDENCY-HELD | H | `D14` | REV-01, REV-02, REV-03, HOLD-03, PRIV-05, VER-01, EVD-06 |
| `15-§10-2` | §8.5, §12 | OBL | E-REV | DEPENDENCY-HELD | H | `D14` | REV-01, REV-02, REV-03, HOLD-03, VER-01, STL-01 |
| `15-§10-3` | §8.5, §10.3, §12 | NEG | E-REV | DEPENDENCY-HELD | H | `D14` | REV-01, REV-02, REV-03, HOLD-03, NEG-01, VER-02, VER-01 |
| `15-§10-4` | §8.5, §12 | OBL | E-REV | DEPENDENCY-HELD | H | `D12`, `D14`, `DTX` | REV-01, REV-02, REV-03, HOLD-01, HOLD-03, VER-01, AUD-01 |
| `15-§10-5` | §8.5, §12 | OBL | E-REV | DEPENDENCY-HELD | H | `D12` | REV-01, REV-02, REV-03, HOLD-01, VER-01, MIG-01, AUD-01 |
| `15-§11-1` | §8.5, §12 | OBL | E-REV | DEPENDENCY-HELD | H | `D14` | REV-01, REV-02, REV-03, HOLD-03, VER-01 |
| `15-§11-2` | §8.5, §12 | OBL | E-REV | DEPENDENCY-HELD | H | `D14` | REV-01, REV-02, REV-03, HOLD-03, PRIV-05, VER-01, EVD-06 |
| `15-§11-3` | §8.5, §12 | OBL | E-REV | DEPENDENCY-HELD | H | `D12`, `D15` | REV-01, REV-02, REV-03, HOLD-01, HOLD-04, VER-01 |
| `15-§11-4` | §8.5, §12 | OBL | E-REV | DEPENDENCY-HELD | H | `D12`, `D14`, `DTX` | REV-01, REV-02, REV-03, HOLD-01, HOLD-03, CAD-01, CAD-02, CAD-06, CAD-07, CAD-08, HOLD-09, VER-01 |
| `15-§11-5` | §8.5, §10.3, §12 | NEG | E-REV | DEPENDENCY-HELD | H | `D14` | REV-01, REV-02, REV-03, HOLD-03, CAD-01, CAD-02, CAD-06, CAD-07, CAD-08, HOLD-09, NEG-01, VER-02, VER-01, STL-01 |
| `15-§12-1` | §8.5, §12 | OBL | E-IDM | PROVIDER-HELD | H | `DPAY` | IDM-01, IDM-02, IDM-03, ERR-02, HOLD-05, SRC-08, MIG-01, MIG-03, SEC-01, VER-01, ERR-03 |
| `15-§12-2` | §8.5, §10.3, §12 | NEG | E-IDM | DEPENDENCY-HELD | H | `D14`, `DTX` | IDM-01, IDM-02, IDM-03, ERR-02, HOLD-03, NEG-01, VER-02, MIG-01, MIG-03, SEC-01, VER-01 |
| `15-§12-3` | §8.5, §10.3, §12 | NEG | E-IDM | DEPENDENCY-HELD | H | `D14`, `DTX` | IDM-01, IDM-02, IDM-03, ERR-02, HOLD-03, NEG-01, VER-02, MIG-01, MIG-03, SEC-01, VER-01 |
| `15-§12-4` | §8.5, §10.3, §12 | NEG | E-IDM | DEPENDENCY-HELD | H | `D14`, `DTX` | IDM-01, IDM-02, IDM-03, ERR-02, HOLD-03, NEG-01, VER-02, MIG-01, MIG-03, SEC-01, VER-01 |
| `15-§12-5` | §8.5, §10.3, §12 | NEG | E-IDM | DEPENDENCY-HELD | H | `D15` | IDM-01, IDM-02, IDM-03, ERR-02, HOLD-04, NEG-01, VER-02, MIG-01, MIG-03, SEC-01, VER-01 |
| `15-§12-6` | §8.5, §10.2, §12 | RULE | E-IDM | PROVIDER-HELD | H | `D12`, `DPAY` | IDM-01, IDM-02, IDM-03, ERR-02, HOLD-01, HOLD-05, SRC-08, MIG-01, MIG-03, SEC-01, VER-01, ERR-03 |
| `15-§13-1` | §8.5, §10.1, §12 | OBL | E-RVS | PROVIDER-HELD | H | `D14`, `DPAY` | RVS-01, RVS-02, RVS-03, RVS-04, HOLD-09, HOLD-03, HOLD-05, SRC-01, EVD-04, PRIV-05, SRC-08, MIG-01, MIG-03, SEC-01, VER-01, ERR-01 |
| `15-§13-2` | §8.5, §10.3, §12 | NEG | E-RVS | DEPENDENCY-HELD | H | `D14` | RVS-01, RVS-02, RVS-03, RVS-04, HOLD-09, HOLD-03, NEG-01, VER-02, PRIV-05, MIG-01, MIG-03, SEC-01, VER-01, PRIV-06 |
| `15-§13-3` | §8.5, §10.2, §12 | RULE | E-RVS | DEPENDENCY-HELD | H | `D14`, `DTX` | RVS-01, RVS-02, RVS-03, RVS-04, HOLD-09, HOLD-03, MIG-01, MIG-03, SEC-01, VER-01, AUD-01 |
| `15-§14-1` | §8.6, §12 | OBL | E-LINK | DEPENDENCY-HELD | H | `D14` | LNK-01, LNK-02, LNK-03, CNC-01, CNC-02, BAL-02, HOLD-03, CAD-01, CAD-02, CAD-06, CAD-07, CAD-08, HOLD-09, MIG-01, MIG-03, SEC-01, VER-03, VER-01 |
| `15-§14-2` | §8.6, §10.3, §12 | NEG | E-LINK | DEPENDENCY-HELD | H | `D14`, `DTX` | LNK-01, LNK-02, LNK-03, CNC-01, CNC-02, BAL-02, HOLD-03, CAD-01, CAD-02, CAD-06, CAD-07, CAD-08, HOLD-09, NEG-01, VER-02, MIG-01, MIG-03, SEC-01, VER-03, VER-01 |
| `15-§14-3` | §8.6, §10.1, §10.3, §12 | NEG | E-LINK | DEPENDENCY-HELD | H | `D14`, `DTX` | LNK-01, LNK-02, LNK-03, CNC-01, CNC-02, BAL-02, HOLD-03, ID-02, CAD-01, CAD-02, CAD-06, CAD-07, CAD-08, HOLD-09, NEG-01, VER-02, MIG-01, MIG-03, SEC-01, VER-03, VER-01 |
| `15-§14-4` | §8.6, §10.3, §12 | NEG | E-LINK | DEPENDENCY-HELD | H | `D13` | LNK-01, LNK-02, LNK-03, CNC-01, CNC-02, BAL-02, HOLD-02, NEG-01, VER-02, MIG-01, MIG-03, SEC-01, VER-03, VER-01 |
| `15-§15-1` | §8.6, §10.2, §12 | RULE | C-ORD | LATER-MISSION-HELD | M | `D18` | ORD-01, HOLD-07 |
| `15-§15-2` | §8.6, §12 | OBL | C-ORD | LATER-MISSION-HELD | M | `D18`, `D14` | ORD-01, HOLD-07, HOLD-03 |
| `15-§15-3` | §8.6, §12 | OBL | C-ORD | LATER-MISSION-HELD | M | `D18`, `D14` | ORD-01, HOLD-07, HOLD-03 |
| `15-§15-4` | §8.6, §12 | OBL | C-ORD | LATER-MISSION-HELD | M | `D18`, `D14` | ORD-01, HOLD-07, HOLD-03 |
| `15-§15-5` | §8.6, §12 | OBL | C-ORD | LATER-MISSION-HELD | M | `D18`, `D14` | ORD-01, HOLD-07, HOLD-03 |
| `15-§15-6` | §8.6, §12 | OBL | C-ORD | LATER-MISSION-HELD | M | `D18`, `D14` | ORD-01, HOLD-07, HOLD-03 |
| `15-§15-7` | §8.6, §10.3, §12 | NEG | C-ORD | LATER-MISSION-HELD | M | `D18`, `DTX` | ORD-01, HOLD-07, HOLD-03, NEG-01, VER-02, IDM-02 |
| `15-§16-1` | §8.6, §12 | OBL | C-READ | DEPENDENCY-HELD | M | `D15`, `DAI` | READ-01, BAL-03, BAL-05, OPS-02, AI-02, HOLD-04, HOLD-08 |
| `15-§16-2` | §8.6, §12 | OBL | C-READ | DEPENDENCY-HELD | M | `D15`, `DAI` | READ-01, BAL-03, BAL-05, OPS-02, AI-02, HOLD-04, HOLD-08 |
| `15-§16-3` | §8.6, §12 | OBL | C-READ | DEPENDENCY-HELD | M | `D15`, `DAI` | READ-01, BAL-03, BAL-05, OPS-02, AI-02, HOLD-04, HOLD-08 |
| `15-§16-4` | §8.6, §12 | OBL | C-READ | DEPENDENCY-HELD | M | `D15`, `DAI` | READ-01, BAL-03, BAL-05, OPS-02, AI-02, HOLD-04, HOLD-08 |
| `15-§16-5` | §8.6, §12 | OBL | C-READ | DEPENDENCY-HELD | M | `D15`, `DAI` | READ-01, BAL-03, BAL-05, OPS-02, AI-02, HOLD-04, HOLD-08 |
| `15-§16-6` | §8.6, §10.3, §12 | NEG | C-READ | DEPENDENCY-HELD | M | `D15`, `DAI` | READ-01, BAL-03, BAL-05, OPS-02, AI-02, HOLD-04, HOLD-08, NEG-01, VER-02 |
| `15-§17-1` | §8.7, §12 | OBL | C-AUTH | DEPENDENCY-HELD | H | `D12` | AUTHZ-01, AUTHZ-02, AUTHZ-03, AUTHZ-04, AUTHZ-05, AUTHZ-06, AUTHZ-09, HOLD-01, VER-01, REP-03 |
| `15-§17-2` | §8.7, §10.1, §12 | OBL | C-AUTH | DEPENDENCY-HELD | H | `D12` | AUTHZ-01, AUTHZ-02, AUTHZ-03, AUTHZ-04, AUTHZ-05, AUTHZ-06, AUTHZ-09, HOLD-01, VER-01, REP-03 |
| `15-§17-3` | §8.7, §12 | OBL | C-AUTH | DEPENDENCY-HELD | H | `D12` | AUTHZ-01, AUTHZ-02, AUTHZ-03, AUTHZ-04, AUTHZ-05, AUTHZ-06, AUTHZ-09, HOLD-01, VER-01 |
| `15-§17-4` | §8.7, §10.3, §12 | NEG | C-AUTH | LATER-MISSION-HELD | H | `D12`, `D19` | AUTHZ-01, AUTHZ-02, AUTHZ-03, AUTHZ-04, AUTHZ-05, AUTHZ-06, AUTHZ-09, HOLD-01, HOLD-07, NEG-01, VER-02, VER-01, AUTHZ-07 |
| `15-§18-1a` | §8.7, §12 | OBL | C-LANG | DEPENDENCY-HELD | M | `D13` | LANG-01, HOLD-02 |
| `15-§18-2` | §8.7, §10.3, §12 | NEG | C-LANG | DEPENDENCY-HELD | M | `D13` | LANG-01, HOLD-02, NEG-01, VER-02, PRIV-01 |
| `15-§19-1` | §8.7, §12 | OBL | C-CNF | DEPENDENCY-HELD | H | `D12`, `D13` | CNC-03, CNC-04, REV-01, AUTHZ-06, HOLD-01, HOLD-02, VER-03, CNC-02, VER-01 |
| `15-§19-2` | §8.7, §12 | OBL | C-CNF | DEPENDENCY-HELD | H | `D12`, `D13` | CNC-03, CNC-04, REV-01, AUTHZ-06, HOLD-01, HOLD-02, VER-03, CNC-02, VER-01, AUD-01 |
| `15-§19-3` | §8.7, §12 | OBL | C-CNF | DEPENDENCY-HELD | H | `D12`, `D13` | CNC-03, CNC-04, REV-01, AUTHZ-06, HOLD-01, HOLD-02, VER-03, CNC-02, VER-01 |
| `15-§19-4` | §8.7, §12 | OBL | C-CNF | DEPENDENCY-HELD | H | `D12`, `D13` | CNC-03, CNC-04, REV-01, AUTHZ-06, HOLD-01, HOLD-02, VER-03, CNC-02, VER-01 |
| `15-§19-5` | §8.7, §12 | OBL | C-CNF | DEPENDENCY-HELD | H | `D12`, `D13` | CNC-03, CNC-04, REV-01, AUTHZ-06, HOLD-01, HOLD-02, VER-03, CNC-02, VER-01 |
| `15-§20-1` | §8.8, §12 | OBL | C-EXC | DEPENDENCY-HELD | M | `D14` | ERR-01, ERR-02, ERR-04, HOLD-03 |
| `15-§20-2` | §8.8, §12 | OBL | C-EXC | DEPENDENCY-HELD | M | `D14` | ERR-01, ERR-02, ERR-04, HOLD-03, PRIV-05, PRIV-06, ERR-03 |
| `15-§20-3` | §8.8, §12 | OBL | C-EXC | DEPENDENCY-HELD | M | `D14` | ERR-01, ERR-02, ERR-04, HOLD-03 |
| `15-§20-4` | §8.8, §12 | OBL | C-EXC | DEPENDENCY-HELD | M | `D14` | ERR-01, ERR-02, ERR-04, HOLD-03 |
| `15-§20-5` | §8.8, §10.3, §12 | NEG | C-EXC | PROVIDER-HELD | M | `DPAY` | ERR-01, ERR-02, ERR-04, HOLD-05, NEG-01, VER-02, SRC-08, ERR-03 |
| `15-§21-1` | §8.8, §12 | OBL | C-EXC | PROVIDER-HELD | M | `DPAY` | ERR-01, ERR-02, ERR-04, HOLD-05, SRC-08, ERR-03 |
| `15-§21-2` | §8.8, §12 | OBL | C-EXC | DEPENDENCY-HELD | M | `D14` | ERR-01, ERR-02, ERR-04, HOLD-03 |
| `15-§21-3` | §8.8, §12 | OBL | C-EXC | PROVIDER-HELD | M | `DPAY` | ERR-01, ERR-02, ERR-04, HOLD-05, SRC-08 |
| `15-§21-4` | §8.8, §12 | OBL | C-EXC | DEPENDENCY-HELD | M | `D14` | ERR-01, ERR-02, ERR-04, HOLD-03, IDM-02 |
| `15-§21-5` | §8.8, §12 | OBL | C-EXC | DEPENDENCY-HELD | M | `D14` | ERR-01, ERR-02, ERR-04, HOLD-03 |
| `15-§21-6` | §8.8, §12 | OBL | C-EXC | DEPENDENCY-HELD | M | `D14` | ERR-01, ERR-02, ERR-04, HOLD-03 |
| `15-§21-7` | §8.8, §12 | OBL | C-EXC | DEPENDENCY-HELD | M | `D14` | ERR-01, ERR-02, ERR-04, HOLD-03 |
| `15-§21-8` | §8.8, §12 | OBL | C-EXC | DEPENDENCY-HELD | M | `D14` | ERR-01, ERR-02, ERR-04, HOLD-03, VER-03 |
| `15-§21-9` | §8.8, §12 | OBL | C-EXC | DEPENDENCY-HELD | M | `D12` | ERR-01, ERR-02, ERR-04, HOLD-01, VER-03, AUTHZ-01 |
| `15-§21-10` | §8.8, §10.1, §12 | OBL | E-RVS | PROVIDER-HELD | H | `D14`, `DPAY` | RVS-01, RVS-02, RVS-03, RVS-04, HOLD-09, HOLD-03, HOLD-05, SRC-01, EVD-04, SRC-08, MIG-01, MIG-03, SEC-01, VER-01 |
| `15-§21-11` | §8.8, §12 | OBL | C-EXC | DEPENDENCY-HELD | M | `D15` | ERR-01, ERR-02, ERR-04, HOLD-04 |
| `15-§22-1` | §8.8, §12 | OBL | C-PRIV | PROVIDER-HELD | H | `DPAY` | SEC-01, SEC-02, SEC-03, SEC-04, SEC-05, PRIV-01, AUTHZ-07, HOLD-05, SRC-08, VER-01 |
| `15-§22-2` | §8.8, §12 | OBL | C-PRIV | DEPENDENCY-HELD | H | `D14` | SEC-01, SEC-02, SEC-03, SEC-04, SEC-05, PRIV-01, AUTHZ-07, HOLD-03, PRIV-05, VER-01, AUTHZ-08 |
| `15-§22-3` | §8.8, §12 | OBL | C-PRIV | DEPENDENCY-HELD | H | `D12` | SEC-01, SEC-02, SEC-03, SEC-04, SEC-05, PRIV-01, AUTHZ-07, HOLD-01, VER-01 |
| `15-§22-4` | §8.8, §12 | OBL | C-PRIV | DEPENDENCY-HELD | H | `D12` | SEC-01, SEC-02, SEC-03, SEC-04, SEC-05, PRIV-01, AUTHZ-07, HOLD-01, VER-01 |
| `15-§22-5` | §8.8, §12 | OBL | C-PRIV | DEPENDENCY-HELD | H | `D12` | SEC-01, SEC-02, SEC-03, SEC-04, SEC-05, PRIV-01, AUTHZ-07, HOLD-01, PRIV-05, VER-01, GOV-02, PRIV-03, AUD-01 |
| `15-§22-6` | §8.8, §10.3, §12 | NEG | C-PRIV | PROVIDER-HELD | H | `DPAY` | SEC-01, SEC-02, SEC-03, SEC-04, SEC-05, PRIV-01, AUTHZ-07, HOLD-05, NEG-01, VER-02, SRC-08, VER-01 |
| `15-§23-1` | §8.9, §10.2, §12 | RULE | C-FND | DEPENDENCY-HELD | M | `D14` | ARC-01, ARC-02, HOLD-03 |
| `15-§23-2` | §8.9, §10.1, §10.2, §12 | RULE | C-FND | DEPENDENCY-HELD | M | `D12` | ARC-01, ARC-02, HOLD-01, ID-02 |
| `15-§23-3` | §8.9, §10.2, §12 | RULE | C-FND | DEPENDENCY-HELD | M | `D12` | ARC-01, ARC-02, HOLD-01, AUTHZ-01 |
| `15-§23-4` | §8.9, §10.2, §12 | RULE | C-FND | DEPENDENCY-HELD | M | `D12` | ARC-01, ARC-02, HOLD-01, IDM-02, AUD-01 |
| `15-§23-5` | §8.9, §10.2, §12 | RULE | C-FND | DEPENDENCY-HELD | M | `D15` | ARC-01, ARC-02, HOLD-04 |
| `15-§23-6` | §8.9, §10.2 | RULE | C-FND | DESIGN ACCEPTED — EVIDENCE HOLD | M | none (design review) | ARC-01, ARC-02 |
| `15-§23-7` | §8.9, §10.2, §12 | RULE | C-FND | LATER-MISSION-HELD | M | `D18` | ARC-01, ARC-02, HOLD-07 |
| `15-§23-8` | §8.9, §10.2, §12 | RULE | C-FND | DEPENDENCY-HELD | M | `D15` | ARC-01, ARC-02, HOLD-04 |
| `15-§24-1` | §8.9, §10.3 | NEG | C-NEG | DESIGN ACCEPTED — EVIDENCE HOLD | L | none (design review) | NEG-01, VER-02 |
| `15-§24-2` | §8.9, §10.3 | NEG | C-NEG | DESIGN ACCEPTED — EVIDENCE HOLD | L | none (design review) | NEG-01, VER-02, IDM-02 |
| `15-§24-3` | §8.9, §10.3 | NEG | C-NEG | DESIGN ACCEPTED — EVIDENCE HOLD | L | none (design review) | NEG-01, VER-02 |
| `15-§24-4` | §8.9, §10.3 | NEG | C-NEG | DESIGN ACCEPTED — EVIDENCE HOLD | L | none (design review) | NEG-01, VER-02, MIG-01 |
| `15-§24-5` | §8.9, §10.3 | NEG | C-NEG | DESIGN ACCEPTED — EVIDENCE HOLD | L | none (design review) | NEG-01, VER-02, ERR-01 |
| `15-§24-6` | §8.9, §10.3 | NEG | C-NEG | DESIGN ACCEPTED — EVIDENCE HOLD | L | none (design review) | NEG-01, VER-02 |
| `15-§25-1` | §8.10, §12, §15 | SCN | C-ACC | DEPENDENCY-HELD | H | `D14`, `DTX` | VER-06, HOLD-03, VER-01 |
| `15-§25-2` | §8.10, §12, §15 | SCN | C-ACC | PROVIDER-HELD | H | `D14`, `DPAY` | VER-06, HOLD-03, HOLD-05, SRC-08, VER-01, ERR-03, IDM-02 |
| `15-§25-3` | §8.10, §12, §15 | SCN | C-ACC | DEPENDENCY-HELD | H | `D12`, `D13` | VER-06, HOLD-01, HOLD-02, VER-01 |
| `15-§25-4` | §8.10, §12, §15 | SCN | C-ACC | DEPENDENCY-HELD | H | `D12`, `D14` | VER-06, HOLD-01, HOLD-03, VER-01 |
| `15-§25-5` | §8.10, §12, §15 | SCN | C-ACC | DEPENDENCY-HELD | H | `D12`, `D14` | VER-06, HOLD-01, HOLD-03, VER-01 |
| `15-§25-6` | §8.10, §10.1, §12, §15 | SCN | C-ACC | DEPENDENCY-HELD | H | `D14`, `DTX` | VER-06, HOLD-03, ID-02, VER-01, AUD-01 |
| `15-§25-7` | §8.10, §12, §15 | SCN | C-ACC | LATER-MISSION-HELD | H | `D18`, `DTX` | VER-06, HOLD-07, HOLD-03, VER-01, IDM-02 |
| `15-§25-8` | §8.10, §12, §15 | SCN | C-ACC | DEPENDENCY-HELD | H | `D12`, `D14` | VER-06, HOLD-01, HOLD-03, VER-01, AUTHZ-01 |
| `15-§25-9` | §8.10, §12, §15 | SCN | C-ACC | PROVIDER-HELD | H | `DPAY` | VER-06, HOLD-05, SRC-08, VER-01, ERR-01 |
| `15-§25-10` | §8.10, §12, §15 | SCN | C-ACC | DEPENDENCY-HELD | H | `D15`, `DAI` | VER-06, HOLD-04, HOLD-08, VER-01 |
| `15-§25-11` | §8.10, §12, §15 | SCN | C-ACC | DEPENDENCY-HELD | H | `D12`, `D14` | VER-06, HOLD-01, HOLD-03, VER-01 |
| `15-§25-12` | §8.10, §10.1, §12, §15 | SCN | C-ACC | PROVIDER-HELD | H | `D14`, `DPAY` | VER-06, HOLD-03, HOLD-05, SRC-01, EVD-04, SRC-08, VER-01, MIG-01 |
| `15-§26-4` | §8.9, §10.3 | NEG | C-NEG | DESIGN ACCEPTED — EVIDENCE HOLD | L | none (design review) | NEG-01, VER-02 |
| `15-§26-5` | §8.9, §10.3 | NEG | C-NEG | DESIGN ACCEPTED — EVIDENCE HOLD | L | none (design review) | NEG-01, VER-02 |
| `15-§26-6` | §8.9, §10.3 | NEG | C-NEG | DESIGN ACCEPTED — EVIDENCE HOLD | L | none (design review) | NEG-01, VER-02, ERR-01 |
| `15-§28-1` | §8.10, §12, §15 | GATE | C-ACC | PROVIDER-HELD | H | `D12`, `D13`, `D14`, `D15`, `DPAY` | VER-06, HOLD-01, HOLD-02, HOLD-03, HOLD-04, HOLD-05, SRC-08, VER-01, SRC-07, IDM-02 |
| `3-§9-12` | §8.2, §10.1, §12, §15 | SCN | C-BAL | DEPENDENCY-HELD | H | `D14` | BAL-01, BAL-02, BAL-03, BAL-04, BAL-05, ID-05, OPS-01, HOLD-03, ID-02, ID-04, MIG-05, CAD-01, CAD-02, CAD-06, CAD-07, CAD-08, HOLD-09, VER-06, MIG-01, MIG-03, SEC-01, MIG-04, VER-01, CAD-03, PRIV-02 |
| `3-§11-6` | §8.7, §12 | OBL | C-AUTH | DEPENDENCY-HELD | H | `D12`, `D14` | AUTHZ-01, AUTHZ-02, AUTHZ-03, AUTHZ-04, AUTHZ-05, AUTHZ-06, AUTHZ-09, HOLD-01, HOLD-03, VER-01 |
| `3-§15-8` | §8.2, §10.2, §12 | RULE | C-FND | DEPENDENCY-HELD | M | `D12`, `D14` | ARC-01, ARC-02, HOLD-01, HOLD-03, IDM-02 |
| `3-§15-9` | §8.4, §10.2, §12 | RULE | C-FND | DEPENDENCY-HELD | M | `D12`, `D14` | ARC-01, ARC-02, HOLD-01, HOLD-03, IDM-02 |
| `3-§23` | §8.10, §12, §15 | GATE | C-ACC | LATER-MISSION-HELD | H | `D12`, `D13`, `D14`, `D15`, `D20` | VER-06, HOLD-01, HOLD-02, HOLD-03, HOLD-04, HOLD-07, VER-01 |
| `24-§21-4` | §8.7, §12 | OBL | C-CNF | DEPENDENCY-HELD | H | `D12`, `D13` | CNC-03, CNC-04, REV-01, AUTHZ-06, HOLD-01, HOLD-02, VER-03, CNC-02, VER-01 |
| `24-§21-5` | §8.7, §12 | OBL | C-CNF | DEPENDENCY-HELD | H | `D12`, `D13` | CNC-03, CNC-04, REV-01, AUTHZ-06, HOLD-01, HOLD-02, VER-03, CNC-02, VER-01 |
| `9-§12-11` | §8.7, §12 | OBL | C-LANG | DEPENDENCY-HELD | M | `D13` | LANG-01, HOLD-02 |
| `10-§17-5` | §8.5, §12 | OBL | E-REV | DEPENDENCY-HELD | H | `D13` | REV-01, REV-02, REV-03, HOLD-02, VER-01 |
| `22-§17-3` | §8.4, §10.2, §12 | RULE | E-SRC | PROVIDER-HELD | H | `DPAY` | SRC-01, SRC-02, SRC-03, SRC-04, SRC-05, SRC-06, SRC-08, SEC-06, ARC-03, HOLD-05, MIG-01, MIG-03, SEC-01, VER-01 |
| `BP-§5.3-1` | §8.9, §10.2 | RULE | G-GOV | DESIGN ACCEPTED — EVIDENCE HOLD | L | none (design review) | GOV-01, VER-07, GOV-02 |
| `BP-§5.4-1` | §8.4, §10.1, §10.2, §12 | RULE | E-SRC | PROVIDER-HELD | H | `DPAY` | SRC-01, SRC-02, SRC-03, SRC-04, SRC-05, SRC-06, SRC-08, SEC-06, ARC-03, HOLD-05, EVD-04, MIG-01, MIG-03, SEC-01, VER-01, ERR-01 |
| `BP-§6.1-1` | §8.9, §10.3, §12 | NEG | C-FND | DEPENDENCY-HELD | M | `D12` | ARC-01, ARC-02, HOLD-01, NEG-01, VER-02, AI-01, AUD-04 |
| `BP-§6.2-1` | §8.9, §10.2, §12 | RULE | C-FND | DEPENDENCY-HELD | M | `D12`, `D13`, `DTX` | ARC-01, ARC-02, HOLD-01, HOLD-02, HOLD-03, CAD-01, CAD-02, CAD-06, CAD-07, CAD-08, HOLD-09, MIG-06, CAD-04, AUD-01 |
| `BP-§6.3-1` | §8.9, §10.2, §12 | RULE | C-FND | DEPENDENCY-HELD | M | `D14` | ARC-01, ARC-02, HOLD-03 |
| `BP-§6.5-1` | §8.3, §10.2, §12 | RULE | C-FUP | DEPENDENCY-HELD | M | `D15` | FUP-01, FUP-02, FUP-03, PRIV-02, PRIV-04, HOLD-04 |
| `BP-§8-1` | §8.7, §10.2, §12 | RULE | C-LANG | DEPENDENCY-HELD | M | `D13` | LANG-01, HOLD-02 |
| `BP-§9-2` | §8.10, §10.2 | RULE | G-GOV | DESIGN ACCEPTED — EVIDENCE HOLD | L | none (design review) | GOV-01, VER-07, GOV-02 |
| `BP-§9-AL` | §8.10, §10.2 | RULE | G-GOV | DESIGN ACCEPTED — EVIDENCE HOLD | L | none (design review) | GOV-01, VER-07, GOV-02 |
| `BP-§10.3-C2` | §8.2, §10.2, §12 | RULE | C-LDG | DEPENDENCY-HELD | H | `D14` | LDG-01, LDG-02, ARC-02, AUD-01, SEC-02, HOLD-03, MIG-01, MIG-03, SEC-01, MIG-02, VER-01 |
| `BP-§10.5-O` | §8.10, §12, §15 | EXP | C-ACC | DEPENDENCY-HELD | H | `D12`, `D14` | VER-06, HOLD-01, HOLD-03, VER-01 |
| `BP-§10.5-W1` | §8.2, §10.1, §12 | WORK | C-ID | DEPENDENCY-HELD | H | `D14` | ID-01, ID-02, ID-04, ID-05, AUTHZ-05, SEC-03, HOLD-03, MIG-01, MIG-03, SEC-01, MIG-02, VER-01, MIG-06, MIG-05 |
| `BP-§10.5-W2` | §8.2, §12 | WORK | C-REP | DEPENDENCY-HELD | H | `D14`, `DTX` | REP-01, REP-02, REP-03, REP-04, ID-03, CNC-01, IDM-02, BAL-04, HOLD-03, MIG-01, MIG-03, SEC-01, VER-03, CNC-02, VER-01, MIG-05 |
| `BP-§10.5-W3` | §8.3, §10.1, §12 | WORK | C-DUE | DEPENDENCY-HELD | H | `D14`, `D15` | DUE-01, DUE-02, DUE-03, DUE-04, HOLD-03, HOLD-04, MIG-01, MIG-03, SEC-01, MIG-02, VER-01 |
| `BP-§10.5-W4` | §8.3, §10.1, §12 | WORK | C-THR | DEPENDENCY-HELD | M | `D12` | THR-01, THR-02, THR-03, THR-04, AUD-02, HOLD-01, AUTHZ-03, MIG-01, MIG-03, SEC-01 |
| `BP-§10.5-W5` | §8.4, §10.1, §12 | WORK | E-SRC | PROVIDER-HELD | H | `D14`, `DPAY` | SRC-01, SRC-02, SRC-03, SRC-04, SRC-05, SRC-06, SRC-08, SEC-06, ARC-03, HOLD-03, HOLD-05, EVD-04, MIG-01, MIG-03, SEC-01, VER-01 |
| `BP-§10.5-W6` | §8.5, §12 | WORK | E-MATCH | PROVIDER-HELD | M | `D14`, `DPAY`, `DTX` | MAT-01, MAT-02, MAT-03, OPS-01, HOLD-03, HOLD-05, SRC-08 |
| `BP-§10.5-W7` | §8.5, §12 | WORK | E-MATCH | DEPENDENCY-HELD | M | `D14` | MAT-01, MAT-02, MAT-03, OPS-01, HOLD-03 |
| `BP-§10.5-W8` | §8.5, §12 | WORK | E-REV | DEPENDENCY-HELD | H | `D12`, `D13` | REV-01, REV-02, REV-03, HOLD-01, HOLD-02, VER-01 |
| `BP-§10.5-W9` | §8.5, §12 | WORK | E-IDM | DEPENDENCY-HELD | H | `D14`, `DTX` | IDM-01, IDM-02, IDM-03, ERR-02, HOLD-03, MIG-01, MIG-03, SEC-01, VER-01 |
| `BP-§10.5-W10` | §8.5, §10.1, §12 | WORK | E-REV | DEPENDENCY-HELD | H | `D14`, `D15` | REV-01, REV-02, REV-03, HOLD-03, HOLD-04, BAL-02, EVD-03, VER-01 |
| `BP-§10.5-W11` | §8.5, §12 | WORK | C-AUD | DEPENDENCY-HELD | H | `D12`, `D14`, `DTX` | AUD-01, AUD-02, AUD-03, BAL-04, ERR-04, HOLD-01, HOLD-03, VER-01 |
| `BP-§10.5-E1` | §8.10, §12, §15 | EXP | C-ACC | DEPENDENCY-HELD | H | `D12` | VER-06, HOLD-01, VER-01 |
| `BP-§10.5-E2` | §8.10, §10.1, §12, §15 | EXP | C-ACC | PROVIDER-HELD | H | `D14`, `DPAY` | VER-06, HOLD-03, HOLD-05, BAL-02, EVD-03, SRC-08, VER-01 |
| `BP-§10.5-E3` | §8.10, §12, §15 | EXP | C-ACC | DEPENDENCY-HELD | H | `D12`, `D13` | VER-06, HOLD-01, HOLD-02, VER-01 |
| `BP-§10.5-E4` | §8.10, §12, §15 | EXP | C-ACC | DEPENDENCY-HELD | H | `D14`, `DTX` | VER-06, HOLD-03, CAD-01, CAD-02, CAD-06, CAD-07, CAD-08, HOLD-09, VER-01, CAD-03, IDM-02 |
| `BP-§10.5-A1` | §8.10, §10.1, §12, §15 | FRV | C-ACC | DEPENDENCY-HELD | H | `D12`, `D14` | VER-06, HOLD-01, HOLD-03, DUE-01, VER-01, VER-04 |
| `BP-§10.5-A2` | §8.10, §10.1, §12, §15 | FRV | C-ACC | DEPENDENCY-HELD | H | `D12`, `D14` | VER-06, HOLD-01, HOLD-03, AUTHZ-03, VER-01, VER-04 |
| `BP-§10.5-A3` | §8.10, §12, §15 | FRV | C-ACC | DEPENDENCY-HELD | H | `D12`, `DTX` | VER-06, HOLD-01, HOLD-03, VER-01, VER-04 |
| `BP-§10.5-B1` | §8.10, §12, §15 | FRV | C-ACC | FOLLOW-UP | H | `D14`, `DPAY` | VER-06, HOLD-03, HOLD-05, SRC-08, VER-01, VER-05 |
| `BP-§10.5-B2` | §8.10, §12, §15 | FRV | C-ACC | FOLLOW-UP | H | `D12`, `D13` | VER-06, HOLD-01, HOLD-02, VER-01, VER-05 |
| `BP-§10.5-B3` | §8.10, §12, §15 | FRV | C-ACC | FOLLOW-UP | H | `D14`, `DTX` | VER-06, HOLD-03, VER-01, VER-05, IDM-02 |
| `BP-§10.5-X` | §8.10, §12, §15 | EXP | C-ACC | DEPENDENCY-HELD | H | `D12`, `D14` | VER-06, HOLD-01, HOLD-03, CAD-01, CAD-02, CAD-06, CAD-07, CAD-08, HOLD-09, VER-01 |
| `BP-§11-1` | §8.6, §10.2, §12 | RULE | C-ORD | LATER-MISSION-HELD | M | `D18` | ORD-01, HOLD-07 |
| `BP-§11-5` | §8.9, §10.2 | RULE | G-GOV | DESIGN ACCEPTED — EVIDENCE HOLD | L | none (design review) | GOV-01, VER-07, GOV-02 |
| `BP-§13-1` | §8.10, §10.2 | RULE | G-GOV | DESIGN ACCEPTED — EVIDENCE HOLD | L | none (design review) | GOV-01, VER-07, GOV-02 |
| `BP-§13-9` | §8.10, §10.2 | RULE | G-GOV | DESIGN ACCEPTED — EVIDENCE HOLD | L | none (design review) | GOV-01, VER-07, GOV-02, VER-04, VER-05 |
| `BP-§14-1` | §8.9, §10.2 | RULE | G-GOV | DESIGN ACCEPTED — EVIDENCE HOLD | L | none (design review) | GOV-01, VER-07, GOV-02 |

### 35.3 EIS requirement to FCTM rows

Rows are listed when 20 or fewer; larger sets are exactly the rows citing the requirement in Section 35.2.

| Requirement | Section | FCTM rows | Rows |
|---|---|---|---|
| `EIS16-ARC-01` | 6 | 33 | see Section 35.2 |
| `EIS16-ARC-02` | 6 | 35 | see Section 35.2 |
| `EIS16-ARC-03` | 6 | 13 | `15-§1-2`, `15-§3-7`, `15-§5-1`, `15-§5-2`, `15-§5-3`, `15-§5-4`, `15-§5-5`, `15-§5-6`, `15-§5-7`, `15-§5-8`, `22-§17-3`, `BP-§5.4-1`, `BP-§10.5-W5` |
| `EIS16-ID-01` | 7 | 9 | `14-§4-1`, `14-§4-2`, `14-§4-3`, `14-§4-4`, `14-§4-5`, `14-§4-6`, `14-§13-1`, `14-§18-1`, `BP-§10.5-W1` |
| `EIS16-ID-02` | 7 | 24 | see Section 35.2 |
| `EIS16-ID-03` | 7 | 8 | `14-§7-1`, `14-§7-2`, `14-§7-3`, `14-§7-5`, `14-§7-6`, `14-§7-7`, `14-§18-3`, `BP-§10.5-W2` |
| `EIS16-ID-04` | 7 | 11 | `14-§4-1`, `14-§4-2`, `14-§4-3`, `14-§4-4`, `14-§4-5`, `14-§4-6`, `14-§13-1`, `14-§18-1`, `14-§22-1`, `3-§9-12`, `BP-§10.5-W1` |
| `EIS16-ID-05` | 7 | 12 | `14-§4-1`, `14-§4-2`, `14-§4-3`, `14-§4-4`, `14-§4-5`, `14-§4-6`, `14-§5-7`, `14-§7-4`, `14-§13-1`, `14-§18-1`, `3-§9-12`, `BP-§10.5-W1` |
| `EIS16-LDG-01` | 8 | 12 | `14-§5-1`, `14-§5-2`, `14-§5-3`, `14-§5-4`, `14-§5-5`, `14-§5-8`, `14-§5-9`, `14-§5-10`, `14-§5-11`, `14-§5-12`, `14-§5-13`, `BP-§10.3-C2` |
| `EIS16-LDG-02` | 8 | 12 | `14-§5-1`, `14-§5-2`, `14-§5-3`, `14-§5-4`, `14-§5-5`, `14-§5-8`, `14-§5-9`, `14-§5-10`, `14-§5-11`, `14-§5-12`, `14-§5-13`, `BP-§10.3-C2` |
| `EIS16-LDG-03` | 8 | 6 | `14-§6-1`, `14-§6-2`, `14-§6-3`, `14-§6-4`, `14-§6-5`, `14-§6-6` |
| `EIS16-BAL-01` | 9 | 3 | `14-§5-7`, `14-§7-4`, `3-§9-12` |
| `EIS16-BAL-02` | 9 | 24 | see Section 35.2 |
| `EIS16-BAL-03` | 9 | 20 | `14-§5-7`, `14-§7-4`, `14-§11-1`, `14-§11-2`, `14-§11-3`, `14-§11-4`, `14-§11-5`, `14-§12-1`, `14-§12-2`, `14-§12-3`, `14-§12-4`, `14-§12-5`, `14-§12-6`, `15-§16-1`, `15-§16-2`, `15-§16-3`, `15-§16-4`, `15-§16-5`, `15-§16-6`, `3-§9-12` |
| `EIS16-BAL-04` | 9 | 17 | `14-§5-7`, `14-§7-1`, `14-§7-2`, `14-§7-3`, `14-§7-4`, `14-§7-5`, `14-§7-6`, `14-§7-7`, `14-§17-1`, `14-§17-2`, `14-§17-3`, `14-§17-4`, `14-§17-5`, `14-§18-3`, `3-§9-12`, `BP-§10.5-W2`, `BP-§10.5-W11` |
| `EIS16-BAL-05` | 9 | 20 | `14-§5-7`, `14-§7-4`, `14-§11-1`, `14-§11-2`, `14-§11-3`, `14-§11-4`, `14-§11-5`, `14-§12-1`, `14-§12-2`, `14-§12-3`, `14-§12-4`, `14-§12-5`, `14-§12-6`, `15-§16-1`, `15-§16-2`, `15-§16-3`, `15-§16-4`, `15-§16-5`, `15-§16-6`, `3-§9-12` |
| `EIS16-DUE-01` | 10 | 3 | `14-§5-6`, `BP-§10.5-W3`, `BP-§10.5-A1` |
| `EIS16-DUE-02` | 10 | 2 | `14-§5-6`, `BP-§10.5-W3` |
| `EIS16-DUE-03` | 10 | 2 | `14-§5-6`, `BP-§10.5-W3` |
| `EIS16-DUE-04` | 10 | 2 | `14-§5-6`, `BP-§10.5-W3` |
| `EIS16-REP-01` | 11 | 8 | `14-§7-1`, `14-§7-2`, `14-§7-3`, `14-§7-5`, `14-§7-6`, `14-§7-7`, `14-§18-3`, `BP-§10.5-W2` |
| `EIS16-REP-02` | 11 | 8 | `14-§7-1`, `14-§7-2`, `14-§7-3`, `14-§7-5`, `14-§7-6`, `14-§7-7`, `14-§18-3`, `BP-§10.5-W2` |
| `EIS16-REP-03` | 11 | 12 | `14-§7-1`, `14-§7-2`, `14-§7-3`, `14-§7-5`, `14-§7-6`, `14-§7-7`, `14-§14-1`, `14-§14-2`, `14-§18-3`, `15-§17-1`, `15-§17-2`, `BP-§10.5-W2` |
| `EIS16-REP-04` | 11 | 8 | `14-§7-1`, `14-§7-2`, `14-§7-3`, `14-§7-5`, `14-§7-6`, `14-§7-7`, `14-§18-3`, `BP-§10.5-W2` |
| `EIS16-CAD-01` | 12 | 26 | see Section 35.2 |
| `EIS16-CAD-02` | 12 | 26 | see Section 35.2 |
| `EIS16-CAD-03` | 12 | 5 | `14-§5-7`, `14-§7-3`, `14-§7-4`, `3-§9-12`, `BP-§10.5-E4` |
| `EIS16-CAD-04` | 12 | 4 | `14-§3-5`, `14-§7-4`, `14-§14-1`, `BP-§6.2-1` |
| `EIS16-CAD-05` | 12 | 3 | `14-§7-5`, `14-§14-1`, `15-§8-4` |
| `EIS16-CAD-06` | 12 | 26 | see Section 35.2 |
| `EIS16-CAD-07` | 12 | 26 | see Section 35.2 |
| `EIS16-CAD-08` | 12 | 26 | see Section 35.2 |
| `EIS16-THR-01` | 13 | 17 | `14-§8-1`, `14-§8-2`, `14-§8-3`, `14-§8-4`, `14-§8-5`, `14-§8-6`, `14-§8-7`, `14-§9-1`, `14-§9-2`, `14-§9-3`, `14-§9-4`, `14-§9-5`, `14-§9-6`, `14-§9-7`, `14-§9-8`, `14-§9-9`, `BP-§10.5-W4` |
| `EIS16-THR-02` | 13 | 17 | `14-§8-1`, `14-§8-2`, `14-§8-3`, `14-§8-4`, `14-§8-5`, `14-§8-6`, `14-§8-7`, `14-§9-1`, `14-§9-2`, `14-§9-3`, `14-§9-4`, `14-§9-5`, `14-§9-6`, `14-§9-7`, `14-§9-8`, `14-§9-9`, `BP-§10.5-W4` |
| `EIS16-THR-03` | 13 | 17 | `14-§8-1`, `14-§8-2`, `14-§8-3`, `14-§8-4`, `14-§8-5`, `14-§8-6`, `14-§8-7`, `14-§9-1`, `14-§9-2`, `14-§9-3`, `14-§9-4`, `14-§9-5`, `14-§9-6`, `14-§9-7`, `14-§9-8`, `14-§9-9`, `BP-§10.5-W4` |
| `EIS16-THR-04` | 13 | 19 | `14-§8-1`, `14-§8-2`, `14-§8-3`, `14-§8-4`, `14-§8-5`, `14-§8-6`, `14-§8-7`, `14-§9-1`, `14-§9-2`, `14-§9-3`, `14-§9-4`, `14-§9-5`, `14-§9-6`, `14-§9-7`, `14-§9-8`, `14-§9-9`, `14-§14-3`, `14-§22-7`, `BP-§10.5-W4` |
| `EIS16-FUP-01` | 14 | 7 | `14-§10-1`, `14-§10-2`, `14-§10-3`, `14-§10-4`, `14-§10-5`, `14-§10-6`, `BP-§6.5-1` |
| `EIS16-FUP-02` | 14 | 9 | `14-§10-1`, `14-§10-2`, `14-§10-3`, `14-§10-4`, `14-§10-5`, `14-§10-6`, `14-§14-4`, `14-§22-9`, `BP-§6.5-1` |
| `EIS16-FUP-03` | 14 | 7 | `14-§10-1`, `14-§10-2`, `14-§10-3`, `14-§10-4`, `14-§10-5`, `14-§10-6`, `BP-§6.5-1` |
| `EIS16-EVD-01` | 15 | 12 | `15-§6-1`, `15-§6-2`, `15-§6-3`, `15-§6-4`, `15-§6-5`, `15-§6-6`, `15-§6-7`, `15-§6-8`, `15-§6-9`, `15-§6-10`, `15-§6-11`, `15-§6-12` |
| `EIS16-EVD-02` | 15 | 15 | `15-§1-1`, `15-§2-8`, `15-§3-1`, `15-§3-2`, `15-§3-3`, `15-§3-4`, `15-§3-5`, `15-§3-6`, `15-§4-1`, `15-§4-2`, `15-§4-3`, `15-§4-4`, `15-§4-5`, `15-§4-6`, `15-§4-8` |
| `EIS16-EVD-03` | 15 | 10 | `15-§4-1`, `15-§4-2`, `15-§4-3`, `15-§4-4`, `15-§4-5`, `15-§4-6`, `15-§4-7`, `15-§4-8`, `BP-§10.5-W10`, `BP-§10.5-E2` |
| `EIS16-EVD-04` | 15 | 22 | see Section 35.2 |
| `EIS16-EVD-05` | 15 | 12 | `15-§6-1`, `15-§6-2`, `15-§6-3`, `15-§6-4`, `15-§6-5`, `15-§6-6`, `15-§6-7`, `15-§6-8`, `15-§6-9`, `15-§6-10`, `15-§6-11`, `15-§6-12` |
| `EIS16-EVD-06` | 15 | 5 | `15-§5-5`, `15-§6-8`, `15-§6-12`, `15-§10-1`, `15-§11-2` |
| `EIS16-SRC-01` | 16 | 17 | `15-§1-2`, `15-§3-7`, `15-§4-7`, `15-§5-1`, `15-§5-2`, `15-§5-3`, `15-§5-4`, `15-§5-5`, `15-§5-6`, `15-§5-7`, `15-§5-8`, `15-§13-1`, `15-§21-10`, `15-§25-12`, `22-§17-3`, `BP-§5.4-1`, `BP-§10.5-W5` |
| `EIS16-SRC-02` | 16 | 13 | `15-§1-2`, `15-§3-7`, `15-§5-1`, `15-§5-2`, `15-§5-3`, `15-§5-4`, `15-§5-5`, `15-§5-6`, `15-§5-7`, `15-§5-8`, `22-§17-3`, `BP-§5.4-1`, `BP-§10.5-W5` |
| `EIS16-SRC-03` | 16 | 13 | `15-§1-2`, `15-§3-7`, `15-§5-1`, `15-§5-2`, `15-§5-3`, `15-§5-4`, `15-§5-5`, `15-§5-6`, `15-§5-7`, `15-§5-8`, `22-§17-3`, `BP-§5.4-1`, `BP-§10.5-W5` |
| `EIS16-SRC-04` | 16 | 13 | `15-§1-2`, `15-§3-7`, `15-§5-1`, `15-§5-2`, `15-§5-3`, `15-§5-4`, `15-§5-5`, `15-§5-6`, `15-§5-7`, `15-§5-8`, `22-§17-3`, `BP-§5.4-1`, `BP-§10.5-W5` |
| `EIS16-SRC-05` | 16 | 13 | `15-§1-2`, `15-§3-7`, `15-§5-1`, `15-§5-2`, `15-§5-3`, `15-§5-4`, `15-§5-5`, `15-§5-6`, `15-§5-7`, `15-§5-8`, `22-§17-3`, `BP-§5.4-1`, `BP-§10.5-W5` |
| `EIS16-SRC-06` | 16 | 13 | `15-§1-2`, `15-§3-7`, `15-§5-1`, `15-§5-2`, `15-§5-3`, `15-§5-4`, `15-§5-5`, `15-§5-6`, `15-§5-7`, `15-§5-8`, `22-§17-3`, `BP-§5.4-1`, `BP-§10.5-W5` |
| `EIS16-SRC-07` | 16 | 4 | `15-§1-2`, `15-§5-1`, `15-§5-2`, `15-§28-1` |
| `EIS16-SRC-08` | 16 | 44 | see Section 35.2 |
| `EIS16-MAT-01` | 17 | 12 | `15-§7-1`, `15-§7-2`, `15-§7-3`, `15-§7-4`, `15-§7-5`, `15-§7-6`, `15-§7-7`, `15-§7-8`, `15-§7-9`, `15-§7-10`, `BP-§10.5-W6`, `BP-§10.5-W7` |
| `EIS16-MAT-02` | 17 | 12 | `15-§7-1`, `15-§7-2`, `15-§7-3`, `15-§7-4`, `15-§7-5`, `15-§7-6`, `15-§7-7`, `15-§7-8`, `15-§7-9`, `15-§7-10`, `BP-§10.5-W6`, `BP-§10.5-W7` |
| `EIS16-MAT-03` | 17 | 12 | `15-§7-1`, `15-§7-2`, `15-§7-3`, `15-§7-4`, `15-§7-5`, `15-§7-6`, `15-§7-7`, `15-§7-8`, `15-§7-9`, `15-§7-10`, `BP-§10.5-W6`, `BP-§10.5-W7` |
| `EIS16-LNK-01` | 18 | 11 | `15-§8-1`, `15-§8-2`, `15-§8-3`, `15-§8-4`, `15-§8-5`, `15-§8-6`, `15-§8-7`, `15-§14-1`, `15-§14-2`, `15-§14-3`, `15-§14-4` |
| `EIS16-LNK-02` | 18 | 11 | `15-§8-1`, `15-§8-2`, `15-§8-3`, `15-§8-4`, `15-§8-5`, `15-§8-6`, `15-§8-7`, `15-§14-1`, `15-§14-2`, `15-§14-3`, `15-§14-4` |
| `EIS16-LNK-03` | 18 | 11 | `15-§8-1`, `15-§8-2`, `15-§8-3`, `15-§8-4`, `15-§8-5`, `15-§8-6`, `15-§8-7`, `15-§14-1`, `15-§14-2`, `15-§14-3`, `15-§14-4` |
| `EIS16-REV-01` | 18 | 32 | see Section 35.2 |
| `EIS16-REV-02` | 18 | 19 | `15-§9-1`, `15-§9-2`, `15-§9-3`, `15-§9-4`, `15-§9-5`, `15-§9-6`, `15-§10-1`, `15-§10-2`, `15-§10-3`, `15-§10-4`, `15-§10-5`, `15-§11-1`, `15-§11-2`, `15-§11-3`, `15-§11-4`, `15-§11-5`, `10-§17-5`, `BP-§10.5-W8`, `BP-§10.5-W10` |
| `EIS16-REV-03` | 18 | 19 | `15-§9-1`, `15-§9-2`, `15-§9-3`, `15-§9-4`, `15-§9-5`, `15-§9-6`, `15-§10-1`, `15-§10-2`, `15-§10-3`, `15-§10-4`, `15-§10-5`, `15-§11-1`, `15-§11-2`, `15-§11-3`, `15-§11-4`, `15-§11-5`, `10-§17-5`, `BP-§10.5-W8`, `BP-§10.5-W10` |
| `EIS16-IDM-01` | 19 | 7 | `15-§12-1`, `15-§12-2`, `15-§12-3`, `15-§12-4`, `15-§12-5`, `15-§12-6`, `BP-§10.5-W9` |
| `EIS16-IDM-02` | 19 | 37 | see Section 35.2 |
| `EIS16-IDM-03` | 19 | 7 | `15-§12-1`, `15-§12-2`, `15-§12-3`, `15-§12-4`, `15-§12-5`, `15-§12-6`, `BP-§10.5-W9` |
| `EIS16-RVS-01` | 20 | 5 | `15-§4-7`, `15-§13-1`, `15-§13-2`, `15-§13-3`, `15-§21-10` |
| `EIS16-RVS-02` | 20 | 5 | `15-§4-7`, `15-§13-1`, `15-§13-2`, `15-§13-3`, `15-§21-10` |
| `EIS16-RVS-03` | 20 | 5 | `15-§4-7`, `15-§13-1`, `15-§13-2`, `15-§13-3`, `15-§21-10` |
| `EIS16-RVS-04` | 20 | 5 | `15-§4-7`, `15-§13-1`, `15-§13-2`, `15-§13-3`, `15-§21-10` |
| `EIS16-STL-01` | 20 | 4 | `15-§5-4`, `15-§7-8`, `15-§10-2`, `15-§11-5` |
| `EIS16-CNC-01` | 21 | 19 | `14-§7-1`, `14-§7-2`, `14-§7-3`, `14-§7-5`, `14-§7-6`, `14-§7-7`, `14-§18-3`, `15-§8-1`, `15-§8-2`, `15-§8-3`, `15-§8-4`, `15-§8-5`, `15-§8-6`, `15-§8-7`, `15-§14-1`, `15-§14-2`, `15-§14-3`, `15-§14-4`, `BP-§10.5-W2` |
| `EIS16-CNC-02` | 21 | 32 | see Section 35.2 |
| `EIS16-CNC-03` | 21 | 14 | `14-§16-1`, `14-§16-2`, `14-§16-3`, `14-§16-4`, `14-§16-5`, `14-§16-6`, `15-§9-5`, `15-§19-1`, `15-§19-2`, `15-§19-3`, `15-§19-4`, `15-§19-5`, `24-§21-4`, `24-§21-5` |
| `EIS16-CNC-04` | 21 | 13 | `14-§16-1`, `14-§16-2`, `14-§16-3`, `14-§16-4`, `14-§16-5`, `14-§16-6`, `15-§19-1`, `15-§19-2`, `15-§19-3`, `15-§19-4`, `15-§19-5`, `24-§21-4`, `24-§21-5` |
| `EIS16-AUTHZ-01` | 22 | 16 | `14-§14-1`, `14-§14-2`, `14-§14-3`, `14-§14-4`, `14-§18-6`, `14-§19-2`, `14-§20-3`, `15-§9-5`, `15-§17-1`, `15-§17-2`, `15-§17-3`, `15-§17-4`, `15-§21-9`, `15-§23-3`, `15-§25-8`, `3-§11-6` |
| `EIS16-AUTHZ-02` | 22 | 9 | `14-§14-1`, `14-§14-2`, `14-§14-3`, `14-§14-4`, `15-§17-1`, `15-§17-2`, `15-§17-3`, `15-§17-4`, `3-§11-6` |
| `EIS16-AUTHZ-03` | 22 | 22 | see Section 35.2 |
| `EIS16-AUTHZ-04` | 22 | 9 | `14-§14-1`, `14-§14-2`, `14-§14-3`, `14-§14-4`, `15-§17-1`, `15-§17-2`, `15-§17-3`, `15-§17-4`, `3-§11-6` |
| `EIS16-AUTHZ-05` | 22 | 18 | `14-§4-1`, `14-§4-2`, `14-§4-3`, `14-§4-4`, `14-§4-5`, `14-§4-6`, `14-§13-1`, `14-§14-1`, `14-§14-2`, `14-§14-3`, `14-§14-4`, `14-§18-1`, `15-§17-1`, `15-§17-2`, `15-§17-3`, `15-§17-4`, `3-§11-6`, `BP-§10.5-W1` |
| `EIS16-AUTHZ-06` | 22 | 22 | see Section 35.2 |
| `EIS16-AUTHZ-07` | 22 | 12 | `14-§19-1`, `14-§19-2`, `14-§19-3`, `14-§19-4`, `14-§19-5`, `15-§17-4`, `15-§22-1`, `15-§22-2`, `15-§22-3`, `15-§22-4`, `15-§22-5`, `15-§22-6` |
| `EIS16-AUTHZ-08` | 22 | 2 | `15-§6-8`, `15-§22-2` |
| `EIS16-AUTHZ-09` | 22 | 9 | `14-§14-1`, `14-§14-2`, `14-§14-3`, `14-§14-4`, `15-§17-1`, `15-§17-2`, `15-§17-3`, `15-§17-4`, `3-§11-6` |
| `EIS16-SEC-01` | 23 | 110 | see Section 35.2 |
| `EIS16-SEC-02` | 23 | 23 | see Section 35.2 |
| `EIS16-SEC-03` | 23 | 20 | `14-§4-1`, `14-§4-2`, `14-§4-3`, `14-§4-4`, `14-§4-5`, `14-§4-6`, `14-§13-1`, `14-§18-1`, `14-§19-1`, `14-§19-2`, `14-§19-3`, `14-§19-4`, `14-§19-5`, `15-§22-1`, `15-§22-2`, `15-§22-3`, `15-§22-4`, `15-§22-5`, `15-§22-6`, `BP-§10.5-W1` |
| `EIS16-SEC-04` | 23 | 11 | `14-§19-1`, `14-§19-2`, `14-§19-3`, `14-§19-4`, `14-§19-5`, `15-§22-1`, `15-§22-2`, `15-§22-3`, `15-§22-4`, `15-§22-5`, `15-§22-6` |
| `EIS16-SEC-05` | 23 | 11 | `14-§19-1`, `14-§19-2`, `14-§19-3`, `14-§19-4`, `14-§19-5`, `15-§22-1`, `15-§22-2`, `15-§22-3`, `15-§22-4`, `15-§22-5`, `15-§22-6` |
| `EIS16-SEC-06` | 23 | 13 | `15-§1-2`, `15-§3-7`, `15-§5-1`, `15-§5-2`, `15-§5-3`, `15-§5-4`, `15-§5-5`, `15-§5-6`, `15-§5-7`, `15-§5-8`, `22-§17-3`, `BP-§5.4-1`, `BP-§10.5-W5` |
| `EIS16-AUD-01` | 24 | 39 | see Section 35.2 |
| `EIS16-AUD-02` | 24 | 23 | see Section 35.2 |
| `EIS16-AUD-03` | 24 | 7 | `14-§5-13`, `14-§17-1`, `14-§17-2`, `14-§17-3`, `14-§17-4`, `14-§17-5`, `BP-§10.5-W11` |
| `EIS16-AUD-04` | 24 | 4 | `14-§3-1`, `14-§3-5`, `14-§19-5`, `BP-§6.1-1` |
| `EIS16-PRIV-01` | 25 | 25 | see Section 35.2 |
| `EIS16-PRIV-02` | 25 | 19 | `14-§1-1`, `14-§1-2`, `14-§2-8`, `14-§3-1`, `14-§3-2`, `14-§3-3`, `14-§3-4`, `14-§3-5`, `14-§3-6`, `14-§3-7`, `14-§10-1`, `14-§10-2`, `14-§10-3`, `14-§10-4`, `14-§10-5`, `14-§10-6`, `14-§19-4`, `3-§9-12`, `BP-§6.5-1` |
| `EIS16-PRIV-03` | 25 | 4 | `14-§17-1`, `14-§19-1`, `14-§19-3`, `15-§22-5` |
| `EIS16-PRIV-04` | 25 | 8 | `14-§10-1`, `14-§10-2`, `14-§10-3`, `14-§10-4`, `14-§10-5`, `14-§10-6`, `14-§22-9`, `BP-§6.5-1` |
| `EIS16-PRIV-05` | 25 | 11 | `14-§17-1`, `15-§5-5`, `15-§6-8`, `15-§6-12`, `15-§10-1`, `15-§11-2`, `15-§13-1`, `15-§13-2`, `15-§20-2`, `15-§22-2`, `15-§22-5` |
| `EIS16-PRIV-06` | 25 | 3 | `15-§6-8`, `15-§13-2`, `15-§20-2` |
| `EIS16-AI-01` | 26 | 18 | `14-§1-1`, `14-§1-2`, `14-§2-8`, `14-§3-1`, `14-§3-2`, `14-§3-3`, `14-§3-4`, `14-§3-5`, `14-§3-6`, `14-§3-7`, `14-§6-1`, `14-§6-2`, `14-§6-3`, `14-§6-4`, `14-§6-5`, `14-§6-6`, `14-§19-5`, `BP-§6.1-1` |
| `EIS16-AI-02` | 26 | 17 | `14-§11-1`, `14-§11-2`, `14-§11-3`, `14-§11-4`, `14-§11-5`, `14-§12-1`, `14-§12-2`, `14-§12-3`, `14-§12-4`, `14-§12-5`, `14-§12-6`, `15-§16-1`, `15-§16-2`, `15-§16-3`, `15-§16-4`, `15-§16-5`, `15-§16-6` |
| `EIS16-ERR-01` | 27 | 27 | see Section 35.2 |
| `EIS16-ERR-02` | 27 | 29 | see Section 35.2 |
| `EIS16-ERR-03` | 27 | 6 | `15-§12-1`, `15-§12-6`, `15-§20-2`, `15-§20-5`, `15-§21-1`, `15-§25-2` |
| `EIS16-ERR-04` | 27 | 28 | see Section 35.2 |
| `EIS16-READ-01` | 28 | 17 | `14-§11-1`, `14-§11-2`, `14-§11-3`, `14-§11-4`, `14-§11-5`, `14-§12-1`, `14-§12-2`, `14-§12-3`, `14-§12-4`, `14-§12-5`, `14-§12-6`, `15-§16-1`, `15-§16-2`, `15-§16-3`, `15-§16-4`, `15-§16-5`, `15-§16-6` |
| `EIS16-ORD-01` | 28 | 10 | `14-§13-2`, `14-§13-3`, `15-§15-1`, `15-§15-2`, `15-§15-3`, `15-§15-4`, `15-§15-5`, `15-§15-6`, `15-§15-7`, `BP-§11-1` |
| `EIS16-LANG-01` | 28 | 12 | `14-§6-1`, `14-§6-2`, `14-§6-3`, `14-§6-4`, `14-§6-5`, `14-§6-6`, `14-§15-1a`, `14-§15-2`, `15-§18-1a`, `15-§18-2`, `9-§12-11`, `BP-§8-1` |
| `EIS16-MIG-01` | 29 | 107 | see Section 35.2 |
| `EIS16-MIG-02` | 29 | 23 | see Section 35.2 |
| `EIS16-MIG-03` | 29 | 99 | see Section 35.2 |
| `EIS16-MIG-04` | 29 | 2 | `14-§22-1`, `3-§9-12` |
| `EIS16-MIG-05` | 29 | 10 | `14-§4-1`, `14-§4-2`, `14-§4-3`, `14-§4-4`, `14-§4-5`, `14-§4-6`, `14-§22-1`, `3-§9-12`, `BP-§10.5-W1`, `BP-§10.5-W2` |
| `EIS16-MIG-06` | 29 | 4 | `14-§5-1`, `14-§5-2`, `BP-§6.2-1`, `BP-§10.5-W1` |
| `EIS16-VER-01` | 30 | 174 | see Section 35.2 |
| `EIS16-VER-02` | 30 | 59 | see Section 35.2 |
| `EIS16-VER-03` | 30 | 34 | see Section 35.2 |
| `EIS16-VER-04` | 30 | 4 | `BP-§10.5-A1`, `BP-§10.5-A2`, `BP-§10.5-A3`, `BP-§13-9` |
| `EIS16-VER-05` | 30 | 4 | `BP-§10.5-B1`, `BP-§10.5-B2`, `BP-§10.5-B3`, `BP-§13-9` |
| `EIS16-VER-06` | 30 | 46 | see Section 35.2 |
| `EIS16-VER-07` | 30 | 7 | `BP-§5.3-1`, `BP-§9-2`, `BP-§9-AL`, `BP-§11-5`, `BP-§13-1`, `BP-§13-9`, `BP-§14-1` |
| `EIS16-OPS-01` | 31 | 15 | `14-§5-7`, `14-§7-4`, `15-§7-1`, `15-§7-2`, `15-§7-3`, `15-§7-4`, `15-§7-5`, `15-§7-6`, `15-§7-7`, `15-§7-8`, `15-§7-9`, `15-§7-10`, `3-§9-12`, `BP-§10.5-W6`, `BP-§10.5-W7` |
| `EIS16-OPS-02` | 31 | 17 | `14-§11-1`, `14-§11-2`, `14-§11-3`, `14-§11-4`, `14-§11-5`, `14-§12-1`, `14-§12-2`, `14-§12-3`, `14-§12-4`, `14-§12-5`, `14-§12-6`, `15-§16-1`, `15-§16-2`, `15-§16-3`, `15-§16-4`, `15-§16-5`, `15-§16-6` |
| `EIS16-NEG-01` | 32 | 76 | see Section 35.2 |
| `EIS16-HOLD-01` | 33 | 99 | see Section 35.2 |
| `EIS16-HOLD-02` | 33 | 41 | see Section 35.2 |
| `EIS16-HOLD-03` | 33 | 164 | see Section 35.2 |
| `EIS16-HOLD-04` | 33 | 46 | see Section 35.2 |
| `EIS16-HOLD-05` | 33 | 41 | see Section 35.2 |
| `EIS16-HOLD-06` | 33 | 7 | `14-§10-2`, `14-§10-3`, `14-§10-4`, `14-§10-5`, `14-§10-6`, `14-§14-4`, `14-§22-9` |
| `EIS16-HOLD-07` | 33 | 19 | `14-§6-5`, `14-§13-1`, `14-§13-2`, `14-§13-3`, `14-§25-1`, `15-§5-6`, `15-§7-7`, `15-§15-1`, `15-§15-2`, `15-§15-3`, `15-§15-4`, `15-§15-5`, `15-§15-6`, `15-§15-7`, `15-§17-4`, `15-§23-7`, `15-§25-7`, `3-§23`, `BP-§11-1` |
| `EIS16-HOLD-08` | 33 | 13 | `14-§11-1`, `14-§11-2`, `14-§11-3`, `14-§11-4`, `14-§19-5`, `14-§22-8`, `15-§16-1`, `15-§16-2`, `15-§16-3`, `15-§16-4`, `15-§16-5`, `15-§16-6`, `15-§25-10` |
| `EIS16-HOLD-09` | 33 | 31 | see Section 35.2 |
| `EIS16-GOV-01` | 33 | 7 | `BP-§5.3-1`, `BP-§9-2`, `BP-§9-AL`, `BP-§11-5`, `BP-§13-1`, `BP-§13-9`, `BP-§14-1` |
| `EIS16-GOV-02` | 33 | 9 | `14-§19-1`, `15-§22-5`, `BP-§5.3-1`, `BP-§9-2`, `BP-§9-AL`, `BP-§11-5`, `BP-§13-1`, `BP-§13-9`, `BP-§14-1` |

### 35.4 The 206 rows outside `IN SCOPE` (preserved)

Their dispositions, owners and boundaries are unchanged. `DELEGATED` rows are consumed from their owner and not re-specified; `ASSIGNED TO LATER MISSION` rows are not built here; `OUT OF BUILD SCOPE` rows must not appear (`EIS16-NEG-01`); `NOT APPLICABLE` rows carry no obligation; the three `UNRESOLVED FOUNDER DECISION` rows stay unresolved (`25-§17-1`, `BP-§15-6`: U-08, boundary `EIS16-PRIV-05`; `BP-§15-9`: U-10, rejected for current core).

| FCTM row | Disposition | Owning mission | EIS treatment |
|---|---|---|---|
| `14-§2-1` | NOT APPLICABLE | SB-P-1.16 | No obligation |
| `14-§2-2` | NOT APPLICABLE | SB-P-1.16 | No obligation |
| `14-§2-3` | NOT APPLICABLE | SB-P-1.16 | No obligation |
| `14-§2-4` | NOT APPLICABLE | SB-P-1.16 | No obligation |
| `14-§2-5` | NOT APPLICABLE | SB-P-1.16 | No obligation |
| `14-§2-6` | NOT APPLICABLE | SB-P-1.16 | No obligation |
| `14-§2-7` | NOT APPLICABLE | SB-P-1.16 | No obligation |
| `14-§15-1b` | ASSIGNED TO LATER MISSION | SB-P-1.20 | Not built here |
| `14-§23-5` | NOT APPLICABLE | SB-P-1.16 | No obligation |
| `14-§24` | NOT APPLICABLE | SB-P-1.16 | No obligation |
| `15-§2-1` | NOT APPLICABLE | SB-P-1.16 | No obligation |
| `15-§2-2` | NOT APPLICABLE | SB-P-1.16 | No obligation |
| `15-§2-3` | NOT APPLICABLE | SB-P-1.16 | No obligation |
| `15-§2-4` | NOT APPLICABLE | SB-P-1.16 | No obligation |
| `15-§2-5` | NOT APPLICABLE | SB-P-1.16 | No obligation |
| `15-§2-6` | NOT APPLICABLE | SB-P-1.16 | No obligation |
| `15-§2-7` | NOT APPLICABLE | SB-P-1.16 | No obligation |
| `15-§18-1b` | ASSIGNED TO LATER MISSION | SB-P-1.20 | Not built here |
| `15-§26-1` | NOT APPLICABLE | SB-P-1.16 | No obligation |
| `15-§26-2` | NOT APPLICABLE | SB-P-1.16 | No obligation |
| `15-§26-3` | NOT APPLICABLE | SB-P-1.16 | No obligation |
| `15-§27` | NOT APPLICABLE | SB-P-1.16 | No obligation |
| `3-§1` | NOT APPLICABLE | SB-P-1.14 | No obligation |
| `3-§2` | DELEGATED | SB-P-1.14 | Consumed; not re-specified |
| `3-§3` | DELEGATED | SB-P-1.14 | Consumed; not re-specified |
| `3-§4` | DELEGATED | SB-P-1.14 | Consumed; not re-specified |
| `3-§5` | DELEGATED | SB-P-1.14 | Consumed; not re-specified |
| `3-§6` | DELEGATED | SB-P-1.14 | Consumed; not re-specified |
| `3-§7` | DELEGATED | SB-P-1.14 | Consumed; not re-specified |
| `3-§8` | DELEGATED | SB-P-1.14 | Consumed; not re-specified |
| `3-§9-1` | DELEGATED | SB-P-1.14 | Consumed; not re-specified |
| `3-§9-2` | DELEGATED | SB-P-1.14 | Consumed; not re-specified |
| `3-§9-3` | ASSIGNED TO LATER MISSION | SB-P-1.17 / SB-P-1.18 | Not built here |
| `3-§9-4` | DELEGATED | SB-P-1.14 | Consumed; not re-specified |
| `3-§9-5` | DELEGATED | SB-P-1.14 | Consumed; not re-specified |
| `3-§9-6` | DELEGATED | SB-P-1.14 | Consumed; not re-specified |
| `3-§9-7` | DELEGATED | SB-P-1.14 | Consumed; not re-specified |
| `3-§9-8` | DELEGATED | SB-P-1.14 | Consumed; not re-specified |
| `3-§9-9` | DELEGATED | SB-P-1.14 | Consumed; not re-specified |
| `3-§9-10` | DELEGATED | SB-P-1.14 | Consumed; not re-specified |
| `3-§9-11` | DELEGATED | SB-P-1.14 | Consumed; not re-specified |
| `3-§9-13` | DELEGATED | SB-P-1.14 | Consumed; not re-specified |
| `3-§9-14` | DELEGATED | SB-P-1.14 | Consumed; not re-specified |
| `3-§10` | DELEGATED | SB-P-1.14 | Consumed; not re-specified |
| `3-§11-1` | DELEGATED | SB-P-1.14 | Consumed; not re-specified |
| `3-§11-2` | DELEGATED | SB-P-1.14 | Consumed; not re-specified |
| `3-§11-3` | DELEGATED | SB-P-1.14 | Consumed; not re-specified |
| `3-§11-4` | DELEGATED | SB-P-1.14 | Consumed; not re-specified |
| `3-§11-5` | DELEGATED | SB-P-1.14 | Consumed; not re-specified |
| `3-§11-7` | DELEGATED | SB-P-1.14 | Consumed; not re-specified |
| `3-§12` | DELEGATED | SB-P-1.14 and others per FCTM-14 | Consumed; not re-specified |
| `3-§13` | DELEGATED | SB-P-1.14 | Consumed; not re-specified |
| `3-§14` | DELEGATED | SB-P-1.14 and others per FCTM-14 | Consumed; not re-specified |
| `3-§15-1` | DELEGATED | SB-P-1.14 | Consumed; not re-specified |
| `3-§15-2` | DELEGATED | SB-P-1.14 | Consumed; not re-specified |
| `3-§15-3` | DELEGATED | SB-P-1.14 | Consumed; not re-specified |
| `3-§15-4` | DELEGATED | SB-P-1.14 | Consumed; not re-specified |
| `3-§15-5` | DELEGATED | SB-P-1.14 | Consumed; not re-specified |
| `3-§15-6` | DELEGATED | SB-P-1.15 | Consumed; not re-specified |
| `3-§15-7` | ASSIGNED TO LATER MISSION | SB-P-1.17 / SB-P-1.18 | Not built here |
| `3-§15-10` | ASSIGNED TO LATER MISSION | SB-P-1.17 | Not built here |
| `3-§15-11` | ASSIGNED TO LATER MISSION | SB-P-1.17 | Not built here |
| `3-§15-12` | ASSIGNED TO LATER MISSION | SB-P-1.18 | Not built here |
| `3-§15-13` | ASSIGNED TO LATER MISSION | SB-P-1.18 | Not built here |
| `3-§16` | DELEGATED | SB-P-1.14 | Consumed; not re-specified |
| `3-§17` | DELEGATED | SB-P-1.14 | Consumed; not re-specified |
| `3-§18` | DELEGATED | SB-P-1.14 and others per FCTM-14 | Consumed; not re-specified |
| `3-§19-1` | DELEGATED | SB-P-1.14 | Consumed; not re-specified |
| `3-§19-2` | DELEGATED | SB-P-1.14 | Consumed; not re-specified |
| `3-§19-3` | DELEGATED | SB-P-1.14 | Consumed; not re-specified |
| `3-§19-4` | DELEGATED | SB-P-1.14 | Consumed; not re-specified |
| `3-§19-5` | DELEGATED | SB-P-1.14 | Consumed; not re-specified |
| `3-§19-6` | DELEGATED | SB-P-1.14 | Consumed; not re-specified |
| `3-§19-7` | DELEGATED | SB-P-1.14 | Consumed; not re-specified |
| `3-§19-8` | DELEGATED | SB-P-1.14 | Consumed; not re-specified |
| `3-§19-9` | DELEGATED | SB-P-1.14 | Consumed; not re-specified |
| `3-§19-10` | DELEGATED | SB-P-1.14 | Consumed; not re-specified |
| `3-§19-11` | DELEGATED | SB-P-1.14 | Consumed; not re-specified |
| `3-§19-12` | DELEGATED | SB-P-1.14 | Consumed; not re-specified |
| `3-§19-13a` | DELEGATED | SB-P-1.14 | Consumed; not re-specified |
| `3-§19-13b` | ASSIGNED TO LATER MISSION | SB-P-1.20 | Not built here |
| `3-§19-14` | DELEGATED | SB-P-1.14 | Consumed; not re-specified |
| `3-§20` | DELEGATED | SB-P-1.14 | Consumed; not re-specified |
| `3-§21` | NOT APPLICABLE | SB-P-1.14 | No obligation |
| `3-§22` | DELEGATED | SB-P-1.14 | Consumed; not re-specified |
| `22-§4-1` | DELEGATED | SB-P-1.14 | Consumed; not re-specified |
| `22-§5-5` | DELEGATED | SB-P-1.12 | Consumed; not re-specified |
| `22-§5-9` | DELEGATED | SB-P-1.12 | Consumed; not re-specified |
| `22-§11-4` | DELEGATED | SB-P-1.15 | Consumed; not re-specified |
| `22-§12` | DELEGATED | SB-P-1.15 | Consumed; not re-specified |
| `22-§14` | DELEGATED | SB-P-1.12 | Consumed; not re-specified |
| `22-§15` | DELEGATED | SB-P-1.12 | Consumed; not re-specified |
| `22-§18-5` | DELEGATED | SB-P-1.15 | Consumed; not re-specified |
| `21-§4-5` | DELEGATED | SB-P-1.12 | Consumed; not re-specified |
| `21-§13-2` | DELEGATED | SB-P-1.12 | Consumed; not re-specified |
| `21-§14` | DELEGATED | SB-P-1.12 | Consumed; not re-specified |
| `24-§9-1` | DELEGATED | SB-P-1.13 | Consumed; not re-specified |
| `24-§9-2` | DELEGATED | SB-P-1.13 | Consumed; not re-specified |
| `9-§6-2` | DELEGATED | SB-P-1.13 | Consumed; not re-specified |
| `9-§9-4` | DELEGATED | SB-P-1.13 | Consumed; not re-specified |
| `10-§14-4` | ASSIGNED TO LATER MISSION | SB-P-1.20 | Not built here |
| `12-§4-1` | DELEGATED | SB-P-1.13 | Consumed; not re-specified |
| `12-§7-5` | DELEGATED | SB-P-1.13 | Consumed; not re-specified |
| `12-§7-6` | DELEGATED | SB-P-1.13 | Consumed; not re-specified |
| `12-§21-1` | DELEGATED | SB-P-1.13 | Consumed; not re-specified |
| `2-§5-3` | DELEGATED | SB-P-1.15 | Consumed; not re-specified |
| `2-§5-13` | DELEGATED | SB-P-1.15 | Consumed; not re-specified |
| `2-§11-3` | DELEGATED | SB-P-1.15 | Consumed; not re-specified |
| `2-§11-12` | DELEGATED | SB-P-1.15 | Consumed; not re-specified |
| `2-§12-4` | DELEGATED | SB-P-1.15 | Consumed; not re-specified |
| `2-§12-7` | DELEGATED | SB-P-1.15 | Consumed; not re-specified |
| `2-§25-7` | DELEGATED | SB-P-1.15 | Consumed; not re-specified |
| `4-§3-3` | DELEGATED | SB-P-1.15 | Consumed; not re-specified |
| `4-§4-6` | DELEGATED | SB-P-1.15 | Consumed; not re-specified |
| `4-§5-3` | DELEGATED | SB-P-1.15 | Consumed; not re-specified |
| `4-§5-4` | DELEGATED | SB-P-1.15 | Consumed; not re-specified |
| `4-§6-3` | DELEGATED | SB-P-1.15 | Consumed; not re-specified |
| `4-§6-4` | DELEGATED | SB-P-1.15 | Consumed; not re-specified |
| `4-§11-4` | DELEGATED | SB-P-1.15 | Consumed; not re-specified |
| `11-§8-4` | DELEGATED | SB-P-1.15 | Consumed; not re-specified |
| `11-§10-3` | DELEGATED | SB-P-1.15 | Consumed; not re-specified |
| `5-§5-6` | DELEGATED | SB-P-1.14 | Consumed; not re-specified |
| `5-§6-1` | DELEGATED | SB-P-1.14 | Consumed; not re-specified |
| `5-§6-2` | DELEGATED | SB-P-1.14 | Consumed; not re-specified |
| `25-§6-1` | DELEGATED | SB-P-1.14 | Consumed; not re-specified |
| `25-§17-1` | UNRESOLVED FOUNDER DECISION | SB-P-1.19 | Unresolved (U-08); boundary `EIS16-PRIV-05` |
| `25-§17-5` | DELEGATED | SB-P-1.14 | Consumed; not re-specified |
| `25-§19-1` | DELEGATED | SB-P-1.14 | Consumed; not re-specified |
| `1-§16` | DELEGATED | SB-P-1.18 | Consumed; not re-specified |
| `7-§3` | ASSIGNED TO LATER MISSION | SB-P-1.17 | Not built here |
| `13-§10` | NOT APPLICABLE | SB-P-1.17 | No obligation |
| `17-§4` | ASSIGNED TO LATER MISSION | SB-P-1.17 | Not built here |
| `17-§6` | ASSIGNED TO LATER MISSION | SB-P-1.17 | Not built here |
| `17-§13` | DELEGATED | SB-P-1.12 | Consumed; not re-specified |
| `17-§14` | DELEGATED | SB-P-1.12 | Consumed; not re-specified |
| `18-§15` | NOT APPLICABLE | SB-P-1.19 | No obligation |
| `18-§18` | NOT APPLICABLE | SB-P-1.19 | No obligation |
| `19-§15` | DELEGATED | SB-P-1.19 | Consumed; not re-specified |
| `20-§11` | ASSIGNED TO LATER MISSION | SB-P-1.19 | Not built here |
| `20-§12` | ASSIGNED TO LATER MISSION | SB-P-1.19 | Not built here |
| `23-§16` | ASSIGNED TO LATER MISSION | SB-P-1.20 | Not built here |
| `23-§20` | ASSIGNED TO LATER MISSION | SB-P-1.20 | Not built here |
| `23-§21` | ASSIGNED TO LATER MISSION | SB-P-1.20 | Not built here |
| `1-§5-4` | DELEGATED | SB-P-1.18 | Consumed; not re-specified |
| `1-§5-20` | DELEGATED | SB-P-1.18 | Consumed; not re-specified |
| `1-§9-9` | DELEGATED | SB-P-1.18 | Consumed; not re-specified |
| `1-§9-17` | DELEGATED | SB-P-1.18 | Consumed; not re-specified |
| `1-§12-5` | DELEGATED | SB-P-1.18 | Consumed; not re-specified |
| `1-§13-6` | DELEGATED | SB-P-1.18 | Consumed; not re-specified |
| `1-§15-6` | DELEGATED | SB-P-1.18 | Consumed; not re-specified |
| `1-§17-7` | DELEGATED | SB-P-1.18 | Consumed; not re-specified |
| `1-§21-11` | DELEGATED | SB-P-1.18 | Consumed; not re-specified |
| `1-§22-10` | DELEGATED | SB-P-1.18 | Consumed; not re-specified |
| `1-§23-12` | DELEGATED | SB-P-1.18 | Consumed; not re-specified |
| `1-§24-12` | DELEGATED | SB-P-1.18 | Consumed; not re-specified |
| `1-§24-14` | DELEGATED | SB-P-1.18 | Consumed; not re-specified |
| `1-§26-11` | DELEGATED | SB-P-1.18 | Consumed; not re-specified |
| `1-§26-14` | DELEGATED | SB-P-1.18 | Consumed; not re-specified |
| `1-§27-9` | DELEGATED | SB-P-1.18 | Consumed; not re-specified |
| `2-§3-5` | DELEGATED | SB-P-1.15 | Consumed; not re-specified |
| `2-§20-5` | DELEGATED | SB-P-1.15 | Consumed; not re-specified |
| `11-§4-7` | DELEGATED | SB-P-1.15 | Consumed; not re-specified |
| `11-§9-1` | DELEGATED | SB-P-1.15 | Consumed; not re-specified |
| `11-§9-5` | DELEGATED | SB-P-1.15 | Consumed; not re-specified |
| `11-§9-7` | DELEGATED | SB-P-1.15 | Consumed; not re-specified |
| `11-§22-6` | DELEGATED | SB-P-1.15 | Consumed; not re-specified |
| `12-§9-2` | DELEGATED | SB-P-1.13 | Consumed; not re-specified |
| `24-§6-2` | DELEGATED | SB-P-1.13 | Consumed; not re-specified |
| `24-§25-5` | DELEGATED | SB-P-1.13 | Consumed; not re-specified |
| `17-§10` | ASSIGNED TO LATER MISSION | SB-P-1.18 | Not built here |
| `25-§17-4` | DELEGATED | SB-P-1.14 | Consumed; not re-specified |
| `BP-§10.3-S2` | ASSIGNED TO LATER MISSION | SB-P-1.17 / SB-P-1.18 | Not built here |
| `BP-§11-2` | DELEGATED | SB-P-1.12 | Consumed; not re-specified |
| `BP-§11-3` | DELEGATED | SB-P-1.14 | Consumed; not re-specified |
| `BP-§11-4` | DELEGATED | SB-P-1.15 | Consumed; not re-specified |
| `BP-§15-1` | NOT APPLICABLE | SB-P-1.16 | No obligation |
| `BP-§15-2` | NOT APPLICABLE | SB-P-1.16 | No obligation |
| `BP-§15-3` | NOT APPLICABLE | SB-P-1.16 | No obligation |
| `BP-§15-4` | NOT APPLICABLE | SB-P-1.16 | No obligation |
| `BP-§15-5` | NOT APPLICABLE | SB-P-1.16 | No obligation |
| `BP-§15-6` | UNRESOLVED FOUNDER DECISION | SB-P-1.19 | Unresolved (U-08); boundary `EIS16-PRIV-05` |
| `BP-§15-7` | NOT APPLICABLE | SB-P-1.16 | No obligation |
| `BP-§15-8` | NOT APPLICABLE | SB-P-1.16 | No obligation |
| `BP-§15-9` | UNRESOLVED FOUNDER DECISION | SB-P-1.16 | Unresolved (U-10); rejected for current core; `EIS16-NEG-01` |
| `BP-§16-1` | OUT OF BUILD SCOPE | SB-P-1.16 | Must not appear (`EIS16-NEG-01`) |
| `BP-§16-2` | OUT OF BUILD SCOPE | SB-P-1.16 | Must not appear (`EIS16-NEG-01`) |
| `BP-§16-3` | OUT OF BUILD SCOPE | SB-P-1.16 | Must not appear (`EIS16-NEG-01`) |
| `BP-§16-4` | OUT OF BUILD SCOPE | SB-P-1.16 | Must not appear (`EIS16-NEG-01`) |
| `BP-§16-5` | OUT OF BUILD SCOPE | SB-P-1.16 | Must not appear (`EIS16-NEG-01`) |
| `BP-§16-6` | OUT OF BUILD SCOPE | SB-P-1.16 | Must not appear (`EIS16-NEG-01`) |
| `BP-§16-7` | OUT OF BUILD SCOPE | SB-P-1.16 | Must not appear (`EIS16-NEG-01`) |
| `BP-§16-8` | OUT OF BUILD SCOPE | SB-P-1.16 | Must not appear (`EIS16-NEG-01`) |
| `BP-§16-9` | OUT OF BUILD SCOPE | SB-P-1.16 | Must not appear (`EIS16-NEG-01`) |
| `BP-§16-10` | OUT OF BUILD SCOPE | SB-P-1.16 | Must not appear (`EIS16-NEG-01`) |
| `BP-§16-11` | OUT OF BUILD SCOPE | SB-P-1.16 | Must not appear (`EIS16-NEG-01`) |
| `BP-§16-12` | OUT OF BUILD SCOPE | SB-P-1.16 | Must not appear (`EIS16-NEG-01`) |
| `BP-§16-13` | OUT OF BUILD SCOPE | SB-P-1.16 | Must not appear (`EIS16-NEG-01`) |
| `BP-§16-14` | OUT OF BUILD SCOPE | SB-P-1.16 | Must not appear (`EIS16-NEG-01`) |
| `BP-§16-15` | OUT OF BUILD SCOPE | SB-P-1.16 | Must not appear (`EIS16-NEG-01`) |
| `BP-§16-16` | OUT OF BUILD SCOPE | SB-P-1.16 | Must not appear (`EIS16-NEG-01`) |
| `BP-§16-17` | OUT OF BUILD SCOPE | SB-P-1.16 | Must not appear (`EIS16-NEG-01`) |
| `BP-§16-18` | OUT OF BUILD SCOPE | SB-P-1.16 | Must not appear (`EIS16-NEG-01`) |
| `BP-§16-19` | OUT OF BUILD SCOPE | SB-P-1.16 | Must not appear (`EIS16-NEG-01`) |
| `BP-§16-20` | OUT OF BUILD SCOPE | SB-P-1.16 | Must not appear (`EIS16-NEG-01`) |
| `GPCV-§9-1` | OUT OF BUILD SCOPE | SB-P-1.16 | Must not appear (`EIS16-NEG-01`) |
| `GPCV-§9-10` | OUT OF BUILD SCOPE | SB-P-1.16 | Must not appear (`EIS16-NEG-01`) |

### 35.5 Specialist finding coverage (63) and Stage 7 corrections

| Finding | Severity | Stage 7 disposition | Stage 7 correction | EIS requirements (`EIS16-`) |
|---|---|---|---|---|
| SR01-01 | HIGH | Substantive | C-01 | BAL-04, CAD-06 |
| SR01-02 | HIGH | Substantive | C-01, C-02, C-22 | BAL-04, CAD-06, LNK-01, LNK-02, VER-05, THR-03, BAL-02 |
| SR01-03 | HIGH | Later gate (S9) | C-03 | RVS-04 |
| SR01-04 | MEDIUM | Substantive | C-04 | REP-02, LNK-03 |
| SR01-05 | MEDIUM | Later gate (S9) | C-05 | EVD-03 |
| SR01-06 | MEDIUM | Carry-forward CF-1 | C-06 | ID-03 |
| SR01-07 | MEDIUM | Later gate (S9) | C-07 | ID-05, MIG-05 |
| SR01-08 | MEDIUM | Later gate (S9) | C-08 | BAL-03 |
| SR01-09 | LOW | Editorial | C-20 | GOV-01 |
| SR02-01 | HIGH | Substantive | C-09 | SEC-02 |
| SR02-02 | MEDIUM | Editorial | C-10 | SEC-02, SEC-03, SEC-04, AUTHZ-07 |
| SR02-03 | MEDIUM | Later gate (S9) | C-10 | SEC-02, SEC-03, SEC-04, AUTHZ-07 |
| SR02-04 | HIGH | Later gate (S9) | C-11 | SRC-03 |
| SR02-05 | HIGH | Later gate (S9 / provider authorization) | C-12 | SRC-02, SRC-05, ARC-03 |
| SR02-06 | MEDIUM | Substantive | C-13 | SRC-04, SEC-06 |
| SR02-07 | MEDIUM | Substantive | C-14 | AUTHZ-01, AUTHZ-02, AUTHZ-03, AUTHZ-08, REP-03 |
| SR02-08 | MEDIUM | Substantive | C-14 | AUTHZ-01, AUTHZ-02, AUTHZ-03, AUTHZ-08, THR-04 |
| SR02-09 | MEDIUM | Later gate (S13) | C-10 | SEC-02, SEC-03, SEC-04, AUTHZ-07 |
| SR02-10 | LOW | Carry-forward CF-2 | C-10 | SEC-02, SEC-03, SEC-04, AUTHZ-07 |
| SR03-01 | HIGH | Substantive | C-15 | CNC-01, CNC-02, REV-03 |
| SR03-02 | HIGH | Substantive | C-15 | CNC-01, CNC-02, REV-03, BAL-04 |
| SR03-03 | HIGH | Substantive | C-16 | IDM-01, IDM-03, RVS-02, RVS-03, STL-01 |
| SR03-04 | HIGH | Carry-forward CF-3 | C-16 | IDM-01, IDM-03, RVS-02, RVS-03, STL-01 |
| SR03-05 | MEDIUM | Later gate (S9) | C-15 | CNC-01, CNC-02, REV-03 |
| SR03-06 | HIGH | Substantive | C-02 | LNK-01, LNK-02 |
| SR03-07 | MEDIUM | Later gate (S9) | C-16 | IDM-01, IDM-03, RVS-02, RVS-03, STL-01 |
| SR03-08 | MEDIUM | Later gate (S9 / provider authorization) | C-16 | IDM-01, IDM-03, RVS-02, RVS-03, STL-01 |
| SR03-09 | MEDIUM | Later gate (S9) | Held | CNC-04 |
| SR03-10 | MEDIUM | Later gate (S12 (plan); S17/S19 (evidence)) | C-18 | MIG-02, MIG-03, MIG-04, VER-03, SRC-08, PRIV-06 |
| SR03-11 | LOW | Editorial | C-20 | GOV-01 |
| SR03-12 | LOW | Later gate (S9) | C-22 | VER-05, THR-03 |
| SR04-01 | HIGH | Later gate (S13) | Held | MIG-06 |
| SR04-02 | HIGH | Substantive | C-09 | SEC-02 |
| SR04-03 | MEDIUM | Later gate (S9) | C-18 | MIG-02, MIG-03, MIG-04, VER-03, SRC-08, PRIV-06 |
| SR04-04 | MEDIUM | Later gate (S9) | C-18 | MIG-02, MIG-03, MIG-04, VER-03, SRC-08, PRIV-06 |
| SR04-05 | HIGH | Later gate (S9) | C-07 | ID-05, MIG-05 |
| SR04-06 | MEDIUM | Later gate (S9) | C-19 | AUD-03, DUE-04, PRIV-03, PRIV-04 |
| SR04-07 | MEDIUM | Later gate (S9) | C-19 | AUD-03, DUE-04, PRIV-03, PRIV-04 |
| SR04-08 | MEDIUM | Later gate (S12) | C-18 | MIG-02, MIG-03, MIG-04, VER-03, SRC-08, PRIV-06 |
| SR04-09 | MEDIUM | Later gate (S13) | C-18 | MIG-02, MIG-03, MIG-04, VER-03, SRC-08, PRIV-06 |
| SR04-10 | MEDIUM | Later gate (S9) | Held | MIG-05 |
| SR04-11 | LOW | Later gate (S13) | C-18 | MIG-02, MIG-03, MIG-04, VER-03, SRC-08, PRIV-06 |
| SR05-01 | HIGH | Later gate (S9 / provider authorization) | C-12 | SRC-02, SRC-05 |
| SR05-02 | HIGH | Later gate (S9 / provider authorization) | C-12 | SRC-02, SRC-05 |
| SR05-03 | HIGH | Later gate (S9) | C-11 | SRC-03 |
| SR05-04 | HIGH | Later gate (S9 / provider authorization) | C-16 | IDM-01, IDM-03, RVS-02, RVS-03, STL-01, ERR-03 |
| SR05-05 | HIGH | Carry-forward CF-4 | C-16 | IDM-01, IDM-03, RVS-02, RVS-03, STL-01 |
| SR05-06 | MEDIUM | Carry-forward CF-5 | C-16 | IDM-01, IDM-03, RVS-02, RVS-03, STL-01 |
| SR05-07 | MEDIUM | Later gate (S9 / provider authorization) | C-20 | GOV-01, STL-01 |
| SR05-08 | MEDIUM | Later gate (S9) | C-23 | SRC-01 |
| SR05-09 | MEDIUM | Later gate (Provider authorization; S12) | C-18 | MIG-02, MIG-03, MIG-04, VER-03, SRC-08, PRIV-06 |
| SR05-10 | MEDIUM | Substantive | C-20, C-21 | GOV-01, PRIV-05, SRC-07 |
| SR05-11 | LOW | Editorial (payer hints substantive under SR06-02) | C-17, C-20 | EVD-06, EVD-01, PRIV-01, PRIV-05, GOV-01, SRC-06 |
| SR06-01 | HIGH | Substantive | C-17 | EVD-06, EVD-01, PRIV-01, PRIV-05 |
| SR06-02 | MEDIUM | Substantive | C-17 | EVD-06, EVD-01, PRIV-01, PRIV-05, ID-02 |
| SR06-03 | MEDIUM | Later gate (S9) | C-17 | EVD-06, EVD-01, PRIV-01, PRIV-05 |
| SR06-04 | MEDIUM | Later gate (S9) | C-19 | AUD-03, DUE-04, PRIV-03, PRIV-04 |
| SR06-05 | MEDIUM | Later gate (S9) | C-14 | AUTHZ-01, AUTHZ-02, AUTHZ-03, AUTHZ-08 |
| SR06-06 | MEDIUM | Later gate (S9) | Held | MIG-05, PRIV-01 |
| SR06-07 | LOW | Later gate (S9) | C-19 | AUD-03, DUE-04, PRIV-03, PRIV-04 |
| SR06-08 | MEDIUM | Carry-forward CF-6 | C-20, C-21 | GOV-01, PRIV-05 |
| SR06-09 | LOW | Later gate (S12) | C-18 | MIG-02, MIG-03, MIG-04, VER-03, SRC-08, PRIV-06 |
| SR06-10 | LOW | Later gate (Before any publication) | Held | GOV-02 |

FIN-01 corrections C-24 to C-27 are realized by `EIS16-CAD-01` to `-08` and `EIS16-BAL-03`; C-28 by Section 35.2 (26 rows citing `16:FPDR-10`, all linked to `EIS16-CAD-*`).

### 35.6 Stage 7 carry-forward obligations

| ID | Finding | EIS requirement | Gate for proof | Fail-closed rule |
|---|---|---|---|---|
| CF-1 | SR01-06 | `EIS16-ID-03` | EIS lock; negative test at Stage 15 | Mismatched participant rejected |
| CF-2 | SR02-10 | `EIS16-AUTHZ-07` | EIS lock | No support access path without the row |
| CF-3 | SR03-04 | `EIS16-RVS-02` | EIS lock; provider authorization | Out-of-order events go to review; no activation untested |
| CF-4 | SR05-05 | `EIS16-RVS-03` | EIS lock; provider authorization | Unknown states go to review; no new label before MQ-04 |
| CF-5 | SR05-06 | `EIS16-IDM-03` | Stage 9 (this EIS) | Collisions rejected, never merged |
| CF-6 | SR06-08 | `EIS16-PRIV-05` | Stage 8 inventory delivered; lifecycle lock refused without U-08 | No retention or deletion behaviour built |

## 36. Trigger Screen and Open Engineering Questions

| Trigger | Result |
|---|---|
| T1, T2 | None established. Conditional watches: T2-W1 (14-Q1 against the MQ-03 invariant), T2-W2 (12-Q2 no compliant no-JWT intake path). |
| T3 | None. No requirement adds product behaviour. Watches: MQ-02, MQ-04, U-08 elements, OQ-02 options beyond explained variance. |
| T7 | None. No FCTM row, disposition or assignment changes; the `16:FPDR-9` branches stay deferred and traced. |
| T8 | None. Conditional watch T8-W2 (14-Q6(a) no governed void path). Every row is specifiable; held rows wait for recorded dependencies. |

| ID | Question | Status |
|---|---|---|
| 14-Q1 | `EIS14-RET-01` confirmation versus submitted payment evidence | Held for Stage 10 (`EIS16-EVD-06`) |
| 14-Q2 to 14-Q5 | Advance representation, application relation, refund semantics, subtype ownership | Open; `EIS16-CAD-03` to `-05` PROVISIONAL |
| 14-Q6 | Governed void; second command widening | Open; `EIS16-RVS-04`, `EIS16-MIG-02` |
| 12-Q1, 12-Q2 | Provider-event principal; no-JWT intake | Open; `EIS16-SRC-03` |
| 12-Q3 | Object-scope serialization | Open; `EIS16-CNC-04` |
| EQ16-01 | Participant reference as columns or link table | Proposed columns; Stage 10 decision (`EIS16-ID-01`) |
| EQ16-02 | Secret-storage home | Mission Control infrastructure choice (`EIS16-SRC-05`) |
| EQ16-03 | Reversed advance refund (AC-3) | Open; governed exception (`EIS16-CAD-07`) |
| OQ-02 | Gateway fee booking | Open until provider authorization; explained variance only (`EIS16-STL-01`) |
| OQ-05 | Historical profile | Not authorized; not required by this EIS (`EIS16-MIG-05`) |

**STOP FOR STAGE 10 MISSION CONTROL REVIEW.**

**Implementation Authorization: WITHHELD — IMPLEMENTATION NOT AUTHORIZED.**
