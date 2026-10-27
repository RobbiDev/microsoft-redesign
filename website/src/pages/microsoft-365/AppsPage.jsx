import M365Hero from './components/M365Hero/M365Hero.jsx';
import AppDirectory from './components/AppDirectory/AppDirectory.jsx';
import InfoGrid from './components/InfoGrid/InfoGrid.jsx';
import { relatedProducts } from './apps.js';

// /microsoft-365/apps — every app on one page, each linkable as #<app id>.
export default function AppsPage() {
  return (
    <>
      <M365Hero
        compact
        eyebrow="Microsoft 365 apps"
        title="Every app, on one page"
        body="What each app does and which plans include it. Jump to any app below."
      />
      <AppDirectory />
      <InfoGrid
        id="related"
        eyebrow="Related products"
        title="Works alongside Microsoft 365"
        items={relatedProducts.map((p) => ({ title: p.name, body: p.body, href: p.href }))}
        tone="warm"
      />
    </>
  );
}

AppsPage.title = 'Microsoft 365 apps – Microsoft Redesign';
