# SMART BUSINESS MISSION CONTROL

# SB-ORG-LEARNING-1.1 — STAGE 2B NARROW CORRECTION AUTHORIZATION

**Mission:** `SB-ORG-LEARNING-1.1 — Smart Business Organizational Learning Engine — Implementation`

**Stage:** `2 — Closed-mission proof and supervised candidate extraction`

**Sub-gate:** `2B — Supervised semantic candidate extraction`

**PR:** `#589 — OPEN — NOT MERGED`

**Authorized branch:** `mission/SB-ORG-LEARNING-1.1-stage2`

**Verifier publication commit:** `850e3ecfe021a742255eb6c0db37043210a00b34`

**Mission Control disposition:** `NARROW CORRECTION REQUIRED — S2B-F-01 AND S2B-F-02 ONLY`

**Product Mission state:** `SB-P-1.12 — NOT ACTIVATED`

## Basis

Codex independently verified the Stage 2B candidate set and returned `FAIL` with two narrow findings. Mission Control accepts both findings.

### S2B-F-01 — Candidate 2 evidence overstatement

Candidate 2 currently states that the pre-merge acceptance record gives exact Fast/Full test counts for both the accepted implementation head and the later pre-review communication head.

The pinned source supports:

- implementation head `74455d5...`: exact workflow identities, Fast Tests `8/8 files, 61/61 tests`, Full Assurance `20/20 files, 108/108 tests`;
- later pre-review communication head `6a3ea8f...`: exact workflow identities and Full Assurance `20/20 files, 108/108 tests`, but no exact Fast Test file/test counts for that head.

Correct Candidate 2 to distinguish those evidence reaches truthfully. Preserve the supported lesson that closure records cite exact workflow/run evidence and exact counts where actually recorded. Do not expand the evidence set.

### S2B-F-02 — Observation actor misattribution

The accepted provenance contract defines `actor_class` as who is making the observation, not who authored the underlying evidence file.

All 14 candidate evidence references currently use `actor_class: mission-control`, while the observations were created by the authorized synthesis session.

Correct the existing 14 reference `actor_class` values to the truthful synthesis observer classification. Preserve Mission Control source authority through the pinned source path, locator, commit/blob identity and source evidence itself. Do not change the provenance contract to accommodate the incorrect metadata.

## Authorized files

The builder may modify only what is necessary to correct these two findings, expected to include:

- the four existing candidate JSON files for S2B-F-02;
- Candidate 2 content for S2B-F-01;
- the Stage 2B builder report where it contains the same overstatement or provenance all-clear claim;
- the minimum builder handoff in `communication/live/report.md`.

No historical source record may be changed.

No Stage 1 implementation, schema, provenance validator, scanner, receipt, closure envelope, workflow, dependency or lockfile change is authorized.

## Required verification

After correction, independently within the builder session:

1. validate all four candidates with the existing candidate validator;
2. resolve all 14 provenance references with the existing runtime provenance validator;
3. confirm all 14 observer `actor_class` fields now reflect the synthesis observer;
4. compare Candidate 2 line-by-line against the pinned acceptance/closure evidence and confirm it no longer attributes exact Fast counts to the later pre-review head;
5. screen all four candidate artifacts with the existing screening machinery;
6. run applicable typecheck, lint, Fast Tests, build and Markdown checks;
7. obtain applicable real CI on PR #589.

Full Assurance may remain non-applicable if the correction touches only candidate/document paths excluded by its selective filter.

## Retained boundaries

Candidate 3's discrepancy analysis, `LIMITS` relationship and `MEDIUM` confidence are accepted by the independent verifier and must not be rewritten absent a direct correction need.

Do not promote any candidate.

Do not mark any candidate `CORROBORATED`, `VALIDATED` or `INSTITUTIONALISED`.

Do not create approval artifacts, context packs, background automation or autonomous writers.

Do not modify governance or Product Truth.

Do not merge PR #589.

`STAGE 3 — NOT AUTHORIZED`

`SB-P-1.12 — NOT ACTIVATED`

## Return

Claude Code must publish the corrected candidate artifacts and updated builder evidence, then stop with:

`STAGE 2B F-01/F-02 CORRECTION REPORTED — MISSION CONTROL RE-REVIEW REQUIRED`
