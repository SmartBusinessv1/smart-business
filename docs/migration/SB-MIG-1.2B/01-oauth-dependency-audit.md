Document: OAuth Dependency Audit

Version: 1.0

Status: DRAFT — submitted for Mission Control review

Created By: Claude Code

Reviewed By: Mission Control (pending)

Mission: SB-MIG-1.2B

# SB-MIG-1.2B — OAuth Dependency Audit (Task 1)

Repository-wide search for `lovable\.auth`, `signInWithOAuth`, `cloud-auth-js`, `@/integrations/lovable`, `oauth`, and `callback` (case-insensitive), run against `src/` before any code was changed.

## 1. Search Results

| Pattern | Matching files |
| --- | --- |
| `lovable\.auth` | `src/routes/auth.tsx` |
| `signInWithOAuth` | `src/routes/auth.tsx`, `src/integrations/lovable/index.ts` |
| `cloud-auth-js` | `src/integrations/lovable/index.ts`, `package.json` |
| `@/integrations/lovable` | `src/routes/auth.tsx`, `src/integrations/lovable/index.ts` (self-reference) |
| `oauth` (case-insensitive) | Same set as above — no additional files |
| `callback` (case-insensitive) | `src/routes/auth.tsx` (note below), `src/integrations/lovable/index.ts` (note below), `src/components/ui/sidebar.tsx`, `src/components/ui/carousel.tsx` |

Note: `src/routes/auth.tsx` and `src/integrations/lovable/index.ts` are confirmed real OAuth-relevant matches; the `sidebar.tsx`/`carousel.tsx` matches were verified as **false positives** — both only match the React `useCallback` hook name, not anything OAuth- or callback-URL-related. Confirmed by a targeted follow-up search restricted to the actual OAuth-pattern set (`lovable\.auth|signInWithOAuth|cloud-auth-js|@/integrations/lovable|oauth`) against each file individually: zero matches in either.

**Conclusion: exactly two files in the entire repository are relevant to this mission — `src/routes/auth.tsx` and `src/integrations/lovable/index.ts`.** No other file requires inspection or change.

## 2. Per-File Disposition

| File | Requires a change? | Detail |
| --- | --- | --- |
| `src/routes/auth.tsx` | **Yes** | The sole call site: `handleGoogle()` (lines 101–120) calls `lovable.auth.signInWithOAuth("google", { redirect_uri: window.location.origin })`. This is the only place in the application where Google sign-in is initiated. |
| `src/integrations/lovable/index.ts` | **Not modified directly** (auto-generated, "Do not modify it") | Becomes unused once `auth.tsx` no longer imports `lovable` — evaluated for removal in Task 6, not edited in place. |

## 3. Supabase Client Configuration (verified, no change needed)

`src/integrations/supabase/client.ts` — the singleton browser client used throughout the app, including by the new native OAuth call:

- `auth.persistSession: true`, `auth.autoRefreshToken: true` — both already correct for OAuth session persistence.
- `auth.storage` — `localStorage` in the browser, `undefined` during SSR — standard, no change needed.
- `auth.detectSessionInUrl` — **not explicitly set**, meaning it uses supabase-js's default of `true`. This is exactly the setting native OAuth's redirect-return flow depends on (the client auto-detects and exchanges the auth code/token embedded in the return URL). **No change needed — the client is already correctly configured for native OAuth without any modification.**

## 4. Callback / Return-Route Behavior (verified, no new route needed)

- `src/routes/_authenticated/route.tsx` — the protected-route guard. Calls `supabase.auth.getUser()` in `beforeLoad`, which internally awaits the Supabase client's session-initialization (including any pending URL-based session exchange) before resolving. Because native `signInWithOAuth` always triggers a full browser page-load on return (not an SPA-internal transition), this guard runs fresh on that page load and correctly sees the newly-established session.
- `src/hooks/use-auth.tsx` — subscribes to `supabase.auth.onAuthStateChange` and calls `supabase.auth.getSession()`; both already correctly react to a native OAuth sign-in with zero modification, since they don't care *how* the session was established.
- `src/routes/auth.tsx`'s own existing `useEffect` (lines 42–46) already redirects an already-signed-in user away from `/auth` to `/dashboard` — this logic is unaffected by the OAuth-mechanism change and needs no modification.

**Conclusion: no dedicated OAuth callback route is required.** The existing client configuration (§3) and existing route/session-handling code (§4) already correctly support native Supabase OAuth's redirect-based flow without any new file or route.

## 5. Session-Restoration Behavior (verified, no change needed)

Confirmed via code inspection only (not yet runtime-tested — that is Task 8): `onAuthStateChange` + `getSession()` in `use-auth.tsx` is the single source of truth the rest of the app already relies on for session state, regardless of which sign-in method produced that session. This means the *type* of change needed here is exactly what the mission's Locked Decisions anticipated: a change contained entirely to `handleGoogle()`'s internals, touching nothing about how the rest of the app knows a user is signed in.

## 6. Installed Package Version (relevant to Task 3's exact call shape)

`package.json`: `"@supabase/supabase-js": "^2.110.0"`. In this major version, `supabase.auth.signInWithOAuth({ provider, options })` returns `{ data: { provider, url }, error }`, and — when running in a browser — the client library itself performs the redirect (via `window.location`) as a side effect of the call; the caller does not need to manually navigate using the returned `url`. This confirms the target implementation only needs to check `error`, matching the mission's own specified target code shape.
