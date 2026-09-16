// SB-ORG-LEARNING-1.1 Stage 1 -- Ephemeral git repository test fixture.
//
// Tests that need to prove real git-plumbing behavior (reading pinned
// commits, rejecting symlinks/submodules, ignoring dirty worktree state)
// must not do so against the real Smart Business repository -- that
// would risk leaving the working tree dirty, would be fragile against
// unrelated future commits, and would confuse "processing this
// mission's own fixtures" with "processing a real closed mission",
// which Stage 1 must not do. Every such test instead creates and tears
// down a fully isolated, throwaway git repository under the OS temp
// directory.
//
// Symlink and submodule/gitlink tree entries are created via git
// plumbing (`update-index --add --cacheinfo <mode> <sha> <path>`), not
// via `fs.symlinkSync`/an actual submodule checkout -- `fs.symlinkSync`
// requires elevated privileges on Windows by default, which would make
// these tests flaky on a Windows development machine even though the
// real CI runners are Linux. Git plumbing produces the identical tree
// entry (mode 120000 / 160000) on every platform, so the reader under
// test cannot tell the difference.

import { execFileSync } from "node:child_process";
import { mkdirSync, mkdtempSync, rmSync, writeFileSync } from "node:fs";
import { tmpdir } from "node:os";
import { dirname, join } from "node:path";

export interface EphemeralGitRepo {
  root: string;
  git(args: string[], options?: { input?: string }): string;
  commitFile(relativePath: string, content: string, message?: string): string;
  addSymlinkEntry(relativePath: string, targetText: string, message?: string): string;
  addGitlinkEntry(relativePath: string, fakeSha: string, message?: string): string;
  cleanup(): void;
}

export function createEphemeralGitRepo(): EphemeralGitRepo {
  const root = mkdtempSync(join(tmpdir(), "ole-stage1-test-repo-"));

  function git(args: string[], options?: { input?: string }): string {
    return execFileSync("git", args, { cwd: root, encoding: "utf8", input: options?.input });
  }

  git(["init", "-q", "-b", "main", "."]);
  git(["config", "user.email", "ole-stage1-test@example.invalid"]);
  git(["config", "user.name", "OLE Stage 1 Test"]);
  // Hermetic regardless of the host machine's global git config (a
  // Windows machine commonly has core.autocrlf=true, which would
  // otherwise make these fixtures' line endings depend on where the
  // test happens to run).
  git(["config", "core.autocrlf", "false"]);

  function commitFile(relativePath: string, content: string, message = "commit fixture"): string {
    const fullPath = join(root, relativePath);
    mkdirSync(dirname(fullPath), { recursive: true });
    writeFileSync(fullPath, content, "utf8");
    git(["add", "--", relativePath]);
    git(["commit", "-q", "-m", message]);
    return git(["rev-parse", "HEAD"]).trim();
  }

  function addSymlinkEntry(
    relativePath: string,
    targetText: string,
    message = "add symlink fixture",
  ): string {
    const blobSha = git(["hash-object", "-w", "--stdin"], { input: targetText }).trim();
    git(["update-index", "--add", "--cacheinfo", "120000", blobSha, relativePath]);
    git(["commit", "-q", "-m", message]);
    return git(["rev-parse", "HEAD"]).trim();
  }

  function addGitlinkEntry(
    relativePath: string,
    fakeSha: string,
    message = "add gitlink fixture",
  ): string {
    git(["update-index", "--add", "--cacheinfo", "160000", fakeSha, relativePath]);
    git(["commit", "-q", "-m", message]);
    return git(["rev-parse", "HEAD"]).trim();
  }

  function cleanup(): void {
    rmSync(root, { recursive: true, force: true });
  }

  return { root, git, commitFile, addSymlinkEntry, addGitlinkEntry, cleanup };
}
