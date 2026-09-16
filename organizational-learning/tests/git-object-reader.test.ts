// SB-ORG-LEARNING-1.1 Stage 1 -- committed-Git-object reader tests.
//
// Runs against isolated, throwaway git repositories (see
// tests/helpers/ephemeral-git-repo.ts) -- never against the real Smart
// Business working tree.
import { describe, it, expect, afterEach } from "vitest";
import { writeFileSync } from "node:fs";
import { join } from "node:path";
import {
  resolveBlobAtPath,
  readBlobContent,
  verifyCommitExists,
} from "../lib/git-object-reader.ts";
import { createEphemeralGitRepo, type EphemeralGitRepo } from "./helpers/ephemeral-git-repo.ts";

let repo: EphemeralGitRepo | null = null;

afterEach(() => {
  repo?.cleanup();
  repo = null;
});

describe("verifyCommitExists", () => {
  it("returns true for a real commit", () => {
    repo = createEphemeralGitRepo();
    const commit = repo.commitFile("communication/missions/x/README.md", "hello\n");
    expect(verifyCommitExists(repo.root, commit)).toBe(true);
  });

  it("returns false for a well-formed but non-existent commit SHA", () => {
    repo = createEphemeralGitRepo();
    repo.commitFile("a.md", "hello\n");
    expect(verifyCommitExists(repo.root, "deadbeefdeadbeefdeadbeefdeadbeefdeadbeef")).toBe(false);
  });

  it("throws for a malformed commit SHA rather than shelling out with it", () => {
    repo = createEphemeralGitRepo();
    expect(() => verifyCommitExists(repo!.root, "not-a-sha")).toThrow();
  });
});

describe("resolveBlobAtPath", () => {
  it("resolves a regular committed file", () => {
    repo = createEphemeralGitRepo();
    const commit = repo.commitFile("communication/missions/x/README.md", "hello\n");
    const result = resolveBlobAtPath(repo.root, commit, "communication/missions/x/README.md");
    expect(result.status).toBe("OK");
    if (result.status === "OK") {
      expect(result.entry.mode).toBe("100644");
      expect(result.entry.blobSha).toMatch(/^[0-9a-f]{40}$/);
      expect(result.entry.path).toBe("communication/missions/x/README.md");
    }
  });

  it("is deterministic across repeated resolutions of the same path", () => {
    repo = createEphemeralGitRepo();
    const commit = repo.commitFile("a.md", "hello\n");
    const first = resolveBlobAtPath(repo.root, commit, "a.md");
    const second = resolveBlobAtPath(repo.root, commit, "a.md");
    expect(first).toEqual(second);
  });

  it("returns NOT_FOUND for a path that does not exist at the commit", () => {
    repo = createEphemeralGitRepo();
    const commit = repo.commitFile("a.md", "hello\n");
    const result = resolveBlobAtPath(repo.root, commit, "does/not/exist.md");
    expect(result.status).toBe("NOT_FOUND");
  });

  it("returns NOT_A_REGULAR_FILE for a directory path", () => {
    repo = createEphemeralGitRepo();
    const commit = repo.commitFile("a/b/file.md", "hello\n");
    const result = resolveBlobAtPath(repo.root, commit, "a/b");
    expect(result.status).toBe("NOT_A_REGULAR_FILE");
  });

  it("returns NOT_A_REGULAR_FILE for a symlink entry, even though its git type is 'blob'", () => {
    repo = createEphemeralGitRepo();
    repo.commitFile("a.md", "hello\n");
    const commit = repo.addSymlinkEntry("link-to-a", "a.md");
    const result = resolveBlobAtPath(repo.root, commit, "link-to-a");
    expect(result.status).toBe("NOT_A_REGULAR_FILE");
    if (result.status === "NOT_A_REGULAR_FILE") {
      expect(result.mode).toBe("120000");
    }
  });

  it("returns NOT_A_REGULAR_FILE for a submodule/gitlink entry", () => {
    repo = createEphemeralGitRepo();
    repo.commitFile("a.md", "hello\n");
    const commit = repo.addGitlinkEntry("vendor/dep", "abcdef0123456789abcdef0123456789abcdef01");
    const result = resolveBlobAtPath(repo.root, commit, "vendor/dep");
    expect(result.status).toBe("NOT_A_REGULAR_FILE");
    if (result.status === "NOT_A_REGULAR_FILE") {
      expect(result.mode).toBe("160000");
      expect(result.type).toBe("commit");
    }
  });

  it("returns COMMIT_NOT_FOUND for a non-existent commit", () => {
    repo = createEphemeralGitRepo();
    const result = resolveBlobAtPath(repo.root, "deadbeefdeadbeefdeadbeefdeadbeefdeadbeef", "a.md");
    expect(result.status).toBe("COMMIT_NOT_FOUND");
  });

  it("reads the pinned committed version, not dirty worktree content written after the commit", () => {
    repo = createEphemeralGitRepo();
    const commit = repo.commitFile("communication/missions/x/README.md", "committed content\n");
    // Mutate the working tree without committing.
    writeFileSync(
      join(repo.root, "communication/missions/x/README.md"),
      "DIRTY UNCOMMITTED CONTENT\n",
    );

    const resolved = resolveBlobAtPath(repo.root, commit, "communication/missions/x/README.md");
    expect(resolved.status).toBe("OK");
    if (resolved.status === "OK") {
      const content = readBlobContent(repo.root, resolved.entry.blobSha);
      expect(content).toBe("committed content\n");
      expect(content).not.toContain("DIRTY");
    }
  });

  it("throws rather than shelling out for an unsafe path", () => {
    repo = createEphemeralGitRepo();
    const commit = repo.commitFile("a.md", "hello\n");
    expect(() => resolveBlobAtPath(repo!.root, commit, "../../etc/passwd")).toThrow();
  });
});

describe("readBlobContent", () => {
  it("returns the exact committed byte content as text", () => {
    repo = createEphemeralGitRepo();
    const commit = repo.commitFile("a.md", "exact content\n");
    const resolved = resolveBlobAtPath(repo.root, commit, "a.md");
    if (resolved.status !== "OK") throw new Error("expected OK resolution");
    expect(readBlobContent(repo.root, resolved.entry.blobSha)).toBe("exact content\n");
  });
});
