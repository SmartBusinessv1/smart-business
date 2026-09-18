# SMART BUSINESS MISSION CONTROL

# SB-GOV-IV-1.0 — Activation and Founder Design Basis

**Mission ID:** `SB-GOV-IV-1.0`

**Mission name:** Codex / Independent Verification Efficiency Protocol

**Date:** 2026-09-18

**Authority:** Founder direction executed by Smart Business Mission Control

**Repository:** `SmartBusinessv1/smart-business`

**Base main SHA:** `427ea465e29c017e0f9bddb055f4b3b92c561fef`

**Product Mission state:** `SB-P-1.12 — NOT ACTIVATED`

---

## 1. Founder objective

Before starting `SB-P-1.12`, create a clean independent-verification operating protocol so future missions begin with an efficient, explicit, repeatable verifier model rather than rediscovering the same rules during each mission.

The trigger for this mission is the observed cost of repeatedly asking Codex to reproduce deterministic work already covered by builders and CI.

---

## 2. Required operating principles

The protocol shall encode the following design principles:

1. **Codex is a scarce verifier, not a builder.**
2. **Deterministic assurance belongs primarily to GitHub CI.**
3. **Builders submit verification-ready evidence packets before independent verification starts.**
4. **Codex independently exercises meaningful risk boundaries rather than re-running the entire factory.**
5. **Authoritative CI may satisfy deterministic evidence where independent re-execution adds little value.**
6. **Correction scope determines re-verification scope by default.**
7. **Full re-verification is reserved for broad/shared changes or explicit Mission Control escalation.**
8. **Documentation-only or reporting-only commits do not reopen substantive verification by themselves.**
9. **Independent verification is fundamentally an actor-separation property; provider substitution is allowed only where governing frameworks permit it and never by silent ad hoc replacement.**
10. **Product/mission acceptance remains Mission Control / human authority.**

---

## 3. Verification Pyramid

The protocol shall define the default division of responsibility:

| Work | Primary actor | Independent verifier involvement |
|---|---|---|
| Requirements / blueprint / EIS | Product room + Mission Control + engineering | Normally none |
| Implementation | Claude Code / Lovable / specialist | None |
| Unit / regression tests | Builder + automated tests | None |
| Typecheck / lint / build | GitHub CI | None |
| Full deterministic assurance | GitHub Actions | None |
| Diff / scope review | Mission Control | Usually none |
| Independent adversarial verification | Independent verifier, Codex preferred where appropriate | Targeted |
| Security / permission-sensitive proof | Security specialist + independent verifier where necessary | Selective |
| Final independent gate | Independent verifier where mission risk warrants | Targeted / required by mission |
| Routine documentation verification | CI / Mission Control | None |

---

## 4. Codex Verification Budget

Every mission shall classify independent-verifier involvement before invocation:

### Codex Required

Use when the mission affects:

- authority boundaries;
- financial integrity;
- permissions / isolation;
- security-sensitive paths;
- irreversible behavior;
- complex failure modes;
- final independent verification where governing mission risk warrants it.

### Codex Spot Check

Use for ordinary product implementation with strong deterministic coverage.

Expected work:

- inspect the builder Verification Packet;
- inspect diff/scope;
- independently execute selected high-information tests;
- inspect authoritative CI;
- return bounded PASS / FAIL / FOLLOW-UP / N/A.

### Codex Not Required

Default for:

- documentation-only work;
- deterministic formatting;
- routine copy;
- straightforward UI polish;
- evidence recording;
- metadata-only updates;
- CI/status publication that does not change substantive implementation.

Any governing framework that explicitly requires an independent-verifier gate remains controlling until separately amended.

---

## 5. Builder Verification Packet

Before independent verification starts, the builder shall provide at minimum:

- implementation checkpoint SHA;
- exact changed files;
- authorized scope;
- risk boundaries affected;
- tests added;
- tests executed;
- regression tests executed;
- known platform differences;
- GitHub CI run IDs;
- Full Assurance result where applicable;
- dependency diff;
- workflow diff;
- package-lock diff;
- expected independent-verifier attack surfaces.

The independent verifier should begin from this packet, not spend scarce execution rediscovering routine repository state.

---

## 6. Evidence classes

The protocol shall distinguish:

### Class A — independently exercise

Use where independent execution materially increases confidence, such as:

- permission bypass;
- ambiguous filesystem behavior;
- duplicate-processing / race semantics;
- authority escalation;
- security-sensitive boundary conditions;
- irreversible financial behavior.

### Class B — inspect authoritative automated evidence

Examples:

- full suite passed;
- typecheck succeeded;
- build succeeded;
- lint succeeded;
- Markdown gate passed;
- Full Assurance result.

### Class C — static inspection

Examples:

- no dependency addition;
- no workflow changes;
- no provider integration;
- no unrelated scope expansion.

The verifier should not use Class A execution where Class B or C is sufficient.

---

## 7. Correction and re-verification rule

Default rule:

> **Correction scope determines re-verification scope.**

After an independent finding:

`finding → narrow correction → full deterministic CI → Mission Control correction review → finding-specific independent re-verification → PASS/FAIL`

Do not restart the entire original verification unless:

- the correction touches shared infrastructure;
- the correction materially changes another contract;
- new evidence shows the original assurance boundary was incomplete;
- Mission Control explicitly broadens the verification scope.

---

## 8. Verification-ready entry gate

Do not invoke the independent verifier until:

- builder implementation complete;
- focused tests complete;
- Fast suite green;
- typecheck green;
- lint green;
- build green;
- Full Assurance green where applicable;
- scope diff reviewed;
- CI stable;
- Verification Packet prepared.

Exceptions require Mission Control justification.

---

## 9. Provider / actor boundary

Codex is the preferred independent verifier for the highest-risk cases under this protocol.

However, independence is an actor-separation property, not automatically a provider-brand property.

If an active governing source explicitly names Codex, Claude Code, or another actor for a specific gate, this protocol must not silently override it.

Any move to a generic `Independent Verification Actor` in a governing source requires:

- exact source reconciliation;
- clear rationale;
- no self-verification;
- explicit Mission Control review;
- explicit Founder approval where governance is affected.

---

## 10. Required deliverables from Codex

Codex shall return:

1. draft protocol document;
2. current-state reconciliation map;
3. exact files/frameworks that conflict or need amendment;
4. proposed amendment text separated from the protocol;
5. risk analysis;
6. migration / activation plan;
7. examples for:
   - ordinary product mission;
   - security-sensitive mission;
   - documentation-only follow-up;
   - finding-specific correction cycle;
8. recommended status model;
9. stop condition before governance activation.

No governing source shall be modified during this drafting phase.

---

## 11. Current disposition

`SB-GOV-IV-1.0 — ACTIVE — PROTOCOL DESIGN / RECONCILIATION`

`SB-P-1.12 — NOT ACTIVATED`

`NO GOVERNANCE AMENDMENT AUTHORIZED YET`

