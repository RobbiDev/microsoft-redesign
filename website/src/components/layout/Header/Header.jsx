import { useEffect, useRef, useState } from 'react';
import Icon from '@/components/ui/Icon/Icon.jsx';
import DesktopBar from './DesktopBar.jsx';
import MobileBar from './MobileBar.jsx';
import AccountPanel from './AccountPanel.jsx';
import AllMicrosoftMenu from './AllMicrosoftMenu.jsx';
import useMediaQuery from '@/hooks/useMediaQuery.js';
import { navigate, usePathname } from '@/app/router.js';
import { accounts, hubHref, hubKeyForPath, hubs, initials, menuLinks, promo } from '@/data/site.js';
import styles from './Header.module.css';

const FADE_MS = 160;
const PANEL_WIDTH = 296;

export default function Header() {
  const isMobile = useMediaQuery('(max-width: 959px)');
  const pathname = usePathname();
  // The hub comes from the URL (/surface/... shows Surface's nav). `hubKey` trails it by a short fade.
  const routeHub = hubKeyForPath(pathname);
  const [hubKey, setHubKey] = useState(routeHub);
  const [fading, setFading] = useState(false);
  // Only one panel is open at a time:
  // 'all' | 'more' | 'search' | 'switcher' | 'account' | 'mNav' | 'mHub' | 'mSearch' | 'menu:<label>'
  const [panel, setPanel] = useState(null);
  const [panelLeft, setPanelLeft] = useState(0);
  const [accountIndex, setAccountIndex] = useState(0);
  const [showPromo, setShowPromo] = useState(promo.enabled);
  const headerRef = useRef(null);

  const hub = hubKey ? hubs[hubKey] : null;
  const account = accounts[accountIndex];
  const me = { ...account, initials: initials(account.name) };

  const close = () => setPanel(null);

  // Dropdowns line up under the button that opened them.
  const toggle = (name, e) => {
    if (e) {
      const r = e.currentTarget.getBoundingClientRect();
      setPanelLeft(Math.max(0, Math.min(r.left, window.innerWidth - PANEL_WIDTH)));
    }
    setPanel((p) => (p === name ? null : name));
  };

  // Hubs are pages now: switching one just navigates to it (null = Microsoft home).
  const switchHub = (key) => {
    setPanel(null);
    navigate(key ? hubs[key].base : '/');
  };

  useEffect(() => {
    if (routeHub === hubKey) return;
    setFading(true);
    const id = setTimeout(() => {
      setHubKey(routeHub);
      setFading(false);
    }, FADE_MS);
    return () => clearTimeout(id);
  }, [routeHub, hubKey]);

  useEffect(() => setPanel(null), [pathname]);

  useEffect(() => {
    const onKey = (e) => e.key === 'Escape' && setPanel(null);
    window.addEventListener('keydown', onKey);
    return () => window.removeEventListener('keydown', onKey);
  }, []);

  useEffect(() => setPanel(null), [isMobile]);

  // Publish the header's height so sticky content (like the hero) can sit right below it.
  useEffect(() => {
    const el = headerRef.current;
    const observer = new ResizeObserver(() => {
      document.documentElement.style.setProperty('--header-h', `${el.offsetHeight}px`);
    });
    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  const openMenu = hub && panel?.startsWith('menu:') ? hub.links.find((l) => `menu:${l.label}` === panel)?.menu : null;
  const nav = { hub, hubKey, fading, panel, toggle, switchHub, close, me };

  return (
    <header ref={headerRef} className={styles.header}>
      {isMobile ? <MobileBar {...nav} /> : <DesktopBar {...nav} />}

      {panel && <div className={styles.backdrop} onClick={close} />}

      {/* Grouped menus open as a full-width panel; simple lists as a dropdown under their button. */}
      {openMenu && !openMenu.list && openMenu.cols ? (
        <div className={styles.mega}>
          <div className={styles.megaInner}>
            <div className={styles.megaCols}>
              {openMenu.cols.map((col) => (
                <div key={col.title}>
                  <h3>{col.title}</h3>
                  <ul>
                    {col.links.map((l) => <li key={l}><a href={hubHref(hub, l)}>{l}</a></li>)}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </div>
      ) : openMenu && (
        <div className={styles.dropdown} style={{ left: panelLeft }}>
          {menuLinks(openMenu).map((l) => <a key={l} href={hubHref(hub, l)}>{l}</a>)}
        </div>
      )}

      {panel === 'all' && <AllMicrosoftMenu />}

      {panel === 'switcher' && (
        <div className={styles.dropdown} style={{ left: panelLeft }}>
          {hub && <a className={styles.home} href="/">Microsoft home</a>}
          {Object.keys(hubs).map((k) => (
            <a key={k} href={hubs[k].base} aria-current={k === hubKey ? 'page' : undefined}>{k}</a>
          ))}
        </div>
      )}

      {panel === 'account' && (
        <AccountPanel accounts={accounts} current={accountIndex} onSwitch={setAccountIndex} onClose={close} />
      )}

      {showPromo && (
        <div className={styles.promo}>
          <span>{promo.text}</span>
          <a href={promo.href}>{promo.cta}</a>
          <button className={styles.promoClose} onClick={() => setShowPromo(false)} aria-label="Close">
            <Icon name="close" />
          </button>
        </div>
      )}
    </header>
  );
}
