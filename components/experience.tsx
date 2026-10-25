import {
  ArrowUpRight,
  ChevronDown,
  Download,
  FileText,
  Phone,
} from "lucide-react";
import { experience, profile, references } from "@/lib/content";
import { Reveal } from "./reveal";
import { SectionHeading } from "./section-heading";

function typeTone(type: string) {
  if (type === "Distinction") return "text-accent bg-accent-soft border-accent/25";
  if (type === "Education") return "text-muted bg-bg-soft border-line";
  return "text-muted bg-surface border-line";
}

export function Experience() {
  return (
    <section id="experience" className="relative py-24 sm:py-32">
      <div className="shell">
        <SectionHeading
          index="03"
          eyebrow="Experience"
          title={
            <>
              A path built on{" "}
              <span className="italic text-accent">practice</span>.
            </>
          }
          description="Internships, competitions and continuous training — the experiences that shaped how I build."
        />

        <div className="mt-14 grid gap-12 lg:mt-20 lg:grid-cols-12 lg:gap-16">
          <div className="lg:col-span-8">
            <div className="relative">
              {experience.map((item, index) => (
                <Reveal key={`${item.year}-${item.title}`} delay={index * 0.05}>
                  <article className="relative border-l border-line pb-12 pl-6 last:pb-0 md:grid md:grid-cols-[5.5rem_1fr] md:gap-8 md:pl-8">
                    <span
                      aria-hidden="true"
                      className="absolute -left-[3.5px] top-[9px] h-[7px] w-[7px] rounded-full border border-bg bg-accent ring-1 ring-accent/30"
                    />
                    <div className="mb-3 flex items-center justify-between gap-3 md:mb-0 md:block md:pt-1">
                      <span className="label text-[9px] text-faint">
                        {item.year}
                      </span>
                      <span
                        className={`inline-flex rounded-full border px-2 py-0.5 font-mono text-[7.5px] uppercase tracking-[0.12em] md:mt-3 md:w-fit ${
                          typeTone(item.type)
                        }`}
                      >
                        {item.type}
                      </span>
                    </div>

                    <div>
                      <h3 className="text-[17px] font-semibold leading-snug tracking-tight text-ink sm:text-[19px]">
                        {item.title}
                      </h3>
                      <p className="mt-1 text-[11.5px] font-medium text-accent">
                        {item.org}
                      </p>
                      <p className="mt-3 max-w-xl text-[13px] leading-relaxed text-muted">
                        {item.description}
                      </p>
                      <div className="mt-4 flex flex-wrap gap-1.5">
                        {item.tags.map((tag) => (
                          <span key={tag} className="chip">
                            {tag}
                          </span>
                        ))}
                      </div>
                    </div>
                  </article>
                </Reveal>
              ))}
            </div>
          </div>

          <div className="lg:col-span-4">
            <div className="lg:sticky lg:top-28">
              <Reveal>
                <div className="relative overflow-hidden rounded-2xl border border-line bg-[#08182b] p-6 text-white">
                  <div
                    aria-hidden="true"
                    className="absolute inset-0 cover-grid opacity-60"
                  />
                  <div
                    aria-hidden="true"
                    className="absolute -right-8 -top-8 h-32 w-32 rounded-full bg-[radial-gradient(circle,rgba(90,150,215,0.28),transparent_65%)] blur-xl"
                  />
                  <div className="relative">
                    <FileText
                      className="h-5 w-5 text-[#d8b878]"
                      strokeWidth={1.5}
                      aria-hidden="true"
                    />
                    <p className="mt-4 font-serif text-[23px] leading-tight">
                      The full story, on one page.
                    </p>
                    <p className="mt-2 text-[11px] leading-relaxed text-white/50">
                      A concise, print-ready CV covering education, projects and
                      technical skills.
                    </p>
                    <a
                      href="/cv.pdf"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="group mt-5 inline-flex items-center gap-2 rounded-full bg-[#d8b878] px-4 py-2.5 text-[11px] font-semibold text-[#08182b] transition-all duration-300 hover:gap-3"
                    >
                      <Download className="h-3.5 w-3.5" strokeWidth={2} aria-hidden="true" />
                      Download CV
                      <ArrowUpRight
                        className="h-3.5 w-3.5 transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
                        strokeWidth={2}
                        aria-hidden="true"
                      />
                    </a>
                  </div>
                </div>
              </Reveal>

              <Reveal delay={0.08}>
                <div className="mt-5 rounded-2xl border border-line bg-surface p-6">
                  <p className="label text-[8px] text-faint">Education</p>
                  <div className="mt-4 space-y-4">
                    <div>
                      <p className="text-[12.5px] font-semibold leading-snug text-ink">
                        Engineering Degree, Software Engineering
                      </p>
                      <p className="mt-1 text-[10.5px] leading-relaxed text-muted">
                        NHPSD · 2022 – present (final year, Level 5)
                      </p>
                    </div>
                    <div className="h-px w-full bg-line" />
                    <div>
                      <p className="text-[12.5px] font-semibold leading-snug text-ink">
                        Professional English Training
                      </p>
                      <p className="mt-1 text-[10.5px] leading-relaxed text-muted">
                        Smart Corp · 2025 – present
                      </p>
                    </div>
                    <div className="h-px w-full bg-line" />
                    <div>
                      <p className="text-[12.5px] font-semibold leading-snug text-ink">
                        Scientific Baccalauréat C
                      </p>
                      <p className="mt-1 text-[10.5px] leading-relaxed text-muted">
                        Lycée Classique de Dschang · 2022, honours
                      </p>
                    </div>
                  </div>
                </div>
              </Reveal>

              <Reveal delay={0.14}>
                <details className="group mt-5 rounded-2xl border border-line bg-surface">
                  <summary className="flex cursor-pointer list-none items-center justify-between gap-3 p-5 [&::-webkit-details-marker]:hidden">
                    <span className="label text-[8px] text-faint">
                      References · {references.length}
                    </span>
                    <ChevronDown
                      className="h-4 w-4 text-muted transition-transform duration-300 group-open:rotate-180"
                      strokeWidth={1.6}
                      aria-hidden="true"
                    />
                  </summary>
                  <div className="space-y-4 border-t border-line px-5 py-5">
                    {references.map((reference) => (
                      <div key={reference.name}>
                        <p className="text-[12px] font-semibold text-ink">
                          {reference.name}
                        </p>
                        <p className="mt-0.5 text-[10px] leading-relaxed text-muted">
                          {reference.role}
                        </p>
                        <a
                          href={`tel:${reference.phone.replace(/\s/g, "")}`}
                          className="mt-1 inline-flex items-center gap-1.5 font-mono text-[9.5px] text-faint transition-colors hover:text-accent"
                        >
                          <Phone className="h-3 w-3" strokeWidth={1.6} aria-hidden="true" />
                          {reference.phone}
                        </a>
                      </div>
                    ))}
                  </div>
                </details>
              </Reveal>

              <Reveal delay={0.2}>
                <p className="mt-6 text-[10px] leading-relaxed text-faint">
                  Based in {profile.location} · {profile.timezone}. Open to remote
                  and on-site opportunities.
                </p>
              </Reveal>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
