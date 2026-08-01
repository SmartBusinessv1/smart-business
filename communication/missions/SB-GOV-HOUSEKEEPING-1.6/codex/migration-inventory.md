# Complete Migration Inventory

## Counts and Coverage

- Existing documents under `docs/migration/**`: 68
- Documentation-family directories: 7
- SQL files under `supabase/migrations/**`: 12
- Additional tracked migration reference/control records reviewed: 7
- Distinct migration-related tracked files reviewed: 87
- Discovered mission identifiers: `SB-MIG-1.0`, `1.1`, `1.2`, `1.2A`, `1.2B`, `1.2C`, `1.2D`, `1.2D-A`, `1.2E`, `1.2E-A`, `1.2E-B`, `1.2E-C`, `1.2F`, `1.2F-A`, and proposed `1.3`

## Documentation Families

| Directory | Existing documents | Family identifiers represented | Current classification | Executable now |
|---|---:|---|---|---|
| `docs/migration/SB-MIG-1.1/` | 6 | `SB-MIG-1.1` | SUPERSEDED — HISTORICAL EVIDENCE, NOT EXECUTABLE | NO |
| `docs/migration/SB-MIG-1.2/` | 8 | `SB-MIG-1.2`, proposed `SB-MIG-1.3` | SUPERSEDED; `1.3` proposal non-executable | NO |
| `docs/migration/SB-MIG-1.2A/` | 13 | `SB-MIG-1.2A`, proposed `SB-MIG-1.3` | SUPERSEDED; `1.3` proposal non-executable | NO |
| `docs/migration/SB-MIG-1.2B/` | 8 | `SB-MIG-1.2B` | COMPLETED — HISTORICAL EVIDENCE, NOT EXECUTABLE | NO |
| `docs/migration/SB-MIG-1.2C/` | 10 | `SB-MIG-1.2C`, draft `SB-MIG-1.3` authorization candidate | SUPERSEDED; `1.3` proposal non-executable | NO |
| `docs/migration/SB-MIG-1.2D/` | 11 | `SB-MIG-1.2D`, `SB-MIG-1.2D-A` | COMPLETED — HISTORICAL EVIDENCE, NOT EXECUTABLE | NO |
| `docs/migration/SB-MIG-1.2E/` | 12 | `SB-MIG-1.2E`, `1.2E-A`, `1.2E-B`, `1.2E-C` | COMPLETED — HISTORICAL EVIDENCE, NOT EXECUTABLE | NO |

The exact 68 pre-existing paths are the tracked Markdown files within these seven directories. Each is preserved unchanged; only a new family `README.md` was added.

## SQL History

The following 12 tracked files were inspected as repository history and left unchanged:

- `supabase/migrations/20260708210504_0a471e2c-a76c-4178-8aa2-79a3744e8bd2.sql`
- `supabase/migrations/20260719102137_55a1dac6-b26a-47e6-aed3-305b9b20636b.sql`
- `supabase/migrations/20260719140000_f24b4d69-127e-4547-9fff-8ed9f31cc8fe.sql`
- `supabase/migrations/20260720142204_3786b8a1-e72a-4ae4-88b3-837b76ce1bf9.sql`
- `supabase/migrations/20260720142248_97de5be2-ef9f-4283-9318-9eb9f9a6cca1.sql`
- `supabase/migrations/20260721205714_c3b38f2f-5f12-431d-80c2-9b14394cbc20.sql`
- `supabase/migrations/20260723200622_c91f9e51-70ba-4b7c-b952-9e2ac9b4b0a8.sql`
- `supabase/migrations/20260723200718_f9801e9d-3f18-4827-b3db-196e6a11af8d.sql`
- `supabase/migrations/20260723200952_78716769-3b76-4595-a46c-3a6158ebba0c.sql`
- `supabase/migrations/20260724085729_272cf407-5ca1-4433-b6e1-f39f9e44c13b.sql`
- `supabase/migrations/20260724170000_6a0f8a74-e7aa-4200-b54b-3fd57a7c9c62.sql`
- `supabase/migrations/20260727000000_reconcile_default_grants.sql`

## Additional Reference and Control Records

- `.env.test` and `.env.test.local.example`: isolated-test references; not authority.
- `communication/archive/SB-COMM-TEST-1.0/report.md`: archived consistency evidence.
- `communication/live/instruction1.6.md`: current classification instruction, not migration execution authority.
- `docs/incidents/SB-INC-2026-001-production-schema-loss.md`: incident/recovery evidence.
- `mission-control/mission_memory.md`: current accepted production state.
- `scripts/supabase-cli.mjs`: guarded historical operational control; not self-authorizing.

## Stale Metadata

Families `1.1` through `1.2D` contain Draft headers even where later in-place completion evidence exists. These headers are preserved as chronology. Family wrappers establish present status without rewriting historical bodies.
