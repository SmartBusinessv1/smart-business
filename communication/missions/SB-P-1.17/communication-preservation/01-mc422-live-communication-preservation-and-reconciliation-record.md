# SB-P-1.17 — MC-422 Live Communication Preservation and Reconciliation Record

**Mission:** SB-P-1.17 — Manager Operations\
**Authority:** MC-422A (conversation-source), under the AI Communication and Handover Protocol v1.1, `communication/README.md` and Source 18 v1.2\
**Prepared by:** Claude Code, Documentation Actor\
**Baseline:** `main@4a0047ab526c76129607dda31b2da357ea3dd7ce` (PR #1015 merge), verified 2026-10-22\
**Status:** PROPOSED — effective only after Founder human merge and Mission Control review\
**Implementation Authorization:** WITHHELD — IMPLEMENTATION NOT AUTHORIZED.

## 1. Live folder found at the baseline

| Live files | Mission | Added | State | Action under MC-422A |
|---|---|---|---|---|
| `instruction.md`, `report.md` | SB-P-1.17 | PR #985, merge `7cd78f08af99e5fdb47ef3ca0bbcc70d14bc2f95`, 2026-10-19 | Stale: a *proposed* Stage 1 documentary entry at `main@7b0b88d8`. The mission has since passed Stages 1–7 | Preserved byte-for-byte (Section 2), then reused in place as a current-pointer pair (Section 3) |
| `instruction1.51.md`, `report1.51.md` | SB-P-1.17 | PR #999, merge `4802e34c9438b96f2b57e3953ebf4a0830ecbf28`, 2026-10-20 | MC-329 independent Gate 10 dispatch. The report is a provisional placeholder ("AWAITING SPECIALIST EXECUTION") | **Unchanged** (Section 4) |
| `instruction1.1.md` to `instruction1.50.md`; 38 matching reports (no report for 1.9, 1.12 to 1.18, 1.31, 1.32, 1.41 and 1.49) | SB-P-1.12 | 2026-09-26 to 2026-10-04 | Another mission's numbered chain | **Unchanged.** Outside MC-422A scope (Section 5) |

No other file is in `communication/live/`.

## 2. Preserved historical live pair

These are **historical proposed Stage 1 communication**. They record a proposal made at `main@7b0b88d8bc5fabf7873ef56f2c6884763b3f5bcb`. They do not show that the proposed instruction was executed as written, and no report answering them is reconstructed.

| Source path at baseline | Git blob | Bytes | Preserved copy | Copy's Git blob |
|---|---|---|---|---|
| `communication/live/instruction.md` | `74882b22be3e564afe67e843c05b4a9f9b837841` | 1,564 | `communication-preservation/legacy-live-instruction-stage1-entry.snapshot.md` | `74882b22be3e564afe67e843c05b4a9f9b837841` |
| `communication/live/report.md` | `f7c2500285cafb7521f87025491672acfc9dfd1e` | 1,389 | `communication-preservation/legacy-live-report-stage1-entry.snapshot.md` | `f7c2500285cafb7521f87025491672acfc9dfd1e` |

- **Byte-identical.** Each copy was written from `git show origin/main:<path>`, and the copy's Git blob equals the source blob.
- **Not edited.** The snapshots keep their original "PROPOSED" status lines.
- **History intact.** Git history at `4a0047ab` and earlier still holds the originals.

**Duplicate check.** No file on `main` had either blob before this record. Earlier preservation records cover different content:

- `SB-P-1.16/communication-preservation/` holds the SB-P-1.16 pair that PR #985 replaced (blobs `330ccb6f` and `57abacbc`).
- `SB-P-1.15/communication-preservation/` holds the MC-29 pair (MC-94).

None of them is duplicated or contradicted here.

**What happened next to the proposal.** This is from repository evidence, not from the snapshots:

- PR #985 was merged.
- The Stage 1 specialist inventory return followed in PR #986, and the Intake Pack in PR #987.
- Stage 2 was authorized in PR #988.

## 3. Reuse of the base pair

**Precondition: met.** Protocol §27 (Recurring Exchange) and `communication/README.md` allow the base pair to be reused in place once the preceding content is durably recorded in the mission record. Section 2 does that.

**Closure templates: not used.** Restoring the base templates is reserved for closure, after reconciliation, archive creation and archive verification (protocol §26, §27; `communication/README.md`). SB-P-1.17 is not closed, so the base pair was **not** restored to closure templates.

Both files now hold an accurate current-pointer state:

- **Instruction:** "NO ACTIVE INSTRUCTION — CURRENT-POINTER STATE". No recipient, and it activates no work.
- **Report:** "NO ACTIVE REPORT — CURRENT-POINTER STATE", addressed to Mission Control.
- **Content of both:** they name the mission and its state, point to `communication/missions/SB-P-1.17/README.md`, and give the snapshot paths and blobs.

The two files are consistent: there is no active instruction and no pending report. They activate no specialist task.

## 4. Pair 1.51 (MC-329): not reconciled here

**What the repository shows.** `instruction1.51.md` dispatched the independent Gate 10 source-first review (MC-329). The MC-393 record (PR #1009) lists it as "Independent Gate 10 review dispatch | MC-329 | PR #999, `4802e34c`".

**What the record shows.** The independent returns arrived by Founder relay as MC-333, MC-334, MC-336, MC-338, MC-340 and MC-342. Mission Control transcribed them in `mission-control/11-mc349-independent-findings-evidence-packet.md` (PR #1000). Gate 10 then passed under MC-393.

**What remains.** `report1.51.md` was never updated and still reads "AWAITING SPECIALIST EXECUTION — NOT A VERIFICATION RESULT".

It is left unchanged because:

- protocol §27 (Closure-State Reconciliation) reconciles provisional live reports only after closure is explicitly declared;
- protocol §26 and §27 remove numbered live files only after archive verification.

Neither condition holds, so this item stays an **open archival exception** for SB-P-1.17 closure.

## 5. SB-P-1.12 numbered chain: out of scope

Pairs `1.1` to `1.50` belong to SB-P-1.12. MC-422A limits Git scope to the two base files and SB-P-1.17 records, and forbids changes to unrelated missions. They are recorded here only so that SB-P-1.17's closure does not mistake them for its own exchange. Their archive is a matter for SB-P-1.12 or Mission Control.

## 6. Compliance assessment

| Requirement | Result |
|---|---|
| Former live bytes preserved | YES. Both snapshots have blobs equal to the sources |
| Exact provenance recorded | YES. Sections 1–2: paths, blobs, sizes, PR, merge, date and baseline |
| No historical instruction or report silently erased | YES. The originals are preserved and stay in Git history. Pair 1.51 and pairs 1.1–1.50 are unchanged |
| No premature formal archive or mission closure | YES. Nothing is written to `communication/archive/`, there is no Final Reconciled Closure and no templates are restored. The mission is not marked closed |
| No unauthorized live instruction activated | YES. The pointer instruction has no recipient and requests no work |
| No existing specialist report altered | YES. `specialists/` is unchanged |
| Mission stage | Stage 8 Founder approval pending |
| Blueprint | NOT LOCKED. The Blueprint file is unchanged |
| EIS and implementation holds | Unchanged. No EIS; Implementation Authorization WITHHELD |

## 7. Open exceptions

1. **Pair 1.51.** The provisional `report1.51.md` must be reconciled at SB-P-1.17 closure.
2. **Pairs 1.1–1.50.** The SB-P-1.12 chain is still in `communication/live/`, against the default rule of no long-lived numbered chains (protocol §27). Its owner is SB-P-1.12.
3. **Conversation-source records.** Mission Control decisions that exist only in conversation (MC-418 among them) are indexed in `decision-log.md` without their text.

**STOP FOR MISSION CONTROL REVIEW AND FOUNDER MERGE.**
