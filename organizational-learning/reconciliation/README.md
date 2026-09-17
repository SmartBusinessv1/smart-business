# Reconciliation

Deterministic reconciliation proof artifacts produced by
`organizational-learning/scripts/reconcile.mjs`, from the existing,
unmodified `ClosureEnvelopeSchema` and receipt-store machinery.

## `plans/`

Path convention: `<mission_id>/reconciliation-plan.json`, validated
against `organizational-learning/schemas/reconciliation.schema.ts`.

A plan classifies each explicitly supplied closure envelope into a
deterministic reconciliation state (`ALREADY_PROCESSED`,
`ELIGIBLE_UNPROCESSED`, `NEW_CLOSURE_REVISION`,
`SUPERSEDED_OR_REOPENED`, `INVALID_OR_UNSAFE`, or `FAILED_RETRYABLE`) by
comparing it against the durable receipts already on file. It is a plan
and diagnostic record only, always carrying the literal field
`"authority_statement": "reconciliation plan, not execution authority"`.
A plan is never itself:

- a promotion decision;
- semantic extraction or a candidate learning item;
- a publication or registry write;
- Founder or Mission Control approval;
- authority to activate a mission or a Product Mission;
- evidence for its own claims.

Discovery is structural only: the wrapper enumerates exactly the
explicit `--envelope` path(s) or `.json` files directly under an
explicit `--envelopes-dir`, and validates every one against the
accepted `ClosureEnvelopeSchema` before it can ever become a work item.
An arbitrary prose file merely asserting a mission is closed is never
opened for that purpose and can never create work.

## `locks/`

A safe, local-only, deterministic concurrency proof mechanism: one flat
lock file per `sha256(mission_id::closure_revision)`, created with an
exclusive-create (`wx`) file write so at most one caller can hold it at
a time. This directory is normally empty — a lock is created only while
`--attempt-lock` is actually exercised, and is expected to be released
immediately after. It is not a lease-aware production lock service;
that is explicitly out of scope for this proof stage.
