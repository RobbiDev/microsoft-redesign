# Website

The redesigned Microsoft site. React + Vite, no backend — every page is static and interactive in the browser.

```bash
npm install
npm run dev      # http://localhost:5173
npm run build    # static output in dist/
```

## Project structure

```
src/
├── main.jsx                  entry point
├── app/
│   ├── App.jsx               the route list, wrapped in PageLayout
│   └── router.js             tiny History API router (no dependency)
├── pages/                    one folder per page
│   ├── still-redesigning/    shown for every path that isn't built yet (the 404)
│   ├── store/                Microsoft Store landing page (/store)
│   ├── microsoft-365/        8 pages that replace ~45 on microsoft.com (Personal, Business, Enterprise,
│   │                         Education, Copilot, Apps, Plans, Resources). plans.js and apps.js are the
│   │                         single source for every plan and app; redirects.js forwards old paths
│   └── home/
│       ├── HomePage.jsx      composes the page from its sections
│       ├── homeContent.js    the page's copy and data
│       └── components/       sections used only on this page
│           ├── Hero/         Hero.jsx + Hero.module.css
│           ├── Explore/
│           └── …
├── components/               shared by two or more pages
│   ├── layout/               the shell every page wraps in
│   │   ├── PageLayout/       Header + <main> + Footer + floating buttons
│   │   ├── Header/
│   │   ├── Footer/
│   │   └── FloatingActions/
│   └── ui/                   small building blocks (Icon, Link, Logo, ImageSlot)
├── data/
│   ├── site.js               site-wide content: nav, product hubs, "All Microsoft" menu, search, accounts,
│   │                         footer, promo bar, plus link helpers (hrefFor, pathFor)
│   └── products.js           products shared by the homepage and the Store
├── hooks/                    shared React hooks
└── styles/                   design tokens, global styles, fonts
public/
├── fonts/                    self-hosted Figtree
├── images/                   products/, business/, m365/ (with app icons)
└── video/                    homepage background video + poster frame
```

### Rules

1. **One folder per component**, named in PascalCase, holding `Name.jsx` and `Name.module.css`. Pieces that only
   that component uses live in the same folder (e.g. `Header/MobileBar.jsx`).
2. **Start local, promote when shared.** A component used by one page lives in `pages/<page>/components/`.
   A section with several pages (like `microsoft-365/`) keeps components its pages share in its own `components/`.
   When a second page needs it, move it to `components/ui/` (building block) or `components/layout/` (page shell).
3. **No `index.js` barrel files.** Every file has a real name, so searching "Hero" finds `Hero.jsx`.
4. **Imports:** use `./` within the same folder, and `@/` (which points at `src/`) for everything else,
   e.g. `import Icon from '@/components/ui/Icon/Icon.jsx'`. Never `../../`.
5. **Content stays out of components.** Page copy goes in that page's `*Content.js`; site-wide copy goes in `data/site.js`.

### Pages and links

Every link on the site points at a real path (e.g. `/surface/accessories`). Paths without a page show
**Still being redesigned**, so nothing is a dead end. Product hubs follow the URL: anything under `/surface`
shows Surface's navigation, anything under `/store` shows the Microsoft Store's. XBOX links out to xbox.com, and
shopping links (Deals, Gift cards, Trade-in…) live under `/store` — see `linkTargets` in `data/site.js`.

`npm run build` also writes `dist/404.html` (a copy of `index.html`) so deep links work on static hosts.

### Microsoft 365: one source of truth

Every plan lives once in `pages/microsoft-365/plans.js` and every app once in `apps.js`. Pages pick
what they need (`plansFor('business')`, `planById('e7')`, `appsById([...])`), so changing a price or a
feature list updates every page that shows it. Old addresses (e.g. `/microsoft-365/word`) forward to
the section that now covers them via `redirects.js`, wired into `redirects` in `App.jsx`.

### Adding a page

1. Create `src/pages/about/AboutPage.jsx` with its sections in `src/pages/about/components/`
   and its copy in `src/pages/about/aboutContent.js`. Give it a tab title: `AboutPage.title = 'About – Microsoft Redesign'`.
2. Register it in `routes` in `src/app/App.jsx`: `'/about': AboutPage`. Header and footer come from the layout.

Images without artwork use `<ImageSlot placeholder>`; pass `src` once there's a real image.
