import M365Hero from './components/M365Hero/M365Hero.jsx';
import SectionNav from './components/SectionNav/SectionNav.jsx';
import InfoGrid from './components/InfoGrid/InfoGrid.jsx';
import PlanSection from './components/PlanSection/PlanSection.jsx';
import Faq from './components/Faq/Faq.jsx';
import { articles, faq, features, getStarted, hero, plansSection, sectionNav, who } from './businessContent.js';

export default function BusinessPage() {
  return (
    <>
      <M365Hero {...hero} />
      <SectionNav items={sectionNav} cta={{ label: 'Compare plans', href: '#plans' }} />
      <InfoGrid id="who" {...who} tone="warm" />
      <PlanSection {...plansSection} audience="business" note={plansSection.note} />
      <InfoGrid id="features" {...features} />
      <InfoGrid {...articles} />
      <InfoGrid id="get-started" {...getStarted} tone="warm" />
      <Faq id="faq" items={faq} />
    </>
  );
}

BusinessPage.title = 'Microsoft 365 for business – Microsoft Redesign';
