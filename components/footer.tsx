import { ArrowUp, Mail } from "lucide-react";
import { navigation, profile } from "@/lib/content";
import { GithubIcon, LinkedinIcon } from "./brand-icons";

export function Footer() {
  return (
    <footer className="relative border-t border-line">
      <div className="shell py-12">
        <div className="flex flex-col gap-10 md:flex-row md:items-start md:justify-between">
          <div>
            <a href="#top" className="group inline-flex items-baseline gap-2">
              <span className="font-serif text-[30px] leading-none tracking-tight text-ink">
                Tsefack
              </span>
              <span className="h-1.5 w-1.5 rounded-full bg-accent transition-transform duration-300 group-hover:scale-125" />
            </a>
            <p className="mt-3 max-w-xs text-[11.5px] leading-relaxed text-muted">
              Fullstack developer & software engineering student. Building
              considered products from Douala, Cameroon.
            </p>
            <p className="mt-4 font-mono text-[8.5px] uppercase tracking-[0.18em] text-faint">
              {profile.location} · {profile.timezone}
            </p>
          </div>

          <div className="grid grid-cols-2 gap-x-12 gap-y-8 sm:gap-x-20">
            <nav aria-label="Footer">
              <p className="label mb-4 text-[7.5px] text-faint">Menu</p>
              <ul className="space-y-2.5">
                {navigation.map((item) => (
                  <li key={item.id}>
                    <a
                      href={`#${item.id}`}
                      className="link-underline text-[11.5px] text-muted transition-colors hover:text-ink"
                    >
                      {item.label}
                    </a>
                  </li>
                ))}
              </ul>
            </nav>
            <div>
              <p className="label mb-4 text-[7.5px] text-faint">Elsewhere</p>
              <ul className="space-y-2.5">
                <li>
                  <a
                    href={profile.linkedin}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group inline-flex items-center gap-2 text-[11.5px] text-muted transition-colors hover:text-ink"
                  >
                    <LinkedinIcon className="h-3 w-3" />
                    LinkedIn
                  </a>
                </li>
                <li>
                  <a
                    href={profile.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group inline-flex items-center gap-2 text-[11.5px] text-muted transition-colors hover:text-ink"
                  >
                    <GithubIcon className="h-3 w-3" />
                    GitHub
                  </a>
                </li>
                <li>
                  <a
                    href={`mailto:${profile.email}`}
                    className="group inline-flex items-center gap-2 text-[11.5px] text-muted transition-colors hover:text-ink"
                  >
                    <Mail className="h-3 w-3" strokeWidth={1.7} aria-hidden="true" />
                    Email
                  </a>
                </li>
              </ul>
            </div>
          </div>

          <a
            href="#top"
            aria-label="Back to top"
            className="group grid h-10 w-10 place-items-center rounded-full border border-line text-muted transition-colors hover:border-accent hover:text-accent"
          >
            <ArrowUp
              className="h-4 w-4 transition-transform duration-300 group-hover:-translate-y-0.5"
              strokeWidth={1.7}
              aria-hidden="true"
            />
          </a>
        </div>

        <div className="mt-12 flex flex-col gap-3 border-t border-line pt-6 text-[9.5px] text-faint sm:flex-row sm:items-center sm:justify-between">
          <p>
            © 2026 Calvin Klein Tsefack. All rights reserved.
          </p>
          <p className="font-mono uppercase tracking-[0.12em]">
            Designed & built with Next.js · Tailwind · Motion
          </p>
        </div>
      </div>
    </footer>
  );
}
