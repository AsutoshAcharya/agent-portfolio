import { Github, Linkedin, Youtube } from "lucide-react";

import ReactIcon from "@/lib/assets/ReactIcon";
import NextJsIcon from "@/lib/assets/NextJsIcon";
import TsIcon from "@/lib/assets/TsIcon";
import TailwindCssIcon from "@/lib/assets/TailwindCssIcon";
import NodeJsIcon from "@/lib/assets/NodeJsIcon";
import ExpressJsIcon from "@/lib/assets/ExpressJsIcon";
import PostgresIcon from "@/lib/assets/PostgresIcon";
import MongoIcon from "@/lib/assets/MongoIcon";
import VsCodeIcon from "@/lib/assets/VsCodeIcon";
import GitIcon from "@/lib/assets/GitIcon";
import GitHubIcon from "@/lib/assets/GitHubIcon";
import FigmaIcon from "@/lib/assets/FigmaIcon";
import PostmanIcon from "@/lib/assets/PostmanIcon";
import UnityIcon from "@/lib/assets/UnityIcon";
import JsIcon from "@/lib/assets/JsIcon";
import MuiIcon from "@/lib/assets/MuiIcon";
import HTMLIcon from "@/lib/assets/HTMLIcon";
import CSSIcon from "@/lib/assets/CSSIcon";
import JiraIcon from "@/lib/assets/JiraIcon";
import SonarQubeIcon from "@/lib/assets/SonarQubeIcon";
import { FC, SVGProps } from "react";
import ReduxIcon from "@/lib/assets/ReduxIcon";

export const rankColors = {
  RADIANT: "text-yellow-400 border-yellow-400",
  IMMORTAL: "text-valorant-red border-valorant-red",
  DIAMOND: "text-pink-400 border-pink-400",
  PLATINUM: "text-teal-400 border-teal-400",
  GOLD: "text-orange-400 border-orange-400",
  SILVER: "text-gray-400 border-gray-400",
} as const;

export type Rank = keyof typeof rankColors;

export const techIcons = {
  React: ReactIcon,
  "Next.js": NextJsIcon,
  TypeScript: TsIcon,
  "Tailwind CSS": TailwindCssIcon,
  "Node.js": NodeJsIcon,
  Express: ExpressJsIcon,
  PostgreSQL: PostgresIcon,
  MongoDB: MongoIcon,
  "VS Code": VsCodeIcon,
  Git: GitIcon,
  GitHub: GitHubIcon,
  Figma: FigmaIcon,
  Postman: PostmanIcon,
  Unity: UnityIcon,
  JavaScript: JsIcon,
  MUI: MuiIcon,
  HTML: HTMLIcon,
  CSS: CSSIcon,
  JIRA: JiraIcon,
  SonarQube: SonarQubeIcon,
  Redux: ReduxIcon,
} as const;

export type AbilityInfo = {
  name: string;
  rank: Rank;
  description: string;
  usage: string;
  isLocked?: boolean;
  unlockRequirement?: string;
  eta?: string;
};

export const techStack: Record<string, Array<AbilityInfo>> = {
  languages: [
    {
      name: "TypeScript",
      rank: "RADIANT",
      description: "Typed JavaScript superset",
      usage: "Improving code safety and developer experience",
    },
    {
      name: "JavaScript",
      rank: "RADIANT",
      description: "Foundation of modern web applications",
      usage: "Creating dynamic web content",
    },
  ],
  frontend: [
    {
      name: "React",
      rank: "RADIANT",
      description: "Component-based UI library",
      usage: "Building dynamic user interfaces",
    },
    {
      name: "Next.js",
      rank: "DIAMOND",
      description: "Full-stack React framework",
      usage: "Server-side rendering & APIs",
    },

    {
      name: "Tailwind CSS",
      rank: "IMMORTAL",
      description: "Modern CSS framework with atomic classes",
      usage: "Efficiently crafting flexible, responsive layouts",
    },
    {
      name: "MUI",
      rank: "RADIANT",
      description: "Comprehensive React UI component library",
      usage: "Accelerating development with pre-built design systems",
    },
    {
      name: "Redux",
      rank: "IMMORTAL",
      description: "A state management library",
      usage: "Global state management and improved maintainability",
    },
    {
      name: "HTML",
      rank: "RADIANT",
      description: "Standard markup language for web pages",
      usage: "Structuring content and defining webpage layout",
    },
    {
      name: "CSS",
      rank: "RADIANT",
      description: "Language for controlling webpage appearance",
      usage: "Applying styles, layouts, and responsive designs",
    },

    // {
    //   name: "Framer Motion",
    //   rank: "DIAMOND",
    //   description: "Animation library for React",
    //   usage: "Crafting fluid and engaging animations",
    // },
  ],
  backend: [
    {
      name: "Node.js",
      rank: "IMMORTAL",
      description: "JavaScript runtime",
      usage: "Building scalable server applications",
    },
    {
      name: "Express",
      rank: "DIAMOND",
      description: "Web framework for Node.js",
      usage: "Developing robust REST APIs",
    },

    // {
    //   name: "Redis",
    //   rank: "PLATINUM",
    //   description: "In-memory data store",
    //   usage: "Caching and real-time data handling",
    // },
  ],
  database: [
    {
      name: "PostgreSQL",
      rank: "IMMORTAL",
      description: "Relational database",
      usage: "Managing structured data efficiently",
    },
    {
      name: "MongoDB",
      rank: "DIAMOND",
      description: "NoSQL document database",
      usage: "Flexible and scalable data storage",
    },
  ],
  tools: [
    {
      name: "VS Code",
      rank: "RADIANT",
      description: "Code editor",
      usage: "Primary development environment",
    },
    {
      name: "Git",
      rank: "RADIANT",
      description: "Distributed version control system",
      usage: "Tracking changes and managing code history",
    },
    {
      name: "GitHub",
      rank: "RADIANT",
      description: "Cloud-based Git repository hosting service",
      usage: "Collaborating on projects and managing repositories",
    },
    {
      name: "Figma",
      rank: "GOLD",
      description: "Design and prototyping tool",
      usage: "UI/UX design & collaboration",
    },
    {
      name: "JIRA",
      rank: "PLATINUM",
      description: "Project management and issue tracking tool",
      usage: "Tracking tasks, bugs, and project progress",
    },
    {
      name: "SonarQube",
      rank: "PLATINUM",
      description: "Code quality and security analysis platform",
      usage: "Continuous inspection of code health and vulnerabilities",
    },
    {
      name: "Postman",
      rank: "PLATINUM",
      description: "API testing tool",
      usage: "Design, test, automate, and document APIs efficiently",
    },
  ],
  gamedev: [
    {
      name: "Unity",
      rank: "GOLD",
      description: "Game development engine",
      usage: "Requires advanced certification",
      isLocked: true,
      unlockRequirement: "Complete unity mastery",
      eta: "Q1 2026",
    },
  ],
};

type Project = {
  id: number;
  name: string;
  result: string;
  impact: string;
  tech: Array<keyof typeof techIcons>;
  role: string;
  status: string;
  duration: string;
  description: string;
  challenges: Array<string>;
  learnings: Array<string>;
  githubUrl: string;
  liveUrl?: string;
};
export const projects: Array<Project> = [
  {
    id: 1,
    name: "ZCRUM",
    result: "98% Uptime",
    impact: "5K+ Users",
    tech: ["Next.js", "PostgreSQL", "Tailwind CSS"],
    role: "FULL STACK",
    status: "VICTORY",
    duration: "1 month",

    description:
      "A comprehensive jira like project management board to manage project and sprints with realtime task tracking.",
    challenges: [],
    learnings: [],
    githubUrl: "https://github.com/AsutoshAcharya/ZCRUM",
    // liveUrl: "",
  },
  {
    id: 2,
    name: "SMART-RESUME",
    result: "98% Uptime",
    impact: "5K+ Users",
    tech: ["React", "Tailwind CSS", "Node.js", "Express", "MongoDB"],
    role: "FULL STACK",
    status: "VICTORY",
    duration: "1 month",

    description: "",
    challenges: [],
    learnings: [],
    githubUrl: "https://github.com/AsutoshAcharya/SmartResume-frontend",
    liveUrl: "https://asutoshacharya.github.io/SmartResume-frontend/auth",
  },
  {
    id: 3,
    name: "SHARE-EXP",
    result: "98% Uptime",
    impact: "5K+ Users",
    tech: ["React", "Tailwind CSS", "Node.js", "Express", "MongoDB"],
    role: "FULL STACK",
    status: "VICTORY",
    duration: "2 months",
    description:
      "Developed a community-driven platform with secure authentication, real-time interactions, and robust data handling, enabling users to share, like, and comment on interview experiences through a user-friendly interface",
    challenges: [],
    learnings: [],
    githubUrl: "https://github.com/AsutoshAcharya/ShareExp",
    // liveUrl: "https://asutoshacharya.github.io/SmartResume-frontend/auth",
  },
  {
    id: 4,
    name: "GREXUKE-HOTEL-BOOKING",
    result: "98% Uptime",
    impact: "5K+ Users",
    tech: ["React", "CSS", "Node.js", "Express", "MongoDB"],
    role: "FULL STACK",
    status: "VICTORY",
    duration: "4 months",
    description:
      "Developed a hotel booking application where users can book hotels and rooms for hotels search for hotels based on their desired location.",
    challenges: [],
    learnings: [],
    githubUrl: "https://github.com/AsutoshAcharya/Grexuke-Hotel-Backend",
    // liveUrl: "https://asutoshacharya.github.io/SmartResume-frontend/auth",
  },
  {
    id: 4,
    name: "SIMPLE-ADIMIN_DASHBOARD",
    result: "98% Uptime",
    impact: "5K+ Users",
    tech: ["React", "CSS"],
    role: "FRONTEND",
    status: "VICTORY",
    duration: "1 month",
    description: "Simple admin dashboard UI",
    challenges: [],
    learnings: [],
    githubUrl:
      "https://github.com/AsutoshAcharya/React-Responsive-Admin-Dashboard",
    // liveUrl: "https://asutoshacharya.github.io/SmartResume-frontend/auth",
  },
  {
    id: 5,
    name: "AGENT-PORTFOLIO",
    result: "98% Uptime",
    impact: "5K+ Users",
    tech: ["Next.js", "Tailwind CSS"],
    role: "FRONTEND",
    status: "VICTORY",
    duration: "5 days",
    description:
      "Personal portfolio with a Valorant-inspired UI featuring my projects, skills, and love for tech and gaming.",
    challenges: [],
    learnings: [],
    githubUrl: "https://github.com/AsutoshAcharya/agent-portfolio",
    liveUrl: "https://agent-asutosh.vercel.app/",
  },
];
type Experience = {
  level: number;
  company: string;
  role: string;
  duration: string;
  location: string;
  highlights: string[];
  tools: string[];
  impact: string;
  unlocked: boolean;
};

export const experiences: Array<Experience> = [
  {
    level: 2,
    company: "Softsensor Ai Pvt. Ltd.",
    role: "Software Engineer",
    duration: "2022 Dec - Present",
    location: "Jaipur, Rajasthan",
    highlights: [
      "Developed and integrated REST APIs across application modules to streamline data handling and support seamless feature integration.",
      "Built scalable, reusable UI components and optimized page load performance using React performance techniques.",
      "Restructured nested components, reducing future development time by 30%.",
      "Implemented a comprehensive schedule creation feature, including a driver-specific shift scheduling interface with daily, weekly, and biweekly views.",
      "Enhanced user experience by integrating intuitive drag-and-drop functionality for seamless shift creation.",
      "Contributed to an in-app chat system with one-on-one and group messaging, implementing features like group creation, mentions, message replies/forwarding, file uploads, and file preview support.",
      "Resolved 50+ customer-reported bugs and managed 20+ new feature implementation requests, ensuring smooth functionality and on-time delivery.",
      "Used SonarQube to identify and fix critical issues and blockers, reducing code vulnerabilities by 25% and maintaining a clean codebase.",
      "Led code reviews and mentored junior developers, promoting type safety, clean architecture, and coding standards.",
    ],
    tools: [
      "React",
      "TypeScript",
      "JavaScript",
      "REST API",
      "Node.js",
      "Express",
      "MongoDB",
      "PostgreSQL",
      "Redux",
      "Zustand",
      "HTML",
      "CSS",
    ],
    impact:
      "Optimized UI and engineered REST APIs for smooth backend integration.",
    unlocked: true,
  },
  {
    level: 1,
    company: "Orissa University of Agriculture and Technology",
    role: "Master of Computer Application",
    duration: "2020 - 2022",
    location: "Bhubaneswar, Odisha",
    highlights: [
      "8.1 / 10 CGPA",
      "Grexuke hotel booking as my final year college project",
      "Learned programming fundamentals",
    ],
    tools: [],
    impact: "Foundation Built",
    unlocked: true,
  },
];

export const socialLinks = [
  {
    name: "LinkedIn",
    icon: Linkedin,
    url: "https://www.linkedin.com/in/asutosh-acharya-40b591228",
    color: "text-blue-400",
  },
  {
    name: "GitHub",
    icon: Github,
    url: "https://github.com/AsutoshAcharya",
    color: "text-white",
  },
  {
    name: "YouTube",
    icon: Youtube,
    url: "https://www.youtube.com/@greetos2478",
    color: "text-red-500",
  },
];
