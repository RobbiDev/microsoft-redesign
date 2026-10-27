import styles from './StudentOffer.module.css';
import Link from '@/components/ui/Link/Link.jsx';

export default function StudentOffer({ id, eyebrow, title, body, steps, cta }) {
  return (
    <section id={id} className={styles.section}>
      <div className={styles.inner}>
        <p className={styles.eyebrow}>{eyebrow}</p>
        <h2 className={styles.title}>{title}</h2>
        <p className={styles.body}>{body}</p>
        <ol className={styles.steps}>
          {steps.map((s) => (
            <li key={s.title}>
              <h3>{s.title}</h3>
              <p>{s.body}</p>
            </li>
          ))}
        </ol>
        <Link href={cta.href} className={styles.cta}>{cta.label}</Link>
      </div>
    </section>
  );
}
