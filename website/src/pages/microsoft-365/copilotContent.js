// Copy for /microsoft-365/copilot. Replaces "Explore Copilot", "Pricing for Copilot" and the
// separate Copilot pages for individuals, business and enterprise. Plans come from plans.js.

export const hero = {
  eyebrow: 'Microsoft 365 Copilot',
  title: 'AI that works inside the apps you use every day',
  body: 'Copilot drafts, summarizes, analyzes and creates in Word, Excel, PowerPoint, Outlook and Teams. Here’s how to get it, whoever you are.',
  primary: { label: 'Find your plan', href: '#get-copilot' },
  secondary: { label: 'Try Copilot free', href: 'https://copilot.microsoft.com' },
};

export const sectionNav = [
  { label: 'Get Copilot', id: 'get-copilot' },
  { label: 'What it does', id: 'features' },
  { label: 'FAQ', id: 'faq' },
];

// How each audience gets Copilot. Plan ids refer to plans.js.
export const paths = {
  eyebrow: 'Get Copilot',
  title: 'One Copilot, three ways to get it',
  items: [
    { audience: 'For you and your family', body: 'Included in Personal, Family, Premium and Pro, with more usage at each step. AI features are for the subscription owner.', planIds: ['personal', 'premium', 'pro'], more: { label: 'All personal plans', href: '/microsoft-365/plans?for=personal' } },
    { audience: 'For business', body: 'Built into Business Standard and Premium, or add it to any business plan.', planIds: ['business-standard', 'business-premium', 'copilot-business'], more: { label: 'All business plans', href: '/microsoft-365/plans?for=business' } },
    { audience: 'For enterprise', body: 'Included in E7, or add it to E3, E5, Office 365 and frontline plans.', planIds: ['e7', 'copilot-enterprise'], more: { label: 'All enterprise plans', href: '/microsoft-365/plans?for=enterprise' } },
  ],
};

export const faq = [
  { q: 'Is Copilot free?', a: 'Copilot Chat is free with a Microsoft account, with limited usage. Microsoft 365 plans add Copilot inside the apps and raise the limits.' },
  { q: 'What’s the difference between Copilot Chat and Microsoft 365 Copilot?', a: 'Copilot Chat answers questions using the web. Microsoft 365 Copilot also works with your documents, email and meetings, inside the apps.' },
  { q: 'Can my family use my Copilot?', a: 'No. On Family, Premium and Pro, the AI features are only for the subscription owner. Everything else is shared.' },
  { q: 'Are there usage limits?', a: 'Yes. Each plan has its own limits, from “higher than free” on Personal up to the highest on Pro and E7.' },
];
