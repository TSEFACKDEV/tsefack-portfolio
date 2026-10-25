import { ArrowUpRight, Circle } from "lucide-react";
import { currently, profile, stats } from "@/lib/content";
import { Reveal } from "./reveal";
import { SectionHeading } from "./section-heading";

export function About() {
  return (
    <section id="about" className="relative py-24 sm:py-32">
      <div className="shell">
        <SectionHeading
          index="01"
          eyebrow="About"
          title={
            <>
              Engineering with{" "}
              <span className="italic text-accent">intent</span>.
            </>
          }
          description="A rigorous academic foundation, a builder's instinct, and a strong preference for software that feels calm to use."
        />

        <div className="mt-14 grid gap-12 lg:mt-20 lg:grid-cols-12 lg:gap-16">
          <div className="lg:col-span-7">
            {profile.bio.map((paragraph, index) => (
              <Reveal key={paragraph.slice(0, 24)} delay={index * 0.06}>
                <p
                  className={
                    index === 0
                      ? "mb-6 text-[16px] leading-[1.85] text-ink/85 first-letter:float-left first-letter:mr-3 first-letter:font-serif first-letter:text-[4rem] first-letter:leading-[0.72] first-letter:text-accent sm:text-[17px]"
                      : "mb-6 text-[14.5px] leading-[1.85] text-muted sm:text-[15px]"
                  }
                >
                  {paragraph}
                </p>
              </Reveal>
            ))}

            <Reveal delay={0.15}>
              <div className="mt-8 flex items-center gap-4 border-t border-line pt-7">
                <span className="font-serif text-3xl italic text-ink">
                  Calvin
                </span>
                <span aria-hidden="true" className="h-px flex-1 bg-line" />
                <span className="text-right">
                  <span className="block text-[11px] font-semibold text-ink">
                    Fullstack Developer
                  </span>
                  <span className="label mt-1 block text-[8px] text-faint">
                    Douala, Cameroon
                  </span>
                </span>
              </div>
            </Reveal>
          </div>

          <div className="lg:col-span-5">
            <Reveal delay={0.1}>
              <div className="relative overflow-hidden rounded-2xl border border-line bg-surface">
                <div
                  aria-hidden="true"
                  className="dot-paper absolute inset-x-0 top-0 h-24 opacity-40 [mask-image:linear-gradient(to_bottom,black,transparent)]"
                />
                <div className="relative px-6 pb-6 pt-6">
                  <div className="flex items-center justify-between">
                    <span className="label text-[8.5px] text-muted">
                      Currently
                    </span>
                    <span className="inline-flex items-center gap-1.5">
                      <span className="h-1.5 w-1.5 animate-pulse-dot rounded-full bg-accent" />
                      <span className="label text-[8px] text-faint">Live</span>
                    </span>
                  </div>

                  <div className="mt-6 divide-y divide-line">
                    {currently.map((item) => (
                      <div
                        key={item.label}
                        className="flex items-start justify-between gap-6 py-3.5 first:pt-0 last:pb-1"
                      >
                        <span className="label shrink-0 pt-0.5 text-[8px] text-faint">
                          {item.label}
                        </span>
                        <span className="text-right text-[12px] leading-snug text-ink">
                          {item.value}
                        </span>
                      </div>
                    ))}
                  </div>

                  <div className="mt-6 flex items-center justify-between border-t border-line pt-4">
                    <span className="inline-flex items-center gap-2 text-[10px] text-faint">
                      <Circle
                        className="h-2 w-2 fill-current text-accent/50"
                        aria-hidden="true"
                      />
                      {profile.location}
                    </span>
                    <a
                      href={profile.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="group inline-flex items-center gap-1 text-[10px] font-semibold text-ink transition-colors hover:text-accent"
                    >
                      GitHub
                      <ArrowUpRight
                        className="h-3 w-3 transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
                        strokeWidth={1.8}
                        aria-hidden="true"
                      />
                    </a>
                  </div>
                </div>
              </div>
            </Reveal>

            <Reveal delay={0.18}>
              <div className="mt-5 rounded-2xl border border-line bg-accent-soft px-6 py-5">
                <p className="font-serif text-[21px] leading-snug text-ink">
                  &ldquo;Build it clean. Make it feel effortless.&rdquo;
                </p>
                <p className="label mt-2 text-[8px] text-accent">
                  A working principle
                </p>
              </div>
            </Reveal>
          </div>
        </div>

        <div className="mt-16 overflow-hidden rounded-2xl border border-line sm:mt-20">
          <div className="grid grid-cols-2 gap-px bg-line lg:grid-cols-4">
            {stats.map((stat, index) => (
              <Reveal
                key={stat.label}
                delay={index * 0.06}
                className="bg-surface"
              >
                <div className="group relative h-full px-5 py-7 transition-colors duration-500 hover:bg-surface-strong sm:px-7 sm:py-8">
                  <span className="absolute right-4 top-4 font-mono text-[8px] text-faint">
                    0{index + 1}
                  </span>
                  <span className="block font-serif text-[2.4rem] leading-none tracking-tight text-ink sm:text-[2.9rem]">
                    {stat.value}
                  </span>
                  <span className="mt-3 block max-w-[11rem] text-[11.5px] leading-snug text-muted">
                    {stat.label}
                  </span>
                  <span className="label mt-3 block text-[7.5px] text-faint">
                    {stat.detail}
                  </span>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
