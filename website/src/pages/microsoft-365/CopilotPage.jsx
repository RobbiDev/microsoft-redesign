import M365Hero from './components/M365Hero/M365Hero.jsx';
import SectionNav from './components/SectionNav/SectionNav.jsx';
import CopilotPaths from './components/CopilotPaths/CopilotPaths.jsx';
import FeatureScroller from './components/FeatureScroller/FeatureScroller.jsx';
import InfoGrid from './components/InfoGrid/InfoGrid.jsx';
import Faq from './components/Faq/Faq.jsx';
import { features } from './m365Content.js';
import {
  customers, faq, forBusiness, forEnterprise, frontier, frontierRequirements, harvestedFaq, hero, impact, knowsYourWork, paths, sectionNav, studio,
} from './copilotContent.js';

// /microsoft-365/copilot — replaces Explore Copilot, Copilot for individuals / business / enterprise,
// and the four Copilot pricing pages (individuals, business, enterprise, Copilot Studio).
export default function CopilotPage() {
  return (
    <>
      <M365Hero {...hero} compact />
      <SectionNav items={sectionNav} cta={{ label: 'Find your plan', href: '#get-copilot' }} />
      <CopilotPaths id="get-copilot" {...paths} />
      <InfoGrid id="how" {...knowsYourWork} tone="warm" />
      <FeatureScroller id="features" eyebrow="For you" title="What Copilot can do for you" items={features.items} />
      <InfoGrid id="business" {...forBusiness} />
      <InfoGrid id="enterprise" {...forEnterprise} tone="warm" />
      <InfoGrid {...impact} />
      <InfoGrid {...customers} tone="warm" />
      <InfoGrid id="studio" {...studio} />
      <InfoGrid id="frontier" {...frontier} tone="warm" />
      <InfoGrid {...frontierRequirements} />
      <Faq id="faq" items={[...faq, ...harvestedFaq]} />
    </>
  );
}

CopilotPage.title = 'Microsoft 365 Copilot – Microsoft Redesign';
