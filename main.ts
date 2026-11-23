// One Line, Zero Use: The Useless Superpower Sprint
// Entry program (program/v1). Writes a single original one-liner naming a
// hilariously useless superpower to /output/entry.txt.
//
// The line: a fresh, specific, visual superpower with the joke paying off in
// the last few words — rain-summoning that only ever falls on its owner,
// indoors. No toast, no passwords, nothing borrowed.

import { mkdirSync, readdirSync, rmSync, writeFileSync } from "node:fs";
import { join } from "node:path";

const LINE =
  "I can summon rain on command, but only directly above my own head and only indoors, so I'm the only superhero who needs an umbrella in my own living room.";

const OUT_DIR = "/output";

// Guard the gate: the sealed scorer only accepts 1–200 characters of
// non-whitespace text, so refuse to write an over-long line rather than
// silently submitting an invalid entry.
if (LINE.length < 1 || LINE.length > 200 || LINE.trim().length === 0) {
  throw new Error(`Line must be 1-200 characters, got ${LINE.length}`);
}

mkdirSync(OUT_DIR, { recursive: true });

// Clear only the contents of /output — never remove the mounted directory
// itself, since the grader mounts it root-owned.
for (const name of readdirSync(OUT_DIR)) {
  rmSync(join(OUT_DIR, name), { recursive: true, force: true });
}

writeFileSync(join(OUT_DIR, "entry.txt"), LINE + "\n", "utf8");
console.log(`Wrote ${LINE.length} characters to /output/entry.txt`);
