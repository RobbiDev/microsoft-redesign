// Copy for /microsoft-365/education. Replaces "For schools"; student pricing lives on the Personal page.
// Plans come from plans.js.

export const hero = {
  eyebrow: 'Microsoft 365 for education',
  title: 'Tools for teaching, learning and running a school',
  body: 'Secure, connected apps for students, teachers and IT, with AI built for the classroom.',
  primary: { label: 'See education plans', href: '#plans' },
  secondary: { label: 'Talk to a partner', href: '/microsoft-365/resources#contact-sales' },
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
