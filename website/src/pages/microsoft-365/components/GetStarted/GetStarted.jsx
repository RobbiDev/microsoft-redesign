import Icon from '@/components/ui/Icon/Icon.jsx';
import styles from './GetStarted.module.css';
import Link from '@/components/ui/Link/Link.jsx';

export default function GetStarted({ title, items }) {
  return (
    <section className={styles.section}>
      <div className={styles.inner}>
        <h2 className={styles.title}>{title}</h2>
        <div className={styles.grid}>
          {items.map((item) => (
            <Link key={item.title} href={item.href} className={styles.card}>
              <img src={item.image} alt={item.alt} loading="lazy" decoding="async" />
              <h3>{item.title}</h3>
              <p>{item.body}</p>
              <span className={styles.cta}>{item.cta} <Icon name="arrowSmall" /></span>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
