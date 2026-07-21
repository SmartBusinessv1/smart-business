Document: Lovable Build Prompt

Version: 1.1

Status: Draft — pending Mission Control approval

Created By: Claude

Reviewed By: Pending

Mission: SB-P-1.10

# SB-P-1.10 — Inventory Foundation — Lovable Build Prompt

## 1. Mission Metadata

| Field | Value |
| --- | --- |
| Mission ID | SB-P-1.10 |
| Mission Name | Inventory Foundation |
| Builder | Lovable |
| Repository | SmartBusinessv1/smart-business |
| Reporting Room | 02_Claude_Engineering |

## 2. Locked Authority

The following documents are locked and read-only for this implementation:

- `docs/phase-1-mission-blueprint/active/SB-P-1.10.md` — Product Blueprint, Version 1.3, LOCKED.
- `docs/phase-1-mission-blueprint/implementation/SB-P-1.10-EIS.md` — Engineering Implementation Specification, Version 1.2, LOCKED.
- `docs/implementation/SB-P-1.10/engineering-contract.md` — Engineering Contract, Version 1.3, LOCKED.

The Engineering Contract is the primary builder-facing document for this implementation. Build against it directly. Where the Engineering Contract is silent or ambiguous, the Product Blueprint and Engineering Implementation Specification prevail — do not resolve ambiguity by inference; consult the locked documents or pause and escalate (Section 10).

## 3. Repository Scope

**Authorized to modify** (once implementation is separately authorized by Mission Control):

- Repository implementation changes required to satisfy all applicable obligations in Engineering Contract Sections 6–16.
- Supabase migrations required to introduce the schema in Engineering Contract Section 8 and Section 9.
- Automated tests required by Engineering Contract Section 16.
- `docs/implementation/SB-P-1.10/evidence/` — implementation evidence only, per Engineering Contract Section 20.

**Prohibited from modification:**

- `docs/phase-1-mission-blueprint/active/SB-P-1.10.md`
- `docs/phase-1-mission-blueprint/implementation/SB-P-1.10-EIS.md`
- `docs/implementation/SB-P-1.10/engineering-contract.md`
- `docs/implementation/SB-P-1.10/verification-checklist.md`
- `docs/implementation/SB-P-1.10/completion-report.md` (until implementation completion, per Engineering Contract Section 21)

## 4. Implementation Scope

Implement exactly what the Engineering Contract authorizes — no more, no less:

- **Backend** — per Engineering Contract Section 6.
- **Frontend** — per Engineering Contract Section 7.
- **Database** — per Engineering Contract Section 8.
- **Migrations** — per Engineering Contract Section 9.
- **Permissions and RLS** — per Engineering Contract Section 10.
- **Shared movement-path obligations** — per Engineering Contract Section 11.
- **Validation** — per Engineering Contract Section 12.
- **Concurrency** — per Engineering Contract Section 13.
- **Performance** — per Engineering Contract Section 14.
- **Observability** — per Engineering Contract Section 15.
- **Testing** — per Engineering Contract Section 16.

This prompt does not restate the detailed rules within each category. Build against the cited Engineering Contract section directly.

## 5. Engineering Execution Rules

Lovable shall:

- Implement exactly the Engineering Contract — no scope beyond what Sections 5–16 authorize.
- Preserve the existing repository architecture.
- Preserve existing naming conventions.
- Preserve existing authentication.
- Preserve the existing business workspace.
- Preserve existing navigation.
- Preserve UI consistency with prior missions (SB-P-1.7–1.9), per Engineering Contract Section 7.
- Avoid unrelated refactoring.
- Avoid redesign of any kind.
- Avoid architectural changes.

## 6. Repository Rules

Lovable shall:

- Implement the smallest safe change that satisfies the Engineering Contract.
- Practice repository-first development: read existing code before writing new code.
- Reuse existing patterns established by prior missions rather than inventing new ones.
- Introduce no duplicate code.
- Introduce no dead code.
- Introduce no temporary workarounds.
- Introduce no placeholder implementation.
- Introduce no bypasses of validation, permission, RLS, or the shared movement-creation operation.

## 7. Prohibited Work

Lovable shall not:

- Change the Product Blueprint.
- Change the Engineering Implementation Specification.
- Change the Engineering Contract.
- Change business rules.
- Change UX.
- Change permissions.
- Introduce new features beyond the Engineering Contract's authorized scope.
- Implement any Build Later item (e.g., a maintained current-stock projection ahead of the evidence gate in Engineering Contract Section 14).
- Perform speculative optimization.
- Perform architectural redesign.
- Proceed on undocumented assumptions.

## 8. Required Outputs

Implementation must produce:

- Repository implementation changes satisfying all applicable obligations in Engineering Contract Sections 6–16.
- Supabase migration(s) satisfying Engineering Contract Section 9.
- Frontend implementation satisfying Engineering Contract Section 7.
- Backend implementation satisfying Engineering Contract Section 6.
- Automated tests satisfying Engineering Contract Section 16.
- Verification evidence satisfying Engineering Contract Section 20, stored under `docs/implementation/SB-P-1.10/evidence/`.

## 9. Completion Requirements

Implementation is not complete until:

- `docs/implementation/SB-P-1.10/verification-checklist.md` is executed and passed.
- `docs/implementation/SB-P-1.10/completion-report.md` is completed per Engineering Contract Section 21.
- Evidence is recorded under `docs/implementation/SB-P-1.10/evidence/` per Engineering Contract Section 20.

This prompt does not duplicate the contents of the verification checklist or the completion report. Refer to those documents directly.

## 10. Final Builder Reminder

- The Engineering Contract is authoritative for this implementation.
- Where ambiguity or conflict exists:
  - Pause implementation.
  - Consult the locked Product Blueprint and Engineering Implementation Specification.
  - Request Mission Control clarification if the ambiguity cannot be resolved from the locked documents alone.
- No guessing.
