import Image from "next/image";
import { ArrowUpRight } from "lucide-react";
import type { Project } from "@/lib/content";
import { coverStyles } from "@/lib/covers";

type ProjectCoverProps = {
  project: Project;
  ratio?: "card" | "wide";
  priority?: boolean;
};

function RadarVisual({ project }: { project: Project }) {
  return (
    <>
      <div aria-hidden="true" className="absolute inset-0 cover-fade" />
      <div
        aria-hidden="true"
        className="absolute -right-24 top-1/2 aspect-square w-[78%] -translate-y-1/2"
      >
        <span className="absolute inset-0 rounded-full border border-white/12" />
        <span className="absolute inset-[16%] rounded-full border border-dashed border-white/[0.15]" />
        <span className="absolute inset-[32%] rounded-full border border-white/12" />
        <span className="absolute left-1/2 top-0 h-full w-px -translate-x-1/2 bg-white/[0.08]" />
        <span className="absolute left-0 top-1/2 h-px w-full -translate-y-1/2 bg-white/[0.08]" />
        <span className="absolute left-[54%] top-[41%] h-2 w-2 -translate-x-1/2 -translate-y-1/2 rounded-full bg-[#d8b878] shadow-[0_0_0_6px_rgba(216,184,120,0.12)]" />
        <span className="absolute left-[54%] top-[41%] h-16 w-16 -translate-x-1/2 -translate-y-1/2 animate-ping rounded-full border border-[#d8b878]/20 [animation-duration:3.5s]" />
      </div>

      <div className="absolute left-[38%] top-[62px] hidden flex-col gap-1.5 sm:flex">
        <span className="font-mono text-[7px] uppercase tracking-[0.18em] text-white/35">
          04°03′N / 09°42′E
        </span>
        <span className="font-mono text-[7px] uppercase tracking-[0.18em] text-white/35">
          Mode · move
        </span>
        <span className="inline-flex items-center gap-1.5 font-mono text-[7px] uppercase tracking-[0.18em] text-[#d8b878]/80">
          <span className="h-1 w-1 rounded-full bg-[#d8b878]" />
          MQTT live
        </span>
      </div>

      <div className="absolute inset-x-4 bottom-0 flex items-end justify-between pb-4">
        <div>
          <span className="font-serif text-[22px] italic leading-none text-white/90">
            {project.title}
          </span>
          <span className="mt-2 block font-mono text-[7px] uppercase tracking-[0.2em] text-white/40">
            IoT tracking platform
          </span>
        </div>
        <span className="grid h-9 w-9 place-items-center rounded-full border border-white/20 bg-white/[0.06] text-white/80 backdrop-blur-sm transition-all duration-500 group-hover:border-white/40 group-hover:bg-white/15">
          <ArrowUpRight className="h-4 w-4" strokeWidth={1.6} aria-hidden="true" />
        </span>
      </div>
    </>
  );
}

function MobileVisual({ project }: { project: Project }) {
  const shots = project.images ?? [];

  return (
    <>
      <div
        aria-hidden="true"
        className="absolute inset-0 bg-[radial-gradient(80%_80%_at_55%_20%,rgba(110,210,200,0.18),transparent_65%)]"
      />
      <div className="absolute inset-x-0 bottom-0 top-[50px]">
        {shots[0] && (
          <div className="absolute left-[19%] top-[24px] w-[28%] -rotate-[8deg] overflow-hidden rounded-[16px] border-[3px] border-[#06131f] shadow-[0_25px_45px_-18px_rgba(0,0,0,0.85)]">
            <div className="relative aspect-[9/19]">
              <Image
                src={shots[0]}
                alt={`${project.title} map screen`}
                fill
                sizes="(max-width: 1024px) 30vw, 200px"
                className="object-cover object-top"
              />
            </div>
          </div>
        )}
        {shots[1] && (
          <div className="absolute left-[44%] top-[6px] w-[32%] rotate-[3deg] overflow-hidden rounded-[18px] border-[3px] border-[#06131f] shadow-[0_30px_55px_-18px_rgba(0,0,0,0.9)] transition-transform duration-700 group-hover:-translate-y-1">
            <div className="relative aspect-[9/19]">
              <Image
                src={shots[1]}
                alt={`${project.title} home screen`}
                fill
                sizes="(max-width: 1024px) 34vw, 220px"
                className="object-cover object-top"
              />
            </div>
          </div>
        )}
      </div>
    </>
  );
}

export function ProjectCover({
  project,
  ratio = "card",
  priority = false,
}: ProjectCoverProps) {
  return (
    <div
      className={`relative overflow-hidden bg-[#08182b] ${
        ratio === "wide"
          ? "aspect-[16/10] rounded-2xl sm:aspect-[16/9]"
          : "aspect-[16/10] rounded-xl"
      }`}
    >
      <div
        aria-hidden="true"
        className={`absolute inset-0 bg-gradient-to-br ${
          coverStyles[project.cover] ?? coverStyles.navy
        }`}
      />
      <div aria-hidden="true" className="absolute inset-0 cover-grid" />

      <div className="relative z-10 flex items-start justify-between p-4">
        <span className="font-mono text-[8.5px] uppercase tracking-[0.22em] text-white/55">
          Project / {project.index}
        </span>
        <span className="rounded-full border border-white/15 bg-[#08182b]/40 px-2.5 py-1 font-mono text-[8px] uppercase tracking-[0.12em] text-white/75 backdrop-blur-sm">
          {project.category}
        </span>
      </div>

      {project.visual === "radar" ? (
        <RadarVisual project={project} />
      ) : project.visual === "mobile" ? (
        <MobileVisual project={project} />
      ) : project.image ? (
        <div className="absolute inset-x-4 bottom-0 top-[54px] overflow-hidden rounded-t-lg border border-white/15 bg-[#0b1d30] shadow-[0_20px_50px_-20px_rgba(0,0,0,0.8)]">
          <div className="flex h-7 items-center border-b border-white/10 bg-[#0a1a2c] px-3">
            <span aria-hidden="true" className="flex items-center gap-1">
              <span className="h-1.5 w-1.5 rounded-full bg-white/20" />
              <span className="h-1.5 w-1.5 rounded-full bg-white/20" />
              <span className="h-1.5 w-1.5 rounded-full bg-white/20" />
            </span>
            <span className="mx-auto rounded-sm border border-white/10 bg-white/[0.04] px-3 py-0.5 font-mono text-[7px] tracking-[0.08em] text-white/45">
              {project.domain}
            </span>
            <span aria-hidden="true" className="w-6" />
          </div>
          <div className="relative h-[calc(100%-1.75rem)] overflow-hidden">
            <Image
              src={project.image}
              alt={project.imageAlt ?? `${project.title} website screenshot`}
              fill
              priority={priority}
              unoptimized={project.image.startsWith("http")}
              sizes="(max-width: 1024px) 100vw, 1100px"
              className="object-cover object-top transition-transform duration-[1200ms] ease-[cubic-bezier(0.22,1,0.36,1)] group-hover:scale-[1.03]"
            />
            <div
              aria-hidden="true"
              className="absolute inset-0 bg-gradient-to-t from-[#08182b]/45 via-transparent to-transparent"
            />
            {project.href && (
              <span className="absolute bottom-3 left-3 inline-flex items-center gap-1.5 rounded-full border border-white/15 bg-[#08182b]/80 px-2.5 py-1 font-mono text-[7px] uppercase tracking-[0.16em] text-white/70 backdrop-blur">
                <span className="h-1 w-1 rounded-full bg-[#7fcaa8]" />
                Live
              </span>
            )}
          </div>
        </div>
      ) : (
        <>
          <div aria-hidden="true" className="absolute inset-0 cover-fade" />
          <span
            aria-hidden="true"
            className="absolute -right-8 top-10 h-44 w-44 rounded-full border border-white/10"
          />
          <span
            aria-hidden="true"
            className="absolute right-[68px] top-[74px] h-1.5 w-1.5 rounded-full bg-[#d8b878]/70"
          />
          <div
            aria-hidden="true"
            className="absolute -bottom-20 -right-10 font-serif text-[15rem] italic leading-none text-white/[0.12] transition-transform duration-[900ms] group-hover:-translate-y-2 group-hover:translate-x-1"
          >
            {project.glyph}
          </div>
            <div className="absolute inset-x-4 bottom-0 flex items-end justify-between pb-4">
              <div>
                <span className="font-serif text-[22px] italic leading-none text-white/90">
                  {project.title}
                </span>
                <span className="mt-2 block font-mono text-[7px] uppercase tracking-[0.2em] text-white/40">
                  {project.category === "Academic"
                    ? "Academic case study"
                    : "In development"}
                </span>
              </div>
              {ratio === "card" && (
                <span className="grid h-9 w-9 place-items-center rounded-full border border-white/20 bg-white/[0.06] text-white/80 backdrop-blur-sm transition-all duration-500 group-hover:border-white/40 group-hover:bg-white/15">
                  <ArrowUpRight
                    className="h-4 w-4 transition-transform duration-500 group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
                    strokeWidth={1.6}
                    aria-hidden="true"
                  />
                </span>
              )}
            </div>
        </>
      )}
    </div>
  );
}
