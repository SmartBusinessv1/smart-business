-- SB-P-1.11-GC-38R: Lambda Parser support-state schema.
--
-- Authorized by communication/live/instruction1.144.md, implementing the
-- locked Lambda Parser EIS (communication/live/report1.108.md through
-- report1.125.md, canonicalized by communication/live/report1.126.md) for
-- the Parser Upload Lease (§5) and EC-2 durable/shared per-business guard
-- (§6) support-state contract, corrected per report1.110.md, report1.116.md,
-- report1.118.md, report1.120.md, and report1.122.md.
--
-- Applied to the dedicated Smart Business test Supabase project only.
-- No production migration is authorized by this mission
-- (instruction1.144.md §9); production migration authorization remains a
-- separate later Mission Control decision.
--
-- Neither table is Catalog/Inventory Product Truth. Neither is counted
-- among the nineteen public Catalog commands, and neither grants any
-- Product Truth authority. Both hold only opaque transport/lifecycle state
-- for the external Lambda parser boundary (report1.108.md §5.12): no
-- product name, category, price, tax, or other merchant business-decision
-- field is ever stored here.
--
-- Activation order follows the locked seven-step contract
-- (docs/implementation/SB-P-1.11/verification-checklist.md CHK-LPE-016;
-- report1.120.md §4, corrected by report1.122.md §4.2):
--   (1) create schema;
--   (2) install invariants/helpers before any grant reaches them;
--   (3) neutralize PUBLIC/anon/authenticated on both tables and all nine
--       functions;
--   (4) neutralize and narrow service_role's direct table privilege on
--       parser_upload_leases to exactly { SELECT };
--   (5) grant only the narrow helper EXECUTE surface to service_role.
-- Steps 6 (pre-cutover effective-ACL verification) and 7 (application
-- activation) are deliberately outside this migration file -- see
-- communication/live/report1.154.md for that evidence.

-- =============================================================================
-- Step 1 -- schema.
-- =============================================================================

CREATE TABLE public.parser_preview_guards (
  business_id                uuid PRIMARY KEY REFERENCES public.businesses(id),
  guard_token                uuid NOT NULL DEFAULT gen_random_uuid(),
  lease_id                   uuid,
  acquired_at                timestamptz NOT NULL,
  expires_at                 timestamptz NOT NULL,
  attempt_window_started_at  timestamptz NOT NULL,
  attempt_count_in_window    integer NOT NULL DEFAULT 0
);

COMMENT ON TABLE public.parser_preview_guards IS
  'EC-2 durable/shared per-business pre-parse guard (Lambda Parser EIS §6). '
  'Transport/lifecycle state only -- never Product Truth, never a Catalog '
  'command, never merchant-visible. guard_token is regenerated on every '
  'fresh acquisition (report1.116.md §5.3).';

CREATE TABLE public.parser_upload_leases (
  id                    uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  business_id           uuid NOT NULL REFERENCES public.businesses(id),
  guard_token           uuid NOT NULL,
  object_key            text NOT NULL UNIQUE,
  expected_byte_length  integer NOT NULL
                          CHECK (expected_byte_length > 0 AND expected_byte_length <= 5242880),
  expected_sha256_b64   text NOT NULL,
  created_by            uuid NOT NULL,
  state                 text NOT NULL DEFAULT 'ISSUED'
                          CHECK (state IN ('ISSUED', 'UPLOADED', 'CLAIMED', 'CONSUMED', 'FAILED', 'EXPIRED')),
  issued_at             timestamptz NOT NULL DEFAULT now(),
  expires_at            timestamptz NOT NULL,
  confirmed_at          timestamptz,
  claimed_at            timestamptz,
  dispatched_at         timestamptz,
  terminal_at           timestamptz,
  failure_reason        text
                          CHECK (failure_reason IS NULL OR failure_reason IN (
                            'HEAD_OBJECT_NOT_FOUND', 'HEAD_CHECKSUM_METADATA_MISSING',
                            'HEAD_SIZE_MISMATCH', 'HEAD_CHECKSUM_MISMATCH',
                            'FILE_TOO_LARGE', 'DECOMPRESSED_TOO_LARGE', 'TOO_MANY_ROWS',
                            'TOO_MANY_COLUMNS', 'CELL_TOO_LONG', 'PARSE_TIMEOUT',
                            'UNSUPPORTED_FILE_TYPE', 'MALFORMED_FILE', 'ENCRYPTED_OR_MACRO_FILE',
                            'RESPONSE_TOO_LARGE', 'PARSER_RUNTIME_ERROR', 'DISPATCH_OUTCOME_UNKNOWN'
                          )),
  -- Database-level state/timestamp coherence (report1.118.md §4, §7),
  -- redundant by design with the per-column pairing checks below: both
  -- layers must independently agree before any row is accepted.
  CONSTRAINT parser_upload_leases_terminal_at_pair CHECK (
    (state IN ('CONSUMED', 'FAILED', 'EXPIRED')) = (terminal_at IS NOT NULL)
  ),
  CONSTRAINT parser_upload_leases_failure_reason_pair CHECK (
    (state = 'FAILED') = (failure_reason IS NOT NULL)
  ),
  CONSTRAINT parser_upload_leases_state_invariants CHECK (
    CASE state
      WHEN 'ISSUED'   THEN confirmed_at IS NULL AND claimed_at IS NULL
                           AND terminal_at IS NULL AND failure_reason IS NULL
      WHEN 'UPLOADED' THEN confirmed_at IS NOT NULL AND claimed_at IS NULL
                           AND terminal_at IS NULL AND failure_reason IS NULL
      WHEN 'CLAIMED'  THEN confirmed_at IS NOT NULL AND claimed_at IS NOT NULL
                           AND terminal_at IS NULL AND failure_reason IS NULL
      WHEN 'CONSUMED' THEN confirmed_at IS NOT NULL AND claimed_at IS NOT NULL
                           AND terminal_at IS NOT NULL AND failure_reason IS NULL
      WHEN 'FAILED'   THEN confirmed_at IS NOT NULL AND claimed_at IS NOT NULL
                           AND terminal_at IS NOT NULL AND failure_reason IS NOT NULL
      WHEN 'EXPIRED'  THEN claimed_at IS NULL AND terminal_at IS NOT NULL
                           AND failure_reason IS NULL
    END
  )
);

CREATE INDEX parser_upload_leases_business_state_idx
  ON public.parser_upload_leases (business_id, state);
CREATE INDEX parser_upload_leases_expires_at_idx
  ON public.parser_upload_leases (expires_at);

COMMENT ON TABLE public.parser_upload_leases IS
  'Parser Upload Lease (Lambda Parser EIS §5). Opaque transport/lifecycle '
  'state binding one transient S3 upload to one authoritative business for '
  'one external Lambda parse -- never Product Truth, never a Catalog '
  'command, never merchant-visible (report1.108.md §5.12). '
  'business_id/guard_token/object_key/expected_byte_length/'
  'expected_sha256_b64/created_by/issued_at/expires_at are immutable '
  'authority fields: no transition function below ever assigns them '
  '(report1.118.md §3.3).';

-- =============================================================================
-- Step 2 -- invariants/helpers. Nine SECURITY DEFINER functions, each
-- owned by the migration role (matching the repository's existing Catalog
-- command convention: SET search_path = '' + fully-qualified references
-- closes search-path injection by construction). No grant is issued yet --
-- see Step 5.
-- =============================================================================

-- acquire_parser_preview_guard -- EC-2 atomic acquire (report1.116.md §5.3).
-- Zero returned rows means either the guard is currently held or the
-- 5-per-10-minute rate window is exhausted; the caller distinguishes these
-- only for internal telemetry, never in the merchant-visible message.
CREATE OR REPLACE FUNCTION public.acquire_parser_preview_guard(p_business_id uuid)
RETURNS TABLE (business_id uuid, guard_token uuid)
LANGUAGE plpgsql
SECURITY DEFINER
SET search_path = ''
AS $$
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

-- release_parser_preview_guard -- called when the associated lease reaches
-- a terminal state. Setting expires_at to now() (rather than deleting the
-- row) preserves attempt-window accounting across the release.
CREATE OR REPLACE FUNCTION public.release_parser_preview_guard(
  p_business_id uuid,
  p_guard_token uuid,
  p_lease_id uuid
)
RETURNS boolean
LANGUAGE plpgsql
SECURITY DEFINER
SET search_path = ''
AS $$
DECLARE
  v_count integer;
BEGIN
  UPDATE public.parser_preview_guards
     SET expires_at = now()
   WHERE business_id = p_business_id
     AND guard_token = p_guard_token
     AND lease_id = p_lease_id
     AND expires_at > now();
  GET DIAGNOSTICS v_count = ROW_COUNT;
  RETURN v_count > 0;
END;
$$;

-- issue_parser_upload_lease -- creates the ISSUED lease and binds it to the
-- guard atomically in one transaction (report1.116.md §5.3), replacing the
-- baseline design's unbound guard/lease pairing (SUPA-EIS-B1).
CREATE OR REPLACE FUNCTION public.issue_parser_upload_lease(
  p_business_id uuid,
  p_guard_token uuid,
  p_object_key text,
  p_expected_byte_length integer,
  p_expected_sha256_b64 text,
  p_created_by uuid
)
RETURNS TABLE (lease_id uuid, expires_at timestamptz)
LANGUAGE plpgsql
SECURITY DEFINER
SET search_path = ''
AS $$
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
       expected_sha256_b64, created_by, state, issued_at, expires_at)
  VALUES (p_business_id, p_guard_token, p_object_key, p_expected_byte_length,
          p_expected_sha256_b64, p_created_by, 'ISSUED', now(), v_expires_at)
  RETURNING id INTO v_lease_id;

  UPDATE public.parser_preview_guards
     SET lease_id = v_lease_id
   WHERE business_id = p_business_id AND guard_token = p_guard_token;

  RETURN QUERY SELECT v_lease_id, v_expires_at;
END;
$$;

-- confirm_parser_upload_lease -- ISSUED -> UPLOADED, on browser upload
-- confirmation. Authoritative business is re-derived and compared by the
-- caller before invoking this function (parser-lease.ts); p_business_id
-- here is the second independent check.
CREATE OR REPLACE FUNCTION public.confirm_parser_upload_lease(p_lease_id uuid, p_business_id uuid)
RETURNS boolean
LANGUAGE plpgsql
SECURITY DEFINER
SET search_path = ''
AS $$
DECLARE
  v_count integer;
BEGIN
  UPDATE public.parser_upload_leases
     SET state = 'UPLOADED', confirmed_at = now()
   WHERE id = p_lease_id
     AND business_id = p_business_id
     AND state = 'ISSUED'
     AND expires_at > now();
  GET DIAGNOSTICS v_count = ROW_COUNT;
  RETURN v_count > 0;
END;
$$;

-- claim_parser_upload_lease -- UPLOADED -> CLAIMED. The sole one-winner
-- dispatch-authorization gate (report1.118.md §5): exactly one concurrent
-- caller wins this single-row conditional UPDATE; no other transition in
-- this schema ever returns a lease to UPLOADED, so a CLAIMED lease can
-- structurally never be dispatched to Lambda a second time.
CREATE OR REPLACE FUNCTION public.claim_parser_upload_lease(p_lease_id uuid, p_business_id uuid)
RETURNS boolean
LANGUAGE plpgsql
SECURITY DEFINER
SET search_path = ''
AS $$
DECLARE
  v_count integer;
BEGIN
  UPDATE public.parser_upload_leases
     SET state = 'CLAIMED', claimed_at = now()
   WHERE id = p_lease_id
     AND business_id = p_business_id
     AND state = 'UPLOADED'
     AND expires_at > now();
  GET DIAGNOSTICS v_count = ROW_COUNT;
  RETURN v_count > 0;
END;
$$;

-- mark_parser_upload_lease_dispatched -- diagnostic-only marker set once
-- immediately before the Lambda Function URL call; never gates any
-- lifecycle decision (report1.118.md §6).
CREATE OR REPLACE FUNCTION public.mark_parser_upload_lease_dispatched(p_lease_id uuid, p_business_id uuid)
RETURNS boolean
LANGUAGE plpgsql
SECURITY DEFINER
SET search_path = ''
AS $$
DECLARE
  v_count integer;
BEGIN
  UPDATE public.parser_upload_leases
     SET dispatched_at = now()
   WHERE id = p_lease_id
     AND business_id = p_business_id
     AND state = 'CLAIMED'
     AND dispatched_at IS NULL;
  GET DIAGNOSTICS v_count = ROW_COUNT;
  RETURN v_count > 0;
END;
$$;

-- complete_parser_upload_lease -- CLAIMED -> CONSUMED, only after Lambda's
-- allowlisted result has been validated by the caller.
CREATE OR REPLACE FUNCTION public.complete_parser_upload_lease(p_lease_id uuid, p_business_id uuid)
RETURNS boolean
LANGUAGE plpgsql
SECURITY DEFINER
SET search_path = ''
AS $$
DECLARE
  v_count integer;
BEGIN
  UPDATE public.parser_upload_leases
     SET state = 'CONSUMED', terminal_at = now()
   WHERE id = p_lease_id
     AND business_id = p_business_id
     AND state = 'CLAIMED';
  GET DIAGNOSTICS v_count = ROW_COUNT;
  RETURN v_count > 0;
END;
$$;

-- fail_parser_upload_lease -- CLAIMED -> FAILED, including the
-- DISPATCH_OUTCOME_UNKNOWN case (a CLAIMED lease touched more than 30
-- seconds after claimed_at, per report1.116.md §4.3's lazy resolution --
-- no cron/scheduler is introduced). p_failure_reason is validated by the
-- table's own bounded CHECK constraint.
CREATE OR REPLACE FUNCTION public.fail_parser_upload_lease(
  p_lease_id uuid,
  p_business_id uuid,
  p_failure_reason text
)
RETURNS boolean
LANGUAGE plpgsql
SECURITY DEFINER
SET search_path = ''
AS $$
DECLARE
  v_count integer;
BEGIN
  UPDATE public.parser_upload_leases
     SET state = 'FAILED', terminal_at = now(), failure_reason = p_failure_reason
   WHERE id = p_lease_id
     AND business_id = p_business_id
     AND state = 'CLAIMED';
  GET DIAGNOSTICS v_count = ROW_COUNT;
  RETURN v_count > 0;
END;
$$;

-- expire_parser_upload_lease -- ISSUED|UPLOADED -> EXPIRED. CLAIMED is
-- never eligible for expiry (a claimed lease resolves only through
-- complete/fail, including the DISPATCH_OUTCOME_UNKNOWN timeout path).
CREATE OR REPLACE FUNCTION public.expire_parser_upload_lease(p_lease_id uuid, p_business_id uuid)
RETURNS boolean
LANGUAGE plpgsql
SECURITY DEFINER
SET search_path = ''
AS $$
DECLARE
  v_count integer;
BEGIN
  UPDATE public.parser_upload_leases
     SET state = 'EXPIRED', terminal_at = now()
   WHERE id = p_lease_id
     AND business_id = p_business_id
     AND state IN ('ISSUED', 'UPLOADED')
     AND expires_at <= now();
  GET DIAGNOSTICS v_count = ROW_COUNT;
  RETURN v_count > 0;
END;
$$;

-- =============================================================================
-- Step 3 -- neutralize inherited/default privileges for PUBLIC, anon, and
-- authenticated on both tables and all nine functions. No merchant-facing
-- UI ever polls lease/guard state directly (report1.108.md §5.11) -- these
-- are transport primitives entirely internal to server orchestration.
-- =============================================================================

REVOKE ALL ON public.parser_preview_guards FROM PUBLIC, anon, authenticated;
REVOKE ALL ON public.parser_upload_leases FROM PUBLIC, anon, authenticated;

REVOKE ALL ON FUNCTION public.acquire_parser_preview_guard(uuid) FROM PUBLIC, anon, authenticated;
REVOKE ALL ON FUNCTION public.release_parser_preview_guard(uuid, uuid, uuid) FROM PUBLIC, anon, authenticated;
REVOKE ALL ON FUNCTION public.issue_parser_upload_lease(uuid, uuid, text, integer, text, uuid) FROM PUBLIC, anon, authenticated;
REVOKE ALL ON FUNCTION public.confirm_parser_upload_lease(uuid, uuid) FROM PUBLIC, anon, authenticated;
REVOKE ALL ON FUNCTION public.claim_parser_upload_lease(uuid, uuid) FROM PUBLIC, anon, authenticated;
REVOKE ALL ON FUNCTION public.mark_parser_upload_lease_dispatched(uuid, uuid) FROM PUBLIC, anon, authenticated;
REVOKE ALL ON FUNCTION public.complete_parser_upload_lease(uuid, uuid) FROM PUBLIC, anon, authenticated;
REVOKE ALL ON FUNCTION public.fail_parser_upload_lease(uuid, uuid, text) FROM PUBLIC, anon, authenticated;
REVOKE ALL ON FUNCTION public.expire_parser_upload_lease(uuid, uuid) FROM PUBLIC, anon, authenticated;

-- =============================================================================
-- Step 4 -- neutralize and narrow service_role's direct table privilege on
-- parser_upload_leases to exactly { SELECT }. Order is load-bearing: this
-- repository's default-privilege reconciliation
-- (20260727000000_reconcile_default_grants.sql) grants service_role ALL on
-- every new table the instant CREATE TABLE runs, because every migration
-- executes as postgres. REVOKE must run before GRANT SELECT -- reversing
-- the order would leave the inherited ALL grant silently intact underneath
-- the narrower one, since Postgres grants are additive (report1.121.md §5,
-- corrected by report1.122.md §4.2).
-- =============================================================================

REVOKE ALL ON public.parser_upload_leases FROM service_role;
GRANT SELECT ON public.parser_upload_leases TO service_role;

-- parser_preview_guards has no lifecycle-mutation helper surface beyond
-- acquire/release above; service_role retains direct ALL here, unchanged
-- from the locked design (report1.116.md §6.2) -- deliberate, not an
-- oversight.
GRANT ALL ON public.parser_preview_guards TO service_role;

ALTER TABLE public.parser_preview_guards ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.parser_upload_leases ENABLE ROW LEVEL SECURITY;

-- No RLS policy is created for either table -- both are enabled with zero
-- policies (default-deny for every role lacking BYPASSRLS). service_role
-- carries BYPASSRLS by Supabase convention; anon/authenticated have
-- neither a grant nor a policy path (report1.116.md §6.2).

-- =============================================================================
-- Step 5 -- grant only the narrow helper EXECUTE surface to service_role.
-- Every write path into parser_upload_leases now exists exclusively
-- through these nine SECURITY DEFINER functions, each of which executes
-- with the owning migration role's privileges regardless of caller
-- (report1.118.md §3.2) -- service_role never needs a table-level write
-- grant to use them.
-- =============================================================================

GRANT EXECUTE ON FUNCTION public.acquire_parser_preview_guard(uuid) TO service_role;
GRANT EXECUTE ON FUNCTION public.release_parser_preview_guard(uuid, uuid, uuid) TO service_role;
GRANT EXECUTE ON FUNCTION public.issue_parser_upload_lease(uuid, uuid, text, integer, text, uuid) TO service_role;
GRANT EXECUTE ON FUNCTION public.confirm_parser_upload_lease(uuid, uuid) TO service_role;
GRANT EXECUTE ON FUNCTION public.claim_parser_upload_lease(uuid, uuid) TO service_role;
GRANT EXECUTE ON FUNCTION public.mark_parser_upload_lease_dispatched(uuid, uuid) TO service_role;
GRANT EXECUTE ON FUNCTION public.complete_parser_upload_lease(uuid, uuid) TO service_role;
GRANT EXECUTE ON FUNCTION public.fail_parser_upload_lease(uuid, uuid, text) TO service_role;
GRANT EXECUTE ON FUNCTION public.expire_parser_upload_lease(uuid, uuid) TO service_role;

-- Not touched by this migration: any existing Catalog/Inventory table,
-- function, RLS policy, or grant; the nineteen-command public Catalog
-- surface; catalog_import_batches/catalog_import_rows; production Supabase
-- state (this migration is applied to the test project only).
