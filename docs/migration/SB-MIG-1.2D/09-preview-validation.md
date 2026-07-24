Document: Preview Deployment Validation

Version: 2.0

Status: DRAFT — submitted for Mission Control review

Created By: Claude Code

Reviewed By: Mission Control (pending)

Mission: SB-MIG-1.2D (originally blocked), resolved by SB-MIG-1.2D-A

# Preview Deployment Validation (Task 9, SB-MIG-1.2D; superseded by SB-MIG-1.2D-A)

**Update (SB-MIG-1.2D-A): this task is now complete.** SB-MIG-1.2D's blocker (Lovable AI-agent credit exhaustion) was resolved by having the founder perform the configuration directly via the Lovable dashboard UI, which does not consume AI-agent credits — exactly the alternative path SB-MIG-1.2D's `10-founder-actions.md` #2 identified. Sections 1–2 below are retained from the original SB-MIG-1.2D attempt for the record; §3 onward documents SB-MIG-1.2D-A's completed work.

## 1. Original Status (SB-MIG-1.2D): Blocked

`send_message` (the AI-agent mechanism) failed with "Your workspace is out of credits." No preview configuration was possible through that channel.

## 2. What Remained Explicitly Not Done, Even in the Resolution

- `deploy_project` / **Publish** was **never called**, at any point in either mission. This was independently and repeatedly re-confirmed by the founder throughout SB-MIG-1.2D-A's guided procedure (screenshots showing the "unpublished changes" indicator on the Publish button, never clicked).
- No production/published-site behavior was touched or tested.

## 3. Founder-Guided Configuration Path (SB-MIG-1.2D-A)

Rather than the AI-agent chat, the founder configured the project directly through Lovable's own dashboard UI, guided step by step:

1. **Investigated Lovable's actual configuration model** before touching anything: the project's "Connectors" panel showed zero external connections (ruling out the "Supabase connector" pathway), while the "Cloud" panel showed a connected database with real user signups — correctly identified as the live production backend and **explicitly not touched**.
2. **Attempted the "Secrets" panel** for `VITE_SUPABASE_URL` — Lovable's own UI rejected this with an authoritative, first-party explanation: `VITE_`-prefixed variables must be defined in a `.env` file, not Secrets.
3. **Located and used Lovable's Code view**, which exposes the actual synced repository, including `.env` directly. Before editing, independently verified via Lovable's own published documentation (fetched fresh, not assumed) that "changes are not automatically published and pushed live" — every edit, regardless of method, stays in the project workspace until an explicit Publish action, which never occurred.
4. The founder replaced the project's `.env` file (previously holding the original production Supabase project's values) with the exact contents of this repository's own local `.env` (already updated to Team LIPS Supabase values by SB-MIG-1.2D) — verified matching line-by-line via screenshot before proceeding.
5. Confirmed the edit registered correctly: the Publish button displayed the "unpublished changes" indicator described in Lovable's docs, and the founder was explicitly instructed not to click it.

## 4. Verification Checklist — All Performed and Passed

| Check | Result |
| --- | --- |
| Preview loads | **Verified** — `https://preview--governed-growth-path.lovable.app` loads correctly |
| Preview connects to Team LIPS Supabase | **Verified, directly** — browser DevTools Network tab, `Request URL: https://gysgzasfcjvtrgaigfyn.supabase.co/auth/v1/token?grant_type=password`, `Access-Control-Allow-Origin: https://preview--governed-growth-path.lovable.app` — unambiguous proof the live preview is calling Team LIPS Supabase |
| Authentication behaves correctly (preview) | **Verified** — invalid-credential rejection showed a real Supabase error ("Invalid login credentials"), not a Lovable-broker error; the Google button rendered correctly |
| Signup | **Verified** — real signup against Team LIPS Supabase, correct "check your email to confirm" message |
| Signin (after confirming the test account via a scoped SQL update) | **Verified** — reached `/dashboard` |
| Dashboard / business workspace loads | **Verified** — first-time-setup flow rendered, business creation form worked, workspace correctly displayed the saved business identity afterward |
| Session persistence (refresh) | **Verified** — remained signed in after a full page refresh |
| Logout | **Verified** — signed out correctly |
| Protected route after logout | **Verified** — redirected to `/auth` |
| Basic data operation (inventory item creation) | **Verified** — created via the real UI, independently re-confirmed via direct SQL query against Team LIPS Supabase (`business_name`, `item_name`, and owning user's email all matched) |

Every check in this mission's original Task 4 runtime-verification list, and this mission's own Task 9 checklist, has now been performed against the **actual Lovable preview** — not a local-dev substitute.

## 5. Summary

**Task 9 is complete.** The Lovable preview (`https://preview--governed-growth-path.lovable.app`) is genuinely, verifiably connected to Team LIPS Supabase, confirmed at both the network-request level and the database level. No production/published-site action was taken at any point. All synthetic test data created during this validation has been removed (`06-test-data-cleanup.md` covers SB-MIG-1.2D's cleanup; SB-MIG-1.2D-A's own additional test data — one auth user, one business, one inventory item — was likewise fully removed, verified via a zero-row count across all 7 tables immediately after).
