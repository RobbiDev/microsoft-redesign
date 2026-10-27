import Icon from '@/components/ui/Icon/Icon.jsx';
import styles from './NewsCards.module.css';

export default function NewsCards({ items }) {
  return (
    <section className={styles.section}>
      <div className={styles.grid}>
        {items.map((n) => (
          <a key={n.title} href={n.href} className={styles.card}>
            <img src={n.image} alt={n.alt} loading="lazy" decoding="async" />
            <div className={styles.text}>
              <span className={styles.tag}>{n.tag}</span>
              <h3>{n.title}</h3>
              <p>{n.body}</p>
              <span className={styles.cta}>{n.cta} <Icon name="arrowSmall" /></span>
            </div>
          </a>
        ))}
      </div>
    </section>
  );
}
