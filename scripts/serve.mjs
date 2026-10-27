// Serves dist/ like a static host would: real files first, otherwise 404.html with a 404 status.
// usage: npm run preview  →  http://localhost:4173
// SITE_BASE=/microsoft-redesign npm run preview serves it under that path, like robbidev.github.io does.
import { createServer } from 'node:http';
import { existsSync, readFileSync, statSync } from 'node:fs';
import { extname, join, normalize } from 'node:path';

const ROOT = 'dist';
const PORT = Number(process.env.PORT) || 4173;
const SITE_BASE = (process.env.SITE_BASE || '').replace(/\/+$/, '');
const TYPES = {
  '.html': 'text/html', '.js': 'text/javascript', '.css': 'text/css', '.md': 'text/markdown; charset=utf-8',
  '.png': 'image/png', '.avif': 'image/avif', '.jpg': 'image/jpeg', '.svg': 'image/svg+xml',
  '.mp4': 'video/mp4', '.woff2': 'font/woff2', '.json': 'application/json',
};

createServer((req, res) => {
  let path = normalize(decodeURIComponent(new URL(req.url, 'http://x').pathname)).replace(/^(\.\.[/\\])+/, '');
  if (SITE_BASE) {
    if (path !== SITE_BASE && !path.startsWith(`${SITE_BASE}/`)) return res.writeHead(404).end('Not under SITE_BASE');
    path = path.slice(SITE_BASE.length) || '/';
  }
  let file = join(ROOT, path);
  if (existsSync(file) && statSync(file).isDirectory()) file = join(file, 'index.html');
  const found = existsSync(file);
  if (!found) file = join(ROOT, '404.html');
  res.writeHead(found ? 200 : 404, { 'Content-Type': TYPES[extname(file)] ?? 'application/octet-stream' });
  res.end(readFileSync(file));
}).listen(PORT, () => console.log(`Serving ${ROOT}/ at http://localhost:${PORT}${SITE_BASE}/`));
