# Per-File Inventory Validation

## Results

| Check | Result |
|---|---:|
| Expected pre-existing migration-document paths | 68 |
| Registered rows | 68 |
| Unique registered paths | 68 |
| Missing paths | 0 |
| Duplicate paths | 0 |
| Unexpected paths | 0 |
| Rows with missing required fields | 0 |
| Rows with executable-now value other than `NO` | 0 |

## Family Reconciliation

| Family | Documents |
|---|---:|
| `SB-MIG-1.1` | 6 |
| `SB-MIG-1.2` | 8 |
| `SB-MIG-1.2A` | 13 |
| `SB-MIG-1.2B` | 8 |
| `SB-MIG-1.2C` | 10 |
| `SB-MIG-1.2D` | 11 |
| `SB-MIG-1.2E` | 12 |
| **Total** | **68** |

Baseline reconciliation: 68 migration documents + 12 SQL-history files + 7 additional reference/control records = 87 distinct files reviewed by Mission 1.6.

Eight Mission 1.6 containment artifacts are separately identified in the inventory and excluded from the baseline. Every registered path existed at starting commit `500be1608e6d6ed2f439c676c465855fdfa46b40`; historical document bodies remain unchanged.
