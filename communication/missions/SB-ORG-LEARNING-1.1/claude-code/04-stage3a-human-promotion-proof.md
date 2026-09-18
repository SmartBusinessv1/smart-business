# SMART BUSINESS — CLAUDE CODE STAGE 3A HUMAN PROMOTION PROOF

# SB-ORG-LEARNING-1.1 — Stage 3A: Human Review/Promotion Proof

**Mission:** `SB-ORG-LEARNING-1.1 — Smart Business Organizational Learning Engine — Implementation`
**Stage:** `3 — Human review/promotion and mission-start context-pack proof`
**Sub-gate:** `3A — Human review/promotion proof`
**Actor:** Claude Code — authorized promotion-proof builder
**Status:** `STAGE 3A HUMAN PROMOTION PROOF REPORTED — MISSION CONTROL REVIEW REQUIRED`
**Date:** 2026-09-17
**Repository:** `SmartBusinessv1/smart-business`
**Authorized branch:** `mission/SB-ORG-LEARNING-1.1-stage2`
**PR:** `#589 — OPEN — NOT MERGED`
**Controlling authorization:** `communication/missions/SB-ORG-LEARNING-1.1/mission-control/19-stage2-acceptance-and-stage3a-human-promotion-proof-authorization.md`
**Product Mission state:** `SB-P-1.12 — NOT ACTIVATED`

---

## 1. Objective

Materialize and prove Mission Control's already-made human review/promotion decision for the four current Stage 2B candidate revisions, using the existing, unmodified `PromotionReviewSchema`, revision-hash helper, provenance validator, and screening machinery. This is proof of an already-made decision, not a new independent promotion judgment — the builder has no promotion authority.

---

## 2. Pre-execution verification

1. Fetched `origin`; confirmed branch `mission/SB-ORG-LEARNING-1.1-stage2`; fast-forwarded to `3c0b4bb` (3 new Mission Control commits: Stage 2 acceptance, Stage 3A handoff, and the authorization record itself) — inspected each before relying on it.
2. Confirmed PR #589 `OPEN`, unmerged, head exactly `3c0b4bb9aea603fdfd25093a9421f8db85381f0e`.
3. Confirmed working tree clean before any action.
4. Read, in order: `communication/live/instruction.md`, `communication/live/report.md`, the Stage 3A authorization (`mission-control/19-...`), Codex's Stage 2B F-01/F-02 independent re-verification (`codex/07-...`), Codex's original Stage 2B verification (`codex/06-...`), the Stage 2B builder report (`claude-code/03-...`), all four current candidate JSON files, `promotion-review.schema.ts`, `lib/revision-hash.ts`, `lib/provenance-validator.ts`, `lib/screening.ts`, and `scripts/validate.mjs`.

---

## 3. Human review decision being materialized

Mission Control's decision (`mission-control/19-...`, Section 2) approves the exact current revisions of all four candidates at repository state `154c58e1b9d1faa04a328aa1bf9c8916d36f245a` for a mission-scoped `VALIDATED` promotion:

- `resulting_maturity: VALIDATED`
- `promotion_scope: MISSION_SCOPED`
- `approving_authority.actor_class: mission-control`
- `approving_authority.name_or_role: Smart Business Mission Control`
- `decision_ref: communication/missions/SB-ORG-LEARNING-1.1/mission-control/19-stage2-acceptance-and-stage3a-human-promotion-proof-authorization.md`

This approval is revision-bound: it applies only to the exact candidate content it names, not to any future edit. Candidate 3 is approved only as a validated observation of an unresolved documentary inconsistency — its `MEDIUM` confidence, `LIMITS` relationship, and no-resolution conclusion are explicitly required to remain intact.

**Candidate content was not modified by this round.** No candidate file in `organizational-learning/candidates/SB-OPS-CI-ARCHITECTURE-1.0/` was touched; `git status` before and after this round shows zero changes under that path.

---

## 4. Candidate revision hashes (computed with the existing, unmodified `computeRevisionHash`)

| Candidate ID                                                               | Candidate file                                       | Revision hash (sha256)                                             |
| -------------------------------------------------------------------------- | ---------------------------------------------------- | ------------------------------------------------------------------ |
| `SB-OPS-CI-ARCHITECTURE-1.0-candidate-01-two-tier-ci-architecture`         | `candidate-01-two-tier-ci-architecture.json`         | `eb13d7f7ebf15b0d6e1759ba5a7498a82a1aae365d24d627c342b741fa33055e` |
| `SB-OPS-CI-ARCHITECTURE-1.0-candidate-02-exact-run-level-closure-evidence` | `candidate-02-exact-run-level-closure-evidence.json` | `3fcc61bac434b6ef651b378290b3453fc1b14e7d3f6d3e36df6b05542d0d14a4` |
| `SB-OPS-CI-ARCHITECTURE-1.0-candidate-03-explicit-followup-retention`      | `candidate-03-explicit-followup-retention.json`      | `b5ee757cb6bddbbfd9237b0e0d2fcf412e341e59394106399d9baf15be6f8e88` |
| `SB-OPS-CI-ARCHITECTURE-1.0-candidate-04-explicit-closure-scope-boundary`  | `candidate-04-explicit-closure-scope-boundary.json`  | `ede1835962e1c7d8939bd92f760b0957a3aefd755236f03feb02ede04055ff59` |

Each hash was computed by loading the candidate's exact current JSON content and calling the existing, unmodified `computeRevisionHash` (`lib/revision-hash.ts`) — no reimplementation, no new hashing logic.

---

## 5. Promotion artifacts produced

Four promotion-review records were created under the authorized minimal location `organizational-learning/promotions/SB-OPS-CI-ARCHITECTURE-1.0/`, one per candidate, plus a `README.md` (mirroring the `candidates/`/`receipts/` convention) documenting the directory's scope and the revision-binding/actor-attribution rules:

| #   | File                                                 | `promotion_id`                                                                          | `candidate_id`                                                             |
| --- | ---------------------------------------------------- | --------------------------------------------------------------------------------------- | -------------------------------------------------------------------------- |
| 1   | `promotion-01-two-tier-ci-architecture.json`         | `SB-OPS-CI-ARCHITECTURE-1.0-candidate-01-two-tier-ci-architecture-promotion-01`         | `SB-OPS-CI-ARCHITECTURE-1.0-candidate-01-two-tier-ci-architecture`         |
| 2   | `promotion-02-exact-run-level-closure-evidence.json` | `SB-OPS-CI-ARCHITECTURE-1.0-candidate-02-exact-run-level-closure-evidence-promotion-02` | `SB-OPS-CI-ARCHITECTURE-1.0-candidate-02-exact-run-level-closure-evidence` |
| 3   | `promotion-03-explicit-followup-retention.json`      | `SB-OPS-CI-ARCHITECTURE-1.0-candidate-03-explicit-followup-retention-promotion-03`      | `SB-OPS-CI-ARCHITECTURE-1.0-candidate-03-explicit-followup-retention`      |
| 4   | `promotion-04-explicit-closure-scope-boundary.json`  | `SB-OPS-CI-ARCHITECTURE-1.0-candidate-04-explicit-closure-scope-boundary-promotion-04`  | `SB-OPS-CI-ARCHITECTURE-1.0-candidate-04-explicit-closure-scope-boundary`  |

Every record uses, identically:

- `resulting_maturity: "VALIDATED"`
- `promotion_scope: "MISSION_SCOPED"`
- `approving_authority: { "actor_class": "mission-control", "name_or_role": "Smart Business Mission Control" }`
- `decision_ref: "communication/missions/SB-ORG-LEARNING-1.1/mission-control/19-stage2-acceptance-and-stage3a-human-promotion-proof-authorization.md"`
- `supersedes: []`, `superseded_by: []` (no supersession edge; none was separately authorized)
- `promoted_at: "2026-09-17T12:17:00Z"`

Each record's `approved_scope` is a narrow, evidence-matched restatement of that candidate's actual claims (not a broadened claim): e.g. Candidate 3's `approved_scope` explicitly states the promotion "validates the observation itself, not any conclusion that the omitted item was resolved, superseded, or intentionally dropped," and that its `MEDIUM` confidence and `LIMITS` relationship "remain in force and are not converted into certainty by this promotion."

Each record's `evidence` array reuses, verbatim, the exact evidence references already present in that candidate's claims (same `repository`/`commit_sha`/`path`/`blob_sha`/`locator`/`scope`/`relationship`) — no new evidence source was added. Per the same principle applied in the prior S2B-F-02 correction, each evidence reference's `actor_class` is `"synthesis"` (the actor that made and is re-stating this observation), not `"mission-control"` — Mission Control's authority over this promotion is represented through `approving_authority` and `decision_ref`, not through the evidence-reference observer field. Candidate/promotion contracts remain structurally separate: no promotion field was added to any candidate JSON, and no candidate/promotion object was merged.

---

## 6. Schema validation

Every promotion record was validated with the existing, unmodified validator:

```text
node organizational-learning/scripts/validate.mjs promotion <path>
```

```text
validate: PASS -- .../promotion-01-two-tier-ci-architecture.json is a valid promotion
validate: PASS -- .../promotion-02-exact-run-level-closure-evidence.json is a valid promotion
validate: PASS -- .../promotion-03-explicit-followup-retention.json is a valid promotion
validate: PASS -- .../promotion-04-explicit-closure-scope-boundary.json is a valid promotion
```

No record was rejected. No prohibited combination (`INSTITUTIONALISED` + `ORGANIZATION_WIDE` without Founder approval) was attempted — none uses `INSTITUTIONALISED` or `ORGANIZATION_WIDE` at all.

---

## 7. Revision-binding proof

An independent script recomputed `computeRevisionHash` over each current candidate object and compared it against the corresponding promotion record's `candidate_revision_hash`:

```text
promotion-01-two-tier-ci-architecture.json          hash_matches_current_candidate: true
promotion-02-exact-run-level-closure-evidence.json  hash_matches_current_candidate: true
promotion-03-explicit-followup-retention.json       hash_matches_current_candidate: true
promotion-04-explicit-closure-scope-boundary.json   hash_matches_current_candidate: true
```

**Material-mutation proof (isolated, in-memory only — the real candidate file was never written to):** Candidate 1's object was loaded, deep-cloned in memory, and had a single trailing space appended to its `summary`. The original and mutated objects produced different hashes:

- original: `eb13d7f7ebf15b0d6e1759ba5a7498a82a1aae365d24d627c342b741fa33055e`
- mutated: `34d28cd4c041a9aeb25f5bc9e5eea09eee3b55cb652335b6474eead859c98675`
- hashes differ: `true`

**Canonicalization robustness check (same content, different key order):** re-serializing the same object with its top-level keys reversed produced the identical hash (`true`), confirming the helper's documented key-order independence is real, not merely a stated property. `git status` on `organizational-learning/candidates/` was confirmed empty both before and after this proof, showing the real candidate file was never modified.

---

## 8. Provenance validation

Every evidence reference across all four promotion artifacts (14 total, identical set to the candidates') was independently re-resolved with the existing, unmodified `validateProvenanceReference` against the real repository and the pinned commit `b60741cce544adb713f7c384bbed09a05e23247e`:

**Result: 14/14 `VALID`, zero dangling.** All references remain inside the Stage 2 screened evidence boundary (`communication/missions/SB-OPS-CI-ARCHITECTURE-1.0/mission-control/06-...`, `07-...`, and `communication/archive/SB-OPS-CI-ARCHITECTURE-1.0/communication.md`) — no unrelated evidence was added, no candidate/receipt/report was cited as primary evidence for its own claims, and no `communication/live/**` path was used.

---

## 9. Screening

The rendered JSON content of all four promotion artifacts was screened with the existing, unmodified `runHeuristicScan`/`runScreeningSafely`:

```json
{ "status": "CLEAN", "findings": [], "scanned_path_count": 4 }
```

Zero findings. Treated as untrusted content until screened, per instruction; no raw sensitive-like value is present.

---

## 10. Candidate 3 preservation

Confirmed directly from the current, untouched candidate file and reflected in its promotion record:

- Five follow-ups named at pre-merge acceptance (source A) — preserved.
- Four follow-ups named at final post-merge closure (source B) — preserved.
- The branch-protection-policy item's omission from the closure list remains unexplained — preserved; the promotion's `approved_scope` explicitly states no conclusion is drawn about resolution, supersession, or intentional dropping.
- The claim's second evidence reference retains `relationship: "LIMITS"` (not `SUPPORTS`) in both the candidate and the reused evidence entry inside `promotion-03-...json`.
- `confidence: "MEDIUM"` on the candidate is unchanged; the promotion's `approved_scope` explicitly states this confidence "remain[s] in force and are not converted into certainty by this promotion."

`VALIDATED` promotion of Candidate 3 means the _observation of the inconsistency_ is validated, not that the inconsistency is resolved.

---

## 11. Scope discipline

Exactly 6 new files, 0 files modified, 0 files deleted, 0 dependencies added, `package-lock.json` unchanged:

- `organizational-learning/promotions/README.md`
- `organizational-learning/promotions/SB-OPS-CI-ARCHITECTURE-1.0/promotion-01-two-tier-ci-architecture.json`
- `organizational-learning/promotions/SB-OPS-CI-ARCHITECTURE-1.0/promotion-02-exact-run-level-closure-evidence.json`
- `organizational-learning/promotions/SB-OPS-CI-ARCHITECTURE-1.0/promotion-03-explicit-followup-retention.json`
- `organizational-learning/promotions/SB-OPS-CI-ARCHITECTURE-1.0/promotion-04-explicit-closure-scope-boundary.json`
- this durable report

Plus the minimum builder section of `communication/live/report.md`.

No candidate file was modified. No `INSTITUTIONALISED` status or `ORGANIZATION_WIDE` scope was used. No Founder approval was claimed (approving authority is `mission-control` throughout, matching the actual decision). No supersession edge was created. No mission-start context pack was generated. No Stage 3B work was begun. No background automation, autonomous repository writer, or registry-publication automation was created — these are static, human-decision-materializing data files, written and committed by the authorized builder, not by an autonomous writer. No governance, Product Truth, provider, production, or customer/merchant/employee-data mutation occurred. `SB-P-1.12` remains not activated. PR #589 was not merged; no self-approval occurred.

---

## 12. Local verification

- `npx tsc --noEmit` — clean.
- `npx eslint organizational-learning/` — clean.
- `npm run test:fast` — **257/257 passing**, 24 files — identical to the accepted Stage 1/2 baseline; no regression from adding promotion-only data files.
- `npm run build` — succeeds.
- `npx prettier --check` on the README and all four promotion JSON files — pass.
- Markdown Quality Gate on this durable report and the revised `communication/live/report.md` — PASS.
- `package-lock.json` — confirmed unchanged.

---

## 13. Applicable CI

This round adds only data files (promotion records, a README) and documentation; no implementation file changed. On PR #589 head `f18f5fa` (this round's commit):

- Lint (ESLint + Prettier) — `SUCCESS`.
- Typecheck (tsc --noEmit) — `SUCCESS`.
- Build (vite build) — `SUCCESS`.
- Fast Tests (vitest) — `SUCCESS`.
- Markdown Quality Gate — `SUCCESS`.
- Full Assurance Tests — did not trigger, as expected: this round's changes are entirely under `organizational-learning/promotions/**` and `communication/**`, neither of which is in `full-assurance.yml`'s selective path filter.

GitHub Actions on PR #589 remains the live exact-head source of truth for any commit after this one.

---

## Required return summary

- **Promotion artifact count:** 4.
- **Exact artifact paths:** listed in Section 5.
- **Exact candidate revision hashes:** listed in Section 4.
- **Schema result:** all 4 promotion records `PASS` against `PromotionReviewSchema`.
- **Revision-binding result:** all 4 bindings independently confirmed exact-match; isolated in-memory mutation test confirmed the hash changes on material content change; the real candidate files were never touched.
- **Provenance result:** 14/14 evidence references `VALID`, zero dangling, all within the Stage 2 screened evidence boundary.
- **Screening result:** `CLEAN`, 0 findings, across all 4 promotion artifacts.
- **Candidate 3 preservation result:** five-vs-four follow-up discrepancy, unexplained omission, `LIMITS` relationship, and `MEDIUM` confidence all intact; promotion explicitly does not claim resolution.
- **Local checks:** typecheck/lint/Fast Gate/build/Prettier/Markdown Quality Gate all pass; Fast Gate remains 257/257.
- **Real CI:** Lint, Typecheck, Build, Fast Tests, and Markdown Quality Gate all `SUCCESS` on PR #589 head `f18f5fa`; Full Assurance correctly did not trigger (path filter excludes this round's changed paths).
- **Scope confirmation:** no `INSTITUTIONALISED` status, no `ORGANIZATION_WIDE` scope, no Founder-approval claim, no candidate content change, no promotion-schema/provenance-schema/revision-hash-semantics change, no supersession edge, no mission-start context pack, no Stage 3B work, no registry automation, no background automation, no autonomous repository writer, no PR merge, no governance/Product Truth/production/provider/customer-data mutation, no `SB-P-1.12` activation.

---

## Stop statement

**STAGE 3A HUMAN PROMOTION PROOF REPORTED — MISSION CONTROL REVIEW REQUIRED**

Only the authorized Stage 3A human promotion proof was performed: materializing Mission Control's already-made decision to approve the four current candidate revisions as mission-scoped `VALIDATED`, using the existing, unmodified promotion contract, revision-hash helper, provenance validator, and screening machinery. No candidate content was changed. No implementation, schema, or dependency change occurred. Candidate 3's documentary-inconsistency observation, `LIMITS` relationship, and `MEDIUM` confidence were preserved, not resolved. Stage 3B is not authorized by this report.
