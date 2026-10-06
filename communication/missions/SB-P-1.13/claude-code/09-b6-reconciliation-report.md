# SB-P-1.13 — B6-01/B6-02 Reconciliation Report

**Mission:** SB-P-1.13 — Native Conversation & AI Intelligence Foundation
**From:** Claude Code (reconciliation actor)
**To:** Mission Control
**Status:** `DRAFT RECONCILIATION — AUTHORIZED BY SB-P-1.13-MC-09; NOT CANONICAL UNTIL MISSION CONTROL REVIEW AND HUMAN MERGE`
**Authorization:** `mission-control/11-b6-reconciliation-authorization.md`, canonical at `main@35314a92a357646c56cda6107e2aebeb970a28f6` (PR #784)
**Date:** 2026-10-06

## 1. Scope

Resolves only Stage 6 findings B6-01 and B6-02 (SB-P-1.13-MC-08 §2–§3; MC-09 §2). No other Stage 6 finding changes Product Truth here.

| File | Change |
|---|---|
| `claude-code/02-stage2-populated-fctm.md` | Reconciliation note; Dependency cell of 54 rows; Evidence cell of 57 rows; Founder-decision cell of 5 rows |
| `docs/phase-1-mission-blueprint/active/SB-P-1.13.md` | Metadata, §8.5, §8.7, §10.1, §12.1, §13, §15.1, §15.4, §15.5, §18, §19 (Section 4) |
| `founder/03-post-stage6-founder-product-decision-record.md` | New: `FPDR-5` |
| this report; README; decision log; handover log; live report | Records |

## 2. B6-01 — exact `D12` row set

### 2.1 Rule

The locked SB-P-1.12 EIS §19.5 lists the only SB-P-1.12 surfaces SB-P-1.13 may consume: the `authz.authorize` contract and reason codes; the capability registry; channel values `conversation`, `whatsapp`, `ai_tool`; `confirmation_bindings`; the shared idempotency pattern; `authority_events` and the denial contract; explicit active-business context. It also forbids resolving business from single ownership and any temporary parallel authorization.

A row receives `D12` only if executing or demonstrating its obligation necessarily uses one of those surfaces. In practice that means one of:

1. it reads or writes a specific business's records or business-scoped conversation state (explicit active-business context; Contract 21 §6 isolation);
2. it evaluates a principal, role or capability (kernel, registry);
3. it executes or confirms a governed consequential command (`confirmation_bindings`, idempotency), including every `DTX` row, because the `FPDR-1` command consumes them (Blueprint §8.5).

A row is not given `D12` when its obligation is language interpretation of the input itself, AI/voice provider or model infrastructure, an output or input format, FAQ product knowledge (not business data), mission process or documentation, or a must-not design check verified by inspection. Where a row's business-scoped realization belongs to a later mission's domain (for example Ask CFO), the Workspace's own use of that domain still needs active-business context and is included.

### 2.2 Before and after

| Measure | Before | After |
|---|---|---|
| FCTM rows | 974 | 974 |
| `IN SCOPE` rows | 651 | 651 |
| `IN SCOPE` rows carrying `D12` | 198 | 252 |
| Candidate rows examined (`IN SCOPE` without `D12`) | 453 | — |
| Rows given `D12` | — | **54** |
| Candidates not given `D12` | — | 399 |

The provisional 139-row set from the Stage 6 review was not used. Of the 139 rows whose dependency was `—`, 11 are in the 54. The other 43 of the 54 already carried a non-`D12` dependency.

### 2.3 Row-by-row proof (54 rows)

Disposition, owning mission, build commitment and commercial classification are unchanged for every row (Section 5).

| Row | Business-scoped reason | Consumed SB-P-1.12 capability | Source / Blueprint | Previous dependency | New dependency |
|---|---|---|---|---|---|
| `24-§15-5` | voice confirmation of a consequential action binds to a business, actor and target | confirmation_bindings; explicit active-business context | C24 §15; Blueprint §8.7 | DV; DAI | D12; DV; DAI |
| `24-§20-6` | validating that a referenced record exists is a read of the active business's records | explicit active-business context; authz.authorize kernel and capability registry (object scope) | C24 §20; Blueprint §8.5 | DAI | D12; DAI |
| `24-§23-9` | detecting stale context compares conversation state with current business and authority state | explicit active-business context; authority epochs (SB-P-1.12 EIS §10.2) | C24 §23; Blueprint §8.10 | DAI | D12; DAI |
| `24-§25-5` | deciding which HR/customer/payment data an actor may see is a business-scoped capability decision | authz.authorize kernel and capability registry; explicit active-business context | C24 §25; Blueprint §8.4 | DAI | D12; DAI |
| `24-§26-6` | a cache of business-derived outputs must be keyed to the business and principal to avoid cross-business reuse | explicit active-business context; authz.authorize kernel and capability registry | C24 §26; Blueprint §8.3 | DAI | D12; DAI |
| `24-§27-8` | preserving Business Memory across surfaces means reading and writing the active business's records | explicit active-business context | C24 §27; Blueprint §8.3 | DAI | D12; DAI |
| `24-§28-7` | conversation context is business-scoped state (Contract 21 §6 conversation-context isolation) | explicit active-business context; channel values conversation/ai_tool | C24 §28; Blueprint §8.3 | DAI | D12; DAI |
| `24-§31-2` | equivalent domain semantics are shown by executing the same governed action from text and voice | explicit active-business context; confirmation_bindings; authz.authorize kernel and capability registry | C24 §31; Blueprint §8.7 | DV; DAI | D12; DV; DAI |
| `24-§31-15` | showing Business Memory persists independently of model history requires a stored business record | explicit active-business context | C24 §31; Blueprint §8.3 | D14 | D12; D14 |
| `9-§9-2` | candidate person/business names come from the active business's own parties | explicit active-business context; authz.authorize kernel and capability registry (object scope) | C9 §9; Blueprint §8.2 | DAI | D12; DAI |
| `9-§9-6` | candidate stock items come from the active business's inventory | explicit active-business context; authz.authorize kernel and capability registry (object scope) | C9 §9; Blueprint §8.2 | DAI | D12; DAI |
| `9-§17-1` | equivalent Ledger intent is demonstrated through the FPDR-1 governed create-transaction command | explicit active-business context; confirmation_bindings; shared idempotency pattern | C9 §17; Blueprint §8.2 | DAI; DTX | D12; DAI; DTX |
| `10-§6-3` | Workspace use of the shared Business Memory reads and writes the active business's records | explicit active-business context | C10 §6; Blueprint §8.1 | D14; D20 | D12; D14; D20 |
| `10-§6-4` | the shared conversation/context model holds business-scoped conversation state | explicit active-business context; channel values conversation/ai_tool | C10 §6; Blueprint §8.1 | D20 | D12; D20 |
| `10-§6-7` | Workspace use of UDI acts on the active business's documents (UDI itself SB-P-1.14) | explicit active-business context | C10 §6; Blueprint §8.1 | D14; D20 | D12; D14; D20 |
| `10-§6-8` | Workspace use of Ask CFO reasons over the active business's data (Ask CFO itself SB-P-1.15) | explicit active-business context; authz.authorize kernel and capability registry | C10 §6; Blueprint §8.1 | D15; D20 | D12; D15; D20 |
| `10-§6-9` | Workspace use of reminder/automation services acts for the active business (SB-P-1.15) | explicit active-business context; authz.authorize kernel and capability registry | C10 §6; Blueprint §8.1 | D15; D20 | D12; D15; D20 |
| `10-§6-10` | Workspace use of action services executes business commands | explicit active-business context; authz.authorize kernel and capability registry; confirmation_bindings | C10 §6; Blueprint §8.1 | D15; D20 | D12; D15; D20 |
| `10-§7-6` | conversation context following the user must stay inside the active business | explicit active-business context; channel values conversation/ai_tool | C10 §7; Blueprint §8.1 | D14 | D12; D14 |
| `10-§10-2` | an upload belongs to the active business (Contract 21 §6 file isolation) | explicit active-business context | C10 §10; Blueprint §8.9 | D14 | D12; D14 |
| `10-§10-6` | intake and handoff status is reported for the active business's file | explicit active-business context | C10 §10; Blueprint §8.9 | D14 | D12; D14 |
| `10-§11-2` | voice business input executes the FPDR-1 governed command | explicit active-business context; confirmation_bindings; shared idempotency pattern | C10 §11; Blueprint §8.7 | DV; DTX | D12; DV; DTX |
| `10-§14-1` | a usable Workspace during a WhatsApp failure means a business-scoped native workflow (B6-01) | explicit active-business context; authz.authorize kernel and capability registry | C10 §14; Blueprint §8.10 | — | D12 |
| `10-§16-3` | conversational context is distinguished and stored per business | explicit active-business context; channel values conversation/ai_tool | C10 §16; Blueprint §8.1 | — | D12 |
| `10-§17-2` | candidate customers/suppliers come from the active business's parties | explicit active-business context; authz.authorize kernel and capability registry (object scope) | C10 §17; Blueprint §8.2 | DAI | D12; DAI |
| `10-§17-6` | candidate items come from the active business's inventory | explicit active-business context; authz.authorize kernel and capability registry (object scope) | C10 §17; Blueprint §8.2 | DAI | D12; DAI |
| `10-§18-1` | the native path during a channel outage is a business-scoped workflow (B6-01) | explicit active-business context; authz.authorize kernel and capability registry | C10 §18; Blueprint §8.10 | — | D12 |
| `10-§23-3a` | an accepted and handed-off file belongs to the active business | explicit active-business context | C10 §23; Blueprint §8.9 | D14 | D12; D14 |
| `10-§23-7` | healthy app operations during a WhatsApp outage are business-scoped workflows (B6-01) | explicit active-business context; authz.authorize kernel and capability registry | C10 §23; Blueprint §8.10 | — | D12 |
| `12-§4-1` | voice transaction input executes the FPDR-1 governed command | explicit active-business context; confirmation_bindings; shared idempotency pattern | C12 §4; Blueprint §8.7 | DV; DTX; D14 | D12; DV; DTX; D14 |
| `12-§4-7` | short business summaries read the active business's data | explicit active-business context; authz.authorize kernel and capability registry | C12 §4; Blueprint §8.7 | DV | D12; DV |
| `12-§11-5` | Workspace voice use of Business Memory reads and writes the active business's records | explicit active-business context | C12 §11; Blueprint §8.7 | DV; D14 | D12; DV; D14 |
| `12-§15-4` | persisted transcripts and audit evidence (FPDR-3) are business-scoped records | explicit active-business context; authority events | C12 §15; Blueprint §8.7 | DV; D14; DUF6 | D12; DV; D14; DUF6 |
| `12-§21-1` | voice transaction acceptance executes the FPDR-1 governed command | explicit active-business context; confirmation_bindings; shared idempotency pattern | C12 §21; Blueprint §8.7 | DV; DTX; D14 | D12; DV; DTX; D14 |
| `22-§7-7` | conversational channels sharing Business Memory read and write the active business's records | explicit active-business context | C22 §7; Blueprint §8.3 | D14 | D12; D14 |
| `22-§22-2` | deterministic permission-rule tests exercise the SB-P-1.12 kernel | authz.authorize kernel and capability registry | C22 §22; Blueprint §8.11 | — | D12 |
| `22-§24-1` | AI memory only through authorized Smart Business memory requires an authorization decision | authz.authorize kernel and capability registry; explicit active-business context | C22 §24; Blueprint §8.3 | D14; DAI | D12; D14; DAI |
| `22-§29-1` | one Business Memory/action truth is shown by executing governed business actions | explicit active-business context; confirmation_bindings; shared idempotency pattern | C22 §29; Blueprint §8.3 | D14; D20 | D12; D14; D20 |
| `17-§5-4` | visual and conversation workspaces share the active business's Business Memory | explicit active-business context | C17 §5; Blueprint §8.1 | D14 | D12; D14 |
| `17-§5-8` | shared document/reminder/intelligence foundations act on the active business | explicit active-business context | C17 §5; Blueprint §8.1 | D14; D15 | D12; D14; D15 |
| `17-§22-4` | consistent dashboard and conversation state is a read of the active business's state | explicit active-business context | C17 §22; Blueprint §8.1 | D14 | D12; D14 |
| `BP-§6.4-1` | the kernel's shared Business Memory is business-scoped | explicit active-business context | BP §6.4; Blueprint §8.3 | D14 | D12; D14 |
| `BP-§6.4-4` | the kernel's shared conversation context is business-scoped | explicit active-business context; channel values conversation/ai_tool | BP §6.4; Blueprint §8.3 | DAI | D12; DAI |
| `BP-§6.4-6` | typed tool/action proposals carry the principal, business and capability | authz.authorize kernel and capability registry; channel values conversation/ai_tool; explicit active-business context | BP §6.4; Blueprint §8.3 | DAI | D12; DAI |
| `BP-§6.4-9` | voice/document handoff carries business-scoped media and results | explicit active-business context | BP §6.4; Blueprint §8.3 | DV; D14 | D12; DV; D14 |
| `BP-§8.4-2` | proving approved native workflows with Meta disconnected uses business-scoped workflows (B6-01) | explicit active-business context; authz.authorize kernel and capability registry | BP §8.4; Blueprint §8.10 | — | D12 |
| `BP-§10.2-W1` | the native Workspace operates for an authorized principal in the active business | explicit active-business context; authz.authorize kernel and capability registry; channel values conversation/ai_tool | BP §10.2; Blueprint §8.1 | — | D12 |
| `BP-§10.2-W3` | conversation context is business-scoped state | explicit active-business context; channel values conversation/ai_tool | BP §10.2; Blueprint §8.1 | — | D12 |
| `BP-§10.2-W4` | Basic Voice includes governed voice actions on business data (FPDR-2) | explicit active-business context; authz.authorize kernel and capability registry; confirmation_bindings | BP §10.2; Blueprint §8.7 | DV | D12; DV |
| `BP-§10.2-W6` | typed tool/action proposals carry the principal, business and capability | authz.authorize kernel and capability registry; channel values conversation/ai_tool; explicit active-business context | BP §10.2; Blueprint §8.5 | — | D12 |
| `BP-§10.2-W11` | attachment handoff carries the active business's file | explicit active-business context | BP §10.2; Blueprint §8.9 | D14 | D12; D14 |
| `BP-§10.2-E1` | an authorized merchant opening the Workspace requires principal and business resolution | explicit active-business context; authz.authorize kernel and capability registry | BP §10.2; Blueprint §8.1 | DAI | D12; DAI |
| `BP-§10.2-E5` | Smart Business still working without Meta is shown with business-scoped workflows (B6-01) | explicit active-business context; authz.authorize kernel and capability registry | BP §10.2; Blueprint §8.10 | — | D12 |
| `BP-§10.2-SB` | the Owner's approved native workflow is business-scoped (B6-01; MC-08 §2) | explicit active-business context; authz.authorize kernel and capability registry | BP §10.2; Blueprint §8.10 | — | D12 |

### 2.4 Candidates not given `D12` (399 rows)

Listed for reproducibility. Each falls in an exclusion class of Section 2.1.

`24-§4-1`, `24-§4-2`, `24-§4-3`, `24-§4-4`, `24-§4-5`, `24-§4-6`, `24-§4-7`, `24-§4-8`, `24-§5-5`, `24-§5-7`, `24-§5-8`, `24-§6-1`, `24-§6-2`, `24-§6-3`, `24-§7-1`, `24-§7-2`, `24-§8-1`, `24-§8-2`, `24-§8-3`, `24-§9-3`, `24-§9-4`, `24-§13-2`, `24-§15-1`, `24-§15-2`, `24-§15-3`, `24-§15-4`, `24-§15-6`, `24-§15-7`, `24-§15-8`, `24-§17-1`, `24-§17-2`, `24-§17-4`, `24-§19-1`, `24-§19-2`, `24-§19-3`, `24-§19-4`, `24-§20-1`, `24-§20-2`, `24-§20-3`, `24-§20-4`, `24-§20-7`, `24-§20-10`, `24-§22-1`, `24-§22-2`, `24-§22-3`, `24-§22-4`, `24-§22-5`, `24-§22-6`, `24-§22-7`, `24-§23-1`, `24-§23-2`, `24-§23-3`, `24-§23-4`, `24-§23-5`, `24-§23-7`, `24-§23-8`, `24-§23-11`, `24-§23-12`, `24-§23-13`, `24-§23-14`, `24-§23-15`, `24-§23-16`, `24-§23-17`, `24-§24-10`, `24-§25-4`, `24-§25-6`, `24-§25-7`, `24-§25-8`, `24-§25-9`, `24-§26-1`, `24-§26-2`, `24-§26-3`, `24-§26-4`, `24-§26-5`, `24-§26-7`, `24-§26-8`, `24-§26-9`, `24-§26-10`, `24-§27-2`, `24-§27-4`, `24-§27-6`, `24-§27-9`, `24-§27-11`, `24-§28-1`, `24-§28-2`, `24-§28-3`, `24-§28-4`, `24-§28-9`, `24-§28-10`, `24-§28-11`, `24-§29-1`, `24-§29-2`, `24-§29-3`, `24-§29-6`, `24-§30-1`, `24-§30-2`, `24-§30-3`, `24-§30-4`, `24-§30-5`, `24-§30-6`, `24-§30-7`, `24-§30-8`, `24-§31-5`, `24-§31-6`, `24-§31-12`, `24-§31-14`, `24-§31-16`, `9-§3-1`, `9-§3-2`, `9-§3-3`, `9-§3-4`, `9-§3-5`, `9-§3-6`, `9-§3-7`, `9-§3-8`, `9-§3-9`, `9-§4-2`, `9-§4-3`, `9-§4-4`, `9-§4-5`, `9-§5-1`, `9-§5-2`, `9-§6-1`, `9-§6-2`, `9-§7-1`, `9-§7-2`, `9-§7-3`, `9-§8-1`, `9-§8-4`, `9-§9-1`, `9-§9-3`, `9-§9-4`, `9-§9-5`, `9-§9-7`, `9-§9-8`, `9-§11-1`, `9-§11-2`, `9-§11-3`, `9-§11-4`, `9-§11-5`, `9-§11-6`, `9-§12-4`, `9-§12-10`, `9-§12-13`, `9-§13-1`, `9-§13-2`, `9-§13-3`, `9-§13-4`, `9-§13-5`, `9-§13-6`, `9-§13-7`, `9-§13-8`, `9-§13-11`, `9-§14-1`, `9-§14-2`, `9-§14-3`, `9-§14-4`, `9-§14-5`, `9-§14-6`, `9-§14-7`, `9-§14-8`, `9-§15-1`, `9-§15-2`, `9-§15-3`, `9-§15-4`, `9-§15-5`, `9-§16-1`, `9-§16-2`, `9-§16-3`, `9-§17-2`, `9-§17-4`, `9-§17-7`, `9-§17-8`, `9-§18-1`, `9-§18-2`, `9-§18-3`, `9-§18-4`, `9-§18-5`, `9-§18-6`, `9-§18-7`, `10-§4-1`, `10-§4-2`, `10-§4-3`, `10-§4-4`, `10-§4-5`, `10-§4-6`, `10-§4-7`, `10-§4-8`, `10-§5-1`, `10-§5-2`, `10-§5-3`, `10-§5-4`, `10-§5-6`, `10-§5-11`, `10-§6-6`, `10-§6-13`, `10-§10-8`, `10-§11-3`, `10-§11-6`, `10-§11-7`, `10-§11-8`, `10-§12-1`, `10-§12-2`, `10-§12-3`, `10-§16-1`, `10-§16-2`, `10-§16-4`, `10-§16-5`, `10-§16-8`, `10-§17-1`, `10-§17-3`, `10-§18-2`, `10-§18-3`, `10-§18-4`, `10-§18-5`, `10-§18-9`, `10-§18-10`, `10-§18-12`, `10-§18-13`, `10-§20-1`, `10-§20-2`, `10-§20-3`, `10-§20-4`, `10-§20-6`, `10-§22-1`, `10-§22-2`, `10-§22-3`, `10-§22-4`, `10-§22-5`, `10-§22-6`, `12-§3-1`, `12-§4-6`, `12-§4-9`, `12-§6-2`, `12-§6-3`, `12-§6-4`, `12-§6-5`, `12-§7-1`, `12-§7-2`, `12-§7-4`, `12-§7-5`, `12-§7-6`, `12-§7-9`, `12-§7-10`, `12-§8-1`, `12-§8-2`, `12-§8-3`, `12-§8-5`, `12-§9-1`, `12-§9-2`, `12-§9-3`, `12-§11-1`, `12-§11-9`, `12-§13-3`, `12-§16-8`, `12-§17-1`, `12-§17-2`, `12-§17-3`, `12-§17-4`, `12-§17-5`, `12-§17-6`, `12-§17-9`, `12-§17-10`, `12-§17-11`, `12-§17-12`, `12-§17-13`, `12-§17-14`, `12-§17-15`, `12-§18-1`, `12-§18-2`, `12-§20-1`, `12-§20-2`, `12-§20-3`, `12-§20-4`, `12-§20-5`, `12-§20-6`, `12-§21-2`, `12-§21-7`, `12-§21-10`, `8-§3-1`, `8-§3-2`, `8-§3-3`, `8-§3-4`, `8-§3-5`, `8-§3-8`, `8-§4-1`, `8-§5-1`, `8-§5-2`, `8-§5-3`, `8-§6-1`, `8-§6-2`, `8-§6-3`, `8-§6-4`, `8-§6-5`, `8-§7-1`, `8-§7-2`, `8-§7-3`, `8-§7-6`, `8-§7-7`, `8-§7-8`, `8-§7-11`, `8-§7-12`, `8-§11-1`, `8-§11-2`, `8-§11-4`, `8-§11-5`, `8-§12-1`, `8-§12-5`, `8-§13-1`, `8-§15-1`, `8-§15-2`, `8-§15-3`, `8-§15-4`, `8-§15-6`, `8-§15-7`, `8-§15-10`, `8-§15-11`, `8-§16-1`, `8-§16-2`, `8-§16-3`, `8-§16-4`, `8-§16-5`, `8-§16-9`, `8-§17-2`, `8-§17-3`, `8-§17-4`, `8-§17-6`, `22-§4-2`, `22-§7-1`, `22-§7-4`, `22-§7-9`, `22-§7-10`, `22-§8-1`, `22-§8-2`, `22-§8-3`, `22-§8-4`, `22-§8-5`, `22-§8-6`, `22-§8-7`, `22-§17`, `22-§19-1`, `22-§19-2`, `22-§19-3`, `22-§19-4`, `22-§19-5`, `22-§19-6`, `22-§19-7`, `22-§21`, `22-§22-1`, `22-§22-3`, `22-§22-4`, `22-§22-5`, `22-§22-6`, `22-§27-1`, `22-§27-2`, `22-§27-3`, `22-§27-4`, `22-§27-5`, `22-§27-6`, `22-§27-7`, `22-§28-1`, `22-§28-2`, `22-§28-3`, `22-§28-4`, `22-§28-5`, `22-§28-6`, `22-§28-7`, `22-§28-8`, `22-§28-9`, `22-§28-10`, `22-§29-10`, `22-§29-14`, `17-§5-1`, `17-§5-2`, `17-§5-6`, `17-§22-8`, `20-§14-1`, `20-§14-2`, `20-§14-3`, `20-§14-4`, `20-§15-3`, `BP-§5.4-1`, `BP-§6.4-3`, `BP-§6.4-5`, `BP-§6.6-1`, `BP-§8.3-1`, `BP-§8.4-1`, `BP-§8.4-3`, `BP-§10.2-W2`, `BP-§10.2-W5`, `BP-§10.2-W12`, `BP-§10.2-W13`, `BP-§10.2-I1`, `BP-§10.2-E2`, `BP-§10.2-E4`, `BP-§11-1`, `BP-§12-1`, `BP-§12-3`, `BP-§13-1`.

### 2.5 Blueprint dependency correction

- §12.1: the `D12` count becomes 252 (198 + 54). A new paragraph states that every business-scoped Conversation/AI path, including Owner-only flows and Scenario B, consumes SB-P-1.12 explicit active-business context and authority evidence; single-ownership resolution and parallel paths are excluded (SB-P-1.12 EIS §19.5); WhatsApp independence and SB-P-1.12-authority independence are distinct.
- §15.1 Scenario B: "No external dependency beyond this mission's build" is replaced by "WhatsApp-independent, not SB-P-1.12-authority-independent", with the `D12` dependency. The scenario text itself is unchanged and remains a WhatsApp-independence scenario.
- §15.5 Scenario B and §13 first risk row: `D12` / B6-01 noted.

## 3. B6-02 — `FPDR-5`

New Founder Decision ID: **`FPDR-5`** (`founder/03-post-stage6-founder-product-decision-record.md`), recording verbatim: "Approved — allow existing credit-payment-method sales in SB-P-1.13; mature credit/repayment remains SB-P-1.14."

Annotated FCTM rows (5):

| Row | Reason | Founder-decision cell before | After |
|---|---|---|---|
| `12-§4-1` | voice input names a sale whose payment method is credit | FPDR-1; FPDR-2 | FPDR-1; FPDR-2; FPDR-5 |
| `12-§7-5` | payment-state clarification decides between an existing credit-payment-method sale and unavailable mature credit truth | — | FPDR-5 |
| `12-§7-6` | credit-versus-repayment clarification: repayment remains SB-P-1.14 | FPDR-2 | FPDR-2; FPDR-5 |
| `12-§21-1` | acceptance of credit voice input is limited to an existing sale with payment_method = credit | FPDR-1; FPDR-2 | FPDR-1; FPDR-2; FPDR-5 |
| `9-§9-4` | paid-versus-owed clarification: an owed balance is mature credit truth (SB-P-1.14) | — | FPDR-5 |

Blueprint: Metadata; §8.5 and §8.7 (scope sentence and bullet); §10.1 (`FPDR-5` block after the unchanged `FPDR-1` to `FPDR-4`); §15.1 Scenario A qualifier; §15.4 acceptance limit; §19 Founder-decision cells of the 5 rows.

`FPDR-1` to `FPDR-4` text is unchanged, both in `founder/02` (not edited) and in Blueprint §10.1.

## 4. Blueprint section diff summary

| Section | Change |
|---|---|
| Metadata | FCTM blob updated; `FPDR-5` record referenced |
| §8.5 | One sentence: existing credit-payment-method sale is an available type under `FPDR-5`; no balance, owed state or repayment |
| §8.7 | New `FPDR-5` bullet |
| §10.1 | New `FPDR-5` block; decision-count line adds `FPDR-5` on 5 rows |
| §12.1 | `D12` count 198 → 252; business-scoped-paths paragraph (B6-01) |
| §13 | First risk row names Owner-only paths and Scenario B |
| §15.1 | Scenario A qualifier adds `FPDR-5`; Scenario B dependency corrected |
| §15.4 | `FPDR-5` acceptance limit |
| §15.5 | Scenario B dependency `D12` |
| §18 | Version 0.2 |
| §19 | Governance rows for PRs #781–#784 and this draft; FCTM blob; 57 row lines regenerated (54 gain `§12`; 5 gain `FPDR-5` and `§10.1`; 2 rows have both) |

Sections 1–7, 9, 11, 14, 16, 17 and every other part of §8 are unchanged. No Section 8 or Section 11 membership changes.

## 5. Proof that no other field changed

Script comparison of every FCTM row before and after (columns: Row ID, source, pointer, kind, build commitment, commercial classification, owning mission, disposition):

| Check | Result |
|---|---|
| Row count | 974 before, 974 after; same IDs in the same order |
| Rows with any change in those eight columns | 0 |
| Rows with a changed Dependency cell | 54 (exactly the Section 2.3 set) |
| Rows with a changed Founder-decision cell | 5 (exactly the Section 3 set) |
| Rows with a changed Evidence cell | 57 (the union of both sets) |
| Disposition totals | unchanged: 651 / 126 / 121 / 52 / 21 / 3 / 0 |
| Blueprint Section 19 versus FCTM | identical on ID, disposition, owning mission and Founder-decision cell for all 974 rows |

## 6. Trigger screen

| Trigger | Result |
|---|---|
| T2 — conflict among approved sources | None. B6-01 aligns the Blueprint with the locked SB-P-1.12 EIS §19.5 |
| T3 — new product decision | B6-02 was triggered and is resolved by `FPDR-5`; no further decision needed |
| T6 — material derived constraint | None new |
| T7 — omission, deferral, pull-forward, simplification, reclassification | Not triggered. No ownership, timing, commitment or classification changes; no mature Ledger work moves |
| T8 — conflict or infeasibility | B6-01 resolved as a documentary dependency correction (SB-P-1.13-MC-08 §2); none new |

No stop condition of SB-P-1.13-MC-09 §7 occurred.

## 7. Observation (not changed)

Several Blueprint Metadata status rows (Status, Builder Review, Mission Control Review) still describe the Stage 4 state. They are outside the B6-01/B6-02 scope of this package and were left unchanged for Mission Control to schedule.

## 8. Verification

- FCTM and Blueprint proofs in Section 5 were produced by script.
- Markdown Quality Gate and the pre-commit gate: results in the pull-request handover.

**Not authorized and not done:** Stage 7, Sections 20–21, Blueprint lock, EIS, implementation, SQL or migration work, provider or production action, merge.
