# SMART BUSINESS MISSION CONTROL

# Codex Independent Review Instruction — SB-ORG-LEARNING-1.0

**Mission:** Smart Business Organizational Learning Engine  
**Mission ID:** `SB-ORG-LEARNING-1.0`  
**Role:** Independent assurance / adversarial reviewer  
**Status:** `AUTHORIZED — REVIEW AND SUGGESTIONS ONLY`  
**Implementation:** `NOT AUTHORIZED`

---

## Objective

Independently challenge the proposed Smart Business Organizational Learning Engine from an assurance, authority, provenance, security, failure-mode, and institutional-memory perspective.

Do not duplicate Claude Code's engineering review.

Assume the proposal may contain hidden risks even if the architecture appears reasonable.

Your responsibility is to test whether the design could accidentally create authority laundering, stale-memory propagation, unsafe automation, false confidence, prompt-injection exposure, or a competing source of truth.

---

## Mandatory intake

Before writing findings, read at minimum:

1. `communication/missions/SB-ORG-LEARNING-1.0/README.md`
2. `communication/missions/SB-ORG-LEARNING-1.0/decision-log.md`
3. `communication/missions/SB-ORG-LEARNING-1.0/handover-log.md`
4. `communication/missions/SB-ORG-LEARNING-1.0/mission-control/01-research-and-build-plan-proposal.md`
5. `communication/live/instruction.md`
6. `communication/live/report.md`
7. current governance relevant to authority, continuity, repository operations, evidence, and Product Truth
8. current repository mission/communication patterns
9. actual repository state needed to verify proposal assumptions

Where Claude Code's review already exists, you may read it only after first forming an independent view from the proposal and repository. Do not simply converge on Claude's conclusions.

---

## Required assurance questions

Your review must explicitly answer:

1. Can historical/advisory content be laundered into current authority through this design?
2. Can AI-generated candidate records promote themselves through maturity, status, or registry fields?
3. Are provenance semantics strong enough to distinguish Founder decisions, Mission Control dispositions, independent evidence, builder self-report, operator attestation, history, and inference?
4. Can a generated learning item make a broader claim than its evidence supports?
5. Can malicious or accidental repository content prompt-inject the extraction process?
6. Can the proposed automation write outside intended paths or mutate protected governance/Product Truth files?
7. Are no-self-approval and no-self-merge boundaries actually preserved?
8. Is the proposed mission-close event reliable enough to represent authoritative closure?
9. How should missed, duplicated, reordered, replayed, or partially completed close events be detected?
10. Is idempotency sufficient for reproducibility and auditability?
11. Can superseded or deprecated learning be accidentally retrieved as current advice?
12. Can context-pack retrieval create bias by hiding contradictory or unresolved evidence?
13. Can confidence/maturity labels create false authority even when technically separated?
14. Is there a risk of the learning engine becoming a parallel governance, risk, decision, or current-state system?
15. Are the proposed success measures meaningful evidence of organizational improvement?
16. What evidence would be required before claiming that the engine reduces repeated mistakes?
17. What red-team scenarios are missing?
18. Which components should be simplified, deferred, or rejected?
19. Is any part of the proposal prematurely drifting toward a separate platform/product?
20. Does the design preserve Lighthouse human decision ownership under failure and ambiguity?

---

## Mandatory red-team scenarios

At minimum, reason through these scenarios:

- a mission report contains text instructing the extractor to ignore governance;
- a historical Founder quote conflicts with current Product Truth;
- a builder report claims success but independent verification later fails;
- a mission is merged but not formally accepted;
- a closure artifact is amended after a learning receipt is generated;
- two workflows process the same mission concurrently;
- a lesson is repeatedly reinforced by copies of the same underlying evidence;
- a tool/resource was once useful but later becomes insecure or unavailable;
- a superseded lesson has higher keyword similarity than the active lesson;
- a future mission receives a context pack containing only one side of a known contradiction;
- AI returns malformed structured output with plausible but unsupported claims;
- a candidate record attempts to set itself `INSTITUTIONALISED`;
- a workflow token can technically write broader repository paths than intended;
- a secret appears inside a historical report;
- a mission has no reusable learning but the model invents one;
- the learning workflow fails halfway after some files are written;
- the organizational-learning registry itself becomes stale;
- the engine is unavailable when a mission closes;
- a human reviewer approves a candidate that conflicts with higher authority;
- an attacker creates a persuasive fake provenance reference.

---

## Required classification

For every material proposal component, classify your recommendation as one of:

- `KEEP FOR V1`
- `SIMPLIFY FOR V1`
- `DEFER`
- `ADD-ON`
- `SEPARATE PRODUCT`
- `REJECT`
- `NEEDS FOUNDER / MISSION CONTROL DECISION`

---

## Required durable output

Create:

`communication/missions/SB-ORG-LEARNING-1.0/codex/01-independent-review-and-suggestions.md`

The review should contain:

1. Independent disposition.
2. Authority-boundary findings.
3. Provenance/evidence findings.
4. Historical/current-state separation findings.
5. Security/prompt-injection findings.
6. Eventing/idempotency/replay findings.
7. Retrieval/context-bias findings.
8. Human-control findings.
9. Failure/recovery findings.
10. Metrics/acceptance findings.
11. V1 scope classification table.
12. Required corrections.
13. Red-team cases that must become tests.
14. Unresolved risks.
15. Suggested next gate.

Use actual repository evidence where relevant. Distinguish direct evidence from inference.

---

## Shared live report requirement

After your durable review exists, update **only the Codex section** of:

`communication/live/report.md`

Record:

- review status;
- review path;
- commit SHA;
- one-paragraph disposition;
- material blockers, if any;
- recommended next action.

Do not erase or overwrite the Claude Code section.

If Claude Code has not reported yet, leave its placeholder unchanged.

---

## Prohibited actions

You are **not authorized** to:

- implement the engine;
- modify product code;
- add dependencies;
- change lockfiles;
- create migrations;
- change RLS/authentication/permissions;
- deploy;
- touch production data;
- enable new external integrations;
- alter branch protection;
- rewrite Product Truth;
- rewrite governance;
- change roadmap sequence;
- activate `SB-P-1.12` or another mission;
- approve your own review as final acceptance;
- self-merge;
- merge the proposal PR.

If you identify a required experiment or proof, specify the smallest future verification step and stop.

---

## Stop condition

Once the durable independent review and your live-report section are committed and pushed to the proposal branch, stop and return control to Smart Business Mission Control.

Implementation remains prohibited until Mission Control issues a separate explicit authorization after review reconciliation.
