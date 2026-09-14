# SB-ENG-BUILD-ASSURANCE-1.0 — Build Assurance & Automation Foundation

## Mission Identity

- **Mission ID:** `SB-ENG-BUILD-ASSURANCE-1.0`
- **Mission Name:** Build Assurance & Automation Foundation
- **Mission Type:** Non-Product engineering-assurance mission
- **Authorized By:** Founder through Mission Control
- **Status:** ACTIVATION AUTHORIZED — AWAITING ACTIVATION PR MERGE
- **Canonical Repository:** `SmartBusinessv1/smart-business`
- **Authorized Base:** `main @ 9b0b65b522fc370f8146186742479cb7c17409e5`
- **Mission Branch:** `mission/SB-ENG-BUILD-ASSURANCE-1.0-foundation`
- **Current Stage Owner after activation merge:** Claude Code
- **Independent reviewer for a later implementation stage:** Codex, only when separately dispatched by Mission Control
- **Date:** 2026-09-14

## Purpose

Establish a small repository-native build-assurance foundation before any future `SB-P-*` implementation resumes.

Phase 1 institutional learning showed that a green Markdown gate, merged pull request, successful build, deployed preview, or builder report proves only the exact thing tested. Smart Business needs stronger automated engineering evidence before the next Product Mission begins.

This mission is deliberately separate from Product development and does **not** activate `SB-P-1.12` or any later Product Mission.

## Authority Boundary

This mission may improve engineering assurance and repository verification only.

It may not:

- redefine Product Truth;
- modify governance or the roadmap;
- change the nine-mission Product sequence;
- change merchant-facing product behaviour;
- create or modify business features;
- mutate production, Supabase, Lovable, AWS, Cloudflare, Meta, OpenAI, payment providers, or runtime configuration;
- create or apply database migrations;
- change repository protection settings;
- deploy or publish;
- activate `SB-P-1.12`;
- self-approve or self-merge.

Tool access never creates authority.

## Build Now

Only Stage 1 is authorized by this activation package.

### Stage 1 — Current Assurance Inventory & Implementation Design

Claude Code shall perform read-only repository analysis and produce a durable report that:

1. inventories current application quality scripts and relevant tooling in `package.json`, lockfiles, TypeScript configuration, ESLint, Vitest, Vite/build configuration, Git hooks, and GitHub Actions;
2. identifies exactly what the current Markdown Quality Gate does and does not prove;
3. identifies current application build, lint, test, and type-check coverage and whether each command is deterministic in GitHub Actions;
4. inventories current automated tests and material assurance gaps without inventing coverage;
5. determines whether Lambda/parser build assurance belongs in the first application gate or should remain separate;
6. proposes an exact minimal application-quality workflow for a later implementation stage, including triggers, commands, dependency-install strategy, timeout/failure behaviour, and evidence output;
7. identifies scripts or workflows that should be reused rather than duplicated;
8. proposes the smallest Stage 2 implementation change set;
9. classifies additional assurance ideas into `BUILD LATER`, `ADD-ON`, or `SEPARATE MISSION`;
10. confirms that no implementation, workflow mutation, product mutation, runtime mutation, or provider mutation occurred during Stage 1.

### Stage 1 Required Deliverable

Create:

`communication/missions/SB-ENG-BUILD-ASSURANCE-1.0/claude-code/01_current_assurance_inventory_and_design_report.md`

Then update `handover-log.md` and return to Mission Control for review.

No application or workflow implementation is authorized in Stage 1.

## Build Later — Not Yet Authorized

Subject to Mission Control review of Stage 1, later stages may separately authorize:

- deterministic application CI for install, lint, tests, type-check where supported, and build;
- permission and denial-path regression harnesses;
- migration-ledger versus environment-currency checking;
- canonical-repository versus delivery-repository drift detection;
- Product Truth / Blueprint / EIS / implementation traceability checks;
- reproducible assurance evidence manifests.

Listing an item here does not authorize it.

## Separate Mission / Add-on Candidates

Keep outside this small foundation unless Mission Control separately authorizes them:

- new third-party security-scanning services;
- production synthetic monitoring;
- deployment automation;
- provider-state monitoring;
- production load testing;
- repository protection/ruleset changes;
- live production data remediation.

## Reject Within This Mission

Reject:

- Product feature work;
- UI/UX redesign;
- schema or data mutation;
- migration execution;
- state-changing production probes;
- provider configuration changes;
- Lovable publish actions;
- runtime deployment;
- `SB-P-1.12` activation.

## Governing Sources

This mission inherits, at minimum:

- Source 00 — Lighthouse Constitution;
- Source 01 — Smart Business Master System Manifesto;
- Source 09 — Master Roadmap Command;
- Source 11 — Smart Business Product Truth Map;
- Source 12 — Product Execution and Release Framework;
- Source 15 — Mission Control Activation Template;
- Source 17 — AI Operations Manual;
- Source 18 — boundary awareness only; this is not an `SB-P-*` mission;
- `communication/AI_Communication_and_Handover_Protocol.md`;
- `communication/README.md`;
- `mission-control/mission-control-1-12.md`;
- `mission-control/mission-control-13-21.md`;
- `docs/phase-1-mission-blueprint/00_Phase_1_Institutional_Memory_Lessons_Capabilities_and_Operational_Guardrails.md`;
- accepted Claude Code and Codex Phase 1 retrospectives.

## Assurance Principles Inherited From Phase 1

- A PASS means only what the evidence proves.
- Builder self-report is not independent verification.
- Repository state is not runtime state.
- Test evidence is not production evidence.
- Implementation is not acceptance.
- Denial paths matter.
- Generated artifacts do not override source truth.
- Canonical and delivery repositories must not be assumed identical.
- Narrow defects receive narrow corrections.
- Automation should reduce Founder technical burden without reducing Founder authority.

## Stage Sequence

1. Activation PR — Founder merge required.
2. Stage 1 — Claude Code read-only assurance inventory and design.
3. Mission Control review.
4. Stage 2 implementation only if separately authorized.
5. Independent Codex verification if implementation occurs.
6. Mission Control acceptance or correction.
7. Founder merge where repository changes require it.
8. Documentation closure and transient communication archive.

## Stage 1 Acceptance Conditions

Stage 1 is acceptable only when:

- current repository assurance state is evidenced rather than assumed;
- existing scripts and workflows are inventoried;
- current CI limitations are explicit;
- the proposed Stage 2 gate is minimal and implementation-ready;
- reuse is preferred over duplicate tooling;
- no Product or runtime mutation occurs;
- unresolved questions remain explicit;
- current fact is separated from recommendation.

## Current Next Authorized Action

After this activation PR is merged, Claude Code may pull current `main`, verify this mission package is present, and execute **Stage 1 only** by reading:

`communication/live/instruction.md`

No Stage 2 implementation is authorized until Mission Control reviews the Stage 1 report and issues a new durable instruction.
