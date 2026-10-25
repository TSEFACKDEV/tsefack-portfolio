import type { ReactNode } from "react";
import { Reveal } from "./reveal";

type SectionHeadingProps = {
  index: string;
  eyebrow: string;
  title: ReactNode;
  description?: ReactNode;
  children?: ReactNode;
};

export function SectionHeading({
  index,
  eyebrow,
  title,
  description,
  children,
}: SectionHeadingProps) {
  return (
    <div className="flex flex-col gap-8 lg:flex-row lg:items-end lg:justify-between">
      <Reveal className="max-w-2xl">
        <div className="flex items-center gap-3">
          <span className="label text-accent">{index}</span>
          <span aria-hidden="true" className="h-px w-8 bg-line-strong" />
          <span className="label text-muted">{eyebrow}</span>
        </div>
        <h2 className="mt-6 font-serif text-[clamp(2.5rem,5.2vw,4.25rem)] leading-[0.95] tracking-[-0.015em] text-ink">
          {title}
        </h2>
      </Reveal>
      {(description || children) && (
        <Reveal delay={0.1} className="max-w-md lg:pb-2">
          {description && (
            <p className="text-[15px] leading-relaxed text-muted">{description}</p>
          )}
          {children}
        </Reveal>
      )}
    </div>
  );
}
