# SMART BUSINESS MISSION CONTROL

# Instruction

**Mission ID:** `SB-GOV-IV-1.0`

**Mission Name:** Codex / Independent Verification Efficiency Protocol

**From:** Mission Control

**To:** Codex

**Status:** `ACTIVE — PROTOCOL DESIGN / RECONCILIATION`

**Date:** 2026-09-18

---

# Mission Objective

Draft the Smart Business Codex / Independent Verification Efficiency Protocol before `SB-P-1.12` begins.

The purpose is to preserve independent assurance while reducing unnecessary Codex execution, repeated deterministic checking, and verification recursion.

This is a protocol-design and reconciliation mission only.

No governing source amendment is authorized yet.

---

# Context

OLE Stage 5 demonstrated that Codex provides high-value independent adversarial verification, but repeated near-full re-verification after narrow corrections can consume disproportionate verifier capacity.

The Founder has approved a new operating direction:

- Codex should verify risk, not re-run the factory;
- deterministic assurance should remain with builders and GitHub CI;
- builders should provide Verification Packets;
- independent execution should focus on high-information risk boundaries;
- correction re-verification should be finding-scoped by default;
- verifier independence should not become a single-provider bottleneck where governance allows flexibility.

Read:

1. `communication/missions/SB-GOV-IV-1.0/README.md`
2. `communication/missions/SB-GOV-IV-1.0/mission-control/01-activation-and-founder-design-basis.md`
3. active Product Mission lifecycle / delivery framework;
4. active AI Communication and Handover Protocol;
5. active engineering / CI / verification governance;
6. relevant OLE Stage 5–6 verification records and accepted learning where useful.

---

# Execute According To

Protect:

- Lighthouse Constitution;
- Smart Business Product Truth;
- current Source 18 Product Mission lifecycle;
- actor separation / no self-approval;
- Founder authority;
- Mission Control acceptance authority;
- repository-first evidence discipline;
- current CI / branch-protection controls.

Where current governance explicitly names a verifier actor, do not silently reinterpret it.

---

# Scope

You are authorized to:

- inspect current governing documents and engineering workflows;
- draft a new independent-verification efficiency protocol;
- map current conflicts/overlaps;
- propose exact reconciliation/amendment text;
- propose activation sequence and examples;
- identify where Codex is Required / Spot Check / Not Required;
- define Verification Packet and evidence classes A/B/C;
- define finding-scoped re-verification and escalation rules.

You are not authorized to:

- modify governance sources;
- modify Product Truth;
- activate `SB-P-1.12`;
- alter CI workflows;
- alter application code;
- declare your own protocol accepted;
- self-approve or self-merge.

---

# Required Work

## 1. Current-state reconciliation

Identify all active files/frameworks that currently define or constrain:

- independent verification;
- Codex;
- Claude Code verifier roles;
- Product Mission Stage 19;
- builder verification;
- CI evidence;
- runtime verification;
- Mission Control acceptance.

Quote exact current language where necessary and classify each as:

- compatible;
- needs clarification;
- conflicts;
- governance amendment required.

## 2. Draft protocol

Create:

`communication/missions/SB-GOV-IV-1.0/codex/01-independent-verification-efficiency-protocol-draft.md`

The draft must define:

- purpose;
- authority model;
- verification pyramid;
- Codex Verification Budget;
- builder Verification Packet;
- evidence classes A/B/C;
- verification-ready entry gate;
- targeted independent verification;
- finding-scoped re-verification;
- full re-verification escalation triggers;
- documentation-only/reporting-only rule;
- provider-unavailability handling;
- no-self-verification rule;
- PASS / FAIL / FOLLOW-UP / N/A statuses;
- runtime-verification relationship;
- Mission Control acceptance boundary;
- examples.

## 3. Reconciliation report

Create:

`communication/missions/SB-GOV-IV-1.0/codex/02-current-governance-reconciliation-report.md`

Separate:

- protocol rules that can operate immediately without governance change;
- rules that require governance amendment;
- exact Source 18 / other-source text that would need amendment;
- exact proposed replacement text.

Do not edit those governing sources in this phase.

## 4. Activation plan

Create:

`communication/missions/SB-GOV-IV-1.0/codex/03-activation-plan.md`

The plan must show the minimum path from:

`draft → Mission Control review → Founder decision → approved amendment(s) if any → protocol activation → clean SB-P-1.12 start`

Avoid unnecessary ceremony.

## 5. Report

Update:

`communication/live/report.md`

with:

- branch / head;
- files created;
- reconciliation findings;
- governance changes required vs not required;
- unresolved decisions;
- validation performed;
- PR state if applicable.

---

# Constraints

Do not modify:

- Source 18;
- governance sources;
- Product Truth;
- CI workflows;
- application code;
- branch protection;
- provider credentials.

Do not silently replace a named verifier in current governance.

Do not claim that provider-agnostic verification is active until approved.

---

# Deliverables

1. protocol draft;
2. governance reconciliation report;
3. activation plan;
4. updated live report.

---

# Completion Status

Conclude the report exactly:

`INDEPENDENT VERIFICATION PROTOCOL DRAFT REPORTED — MISSION CONTROL REVIEW REQUIRED`
