# SB-P-1.17 — Stage 10 SA-04 Documentary POS Integration Review

**Status:** SUBMITTED FOR MISSION CONTROL FINDING-BY-FINDING REVIEW — REFINEMENT REQUIRED; NOT EIS APPROVAL  
**Mission:** SB-P-1.17 — Manager Operations  
**Authority:** MC-466 activation; [MC-464A durable handoff](https://github.com/SmartBusinessv1/smart-business/blob/76352bfa613c6e97a4398499dcdb540ff513c3e6/communication/missions/SB-P-1.17/mission-control/24-mc464a-sa04-substantive-pos-review-authorization.md); [live instruction](https://github.com/SmartBusinessv1/smart-business/blob/76352bfa613c6e97a4398499dcdb540ff513c3e6/communication/live/instruction.md)  
**Reviewer:** POS Integration & Interoperability Assurance specialist room; ChatGPT / GPT-6 / OpenAI; AI-assisted documentary reviewer only  
**Date:** 2026-10-23  
**Canonical baseline:** main at 76352bfa613c6e97a4398499dcdb540ff513c3e6 (PR #1035 merged, independently rechecked by GitHub ref and PR metadata)  
**Immutable EIS:** docs/phase-1-mission-blueprint/implementation/SB-P-1.17-EIS.md; blob **8280967f2805cfed17778da3fc76c90b2f2f5ead — MATCH**  
**Scope:** POS integration architecture and consistency checks; read-only documentary evidence. No providers, runtime testing or engineering changes.  
**Implementation authorization:** WITHHELD.

## 1. Overall disposition and epistemic boundary

**SA-04 RESULT: REFINEMENT REQUIRED.** The vendor-neutral two-class bridge is faithful to the Founder decision at design level. The EIS appropriately refuses a fifth POS principal, a second Ledger, automatically guessed mappings, silent POS/manual merging, unproven closing completeness and accusation-led counter intelligence. The EIS is **not ready for SA-04 POS-path approval or Stage 11 lock** without finding-scoped correction and decisions on MC410-R01, MC410-R02, EQ17-13/MC410-R05, MC410-R04A, MC410-R04B and DPOS/qualified independent POS assurance.

- **Design-level feasibility:** plausible and documentarily supported, not built or validated in a real integration.
- **Source-specific feasibility:** UNKNOWN, not proven impossible. No vendor, adapter, source-dossier sample, merchant source authorization, real POS transaction, export, signature, refund/void or closing watermark was verified.
- **Evidence confidence:** HIGH for exact text-to-text contrasts and the existence of named open holds; MEDIUM for proposed failure scenarios and interface remedies, because no implementation or provider behaviour was observed; NO runtime/provider confidence.
- **No new product commitment:** All corrections below are minimum EIS/verification proposals under existing locked truth. They are **not self-executing approvals**. Any needed amendment or product decision follows Mission Control/Founder governance.

Importantly, existing Stage 10 SA-01, SA-03 and SA-05 reports are separate assurance opinions, not formal runtime attestations. Their unresolved findings remain unresolved. This reviewer cannot close them.

## 2. Review manifest — immutable source evidence

All links below target the verified canonical merge commit. The SHA column is the Git **blob SHA** returned by GitHub, not a hash inferred from a title.

| Ref | Read-only source | Blob SHA | Relevant coverage |
|---|---|---|---|
| M01 | [Stage 9 EIS](https://github.com/SmartBusinessv1/smart-business/blob/76352bfa613c6e97a4398499dcdb540ff513c3e6/docs/phase-1-mission-blueprint/implementation/SB-P-1.17-EIS.md) | 8280967f2805cfed17778da3fc76c90b2f2f5ead | §§6, 11–16, 19–29, 30 and 32 |
| M02 | [Locked Blueprint](https://github.com/SmartBusinessv1/smart-business/blob/76352bfa613c6e97a4398499dcdb540ff513c3e6/docs/phase-1-mission-blueprint/completed/SB-P-1.17.md) | bc4615f84959a79e6b242f622aae928901fbe959 | §§8.6–8.8, 20.7.10, 20.9.1–20.9.3, 21 |
| M03 | [Canonical FCTM](https://github.com/SmartBusinessv1/smart-business/blob/76352bfa613c6e97a4398499dcdb540ff513c3e6/communication/missions/SB-P-1.17/claude-code/01-stage2-populated-fctm.md) | cb79088d3fa59f8b3226fd9d11ff9c9573666670 | Contract 13 rows, in-scope dependencies and verification seeds; 630 rows, 404 in scope |
| M04 | [Founder decision 17:FPDR-2](https://github.com/SmartBusinessv1/smart-business/blob/76352bfa613c6e97a4398499dcdb540ff513c3e6/communication/missions/SB-P-1.17/claude-code/10-stage3-six-entry-founder-product-decision-record-for-review.md#L95-L127) | 90b7ca1d43fd1d89fa5b8fd4cce30320fb7c00d4 | Exactly one bridge contract; two interface classes; minimum and optional fields; Scenario B |
| M05 | [Feature Contract 13](https://github.com/SmartBusinessv1/smart-business/blob/76352bfa613c6e97a4398499dcdb540ff513c3e6/docs/phase-1-mission-blueprint/smart-business-features/13_POS_Counter_Intelligence_and_Closing_Cash.md) | 4426e8b1f9e856047759bdb03e2f5b83820f8cc0 | §§4–7, 8–10, 13, 16–18, 20 |
| M06 | [Feature Contract 7](https://github.com/SmartBusinessv1/smart-business/blob/76352bfa613c6e97a4398499dcdb540ff513c3e6/docs/phase-1-mission-blueprint/smart-business-features/07_Stock_Supplier_and_Reorder_Intelligence.md) | 65ad91b202def9cb4f42b97383bcc58475f59015 | §§7–8, 13; no silent stock reconciliation |
| M07 | [SB-P-1.12 EIS](https://github.com/SmartBusinessv1/smart-business/blob/76352bfa613c6e97a4398499dcdb540ff513c3e6/docs/phase-1-mission-blueprint/implementation/SB-P-1.12-EIS.md) | c444f7509477d0e8b997af538440d93bf2ca4d72 | EIS-KER-02/-06/-09, EIS-ID-05, EIS-ISO-04 |
| M08 | [SB-P-1.14 EIS](https://github.com/SmartBusinessv1/smart-business/blob/76352bfa613c6e97a4398499dcdb540ff513c3e6/docs/phase-1-mission-blueprint/implementation/SB-P-1.14-EIS.md) | 899a0fe1f98c62bbdfa621c97cdc5e8ee3ce65d3 | EIS14-CMD-01 to -03, IDM-01/-03, UDI, Ledger ownership |
| M09 | [SB-P-1.16 EIS](https://github.com/SmartBusinessv1/smart-business/blob/76352bfa613c6e97a4398499dcdb540ff513c3e6/docs/phase-1-mission-blueprint/implementation/SB-P-1.16-EIS.md) | 46fffd7b140940854c9b2b847517dde2f17584df | EIS16-RVS-04 and the *customer*, not supplier, balance limitation |
| M10 | [Accepted SA-01 Stage 10 report](https://github.com/SmartBusinessv1/smart-business/blob/76352bfa613c6e97a4398499dcdb540ff513c3e6/communication/missions/SB-P-1.17/specialists/05-stage10-sa01-documentary-security-review.md) | 457c6a369d2983016fe0230bd6f0355bf2cbb4e5 | SA01-S10-F01–F04 |
| M11 | [Accepted SA-03 Stage 10 report](https://github.com/SmartBusinessv1/smart-business/blob/76352bfa613c6e97a4398499dcdb540ff513c3e6/communication/missions/SB-P-1.17/specialists/07-stage10-sa03-documentary-financial-review.md) | ec4403a6ee31c50b3b91030a1c229ce8a37fd587 | SA03-S10-F01–F07 |
| M12 | [Accepted SA-05 Stage 10 report](https://github.com/SmartBusinessv1/smart-business/blob/76352bfa613c6e97a4398499dcdb540ff513c3e6/communication/missions/SB-P-1.17/specialists/09-stage10-sa05-documentary-supabase-migration-review.md) | 9c84c25916db7dfae13789d7f3a46748a4fc1e41 | SA05-S10-F01–F09 |
| M13 | [Prior Stage 7 SA-04 provenance](https://github.com/SmartBusinessv1/smart-business/blob/76352bfa613c6e97a4398499dcdb540ff513c3e6/communication/missions/SB-P-1.17/specialists/02-stage7-specialist-assurance-provenance-record.md) | 00a914eea2bfdd6b72349ac9adf7ffc8fa617e5f | SA-04 Stage 7 prior opinions and limits |
| M14 | [Source 18 v1.2](https://github.com/SmartBusinessv1/smart-business/blob/76352bfa613c6e97a4398499dcdb540ff513c3e6/merge/active/18_SB-P_Mission_Lifecycle_and_Delivery_Framework.md) | 0945bda60a93c99909c3b7a247d5427ebe256011 | Stage 10, T1–T8 and human lock authority |
| M15 | [MC-432 Stage 10 review contract](https://github.com/SmartBusinessv1/smart-business/blob/76352bfa613c6e97a4398499dcdb540ff513c3e6/communication/missions/SB-P-1.17/mission-control/14-stage10-independent-eis-review-request.md) | fad5a75a3f81009c563c9b47459be246fc610490 | Finding type, severity, traceability, source evidence |

GitHub ref and merged PR #1035 were verified before review. No provider portal, database, merchant file, backend log, production or test environment was accessed. The read-only EIS remained byte-identical at its expected blob.

## 3. POS coverage and requirement-to-finding traceability

| Assurance area | Exact EIS17-* requirements reviewed | Locked authority / invariant | Documentary disposition |
|---|---|---|---|
| Two approved adapters | POS-01, POS-08, POS-10, DOC-01/-02, ARC-06 | FPDR-2; C13 §§4–5; UDI | Sound scope; source evidence open, F07 |
| Provider-to-merchant authority | POS-02/-03, ARC-03/-04, AUTH-01/-06/-08, SEC-01/-02/-03, HOLD-15 | EIS-KER-02/-06; ISO-04 | HIGH hold, F01 |
| Source fields, identity and raw evidence | POS-04/-05/-06/-11, TXN-01/-02, PRIV-01, HOLD-07/-08/-21 | INV-A1; §20.9.3 | Requirements directionally sound; exact source evidence and contract details open, F07 |
| Posting vs inventory mapping | POS-06/-07, TXN-09, HOLD-16 | INV-A8; MC410-R02 | HIGH unresolved timing, F02 |
| Ledger/stock atomicity and event link | ARC-01/-04, STK-01/-05, TXN-03/-04/-10/-11, DOC-04, HOLD-17 | INV-A2/A3/A9; EQ17-13 | HIGH physical mechanism missing, F03 |
| Replay, unknown outcome and reversal | TXN-01/-02/-05/-06/-07/-11/-12, HOLD-18 | INV-A1/A4/A5/A6; MC410-R04A | Replay principle sound; reversal held, F04 |
| POS/manual overlap | TXN-08/-09, CC-02, HOLD-16/-17/-18 | INV-A7/A8; EQ17-10/14 | HIGH dual-domain resolution gap, F05 |
| Closing completeness and period | POS-12, CC-01 to -07, HOLD-19/-23, VER-11 | §20.9.2; MC410-R04B; U-03 | HIGH/MEDIUM source proof/closing hold, F06 |
| Counter review and privacy | CTR-01 to -07, PRIV-01/-02/-03, AUTH-02/-04, AI-04, HOLD-20 | FPDR-1/2; U-11; C13 §§8,13,18 | Neutral path sound; identifiable operator processing held, F08 |
| Verification and activation | MIG-01/-04, VER-01/-02/-04/-07/-09/-10/-11/-12, HOLD-04/-07/-21/-22 | §20.7.10; §20.9.3; FRV-B | T1/T2 fixtures insufficient; DPOS and qualified assurance open, F07/F09 |

The EIS Section 30 states 157 EIS requirements, 404/404 in-scope FCTM rows linked and zero orphans. These are **EIS-declared mechanical totals**, not a fresh independent semantic re-audit of all 157 requirements or 630 FCTM rows. SA-04 only makes a finding-scoped semantic judgment on the POS/intersection rows above. Other missions and Source 18 Stage 10 completeness remain Mission Control-owned.

## 4. Finding-scoped technical judgments

### SA04-S10-F01 — Provider authentication does not establish merchant command authority

**Severity:** HIGH; **class:** (c) unresolved dependency / hard security hold; **confidence:** HIGH documentary.  
**EIS:** POS-02, POS-03, ARC-03/-04, AUTH-01/-08, SEC-01/-02, HOLD-15. **Approved sources:** M07 EIS-KER-02/-06, EIS-ID-05, EIS-ISO-04; M02 §20.5; M05 §5. **Cross-report:** SA01-S10-F01 and SA05-S10-F02.  
**Normative truth:** exactly four approved verified-principal types; "integration" is a channel, not a principal. An external POS reference is business-scoped data. Possession of a signed webhook or server service_role is not merchant authority.

**Documentary finding:** The EIS correctly withdraws the earlier invented integration-principal assumption, but leaves the actual authenticated-source-to-merchant-authorized protected commit route undefined. A provider credential or webhook signature can authenticate a source; neither supplies an SB-P-1.12 governing principal or permission. This issue is especially acute for unattended webhooks; a merchant-uploaded UDI export has a different, human-confirmation entry route, but cannot be assumed safe without normal kernel, source and commit checks.

**Concrete failure:** POS source A presents a valid signature but supplies business B's ID in a payload. A privileged handler maps the body ID to a protected sale write under service_role. Provider authentication succeeds while B's Ledger/stock are mutated without B's authority. Revocation could also race a queued job.

**Minimal proposed EIS refinement / evidence:** Show separate envelopes for (a) signed webhook/API intake, (b) merchant-controlled structured export; server-derived immutable source-to-business binding; identity of the existing approved principal or governed upstream amendment; action/object scope, audit and authority epoch; narrow service-role predicates; revocation and source-disable behaviour; negative tests for cross-business substitution, forged/missing/expired signature, credential rotation, queued replay after revocation and forged actor claims. **Do not add a fifth principal by convenience.** Upstream kernel amendment, if necessary, needs Mission Control/Founder governance.

**Owner:** SB-P-1.12 authorization owner with SB-P-1.17 POS/EIS owner; SA-01 reconciliation.  
**Disposition:** HOLD-15 OPEN; API/webhook protected-write path NOT APPROVABLE. **Trigger:** T8 WATCH if no safe kernel-compatible route exists, not demonstrated infeasibility.

### SA04-S10-F02 — Financial trust is not permission to choose Ledger posting time

**Severity:** HIGH on affected path; **class:** (c) unresolved decision and (b) unsafe interpretation if hold bypassed; **confidence:** HIGH documentary.  
**EIS:** POS-04/-06/-07, TXN-09, HOLD-16, ARC-01. **Approved:** M02 INV-A8, M05 §§4–7. **Cross-report:** SA03-S10-F01; SA05-S10-F03.

**Normative truth:** missing inventory mapping alone does not falsify independently trustworthy financial evidence. Conversely, neither the Blueprint nor Contract 13 authorizes automatic immediate posting of a trusted but unmapped event; blanket suppression also has no approved basis. Only the SB-P-1.14 governed Ledger command may post.

**Failure scenario:** source authenticity and sale amount pass checks, item mapping fails. The sentence "unresolved mapping blocks only the movement that needs it" is read as permission to post immediate revenue; a later matching manual sale or correction produces a second economic record with no approved reversal path. Conversely, freezing all POS revenue until every item maps silently imposes an unapproved business rule.

**Minimal proposed refinement:** Make a named evidence-preserving pending/exception state distinct from "posted" and "discarded"; declare whether financial trust, mapping eligibility, duplicate-review state and governed-posting authorization are individually proven or still open. No cash/closing reader may count a pending event as posted Ledger truth or silently omit it from source-completeness review. Clarify TXN-09 does **not** settle timing, and select no generic timing rule here. Governed decision must come from SB-P-1.14 authority via Mission Control.

**Owner:** SB-P-1.14 Ledger authority with SB-P-1.17 EIS owner.  
**Disposition:** HOLD-16 OPEN; no invented posting rule. **Trigger:** T1/T8 not newly established; existing interpretation hold and T8 WATCH.

### SA04-S10-F03 — Source-state, Ledger and stock need an executable single transaction

**Severity:** HIGH / activation blocker; **class:** (c) unresolved architecture feasibility; **confidence:** HIGH text, MEDIUM physical feasibility.  
**EIS:** TXN-01/-02/-03/-04/-10/-11, STK-01, DOC-04, SEC-02, MIG-01, HOLD-17. **Approved:** M02 INV-A1–A3/A9, EQ17-13; M08 EIS14-CMD-01/-03. **Cross-report:** SA03-S10-F02, SA05-S10-F01 and SA05-S10-F06.

**Normative truth:** Ledger event, all required stock movements, source outcome and validated event links must commit in **one** database transaction or none. Inventory movement ownership is reused; a domain-owned link check must prove the referenced event exists, is of the correct type, belongs to the business and is not reversed **inside the commit**. Sequential server RPCs or post hoc compensation are not atomic.

**Failure scenario:** the Ledger commits a POS sale, then the stock command fails on unit conversion or a stock policy check. One financial event survives with zero stock movement. A later retry can repeat revenue. A separate defect lets a movement reference a same-format ID belonging to another business.

**Minimal proposed EIS refinement:** Record a concrete, owned database-transaction entry point with SB-P-1.14-approved Ledger suboperation, narrow kernel-authorized executor security mode, per-source idempotency claim, deterministic object/authority lock order, per-line event links, negative-stock treatment, all-or-nothing multi-line writes, source-state finalization and lookup-after-unknown outcome. Define failure-injection and simultaneous-delivery assertions. Reconcile SEC-02 with SA05-S10-F06; **never re-grant broad client DML** to make an invoker function work. If no safe composition exists within locked upstream interfaces, stop for Mission Control T8 screening.

**Owner:** SB-P-1.14 Ledger, SB-P-1.17 POS/stock and SB-P-1.12/Supabase architecture owners.  
**Disposition:** HOLD-17 / DTX OPEN; M17-9 activation blocked. **Trigger:** T8 WATCH, not established by this documentary assessment.

### SA04-S10-F04 — POS void, refund, correction and reversal remain semantically and atomically held

**Severity:** HIGH; **class:** (c) unresolved governed reversal primitive and provider semantics; **confidence:** HIGH documentary.  
**EIS:** TXN-02/-05/-06/-07, CC-06, HOLD-18, POS-04/-11. **Approved:** M02 INV-A5/A6; M05 §§6,16–17. **Cross-report:** SA03-S10-F03, SA05-S10-F04; M09 EIS16-RVS-04 illustrates separate unresolved void authority.

**Normative truth:** corrections/reversals are linked new events, with original history intact; no reversal applies to a missing target; stock-only corrections cannot fabricate Ledger transactions. Where original posting affected two domains, reversal affects both atomically. A POS "void" field cannot be assumed to mean a full-ticket financial refund, an item cancellation, or a stock return without source evidence.

**Failure scenario:** the void webhook arrives before its sale, or a partial refund names only one line. An adapter assumes full reversal and increases all stock, while the Ledger contains either unchanged revenue or an incorrect entire-ticket refund. Replaying that message produces a second adjustment.

**Minimal proposed refinement:** Require source-specific meaning of void, cancellation, return, refund, edit and adjustment (line vs ticket; pre-/post-settlement; sign; payment method); immutable parent/line linkage; governed original-event existence and authority checks; new idempotency identity for each correction; state machine for orphan/out-of-order/cancelled/partially corrected events; one-transaction compensating effects; cash-period reopen when required. Do not map an upstream SB-P-1.16 repayment void directly to a POS sale void. Where the governed Ledger reversal primitive is missing, hold rather than invent one.

**Owner:** SB-P-1.14 Ledger/reversal owner, SB-P-1.17 POS adapter owner; DPOS source evidence owner.  
**Disposition:** HOLD-18 OPEN. **Trigger:** T8 WATCH for verified incompatibility, not established.

### SA04-S10-F05 — POS/manual candidate review does not itself undo duplicate economic effects

**Severity:** HIGH; **class:** (b) engineering incompleteness in proposed resolution; **confidence:** HIGH documentary.  
**EIS:** TXN-08, TXN-02/-03/-06/-09, CC-02, HOLD-16/-17/-18. **Approved:** M02 INV-A7/A8 and §20.9.2 row 6; M05 §§6–7; M06 §7. **Cross-report:** SA03-S10-F04.

**Normative truth:** matching similarity (business, time, amount, method, items) is a **review candidate, not a unique identity**. No automatic merging, suppression, deletion or double-counting. The merchant's authorized human decision is retained. One actual economic sale cannot remain twice in canonical sales/stock effects.

**Failure scenario:** cash manual sale and later imported POS sale both posted and decremented stock. Reviewer clicks "duplicate"; only a review label is written. Both Ledger rows or both stock movements still affect totals, and closing variance becomes false.

**Minimal proposed refinement:** Distinguish pre-commit duplicate **suspicion** from post-commit **corrective adjudication**. Capture human decision, exact target event(s), reason, principal, version and confirmation. Where effects exist, invoke respective domain-owned governed correction/reversal(s), atomically if both domains must change, with stable keys, unknown-outcome recovery, append-only history and recalculated closing. Keep two source records for audit while proving exactly one underlying economic sale in authoritative totals after resolution. Specify EQ17-10/14 matching windows as *candidate-generation policy only*, not silent precedence.

**Owner:** SB-P-1.17 POS/counter owner and SB-P-1.14 Ledger owner; permission-scoped Merchant Owner/authorized actor at runtime.  
**Disposition:** REFINEMENT REQUIRED; overlapping posted effects cannot be declared resolved while HOLD-17/-18 are open. **Trigger:** no new T1–T8 trigger established.

### SA04-S10-F06 — COMPLETE closing needs source-specific, period-bound affirmative proof

**Severity:** HIGH for any false COMPLETE claim, MEDIUM for documentary refinement; **class:** (c) incomplete source evidence model; **confidence:** HIGH documentary.  
**EIS:** CC-01/-02/-03/-04/-06, POS-05/-12, HOLD-19/-23, VER-11. **Approved:** M02 §20.9.2 ten-row decision table and item 8 of §20.9.3. **Cross-report:** SA03-S10-F05 and SA05-S10-F05.

**Normative truth:** UNKNOWN > REVIEW-REQUIRED > PARTIAL > COMPLETE; no zero-filled float, count, manual shift time, missing POS event or invented operator assignment. No detected gap is **not** affirmative source completeness. Day vs shift is U-03 and cannot be silently chosen.

**Failure scenario:** integration cursor says "latest" but a prior page was skipped; export contains only one of two cash registers; source event time was UTC but treated as local time; a void for yesterday arrives after a COMPLETE closing. The display gives final variance although the source interval was never proven complete.

**Minimal proposed refinement:** For each configured source, bind completeness evidence to business, source, local period start/end, timezone version, source occurrence-time/offset semantics, covered event sequence/pages/interval, capture time, evidence actor or system attestation and supersession version. Clearly distinguish provider-guaranteed watermark, export-declared scope and **authorized** manual attestation; do not treat mere file presence or generic "sync succeeded" as proof. Report absent and late source intervals separately, do not double-count unresolved overlaps, exclude date-only manual events from shifts, and reopen linked closing versions after late corrections. One T2 case for each Blueprint table row plus precedence and late-arrival negatives is necessary but not yet run.

**Owner:** SB-P-1.17 closing/POS, SB-P-1.15 timezone and SB-P-1.14 Ledger owners; DPOS evidence owner.  
**Disposition:** HOLD-19, U-03/DSCH OPEN; no definitive COMPLETE state proven. **Trigger:** no new T8, source-capability WATCH.

### SA04-S10-F07 — DPOS provider identity, export row identity and capability are unverified

**Severity:** HIGH evidence gate; **class:** (c) missing qualified real-source evidence, not proven integration infeasibility; **confidence:** HIGH for absence in the reviewed packet, NONE for provider compatibility.  
**EIS:** POS-01/-03/-04/-05/-08/-11, DOC-01/-02, TXN-01/-02, HOLD-07/-08/-21, VER-07. **Approved:** M04 FPDR-2; M02 §20.9.3; M05 §§4–5,16–17; M08 UDI. **Cross:** SA-01 F01, SA-05 F02/F07/F09.

**Normative truth:** one vendor-neutral contract; class A authenticated API/webhook when available and class B structured export through existing UDI. Both require stable source identity, reliable normalized event semantics and dedupe. A content fingerprint is duplicate **evidence**, never proof of a trusted source-row ID. Manual CSV can be fallback, not a replacement for the committed bridge.

**Failure scenarios:** (a) same export row is re-sorted/re-exported, producing another digest or filename; without stable vendor row identity it becomes a duplicate sale; (b) webhook provider reuses an ID for a corrected amount, but replay code silently accepts a changed fingerprint; (c) "discount" represents ticket-wide promotion rather than line discount and the review engine invents a high-discount signal; (d) operator personal information is indiscriminately imported even though Scenario B works without it.

**Minimal proposed refinement:** For each candidate source, require the eleven-part approved dossier below; explicitly identify rows without vendor-stable IDs as **untrusted / review only**, not assert equal hashes are identity. Normalize amounts and quantities with provenance and source-defined line/ticket semantics; declare optional signal availability; distinguish occurrence from export time; validate event scope and replay/correction references. Adapter error, outage or provider rate limit must not disable manual inventory. Record provider-specific test cases and absence limits before activation; the vendor must be selected by Founder on evidence (EQ17-05).

**Owner:** Mission Control for dossier and appointment; Founder for source selection; SB-P-1.17 adapter owner; SB-P-1.14 UDI; approved secrets owner.  
**Disposition:** DPOS, DSEC and HOLD-21 OPEN. No source selected or FRV-B completed. **Trigger:** T8 WATCH on true incompatibility after source-specific investigation; absence alone is **not** an ESTABLISHED T8.

### SA04-S10-F08 — Neutral counter review is correct in principle, operator-data legal gate remains

**Severity:** MEDIUM, privacy gate HIGH if identifiable operators enabled prematurely; **class:** (c) qualified privacy evidence missing; **confidence:** HIGH documentary.  
**EIS:** CTR-01 to -07, PRIV-01/-02/-03, AUTH-02/-04, AI-04, HOLD-20. **Approved:** M04 FPDR-2; M05 §§8–9,13,18; M02 §20.9.3 item 4; 17:FPDR-1 capability 5.

**Normative truth:** no accusations of theft/fraud, disciplinary actions, automatic cashier lockout, wages deduction or forced reversals; signals derived only from actual declared fields with evidence basis and separate contextual human explanation. Capability 5 is Owner-only/non-delegable; absence of operator detail does **not** block business-level Scenario B.

**Failure scenario:** a POS source sends a cashier phone/email or free-text note in raw payload. A generic logging, review or AI-context path discloses it despite the operator-analysis hold. Or an absent optional void field becomes a fabricated "no suspicious voids" statement.

**Minimal proposed refinement:** Keep identifiable operator collection/use OFF pending U-11 professional determination; actively define ingress allowlist, quarantine/minimization of raw optional fields, log/AI/export access boundaries and source-specific signal-disabled states. Clearly distinguish "not evidenced by POS" from "zero events". Maintain reviewed neutral templates and permission-denial cases for Manager, Employee and support roles. Retention and legal basis remain qualified legal/privacy work; do not select a period.

**Owner:** SB-P-1.17 POS/privacy owner and qualified India legal/privacy specialist (U-11); SA-01 permission review as applicable.  
**Disposition:** Business-level neutral counter design DOCUMENTARILY ALIGNED; HOLD-20 OPEN for identifiable operator use. **Trigger:** no T1–T8 established by this finding.

### SA04-S10-F09 — Normative tests must prove adapter-specific negative and recovery paths

**Severity:** MEDIUM; **class:** (d) proposed minimum verification refinement; **confidence:** HIGH on present coverage wording, no executed-test evidence.  
**EIS:** VER-01/-02/-04/-07/-09/-10/-11/-12, FLR-01/-03, POS-09/-11, MIG-01/-04. **Approved:** M02 §§20.7.6–20.7.10, 20.9.1–20.9.3; M08 UDI. **Cross-report:** SA05-S10-F09.

**Finding:** The EIS promises T2 idempotency/negative tests and FRV-B but does not itself provide a provider-specific signed-payload / export-row / period-completeness / post-close replay matrix or any executed result. The earlier Stage 7 idea that synthetic fixtures demonstrate bridge behaviour must **not** be read as provider capability proof.

**Minimal proposed refinement:** A named, source-scoped, failure-injection verification matrix: signed provider input and tenant-bound authority; same-event same/different payload; concurrent delivery and lost response; export re-order/re-import and absent row ID; unknown item/unit/negative-stock failure; out-of-order partial void; manual/POS overlap with both pre- and post-commit effects; all-or-none Ledger/stock fault injection; cursor gap and offset/late close; operator-disabled and absent-signal display; provider outage manual continuity; no direct Ledger writes after DTX. T1/T2 synthetic tests may prove internal code mechanics only. Actual source attestation and T3/T4 FRV-B require separate authorization and approved real evidence.

**Owner:** SB-P-1.17 test/EIS owner, SB-P-1.12/-1.14 command owners, DPOS provider/source owner and Mission Control runtime gate owner.  
**Disposition:** Normative verification detail proposed; tests **NOT RUN**; no evidence gate closed. **Trigger:** no T1–T8 established by this test-design proposal.

## 5. Source dossier: mandatory evidence not yet provided

The following are the **eleven Blueprint §20.9.3 source eligibility items**, not invented new feature requirements. For this intake, **all eleven are UNVERIFIED for any selected actual POS**. "Unknown" means there is no authorized dossier here, not that every provider lacks the capability.

| # | Required real-source evidence | What must be demonstrated for a candidate | SA-04 current status |
|---|---|---|---|
| 1 | Provider/product identity and interface class | Vendor, product version, documented API/webhook or structured export and merchant right to connect | UNKNOWN |
| 2 | Minimum sale fields | Stable transaction ID, occurrence time, item reference, quantity, price, payment method | UNKNOWN |
| 3 | Discount/void meaning | Fields, line/ticket granularity, discount type, void/return/refund/correction distinction; needed for source-specific FRV-B | UNKNOWN |
| 4 | Operator attribution | Presence/absence, proposed permitted purpose and lawful handling; not required for business-only Scenario B | UNKNOWN; U-11 HELD |
| 5 | Source ID stability | Scope across retries, re-exports, corrections and any per-row export identity | UNKNOWN |
| 6 | Transport/export characteristics | Signatures, ordering, at-least/at-most once assumptions, pagination, retry, rate limits; or export format, encoding, row IDs, completeness markers | UNKNOWN |
| 7 | Secret and authentication home | Credential type, rotation, revocation, scope and approved DSEC server-side home | UNKNOWN; DSEC HELD |
| 8 | Time and offset semantics | Event occurrence versus export time, timezone/offset and business-local period translation | UNKNOWN |
| 9 | Correction/retry behaviour | Duplicate deliveries, edits, post-close reversals, out-of-order events, target linkage | UNKNOWN |
| 10 | Privacy and provider terms | Personal fields, access/terms, location, lawful permitted use and unresolved retention | UNKNOWN; U-11 HELD |
| 11 | Approved real-source samples | Authorized sandbox or merchant-approved event/export specimens, governed use and safe demonstration plan | NOT PROVIDED; FRV-B NOT DEMONSTRATED |

**Dossier exit condition (proposed evidence route, not authorization):** Mission Control accepts a named source dossier on authenticated evidence; Founder chooses the first appropriate source; the source demonstrably provides discount or void; kernel and Ledger/stock holds are resolved; documented adapter/authority tests pass in an approved environment; the Founder-reserved FRV-B confirms a neutral unusual-discount/void review item and negative cases (no accusation, no automatic punishment/lock/reversal, no unavailable signal fabricated, no cross-staff analysis disclosure). Synthetic fixtures alone cannot close source-specific DPOS or FRV-B. Independent qualified POS professional assurance needs actual reviewer credentials/appointment and provider/merchant evidence, separate from this AI document.

## 6. Accepted specialist reconciliation — no silent closure

Findings below are taken from M10–M12 and challenged at the POS interface; "carried" means not re-adjudicated by SA-04.

| Prior accepted finding | SA-04 treatment | Status after this report |
|---|---|---|
| SA01-S10-F01 (POS principal/authority) | Agreed on kernel gap; added separate webhook vs merchant-UDI ingress requirement (F01) | OPEN / HOLD-15 |
| SA01-S10-F02 (Manager grant scope) | Owner/Manager source review and consequence commands require defined scope; no accidental POS grant implied | OPEN; no SA-04 closure |
| SA01-S10-F03 (Reference Cost) | POS reporting and AI must not surface unauthorized purchase cost/margin | OPEN; no SA-04 closure |
| SA01-S10-F04 (53-case negative matrix) | Include POS source, scope, operator, cross-tenant negatives in normative verification (F09) | OPEN proposal; no tests |
| SA03-S10-F01 (MC410-R02) | Independent check: missing stock mapping is not posting permission (F02) | OPEN / HOLD-16 |
| SA03-S10-F02 (EQ17-13) | Physical composition, mult-line atomicity and link validation still lack proof (F03) | OPEN / HOLD-17 |
| SA03-S10-F03 (dual-domain reversal) | Source-specific void/refund semantics and governed compensation still held (F04) | OPEN / HOLD-18 |
| SA03-S10-F04 (POS/manual overlap) | Post-commit double economic effects cannot be fixed by label alone (F05) | OPEN |
| SA03-S10-F05 (closing proof) | Added per-source scope, watermark/cursor gaps and timezone evidence requirement (F06) | OPEN / HOLD-19 |
| SA03-S10-F06 (supplier-side balance cross-EIS contradiction) | Not an SA-04 POS finding; do not imply supplier balance is resolved | OPEN; SA-05 reports documentary T8 established |
| SA03-S10-F07 (positive idempotency findings) | Agree design preserves one outcome and lookup before retry; runtime proof and provider semantics missing | DOCUMENTARY PRINCIPLE PASS only |
| SA05-S10-F01 (atomic DB composition) | Must not be server RPC sequence; cite as architectural prerequisite (F03) | OPEN / HOLD-17 |
| SA05-S10-F02 (POS command authority) | Source credentials are not a kernel principal (F01) | OPEN / HOLD-15 |
| SA05-S10-F03 (TXN-09 ambiguous wording) | Existing sentence cannot choose timing (F02) | OPEN / HOLD-16 |
| SA05-S10-F04 (reversal composition) | Requires financially governed correction plus atomic stock effects (F04) | OPEN / HOLD-18 |
| SA05-S10-F05 (manual source attestation) | Any attestation must bind actor, source, period, timezone and evidence version (F06) | OPEN / HOLD-19 |
| SA05-S10-F06 (SEC-02 security mode) | Account for narrow executor in all POS transactional writes; no broad DML grant (F01/F03) | OPEN |
| SA05-S10-F07 (migration class evidence) | M17-6/M17-9 install ≠ activate; no untested source cutover (F07) | OPEN |
| SA05-S10-F08 (supplier balance contradiction) | Acknowledge source contradiction and prior documented T8; do not recast as POS evidence (M09) | OPEN; T8 **ESTABLISHED by SA-05**, not by SA-04 |
| SA05-S10-F09 (verification matrix) | POS-specific minimum negatives in F09; no CI/tests executed | OPEN |

**Cross-specialist consistency judgment:** No finding here safely closes SA-01, SA-03, SA-05 or U-11. SA-05's separately established **supplier SUP-06 cross-EIS T8** is not the same as the POS feasibility T8 **WATCH**. Neither is overwritten by the EIS Section 32's earlier draft trigger screen. Mission Control must consolidate, disposition and decide any founder escalation.

## 7. Independent challenge of this room's Stage 7 assumptions

This room previously produced the Stage 7 SA-04 analysis contained in M13. That report's suggestions were **inputs** rather than authority; current reassessment is as follows:

1. **"Feasible vendor-neutral architecture"** remains a *design hypothesis*, not a claim that any real POS meets FPDR-2 or the 11 dossier items. Source identity is not proved by content hashes.
2. **"One transaction"** was previously stated as an invariant; now challenge its physical realization. SA05-S10-F01 shows a concrete in-database coordinator/security/lock contract is necessary, not merely a later choice of server orchestration.
3. **"Trusted but unmapped revenue can exist independently of stock"** is a valid separation of evidence classes; it did **not** approve posting timing. SA03-S10-F01 correctly challenges the more permissive MC-411B inference.
4. **"Duplicates are human-reviewed"** is insufficient if two economic effects already posted. A review label cannot replace governed financial and stock compensation.
5. **"A reported sync is complete"** is not supported: proof must be tied to every configured source and exact period with trustworthy occurrence-time semantics.
6. **"Independent SA-04 assurance"** was never established from a room label or AI output; no provider-qualified independent human was appointed here.

No earlier SA04-EIS-01 through -12 proposal is automatically adopted by this report. The minimum refinements above are distinct, finding-scoped recommendations.

## 8. Precise future proof cases — no tests performed

| Case | Expected protected outcome (requires separately authorized T2/T3/FRV evidence) |
|---|---|
| A. Valid webhook, wrong-business payload | Reject cross-business binding; no protected command; denial audit |
| B. Source credential expired/revoked during queued event | No commit after revocation; source-specific failure only |
| C. Identical event received concurrently, including export replay | At most one committed outcome; stable outcome lookup |
| D. Same external ID with different payload | Fingerprint conflict; hold for linked correction review, no duplicate |
| E. Lost response after commit | Query durable idempotency key, return original outcome; never blind retry |
| F. Unknown POS item/ambiguous unit | No guessed movement; financially trusted/unmapped posting still governed by HOLD-16 |
| G. Multi-line sale fails after one stock sub-effect | Ledger, all movements, links and source final status roll back together |
| H. Void before original or partial-line refund | Held until exact target/semantics verified; no guessed full refund |
| I. Manual + POS copies already both posted | Human-governed linked correction restores one Ledger/stock economic effect |
| J. POS watermark past period end with earlier missing page | PARTIAL / incomplete evidence, not COMPLETE |
| K. Missing cash count, float, time or unknown timezone | Appropriate UNKNOWN/PARTIAL; no fabricated variance or shift |
| L. Post-close late event/correction | Reopen REVIEW-REQUIRED; keep old closing version and provenance |
| M. Provider lacks discount/void or operator | Unsupported signal marked unavailable; no fictitious zero, no person inference |
| N. Source outage while merchant records sales manually | Manual operations continue; suspected overlap is visible on resync |
| O. Approved real source for FRV-B | Neutral review item and all negative experience/permission cases pass; fixtures do not count |

These are **test requirements/proposals**, not reports of successful execution, commercial compatibility or provider certification.

## 9. Holds, source/evidence confidence, and T1–T8 screen

| Hold / question | Current finding and severity | Required disposition before affected acceptance |
|---|---|---|
| MC410-R01 / HOLD-15 | HIGH — no webhook merchant authority route | Coordinate SB-P-1.12-compatible source-to-principal command binding; SA-01 concurrence |
| MC410-R02 / HOLD-16 | HIGH — no approved trusted-unmapped posting timing | SB-P-1.14 Ledger authority through Mission Control; do not choose rule here |
| EQ17-13 / HOLD-17 / DTX | HIGH — physical atomic composition not demonstrated | SB-P-1.14/Supabase owned transaction topology; fault/replay tests and DTX cutover |
| MC410-R04A / HOLD-18 | HIGH — governed reversal semantics/primitive unproven | Domain-owned Ledger correction/reversal, exact POS target and stock effects atomically |
| MC410-R04B / HOLD-19 | HIGH for COMPLETE — no per-period source proof | Approved source completeness envelope and late/reopen tests |
| DPOS / HOLD-07/-21 | HIGH evidence gap — real-source dossier absent | Named vendor/source evidence, Founder selection, qualified POS evidence and FRV-B |
| DSEC / HOLD-08 | Source-specific readiness unknown | Approved secret home and rotation/revocation without merchant bypass |
| U-11 / HOLD-20 | Identifiable operator use HELD | Qualified Indian privacy/legal resolution; business-only signal may be designed without attribution |
| U-03 / HOLD-23, DSCH | Closing day/shift and timezone unresolved | Mission Control-governed period decision and exact timestamps |
| EQ17-10/-14 | Matching precedence/windows not specified | Human-review-only candidate rule, explicit dual-domain resolution |
| SA05-S10-F06 | HIGH cross-cutting protected-command executor gap | Resolve with security and migration owners, no broad DML restoration |
| SA05-S10-F08 / SUP-06 | HIGH separate cross-EIS conflict | Mission Control-owned correction; **T8 already ESTABLISHED by SA-05** |

**Source 18 trigger screen for this SA-04 report:**

- **T1:** NOT newly established. Existing open decisions/holds are identified rather than settled; if an approved-safe POS source cannot support a required product behaviour, escalate the exact uncovered product choice.
- **T2:** NOT newly established by SA-04. The existing supplier SUP-06 conflict is recorded by SA-05, not silently corrected here.
- **T3:** NOT newly established; no new product behaviour is approved or introduced.
- **T4/T5:** NOT established; no new product Delta or Founder request asserted by this review.
- **T6:** Existing threshold-evidence sufficiency WATCH remains; no new SA-04 derived constraint is adopted as product behaviour.
- **T7:** NOT established; this report does not omit, reclassify, narrow or defer any approved FCTM obligation, bridge class or FRV-B.
- **T8:** **POS source/atomicity/authorization: WATCH, not ESTABLISHED**; absence of a vendor dossier is not evidence of impossibility. **Separate SA05-S10-F08 supplier balance cross-EIS conflict: ESTABLISHED in the accepted SA-05 report, requiring Mission Control reconciliation.** This SA-04 report neither proves nor closes that trigger.

If a later POS vendor truly cannot meet the approved two-class bridge or FRV-B obligation, mark affected rows as blocked and return to Mission Control rather than inventing a fallback scope cut or custom-core integration.

## 10. Mission Control disposition and strict stop

**Recommend REFINEMENT REQUIRED, POS QUALIFIED INDEPENDENT ASSURANCE OPEN, DPOS REAL-SOURCE VALIDATION OPEN.** Accept the documentary positives only as design consistency; reconcile findings F01–F09 with SA-01/03/05 in the Stage 10 consolidated register, assign SB-P-1.12, SB-P-1.14, Supabase, POS-source and U-11 owners as specified, and return only affected EIS statements for approved, bounded refinement. No wholesale restart or silent gate waiver.

**Reviewer competence / independence:** ChatGPT GPT-6 (OpenAI); not a qualified human POS integrator, vendor-certified technician, merchant operator, licensed security auditor, Chartered Accountant or Indian legal/privacy professional. I did not author the SB-P-1.17 Blueprint/EIS and did not implement the bridge, but this same specialist-room conversation produced earlier Stage 7 SA-04 opinions; therefore **not clean-room independent**. GitHub repository read and the expressly authorized report/communication write scope were available. No human professional standing, independent appointment or actual merchant/vendor evidence is implied. Prior assumptions were challenged above.

**Not performed:** source/vendor research through authenticated systems; real provider or merchant POS connections; webhook events or POS transactions; Supabase queries/SQL; migrations; application changes; T1/T2/T3/T4 or FRV-B tests; live permission or financial-state verification; EIS edits, approval, lock, or implementation/deployment.

**STOP FOR MISSION CONTROL SA-04 SUBSTANTIVE REVIEW DISPOSITION.**
