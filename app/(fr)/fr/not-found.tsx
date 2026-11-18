import type { Metadata } from "next";
import Link from "next/link";
import { ArrowLeft, Compass } from "lucide-react";
import { FrFooter } from "@/components/fr/fr-footer";
import { FrHeader } from "@/components/fr/fr-header";

export const metadata: Metadata = {
  title: "Page introuvable",
  robots: { index: false, follow: false },
};

export default function FrNotFound() {
  return (
    <div id="top" className="flex min-h-dvh flex-col">
      <FrHeader />
      <main id="main" className="relative flex flex-1 items-center overflow-hidden py-24">
        <div aria-hidden="true" className="pointer-events-none absolute inset-0">
          <div className="absolute inset-0 grid-paper opacity-30 [mask-image:radial-gradient(circle_at_center,black,transparent_75%)]" />
          <div className="absolute left-1/2 top-1/2 h-[420px] w-[420px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-[radial-gradient(circle,var(--glow),transparent_65%)] blur-2xl" />
        </div>

        <div className="shell relative">
          <div className="mx-auto max-w-xl text-center">
            <span className="label text-[9px] text-accent">Erreur 404</span>
            <p className="mt-6 font-serif text-[clamp(6rem,18vw,11rem)] leading-none tracking-[-0.04em] text-ink">
              4<span className="italic text-accent">0</span>4
            </p>
            <h1 className="mt-4 font-serif text-[clamp(1.9rem,4vw,2.8rem)] leading-tight text-ink">
              Cette page a pris un autre chemin.
            </h1>
            <p className="mx-auto mt-4 max-w-md text-[13.5px] leading-relaxed text-muted">
              L&apos;adresse est peut-être obsolète, ou la page est encore en
              construction. Revenons sur un terrain connu.
            </p>
            <div className="mt-8 flex flex-wrap items-center justify-center gap-3">
              <Link
                href="/fr"
                className="group inline-flex items-center gap-2.5 rounded-full bg-ink px-5 py-3 text-[12px] font-semibold text-bg transition-all duration-300 hover:gap-3.5 dark:bg-accent dark:text-accent-contrast"
              >
                <ArrowLeft
                  className="h-3.5 w-3.5 transition-transform duration-300 group-hover:-translate-x-0.5"
                  strokeWidth={1.8}
                  aria-hidden="true"
                />
                Retour au portfolio
              </Link>
              <Link
                href="/fr#projets"
                className="inline-flex items-center gap-2 rounded-full border border-line-strong px-5 py-3 text-[12px] font-semibold text-ink transition-colors hover:border-accent hover:text-accent"
              >
                <Compass className="h-3.5 w-3.5" strokeWidth={1.8} aria-hidden="true" />
                Voir les projets
              </Link>
            </div>
          </div>
        </div>
      </main>
      <FrFooter />
    </div>
  );
}
