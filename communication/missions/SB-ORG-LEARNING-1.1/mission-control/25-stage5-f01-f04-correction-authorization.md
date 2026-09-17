# SMART BUSINESS MISSION CONTROL

# SB-ORG-LEARNING-1.1 — Stage 5 F-01 through F-04 Narrow Correction Authorization

**Mission:** `SB-ORG-LEARNING-1.1 — Smart Business Organizational Learning Engine — Implementation`

**Date:** 2026-09-17

**Authority:** Smart Business Mission Control

**Branch:** `mission/SB-ORG-LEARNING-1.1-stage2`

**PR:** `#589 — OPEN — NOT MERGED`

**Product Mission state:** `SB-P-1.12 — NOT ACTIVATED`

---

## 1. Publication verification

Mission Control verified Stage 5 publication commit:

`9a15466624dfb93b3878c74cd7f569890032e4c6`

The publication commit changed only:

- `communication/missions/SB-ORG-LEARNING-1.1/codex/08-stage5-independent-failure-path-assurance.md`;
- `communication/live/report.md`.

The durable verifier report preserves reviewed head:

`d1f5a429d36ddb62f215b5f7412a9ff06d5deab1`

and disposition:

`FAIL`.

PR #589 remains open and unmerged.

At Mission Control correction authorization, publication-head Application Build Assurance #197 and Markdown Quality Gate #1801 are successful. Publication-head Full Assurance #70 is still a redundant documentation-triggered run in progress and does not alter the verified Stage 5 FAIL or the correction authority below.

---

## 2. Accepted Stage 5 findings

Mission Control accepts the following findings as actionable:

### S5-F-01 — receipt physical-indirection bypass

Reconciliation receipt enumeration can follow a Windows junction / filesystem indirection from the configured receipt root to outside-root state, while Stage 1 receipt persistence/read machinery contains a physical-containment guard.

Required outcome:

- reconciliation receipt discovery and reads must preserve the same physical trust boundary;
- outside-root receipt state must never affect classification;
- ambiguity / physical-containment failure must fail closed.

### S5-F-02 — receipt-directory failures collapse to no receipts

Receipt-directory enumeration currently does not distinguish genuine absence from unsafe/unreadable enumeration, and receipt-shaped unexpected non-file entries can evade ambiguity detection.

Required outcome:

- only genuine directory absence may mean no receipts;
- `ENOTDIR`, permission/I/O failure, physical-indirection failure, and receipt-shaped unexpected entries must block receipt-dependent work;
- safe diagnostics only;
- ambiguity must reach the existing fail-closed reconciliation path before any work-producing state.

### S5-F-03 — envelope physical-indirection bypass

Lexical approved-location checking can be bypassed through a junction / filesystem indirection physically targeting content outside the approved repository-native root.

Required outcome:

- approved envelope location must be both lexically and physically contained;
- direct `--envelope` and `--envelopes-dir` paths must preserve the same physical boundary;
- recursive discovery must not traverse physical indirection outside the approved root;
- schema validity and evidence allowlisting remain separate controls.

### S5-F-04 — duplicate processing intent

Distinct valid envelope files representing one mission / closure processing identity can produce duplicate planned harvest intent.

Required outcome:

- equivalent envelopes must produce one deterministic work item;
- conflicting envelopes claiming the same mission + closure revision must fail closed rather than choose one silently;
- path-string deduplication alone is insufficient.

---

## 3. Correction authority

Disposition:

`STAGE 5 FAIL ACCEPTED — S5-F-01 THROUGH S5-F-04 NARROW CORRECTION AUTHORIZED`

Claude Code is authorized to correct only the four findings above and add the minimum focused tests/documentation required to prove them.

This is a correction inside the existing bounded reconciliation architecture.

It is not Stage 6 authority and it does not reopen Stage 2 or Stage 3.

---

## 4. Implementation direction

### 4.1 Reuse physical-containment logic

Do not create a weaker parallel filesystem-trust algorithm when the accepted Stage 1 receipt-store implementation already contains physical-containment hardening.

Prefer exposing/reusing the existing physical-containment primitive from `organizational-learning/lib/receipt-store.ts` with unchanged semantics, or factor the exact accepted behavior into a shared narrow helper if necessary.

Any shared-helper refactor must preserve existing Stage 1 behavior and tests.

### 4.2 Receipt discovery semantics

Receipt discovery must distinguish at least:

- mission receipt directory genuinely absent;
- directory present and safely enumerable;
- directory unsafe through physical indirection;
- enumeration failure / `ENOTDIR` / permission / I/O failure;
- receipt JSON file valid;
- receipt JSON file malformed/schema-invalid;
- receipt-shaped unexpected non-file entry.

Only the first case may truthfully produce an empty receipt set without an issue.

All unsafe/ambiguous cases must block new work and map to existing fail-closed reconciliation behavior.

### 4.3 Envelope physical containment

The approved location boundary must check the actual filesystem-resolved location before content is consumed.

The repository-approved root remains the existing bounded location. Do not broaden it.

Directory discovery must not recursively traverse a junction/symlink/reparse point whose physical target escapes the approved root.

### 4.4 Duplicate/conflicting envelopes

Before final work-item emission, group valid inputs by:

`mission_id + closure_revision`

For a group whose validated envelope semantics and computed processing identity are equivalent:

- emit one deterministic work item only;
- repeated input order or alternate equivalent file path must not change output.

For a group with material conflict under the same mission + closure revision — including differing pinned source snapshot, evidence-derived fingerprint, reopen/supersede semantics, disposition, or other validated closure semantics:

- emit no work-producing item for that conflicted identity;
- fail closed using safe deterministic rejected/conflict reporting;
- do not silently choose one envelope.

Do not solve S5-F-04 merely by locking later; the planner itself must not emit duplicate work intent.

---

## 5. Mandatory proof

The correction must independently prove at minimum:

1. outside-root receipt junction does not influence reconciliation;
2. Stage 1 receipt physical-containment behavior remains unchanged;
3. genuine missing receipt directory still means no receipts;
4. `ENOTDIR` or equivalent enumeration failure blocks work;
5. receipt-shaped non-file `.json` entry blocks work;
6. malformed/schema-invalid receipt still blocks work;
7. safe diagnostics do not echo raw unsafe content;
8. approved-prefix envelope junction to an external target is rejected for direct `--envelope`;
9. approved-prefix envelope junction to an external target is rejected for `--envelopes-dir`;
10. nested directory indirection during recursive discovery cannot escape the approved root;
11. genuine approved envelope continues to work;
12. two equivalent envelope files produce exactly one deterministic work item;
13. equivalent-envelope result is byte-stable across input order/replay;
14. conflicting envelopes for the same mission + closure revision produce zero work intent and an explicit safe conflict result;
15. existing Stage 2A real no-op fingerprint remains unchanged;
16. `NEW_CLOSURE_REVISION`, reopen/supersede, failed-retryable, intermediate recovery and lock ownership behavior remain intact;
17. candidate, promotion, context-pack and authority boundaries remain unchanged.

Use isolated/ephemeral fixtures. Never mutate genuine receipts, candidates, promotions, or historical evidence.

---

## 6. Not authorized

No automated semantic extraction.
No AI/model/provider integration.
No credentials.
No network retrieval.
No scheduler/cron/background worker.
No trusted publisher / PR creator.
No autonomous commit/merge.
No automatic promotion.
No `INSTITUTIONALISED`.
No `ORGANIZATION_WIDE`.
No Founder-approval claim.
No governance/Product Truth mutation.
No production/provider/customer mutation.
No dependency addition.
No `package-lock.json` change.
No workflow change unless separately authorized.
No Stage 6.
No merge.
No `SB-P-1.12` activation.

---

## 7. Verification and reporting

Run focused correction tests plus:

- all reconciliation tests;
- Stage 1 receipt-store/path tests affected by any shared-helper exposure/refactor;
- full Fast Tests;
- typecheck;
- ESLint / Prettier;
- build;
- Markdown Quality Gate;
- Full Assurance if applicable;
- real GitHub CI.

Do not claim CI success before completion.

Update the existing durable Stage 4/5 correction history without erasing prior FAIL evidence. Preferred new builder report:

`communication/missions/SB-ORG-LEARNING-1.1/claude-code/07-stage5-f01-f04-correction.md`

Update only the minimum builder section of `communication/live/report.md`.

Return and stop with:

`STAGE 5 F-01/F-04 CORRECTION REPORTED — MISSION CONTROL RE-REVIEW REQUIRED`

---

## 8. Retained boundaries

`STAGE 5 — CORRECTION IN PROGRESS`

`STAGE 6 — NOT AUTHORIZED`

`PR #589 — NOT READY TO MERGE`

`SB-P-1.12 — NOT ACTIVATED`
