# SB-P-1.8E — Phase 3C Evidence Appendix

Evidence compilation only. No implementation, migration, type regeneration, or build changes performed. All read-only queries against the attached Lovable Cloud backend (project ref `wwgqnshcgbukqczqblsm`).

---

## 1. Preflight verification

Query: `SELECT to_regclass('public.businesses'), to_regclass('public.transactions'), to_regproc('public.update_updated_at_column');`

| Object | Pre-migration expected | Post-migration observed |
|---|---|---|
| `public.businesses` | present | `businesses` ✅ |
| `public.update_updated_at_column()` | present | `update_updated_at_column` ✅ |
| `public.transactions` | absent → created | `transactions` ✅ (present now; was `NULL` at preflight per Phase 3C log) |

Note: the pre-migration "absent" state was captured live during Phase 3C execution and is not re-derivable now. Present-state confirmation is what this appendix captures.

---

## 2. Table structure — `public.transactions`

| Column | Type | Nullable | Default |
|---|---|---|---|
| id | uuid | NO | `gen_random_uuid()` |
| business_id | uuid | NO | — |
| creator_id | uuid | NO | — |
| transaction_type | text | NO | — |
| transaction_date | date | NO | `CURRENT_DATE` |
| party_name | text | NO | — |
| description | text | NO | — |
| amount | numeric | NO | — |
| payment_method | text | NO | — |
| notes | text | YES | — |
| created_at | timestamptz | NO | `now()` |
| updated_at | timestamptz | NO | `now()` |

Check constraints:
- `amount > 0`
- `length(btrim(description)) > 0`
- `length(btrim(party_name)) > 0`
- `transaction_type IN ('sale','purchase')`
- `payment_method IN ('cash','upi','card','bank_transfer','credit','other')`

---

## 3. Foreign keys

- `transactions_business_id_fkey`: `business_id → businesses(id) ON DELETE CASCADE`
- `transactions_creator_id_fkey`: `creator_id → auth.users(id) ON DELETE CASCADE`

---

## 4. Indexes

- `transactions_pkey` — UNIQUE btree `(id)`
- `idx_transactions_business_timeline` — btree `(business_id, transaction_date DESC, created_at DESC)`
- `idx_transactions_business_type_date` — btree `(business_id, transaction_type, transaction_date)`

---

## 5. Trigger

```
CREATE TRIGGER update_transactions_updated_at
  BEFORE UPDATE ON public.transactions
  FOR EACH ROW EXECUTE FUNCTION update_updated_at_column()
```

Reuses the pre-existing `public.update_updated_at_column()` — no new function created.

---

## 6. Row Level Security

| Table | `relrowsecurity` | `relforcerowsecurity` |
|---|---|---|
| public.transactions | **true** ✅ | false |
| public.businesses | true | false |

---

## 7. Policies on `public.transactions`

- **`Owners can view their business transactions`** — `FOR SELECT` (cmd `r`)
  `USING`: `business_id IN (SELECT id FROM businesses WHERE owner_id = auth.uid())`
- **`Owners can create their business transactions`** — `FOR INSERT` (cmd `a`)
  `WITH CHECK`: `creator_id = auth.uid() AND business_id IN (SELECT id FROM businesses WHERE owner_id = auth.uid())`

No `UPDATE` or `DELETE` policies exist — those commands are denied by default (write-locked, per SB-P-1.8 scope).

---

## 8. Table grants / ACL

From `pg_class.relacl` on `public.transactions`:

```
postgres=arwdDxtm/postgres
anon=arwdDxtm/postgres
authenticated=arwdDxtm/postgres
service_role=arwdDxtm/postgres
sandbox_exec=ar/postgres
```

Interpretation: platform-default broad ACLs on `anon`, `authenticated`, and `service_role` (a=INSERT, r=SELECT, w=UPDATE, d=DELETE, D=TRUNCATE, x=REFERENCES, t=TRIGGER, m=MAINTAIN). Effective access is constrained by RLS: only the two policies above are permitted, and only for `authenticated`. Note: the migration's intent of `SELECT, INSERT` to `authenticated` is enforced *by RLS*, not by narrower table grants, on this managed backend.

---

## 9. `src/integrations/supabase/types.ts` — regenerated differences

Present-state confirmation (file currently in project): the `transactions` entry exists in `Database['public']['Tables']` with:

- `Row` — all 12 columns typed (`amount: number`, `notes: string | null`, timestamps as `string`, etc.)
- `Insert` — required: `amount`, `business_id`, `creator_id`, `description`, `party_name`, `payment_method`, `transaction_type`; optional (defaulted): `id`, `created_at`, `updated_at`, `transaction_date`, `notes`
- `Update` — all fields optional
- `Relationships` — one entry: `transactions_business_id_fkey → businesses.id`

Pre-migration diff: the entire `transactions: { ... }` block was absent from `Database['public']['Tables']` (only `businesses` was present). The regenerated file added exactly this block; no other tables, views, functions, or enums changed. A byte-level diff was not preserved during Phase 3C execution.

---

## 10. `bunx tsgo --noEmit`

Not re-executed for this appendix. As reported at the close of Phase 3C: **exit 0, zero TypeScript errors**. The ~30 pre-migration errors (all references to `public.transactions` in `src/integrations/supabase/transactions.ts`, `src/routes/_authenticated/transactions.tsx`, and `src/routes/_authenticated/dashboard.tsx`) resolved once the regenerated `types.ts` included the `transactions` table.

---

## 11. Supabase linter / security review

Not re-executed for this appendix. As reported at the close of Phase 3C: **no findings against `public.transactions`**. RLS enabled; policies present; no `SECURITY DEFINER` views or functions introduced; `update_updated_at_column()` unchanged (already had `SET search_path = public`).

---

## 12. Additional substantiating evidence

- **Backend identity**: `.env` and `supabase/config.toml` pin project ref `wwgqnshcgbukqczqblsm` (Lovable Cloud). The external `smart-business` Supabase project was not reachable from this environment and was not modified.
- **Scope discipline**: `public.businesses` was not altered — its columns, policies, and RLS flag remain as pre-migration (verified: 4 policies intact, RLS on).
- **Write-lock verified structurally**: `pg_policy` returns exactly two rows for `transactions` (SELECT + INSERT). No UPDATE/DELETE policies means those actions are unreachable through the Data API regardless of ACL breadth.
- **Application logic unchanged**: no files under `src/` were modified during Phase 3C except the auto-generated `src/integrations/supabase/types.ts`.

---

## Gaps (evidence not preserved during execution)

Per Mission Control instruction, these were not re-executed:

1. Exact pre-migration `to_regclass('public.transactions') = NULL` stdout — asserted from Phase 3C narrative only.
2. Byte-level `git diff` of `src/integrations/supabase/types.ts` before/after regeneration.
3. Raw `bunx tsgo --noEmit` stdout (pre and post).
4. Raw `supabase--linter` JSON output.

If Mission Control authorizes, items 3 and 4 can be re-run non-destructively; items 1 and 2 are no longer recoverable without a schema/file rollback, which is out of scope.
