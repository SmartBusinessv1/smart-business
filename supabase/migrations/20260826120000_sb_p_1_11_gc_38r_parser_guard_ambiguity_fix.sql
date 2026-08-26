-- SB-P-1.11-GC-38R -- Forward corrective migration for the PostgreSQL 42702
-- ambiguity blocker recorded in report1.169.md / instruction1.171.md.
--
-- Root cause: of the nine GC-38R parser-support SECURITY DEFINER functions
-- in 20260819120000_sb_p_1_11_gc_38r_parser_support_schema.sql, exactly two
-- (acquire_parser_preview_guard, issue_parser_upload_lease) declare
-- `RETURNS TABLE (...)` with output-parameter names that are identical to
-- real columns on the table each function operates on
-- (parser_preview_guards.business_id/parser_preview_guards.lease_id/
-- parser_preview_guards.expires_at). RETURNS TABLE column names are
-- implicitly declared as PL/pgSQL variables inside the function body;
-- PL/pgSQL's default `#variable_conflict error` then raises 42702 the
-- moment the SAME bare name is referenced anywhere the variable
-- interpretation is also legal -- confirmed directly against the
-- smart-business-test project for both functions
-- (acquire_parser_preview_guard's `ON CONFLICT (business_id)`, whose
-- conflict target cannot be table-aliased or otherwise qualified; and
-- issue_parser_upload_lease's `WHERE ... lease_id IS NULL AND
-- expires_at > now()`). All seven remaining functions return `boolean`
-- (no RETURNS TABLE, so no implicit output variables) and use only
-- `p_`-prefixed parameters and `v_`-prefixed DECLARE'd locals that never
-- collide with a referenced column name -- inspected individually and
-- confirmed unaffected; none is changed by this migration.
--
-- Fix: add `#variable_conflict use_column;` as the first line of each
-- affected function body. This is PostgreSQL's own documented mechanism
-- for exactly this situation (see the PL/pgSQL "Variable Substitution"
-- documentation) -- it tells the two affected functions to resolve any
-- future bare-name ambiguity in favor of the table column, which was
-- already the only semantically correct reading in both call sites
-- (neither function ever intends to read or write its own output
-- variable by bare name anywhere in its body: both populate their result
-- exclusively through explicit `RETURN QUERY SELECT g.business_id,
-- g.guard_token` / `RETURN QUERY SELECT v_lease_id, v_expires_at` --
-- table-aliased or local-variable references, never the bare ambiguous
-- name). No other line in either function changes.
--
-- This is a forward correction only: the historical migration file above
-- is not edited or rewritten. Function name, parameter list, parameter
-- types, return type, RETURNS TABLE column names, LANGUAGE, SECURITY
-- DEFINER posture, and `SET search_path = ''` are byte-for-byte
-- unchanged, so CREATE OR REPLACE FUNCTION preserves the functions'
-- existing OIDs and every existing GRANT/REVOKE from the historical
-- migration automatically -- no grant statement is repeated here.
--
-- No table, RLS policy, index, or constraint is touched. No Product
-- Truth, catalog, inventory, price, tax, or merchant-decision data or
-- table is introduced or modified.

CREATE OR REPLACE FUNCTION public.acquire_parser_preview_guard(p_business_id uuid)
RETURNS TABLE (business_id uuid, guard_token uuid)
LANGUAGE plpgsql
SECURITY DEFINER
SET search_path = ''
AS $$
#variable_conflict use_column
BEGIN
  RETURN QUERY
  INSERT INTO public.parser_preview_guards AS g
      (business_id, guard_token, lease_id, acquired_at, expires_at,
       attempt_window_started_at, attempt_count_in_window)
  VALUES (p_business_id, gen_random_uuid(), NULL, now(), now() + interval '360 seconds',
          now(), 1)
  ON CONFLICT (business_id) DO UPDATE
     SET guard_token = gen_random_uuid(),
         lease_id = NULL,
         acquired_at = now(),
         expires_at = now() + interval '360 seconds',
         attempt_window_started_at =
           CASE WHEN g.attempt_window_started_at < now() - interval '10 minutes'
                THEN now() ELSE g.attempt_window_started_at END,
         attempt_count_in_window =
           CASE WHEN g.attempt_window_started_at < now() - interval '10 minutes'
                THEN 1 ELSE g.attempt_count_in_window + 1 END
   WHERE g.expires_at < now()
     AND (g.attempt_window_started_at < now() - interval '10 minutes'
          OR g.attempt_count_in_window < 5)
  RETURNING g.business_id, g.guard_token;
END;
$$;

CREATE OR REPLACE FUNCTION public.issue_parser_upload_lease(
  p_business_id uuid,
  p_guard_token uuid,
  p_object_key text,
  p_expected_byte_length integer,
  p_expected_sha256_b64 text,
  p_file_kind text,
  p_created_by uuid
)
RETURNS TABLE (lease_id uuid, expires_at timestamptz)
LANGUAGE plpgsql
SECURITY DEFINER
SET search_path = ''
AS $$
#variable_conflict use_column
DECLARE
  v_found boolean;
  v_lease_id uuid;
  v_expires_at timestamptz;
BEGIN
  SELECT true INTO v_found
    FROM public.parser_preview_guards
   WHERE business_id = p_business_id
     AND guard_token = p_guard_token
     AND lease_id IS NULL
     AND expires_at > now()
   FOR UPDATE;

  IF NOT FOUND THEN
    RETURN;
  END IF;

  v_expires_at := now() + interval '300 seconds';

  INSERT INTO public.parser_upload_leases
      (business_id, guard_token, object_key, expected_byte_length,
       expected_sha256_b64, file_kind, created_by, state, issued_at, expires_at)
  VALUES (p_business_id, p_guard_token, p_object_key, p_expected_byte_length,
          p_expected_sha256_b64, p_file_kind, p_created_by, 'ISSUED', now(), v_expires_at)
  RETURNING id INTO v_lease_id;

  UPDATE public.parser_preview_guards
     SET lease_id = v_lease_id
   WHERE business_id = p_business_id AND guard_token = p_guard_token;

  RETURN QUERY SELECT v_lease_id, v_expires_at;
END;
$$;
