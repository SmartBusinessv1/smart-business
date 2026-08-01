# Repository Inventory

## Baseline and Coverage

- Repository: `SmartBusinessv1/smart-business`
- Branch: `main`
- Audit baseline: `b571da4`
- Tracked files inventoried: 467
- Readable text or configuration candidates semantically scanned: 442
- Empty tracked files included in inventory but containing no semantic text: 6
- Binary or unsupported tracked files excluded from semantic scanning: 25

Coverage is complete for tracked repository paths at the baseline, subject to the exclusions below. Untracked files, Git object data, external systems, GitHub settings beyond repository evidence, and runtime/deployment state were not semantically audited.

## File Types Inventoried

| Type | Count | Treatment |
|---|---:|---|
| Markdown | 252 | Full text scan |
| TSX | 68 | Text/status scan |
| TypeScript | 37 | Text/status scan |
| Text | 36 | Full text scan |
| PNG | 23 | Binary exclusion |
| SQL | 12 | Text/status scan |
| Python | 12 | Text/status scan |
| `.gitkeep` | 6 | Empty inventory entries |
| JSON | 5 | Text/status scan |
| TOML | 2 | Text/status scan |
| YAML | 2 | Text/status scan |
| Other text/configuration | 9 | Text/status scan |
| Lock file | 1 | Generated/non-semantic exclusion |
| ICO | 1 | Binary exclusion |

## Directories Included

- Repository root instruction and configuration files
- `merge/active/`
- `Project Source file/`
- `docs/`, including engineering, implementation, migration, audits, templates, and mission blueprints
- `communication/`, including active missions, archive, governance, and live instruction
- `.github/`
- `mission-control/`
- `reports/`
- `src/`, `tests/`, `supabase/`, and `tools/` for status-like operational text

## Exclusions and Limitations

- 23 PNG files and one ICO file: binary content.
- `package-lock.json`: inventoried, but dependency vocabulary was treated as generated informational noise rather than governance status.
- Runtime services, GitHub branch settings, Supabase projects, Lovable state, deployment consoles, and credentials were not accessed.
- Search terms can appear in code identifiers and ordinary prose; classification therefore uses consolidated evidence rather than raw-match counts alone.
- No file was unreadable among the selected tracked text/configuration candidates.
