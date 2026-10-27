// Copy for /microsoft-365/business. Replaces "For business", "Pricing for business", the Business
// Standard and Business Premium pages, and "For small business" (which pointed to the same page).
// Plans come from plans.js.
import { asset } from '@/app/base.js';


const IMG = (file) => asset(`/images/m365/business/${file}.avif`);

export const hero = {
  eyebrow: 'Microsoft 365 for business',
  title: 'Run your business on the apps you already know',
  body: 'Professional email, Teams, cloud storage and Copilot for teams of 1 to 300, with security built in.',
  primary: { label: 'Compare business plans', href: '#plans' },
  secondary: { label: 'Try free for a month', href: '/store/microsoft-365/business-standard/trial' },
};

export const sectionNav = [
  { label: 'Who it’s for', id: 'who' },
  { label: 'Plans', id: 'plans' },
  { label: 'Features', id: 'features' },
  { label: 'Getting started', id: 'get-started' },
  { label: 'FAQ', id: 'faq' },
];

export const who = {
  eyebrow: 'Who it’s for',
  title: 'Built for businesses of every kind',
  items: [
    { title: 'Real estate agents', image: IMG('real-estate'), body: 'Manage listings, keep in touch with clients and sign contracts from one place.' },
    { title: 'Fitness instructors', image: IMG('fitness'), body: 'Take bookings, share schedules and stay in touch with members.' },
    { title: 'Veterinarians', image: IMG('vet'), body: 'Keep appointments, records and team communication organized.' },
    { title: 'Café owners', image: IMG('cafe'), body: 'Plan shifts, track inventory and answer customers quickly.' },
    { title: 'Freelance designers', image: IMG('designer'), body: 'Share work, collect feedback and send invoices from a professional address.' },
    { title: 'Food truck owners', image: IMG('food-truck'), body: 'Post your location, take orders and keep the books on the go.' },
  ],
};

export const plansSection = {
  eyebrow: 'Plans',
  title: 'Pick the plan that fits your team',
  note: 'Prices are per user per month, paid yearly. Monthly billing costs 20% more. Each plan is also sold without Teams, at the price shown under it.',
};

export const features = {
  eyebrow: 'Features',
  title: 'Everything a small business needs',
  items: [
    { title: 'Apps you know', body: 'Word, Excel, PowerPoint and Outlook on every device, with real-time co-authoring.' },
    { title: 'Secure cloud storage', body: '1 TB of OneDrive storage per user, kept up to date across devices.' },
    { title: 'AI for work', body: 'Secure AI chat in every plan, and Copilot in the apps with Standard and Premium.' },
    { title: 'One simple subscription', body: 'Email, storage, meetings and apps on one bill instead of five.' },
    { title: 'Email protection', body: 'Built-in filtering against phishing, spam and malware.' },
    { title: 'Always up to date', body: 'Monthly updates, and it never goes out of support.' },
  ],
};

export const getStarted = {
  eyebrow: 'Getting started',
  title: 'Help when you need it',
  items: [
    { title: 'Try it free for a month', body: 'Web, desktop and mobile apps for your whole team.', image: IMG('trial'), href: '/store/microsoft-365/business-standard/trial', cta: 'Start free trial' },
    { title: 'Talk to sales', image: IMG('sales'), body: 'Questions about plans, pricing or which fits your business.', href: '/microsoft-365/resources#contact-sales', cta: 'Contact sales' },
    { title: 'Set up and manage', image: IMG('admin'), body: 'Add users, domains and devices in the Microsoft 365 admin center.', href: 'https://admin.microsoft.com', cta: 'Open admin center' },
    { title: 'Train your team', image: IMG('training'), body: 'Guided training on setup, security and getting more from Copilot.', href: '/microsoft-365/resources#learn', cta: 'Start learning' },
    { title: 'Find a partner', image: IMG('partner'), body: 'Experts who can set up and roll out Microsoft 365 for you.', href: '/microsoft-365/resources#partners', cta: 'Find a partner' },
  ],
};

export const articles = {
  eyebrow: 'Articles and insights',
  title: 'Grow with AI',
  items: [
    { title: 'Make your marketing shine with AI', body: 'E-book: three steps to better content, with practical prompts.', image: IMG('marketing-ebook'), href: '/microsoft-365/business/ai-marketing-ebook', cta: 'Read the e-book' },
    { title: 'Streamline campaigns with AI', body: 'Automate tasks, personalize experiences and improve return on spend.', image: IMG('ai-marketing'), href: '/microsoft-365/business/ai-marketing-tools', cta: 'Read the article' },
    { title: 'AI for small business: a beginner’s guide', body: 'Use AI to build a stronger brand identity.', image: IMG('ai-guide'), href: '/microsoft-365/business/ai-beginners-guide', cta: 'Read the article' },
  ],
};

export const faq = [
  { q: 'Which business plan should I choose?', a: 'Basic covers email, storage and Teams with web and mobile apps. Standard adds the desktop apps and Copilot. Premium adds advanced security and device management.' },
  { q: 'How many people can use a business plan?', a: 'Business plans support up to 300 users. Larger organizations should look at the enterprise plans.' },
  { q: 'Can I use my own domain for email?', a: 'Yes. Every business plan includes custom email at your domain, like you@yourbusiness.com.' },
  { q: 'Is there a free trial?', a: 'Yes, Basic, Standard and Premium can each be tried free for one month.' },
  { q: 'Can I add Copilot to Business Basic?', a: 'Yes. Microsoft 365 Copilot Business can be added to any business plan.' },
];
