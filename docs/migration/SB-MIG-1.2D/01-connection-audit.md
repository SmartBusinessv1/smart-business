Document: Current Connection Audit

Version: 1.0

Status: DRAFT — submitted for Mission Control review

Created By: Claude Code

Reviewed By: Mission Control (pending)

Mission: SB-MIG-1.2D

# SB-MIG-1.2D — Current Connection Audit (Task 1)

## 1. Supabase Client Configuration

`src/integrations/supabase/client.ts` (browser) and `src/integrations/supabase/auth-middleware.ts` / `src/integrations/supabase/client.server.ts` (server) all resolve their target Supabase project purely from environment variables (`VITE_SUPABASE_URL`/`SUPABASE_URL`, `VITE_SUPABASE_PUBLISHABLE_KEY`/`SUPABASE_PUBLISHABLE_KEY`) — no hardcoded project reference exists anywhere in `src/`. This means the application's backend target is entirely determined by whatever environment configuration is in effect at build/run time, with zero code change required to repoint it. Unchanged since SB-MIG-1.2B/1.2C's own findings; re-confirmed here.

## 2. Environment-Variable Resolution — Before This Mission

| Environment | Mechanism | Target (before) |
| --- | --- | --- |
| Local development | Tracked `.env` at repo root | **Current production Supabase project** (`wwgqnshcgbukqczqblsm`) |
| Lovable preview | Lovable's own project configuration (see §5) | Unconfirmed directly, but the Lovable project has its own "Database" enabled (`get_database_status`: `{"enabled":true,"stack":"supabase"}`) — almost certainly the same current-production project, since this is the app's long-standing default |
| Lovable published (`https://governed-growth-path.lovable.app`) | Same mechanism as preview | Same as preview — this is the live, real application real users interact with |

## 3. Target Backend After This Mission

| Environment | Target (after) | Status |
| --- | --- | --- |
| Local development | Team LIPS Supabase (`gysgzasfcjvtrgaigfyn`) | **Changed and verified** (`02-environment-configuration.md`) |
| Lovable preview | Team LIPS Supabase (`gysgzasfcjvtrgaigfyn`) | **Not changed — blocked** (`03-preview-integration.md`) |
| Lovable published | **Unchanged — current production project** | Correctly untouched, per this mission's explicit boundary |

## 4. Files Requiring Modification

Exactly one file: **`.env`** (repo root, tracked). Six variable *values* changed (`SUPABASE_URL`, `SUPABASE_PUBLISHABLE_KEY`, `SUPABASE_PROJECT_ID`, and their `VITE_`-prefixed equivalents); zero variable *names* added or removed; `SUPABASE_SERVICE_ROLE_KEY` was not present before and is not present after. No source code (`.ts`/`.tsx`) file requires any change — this is purely a configuration repoint, exactly matching this mission's Locked Decision framing and every prior mission's finding that the environment-variable footprint is small, stable, and fully enumerated (`SB-MIG-1.2A/06-environment-cutover-map.md`, `SB-MIG-1.2C/06-environment-verification.md`).

## 5. A Critical Architectural Finding: Lovable's Preview/Published Relationship

Before touching anything on the Lovable side, this mission investigated how Lovable's "preview" and "published" states actually relate, since getting this wrong risks violating the mission's hardest boundary ("Do NOT reconnect the public production application"). Findings, in order of investigation:

1. `list_projects`/`get_project` confirm this Lovable project (`64c2b9b1-2461-4045-9acc-19e2658b8ca2`) has **two distinct URLs**: a `preview_url` (`https://id-preview--...lovable.app`) and a separately published `url` (`https://governed-growth-path.lovable.app`, `is_published: true`, `publish_visibility: "public"`).
2. `get_database_status` confirms this Lovable project has Lovable's own **native "Database" (Supabase) connection enabled** (`{"enabled":true,"stack":"supabase"}`) — a seamless, project-wide integration distinct from the repository's own `.env`-based configuration. `list_connectors` confirms a separate "Supabase" seamless connector also exists (for connecting an *external* Supabase project) alongside "Lovable Cloud"'s own built-in backend.
3. The `send_message` tool's own documentation states explicitly: **"The `preview_url` is rebuilt once the agent finishes"** — not the published URL. Combined with `deploy_project` existing as a separate, distinct MCP action for actually publishing, this confirms Lovable's architecture treats "editing/configuring the project" and "publishing it live" as two genuinely separate steps — editing (including environment-variable changes made through the agent) affects only the live preview/editor state; the already-published site remains frozen at its last published snapshot until an explicit publish action is taken.

**Conclusion:** it is architecturally possible to update this Lovable project's environment configuration for **preview only**, without affecting the already-published production site, *as long as `deploy_project` (or any equivalent publish action) is never called*. This mission does not call it. This finding is stated with the evidence behind it, precisely because getting it wrong would be a serious boundary violation — Mission Control should independently confirm this understanding is correct if there is any doubt.

## 6. Lovable Integration Configuration — Blocking Discovery

Attempting to act on the above (Task 3) surfaced a separate, unrelated blocker: **the Lovable workspace is out of credits.** The `send_message` call required to configure the Lovable project's environment variables failed immediately with: `"Your workspace is out of credits, so Lovable can't send this message."` This is a billing/founder-action blocker, not a technical or architectural one — full detail in `03-preview-integration.md` and `10-founder-actions.md`.

## 7. Summary

| Item | Finding |
| --- | --- |
| Current backend target (local + Lovable, before) | Current production Supabase project (`wwgqnshcgbukqczqblsm`) |
| Target backend after this mission | Team LIPS Supabase (`gysgzasfcjvtrgaigfyn`) — local: achieved; Lovable preview: blocked |
| Files requiring modification | `.env` only — zero source-code changes |
| Lovable preview/published isolation | Architecturally confirmed separate (editing ≠ publishing); no code path in this mission triggers a publish |
| Blocking discovery | Lovable workspace out of credits — prevents any agent-mediated preview configuration this mission |
