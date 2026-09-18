# SB-ORG-LEARNING-1.1 — Stage 2B Independent Candidate Verification

**Verifier:** Codex

**Date:** 2026-09-17

**Disposition:** `FAIL`

**Completion readiness:** Stage 2 is not ready for Mission Control completion review as a passing stage. Two candidate-content defects require a narrow Mission Control correction decision. No candidate or implementation was changed by this verification.

## Authority and reviewed repository state

This report executes the current user instruction, [live instruction](../../../live/instruction.md), and [Mission Control authorization 16](../mission-control/16-stage2b-substantive-review-and-codex-authorization.md). Codex read the Stage 2B builder report, authorization 15, Stage 2A report, closure envelope, committed receipt, all four candidates, candidate/provenance contracts, runtime provenance validator, and all three pinned source objects. Builder and Mission Control conclusions were not substituted for independent validation or semantic comparison.

- Repository: `SmartBusinessv1/smart-business`; origin `https://github.com/SmartBusinessv1/smart-business.git`.
- Branch: `mission/SB-ORG-LEARNING-1.1-stage2`.
- [PR #589](https://github.com/SmartBusinessv1/smart-business/pull/589): `OPEN`, unmerged; base `main` at `4247cebc9eb6a09ab9549f641247a012b6c9d383`.
- Reviewed local/remote/PR head: `7f4543d682f18d7e345a4e34b37404f9a292430c`, exactly the user-specified Mission Control handoff.
- Builder candidate commit: `376ed57878e7d54bdd87530ba6ca2e256dfe0062`; builder CI-report commit: `4e9cedba4644ef5bf3687d5ce1dba486d92130b5`.
- Subsequent Mission Control commits: `28834c4`, `756ec01`, `7f4543d`; only authorization/live communication changes.
- Reviewed PR merge-test SHA: `a57a12cbcdfd5b1b33a7687e8d00e7da14071868`.

The working tree was clean. Fetch and fast-forward from `4e9cedb` completed without conflict. No descendant beyond the expected handoff existed. Repository instructions, canonical governance and communication protocol were unchanged from the prior verifier publication.

## Findings and narrow correction scope

### S2B-F-01 — Candidate 2 overstates per-head exact Fast Test evidence

In `organizational-learning/candidates/SB-OPS-CI-ARCHITECTURE-1.0/candidate-02-exact-run-level-closure-evidence.json`, line 15, claim `acceptance-head-run-evidence` says the acceptance record gives exact Fast/Full file and test counts **for each** of the implementation and later pre-review heads. Its summary at line 5 similarly describes exact counts for each verification pass.

The sole reference for that claim is pinned source A, Section 3, lines 39–56. It records:

- Implementation head `74455d5...`: workflow numbers/IDs, Fast Tests **8/8 files, 61/61 tests**, and Full Assurance **20/20 files, 108/108 tests**.
- Later communication head `6a3ea8f...`: workflow numbers/IDs and Full Assurance **20/20 files, 108/108 tests**, but **no exact Fast Test file/test counts for that head**.

Codex reproduced this by reading `git show b60741cce544adb713f7c384bbed09a05e23247e:communication/missions/SB-OPS-CI-ARCHITECTURE-1.0/mission-control/06-stage4-acceptance-and-founder-merge-handoff.md` and comparing the two lists with candidate 2. The other two screened sources do not supply exact Fast counts for the later pre-review head either. An unchanged implementation and a successful workflow do not establish that this record explicitly enumerates those counts for both heads.

**Impact:** the reference exists and is correctly pinned, but does not support the entire stated claim. `DIRECT`/`HIGH` cannot certify the overstatement as written. This does not allege that the historical tests failed.

**Narrow correction:** qualify candidate 2's claim and summary to distinguish the counts actually recorded for each head. Preserve the supported exact-run evidence lesson. Reconcile the builder report's corresponding “for each” description if retained. No historical source, implementation, schema, CI workflow or test change is needed; do not expand the approved evidence set to repair the wording.

### S2B-F-02 — All 14 references misidentify the observation actor

The accepted `organizational-learning/schemas/provenance.schema.ts`, lines 22–23, explicitly defines `actor_class` as who is making the observation, **not who authored the underlying file**. All 14 candidate evidence references instead contain `actor_class: mission-control` and `observation_date: 2026-09-17T10:29:29Z`. That timestamp is also every candidate's synthesis-generation timestamp; each `generated_by.actor_class` correctly says `synthesis`.

The actual pinned sources identify Mission Control as their authority and are dated 2026-09-16. They do not establish Mission Control as the actor making these new synthesis-session observations on 2026-09-17. The schema accepts the enum value syntactically, and the runtime validator checks only commit/path/blob identity; neither verifies this semantic actor attribution. For a concrete example, candidate 2 lines 23–24, 45–46 and 61–62 contain the affected fields. The same mismatch occurs in all four candidates, in all references tabulated below.

**Impact:** source authority and observation actor are conflated at claim-provenance level. The top-level synthesis boundary remains present, and this finding is not a claim that any promotion actually occurred.

**Narrow correction:** record the actual synthesis observer in the 14 existing reference `actor_class` fields. Keep Mission Control's source authority evident through the pinned source and locator, and preserve truthful source/observation dates. Do not alter the accepted contract to accommodate the candidate metadata, create approval artifacts, or change the historical sources. Reconcile the builder's all-clear provenance assessment as needed. Codex has not made these corrections.

## Independent validation and source-boundary identity

Codex used Windows/Node `v24.18.0` and the existing, unmodified machinery:

```text
node organizational-learning/scripts/validate.mjs candidate <each of the four candidate paths>
validateProvenanceReference(repositoryRoot, eachReference)
runScreeningSafely(runHeuristicScan, candidateFiles)
```

Each actual candidate CLI invocation exited **0**, emitted `validate: PASS`, and had empty stderr. Closure-envelope and receipt CLI validation also passed independently. Recursive field inspection found none of the named prohibited approval/promotion fields; strict schema validation rejects unrecognized object keys.

Source mission: `SB-OPS-CI-ARCHITECTURE-1.0`. All references bind to commit `b60741cce544adb713f7c384bbed09a05e23247e`, repository `SmartBusinessv1/smart-business`, closure revision `07-post-merge-verification-and-closure`, and receipt fingerprint `c9a23fb318bcbb1e9f58e5117c98950ff25a7a3d5a14303e4916008099af9475`.

The committed receipt is `organizational-learning/receipts/3f8f4a6eff8829b3ad11357702b50e9d826838f62a1a99e9aea78a02bf5a11e7/c9a23fb318bcbb1e9f58e5117c98950ff25a7a3d5a14303e4916008099af9475.json`. Codex independently matched its three manifest entries to envelope acceptance/closure paths, resolved each with `git ls-tree`, read the actual blobs with `git cat-file -p`, and recalculated the fingerprint from schema version, closure revision and sorted `path@blobSHA` lines using SHA-256. It matched exactly. No harvester run or receipt write was performed.

| Source | Exact path at the pinned commit | Exact blob SHA | Object |
| --- | --- | --- | --- |
| A | `communication/missions/SB-OPS-CI-ARCHITECTURE-1.0/mission-control/06-stage4-acceptance-and-founder-merge-handoff.md` | `58ab6cf861050749a54a5b80309e00f34234b029` | Regular blob, mode `100644` |
| B | `communication/missions/SB-OPS-CI-ARCHITECTURE-1.0/mission-control/07-post-merge-verification-and-closure.md` | `b05640a4044471e858cb48c53180afe78fa27175` | Regular blob, mode `100644` |
| C | `communication/archive/SB-OPS-CI-ARCHITECTURE-1.0/communication.md` | `8054ef3156a92a5da43ad4818d46077a1a8b08f6` | Regular blob, mode `100644` |

## Candidate-by-candidate result

Files are under `organizational-learning/candidates/SB-OPS-CI-ARCHITECTURE-1.0/`.

| Candidate | File | Schema | Claims / refs | Semantic and confidence assessment | Overall |
| --- | --- | --- | --- | --- | --- |
| 1 | `candidate-01-two-tier-ci-architecture.json` | PASS | 2 / 4 | Architecture observation supported by A/B; numeric baseline appears elsewhere in A Section 3 and C. HIGH is supportable for that scoped synthesis. | FAIL: S2B-F-02 |
| 2 | `candidate-02-exact-run-level-closure-evidence.json` | PASS | 2 / 3 | Exact-run lesson and post-merge claim supported; per-head Fast-count overstatement prevents accepting HIGH for the claim as written. | FAIL: S2B-F-01 and S2B-F-02 |
| 3 | `candidate-03-explicit-followup-retention.json` | PASS | 3 / 5 | Follow-up discrepancy, LIMITS relationship and MEDIUM confidence supported; no resolution inferred. | FAIL: S2B-F-02 only |
| 4 | `candidate-04-explicit-closure-scope-boundary.json` | PASS | 2 / 2 | Explicit scope boundary supported; HIGH is supportable for the documentary observation. | FAIL: S2B-F-02 |

## All 14 evidence-reference results

Every row independently returned runtime provenance **VALID**, with the exact commit/path/blob and regular-file mode shown above. Every locator heading exists. This proves object identity, not semantic support or actor correctness. **S2B-F-02 applies to every row's observer metadata.** Reference numbers below follow candidate/claim/evidence array order.

| Ref | Candidate / claim | Source and locator | Relationship | Independent evidence-reach result |
| --- | --- | --- | --- | --- |
| 01 | 1 / `fast-gate-always-runs` / 1 | A, Section 2, first architecture bullet | SUPPORTS | Supports always-running environment-independent tier; exact 61-test count is in A Section 3, outside the narrow locator. |
| 02 | 1 / `fast-gate-always-runs` / 2 | B, Mission outcome, first two bullets | SUPPORTS | Supports always-running Fast Gate and separation; does not independently enumerate 8/61. |
| 03 | 1 / `full-assurance-selective` / 1 | B, Mission outcome, third/fourth bullets | SUPPORTS | Supports selective relevant-path/manual execution and documentation-only exclusion. |
| 04 | 1 / `full-assurance-selective` / 2 | A, Section 2, second architecture bullet | SUPPORTS | Supports selective dependent tier; exact 20/108 file/test distinction is confirmed in A Section 3. |
| 05 | 2 / `acceptance-head-run-evidence` / 1 | A, Section 3, both head-specific lists | SUPPORTS | Partial support only: exact run identities for both heads, but exact Fast counts for the first only. S2B-F-01. |
| 06 | 2 / `post-merge-run-evidence` / 1 | B, Post-merge assurance | SUPPORTS | Supports all three workflow identities at the merge commit and Full Assurance 20/108/0. |
| 07 | 2 / `post-merge-run-evidence` / 2 | C, Chronology, last two bullets | SUPPORTS | Restates the same merge-run identities and 20/108 outcome. B explicitly supplies zero failures; C is not independent corroboration. |
| 08 | 3 / `followups-named-at-acceptance` / 1 | A, Section 4 | SUPPORTS | Exactly five follow-ups and explicit non-resolution by acceptance. |
| 09 | 3 / `followups-named-at-closure` / 1 | B, Carried follow-ups | SUPPORTS | Exactly four named items and explicit non-resolution by closure. |
| 10 | 3 / `followups-named-at-closure` / 2 | C, Final Reconciled Closure | SUPPORTS | Same four unresolved, non-blocking items; documentary repetition. |
| 11 | 3 / `followup-list-narrowed-at-final-closure` / 1 | A, Section 4, fifth bullet | SUPPORTS | Explicit future Fast Gate branch-protection policy decision. |
| 12 | 3 / `followup-list-narrowed-at-final-closure` / 2 | B, Carried follow-ups | LIMITS | Four-item list omits that policy follow-up and explains no disposition. Limits complete-retention interpretation; does not establish resolution. |
| 13 | 4 / `closure-disclaims-production-authority` / 1 | B, closing Carried follow-ups paragraphs | SUPPORTS | Explicitly disclaims broader authorization and preserves SB-P-1.12 non-activation. |
| 14 | 4 / `acceptance-scoped-to-implemented-architecture-only` / 1 | A, Section 2, final bullet | SUPPORTS | Explicit no-change boundary for dependency/lockfile, database/provider, production, deployment and branch protection. |

## Candidate 3 special assessment

Source A's five items are Auth/JWKS reliability, action-runtime deprecation, dependency backlog, inventory shared-write-path diagnostic, and a future Fast Gate branch-protection policy decision. Source B lists the first four; C repeats those four. Neither B nor C supplies a disposition for the fifth follow-up. B's statement that closure authorizes no branch-protection change is a scope restriction, not a resolution of the policy follow-up.

Candidate 3 expressly preserves the omission and uncertainty. A SUPPORTS the fifth item's existence; B LIMITS the broader retention interpretation. This relationship is defensible in the candidate's combined claim/context, even though the four-item list also directly establishes the documentary difference. MEDIUM confidence is appropriate for the broader retention lesson. No inference that the item was resolved, superseded or intentionally dropped is justified or made by the candidate. Its semantic content does not need correction for this discrepancy; its observer metadata remains subject to S2B-F-02.

## Authority, strength and semantic reach

All four remain `maturity: CANDIDATE`, `authority_effect: NONE`, and `generated_by.actor_class: synthesis`. No hidden promotion/approval field was found. No candidate creates a review decision, claims its own Founder/Mission Control approval, asserts institutional maturity, or resolves the retained risks. Source Mission Control authority is genuine documentary context, but does not justify the new observer attribution identified in S2B-F-02.

All four use `DIRECT`; none upgrades repeated records into CORROBORATED evidence. DIRECT is appropriate for explicit documentary observations, subject to S2B-F-01's unsupported fragment. B/C repetition is the same underlying closure event, not independent corroboration. HIGH for candidates 1/4 and MEDIUM for 3 are synthesis confidence, not approval; candidate 2 requires correction before HIGH can be accepted for its full wording.

The mission IDs, summaries, scope, conditions and anti-patterns were read alongside the claims. The reusable cautions are conditional synthesis, not an organizational mandate or proof across other missions. No candidate converts the CI example into a production/security/deployment guarantee. Historical 61/108 test counts describe this source mission, not today's expanded OLE/Fast baseline. The identified per-head overstatement is the specific evidence-reach exception.

All 14 references point only to A/B/C. None cites candidates, the receipt, the Stage 2B report, live communication or generated learning as primary supporting evidence. The receipt was used only to establish the screened source boundary. No external web evidence or unrelated mission was used to judge candidate truth.

## Independent screening and diagnostic control

Existing `runScreeningSafely(runHeuristicScan, ...)` returned **CLEAN, zero findings, four scanned paths** for the actual candidate JSON bytes. A separate read-only scan of the three pinned source objects returned CLEAN/zero/three. Manual inspection found no raw secret-like content in the candidate artifacts.

An isolated temporary malformed JSON control containing a fabricated secret-shaped canary made the actual candidate validation CLI exit 1 with its safe invalid-JSON diagnostic; neither stdout nor stderr echoed the canary. The same synthetic canary passed directly through the existing scanner produced QUARANTINED with no raw value in the result. The temporary directory was containment-checked and removed. No candidate, source, test or implementation file was edited.

This verifies the existing heuristic machinery and exercised diagnostic path, not universal absence of sensitive information or production-grade secret detection. The accepted scanner limitation remains. No external integration test or real harvester execution was rerun.

## Scope inventory and exact-reviewed-head CI

The full PR diff against `4247cebc9eb6a09ab9549f641247a012b6c9d383` contains 14 files: eight communication records, the candidate README, four candidate JSON files and one receipt. The Stage 2B delta from `ed6d75e` contains nine files: four communication records plus the candidate README/four JSON files. All implementation, schemas, tests, dependencies, lockfiles and workflows remain unchanged.

No promotion executor, registry, context pack, background automation, autonomous repository writer, Stage 3 implementation, governance/Product Truth modification, provider configuration or application/database change appears in those diffs. Repository evidence and current instructions preserve `SB-P-1.12 — NOT ACTIVATED`. This is not an audit of unrecorded external actor actions; Codex performed no provider, production or customer-data mutation.

Independently queried completed PR workflows at reviewed head `7f4543d682f18d7e345a4e34b37404f9a292430c`:

| Workflow | Exact run | Result |
| --- | --- | --- |
| Application Build Assurance #160 | [35211928740](https://github.com/SmartBusinessv1/smart-business/actions/runs/35211928740) | SUCCESS: lint, typecheck, build and Fast Tests. Actual log: 24 files / 257 tests passed, duration 8.05 seconds. |
| Markdown Quality Gate #1764 | [35211928789](https://github.com/SmartBusinessv1/smart-business/actions/runs/35211928789) | SUCCESS. |
| Full Assurance | No run at this head | Not applicable: all 14 aggregate PR paths are outside the unchanged `full-assurance.yml` selective path filter. Absence is not a failure. |

Checkout logs and the remote merge ref identify merge-test SHA `a57a12cbcdfd5b1b33a7687e8d00e7da14071868`, merging the reviewed head into the stated base. These workflow observations are separate from the builder commit, communication commits and eventual verifier publication. Green CI does not resolve semantic candidate defects; no later publication-head CI result is claimed here.

## Limitations and handoff

Schema validity and non-dangling references are necessary but do not certify semantic truth, observer identity or human approval. The two findings are bounded to candidate assertions/metadata and corresponding builder reporting. No correction to accepted Stage 1 implementation is proposed. Historical CI assertions were compared only with the permitted pinned source objects; old CI runs were not imported as substitute candidate evidence.

**FAIL — Stage 2B requires correction of S2B-F-01 and S2B-F-02 before a passing completion review.** Mission Control owns the correction and subsequent completion decision. Codex has neither promoted candidates nor created approval artifacts, authorized Stage 3, merged PR #589, or activated `SB-P-1.12`.

`STAGE 2B INDEPENDENT CANDIDATE VERIFICATION REPORTED — MISSION CONTROL DECISION REQUIRED`
