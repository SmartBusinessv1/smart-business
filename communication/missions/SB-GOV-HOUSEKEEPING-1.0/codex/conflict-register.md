# Operational Conflict Register

## CF-01 — Source 18 Authority Ambiguity

- Affected: `merge/active/18_SB-P_Mission_Lifecycle_and_Delivery_Framework.md`, `merge/active/README.md`, SB-GOV-LIFECYCLE-1.0 records
- Competing statements: file is located under `merge/active/` but declares Draft/not published; active README index stops at Source 17 and omits Source 18
- Governing authority: Founder and Mission Control approval records; active README until amended
- Impact: teams may either apply an unapproved lifecycle or overlook it entirely
- Severity: High
- Sequence: decide Source 18 → update metadata/index through a corrective mission → reconcile mission records
- Pause: pause reliance on Source 18 as authority; do not pause unrelated development

## CF-02 — ChatGPT Workflow Metadata vs Stage B Activation

- Affected: ChatGPT EOS workflow, `AGENTS.md`, Protocol 1.0, Stage B commit `9c5baf1`
- Competing statements: workflow metadata says Draft/Founder Pending while higher-authority records say Stage B active
- Governing authority: Founder/Mission Control Stage A/Stage B activation and `AGENTS.md`
- Impact: Codex Git authority may be misread
- Severity: High
- Sequence: metadata-only corrective mission with evidence references
- Pause: no; follow active higher authority

## CF-03 — Claude Workflow Metadata vs Stage B Activation

- Affected: Claude EOS workflow and the same active controls
- Competing statements and impact: identical to CF-02 for Claude Code
- Governing authority: Founder/Mission Control activation and `AGENTS.md`
- Severity: High
- Sequence: correct alongside CF-02
- Pause: no; follow active higher authority

## CF-04 — Lifecycle Mission Publication State Is Stale

- Affected: `communication/missions/SB-GOV-LIFECYCLE-1.0/README.md`, handover log, published commits
- Competing statements: Founder commit/push and blanket AI prohibition are described as pending although publication occurred and controlled mission Git authority is active
- Governing authority: repository history, current `AGENTS.md`, Protocol 1.0
- Impact: incorrect next action and ownership
- Severity: Medium
- Sequence: reconcile mission record only after Source 18 disposition
- Pause: no

## CF-05 — Superseded Communication Drafts Remain Active-Located

- Affected: SB-GOV-COMMS-1.0, SB-GOV-COMMS-1.1, archived SB-GOV-COMMS-1.2
- Competing statements: 1.0/1.1 remain Draft/review-required under active missions while 1.2 records approved activation and closure
- Governing authority: Protocol 1.0 and SB-GOV-COMMS-1.2 closure record
- Impact: obsolete amendments may be mistaken for pending current work
- Severity: Medium
- Sequence: containment/archive mission preserving history and links
- Pause: no

## CF-06 — Legacy Project Source Containment Gap

- Affected: `Project Source file/`, active governance README, Founder archive decision in mission memory
- Competing statements: legacy set is formally superseded/non-governing, but remains under its old operational-looking path without the planned archive README
- Governing authority: Founder legacy archive decision and `merge/active/`
- Impact: broad searches or AI retrieval may treat legacy text as current authority
- Severity: High
- Sequence: execute the separately Founder-authorized rename/README/link-verification archive mission
- Pause: no repository-wide pause; prohibit use of legacy files as authority

## Reconciliation Update

- CF-01: RESOLVED by explicit Founder approval and active-index activation through `SB-GOV-HOUSEKEEPING-1.2` on 2026-08-01. The earlier containment finding remains historically accurate.
- CF-02: Corrected to active Stage B metadata; Mission Control verification remains required.
- CF-03: Corrected to active Stage B metadata; Mission Control verification remains required.
