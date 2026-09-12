# SMART BUSINESS MISSION CONTROL

# Phase 1 Institutional Learning Capture Protocol

**Mission:** `SB-DOC-PHASE1-HISTORY-1.0 — Phase 1 Historical Continuity Reconstruction`  
**Artifact Type:** Final Pre-Closeout Institutional Memory Capture  
**Authority:** Founder / Smart Business Mission Control  
**Status:** `ACTIVE — REQUIRED BEFORE HISTORICAL MISSION CLOSEOUT`  
**Date:** `2026-09-12`

---

## 1. Purpose

The historical reconstruction mission was created to close the continuity gap between the beginning of Smart Business and the current production journey, recover the detailed product/feature truth, and prevent future humans or AIs from having to rediscover the same history through old chats.

Before this mission can close, Smart Business must also preserve the **operational intelligence learned while building it**:

- lessons learned;
- capabilities acquired;
- tools actually used;
- tools worth adding later;
- project improvements;
- failures and corrections;
- platform/environment transitions;
- practices that must not be repeated;
- room-specific judgement that would otherwise disappear when chats are archived or replaced.

This is an **institutional-memory capture**, not a product redesign mission and not implementation authorization.

---

## 2. Core Rule

Every participating room/tool must review its own complete Smart Business history from the beginning of its involvement through the current point and produce a concise, evidence-aware retrospective.

Do not merely summarize recent messages.

Do not invent achievements that were discussed but never implemented.

Do not present historical practice as current best practice when later work superseded it.

When relevant, distinguish explicitly:

- `CURRENT — STILL VALID`
- `HISTORICAL — SUPERSEDED`
- `MISTAKE / FAILURE MODE`
- `CORRECTION / LESSON`
- `CAPABILITY PROVEN`
- `RECOMMENDATION — NOT YET ADOPTED`
- `UNRESOLVED / NEEDS FOUNDER OR MISSION CONTROL DECISION`

Current Founder direction, current canonical Product Truth, merged repository evidence, and verified runtime truth outrank older chat assumptions.

---

## 3. Mandatory Five-Section Retrospective

Every contributor must answer these five sections.

### 1. Lessons Learned

Record the most important technical, product, operational, security, governance, UX, tooling, integration, evidence, and workflow lessons from this room.

Include:

- mistakes fixed;
- approaches that failed;
- assumptions later proven wrong;
- edge cases discovered;
- anti-patterns to avoid;
- practices that improved reliability or speed;
- what future rooms must not repeat.

### 2. Capabilities Acquired

Record what Smart Business or Team LIPS can **actually do now** because of work completed or proven in this room.

Separate:

- production capability;
- canonical repository capability;
- non-production/prototype capability;
- documentation/governance capability;
- tooling/process capability.

Do not count plans, mockups, placeholders, or future missions as acquired capability.

### 3. Tools We Have

Record the frameworks, platforms, APIs, repositories, services, libraries, workflows, scripts, environments, and operational tools actually used by this room.

For each important tool, state its role and any critical boundary or limitation future operators must know.

### 4. Suggested Tools to Have

Recommend only tools that solve a demonstrated problem or remove repeated friction.

For each suggestion, state:

- problem solved;
- why the current stack is insufficient;
- whether it is `BUILD/ADOPT NOW`, `BUILD/ADOPT LATER`, `OPTIONAL`, or `REJECT FOR NOW`;
- integration or governance risk.

A recommendation is not an approved architecture decision.

### 5. Suggestions to Improve This Project

Record immediate improvements to architecture, workflow, documentation, testing, product execution, security, deployment, observability, support, governance, or team operation.

Prioritize changes that reduce:

- drift;
- duplicated logic;
- manual checking;
- unsafe privilege;
- environment confusion;
- repository/runtime divergence;
- AI hallucination or authority confusion;
- Founder operational load.

---

## 4. Additional Mandatory Sections

After the five core sections, every contributor must add:

### 6. What Future Rooms Must Know Before Touching This Area

A short handover checklist of facts that must be understood before modifying the room's domain.

### 7. Do-Not-Repeat Register

A punchy list of failures, misleading shortcuts, stale assumptions, unsafe practices, or confusing patterns that future humans/AIs must not repeat.

### 8. Current Truth vs Historical Truth

List any material historical statement from this room that is no longer current and give the corrected current state.

### 9. Evidence Pointers

Point to relevant merged PRs, repository paths, runtime evidence, project IDs, domains, migrations, reports, or durable governance artifacts.

### 10. Open Questions / Residual Risks

Only genuine unresolved items. Do not convert already-settled decisions back into questions.

---

## 5. Repository Output Standard

Each contributor must write its durable retrospective to:

`communication/missions/SB-DOC-PHASE1-HISTORY-1.0/room-retrospectives/<contributor-slug>/01_Retrospective.md`

and then create:

`communication/missions/SB-DOC-PHASE1-HISTORY-1.0/room-retrospectives/<contributor-slug>/02_Completion_Report.md`

The Completion Report must state:

1. retrospective file created;
2. history/evidence reviewed;
3. major corrections or superseded assumptions surfaced;
4. unresolved risks/questions;
5. branch;
6. commit;
7. PR;
8. CI result;
9. confirmation that no product/runtime implementation was performed unless separately authorized.

Use protected-main workflow:

**pull latest main → branch → write → self-review → commit → push → PR → CI → stop**

Do not self-merge unless explicitly authorized.

One contributor should normally use one PR so evidence remains independently attributable and merge conflicts remain manageable.

If a room has no repository-write capability, it must return complete ready-to-commit Markdown to the Founder and must not falsely claim repository completion.

---

## 6. Contributor Registry and Room-Specific Questions

The five-section core plus Sections 6–10 above are mandatory for everyone. The following additional questions are also mandatory for the named contributor.

| Contributor | Slug | Mandatory room-specific focus |
|---|---|---|
| Founder Room | `founder-room` | Evolution of Founder intent; decisions that were misunderstood/compressed; how future AI should clarify Founder intent without exhausting the Founder; decisions that must remain explicit. |
| Claude Engineering room | `claude-engineering` | Engineering implementation patterns; schema/RPC/idempotency/audit lessons; testing gaps; code-review lessons; what was actually built vs planned; repository-first engineering practices. |
| Lovable Builder room | `lovable-builder` | What Lovable successfully built; what it should/should not own; publish/runtime verification workflow; current active Lovable project; old/new project confusion; how to avoid treating preview as production truth. |
| Lovable Lab room | `lovable-lab` | Experimental/build workflow; publish/security-review lessons; old project unpublish/retirement evidence; why the implementation moved to the current Smart Business Lovable project; what must never be copied wholesale from stale Lovable snapshots. |
| Brand & Growth room | `brand-growth` | Brand/Product Truth consistency; logo/UI decisions; domain/route consistency; claims marketing must not make before implementation; Kerala merchant positioning lessons. |
| Admin Lab | `admin-lab` | Repository/document governance; README/source hygiene; publication/Drive/GitHub lessons; naming/versioning; how to prevent stale documentation becoming authority. |
| Research & Intelligence | `research-intelligence` | Research provenance; historical extraction methodology; evidence classification; Ground Zero/NotebookLM lessons; how to prevent historical evidence from overriding current Product Truth. |
| Infrastructure Operations | `infrastructure-operations` | Production cutover; domains/Cloudflare/AWS/Lambda/runtime; canonical repo vs delivery repo; environment activation; deployment evidence; how repository/runtime divergence happened and how to prevent recurrence. |
| Finance & Payments | `finance-payments` | Pricing/payment/subscription decisions; payment-gateway and reconciliation boundaries; unresolved commercial decisions; what is product truth vs future commercial choice. |
| Customer Success | `customer-success` | Support, FAQ-first design, escalation, onboarding, merchant-language lessons, support privacy, first-value and customer dignity. |
| Founder Accountability | `founder-accountability` | Mission sequencing/accountability; scope control; completion evidence; phase-gate discipline; where Founder decisions were delayed or overloaded; how to reduce Founder operational burden. |
| Security & Permissions Architecture | `security-permissions` | IAM/RLS/grants/service-role lessons; actor/self-approval boundaries; evidence-access failures; runtime vs documentation security; residual privilege risks; correction/verification workflow. |
| Supabase Backend Architecture | `supabase-backend` | Exact current Supabase topology; production project identity; historical/current test/staging/dev environment identity; migrations/RLS/RPC lessons; project/branch naming; how future rooms must distinguish production from test. |
| Claude Code | `claude-code` | Independent engineering-review value; repo-grounded counterweight role; strengths/limits; EIS/build-plan lessons; CI/test/security findings; when Claude should challenge Mission Control and when it must not invent authority. |
| Codex | `codex` | Coding/inspection/PR workflow; strengths/limits; repository evidence practices; comparison/complementarity with Claude Code; safe uses for automated engineering agents; failure modes to avoid. |

Mission Control will prepare its own synthesis **after** the above evidence is merged rather than self-reporting first and biasing the room responses.

---

## 7. Special Mandatory Platform-Continuity Questions

### 7.1 Lovable continuity

The Lovable Builder and Lovable Lab reports must jointly settle, with evidence where possible:

- legacy Lovable project identity;
- current active Lovable project identity;
- what each project contained;
- why the legacy project was unpublished/retired or stopped being the active implementation path;
- what was preserved from the old project;
- what was rejected or considered stale;
- how the current Smart Business implementation differs;
- relationship among Lovable preview, published production, canonical repository, delivery repository, and Supabase;
- what future rooms must check before assuming a Lovable project is authoritative.

Known identifiers to reconcile rather than blindly repeat:

- legacy Lovable project: `64c2b9b1-2461-4045-9acc-19e2658b8ca2`;
- current active Lovable project: `f3e992ec-06df-4d49-b157-b92ec064c078`.

The reports must state whether these identifiers remain current at review time.

### 7.2 Repository/deployment continuity

Infrastructure Operations, Claude Engineering, Claude Code and Codex must reconcile:

- canonical repository: `SmartBusinessv1/smart-business`;
- production/delivery repository history, including `SmartBusinessv1/starter-supab-shell` where still relevant;
- how divergence occurred;
- how the production sync/cutover corrected it;
- what future missions must do so merged canonical code cannot silently fail to reach production;
- what evidence proves deployed runtime state rather than merely repository state.

### 7.3 Supabase environment continuity

Supabase Backend Architecture must explicitly identify:

- current production Supabase project name/ref/region/status;
- whether a separate current test/staging Supabase project exists;
- whether a Supabase development branch exists;
- whether historical references to a test project referred to a separate project, local/test database, temporary environment, different account/organization, or retired project;
- migration policy between environments;
- how future rooms should verify environment identity before applying migrations or querying data.

Mission Control live connector observation on `2026-09-12` to reconcile:

- visible project: `smart-business`;
- project ref: `gysgzasfcjvtrgaigfyn`;
- region: `ap-south-1`;
- status: `ACTIVE_HEALTHY`;
- visible Supabase development branches: none.

This observation does **not** by itself prove that no historical or separately-owned test project ever existed. The Supabase room must reconcile the history instead of guessing.

---

## 8. Required Mission Control Final Synthesis

After all relevant contributor PRs are merged and independently reviewed, Mission Control must create two final artifacts.

### 8.1 Detailed specialist-room recap

Path:

`communication/missions/SB-DOC-PHASE1-HISTORY-1.0/synthesis/07_Specialist_Rooms_Final_Recap_and_Operational_Lessons.md`

It must synthesize, reconcile, deduplicate and resolve contradictions across the room reports.

It must explicitly include:

- old vs current Lovable project story;
- why the old path was retired/unpublished;
- canonical vs delivery repository story;
- production cutover/sync lessons;
- Supabase production/test/staging truth;
- major security/IAM/RLS lessons;
- Claude Code/Codex role boundaries;
- feature recovery lessons;
- governance/authority lessons;
- evidence/verification lessons;
- key capabilities acquired across Phase 1;
- important tools currently available;
- recommended tools not yet adopted;
- top do-not-repeat mistakes;
- unresolved risks that must carry into future Product Missions.

### 8.2 Canonical future-human/future-AI continuity guide

Path:

`docs/phase-1-mission-blueprint/00_Phase_1_Institutional_Memory_Lessons_Capabilities_and_Operational_Guardrails.md`

This is the durable current/future operating handoff.

It should be shorter than the detailed specialist recap but strong enough that a new human, ChatGPT room, Claude Code session or Codex session can understand:

- where Smart Business started;
- what exists now;
- what changed and why;
- what tools/platforms are authoritative;
- what environments/projects/repos are current;
- what mistakes already happened;
- what capabilities Team LIPS has learned;
- what practices must be repeated;
- what practices must never be repeated;
- where to look for deeper evidence;
- how the next Product Missions must operate.

This document must cross-reference:

`docs/phase-1-mission-blueprint/smart-business-features/00_Founder_Approved_MC_and_CC_Verified_Build_Plan.md`

and the 25 mature Smart Business contracts.

---

## 9. Closeout Gate

`SB-DOC-PHASE1-HISTORY-1.0` must **not close** until:

1. the Founder-approved/MC+Claude verified build plan is durable on `main`;
2. required room/tool retrospectives are merged or explicitly dispositioned as unavailable/non-applicable;
3. Lovable old/new-project continuity is reconciled;
4. canonical/delivery-repository continuity is reconciled;
5. Supabase production/test/staging topology is reconciled without guessing;
6. the detailed specialist-room recap is merged;
7. the canonical Phase 1 institutional-memory/guardrails guide is merged;
8. Mission Control verifies no material contradiction remains between current Product Truth, current runtime/environment truth, and the final continuity documents;
9. only then may temporary extraction/live communication be archived and the historical mission marked `CLOSED — ACCEPTED`.

---

## 10. Standard Prompt for Each Room

Use the following as the common opening, followed by the contributor-specific questions in Section 6:

> Review the entire Smart Business conversation history in this specific room from the beginning of the project through the current point. Review relevant current repository evidence where available. Produce an evidence-aware institutional retrospective for `SB-DOC-PHASE1-HISTORY-1.0` using the exact mandatory sections in the Mission Control Phase 1 Institutional Learning Capture Protocol. Distinguish current truth from historical/superseded practice. Record what was actually built/proven separately from what was merely planned. Identify mistakes, corrections, acquired capabilities, tools, recommended tools, improvements, do-not-repeat failures, current-vs-historical truth changes, evidence pointers and residual risks. Add the room-specific mandatory focus assigned by Mission Control. Write the durable retrospective and completion report to the assigned repository paths, follow protected-main branch → commit → PR → CI workflow, do not self-merge, do not begin a new Product Mission, and stop after reporting the PR to Mission Control.

---

## Final Principle

> **Features tell us what to build. Build plans tell us how to sequence it. Institutional memory tells us how to avoid becoming less intelligent every time a room, tool, project or operator changes.**
