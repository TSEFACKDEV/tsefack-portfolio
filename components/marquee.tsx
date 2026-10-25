import { marqueeItems } from "@/lib/content";

export function Marquee() {
  const items = [...marqueeItems, ...marqueeItems];

  return (
    <div className="relative border-y border-line bg-bg-soft/60">
      <div className="mx-auto flex max-w-[78rem] items-center gap-6 overflow-hidden px-0">
        <span className="label hidden shrink-0 pl-12 text-[8px] text-faint lg:block">
          Toolkit
        </span>
        <div className="mask-fade-x group relative w-full overflow-hidden py-5">
          <div className="flex w-max animate-marquee items-center group-hover:[animation-play-state:paused]">
            {items.map((item, index) => (
              <span
                key={`${item}-${index}`}
                className="flex shrink-0 items-center"
              >
                <span className="font-mono text-[10.5px] uppercase tracking-[0.16em] text-muted">
                  {item}
                </span>
                <span
                  aria-hidden="true"
                  className="mx-6 h-[3px] w-[3px] rotate-45 bg-accent/60 sm:mx-8"
                />
              </span>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
