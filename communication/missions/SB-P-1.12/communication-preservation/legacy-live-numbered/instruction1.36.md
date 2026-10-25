# SMART BUSINESS MISSION CONTROL — MC-173

# SB-P-1.12 — Migration Plan Refinement and Evidence Closure

**Recipient:** Claude Code  
**Work package:** `SB-P-1.12-WP-MIGRATION-PLAN-REFINEMENT-AND-EVIDENCE-CLOSURE`  
**Status:** EXECUTE ONLY AFTER MC-173 PR IS HUMAN-MERGED AND MISSION CONTROL VERIFIES CANONICAL `main`

Read in full:

`communication/missions/SB-P-1.12/mission-control/43-combined-specialist-readiness-disposition.md`

Canonical specialist inputs:

- `communication/missions/SB-P-1.12/specialists/07-stage13-supabase-implementation-readiness-review.md`
- `communication/missions/SB-P-1.12/specialists/08-stage13-security-implementation-readiness-review.md`

Refine the candidate `SB-MIG-1.4` plan only. Do not implement or author SQL.

Mandatory corrections include:

1. M-09 → M-10 → M-11 → M-12 before M-08;
2. explicit M-10 no-return boundary;
3. explicit M-06 non-recursive definer-owner / authority-table read pattern;
4. deterministic M-07 ownership of `EC-AUD-04`;
5. deterministic M-08 ownership of `EC-CNF-03` using generalized confirmation bindings;
6. source-complete repository inventory of existing `SECURITY DEFINER` functions with compliance status;
7. M-13d retirement of old signatures/overloads;
8. source-complete repository inventory of privileged service-role handlers;
9. repository FK/cascade inventory and actor-column inventory;
10. guarded wrapper required for remote target-mutating Supabase CLI;
11. specialist pre-merge checkpoint mapping;
12. evidence-closure matrix for every combined blocker.

Use only durable repository evidence and canonical specialist observations. Unknown/live facts stay UNKNOWN / UNVERIFIED and name the evidence owner/source needed to close them.

Write only:

- `communication/missions/SB-P-1.12/claude-code/38-stage13-migration-plan-refinement-and-evidence-closure.md`
- `communication/live/report1.36.md`

Use the exact Git authority in MC-173. Open one PR to `main`. No self-merge.

End:

**MIGRATION PLAN REFINEMENT AND EVIDENCE CLOSURE SUBMITTED — STOP FOR MISSION CONTROL REVIEW**

No implementation. No SQL. No migration creation or execution.
