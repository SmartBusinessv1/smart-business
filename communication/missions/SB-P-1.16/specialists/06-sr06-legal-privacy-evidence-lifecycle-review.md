# SB-P-1.16 — Stage 7 SR-06 Legal, Privacy and Evidence Lifecycle Specialist Review

**Assignment:** SR-06 — Legal, Privacy and Evidence Lifecycle, under MC-183  
**Authority:** Source 18 v1.2 Stage 7 and §4.8; MC-183  
**Reviewer:** Claude subagent (general-purpose agent), model family Claude (Anthropic), fresh context, spawned and briefed by Claude Code (the Stage 2–4, 6 and 7 author) on 2026-10-17  
**Independence:** NOT INDEPENDENT — same provider and model family as the Stage 7 author, and briefed by that author. Separately attributable only. No prior SB-P-1.16 authorship in this context.  
**Baseline:** `main@abd5e0d547aabc315513e8901edecfd327edaaf9`  
**Status:** DRAFT SPECIALIST REPORT — READ-ONLY — FINDINGS ARE INPUTS, NOT AUTHORITY  
**Implementation Authorization:** WITHHELD — IMPLEMENTATION NOT AUTHORIZED.

## 1. Reviewer provenance and limits

- **Provenance.** This review was prepared by a Claude subagent in a fresh context. It was spawned and briefed by Claude Code, the author of the Stage 7 draft under review. It shares that author's provider and model family. It is therefore separately attributable but NOT independent.
- **Not legal advice.** The reviewer is not a lawyer, and nothing in this report is legal advice. Where law may be relevant (for example India's Digital Personal Data Protection Act, 2023 and any rules made under it; Reserve Bank of India or payment-aggregator record-keeping expectations; GST record retention; Income-tax books-of-account retention), this report identifies the question and the kind of qualified review needed. No statutory period, obligation, role or exemption is stated as settled fact. Every legal point is marked "to be confirmed by qualified counsel".
- **No decisions.** This report does not decide U-08 / DC-11, any retention or deletion duration, any Founder question (OQ-01 to OQ-05), any FCTM disposition or any provider selection.
- **Could not verify.** Live database grants, RLS, storage buckets and backup or point-in-time-recovery configuration; the content of any production record; provider data-processing terms; the AI provider and its data location; the SB-P-1.14 R2 lifecycle and hold-exclusion capability (`UNVERIFIED — ACCESS REQUIRED` in the SB-P-1.14 EIS). No live system was accessed.

## 2. Evidence inspected

| Path | Blob |
|---|---|
| `communication/missions/SB-P-1.16/claude-code/18-stage7-blueprint-sections-20-21-draft.md` | `1064ab18` |
| `communication/missions/SB-P-1.16/claude-code/19-stage7-engineering-review-report.md` | `a3b644f0` |
| `communication/missions/SB-P-1.16/claude-code/17-stage6-builder-review.md` | `c9a93566` |
| `communication/missions/SB-P-1.16/claude-code/02-stage2-populated-fctm.md` | `5ff7742f` |
| `communication/missions/SB-P-1.16/claude-code/04-stage2-mission-truth-pack.md` | `4a7bfe4f` |
| `communication/missions/SB-P-1.16/claude-code/09-stage3-founder-product-decision-record-draft.md` | `30b19a80` |
| `docs/phase-1-mission-blueprint/active/SB-P-1.16.md` | `8e79636f` |
| `docs/phase-1-mission-blueprint/implementation/SB-P-1.12-EIS.md` | `c444f750` |
| `docs/phase-1-mission-blueprint/implementation/SB-P-1.14-EIS.md` | `899a0fe1` |
| `docs/phase-1-mission-blueprint/smart-business-features/14_Smart_Credit_Awareness.md` | `16914a83` |
| `docs/phase-1-mission-blueprint/smart-business-features/15_Payment_Verification_and_Bank_Reconciliation.md` | `632f3402` |
| `docs/phase-1-mission-blueprint/smart-business-features/25_Document_Media_Storage_and_Retention_Foundation.md` | `406ce089` |
| `docs/phase-1-mission-blueprint/smart-business-features/05_Universal_Document_and_Receipt_Intelligence.md` | `80ac648e` |

## 3. Method

1. Read the brief, then the in-scope FCTM rows (`25-§17-1`, `BP-§15-6`, `15-§6-7`, `15-§6-8`, `15-§6-12`, `5-§6-1`, `25-§17-4`, `25-§17-5`) and the `DUF6` dependency code, and confirmed their dispositions: the first two are `UNRESOLVED FOUNDER DECISION` (owner SB-P-1.19); the three `15-§6-*` rows are `IN SCOPE`; the last three are `DELEGATED` to SB-P-1.14.
2. Read Truth Pack DC-11, U-08 and Section D.5 (MC-112), `16:FPDR-4`, `16:FPDR-6` §8 and `16:FPDR-8` §4, Contract 25 §§16, 17, 19 and 22, Contract 15 §§5, 6, 17 and 22, Contract 14 §19 and Contract 5 §6.
3. Read Stage 7 draft §§20.3 to 20.6, 20.7.2, 20.7.8, the register rows for privacy and evidence components, and §§21.2 to 21.6. Read Stage 6 findings SB16-B6-19 and SB16-B6-25.
4. Traced which upstream retention, hold and deletion foundations exist in the locked SB-P-1.12 and SB-P-1.14 EIS (`EIS-LEG-01` to `-03`, `EIS-DEL-*`, `EIS14-STO-07`, `EIS14-RET-01`, `EIS14-RET-03`, `EIS14-UDI-08`) and whether the Stage 7 draft consumes them (text search of the draft found no reference to any of them).
5. Compared the §20.4.8 evidence-record field list with Contract 15 §6 field by field.
6. Classified each Stage 7 design as lifecycle-independent (lockable at Stage 8 without U-08) or lifecycle-dependent.
7. Screened the Stage 6 report and both Stage 7 files for personal data, merchant data and credentials by pattern search (email addresses, Indian mobile numbers, JWT-shaped tokens, provider key prefixes, Supabase project hosts, URLs, "secret", "password", "service_role"). Only environment-variable names and generic words were found; no values.

## 4. Findings

### SR06-01 — Bounded upload grace can discard payment evidence that is still under review

- **Severity:** HIGH
- **Evidence:** SB-P-1.14 EIS `EIS14-RET-01` (blob `899a0fe1`, line 219): unconfirmed uploads stay in transient staging with a bounded grace period and "confirmation promotes the object to durable storage". Truth Pack DC-11 (blob `4a7bfe4f`, line 55): the grace "applies only to unconfirmed uploads, not to evidence linked to a business record". Contract 15 §11 b1 requires unlinked evidence to be preserved. Stage 7 draft (blob `1064ab18`) §20.4.7 (lines 120–133) and §20.4.8 (lines 135–154) never say when a merchant-submitted payment upload counts as "confirmed" for `EIS14-RET-01`; the draft contains no reference to `EIS14-RET-01` or `14:FPDR-2` grace.
- **Affected FCTM IDs:** `15-§5-5`, `15-§11-2`, `15-§10-1`, `15-§20-2`, `15-§6-8`, `15-§6-12`; delegated `5-§6-1`.
- **Affected Stage 7 draft sections:** §20.4.7, §20.4.8, §20.4.9 (review queue), register rows at lines 517, 528, 532, 556, 562, 604.
- **Related Stage 6 findings:** SB16-B6-25, SB16-B6-12.
- **Engineering implication:** DC-11 distinguishes "unconfirmed upload" from "evidence linked to a business record". A merchant-submitted screenshot that sits in the review queue as `evidence received`, `ambiguous`, `mismatched` or `unlinked` falls between the two. If "confirmed" is read as "linked", unlinked or under-review evidence would expire with the staging grace. That would silently breach `15-§11-2` and `15-§10-1` and destroy audit evidence (`15-§6-8`) without any retention decision having been made.
- **Required correction or evidence obligation:** The Stage 7 draft should state the promotion point explicitly as an engineering proposal for Mission Control confirmation. The reviewer's suggested reading is that explicit merchant submission into the payment-evidence workflow is the confirmation that promotes the object to durable storage, independent of link outcome. Abandoned pre-submission drafts would remain under `EIS14-RET-01`. The EIS must carry a test that unlinked and under-review evidence survives the staging grace. If Mission Control reads the promotion point as a product decision, route it with the U-08 questions (see SR06-08, question 9).
- **Uncertainty:** The SB-P-1.14 EIS may intend "confirmation" to mean the UDI preview confirmation rather than a Ledger link; if so, the gap is narrower but still needs an explicit statement for payment evidence, which may not pass through a UDI preview.
- **Trigger screen:** None if corrected as an explicit engineering statement. If the promotion point is held to be a product choice, it is a T3 element already covered by the open U-08 T3 (Truth Pack D.3 and D.5, "grace period for unconfirmed uploads beyond 14:FPDR-2").

### SR06-02 — Evidence record omits payer, payee and account hints, and "where permitted" is undefined

- **Severity:** MEDIUM
- **Evidence:** Contract 15 §6 (blob `632f3402`, lines 78–97) lists "payer/payee/account hints where permitted". FCTM row `15-§6-7` is `IN SCOPE` and cites U-08. Stage 7 §20.4.8 field list (lines 137–149) has no payer, payee or account-hint field; §20.4.9 (line 158) uses an "identity hint" in matching without defining its source. Register row `15-§6-7` (line 527) records only `PROVIDER-HELD` and audit or currency risks, with no privacy risk.
- **Affected FCTM IDs:** `15-§6-7`, `15-§22-2`, `15-§22-5`, `14-§19-1`.
- **Affected Stage 7 draft sections:** §20.4.8, §20.4.9, register row for `15-§6-7`.
- **Related Stage 6 findings:** SB16-B6-13, SB16-B6-25.
- **Engineering implication:** Either the field is silently omitted (an unrecorded design narrowing of an `IN SCOPE` row) or it will be added at EIS without a minimization rule. Payer names, UPI handles, masked account numbers and bank names are personal data of the merchant's customers. Storing them in clear, durable, searchable fields is the highest-exposure part of the evidence record.
- **Required correction or evidence obligation:** Add a "payer, payee and account hints" element to §20.4.8, marked as a minimized, permission-scoped field whose permitted content and form (for example masked or truncated values, or a reference to the participant rather than a copy) awaits the legal question in SR06-08 (question 3). State that the matcher uses hints only as candidate signals, never as identity resolution (`16:FPDR-1`). Add a privacy risk to the `15-§6-7` register row. What "where permitted" means is to be confirmed by qualified counsel.
- **Uncertainty:** The author may have intended "identity hint" in §20.4.9 to cover this; the record list still does not show it.
- **Trigger screen:** None if the field is restored as a held, minimized element. If Stage 7 intends to omit it, that is a T7 narrowing of `15-§6-7` and needs Founder disposition.

### SR06-03 — Upstream retention, hold and deletion foundations are not consumed

- **Severity:** MEDIUM
- **Evidence:** SB-P-1.12 EIS (blob `c444f750`, lines 434–436): `EIS-LEG-01` record-class registry with no coded period, `EIS-LEG-02` legal and dispute hold, `EIS-LEG-03` backup and point-in-time-recovery treatment as an evidence item. SB-P-1.14 EIS (blob `899a0fe1`, lines 211, 219, 221): `EIS14-STO-07` lifecycle states with hold as an overriding flag, `EIS14-RET-01`, `EIS14-RET-03`. Stage 7 §20.2 (line 28) lists the consumed upstream IDs; none of these appears there or anywhere in the draft. §20.3 C-PRIV (line 61) consumes only `EIS-ISO-01` to `-04`.
- **Affected FCTM IDs:** `15-§6-12`, `15-§6-8`, `15-§13-1`, `15-§13-2`; delegated `5-§6-1`, `25-§17-4`, `25-§17-5`.
- **Affected Stage 7 draft sections:** §20.2, §20.3 (C-PRIV, E-REC), §20.4.8, §20.4.10, §20.7.2 (M16-2, M16-3).
- **Related Stage 6 findings:** SB16-B6-25.
- **Engineering implication:** These foundations let SB-P-1.16 be lifecycle-ready without deciding U-08: each new record class carries a reference to a retention-rule entry held as data, and holds block deletion. Without them, M16-2 and M16-3 tables would be born without a record-class reference, and a later U-08 decision would need a schema change. Disputes and chargebacks (`16:FPDR-6` §6) are the most likely trigger for a dispute hold, but §20.4.10 has no hold hook.
- **Required correction or evidence obligation:** Add `EIS-LEG-01`, `EIS-LEG-02`, `EIS-LEG-03`, `EIS14-STO-07`, `EIS14-RET-01` and `EIS14-RET-03` to §20.2 and to the C-PRIV and E-REC rows of §20.3. State that every SB-P-1.16 record class (evidence record, raw evidence object, settlement evidence, link, review decision, reversal history, credit decision record, communication draft) registers a record class under `EIS-LEG-01` with a provisional rule and no coded duration. In §20.4.10, propose that a provider dispute or chargeback event makes the affected evidence eligible for an `EIS-LEG-02` hold. Whether it is applied automatically or by the Owner is a governance question (SR06-08, question 8).
- **Uncertainty:** Mission Control may prefer to leave record-class registration to the EIS; the omission from §20.2 still understates the dependency.
- **Trigger screen:** None. Consuming locked upstream foundations adds no product behaviour.

### SR06-04 — Customer personal data may be copied into append-only records with no correction or de-identification path

- **Severity:** MEDIUM
- **Evidence:** Stage 7 §20.4.1 (lines 75–82) uses a participant reference, which is good. §20.4.11 (line 174) says corrections write "prior and new values in an append-only event", covering "identity references". §20.4.8 copies external data into the evidence record. §20.5 Customer row (line 185) gives the Customer no capability. SB-P-1.12 EIS `EIS-DEL-01` to `-07` (lines 420–426) define de-identification for `persons`, not for business-scoped participant records (`EIS-ID-03`, line 147). Contract 25 §17 keeps privacy minimization in force "even when storage is cheap".
- **Affected FCTM IDs:** `14-§19-1`, `14-§19-3`, `14-§17-1`, `15-§22-5`, `3-§11-6`, `14-§4-1`.
- **Affected Stage 7 draft sections:** §20.4.1, §20.4.8, §20.4.11, §20.5 (Customer and C-PRIV).
- **Related Stage 6 findings:** SB16-B6-02, SB16-B6-19.
- **Engineering implication:** A customer of a merchant is a natural person whose name, contact details, debts and payment behaviour SB-P-1.16 records. If audit events, evidence fields or drafts copy that customer's name or contact data instead of referencing the participant record, any later lawful correction or de-identification at the participant record cannot reach those copies without rewriting append-only history. Whether data-principal rights (access, correction, erasure, grievance) apply, against whom (the merchant or Team LIPS) and with what retention exemptions for financial records is to be confirmed by qualified counsel.
- **Required correction or evidence obligation:** Add a "reference, do not copy" principle to C-PRIV: audit events, evidence links, decision records and drafts reference the participant by `(business_id, participant_id)` and do not duplicate the participant's name or contact fields, except where a source artifact (a raw payload or screenshot) inherently contains them. State that a participant de-identification path is not designed here and is an upstream SB-P-1.12 question routed through Mission Control. Carry the legal role question to counsel (SR06-08, questions 2 and 4).
- **Uncertainty:** The SB-P-1.12 participant model may already intend de-identification through `EIS-LEG-01` record classes; the reviewer found no explicit participant de-identification command.
- **Trigger screen:** None now. A future requirement to honour customer erasure requests may become a T3 product decision; it is not raised here.

### SR06-05 — Raw evidence objects can contain third-party data, and access to them is not separated from access to the evidence record

- **Severity:** MEDIUM
- **Evidence:** `16:FPDR-6` §3 admits "receipts, screenshots and related documents". Contract 15 §17 (lines 238–257) and §22 b4–b5 limit staff and platform exposure and require audit "without unnecessary disclosure". Stage 7 §20.4.8 (line 148) holds a raw-evidence pointer; §20.5 (line 183) defines `recon.review_assigned_evidence` but does not distinguish viewing the normalized record from opening the raw object. The draft does not say whether uploads pass through SB-P-1.14 UDI interpretation, which would send content to an AI gateway (`EIS14-UDI-08` context minimization, line 173).
- **Affected FCTM IDs:** `15-§5-5`, `15-§6-8`, `15-§22-2`, `15-§22-4`, `15-§22-5`, `15-§17-4`, `14-§19-2`.
- **Affected Stage 7 draft sections:** §20.4.7, §20.4.8, §20.5 (Scoped Manager delegation, Service-role use).
- **Related Stage 6 findings:** SB16-B6-17, SB16-B6-24, SB16-B6-25.
- **Engineering implication:** A UPI or banking-app screenshot commonly shows other transactions, balances, names and account details of people unrelated to the payment. Provider webhook payloads can carry customer contact data. Any actor who can open the raw object sees all of it. If uploads are interpreted by an external AI provider, the content may leave Smart Business; whether that needs a specific basis, notice or cross-border assessment is to be confirmed by qualified counsel.
- **Required correction or evidence obligation:** In §20.5, separate a raw-object read (Owner by default; a separately grantable, object-scoped Manager capability) from reading the normalized record, and audit each raw-object read. In §20.4.8, state whether payment-evidence uploads use UDI interpretation; if they do, cite `EIS14-UDI-08` and route the AI-processing question to counsel (SR06-08, question 10). Support access stays with SB-P-1.19 (`15-§17-4`).
- **Uncertainty:** SR-02 may cover object-level access mechanics; this finding is limited to the privacy requirement that raw content is more sensitive than the normalized record.
- **Trigger screen:** None. A separate raw-object capability is a narrower grant within `16:FPDR-7`, not new behaviour.

### SR06-06 — The OQ-05 historical-data profile has no privacy conditions

- **Severity:** MEDIUM
- **Evidence:** Stage 7 §20.4.5 (lines 108–113) and §21.2 OQ-05 (line 741) recommend authorizing a read-only profile of historical credit-method sales "before the migration specialist review concludes". §20.7.2 M16-5 (line 254). The production `sale` rows hold a free-text `party_name` (§20.3, line 38), which can contain customer names or phone numbers. Production is the live Team LIPS project (§20.7.1, line 240).
- **Affected FCTM IDs:** `14-§19-1`, `14-§19-3`, `15-§22-5`, `14-§4-1`.
- **Affected Stage 7 draft sections:** §20.4.5, §20.7.2 (M16-5), §21.2 (OQ-05).
- **Related Stage 6 findings:** SB16-B6-06.
- **Engineering implication:** A profile of live merchant data reads real customers' names and debts. Without conditions it could export row-level personal or merchant data into a working file, a chat transcript or this public repository.
- **Required correction or evidence obligation:** The OQ-05 recommendation should carry privacy conditions for Mission Control to adopt or reject: aggregate counts and shape statistics only; no `party_name`, phone, amount-with-name or other row-level values leave the database session; no merchant identifiers in any output; results recorded in the repository only as counts; a named actor, environment and expiry; and no AI processing of row-level output. Whether profiling merchants' customer data for product engineering is within the purposes merchants were told about is to be confirmed by qualified counsel (SR06-08, question 11).
- **Uncertainty:** OQ-05 may intend a test-project copy; the draft does not say which environment.
- **Trigger screen:** None. These are conditions on an authorization Mission Control has not yet given.

### SR06-07 — Communication drafts hold customer financial data with no record class

- **Severity:** LOW
- **Evidence:** Stage 7 §20.4.11 (line 176): drafts are stored with state (`draft`, `approved`) and approving actor; §20.7.2 M16-2 creates the table. `16:FPDR-8` §2 requires the merchant to review "the intended recipient, message content and supported financial details", and §4 forbids disclosure outside the recipient's permitted relationship. U-08 and DC-11 are framed around payment evidence only (Truth Pack line 55; Blueprint §12.3, line 724).
- **Affected FCTM IDs:** `14-§10-2`, `14-§22-9`, `14-§19-1`, `14-§19-4`.
- **Affected Stage 7 draft sections:** §20.4.11, §20.7.2 (M16-2), §21.4.
- **Related Stage 6 findings:** SB16-B6-19.
- **Engineering implication:** Drafts and approved-but-unsent messages contain a named recipient, contact route and balance. Because no channel exists (`DNTF`), they may accumulate indefinitely. They are outside the U-08 question as currently worded, so no decision would cover them.
- **Required correction or evidence obligation:** Register drafts as their own record class (see SR06-03), state that a discarded draft is not a financial record, and add drafts to the record-class list Mission Control takes to Founder or legal governance (SR06-08, question 1). Drafts must reference the participant rather than copy contact data (SR06-04).
- **Uncertainty:** Mission Control may treat drafts as within U-08 already; the written scope does not show it.
- **Trigger screen:** None.

### SR06-08 — U-08 hold is understated; lifecycle-dependent designs are not inventoried before Stage 8

- **Severity:** MEDIUM
- **Evidence:** Stage 7 §21.4 U-08 row (line 763) says only "No retention or deletion rule. A lifecycle-dependent Stage 8 lock waits for it", without saying which designs are lifecycle-dependent. Truth Pack D.5 (lines 145–168) lists the elements a lock may not settle: retention duration per class, deletion eligibility and actor, cancellation or non-payment treatment, backup and restoration and restored-copy deletion, export, and grace beyond `14:FPDR-2`. Register row `15-§6-12` (line 532) is `DEPENDENCY-HELD` with dependency `DUF6`, but the `DEPENDENCY-HELD` definition (line 309) lists only `D12`, `D13`, `D14`, `DTX`, `D15`, `DSCH`, `DAI`; `DUF6` is an unresolved Founder decision, not an unbuilt foundation. §20.6 SB16-B6-25 (line 229) keeps LOW severity. §21.6 legal row (line 798) covers only "retention, deletion, backups and legal holds" for the §20.4.8 pointer.
- **Affected FCTM IDs:** `15-§6-12`, `15-§6-8`, `15-§6-7`, `25-§17-1`, `BP-§15-6`; delegated `5-§6-1`, `25-§17-4`, `25-§17-5`.
- **Affected Stage 7 draft sections:** §20.6 (SB16-B6-25), §20.8 (status vocabulary; row `15-§6-12`), §21.4, §21.5, §21.6.
- **Related Stage 6 findings:** SB16-B6-25.
- **Engineering implication:** Without an inventory, a Stage 8 lock could fix a lifecycle-dependent element by default (for example by locking a deletion command, a backup restoration procedure, or an export of evidence). Classifying `15-§6-12` as an unbuilt-foundation hold hides that part of it waits on a Founder or legal decision.
- **Required correction or evidence obligation:** (a) Add a lifecycle-dependence table to §21.4. In the reviewer's reading: the evidence record field set, the raw-object pointer, record-class registration, the hold hook, history preservation on reversal, the "no destructive deletion" default and the draft states are lifecycle-independent and lockable at Stage 8; retention durations, deletion eligibility and the deleting actor, what part of an evidence record survives deletion of its raw object (`15-§6-8`), treatment on cancellation or non-payment, backup and point-in-time-recovery behaviour including restoration of deleted evidence or of superseded link state, export of evidence containing third-party data, and grace beyond `14:FPDR-2` are lifecycle-dependent and must not be locked before U-08 is disposed. (b) Add a distinct register status or annotation for `15-§6-12` (for example "DEPENDENCY-HELD; DECISION-HELD for the retention element via `DUF6`"), without changing its `IN SCOPE` disposition. (c) Consider raising SB16-B6-25 to MEDIUM, given SR06-01. (d) Recommend that Mission Control bring these questions to the Founder and to qualified legal review (every legal element to be confirmed by qualified counsel; none is answered here):
  1. For each SB-P-1.16 record class (provider event payload, settlement file, merchant-uploaded receipt or screenshot, normalized evidence record, link and review decision, reversal history, credit decision record, communication draft), what minimum and maximum retention applies, taking account of GST and Income-tax books-of-account retention, any RBI or payment-aggregator record-keeping expectations that may reach the merchant or Smart Business, and storage limitation under the DPDP Act, 2023?
  2. For customers' personal data in credit records and payment evidence, is Team LIPS acting for the merchant (as a processor) or in its own right, and what notice, consent or contract terms follow for merchants?
  3. Under Contract 15 §6 b7, which payer, payee and account hints may be stored, in what form (full, masked, truncated or referenced), and on what basis?
  4. If a customer asks a merchant to correct or erase their data, which credit and evidence records may be de-identified, and which must be retained in full for a legal-retention reason?
  5. Who may delete payment evidence, and may evidence linked to a Ledger record ever be deleted before that record?
  6. How are payment evidence and credit records treated on merchant cancellation or non-payment (`25-§17-1`, `BP-§15-6`; owner SB-P-1.19)?
  7. Are deleted evidence copies in backups or point-in-time recovery acceptable for a bounded period, and must a restoration re-apply recorded deletions?
  8. Which events place a legal or dispute hold on evidence (provider dispute or chargeback, merchant-declared dispute, legal request), and who may place and release it?
  9. Is explicit merchant submission into the payment-evidence workflow the "confirmation" that ends the `14:FPDR-2` staging grace (SR06-01)? This is an engineering-product question for Mission Control.
  10. May payment-evidence content be sent to an external AI provider for interpretation, including outside India, and under what terms?
  11. Under what conditions may a read-only profile of live merchants' customer credit data be run for product engineering (OQ-05)?
  12. May an evidence export include third-party personal data visible in screenshots or payloads?
- **Uncertainty:** Mission Control may already hold an inventory outside the repository; none was found at the baseline.
- **Trigger screen:** No new trigger. The pre-existing U-08 T3 (Truth Pack D.3, line 121) remains open and fires for any Stage 8 lock of a lifecycle-dependent element listed in (a).

### SR06-09 — Restoration and rollback can resurrect deleted evidence or superseded verification state

- **Severity:** LOW
- **Evidence:** Contract 25 §22 (blob `406ce089`, lines 381–393) requires documenting what happens when one side of a metadata and object pair is restored without the other. `EIS-LEG-03` treats backup and point-in-time recovery of de-identified data as an evidence and legal-rule input. Stage 7 §20.7.2 (lines 247–254) covers migration rollback (pre-data drop, post-data forward-fix) but not data restoration.
- **Affected FCTM IDs:** `15-§6-8`, `15-§13-2`, `15-§20-2`, `15-§6-12`.
- **Affected Stage 7 draft sections:** §20.4.8, §20.4.10, §20.7.2.
- **Related Stage 6 findings:** SB16-B6-25, SB16-B6-26.
- **Engineering implication:** Restoring the database without the object store (or the reverse) leaves evidence records pointing at missing objects, or objects with no record. A point-in-time restore can also bring back a link or verification state that a later reversal superseded, and can re-create content whose deletion was recorded.
- **Required correction or evidence obligation:** §20.4.8 should state that a missing raw object behind a held or retained evidence record is an integrity incident (consistent with `EIS14-RET-01`), and that restoration behaviour is lifecycle-dependent and listed under SR06-08 question 7. No restoration design is required at Stage 7.
- **Uncertainty:** Backup configuration is `UNVERIFIED — ACCESS REQUIRED`.
- **Trigger screen:** None.

### SR06-10 — Public repository disclosure: none found; future verification artifacts need a rule

- **Severity:** LOW
- **Evidence:** Pattern search of `17-stage6-builder-review.md` (`c9a93566`), `18-stage7-blueprint-sections-20-21-draft.md` (`1064ab18`) and `19-stage7-engineering-review-report.md` (`a3b644f0`) found no email address, phone number, token, key, project host, merchant record or customer data. Matches were limited to environment-variable names (for example draft line 27; Stage 6 report line 256) and generic words such as "secret". Stage 7 §20.7.8 (lines 293–300) and OQ-04 envisage Founder runtime verification with real or provider-authenticated evidence; OQ-05 envisages a live-data profile.
- **Affected FCTM IDs:** `BP-§13-9`, `BP-§10.5-B1`, `14-§19-1`, `15-§22-5`.
- **Affected Stage 7 draft sections:** §20.7.5, §20.7.8, §21.2 (OQ-04, OQ-05).
- **Related Stage 6 findings:** SB16-B6-26.
- **Engineering implication:** Runtime verification evidence (screenshots, webhook payloads, settlement files, profile outputs) is the most likely future route by which customer or merchant data, or provider secrets, would reach this public repository.
- **Required correction or evidence obligation:** Add to §20.7.5 or §20.7.8 that verification evidence committed to the repository uses synthetic or redacted fixtures only; real evidence, payloads, settlement files and profile outputs stay outside the repository; and the record cites them by description, time and actor only.
- **Uncertainty:** Pattern search cannot prove absence of every kind of personal data; a manual read of the in-scope sections found none.
- **Trigger screen:** None.

## 5. Dissent from the Stage 7 draft

- **§21.5 "No T3, T7 or T8 trigger fired".** Partial dissent. The statement is accurate for new triggers raised by Stage 7, but it omits the pre-existing open T3 for U-08 (Truth Pack D.3 and D.5). §21.5 should say that this T3 remains open and fires for any Stage 8 lock of a lifecycle-dependent element (SR06-08).
- **§21.5 "held is not T8".** No dissent for the U-08 rows: `15-§6-12` and `15-§6-8` are feasible on a non-destructive basis, and the open decision is a recorded dependency, not infeasibility. The reviewer does dissent from the register status for `15-§6-12`. `DEPENDENCY-HELD` as defined does not include `DUF6`, so the classification is imprecise, though not a disposition change (SR06-08).
- **§20.6 SB16-B6-25 severity LOW and "GATED".** Dissent on severity. SR06-01 shows that one lifecycle interaction (the staging grace) can cause evidence loss without any U-08 decision, so the item is not purely gated on U-08. MEDIUM is suggested; Mission Control decides.
- **§20.4.8 field list.** Dissent: `15-§6-7` is not represented (SR06-02).

## 6. Infeasible, unsafe, omitted, narrowed or reassigned rows

None found as infeasible, unsafe or reassigned. One conditional item: if the Stage 7 author intends the §20.4.8 evidence record to exclude payer, payee and account hints, that would narrow `15-§6-7` (T7). The reviewer reads the omission as an oversight to be corrected (SR06-02), not a narrowing, so no STOP is raised. If Mission Control reads it as an intended narrowing, then: STOP: dependent engineering path "evidence record without `15-§6-7` hints" must not proceed until Mission Control and Founder disposition.

## 7. Summary

| Finding ID | Severity | Short title | Correction required |
|---|---|---|---|
| SR06-01 | HIGH | Staging grace can discard evidence under review | yes |
| SR06-02 | MEDIUM | Payer, payee and account hints omitted; "where permitted" undefined | yes |
| SR06-03 | MEDIUM | Retention, hold and deletion foundations not consumed | yes |
| SR06-04 | MEDIUM | Customer data copied into append-only records | yes |
| SR06-05 | MEDIUM | Raw evidence third-party data and access separation | yes |
| SR06-06 | MEDIUM | OQ-05 profile lacks privacy conditions | yes |
| SR06-07 | LOW | Communication drafts have no record class | yes |
| SR06-08 | MEDIUM | U-08 understated; lifecycle-dependent inventory and governance questions | yes |
| SR06-09 | LOW | Restoration can resurrect deleted or superseded state | yes |
| SR06-10 | LOW | No public-repository disclosure found; rule for future artifacts | yes |

**STOP FOR MISSION CONTROL SPECIALIST FINDINGS REVIEW.**

**Implementation Authorization: WITHHELD — IMPLEMENTATION NOT AUTHORIZED.**
