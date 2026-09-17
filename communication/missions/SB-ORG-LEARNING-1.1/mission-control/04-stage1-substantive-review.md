# SMART BUSINESS MISSION CONTROL

# SB-ORG-LEARNING-1.1 — Stage 1 Substantive Review

**Mission:** `SB-ORG-LEARNING-1.1 — Smart Business Organizational Learning Engine — Implementation`

**Stage:** `1 — Contracts, Security Boundaries & Deterministic Harvester Foundation`

**Reviewer:** Active Smart Business Mission Control

**PR:** `#588`

**Disposition:** `CORRECTION REQUIRED BEFORE CODEX INDEPENDENT VERIFICATION`

**Product Mission state:** `SB-P-1.12 — NOT ACTIVATED`

---

## 1. Review scope

Mission Control reviewed the current Stage 1 branch, PR #588, the Claude Code durable report, key contracts, harvester behavior, current CI evidence, and the Stage 1 authorization/handover requirements.

The implementation is substantially within the approved Phase A + deterministic Phase B boundary. Candidate/promotion separation, committed-object reading, path safety, fail-closed screening behavior, deterministic harvesting, Fast Gate integration, no-new-dependency discipline, and Stage 1 exclusions are materially aligned with the approved architecture.

However, Stage 1 is not yet ready for Codex independent verification because one authorized technical requirement is incomplete and the current evidence/reporting language has become self-invalidating as branch-head corrections create newer heads.

---

## 2. Blocking finding — dangling provenance validation is not implemented

The active Stage 1 instruction explicitly requires:

`tests for invalid/dangling provenance`

The controlling B2 rule also requires fabricated or unresolved evidence references to fail validation.

Current implementation validates provenance shape and defines a `DanglingCheckResult` type, but it deliberately does not implement the runtime check proving that `commit_sha + path + blob_sha` resolves to the claimed committed object. Current provenance tests cover malformed SHAs, unsafe paths, actor/relationship validity, strict fields, and same-source comparison, but not an actual dangling path/blob/commit rejection against Git plumbing.

This is not a later-stage semantic-extraction concern. The Stage 1 contract/security foundation must provide and test the committed-object provenance-validation primitive now so later stages cannot accept well-shaped but false evidence references.

### Required correction

Implement a narrow repository-native provenance-resolution validator using the existing committed-Git-object reader. It must distinguish at minimum:

- valid exact reference;
- commit not found;
- path not found at commit;
- non-regular object;
- blob SHA mismatch.

Add environment-independent tests using only isolated ephemeral Git repositories. Do not process any real mission proof target.

Do not add dependencies or modify `package-lock.json`.

---

## 3. Evidence/reporting correction — stop recursive final-head claims

The durable report and live report recorded earlier branch heads as "final" and stated that all CI passed on those exact heads. Subsequent report-only corrections then created newer branch heads, making the recorded "final" head stale again.

Current branch head at this Mission Control review is newer than the heads asserted in those reports, and Full Assurance on the current head was still in progress when inspected. Therefore the reports must not claim that an earlier head is the immutable final pushed head or that every check has passed on a head that has since changed.

### Required correction

Revise the durable report/live builder section so that they distinguish:

- implementation commit(s) that were tested;
- current PR/branch as the live source of exact-head CI truth;
- CI evidence by workflow/run where known;
- no self-referential promise that the Markdown file contains its own final branch SHA.

Do not create repeated "correct final head" commits. The PR/Actions record is the immutable source for exact current-head CI.

After the technical correction is pushed, wait for applicable CI on the new head and report the result without creating another recursive metadata-only correction solely to embed that head SHA.

---

## 4. Mission Control disposition on builder interpretive decisions

### Evidence allowlist scope

`merge/active/**` remains excluded from harvestable learning evidence at Stage 1. Current governance is authority context, not candidate-learning evidence by default. This interpretation is accepted for Stage 1.

### All-or-nothing evidence resolution

Failing closed when any closure-linked evidence reference is ineligible or unresolvable is accepted for Stage 1. Partial silent harvesting would weaken provenance integrity.

### Receipt mission ID and failure-state mapping

Keeping receipt `mission_id` capable of recording malformed input, and using `VALIDATION_FAILED` as the Stage-1-reachable failure state, are accepted for Stage 1.

### Minimal Stage 1 scanner

The current heuristic scanner is accepted only as a Stage 1 fail-closed proof implementation, not as production-grade sensitive-data assurance. Before Stage 2 processes real repository evidence, Mission Control must explicitly decide whether a stronger scanner is required. This is a retained Stage 2-entry risk, not a reason to expand the current correction beyond Stage 1.

---

## 5. Scope preserved

This correction does not authorize:

- AI extraction;
- the real `SB-OPS-CI-ARCHITECTURE-1.0` proof target;
- background automation;
- provider/network writes;
- autonomous repository writes;
- promotion execution;
- Stage 2;
- `SB-P-1.12`;
- self-approval or merge.

---

## 6. Required return

Claude Code must apply only the two corrections above on the existing authorized Stage 1 branch, update the durable report and live builder section without recursive final-head claims, run applicable local checks, push, wait for applicable CI, and return:

`STAGE 1 CORRECTION REPORTED — MISSION CONTROL RE-REVIEW REQUIRED`

Mission Control will then perform a narrow re-review of the correction before authorizing Codex independent verification.
