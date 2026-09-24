# SB-P-1.12 — Founder Decision Record and Blueprint Reconciliation Report

**Mission:** `SB-P-1.12` — Authority, Identity & Product Surface Foundation
**Prepared by:** Claude Code, documentary preparation only
**Prepared:** 2026-09-25
**Branch:** `mission/SB-P-1.12-founder-decision-blueprint-reconciliation`, created from `main@3a67c803f27d3790a4a772bf7c563b70b32cca2f`
**Authority:** MC-25 — `communication/live/instruction.md` and `mission-control/12-founder-decision-blueprint-reconciliation-authorization.md`
**Status:** `DRAFT — AWAITING MISSION CONTROL REVIEW`

This report documents a documentary preparation. It approves nothing and is not Stage 7.

## 1. Objective

Transcribe the three Founder-confirmed Stage 6 choices, F-02 Option B, F-03 Option B and F-04(c) Option C, into a durable DRAFT Founder Decision Record. Then apply the minimum source-cited amendments to the already-approved Blueprint Sections 1–19 (version 0.2 to 0.3). No Founder decision was added or reinterpreted.

## 2. Activation verification

| Check | Evidence |
|---|---|
| PR #634 merged | `state MERGED`, `mergedAt 2026-09-24T19:09:02Z`, merge commit `3a67c803f27d3790a4a772bf7c563b70b32cca2f`, final head `d04011d28466ed12c5a9426ff3417418b68a09d4`, base `main` |
| Fresh `origin/main` | Fetched; `origin/main` equals `3a67c803…`; top commit is the MC-25 authorization (#634) |
| PR #632 in main | `76ff1575e1ca3978f363d7a1daef307513376345` is an ancestor of `origin/main` |
| Branch absence and worktree | The locked branch existed neither locally nor on the remote; worktree clean |
| Branch protection | Read-only API: required check `Markdown Quality Gate`, strict, admins enforced, force pushes and deletions disallowed |
| Decision evidence | Founder comment `5819755459` read in full; MC-24 gate record and MC-25 companion authorization read |
| Sources read | `AGENTS.md` (Git Rules, authority order and approval boundaries), `CLAUDE.md`, the live instruction, MC-24, MC-25, the Stage 6 report, the current Blueprint, FCTM and `FPDR-1`–`FPDR-4` record, Contract 21 §§5–6, the Build Plan scenarios and the mission logs |

## 3. Deliverables and changed-path inventory

| Path | Change |
|---|---|
| `communication/missions/SB-P-1.12/founder/04-stage6-builder-founder-decision-record.md` | New, DRAFT |
| `docs/phase-1-mission-blueprint/active/SB-P-1.12.md` | Minimal reconciliation, version 0.2 to 0.3 |
| `communication/missions/SB-P-1.12/claude-code/18-founder-decision-blueprint-reconciliation-report.md` | New (this report) |
| `communication/live/report.md`, `communication/missions/SB-P-1.12/README.md`, `decision-log.md`, `handover-log.md` | DRAFT pointers only |

`communication/live/instruction.md` was read only. No FCTM, `FPDR-1`–`FPDR-4` record, contract, Build Plan, MC record, application, SQL or migration file was touched.

## 4. Decision-by-decision source matching

| Decision | Founder text (comment `5819755459`) | Corroboration | Blueprint locations amended |
|---|---|---|---|
| F-02 Option B | "One person may belong to more than one business, with a distinct role and permissions in each… every action must have an unambiguous active-business context." | MC-24 §2; MC-25 companion table and "Exactly three confirmed Founder choices" | §3, §8.1, §8.2, §8.3, §10, §12, §15, §19 |
| F-03 Option B | "The Owner may explicitly and separately grant a Manager visibility of Reference Cost and/or margin. Neither is granted by default…" | MC-24 §2; MC-25 | §3, §8.2, §8.33, §10, §12, §15, §19 |
| F-04(c) Option C | "When permission is revoked during a multi-row import, preserve rows already successfully committed; stop subsequent unauthorized writes… guide them to complete… without duplicating already uploaded rows." | MC-24 §2; MC-25 | §3, §8.13, §8.24, §10, §12, §15, §19 |

The three quoted decision paragraphs in Founder Record 04 were machine-checked as exact substrings of the fetched comment. All 26 distinct FCTM row IDs cited in the record were checked to exist in the canonical FCTM.

## 5. Exact Blueprint delta (before and after)

Each "before" is the verbatim text at `origin/main` (version 0.2). Each "after" is the clause now in the draft.

**E-1, §3 first bullet (F-02).**
Before: "…within exactly one business, with no ambient cross-business access;"
After: "…within each business it belongs to — a person may hold memberships in more than one business, with a separately scoped role and permission set in each (for example Owner of one business and Manager of another), no cross-business access implied by any of them, and an unambiguous active-business context for every action (Stage 6 Founder Decision F-02, Founder Record 04);"

**E-2, §3 revalidation bullet (F-04(c)).**
Before: "…so a permission revoked between preview and commit blocks the commit (Founder Scenario B);"
After: the same clause, then "…, and a permission revoked part-way through a multi-row import preserves the rows already committed, stops the unauthorized remainder, and tells the merchant what was completed and what remains (Stage 6 Founder Decision F-04(c), supplemental to and separate from Founder Scenario B);"

**E-3, §3 new bullet (F-03).** Added after the server/database-enforcement bullet: "keeps Reference Cost and margin Owner-only by default, each separately and explicitly delegable to an authorized Manager, with delegation of one never delegating the other, enforced at the backend/data layer as well as the UI (Stage 6 Founder Decision F-03);"

**E-4, §8.1 (F-02).** Appended: "`owner_id UNIQUE` is a repository fact about today's single-owner shape, not a product rule limiting a person to one business: per Stage 6 Founder Decision F-02 a person may hold memberships in more than one business, each with its own role and permissions." The existing sentence that no schema is approved Product Truth is retained.

**E-5, §8.2 (F-02, F-03).** Two new paragraphs after the ten-dimension sentence: "Active-business context (Stage 6 Founder Decision F-02)" and "Field-specific delegation of Reference Cost and margin (Stage 6 Founder Decision F-03)". Both state that the mechanism is not fixed, that no new experience anchor is added, and that the current unconditional Reference Cost return is a repository finding, not accepted authorization.

**E-6, §8.3 (F-02).** Appended: "A person's membership or role in one business never grants access to another business's protected data (Stage 6 Founder Decision F-02)."

**E-7, §8.13 (F-04(c)).** The existing Scenario B paragraph is unchanged. A new paragraph follows, headed "Revocation part-way through a multi-row import… supplemental to Founder Scenario B". It states the preserve, stop, disclose-counts, duplicate-safe-completion, no-silent-duplication, no-automatic-continuation and no-mandatory-rollback outcomes. It also says later completion re-checks current authority and that progress accounting, replay protection and the resume or re-submission mechanism are not selected.

**E-8, §8.24 (F-04(c)).** Appended: "Completion of a multi-row import interrupted by revocation must likewise be duplicate-safe (Stage 6 Founder Decision F-04(c); see Section 8.13); the mechanism is not selected here."

**E-9, §8.33 (F-03).** Appended: "Reference Cost and margin are not part of a Manager's bounded product view by default; each requires its own explicit Owner delegation (Stage 6 Founder Decision F-03; see Section 8.2)."

**E-10, §10 (F-02, F-03, F-04(c)).** Three new rules after the existing "no default staff access to Owner-wide financial intelligence" rule, each citing existing row IDs (`21-§5-4`, `17-§18-2`, `17-§21-4`; `21-§5-2`, `21-§6-1`, `21-§6-2`; `21-§17`, `22-§13-4`, `22-§15`).

**E-11, §12.** One new first bullet under Downstream Dependencies: downstream missions consume the active-business context and field-level delegation as part of the one Permission Engine (`21-§22`); where a mission's own multi-row import adopts the revalidation pattern the F-04(c) outcome applies; no assignment or disposition changes.

**E-12, §15.** New subsection "Stage 6 Founder Decisions — supplemental acceptance (not new Founder Runtime Scenarios)" between the Scenarios and "Authority Model and Permission Matrix", with one unchecked acceptance line per decision. It states that these follow the DC-3 scope of proof and that no implementation is claimed.

**E-13, §19 (traceability).** A short "Founder Record 04 references" paragraph was added. The source-reference cell of 12 row groups was extended by suffix only ("; Founder Record 04 (F-0x)"): `21-§4-1`–`21-§4-6`, `21-§5-1`–`21-§5-10`, `21-§6-1`–`21-§6-7`, `21-§17`, `21-§18-1`–`21-§18-6`, `21-§24-1`–`21-§24-12`, `22-§5-1`–`22-§5-9`, `22-§13-1`–`22-§13-5`, `22-§15`, `17-§18-1`/`17-§18-2`, `17-§21-4`, and `BP-§10.1-1`–`BP-§10.1-6`.

**E-14, §18 and §19 record-keeping.** Change Log row 0.3 and four Governance History rows: Stage 5 approval (#630), Stage 6 (#631/#632), MC-25 (#634) and this draft. The dates, SHAs and merge times come from GitHub and the merged authorization records read during activation.

## 6. Confirmations of no change

| Item | Result |
|---|---|
| Founder Scenarios A and B in §15 | Byte-identical lines at `origin/main` and in the draft (checked by machine) |
| §8.13 Scenario B paraphrase | Unchanged; the new text is a separate paragraph |
| FCTM | Not modified; `git diff` against `origin/main` is empty for the file; 373 rows, 228 `IN SCOPE`, 113 `ASSIGNED TO LATER MISSION`, 2 `DELEGATED`, 30 `NOT APPLICABLE`, 0 `ESCALATED` (Disposition field, the seventh table cell, counted with awk) |
| §19 row table | 373 covered, 0 missing, 0 errors (owner-aware check). For all 124 keyed rows, the disposition, assigned mission and Blueprint-location cells are identical to `origin/main`, and each source cell either is identical or begins with the original text |
| `FPDR-1`–`FPDR-4`, contracts, Build Plan | Unmodified |
| §9, §11, §13, §14, §16 | Text identical to `origin/main` |
| §11 later-mission accountability | Unchanged; all 113 `ASSIGNED TO LATER MISSION` and 2 `DELEGATED` rows keep their receiving missions |
| Sections 20–21, experience anchors | None added |

Passages read and deliberately left unchanged because they do not conflict with the decisions: the §7 "Business membership schema" row ("a member of a business with a role"), the §13 DC-1 risk row (still true of `owner_id UNIQUE`), the §16 membership-model bullet and the §6 user-value table.

## 7. Institutional learning intake

Recheck from the Stage 4 baseline `d86e8663…` to `origin/main`: the Phase 1 guide's blob is still `3da3d6d3f9b7fbd89de028ca0191d99484049ba9` (no diff), and `organizational-learning/promotions/**` has no changed files. The 17 `VALIDATED`, `MISSION_SCOPED` promotions and their dispositions are unchanged. `Historical OLE backfill: NOT VERIFIED COMPLETE — dual intake in force` is carried forward unchanged, and no new lesson or conflict was identified.

## 8. T4, security and independence boundary

- T4 stays historically `PRODUCT-AFFECTING`, WS-B's objective open, and production grants, RLS, function and default privileges and migration execution `UNVERIFIED`.
- No security certification is claimed anywhere. The Blueprint text states that no field-level permission or mid-batch behavior is claimed to be implemented.
- The independent Stage 7 Security & Permissions Architecture actor remains unappointed.
- F-06 required-check governance and any read-only production verification of T4 remain separate gates.

## 9. Escalations, observations and assumptions for Mission Control

1. **Derived-value question under F-03 (raised, not resolved, not written into the Blueprint).** The Founder text separates Reference Cost from margin. A Manager who is shown the selling price and is delegated only margin, or only cost, could in principle compute the other value. The decision does not say whether a delegated value may reveal an undelegated one. This is a possible T1 (unresolved product question). It is not answered in the Founder text or the sources, so I recorded no interpretation. It needs a Mission Control ruling before Stage 7 designs field-level enforcement.
2. **Scenario A wording.** Scenario A says "Owner financial surfaces remain denied" and stays verbatim. F-03 lets the Owner delegate Reference Cost and margin separately. I reconciled the two without editing Scenario A: the scenario's bounded view does not include those fields by default, and the supplemental §15 line covers the delegated cases. If Mission Control reads the interaction differently, that is a Mission Control call.
3. **Scope of record-keeping edits.** The instruction lists §3 and the affected §8/§10/§12/§15/§19 passages. I also added the §18 change-log row and §19 Governance History rows. They are traceability records, not product text, and are easy to drop if Mission Control disagrees.
4. **Metadata and Status fields not touched.** The Blueprint Metadata table still carries its Stage 4 draft values (for example Status and Mission Control Review). They were not in the authorized amendment set, so I left them. Refreshing them is a candidate for the canonical crossing.
5. **Founder-comment wording.** MC-25's summary says F-03 is "Owner-only by default"; the Founder comment says "Neither is granted by default". I treated these as the same rule.
6. **Ownership of multiple businesses.** F-02's example is owning A and managing B. The record states it does not decide whether one person may own several businesses.

No new Founder decision was invented, and no T2, T7 or T8 condition arose. No FCTM annotation was needed.

## 10. Verification performed

- Repository inspection of the Blueprint, FCTM, FPDR record, Contract 21, MC-24, MC-25 and the Stage 6 report.
- Machine checks described in §§4, 6 and 7.
- Local Markdown Quality Gate on all authorized Markdown paths; a staged-path review and a secret scan before commit.
- Exact-head CI: recorded on the draft PR and in chat after push, because the head SHA does not exist until commit.

## 11. Recommended next steps

Mission Control reviews the single DRAFT PR for source fidelity, Gate 10 and scope. Mission Control rules on §9 item 1, and only a later human merge makes Founder Record 04 and the reconciled Blueprint canonical. Stage 7, Sections 20–21, Blueprint lock, EIS, implementation and production remain unauthorized.
