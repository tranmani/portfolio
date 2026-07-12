# tranmani.com

Personal site. Astro, static output, deployed on Vercel.

    npm install
    npm run dev        # local
    npm run check      # astro check (typechecks .astro too)
    npm run test       # palette contrast + content invariants
    npm run build      # -> dist/

Content lives in `src/content/{projects,roles}` and is validated by Zod in
`src/content.config.ts`. A project missing a field, or a cover image without an
alt, fails the build rather than shipping.
