# SB-OPS-CI-STABILIZATION-1.0 — Stage 3 Publication Authorization

**Mission ID:** `SB-OPS-CI-STABILIZATION-1.0`
**Mission:** CI Baseline Stabilization
**Authority:** Smart Business Mission Control
**Recipient:** Codex
**Date:** 2026-09-14
**Status:** `AUTHORIZED — NARROW PUBLICATION ONLY`

## Purpose

Codex completed Stage 3 independent review with disposition `PASS`, but correctly stopped before publication because the prior Stage 3 instruction did not explicitly authorize commit/push.

This instruction authorizes Codex to publish only the already-completed Stage 3 review evidence and the minimum mission communication updates required by protocol.

## Authorized repository

`SmartBusinessv1/smart-business`

## Authorized branch

`mission/SB-OPS-CI-STABILIZATION-1.0-stage1a`

## Authorized pull request

`#578`

## Authorized actions

Codex may:

1. fetch/pull the current authorized branch;
2. reconcile its local Stage 3 review records against the current branch head;
3. stage only the Stage 3 independent-review file and the minimum communication/status files it already updated for handoff;
4. commit those files with a mission-scoped descriptive commit message;
5. push the authorized branch so PR `#578` contains the durable Stage 3 evidence;
6. report the resulting final branch head and exact changed files;
7. stop for Mission Control.

Expected Stage 3 review artifact:

`communication/missions/SB-OPS-CI-STABILIZATION-1.0/codex/01-stage3-independent-review.md`

Minimum communication/status updates may include only the mission README, handover/status record(s), and live report/instruction if already required by the communication protocol for this Stage 3 handoff.

## Explicitly prohibited

Codex must not:

- alter application code, tests, workflow logic, dependencies, or lockfiles;
- alter Product Truth, governance, roadmap, or Product Mission state;
- change database/schema/RLS/grants/RPCs;
- change provider configuration, GitHub environment secrets, deployment, or branch protection;
- rerun credential-backed tests merely for publication;
- implement any correction because Stage 3 disposition is `PASS`;
- approve or merge PR `#578`;
- push to `main`;
- activate `SB-P-1.12`.

## Publication gate

This authorization is only for making the already-completed Stage 3 review durable in PR `#578`.

After push, Codex must stop for Mission Control. Mission Control will independently verify the published review and determine Stage 4 acceptance / Founder merge readiness.
