// Copy for /microsoft-365/copilot. Replaces "Explore Copilot", "Pricing for Copilot" and the
// separate Copilot pages for individuals, business and enterprise. Plans come from plans.js.
import { asset } from '@/app/base.js';


export const hero = {
  eyebrow: 'Microsoft 365 Copilot',
  title: 'AI that works inside the apps you use every day',
  body: 'Copilot drafts, summarizes, analyzes and creates in Word, Excel, PowerPoint, Outlook and Teams. Here’s how to get it, whoever you are.',
  primary: { label: 'Find your plan', href: '#get-copilot' },
  secondary: { label: 'Try Copilot free', href: 'https://copilot.microsoft.com' },
};

export const sectionNav = [
  { label: 'Get Copilot', id: 'get-copilot' },
  { label: 'How it works', id: 'how' },
  { label: 'For you', id: 'features' },
  { label: 'Business', id: 'business' },
  { label: 'Enterprise', id: 'enterprise' },
  { label: 'Copilot Studio', id: 'studio' },
  { label: 'Frontier', id: 'frontier' },
  { label: 'FAQ', id: 'faq' },
];

// How each audience gets Copilot. Plan ids refer to plans.js.
export const paths = {
  eyebrow: 'Get Copilot',
  title: 'One Copilot, three ways to get it',
  items: [
    { audience: 'For you and your family', body: 'Included in Personal, Family, Premium and Pro, with more usage at each step. AI features are for the subscription owner.', planIds: ['personal', 'premium', 'pro'], more: { label: 'All personal plans', href: '/microsoft-365/plans?for=personal' } },
    { audience: 'For business', body: 'Built into Business Standard and Premium, or add it to any business plan.', planIds: ['business-standard', 'business-premium', 'copilot-business'], more: { label: 'All business plans', href: '/microsoft-365/plans?for=business' } },
    { audience: 'For enterprise', body: 'Included in E7, or add it to E3, E5, Office 365 and frontline plans.', planIds: ['e7', 'copilot-enterprise'], more: { label: 'All enterprise plans', href: '/microsoft-365/plans?for=enterprise' } },
  ],
};

export const faq = [
  { q: 'Is Copilot free?', a: 'Copilot Chat is free with a Microsoft account, with limited usage. Microsoft 365 plans add Copilot inside the apps and raise the limits.' },
  { q: 'What’s the difference between Copilot Chat and Microsoft 365 Copilot?', a: 'Copilot Chat answers questions using the web. Microsoft 365 Copilot also works with your documents, email and meetings, inside the apps.' },
  { q: 'Can my family use my Copilot?', a: 'No. On Family, Premium and Pro, the AI features are only for the subscription owner. Everything else is shared.' },
  { q: 'Are there usage limits?', a: 'Yes. Each plan has its own limits, from “higher than free” on Personal up to the highest on Pro and E7.' },
];

// ── Harvested from microsoft.com/copilot pages (paraphrased; images in public/images/m365/copilot/) ──

export const knowsYourWork = {
  "eyebrow": "How it works",
  "title": "AI that knows your work",
  "items": [
    {
      "title": "AI integrated into your apps",
      "body": "Copilot lives inside Word, Excel, PowerPoint, Outlook and Teams.",
      "image": asset("/images/m365/copilot/explore/ai-integrated-apps.avif")
    },
    {
      "title": "Grounded in your work",
      "body": "Work IQ gives Copilot context about your company, team roles and projects.",
      "image": asset("/images/m365/copilot/explore/grounded-in-work.avif")
    },
    {
      "title": "Leading AI models, all in one place",
      "body": "Several leading AI models are available in one experience, each paired with Work IQ.",
      "image": asset("/images/m365/copilot/explore/leading-ai-models.avif")
    },
    {
      "title": "Auto advantage, the right model for the task",
      "body": "Auto picks a model and effort level per request by balancing accuracy, speed and cost.",
      "image": asset("/images/m365/copilot/explore/auto-model-selection.avif")
    }
  ]
};

export const forBusiness = {
  "eyebrow": "For business",
  "title": "One AI for everyday work and bigger jobs",
  "items": [
    {
      "title": "Get everyday work done faster",
      "body": "Ask, draft and summarize the routine work that fills your day.",
      "image": asset("/images/m365/copilot/business/chat-window.avif")
    },
    {
      "title": "Delegate complex work",
      "body": "Hand multi-step jobs to Copilot (Cowork) and review the results.",
      "image": asset("/images/m365/copilot/business/cowork-briefing.avif")
    },
    {
      "title": "Put AI to work for specific needs",
      "body": "Agents bring role-specific help to focused tasks and processes.",
      "image": asset("/images/m365/copilot/business/notebooks-craft.avif")
    },
    {
      "title": "Make teamwork easier across projects",
      "body": "Copilot Notebooks keep project content together, with audio summaries and suggested updates."
    },
    {
      "title": "Put recurring work in motion",
      "body": "Give Autopilot a role and goal and it keeps ongoing work going and reports back.",
      "image": asset("/images/m365/copilot/business/autopilot-dashboard.avif")
    },
    {
      "title": "Protect your business while you work",
      "body": "Copilot keeps the security and controls your business relies on."
    }
  ]
};

export const forEnterprise = {
  "eyebrow": "For enterprise",
  "title": "Copilot across the whole organization",
  "items": [
    {
      "title": "Work smarter with secure AI chat",
      "body": "Copilot Chat works across web and work data by text or voice.",
      "image": asset("/images/m365/copilot/enterprise/copilot-chat.avif")
    },
    {
      "title": "Leverage high-quality results",
      "body": "Work IQ personalizes answers using tenant Graph data, third-party data and past chats.",
      "image": asset("/images/m365/copilot/enterprise/copilot-memory.avif")
    },
    {
      "title": "Enable richer outcomes with intelligent search",
      "body": "Semantic, natural-language search across Microsoft 365 and 100+ connectors."
    },
    {
      "title": "Take advantage of ready-made Microsoft agents",
      "body": "Researcher, Analyst and Facilitator, plus the Agent Store and custom agents in Copilot Studio.",
      "image": asset("/images/m365/copilot/enterprise/copilot-search.avif")
    },
    {
      "title": "Empower employees across tasks and teams",
      "body": "Copilot Notebooks gather project content with audio overviews and suggested updates.",
      "image": asset("/images/m365/copilot/enterprise/notebooks.avif")
    },
    {
      "title": "Generate AI-powered images",
      "body": "Make on-brand visuals personalized with Work IQ and refine them with built-in editing.",
      "image": asset("/images/m365/copilot/enterprise/brand-image-shoe.avif")
    },
    {
      "title": "Work confidently",
      "body": "Enterprise security and compliance, SharePoint Advanced Management, encryption, tenant isolation, admin controls and ROI reporting."
    }
  ]
};

export const impact = {
  "eyebrow": "Economic impact",
  "title": "What organizations can expect",
  "body": "Projected over three years in a Forrester Total Economic Impact study commissioned by Microsoft.",
  "items": [
    {
      "title": "100%+",
      "body": "Projected ROI, with potential payback in 10 months."
    },
    {
      "title": "20%+",
      "body": "Projected faster onboarding for new employees."
    },
    {
      "title": "8+",
      "body": "Hours of projected time saved per user per month."
    }
  ]
};

export const customers = {
  "eyebrow": "Customers",
  "title": "Results from Copilot customers",
  "items": [
    {
      "title": "Vodafone",
      "body": "Faster, more accurate contract reviews; 4 hours saved per person per week."
    },
    {
      "title": "Aberdeen City Council",
      "body": "Freed staff capacity turned into savings: 241% projected ROI, $3M USD estimated annual savings.",
      "image": asset("/images/m365/copilot/enterprise/customer-aberdeen.avif")
    }
  ]
};

export const studio = {
  "eyebrow": "Copilot Studio",
  "title": "Build and publish your own agents",
  "body": "Microsoft 365 Copilot includes agent building. Standalone Copilot Studio adds more ways to create, deploy and manage agents, paid with Copilot Credits.",
  "items": [
    {
      "title": "Create",
      "body": "Both build agents with the Chat and Standard harnesses; only Studio adds the GitHub Copilot harness (needs Copilot Credits), IVR agents and multi-agent systems."
    },
    {
      "title": "Deploy",
      "body": "Studio adds publishing to websites, apps and social channels, plus premium and custom Power Platform connectors."
    },
    {
      "title": "Manage",
      "body": "Studio adds Power Platform admin, Dataverse, environments, cost oversight and ROI analytics."
    },
    {
      "title": "Copilot Chat",
      "body": "Included at no extra cost with eligible Microsoft 365 work plans."
    },
    {
      "title": "Pre-purchase plan",
      "body": "Buy Copilot Credit commit units up front."
    },
    {
      "title": "Pay-as-you-go",
      "body": "Pay only for the Copilot Credits you use."
    },
    {
      "title": "Capacity pack",
      "body": "$200 per pack per month for 25,000 Copilot Credits."
    }
  ]
};

export const frontier = {
  "eyebrow": "Frontier program",
  "title": "Try what’s next in AI first",
  "items": [
    {
      "title": "Business user: Access Frontier at work",
      "body": "Need a Microsoft 365 Copilot license and an org opted in; sign in with your work account and use supported experiences.",
      "image": asset("/images/m365/copilot/frontier/tab-business-user.avif")
    },
    {
      "title": "IT admin: Enable Frontier for your organization",
      "body": "Turn Frontier on in the Microsoft 365 admin center, set agent permissions and assign eligible users; admins also control usage-based billing.",
      "image": asset("/images/m365/copilot/frontier/tab-it-admin.avif")
    },
    {
      "title": "Individual subscriber: Try Frontier features with your subscription",
      "body": "Pro, Premium, Personal and Family subscribers switch on 'Preview Frontier features' in Copilot settings in Word, Excel or PowerPoint on the web.",
      "image": asset("/images/m365/copilot/frontier/tab-individual-subscriber.avif")
    }
  ]
};

export const frontierRequirements = {
  "title": "What individuals need for Frontier",
  "items": [
    {
      "title": "Eligible Microsoft 365 subscription",
      "body": "An active Microsoft 365 Pro, Premium, Personal or Family subscription."
    },
    {
      "title": "Access to Microsoft 365 for web",
      "body": "Turn Frontier on separately in each of Word, Excel and PowerPoint on the web via File > Options > Copilot settings > 'Preview Frontier Features'."
    },
    {
      "title": "Copilot settings opt-in",
      "body": "In the Microsoft 365 Copilot desktop app, eligible subscribers see Frontier features automatically, labeled '(Frontier)'."
    }
  ]
};

export const harvestedFaq = [
  {
    "q": "What is Microsoft Copilot and what does it do?",
    "a": "An AI assistant that drafts content, finds and summarizes information, analyzes data and answers questions across Word, Excel, PowerPoint, Outlook and Teams."
  },
  {
    "q": "What is the difference between the Copilot mobile app and the Copilot experience within the Microsoft 365 apps?",
    "a": "The mobile app is a chat assistant for questions, writing and research; in-app Copilot works directly on your document, sheet, deck or inbox."
  },
  {
    "q": "How do I use Copilot in Outlook, Excel, Word, PowerPoint, and does it work across Microsoft 365 apps?",
    "a": "You can point Copilot at a file to build a Word doc or PowerPoint deck and generate images from the chat pane; cross-app behavior is still being improved."
  },
  {
    "q": "What are the most common use cases for Copilot in Microsoft 365?",
    "a": "Writing, research, data analysis, handling communications and multi-step tasks."
  },
  {
    "q": "Are there AI features in Copilot for writing, deep research, data analysis, creating presentations, and image editing?",
    "a": "Yes—drafting, research, analysis, presentations, summaries and image generation/editing are all covered."
  },
  {
    "q": "How can I manage my Microsoft 365 Personal, Family, Premium or Pro subscription?",
    "a": "Sign in to your Microsoft account and open Services & Subscriptions to renew, change payment, switch plans or view benefits."
  },
  {
    "q": "I'm a Microsoft 365 Family subscriber. Does my family get access to Copilot as a part of our plan now?",
    "a": "No. Apps and storage are shared, but Copilot AI features are only for the subscription owner."
  },
  {
    "q": "Are there any special offers for college students?",
    "a": "Yes—eligible students can get discounted plans or free access through their school; check with a college email on the student offer page."
  },
  {
    "q": "What are the benefits of Copilot in Microsoft 365 compared to other AI tools?",
    "a": "It works inside the apps you already use, can apply formatting for you, and its output can be co-edited in real time."
  },
  {
    "q": "Is Copilot secure? How does Microsoft use my data and protect my privacy?",
    "a": "It follows Microsoft's existing security, privacy, compliance and Responsible AI commitments."
  },
  {
    "q": "What is Microsoft Copilot and how is it different from Copilot Chat?",
    "a": "Copilot Chat is a free, web-grounded assistant with eligible plans; a Copilot license adds Work IQ, Copilot in Teams and the Office apps, Microsoft's pre-built agents, and usage analytics."
  },
  {
    "q": "Which apps support Microsoft Copilot and what can it do in each?",
    "a": "Word drafts and summarizes, Excel analyzes and charts, PowerPoint outlines decks, Outlook drafts and summarizes mail, and Teams recaps meetings."
  },
  {
    "q": "What Microsoft Copilot features are usage-based?",
    "a": "Chat and in-app Copilot are included; Copilot Cowork, Code, Autopilot and the Work IQ APIs are billed by usage, with more possibly added."
  },
  {
    "q": "How does usage-based billing work?",
    "a": "Advanced features consume Copilot Credits and you pay for what you use; included features stay included."
  },
  {
    "q": "How do I control what my organization spends?",
    "a": "Admins set usage controls and spending policies in Cost Management in the Microsoft 365 admin center."
  },
  {
    "q": "How does Microsoft Copilot help support data security and privacy?",
    "a": "It follows existing Microsoft 365 permissions; with EDP, prompts stay in the service boundary, are logged for eDiscovery, and aren't used to train the models."
  }
];
