# SB-P-1.17 — MC-464A Stage 10 SA-04 Documentary POS Integration Review Handoff

**Status:** PROPOSED — effective ONLY following Founder human merge and Mission Control post-merge verification.  
**Mission:** SB-P-1.17 — Manager Operations; Source 18 v1.2 Stage 10.  
**Reviewer:** POS Integration & Interoperability Assurance specialist room; AI-assisted documentary technical assessor only.  
**Baseline:** `main@79f85e948a95964b692418af9d098a18870691fe` (PR #1034 merged).  
**Review target:** `docs/phase-1-mission-blueprint/implementation/SB-P-1.17-EIS.md`, immutable blob `8280967f2805cfed17778da3fc76c90b2f2f5ead`.  
**Locked Blueprint:** blob `bc4615f84959a79e6b242f622aae928901fbe959`. **FCTM:** blob `cb79088d3fa59f8b3226fd9d11ff9c9573666670`.  
**Authority:** MC-432, MC-463, MC-464 and Source 18; no implementation permission.

## Precondition and independence

The eligibility report `communication/missions/SB-P-1.17/specialists/10-sa04-reviewer-eligibility-response.md`, blob `1a2737b2dfecd2fef85916382c5413af7729a2f5`, was accepted with limitations. Reviewer is distinct from the EIS author but previously performed Stage 7 SA-04 assurance and is not clean-room independent. No human POS-vendor certification, qualified independent POS practitioner attestation, actual vendor sandbox, merchant deployment, transaction or DPOS real-source evidence was established. Do not equate documentary review with such evidence.

Verify current main and immutable EIS identity before beginning. Read existing accepted SA-01, SA-03 and SA-05 reports, locked Blueprint/FCTM, Source 18 and approved POS/financial source contracts. Prior Stage 7 or specialist opinions are inputs to test, not truths to affirm.

## Substantive scope — documentary only

1. **MC410-R01 / POS intake authority:** distinguish provider signature/source trust from merchant-authorized commit; maintain four principal taxonomy, scoped staff permission, server-derived tenant binding, no fifth POS principal or service_role merchant bypass.
2. **MC410-R02 / trusted but inventory-unmapped financial records:** source trust does not positively authorize immediate Ledger posting. Preserve HOLD-16, explicit pending/exception routing and reconciliation; do not invent revenue posting timing.
3. **MC410-R04A / reversal:** original sale, void, refund, correction and item/stock adjustment semantics; one governed atomic financial/inventory correction, duplicate and out-of-order replay, partial failures and audit attribution; HOLD-18 remains.
4. **MC410-R04B / closing:** actual received source sets, cutoffs, completeness flags, missing-source and late-arrival handling, non-zero-fill daily closing; HOLD-19 remains.
5. **POS/manual overlap:** EIS17-TXN-08 identity collision and duplicate-resolution semantics, no automatic merge/suppression, one governed Ledger writer, stock and revenue proof with authenticated human decisions where required.
6. **Provider interface:** adapters as external integration layers, normalized events, webhook integrity, idempotency, retry ordering, unknown outcomes, nonfunctional capabilities and source dossier. No custom POS modifications inside the core product. Distinguish generic specifications from provider-specific facts.
7. **DPOS / INV evidence:** distinguish synthetic fixture, vendor dossier, qualified real-source validation and Founder Runtime Verification B. Explicitly list unproven provider/real-environment assertions and exit criteria without claiming certification.
8. **Specialist cross-check:** assess SA-01 F01–F04, SA-03 F01–F07, SA-05 F01–F09 as applicable. Preserve EQ17-13 atomicity hold, POS/manual Ledger authority, EIS17-SEC-02 command boundary and supplier balance SUP-06 documentary T8 conflict. Do not close another specialist's findings by implication.

## Required output

A full finding-scoped SA-04 Stage 10 documentary report with review manifest and source SHAs, EIS17-* traceability, coverage matrix, precise failure scenarios, severity, evidence confidence, normative versus recommendation distinction, minimal suggested EIS refinement, accountable owner, explicit holds, T1–T8 classification (ESTABLISHED vs WATCH vs not triggered), unmet DPOS evidence requirements, cross-specialist reconciliation and reviewer independence/professional limitations. An absence of provider evidence is an evidence gap, not proof a provider is unusable. State exact limits of read-only work. Provide a concise Mission Control disposition and STOP.

## Authorized GitHub write/return boundary

If GitHub repository write is available, create branch `mission/SB-P-1.17-sa04-stage10-pos-documentary-review` from newly verified main. Create `communication/missions/SB-P-1.17/specialists/11-stage10-sa04-documentary-pos-integration-review.md`. Before modifying `communication/live/report.md`, preserve original bytes in a new `communication/missions/SB-P-1.17/communication-preservation/stage10-sa04-substantive-response-predecessor.snapshot.md`. Update only `communication/live/report.md` as a return pointer. These exactly three files are permitted; commit and open DRAFT PR to main; never self-merge. If unable to publish, submit full report to Mission Control for separately governed publication. No edits to live instruction, EIS, Blueprint, FCTM, code, SQL, migration, configuration or source contracts.

## Non-authorizations and speed

No POS sandbox/vendor credentials or connections, no provider execution or merchant data, no SQL/database changes, migrations, implementation, deployment, EIS approval/lock or Stage 11. Real-source DPOS and independent qualified POS assurance remain open and require separate arrangements. Source 18 and Founder merge control remain in force. Reuse prior verified findings; deliver only incremental POS observations to shorten the path to implementation readiness. The acceleration paper is a non-governing proposal, not an authorization or reason to relax a hold.

**STOP FOR MISSION CONTROL SA-04 SUBSTANTIVE REVIEW DISPOSITION.**
