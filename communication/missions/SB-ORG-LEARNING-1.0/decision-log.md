# SB-ORG-LEARNING-1.0 — Decision Log

## D-001 — Mission class

**Decision:** Treat the Organizational Learning Engine as a non-Product organizational/institutional capability mission.

**Reason:** It governs how Team LIPS preserves and reuses learning. It does not itself define a merchant-facing Product Mission.

**Effect:** Source 18 does not automatically govern this mission merely because the capability may later support Product Missions.

---

## D-002 — Current stage

**Decision:** Open only a research/design proposal review stage.

**Status:** `EXTERNAL REVIEW PENDING`

**Implementation:** `NOT AUTHORIZED`

---

## D-003 — Initial architecture direction

**Decision:** Propose a repository-native, deterministic-first v1 before considering databases, vector stores, autonomous agents, or new production services.

**Reason:** The canonical repository is already the durable operational record. The smallest safe architecture should be proven before infrastructure expansion.

**Status:** Proposal only; Claude Code and Codex must challenge it.

---

## D-004 — Authority boundary

**Decision:** Learning artifacts provide context and institutional memory but do not create authority.

The engine may not automatically:

- change Product Truth;
- change governance;
- alter roadmap sequence;
- interpret Founder decisions as new authority;
- activate missions;
- accept implementation;
- merge pull requests;
- deploy;
- alter production.

---

## D-005 — Learning dimensions

**Decision:** Evidence strength, confidence, maturity, and status must remain separate dimensions.

**Reason:** A historically strong fact can be operationally superseded; a high-confidence observation can remain only a candidate organizational lesson.

---

## D-006 — Provenance requirement

**Decision:** Durable learning must be traceable to durable evidence.

Candidate provenance classes include Founder decision, Mission Control disposition, specialist review, independent verification, builder report, CI evidence, runtime evidence, operator attestation, historical record, and assistant synthesis.

---

## D-007 — Historical/current separation

**Decision:** Historical institutional memory must not be silently promoted into current state or governance.

Superseded learning remains preserved with chronology and replacement references.

---

## D-008 — Human promotion gate

**Decision:** AI may extract and propose candidate lessons. Human/Mission Control review controls durable promotion. Governance promotion remains separately governed.

No AI may self-promote a lesson into institutional authority.

---

## D-009 — Review structure

**Decision:** Require two independent review perspectives before implementation authorization is considered.

**Sequence:** Claude Code first → Mission Control reconciliation → Codex independent review → Mission Control final reconciliation → Founder merge only if accepted.

Each reviewer creates its own durable report and updates only its section of `communication/live/report.md`.

---

## D-010 — Product Mission boundary

**Decision:** This mission does not activate `SB-P-1.12` or any other Product Mission.

Any later Product Mission activation requires separate explicit Mission Control authority.

---

## D-011 — Claude review disposition

**Decision:** Accept Claude Code's engineering review as repository-grounded and useful, with Mission Control qualifications recorded in:

`communication/missions/SB-ORG-LEARNING-1.0/mission-control/02-claude-review-reconciliation-and-codex-authorization.md`

**Effect:** Codex reviews the original proposal together with the reconciled v1 direction rather than assuming the original architecture is unchanged.

---

## D-012 — First implementation slice

**Decision:** The first implementation slice, if later authorized, should begin with a narrow repository-native core:

- Zod/runtime TypeScript schemas;
- explicit durable-source allowlist;
- lessons and risks registries only;
- simplified mission-learning report;
- processing receipts;
- deterministic Node.js ESM harvester/validator;
- provenance/idempotency/security checks;
- Fast Gate tests;
- proof against one real closed mission before broader automation.

Dedicated resources/skills/capabilities/tools/decisions registries remain deferred, not rejected. Their observations may still be captured as candidate lesson categories.

---

## D-013 — Background automation remains a target requirement

**Decision:** Manual `workflow_dispatch` or supervised extraction may be used for proof-stage validation, but neither is accepted as the permanent end-state.

**Reason:** Founder intent requires the mature engine to produce post-mission learning automatically in the background after authoritative mission closure.

**Effect:** Codex must review the migration path from proof-stage manual/supervised processing to governed automatic candidate learning.

---

## D-014 — Live communication excluded from authoritative harvesting

**Decision:** `communication/live/**` is excluded from the initial authoritative source allowlist.

**Reason:** It is transient and may be incomplete or pre-reconciliation. Durable mission records and reconciled archives are the correct evidence surface.

---

## D-015 — Secret-leak evidence wording

**Decision:** Do not restate Claude's `report1.57.md` finding as a confirmed credential-grade secret leak based on the evidence reviewed so far.

Merged PR #288 reports current-tree and full-history gitleaks findings as non-credential-grade and reports no service-role key, private API key, password, or private key found.

**Safe conclusion:** learning ingestion must screen secret-like/sensitive-looking content before reuse. Codex must independently reconcile the evidence discrepancy.

---

## D-016 — Learning promotion authority

**Decision for v1 design:**

- AI may draft `CANDIDATE` items.
- Mission Control may mark items `CORROBORATED` or `VALIDATED` when evidence and scope are clear.
- `INSTITUTIONALISED` requires explicit human approval; for v1, Founder approval is required before representing an item as an organization-wide enduring practice or governance-promotion basis.
- Governance change always remains a separately authorized Founder-approved action.
