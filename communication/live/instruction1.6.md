# SMART BUSINESS MISSION CONTROL — MC-74

## SB-P-1.12 — Final ESC-1 Founder Product Decision Record Publication Preparation

**Status:** DRAFT INSTRUCTION — NOT EFFECTIVE UNTIL HUMAN MERGE AND MISSION CONTROL POST-MERGE VERIFICATION  
**From:** Smart Business Mission Control  
**To:** Claude Code — MC-02-appointed Definition Actor, documentary preparer only  
**Date:** 2026-09-27  
**Mission:** SB-P-1.12 — Authority, Identity & Product Surface Foundation  
**Numbered pair:** `communication/live/instruction1.6.md` → `communication/live/report1.6.md`  
**Baseline:** `main@e5490d10f3e4d0e0c261e37887ea7c36d16a8d41` (PR #653, MC-73)

## 1. Authority and canonical source

The Founder directly confirmed ESC1-R1–R7 subject to Q-A/Q-B/Q-C, explicitly affirmed G-4 multiple business ownership, and approved the SB-P-1.12 foundations / SB-P-1.19 merchant-facing experience responsibility split. The Founder subsequently clarified that Pause freezes unused paid days (40 before a Pause remains 40 after up to 90 paused days). These complete original Founder words are canonically preserved in merged `communication/live/instruction1.3.md`, `instruction1.4.md`, and `instruction1.5.md`.

MC-72 accepted the `claude-code/30` Founder-confirmed FPDR candidate for documentary content, and MC-73 independently verified PR #653 human-merged its exact accepted head `efdfb9f3136c94a82fdab57bb9310db6cdc12fd7` to `main@e5490d10f3e4d0e0c261e37887ea7c36d16a8d41`. Candidate path: `communication/missions/SB-P-1.12/claude-code/30-esc1-founder-confirmed-fpdr-candidate.md`, canonical blob `9fbc6d35b8a83bc397225c9caab9adf297c18f18`; paired `report1.5.md` blob `70a8801a6bbafd3ce16aeb6b1c7df5f92d8a3012`. Both are HISTORICAL candidate/handover evidence and MUST NOT be edited or retrospectively relabelled.

This work package is the separate, repository-first FINAL FOUNDER RECORD PUBLICATION PREPARATION step; it is not permission to mutate governance/architecture or bypass the Founder human publication/merge gate.

## 2. Objective

Prepare a NEW final Founder Product Decision Record that faithfully carries the confirmed CP-1 through CP-8 product directions from `claude-code/30` and the underlying original Founder statements into:

`communication/missions/SB-P-1.12/founder/05-esc1-founder-product-decision-record.md`

Check existing Founder Record 04 and neighboring naming conventions before creating this path; if a file already exists or canonical naming conflicts with approved structure, STOP and report rather than overwrite or invent a new path.

The record must state accurately:
- One personal Smart Business identity can own several independent businesses and hold separate Manager/staff memberships elsewhere; this is the affirmative Founder answer to previously held G-4, but no registry or FCTM is self-edited.
- Pause (maximum 90 days) is temporary and FREEZES unused paid entitlement; 40 paid days before Pause means 40 unused paid days after full/shorter Pause. At maximum Pause expiry, return to normal subscription status, NOT deletion.
- Subscription cancellation protects the remaining paid period; its distinct 90-day period starts at subscription end.
- Stop=Delete: either Delete Now (no elective 90-day wait, export offered not mandatory) or Delete after 90 days (consume remaining paid days FIRST, then separate 90 free reconsideration days, so 40+90=day 130 deletion eligibility).
- Bilateral verified approval transfers business Owner authority; the outgoing Owner loses ALL continuing access across channels, APIs, exports/files and stale/delegated paths; historic audit attribution continues without retaining former-Owner read privileges.
- Transfer is NOT deletion; later deletion of the outgoing Owner's identity MUST NOT affect the transferred business, its new Owner, staff, history, subscription or operating status.
- After a person's last OWNED business is permissibly deleted, personal identity is deleted only when obligations are satisfied AND no other authorized business membership remains. If authorized membership in another person's business remains, retain the identity without treating the person as that business's Owner.
- Business financial, authority and audit records remain intact until permitted governed deletion; staff removal or incidental account changes must not erase them.
- SB-P-1.12 is foundational authority/history/integrity/transfer-denial work; SB-P-1.19 is merchant-facing lifecycle/transfer/contact/payment experience. Existing FCTM rows stay as-is pending separately authorized reconciliation.

The record must distinguish each 90-day trigger and clearly identify unresolved provider/payment operations, legal retention, controlled compatibility classification T1/T7 for `22-§20-2`, and the T3-new-behavior / T8-security findings. It must NOT claim the currently committed database already protects against cascading deletion or that production was checked.

## 3. Deliberately unchanged gates

`22-§20-2` remains `BLOCKED` and `IN SCOPE`; related history-durability conclusions stay held; ESC-1 is still OPEN T8, including Owner API deletion and `auth.users ON DELETE CASCADE`. G-4 is ANSWERED BY FOUNDER but downstream registry/Blueprint/FCTM reconciliation is still pending. G-3/G-5–G-8, S-2–S-7, G-6/T4 production verification and separate independent Security design review remain as previously dispositioned. The final record's human merge does not alone close ESC-1 or authorize implementation.

Keep the rotating staff and proactive business-labelled shift/delivery notifications as a distinctly labelled CROSS-MISSION EXPERIENCE TRACEABILITY NOTE (SB-P-1.15 notifications; SB-P-1.18 roster/delivery; SB-P-1.13 in-app conversation; SB-P-1.20 WhatsApp adapter) without changing scopes in this work package.

## 4. Exact bounded work authorization — effective after human merge and MC activation ONLY

**Actor:** Claude Code, MC-02 Definition Actor.  
**Work package:** `SB-P-1.12-WP-ESC1-FINAL-FOUNDER-RECORD-PUBLICATION`.  
**Repository:** `SmartBusinessv1/smart-business`.  
**New locked branch:** `mission/SB-P-1.12-esc1-final-founder-record-publication` from THEN-VERIFIED canonical main.

**Exactly TWO new writable paths:**
1. `communication/missions/SB-P-1.12/founder/05-esc1-founder-product-decision-record.md` — final Founder record for Mission Control review and explicit Founder human publication merge; **not independently approved/published by Claude**.
2. `communication/live/report1.6.md` — paired report.

Read canonical Founder inputs, candidate and only relevant governance; verify branch/path absence, clean tree and current main; create branch; edit/stage ONLY these two files; run Markdown/whitespace/secret/precommit checks; commit with truthful standard `Co-Authored-By` trailer; push without force; open ONE DRAFT PR; provide exact-head, file inventory, CI, blob identities and a concise evidence-and-holds handover. No self-approval, mark-ready, self-merge, generic staging, rebase/force push, unapproved conflict resolution or broader file edits. Grant expires upon MC exact-head decision, PR closure, `2026-10-18T23:59:59Z`, or explicit revocation, whichever first.

Do NOT edit earlier `instruction1.3`–`1.5`, earlier reports, `claude-code/28`–`30`, Founder Records 01–04, Blueprint, FCTM, contract sources, mission logs, security findings, README, application, SQL, migrations, billing/provider settings, CI or live data. If content cannot be carried faithfully within these boundaries, STOP and report.

## 5. Stop / release

MC must independently review the new DRAFT PR at exact head. Only Founder or authorized HUMAN may merge the final Founder Record PR under branch protection. After that merge MC independently verifies the canonical Founder Record and separately authorizes reconciliation and independent security design. **NO STAGE 8, BLUEPRINT LOCK, EIS, IMPLEMENTATION, PAYMENT-PROVIDER, MIGRATION OR PRODUCTION AUTHORITY.**
