# Decision Log — SB-GOV-HOUSEKEEPING-1.8

## Decision 1 — Preserve Compensating Control

The technical retirement gate is not satisfied. GitHub protection settings could not be inspected or changed through the available authenticated tools, and independent verification has not occurred. The compensating control remains active.

## Decision 2 — Do Not Infer Protection

The connected GitHub app confirmed repository identity, default branch, permissions, and absence of open pull requests, but it provides no protection/ruleset endpoint. Repository documentation is not substituted for live settings evidence.

## Decision 3 — No Unsafe Enforcement Test

No direct-push, force-push, deletion, unresolved-conversation, or required-check test was attempted because the target rule could not first be safely inspected and configured.
