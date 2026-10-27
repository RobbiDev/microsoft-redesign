// Copy for /microsoft-365/enterprise. Replaces "For enterprise", "Pricing for enterprise", the E3,
// E5 and E7 pages, and the separate Office 365, frontline, nonprofit and government pricing pages.
// Plans come from plans.js.

export const hero = {
  eyebrow: 'Microsoft 365 for enterprise',
  title: 'Productivity, security and AI for organizations of any size',
  body: 'From E3 to the E7 Frontier Suite, plus plans for frontline workers, nonprofits and government, all on one page.',
  primary: { label: 'Compare enterprise plans', href: '#plans' },
  secondary: { label: 'Talk to sales', href: '/microsoft-365/resources#contact-sales' },
};

export const sectionNav = [
  { label: 'Plans', id: 'plans' },
  { label: 'What’s different', id: 'differences' },
  { label: 'Add-ons', id: 'add-ons' },
  { label: 'FAQ', id: 'faq' },
];

// Tabs on the enterprise plans section; each maps to an audience in plans.js.
export const planTabs = [
  { audience: 'enterprise', label: 'Microsoft 365', blurb: 'The full suite: apps, Windows, device management and security.' },
  { audience: 'office-365', label: 'Office 365', blurb: 'Apps, email and Teams, without Windows or device management.' },
  { audience: 'frontline', label: 'Frontline', blurb: 'For shift workers, retail staff and anyone who works on the go.' },
  { audience: 'nonprofit', label: 'Nonprofit', blurb: 'Staff pricing for eligible nonprofit organizations.' },
  { audience: 'government', label: 'Government', blurb: 'Clouds built for US government security requirements.' },
];

export const differences = {
  eyebrow: 'What’s different',
  title: 'E3, E5 or E7?',
  items: [
    { title: 'E3: the foundation', body: 'Desktop apps, Windows Enterprise, device management, identity (Entra ID P1) and compliance tools. Copilot Chat included; full Copilot is an add-on.' },
    { title: 'E5: advanced security', body: 'Adds Teams Phone, Power BI Pro, extended detection and response, stronger identity protection (Entra ID P2) and Security Copilot.' },
    { title: 'E7: the Frontier Suite', body: 'Adds Microsoft 365 Copilot, Agent 365 to govern AI agents, and Microsoft Entra Suite, all in one price.' },
  ],
  footnote: 'All three include unlimited users, up to 15 devices per user (5 PCs or Macs, 5 tablets, 5 phones), 1–5+ TB of storage and a 100 GB mailbox with a 1.5 TB archive.',
};

export const addOnsSection = {
  eyebrow: 'Add-ons',
  title: 'Add Copilot to any plan',
  body: 'Microsoft 365 Copilot can be added to E3, E5, Office 365 and frontline plans. It’s included in E7.',
};

export const faq = [
  { q: 'What’s the difference between Microsoft 365 and Office 365?', a: 'Office 365 plans include the apps, email and Teams. Microsoft 365 plans add Windows Enterprise, device management and more security.' },
  { q: 'Can I buy plans without Teams?', a: 'Yes. Enterprise plans are also sold without Teams, at a lower price, and Teams can be added separately.' },
  { q: 'How do frontline plans differ?', a: 'F1 and F3 are built for people who work on shifts or on the go, with Teams for communication and lighter app access at a lower price.' },
  { q: 'Who qualifies for nonprofit pricing?', a: 'Registered nonprofits that pass Microsoft’s eligibility check. Pricing applies to staff licenses.' },
  { q: 'How do government agencies buy Microsoft 365?', a: 'Through sales. GCC, GCC High and DoD clouds are built for different US government security requirements.' },
];
