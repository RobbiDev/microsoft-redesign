// Copy for /microsoft-365/resources. Replaces the Resources menu's 11 links and the Support link.

export const hero = {
  eyebrow: 'Microsoft 365 resources',
  title: 'Learn, get help and stay up to date',
  body: 'Guides, training, news and support for Microsoft 365, gathered on one page.',
};

export const sectionNav = [
  { label: 'Learn', id: 'learn' },
  { label: 'For IT', id: 'it' },
  { label: 'News', id: 'news' },
  { label: 'Support', id: 'support' },
];

export const groups = [
  {
    id: 'learn', title: 'Learn',
    items: [
      { title: 'Getting started', body: 'Set up Microsoft 365 and learn the basics of each app.', href: 'https://support.microsoft.com/microsoft-365' },
      { title: 'Learning Center', body: 'Short videos and guides for Word, Excel, PowerPoint, Outlook and Teams.', href: 'https://support.microsoft.com/training' },
      { title: 'Templates', body: 'Thousands of ready-made documents, decks and spreadsheets.', href: 'https://create.microsoft.com/templates' },
      { title: 'Setup and install', body: 'Install the apps on your PC, Mac, phone or tablet.', href: 'https://support.microsoft.com/microsoft-365' },
    ],
  },
  {
    id: 'it', title: 'For IT and admins',
    items: [
      { title: 'Rollout and adoption', body: 'Guides for bringing Microsoft 365 and Copilot to your organization.', href: 'https://adoption.microsoft.com' },
      { title: 'Deployment assistance', id: 'partners', body: 'Help from Microsoft and partners to set up and migrate.', href: 'https://learn.microsoft.com/microsoft-365/' },
      { title: 'Product roadmap', body: 'What’s coming to Microsoft 365, and when.', href: 'https://www.microsoft.com/microsoft-365/roadmap' },
      { title: 'Trust Center', body: 'How Microsoft handles security, privacy and compliance.', href: 'https://www.microsoft.com/trust-center' },
    ],
  },
  {
    id: 'news', title: 'News and community',
    items: [
      { title: 'What’s new', body: 'The latest features across the apps, every month.', href: 'https://support.microsoft.com/microsoft-365' },
      { title: 'Blog and community', body: 'Announcements, tips and conversations with other users.', href: 'https://techcommunity.microsoft.com' },
      { title: 'Frontier program', body: 'Try upcoming AI features before they’re released.', href: '/microsoft-365/frontier' },
      { title: 'Customer stories', body: 'How organizations of all sizes use Microsoft 365.', href: '/stories' },
    ],
  },
  {
    id: 'support', title: 'Support',
    items: [
      { title: 'Get help', body: 'Answers to common questions, or contact an agent.', href: 'https://support.microsoft.com' },
      { title: 'Contact sales', id: 'contact-sales', body: 'Talk to someone about plans and pricing for your organization.', href: '/support/contact-sales' },
      { title: 'Manage your subscription', body: 'Renew, change or cancel your plan in your Microsoft account.', href: '/account' },
    ],
  },
];
