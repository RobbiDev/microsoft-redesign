import { useState } from 'react';
import Icon from '@/components/ui/Icon/Icon.jsx';
import Logo from '@/components/ui/Logo/Logo.jsx';
import { initials } from '@/data/site.js';
import styles from './AccountPanel.module.css';
import Link from '@/components/ui/Link/Link.jsx';

export default function AccountPanel({ accounts, current, onSwitch, onClose }) {
  const [listOpen, setListOpen] = useState(false);
  const me = accounts[current];
  const others = accounts.map((a, i) => ({ ...a, i })).filter((a) => a.i !== current);

  return (
    <div className={styles.panel} role="dialog" aria-label="Account">
      <div className={styles.top}>
        <Logo small />
        <button className={styles.textBtn} onClick={onClose}>Sign out</button>
      </div>

      <div className={styles.profile}>
        <span className={styles.bigAvatar} style={{ background: me.color }}>{initials(me.name)}</span>
        <div className={styles.who}>
          <div className={styles.name}>{me.name}</div>
          <div className={styles.email}>{me.email}</div>
          <div className={styles.meta}>
            <Link href="/account">View account</Link>
            <span className={styles.plan}>{me.plan}</span>
          </div>
        </div>
      </div>

      <div className={styles.group}>
        <button className={styles.switchHead} onClick={() => setListOpen((o) => !o)} aria-expanded={listOpen}>
          <span>Switch account ({others.length})</span>
          <Icon name="chevronDown" size={14} strokeWidth={1.4} />
        </button>
        <div className={`${styles.collapse} ${listOpen ? styles.expanded : ''}`}>
          <div inert={!listOpen}>
            {others.map((a) => (
              <button key={a.i} className={styles.row} onClick={() => { onSwitch(a.i); setListOpen(false); }}>
                <span className={styles.smallAvatar} style={{ background: a.color }}>{initials(a.name)}</span>
                <span className={styles.rowText}>
                  <span className={styles.rowName}>{a.name}</span>
                  <span className={styles.rowEmail}>{a.email}</span>
                </span>
              </button>
            ))}
            <button className={styles.row}>
              <span className={`${styles.smallAvatar} ${styles.add}`}><Icon name="plus" strokeWidth={1.5} /></span>
              Sign in with a different account
            </button>
          </div>
        </div>
      </div>

      <div className={styles.group}>
        <Link href="/account" className={styles.link}><Icon name="user" strokeWidth={1.4} /> Manage your Microsoft account</Link>
        <Link href="/store/orders" className={styles.link}><Icon name="orders" strokeWidth={1.4} /> Orders and subscriptions</Link>
        <button className={styles.link} onClick={onClose}><Icon name="signOut" strokeWidth={1.4} /> Sign out of all accounts</button>
      </div>

      <div className={styles.legal}>
        <Link href="/privacy">Privacy</Link>
        <Link href="/terms-of-use">Terms of use</Link>
      </div>
    </div>
  );
}
