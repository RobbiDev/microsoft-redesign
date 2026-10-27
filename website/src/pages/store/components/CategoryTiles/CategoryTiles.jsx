import { categories } from '@/pages/store/storeContent.js';
import styles from './CategoryTiles.module.css';

export default function CategoryTiles() {
  return (
    <section className={styles.section}>
      <div className={styles.inner}>
        <h2 className={styles.heading}>Shop by category</h2>
        <div className={styles.grid}>
          {categories.map((c) => (
            <a key={c.label} href={c.href} className={`${styles.tile} ${c.theme === 'light' ? styles.light : ''}`}>
              <img src={c.image} alt="" loading="lazy" decoding="async" />
              <span>{c.label}</span>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
