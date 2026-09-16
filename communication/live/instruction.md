# SMART BUSINESS — LIVE INSTRUCTION

**Mission ID:** `SB-ORG-LEARNING-1.0`  
**Mission name:** Smart Business Organizational Learning Engine  
**Sender:** Smart Business Mission Control  
**Recipient:** Codex  
**Status:** `STAGE 2 ACTIVE — CODEX INDEPENDENT REVIEW AUTHORIZED`  
**Date:** 2026-09-16

---

## Sequence

Claude Code engineering review is complete and has been reviewed by Mission Control.

Mission Control disposition:

`CLAUDE REVIEW ACCEPTED WITH MISSION CONTROL QUALIFICATIONS — CODEX REVIEW AUTHORIZED`

Do not treat the original parallel-review wording as current. Review is now sequential.

---

## Required intake

Read, in this order:

1. `communication/missions/SB-ORG-LEARNING-1.0/README.md`
2. `communication/missions/SB-ORG-LEARNING-1.0/decision-log.md`
3. `communication/missions/SB-ORG-LEARNING-1.0/handover-log.md`
4. `communication/missions/SB-ORG-LEARNING-1.0/codex/00-review-instruction.md`
5. `communication/missions/SB-ORG-LEARNING-1.0/mission-control/01-research-and-build-plan-proposal.md`
6. `communication/missions/SB-ORG-LEARNING-1.0/claude-code/01-engineering-review-and-suggestions.md`
7. `communication/missions/SB-ORG-LEARNING-1.0/mission-control/02-claude-review-reconciliation-and-codex-authorization.md`
8. actual current repository state relevant to the proposal.

The Mission Control reconciliation is the current controlling interpretation where it narrows or qualifies the original proposal or Claude review.

---

## Codex task

Perform an independent assurance/adversarial review of the Organizational Learning Engine build plan.

Create:

`communication/missions/SB-ORG-LEARNING-1.0/codex/01-independent-review-and-suggestions.md`

Then update **only the Codex section** of:

`communication/live/report.md`

Preserve the Claude Code section and Mission Control reconciliation references.

Record:

- exact review path;
- commit SHA or provisional publication state according to repository protocol;
- disposition;
- blocking findings;
- non-blocking findings;
- recommended corrections;
- recommended next action.

---

## Required challenge areas

Independently assess:

- the reduced first implementation slice proposed by Mission Control;
- Zod vs other durable schema representations;
- two-registry starting point and whether tool/resource/capability learning remains adequately preserved;
- authoritative mission-close signaling;
- proof-stage manual triggering vs the Founder's required long-term background automation;
- supervised AI extraction vs safe automated candidate extraction;
- source allowlist design and explicit exclusion of `communication/live/**`;
- evidence/provenance integrity and evidence-reach language;
- maturity/promotion authority and authority-laundering risk;
- idempotency, replay, concurrency, recovery, supersession, and stale retrieval;
- prompt-injection and untrusted-source handling;
- secret/sensitive-data screening;
- the discrepancy between Claude's "real secret" characterization and merged PR #288's later repository-hygiene evidence;
- whether the target architecture can automatically produce learning after every completed mission without silently modifying governance, Product Truth, roadmap, mission authority, or production state.

Do not inherit Claude's conclusions merely because Mission Control accepted the review as useful. Verify them independently.

---

## Hard boundary

This remains a **review-only mission stage**.

Do not:

- implement the engine;
- add dependencies or modify lockfiles;
- change product/application code;
- create migrations;
- change Supabase/RLS/auth/permissions;
- deploy;
- touch production;
- enable new integrations;
- change branch protection;
- rewrite Product Truth, governance, or roadmap;
- activate `SB-P-1.12` or another mission;
- self-approve;
- self-merge;
- merge PR `#583`.

When the durable Codex review and Codex section of `communication/live/report.md` are committed and pushed, stop for Mission Control final reconciliation.
