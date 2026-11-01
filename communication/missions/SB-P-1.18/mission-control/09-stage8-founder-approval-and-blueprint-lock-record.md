# SB-P-1.18 — Stage 8 Founder Approval and Blueprint Lock Record (`18:S8-FAR`)

**Mission:** SB-P-1.18 — Controlled Business Add-ons\
**Stage:** Source 18 v1.3 Stage 8 — Founder Approval and Blueprint Lock\
**Record ID:** `18:S8-FAR` (Stage 8 Founder approval record). It is not a Founder Product Decision Record and changes no product feature, row or Founder decision\
**Authority:** the Founder's Stage 8 decision quoted in Section 1, given after the MC-710 decision request and accepted by Mission Control in MC-711. Mission Control applies the lock (Source 18 Stage 8; §13 `APPROVED — LOCKED`)\
**Prepared by:** Claude Code, SB-P-1.18 Definition Actor, read-only under MC-711-P; published under MC-712-A\
**Founder-approved base:** `main@0deafe2b2d694e1529b22a06207a96034e740cd9` (PR #1109 merge)\
**Record status:** FOUNDER APPROVED — BLUEPRINT APPROVED — LOCKED, effective canonically only on Founder human merge of this PR and Mission Control post-merge verification\
**Implementation Authorization:** WITHHELD — IMPLEMENTATION NOT AUTHORIZED.

## 0. How to read this record

| Part | Content | Authority |
|---|---|---|
| Section 1 | The Founder's decision, verbatim | The only Founder authority in this record |
| Section 2 | Mission Control's acceptance and scope (MC-711) | Mission Control, within the Founder's statement |
| Sections 3 to 11 | Identities, accounting and limits, prepared by the Definition Actor | None. Where they differ from Section 1, Section 1 prevails |

## 1. Founder decision

The Founder's Stage 8 decision, as quoted verbatim in MC-711 §1 (PR #1109 comment 6558662107):

> FOUNDER STAGE 8 DECISION — MC-710 / SB-P-1.18: I explicitly approve the complete Sections 1–21 Blueprint at blob 851d9e97ad5a932749796e135640bfe918b11bc4; the 769-row FCTM at blob 2bbe6e227d714996bcead10385952c78283e20e8 and its Truth Pack summary; the canonical F-01–F-08 decisions; Founder-reserved runtime verification scenarios A, B and C as future plans, not demonstrated results; and the documented production and M18-1–M18-8 migration scope flags. I confirm all recorded downstream legal, privacy, security, payroll, entitlement, stock, G1/G2 interface and deployment holds remain in effect, including 19 DI rows and eight off-critical-path unresolved Founder rows. This approves the Stage 8 documentary Blueprint for controlled lock preparation only. It does not itself change repository files, perform the canonical active-to-completed lock/move, authorize EIS, implementation, migrations, payroll export or deployment. Mission Control must separately authorize controlled lock publication, independent review and Founder human merge.

**Provenance:**

- **Conversation-source.** The Founder gave the decision in Mission Control conversation, and Mission Control quoted it in MC-711. It was not in the repository before this record.
- **Not the request text.** MC-710 proposed suggested wording. The Founder's own statement above is the decision, and the suggested wording carries no authority.
- **No signature.** This record carries no Founder signature, and none is implied.

## 2. Mission Control acceptance (MC-711)

- **Accepted:** Mission Control accepted the statement as the Founder's express Stage 8 documentary approval (MC-711 §§1–2).
- **Lock preparation only:** the approval authorizes controlled lock preparation. The lock and the `active/` to `completed/` move happen only through this separately authorized PR (MC-712-A), its independent non-author review and the Founder's human merge.
- **Baseline:** Mission Control verified the baseline in MC-711 §2: `main@0deafe2b`, with Blueprint `851d9e97`, FCTM `2bbe6e22`, decision log `56cdd935` and Source 18 `f3b01b60`, and `completed/SB-P-1.18.md` absent.
- **Readiness:** found READY FOR FOUNDER STAGE 8 APPROVAL CONSIDERATION by the independent MC-709-R finding (PR #1109 comment 6558534577), and accepted by MC-710.

## 3. What is approved and locked

| Item | Identity |
|---|---|
| Product Blueprint, complete Sections 1–21 | **Approved content:** `docs/phase-1-mission-blueprint/active/SB-P-1.18.md` at the base, blob `851d9e97ad5a932749796e135640bfe918b11bc4`. **Locked canonical file:** `docs/phase-1-mission-blueprint/completed/SB-P-1.18.md`, blob `a7e0266e5e3bf2e2e2c6abce1ecd4f7b98b44d33`. The two differ only in the banner, seven Metadata rows, the Mission Snapshot stage-result row, the §18 v1.0 row, and §19 governance rows and historical-text note. Sections 1–17, the §19 row map and Sections 20–21 are identical |
| Canonical FCTM | `communication/missions/SB-P-1.18/claude-code/03-stage2-populated-fctm.md`, blob `2bbe6e227d714996bcead10385952c78283e20e8`, unchanged |
| Mission Truth Pack (Stage 2) | `claude-code/04-…` `fe76f016`, `05-…` `f62a6087`, `06-…` `2f1c9fba`, `07-…` `a5177ab2`, `08-…` `d32b6e65` and index `09-…` `0fb97448`, all unchanged |
| Founder decisions F-01 to F-08 | Decision log blob `56cdd935296864ea8f15fbb4cc9daa58641fef77` as approved; records `18:FPDR-2` `226391e2`, `18:FPDR-5` `2714f896`, `18:FPDR-3` `5c8fa449`, `18:FPDR-4` `32a2026f`, `18:FPDR-1` `76061093`, `18:FPDR-6` `df0c8b72`, `18:FPDR-4-A` `1538c4d5` and `18:FPDR-7` `f534e25e`, all unchanged. This PR adds only the F-09 index row for this record (log blob `8a7aa4b7`) |
| Lifecycle authority | Source 18 v1.3, `merge/active/18_SB-P_Mission_Lifecycle_and_Delivery_Framework.md`, blob `f3b01b608c4b64df186d4278ba6468ed0419630f` |

**Fail-closed identity.** Each of the following is a stop condition. In any of these cases, Mission Control must not treat the lock as effective, and any substantive variation needs Founder review:

- At merge, the locked file differs from blob `851d9e97` in anything other than the lines named above.
- The FCTM blob differs from `2bbe6e22`.
- Any F-01 to F-08 decision-log row or Founder record differs from the identities above.

## 4. FCTM freeze

The Founder approved the 769-row FCTM. The lock freezes every row's disposition, build commitment, commercial classification and mission assignment (Source 18 Stage 8). Row IDs, source pointers, obligation coverage, verification seeds and Founder Decision IDs are also unchanged. Any later change to a frozen field needs a separate Founder decision (Source 18 §3.2 item 5).

| Disposition | Rows |
|---|---:|
| `IN SCOPE` | 592 |
| `DELEGATED` | 77 |
| `OUT OF BUILD SCOPE` | 48 |
| `NOT APPLICABLE` | 27 |
| `ASSIGNED TO LATER MISSION` | 17 |
| `UNRESOLVED FOUNDER DECISION` | 8 |
| `ESCALATED` | 0 |
| `ALREADY DEMONSTRATED` | 0 |
| **Total** | **769** |

**Assignments:**

- **Delegated:** SB-P-1.15 24, SB-P-1.12 23, SB-P-1.16 15, SB-P-1.14 5, SB-P-1.13 3, SB-P-1.19 3, SB-P-1.17 2, SB-P-1.20 2.
- **Assigned to later mission:** SB-P-1.20 17. These stay `BUILD NOW`.
- **Source 11 exception:** the five facet rows `S11-L443-1` to `S11-L443-5` are kept as verification carriers of one Source 11 L443 obligation (`18:FPDR-5`; Source 18 §3.2 item 1).
- **Unresolved Founder decisions:** eight rows, all off the SB-P-1.18 critical path (Blueprint §11.5): `1-§30-1`, `1-§30-2`, `6-§3-10`, `BP-§15-3`, `BP-§15-5`, `BP-§15-7`, `BP-§15-8` and `GPCV-§9-11`. They stay unresolved and are decided at their own gates.
- **Row `17-§9-5`:** stays `OBL`, `BUILD NOW`, `MGR+LDG`, `SB-P-1.18`, `IN SCOPE`. Payroll-support viewing is the Phase One baseline; payroll export is permitted and adoptable, not mandatory (`18:FPDR-7`).

**Engineering register (Blueprint §20.8), unchanged:**
- Status: `DA` 115, `DH` 434, `HG` 24, `DI` 19 (592 rows).
- Risk: H 100, M 382, L 110.

The register is documentary feasibility only. It is not readiness, and it is not a security, legal or runtime clearance.

## 5. Mission Truth Pack summary (approved)

The Founder approved the Truth Pack summary. Its authoritative content is the Stage 2 records listed in Section 3, indexed by `claude-code/09-stage2-mission-truth-pack-index.md`; this record does not restate them. Their Stage 2 publication-time screens are history, and the later canonical Founder decisions F-01 to F-08 govern (MC-709-R §1).

## 6. Founder-reserved runtime scenarios (future plans)

The Founder approved the three scenarios as future verification plans (Blueprint §15.1, §20.7.10). **All three are NOT DEMONSTRATED**, and none is a lock prerequisite.

- **Scenario A, `BP-§10.7-AS1` (FRV-A):** an ambiguous customer order stays a draft until it is clarified. It is never guessed.
- **Scenario B, `BP-§10.7-BS1` (FRV-B):** an employee corrects only their own attendance, as permitted. They cannot see other staff, Owner financial intelligence or Ask CFO.
- **Scenario C, `BP-§10.7-CS1` (FRV-C):** a confirmed licence-expiry reminder, with no claim of legal certification.

## 7. Production and migration scope flags (approved as planning only)

- **Migration classes:** M18-1 to M18-8 (Blueprint §20.7.2) are planned classes only. None is drafted, rehearsed, reviewed or authorized.
- **Not authorized:** production mutation, migration execution, and delivery sync and publication (Source 18 §9.1). Also not authorized: Supabase or schema change, environment release, rollout, provider configuration and runtime or production tests.
- **Environments:** `smart-business-test` needs fresh verification before any rehearsal (Blueprint §20.7.1; Δ-06, Δ-07).
- **Builder:** none is assigned.

## 8. Holds that stay binding

| Hold | Where recorded | State |
|---|---|---|
| SB-P-1.12 G1/G2 participant-binding interface; the 19 external Delivery Staff `DI` rows (B6-01, EQ18-15) | Blueprint §20.7.9, §20.8, §21.3; MC-688 | OPEN — EIS precondition for dependent interface detail |
| `DLEG`: qualified India and Kerala payroll and overtime legal rules before the relevant EIS calculations; proof-media and privacy checks at their EIS gate | Blueprint §12.3, §20.7.9; `18:FPDR-5` §5 | OPEN |
| DC-14: QR plus point-in-time geofence; T6 conditionally accepted as documentary design only (MC-699) | Blueprint §20.7.9, §21.3; `18:FPDR-4-A` | PROVISIONAL — PROFESSIONAL VALIDATION PENDING. Qualified India and Kerala review before actual employee-location processing or legal-policy reliance |
| DC-13: consent, purpose, welcome-once and STOP; T6 conditionally accepted as documentary design only (MC-701) | Blueprint §12.3, §21.3 | Conditional; `DNTF` and SB-P-1.20 thin-channel ownership stay |
| `D12`, `D17`, `DENT` staff and entitlement authority; `DNTF`; AEG-1; U-09; the C1 §17 screening | Blueprint §12.2, §12.3, §21.3 | OPEN |
| SA-05 security, RLS and permissions; SA-03 stock, finance and concurrency (`DTX`; the 13 B6-05 rows at HIGH); SA-04 integration; migration safety | Blueprint §21.5; MC-688 | HELD — no runtime, security or financial PASS |
| New external provider screening | Blueprint §21.5 | NOT APPLICABLE today (none proposed); not a PASS |
| The eight off-critical-path `UNRESOLVED FOUNDER DECISION` rows | Blueprint §11.5 | Unresolved |
| Upstream SB-P-1.12 to SB-P-1.17 kernels | Blueprint §12.1, §20.7.4 | Specified and locked; not implemented |

The lock converts no hold to PASS. It authorizes no real payroll export, pay action, continuous staff GPS, new channel adapter, custom POS core modification or staff access to Owner finance.

## 9. Historical text reconciled, not rewritten

The approved Blueprint carries Stage 7 publication-time statements that later records superseded. They are kept byte for byte. The lock records the later facts beside them, as follows:

| Statement at blob `851d9e97` | Later canonical or recorded fact | Treatment in the locked file |
|---|---|---|
| Banner and Metadata: Stage 7 DRAFT, not approved, not locked | MC-688 Stage 7 exit; Founder Stage 8 approval (Section 1) | Banner and lifecycle Metadata updated to `APPROVED — LOCKED` |
| §19: PR #1109 row `PENDING (not published)` | PR #1109 merged as `0deafe2b2d694e1529b22a06207a96034e740cd9` (MC-709) | Row updated with the merge |
| §21.5 “No specialist review has been performed”; §21.6 recommendations 1, 4 and 5; §21.7 “This draft claims no Stage 7 completion” | MC-688: Stage 7 COMPLETE — ACCEPTED WITH EXPLICIT DOWNSTREAM HELD GATES; specialist findings HELD, not PASS | Text unchanged; §19 governance row and historical-text note added |
| §21.4 T6: “DC-14 and DC-13 stay Mission Control matters, unchanged”; §20.7.9 DC-14 planning effect | MC-699 (DC-14) and MC-701 (DC-13): T6 conditionally accepted as documentary design; not legal clearance | Text unchanged; §19 governance row added |

**Chronology caveat (MC-703).** The comment timestamps of MC-701, MC-702 and the MC-702-P packet read earlier than the PR #1107 merge they refer to. They are treated as inconsistent evidence. Order is taken from the merged commits and the records, not from comment timestamps.

No specialist, legal or runtime PASS is claimed, and no DC-14 legal research is reopened.

## 10. Not authorized by this record

- Stage 9 EIS creation or approval; no Stage 9 actor is authorized.
- Engineering implementation, SQL or database migration.
- Production mutation, deployment, Lovable publication or delivery sync.
- Provider configuration, location processing, payroll export or calculation, and processing of staff or customer data.
- Runtime testing, formal mission closure or communication archive.

## 11. Effect

The lock becomes canonical only after this PR is human-merged by the Founder and Mission Control independently verifies the resulting `main`. Until then, `main` keeps the Founder-approved, unlocked Blueprint at `active/`.

**STOP FOR MISSION CONTROL REVIEW AND FOUNDER HUMAN MERGE.**
