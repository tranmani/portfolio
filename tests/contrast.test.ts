import { describe, expect, it } from "vitest";
import { readFileSync } from "node:fs";

/**
 * The palette's contrast ratios are asserted here rather than asserted in a
 * comment. A token that drops below WCAG AA fails the build instead of shipping
 * and waiting for someone to notice they cannot read the page.
 *
 * The tokens live on `.pc` in postcards.css. Text is set on the paper (`--card`)
 * and, outside the cards, on the page itself (`--bg`). Dark mode only swaps the
 * page and the paper, so the text tokens it inherits are checked against those.
 */
const css = readFileSync(new URL("../src/styles/postcards.css", import.meta.url), "utf8");

const block = (marker: string) => {
  const start = css.indexOf(marker);
  if (start < 0) throw new Error(`no block at ${marker}`);
  const chunk = css.slice(start, css.indexOf("}", start));
  const out: Record<string, string> = {};
  for (const [, k, v] of chunk.matchAll(/--([\w-]+):\s*(#[0-9a-f]{6})/gi)) out[k] = v;
  return out;
};

const srgb = (h: string) =>
  [1, 3, 5].map((i) => {
    const c = parseInt(h.slice(i, i + 2), 16) / 255;
    return c <= 0.03928 ? c / 12.92 : Math.pow((c + 0.055) / 1.055, 2.4);
  });

const luminance = (h: string) => {
  const [r, g, b] = srgb(h);
  return 0.2126 * r + 0.7152 * g + 0.0722 * b;
};

const ratio = (a: string, b: string) => {
  const [hi, lo] = [luminance(a), luminance(b)].sort((x, y) => y - x);
  return (hi + 0.05) / (lo + 0.05);
};

// Text must clear 4.5:1 (WCAG 1.4.3).
const TEXT = ["ink", "soft", "rose", "sea"];

const light = block(".pc {");
const dark = { ...light, ...block("@media (prefers-color-scheme: dark)") };

describe("light palette", () => {
  it("defines every token", () => {
    for (const token of [...TEXT, "bg", "card"]) {
      expect(light[token], `missing --${token}`).toBeDefined();
    }
  });

  it.each(TEXT)("%s clears 4.5:1 on the paper", (token: string) => {
    expect(ratio(light[token], light.card)).toBeGreaterThanOrEqual(4.5);
  });

  it.each(TEXT)("%s clears 4.5:1 on the page", (token: string) => {
    expect(ratio(light[token], light.bg)).toBeGreaterThanOrEqual(4.5);
  });

  it("white stamp and button text clears 4.5:1 on sea and rose", () => {
    for (const token of ["sea", "rose"]) {
      expect(ratio("#ffffff", light[token])).toBeGreaterThanOrEqual(4.5);
    }
  });
});

describe("dark palette", () => {
  it("swaps the page and the paper", () => {
    expect(dark.bg).not.toBe(light.bg);
    expect(dark.card).toBeDefined();
  });

  it.each(TEXT)("%s clears 4.5:1 on the paper", (token: string) => {
    expect(ratio(dark[token], dark.card)).toBeGreaterThanOrEqual(4.5);
  });
});
