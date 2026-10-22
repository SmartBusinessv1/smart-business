# Founder Brief — SB-P-1.17 Stage 8 (Founder Approval and Blueprint Lock)

**Prepared by:** Claude Code, Documentation Actor, under MC-419A (conversation-source)\
**Baseline:** `main@ad85e151e4857d9879929675da4f25f84b621d7b`, plus this PR's status reconciliation\
**Status:** PREPARED FOR MISSION CONTROL REVIEW — NOT A FOUNDER APPROVAL — NOT LOCKED\
**Implementation Authorization:** WITHHELD — IMPLEMENTATION NOT AUTHORIZED.

## Mission

**SB-P-1.17 — Manager Operations.** The mission makes Smart Business useful for day-to-day shop management without becoming a heavy ERP (Build Plan §10.6).

**Merchant value.** Merchants today track stock risk, supplier relationships, counter activity and closing cash in their heads. This mission gives them:

- explained stock warnings and reorder suggestions that the Owner confirms;
- supplier memory, with supplier prices protected as cost information;
- a bridge beside the POS they already use, with neutral counter review that never accuses staff;
- factual closing cash;
- a workspace that a Manager sees only through explicit Owner grants.

Sources: Blueprint §1, §3, §4, §6.

## Current Status

**STAGE 7 DOCUMENTARY REVIEW ACCEPTED — STAGE 8 FOUNDER APPROVAL PENDING — NOT LOCKED.**

| Stage | Result | Record |
|---|---|---|
| 5 — Gate 10 | PASS; Sections 1–19 approved | MC-393 (PR #1009) |
| 6 — Builder Review | Approved | MC-396 (`claude-code/16`, PR #1010) |
| 7 — Engineering Review | Accepted | MC-418 (conversation-source). Corrections in PRs #1011 to #1014 |
| 8 — Founder approval and lock | **Pending your decision** | This brief |

## What Has Been Completed

### Scope (canonical FCTM, 630 rows, blob `cb79088d`)

| Disposition | Rows | Meaning |
|---|---|---|
| `IN SCOPE` | 404 | Built by this mission |
| `DELEGATED` | 151 | Owned elsewhere and consumed here: SB-P-1.12 52, SB-P-1.15 45, SB-P-1.14 23, SB-P-1.13 21, SB-P-1.18 6, SB-P-1.16 4 |
| `ASSIGNED TO LATER MISSION` | 15 | Still committed (Build Now, not Build Later): SB-P-1.20 10, SB-P-1.18 3, SB-P-1.19 2 |
| `OUT OF BUILD SCOPE` | 31 | Must not appear (Build Plan §16 and GPCV §9 rejections) |
| `NOT APPLICABLE` | 24 | Not an obligation of this mission |
| `UNRESOLVED FOUNDER DECISION` | 5 | Smart Stock price, add-on prices, long-term retention duration, marketplace expansion. **None is on the SB-P-1.17 critical path** (Blueprint §11.5) |
| `ESCALATED` | **0** | — |

**Build Now in this mission:**

- stock intelligence: low and slow stock, expiry and wastage, Owner-confirmed thresholds;
- supplier identity and history, with protected supplier prices;
- reorder suggestions and Owner-created standing rules;
- merchant-sent purchase requests;
- stock documents through UDI;
- a vendor-neutral POS bridge with two interface classes;
- neutral counter review;
- factual closing cash;
- a permission-scoped Manager workspace.

**Rejected:**

- blind supplier procurement;
- custom POS core changes;
- AI accusation or punishment;
- register lockout;
- fixed universal thresholds;
- duplicate stock engines;
- dashboard-only logic.

### Your decisions already in force (by reference; not re-asked)

| Decision | Subject |
|---|---|
| `17:FPDR-1` | Manager delegation. Capabilities 1, 2, 3, 4, 6 and 7 are separately grantable and scoped. Capability 5 (operator-attributed counter detail), standing-rule creation and closing-cash policy are Owner-reserved. Reference Cost and margin are governed by their own permissions |
| `17:FPDR-2` | Standard POS bridge: an API or webhook adapter, or a structured export through UDI. Scenario B is verified on the first evidenced source |
| `17:FPDR-3` | Supplier requests are sent by the merchant; nothing is shown as "sent" unless the merchant records it |
| `17:FPDR-4` | Supplier purchase prices count as cost information (Reference Cost permission required) |
| `17:FPDR-5` | Owner-confirmed, non-destructive historical supplier attribution |
| `17:FPDR-6` | Threshold suggestions stay inactive until the Owner confirms them |
| `17:FPDR-7` | Examples given permissively in the sources remain optional unless independently required |

### Truth Pack and Delta in brief

- **Δ-01 and Δ-02.** None of this mission's objects exist yet, and every upstream kernel (SB-P-1.12 to SB-P-1.16) is specified but unimplemented.
- **Δ-03.** The only product-affecting item (supplier prices against the cost boundary) was resolved by `17:FPDR-4`.
- **Δ-13.** Historical supplier attribution was resolved by `17:FPDR-5`.
- **Δ-06.** The delivery topology and the production state are UNKNOWN.
- **Δ-07.** Schema widening is needed; migration is not authorized.
- **Everything else.** The remaining Delta items have no product effect.

### Blueprint completeness

Sections 1–21 are complete:

- Sections 1–19 were approved at Stage 5.
- Section 20 gives a feasibility and risk finding for each of the 404 `IN SCOPE` rows: 76 design-accepted, 227 dependency-held and 101 source-held. All rows remain `IN SCOPE`.
- Section 20.9 adds atomicity, closing-cash and POS-evidence rules.
- Section 21 holds the questions, risks, holds and trigger screen.

**Nothing is runtime-verified.**

### Founder-reserved runtime scenarios

Neither scenario has been demonstrated or passed.

- **Scenario A (confirmation-gated reorder).** An item below an Owner-confirmed threshold produces an explained suggestion. You confirm it, and the purchase request links to the same Product & Price Master item. It needs the upstream kernels and a test environment.
- **Scenario B (neutral POS review).** An unusual discount or void becomes a neutral review item, never an accusation. It needs the first POS source **evidenced** to supply discount or void data. A synthetic test fixture can never count as Scenario B.

### Specialist review and independent reconciliation

All five specialist reports and MC-410A reviewed `main@739c5fb3`, which was before the corrections in PRs #1013 and #1014. Full originals are published unedited in `specialists/stage7-assurance/`.

| Review | Result as stated by the reviewer | What happened next |
|---|---|---|
| SA-01 Security and permissions | REFINEMENT REQUIRED: F01 closed; F02 (unsupported POS "integration principal") HIGH | F02 wording corrected (PR #1013); kernel-binding **hold open** |
| SA-02 Operator-data privacy | Provisional research; qualified Indian legal validation **OPEN — NOT COMPLETED** | U-11 hold unchanged; operator detail not to be used until validated |
| SA-03 Financial integrity | REFINEMENT REQUIRED — NOT BLOCKED | INV-A9 corrected (PR #1013); INV-A8 reconciled (PR #1014); reversal atomicity, closing completeness and EQ17-13 carried to the EIS |
| SA-04 POS integration | REFINEMENT REQUIRED; 0 of 11 POS evidence items verified; assurance **OPEN** | T8 watch kept; no source selected |
| SA-05 Migration | Architecture feasible with blocking preconditions; migration-plan activation **NOT READY** | Migration not authorized; preconditions carried to the EIS |
| MC-410A Reconciliation | BOUNDED REFINEMENT REQUIRED; not a rejection of the POS bridge; no new Founder decision | Two wording corrections done; one interpretation obtained (MC-411B); three items carried to the EIS |
| MC-411B Finance interpretation | Product mapping governs stock movement, not whether a trusted sale exists financially. No Founder decision needed unless a broad rule is proposed | INV-A8 rewritten; posting timing **held for the EIS** |

**Qualifications are open.** No reviewer's qualification or independence has been certified. SA-04 and MC-410A both record this as OPEN.

### Open dependencies (none closed by Stage 8)

- **Engineering:**
  - EQ17-01 to EQ17-16;
  - atomic Ledger and stock composition (EQ17-13, an EIS hard hold);
  - dual-domain reversal atomicity;
  - affirmative evidence that closing inputs are complete;
  - the POS intake authority binding (agreed with the SB-P-1.12 owner);
  - the posting timing for trusted but unmapped POS sales.
- **Upstream kernels:** `D12`, `D13`, `D14`, `DTX`, `D15`, `D16`, `DSCH` and the others in Blueprint §21.3. All are specified and none is implemented.
- **Legal and privacy:** U-11, staff and operator data, with ten legal uncertainties open (SA-02).
- **POS:** `DPOS` and `DSEC`; no source evidenced; EQ17-05 (the first evidenced source) is for a later Founder selection.
- **Migration:**
  - migration execution is not authorized;
  - `smart-business-test` has not been freshly verified;
  - effective-grant and rollback packages are not yet written.

### Trigger screen (T1–T8)

- **No trigger fired.**
- **T6 WATCH:** the evidence rule for threshold suggestions.
- **T8 WATCH, not established:** the bridge is feasible at design level, but no POS source has been shown to provide the required data.

## What You Need to Do Now

Decide whether to give Stage 8 approval to the complete SB-P-1.17 Blueprint, Sections 1–21. Do this only after Mission Control has reviewed this brief and the PR that carries it has merged.

**There is no other open product decision.**

- The seven `17:FPDR` decisions stand.
- The five unresolved Founder rows are off this mission's critical path.
- Choosing the first POS source (EQ17-05) is not needed for Stage 8.

**What approval freezes (Source 18 Stage 8):**

- **FCTM fields:** every FCTM row's disposition, build commitment, commercial classification and mission assignment. Any later change needs a Founder decision.
- **Your confirmations:** the FCTM and Truth Pack summary above, the Founder-reserved Scenarios A and B, and the production and migration scope flags.
- **Lock and move:** Mission Control may then apply `APPROVED — LOCKED` and move the Blueprint from `active/` to `completed/`.

**What approval does not mean:**

- no runtime evidence, and no merchant availability;
- no legal or privacy compliance (U-11 stays open);
- no POS provider selection or connection;
- no specialist qualification;
- no EIS or implementation authorization.

**Production and migration scope flags you confirm (Blueprint §20.7.9):**

- **NOT AUTHORIZED:**
  - production mutation;
  - migration execution;
  - delivery sync and publication;
  - provider account or configuration action;
  - runtime and production tests;
  - deployment;
  - external POS connection.
- **Builder assignment:** none.

## Where to Perform the Action

Reply to Mission Control in the Mission Control conversation. Do not act in the repository.

## Exact Text to Copy

Use this only after Mission Control review and the merge of the PR carrying this brief. It follows the SB-P-1.14 Stage 8 precedent. If you do not approve, reply with your reason instead.

```text
SB-P-1.17 STAGE 8 — APPROVED
```

## Files Involved

| File | Purpose |
|---|---|
| `docs/phase-1-mission-blueprint/active/SB-P-1.17.md` | The Blueprint you approve |
| `communication/missions/SB-P-1.17/claude-code/01-stage2-populated-fctm.md` | Scope (630 rows) |
| `communication/missions/SB-P-1.17/claude-code/18-stage8-evidence-inventory.md` | Evidence list, with missing items named |
| `communication/missions/SB-P-1.17/claude-code/19-stage8-readiness-record.md` | Stage 8 readiness matrix for Mission Control |
| `communication/missions/SB-P-1.17/specialists/02-stage7-specialist-assurance-provenance-record.md` | Specialist provenance and finding dispositions |
| `communication/missions/SB-P-1.17/specialists/stage7-assurance/` | Unedited specialist and reconciliation originals |

## PowerShell Commands

None are required for the decision. These optional commands confirm your local `main` after the merge:

```powershell
git switch main
git pull --ff-only origin main
git log -1 --oneline
```

## What Success Looks Like

- Mission Control receives your decision.
- Mission Control then creates the Stage 8 approval and lock record, applies `APPROVED — LOCKED` and moves the Blueprint to `completed/`.
- The EIS (Stage 9) needs its own later authorization.

## What to Send Back to Mission Control

Send your decision text, and any condition or objection you want recorded.

## Do Not Do

- Do not approve before Mission Control review and the merge of this PR.
- Do not treat approval as permission to build, migrate, deploy, connect a POS or use staff operator data.
- Do not edit the Blueprint or the FCTM yourself.
- Do not select a POS provider as part of this approval.
