# Preservation provenance — added under MC-46 on 2026-09-26

- Original author: Existing MC-33-appointed Security & Permissions Architecture room.
- Original review: MC-42 independent delta re-review; exact PR #641 head `67fee9b55ff7ecbf5fe13aad878ce9379c4061a5`.
- Preservation: Delayed direct author preservation on the MC-46 evidence branch. Original report was relayed through Founder chat rather than recorded through the repository live pair at the time. This is not an invented historical live exchange.
- Source fidelity: The original authored body follows without substantive editing; the provenance header is later-added metadata.

---

# MC-42 — Independent Security Delta Re-review Report

**Mission:** SB-P-1.12 — Authority, Identity & Product Surface Foundation  
**Reviewer:** MC-33-appointed Security & Permissions Architecture  
**PR:** [#641 — Stage 7 Engineering Review](https://github.com/SmartBusinessv1/smart-business/pull/641)

| Checkpoint | Exact commit |
|---|---|
| Canonical baseline | `733f33935b37f6e3b5b4f7e8916f0161d6646527` |
| Previously reviewed head | `88b9256612e7d8bf1db88ec02c29eac8b5d545f9` |
| **New exact review head** | **`67fee9b55ff7ecbf5fe13aad878ce9379c4061a5`** |

**Review class:** Independent, read-only repository and documentation assessment.

<box border={{size:1,color:"#D97706"}} radius="lg" padding={4} gap={2}>
  <badge color="warning">MC-42 overall disposition</badge>
  <title size="xl">NARROW CORRECTION REQUIRED</title>
  Claude Code's MC-40 and MC-41 corrections substantively address the nine previous security findings for Stage 7 documentation.

  Two narrow wording inconsistencies remain before I can recommend treating the security-sensitive documentation as ready for Mission Control's substantive acceptance review:

  1. ER-1's blanket prohibition on all `anon`/`PUBLIC` policies or grants conflicts with E10's separately approved anonymous-public-workflow exception.
  2. The Auth-user cascade must be described as a deletion path that **can initiate** business deletion, not one proven to complete in every data state.

  **ESC-1 remains an open T8. Its underlying integrity risk is not remediated.**
</box>

## 1. Exact delta verified

The GitHub comparison establishes that the new head is two commits ahead of the previously reviewed head, with no divergence.

Six files changed:

| File | Changes |
|---|---:|
| Blueprint `SB-P-1.12.md` | 79 additions, 71 deletions |
| Claude Code Stage 7 report | 45 additions, 14 deletions |
| Live report | 4 additions, 4 deletions |
| Mission README | 1 addition, 1 deletion |
| Decision log | 14 additions |
| Handover log | 24 additions |

The corrections remain on the same draft PR.

The corrected Blueprint reports **176 `FEASIBLE`, 51 `CONDITIONAL`, and one `BLOCKED`** engineering entries. Independent-review classifications are now 190 `PENDING` and 38 `N/R`.

These are draft engineering and review classifications, not implementation or security-certification results.

## 2. SEC-S7-01 through SEC-S7-09 — Individual dispositions

| Finding | MC-42 disposition | Verification and remaining obligation |
|---|---|---|
| **SEC-S7-01 — ESC-1 deletion and durability** | **SATISFIED FOR DOCUMENTATION, SUBJECT TO NARROW WORDING CORRECTION; T8 REMAINS OPEN** | The draft now records T8, blocks `22-§20-2`, distinguishes the two deletion paths, labels the 18-FK count as Claude Code's inventory, and preserves the history-durability holds. Correct the categorical Auth-user deletion wording described below. |
| **SEC-S7-02 — Authority surface and isolation** | **SATISFIED FOR STAGE 7 DOCUMENTATION; IMPLEMENTATION CONDITIONAL** | E1/E2 now distinguish requested business context from authority, require an inventory covering direct grants/RLS/RPCs/service-role/storage paths, include Owner-of-A/Manager-of-B denial tests, and address transaction `RETURNING` and side channels. |
| **SEC-S7-03 — WS-B and privileges** | **SATISFIED IN E10/M5/ER-3; ER-1 CORRECTION REQUIRED** | E10 and M5 now require effective-access reconciliation across actual roles and creator-role default privileges, without blanket function revocation. ER-1 still contradicts the permitted exception. |
| **SEC-S7-04 — Reference Cost and margin** | **SATISFIED FOR DOCUMENTATION; G-3 CONDITIONAL** | E3 and ER-5 address privileged RPC responses, exports, aggregates, caches and other disclosure paths. Separate Founder-approved delegation is preserved; derived-value inference remains unresolved. |
| **SEC-S7-05 — Revocation and imports** | **SATISFIED FOR DOCUMENTATION; EXECUTION EVIDENCE REQUIRED LATER** | E4 and affected rows no longer treat legacy Owner re-resolution as proof of future membership revocation. Authoritative checks through consequential execution/commit, privileged bookkeeping, partial writes and truthful counts are now stated as obligations. |
| **SEC-S7-06 — Service-role and support access** | **SATISFIED FOR DOCUMENTATION; IMPLEMENTATION CONDITIONAL** | E9, E13 and ER-2 now require continuous trusted actor/business/action/object binding and enforceable support purpose, consent, operator identity, scope, expiry, revocation and audit. |
| **SEC-S7-07 — Denial-audit durability** | **SATISFIED FOR DOCUMENTATION; DURABILITY PROOF OUTSTANDING** | E5 and new ER-12 expressly identify the rollback problem and require separate durable-denial evidence without selecting a mechanism. |
| **SEC-S7-08 — Neighboring integrity rows** | **SATISFIED FOR DOCUMENTATION; ESC-1 HOLDS RETAINED** | `22-§14-5` and `BP-§7-1` are now conditional on durability, alongside the existing authority-audit rows. |
| **SEC-S7-09 — Evidence language** | **SATISFIED** | §20.1 and the Stage 7 report distinguish proposed buildability from implemented, tested, independently reviewed or accepted security. |

**No previous finding remains wholly unanswered.** The outstanding corrections are consistency and precision corrections to an otherwise substantive reconciliation, not a request to reopen the entire Stage 7 draft.

---

## 3. ESC-1 — Independent technical re-examination

<badge color="danger">OPEN — T8 SECURITY / INTEGRITY FINDING</badge>

### Owner API path

The initial migration explicitly grants `DELETE` on `public.businesses` to `authenticated` and defines an Owner-scoped DELETE policy.

The corrected draft identifies this path independently of any UI button. This is supported by the repository DDL.

### Auth-user cascade

The original business table defines:

```sql
owner_id UUID NOT NULL
  REFERENCES auth.users(id)
  ON DELETE CASCADE
  UNIQUE
```

This establishes a second deletion path through the Auth identity relationship.

However, the corrected Stage 7 report §5 and Blueprint §20.2 still contain wording equivalent to:

> Deleting the Owner's Auth user deletes the business.

That statement is too categorical for the evidence class.

A cascading delete can be rejected by a downstream trigger or constraint. The migration proves the relationship and potential deletion path, not unconditional completion.

**Required replacement meaning:**

> Deleting the Owner's Auth user can initiate cascading deletion of the business, independently of the application API. Completion depends on the applicable child-row state, constraints and triggers; no runtime outcome has been verified.

Apply that precision consistently in §20.2, §21.1 ESC-1 and the Stage 7 report §5.

### Protected and unprotected history

The draft now correctly distinguishes existing append-only protection from a universal durability guarantee.

Where deletion reaches protected Catalog or Inventory history, rejection may stop the deletion. Where relevant guards do not block the operation, the transaction and correction-event cascades expose the financial-history risk.

The revised language concerning the 18 cascading foreign keys is also appropriate: it is explicitly attributed to Claude Code's repository inventory rather than presented as my independently confirmed complete constraint count.

### Authority-audit durability

The corrected dependency scope is appropriate:

| Row | Current Stage 7 treatment |
|---|---|
| `22-§20-2` | `BLOCKED` — ESC-1 open T8 |
| `21-§19-1`–`21-§19-8` | `CONDITIONAL` — durability conclusion held |
| `22-§29-12` | `CONDITIONAL` — durability conclusion held |
| `22-§14-5` | `CONDITIONAL` — durability conclusion held |
| `BP-§7-1` | `CONDITIONAL` — durability conclusion held |

The unchanged FCTM disposition of `22-§20-2` remains `IN SCOPE`.

**Independent conclusion:** ESC-1 is accurately documented as a material unresolved security/integrity conflict once the Auth-user wording is corrected. This is acceptance of the *risk documentation*, not evidence that business deletion or financial-history durability has been made safe.

I make no deletion-lifecycle choice, select no remediation, and close no T8.

---

## 4. ER-1 versus E10 — Required consistency correction

<badge color="danger">CORRECTION REQUIRED</badge>

This is the remaining substantive documentary inconsistency.

Blueprint §20.3 E10 now says:

> Preserve any separately approved anonymous public workflow, if one exists.

This is consistent with least-privilege reconciliation: anonymous access must be justified and scoped to an approved public operation rather than prohibited without distinguishing the function's purpose.

But §21.2 ER-1 still proposes:

> A policy inventory test that fails on any `anon` or `PUBLIC` policy or grant.

Those statements cannot both control the eventual verification design without qualification.

ER-1 would reject even an intentionally approved, bounded anonymous-public operation permitted by E10.

### Required correction

Replace the ER-1 mitigation's blanket rule with wording equivalent to:

> Table-family migration with deny-by-default, one kernel, and a policy/grant inventory test that fails on unauthorized `anon` or `PUBLIC` access, while permitting only separately approved, explicitly scoped anonymous-public workflows documented in the access inventory.

This preserves the essential security invariant: **no anonymous access to protected business data or business-authority RPCs by default.**

It does not create a new anonymous-public exception or authorize implementation of one.

The related M1 statement—testing that each new object has no `anon` or `PUBLIC` grant—should likewise be read or narrowly qualified against the same approved-exception rule, so the migration rehearsal cannot contradict E10.

Affected rows include `BP-§10.1-7`, `BP-§10.1-8`, `21-§6-1`–`21-§6-7`, and `22-§6-5`.

---

## 5. Nine newly `PENDING` entries

I inspected all nine entries newly moved from `N/R` to `PENDING` in the corrected §20.5 register.

| Row | Independent MC-42 disposition |
|---|---|
| `22-§17` | **Satisfied.** Integration compatibility includes the requirement that later adapters cannot bypass the shared Authority Kernel. |
| `22-§21` | **Satisfied.** Security review appropriately covers performance-driven authorization bypass or stale caching, not general performance optimization. |
| `22-§22` | **Satisfied.** Security-test coverage is within the independent mandate; required-check governance remains G-5. |
| `22-§23-1` | **Satisfied.** Platform access to merchant data is a permission/privacy boundary. |
| `22-§29-10` | **Satisfied.** Failure handling must deny rather than fail open. |
| `BP-§10.1-9` | **Satisfied.** Security-test sufficiency is independently reviewable without deciding branch-protection policy. |
| `21-§21-2` | **Satisfied.** Authority-audit visibility and potential misuse for staff scoring are security-relevant. |
| `22-§13-1` | **Satisfied.** Clarification before consequential action is part of confirmation authority. |
| `22-§14-6` | **Satisfied.** Permission to write or view authorized human context requires security review. |

**Disposition: All nine reclassifications are justified.**

These entries now form part of the 190-row independent-review register. Their reclassification does not mean their future implementation has been verified.

### Two retained `N/R` entries

| Row | MC-42 disposition |
|---|---|
| `21-§20-3` | **Retained `N/R` justified.** The entry is confined to continuity of unaffected session/features; protected-data non-disclosure and security escalation are covered by `21-§20-1` and `21-§20-5`, both `PENDING`. |
| `21-§23-7` | **Retained `N/R` justified.** Non-accusatory merchant-facing treatment is primarily a product-experience obligation; security-sensitive escalation criteria remain independently reviewable under `21-§20-5`. |

No additional mandatory-review reclassification is requested in MC-42.

---

## 6. Remaining dependent gates and evidence limitations

| Matter | MC-42 status |
|---|---|
| ESC-1 | **OPEN T8** — material durability issue; Mission Control disposition outstanding |
| G-3 | OPEN — Reference Cost/margin derived-value inference |
| G-4 | OPEN — multiple-business ownership cardinality |
| G-5 | OPEN — required-check governance |
| G-6 / T4 / WS-B | Production state unverified; separately authorized evidence required |
| G-7 | Environment and provider topology not freshly verified |
| G-8 | Historical institutional-learning backfill status carried forward |
| S-2–S-7 | Retained as flagged in the mission record |
| Stage 8 | Not authorized |

No additional T8 is established by this documentary delta. SEC-S7-07 remains an explicit security risk requiring future design and evidence; it is not independently proven as an additional Product Truth conflict.

**Evidence limitations:** I reviewed repository files and the two exact PR heads. I did not execute SQL, delete any record, inspect current production grants, confirm live trigger state, verify production authentication configuration, or perform runtime cross-tenant or revocation tests.

The MC-41 corrections are documentation and design obligations. They do not demonstrate remediation of the actual business-deletion risk, effective grants, Reference Cost disclosure, privileged-path isolation or mid-import permission revocation.

## 7. Final handover to Mission Control

<box border={{size:1,color:"#D97706"}} radius="lg" padding={4} gap={2}>
  <title size="lg">MC-42 Independent Conclusion</title>
  **SEC-S7-01–SEC-S7-09: Substantively reconciled for Stage 7 documentation.**

  **Nine new `PENDING` entries: Justified.**

  **Two retained `N/R` entries: Justified.**

  **Remaining corrections:** Narrow ER-1/M1 anonymous-access exception consistency and Auth-user cascade precision.

  **ESC-1:** Open T8; `22-§20-2` remains blocked and in scope; dependent durability conclusions remain held.

  **Security-sensitive Stage 7 documentation:** Ready for Mission Control's substantive review **after those narrow wording corrections are independently verified**. Not ready for unconditional acceptance of the affected findings or closure of ESC-1.
</box>

No broad redesign or repeat of the entire Stage 7 review is requested. A focused correction of the identified wording, followed by exact-head re-verification, is sufficient for the outstanding MC-42 documentary issues.

**MC-42 INDEPENDENT SECURITY DELTA RE-REVIEW SUBMITTED — NARROW CORRECTION REQUIRED — ESC-1 T8 OPEN — NO PRODUCTION CERTIFICATION, STAGE 8 AUTHORIZATION OR FOUNDER MERGE APPROVAL.**
