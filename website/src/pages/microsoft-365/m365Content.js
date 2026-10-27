// Content for the Microsoft 365 Personal page (/microsoft-365), plus bits every page in the section shares.
// Plans come from plans.js and apps from apps.js, so nothing here repeats a price or an app description.
// Product names and facts mirror microsoft.com (October 2026); descriptions are our own words.
// Images live in public/images/m365/.
import { asset } from '@/app/base.js';


const IMG = asset('/images/m365');
const ICON = `${IMG}/icons`;
export const PLANS_PATH = '/microsoft-365/plans';

// The four audience pages. Shown as a switcher in each page's hero.
export const audiences = [
  { label: 'Personal', href: '/microsoft-365' },
  { label: 'Business', href: '/microsoft-365/business' },
  { label: 'Enterprise', href: '/microsoft-365/enterprise' },
  { label: 'Education', href: '/microsoft-365/education' },
  { label: 'Government', href: '/microsoft-365/government' },
];

export const hero = {
  eyebrow: 'Microsoft 365 for you and your family',
  title: 'Your everyday apps, now with AI built in',
  body: 'Word, Excel, PowerPoint, Outlook and more, with Copilot to help you write, plan and create. Cloud storage and security come in the same plan.',
  primary: { label: 'See plans and pricing', href: PLANS_PATH },
  secondary: { label: 'Try free for a month', href: '/microsoft-365/try-free' },
  image: `${IMG}/hero-bg.avif`,
};

export const sectionNav = [
  { label: 'How it works', id: 'how-it-works' },
  { label: 'Features', id: 'features' },
  { label: 'What’s included', id: 'whats-included' },
  { label: 'Plans', id: 'plans' },
  { label: 'Students', id: 'students' },
  { label: 'FAQ', id: 'faq' },
];

export const howItWorks = {
  eyebrow: 'How it works',
  title: 'Get more done with less effort',
  items: [
    { title: 'Research and brainstorm', body: 'Ask Copilot to look into a topic and get back a clear, sourced report you can act on.', image: `${IMG}/feature-researcher.avif`, alt: 'Copilot writing a research report about jobs after college' },
    { title: 'Organize and plan', body: 'Turn a crowded inbox, scattered notes and to-dos into a plan with next steps.', image: `${IMG}/feature-cowork.avif`, alt: 'Copilot finding messages and drafting replies' },
    { title: 'Create and polish', body: 'Draft documents, design slides and tighten your writing without leaving the app you’re in.', image: `${IMG}/feature-edit.avif`, alt: 'Copilot turning a planning document into a presentation slide' },
    { title: 'Protect what matters', body: 'Files backed up in OneDrive and devices watched over by Microsoft Defender, wherever you work.', image: `${IMG}/get-started-frontier.avif`, alt: 'Icons for document review, analytics and security' },
  ],
};

export const features = {
  eyebrow: 'Features',
  title: 'AI features included with Microsoft 365',
  items: [
    { title: 'Cowork', tag: 'Premium and Pro', body: 'An AI collaborator that plans and works through multi-step tasks with you, while you stay in control.', image: `${IMG}/feature-cowork.avif`, alt: 'Copilot reviewing messages and drafting replies' },
    { title: 'Researcher', tag: 'Premium and Pro', body: 'Deep research across the web, delivered as a detailed report with sources.', image: `${IMG}/feature-researcher.avif`, alt: 'Copilot researching job opportunities' },
    { title: 'Analyst', tag: 'Premium and Pro', body: 'Point it at your files and get clear analysis, charts and forecasts in minutes.', image: `${IMG}/feature-analyst.avif`, alt: 'Copilot generating a forecast chart' },
    { title: 'Edit with Copilot', body: 'Rewrite, restructure and refine as you work in Word, Excel, PowerPoint and Outlook.', image: `${IMG}/feature-edit.avif`, alt: 'Copilot building a slide from a document' },
    { title: 'Voice', body: 'Talk through ideas out loud and get answers in a natural back-and-forth.', image: `${IMG}/feature-voice.avif`, alt: 'Voice controls with a microphone button' },
    { title: 'Vision', body: 'Share your screen or camera and get help with whatever you’re looking at.', image: `${IMG}/feature-vision.avif`, alt: 'Video call controls over a plant' },
    { title: 'More AI usage', body: 'Personal and Family raise your Copilot limits for chat, images, Voice and Vision.', image: `${IMG}/feature-more-ai.avif`, alt: 'Microsoft 365 app icons connected through Copilot' },
    { title: 'OneDrive Restyle', body: 'Give your photos a fresh look with AI-powered editing styles.', image: `${IMG}/feature-restyle.avif`, alt: 'A photo restyled into stickers' },
    { title: 'Audio Overviews', body: 'Turn your notes into a podcast-style summary you can listen to anywhere.', image: `${IMG}/feature-audio.avif`, alt: 'Copilot playing an AI-generated audio summary' },
    { title: 'Rewrite in Teams', body: 'Polish a message before you send it, with the right tone and length.', image: `${IMG}/feature-teams-rewrite.avif`, alt: 'Copilot rewriting a Teams message' },
  ],
};

export const news = [
  { tag: 'Student offer', title: 'Students save 50%', body: 'Sign up with your college email and get Microsoft 365, Copilot included, at half price.', cta: 'Get the offer', href: '#students', image: `${IMG}/news-student.avif`, alt: 'A student studying with a laptop and digital notes' },
  { tag: 'Copilot', title: 'Built for work, made for you', body: 'From Excel to PowerPoint to Word, Copilot helps with more kinds of work.', cta: 'Open Copilot', href: '/copilot', image: `${IMG}/news-copilot.avif`, alt: 'The Copilot logo surrounded by photos of people' },
];

export const whatsIncluded = {
  eyebrow: 'What’s included',
  title: 'Powerful apps for life and work',
  groups: [
    { label: 'Productivity apps', ids: ['copilot', 'word', 'excel', 'powerpoint', 'outlook', 'onenote', 'teams'] },
    { label: 'Security and storage', ids: ['onedrive', 'defender'] },
  ],
};

export const plansSection = {
  eyebrow: 'Plans',
  title: 'Find the plan that’s right for you',
};

export const students = {
  eyebrow: 'Students',
  title: 'College students save 50% on Microsoft 365 Personal',
  body: 'Everything in Personal, including Copilot and 1 TB of storage, at half the price while you’re in college.',
  steps: [
    { title: 'Create your account', body: 'Sign up with a personal email address (not your school one), or sign in.' },
    { title: 'Add payment info', body: 'Enter or update how you’d like to pay.' },
    { title: 'Verify you’re in college', body: 'Confirm with your school email address or other student details.' },
    { title: 'Start using it', body: 'Install the apps and get going.' },
  ],
  cta: { label: 'Get the student offer', href: '/store/microsoft-365/student' },
};

export const getStarted = [
  { title: 'Choose your plan', body: 'Apps, cloud storage, AI and security that fit the way you work.', cta: 'See plans and pricing', href: PLANS_PATH, image: `${IMG}/get-started-plans.avif`, alt: 'A presentation being edited on a laptop and phone' },
  { title: 'Try what’s next in AI', body: 'Join the Frontier program to try new AI features before everyone else.', cta: 'Learn about Frontier', href: '/microsoft-365/frontier', image: `${IMG}/get-started-frontier.avif`, alt: 'Icons for document review, analytics and security' },
];

export const faq = [
  { q: 'What is Microsoft 365?', a: 'A subscription that brings together apps like Word, Excel, PowerPoint and Outlook with Copilot, OneDrive cloud storage and Microsoft Defender security, on all your devices.' },
  { q: 'Is Microsoft 365 the same as Office 365?', a: 'Yes. Office 365 was renamed Microsoft 365. The apps are the same; the subscription now also includes Copilot, more storage and security tools.' },
  { q: 'Which plan is right for me?', a: 'Basic is for storage and ad-free email. Personal adds the desktop apps and Copilot for one person. Family shares that with up to six people. Premium gives the most AI.' },
  { q: 'How does Copilot work across the apps?', a: 'Copilot is built into Word, Excel, PowerPoint, Outlook and OneNote, so you can ask for drafts, summaries, analysis and slides right where you’re working.' },
  { q: 'Can I share Copilot with my family?', a: 'Family members get the apps, storage and security. The AI features stay with the subscription owner.' },
  { q: 'What devices does it work on?', a: 'Windows PCs, Macs, iPhones, iPads and Android phones and tablets, plus any web browser.' },
  { q: 'How is my data protected?', a: 'Your files stay yours. They’re encrypted in OneDrive, and you decide what to share and with whom.' },
  { q: 'What do I get for free?', a: 'A free Microsoft account includes web and mobile versions of the apps, 5 GB of storage and Outlook with ads.' },
];
