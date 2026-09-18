# SB-ORG-LEARNING-1.1 — Mission Learning Report

**Prepared by:** Claude Code (builder), on the `mission/SB-ORG-LEARNING-1.1-learning` branch.

**Authority basis:** `communication/live/instruction.md` ("EXECUTE POST-MERGE OLE LEARNING HANDOFF"), executing the standing rule in `communication/missions/SB-ORG-LEARNING-1.1/mission-control/39-standing-mission-closure-ole-learning-handoff-rule.md` and the handoff initiation in `communication/missions/SB-ORG-LEARNING-1.1/mission-control/40-postmerge-verification-and-ole-learning-handoff.md`.

**Contract followed:** `communication/missions/SB-ORG-LEARNING-1.0/mission-control/03-final-reconciled-build-plan-and-acceptance.md`, Section 12 ("Mission Learning Report — approved v1 contract"), 8 required sections.

**Status of this report:** `CANDIDATE` — informational and reusable-context input only. `authority_effect: NONE`. This report does not close the mission, does not promote any learning item, and does not carry Founder or Mission Control approval. All 8 underlying candidate learning items it summarizes remain individually reviewable and separately promotable (or not) by Mission Control / Founder, on their own merits, independent of this narrative.

---

## 1. Mission identity and authoritative closure

- **Mission:** `SB-ORG-LEARNING-1.1` — Organizational Learning Engine v1 implementation.
- **Mission class:** organizational-institutional-capability.
- **Implementation merged:** PR #589, merge commit `85e917b4256edb01c77a2be0f909512b32be4cef`, authorized by `communication/missions/SB-ORG-LEARNING-1.1/mission-control/38-stage6-whole-mission-premerge-acceptance-and-founder-merge-gate.md` (Stage 6 whole-mission pre-merge acceptance and Founder/human merge gate).
- **Post-merge verification:** independently confirmed by Mission Control in `mission-control/40-postmerge-verification-and-ole-learning-handoff.md` — PR #589 closed/merged, `main` resolved exactly to the merge commit, final pre-merge CI green across all three applicable workflows.
- **Closeout PR #592:** merged, adding post-merge verification records, the standing OLE closure rule (`mission-control/39`), and README/handover updates; canonical current `main` is `96f875927b2d4808a95e5c89de6c4a216817e0da`.
- **Closure envelope for this learning cycle:** `communication/missions/SB-ORG-LEARNING-1.1/claude-code/11-ole-learning-handoff-closure-envelope.json`, `final_disposition: "IMPLEMENTATION MERGED — POST-MERGE VERIFICATION PASS — OLE LEARNING HANDOFF INITIATED"`, `source_snapshot_ref: 96f875927b2d4808a95e5c89de6c4a216817e0da`.
- **What this report is not:** a formal mission closeout. Formal closeout of `SB-ORG-LEARNING-1.1` and any consideration of `SB-P-1.12` activation remain exclusively Mission Control's decision, per `mission-control/38` Section 10 ("Post-merge requirement").

---

## 2. Evidence / provenance manifest

- **Harvester run:** `node organizational-learning/scripts/harvest.mjs --envelope communication/missions/SB-ORG-LEARNING-1.1/claude-code/11-ole-learning-handoff-closure-envelope.json`, real (not ephemeral-repo) run against the actual committed repository state at `96f8759...`.
- **Receipt:** `organizational-learning/receipts/d07a9df3f266f88098a0d2c6d8468e472adb07f768bd70714b3915769046e79b/f59d41a10a2eb12c7e28617dca3fbf3dc64fc2e9bb7c2028c564b38450057c2b.json`, `processing_state: SCREENED`, `screening_result.status: CLEAN`, `source_fingerprint: f59d41a10a2eb12c7e28617dca3fbf3dc64fc2e9bb7c2028c564b38450057c2b`.
- **Idempotency proof:** re-running `reconcile.mjs` against the identical closure envelope correctly returned `ALREADY_PROCESSED` against the existing receipt.
- **Evidence manifest (4 files harvested from the allowlisted `acceptance_refs`/`closure_refs`):**
  - `communication/missions/SB-ORG-LEARNING-1.1/README.md`
  - `communication/missions/SB-ORG-LEARNING-1.1/mission-control/38-stage6-whole-mission-premerge-acceptance-and-founder-merge-gate.md`
  - `communication/missions/SB-ORG-LEARNING-1.1/mission-control/39-standing-mission-closure-ole-learning-handoff-rule.md`
  - `communication/missions/SB-ORG-LEARNING-1.1/mission-control/40-postmerge-verification-and-ole-learning-handoff.md`
- **Candidate-level provenance:** 8 candidate learning items were drafted, each with claim-level evidence citing exact `repository` / `commit_sha` / `path` / `blob_sha` / `locator`, all pinned to the single canonical commit `96f875927b2d4808a95e5c89de6c4a216817e0da` (every underlying evidence document already lives on `main`, so no ephemeral repository was needed for this harvest, unlike earlier Stage 2A/4A/5 test suites which had to prove against synthetic fixtures).
- **Provenance validation:** every one of the 26 total evidence references across all 8 candidates was independently resolved with `organizational-learning/lib/provenance-validator.ts`'s `validateProvenanceReference` against the real repository — **26/26 `VALID`, 0 dangling.**
- **Screening:** every candidate file was scanned with `organizational-learning/lib/screening.ts`'s `runHeuristicScan` — **8/8 `CLEAN`, 0 findings.**
- **Structural provenance boundary:** the evidence allowlist (`communication/missions/**`, `communication/archive/**`) excludes `communication/live/**` and all of `organizational-learning/**`. No candidate in this handoff cites, or could validly cite, any previously generated OLE artifact (a candidate, a promotion, a receipt) as evidence for a new claim — this is enforced by the harvester's allowlist, not merely by convention.

---

## 3. What worked and why

- **Narrow, finding-scoped correction cycles** (see Candidate 01) let a genuinely hard, multi-layered filesystem-safety defect be resolved across seven Stage 5 rounds without ever re-litigating already-settled work — each round's authorization named exactly one finding and explicitly preserved everything already resolved.
- **Deterministic proof before automation** (Candidate 06): Stage 4's bounded, manually-triggered reconciliation was accepted and proven on its own narrow merits, while Stage 4B background automation was explicitly, separately deferred rather than implicitly assumed safe by association. The Founder merge authorization itself repeated this boundary at the point of merge.
- **Structural (not just conventional) separation of candidate generation from promotion authority** (Candidate 07): the `.strict()` candidate schema made prohibited promotion-shaped fields impossible to include, and Stage 3A's promotion proof was explicitly framed as materializing an already-made Mission Control decision, never a builder judgment.
- **Planner-level duplicate/conflict detection keyed on full content, not path strings or classifier-visible fields alone** (Candidate 05): S5-F-04's fix moved identity grouping into `planReconciliation` itself and compared full envelope content, catching a conflict that differed only in a field the classifier never reads.
- **This harvest itself worked as designed:** running the real (non-ephemeral) harvester against permanently-merged evidence produced a clean, deterministic, schema-valid receipt on the first attempt, and every generated candidate validated against `CandidateLearningItemSchema` on the first or second attempt (one title-length fix, see Section 4).

---

## 4. What failed / near-misses / corrections

- **Windows-only empirical testing missed a real cross-platform divergence** (Candidate 03): the S5-F-06 correction's first push passed every local Windows check (typecheck, lint, build, Prettier, 361/361 Fast Tests) but genuinely failed real Linux CI (3 Fast Test failures), because Windows and Linux disagree on the `lstat` error code (`ENOENT` vs `ENOTDIR`) for "path component is a file, not a directory." This was not a safety regression (both codes fail-closed to the same result) but was a real, reported CI failure, corrected narrowly (`isUnresolvedPathError`, scoped only to the walk's retry decision) and re-verified.
- **A CI-watch command's exit status was once discrepant with the real per-job outcome** (Candidate 04): subsequent Stage 5 rounds explicitly switched to confirming CI conclusions via direct `gh api ... --jq .conclusion` queries per job rather than trusting the watch command alone.
- **A four-defect chain around "absence" detection** (Candidate 02): S5-F-01, F-05, F-06, and F-07 each found a progressively narrower way that a filesystem lookup failure could be mistaken for genuine absence (a dangling junction, an unvalidated found ancestor, a null/no-ancestor result) — each fix closed the specific reproduced case without immediately closing the general principle, until S5-F-07's fix finally reused the existing fail-closed path for the fully general case.
- **This report's own drafting had one minor, immediately-corrected schema failure:** Candidate 07's first `canonical_title` exceeded the schema's 200-character limit; shortened and re-validated to `PASS` on the next attempt. Recorded here rather than silently omitted, consistent with this mission's established transparency norm for reporting genuine failures (Candidate 03, Candidate 04).
- **Independent verifier capacity constraint** (Candidate 04): Codex's final S5-F-07 re-verification pass genuinely hit an execution-capacity interruption mid-review and was safely resumed (retaining valid completed evidence, executing only the missing check) rather than restarted or reported complete without the missing check actually running.

---

## 5. Candidate lessons and anti-patterns

Eight candidate learning items were drafted (all `maturity: CANDIDATE`, `authority_effect: NONE`, `evidence_strength: DIRECT`), stored at `organizational-learning/candidates/SB-ORG-LEARNING-1.1/`:

| #   | File                                                                           | Title                                                                                                                                                          | Confidence |
| --- | ------------------------------------------------------------------------------ | -------------------------------------------------------------------------------------------------------------------------------------------------------------- | ---------- |
| 01  | `candidate-01-narrow-finding-scoped-correction-cycle.json`                     | Narrow, single-finding correction scope with finding-scoped independent re-verification resolves complex failure chains without re-litigating settled work     | HIGH       |
| 02  | `candidate-02-fail-closed-filesystem-ancestry.json`                            | Genuine absence is trustworthy only beneath a validated, existing directory ancestry                                                                           | HIGH       |
| 03  | `candidate-03-windows-linux-lstat-error-code-divergence.json`                  | Windows and Linux disagree on the lstat error code for "path component is a file, not a directory"                                                             | HIGH       |
| 04  | `candidate-04-direct-api-ci-confirmation-and-capacity-resumption.json`         | CI conclusions must be confirmed by direct per-job API query, not a watch-command exit code; capacity interruptions are resumed, never restarted or fabricated | MEDIUM     |
| 05  | `candidate-05-duplicate-envelope-identity-belongs-in-planner.json`             | Duplicate/conflicting processing-intent detection belongs in the planning step itself, keyed on full validated content                                         | HIGH       |
| 06  | `candidate-06-deterministic-proof-before-automation.json`                      | Accept a bounded, deterministic, manually-triggered slice before authorizing background automation over the same capability                                    | HIGH       |
| 07  | `candidate-07-candidate-generation-versus-promotion-authority-separation.json` | Candidate learning generation and human promotion decisions are structurally separate contracts                                                                | HIGH       |
| 08  | `candidate-08-manual-ole-trigger-dependency-risk.json`                         | Risk: the OLE still depends on a human or builder remembering to initiate it                                                                                   | HIGH       |

Each candidate's `anti_patterns` array names the specific failure mode it guards against (e.g., bundling unrelated findings into one correction pass; trusting a single filesystem lookup failure as absence proof without ancestor validation; treating a standing procedural rule as equivalent to having built the automation it compensates for). These are not repeated here in full — see the individual candidate files for exact wording and conditions of applicability.

---

## 6. Unresolved risks / follow-ups

Carried forward unchanged from the closure envelope's `retained_followups` (none resolved or reinterpreted by this learning cycle):

1. **GitHub Issue #590** — _OLE Stage 4B — Background Automation & Candidate Learning Runtime_ — remains deferred and not authorized. This manual learning handoff is itself first-hand evidence of the human-initiation gap Stage 4B must remove (Candidate 08).
2. **Full Assurance shared-write-path diagnostic** — a pre-existing diagnostic repeatedly observed as unresolved across multiple Stage 5 independent verifier reports; not claimed resolved by any passing test run in this mission.
3. **Candidate 3 five-vs-four follow-up-count discrepancy** (from the separate `SB-OPS-CI-ARCHITECTURE-1.0` candidate set, `explicit-followup-retention`) — an unresolved discrepancy between its acceptance and closure source documents, retained at `MEDIUM` confidence with an explicit `LIMITS` relationship; no stage has inferred a resolution.
4. **Untested distributed-scale scenarios** — production-grade distributed lease/locking, broader filesystem race conditions, and privileged trust-root replacement were never independently exercised in this mission and remain explicit out-of-scope limitations, not solved problems.
5. **Windows-checkout ESLint/CRLF friction** — repository-wide local ESLint on Windows checkouts fails solely on `core.autocrlf`-introduced CRLF differences against committed LF blobs; a verified checkout artifact, not an implementation defect, but a recurring local-verification friction point across every Stage 4–5 round.

No new risks or follow-ups were discovered by this learning cycle beyond what Stage 5/6 and the post-merge verification had already surfaced; this section is a faithful carry-forward, not an expansion.

---

## 7. Tool / resource / capability observations

- **`gh api ... --jq .conclusion` per job** proved to be the reliable way to confirm CI outcomes; a workflow-level watch/summary command was, at least once, discrepant with a job's real result (Candidate 04).
- **Ephemeral, isolated Git repositories** (created and destroyed per test) remained the correct pattern for proving filesystem-safety and reconciliation behavior against synthetic fixtures throughout Stages 2–5, distinct from this handoff's harvest, which — for the first time in the mission — read real, permanently-committed evidence directly from the working repository, because the evidence (Stage 6 acceptance, post-merge verification, the standing rule) is now genuinely on `main`.
- **This handoff's own verification tooling:** claim-level provenance validation and screening for all 8 candidates were run via a small one-off script in the session scratchpad (outside the repository), directly invoking the existing, unmodified `organizational-learning/lib/provenance-validator.ts` and `organizational-learning/lib/screening.ts` exports against the real repository. No new repository script, dependency, or CLI was added to perform this check — this observation is a process note about this session, not a sourced/evidenced candidate claim, and is not offered as reusable organizational learning in its own right.
- **Node 24's native TypeScript execution** (used throughout this mission's `.mjs` CLIs, which import `.ts` schema/library modules directly) continued to work without a separate build or transpile step for this ad hoc verification pass, consistent with the existing `organizational-learning/scripts/validate.mjs` pattern.

---

## 8. Confidence, evidence strength, maturity, freshness

- **Maturity:** all 8 candidates are `CANDIDATE`; none is `CORROBORATED`, `VALIDATED`, or `INSTITUTIONALISED`. This report is likewise informational only.
- **Authority effect:** `NONE` across every generated artifact in this handoff (closure envelope, receipt, all 8 candidates, this report). No governance, Product Truth, or institutional state was created or altered.
- **Evidence strength:** `DIRECT` for all 8 candidates — every claim cites a specific, independently-resolved, real committed document at the pinned `source_snapshot_ref`.
- **Confidence:** `HIGH` for 7 of 8 candidates; `MEDIUM` for Candidate 04, reflecting that its "watch-command discrepancy" claim is supported by an explicit but comparatively terse textual reference ("after the first push's discrepancy") rather than a fully narrated blow-by-blow account.
- **Freshness:** every evidence reference's `evidence_date` is `2026-09-18T14:38:17Z` (the commit date of the current canonical `main`, `96f875927b2d4808a95e5c89de6c4a216817e0da`); every `observation_date` is `2026-09-18T15:00:00Z` (this session). No item is stale relative to its own source as of this report.
- **No-material-reusable-learning statement:** **not applicable.** Substantial reusable learning exists for this mission, as anticipated by the governing instruction; the no-learning path was correctly not used.
- **Explicit non-claims:** this report does not claim mission closure, does not self-promote any candidate to a higher maturity, and does not self-merge. Promotion of any of the 8 candidates remains a separate, later, human-controlled decision under `PromotionReviewSchema`, exactly as Stage 3A previously proved for the `SB-OPS-CI-ARCHITECTURE-1.0` mission.

---

## Context-refresh recommendations for future Smart Business missions

These are offered as recommendations for how a future mission-start context pack (Stage 3B contract, Section 13 of the SB-ORG-LEARNING-1.0 build plan) could draw on this mission's candidates, not as a context pack itself (none was generated or requested this round):

1. Any future mission involving filesystem existence/absence checks should be pointed at Candidates 02 and 03 before design begins, not after a defect is found.
2. Any future mission whose CI matrix spans more than one OS should be pointed at Candidate 03's cross-platform-errno lesson during test design, not during CI-failure triage.
3. Any future mission establishing a new correction/re-verification loop (builder + independent verifier) should be pointed at Candidates 01 and 04 for the narrow-scope and direct-API-confirmation patterns.
4. Any future mission proposing to generate AI-drafted content with eventual institutional weight should be pointed at Candidate 07's structural candidate/promotion separation as a starting design constraint, not an afterthought.
5. Any future Stage 4B design or scoping discussion should be pointed at Candidate 06 (deterministic-before-automation) and Candidate 08 (the manual-trigger risk this very handoff exercised) as its primary input evidence.

---

**GitHub Issue #590** — _OLE Stage 4B — Background Automation & Candidate Learning Runtime_ — is the canonical deferred follow-up surfaced by this mission and by this learning cycle. It is not implemented, scoped for implementation, or authorized by this report.
