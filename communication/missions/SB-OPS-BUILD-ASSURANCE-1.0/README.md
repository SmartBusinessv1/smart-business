# SB-OPS-BUILD-ASSURANCE-1.0 — Build Assurance & Automation Foundation

## Mission identity

- **Mission ID:** `SB-OPS-BUILD-ASSURANCE-1.0`
- **Mission name:** Build Assurance & Automation Foundation
- **Mission type:** Non-Product operational / engineering-assurance mission
- **Status:** `STAGE 1 COMPLETE — AWAITING CODEX INDEPENDENT REVIEW AND MISSION CONTROL ACCEPTANCE`
- **Founder:** Riyas PK
- **Mission Control:** Current Smart Business Mission Control
- **Canonical repository:** `SmartBusinessv1/smart-business`
- **Authorized base:** `main @ 9b0b65b522fc370f8146186742479cb7c17409e5`
- **Activation branch:** `mission/SB-OPS-BUILD-ASSURANCE-1.0-activation`
- **Date:** 2026-09-14

## Why this mission exists

Phase 1 historical reconstruction and institutional-memory closeout exposed a recurring engineering risk: Smart Business currently has strong documentation and governance checks, but application-build assurance, negative-path automation, environment-drift detection, and specification-to-test traceability are not yet equally automated.

This mission creates a small assurance foundation before the next Product Mission begins.

It is intentionally **not** an `SB-P-*` Product Mission and does not use Source 18 as its Product Mission lifecycle. It remains subordinate to the same authority chain, repository communication protocol, security boundaries, and no-self-approval rules.

## Founder-approved boundary

### Build Now

This mission is limited to a minimal repository-level assurance baseline:

1. **Application CI baseline**
   - inspect the canonical repository's existing build, lint, typecheck, and test commands;
   - add a GitHub Actions workflow that runs only checks already supported by the repository/toolchain;
   - do not invent passing results or hide existing failures;
   - do not auto-fix application code.

2. **Build-assurance evidence contract**
   - document the exact checks, their scope, what each proves, and what each does not prove;
   - define PASS / FAIL / FOLLOW-UP / NOT APPLICABLE reporting;
   - make clear that green CI does not equal runtime, security, or Product acceptance.

3. **Independent review gate**
   - Claude Code may implement the assurance workflow under explicit mission authority;
   - Codex performs independent review of the resulting workflow and evidence;
   - Mission Control decides acceptance;
   - Founder/human merge remains required.

### Build Later — not authorized in this mission

The following are valuable but explicitly deferred from this small foundation mission:

- cross-tenant / RLS denial automation;
- migration-ledger vs production-currency checker;
- canonical-vs-delivery repository drift detector;
- Product Truth → Blueprint/EIS → implementation → test traceability automation;
- idempotency/replay harnesses;
- privileged-function / `SECURITY DEFINER` scanners;
- runtime/provider-state monitoring.

These may become separate follow-up assurance missions after the baseline proves useful.

## Explicit prohibitions

This mission does **not** authorize:

- Product Truth changes;
- governance amendments;
- roadmap changes;
- `SB-P-1.12` activation;
- application feature changes;
- UX changes;
- database/schema/RLS/grant/RPC mutations;
- Supabase production changes;
- Lovable changes or publishing;
- AWS/Lambda changes;
- Cloudflare changes;
- Meta/WhatsApp changes;
- OpenAI/model/prompt changes;
- dependency upgrades merely to make CI pass;
- production deployments;
- runtime mutation;
- branch-protection changes;
- direct push to `main`;
- self-approval or self-merge.

If application checks expose pre-existing failures that require product/application changes, the actor must stop and report them as findings. This mission does not silently expand to repair those failures.

## Authority inheritance

This mission must follow, at minimum:

- Source 00 — Lighthouse Constitution;
- Phase 1 constitutional authority (Source 01 + Source 11 under SB-GOV-1.2);
- Source 09 — Roadmap Command;
- Source 12 — Product Execution & Release principles where relevant to evidence quality;
- Source 15 — Mission Control Activation Template;
- Source 17 — AI Operations Manual;
- `communication/AI_Communication_and_Handover_Protocol.md`;
- repository actor instructions and protected-main rules.

Source 18 remains authoritative for `SB-P-*` Product Missions only; this mission must not be forced into Source 18 stages.

## Stage plan

### Stage 0 — Mission Control activation

**Owner:** Mission Control

Deliverables:

- mission README;
- activation instruction;
- decision log;
- handover log;
- current live instruction/report pair.

Exit condition:

- activation package merged to `main` through Founder/human merge.

### Stage 1 — Claude Code assurance implementation

**Owner:** Claude Code

Allowed scope after Stage 0 merge and explicit handoff:

- inspect current package scripts and existing workflows;
- create/modify only repository assurance workflow/configuration/documentation paths explicitly named in the live instruction;
- run local/static validation available to the actor;
- submit completion evidence through the repository communication workflow.

No application-code repair is authorized.

### Stage 2 — Codex independent review

**Owner:** Codex

Review:

- exact changed-file scope;
- whether the workflow runs real repository-supported commands;
- whether checks are fail-closed and not decorative;
- whether claims remain narrower than evidence;
- whether product/runtime/security authority boundaries are preserved.

Codex does not modify Claude Code's implementation unless separately authorized.

### Stage 3 — Mission Control acceptance and closure

**Owner:** Mission Control

Mission Control will review:

- Claude Code implementation evidence;
- Codex independent findings;
- final CI on the mission branch;
- whether any application/product mutation occurred;
- whether the assurance baseline creates meaningful protection without unnecessary ceremony.

Founder/human merge is required for accepted repository changes.

## Acceptance criteria

The mission may be accepted only if all of the following are true:

- a real application-assurance workflow exists in the canonical repository;
- the workflow executes repository-supported checks rather than placeholder commands;
- check semantics and limitations are documented;
- no Product Truth or product behaviour changed;
- no application code was changed merely to manufacture a green check;
- no production/runtime/provider mutation occurred;
- independent Codex review is complete;
- Mission Control review is complete;
- required branch checks pass;
- Founder/human merge occurs through protected `main`.

## Current owner and next authorized action

**Current owner:** Mission Control (Stage 2 activation pending).

**Blockers:** none for Stage 1. Pre-existing lint debt and dependency-vulnerability findings are reported, not blockers, per Claude Code's Stage 1 report.

**Latest commit / pull request:** recorded in `handover-log.md` once the mission branch is pushed and the PR is opened.

**Next authorized action:** Mission Control reviews Claude Code's Stage 1 report and separately activates Codex for Stage 2 independent review. Claude Code does not activate the reviewer itself. Founder/human merge remains required and has not occurred; no self-approval or self-merge is authorized.

## Material records

- `mission-control/01-activation-instruction.md`
- `decision-log.md`
- `handover-log.md`
- `claude-code/01-stage1-report.md`
- `communication/live/instruction.md`
- `communication/live/report.md`
- `docs/engineering/assurance/Build_Assurance_Baseline.md`
- `.github/workflows/build-assurance.yml`

## Closure rule

The mission is not complete when CI is added. It closes only after independent review, Mission Control acceptance, Founder/human merge, and post-merge verification of the accepted assurance state.
