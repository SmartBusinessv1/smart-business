# SMART BUSINESS — CLAUDE CODE STAGE 3B DETERMINISTIC CONTEXT-PACK PROOF

# SB-ORG-LEARNING-1.1 — Stage 3B: Deterministic Mission-Start Context-Pack Proof

**Mission:** `SB-ORG-LEARNING-1.1 — Smart Business Organizational Learning Engine — Implementation`
**Stage:** `3 — Human review/promotion and mission-start context-pack proof`
**Sub-gate:** `3B — Deterministic mission-start context-pack proof`
**Actor:** Claude Code — authorized context-pack proof builder
**Status:** `STAGE 3B DETERMINISTIC CONTEXT-PACK PROOF REPORTED — MISSION CONTROL REVIEW REQUIRED`
**Date:** 2026-09-17
**Repository:** `SmartBusinessv1/smart-business`
**Authorized branch:** `mission/SB-ORG-LEARNING-1.1-stage2`
**PR:** `#589 — OPEN — NOT MERGED`
**Controlling authorization:** `communication/missions/SB-ORG-LEARNING-1.1/mission-control/20-stage3a-acceptance-and-stage3b-context-pack-proof-authorization.md`
**Product Mission state:** `SB-P-1.12 — NOT ACTIVATED`

---

## 1. Objective

Prove deterministic mission-start context-pack construction from the four current mission-scoped `VALIDATED` promotion records only, using deterministic filtering (no semantic ranking, no AI judgment). This is a proof exercise against a synthetic profile; it activates no real mission and creates no authority.

---

## 2. Pre-execution verification

1. Fetched `origin`; confirmed branch `mission/SB-ORG-LEARNING-1.1-stage2`; fast-forwarded to `cb6b4ba` (3 new Mission Control commits: Stage 3A acceptance, Stage 3B handoff, and the authorization record) — inspected each before relying on it.
2. Confirmed PR #589 `OPEN`, unmerged, head exactly `cb6b4bac48dbb4c834b780a3db94eda2c6cb1181`.
3. Confirmed working tree clean before any action.
4. Read, in order: `communication/live/instruction.md`, `communication/live/report.md`, the Stage 3B authorization (`mission-control/20-...`), the Stage 3A durable report (`claude-code/04-...`), the Stage 3A authorization (`mission-control/19-...`), all four promotion-review artifacts, all four candidate artifacts, `lib/revision-hash.ts`, `lib/provenance-validator.ts`, `lib/screening.ts`, `schemas/promotion-review.schema.ts`, `schemas/candidate-learning-item.schema.ts`, and the final reconciled build plan's Sections 8, 13, and 14.

---

## 3. Synthetic mission-start profile used

Exactly the profile named in Mission Control's authorization — no other mission, class, system, or environment was used:

```json
{
  "missionClass": "operational",
  "systems": ["github-actions", "ci"],
  "environments": ["ci"],
  "relatedMissions": ["SB-OPS-CI-ARCHITECTURE-1.0"]
}
```

This is synthetic proof input. It activates no real Product Mission and creates no `SB-P-*` authority.

---

## 4. Implementation-authority decision and files created/modified

No existing repository machinery could construct a context pack (none existed), so the smallest repository-native deterministic helper was created, exactly matching the authorization's preferred minimal shape:

| Path                                                                                                         | Change   | Purpose                                                                                                                                                                                                                                                                                                                                                                                                                   |
| ------------------------------------------------------------------------------------------------------------ | -------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `organizational-learning/scripts/context-pack.mjs`                                                           | new      | Deterministic eligibility evaluator (`evaluateEligibility`), pure pack builder (`buildContextPack`), file loaders (`loadPromotions`, `loadCandidatesById`), and a thin CLI (`runContextPack`) reusing the already-proven `isMainModule()` guard pattern.                                                                                                                                                                  |
| `organizational-learning/tests/context-pack.test.ts`                                                         | new      | 17 focused tests: real-fixture eligibility (evidence re-pointed at an isolated ephemeral git repository, per Section 10), deterministic ordering, Candidate 3 preservation, candidate-only exclusion, stale-revision rejection (2 cases), scope exclusion, no-invented-institutionalization, supersession (synthetic negative case), determinism (in-process + real CLI process), screening, and CLI argument validation. |
| `organizational-learning/context-packs/README.md`                                                            | new      | States the directory's output-only, no-authority boundary.                                                                                                                                                                                                                                                                                                                                                                |
| `organizational-learning/context-packs/SB-OPS-CI-ARCHITECTURE-1.0/mission-start-profile-operational-ci.json` | new      | The real, committed proof output for the authorized synthetic profile.                                                                                                                                                                                                                                                                                                                                                    |
| `vitest.fast.config.ts`                                                                                      | modified | Added `organizational-learning/tests/context-pack.test.ts` to the Fast Gate's explicit include list (this file is an explicit path array, not a glob).                                                                                                                                                                                                                                                                    |

No dependency was added. `package-lock.json` is confirmed unchanged (`git status` shows no change to either `package.json` or `package-lock.json`).

**Design decisions taken, and why:**

- The core logic lives directly in `organizational-learning/scripts/context-pack.mjs` (not a new `lib/` file), matching both the authorization's literal preferred shape and this codebase's existing pattern of `harvest.mjs`/`validate.mjs` exporting their core logic (`runHarvest`/`runValidate`) directly from the CLI script file for test import.
- `evaluateEligibility`'s very first gate is `PromotionReviewSchema.safeParse` — the existing, unmodified, `.strict()` candidate/promotion contract itself performs the candidate-only exclusion (a raw `CandidateLearningItem` fails this parse outright, both for missing promotion-only fields and for carrying its own candidate-only fields that `.strict()` rejects as unrecognized). This reuses existing accepted validation machinery rather than inventing new shape-checking logic.
- Scope matching is performed against each promotion's **evidence** `scope` fields (`EvidenceScopeSchema`, already part of the accepted provenance contract) — not a new top-level "scope" field on the promotion record, since none exists. `mission_class` is accepted as profile input but is honestly noted as **not independently matchable** in the current contract (no `mission_class` field exists on `EvidenceScopeSchema`); this limitation is surfaced in the pack's own `profile.limitations` field rather than silently ignored or worked around by inventing a new schema field.
- Freshness surfaces only `promoted_at` and evidence `evidence_date` values already present on the approved promotion record. The pack builder never reads the system clock — `buildContextPack` is a pure function of its arguments, which is also what makes true byte-for-byte determinism possible without any timestamp-normalization caveat.
- `candidate_reference` (a small, clearly-labeled sub-object citing `evidence_strength`/`confidence` from the underlying candidate) is included per item for transparency, explicitly labeled "not independently reviewed and not reusable authority on its own" — this keeps the primary reusable-lesson text as the promotion's own human-approved `approved_scope`, never raw unreviewed candidate prose, per the "candidate-only items may appear only in clearly labelled candidate/review views" requirement.

---

## 5. Required proof cases and results

### 5.1 Eligible items (mandatory case 1)

All four current mission-scoped `VALIDATED` promotions are eligible under the authorized synthetic profile:

```text
reusable_learning: 4
excluded: 0
```

Verified independently via both the real CLI, run locally against the real repository with full git history (`node organizational-learning/scripts/context-pack.mjs --mission-class operational --system github-actions --system ci --environment ci --related-mission SB-OPS-CI-ARCHITECTURE-1.0`), and the committed test suite (which, per Section 10, exercises the identical logic against an isolated ephemeral repository so it does not depend on the ambient checkout's history depth). Every eligible item's `resulting_maturity` is exactly `"VALIDATED"`, `promotion_scope` exactly `"MISSION_SCOPED"`, `approving_authority.actor_class` exactly `"mission-control"`, and every one of its evidence references independently resolves `VALID` via the existing, unmodified `validateProvenanceReference`.

### 5.2 Candidate-only exclusion (mandatory case 2)

A raw candidate object (`candidate-01-two-tier-ci-architecture.json`, `maturity: "CANDIDATE"`) was fed directly into `evaluateEligibility`. Result: `eligible: false`, rejected at the `PromotionReviewSchema.safeParse` gate — the existing accepted contract itself, not new hand-rolled logic, performs this exclusion. No candidate file was modified to run this test.

### 5.3 Stale-revision rejection (mandatory case 3)

Two isolated, in-memory-only proofs, neither touching a real file:

1. Candidate 1's real promotion record was evaluated against an in-memory clone of candidate 1 with a single mutated field (`summary`). Result: `eligible: false`, `stale: true`, reason cites the hash mismatch. The real candidate file was re-read afterward and confirmed byte-for-byte unchanged.
2. Candidate 2's real promotion record was cloned in memory with its own `candidate_revision_hash` field replaced by 64 zeros. Result: `eligible: false`, `stale: true`. The real promotion file was re-read afterward and confirmed its `candidate_revision_hash` is unchanged.

### 5.4 No invented institutionalization (mandatory case 4)

- The rendered real-profile pack's full JSON was searched for the literal strings `"INSTITUTIONALISED"` and `"ORGANIZATION_WIDE"` — neither appears anywhere.
- A synthetic record with `resulting_maturity: "INSTITUTIONALISED"`, `promotion_scope: "ORGANIZATION_WIDE"`, and `approving_authority.actor_class: "mission-control"` (not `"founder"`) was fed into `evaluateEligibility`. It is rejected at the schema gate — `PromotionReviewSchema`'s own `superRefine` rule already makes this combination schema-invalid without Founder approval, so `evaluateEligibility` never even reaches its own (defense-in-depth, otherwise unreachable) authority-compatibility check.

### 5.5 Candidate 3's unresolved limitation (mandatory case 5)

Verified intact in the pack's actual output for `SB-OPS-CI-ARCHITECTURE-1.0-candidate-03-explicit-followup-retention-promotion-03`:

- `contradiction.status: "LIMITS_OR_CONTRADICTS_PRESENT"`, with the `LIMITS` reference's exact locator surfaced (`"## Carried follow-ups: four-item list with no branch-protection item and no statement addressing its omission"`).
- `candidate_reference.confidence: "MEDIUM"`.
- `approved_scope` verbatim contains: "...five items named at pre-merge acceptance, four at final post-merge closure, with the branch-protection-policy item's omission from the closure list left unexplained. This approval validates the observation itself, not any conclusion that the omitted item was resolved, superseded, or intentionally dropped..."

No truncation was applied before this content is exposed — `approved_scope` and `contradiction` are always present, unconditional top-level fields on every reusable-learning entry, not something a length limit could silently drop.

### 5.6 Scope exclusion (mandatory case 6)

A non-matching synthetic profile (`missionClass: "product-delivery"`, `systems: ["stripe","billing"]`, `environments: ["production"]`, `relatedMissions: ["SB-SOME-UNRELATED-MISSION"]`) deterministically excluded all four real promotions: `reusable_learning: 0`, `excluded: 4`, every exclusion citing "profile mission/system/environment scope does not intersect this promotion's evidence scope."

### 5.7 Supersession (mandatory case 7)

- Real case: all four current promotions have empty `supersedes`/`superseded_by` arrays; the pack surfaces this explicitly (`supersession: { supersedes: [], superseded_by: [] }`) rather than omitting the field when empty.
- Synthetic case: candidate 4's real promotion was cloned in memory with `superseded_by: ["some-future-promotion-id"]`. Result: `eligible: false`, `supersededByOthers: true`. The real promotion file was re-read afterward and confirmed its `superseded_by` remains `[]`.

### 5.8 Deterministic ordering and repeat-run determinism (mandatory cases 8-9)

- **Ordering:** `reusable_learning` is sorted by `promotion_id` (byte-order); verified the array's `promotion_id` sequence equals its own sorted copy.
- **In-process determinism:** `buildContextPack` invoked twice with identical arguments produces `JSON.stringify`-identical output.
- **Real CLI-process determinism:** the actual script was spawned as two separate, independent Node processes, each writing to its own temp directory. The two output files are byte-for-byte identical (`content1 === content2` in the test; independently reconfirmed by hand outside the test suite via `sha256sum`, both runs producing `8ed4d21272380d7ae5519241b9db67f89df416d40bf0d8c92f2b6b7f5ccb7967`).
- **Regression genuineness:** before finalizing, the stale-revision check (`!stale` term) and the scope-match check (`scopeMatches` forced to `true`) were each independently, temporarily disabled in the actual script, and the full test suite was re-run against each broken version. Exactly the 2 stale-revision tests failed when staleness was disabled; exactly the 1 scope-exclusion test failed when scope matching was disabled; no other test was affected in either case. The script was restored and confirmed byte-identical to its pre-break state (`diff` clean) before proceeding. This is recorded as evidence the tests would have caught these exact regressions, not merely that they pass now.

### 5.9 No self-evidencing (mandatory case 10)

Every evidence reference in every pack entry points only at the three original Stage 2 screened source objects (`communication/missions/SB-OPS-CI-ARCHITECTURE-1.0/mission-control/06-...`, `07-...`, `communication/archive/SB-OPS-CI-ARCHITECTURE-1.0/communication.md`) — the same set the Stage 2A receipt and every Stage 2B/3A artifact already used. No pack, candidate, promotion, receipt, or prior durable report is ever cited as evidence for a claim. `communication/live/**` was never read as semantic evidence.

---

## 6. Provenance and freshness presentation

Every reusable-learning entry carries a `provenance` array (`{path, status}` per evidence reference, `VALID` for all in the real run) and a `freshness` object:

```json
{
  "promoted_at": "2026-09-17T12:17:00Z",
  "evidence_dates": ["2026-09-16T00:00:00Z"],
  "note": "freshness reflects only the promoted_at/evidence_date fields already present on the approved promotion record; no independent re-verification-as-of-today is claimed"
}
```

No "verified as of today" or similar invented freshness claim is made anywhere in the pack — the builder function never reads the system clock. This is a deliberate limitation surfaced honestly, per the authorization's explicit instruction, rather than a manufactured freshness signal.

---

## 7. `context, not authority`

Every generated pack carries the top-level field `"authority_statement": "context, not authority"` verbatim. No entry contains a recommendation phrased as an instruction or as governance/execution authority — every reusable item is presented as `approved_scope` (a descriptive, already-approved observation), never as an imperative.

---

## 8. Screening

`runContextPack` screens its own rendered output with the existing, unmodified `runHeuristicScan`/`runScreeningSafely` before writing or printing anything, and fails closed (`exitCode: 1`, nothing written) on any non-`CLEAN` result, including `SCANNER_FAILED`/`SCANNER_UNKNOWN`. The real run's rendered output screened `CLEAN`, confirmed both by the CLI's own successful write and by a dedicated test asserting the CLI process exits `0` and produces non-empty output.

---

## 9. Local verification

- `npx tsc --noEmit` — clean.
- `npx eslint organizational-learning/` — clean.
- `npm run test:fast` — **274/274 passing**, 25 files (up from 257/24 — the 17 new Stage 3B tests, all 257 pre-existing tests unchanged).
- `npm run build` — succeeds.
- `npx prettier --check` on all new files — pass.
- Markdown Quality Gate on this durable report and the revised `communication/live/report.md` — PASS.
- `package-lock.json` — confirmed unchanged.

---

## 10. Real CI defect found and fixed: shallow-clone provenance dependency in the test suite

The first pushed commit's real CI (head `f012271`) reported **Fast Tests: FAIL**, 3 of 274 tests failing, all in `context-pack.test.ts`, all showing `eligible=0` where the local run showed `eligible=4`. This was investigated immediately rather than dismissed or silently re-run.

**Root cause:** `actions/checkout@v4` (used by every job in `build-assurance.yml`, with no `fetch-depth` override) defaults to a shallow clone (`fetch-depth: 1`) — only the tip commit's tree is fetched, not its ancestor history. The three failing tests each called `evaluateEligibility`/`buildContextPack` with `repoRoot` pointing at the real, shared repository checkout, using the real promotion records' evidence, which is pinned to the Stage 2A commit `b60741cce544adb713f7c384bbed09a05e23247e` — a commit from well before this PR branch's tip. Under a shallow clone that commit's object is simply not present, so `validateProvenanceReference` correctly, safely reported every evidence reference as unresolvable (`COMMIT_NOT_FOUND`), `provenanceComplete` was `false` for all four promotions, and all four were correctly excluded as `eligible: false`. **This is exactly the intended fail-closed behavior of the actual context-pack logic — the defect was in the test suite's environmental assumption that deep git history is always available, not in `evaluateEligibility`/`buildContextPack` themselves.**

This diagnosis was independently confirmed before writing any fix: a real `git clone --depth 1` of this exact branch was created locally, confirmed genuinely shallow (`git rev-parse --is-shallow-repository` → `true`), and confirmed unable to resolve the pinned commit (`git cat-file -e b60741cce...^{commit}` → `fatal: Not a valid object name`) — reproducing the exact CI failure mode on demand.

**Fix:** the affected tests were rewritten to follow this repository's own established Stage 1 convention — never depend on the real Smart Business repository's deep history in a test; use an isolated, throwaway git repository (`organizational-learning/tests/helpers/ephemeral-git-repo.ts`, already used throughout Stage 1's own git-plumbing tests) instead. Each affected test now:

1. builds a fresh ephemeral repository and commits the exact same three evidence files' current content (read from the real, currently-checked-out working tree, which is present regardless of clone depth — only the deep _history_ was the problem, not the current file content);
2. deep-clones the real promotion records and re-points each evidence reference's `commit_sha`/`blob_sha` at that ephemeral repository's own fresh values for the same path;
3. runs the identical `evaluateEligibility`/`buildContextPack`/CLI logic against `repoRoot: ephemeralRepo.root`.

This proves the exact same retrieval logic, with the exact same real evidence text, without depending on the ambient checkout's history depth. No CI workflow file was modified — editing `fetch-depth` for every job repository-wide was judged out of proportion to a Stage 3B test-suite fix and outside this round's authorized footprint. The negative-path tests that do not depend on provenance succeeding (candidate-only exclusion, stale-revision rejection, scope exclusion, the synthetic institutionalization/supersession cases) were confirmed to need no change — they were not among the 3 CI failures, and inspection confirmed their assertions do not depend on provenance resolution succeeding.

**Re-verification after the fix:** all 17 tests (including the rewritten ones) pass locally; `npx tsc --noEmit` and `npx eslint organizational-learning/` are clean; the full Fast Gate is 274/274 across 25 files; `npm run build` succeeds. The corrected commit was pushed and real CI was re-checked (Section 11).

## 11. Applicable CI

This round modifies `vitest.fast.config.ts` (adding the new test file to its explicit include list), which is itself named in `full-assurance.yml`'s selective path filter. Per the authorization's explicit instruction ("do not suppress a required workflow"), Full Assurance is therefore expected to actually trigger this round, unlike the candidate/promotion/document-only rounds in Stage 2B/3A. The exact-head result (Lint, Typecheck, Build, Fast Tests, Markdown Quality Gate, and Full Assurance) on the corrected, re-pushed commit will be confirmed once the real GitHub Actions runs actually complete, and is not claimed here before that.

---

## Required return summary

- **Proof result:** all mandatory Stage 3B proof cases (Section 5) demonstrated successfully.
- **Files changed:** 4 new files, 1 modified file (Section 4); 0 dependencies added; `package-lock.json` unchanged.
- **Real CI defect found and fixed:** the first pushed commit's real Fast Tests failed (3/274) due to a shallow-clone/deep-history dependency in the test suite, not in the actual retrieval logic (Section 10). Root-caused, reproduced locally, and fixed by rewriting the affected tests to use an isolated ephemeral git repository, matching this repository's own established Stage 1 testing convention. No CI workflow file was modified.
- **Eligible/excluded (real profile):** 4 eligible, 0 excluded.
- **Candidate exclusion result:** raw candidate object rejected at the existing `PromotionReviewSchema` gate.
- **Stale-revision result:** both synthetic mismatch cases correctly excluded/flagged stale; no real file touched.
- **Candidate 3 result:** `LIMITS`, `MEDIUM` confidence, and the five-vs-four unresolved omission are all surfaced verbatim, unconditionally, with no resolution claimed.
- **Supersession result:** real empty arrays honored and displayed explicitly; synthetic non-empty `superseded_by` correctly excludes, without touching the real record.
- **Determinism result:** byte-identical in-process and real-CLI-process repeat runs; two independent regressions (stale-check, scope-check) were each proven to be caught by the test suite before being restored.
- **Freshness/provenance result:** freshness limited to `promoted_at`/`evidence_date` already on the record, no invented verification date; all evidence independently provenance-`VALID`.
- **Screening result:** `CLEAN`; fail-closed behavior is structural (built into `runContextPack` itself).
- **Local verification:** typecheck/lint/Fast Gate (274/274)/build/Prettier/Markdown Quality Gate all pass.
- **Real CI:** to be confirmed on the pushed head, including a real Full Assurance run (not suppressed); not claimed as already complete in this report.
- **Scope confirmation:** no candidate or promotion record was modified; no `INSTITUTIONALISED`/`ORGANIZATION_WIDE`/Founder-approval claim; no semantic ranking; no real mission activation; no Stage 4 work; no background automation or autonomous writer; no dependency/lockfile change; PR #589 not merged; `SB-P-1.12` not activated.

---

## Stop statement

**STAGE 3B DETERMINISTIC CONTEXT-PACK PROOF REPORTED — MISSION CONTROL REVIEW REQUIRED**

Only the authorized Stage 3B deterministic context-pack proof was performed, against the synthetic profile Mission Control specified, using only the four current mission-scoped `VALIDATED` promotion records as eligible reusable learning. No candidate or promotion record was modified. No semantic ranking was performed at any point — every inclusion/exclusion decision is a plain, explainable structural check. Candidate 3's documentary inconsistency remains visibly unresolved. No real mission was activated, no Stage 4 work was begun, and no `SB-P-1.12` activation occurred.
