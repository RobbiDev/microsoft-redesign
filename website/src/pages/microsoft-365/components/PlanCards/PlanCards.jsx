import { useState } from 'react';
import styles from './PlanCards.module.css';
import Link from '@/components/ui/Link/Link.jsx';

const money = (n) => `$${n.toFixed(2)}`;

// What a plan costs under the chosen billing cycle, as { amount, unit, note }.
function priceOf(plan, cycle) {
  const { price = {} } = plan;
  if (plan.contact) return { amount: null, unit: '', note: 'Pricing through sales' };
  if (price.perUser !== undefined) return { amount: price.perUser, was: price.was, unit: 'user/month, paid yearly', note: plan.addOn ? 'Add-on to a plan' : '' };
  if (cycle === 'yearly' && price.yearly === undefined) return { amount: price.monthly, unit: '/month', note: 'Monthly billing only' };
  const amount = cycle === 'yearly' ? price.yearly : price.monthly;
  const savings = cycle === 'yearly' && price.monthly ? price.monthly * 12 - price.yearly : 0;
  return { amount, unit: cycle === 'yearly' ? '/year' : '/month', note: savings > 0 ? `Save ${money(savings)} a year` : '' };
}

// Plan cards from plans.js. The yearly/monthly switch appears only when a plan offers both.
export default function PlanCards({ plans, children }) {
  const [cycle, setCycle] = useState('yearly');
  const hasBoth = plans.some((p) => p.price?.yearly !== undefined && p.price?.monthly !== undefined && !p.contact);

  return (
    <div className={styles.wrap}>
      {hasBoth && (
        <div className={styles.billing} role="radiogroup" aria-label="Billing">
          {['yearly', 'monthly'].map((c) => (
            <button key={c} role="radio" aria-checked={cycle === c} onClick={() => setCycle(c)}>
              {c === 'yearly' ? 'Yearly' : 'Monthly'}
            </button>
          ))}
        </div>
      )}
      <div className={styles.grid} style={{ '--cols': Math.min(plans.length, 4) }}>
        {plans.map((p) => {
          const { amount, was, unit, note } = priceOf(p, cycle);
          return (
            <article key={p.id} id={`plan-${p.id}`} className={`${styles.card} ${p.tag ? styles.featured : ''}`}>
              {(p.tag || p.addOn) && <span className={styles.tag}>{p.tag ?? 'Add-on'}</span>}
              <h3>{p.name}</h3>
              {p.summary && <p className={styles.summary}>{p.summary}</p>}
              <p className={styles.price}>
                {amount === null ? 'Contact sales' : amount === 0 ? 'Free' : money(amount)}
                {was && <s>{money(was)}</s>}
                {amount > 0 && <span>{unit}</span>}
              </p>
              <p className={styles.save}>{note || (p.price?.noTeams ? `Without Teams: ${money(p.price.noTeams)}` : '\u00a0')}</p>
              <Link href={p.cta.href} className={styles.cta}>{p.cta.label}</Link>
              {p.trial && <Link href={`${p.cta.href}/trial`} className={styles.trial}>Try free for one month</Link>}
              {p.lead && <p className={styles.lead}>{p.lead}</p>}
              <ul className={p.lead ? '' : styles.noLead}>
                {p.features.map((f) => <li key={f}>{f}</li>)}
              </ul>
            </article>
          );
        })}
      </div>
      {children}
    </div>
  );
}
