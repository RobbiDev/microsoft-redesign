import { copyFileSync } from 'node:fs';
import { join } from 'node:path';
import { fileURLToPath, URL } from 'node:url';
import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// Static hosts (GitHub Pages, Netlify, etc.) serve 404.html for unknown URLs. Making it a copy of
// index.html lets the app load on any path and show the right page — or "Still being redesigned".
let outDir = 'dist';
const spaFallback = {
  name: 'spa-fallback',
  configResolved(config) {
    outDir = config.build.outDir;
  },
  closeBundle() {
    copyFileSync(join(outDir, 'index.html'), join(outDir, '404.html'));
  },
};

export default defineConfig({
  plugins: [react(), spaFallback],
  resolve: {
    // `@/` points at src/, so imports read the same from any folder depth.
    alias: { '@': fileURLToPath(new URL('./src', import.meta.url)) },
  },
});
