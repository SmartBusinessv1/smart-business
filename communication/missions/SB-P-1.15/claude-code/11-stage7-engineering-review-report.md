# SB-P-1.15 — Stage 7 Engineering Review Report (Draft)

**Mission:** SB-P-1.15 — Reminder, Daily Intelligence & Ask CFO  
**Status:** `DRAFT STAGE 7 OUTPUT — NOT ACCEPTED — INDEPENDENT SPECIALIST REVIEWS PENDING — NOT CANONICAL UNTIL MISSION CONTROL REVIEW AND HUMAN MERGE`  
**Prepared by:** Claude Code, Stage 7 Engineering Review owner (also the author of Stages 2–6; not independent assurance), under SB-P-1.15-MC-14  
**Baseline:** `main@47a5aed3a1c95a1b96acc44d0248163ca06f8635`, 2026-10-09  
**Branch:** `mission/SB-P-1.15-stage7-engineering-review`  
**Implementation:** NOT AUTHORIZED

## 1. Objective

Prepare the DRAFT Stage 7 Engineering Review: append Blueprint Sections 20–21 with a feasibility and risk finding for each of the 694 `IN SCOPE` FCTM rows, an early delivery plan and policy-neutral T1/T6 boundaries, within the two-path boundary of SB-P-1.15-MC-14 §4.

## 2. Changed paths

| Path | Change |
|---|---|
| `docs/phase-1-mission-blueprint/active/SB-P-1.15.md` | Appended `## 20. Engineering Review` and `## 21. Engineering Questions, Risks & Recommendations`; updated five Metadata rows (Lifecycle Stage, Status, Builder Review, Engineering Review, Mission Control Review); added one Section 18 row (v0.2); added Section 19 governance-history rows outside the FCTM traceability table |
| `communication/missions/SB-P-1.15/claude-code/11-stage7-engineering-review-report.md` | New — this report |

## 3. Source verification and drift

| Source | Expected blob | Result |
|---|---|---|
| Source 18 | `0945bda60a93c99909c3b7a247d5427ebe256011` | Match |
| Canonical FCTM | `65eeaf8d31b81595b971c22895615a096555f84f` | Match; unchanged by this work |
| Blueprint Sections 1–19 (input) | `2fe8198933fe16c6ac0820ae73f15d1a7157207c` | Match |
| SB-P-1.15-FPDR-01 | `0e0928fec1215ff91fa82386663d6a8f17f43bd2` | Match |
| MC-12 / MC-13 / MC-14 | `e974a27c` / `cd91f607` / `104d1dc7` | Match |
| Stage 6 Builder Review | equal to Stage 6 head `a4176cc1` | Match |
| SB-P-1.12 / 1.13 / 1.14 EIS | `c444f750` / `9a1e723d` / `899a0fe1` | Match |

Nothing outside `communication/missions/SB-P-1.15/` changed between `dff2f4e1` and `47a5aed3`. **No source drift.** The report path was unoccupied. The comparison was repeated against `origin/main` before commit and push; the result is in the pull request description.

## 4. Per-row method

The register in Blueprint Section 20.6 is produced deterministically from the canonical FCTM and Blueprint Section 19, then checked by the validator in Section 6.

**Inputs per row:** row ID, kind, dependency codes and source pointer (FCTM); Section 8 home (Blueprint Section 19 location column).

**Hold assignment:**

- Dependency codes map to holds: `D12`→`H-D12`; `D13`→`H-D13`; `D14`→`H-D14`; `DTX`→`H-DTX` and `H-FIN`; `DAI`→`H-PROV` and `H-AI`; `DSCH`→`H-SCHED`; `DNTF`→`H-NTF`; `D16` to `D20`→`H-LATER`.
- Section 8 home adds structural holds: new persisted objects in §8.1–§8.5 (`H-BIRTH`); server-side execution in §8.2–§8.5 (`H-PRIV`); background work across businesses in §8.3–§8.5 (`H-ISO`); scheduler rows (`H-IDEM`); notification rows (`H-NTF`, `H-SEC`); Ask CFO rows (`H-RO`, plus `H-AI` for obligation, acceptance and experience rows); automation rows (`H-SEC`); model-bearing rows in Contract 11 §4, §7, §11 and Contract 22 §11, §12, §18 (`H-MIG`).
- Keywords in the source pointer add risk holds: security and permission terms (`H-SEC`, including surveillance, autonomy, authority, confirmation, audit and performance-versus-security terms), isolation (`H-ISO`), duplicates, retries and recurrence (`H-IDEM`), times and dates (`H-TZ`), writes and destructive actions (`H-RO`), financial terms (`H-FIN`), interpretation and advice (`H-AI`), notification and channel terms (`H-NTF`).
- Named rows: `H-T1` on `22-§12-5`, `22-§12-6`, `22-§12-8`; `H-T6` on `4-§2-1`, `4-§2-2`, `4-§2-3`, `4-§13-1`, `4-§16-1`, `4-§16-2`, `4-§16-3`, `BP-§10.4-W5`; `H-TZDEF` on `4-§2-5`, `4-§13-5`, `4-§16-1`, `11-§4-5`, `11-§18-10`, `BP-§10.4-W5`; `H-ENGQ` on engineering-question rows.

**Status:**

- `BLOCKED` if any of `H-D12`, `H-D13`, `H-D14`, `H-DTX`.
- Otherwise `FOLLOW-UP` if any hold.
- Otherwise `PASS` **only** for rule, principle or must-not rows; any other kind with no hold receives `H-PAR` (feasibility to be confirmed by the S7-PAR challenge) and is `FOLLOW-UP`. **No row is promoted to `PASS` merely for having no dependency.**

**Risk:** `H` if the row carries `H-DTX`, `H-ISO`, `H-PRIV`, `H-T1`, `H-T6` or `H-TZDEF`; or `H-RO` on a must-not or acceptance row; or both `H-FIN` and `H-AI`; or is a Founder scenario part. `L` for `PASS` rows. Otherwise `M`.

**Specialist references:** `SP-1` for security, birth-safe, privileged, isolation and read-only holds; `SP-2` for scheduler, idempotency, time, T6 and timezone-default holds; `SP-3` for financial and `DTX` holds; `SP-4` for AI and provider holds and Ask CFO read-only; `SP-5` for migration, birth-safe, T1 and timezone-default holds; `SP-6` for notification and T1 holds. S7-PAR challenges every row.

**Finding:** each row's finding combines a kind-specific statement naming the row's own pointer and workstream, the exact upstream blockers where `BLOCKED`, and the highest-priority row risk.

**Calibration from the preliminary hypothesis.** Discovery's dependency-only split was 591 `BLOCKED` / 5 `FOLLOW-UP` / 98 `PASS` candidates. After applying structural, keyword and named holds, and refusing automatic `PASS`, the draft result is 591 `BLOCKED` / 93 `FOLLOW-UP` / 10 `PASS`. Keyword additions were made in three rounds during drafting, after reviewing `PASS` candidates (surveillance and automatic decisions; fake certainty; hidden or autonomous authority and cron times; confirmation, audit and performance terms), each moving rows out of `PASS`.

## 5. Results

| Measure | Value |
|---|---|
| Register rows | 694 (every `IN SCOPE` row exactly once) |
| `BLOCKED` / `FOLLOW-UP` / `PASS` | 591 / 93 / 10 |
| Risk H / M / L | 293 / 391 / 10 |
| Rows referencing SP-1 / SP-2 / SP-3 / SP-4 / SP-5 / SP-6 | 625 / 292 / 91 / 340 / 265 / 54 |

| Subsection | `BLOCKED` | `FOLLOW-UP` | `PASS` |
|---|---|---|---|
| §8.1 | 123 | 11 | 1 |
| §8.2 | 40 | 0 | 0 |
| §8.3 | 11 | 1 | 0 |
| §8.4 | 17 | 0 | 0 |
| §8.5 | 120 | 6 | 0 |
| §8.6 | 266 | 36 | 0 |
| §8.7 | 8 | 37 | 7 |
| §8.8 | 6 | 2 | 2 |

**Holds by condition:** `H-D12` 548, `H-D13` 534, `H-D14` 298, `H-DTX` 33, `H-PROV` 200, `H-SCHED` 268, `H-NTF` 54, `H-LATER` 61, `H-SEC` 232, `H-BIRTH` 265, `H-PRIV` 169, `H-ISO` 133, `H-IDEM` 58, `H-TZ` 57, `H-TZDEF` 6, `H-RO` 306, `H-FIN` 91, `H-AI` 283, `H-MIG` 62, `H-T1` 3, `H-T6` 8, `H-ENGQ` 11, `H-PAR` 15.

**`PASS` rows (10):** `11-§21-6`, `22-§17-1`, `22-§17-9`, `22-§19-8`, `22-§22-6`, `22-§27-8`, `22-§28-8`, `22-§28-10`, `BP-§9-4`, `BP-§13`. Each is a rule, principle or must-not row with no hold; `PASS` is documentary feasibility only and remains subject to the S7-PAR challenge.

**T8:** none raised. No row is found infeasible. Every `BLOCKED` row is blocked by an unbuilt upstream foundation and stays `IN SCOPE`.

## 6. Verification performed

### 6.1 Validation script (rerunnable)

Run from the repository root. It compares the base and head Blueprint and FCTM directly from Git:

```text
python -I s7validate.py 47a5aed3a1c95a1b96acc44d0248163ca06f8635 origin/mission/SB-P-1.15-stage7-engineering-review
```

```python
import re, subprocess, sys
# Usage: python -I s7validate.py <base-ref> <head-ref|WT>
BASE, HEAD = (sys.argv[1:3] + ['47a5aed3a1c95a1b96acc44d0248163ca06f8635', 'HEAD'])[:2]
BP = 'docs/phase-1-mission-blueprint/active/SB-P-1.15.md'
FC = 'communication/missions/SB-P-1.15/claude-code/03-stage2-populated-fctm.md'
def show(ref, p):
    if ref == 'WT':
        return open(p, encoding='utf-8').read()
    return subprocess.run(['git', 'show', ref + ':' + p], capture_output=True, text=True, encoding='utf-8', check=True).stdout
b0, b1 = show(BASE, BP), show(HEAD, BP)
f0, f1 = show(BASE, FC), show(HEAD, FC)
ROW = re.compile(r'^\| ((\d+)|BP)-§')
cells = lambda l: [x.strip() for x in l.strip().strip('|').split('|')]
def seg(t, a, b):
    i = t.index(a); return t[i:t.index(b, i) if b else len(t)]
res = {}
res['FCTM file unchanged'] = f0 == f1
fr = {c[0]: c for c in (cells(l) for l in f1.splitlines() if ROW.match(l))}
IS = [k for k, c in fr.items() if c[7].startswith('IN SCOPE')]
res['FCTM rows / IN SCOPE'] = (len(fr), len(IS))
res['Mission Snapshot + Sections 1-17 byte-identical'] = seg(b0, '\n## Mission Snapshot', '\n## 18. ') == seg(b1, '\n## Mission Snapshot', '\n## 18. ')
TRACE = ('### FCTM Row-ID to Blueprint Section and Source Traceability', '\n## 20. ')
t0 = b0[b0.index(TRACE[0]):].rstrip('\n')
t1 = seg(b1, TRACE[0], TRACE[1]).rstrip('\n')
res['Section 19 FCTM table and overlay byte-identical'] = t0 == t1
m0 = seg(b0, '## Metadata', '## Mission Snapshot').splitlines(); m1 = seg(b1, '## Metadata', '## Mission Snapshot').splitlines()
changed = [cells(a)[0] for a, b in zip(m0, m1) if a != b]
res['Metadata rows changed'] = changed
res['Metadata changes within authorized rows'] = len(m0) == len(m1) and set(changed) <= {'Lifecycle Stage', 'Status', 'Builder Review', 'Engineering Review (Sections 20–21)', 'Mission Control Review'}
s18_0, s18_1 = seg(b0, '\n## 18. ', '\n## 19. ').splitlines(), seg(b1, '\n## 18. ', '\n## 19. ').splitlines()
res['Section 18: exactly one row added, existing lines kept'] = len(s18_1) == len(s18_0) + 1 and all(l in s18_1 for l in s18_0)
g0 = seg(b0, '\n## 19. ', TRACE[0]).splitlines(); g1 = seg(b1, '\n## 19. ', TRACE[0]).splitlines()
res['Section 19 governance: only additions'] = all(l in g1 for l in g0) and len(g1) > len(g0)
res['Sections 20 and 21 appended once, after Section 19'] = b1.count('\n## 20. Engineering Review') == 1 and b1.count('\n## 21. Engineering Questions, Risks & Recommendations') == 1 and b1.index('\n## 20. ') > b1.index(TRACE[0])
s20 = seg(b1, '\n## 20. ', None)
reg = [cells(l) for l in seg(s20, '### 20.6 ', '### 20.7 ').splitlines() if ROW.match(l)]
ids = [r[0] for r in reg]
res['Register rows'] = len(reg)
res['Register duplicates'] = sorted({i for i in ids if ids.count(i) > 1})
res['IN SCOPE missing from register'] = sorted(set(IS) - set(ids))
res['Register rows not IN SCOPE'] = sorted(set(ids) - set(IS))
loc = {c[0]: c[5].split(',')[0].strip() for c in (cells(l) for l in t1.splitlines() if ROW.match(l))}
res['Section 8 home mismatches vs Section 19'] = [r[0] for r in reg if r[1] != loc.get(r[0])]
res['Kind mismatches vs FCTM'] = [r[0] for r in reg if r[3] != fr[r[0]][3]]
UP = {'`H-D12`', '`H-D13`', '`H-D14`', '`H-DTX`'}
bad = []
for r in reg:
    st, hl, kind, fnd = r[4].strip('`'), {x.strip() for x in r[6].split(',')}, r[3], r[8]
    if st not in ('BLOCKED', 'FOLLOW-UP', 'PASS') or r[5] not in ('H', 'M', 'L') or len(fnd) < 40: bad.append(r[0])
    if st == 'BLOCKED' and not (hl & UP): bad.append(r[0])
    if st != 'BLOCKED' and (hl & UP): bad.append(r[0])
    if st == 'PASS' and (r[6] != '—' or kind not in ('NEG', 'RULE', 'PRIN')): bad.append(r[0])
    if st == 'FOLLOW-UP' and r[6] == '—': bad.append(r[0])
res['Status/hold/finding rule violations'] = sorted(set(bad))
from collections import Counter
res['Status counts'] = dict(Counter(r[4].strip('`') for r in reg))
res['Risk counts'] = dict(Counter(r[5] for r in reg))
s21 = seg(b1, '\n## 21. ', None)
res['T1 open, no policy chosen'] = 'OPEN — Founder decision required' in s21 and 'No replay, backfill, discard, recipient selection or migration disposition is chosen' in s21
res['T6 founder question, no policy chosen'] = 'MATERIAL FOUNDER-GATE CANDIDATE' in s21 and 'is not decided' in s21
res['FDB-1 (d2) unassigned'] = '**(d2) unassigned**' in s21
res['Timezone default held'] = 'No default value or backfill for existing businesses' in s20
res['No specialist approval claimed'] = seg(s20, '### 20.1 ', '### 20.2 ').count('PENDING — not appointed') == 7 and seg(s20, '### 21.6 ', '### 21.7 ').count('PENDING — not appointed') == 2 and 'approved by S7' not in b1
res['Stage 7 marked DRAFT, not accepted'] = 'NOT ACCEPTED' in s20 and 'Definitive Stage 7 approval is withheld' in s21
for k, v in res.items():
    print('%s: %s' % (k, v))
```

### 6.2 Results on the submitted content

```text
FCTM file unchanged: True
FCTM rows / IN SCOPE: (803, 694)
Mission Snapshot + Sections 1-17 byte-identical: True
Section 19 FCTM table and overlay byte-identical: True
Metadata rows changed: ['Lifecycle Stage', 'Status', 'Builder Review', 'Engineering Review (Sections 20–21)', 'Mission Control Review']
Metadata changes within authorized rows: True
Section 18: exactly one row added, existing lines kept: True
Section 19 governance: only additions: True
Sections 20 and 21 appended once, after Section 19: True
Register rows: 694
Register duplicates: []
IN SCOPE missing from register: []
Register rows not IN SCOPE: []
Section 8 home mismatches vs Section 19: []
Kind mismatches vs FCTM: []
Status/hold/finding rule violations: []
Status counts: {'FOLLOW-UP': 93, 'BLOCKED': 591, 'PASS': 10}
Risk counts: {'M': 391, 'H': 293, 'L': 10}
T1 open, no policy chosen: True
T6 founder question, no policy chosen: True
FDB-1 (d2) unassigned: True
Timezone default held: True
No specialist approval claimed: True
Stage 7 marked DRAFT, not accepted: True
```

| Required check (SB-P-1.15-MC-14 §5) | Result |
|---|---|
| All 694 `IN SCOPE` IDs appear exactly once; bidirectional with the FCTM | PASS |
| Each row's Section 8 home equals Blueprint Section 19 | PASS |
| All 803 FCTM dispositions unchanged (FCTM file and Section 19 table unchanged) | PASS |
| Sections 1–17 (with Mission Snapshot) and the Section 19 FCTM table and overlay byte-identical | PASS |
| Metadata changes limited to the five authorized rows; one Section 18 row; Section 19 governance additions only | PASS |
| Every row has a non-empty row-specific finding; status and hold rules hold | PASS |
| T1, T6 and FDB-1 (d2) holds explicit; no replay, backfill, discard or missed-slot policy chosen; timezone default held | PASS |
| No specialist approval claimed; Stage 7 marked DRAFT | PASS |

### 6.3 Other checks

| Check | Result |
|---|---|
| Team LIPS Markdown Quality Gate on both files | Recorded in the pull request description |
| Exact changed paths (`git diff --name-status 47a5aed3 HEAD`) | Exactly the two authorized paths |
| Secret scan of the staged diff | Recorded in the pull request description |

**NO CI PASS IS CLAIMED.** The last `main` workflow runs are dated 2026-09-30; no run exists for any SB-P-1.15 record. Runtime and provider facts remain `UNVERIFIED — ACCESS REQUIRED`.

## 7. Early delivery plan (summary)

Blueprint Section 20.4 records it in full. Environments are local and the isolated test project only once verified. The activation order is SB-P-1.12, then SB-P-1.13, then SB-P-1.14 and the `DTX` cut-over, then this mission's foundations. Seven planned migration groups each need rehearsal against the real migration ledger and birth-safe grants; **none chooses a timezone default for existing businesses or a disposition for legacy correction-notification events**. CI tiers apply only when implementation is separately authorized. Production mutation, migration execution, delivery, scheduler activation, notification dispatch and AI provider activation are **NOT AUTHORIZED**.

## 8. Specialist dependencies (pending)

| Review | Topic | Status |
|---|---|---|
| S7-SP-1 | Security, RLS, default grants, service role, cross-business isolation | PENDING — not appointed |
| S7-SP-2 | Scheduler concurrency, idempotency, business-local time, timezone changes | PENDING — not appointed |
| S7-SP-3 | DTX/PQ-2, financial integrity, credit-method-sales truth | PENDING — not appointed |
| S7-SP-4 | AI grounding, no accusation, read-only, no prompt-induced write | PENDING — not appointed |
| S7-SP-5 | Migration, data transition, grants, legacy notification mapping without T1 policy | PENDING — not appointed |
| S7-SP-6 | Notification state, former-Owner eligibility, request and adapter seam | PENDING — not appointed |
| S7-PAR | Non-author independent engineering feasibility challenge, separate from SP-1 to SP-6 | PENDING — not appointed |

No reviewer identity, finding or approval is invented. Mission Control authorizes exact reviewer assignments and paths separately. Findings depending on these topics are not relied on until dispositioned.

## 9. Open gates and holds

- **T1 — OPEN Founder decision:** historical correction notifications when delivery becomes available. No replay, backfill, discard, recipient-selection or migration disposition chosen. Production backlog and delivery history unverified. **Blocks Stage 8 lock.**
- **T6 — material Founder-gate candidate:** missed or delayed Daily Intelligence briefings, skip versus late. Policy-neutral mechanisms only. Founder clarification sought before final Stage 7 disposition and Stage 8 lock.
- **T6 watch — DC-03:** existing-business timezone default and historical business-date reinterpretation held.
- **FDB-1:** (a) SB-P-1.14 event and SB-P-1.12 eligibility; (b) SB-P-1.15 foundation; (c) SB-P-1.20 delivery; (d1) separate corrective candidate; **(d2) unassigned**.
- **FDB-2** native-only, disclosed; **FDB-3** qualified, permission-scoped, read-only; authoritative balances SB-P-1.16.
- **U-3** held; **U-5** unresolved; **DC-06** not assumed binary.
- **Holds:** `D12`, `D13`, `D14`, `DTX`/PQ-2, AI, scheduler, notification, later-mission, migration default-deny, CI and provider/runtime.

## 10. Changes made

Two paths only, as in Section 2. No FCTM, contract, Build Plan, Completion View, Founder record, upstream mission, README, log, Stage Ledger, `communication/live/**`, `src/**`, `supabase/**` or provider change. No EIS, SQL, migration, scheduler activation, notification dispatch, deployment or production action.

## 11. Next gate

Mission Control Stage 7 draft content review and specialist sequencing. Specialist reports and the S7-PAR challenge are separately authorized; reconciliation happens on the same pull request. Definitive Stage 7 approval, Stage 8 and the Blueprint lock remain withheld, and Stage 8 is additionally blocked by the open T1 decision.

**STOP FOR MISSION CONTROL STAGE 7 DRAFT CONTENT REVIEW.**
