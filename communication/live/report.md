# SMART BUSINESS — REPOSITORY COMMUNICATION

# SB-ORG-LEARNING-1.1 — Stage 3A Acceptance / Stage 3B Handoff

**Mission ID:** `SB-ORG-LEARNING-1.1`

**Current stage:** `3 — Human review/promotion and context-pack proof`

**Current sub-gate:** `3B — Deterministic mission-start context-pack proof`

**Current actor:** Claude Code — authorized context-pack proof builder

**Status:** `STAGE 3A ACCEPTED — STAGE 3B AUTHORIZED`

**Authorized branch:** `mission/SB-ORG-LEARNING-1.1-stage2`

**Pull request:** `#589 — OPEN — NOT MERGED`

**Product Mission state:** `SB-P-1.12 — NOT ACTIVATED`

## Stage 2 completion

Stage 2A deterministic proof was accepted against `SB-OPS-CI-ARCHITECTURE-1.0` using the pinned source snapshot and screened receipt.

Stage 2B produced four candidate-only learning items. Codex independently identified `S2B-F-01` and `S2B-F-02`; Mission Control authorized a narrow correction; Claude Code corrected only those findings; Mission Control re-reviewed; Codex independently re-verified and returned `PASS`.

Final Stage 2 verifier report:

`communication/missions/SB-ORG-LEARNING-1.1/codex/07-stage2b-f01-f02-independent-reverification.md`

Verifier publication commit:

`154c58e1b9d1faa04a328aa1bf9c8916d36f245a`

Mission Control disposition:

`STAGE 2 — ACCEPTED`

Durable Stage 2 decision / Stage 3A authorization:

`communication/missions/SB-ORG-LEARNING-1.1/mission-control/19-stage2-acceptance-and-stage3a-human-promotion-proof-authorization.md`

## Stage 3A human review / promotion proof

Mission Control approved the exact current revisions of four Stage 2B candidates for a mission-scoped `VALIDATED` promotion proof only.

Claude Code materialized four promotion-review artifacts under:

`organizational-learning/promotions/SB-OPS-CI-ARCHITECTURE-1.0/`

Durable builder report:

`communication/missions/SB-ORG-LEARNING-1.1/claude-code/04-stage3a-human-promotion-proof.md`

The four promotion records bind exact candidate revision hashes and use:

- `resulting_maturity: VALIDATED`;
- `promotion_scope: MISSION_SCOPED`;
- `approving_authority.actor_class: mission-control`;
- `approving_authority.name_or_role: Smart Business Mission Control`;
- decision reference to Mission Control record 19;
- empty supersession edges.

All four promotion records validated against the existing promotion schema. All reused evidence references remained within the approved Stage 2 evidence boundary and resolved valid. Screening was CLEAN. Revision-binding was demonstrated using the accepted hash helper without mutating the actual candidate files.

Candidate 3 remains a validated observation of an unresolved documentary inconsistency. Its five-vs-four follow-up discrepancy, unexplained branch-protection-item omission, `LIMITS` relationship, `MEDIUM` confidence, and no-resolution boundary remain intact.

No `INSTITUTIONALISED`, `ORGANIZATION_WIDE`, or Founder-approval claim was created.

Mission Control independently reviewed the promotion artifacts and the builder report. Current-head applicable CI at that review was green:

- Team LIPS Application Build Assurance #175 — SUCCESS;
- Team LIPS Markdown Quality Gate #1779 — SUCCESS;
- Full Assurance — not applicable under the selective path filter for the promotion/document-only delta.

Mission Control disposition:

`STAGE 3A — ACCEPTED`

Durable Stage 3A acceptance / Stage 3B authorization:

`communication/missions/SB-ORG-LEARNING-1.1/mission-control/20-stage3a-acceptance-and-stage3b-context-pack-proof-authorization.md`

## Stage 3B authorization

Stage 3B is a deterministic mission-start context-pack proof only.

Authorized synthetic profile:

- mission class: `operational`;
- systems: `github-actions`, `ci`;
- environment: `ci`;
- related mission: `SB-OPS-CI-ARCHITECTURE-1.0`.

This profile is synthetic and does not activate a real Product Mission.

Only the four current mission-scoped `VALIDATED` promotion records are eligible reusable learning for the proof.

The proof must use deterministic filtering, not semantic ranking, and must demonstrate reviewed-item eligibility, candidate-only exclusion, stale-revision rejection, scope filtering, supersession behavior, deterministic ordering/repeat output, provenance/freshness presentation, and preservation of Candidate 3's unresolved limitation.

Every proof pack must state:

`context, not authority`

Generated context packs are outputs, not authority sources and not evidence for their own truth.

## Boundaries

`STAGE 4 — NOT AUTHORIZED`

No `INSTITUTIONALISED` status.
No `ORGANIZATION_WIDE` promotion.
No Founder approval claim.
No semantic ranking.
No real mission activation.
No background automation.
No autonomous repository writer.
No dependency/lockfile change.
No merge.
No governance/Product Truth mutation.
No provider/production/customer-data mutation.
No `SB-P-1.12` activation.

## Required stop

`STAGE 3B DETERMINISTIC CONTEXT-PACK PROOF REPORTED — MISSION CONTROL REVIEW REQUIRED`

---

## Builder Stage 3B context-pack proof report

**Status:** `STAGE 3B DETERMINISTIC CONTEXT-PACK PROOF REPORTED — MISSION CONTROL REVIEW REQUIRED`

**Durable report:** `communication/missions/SB-ORG-LEARNING-1.1/claude-code/05-stage3b-deterministic-context-pack-proof.md`

**Implementation:** new minimal deterministic helper `organizational-learning/scripts/context-pack.mjs` (eligibility evaluator + pure pack builder + CLI, reusing the existing `PromotionReviewSchema`, `computeRevisionHash`, `validateProvenanceReference`, and screening machinery unmodified); 17 new focused tests in `organizational-learning/tests/context-pack.test.ts`; proof output at `organizational-learning/context-packs/SB-OPS-CI-ARCHITECTURE-1.0/mission-start-profile-operational-ci.json`; `vitest.fast.config.ts` updated to include the new test file. No dependency added; `package-lock.json` unchanged.

**Real-profile result:** all 4 current mission-scoped `VALIDATED` promotions eligible, 0 excluded, ordered deterministically by `promotion_id`. Every item's provenance independently `VALID`.

**Candidate-only exclusion:** a raw `maturity: CANDIDATE` object is rejected at the existing `PromotionReviewSchema` gate itself.

**Stale-revision rejection:** two isolated in-memory mismatch cases (mutated candidate content; tampered hash field) both correctly excluded/flagged stale; real files re-verified unchanged afterward.

**Scope exclusion:** a non-matching synthetic profile deterministically excludes all 4 real promotions.

**No invented institutionalization:** neither `INSTITUTIONALISED` nor `ORGANIZATION_WIDE` appears anywhere in the real-profile output; a synthetic org-wide-INSTITUTIONALISED-without-Founder record is rejected at the schema gate.

**Candidate 3:** `LIMITS`, `MEDIUM` confidence, and the five-vs-four unresolved follow-up omission are all surfaced verbatim and unconditionally in its pack entry — no resolution is claimed.

**Supersession:** real empty arrays honored and displayed explicitly; a synthetic non-empty `superseded_by` clone correctly excludes without touching the real record.

**Determinism:** byte-identical in-process double-build and real two-process CLI runs (confirmed by test and independently by `sha256sum`). Two deliberate regressions (disabling the stale check; disabling the scope check) were each proven to be caught by exactly the expected tests before being restored.

**Freshness/provenance:** freshness limited to the record's own `promoted_at`/`evidence_date` fields, no invented "verified as of today" claim; all evidence provenance-`VALID`.

**Screening:** the generator fails closed on any non-`CLEAN` result; the real run screened `CLEAN`.

**Local verification:** `npx tsc --noEmit` clean; `npx eslint organizational-learning/` clean; `npm run test:fast` **274/274 passing**, 25 files (up from 257/24); `npm run build` succeeds; Prettier clean; Markdown Quality Gate PASS on both revised report files; `package-lock.json` unchanged.

**Applicable CI:** this round modifies `vitest.fast.config.ts`, which is in `full-assurance.yml`'s path filter — a real Full Assurance run is therefore expected and will not be suppressed. Exact-head CI (including Full Assurance) to be confirmed on the pushed head; not asserted as already complete here.

**Scope confirmation:** no candidate/promotion record modified; no `INSTITUTIONALISED`/`ORGANIZATION_WIDE`/Founder-approval claim; no semantic ranking; no real mission activation; no Stage 4 work; no background automation/autonomous writer; no dependency/lockfile change. Not self-approved. PR #589 not merged. `SB-P-1.12` not activated.
