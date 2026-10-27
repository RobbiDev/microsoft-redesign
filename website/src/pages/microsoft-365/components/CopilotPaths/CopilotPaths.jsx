import Icon from '@/components/ui/Icon/Icon.jsx';
import { planById } from '@/pages/microsoft-365/plans.js';
import styles from './CopilotPaths.module.css';

const priceLabel = (p) => {
  if (p.price.perUser !== undefined) return `$${p.price.perUser.toFixed(2)} user/month`;
  if (p.price.yearly !== undefined) return `$${p.price.yearly.toFixed(2)}/year`;
  return `$${p.price.monthly.toFixed(2)}/month`;
};

// How each audience gets Copilot, with the matching plans pulled from plans.js.
export default function CopilotPaths({ id, eyebrow, title, items }) {
  return (
    <section id={id} className={styles.section}>
      <div className={styles.inner}>
        <p className={styles.eyebrow}>{eyebrow}</p>
        <h2 className={styles.title}>{title}</h2>
        <div className={styles.grid}>
          {items.map((path) => (
            <div key={path.audience} className={styles.card}>
              <h3>{path.audience}</h3>
              <p>{path.body}</p>
              <ul>
                {path.planIds.map(planById).map((p) => (
                  <li key={p.id}>
                    <a href={`/microsoft-365/plans?for=${p.audience}#plan-${p.id}`}>{p.name}{p.addOn ? ' (add-on)' : ''}</a>
                    <span>{priceLabel(p)}</span>
                  </li>
                ))}
              </ul>
              <a href={path.more.href} className={styles.more}>{path.more.label} <Icon name="arrowSmall" /></a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
