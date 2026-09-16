# SMART BUSINESS MISSION CONTROL

# SB-ORG-LEARNING-1.1 — Stage 1 Claude Code Authorization

**Mission ID:** `SB-ORG-LEARNING-1.1`  
**Stage:** `1 — Contracts, Security Boundaries & Deterministic Harvester Foundation`  
**Builder:** Claude Code  
**Authority:** Successor Smart Business Mission Control under Founder-approved implementation activation  
**Status:** `ACTIVE — STAGE 1 AUTHORIZED`  
**Product Mission activation:** `NONE`; `SB-P-1.12` remains not activated

---

## 1. Activation evidence

Mission Control reverified before opening Stage 1:

- PR `#585` — merged implementation activation;
- PR `#586` — merged successor Mission Control handover;
- canonical protected `main` at Stage 1 opening: `15a2e4919dff1b02b52e61427729c5fe8b3b5f92`;
- controlling build plan: `communication/missions/SB-ORG-LEARNING-1.0/mission-control/03-final-reconciled-build-plan-and-acceptance.md`;
- successor handover: `communication/missions/SB-ORG-LEARNING-1.1/mission-control/02-successor-mission-control-handover.md`.

The successor Mission Control completed the required calibration and correctly reconstructed the mission state, six-stage lifecycle, authority boundary, current stop point and first action.

## 2. Stage 1 branch

Authorized branch:

`mission/SB-ORG-LEARNING-1.1-stage1`

Created from verified protected `main` commit:

`15a2e4919dff1b02b52e61427729c5fe8b3b5f92`

All Stage 1 implementation, tests, durable Claude report and minimum live-report updates belong on this branch until Mission Control review.

## 3. Authorized scope

Stage 1 contains only the approved Phase A and deterministic Phase B foundation described in the controlling build plan and successor handover.

### Phase A

- candidate learning schema;
- promotion/review schema;
- closure-envelope schema;
- processing receipt schema;
- claim-level provenance contract;
- source allowlist;
- safe path normalization / validation;
- committed-Git-object reader;
- screening/quarantine contract;
- environment-independent safety tests.

### Phase B

- Node.js ESM deterministic harvester CLI;
- explicit closure-envelope input;
- pinned committed source verification;
- closure-linked approved evidence enumeration;
- deterministic sorted `path@blobSHA` manifest identity;
- deterministic source fingerprint / idempotency identity;
- deterministic evidence manifest / receipt skeleton.

## 4. Explicit exclusions

Stage 1 does not authorize:

- AI-provider calls or semantic extraction;
- processing the real `SB-OPS-CI-ARCHITECTURE-1.0` proof target;
- automatic promotion;
- autonomous repository writes or PR creation;
- background learning workflows;
- new credentials or integrations;
- Supabase/database/schema/RLS/auth changes;
- provider or production/test-environment mutation;
- Product Truth, governance, roadmap, pricing, permissions or Founder-decision changes;
- dependency or lockfile changes unless Mission Control separately authorizes them from evidence;
- Stage 2;
- `SB-P-1.12` activation.

## 5. Review chain

`Claude Code implementation → Mission Control substantive review → Codex independent verification → narrow correction if required → Mission Control Stage 1 acceptance → human/Founder merge if ready → explicit Stage 2 authorization`

No builder may approve its own work.

## 6. Active execution instruction

The exact execution instruction preserved in Section 11 of the successor handover is now published in:

`communication/live/instruction.md`

Claude Code must treat that live instruction, this authorization, the controlling build plan and current repository state as the Stage 1 execution boundary.

## 7. Required durable output

Claude Code shall create:

`communication/missions/SB-ORG-LEARNING-1.1/claude-code/01-stage1-implementation-and-verification.md`

and update only the assigned Claude section of `communication/live/report.md`.

## 8. Stop condition

After implementation, validation, push and durable report, Claude Code must:

**STOP FOR MISSION CONTROL.**

Do not self-approve. Do not merge. Do not begin Stage 2, the real proof mission, AI extraction, background automation or `SB-P-1.12`.
