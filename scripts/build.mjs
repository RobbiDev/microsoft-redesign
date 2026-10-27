// Builds the whole site into dist/ for microsoft.robbyj.dev:
//   /            home/ (the README as a website, plus links to every redesign)
//   /main/       website/ (the microsoft.com redesign)
//   /404.html    the redesign app, so deep links like /main/store work on any static host
//                (GitHub Pages, Netlify, Vercel and Cloudflare Pages all serve 404.html for unknown paths)
// Add future redesigns (e.g. /copilot) by building them into dist/<path>/ the same way.
import { execSync } from 'node:child_process';
import { copyFileSync, cpSync, existsSync, rmSync, writeFileSync } from 'node:fs';

const DIST = 'dist';
const DOMAIN = 'microsoft.robbyj.dev';
// Where the site is served from: '' on microsoft.robbyj.dev, '/microsoft-redesign' on robbidev.github.io.
// The GitHub Pages workflow sets this; locally it defaults to the domain root.
const SITE_BASE = (process.env.SITE_BASE || '').replace(/\/+$/, '');
const run = (cmd, cwd) => execSync(cmd, { cwd, stdio: 'inherit' });

rmSync(DIST, { recursive: true, force: true });

// 1. The microsoft.com redesign at /main/
if (!existsSync('website/node_modules')) run('npm ci', 'website');
execSync(`npx vite build --base=${SITE_BASE}/main/ --outDir=../${DIST}/main --emptyOutDir`, {
  cwd: 'website',
  stdio: 'inherit',
  env: { ...process.env, VITE_SITE_BASE: SITE_BASE },
});

// 2. The home page at /, with the repo README and header image beside it
cpSync('home', DIST, { recursive: true, filter: (src) => !src.endsWith('home/README.md') });
copyFileSync('README.md', `${DIST}/README.md`);
copyFileSync('headerV1.png', `${DIST}/headerV1.png`);

// 3. Unknown paths boot the redesign app, which shows the page or "Still being redesigned"
copyFileSync(`${DIST}/main/index.html`, `${DIST}/404.html`);

// 4. Custom domain for GitHub Pages (ignored by other hosts), and no Jekyll processing
writeFileSync(`${DIST}/CNAME`, `${DOMAIN}\n`);
writeFileSync(`${DIST}/.nojekyll`, '');

console.log(`\nBuilt ${DIST}/ for ${DOMAIN}${SITE_BASE ? ` (served under ${SITE_BASE})` : ''}`);
