import M365Hero from './components/M365Hero/M365Hero.jsx';
import InfoGrid from './components/InfoGrid/InfoGrid.jsx';
import PlanSection from './components/PlanSection/PlanSection.jsx';
import Faq from './components/Faq/Faq.jsx';
import { benefits, faq, forClassrooms, forStudents, hero, lti, plansSection, resources } from './educationContent.js';
import styles from './SectionPage.module.css';
import Link from '@/components/ui/Link/Link.jsx';

export default function EducationPage() {
  return (
    <>
      <M365Hero {...hero} />
      <InfoGrid {...benefits} tone="warm" />
      <PlanSection {...plansSection} audience="education" />
      <InfoGrid {...forClassrooms} tone="warm" />
      <InfoGrid {...lti} />
      <section className={styles.section}>
        <div className={`${styles.inner} ${styles.banner}`}>
          <div>
            <h2>{forStudents.title}</h2>
            <p>{forStudents.body}</p>
          </div>
          <Link href={forStudents.cta.href} className={styles.button}>{forStudents.cta.label}</Link>
        </div>
      </section>
      <InfoGrid {...resources} tone="warm" />
      <Faq items={faq} />
    </>
  );
}

EducationPage.title = 'Microsoft 365 for education – Microsoft Redesign';
