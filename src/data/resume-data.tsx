import { FalconLogo, SeidorLogo } from "@/images/logos";
import { GitHubIcon, LinkedInIcon } from "@/components/icons";

export const RESUME_DATA = {
  name: "Sie Ren-Bin (Jason)",
  initials: "Jason",
  location: "Taichung, Taiwan",
  locationLink: "https://www.google.com/maps/place/Taichung",
  about:
    "Front End developer, dedicated to user-friendly UI UX, scalable web applications and also javascript ecosystem",
  summary:
    "I specialize in taking products from concept to implant and is also well-experience to cooperate with the international team. I excel in building scalable and maintainable code-base. For the current time, I am dedicated to the 'Javascript Ecosystem' with React, Next.js,Redux, Angular, Rxjs and a taste of Node.js for the most of the time.",
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
      degree: "Bachelor's Degree in Fine Arts Department",
      start: "2014",
      end: "2018",
    },
  ],
  work: [
    {
      company: "Seidor APA",
      link: "https://www.linkedin.com/company/seidor/mycompany/",
      badges: ["Hybris"],
      title: "Front End Developer",
      logo: SeidorLogo,
      start: "2023",
      end: null,
      description: `Essential
                      • Customize Angular and Spartacus model to map CMS component data on the client side
                      • Refactor the sharable logic of Redux data storage for team's usage
                      • Introduce tools, Ngrok, Androind Studio..., to test on versatile devices
                      • Customize NPM module to assist teams with the speed of development
                      • Upgrade version for important features: CSR to SSR

                    Support
                    • Hot fix on payment issue by redesigning the moment of loading session
                    • Refactor the legacy code for better readability and maintenance

                    Others
                    • Design UI/UX layout via Figma and generate the basic well-ruled wireframe
                    • Basic concept about back-end and database in both Node.js and Java
                    • Familiar with business logic of eCommerce, SAP Commerce and Hybris
                    • Project management tools, Jira, Confluence...`,
    },
    {
      company: "韋爻研策",
      link: "https://parabol.co",
      badges: ["Office"],
      title: "Front End Developer",
      logo: "",
      start: "2022",
      end: "2023",
      description: `Implemented new features, improved code delivery process, and initiated migration to Next.js. 
         Technologies: React, TypeScript, GraphQL`,
    },
  ],
  skills: [
    "JavaScript",
    "TypeScript",
    "React/Next.js",
    "Angular",
    "Rxjs",
    "SAP Commerce",
    "Spartacus",
    "Node.js",
  ],
  projects: [
    {
      title: "Falconpack",
      techStack: [
        "Front End Developer",
        "TypeScript",
        "Angular",
        "Spartacus",
        "SSR",
      ],
      description:
        "The E-Commerce platform that is consulting to SAP Commerce Cloud with CMS structure in UAE",
      logo: FalconLogo,
      link: {
        label: "github.com",
        href: "https://falconpackonline.com/en/",
      },
    },
  ],
} as const;




