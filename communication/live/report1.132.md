# SMART BUSINESS — FOUNDER DECISION-RECORD AMENDMENT RECONCILIATION REPORT

## SB-P-1.11-GC-27 — D-023 Founder Decision-Record Amendment Reconciliation

**Report ID:** report1.132
**Mission:** SB-P-1.11-GC-27 — D-023 Founder Decision-Record Amendment Reconciliation
**Authorized By:** `communication/live/instruction1.123.md`
**Executing Room:** Claude Code / Engineering
**Mode:** GOVERNANCE RECORD CORRECTION ONLY — NO IMPLEMENTATION
**Implementation Authority:** NONE
**Build Lock / Build Mode Authority:** NONE
**Production Authority:** NONE

---

## 1. Exact Starting Merged `main` SHA

`8ed26b0dc52cb1685d6452feda89e3e72ec126b5`

Confirmed via `git rev-parse HEAD` immediately after fast-forward synchronization, matching Mission Control's cited authoritative HEAD exactly. The entry gate in `instruction1.123.md` §2 was verified satisfied on this exact `main`: PR #280 merged (`git log` confirms merge commit `36cc718b1da3161664cebf0b347aab655ad67ce3` as an ancestor of `main`); all three Version 1.2 Stage 12 implementation-package documents confirmed `LOCKED — MISSION CONTROL ACCEPTED`; `communication/live/report1.131.md` present with exact final disposition `SB-P-1.11 IMPLEMENTATION PACKAGE VERSION 1.2 LOCK COMPLETE — MISSION CONTROL VERIFICATION REQUIRED`; `docs/phase-1-mission-blueprint/active/SB-P-1.11-Founder-Workflow-Reconciliation-Record.md` confirmed still recording FWR-003/FWR-004 and classifying D-023 as `AMENDMENT REQUIRED`; no later Founder/Mission Control decision superseding the generated-SKU rule was found.

---

## 2. Branch and Commit Evidence

**Branch:** `mission/SB-P-1.11-GC-27-D-023-Founder-Decision-Record-Amendment-Reconciliation`

The two authorized files (one amended, one new) are committed together in a single commit on this branch. Consistent with every prior report in this mission chain, the exact commit SHA is not recorded inside this report's own body — a commit cannot contain its own resulting hash within its own diff — and is instead reported in the pull request and in this mission's final response to Mission Control.

---

## 3. Exact Files Changed

Exactly the two files `instruction1.123.md` §4 authorizes, and no others:

- `docs/phase-1-mission-blueprint/active/SB-P-1.11-Founder-Product-Decision-Record.md` (D-023 formally amended; D-024 minimum consistency wording aligned; new "Amendment History" section added)
- `communication/live/report1.132.md` (this report, new)

No other file was created, modified, renamed, moved, or deleted. The five recurring CRLF-normalization-only files (`src/lib/catalog-import/classify.ts`, `fields.ts`, `idempotency.ts`, `validate.ts`, `src/routeTree.gen.ts`) show as locally modified with zero substantive diff and were left unstaged, exactly as in every prior mission this session; the untracked `gitleaks-report.json` was left untouched.

---

## 4. Exact Before/After D-023 Wording

**Before (original, 2026-08-04 Stage 1 Founder confirmation):**

> "Build Now includes one optional merchant-defined SKU. SKU does not block product creation."

**After (amended under this mission):**

> "Build Now uses one SKU per Catalog product. Merchant-supplied SKU input is optional: when supplied, Smart Business validates and uses it if permitted; when absent, Smart Business automatically assigns a business-scoped unique tracking SKU. Absence of a merchant-supplied SKU does not block product creation. The same rule applies identically across dashboard/manual creation, Catalog CSV/XLSX import, Inventory-first creation, WhatsApp text, voice, and photo-assisted creation, and future governed creation channels."

The original wording is preserved verbatim in the new "Amendment History" section for historical auditability; it was not deleted, only superseded in the live decision table.

---

## 5. Exact Before/After D-024 Wording

**Before:**

> "A product has at most one optional SKU, unique within its business; different businesses may use the same SKU."

**After (minimum consistency alignment under this mission):**

> "A product has one SKU, unique within its business; different businesses may use the same SKU."

Only the obsolete "at most one optional" phrase — stale once D-023 confirms every product resolves to exactly one SKU (merchant-supplied or generated) — was removed. The uniqueness/business-scope rule ("unique within its business; different businesses may use the same SKU") is preserved unchanged in meaning. No new SKU behavior was added to D-024.

---

## 6. Confirmation — Amendment Matches FWR-003/FWR-004 and Introduces No New Behavior

`instruction1.123.md` §3 records ten preserved elements of the already Founder-approved governing rule (mirroring the Founder Workflow Reconciliation Record's FWR-003 and FWR-004). The amended D-023 and the consistency-aligned D-024 directly express eight of them; the remaining two are preserved existing constraints that this amendment does not duplicate into the decision-record wording, because they were never decision-record-level content in the first place (corrected per MC-GC27-001; see Section 6A below).

**Directly expressed in the amended D-023/D-024:**

| Governing rule point (§3) | Where expressed |
|---|---|
| 1. Merchant-supplied SKU input is optional | D-023 |
| 2. Every newly created Catalog product resolves to one SKU | D-023 ("uses one SKU per Catalog product"); D-024 ("A product has one SKU") |
| 3. Supplied SKU is validated and used if permitted | D-023 |
| 4. Absent SKU → Smart Business generates one business-scoped unique tracking SKU | D-023 |
| 5. Generated SKU must not collide with supplied or generated SKUs in the same business | D-024 ("unique within its business") |
| 6. Different businesses may use the same SKU value | D-024 ("different businesses may use the same SKU") |
| 10. Absence of merchant SKU must not block product creation | D-023 |
| 8. Same canonical rule applies across every creation channel | D-023 (explicit channel-list clause) |

**Preserved existing constraints not duplicated into D-023/D-024:**

| Governing rule point (§3) | Where already governed |
|---|---|
| 7. Generated SKU must not unnecessarily encode sensitive information | Engineering Contract §9A (FWR-003 bullet: "must not encode sensitive information unnecessarily") — locked Version 1.2 package, untouched by this mission |
| 9. SKU identity remains governed by the existing audit/history obligations | Engineering Contract §9A (FWR-003 bullet: "governed by the same audit/history rules as any other identity change"); Founder Product Decision Record D-064 (unchanged by this mission) |

No fact, rule, or behavior beyond this ten-point governing set was introduced. This amendment translates already Founder-approved Product Truth (recorded in the Founder Workflow Reconciliation Record and already carried into the locked Version 1.2 implementation package under GC-24/`instruction1.120.md` and GC-26/`instruction1.122.md`) into the Founder Product Decision Record itself; it does not create new Product Truth. Points 7 and 9 remain fully in force exactly as already governed at the engineering-contract and decision-record level (D-064) — this amendment does not remove, weaken, narrow, or otherwise touch either constraint; it simply does not restate them a second time inside D-023/D-024's own terse wording, consistent with the decision record's existing style of not duplicating engineering-level detail already carried by the locked implementation package (compare, e.g., D-064's own general audit-history obligation, which D-023 has never individually restated for any other identity field).

---

## 6A. Mission Control Review Correction — MC-GC27-001 (Governing-Rule Coverage Overclaim)

Mission Control reviewed PR #282 and returned `CHANGES REQUIRED` with one finding, **MC-GC27-001**: Section 6's original eight-row mapping table was introduced with the claim that the amended D-023/D-024 text "satisfy every point" of `instruction1.123.md` §3's governing rule. `instruction1.123.md` §3 in fact records ten preserved elements, not eight; the original table omitted two of them — point 7 ("SKU generation must not encode sensitive information unnecessarily") and point 9 ("SKU identity remains governed by the existing audit/history obligations") — so the "satisfies every point" claim overstated what the amended decision-record wording itself expresses.

**D-023 and D-024's live decision wording is accepted as correct and was not changed by this correction.** The finding is about this report's own characterization of coverage, not about the amendment itself.

**Correction applied**, pushed to this same branch/PR, no new PR opened:

- Corrected Section 6 to remove the "satisfy every point" claim and to explicitly distinguish the eight governing-rule points directly expressed in the amended D-023/D-024 wording from the two preserved existing constraints (points 7 and 9) that this amendment does not duplicate into the decision-record text.
- Added the missing two points to Section 6, each with a citation to where they are already governed: point 7 and point 9 are both already stated in Engineering Contract §9A's FWR-003 bullet (part of the already-locked Version 1.2 package, untouched by this mission), and point 9 is additionally covered by the Founder Product Decision Record's own existing D-064 general audit-history obligation (also unchanged by this mission).
- **Confirmation:** neither preserved constraint was removed, weakened, or narrowed by GC-27. Engineering Contract §9A (locked, `LOCKED — MISSION CONTROL ACCEPTED`, untouched by this mission per Section 8 above) and Founder Product Decision Record D-064 (byte-identical before and after this mission, confirmed in Section 7 below) both remain exactly as they were before this mission began. This amendment's D-023/D-024 wording simply does not restate them a second time, consistent with the decision record's existing style — no other decision individually restates engineering-level detail the locked package already carries.
- No change was made to D-023, D-024, or any other Founder decision as part of this correction. No change was made to the locked Version 1.2 package, Product Blueprint, EIS, Founder Lovable Brief, code, SQL, Supabase, AWS, Lovable, or repository-hygiene scope. Exactly the same two files remain this PR's changed-file set: the Founder Product Decision Record (unchanged by this correction) and this report (corrected).
- Final disposition (Section 12 below) is unchanged: `SB-P-1.11 D-023 FOUNDER DECISION-RECORD AMENDMENT — COMPLETE — MISSION CONTROL VERIFICATION REQUIRED`.

---

## 7. Confirmation — No Other Founder Decision Changed

`git diff` against the pre-amendment state shows exactly two hunks in the decision table (the D-023 and D-024 rows) plus one new section ("Amendment History") inserted between the existing "Superseded Decisions" and "Source Conflicts and Mission Control Resolutions" sections. D-001 through D-022 and D-025 through D-068 are byte-identical to their pre-amendment state. The "Metadata," "Open Questions," "Superseded Decisions" (still reads "None."), "Source Conflicts and Mission Control Resolutions," and "Final Founder Confirmation" sections are all byte-identical to their pre-amendment state. No decision was reopened, reinterpreted, renumbered, or removed.

---

## 8. Confirmation — Locked Version 1.2 Package Remained Untouched

`git status`/`git diff --stat` confirm zero diff against `docs/implementation/SB-P-1.11/engineering-contract.md`, `lovable-build-prompt.md`, and `verification-checklist.md`. None of `communication/live/report1.126.md` through `report1.131.md` was read for modification or modified. The Product Blueprint (`docs/phase-1-mission-blueprint/active/SB-P-1.11.md`), the locked EIS, and the canonical Lambda Parser EIS records were not touched. `docs/implementation/SB-P-1.11/founder-lovable-brief.md` was not touched. No application code, SQL, migration, RLS policy, Supabase object, AWS/S3/IAM resource, Lovable project, dependency, infrastructure, deployment, or production state was created, modified, or mutated. The locked Version 1.2 package already carried the accepted generated-SKU behavior forward (Engineering Contract §9A, Lovable Build Prompt §14A, Verification Checklist §17A `CHK-FWR-003`–`CHK-FWR-006`); this mission aligns the older Founder decision record to that already-accepted rule and does not alter the package.

---

## 9. Quality-Gate, Secret, and Whitespace Check Results

`python tools/markdown/quality_gate.py` run locally against both touched/created files (`SB-P-1.11-Founder-Product-Decision-Record.md`, `report1.132.md`): `QUALITY GATE PASSED` for both — zero lint issues, zero trailing-whitespace (MD011) issues, zero heading/code-fence/table/escaped-Markdown validation failures, zero unresolved suspicious lines. The pre-commit hook re-ran the same gate automatically at commit time with the same result. Staged diff scanned for secret-pattern strings (API keys, tokens, credentials, private-key headers) — none found. `git diff --cached --check` reported no whitespace issues.

---

## 10. Remaining Residual Governance Items

Per `instruction1.123.md` §8, this mission resolves only the D-023/D-024 textual consistency issue. The following remain outside this mission, unresolved and correctly gated exactly as `report1.130.md` §9 and `communication/live/instruction1.122.md` §8 already classify them:

1. **`docs/implementation/SB-P-1.11/founder-lovable-brief.md` stale twenty-eight-command terminology.** Mandatory before Stage 14 Founder Lovable Brief authorization/use and before implementation execution relying on it. Not touched by this mission.
2. **Repository hygiene remains incomplete.** Mandatory before implementation authorization/Build. Not touched by this mission.
3. **Locked Blueprint remains under the `active/` lifecycle path.** Non-blocking housekeeping. Not touched by this mission.

With this mission's completion (pending Mission Control merge and verification), the D-023 amendment prerequisite identified by `report1.130.md` is satisfied, per `instruction1.123.md` §12. This report does not itself declare that prerequisite closed — Mission Control must separately verify the decision-record diff on current `main` after human review and merge.

---

## 11. Implementation-Authority Status

Unchanged — `NONE`. This mission is a governance-record correction only. It authorizes no application code, SQL, migration, RLS policy, RPC implementation, Edge Function, scheduler worker, AI prompt, Lovable project change, test, infrastructure, deployment, or production activity of any kind. It does not authorize Build Lock, Build Mode, paste-into-Lovable use, Founder Lovable Brief use, deployment, publication, production action, or SB-P-1.11 acceptance.

---

## 12. Final Disposition

`SB-P-1.11 D-023 FOUNDER DECISION-RECORD AMENDMENT — COMPLETE — MISSION CONTROL VERIFICATION REQUIRED`

D-023 is formally amended to the already Founder-approved FWR-003/FWR-004 generated-SKU rule; D-024 received only the minimum consistency wording alignment authorized, with its uniqueness/business-scope rule preserved unchanged in meaning. The original D-023 wording is preserved verbatim in a new append-only "Amendment History" section, together with the required audit note confirming the amendment's authority, scope, and boundaries. No other Founder decision was reopened. The locked Version 1.2 implementation package, Product Blueprint, EIS, Lambda Parser EIS, Founder Lovable Brief, and every other excluded file remain untouched. No implementation authority was granted. This report and the accompanying decision-record amendment grant no implementation, Build Lock, Build Mode, deployment, publication, production, or SB-P-1.11 acceptance authority. This PR requires human Mission Control review and merge; only after that may Mission Control separately verify the decision-record diff and determine whether the D-023 amendment prerequisite is satisfied.
