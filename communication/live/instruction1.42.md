# SMART BUSINESS MISSION CONTROL — MC-179

# SB-P-1.12 — Provider Continuity Engineering Assessment

**Recipient:** Claude Code / Infrastructure Architecture  
**Work package:** `SB-P-1.12-WP-PROVIDER-CONTINUITY-ENGINEERING-ASSESSMENT`  
**Status:** EXECUTE ONLY AFTER MC-179 PR IS HUMAN-MERGED AND MISSION CONTROL VERIFIES CANONICAL `main`

Read in full:

`communication/missions/SB-P-1.12/mission-control/49-github-account-restriction-and-continuity-disposition.md`

New incident facts:

- GitHub shows the Founder account as flagged and blocks third-party app authorization.
- Supabase confirms the Founder Supabase account is GitHub-linked and cannot use Supabase password reset as an independent login path.
- EV-01 Actions/run-history/search incidents remain unresolved.
- MC-178 Founder Supabase Auth dashboard capture is blocked by this account restriction.

This is a **read-only continuity design mission**.

Assess:

1. provider-independent source recovery:
   - encrypted/local bare mirror;
   - independent secondary Git remote;
   - combined model.

2. governed assurance substitute:
   - exact existing Fast Gate commands;
   - exact-SHA clean checkout;
   - machine-captured logs;
   - checksums/integrity;
   - reproducibility;
   - independent review;
   - Full Assurance only under separate authorization because it writes test state.

3. Supabase administration resilience:
   - official/provider-supported second administrator/member or alternate independent access path;
   - least privilege;
   - auditability;
   - no shared credentials;
   - no GitHub-only single identity.

4. coexistence with restored GitHub:
   - the design must not require abandoning GitHub if GitHub recovers.

Split recommendations into:

- Build Now
- Build Later
- Reject

Prefer the smallest continuity system that removes the single point of failure without creating unnecessary operational complexity.

Do not:

- create accounts;
- create provider resources;
- create a mirror;
- install CI;
- change GitHub settings;
- change Supabase membership;
- expose secrets;
- run Full Assurance;
- implement application code;
- author/execute SQL or migrations.

Write only:

- `communication/missions/SB-P-1.12/claude-code/40-provider-continuity-engineering-assessment.md`
- `communication/live/report1.42.md`

Use exact Git authority in MC-179.

End:

**PROVIDER CONTINUITY ENGINEERING ASSESSMENT SUBMITTED — STOP FOR MISSION CONTROL DISPOSITION**
