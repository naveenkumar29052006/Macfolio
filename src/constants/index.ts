const navLinks = [
  {
    id: 1,
    name: "Projects",
    type: "finder",
  },
  {
    id: 3,
    name: "Contact",
    type: "contact",
  },
  {
    id: 4,
    name: "Resume",
    type: "resume",
  },
] as const;

const navIcons = [
  {
    id: 1,
    img: "/icons/wifi.svg",
  },
  {
    id: 2,
    img: "/icons/search.svg",
  },
  {
    id: 3,
    img: "/icons/user.svg",
  },
  {
    id: 4,
    img: "/icons/mode.svg",
  },
];

const dockApps = [
  {
    id: "finder",
    name: "Projects", // was "Finder"
    icon: "finder.png",
    canOpen: true,
  },
  {
    id: "safari",
    name: "Bio & Experience", // was "Articles"
    icon: "safari.png",
    canOpen: true,
  },
  {
    id: "photos",
    name: "Gallery", // was "Photos"
    icon: "photos.png",
    canOpen: true,
  },
  {
    id: "contact",
    name: "Contact", // or "Get in touch"
    icon: "contact.png",
    canOpen: true,
  },
  {
    id: "terminal",
    name: "Skills", // was "Terminal"
    icon: "terminal.png",
    canOpen: true,
  },
  {
    id: "trash",
    name: "Archive", // was "Trash"
    icon: "trash.png",
    canOpen: true,
  },
];

const blogPosts = [
  {
    id: 1,
    date: "Sep 2, 2025",
    title:
      "TypeScript Explained: What It Is, Why It Matters, and How to Master It",
    image: "/images/blog1.png",
    link: "https://jsmastery.com/blog/typescript-explained-what-it-is-why-it-matters-and-how-to-master-it",
  },
  {
    id: 2,
    date: "Aug 28, 2025",
    title: "The Ultimate Guide to Mastering Three.js for 3D Development",
    image: "/images/blog2.png",
    link: "https://jsmastery.com/blog/the-ultimate-guide-to-mastering-three-js-for-3d-development",
  },
  {
    id: 3,
    date: "Aug 15, 2025",
    title: "The Ultimate Guide to Mastering GSAP Animations",
    image: "/images/blog3.png",
    link: "https://jsmastery.com/blog/the-ultimate-guide-to-mastering-gsap-animations",
  },
];

const techStack = [
  {
    category: "AI / ML",
    items: ["PyTorch", "TensorFlow", "LangGraph", "LangChain", "RAG", "LLMs", "Generative AI", "NLP", "Crew AI", "Vector Embeddings"],
  },
  {
    category: "Languages",
    items: ["Python", "TypeScript", "JavaScript", "Rust", "SQL"],
  },
  {
    category: "Frameworks",
    items: ["FastAPI", "Next.js", "React", "Node.js", "scikit-learn"],
  },
  {
    category: "Cloud & DevOps",
    items: ["Docker", "Kubernetes", "AWS", "GitHub Actions"],
  },
  {
    category: "APIs & Testing",
    items: ["Playwright", "REST APIs"],
  },
];

const socials = [
  {
    id: 1,
    text: "Github",
    icon: "/icons/github.svg",
    bg: "#333",
    link: "https://github.com/naveendhaterwal",
  },
  {
    id: 2,
    text: "LinkedIn",
    icon: "/icons/linkedin.svg",
    bg: "#0077b5",
    link: "https://www.linkedin.com/in/naveen-kumar-4217931ab/",
  },
  {
    id: 3,
    text: "Telegram",
    icon: "https://upload.wikimedia.org/wikipedia/commons/8/82/Telegram_logo.svg",
    bg: "#0088cc",
    link: "https://t.me/naveendhaterwal",
  },
  {
    id: 4,
    text: "Call",
    icon: "https://www.reshot.com/preview-assets/icons/YUPNL5R2TW/phone-YUPNL5R2TW.svg",
    bg: "#25d366",
    link: "tel:+918302906048",
  },
];

const photosLinks = [
  {
    id: 1,
    icon: "/icons/gicon1.svg",
    title: "Library",
  },
  {
    id: 2,
    icon: "/icons/gicon2.svg",
    title: "Memories",
  },
  {
    id: 3,
    icon: "/icons/file.svg",
    title: "Places",
  },
  {
    id: 4,
    icon: "/icons/gicon4.svg",
    title: "People",
  },
  {
    id: 5,
    icon: "/icons/gicon5.svg",
    title: "Favorites",
  },
];

const gallery = [
  {
    id: 1,
    img: "/images/gal1.png",
  },
  {
    id: 2,
    img: "/images/gal2.png",
  },
  {
    id: 3,
    img: "/images/gal3.png",
  },
  {
    id: 4,
    img: "/images/gal4.png",
  },
];

export {
  navLinks,
  navIcons,
  dockApps,
  blogPosts,
  techStack,
  socials,
  photosLinks,
  gallery,
};

const WORK_LOCATION = {
  id: 1,
  type: "work",
  name: "Work",
  icon: "/icons/work.svg",
  kind: "folder",
  children: [
    // ▶ Credit Risk AI
    {
      id: 7,
      name: "Credit Risk AI",
      icon: "/images/folder.png",
      kind: "folder",
      position: "top-10 left-5",
      windowPosition: "top-10 right-10",
      children: [
        {
          id: 1,
          name: "Project Details.txt",
          icon: "/images/txt.png",
          kind: "file",
          fileType: "txt",
          position: "top-5 left-10",
          description: [
            "PROJECT NAME:",
            "AI-Powered Credit Risk Engine",
            "",
            "PROBLEM:",
            "A gap exists between black-box machine learning and explainable AI in credit risk assessment, making decisions hard to justify and audit.",
            "",
            "SOLUTION:",
            "An enterprise-grade platform combining a Multi-Model ML Ensemble, Retrieval-Augmented Generation (RAG), and Multi-Agent Orchestration to deliver high-fidelity, policy-compliant, and fully justifiable lending decisions.",
            "",
            "TECH STACK:",
            "• Frontend: Next.js 14, Tailwind",
            "• Backend: FastAPI",
            "• ML/AI: scikit-learn, LangGraph, Groq Llama 3",
            "• Database: Qdrant Vector DB",
            "",
            "KEY FEATURES:",
            "• Algorithmic Disagreement Detection",
            "• Agentic Workflow with LangGraph",
            "• RAG-Powered Policy Compliance",
            "• Explainable AI (XAI) Output",
            "",
            "LEARNINGS:",
            "• Orchestrating specialized AI agents in a deterministic pipeline",
            "• Synthesizing numerical ML scores into human-readable text"
          ],
        },
        {
          id: 2,
          name: "Github Repo",
          icon: "/images/safari.png",
          kind: "file",
          fileType: "url",
          href: "https://github.com/naveendhaterwal/AI-Powered-Credit-Risk-Engine",
          position: "top-10 right-20",
        },
        {
          id: 3,
          name: "Live Demo",
          icon: "/images/safari.png",
          kind: "file",
          fileType: "url",
          href: "https://gen-ai-2.vercel.app/",
          position: "top-20 right-40",
        },
      ],
    },

    // ▶ SolUPI
    {
      id: 5,
      name: "SolUPI",
      icon: "/images/folder.png",
      kind: "folder",
      position: "top-32 left-5",
      windowPosition: "top-40 right-10",
      children: [
        {
          id: 1,
          name: "Project Details.txt",
          icon: "/images/txt.png",
          kind: "file",
          fileType: "txt",
          position: "top-5 left-10",
          description: [
            "PROJECT NAME:",
            "SolUPI",
            "",
            "PROBLEM:",
            "Users face high premiums (98-99 INR) for safe USDC deals. Lower rates (94-95 INR) in P2P markets often carry severe risks of bank freeze scams and fraud.",
            "",
            "SOLUTION:",
            "SolUPI solves this by providing a direct, verified on-ramp. Users purchase USDC securely via UPI with automated verification, eliminating the risk of peer-to-peer bank freezes.",
            "",
            "TECH STACK:",
            "• Frontend: Next.js, Tailwind, Framer Motion",
            "• Backend: Node.js, PostgreSQL, Prisma",
            "• Blockchain: Solana Web3.js",
            "",
            "OPTIMIZATIONS:",
            "• Automated email-based RRN verification",
            "• JWT authentication and paginated order tracking",
            "",
            "TRADE-OFFS:",
            "• Uses Render for backend (cost-effective) with potential cold starts",
            "",
            "LEARNINGS:",
            "• Bridging Web2 fiat payment confirmations with Web3 on-chain settlements",
          ],
        },
        {
          id: 2,
          name: "Github Repo",
          icon: "/images/safari.png",
          kind: "file",
          fileType: "url",
          href: "https://github.com/naveendhaterwal/SolUPI-V2",
          position: "top-10 right-20",
        },
        {
          id: 3,
          name: "Live Demo",
          icon: "/images/safari.png",
          kind: "file",
          fileType: "url",
          href: "https://sol-upi-v2.vercel.app/",
          position: "top-20 right-40",
        },
      ],
    },

    // ▶ Nosana Skills
    {
      id: 8,
      name: "Nosana Skills",
      icon: "/images/folder.png",
      kind: "folder",
      position: "top-56 left-5",
      windowPosition: "top-[280px] right-10",
      children: [
        {
          id: 1,
          name: "Project Details.txt",
          icon: "/images/txt.png",
          kind: "file",
          fileType: "txt",
          position: "top-5 left-10",
          description: [
            "PROJECT NAME:",
            "Nosana Skill Marketplace",
            "",
            "PROBLEM:",
            "Deploying AI workloads on decentralized GPUs lacks streamlined operational tools, making orchestration complex for developers and AI agents.",
            "",
            "SOLUTION:",
            "Built an AI Compute Skill Marketplace with an npx CLI that allows easy discovery, installation, and deployment of 14 deterministic operational skills for the Nosana Network.",
            "",
            "TECH STACK:",
            "• Frontend: Next.js",
            "• Package / CLI: npx (Node.js)",
            "• Ecosystem: Nosana Network",
            "",
            "KEY FEATURES:",
            "• 1-Command CLI Installation (npx nos-skill)",
            "• 14 Specialized Operational Skills (GPUs, Agent deployment, etc.)",
            "• Seamless Agent Integration (Cursor, Claude, Windsurf, Antigravity)",
            "",
            "LEARNINGS:",
            "• Developing decentralized infrastructure tools that interoperate with autonomous AI agents."
          ],
        },
        {
          id: 2,
          name: "Github Repo",
          icon: "/images/safari.png",
          kind: "file",
          fileType: "url",
          href: "https://github.com/naveendhaterwal/Nosana-skill",
          position: "top-10 right-20",
        },
        {
          id: 3,
          name: "Live Demo",
          icon: "/images/safari.png",
          kind: "file",
          fileType: "url",
          href: "https://nosana-skill.vercel.app/",
          position: "top-20 right-40",
        },
      ],
    },

    // ▶ Coinverse
    {
      id: 6,
      name: "Coinverse",
      icon: "/images/folder.png",
      kind: "folder",
      position: "top-80 left-5",
      windowPosition: "top-[380px] right-10",
      children: [
        {
          id: 1,
          name: "Project Details.txt",
          icon: "/images/txt.png",
          kind: "file",
          fileType: "txt",
          position: "top-5 left-10",
          description: [
            "PROJECT NAME:",
            "Coinverse",
            "",
            "PROBLEM:",
            "Traders and enthusiasts lack a unified, consolidated view of real-time crypto prices, market news, and portfolio insights.",
            "",
            "SOLUTION:",
            "Built a responsive dashboard integrating live CoinGecko market data and CryptoNews updates with secure Privy authentication.",
            "",
            "TECH STACK:",
            "• Frontend: React.js, Custom CSS",
            "• Auth: Privy",
            "• APIs: CoinGecko, CryptoNews",
            "",
            "OPTIMIZATIONS:",
            "• Real-time chart rendering and responsive layout",
            "• Seamless authentication flow",
            "",
            "TRADE-OFFS:",
            "• Custom CSS over utility libraries for unique visual identity",
            "",
            "LEARNINGS:",
            "• Integrating multiple third-party real-time data APIs effectively",
          ],
        },
        {
          id: 2,
          name: "Github Repo",
          icon: "/images/safari.png",
          kind: "file",
          fileType: "url",
          href: "https://github.com/naveendhaterwal/Coinverse",
          position: "top-10 right-20",
        },
        {
          id: 3,
          name: "Live Demo",
          icon: "/images/safari.png",
          kind: "file",
          fileType: "url",
          href: "https://coinverse-nine.vercel.app/",
          position: "top-20 right-40",
        },
      ],
    },
  ],
};

const ABOUT_LOCATION = {
  id: 2,
  type: "about",
  name: "About me",
  icon: "/icons/info.svg",
  kind: "folder",
  children: [
    {
      id: 4,
      name: "about-me.txt",
      icon: "/images/txt.png",
      kind: "file",
      fileType: "txt",
      position: "top-10 left-5",
      subtitle: "Meet the Developer Behind the Code",
      image: "/images/adrian.jpg",
      description: [
        "INTRODUCTION:",
        "Hi! I'm Naveen Kumar 👋, an AI Engineer and Full-Stack Developer who loves solving complex problems and building impactful, intelligent applications.",
        "",
        "COMPETITIVE PROGRAMMING:",
        "I have a strong foundation in Data Structures and Algorithms, consistently honing my skills on platforms like LeetCode and Codeforces.",
        "• LeetCode Rating: 1400+",
        "• Codeforces Rating: 900+",
        "",
        "TECHNICAL EXPERTISE:",
        "I specialize in AI/ML technologies like RAG, LLMs, LangGraph, and PyTorch, combined with robust Full-Stack development using Python, FastAPI, Next.js, and TypeScript.",
        "",
        "OPEN SOURCE & COMMUNITY:",
        "• Contributed to the Nosana ecosystem by developing the Skill Marketplace and Nosana MCP for decentralized AI.",
        "• Open Source Contributor at GetAlby (Bitcoin Lightning ecosystem) under Summer of Bitcoin 2025.",
      ],
    },
  ],
};

const RESUME_LOCATION = {
  id: 3,
  type: "resume",
  name: "Resume",
  icon: "/icons/file.svg",
  kind: "folder",
  children: [
    {
      id: 1,
      name: "Resume.pdf",
      icon: "/images/pdf.png",
      kind: "file",
      fileType: "pdf",
      // you can add `href` if you want to open a hosted resume
      // href: "/your/resume/path.pdf",
    },
  ],
};

const TRASH_LOCATION = {
  id: 4,
  type: "trash",
  name: "Trash",
  icon: "/icons/trash.svg",
  kind: "folder",
  children: [
    {
      id: 1,
      name: "trash1.png",
      icon: "/images/image.png",
      kind: "file",
      fileType: "img",
      position: "top-10 left-10",
      imageUrl: "/images/trash-1.png",
    },
    {
      id: 2,
      name: "trash2.png",
      icon: "/images/image.png",
      kind: "file",
      fileType: "img",
      position: "top-40 left-80",
      imageUrl: "/images/trash-2.png",
    },
  ],
};

export const locations = {
  work: WORK_LOCATION,
  about: ABOUT_LOCATION,
  resume: RESUME_LOCATION,
  trash: TRASH_LOCATION,
};

const INITIAL_Z_INDEX = 1000;

const WINDOW_CONFIG = {
  finder: { isOpen: false, zIndex: INITIAL_Z_INDEX, data: null },
  contact: { isOpen: false, zIndex: INITIAL_Z_INDEX, data: null },
  resume: { isOpen: false, zIndex: INITIAL_Z_INDEX, data: null },
  safari: { isOpen: false, zIndex: INITIAL_Z_INDEX, data: null },
  photos: { isOpen: false, zIndex: INITIAL_Z_INDEX, data: null },
  terminal: { isOpen: false, zIndex: INITIAL_Z_INDEX, data: null },
  txtfile: { isOpen: false, zIndex: INITIAL_Z_INDEX, data: null },
  imgfile: { isOpen: false, zIndex: INITIAL_Z_INDEX, data: null },
};

export { INITIAL_Z_INDEX, WINDOW_CONFIG };