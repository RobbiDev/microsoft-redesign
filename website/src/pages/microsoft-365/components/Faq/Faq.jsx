import { useState } from 'react';
import Icon from '@/components/ui/Icon/Icon.jsx';
import styles from './Faq.module.css';

export default function Faq({ id, title = 'Frequently asked questions', items }) {
  const [open, setOpen] = useState(() => new Set());
  const toggle = (i) => setOpen((s) => {
    const next = new Set(s);
    if (next.has(i)) next.delete(i);
    else next.add(i);
    return next;
  });
  const allOpen = open.size === items.length;

  return (
    <section id={id} className={styles.section}>
      <div className={styles.inner}>
        <div className={styles.head}>
          <h2>{title}</h2>
          <button className={styles.all} onClick={() => setOpen(allOpen ? new Set() : new Set(items.map((_, i) => i)))}>
            {allOpen ? 'Collapse all' : 'Expand all'}
          </button>
        </div>
        {items.map((item, i) => (
          <div key={item.q} className={styles.item} data-open={open.has(i) || undefined}>
            <button aria-expanded={open.has(i)} onClick={() => toggle(i)}>
              {item.q} <Icon name="plus" size={18} strokeWidth={1.6} />
            </button>
            <div className={styles.panel}><p>{item.a}</p></div>
          </div>
        ))}
      </div>
    </section>
  );
}
