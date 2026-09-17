// SB-ORG-LEARNING-1.1 Stage 1 correction -- dangling-provenance validation tests.
//
// Mission Control substantive review, Correction 1: prove the runtime
// check that a claimed commit_sha + path + blob_sha actually resolves,
// distinguishing at minimum a valid reference, commit-not-found,
// path-not-found-at-commit, a non-regular object, and a blob SHA
// mismatch. Runs against isolated, throwaway git repositories only (see
// tests/helpers/ephemeral-git-repo.ts) -- never the real Smart Business
// working tree, and never a real closed mission.
import { describe, it, expect, afterEach } from "vitest";
import { validateProvenanceReference } from "../lib/provenance-validator.ts";
import { createEphemeralGitRepo, type EphemeralGitRepo } from "./helpers/ephemeral-git-repo.ts";

let repo: EphemeralGitRepo | null = null;

afterEach(() => {
  repo?.cleanup();
  repo = null;
});

describe("validateProvenanceReference", () => {
  it("reports VALID for an exact reference that resolves correctly", () => {
    repo = createEphemeralGitRepo();
    const commit = repo.commitFile("communication/missions/x/README.md", "hello\n");
    const resolved = resolveAtPath(commit, "communication/missions/x/README.md");

    const result = validateProvenanceReference(repo.root, {
      commit_sha: commit,
      path: "communication/missions/x/README.md",
      blob_sha: resolved,
    });

    expect(result).toEqual({ status: "VALID" });
  });

  it("reports DANGLING/COMMIT_NOT_FOUND for a well-formed but non-existent commit", () => {
    repo = createEphemeralGitRepo();
    repo.commitFile("a.md", "hello\n");

    const result = validateProvenanceReference(repo.root, {
      commit_sha: "deadbeefdeadbeefdeadbeefdeadbeefdeadbeef",
      path: "a.md",
      blob_sha: "b".repeat(40),
    });

    expect(result).toEqual({ status: "DANGLING", reason: "COMMIT_NOT_FOUND" });
  });

  it("reports DANGLING/PATH_NOT_FOUND_AT_COMMIT for a path absent at that commit", () => {
    repo = createEphemeralGitRepo();
    const commit = repo.commitFile("a.md", "hello\n");

    const result = validateProvenanceReference(repo.root, {
      commit_sha: commit,
      path: "does/not/exist.md",
      blob_sha: "b".repeat(40),
    });

    expect(result).toEqual({ status: "DANGLING", reason: "PATH_NOT_FOUND_AT_COMMIT" });
  });

  it("reports DANGLING/NOT_A_REGULAR_FILE for a directory path", () => {
    repo = createEphemeralGitRepo();
    const commit = repo.commitFile("a/b/file.md", "hello\n");

    const result = validateProvenanceReference(repo.root, {
      commit_sha: commit,
      path: "a/b",
      blob_sha: "b".repeat(40),
    });

    expect(result).toEqual({
      status: "DANGLING",
      reason: "NOT_A_REGULAR_FILE",
      actualMode: "040000",
    });
  });

  it("reports DANGLING/NOT_A_REGULAR_FILE for a symlink, even though its git type is 'blob'", () => {
    repo = createEphemeralGitRepo();
    repo.commitFile("a.md", "hello\n");
    const commit = repo.addSymlinkEntry("link-to-a", "a.md");

    const result = validateProvenanceReference(repo.root, {
      commit_sha: commit,
      path: "link-to-a",
      blob_sha: "b".repeat(40),
    });

    expect(result).toEqual({
      status: "DANGLING",
      reason: "NOT_A_REGULAR_FILE",
      actualMode: "120000",
    });
  });

  it("reports DANGLING/NOT_A_REGULAR_FILE for a submodule/gitlink entry", () => {
    repo = createEphemeralGitRepo();
    repo.commitFile("a.md", "hello\n");
    const commit = repo.addGitlinkEntry("vendor/dep", "abcdef0123456789abcdef0123456789abcdef01");

    const result = validateProvenanceReference(repo.root, {
      commit_sha: commit,
      path: "vendor/dep",
      blob_sha: "b".repeat(40),
    });

    expect(result).toEqual({
      status: "DANGLING",
      reason: "NOT_A_REGULAR_FILE",
      actualMode: "160000",
    });
  });

  it("reports DANGLING/BLOB_SHA_MISMATCH when the path resolves but to a different blob", () => {
    repo = createEphemeralGitRepo();
    const commit = repo.commitFile("a.md", "hello\n");
    const wrongBlobSha = "f".repeat(40);

    const result = validateProvenanceReference(repo.root, {
      commit_sha: commit,
      path: "a.md",
      blob_sha: wrongBlobSha,
    });

    expect(result.status).toBe("DANGLING");
    if (result.status === "DANGLING" && result.reason === "BLOB_SHA_MISMATCH") {
      expect(result.actualBlobSha).toMatch(/^[0-9a-f]{40}$/);
      expect(result.actualBlobSha).not.toBe(wrongBlobSha);
    } else {
      throw new Error(`expected BLOB_SHA_MISMATCH, got ${JSON.stringify(result)}`);
    }
  });

  it("detects a claim that points at a real but different file's blob (fabricated corroboration attempt)", () => {
    repo = createEphemeralGitRepo();
    const commit = repo.commitFile("communication/missions/x/README.md", "the real content\n");
    repo.commitFile("communication/missions/x/OTHER.md", "different content\n");
    const otherBlobSha = resolveAtPath(commit, "communication/missions/x/OTHER.md");

    // A reference claiming README.md's path but citing OTHER.md's blob.
    const result = validateProvenanceReference(repo.root, {
      commit_sha: commit,
      path: "communication/missions/x/README.md",
      blob_sha: otherBlobSha,
    });

    expect(result.status).toBe("DANGLING");
  });

  it("re-detects a dangling reference after the path is amended in a later commit", () => {
    repo = createEphemeralGitRepo();
    const firstCommit = repo.commitFile("a.md", "version one\n");
    const firstBlobSha = resolveAtPath(firstCommit, "a.md");
    repo.commitFile("a.md", "version two\n");

    // A reference pinned to the first commit's blob is still VALID at
    // that commit...
    const validAtFirstCommit = validateProvenanceReference(repo.root, {
      commit_sha: firstCommit,
      path: "a.md",
      blob_sha: firstBlobSha,
    });
    expect(validAtFirstCommit).toEqual({ status: "VALID" });

    // ...but citing the first commit's blob while claiming the *second*
    // commit is a mismatch, not a false VALID.
    const secondCommit = repo.git(["rev-parse", "HEAD"]).trim();
    const mismatchAtSecondCommit = validateProvenanceReference(repo.root, {
      commit_sha: secondCommit,
      path: "a.md",
      blob_sha: firstBlobSha,
    });
    expect(mismatchAtSecondCommit.status).toBe("DANGLING");
  });
});

function resolveAtPath(commit: string, path: string): string {
  if (!repo) throw new Error("repo not initialized");
  const output = repo.git(["ls-tree", "-z", commit, "--", path]);
  const line = output.split("\0")[0];
  const [, , sha] = line.split("\t")[0].split(" ").filter(Boolean);
  return sha;
}
