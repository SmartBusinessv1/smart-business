# SMART BUSINESS MISSION CONTROL

# SB-GOV-PRODUCT-EXEC-1.0 — Governance Activation Decision and Metadata Reconciliation

**Mission ID:** `SB-GOV-PRODUCT-EXEC-1.0`

**Record:** 04 — activation-preparation record

**Status:** `PREPARED FOR INDEPENDENT VERIFICATION — NOT AN ACTIVATION DECISION`

**Activation Confirmation (Section 8):** `NOT YET RECORDED`

**Prepared by:** Claude Code — Governance Documentation Implementation. The author of this record may not verify, approve, merge or activate it.

**Prepared under:** Mission Control post-merge activation authorization, PR #606 comment `5744791390` (preparation only)

**Preparation date:** 2026-09-20. This is the date this record was prepared. It is not an activation date.

**Repository:** `SmartBusinessv1/smart-business`

**Starting `main`:** `b3cd5f439e8795855d6ef0f527d7ccea18c48080`

**Product Mission state:** `SB-P-1.12 — NOT ACTIVATED`

---

## 1. Purpose and effect of this record

This record prepares the activation of the five governance instruments amended under `SB-GOV-PRODUCT-EXEC-1.0` and reconciles the metadata of the nine files that carry their status.

It does three things:

1. It records the approval, verification and merge evidence for the amendment.
2. It makes the effect of every amended instrument expressly conditional on one future event, the Activation Confirmation of Section 8.
3. It lists the exact fields left for the finalization pull request and for the factual reconciliation that follows the merge.

It does not activate anything. Sections 1 to 7 and 9 to 13 record facts and preparation. Section 8 is the only place where an activation can be recorded, and it is empty. The activation event is the human merge of a later, separately reviewed finalization pull request that completes Section 8. This pull request, PR #607, prepares the record and activates nothing, whether it is published or merged.

## 2. Mission and activation purpose

The mission reconciles the Product Mission execution system so that `SB-P-1.12` to `SB-P-1.20` can run faster, securely and traceably without weakening security, human authority, independent verification, runtime evidence or auditability. It does not change Product Truth.

The approved amendment is published on `main` (PR #606) with every amended instrument marked as awaiting a distinct Mission Control activation. The purpose of this record is to make those instruments ready for that activation without recording a future event as if it had occurred.

## 3. Approval, verification and merge evidence

All times are GitHub UTC. The PR #606 merge at `2026-09-19T19:37:16Z` is `2026-09-20 01:07:16` IST.

| Step | Evidence | Recorded value |
|---|---|---|
| Founder design and amendment decisions | PR #605 comments `5740893113` (first tranche), `5740990250` (second tranche), `5741014275` (decision D-15) and `5742411779` (Independent Verification Efficiency Protocol v1.1 scope) | Created 2026-09-19 between 09:56:58Z and 13:51:24Z |
| Mission Control amendment-scope review | PR #605 comment `5742307415` | 2026-09-19T13:35:09Z, reviewing PR #605 head `bd5869c961e2688d5cb4cc70bfc29a682cda6855` |
| PR #605 — merged design authority | Governance reconciliation design, including the Product Truth coverage addendum | Merge commit `c3ef55fe0cf94f4491cb2ae257b084f90b49b40b`, merged 2026-09-19T13:59:57Z |
| PR #606 — governing-source amendment | Eleven-file redline. Three commits: `ec6e80e` (implementation), `433608b` (independent verification findings F-01 to F-06), `7e47118` (work-package Git expiry and attribution, finding F-07) | Final reviewed head `7e47118ccf039210803d22646843dd16088aa190` |
| Independent verification (Codex) | Mission Control dispositions recorded on PR #606: verification handoffs `5742770928`, `5744555114` and `5744700591`; dispositions `5742961206` (blocked on F-01 to F-06), `5744644560` (F-01 to F-06 pass, F-07 open) and `5744746689` (final) | Final outcome at head `7e47118`: F-07 pass, compiler-diagram follow-up pass, F-01 to F-06 and provenance pass, 18 of 18 amendment-map checks pass, Packages A, B and C pass |
| Mission Control final substantive review | PR #606 comment `5744746689` | 2026-09-19T19:35:22Z, exact head `7e47118ccf039210803d22646843dd16088aa190`. Continuous integration on that head: Markdown Quality Gate #1910 (run `35464227511`) and Application Build Assurance #306 (run `35464227544`), both success |
| Founder human merge | GitHub merge record of PR #606 (merged by the GitHub account `SmartBusinessv1`) and Mission Control confirmation `5744765937`, which records the merge as the Founder's | Squash merge into `main` at publication commit `b3cd5f439e8795855d6ef0f527d7ccea18c48080`, 2026-09-19T19:37:16Z |
| Mission Control post-merge authorization | PR #606 comment `5744791390` | 2026-09-19T19:43:06Z. Preparation only, and not an activation |

Notes on the evidence:

- The Codex verification reports are not stored in the repository. They were supplied by the Founder to Mission Control, and Mission Control recorded its dispositions on PR #606. Mission Control states that these dispositions are not a Codex-authored GitHub review. PR #606 carries no GitHub review objects.
- The Founder's approval of the amended text is evidenced by the Founder's human merge of PR #606. GitHub holds no separate approval record.
- Every PR #605 and PR #606 comment cited above was posted through the GitHub account `SmartBusinessv1`, including the Founder decision records, which state that they convey the Founder's authority. The account does not itself distinguish the authors, so the authorship of each record rests on what the comment states.
- PR #605 is preserved as original design history. Its future-dependent Stage 19 and Stage 22 comparison was corrected during independent verification, and the PR #606 text is the amended text. Mission Control comment `5744746689` records this.
- At preparation, Claude Code confirmed by reading GitHub that the Source 18 blob on `main` at `b3cd5f4` is 89443 bytes with SHA-256 `03135f1b76ace4147600cb1b7030ad9d08a0f27651e2e282e460cd4ae9fcf345`, matching the register row before this pull request. This is author evidence and not independent verification.

## 4. Instruments and versions

Each existing version below remains operative until the Activation Confirmation, as it stood at commit `c3ef55fe0cf94f4491cb2ae257b084f90b49b40b`.

| Instrument | Path | Version proposed for activation | Version operative until the Activation Confirmation |
|---|---|---|---|
| Source 18 — SB-P Mission Lifecycle and Delivery Framework | `merge/active/18_SB-P_Mission_Lifecycle_and_Delivery_Framework.md` | 1.2 | 1.1 |
| Product Feature Elaboration Workflow Template (`SB-P-PFEW-1.4`) | `docs/phase-1-mission-blueprint/templates/SB-P-Product-Feature-Elaboration-Workflow-Template.md` | 1.4 | 1.3 |
| Implementation, Verification, Evidence and Completion Workflow Template (`SB-P-IVEW-1.2`) | `docs/implementation/templates/SB-P-Implementation-and-Evidence-Workflow-Template.md` | 1.2 | 1.1 |
| AI Communication and Handover Protocol | `communication/AI_Communication_and_Handover_Protocol.md` | 1.1 | 1.0 |
| Independent Verification Efficiency Protocol (protocol ID `SB-IV-1.0`, unchanged) | `communication/Independent_Verification_Efficiency_Protocol.md` | 1.1 | 1.0 |

The five instruments are activated together and none of them separately. Mission Control recorded the amended bundle as the unit of activation in PR #606 comments `5742961206` and `5744746689`.

Four further files carry operational references to these versions and are reconciled here without any new authority: the Build Plan (`docs/phase-1-mission-blueprint/smart-business-features/00_Founder_Approved_MC_and_CC_Verified_Build_Plan.md`), `AGENTS.md`, `communication/README.md` and the Canonical Project Source Set (`docs/governance/Smart_Business_Canonical_Project_Source_Set_v1.0.md`).

## 5. Publication commit and activation-pull-request merge commit

| Identifier | Value | State |
|---|---|---|
| Operative-text baseline before PR #606 | `c3ef55fe0cf94f4491cb2ae257b084f90b49b40b` | Exists. Merge commit of PR #605 |
| PR #606 final reviewed head | `7e47118ccf039210803d22646843dd16088aa190` | Exists |
| PR #606 publication commit | `b3cd5f439e8795855d6ef0f527d7ccea18c48080` | Exists. A publication commit and never an activation commit |
| Activation-record pull request | Draft PR #607 from branch `mission/SB-GOV-PRODUCT-EXEC-1.0-activation-record` | Exists. Draft and unmerged. It prepares this record and activates nothing |
| Activation-record pull request (PR #607) merge commit | Not yet in existence | `NOT YET RECORDED`. Set only in Section 8.1, after that merge |
| Finalization pull request | Not yet in existence | `NOT YET RECORDED`. A separate, later pull request that completes Section 8. Its number is not written here |
| Finalization pull request merge commit and GitHub `merged_at` instant | Not yet in existence | `NOT YET RECORDED`. The `merged_at` instant is the effective instant. Both are recorded only afterward, in Section 8.2, as mandatory factual evidence, because neither can be known before the merge |

The PR #606 publication commit must never be substituted for the merge commit of PR #607 or of the finalization pull request. No commit or time may be written before it exists, and none may be backdated. Facts that exist only after the finalization merge are recorded afterward as evidence and do not move the effective instant.

## 6. Activation sequence and effective-authority boundary

### 6.1 Sequence

Two separate pull requests are involved. This pull request (PR #607) prepares the record and activates nothing. A later, separately reviewed finalization pull request carries Mission Control's completed Section 8 decision, and its human merge is the activation event.

| Step | Description | State |
|---|---|---|
| A | Prepare the activation record and metadata changes | PR #607 |
| B | Publish one draft activation pull request. A draft is not activation | PR #607 is published as a draft |
| C | Independent verification of PR #607 by a non-author of the exact metadata, version references, historical approvals, Source 18 register hash and effective-state boundaries | Not started |
| D | Mission Control final review of the independent findings on PR #607 | Not started |
| E | Founder human merge of PR #607. This merge does not activate anything | Not started |
| F | Mission Control verifies the actual merged `main` (canonical confirmation of the PR #607 merge), then authors the completed Section 8.1 decision in a separate finalization pull request. That pull request also carries the prospective status, authorization and conditional wording for the six activation items, with Source Set row 18 computed from its own Source 18. The decision and wording are conditional until that pull request is merged | Not started |
| G | Independent verification of the finalization pull request by a non-author, then Mission Control final review | Not started |
| H | Founder human merge of the finalization pull request into canonical `main`. **This merge is the single activation event.** The versions take effect at the actual GitHub `merged_at` instant | Not started |
| I | Mission Control verifies that merge and reports the observed instant and merge commit. This is evidence. It is not a second activation event and not a condition of activation, so activation does not wait for it | Not started |
| J | Mandatory append-only factual reconciliation of the merge commit and `merged_at` instant into Section 8.2 and the fields listed in Section 9, with Source 18's byte count and SHA-256 recomputed in Source Set row 18 and re-verified against `main`. It is part of the audited evidence of the activation. It is not a second activation event or gate, and it never changes the established effective instant | Not started |

### 6.2 Boundary

- **Now, and until the activation event:** the operative texts are the versions in the last column of Section 4. Every amended file says so and none states that its amended version is already active.
- **From the activation event:** the amended versions in Section 4 are operative, together, from the actual GitHub `merged_at` UTC instant of the finalization pull request. That instant is not the creation, authoring, approval, verification or review of the finalization pull request, and it is not a time written in advance.
- **The Activation Confirmation is Mission Control's completed Section 8 decision. It is conditional until a human merges the finalization pull request, and it is on canonical `main` from that merge.** The Founder decision recorded in PR #607 comment `5745151886` (2026-09-19T20:42:21Z, which is 2026-09-20 02:12:21 IST) selects this mechanism, Option B, and rejects a dated GitHub comment as the activation switch. It is consistent with Mission Control comment `5744765937`, which records that the previous versions remain in force until the step "is canonically recorded and human-merged". It refines comment `5744791390`: the "explicit, dated Mission Control confirmation after human merge of the activation record" is realised as the completed Section 8 in the finalization pull request, and not as a comment. The Source 18 header states this mechanism expressly, and this record conforms to it. Where they differ, Source 18 governs.
- **Terms.** The Source 18 header defines the activation-record pull request as PR #607 and the finalization pull request as a later, separate pull request. Mission Control's verification of the merged `main` after PR #607 is a prerequisite that is completed before the finalization pull request is authored. Mission Control's verification of the finalization merge (step I) is evidence and is never a prerequisite of the effect.
- **Facts that follow the merge.** The Source 18 header and the Independent Verification Efficiency Protocol header show the Activation Date, and in the protocol the Activation Basis, as `PENDING` until the activation date and merge commit are recorded. Those facts exist only after the merge, so step J is mandatory and records the instant and commit that the activation event established. It is audited completion evidence, not an optional step, not a pre-existing fact and not a second gate. Until step J is complete, a field that still shows `PENDING` does not delay or condition the effect.
- **None of the following is the activation event:** the merge of PR #606; opening, verifying, reviewing or merging PR #607; this record; the opening, authoring, approval, independent verification or review of the finalization pull request before it is merged; a dated GitHub comment; Mission Control's verification and report of the merge; the factual reconciliation; any statement of intent.

### 6.3 The six activation items of the Source 18 header

The Source 18 header lists six items that are prepared before the activation event and take effect on it. The activation date, the merge commit and the register recomputation that follow the merge are mandatory evidence (step J). They are not a second activation event.

| Item | Source 18 header text | Done in PR #607 | Left for the finalization pull request (F) | Left as mandatory evidence (J) |
|---|---|---|---|---|
| 1 | The activation authority | Records Mission Control's preparation authority (comment `5744791390`) | Record the activation authority itself in Section 8.1 | None |
| 2 | Status and Activated By in the header and the Source Change Log | Status now "merged, confirmation pending". Approved By and Approval Date record events that have already occurred | Status and Activated By | Activation Date and the finalization merge commit |
| 3 | The same reconciliation in every other amended file that carries a pending status | Status wording of the four files updated to "merged, confirmation pending" | Their final Status | Their activation date and commit fields |
| 4 | The pending and conditional wording in `AGENTS.md`, `communication/README.md` and the Source Set converted into unconditional text | Pending wording replaced by wording conditional on the Activation Confirmation. Unconditional text would assert a future event | Conversion to unconditional text, effective on the merge | None |
| 5 | The Source Set register row for Source 18, computed from Source 18 as stored in Git in the finalization pull request | Row refreshed from the staged Source 18 blob (procedure in Section 12) | Re-verify against `main` after PR #607 merges. Compute for the Source 18 of the finalization pull request | Recompute after the factual edit to Source 18 and re-verify against `main` |
| 6 | The Project HQ synchronization status | Recorded in Section 10, unchanged | Record the status at the decision (Section 8.1) | None unless separate evidence exists |

## 7. Metadata reconciliation performed in this pull request

| File | Reconciliation |
|---|---|
| Source 18 | Header Status, Approved By, Approval Date, Activated By, Activation Date and Repository publication updated. Authority notice updated. The activation-boundary and Activation Confirmation paragraphs replaced by the Option B definitions: PR #607 as preparation only, the finalization pull request, the single activation event at `merged_at`, what is complete before it, and the mandatory evidence after it. Change Log row 1.2 status and evidence updated, append-only notes 5 and 6 added, closing "Active control" line updated with the replaced wording preserved in notes 5 and 6. The numbered sections and the appendices are unchanged |
| Elaboration template | Header Status, Change Log row 1.4 and append-only note 3 |
| Implementation and Evidence template | Header Status, Change Log row 1.2 and append-only note 3 |
| Communication and Handover Protocol | Header Status and Approved By, Change Log row 1.1, an interpretation note and the closing activation-control line |
| Independent Verification Efficiency Protocol | Header Approval, Status, Activation Date and Activation Basis (separating the decision from the mandatory post-merge evidence), the Section 1 and Section 2 conditional wording, Version History row 1.1 and an interpretation note |
| Build Plan | Operational baseline revision line and the verification-protocol bullet of Section 19 |
| `AGENTS.md` | Amendment banner. The wording marked as taking effect on activation is unchanged |
| `communication/README.md` | Two stale statements that the amendment was still pending independent verification and human merge |
| Canonical Source Set | Activation banner, the row 18 version cell, byte count and SHA-256, and a new register refresh note. The Project HQ paragraph and every other row are unchanged |

Wording already conditional on activation, such as "once Source 18 Version 1.2 is active" and "taking effect on activation", is retained deliberately. It is consistent before and after the Activation Confirmation.

Historical Version 1.0 and Version 1.1 records and the independent-verification corrections approved through PR #606 are preserved. The bounded work-package expiry model, the mandatory Feature Coverage and Product Truth Traceability Matrix, the mandatory human retest after every correction, Product Truth and the nine-mission sequence are not touched.

## 8. Activation Confirmation

**Status:** `NOT YET RECORDED`

**Mechanism (Founder decision, Option B).** Section 8 is completed only in a later finalization pull request. That pull request is separate from PR #607 and is separately authorized and separately reviewed. The completed Section 8 is Mission Control's activation decision, and it is conditional until a human merges that pull request into canonical `main`. The human merge is the activation event, and the effective instant is the actual `merged_at` UTC timestamp that GitHub records for it. A dated GitHub comment does not activate anything.

The merge commit and the exact time are facts that exist only after the merge. They are recorded afterward, in Section 8.2 and in the Section 9 fields, as mandatory, append-only factual evidence. That reconciliation is part of the audited evidence of the activation. It is not a prerequisite of the decision, it is not a second activation event or gate, and it never changes the effective instant. Mission Control's own verification and report of the merge are evidence in the same way and are not a condition of activation, so activation does not wait for them. No value below may be written in advance. Until the merge, the versions in the last column of Section 4 remain operative.

### 8.1 Decision fields

Mission Control completes these in the finalization pull request. They take effect only on its human merge.

| Field | Value |
|---|---|
| Confirming actor | `NOT YET RECORDED` |
| Activation authority and conditions | `NOT YET RECORDED` |
| Instruments activated (all five of Section 4, together) | `NOT YET RECORDED` |
| Finalization pull request number | `NOT YET RECORDED` |
| Activation-record pull request (PR #607) merge commit on `main`, as verified by Mission Control | `NOT YET RECORDED` |
| Founder human-merge evidence for PR #607 | `NOT YET RECORDED` |
| Independent verifier of PR #607 | `NOT YET RECORDED` |
| Independent verifier of the finalization pull request | `NOT YET RECORDED` |
| Source Set row 18 re-verified against the `main` blob (bytes and SHA-256) | `NOT YET RECORDED` |
| Project HQ synchronization status at the decision | `NOT YET RECORDED` |

### 8.2 Evidence fields

These are recorded afterward, in a mandatory append-only reconciliation, from what GitHub records for the finalization merge. They are not omitted, they are not optional, and they are not a second activation event.

| Field | Value |
|---|---|
| Finalization pull request merge commit on `main` | `NOT YET RECORDED` |
| Effective instant: GitHub `merged_at` (UTC) | `NOT YET RECORDED` |
| Mission Control verification of the merge and of the observed instant | `NOT YET RECORDED` |

## 9. Post-merge factual-finalization checklist

These are the exact fields still to be set. Earlier rows and notes are not rewritten. Corrections follow the append-only pattern the files already use.

The fields are split by when each can truthfully be written. The first column holds fields that Mission Control can write in the finalization pull request, conditional until its human merge. The second column holds fields that depend on the actual finalization merge, so they are recorded afterward as mandatory factual evidence. That evidence is not a second activation event and never changes the effective instant.

| File | Set in the finalization pull request (conditional until its human merge) | Recorded afterward as mandatory factual evidence |
|---|---|---|
| This record | The top-level `Activation Confirmation: NOT YET RECORDED` field (labelled `Activation Confirmation (Section 8)` in the header); Section 8.1 (all fields); Status line | Section 8.2 (all fields) |
| Source 18 | Status; Authority; Activated By; the PR #607 merge commit in Repository publication; Change Log row 1.2 Status and a note; the authority-notice, activation-boundary and closing "Active control" wording (tense) | Activation Date; the finalization merge commit in Repository publication and Change Log row 1.2 |
| Elaboration template | Header Status; Change Log row 1.4 Status and a note | Any activation date or merge commit that the final wording records |
| Implementation and Evidence template | Header Status; Change Log row 1.2 Status and a note | Any activation date or merge commit that the final wording records |
| Communication and Handover Protocol | Header Status and Activated By; Change Log row 1.1 Status; the activation-control line | Activation Date; Activation Commit |
| Independent Verification Efficiency Protocol | Header Status; Section 1 and Section 2 wording; Version History row 1.1 Status | Activation Date; Activation Basis |
| Build Plan | Operational baseline revision line; verification-protocol bullet of Section 19 | None |
| `AGENTS.md` | Amendment banner, and conversion of the "taking effect on activation" wording to unconditional text | None |
| `communication/README.md` | The two paragraphs reconciled here, and the "once active" wording | None |
| Canonical Source Set | Row 18 version cell, bytes and SHA-256 (recomputed from the final Source 18 blob); activation banner; a register refresh note | Row 18 bytes and SHA-256, recomputed after the factual-evidence edit to Source 18 and re-verified against `main` |

## 10. External Project HQ synchronization

**Status:** `UNVERIFIED — PENDING RECONCILIATION`

The last HQ synchronization acceptance recorded in the repository is `SB-GOV-HOUSEKEEPING-1.5` on 2026-08-02, which predates the Source 18 v1.1 amendment. GitHub merges, this record and the Activation Confirmation are not evidence of HQ synchronization. A separate record of the actual canonical Git commit and the synchronization date is required. Nothing in this pull request changes an external platform.

## 11. Explicit exclusions

- `SB-P-1.12` is not activated and needs its own activation after this mission closes cleanly.
- No Product Truth, feature contract, Source 01, Source 11, Global Product Completion View, application code, workflow, branch protection or nine-mission sequence is changed.
- No migration, deployment, database or production action is taken, and this record makes no statement about migration or production state.
- The historical OLE backfill is `NOT VERIFIED COMPLETE` and dual intake remains in force.
- The mission stays open. Mission Control closure, OLE learning disposition and communication archival have not occurred.

## 12. Guide for the independent verifier

The verifier must not be the author of this record, which is Claude Code.

1. **Baseline and scope.** The branch starts at `b3cd5f439e8795855d6ef0f527d7ccea18c48080`. The cumulative diff contains exactly the nine files of Section 4 and Section 7 and this record.
2. **Source 18 register hash.** Compute from the Git blob and compare with row 18 of the Source Set:

   ```text
   git cat-file blob <head>:merge/active/18_SB-P_Mission_Lifecycle_and_Delivery_Framework.md
   ```

   Count the bytes and compute the SHA-256 of that output. Line endings are LF.
3. **Diff limits.** The Source 18 diff touches only the header block, the Change Log, notes 5 and 6 and the closing line. Each other file's diff touches only the fields in Section 7.
4. **No fabricated future facts.** No activation date, no activation or finalization merge commit, no finalization pull request number, no `merged_at` time and no claim that any amended version is active appears in any of the ten files. Version 1.0 and 1.1 approvals and activation records are unchanged.
5. **Coherence.** No file states an amended version as active while another states it as pending. Each amended file names the same event, the Activation Confirmation, and points here.
6. **Boundaries.** Project HQ status is unchanged and unverified. `SB-P-1.12` is not activated.
7. **Option B.** The Source 18 header and Sections 5, 6, 8 and 9 of this record separate PR #607 from the finalization pull request. They make the human merge of the finalization pull request the single activation event at GitHub's `merged_at` instant, treat the merge commit and that time as mandatory evidence recorded afterward, reject a dated comment as a switch, and keep Section 8 `NOT YET RECORDED`. Section 9 lists the top-level `Activation Confirmation` field.
8. **Findings F-01 and F-02 of the replacement verifier.** Confirm that the Source 18 header itself (a) names PR #607 as preparation only and defines the finalization pull request, (b) makes the finalization merge the single activation event, effective at `merged_at`, (c) lists what is complete before that event, including Mission Control's verification of `main` after PR #607, (d) makes the post-merge reconciliation mandatory and not a second gate, and (e) no longer makes Mission Control's verification of the finalization merge a condition of activation. Confirm that this record and the Independent Verification Efficiency Protocol header conform, and that no numbered lifecycle section changed.

### Interpretive choices for the verifier and Mission Control

- **Trigger.** The Founder's Option B decision (PR #607 comment `5745151886`) makes the human merge of the finalization pull request the activation event, and the Source 18 header now says so itself. The other seven files say that the amended version is operative when Mission Control records the Activation Confirmation on canonical `main`. Source 18 defines that as the finalization merge, so their wording holds at that merge without an edit.
- **Wording that changed for F-01 and F-02.** The Source 18 header no longer says that one six-item step must be complete before any amended clause is operative, and no longer makes Mission Control's verification of the merged `main` a condition that could be read as following the finalization merge. The Source 18 and Independent Verification Efficiency Protocol lines that read "set only by the Activation Confirmation" or "the Activation Confirmation records them" now separate the decision, which takes effect at the merge, from the mandatory evidence recorded afterward. If the verifier finds any remaining ambiguity in a file outside this correction, correcting it is a separately authorized edit.
- **Approved By and Approval Date.** The Source 18 header lists them among the fields set at activation. They are written here as facts of events that have already occurred (the PR #605 decisions and the PR #606 merge). Activated By and Activation Date stay `PENDING`. If Mission Control prefers to hold the approval fields for the Activation Confirmation, only those header fields change.
- **Step 4 timing.** The conversion of conditional wording to unconditional text is left to the finalization pull request, effective only on its merge, because doing it in PR #607 would assert a future event.

## 13. Revision history

| Revision | State | Change |
|---|---|---|
| Initial publication | Commit `a960f6c38d366e6d5ac100cdf41f683b4a9cee52` on PR #607 | First version of this record |
| Option B correction (F-08 and F-09) | Commit `4e50f8122f549c1917aa57ff6f392d871a657acd` on PR #607 | Replaced the trigger wording. The initial text made the activation effective when Section 8 was populated on canonical `main` through a follow-up that a human merges, said that the effective date shall not precede the merge of PR #607, and carried separate decision-date and effective-date fields in Section 8. It now follows the Founder Option B decision (PR #607 comment `5745151886`): the human merge of a later finalization pull request is the activation event, effective at GitHub's `merged_at` instant. Section 8 is split into decision fields and evidence fields, Section 9 is split by when each field can truthfully be written, and the top-level `Activation Confirmation` field is added to the Section 9 checklist. Section 8 remains `NOT YET RECORDED` |
| Source 18 Option B reconciliation (replacement verifier findings F-01 and F-02) | The commit that follows `4e50f8122f549c1917aa57ff6f392d871a657acd` on PR #607 | Mission Control accepted the findings in PR #607 comment `5748933080`: the Option B distinction between the finalization merge and the later timestamp and commit evidence was not expressly permitted by the six-step wording of the Source 18 header, and Source 18 did not unambiguously distinguish the PR #607 preparation merge from the finalization merge. The Source 18 header now defines both pull requests, the single activation event at `merged_at`, what is complete before it, and the mandatory post-merge evidence that is not a second gate. Sections 5, 6, 8, 9 and 12 conform to Source 18, and Section 6.3 mirrors its before-and-after split. The Independent Verification Efficiency Protocol Activation Date and Activation Basis wording is clarified, and Source Set row 18 is recomputed. Section 8 remains `NOT YET RECORDED` |
