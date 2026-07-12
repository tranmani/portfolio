import { describe, expect, it } from "vitest";
import { readFileSync } from "node:fs";

/**
 * The palette's contrast ratios are asserted here rather than asserted in a
 * comment. A token that drops below WCAG AA fails the build instead of shipping
 * and waiting for someone to notice they cannot read the page.
 */
const css = readFileSync(new URL("../src/styles/global.css", import.meta.url), "utf8");

const block = (marker: string) => {
  const start = css.indexOf(marker);
  const chunk = css.slice(start, css.indexOf("}", start));
  const out: Record<string, string> = {};
  for (const [, k, v] of chunk.matchAll(/--c-([\w-]+):\s*(#[0-9a-f]{6})/gi)) out[k] = v;
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

// Text must clear 4.5:1 (WCAG 1.4.3). A UI boundary must clear 3:1 (1.4.11) -
// axe-core does not implement boundary contrast, so nothing else catches this.
const TEXT = ["fg", "fg-muted", "fg-subtle", "accent", "live"];
const BOUNDARY = ["border-strong"];

const palettes: [string, Record<string, string>][] = [
  ["light", block(":root {")],
  ["dark", block("@media (prefers-color-scheme: dark)")],
];

describe.each(palettes)("%s palette", (_mode: string, palette: Record<string, string>) => {
  it("defines every token", () => {
    for (const token of [...TEXT, ...BOUNDARY, "bg"]) {
      expect(palette[token], `missing --c-${token}`).toBeDefined();
    }
  });

  it.each(TEXT)("%s clears 4.5:1 against the background", (token: string) => {
    expect(ratio(palette[token], palette.bg)).toBeGreaterThanOrEqual(4.5);
  });

  it.each(BOUNDARY)("%s clears 3:1 against the background", (token: string) => {
    expect(ratio(palette[token], palette.bg)).toBeGreaterThanOrEqual(3);
  });

  it("the accent is readable to its own foreground", () => {
    expect(ratio(palette["accent-fg"], palette.accent)).toBeGreaterThanOrEqual(4.5);
  });
});
