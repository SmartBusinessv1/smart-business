# SMART BUSINESS MISSION CONTROL

# Report 1.21 — SB-P-1.11 Lovable Build Prompt Preparation

**Mission ID:** SB-P-1.11

**Mission Name:** Product Catalog & Pricing

**Lifecycle Activity:** Stage 12B — Lovable Build Prompt Preparation

**From:** Claude Code

**To:** Mission Control

**Status:** DRAFT SUBMITTED FOR REVIEW

**Date:** 2026-08-05

---

## 1. Branch Name

`mission/SB-P-1.11-lovable-build-prompt-preparation`

---

## 2. Base `main` SHA

`c69ede8af7f8881c25a85271e442955c5e771abc` — "Authorize SB-P-1.11 Lovable Build Prompt preparation (#76)"

`origin/main` was fetched and fast-forward synchronized to this commit before work began. It introduced `communication/live/instruction1.21.md` on top of the prior base, and also carried the squash-merge of PR #75 (Engineering Contract Version 1.1 lock, `report1.20.md`).

---

## 3. Final Branch Commit SHA

**Substantive commit** — contains the new `lovable-build-prompt.md` and the original version of this report:

`387a19867d671e25087db51849574b66c92ed142` — "Prepare SB-P-1.11 Lovable Build Prompt (Stage 12B)"

Consistent with how this same self-referential limitation (a report cannot contain its own not-yet-computed commit hash) was resolved in `report1.19.md` and `report1.20.md`, this value was recorded by a small, documentation-only follow-up commit on this same branch, immediately after the substantive commit above was pushed and the pull request was opened — never left as a fabricated or permanently unresolved value.

---

## 4. Pull-Request Number and URL

**Pull Request:** #77

**URL:** `https://github.com/SmartBusinessv1/smart-business/pull/77`

---

## 5. Exact Files Changed

- `docs/implementation/SB-P-1.11/lovable-build-prompt.md` (created)
- `communication/live/report1.21.md` (created)

No other file was created, modified, renamed, moved, or deleted.

---

## 6. Quality-Gate Results

```text
python tools/markdown/quality_gate.py docs/implementation/SB-P-1.11/lovable-build-prompt.md

QUALITY GATE PASSED
- 454 total lines; 316 non-empty lines
- 34 headings found with no invalid jumps
- 3 fenced code blocks validated
- 4 Markdown tables validated
- No suspicious escaped Markdown detected
```

`communication/live/report1.21.md` (this file) is additionally validated by the pre-commit Markdown Quality Gate hook at commit time, alongside the new prompt file.

---

## 7. Confirmation That Only Authorized Files Changed

`git status --porcelain` immediately before staging showed only:

```text
?? docs/implementation/SB-P-1.11/lovable-build-prompt.md
```

plus the untracked `communication/live/report1.21.md` created for this report. Exactly the two paths instruction1.21.md §"Authorized Output" permits — no other file was created, modified, renamed, moved, or deleted.

---

## 8. Confirmation That the Locked Blueprint Was Not Modified

`docs/phase-1-mission-blueprint/active/SB-P-1.11.md` was read in full as read-only authoritative input and was not opened for writing at any point in this mission. It does not appear in `git status --porcelain` output. It remains Sections 1–21, LOCKED.

---

## 9. Confirmation That the Locked EIS Was Not Modified

`docs/phase-1-mission-blueprint/implementation/SB-P-1.11-EIS.md` was read in full (Version 2.2, `STATUS: LOCKED`) as read-only authoritative input and was not opened for writing at any point in this mission. It does not appear in `git status --porcelain` output. It remains Version 2.2, LOCKED.

---

## 10. Confirmation That the Locked Engineering Contract Was Not Modified

`docs/implementation/SB-P-1.11/engineering-contract.md` was read in full (Version 1.1, `STATUS: LOCKED — MISSION CONTROL ACCEPTED`) as read-only authoritative input and was not opened for writing at any point in this mission. It does not appear in `git status --porcelain` output. It remains Version 1.1, LOCKED.

---

## 11. Concise Lovable Build Prompt Summary

`docs/implementation/SB-P-1.11/lovable-build-prompt.md` (Version 1.0, `DRAFT — MISSION CONTROL REVIEW REQUIRED`) translates all three locked authorities into a phased, builder-facing instruction set, in 28 sections:

- **Sections 1–2** establish document status and the locked authority hierarchy (Constitution → Source 01/11 → Source 18 → Blueprint → Founder Decisions → EIS → Engineering Contract → this prompt), with an explicit stop-and-report rule for any apparent conflict.
- **Sections 3–6** define exact Build Now scope, the Build Later/Add-on/Separate Product/Reject boundaries, repository-first discovery requirements (grounded in live repository inspection performed during this mission — see Section 13 below), and existing-pattern reuse requirements.
- **Section 7** presents the four-phase sequence (Phase 1 unblocked; Phase 2a permission-engine-gated; Phase 2b unblocked but parallel; Phase 3 conversational-engine-gated) as a table.
- **Sections 8–9** detail the Phase 1 Owner-only runtime boundary and the two shared-system dependency gates.
- **Sections 10–22** cover, in turn, frontend responsibilities, backend responsibilities (including the exact 28-command surface and three-layer identity model), command-only write boundaries, business isolation, catalog/inventory separation, price/tax/cost/D-047/D-068 integrity, same-actor confirmation and AI Assistant boundaries, file scanning/import safeguards, the Pattern A scheduler and its environment-verification gate, employee financial-intelligence restrictions, the standard POS bridge boundary, multilingual UX requirements, and merchant-safe error/rejection/unknown-outcome messaging.
- **Sections 23–26** give an explicit no-go list, required implementation evidence and Builder Completion Report expectations, stop conditions requiring Mission Control clarification, and an explicit reminder that this document does not itself authorize pasting into Lovable or beginning implementation.
- **Section 27** is a traceability table mapping every prompt section to its Blueprint, EIS, and Engineering Contract sections; **Section 28** is the document change log.

Every substantive obligation is either quoted or closely paraphrased from one of the three locked authorities, with an inline citation. No new Product Truth, Founder decision, scope, or engineering behaviour is introduced.

---

## 12. Phased Structure Used

The prompt is organized around the same four-phase sequence the locked Engineering Contract §24 already defines, presented as a table in Section 7 for direct builder reference:

| Phase | Scope | Status in this prompt |
|---|---|---|
| Phase 1 | Core catalog/category data model, Owner-scoped dashboard CRUD/RLS, D-068 safeguard, price/tax/cost history, multilingual exact-match normalization, Pattern A scheduler | No cross-mission blocker; gated only by a future separate implementation authorization |
| Phase 2a | Manager/sale-authorized-Employee permission enforcement | `[SHARED-SYSTEM DEPENDENCY]` — permission engine not yet built |
| Phase 2b | CSV/Excel bulk import and correction queue | No cross-mission blocker; may run parallel to Phase 1 if separately resourced |
| Phase 3 | Guided WhatsApp/voice/photo catalog intent handling | `[SHARED-SYSTEM DEPENDENCY]` — conversational engine not yet built |

Sections 8–9 apply the Phase 1 Owner-only boundary and both dependency gates directly to build instructions (e.g., "do not build a temporary substitute permission engine," "do not build a WhatsApp webhook handler until the shared conversational engine is separately confirmed"), so a builder reading only this document cannot mistake Phase 2a/Phase 3 content for currently-buildable scope.

---

## 13. Traceability Approach

Every prompt section cites the specific Blueprint section, EIS section, and/or Engineering Contract section it derives from inline, and Section 27 provides a consolidated traceability table across all three locked authorities per prompt section. Where content is drawn primarily from the Engineering Contract (which is itself already fully traceable to the Blueprint and EIS via its own §28 traceability table), this prompt cites the Engineering Contract section directly rather than re-deriving the citation chain, to avoid duplicating the Engineering Contract's own traceability work.

Two categories of content required direct repository verification rather than locked-document citation alone, since instruction1.21.md required the prompt to be "explicit about files, routes, components, database boundaries... free of fabricated file paths... where supported by the locked sources or repository discovery" (Section 5, Section 6 of the prompt):

- **Repository-first discovery baseline (Section 5):** confirmed live, during this mission, via direct repository inspection — no `products`/`catalog` route exists under `src/routes/_authenticated/` (only `dashboard.tsx`, `inventory.tsx`, `inventory.index.tsx`, `inventory.$itemId.tsx`, `transactions.tsx`, `route.tsx`); `src/components/authed-header.tsx` is the sole navigation component; no CSV/XLSX dependency exists in `package.json`; no `employees`/`business_members`/permission-flag table exists in `supabase/migrations`; migrations follow the `<UTC-timestamp>_<uuid>.sql` naming convention.
- **Table, function, and role names (Section 11):** every name (e.g. `catalog_pricing_executor`, `assign_or_replace_catalog_inventory_link`, `catalog_channel_confirmation_receipts`) is copied verbatim from the locked EIS §5, §7, or §16, or the locked Engineering Contract's equivalent sections — none is invented by this prompt.

---

## 14. Assumptions Made

None beyond what the three locked authorities already state, and the repository facts confirmed live in Section 13 above. Where a frontend file/route name is not itself specified by any locked authority (the EIS and Engineering Contract are backend-focused; the Blueprint specifies no file paths), Section 6 explicitly recommends following the existing `inventory.tsx`/`inventory.index.tsx`/`inventory.$itemId.tsx` three-file precedent rather than asserting a specific name as locked — phrased as a recommendation to confirm at build time, not a mandate this prompt has no authority to make.

---

## 15. Unresolved Dependencies and Environment Questions Preserved

Preserved exactly as the locked EIS and Engineering Contract leave them, not resolved by this prompt (Section 25 "Stop Conditions"; Section 9 "Shared-System Dependency Gates"):

- Shared permission-engine availability and ownership (gates Phase 2a).
- Shared conversational-engine availability and ownership (gates Phase 3).
- Supabase Scheduled Edge Function / `pg_cron` + `pg_net` availability in the deployed environment (gates Section 18's Pattern A scheduler reliance).
- The seven items in Engineering Contract §29.1 (`pg_trgm` similarity threshold, final CSV/Excel structural limits, final index set, scheduler run interval/lag budget, permission/conversational-engine sequencing ownership, Edge Function/`pg_net` availability — repeated from §24 item 5 and item 7).

---

## 16. Product Truth Change Status

```text
PRODUCT TRUTH CHANGE: NONE
D-001-D-068: UNCHANGED
D-047 TENURE INTERPRETATION: PRESERVED VERBATIM
D-068 ATOMIC SAFEGUARD: PRESERVED VERBATIM
MC-VRF-001 THROUGH MC-VRF-010: NOT REOPENED
MC-EC-001 THROUGH MC-EC-006: NOT REOPENED
FOUNDER DECISION CREATED: NO
FOUNDER DECISION MODIFIED: NO
```

---

## 17. Founder Decision Requirement

None. This mission translates three already-locked authorities into a builder-facing instruction document; it introduces no new product behaviour, scope, or decision requiring Founder authority.

---

## 18. Implementation-Authority Status

```text
PRODUCT BLUEPRINT: LOCKED
EIS VERSION 2.2: LOCKED
ENGINEERING CONTRACT VERSION 1.1: LOCKED
LOVABLE BUILD PROMPT: DRAFT -- MISSION CONTROL REVIEW REQUIRED
VERIFICATION CHECKLIST: NOT AUTHORIZED
FOUNDER LOVABLE BRIEF: NOT AUTHORIZED
PASTE-INTO-LOVABLE AUTHORITY: NONE
IMPLEMENTATION PACKAGE: INCOMPLETE
IMPLEMENTATION: NOT AUTHORIZED
```

This mission does not authorize pasting the prompt into Lovable, the Verification Checklist, the Founder Lovable Brief, or implementation. Only after Mission Control reviews, accepts, and locks this Lovable Build Prompt may a separate instruction authorize preparation of the Verification Checklist.

---

## 19. Final Disposition

```text
LOVABLE BUILD PROMPT DRAFT COMPLETE — MISSION CONTROL REVIEW REQUIRED
```

Submitted through a protected pull request for Mission Control review. Not self-approved or self-merged.
