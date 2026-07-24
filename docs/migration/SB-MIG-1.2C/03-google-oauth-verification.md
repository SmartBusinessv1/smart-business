Document: Google OAuth Infrastructure Verification

Version: 1.0

Status: DRAFT — submitted for Mission Control review

Created By: Claude Code

Reviewed By: Mission Control (pending)

Mission: SB-MIG-1.2C

# SB-MIG-1.2C — Google OAuth Infrastructure Verification (Task 3)

No credential value is exposed anywhere in this document. This report supersedes the "Pending"/"Requires manual verification" hedges in SB-MIG-1.2A's `03-google-oauth-parity-report.md` and SB-MIG-1.2B's `03-oauth-configuration-preconditions.md` with a fresh, re-confirmed empirical check performed for this mission (§1), plus the classification this mission's Task 3 specifically requires.

## 1. Fresh Empirical Check

Supabase's `/auth/v1/authorize` endpoint reports its own provider-configuration state truthfully on failure, without requiring dashboard access — this technique was established in SB-MIG-1.2B and is re-run here to confirm the state has not changed:

```text
curl "https://gysgzasfcjvtrgaigfyn.supabase.co/auth/v1/authorize?provider=google&redirect_to=<app-origin>/dashboard"
→ HTTP 400
→ {"code":400,"error_code":"validation_failed","msg":"Unsupported provider: provider is not enabled"}
```

**Unchanged since SB-MIG-1.2B: the Google provider is confirmed not enabled on Team LIPS Supabase.**

## 2. Classification

| Item | Classification | Detail |
| --- | --- | --- |
| Google provider enabled on Team LIPS Supabase | **Blocked** | Confirmed not enabled, §1. This is the toggle-level gate — every item below it is unreachable until this is turned on. |
| Google OAuth client ID configured | **Dashboard Configuration Required** | Cannot be independently observed while the provider itself is off (§1); becomes checkable once the provider is enabled. |
| Google OAuth client secret configured | **Founder Action Required** | Requires a human with Google Cloud Console access to obtain/confirm a client secret, and Team LIPS Supabase dashboard access to enter it. Neither is available to this environment. |
| Callback URL registered in Google Cloud Console | **Founder Action Required** | The URL itself is knowable by convention (`https://gysgzasfcjvtrgaigfyn.supabase.co/auth/v1/callback`), but registering it requires Google Cloud Console access this environment does not have. |
| Site URL (Team LIPS Supabase → Authentication → URL Configuration) | **Dashboard Configuration Required** | Per this mission's Locked Decision, the application remains hosted through Lovable. The Site URL that matters is whichever Lovable-served origin the app is actually reachable at — see `06-environment-verification.md`. |
| Redirect URL allow-list | **Dashboard Configuration Required** | Must include `<app-origin>/dashboard` for every origin the app is genuinely served from (Lovable preview, Lovable published, and `smartbusiness.teamlips.com` if confirmed live). |
| Production domain (Lovable published app, `https://governed-growth-path.lovable.app`) | **Dashboard Configuration Required** | Needs a redirect-URL entry once the provider is enabled. |
| Preview domain (Lovable preview) | **Dashboard Configuration Required, if used for testing** | Preview URLs are per-build; needs an entry at the time of a specific verification pass, not a fixed pre-registration. |
| `localhost` | **Verified — not required** | This application's native-OAuth code (`src/routes/auth.tsx`, since SB-MIG-1.2B) computes `redirectTo` from `window.location.origin` at click-time, so no origin-specific code branch exists. Local-origin dashboard registration is only needed if a human specifically wants to complete a live local-dev OAuth test; not required for infrastructure readiness itself. |

## 3. Summary

Every item beyond "is the provider toggle on" is gated behind that single toggle, which is confirmed off. This mission's own Task 3 instruction anticipates exactly this outcome ("classify every item: Verified / Founder Action Required / Dashboard Configuration Required / Blocked") — the classification above is not a partial result, it is the complete, honest state: **one Blocked item gates six Dashboard-Configuration-Required items and two Founder-Action-Required items**, with one item (`localhost`) genuinely not required at all. See `08-founder-actions.md` for the concrete step sequence to resolve this.
