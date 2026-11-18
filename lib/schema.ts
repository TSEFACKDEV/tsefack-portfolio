import { profile } from "@/lib/content";

export const siteDescriptionEn =
  "Calvin Klein Tsefack is a fullstack developer and final-year software engineering student (Level 5) at NHPSD in Douala. Building considered web, mobile and API products with TypeScript, React, Next.js, C#/.NET and PostgreSQL. Top of class, Huawei ICT Competition 2026 national phase.";

export const siteDescriptionFr =
  "Calvin Klein Tsefack est développeur fullstack et ingénieur logiciel basé à Douala, au Cameroun. Il conçoit des applications web, mobiles et des API avec TypeScript, React, Next.js, C#/.NET et PostgreSQL. Major de promotion en génie logiciel à l'ENSPD, phase nationale du Huawei ICT Competition 2026.";

export const personSchemaEn = {
  "@context": "https://schema.org",
  "@type": "Person",
  "@id": `${profile.siteUrl}/#person`,
  name: profile.name,
  givenName: profile.firstName,
  familyName: profile.lastName,
  jobTitle: "Fullstack Developer",
  description: siteDescriptionEn,
  url: profile.siteUrl,
  email: `mailto:${profile.email}`,
  telephone: profile.phone,
  image: `${profile.siteUrl}/opengraph-image`,
  address: {
    "@type": "PostalAddress",
    addressLocality: "Douala",
    addressRegion: "Littoral",
    addressCountry: "CM",
  },
  alumniOf: {
    "@type": "CollegeOrUniversity",
    name: profile.school,
    url: "https://www.nhpsd.cm",
  },
  knowsLanguage: ["fr", "en"],
  knowsAbout: [
    "TypeScript",
    "JavaScript",
    "React",
    "Next.js",
    "Node.js",
    "Express",
    "PostgreSQL",
    "MongoDB",
    "Prisma ORM",
    "Entity Framework Core",
    "C#",
    "ASP.NET Core",
    "Rust",
    "Docker",
    "Linux",
    "openEuler",
    "openGauss",
    "MQTT",
    "Software Engineering",
  ],
  sameAs: [profile.linkedin, profile.github],
};

export const personSchemaFr = {
  "@context": "https://schema.org",
  "@type": "Person",
  "@id": `${profile.siteUrl}/#person`,
  name: profile.name,
  givenName: profile.firstName,
  familyName: profile.lastName,
  jobTitle: "Développeur fullstack et ingénieur logiciel",
  description: siteDescriptionFr,
  url: profile.siteUrl,
  email: `mailto:${profile.email}`,
  telephone: profile.phone,
  image: `${profile.siteUrl}/opengraph-image`,
  address: {
    "@type": "PostalAddress",
    addressLocality: "Douala",
    addressRegion: "Littoral",
    addressCountry: "CM",
  },
  alumniOf: {
    "@type": "CollegeOrUniversity",
    name: profile.school,
    url: "https://www.nhpsd.cm",
  },
  knowsLanguage: ["fr", "en"],
  areaServed: {
    "@type": "Country",
    name: "Cameroun",
  },
  knowsAbout: [
    "Développement fullstack",
    "Développement web",
    "Développement mobile",
    "Ingénierie logicielle",
    "DevOps",
    "TypeScript",
    "React",
    "Next.js",
    "Node.js",
    "C#",
    "ASP.NET Core",
    "PostgreSQL",
    "Docker",
    "Linux",
    "CI/CD",
    "MQTT",
    "Rust",
  ],
  sameAs: [profile.linkedin, profile.github],
};

export const viewportTheme = [
  { media: "(prefers-color-scheme: light)", color: "#f6f4ef" },
  { media: "(prefers-color-scheme: dark)", color: "#06111f" },
] as const;
