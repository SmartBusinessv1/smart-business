# SMART BUSINESS MISSION CONTROL — MC-78

## SB-P-1.12 — Founder Record 05 Reconciliation Assessment Instruction

**Status:** DRAFT INSTRUCTION — NOT EFFECTIVE BEFORE HUMAN MERGE AND MISSION CONTROL CANONICAL VERIFICATION  
**Mission:** SB-P-1.12 — Authority, Identity & Product Surface Foundation  
**From:** Smart Business Mission Control  
**To:** Claude Code — MC-02-appointed Definition Actor, documentary fact-finding only  
**Date:** 2026-09-27  
**Numbered pair:** `communication/live/instruction1.7.md` → `communication/live/report1.7.md`  
**Baseline:** `main@e86159da6c84f3ae09ad0c78308b3d0acb28b0d4` (#655, MC-77)

## 1. Canonical Founder authority and scope

MC-77 verified PR #655 human-merged the final ESC-1 Founder Product Decision Record to `main@e86159da6c84f3ae09ad0c78308b3d0acb28b0d4`. Canonical Founder Record 05:
`communication/missions/SB-P-1.12/founder/05-esc1-founder-product-decision-record.md`,
blob `f52b5ebd8a4040d114f2ca8629f1a56bcbb608c2`.

Founder Record 05 is EFFECTIVE product-policy authority, but not a design, row-classification, security acceptance, payment-provider, migration or production authorization. It governs:
- one personal identity owning several independent businesses and holding separately scoped memberships (G-4 Founder answer);
- Pause maximum 90 days, unused paid days FROZEN (40 before = 40 after), return to normal status without deletion;
- cancellation protecting paid time, followed by a distinct 90-day period from subscription end;
- Stop=Delete Now, or after remaining paid days plus 90 no-new-charge days (40+90=day130);
- dual-approved business transfer, zero former-Owner continuing access, and transferred business unaffected by subsequent former-Owner identity deletion;
- identity preserved while other authorized business memberships exist;
- governed, law-limited history deletion; SB-P-1.12 foundations and SB-P-1.19 merchant-facing experience split.

ESC-1 remains OPEN T8, `22-§20-2` BLOCKED and IN SCOPE, related durability conclusions held. `auth.users ON DELETE CASCADE` and the Owner business API DELETE path are unverified safety problems in repository DDL. G-6/T4 production remains UNVERIFIED. These are not silently resolved by publishing Founder Record 05.

## 2. Objective: evidence-based delta before mutations

Perform a narrowly bounded, repository-first assessment of WHAT needs reconciliation, without editing the Blueprint, FCTM, contracts, Product Truth registry, other Founder Records, code or live infrastructure. Use Source 18 v1.2 governance and real canonical source text as authority, not summaries alone.

Prepare an exact-references delta table for:
1. G-4 multi-business ownership: the specific currently held registry entry, existing one-owner/one-business assumptions, Blueprint/FCTM references and mission ownership, with the Founder Record 05 decision citation.
2. `22-§20-2` and related durability rows (`21-§19-1`–`21-§19-8`, `22-§29-12`, `22-§14-5`, `BP-§7-1`): compare original Contract 22 §20 and Contract 21 §19 wording to Founder-approved GOVERNED deletion, preserve the requirement's IN SCOPE commitment, and present the evidence required for Mission Control to classify T1 versus T7. Do not prejudge classification. Clarify that `BLOCKED` reflects unresolved safe-durability architecture and that lawful intentional deletion differs from incidental cascade loss.
3. Source 18 T3 new Founder-approved behaviour missing from approved source/FCTM: transfer, bilateral verified approvals, former-Owner zero access, transferred-business survival, third-party membership identity retention/deletion conditions, multiple ownership, paid-time-preserving Pause and each distinct lifecycle clock. Identify each source citation, candidate row/obligation and owning mission under the already approved SB-P-1.12/SB-P-1.19 allocation; never silently move existing rows. Separate SB-P-1.13, SB-P-1.15, SB-P-1.18 and SB-P-1.20 dependency/experience notes from newly authorized SB-P-1.12 build scope.
4. Existing Blueprint Sections 1–21 and the FCTM: enumerate precise sections, IDs, current disposition and what would require amendment or independent review. Preserve every currently IN SCOPE row, and identify source/contract conflicts without rewriting them.
5. The deletion and identity architecture question to refer to independent Security & Permissions Architecture: Owner API DELETE, `auth.users ON DELETE CASCADE`, financial/audit durability, transfer/denial across channels, business isolation and other-business membership continuity. State evidence classes: repository DDL finding versus unverified runtime/production. Do not assert a specific SQL fix.

Output a REVIEWABLE RECONCILIATION ASSESSMENT/PROPOSAL and open questions (only if genuinely unresolved by Founder Record 05); include a separate Mission Control decision sheet specifying exactly what can be classified administratively and what Source 18 requires another Founder or independent specialist decision to change. Do not create a second FCTM, and do not reproduce source requirement text in it in place of canonical citations.

## 3. Strict execution authorization AFTER human merge and MC activation

**Actor:** Claude Code — MC-02 Definition Actor, evidence assessor and documentary preparer ONLY.  
**Work package:** `SB-P-1.12-WP-ESC1-RECONCILIATION-ASSESSMENT`.  
**New locked branch:** `mission/SB-P-1.12-esc1-reconciliation-assessment`, created from THEN-VERIFIED canonical `main`.  
**Exactly two NEW writable paths:**
- `communication/missions/SB-P-1.12/claude-code/31-esc1-founder-record-reconciliation-assessment.md`
- `communication/live/report1.7.md`

Verify GitHub remote, clean working tree, canonical main/head, branch and both paths unused; read relevant canonical Founder Record, Source 18, Contract 21/22, Build Plan, Product Truth registry, FCTM, Blueprint and relevant Security reports. Stop rather than speculate if any necessary source is absent or inaccessible. Stage ONLY the two paths, run applicable deterministic quality and precommit checks, push without force, open ONE DRAFT PR. Return exact head, CI, actual changed files, source references and paired handover. Do not self-approve, mark ready or merge. Permission expires upon MC exact-head disposition, PR closure, `2026-10-18T23:59:59Z`, or revocation.

## 4. Hard stops

No edits to existing `instruction1.*`, prior reports, `claude-code/28`–`30`, Founder Records, Blueprint, FCTM, contracts, G-4 registry, source set or governance, code/SQL/migrations, Security report, CI, provider billing or production. No G-4 self-closure, no T1/T7 self-classification, no T3 row acceptance or mission reassignment by inference, no reopening decided Founder product policy. Actual change instructions, independent security design, and ESC-1 disposition each require separately scoped authority.

**NO STAGE 8, BLUEPRINT LOCK, EIS, IMPLEMENTATION, MIGRATION, PAYMENT-PROVIDER OR PRODUCTION AUTHORITY.**
