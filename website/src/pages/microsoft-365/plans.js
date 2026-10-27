// Every Microsoft 365 plan, in one place. Each page asks for the plans it needs with `plansFor()` or
// `planById()`, so a price change here updates every page at once. This replaces the ~10 separate
// plan pages microsoft.com maintains (individuals, business, enterprise, Office 365, frontline,
// nonprofit, government, education, Copilot for individuals, Copilot for business…).
//
// Prices: US dollars, from microsoft.com (October 2026).
//   price.yearly / price.monthly  consumer prices per year / per month
//   price.perUser                 business prices per user per month, paid yearly
//   price.was                     the regular price when there's a sale
//   contact: true                 no public price; sold through sales or partners

export const audiences = [
  { audience: 'personal', label: 'Personal and family' },
  { audience: 'business', label: 'Business' },
  { audience: 'enterprise', label: 'Enterprise' },
  { audience: 'office-365', label: 'Office 365 (enterprise)' },
  { audience: 'frontline', label: 'Frontline workers' },
  { audience: 'nonprofit', label: 'Nonprofits' },
  { audience: 'education', label: 'Education' },
  { audience: 'government', label: 'Government' },
];

const store = (id) => ({ label: 'Buy now', href: `/store/microsoft-365/${id}` });
const sales = { label: 'Contact sales', href: '/microsoft-365/resources#contact-sales' };

export const plans = [
  // ── Personal and family ──
  {
    id: 'free', audience: 'personal', name: 'Microsoft 365 (free)',
    price: { yearly: 0, monthly: 0 }, cta: { label: 'Create a free account', href: '/account/create' },
    summary: 'The basics, free with a Microsoft account.',
    features: ['For one person', '5 GB of cloud storage', 'Web and mobile Word, Excel, PowerPoint, OneNote and more', 'Outlook email and calendar, with ads'],
  },
  {
    id: 'basic', audience: 'personal', name: 'Microsoft 365 Basic',
    price: { yearly: 19.99, monthly: 1.99 }, cta: store('basic'),
    summary: 'More storage and ad-free email. No desktop apps or AI.',
    lead: 'Everything in free, plus:',
    features: ['100 GB of cloud storage', 'Ad-free Outlook email', 'OneDrive ransomware protection', 'Help from support when you need it'],
  },
  {
    id: 'personal', audience: 'personal', name: 'Microsoft 365 Personal',
    price: { yearly: 99.99, monthly: 9.99 }, cta: store('personal'), trial: true,
    summary: 'The desktop apps and Copilot for one person.',
    lead: 'Everything in Basic, plus:',
    features: ['Use on up to 5 devices at once', '1 TB of cloud storage', 'Desktop Word, Excel, PowerPoint, Outlook and OneNote with Copilot', 'More Copilot usage than free', 'Identity, data and device security', 'All-day video calls in Teams'],
  },
  {
    id: 'family', audience: 'personal', name: 'Microsoft 365 Family',
    price: { yearly: 129.99, monthly: 12.99 }, cta: store('family'), trial: true,
    summary: 'Personal, shared with up to six people.',
    lead: 'Everything in Personal, plus:',
    features: ['For up to 6 people', '2 TB of shared cloud storage', 'Each person on up to 5 devices', 'Copilot for the subscription owner'],
  },
  {
    id: 'premium', audience: 'personal', name: 'Microsoft 365 Premium', tag: 'Best for AI',
    price: { yearly: 199.99, monthly: 19.99 }, cta: store('premium'), trial: true,
    summary: 'Family, with much more Copilot.',
    lead: 'Everything in Family, plus:',
    features: ['Extensive Copilot usage', 'Copilot features only in Premium and Pro', 'Agents for research and analysis (limited)', 'Extensive AI image creation'],
  },
  {
    id: 'pro', audience: 'personal', name: 'Microsoft 365 Pro',
    price: { monthly: 99.99 }, cta: store('pro'),
    summary: 'The most AI and storage. Monthly billing only.',
    lead: 'Everything in Premium, plus:',
    features: ['5 TB of shared cloud storage', 'The highest Copilot usage', 'The highest agent usage for research and analysis', 'Highest usage for Voice, Vision and audio'],
  },

  // ── Business (up to 300 users) ──
  {
    id: 'business-basic', audience: 'business', name: 'Microsoft 365 Business Basic',
    price: { perUser: 7, noTeams: 5.4 }, cta: store('business-basic'), trial: true,
    summary: 'Email, storage and Teams, with web and mobile apps.',
    features: ['Up to 300 users', 'Web and mobile Word, Excel, PowerPoint and Outlook', 'Custom business email (you@yourbusiness.com)', '1 TB of cloud storage per user', 'Chat, call and meet in Teams', 'Bookings, Planner, Forms and 10+ more apps', 'Secure AI chat'],
  },
  {
    id: 'business-standard', audience: 'business', name: 'Business Standard with Copilot',
    price: { perUser: 23.5, noTeams: 20.3 }, cta: store('business-standard'), trial: true,
    summary: 'Desktop apps with Copilot built in.',
    lead: 'Everything in Basic, plus:',
    features: ['Desktop Word, Excel, PowerPoint and Outlook with Copilot', 'AI chat grounded in your work data, with a choice of AI models', 'Ready-made agents for research and data analysis', 'Cowork, Autopilot and AI in SharePoint', 'Loop and Clipchamp'],
  },
  {
    id: 'business-premium', audience: 'business', name: 'Business Premium with Copilot', tag: 'Most protection',
    price: { perUser: 32, noTeams: 28.8 }, cta: store('business-premium'), trial: true,
    summary: 'Standard, plus advanced security and device management.',
    lead: 'Everything in Standard, plus:',
    features: ['Policy-based identity and access controls', 'Advanced device management', 'Protection against phishing and cyberattacks', 'Information protection'],
  },
  {
    id: 'copilot-business', audience: 'business', name: 'Microsoft 365 Copilot Business', addOn: true,
    price: { perUser: 18, was: 21 }, cta: store('copilot-business'),
    summary: 'Add Copilot to any business plan. Sale price is for the first year, through Dec 31, 2026; $25.20 paid monthly.',
    features: ['Copilot in Word, Excel, PowerPoint, Outlook and Teams', 'Grounded in your organization’s data'],
  },

  // ── Enterprise (any size) ──
  {
    id: 'e3', audience: 'enterprise', name: 'Microsoft 365 E3',
    price: { perUser: 39 }, cta: sales, trial: true,
    summary: 'Productivity apps with enhanced security and compliance.',
    features: ['No limit on users', 'Desktop, web and mobile apps', '1–5+ TB of storage per user', 'Teams meetings and webinars', 'Windows 11 Enterprise E3', 'Microsoft Entra ID P1', 'Copilot Chat; full Copilot as an add-on'],
  },
  {
    id: 'e5', audience: 'enterprise', name: 'Microsoft 365 E5',
    price: { perUser: 60 }, cta: sales,
    summary: 'E3, plus advanced security, analytics and phone calling.',
    lead: 'Everything in E3, plus:',
    features: ['Teams Phone and Audio Conferencing', 'Power BI Pro', 'Extended detection and response (XDR) and SIEM', 'Data security for regulated industries', 'Windows 11 Enterprise E5 and Entra ID P2', 'Security Copilot'],
  },
  {
    id: 'e7', audience: 'enterprise', name: 'Microsoft 365 E7', tag: 'Frontier Suite',
    price: { perUser: 99 }, cta: sales,
    summary: 'E5 with Copilot, Agent 365 and Entra Suite included.',
    lead: 'Everything in E5, plus:',
    features: ['Microsoft 365 Copilot included', 'Agent 365 to observe, govern and secure AI agents', 'Microsoft Entra Suite', 'Identity threat detection and response (ITDR)'],
  },
  {
    id: 'copilot-enterprise', audience: 'enterprise', name: 'Microsoft 365 Copilot', addOn: true,
    price: { perUser: 30 }, cta: sales,
    summary: 'Add Copilot to E3, E5, Office 365 or frontline plans. $31.50 paid monthly with a yearly commitment.',
    features: ['Copilot in the apps, grounded in work data', 'Agents, and the ability to build your own'],
  },

  // ── Office 365 (enterprise apps without Windows and device management) ──
  { id: 'o365-e1', audience: 'office-365', name: 'Office 365 E1', price: { perUser: 10 }, cta: sales, summary: 'Web and mobile apps, email, storage and Teams.', features: ['Web and mobile Office apps', 'Email and 1 TB storage', 'Teams'] },
  { id: 'o365-e3', audience: 'office-365', name: 'Office 365 E3', price: { perUser: 26 }, cta: sales, summary: 'Adds the desktop apps and more security.', features: ['Desktop Office apps', 'Larger mailboxes and archiving', 'Compliance tools'] },
  { id: 'o365-e5', audience: 'office-365', name: 'Office 365 E5', price: { perUser: 41 }, cta: sales, summary: 'Adds phone calling, analytics and advanced security.', features: ['Teams Phone', 'Power BI Pro', 'Advanced threat protection'] },
  { id: 'apps-enterprise', audience: 'office-365', name: 'Microsoft 365 Apps for enterprise', price: { perUser: 14 }, cta: sales, summary: 'Just the desktop apps and OneDrive. No email or Teams.', features: ['Desktop Office apps', '1 TB OneDrive storage'] },

  // ── Frontline workers ──
  { id: 'f1', audience: 'frontline', name: 'Microsoft 365 F1', price: { perUser: 3 }, cta: sales, summary: 'Teams and SharePoint for shift workers.', features: ['Teams for chat, shifts and walkie-talkie', 'SharePoint and Viva Connections', 'No email or Office apps'] },
  { id: 'f3', audience: 'frontline', name: 'Microsoft 365 F3', price: { perUser: 10 }, cta: sales, summary: 'F1, plus web and mobile apps and email.', features: ['Web and mobile Office apps', '2 GB mailbox', 'Windows Enterprise and device management'] },

  // ── Nonprofits (staff pricing) ──
  { id: 'nonprofit-e3', audience: 'nonprofit', name: 'Microsoft 365 E3 for nonprofits', price: { perUser: 9.75 }, cta: sales, summary: 'E3 at nonprofit staff pricing.', features: ['Everything in Microsoft 365 E3', 'Eligibility verification required'] },
  { id: 'nonprofit-e5', audience: 'nonprofit', name: 'Microsoft 365 E5 for nonprofits', price: { perUser: 24 }, cta: sales, summary: 'E5 at nonprofit staff pricing.', features: ['Everything in Microsoft 365 E5', 'Eligibility verification required'] },

  // ── Education (sold through partners) ──
  { id: 'a1', audience: 'education', name: 'Microsoft 365 A1', contact: true, cta: { label: 'Contact a partner', href: sales.href }, summary: 'Web-based apps and collaboration for schools.', features: ['Web Word, Excel, PowerPoint and OneNote', 'Teams for Education', 'Email and storage'] },
  { id: 'a3', audience: 'education', name: 'Microsoft 365 A3', contact: true, cta: { label: 'Contact a partner', href: sales.href }, summary: 'A1, plus desktop apps, device management and security.', features: ['Desktop Office apps', 'Device management at scale', 'Identity and security tools'] },
  { id: 'a5', audience: 'education', name: 'Microsoft 365 A5', contact: true, cta: { label: 'Contact a partner', href: sales.href }, summary: 'A3, plus advanced security, analytics and governance.', features: ['Advanced threat protection', 'Power BI analytics', 'Compliance and governance'] },

  // ── US government (sold through sales; runs in GCC, GCC High or DoD — see the Government page) ──
  { id: 'g7', audience: 'government', name: 'Microsoft 365 Government G7', tag: 'For GCC', contact: true, cta: sales, summary: 'AI, agents and advanced security in one suite for government.', features: ['Supports organizations of any size', 'Agent 365 to govern AI agents', 'Unified identity, security and network access', 'Microsoft 365 Copilot'] },
  { id: 'g5', audience: 'government', name: 'Microsoft 365 Government G5', contact: true, cta: sales, summary: 'Apps with advanced security, compliance and analytics.', features: ['Desktop, web and mobile apps', 'Advanced security and compliance', 'Power BI Pro analytics'] },
  { id: 'g3', audience: 'government', name: 'Microsoft 365 Government G3', contact: true, cta: sales, summary: 'Apps with enhanced security and compliance.', features: ['Desktop, web and mobile apps', 'Enhanced security and compliance', 'Device and app management with Intune'] },
  { id: 'o365-g5', audience: 'government', name: 'Office 365 Government G5', contact: true, cta: { label: 'Request a free trial', href: '/microsoft-365/government#get-started' }, summary: 'Office apps with core security, compliance and analytics.', features: ['Office apps, email and Teams', 'Core security and compliance', 'Analytics'] },
  { id: 'o365-g3', audience: 'government', name: 'Office 365 Government G3', contact: true, cta: { label: 'Request a free trial', href: '/microsoft-365/government#get-started' }, summary: 'Productivity apps, file sharing, webinars and basic security.', features: ['Office apps, email and Teams', 'File sharing and webinars', 'Basic security'] },
];

export const plansFor = (audience) => plans.filter((p) => p.audience === audience);
export const planById = (id) => plans.find((p) => p.id === id);

export const oneTimePurchase = {
  title: 'Prefer to buy once?',
  body: 'Office Home 2024 is a one-time purchase for one PC or Mac, with the classic desktop Word, Excel, PowerPoint and OneNote. No Copilot, cloud storage or new features over time. Office Home & Business 2024 adds Outlook and business use.',
  price: 179.99,
  cta: { label: 'Buy Office Home 2024', href: '/store/office-home-2024' },
};

export const teamsNote = 'Business and enterprise plans are also sold without Teams, at a lower price, in regions where that’s required.';

// Personal plans side by side, for the Plans and pricing page. Values line up with `columns`.
export const personalComparison = {
  columns: ['Personal', 'Family', 'Premium', 'Pro', 'Office Home 2024'],
  groups: [
    {
      title: 'Access, storage and security',
      rows: [
        ['People', '1', 'Up to 6', 'Up to 6', 'Up to 6', '1 PC or Mac'],
        ['OneDrive storage', '1 TB', '2 TB shared', '2 TB shared', '5 TB shared', '5 GB free'],
        ['Devices at once', '5', '5 each', '5 each', '5 each', '1'],
        ['Ransomware protection', true, true, true, true, false],
        ['Microsoft Defender security', true, true, true, true, false],
        ['Ongoing support', true, true, true, true, false],
      ],
    },
    {
      title: 'Copilot (subscription owner only)',
      rows: [
        ['Copilot in Word, Excel, PowerPoint and Outlook', true, true, true, true, false],
        ['Overall AI usage', 'Higher than free', 'Higher than free', 'Extensive', 'Highest', 'Free tier only'],
        ['Features only in Premium and Pro', false, false, true, true, false],
        ['Agents for research and analysis', false, false, 'Limited', 'Highest', false],
      ],
    },
    {
      title: 'Apps',
      rows: [
        ['Word, Excel, PowerPoint, OneNote', true, true, true, true, true],
        ['Outlook', true, true, true, true, 'Free version, with ads'],
        ['Microsoft Teams', true, true, true, true, 'Free version'],
        ['Access (PC only)', true, true, true, true, false],
      ],
    },
    {
      title: 'Price',
      rows: [['', '$99.99/year', '$129.99/year', '$199.99/year', '$99.99/month', '$179.99 once']],
    },
  ],
};
