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
const run = (cmd, cwd) => execSync(cmd, { cwd, stdio: 'inherit' });

rmSync(DIST, { recursive: true, force: true });

// 1. The microsoft.com redesign at /main/
if (!existsSync('website/node_modules')) run('npm ci', 'website');
run(`npx vite build --base=/main/ --outDir=../${DIST}/main --emptyOutDir`, 'website');

// 2. The home page at /, with the repo README and header image beside it
cpSync('home', DIST, { recursive: true, filter: (src) => !src.endsWith('home/README.md') });
copyFileSync('README.md', `${DIST}/README.md`);
copyFileSync('headerV1.png', `${DIST}/headerV1.png`);

// 3. Unknown paths boot the redesign app, which shows the page or "Still being redesigned"
copyFileSync(`${DIST}/main/index.html`, `${DIST}/404.html`);

// 4. Custom domain for GitHub Pages (ignored by other hosts), and no Jekyll processing
writeFileSync(`${DIST}/CNAME`, `${DOMAIN}\n`);
writeFileSync(`${DIST}/.nojekyll`, '');

console.log(`\nBuilt ${DIST}/ for ${DOMAIN}`);
