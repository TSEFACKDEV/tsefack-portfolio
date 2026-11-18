import type { Metadata, Viewport } from "next";
import "../globals.css";
import { DocumentShell } from "@/components/document-shell";
import { profile } from "@/lib/content";
import { personSchemaEn, siteDescriptionEn, viewportTheme } from "@/lib/schema";

export const metadata: Metadata = {
  metadataBase: new URL(profile.siteUrl),
  title: {
    default:
      "Calvin Klein Tsefack — Fullstack Developer & Software Engineering Student",
    template: "%s — Calvin Klein Tsefack",
  },
  description: siteDescriptionEn,
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
    languages: {
      en: "/",
      fr: "/fr",
      "x-default": "/",
    },
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "/",
    siteName: `${profile.name} — Portfolio`,
    title: "Calvin Klein Tsefack — Fullstack Developer",
    description: siteDescriptionEn,
  },
  twitter: {
    card: "summary_large_image",
    title: "Calvin Klein Tsefack — Fullstack Developer",
    description: siteDescriptionEn,
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
  verification: {
    google: process.env.GOOGLE_SITE_VERIFICATION,
  },
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  colorScheme: "light dark",
  themeColor: [...viewportTheme],
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <DocumentShell lang="en" schema={personSchemaEn}>
      {children}
    </DocumentShell>
  );
}
