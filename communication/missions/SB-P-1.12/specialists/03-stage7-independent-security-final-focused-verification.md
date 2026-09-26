# Preservation provenance — added under MC-46 on 2026-09-26

- Original author: Existing MC-33-appointed Security & Permissions Architecture room.
- Original review: MC-44 final focused independent security verification; exact PR #641 head `f791b6f29adb412eb99df8f121a25433850971f0`.
- Preservation: Delayed direct author preservation on the MC-46 evidence branch. Original report was relayed through Founder chat rather than recorded through the repository live pair at the time. This is not an invented historical live exchange.
- Source fidelity: The original authored body follows without substantive editing; the provenance header is later-added metadata.

---

# MC-44 — Final Focused Independent Security Verification

**Mission:** SB-P-1.12 — Authority, Identity & Product Surface Foundation  
**Reviewer:** Security & Permissions Architecture  
**PR:** [#641 — Draft Stage 7 Engineering Review](https://github.com/SmartBusinessv1/smart-business/pull/641)

<box border={{size:1,color:"#16A34A"}} radius="lg" padding={4} gap={2}>
  <badge color="success">Focused verification passed</badge>
  <title size="xl">BOTH MC-43 CORRECTIONS SATISFACTORY</title>
  The security-sensitive Stage 7 documentation is ready for Mission Control's substantive acceptance review, subject to the explicitly retained conditions and unresolved gates.

  **ESC-1 remains an open T8. No implementation or production security is certified.**
</box>

## 1. Exact-head verification

| Item | Verified value |
|---|---|
| Previously reviewed head | `67fee9b55ff7ecbf5fe13aad878ce9379c4061a5` |
| New exact review head | `f791b6f29adb412eb99df8f121a25433850971f0` |
| Canonical baseline | `733f33935b37f6e3b5b4f7e8916f0161d6646527` |
| Delta | One commit, five changed files |
| PR status | OPEN — DRAFT — UNMERGED |

I independently inspected the actual commit diff and corrected document text, rather than relying solely on Mission Control's [MC-43 verification comment](https://github.com/SmartBusinessv1/smart-business/pull/641#issuecomment-5845561990).

The Blueprint changes are confined to four line replacements in §§20–21. The remaining changes update the Stage 7 report and communication records.

## 2. Anonymous access — ER-1 and M1

<badge color="success">SATISFIED</badge>

**ER-1 now correctly requires a deny-by-default access inventory that rejects unauthorized `anon` or `PUBLIC` effective access to protected business tables and business-authority RPCs.**

It permits only separately approved, expressly scoped anonymous-public workflow access documented in that inventory.

M1 now applies the corresponding principle to new protected objects and explicitly considers the effective creator-role default privileges.

These corrections are consistent with E10, M5 and ER-3.

| Security requirement | Result |
|---|---|
| Unauthorized anonymous access to protected business objects rejected | Preserved |
| `PUBLIC` access included in effective-access assessment | Preserved |
| Creator-role default privileges considered | Preserved |
| Separately approved anonymous-public workflows respected | Preserved |
| New anonymous workflow created or approved | No |

**No new material inconsistency was introduced by this correction.**

Affected FCTM rows include `BP-§10.1-7`, `BP-§10.1-8`, `21-§6-1`–`21-§6-7`, and `22-§6-5`.

## 3. Auth-user deletion — ESC-1

<badge color="success">SATISFIED FOR DOCUMENTATION</badge>

I independently verified the corrected wording in all three required locations:

| Location | Result |
|---|---|
| Blueprint §20.2 — Authority concept | Correctly states that Auth-user deletion **can initiate** cascading business deletion |
| Blueprint §21.1 — ESC-1 | Correctly distinguishes the Auth-user path from the Owner API/UI path |
| Stage 7 report §5 | Correctly qualifies completion according to child-row state, constraints and triggers |

All three locations now distinguish repository-defined deletion relationships from a runtime outcome proven to complete.

The draft also retains the important safeguards from the previous review: existing append-only history may block deletion in some data states; this is not a universal durability guarantee; and the 18 cascading foreign keys remain attributed to Claude Code's inventory rather than represented as independently verified.

### ESC-1 retained disposition

<box border={{size:1,color:"#DC2626"}} radius="lg" padding={4} gap={2}>
  <badge color="danger">OPEN T8 — NOT REMEDIATED</badge>
  **`22-§20-2`: `BLOCKED`, FCTM disposition `IN SCOPE`.**

  The durability conclusions of `21-§19-1`–`21-§19-8`, `22-§29-12`, `22-§14-5`, and `BP-§7-1` remain conditional.

  No business-deletion lifecycle or remediation has been selected.
</box>

## 4. SEC-S7-01 through SEC-S7-09

The original MC-40 review and MC-42 delta review established the substantive security findings. MC-44 was limited to the remaining MC-43 corrections and any inconsistency those corrections introduced.

**All nine findings are now adequately represented in the Stage 7 documentation, subject to their stated conditions.**

| Finding | Final documentary disposition |
|---|---|
| SEC-S7-01 — ESC-1 | Satisfied; T8 remains open |
| SEC-S7-02 — Authority and isolation | Satisfied; implementation and evidence conditional |
| SEC-S7-03 — WS-B and grants | Satisfied, including ER-1/M1 consistency |
| SEC-S7-04 — Financial visibility | Satisfied; G-3 retained |
| SEC-S7-05 — Revocation/import | Satisfied; execution-boundary proof outstanding |
| SEC-S7-06 — Privileged access | Satisfied; implementation conditional |
| SEC-S7-07 — Denial-audit durability | Satisfied; future durability evidence required |
| SEC-S7-08 — Historical integrity rows | Satisfied; ESC-1 dependencies retained |
| SEC-S7-09 — Evidence classification | Satisfied |

The previous register review also remains applicable: 190 entries require independent security review, and 38 retain `N/R`. The nine reclassifications and two specifically justified retained `N/R` entries require no further MC-44 correction.

## 5. Evidence limitations and remaining authority

This verification establishes documentary sufficiency at the specified Git commit. It does not establish that the proposed Authority Kernel, future permission model, migration strategy, or production environment is secure.

ESC-1, G-3–G-8 and S-2–S-7 retain their recorded statuses and applicable holds. Mission Control must separately disposition ESC-1 and the independent-review report before relying on affected findings.

No production/provider inspection, runtime deletion test, SQL execution, Git write, implementation, or merge occurred.

---

<box border={{size:1,color:"#16A34A"}} radius="lg" padding={4} gap={2}>
  <title size="lg">Final handover to Mission Control</title>
  **MC-44 FINAL FOCUSED INDEPENDENT SECURITY VERIFICATION — PASS**

  Both MC-43 corrections are satisfactory.

  No new material security-documentation inconsistency was identified in the reviewed delta.

  The security-sensitive Stage 7 documentation at exact head `f791b6f29adb412eb99df8f121a25433850971f0` is ready for Mission Control's substantive acceptance review.

  ESC-1 remains an open T8, `22-§20-2` remains `BLOCKED` and `IN SCOPE`, and all dependent holds remain effective.

  **No Stage 7 acceptance, Founder merge approval, Stage 8 authorization, EIS authority, implementation approval or production security certification is issued by this specialist report.**
</box>
