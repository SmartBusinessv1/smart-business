# Approval Candidate Register

| ID | File or family | Version/status | Requested decision | Authority | Prerequisites/dependencies | Recommendation | Risk if unresolved |
|---|---|---|---|---|---|---|---|
| AC-01 | `merge/active/18_SB-P_Mission_Lifecycle_and_Delivery_Framework.md` | Version 1.0; ACTIVE — AUTHORITATIVE | Founder approval and active-index treatment completed by `SB-GOV-HOUSEKEEPING-1.2` on 2026-08-01 | Founder — Riyas PK and Mission Control | Complete | RESOLVED — APPROVED AND ACTIVATED | None; Mission Control verification pending |
| AC-02 | Ten EOS architecture/governance documents under `docs/engineering/eos/` | Draft; Founder approval pending | Decide per-document approval/publication | Founder with Mission Control review | Confirm EOS authority and remove backup files from decision set | Keep Pending pending focused review | Medium engineering-policy ambiguity |
| AC-03 | ChatGPT and Claude GitHub artifact workflows | Draft metadata; operational Stage B active | Reconcile metadata to Stage B decision | Mission Control; Founder if approval metadata requires | Commit `9c5baf1`; active Protocol 1.0 | Approve with Corrections | High Git-governance ambiguity |
| AC-04 | Three foundation build contracts under `docs/implementation/` | Draft for MC review | Approve, revise, or supersede | Mission Control | Validate against current Product Truth and implementation | Keep Pending | Medium implementation drift |
| AC-05 | SB-P-1.8 review/completion/correction reports | Changes corrected; re-review pending | Accept, require corrections, or open follow-up | Mission Control | Independent evidence/re-review | Keep Pending | Medium mission closure gap |
| AC-06 | `docs/implementation/SB-P-1.9/phase-3c-deployment-verification.md` | Pending review | Accept verification or request evidence | Mission Control | Runtime/deployment evidence | Keep Pending | Medium deployment uncertainty |
| AC-07 | 56 `docs/migration/` draft status artifacts | Draft/review required | Define which package is current and authorize only the next safe stage | Founder and Mission Control; specialist review | Environment, OAuth, backup, security, data, and rollback evidence | Approve with Corrections at package level | High if executed indiscriminately |
| AC-08 | `reports/SB-GOV-COMPARE-1.0_Project_Source_vs_Active_Governance_Audit.md` | Audit complete; review required | Record review disposition and successor relevance | Founder and Mission Control | Compare with SB-GOV-COMPARE-1.1 and active README | Archive or Supersede after review | Low/Medium stale audit authority |

Recommendations are advisory and do not constitute approval.

Legacy archive containment is not an approval candidate: `SB-GOV-HOUSEKEEPING-1.3` preserved the superseded 25-file set as non-governing provenance and did not reactivate or approve its contents.

## Reconciliation Update

- AC-01: At the time of `SB-GOV-HOUSEKEEPING-1.1`, Founder approval was not recorded. It was subsequently granted through `SB-GOV-HOUSEKEEPING-1.2`; candidate RESOLVED as ACTIVE and AUTHORITATIVE.
- AC-03: Metadata correction applied using the proven Stage B activation commit; Mission Control verification remains required.
