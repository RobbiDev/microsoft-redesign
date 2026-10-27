# Home page

Landing page for **microsoft.robbyj.dev**. It renders the repo's root `README.md` as a website and lists every redesign.

- Plain HTML, CSS and JavaScript. The root build (`npm run build` in the repo root) copies this folder to the site
  root, with `README.md` and `headerV1.png` beside it, and builds the redesigns into their paths (`/main`, …).
- The README is fetched at runtime (the built copy first, then GitHub's `main` branch), so README edits show up on
  the next build or straight from GitHub.
- To add a redesign, add an entry to `REDESIGNS` at the top of `app.js` (e.g. `{ name, path: "/copilot", ... }`),
  and build it into `dist/<path>/` in `scripts/build.mjs`.
