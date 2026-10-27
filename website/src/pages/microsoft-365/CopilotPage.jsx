import M365Hero from './components/M365Hero/M365Hero.jsx';
import SectionNav from './components/SectionNav/SectionNav.jsx';
import CopilotPaths from './components/CopilotPaths/CopilotPaths.jsx';
import FeatureScroller from './components/FeatureScroller/FeatureScroller.jsx';
import Faq from './components/Faq/Faq.jsx';
import { features } from './m365Content.js';
import { faq, hero, paths, sectionNav } from './copilotContent.js';

export default function CopilotPage() {
  return (
    <>
      <M365Hero {...hero} compact />
      <SectionNav items={sectionNav} cta={{ label: 'Find your plan', href: '#get-copilot' }} />
      <CopilotPaths id="get-copilot" {...paths} />
      <FeatureScroller id="features" eyebrow="What it does" title="What Copilot can do for you" items={features.items} />
      <Faq id="faq" items={faq} />
    </>
  );
}

CopilotPage.title = 'Microsoft 365 Copilot – Microsoft Redesign';
