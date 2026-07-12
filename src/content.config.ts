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
    z
      .object({
        title: z.string(),
        hook: z.string().max(160),
        problem: z.string(),
        role: z.string(),
        year: z.number().int().min(2000).max(2100),
        order: z.number().int(),
        stack: z.array(z.string()).min(1).max(5),
        /** Shipping status, where it is not obvious. Stated, never implied. */
        status: z.string().optional(),
        /**
         * The one fact worth reading if you read nothing else, set at scan size.
         * It must be a number the code can back, not a number that sounds good.
         */
        figure: z.object({ value: z.string(), label: z.string() }),
        cover: image().optional(),
        coverAlt: z.string().optional(),
        links: z
          .array(z.object({ label: z.string(), href: z.string().url() }))
          .default([]),
        proof: z.array(z.string()).default([]),
      })
      // An image with an empty alt declares a meaningful screenshot decorative.
      // axe cannot catch that, so the build does.
      .superRefine((data, ctx) => {
        if (data.cover && !data.coverAlt?.trim()) {
          ctx.addIssue({
            code: z.ZodIssueCode.custom,
            path: ["coverAlt"],
            message: "A project with a cover image must describe it in coverAlt.",
          });
        }
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
    engagement: z.enum(["permanent", "contract", "internship", "part-time"]).default("permanent"),
    /**
     * Why a role ended, where the dates would otherwise invite a worse guess.
     * A reader who is not told a company ran out of runway assumes you left.
     */
    note: z.string().optional(),
  }),
});

export const collections = { projects, roles };
