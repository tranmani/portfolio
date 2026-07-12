// @ts-check
import { defineConfig } from "astro/config";
import tailwindcss from "@tailwindcss/vite";
import sitemap from "@astrojs/sitemap";

// https://astro.build/config
export default defineConfig({
  site: "https://tranmani.com",
  integrations: [sitemap()],
  // "always" inlined ~60KB into every page and made it uncacheable, which buys a
  // cold Lighthouse run and taxes every repeat visit and every navigation. "auto"
  // inlines only what is small enough to be worth it and leaves the rest to the
  // immutable cache in vercel.json.
  build: { inlineStylesheets: "auto" },
  vite: {
    plugins: [tailwindcss()],
  },
});
