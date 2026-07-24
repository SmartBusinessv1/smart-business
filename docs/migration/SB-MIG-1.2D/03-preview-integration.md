Document: Lovable Preview Integration

Version: 1.0

Status: DRAFT — submitted for Mission Control review

Created By: Claude Code

Reviewed By: Mission Control (pending)

Mission: SB-MIG-1.2D

# SB-MIG-1.2D — Lovable Preview Integration (Task 3)

Per this mission's Task 3 instruction: "If a Founder dashboard action is required: Stop. Provide: exact navigation path; required value description; verification method. Do not assume completion." This document does exactly that — it stops at the discovered blocker rather than working around it.

## 1. What This Mission Confirmed Before Attempting Any Change

- The target Lovable project was correctly identified: `governed-growth-path` (display name "Smart Business"), project ID `64c2b9b1-2461-4045-9acc-19e2658b8ca2`, in workspace "Smart Business" (`LICThJCF1oqWPRq7CLLE`).
- The project has a native database connection enabled (`get_database_status`: `{"enabled":true,"stack":"supabase"}`).
- The architectural relationship between "preview" and "published" was investigated and is documented in `01-connection-audit.md` §5: editing (including environment-variable changes via the agent) is understood to affect only the live preview build, not the already-published production site, unless a separate, explicit publish action is taken — which this mission does not authorize and did not attempt.

## 2. The Attempt

A single, tightly-scoped `send_message` call was issued to the Lovable project's AI agent, instructing it to:

- Update exactly six named environment variables (`SUPABASE_URL`, `SUPABASE_PUBLISHABLE_KEY`, `SUPABASE_PROJECT_ID`, and their `VITE_`-prefixed equivalents) to Team LIPS Supabase's values.
- Explicitly not touch `SUPABASE_SERVICE_ROLE_KEY`.
- Explicitly not edit any source code, run any migration, or touch the "Connect Supabase" / Lovable Cloud backend toggle.
- Explicitly not publish or deploy anything.
- Report back whether a separate Lovable Cloud database connection exists that might take precedence over these variables, and confirm the change is preview-scoped only.

## 3. Result: Blocked

The call failed immediately, before the agent could act on any of the above:

```text
Your workspace is out of credits, so Lovable can't send this message.
Add credits or update your plan on the payments page, then retry:
https://lovable.dev/settings/billing.
```

No environment variable was changed. No code was edited. Nothing was published. The project's state is identical to before this mission began.

## 4. Exact Founder Action Required

| Item | Detail |
| --- | --- |
| **Platform** | Lovable (workspace: "Smart Business", `LICThJCF1oqWPRq7CLLE`) |
| **Navigation path** | `https://lovable.dev/settings/billing` (the exact URL returned by the platform's own error message), or Lovable dashboard → workspace settings → Billing/Credits |
| **Action required** | Add credits to the workspace, or confirm the current plan should already include sufficient credits and investigate why it reports depleted (the workspace's plan is `pro`, per `get_workspace`, so this is a credit-balance exhaustion, not a plan-tier gap) |
| **Required value description** | Not a secret — a billing/credit-balance state, visible only in Lovable's own dashboard, not obtainable via any read-only MCP tool available in this environment |
| **Verification method** | Retry an equivalent `send_message` call (or have a human make the same environment-variable change directly in the Lovable project's editor UI, which does not require AI-agent credits) and confirm it completes rather than returning the credit-exhaustion error |

## 5. An Available Alternative That Does Not Require This Mission's Tooling

Setting environment variables in a Lovable project's own settings UI (as opposed to asking the AI agent to do it via chat) is ordinarily a direct dashboard action, not an AI-agent action, and very likely does **not** consume the same credit balance that blocked `send_message` here. **A human with Lovable dashboard access can likely complete this step directly**, without waiting for a credit top-up, by navigating to the project's environment variables settings and entering the same six name/value pairs this mission attempted to set (values available in `.env`, already updated locally by this mission — see `02-environment-configuration.md`). This is offered as a practical path forward, not assumed complete, and not something this environment can perform on the founder's behalf (no equivalent read/write MCP tool for Lovable's dashboard-level environment variable settings, distinct from the AI-agent chat, is available in this session).

## 6. Summary

| Task 3 requirement | Status |
| --- | --- |
| Preview environment variables | **Blocked** — not configured, credit exhaustion |
| Supabase connection (preview) | **Blocked** — unchanged |
| Authentication initialization (preview) | Not verified — depends on the above |
| API connectivity (preview) | Not verified — depends on the above |
| Session restoration (preview) | Not verified — depends on the above |
| Founder action identified precisely, per instruction | **Yes** — §4 |
| Completion assumed | **No** — explicitly not assumed, per instruction |
