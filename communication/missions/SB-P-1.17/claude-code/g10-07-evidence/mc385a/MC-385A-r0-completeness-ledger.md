# SB-P-1.17 — MC-385A R0 Completeness Ledger

**Mission:** SB-P-1.17 — Manager Operations\
**Stage:** Source 18 v1.2 Stage 5 — Gate 10 open\
**Tracking:** MC384A-G10-01\
**Mode:** read-only evidence production (MC-385A); published under MC-387A\
**Locked revision:** `main@fc1441101d42b881e74757dea38eb1617387c791`\
**Prepared by:** Claude Code, the original Definition Actor (same actor as the Stage 2 inventory and FCTM)\
**Certification:** not independently certified\
**Implementation Authorization:** WITHHELD — IMPLEMENTATION NOT AUTHORIZED.

This report is the repository version of the MC-385A evidence page (Artifact version 2). It carries the same findings, tables and data. Only the file-access wording in Section F and the publication note at the end differ.

The question it answers: does any of the 3,820 rule-excluded (R0) source units in the MC-375A coverage appendix carry an SB-P-1.17 obligation that the FCTM does not represent? Every unit was read in full, and every unit has a traceable disposition in `MC-385A-r0-ledger.csv`.

## Result

- **3,820 of 3,820 units read and dispositioned.**
- **No omitted applicable obligation and no ownership conflict were found.** Nothing triggers a stop under MC-385A.
- **60 units relate to SB-P-1.17, and all are carried:**
  - 17 are grouped into existing FCTM rows;
  - 43 are owned upstream, and an existing SB-P-1.17 row carries the same obligation locally.

  No new row is proposed (D-08 rule).
- **The other 3,760 units are JUSTIFIED EXCLUSION** in their owning mission's domain.
- **E-1 (unresolved):** MC-384A is not a repository record. Its term list for the 1,289 broader-risk units was not available, so that population cannot be reconstructed exactly. The full 3,820-unit ledger is a superset: Mission Control can filter it by its own key list.
- **False-negative checks:** the second-pass sample (115 units, seed 385) and the 402-unit lexicon probe found no false negative. The probe added one local-equivalent record (`21-§22-p2`).

## A. Locked source revisions

| Source | Path | Blob / commit |
|---|---|---|
| Repository main | — | `fc1441101d42b881e74757dea38eb1617387c791` (after PR #1007) |
| MC-375A coverage appendix | `communication/missions/SB-P-1.17/claude-code/g10-07-evidence/MC-375A-appendix-unit-coverage.csv` | `548783ee4a402dbf665885d64a0a4fba8a9361a3` (retrieved by blob) |
| SB-P-1.17 FCTM | `communication/missions/SB-P-1.17/claude-code/01-stage2-populated-fctm.md` | `cb79088d3fa59f8b3226fd9d11ff9c9573666670` |
| Source 18 v1.2 | `merge/active/18_SB-P_Mission_Lifecycle_and_Delivery_Framework.md` | `0945bda60a93c99909c3b7a247d5427ebe256011` |
| FCTM SB-P-1.12 | `communication/missions/SB-P-1.12/claude-code/03-stage2-populated-fctm.md` | `1650ff95` |
| FCTM SB-P-1.13 | `communication/missions/SB-P-1.13/claude-code/02-stage2-populated-fctm.md` | `97ddc752` |
| FCTM SB-P-1.14 | `communication/missions/SB-P-1.14/claude-code/02-stage2-populated-fctm.md` | `01e9856a` |
| FCTM SB-P-1.15 | `communication/missions/SB-P-1.15/claude-code/03-stage2-populated-fctm.md` | `65eeaf8d` |
| FCTM SB-P-1.16 | `communication/missions/SB-P-1.16/claude-code/02-stage2-populated-fctm.md` | `94dd5220` |
| Contracts C1–C25, Build Plan, GPCV | `docs/phase-1-mission-blueprint/smart-business-features/` | Unchanged since the Stage 2 baseline; per-unit source blob in the ledger column `source_blob` |

## B. Reconciliation ledger

Each of the 3,820 ledger rows records:
- the exact source text, with its blob and locator;
- the owning mission;
- an applicability statement;
- the upstream FCTM carrier;
- the acceptance relationship;
- the MC-385A disposition and its evidence.

Units that only describe another feature's domain are JUSTIFIED EXCLUSION, with their owning-mission carrier named. The control-term and lexicon columns are screens, not dispositions.

MC-384A's 1,289-unit population is not identifiable from the repository (E-1). The closest control-term screen reconstructed here flags 1,250 units (column `control_term_screen`; pattern in `build.py.txt`). Every possible 1,289-unit subset of R0 is covered, because all 3,820 units were read.

### B.1 Per contract

| Contract | Owner (Build Plan §9) | R0 units | Grouped | Local carrier | Other exclusion | Control screen | Carrier: locator | Carrier: text | Carrier: section | No FCTM yet |
|---|---|---|---|---|---|---|---|---|---|---|
| C1 | SB-P-1.18 | 269 | 1 | 0 | 268 | 73 | 16 | 1 | 162 | 90 |
| C2 | SB-P-1.15 | 271 | 1 | 0 | 270 | 60 | 224 | 0 | 47 | 0 |
| C3 | SB-P-1.14 | 149 | 1 | 0 | 148 | 45 | 0 | 116 | 33 | 0 |
| C4 | SB-P-1.15 | 97 | 0 | 2 | 95 | 21 | 89 | 0 | 8 | 0 |
| C5 | SB-P-1.14 | 140 | 2 | 1 | 137 | 36 | 1 | 125 | 14 | 0 |
| C6 | SB-P-1.18 | 93 | 0 | 0 | 93 | 57 | 0 | 0 | 3 | 90 |
| C8 | SB-P-1.19 | 125 | 0 | 0 | 125 | 33 | 0 | 63 | 62 | 0 |
| C9 | SB-P-1.13 | 102 | 0 | 2 | 100 | 12 | 0 | 90 | 12 | 0 |
| C10 | SB-P-1.13 | 165 | 4 | 1 | 160 | 69 | 0 | 127 | 38 | 0 |
| C11 | SB-P-1.15 | 139 | 5 | 16 | 118 | 47 | 136 | 0 | 3 | 0 |
| C12 | SB-P-1.13 | 140 | 0 | 2 | 138 | 40 | 0 | 79 | 61 | 0 |
| C14 | SB-P-1.16 | 136 | 0 | 0 | 136 | 53 | 134 | 0 | 2 | 0 |
| C15 | SB-P-1.16 | 164 | 0 | 0 | 164 | 63 | 162 | 0 | 2 | 0 |
| C16 | SB-P-1.18 | 135 | 0 | 0 | 135 | 37 | 0 | 0 | 6 | 129 |
| C18 | SB-P-1.19 | 154 | 0 | 9 | 145 | 64 | 0 | 0 | 42 | 112 |
| C19 | SB-P-1.19 | 202 | 0 | 0 | 202 | 67 | 0 | 0 | 37 | 165 |
| C20 | SB-P-1.19 | 140 | 0 | 0 | 140 | 31 | 0 | 20 | 120 | 0 |
| C21 | SB-P-1.12 | 102 | 0 | 3 | 99 | 52 | 0 | 53 | 49 | 0 |
| C22 | SB-P-1.12 | 258 | 0 | 6 | 252 | 108 | 51 | 142 | 65 | 0 |
| C23 | SB-P-1.20 | 263 | 0 | 0 | 263 | 101 | 0 | 0 | 62 | 201 |
| C24 | SB-P-1.13 | 321 | 2 | 1 | 318 | 96 | 0 | 208 | 113 | 0 |
| C25 | SB-P-1.14 | 255 | 1 | 0 | 254 | 85 | 1 | 160 | 94 | 0 |
| **Total** | | **3,820** | **17** | **43** | **3,760** | **1,250** | **814** | **1,184** | **1,035** | **787** |

**Column notes:**
- "No FCTM yet" covers 787 units whose owning mission (SB-P-1.18, SB-P-1.19 or SB-P-1.20) has not reached Stage 2. For these, the recorded carrier is the Build Plan §9 assignment of the contract to that mission. It is an ownership assignment, not a verified match to a future FCTM row.
- "Section" means the unit is carried inside a section-level upstream row.

### B.2 The 60 units with an SB-P-1.17 relationship

None of these is an omitted requirement. Each is carried in one of two ways:
- **Grouping:** by an existing Part D row or a C7, C13 or C17 row.
- **Exclusion with local carrier:** by a local SB-P-1.17 row equivalent to the upstream-owned rule.

| Unit | Source text | Owner | Disposition | Evidence |
|---|---|---|---|---|
| `1-§5-b9` | review item availability; | SB-P-1.18 | JUSTIFIED GROUPING | Employee permission to review item availability is the role form of rowed `1-§10-2` (DELEGATED SB-P-1.18; SB-P-1.17 supplies stock data). Local: `7-§10-3` |
| `2-§5-b4` | Which products expire this week? | SB-P-1.15 | JUSTIFIED GROUPING | Ask CFO data question over expiry reads SB-P-1.17 stock data; equivalent to rowed consumers `2-§11-5`, `2-§25-8` (DELEGATED SB-P-1.15). Local expiry rows `7-§2-8` |
| `3-§22-p2` | Future implementation must **extend rather than destructively replace** accepted integrity work unless a later EIS proves replacement is necessary and migration-safe. | SB-P-1.14 | JUSTIFIED GROUPING | Second sentence of the C3 §22 reuse rule carried by rowed `3-§22-1` (DELEGATED SB-P-1.14); applied here by DC-01 (F-INV/F-PPM reuse) |
| `4-§15-b2` | accuse employees/customers from anomaly signals; | SB-P-1.15 | JUSTIFIED EXCLUSION | Daily Intelligence must not accuse from anomaly signals (SB-P-1.15). SB-P-1.17 carries the equivalent for its own signals: `13-§8-10`, `17-§8-6` |
| `4-§16-b11` | neutral, non-accusatory handling of operational signals. | SB-P-1.15 | JUSTIFIED EXCLUSION | Daily Intelligence acceptance (SB-P-1.15). SB-P-1.17 equivalents: `13-§21-5`, `BP-§10.6-B2` |
| `5-§7-p3` | Each destination feature remains responsible for its own permission, validation and write rules. | SB-P-1.14 | JUSTIFIED GROUPING | Destination-feature responsibility for permission, validation and write rules; SB-P-1.17 is the destination for other stock documents and carries it in `7-§6-4b`, `7-§6-5b` (IN SCOPE) and `5-§4-10` |
| `5-§11-p2` | The EIS should define practical fingerprint/idempotency behavior for each destination workflow. | SB-P-1.14 | JUSTIFIED GROUPING | Per-destination idempotency; the SB-P-1.17 stock-document slice is `7-§6-5b`, `7-§15-2b` (IN SCOPE) |
| `5-§12-p3` | May access operational documents only where delegated. | SB-P-1.14 | JUSTIFIED EXCLUSION | UDI Manager document access (SB-P-1.14). Manager stock-document access is governed locally by `17:FPDR-1` capabilities and `7-§10-2` |
| `9-§11-b3` | quantities; | SB-P-1.13 | JUSTIFIED EXCLUSION | Human Language quantity normalization (SB-P-1.13); local reuse `9-§12-8`, `13-§19-5` |
| `9-§11-b4` | weights/units; | SB-P-1.13 | JUSTIFIED EXCLUSION | Human Language weight/unit normalization (SB-P-1.13); local reuse `9-§12-8`, `7-§2-5` |
| `10-§13-b10` | current business state. | SB-P-1.13 | JUSTIFIED GROUPING | As `10-§13-b7` |
| `10-§13-b7` | current role permission; | SB-P-1.13 | JUSTIFIED GROUPING | Workspace business-action condition governing the rowed example `10-§13-6` (approve a reorder) |
| `10-§13-b8` | feature-specific confirmation rules; | SB-P-1.13 | JUSTIFIED GROUPING | As `10-§13-b7`; local confirmation rule `7-§5-1` |
| `10-§13-b9` | idempotency/audit behavior; | SB-P-1.13 | JUSTIFIED GROUPING | As `10-§13-b7`; local idempotency `7-§8-1` |
| `10-§17-b5` | unclear item/quantity; | SB-P-1.13 | JUSTIFIED EXCLUSION | Workspace clarification of item/quantity (SB-P-1.13); local `7-§11-1.6`, `9-§9-6` (Part D) |
| `11-§10-n1` | identify the exact target/action; | SB-P-1.15 | JUSTIFIED GROUPING | Governed execution step for every reminder action, including the rowed `11-§10-4` (Approve reorder, DELEGATED SB-P-1.15); local `7-§5-1` |
| `11-§10-n2` | verify current state; | SB-P-1.15 | JUSTIFIED GROUPING | Governed execution step for every reminder action, including the rowed `11-§10-4` (Approve reorder, DELEGATED SB-P-1.15); local `7-§5-1` |
| `11-§10-n3` | verify actor permission; | SB-P-1.15 | JUSTIFIED GROUPING | Governed execution step for every reminder action, including the rowed `11-§10-4` (Approve reorder, DELEGATED SB-P-1.15); local `7-§5-1` |
| `11-§10-n5` | execute through the authoritative feature service; | SB-P-1.15 | JUSTIFIED GROUPING | Governed execution step for every reminder action, including the rowed `11-§10-4` (Approve reorder, DELEGATED SB-P-1.15); local `7-§5-1` |
| `11-§10-n6` | preserve linked reminder/business audit history. | SB-P-1.15 | JUSTIFIED GROUPING | Governed execution step for every reminder action, including the rowed `11-§10-4` (Approve reorder, DELEGATED SB-P-1.15); local `7-§5-1` |
| `11-§11-b1` | business scope; | SB-P-1.15 | JUSTIFIED EXCLUSION | Standing-rule field (SB-P-1.15, consumed through `D15`); SB-P-1.17 standing reorder rules carried locally by `7-§5-2`, `7-§15-8`, `7-§13-12` |
| `11-§11-b10` | modification history; | SB-P-1.15 | JUSTIFIED EXCLUSION | Standing-rule field (SB-P-1.15, consumed through `D15`); SB-P-1.17 standing reorder rules carried locally by `7-§5-2`, `7-§15-8`, `7-§13-12` |
| `11-§11-b11` | trigger/execution history; | SB-P-1.15 | JUSTIFIED EXCLUSION | Standing-rule field (SB-P-1.15, consumed through `D15`); SB-P-1.17 standing reorder rules carried locally by `7-§5-2`, `7-§15-8`, `7-§13-12` |
| `11-§11-b12` | failure/retry history. | SB-P-1.15 | JUSTIFIED EXCLUSION | Standing-rule field (SB-P-1.15, consumed through `D15`); SB-P-1.17 standing reorder rules carried locally by `7-§5-2`, `7-§15-8`, `7-§13-12` |
| `11-§11-b2` | exact action type; | SB-P-1.15 | JUSTIFIED EXCLUSION | Standing-rule field (SB-P-1.15, consumed through `D15`); SB-P-1.17 standing reorder rules carried locally by `7-§5-2`, `7-§15-8`, `7-§13-12` |
| `11-§11-b3` | trigger conditions; | SB-P-1.15 | JUSTIFIED EXCLUSION | Standing-rule field (SB-P-1.15, consumed through `D15`); SB-P-1.17 standing reorder rules carried locally by `7-§5-2`, `7-§15-8`, `7-§13-12` |
| `11-§11-b4` | target/item/person; | SB-P-1.15 | JUSTIFIED EXCLUSION | Standing-rule field (SB-P-1.15, consumed through `D15`); SB-P-1.17 standing reorder rules carried locally by `7-§5-2`, `7-§15-8`, `7-§13-12` |
| `11-§11-b5` | quantity/value/limit where relevant; | SB-P-1.15 | JUSTIFIED EXCLUSION | Standing-rule field (SB-P-1.15, consumed through `D15`); SB-P-1.17 standing reorder rules carried locally by `7-§5-2`, `7-§15-8`, `7-§13-12` |
| `11-§11-b6` | permitted channel/destination where relevant; | SB-P-1.15 | JUSTIFIED EXCLUSION | Standing-rule field (SB-P-1.15, consumed through `D15`); SB-P-1.17 standing reorder rules carried locally by `7-§5-2`, `7-§15-8`, `7-§13-12` |
| `11-§11-b7` | creator/authority provenance; | SB-P-1.15 | JUSTIFIED EXCLUSION | Standing-rule field (SB-P-1.15, consumed through `D15`); SB-P-1.17 standing reorder rules carried locally by `7-§5-2`, `7-§15-8`, `7-§13-12` |
| `11-§11-b8` | effective date/time; | SB-P-1.15 | JUSTIFIED EXCLUSION | Standing-rule field (SB-P-1.15, consumed through `D15`); SB-P-1.17 standing reorder rules carried locally by `7-§5-2`, `7-§15-8`, `7-§13-12` |
| `11-§11-b9` | enabled/paused/revoked state; | SB-P-1.15 | JUSTIFIED EXCLUSION | Standing-rule field (SB-P-1.15, consumed through `D15`); SB-P-1.17 standing reorder rules carried locally by `7-§5-2`, `7-§15-8`, `7-§13-12` |
| `11-§11-p3` | The rule must never expand itself beyond stored authority. | SB-P-1.15 | JUSTIFIED EXCLUSION | Rule never expands beyond stored authority (SB-P-1.15); local `7-§15-8` |
| `11-§13-p2` | May create reminders and automation only within Owner-delegated authority. | SB-P-1.15 | JUSTIFIED EXCLUSION | Manager automation only within delegated authority (SB-P-1.15); `17:FPDR-1` keeps standing-rule creation Owner-reserved for this mission (consistent, stricter) |
| `11-§22-n7` | Consequential action requires valid confirmation or standing authority. | SB-P-1.15 | JUSTIFIED EXCLUSION | Reminder acceptance (SB-P-1.15); local `7-§5-1`, `7-§15-7` |
| `11-§22-n9` | Revoked permission blocks execution at runtime. | SB-P-1.15 | JUSTIFIED EXCLUSION | Reminder acceptance (SB-P-1.15); local `7-§13-12` |
| `12-§7-b4` | quantity/unit; | SB-P-1.13 | JUSTIFIED EXCLUSION | Voice quantity/unit clarification (SB-P-1.13); stock/reorder slice is `12-§7-7` (Part D); local `7-§11-1.6` |
| `12-§14-p2` | Voice can access only delegated capabilities/data. | SB-P-1.13 | JUSTIFIED EXCLUSION | Voice Manager scope (SB-P-1.13); Manager capabilities here are `17:FPDR-1` |
| `18-§5-p1` | Subscription/tier/add-on state should control capability access through durable entitlement/permission logic. | SB-P-1.19 | JUSTIFIED EXCLUSION | Entitlement model (SB-P-1.19, consumed through `DENT`); Smart Stock add-on path carried locally by `GPCV-R7`, `17-§4-8`, `17-§15-3`, `17-§17-4`; enforcement `17-§14-5` |
| `18-§5-p2` | A merchant changing tier/add-on must not require destructive `CREATE/DROP` of core business tables or deletion of historical records. | SB-P-1.19 | JUSTIFIED EXCLUSION | Entitlement model (SB-P-1.19, consumed through `DENT`); Smart Stock add-on path carried locally by `GPCV-R7`, `17-§4-8`, `17-§15-3`, `17-§17-4`; enforcement `17-§14-5` |
| `18-§5-p4` | **Entitlements control capability. They do not rewrite product truth or destroy merchant history.** | SB-P-1.19 | JUSTIFIED EXCLUSION | Entitlement model (SB-P-1.19, consumed through `DENT`); Smart Stock add-on path carried locally by `GPCV-R7`, `17-§4-8`, `17-§15-3`, `17-§17-4`; enforcement `17-§14-5` |
| `18-§9-b1` | stop access to the unavailable capability according to policy; | SB-P-1.19 | JUSTIFIED EXCLUSION | Add-on removal behaviour (SB-P-1.19, `DENT`); SB-P-1.17 unavailable-add-on handling is `17-§17-4`; historical stock records follow `7-§2-5` auditability |
| `18-§9-b2` | preserve historical records created while it was active unless current retention policy requires otherwise; | SB-P-1.19 | JUSTIFIED EXCLUSION | Add-on removal behaviour (SB-P-1.19, `DENT`); SB-P-1.17 unavailable-add-on handling is `17-§17-4`; historical stock records follow `7-§2-5` auditability |
| `18-§9-b3` | do not drop domain tables dynamically; | SB-P-1.19 | JUSTIFIED EXCLUSION | Add-on removal behaviour (SB-P-1.19, `DENT`); SB-P-1.17 unavailable-add-on handling is `17-§17-4`; historical stock records follow `7-§2-5` auditability |
| `18-§9-b4` | preserve references needed for financial/audit integrity; | SB-P-1.19 | JUSTIFIED EXCLUSION | Add-on removal behaviour (SB-P-1.19, `DENT`); SB-P-1.17 unavailable-add-on handling is `17-§17-4`; historical stock records follow `7-§2-5` auditability |
| `18-§9-b5` | explain what becomes unavailable; | SB-P-1.19 | JUSTIFIED EXCLUSION | Add-on removal behaviour (SB-P-1.19, `DENT`); SB-P-1.17 unavailable-add-on handling is `17-§17-4`; historical stock records follow `7-§2-5` auditability |
| `18-§9-b6` | allow later reactivation to restore capability without fabricating history. | SB-P-1.19 | JUSTIFIED EXCLUSION | Add-on removal behaviour (SB-P-1.19, `DENT`); SB-P-1.17 unavailable-add-on handling is `17-§17-4`; historical stock records follow `7-§2-5` auditability |
| `21-§17-b4` | automation rule; | SB-P-1.12 | JUSTIFIED EXCLUSION | Runtime revalidation covers automation rules (SB-P-1.12 `21-§17`); local `7-§13-12`, Part D `21-§12-5` |
| `21-§19-b8` | automation authority provenance. | SB-P-1.12 | JUSTIFIED EXCLUSION | Automation authority provenance (SB-P-1.12 `21-§19-8`); local `7-§5-2`; Part D `21-§12-*` |
| `21-§22-p2` | Feature contracts may add domain-specific permissions, but they must compose with the shared model. | SB-P-1.12 | JUSTIFIED EXCLUSION | Domain-specific permissions must compose with the shared model (SB-P-1.12 `21-§22`); SB-P-1.17 Manager capabilities (`17:FPDR-1`) are carried locally by `7-§12-3` (Permission Engine reuse). Found by the lexicon probe |
| `22-§5-b9` | external integration/provider references. | SB-P-1.12 | JUSTIFIED EXCLUSION | Shared external integration/provider reference identity (SB-P-1.12 `22-§5-9`); POS source/reference identity carried locally by `13-§4-3`, `13-§17-2` |
| `22-§11-p2` | Standing automation rules are stored delegated authority, not AI-created permission. | SB-P-1.15 | JUSTIFIED EXCLUSION | Standing automation is stored delegated authority (SB-P-1.12/SB-P-1.15); local `7-§5-2` |
| `22-§17-p3` | Custom client-specific modifications inside core are rejected unless explicitly reclassified through governance. | SB-P-1.15 | JUSTIFIED EXCLUSION | Core customization rejected (SB-P-1.12 C22 §17); POS slice carried locally by `7-§7-3`, `13-§3-7`, `13-§20-1`, `BP-§16-7`, `GPCV-§9-6` |
| `22-§20-b3` | use entitlements/permissions to control capability; | SB-P-1.12 | JUSTIFIED EXCLUSION | Entitlements control capability (SB-P-1.12); local `17-§14-5`, `GPCV-R7` |
| `22-§22-b1` | stable identifiers/test hooks for critical UI flows where appropriate; | SB-P-1.15 | JUSTIFIED EXCLUSION | Stable identifiers/test hooks (SB-P-1.12); Manager-depth slice carried locally by `17-§16-2`, `17-§22-10b` |
| `22-§28-b10` | custom client-specific core forks. | SB-P-1.12 | JUSTIFIED EXCLUSION | As `22-§17-p3`; local `13-§22-3`, `7-§16-3` |
| `24-§21-b6` | consequential imports; | SB-P-1.14 | JUSTIFIED EXCLUSION | Confirmation for consequential imports (SB-P-1.13); SB-P-1.17 stock-import slice is `7-§6-4b`, `5-§4-10` |
| `24-§21-p3` | Confirmation must bind to the exact reviewed action and current state. | SB-P-1.13 | JUSTIFIED GROUPING | Confirmation binding governs the rowed `24-§21-3` (confirmation for supplier orders, IN SCOPE SB-P-1.17) |
| `24-§21-p4` | The system must revalidate authority at execution. | SB-P-1.13 | JUSTIFIED GROUPING | Execution-time revalidation governs the rowed `24-§21-3`; local `7-§13-12` |
| `25-§6-p2` | A new feature must reuse this foundation unless a materially different storage requirement is justified. | SB-P-1.14 | JUSTIFIED GROUPING | Reuse rule of C25 §6 governing the rowed SB-P-1.17 storage slice `25-§6-1` (b8 Stock/Supplier/Reorder documents) |

## C. Coverage and sampling of the remaining population

- **Full read.** All 3,820 R0 units were read contract by contract with their section titles, not only the 2,531 outside MC-384A's set. The disposition of every unit comes from that read.
- **Seeded stratified sample (second pass).** Python `random.Random(385)`; per contract, 3% of its R0 units rounded, minimum 3; population sorted by section and locator before drawing. 115 units: C1 8, C2 8, C3 4, C4 3, C5 4, C6 3, C8 4, C9 3, C10 5, C11 4, C12 4, C14 4, C15 5, C16 4, C18 5, C19 6, C20 4, C21 3, C22 8, C23 8, C24 10, C25 8. Each sampled unit carries a written semantic false-negative rationale. Result: 0 false negatives. Two sampled units (`5-§11-p2`, `18-§9-b4`) were already relationship units from the first pass.
- **Lexicon probe.** 402 R0 units contain domain-adjacent words (item, product, goods, quantity, unit, sale, cash, price, cost, order, bill, shop, store, availability, catalog). All 402 were re-read. Most hits are incidental: "purpose" matches POS, and "order" is Smart Order & Delivery. The probe added one local-equivalent record, `21-§22-p2`; it found no omitted obligation.
- **Carrier links:** 814 units link to an owning-mission FCTM row by exact locator, 1,184 by label text and 1,035 to a section-level row. A seeded spot-check of 30 text links (seed 3851) found 30 correct. The other 787 units have no owning-mission FCTM yet (SB-P-1.18 to SB-P-1.20); their carrier is the Build Plan §9 assignment, not a verified future FCTM match.
- **Structural checks carried from MC-375A:** the upstream inheritance re-derivation (137 identifiers, 0 missing) and the C7/C13/C17 dependency references (all mapped to FCTM codes) both still hold. Their sources are unchanged at this revision.

**Residual-risk conclusion.**
- **Basis:** the determination rests on one actor's reading of plain-language units against a stated subject boundary (stock, supplier, reorder, POS and counter, closing cash, Manager workspace).
- **Agreement:** three different methods agree: the full read, the explicit second-pass sample and the lexicon probe.
- **Remaining risk:** reader judgement, which independent review addresses. It does not come from any unread population.

## D. New discrepancy register

| ID | Type | Finding | Status |
|---|---|---|---|
| — | Omitted applicable requirement | None found. | NONE |
| — | Ownership conflict | None found. Every relationship unit keeps its owning mission; SB-P-1.17 carriers are existing rows. | NONE |
| E-1 | Evidence gap | The MC-384A 1,289-unit population and its term list are not in the repository. The ledger covers all 3,820 R0 units, so any defined subset can be filtered by key. | UNRESOLVED — needs the MC-384A key list to confirm one-to-one |
| O-1 | Observation (no change proposed) | 60 consumer or equivalent relationships are documented here but not as Part D rows. This is consistent with the MC-380A instruction not to add delegated rows for D-08. | RECORDED |
| O-2 | Observation | 787 units in contracts owned by SB-P-1.18, SB-P-1.19 or SB-P-1.20 have no owning-mission FCTM yet. Their carrier is the Build Plan §9 assignment until those missions reach Stage 2. | EXPECTED |
| O-3 | Observation | 341 units link only to a group of section rows rather than a single row. They are dispositioned by the read, not by the link. | RECORDED |

## E. Evidence sufficiency against Source 18 §3.2(6)

- **Checks (a)–(c)** require every numbered section, every applicable separately verifiable obligation and every acceptance scenario of each in-scope contract to be represented, tested against a source-text inventory. "A missing obligation or acceptance scenario fails the test even when every retained row has a valid disposition."
- **For the R0 population,** this ledger is a source-text pointer list of all 3,820 units, independent of the FCTM. It finds no applicable obligation without a carrier. The 60 relationship units are carried by existing rows, so no check fails on missing representation.
- **Sufficient for Mission Control's Stage 5 test, with two limits:**
  - E-1 needs MC-384A's key list to confirm the 1,289 subset one-to-one.
  - The same actor wrote the Stage 2 inventory, the FCTM and this ledger, so §3.2(6) still needs Mission Control's own test and the Stage 19 verifier's independent inventory.
- **Checks (d) and (e)** are unaffected: no FCTM row, disposition or downstream mapping changed.

## F. Machine-readable evidence

All files are in this directory. The ledger columns are:

`key`, `contract`, `section`, `locator`, `subsection`, `section_title`, `source_blob`, `text`, `text_sha256_12`, `owning_mission`, `applicability`, `fctm_carrier`, `acceptance_relationship`, `disposition`, `evidence`, `control_term_screen`, `lexicon_screen`, `review`.

| File | Contents | Bytes (as generated) | SHA-256 (as generated) |
|---|---|---|---|
| `MC-385A-r0-ledger.csv` | Complete R0 reconciliation ledger: 3,820 units, one row each | 2,537,716 | `5f539b7ce0ddc1ff6ba26c9204cd353dab21c6d199a40ae341b37e34234d9e24` |
| `MC-385A-r0-sample.csv` | Workstream B second-pass sample: 115 units, seed 385 | 18,549 | `25d987c683f393040dcddd1ae317aa2a79c940a61846369b9c9baaf6047b79df` |
| `MC-385A-relationship-units.json` | The 60 units with an SB-P-1.17 relationship, with disposition and basis | 10,294 | `2369631ae7f6a8b5b1280811657ab6f28234af35d2c929355ca13d2825e64380` |
| `MC-385A-carrier-links.json` | Upstream FCTM carrier link for every unit (mission, row, line, match type) | 766,384 | `c77bddef98625db1c0dae867689b615550e15344e870f43e08fe3e4adb4aaa4b` |
| `parse.py.txt` | Contract parser (Stage 2 method) | 2,561 | `1861e77f86e1765400f7394a1096da4a8b804ba2c372ff3c94b05e1c55e581b2` |
| `carrier.py.txt` | Carrier matcher | 4,091 | `6bbf87960d634e9be56a070e6a8d194d66c7ac099a716823f5de2199a2d4c1a5` |
| `build.py.txt` | Ledger builder and sample draw | 6,038 | `622ab0610e3f4f2af7ac60315570e6fd95359e994dfe3998913d7fda043ab472` |
| `sample_review.py.txt` | Second-pass sample rationale | 8,855 | `b74ea1bdc510bd46710f4185d2a191e9a3f7a791f0b3975f9670f1f0b4041d2b` |

**To reproduce:**
1. Check out `main@fc144110`.
2. Extract the CSV blob `548783ee` as `coverage.csv`.
3. Run the parser (`parse.py.txt`, saved as `.py`) over the contracts to regenerate the unit file.
4. Run `carrier.py`, `build.py` and `sample_review.py`, in that order.

In the published script copies, the repository path is a placeholder (`REPO`) to set to your checkout. The scripts are stored as `.txt` so that no repository workflow treats them as executable code.

## Publication note (MC-387A)

- **Manifest paths.** `MANIFEST.sha256` is published byte-for-byte as generated for the evidence page. There, the files sat under `data/` and `scripts/`; here every file is in this one directory. To check it here, strip those prefixes first, for example: `sed -E "s#  (data|scripts)/#  #" MANIFEST.sha256 | sha256sum -c`.
- **Line endings.** The repository stores text with LF endings (`.gitattributes`: `* text=auto eol=lf`). `MC-385A-relationship-units.json` was generated with CRLF endings, so its committed bytes differ from the manifest entry; only CR bytes are removed. The pull request records its original and committed checksums. Every other file was generated with LF endings and is committed byte-identical.
- **Scope.** No finding, count, disposition or classification was changed for publication. E-1 remains unresolved.

**STOP FOR MISSION CONTROL REVIEW AND FOUNDER MERGE.** G10-07: NOT CLOSED. Gate 10: NOT PASSED. Stage 5: OPEN. Stage 6, Blueprint Lock, EIS and implementation: WITHHELD.
