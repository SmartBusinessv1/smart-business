# SMART BUSINESS MISSION CONTROL — MC-177

# SB-P-1.12 — Local Runtime Activation Evidence

**Recipient:** Supabase Backend Architecture specialist  
**Work package:** `SB-P-1.12-WP-LOCAL-RUNTIME-ACTIVATION-EVIDENCE`  
**Status:** EXECUTE ONLY AFTER MC-177 PR IS HUMAN-MERGED AND MISSION CONTROL VERIFIES CANONICAL `main`

Read in full:

`communication/missions/SB-P-1.12/mission-control/47-assurance-incident-and-runtime-model-disposition.md`

Mission Control has selected the planning model:

**Local ephemeral Smart Business runtime bound only to `drravyyauixltoihzmwo / smart-business-test`.**

The test project is approved for this future Stage 17 non-production use, but runtime activation is **not yet authorized**.

Collect read-only activation evidence only.

For the exact test project, determine where provider tooling permits:

- Auth site URL;
- redirect allowlist / allowed redirect URLs;
- enabled sign-in providers;
- email confirmation behavior/configuration;
- SMTP/custom-mail presence as metadata only;
- whether localhost is already permitted;
- any provider setting that would block password-based local verification.

Do not expose secret/key values.

Repository-side verify:

- browser variables: `VITE_SUPABASE_URL`, `VITE_SUPABASE_PUBLISHABLE_KEY`;
- server variables: `SUPABASE_URL`, `SUPABASE_PUBLISHABLE_KEY`;
- `SUPABASE_SERVICE_ROLE_KEY` is server-only if later required and must never be browser-exposed;
- whether application startup itself writes data;
- which Stage 17 flows can run with parser flows excluded;
- minimal synthetic fixture matrix needed;
- fixture cleanup/disposition plan.

Do not:

- change Auth settings;
- add redirects;
- create users or fixtures;
- write test data;
- create environment files with values;
- start the app against test;
- execute runtime scenarios;
- deploy/host;
- mutate Lovable;
- mutate production;
- author/execute SQL or migrations.

If a required provider fact cannot be read, report the exact gap and later human/provider action needed.

Write only:

- `communication/missions/SB-P-1.12/specialists/11-stage13-local-runtime-activation-evidence.md`
- `communication/live/report1.40.md`

Use exact Git authority in MC-177.

Also report the current GitHub Actions state and, if accessible read-only, whether Community Discussions #209242 and #209244 have received any new response. Do not infer a response if inaccessible.

End:

**LOCAL RUNTIME ACTIVATION EVIDENCE SUBMITTED — STOP FOR MISSION CONTROL DISPOSITION**

No runtime activation. No test-data mutation. No implementation. No SQL/migration authoring or execution.
