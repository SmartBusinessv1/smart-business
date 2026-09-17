# SMART BUSINESS — CLAUDE CODE STAGE 2B SUPERVISED CANDIDATE EXTRACTION

# SB-ORG-LEARNING-1.1 — Stage 2B: Supervised Semantic Candidate Extraction

**Mission:** `SB-ORG-LEARNING-1.1 — Smart Business Organizational Learning Engine — Implementation`
**Stage:** `2 — Closed-mission proof and supervised candidate extraction`
**Sub-gate:** `2B — Supervised semantic candidate extraction`
**Actor:** Claude Code / authorized AI synthesis session
**Status:** `STAGE 2B F-01/F-02 CORRECTION REPORTED — MISSION CONTROL RE-REVIEW REQUIRED`
**Date:** 2026-09-17
**Repository:** `SmartBusinessv1/smart-business`
**Authorized branch:** `mission/SB-ORG-LEARNING-1.1-stage2`
**PR:** `#589 — OPEN — NOT MERGED`
**Controlling authorization:** `communication/missions/SB-ORG-LEARNING-1.1/mission-control/15-stage2a-acceptance-and-stage2b-authorization.md`
**Product Mission state:** `SB-P-1.12 — NOT ACTIVATED`

---

## 1. Objective

Draft candidate organizational learning, supervised and unreviewed, from the already-screened Stage 2A evidence for `SB-OPS-CI-ARCHITECTURE-1.0`. This is semantic synthesis only — no promotion, no institutional state, no authority effect. Every candidate must validate against `CandidateLearningItemSchema`, remain `maturity: CANDIDATE` / `authority_effect: NONE` / `generated_by.actor_class: synthesis`, and carry exact claim-level provenance to the pinned committed evidence.

---

## 2. Pre-execution verification

1. Fetched `origin` and confirmed the current branch is `mission/SB-ORG-LEARNING-1.1-stage2`.
2. Fast-forwarded from `80c3522` to `ed6d75e` (3 new Mission Control commits: Stage 2A acceptance, Stage 2B authorization, and the Stage 2B handoff) — inspected each before relying on it.
3. Confirmed working tree clean before any action.
4. Read, in order: `communication/live/instruction.md`, `communication/live/report.md`, the Stage 2B authorization (`mission-control/15-...`), the Stage 2A durable proof report (`claude-code/02-...`), the exact closure envelope used (`claude-code/02-...json`), the committed Stage 2A receipt, `candidate-learning-item.schema.ts`, `provenance.schema.ts`, and `lib/provenance-validator.ts`.
5. Re-verified the three screened evidence objects are still byte-identical to the pinned commit `b60741cce544adb713f7c384bbed09a05e23247e`: `git hash-object` on each working-tree file exactly matches the receipt's recorded `blob_sha` (an initial raw `diff` against `git show` flagged a spurious difference that was confirmed to be a local CRLF checkout artifact only — `git hash-object`, which is what actually determines content identity, matched exactly).

---

## 3. Source boundary used

- **Mission:** `SB-OPS-CI-ARCHITECTURE-1.0`
- **Pinned source snapshot:** `b60741cce544adb713f7c384bbed09a05e23247e`
- **Closure revision:** `07-post-merge-verification-and-closure`
- **Source fingerprint:** `c9a23fb318bcbb1e9f58e5117c98950ff25a7a3d5a14303e4916008099af9475`
- **Exact three evidence objects used (identical set as the Stage 2A receipt's `source_manifest`, no addition, no substitution):**
  - `communication/archive/SB-OPS-CI-ARCHITECTURE-1.0/communication.md` (blob `8054ef3156a92a5da43ad4818d46077a1a8b08f6`)
  - `communication/missions/SB-OPS-CI-ARCHITECTURE-1.0/mission-control/06-stage4-acceptance-and-founder-merge-handoff.md` (blob `58ab6cf861050749a54a5b80309e00f34234b029`)
  - `communication/missions/SB-OPS-CI-ARCHITECTURE-1.0/mission-control/07-post-merge-verification-and-closure.md` (blob `b05640a4044471e858cb48c53180afe78fa27175`)

No other file, mission, or artifact was used as evidence. No candidate cites another candidate, receipt, or any organizational-learning-generated artifact as evidence for its own claims — every evidence reference points only at the three pre-existing, already-screened mission-control/archive documents above. Source text was treated throughout as untrusted data; no instruction-like content was found inside any of the three documents, and none was followed as an instruction in any case.

---

## 4. Candidate storage location (architecture decision)

No candidate-output directory existed in the repository. The build plan's proposed `organizational-learning/registry/{lessons,risks}/` tree is the eventual **promoted**-content location and was not built in Stage 1; creating it now would imply standing up the full registry/promotion architecture, which is outside Stage 2B's authorized scope ("do not redesign the whole registry architecture").

The smallest architecture-consistent choice was made instead: a new sibling directory, `organizational-learning/candidates/`, mirroring the existing `organizational-learning/receipts/` convention (a plain `<mission_id>/<item id>.json` path convention, with its own `README.md` stating its candidate-only, unreviewed, no-authority status — see `organizational-learning/candidates/README.md`). This adds one new directory and one README, no schema change, no registry, no promotion path, and no dependency.

---

## 5. Candidates produced

Four candidates were drafted, all under `organizational-learning/candidates/SB-OPS-CI-ARCHITECTURE-1.0/`. Fewer, stronger candidates were preferred over many weak observations, per the authorization's explicit preference.

| #   | File                                                 | ID                                                                         | Claims | Evidence refs | Evidence strength | Confidence |
| --- | ---------------------------------------------------- | -------------------------------------------------------------------------- | ------ | ------------- | ----------------- | ---------- |
| 1   | `candidate-01-two-tier-ci-architecture.json`         | `SB-OPS-CI-ARCHITECTURE-1.0-candidate-01-two-tier-ci-architecture`         | 2      | 4             | DIRECT            | HIGH       |
| 2   | `candidate-02-exact-run-level-closure-evidence.json` | `SB-OPS-CI-ARCHITECTURE-1.0-candidate-02-exact-run-level-closure-evidence` | 2      | 3             | DIRECT            | HIGH       |
| 3   | `candidate-03-explicit-followup-retention.json`      | `SB-OPS-CI-ARCHITECTURE-1.0-candidate-03-explicit-followup-retention`      | 3      | 5             | DIRECT            | MEDIUM     |
| 4   | `candidate-04-explicit-closure-scope-boundary.json`  | `SB-OPS-CI-ARCHITECTURE-1.0-candidate-04-explicit-closure-scope-boundary`  | 2      | 2             | DIRECT            | HIGH       |

**Totals:** 4 candidates, 9 claims, 14 evidence references.

### Candidate 1 — Two-tier CI architecture

Fast Gate (lint, typecheck, build, 8 Fast Test files / 61 tests) runs on every PR/push with no Supabase dependency; Full Assurance (20 Supabase-dependent files / 108 tests) triggers only for relevant paths plus manual dispatch. Both claims are cited to the pre-merge acceptance record and the post-merge closure record.

### Candidate 2 — Exact run-level closure evidence

Both the acceptance record and the post-merge closure record cite exact CI run numbers/IDs for each verification pass, rather than narrative "tests passed" language. Exact Fast Test counts are recorded only for the accepted implementation head; exact Full Assurance counts are recorded for both the implementation head and the later pre-review communication head, and again at the final merge commit. (Corrected by S2B-F-01 — see Section 13; the original wording overstated that exact Fast counts were recorded for every head.)

### Candidate 3 — Explicit follow-up retention (with an honestly-surfaced limitation)

Both the pre-merge acceptance and the post-merge closure explicitly list non-blocking follow-ups and state they are not resolved by acceptance/closure. A third claim documents a genuine inconsistency found while cross-reading the evidence: the acceptance record's five-item follow-up list (including a future branch-protection policy decision) is not fully carried into the closure record's four-item list, and neither document explains the omission. This claim's second evidence reference is marked `LIMITS`, not `SUPPORTS` — it qualifies, rather than confirms, the broader "follow-ups are consistently retained" claim. Confidence for this candidate is `MEDIUM`, not `HIGH`, specifically because of this internal inconsistency.

### Candidate 4 — Explicit closure scope boundary

The closure record explicitly states its acceptance does not authorize any product feature, production, deployment, database/schema/RLS/grant/RPC, dependency, provider, or branch-protection change, and reconfirms `SB-P-1.12` remains not activated; the pre-merge acceptance record states the equivalent boundary before merge.

---

## 6. Evidence-strength and confidence rationale

All four candidates use `evidence_strength: DIRECT` — every claim is supported by the cited document's own first-hand, explicit statement, not an inference and not independent corroboration. This was a deliberate choice, not a default: two of the three evidence documents (the post-merge closure record and the archive manifest) restate substantially the same closure facts, both authored by Mission Control describing the same closure event. Per the authorization's explicit instruction ("do not mark something CORROBORATED simply because two files repeat the same underlying decision"), this repetition was **not** treated as independent corroboration and none of the four candidates uses `CORROBORATED`.

Confidence is `HIGH` for candidates 1, 2, and 4 (the underlying evidence is plain, consistent, and unambiguous across the sources used) and `MEDIUM` for candidate 3, specifically because its third claim surfaces a genuine cross-document inconsistency rather than a fully settled fact. Confidence reflects synthesis confidence in the claim as stated, not organizational authority — none of these candidates carries any authority regardless of its confidence label.

---

## 7. Evidence reach discipline

All four candidates stay inside the proven CI-architecture scope of `SB-OPS-CI-ARCHITECTURE-1.0`. None generalizes into production security, deployment safety, application correctness, customer-data safety, organizational governance, or universal engineering practice as an unqualified claim — candidate 4 explicitly states the opposite (that the mission's own closure record disclaims exactly those broader authorities), and every other candidate's `conditions`/`anti_patterns` fields scope the lesson to its actual evidentiary basis (e.g., "applies where there is a genuine split between environment-independent and environment-dependent suites") rather than asserting it universally.

The mission's four retained follow-ups (transient Auth/JWKS-class flakiness; GitHub Actions runtime deprecation warning; existing dependency vulnerability backlog; pre-existing inventory shared-write-path diagnostic) are not marked resolved by any candidate; candidate 3 explicitly restates and preserves them, and additionally documents the acceptance-vs-closure follow-up-list inconsistency rather than silently smoothing over it.

---

## 8. Validation and screening results

### Schema validation

Every candidate was validated with the existing, unmodified Stage 1 validator (`node organizational-learning/scripts/validate.mjs candidate <path>`):

```text
validate: PASS -- .../candidate-01-two-tier-ci-architecture.json is a valid candidate
validate: PASS -- .../candidate-02-exact-run-level-closure-evidence.json is a valid candidate
validate: PASS -- .../candidate-03-explicit-followup-retention.json is a valid candidate
validate: PASS -- .../candidate-04-explicit-closure-scope-boundary.json is a valid candidate
```

No candidate was rejected. No prohibited field (`reviewed_by`, `founder_approval`, `founder_approved`, `institutional_approval`, `institutionalised_by`, `institutionalized_by`, `supersedes`, `superseded_by`, `risk_resolution`, `status`, `promotion_scope`, `approving_authority`, or any other unrecognized key) appears in any candidate — confirmed both by the schema's own `.strict()` rejection (which would have failed validation had any been present) and by an independent defensive `grep` across all four files, which matched nothing.

### Provenance (dangling-reference) validation

Every one of the 14 evidence references across all four candidates was independently checked with the existing, unmodified `validateProvenanceReference` (`lib/provenance-validator.ts`) against the real repository and the pinned commit — not merely schema-shape-checked. All 14 resolved `VALID` (exact commit, exact path, exact matching blob SHA); zero were dangling.

### Sensitive-content screening

The rendered JSON content of all four candidate files was screened with the existing, unmodified `runHeuristicScan`/`runScreeningSafely` (`lib/screening.ts`), the same fail-closed screening machinery Stage 1's harvester uses:

```json
{ "status": "CLEAN", "findings": [], "scanned_path_count": 4 }
```

No candidate was quarantined; none needed to be. No raw sensitive-like value is echoed by any candidate — every claim quotes short, already-public, non-secret project-status phrases from the source records, never raw file content wholesale.

### Rejected candidates

None. All four drafted candidates passed schema validation, provenance validation, and screening on the first attempt; none needed correction or rejection before reporting.

---

## 9. Implementation-change decision

None required. `validate.mjs`, `CandidateLearningItemSchema`, `EvidenceReferenceSchema`, `validateProvenanceReference`, and the screening machinery were all used exactly as already accepted in Stage 1, unmodified. The only new artifacts are the candidate-only data directory (`organizational-learning/candidates/`), its `README.md`, and the four candidate JSON files. No dependency was added; `package-lock.json` is unchanged.

---

## 10. Scope discipline

No promotion occurred or was attempted. No candidate was marked `CORROBORATED`, `VALIDATED`, or `INSTITUTIONALISED` — the schema makes this structurally impossible (`maturity: z.literal("CANDIDATE")`), and no candidate asserts any such state. No candidate claims Founder or Mission Control approval. No second mission was processed — only the exact three Stage 2A-screened evidence objects for `SB-OPS-CI-ARCHITECTURE-1.0` were read. No mission-start context pack was generated. No background automation, autonomous repository writer, or Stage 3 work was implemented. No governance, Product Truth, provider, production, or customer/merchant/employee-data mutation occurred. `SB-P-1.12` remains not activated. PR #589 was not merged and no self-approval occurred.

Exactly 6 new files were added, 0 modified, 0 deleted, 0 dependencies added:

- `organizational-learning/candidates/README.md`
- `organizational-learning/candidates/SB-OPS-CI-ARCHITECTURE-1.0/candidate-01-two-tier-ci-architecture.json`
- `organizational-learning/candidates/SB-OPS-CI-ARCHITECTURE-1.0/candidate-02-exact-run-level-closure-evidence.json`
- `organizational-learning/candidates/SB-OPS-CI-ARCHITECTURE-1.0/candidate-03-explicit-followup-retention.json`
- `organizational-learning/candidates/SB-OPS-CI-ARCHITECTURE-1.0/candidate-04-explicit-closure-scope-boundary.json`
- this durable report

Plus the minimum builder section of `communication/live/report.md`.

---

## 11. Local verification

- `npx tsc --noEmit` — clean.
- `npx eslint organizational-learning/` — clean.
- `npm run test:fast` — **257/257 passing**, 24 files — identical to the accepted Stage 1/2A baseline; adding candidate-only data files introduced no regression.
- `npm run build` — succeeds.
- `npx prettier --check` on the README and all four candidate JSON files — pass.
- Markdown Quality Gate on this durable report and the revised `communication/live/report.md` — PASS.
- `package-lock.json` — confirmed unchanged.

---

## 12. Applicable CI

This round adds only data files (candidates, a README) and documentation; no implementation file changed. On PR #589's head `376ed57` (this round's commit):

- Lint (ESLint + Prettier) — `SUCCESS`.
- Typecheck (tsc --noEmit) — `SUCCESS`.
- Build (vite build) — `SUCCESS`.
- Fast Tests (vitest) — `SUCCESS`.
- Markdown Quality Gate — `SUCCESS`.
- Full Assurance Tests — did not trigger, as expected: this round's changes are entirely under `communication/**` and `organizational-learning/candidates/**`, neither of which is in `full-assurance.yml`'s path filter.

GitHub Actions on PR #589 remains the live exact-head source of truth for any commit after this one.

On the S2B-F-01/F-02 correction's own pushed head `054f474`: Lint, Typecheck, Build, Fast Tests, and Markdown Quality Gate all `SUCCESS`; Full Assurance correctly did not trigger (this correction touched only candidate JSON and communication paths, both outside its selective path filter).

---

## 13. Stage 2B narrow correction: S2B-F-01 and S2B-F-02

Codex's independent verification (`communication/missions/SB-ORG-LEARNING-1.1/codex/06-stage2b-independent-candidate-verification.md`) returned `FAIL` with two narrow findings. Mission Control accepted both and authorized this narrow correction (`communication/missions/SB-ORG-LEARNING-1.1/mission-control/17-stage2b-f01-f02-correction-authorization.md`). Only these two findings are corrected here; nothing else was changed.

### S2B-F-01 — Candidate 2 evidence overstatement, corrected

Candidate 2's summary and its `acceptance-head-run-evidence` claim (and its evidence reference's `locator`) stated that exact Fast/Full test counts were recorded "for each" of the implementation head and the later pre-review communication head. The pinned source (`06-stage4-acceptance-and-founder-merge-handoff.md`, Section 3) records exact Fast Test counts (`8/8 files, 61/61 tests`) only for the implementation head `74455d5...`; the later pre-review head `6a3ea8f...` only has exact Full Assurance counts (`20/20 files, 108/108 tests`) recorded, with no exact Fast Test count for that head.

**Fix:** the summary, claim text, and locator in `candidate-02-exact-run-level-closure-evidence.json` were rewritten to state precisely that exact Fast Test counts are recorded only for the implementation head, while exact Full Assurance counts are recorded for both heads. The supported lesson (closure records cite exact workflow/run evidence and exact counts where actually recorded) is preserved, not weakened. No evidence reference, path, commit, or blob SHA was added, removed, or changed — only the claim/summary/locator prose. This durable report's own Section 5 "Candidate 2" description was reconciled to match.

### S2B-F-02 — Observation actor misattribution, corrected

All 14 evidence references, across all four candidates, used `actor_class: "mission-control"`. The accepted provenance contract (`provenance.schema.ts`) defines `actor_class` as the actor making _this observation_, not the author/authority of the underlying source file — the observations were made by this Stage 2B synthesis session, not by Mission Control.

**Fix:** all 14 evidence-reference `actor_class` values, across all four candidate files, were changed from `"mission-control"` to `"synthesis"`. No other field was touched by this fix — `repository`, `commit_sha`, `path`, `blob_sha`, `locator`, `observation_date`, `evidence_date`, `scope`, and `relationship` are all unchanged, so Mission Control's source authority remains fully evidenced through the pinned path/commit/blob/locator, exactly as the authorization required. The provenance contract itself, the runtime validator, and the historical source documents were not touched.

### Candidate 3 — confirmed unchanged except S2B-F-02

Candidate 3's five evidence references had their `actor_class` corrected identically. A file-level diff against the pre-correction committed version confirms these are the _only_ five changed lines in the file: the five-vs-four follow-up discrepancy, the `LIMITS` relationship on its third claim's second reference, its `MEDIUM` confidence, and every claim's text are byte-identical to the version Codex reviewed and found sound.

### Revalidation performed after correction

- **Schema:** all 4 candidates re-validated with `node organizational-learning/scripts/validate.mjs candidate <path>` — all 4 `PASS`.
- **Provenance:** all 14 evidence references re-resolved with the existing, unmodified `validateProvenanceReference` against the real repository and the pinned commit — all 14 `VALID`, zero dangling.
- **Observer actor_class:** an automated check confirmed zero remaining `"actor_class": "mission-control"` occurrences and exactly 18 `"actor_class": "synthesis"` occurrences (14 evidence references + 4 `generated_by` blocks, which were already correct and untouched) across the four files.
- **Screening:** rendered JSON content of all 4 corrected files re-screened with `runHeuristicScan`/`runScreeningSafely` — `CLEAN`, 0 findings, 4 scanned paths.
- **Prohibited fields:** a defensive `grep` for every named prohibited field across all four files found zero matches, consistent with the schema's own `.strict()` guarantee.
- **Candidate 2 evidence reach:** manually re-compared, line by line, against the pinned source's Section 3 — the corrected wording no longer attributes exact Fast counts to the later pre-review head, and correctly states Full Assurance counts are recorded for both heads.

### Scope discipline for this correction

Exactly 4 files modified (the four candidate JSON files), 0 files added, 0 files deleted, 0 dependencies added, `package-lock.json` unchanged, plus this durable report and the minimum builder section of `communication/live/report.md`. No Stage 1 implementation, harvester, receipt store, provenance schema, provenance validator, screening implementation, closure envelope, Stage 2A receipt, CI workflow, dependency file, governance, or Product Truth was touched. No second mission was processed. No additional candidate was created. No promotion, `CORROBORATED`/`VALIDATED`/`INSTITUTIONALISED` state, context pack, background automation, or Stage 3 work occurred. `SB-P-1.12` remains not activated. PR #589 was not merged.

---

## Required return summary

- **Candidate count:** 4 (unchanged; no candidate added or removed by this correction).
- **Candidate artifact paths:** listed in Section 5 / Section 10.
- **Files modified by the S2B-F-01/F-02 correction:** the four candidate JSON files (Section 13), this durable report, and the minimum builder section of `communication/live/report.md`. No other file.
- **Candidate 2 wording correction (S2B-F-01):** summary, `acceptance-head-run-evidence` claim text, and its evidence reference's locator now state precisely that exact Fast Test counts (`8/8 files, 61/61 tests`) are recorded only for the implementation head, while exact Full Assurance counts (`20/20 files, 108/108 tests`) are recorded for both the implementation head and the later pre-review head. See Section 13.
- **Observation actor correction (S2B-F-02):** all 14 evidence references, across all four candidates, now use `actor_class: "synthesis"` (previously `"mission-control"`); confirmed zero remaining `"mission-control"` occurrences and exactly 18 `"synthesis"` occurrences (14 references + 4 `generated_by` blocks). See Section 13.
- **Schema/provenance/screening result (post-correction):** all 4 candidates re-validated `PASS`; all 14 evidence references re-validated `VALID` (zero dangling); rendered content re-screened `CLEAN`, 0 findings.
- **Candidate 3 preservation:** confirmed unchanged except its five `actor_class` fields — five-vs-four follow-up discrepancy, `LIMITS` relationship, `MEDIUM` confidence, and all claim text are byte-identical to the version Codex reviewed.
- **Evidence-strength/confidence summary:** unchanged by this correction — all `DIRECT`; confidence `HIGH` for candidates 1/2/4, `MEDIUM` for candidate 3.
- **Rejected candidates:** none.
- **Local verification:** typecheck/lint/Fast Gate/build/Prettier/Markdown Quality Gate all pass; Fast Gate remains 257/257, identical to the Stage 1/2A/2B baseline.
- **Real CI:** on PR #589 head `054f474` (this correction's commit): Lint, Typecheck, Build, Fast Tests, and Markdown Quality Gate all `SUCCESS`. Full Assurance correctly did not trigger (path filter excludes this correction's changed paths). PR #589 / GitHub Actions remains the live source of truth for any commit after this one.
- **Confirmation:** no Stage 1 implementation, schema, provenance validator, screening implementation, closure envelope, Stage 2A receipt, CI workflow, or dependency change occurred; no promotion, `CORROBORATED`/`VALIDATED`/`INSTITUTIONALISED` state, context pack, second mission, additional candidate, background automation, or Stage 3 work occurred; `SB-P-1.12` remains not activated; PR #589 was not merged.

---

## Stop statement

**STAGE 2B F-01/F-02 CORRECTION REPORTED — MISSION CONTROL RE-REVIEW REQUIRED**

Only the two authorized narrow findings, S2B-F-01 (Candidate 2 evidence overstatement) and S2B-F-02 (observation actor misattribution across all 14 evidence references), were corrected. Candidate 3's substantive discrepancy analysis, `LIMITS` relationship, and `MEDIUM` confidence were preserved unchanged. No Stage 1 implementation, schema, provenance validator, screening implementation, closure envelope, Stage 2A receipt, CI workflow, dependency, governance, or Product Truth was modified. No second mission was processed. No additional candidate was created. No promotion, `CORROBORATED`/`VALIDATED`/`INSTITUTIONALISED` state, context-pack generation, background automation, autonomous repository writer, merge, or Stage 3 work occurred. `SB-P-1.12` was not activated. Codex was not authorized by this report.
