import type { ReactNode } from "react";

type FrHeroProps = {
  eyebrow: string;
  title: ReactNode;
  lead: ReactNode;
  meta?: ReactNode;
  children?: ReactNode;
};

export function FrHero({ eyebrow, title, lead, meta, children }: FrHeroProps) {
  return (
    <section
      id="top"
      className="relative overflow-hidden pb-16 pt-32 sm:pt-36 lg:pb-24 lg:pt-40"
    >
      <div aria-hidden="true" className="pointer-events-none absolute inset-0">
        <div className="absolute inset-0 grid-paper opacity-30 [mask-image:linear-gradient(to_bottom,black,transparent_78%)]" />
        <div className="absolute -right-[10%] -top-[20%] h-[520px] w-[520px] animate-drift rounded-full bg-[radial-gradient(circle_at_center,var(--glow),transparent_66%)] blur-2xl" />
        <div className="absolute -left-24 top-1/2 h-[260px] w-[260px] rounded-full bg-[radial-gradient(circle_at_center,var(--accent-soft),transparent_70%)] blur-2xl" />
      </div>

      <div className="shell relative">
        <div className="rise flex flex-wrap items-center gap-x-4 gap-y-3">
          <span className="inline-flex items-center gap-2 rounded-full border border-line bg-surface/70 px-3 py-1.5">
            <span className="h-1.5 w-1.5 animate-pulse-dot rounded-full bg-accent" />
            <span className="label text-[8.5px] text-muted">{eyebrow}</span>
          </span>
          {meta && <span className="label text-[8.5px] text-faint">{meta}</span>}
        </div>

        <h1 className="rise mt-7 max-w-4xl font-serif text-[clamp(2.9rem,6.6vw,5.2rem)] leading-[0.94] tracking-[-0.02em] text-ink">
          {title}
        </h1>

        <p className="rise mt-7 max-w-2xl text-[15px] leading-[1.8] text-muted sm:text-base">
          {lead}
        </p>

        {children && (
          <div className="rise mt-9 flex flex-wrap items-center gap-3">{children}</div>
        )}
      </div>
    </section>
  );
}
