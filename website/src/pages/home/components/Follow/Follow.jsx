import Link from '@/components/ui/Link/Link.jsx';
import { socials } from '@/pages/home/homeContent.js';
import styles from './Follow.module.css';

export default function Follow() {
  return (
    <section className={styles.section}>
      <h2>Follow us</h2>
      <div className={styles.list}>
        {socials.map((s) => (
          <Link key={s.name} href={s.href} aria-label={s.name} style={{ color: s.color }}>{s.glyph}</Link>
        ))}
      </div>
    </section>
  );
}
