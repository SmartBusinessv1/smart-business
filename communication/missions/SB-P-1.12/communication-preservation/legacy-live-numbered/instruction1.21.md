# SMART BUSINESS MISSION CONTROL — MC-137

# SB-P-1.12 — Targeted Security Review of R-2 §33 Stage 2 / Stage 7 Candidate

**Mission:** SB-P-1.12 — Authority, Identity & Product Surface Foundation  
**Sender:** Smart Business Mission Control  
**Recipient:** Security & Permissions Architecture — existing MC-33-appointed specialist room  
**Date:** 2026-09-30  
**Status:** DRAFT — NOT EFFECTIVE UNTIL THIS INSTRUCTION PR IS HUMAN-MERGED TO CANONICAL `main` AND MISSION CONTROL VERIFIES THE MERGE  
**Repository:** `SmartBusinessv1/smart-business`  
**Communication pair:** `communication/live/instruction1.21.md` → `communication/live/report1.21.md`

## 1. Purpose

Perform a targeted independent Security & Permissions Architecture review of the MC-136 R-2 §33 Stage 2 / Stage 7 candidate in PR #679.

This is a documentary/security-feasibility review only.

Do not redesign Product Truth, implement a fix, modify schema/SQL/migrations/runtime, merge PR #679, close ESC-1, close R-2, or advance Stage 8.

## 2. Exact review target

PR:

`#679`

Exact head:

`193ebce8152389b33150e8b75543acd2c1234552`

Expected state at instruction preparation:

`OPEN / DRAFT / UNMERGED / MERGEABLE`

Exact candidate blobs:

- Stage 2 obligation inventory:
  `5a2ef63c21f4898263444e94390e5ab06306051d`
- Stage 7 engineering review report:
  `617fadfe19a8a6657ec40cfacb4fbf8ecc04e1e3`
- Blueprint v0.7:
  `a9607bf3e9f7d1f025c4ad7abe73c2ac6c3b7fd6`
- MC-136 completion report:
  `a07f8d466cbe41fdd237e60efb810894372b6b99`
- live report:
  `24aae4099bbe9556e126324620da885639cac057`

Canonical baseline main used by the candidate:

`62514a23f946e0bba42b8494d2290817eec0d7ae`

Canonical unchanged sources:

- FCTM:
  `1650ff95b2fbdd63e1b0f60d8135da14a7a9d259`
- Contract 22:
  `61e1bb91970be410e9daf1d3b80875c35f29db04`
- accepted targeted Security report:
  `communication/live/report1.19.md`
  blob `4665cb73472247a65433ac9e9da2594b60ea9700`

Exact-head CI already independently verified by Mission Control:

- Team LIPS Markdown Quality Gate #2117 — SUCCESS
- Team LIPS Application Build Assurance #501 — SUCCESS

If PR #679 head or any named candidate/source blob changes before review, STOP and report drift.

## 3. Required hydration

Before reviewing, read at minimum:

- `communication/live/instruction1.9.md`
- `communication/live/instruction1.20.md`
- `communication/live/report1.19.md`
- PR #679 exact candidate files
- canonical FCTM
- canonical Contract 22 §33
- Founder Records 05, 06 and 07
- canonical Stage 7 Security reports under `communication/missions/SB-P-1.12/specialists/`
- relevant Blueprint §15, §20 and §21
- the exact migration evidence needed to verify the cascade observations.

Hydrate from canonical repository truth, not from stale chat summaries.

## 4. Mission Control ESC-1 classification

Mission Control has classified the newly observed repository path:

`transactions.creator_id → auth.users ON DELETE CASCADE`

together with the dependent:

`transaction_correction_events → transactions ON DELETE CASCADE`

as an **additional concrete technical manifestation of the existing ESC-1 open T8 security/integrity finding**.

It is not a new Product Truth escalation and does not require a new Founder product decision at this stage.

The classification is based on the fact that:

1. the triggering class is the same uncontrolled Auth-user deletion path;
2. the harm is the same already-prohibited cascade/durability failure class;
3. Founder Record 05 and Contract 22 §33 already require identity deletion not to destroy independently retained business/history records, including transferred-business history;
4. the existing FCTM/Blueprint already hold uncontrolled `auth.users` cascades and historical durability under ESC-1.

The Security room must independently assess the security correctness and consequences of that classification. If the evidence shows a materially distinct security problem that should not remain under ESC-1, say so explicitly and explain why. Do not create a new Founder decision yourself.

## 5. Review scope

Review only the MC-136 delta and its security implications.

### A. Stage 2 source accounting

Verify whether the candidate's Contract 22 §33 accounting is materially faithful:

- 43 source pointers;
- 39 FCTM representation rows;
- all four representation differences explicitly explained;
- current totals 414 source pointers / 412 FCTM rows;
- Contract 22 totals 155 / 151;
- no missing obligation;
- no orphan FCTM row;
- no unauthorized FCTM change.

Security need not re-perform the full historical Stage 2 audit unless the delta reveals a material issue.

### B. The 39 new Stage 7 findings

Review exactly:

`22-§33-1` through `22-§33-39`

Candidate totals:

- 3 `FEASIBLE`
- 36 `CONDITIONAL`
- 0 `HELD`
- 0 `BLOCKED`
- independent review: 37 `PENDING`, 2 `N/R`

Verify for each security-relevant row that:

- the feasibility classification is not overstated;
- ESC-1 dependencies are correctly carried;
- legal/privacy/retention provisional boundaries are preserved;
- no runtime or production claim is made;
- no transfer-isolation, former-Owner denial, audit/history, deletion-proof, direct-delete or cascade guard is weakened;
- any row that should be `HELD` or `BLOCKED` is identified precisely.

### C. Prior 228 findings

Verify the claim that the earlier 228 Stage 7 register findings need no substantive change.

Do not repeat the entire historical review if byte-equivalence and unchanged substance can be established efficiently.

Candidate combined totals:

- 267 / 267 IN SCOPE rows accounted for;
- 179 `FEASIBLE`
- 87 `CONDITIONAL`
- 0 `HELD`
- 1 `BLOCKED` — `22-§20-2`
- 227 `PENDING`
- 40 `N/R`

### D. E16 / additional Auth-user cascade evidence

Independently verify the repository evidence for:

- `transactions.creator_id REFERENCES auth.users(id) ON DELETE CASCADE`;
- `transaction_correction_events.transaction_id REFERENCES transactions(id) ON DELETE CASCADE`;
- the consequence that Auth-user deletion can initiate deletion of transactions created by that person, including in a business that may later be transferred.

Assess:

1. whether MC-137's classification under existing ESC-1 is security-sound;
2. whether the candidate correctly scopes the risk without claiming runtime proof;
3. whether any previous favorable Security finding must change;
4. whether any new row-level `BLOCKED` or `HELD` status is required;
5. whether PR #679 needs any finding-scoped correction before it can be accepted.

Do not propose or implement a migration/remediation design in this review.

## 6. R-2 disposition boundary

This review is the independent Security gate required by MC-136.

The Security room may recommend whether the **R-2 source-coverage/security-review conditions** are satisfied documentary-wise, but it must not close R-2.

Mission Control alone will decide the later R-2 gate outcome after:

- exact-candidate review;
- this Security review;
- any required corrections;
- canonicalization through human merge;
- post-merge verification.

Residual ESC-1, legal/professional-validation, runtime, G-6/T4 and production holds are separate from the narrow R-2 source-coverage gate.

## 7. Required report

Return through exactly:

`communication/live/report1.21.md`

The report must state:

- exact PR/head and candidate blobs reviewed;
- exact canonical source blobs used;
- Stage 2 source-accounting finding;
- per-row or grouped security finding for the 39 §33 rows with any exceptions named exactly;
- whether 3/36/0/0 is acceptable or requires correction;
- whether 179/87/0/1 and 227/40 combined totals are acceptable;
- whether the prior 228 findings remain substantively unchanged;
- independent verification of the `transactions.creator_id` and correction-event cascade;
- disposition of MC-137's ESC-1 classification;
- whether any prior Security finding must change;
- whether any new material security regression exists;
- whether PR #679 is security-acceptable for Mission Control disposition;
- R-2 recommendation status;
- continuing holds and evidence limitations.

Do not state that PR #679 is merge-authorized. Mission Control dispositions the report.

## 8. Git authority

After this instruction is human-merged and Mission Control verifies the merge, Mission Control authorizes the existing MC-33-appointed Security & Permissions Architecture room under work package:

`SB-P-1.12-WP-R2-S33-SECURITY-REVIEW`

Repository:

`SmartBusinessv1/smart-business`

Writable path:

`communication/live/report1.21.md`

only.

Permitted Git operations:

- fetch/read;
- create one mission branch from verified canonical `main`;
- create/edit exactly the report path;
- run applicable Markdown/whitespace/secret checks;
- commit;
- push only the mission branch;
- open one DRAFT PR to `main`;
- report branch, commit and PR to Mission Control.

No direct push to `main`. No self-merge.

This authority ends on the earliest of:

- Mission Control disposition of the Security report PR;
- drift in PR #679 head or any named reviewed blob;
- mission pause/revocation/supersession;
- a repository Protocol stop event;
- `2026-10-18T23:59:59Z`.

## 9. Holds

Until Mission Control accepts and canonicalizes the Security result:

- PR #679 remains DRAFT / DO NOT MERGE.
- R-2 remains OPEN.
- ESC-1 remains OPEN T8, now including the additional transaction-history cascade evidence unless Security finds the classification unsound.
- `22-§20-2` remains BLOCKED / IN SCOPE.
- G-6/T4 remains UNVERIFIED.
- no Stage 8 / Blueprint lock / EIS / implementation / schema / SQL / migration / personal-identity-deletion runtime / production authority.

**STOP FOR MISSION CONTROL DISPOSITION.**
