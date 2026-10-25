import type { CoverPreset } from "./covers";

export const profile = {
  name: "Calvin Klein Tsefack",
  firstName: "Calvin Klein",
  lastName: "Tsefack",
  monogram: "TCK",
  role: "Fullstack Developer",
  degree: "Software Engineering Student · Final Year (Level 5)",
  school: "National Higher Polytechnic School of Douala",
  email: "tsefackcalvinklein@gmail.com",
  phone: "+237 653 360 437",
  phoneHref: "+237653360437",
  phoneAlt: "+237 688 632 690",
  location: "Douala, Cameroon",
  timezone: "GMT+1",
  linkedin: "https://www.linkedin.com/in/calvin-klein-tsefack-a30a5632b/",
  github: "https://github.com/TSEFACKDEV",
  siteUrl:
    process.env.NEXT_PUBLIC_SITE_URL ?? "https://tsefackdev.vercel.app",
  availability: "Open to internships & collaborations",
  summary:
    "Final-year software engineering student (Level 5) at NHPSD and fullstack developer. I design and ship calm, resilient web and mobile products with the MERN and PERN stacks.",
  bio: [
    "I am in my final year of software engineering at the National Higher Polytechnic School of Douala (Level 5), ranked first in my class for the 2024–2025 academic year. My work sits at the intersection of rigorous engineering and careful interface design: clean architecture underneath, quiet clarity on the surface.",
    "I build fullstack products with TypeScript across the MERN and PERN stacks, and I work comfortably in C#/.NET — LocatCam, my student housing platform, is an ASP.NET Core API with EF Core, JWT and Docker. I am currently building Faucon, a real-time GPS tracking platform spanning firmware, API, dashboard and mobile. I am increasingly drawn to infrastructure and systems programming: Linux, CI/CD, Rust for tooling, and the Huawei enterprise ecosystem (openEuler, openGauss). In 2026 I qualified for the national phase of the Huawei ICT Competition, Computing Track.",
    "Outside of code, I sing in a choir, read technical literature and follow football. I care about software that respects the people using it: fast, accessible, and built to last.",
  ],
} as const;

export const navigation = [
  { id: "about", label: "About", index: "01" },
  { id: "work", label: "Work", index: "02" },
  { id: "experience", label: "Experience", index: "03" },
  { id: "skills", label: "Skills", index: "04" },
  { id: "contact", label: "Contact", index: "05" },
] as const;

export const stats = [
  { value: "1st", label: "of class, Software Engineering 3", detail: "2024 – 2025" },
  {
    value: "74",
    label: "public repositories on GitHub",
    detail: "TypeScript · C# · Rust",
  },
  {
    value: "10+",
    label: "products & deployments shipped",
    detail: "Web, mobile & API",
  },
  { value: "2026", label: "Huawei ICT national phase", detail: "Computing Track" },
] as const;

export type Project = {
  slug: string;
  index: string;
  title: string;
  subtitle: string;
  year: string;
  role: string;
  category: "Commercial" | "Academic" | "Ongoing";
  description: string;
  stack: string[];
  href?: string;
  repo?: string;
  featured: boolean;
  glyph: string;
  cover: CoverPreset;
  published?: boolean;
  createdAt?: string;
  updatedAt?: string;
  image?: string;
  imageAlt?: string;
  domain?: string;
  visual?: "radar" | "mobile";
  images?: string[];
  highlights: string[];
};

export type GithubExtra = {
  name: string;
  description: string;
  language: string;
  year: string;
  href: string;
  live?: string;
};

export const githubExtras: GithubExtra[] = [
  {
    name: "DataPipe",
    description:
      "A command-line ETL tool in Rust: CSV, JSON and delimited sources, TOML transforms, schema validation and a test suite.",
    language: "Rust",
    year: "2026",
    href: "https://github.com/TSEFACKDEV/DATAPIPE",
  },
  {
    name: "EDEN Payments",
    description:
      "Mobile-money checkout built on Next.js, Prisma and the PawaPay API — live payment flow.",
    language: "TypeScript",
    year: "2026",
    href: "https://github.com/TSEFACKDEV/pawapay",
    live: "https://eden-payment.vercel.app",
  },
  {
    name: "Soutenance ENSPD",
    description:
      "Defence scheduling and document management for ENSPD, built with NextAuth, Prisma and Cloudinary.",
    language: "TypeScript",
    year: "2026",
    href: "https://github.com/TSEFACKDEV/SOUTENANCE-ENSPD",
    live: "https://soutenance-silk.vercel.app",
  },
  {
    name: "Jojo Céramique",
    description:
      "A commercial catalogue and showcase for an Italian tile retailer in Cameroon.",
    language: "Next.js",
    year: "2026",
    href: "https://github.com/TSEFACKDEV/jojo-ceramique",
  },
  {
    name: "LOKALINK",
    description:
      "The hackathon-born circular-economy platform: rental of under-used professional equipment, Express API and web client.",
    language: "JavaScript",
    year: "2025",
    href: "https://github.com/TSEFACKDEV/lokalin_server",
  },
];

export const experience = [
  {
    year: "2026",
    title: "National Phase — Huawei ICT Competition",
    org: "Huawei · Computing Track",
    type: "Distinction",
    description:
      "Qualified for the national phase. Deep working knowledge of the Huawei enterprise ecosystem: OpenEuler, openGauss and the Kunpeng hardware architecture.",
    tags: ["OpenEuler", "openGauss", "System administration", "Cloud"],
  },
  {
    year: "2025",
    title: "Academic Intern — Software Design",
    org: "Maisoft",
    type: "Experience",
    description:
      "Immersed in a professional development team. Applied Agile/Scrum practices, collaborated through Trello and Git/GitHub, and authored a full technical engineering internship report.",
    tags: ["Agile / Scrum", "Trello", "Git / GitHub", "Technical writing"],
  },
  {
    year: "2025",
    title: "Competitor — Hackathon Genuka",
    org: "LOKALINK · Team of 5",
    type: "Distinction",
    description:
      "Designed and pitched LOKALINK, a circular-economy web platform that lets Cameroonian entrepreneurs rent under-used high-end equipment — lowering the barrier to professional tools.",
    tags: ["Product design", "Pitch", "Circular economy"],
  },
  {
    year: "2024 – 2025",
    title: "Web & Mobile Development Certificate",
    org: "GetSmarter Training Center",
    type: "Education",
    description:
      "Intensive fullstack bootcamp focused on TypeScript and modern, scalable software architecture.",
    tags: ["TypeScript", "Application architecture", "Fullstack"],
  },
  {
    year: "2022 – Present",
    title: "Engineering Degree — Software Engineering",
    org: "National Higher Polytechnic School of Douala",
    type: "Education",
    description:
      "Final year (Level 5). Ranked first of class in Software Engineering 3 for 2024–2025. High academic excellence track.",
    tags: ["Software engineering", "UML", "Algorithms"],
  },
] as const;

export const skills = [
  {
    title: "Languages",
    icon: "code",
    items: ["TypeScript", "JavaScript", "C#", "Python", "Rust", "HTML5", "CSS3"],
  },
  {
    title: "Frontend",
    icon: "layout",
    items: [
      "React",
      "Next.js",
      "React Native",
      "Tailwind CSS",
      "Redux Toolkit",
      "Zustand",
    ],
  },
  {
    title: "Backend",
    icon: "server",
    items: [
      "Node.js",
      "Express",
      "ASP.NET Core",
      "REST APIs",
      "Prisma ORM",
      "Socket.IO",
      "MQTT",
    ],
  },
  {
    title: "Data",
    icon: "database",
    items: [
      "PostgreSQL",
      "MySQL",
      "MongoDB",
      "openGauss",
      "EF Core",
    ],
  },
  {
    title: "DevOps & Systems",
    icon: "terminal",
    items: [
      "Linux (Ubuntu, OpenEuler)",
      "Docker",
      "CI/CD",
      "Git / GitHub",
      "VPS deployment",
    ],
  },
  {
    title: "Practice",
    icon: "compass",
    items: [
      "Agile / Scrum",
      "UML",
      "Unit testing",
      "FluentValidation",
      "Technical writing",
    ],
  },
] as const;

export const languages = [
  { name: "French", level: "Native / Fluent", value: 100, note: "B1+" },
  { name: "English", level: "Professional — in training", value: 55, note: "A2 → B1" },
] as const;

export const currently = [
  { label: "Building", value: "Faucon — real-time GPS tracking" },
  { label: "Finishing", value: "Engineering degree, final year (Level 5)" },
  { label: "Learning", value: "Rust, .NET & distributed systems" },
  { label: "Reading", value: "Clean architecture & system design" },
] as const;

export const references = [
  {
    name: "Dr Maka Maka Ebenezer",
    role: "Head of Computer Engineering Department, NHPSD",
    phone: "+237 697 457 789",
  },
  {
    name: "Dr Totto Philippe",
    role: "Web Development Professor, NHPSD",
    phone: "+237 698 914 734",
  },
  {
    name: "Mr Takougang Meranda",
    role: "Red Team Expert & Cybersecurity Instructor",
    phone: "+237 691 80 66 17",
  },
] as const;

export const marqueeItems = [
  "TypeScript",
  "React",
  "Next.js",
  "Node.js",
  "C#",
  ".NET",
  "PostgreSQL",
  "Prisma",
  "Rust",
  "Docker",
  "Linux",
  "openEuler",
  "MQTT",
  "Tailwind CSS",
  "React Native",
  "CI/CD",
] as const;
