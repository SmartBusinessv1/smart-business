# SB-P-1.16 — `16:FPDR-10` Blueprint v0.3 Targeted Amendment Proposal (Draft)

**DRAFT — LOCAL — PROPOSAL ONLY — THE APPROVED BLUEPRINT IS NOT CHANGED — NOT A STAGE 5 APPROVAL — SECOND OF TWO SEQUENTIAL REVIEWS (AFTER THE FCTM GATE)**

**Mission:** SB-P-1.16 — Financial Integrity & Credit  
**Gate:** MC-215, Workstreams B and C  
**Prepared by:** Claude Code (Definition Actor and Stage 7 coordinator)  
**Date:** 2026-10-18  
**Implementation Authorization:** WITHHELD — IMPLEMENTATION NOT AUTHORIZED.

## 1. Purpose and authority

This report proposes a targeted v0.3 amendment of the approved Blueprint Sections 1–19. It brings in the Founder-approved `16:FPDR-10` behaviour and measurable acceptance cases, and provides a scoped Gate 10 re-review checklist and the Workstream C authority check.

**Authority:**

- MC-206: the Founder approved `16:FPDR-10`;
- MC-213: canonical registration verified;
- MC-214 and MC-215: rulings 4 to 8;
- Source 18 v1.2.

**This is not a new Stage 5 approval.** Mission Control decides it after the FCTM gate. The Blueprint lock stays WITHHELD.

## 2. Pinned baseline and inputs

**Baseline:** `main@47df4714296c13c5e9d72d3069487e9e8286bae5`; repository PRIVATE.

| Input | Blob |
|---|---|
| Approved Blueprint Sections 1–19 | `8e79636f856bbfbb3c1ed08c717e2fda8b0b44bc` |
| Canonical FCTM | `5ff7742f6d3849ffab8767333a54eda07be268ab` |
| Proposed FCTM, after the citation amendment | `94dd52202ad040f64394f07f95389d02ffcc5dd0` (Report 26) |
| `16:FPDR-10` record | `bd5a5f0c2049b056c84722a513a086ac48d9086f` |
| FIN-01 | `1ccb95f37b77083ba18a00b81dde7b6ac1b2c6ca` |
| Source 18 v1.2 | `0945bda60a93c99909c3b7a247d5427ebe256011` |
| Source 11 | `16897d6c875bb3e45e26cd32a99bc0510c4bdea1` |
| Contract 03 | `d8c26c073b669b561def887e36d16b19ff759205` |
| SB-P-1.14 EIS | `899a0fe1f98c62bbdfa621c97cdc5e8ee3ce65d3` |

## 3. Scope rules applied

- **Only passages affected by `16:FPDR-10` change.** That is category (A) of Report 25. Everything else in Sections 1–19 is byte-identical.
- **Not included.** The administrative corrections, because they are not affected by `16:FPDR-10` and MC-215 limits the revision to affected passages:
  - the stale Metadata status lines (O-S5-1: "DRAFT … NOT APPROVED", "Stage 5 not started");
  - the §19 Governance History events after Stage 4.

  They stay open for a separate Mission Control decision.
- **Engineering kept out.** The Ledger representation, schema, commands, provider mechanics, concurrency and reversal design are named only as **provisional** (new §12.3 row). They are not written as behaviour.
- **Preserved.** Existing permissions (`16:FPDR-7`; R15-11 open), every unresolved dependency and every other Founder decision's quoted text.
- **No FCTM row** is added, moved or re-dispositioned. §8 row lists, §10.2, §10.3 and §11 are untouched.

## 4. Proposed v0.3 diff, by section

Diff size: 83 insertions and 41 deletions against `8e79636f`. 26 of the 41 deletions are the §19 Founder-decision cells. Line numbers refer to `8e79636f`.

| # | Section (line) | Change | Exact new content (summary; full text in the proposed file) |
|---|---|---|---|
| 1 | Metadata, Canonical FCTM (20) | Replace substring | The FCTM blob `5ff7742f` is marked "at Stage 5". The `16:FPDR-10` citation amendment is reviewed first at the FCTM gate, and its resulting blob is recorded before this revision is finalized |
| 2 | Metadata, Founder Product Decision Record (21) | Append | Record `22-…`, blob `bd5a5f0c…`: `16:FPDR-10`, canonical (PR #971; registered PR #972; MC-206, MC-213) |
| 3 | Mission Snapshot, Build Now (35) | Insert clause | "Owner-controlled handling of excess repayment, including an optional separate customer advance kept until explicitly applied or refunded (`16:FPDR-10`)" |
| 4 | §5 (88, 90) | Append to "Realized by" | `16:FPDR-10`; "(an advance is neither revenue nor repayment)" |
| 5 | §6 Owner, Manager, Employee (97–99) | Append | Owner decides what happens to an excess payment, including a separate advance applied or refunded explicitly. Manager: "No customer-advance authority". Employee: "no authority over excess payments or customer advances" |
| 6 | §8.2 Sources and mission design (137, 139) | Append | An excess never commits automatically; the Owner may keep it as a separate advance (a Ledger fact for the same customer, not sales or income, never silently netted), which persists until explicit application or refund. Received amounts are conserved. The representation, application mechanism and refund semantics are engineering matters (§12.3) |
| 7 | §8.7 Sources and mission design (207, 209) | Prepend sentence | Keeping, applying or refunding an advance is an explicit Owner decision; no Manager or Employee authority over advances follows from this Blueprint |
| 8 | §8.8 Sources and mission design (224, 226) | Append | `14-§18-3` stops and asks the Owner. A correction that would leave a credit overpaid raises an exception and never creates an advance, refund or offset automatically (D-1, D-5) |
| 9 | §9 (after 269) | New bullet | "**Excess is the Owner's choice.**" Shows the applicable amount and the excess; a kept advance is a separate fact, never a reduced, negative or netted balance or income; nothing automatic |
| 10 | §10.1 (281; before 359) | Replace sentence; insert block | "The ten decisions govern this Blueprint …" plus the `16:FPDR-10` block (Section 4.1) |
| 11 | §12.3 (after 727) | New row | `16:FPDR-10` engineering representation: **PROVISIONAL — not approved**; Stage 7, EIS and independent validation; SB-P-1.14-owner question open |
| 12 | §13 (after 759) | New risk row | Advance treated as income, silently offset, auto-refunded or created by a correction. Mitigation: Owner-only actions, correction exception, conservation, ADV-01 to ADV-10 |
| 13 | §14 (after 770) | New criterion | No advance is created, applied or refunded without an explicit Owner action; received amounts are conserved |
| 14 | §15.4 (after 828) | New bullet | `16:FPDR-10` acceptance limits; the engineering representation is not accepted at this level; cases ADV-01 to ADV-10; anchor rows |
| 15 | §15.5 (after 839) | New matrix row | "Excess payment handled by Owner choice; advance shown separately" — Owner — Not yet run |
| 16 | New §15.6 (before §16) | New subsection | `16:FPDR-10` acceptance cases ADV-01 to ADV-10 (Section 4.2) |
| 17 | §16 (after 846) | New bullet | Customer-advance expansions are not authorized; each needs its own decision |
| 18 | §18 (after 857) | New row | "0.3 (proposed) … Subject to a targeted Stage 5 review and a scoped Gate 10 re-run" |
| 19 | §19 traceability table | 26 cells | Founder-decision column of the same 26 rows as the FCTM amendment, by appending `16:FPDR-10` |

**Unchanged:** §§1–4, §7, §8.1, §8.3 to §8.6, §8.9, §8.10 (including all §8 row lists), §10.2, §10.3, §11, §12.1, §12.2, §12.4, §12.5, §15.1 to §15.3, §17, the §19 Governance History, and all Metadata fields not listed above.

### 4.1 Inserted §10.1 block (verbatim from the proposed file)

The Founder statements and D-1 to D-6 are quoted exactly as in record `22-…`. The block then gives:

- the approval context: the Founder answered "yes" to MC-205's question approving D-1 to D-6, with the technical model and implementation not approved;
- "Applied in: Sections 5, 6, 8.2, 8.7, 8.8, 9, 12.3, 13, 14, 15.4, 15.5, 15.6, 16";
- "Rows citing it (26)", listing the 26 rows;
- the statement that FIN-01's recommended representation is provisional engineering and not part of the decision.

### 4.2 New §15.6 acceptance cases (summary of the inserted table)

| Case | Elements | What is measured | Anchor rows | Obligation |
|---|---|---|---|---|
| ADV-01 Excess stops | D-1 | Nothing commits before the Owner chooses; the applicable amount and the excess are shown | `14-§18-3`, `15-§11-4`, `BP-§10.5-X` | M-4 |
| ADV-02 Retention | D-2, D-6 | Repayments equal the applicable amount; one advance equals the excess for the same customer; sales and income unchanged; no negative balance | `14-§7-3`, `14-§7-4`, `14-§7-5`, `14-§3-5`, `14-§14-1`, `15-§14-2` | M-1, M-4 |
| ADV-03 Persistence and display | D-3, D-4 | The advance persists; "still owes" excludes it; it is shown separately | `3-§9-12`, `14-§5-7`, `14-§3-6` | M-1 |
| ADV-04 Application | D-3, D-6 | The advance and the target both fall by the same A; no new sale, income or receipt; amounts above the limits are refused | `14-§7-4`, `14-§3-5`, `14-§14-1`, `BP-§6.2-1` | M-2, M-4 |
| ADV-05 Refund | D-3, D-6 | The advance falls by R; no expense or negative income; a failed refund does not reduce it | `14-§7-5`, `15-§8-4`, `14-§14-1` | M-3, M-4 |
| ADV-06 Correction-created excess | D-5 | An exception is raised; no automatic advance, refund or offset; prior truth preserved | `14-§17-1`, `14-§17-3`, `14-§7-6` | M-4 |
| ADV-07 Reversal of the source payment | D-4, D-6 | Both uses flagged for Owner review; nothing deleted; no negative advance; treatment open (AC-3) | `14-§17-1`, `14-§7-6` | M-4 |
| ADV-08 Retry and replay | D-6 | Exactly one effect each: no duplicate repayment, advance, application or refund | `14-§7-5`, `15-§8-4`, `BP-§10.5-E4` | M-4 |
| ADV-09 Non-automation | D-4 | No unattended apply, refund, offset or income; Ask CFO describes only; Manager and Employee denied by default | `14-§3-1`, `14-§3-5`, `14-§14-1`, `15-§11-5` | M-4 |
| ADV-10 Conservation | D-6 | Received = applied + held + refunded; one remaining-advance calculation | `14-§7-3`, `BP-§10.5-E4` | M-1 |

**Coverage of the MC-215 required cases:**

| Required case | Covered by |
|---|---|
| Retention | ADV-02 |
| Application | ADV-04 |
| Refund | ADV-05 |
| Correction-created excess | ADV-06 |
| Reversal | ADV-07 |
| Retry | ADV-08 |
| Non-automation | ADV-09 |

Every case maps to FCTM rows that cite `16:FPDR-10` in the proposed FCTM, and to M-1 to M-4.

## 5. Provisional engineering kept out of Sections 1–19

The following appear only as provisional items in the new §12.3 row and in Sections 20–21:

- FIN-01's customer-advance credit subtype and its `owed_by_business` representation;
- the advance-application relation;
- refund as `repayment`;
- the remaining-advance calculation's implementation;
- FI-A1 to FI-A10 as engineering invariants;
- reversal (AC-3) and concurrency handling;
- Stage 7 C-24 to C-28.

None is approved by v0.3. **C-01 to C-28 are not altered.**

## 6. Scoped Gate 10 re-review checklist (for Mission Control; not self-applied)

| # | Check | Expected evidence |
|---|---|---|
| G-1 | The FCTM gate is complete first: the citation amendment is merged and verified, and the FCTM blob is recorded in Metadata (edit 1) | FCTM PR merge SHA; blob |
| G-2 | Every `IN SCOPE` row is still listed exactly once in §8 (349) | Coverage script: PASS |
| G-3 | §11 lists every non-`IN SCOPE` row exactly once (206), with cells equal to the FCTM | PASS |
| G-4 | §19 has all 555 rows, once each, in FCTM order, with disposition, owner, source, pointer and **Founder decision** equal to the amended FCTM | PASS against the amended FCTM |
| G-5 | §15 carries every `IN SCOPE` SCN, FRV, EXP and GATE row | PASS |
| G-6 | §10.2 and §10.3 equal the `IN SCOPE` RULE+PRIN and NEG rows | PASS |
| G-7 | Every backticked row ID exists in the FCTM | PASS |
| G-8 | Only the 19 edits in Section 4 differ from `8e79636f` | `git diff` review: 83 insertions / 41 deletions |
| G-9 | D-1 to D-6 and the Founder statements in §10.1 match record `22-…` verbatim | String comparison |
| G-10 | ADV-01 to ADV-10 are measurable and map to anchor rows and M-1 to M-4; all seven MC-215 case types are covered | Section 4.2 |
| G-11 | No engineering representation is stated as approved behaviour; §12.3 marks it PROVISIONAL | Text review |
| G-12 | `16:FPDR-7` permissions, R15-11, U-08 / DC-11, U-10, F-7, `DPAY` (41) and `DNTF` (7) are unchanged | Text and count review |
| G-13 | The Institutional Learning Intake is confirmed unchanged, or its delta is recorded (Source 18 Stage 5) | `organizational-learning/` and guide diff since `e4e382c7` |
| G-14 | Independence is recorded: the same Definition Actor authored the amendment, so Mission Control is the independent check | Mission Control record |

## 7. Validation performed (author's scripts; documentary only)

| Check | Result |
|---|---|
| Coverage script (11 checks) on proposed v0.3 against the **proposed FCTM** | **11 PASS, 0 FAIL** |
| Same script against the **canonical FCTM** | 10 PASS; 1 expected FAIL (§19 Founder-decision cells differ, because the FCTM amendment is not yet canonical). This confirms the FCTM-first sequence |
| Markdown Quality Gate on the proposed v0.3 | PASSED (0 issues; 70 headings; 29 tables) |
| Line endings | LF; 0 CR |
| Unique-anchor edits | The generator asserts that every individual edit operation (the 19 grouped changes in Section 4) applied exactly once |

## 8. Authority check (Workstream C)

**8.1 Source 18 §3.2:**

- No row is omitted, deferred, simplified, reclassified or moved.
- The completeness test passes (Report 26 §6.1).
- Blueprint content maps to FCTM rows. The decision-sourced obligations are traced explicitly through §15.6, the FCTM note and the Founder-decision citations. This is the recorded refinement Source 18 Stage 4 requires for content not otherwise mapped, under a decided T3.

**8.2 Source 18 §3.3:**

- Preparation is not authority (item 1); these are drafts.
- The T3 trigger has been decided, so dependent preparation may proceed (item 5).
- Each gate crossing is one PR with Mission Control's decision record; refinement rounds go on the same PR (item 3). This supports the two sequential PRs.
- Approval rests on human merge.

**8.3 Triggers:**

| Trigger | Finding |
|---|---|
| T3 | None new. The amendment adds no behaviour beyond D-1 to D-6; optional expansions are listed only as not authorized |
| T7 | None. Conditional only if M-1 to M-4 were left untraced, which R-A prevents |
| T8 | None. Conditional only if the Contract 03 §4 reading or the SB-P-1.14 `owed_by_business` scope were rejected by competent authority (Section 9) |

No contract conflict and no uncovered approved requirement was found.

**8.4 Preserved:**

- OQ-02 to OQ-05; MQ-01 to MQ-06 (subject to Mission Control disposition); G-W1;
- U-08 / DC-11, U-10, R15-11, F-7;
- all 63 specialist findings;
- C-01 to C-28, unaltered;
- the Blueprint lock: **WITHHELD**.

## 9. Governance rulings to record (prepared text; not applied)

**9.1 Source 11, approved additive delta (MC-215 ruling 6).** Proposed decision-log text for a later authorized edit:

```text
| D-21 | MC-215: `16:FPDR-10` recorded as an approved additive delta to Source 11 (Smart Credit Awareness: "Credit system warns." / "It must not block owner decisions." / "AI informs." / "Owner decides."). No Source 11 amendment in this task; the advance behaviour is to be added at the next controlled Source 11 revision | Conversation-source | `claude-code/25-…` §8.1 |
```

**9.2 Contract 03 (MC-215 ruling 7).** Mission Control's ruling that §4's definition of credit as "an amount owed to or by a relevant party" supports the customer-advance concept, with its exact Ledger representation unapproved, is recorded as a Mission Control interpretation. The SB-P-1.16 FCTM row `3-§4` is `DELEGATED` to SB-P-1.14 and is not cited.

**9.3 SB-P-1.14-owner compatibility questions** (to be sent by Mission Control; no upstream amendment proposed):

1. Is `credit` direction `owed_by_business` (`EIS14-LDG-02`) generic, covering any relevant party including a customer, or was it intended for supplier relationships only? Its wording sets no party restriction.
2. Does the one-target repayment rule (`EIS14-LDG-03`) preclude a separate SB-P-1.16 governed relation that, in one command, consumes a customer's `owed_by_business` advance credit and settles that customer's `owed_to_business` credit or credit-method sale by the same amount, without recording a new receipt?
3. Would recording an advance refund as a `repayment` settling an `owed_by_business` credit conflict with `EIS14-TOT-01` (credit and repayment never counted as sales or income) or with any SB-P-1.14 export or measure definition?
4. Would an SB-P-1.16 semantic subtype marking a `credit` row as a customer advance require an SB-P-1.14 command or type-sync change (`EIS14-CMD-01`, `EIS14-MIG-06`), or can SB-P-1.16 own it entirely?

## 10. Local artifacts

| Artifact | Location | Blob | SHA-256 |
|---|---|---|---|
| Proposed Blueprint v0.3 (full file) | session scratchpad `bp16\v03\SB-P-1.16.v0.3.PROPOSED.md` | `5e818765b38d5e22e1502950fd016cc81a1579df` | `d85936b4f4d4279de7e22489cd35ad8e65c5be13cc07e2cc3a03cddd67929d39` (192,347 bytes; 1,480 lines) |
| Unified diff against `8e79636f` | session scratchpad `bp16\v03\blueprint-v0.3.patch` | — | 31,368 bytes |
| Deterministic generator | session scratchpad `bp16\bp_v03.py` | — | Asserts that each edit applies exactly once |

The proposed file is outside the repository. Its Metadata FCTM blob is left for completion after the FCTM gate (edit 1).

## 11. Unresolved questions

| ID | Question | Owner |
|---|---|---|
| B-1 | Approve the 19-edit scope, excluding the administrative corrections (O-S5-1 status lines; Governance History)? | Mission Control |
| B-2 | Accept ADV-01 to ADV-10 as the acceptance cases for `16:FPDR-10`, including ADV-07, whose engineering treatment stays open (AC-3)? | Mission Control |
| B-3 | Send the four SB-P-1.14-owner compatibility questions (Section 9.3)? | Mission Control |
| B-4 | Record D-21 (the Source 11 additive delta) in the decision log at the next authorized registration edit? | Mission Control |

## 12. Independent validation limitations

The same Definition Actor wrote the approved Sections 1–19, the `16:FPDR-10` records and this amendment. Validation is by the author's scripts. Mission Control's targeted Stage 5 review is the independent check. FIN-01 is advisory, and its provenance is incomplete.

## 13. STOP conditions

Stop and report if any of these occurs:

- the FCTM gate is not complete before the Blueprint PR;
- the Blueprint blob is not `8e79636f` at PR time;
- any edit beyond Section 4;
- any engineering representation stated as approved;
- any FCTM row moved;
- any coverage check fails against the amended FCTM.

**STOP FOR MISSION CONTROL REVIEW.**

**Stage 7 Final Approval: WITHHELD. Blueprint Lock: WITHHELD. Implementation Authorization: WITHHELD — IMPLEMENTATION NOT AUTHORIZED.**
