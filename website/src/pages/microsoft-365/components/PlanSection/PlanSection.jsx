import { useState } from 'react';
import PlanCards from '../PlanCards/PlanCards.jsx';
import { plansFor } from '@/pages/microsoft-365/plans.js';
import styles from './PlanSection.module.css';

// Plans for one audience, or tabs across several. `tabs`: [{ audience, label, blurb? }].
export default function PlanSection({ id = 'plans', eyebrow, title, note, audience, tabs, initialTab, children }) {
  const [active, setActive] = useState(() => Math.max(0, tabs?.findIndex((t) => t.audience === initialTab) ?? 0));
  const current = tabs ? tabs[active] : null;
  const shown = plansFor(current ? current.audience : audience);

  return (
    <section id={id} className={styles.section}>
      <div className={styles.inner}>
        {eyebrow && <p className={styles.eyebrow}>{eyebrow}</p>}
        {title && <h2 className={styles.title}>{title}</h2>}
        {tabs && (
          <div className={styles.tabs} role="tablist">
            {tabs.map((t, i) => (
              <button key={t.audience} role="tab" aria-selected={i === active} onClick={() => setActive(i)}>{t.label}</button>
            ))}
          </div>
        )}
        {current?.blurb && <p className={styles.blurb}>{current.blurb}</p>}
        <PlanCards key={current?.audience ?? audience} plans={shown}>{children}</PlanCards>
        {note && <p className={styles.note}>{note}</p>}
      </div>
    </section>
  );
}
