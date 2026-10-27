// Copy for /microsoft-365/enterprise. Replaces "For enterprise", "Pricing for enterprise", the E3,
// E5 and E7 pages, and the separate Office 365, frontline, nonprofit and government pricing pages.
// Plans come from plans.js.
import { asset } from '@/app/base.js';


export const hero = {
  eyebrow: 'Microsoft 365 for enterprise',
  title: 'Productivity, security and AI for organizations of any size',
  body: 'From E3 to the E7 Frontier Suite, plus plans for frontline workers, nonprofits and government, all on one page.',
  primary: { label: 'Compare enterprise plans', href: '#plans' },
  secondary: { label: 'Talk to sales', href: '/microsoft-365/resources#contact-sales' },
};

const IMG = (dir, file) => asset(`/images/m365/${dir}/${file}.avif`);
const ICON = (app) => asset(`/images/m365/icons/${app}.svg`);

export const sectionNav = [
  { label: 'AI for work', id: 'ai' },
  { label: 'Plans', id: 'plans' },
  { label: 'Frontline', id: 'frontline' },
  { label: 'What’s different', id: 'differences' },
  { label: 'Add-ons', id: 'add-ons' },
  { label: 'FAQ', id: 'faq' },
];

export const aiForWork = {
  eyebrow: 'AI built for work',
  title: 'Copilot and agents, grounded in your organization',
  items: [
    { title: 'Personal to you and your company', body: 'Copilot connects your own knowledge with your organization’s, so answers fit how you work.', image: IMG('enterprise', 'personalize') },
    { title: 'Real-time, shared context', body: 'Combines everyday work with Microsoft 365 signals and line-of-business data.', image: IMG('enterprise', 'context') },
    { title: 'Memory of how you work', body: 'Learns your style, preferences and routines to remember what matters.', image: IMG('enterprise', 'memory') },
    { title: 'The right model for each task', body: 'Pick the best-fit AI model for consistent, high-quality results.', image: IMG('enterprise', 'models') },
    { title: 'Start projects in chat', body: 'Create documents, spreadsheets and presentations right from Copilot Chat with the Word, Excel and PowerPoint agents.', image: IMG('enterprise', 'projects') },
    { title: 'Agents for every team', body: 'Agents that take on work across Microsoft 365, with IT in control.', image: IMG('enterprise', 'agents') },
    { title: 'Build your own with Copilot Studio', body: 'Employees build agents around their own workflows; IT keeps governance.', image: IMG('enterprise', 'copilot-studio') },
  ],
};

export const copilotInApps = {
  eyebrow: 'Copilot in your apps',
  title: 'Help in every app you already use',
  items: [
    { title: 'Copilot in Teams', body: 'Recall who said what in meetings and suggest action items as you go.', icon: ICON('teams') },
    { title: 'Copilot in Word', body: 'Write new content, edit documents and summarize text.', icon: ICON('word') },
    { title: 'Copilot in Excel', body: 'Build data models and visuals from plain-language requests.', icon: ICON('excel') },
    { title: 'Copilot in PowerPoint', body: 'Start a presentation from a single prompt.', icon: ICON('powerpoint') },
    { title: 'Copilot in Outlook', body: 'Summarize threads, draft replies and turn notes into polished messages.', icon: ICON('outlook') },
    { title: 'Work IQ', body: 'The intelligence layer that gives Copilot and agents real-time understanding of your work.' },
  ],
};

export const frontline = {
  eyebrow: 'Frontline workers',
  title: 'Tools built for shifts, stores and the field',
  body: 'F1 and F3 give frontline teams communication, scheduling and AI at a lower price. See them under the Frontline tab above.',
  items: [
    { title: 'AI on the frontline', body: 'In-the-moment answers, document summaries and step-by-step instructions.', image: IMG('frontline', 'ai') },
    { title: 'Streamline processes', body: 'Custom agents automate tasks and look up inventory or policies.', image: IMG('frontline', 'processes') },
    { title: 'Manage schedules anywhere', body: 'View and swap shifts, request time off and clock in from a phone.', image: IMG('frontline', 'schedules') },
    { title: 'A simple home screen', body: 'A branded hub for company news, training and job resources.', image: IMG('frontline', 'home') },
    { title: 'Unified communications', body: 'Chat, calls, channels and file sharing on one platform.', image: IMG('frontline', 'communications') },
    { title: 'Targeted messages', body: 'Send updates to the right people by role, location or department.', image: IMG('frontline', 'messaging') },
  ],
};

export const news = {
  eyebrow: 'News',
  title: 'What’s happening with Microsoft 365',
  items: [
    { title: 'Copilot Cowork is here', body: 'Take on complex, multi-step tasks grounded in your daily work.', href: '/microsoft-365/copilot' },
    { title: 'Work IQ', body: 'A workplace intelligence layer for every agent.', href: '/microsoft-365/work-iq' },
    { title: '2026 Work Trend Index', body: 'How organizational design shapes AI’s impact on everyday work.', href: '/microsoft-365/work-trend-index' },
    { title: 'Microsoft Agent 365', body: 'The control plane for agents, using the protections you already have.', href: '/microsoft-365/agent-365' },
  ],
};

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
