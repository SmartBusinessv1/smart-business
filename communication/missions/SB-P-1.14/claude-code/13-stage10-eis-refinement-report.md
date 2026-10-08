# SB-P-1.14 — Stage 10 Consolidated EIS Refinement Report

**Mission:** SB-P-1.14 — Business Memory, Documents & Durable Media
**From:** Claude Code, EIS author (Stage 10 refinement)
**To:** Mission Control
**Status:** `DRAFT — STAGE 10 EIS REFINEMENT SUBMITTED; AWAITING MISSION CONTROL DISPOSITION`
**Date:** 2026-10-08

## 1. Objective

Under SB-P-1.14-MC-16, apply one consolidated documentary refinement to the draft EIS on PR #831. The refinement covers every accepted Stage 10 finding, including the Founder-approved restorative T7 Security refinement (`founder/05`). It changes no Product Truth, FCTM disposition or Founder decision.

## 2. Authority, synchronization and resulting state

| Item | Value |
|---|---|
| Authorization | SB-P-1.14-MC-16, `mission-control/28-stage10-consolidated-eis-refinement-authorization.md` (blob `6408e753907548ac1a4e0f9f2e66bc1e55bb8dd7`) |
| Reviewed Stage 9 head / EIS blob | `254e40a723e4c74af69d425cb918bb03dc9817e2` / `20fd97177348ad9b02bbb8d1be9e53f05ad18bde` |
| Synchronized base | `main@cc8663dc4f8e7e5eacfaa8b41cac1a7cceece0bd` |
| Synchronization method | Ordinary merge commit `b0f1d1f4` (parents `254e40a7`, `cc8663dc`); no rebase or force-push. Conflicts in `communication/live/report.md`, the mission README, `decision-log.md` and `handover-log.md` were resolved to canonical main (MC-16 §2). The EIS blob was unchanged by the merge (`20fd9717`) |
| Code drift `ded86278` → `cc8663dc` | None outside `communication/` and `docs/` (repository inspection) |
| Resulting EIS blob | `d97d23048f0dda76f3f60b0b03569a928d9e45d1` (1080 lines) |
| Resulting PR #831 head | The commit that adds this report; its SHA is in the PR #831 handover comment, because a commit cannot contain its own SHA |
| PR #831 state | DRAFT, open, base `main` |

## 3. Changed files

Refinement commit (the only substantive writable paths authorized by MC-16):

- `docs/phase-1-mission-blueprint/implementation/SB-P-1.14-EIS.md` — modified
- `communication/missions/SB-P-1.14/claude-code/13-stage10-eis-refinement-report.md` — new

The synchronization merge brought canonical main's files onto the branch unchanged. No README, decision log, handover log, live report, locked Blueprint, FCTM, Founder record, specialist report, Mission Control record, upstream EIS or code was edited.

## 4. Method

The EIS was regenerated with the Stage 9 generator. First I confirmed that the generator reproduces the reviewed blob `20fd9717` byte for byte. The refinement changed only requirement wording and narrative. Every requirement ID and every row selector is unchanged, so the FCTM row mapping in §29.2 and §29.3 is byte-identical to the Stage 9 version.

EIS changes outside requirement text:

- §1: lifecycle stage, revision and next gate.
- §2: a refinement map from MC-16 item to requirements.
- §3: Stage 10 inputs at their blobs.
- §4: principles 1, 6 and 7.
- §5: no-drift note.
- §6: diagram label.
- §28: three new `UNVERIFIED — ACCESS REQUIRED` rows; two rows widened.
- §30: trigger notes, engineering choices and EQ-7.

## 5. Finding-by-finding disposition

FCTM rows are shown as counts; the exact rows per requirement are in EIS §29.2/§29.3. Rows were not changed for any requirement.

| MC-16 item | Specialist finding(s) | Disposition | EIS requirements (FCTM rows) |
|---|---|---|---|
| R10-SEC-01 / MC10-PRE-01 | SEC14-EIS-S10-01 | **Closed in EIS text.** Birth-safety is now specified by object type: tables (RLS, policies, grants); views (explicit grants, invoker semantics, never owner-rights to caller roles); functions (`SECURITY INVOKER` default; `DEFINER` only under `EIS-ISO-10` with pinned `search_path`, fixed owner, explicit `EXECUTE`, `PUBLIC` revoked); sequences; and default privileges per creator role and object class. Everything happens at one atomic migration boundary, verified by the effective-access inventory | EIS14-SEC-02 (60), EIS14-MIG-02 (64), EIS14-VER-01 (7), EIS14-TOT-01 (9) |
| R10-STO-03 | S10-SP4-03 | **Merged into R10-SEC-01** as MC-16 directs; closed by the same text | EIS14-SEC-02, EIS14-MIG-02 |
| R10-MIG-01 | S10M-01 | **Merged into R10-SEC-01** as MC-16 directs; closed by the same text plus the MIG-05 rehearsal of the effective-access inventory | EIS14-SEC-02, EIS14-MIG-02, EIS14-MIG-05 (90) |
| R10-SEC-02 | SEC14-EIS-S10-02 | **Closed.** SB-P-1.14 provenance is domain provenance only. Allow/deny evidence and durable denial consume SB-P-1.12 `authority_events` / `EIS-AUD-01`, `-02`. Provenance may reference the kernel decision ID but copies no authority truth | EIS14-CAB-03 (15), EIS14-SEC-01 (16) |
| R10-SEC-03 | SEC14-EIS-S10-03 | **Closed.** EIS14-VER-01 lists the full effective-access inventory (object identity, owner, per-role privileges, RLS, view semantics, sequences, signatures/overloads, security mode, `search_path`, default ACLs, bypass-capable roles, legacy identity disappearance, privileged-handler inventory, direct-DML and role negatives). EIS14-STO-03 requires a source-complete handler inventory. Live evidence stays `UNVERIFIED — ACCESS REQUIRED` | EIS14-VER-01 (7), EIS14-STO-03 (26), EIS14-CMD-03 (6), EIS14-MIG-05 (90) |
| R10-FI-01 / MC10-PRE-02 | S10-FI-01 | **Closed.** One classification returns distinct sales, income, purchases and expense measures. Any combined measure must be explicitly named and never substituted. A credit-method sale counts once. Standalone credit and repayment count in no sales or income measure. All readers, AI answers and exports consume this classification. No new label | EIS14-TOT-01 (9), EIS14-LDG-01 (13), EIS14-LDG-05 (19), EIS14-SRC-02 (6), EIS14-VER-01 (7), EIS14-HOLD-05 (48) |
| R10-MIG-05 | S10M-05 | **Merged into R10-FI-01** as MC-16 directs. Rehearsal and regression prove that historical sale and purchase classifications and totals are unchanged | EIS14-MIG-05 (90), EIS14-VER-01 |
| R10-FI-02 | S10-FI-02 | **Closed.** Inside the commit transaction, the command revalidates that the target exists, is in the same business, is still an `FPDR-4`-valid target and is materially unchanged; otherwise it returns to clarification/review/re-confirmation. The mechanism is an EIS choice. No SB-P-1.16 rule added | EIS14-LDG-03 (13), EIS14-CMD-01 (42), EIS14-VER-01, EIS14-HOLD-05 |
| R10-FI-03 | S10-FI-03 | **Closed.** No direct client `INSERT`/`UPDATE`/`DELETE` on `transactions`. Correction events are append-only and not client-mutable. Legacy `correct_transaction` and any superseded overload or writing function is dropped or has `EXECUTE` revoked. Verification inspects privileges, RLS, function identities and legacy paths | EIS14-CMD-03 (6), EIS14-VER-01, EIS14-HOLD-05 |
| R10-AI-01 | UDI-EIS10-01 | **Closed.** Inbound formulas are never evaluated. Outbound, only untrusted formula-like text is neutralized; typed numeric, date and boolean values, including negatives, are preserved. Round-trip and negative-number regressions are required | EIS14-UDI-05 (5), EIS14-VER-01 |
| R10-AI-02 | UDI-EIS10-02 | **Closed.** No document-controlled outbound fetch, URL/resource loading, callbacks or recursive embedded traversal. Supported embedded objects re-enter intake | EIS14-UDI-04 (15), EIS14-VER-01 |
| R10-AI-03 | UDI-EIS10-03 | **Closed.** UDI calls are bound to the accepted versioned SB-P-1.13 configuration identity. A material change invalidates evidence and blocks merchant documents; deterministic CSV/XLSX paths remain | EIS14-PRV-01 (97) |
| R10-AI-04 | UDI-EIS10-04 | **Closed via R10-FI-01.** AI answers and exports consume the distinct measures and cannot relabel | EIS14-TOT-01 (9) |
| R10-AI-05 | UDI-EIS10-05 | **Closed.** English, Malayalam, Manglish/transliterated and mixed injection fixtures across OCR text, filenames/metadata, headers and line items | EIS14-UDI-06 (17), EIS14-VER-01 |
| R10-STO-01 | S10-SP4-01 | **Closed.** Server-mediated retrieval is the default. A direct signed URL is allowed only with `DR2` evidence of immediate revocation or indirection. A non-zero window remains a T3 candidate | EIS14-RTV-01 (35), EIS14-PRV-02 (124) |
| R10-STO-02 | S10-SP4-02 | **Closed.** Hold is applied before lifecycle eligibility; held objects are excluded from expiry; release is authorized and audited. Async deletion is reconciled to durable proof retaining no content. "Held metadata + missing object" is an integrity incident. Capability is evidence-held | EIS14-RET-01 (10), EIS14-STO-07 (10), EIS14-PRV-02 |
| R10-STO-04 | S10-SP4-04 | **Closed.** Specified secure-upload outcomes: authorized key, bounded size, checksum, narrow short-lived authority, server-side post-upload verification and origin-limited CORS. Presign/header enforcement is conditional on `DR2`; otherwise server-side verification carries the guarantee | EIS14-STO-02 (14), EIS14-PRV-02 |
| R10-MIG-02 | S10M-02 | **Closed.** Consumes SB-P-1.12 `EIS-CNF-05`: per-row or chunk commits with fresh authority, a stable fingerprint and outcome, committed rows kept after revocation, later rows stopped, exact counts and duplicate-safe resume. Opening stock goes via `create_inventory_movement` | EIS14-MIG-03 (18), EIS14-ADP-02 (8) |
| R10-MIG-03 | S10M-03 | **Closed.** Index strategy is chosen from real size, activity and lock window, with concurrent build where needed and non-transactional DDL. Invalid indexes are detected and recovered; read/write is rehearsed; plan and validity evidence is captured. `IF NOT EXISTS` is not proof | EIS14-MIG-04 (13), EIS14-MIG-05, EIS14-VER-01 |
| R10-MIG-04 | S10M-04 | **Closed.** Recorded generator and tool version, source and schema identity, and diff/signature. Hand-written unions, callers and UI are synchronized. Old-app/new-schema and new-app/final-schema compatibility; no breaking RPC before callers | EIS14-MIG-06 (6), EIS14-MIG-05, EIS14-VER-01 |

Specialist confirmations that needed no change (S10-FI-04 to -08, UDI-EIS10-06/-07, S10-SP4-05/-06, S10M-06 to -08) are left as they were.

Across all 28 refined requirements, 400 of the 563 `IN SCOPE` rows are affected (union).

## 6. 563-row proof

The independent parse of the refined EIS against the FCTM does not use the generator's selectors:

| Check | Result |
|---|---|
| FCTM rows / `IN SCOPE` | 766 / 563 |
| §29.2 rows | 563 |
| Missing / extra / absent from FCTM | 0 / 0 / 0 |
| Requirement definitions / duplicates | 83 / 0 |
| Used but undefined / defined but unmapped (orphans) | 0 / 0 |
| §29.3 counts vs §29.2 | 0 mismatches |
| Explicit row lists vs §29.2 | 0 mismatches |
| Row-to-requirement links | 2282 (unchanged) |
| Non-`IN SCOPE` row IDs cited in requirement text | `3-§9-12` only, cited in EIS14-SRC-01 as excluded (SB-P-1.16) |
| Stage 7 residual-hold gaps (generator assertion) | 0 |
| §29.2/§29.3 text vs Stage 9 | Byte-identical |

## 7. Product Truth and boundary checks

- **FCTM:** no product-definition field changed (blob `01e9856a`, unchanged).
- **Locked Blueprint:** unchanged (blob `256828d2`).
- **Founder records, specialist reports, Mission Control records and `merge/`:** `git diff` against `cc8663dc` is empty.
- **`FPDR-1`:** unchanged. The four states and history are preserved, and a credit-method sale remains a sale. The refinement makes the "no double count" rule explicit.
- **`FPDR-2`:** unchanged. Bounded grace and no durable raw voice. Hold handling is engineering detail under the existing truth.
- **`FPDR-3`:** unchanged. Re-prompt only on a material target change. Target revalidation sends the merchant back to the existing re-confirmation path.
- **`FPDR-4`:** unchanged. The valid target set is identical, with no rewrite and no duplicate.
- **SB-P-1.16:** no balance, overpayment, ageing, allocation or reconciliation rule was added. `3-§9-12` remains SB-P-1.16.

## 8. T-screen

| Trigger | Result |
|---|---|
| T2 | NOT TRIGGERED. No conflict among approved sources |
| T3 | NOT TRIGGERED. Distinct measures use existing type names and no new customer-facing label. Server-mediated delivery means no post-revocation window is proposed. Re-confirmation on a target change uses the existing `FPDR-3` path |
| T6 | NOT TRIGGERED anew. Specialist constraints are carried as accepted engineering constraints |
| T7 | Restorative Security refinement only, Founder-approved (`founder/05`, MC-15). No other omission, deferral, narrowing or reclassification. No row moved |
| T8 | NOT TRIGGERED. Conditional reopeners are recorded in EIS §30: no compliant hold-aware `FPDR-2` mechanism (EIS14-RET-01); infeasible commit-time target revalidation (EIS14-LDG-03); a protected write path that cannot be closed (EIS14-CMD-03); unsafe object birth (EIS14-SEC-02); history rewrite or destructive rollback (EIS14-MIG-01/-05) |

No item was stopped. No change required new Product Truth, merchant-visible behaviour beyond approved truth, a scope change, a deferral, an intentional non-zero post-revocation exposure or an infeasible invariant.

## 9. Remaining holds and `UNVERIFIED — ACCESS REQUIRED` facts

All Stage 7 holds are carried unchanged:

- Dependency holds: `D12` 225, `D13` 92, `DTX` 42.
- `H-PROV` 97, `H-STO` 124, `H-LEG` 11, `H-LATER` 13, `H-BIRTH` 60, `H-REVOKE` 35, `H-PRIV` 26.
- `H-FIN` 48, `H-IDEM` 17, `H-FPRINT` 8, `H-UDI` 116, `H-STATE` 47, `H-DISCARD` 10, `H-MIG` 90.

Stage 10 evidence holds remain open. In particular, live effective-access evidence, provider (`DR2`, `DAI`) evidence and migration rehearsal evidence exist only as documentary requirements.

**`UNVERIFIED — ACCESS REQUIRED` facts (EIS §28).** All Stage 9 entries remain.

Widened entries:

- Live effective-access inventory: view semantics, sequences, overloads, default ACLs and bypass-capable roles.
- R2 lifecycle hold-exclusion and asynchronous deletion.
- R2 presign/header enforcement.

New entries:

- Any immediately revocable direct-delivery mechanism.
- Target table sizes, activity and lock window for index builds.

No runtime, provider or production readiness is inferred from documentary wording.

## 10. Verification and CI

- Generator reproduces Stage 9 blob `20fd9717` before refinement: yes.
- Generator assertions after refinement: 83 requirements, 0 missing, 0 hold gaps.
- Independent parse: Section 6.
- Locked inputs unchanged against `cc8663dc`: yes.
- Markdown Quality Gate, run per file on both changed files, the secret scan and the staged-path check run before commit; results are recorded in the PR #831 handover comment.
- **CI:** GitHub Actions has produced no runs for this repository since 2026-09-30. Any absence of CI on the refined head is recorded as absence, **not as a pass**.

## 11. Outstanding issues

- **Stage 10 acceptance:** not granted.
- **EIS lock, implementation package, implementation, SQL/migration, provider activation and production:** not authorized.
- **Evidence:** every evidence hold remains open.
- **Governance and status files:** they reflect canonical main and were not updated by this pass (outside MC-16 writable scope).

## 12. Recommended next step

Mission Control dispositions the refined DRAFT PR #831 (Stage 10 acceptance or further correction). It may request specialist re-confirmation of the closed items.

**STOP FOR MISSION CONTROL DISPOSITION.**
