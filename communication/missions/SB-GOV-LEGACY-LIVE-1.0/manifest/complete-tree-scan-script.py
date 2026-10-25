#!/usr/bin/env python3
"""SB-GOV-LEGACY-LIVE-1.0 Track B -- complete tracked-tree reference scan.

Deterministic, read-only scan of every tracked file at an immutable baseline
for references to the 90 numbered `communication/live/` files.

Usage (from a clean, detached checkout of the baseline):

    git worktree add --detach <dir> 462130f625c9366380ee37b87109d1831a5db49d
    python -I <this script> --repo <dir> --out <hits.tsv>

The script refuses to run unless HEAD equals the expected baseline and the
tracked working tree is clean. File content is read from the Git object
database (the exact tracked blobs at HEAD), not from the filesystem, so the
result is independent of local line-ending or editor state. Nothing in the
repository is written; the only output is the TSV and the summary on stdout.

Standard library only; Python 3.8+.
"""

import argparse
import collections
import hashlib
import posixpath
import re
import subprocess
import sys

BASELINE = "462130f625c9366380ee37b87109d1831a5db49d"
LIVE_DIR = "communication/live/"
LIVE_RE = re.compile(r"communication/live/(?:instruction|report)1\.\d+\.md")
ACTIVE_PAIR = ("communication/live/instruction.md", "communication/live/report.md")
WORKSTREAM_DIR = "communication/missions/SB-GOV-LEGACY-LIVE-1.0/"
PR1070_MANIFEST = WORKSTREAM_DIR + "manifest/legacy-live-90-file-manifest.md"
SNAPSHOT_DIRS = (
    "communication/missions/SB-P-1.12/communication-preservation/legacy-live-numbered/",
    "communication/missions/SB-P-1.17/communication-preservation/legacy-live-numbered/",
)

# A numbered name: not preceded by a word char, '.' or '-' (so `xreport1.5.md`
# and `SB-report1.5.md` do not match) and not followed by a word char or by
# '.'+word char (so `report1.5` never matches inside `report1.50`,
# `report1.5.1` or `report1.5.md.bak`). The numeric part is captured whole,
# then checked against the inventory, which removes suffix collisions such as
# `instruction1.1` vs `instruction1.10` / `instruction1.110`.
NAME_RE = re.compile(r"(?<![\w.-])((?:instruction|report)1\.\d+)(\.md)?(?!\w|\.\w)", re.I)
# Characters that may form a path token immediately to the left of a name.
TOKEN_RE = re.compile(r"[A-Za-z0-9_./\\%:~@+-]*$")
# Directory-level mentions of the live folder (any separator / URL encoding).
DIR_RE = re.compile(r"communication(?:/|\\|%2[fF])live(?:/|\\|%2[fF])?([^\s`'\"()<>\[\]|,;]*)", re.I)

CODE_EXT = (".ts", ".tsx", ".js", ".jsx", ".mjs", ".cjs", ".py", ".sh", ".ps1",
            ".sql", ".yml", ".yaml", ".json", ".toml", ".html", ".css")
CODE_DIRS = (".github/", "scripts/", "src/", "supabase/", "organizational-learning/",
             "tests/", "public/")
GOVERNANCE_CURRENT = ("AGENTS.md", "CLAUDE.md", "README.md")
GOVERNANCE_DIRS = ("merge/active/", "docs/governance/", "mission-control/")
HISTORY_DIRS = ("communication/archive/", "communication/evidence/",
                "communication/missions/", "docs/")

ACTION = {
    "active dependency": "Re-point to the preserved destination under a separate exact-file "
                         "authorization before any live-path removal",
    "historic reference": "None for preservation; keep historical text unmodified; content "
                          "resolvable at the preserved destination",
    "self-reference": "None",
    "false positive": "None; does not reference the current live occupant",
    "ambiguous": "Independent manual review required before any removal decision",
}

HEADER = ["hit_id", "referring_path", "line", "column", "target_live_path", "target_basename",
          "match_form", "path_or_basename", "matched_token", "referrer_class", "line_commit",
          "occupancy_era", "classification", "rationale", "proposed_preserved_destination",
          "action_needed", "context"]


def git(repo, *args, data=None):
    return subprocess.run(["git", "-C", repo, *args], input=data, check=True,
                          stdout=subprocess.PIPE, stderr=subprocess.PIPE).stdout


def read_blobs(repo, shas):
    """Return {sha: bytes} for the given blob SHAs via one `git cat-file --batch`."""
    out = git(repo, "cat-file", "--batch", data="".join(s + "\n" for s in shas).encode())
    blobs, pos = {}, 0
    for sha in shas:
        nl = out.index(b"\n", pos)
        osha, otype, size = out[pos:nl].decode().split()
        assert osha == sha and otype == "blob", (sha, otype)
        size = int(size)
        blobs[sha] = out[nl + 1:nl + 1 + size]
        pos = nl + 1 + size + 1
    return blobs


def referrer_class(path, live_set):
    if path in live_set:
        return "live-numbered"
    if path in ACTIVE_PAIR:
        return "live-active-pair"
    if path.startswith(SNAPSHOT_DIRS):
        return "preserved-snapshot"
    if path.startswith(WORKSTREAM_DIR):
        return "workstream-record"
    if path.startswith(CODE_DIRS) or path.endswith(CODE_EXT) or ("/" not in path and path.startswith(".")):
        return "executable-or-config"
    if path in GOVERNANCE_CURRENT or path.startswith(GOVERNANCE_DIRS) or \
            (path.startswith("communication/") and path.count("/") == 1):
        return "current-governance"
    if path.startswith(HISTORY_DIRS):
        return "historical-record"
    return "other"


def classify_form(referrer, prefix_token, has_ext, target):
    """Return (match_form, path_or_basename, resolved_path_or_None)."""
    tok = prefix_token.replace("\\", "/").replace("%2F", "/").replace("%2f", "/")
    base = target.rsplit("/", 1)[1]
    if not has_ext:
        return ("stem-with-path" if tok else "stem"), ("full-path" if tok else "basename"), None
    if not tok:
        return "basename", "basename", None
    if tok.lower().endswith(LIVE_DIR):
        return ("exact-path-url" if "://" in tok else "exact-path"), "full-path", target
    rel = tok.lstrip("/") if tok.startswith("/") and not tok.startswith("//") else tok
    resolved = posixpath.normpath(posixpath.join(posixpath.dirname(referrer), rel + base))
    if resolved == target:
        return "relative-path-resolves", "full-path", target
    if tok.lower().endswith("live/"):
        return "relative-path-unresolved", "full-path", resolved
    root_resolved = posixpath.normpath(rel + base) if not rel.startswith(".") else resolved
    return "other-directory-path", "full-path", root_resolved


def build_events(repo, live):
    """Per live path: topo-ordered list of (topo_index, commit, 'A'|'D')."""
    order = git(repo, "rev-list", "--topo-order", "--reverse", "HEAD").decode().split()
    topo = {c: i for i, c in enumerate(order)}
    events = {}
    for p in live:
        out = git(repo, "log", "--no-renames", "--format=@%H", "--name-status",
                  "--diff-filter=AD", "HEAD", "--", p).decode()
        ev, cur = [], None
        for line in out.splitlines():
            if line.startswith("@"):
                cur = line[1:]
            elif line[:1] in ("A", "D"):
                ev.append((topo[cur], cur, line[0]))
        events[p] = sorted(ev)
    return topo, events


def occupancy(topo, ev, commit):
    """Place a line authored in `commit` among the path's occupancy epochs.

    Returns (era, end_commit): end_commit is the deletion that ended the
    epoch the line most plausibly describes (None when there is none).

    current        authored at or after creation of the current occupant
    prior-occupant authored while an earlier occupant held the path, or in
                   the commit that deleted/moved it
    vacant-earlier authored while the path was vacant and a different
                   occupant was created afterwards; cannot denote the
                   current file
    pre-creation   authored in the last vacancy (or before any occupancy)
                   immediately preceding the current occupant: either a
                   look-back at the previous occupant or a forward reference
                   to the current one
    """
    idx = topo.get(commit)
    if idx is None:
        return "unknown", None
    last_a = max(e for e in ev if e[2] == "A")
    if idx >= last_a[0]:
        return "current", None
    prior = [e for e in ev if e[0] <= idx]
    last = prior[-1] if prior else None
    if last and last[2] == "A":
        return "prior-occupant", next(e for e in ev if e[0] > last[0] and e[2] == "D")[1]
    if last and last[1] == commit:
        return "prior-occupant", last[1]
    next_a = next(e for e in ev if e[0] > idx and e[2] == "A")
    end = last[1] if last else None
    return ("pre-creation" if next_a == last_a else "vacant-earlier"), end


def blame_lines(repo, path, lines):
    """Return {final_line: commit} for the requested lines of `path` at HEAD."""
    args = ["blame", "--porcelain"]
    for n in sorted(lines):
        args += ["-L", "%d,%d" % (n, n)]
    out = git(repo, *args, "HEAD", "--", path).decode("utf-8", "replace")
    res = {}
    for line in out.splitlines():
        m = re.match(r"^([0-9a-f]{40}) \d+ (\d+)(?: \d+)?$", line)
        if m:
            res[int(m.group(2))] = m.group(1)
    return res


def occupant_mission(target):
    return "SB-P-1.17" if target.endswith("1.51.md") else "SB-P-1.12"


def path_missions(path):
    """Mission IDs named by path segments, e.g. `SB-P-1.12`, `SB-P-1.12-EIS.md`."""
    found = set()
    for seg in path.split("/"):
        m = re.match(r"(SB-[A-Z]+(?:-[A-Z]+)*-\d+\.\d+)(?=$|[-_.])", seg)
        if m:
            found.add(m.group(1))
    return found


def classify(rc, form, era, line_text, referrer, target):
    base = target.rsplit("/", 1)[1]
    mission = occupant_mission(target)
    missions = path_missions(referrer)
    in_mission = rc in ("live-numbered", "preserved-snapshot") or mission in missions
    if form == "other-directory-path":
        return "false positive", "names a different tracked directory, not communication/live/"
    if rc in ("live-numbered", "preserved-snapshot") and referrer.rsplit("/", 1)[1] == base:
        return "self-reference", "file names itself (live original or identical-blob snapshot)"
    if rc == "workstream-record":
        return "self-reference", "SB-GOV-LEGACY-LIVE-1.0 inventory / governance record"
    if era in ("prior-occupant", "vacant-earlier"):
        return "false positive", "line authored before an earlier occupant of the reused path was replaced"
    if era == "unknown":
        return "ambiguous", "line commit not placed in baseline history"
    if rc == "live-active-pair":
        return "ambiguous", "active SB-P-1.18 pair (read-only); manual review"
    if rc in ("executable-or-config", "current-governance"):
        if era == "current" and rc == "executable-or-config" and \
                form in ("exact-path", "exact-path-url", "relative-path-resolves"):
            return "active dependency", "executable/config file names the current live path"
        return "ambiguous", "%s file; manual review (%s era)" % (rc, era)
    if era == "pre-creation":
        if in_mission:
            return "historic reference", "forward reference written in %s before the file was created" % mission
        return "false positive", "authored before the current occupant existed, outside %s" % mission
    if rc in ("live-numbered", "preserved-snapshot"):
        return "historic reference", "cross-reference inside the numbered historical chain"
    if form == "relative-path-unresolved":
        return "ambiguous", "relative live/ variant does not resolve to the target path"
    if rc == "historical-record":
        if missions and not in_mission:
            return "ambiguous", "current-era line in a record of %s, not %s" % (
                "/".join(sorted(missions)), mission)
        if form in ("exact-path", "exact-path-url", "relative-path-resolves"):
            return "historic reference", "historical record cites the current live path"
        if in_mission or "live" in line_text.lower():
            return "historic reference", "basename/stem in %s record or live-labelled line" % mission
        return "ambiguous", "basename/stem without live or mission context"
    return "ambiguous", "unclassified referrer location"


def context(line, start, end, width=90):
    lo, hi = max(0, start - width), min(len(line), end + width)
    s = ("…" if lo else "") + line[lo:hi] + ("…" if hi < len(line) else "")
    # Right-trimmed so Markdown hard-break spaces do not become trailing whitespace.
    return s.replace("\t", " ").replace("\r", " ").rstrip()


def main():
    ap = argparse.ArgumentParser()
    ap.add_argument("--repo", required=True)
    ap.add_argument("--out", required=True, help="TSV output path (outside the repo)")
    a = ap.parse_args()
    repo = a.repo

    head = git(repo, "rev-parse", "HEAD").decode().strip()
    if head != BASELINE:
        sys.exit("HEAD %s != baseline %s" % (head, BASELINE))
    if git(repo, "status", "--porcelain", "--untracked-files=no").strip():
        sys.exit("tracked working tree is not clean")

    # 1. Enumerate tracked entries (mode, blob, path) with `git ls-files -s -z`.
    entries = []
    for rec in git(repo, "ls-files", "-s", "-z").split(b"\0"):
        if rec:
            meta, path = rec.split(b"\t", 1)
            mode, sha, stage = meta.decode().split()
            entries.append((path.decode("utf-8"), mode, sha, stage))
    entries.sort()
    modes = collections.Counter(e[1] for e in entries)
    submodules = [e[0] for e in entries if e[1] == "160000"]
    symlinks = [e[0] for e in entries if e[1] == "120000"]
    regular = [e for e in entries if e[1] in ("100644", "100755")]
    blobs = read_blobs(repo, sorted({e[2] for e in regular}))
    blob_index = collections.defaultdict(list)
    for p, _, sha, _ in entries:
        blob_index[sha].append(p)

    # 2. Inventory: the 90 numbered live files.
    live = sorted(e[0] for e in entries if LIVE_RE.fullmatch(e[0]))
    assert len(live) == 90, len(live)
    live_set = set(live)
    live_sha = {e[0]: e[2] for e in entries if e[0] in live_set}
    by_base = {p.rsplit("/", 1)[1]: p for p in live}
    n_instr = sum(1 for p in live if "/instruction" in p)
    paired = sum(1 for p in live if "/instruction" in p and p.replace("/instruction", "/report") in live_set)
    unpaired = sorted(p for p in live if "/instruction" in p and p.replace("/instruction", "/report") not in live_set)

    # PR #1070 manifest comparison: source blob, destination, snapshot blob.
    man = blobs[next(e[2] for e in entries if e[0] == PR1070_MANIFEST)]
    manifest = {}
    for row in man.decode("utf-8").splitlines():
        cells = [c.strip().strip("`") for c in row.split("|")]
        if len(cells) > 9 and LIVE_RE.fullmatch(cells[1]):
            manifest[cells[1]] = (cells[2], cells[9])
    sha_of = {e[0]: e[2] for e in entries}
    dest, cmp_rows = {}, []
    for p in live:
        m_sha, m_dest = manifest.get(p, ("", ""))
        snap_sha = sha_of.get(m_dest, "")
        dest[p] = m_dest
        cmp_rows.append((p, live_sha[p] == m_sha, snap_sha == live_sha[p]))
    other_copies = {p: sorted(x for x in blob_index[live_sha[p]] if x != p and x != dest[p]) for p in live}

    # 3. Scan every regular tracked file.
    text_files, non_utf8, binary = [], [], []
    target_hits, dir_hits = [], []
    binary_raw_hits = []
    name_bytes = [b.encode() for b in by_base] + [b"communication/live"]
    for path, mode, sha, _ in regular:
        data = blobs[sha]
        if b"\0" in data:
            binary.append((path, len(data)))
            for nb in name_bytes:
                if nb.lower() in data.lower():
                    binary_raw_hits.append((path, nb.decode()))
            continue
        try:
            text = data.decode("utf-8-sig")
        except UnicodeDecodeError:
            text = data.decode("latin-1")
            non_utf8.append(path)
        text_files.append(path)
        for ln, line in enumerate(text.split("\n"), 1):
            for m in NAME_RE.finditer(line):
                base = m.group(1).lower() + ".md"
                if base not in by_base:
                    continue
                target = by_base[base]
                tok = TOKEN_RE.search(line[:m.start()]).group(0)
                form, pb, resolved = classify_form(path, tok, bool(m.group(2)), target)
                target_hits.append(dict(path=path, line=ln, col=m.start() + 1, target=target,
                                        base=base, form=form, pb=pb,
                                        token=(tok + m.group(0)).strip(),
                                        resolved=resolved, text=line,
                                        case_variant=m.group(0) != m.group(0).lower(),
                                        ctx=context(line, m.start(), m.end())))
            for m in DIR_RE.finditer(line):
                nxt = m.group(1)
                seg = re.split(r"[/\\#]", nxt.replace("%2F", "/").replace("%2f", "/"))[0]
                if seg.lower() in by_base:
                    continue  # recorded as a per-target hit
                if seg.lower() in ("instruction.md", "report.md"):
                    kind = "active-pair"
                elif NAME_RE.fullmatch(seg) or re.fullmatch(r"(?:instruction|report)1\.\d+(?:\.md)?", seg, re.I):
                    kind = "non-target-numbered"
                elif seg in ("", "*", "**", "*.md", "**/*") or "*" in seg:
                    kind = "directory-or-glob"
                else:
                    kind = "other-entry"
                dir_hits.append(dict(path=path, line=ln, col=m.start() + 1, kind=kind,
                                     token=m.group(0), text=line,
                                     ctx=context(line, m.start(), m.end())))

    # 4. Occupancy era: blame each hit line and place its commit among the
    # path's A/D events in topological order.
    topo, events = build_events(repo, live)
    lines_by_file = collections.defaultdict(set)
    for h in target_hits:
        lines_by_file[h["path"]].add(h["line"])
    blame = {}
    for p in sorted(lines_by_file):
        for ln, c in blame_lines(repo, p, lines_by_file[p]).items():
            blame[(p, ln)] = c
    prior_dest_cache = {}

    def prior_destination(target, end_commit):
        key = (target, end_commit)
        if key not in prior_dest_cache:
            try:
                sha = git(repo, "rev-parse", "%s^:%s" % (end_commit, target)).decode().strip()
                found = sorted(blob_index.get(sha, []))
            except subprocess.CalledProcessError:
                sha, found = "", []
            prior_dest_cache[key] = (sha, found)
        return prior_dest_cache[key]

    rows = []
    for h in sorted(target_hits, key=lambda h: (h["path"], h["line"], h["col"], h["target"])):
        commit = blame.get((h["path"], h["line"]), "")
        era, end_commit = occupancy(topo, events[h["target"]], commit)
        if h["form"] == "other-directory-path":
            era = "n/a"
        rc = referrer_class(h["path"], live_set)
        cls, why = classify(rc, h["form"], era, h["text"], h["path"], h["target"])
        if h["case_variant"]:
            why += "; case variant"
        if h["form"] == "other-directory-path":
            hit_exists = h["resolved"] in sha_of
            destination = "n/a (names %s%s)" % (h["resolved"], "" if hit_exists else " - not tracked")
        elif cls == "false positive" and end_commit is None:
            destination = "n/a (no earlier occupant; line predates the path)"
        elif cls == "false positive":
            psha, found = prior_destination(h["target"], end_commit)
            destination = ("prior occupant blob %s at %s" % (psha[:12], ", ".join(found))) if found \
                else "prior occupant blob %s not present at baseline" % (psha[:12] or "unknown")
        else:
            destination = dest[h["target"]]
        rows.append([h["path"], str(h["line"]), str(h["col"]), h["target"], h["base"], h["form"],
                     h["pb"], h["token"], rc, commit[:12], era, cls, why, destination,
                     ACTION[cls], h["ctx"]])

    # Directory-level rows: only directory/glob mentions (the ones that can
    # cover all 90 files). Active-pair, non-target-numbered and other entries
    # are counted in the summary only.
    for h in sorted(dir_hits, key=lambda h: (h["path"], h["line"], h["col"])):
        if h["kind"] != "directory-or-glob":
            continue
        rc = referrer_class(h["path"], live_set)
        cls = "self-reference" if rc == "workstream-record" else (
            "historic reference" if rc in ("historical-record", "live-numbered", "preserved-snapshot")
            else "ambiguous")
        why = "directory-level mention of communication/live/, not file-specific"
        rows.append([h["path"], str(h["line"]), str(h["col"]), "communication/live/ (all 90)", "*",
                     "directory-or-glob", "directory", h["token"], rc, "", "n/a", cls, why,
                     "n/a (directory)", ACTION[cls], h["ctx"]])

    def clean(v):
        return v.replace("\t", " ").replace("\n", " ").replace("\r", " ")

    tsv_lines = ["\t".join(HEADER)]
    for i, r in enumerate(rows, 1):
        tsv_lines.append("\t".join(["H%05d" % i] + [clean(v) for v in r]))
    tsv = ("\n".join(tsv_lines) + "\n").encode("utf-8")
    with open(a.out, "wb") as f:
        f.write(tsv)

    # 5. Summary.
    P = print
    tgt_rows = [r for r in rows if r[5] != "directory-or-glob"]
    P("baseline_head=%s verified=yes clean_tree=yes" % head)
    P("python=%s" % sys.version.split()[0])
    P("git=%s" % git(repo, "--version").decode().strip())
    P("tracked_entries=%d modes=%s submodules=%d symlinks=%d" % (
        len(entries), dict(sorted(modes.items())), len(submodules), len(symlinks)))
    P("tracked_bytes=%d" % sum(len(blobs[e[2]]) for e in regular))
    P("text_scanned=%d utf8=%d non_utf8_latin1=%d" % (len(text_files), len(text_files) - len(non_utf8), len(non_utf8)))
    for p in non_utf8:
        P("  non_utf8: %s" % p)
    P("binary_files=%d binary_bytes=%d binary_raw_byte_name_hits=%d" % (
        len(binary), sum(b for _, b in binary), len(binary_raw_hits)))
    for p, n in binary:
        P("  binary: %s (%d bytes)" % (p, n))
    for p, n in binary_raw_hits:
        P("  binary_raw_hit: %s %s" % (p, n))
    P("access_failures=0")
    P("live_numbered=%d instructions=%d reports=%d paired=%d unpaired_instructions=%d" % (
        len(live), n_instr, len(live) - n_instr, paired, len(unpaired)))
    P("unpaired: %s" % " ".join(p.rsplit("/", 1)[1] for p in unpaired))
    P("excluded_from_targets: %s (active SB-P-1.18 pair; scanned as referrers, not targets)" % " ".join(ACTIVE_PAIR))
    P("pr1070_manifest_rows=%d source_blob_match=%d snapshot_blob_match=%d" % (
        len(manifest), sum(1 for r in cmp_rows if r[1]), sum(1 for r in cmp_rows if r[2])))
    P("additional_identical_blob_copies=%d" % sum(len(v) for v in other_copies.values()))
    for p, v in other_copies.items():
        for x in v:
            P("  copy: %s == %s" % (p, x))
    P("target_hits=%d directory_glob_hits=%d tsv_rows=%d distinct_referrers=%d" % (
        len(tgt_rows), len(rows) - len(tgt_rows), len(rows), len({r[0] for r in tgt_rows})))
    P("dir_mentions_by_kind=%s" % dict(sorted(collections.Counter(h["kind"] for h in dir_hits).items())))
    for label, col in (("form", 5), ("referrer_class", 8), ("era", 10), ("classification", 11)):
        P("by_%s=%s" % (label, dict(sorted(collections.Counter(r[col] for r in tgt_rows).items()))))
    P("dir_by_classification=%s" % dict(sorted(collections.Counter(
        r[11] for r in rows if r[5] == "directory-or-glob").items())))
    per_target = collections.Counter(r[3] for r in tgt_rows)
    P("targets_with_zero_hits=%s" % [p for p in live if per_target[p] == 0])
    P("per_target_classification:")
    for p in live:
        c = collections.Counter(r[11] for r in tgt_rows if r[3] == p)
        P("  %s total=%d %s" % (p.rsplit("/", 1)[1], per_target[p], dict(sorted(c.items()))))
    P("unresolved (active dependency + ambiguous):")
    for r in rows:
        if r[11] in ("active dependency", "ambiguous"):
            P("  %s:%s [%s|%s|%s|%s] %s" % (r[0], r[1], r[3].rsplit("/", 1)[-1], r[5], r[8], r[10], r[11]))
    P("tsv_sha256=%s" % hashlib.sha256(tsv).hexdigest())


if __name__ == "__main__":
    main()
