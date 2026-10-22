import { getCollection, render } from "astro:content";
import type { ImageMetadata } from "astro";

/**
 * Every page reads the collections the same way, sorted the same way, so the
 * homepage, the CV, the project pages and the style previews cannot disagree
 * about what is on the site or in which order.
 */
const byOrder = (a: { data: { order: number } }, b: { data: { order: number } }) =>
  a.data.order - b.data.order;

export async function loadSite() {
  const projects = await Promise.all(
    (await getCollection("projects"))
      .sort(byOrder)
      .map(async (entry) => ({ entry, Content: (await render(entry)).Content })),
  );
  const roles = await Promise.all(
    (await getCollection("roles"))
      .sort(byOrder)
      .map(async (entry) => ({ entry, Content: (await render(entry)).Content })),
  );
  const shipped = (await getCollection("shipped")).sort(byOrder);
  return { projects, roles, shipped };
}

export const engagementLabel = {
  contract: "Contract",
  internship: "Internship",
  "part-time": "Part time",
  permanent: "",
} satisfies Record<string, string>;

/**
 * Screenshots live in src/assets/projects, named after the project's id. They are
 * looked up rather than declared in frontmatter so a project without one simply
 * renders without one.
 */
const covers = import.meta.glob<{ default: ImageMetadata }>("../assets/projects/*.png", {
  eager: true,
});

const coverAlts: Record<string, string> = {
  perron:
    "The Perron website: 'Chat with the platform you're standing on', with an App Store button and a list of station chat, train rooms and live departures.",
  lorenly:
    "The Lorenly website: 'Everything your bookings need, in one place', beside a card listing today's appointments.",
  fammedley:
    "The FamMedley website: 'Managing your family, simplified', surrounded by chore, grocery and check-in cards.",
};

/** Phone screenshots for the shorter entries, taken from each product's own site. */
const shots = import.meta.glob<{ default: ImageMetadata }>("../assets/shipped/*.{png,webp}", {
  eager: true,
});

const shotAlts: Record<string, string> = {
  "ten-million-cells": "10 Million Cells: a disc of coloured cells half dug away, with loose cells falling below it.",
  "scrap-heap": "Scrap Heap: the salvage yard, a grid of scrap items with rarities and prices.",
  moonwindow: "Mahjong Moonwindow: a stacked board of pale tiles with leaves, stones and seeds.",
  playwave: "Playwave: the now playing screen, with album art, playback controls and an up next list.",
};

const shotFiles: Record<string, string> = {
  "ten-million-cells": "tmc.webp",
  "scrap-heap": "scrapheap.webp",
  moonwindow: "moonwindow.webp",
  playwave: "playwave.webp",
};

export function shotFor(id: string) {
  const file = shotFiles[id];
  const src = file ? shots[`../assets/shipped/${file}`]?.default : undefined;
  return src ? { src, alt: shotAlts[id] } : undefined;
}

export function coverFor(id: string) {
  const src = covers[`../assets/projects/${id}.png`]?.default;
  const alt = coverAlts[id];
  return src && alt ? { src, alt } : undefined;
}

/** Reading time, from the words actually on the page rather than a guess. */
export function readSeconds(...texts: (string | undefined)[]) {
  const words = texts.join(" ").split(/\s+/).filter(Boolean).length;
  return Math.max(30, Math.round((words / 230) * 60));
}

export const minutes = (s: number) => `${Math.max(1, Math.round(s / 60))} min`;
export const clock = (s: number) => `${Math.floor(s / 60)}:${String(s % 60).padStart(2, "0")}`;
