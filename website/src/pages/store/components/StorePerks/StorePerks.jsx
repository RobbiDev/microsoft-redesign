import Icon from '@/components/ui/Icon/Icon.jsx';
import { perks } from '@/pages/store/storeContent.js';
import styles from './StorePerks.module.css';

export default function StorePerks() {
  return (
    <section className={styles.section}>
      <div className={styles.grid}>
        {perks.map((p) => (
          <div key={p.title} className={styles.perk}>
            <span className={styles.icon}><Icon box={24} d={p.icon} size={28} strokeWidth={1.5} /></span>
            <h3>{p.title}</h3>
            <p>{p.body}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
