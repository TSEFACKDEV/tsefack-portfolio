import type { MetadataRoute } from "next";
import { profile } from "@/lib/content";
import { getProjects } from "@/lib/projects";

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const projects = await getProjects();

  const englishHome = {
    url: profile.siteUrl,
    changeFrequency: "monthly" as const,
    priority: 1,
    alternates: {
      languages: {
        en: profile.siteUrl,
        fr: `${profile.siteUrl}/fr`,
      },
    },
  };

  const frenchPages: MetadataRoute.Sitemap = [
    {
      url: `${profile.siteUrl}/fr`,
      changeFrequency: "monthly",
      priority: 0.9,
      alternates: {
        languages: {
          fr: `${profile.siteUrl}/fr`,
          en: profile.siteUrl,
        },
      },
    },
    {
      url: `${profile.siteUrl}/fr/developpeur-fullstack-cameroun`,
      changeFrequency: "monthly",
      priority: 0.8,
      alternates: {
        languages: {
          fr: `${profile.siteUrl}/fr/developpeur-fullstack-cameroun`,
          en: profile.siteUrl,
        },
      },
    },
    {
      url: `${profile.siteUrl}/fr/devops-cameroun`,
      changeFrequency: "monthly",
      priority: 0.8,
      alternates: {
        languages: {
          fr: `${profile.siteUrl}/fr/devops-cameroun`,
          en: profile.siteUrl,
        },
      },
    },
  ];

  return [
    englishHome,
    ...frenchPages,
    ...projects.map((project) => ({
      url: `${profile.siteUrl}/work/${project.slug}`,
      lastModified: project.updatedAt ? new Date(project.updatedAt) : undefined,
      changeFrequency: "yearly" as const,
      priority: 0.7,
    })),
  ];
}
