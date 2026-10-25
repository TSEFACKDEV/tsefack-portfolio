"use client";

import Image from "next/image";
import { useActionState, useState } from "react";
import { useFormStatus } from "react-dom";
import { ArrowLeft, ArrowUpRight, Check, Loader2 } from "lucide-react";
import Link from "next/link";
import { saveProjectAction, type ProjectState } from "@/app/admin/actions";
import type { Project } from "@/lib/content";
import { coverPresets, coverStyles, type CoverPreset } from "@/lib/covers";

const inputClass =
  "w-full rounded-lg border border-line bg-bg px-3.5 py-2.5 text-[12.5px] leading-relaxed text-ink transition-colors placeholder:text-faint focus:border-accent focus:outline-none";
const labelClass = "label mb-2 block text-[7.5px] text-muted";

function SaveButton({ label }: { label: string }) {
  const { pending } = useFormStatus();

  return (
    <button
      type="submit"
      disabled={pending}
      className="inline-flex w-full items-center justify-center gap-2 rounded-lg bg-ink px-5 py-3 text-[12px] font-semibold text-bg transition-colors hover:bg-ink/90 disabled:cursor-not-allowed disabled:opacity-60 dark:bg-accent dark:text-accent-contrast"
    >
      {pending ? (
        <Loader2 className="h-3.5 w-3.5 animate-spin" strokeWidth={1.8} />
      ) : (
        <Check className="h-3.5 w-3.5" strokeWidth={2} />
      )}
      {pending ? "Enregistrement…" : label}
    </button>
  );
}

export function ProjectForm({ project }: { project?: Project }) {
  const [state, action] = useActionState<ProjectState, FormData>(
    saveProjectAction,
    null,
  );
  const [cover, setCover] = useState<CoverPreset>(project?.cover ?? "navy");
  const [visual, setVisual] = useState(project?.visual ?? "");
  const [image, setImage] = useState(project?.image ?? "");

  return (
    <form action={action} className="grid gap-6 lg:grid-cols-[1.55fr_1fr]">
      <input type="hidden" name="originalSlug" value={project?.slug ?? ""} />
      <input type="hidden" name="cover" value={cover} />

      <div className="space-y-6">
        <section className="rounded-2xl border border-line bg-surface p-5 sm:p-6">
          <div className="flex items-center gap-3">
            <span className="label text-[8px] text-accent">01</span>
            <h2 className="text-[13px] font-semibold tracking-tight text-ink">
              Le récit
            </h2>
          </div>

          <div className="mt-5 space-y-4">
            <div>
              <label htmlFor="title" className={labelClass}>
                Titre du projet *
              </label>
              <input
                id="title"
                name="title"
                type="text"
                required
                defaultValue={project?.title}
                placeholder="LocatCam"
                className={inputClass}
              />
            </div>
            <div>
              <label htmlFor="subtitle" className={labelClass}>
                Sous-titre *
              </label>
              <input
                id="subtitle"
                name="subtitle"
                type="text"
                required
                defaultValue={project?.subtitle}
                placeholder="Student housing, end to end."
                className={inputClass}
              />
            </div>
            <div>
              <label htmlFor="description" className={labelClass}>
                Description *
              </label>
              <textarea
                id="description"
                name="description"
                rows={5}
                required
                defaultValue={project?.description}
                placeholder="Ce que vous avez construit, les décisions techniques et le résultat."
                className={`${inputClass} resize-y`}
              />
              <p className="mt-2 text-[10px] leading-relaxed text-faint">
                Affichée sur les cartes mises en avant. Deux à quatre phrases.
              </p>
            </div>
          </div>
        </section>

        <section className="rounded-2xl border border-line bg-surface p-5 sm:p-6">
          <div className="flex items-center gap-3">
            <span className="label text-[8px] text-accent">02</span>
            <h2 className="text-[13px] font-semibold tracking-tight text-ink">
              Détails techniques
            </h2>
          </div>

          <div className="mt-5 grid gap-4 sm:grid-cols-2">
            <div>
              <label htmlFor="year" className={labelClass}>
                Année
              </label>
              <input
                id="year"
                name="year"
                type="text"
                defaultValue={project?.year ?? "2026"}
                className={inputClass}
              />
            </div>
            <div>
              <label htmlFor="role" className={labelClass}>
                Rôle
              </label>
              <input
                id="role"
                name="role"
                type="text"
                defaultValue={project?.role ?? "Fullstack Developer"}
                className={inputClass}
              />
            </div>
            <div>
              <label htmlFor="category" className={labelClass}>
                Catégorie
              </label>
              <select
                id="category"
                name="category"
                defaultValue={project?.category ?? "Commercial"}
                className={inputClass}
              >
                <option value="Commercial">Commercial</option>
                <option value="Academic">Academic</option>
                <option value="Ongoing">Ongoing</option>
              </select>
            </div>
            <div>
              <label htmlFor="glyph" className={labelClass}>
                Initiale (couverture)
              </label>
              <input
                id="glyph"
                name="glyph"
                type="text"
                maxLength={2}
                defaultValue={project?.glyph}
                placeholder="L"
                className={inputClass}
              />
            </div>
          </div>

          <div className="mt-4">
            <label htmlFor="stack" className={labelClass}>
              Stack — séparée par des virgules
            </label>
            <input
              id="stack"
              name="stack"
              type="text"
              defaultValue={project?.stack.join(", ")}
              placeholder="Next.js, TypeScript, Prisma, PostgreSQL"
              className={inputClass}
            />
          </div>

          <div className="mt-4">
            <label htmlFor="highlights" className={labelClass}>
              Points clés — un par ligne
            </label>
            <textarea
              id="highlights"
              name="highlights"
              rows={3}
              defaultValue={project?.highlights.join("\n")}
              placeholder={"Clean architecture\nJWT & refresh tokens\nDocker"}
              className={`${inputClass} resize-y`}
            />
          </div>
        </section>

        <section className="rounded-2xl border border-line bg-surface p-5 sm:p-6">
          <div className="flex items-center gap-3">
            <span className="label text-[8px] text-accent">03</span>
            <h2 className="text-[13px] font-semibold tracking-tight text-ink">
              Liens & visuel
            </h2>
          </div>

          <div className="mt-5 grid gap-4 sm:grid-cols-2">
            <div>
              <label htmlFor="href" className={labelClass}>
                Lien live
              </label>
              <input
                id="href"
                name="href"
                type="url"
                defaultValue={project?.href}
                placeholder="https://exemple.com"
                className={inputClass}
              />
            </div>
            <div>
              <label htmlFor="repo" className={labelClass}>
                Dépôt GitHub
              </label>
              <input
                id="repo"
                name="repo"
                type="url"
                defaultValue={project?.repo}
                placeholder="https://github.com/TSEFACKDEV/..."
                className={inputClass}
              />
            </div>
          </div>

          <div className="mt-4">
            <label htmlFor="image" className={labelClass}>
              Image de couverture — URL ou chemin local
            </label>
            <input
              id="image"
              name="image"
              type="text"
              value={image}
              onChange={(event) => setImage(event.target.value)}
              placeholder="/work/projet.jpg ou https://res.cloudinary.com/..."
              className={inputClass}
            />
            <p className="mt-2 text-[10px] leading-relaxed text-faint">
              Cloudinary, un fichier de <code className="font-mono">public/</code>{" "}
              ou une capture d&apos;écran hébergée. Laissez vide pour une
              couverture typographique.
            </p>
            {image && (
              <div className="relative mt-3 aspect-[16/9] w-full overflow-hidden rounded-lg border border-line bg-bg-soft">
                <Image
                  src={image}
                  alt="Aperçu de la couverture"
                  fill
                  unoptimized={image.startsWith("http")}
                  sizes="600px"
                  className="object-cover object-top"
                />
              </div>
            )}
          </div>

          <div className="mt-4">
            <label htmlFor="imageAlt" className={labelClass}>
              Texte alternatif de l&apos;image
            </label>
            <input
              id="imageAlt"
              name="imageAlt"
              type="text"
              defaultValue={project?.imageAlt}
              placeholder="Description de la capture pour l'accessibilité"
              className={inputClass}
            />
          </div>

          <div className="mt-4">
            <label htmlFor="visual" className={labelClass}>
              Mise en page de la couverture
            </label>
            <select
              id="visual"
              name="visual"
              value={visual}
              onChange={(event) => setVisual(event.target.value)}
              className={inputClass}
            >
              <option value="">Capture d&apos;écran / typographique</option>
              <option value="radar">Radar — produit temps réel</option>
              <option value="mobile">Duo de téléphones — mobile</option>
            </select>
          </div>

          {visual === "mobile" && (
            <div className="mt-4">
              <label htmlFor="images" className={labelClass}>
                Captures mobiles — deux URL séparées par une virgule
              </label>
              <input
                id="images"
                name="images"
                type="text"
                defaultValue={project?.images?.join(", ")}
                placeholder="/work/app/map.jpg, /work/app/home.jpg"
                className={inputClass}
              />
            </div>
          )}

          <div className="mt-4">
            <label htmlFor="domain" className={labelClass}>
              Domaine affiché (optionnel)
            </label>
            <input
              id="domain"
              name="domain"
              type="text"
              defaultValue={project?.domain}
              placeholder="projet.cm"
              className={inputClass}
            />
          </div>

          <fieldset className="mt-5">
            <legend className={labelClass}>Couleur de couverture</legend>
            <div className="mt-1 flex flex-wrap gap-2">
              {coverPresets.map((preset) => (
                <button
                  key={preset}
                  type="button"
                  onClick={() => setCover(preset)}
                  aria-pressed={cover === preset}
                  aria-label={`Couverture ${preset}`}
                  className={`h-9 w-9 rounded-lg border-2 bg-gradient-to-br transition-transform hover:scale-105 ${
                    coverStyles[preset]
                  } ${
                    cover === preset
                      ? "border-ink ring-2 ring-accent/30 dark:border-white"
                      : "border-white/20"
                  }`}
                />
              ))}
              <span className="self-center font-mono text-[8px] uppercase tracking-[0.1em] text-faint">
                {cover}
              </span>
            </div>
          </fieldset>
        </section>
      </div>

      <aside className="space-y-5 lg:sticky lg:top-24 lg:self-start">
        <section className="rounded-2xl border border-line bg-surface p-5">
          <div className="flex items-center gap-2">
            <span
              className={`h-1.5 w-1.5 rounded-full ${
                project?.published === false ? "bg-accent" : "bg-emerald-500"
              }`}
            />
            <h2 className="label text-[8px] text-muted">Publication</h2>
          </div>

          <div className="mt-5 space-y-4">
            <label className="flex cursor-pointer items-start gap-3">
              <input
                type="checkbox"
                name="published"
                defaultChecked={project?.published !== false}
                className="mt-0.5 h-4 w-4 rounded border-line text-accent accent-[var(--accent)]"
              />
              <span>
                <span className="block text-[12px] font-medium text-ink">
                  Publier sur le site
                </span>
                <span className="mt-0.5 block text-[10px] leading-relaxed text-faint">
                  Décochez pour garder le projet en brouillon.
                </span>
              </span>
            </label>

            <label className="flex cursor-pointer items-start gap-3">
              <input
                type="checkbox"
                name="featured"
                defaultChecked={project?.featured}
                className="mt-0.5 h-4 w-4 rounded border-line text-accent accent-[var(--accent)]"
              />
              <span>
                <span className="block text-[12px] font-medium text-ink">
                  Mettre en avant
                </span>
                <span className="mt-0.5 block text-[10px] leading-relaxed text-faint">
                  Apparaît dans la grille principale, avec la description
                  complète.
                </span>
              </span>
            </label>
          </div>

          <div className="mt-6 border-t border-line pt-5">
            <SaveButton label={project ? "Enregistrer" : "Publier le projet"} />
          </div>

          {state?.error && (
            <p
              role="alert"
              className="mt-4 rounded-lg border border-red-500/20 bg-red-500/[0.06] px-3 py-2.5 text-[11px] leading-relaxed text-red-600 dark:text-red-400"
            >
              {state.error}
            </p>
          )}
        </section>

        <div className="rounded-2xl border border-line bg-bg-soft/60 p-5">
          <p className="text-[11px] leading-relaxed text-muted">
            {project
              ? "Le projet est mis à jour immédiatement après validation et le site est revalidé."
              : "Le projet sera ajouté en tête de liste et le site revalidé immédiatement."}
          </p>
          <div className="mt-4 flex flex-wrap gap-3">
            <Link
              href="/admin"
              className="inline-flex items-center gap-1.5 text-[10px] font-semibold text-muted transition-colors hover:text-ink"
            >
              <ArrowLeft className="h-3 w-3" strokeWidth={1.8} aria-hidden="true" />
              Retour
            </Link>
            <Link
              href="/#work"
              target="_blank"
              className="inline-flex items-center gap-1.5 text-[10px] font-semibold text-muted transition-colors hover:text-ink"
            >
              Voir la grille
              <ArrowUpRight
                className="h-3 w-3"
                strokeWidth={1.8}
                aria-hidden="true"
              />
            </Link>
          </div>
        </div>
      </aside>
    </form>
  );
}
