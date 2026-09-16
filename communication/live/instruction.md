# SMART BUSINESS — REPOSITORY COMMUNICATION

# SB-ORG-LEARNING-1.1 — STAGE 1 CLAUDE CODE IMPLEMENTATION

**Mission:** `SB-ORG-LEARNING-1.1 — Smart Business Organizational Learning Engine — Implementation`

**Stage:** `1 — Contracts, Security Boundaries & Deterministic Harvester Foundation`

**Builder:** Claude Code

**Repository:** `SmartBusinessv1/smart-business`

**Authorized branch:** `mission/SB-ORG-LEARNING-1.1-stage1`

**Product Mission state:** `SB-P-1.12 NOT ACTIVATED`

**Status:** `ACTIVE — CLAUDE CODE STAGE 1 IMPLEMENTATION AUTHORIZED`

---

## Objective

Implement only the approved Stage 1 foundation of the Organizational Learning Engine.

This stage must create the deterministic contracts, source-safety boundaries and local harvester foundation needed for later supervised learning, without introducing AI calls, background automation, autonomous repository writes, provider mutations or promotion behavior.

## Mandatory reading

Read before implementation:

1. `communication/live/instruction.md`
2. `communication/missions/SB-ORG-LEARNING-1.1/README.md`
3. `communication/missions/SB-ORG-LEARNING-1.1/mission-control/01-activation-and-stage1-boundary.md`
4. `communication/missions/SB-ORG-LEARNING-1.1/mission-control/02-successor-mission-control-handover.md`
5. `communication/missions/SB-ORG-LEARNING-1.1/mission-control/03-stage1-claude-code-authorization.md`
6. `communication/missions/SB-ORG-LEARNING-1.0/mission-control/03-final-reconciled-build-plan-and-acceptance.md`
7. relevant active governance, especially Source 17 / AI Operations Manual and repository communication protocol;
8. current repository conventions, package scripts, Fast Gate tests, Git utilities and existing Zod usage.

Do not implement from chat memory or from the original pre-reconciliation proposal when it differs from the final controlling build plan.

## Authorized implementation — Phase A

Build the approved repository-native contracts/security foundation:

- candidate learning schema;
- promotion/review schema;
- closure-envelope schema;
- processing receipt schema;
- claim-level provenance contract;
- source allowlist;
- safe path-normalization / path-validation logic;
- committed-Git-object reader;
- screening/quarantine contract;
- tests for prohibited candidate authority fields;
- tests for unsafe/absolute/traversal/ambiguous paths;
- tests for invalid/dangling provenance;
- tests proving scanner failure/unknown scanner state fails closed.

## Authorized implementation — Phase B deterministic foundation

Build a Node.js ESM deterministic harvester CLI that:

- accepts an explicitly supplied approved closure envelope;
- verifies pinned committed source state;
- reads only eligible committed Git objects;
- enumerates only closure-linked approved evidence;
- computes deterministic sorted `path@blobSHA` manifest identity;
- computes source fingerprint/idempotency identity from closure revision + schema version + sorted source identity;
- produces a deterministic evidence manifest / receipt skeleton;
- reports failure states truthfully;
- performs no semantic extraction;
- performs no promotion;
- performs no autonomous repository write;
- performs no background workflow processing.

## Required architecture rules

- Use repository-native implementation.
- Use existing Zod/runtime TypeScript conventions; do not add a new validation framework.
- Use Node.js ESM for deterministic scripts.
- Candidate and promotion contracts must remain structurally separate.
- Candidate objects must reject trusted approval/promotion fields rather than silently accept/discard them.
- Source eligibility must not be represented as source authority.
- Claim provenance must bind exact claims to exact evidence reach.
- `communication/live/**` must not be eligible authoritative harvest input.
- Source reads must be from pinned committed Git objects, not dirty worktree state.
- Unexpected symlink/submodule/non-regular-object/path-traversal cases must fail safely.
- Scanner missing/failing/unknown must fail closed.
- Do not echo potential secret values in logs, reports or fixtures.
- No generated learning artifact may become primary evidence for itself.

## Explicitly not authorized in Stage 1

Do **not**:

- call OpenAI or any AI provider;
- perform semantic candidate extraction;
- implement automatic learning promotion;
- implement background GitHub Actions learning orchestration;
- implement automatic PR creation or repository write automation;
- process the real `SB-OPS-CI-ARCHITECTURE-1.0` proof target yet;
- add external credentials;
- modify Supabase/database/schema/RLS/auth;
- access production or test provider state;
- modify application Product Truth, roadmap, governance, pricing, permissions or Founder decisions;
- activate `SB-P-1.12`;
- add dependencies or modify `package-lock.json` unless Mission Control separately authorizes it after evidence that the existing repository cannot satisfy the requirement;
- self-approve or self-merge.

## Testing and CI

- Add Stage 1 tests to the Fast Gate when environment-independent.
- Do not create a Supabase dependency for Stage 1 tests.
- Run the applicable local tests/lint/typecheck/build/Markdown checks.
- Push to the authorized Stage 1 branch and allow real CI to verify the exact head.
- Report test membership/counts/results and exact CI evidence.

## Required durable output

Create:

`communication/missions/SB-ORG-LEARNING-1.1/claude-code/01-stage1-implementation-and-verification.md`

The report must include:

- exact files changed;
- architecture summary;
- candidate/promotion separation proof;
- source-allowlist and path-safety behavior;
- provenance contract behavior;
- screening/quarantine behavior;
- deterministic source fingerprint/idempotency design;
- receipt-state model;
- test inventory and results;
- Fast Gate integration evidence;
- dependency/lockfile confirmation;
- explicit list of Stage 1 exclusions that remain unimplemented;
- unresolved risks / assumptions / follow-ups;
- recommended Stage 2 handoff, without activating Stage 2.

Update only the Claude Code section of `communication/live/report.md`.

## Stop condition

After implementation, validation, push and durable report:

**STOP FOR MISSION CONTROL.**

Do not self-approve.

Do not merge.

Do not begin the real closed-mission proof.

Do not begin AI extraction.

Do not begin background automation.

Do not activate Stage 2.

Do not activate `SB-P-1.12`.
