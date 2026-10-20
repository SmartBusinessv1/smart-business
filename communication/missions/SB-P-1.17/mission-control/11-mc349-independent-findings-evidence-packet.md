# MC-349 — Founder-Relayed Independent Findings Evidence Packet (25)

**Mission:** SB-P-1.17 — Manager Operations  
**Prepared by:** Mission Control for Definition Actor intake  
**Basis:** Six Founder-relayed specialist returns: MC-333, MC-334, MC-336, MC-338, MC-340 and MC-342  
**Source review baseline:** `main@709f29d2d5a301839c9a0b1f5478d15f0a6db84b`  
**Publication:** Proposed via Founder-review PR, not a Product Truth decision  
**Status:** EVIDENCE TRANSCRIPTION / UNADJUDICATED FINDINGS — NOT VERIFIED CORRECTIONS

## Integrity and provenance

This register **transcribes and concisely restates 25 finding IDs from Founder-relayed specialist reports in Mission Control conversations**. Those complete specialist reports have **not** been published as canonical GitHub artifacts. Their original specialist attribution and source pointers are preserved below; this packet does **not** claim independent re-execution, quote-verbatim fidelity, or verification of each finding by a new reviewer. Claude Code must read each cited **canonical source contract and FCTM** at the pinned review baseline, test the reported claim itself, and submit a proposed resolution. If a phrase is ambiguous, return a question; do not treat a summary here as source authority.

Repository comparison anchors:
- FCTM: `communication/missions/SB-P-1.17/claude-code/01-stage2-populated-fctm.md` (`a335b040a3218db3a6fe0036b154ac77a040023b`)
- Inventory: `communication/missions/SB-P-1.17/claude-code/02-stage2-obligation-inventory.md` (`422e99d88bbca5a688e2e0ae75eced0c1b44e249`)
- Blueprint: `docs/phase-1-mission-blueprint/active/SB-P-1.17.md` (`2b8832f791f9f319bfae2a435d2388fc807af6b7`)
- C7: `65ad91b202def9cb4f42b97383bcc58475f59015`
- C13: `4426e8b1f9e856047759bdb03e2f5b83820f8cc0`
- C17: `7943f74a88c2922acc697115f336b68baf7a503a`
- Founder-approved Build Plan: `9dfdd924b81e0eefe8f3b25a0ec2f2b78621cb2a`

**Count:** MC-333 (2), MC-334 (3), MC-336 (4), MC-338 (1), MC-340 (6), MC-342 (9) = **25**. This count is of recorded review questions, **not proven product defects**. Some reported source-to-row gaps remain subject to equivalent-mapping assessment; optional examples and grouped governance rules must not automatically generate new rows.

## Original finding register

| ID | Specialist return | Original source pointer | Existing FCTM / decision reference | Reported evidence and concern | Original disposition / severity |
|---|---|---|---|---|---|
| MC333-C7-01 | MC-333 | C7 §4, explanatory lead-in | 7-§4-1…7 | Source says a reorder suggestion should explain enough context for merchant decision; FCTM separately covers suggestion, examples, and non-fabrication but not the general explanatory lead-in. | Source-to-row traceability discrepancy; proposed equivalent mapping or narrow accounting; medium, blocking pending reconciliation. |
| MC333-C7-02 | MC-333 | C7 §3, supplier-memory introductory wording | 7-§3-2…8 | Source says useful supplier memory may include seven examples; FCTM assigns OBL to individual fields. | Potential optional-example overclassification; unresolved interpretation; medium. |
| MC334-C13-01 | MC-334 | C13 §10, closing-cash introductory paragraph | 13-§10-1…8 | End-of-day/shift closing clarity using available applicable evidence appears in colon-ending lead-in; rows represent seven categories and non-accusation rule. | Source-accounting discrepancy; clarify closing-scope coverage; medium; blocking pending reconciliation. |
| MC334-C13-02 | MC-334 | C13 §4, POS bridge lead-in | 13-§4-2…9; 17:FPDR-2 | Bridge fields qualified by compatibility/authorization; FCTM lists capability categories as OBL. | Conditional POS field classification unresolved; medium; do not imply universal vendor availability. |
| MC334-C13-03 | MC-334 | C13 §8, counter-signal examples | 13-§8-1…7 | Source permits identification of factual counter signals; seven illustrative detector categories marked OBL. | Potential overclassification; conditional on source data; medium. |
| MC336-C17-01 | MC-336 | C17 §4, Ledger/Manager visual surface lead-ins and b1–b15 | 17-§4-1…15 | Possible workspace surfaces labeled mainly OBL/IN SCOPE; source permits adaptive presentation. | Optional-surface classification unresolved; medium; C17 §4 b15 later SB-P-1.18. |
| MC336-C17-02 | MC-336 | C17 §5 p1–p2,b1–b6; §22 n8 | 17-§5-1…8;17-§22-8; C17 §§1,20 | First-class Conversation Workspace and shared-service integration delegated to SB-P-1.13; unclear SB-P-1.17 Manager navigation integration acceptance ownership. | Cross-mission consumer-boundary unresolved; potentially high if integration obligation absent. |
| MC336-C17-03 | MC-336 | C17 §6 summary categories and qualifications | 17-§6-1…8;12:FR-04;12:FR-09 | Six possible financial summaries marked obligations; p2–p3 preserve reliable-data, plan, authorization and anti-fabrication conditions. | Conditional-obligation interpretation unresolved; high if permission leakage, medium for documentary classification. |
| MC336-C17-04 | MC-336 | C17 §15, adaptation lead-in and b1–b6 | 17-§15-2…7 | Optional personalization/adaptation methods marked with runtime targets and IN SCOPE. | Potential optional-example overclassification; low–medium. |
| MC338-BP106-01 | MC-338 | Build Plan §10.6 b12 / line 661 | BP-§10.6-W12;7-§6-2 | SB-P-1.17 operational UDI opening/bulk-stock consumption versus SB-P-1.14 reusable upstream opening-stock foundation. | Ownership/acceptance boundary unresolved; medium; no third import engine. |
| MC340-BP-01 | MC-340 | Build Plan §3 lines 70–86 | BP-§3-1; relevant feature negatives | One grouped row emphasizes habits/human ownership but not separately all thirteen Lighthouse principles. | Grouped mapping sufficiency unresolved; medium. |
| MC340-BP-02 | MC-340 | Build Plan §5.1 lines 151–163 | No dedicated Part E row; SB-P-1.12 gate | Residual anonymous-access issue owned by SB-P-1.12, but dependency-gate visibility for SB-P-1.17 requires confirmation. | Dependency evidence unresolved; medium; no transfer of remediation. |
| MC340-BP-03 | MC-340 | Build Plan §5.3 lines 173–187 | BP-§5.3-1 | Condensed delivery-divergence mapping does not separately enumerate repository, sync, Lovable, Supabase and production verification plus separate external-action authorization. | Verification granularity unresolved; medium. |
| MC340-BP-04 | MC-340 | Build Plan §5.5 lines 199–203 | No dedicated Part E row | Pilot-entry requirements and mission sequencing applicability to SB-P-1.17 acceptance remain uncertain. | Applicability/sequence unresolved; medium. |
| MC340-BP-05 | MC-340 | Build Plan §6.3 lines 245–249 | BP-§6.3-1; SB-P-1.14 storage owner | Postgres structured truth row does not individually cover durable-media lifecycle, provenance and retrieval controls. | Upstream-consumer boundary unresolved; medium. |
| MC340-BP-06 | MC-340 | Build Plan §9 lines 380–388 | BP-§9-6; BP-§9-AL | Assignment lock mapped; scheduling-versus-BUILD NOW/BULD LATER distinction not separately accounted for. | Commitment semantics unresolved; medium. |
| MC342-BP-01 | MC-342 | Build Plan §11 lines 848–850 | Other mission-mapping rows; no dedicated §11 rows | Later SB-P-1.18/1.19/1.20 dependencies lack dedicated §11 rows; alternative mapping sufficiency unproven. | Dependency coverage unresolved. |
| MC342-BP-02 | MC-342 | Build Plan §11 lines 852–854 | BP-§11-7 | Global Product Completion Register update requirement not express in existing grouped attribution row. | Grouped requirement unresolved. |
| MC342-BP-03 | MC-342 | Build Plan §11 line 856 | BP-§9-AL | Evidence/Founder authorization conditions for assigning BUILD NOW to later mission not fully identified by assignment-lock row. | Assignment provenance unresolved. |
| MC342-BP-04 | MC-342 | Build Plan §13 lines 887–890 | BP-§13-1 | Four reasons merge/CI/backend/visual similarity alone are insufficient are grouped under one matrix row. | Evidence granularity unresolved. |
| MC342-BP-05 | MC-342 | Build Plan §13 line 892 | No dedicated Part E mapping identified | Independent verification of protected and denied authority/security paths not separately mapped in Part E. | Assurance obligation unresolved; check Source 18 before adding row. |
| MC342-BP-06 | MC-342 | Build Plan §13 lines 893–894 | BP-§9-AL; BP-§11-7 | Approved deferral and prohibition on erasing earlier accountability are partially mapped. | Deferral governance unresolved. |
| MC342-BP-07 | MC-342 | Build Plan §13 line 899 | BP-§13-1 | Experience Matrix subset of complete Contract Reconciliation and shared FCTM-ID citation obligation insufficiently explicit. | Acceptance traceability unresolved. |
| MC342-BP-08 | MC-342 | Build Plan §14 lines 907–913 | BP-§14-1; Source 18 external | Lifecycle/complete FCTM/independent review rules not fully represented by institutional-intake row. | External-governance coverage unresolved. |
| MC342-BP-09 | MC-342 | Build Plan §14 lines 919–925 | No dedicated Part E mapping; Source 18 external | No-self-approval, CI/merge not acceptance, tool access not authority lack direct Part E accounting. | Governance qualification unresolved. |

## MC-344 Definition Actor response contract

Provide **exactly one response per original finding ID**, grouped for efficiency but never silently merged, with:
1. Verified source locator and source-text meaning, FCTM, inventory and Blueprint mapping.
2. Existing Founder decision and governing-policy references where relevant.
3. A proposal: (a) existing coverage proven sufficient; (b) narrow traceability correction necessary; (c) justified upstream delegation/exclusion; or (d) genuine authority conflict for Mission Control/Founder.
4. Exact supporting evidence; whether Product Truth, build commitment, commercial classification or owning mission would change; independent-review target.
5. Remaining uncertainties. No repository change, no automatic new rows, no Gate 10 PASS.

## Parallel work / hold

Independent Engineering Review Room 2 is separately executing **MC-348** delegated-contract source coverage; its later findings are **not** silently appended to this fixed 25-finding baseline. After Mission Control disposition, any authorized corrections must receive finding-scoped independent re-verification with preserved original evidence.

**GATE 10 NOT PASSED. STAGE 5 OPEN. SECTIONS 1–19 NOT APPROVED. STAGE 6 / EIS / IMPLEMENTATION WITHHELD.**
