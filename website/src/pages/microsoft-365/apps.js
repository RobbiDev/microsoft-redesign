// Every Microsoft 365 app and service, in one place. The Apps page shows all of them (one section
// each, at /microsoft-365/apps#<id>), and other pages pick from the same list. This replaces the
// separate Word, Excel, PowerPoint, Outlook, Teams, OneDrive, SharePoint and Planner pages.
// Icons live in public/images/m365/icons/; apps without one show their initial.

import { features as aiFeatures } from './m365Content.js';
import { asset } from '@/app/base.js';

const ICON = asset('/images/m365/icons');

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

// ── Features per app, from each app's page on microsoft.com (images in public/images/m365/apps/<app>/) ──
const F = (app, file) => asset(`/images/m365/apps/${app}/${file}.avif`);

const features = {
  word: [
    { title: 'Create and edit with Copilot', body: 'Go from a blank page to a polished draft, with Copilot writing and revising alongside you.', image: F('word', 'copilot') },
    { title: 'Start from a template', body: 'Thousands of free, customizable templates for any occasion.', image: F('word', 'templates') },
    { title: 'Voice-to-text', body: 'Dictate your ideas or transcribe recorded audio straight into a document.', image: F('word', 'dictate') },
    { title: 'Enhance visually', body: 'Describe a banner or image and Designer creates it for your document.', image: F('word', 'designer') },
    { title: 'Write like a pro', body: 'Editor checks spelling, grammar and style as you type.', image: F('word', 'editor') },
    { title: 'Summarize with Copilot', body: 'Get the key points of a long document in seconds.', image: F('word', 'summarize') },
    { title: 'Share with anyone', body: 'Work together in real time, even with people who don’t have an account, with tracked changes and version history.', image: F('word', 'share') },
  ],
  excel: [
    { title: 'Edit with Copilot', body: 'Ask Copilot to change formulas, tables or formatting, then review each change.', image: F('excel', 'copilot-edit') },
    { title: 'Formulas with Copilot', body: 'Describe the calculation you need and get the right formula.', image: F('excel', 'formulas') },
    { title: 'Format with Copilot', body: 'Add columns and highlight what matters with a simple request.', image: F('excel', 'format') },
    { title: 'Simplify your data', body: 'Go from a prompt to real insights without advanced Excel skills.', image: F('excel', 'simplify') },
    { title: 'Share and collaborate', body: 'Share workbooks so everyone works from the same numbers.', image: F('excel', 'share') },
  ],
  powerpoint: [
    { title: 'Edit with Copilot', body: 'Describe a change and Copilot makes it in your deck, for you to review.', image: F('powerpoint', 'copilot') },
    { title: 'Expand your ideas', body: 'Ask Copilot for more detail or a new slide on your topic.', image: F('powerpoint', 'expand') },
    { title: 'Use a free template', body: 'Start from thousands of customizable designs.', image: F('powerpoint', 'templates') },
    { title: 'Digitize your handwriting', body: 'Draw or write on a slide and turn it into clean text or shapes.', image: F('powerpoint', 'handwriting') },
    { title: 'Add a video explainer', body: 'Present with yourself on screen using Cameo.', image: F('powerpoint', 'cameo') },
    { title: 'Rehearse with Speaker Coach', body: 'Practice and get instant feedback on pace and wording.', image: F('powerpoint', 'speaker-coach') },
  ],
  outlook: [
    { title: 'Everything in one view', body: 'Email, calendar and contacts side by side, so you can plan your day in one place.', image: F('outlook', 'one-place') },
    { title: 'Connect your accounts', body: 'Bring Outlook.com, Gmail, Yahoo, iCloud and work or school email into one app.', image: F('outlook', 'accounts') },
    { title: 'Protect your mailbox', body: 'Attachments and links are scanned for threats, and encryption keeps messages private.', image: F('outlook', 'protect') },
    { title: 'Organize your day', body: 'Schedule events, track packages and flights, and set reminders.', image: F('outlook', 'organize') },
    { title: 'Draft with Copilot', body: 'Say what you want to send and Copilot drafts it, with the tone and length you choose.', image: F('outlook', 'copilot-draft') },
    { title: 'Catch up on long threads', body: 'Copilot summarizes long conversations so you can reply faster.', image: F('outlook', 'catch-up') },
  ],
  onenote: [
    { title: 'Copilot in OneNote', body: 'Turn notes into plans, lists and ideas with a prompt.', image: F('onenote', 'copilot') },
    { title: 'Sketch and annotate', body: 'Digital ink that feels like a pen, for drawing and highlighting.', image: F('onenote', 'ink') },
    { title: 'Share and collaborate', body: 'Build notebooks together and see everyone’s ideas in one place.', image: F('onenote', 'share') },
    { title: 'Voice transcription', body: 'Record and transcribe so you can focus on the conversation.', image: F('onenote', 'transcription') },
    { title: 'OneNote in education', body: 'Searchable notebooks for lesson plans and staff collaboration.', image: F('onenote', 'education') },
  ],
  teams: [
    { title: 'Secure meetings', body: 'Built-in security controls and encryption for every meeting.', image: F('teams', 'protection') },
    { title: 'Teams Phone', body: 'Call any phone number from Teams, like a landline in the cloud.', image: F('teams', 'calling') },
    { title: 'Queues for customers', body: 'Handle customer calls as a team, with reporting.', image: F('teams', 'queues') },
    { title: 'Teams Rooms and Places', body: 'Book desks and rooms, and run meetings that work for people in the room and remote.', image: F('teams', 'rooms') },
  ],
  onedrive: [
    { title: 'Back up your PC', body: 'Files, photos and settings stay safe even if something happens to your computer.', image: F('onedrive', 'desktop') },
    { title: 'Back up your phone', body: 'Photos and videos upload automatically, with Personal Vault for sensitive files.', image: F('onedrive', 'phone') },
    { title: 'Back up your Xbox', body: 'Save game captures to share and keep.', image: F('onedrive', 'xbox') },
    { title: 'Work from anywhere', body: 'Changes sync across devices and files are available offline.', image: F('onedrive', 'anywhere') },
    { title: 'Scan documents', body: 'Use your phone to scan receipts, documents and mementos into the cloud.', image: F('onedrive', 'scan') },
    { title: 'Relive memories', body: 'Curated collections of photos and videos from years past.', image: F('onedrive', 'memories') },
  ],
  sharepoint: [
    { title: 'Work IQ', body: 'Grounds Copilot in your organization’s knowledge, powered by SharePoint.', image: F('sharepoint', 'work-iq') },
    { title: 'Intelligent search', body: 'AI search that understands intent and surfaces the right files and answers.', image: F('sharepoint', 'search') },
    { title: 'Custom agents', body: 'Build an agent with exactly the knowledge you choose.', image: F('sharepoint', 'agents') },
    { title: 'AI workflows', body: 'Describe a process in plain language and automate it across SharePoint and Teams.', image: F('sharepoint', 'workflows') },
    { title: 'Copilot in SharePoint', body: 'Describe a site or page and SharePoint builds the structure for you.', image: F('sharepoint', 'copilot') },
    { title: 'A branded hub', body: 'One home for company news, culture, apps and resources.', image: F('sharepoint', 'hub') },
  ],
  planner: [
    { title: 'All your work in one place', body: 'Tasks, to-dos, plans and projects from across Microsoft 365.', image: F('planner', 'one-place') },
    { title: 'Focus on today', body: 'My Day, My Tasks and My Plans keep what’s due front and center.', image: F('planner', 'my-day') },
    { title: 'Plan your way', body: 'Lists, boards, timelines and charts, starting from templates.', image: F('planner', 'views') },
    { title: 'Plan together', body: 'Build and manage plans with your team.', image: F('planner', 'together') },
    { title: 'Big projects too', body: 'Scheduling, resourcing, dashboards and goals that scale with the work.', image: F('planner', 'projects') },
    { title: 'Copilot in Planner', body: 'Generate buckets, tasks and goals, and get updates on risks.', image: F('planner', 'copilot') },
  ],
  defender: [
    { title: 'Stay ahead of threats', body: 'One app that watches over your devices and accounts.', image: F('defender', 'threats') },
    { title: 'Protect work and personal devices', body: 'Real-time monitoring for phones and computers, with alerts and tips.', image: F('defender', 'devices') },
  ],
};

// Extra facts from the app pages.
const extra = {
  outlook: { points: ['Free with Windows, and free on Mac, iPhone and Android for personal use', 'Works with Outlook.com, Gmail, Yahoo, iCloud and work accounts', 'Ad-free from Basic up; custom business email on business plans'] },
  teams: {
    points: ['Teams (free): chat, communities and calls up to 60 minutes', 'Family: Teams for up to six people', 'Business: Teams Essentials, or Microsoft 365 Business plans', 'Enterprise: Teams Enterprise ($8.55 user/month), Teams Premium, Teams Phone and Teams Rooms'],
  },
  planner: { useCases: ['Marketing', 'Sales', 'Software development', 'IT', 'Human resources', 'Project management', 'Operations'] },
};

export const platforms = ['Windows', 'Mac', 'iPhone and iPad', 'Android', 'Web'];

// Copilot's features are the AI features already listed on the Personal page.
features.copilot = aiFeatures.items.slice(0, 6).map(({ title, body, image }) => ({ title, body, image }));

apps.forEach((app) => {
  app.features = features[app.id] ?? [];
  Object.assign(app, extra[app.id]);
});
