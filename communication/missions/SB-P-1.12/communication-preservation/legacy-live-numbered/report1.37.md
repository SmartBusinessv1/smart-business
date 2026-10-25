# SMART BUSINESS MISSION CONTROL — READ-ONLY EVIDENCE COLLECTION 1 HANDOVER

**Mission:** SB-P-1.12 — Read-Only Evidence Collection 1  
**Work package:** `SB-P-1.12-WP-READ-ONLY-EVIDENCE-COLLECTION-1`  
**Instruction:** `communication/live/instruction1.37.md`  
**Canonical baseline:** `main@5d5b06e764d0351edd3988713d7f2548d1cbc3f2`  
**Detailed report:** `communication/missions/SB-P-1.12/specialists/09-stage13-read-only-evidence-collection-1.md`  
**SB-MIG-1.4:** NON-EXECUTABLE  
**Implementation Authorization:** WITHHELD

## PLAN-Q-1 preserved

MC-174 Option B remains controlling: from M-13d until M-15, no non-Owner principal may hold, receive, be granted or exercise any Catalog capability.

## Evidence-status proposal

| EV | Proposed status |
|---|---|
| EV-03 | `PARTIALLY EVIDENCED` |
| EV-04 | `OPEN` |
| EV-05 | `OPEN` |
| EV-07 | `CLOSED` |
| EV-09 | `PARTIALLY EVIDENCED` |
| EV-10 | `CLOSED` |
| EV-17 | `CLOSED` |
| EV-18 | `OPEN` |
| EV-21 | `PARTIALLY EVIDENCED` |

Mission Control owns formal closure.

## Key observations

### Test target

Historical test ref `drravyyauixltoihzmwo` is positively identifiable through direct read-only provider lookup as:

- name: `smart-business-test`;
- region: `ap-south-1`;
- status: `INACTIVE`;
- PostgreSQL engine: 17.

Provider metadata is accessible, but a read-only database/migration connection timed out while the project was inactive. No deletion, transfer or ownership-change inference is made.

Therefore:

- EV-03 partial;
- EV-04 current migration ledger not obtained;
- EV-05 current test schema/grant baseline not obtained.

### Production actor census — EV-07

Read-only census over the exact 18 repository actor columns:

- 41 non-null actor references;
- 3 distinct identity UUIDs across the union;
- **0 unresolved identities against current `auth.users`**.

No historical attribution changed.

### Live FK inventory — EV-09

At production `gysgzasfcjvtrgaigfyn`:

- 37 relevant public foreign keys observed;
- 17 direct business cascades observed, matching the corrected repository count;
- 2 public-to-`auth.users` cascade edges remain:
  - `businesses.owner_id`;
  - `transactions.creator_id`.

Live FK names/actions match the refined-plan repository inventory. The eight record classes already marked UNRESOLVED remain unresolved; no lifecycle/legal semantics were invented.

### Live function state — EV-10

- All 19 Catalog command/read functions exist once each as `SECURITY DEFINER`, with dedicated Catalog executor owners, empty `search_path`, `anon EXECUTE=false`, `authenticated EXECUTE=true`.
- All 9 parser-support definers exist once each, owner `postgres`, empty `search_path`, `anon/authenticated EXECUTE=false`, `service_role EXECUTE=true`.
- `correct_transaction(uuid,text,date,text,text,numeric,text,text,text)` is live as:
  - owner `postgres`;
  - `SECURITY INVOKER`;
  - `search_path=public`;
  - effective `EXECUTE` for `anon`, `authenticated`, `service_role` and `postgres`;
  - one observed overload.

This confirms the refined-plan live hardening targets.

### G-6 effective access — EV-17

All 21 relevant public application tables observed have RLS enabled.

Material current-state findings:

- `anon` retains the full table privilege set on `businesses`, `transactions` and `transaction_correction_events`;
- Inventory and Catalog hardening removed `anon` table privileges on their relevant tables;
- `authenticated` retains broad direct privileges on legacy business/transaction/Inventory tables;
- current policies remain predominantly Owner-only and Catalog-executor scoped;
- `public` schema USAGE is effective for PUBLIC/anon/authenticated/service_role; CREATE is limited to privileged roles in the inspected set;
- `catalog_internal` USAGE is absent for PUBLIC/anon/authenticated/service_role and present for `postgres` / `supabase_admin`.

Default privileges:

- `postgres` public-schema defaults no longer grant anon table/function privileges, but still broadly grant authenticated/service_role;
- `supabase_admin` public-schema defaults still grant broad table privileges and function EXECUTE to `anon`, `authenticated`, `postgres` and `service_role`.

No grants/defaults were changed.

### Backup/PITR — EV-18

The available read-only provider connector exposes project identity/health metadata but no backup/PITR status, retention, latest recoverable point or recovery-capability fields. No backup or restore action was attempted. EV-18 remains open.

### G-7/storage — EV-21

Current production observation:

- zero storage buckets;
- no `storage.objects` or `storage.buckets` policies;
- both platform storage tables have RLS enabled;
- no Smart Business bucket/object-policy surface currently exists to classify.

Current application-level Auth-delete interaction still includes the two public CASCADE references listed above. The future `persons.auth_user_id ... RESTRICT` design is not installed, so provider behavior against that future constraint cannot be proven without test/runtime execution, which was not authorized.

## Observation time

Production database supplied exact observation timestamp:

`2026-10-01 14:50:51.2956+00`

Collection-end timestamp:

`2026-10-01 14:51:38.581593+00`

## No-mutation confirmation

No DDL/DML, migration authoring/execution, repair/backfill, mutating RPC, provider configuration, project resume/restore, schema/RLS/grant/function mutation, backup/PITR action, storage mutation, Auth mutation, application implementation, Lovable action or identity deletion occurred.

**READ-ONLY EVIDENCE COLLECTION 1 SUBMITTED — STOP FOR MISSION CONTROL DISPOSITION**
