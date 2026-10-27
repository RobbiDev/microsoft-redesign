import { featured } from '@/pages/store/storeContent.js';
import styles from './ProductGrid.module.css';

export default function ProductGrid() {
  return (
    <section className={styles.section}>
      <div className={styles.inner}>
        <h2 className={styles.heading}>{featured.title}</h2>
        <div className={styles.grid}>
          {featured.products.map((p) => (
            <article key={p.id} className={styles.card}>
              <a href={p.href} className={`${styles.media} ${p.theme === 'light' ? styles.light : ''}`} tabIndex={-1} aria-hidden="true">
                <img src={p.image} alt="" loading="lazy" decoding="async" />
              </a>
              <div className={styles.text}>
                <p className={styles.category}>{p.category}</p>
                <h3><a href={p.href}>{p.title}</a></h3>
                <p className={styles.detail}>{p.detail}</p>
                {p.badge && <span className={styles.badge}>{p.badge}</span>}
              </div>
              <a href={p.href} className={`btn btn-primary ${styles.cta}`}>{p.cta}</a>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
