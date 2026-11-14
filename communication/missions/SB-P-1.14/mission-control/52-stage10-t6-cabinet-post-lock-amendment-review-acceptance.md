# SMART BUSINESS MISSION CONTROL — MC40

# SB-P-1.14 — Stage 10 T6 Cabinet Post-Lock Amendment Review Acceptance

**Mission:** SB-P-1.14 — Business Memory, Documents & Durable Media
**Stage:** 10 — EIS Review (Source 18 T6 post-lock Cabinet amendment, SB-P-1.14-MC-739-C)
**Date:** 2026-11-14 (IST)
**Owner:** Mission Control (decision owner)
**Prepared by:** Claude Code, SB-P-1.14 Cabinet / UDI source-owner room, under [MC40 #6878974049](https://github.com/SmartBusinessv1/smart-business/pull/1111#issuecomment-6878974049). Preparer only, and not independent: the same room authored the SB-P-1.14 EIS, its implementation package, the amendment in PR #1112 and the readiness packet, and was scribe for Founder record 51. The disposition is Mission Control's alone and needs Mission Control's own review of this exact text
**Status:** DRAFT — NOT ACCEPTED — NOT EFFECTIVE UNTIL MISSION CONTROL ADOPTS THIS DECISION, THE PR CARRYING THIS RECORD IS HUMAN-MERGED TO CANONICAL `main`, AND MISSION CONTROL 40 VERIFIES IT
**Reviewed and published PR:** #1112, final head `429d6a76c0c6e2d3c4b7832a86a6eabfb2ea3d94`, human-merged on 2026-11-04 at 20:22:14 UTC (2026-11-05 01:52:14 IST), merge commit `b06eddc4a4fa996088e41fd19946c7724833f2a1`, recorded in [MC-769 #6641235251](https://github.com/SmartBusinessv1/smart-business/pull/1111#issuecomment-6641235251)
**Published Cabinet EIS blob (on `main` since `b06eddc4`, unchanged at `main@5f5d251a`):** `8fb3e8d30cb71f2adcbae138dd3eaadb7c42830e`
**Founder-approved substantive head:** `429d6a76c0c6e2d3c4b7832a86a6eabfb2ea3d94`, whose EIS blob is the same `8fb3e8d3`
**Last locked Cabinet EIS blob (authoritative):** `7dfad7b53c370af9e7242b66d863f6eaffc3ebfe`

## 1. Proposed disposition

Proposed for Mission Control adoption: Mission Control accepts the SB-P-1.14 Cabinet post-lock amendment, as published at EIS blob `8fb3e8d3`, for Source 18 Stage 10.

The accepted amendment is the four-file documentary change reviewed at PR #1112 head `429d6a76`. In the EIS it is:

| Item | Location in the published EIS | Content |
|---|---|---|
| Feature-restricted read predicate | `EIS14-CAB-01` | Class-scoped, fail-closed Cabinet reads: a separate kernel evaluation for the generic Cabinet capability and for each applicable class capability, with no implication, union, stitching or scope widening, including corrections K-1 to K-7 (MC-741-K) |
| Cross-references | `EIS14-CAB-04`, `EIS14-RTV-01`, `EIS14-SRC-02` | The same predicate applied to search, listing, count, summary and preview; to retrieval and reverse lookup; and to exports |
| Retention hold | `EIS14-HOLD-10` | `DLEG / retention policy pending` for the post-deletion proof |
| Traceability normalization | `EIS14-REV-01` (MC-745-C) | A stable reference to the effective MC-507BL reversal section, with ten constraint-trace links |

The Engineering Contract, Build Prompt and Verification Checklist candidates published with it are reviewed evidence for this record. They are **not** re-locked by it (Section 5).

This acceptance is documentary engineering design only.

- It does not itself re-lock the Cabinet EIS. That is the separate, later Stage 11 disposition in Record 53.
- It does not authorize implementation, SQL, RLS, migrations or package changes.
- It does not establish runtime correctness, effective privileges or provider state.

## 2. Evidence reviewed

All reviews were **contribution-disclosed and finding-scoped**, not clean-room claims.

| Review | Scope | Outcome |
|---|---|---|
| [MC-746-CS #6632354438](https://github.com/SmartBusinessv1/smart-business/pull/1112#issuecomment-6632354438), security and privacy | Exact head `429d6a76`; all four blobs | **`PASS ON PAPER`**: security and privacy conditions preserved; required holds and unknowns remain. Kernel baseline v0.4 |
| [MC-746-CT #6632372960](https://github.com/SmartBusinessv1/smart-business/pull/1112#issuecomment-6632372960), Source 18 traceability and package | Exact head `429d6a76`; all four blobs | **`PASS ON PAPER`**: independently counted 766 / 563, 84 requirements, 84 obligations, 2,292 links, 46 negative-path checks and 25 runtime scenarios |
| [MC-759-C14 #6638702448](https://github.com/SmartBusinessv1/smart-business/pull/1112#issuecomment-6638702448), exceptional post-lock readiness | Exact head `429d6a76` | **Ready for Founder T6 substantive approval routing**, with all holds preserved; **T6 = YES** |
| [MC-33 #6878765376](https://github.com/SmartBusinessv1/smart-business/pull/1111#issuecomment-6878765376), Security & Permissions Architecture, Cabinet × locked Kernel v0.6 | Published blob `8fb3e8d3` against locked Kernel v0.6 blob `25c0fabc` | **`CONCUR`**: A-3, A-1 and A-2 are compatible with the Cabinet text as written; no substantive Cabinet correction and no new Founder Product Truth decision is needed for status-only preparation |
| [MC40 #6878974049](https://github.com/SmartBusinessv1/smart-business/pull/1111#issuecomment-6878974049) | Disposition of MC-33 | Accepted; authorized this status-only preparation |

The three #1112 reviews cover exactly today's published bytes: the four blobs at head `429d6a76` equal the four on `main`, and no SB-P-1.14 file has changed since `b06eddc4`. They used Kernel v0.4. MC-33 #6878765376 supplies the reading against locked Kernel v0.6. It does not replace them.

**Also reviewed:**

- **Founder T6 approval in principle.** Record `communication/missions/SB-P-1.14/mission-control/51-founder-t6-cabinet-post-lock-amendment-decision-record.md`, blob `261dda80915b4fc395292c897059b8db2fd33bda`, for head `429d6a76`. It was made effective by the human merge of PR #1115 on 2026-11-04 at 20:13:25 UTC, merge commit `15d5fa53db0de3bc9e98b1d6c29a06a3d2090eb8`. The approval is limited to the class-scoped, fail-closed Cabinet read-security constraints and the matching EIS and package reconciliation, and it preserves the holds listed in Section 3.
- **The Founder's merge authorization MC-767-F**, recorded in [MC-768 #6641116245](https://github.com/SmartBusinessv1/smart-business/pull/1111#issuecomment-6641116245), and the human merge of PR #1112, recorded in MC-769.
- **MC-769's status statement.** MC-769 described the published text as the canonical successor. It is a PR comment, not a merged record. Under Source 18 §3.3 and the SB-P-1.12 Records 73 to 76 precedent, Mission Control 40 treats `7dfad7b5` as authoritative until this record and Record 53 take effect ([MC40 #6878974049](https://github.com/SmartBusinessv1/smart-business/pull/1111#issuecomment-6878974049)). MC-769 remains historical provenance.
- **Locked SB-P-1.12 EIS v0.6**, blob `25c0fabcff6601877c49d698afb5249ad28bffc4`, locked by Records 75 and 76, carried in PR #1129 (merge commit `5f5d251a77f8ae164b194cb559993869795b2084`).
- **Governing framework:** Source 18 v1.3, `merge/active/18_SB-P_Mission_Lifecycle_and_Delivery_Framework.md`, blob `f3b01b608c4b64df186d4278ba6468ed0419630f`, §3.3 and the distinct Stages 10 and 11.
- **Locked Product Blueprint** `docs/phase-1-mission-blueprint/completed/SB-P-1.14.md`, blob `256828d2c26fba7dab6f52975efb8b574b1563f1`, and **canonical FCTM** blob `01e9856aca0afdb1267230a1932fe34054449a4b`. Neither changed.

## 3. Historical conditions satisfied at source level

Two Cabinet clauses were written conditional on SB-P-1.12. Locked Kernel v0.6 now satisfies both conditions **at source level**, as MC-33 #6878765376 Section 9 found and MC40 #6878974049 accepted.

**Requirement text is not edited.** The conditional wording below stays word for word in the EIS, as a historical condition now met. This record is where the satisfaction is stated.

| Cabinet clause, unchanged | Kernel v0.6 | Source-level state |
|---|---|---|
| `EIS14-CAB-01`: the `action`-to-capability selector "is `UNKNOWN` until separately verified under SB-P-1.12; this requirement does not guess it" | A-3 (Section 8.1, **Capability selection.**): each `authz.authorize` call evaluates exactly one registered capability, `p_action` identifies that registry entry, and the kernel has no all-of form | **Satisfied.** Read as the same operation and action type, with separate capability-selecting `p_action` values. Generic and every applicable class capability each need their own allow on the same business, path, channel and exact target |
| `EIS14-CAB-04`: object-scoped search, listing and conversation "stay a required deliverable, HELD until a target-aware helper is specified and accepted under SB-P-1.12" | A-2 (Section 8.1, **Object-scoped membership set read.**): candidates from `authz.scoped_targets`, then fresh per-target, per-capability `authz.authorize`, with no disclosure | **Satisfied for the membership object-scoped path (Mode O).** The package and runtime are still held |
| `EIS14-CAB-04`: `authz.can` decides a set read "only on proof of business-wide authority" | A-1: a grant narrower than the business never makes a target-less helper allow | **Matches** (Mode W); this clause was not conditional |

**How this sits with Founder record 51.** The Founder listed "PQ-14 target-aware retrieval" and the "`authz.authorize` selector" as HELD or UNKNOWN. This record treats only their **source conditions** as met, by Kernel text the Founder approved exactly (blob `92ad2806`) and that is now locked. Target-aware retrieval itself stays held: no `authz.scoped_targets`, Cabinet executor role, seed choice or target-type mapping exists. Every other Founder hold is untouched.

**Constraints that come with the satisfied conditions**, from MC-33 #6878765376 Sections 3 to 6:

- Mode O applies only to membership object-scoped authority. Participant reads stay on PC-05; support stays on `EIS-SUP-01`; automation stays on `EIS-AUT-01`. None of them borrows `authz.scoped_targets`.
- `authz.scoped_targets` is an internal kernel seed helper. It is executable only by a dedicated `NOLOGIN NOINHERIT` executor role of a governed membership set-read function, never by `PUBLIC`, `anon`, `authenticated` or `service_role`, and candidate identifiers are never returned outward. A Cabinet set read must therefore run as such an executor. The `EIS-ISO-04` `service_role` permission in `EIS14-CAB-01` covers byte delivery only.
- **Package seams, not source defects:** which required capability seeds Mode O, and which Cabinet actions use `document` or `document_version` as `p_target_type`. Both must fail closed under the existing Cabinet rules.

## 4. FCTM completeness test

For the published Cabinet EIS at blob `8fb3e8d3`, recounted by the preparer's script on 2026-11-14 against FCTM blob `01e9856a`:

| Measure | Value |
|---|---|
| FCTM rows | **766** |
| Canonical `IN SCOPE` rows | **563** |
| EIS Section 29.2 mapped rows | **563**, identical to the FCTM `IN SCOPE` set |
| EIS requirement IDs | **84**, each defined once, identical to the mapped set |
| Row-to-requirement links | **2,292** |
| Section 29.3 per-requirement counts | Equal to the recomputed counts for all 84 |

These equal MC-746-CT's independent counts. The status-only Stage 11 edits in this PR leave Section 29 byte-identical, so the locked-status EIS gives the same figures.

- No FCTM classification, commitment, commercial classification or mission assignment changed.
- No new Product Truth question, and no locked Blueprint correction required.
- No new T3, T6, T7 or T8 trigger was established by MC-33 #6878765376. T6 was triggered once, for this amendment, and is answered by record 51.

## 5. Blocking-finding screen

No unresolved Stage 10 design finding blocks the Cabinet re-lock. MC-33 #6878765376 found no substantive correction.

These remain open on purpose as downstream gates and evidence obligations. They are not Stage 10 design defects.

**Planned verification, PLANNED — NOT RUN:**

- Kernel KS-1 to KS-14.
- Cabinet cases 1 to 18.
- Cabinet `NP-45` and `RS-24`.

**Not built or not proved:**

- `authz.scoped_targets` and a Cabinet governed-reader executor role; neither exists.
- Effective SQL, RLS and privileges, including the direct-helper denial proof.
- Revocation-race execution, performance under `EIS-ISO-08`, and the `service_role` delivery binding.

**Founder-held and unresolved:**

- DLEG retention and the post-deletion reference shape.
- Entitlement-suspension and retired-class Owner-access watches (PQ-15, T3).
- PQ-11 physical class storage, writer and grant shape.
- Physical storage and reader implementation.
- The D-1 and D-2 package seams (MC-773-C), and the seed-capability and target-type seams in Section 3.

**Separate gates:**

- **Cabinet package.** The MC-25 package stays locked. The candidate Engineering Contract `4bb9c245d4abe5d995fc89d3993b927b9912a08c`, Build Prompt `fd57fb2c62beb5d7127d17a69a0707dd178282a3` and Verification Checklist `9bfac8ff6557adbbd1b33861cd6435f098307c25` on `main` need their own reconciliation and Stage 13 re-review and re-lock, under separate authorization.
- **SB-P-1.18:** `EIS18-CAB-02` and `EIS18-HLD-PQ14` reconciliation. SB-P-1.18 Stage 10 stays HELD.
- **SB-P-1.12 package PR #1120** stays separate.

## 6. Automation evidence

No check-run result is asserted in this draft. Mission Control states the result for the exact head it adopts. Check runs are repository health only. They prove no authorization, database or implementation behaviour.

## 7. Stage transition

**Proposed Stage 10 disposition for the Cabinet post-lock amendment: ACCEPTED**, for Mission Control adoption. It is not accepted while this record is a draft.

Under Source 18, the next gate is the separate Stage 11 re-lock disposition. It is recorded in `communication/missions/SB-P-1.14/mission-control/53-stage11-t6-cabinet-eis-relock.md` and carried in the same pull request as a separately identified disposition, after this one. That sharing is permitted only by Source 18 §3.3 and MC40 #6878974049. Mission Control must explicitly adopt this Stage 10 decision before the Stage 11 decision.

**STOP** if the Stage 11 record or the locked-status EIS differs substantively from the published blob `8fb3e8d30cb71f2adcbae138dd3eaadb7c42830e`. **STOP** if any substantive defect, refinement or missing review is found, or if any Cabinet normative wording is to change; that needs its own exact-delta review and any Founder approval Source 18 requires, and the gates are then separated.
