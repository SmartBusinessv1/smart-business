# SB-P-1.16 — `16:FPDR-10` Canonical Registration and Downstream Reconciliation Plan (Draft)

**DRAFT — LOCAL — PROPOSAL ONLY — NO CANONICAL FILE IS CHANGED — FOR MISSION CONTROL REVIEW**

**Mission:** SB-P-1.16 — Financial Integrity & Credit  
**Authority:** MC-206 (local documentary preparation only)  
**Prepared by:** Claude Code (Definition Actor and Stage 7 coordinator)  
**Baseline:** `main@31d75b665d2dcea1a34cc7c05d5d187d5e85c58b` (PR #970 merge, 2026-10-18T07:25:38Z); repository PRIVATE  
**Companion record:** `claude-code/22-stage7-founder-product-decision-record-16-fpdr-10.md` (the formal decision entry)  
**Implementation Authorization:** WITHHELD — IMPLEMENTATION NOT AUTHORIZED.

## 1. Registration: exact changes proposed for the next documentary PR

These are proposals. None is applied. They would form one bounded registration PR when Mission Control authorizes it.

### 1.1 Add the decision record

Add `claude-code/22-stage7-founder-product-decision-record-16-fpdr-10.md` unchanged.

**Alternative for Mission Control.** Append the same entry as §2.10 of the canonical record `claude-code/09-…` (blob `30b19a80`). Not recommended: that record still opens with "DRAFT — NOT CANONICAL" status lines (observation O-1), and editing it would change a canonical artifact whose blob is cited throughout the mission records.

### 1.2 `decision-log.md` (blob `b2dc5519`)

**Part A — add after D-19:**

```text
| D-20 | MC-206: Founder approved D-1 to D-6 of `16:FPDR-10` (OQ-01 customer advance), following MC-205; T3 triggered, Founder disposition received | Conversation-source; recorded in the decision record | `claude-code/22-stage7-founder-product-decision-record-16-fpdr-10.md`; proposal PR #970, `main@31d75b66` |
```

**Part B — replace the opening sentence:**

```text
The Founder approved the first nine on 2026-10-15. They are canonical since PR #963 (`main@bb695255`). The full wording is in `claude-code/09-stage3-founder-product-decision-record-draft.md` (blob `30b19a80352b100e79cadc216daae14b07e24f9a`), entries 2.1 to 2.9. The tenth, `16:FPDR-10`, was approved by the Founder as recorded in MC-206; its full wording is in `claude-code/22-stage7-founder-product-decision-record-16-fpdr-10.md`, entry 2.10.
```

**Part B — add a row after `16:FPDR-9`:**

```text
| `16:FPDR-10` | OQ-01 Excess repayment and customer advance | A + B combination | 2.10 (record `22-…`) | MC-199 (Founder statement 2); Founder statement 1 as supplied in MC-202 | MC-206 |
```

**Part B — FCTM citation line.** Unchanged until the FCTM amendment in §2.5. After that amendment, append "`16:FPDR-10` 18".

**Part D — add a row:**

```text
| Optional customer-advance expansions: Manager delegation of retain/apply/refund; one action across several debts; customer-facing display | `16:FPDR-10` §2.10 (optional expansion) | Founder decision only if wanted; not authorized |
```

### 1.3 `README.md` (blob `e347b622`)

**Authoritative files table — add a row:**

```text
| Founder Product Decision Record (`16:FPDR-10`) | `claude-code/22-stage7-founder-product-decision-record-16-fpdr-10.md` | (blob after merge) |
```

**Mission records — add under Claude Code:**

```text
- `claude-code/21-stage7-oq01-founder-product-decision-record-draft.md` — proposed `16:FPDR-10` (PR #970)
- `claude-code/22-stage7-founder-product-decision-record-16-fpdr-10.md` — `16:FPDR-10` (MC-206)
```

**Continuity gap (not needed to register the decision; recommended as a separate sync).** README, `handover-log.md` and `decision-log.md` were last updated by PR #966 (MC-171). They do not record:

- Stages 6 and 7 (PRs #967 to #970; MC-173 to MC-206);
- the specialist reviews;
- the controlled-governance mode (MC-189).

H-11 still reads "PROPOSED — NOT COMPLETE". Several Mission Control records in that range were not supplied to the drafting actor, including MC-181, MC-182, MC-188, MC-192 and MC-194 to MC-200 and MC-204 to MC-205. So a full continuity sync needs Mission Control to supply or confirm those entries; it cannot be reconstructed here.

## 2. Downstream reconciliation plan (each item needs its own authorization)

### 2.1 Source 11 (`16897d6c`)

- **Finding.** Smart Credit Awareness says "Credit system warns." / "It must not block owner decisions." / "AI informs." / "Owner decides." (lines 843–848). The advance behaviour is compatible and additive (FIN-01 §3). Source 11 has no advance, wallet or stored-value concept.
- **Options:**
  - (a) A Mission Control ruling that `16:FPDR-10` is sufficient for Phase 1, recorded in the decision log.
  - (b) A governed Source 11 addition under Smart Credit Awareness stating the Owner-controlled advance and its no-automation limits.
- **Recommendation.** (a) now, with (b) queued for the next governed Source 11 revision, so Product Truth does not drift from decided behaviour.

### 2.2 Contract 03 interpretation (`d8c26c07`)

- **Finding.** §4 defines Credit as "an amount owed to or by a relevant party, according to the approved workflow", and says "Implementation may use richer internal event types". A customer advance is an amount owed by the business to the customer.
- **Proposed action.** Mission Control records the interpretation in the decision log. **No contract amendment** (FIN-01 §4.1, §16). If Mission Control rejects the interpretation, a Contract 03 change and T8 would follow.

### 2.3 SB-P-1.14 EIS compatibility (`899a0fe1`)

**Supported now:**

| Rule | What it gives |
|---|---|
| `EIS14-LDG-02` | `owed_by_business` direction exists, with no supplier-only restriction in its wording |
| `EIS14-TOT-01` | Credit and repayment never count as sales or income |
| `EIS14-LDG-03` | One repayment to one target (refund-as-repayment fits) |
| `EIS14-IDM-01`, `EIS14-IDM-03` | Idempotency and unknown-outcome lookup |

**Not specified:** an advance semantic subtype, advance provenance, and an advance-application relation with a two-sided effect.

**Proposed action:**

- Place the subtype, provenance and application relation in the SB-P-1.16 EIS (FIN-01 §16).
- Ask the SB-P-1.14 owner for clarification **only** if `owed_by_business` was meant to be supplier-only. Record that question with the open SR01-03 (governed void) and SR04-04 items.

### 2.4 SB-P-1.16 approved Blueprint (`8e79636f`)

A governed revision would touch:

| Section | Change |
|---|---|
| Metadata | Founder decisions `16:FPDR-1` to `16:FPDR-10` |
| §8.2 mission design | The Owner-controlled advance; the advance is a Ledger fact, separate from outstanding credit |
| §9 UI / UX | Advance shown as a separate fact; stop-and-clarify on excess |
| §10.1 | Add `16:FPDR-10` by reference with its approved text |
| §13 | Risk row for advance misuse or automation |
| §15.4 | Acceptance limits: no automatic offset, refund or income; correction exceptions |
| §18 | Change log |
| §19 | Founder-decision column on the 18 rows in §2.5 |

The Blueprint was approved at Stage 5 (MC-171). Mission Control decides the revision route: a Stage 5 re-review of the changed sections, or folding them into the Stage 7 cycle before Stage 8.

### 2.5 FCTM (`5ff7742f`): Founder-decision cell amendment (18 rows; no other column changes)

| Row | Current cell | Proposed cell |
|---|---|---|
| `14-§18-3` | — | `16:FPDR-10` |
| `14-§7-2` | `14:FPDR-4` | `14:FPDR-4; 16:FPDR-10` |
| `14-§7-3` | `14:FPDR-4` | `14:FPDR-4; 16:FPDR-10` |
| `14-§7-4` | `14:FPDR-4` | `14:FPDR-4; 16:FPDR-10` |
| `14-§7-5` | `14:FPDR-4` | `14:FPDR-4; 16:FPDR-10` |
| `14-§7-6` | `14:FPDR-4` | `14:FPDR-4; 16:FPDR-10` |
| `14-§5-7` | `14:FPDR-1` | `14:FPDR-1; 16:FPDR-10` |
| `14-§5-8` | `14:FPDR-1` | `14:FPDR-1; 16:FPDR-10` |
| `3-§9-12` | `14:FPDR-1; 16:FPDR-1; 16:FPDR-2` | `14:FPDR-1; 16:FPDR-1; 16:FPDR-2; 16:FPDR-10` |
| `14-§21-6` | `14:FPDR-1` | `14:FPDR-1; 16:FPDR-10` |
| `15-§11-5` | — | `16:FPDR-10` |
| `15-§14-1` | `14:FPDR-4` | `14:FPDR-4; 16:FPDR-10` |
| `15-§14-2` | `14:FPDR-4` | `14:FPDR-4; 16:FPDR-10` |
| `15-§14-3` | `14:FPDR-4; 16:FPDR-1` | `14:FPDR-4; 16:FPDR-1; 16:FPDR-10` |
| `15-§14-4` | — | `16:FPDR-10` |
| `14-§22-2` | `14:FPDR-4` | `14:FPDR-4; 16:FPDR-10` |
| `BP-§10.5-E4` | — | `16:FPDR-10` |
| `BP-§10.5-X` | — | `16:FPDR-10` |

The legend and decision-index sections gain `16:FPDR-10`. Dispositions, owners, dependency codes and the 555 / 349 totals are unchanged. Validation would be by script: 18 cells changed; no other byte change outside the cell and index.

### 2.6 Stage 7 draft Sections 20–21 (`1064ab18`): additions to the v0.2 correction set

| ID | Change | Source |
|---|---|---|
| C-24 | Replace the §20.4.6 "store no advance" hold with the approved behaviour: detect excess; stop and clarify; Owner may retain; separate advance obligation; not income; explicit application and refund commands; no automatic offset; idempotency and audit | FIN-01 §18; `16:FPDR-10` |
| C-25 | Correct §20.4.4. The statement that `owed_by_business` credit belongs to the supplier side is a draft interpretation, not a restriction in `EIS14-LDG-02`. Add the advance to the canonical balance definition, kept separate from outstanding credit, with conservation and one remaining-advance calculation | FIN-01 §7, §16 |
| C-26 | §20.5: add Owner-only capabilities for retaining, applying and refunding an advance; no Manager default; Employee exclusion | FIN-01 §14; `16:FPDR-7` |
| C-27 | §20.4.9 and §20.4.10: the advance-application settlement transfer (atomic, confirmation-bound, revalidated) and the four duplicate guards (repayment, advance, application, refund); reversal and failed-refund handling as governed exceptions | FIN-01 §8, §11, §12 |
| C-28 | §20.8 register: `14-§18-3` from `FOLLOW-UP` to `DEPENDENCY-HELD`. §21.2: OQ-01 closed by `16:FPDR-10`. §21.5: T3 for OQ-01 recorded as triggered and decided | `16:FPDR-10` |

These join C-01 to C-23 in the single v0.2 round. That round is not authorized.

### 2.7 Proposed sequence

1. Mission Control reviews `22-…` and this plan.
2. **Registration PR:** `22-…` plus the decision-log and README edits in §1, with Mission Control's choice on §1.1. Founder merge; Mission Control verification.
3. Mission Control rulings: Source 11 (§2.1) and Contract 03 (§2.2).
4. **FCTM citation amendment PR** (§2.5).
5. Blueprint revision (§2.4), by the route Mission Control chooses.
6. Stage 7 v0.2 round: C-01 to C-28, with independent confirmation.
7. SB-P-1.14 clarification, only if needed (§2.3).

## 3. Newly discovered authority conflicts and governance points

| ID | Finding | Severity | Recommendation |
|---|---|---|---|
| AC-1 | The Founder's approval of D-1 to D-6 is recorded only as Mission Control's statement in MC-206. Every earlier `16:FPDR` entry carries a verbatim Founder approval statement | Medium (provenance) | Mission Control supplies the Founder's exact approval words for entry 2.10 before canonical registration, or records that MC-206 is the approval record |
| AC-2 | The Founder statement says "do not change canonical files yet". MC-206 approves the decision but authorizes local preparation only | Low | Confirm that the Founder approval lifts "yet" for the registration PR, at the point Mission Control authorizes it |
| AC-3 | FIN-01 §11.2 says that if an outward refund is later reversed, "the obligation may re-open, with full provenance". If read as automatic re-creation of an advance, that conflicts with D-4 and D-5 | Low (interpretation) | Treat a reversed refund as a governed exception needing Owner confirmation before the advance is restored. Mission Control to confirm; no product change |
| AC-4 | Stage 7 draft §20.4.4 restricts `owed_by_business` to the supplier side, which `EIS14-LDG-02` does not say | Low (engineering) | Correction C-25 |
| AC-5 | Mission records (README, handover log, decision log) are stale since MC-171. CLAUDE.md states that `main` branch protection is "configured and independently verified", which has not been true since the repository became private (MC-187) | Medium (governance continuity) | A separate continuity sync with Mission Control-supplied records. Founder decision on restoring protection (plan upgrade or organization) or recording the procedural control |

No conflict was found between `16:FPDR-10` and `16:FPDR-1` to `16:FPDR-9`, Contracts 03, 14 or 15, the Build Plan, GPCV or Source 11, provided the Contract 03 interpretation in §2.2 is accepted.

## 4. Preservation

- All 349 `IN SCOPE` commitments and all FCTM dispositions are unchanged. That includes the 41 `DPAY` rows and the 7 `DNTF` rows.
- U-08 / DC-11, U-10, R15-11, F-7 and the `16:FPDR-9` deferred branches stay open.
- All 63 Stage 7 findings stay open, as do MQ-01 to MQ-06, G-W1 and OQ-02 to OQ-05.

**STOP FOR MISSION CONTROL REVIEW.**

**Stage 7 Final Approval: WITHHELD. Implementation Authorization: WITHHELD — IMPLEMENTATION NOT AUTHORIZED.**
