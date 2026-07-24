Document: OAuth Configuration Preconditions

Version: 1.0

Status: DRAFT — submitted for Mission Control review

Created By: Claude Code

Reviewed By: Mission Control (pending)

Mission: SB-MIG-1.2B

# SB-MIG-1.2B — OAuth Configuration Preconditions (Task 2)

No credential value is exposed anywhere in this document. This report extends SB-MIG-1.2A's `03-google-oauth-parity-report.md` with this mission's specific item list and current, freshly-checked status — nothing here is assumed carried over unchanged without a reason stated.

## 1. Classification

| Item | Classification | Detail |
| --- | --- | --- |
| Google provider enabled on Team LIPS Supabase | **Confirmed NOT enabled** | No tool in this environment reads GoTrue provider settings directly, but the provider's own public `/auth/v1/authorize` endpoint reports its own state truthfully on failure. A direct `curl` request to `https://gysgzasfcjvtrgaigfyn.supabase.co/auth/v1/authorize?provider=google&redirect_to=<app-origin>/dashboard` returned HTTP 400 with body `{"code":400,"error_code":"validation_failed","msg":"Unsupported provider: provider is not enabled"}` (captured verbatim in `06-runtime-test-report.md`). This is the provider-toggle-off state, distinct from the "enabled but misconfigured" state seen on the current production project (below) — Team LIPS Supabase has not had the Google provider turned on at all yet. |
| Google OAuth client ID configured | **Cannot be enabled until the provider itself is turned on** | The authorize endpoint's error is the toggle-level rejection, one step before client-ID/secret validation would even be reached — so this item's state is not independently observable yet; it is blocked behind the provider-enable step above. |
| Google OAuth client secret configured | **Pending founder action** | Requires a human with both Google Cloud Console and Team LIPS Supabase dashboard access — cannot be verified or configured by this mission. For comparison, the same `curl` probe against the *current production* Supabase project (`wwgqnshcgbukqczqblsm`) returned a different error — `{"code":400,"error_code":"validation_failed","msg":"Unsupported provider: missing OAuth secret"}` — indicating that project's Google provider toggle is already on but no secret is set. This confirms, empirically rather than by inference, that production's real Google sign-in has only ever worked through Lovable Cloud's separate OAuth broker, entirely independent of either Supabase project's own native GoTrue provider configuration. |
| Supabase callback URL added in Google Cloud Console | **Pending founder action** | The URL itself is knowable by convention (`https://gysgzasfcjvtrgaigfyn.supabase.co/auth/v1/callback`, per SB-MIG-1.2A's finding), but registering it in Google Cloud Console requires console access this environment does not have. |
| Supabase Site URL | **Pending dashboard action** | Also depends on the still-open hosting-platform question from SB-MIG-1.2/1.2A — **not applicable to this mission specifically**, since this mission's Locked Decisions keep the application hosted through Lovable for now (no hosting migration authorized here). The Site URL that matters for *this* mission is whichever Lovable-served URL(s) the app is reachable at (§ below). |
| Allowed redirect URLs | **Pending dashboard action** | Must include, at minimum, `<app-origin>/dashboard` for every origin the app is actually served from during this mission (Lovable preview, Lovable published, and `smartbusiness.teamlips.com` if that custom domain is live — see below). |
| `smartbusiness.teamlips.com` | **Requires manual verification** | SB-MIG-1.2's risk register (MIG-13) already flagged this domain's relationship to the Lovable-hosted app as unconfirmed (custom domain vs. documentation error). This mission does not resolve that open question — it is carried forward unchanged. If this domain is genuinely live and DNS-mapped to the Lovable-hosted app, it needs its own redirect-URL entry; if it is not currently live, it does not. |
| Lovable published domain (`https://governed-growth-path.lovable.app`, confirmed live in SB-MIG-1.1/1.2) | **Pending dashboard action** | Needs a redirect-URL entry for `https://governed-growth-path.lovable.app/dashboard`. |
| Lovable preview domain | **Pending dashboard action, if used for testing** | Needed only if runtime verification (Task 8) is performed against a Lovable preview URL rather than the published domain; the exact preview URL is per-build and not a fixed value to pre-register generically — needs to be added at the time of the specific test, or a wildcard/pattern approach considered if Supabase's redirect-URL matching supports one (not confirmed either way by this audit). |
| Local development URL | **Not required for dashboard registration** | A local dev server (`http://localhost:8080`) *was* used for runtime verification (Task 8, see `06-runtime-test-report.md`), including clicking the Google button — but since the app's `.env` currently points at the production Supabase project, not Team LIPS Supabase, this exercised production's provider config, not Team LIPS's. No dashboard registration of `localhost:8080` was needed for that observation, since the request failed before reaching the redirect-URL allow-list check in both cases. |

## 2. Summary

Two items have moved from "pending/unknown" to **confirmed, evidence-backed fact**: the Google provider is confirmed *not enabled* on Team LIPS Supabase, and confirmed *enabled but missing its client secret* on the current production project — obtained by directly probing each project's `/auth/v1/authorize` endpoint rather than relying on dashboard access this environment doesn't have (detail and raw responses in `06-runtime-test-report.md`). Every remaining item still genuinely requires dashboard/founder action this mission cannot perform. **This is expected, not a surprising finding**: this mission's own Task 2 instruction explicitly anticipates that "If the required dashboard configuration is not complete, code implementation may proceed, but live OAuth verification must remain blocked" — which is exactly the state this mission proceeds under.
