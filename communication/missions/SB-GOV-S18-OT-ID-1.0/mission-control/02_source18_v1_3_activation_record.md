# SMART BUSINESS MISSION CONTROL

# SB-GOV-S18-OT-ID-1.0 — Source 18 v1.3 Activation Record

**Mission ID:** `SB-GOV-S18-OT-ID-1.0`

**Record:** 02 — A1 activation-preparation record

**Status:** `PREPARED FOR INDEPENDENT VERIFICATION — NOT AN ACTIVATION DECISION`

**Activation Confirmation (Section 7):** `NOT YET RECORDED`

**Prepared by:** Claude Code — Governance Documentation Implementation. The author of this record may not verify, approve, merge or activate it.

**Prepared under:** Mission Control MC-589 (PR #1089 comment `6464632087`), preparation only

**Repository:** `SmartBusinessv1/smart-business`

**Starting `main`:** `dd5baf2f60fb75886c5c37edd1b8a1557c7e6dce`, the P1 publication merge

---

## 1. Purpose and effect of this record

This record prepares the activation of Source 18 Version 1.3, the narrow Section 3.2 method exception for the single Source 11 L443 overtime-recording obligation under `18:FPDR-5`.

It does three things:

1. It records the approval, verification and publication evidence for Version 1.3.
2. It states that Version 1.3 takes effect only on one future event, the activation event of Section 5.
3. It lists the exact fields left for the finalization pull request (A2) and for the factual reconciliation that follows its merge (A3).

It activates nothing. Section 7 is the only place where an activation decision can be recorded, and it is empty. This record, its pull request and that pull request's human merge (A1) are preparation. Version 1.2 stays operative throughout A1.

## 2. Approval, verification and publication evidence

All times are GitHub UTC. Every cited comment is on PR #1088 or PR #1089, was posted through the GitHub account `SmartBusinessv1`, and has `created_at` equal to `updated_at` (never edited).

| Step | Evidence | Recorded value |
|---|---|---|
| Independent review of the normative text | PR #1088 comment `6451534553` (MC-575-A) | 2026-10-27T19:28:16Z |
| Exact approved normative text | PR #1088 comment `6451723949` (MC-576-A); body SHA-256 `200abf8f03109b3d70b1e8c96ac71f4cd94ec9f15cabcdb2eed1a827021f1cf4` | 2026-10-27T19:37:00Z |
| Mission Control exact-text review | PR #1088 comment `6452016473` (MC-577) | 2026-10-27T19:50:36Z |
| Founder decision MC-577-F (wording) | Recorded by Mission Control in PR #1088 comment `6452053285` (MC-578); the Founder's verbatim words in comment `6452945032` (MC-581) | Recorded 2026-10-27T19:52:27Z |
| Founder decision MC-579-F (P1 → A1 → A2 → A3) | Recorded by Mission Control in PR #1088 comment `6452465686` (MC-580); the Founder's verbatim words in comment `6452945032` (MC-581) | Recorded 2026-10-27T20:12:42Z |
| Protocol §23 branch-protection evidence | PR #1088 comment `6463566683` (MC-585): saved classic `main` rule verified from Founder settings evidence; no enforcement test claimed | 2026-10-28T07:46:20Z |
| Independent verification of the P1 candidate | PR #1088 comment `6463606340` (MC-585-A) | 2026-10-28T07:48:45Z |
| P1 Git grant | PR #1088 comment `6463756174` (MC-586). It expired when draft PR #1089 was submitted | 2026-10-28T07:56:56Z |
| P1 pull request | PR #1089, branch `mission/SB-GOV-S18-OT-ID-1.0-source18-publication`, one commit | Final reviewed head `14df5aa4cb78a7fead3ae1f7ced534a7db8e6258` |
| Independent verification of the P1 head | PR #1089 comment `6464487520` (MC-587-A): PASS at head `14df5aa4` | 2026-10-28T08:39:17Z |
| Mission Control P1 disposition | PR #1089 comment `6464559445` (MC-588) | 2026-10-28T08:43:26Z |
| P1 human merge (publication, not activation) | GitHub merge record of PR #1089, merged through the account `SmartBusinessv1` | Merge commit `dd5baf2f60fb75886c5c37edd1b8a1557c7e6dce`, `merged_at` 2026-10-28T08:46:32Z |
| Mission Control post-merge verification | PR #1089 comment `6464632087` (MC-589) | 2026-10-28T08:47:30Z |

Notes on the evidence:

- The account `SmartBusinessv1` does not itself distinguish authors. The authorship of each record rests on what the comment states. MC-587-A discloses this limitation for itself.
- The Founder's own words for MC-577-F and MC-579-F were given in the Mission Control conversation. They are reproduced verbatim in comment `6452945032` and in record 01. They are not GitHub comments authored by the Founder.

## 3. Instrument and versions

| Instrument | Path | Version proposed for activation | Operative until the activation event |
|---|---|---|---|
| Source 18 — SB-P Mission Lifecycle and Delivery Framework | `merge/active/18_SB-P_Mission_Lifecycle_and_Delivery_Framework.md` | 1.3: Section 3.2 items 1, 2, 6 and 7 only | 1.2, as it stood at commit `8da569910ee6ec3492866b11559ceb1a1aaa0117` (blob `0945bda60a93c99909c3b7a247d5427ebe256011`) |

Source 18 is the only instrument activated (MC-579-F). No template, protocol, `AGENTS.md`, `communication/README.md` or other source carries Version 1.3 status, so none needs conversion at activation. The Canonical Source Set row 18 is a register entry, not an instrument.

## 4. Publication identity on `main`

Verified at `main@dd5baf2f60fb75886c5c37edd1b8a1557c7e6dce`. These equal the independently verified PR #1089 head blobs.

| Path | Git blob | Bytes | SHA-256 |
|---|---|---|---|
| Source 18 | `aa432ac6f8c6aac8885f730253f9d74a9e9535d4` | 108750 | `615cd4a5f0375d34f2085212033162ee65dda8f75081520d8a30f3cdd39a2474` |
| Canonical Source Set | `425d435ab2f663f624d7aaecdcd9ba19af75101c` | 21368 | `49f7f80fd7894dc398929304d515b04f280ff7168e9c55c00df4c94e5abccfb4` |
| Record 01 (authority and publication) | `b30cd34a0951200b8eb96db8447017771fe761ce` | 8942 | `955b4d22f06dc6e0cfe44fc5a943c70c7b4d45f061aa0a9984933a74b8346e1a` |
| Mission README | `dec2214ebe1f5e45c9dcd7151ed378ea5f9d0919` | 1304 | `5570e719bd9fc53bc97ce3d000c85e520dbd67a92a82034f4b572cb7b93af7da` |

Source Set row 18 records 108750 bytes and SHA-256 `615cd4a5…`, equal to Source 18 on `main`. The P1 publication facts above are recorded here. The `PENDING` P1 fields in Source 18, record 01 and the README are left unchanged by this record (Section 6).

## 5. Activation sequence and effective-authority boundary

| Step | Description | State |
|---|---|---|
| P1 | Publication of the approved text, marked pending (PR #1089) | Complete: merged at `dd5baf2f` |
| A1 | This record: draft pull request, independent verification by a non-author, Mission Control review, human merge. **Not activation** | In preparation |
| A1+ | Mission Control verifies the merged `main` after A1 | Not started |
| A2 | A separate, separately authorized finalization pull request carries Mission Control's completed Section 7.1 decision and the prospective Section 6 wording. It is independently verified and reviewed by Mission Control. **Its approved human merge is the single activation event**, effective at the actual GitHub `merged_at` UTC instant | Not started |
| A3 | Mandatory append-only factual reconciliation of the A2 merge commit and `merged_at` into Section 7.2 and the Section 6 fields, with Source Set row 18 recomputed and re-verified against `main`. **Not a second activation event**, and it never moves the effective instant | Not started |

**Boundary:**
- **Until the A2 merge:** Source 18 Version 1.2 is operative. No Product Mission may rely on the Version 1.3 clauses. The identifiers `S11-L443-1` to `S11-L443-5` have no authority.
- **From the A2 merge:** Version 1.3 is operative at the actual `merged_at` instant. That instant is not the creation, authoring, approval, verification or review of the A2 pull request, and it is not a time written in advance.
- **None of the following is the activation event:** the P1 merge; opening, verifying, reviewing or merging the A1 pull request; this record; any step of the A2 pull request before its merge; a dated comment; Mission Control's verification of a merge; the A3 reconciliation; any statement of intent.

## 6. Fields left for A2 and A3

Earlier rows and notes are not rewritten. Corrections follow the append-only pattern the files already use.

| File | Set in the A2 pull request (conditional until its human merge) | Recorded in A3 as factual evidence |
|---|---|---|
| This record | The header `Activation Confirmation` and `Status` fields; Section 7.1 (all fields) | Section 7.2 (all fields) |
| Source 18 | v1.3 Status, Authority and Activated By; v1.3 Repository publication (P1 pull request #1089, final reviewed head `14df5aa4`, merge commit `dd5baf2f`, `merged_at` 2026-10-28T08:46:32Z; the A1 merge commit); v1.3 notice and Active control tense; Change Log row 1.3 Status and an append-only note | v1.3 Activation Date; the A2 merge commit in Repository publication and Change Log row 1.3 |
| Canonical Source Set | Row 18 version cell, bytes and SHA-256 computed from the A2 Source 18 blob; a register refresh note | Row 18 bytes and SHA-256 recomputed after the A3 edit to Source 18, re-verified against `main` |
| Record 01 | Section 5 P1 facts (pull request, final reviewed head, merge commit and instant, independent verification, Mission Control disposition), if Mission Control includes the path | None |
| Mission README | Stage, last completed action, next authorized action, blockers, latest relevant commit, if Mission Control includes the path | Latest relevant commit, if included |

The record 01 and README rows are listed so that the fields are not lost. Including either path in A2 needs its own Mission Control authorization.

## 7. Activation Confirmation

**Status:** `NOT YET RECORDED`

Section 7 is completed only in the A2 finalization pull request. The completed section is Mission Control's activation decision, and it is conditional until a human merges that pull request into canonical `main`. That merge is the activation event.

### 7.1 Decision fields

Mission Control completes these in the A2 pull request. They take effect only on its human merge.

| Field | Value |
|---|---|
| Confirming actor | `NOT YET RECORDED` |
| Activation authority and conditions | `NOT YET RECORDED` |
| Instrument activated (Source 18 Version 1.3 only) | `NOT YET RECORDED` |
| A2 pull request number | `NOT YET RECORDED` |
| A1 pull request number and merge commit on `main`, as verified by Mission Control | `NOT YET RECORDED` |
| Independent verifier of the A1 pull request | `NOT YET RECORDED` |
| Independent verifier of the A2 pull request | `NOT YET RECORDED` |
| Source Set row 18 re-verified against the `main` blob (bytes and SHA-256) | `NOT YET RECORDED` |
| External reference-copy status at the decision (Section 8) | `NOT YET RECORDED` |

### 7.2 Evidence fields

Recorded in A3 from what GitHub records for the A2 merge. They are mandatory and append-only, and they are not a second activation event.

| Field | Value |
|---|---|
| A2 merge commit on `main` | `NOT YET RECORDED` |
| Effective instant: GitHub `merged_at` (UTC) | `NOT YET RECORDED` |
| Mission Control verification of the merge and of the observed instant | `NOT YET RECORDED` |

## 8. External reference copies

Google Drive is retired as an active synchronization destination (Canonical Source Set, Founder direction in PR #612 comment `5752013706`). The Source Set records a separately attested ChatGPT Project upload of Source 18 **Version 1.2** (PR #609 comment `5750647268`). That attestation is not evidence for Version 1.3. Any refresh needs its own attested evidence, and it is not a condition of activation.

## 9. Explicit exclusions

- No SB-P-1.18 FCTM change. The FCTM keeps 764 rows; the `S11-L443-*` rows stay unauthorized until Version 1.3 is active and a separate FCTM reconciliation is authorized.
- No change to Source 11, Contracts 06 and 17, `18:FPDR-5`, Product Truth, application code, workflows or branch protection.
- No migration, deployment, database or production action.
- The SB-P-1.18 holds (F-1, F-4, DC-02, DC-13, DC-14, C1 §17, MC-544, AEG-1, U-09, DLEG) are unchanged, and SB-P-1.18 Stage 3 stays open.
- The mission stays open.

## 10. Guide for the independent verifier

The verifier must not be Claude Code, the author of this record, or Founder Accountability, who drafted the normative text.

1. **Scope.** The A1 branch starts at `dd5baf2f60fb75886c5c37edd1b8a1557c7e6dce`. Its diff adds exactly this record and changes no other file.
2. **Publication identity.** Recompute bytes and SHA-256 of the four Section 4 blobs at `dd5baf2f` and compare. Confirm that Source Set row 18 equals Source 18.
3. **Evidence.** Re-read each Section 2 comment and the PR #1089 merge record from the GitHub API, and compare the identifiers and times.
4. **No fabricated future facts.** No A1 or A2 merge commit, A2 pull request number, `merged_at` time or claim that Version 1.3 is active appears in this record.
5. **Boundary.** Sections 1, 5 and 7 make the A2 human merge the single activation event at its `merged_at` instant, treat the A3 reconciliation as evidence only, and keep Section 7 `NOT YET RECORDED`.

## 11. Revision history

| Revision | State | Change |
|---|---|---|
| Initial publication | The A1 pull request's first commit | First version of this record |
