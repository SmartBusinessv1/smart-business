#!/usr/bin/env node
// SB-ORG-LEARNING-1.1 Stage 3B -- Deterministic mission-start context-pack proof.
//
// Final reconciled build plan, Section 13: "The first version uses
// deterministic filtering, not semantic ranking." Section 8 (B4): an item
// is eligible for reusable guidance only when its maturity, reviewed
// revision, scope, freshness, supersession state, and contradiction state
// permit reuse; known contradictions must be surfaced, not silently
// dropped; candidate items may appear only in clearly labelled
// candidate/review views.
//
// This module builds a context pack from the existing, unmodified
// PromotionReviewSchema records only. It performs no AI/model ranking:
// every inclusion/exclusion decision below is a plain, explainable
// boolean/set-membership check over already-approved structured fields
// (resulting_maturity, promotion_scope, evidence[].scope,
// evidence[].relationship, supersedes/superseded_by, candidate_revision_hash),
// never a judgment call about which lesson matters more. Where ordering is
// needed, items are sorted by promotion_id (byte-order), exactly the kind
// of stable deterministic key the build plan names as acceptable.
//
// A raw CandidateLearningItem is never treated as reusable guidance: this
// module's own gate is PromotionReviewSchema.safeParse, so an object that
// is actually shaped like a candidate (maturity: "CANDIDATE",
// authority_effect, claims, etc.) fails that parse outright -- both
// because it lacks promotion-only fields and because
// PromotionReviewSchema is `.strict()` and would reject the candidate's
// own fields as unrecognized keys. This is the existing, unmodified
// accepted contract doing the exclusion, not new hand-rolled shape logic.
//
// Freshness here is only ever `promoted_at` and evidence `evidence_date`
// values already present on the approved promotion record -- this module
// never reads `Date.now()` or invents a "verified as of today" claim, so
// the same reviewed input always produces byte-identical output (see
// `buildContextPack`, which is a pure function of its arguments).
//
// Usage:
//   node organizational-learning/scripts/context-pack.mjs \
//     --mission-class <class> --system <s> [--system <s> ...] \
//     --environment <e> [--environment <e> ...] \
//     [--related-mission <id> ...] \
//     [--repo-root <path>] [--promotions-dir <path>] [--candidates-dir <path>] \
//     [--out-dir <path>]

import { readFileSync, readdirSync, writeFileSync, mkdirSync } from "node:fs";
import { join } from "node:path";
import { execFileSync } from "node:child_process";
import { pathToFileURL } from "node:url";

import { PromotionReviewSchema } from "../schemas/promotion-review.schema.ts";
import { CandidateLearningItemSchema } from "../schemas/candidate-learning-item.schema.ts";
import { computeRevisionHash } from "../lib/revision-hash.ts";
import { validateProvenanceReference } from "../lib/provenance-validator.ts";
import { runHeuristicScan, runScreeningSafely } from "../lib/screening.ts";

// A context pack may only ever surface these two promoted maturities as
// "reusable." INSTITUTIONALISED is deliberately absent from this set --
// it is never inferred here, only ever passed through verbatim if it were
// already present on an already-schema-valid record (and even then,
// ORGANIZATION_WIDE + INSTITUTIONALISED without Founder approval is
// already structurally impossible per PromotionReviewSchema itself).
const REUSABLE_MATURITIES = new Set(["VALIDATED", "CORROBORATED"]);

// A reference in either of these relationships is a limitation/contradiction
// that must be surfaced alongside the item, never used to silently exclude
// or silently flatten the item into unqualified certainty.
const CONTRADICTION_RELATIONSHIPS = new Set(["LIMITS", "CONTRADICTS"]);

function sortByStableKey(items, keyFn) {
  return [...items].sort((a, b) => {
    const ka = keyFn(a);
    const kb = keyFn(b);
    return ka < kb ? -1 : ka > kb ? 1 : 0;
  });
}

function scopeUnion(promotion) {
  const missionIds = new Set();
  const systems = new Set();
  const environments = new Set();
  for (const ref of promotion.evidence ?? []) {
    for (const m of ref.scope?.mission_ids ?? []) missionIds.add(m);
    for (const s of ref.scope?.systems ?? []) systems.add(s);
    for (const e of ref.scope?.environments ?? []) environments.add(e);
  }
  return { missionIds, systems, environments };
}

function intersects(set, values) {
  return values.some((v) => set.has(v));
}

/**
 * Deterministically evaluates exactly one promotion record against the
 * query profile and the current candidate set. Every check is a plain
 * structural comparison over already-approved fields; nothing here ranks,
 * scores, or otherwise judges which eligible item is "better."
 */
export function evaluateEligibility(promotionCandidate, { repoRoot, profile, candidatesById }) {
  const parsed = PromotionReviewSchema.safeParse(promotionCandidate);
  if (!parsed.success) {
    return {
      eligible: false,
      reasons: [
        `not a valid promotion record (candidate-only objects and malformed records are excluded by PromotionReviewSchema itself): ${parsed.error.issues
          .map((issue) => issue.message)
          .join("; ")}`,
      ],
    };
  }
  const promotion = parsed.data;
  const reasons = [];

  const maturityOk = REUSABLE_MATURITIES.has(promotion.resulting_maturity);
  if (!maturityOk) {
    reasons.push(
      `resulting_maturity "${promotion.resulting_maturity}" is not a reusable promoted maturity`,
    );
  }

  // Defense-in-depth mirror of PromotionReviewSchema's own superRefine rule
  // -- organization-wide INSTITUTIONALISED status is never treated as
  // authority-compatible unless the approving authority is actually
  // "founder". This can only fire for input that bypassed schema
  // validation entirely (impossible via `parsed.data` above), so it is
  // intentionally unreachable through this function's own gate -- kept
  // as an explicit, tested invariant rather than an implicit one.
  const authorityCompatible = !(
    promotion.resulting_maturity === "INSTITUTIONALISED" &&
    promotion.promotion_scope === "ORGANIZATION_WIDE" &&
    promotion.approving_authority.actor_class !== "founder"
  );
  if (!authorityCompatible) {
    reasons.push(
      "organization-wide INSTITUTIONALISED status requires Founder approval -- not satisfied",
    );
  }

  const candidate = candidatesById.get(promotion.candidate_id);
  let stale = true;
  let currentHash = null;
  if (!candidate) {
    reasons.push(`no current candidate object found for candidate_id "${promotion.candidate_id}"`);
  } else {
    currentHash = computeRevisionHash(candidate);
    stale = currentHash !== promotion.candidate_revision_hash;
    if (stale) {
      reasons.push(
        "candidate_revision_hash no longer matches the current candidate content -- this promotion's approval is stale",
      );
    }
  }

  const union = scopeUnion(promotion);
  const missionMatch =
    profile.relatedMissions.length === 0 || intersects(union.missionIds, profile.relatedMissions);
  const systemMatch = profile.systems.length === 0 || intersects(union.systems, profile.systems);
  const environmentMatch =
    profile.environments.length === 0 || intersects(union.environments, profile.environments);
  const scopeMatches = missionMatch && systemMatch && environmentMatch;
  if (!scopeMatches) {
    reasons.push(
      "profile mission/system/environment scope does not intersect this promotion's evidence scope",
    );
  }

  const provenanceResults = (promotion.evidence ?? []).map((ref) => ({
    path: ref.path,
    result: validateProvenanceReference(repoRoot, ref),
  }));
  const provenanceComplete = provenanceResults.every((entry) => entry.result.status === "VALID");
  if (!provenanceComplete) {
    reasons.push("one or more evidence references failed independent provenance validation");
  }

  const supersededByOthers = (promotion.superseded_by ?? []).length > 0;
  if (supersededByOthers) {
    reasons.push(`superseded by: ${promotion.superseded_by.join(", ")}`);
  }

  const contradictionRefs = (promotion.evidence ?? []).filter((ref) =>
    CONTRADICTION_RELATIONSHIPS.has(ref.relationship),
  );

  const eligible =
    maturityOk &&
    authorityCompatible &&
    candidate !== undefined &&
    !stale &&
    scopeMatches &&
    provenanceComplete &&
    !supersededByOthers;

  return {
    eligible,
    reasons,
    promotion,
    candidate,
    stale,
    currentHash,
    scopeMatches,
    provenanceComplete,
    provenanceResults,
    supersededByOthers,
    hasContradiction: contradictionRefs.length > 0,
    contradictionRefs,
  };
}

/**
 * Pure function of its arguments -- reads no clock, no environment, no
 * randomness. Identical (repoRoot, profile, promotions, candidatesById)
 * always produces byte-identical JSON output.
 */
export function buildContextPack({ repoRoot, profile, promotions, candidatesById }) {
  const evaluated = promotions.map((promotion) => ({
    input: promotion,
    evaluation: evaluateEligibility(promotion, { repoRoot, profile, candidatesById }),
  }));

  const ordered = sortByStableKey(evaluated, (entry) =>
    typeof entry.input?.promotion_id === "string" ? entry.input.promotion_id : "",
  );

  const reusable_learning = [];
  const excluded = [];

  for (const { evaluation } of ordered) {
    const promotion = evaluation.promotion;
    const promotionId = promotion?.promotion_id ?? "(unparseable promotion record)";

    const entry = promotion
      ? {
          promotion_id: promotion.promotion_id,
          candidate_id: promotion.candidate_id,
          resulting_maturity: promotion.resulting_maturity,
          promotion_scope: promotion.promotion_scope,
          approving_authority: promotion.approving_authority,
          decision_ref: promotion.decision_ref,
          approved_scope: promotion.approved_scope,
          provenance: evaluation.provenanceResults.map((p) => ({
            path: p.path,
            status: p.result.status,
          })),
          freshness: {
            promoted_at: promotion.promoted_at,
            evidence_dates: [
              ...new Set((promotion.evidence ?? []).map((e) => e.evidence_date).filter(Boolean)),
            ].sort(),
            note: "freshness reflects only the promoted_at/evidence_date fields already present on the approved promotion record; no independent re-verification-as-of-today is claimed",
          },
          supersession: {
            supersedes: promotion.supersedes ?? [],
            superseded_by: promotion.superseded_by ?? [],
          },
          contradiction: evaluation.hasContradiction
            ? {
                status: "LIMITS_OR_CONTRADICTS_PRESENT",
                references: evaluation.contradictionRefs.map((r) => ({
                  path: r.path,
                  relationship: r.relationship,
                  locator: r.locator,
                })),
              }
            : { status: "NONE_RECORDED" },
          candidate_reference: evaluation.candidate
            ? {
                candidate_id: promotion.candidate_id,
                candidate_revision_hash: promotion.candidate_revision_hash,
                current_hash_matches: !evaluation.stale,
                evidence_strength: evaluation.candidate.evidence_strength,
                confidence: evaluation.candidate.confidence,
                note: "candidate-only fields shown for transparency; the candidate object itself is not independently reviewed and is not reusable authority on its own",
              }
            : null,
        }
      : { promotion_id: promotionId };

    if (evaluation.eligible) {
      reusable_learning.push(entry);
    } else {
      excluded.push({ ...entry, exclusion_reasons: evaluation.reasons });
    }
  }

  return {
    schemaVersion: 1,
    pack_kind: "mission-start-context-pack-proof",
    authority_statement: "context, not authority",
    profile,
    reusable_learning,
    excluded,
  };
}

function collectJsonFiles(dir) {
  const results = [];
  let entries;
  try {
    entries = readdirSync(dir, { withFileTypes: true });
  } catch {
    return results;
  }
  const sorted = [...entries].sort((a, b) => (a.name < b.name ? -1 : a.name > b.name ? 1 : 0));
  for (const entry of sorted) {
    const fullPath = join(dir, entry.name);
    if (entry.isDirectory()) {
      results.push(...collectJsonFiles(fullPath));
    } else if (entry.isFile() && entry.name.endsWith(".json")) {
      results.push(fullPath);
    }
  }
  return results;
}

/** Loads and schema-validates every promotion JSON file under `dir`; invalid/malformed files are skipped, never thrown. */
export function loadPromotions(dir) {
  const promotions = [];
  for (const filePath of collectJsonFiles(dir)) {
    let raw;
    try {
      raw = JSON.parse(readFileSync(filePath, "utf8"));
    } catch {
      continue;
    }
    const parsed = PromotionReviewSchema.safeParse(raw);
    if (parsed.success) promotions.push(parsed.data);
  }
  return promotions;
}

/** Loads and schema-validates every candidate JSON file under `dir`, keyed by candidate `id`. */
export function loadCandidatesById(dir) {
  const candidatesById = new Map();
  for (const filePath of collectJsonFiles(dir)) {
    let raw;
    try {
      raw = JSON.parse(readFileSync(filePath, "utf8"));
    } catch {
      continue;
    }
    const parsed = CandidateLearningItemSchema.safeParse(raw);
    if (parsed.success) candidatesById.set(parsed.data.id, parsed.data);
  }
  return candidatesById;
}

function parseArgs(argv) {
  const args = {
    repoRoot: null,
    outDir: null,
    missionClass: null,
    systems: [],
    environments: [],
    relatedMissions: [],
    promotionsDir: null,
    candidatesDir: null,
  };
  for (let i = 0; i < argv.length; i += 1) {
    const arg = argv[i];
    if (arg === "--repo-root") args.repoRoot = argv[(i += 1)];
    else if (arg === "--out-dir") args.outDir = argv[(i += 1)];
    else if (arg === "--mission-class") args.missionClass = argv[(i += 1)];
    else if (arg === "--system") args.systems.push(argv[(i += 1)]);
    else if (arg === "--environment") args.environments.push(argv[(i += 1)]);
    else if (arg === "--related-mission") args.relatedMissions.push(argv[(i += 1)]);
    else if (arg === "--promotions-dir") args.promotionsDir = argv[(i += 1)];
    else if (arg === "--candidates-dir") args.candidatesDir = argv[(i += 1)];
  }
  return args;
}

function discoverRepoRoot() {
  return execFileSync("git", ["rev-parse", "--show-toplevel"], { encoding: "utf8" }).trim();
}

export function runContextPack(argv) {
  const args = parseArgs(argv);
  if (!args.missionClass || args.systems.length === 0 || args.environments.length === 0) {
    return {
      exitCode: 1,
      message:
        "context-pack: --mission-class, at least one --system, and at least one --environment are required",
    };
  }

  const repoRoot = args.repoRoot ?? discoverRepoRoot();
  const promotionsDir =
    args.promotionsDir ?? join(repoRoot, "organizational-learning", "promotions");
  const candidatesDir =
    args.candidatesDir ?? join(repoRoot, "organizational-learning", "candidates");

  // mission_class is accepted and carried into the pack's profile for
  // context, but is not independently matchable against current
  // promotion/evidence records: EvidenceScopeSchema has no mission_class
  // field. Surfacing that limitation honestly is preferred over inventing
  // a new scope field to make the match look more complete than it is.
  const profile = {
    missionClass: args.missionClass,
    systems: args.systems,
    environments: args.environments,
    relatedMissions: args.relatedMissions,
    limitations: [
      "mission_class is accepted for context only; the current evidence-scope contract (EvidenceScopeSchema) has no mission_class field to match against",
    ],
  };

  const promotions = loadPromotions(promotionsDir);
  const candidatesById = loadCandidatesById(candidatesDir);

  const pack = buildContextPack({ repoRoot, profile, promotions, candidatesById });

  const rendered = `${JSON.stringify(pack, null, 2)}\n`;
  const screening = runScreeningSafely(runHeuristicScan, [
    { path: "context-pack.json", content: rendered },
  ]);
  if (screening.status !== "CLEAN") {
    return {
      exitCode: 1,
      message: `context-pack: generated output failed screening (${screening.status}); refusing to write`,
    };
  }

  if (args.outDir) {
    mkdirSync(args.outDir, { recursive: true });
    writeFileSync(join(args.outDir, "context-pack.json"), rendered, "utf8");
  } else {
    process.stdout.write(rendered);
  }

  return {
    exitCode: 0,
    message: `context-pack: built -- eligible=${pack.reusable_learning.length} excluded=${pack.excluded.length}`,
  };
}

function isMainModule() {
  const entryPoint = process.argv[1];
  if (typeof entryPoint !== "string" || entryPoint.length === 0) {
    return false;
  }
  return import.meta.url === pathToFileURL(entryPoint).href;
}

if (isMainModule()) {
  const { exitCode, message } = runContextPack(process.argv.slice(2));
  if (exitCode === 0) {
    console.log(message);
  } else {
    console.error(message);
  }
  process.exitCode = exitCode;
}
