import { useLayoutEffect, useMemo, useRef, useState } from 'react';
import Icon, { CartIcon } from '@/components/ui/Icon/Icon.jsx';
import Logo from '@/components/ui/Logo/Logo.jsx';
import Avatar from './Avatar.jsx';
import SearchBox from './SearchBox.jsx';
import Link from '@/components/ui/Link/Link.jsx';
import { globalNav, hrefFor, hubHref, menuLinks } from '@/data/site.js';
import styles from './Header.module.css';

export default function DesktopBar({ hub, fading, panel, toggle, me }) {
  const items = useMemo(() => (hub ? hub.links : globalNav.map((label) => ({ label }))), [hub]);
  const fade = fading ? styles.faded : '';
  const searching = panel === 'search';

  // Links that don't fit wrap onto a hidden second row; count the ones still on the first row
  // and move the rest into the "More" menu.
  const navRef = useRef(null);
  const [visibleCount, setVisibleCount] = useState(items.length);
  useLayoutEffect(() => {
    const nav = navRef.current;
    if (!nav) return;
    const measure = () => {
      const links = [...nav.children];
      if (!links.length) return;
      const firstRow = links[0].offsetTop;
      setVisibleCount(links.filter((el) => el.offsetTop === firstRow).length);
    };
    measure();
    const observer = new ResizeObserver(measure);
    observer.observe(nav);
    document.fonts?.ready.then(measure);
    return () => observer.disconnect();
  }, [items, searching]);
  const overflow = items.slice(visibleCount);

  // Items with a dropdown are buttons; everything else is a real link.
  const hrefOf = (item) => (hub ? hubHref(hub, item.label) : hrefFor(item.label));

  return (
    <div className={styles.bar}>
      <div className={styles.brand}>
        <Logo />
        {hub && !searching && (
          <>
            <span className={styles.divider} aria-hidden="true" />
            <button className={`${styles.hubTitle} ${fade}`} onClick={(e) => toggle('switcher', e)} aria-expanded={panel === 'switcher'}>
              {hub.title} <Icon name="chevronDown" size={14} />
            </button>
          </>
        )}
      </div>

      {searching ? (
        <SearchBox inline onClose={close} />
      ) : (
        <>
          <nav ref={navRef} className={`${styles.nav} ${fade}`} aria-label={hub ? hub.title : 'Microsoft'}>
            {items.map((item, i) => {
              const hidden = i >= visibleCount;
              const shared = { className: styles.navItem, 'aria-hidden': hidden || undefined, tabIndex: hidden ? -1 : undefined };
              return item.menu ? (
                <button key={item.label} {...shared} aria-expanded={panel === `menu:${item.label}`} onClick={(e) => toggle(`menu:${item.label}`, e)}>
                  {item.label} <Icon name="chevronDown" strokeWidth={1.4} />
                </button>
              ) : (
                <Link key={item.label} {...shared} href={hrefOf(item)}>{item.label}</Link>
              );
            })}
          </nav>

          {overflow.length > 0 && (
            <div className={`${styles.more} ${fade}`}>
              <button className={styles.navItem} onClick={() => toggle('more')} aria-expanded={panel === 'more'}>
                More <Icon name="chevronDown" strokeWidth={1.4} />
              </button>
              {panel === 'more' && (
                <div className={`${styles.dropdown} ${styles.moreMenu}`}>
                  {overflow.map((item) =>
                    item.menu ? (
                      <div key={item.label} className={styles.moreGroup}>
                        <span>{item.label}</span>
                        {menuLinks(item.menu).map((l) => <a key={l} href={hubHref(hub, l)}>{l}</a>)}
                      </div>
                    ) : (
                      <Link key={item.label} href={hrefOf(item)}>{item.label}</Link>
                    ),
                  )}
                </div>
              )}
            </div>
          )}

          <div className={styles.actions}>
            <button className={styles.action} onClick={() => toggle('all')} aria-expanded={panel === 'all'}>
              All Microsoft <Icon name="chevronDown" strokeWidth={1.4} />
            </button>
            <div className={styles.iconGroup}>
              <button className={styles.iconBtn} aria-label="Search" onClick={() => toggle('search')}>
                <Icon name="search" size={18} strokeWidth={1.5} />
              </button>
              <a className={styles.iconBtn} href="/store/cart" aria-label="Cart"><CartIcon /></a>
            </div>
            <Avatar me={me} open={panel === 'account'} onClick={() => toggle('account')} />
          </div>
        </>
      )}
    </div>
  );
}
