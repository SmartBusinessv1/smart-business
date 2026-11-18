# SB-P-1.18 — Founder Product Decision Record `18:FPDR-9`: FCTM Build-Commitment Correction for 22 Rejected or Superseded Behaviour Rows

**Mission:** SB-P-1.18 — Controlled Business Add-ons
**Stage:** Source 18 v1.3, during Stage 10 (EIS acceptance HELD); after the Stage 8 Blueprint Lock (`18:S8-FAR`) and the Track A post-lock correction (PR #1123)
**Status:** DRAFT — NOT EFFECTIVE. Effective on Founder human merge of the pull request that carries this record (Source 18 §3.3 items 4 and 6). Mission Control post-merge verification then confirms the canonical bytes; it is not an additional condition of effect
**Decides:** the frozen **Build commitment** field of exactly 22 FCTM rows, from `ADD-ON + BUILD NOW` (with the C1 pilot suffix where present) to `REJECT`. The same 22 rows cite this decision by Decision ID in their Founder decision cell (`—` → `18:FPDR-9`; Source 18 §3.2 item 5). That cell records provenance and is not a second classification. No other field, row, record or source is decided
**Prepared by:** Claude Code, SB-P-1.18 Definition Actor (non-independent preparer), under the Mission Control one-use preparation grant below
**Preparation authority:** MC41 decision-evidence record and scoped preparation authority ([PR #1111 comment 6911608223](https://github.com/SmartBusinessv1/smart-business/pull/1111#issuecomment-6911608223) §C), and the MC41 one-use citation correction authority ([PR #1131 comment 6973943208](https://github.com/SmartBusinessv1/smart-business/pull/1131#issuecomment-6973943208)). The Founder did not author Git edits, and this draft is not Founder approval of its bytes
**Decision identifier:** `18:FPDR-9`, proposed. A full-tree preflight at the baseline and a scan of every open pull request found no `18:FPDR-9` occurrence. The last SB-P-1.18 Founder Product Decision Record is `18:FPDR-8` (decision log F-10); `18:FPDR-4-A` is a clarification suffix, and `18:S8-FAR` is a Stage 8 approval record, not an FPDR
**Baseline:** `main@9ce09247c752b26c6a39eeeb4fda1613a43bd55f`
**Implementation Authorization:** WITHHELD — IMPLEMENTATION NOT AUTHORIZED.

**Not a Product Truth change.** The 22 behaviours were rejected or superseded before this record and stay rejected. Only their frozen classification field changes. This record amends no Source, contract, Blueprint, EIS or earlier Founder record.

## 0. How to read this record

| Kind | Where | Authority |
|---|---|---|
| **Founder statement (verbatim)** | Section 1 | The Founder |
| **Mission Control acceptance (verbatim extract)** | Section 2 | Mission Control, subordinate to Section 1 |
| **Definition Actor accounting** | Sections 3 to 8 | None. Sections 1 and 2 prevail |

The Founder statement was given directly to Mission Control in the MC41 governance conversation and reproduced verbatim by Mission Control in [PR #1111 comment 6911608223](https://github.com/SmartBusinessv1/smart-business/pull/1111#issuecomment-6911608223) §A. It is not a Founder-authored GitHub comment. It is reproduced below exactly as recorded there, with only the blockquote markers removed.

## 1. Founder statement (verbatim)

```text
**Founder Decision — SB-P-1.18 FCTM Classification Correction**

I approve a controlled documentary classification correction for the 22 specifically identified rejected or superseded behavior rows in the locked SB-P-1.18 FCTM.

For these 22 rows only, change the **Build commitment** field from `ADD-ON + BUILD NOW` to `REJECT`.

Preserve their existing rejected status, commercial classification, out-of-build-scope disposition, source citations, verification obligations and mission assignment.

This correction does not change or remove any approved Build Now feature, product commitment or employee permission.

Mission Control must record the Founder decision, authorize the controlled correction separately, obtain independent verification, and preserve the Stage 8 audit history.

Implementation Authorization remains WITHHELD.
```

## 2. Mission Control acceptance (verbatim extract; subordinate to Section 1)

Source: [PR #1111 comment 6911608223](https://github.com/SmartBusinessv1/smart-business/pull/1111#issuecomment-6911608223), §A and §B.

> **MC41 accepts the exact Founder instruction as the decision to prepare a bounded documentary correction; no reinterpretation, new Product Truth, or broader mission authorization.**

> **Only for these IDs, only the frozen `Build commitment` cell:** old `ADD-ON + BUILD NOW` (some C1 values include `— before first 10 pilot merchants`) → **`REJECT`**. Keep each other field, ID, source pointer, text, `Kind=REJ`, `Commercial=REJECT`, `Disposition=OUT OF BUILD SCOPE`, assigned mission, citations, evidence/negative obligation, Founder/history semantics exactly as authorized. Keep all other **747** FCTM data rows byte-identical.

## 3. Origin of the decision

| Step | Record |
|---|---|
| Independent Source 18 §3.2 item 6(d) source-text finding: 22 `OUT OF BUILD SCOPE` rows carry a build commitment that is not `BUILD LATER`, `SEPARATE PRODUCT` or `REJECT` | [PR #1111 comment 6911240582](https://github.com/SmartBusinessv1/smart-business/pull/1111#issuecomment-6911240582) |
| MC41 acceptance of the finding and Founder decision request (APPROVE / DECLINE / REQUIRE SPECIFIC ALTERNATIVE) | [PR #1111 comment 6911514656](https://github.com/SmartBusinessv1/smart-business/pull/1111#issuecomment-6911514656) |
| Founder decision (Section 1) and MC41 scoped preparation authority | [PR #1111 comment 6911608223](https://github.com/SmartBusinessv1/smart-business/pull/1111#issuecomment-6911608223) |

**Governing rules (Source 18 v1.3, `merge/active/18_SB-P_Mission_Lifecycle_and_Delivery_Framework.md`, blob `f3b01b608c4b64df186d4278ba6468ed0419630f`):**
- §3.2 item 1: each row stores its build commitment and its commercial classification as separate fields.
- §3.2 items 3 and 4: `OUT OF BUILD SCOPE` means the approved commitment is `BUILD LATER`, `SEPARATE PRODUCT` or `REJECT`, and a `REJECT` row is a "must not appear" check.
- §3.2 item 5: build commitment changes only by a Founder decision recorded in the Founder Product Decision Record and cited by Decision ID in the row.
- §3.2 item 6(d): each row's classification and assignment equal the source text.
- §3.2 item 10: escalation of a reclassification to the Founder.
- §3.3 items 4 and 6: Founder decisions are effective when their record is merged; a classification change is never branch-effective.
- Stage 8: the lock freezes every row's disposition, build commitment, commercial classification and mission assignment.

## 4. The 22 rows: field changed, old and new values

FCTM: `communication/missions/SB-P-1.18/claude-code/03-stage2-populated-fctm.md`. Before: blob `ed2ff0f99e6982a15b650b5aee09e01e9355e0fd` (canonical at the baseline; Founder-approved Stage 8 matrix `2bbe6e227d714996bcead10385952c78283e20e8` plus the Track A seed correction, PR #1123). After (in the pull request carrying this record): blob `36774b720d744dcc4bcae50784ccaf58449c275e`. The pull request's first commit (`db3eb306`, FCTM blob `842a89566929a96b507167a8714d7946bd8a72bd`) changed the Build commitment cells only; its second commit adds the Decision ID citation below.

| # | Row | FCTM line | Build commitment before | After |
|---:|---|---:|---|---|
| 1 | `1-§4-1` | 270 | `ADD-ON + BUILD NOW — before first 10 pilot merchants` | `REJECT` |
| 2 | `1-§4-2` | 271 | `ADD-ON + BUILD NOW — before first 10 pilot merchants` | `REJECT` |
| 3 | `1-§4-3` | 272 | `ADD-ON + BUILD NOW — before first 10 pilot merchants` | `REJECT` |
| 4 | `1-§4-4` | 273 | `ADD-ON + BUILD NOW — before first 10 pilot merchants` | `REJECT` |
| 5 | `1-§4-5` | 274 | `ADD-ON + BUILD NOW — before first 10 pilot merchants` | `REJECT` |
| 6 | `1-§4-6` | 275 | `ADD-ON + BUILD NOW — before first 10 pilot merchants` | `REJECT` |
| 7 | `1-§28-2` | 521 | `ADD-ON + BUILD NOW — before first 10 pilot merchants` | `REJECT` |
| 8 | `1-§28-3` | 522 | `ADD-ON + BUILD NOW — before first 10 pilot merchants` | `REJECT` |
| 9 | `1-§28-4` | 523 | `ADD-ON + BUILD NOW — before first 10 pilot merchants` | `REJECT` |
| 10 | `6-§15-1` | 629 | `ADD-ON + BUILD NOW` | `REJECT` |
| 11 | `6-§15-2` | 630 | `ADD-ON + BUILD NOW` | `REJECT` |
| 12 | `6-§15-3` | 631 | `ADD-ON + BUILD NOW` | `REJECT` |
| 13 | `6-§15-4` | 632 | `ADD-ON + BUILD NOW` | `REJECT` |
| 14 | `6-§15-5` | 633 | `ADD-ON + BUILD NOW` | `REJECT` |
| 15 | `6-§15-6` | 634 | `ADD-ON + BUILD NOW` | `REJECT` |
| 16 | `16-§19-1` | 782 | `ADD-ON + BUILD NOW` | `REJECT` |
| 17 | `16-§19-2` | 783 | `ADD-ON + BUILD NOW` | `REJECT` |
| 18 | `16-§19-3` | 784 | `ADD-ON + BUILD NOW` | `REJECT` |
| 19 | `16-§19-4` | 785 | `ADD-ON + BUILD NOW` | `REJECT` |
| 20 | `16-§19-5` | 786 | `ADD-ON + BUILD NOW` | `REJECT` |
| 21 | `16-§21-5` | 802 | `ADD-ON + BUILD NOW` | `REJECT` |
| 22 | `16-§21-6` | 803 | `ADD-ON + BUILD NOW` | `REJECT` |

**Founder decision cell (provenance citation, not a classification):** in each of the same 22 rows, `—` → `18:FPDR-9`, so the row cites this decision by Decision ID (Source 18 §3.2 item 5), under [PR #1131 comment 6973943208](https://github.com/SmartBusinessv1/smart-business/pull/1131#issuecomment-6973943208).

**Unchanged in every one of the 22 rows:** row ID, source and blob, exact source pointer, kind `REJ`, commercial `REJECT`, owning mission `SB-P-1.18`, disposition `OUT OF BUILD SCOPE`, dependency or hold, evidence and citation (the `L-NEG` or `L-HIST` must-not-appear obligation), workstream and verification target. Against the baseline, exactly 44 cells differ: 22 Build commitment cells and 22 Founder decision cells.

**Unchanged elsewhere:** the other 747 data rows; every legend, header, note and totals line of the FCTM. The disposition census stays `IN SCOPE` 592, `DELEGATED` 77, `OUT OF BUILD SCOPE` 48, `NOT APPLICABLE` 27, `ASSIGNED TO LATER MISSION` 17, `UNRESOLVED FOUNDER DECISION` 8 (769 rows). Build commitment `REJECT` goes from 26 to 48 rows, so all 48 `OUT OF BUILD SCOPE` rows carry `REJECT`; `ADD-ON + BUILD NOW — before first 10 pilot merchants` goes from 281 to 272 and `ADD-ON + BUILD NOW` from 257 to 244.

## 5. What does not change

- No approved `BUILD NOW` or `ADD-ON + BUILD NOW` feature, product commitment or employee permission is changed or removed (Founder, Section 1).
- No row moves between dispositions, missions or commercial classes; no `REJECT` behaviour is revived.
- The 592 `IN SCOPE` rows and their downstream mappings are untouched.
- The Stage 8 approval `18:S8-FAR` and its original identities stay as history (Section 7).
- Holds stay: `DLEG`, `SA02-18-F03` (UNDISPOSITIONED / NOT ADOPTED), and all security, stock, COD, entitlement, participant and runtime holds.

## 6. Source 18 classification (Definition Actor analysis)

| Trigger | Position |
|---|---|
| T7 — omission, deferral or simplification | The decision changes a frozen classification field, so it needs this Founder decision (§3.2 items 5 and 10). No approved requirement is omitted, deferred or simplified: the 22 behaviours were already rejected or superseded and checked as "must not appear" |
| T8 — later conflict | The §3.2 item 6(d) classification mismatch found at Stage 10 is resolved by this decision, subject to independent verification |
| T1, T2, T3, T6 | None identified; no new product behaviour |

## 7. Stage 8 audit history

The original Stage 8 approval (`mission-control/09-stage8-founder-approval-and-blueprint-lock-record.md`, blob `4f64e647c796aba0c753fba295ff2eea54567ca0`) and its Founder-approved FCTM identity `2bbe6e227d714996bcead10385952c78283e20e8` are not rewritten. The post-lock correction is recorded in a separate append-only addendum, `mission-control/12-stage8-lock-history-addendum-18-fpdr-9-classification-correction.md`, which states that the original lock did not contain the corrected cells.

## 8. Known residuals for Mission Control (not decided or edited here)

| Item | Position |
|---|---|
| Row citation of `18:FPDR-9` (Source 18 §3.2 item 5, "cited by Decision ID in the row") | Made in the second commit under [PR #1131 comment 6973943208](https://github.com/SmartBusinessv1/smart-business/pull/1131#issuecomment-6973943208): each of the 22 rows cites `18:FPDR-9` in its Founder decision cell. The first commit had left the cell `—` because the original grant authorized only the Build commitment cell |
| FCTM §0.8 legend (Founder decision IDs) and header status note | Unchanged; not authorized in this correction. The header note's sentence "No other row changed" and the legend predate this correction. After canonical merge they are prior-status, historical statements, superseded for the 22 rows' corrected classification only; Mission Control decides any reconciliation |
| Locked Blueprint §11.3 (`docs/phase-1-mission-blueprint/completed/SB-P-1.18.md`, blob `f9bfd0a2f6995f9956c76425fef3bff673cc7266`, lines 764 to 785) | Still shows the old build commitment for the 22 rows. The grant forbids editing locked Blueprint text. After canonical merge it is a prior-status, historical reference, superseded for the 22 rows' corrected classification only; Mission Control decides any reconciliation |

## 9. Publication boundary

This record is a draft. After independent review and Mission Control disposition, it becomes the canonical Founder decision on Founder human merge of the pull request that carries it (Source 18 §3.3). Mission Control post-merge verification then confirms the canonical bytes; it is not an additional condition of effect. It authorizes no implementation, SQL, migration, provider action or runtime test, and no change to PR #1111.

**STOP FOR INDEPENDENT REVIEW, MISSION CONTROL DISPOSITION AND FOUNDER MERGE.** Implementation: WITHHELD.
