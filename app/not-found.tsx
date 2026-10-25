import type { Metadata } from "next";
import Link from "next/link";
import { ArrowLeft, Compass } from "lucide-react";
import { SiteHeader } from "@/components/site-header";
import { Footer } from "@/components/footer";

export const metadata: Metadata = {
  title: "Page not found",
  robots: { index: false, follow: false },
};

export default function NotFound() {
  return (
    <div id="top" className="flex min-h-dvh flex-col">
      <SiteHeader />
      <main id="main" className="relative flex flex-1 items-center overflow-hidden py-24">
        <div aria-hidden="true" className="pointer-events-none absolute inset-0">
          <div className="absolute inset-0 grid-paper opacity-30 [mask-image:radial-gradient(circle_at_center,black,transparent_75%)]" />
          <div className="absolute left-1/2 top-1/2 h-[420px] w-[420px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-[radial-gradient(circle,var(--glow),transparent_65%)] blur-2xl" />
        </div>

        <div className="shell relative">
          <div className="mx-auto max-w-xl text-center">
            <span className="label text-[9px] text-accent">Error 404</span>
            <p className="mt-6 font-serif text-[clamp(6rem,18vw,11rem)] leading-none tracking-[-0.04em] text-ink">
              4<span className="italic text-accent">0</span>4
            </p>
            <h1 className="mt-4 font-serif text-[clamp(1.9rem,4vw,2.8rem)] leading-tight text-ink">
              This page took a different route.
            </h1>
            <p className="mx-auto mt-4 max-w-md text-[13.5px] leading-relaxed text-muted">
              The address might be outdated, or the page is still being engineered.
              Let&rsquo;s get you back to familiar ground.
            </p>
            <div className="mt-8 flex flex-wrap items-center justify-center gap-3">
              <Link
                href="/"
                className="group inline-flex items-center gap-2.5 rounded-full bg-ink px-5 py-3 text-[12px] font-semibold text-bg transition-all duration-300 hover:gap-3.5 dark:bg-accent dark:text-accent-contrast"
              >
                <ArrowLeft
                  className="h-3.5 w-3.5 transition-transform duration-300 group-hover:-translate-x-0.5"
                  strokeWidth={1.8}
                  aria-hidden="true"
                />
                Back to portfolio
              </Link>
              <Link
                href="/#work"
                className="inline-flex items-center gap-2 rounded-full border border-line-strong px-5 py-3 text-[12px] font-semibold text-ink transition-colors hover:border-accent hover:text-accent"
              >
                <Compass className="h-3.5 w-3.5" strokeWidth={1.8} aria-hidden="true" />
                Browse selected work
              </Link>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}
