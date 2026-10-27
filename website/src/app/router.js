import { useSyncExternalStore } from 'react';

// A tiny History API router: no dependency, just pushState + a subscription React can read.

const listeners = new Set();

function subscribe(callback) {
  listeners.add(callback);
  window.addEventListener('popstate', callback);
  return () => {
    listeners.delete(callback);
    window.removeEventListener('popstate', callback);
  };
}

export const usePathname = () => useSyncExternalStore(subscribe, () => window.location.pathname);

// `replace` swaps the current history entry instead of adding one (used for redirects).
export function navigate(to, { replace = false } = {}) {
  const url = new URL(to, window.location.href);
  if (url.href === window.location.href) return;
  window.history[replace ? 'replaceState' : 'pushState'](null, '', url);
  window.scrollTo({ top: 0, behavior: 'instant' });
  listeners.forEach((l) => l());
  if (url.hash) scrollToHash(url.hash);
}

// For links like /microsoft-365#plans: jump to the section once the new page has rendered it.
export function scrollToHash(hash) {
  const id = decodeURIComponent(hash.slice(1));
  let frames = 0;
  const seek = () => {
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: 'instant', block: 'start' });
    else if (frames++ < 60) setTimeout(seek, 16); // timers keep running in background tabs; rAF doesn't
  };
  setTimeout(seek, 0);
}

// Lets ordinary <a href="/..."> links change pages without a full reload.
// Skips new-tab clicks, external links, downloads, and in-page #anchors.
export function handleLinkClick(e) {
  if (e.defaultPrevented || e.button !== 0 || e.metaKey || e.ctrlKey || e.shiftKey || e.altKey) return;
  const link = e.target.closest('a[href]');
  if (!link || (link.target && link.target !== '_self') || link.hasAttribute('download')) return;
  if (link.getAttribute('href').startsWith('#')) return;
  const url = new URL(link.href);
  if (url.origin !== window.location.origin) return;
  e.preventDefault();
  navigate(url.pathname + url.search + url.hash);
}
