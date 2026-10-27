// Every Microsoft 365 app and service, in one place. The Apps page shows all of them (one section
// each, at /microsoft-365/apps#<id>), and other pages pick from the same list. This replaces the
// separate Word, Excel, PowerPoint, Outlook, Teams, OneDrive, SharePoint and Planner pages.
// Icons live in public/images/m365/icons/; apps without one show their initial.

const ICON = '/images/m365/icons';

export const appGroups = [
  { id: 'productivity', label: 'Productivity apps' },
  { id: 'collaboration', label: 'Collaboration' },
  { id: 'security', label: 'Security and storage' },
  { id: 'more', label: 'More apps' },
];

export const apps = [
  {
    id: 'copilot', group: 'productivity', name: 'Copilot', icon: `${ICON}/copilot.svg`, color: '#7b61ff',
    tagline: 'Your AI companion',
    body: 'Answers to hard questions, summaries of long documents, and help drafting, planning and analyzing across every app.',
    points: ['Chat on the web, in Windows and in every Microsoft 365 app', 'Researcher and Analyst agents in Premium, Pro and work plans', 'Voice and Vision to talk or show it what you’re looking at'],
    includedIn: 'Free (limited), Personal, Family, Premium, Pro, and work plans with Copilot',
  },
  {
    id: 'word', group: 'productivity', name: 'Word', icon: `${ICON}/word.svg`, color: '#185abd',
    tagline: 'Create your best work',
    body: 'Write documents, reports and resumes, with Copilot to draft, rewrite and summarize.',
    points: ['Start from a prompt or a template', 'Real-time co-authoring and comments', 'Grammar and style suggestions with Editor'],
    includedIn: 'Every plan (web and mobile in Free and Basic)',
  },
  {
    id: 'excel', group: 'productivity', name: 'Excel', icon: `${ICON}/excel.svg`, color: '#107c41',
    tagline: 'Turn data into insights',
    body: 'Build spreadsheets, charts and models, and ask Copilot to find trends and explain the numbers.',
    points: ['Formulas, PivotTables and charts', 'Copilot analysis (files saved to OneDrive with AutoSave on)', 'Python in Excel for advanced analysis'],
    includedIn: 'Every plan (web and mobile in Free and Basic)',
  },
  {
    id: 'powerpoint', group: 'productivity', name: 'PowerPoint', icon: `${ICON}/powerpoint.svg`, color: '#c43e1c',
    tagline: 'Polish your presentations',
    body: 'Design slides in minutes, turn a document into a deck with Copilot, and present with confidence.',
    points: ['Designer suggestions for every slide', 'Build a deck from a Word document or a prompt', 'Presenter Coach for rehearsing'],
    includedIn: 'Every plan (web and mobile in Free and Basic)',
  },
  {
    id: 'outlook', group: 'productivity', name: 'Outlook', icon: `${ICON}/outlook.svg`, color: '#0078d4',
    tagline: 'Your inbox, organized',
    body: 'Email, calendars and contacts for all your accounts in one place, with Copilot to summarize threads and draft replies.',
    points: ['Works with Outlook.com, Gmail, iCloud and work accounts', 'Ad-free from Basic up', 'Custom business email on business plans'],
    includedIn: 'Every plan (with ads in Free)',
  },
  {
    id: 'onenote', group: 'productivity', name: 'OneNote', icon: `${ICON}/onenote.svg`, color: '#7719aa',
    tagline: 'Upgrade your notes',
    body: 'Capture typed, handwritten, audio and web notes, organized into notebooks that sync everywhere.',
    points: ['Ink and handwriting support', 'Copilot Notebooks and Audio Overviews', 'Share notebooks with family or a team'],
    includedIn: 'Every plan',
  },
  {
    id: 'teams', group: 'collaboration', name: 'Microsoft Teams', icon: `${ICON}/teams.svg`, color: '#5059c9',
    tagline: 'Connect with anyone',
    body: 'Chat, calls and meetings for families and organizations, with Copilot to recap meetings and catch you up.',
    points: ['All-day video calls for up to 300 people on personal plans', 'Webinars and town halls on enterprise plans', 'Teams Phone for calling outside your organization (E5, E7)'],
    includedIn: 'Personal, Family, Premium, Pro, and business and enterprise plans (also sold without Teams)',
  },
  {
    id: 'sharepoint', group: 'collaboration', name: 'SharePoint', color: '#036c70',
    tagline: 'Sites for every team',
    body: 'Intranet sites and team spaces to share news, files and resources across an organization.',
    points: ['Team and communication sites', 'Document libraries with version history', 'AI experiences in Business Standard and above'],
    includedIn: 'Business and enterprise plans',
  },
  {
    id: 'planner', group: 'collaboration', name: 'Planner', color: '#31752f',
    tagline: 'Plans that keep moving',
    body: 'Task boards, timelines and to-dos for individuals and teams, connected to Teams and Outlook.',
    points: ['Boards, charts and schedules', 'Includes Microsoft To Do and Lists', 'Assign and track work across a team'],
    includedIn: 'Business and enterprise plans',
  },
  {
    id: 'loop', group: 'collaboration', name: 'Microsoft Loop', color: '#6e3fbf',
    tagline: 'Shared workspaces',
    body: 'Live pages and components that stay in sync wherever they’re pasted, from chats to emails.',
    points: ['Project workspaces', 'Components that update everywhere at once'],
    includedIn: 'Business Standard and above, and enterprise plans',
  },
  {
    id: 'onedrive', group: 'security', name: 'OneDrive', icon: `${ICON}/onedrive.svg`, color: '#0364b8',
    tagline: 'Your files, everywhere',
    body: 'Back up, share and edit photos and files from any device, with ransomware protection on paid plans.',
    points: ['5 GB free, 100 GB in Basic, 1 TB in Personal, 2 TB in Family and Premium, 5 TB in Pro', 'File recovery and ransomware detection', 'OneDrive Restyle AI photo editing'],
    includedIn: 'Every plan',
  },
  {
    id: 'defender', group: 'security', name: 'Microsoft Defender', icon: `${ICON}/defender.svg`, color: '#0f6cbd',
    tagline: 'Security made simple',
    body: 'Continuous threat monitoring, real-time alerts and expert tips for your whole family’s devices.',
    points: ['Device protection for Windows, Mac, iOS and Android', 'Identity theft monitoring (US only)', 'Enterprise-grade versions in business and enterprise plans'],
    includedIn: 'Personal, Family, Premium, Pro, and work plans',
  },
  {
    id: 'forms', group: 'more', name: 'Microsoft Forms', color: '#008272',
    tagline: 'Surveys, quizzes and polls',
    body: 'Create a survey or quiz in minutes and see results as they come in.',
    points: [],
    includedIn: 'Paid personal plans and work plans (free version for everyone)',
  },
  {
    id: 'clipchamp', group: 'more', name: 'Clipchamp', color: '#7f3ad6',
    tagline: 'Video editing',
    body: 'Edit videos in the browser with templates, captions and stock media.',
    points: [],
    includedIn: 'Business Standard and above, and enterprise plans',
  },
  {
    id: 'bookings', group: 'more', name: 'Bookings', color: '#00a5a5',
    tagline: 'Appointments and scheduling',
    body: 'Let customers book time with you, with reminders sent automatically.',
    points: [],
    includedIn: 'Business plans and enterprise plans with Teams',
  },
  {
    id: 'access', group: 'more', name: 'Access', color: '#a4373a',
    tagline: 'Desktop databases',
    body: 'Build simple database apps on Windows.',
    points: [],
    includedIn: 'Personal, Family, Premium, Pro and enterprise plans (PC only)',
  },
];

export const appsInGroup = (group) => apps.filter((a) => a.group === group);
export const appsById = (ids) => ids.map((id) => apps.find((a) => a.id === id));

// Products that sit next to Microsoft 365 rather than inside it.
export const relatedProducts = [
  { name: 'Microsoft Office 2024', body: 'A one-time purchase of the classic desktop apps, without a subscription.', href: '/microsoft-365/plans#office' },
  { name: 'Windows 365', body: 'Your Windows PC, streamed from the cloud to any device.', href: '/windows/windows-365' },
  { name: 'Microsoft Viva', body: 'Employee experience tools for engagement, learning and goals.', href: '/microsoft-365/viva' },
  { name: 'Microsoft Edge', body: 'The browser built for Microsoft 365, with Copilot built in.', href: '/edge' },
];
