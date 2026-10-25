"use client";

import { Moon, Sun } from "lucide-react";

export function ThemeToggle() {
  function toggle() {
    const root = document.documentElement;
    const next = root.classList.contains("dark") ? "light" : "dark";
    root.classList.toggle("dark", next === "dark");
    root.style.colorScheme = next;
    try {
      localStorage.setItem("theme", next);
    } catch {
      /* ignore private-mode storage errors */
    }
  }

  return (
    <button
      type="button"
      onClick={toggle}
      aria-label="Toggle between light and dark mode"
      title="Toggle theme"
      className="relative grid h-9 w-9 place-items-center rounded-full border border-line text-ink transition-colors duration-300 hover:border-line-strong hover:bg-bg-soft"
    >
      <Sun
        aria-hidden="true"
        className="absolute h-[17px] w-[17px] rotate-90 scale-0 opacity-0 transition-all duration-500 dark:rotate-0 dark:scale-100 dark:opacity-100"
        strokeWidth={1.6}
      />
      <Moon
        aria-hidden="true"
        className="absolute h-[17px] w-[17px] rotate-0 scale-100 opacity-100 transition-all duration-500 dark:-rotate-90 dark:scale-0 dark:opacity-0"
        strokeWidth={1.6}
      />
    </button>
  );
}
