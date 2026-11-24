import { mkdirSync, writeFileSync } from "node:fs";

const text =
  "v3.2.1: fixed a bug where sneezing while driving closed both eyes for 0.4 seconds at highway speed.";

// The gate only accepts 1-160 characters: refuse to write an out-of-range text.
if ([...text].length < 1 || [...text].length > 160) {
  throw new Error(`entry text must be 1-160 characters, got ${[...text].length}`);
}

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", text, "utf8");
