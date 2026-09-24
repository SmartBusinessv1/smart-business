# SB-P-1.12 — Stage 6 Builder Review Founder Decision Record (DRAFT)

**Mission:** SB-P-1.12 — Authority, Identity & Product Surface Foundation
**Stage:** Source 18 v1.2, Stage 6 follow-on — Founder decisions on Builder Review findings F-02, F-03 and F-04(c)
**Status:** `DRAFT — NOT EFFECTIVE UNTIL MISSION CONTROL REVIEW AND FOUNDER/HUMAN MERGE OF THIS PULL REQUEST`
**Prepared by:** Claude Code, documentary preparation only (no approval authority)
**Authority for this preparation:** `communication/live/instruction.md` (MC-25) and `communication/missions/SB-P-1.12/mission-control/12-founder-decision-blueprint-reconciliation-authorization.md`, effective on human merge of PR #634 (final PR head `d04011d28466ed12c5a9426ff3417418b68a09d4`, merged `2026-09-24T19:09:02Z`, verified `main@3a67c803f27d3790a4a772bf7c563b70b32cca2f`).
**Stage 6 provenance:** Builder Review report `claude-code/16-stage6-builder-review-report.md` (findings F-01–F-11), canonical through PR #632 (human merge `2026-09-24T18:37:11Z`, final reviewed head `945ec8f330900f5902493eee9771406f90ceb83d`, `main@76ff1575e1ca3978f363d7a1daef307513376345`) and the Mission Control gate record `mission-control/11-stage6-builder-review-gate-and-founder-decision-handover.md` (MC-24).
**Decision provenance:** Founder confirmation in Mission Control dialogue on 2026-09-24, recorded in full in [PR #632 comment `5819755459`](https://github.com/SmartBusinessv1/smart-business/pull/632#issuecomment-5819755459) (posted `2026-09-24T18:22:22Z`). That comment supersedes the earlier partial [clarification `5819236703`](https://github.com/SmartBusinessv1/smart-business/pull/632#issuecomment-5819236703) for the exact wording of all three choices, as MC-24 §2 records. No other transcript is cited or invented.

## What this document is, and is not

This is a **DRAFT** durable record. It transcribes three product choices the Founder already made, by reference to the actual PR comment, so they can be reviewed and, on human merge, become canonical. It makes no decision of its own.

It is **not** a Founder sign-off on this document or on the reconciled Blueprint, not a Stage 7 authorization, and not a claim that any behavior below is implemented. The "Option B" and "Option C" labels refer to the option sets Mission Control put to the Founder in dialogue. This record states only the option chosen and its meaning; it does not restate, and cannot vouch for, the options not chosen.

F-01 and F-05 through F-11 are Stage 6 recommendations, **not Founder product decisions**, and are not recorded here.

## Founder Decision F-02 — Option B: multiple business memberships, strictly isolated

**Stage 6 finding:** F-02 (Builder Review report §5). Approved Blueprint §3 said every person has a role "within exactly one business"; no Product Truth source supports that phrase.

**Affected FCTM rows (read-only, unchanged):** `21-§4-1`–`21-§4-6`, `21-§5-1`–`21-§5-10` (in particular `21-§5-2`, business membership), `21-§6-1`–`21-§6-7`, `22-§5-1`–`22-§5-9`, `BP-§10.1-1`–`BP-§10.1-6`.

**Decision (Founder's words as recorded in comment `5819755459`):** "One person **may belong to more than one business**, with a distinct role and permissions in each. For example, one person may own Business A and manage Business B. Access in one business never implies access to another, and **every action must have an unambiguous active-business context**."

**Product meaning:**

- A person may hold memberships in more than one business, each with a separately scoped role and permission set.
- No access in one business implies access in another; there is no ambient cross-business access.
- Every action has one unambiguous active-business context.
- The existing `businesses.owner_id UNIQUE` shape is a repository fact, not a product rule limiting a person to one business (MC-24 §2).

**What this decision does not do:**

- It does not approve a membership schema, table design, active-business selection mechanism, switcher or any other merchant-facing feature; those are future engineering work.
- It does not change any FCTM disposition, assigned mission, build commitment or commercial class.
- It does not decide whether a person may own more than one business. The Founder's example is one person owning Business A and managing Business B.

## Founder Decision F-03 — Option B: Reference Cost and margin individually delegable

**Stage 6 finding:** F-03 (Builder Review report §5). No approved source classified Reference Cost or margin as Owner-only or delegable, and the current product-read path returns Reference Cost unconditionally.

**Affected FCTM rows (read-only, unchanged):** `21-§4-2`, `21-§5-4`, `21-§24-3` (Founder Scenario A), `17-§18-2`, `17-§21-4`, `BP-§10.1-3`, `BP-§10.1-4`.

**Decision (Founder's words as recorded in comment `5819755459`):** "The Owner may **explicitly and separately** grant a Manager visibility of Reference Cost and/or margin. Neither is granted by default; permission to view one does not imply permission to view the other, and a general product read or bounded Manager view does not imply either. Preserve Owner financial-intelligence restrictions, backend/data-layer enforcement, and Scenario A. Existing unconditional cost return is a future implementation/verification finding, **not** proof that it is acceptable."

**Product meaning:**

- Reference Cost and margin are Owner-only by default.
- Each is separately and explicitly delegable to an authorized Manager. Delegating one never delegates the other.
- A generic product read and a bounded Manager product view imply neither.
- The backend/data layer and the UI both enforce the restriction.
- No Employee visibility is inferred.
- Founder Scenario A remains verbatim. Its bounded product-price-inventory view does not by itself include Reference Cost or margin.

**What this decision does not do:**

- It does not accept the current unconditional Reference Cost return as authorization, and it does not claim any field-level permission is implemented.
- It does not define how margin is computed or displayed, or whether a value derived from delegated fields may reveal an undelegated one. That question is raised to Mission Control in the reconciliation report and is not answered here.
- It does not create a commercial classification, pricing or new merchant-facing feature.

## Founder Decision F-04(c) — Option C: preserve committed rows and support duplicate-safe completion

**Stage 6 finding:** F-04 point (c) (Builder Review report §5). Approved Founder Scenario B covers revocation before commit only; the merchant-visible outcome of revocation during a multi-row import was undefined.

**Affected FCTM rows (read-only, unchanged):** `21-§17`, `21-§18-1`–`21-§18-6`, `21-§24-8` (Founder Scenario B), `22-§13-1`–`22-§13-5`, `22-§15`, `BP-§10.1-5`.

**Decision (Founder's words as recorded in comment `5819755459`):** "When permission is revoked **during** a multi-row import, preserve rows already successfully committed; stop subsequent unauthorized writes. Inform the merchant **how many rows were successfully uploaded and how many remain**, and guide them to complete the remaining rows **without duplicating already uploaded rows**. This is the Founder-selected merchant-visible outcome, not a mandate to automatically resume work using the revoked actor's authority. Any completion must pass current actor/business permission checks. Engineering can propose the mechanics (progress accounting, replay protection, recovery/resume or re-submission) only in a later authorized stage without diluting this outcome."

**Product meaning:**

- Rows already successfully committed are preserved, and the unauthorized remainder is stopped.
- The merchant is told how many rows were completed and how many remain.
- The merchant is guided to complete the remainder without duplicating committed rows.
- There is no silent duplication, no automatic continuation under the revoked actor's authority and no mandatory rollback.
- Any later completion re-checks the current actor's and business's authority.
- Founder Scenario B's pre-commit denial wording remains verbatim; this outcome is supplemental to it.

**What this decision does not do:**

- It does not select progress accounting, replay protection, resume, re-submission, atomic rollback or any other mechanism.
- It does not claim that any mid-batch behavior is implemented today.

## Acceptance consequences

The Blueprint's `IN SCOPE` obligations for the rows above now include the three outcomes as supplemental acceptance lines (Blueprint Section 15, version 0.3). They remain permission-mechanics obligations under the DC-3 scope of proof. Founder Runtime Verification Scenarios A and B are unchanged.

## What remains unchanged

- `FPDR-1` through `FPDR-4` are unchanged (`founder/03-stage3-founder-product-decision-record.md`).
- The canonical FCTM is unchanged: 373 rows, 228 `IN SCOPE`, 113 `ASSIGNED TO LATER MISSION`, 2 `DELEGATED`, 30 `NOT APPLICABLE`, 0 `ESCALATED`.
- T4 remains historically `PRODUCT-AFFECTING`. Production grants, RLS, function and default privileges, and migration execution remain `UNVERIFIED`. This record certifies no security state.
- The independent Stage 7 Security & Permissions Architecture actor remains unappointed.
- F-06 required-check governance and any read-only production verification of T4 remain separate gates.
- No Stage 7, Sections 20–21, Blueprint lock, EIS, implementation, code, SQL, migration, production action, delivery or publication is authorized by this record.

## Effectiveness

This record is **DRAFT** and has no effect until Mission Control reviews the pull request that carries it and the Founder or an authorized maintainer human-merges that pull request to canonical `main`. Until then the canonical record remains the Stage 6 gate record (MC-24) plus the Founder's comment, and Blueprint Sections 1–19 stand as approved at version 0.2.
