import fs from "node:fs";
import path from "node:path";
import Link from "next/link";
import {
  ArrowDownRight,
  ArrowUpRight,
  Download,
  MapPin,
  Radar,
  Sparkles,
} from "lucide-react";
import { profile } from "@/lib/content";
import { ProfilePlate } from "./profile-plate";

const hasPortrait = fs.existsSync(
  path.join(process.cwd(), "public", "portrait.jpg"),
);

export function Hero() {
  return (
    <section
      id="top"
      className="relative overflow-hidden pb-20 pt-32 sm:pt-36 lg:pb-28 lg:pt-44"
    >
      <div aria-hidden="true" className="pointer-events-none absolute inset-0">
        <div className="absolute inset-0 grid-paper opacity-30 [mask-image:linear-gradient(to_bottom,black,transparent_78%)]" />
        <div className="absolute -right-[12%] -top-[18%] h-[560px] w-[560px] animate-drift rounded-full bg-[radial-gradient(circle_at_center,var(--glow),transparent_66%)] blur-2xl" />
        <div className="absolute -left-24 top-1/2 h-[280px] w-[280px] rounded-full bg-[radial-gradient(circle_at_center,var(--accent-soft),transparent_70%)] blur-2xl" />
      </div>

      <div className="shell relative">
        <div className="grid items-center gap-16 lg:grid-cols-[1.12fr_0.88fr] lg:gap-12 xl:gap-20">
          <div>
            <div
              className="rise flex flex-wrap items-center gap-x-4 gap-y-3"
              style={{ animationDelay: "80ms" }}
            >
              <span className="inline-flex items-center gap-2 rounded-full border border-line bg-surface/70 px-3 py-1.5">
                <span className="h-1.5 w-1.5 animate-pulse-dot rounded-full bg-accent" />
                <span className="label text-[8.5px] text-muted">
                  {profile.availability}
                </span>
              </span>
              <span className="label text-[8.5px] text-faint">
                {profile.location} · {profile.timezone}
              </span>
            </div>

            <h1
              className="rise mt-7 font-serif text-[clamp(3.6rem,9vw,7rem)] leading-[0.86] tracking-[-0.025em] text-ink"
              style={{ animationDelay: "160ms" }}
            >
              Calvin Klein
              <span className="mt-1 block italic">
                Tsefack<span className="not-italic text-accent">.</span>
              </span>
            </h1>

            <div
              className="rise mt-7 flex items-center gap-3"
              style={{ animationDelay: "240ms" }}
            >
              <span aria-hidden="true" className="h-px w-8 bg-accent/70" />
              <p className="label text-[9px] text-muted">
                Final-Year Software Engineering Student · Fullstack Developer
              </p>
            </div>

            <p
              className="rise mt-6 max-w-xl text-[15px] leading-[1.75] text-muted sm:text-base"
              style={{ animationDelay: "320ms" }}
            >
              Final-year software engineering student at NHPSD (Level 5),
              ranked first of my class. I build thoughtful, resilient web,
              mobile and API products with TypeScript, C#/.NET and a growing
              love for systems.
            </p>

            <div
              className="rise mt-9 flex flex-wrap items-center gap-3"
              style={{ animationDelay: "400ms" }}
            >
              <a
                href="#work"
                className="group inline-flex items-center gap-2.5 rounded-full bg-ink px-6 py-3.5 text-[12.5px] font-semibold tracking-tight text-bg transition-all duration-300 hover:gap-3.5 dark:bg-accent dark:text-accent-contrast"
              >
                View selected work
                <ArrowDownRight
                  className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:translate-y-0.5"
                  strokeWidth={1.8}
                  aria-hidden="true"
                />
              </a>
              <a
                href="/cv.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="group inline-flex items-center gap-2.5 rounded-full border border-line-strong px-6 py-3.5 text-[12.5px] font-semibold tracking-tight text-ink transition-colors duration-300 hover:border-accent hover:text-accent"
              >
                <Download
                  className="h-4 w-4 transition-transform duration-300 group-hover:translate-y-0.5"
                  strokeWidth={1.8}
                  aria-hidden="true"
                />
                Download CV
              </a>
            </div>

            <div
              className="rise mt-10 flex flex-wrap items-center gap-x-6 gap-y-3 border-t border-line pt-6"
              style={{ animationDelay: "480ms" }}
            >
              <span className="inline-flex items-center gap-2 text-[11px] text-muted">
                <Sparkles
                  className="h-3.5 w-3.5 text-accent"
                  strokeWidth={1.7}
                  aria-hidden="true"
                />
                Top of class, 2024 – 2025
              </span>
              <span className="hidden h-3 w-px bg-line-strong sm:block" />
              <span className="inline-flex items-center gap-2 text-[11px] text-muted">
                <MapPin
                  className="h-3.5 w-3.5 text-accent"
                  strokeWidth={1.7}
                  aria-hidden="true"
                />
                NHPSD, Douala
              </span>
              <span className="hidden h-3 w-px bg-line-strong lg:block" />
              <Link
                href="/work/faucon"
                className="group inline-flex items-center gap-2 text-[11px] text-muted transition-colors hover:text-accent"
              >
                <Radar
                  className="h-3.5 w-3.5 text-accent"
                  strokeWidth={1.7}
                  aria-hidden="true"
                />
                Live
                <span className="font-medium text-ink transition-colors group-hover:text-accent">
                  Faucon
                </span>
                <ArrowUpRight
                  className="h-3 w-3 transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
                  strokeWidth={1.8}
                  aria-hidden="true"
                />
              </Link>
            </div>
          </div>

          <div
            className="rise relative"
            style={{ animationDelay: "300ms" }}
          >
            <ProfilePlate hasPortrait={hasPortrait} />
            <a
              href={profile.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="mx-auto mt-10 flex w-fit items-center gap-2 text-[11px] text-faint transition-colors hover:text-accent"
            >
              Connect on LinkedIn
              <ArrowUpRight
                className="h-3.5 w-3.5"
                strokeWidth={1.8}
                aria-hidden="true"
              />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
