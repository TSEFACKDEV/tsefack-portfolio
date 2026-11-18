import Link from "next/link";
import { ArrowLeft } from "lucide-react";
import { ProjectForm } from "@/components/admin/project-form";

export const dynamic = "force-dynamic";

export const metadata = {
  title: "Nouveau projet",
};

export default function NewProjectPage() {
  return (
    <div>
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

      <div className="mt-6">
        <p className="label text-[8px] text-accent">Nouveau projet</p>
        <h1 className="mt-3 font-serif text-[clamp(2.1rem,4.2vw,2.8rem)] leading-none tracking-tight text-ink">
          Ajouter une pièce au portfolio.
        </h1>
        <p className="mt-3 max-w-lg text-[12px] leading-relaxed text-muted">
          Renseignez l&apos;essentiel, choisissez une couverture. Vous pourrez
          ajuster les détails plus tard.
        </p>
      </div>

      <div className="mt-8">
        <ProjectForm />
      </div>
    </div>
  );
}
