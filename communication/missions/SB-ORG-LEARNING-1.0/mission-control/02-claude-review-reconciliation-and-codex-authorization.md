# SMART BUSINESS MISSION CONTROL

# SB-ORG-LEARNING-1.0 — Claude Review Reconciliation and Codex Authorization

**Mission:** `SB-ORG-LEARNING-1.0 — Smart Business Organizational Learning Engine`  
**Stage:** Mission Control review of Claude Code engineering review  
**Status:** `CLAUDE REVIEW ACCEPTED WITH MISSION CONTROL QUALIFICATIONS — CODEX REVIEW AUTHORIZED`  
**Date:** 2026-09-16  
**Implementation:** `NOT AUTHORIZED`  
**Product Mission activation:** None — `SB-P-1.12` remains not activated.  
**Proposal PR:** `#583 — OPEN — DO NOT MERGE YET`

---

## 1. Evidence reviewed

Mission Control independently verified:

- PR `#583` is open and mergeable;
- branch `mission/SB-ORG-LEARNING-1.0-proposal`;
- Claude review commit/head `8dbef2245094e6bbd321ba4dac6688844e942895`;
- durable Claude review at `communication/missions/SB-ORG-LEARNING-1.0/claude-code/01-engineering-review-and-suggestions.md`;
- Claude updated only its intended review artifact and Claude section of `communication/live/report.md`;
- Markdown Quality Gate run `#1692` / `35072900488` completed `SUCCESS` on the Claude head;
- Application Build Assurance run `#88` / `35072900577` completed `SUCCESS` on the Claude head.

Claude performed review-only work. No implementation, dependency, schema/database migration, deployment, Product Truth, roadmap, or Product Mission activation was introduced by the review.

---

## 2. Mission Control disposition

Claude's engineering review is **accepted as a strong repository-grounded review**, subject to the qualifications below.

The review materially improves the proposal by separating the enduring Organizational Learning Engine concept from an unnecessarily large first implementation footprint.

Mission Control accepts the following engineering direction for Codex to treat as the current **reconciled v1 direction**, not yet as implementation authority:

1. Keep the repository-native architecture.
2. Keep the evidence-strength / confidence / maturity / status separation.
3. Keep immutable provenance and supersession references.
4. Use existing repository conventions before adding new infrastructure.
5. Prefer Zod/runtime TypeScript schemas over introducing a new JSON-Schema validation dependency for the first implementation.
6. Begin with a narrow learning surface rather than seven fully-developed registries.
7. Reuse Git blob SHA / commit SHA as provenance primitives where sufficient.
8. Keep secret/sensitive-data screening as a mandatory precondition to learning extraction.
9. Treat source text as untrusted input.
10. Keep all learning outputs advisory until human promotion.
11. Prove deterministic harvesting locally against real closed missions before granting a write-capable autonomous workflow broader authority.
12. Keep all learning-engine tests environment-independent where possible and in the Fast Gate tier.

---

## 3. V1 scope reconciliation

### 3.1 Accepted for the first implementation slice

The smallest credible first implementation slice should contain:

- `organizational-learning/README.md` with explicit non-authority boundary;
- Zod schemas for the learning item, simplified mission-learning report, and processing receipt;
- explicit source allowlist logic;
- `lessons/` and `risks/` as the first two durable registries;
- mission reports and processing receipts;
- a deterministic Node.js ESM harvester/validator;
- idempotency from authoritative source-state identity;
- fail-closed behavior when no authorized evidence exists;
- secret/sensitive-data screening before any candidate extraction;
- Fast Gate tests for allowlist, schemas, provenance, idempotency, zero-source failure, and generated-Markdown compliance;
- one proof run against a clean already-closed mission before broader automation.

### 3.2 Deferred from the first implementation slice, not rejected from the engine vision

The following remain part of the wider Organizational Learning Engine vision but should not be built until the narrow core proves useful:

- separate `resources/`, `skills/`, `capabilities/`, `tools/`, and `decisions/` registries;
- semantic/vector retrieval;
- relevance-ranking algorithms beyond simple scope/category filtering;
- automated contradiction-detection logic;
- exhaustive historical backfill;
- dashboards/visualization;
- organization-wide Lighthouse promotion;
- vendor/tool intelligence monitoring at scale.

Tool/resource/skill/capability observations may still be captured as **candidate lesson categories** in the first slice so the Founder intent is not lost while dedicated registries are deferred.

### 3.3 Not accepted as a permanent end-state

Mission Control does **not** adopt two Claude suggestions as the permanent target architecture without further review:

1. `workflow_dispatch`-only triggering is acceptable for an initial proof stage, but the Founder requirement is that learning eventually happens in the background after every completed mission. The final engine therefore needs a governed automatic closeout trigger or equivalent orchestration once a trustworthy machine-readable closure contract exists.
2. Human-supervised AI mission-session extraction is acceptable for the first proof stage, but it is not automatically the final answer to the Founder's background-automation objective. Codex must assess a safe migration path from supervised proof to automated candidate extraction without granting governance or merge authority to the automation.

The engine must therefore distinguish:

- **proof-stage v1 slice** — narrow, local/manual trigger permitted;
- **target operational engine** — automatic post-mission candidate learning after authoritative closure, still human-gated for promotion.

---

## 4. Source allowlist decision

Mission Control accepts Claude's recommendation that `communication/live/**` **must not be an authoritative harvesting source**.

Reason:

- `communication/live/` is transient by protocol;
- it may contain incomplete, pre-reconciled, or later-superseded state;
- durable mission records and reconciled archives are the correct evidence surface.

Initial authoritative inputs should be allowlisted from durable/reconciled sources such as:

- `communication/missions/<MISSION-ID>/**`;
- `communication/archive/<MISSION-ID>/**` when applicable;
- specifically referenced acceptance/evidence artifacts elsewhere in the repository when the mission record points to them.

This exclusion is justified by lifecycle semantics even without any secret-leak claim.

---

## 5. Correction to one Claude security statement

Claude's review states that a "real secret" was previously leaked into `communication/live/report1.57.md` and cites an ad hoc `gitleaks-report.json` finding.

Mission Control does **not** accept that wording as independently established.

The later merged repository-hygiene record in PR `#288` states that its current-tree and full-history gitleaks scans found only already-reviewed **non-credential-grade** findings, including a UUID-format test artifact and a Supabase anon/publishable-key discussion, with **no service-role key, private API key, password, or private key** found and no credential rotation required.

Therefore the safe reconciled conclusion is:

> The repository has demonstrated that communication/history content can contain secret-like or sensitive-looking values and must be screened before reuse, but the currently reviewed evidence does not support Mission Control restating Claude's finding as a confirmed credential-grade secret leak.

Codex is explicitly asked to independently verify this discrepancy rather than inherit either characterization blindly.

---

## 6. Promotion authority decision for the proposal stage

For the first implementation design:

- AI may draft `CANDIDATE` learning items.
- Deterministic corroboration may attach additional evidence but may not self-promote authority.
- Mission Control may mark a candidate `CORROBORATED` or `VALIDATED` when evidence and scope are clear.
- `INSTITUTIONALISED` requires explicit human approval. For v1, treat Founder approval as required before an item is represented as an organization-wide enduring practice or as a governance-promotion basis.
- Any actual governance amendment remains a separate Founder-approved governance action regardless of learning maturity.

This prevents maturity vocabulary from becoming authority laundering.

---

## 7. Codex Stage — authorized review scope

Codex is now authorized to perform the **second, sequential independent review**.

Codex must review:

1. the original proposal;
2. Claude Code's engineering review;
3. this Mission Control reconciliation;
4. actual repository state.

Codex must form an independent view and specifically challenge:

- whether the reduced first implementation slice is too small, still too large, or correctly bounded;
- whether Zod is the right schema choice for durable cross-language records or whether a different representation should remain canonical;
- whether two registries are sufficient without losing tool/resource/capability learning;
- authoritative mission-close signaling and the path from proof-stage manual triggering to safe background automation;
- AI extraction architecture and the path from supervised extraction to automatic candidate extraction;
- source allowlist design and exclusion of `communication/live/**`;
- provenance integrity and evidence-reach language;
- maturity/promotion authority and possible authority laundering;
- idempotency, replay, concurrency, stale context, supersession, and recovery;
- prompt-injection/untrusted-content handling;
- secret/sensitive-data screening and the Claude-vs-PR-#288 evidence discrepancy;
- whether any proposed automation could silently change governance, Product Truth, roadmap, mission authority, or production state;
- whether the architecture can actually satisfy the Founder's long-term requirement: automatically generate learning after every mission without recurring large manual extraction exercises.

Required Codex output remains:

`communication/missions/SB-ORG-LEARNING-1.0/codex/01-independent-review-and-suggestions.md`

Codex shall update only the Codex section of:

`communication/live/report.md`

and then stop for Mission Control.

---

## 8. Hard boundary remains unchanged

Codex is not authorized to:

- implement the engine;
- add or upgrade dependencies;
- modify lockfiles;
- change product/application code;
- create migrations;
- change RLS/authentication/permissions;
- deploy or touch production;
- enable new integrations;
- change branch protection;
- rewrite Product Truth, governance, or roadmap;
- activate `SB-P-1.12`;
- self-approve;
- self-merge;
- merge PR `#583`.

---

## 9. Next gate

After Codex stops:

1. Mission Control independently reviews the Codex artifact and repository head.
2. Mission Control compares Codex with Claude and this reconciliation.
3. Any required proposal corrections are made on PR `#583`.
4. Founder decisions are obtained where genuinely required.
5. Mission Control issues the final build-plan disposition.
6. Only after that disposition may Founder merge PR `#583` as the approved **build plan**.
7. Implementation remains a separate authorization after the build plan is accepted.

`SB-P-1.12` remains not activated.
