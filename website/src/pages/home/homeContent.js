import { products } from '@/data/products.js';

// All copy for the homepage lives here so components stay purely presentational.

export const hero = {
  lead: 'Empower every person and every organization',
  rest: 'on the planet to achieve more.',
  primary: { label: 'Explore products', href: '#explore' },
  secondary: { label: 'About Microsoft', href: '/about' },
  // Drop files into public/video/. Until hero.mp4 exists, an animated gradient shows instead.
  video: { src: '/video/hero.mp4', poster: '/video/hero-poster.jpg' },
};

export const explore = {
  personal: {
    title: 'For you and your family',
    products,
  },
  business: {
    title: 'For your business',
    // Images live in public/images/business/ (the first reuses a product photo).
    products: [
      { id: 'surface-laptop-ultra-business', href: '/store/business/surface-laptop-ultra', image: '/images/products/surface-laptop-ultra.avif', alt: 'Surface Laptop Ultra in black, open at an angle', badge: 'New', title: 'Surface Laptop Ultra for Business', cta: 'Shop now', detail: 'Workstation-class power in a laptop, with the security and management tools IT teams need.' },
      { id: 'ignite', href: '/events/ignite', image: '/images/business/ignite.avif', alt: 'The Microsoft logo glowing in colored glass', badge: '', title: 'Microsoft Ignite is almost here', cta: 'Register now', detail: 'Our annual event for business leaders and builders, covering the latest in AI, cloud and security.' },
      { id: 'microsoft-365-copilot', href: '/microsoft-365/copilot', image: '/images/business/microsoft-365-copilot.avif', alt: 'The Microsoft 365 Copilot app open on its chat screen', badge: '', theme: 'light', title: 'AI built for work', cta: 'Learn more', detail: 'Microsoft 365 Copilot works across your apps and data to draft, summarize and analyze.' },
      { id: 'surface-rtx-spark-dev-box', href: '/store/business/surface-rtx-spark-dev-box', image: '/images/business/surface-rtx-spark-dev-box.avif', alt: 'A black Surface RTX Spark Dev Box, seen from a low angle', badge: 'New', theme: 'light', title: 'Surface RTX Spark Dev Box for Business', cta: 'Learn more', detail: 'A compact AI workstation for building, tuning and testing models right at your desk.' },
      { id: 'azure', href: '/azure', image: '/images/business/azure.avif', alt: 'A translucent ribbon over a blue and orange gradient', badge: '', theme: 'light', title: 'Build what’s next on Azure', cta: 'Start free', detail: 'Cloud, data and AI services that scale with your business, with pay-as-you-go pricing.' },
      { id: 'microsoft-ai', href: '/ai', image: '/images/business/microsoft-ai.avif', alt: 'Flowing ribbons in pink and orange', badge: '', theme: 'light', title: 'Put Microsoft AI to work', cta: 'Learn more', detail: 'Models, tools and guidance for bringing AI into your products and processes responsibly.' },
      { id: 'microsoft-teams', href: '/microsoft-teams', image: '/images/business/microsoft-teams.avif', alt: 'Four coworkers on a Microsoft Teams video call', badge: '', theme: 'light', title: 'Bring your team together in Teams', cta: 'See plans', detail: 'Chat, meetings, calls and files in one place, for teams of any size.' },
      { id: 'windows-11-pro', href: '/windows/business', image: '/images/business/windows-11-pro.avif', alt: 'Two laptops in mid-air showing the Windows 11 wallpaper', badge: '', title: 'Windows 11 Pro', cta: 'Learn more', detail: 'Built-in security and simple management for the PCs your business runs on.' },
    ],
  },
};

const icons = {
  tablet: 'M6 9h24v18H6zM15 23h6',
  grid: 'M6 6h10v10H6zM20 20h10v10H20zM6 20h10v10H6zM25 4l6 6-6 6-6-6z',
  pad: 'M10 12h16a5 5 0 0 1 5 5l1 7a3 3 0 0 1-5 2l-3-4H12l-3 4a3 3 0 0 1-5-2l1-7a5 5 0 0 1 5-5zM12 16v4M10 18h4M23 17h.1M26 19h.1',
  laptop: 'M8 9h20v14H8zM4 27h28',
  acc: 'M5 13h22v14H5zM9 18h.1M13 18h.1M17 18h.1M21 18h.1M10 22h12M28 4a3 3 0 0 1 3 3v4h-6V7a3 3 0 0 1 3-3z',
  bag: 'M5 12h26v17H5zM13 12V8h10v4M5 18h26',
};

export const shortcuts = [
  { label: 'Shop devices', href: '/store', icon: icons.tablet },
  { label: 'Shop apps & plans', href: '/store/microsoft-365', icon: icons.grid },
  { label: 'Shop gaming', href: '/store/xbox', icon: icons.pad },
  { label: 'Find your next PC', href: '/store/windows-pcs', icon: icons.laptop },
  { label: 'Shop accessories', href: '/store/accessories', icon: icons.acc },
  { label: 'Shop for your business', href: '/store/business', icon: icons.bag },
];

export const featureBanner = {
  id: 'feature-event',
  href: '/events/annual-conference',
  placeholder: 'Event artwork',
  title: 'One week. Infinite possibilities.',
  body: 'At our annual conference on November 17, connect with the people, insights, and innovations redefining the future of business and technology.',
  cta: 'Register now',
};

export const stories = {
  heading: 'Get to know AI and Copilot',
  items: [
    { id: 'story-1', href: '/stories/ai-disaster-response', title: 'When disaster strikes, AI can help', body: 'Using AI-assisted analysis, response teams assess damage faster and direct aid where it’s needed most.', cta: 'Read the story' },
    { id: 'story-2', href: '/stories/ai-global-trade', title: 'When global trade gets messy, AI is here to help', body: 'Learn how a supply chain leader uses a cloud-run AI platform to help companies stay agile in times of uncertainty.', cta: 'Read the article' },
    { id: 'story-3', href: '/stories/datacenters-and-nature', title: 'Designing datacenters using lessons from nature', body: 'Through biomimicry, we’re helping restore and enhance natural ecosystems around more than 20 datacenters.', cta: 'Learn more' },
  ],
};

export const features = [
  { id: 'feat-1', href: '/stories/powering-every-play', title: 'Powering every play', body: 'For pro sports teams, greatness starts in the preparation — and cloud video analysis helps everything align weeks before game day.', cta: 'Read the story' },
  { id: 'feat-2', href: '/stories/state-of-ai-at-work', title: 'The state of AI at work', body: 'New research on how people and organizations are adopting AI, and what leaders are doing to keep up.', cta: 'Read the report' },
  { id: 'feat-3', href: '/stories/securing-what-matters', title: 'Securing what matters', body: 'How a regional hospital network stopped threats faster with AI-assisted security operations.', cta: 'Read the story' },
];

export const socials = [
  { name: 'Facebook', href: 'https://www.facebook.com/Microsoft', glyph: 'f', color: '#1877f2' },
  { name: 'X', href: 'https://x.com/Microsoft', glyph: '𝕏', color: '#000' },
  { name: 'LinkedIn', href: 'https://www.linkedin.com/company/microsoft', glyph: 'in', color: '#0a66c2' },
];
