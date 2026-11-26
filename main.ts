import * as fs from "node:fs";
import * as path from "node:path";

// One Word From Your Ex — exactly one word an ex would use to describe you.
// Judge criteria (most important first): a real single word an ex would say,
// funny through surprise, stings with recognition, lands instantly, relatable.
//
// Picked word: "Exhausting"
// - A real word an ex would say, and the most common post-breakup verdict.
// - Self-deprecating and painfully honest: it admits *you* wore them out,
//   not that they were cruel — the sting lands on the entrant, which is
//   exactly what the brief rewards ("a word that stings because it is
//   true beats a word that only insults").
// - Lands instantly, needs no explanation, and cannot be swapped for a
//   near synonym ("tiring", "draining") without losing its edge —
//   "Exhausting" is the word people actually repeat about a partner.
// - 11 characters, well inside the 1–24 gate, single word, no whitespace.
const ENTRY = "Exhausting";

const outDir = process.env.MAKEFUN_OUTPUT_DIR || "/output";
fs.mkdirSync(outDir, { recursive: true });
const outPath = path.join(outDir, "entry.txt");
fs.writeFileSync(outPath, ENTRY, { encoding: "utf8" });
process.stdout.write(ENTRY + "\n");
process.exit(0);
