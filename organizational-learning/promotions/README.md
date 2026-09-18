# Promotions

Promotion-review records materializing a human Mission Control (or, where
the accepted v1 contract requires it, Founder) decision, validated
against `organizational-learning/schemas/promotion-review.schema.ts`.

Path convention: `<mission_id>/<promotion id>.json`.

Every record here binds an exact candidate ID and an exact
`candidate_revision_hash` (computed with
`organizational-learning/lib/revision-hash.ts` over the promoted
candidate object). The binding is revision-specific: any material
change to the underlying candidate in
`organizational-learning/candidates/` invalidates the approval of the
prior revision, and a new human review/promotion record is required for
the changed content.

A promotion record's own `evidence` array is drawn from the same
already-screened pinned source evidence the promoted candidate cites —
it is a re-statement of that evidence for this record's own provenance,
not new evidence and not authority in itself. Mission Control/Founder
authority is represented through `approving_authority` and
`decision_ref`, which points at the durable Mission Control (or
Founder) decision record — never through the `actor_class` field on an
evidence reference, which always names the actor who made that specific
observation.

`ORGANIZATION_WIDE` `INSTITUTIONALISED` status requires Founder approval
under the accepted v1 contract; nothing in this directory grants that
by itself. `resulting_maturity` and `promotion_scope` on each record are
the only authority this directory carries, and only for the exact
candidate revision each record binds to.
