"use client";

import { AnimatePresence, motion, useScroll, useSpring } from "motion/react";
import { ArrowUpRight, Menu, X } from "lucide-react";
import Link from "next/link";
import { useEffect, useState } from "react";
import { frNavigation, frProfile } from "@/lib/content-fr";
import { ThemeToggle } from "../theme-toggle";

type FrHeaderProps = {
  /** When true the nav links are same-page anchors (pillar page). */
  onPillar?: boolean;
};

export function FrHeader({ onPillar = false }: FrHeaderProps) {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const [active, setActive] = useState<string>("");
  const { scrollYProgress } = useScroll();
  const progress = useSpring(scrollYProgress, {
    stiffness: 140,
    damping: 26,
    restDelta: 0.001,
  });

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 10);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    if (!open) return;
    const onKey = (event: KeyboardEvent) => {
      if (event.key === "Escape") setOpen(false);
    };
    document.addEventListener("keydown", onKey);
    document.body.style.overflow = "hidden";
    return () => {
      document.removeEventListener("keydown", onKey);
      document.body.style.overflow = "";
    };
  }, [open]);

  useEffect(() => {
    if (!onPillar) return;
    const sections = frNavigation
      .map((item) => document.getElementById(item.id))
      .filter((section): section is HTMLElement => section !== null);

    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) setActive(entry.target.id);
        }
      },
      { rootMargin: "-40% 0px -55% 0px", threshold: 0 },
    );

    sections.forEach((section) => observer.observe(section));
    return () => observer.disconnect();
  }, [onPillar]);

  const hrefFor = (id: string) => (onPillar ? `#${id}` : `/fr#${id}`);

  return (
    <>
      <motion.div
        aria-hidden="true"
        style={{ scaleX: progress }}
        className="fixed inset-x-0 top-0 z-[70] h-[2px] origin-left bg-accent"
      />

      <header
        className={`fixed inset-x-0 top-0 z-50 transition-all duration-500 ${
          scrolled
            ? "border-b border-line bg-bg/85 backdrop-blur-xl"
            : "border-b border-transparent bg-transparent"
        }`}
      >
        <div className="shell flex h-[74px] items-center justify-between gap-6">
          <Link
            href="/fr"
            className="group flex items-center gap-3"
            aria-label="Calvin Klein Tsefack — retour en haut"
          >
            <span className="relative grid h-10 w-10 place-items-center overflow-hidden rounded-full border border-line-strong bg-surface">
              <span className="font-serif text-[15px] leading-none tracking-[0.02em] text-ink">
                TCK
              </span>
              <span className="absolute inset-0 rounded-full ring-1 ring-inset ring-white/5" />
            </span>
            <span className="hidden sm:block">
              <span className="block text-[13px] font-semibold leading-tight tracking-tight text-ink">
                Calvin Klein Tsefack
              </span>
              <span className="label mt-1 block text-[9px] text-faint">
                Développeur fullstack
              </span>
            </span>
          </Link>

          <nav aria-label="Navigation principale" className="hidden items-center gap-7 md:flex">
            {frNavigation.map((item) => (
              <a
                key={item.id}
                href={hrefFor(item.id)}
                data-active={active === item.id}
                className="nav-link group relative text-[13px] font-medium tracking-tight"
              >
                <span className="mr-1.5 font-mono text-[9px] text-faint">
                  {item.index}
                </span>
                {item.label}
              </a>
            ))}
          </nav>

          <div className="flex items-center gap-2.5">
            <Link
              href="/"
              hrefLang="en"
              className="hidden rounded-full border border-line px-3 py-2 text-[10px] font-semibold uppercase tracking-[0.12em] text-muted transition-colors hover:border-accent hover:text-accent sm:inline-flex"
            >
              EN
            </Link>
            <ThemeToggle />
            <a
              href={hrefFor("contact")}
              className="group hidden items-center gap-2 rounded-full bg-ink px-5 py-2.5 text-[12px] font-semibold tracking-tight text-bg transition-all duration-300 hover:gap-3 sm:inline-flex dark:bg-accent dark:text-accent-contrast"
            >
              Me contacter
              <ArrowUpRight
                className="h-3.5 w-3.5 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
                strokeWidth={2}
              />
            </a>
            <button
              type="button"
              onClick={() => setOpen((value) => !value)}
              aria-expanded={open}
              aria-controls="mobile-menu-fr"
              aria-label={open ? "Fermer le menu" : "Ouvrir le menu"}
              className="grid h-9 w-9 place-items-center rounded-full border border-line text-ink transition-colors hover:bg-bg-soft md:hidden"
            >
              {open ? (
                <X className="h-4 w-4" strokeWidth={1.8} />
              ) : (
                <Menu className="h-4 w-4" strokeWidth={1.8} />
              )}
            </button>
          </div>
        </div>
      </header>

      <AnimatePresence>
        {open && (
          <motion.div
            id="mobile-menu-fr"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-0 z-40 flex flex-col bg-bg pt-[74px] md:hidden"
          >
            <div className="shell flex flex-1 flex-col justify-between overflow-y-auto py-10">
              <nav aria-label="Menu mobile" className="flex flex-col">
                {frNavigation.map((item, index) => (
                  <motion.a
                    key={item.id}
                    href={hrefFor(item.id)}
                    onClick={() => setOpen(false)}
                    initial={{ opacity: 0, y: 14 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{
                      delay: 0.06 + index * 0.05,
                      duration: 0.5,
                      ease: [0.22, 1, 0.36, 1],
                    }}
                    className="group flex items-baseline justify-between border-b border-line py-5"
                  >
                    <span className="flex items-baseline gap-4">
                      <span className="label text-[9px] text-faint">
                        {item.index}
                      </span>
                      <span className="font-serif text-4xl tracking-tight text-ink">
                        {item.label}
                      </span>
                    </span>
                    <ArrowUpRight
                      className="h-5 w-5 text-faint transition-transform duration-300 group-hover:-translate-y-1 group-hover:translate-x-1"
                      strokeWidth={1.5}
                    />
                  </motion.a>
                ))}
              </nav>

              <div className="mt-12 flex flex-col gap-4">
                <a
                  href={`mailto:${frProfile.email}`}
                  className="text-[13px] font-semibold text-ink"
                >
                  {frProfile.email}
                </a>
                <div className="flex items-center gap-4 text-[11px] text-muted">
                  <Link href="/" hrefLang="en" className="link-underline">
                    English version
                  </Link>
                  <span className="text-faint">·</span>
                  <span>Douala, Cameroun</span>
                </div>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
