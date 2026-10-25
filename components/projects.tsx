import { ArrowUpRight, FolderGit2 } from "lucide-react";
import type { Project } from "@/lib/content";
import { githubExtras, profile } from "@/lib/content";
import { GithubIcon } from "./brand-icons";
import { ProjectCard } from "./project-card";
import { Reveal } from "./reveal";
import { SectionHeading } from "./section-heading";

type ProjectsProps = {
  projects: Project[];
};

export function Projects({ projects }: ProjectsProps) {
  const featured = projects.filter((project) => project.featured);
  const secondary = projects.filter((project) => !project.featured);

  return (
    <section
      id="work"
      className="relative overflow-hidden border-y border-line bg-bg-soft/40 py-24 sm:py-32"
    >
      <div aria-hidden="true" className="pointer-events-none absolute inset-0">
        <div className="absolute -left-32 top-40 h-[420px] w-[420px] rounded-full bg-[radial-gradient(circle_at_center,var(--glow),transparent_70%)] opacity-60 blur-2xl" />
      </div>

      <div className="shell relative">
        <SectionHeading
          index="02"
          eyebrow="Selected work"
          title={
            <>
              Products, not{" "}
              <span className="italic text-accent">promises</span>.
            </>
          }
          description="A selection of commercial platforms, academic projects and personal builds — designed, engineered and shipped from Douala."
        >
          <a
            href={profile.github}
            target="_blank"
            rel="noopener noreferrer"
            className="group mt-6 inline-flex items-center gap-2 rounded-full border border-line-strong px-4 py-2.5 text-[11px] font-semibold text-ink transition-colors hover:border-accent hover:text-accent"
          >
            <GithubIcon className="h-3.5 w-3.5" />
            More on GitHub
            <ArrowUpRight
              className="h-3.5 w-3.5 transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
              strokeWidth={1.7}
              aria-hidden="true"
            />
          </a>
        </SectionHeading>

        {projects.length === 0 ? (
          <div className="mt-14 rounded-2xl border border-dashed border-line-strong px-6 py-16 text-center">
            <FolderGit2
              className="mx-auto h-5 w-5 text-faint"
              strokeWidth={1.5}
              aria-hidden="true"
            />
            <p className="mt-4 font-serif text-2xl text-ink">
              New work is on the way.
            </p>
            <p className="mt-2 text-[12px] text-muted">
              Projects published from the studio will appear here.
            </p>
          </div>
        ) : (
          <div className="mt-14 grid gap-5 lg:grid-cols-12 lg:gap-6">
            {featured.map((project, index) => (
              <Reveal
                key={project.slug}
                delay={index * 0.08}
                className={
                  index === 0
                    ? "lg:col-span-7"
                    : index === 1
                      ? "lg:col-span-5"
                      : "lg:col-span-6"
                }
              >
                <ProjectCard project={project} />
              </Reveal>
            ))}

            {secondary.map((project, index) => (
              <Reveal
                key={project.slug}
                delay={0.05 + index * 0.07}
                className="lg:col-span-6"
              >
                <ProjectCard project={project} />
              </Reveal>
            ))}
          </div>
        )}

        <div className="mt-20 border-t border-line pt-10">
          <div className="flex flex-col gap-6 sm:flex-row sm:items-end sm:justify-between">
            <div>
              <p className="label text-accent">GitHub index</p>
              <h3 className="mt-3 font-serif text-[clamp(1.9rem,3.4vw,2.7rem)] leading-none tracking-tight text-ink">
                Also on GitHub.
              </h3>
              <p className="mt-3 max-w-md text-[12.5px] leading-relaxed text-muted">
                Systems programming, payment flows and experiments that live
                outside the case studies — all public.
              </p>
            </div>
            <a
              href={profile.github}
              target="_blank"
              rel="noopener noreferrer"
              className="group inline-flex w-fit items-center gap-2 text-[11px] font-semibold text-ink transition-colors hover:text-accent"
            >
              Browse all repositories
              <ArrowUpRight
                className="h-3.5 w-3.5 transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
                strokeWidth={1.7}
                aria-hidden="true"
              />
            </a>
          </div>

          <div className="mt-7 grid gap-px overflow-hidden rounded-2xl border border-line bg-line sm:grid-cols-2 lg:grid-cols-3">
            {githubExtras.map((extra) => (
              <a
                key={extra.name}
                href={extra.href}
                target="_blank"
                rel="noopener noreferrer"
                className="group flex flex-col justify-between gap-5 bg-surface p-5 transition-colors duration-300 hover:bg-surface-strong"
              >
                <div>
                  <div className="flex items-start justify-between gap-3">
                    <h4 className="text-[13px] font-semibold tracking-tight text-ink transition-colors group-hover:text-accent">
                      {extra.name}
                    </h4>
                    <ArrowUpRight
                      className="mt-0.5 h-3.5 w-3.5 shrink-0 text-faint transition-all duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-accent"
                      strokeWidth={1.7}
                      aria-hidden="true"
                    />
                  </div>
                  <p className="mt-2 text-[11px] leading-relaxed text-muted">
                    {extra.description}
                  </p>
                </div>
                <div className="flex items-center gap-2 font-mono text-[7.5px] uppercase tracking-[0.12em] text-faint">
                  <span>{extra.language}</span>
                  <span aria-hidden="true" className="text-accent/60">
                    ·
                  </span>
                  <span>{extra.year}</span>
                  {extra.live && (
                    <span className="ml-auto inline-flex items-center gap-1.5 text-accent">
                      <span className="h-1 w-1 rounded-full bg-accent" />
                      Live
                    </span>
                  )}
                </div>
              </a>
            ))}

            <a
              href={profile.github}
              target="_blank"
              rel="noopener noreferrer"
              className="group flex flex-col justify-between gap-5 bg-surface p-5 transition-colors duration-300 hover:bg-surface-strong"
            >
              <div className="flex items-start justify-between gap-3">
                <div>
                  <h4 className="text-[13px] font-semibold tracking-tight text-ink transition-colors group-hover:text-accent">
                    And many more
                  </h4>
                  <p className="mt-2 text-[11px] leading-relaxed text-muted">
                    Experiments, coursework and prototypes — the whole workshop,
                    in the open.
                  </p>
                </div>
                <GithubIcon className="mt-0.5 h-3.5 w-3.5 shrink-0 text-faint" />
              </div>
              <span className="font-mono text-[7.5px] uppercase tracking-[0.12em] text-accent">
                github.com/TSEFACKDEV
              </span>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
