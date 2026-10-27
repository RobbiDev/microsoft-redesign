// Copy for /microsoft-365/government. Replaces "For government" and the separate government
// plans-and-pricing page (which repeated the same plans). Plans come from plans.js.
// Facts from microsoft.com (October 2026); descriptions are our own words. Images: public/images/m365/government/.
import { asset } from '@/app/base.js';


const IMG = (file) => asset(`/images/m365/government/${file}.avif`);

export const hero = {
  eyebrow: 'Microsoft 365 for government',
  title: 'Secure productivity and AI for public service',
  body: 'For US federal, state, local and tribal agencies, the Department of Defense, and the contractors who support them, in clouds built for government security standards.',
  primary: { label: 'See government plans', href: '#plans' },
  secondary: { label: 'Check eligibility', href: '#get-started' },
};

export const sectionNav = [
  { label: 'Clouds', id: 'clouds' },
  { label: 'Capabilities', id: 'capabilities' },
  { label: 'Plans', id: 'plans' },
  { label: 'Copilot', id: 'copilot' },
  { label: 'News', id: 'news' },
  { label: 'Get started', id: 'get-started' },
];

export const clouds = {
  eyebrow: 'Clouds',
  title: 'Three clouds, matched to your requirements',
  items: [
    { title: 'Microsoft 365 GCC', body: 'For US federal, state, local and tribal government. Aligned to FedRAMP High, CJIS, IRS 1075 and DISA SRG L2.', image: IMG('gcc') },
    { title: 'Microsoft 365 GCC High', body: 'For US-only regulated agencies and authorized contractors. Aligned to FedRAMP High, ITAR, DFARS and DISA SRG L4.', image: IMG('gcc-high') },
    { title: 'Microsoft 365 DoD', body: 'Only for US Department of Defense Impact Level 5 environments. Aligned to DISA SRG L5.', image: IMG('dod') },
  ],
};

export const capabilities = [
  {
    id: 'capabilities', eyebrow: 'Capabilities', title: 'Get work done',
    items: [
      { title: 'Productivity apps', body: 'Installed, always up-to-date Word, Excel, PowerPoint, OneNote and Access (PC only).', image: IMG('apps') },
      { title: 'Surveys and polls', body: 'Collect feedback from the public and employees with Microsoft Forms.', image: IMG('forms') },
      { title: 'Task management', body: 'Plan days and team work with To Do, Lists and Planner.', image: IMG('tasks') },
      { title: 'Diagrams and flowcharts', body: 'Create and co-author diagrams with Visio for the web.', image: IMG('visio') },
    ],
  },
  {
    title: 'Communicate and share',
    items: [
      { title: 'Email and calendar', body: 'Secure Outlook for email, files and calendar in one place.', image: IMG('outlook') },
      { title: 'Chat, calls and collaboration', body: 'Shared workspaces in Microsoft Teams.', image: IMG('teams') },
      { title: 'Cloud storage', body: 'Store and share files from anywhere with OneDrive.', image: IMG('onedrive') },
      { title: 'A browser for work', body: 'Microsoft Edge for Business, a secure enterprise browser built for AI.', image: IMG('edge') },
    ],
  },
  {
    title: 'Automate and understand',
    items: [
      { title: 'Workflow automation', body: 'Notifications, file syncing and data collection with Power Automate.', image: IMG('power-automate') },
      { title: 'Microsoft 365 Copilot Chat', body: 'Speed up everyday processes with AI chat and agents.', image: IMG('copilot-chat') },
      { title: 'Adoption insights', body: 'See how your agency uses Microsoft 365 with Adoption Score.', image: IMG('adoption') },
      { title: 'Self-service analytics', body: 'Interactive reports and dashboards with Power BI Pro.', image: IMG('power-bi') },
    ],
  },
  {
    title: 'Secure and manage',
    items: [
      { title: 'Secure access', body: 'Protect access to resources on-premises and in the cloud with Microsoft Entra.', image: IMG('entra') },
      { title: 'Device and app management', body: 'Manage devices and apps across platforms with Intune Plan 1.', image: IMG('intune') },
    ],
  },
];

export const plansSection = {
  eyebrow: 'Plans',
  title: 'Government plans',
  note: 'Government plans are sold through Microsoft and partners after an eligibility check. G7 is available for GCC.',
};

export const copilot = {
  eyebrow: 'Copilot',
  title: 'Copilot for US government',
  items: [
    { title: 'Microsoft 365 Copilot for US Government', body: 'Secure AI chat grounded in your agency’s content, across the Microsoft 365 apps. Available in GCC, GCC High and DoD.', image: IMG('copilot-gov') },
    { title: 'Agent 365 for GCC', body: 'Observe, govern and secure the AI agents your agency uses, included in G7.' },
  ],
};

export const news = {
  eyebrow: 'News',
  title: 'What’s new for government',
  items: [
    { title: 'Introducing Microsoft 365 G7', body: 'Coming soon: AI, agents and security together in one suite for GCC organizations.', image: IMG('news-g7'), href: '/microsoft-365/government/g7' },
    { title: 'What’s next in Copilot for government', body: 'New Copilot capabilities on the way for government clouds.', image: IMG('news-copilot'), href: '/microsoft-365/government/copilot' },
    { title: 'Advancements for Microsoft 365 Government', body: 'New security, AI and management features, plus pricing updates coming summer 2026.', image: IMG('news-advancements'), href: '/microsoft-365/government/advancements' },
  ],
};

export const resources = {
  eyebrow: 'Resources',
  title: 'Get more from your investment',
  items: [
    { title: 'Protect your agency against cyberattacks', body: 'Infographic: automated threat protection for agencies.', href: '/microsoft-365/government/threat-protection' },
    { title: 'Coordinate across departments', body: 'Infographic: secure shared hubs for hybrid teams.', href: '/microsoft-365/government/coordination' },
    { title: 'Public sector community', body: 'Best practices and discussion for federal, state and local government.', href: 'https://techcommunity.microsoft.com' },
    { title: 'Find a GCC partner', body: 'Microsoft partners with the expertise to deploy in GCC.', href: '/microsoft-365/resources#partners' },
  ],
};

export const getStarted = {
  eyebrow: 'Get started',
  title: 'How to buy',
  items: [
    { title: '1. Check eligibility', body: 'See who qualifies for government offerings and how eligible customers buy.', image: IMG('eligibility'), href: '/microsoft-365/government/eligibility', cta: 'Eligibility rules' },
    { title: '2. Apply for a free trial', body: 'Submit the eligibility form to start validation and your trial.', image: IMG('apply'), href: '/microsoft-365/government/apply', cta: 'Apply' },
    { title: '3. Compare plans', body: 'See every government plan side by side.', image: IMG('compare'), href: '/microsoft-365/plans?for=government', cta: 'Compare plans' },
  ],
};

export const faq = [
  { q: 'Which cloud is right for my agency?', a: 'GCC suits most federal, state, local and tribal agencies. GCC High is for regulated agencies and contractors handling ITAR or DFARS data. DoD is only for Department of Defense Impact Level 5 work.' },
  { q: 'Who is eligible?', a: 'US government organizations and the contractors and partners that serve them. Eligibility is confirmed through a validation process before purchase.' },
  { q: 'Can we try it first?', a: 'Yes. Submitting the eligibility form starts both validation and a free trial.' },
  { q: 'Is Copilot available for government?', a: 'Yes. Microsoft 365 Copilot for US Government is available in GCC, GCC High and DoD.' },
  { q: 'What’s the difference between Microsoft 365 and Office 365 government plans?', a: 'Office 365 plans cover the apps, email and Teams. Microsoft 365 plans add device management, identity and advanced security.' },
];
