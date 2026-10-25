import {
  BookOpen,
  Code2,
  Compass,
  Database,
  Languages as LanguagesIcon,
  LayoutTemplate,
  Music,
  Server,
  Terminal,
  Trophy,
} from "lucide-react";
import type { LucideIcon } from "lucide-react";
import { languages, skills } from "@/lib/content";
import { Reveal } from "./reveal";
import { SectionHeading } from "./section-heading";

const iconMap: Record<string, LucideIcon> = {
  code: Code2,
  layout: LayoutTemplate,
  server: Server,
  database: Database,
  terminal: Terminal,
  compass: Compass,
};

const interests = [
  { icon: Music, label: "Choral singing" },
  { icon: BookOpen, label: "Technical reading" },
  { icon: Trophy, label: "Football" },
];

export function Skills() {
  return (
    <section id="skills" className="relative border-y border-line bg-bg-soft/30 py-24 sm:py-32">
      <div className="shell">
        <SectionHeading
          index="04"
          eyebrow="Skills"
          title={
            <>
              A toolkit,{" "}
              <span className="italic text-accent">sharpened</span>.
            </>
          }
          description="The languages, frameworks and systems I work with — and the human skills that keep the work grounded."
        />

        <div className="mt-14 grid gap-px overflow-hidden rounded-2xl border border-line bg-line sm:grid-cols-2 lg:mt-20 lg:grid-cols-3">
          {skills.map((group, index) => {
            const Icon = iconMap[group.icon] ?? Code2;
            return (
              <Reveal
                key={group.title}
                delay={index * 0.05}
                className="bg-surface"
              >
                <div className="group relative h-full p-6 transition-colors duration-500 hover:bg-surface-strong sm:p-7">
                  <span className="absolute right-5 top-5 font-mono text-[8px] text-faint">
                    0{index + 1}
                  </span>
                  <span className="grid h-9 w-9 place-items-center rounded-lg border border-line bg-bg-soft text-accent transition-colors duration-500 group-hover:border-accent/30 group-hover:bg-accent-soft">
                    <Icon className="h-4 w-4" strokeWidth={1.6} aria-hidden="true" />
                  </span>
                  <h3 className="mt-5 text-[12px] font-semibold uppercase tracking-[0.12em] text-ink">
                    {group.title}
                  </h3>
                  <ul className="mt-4 flex flex-wrap gap-1.5">
                    {group.items.map((item) => (
                      <li key={item} className="chip">
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              </Reveal>
            );
          })}
        </div>

        <div className="mt-6 grid gap-5 lg:grid-cols-2">
          <Reveal>
            <div className="h-full rounded-2xl border border-line bg-surface p-6 sm:p-7">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-2.5">
                  <LanguagesIcon
                    className="h-4 w-4 text-accent"
                    strokeWidth={1.6}
                    aria-hidden="true"
                  />
                  <h3 className="text-[12px] font-semibold uppercase tracking-[0.12em] text-ink">
                    Languages
                  </h3>
                </div>
                <span className="label text-[7.5px] text-faint">Spoken</span>
              </div>

              <div className="mt-6 space-y-6">
                {languages.map((language) => (
                  <div key={language.name}>
                    <div className="flex items-baseline justify-between gap-4">
                      <p className="text-[12.5px] font-medium text-ink">
                        {language.name}
                      </p>
                      <p className="text-[10px] text-muted">{language.note}</p>
                    </div>
                    <div className="mt-2.5 h-[3px] w-full overflow-hidden rounded-full bg-bg-soft">
                      <div
                        className="h-full rounded-full bg-accent/80"
                        style={{ width: `${language.value}%` }}
                      />
                    </div>
                    <p className="mt-2 text-[10px] text-faint">{language.level}</p>
                  </div>
                ))}
              </div>

              <p className="mt-6 border-t border-line pt-4 text-[10px] leading-relaxed text-faint">
                English is improving through weekly corporate training at Smart
                Corp — currently working towards B2.
              </p>
            </div>
          </Reveal>

          <Reveal delay={0.08}>
            <div className="relative flex h-full flex-col justify-between overflow-hidden rounded-2xl border border-line bg-surface p-6 sm:p-7">
              <div
                aria-hidden="true"
                className="dot-paper absolute inset-0 opacity-[0.18]"
              />
              <div className="relative">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2.5">
                    <Compass
                      className="h-4 w-4 text-accent"
                      strokeWidth={1.6}
                      aria-hidden="true"
                    />
                    <h3 className="text-[12px] font-semibold uppercase tracking-[0.12em] text-ink">
                      Beyond the screen
                    </h3>
                  </div>
                  <span className="label text-[7.5px] text-faint">
                    Human
                  </span>
                </div>
                <p className="mt-5 max-w-sm font-serif text-[22px] leading-snug text-ink">
                  Good software starts with listening — to people, to context,
                  to the problem underneath.
                </p>
              </div>
              <div className="relative mt-6 grid gap-2 sm:grid-cols-3">
                {interests.map((interest) => (
                  <div
                    key={interest.label}
                    className="flex items-center gap-2 rounded-lg border border-line bg-bg/40 px-3 py-2.5"
                  >
                    <interest.icon
                      className="h-3.5 w-3.5 shrink-0 text-accent"
                      strokeWidth={1.6}
                      aria-hidden="true"
                    />
                    <span className="text-[10px] leading-tight text-muted">
                      {interest.label}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
