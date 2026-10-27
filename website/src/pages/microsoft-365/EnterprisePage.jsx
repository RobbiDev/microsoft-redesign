import M365Hero from './components/M365Hero/M365Hero.jsx';
import SectionNav from './components/SectionNav/SectionNav.jsx';
import InfoGrid from './components/InfoGrid/InfoGrid.jsx';
import PlanSection from './components/PlanSection/PlanSection.jsx';
import PlanCards from './components/PlanCards/PlanCards.jsx';
import Faq from './components/Faq/Faq.jsx';
import { planById, teamsNote } from './plans.js';
import { addOnsSection, differences, faq, hero, planTabs, sectionNav } from './enterpriseContent.js';
import styles from './SectionPage.module.css';

export default function EnterprisePage() {
  return (
    <>
      <M365Hero {...hero} />
      <SectionNav items={sectionNav} cta={hero.secondary} />
      <PlanSection eyebrow="Plans" title="Enterprise plans" tabs={planTabs} note={teamsNote} />
      <InfoGrid id="differences" {...differences} tone="warm" />
      <section id="add-ons" className={styles.section}>
        <div className={styles.inner}>
          <p className={styles.eyebrow}>{addOnsSection.eyebrow}</p>
          <h2 className={styles.title}>{addOnsSection.title}</h2>
          <p className={styles.body}>{addOnsSection.body}</p>
          <div className={styles.narrow}><PlanCards plans={[planById('copilot-enterprise')]} /></div>
        </div>
      </section>
      <Faq id="faq" items={faq} />
    </>
  );
}

EnterprisePage.title = 'Microsoft 365 for enterprise – Microsoft Redesign';
