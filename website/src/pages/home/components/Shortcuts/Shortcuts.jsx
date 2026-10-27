import Icon from '@/components/ui/Icon/Icon.jsx';
import { shortcuts } from '@/pages/home/homeContent.js';
import styles from './Shortcuts.module.css';
import Link from '@/components/ui/Link/Link.jsx';

export default function Shortcuts() {
  return (
    <section className={styles.section}>
      <div className={styles.list}>
        {shortcuts.map((s) => (
          <Link key={s.label} href={s.href} className={styles.item}>
            <span className={styles.icon}><Icon box={36} d={s.icon} /></span>
            <span className={styles.label}>{s.label}</span>
          </Link>
        ))}
      </div>
    </section>
  );
}
