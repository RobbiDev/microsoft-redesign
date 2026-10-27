// Where this app is mounted on the domain: '/main' on microsoft.robbyj.dev, '' in local dev.
// It comes from Vite's `base` setting (the root build passes --base=/main/).
export const BASE = import.meta.env.BASE_URL.replace(/\/$/, '');

export const isInsideApp = (path) => !BASE || path === BASE || path.startsWith(`${BASE}/`);

// '/store' → '/main/store'. Leaves #anchors, external URLs and already-based paths alone.
export const withBase = (path) =>
  path.startsWith('/') && !path.startsWith('//') && !isInsideApp(path) ? `${BASE}${path}` : path;

// '/main/store' → '/store', for matching routes.
export const stripBase = (path) => (BASE && isInsideApp(path) ? path.slice(BASE.length) || '/' : path);

// Files in public/ ('/images/…', '/video/…') live under the base too.
export const asset = (path) => `${BASE}${path}`;
