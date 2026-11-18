import { ArrowUp } from "lucide-react";
import Link from "next/link";
import { frNavigation, frProfile } from "@/lib/content-fr";
import { GithubIcon, LinkedinIcon } from "../brand-icons";

export function FrFooter() {
  return (
    <footer className="relative border-t border-line">
      <div className="shell py-12">
        <div className="flex flex-col gap-10 md:flex-row md:items-start md:justify-between">
          <div>
            <Link href="/fr" className="group inline-flex items-baseline gap-2">
              <span className="font-serif text-[30px] leading-none tracking-tight text-ink">
                Tsefack
              </span>
              <span className="h-1.5 w-1.5 rounded-full bg-accent transition-transform duration-300 group-hover:scale-125" />
            </Link>
            <p className="mt-3 max-w-xs text-[11.5px] leading-relaxed text-muted">
              Développeur fullstack et ingénieur logiciel. Des produits web,
              mobiles et des API pensés depuis Douala, au Cameroun.
            </p>
            <p className="mt-4 font-mono text-[8.5px] uppercase tracking-[0.18em] text-faint">
              {frProfile.location} · GMT+1
            </p>
          </div>

          <div className="grid grid-cols-2 gap-x-12 gap-y-8 sm:gap-x-20">
            <nav aria-label="Pied de page">
              <p className="label mb-4 text-[7.5px] text-faint">Navigation</p>
              <ul className="space-y-2.5">
                {frNavigation.map((item) => (
                  <li key={item.id}>
                    <a
                      href={`/fr#${item.id}`}
                      className="link-underline text-[11.5px] text-muted transition-colors hover:text-ink"
                    >
                      {item.label}
                    </a>
                  </li>
                ))}
              </ul>
            </nav>
            <div>
              <p className="label mb-4 text-[7.5px] text-faint">Expertises</p>
              <ul className="space-y-2.5">
                <li>
                  <Link
                    href="/fr/developpeur-fullstack-cameroun"
                    className="link-underline text-[11.5px] text-muted transition-colors hover:text-ink"
                  >
                    Développeur fullstack
                  </Link>
                </li>
                <li>
                  <Link
                    href="/fr/devops-cameroun"
                    className="link-underline text-[11.5px] text-muted transition-colors hover:text-ink"
                  >
                    DevOps au Cameroun
                  </Link>
                </li>
                <li>
                  <Link
                    href="/"
                    hrefLang="en"
                    className="link-underline text-[11.5px] text-muted transition-colors hover:text-ink"
                  >
                    English portfolio
                  </Link>
                </li>
              </ul>
            </div>
          </div>

          <div className="flex flex-col gap-3">
            <div className="flex items-center gap-2">
              <a
                href={frProfile.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LinkedIn"
                className="grid h-9 w-9 place-items-center rounded-full border border-line text-muted transition-colors hover:border-accent hover:text-accent"
              >
                <LinkedinIcon className="h-3.5 w-3.5" />
              </a>
              <a
                href={frProfile.github}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="GitHub"
                className="grid h-9 w-9 place-items-center rounded-full border border-line text-muted transition-colors hover:border-accent hover:text-accent"
              >
                <GithubIcon className="h-3.5 w-3.5" />
              </a>
            </div>
            <a
              href="#top"
              aria-label="Retour en haut"
              className="group grid h-9 w-9 place-items-center rounded-full border border-line text-muted transition-colors hover:border-accent hover:text-accent"
            >
              <ArrowUp
                className="h-4 w-4 transition-transform duration-300 group-hover:-translate-y-0.5"
                strokeWidth={1.7}
                aria-hidden="true"
              />
            </a>
          </div>
        </div>

        <div className="mt-12 flex flex-col gap-3 border-t border-line pt-6 text-[9.5px] text-faint sm:flex-row sm:items-center sm:justify-between">
          <p>© 2026 Calvin Klein Tsefack. Tous droits réservés.</p>
          <p className="font-mono uppercase tracking-[0.12em]">
            Conçu et développé avec Next.js · Tailwind · Motion
          </p>
        </div>
      </div>
    </footer>
  );
}
