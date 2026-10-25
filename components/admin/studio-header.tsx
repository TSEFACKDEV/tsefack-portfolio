import Link from "next/link";
import { ArrowUpRight, LogOut } from "lucide-react";
import { logoutAction } from "@/app/admin/actions";
import { storageMode } from "@/lib/projects";
import { ThemeToggle } from "../theme-toggle";

export function StudioHeader() {
  const mode = storageMode();

  return (
    <header className="sticky top-0 z-40 border-b border-line bg-bg/85 backdrop-blur-xl">
      <div className="mx-auto flex h-16 max-w-5xl items-center justify-between gap-4 px-5">
        <Link href="/admin" className="group flex items-center gap-3">
          <span className="grid h-9 w-9 place-items-center rounded-full border border-line-strong bg-surface font-serif text-[13px] text-ink">
            TCK
          </span>
          <span className="leading-tight">
            <span className="block text-[12px] font-semibold tracking-tight text-ink">
              Studio
            </span>
            <span className="label block text-[7px] text-faint">
              Tsefack portfolio
            </span>
          </span>
        </Link>

        <div className="flex items-center gap-2">
          <span
            title={
              mode === "github"
                ? "Les modifications sont commitées dans le dépôt GitHub."
                : "Stockage local — nécessite un serveur persistant."
            }
            className={`mr-1 hidden items-center gap-1.5 rounded-full border px-2.5 py-1 sm:inline-flex ${
              mode === "github"
                ? "border-emerald-500/25 bg-emerald-500/[0.06] text-emerald-700 dark:text-emerald-400"
                : "border-accent/25 bg-accent-soft text-accent"
            }`}
          >
            <span
              className={`h-1 w-1 rounded-full ${
                mode === "github" ? "bg-emerald-500" : "bg-accent"
              }`}
            />
            <span className="label text-[7px]">{mode}</span>
          </span>

          <Link
            href="/"
            target="_blank"
            className="group hidden items-center gap-1.5 rounded-full border border-line px-3 py-2 text-[10px] font-semibold text-muted transition-colors hover:border-line-strong hover:text-ink sm:inline-flex"
          >
            Voir le site
            <ArrowUpRight
              className="h-3 w-3 transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
              strokeWidth={1.8}
              aria-hidden="true"
            />
          </Link>

          <ThemeToggle />

          <form action={logoutAction}>
            <button
              type="submit"
              aria-label="Se déconnecter"
              title="Se déconnecter"
              className="grid h-9 w-9 place-items-center rounded-full border border-line text-muted transition-colors hover:border-line-strong hover:text-ink"
            >
              <LogOut className="h-3.5 w-3.5" strokeWidth={1.7} aria-hidden="true" />
            </button>
          </form>
        </div>
      </div>
    </header>
  );
}
