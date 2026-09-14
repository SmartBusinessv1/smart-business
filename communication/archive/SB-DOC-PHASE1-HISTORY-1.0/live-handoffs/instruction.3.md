# SMART BUSINESS MISSION CONTROL

# instruction.3.md — Claude Code UX Anti-Drift Review

**Mission:** `SB-DOC-PHASE1-HISTORY-1.0 — Phase 1 Historical Continuity Reconstruction`  
**Instruction type:** Narrow pre-closeout engineering/product-experience review  
**From:** Mission Control  
**To:** Claude Code  
**Status:** ACTIVE  
**Implementation authority:** NONE

---

## 1. Context

The Founder has approved and merged the Mission Control UX anti-drift layer added to:

`communication/missions/SB-DOC-PHASE1-HISTORY-1.0/build-proposal/01_Mission_Control_Founder_Accepted_Build_Proposal.md`

The approved section is:

`8A — Founder Runtime User Experience Anchors — Anti-Drift Layer`

It defines the intended human/user experience after each future Product Mission:

- `SB-P-1.12` through `SB-P-1.20`.

These anchors are intended to prevent future implementation from becoming technically complete while drifting away from the recovered Founder intent and mature Smart Business feature contracts.

This instruction does **not** authorize implementation and does **not** start any future `SB-P-*` mission.

---

## 2. Required reading

Before responding, read the latest `main` and at minimum:

1. `communication/missions/SB-DOC-PHASE1-HISTORY-1.0/build-proposal/01_Mission_Control_Founder_Accepted_Build_Proposal.md`
2. `communication/missions/SB-DOC-PHASE1-HISTORY-1.0/build-proposal/02_Claude_Code_Independent_Build_Plan.md`
3. `communication/live/instruction.1.md`
4. `communication/live/report.1.md`
5. `communication/live/instruction.2.md`
6. `communication/live/report.2.md`
7. `communication/missions/SB-DOC-PHASE1-HISTORY-1.0/founder-decisions/01_Founder_Product_Decision_Record_Product_and_Price_Master.md`
8. all 25 mature contracts under `docs/phase-1-mission-blueprint/smart-business-features/`
9. the Final Founder-Origin Feature Reconciliation Register and relevant historical synthesis/reconciliation evidence where needed.

Do not treat repository implementation as authority over current Product Truth.

---

## 3. Review objective

Independently analyze the approved Section 8A user-experience anchors against:

- current Product Truth;
- the 25 mature feature/foundation contracts;
- historical Founder-origin reconciliation;
- current repository architecture and implementation reality;
- the already-reconciled nine-mission sequence;
- Source 18 mission lifecycle constraints.

The purpose is to determine whether each proposed Founder-verifiable UX outcome is:

- complete enough to prevent drift;
- correctly assigned to the mission where it should become verifiable;
- technically and dependency-wise realistic at that point in the sequence;
- consistent with role/permission/security boundaries;
- measurable in Founder Runtime Verification;
- free from accidental implementation prescription or premature claims of later capability.

Claude must challenge Mission Control where evidence warrants it.

---

## 4. Required classification

For every mission from `SB-P-1.12` through `SB-P-1.20`, classify the Mission Control UX anchor set as one of:

- `CONFIRM`;
- `CONFIRM WITH CHANGE`;
- `REJECT / REPLACE`;
- `FOUNDER DECISION REQUIRED`;
- `INSUFFICIENT EVIDENCE`.

For any change recommendation, state exactly:

- the affected mission;
- the affected UX anchor/statement;
- why it should change;
- the replacement wording or additional anchor;
- which mature contract/source/repository evidence supports the recommendation.

Do not rewrite for style alone.

---

## 5. Experience sequencing checks

Explicitly verify that:

1. Each mission has a coherent human outcome by mission completion.
2. An earlier mission does not claim a later mission's capability complete.
3. Cumulative experience remains internally consistent across 1.12 → 1.20.
4. The same capability is not described differently across structured UI, native Conversation Workspace and later WhatsApp unless channel differences genuinely require it.
5. Owner, Manager, Employee, Customer, Supplier and Delivery Staff experiences respect the same permission model.
6. Product & Price Master remains a shared foundation rather than a competing Catalog product identity.
7. `SB-P-1.13` remains genuinely useful without WhatsApp.
8. `SB-P-1.20` remains a thin channel integration rather than introducing a second intelligence/business-logic stack.
9. Support Automation is correctly represented as foundation advancement in 1.13 and completion in 1.19.
10. The three 1.18 add-on workstreams remain individually verifiable even under one Product Mission identity.
11. unresolved commercial/governance decisions are not accidentally hard-coded as UX truth.

---

## 6. Founder Runtime Verification design

For each mission, add to the engineering build plan a concise **Founder Runtime Experience Verification** subsection that translates the approved/reconciled UX anchors into observable runtime scenarios.

Each scenario should state, at minimum:

- actor/role;
- starting condition;
- user action;
- expected visible experience;
- expected protected/denied behavior where relevant;
- evidence to capture;
- dependency or feature-flag condition if applicable.

Do not create a giant test script at this stage. Preserve a compact scenario set sufficient to protect the intended experience. Detailed execution steps belong in each future Product Mission Blueprint/EIS and Stage 17 verification package.

---

## 7. Permanent completion-report anti-drift rule

Independently assess and, if sound, incorporate this permanent rule into the build plan:

Every future `SB-P-*` Completion Report for `SB-P-1.12` through `SB-P-1.20` must include an **Experience Verification Matrix** for the applicable approved UX anchors.

The matrix should include:

- UX anchor / human outcome;
- applicable actor/role;
- Founder Runtime Verification result: `PASS`, `FAIL`, `NOT APPLICABLE`, or justified `DEFERRED`;
- evidence reference;
- unresolved dependency or corrective action when not PASS.

A mission must not be accepted merely because code, CI, database changes or screens exist if its applicable human-experience anchors fail.

Likewise, a mission must not be incorrectly failed for an anchor explicitly assigned to a later mission.

---

## 8. Required durable output

Update **in place**:

`communication/missions/SB-DOC-PHASE1-HISTORY-1.0/build-proposal/02_Claude_Code_Independent_Build_Plan.md`

Add a clearly identified UX anti-drift reconciliation section that records:

- the per-mission classifications;
- accepted corrections/additions if any;
- Founder Runtime Experience Verification scenario sets;
- the Completion Report Experience Verification Matrix rule;
- any remaining genuine Founder decision required before historical closeout or before a specific future Product Mission.

Do not delete or obscure the existing engineering build-plan analysis.

---

## 9. Return communication

After completing the durable build-plan update, create:

`communication/live/report.3.md`

Keep `report.3.md` concise. It must state:

- completion confirmation;
- overall verdict on the Founder-approved UX anti-drift layer;
- which missions, if any, required UX changes;
- whether any genuine Founder decision remains before historical closeout;
- whether the Experience Verification Matrix rule is technically/governance sound;
- branch, commit and PR evidence;
- confirmation that no implementation was performed and no `SB-P-*` Product Mission was started.

---

## 10. Repository workflow

Use normal protected-main workflow:

**branch → edit documentation only → commit → push → PR → CI**

Do not self-merge.

---

## 11. Prohibitions

Do **not**:

- implement application code;
- change database/schema/RLS;
- change Lovable/Supabase/Cloudflare/Meta/OpenAI runtime configuration;
- create or start `SB-P-1.12` or any later Product Mission;
- close or archive `SB-DOC-PHASE1-HISTORY-1.0`;
- remove historical evidence;
- invent new Product Mission IDs;
- silently redefine Product Truth;
- treat the UX anchors as fixed component/mockup prescriptions.

---

## 12. Stop condition

When `02_Claude_Code_Independent_Build_Plan.md` has been updated, `communication/live/report.3.md` has been created, PR/CI evidence is available, and no implementation has been performed:

**STOP and return control to Mission Control.**
