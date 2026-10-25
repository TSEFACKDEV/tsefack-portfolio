import Image from "next/image";
import { Award, Cpu, MapPin } from "lucide-react";

type ProfilePlateProps = {
  hasPortrait: boolean;
};

export function ProfilePlate({ hasPortrait }: ProfilePlateProps) {
  return (
    <div className="relative mx-auto w-full max-w-[400px]">
      {/* Technical frame beneath the card */}
      <div
        aria-hidden="true"
        className="absolute -inset-3 rotate-[3deg] rounded-[32px] border border-dashed border-line-strong sm:-inset-4"
      />
      <div
        aria-hidden="true"
        className="absolute -bottom-4 -left-4 h-20 w-20 rounded-bl-[32px] border-b border-l border-accent/50"
      />

      <div className="relative overflow-hidden rounded-[26px] border border-white/10 bg-[#08182b] text-white shadow-[0_40px_90px_-40px_rgba(3,12,24,0.8)]">
        <div aria-hidden="true" className="absolute inset-0 cover-grid opacity-70" />
        <div aria-hidden="true" className="absolute inset-0 cover-fade" />
        <div
          aria-hidden="true"
          className="absolute -right-16 -top-16 h-56 w-56 rounded-full bg-[radial-gradient(circle,rgba(90,150,215,0.35),transparent_65%)] blur-2xl"
        />

        <div className="relative flex items-center justify-between px-6 pt-6">
          <span className="label text-[9px] text-white/55">
            Profile / 2026
          </span>
          <span className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/5 px-2.5 py-1">
            <span className="h-1.5 w-1.5 rounded-full bg-[#7fcaa8] shadow-[0_0_0_3px_rgba(127,202,168,0.16)]" />
            <span className="label text-[8px] tracking-[0.14em] text-white/75">
              Available
            </span>
          </span>
        </div>

        <div className="relative mx-6 mt-6 h-[268px] overflow-hidden rounded-xl border border-white/10 bg-white/[0.03] sm:h-[296px]">
          {hasPortrait ? (
            <>
              <Image
                src="/portrait.jpg"
                alt="Portrait of Calvin Klein Tsefack"
                fill
                priority
                sizes="(max-width: 1024px) 80vw, 400px"
                className="object-cover object-center grayscale-[0.08]"
              />
              <div
                aria-hidden="true"
                className="absolute inset-0 bg-gradient-to-t from-[#08182b] via-[#08182b]/10 to-transparent"
              />
            </>
          ) : (
            <div className="relative flex h-full flex-col items-center justify-center">
              <div
                aria-hidden="true"
                className="absolute h-44 w-44 rounded-full border border-white/10 sm:h-52 sm:w-52"
              />
              <div
                aria-hidden="true"
                className="absolute h-56 w-56 rounded-full border border-dashed border-white/[0.08] sm:h-64 sm:w-64"
              />
              <span className="absolute left-3 top-3 font-mono text-[8px] tracking-[0.22em] text-white/30">
                04°03′N
              </span>
              <span className="absolute bottom-3 right-3 font-mono text-[8px] tracking-[0.22em] text-white/30">
                09°42′E
              </span>
              <span className="font-serif text-[86px] leading-none tracking-[-0.04em] text-white sm:text-[102px]">
                TCK
              </span>
              <span className="label mt-3 text-[8px] text-white/45">
                Est. Douala
              </span>
            </div>
          )}

          <div className="absolute inset-x-0 bottom-0 flex items-end justify-between p-4">
            <span className="label text-[8px] text-white/50">
              Fig. 01 — Builder
            </span>
            <span className="font-mono text-[8px] tracking-[0.2em] text-white/35">
              CAMEROON
            </span>
          </div>
        </div>

        <div className="relative px-6 pb-6 pt-5">
          <div className="flex items-start justify-between gap-3">
            <div>
              <p className="font-serif text-[26px] leading-none tracking-[-0.01em] text-white">
                Calvin Klein Tsefack
              </p>
              <p className="mt-2 text-[11px] leading-relaxed text-white/55">
                Fullstack Developer · Final Year, Level 5
              </p>
            </div>
            <span className="mt-1 font-serif text-lg italic text-[#d8b878]">
              01
            </span>
          </div>
          <div className="mt-5 flex items-center justify-between border-t border-white/10 pt-3">
            <span className="inline-flex items-center gap-1.5 text-[10px] text-white/50">
              <MapPin className="h-3 w-3" strokeWidth={1.6} aria-hidden="true" />
              {`Douala, Cameroon`}
            </span>
          </div>
        </div>
      </div>

      {/* Floating credentials */}
      <div className="absolute -left-4 top-24 hidden items-center gap-2.5 rounded-full border border-line bg-surface/95 px-3.5 py-2.5 shadow-[0_16px_40px_-24px_rgba(11,31,58,0.5)] backdrop-blur-sm sm:flex lg:-left-9">
        <span className="grid h-7 w-7 place-items-center rounded-full bg-accent-soft text-accent">
          <Award className="h-3.5 w-3.5" strokeWidth={1.7} aria-hidden="true" />
        </span>
        <span>
          <span className="block text-[10px] font-semibold leading-tight text-ink">
            Top of class
          </span>
          <span className="label block text-[7px] text-faint">
            Software Eng. 3 · 2025
          </span>
        </span>
      </div>

      <div className="absolute -bottom-5 right-2 flex items-center gap-2.5 rounded-full border border-line bg-surface/95 px-3.5 py-2.5 shadow-[0_16px_40px_-24px_rgba(11,31,58,0.5)] backdrop-blur-sm sm:-right-5">
        <span className="grid h-7 w-7 place-items-center rounded-full bg-accent-soft text-accent">
          <Cpu className="h-3.5 w-3.5" strokeWidth={1.7} aria-hidden="true" />
        </span>
        <span>
          <span className="block text-[10px] font-semibold leading-tight text-ink">
            Huawei ICT 2026
          </span>
          <span className="label block text-[7px] text-faint">
            National phase
          </span>
        </span>
      </div>
    </div>
  );
}
