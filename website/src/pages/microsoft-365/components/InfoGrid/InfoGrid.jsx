import Icon from '@/components/ui/Icon/Icon.jsx';
import Link from '@/components/ui/Link/Link.jsx';
import styles from './InfoGrid.module.css';

// A titled grid of short cards. Items: { title, body, image?, alt?, href?, cta?, id? }.
// Cards with an `href` are links; an item `id` makes it linkable (#id).
export default function InfoGrid({ id, eyebrow, title, body, items, footnote, tone = 'white' }) {
  return (
    <section id={id} className={`${styles.section} ${styles[tone]}`}>
      <div className={styles.inner}>
        {eyebrow && <p className={styles.eyebrow}>{eyebrow}</p>}
        {title && <h2 className={styles.title}>{title}</h2>}
        {body && <p className={styles.body}>{body}</p>}
        <div className={styles.grid}>
          {items.map((item) => {
            const content = (
              <>
                {item.image && <img className={styles.image} src={item.image} alt={item.alt ?? ''} loading="lazy" decoding="async" />}
                <h3>{item.title}</h3>
                <p>{item.body}</p>
                {item.href && <span className={styles.cta}>{item.cta ?? 'Learn more'} <Icon name="arrowSmall" /></span>}
              </>
            );
            return item.href ? (
              <Link key={item.title} id={item.id} href={item.href} className={`${styles.card} ${styles.link}`}>{content}</Link>
            ) : (
              <div key={item.title} id={item.id} className={styles.card}>{content}</div>
            );
          })}
        </div>
        {footnote && <p className={styles.footnote}>{footnote}</p>}
      </div>
    </section>
  );
}
