import Link from "next/link";
import { redirect } from "next/navigation";
import { ArrowLeft, ArrowUpRight, ShieldCheck } from "lucide-react";
import { LoginForm } from "@/components/admin/login-form";
import {
  authConfigured,
  isAuthenticated,
  usingFallbackPassword,
} from "@/lib/auth";
import { storageMode } from "@/lib/projects";

export default async function LoginPage() {
  if (await isAuthenticated()) redirect("/admin");

  const configured = authConfigured();
  const fallback = usingFallbackPassword();
  const mode = storageMode();

  return (
    <div className="grid min-h-dvh lg:grid-cols-[1.05fr_0.95fr]">
      <div className="relative hidden overflow-hidden bg-[#071626] p-12 text-white lg:flex lg:flex-col lg:justify-between">
        <div aria-hidden="true" className="absolute inset-0 cover-grid opacity-60" />
        <div
          aria-hidden="true"
          className="absolute -right-24 -top-24 h-[420px] w-[420px] rounded-full bg-[radial-gradient(circle,rgba(84,146,210,0.28),transparent_65%)] blur-2xl"
        />
        <div className="relative flex items-center gap-3">
          <span className="grid h-10 w-10 place-items-center rounded-full border border-white/15 font-serif text-[14px] text-white">
            TCK
          </span>
          <div>
            <p className="text-[12px] font-semibold tracking-tight">
              Tsefack Studio
            </p>
            <p className="label mt-1 text-[7px] text-white/40">
              Content workspace
            </p>
          </div>
        </div>

        <div className="relative max-w-md">
          <p className="label text-[8px] text-[#d8b878]">Private area</p>
          <p className="mt-5 font-serif text-[clamp(2.6rem,4vw,3.8rem)] leading-[0.95] tracking-[-0.02em]">
            Publish the work,
            <br />
            <span className="italic text-[#d8b878]">keep the craft.</span>
          </p>
          <p className="mt-6 max-w-sm text-[12px] leading-relaxed text-white/50">
            Add a project, adjust its story, change its cover — then let the
            portfolio update itself.
          </p>
        </div>

        <div className="relative flex items-center gap-5 text-[10px] text-white/35">
          <span className="inline-flex items-center gap-1.5">
            <ShieldCheck className="h-3.5 w-3.5" strokeWidth={1.6} aria-hidden="true" />
            Password protected
          </span>
          <span className="inline-flex items-center gap-1.5">
            <span className="h-1 w-1 rounded-full bg-[#7fcaa8]" />
            Storage: {mode}
          </span>
        </div>
      </div>

      <div className="relative flex flex-col justify-center px-5 py-12 sm:px-12">
        <div className="mx-auto w-full max-w-sm">
          <div className="flex items-center justify-between">
            <span className="grid h-10 w-10 place-items-center rounded-full border border-line-strong bg-surface font-serif text-[14px] text-ink lg:hidden">
              TCK
            </span>
            <Link
              href="/"
              className="group ml-auto inline-flex items-center gap-1.5 text-[10px] font-semibold text-muted transition-colors hover:text-ink"
            >
              <ArrowLeft
                className="h-3 w-3 transition-transform group-hover:-translate-x-0.5"
                strokeWidth={1.8}
                aria-hidden="true"
              />
              Retour au portfolio
            </Link>
          </div>

          <div className="mt-12 lg:mt-0">
            <p className="label text-[8px] text-accent">Administration</p>
            <h1 className="mt-3 font-serif text-[2.4rem] leading-none tracking-tight text-ink">
              Reprendre la main.
            </h1>
            <p className="mt-3 text-[12px] leading-relaxed text-muted">
              Connectez-vous pour publier, modifier ou retirer un projet du
              portfolio.
            </p>
          </div>

          <div className="mt-8">
            <LoginForm configured={configured} />
          </div>

          {fallback && (
            <p className="mt-5 rounded-lg border border-accent/25 bg-accent-soft px-3 py-2 text-[10px] leading-relaxed text-ink/80">
              Mode développement : le mot de passe par défaut est{" "}
              <code className="font-mono text-[10px]">studio</code>. Définissez{" "}
              <code className="font-mono text-[10px]">ADMIN_PASSWORD</code> avant
              la mise en ligne.
            </p>
          )}

          <p className="mt-8 border-t border-line pt-5 text-[9.5px] leading-relaxed text-faint">
            Les modifications sont enregistrées dans{" "}
            <code className="font-mono text-[9px]">content/projects.json</code>{" "}
            {mode === "github"
              ? "via un commit GitHub, puis le site est revalidé."
              : "sur le serveur, puis le site est revalidé."}
          </p>

          <a
            href="https://github.com/TSEFACKDEV"
            target="_blank"
            rel="noopener noreferrer"
            className="mt-4 inline-flex items-center gap-1.5 text-[9.5px] text-faint transition-colors hover:text-accent"
          >
            github.com/TSEFACKDEV
            <ArrowUpRight className="h-3 w-3" strokeWidth={1.8} aria-hidden="true" />
          </a>
        </div>
      </div>
    </div>
  );
}
