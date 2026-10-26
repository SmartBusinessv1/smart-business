# SB-P-1.18 — Stage 3 Founder Decision Gate and F-2 Record Publication Authorization

**Status:** PROPOSED — effective only after Founder human merge and Mission Control canonical-main verification.
**Mission:** SB-P-1.18 — Controlled Business Add-ons
**Lifecycle:** Source 18 v1.2 Stage 3 — Founder Decision Gate — **TRIGGERED; OPEN**
**Owner:** Mission Control. Prepared as documentary assistance by Claude Code, SB-P-1.18 Definition Actor, under MC-523
**Authority:** Source 18 v1.2 §3.2 items 5 and 10, §3.3 items 1–6, §4.3, Stage 3; Communication Protocol v1.1 §16, §16.1, §21; Founder F-2 selection (MC-520); MC-521 to MC-523
**Baseline:** `main@650249b855a7a1460c9b8d4575c68e52cddeede1` (PR #1080 merge)
**Implementation Authorization:** WITHHELD — IMPLEMENTATION NOT AUTHORIZED.

This record is a governance prerequisite. It amends no Product Truth, Source, contract, Build Plan or FCTM row.

## 1. Stage 2 baseline

- **Canonical Stage 2 Truth Pack:** `communication/missions/SB-P-1.18/claude-code/03-` to `09-` and the live report. Founder-merged in PR #1080 as `main@650249b8`, at 2026-10-25T17:11:53Z. The merged content equals the reviewed head `4d141b323c9f822f29f00099782bd03d5f8c913e`, which carries the MC-510 correction (MC508-F01, MC508-F02).
- **FCTM at baseline:** 764 rows. `IN SCOPE` 590, `ASSIGNED TO LATER MISSION` 12, `DELEGATED` 77, `NOT APPLICABLE` 27, `OUT OF BUILD SCOPE` 48, `UNRESOLVED FOUNDER DECISION` 8, `ESCALATED` 2 (`1-§14-5`, `22-§16-6`).
- **Mission Control acceptance:** Mission Control accepted the Stage 2 Truth Pack as the basis for Stage 3 and directed Stage 3 Founder Brief preparation (MC-513A). The acceptance applies to the documentary Truth Pack only. It is not locked Product Truth, implementation evidence or Stage 3 completion.

## 2. Independent verification and its limitations

| Review | Result | Stated limitation |
|---|---|---|
| MC-507DS (PR #1080, head `3801f588`) | Accepted for further independent source review; both `ESCALATED` rows located; Stage 3 confirmed triggered | The 627 + 67 unit inventory and the 33 inherited rows were produced by the Definition Actor; complete independent set comparison and per-row checks not then certified |
| MC-507DT (same head) | FCTM structural check PASS: 764 unique rows, counts confirmed, all rows cited, all 12 later-mission rows name SB-P-1.20; section counts C01 = 31, C06 = 17, C16 = 23 | Structural, not complete semantic certification; GitHub file evidence used without a full local checkout |
| MC-508 semantic findings; MC-509 disposition; MC-510 correction (head `4d141b32`) | Findings MC508-F01 (permissive examples) and MC508-F02 (`1-§4-7`, and `1-§30-2` commitment) corrected; counts reconciled | The independent review examined selected high-risk source obligations, permissive-mechanism semantics, inherited/delegated ownership relationships and cross-mission boundaries. It did not independently reproduce the complete 627 primary plus 67 touched delegated source-obligation inventory. Subsequent MC-511 review verified all 34 primary acceptance scenarios and targeted high-risk clauses, but did not perform a fresh 764-row semantic census or exhaustively re-audit all 33 inherited and 77 delegated/reverse-dependency relationships. Stage 2 was accepted within these disclosed limits. |
| Independent Engineering F-2 governance verification (MC-521/MC-522) | The F-2 Option A treatment (T2 conflict; T7 reduction) verified | Independent Engineering verified the Founder's stated selection of Option A, its T2 source-conflict treatment, its T7 commitment-reduction classification and preservation of the relevant privacy, location and mission-assignment boundaries. This was documentary governance verification, not qualified legal/privacy certification, implementation testing, FCTM reconciliation or canonical publication. F-2 remains ineffective as a canonical Founder Product Decision Record until its prescribed human merge. |

These are inputs to Mission Control's dispositions. None is a Founder decision.

## 3. Stage 3 gate status

- The Founder Decision Gate is **triggered**. The FCTM holds two `ESCALATED` rows, so a `NOT TRIGGERED` record is not permitted (Source 18 Stage 3).
- The triggering questions are F-1 to F-5, as framed in the Mission Control-accepted Founder Brief (MC-516, corrected under MC-518, SHA-256 `372e81f97e9c6e19a23c644996bfaca526a6b244fe19642654c01079a1eff52d`).
- Stage 3 **may proceed through individually recorded Founder decisions**. Source 18 Stage 3 requires a decision record "for the triggering items only" and does not require one consolidated document. Canonical precedent records decisions individually: `17:FPDR-7` (PR #1002) and `16:FPDR-10` (PR #971).
- Each decision is effective only when its record is human-merged (Source 18 §3.3 item 4). If any trigger is still undecided, artifacts that depend on it stay stopped (§3.3 item 5).

## 4. Founder decision F-2

### 4.1 Verbatim Founder statement (MC-520)

> "Founder F-2 decision: I select Option A. Please record the decision for Mission Control review, including its Source 09/11 and T7 consequences. Do not make Git changes yet."

### 4.2 The Option A text that the selection refers to (accepted brief, not the Founder's words)

The accepted Founder Brief (§3, F-2, item 7(A)) describes Option A as:

> *"I approve reducing the Source 09/11 live-tracking step for SB-P-1.18: delivery visibility is live order/delivery status plus point-in-time location at destination and proof. Location-based live tracking is not committed in Phase 1 and needs a separately approved future purpose under Contract 22 §16."*

This is the brief's proposed decision wording. The Founder's words are those in §4.1.

### 4.3 Mission Control's interpretation (not the Founder's words)

- **Classification.** The selection resolves a **T2** conflict between approved sources:
  - on one side, Source 09 v3.0 pilot scope ("live tracking") and the Source 11 add-on flow ("Live tracking (with geofencing where applicable for authorised delivery operations)");
  - on the other, Contract 01 §14 b4 (permitted only "if separately designed") and Contract 22 §16 (point-in-time approved uses).

  It is also a **T7** scope reduction: an approved Source 09/11 requirement is reduced under the classification lock (Source 18 §3.2 item 5). It does not reinterpret the sources, and order-status updates are not treated as satisfying Source 11 under existing truth.
- **Effect.** Mandatory Phase 1 location-based live GPS movement tracking is intentionally removed from SB-P-1.18. Order and delivery status, and purpose-limited point-in-time location at destination and proof, are preserved. Any future location-based live tracking needs a separately approved purpose under Contract 22 §16 b4. Default continuous staff surveillance stays rejected (C1 §14 p3–p4; C22 §16 p3; BP §16 b3; GPCV §9 b3).
- **No assignment change.** No row moves to another mission.

### 4.4 Git boundary of the selection

The Founder's "Do not make Git changes yet" applied when the selection was made. **No Git work is inferred from the selection.** Publishing this record needs the separate, explicit Mission Control Git-write authorization described in §7. The later F-2 publication is permitted only under §8, after this record is Founder-merged and verified and its stated prerequisites are met.

### 4.5 Proposed decision identifier

`18:FPDR-2` is the proposed canonical identifier, with the alias `SB-P-1.18 / F-2`. It is verified unused on `main@650249b8`. It follows the namespaced `NN:FPDR-n` convention and matches the brief question number. `18:FPDR-1`, `-3`, `-4` and `-5` are reserved for F-1, F-3, F-4 and F-5, without presuming any outcome.

## 5. Questions that remain unresolved

| Question | State | Preserved condition |
|---|---|---|
| F-1 — location purpose, access expiry, retention and erasure | **Unresolved**; `22-§16-6` stays `ESCALATED` | **Qualified Indian legal/privacy advice is a prerequisite to a binding Founder decision.** No retention number may be proposed or applied before it |
| F-3 — customer-facing interactions before SB-P-1.20 (T7, 22 rows) | **Unresolved** | The 12 existing SB-P-1.20 assignments are unchanged |
| F-4 — permissive mechanisms (10 rows) | **Unresolved** | `17:FPDR-7` is not applied to SB-P-1.18 |
| F-5 — overtime records | **Unresolved** | Founder confirmation and employment/payroll-law validation preserved |

No decision beyond F-2 is presumed, narrowed or recorded by this authorization.

## 6. Prohibitions until separately authorized

- **No FCTM reconciliation.** `1-§14-5` stays `ESCALATED` and `22-§16-11` stays held until a separate Mission Control reconciliation authorization is merged after `18:FPDR-2` is effective.
- **Untouched:** Sources 09 and 11, Contracts 01 and 22, the Build Plan, the mission README, `communication/live/instruction.md` and the numbered historical live files.
- **No later-stage work:** no Blueprint, EIS, code, SQL, migration, provider, deployment, repository-settings change, Track B work, or any SB-P-1.19 or SB-P-1.20 work.

## 7. Proposed publication scope for this record (not an effective grant)

**This section grants no Git-write authority.** This record is a proposal and is not effective until it is merged, so it cannot authorize its own publication. Publishing this file needs a **separate, explicit Mission Control Git-write authorization** under Communication Protocol §16 and §16.1, issued before any write. That authorization must name the actor, branch, file, operations and stop conditions. The table below is the scope proposed for that authorization. Until it is issued, no branch, commit, push or PR may be made.

The proposed scope is:

| Item | Value |
|---|---|
| Actor | Claude Code, SB-P-1.18 Definition Actor, acting as documentary preparation assistant |
| Branch | `mission/SB-P-1.18-stage3-authorization`, created from verified `main@650249b8` |
| File | `communication/missions/SB-P-1.18/mission-control/06-stage3-founder-decision-gate-and-f2-record-publication-authorization.md` (new) |
| Operations | Fetch; fast-forward only; create the branch; stage exactly this file; Markdown, whitespace and secret checks; one commit with a `docs(SB-P-1.18):` message and the standard Co-Authored-By trailer; push this branch; open one draft PR to `main` |
| Stop conditions | `main` or the branch moved from the verified baseline; any staged path other than this file; a failing check; a merge conflict; revocation; a Protocol §21 stop |
| Expiry | First draft PR submission |
| Excluded | Any other file; merge; force push; any change after the PR is opened, unless a fresh grant is given |

The Founder alone human-merges. This record becomes effective on that merge and on Mission Control's verification on `main`.

## 8. Subsequent F-2 publication authorization

**Effectiveness.** This section grants nothing until **all** of the following are true, in order:

1. The Founder has human-merged this record into `main`.
2. Mission Control has verified this record on `main` and recorded that verification, naming the merge commit and this file's blob.
3. Mission Control has issued the handoff that activates this section.

**Prerequisite checks by the actor, before any write:**

- (a) fetch and confirm that `main` contains the verified merge commit, and that this file's blob on `main` equals the blob Mission Control verified;
- (b) confirm that the brief file to be published is byte-identical to SHA-256 `372e81f97e9c6e19a23c644996bfaca526a6b244fe19642654c01079a1eff52d`;
- (c) confirm that the Founder statement in the decision record matches §4.1 exactly;
- (d) confirm that the three new files, (a)–(c) in the table below, do not already exist on `main`. `communication/live/report.md` exists and is replaced, preserving its prior blob in history.

If any check fails, stop and report; do not write.

Once these conditions are met, Claude Code may prepare one draft PR with the details below.

| Item | Value |
|---|---|
| Branch | `mission/SB-P-1.18-stage3-f2-decision-record`, from verified `main` |
| Files (exactly four) | (a) `communication/missions/SB-P-1.18/claude-code/10-stage3-founder-decision-brief-and-annex.md`, the accepted brief, byte-identical to SHA-256 `372e81f97e9c6e19a23c644996bfaca526a6b244fe19642654c01079a1eff52d`; (b) `communication/missions/SB-P-1.18/claude-code/11-stage3-founder-product-decision-record-18-fpdr-2.md`; (c) `communication/missions/SB-P-1.18/decision-log.md` (new; registers `18:FPDR-2` only); (d) `communication/live/report.md` (return pointer) |
| Record content | §4.1 verbatim, kept apart from §4.2 and §4.3; §5 preserved; affected rows `1-§14-5` and `22-§16-11` listed as accounting only |
| Operations | As in §7, for these four paths |
| Stop conditions | As in §7. Also stop if the Founder statement in the record differs from §4.1 |
| Review and merge | Mission Control substantive review; independent re-verification; Founder human merge. `18:FPDR-2` becomes effective at that merge |
| Expiry | First draft PR submission |

## 9. Stage 3 status

**STAGE 3 REMAINS OPEN** until F-1, F-3, F-4 and F-5 are each decided by the Founder and recorded and merged, and Mission Control records Stage 3 completion. Blueprint drafting (Stage 4) is not authorized.

**STOP — MISSION CONTROL REVIEW, FOUNDER HUMAN MERGE AND POST-MERGE VERIFICATION REQUIRED.** Implementation Authorization: WITHHELD.
