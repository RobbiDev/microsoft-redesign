import { useEffect, useState } from 'react';
import styles from './SectionNav.module.css';

// Sticky in-page navigation that highlights the section currently on screen.
export default function SectionNav({ items, cta }) {
  const [active, setActive] = useState(items[0].id);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries.filter((e) => e.isIntersecting).sort((a, b) => a.boundingClientRect.top - b.boundingClientRect.top);
        if (visible[0]) setActive(visible[0].target.id);
      },
      { rootMargin: '-30% 0px -60% 0px' },
    );
    items.forEach((item) => {
      const el = document.getElementById(item.id);
      if (el) observer.observe(el);
    });
    return () => observer.disconnect();
  }, [items]);

  return (
    <div className={styles.bar}>
      <div className={styles.inner}>
        <nav className={styles.links} aria-label="On this page">
          {items.map((item) => (
            <a key={item.id} href={`#${item.id}`} aria-current={active === item.id ? 'true' : undefined}>{item.label}</a>
          ))}
        </nav>
        {cta && <a href={cta.href} className={styles.cta}>{cta.label}</a>}
      </div>
    </div>
  );
}
