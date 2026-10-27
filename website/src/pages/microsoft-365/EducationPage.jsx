import M365Hero from './components/M365Hero/M365Hero.jsx';
import InfoGrid from './components/InfoGrid/InfoGrid.jsx';
import PlanSection from './components/PlanSection/PlanSection.jsx';
import Faq from './components/Faq/Faq.jsx';
import { faq, forClassrooms, forStudents, hero, plansSection } from './educationContent.js';
import styles from './SectionPage.module.css';

export default function EducationPage() {
  return (
    <>
      <M365Hero {...hero} />
      <PlanSection {...plansSection} audience="education" />
      <InfoGrid {...forClassrooms} tone="warm" />
      <section className={styles.section}>
        <div className={`${styles.inner} ${styles.banner}`}>
          <div>
            <h2>{forStudents.title}</h2>
            <p>{forStudents.body}</p>
          </div>
          <a href={forStudents.cta.href} className={styles.button}>{forStudents.cta.label}</a>
        </div>
      </section>
      <Faq items={faq} />
    </>
  );
}

EducationPage.title = 'Microsoft 365 for education – Microsoft Redesign';
