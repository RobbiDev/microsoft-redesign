# Home page

Landing page for **microsoft.robbyj.dev**. It renders the repo's root `README.md` as a website and lists every redesign.

- Static — no build step. Serve this folder as the site root.
- The README is fetched live (from `../README.md` if served, otherwise from GitHub's `main` branch), so edits to the README show up automatically.
- To add a redesign, add an entry to `REDESIGNS` at the top of `app.js` (e.g. `{ name, path: "/copilot", ... }`).
