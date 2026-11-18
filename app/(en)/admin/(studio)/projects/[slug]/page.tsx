import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowLeft, ArrowUpRight } from "lucide-react";
import { ProjectForm } from "@/components/admin/project-form";
import { getProject } from "@/lib/projects";

export const dynamic = "force-dynamic";

type EditProjectPageProps = {
  params: Promise<{ slug: string }>;
};

export async function generateMetadata({ params }: EditProjectPageProps) {
  const { slug } = await params;
  const project = await getProject(slug);
  return { title: project ? `Modifier ${project.title}` : "Projet introuvable" };
}

export default async function EditProjectPage({ params }: EditProjectPageProps) {
  const { slug } = await params;
  const project = await getProject(slug);
  if (!project) notFound();

  return (
    <div>
      <div className="flex flex-wrap items-center justify-between gap-3">
        <Link
          href="/admin"
          className="group inline-flex items-center gap-1.5 text-[10px] font-semibold text-muted transition-colors hover:text-ink"
        >
          <ArrowLeft
            className="h-3 w-3 transition-transform group-hover:-translate-x-0.5"
            strokeWidth={1.8}
            aria-hidden="true"
          />
          Tous les projets
        </Link>
        <Link
          href="/#work"
          target="_blank"
          className="group inline-flex items-center gap-1.5 text-[10px] font-semibold text-muted transition-colors hover:text-ink"
        >
          Voir le site
          <ArrowUpRight
            className="h-3 w-3 transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
            strokeWidth={1.8}
            aria-hidden="true"
          />
        </Link>
      </div>

      <div className="mt-6">
        <p className="label text-[8px] text-accent">
          Édition · {project.index}
        </p>
        <h1 className="mt-3 font-serif text-[clamp(2.1rem,4.2vw,2.8rem)] leading-none tracking-tight text-ink">
          {project.title}
        </h1>
        <p className="mt-3 text-[12px] text-muted">
          Dernière mise à jour :{" "}
          {project.updatedAt
            ? new Date(project.updatedAt).toLocaleDateString("fr-FR", {
                day: "numeric",
                month: "long",
                year: "numeric",
              })
            : "—"}
        </p>
      </div>

      <div className="mt-8">
        <ProjectForm project={project} />
      </div>
    </div>
  );
}
