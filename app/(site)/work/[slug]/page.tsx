import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import {
  ArrowLeft,
  ArrowUpRight,
  ExternalLink,
  Layers,
  Mail,
} from "lucide-react";
import { GithubIcon } from "@/components/brand-icons";
import { ProjectCover } from "@/components/project-cover";
import { Reveal } from "@/components/reveal";
import { profile } from "@/lib/content";
import { getProjects } from "@/lib/projects";

export const revalidate = 60;

type ProjectPageProps = {
  params: Promise<{ slug: string }>;
};

async function findProject(slug: string) {
  const projects = await getProjects();
  const index = projects.findIndex((project) => project.slug === slug);
  if (index < 0) return null;
  return {
    project: projects[index],
    next: projects[(index + 1) % projects.length],
    index,
    total: projects.length,
  };
}

export async function generateStaticParams() {
  const projects = await getProjects();
  return projects.map((project) => ({ slug: project.slug }));
}

export async function generateMetadata({
  params,
}: ProjectPageProps): Promise<Metadata> {
  const { slug } = await params;
  const result = await findProject(slug);
  if (!result) return { title: "Project not found" };

  const { project } = result;
  const image = project.image
    ? project.image.startsWith("http")
      ? project.image
      : `${profile.siteUrl}${project.image}`
    : undefined;

  return {
    title: project.title,
    description: project.description,
    keywords: [...project.stack, project.title, "Calvin Klein Tsefack"],
    alternates: {
      canonical: `/work/${project.slug}`,
    },
    openGraph: {
      type: "article",
      title: `${project.title} — ${project.subtitle}`,
      description: project.description,
      url: `/work/${project.slug}`,
      images: image
        ? [{ url: image, alt: project.imageAlt ?? project.title }]
        : [{ url: `${profile.siteUrl}/opengraph-image`, alt: project.title }],
    },
    twitter: {
      card: "summary_large_image",
      title: `${project.title} — ${project.subtitle}`,
      description: project.description,
      images: image ? [image] : [`${profile.siteUrl}/opengraph-image`],
    },
  };
}

export default async function ProjectPage({ params }: ProjectPageProps) {
  const { slug } = await params;
  const result = await findProject(slug);
  if (!result) notFound();

  const { project, next, index, total } = result;
  const status = project.href
    ? "Live"
    : project.category === "Ongoing"
      ? "In development"
      : "Case study";

  const schema = {
    "@context": "https://schema.org",
    "@type": "CreativeWork",
    name: project.title,
    headline: project.subtitle,
    description: project.description,
    url: `${profile.siteUrl}/work/${project.slug}`,
    author: {
      "@type": "Person",
      name: profile.name,
      url: profile.siteUrl,
    },
    keywords: project.stack.join(", "),
    ...(project.image
      ? {
          image: project.image.startsWith("http")
            ? project.image
            : `${profile.siteUrl}${project.image}`,
        }
      : {}),
  };

  return (
    <section className="relative overflow-hidden pb-20 pt-28 sm:pt-32 lg:pt-36">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
      />
      <div aria-hidden="true" className="pointer-events-none absolute inset-0">
        <div className="absolute inset-0 grid-paper opacity-25 [mask-image:linear-gradient(to_bottom,black,transparent_60%)]" />
        <div className="absolute -right-24 top-0 h-[420px] w-[420px] rounded-full bg-[radial-gradient(circle_at_center,var(--glow),transparent_68%)] blur-2xl" />
      </div>

      <div className="shell relative">
        <div className="flex flex-wrap items-center justify-between gap-4">
          <Link
            href="/#work"
            className="group inline-flex items-center gap-2 text-[11px] font-medium text-muted transition-colors hover:text-ink"
          >
            <ArrowLeft
              className="h-3.5 w-3.5 transition-transform group-hover:-translate-x-0.5"
              strokeWidth={1.7}
              aria-hidden="true"
            />
            Selected work
          </Link>
          <span className="font-mono text-[8px] uppercase tracking-[0.2em] text-faint">
            {String(index + 1).padStart(2, "0")} / {String(total).padStart(2, "0")}
          </span>
        </div>

        <div className="mt-10 grid gap-10 lg:grid-cols-12 lg:items-end lg:gap-12">
          <Reveal className="lg:col-span-8">
            <div className="flex flex-wrap items-center gap-3">
              <span className="label text-accent">{project.category}</span>
              <span aria-hidden="true" className="h-px w-6 bg-line-strong" />
              <span className="label text-faint">{project.year}</span>
            </div>
            <h1 className="mt-6 font-serif text-[clamp(2.8rem,7vw,5.6rem)] leading-[0.92] tracking-[-0.02em] text-ink">
              {project.title}
            </h1>
            <p className="mt-4 max-w-2xl text-[15px] leading-relaxed text-muted sm:text-[17px]">
              {project.subtitle}
            </p>
          </Reveal>

          <Reveal delay={0.08} className="lg:col-span-4">
            <div className="grid grid-cols-2 gap-px overflow-hidden rounded-xl border border-line bg-line">
              <div className="bg-surface px-4 py-3.5">
                <span className="label block text-[7px] text-faint">Year</span>
                <span className="mt-1.5 block text-[12px] text-ink">
                  {project.year}
                </span>
              </div>
              <div className="bg-surface px-4 py-3.5">
                <span className="label block text-[7px] text-faint">Role</span>
                <span className="mt-1.5 block text-[12px] leading-snug text-ink">
                  {project.role}
                </span>
              </div>
              <div className="bg-surface px-4 py-3.5">
                <span className="label block text-[7px] text-faint">Type</span>
                <span className="mt-1.5 block text-[12px] text-ink">
                  {project.category}
                </span>
              </div>
              <div className="bg-surface px-4 py-3.5">
                <span className="label block text-[7px] text-faint">Status</span>
                <span className="mt-1.5 inline-flex items-center gap-1.5 text-[12px] text-ink">
                  <span className="h-1.5 w-1.5 rounded-full bg-accent" />
                  {status}
                </span>
              </div>
            </div>

            <div className="mt-3 flex flex-wrap gap-2">
              {project.href && (
                <a
                  href={project.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 rounded-full bg-ink px-4 py-2.5 text-[10.5px] font-semibold text-bg transition-colors hover:bg-ink/90 dark:bg-accent dark:text-accent-contrast"
                >
                  Visit live site
                  <ExternalLink
                    className="h-3 w-3"
                    strokeWidth={1.8}
                    aria-hidden="true"
                  />
                </a>
              )}
              {project.repo && (
                <a
                  href={project.repo}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 rounded-full border border-line-strong px-4 py-2.5 text-[10.5px] font-semibold text-ink transition-colors hover:border-accent hover:text-accent"
                >
                  <GithubIcon className="h-3 w-3" />
                  Source code
                </a>
              )}
            </div>
          </Reveal>
        </div>

        <Reveal delay={0.12} className="mt-12">
          <ProjectCover project={project} ratio="wide" priority />
        </Reveal>

        <div className="mt-14 grid gap-12 lg:grid-cols-12 lg:gap-16">
          <div className="lg:col-span-7">
            <Reveal>
              <p className="label text-[8px] text-accent">Overview</p>
              <p className="mt-4 text-[17px] leading-[1.8] text-ink/85 sm:text-[19px]">
                {project.description}
              </p>
            </Reveal>

            {project.highlights.length > 0 && (
              <Reveal delay={0.06} className="mt-10">
                <p className="label text-[8px] text-accent">
                  What it does
                </p>
                <ul className="mt-4 divide-y divide-line border-y border-line">
                  {project.highlights.map((highlight, highlightIndex) => (
                    <li
                      key={highlight}
                      className="flex items-baseline gap-5 py-4"
                    >
                      <span className="font-mono text-[8px] text-faint">
                        {String(highlightIndex + 1).padStart(2, "0")}
                      </span>
                      <span className="text-[13.5px] leading-relaxed text-ink">
                        {highlight}
                      </span>
                    </li>
                  ))}
                </ul>
              </Reveal>
            )}
          </div>

          <div className="lg:col-span-5">
            <Reveal delay={0.1}>
              <div className="rounded-2xl border border-line bg-surface p-6">
                <div className="flex items-center gap-2.5">
                  <Layers
                    className="h-4 w-4 text-accent"
                    strokeWidth={1.6}
                    aria-hidden="true"
                  />
                  <h2 className="label text-[8px] text-muted">Stack</h2>
                </div>
                <div className="mt-4 flex flex-wrap gap-1.5">
                  {project.stack.map((tech) => (
                    <span key={tech} className="chip">
                      {tech}
                    </span>
                  ))}
                </div>
                <div className="mt-6 border-t border-line pt-5">
                  <p className="text-[11px] leading-relaxed text-muted">
                    Curious about the architecture or the decisions behind this
                    build? I am happy to walk you through it.
                  </p>
                  <a
                    href={`mailto:${profile.email}?subject=${encodeURIComponent(
                      `Question about ${project.title}`,
                    )}`}
                    className="group mt-4 inline-flex items-center gap-2 text-[11px] font-semibold text-ink transition-colors hover:text-accent"
                  >
                    <Mail
                      className="h-3.5 w-3.5"
                      strokeWidth={1.7}
                      aria-hidden="true"
                    />
                    Ask about this project
                    <ArrowUpRight
                      className="h-3 w-3 transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
                      strokeWidth={1.8}
                      aria-hidden="true"
                    />
                  </a>
                </div>
              </div>
            </Reveal>
          </div>
        </div>

        {next && next.slug !== project.slug && (
          <Reveal delay={0.08}>
            <Link
              href={`/work/${next.slug}`}
              className="group mt-16 flex flex-col justify-between gap-5 rounded-2xl border border-line bg-surface px-6 py-7 transition-all duration-500 hover:border-line-strong hover:bg-surface-strong sm:flex-row sm:items-center sm:px-8"
            >
              <div>
                <span className="label text-[7.5px] text-faint">
                  Next project
                </span>
                <p className="mt-2 font-serif text-[26px] leading-none tracking-tight text-ink transition-colors group-hover:text-accent sm:text-[32px]">
                  {next.title}
                </p>
                <p className="mt-1.5 text-[11px] text-muted">{next.subtitle}</p>
              </div>
              <span className="grid h-11 w-11 shrink-0 place-items-center rounded-full border border-line-strong text-ink transition-all duration-300 group-hover:border-accent group-hover:bg-accent group-hover:text-accent-contrast">
                <ArrowUpRight
                  className="h-4 w-4 transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
                  strokeWidth={1.7}
                  aria-hidden="true"
                />
              </span>
            </Link>
          </Reveal>
        )}
      </div>
    </section>
  );
}
