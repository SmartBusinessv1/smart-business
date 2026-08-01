# AI Operational Source Map

## Canonical Authority Intake

Every AI begins at `merge/active/README.md`, then reads the foundational and mission-relevant canonical sources named by Mission Control. Selective intake is required; not every actor must read every canonical source for every task.

## Operational Controls Outside the 20-File Count

1. Repository identity and universal instructions: `README.md`, `AGENTS.md`.
2. Actor-specific instructions: `CHATGPT.md`, `CLAUDE.md`.
3. Communication and handover: `communication/AI_Communication_and_Handover_Protocol.md`, `communication/README.md`.
4. Current state: `mission-control/mission_memory.md`.
5. Protection state: `communication/governance/branch-protection-verification.md`.
6. Actor EOS: the active ChatGPT or Claude GitHub artifact workflow.
7. Live exchange: `communication/live/**`.
8. Active mission evidence: `communication/missions/[ACTIVE-MISSION-ID]/**`.

## Role-Specific Intake

- **Codex / ChatGPT:** canonical index and relevant sources → `AGENTS.md` and `CHATGPT.md` → communication protocol → active mission and preceding report → relevant code/evidence → ChatGPT EOS.
- **Claude Code:** canonical index and relevant sources → `AGENTS.md` and `CLAUDE.md` → communication protocol → active mission and preceding report → relevant code/evidence → Claude EOS.
- **Other specialist AI:** canonical index and relevant sources → universal and applicable platform instructions → communication protocol → active mission and preceding report → only relevant implementation evidence.

Mission Control identifies applicable source inheritance in every mission. Tool access and operational instructions do not create project-source authority.
