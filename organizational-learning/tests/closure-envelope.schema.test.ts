// SB-ORG-LEARNING-1.1 Stage 1 -- closure-envelope contract tests.
//
// This schema validates SHAPE only -- structural path safety, not
// allowlist eligibility. A structurally-safe reference under
// communication/live/** therefore *passes* this schema; the allowlist
// (organizational-learning/sources/allowlist.ts) is what excludes it,
// and is enforced by the harvester at read time (see
// harvest-cli.test.ts). Keeping that boundary visible here is
// deliberate, not an oversight -- see organizational-learning/README.md.
import { describe, it, expect } from "vitest";
import { ClosureEnvelopeSchema, envelopeEvidenceRefs } from "../schemas/closure-envelope.schema.ts";

function validEnvelope(overrides: Record<string, unknown> = {}) {
  return {
    schemaVersion: 1,
    mission_id: "SB-OPS-CI-ARCHITECTURE-1.0",
    mission_class: "operational",
    closure_revision: "REV-1",
    final_disposition: "ACCEPTED",
    accepted_scope: "Stage 1 foundation",
    acceptance_refs: [
      "communication/missions/SB-OPS-CI-ARCHITECTURE-1.0/mission-control/06-stage4-acceptance-and-founder-merge-handoff.md",
    ],
    closure_refs: [
      "communication/missions/SB-OPS-CI-ARCHITECTURE-1.0/mission-control/07-post-merge-verification-and-closure.md",
    ],
    retained_followups: [],
    source_snapshot_ref: "a".repeat(40),
    reopens: null,
    supersedes_closure: null,
    ...overrides,
  };
}

describe("ClosureEnvelopeSchema", () => {
  it("accepts a well-formed envelope", () => {
    expect(ClosureEnvelopeSchema.safeParse(validEnvelope()).success).toBe(true);
  });

  it("rejects an envelope with no acceptance_refs and no closure_refs", () => {
    const result = ClosureEnvelopeSchema.safeParse(
      validEnvelope({ acceptance_refs: [], closure_refs: [] }),
    );
    expect(result.success).toBe(false);
  });

  it("accepts an envelope with only closure_refs populated", () => {
    expect(ClosureEnvelopeSchema.safeParse(validEnvelope({ acceptance_refs: [] })).success).toBe(
      true,
    );
  });

  it("rejects a malformed mission_id", () => {
    expect(
      ClosureEnvelopeSchema.safeParse(validEnvelope({ mission_id: "not-a-mission" })).success,
    ).toBe(false);
  });

  it("rejects a source_snapshot_ref that is not a full commit SHA", () => {
    expect(
      ClosureEnvelopeSchema.safeParse(validEnvelope({ source_snapshot_ref: "abc123" })).success,
    ).toBe(false);
  });

  it("rejects an unsafe path inside acceptance_refs", () => {
    expect(
      ClosureEnvelopeSchema.safeParse(validEnvelope({ acceptance_refs: ["../../etc/passwd"] }))
        .success,
    ).toBe(false);
  });

  it("rejects an unsafe path inside closure_refs", () => {
    expect(
      ClosureEnvelopeSchema.safeParse(validEnvelope({ closure_refs: ["/etc/passwd"] })).success,
    ).toBe(false);
  });

  it("accepts a structurally-safe communication/live/** reference -- allowlisting happens at harvest time, not here", () => {
    const result = ClosureEnvelopeSchema.safeParse(
      validEnvelope({ closure_refs: ["communication/live/instruction.md"] }),
    );
    expect(result.success).toBe(true);
  });

  it("rejects an unrecognized field", () => {
    expect(ClosureEnvelopeSchema.safeParse(validEnvelope({ reviewed_by: "someone" })).success).toBe(
      false,
    );
  });

  it("rejects a wrong schemaVersion", () => {
    expect(ClosureEnvelopeSchema.safeParse(validEnvelope({ schemaVersion: 2 })).success).toBe(
      false,
    );
  });
});

describe("envelopeEvidenceRefs", () => {
  it("combines acceptance_refs and closure_refs, excluding retained_followups", () => {
    const envelope = ClosureEnvelopeSchema.parse(
      validEnvelope({ retained_followups: ["some open follow-up, not a path"] }),
    );
    const refs = envelopeEvidenceRefs(envelope);
    expect(refs).toEqual([...envelope.acceptance_refs, ...envelope.closure_refs]);
    expect(refs).not.toContain("some open follow-up, not a path");
  });
});
