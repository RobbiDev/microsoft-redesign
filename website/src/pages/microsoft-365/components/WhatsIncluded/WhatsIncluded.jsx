import { useState } from 'react';
import { appsById } from '@/pages/microsoft-365/apps.js';
import styles from './WhatsIncluded.module.css';
import Link from '@/components/ui/Link/Link.jsx';

export default function WhatsIncluded({ id, eyebrow, title, groups }) {
  const [tab, setTab] = useState(0);
  return (
    <section id={id} className={styles.section}>
      <div className={styles.inner}>
        <p className={styles.eyebrow}>{eyebrow}</p>
        <h2 className={styles.title}>{title}</h2>
        <div className={styles.tabs} role="tablist">
          {groups.map((g, i) => (
            <button key={g.label} role="tab" aria-selected={tab === i} onClick={() => setTab(i)}>{g.label}</button>
          ))}
        </div>
        <div key={tab} className={styles.grid} role="tabpanel">
          {appsById(groups[tab].ids).map((app, i) => (
            <Link key={app.name} href={`/microsoft-365/apps#${app.id}`} className={styles.app} style={{ '--i': i }}>
              <img src={app.icon} alt="" width="44" height="44" />
              <div>
                <h3>{app.name}</h3>
                <p className={styles.tagline}>{app.tagline}</p>
                <p className={styles.body}>{app.body}</p>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
