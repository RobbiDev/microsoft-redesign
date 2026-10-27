import M365Hero from './components/M365Hero/M365Hero.jsx';
import PlanSection from './components/PlanSection/PlanSection.jsx';
import CompareTable from './components/CompareTable/CompareTable.jsx';
import Faq from './components/Faq/Faq.jsx';
import { audiences, oneTimePurchase, personalComparison, teamsNote } from './plans.js';
import { faq } from './m365Content.js';
import styles from './SectionPage.module.css';

// /microsoft-365/plans — every plan for every audience, from plans.js. ?for=<audience> picks the tab.
export default function M365PlansPage() {
  const initial = new URLSearchParams(window.location.search).get('for') ?? 'personal';
  return (
    <>
      <M365Hero
        compact
        eyebrow="Microsoft 365"
        title="Plans and pricing"
        body="Every Microsoft 365 plan, for every kind of customer, in one place."
      />
      <PlanSection id="plans" tabs={audiences} initialTab={initial} note={teamsNote} />
      <section id="office" className={styles.section}>
        <div className={`${styles.inner} ${styles.banner}`}>
          <div>
            <h2>{oneTimePurchase.title}</h2>
            <p>{oneTimePurchase.body}</p>
          </div>
          <a href={oneTimePurchase.cta.href} className={styles.button}>{oneTimePurchase.cta.label} · ${oneTimePurchase.price}</a>
        </div>
      </section>
      <CompareTable title="Compare personal plans" {...personalComparison} />
      <Faq items={faq.slice(0, 6)} />
    </>
  );
}

M365PlansPage.title = 'Microsoft 365 plans and pricing – Microsoft Redesign';
