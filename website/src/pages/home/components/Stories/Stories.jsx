import ImageSlot from '@/components/ui/ImageSlot/ImageSlot.jsx';
import { stories } from '@/pages/home/homeContent.js';
import styles from './Stories.module.css';

export default function Stories() {
  return (
    <section className={styles.section}>
      <div className={styles.inner}>
        <h2 className={styles.heading}>{stories.heading}</h2>
        <div className={styles.grid}>
          {stories.items.map((s) => (
            <article key={s.id} className={styles.card}>
              <div className={styles.media}><ImageSlot placeholder="Story photo" /></div>
              <div className={styles.text}>
                <h3>{s.title}</h3>
                <p>{s.body}</p>
                <div className={styles.cta}><a href={s.href} className="btn btn-primary">{s.cta}</a></div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
