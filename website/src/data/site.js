// Site-wide content shared by every page: header navigation, accounts, and footer.

export const globalNav = ['Microsoft 365', 'Azure', 'Copilot', 'Windows', 'Surface', 'XBOX', 'Store', 'Small Business', 'Support'];

// Product hubs. Each has a URL `base`; on those pages the header shows the hub's own navigation.
// A link with `menu` opens a dropdown; `menu.list` overrides the flattened `cols` links.
export const hubs = {
  'Microsoft 365': {
    title: 'Microsoft 365',
    base: '/microsoft-365',
    blurb: 'Word, Excel, PowerPoint, Outlook and more',
    // Nine pages instead of microsoft.com's ~45: one per audience, plus Copilot, apps, plans and resources.
    targets: {
      Personal: '/microsoft-365',
      'Plans and pricing': '/microsoft-365/plans',
    },
    links: [
      { label: 'Personal' },
      { label: 'Business' },
      { label: 'Enterprise' },
      { label: 'Education' },
      { label: 'Government' },
      { label: 'Copilot' },
      { label: 'Apps' },
      { label: 'Plans and pricing' },
      { label: 'Resources' },
    ],
  },
  Azure: {
    title: 'Azure',
    base: '/azure',
    blurb: 'Cloud services, AI and developer tools',
    links: [
      { label: 'Explore', menu: { cols: [{ title: 'Discover', links: ['What is Azure?', 'Get started', 'Global infrastructure'] }, { title: 'Trust', links: ['Security', 'Compliance', 'Sustainability'] }], feature: 'Try Azure for free' } },
      { label: 'Products', menu: { cols: [{ title: 'Popular', links: ['Virtual Machines', 'Azure AI Foundry', 'Azure SQL', 'Kubernetes Service'] }, { title: 'Categories', links: ['AI + machine learning', 'Compute', 'Databases', 'Networking'] }], feature: 'Azure AI Foundry' } },
      { label: 'Solutions' },
      { label: 'Pricing' },
      { label: 'Partners' },
      { label: 'Resources', menu: { cols: [{ title: 'Learn', links: ['Documentation', 'Training', 'Architecture Center'] }, { title: 'Community', links: ['Blog', 'Events', 'Customer stories'] }], feature: 'Azure documentation' } },
    ],
  },
  Copilot: {
    title: 'Copilot',
    base: '/copilot',
    blurb: 'Your AI companion at home and at work',
    links: [
      { label: 'Copilot app' },
      { label: 'Copilot for Microsoft 365' },
      { label: 'Copilot Pro' },
      { label: 'Learn', menu: { cols: [{ title: 'Explore', links: ['What Copilot can do', 'Prompt ideas', 'Privacy and safety'] }, { title: 'Get Copilot', links: ['Windows', 'iOS', 'Android', 'Web'] }], feature: 'Copilot Pro' } },
    ],
  },
  Windows: {
    title: 'Discover Windows',
    base: '/windows',
    blurb: 'Windows 11 features, PCs and help',
    links: [
      { label: 'Explore Windows', menu: { cols: [{ title: 'Windows 11', links: ['Features', 'Security', 'Accessibility', 'Gaming'] }, { title: 'Get it', links: ['Upgrade to Windows 11', 'Find the right PC'] }], feature: 'New Windows 11 PCs' } },
      { label: 'Shop PCs' },
      { label: 'Windows for Business' },
      { label: 'Support' },
    ],
  },
  Surface: {
    title: 'Discover Surface',
    base: '/surface',
    blurb: 'Laptops, 2-in-1s and accessories',
    links: [
      { label: 'Computers', menu: { list: ['Surface Laptop Ultra', 'Surface Pro', 'Surface Laptop', 'Surface RTX Spark Dev Box', 'Compare Surface models'], cols: [{ title: 'Laptops', links: ['Surface Laptop', 'Surface Laptop Studio'] }, { title: '2-in-1s', links: ['Surface Pro'] }, { title: 'Find yours', links: ['Compare all Surface', 'Help me choose', 'Certified Refurbished'] }], feature: 'Surface Laptop' } },
      { label: 'Accessories' },
      { label: 'Help & Support', menu: { cols: [{ title: 'Get help', links: ['Surface support', 'Warranty', 'Repair', 'Drivers and firmware'] }, { title: 'Learn', links: ['Getting started', 'How-to videos'] }], feature: 'Protection plans' } },
      { label: 'Shop' },
      { label: 'Surface for Business' },
    ],
  },
};

// The Microsoft Store is a hub too: everything you can buy lives under /store.
hubs['Microsoft Store'] = {
  title: 'Microsoft Store',
  base: '/store',
  blurb: 'Surface, Xbox, Microsoft 365 and PCs',
  links: [
    { label: 'Surface', menu: { list: ['Surface Laptop Ultra', 'Surface Pro', 'Surface Laptop', 'Surface accessories', 'Shop all Surface'] } },
    { label: 'Xbox', menu: { list: ['Consoles', 'Controllers', 'Xbox Game Pass', 'Games', 'Shop all Xbox'] } },
    { label: 'Microsoft 365' },
    { label: 'Windows PCs' },
    { label: 'Accessories' },
    { label: 'Deals' },
    { label: 'Business' },
  ],
};

export const menuLinks = (menu) => menu.list ?? menu.cols.flatMap((c) => c.links);

// Demo accounts for the account switcher (fictional).
export const accounts = [
  { name: 'Avery Collins', email: 'avery.collins@outlook.com', color: '#0e3b6e', plan: 'Microsoft 365 Family' },
  { name: 'Jordan Reyes', email: 'jreyes.home@outlook.com', color: '#45606f', plan: 'Free account' },
  { name: 'Avery C', email: 'avery.collins@northwindtraders.com', color: '#5b4636', plan: 'Work account' },
  { name: 'devsandbox', email: 'devsandbox42@outlook.com', color: '#0b5cd5', plan: 'Free account' },
  { name: 'Avery Collins', email: 'acollins18@fabrikam.edu', color: '#2f5d50', plan: 'School account' },
  { name: 'Sam Patel', email: 'hello@sampatel.dev', color: '#45454d', plan: 'Microsoft 365 Personal' },
];

export const initials = (name) => name.split(/\s+/).map((w) => w[0]).join('').slice(0, 2).toUpperCase();

// Announcement bar under the header. Set `enabled: true` to show it again.
export const promo = {
  enabled: false,
  text: 'Get extended free returns and price protection on gifts through Jan 31, 2027.',
  cta: 'Shop deals',
  href: '/store/deals',
};

export const footerCols = [
  { title: 'What’s new', links: ['Surface Laptop Ultra', 'Surface Pro', 'Surface Laptop', 'Surface RTX Spark Dev Box', 'Explore Copilot', 'Explore Microsoft products', 'Windows 11 apps'] },
  { title: 'Microsoft Store', links: ['Account profile', 'Download Center', 'Microsoft Store support', 'Returns', 'Order tracking', 'Certified Refurbished', 'Why buy from Microsoft Store', 'Flexible Payments'] },
  { title: 'Education', links: ['Microsoft in education', 'Devices for education', 'Microsoft Teams for Education', 'Microsoft 365 Education', 'How to buy for your school', 'Educator training and development', 'Deals for students and parents', 'AI for education'] },
  { title: 'Business', links: ['Microsoft AI', 'Microsoft Security', 'Dynamics 365', 'Microsoft 365', 'Microsoft Power Platform', 'Microsoft Teams', 'Microsoft Copilot', 'Small Business'] },
  { title: 'Developer & IT', links: ['Azure', 'Microsoft Developer', 'Microsoft Learn', 'Support for AI marketplace apps', 'Microsoft Tech Community', 'Microsoft Marketplace', 'Software companies', 'Visual Studio'] },
  { title: 'Company', links: ['Careers', 'About Microsoft', 'Company news', 'Privacy at Microsoft', 'Investors', 'Diversity and inclusion', 'Accessibility', 'Sustainability'] },
];

export const legal = ['Sitemap', 'Contact Microsoft', 'Privacy', 'Terms of use', 'Trademarks', 'Safety & eco', 'Recycling', 'About our ads'];

// "All Microsoft" mega menu, grouped by category.
export const allMicrosoft = [
  { title: 'Software', links: ['Windows Apps', 'Outlook', 'OneDrive', 'Microsoft Teams', 'OneNote', 'Microsoft Edge', 'Moving from Skype to Teams'] },
  { title: 'PCs & Devices', links: ['Computers', 'Shop XBOX', 'Accessories', 'VR & mixed reality', 'Certified Refurbished', 'Trade-in for cash'] },
  { title: 'Entertainment', links: ['XBOX Game Pass Ultimate', 'PC Game Pass', 'XBOX games', 'PC games'] },
  { title: 'Business', links: ['Microsoft AI', 'Microsoft Security', 'Dynamics 365', 'Microsoft 365 for business', 'Microsoft Power Platform', 'Windows 365', 'Small Business', 'Digital Sovereignty'] },
  { title: 'Developer & IT', links: ['Azure', 'Microsoft Developer', 'Microsoft Learn', 'Support for AI marketplace apps', 'Microsoft Tech Community', 'Microsoft Marketplace', 'Software companies', 'Visual Studio'] },
  { title: 'Other', links: ['Microsoft Rewards', 'Free downloads & security', 'Education', 'Gift cards', 'Licensing', 'Unlocked stories'] },
];

// Header search. With an empty box, `popular` is shown; typing filters `searchIndex`.
export const searchPopular = ['Surface', 'XBOX', 'Games', 'Gift cards', 'Microsoft 365', 'Store support & returns'];

export const searchIndex = [
  ...new Set([
    ...globalNav,
    ...Object.values(hubs).flatMap((h) => h.links.flatMap((l) => [l.label, ...(l.menu ? menuLinks(l.menu) : [])])),
    ...allMicrosoft.flatMap((c) => c.links),
    ...footerCols.flatMap((c) => c.links),
  ]),
];

// Labels with a fixed destination: other sites, or shopping links that live in the Store.
export const linkTargets = {
  XBOX: 'https://www.xbox.com/',
  Store: '/store',
  Deals: '/store/deals',
  'Small Business': '/store/business',
  'Shop XBOX': '/store/xbox',
  Computers: '/store/windows-pcs',
  Accessories: '/store/accessories',
  'Certified Refurbished': '/store/certified-refurbished',
  'Trade-in for cash': '/store/trade-in',
  'Gift cards': '/store/gift-cards',
  'Flexible Payments': '/store/flexible-payments',
  'Order tracking': '/store/orders',
  Returns: '/store/returns',
  Outlook: '/microsoft-365/apps#outlook',
  OneDrive: '/microsoft-365/apps#onedrive',
  OneNote: '/microsoft-365/apps#onenote',
  'Microsoft Teams': '/microsoft-365/apps#teams',
  'Microsoft 365 for business': '/microsoft-365/business',
  'Microsoft 365 Education': '/microsoft-365/education',
  'Microsoft Copilot': '/microsoft-365/copilot',
};

// "Surface & More!" -> "surface-and-more"
export const slugify = (text) =>
  text.toLowerCase().replace(/&/g, ' and ').replace(/[^a-z0-9]+/g, '-').replace(/^-+|-+$/g, '');

// Builds a site path from labels: pathFor('/store', 'Surface Pro') -> '/store/surface-pro'
export const pathFor = (...parts) => '/' + parts.flatMap((p) => p.split('/')).map(slugify).filter(Boolean).join('/');

// Where a link label goes: a fixed target, a hub's page, or a path under `base`.
export const hrefFor = (label, base = '') => linkTargets[label] ?? hubs[label]?.base ?? pathFor(base, label);

export const isExternal = (href) => /^https?:/.test(href);

// Where a link inside a hub goes: the hub's own target for that label, or base + label.
export const hubHref = (hub, label) => hub.targets?.[label] ?? pathFor(hub.base, label);

// The hub whose pages contain `pathname`, if any.
export const hubKeyForPath = (pathname) =>
  Object.keys(hubs).find((k) => pathname === hubs[k].base || pathname.startsWith(`${hubs[k].base}/`)) ?? null;
