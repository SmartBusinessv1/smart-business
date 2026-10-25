# SMART BUSINESS MISSION CONTROL — MC-83

## SB-P-1.12 — Controlled Founder Record 05 Blueprint/FCTM Reconciliation DRAFT Instruction

**Status:** DRAFT MC INSTRUCTION — INEFFECTIVE UNTIL FOUNDER/AUTHORIZED HUMAN MERGE AND MC POST-MERGE ACTIVATION  
**Mission:** SB-P-1.12 — Authority, Identity & Product Surface Foundation  
**From:** Smart Business Mission Control  
**To:** Claude Code — MC-02 Definition Actor, documentary reconciliation preparer only  
**Date:** 2026-09-27  
**Paired instruction/report:** `communication/live/instruction1.8.md` → `communication/live/report1.8.md`  
**Baseline:** `main@97776ddd52e04485cf50a7c582e9d33286a67482` (PR #657, MC-82)

## 1. Authority and canonical intake

MC-77 verified Founder Record 05, `communication/missions/SB-P-1.12/founder/05-esc1-founder-product-decision-record.md`, blob `f52b5ebd8a4040d114f2ca8629f1a56bcbb608c2`, as canonical Founder product policy. MC-82 verified the MC-80-corrected reconciliation assessment, `communication/missions/SB-P-1.12/claude-code/31-esc1-founder-record-reconciliation-assessment.md`, blob `0ebc8fbe0656d69c2b75e5920162745e1abe671a`, through merged PR #657. This assessment is EVIDENCE, not a prior disposition or FCTM amendment.

Read canonical Source 18 v1.2, Founder Record 05, full approved Blueprint, FCTM, cited Contract 03/18/20/21/22 and Build Plan, prior Security findings and MC-80/MC-81/MC-82. Use actual current file contents/IDs rather than inventing a registry. Verify clean working tree, remote and THEN-current main before new branch/changes.

## 2. Mission Control dispositions for documentary preparation

**D-1 / G-4 product question:** Founder Record 05 ESC1-1 and §7 ANSWER the previously held question: one person MAY own multiple separate businesses. Record the question as ANSWERED BY FOUNDER in the working reconciliation; it must not remain described as undecided. The existing database's `businesses.owner_id UNIQUE` remains a REPOSITORY FACT and pending design/migration concern, not an approved one-owner-per-person product limitation. Do not rewrite or erase historical MC/readiness/specialist records, and do not assume independently reviewed implementation or full G-4 dependent design closure.

**D-2 / Source 18:** Source 18 T1 is an unanswered product question, T3 a new decision or approved-unresolved Build Plan/guide decision the mission needs, and T7 an actual proposed requirement omission/deferral/pull-forward/simplification/reclassification. FR05 ANSWERS the previously unresolved lifecycle/retention POLICY. The initial working reading is that Contract 22 §20 historical durability and Contract 18's expressly contemplated controlled final deletion can be read together: preserve history up to separately permitted, GOVERNED and lawful deletion, while preventing incidental Owner API and `auth.users ON DELETE CASCADE` loss. Do NOT propose narrowing/omitting/reclassifying `22-§20-2` or Contract 21 §19, and do NOT declare T1 or T7 triggered solely by cross-source interpretation. If exact source wording actually conflicts or a row/assignment must change, STOP, present line-by-line evidence and request a NEW MC/Founder gate instead of choosing T7 automatically. No statutory duration or record-by-record legal classification is decided here.

**D-3 / approved-new-behaviour traceability:** FR05 is approved source for transfer, bilateral approval, former-Owner universal denial, transferred-business independence, other-business identity retention, multiple ownership, Pause and deletion clocks. For SB-P-1.12 ONLY, prepare FCTM/Blueprint traceability for FOUNDATION obligations already allocated to it by FR05 ESC1-8, referencing canonical Founder Record rather than restating source contracts. Candidate T3-1 to T3-9 in `claude-code/31` are ASSESSMENT LABELS, not automatically nine new FCTM rows. Distinguish a newly required row from improved notes on an existing obligation; avoid duplication. Merchant-facing lifecycle, transfer UI/contact/payment and business-specific subscriptions remain SB-P-1.19, not newly allocated to SB-P-1.12. Cross-mission SB-P-1.13/1.15/1.18/1.20 references are dependency/experience only. Any existing FCTM IN SCOPE row stays IN SCOPE and keeps its assigned mission and commercial commitment.

**D-4 / independent review:** This is a Stage 7 finding-scoped DOCUMENTARY PATCH, not acceptance of revised architecture or feasibility. Any new or materially revised security-sensitive Stage 7 claim MUST be independently checked by Security & Permissions Architecture and separately accepted by Mission Control AFTER the draft PR and BEFORE its human merge. MC will issue the independent review work package based on the exact submitted patch; Claude must not generate specialist conclusions or mark Security/ESC-1 accepted.

## 3. Authorized limited draft patch AFTER instruction merge plus MC activation

**Actor:** Claude Code — MC-02 Definition Actor, documentary reconciliation preparer.  
**Work package:** `SB-P-1.12-WP-ESC1-CONTROLLED-RECONCILIATION-DRAFT`.  
**New locked branch:** `mission/SB-P-1.12-esc1-controlled-reconciliation-draft` from THEN-VERIFIED canonical `main`.

**Exactly THREE writable paths:**
1. `docs/phase-1-mission-blueprint/active/SB-P-1.12.md` — limited FR05 G-4/policy traceability, Stage 7 held conclusions, explicit ESC-1 dependencies, mission dependencies, metadata/history, and auditability; no claimed implementation/verification.
2. `communication/missions/SB-P-1.12/claude-code/03-stage2-populated-fctm.md` — minimum source-cited SB-P-1.12 foundation traceability, keeping all pre-existing rows IN SCOPE and preserving existing IDs/order/mission assignments/commitments; if proposing new rows, use approved row-ID conventions and identify precise contract/FR05 anchors and coverage count changes. Do NOT copy SB-P-1.19 merchant-facing requirements into this mission's FCTM.
3. `communication/live/report1.8.md` — paired exact-boundary handover, row additions/edits, source-citation inventory, revised totals and trace evidence, pending Security delta-review points and all holds.

Read-only: every other path, including Founder Records, prior reports/instructions, historical ledgers, `claude-code/28`–`31`, Product Truth source files, Contract 21/22, Source 18, Security findings, application code/SQL/migrations, billing/provider config and production. Stop if the three-file boundary cannot support a faithful reconciliation; do not create a shadow FCTM or silently amend contract language.

Build ONE DRAFT PR. Perform actual row-ID/order/coverage and Markdown/whitespace/secret/precommit checks. Report exact SHA, actual diff/file inventory, workflows, line-level delta map and any source conflict. Do not mark ready, self-approve or self-merge. Do not assert an unreviewed addition or altered row as finally accepted merely because the PR passes CI. Grant expires on MC exact-head disposition, PR closure, `2026-10-18T23:59:59Z`, or revocation.

## 4. Invariants and mandatory holds

- `22-§20-2`: `IN SCOPE` in FCTM, `BLOCKED` in Stage 7; related durability conclusions HELD.
- ESC-1: OPEN T8, including Owner API DELETE and `auth.users ON DELETE CASCADE`. Source 18 trigger/interpretation disposition does NOT eliminate the database risk.
- G-4: Founder policy ANSWERED; structural, security and operational implementation remains gated. Do not claim DB UNIQUE has already been removed or production has been checked.
- G-3, G-5 to G-8, S-2 to S-7 retain their unrelated unresolved aspects; G-6/T4 production UNVERIFIED.
- Deletion design depends on competent legal and retention-policy input, independent security review and later permitted design authority.
- No Stage 8, Blueprint lock, EIS, implementation, SQL/migration, payment-provider, billing or production authority.

**STOP for Mission Control exact-head review and separate independent Security delta review. Do not self-merge.**
