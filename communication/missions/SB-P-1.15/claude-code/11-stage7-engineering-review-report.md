# SB-P-1.15 — Stage 7 Engineering Review Report (v0.3 Reconciliation, Draft)

**Mission:** SB-P-1.15 — Reminder, Daily Intelligence & Ask CFO  
**Status:** `DRAFT STAGE 7 OUTPUT v0.3 — PROPOSED, NOT MERGED — NOT ACCEPTED — NOT CANONICAL UNTIL MISSION CONTROL REVIEW AND FOUNDER HUMAN MERGE`  
**Prepared by:** Claude Code, Stage 7 Engineering Review owner (also the author of Stages 2–6; not independent assurance), under the SB-P-1.15-MC-76 bounded publication instruction  
**Baseline:** `main@92cf84732c736f1bfb333bd4600da8a23060afc0`, 2026-10-12  
**Branch:** `mission/SB-P-1.15-stage7-v0.3-reconciliation`  
**Implementation:** NOT AUTHORIZED

## 1. Objective

Publish the reconciled Stage 7 Engineering Review (Blueprint Sections 20–21 v0.3) from a fresh branch on verified protected `main`, within the two-path boundary of the MC-76 publication instruction. The reconciliation applies transforms R-1 to R-6 to the formal 694-row register of the unmerged v0.2 draft (PR #870), integrates SB-P-1.15-FPDR-02, SB-P-1.15-FPDR-03, MC-74 and MC-75 D1–D3, dispositions all 44 specialist findings and overlays the S7-PAR draft annexes. It is a proposal, not Stage 7 acceptance.

## 2. Changed paths

| Path | Change |
|---|---|
| `docs/phase-1-mission-blueprint/active/SB-P-1.15.md` | Appended `## 20. Engineering Review` and `## 21. Engineering Questions, Risks & Recommendations` (v0.3); updated five Metadata rows (Lifecycle Stage, Status, Builder Review, Engineering Review, Mission Control Review); added one Section 18 row (v0.3, recording PR #870 v0.2 as an unmerged historical draft); added Section 19 governance-history rows outside the FCTM traceability table |
| `communication/missions/SB-P-1.15/claude-code/11-stage7-engineering-review-report.md` | New — this report (the v0.2 report of the same name exists only in unmerged PR #870) |

PR #870 and PR #898 were not modified, merged or closed.

## 3. Source verification

| Source | Expected | Result |
|---|---|---|
| Protected `main` | `92cf84732c736f1bfb333bd4600da8a23060afc0` | Match (`git ls-remote`, 2026-10-12) |
| MC-76 record `mission-control/77-…` | blob `2ed41078dfc057212b8db9cdd7b045059f38f4b9` | Match |
| MC-75 / MC-74 / MC-73 / MC-72 records | `32be98a1` / `e7580b82` / `f809bf42` / `9a1bd13c` | Match |
| FPDR-01 / FPDR-02 / FPDR-03 | `0e0928fe` / `373a31df` / `2382846b` | Match |
| Blueprint Sections 1–19 (input) | blob `2fe8198933fe16c6ac0820ae73f15d1a7157207c` | Match |
| Canonical FCTM | blob `65eeaf8d31b81595b971c22895615a096555f84f` | Match; unchanged |
| Specialist reports 01–06 | `43b3b7a7` / `bd5041b6` / `34148818` / `e0c512c3` / `65611102` / `d1096aae` | Match |
| PR #870 (v0.2 register source) | OPEN/DRAFT at `6e21b3de414cf33c25b848a7a93fcfc51c1d6e13` | Match; untouched |
| PR #898 annexes 07b / 07c / 07d / 07g | OPEN/DRAFT at `7371161b9cffca11932657c085cdca0e5285d964`; blobs `7e82e1b8` / `2f5eaa28` / `8eb1f5a6` / `ce2a7d37` | Match; exactly four files; untouched |

## 4. Reconciliation method

The generator in Appendix A reads the v0.2 register from PR #870, the canonical FCTM, the six specialist reports and the four PR #898 annexes, and writes the register mechanically. Prose sections are authored text.

| Transform | Rule |
|---|---|
| R-1 Founder restoration | `H-T1` → `H-ACT` + `H-CORR`; `H-T6` → `H-LVB`; `H-TZDEF` → `H-TZC`; the open-decision clause in each affected finding is replaced by the FPDR-02, FPDR-03 or MC-74/MC-75 decision text. |
| R-2 Specialist propagation | Findings citing the row inside a finding section (`*`); findings mapped by the S7-PAR draft annex (`†`); findings governing one of the row's hold classes (unmarked). |
| R-3 S7-PAR overlay | Annex, classification, severity and the independent correction or retained hold quoted verbatim, labelled **DRAFT ANNEX EVIDENCE — NOT PUBLISHED CANONICALLY**; correction-required rows add `H-PAR`. §8.5 rows add `H-PAR` and the finding-level bridge. Annex text predating MC-74/MC-75 is flagged on the three affected rows. |
| R-4 No provisional PASS | Former `PASS` → `DESIGN ACCEPTED — EVIDENCE HOLD` (`H-EVID`), or `FOLLOW-UP` (`H-PAR` plus a domain hold) where S7-PAR requires correction. |
| R-5 Vocabulary | `BLOCKED` → `DEPENDENCY-HELD`; "Blocked until" → "Dependency-held until". |
| R-6 Criticality | Author risk = v0.2 rating, with `C` for `4-§16-1` and `24-§16-1`; effective risk = higher of author and S7-PAR severity. |

## 5. Results

| Measure | v0.2 (PR #870) | v0.3 (recomputed) | MC-76 dry-run target |
|---|---|---|---|
| Rows | 694 | 694 | 694 |
| `DEPENDENCY-HELD` (v0.2 `BLOCKED`) | 591 | 591 | 591 |
| `FOLLOW-UP` | 93 | 95 | 95 |
| `DESIGN ACCEPTED — EVIDENCE HOLD` | — | 8 | 8 |
| `PASS` | 10 | 0 | 0 |
| Author risk C / H / M / L | 0 / 293 / 391 / 10 | 2 / 291 / 391 / 10 | 2 / 291 / 391 / 10 |
| Effective risk C / H / M / L | — | 5 / 318 / 368 / 3 | 5 / 318 / 368 / 3 |

The recomputed totals equal the MC-76 targets; they were computed from the actual rows, not forced. Other results:

- **S7-PAR draft annexes:** 102 correction required, 18 direction accepted, 1 policy or dependency hold (121 rows). The independent rating is higher than the author's on 34 rows and lower on 15; the higher rating governs effective risk.
- **Effective Critical:** `4-§16-1`, `22-§23-2`, `22-§28-9`, `22-§29-3`, `24-§16-1`.
- **Former PASS → FOLLOW-UP** (S7-PAR correction required): `22-§17-9`, `22-§19-8`.
- **Author assessment only** (no published independent row-level assessment): `11-§21-6`, `BP-§9-4`, `BP-§10.4-X`, `BP-§13`.
- **Specialist findings:** all 44 dispositioned in Section 21.6 — 8 restored by Founder decision, 22 incorporated as design, 14 direction accepted with evidence held; all 44 appear in the register. 183 rows are explicitly cited inside a canonical finding section.
- **`H-PAR`:** 235 rows (126 §8.5 bridge rows; 102 annex correction-required rows; 3 annex direction-accepted rows awaiting canonical publication; 4 author-only rows).

## 6. Verification performed

### 6.1 Validator (rerunnable)

Appendix B is the validator. Run from the repository root after fetching the frozen PR heads (`git fetch origin pull/870/head pull/898/head`): `python -I s8validate.py 92cf84732c736f1bfb333bd4600da8a23060afc0 HEAD`. It reads the annexes from the PR #898 git objects and the v0.2 register from the PR #870 git objects.

### 6.2 Results on the submitted content

```text
1. Exactly the two authorized paths differ from base: OK
FCTM file unchanged: OK
FCTM 803 rows / 694 IN SCOPE: OK
2a. Mission Snapshot + Sections 1-17 byte-identical: OK
2b. Section 19 FCTM table and overlay byte-identical: OK
Text before Metadata byte-identical: OK
3. Only the five authorized metadata rows changed: OK
4. Exactly one Section 18 row added (v0.3, PR #870 v0.2 unmerged): OK
Section 19 governance: additions only: OK
Sections 20 and 21 appear once, after Section 19: OK
Sections 20.1-20.7 and 21.1-21.7 present in order: OK
5. Register has 694 rows, each IN SCOPE ID exactly once: OK
6a. Section 8 home matches Section 19 for every row: OK
6b. Kind matches FCTM; FCTM disposition IN SCOPE; home/assessment/kind identical to v0.2: OK
7a. Closed status vocabulary, hold rules, author and effective risk rules: OK
7b. Section 20.7 totals equal recomputed totals: OK
   recomputed status: {'FOLLOW-UP': 95, 'DEPENDENCY-HELD': 591, 'DESIGN ACCEPTED — EVIDENCE HOLD': 8}
   recomputed author risk C/H/M/L: [2, 291, 391, 10]
   recomputed effective risk C/H/M/L: [5, 318, 368, 3]
8. All 121 annex overlay records match PR #898 bytes; §8.5 rows bridged with H-PAR: OK
8b. Every annex CORRECTION REQUIRED row carries H-PAR: OK
9. All 44 canonical findings dispositioned once in 21.6 and traced in the register: OK
   21.6 disposition groups: {'Incorporated as design': 22, 'Direction accepted': 14, 'Restored by Founder decision FPDR-03': 3, 'Restored by Founder decision MC-74 and MC-75 D2/D3': 2, 'Restored by Founder decision FPDR-02': 3}
10. Effective Critical set is exactly the five approved IDs: OK
11. No PASS status and no runtime, test, CI or acceptance claim: OK
12a. Stale v0.2 wording absent (T1/T6 open, d2 unassigned, superseded E-04 grant claim): OK
12b. Trigger screen records T1/T6/DC-03/FDB-1 decisions and T7/T8 screen with reopeners: OK
12c. Founder decisions and grant chronology cited: OK
13. No secret-like strings in the two files: OK
RESULT: ALL CHECKS PASSED
```

A mutation test (one register status set to `PASS` and one Critical effective rating lowered) made checks 7a, 7b, 10 and 11 fail as intended; the file was then restored from the generator output.

### 6.3 Other checks

| Check | Result |
|---|---|
| Team LIPS Markdown Quality Gate (`tools/markdown/quality_gate.py`) on both files | QUALITY GATE PASSED (local run) |
| Exact changed paths | Exactly the two authorized paths (validator check 1; repeated in the pull request description) |
| Secret scan of both files | No secret-like strings (validator check 13) |

**NO CI PASS IS CLAIMED.** The most recent `main` workflow runs recorded are dated 2026-09-30 (re-queried 2026-10-12). Runtime and provider facts remain `UNVERIFIED — ACCESS REQUIRED`. No negative test was executed; every test in the specialist reports and annexes remains **PROPOSED — NOT EXECUTED**.

## 7. Material design blockers and downstream evidence holds

- **Design blockers:** none identified by the formal author after integrating the Founder decisions. Mission Control must still verify this publication and decide the `H-PAR` evidence limits before Stage 7 final disposition. This statement is the author's, not independent assurance; MC-73's independent verdict (**MATERIAL BLOCKER(S) REMAIN**, pending canonical reconciliation) stands until Mission Control re-disposes it.
- **Governance dependency:** `H-CORR` — the MC-75 D1 corrective mission is not activated; no correction notification is operational or claimed.
- **Evidence limits:** PR #898 annexes are draft, not canonical; the private §8.5 derivative v2 (including 14 scheduler refinements across 12 IDs and the `4-§2-4` refinement) and the 22-MATERIAL register were not consumed; the 22-MATERIAL cross-check was not performed.
- **Downstream evidence holds:** Blueprint Section 21.4 lists each hold with its row count, owner and verification stage (D12/D13/D14/DTX upstream; birth-safe access, privileged execution, isolation and read-only proof; scheduler runtime and idempotency; migration rehearsal and restore; notification and provider gates; CI recovery; U-3, U-5, DC-06).

## 8. Trigger screen

T1 decided (FPDR-02); T6 decided (FPDR-03); DC-03 decided (MC-74, MC-75 D2/D3); FDB-1 route decided (MC-75 D1, not activated). **No T7 or T8 candidate is substantiated.** `DEPENDENCY-HELD` denotes unbuilt upstream foundations only. T8 reopeners and the T3/T7 screen for the corrective mission are recorded in Blueprint Section 21.5.

## 9. Changes made

Two paths only, as in Section 2. No change to PR #870, PR #898, Source 18, FCTM, Product Truth, Founder records, contracts, specialist reports or annexes, README, logs, Stage Ledger, `communication/live/**`, `src/**` or `supabase/**`. No EIS, SQL, migration, scheduler activation, notification dispatch, negative-test execution, deployment, 07e publication or production action.

## 10. Next gate

Mission Control review of this DRAFT pull request and Founder human merge. Only after merge and Mission Control's independent verification may Mission Control decide Stage 7 final disposition. Stage 8 Founder approval and Blueprint lock remain later gates. Closing PR #870 as superseded is a separate Founder action (MC-76 D1).

**STOP FOR MISSION CONTROL REVIEW AND FOUNDER HUMAN MERGE.**

## Appendix A — Register generator

Inputs are staged read-only copies: `s8/bp_main.md` (`git show 92cf8473:docs/phase-1-mission-blueprint/active/SB-P-1.15.md`), `s8/bp_frozen.md` (same path at `6e21b3de`), `s8/fctm.md` (FCTM at `92cf8473`), `s8/spec/` (the six specialist reports at `92cf8473`), `annex/` (the four annexes at `7371161b`) and `s8/s2021_tpl.md` (the authored Sections 20–21 text with placeholders). Run: `python -I gen.py <s8-dir> <annex-dir> <out-blueprint> <out-stats-json>`.

```python
"""SB-P-1.15 Stage 7 v0.3 reconciliation generator (R-1..R-6).

Usage: python -I gen.py <s8-dir> <annex-dir> <out-blueprint> <out-stats-json>
Inputs (all read-only copies):
  s8/bp_main.md     Blueprint at verified protected main
  s8/bp_frozen.md   Blueprint at frozen PR #870 head 6e21b3de (v0.2 register source)
  s8/fctm.md        canonical FCTM
  s8/spec/*.md      six canonical specialist reports
  annex/07[bcdg]*   frozen PR #898 annexes at 7371161b
  s8/s2021_tpl.md   prose template for Sections 20-21
"""
import glob, json, re, sys
from collections import Counter, OrderedDict

S8, ANX, OUT, STATS = sys.argv[1:5]
rd = lambda p: open(p, encoding='utf-8').read()
cells = lambda l: [x.strip() for x in l.strip().strip('|').split('|')]
ROW = re.compile(r'^\| ((\d+)|BP)-§')

main = rd(S8 + '/bp_main.md')
frozen = rd(S8 + '/bp_frozen.md')
fctm = {c[0]: c for c in (cells(l) for l in rd(S8 + '/fctm.md').splitlines() if ROW.match(l))}
INSCOPE = [k for k, c in fctm.items() if c[7].startswith('IN SCOPE')]

reg_txt = frozen[frozen.index('### 20.6 '):frozen.index('### 20.7 ')]
reg = OrderedDict((c[0], c) for c in (cells(l) for l in reg_txt.splitlines() if ROW.match(l)))
assert len(reg) == 694 and set(reg) == set(INSCOPE)

# ---------- canonical specialist findings (44) ----------
FID = re.compile(r'\b(SEC15-S7-0\d|SP2-0\d|FIN15-S7-0\d|AI15-S7-0\d|MIG15-S7-0\d|NTF15-0\d)\b')
HEAD = re.compile(r'^#{2,3} (?:\d+\. )?(SEC15-S7-0\d|SP2-0\d|FIN15-S7-0\d|AI15-S7-0\d|MIG15-S7-0\d|NTF15-0\d) — (.+)$', re.M)
findings = OrderedDict()
cites = {}
for f in sorted(glob.glob(S8 + '/spec/*.md')):
    t = rd(f)
    hs = list(HEAD.finditer(t))
    for i, m in enumerate(hs):
        lvl = len(m.group(0)) - len(m.group(0).lstrip('#'))
        nxt = re.search(r'^#{1,%d} ' % lvl, t[m.end():], re.M)
        body = t[m.end(): m.end() + nxt.start()] if nxt else t[m.end():]
        findings[m.group(1)] = (m.group(2).strip(), f.replace('\\', '/').split('/')[-1])
        cites[m.group(1)] = {x for x in re.findall(r'`((?:\d+|BP)-§[^`\s]+)`', body) if x in reg}
assert len(findings) == 44, sorted(findings)

HMAP = {
    'H-BIRTH': ['SEC15-S7-01', 'MIG15-S7-03'],
    'H-PRIV': ['SEC15-S7-02', 'SP2-04', 'SP2-07', 'FIN15-S7-03'],
    'H-ISO': ['SEC15-S7-03', 'SP2-07', 'NTF15-07'],
    'H-RO': ['SEC15-S7-04', 'AI15-S7-04', 'FIN15-S7-08'],
    'H-SEC': ['SEC15-S7-03', 'FIN15-S7-07', 'AI15-S7-07'],
    'H-IDEM': ['SP2-02', 'SP2-03', 'MIG15-S7-04'],
    'H-SCHED': ['SP2-02', 'SP2-07'],
    'H-TZ': ['SP2-05', 'SP2-08'],
    'H-TZC': ['SP2-06', 'MIG15-S7-02'],
    'H-LVB': ['SP2-01', 'AI15-S7-01', 'NTF15-06'],
    'H-ACT': ['FIN15-S7-06', 'MIG15-S7-01', 'NTF15-02'],
    'H-FIN': ['FIN15-S7-04', 'FIN15-S7-05'],
    'H-DTX': ['FIN15-S7-01', 'FIN15-S7-02'],
    'H-AI': ['AI15-S7-02', 'AI15-S7-05', 'AI15-S7-06'],
    'H-PROV': ['AI15-S7-03', 'AI15-S7-05'],
    'H-NTF': ['NTF15-01', 'NTF15-03', 'NTF15-04', 'NTF15-05', 'NTF15-08', 'NTF15-09', 'SEC15-S7-05'],
    'H-MIG': ['MIG15-S7-04', 'MIG15-S7-06', 'MIG15-S7-07'],
    'H-D12': ['MIG15-S7-07'], 'H-D13': ['MIG15-S7-07'], 'H-D14': ['MIG15-S7-05', 'MIG15-S7-07'],
}
assert {x for v in HMAP.values() for x in v} == set(findings)
ORDER = list(findings)

# ---------- frozen PR #898 annexes ----------
CLS_F = {'b': 'Independent feasibility/classification', 'c': 'Independent feasibility/classification',
         'd': 'Independent design/feasibility finding', 'g': 'Independent consequence-based judgment'}
SEV_F = {'b': 'Consequence-based independent severity', 'c': 'Independent severity and consequence',
         'd': 'Consequence-based independent severity', 'g': 'Independent consequence-based judgment'}
COR_F = {'b': 'Required engineering correction / accepted direction / retained hold',
         'c': 'Correction, accepted direction or retained hold',
         'd': 'Required correction / accepted direction / retained hold',
         'g': 'Correction or retained evidence hold'}
SPC_F = {'b': 'Specialist finding relevance', 'c': 'Specialist reconciliation references',
         'd': 'Relevant cross-specialist findings', 'g': 'Specialist applicability'}
SHORT = re.compile(r'(SEC15-S7-|SP2-|FIN15-S7-|AI15-S7-|MIG15-S7-|NTF15-)(\d\d)((?:/\d\d)*)')
def expand(s):
    out = set()
    for pre, a, rest in SHORT.findall(s):
        out |= {pre + x for x in [a] + [y for y in rest.split('/') if y]}
    return out
CLASSES = ('CORRECTION REQUIRED', 'DIRECTION ACCEPTED / EVIDENCE HOLD', 'POLICY / DEPENDENCY HOLD')
SEVS = ('CRITICAL', 'HIGH', 'MEDIUM', 'LOW')
par = OrderedDict()
for f in sorted(glob.glob(ANX + '/07[bcdg]-*.md')):
    k = f.replace('\\', '/').split('/')[-1][2]
    t = rd(f)
    parts = re.split(r'^### ((?:\d+|BP)-§\S+) — .*$', t, flags=re.M)
    for i in range(1, len(parts), 2):
        rid, body = parts[i], parts[i + 1]
        fld = lambda name: re.search(r'^- \*\*' + re.escape(name) + r'(?: \([^)]*\))?:\*\* (.+)$', body, re.M)
        c, s, r, sp = fld(CLS_F[k]), fld(SEV_F[k]), fld(COR_F[k]), fld(SPC_F[k])
        if not (c and s and r and sp):
            continue
        cl = [x for x in CLASSES if x in c.group(1)]
        sv = [x for x in SEVS if re.search(r'\*\*(?:[A-Z /]+/ )?' + x + r'\*\*', s.group(1))]
        assert len(cl) == 1 and len(sv) == 1, (rid, c.group(1)[:80], s.group(1)[:80])
        assert rid not in par, rid
        par[rid] = {'annex': '07' + k, 'cls': cl[0], 'sev': sv[0], 'cor': r.group(1).strip(), 'spec': sorted(expand(sp.group(1)))}
        assert set(par[rid]['spec']) <= set(findings), (rid, par[rid]['spec'])
assert len(par) == 121 and set(par) <= set(reg)

# ---------- transforms ----------
UP = {'H-D12', 'H-D13', 'H-D14', 'H-DTX'}
CRIT_MC = ('4-§16-1', '24-§16-1')
RK = {'L': 0, 'M': 1, 'H': 2, 'C': 3}
SV = {'LOW': 'L', 'MEDIUM': 'M', 'HIGH': 'H', 'CRITICAL': 'C'}
RENAME = {'H-T1': 'H-ACT', 'H-T6': 'H-LVB', 'H-TZDEF': 'H-TZC'}
T6_OLD = 'Risk: missed or delayed briefing behaviour is a T6 Founder question; only policy-neutral detection and disclosure are specified.'
T6_NEW = ('Risk: FPDR-03 governs — show the latest valid native briefing with its scheduled slot, actual generation time and source as-of; '
          'no duplicate briefing, no invented staleness cutoff and no late outbound send (`H-LVB`).')
TZ_OLD = 'Risk: no timezone default or historical business-date reinterpretation is chosen for existing businesses (DC-03 watch).'
TZ_NEW = ('Risk: MC-74 DC-03 and MC-75 D2/D3 govern — Owner-only confirmed IANA timezone, non-authoritative suggestion, '
          'no scheduling or default while unconfirmed, changes effective at the next business-day boundary in the new timezone, '
          'historical Ledger dates never reinterpreted (`H-TZC`).')
T1_OLD = 'Risk: historical correction notifications are an open T1 Founder decision; no replay, backfill or discard policy chosen.'
T1_NEW = ('Risk: FPDR-02 governs — prospective-only from an audited activation boundary, no historical replay and no bulk status rewrite; '
          'correction-specific integration routed to the unactivated MC-75 D1 corrective mission (`H-ACT`, `H-CORR`).')
PASS_OLD = 'No dependency and no identified risk; documentary feasibility only.'
DA_NEW = 'No upstream dependency. Design direction accepted documentarily only; runtime, negative-test and acceptance evidence held (`H-EVID`).'
CR_NEW = 'No upstream dependency, but the independent S7-PAR draft annex requires correction (quoted below); not design-accepted (`H-PAR`).'
CR_PASS_HOLD = {'22-§17-9': 'H-SEC', '22-§19-8': 'H-IDEM'}
esc = lambda s: s.replace('|', '\\|')

rows, stats = [], {'status': Counter(), 'risk_author': Counter(), 'risk_eff': Counter(), 'holds': Counter(),
                   'sub': {}, 'par_cls': Counter(), 'raised': [], 'lowered': [], 'design_accepted': [],
                   'pass_to_followup': [], 'crit': [], 'author_only': []}
for rid, c in reg.items():
    home, asm, kind, st0, rk0, hl0, _, fnd = c[1], c[2], c[3], c[4].strip('`'), c[5], c[6], c[7], c[8]
    holds = [] if hl0 == '—' else [h.strip().strip('`') for h in hl0.split(',')]
    holds = [RENAME.get(h, h) for h in holds]
    # R-1 Founder restorations
    fnd = fnd.replace(T6_OLD, T6_NEW)
    if 'H-TZC' in holds and TZ_OLD not in fnd:
        fnd += ' ' + TZ_NEW
    fnd = fnd.replace(TZ_OLD, TZ_NEW).replace(T1_OLD, T1_NEW)
    if 'H-ACT' in holds:
        holds.append('H-CORR')
    # R-5 vocabulary
    fnd = fnd.replace('Blocked until', 'Dependency-held until')
    p = par.get(rid)
    # R-4 provisional PASS removal
    if st0 == 'PASS':
        assert PASS_OLD in fnd
        if p and p['cls'] == 'CORRECTION REQUIRED':
            st = 'FOLLOW-UP'; holds += [CR_PASS_HOLD[rid], 'H-PAR']
            fnd = fnd.replace(PASS_OLD, CR_NEW); stats['pass_to_followup'].append(rid)
        else:
            st = 'DESIGN ACCEPTED — EVIDENCE HOLD'; holds.append('H-EVID')
            fnd = fnd.replace(PASS_OLD, DA_NEW); stats['design_accepted'].append(rid)
            if not p:
                holds.append('H-PAR'); stats['author_only'].append(rid)
                fnd += ' No published independent row-level assessment exists; author assessment only (`H-PAR`).'
    elif st0 == 'BLOCKED':
        st = 'DEPENDENCY-HELD'
    else:
        st = st0
    # R-3 S7-PAR overlay
    PAROLD = 'Risk: feasibility to be confirmed by the S7-PAR challenge.'
    if PAROLD in fnd:
        fnd = fnd.replace(PAROLD, 'Independent row-level challenge exists only as draft annex evidence (below); held (`H-PAR`).' if p else
                          'Risk: no published independent row-level assessment exists; author assessment only (`H-PAR`).')
        if not p: stats['author_only'].append(rid)
    if p:
        stats['par_cls'][p['cls']] += 1
        if p['cls'] == 'CORRECTION REQUIRED' and 'H-PAR' not in holds:
            holds.append('H-PAR')
        fnd += ' S7-PAR %s (DRAFT ANNEX EVIDENCE — NOT PUBLISHED CANONICALLY, PR #898 `7371161b`) %s / %s; independent requirement carried verbatim: «%s»' % (
            p['annex'], p['cls'], p['sev'], esc(p['cor']))
        if re.search(r'DC-03|UNASSIGNED', p['cor']):
            fnd += (' The annex predates the Founder decisions: where it records DC-03 as unresolved or FDB-1(d2) as unassigned, '
                    'MC-74 and MC-75 D1–D3 now govern (Sections 20.3.1 and 21.5); the independent safeguard itself is retained.')
            stats.setdefault('annex_superseded_note', []).append(rid)
        par_cell = '%s %s / %s' % (p['annex'], p['cls'], p['sev'])
    elif home == '§8.5':
        if 'H-PAR' not in holds:
            holds.append('H-PAR')
        fnd += (' §8.5 independent review: private MC-71 derivative v2 not consumed by the formal author; '
                'finding-level bridge through the cited specialist findings only (`H-PAR`).')
        par_cell = '§8.5 private v2 — not consumed'
    else:
        par_cell = '—'
    # R-6 criticality and effective risk
    rk_a = 'C' if rid in CRIT_MC else rk0
    rk_i = SV[p['sev']] if p else '—'
    rk_e = rk_i if p and RK[rk_i] > RK[rk_a] else rk_a
    if p and RK[rk_i] > RK[rk_a]: stats['raised'].append(rid)
    if p and RK[rk_i] < RK[rk_a]: stats['lowered'].append(rid)
    if rid in CRIT_MC:
        fnd += (' Critical consequence (MC-72/MC-73) retained independently of design sufficiency; design direction in Section 20.3.8; '
                'runtime and negative evidence held; no exploit or runtime correctness claimed.')
    elif rk_e == 'C':
        fnd += (' Effective Critical from the independent S7-PAR rating (MC-76 D3, proposed for Founder ratification); '
                'safeguards in Sections 20.3.4 and 20.3.5; no exploit, executed negative test or runtime proof claimed.')
    if rk_e == 'C': stats['crit'].append(rid)
    # R-2 specialist findings
    fs = {x for h in holds for x in HMAP.get(h, [])}
    exp = {f for f, ids in cites.items() if rid in ids}
    dra = set(p['spec']) - fs - exp if p else set()
    fs |= exp | dra
    fcell = ', '.join(x + ('*' if x in exp else '†' if x in dra else '') for x in ORDER if x in fs) or '— (author assessment only)'
    if fcell.startswith('—'):
        stats.setdefault('no_findings', []).append(rid)
    hcell = ', '.join('`%s`' % h for h in OrderedDict.fromkeys(holds)) or '—'
    rows.append('| %s | %s | %s | %s | `%s` | %s | %s | %s | %s | %s | %s |' % (
        rid, home, asm, kind, st, rk_a, par_cell, rk_e, hcell, fcell, fnd))
    stats['status'][st] += 1; stats['risk_author'][rk_a] += 1; stats['risk_eff'][rk_e] += 1
    for h in OrderedDict.fromkeys(holds): stats['holds'][h] += 1
    sb = stats['sub'].setdefault(home, Counter()); sb[st] += 1; sb['rows'] += 1; sb['eff_' + rk_e] += 1

# ---------- assemble ----------
st = stats['status']
HOLD_ORDER = ['H-D12', 'H-D13', 'H-D14', 'H-DTX', 'H-PROV', 'H-SCHED', 'H-NTF', 'H-LATER', 'H-SEC', 'H-BIRTH', 'H-PRIV',
              'H-ISO', 'H-IDEM', 'H-TZ', 'H-TZC', 'H-LVB', 'H-ACT', 'H-CORR', 'H-RO', 'H-FIN', 'H-AI', 'H-MIG', 'H-ENGQ',
              'H-PAR', 'H-EVID']
assert set(stats['holds']) <= set(HOLD_ORDER), set(stats['holds']) - set(HOLD_ORDER)
HMEAN = {
    'H-D12': ('SB-P-1.12 kernel implementation and evidence', 'SB-P-1.12 (resume at its withheld Implementation Authorization); re-check at this mission\'s Stage 19'),
    'H-D13': ('SB-P-1.13 Workspace, conversation and AI kernel implementation and evidence', 'SB-P-1.13; re-check at Stage 19'),
    'H-D14': ('SB-P-1.14 governed Ledger, Business Memory and correction command implementation and evidence', 'SB-P-1.14; re-check at Stage 19'),
    'H-DTX': ('Single governed transactions-family write path (PQ-2) cut-over', 'Cross-mission migration mission; Stage 19'),
    'H-PROV': ('AI provider configuration, data controls and revocation-safe AI context evidence', 'SB-P-1.13 provider gate; EIS (Stage 9) and Stage 17'),
    'H-SCHED': ('Scheduler runtime selection, authorization and verification', 'SB-P-1.15 builder with runtime authorization; EIS, Stages 15–19'),
    'H-NTF': ('Native notification semantics, recipient authority and request/attempt identities; no out-of-app channel before SB-P-1.20 (FDB-2)', 'SB-P-1.15 builder; SB-P-1.20 for channels; Stages 15–19'),
    'H-LATER': ('Data owned by a later mission (SB-P-1.16 to SB-P-1.20)', 'Owning later mission'),
    'H-SEC': ('Permission, role, privacy and effective-access proof', 'SB-P-1.15 builder; non-author verifier at Stage 19'),
    'H-BIRTH': ('Birth-safe new objects: object-specific effective-privilege proof (SEC15-S7-01)', 'SB-P-1.15 builder; migration rehearsal; Stage 19'),
    'H-PRIV': ('Privileged execution bound to a current-authority principal, never plain service role', 'SB-P-1.15 builder; Stage 19'),
    'H-ISO': ('Cross-business isolation in background, aggregate and notification work', 'SB-P-1.15 builder; Stage 19 negative tests'),
    'H-IDEM': ('Logical work, attempt, lease, fencing and effect identities; unknown-outcome recovery', 'SB-P-1.15 builder; EIS test contract; Stage 17'),
    'H-TZ': ('Business-local named slots, due dates and business day', 'SB-P-1.15 builder; Stage 17'),
    'H-TZC': ('Owner-confirmed timezone design under MC-74 and MC-75 D2/D3 (replaces `H-TZDEF`); EIS algorithm and verification', 'SB-P-1.15 EIS (Stage 9); Stages 17–19'),
    'H-LVB': ('FPDR-03 latest-valid native briefing display and provenance evidence (replaces `H-T6`)', 'SB-P-1.15 builder; Stage 17'),
    'H-ACT': ('FPDR-02 audited prospective activation boundary, recipient revalidation and migration evidence (replaces `H-T1`)', 'SB-P-1.15 builder; migration rehearsal; Stage 19'),
    'H-CORR': ('MC-75 D1 separately governed FDB-1(d1)/(d2) corrective mission not yet activated (governance dependency)', 'Mission Control: mission ID, owner, source contract, T3/T7 screening'),
    'H-RO': ('Ask CFO read-only and zero-write enforcement below the prompt layer', 'SB-P-1.15 builder; Stage 19 negative tests'),
    'H-FIN': ('Financial-truth wording, evidence integrity and credit-method boundaries (FDB-3)', 'SB-P-1.15 builder; SB-P-1.16 for authoritative balances'),
    'H-AI': ('Grounding, prompt-injection containment, evidence classes and dignity', 'SB-P-1.15 builder; Stage 17'),
    'H-MIG': ('Migration package, rehearsal, rollback or forward-fix and restore reconciliation', 'Migration mission and operations; test-project rehearsal'),
    'H-ENGQ': ('Engineering question the EIS must answer', 'SB-P-1.15 EIS (Stage 9)'),
    'H-PAR': ('Independent row-level challenge unavailable, non-canonical (draft annex) or not verified as incorporated', 'Mission Control: PR #898 and private-evidence decisions; Stage 7 final disposition'),
    'H-EVID': ('Design direction accepted documentarily; only runtime, negative-test and acceptance evidence remains', 'SB-P-1.15 builder; Stages 17–19'),
}
assert set(HMEAN) == set(HOLD_ORDER)
ids = lambda xs: ', '.join('`%s`' % x for x in xs)
subrows = []
for k in sorted(stats['sub'], key=lambda s: [int(x) for x in s[1:].split('.')]):
    v = stats['sub'][k]
    subrows.append('| %s | %d | %d | %d | %d | %d / %d / %d / %d |' % (
        k, v['rows'], v['DEPENDENCY-HELD'], v['FOLLOW-UP'], v['DESIGN ACCEPTED — EVIDENCE HOLD'],
        v['eff_C'], v['eff_H'], v['eff_M'], v['eff_L']))
rep = {
    '{{REGISTER}}': '\n'.join(rows),
    '{{N}}': str(len(rows)),
    '{{DH}}': str(st['DEPENDENCY-HELD']), '{{FU}}': str(st['FOLLOW-UP']), '{{DA}}': str(st['DESIGN ACCEPTED — EVIDENCE HOLD']),
    '{{RA}}': ' / '.join(str(stats['risk_author'][k]) for k in 'CHML'),
    '{{RE}}': ' / '.join(str(stats['risk_eff'][k]) for k in 'CHML'),
    '{{SUB}}': '\n'.join(subrows),
    '{{DALIST}}': ids(stats['design_accepted']), '{{P2F}}': ids(stats['pass_to_followup']),
    '{{AUTHORONLY}}': ids(stats['author_only']), '{{CRIT}}': ids(stats['crit']),
    '{{NRAISED}}': str(len(stats['raised'])), '{{NLOWERED}}': str(len(stats['lowered'])),
    '{{PARCR}}': str(stats['par_cls']['CORRECTION REQUIRED']), '{{PARDA}}': str(stats['par_cls']['DIRECTION ACCEPTED / EVIDENCE HOLD']),
    '{{PARPD}}': str(stats['par_cls']['POLICY / DEPENDENCY HOLD']),
    '{{HOLDS}}': '\n'.join('| `%s` | %s | %d | %s |' % (h, HMEAN[h][0], stats['holds'][h], HMEAN[h][1]) for h in HOLD_ORDER),
    '{{HOLDCODES}}': '\n'.join('| `%s` | %s |' % (h, HMEAN[h][0]) for h in HOLD_ORDER),
    '{{NEXPLICIT}}': str(len({r for v in cites.values() for r in v})),
}
tpl = rd(S8 + '/s2021_tpl.md')
for k, v in rep.items():
    assert k in tpl, k
    tpl = tpl.replace(k, v)
assert '{{' not in tpl, re.findall(r'\{\{[^}]+\}\}', tpl)

# Metadata (five authorized rows), Section 18 (one row), Section 19 governance (additions only)
META = {
    'Lifecycle Stage': 'Source 18 v1.2 Stage 7 — Engineering Review v0.3 reconciliation — **DRAFT** (Sections 1–19 Stage 5 accepted; Stage 6 Builder Review accepted)',
    'Status': '`DRAFT — STAGE 7 ENGINEERING REVIEW v0.3 RECONCILIATION PROPOSED FOR MISSION CONTROL REVIEW AND FOUNDER HUMAN MERGE — NOT ACCEPTED — NOT LOCKED`',
    'Builder Review': 'COMPLETE / CANONICAL — Stage 6 Builder Review `communication/missions/SB-P-1.15/claude-code/09-stage6-builder-review.md` (B6-01 to B6-15) accepted by SB-P-1.15-MC-12 (`mission-control/13-stage6-builder-review-acceptance.md`); PR #867, `main@9337036432937bc96df03df9f7a0b80e3a61f09f`. Documentary evidence only; not independent assurance',
    'Engineering Review (Sections 20–21)': 'DRAFT v0.3 — reconciled by Claude Code under the SB-P-1.15-MC-76 publication instruction with S7-SP-1 to S7-SP-6 (accepted), S7-PAR draft annexes and Founder FPDR-02, FPDR-03, MC-74 and MC-75 D1–D3; v0.2 (PR #870) is an unmerged historical draft; definitive Stage 7 approval withheld',
    'Mission Control Review': 'Stage 5 accepted (SB-P-1.15-MC-09/MC-10; PR #864, `4c5a6875`); Stage 6 accepted (SB-P-1.15-MC-12; PR #867, `93370364`); Stage 7 reconciliation publication authorized by MC-76 (PR #935, `92cf8473`); Stage 7 final disposition pending',
}
lines = main.split('\n')
mstart, mend = lines.index('## Metadata'), lines.index('## Mission Snapshot')
for i in range(mstart, mend):
    if lines[i].startswith('| '):
        k = cells(lines[i])[0]
        if k in META:
            lines[i] = '| %s | %s |' % (k, META[k])
out = '\n'.join(lines)
v01 = [l for l in out.split('\n') if l.startswith('| 0.1 | 2026-10-09 |')]
assert len(v01) == 1
V03 = ('| 0.3 | 2026-10-12 | Claude Code (Stage 7 Engineering Review owner, SB-P-1.15-MC-76 publication instruction) | '
       'Reconciled Sections 20–21 appended: 694-row register under transforms R-1 to R-6, Founder FPDR-02/FPDR-03/MC-74/MC-75 D1–D3 integrated, '
       '44 specialist findings dispositioned, S7-PAR draft-annex overlay, five effective Critical records, corrected grant chronology; '
       'Metadata lifecycle and reviewer rows updated; Section 19 governance rows added. v0.2 (PR #870, `6e21b3de`, Sections 20–21 draft under MC-14) '
       'is an unmerged historical draft and was not modified. Sections 1–17 and the Section 19 FCTM traceability table unchanged |')
out = out.replace(v01[0], v01[0] + '\n' + V03, 1)
GOV_OLD = '| Stage 4 Blueprint Sections 1–19 | this file | DRAFT — pending Mission Control Stage 5 review |'
assert out.count(GOV_OLD) == 1
GOV_ADD = [
    '| Stage 5 Product Review (MC-09); Stage 5 crossing and Stage 6 discovery (MC-10) | `mission-control/10`, `mission-control/11` | PR #864 `4c5a6875`; PR #865 `c3c5f752` |',
    '| Stage 6 publication authority (MC-11) | `mission-control/12` | PR #866, `a18de121` |',
    '| Stage 6 Builder Review; acceptance (MC-12) | `claude-code/09`, `claude-code/10`, `mission-control/13` | PR #867, `93370364` |',
    '| Stage 7 discovery authority (MC-13) | `mission-control/14` | PR #868, `dff2f4e1` |',
    '| Stage 7 draft authority (MC-14) | `mission-control/15` | PR #869, `47a5aed3` |',
    '| Stage 7 Sections 20–21 v0.2 draft | PR #870 (frozen OPEN/DRAFT, `6e21b3de`) | Unmerged historical draft; not modified |',
    '| Stage 7 draft review and independence gate (MC-15) | `mission-control/16` | PR #871, `5576f79c` |',
    '| Founder T1 decision SB-P-1.15-FPDR-02 (prospective-only correction notifications) | `founder/03` | PR #872, `e203b72a` |',
    '| Founder T6 decision SB-P-1.15-FPDR-03 (latest valid native briefing) | `founder/04` | PR #873, `22dbbb80` |',
    '| Specialist framework and S7-SP-1 to S7-SP-6 publication and acceptance (MC-16 to MC-35) | `mission-control/17`–`36`, `specialists/01`–`06` | PR #874 to PR #893, last `72b44634` |',
    '| S7-PAR authority, checkpoints and private-evidence holds (MC-36 to MC-71) | `mission-control/37`–`72`; draft annexes 07b/07c/07d/07g in PR #898 (frozen OPEN/DRAFT, `7371161b`, not canonical) | PR #894 to PR #930, last `f9c29847` |',
    '| Founder-directed final material-risk assurance (MC-72); material-blocker disposition (MC-73) | `mission-control/73`, `mission-control/74` | PR #931 `6212af49`; PR #932 `2387e57b` |',
    '| Founder DC-03 timezone decision (MC-74) | `mission-control/75` | PR #933, `796d3ff3` |',
    '| Stage 7 formal readiness and Founder D1–D3 (MC-75) | `mission-control/76` | PR #934, `52d484e3` |',
    '| Stage 7 bounded publication decisions (MC-76) | `mission-control/77` | PR #935, `92cf8473` |',
    '| Stage 7 Engineering Review Sections 20–21 v0.3 | this file; `claude-code/11` | DRAFT — proposed for Mission Control review and Founder human merge; not accepted |',
]
out = out.replace(GOV_OLD, GOV_OLD + '\n' + '\n'.join(GOV_ADD), 1)
out = out.rstrip('\n') + '\n\n' + tpl.rstrip('\n') + '\n'
open(OUT, 'w', encoding='utf-8', newline='\n').write(out)

stats['findings'] = {k: v for k, v in findings.items()}
stats['explicit_rows'] = len({r for v in cites.values() for r in v})
stats['par'] = par
json.dump(stats, open(STATS, 'w', encoding='utf-8'), ensure_ascii=False, indent=1, default=lambda o: dict(o))
print('status', dict(st)); print('risk author C/H/M/L', rep['{{RA}}'], 'effective', rep['{{RE}}'])
print('crit', stats['crit']); print('raised', len(stats['raised']), 'lowered', len(stats['lowered']))
print('no findings', stats.get('no_findings')); print('explicit rows', stats['explicit_rows'])
```

## Appendix B — Validator

```python
import re, subprocess, sys
from collections import Counter
# Usage: python -I s8validate.py <base-ref> <head-ref|WT>
# Requires local objects for frozen PR #870 (6e21b3de) and PR #898 (7371161b), e.g.
#   git fetch origin pull/870/head pull/898/head
BASE, HEAD = (sys.argv[1:3] + ['92cf84732c736f1bfb333bd4600da8a23060afc0', 'HEAD'])[:2]
V02, ANX = '6e21b3de414cf33c25b848a7a93fcfc51c1d6e13', '7371161b9cffca11932657c085cdca0e5285d964'
BP = 'docs/phase-1-mission-blueprint/active/SB-P-1.15.md'
RP = 'communication/missions/SB-P-1.15/claude-code/11-stage7-engineering-review-report.md'
FC = 'communication/missions/SB-P-1.15/claude-code/03-stage2-populated-fctm.md'
SP = 'communication/missions/SB-P-1.15/specialists/'
git = lambda *a: subprocess.run(['git', *a], capture_output=True, text=True, encoding='utf-8', check=True).stdout
def show(ref, p):
    return open(p, encoding='utf-8').read() if ref == 'WT' else git('show', ref + ':' + p)
cells = lambda l: [x.strip() for x in re.split(r'(?<!\\)\|', l.strip().strip('|'))]
ROW = re.compile(r'^\| ((\d+)|BP)-§')
def seg(t, a, b):
    i = t.index(a); return t[i:t.index(b, i) if b else len(t)]
res, fail = {}, []
def chk(name, ok, detail=''):
    res[name] = 'OK' if ok else 'FAIL %s' % (detail,)
    if not ok: fail.append(name)

# 1 / 13 paths
if HEAD == 'WT':
    changed = sorted(set(git('diff', '--name-only', BASE).split()) | set(git('ls-files', '--others', '--exclude-standard').split()))
else:
    changed = sorted(git('diff', '--name-only', BASE, HEAD).split())
chk('1. Exactly the two authorized paths differ from base', changed == sorted([BP, RP]), changed)
b0, b1, fx = show(BASE, BP), show(HEAD, BP), show(BASE, FC)
chk('FCTM file unchanged', fx == show(HEAD, FC))
fr = {c[0]: c for c in (cells(l) for l in fx.splitlines() if ROW.match(l))}
IS = [k for k, c in fr.items() if c[7].startswith('IN SCOPE')]
chk('FCTM 803 rows / 694 IN SCOPE', (len(fr), len(IS)) == (803, 694), (len(fr), len(IS)))
# 2 protected sections
chk('2a. Mission Snapshot + Sections 1-17 byte-identical', seg(b0, '\n## Mission Snapshot', '\n## 18. ') == seg(b1, '\n## Mission Snapshot', '\n## 18. '))
TR = '### FCTM Row-ID to Blueprint Section and Source Traceability'
t0, t1 = b0[b0.index(TR):].rstrip('\n'), seg(b1, TR, '\n## 20. ').rstrip('\n')
chk('2b. Section 19 FCTM table and overlay byte-identical', t0 == t1)
chk('Text before Metadata byte-identical', b0[:b0.index('## Metadata')] == b1[:b1.index('## Metadata')])
# 3 metadata
m0, m1 = seg(b0, '## Metadata', '## Mission Snapshot').splitlines(), seg(b1, '## Metadata', '## Mission Snapshot').splitlines()
mc = [cells(a)[0] for a, b in zip(m0, m1) if a != b]
chk('3. Only the five authorized metadata rows changed', len(m0) == len(m1) and set(mc) == {'Lifecycle Stage', 'Status', 'Builder Review', 'Engineering Review (Sections 20–21)', 'Mission Control Review'}, mc)
# 4 section 18
s0, s1 = seg(b0, '\n## 18. ', '\n## 19. ').splitlines(), seg(b1, '\n## 18. ', '\n## 19. ').splitlines()
add18 = [l for l in s1 if l not in s0]
chk('4. Exactly one Section 18 row added (v0.3, PR #870 v0.2 unmerged)', len(s1) == len(s0) + 1 and all(l in s1 for l in s0) and len(add18) == 1
    and add18[0].startswith('| 0.3 |') and 'PR #870' in add18[0] and 'unmerged historical draft' in add18[0])
g0, g1 = seg(b0, '\n## 19. ', TR).splitlines(), seg(b1, '\n## 19. ', TR).splitlines()
chk('Section 19 governance: additions only', all(l in g1 for l in g0) and len(g1) > len(g0))
chk('Sections 20 and 21 appear once, after Section 19', b1.count('\n## 20. Engineering Review') == 1 and b1.count('\n## 21. Engineering Questions, Risks & Recommendations') == 1 and b1.index('\n## 20. ') > b1.index(TR))
chk('Sections 20.1-20.7 and 21.1-21.7 present in order', all(b1.count('\n### %s ' % s) == 1 for s in ['20.%d' % i for i in range(1, 8)] + ['21.%d' % i for i in range(1, 8)]))
s20, s21 = seg(b1, '\n## 20. ', '\n## 21. '), seg(b1, '\n## 21. ', None)
# 5 / 6 register
reg = [cells(l) for l in seg(s20, '### 20.6 ', '### 20.7 ').splitlines() if ROW.match(l)]
ids = [r[0] for r in reg]
chk('5. Register has 694 rows, each IN SCOPE ID exactly once', len(reg) == 694 and len(set(ids)) == 694 and set(ids) == set(IS),
    (len(reg), sorted(set(IS) - set(ids))[:5], sorted({i for i in ids if ids.count(i) > 1})[:5]))
loc = {c[0]: c[5].split(',')[0].strip() for c in (cells(l) for l in t1.splitlines() if ROW.match(l))}
v02 = {c[0]: c for c in (cells(l) for l in seg(show(V02, BP), '### 20.6 ', '### 20.7 ').splitlines() if ROW.match(l))}
chk('6a. Section 8 home matches Section 19 for every row', not [r[0] for r in reg if r[1] != loc.get(r[0])])
chk('6b. Kind matches FCTM; FCTM disposition IN SCOPE; home/assessment/kind identical to v0.2', not [r[0] for r in reg if r[3] != fr[r[0]][3] or not fr[r[0]][7].startswith('IN SCOPE') or r[1:4] != v02[r[0]][1:4]])
# 7 statuses and risks
UP = {'H-D12', 'H-D13', 'H-D14', 'H-DTX'}
VOC = {'DEPENDENCY-HELD', 'FOLLOW-UP', 'DESIGN ACCEPTED — EVIDENCE HOLD'}
RK = {'L': 0, 'M': 1, 'H': 2, 'C': 3}; SV = {'LOW': 'L', 'MEDIUM': 'M', 'HIGH': 'H', 'CRITICAL': 'C'}
bad = []
for r in reg:
    st, hl = r[4].strip('`'), {x.strip().strip('`') for x in r[8].split(',')} - {'—'}
    if st not in VOC or r[5] not in RK or r[7] not in RK or len(r[10]) < 40: bad.append((r[0], 'shape'))
    if (st == 'DEPENDENCY-HELD') != bool(hl & UP): bad.append((r[0], 'upstream'))
    if st == 'FOLLOW-UP' and not hl: bad.append((r[0], 'followup-nohold'))
    if st == 'DESIGN ACCEPTED — EVIDENCE HOLD' and ('H-EVID' not in hl or 'CORRECTION REQUIRED' in r[6]): bad.append((r[0], 'design-accepted'))
    if hl & {'H-T1', 'H-T6', 'H-TZDEF'}: bad.append((r[0], 'retired-hold'))
    a = v02[r[0]][5]
    if r[5] != ('C' if r[0] in ('4-§16-1', '24-§16-1') else a): bad.append((r[0], 'author-risk'))
    m = re.search(r'(CRITICAL|HIGH|MEDIUM|LOW)$', r[6])
    exp = max([r[5]] + ([SV[m.group(1)]] if m else []), key=RK.get)
    if r[7] != exp: bad.append((r[0], 'effective-risk'))
chk('7a. Closed status vocabulary, hold rules, author and effective risk rules', not bad, bad[:8])
stc, ra, re_ = Counter(r[4].strip('`') for r in reg), Counter(r[5] for r in reg), Counter(r[7] for r in reg)
s207 = seg(s20, '### 20.7 ', None)
claim = lambda label: re.search(r'^\| ' + re.escape(label) + r' \| ([^|]+) \|$', s207, re.M).group(1).strip()
chk('7b. Section 20.7 totals equal recomputed totals',
    claim('`DEPENDENCY-HELD`') == str(stc['DEPENDENCY-HELD']) and claim('`FOLLOW-UP`') == str(stc['FOLLOW-UP'])
    and claim('`DESIGN ACCEPTED — EVIDENCE HOLD`') == str(stc['DESIGN ACCEPTED — EVIDENCE HOLD']) and claim('`PASS`') == '0'
    and claim('Author risk C / H / M / L') == ' / '.join(str(ra[k]) for k in 'CHML')
    and claim('Effective risk C / H / M / L') == ' / '.join(str(re_[k]) for k in 'CHML'))
res['   recomputed status'] = dict(stc); res['   recomputed author risk C/H/M/L'] = [ra[k] for k in 'CHML']; res['   recomputed effective risk C/H/M/L'] = [re_[k] for k in 'CHML']
# 8 annex overlay
FLD = {'b': ('Independent feasibility/classification', 'Consequence-based independent severity', 'Required engineering correction / accepted direction / retained hold'),
       'c': ('Independent feasibility/classification', 'Independent severity and consequence', 'Correction, accepted direction or retained hold'),
       'd': ('Independent design/feasibility finding', 'Consequence-based independent severity', 'Required correction / accepted direction / retained hold'),
       'g': ('Independent consequence-based judgment', 'Independent consequence-based judgment', 'Correction or retained evidence hold')}
par = {}
for p in git('ls-tree', '--name-only', ANX, SP).split():
    f = p.split('/')[-1]
    if not re.match(r'07[bcdg]-', f): continue
    k, t = f[2], show(ANX, p)
    parts = re.split(r'^### ((?:\d+|BP)-§\S+) — .*$', t, flags=re.M)
    for i in range(1, len(parts), 2):
        g = lambda n: re.search(r'^- \*\*' + re.escape(n) + r':\*\* (.+)$', parts[i + 1], re.M)
        c, s, r = (g(n) for n in FLD[k])
        if not (c and s and r): continue
        cl = [x for x in ('CORRECTION REQUIRED', 'DIRECTION ACCEPTED / EVIDENCE HOLD', 'POLICY / DEPENDENCY HOLD') if x in c.group(1)]
        sv = [x for x in ('CRITICAL', 'HIGH', 'MEDIUM', 'LOW') if re.search(r'\*\*(?:[A-Z /]+/ )?' + x + r'\*\*', s.group(1))]
        par[parts[i]] = ('07' + k, cl[0], sv[0], r.group(1).strip().replace('|', '\\|'))
rg = {r[0]: r for r in reg}
ob = [k for k, (a, cl, sv, cor) in par.items() if rg[k][6] != '%s %s / %s' % (a, cl, sv) or ('«%s»' % cor) not in rg[k][10] or 'DRAFT ANNEX EVIDENCE — NOT PUBLISHED CANONICALLY' not in rg[k][10]]
other = [r[0] for r in reg if r[0] not in par and r[6] not in ('—', '§8.5 private v2 — not consumed')]
f85 = [r[0] for r in reg if r[1] == '§8.5' and ('H-PAR' not in r[8] or 'private MC-71 derivative v2 not consumed' not in r[10])]
chk('8. All 121 annex overlay records match PR #898 bytes; §8.5 rows bridged with H-PAR', len(par) == 121 and not ob and not other and not f85, (len(par), ob[:5], other[:5], f85[:5]))
crq = [k for k, v in par.items() if v[1] == 'CORRECTION REQUIRED' and 'H-PAR' not in rg[k][8]]
chk('8b. Every annex CORRECTION REQUIRED row carries H-PAR', not crq, crq[:5])
# 9 specialist findings
F44 = set()
for p in git('ls-tree', '--name-only', BASE, SP).split():
    if re.match(r'0[1-6]-', p.split('/')[-1]):
        F44 |= set(re.findall(r'\b(SEC15-S7-0\d|SP2-0\d|FIN15-S7-0\d|AI15-S7-0\d|MIG15-S7-0\d|NTF15-0\d)\b', show(BASE, p)))
t216 = [cells(l) for l in seg(s21, '### 21.6 ', '### 21.7 ').splitlines() if re.match(r'^\| (SEC15|SP2|FIN15|AI15|MIG15|NTF15)-', l)]
c216 = Counter(r[0] for r in t216)
inreg = set(re.findall(r'\b(SEC15-S7-0\d|SP2-0\d|FIN15-S7-0\d|AI15-S7-0\d|MIG15-S7-0\d|NTF15-0\d)', ' '.join(r[9] for r in reg)))
dc = Counter(r[2].split(' (')[0].split(';')[0] for r in t216)
chk('9. All 44 canonical findings dispositioned once in 21.6 and traced in the register', len(F44) == 44 and set(c216) == F44 and set(c216.values()) == {1} and F44 <= inreg and inreg <= F44, (len(F44), sorted(F44 - set(c216)), sorted(F44 - inreg)))
res['   21.6 disposition groups'] = dict(dc)
# 10 critical
crit = sorted(r[0] for r in reg if r[7] == 'C')
chk('10. Effective Critical set is exactly the five approved IDs', crit == sorted(['4-§16-1', '24-§16-1', '22-§23-2', '22-§28-9', '22-§29-3']), crit)
# 11 no PASS / no runtime claims
FORB = r'(verified at runtime|runtime[- ]verified|tests? (?:passed|were executed|have been executed)|negative tests? (?:were|was|have been) (?:run|executed)|approved by S7|Stage 7 (?:is )?accepted\b|CI pass(?:ed)?\b(?! is claimed| claimed))'
sec2021 = s20 + s21
hits = re.findall(FORB, sec2021, re.I)
chk('11. No PASS status and no runtime, test, CI or acceptance claim', not [r for r in reg if 'PASS' == r[4].strip('`')] and not hits and 'NOT ACCEPTED' in s20 and 'Definitive Stage 7 approval is withheld' in s21, hits[:5])
# 12 T7/T8 and decided boundaries
STALE = ['OPEN — Founder decision required', 'MATERIAL FOUNDER-GATE CANDIDATE', '**(d2) unassigned**', 'T6 Founder question', 'open T1 Founder decision', 'DC-03 watch', 'PENDING — not appointed',
         'matching default privileges for future tables and functions, each to `anon']
chk('12a. Stale v0.2 wording absent (T1/T6 open, d2 unassigned, superseded E-04 grant claim)', not [s for s in STALE if s in sec2021], [s for s in STALE if s in sec2021])
s215 = seg(s21, '### 21.5 ', '### 21.6 ')
chk('12b. Trigger screen records T1/T6/DC-03/FDB-1 decisions and T7/T8 screen with reopeners',
    all(x in s215 for x in ('SB-P-1.15-FPDR-02', 'SB-P-1.15-FPDR-03', 'MC-74 and MC-75 D2/D3', 'MC-75 D1', '| T8 | **Not triggered.**', 'Reopeners', 'T3/T7')))
chk('12c. Founder decisions and grant chronology cited', all(x in s20 for x in ('FPDR-02', 'FPDR-03', 'MC-74', 'MC-75 D2', 'MC-75 D3', '`H-CORR`', '20260830120000_sb_rel_1_10_1_11_gate2a_c1_inventory_anon_privilege_hardening.sql', 'supabase_admin', 'UNSCHEDULED', 'next business-day boundary')))
# 13 secrets
txt = b1 + (show(HEAD, RP) if HEAD != 'WT' or True else '')
SEC = r'(eyJ[A-Za-z0-9_-]{20,}\.[A-Za-z0-9_-]{20,}|sk-[A-Za-z0-9]{20,}|sb_secret_[A-Za-z0-9]{10,}|ghp_[A-Za-z0-9]{20,}|AKIA[0-9A-Z]{16}|-----BEGIN [A-Z ]*PRIVATE KEY-----|(?:SERVICE_ROLE_KEY|API_KEY|SECRET)\s*=\s*\S{8,})'
chk('13. No secret-like strings in the two files', not re.findall(SEC, txt), re.findall(SEC, txt)[:3])
for k, v in res.items():
    print('%s: %s' % (k, v))
print('RESULT: %s' % ('ALL CHECKS PASSED' if not fail else 'FAILED: ' + '; '.join(fail)))
sys.exit(1 if fail else 0)
```
