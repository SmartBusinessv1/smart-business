# SB-P-1.16 — Stage 8 Founder Approval and Blueprint Lock Record

**Mission:** SB-P-1.16 — Financial Integrity & Credit
**Authority:** Source 18 v1.2, Stage 8; Founder F-1–F-7 decision; MC-249, MC-250, MC-252, MC-255
**Publication target:** `communication/missions/SB-P-1.16/mission-control/10-stage8-founder-approval-and-lock-record.md`
**Prepared:** 2026-10-19
**Record status:** `FOUNDER APPROVED — CANONICAL PUBLICATION PENDING; BLUEPRINT NOT YET LOCKED`

## 1. Exact canonical lock candidate

- Repository: `SmartBusinessv1/smart-business` (private)
- Founder-approved base: `main@56ffed7f33696275a940d087b557fb8f88d3b66e`, after PR #977
- Complete Blueprint Sections 1–21: `docs/phase-1-mission-blueprint/active/SB-P-1.16.md`
- **Blueprint content-lock blob:** `305571a66af4a4683bd967466fc83645de5dfbd3`
- Canonical FCTM: `communication/missions/SB-P-1.16/claude-code/02-stage2-populated-fctm.md`
- **FCTM content-lock blob:** `94dd52202ad040f64394f07f95389d02ffcc5dd0`
- Incorporated Stage 7 source: `communication/missions/SB-P-1.16/claude-code/18-stage7-blueprint-sections-20-21-draft.md`, blob `50f24db416f05120b69124731c86405bb0ac7244`, PR #975.
- PR #977 composed Sections 1–21 into the complete v0.4 Blueprint and reconciled O-S5-1 administrative metadata. These changes do not themselves imply a lock.

**Fail-closed content identity:** If the Blueprint or FCTM blob differs from the exact values above at PR merge or subsequent relocation, **STOP**. Do not claim `APPROVED — LOCKED`. Any substantive variation requires Founder review; no substitution is authorized by this record.

## 2. Founder Stage 8 decisions — approved

The Founder expressly approved the following in the SB-P-1.16 Stage 8 conversation, after reviewing the MC-254 presentation. These are approved product/governance decisions, **not** implementation authority.

| Decision | Founder disposition | Boundary |
|---|---|---|
| **F-1** | **APPROVED** — complete Blueprint Sections 1–21 | Intended Financial Integrity & Credit product design at the exact blob in §1 |
| **F-2** | **APPROVED** — FCTM baseline | 555 total rows, including 349 `IN SCOPE`; preserve classifications, commitments and assignments |
| **F-3** | **APPROVED** — Truth Pack and DC-11 | Non-destructive evidence-preservation boundary; does **not** establish legal retention or deletion rules |
| **F-4** | **APPROVED** — Founder runtime Scenarios A and B | OQ-04 **Option C**, as specified below |
| **F-5** | **APPROVED** — dependency and unresolved-question acknowledgement | FIN-01, U-08 and other technical/legal matters remain open at named later gates; not implicitly approved |
| **F-6** | **APPROVED** — withheld operational authorities | Production mutation, migrations, deployment, all provider activation (including payment providers), and implementation remain **NOT AUTHORIZED** |
| **F-7** | **APPROVED** — exclusions and fail-closed boundaries | No change to FCTM dispositions, commercial classification, build commitments or mission assignments |

### 2.1 Founder-reserved Scenario B — OQ-04 Option C (approved, not to be reopened without material evidence)

- **First phase:** Merchant-uploaded screenshot or receipt may be used for a human-reviewed test. It must remain labelled human-reviewed/merchant-submitted, **never provider-verified**.
- **Second phase:** After separate payment-provider authorization, gateway-authenticated evidence is tested **independently**.
- Passing one phase **does not prove** or replace the other phase.
- The system does not autonomously select between plausible sale matches or create a repayment, offset, refund, advance, income or expense. Merchant/Owner-controlled decisions and explicit authorization govern all consequential financial actions.
- No provider activation or runtime implementation is conferred by this decision.

### 2.2 Other decision boundaries

- **OQ-02:** Remains open until payment-provider authorization. Settlement fees may be displayed as explained variance only; no automatic or pre-filled expense entry. Any new behaviour requires its own Founder disposition.
- **OQ-05:** No historical profiling or retrospective reinterpretation is authorized; resolve the necessary disclosure/consent boundary before the applicable Stage 9 or rehearsal gate.
- **FIN-01:** Customer-advance technical representations are **PROVISIONAL engineering proposals**, not a Founder-approved schema or Ledger representation. Stage 9/EIS and upstream decisions must settle exact implementation.
- **U-08:** Evidence-lifecycle and privacy/legal matters stay unresolved at their named authority gate. This approval does not define retention duration, deletion eligibility/authority, cancellation/nonpayment treatment, backup/restoration/deletion of restored copies, export lifecycle or upload grace periods beyond previously approved upstream policy. Do not specify or build these held elements before relevant authority and legal review.
- **Other dependencies:** MQ-02, MQ-04, R15-11, U-10, 14-Q1–Q6 and 12-Q1–Q3 remain at the gates and fail-closed boundaries documented in the Stage 8 package; they are not silently resolved.

## 3. FCTM and design integrity preserved by the approval

- FCTM: 555 rows, comprising 349 `IN SCOPE`, 129 `DELEGATED`, 20 `ASSIGNED TO LATER MISSION`, 32 `NOT APPLICABLE`, 22 `OUT OF BUILD SCOPE`, 3 `UNRESOLVED FOUNDER DECISION`, and 0 `ESCALATED` (approved reported coverage baseline).
- The 349 `IN SCOPE` rows remain `BUILD NOW`; the unresolved rows remain unresolved, with named later gates. Locking **freezes** each row's disposition, build commitment, commercial classification and mission assignment. Later movement requires a Founder decision under Source 18.
- The unified Ledger is authoritative for balances; evidence status cannot rewrite a balance. Ambiguity, excess, mismatch, reversals, idempotency and concurrent writes retain the documented fail-closed controls.
- Owner retains financial decision ownership. Manager authority is explicit and scoped; employees do not gain customer-credit balances or Owner financial intelligence by default. Tenant isolation, permission checks and auditable attribution remain mandatory.
- Customer messages are merchant-controlled drafts until approved channel permissions and delivery become available. No automation, lending, underwriting or automatic credit blocking is approved.

## 4. Status and operational authority

**At preparation:** Founder F-1–F-7 are approved, but this record is not yet on `main`; the Blueprint is **NOT YET LOCKED**. The status `APPROVED — LOCKED` may be used only after the precise approval record is merged and Mission Control independently confirms this record and both §1 blobs in canonical `main`.

**After canonical verification:** Mission Control may record the Stage 8 Blueprint lock against the exact Blueprint and FCTM blobs in §1 and authorize the byte-preserving `git mv` to `docs/phase-1-mission-blueprint/completed/SB-P-1.16.md`, subject to a separate reviewed Founder-operated relocation PR. The moved file's blob must remain `305571a66af4a4683bd967466fc83645de5dfbd3`, and the active path must cease to exist.

**Explicitly NOT AUTHORIZED:** implementation; migrations; production mutation; deployment; external provider/payment-provider activation; production data operation; automatic merchant collection messaging; Stage 19 independent assurance claims. Stage 9 EIS may begin only upon separate Mission Control authorization after canonical lock verification; no implementation authority follows from the lock.

## 5. Controlled publication and audit instructions

1. Prepare a **one-file-only** PR adding this approval record at the publication target. Do not edit Blueprint, FCTM, Stage 7 source, schema or code. Confirm the base main SHA and the exact Blueprint/FCTM blobs from §1 before creating the PR.
2. Run normal Markdown validation and the existing pre-commit hook; do not bypass any quality or security control. Record the commit, PR head, file scope and GitHub checks.
3. Mission Control independently reviews the PR head and conditions; **Founder alone merges** after merge authorization.
4. After Founder merge, Mission Control independently verifies canonical `main`, the record and both §1 blobs. Only then formally register the Stage 8 `APPROVED — LOCKED` disposition. If any required assertion fails, stop without lock.
5. Prepare the separate **byte-preserving relocation** PR; review and Founder-merge it; verify the completed path and absence of the active path. No rewording or product change is included.
6. Any subsequent EIS activation or other mission transition requires its own authority, distinct from this Founder approval and relocation.

**MC-255 control note:** Founder approval has been given in the conversation. Repository publication, canonical lock verification and relocation are subsequent operations, not actions completed by creating this file.
