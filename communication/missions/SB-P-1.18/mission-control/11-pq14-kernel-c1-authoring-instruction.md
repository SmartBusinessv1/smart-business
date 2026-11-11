# MC40 — SB-P-1.18 PQ-14: Exceptional SB-P-1.12 C-1 EIS Authoring Instruction

**Record identity:** MC40-S18-PQ14-C1-GRANT-01  
**Status:** DRAFT — NOT AUTHORIZED — NOT EFFECTIVE ON THIS BRANCH  
**Owning mission:** SB-P-1.18, Stage 10 documentary dependency  
**Dependency source:** locked SB-P-1.12 Identity & Authority / Kernel EIS v0.5  
**Authority:** Mission Control 40 under Founder-approved Source 18 v1.3, §3.3 and Stage 10; Source 17 read-before-write and contribution separation  
**Activation condition:** only the authorized human merge of the reviewed pull request containing *this record* to canonical `main`. Merely drafting this file, opening its PR, commenting, or reviewing does not grant amendment authoring authority.  
**Effect after activation:** permits only preparation of an independent **DRAFT** post-lock EIS v0.6 candidate by the existing SB-P-1.12 Kernel source owner, subject to all subsequent reviews and canonical crossings listed below. It is not approval of the candidate text.

## 1. Grounded necessity and frozen inputs

- Source 18 v1.3 on `main`, blob `f3b01b608c4b64df186d4278ba6468ed0419630f`, especially §3.3 (authority-bearing records effective only by human merge; one canonical crossing per gate) and Stages 10–11 (separate review and lock).
- Locked SB-P-1.12 EIS v0.5: `docs/phase-1-mission-blueprint/implementation/SB-P-1.12-EIS.md`, blob `7a5f49182463ec79ecf221d7dd13dfebbc517e3e`.
- Existing SB-P-1.18 draft PR #1111, HEAD `f992390acb641d98671a2257ec202db18fbc7024`, EIS blob `68a40344c95b036576f32371b316549dbcd91a5d`. Neither is accepted/locked by this grant.
- [Cabinet PQ-14 source-owner finding #6792471011](https://github.com/SmartBusinessv1/smart-business/pull/1111#issuecomment-6792471011), nonindependent.
- [Kernel source-owner necessity finding #6794208330](https://github.com/SmartBusinessv1/smart-business/pull/1111#issuecomment-6794208330), nonindependent.
- [Kernel exact-text preparation packet #6800817385](https://github.com/SmartBusinessv1/smart-business/pull/1111#issuecomment-6800817385), nonindependent; accepted for bounded authoring subject to correction.
- [MC40 review/route record #6800937599](https://github.com/SmartBusinessv1/smart-business/pull/1111#issuecomment-6800937599).

**Established gap:** the locked Kernel contract lacks normative membership-scoped set-read semantics needed for complete Cabinet PQ-14. Consumer-only scans or a package-only obligation cannot replace a Kernel-owned rule. This does **not** activate SB-P-1.12 implementation, modify product scope, authorize access to grant data by consumers, or reopen accepted MC-819 and Route V findings.

## 2. Exact permission after canonical merge — ONE FILE

**Actor:** existing SB-P-1.12 Identity & Authority / Kernel *source-owner Claude Code room* (same source author of v0.4/v0.5); preparation authority only, no acceptance or self-review.

**Branch:** the source owner may create one purpose-named, non-protected branch from the **then-current verified `main`** and open **one DRAFT PR targeting `main`**. Verify initial v0.5 EIS blob, halt on drift and return to Mission Control for an exact delta check; never overwrite a new canonical state.

**Only permitted file to edit:** `docs/phase-1-mission-blueprint/implementation/SB-P-1.12-EIS.md`.

**Only substantive normative delta: SIX insertions, using exact packet §1 proposal and unique-anchor proof:**

1. **A-1a** §8.1 after target-less helper sentence at base line 187: deny target-less `authz.can` on any narrower-than-business grant for membership/support/automation paths.
2. **A-1b** `EIS-KER-04` existing requirement cell at base line 202: cross-reference §8.1 target-less denial rule.
3. **A-3a** §8.1 after base line 189 before §8.2: `p_action` selects **one** registered capability per `authz.authorize` call; multi-capability consumers require conjunction of separate exact-target calls.
4. **A-3b** `EIS-KER-01` existing requirement cell at base line 199: cross-reference one-capability selector.
5. **A-2a** §8.1 immediately following A-3a: Kernel-owned `authz.scoped_targets` candidate IDs only from caller's own current membership scoped grants and one verified path, query intersection, fresh per-target/per-capability permission, no leak in lists/counts/cursors/metadata/AI; PC-05 participant rights remain unchanged.
6. **A-2b** `EIS-KER-08` existing requirement cell at base line 206: cross-reference governed membership set read.

Do not silently substitute an explicit extra capability parameter for A-3: that is **outside this exact-text drafting grant** and requires Mission Control to issue an amended bounded grant following specialist evidence. Do not widen `authz.can` or add another authorization engine.

**Companion edits allowed only in this same EIS file:** version/status metadata to express **v0.6 DRAFT CANDIDATE, v0.5 REMAINS LOCKED AND AUTHORITATIVE**, §1 authorization citation, narrow §23 proposal/effectiveness note, §24 change log. Do **not** label v0.6 approved, effective or locked in a draft branch. Do not modify §18, §19, §22 or coverage rows unless a counted traceability defect is demonstrated; if one arises, STOP and return for a narrow delta authorization.

**Traceability:** expected existing 85 requirement IDs, 508 mapping links, 267 FCTM rows. These are a claim to recheck, not authority to suppress a new needed ID. Report actual counts; record no row narrowing, omission or classification change. A new requirement ID or mapping edit needs prior Mission Control delta authorization.

## 3. Mandatory output and independent checks

The source owner returns ONE draft PR and a **single delta evidence comment** including exact base/head/blob identities, file-only change list, six single-match anchors, verbatim proposal-to-diff comparison, clause/requirement impact ledger, coverage counts, and all tests **PLANNED — NOT RUN**. Source owner declares prior contributions and may not independently review or accept own work.

After draft preparation, Mission Control routes two **contribution-separated** reviews, not broad re-audits:

1. Eligible existing MC-33 Security & Permissions specialist, with independence/continuity re-confirmed, assesses target-less policy/RLS regressions including support/automation, subject/path isolation, scoped-target disclosure, action mapping and negative test seeds. Previous acceptance on other matters does not supply review of this new amendment.
2. A distinct eligible Source 18 documentary/governance reviewer checks §3.3 crossing, six-clause exactness, no Product Truth or FCTM drift, coverage and Stage 10/11 boundary. This person must be actually appointed and independent of author; if not, Mission Control returns an **eligibility gap**, not fabricated concurrence.

Any refinement occurs on the **same draft PR**, with changed-head re-review of the precise delta. A reviewer may not approve their own authored change.

## 4. Mandatory post-review authority order

1. Mission Control validates independent returns, exact reviewed head and source compatibility.
2. **Founder exact-text approval** is obtained for the final reviewed EIS v0.6 candidate and recorded through the authorized canonical process. This is procedural amendment approval, **not** a new Founder Product Truth classification choice.
3. The source owner performs only specifically authorized approval-metadata reconciliation; no substantive change without new review.
4. An authorized **human** merges the reviewed amendment PR to canonical `main`; the draft is not authority until the necessary canonical crossing.
5. Mission Control prepares, independently reviews as required, and obtains separately canonical **SB-P-1.12 Stage 10 amendment acceptance** and **Stage 11 v0.6 re-lock** records, each with exact reviewed blobs/commit IDs, using merged records 73 and 74 as sequencing precedent. No comment-only lock.
6. Only then may a **separately granted** C-4/PK-0 package reconciliation realize the new kernel contract; preserve the existing open/draft PR #1120 and its security eligibility hold, and reconcile its version citations based on actual canonical sequence rather than assuming it must merge first.
7. Cabinet SB-P-1.14 U-1 canonical acceptance/re-lock/status reconciliation is a **distinct Mission Control dependency**. Published candidate `8fb3e8d3...` does not count as locked merely through PR #1112 merge/MC-769 comment. Downstream SB-P-1.18 PQ-14 Stage 10 remains HELD until all indispensable positive source authority is canonical.
8. Complete SB-P-1.18 Stage 10 → 11 → 12 → 13 in that order, then Implementation Authorization **WITHHELD**, documentary suspension. The later SB-P-1.12 implementation activation *assessment* is not initiated here.

## 5. Explicit prohibition and stop cases

No Product Truth reclassification, Source11/Source18 amendment, Blueprint/FCTM rewrite, runtime work, SQL, RLS migration, implementation, deployment, release, feature activation, commercial pilot, AI merge, or SB-P-1.12 implementation activation. No broad re-opening Route V CONCUR or MC-819 CLOSED. This instruction neither passes Stage 10 nor authorizes Stage 11.

**STOP** for source blob drift, competing amendments, extra normative changes, absent independent reviewer eligibility, unresolved authorization semantics, failed traceability count, new Founder trigger, or any deviation from one-file/six-insertion scope. Return the exact failed evidence and minimum resolution to Mission Control.

## 6. Review and activation ledger

- Preparation branch/PR: **PENDING**.
- Independent grant-record/documentary review: **PENDING**.
- Mission Control final exact-head acceptance of this grant: **PENDING**.
- Authorized human merge of this grant record to `main`: **PENDING**.
- **Effective authoring grant: NOT YET ACTIVE.**

**Canonical activation statement (prospective, not yet effective):** Upon authorized human merge of the independently reviewed grant-record PR, Mission Control authorizes the existing SB-P-1.12 Kernel source owner to prepare **only** the one-file v0.6 draft amendment PR defined in §2. Every other gate above remains withheld.
