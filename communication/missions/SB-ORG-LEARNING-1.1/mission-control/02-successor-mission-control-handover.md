# SMART BUSINESS MISSION CONTROL

# SB-ORG-LEARNING-1.1 — Successor Mission Control Handover

**Mission ID:** `SB-ORG-LEARNING-1.1`  
**Mission name:** Smart Business Organizational Learning Engine — Implementation  
**Document:** Successor Mission Control Handover  
**Date:** 2026-09-16  
**From:** Outgoing Smart Business Mission Control  
**To:** Successor Smart Business Mission Control  
**Status:** `HANDOVER READY — STAGE 1 NOT YET OPENED`  
**Product Mission activation:** `NONE`; `SB-P-1.12` remains not activated

---

## 1. Purpose

This handover transfers the active Organizational Learning Engine implementation mission to the successor Smart Business Mission Control without starting specialist execution prematurely.

The successor's **first execution action** after completing its own activation/hydration and verifying current repository state is to open **Stage 1 for Claude Code** using the exact instruction contained in Section 11 of this document.

Do not start `SB-P-1.12` before this Organizational Learning Engine implementation mission is accepted.

---

## 2. Why this mission exists

The Founder directed Smart Business to implement the approved Organizational Learning Engine before the next Product Mission.

The reason is strategic and operational:

Smart Business invested significant effort reconstructing institutional knowledge from Founder-origin ideation, Ground Zero, NotebookLM, specialist rooms, earlier Mission Control eras, Claude Code/Codex history, implementation corrections, Build Assurance work, and final historical synthesis.

That reconstruction materially improved Mission Control judgement.

The Founder does not want the organization to repeat that extraction exercise periodically.

The desired mature capability is:

`authoritative mission closure`

→ `deterministic evidence harvesting`

→ `safe candidate-learning extraction`

→ `validated learning report`

→ `human review / promotion`

→ `reusable mission-start context`

→ `background reconciliation for later missions`.

The constitutional boundary is permanent:

> **Self-improving memory does not mean self-modifying governance.**

---

## 3. Current canonical repository state at handover

Repository:

`SmartBusinessv1/smart-business`

Founder-merged implementation activation PR:

`#585 — SB-ORG-LEARNING-1.1 — Organizational Learning Engine implementation activation`

Merge commit / canonical `main` at the time of handover:

`e1806c0e2e1f56102e03daf6639363ddd34c3ede`

Post-merge CI on that exact commit:

- Team LIPS Markdown Quality Gate — run `#1715` — `SUCCESS`
- Team LIPS Application Build Assurance — run `#111` — `SUCCESS`

The successor must reverify `main` before acting because repository state may move after this handover PR.

---

## 4. Parent design mission and controlling authority

Parent mission:

`SB-ORG-LEARNING-1.0 — Smart Business Organizational Learning Engine`

Parent mission status:

`CLOSED — ACCEPTED — BUILD PLAN APPROVED — DURABLY ARCHIVED`

The **controlling build plan** is:

`communication/missions/SB-ORG-LEARNING-1.0/mission-control/03-final-reconciled-build-plan-and-acceptance.md`

If earlier proposal, Claude review, Codex review, or discussion differs from the final reconciled build plan, the final reconciled build plan controls.

Implementation activation boundary:

`communication/missions/SB-ORG-LEARNING-1.1/mission-control/01-activation-and-stage1-boundary.md`

This implementation mission does not modify Product Truth, governance or roadmap order.

---

## 5. Mission completion target

`SB-ORG-LEARNING-1.1` is not complete merely because schemas or scripts exist.

Before Mission Control may accept the mission and unblock `SB-P-1.12`, the implementation must prove a governed path that includes all of the following:

- authoritative mission-closure eligibility represented safely;
- deterministic harvesting from approved committed evidence;
- claim-level provenance;
- sensitive-data screening and quarantine that fail closed;
- separate candidate and promotion contracts;
- candidate learning unable to self-promote;
- lessons and risks stored/retrieved without becoming governance;
- Mission Learning Reports;
- mission-start context packs from reviewed learning;
- contradiction, freshness, supersession and unresolved-risk handling;
- idempotency;
- concurrency control;
- recovery behavior;
- background detection/reconciliation for eligible closure revisions;
- automatic processing stopping at candidate learning;
- no autonomous merge, approval, governance, Product Truth, deployment, production, or Product Mission authority.

The mature target remains:

> **authoritative mission closure → automatic background candidate learning without repeated manual extraction**

Manual/supervised steps are acceptable during proof stages only.

---

## 6. Required stage sequence

The implementation mission is staged deliberately.

### Stage 1 — Contracts, security boundaries, deterministic harvester foundation

Builder: Claude Code.

Purpose:

Create the deterministic and security foundation with no AI call and no autonomous write behavior.

### Stage 2 — Closed-mission proof and supervised candidate extraction

Use one already-closed mission with strong evidence.

Recommended proof target:

`SB-OPS-CI-ARCHITECTURE-1.0`.

Purpose:

Prove the harvester, source manifest, screening, candidate extraction, provenance validation and Mission Learning Report against real repository evidence.

### Stage 3 — Human review/promotion and mission-start context-pack proof

Purpose:

Prove the candidate → human-reviewed learning boundary and deterministic retrieval/context-pack behavior.

### Stage 4 — Background automation / reconciliation implementation

Purpose:

Implement the approved background path for newly eligible, missed, reopened, amended or superseded closures.

Background processing must stop at candidate state.

### Stage 5 — Independent verification and failure-path assurance

Codex or another independently authorized verifier reviews:

- authority laundering;
- secret/sensitive-data failure paths;
- unsafe path traversal;
- provenance integrity;
- idempotency;
- duplicate/concurrent runs;
- partial publication;
- stale/superseded context;
- contradictory learning;
- reopened missions;
- scanner failure;
- recovery.

### Stage 6 — Mission Control acceptance, Founder merge, communication closeout

Only after accepted implementation and required human merge may the mission close.

Then archive/reset `communication/live/` correctly.

Only after this mission is accepted may Mission Control consider activating `SB-P-1.12`.

---

## 7. Stage 1 exact implementation scope

Stage 1 contains only the approved Phase A + deterministic Phase B foundation.

### Phase A — contracts and security boundaries

Implement:

- candidate schema;
- promotion/review schema;
- closure-envelope schema;
- processing receipt schema;
- claim-level provenance contract;
- source allowlist;
- safe path normalization;
- committed-Git-object reader;
- screening/quarantine contract;
- tests for prohibited candidate authority fields;
- tests for unsafe paths;
- tests for invalid provenance;
- tests for scanner failure / unknown scanner state.

### Phase B — deterministic harvester foundation

Implement:

- Node.js ESM CLI;
- explicit closure-envelope input;
- pinned source-state verification;
- approved evidence enumeration;
- deterministic `path@blobSHA` manifest generation;
- source fingerprint / idempotency identity;
- deterministic receipt skeleton.

Stage 1 explicitly excludes:

- AI-provider calls;
- semantic candidate extraction;
- registry promotion;
- autonomous repository writes;
- background workflow automation;
- processing the recommended real proof target;
- provider/network calls;
- production/test-environment writes;
- Product Truth/governance/roadmap changes.

---

## 8. Critical architecture constraints to preserve

The successor Mission Control should actively defend these approved decisions.

### Candidate is not authority

Generated candidate content must remain structurally limited to candidate state.

It must not populate trusted review, approval, Founder-authority, accepted supersession, risk-resolution, or organization-wide institutionalization fields.

### Promotion is separate

Human-controlled promotion is a separate write path.

For v1:

- Mission Control may promote where scope/evidence justify it;
- organization-wide `INSTITUTIONALISED` requires explicit Founder approval.

### Claim-level provenance

Each reusable claim must identify exact supporting evidence, including repository/commit/path/blob/locator and relationship such as `SUPPORTS`, `CONTRADICTS`, or `LIMITS`.

A summary citing another summary is not independent corroboration.

Generated learning artifacts cannot become the primary evidence for proving themselves.

### Source eligibility is not authority

An allowlisted path is eligible to inspect, not automatically authoritative.

Initial authoritative source selection should be closure-linked and mission-scoped.

`communication/live/**` is excluded from authoritative harvesting.

### Screening must fail closed

Scanner failure, missing execution, or unknown state is not a clean result.

Ambiguous sensitive content is quarantined without echoing raw values.

### Extraction isolation

The semantic extraction component in later stages must not receive:

- production credentials;
- deployment identity;
- merge/approval authority;
- unrestricted network retrieval;
- arbitrary command-execution authority;
- governance-write authority.

### Background eligibility requires closure envelope

Do not infer authoritative mission closure from arbitrary prose, labels, merge state, README text or a generic `PROCESSED` marker.

Use the approved versioned closure-envelope contract.

### Separate identities

Do not conflate:

1. source snapshot identity;
2. processing-run identity;
3. candidate artifact identity;
4. human review/promotion identity;
5. publication identity.

### Atomic publication

Do not partially publish reports, receipts, registry changes or context packs that imply success from mixed state.

---

## 9. CI and repository execution context inherited from MC23

Current CI architecture is intentionally two-speed.

### Fast Gate

Runs routinely and contains:

- lint;
- typecheck;
- build;
- environment-independent Fast Tests.

Stage 1 OLE unit/security tests should enter the Fast Gate unless they genuinely depend on the full test environment.

### Full Assurance

Reserved for relevant Supabase/integration paths.

Do not add OLE tests to Full Assurance merely because it appears “stronger.”

Stage 1 is repository-native and should not require Supabase secrets.

### Evidence discipline

If a new test discovers a defect, classify the defect before fixing it.

Do not weaken or bypass tests to obtain green CI.

---

## 10. Review chain for Stage 1

Required chain:

`Claude Code implementation`

→ `Mission Control substantive review`

→ `Codex independent verification`

→ `narrow correction if required`

→ `Mission Control acceptance of Stage 1`

→ `Founder/human merge if a protected-main PR is ready`

→ `explicit Mission Control authorization for Stage 2`.

Passing Stage 1 does not automatically activate Stage 2.

No builder may approve its own work.

---

## 11. Exact first Stage 1 instruction for successor Mission Control to publish to Claude Code

After the successor Mission Control:

1. completes its own project hydration/acceptance;
2. verifies current canonical `main` contains PR `#585`;
3. verifies this handover artifact is merged/current;
4. creates a fresh Stage 1 branch from current protected `main`;
5. updates `communication/live/instruction.md` and paired `communication/live/report.md` for Stage 1;

publish the following execution instruction to Claude Code.

---

### SMART BUSINESS MISSION CONTROL

### SB-ORG-LEARNING-1.1 — STAGE 1 CLAUDE CODE IMPLEMENTATION

**Mission:** `SB-ORG-LEARNING-1.1 — Smart Business Organizational Learning Engine — Implementation`

**Stage:** `1 — Contracts, Security Boundaries & Deterministic Harvester Foundation`

**Builder:** Claude Code

**Repository:** `SmartBusinessv1/smart-business`

**Product Mission state:** `SB-P-1.12 NOT ACTIVATED`

#### Objective

Implement only the approved Stage 1 foundation of the Organizational Learning Engine.

This stage must create the deterministic contracts, source-safety boundaries and local harvester foundation needed for later supervised learning, without introducing AI calls, background automation, autonomous repository writes, provider mutations or promotion behavior.

#### Mandatory reading

Read before implementation:

1. `communication/live/instruction.md`
2. `communication/missions/SB-ORG-LEARNING-1.1/README.md`
3. `communication/missions/SB-ORG-LEARNING-1.1/mission-control/01-activation-and-stage1-boundary.md`
4. `communication/missions/SB-ORG-LEARNING-1.1/mission-control/02-successor-mission-control-handover.md`
5. `communication/missions/SB-ORG-LEARNING-1.0/mission-control/03-final-reconciled-build-plan-and-acceptance.md`
6. relevant active governance, especially Source 17 / AI Operations Manual and repository communication protocol;
7. current repository conventions, package scripts, Fast Gate tests, Git utilities and existing Zod usage.

Do not implement from chat memory or from the original pre-reconciliation proposal when it differs from the final controlling build plan.

#### Authorized implementation — Phase A

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

#### Authorized implementation — Phase B deterministic foundation

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

#### Required architecture rules

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

#### Explicitly not authorized in Stage 1

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

#### Testing and CI

- Add Stage 1 tests to the Fast Gate when environment-independent.
- Do not create a Supabase dependency for Stage 1 tests.
- Run the applicable local tests/lint/typecheck/build/Markdown checks.
- Push to the authorized Stage 1 branch and allow real CI to verify the exact head.
- Report test membership/counts/results and exact CI evidence.

#### Required durable output

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

Update only the minimum mission communication records needed for handoff, including your section of `communication/live/report.md` if instructed by the active live template.

#### Stop condition

After implementation, validation, push and durable report:

**STOP FOR MISSION CONTROL.**

Do not self-approve.

Do not merge.

Do not begin the real closed-mission proof.

Do not begin AI extraction.

Do not begin background automation.

Do not activate Stage 2.

Do not activate `SB-P-1.12`.

---

## 12. Expected Stage 1 review questions for successor Mission Control

When Claude Code stops, Mission Control should verify at minimum:

1. Did Stage 1 remain within Phase A + deterministic Phase B only?
2. Were any dependencies or lockfiles changed without explicit authorization?
3. Are candidate and promotion schemas genuinely separate?
4. Can candidate content forge `reviewed_by`, Founder approval or institutionalized status?
5. Does provenance bind claims to exact pinned evidence?
6. Does the harvester read committed objects rather than ambient worktree content?
7. Does source allowlisting mean eligibility only?
8. Is `communication/live/**` excluded?
9. Are unsafe paths, symlinks/submodules and traversal handled fail-closed?
10. Does scanner failure fail closed?
11. Are potential secret values prevented from being echoed?
12. Is source fingerprinting deterministic?
13. Is the same closure/source revision idempotent?
14. Are processing states explicit enough for later recovery?
15. Are Stage 1 tests environment-independent and Fast-Gate appropriate?
16. Is there any hidden AI/provider/network call?
17. Is there any autonomous write/background workflow introduced prematurely?
18. Did the builder avoid processing the real proof target?
19. Are unresolved findings clearly separated from implementation success?
20. Can Codex independently reproduce the important safety assertions?

---

## 13. Known follow-ups that are intentionally deferred beyond Stage 1

Do not treat these as Stage 1 omissions requiring expansion:

- supervised semantic extraction;
- Mission Learning Report generation from real mission evidence;
- human promotion workflow proof;
- mission-start context pack;
- contradiction/freshness/supersession retrieval behavior over real learning;
- dedicated tool/resource/capability registries;
- automatic closure detection;
- GitHub Actions background orchestration;
- missed/reopened/superseded mission reconciliation;
- atomic publication across all mature learning artifacts;
- long-term tool intelligence / external-source refresh.

They belong to later authorized stages.

---

## 14. Communication and closeout discipline

The communication channel is currently in handover state.

The successor must not reuse stale activation language after it opens Stage 1.

When Stage 1 is activated:

- replace live instruction with the Stage 1 Claude Code instruction;
- pair it with a fresh Stage 1 live report template;
- preserve durable Mission Control authorization in the mission folder;
- do not archive/reset live communication until the relevant mission/stage closeout requires it.

At final mission closeout:

- archive final live instruction/report byte-identically;
- create reconciled archive record;
- reset live instruction/report to canonical idle templates;
- verify final protected-main state.

---

## 15. Handover acceptance condition

This handover should be considered accepted only when the successor Mission Control can state, without guessing:

- what OLE is for;
- what the final build plan controls;
- why it precedes `SB-P-1.12`;
- what Stage 1 includes;
- what Stage 1 excludes;
- how candidate learning differs from authority;
- how evidence/provenance must work;
- how screening must fail closed;
- how Stage 1 will be reviewed independently;
- what exact action comes next.

The next exact action is:

> **Open Stage 1 for Claude Code using Section 11 after verifying current canonical `main` and publishing a fresh Stage 1 live communication.**

No broader implementation is authorized by this handover.
