import Image from "next/image";
import Link from "next/link";
import {
  ArrowDown,
  ArrowUp,
  ArrowUpRight,
  ExternalLink,
  Eye,
  EyeOff,
  Pencil,
  Plus,
  Star,
} from "lucide-react";
import {
  moveProjectAction,
} from "@/app/(en)/admin/actions";
import { DeleteProjectButton } from "@/components/admin/delete-project-button";
import { getAllProjects, storageMode } from "@/lib/projects";
import { coverStyles } from "@/lib/covers";

export const dynamic = "force-dynamic";

export const metadata = {
  title: "Projets",
};

type DashboardProps = {
  searchParams: Promise<{ saved?: string; deleted?: string }>;
};

export default async function AdminDashboard({ searchParams }: DashboardProps) {
  const [projects, query] = await Promise.all([getAllProjects(), searchParams]);
  const mode = storageMode();
  const published = projects.filter((project) => project.published !== false);
  const drafts = projects.length - published.length;
  const featured = projects.filter((project) => project.featured).length;

  return (
    <div>
      <div className="flex flex-wrap items-end justify-between gap-5">
        <div>
          <p className="label text-[8px] text-accent">Content · Projects</p>
          <h1 className="mt-3 font-serif text-[clamp(2.2rem,4.5vw,3rem)] leading-none tracking-tight text-ink">
            Votre travail, en ligne.
          </h1>
          <p className="mt-3 max-w-md text-[12px] leading-relaxed text-muted">
            Ajoutez un projet, réécrivez son récit ou changez sa couverture. Les
            modifications sont publiées immédiatement.
          </p>
        </div>
        <Link
          href="/admin/projects/new"
          className="inline-flex items-center gap-2 rounded-full bg-ink px-5 py-2.5 text-[11px] font-semibold text-bg transition-all duration-300 hover:gap-3 dark:bg-accent dark:text-accent-contrast"
        >
          <Plus className="h-3.5 w-3.5" strokeWidth={2} aria-hidden="true" />
          Nouveau projet
        </Link>
      </div>

      {(query.saved || query.deleted) && (
        <p className="mt-6 rounded-lg border border-emerald-500/20 bg-emerald-500/[0.06] px-4 py-3 text-[11px] text-emerald-700 dark:text-emerald-400">
          {query.deleted
            ? "Projet supprimé. Le portfolio a été mis à jour."
            : "Projet enregistré. Le portfolio a été mis à jour."}
        </p>
      )}

      <div className="mt-8 grid grid-cols-3 gap-px overflow-hidden rounded-xl border border-line bg-line">
        {[
          { value: published.length, label: "Publiés" },
          { value: drafts, label: "Brouillons" },
          { value: featured, label: "Mis en avant" },
        ].map((stat) => (
          <div key={stat.label} className="bg-surface px-4 py-4">
            <p className="font-serif text-2xl leading-none text-ink">
              {stat.value}
            </p>
            <p className="label mt-2 text-[7px] text-faint">{stat.label}</p>
          </div>
        ))}
      </div>

      <div className="mt-6 overflow-hidden rounded-2xl border border-line bg-surface">
        {projects.length === 0 ? (
          <div className="px-6 py-16 text-center">
            <p className="font-serif text-2xl text-ink">Aucun projet.</p>
            <p className="mt-2 text-[11px] text-muted">
              Commencez par ajouter votre premier projet.
            </p>
          </div>
        ) : (
          <ul className="divide-y divide-line">
            {projects.map((project, index) => (
              <li
                key={project.slug}
                className="group grid gap-4 px-4 py-4 transition-colors hover:bg-bg-soft/40 sm:grid-cols-[96px_1fr_auto] sm:items-center sm:px-5"
              >
                <div className="relative h-14 w-24 overflow-hidden rounded-lg border border-line bg-[#08182b]">
                  <div
                    aria-hidden="true"
                    className={`absolute inset-0 bg-gradient-to-br ${
                      coverStyles[project.cover] ?? coverStyles.navy
                    }`}
                  />
                  {project.image ? (
                    <Image
                      src={project.image}
                      alt=""
                      fill
                      unoptimized={project.image.startsWith("http")}
                      sizes="96px"
                      className="object-cover object-top"
                    />
                  ) : (
                    <span className="absolute inset-0 grid place-items-center font-serif text-2xl italic text-white/40">
                      {project.glyph}
                    </span>
                  )}
                </div>

                <div className="min-w-0">
                  <div className="flex flex-wrap items-center gap-2">
                    <span className="font-mono text-[8px] text-faint">
                      {project.index}
                    </span>
                    <h2 className="truncate text-[13px] font-semibold tracking-tight text-ink">
                      {project.title}
                    </h2>
                    {project.featured && (
                      <Star
                        className="h-3 w-3 fill-accent text-accent"
                        strokeWidth={1.5}
                        aria-label="Mis en avant"
                      />
                    )}
                    <span
                      className={`inline-flex items-center gap-1 rounded-full border px-2 py-0.5 font-mono text-[6.5px] uppercase tracking-[0.1em] ${
                        project.published === false
                          ? "border-accent/25 bg-accent-soft text-accent"
                          : "border-emerald-500/20 bg-emerald-500/[0.05] text-emerald-700 dark:text-emerald-400"
                      }`}
                    >
                      {project.published === false ? (
                        <EyeOff className="h-2.5 w-2.5" strokeWidth={1.8} />
                      ) : (
                        <Eye className="h-2.5 w-2.5" strokeWidth={1.8} />
                      )}
                      {project.published === false ? "Brouillon" : "Publié"}
                    </span>
                  </div>
                  <p className="mt-1 truncate text-[10.5px] text-muted">
                    {project.category} · {project.year} · {project.role}
                  </p>
                  <p className="mt-0.5 truncate font-mono text-[8px] text-faint">
                    /{project.slug}
                  </p>
                </div>

                <div className="flex items-center gap-1.5">
                  <div className="flex items-center rounded-full border border-line">
                    <form action={moveProjectAction}>
                      <input type="hidden" name="slug" value={project.slug} />
                      <input type="hidden" name="direction" value="up" />
                      <button
                        type="submit"
                        disabled={index === 0}
                        aria-label={`Monter ${project.title}`}
                        className="grid h-8 w-8 place-items-center rounded-l-full text-faint transition-colors hover:text-ink disabled:opacity-25 disabled:hover:text-faint"
                      >
                        <ArrowUp className="h-3.5 w-3.5" strokeWidth={1.7} />
                      </button>
                    </form>
                    <span aria-hidden="true" className="h-4 w-px bg-line" />
                    <form action={moveProjectAction}>
                      <input type="hidden" name="slug" value={project.slug} />
                      <input type="hidden" name="direction" value="down" />
                      <button
                        type="submit"
                        disabled={index === projects.length - 1}
                        aria-label={`Descendre ${project.title}`}
                        className="grid h-8 w-8 place-items-center rounded-r-full text-faint transition-colors hover:text-ink disabled:opacity-25 disabled:hover:text-faint"
                      >
                        <ArrowDown className="h-3.5 w-3.5" strokeWidth={1.7} />
                      </button>
                    </form>
                  </div>

                  <Link
                    href={`/admin/projects/${project.slug}`}
                    aria-label={`Modifier ${project.title}`}
                    title="Modifier"
                    className="grid h-8 w-8 place-items-center rounded-full border border-line text-muted transition-colors hover:border-line-strong hover:text-ink"
                  >
                    <Pencil className="h-3.5 w-3.5" strokeWidth={1.6} />
                  </Link>

                  {project.href && (
                    <a
                      href={project.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label={`Voir ${project.title}`}
                      title="Voir le site"
                      className="hidden h-8 w-8 place-items-center rounded-full border border-line text-muted transition-colors hover:border-line-strong hover:text-ink sm:grid"
                    >
                      <ExternalLink className="h-3.5 w-3.5" strokeWidth={1.6} />
                    </a>
                  )}

                  <DeleteProjectButton
                    slug={project.slug}
                    title={project.title}
                  />
                </div>
              </li>
            ))}
          </ul>
        )}
      </div>

      <div className="mt-6 flex flex-col gap-3 rounded-xl border border-line bg-bg-soft/60 px-5 py-4 sm:flex-row sm:items-center sm:justify-between">
        <p className="text-[10px] leading-relaxed text-muted">
          {mode === "github"
            ? "Stockage GitHub actif : chaque publication crée un commit dans le dépôt, puis revalide le site."
            : "Stockage local : les modifications sont écrites dans content/projects.json. Sur un hébergement serverless, configurez GitHub pour les conserver."}
        </p>
        <Link
          href="/#work"
          target="_blank"
          className="group inline-flex shrink-0 items-center gap-1.5 text-[10px] font-semibold text-ink transition-colors hover:text-accent"
        >
          Voir le résultat
          <ArrowUpRight
            className="h-3 w-3 transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
            strokeWidth={1.8}
          />
        </Link>
      </div>
    </div>
  );
}
