import { Plus } from "lucide-react";
import type { FaqItem } from "@/lib/content-fr";

type FrFaqProps = {
  items: FaqItem[];
  id?: string;
};

export function FrFaq({ items, id = "faq" }: FrFaqProps) {
  return (
    <div id={id} className="mt-12 divide-y divide-line border-y border-line">
      {items.map((item) => (
        <details key={item.question} className="group py-1">
          <summary className="flex cursor-pointer list-none items-center justify-between gap-6 py-5 text-left [&::-webkit-details-marker]:hidden">
            <span className="text-[15px] font-semibold leading-snug tracking-tight text-ink">
              {item.question}
            </span>
            <span className="grid h-8 w-8 shrink-0 place-items-center rounded-full border border-line-strong text-muted transition-all duration-300 group-open:rotate-45 group-open:border-accent group-open:text-accent">
              <Plus className="h-3.5 w-3.5" strokeWidth={1.7} aria-hidden="true" />
            </span>
          </summary>
          <div className="pb-6 pr-12">
            <p className="text-[13.5px] leading-relaxed text-muted">{item.answer}</p>
          </div>
        </details>
      ))}
    </div>
  );
}
