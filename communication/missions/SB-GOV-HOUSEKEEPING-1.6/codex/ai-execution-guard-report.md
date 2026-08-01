# AI Execution Guard Report

Default-deny migration guards were added to the current AI instruction surfaces:

- `AGENTS.md`
- `CHATGPT.md`
- `CLAUDE.md`
- repository `README.md`

The guards require a current, explicit, human-authorized migration mission before any migration execution. Drafts, proposals, runbooks, historical completion reports, and SQL files do not grant execution authority. When authority is absent or ambiguous, AI must stop and escalate.

No existing protected Git, security, governance, or approval rule was weakened.
