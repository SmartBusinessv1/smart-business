# SMART BUSINESS — LIVE INSTRUCTION

**Mission ID:** `SB-ORG-LEARNING-1.0`  
**Mission name:** Smart Business Organizational Learning Engine  
**Sender:** Smart Business Mission Control  
**Recipients:** Claude Code and Codex  
**Status:** `ACTIVE — PARALLEL REVIEW AUTHORIZED`  
**Date:** 2026-09-16

---

## Objective

Independently review the detailed Organizational Learning Engine build proposal before any implementation is authorized.

Primary proposal:

`communication/missions/SB-ORG-LEARNING-1.0/mission-control/01-research-and-build-plan-proposal.md`

Mission state:

`communication/missions/SB-ORG-LEARNING-1.0/README.md`

Decision record:

`communication/missions/SB-ORG-LEARNING-1.0/decision-log.md`

Handover record:

`communication/missions/SB-ORG-LEARNING-1.0/handover-log.md`

---

## Claude Code

Read:

`communication/missions/SB-ORG-LEARNING-1.0/claude-code/00-review-instruction.md`

Create:

`communication/missions/SB-ORG-LEARNING-1.0/claude-code/01-engineering-review-and-suggestions.md`

Focus on repository reality, architecture, implementation footprint, automation/eventing, deterministic-vs-AI boundaries, security, idempotency, testing, maintainability, and simplification.

---

## Codex

Read:

`communication/missions/SB-ORG-LEARNING-1.0/codex/00-review-instruction.md`

Create:

`communication/missions/SB-ORG-LEARNING-1.0/codex/01-independent-review-and-suggestions.md`

Focus on authority laundering, provenance, evidence reach, historical/current-state separation, prompt injection, replay/idempotency, stale/superseded retrieval, human-control boundaries, failure recovery, and adversarial cases.

---

## Shared communication requirement

After creating the durable review artifact, each reviewer must update only its own section in:

`communication/live/report.md`

Do not erase the other reviewer's section.

Record exact review path, commit SHA, disposition, blockers, and recommended next action.

---

## Hard boundary

This is a **review mission only**.

Do not:

- implement the engine;
- add dependencies or modify lockfiles;
- change application/product code;
- create migrations;
- change Supabase/RLS/auth/permissions;
- deploy;
- touch production;
- enable integrations;
- change branch protection;
- rewrite Product Truth, governance, or roadmap;
- activate `SB-P-1.12` or another mission;
- self-approve;
- self-merge;
- merge the proposal PR.

When your review and live-report section are committed and pushed, stop for Mission Control reconciliation.
