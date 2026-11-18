import { FrFooter } from "@/components/fr/fr-footer";
import { FrHeader } from "@/components/fr/fr-header";

export default function FrSiteLayout({ children }: LayoutProps<"/fr">) {
  return (
    <div className="flex min-h-dvh flex-col">
      <a
        href="#main"
        className="fixed left-4 top-4 z-[100] -translate-y-24 rounded-full bg-ink px-5 py-3 text-[12px] font-semibold text-bg transition-transform duration-300 focus:translate-y-0 dark:bg-accent dark:text-accent-contrast"
      >
        Aller au contenu
      </a>
      <FrHeader />
      <main id="main" className="flex-1">
        {children}
      </main>
      <FrFooter />
    </div>
  );
}
