import type { ReactNode } from "react";
import { fontClassName, themeScript } from "@/lib/fonts";

type DocumentShellProps = {
  lang: "en" | "fr";
  schema: Record<string, unknown>;
  children: ReactNode;
};

/**
 * Shared <html>/<body> wrapper for the two root layouts (English and French).
 * Keeping it in one place guarantees identical fonts, theme bootstrapping and
 * global styles while still letting each locale declare its own `lang`.
 */
export function DocumentShell({ lang, schema, children }: DocumentShellProps) {
  return (
    <html lang={lang} suppressHydrationWarning className={fontClassName}>
      <head>
        <script dangerouslySetInnerHTML={{ __html: themeScript }} />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
        />
      </head>
      <body className="min-h-dvh bg-bg text-ink">{children}</body>
    </html>
  );
}
