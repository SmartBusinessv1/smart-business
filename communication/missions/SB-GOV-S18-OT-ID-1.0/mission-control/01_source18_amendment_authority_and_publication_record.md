# SB-GOV-S18-OT-ID-1.0 — Source 18 v1.3 Amendment: Authority and Publication Record

**Mission:** `SB-GOV-S18-OT-ID-1.0`, the governance-source amendment working mission assigned by Mission Control in MC-580 (PR #1088 comment `6452465686`). It is separate from SB-P-1.18 product work.
**Record type:** P1 authority and publication record. It accompanies the Source 18 v1.3 publication pull request.
**Status:** `RECORD EFFECTIVE ON HUMAN MERGE. THE SOURCE 18 v1.3 AMENDMENT IS PUBLISHED ONLY BY THAT HUMAN MERGE AND IS NOT ACTIVE; SOURCE 18 v1.2 STAYS OPERATIVE UNTIL THE v1.3 ACTIVATION EVENT (SECTION 4)`
**Prepared by:** Claude Code, governance documentation preparer, under MC-580-A and MC-581-A (contribution disclosed, Section 7). Not an approver or an independent reviewer of this record
**Baseline:** `main@8da569910ee6ec3492866b11559ceb1a1aaa0117`; Source 18 v1.2 blob `0945bda60a93c99909c3b7a247d5427ebe256011`
**Implementation Authorization:** WITHHELD — IMPLEMENTATION NOT AUTHORIZED.

## 1. Founder substantive decision MC-577-F (exact normative wording)

Mission Control's record of the decision, verbatim (MC-578, PR #1088 comment `6452053285`):

> **FOUNDER DECISION RECEIVED — OPTION A APPROVED.** The Founder expressly approved the **exact narrow normative Source 18 §3.2(1),(2),(6),(7) amendment wording** in [MC-576-A corrected proposal, comment 6451723949](https://github.com/SmartBusinessv1/smart-business/pull/1088#issuecomment-6451723949), as reviewed under [MC-577 comment 6452016473](https://github.com/SmartBusinessv1/smart-business/pull/1088#issuecomment-6452016473). This is substantive wording approval plus authorization to proceed through **separately governed source publication and activation**, **not** a grant to edit Git, not amendment effectiveness, not authorization to use new FCTM identifiers, not FCTM reconciliation, and not implementation. Preserve the approved exact normative text: any change requires a new explicit decision.

**Founder's own words, verbatim.** The Founder gave this statement in the Mission Control conversation, and Mission Control recorded it in MC-581 (PR #1088 comment `6452945032`, `2026-10-27T20:36:11Z`). It is the Founder's statement as recorded by Mission Control; it is not a GitHub comment authored by the Founder:

> MC-577-F FOUNDER DECISION: I approve Option A — the exact narrow normative Source 18 methodology amendment wording in GitHub PR #1088 comment 6451723949. I authorize the separately governed source publication and activation process, not immediate effectiveness, Git writes, FCTM reconciliation or implementation. Preserve all existing holds.

**Date.** 2026-10-27 (UTC). The decision falls between the GitHub `created_at` of the instrument that presented it (MC-577, `2026-10-27T19:50:36Z`) and of Mission Control's record of it (MC-578, `2026-10-27T19:52:27Z`).

**Decision instrument.** MC-577 (PR #1088 comment `6452016473`) offered option A, approval of the normative text as presented, and option B, return for correction. Option A is recorded as chosen.

## 2. Identity of the approved text

| Item | Value |
|---|---|
| Approved text | PR #1088 comment `6451723949` (MC-576-A) |
| Created / last edited | `2026-10-27T19:37:00Z` / `2026-10-27T19:37:00Z` (never edited) |
| Comment body SHA-256 (UTF-8, as returned by the GitHub API) | `200abf8f03109b3d70b1e8c96ac71f4cd94ec9f15cabcdb2eed1a827021f1cf4` |
| Normative clauses | The seven blockquoted lines of that comment, each taken without its `> ` prefix |

| Clause | Bytes | SHA-256 |
|---|---|---|
| Q1_item1_exception | 1698 | `6cb392bc1475940640fc6fbce3432a7551b92614c3c58995f82b944e9ac9f123` |
| Q2_item2_sentence | 201 | `e52e6558b2e1e3ee72ceb3071f26db8765434f74c06de850fbc20c37fd7dea6e` |
| Q3_item6_paragraph | 1263 | `22030aa7c9cebababbea3b0367b5fd2918590e1770399112713d4f2eaa605286` |
| Q4a_item7_old_first | 52 | `dbecd547cfd298762297155d574075ff9b10dcbabc9ef60916be1c35afeab2ba` |
| Q4b_item7_new_first | 322 | `2d2f667b0a890048fbc48536a154ca106a68266a5300b4780bd4e84723befa3b` |
| Q4c_item7_retained_second | 58 | `b67c173f655e972836969e470a67f9d4a2427d329fef1a2b1670b8f8c728dfc8` |
| Q4d_item7_insert | 400 | `40c6490bf93d476f43dde7315543fdfc97a9a6dbac646e09d1b59345b83cc041` |

`Q4a` is the v1.2 sentence that `Q4b` replaces. `Q4c` is the retained v1.2 sentence. The other five are inserted. Section 3.2 of the published Source 18 contains each inserted clause exactly once, byte for byte; reversing the four changes reproduces the v1.2 Section 3.2 byte for byte.

## 3. Founder effective-event decision MC-579-F

Mission Control's record of the decision, verbatim (MC-580, PR #1088 comment `6452465686`):

> **FOUNDER DECISION ACCEPTED AND RECORDED.** The Founder expressly approves the **Source 18-only** activation architecture in [MC-579 comment 6452387720](https://github.com/SmartBusinessv1/smart-business/pull/1088#issuecomment-6452387720):
> - **P1:** distinct human-merged Source 18 normative publication, **PENDING ACTIVATION**;
> - **A1:** distinct human-merged activation-record preparation, **NOT activation**;
> - **A2:** **single** amendment-effective event = approved human merge of separately reviewed activation/finalization PR at **actual GitHub `merged_at` UTC**;
> - **A3:** post-event factual SHA/time/source-register reconciliation, **NOT a second activation**.
>
> Founder approval of normative wording [MC-576-A comment 6451723949](https://github.com/SmartBusinessv1/smart-business/pull/1088#issuecomment-6451723949) is unchanged. Neither Founder decision authorizes **Git writes** or makes new `S11-L443-*` row IDs valid.

**Founder's own words, verbatim.** Given in the Mission Control conversation and recorded by Mission Control in MC-581 (PR #1088 comment `6452945032`), as in Section 1:

> MC-579-F FOUNDER DECISION: I approve the Source 18-only activation architecture specified in MC-579: P1 separate publication, A1 separate activation-record preparation, A2 the sole effectiveness event on approved human merge of the finalization PR at actual GitHub merged_at UTC, and A3 factual reconciliation. This grants no Git-write authority, immediate activation, FCTM change or implementation. Preserve all holds.

**Date.** 2026-10-27 (UTC). The decision falls between the GitHub `created_at` of MC-579 (`2026-10-27T20:08:48Z`), which presented it, and of MC-580 (`2026-10-27T20:12:42Z`), which recorded it.

## 4. Publication is not activation

| Event | What it is | What it is not |
|---|---|---|
| Founder decision MC-577-F | Substantive approval of the exact wording | Not publication, Git-write authority or activation |
| P1 human merge (this record and Source 18 v1.3) | Canonical publication of the approved text, marked pending | Not activation. Source 18 v1.2 stays operative |
| A1 human merge | Canonical activation-record preparation | Not activation |
| A2 human merge | **The single activation event**, at the actual GitHub `merged_at` UTC instant | — |
| A3 | Append-only factual reconciliation of the A2 merge commit, instant, bytes and hashes | Not a second activation event |

Until the A2 event, no Product Mission may rely on the v1.3 clauses, and the identifiers `S11-L443-1` to `S11-L443-5` have no authority. A1, A2 and A3 each need their own Protocol §16 grant, independent verification, Mission Control review and human merge.

## 5. P1 publication facts (recorded afterward; not pre-written)

| Field | Value |
|---|---|
| P1 pull request | `PENDING` |
| Final reviewed head | `PENDING` |
| Merge commit and `merged_at` (UTC) | `PENDING` |
| Source 18 at the P1 head | 108750 bytes; SHA-256 `615cd4a5f0375d34f2085212033162ee65dda8f75081520d8a30f3cdd39a2474`; Git blob `aa432ac6f8c6aac8885f730253f9d74a9e9535d4` (prospective; re-verified against `main` after merge) |
| Independent verification | `PENDING` |
| Mission Control disposition | `PENDING` |

## 6. Boundaries

- **Changed by P1:** Source 18 Section 3.2 items 1, 2, 6 and 7 (the approved clauses only), Source 18 header and Source Change Log metadata (append-only, pending), Source Set row 18 and one register refresh note, and this record.
- **Not changed:** every other Source 18 clause; Source 11; Contracts 06 and 17; canonical `18:FPDR-5`; the SB-P-1.18 FCTM (764 rows); every other canonical source.
- **Not authorized:** A1, A2 or A3; FCTM reconciliation; use of the `S11-L443-*` identifiers; SB-P-1.18 Stage 3 closure; implementation.
- **Holds unchanged:** F-1, F-4, DC-02, DC-13, DC-14, C1 §17, MC-544, AEG-1, U-09, DLEG and every other open SB-P-1.18 hold.

## 7. Contribution disclosure

Claude Code prepared this record and the P1 file changes from the approved comment. The MC-576-A normative text was drafted by Founder Accountability and independently reviewed in MC-575-A. Claude Code does not approve, review or merge its own preparation. P1 needs a separate independent verifier, Mission Control disposition and a human merge.
