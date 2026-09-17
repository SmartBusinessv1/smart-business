// SB-ORG-LEARNING-1.1 Stage 3B -- deterministic mission-start context-pack
// proof tests.
//
// These tests exercise the real Stage 3A promotion/candidate artifacts
// (read-only) for the positive eligibility proof, and isolated in-memory
// clones for every negative proof (candidate-only exclusion, stale
// revision, scope exclusion, supersession) -- the real promotion/candidate
// files under organizational-learning/promotions and
// organizational-learning/candidates are never written to by any test
// here. Each negative test that clones a real record explicitly re-reads
// the real file afterward to confirm it is unchanged.
import { describe, it, expect } from "vitest";
import { fileURLToPath } from "node:url";
import { spawnSync } from "node:child_process";
import { mkdtempSync, rmSync, readFileSync, writeFileSync } from "node:fs";
import { tmpdir } from "node:os";
import { join } from "node:path";
import {
  evaluateEligibility,
  buildContextPack,
  loadPromotions,
  loadCandidatesById,
} from "../scripts/context-pack.mjs";

const REPO_ROOT = fileURLToPath(new URL("../..", import.meta.url));
const PROMOTIONS_DIR = join(REPO_ROOT, "organizational-learning", "promotions");
const CANDIDATES_DIR = join(REPO_ROOT, "organizational-learning", "candidates");
const SCRIPT_PATH = fileURLToPath(new URL("../scripts/context-pack.mjs", import.meta.url));

const AUTHORIZED_PROFILE = {
  missionClass: "operational",
  systems: ["github-actions", "ci"],
  environments: ["ci"],
  relatedMissions: ["SB-OPS-CI-ARCHITECTURE-1.0"],
};

function loadRealFixtures() {
  const promotions = loadPromotions(PROMOTIONS_DIR);
  const candidatesById = loadCandidatesById(CANDIDATES_DIR);
  return { promotions, candidatesById };
}

function realCandidatePath(name: string) {
  return join(CANDIDATES_DIR, "SB-OPS-CI-ARCHITECTURE-1.0", name);
}

function realPromotionPath(name: string) {
  return join(PROMOTIONS_DIR, "SB-OPS-CI-ARCHITECTURE-1.0", name);
}

describe("Stage 3B: real-fixture eligibility proof", () => {
  it("loads exactly the four current promotion records", () => {
    const { promotions } = loadRealFixtures();
    expect(promotions).toHaveLength(4);
  });

  it("all four current mission-scoped VALIDATED promotions are eligible under the authorized synthetic profile", () => {
    const { promotions, candidatesById } = loadRealFixtures();
    const pack = buildContextPack({
      repoRoot: REPO_ROOT,
      profile: AUTHORIZED_PROFILE,
      promotions,
      candidatesById,
    });
    expect(pack.reusable_learning).toHaveLength(4);
    expect(pack.excluded).toHaveLength(0);
    expect(pack.authority_statement).toBe("context, not authority");
    for (const item of pack.reusable_learning) {
      expect(item.resulting_maturity).toBe("VALIDATED");
      expect(item.promotion_scope).toBe("MISSION_SCOPED");
      expect(item.approving_authority.actor_class).toBe("mission-control");
      for (const ref of item.provenance) {
        expect(ref.status).toBe("VALID");
      }
    }
  });

  it("orders reusable learning deterministically by promotion_id, not by any ranking", () => {
    const { promotions, candidatesById } = loadRealFixtures();
    const pack = buildContextPack({
      repoRoot: REPO_ROOT,
      profile: AUTHORIZED_PROFILE,
      promotions,
      candidatesById,
    });
    const ids = pack.reusable_learning.map((e) => e.promotion_id);
    expect(ids).toEqual([...ids].sort());
  });

  it("surfaces Candidate 3's LIMITS relationship and MEDIUM confidence without resolving the omission", () => {
    const { promotions, candidatesById } = loadRealFixtures();
    const pack = buildContextPack({
      repoRoot: REPO_ROOT,
      profile: AUTHORIZED_PROFILE,
      promotions,
      candidatesById,
    });
    const c3 = pack.reusable_learning.find((e) => e.candidate_id.includes("candidate-03"));
    if (!c3)
      throw new Error("candidate 3's promotion entry was not found in the reusable_learning view");
    if (!c3.contradiction)
      throw new Error("candidate 3's promotion entry unexpectedly has no contradiction field");
    expect(c3.contradiction.status).toBe("LIMITS_OR_CONTRADICTS_PRESENT");
    expect(
      c3.contradiction.references.some(
        (r: { relationship: string }) => r.relationship === "LIMITS",
      ),
    ).toBe(true);
    if (!c3.candidate_reference)
      throw new Error("candidate 3's candidate_reference was unexpectedly null");
    expect(c3.candidate_reference.confidence).toBe("MEDIUM");
    expect(c3.approved_scope).toContain("five items named at pre-merge acceptance");
    expect(c3.approved_scope).toContain("four at final post-merge closure");
    expect(c3.approved_scope).toContain("not any conclusion");
  });
});

describe("Stage 3B: negative proof -- candidate-only exclusion", () => {
  it("rejects a raw candidate object (maturity: CANDIDATE) from the reusable view", () => {
    const { candidatesById } = loadRealFixtures();
    const rawCandidate = JSON.parse(
      readFileSync(realCandidatePath("candidate-01-two-tier-ci-architecture.json"), "utf8"),
    );
    const result = evaluateEligibility(rawCandidate, {
      repoRoot: REPO_ROOT,
      profile: AUTHORIZED_PROFILE,
      candidatesById,
    });
    expect(result.eligible).toBe(false);
    expect(result.reasons[0]).toMatch(/not a valid promotion record/);
  });
});

describe("Stage 3B: negative proof -- stale revision rejection", () => {
  it("excludes a promotion whose bound candidate content was mutated in an isolated in-memory clone", () => {
    const { promotions, candidatesById } = loadRealFixtures();
    const original = promotions.find((p) => p.candidate_id.includes("candidate-01"));
    if (!original)
      throw new Error("candidate 1's promotion record was not found in the real fixtures");
    const candidate = candidatesById.get(original.candidate_id);

    const mutatedCandidatesById = new Map(candidatesById);
    const mutatedCandidate = JSON.parse(JSON.stringify(candidate));
    mutatedCandidate.summary = `${mutatedCandidate.summary} (mutated for test)`;
    mutatedCandidatesById.set(original.candidate_id, mutatedCandidate);

    const result = evaluateEligibility(original, {
      repoRoot: REPO_ROOT,
      profile: AUTHORIZED_PROFILE,
      candidatesById: mutatedCandidatesById,
    });
    expect(result.eligible).toBe(false);
    expect(result.stale).toBe(true);
    expect(result.reasons.some((r: string) => r.includes("stale"))).toBe(true);

    const stillOriginal = JSON.parse(
      readFileSync(realCandidatePath("candidate-01-two-tier-ci-architecture.json"), "utf8"),
    );
    expect(stillOriginal).toEqual(candidate);
  });

  it("excludes a promotion whose candidate_revision_hash field was itself tampered with, in isolation", () => {
    const { promotions, candidatesById } = loadRealFixtures();
    const original = promotions.find((p) => p.candidate_id.includes("candidate-02"));
    if (!original)
      throw new Error("candidate 2's promotion record was not found in the real fixtures");
    const tampered = { ...original, candidate_revision_hash: "0".repeat(64) };
    const result = evaluateEligibility(tampered, {
      repoRoot: REPO_ROOT,
      profile: AUTHORIZED_PROFILE,
      candidatesById,
    });
    expect(result.eligible).toBe(false);
    expect(result.stale).toBe(true);

    const stillReal = JSON.parse(
      readFileSync(realPromotionPath("promotion-02-exact-run-level-closure-evidence.json"), "utf8"),
    );
    expect(stillReal.candidate_revision_hash).toBe(original.candidate_revision_hash);
  });
});

describe("Stage 3B: negative proof -- scope exclusion", () => {
  it("deterministically excludes all real promotions under a non-matching synthetic profile", () => {
    const { promotions, candidatesById } = loadRealFixtures();
    const nonMatchingProfile = {
      missionClass: "product-delivery",
      systems: ["stripe", "billing"],
      environments: ["production"],
      relatedMissions: ["SB-SOME-UNRELATED-MISSION"],
    };
    const pack = buildContextPack({
      repoRoot: REPO_ROOT,
      profile: nonMatchingProfile,
      promotions,
      candidatesById,
    });
    expect(pack.reusable_learning).toHaveLength(0);
    expect(pack.excluded).toHaveLength(4);
    for (const item of pack.excluded) {
      expect(item.exclusion_reasons.some((r: string) => r.includes("does not intersect"))).toBe(
        true,
      );
    }
  });
});

describe("Stage 3B: negative proof -- no invented institutionalization", () => {
  it("never upgrades VALIDATED/MISSION_SCOPED output beyond what each record itself states", () => {
    const { promotions, candidatesById } = loadRealFixtures();
    const pack = buildContextPack({
      repoRoot: REPO_ROOT,
      profile: AUTHORIZED_PROFILE,
      promotions,
      candidatesById,
    });
    const rendered = JSON.stringify(pack);
    expect(rendered).not.toContain("INSTITUTIONALISED");
    expect(rendered).not.toContain("ORGANIZATION_WIDE");
    for (const item of pack.reusable_learning) {
      expect(item.approving_authority.actor_class).toBe("mission-control");
    }
  });

  it("rejects an organization-wide INSTITUTIONALISED record lacking Founder approval at the schema gate", () => {
    const { promotions, candidatesById } = loadRealFixtures();
    const base = promotions[0];
    const invalid = {
      ...base,
      resulting_maturity: "INSTITUTIONALISED",
      promotion_scope: "ORGANIZATION_WIDE",
      approving_authority: {
        actor_class: "mission-control",
        name_or_role: "Smart Business Mission Control",
      },
    };
    const result = evaluateEligibility(invalid, {
      repoRoot: REPO_ROOT,
      profile: AUTHORIZED_PROFILE,
      candidatesById,
    });
    expect(result.eligible).toBe(false);
    expect(result.reasons[0]).toMatch(/not a valid promotion record/);
  });
});

describe("Stage 3B: supersession handling", () => {
  it("honors the current empty supersession arrays for all real promotions", () => {
    const { promotions, candidatesById } = loadRealFixtures();
    const pack = buildContextPack({
      repoRoot: REPO_ROOT,
      profile: AUTHORIZED_PROFILE,
      promotions,
      candidatesById,
    });
    for (const item of pack.reusable_learning) {
      if (!item.supersession)
        throw new Error("reusable_learning entry unexpectedly has no supersession field");
      expect(item.supersession.supersedes).toEqual([]);
      expect(item.supersession.superseded_by).toEqual([]);
    }
  });

  it("excludes a promotion synthetically marked superseded_by another, without touching the real record", () => {
    const { promotions, candidatesById } = loadRealFixtures();
    const original = promotions.find((p) => p.candidate_id.includes("candidate-04"));
    const supersededClone = { ...original, superseded_by: ["some-future-promotion-id"] };
    const result = evaluateEligibility(supersededClone, {
      repoRoot: REPO_ROOT,
      profile: AUTHORIZED_PROFILE,
      candidatesById,
    });
    expect(result.eligible).toBe(false);
    expect(result.supersededByOthers).toBe(true);

    const stillReal = JSON.parse(
      readFileSync(realPromotionPath("promotion-04-explicit-closure-scope-boundary.json"), "utf8"),
    );
    expect(stillReal.superseded_by).toEqual([]);
  });
});

describe("Stage 3B: determinism", () => {
  it("produces byte-identical JSON across repeated in-process builds of identical input", () => {
    const { promotions, candidatesById } = loadRealFixtures();
    const pack1 = buildContextPack({
      repoRoot: REPO_ROOT,
      profile: AUTHORIZED_PROFILE,
      promotions,
      candidatesById,
    });
    const pack2 = buildContextPack({
      repoRoot: REPO_ROOT,
      profile: AUTHORIZED_PROFILE,
      promotions,
      candidatesById,
    });
    expect(JSON.stringify(pack1)).toBe(JSON.stringify(pack2));
  });

  it("produces byte-identical output across two separate real CLI process invocations", () => {
    const dir1 = mkdtempSync(join(tmpdir(), "ole-context-pack-run1-"));
    const dir2 = mkdtempSync(join(tmpdir(), "ole-context-pack-run2-"));
    try {
      const baseArgs = [
        SCRIPT_PATH,
        "--mission-class",
        "operational",
        "--system",
        "github-actions",
        "--system",
        "ci",
        "--environment",
        "ci",
        "--related-mission",
        "SB-OPS-CI-ARCHITECTURE-1.0",
        "--repo-root",
        REPO_ROOT,
      ];
      const run1 = spawnSync(process.execPath, [...baseArgs, "--out-dir", dir1], {
        encoding: "utf8",
      });
      const run2 = spawnSync(process.execPath, [...baseArgs, "--out-dir", dir2], {
        encoding: "utf8",
      });
      expect(run1.status).toBe(0);
      expect(run2.status).toBe(0);
      const content1 = readFileSync(join(dir1, "context-pack.json"), "utf8");
      const content2 = readFileSync(join(dir2, "context-pack.json"), "utf8");
      expect(content1).toBe(content2);
    } finally {
      rmSync(dir1, { recursive: true, force: true });
      rmSync(dir2, { recursive: true, force: true });
    }
  });
});

describe("Stage 3B: real CLI process -- screening and argument validation", () => {
  it("the real CLI run screens CLEAN and writes output", () => {
    const dir = mkdtempSync(join(tmpdir(), "ole-context-pack-screen-"));
    try {
      const result = spawnSync(
        process.execPath,
        [
          SCRIPT_PATH,
          "--mission-class",
          "operational",
          "--system",
          "github-actions",
          "--system",
          "ci",
          "--environment",
          "ci",
          "--related-mission",
          "SB-OPS-CI-ARCHITECTURE-1.0",
          "--repo-root",
          REPO_ROOT,
          "--out-dir",
          dir,
        ],
        { encoding: "utf8" },
      );
      expect(result.status).toBe(0);
      expect(result.stdout).toContain("eligible=4");
      const written = readFileSync(join(dir, "context-pack.json"), "utf8");
      expect(written.length).toBeGreaterThan(0);
      expect(written).toContain("context, not authority");
    } finally {
      rmSync(dir, { recursive: true, force: true });
    }
  });

  it("returns nonzero when required profile arguments are missing", () => {
    const result = spawnSync(process.execPath, [SCRIPT_PATH, "--repo-root", REPO_ROOT], {
      encoding: "utf8",
    });
    expect(result.status).not.toBe(0);
    expect(result.stderr).toContain("--mission-class");
  });

  it("importing the module never auto-runs the CLI path", () => {
    const importerCode = `import ${JSON.stringify(new URL("../scripts/context-pack.mjs", import.meta.url).href)};\nprocess.stdout.write("importer-completed\\n");\n`;
    const dir = mkdtempSync(join(tmpdir(), "ole-context-pack-import-"));
    try {
      const importerPath = join(dir, "import-context-pack.mjs");
      writeFileSync(importerPath, importerCode, "utf8");
      const result = spawnSync(process.execPath, [importerPath], { encoding: "utf8" });
      expect(result.status).toBe(0);
      expect(result.stdout.trim()).toBe("importer-completed");
      expect(result.stderr).toBe("");
    } finally {
      rmSync(dir, { recursive: true, force: true });
    }
  });
});
