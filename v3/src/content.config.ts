import { defineCollection, z } from "astro:content";
import { glob } from "astro/loaders";

/**
 * One schema, defined once. v2 had three competing shapes: an unused IProject
 * interface, an incompatible inline prop type inside ProjectCard, and an
 * untyped config object. If a project here is missing a field, the build fails.
 */
const projects = defineCollection({
  loader: glob({ pattern: "**/*.md", base: "./src/content/projects" }),
  schema: ({ image }) =>
    z.object({
      title: z.string(),
      /** The idea a human repeats at lunch. One line. */
      hook: z.string().max(140),
      /** The real constraint, stated honestly. */
      problem: z.string(),
      role: z.string(),
      year: z.number(),
      order: z.number(),
      stack: z.array(z.string()).min(1).max(5),
      cover: image().optional(),
      coverAlt: z.string().optional(),
      /** Every link must resolve. No dead Vercel preview branches. */
      links: z
        .array(
          z.object({
            label: z.string(),
            href: z.string().url(),
          }),
        )
        .default([]),
      /**
       * Verifiable facts only. If a number cannot be substantiated it does not
       * go on the page. This is the field v2 filled with `LATENCY: 14ms`.
       */
      proof: z.array(z.string()).default([]),
    }),
});

const roles = defineCollection({
  loader: glob({ pattern: "**/*.md", base: "./src/content/roles" }),
  schema: z.object({
    title: z.string(),
    company: z.string(),
    place: z.string(),
    start: z.string(),
    end: z.string(),
    order: z.number(),
    current: z.boolean().default(false),
    /** Contract / interim engagements say so, rather than reading as churn. */
    engagement: z.enum(["permanent", "contract", "internship", "part-time"]).default("permanent"),
  }),
});

export const collections = { projects, roles };
