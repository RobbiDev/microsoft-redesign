import { useState } from 'react';
import Icon from '@/components/ui/Icon/Icon.jsx';
import styles from './HowItWorks.module.css';

// Accordion on the left; the image on the right follows whichever item is open.
export default function HowItWorks({ id, eyebrow, title, items }) {
  const [open, setOpen] = useState(0);
  return (
    <section id={id} className={styles.section}>
      <div className={styles.inner}>
        <p className={styles.eyebrow}>{eyebrow}</p>
        <h2 className={styles.title}>{title}</h2>
        <div className={styles.layout}>
          <div className={styles.list}>
            {items.map((item, i) => (
              <div key={item.title} className={styles.item} data-open={open === i || undefined}>
                <button aria-expanded={open === i} onClick={() => setOpen(i)}>
                  {item.title} <Icon name="chevronDown" size={14} strokeWidth={1.6} />
                </button>
                <div className={styles.panel}>
                  <p>{item.body}</p>
                </div>
              </div>
            ))}
          </div>
          <div className={styles.media}>
            {items.map((item, i) => (
              <img key={item.image + i} src={item.image} alt={item.alt} className={open === i ? styles.shown : ''} loading="lazy" />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
