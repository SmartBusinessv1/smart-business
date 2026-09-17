# SMART BUSINESS — CLAUDE CODE STAGE 2B SUPERVISED CANDIDATE EXTRACTION

# SB-ORG-LEARNING-1.1 — Stage 2B: Supervised Semantic Candidate Extraction

**Mission:** `SB-ORG-LEARNING-1.1 — Smart Business Organizational Learning Engine — Implementation`
**Stage:** `2 — Closed-mission proof and supervised candidate extraction`
**Sub-gate:** `2B — Supervised semantic candidate extraction`
**Actor:** Claude Code / authorized AI synthesis session
**Status:** `STAGE 2B SUPERVISED CANDIDATE EXTRACTION REPORTED — MISSION CONTROL REVIEW REQUIRED`
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

Both the acceptance record and the post-merge closure record cite exact CI run numbers/IDs and exact test counts, rather than narrative "tests passed" language, across two implementation heads and the final merge commit.

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

This round adds only data files (candidates, a README) and documentation; no implementation file changed. Applicable CI will be confirmed on PR #589's head via GitHub Actions after this round's commit is pushed — the report will be updated with the exact-head result once it actually completes, per the standing anti-recursion rule; CI is not claimed as complete before it has run.

---

## Required return summary

- **Candidate count:** 4.
- **Candidate artifact paths:** listed in Section 5 / Section 10.
- **Schema/provenance/screening result:** all 4 candidates schema-valid; all 14 evidence references independently provenance-valid (non-dangling); sensitive-content screening `CLEAN` with 0 findings across all 4 files.
- **Evidence-strength/confidence summary:** all `DIRECT` (no false `CORROBORATED` claim from repeated-source documents); confidence `HIGH` for candidates 1/2/4, `MEDIUM` for candidate 3 (an honestly-surfaced cross-document inconsistency).
- **Rejected candidates:** none.
- **Blocker/architectural gap:** none. No missing implementation primitive was encountered; the existing Stage 1 schema/validation/screening/provenance machinery was sufficient as-is.
- **Local verification:** typecheck/lint/Fast Gate/build/Prettier/Markdown Quality Gate all pass; Fast Gate remains 257/257, identical to the Stage 1/2A baseline.
- **Real CI:** to be confirmed on PR #589's pushed head; not claimed as already complete in this report.
- **Confirmation:** candidate extraction was supervised and every candidate remains unreviewed; every candidate has `authority_effect: NONE` and `maturity: CANDIDATE`; no promotion occurred; no mission-start context pack was generated; no Stage 3 work was begun; no `SB-P-1.12` activation occurred; PR #589 was not merged.

---

## Stop statement

**STAGE 2B SUPERVISED CANDIDATE EXTRACTION REPORTED — MISSION CONTROL REVIEW REQUIRED**

Only the authorized Stage 2B supervised semantic candidate extraction was performed, drawing exclusively from the already-screened Stage 2A evidence boundary for `SB-OPS-CI-ARCHITECTURE-1.0`. No implementation change was required or made. No promotion, `CORROBORATED`/`VALIDATED`/`INSTITUTIONALISED` state, Founder/Mission Control approval claim, second mission, context-pack generation, background automation, autonomous repository writer, merge, Stage 3, governance/Product Truth mutation, provider/production/customer-data mutation, or `SB-P-1.12` activation occurred. Stage 3 is not authorized by this report.
