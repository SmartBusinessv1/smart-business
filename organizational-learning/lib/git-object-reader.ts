// SB-ORG-LEARNING-1.1 Stage 1 -- Committed-Git-object reader.
//
// "Committed source only": the harvester reads pinned committed Git
// objects, never ambient dirty worktree content (final build plan,
// Stage 1 architecture rules). Every read here is scoped to an explicit
// commit SHA passed by the caller -- there is no function in this module
// that reads "the current working tree" or "HEAD" implicitly.
//
// Every git invocation uses execFileSync with an argv array (never a
// shell string), so untrusted path/commit values can never be
// reinterpreted as shell syntax. Path arguments are additionally always
// placed after a literal "--" separator, so a path string that happens
// to start with "-" can never be parsed as a git flag. Both `commitSha`
// and `path` are re-validated inside this module (regex / safe-path)
// even though callers are expected to have already validated them --
// this module is a security boundary and must not assume its caller was
// correct (AI Operations Manual A1: "verify before acting").
//
// Mode/type table this module relies on (empirically verified against a
// real git 2.55 repository while writing this file):
//   100644 blob  -- regular file
//   100755 blob  -- executable regular file
//   120000 blob  -- symlink (same *type* as a regular file; only the
//                   *mode* distinguishes it -- checking type alone would
//                   silently accept a symlink)
//   160000 commit -- submodule / gitlink
//   040000 tree  -- directory
// A path with no tree entry produces empty `ls-tree` output and exit
// code 0 (not a non-zero exit) -- absence is a normal, not an error,
// result and must be checked for explicitly.

import { execFileSync } from "node:child_process";
import { isSafeRelativePath } from "./path-safety.ts";

const FULL_SHA_RE = /^[0-9a-f]{40}$/;
const REGULAR_FILE_MODES = new Set(["100644", "100755"]);

function assertFullSha(value: string, label: string): void {
  if (!FULL_SHA_RE.test(value)) {
    throw new Error(`${label} must be a full 40-character lowercase hex SHA, got: ${value}`);
  }
}

function assertSafePath(value: string): void {
  if (!isSafeRelativePath(value)) {
    throw new Error(`refusing to read unsafe path: ${value}`);
  }
}

function runGit(repoRoot: string, args: string[]): { ok: boolean; stdout: string } {
  try {
    const stdout = execFileSync("git", args, {
      cwd: repoRoot,
      encoding: "utf8",
      maxBuffer: 64 * 1024 * 1024,
      // Expected failures (missing commit, missing path) are a normal,
      // handled result here, not an operational error -- git's own
      // stderr text for them would otherwise spam CI logs with
      // "fatal:"/"warning:" lines during passing negative-case tests.
      // stdin is closed, never inherited: this module never wants git
      // reading interactively.
      stdio: ["ignore", "pipe", "pipe"],
    });
    return { ok: true, stdout };
  } catch {
    return { ok: false, stdout: "" };
  }
}

/** True only if `commitSha` resolves to a real, readable commit object. */
export function verifyCommitExists(repoRoot: string, commitSha: string): boolean {
  assertFullSha(commitSha, "commitSha");
  const result = runGit(repoRoot, ["cat-file", "-e", `${commitSha}^{commit}`]);
  return result.ok;
}

export interface ResolvedBlob {
  path: string;
  blobSha: string;
  mode: "100644" | "100755";
}

export type GitReadResult =
  | { status: "OK"; entry: ResolvedBlob }
  | { status: "COMMIT_NOT_FOUND" }
  | { status: "NOT_FOUND" }
  | { status: "NOT_A_REGULAR_FILE"; mode: string; type: string };

/**
 * Resolves exactly one repository-relative path against a pinned commit,
 * returning the blob SHA and mode only when the entry is a regular file
 * (not a directory, symlink, or submodule/gitlink).
 */
export function resolveBlobAtPath(
  repoRoot: string,
  commitSha: string,
  path: string,
): GitReadResult {
  assertFullSha(commitSha, "commitSha");
  assertSafePath(path);

  if (!verifyCommitExists(repoRoot, commitSha)) {
    return { status: "COMMIT_NOT_FOUND" };
  }

  const result = runGit(repoRoot, ["ls-tree", "-z", commitSha, "--", path]);
  if (!result.ok) {
    return { status: "COMMIT_NOT_FOUND" };
  }

  const entries = result.stdout.split("\0").filter((line) => line.length > 0);
  if (entries.length === 0) {
    return { status: "NOT_FOUND" };
  }
  if (entries.length > 1) {
    // A single exact file path never yields more than one tree entry;
    // more than one means `path` named a directory. Fail closed rather
    // than guessing which entry was intended.
    return { status: "NOT_A_REGULAR_FILE", mode: "040000", type: "tree" };
  }

  const line = entries[0];
  const tabIndex = line.indexOf("\t");
  if (tabIndex === -1) {
    return { status: "NOT_FOUND" };
  }
  const [mode, type, sha] = line.slice(0, tabIndex).split(" ").filter(Boolean);
  const entryPath = line.slice(tabIndex + 1);

  if (entryPath !== path) {
    // Defensive: git only matched a path *under* the requested pathspec.
    return { status: "NOT_FOUND" };
  }
  if (!REGULAR_FILE_MODES.has(mode) || type !== "blob") {
    return { status: "NOT_A_REGULAR_FILE", mode, type };
  }

  return {
    status: "OK",
    entry: { path, blobSha: sha, mode: mode as "100644" | "100755" },
  };
}

/** Reads the raw text content of an already-resolved blob. */
export function readBlobContent(repoRoot: string, blobSha: string): string {
  assertFullSha(blobSha, "blobSha");
  const result = runGit(repoRoot, ["cat-file", "-p", blobSha]);
  if (!result.ok) {
    throw new Error(`failed to read blob content for ${blobSha}`);
  }
  return result.stdout;
}
