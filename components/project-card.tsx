import Link from "next/link";
import { ExternalLink } from "lucide-react";
import type { Project } from "@/lib/content";
import { GithubIcon } from "./brand-icons";
import { ProjectCover } from "./project-cover";

type ProjectCardProps = {
  project: Project;
  className?: string;
};

export function ProjectCard({ project, className = "" }: ProjectCardProps) {
  return (
    <article
      className={`card-lift group relative flex h-full flex-col overflow-hidden rounded-2xl border border-line bg-surface ${className}`}
    >
      <div className="p-2.5 pb-0">
        <Link
          href={`/work/${project.slug}`}
          aria-label={`Read the ${project.title} case study`}
          className="block"
        >
          <ProjectCover project={project} />
        </Link>
      </div>

      <div className="flex flex-1 flex-col px-5 pb-5 pt-4">
        <div className="flex items-start justify-between gap-3">
          <div>
            <Link
              href={`/work/${project.slug}`}
              className="inline-block"
              aria-label={`Read the ${project.title} case study`}
            >
              <h3 className="text-[18px] font-semibold leading-tight tracking-tight text-ink transition-colors duration-300 group-hover:text-accent">
                {project.title}
              </h3>
            </Link>
            <p className="mt-1.5 text-[11.5px] leading-snug text-muted">
              {project.subtitle}
            </p>
          </div>
          <span className="label mt-1 shrink-0 text-[8px] text-faint">
            {project.year}
          </span>
        </div>

        {project.featured && (
          <p className="mt-4 text-[12.5px] leading-relaxed text-muted">
            {project.description}
          </p>
        )}

        <div className="mt-4 flex flex-wrap gap-1.5">
          {project.stack.slice(0, project.featured ? 6 : 4).map((tech) => (
            <span key={tech} className="chip">
              {tech}
            </span>
          ))}
          {project.stack.length > (project.featured ? 6 : 4) && (
            <span className="chip border-dashed">
              +{project.stack.length - (project.featured ? 6 : 4)}
            </span>
          )}
        </div>

        <div className="mt-auto pt-5">
          <div className="flex items-center justify-between gap-3 border-t border-line pt-4">
            <Link
              href={`/work/${project.slug}`}
              className="text-[10px] text-faint transition-colors hover:text-accent"
            >
              {project.role}
            </Link>
            <span className="flex items-center gap-3">
              {project.repo && (
                <a
                  href={project.repo}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={`${project.title} source code on GitHub`}
                  className="inline-flex items-center gap-1.5 text-[10px] font-semibold text-muted transition-colors hover:text-accent"
                >
                  <GithubIcon className="h-3 w-3" />
                  Code
                </a>
              )}
              {project.href ? (
                <a
                  href={project.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 text-[10px] font-semibold text-ink transition-colors hover:text-accent"
                >
                  Live site
                  <ExternalLink
                    className="h-3 w-3"
                    strokeWidth={1.8}
                    aria-hidden="true"
                  />
                </a>
              ) : !project.repo ? (
                <Link
                  href={`/work/${project.slug}`}
                  className="inline-flex items-center gap-1.5 text-[10px] font-semibold text-ink transition-colors hover:text-accent"
                >
                  Case study
                  <ExternalLink
                    className="h-3 w-3"
                    strokeWidth={1.8}
                    aria-hidden="true"
                  />
                </Link>
              ) : null}
            </span>
          </div>
        </div>
      </div>
    </article>
  );
}
