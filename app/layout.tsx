import type { Metadata, Viewport } from "next";
import { Instrument_Serif, JetBrains_Mono, Manrope } from "next/font/google";
import "./globals.css";
import { profile } from "@/lib/content";

const manrope = Manrope({
  subsets: ["latin"],
  variable: "--font-manrope",
  display: "swap",
});

const instrumentSerif = Instrument_Serif({
  subsets: ["latin"],
  weight: "400",
  style: ["normal", "italic"],
  variable: "--font-instrument",
  display: "swap",
});

const jetbrainsMono = JetBrains_Mono({
  subsets: ["latin"],
  variable: "--font-jetbrains",
  display: "swap",
});

const description =
  "Calvin Klein Tsefack is a fullstack developer and final-year software engineering student (Level 5) at NHPSD in Douala. Building considered web, mobile and API products with TypeScript, React, Next.js, C#/.NET and PostgreSQL. Top of class, Huawei ICT Competition 2026 national phase.";

export const metadata: Metadata = {
  metadataBase: new URL(profile.siteUrl),
  title: {
    default:
      "Calvin Klein Tsefack — Fullstack Developer & Software Engineering Student",
    template: "%s — Calvin Klein Tsefack",
  },
  description,
  applicationName: "Calvin Klein Tsefack — Portfolio",
  keywords: [
    "Calvin Klein Tsefack",
    "Tsefack",
    "TSEFACKDEV",
    "fullstack developer",
    "software engineer",
    "developer Cameroon",
    "developer Douala",
    "Next.js developer",
    "React developer",
    "TypeScript",
    "MERN",
    "PERN",
    "Prisma",
    "PostgreSQL",
    "Prisma",
    "C#",
    ".NET",
    "ASP.NET Core",
    "Rust",
    "MQTT",
    "Faucon",
    "NkapLingua",
    "React Native",
    "NHPSD",
    "Huawei ICT Competition",
  ],
  authors: [{ name: profile.name, url: profile.linkedin }],
  creator: profile.name,
  publisher: profile.name,
  category: "technology",
  alternates: {
    canonical: "/",
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "/",
    siteName: `${profile.name} — Portfolio`,
    title: "Calvin Klein Tsefack — Fullstack Developer",
    description,
  },
  twitter: {
    card: "summary_large_image",
    title: "Calvin Klein Tsefack — Fullstack Developer",
    description,
    creator: "@TSEFACKDEV",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
      "max-video-preview": -1,
    },
  },
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  colorScheme: "light dark",
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "#f6f4ef" },
    { media: "(prefers-color-scheme: dark)", color: "#06111f" },
  ],
};

const themeScript = `(function(){try{var stored=localStorage.getItem("theme");var dark=stored?stored==="dark":window.matchMedia("(prefers-color-scheme: dark)").matches;var root=document.documentElement;root.classList.toggle("dark",dark);root.style.colorScheme=dark?"dark":"light";}catch(e){}})();`;

const personSchema = {
  "@context": "https://schema.org",
  "@type": "Person",
  name: profile.name,
  givenName: profile.firstName,
  familyName: profile.lastName,
  jobTitle: "Fullstack Developer",
  description,
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

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="en"
      suppressHydrationWarning
      className={`${manrope.variable} ${instrumentSerif.variable} ${jetbrainsMono.variable}`}
    >
      <head>
        <script dangerouslySetInnerHTML={{ __html: themeScript }} />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(personSchema) }}
        />
      </head>
      <body className="min-h-dvh bg-bg text-ink">
        {children}
      </body>
    </html>
  );
}
