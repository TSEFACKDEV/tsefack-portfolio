import type { Metadata, Viewport } from "next";
import "../globals.css";
import { DocumentShell } from "@/components/document-shell";
import { profile } from "@/lib/content";
import { personSchemaFr, siteDescriptionFr, viewportTheme } from "@/lib/schema";

export const metadata: Metadata = {
  metadataBase: new URL(profile.siteUrl),
  title: {
    default:
      "Développeur fullstack et ingénieur logiciel au Cameroun — Calvin Klein Tsefack",
    template: "%s — Calvin Klein Tsefack",
  },
  description: siteDescriptionFr,
  applicationName: "Calvin Klein Tsefack — Portfolio",
  keywords: [
    "Calvin Klein Tsefack",
    "Tsefack Calvin Klein",
    "développeur fullstack",
    "développeur fullstack Cameroun",
    "développeur fullstack Douala",
    "développeur web Cameroun",
    "développeur mobile Cameroun",
    "DevOps Cameroun",
    "ingénieur informatique Cameroun",
    "ingénieur logiciel Cameroun",
    "informatique Cameroun",
    "développeur TypeScript",
    "développeur React",
    "développeur Next.js",
    "développeur C# .NET",
    "ENSPD",
    "Douala",
  ],
  authors: [{ name: profile.name, url: profile.linkedin }],
  creator: profile.name,
  publisher: profile.name,
  category: "technology",
  alternates: {
    canonical: "/fr",
    languages: {
      fr: "/fr",
      en: "/",
      "x-default": "/",
    },
  },
  openGraph: {
    type: "website",
    locale: "fr_FR",
    alternateLocale: ["en_US"],
    url: "/fr",
    siteName: `${profile.name} — Portfolio`,
    title: "Développeur fullstack et ingénieur logiciel au Cameroun",
    description: siteDescriptionFr,
  },
  twitter: {
    card: "summary_large_image",
    title: "Développeur fullstack et ingénieur logiciel au Cameroun",
    description: siteDescriptionFr,
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
  themeColor: [...viewportTheme],
};

export default function RootLayout({ children }: LayoutProps<"/fr">) {
  return (
    <DocumentShell lang="fr" schema={personSchemaFr}>
      {children}
    </DocumentShell>
  );
}
