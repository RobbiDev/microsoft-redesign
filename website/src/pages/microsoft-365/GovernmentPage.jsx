import M365Hero from './components/M365Hero/M365Hero.jsx';
import SectionNav from './components/SectionNav/SectionNav.jsx';
import InfoGrid from './components/InfoGrid/InfoGrid.jsx';
import PlanSection from './components/PlanSection/PlanSection.jsx';
import Faq from './components/Faq/Faq.jsx';
import { capabilities, clouds, copilot, faq, getStarted, hero, news, plansSection, resources, sectionNav } from './governmentContent.js';

export default function GovernmentPage() {
  return (
    <>
      <M365Hero {...hero} />
      <SectionNav items={sectionNav} cta={hero.secondary} />
      <InfoGrid id="clouds" {...clouds} tone="warm" />
      {capabilities.map((group) => <InfoGrid key={group.title} {...group} />)}
      <PlanSection {...plansSection} audience="government" />
      <InfoGrid id="copilot" {...copilot} tone="warm" />
      <InfoGrid id="news" {...news} />
      <InfoGrid {...resources} tone="warm" />
      <InfoGrid id="get-started" {...getStarted} />
      <Faq items={faq} />
    </>
  );
}

GovernmentPage.title = 'Microsoft 365 for government – Microsoft Redesign';
