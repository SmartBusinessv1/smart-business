# SB-P-1.14 — Stage 2 Independent Obligation Inventory

**Mission:** SB-P-1.14 — Business Memory, Documents & Durable Media
**Status:** `DRAFT STAGE 2 OUTPUT — STAGE 2 AUTHORIZED; OUTPUT NOT CANONICAL UNTIL MISSION CONTROL REVIEW AND HUMAN MERGE`
**Baseline:** `main@5a464e55f3365cbb4689d70f9c42dbe320ebb558`, 2026-10-07
**Prepared by:** Claude Code, Stage 2 Definition Actor

This inventory is taken from the source text and kept independent of the FCTM (Source 18 Section 3.2 item 6). It lists pointers to numbered sections, separately verifiable obligations and numbered acceptance scenarios. It restates no requirement and is not a second matrix. Mission Control tests it against the source text at Stages 5 and 8; the Stage 19 verifier takes its own inventory.

## 1. Sources inventoried

| Source | Blob | Numbered sections | Numbered acceptance scenarios |
|---|---|---|---|
| Contract 3 | `d8c26c07` | §1–§23 (23) | §19: 14 |
| Contract 5 | `80ac648e` | §1–§21 (21) | §18: 11 |
| Contract 22 | `61e1bb91` | §1–§33 (33) | §29: 14; §33.8: 9 |
| Contract 25 | `406ce089` | §1–§30 (30) plus the unnumbered Final Principle | §26: 14 |
| Build Plan | `9dfdd924` | §5.1–§5.4, §6.1–§6.3, §7, §8.4, §9 rows 3 and 5, §10.3, §11, §13, §15, §16 | §10.3 Founder Runtime Scenarios A and B |
| Inherited (Contracts 24, 10, 9, 12, 17, 7) | see FCTM §0.4 | sections named by upstream FCTMs | 24-§31-8, 10-§23-3 (UDI slice), 7-§15-2 |
| Delegates (Contracts 21, 24, 10, 12, 9, 14, 15, 7, 17, 18, 19, 23, 2, 4, 1, 6, 16, 20, 13) | see FCTM §0.4 | 57 touched sections | not opened at scenario level (wholly `DELEGATED`) |

## 2. Obligation pointers per opened section

Each pointer is `section → item list position`. "n items" means n separately verifiable items in the order the source lists them.

### Contract 3

§1 narrative; §2 narrative + 1 must-not (ERP-first); §3 1 principle rule; §4 4 states + 1 must-not + 1 permission; §5 1 rule + 4 text examples + voice + images/receipts + Excel/CSV/PDF reuse + must-not separate import truth + manual forms (10); §6 1 obligation + 8 confirmation contents + 1 must-not (10); §7 1 obligation + 7 cases + 1 must-not (9); §8 2 correction channels + 6 correction kinds + 7 preserved items + 1 must-not (16); §9 8 retrieval keys (key 2 has party-reference and directory slices, giving 9 pointers) + 4 examples + 1 rule (14); §10 1 rule + 4 views + 3 export formats + 1 must-not (9); §11 7 role statements; §12 3 channels + 1 must-not + 1 outage rule (5); §13 3; §14 2; §15 13 integrations; §16 7 may + 7 must-not; §17 10 cases + 1 rule; §18 6; §19 14 scenarios; §20 6 non-goals; §21 history; §22 2 rules; §23 gate.

### Contract 5

§1 narrative; §2 narrative + 1 must-not; §3 3; §4 12 inputs (stock documents split into opening-stock and other, giving 13 pointers) + 1 rule; §5 8 fields + 1 must-not; §6 4 retention/retrieval obligations + 8 retrieval keys + 1 must-not (13); §7 1 rule + 6 examples + 1 rule (8); §8 3 channels + 1 must-not; §9 1 + 7 preview contents + 1 rule (9); §10 9 cases + 1 rule; §11 4 duplicate causes + 1 rule; §12 7 role statements; §13 7 may + 5 must-not; §14 7 document conditions + 1 must-not; §15 10 concepts + 1 rule; §16 7; §17 10 states + 1 must-not; §18 11 scenarios; §19 5 non-goals; §20 dependency list; §21 gate.

### Contract 22

§1–§3 narrative/principle; §4 4; §5 whole section; §6 9 surfaces + 1 must-not; §7, §8 whole sections; §9 3; §10 1 + 5 carried items + 1 must-not (7); §11, §12 whole sections; §13 5; §14, §15 whole sections; §16 not touched; §17 1 rule + 7 adapter classes + 1 must-not (9); §18 whole section; §19 6 behaviours + 1 rule (7); §20 whole section; §21 1 rule; §22 5 + 1 must-not; §23 7; §24, §25, §26 whole sections; §27 7 statements + 1 must-not (8); §28 10 non-goals; §29 14 scenarios; §30–§32 history/provenance/gate; §33.1–§33.7 one delegated body; §33.8 9 acceptance items.

### Contract 25

§1–§3 narrative/principle; §4 1 + 10 control-plane items + 1 must-not (12); §5 2; §6 2; §7 2; §8 10 steps + 1 must-not; §9 6 steps + 2 rules; §10 2 + 10 answerable questions (12); §11 4; §12 3; §13 1 (two channel slices) + 2 (4 pointers); §14 1 + 5 + 1 must-not (7); §15 4; §16 3; §17 1 unresolved duration + 6 principles (7); §18 3; §19 1 protected-class rule + 7 requirements (8); §20 13 cases + 1 rule (14); §21 4 + 1 (5); §22 5 + 1 (6); §23 11 events + 1 rule (12); §24 3; §25 4; §26 14 scenarios; §27 8 non-goals; §28–§30 history/provenance/gate; Final Principle.

### Build Plan

§5.1 1; §5.2 1; §5.3 1; §5.4 1; §6.1 1; §6.2 1; §6.3 2; §7 1; §8.4 1; §9 2 (row 3 and row 5); §10.3 outcome 1 + 13 work areas + 2 engineering-correction statements + 2 search-sequencing statements + Scenario A (2 verifiable parts) + Scenario B (2 verifiable parts) + exit principle (23); §11 3; §13 1; §15 9 items; §16 20 rejections.

### Inherited rows

From the SB-P-1.13 FCTM, 34 rows name SB-P-1.14: 24 `ASSIGNED TO LATER MISSION` (Contracts 24, 9, 10, 12, 22) and 10 `DELEGATED` (Contracts 3, 5, 25). From the SB-P-1.12 FCTM, 7 rows name SB-P-1.14: `22-§4`, `22-§9`, `22-§10`, `22-§29-5`, `17-§12`, `7-§6`, `7-§15-2`. Whole-section inherited rows (`24-§14`, `22-§9`, `22-§10`, `17-§12`, `7-§6`) are expanded to obligation level here because this mission takes them in scope.

## 3. Set-based completeness check (against the FCTM)

Method: a script parsed the source contracts directly (`## N.` headings; bullet and numbered items inside each acceptance section; §33.8 numbered items; Build Plan §10.3 work-area bullets and §16 bullets) and the upstream FCTMs (rows whose owning-mission cell names SB-P-1.14), then compared the sets with the FCTM row IDs. The script is not committed; the commands in FCTM §H reproduce the row counts.

| Check | Source text | FCTM | Result |
|---|---|---|---|
| Contract 3 numbered sections | 23 | 23 represented | PASS — none missing |
| Contract 3 acceptance scenarios (§19) | 14 | 14 distinct (15 rows; scenario 13 split `a`/`b`) | PASS |
| Contract 5 numbered sections | 21 | 21 represented | PASS |
| Contract 5 acceptance scenarios (§18) | 11 | 11 distinct (12 rows; scenario 8 split) | PASS |
| Contract 22 numbered sections | 33 | 33 represented | PASS |
| Contract 22 acceptance scenarios (§29) | 14 | 14 | PASS |
| Contract 22 §33.8 acceptance items | 9 | 9 (`22-§33-2` to `22-§33-10`) | PASS |
| Contract 25 numbered sections | 30 | 30 represented | PASS |
| Contract 25 Final Principle | 1 | `25-§FP` | PASS |
| Contract 25 acceptance scenarios (§26) | 14 | 14 distinct (15 rows; scenario 4 split) | PASS |
| Build Plan §10.3 required work areas | 13 | 13 (`BP-§10.3-W1` to `-W13`) | PASS |
| Build Plan §15 unresolved decisions | 9 | 9 | PASS |
| Build Plan §16 rejections | 20 | 20 | PASS |
| SB-P-1.13 rows naming SB-P-1.14 | 34 | 34 represented (directly or expanded) | PASS |
| SB-P-1.12 rows naming SB-P-1.14 | 7 | 7 represented (directly or expanded) | PASS |
| Duplicate FCTM row IDs | — | none | PASS |

First run note: the upstream-row check first returned 0 because the script read the wrong table column; after correcting the column index it returned 34 and 7. No FCTM change was needed.

### Single-row and split judgments Mission Control may contest

`L-ILL` single rows: `22-§4-2`, `25-§6-1`, `25-§7-1`, `25-§16-1`, `25-§24-2`. Single protected-class or responsibility rules: `3-§3`, `25-§18-2`, `25-§19-1`, `25-§25-1`, `25-§25-2`. Whole-section `DELEGATED` or `ASSIGNED` rows: `22-§5`, `22-§7`, `22-§8`, `22-§11`, `22-§12`, `22-§14`, `22-§15`, `22-§18`, `22-§20`, `22-§24`, `22-§25`, `22-§26`, `22-§33-1`. Slices split between two owning missions: `3-§19-13a/b`, `5-§18-8a/b`, `25-§13-1a/b`, `25-§26-4a/b`, `24-§18-1a/b`, `7-§15-2a/b`; and split by assignment without suffix: `3-§9-2`/`3-§9-3`, `5-§4-9`/`5-§4-10`, `7-§6-1` to `-3`. Departure from SB-P-1.13 precedent: `BP-§10.3-X` (exit principle) is `IN SCOPE` as a testable experience statement, and Contract 22 §33.8 is enumerated item by item.

## 4. Per-source effort and row counts

| Source | FCTM rows | `IN SCOPE` |
|---|---|---|
| Contract 3 | 164 | 143 |
| Contract 5 | 153 | 137 |
| Contract 22 | 120 | 61 |
| Contract 25 | 166 | 156 |
| Inherited (24, 10, 9, 12, 17, 7) | 38 | 34 |
| Build Plan | 68 | 33 |
| Delegates | 57 | 0 |
| **Total** | **766** | **564** |
