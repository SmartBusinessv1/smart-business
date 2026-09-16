# SB-ORG-LEARNING-1.0 — Codex Independent Review and Suggestions

## 1. Independent disposition

- **Mission:** `SB-ORG-LEARNING-1.0 — Smart Business Organizational Learning Engine`
- **Reviewer:** Codex; sequential Stage 2 independent assurance/adversarial review.
- **Date:** 2026-09-16.
- **Disposition:** `CHANGES REQUIRED BEFORE BUILD-PLAN ACCEPTANCE`.
- **Reviewed head:** `af1b81941fefe9d98477eaeca1d8217243a20ebc`.
- **Branch:** `mission/SB-ORG-LEARNING-1.0-proposal`.
- **PR:** [#583](https://github.com/SmartBusinessv1/smart-business/pull/583), independently observed OPEN, targeting `main` at `b60741cce544adb713f7c384bbed09a05e23247e` during intake; this is also the local merge base.
- **Implementation performed:** None. This review neither accepts the proposal nor authorizes implementation or merge.

The repository-native direction and Mission Control's reduced first slice are proportionate. Start with a deterministic local proof, lessons and risks, versioned records, receipts, and supervised candidate drafting. Two registries preserve the intended tool/resource/capability learning if those observations remain explicit categories with verification dates and limits. They must not become tool-adoption permissions or an alternative risk-resolution authority.

The plan is not yet sufficiently specified for acceptance as a build contract. Separating evidence, confidence, maturity, and status is necessary but does not itself prevent authority laundering. A record can pass a schema while citing the wrong authority, carrying an obsolete conclusion, or presenting an unreviewed `ACTIVE` candidate as established guidance. Findings B1–B7 below identify required design corrections and their stage gates; they do not demand implementation during this review.

The target can satisfy automatic post-mission learning without recurring manual extraction: authoritative closure makes a mission eligible; durable reconciliation detects unprocessed revisions; deterministic harvesting and isolated model extraction generate candidates or a supported no-learning outcome; independent publication checks constrain the proposed diff; humans retain promotion and merge authority. Manual proof is an intermediate gate, not the permanent design.

## 2. Intake, evidence, and limits

The current [live instruction](../../../live/instruction.md), [mission README](../README.md), [decision log](../decision-log.md), [handover](../handover-log.md), and [Codex instruction](00-review-instruction.md) define this stage. The [original proposal](../mission-control/01-research-and-build-plan-proposal.md) is read together with the [Claude review](../claude-code/01-engineering-review-and-suggestions.md). The [Mission Control reconciliation](../mission-control/02-claude-review-reconciliation-and-codex-authorization.md) controls where it narrows either document. Proposal and repository evidence informed the independent challenges; Claude's conclusions were then compared with those observations.

Governance intake used the [canonical index](../../../../merge/active/README.md) and [source-set map](../../../../docs/governance/Smart_Business_Canonical_Project_Source_Set_v1.0.md), foundational Sources 00/01, and relevant authority/evidence/continuity provisions of Sources 09, 11, 12, 15, 16A, and 17. [Source 18](../../../../merge/active/18_SB-P_Mission_Lifecycle_and_Delivery_Framework.md) informs interpretation of the sampled Product Mission, not automatic classification of this non-Product mission. [Source 17](../../../../merge/active/17_AI_Operations_Manual.md), Parts A and D–F, requires scoped capability, preserved uncertainty, and recovery from verified state. The [communication protocol](../../../AI_Communication_and_Handover_Protocol.md), especially sections 26–27, distinguishes durable mission state, archived raw communication, reconciled closure, and provisional publication status. Repository/actor instructions and the [Codex EOS workflow](../../../../docs/engineering/eos/ChatGPT_GitHub_Engineering_Artifact_Workflow_v1.0.md) govern publication.

| Evidence | Direct observation and permitted conclusion |
|---|---|
| [CI architecture closure](../../SB-OPS-CI-ARCHITECTURE-1.0/mission-control/07-post-merge-verification-and-closure.md) | Closure is Mission Control prose with exact merge/check evidence and carried follow-ups. Its presence is not a generic machine-readable closure contract. |
| [SB-P-1.11 Stage 24](../../SB-P-1.11/mission-control/24-documentation-closure.md), sections 1–6 | Formal documentation closure preserves `ACCEPTED WITH FOLLOW-UP`; it explicitly does not prove deployment, activation, or pilot readiness. This is a concrete evidence-reach counterexample. |
| Tracked mission-file inventory | No JSON/YAML mission-closure contract was found under `communication/missions/`. This is a scoped repository observation, not proof that no external orchestration exists. |
| [package.json](../../../../package.json) | Node ESM, Zod `^3.24.2`, and Vitest are declared; no AI-provider SDK or dedicated JSON Schema validator is declared. This does not prove a future provider call requires an SDK dependency. |
| [Fast Gate configuration](../../../../vitest.fast.config.ts) | Eight test files are explicitly included. Merely adding learning tests will not run them in Fast Gate; a later authorized change must include them. |
| [Build workflow](../../../../.github/workflows/build-assurance.yml), [Full Assurance](../../../../.github/workflows/full-assurance.yml), [Markdown gate](../../../../.github/workflows/markdown-quality-gate.yml) | Repository contents permissions are read-only. Full Assurance is path-filtered; documentation-only work does not require that external-environment suite. |
| [Parser deployment workflow](../../../../.github/workflows/aws-gc38r-parser-deploy.yml) | `contents: read` coexists with job-level `id-token: write` and AWS IAM/Lambda mutation commands. “No repository-writing workflow found” is supportable; “all workflows are read-only” without qualification is not. No workflow was manually dispatched for this review. |
| PR #288, GC-30 and GC-31 records | Historical scanner matches were classified as non-credential-grade; section 5 below states the evidence and limits without reproducing values. |

Repository files establish recorded facts and design conventions, not current production behavior. The engine does not exist in the reviewed change; all attack outcomes below are reasoned requirements for future tests, not executed engine tests. Existing cloud controls, provider credentials, or branch-protection settings were not modified or comprehensively re-audited.

## 3. Authority and human-control findings

### B1 — Separate generated content from promotion authority

**Severity/gate:** High; correct the build plan before acceptance and prove before any persistent candidate output is consumed as guidance. Proposal sections 8, 13, 24 and reconciliation section 6 establish intent but not an enforceable transition contract.

The model must not populate trusted `reviewed_by`, approval references, evidence classifications asserting Founder authority, maturity transitions, risk-resolution status, or accepted supersession edges. A generic schema accepting the entire maturity enum is insufficient. Use separate candidate-input and authorized-review contracts: generated candidates have fixed `CANDIDATE`, `authority_effect: NONE`, and unreviewed state. Reject prohibited fields rather than silently discarding an attempted promotion. Deterministic code assigns provenance references from the verified manifest; model-proposed classifications remain suggestions.

Mission Control may record `CORROBORATED`/`VALIDATED` under the reconciled scope; deterministic corroboration may attach evidence but cannot perform those transitions. Founder approval is required for v1 `INSTITUTIONALISED` organization-wide practice. Each promotion must reference the approving actor's mission authority, decision artifact, exact item revision, approved scope, and evidence. Content changes invalidate approval of that revision. Neither an actor-name string, an ordinary PR merge, nor a model's confidence establishes these facts.

An approval conflicting with higher authority must remain blocked for reconciliation; even human review does not silently amend Product Truth. Keep actual governance change on its separately authorized path. Map harvesting to Source 17 Read/Execute, candidate drafting to Draft, artifact/PR publication to Write, and promotion to the appropriate Mission Control/Founder decision. No future standing token or workflow substitutes for explicit authorization of its recurring scope.

### B2 — Bind provenance to individual claims and preserve evidence reach

**Severity/gate:** High; correct before build-plan acceptance; enforce in proof output.

Proposal section 8 lists source references and actor/date metadata, but a valid path and blob do not authenticate a Founder decision or prove a sentence. Require claim-to-evidence links containing repository identity, commit, path, blob, exact excerpt/span locator, originating actor class, observation date, evidence date, scope/environment, and support/contradict relation. Resolve every reference against a pinned accepted source set. Missing or fabricated references fail validation. A later summary citing an earlier summary is not independent corroboration; preserve the common evidence origin and count it once.

Keep Founder-direct language, recorded Founder decisions, Mission Control dispositions, independent verification, builder reports, operator attestations, CI evidence, historical records, and assistant inference distinct. Preserve who reports a claim separately from who verified it. Git authorship and a Markdown heading do not establish decision authority. Evidence strength should describe support for the particular claim; `HISTORICAL` alone is not a strength ranking. Preserve temporal applicability separately, without collapsing the four dimensions already approved.

For example, the SB-P-1.11 Stage 24 record supports “the defined implementation mission closed with follow-ups.” It does not support “the product was deployed and passed all production checks.” A generated report must retain the narrower scope, unresolved F23 follow-ups, and separate activation boundary. Hash/reference checks can prove existence and integrity; semantic entailment still needs constrained extraction, reviewer assessment, and measured error rates.

## 4. Source authority, history, and retrieval

### B3 — Allowlisted paths are eligible evidence, not automatically authoritative evidence

**Severity/gate:** High; correct before build-plan acceptance; enforce before the first harvest.

Keep the explicit exclusion of `communication/live/**` for lifecycle reasons. Tighten reconciliation section 4's broad directory examples into a mission-scoped, closure-linked source manifest. `communication/missions/<id>/**` also contains proposals, builder reports, superseded instructions, and failed reviews. `communication/archive/<id>/source/**` preserves the original transient exchange; archive placement does not turn every instruction into reconciled closure. The protocol explicitly separates that history from final reconciled state.

Load an accepted closure and its explicitly referenced evidence at a pinned canonical commit, classify each artifact's role, and distinguish historical observation from current authority. Allow external-to-mission repository artifacts only through reviewed exact references. Do not recursively follow arbitrary Markdown links, remote URLs, embedded instructions, local ignored artifacts, or references into environment files. Keep current governance available as a separately trusted comparison set; exclude the generated learning corpus as primary proof of its own claims.

Reject traversal, absolute/drive/UNC paths, alternate separators, ambiguous case aliases, symlinks, submodules, and non-regular Git objects for initial ingestion. Read committed Git objects rather than dirty worktree files. Apply normalized component boundaries, size/count/type limits, and the live-path exclusion after resolving references. A historical artifact formerly named under `communication/live/` can be eligible through its approved archive path, but only as historical evidence with its original limitations.

### B4 — Retrieval must preserve contradictions and freshness before ranking

**Severity/gate:** High for consumed context; specify now, prove before enabling context packs. Automatic contradiction discovery can be deferred; handling known contradictions cannot.

Claude's simple `ACTIVE` plus category/system filter could include unreviewed candidates and omit a contradictory risk from another category. Eligibility must also check reviewed maturity/scope, accepted revision, current authority compatibility, freshness, and unresolved conflict state. Display candidates only in a clearly identified candidate/review view. Confidence or `INSTITUTIONALISED` labels must never outrank current governance.

Retrieve explicit contradiction and supersession relationships before applying a size budget. Include both sides and their disposition, or emit a bounded unresolved-conflict warning with references; never silently truncate the dissenting side. Prefer current accepted replacements and isolate superseded material as historical anti-patterns. Reject dangling/cyclic supersession links. Treat amendment, rejection, reopened mission state, or source withdrawal as invalidation of affected advice pending review, not automatic authorization for a replacement lesson.

Tool/resource/capability observations need identity/version where available, conditions, last verified date, evidence, and review/expiry triggers. Stale or unavailable tools cannot appear as currently approved merely because they once worked. The risks registry must link to canonical mission follow-ups and their owners/resolutions, not independently close them. At this scale, explicit human-maintained relationships and deterministic checks are sufficient; no semantic ranking service is needed.

## 5. Security and the historical scanner discrepancy

### B5 — Screening and publication must form enforceable boundaries

**Severity/gate:** High; screening contract before first harvest; credential and publication isolation before automated extraction/publication.

Treat all source text, model output, filenames, citations, and prior learning as untrusted data. A prompt saying “ignore source instructions” is not an enforcement boundary. Extraction must have no command execution, repository writer, arbitrary network retrieval, production credentials, cloud identity, or approval tools. An already-governed interactive AI session can still be injected; supervision changes oversight, not the trust classification of source text.

Screen the exact selected bytes before any model/provider disclosure, and screen generated content, rendered Markdown, logs, and publication metadata before persistence. A secret scanner alone does not identify all personal or private business data. Use explicit data exclusions and quarantine ambiguous inputs without echoing raw matches. Scanner absence, failure, or unknown result blocks that mission's extraction; it is not a clean scan and is not “no reusable learning.” Any scoped suppression requires reviewed provenance and must not blanket-allow future values from the same path. Preserve safe identifiers and reasons in failure receipts, not copied sensitive content.

Separate extraction from a trusted publisher that reconstructs output using fixed templates and generated safe identifiers, validates the complete diff, rechecks current source/branch state, and allows only exact learning-output paths. It must not execute code or take workflow definitions from the candidate branch. Repository write permission is not a per-directory security capability: an application allowlist limits ordinary behavior but cannot fully contain a compromised writer credential. Before granting unattended write access, require separately reviewed minimal permissions, no bypass/admin/approval/merge powers, restricted branch behavior, protected-main review controls, and an explicit residual-risk decision. The read-only artifact-producing stage remains useful before that gate.

GitHub documents that actions may access `github.token` even when not explicitly passed it, making effective job permissions material: [GITHUB_TOKEN authentication](https://docs.github.com/en/actions/tutorials/authenticate-with-github_token). Existing AWS workflow examples must not supply cloud identity permissions to learning jobs.

### Independently reconciled historical evidence

1. GitHub reports [PR #288](https://github.com/SmartBusinessv1/smart-business/pull/288) MERGED on 2026-08-15 at `759ad3d91b926112efb94943ac7fec02ed54ae3b`. Its body and changed-path metadata agree with the repository-hygiene record; no environment-file deletion diff was printed.
2. [GC-30 report](../../../archive/SB-P-1.11/source/report1.135.md), sections 9–11, reports two current-tracked-tree findings and ten full-history findings, classified as a UUID-format correlation artifact and anon/publishable-key material. It specifically classifies historical `report1.57.md:54` as anon/publishable material. Section 15A records a procedural diagnostic-output deviation, not a newly established credential-grade leak.
3. [GC-31 Mission Control verification](../../../archive/SB-P-1.11/source/report1.136.md), sections 1–4, verifies the merged hygiene state and finds no repository evidence contradicting those classifications. It does not claim to independently rerun every historical scan.
4. In this checkout, `git ls-files --error-unmatch gitleaks-report.json` reports that the file is not tracked, and `git check-ignore gitleaks-report.json` confirms it is ignored. Selective parsing of its rule/path/line/commit/date fields confirms the scanner matches Claude cited without printing `Secret` or `Match` values. A local ignored scan artifact is neither a checked-in canonical source nor proof of credential sensitivity.

**Conclusion:** Claude's “checked into the repo root” claim is contradicted by tracked-state evidence, and “real secret”/“confirmed leak” overstates what these records establish. Mission Control's qualified conclusion is supported. This review verifies the evidence chain and classification discrepancy; it does not rerun a full-history security audit or guarantee the current repository is secret-free. Preserve both the original historical report and its correction. Screening remains mandatory for live, durable, and archived content alike. No credential values were reproduced and no rotation or history rewrite is proposed.

## 6. Closure, eventing, replay, and failure recovery

### B6 — Define authoritative closure before automatic triggering

**Severity/gate:** High; closure eligibility contract before the local proof; recurring trigger authority before background operation.

A merge, label, dispatch, README status string, or `PROCESSED` marker is a notification or processing observation, not closure authority. A closed mission may still have unresolved risks or unperformed production validation. The sampled closure records show why parsing “complete” alone is unsafe.

Specify a small versioned closure envelope, carried in a Mission Control-approved durable artifact or explicitly supplied approved proof manifest. It should identify mission/type, closure revision, accepted scope/disposition, authoritative acceptance/closure references, retained follow-ups, source snapshot, and any amendment/reopen/supersession relation. Do not require a file to contain its own eventual commit SHA: resolve the containing canonical commit after merge and record that in the processing receipt. For legacy missions, use a narrowly authorized explicit mapping to existing acceptance/closure records, not an automatic rewrite of every README.

The validator must verify accepted canonical ancestry and applicable approval evidence; a payload's self-asserted actor/status is insufficient. Ambiguous or contradictory closure records require reconciliation. Specify how reopening or correcting closure invalidates the earlier eligible revision. Do not allow the engine to edit mission authority to make itself eligible.

The target orchestration should react to accepted closure changes and periodically reconcile eligible closure revisions against terminal receipts. Notifications accelerate work; reconciliation recovers missed or reordered events. Use retries with bounded backoff, visible failure/backlog age, and a Mission Control owner for persistent failure. No authorized closure means no processing; no new reusable learning is a valid result only after adequate authorized evidence was processed. Engine downtime must not retroactively prevent an otherwise authorized mission from closing.

### B7 — Separate source identity, processing attempts, and accepted outcomes

**Severity/gate:** High; include in the plan and local proof; publication race tests before background writes.

Proposal section 21 and Claude's sorted blob list are useful foundations, but source hashing and a concurrency group alone do not guarantee recovery, independence, or reproducibility.

- Define a canonical source identity from repository, mission, closure revision/blob, and sorted normalized path/blob entries. Preserve source commit and evidence role in the manifest. Serialize unambiguously; do not concatenate unchecked path strings. Unrelated repository commits should not generate duplicate learning, while changes to closure authority or selected evidence must change identity.
- Record a processing specification separately: harvester, allowlist policy, scanner/configuration, schema, prompt, model/provider/version where available, parameters, and relevant authority/registry snapshots. Changed processing policy requires an explicit reprocessing reason linked to prior receipts. Do not silently treat an old receipt as proof of a new extractor's result.
- Use attempt IDs for retries and a stable source/processing identity for deduplication. Record distinctions such as blocked input, extraction failure, candidate ready, no material learning, and publication pending/complete. Human acceptance is a later event referencing the exact candidate revision, not a field silently rewritten in an “immutable” processing receipt.
- Assemble, validate, screen, and hash a complete output bundle before publication. Publish the bundle atomically as one Git change; do not mark success when only some files exist. After interruption, reconcile recorded hashes and actual branch/PR state before retrying. Do not blindly overwrite a human-edited candidate or emit a second PR because the first publication response was lost.
- Check for an existing outcome immediately before publication and update from an expected branch head. A losing concurrent attempt re-reads state and no-ops or reports conflict without force-push. Cross-mission writers also need protection against shared-registry collisions; mission-keyed workflow serialization alone cannot solve those.
- Preserve old receipts/revisions, but make only accepted current outcomes eligible for retrieval. An amendment creates a linked new outcome; an old event arriving late cannot reactivate obsolete advice. Retain enough approved input/output hashes to audit a run; model re-execution is not guaranteed to reproduce identical prose.

GitHub's [concurrency documentation](https://docs.github.com/en/actions/how-tos/write-workflows/choose-when-workflows-run/control-workflow-concurrency) states that the default pending run can be replaced and dispatch order is not guaranteed. Concurrency is useful coordination, not a durable event ledger. No database, general-purpose queue service, or distributed lock platform is required for the proof: Git state, deterministic identities, and explicit failure receipts suffice.

## 7. Schema choice, first slice, and automation progression

**Zod is a reasonable first validator, not a reason to reject a durable data contract.** The repository already declares Zod 3 and uses Node ESM. Use strict versioned runtime validation, bounded fields, cross-record checks, and separate candidate/review input shapes. Specify how `.mjs` entrypoints load the schema modules using the approved runtime/build path; do not leave mixed `.ts`/`.mjs` execution implicit.

Persist a canonical, versioned JSON-compatible record with explicit enum meanings and examples; render Markdown from it rather than independently maintaining two truths. Reject unsupported schema versions and record any later conversion as a new reviewed revision. JSON Schema remains a possible exported interchange format if a real cross-language consumer needs it. Do not introduce a new validator dependency or dual independently maintained schemas now. TypeScript inference alone is not a portable stored-data specification.

The first slice should include the closure/evidence manifest contract even if nested in the receipt instead of a fourth standalone schema. It is too small if it validates lesson shape but leaves mission eligibility and provenance untyped. It is still too large if it attempts ranking, automated contradiction discovery, seven registries, or three workflows before one clean proof.

| Gate | Proposed capability and evidence required | Authority boundary |
|---|---|---|
| Proof | Local deterministic harvest from one approved closed mission; supervised candidate/no-learning output; malformed/zero-source and other adversarial fixtures | New explicit implementation mission after plan acceptance; no standing AI/provider integration or writer |
| Automatic read/draft pilot | Governed closure contract; automatic notifications plus reconciliation; isolated bounded model calls; screened candidate artifacts and failure receipts; representative mission sample | Separate authorization for provider, data handling, cost, recurring scope, and operator; no automatic promotion |
| Candidate publication | Trusted publisher, exact output-path checks, revision binding, duplicate/recovery tests, protected PR route | Separate write capability review; human merge and Mission Control disposition remain required |
| Operational background engine | Every eligible closed mission revision accounted for by a candidate/no-learning terminal result or a visible failure backlog; monitoring and retry ownership | Recurring automation within an approved contract; no per-mission manual extraction requirement; no acceptance, governance, or production powers |

An AI-provider SDK is optional implementation plumbing; its absence does not prove that adding a dependency is necessary. Provider access and data/cost authorization still require explicit decisions. Neither supervised operation nor calling an API alone establishes safety. Keep model and writer privileges separated at both stages.

## 8. Metrics and proposed acceptance evidence

The proposal's metrics are useful categories but not yet acceptance thresholds. Mission Control should lock a pilot rubric before implementation acceptance. Proposed minimum safety thresholds: all persisted claims resolve to verified sources; all protected-field/path attacks are rejected; no seeded sensitive values appear in output/logs; unchanged replay produces no duplicate accepted outcome; interruption never yields a false terminal success; known contradictions are never silently omitted; all proof cases distinguish insufficient evidence from no learning.

Use one clean already-closed mission for the first proof, then the proposal's representative documentation, CI, security, Product Mission, correction, and no-learning cases before background rollout. For semantic quality, two independently reviewed assessments should identify supported claims, overreach, omitted counterevidence, and useful observations; Mission Control resolves disagreements. Publish numerator, denominator, sample scope, false-positive/negative counts, review time, and extraction cost. A 100% citation rate alone can conceal 100% irrelevant citations.

“Repeated mistakes avoided” is not directly observable simply because a later mission succeeded. Before claiming reduction, define recurring failure categories and comparable baseline/follow-up missions, count opportunities for recurrence, record whether a retrieved lesson changed a documented decision, and account for unrelated process changes. Small pilots can establish feasibility and examples of usefulness, not causal organizational improvement. Do not score employees, merchants, or AI participants.

## 9. V1 component classifications

Here “v1” means the proof-stage slice; target automation remains a required later stage, not rejected scope.

| Material component | Classification | Recommendation |
|---|---|---|
| Repository-native root and non-authority boundary | KEEP FOR V1 | Preserve existing canonical evidence and governance |
| Seven durable registries | SIMPLIFY FOR V1 | Lessons and risks; tool/resource/skill/capability observations retained as lesson categories |
| Dedicated resource/skill/capability/tool/decision registries | DEFER | Add only when useful observations justify dedicated consumers |
| Four learning dimensions | KEEP FOR V1 | Add enforceable ownership, revision, temporal, and applicability rules |
| Zod/runtime schema validation | KEEP FOR V1 | Strict versioned data contracts; separate candidate/review inputs |
| New JSON Schema validator and duplicate canonical schemas | DEFER | No new dependency now; portable record format remains required |
| Source registry | SIMPLIFY FOR V1 | Reviewed exact manifest plus policy; no repository-wide crawler |
| Closure/evidence manifest | KEEP FOR V1 | Explicit accepted closure mapping and revisions; not a guessed README status |
| README processing-status field as closure authority | REJECT | Processing state belongs in receipts; it cannot establish acceptance |
| Mission Learning Report, optional parallel representations | SIMPLIFY FOR V1 | One canonical machine-readable record and compact rendered report |
| Founder-decision memory | SIMPLIFY FOR V1 | Source-linked references, no autonomous reinterpretation |
| Risks and existing follow-ups | KEEP FOR V1 | Preserve owners, scope, review dates, and canonical resolution references |
| Provenance, receipt, replay, recovery | KEEP FOR V1 | B2/B7 contracts; no external database required |
| Human promotion and supersession records | KEEP FOR V1 | Candidate suggestions cannot set accepted state |
| Automated contradiction discovery/reconciliation | DEFER | Explicit known-conflict handling remains mandatory |
| Mission-start context packs | DEFER | Until core proof passes; then simple reviewed filters with B4 safeguards |
| Semantic/vector retrieval and advanced ranking | DEFER | Demonstrated retrieval need first |
| Manual CLI/dispatch and supervised extraction | KEEP FOR V1 | Proof method only; dispatch does not itself authorize closure |
| Automatic background trigger and candidate extraction | NEEDS FOUNDER / MISSION CONTROL DECISION | Required target; authorize recurring contract/provider after proof |
| Three orchestration workflows up front | DEFER | Prove logic first; do not clone cloud deployment permissions |
| Candidate PR publisher with repository write access | NEEDS FOUNDER / MISSION CONTROL DECISION | Separate least-privilege and residual-risk gate |
| Secret/private-data screening and audit logs | KEEP FOR V1 | Fail closed, bounded safe logs, reviewed suppressions |
| Fast Gate and generated-Markdown validation | KEEP FOR V1 | Explicit test inclusion; adversarial fixtures environment-independent |
| Representative pilot | KEEP FOR V1 | One initial proof; broader cases before unattended operation |
| Exhaustive historical backfill | DEFER | Separate scoped approval after precision is demonstrated |
| Metrics/cost/observability | SIMPLIFY FOR V1 | Receipts, backlog, bounded cost and review rubric before dashboards |
| Dashboard/notifications/knowledge visualization/external intelligence | ADD-ON | Separate authorization and demonstrated need |
| Organization-wide Lighthouse promotion | NEEDS FOUNDER / MISSION CONTROL DECISION | Evidence of transferability plus explicit Founder approval |
| General commercial organizational-learning platform | SEPARATE PRODUCT | No platform infrastructure in this mission |
| Self-modifying governance/Product Truth/prompts, mission activation, acceptance, tool adoption, direct-main writes, self-approval/merge, production changes | REJECT | Advisory engine cannot acquire these powers through maturity or convenience |
| Employee/merchant scoring, production-data harvesting, unrestricted crawling, model-weight training, erasing superseded history | REJECT | Preserve the proposal's explicit boundaries |

## 10. Red-team cases required as future tests

These are specified tests, not tests executed during this review. Cases apply before the related capability gate; they need not all require a live model or a provider connection.

| ID | Attack or failure | Required observable result |
|---|---|---|
| T01 | Report tells extractor to ignore governance, execute commands, or disclose data | Source remains data; no command/network/tool side effects or authority-field changes |
| T02 | Historical Founder quote conflicts with current Product Truth | Preserve quote as history, cite current authority, block conflicting current advice |
| T03 | Builder reports success; later independent verification fails | Preserve chronology and contrary evidence; no PASS generalized from builder report |
| T04 | Implementation merged without formal acceptance/closure | Ineligible; no successful learning receipt based on merge alone |
| T05 | Closure amended or mission reopened after receipt | New revision/invalidation; old outcome cannot remain current by default |
| T06 | Two workflows or a workflow and local publisher process same state | At most one outcome for the identity; loser reconciles without destructive overwrite |
| T07 | Several reports copy the same original evidence | One evidence origin, no fabricated independent corroboration/promotion |
| T08 | Previously useful tool becomes insecure, unavailable, or unverified | Stale/inapplicable warning; no current approval inferred from historical usefulness |
| T09 | Superseded lesson has highest textual similarity | Excluded from current advice; replacement or explicit unresolved status surfaced |
| T10 | Contradictory evidence misses category filter or context budget | Both sides or explicit conflict notice retained; no silent one-sided pack |
| T11 | Model emits malformed structure or plausible unsupported claims | Structure/ref checks reject; semantic overreach flagged for review, not claimed solved by schema |
| T12 | Candidate sets `INSTITUTIONALISED`, reviewed actor, or risk closed | Reject protected-field attempt; record safe failure reason |
| T13 | Publisher proposes governance/workflow/path changes with broad token | Full diff rejected before publication; no protected-path mutation; credential-scope residual tested separately |
| T14 | Historical source or model output includes a secret/private datum | Quarantine before disclosure/persistence; no raw match in logs or receipt |
| T15 | Adequate closed-mission evidence has no reusable learning | Valid no-learning result; no quota-driven invention |
| T16 | Crash after partial files or lost publication response | No false success; compare bundle/branch hashes and resume without duplicate PR |
| T17 | Registry or approval is stale; canonical risk later changes | Freshness/reference check fails or warns; reviewed update required |
| T18 | Engine unavailable, event missed/duplicated/reordered | Durable reconciliation finds backlog; retry within bounds; normal mission closure remains valid |
| T19 | Human approves candidate that conflicts with higher authority | Conflict blocks current advice; governance change requires separate approval path |
| T20 | Persuasive forged Founder/source citation, wrong repo or wrong blob | Resolver/authority check rejects; valid-looking path is insufficient |
| T21 | Zero allowed sources, missing object, oversized file, scanner unavailable | Explicit blocked-input outcome, distinct from no learning |
| T22 | Traversal, symlink, drive path, case alias, encoded live-path reference | No read/write outside selected regular Git objects and output allowlist |
| T23 | Old reprocess event after new approval; approval copied to modified candidate | Exact revision check prevents downgrade or borrowed approval |
| T24 | Different missions publish into shared registry concurrently | Preserve both valid changes or explicit conflict; no lost update |
| T25 | Provider version/prompt changes; unrelated repository commit occurs | Processing change is auditable; unrelated commit does not duplicate source learning |
| T26 | Unknown schema version, cyclic supersession, generated lesson cited as its own proof | Reject or quarantine; no self-reinforcing authority chain |
| T27 | Proposed closure file on unmerged branch impersonates final closure | Canonical ancestry/approval gate rejects it |
| T28 | Output text embeds unsafe links, shell syntax, raw HTML, or extra files | Safe rendering and exact output construction; no evaluation or unreviewed fetch |

## 11. Explicit answers to the assurance questions

| # | Answer |
|---|---|
| 1 | Yes, history/advice can become apparent authority unless B1–B4 bind role, time, revision, and current applicability. |
| 2 | Yes under a generic full-record schema; separate trusted transitions must reject candidate self-promotion. |
| 3 | The vocabulary is useful but insufficient; claim-level provenance, actor role, verification independence, and authority references are needed. |
| 4 | Yes; valid citations can support narrower claims. B2 and the Stage 24 example require evidence-reach review. |
| 5 | Yes; repository trust does not make embedded instructions safe. B5 removes source-controlled execution and privileges. |
| 6 | A broadly credentialed writer could; output allowlisting is necessary but not a complete credential boundary. Gate write access separately. |
| 7 | Preserved as policy, not yet demonstrated as an engine control. Separate promotion/merge roles and verify effective permissions before automation. |
| 8 | No currently inspected event is sufficient alone; authoritative closure validation must precede trigger handling. |
| 9 | Reconcile eligible closure revisions to receipts, enforce revisions, and expose incomplete/missing/failed outcomes. |
| 10 | No; source idempotency also needs processing versions, attempt history, atomic publication, and revision-aware acceptance. |
| 11 | Yes; status-only or similarity retrieval can return obsolete advice. B4 defines exclusion and replacement rules. |
| 12 | Yes; retrieve known contradictions before filters/budgets and disclose unresolved/omitted context. |
| 13 | Yes; maturity/confidence can imply authority to readers. Preserve advisory labels, scope, revision, and approval evidence. |
| 14 | Yes; do not let risk/decision indexes edit canonical authority or independently resolve mission follow-ups. |
| 15 | Metrics are hypotheses until denominators, thresholds, and independent judgments are specified. Citation coverage is not correctness. |
| 16 | Comparable baseline/follow-up evidence, recurrence opportunities, documented lesson use, and confounder accounting are required. |
| 17 | Add path aliasing, fabricated authority, approval-revision reuse, cross-mission collisions, missing scanner, schema drift, self-citation, and output injection. |
| 18 | Keep contracts/security/receipts; simplify registries/reports; defer ranking/backfill/workflows; reject automatic authority and unsafe writes. |
| 19 | Seven registries and premature services risk platform drift. A generalized commercial engine is a separate product. |
| 20 | Conditionally: fail closed on authority/data ambiguity, retain visible backlog and uncertainty, and preserve human promotion and normal mission continuity. |

## 12. Required corrections and next gate

Mission Control should correct the build plan before acceptance to incorporate B1–B7, lock the proof scope and its exit criteria, and distinguish later operational automation gates. These are plan-acceptance blockers, not a request to implement all target features now. Proof-specific controls must be implemented and verified only under a later explicit mission; write/provider/retrieval controls must pass before those capabilities are enabled.

Non-blocking refinements: keep the report compact, use existing Node/Zod/Vitest conventions, retain tool observations as categories, defer cross-language schema export until needed, and treat repository-wide scanner CI as a separate follow-up. Correct Claude's historical secret/tracked-file wording and qualify its “read-only workflows” claim in the reconciliation; preserve the original review as historical evidence. No edits to Claude's report are authorized here.

Unresolved decisions belong to Mission Control/Founder: accepted closure contract and legacy mapping; authorized recurring actor/scope and provider/data/cost policy; publisher credential containment and residual risk; exact freshness/semantic-quality thresholds and operator for backlog. Current evidence does not prove model entailment reliability, provider suitability, compromised-writer containment, or reduced repeated mistakes. These limits must remain visible.

**Recommended next action:** Mission Control independently reviews this artifact and its published head, reconciles with Claude, makes plan corrections on PR #583, resolves the listed decisions, and issues the final build-plan disposition. Founder merge is considered only after that disposition. Implementation requires separate explicit authorization. `SB-P-1.12` remains not activated.

## 13. Publication and verification record

Authorized changed paths are this review and only the Codex section of `communication/live/report.md`. Other report sections, including Mission Control references, must remain byte-identical. The review's publication SHA is necessarily outside its own content; the active live report may retain provisional publication fields under protocol section 27. Mission Control must reconcile those fields against the pushed head before closure.

Required publication checks: repository Markdown Quality Gate for both files, relative-link and heading/whitespace checks for added content, exact staged-path/content inspection, `git diff --cached --check`, a redacted staged-change secret scan, and remote/branch/base verification. Results are recorded in the Codex live-report section once run. GitHub CI on the resulting PR head remains separately visible evidence; no engine-runtime or production-validation claim is made by these documentation checks.

After the two authorized files are committed and pushed, Codex stops for Mission Control final reconciliation. No proposal merge, approval, implementation, dependency change, deployment, database operation, or governance rewrite is part of this stage.
