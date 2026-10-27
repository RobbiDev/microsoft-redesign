import { categories } from '@/pages/store/storeContent.js';
import styles from './CategoryTiles.module.css';
import Link from '@/components/ui/Link/Link.jsx';

export default function CategoryTiles() {
  return (
    <section className={styles.section}>
      <div className={styles.inner}>
        <h2 className={styles.heading}>Shop by category</h2>
        <div className={styles.grid}>
          {categories.map((c) => (
            <Link key={c.label} href={c.href} className={`${styles.tile} ${c.theme === 'light' ? styles.light : ''}`}>
              <img src={c.image} alt="" loading="lazy" decoding="async" />
              <span>{c.label}</span>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
