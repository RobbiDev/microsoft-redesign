import { copyFileSync } from 'node:fs';
import { fileURLToPath, URL } from 'node:url';
import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// Static hosts (GitHub Pages, Netlify, etc.) serve 404.html for unknown URLs. Making it a copy of
// index.html lets the app load on any path and show the right page — or "Still being redesigned".
const spaFallback = {
  name: 'spa-fallback',
  closeBundle() {
    copyFileSync('dist/index.html', 'dist/404.html');
  },
};

export default defineConfig({
  plugins: [react(), spaFallback],
  resolve: {
    // `@/` points at src/, so imports read the same from any folder depth.
    alias: { '@': fileURLToPath(new URL('./src', import.meta.url)) },
  },
});
