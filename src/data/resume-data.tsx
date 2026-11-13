import { GitHubIcon, LinkedInIcon } from "@/components/icons";

// English resume data for the page metadata and the /graphql `me` query.
// The rendered page reads messages/*.json; mirror content changes here.
export const RESUME_DATA = {
  name: "Sie Ren-Bin",
  initials: "Jason",
  location: "Taichung, Taiwan",
  locationLink: "https://www.google.com/maps/place/Taichung",
  about:
    "AI Agent / LLM Application Engineer with a front-end foundation — agent tooling, RAG/MCP integrations, and the UIs that ship them.",
  summary:
    "Software engineer building web apps since 2022, including banking and e-commerce client work, now focused on AI agents. Currently a vendor engineer at Google via Wipro, working on an internal browser-to-device web console. Builds multi-agent pipelines, agent-callable tools and guardrail hooks (automatic checks on agent actions) for the AI coding agents Claude Code, Codex CLI, Pi and Antigravity. Also builds cited retrieval (RAG that cites its sources) and MCP integrations, which connect agents to outside tools and data. Has wired the OpenAI, Claude and Gemini APIs and local open-source models (Ollama) behind one provider interface. Works directly with business stakeholders to turn requirements into shipped features.",
  avatarUrl: "",
  personalWebsiteUrl: "",
  contact: {
    email: "polyklietoscanon@gmail.com",
    social: [
      {
        name: "GitHub",
        url: "https://github.com/jasonsie",
        icon: GitHubIcon,
      },
      {
        name: "LinkedIn",
        url: "https://www.linkedin.com/in/jason-sie-b56196131/",
        icon: LinkedInIcon,
      },
    ],
  },
  education: [
    {
      school: "National Taiwan Normal University",
      degree: "Master's Degree, Department of Fine Arts (Art Theory)",
      start: "2014",
      end: "2018",
    },
    {
      school: "National Taiwan Normal University",
      degree: "Bachelor's Degree, Department of Fine Arts",
      start: "2010",
      end: "2014",
    },
  ],
  work: [
    {
      company: "Wipro",
      link: "https://www.wipro.com",
      badges: ["Client: Google", "Vendor"],
      title: "Software Engineer · Developer Tools",
      start: "2026/06",
      end: null,
      description:
        "Web Console, Now in Dogfood (Internal Trial):\n• Develop Angular front-end features and back-end endpoints for an internal web console that connects to devices from the browser (Web Serial/WebUSB) for faster device development\n• Standardized how its front-end and back-end dev servers run, and ran a code-health pass\n• Used internal AI coding agents for both, with project rules as agent memory, agent skills (reusable instructions) and plan-mode reviews (plans checked before edits)\n\nUsability:\n• Drafted the web console's dogfood survey on usability for non-technical users (tooltips, docs, clarity on tracked activity)\n• Filed usability bugs found in testing",
    },
    {
      company: "Lityo",
      badges: ["Client: Cathay United Bank", "Onsite"],
      title: "Front End Developer",
      start: "2024/11",
      end: "2026/05",
      description:
        "Bank CMS:\n• Architected a modular Angular 18 CMS and built its modules from bank business units' requirements\n• Cut new page development time by 40% and improved code reusability across 15+ components\n\nAuthentication, API & Coding Standards:\n• Implemented the secure authentication system and API architecture, so 2+ team members could develop and debug features independently, with 50% faster onboarding\n• Abstracted data-flow libraries and set coding standards, making code 35% easier to read and maintain\n\nAir-Gapped Deployment:\n• Deployed the development environment inside the bank's air-gapped network (cut off from outside networks), meeting strict security requirements",
    },
    {
      company: "Seidor APA",
      link: "https://www.linkedin.com/company/seidor/mycompany/",
      badges: ["SAP Commerce (Hybris)"],
      title: "Front End Developer",
      start: "2023/05",
      end: "2024/10",
      description:
        "CSR-to-SSR Migration (Client-Side to Server-Side Rendering):\n• Led the CSR-to-SSR migration of Falcon Pack's live SAP Commerce storefront (UAE)\n• Improved initial page load time by 60% and raised SEO performance\n• Worked directly with the client as part of a Spain-based team\n\nState Management, Payment Bug & Testing:\n• Refactored the Redux state-management architecture, cutting code complexity by 30% and letting 4+ team members share data\n• Resolved a critical payment-session bug affecting 15% of checkout transactions\n• Set up a cross-device testing workflow (Ngrok, Android Studio) and built custom NPM modules, speeding up development by 45%",
    },
    {
      company: "韋爻研策",
      badges: ["Onsite"],
      title: "Front End Developer",
      start: "2022",
      end: "2023/04",
      description:
        "Next.js Project Foundation:\n• Architected the folder structure, CSS conventions, formatting rules, and a Git branching strategy for separate development and production environments\n\nData-Flow Architecture:\n• Designed how data flows through Props, Context, Redux and Local Storage, with consistent API-fetching patterns across 20+ components",
    },
  ],
  skills: [
    "Claude Code",
    "Skills & subagents",
    "Multi-agent pipelines",
    "Prompt & context engineering",
    "Codex CLI",
    "Antigravity",
    "OpenAI API",
    "Claude API",
    "Gemini API",
    "Ollama (local models)",
    "Cited retrieval",
    "MCP",
    "Agent-callable CLIs",
    "Guardrail hooks",
    "TypeScript",
    "JavaScript",
    "React/Next.js",
    "Angular",
    "RxJS",
    "Redux",
    "SSR",
    "SAP Commerce/Spartacus",
    "Node.js",
    "Python",
    "Bash",
    "Git worktrees & PR flow",
    "CI",
    "Testing",
    "ADRs & spec-driven development",
  ],
  projects: [
    {
      title: "zkfy",
      techStack: [
        "Claude Code",
        "Multi-agent",
        "Skills & Hooks",
        "Notion MCP",
        "Python",
      ],
      description:
        "Turns URLs, videos and text into linked notes in the Obsidian app. A multi-agent Claude Code plugin (also on Codex CLI, Pi, Antigravity): eight prompt-defined agents run a discover → distill → render → integrate pipeline. Adds cited retrieval from those notes, Notion MCP import and web-clipper (an agent-callable companion built on Obsidian Web Clipper). v1.8.1, 88 unit tests.",
      link: { label: "github.com", href: "https://github.com/jasonsie/zkfy" },
    },
    {
      title: "ai-dotfiles",
      techStack: ["Claude Code", "Codex CLI", "Pi", "Antigravity", "Python"],
      description:
        "One source of agent tooling for four AI coding agents: 17 original agent skills plus adapted community ones, shared MCP config and guardrail hooks. One PreToolUse hook (1,388 lines, 107 tests) gives each agent task its own Git worktree (working copy). A nightly headless (unattended) Claude Code run, limited to one pre-approved command, writes a personal dev log. 654 tests in CI.",
    },
    {
      title: "lan2cli",
      techStack: [
        "TypeScript",
        "OpenAI API",
        "Claude API",
        "Gemini API",
        "Ollama",
      ],
      description:
        "CLI that turns natural-language requests into shell commands, forked from Builder.io's ai-shell. Refactored its OpenAI-only code so OpenAI, Claude, Gemini and local open-source models (Ollama) share one provider interface. Normalized each provider's streamed replies to one SSE (server-sent events) format. 121 tests.",
      link: {
        label: "github.com",
        href: "https://github.com/jasonsie/lan2cli",
      },
    },
  ],
} as const;
