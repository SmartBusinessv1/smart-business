# SMART BUSINESS MISSION CONTROL — MC40

# SB-P-1.12 — Stage 10 EIS v0.6 PQ-14 Amendment-Review Acceptance

**Mission:** SB-P-1.12 — Authority, Identity & Product Surface Foundation
**Stage:** 10 — EIS Review (version 0.6 PQ-14 amendment)
**Date:** 2026-11-14 (IST)
**Owner:** Mission Control (decision owner)
**Prepared by:** Claude Code, SB-P-1.12 Kernel / Identity & Authority source-owner room, under [MC40 #6877136261](https://github.com/SmartBusinessv1/smart-business/pull/1111#issuecomment-6877136261). Preparer only, and not independent: the same room authored the version 0.6 text, the MC-33 A-2 correction commit and the approval-metadata reconciliation. The disposition is Mission Control's alone and needs Mission Control's own review of this exact text
**Status:** DRAFT — NOT ACCEPTED — NOT EFFECTIVE UNTIL MISSION CONTROL ADOPTS THIS DECISION, THE PR CARRYING THIS RECORD IS HUMAN-MERGED TO CANONICAL `main`, AND MISSION CONTROL 40 VERIFIES IT
**Reviewed and published PR:** #1128, final head `ff2b148dbf29fae811f49ca2a70dceab76e900d7`, human-merged on 2026-11-14 at 12:14:09 UTC (17:44:09 IST), merge commit `b0586de5bbeef71ec90e0f93258d329054e5ba5c`, verified in [MC40 #6877136261](https://github.com/SmartBusinessv1/smart-business/pull/1111#issuecomment-6877136261)
**Published EIS v0.6 blob (canonical at `main@b0586de5`):** `f03d0221307cc12b6c9d3dc9e9c1d95e1e79fad3`
**Founder-approved substantive blob:** `92ad2806e8ea6da76a27e24ced4e715102df9364` (PR #1128 head `47782c7ba72de42171ec047a47055b23a6beeb44`)
**Prior locked EIS v0.5 blob (authoritative):** `7a5f49182463ec79ecf221d7dd13dfebbc517e3e`

## 1. Proposed disposition

Proposed for Mission Control adoption: Mission Control accepts the SB-P-1.12 EIS version 0.6 PQ-14 amendment for Source 18 Stage 10.

The accepted delta is exactly six Founder-approved text insertions in the existing file. They add **no requirement ID**:

| Clause | Location in the published EIS | Content |
|---|---|---|
| A-1a | Section 8.1 | Target-less helpers (`authz.can`) never allow on a grant narrower than the requested business; such a grant is satisfied only by exact-target `authz.authorize` |
| A-1b | `EIS-KER-04` | Cross-reference to A-1 |
| A-3a | Section 8.1, **Capability selection.** | One registered capability per `authz.authorize` call, selected by the existing `p_action`; multi-capability consumers make separate exact-target calls and require all to allow |
| A-3b | `EIS-KER-01` | Cross-reference to A-3 |
| A-2a | Section 8.1, **Object-scoped membership set read.** | A kernel-owned candidate seed, `authz.scoped_targets`, then fresh per-target, per-capability `authz.authorize`, with no disclosure. It includes the MC-33 correction: the helper is an internal Kernel seed helper, not a client/API/RPC authority surface. `EXECUTE` is revoked from `PUBLIC`, `anon`, `authenticated` and `service_role` and granted only to dedicated `NOLOGIN NOINHERIT` executor roles of governed membership set-read functions |
| A-2b | `EIS-KER-08` | Cross-reference to A-2 |

This acceptance is documentary engineering design only.

- It does not itself lock version 0.6. That is the separate, later Stage 11 disposition in Record 76.
- It does not authorize implementation, SQL, RLS, migrations or package changes.
- It does not establish runtime correctness, effective privileges or provider state.

## 2. Evidence reviewed

All reviews were **contribution-disclosed and finding-scoped**, not clean-room claims.

| Review | Scope | Outcome |
|---|---|---|
| [MC-33 #6875672459](https://github.com/SmartBusinessv1/smart-business/pull/1128#issuecomment-6875672459), Security & Permissions Architecture | Full candidate at head `c095099b`, blob `6f083144` | `EXACT CORRECTION REQUIRED`: A-1 and A-3 `CONCUR`; A-2 helper execution surface exposed candidate target IDs before authorization; one exact replacement sentence; missing negative case KS-14 |
| [MC40 #6875701851](https://github.com/SmartBusinessv1/smart-business/pull/1128#issuecomment-6875701851) | Disposition of that finding | Accepted; authorized the one-sentence A-2 replacement, applied at head `47782c7b` (source-owner evidence [#6875761366](https://github.com/SmartBusinessv1/smart-business/pull/1128#issuecomment-6875761366)) |
| [MC-33 #6875804214](https://github.com/SmartBusinessv1/smart-business/pull/1128#issuecomment-6875804214), changed-head recheck | Head `47782c7b`, blob `92ad2806` | **`CONCUR`**: exposure closed on paper; A-1 and A-3 concurrence stands; executor design compatible with `EIS-ISO-10` and Section 9.3; KS-14 adequate; independently recounted 85 / 508 / 267 |
| [Source 18 #6876444811](https://github.com/SmartBusinessv1/smart-business/pull/1128#issuecomment-6876444811), independent documentary review | Head `47782c7b`, blob `92ad2806`, against grant record 11 | **`CONCUR`**: the six insertions match grant §2; Sections 18, 19 and 22 byte-identical to v0.5; independently recounted 85 / 508 / 267; no new T3, T6, T7 or T8 trigger |
| [MC40 #6876548473](https://github.com/SmartBusinessv1/smart-business/pull/1128#issuecomment-6876548473) | Both concurrences | Accepted for the exact present head; Founder decision gate opened |

**Also reviewed:**

- **Founder exact-text approval.** The Founder entered it personally in the Team LIPS Mission Control 40 conversation on 2026-11-14, for PR #1128 head `47782c7b` and substantive blob `92ad2806e8ea6da76a27e24ced4e715102df9364`. It is restricted to the six insertions, including the MC-33 A-2 correction. It is transcribed in [MC40 #6876672020](https://github.com/SmartBusinessv1/smart-business/pull/1128#issuecomment-6876672020). This is a Mission Control transcription, not a Founder-authored GitHub comment.
- **The approval-metadata reconciliation** at head `ff2b148d`: a seven-line, metadata-only change, accepted in [MC40 #6876833579](https://github.com/SmartBusinessv1/smart-business/pull/1128#issuecomment-6876833579). The resulting blob `f03d0221` is not separately Founder-approved engineering content; the Founder approval covers the unchanged substantive text.
- **The human merge of PR #1128**, verified in [MC40 #6877136261](https://github.com/SmartBusinessv1/smart-business/pull/1111#issuecomment-6877136261).
- **Authoring authority:** MC40 grant record `communication/missions/SB-P-1.18/mission-control/11-pq14-kernel-c1-authoring-instruction.md`, blob `5fdbffc1af58d85ab6a9bc66a6d35e6d87a2acba`, human-merged in PR #1126.
- **Governing framework:** Source 18 v1.3, `merge/active/18_SB-P_Mission_Lifecycle_and_Delivery_Framework.md`, blob `f3b01b608c4b64df186d4278ba6468ed0419630f`, §3.3 and the distinct Stages 10 and 11.
- **Locked Product Blueprint** blob `77d52096c020668311b039721a4de9248ddd460e` and **canonical FCTM** blob `1650ff95b2fbdd63e1b0f60d8135da14a7a9d259`. Neither changed.

**Open reviewer check carried from the source-owner packet, answered.** MC-33 (#6875672459, Founder Scenario A) confirmed that no locked obligation relies on a narrower-than-business grant passing a target-less helper. A-1 narrows only.

## 3. FCTM completeness test

For the published EIS version 0.6 at blob `f03d0221307cc12b6c9d3dc9e9c1d95e1e79fad3`, recounted by the preparer on 2026-11-14:

| Measure | Version 0.5 (`7a5f4918`) | Version 0.6 (`f03d0221`) |
|---|---|---|
| Canonical `IN SCOPE` rows | 267 | **267** |
| EIS requirements | 85 | **85**, identical set |
| Requirement-to-row links, forward and reverse | 508 | **508**, 0 mismatches |
| `IN SCOPE` rows represented | 267/267 | **267/267**, identical to the FCTM `IN SCOPE` set |

- Behaviour-adding orphan requirements: **0**. `EIS-ENV-02` stays the one disclosed engineering-only requirement.
- No FCTM classification, commitment, commercial classification or mission assignment changed.
- No new Product Truth question, and no locked Blueprint correction required.
- No new T3, T6, T7 or T8 trigger was established by the reviews.

## 4. Blocking-finding screen

No unresolved Stage 10 design finding blocks the version 0.6 re-lock. MC-33's only correction was applied and rechecked (`CONCUR`).

These remain open on purpose as downstream gates and evidence obligations. They are not Stage 10 design defects.

**Planned negative verification, PLANNED — NOT RUN:**

- KS-1 to KS-14. KS-14 covers direct helper execution by `PUBLIC`, `anon`, `authenticated` and `service_role`, against the dedicated governed executor.
- Cabinet cases 1 to 18.
- The MC-741-K section 3 stitching table.

**Implementation-verification obligations named by MC-33:**

- Effective-privilege proof under `EIS-ISO-03` and `EIS-ISO-10`, showing that no function-owner, role-membership, default-privilege, overload or grant-chain path restores direct execution of `authz.scoped_targets`.
- A-1 consumed together with the source-specific support (`EIS-SUP-01`) and automation (`EIS-AUT-01`) rules. No support or automation path borrows a membership role default.

**Downstream holds:**

- **Cabinet SB-P-1.14:** U-1 and `EIS14-CAB-04`.
- **SB-P-1.18:** `EIS18-HLD-PQ14` (Mode O), which lifts only after the canonical version 0.6 re-lock and U-1. SB-P-1.18 Stage 10 stays HELD.
- **Package:** C-4 and PK-0. The existing Stage 12 and 13 package is insufficient for version 0.5 G1/G2 and version 0.6 PQ-14. Draft package PR #1120 stays separate.
- **Carried from version 0.5:** PQ-11, PQ-15, `DLEG`, the P-1 runtime identity evidence hold, ENT-1, ESC-1 (OPEN T8), `22-§20-2` (`BLOCKED` / `IN SCOPE`), G-6/T4 (`UNVERIFIED`), and deferred professional legal, privacy and retention validation.
- **Not yet established:** implementation, runtime SQL privilege, RLS, PostgREST surface, performance and enforcement evidence.

## 5. Automation evidence

All five check runs on PR #1128 final head `ff2b148dbf29fae811f49ca2a70dceab76e900d7` succeeded: Markdown Quality Gate, Lint, Typecheck, Fast Tests and Build. These are repository health checks. They prove no authorization, database or implementation behaviour.

## 6. Stage transition

**Proposed Stage 10 disposition for EIS version 0.6: ACCEPTED**, for Mission Control adoption. It is not accepted while this record is a draft.

Under Source 18, the next gate is the separate Stage 11 re-lock disposition. It is recorded in `communication/missions/SB-P-1.12/mission-control/76-stage11-v06-eis-relock.md` and carried in the same pull request as a separately identified disposition, after this one. That sharing is permitted only by Source 18 §3.3 and MC40 #6877136261. Mission Control must explicitly adopt this Stage 10 decision before the Stage 11 decision.

**STOP** if the Stage 11 record or the locked-status EIS differs substantively from the published version 0.6 at blob `f03d0221307cc12b6c9d3dc9e9c1d95e1e79fad3`. **STOP** if any substantive defect, refinement or missing review is found; the gates are then separated.
