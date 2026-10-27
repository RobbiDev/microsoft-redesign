import { useState } from 'react';
import Icon, { CartIcon } from '@/components/ui/Icon/Icon.jsx';
import Logo from '@/components/ui/Logo/Logo.jsx';
import Avatar from './Avatar.jsx';
import SearchBox from './SearchBox.jsx';
import Link from '@/components/ui/Link/Link.jsx';
import { allMicrosoft, globalNav, hrefFor, hubHref, menuLinks } from '@/data/site.js';
import styles from './Header.module.css';

export default function MobileBar({ hub, fading, panel, toggle, close, me }) {
  const [subOpen, setSubOpen] = useState(null);

  return (
    <div className={styles.mobile}>
      <div className={styles.mBar}>
        <div className={styles.mLeft}>
          <button className={styles.mIcon} onClick={() => toggle('mNav')} aria-label="Menu" aria-expanded={panel === 'mNav'}>
            <Icon name={panel === 'mNav' ? 'menuClose' : 'menu'} strokeWidth={1.5} />
          </button>
          <button className={styles.mIcon} onClick={() => toggle('mSearch')} aria-label="Search" aria-expanded={panel === 'mSearch'}>
            <Icon name="search" strokeWidth={1.5} />
          </button>
        </div>
        <Logo small />
        <div className={styles.mRight}>
          <Avatar me={me} open={panel === 'account'} onClick={() => toggle('account')} />
        </div>
      </div>

      {hub && (
        <div className={styles.mHubRow}>
          <button className={fading ? styles.faded : ''} onClick={() => toggle('mHub')} aria-expanded={panel === 'mHub'}>
            {hub.title} <Icon name="chevronDown" size={14} strokeWidth={1.4} />
          </button>
        </div>
      )}

      {panel === 'mHub' && hub && (
        <div className={styles.sheet}>
          {hub.links.map((item) => {
            const open = !!item.menu && subOpen === item.label;
            return (
              <div key={item.label} className={styles.sheetGroup}>
                {item.menu ? (
                  <button
                    className={styles.sheetItem}
                    aria-expanded={open}
                    onClick={() => setSubOpen((s) => (s === item.label ? null : item.label))}
                  >
                    {item.label} <Icon name="chevronDown" size={14} strokeWidth={1.4} />
                  </button>
                ) : (
                  <a className={styles.sheetItem} href={hubHref(hub, item.label)}>{item.label}</a>
                )}
                {open && (
                  <div className={styles.sheetSub}>
                    {menuLinks(item.menu).map((l) => <a key={l} href={hubHref(hub, l)}>{l}</a>)}
                  </div>
                )}
              </div>
            );
          })}
        </div>
      )}

      {panel === 'mNav' && (
        <div className={styles.sheet}>
          {hub && (
            <a className={`${styles.sheetItem} ${styles.sheetHome}`} href="/">
              <Icon name="back" /> Microsoft home
            </a>
          )}
          {globalNav.map((l) => (
            <Link key={l} className={styles.sheetItem} href={hrefFor(l)} aria-current={hub && hrefFor(l) === hub.base ? 'page' : undefined}>
              {l} <Icon name="chevronRight" size={14} strokeWidth={1.4} />
            </Link>
          ))}
          <a href="/store/cart" className={styles.sheetLink}><CartIcon /> Cart</a>

          <span className={styles.sheetLabel}>All Microsoft</span>
          {allMicrosoft.map((col) => {
            const key = `all:${col.title}`;
            const open = subOpen === key;
            return (
              <div key={key} className={styles.sheetGroup}>
                <button className={styles.sheetItem} aria-expanded={open} onClick={() => setSubOpen((s) => (s === key ? null : key))}>
                  {col.title} <Icon name="chevronDown" size={14} strokeWidth={1.4} />
                </button>
                {open && (
                  <div className={styles.sheetSub}>
                    {col.links.map((l) => <Link key={l} href={hrefFor(l)}>{l}</Link>)}
                  </div>
                )}
              </div>
            );
          })}
        </div>
      )}

      {panel === 'mSearch' && (
        <div className={`${styles.sheet} ${styles.searchSheet}`}>
          <SearchBox onClose={close} />
        </div>
      )}
    </div>
  );
}
