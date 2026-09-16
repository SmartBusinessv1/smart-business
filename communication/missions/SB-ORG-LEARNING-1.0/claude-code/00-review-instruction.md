# SMART BUSINESS MISSION CONTROL

# Claude Code Review Instruction — SB-ORG-LEARNING-1.0

**Mission:** Smart Business Organizational Learning Engine  
**Mission ID:** `SB-ORG-LEARNING-1.0`  
**Role:** Engineering / repository reviewer  
**Status:** `AUTHORIZED — REVIEW AND SUGGESTIONS ONLY`  
**Implementation:** `NOT AUTHORIZED`

---

## Objective

Perform an engineering-grounded review of the proposed Smart Business Organizational Learning Engine against the **actual repository**, current communication architecture, active governance, existing automation patterns, and practical implementation constraints.

Do not treat the proposal as correct merely because Mission Control drafted it.

Your task is to identify what is sound, what is missing, what is overengineered, what should be simplified, and what must change before any implementation is authorized.

---

## Mandatory intake

Before writing findings, read at minimum:

1. `communication/missions/SB-ORG-LEARNING-1.0/README.md`
2. `communication/missions/SB-ORG-LEARNING-1.0/decision-log.md`
3. `communication/missions/SB-ORG-LEARNING-1.0/handover-log.md`
4. `communication/missions/SB-ORG-LEARNING-1.0/mission-control/01-research-and-build-plan-proposal.md`
5. `communication/live/instruction.md`
6. `communication/live/report.md`
7. relevant active governance, especially Sources 15 and 17, plus Source 18 only where Product Mission interaction is discussed
8. current repository communication conventions
9. current `.github/workflows/`, mission structures, scripts, test conventions, and any existing machine-readable mission metadata that may be reusable

Inspect repository reality before recommending architecture.

---

## Required review questions

Your review must explicitly answer:

1. What is the safest authoritative mission-close trigger based on current repository practice?
2. Is `organizational-learning/` the correct durable root, or is another location materially better?
3. What existing repository files, helpers, scripts, workflows, or conventions should be reused?
4. What machine-readable mission metadata already exists or should be added minimally?
5. What deterministic runtime/language best fits this repository?
6. Can GitHub Actions safely orchestrate v1 without excessive token or permission scope?
7. What protected-path allowlist/denylist should exist?
8. How should evidence manifests, hashes, schema versions, and processing receipts work?
9. How should idempotency and concurrent runs be controlled?
10. How should source content be treated as untrusted data to resist prompt injection?
11. How should secret/sensitive-data leakage be prevented?
12. Which parts of the proposal are unnecessary for v1?
13. Which missing tests or failure modes would make implementation unsafe?
14. Which proposed future phases should be deferred further?
15. What exact file-level implementation footprint would you recommend for the smallest credible v1?
16. What should remain manual even after v1?
17. Do any proposal elements conflict with current repo/governance conventions?
18. Does the proposal accidentally create a second source of truth for governance, Product Truth, decisions, risks, or current state?
19. How should mission-start context packs avoid stale/superseded advice and context overload?
20. What specific build-order changes do you recommend?

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

Do not merely provide prose approval.

---

## Required durable output

Create:

`communication/missions/SB-ORG-LEARNING-1.0/claude-code/01-engineering-review-and-suggestions.md`

The review should contain:

1. Executive disposition.
2. Repository findings.
3. Architecture findings.
4. Security and permission findings.
5. Automation/eventing findings.
6. Data/schema/provenance findings.
7. Idempotency/recovery findings.
8. Testing findings.
9. Cost/maintainability findings.
10. V1 scope classification table.
11. Exact recommended file-level implementation plan.
12. Specific changes required to the proposal.
13. Open questions / blockers.
14. Suggested next gate.

Use evidence from actual repository files and current branch state.

---

## Shared live report requirement

After your durable review exists, update **only the Claude Code section** of:

`communication/live/report.md`

Record:

- review status;
- review path;
- commit SHA;
- one-paragraph disposition;
- material blockers, if any;
- recommended next action.

Do not erase or overwrite the Codex section.

If Codex has not reported yet, leave its placeholder unchanged.

---

## Prohibited actions

You are **not authorized** to:

- implement the engine;
- create production code for the engine;
- add dependencies;
- change `package-lock.json`;
- create or modify migrations;
- change Supabase schema/RLS/auth/permissions;
- modify product UI/UX;
- deploy;
- access or modify production data;
- enable new external integrations;
- alter branch protection;
- rewrite Product Truth;
- rewrite governance;
- change roadmap sequence;
- activate `SB-P-1.12` or another mission;
- self-approve;
- self-merge;
- merge the proposal PR.

If a useful implementation experiment appears necessary, describe it as a recommendation and stop. Do not execute it.

---

## Stop condition

Once the durable review and your live-report section are committed and pushed to the proposal branch, stop and return control to Smart Business Mission Control.

Do not proceed into implementation without a new explicit Mission Control authorization.
