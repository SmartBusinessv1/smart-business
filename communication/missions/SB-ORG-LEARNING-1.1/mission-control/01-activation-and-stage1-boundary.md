# SMART BUSINESS MISSION CONTROL

# SB-ORG-LEARNING-1.1 — Activation and Stage 1 Boundary

**Mission ID:** `SB-ORG-LEARNING-1.1`  
**Mission name:** Smart Business Organizational Learning Engine — Implementation  
**Authority:** Founder direction executed by Smart Business Mission Control  
**Status:** `ACTIVATION — AWAITING FOUNDER MERGE`  
**Product Mission activation:** `NONE`

---

## 1. Founder direction

The Founder has directed that the approved Organizational Learning Engine build plan be implemented before `SB-P-1.12` so that the institutional learning recovered through the historical reconstruction mission becomes a continuing Smart Business capability rather than a one-time archive.

This implementation is therefore a prerequisite workstream before the next Product Mission.

## 2. Controlling design

Implementation must inherit and follow:

`communication/missions/SB-ORG-LEARNING-1.0/mission-control/03-final-reconciled-build-plan-and-acceptance.md`

Where earlier proposal/review documents differ, the final reconciled build plan controls.

## 3. Mission outcome required before SB-P-1.12

Before `SB-P-1.12` may be activated, Mission Control must have accepted an implementation that proves:

- authoritative mission-closure eligibility can be represented safely;
- deterministic harvesting can read only approved committed evidence;
- claim-level provenance is preserved;
- sensitive-data screening and quarantine fail closed;
- candidate learning cannot self-promote;
- candidate and promotion contracts are separate;
- lessons and risks can be stored/retrieved without becoming governance;
- mission learning reports can be generated;
- mission-start context packs can be generated from reviewed learning;
- contradictions, freshness, supersession and unresolved risks are surfaced;
- idempotency, concurrency and recovery behavior are tested;
- background processing/reconciliation can detect eligible closure revisions without relying only on arbitrary prose;
- automatic processing stops at candidate learning and does not gain merge, approval, Product Truth, governance, deployment, production, or Product Mission authority.

## 4. Stage 1 — implementation boundary

After this activation PR is Founder-merged, Mission Control may authorize Claude Code to implement **Stage 1 only**:

### Phase A foundation

- candidate schema;
- promotion/review schema;
- closure-envelope schema;
- processing receipt schema;
- claim-level provenance contract;
- source allowlist;
- safe path normalization;
- committed-Git-object reader;
- screening/quarantine contract;
- tests for prohibited candidate authority fields, unsafe paths, invalid provenance and scanner-failure handling.

### Phase B deterministic harvester foundation

- Node.js ESM CLI;
- explicit closure-envelope input;
- pinned source-state verification;
- approved evidence enumeration;
- deterministic `path@blobSHA` manifest generation;
- source fingerprint / idempotency identity;
- deterministic receipt skeleton;
- no AI call;
- no promotion;
- no autonomous repository write;
- no background workflow yet.

Recommended first proof target remains:

`SB-OPS-CI-ARCHITECTURE-1.0`

but executing that proof belongs to the next authorized stage after Stage 1 review.

## 5. Stage 1 implementation constraints

The Stage 1 builder shall:

- inspect current repository conventions before writing;
- reuse existing dependencies where possible;
- use Zod/runtime TypeScript contracts as approved;
- use Node.js ESM for deterministic scripts;
- keep implementation repository-native;
- add tests to the appropriate Fast Gate unless a test genuinely requires Full Assurance;
- avoid dependency/lockfile changes unless Mission Control separately authorizes them;
- avoid network/provider calls;
- avoid production/test-environment writes;
- avoid GitHub write automation;
- avoid AI-provider calls;
- avoid any governance or Product Truth mutation.

## 6. Review model

Stage sequence:

`Claude Code implementation → Mission Control review → Codex independent verification → correction if required → next-stage authorization`

No builder may approve its own implementation.

## 7. Stop condition

This activation record does not itself authorize Stage 1 execution until the activation PR is merged by the Founder.

After merge, Mission Control will verify canonical `main`, activate the Stage 1 live instruction, and assign Claude Code.

`SB-P-1.12` remains not activated.
