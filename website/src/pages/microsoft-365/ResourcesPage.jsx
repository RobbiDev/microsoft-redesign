import M365Hero from './components/M365Hero/M365Hero.jsx';
import SectionNav from './components/SectionNav/SectionNav.jsx';
import InfoGrid from './components/InfoGrid/InfoGrid.jsx';
import { groups, hero, sectionNav } from './resourcesContent.js';

export default function ResourcesPage() {
  return (
    <>
      <M365Hero {...hero} compact />
      <SectionNav items={sectionNav} />
      {groups.map((g, i) => (
        <InfoGrid key={g.id} id={g.id} title={g.title} items={g.items.map((item) => ({ ...item, cta: 'Open' }))} tone={i % 2 ? 'warm' : 'white'} />
      ))}
    </>
  );
}

ResourcesPage.title = 'Microsoft 365 resources – Microsoft Redesign';
