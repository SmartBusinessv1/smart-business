# Smart Business Independent Verification Efficiency Protocol

- **Protocol ID:** SB-IV-1.0 (a stable identifier, not the document version)
- **Mission:** `SB-GOV-IV-1.0` (Version 1.0); `SB-GOV-PRODUCT-EXEC-1.0` (Version 1.1 amendment)
- **Version:** 1.1
- **Authoring specialist:** Codex (Version 1.0); Claude Code (Version 1.1 amendment)
- **Approved By:** Founder — Riyas PK (Version 1.0)
- **Approval Date:** 2026-09-18 (Version 1.0)
- **Approval:** `FOUNDER APPROVED` (Version 1.0). Version 1.1: the Founder approved the scope of the amendment on 2026-09-19 (PR #605 comment `5742411779`); approval of the amended text is evidenced by the Founder's human merge of PR #606 on 2026-09-19 (activation record, Section 3)
- **Status:** `ACTIVE` (Version 1.0). Version 1.1: `ACTIVE FROM THE ACTIVATION EVENT` — the human merge of the finalization pull request, at its actual `merged_at` UTC instant. Version 1.0 remains the operative text until that event (the post-merge activation step defined in the Source 18 header and recorded in the [activation record](missions/SB-GOV-PRODUCT-EXEC-1.0/mission-control/04_activation_decision_and_metadata_reconciliation.md)). Version 1.1 has been independently verified and merged by a human (PR #606)
- **Activation Authority:** Smart Business Mission Control
- **Activation Date:** 2026-09-18 (Version 1.0). Version 1.1: PENDING — the `merged_at` UTC date of the finalization pull request defined in the Source 18 header, recorded afterward as mandatory factual evidence
- **Activation Basis:** PR #598 merge commit `4ddbb647cfb413e43af38a7e362130c5fd16133c` (Version 1.0), activated in PR #599. Version 1.1: PENDING — the merge commit of the finalization pull request, recorded afterward as mandatory factual evidence. PR #606 publication commit `b3cd5f439e8795855d6ef0f527d7ccea18c48080` is a publication commit and not an activation basis
- **Repository:** `SmartBusinessv1/smart-business`
- **Authority:** [Founder approval](missions/SB-GOV-IV-1.0/founder/01-founder-approval.md); [Mission Control decision gate](missions/SB-GOV-IV-1.0/mission-control/02-draft-review-and-founder-governance-decision-gate.md).
- **Governing relationship:** Operational protocol subordinate to active Source 18; it defines verification method and efficiency, not Product Mission acceptance authority.

## 1. Purpose and applicability

Use independent verification for risks that benefit from an independent challenge. Builders own implementation and initial tests; GitHub CI supplies repeatable deterministic assurance; the verifier exercises selected risk boundaries and reports what the evidence supports. Avoid repeated full local suites, repeated repository discovery, and substantive re-verification triggered solely by report publication.

This Founder-approved document is the active operational protocol for independent-verification method and efficiency under Source 18. Version 1.1 conforms to Source 18 Version 1.2. It has been independently verified and merged by a human (PR #606). It is operative from the activation event defined in the Source 18 header, which activates it together with Source 18 Version 1.2 and never before; until then Version 1.0 and Source 18 Version 1.1 apply. It remains subordinate to Source 18 and higher authority, does not accept any Product Mission, and does not transfer Mission Control or Founder authority. The [reconciliation report](missions/SB-GOV-IV-1.0/codex/02-current-governance-reconciliation-report.md) separates compatible techniques from amendments. The [activation plan](missions/SB-GOV-IV-1.0/codex/03-activation-plan.md) defines the decision and publication gate. `SB-P-1.12` remains `NOT ACTIVATED`.

“Codex is a scarce verifier, not a builder” describes the independent-verification assignment. It does not remove Codex's existing discovery, Blueprint, documentation or separately authorized engineering responsibilities.

## 2. Authority and actor separation

Apply Source 17's authority order: Founder; Lighthouse Constitution; Phase 1 constitutional authority (Sources 01 and 11); approved governance; Mission Control; authorized specialists; repository/platform/mission instructions. Preserve Product Truth, merchant ownership, permission boundaries and the approved branch-protection process.

[Source 18](../merge/active/18_SB-P_Mission_Lifecycle_and_Delivery_Framework.md) (Version 1.1 is operative until the activation event; Version 1.2, merged in PR #606, is operative from it) assigns Stage 19 to a **Mission Control-appointed Independent Verification Actor**. Stage 19 remains mandatory for every `SB-P-*` mission. Codex is preferred for the highest-risk cases where eligible and available, but Codex utilization classification does not create, remove, or waive the Stage 19 gate. Mission Control must explicitly appoint the verifier and record capability and independence.

Mission Control names the builder, verifier, affected artifacts, evidence requirements, environments and acceptance criteria before execution. The verifier may report findings and propose corrections but shall not implement the changes it is assigned to verify, approve itself, accept the mission or merge its work. If it writes a correction, independent assurance of that correction must transfer to another authorized actor; where governing ownership prevents that transfer, stop for governance reconciliation.

A new chat, model instance, role label or provider alone does not prove independence. Record actual implementation/correction authorship and verifier involvement. Under any future approved substitution rule, a distinct actor from the same provider may be considered only with Mission Control's documented separation assessment. Prefer a separate provider for high-risk cases to reduce correlated assumptions, but never treat provider diversity as proof of correctness.

## 3. Verification pyramid

| Layer | Primary owner | Independent-verifier effort |
| --- | --- | --- |
| Requirements, Blueprint, EIS | Existing product/engineering owners and Mission Control | No routine verifier invocation; retain all assigned design reviews |
| Implementation and focused/regression tests | Authorized builder | None while building |
| Lint, typecheck, build, Fast Tests | GitHub CI; builder supplies evidence | Inspect applicable completed results |
| Full Assurance | GitHub Actions in the authorized test environment | Inspect when applicable; do not duplicate externally mutating tests by default |
| Scope and readiness review | Mission Control | Verifier confirms packet identity and affected scope once at intake |
| Product Truth coverage (FCTM) | Stage 2 owner and Mission Control own the matrix; each stage owner owns its own mapping | Coverage and movement checks (Class C) for every mission; drift probes on material rows (Class A) |
| Adversarial boundaries | Named independent verifier; specialists as assigned | Targeted independent execution |
| Human runtime verification | Founder or authorized human under Source 18 | Inspect runtime evidence and remaining gaps; do not replace it with CI |
| Final independent gate | Actor named by current governance | Every obligation classified; execution selected by risk |
| Acceptance, release and closure | Mission Control and required human authority | Report evidence only |
| Routine report/document publication | CI and Mission Control | No new substantive verification solely for publication |

## 4. Codex Verification Budget

Mission Control records the classification, rationale, governing gate, named actor, Class A boundaries, Class B/C evidence, permitted commands/environment, expected output and stop condition **before invocation**. Use one initial review and one finding-specific review for each authorized correction by default. These are planning defaults, not limits that convert missing evidence into PASS. No universal token or minute quota is imposed; Mission Control can set a mission-specific capacity limit.

| Classification | Trigger | Expected independent work |
| --- | --- | --- |
| **Codex Required** | Authority, financial integrity, permissions/isolation, security, irreversible actions or complex failure modes; an explicitly required Codex gate | All material identified risk boundaries assigned for independent challenge; specialist support where authorized |
| **Codex Spot Check** | Ordinary implementation with strong deterministic coverage and no Required trigger | Packet/diff inspection, selected high-information probes, authoritative CI inspection, bounded result |
| **Codex Not Required** | Routine copy, formatting, evidence/status recording, metadata and straightforward UI polish with no substantive risk change | Builder/CI/Mission Control checks; no extra Codex invocation |

Apply the highest relevant risk. “UI polish” changing permission visibility or confirmation behaviour is not automatically Not Required. A governance or operating-protocol change is not routine documentation merely because it is Markdown. Documentation that changes locked criteria, authority, operating commands, deployment instructions or executable configuration is assessed for substantive risk.

Under the Founder-approved model, these labels classify Codex involvement only; Stage 19 remains mandatory for every Product Mission. “Codex Not Required” means no Codex invocation, not no independent Stage 19 gate. The Class C coverage baseline of Section 6 is performed for every Product Mission whatever the classification; the classification governs only the extent of Class A drift effort. The Mission Control-appointed Independent Verification Actor governs Stage 19 only after Source 18 and this protocol are formally activated.

When capacity is exhausted, preserve results and return the remaining obligations and resumption boundary. Resume from valid evidence, not from a complete rerun; there is no automatic PASS or authority expansion.

## 5. Builder Verification Packet

Prepare a section in the existing Builder Completion Report or a linked mission artifact; do not create a second competing Evidence Package before Stage 19. Identify the packet revision and superseded revision. Include:

| Field | Required content |
| --- | --- |
| Identity and authority | Mission/stage, builder identity, authorization link, locked Blueprint/EIS/checklist versions, repository, branch, base SHA, implementation checkpoint SHA and report head SHA |
| Scope | Exact base-to-checkpoint changed paths and diff; checkpoint-to-report diff; allowed scope, deviations, affected contracts and risk boundaries |
| Authorship | Who implemented each material change/correction, proposed verifier and separation conflicts |
| Tests | Tests added/changed, tests actually executed, regression selection, commands, exit results, passed/failed/skipped counts and output links; distinguish authored from executed tests |
| CI | Workflow paths/revisions, run URLs and IDs, attempt, event, run head SHA, actual checkout SHA (including PR merge-test SHA), base/PR identity, job conclusions and relevant logs |
| Full Assurance | Applicability rationale against workflow paths and mission risk; actual completed evidence or a justified N/A; unavailable/failed/pending evidence remains explicit |
| Static deltas | Dependency, `package-lock.json`, workflow, test configuration, deployment/provider integration diffs, including explicit unchanged statements supported by diff |
| Platforms | OS/runtime versions, environment identity, known Windows/Linux differences, skipped cases, coverage limitations and local-versus-CI differences |
| Runtime | Deployment identity linked to implementation, Founder/authorized human observations, Mission Control runtime-review decision and unresolved discrepancies |
| Risk plan | Suggested attack surfaces, negative cases, expected invariants, known defects, residual risks and evidence-to-checklist mapping |
| Coverage | The locked FCTM path and baseline commit; the builder's status for every assigned row (`IMPLEMENTED`, `PARTIALLY IMPLEMENTED` or `NOT IMPLEMENTED`), recorded in the Builder Completion Report as draft row statuses; and every change of a row's disposition, classification or mission assignment since lock, with its Founder Decision ID |
| Correction packet | Finding IDs and the affected FCTM rows, old/new checkpoint, root cause, correction diff, adjacent contracts, prior evidence proposed for carry-forward and why it remains valid |

Keep secrets and personal data out of packets and logs. Reference authorized environment names and evidence locations without copying credentials. A packet is builder testimony until its claims are checked against source artifacts.

## 6. Evidence classes and provenance

Classes describe verification methods, not authority or approval levels. One checklist obligation can need several classes.

| Class | Method | Examples and limit |
| --- | --- | --- |
| **A — independently exercise** | Verifier designs/selects and executes a meaningful challenge in authorized scope | Permission bypass, cross-business denial, duplicate/race behaviour, ambiguous filesystem ancestry, authority escalation, irreversible financial boundaries; record actual result and environment |
| **B — inspect authoritative automated evidence** | Resolve CI metadata and relevant logs independently, then assess what the actual executed checks prove | Full suites, lint, build, typecheck, Markdown, applicable Full Assurance; green badges alone are insufficient |
| **C — static inspection** | Inspect exact diff, source, authorization or configuration | No added dependency/workflow/provider, no scope expansion, untouched contracts; static inspection alone cannot prove a behavioural denial |

Each result binds a claim/checklist ID to repository, implementation SHA, evidence path/run ID, actual execution/checkout SHA, date, actor, environment, command/method, observed result and limitations. Link the proving record, not merely a role name or a path. Unknown attribution remains unresolved. Multiple citations to one underlying observation are not independent corroboration.

For Class B, confirm the correct repository/workflow/event, run attempt, tested tree, job completion, test selection and skips. Distinguish run head from a synthetic merge-test checkout. A job skipped, cancelled, queued, unavailable or still running is not PASS. A missing path-filtered Full Assurance run may be N/A only after checking both actual triggers and mission risk. If risk requires it despite no trigger, request authorized execution; absence is not permission to waive it.

Do not rerun all deterministic checks locally merely to rename Class B as Class A. Independently challenge coverage assumptions, test weakening and known gaps. Linux CI that skips Windows cases does not discharge Windows-specific Class A obligations.

**Product Truth coverage and drift.** For every Product Mission, whatever the Codex classification, the verifier performs the following against the source contracts and not only against the matrix, so that a matrix that was incomplete from the start is detected:

1. **Coverage completeness (Class C).** Independently take an **obligation inventory from the source text** of each in-scope contract at the intake baseline: its numbered sections, the applicable, separately verifiable obligations inside each section, and every numbered acceptance scenario. Do not rely on the Definition Actor's inventory or on the matrix. Compare the inventory with the FCTM by set difference, then run the completeness test of Source 18 Section 3.2, including its section, obligation and acceptance-scenario checks, across the Blueprint, EIS, contract, checklist and Builder Completion Report. **A missing obligation or acceptance scenario is a coverage failure (`SILENT OMISSION`) even when every retained row has a valid disposition and a consistent downstream mapping.** For example, a contract whose acceptance-scenario section is represented by a row for one scenario, while a separate scenario in the same section has no row, fails although the section is represented and every retained row maps downstream. The inventory is a list of pointers kept in the verification record; it is not a second matrix and restates no requirement.
2. **Movement integrity (Class C).** Compare each row's disposition, build commitment, commercial classification and mission assignment in the locked FCTM at Stage 8, in the Stage 13 mappings and in the builder's draft row statuses with the source text and the Founder Decision IDs. An unexplained change is a finding.
3. **Drift (Class A on material rows; Class B or C otherwise).** Compare implemented behaviour with the approved expected experience, permissions, denial behaviour and business rules. Material rows are those involving authority, permissions or isolation, financial integrity, irreversible actions, experience anchors and Founder-reserved scenarios, dependencies that a later mission relies on, and every `REJECT` row for the mission's domain. Every `IN SCOPE` row is accounted for, and materiality selects only the evidence class.

A row without evidence is not demonstrated, and absence of failure is not `PASS`. The verifier reports Product Truth conflicts and does not decide them. If the only eligible verifier authored the FCTM, Mission Control records a separation assessment and the check is made against the source contracts. **What Stage 19 verifies.** The verifier works only from evidence that exists at Stage 19: the source contracts, the locked FCTM, the Stage 13 mappings, the Builder Completion Report and Verification Packet with the builder's draft row statuses, the human runtime findings, the repository and the tests. It does not review or certify the Stage 22 Contract Reconciliation, which does not yet exist. That reconciliation is checked afterwards by the Reconciliation Integrity Check of Source 18 Stage 22. Mission Control performs that check, and refers a narrow, finding-scoped question to the verifier only where the reconciliation shows a substantive change since Stage 19 or a new risk. The later check never waives, replaces or shortens Stage 19, and a referral never reopens it.

This section adds verification obligations and gives the verifier no additional authority.

## 7. Verification-ready entry gate

Before substantive verification, Mission Control confirms implementation and focused tests complete; Fast Tests, typecheck, lint and build green; Full Assurance green where applicable; stable CI; scope diff reviewed; complete Verification Packet; and valid execution authority. Applicable Markdown and other required checks remain required. “Stable” means required jobs completed against identified applicable state, with failures, reruns and exclusions explained; no arbitrary waiting period is needed.

For Product Missions also require locked inputs, Builder Completion Report, Founder/authorized human runtime findings and Mission Control runtime review in the Source 18 order. The locked FCTM and the builder's status for every assigned row must also be present. The verifier performs a lightweight entry check. Missing evidence returns `NOT READY` with exact deficiencies rather than consuming a full review budget. `NOT READY` is an entry disposition, not a new lifecycle status or an acceptance decision.

Mission Control may authorize an explicitly limited investigative exception, recording the missing prerequisite, reason, allowed probes and blocking outcome. It cannot waive a higher-authority gate, silently change actor ownership, or declare a missing mandatory result PASS. No production access, migration execution or credential-backed integration execution is implied by readiness or tool availability.

## 8. Targeted independent verification

1. Confirm packet identity, actor separation and the checkpoint being judged.
2. Inspect diff and affected contracts; map every locked checklist obligation and every FCTM row to A, B or C with a rationale.
3. Prioritize denial/failure behaviour, independent expectations and boundaries where builder assumptions could be wrong. Reusing a focused test is allowed; review its assertion and add a different probe where that increases information.
4. Inspect existing CI once for deterministic evidence. Execute authorized Class A probes and minimal adjacent checks. A whole local suite requires a stated reason.
5. Report findings with reproducible input, expected/actual result, affected scope, severity/blocking effect, evidence and correction acceptance condition.
6. Run the coverage and drift checks of Section 6.
7. Classify every obligation and every FCTM row, list untested limits, stop at the authorized report and hand off to Mission Control.

Do not convert a successful representative probe into a claim that all runtime/security behaviour is proven. Proposed corrective code stays advice unless separately assigned to a builder.

## 9. Finding-scoped re-verification

Default sequence: **finding → authorized narrow correction → full applicable deterministic CI → human runtime retest → Mission Control correction review → finding-specific independent re-verification → bounded result**. “Full applicable” means the complete existing Fast Gate and applicable Full Assurance/other mandatory checks, not forcing every workflow for every change.

Under Source 18 Stage 20, preserve the updated Builder report, the human retest, Mission Control runtime review and re-verification.

**A human runtime retest is required after every correction**, before correction acceptance and before re-verification closes. Its scope may be specific to the finding and is not automatically the whole mission: it covers the affected behaviour and its regression surface, as Mission Control determines. Each retest records the actor, the target, the scenarios, the expected and actual results, and the evidence. **No automated-only waiver exists**: CI, tests and static review never replace it, and this protocol cannot remove it. Founder-reserved scenarios remain with the Founder or a confirmed delegate. There is no exemption status.

A correction never resolves a coverage finding by removing or deferring an FCTM row. It restores the approved behaviour or removes the unauthorized behaviour, and if that is impossible or unsafe the row goes to the Founder through Mission Control.

The correction packet identifies old/new SHAs and findings. The verifier checks the correction diff, original reproduction, new regression assertion, affected adjacent invariant and renewed applicable CI. Carry forward prior resolved findings only after an impact check shows their implementation, dependencies, test/configuration assumptions and relevant environment remain unchanged. Record each carried-forward result with its original evidence and justification; do not relabel it as newly executed.

Preserve original failures and successive reports. A new defect receives a new finding and bounded correction authorization. Do not reopen every closed finding merely because another report was written. Mission Control controls every repeat cycle.

## 10. Full re-verification escalation

Broaden when the correction touches shared infrastructure; changes another contract; invalidates prior evidence or test trust; changes security/permission/financial assumptions; reveals an incomplete assurance boundary; or Mission Control explicitly broadens scope. Dependency/workflow/configuration changes and unexpected base drift require an impact assessment and escalation when they affect prior claims.

Record the trigger and affected obligations. Pause unsafe execution and return to Mission Control for scope/authority. “Full” means all obligations in the approved expanded boundary, using appropriate A/B/C methods; it does not automatically mean duplicating all CI locally. Capacity pressure never justifies concealing a material finding.

## 11. Documentation and reporting follow-ups

A report-only commit does not invalidate substantive evidence by itself. Compare verified checkpoint to final report head, including all changed paths, and confirm no semantic implementation, dependency, workflow, configuration, locked criteria or authority change. Carry forward substantive results with both SHAs and the diff rationale. Check the new Markdown, links, facts, scope and credentials. Existing automatic CI and protected-branch checks still run as configured and must satisfy their applicable requirements.

If the report changes a claim, inspect its support. If it changes a contract, command, approval or governing rule, apply substantive review. Do not request another independent full suite merely to record a successful publication; do not claim the final head was independently executed when only the earlier checkpoint was.

## 12. Provider unavailability and resumption

Record unavailable actor/provider, last valid evidence, remaining obligations, capacity/access limitation and next responsible owner in the repository. Source 18 is controlling. Mission Control may appoint an eligible Independent Verification Actor under the approved actor-separation and capability rules. If no eligible verifier is available, Stage 19 remains pending.

Under the active actor-flexible model, Mission Control records replacement identity, capability, prior contribution assessment, scope, evidence inheritance and authorization before resumption. Recheck evidence freshness and resume only remaining or invalidated obligations. A builder switching accounts or starting a fresh session cannot independently verify its own implementation. If no eligible verifier is available, keep the gate pending.

## 13. Results and acceptance boundary

| Result | Meaning | Consequence |
| --- | --- | --- |
| `PASS` | Identified obligation satisfied by cited evidence within stated scope | Eligible for Mission Control review; not acceptance |
| `FAIL` | Observed non-compliance with a required invariant | Material failures block acceptance; authorized correction required |
| `FOLLOW-UP` | Recorded non-blocking out-of-scope issue with owner, scope and next action | Mission Control decides disposition; never conceal missing mandatory evidence here |
| `N/A` / `NOT APPLICABLE` | Obligation does not apply, with specific scope/trigger rationale | Mission Control reviews rationale; inability to test is not N/A |

The coverage findings `SILENT OMISSION`, `UNAUTHORIZED DEFERRAL`, `UNAUTHORIZED PULL-FORWARD`, `MISCLASSIFIED`, `DRIFT` and `ORPHAN` map onto these results. A material coverage or drift `FAIL` is a material blocking failure. The Contract Reconciliation statuses of Source 18 Section 3.2 are requirement statuses and are kept separate from these evidence results.

Use Source 18's spelling `NOT APPLICABLE` in its formal reports. Missing mandatory evidence means verification remains incomplete/blocked; it is neither PASS nor a casual FOLLOW-UP. Keep lifecycle status, evidence result and Mission Control acceptance separate. Existing accepted follow-ups are not closed just because CI passed.

The verifier returns a result matrix, findings, carried-forward evidence, limitations and recommendation. Mission Control alone records the acceptance-stage transition and mission disposition, obtaining Founder approval where required. Runtime evidence, independent verification, acceptance, deployment approval and repository publication remain distinct.

## 14. Examples

| Scenario | Classification and method | Decision boundary |
| --- | --- | --- |
| Ordinary product search/filter implementation | Spot Check for Codex when appointed or otherwise useful; inspect packet and completed CI (B), dependency/scope diff (C), independently probe a selected invalid/empty input boundary (A) | The Mission Control-appointed Independent Verification Actor owns Stage 19; every checklist item and human runtime gate remains accounted for |
| Permission or financial write-path change | Required risk classification; independently exercise unauthorized/cross-business denial and duplicate/failure effects in authorized test scope (A), inspect regression CI (B), review access/configuration deltas (C) | Missing mandatory negative-path evidence blocks; no production probes implied; Mission Control appointment, capability and independence requirements still control |
| Reporting-only follow-up after PASS | Not Required for new substantive Codex invocation; compare checkpoint/report diff, check source claims and Markdown, inspect applicable CI | Prior PASS retained at original checkpoint; publication itself does not accept the mission |
| Narrow filesystem correction | Reproduce the specific finding and adjacent fail-closed invariant, inspect current CI and changed tests, retain unaffected prior findings | Windows-specific case requires Windows evidence when Linux skips it; broaden only if shared semantics or evidence assumptions changed |
| Named verifier unavailable | Repository limitation report and Mission Control routing | Wait or obtain approved governance reconciliation; no silent replacement or builder self-verification |

## 15. Evidence basis and risks

The [Stage 5 final re-verification](missions/SB-ORG-LEARNING-1.1/codex/12-stage5-s5-f07-final-independent-reverification.md) records both valuable Windows-specific independent probes and broad deterministic execution. It distinguishes CI head from checkout SHA, Windows/Linux test selection, capacity resumption and bounded PASS. These are historical observations inspected in this checkout, not fresh executions in this mission.

The [accepted narrow-correction promotion](../organizational-learning/promotions/SB-ORG-LEARNING-1.1/promotion-01-narrow-finding-scoped-correction-cycle.json) is explicitly `MISSION_SCOPED` and `VALIDATED`; it does not institutionalize a universal workflow. The [final Mission Control acceptance](missions/SB-ORG-LEARNING-1.1/mission-control/45-final-postmerge-verification-and-formal-acceptance.md) preserves deferred work and limitations. These broader rules derive from the Founder-approved design basis and are operative under this active protocol.

| Risk | Control |
| --- | --- |
| Stale or misleading green CI | Bind claim to actual tested tree, attempt, jobs, logs and coverage |
| Packet repeats builder assumptions | Independent diff/authority inspection and selected negative probes |
| Narrow correction misses adjacent impact | Explicit impact map, carry-forward rationale and escalation triggers |
| Capacity budget becomes weaker assurance | Report remaining blockers; budget exhaustion cannot grant PASS |
| Same actor presented as independent | Contribution disclosure and Mission Control separation assessment |
| Historical lesson or inactive protocol treated as active governance | Clear status, source precedence and explicit activation decision |
| Documentation label conceals semantic change | Inspect content and executable/authority effects, not filename alone |
| CI evidence substituted for human runtime | Preserve Source 18 Stages 17–18 and deployed revision provenance |
| The FCTM is authored by the verifier | The verifier checks against the source contracts, and Mission Control records a separation assessment |
| A correction hides a coverage finding by dropping a row | Mandatory human retest; a correction restores or removes behaviour and never removes or defers a row |

## 16. Stop condition

This protocol governs independent-verification method subject to Source 18 and higher authority. It does not alter CI by itself, accept a Product Mission, authorize self-verification, grant the verifier any additional authority, or activate `SB-P-1.12`.

## 17. Version History

| Version | Date | Change | Authority | Status |
|---|---|---|---|---|
| 1.0 | 2026-09-18 | Initial Founder-approved protocol under `SB-GOV-IV-1.0`, merged in PR #598 at `4ddbb647cfb413e43af38a7e362130c5fd16133c` and activated in PR #599 | Founder — Riyas PK; Mission Control activation | ACTIVE |
| 1.1 | 2026-09-19 | Amendment under `SB-GOV-PRODUCT-EXEC-1.0`, limited to: FCTM and source-contract completeness, classification and mission-assignment integrity, and material drift verification (Sections 3 to 8 and 13); a mandatory human retest after every correction (Section 9); this version history; and conforming references to Source 18 Version 1.2. The Protocol ID `SB-IV-1.0` is unchanged. No new verifier authority | Founder scope approval, PR #605 comment `5742411779`; Founder human merge of PR #606 | ACTIVE FROM THE ACTIVATION EVENT (the human merge of the finalization pull request defined in the Source 18 header, at its actual `merged_at` UTC instant). Independently verified and merged at publication commit `b3cd5f439e8795855d6ef0f527d7ccea18c48080` (publication commit, not an activation commit); activation preparation merged in PR #607 at preparation commit `86d9813582c4505c41be2c712a2a1df33912e988` (preparation commit, not an activation commit). No activation date or activation merge commit is recorded here; they are recorded afterward as mandatory factual evidence |

The original Version 1.0 approval and activation records in the header are preserved. Future updates append to this history.

**Interpretation note (activation-record reconciliation, `SB-GOV-PRODUCT-EXEC-1.0`).** The Version 1.1 Status, previously "AMENDMENT PROPOSED — ACTIVATION PENDING", and the header Approval statement, previously "approval of the amended text is PENDING", were updated to record PR #606 as independently verified and merged. The Version 1.1 Activation Date line, previously "PENDING — set only by the Mission Control Activation Confirmation", the Activation Basis line, previously "PENDING", and the row 1.1 wording "the Activation Confirmation records them" were then clarified, under the Source 18 Option B activation boundary, to separate the decision, which takes effect at the human merge of the finalization pull request, from the activation date and merge commit, which are recorded afterward as mandatory factual evidence. The Version 1.0 row and header values are unchanged.

**Interpretation note (finalization reconciliation, `SB-GOV-PRODUCT-EXEC-1.0`).** The Version 1.1 header Status and Version History row 1.1 Status previously read "AMENDMENT MERGED (PR #606) — MISSION CONTROL ACTIVATION CONFIRMATION PENDING". They now record that Version 1.1 is active from the activation event, the human merge of the finalization pull request. The Version 1.0 row remains as logged (`ACTIVE`), and Version 1.0 is superseded by Version 1.1 at the activation event. The Activation Date and Activation Basis for Version 1.1 remain PENDING as mandatory post-merge factual evidence, and no activation date or merge commit is recorded.
