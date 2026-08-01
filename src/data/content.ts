export const profile = {
  name: "Michael Nwankwo",
  shortName: "Mike",
  title: "Senior Software Engineer · Engineering Team Lead",
  email: "mike.creator@icloud.com",
  location: "Open to remote · full-time & contract",
  summary:
    "I lead small engineering teams and ship production systems across Flutter, React/Next, Python, and Laravel — with measurable delivery gains, not slide-deck promises.",
  resumeHref: "/Michael_Nwankwo_Resume.pdf",
  links: {
    linkedin: "https://www.linkedin.com/in/michael-nwankwo-29684817b",
    github: "https://github.com/yourstrulycreator",
    x: "https://x.com/0xmikelu",
  },
} as const;

export const metrics = [
  { value: "90%", label: "System lag cut at Binnox" },
  { value: "70%", label: "Faster deployments" },
  { value: "25%+", label: "CI/CD speedup across clients" },
  { value: "5+", label: "Years shipping product" },
] as const;

export const projects = [
  {
    name: "Netwrkly",
    year: "2025–26",
    tag: "Client · Lead",
    blurb:
      "Event networking platform — contact capture, follow-ups, and admin tooling. Led delivery as engineering team lead at Big Kitty Labs.",
    stack: ["React Native", "Node", "PostgreSQL", "Next.js"],
    href: "https://netwrkly.ai",
    featured: true,
  },
  {
    name: "Alliance / AdsDriven",
    year: "2025–26",
    tag: "Client · Platform",
    blurb:
      "Alliance Highway Safety data platform and VR impaired-driving simulator work — Laravel systems plus immersive training experiences.",
    stack: ["Laravel", "PHP", "Unity/VR"],
    href: "https://adsdriven.com",
    featured: true,
  },
  {
    name: "Haulwrx",
    year: "2025–26",
    tag: "Client · Lead → DevOps",
    blurb:
      "Formerly Sliply. Led the product framework/template build, then owned DevOps — AWS, domains, and production infrastructure.",
    stack: ["AWS", "DevOps", "React Native", "Rails"],
    href: "https://www.haulwrx.com",
    featured: true,
  },
  {
    name: "Qweek Studio",
    year: "2026",
    tag: "Product",
    blurb:
      "Script-native previs tool — Character Bank and World Ledger drive every frame for film / creative workflows.",
    stack: ["Next.js", "Python", "Docker"],
    href: "https://qweekstudio.com",
    featured: true,
  },
  {
    name: "ReplyOps",
    year: "2026",
    tag: "AI · SaaS",
    blurb:
      "Brand-safe AI reply generator for customer reviews and messages — checkout, sessions, and usage limits shipped end-to-end.",
    stack: ["Next.js", "OpenAI", "Vercel"],
    href: "https://replyops.vercel.app",
    featured: true,
  },
  {
    name: "BitSaving",
    year: "2025",
    tag: "Flutter · KR",
    blurb:
      "Flutter mobile app updates for Uproot (South Korea) — shipping and maintaining the Bitsaving consumer app on iOS/Android.",
    stack: ["Flutter", "Firebase", "Mobile"],
    href: "https://bitsaving.kr",
    featured: true,
  },
  {
    name: "PatriotPulse",
    year: "2025",
    tag: "Product",
    blurb:
      "Political campaign platform — voter insights and outreach tools for candidates and teams.",
    stack: ["Web", "Data"],
    href: "https://patriotpulse.com",
    featured: true,
  },
  {
    name: "Binnox",
    year: "2023–25",
    tag: "CTO · Platform",
    blurb:
      "Food & grocery delivery platform transformation — architecture, performance, and CI/CD ownership as CTO.",
    stack: ["Backend", "CI/CD", "Mobile"],
    href: "https://binnox.app",
    featured: true,
  },
  {
    name: "Vooom",
    year: "2025",
    tag: "Marketplace",
    blurb:
      "Peer-to-peer vehicle sharing marketplace for commercial leasing.",
    stack: ["React", "Node", "MongoDB"],
    href: "https://vooom.live",
    featured: false,
  },
  {
    name: "LinkedIn Agent",
    year: "2025",
    tag: "AI · Agents",
    blurb:
      "Autonomous LinkedIn browsing and data extraction agent with decision-making and fallback logic.",
    stack: ["Python", "LLM"],
    href: "https://github.com/yourstrulycreator/ai-agent",
    featured: false,
  },
] as const;

export const experience = [
  {
    role: "Senior Software Engineer (Team Lead)",
    company: "Big Kitty Labs",
    period: "May 2025 – Present",
    href: "https://bigkittylabs.com",
    points: [
      "Lead 2–3 engineers across concurrent client projects — architecture, sprint planning, and code review.",
      "Primary technical contact for clients; translate requirements into delivery plans without a PM middleman.",
      "Cut CI/CD pipeline times 25%+ across engagements.",
    ],
  },
  {
    role: "Chief Technology Officer",
    company: "Binnox Global LLC",
    period: "Mar 2023 – Nov 2025",
    href: "https://binnox.app",
    points: [
      "Led technical transformation of a fast-growing food & grocery delivery platform.",
      "Reduced system lag 90%, improved data retrieval 50%, cut deploy time 70%.",
    ],
  },
  {
    role: "Flutter Engineer",
    company: "Namu Labs",
    period: "Nov 2024 – Mar 2026",
    href: "https://namu-labs.com",
    points: [
      "Shipped high-performance Flutter apps to App Store and Play Store.",
      "Cut build times 30% while adapting quickly to a Web3 stack.",
    ],
  },
  {
    role: "Frontend Developer Intern → Engineer",
    company: "Namu Labs",
    period: "Oct 2023 – Oct 2024",
    href: "https://namu-labs.com",
    points: [
      "Built reusable Next.js UI foundations that sped up delivery across the product.",
    ],
  },
  {
    role: "Senior Full-Stack Developer",
    company: "BullChord Web3",
    period: "Feb 2023 – Jul 2023",
    href: "https://bullchrd-git-main-tykees.vercel.app/",
    points: [
      "Music NFT royalty platform — React frontend + smart contracts on BNB Smart Chain.",
      "Web3.js / Ethers.js integrations in a remote agile team.",
    ],
  },
  {
    role: "Full Stack Engineer",
    company: "FirstClassPilot",
    period: "Jan 2022 – Apr 2023",
    points: [
      "React SPAs from Figma, Python automation/ML bots, database optimization.",
    ],
  },
  {
    role: "Junior Web Developer",
    company: "Webcreative · CORE Labs",
    period: "Mar 2022 – Oct 2022",
    points: [
      "WordPress + custom PHP/Symfony plugins; SEO and performance lifts.",
    ],
  },
] as const;

export const skills = {
  languages: ["TypeScript", "JavaScript", "Python", "Dart", "PHP", "SQL", "Java"],
  frameworks: ["React", "Next.js", "Flutter", "Node/Express", "Laravel"],
  leadership: [
    "Team lead (2–3 engineers)",
    "Sprint planning",
    "Client ownership",
    "Technical architecture",
  ],
  devops: ["GitHub Actions", "CI/CD", "Heroku", "Vercel", "Agile/Scrum"],
} as const;
