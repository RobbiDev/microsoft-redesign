// Copy for /microsoft-365/education. Replaces "For schools"; student pricing lives on the Personal page.
// Plans come from plans.js.
import { asset } from '@/app/base.js';


export const hero = {
  eyebrow: 'Microsoft 365 for education',
  title: 'Tools for teaching, learning and running a school',
  body: 'Secure, connected apps for students, teachers and IT, with AI built for the classroom.',
  primary: { label: 'See education plans', href: '#plans' },
  secondary: { label: 'Talk to a partner', href: '/microsoft-365/resources#contact-sales' },
};

const IMG = (file) => asset(`/images/m365/education/${file}.avif`);

export const benefits = {
  eyebrow: 'Why Microsoft 365 Education',
  title: 'One secure platform for learning',
  items: [
    { title: 'AI-powered learning', body: 'Tools that help students practice and build confidence, governed by the school.', image: IMG('ai-learning') },
    { title: 'Skills for the future', body: 'Digital and AI skills students will use after graduation.', image: IMG('future-skills') },
    { title: 'Less overhead', body: 'Consistent, high-quality learning without extra operational work.', image: IMG('efficiency') },
    { title: 'Simple, secure IT', body: 'Protect every student’s identity, device and data.', image: IMG('secure-it') },
  ],
};

export const lti = {
  eyebrow: 'Microsoft 365 LTI',
  title: 'Bring Microsoft 365 into your learning management system',
  items: [
    { title: 'Free to turn on', body: 'Add Microsoft 365 tools to your LMS at no additional cost.', image: IMG('lti-free') },
    { title: 'Works with your LMS', body: 'Canvas, Blackboard, Moodle and other platforms.', image: IMG('lti-lms') },
    { title: 'Security built in', body: 'The same security and compliance as Microsoft 365.', image: IMG('lti-security') },
    { title: 'Richer courses', body: 'Build course content with Microsoft 365 apps and Copilot.', image: IMG('lti-content') },
  ],
};

export const resources = {
  eyebrow: 'Resources',
  title: 'Help for educators and IT',
  items: [
    { title: 'Help and learning', body: 'Answers and support for Microsoft 365 Education products.', href: 'https://support.microsoft.com/education' },
    { title: 'Documentation for IT', body: 'Guidance for admins, developers and partners.', href: 'https://learn.microsoft.com/microsoft-365/education/' },
    { title: 'Microsoft Learn Educator Center', body: 'Learning paths and modules for teachers.', href: 'https://learn.microsoft.com/training/educator-center/' },
  ],
};

export const plansSection = {
  eyebrow: 'Plans',
  title: 'Plans for every institution',
  note: 'Education plans are sold through Microsoft partners. Contact one for pricing.',
};

export const forClassrooms = {
  eyebrow: 'In the classroom',
  title: 'More than documents',
  items: [
    { title: 'Teams for Education', body: 'Classes, assignments, grades and video lessons in one place.' },
    { title: 'Copilot for education', body: 'Help with lesson planning, summaries and admin work, governed by the school.' },
    { title: 'Minecraft Education', body: 'Game-based learning for problem-solving, creativity and teamwork.' },
    { title: 'Reflect', body: 'Check-ins that help students name and share how they feel.' },
    { title: 'Microsoft 365 LTI', body: 'Bring Microsoft 365 into the learning management system you already use.' },
  ],
};

export const forStudents = {
  title: 'Are you a college student?',
  body: 'Get Microsoft 365 Personal for half price while you’re in college.',
  cta: { label: 'See the student offer', href: '/microsoft-365#students' },
};

export const faq = [
  { q: 'What’s the difference between A1, A3 and A5?', a: 'A1 covers web apps and collaboration. A3 adds the desktop apps, device management and security. A5 adds advanced security, analytics and governance.' },
  { q: 'How do schools buy Microsoft 365?', a: 'Through a Microsoft education partner, who can also help with setup and rollout.' },
  { q: 'Can students use Microsoft 365 at home?', a: 'Yes, students can sign in with their school account on their own devices, depending on the school’s plan.' },
];
