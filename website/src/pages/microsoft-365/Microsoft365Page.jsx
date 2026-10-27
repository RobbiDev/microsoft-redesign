import Icon from '@/components/ui/Icon/Icon.jsx';
import M365Hero from './components/M365Hero/M365Hero.jsx';
import SectionNav from './components/SectionNav/SectionNav.jsx';
import HowItWorks from './components/HowItWorks/HowItWorks.jsx';
import FeatureScroller from './components/FeatureScroller/FeatureScroller.jsx';
import NewsCards from './components/NewsCards/NewsCards.jsx';
import WhatsIncluded from './components/WhatsIncluded/WhatsIncluded.jsx';
import PlanSection from './components/PlanSection/PlanSection.jsx';
import StudentOffer from './components/StudentOffer/StudentOffer.jsx';
import GetStarted from './components/GetStarted/GetStarted.jsx';
import Faq from './components/Faq/Faq.jsx';
import { faq, features, getStarted, hero, howItWorks, news, PLANS_PATH, plansSection, sectionNav, students, whatsIncluded } from './m365Content.js';
import styles from './Microsoft365Page.module.css';
import Link from '@/components/ui/Link/Link.jsx';

// /microsoft-365 — Microsoft 365 for you and your family. Replaces "Explore Microsoft 365 apps",
// "Pricing for individuals", the Personal, Family, Premium and Pro pages, and "Student discount pricing".
export default function Microsoft365Page() {
  return (
    <>
      <M365Hero {...hero} />
      <SectionNav items={sectionNav} cta={hero.primary} />
      <HowItWorks id="how-it-works" {...howItWorks} />
      <FeatureScroller id="features" {...features} />
      <NewsCards items={news} />
      <WhatsIncluded id="whats-included" {...whatsIncluded} />
      <PlanSection {...plansSection} audience="personal">
        <Link href={PLANS_PATH} className={styles.compare}>Compare every plan side by side <Icon name="arrowSmall" /></Link>
      </PlanSection>
      <StudentOffer id="students" {...students} />
      <GetStarted title="Take the next step" items={getStarted} />
      <Faq id="faq" items={faq} />
    </>
  );
}

Microsoft365Page.title = 'Microsoft 365 – Microsoft Redesign';
